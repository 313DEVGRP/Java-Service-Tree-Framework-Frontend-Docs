import axios from 'axios';
import type { CommandKeyToData } from '@blocksuite/block-std';
import {
  type AffineFormatBarWidget,
  BoldIcon,
  BulletedListIcon,
  CheckBoxIcon,
  CodeIcon,
  DatabaseTableViewIcon20,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  Heading6Icon,
  ItalicIcon,
  LinkIcon,
  NumberedListIcon,
  QuoteIcon,
  StrikethroughIcon,
  TextIcon,
  UnderlineIcon,
} from '@blocksuite/blocks';
import { createSimplePortal } from '@blocksuite/blocks/_common/components/portal';
import { DATABASE_CONVERT_WHITE_LIST } from '@blocksuite/blocks/_common/configs/quick-action/database-convert-view';
import {
  convertSelectedBlocksToLinkedDoc,
  getTitleFromSelectedModels,
  notifyDocCreated,
} from '@blocksuite/blocks/_common/utils/render-linked-doc';
import { assertExists } from '@blocksuite/global/utils';
import { html } from 'lit';
import { EditorHost } from '@blocksuite/block-std';

export const ARMSIcon = html`<img width="35" src="/imgs/req.png" />`;

export function setupFormatBarEntry(formatBar: AffineFormatBarWidget) {
  toolbarDefaultConfig(formatBar);
  // formatBar.addRawConfigItems( //'ctrl + A' key : AI 버튼 삭제
  //   [
  //     {
  //       type: 'custom' as const,
  //       render(formatBar: AffineFormatBarWidget): TemplateResult | null {
  //         return html` <ask-ai-button
  //           .host=${formatBar.host}
  //           .actionGroups=${AIItemGroups}
  //           .toggleType=${'hover'}
  //         ></ask-ai-button>`;
  //       },
  //     },
  //     { type: 'divider' },
  //   ],
  //   0
  // );
}

export function toolbarDefaultConfig(toolbar: AffineFormatBarWidget) {
  toolbar
    .clearConfig()
    .addParagraphDropdown()
    .addDivider()
    .addTextStyleToggle({
      key: 'bold',
      action: chain => chain.toggleBold().run(),
      icon: BoldIcon,
    })
    .addTextStyleToggle({
      key: 'italic',
      action: chain => chain.toggleItalic().run(),
      icon: ItalicIcon,
    })
    .addTextStyleToggle({
      key: 'underline',
      action: chain => chain.toggleUnderline().run(),
      icon: UnderlineIcon,
    })
    .addTextStyleToggle({
      key: 'strike',
      action: chain => chain.toggleStrike().run(),
      icon: StrikethroughIcon,
    })
    .addTextStyleToggle({
      key: 'code',
      action: chain => chain.toggleCode().run(),
      icon: CodeIcon,
    })
    .addTextStyleToggle({
      key: 'link',
      action: chain => chain.toggleLink().run(),
      icon: LinkIcon,
    })
    .addDivider()
    .addHighlighterDropdown()
    .addDivider()
    .addInlineAction({
      id: 'convert-to-database',
      name: 'Create Data Table & Kanban Board',
      icon: DatabaseTableViewIcon20,
      isActive: () => false,
      action: () => {
        createSimplePortal({
          template: html`<database-convert-view
            .host=${toolbar.host}
          ></database-convert-view>`,
        });
      },
      showWhen: chain => {
        const middleware = (count = 0) => {
          return (
            ctx: CommandKeyToData<'selectedBlocks'>,
            next: () => void
          ) => {
            const { selectedBlocks } = ctx;
            if (!selectedBlocks || selectedBlocks.length === count) return;

            const allowed = selectedBlocks.every(block =>
              DATABASE_CONVERT_WHITE_LIST.includes(block.flavour)
            );
            if (!allowed) return;

            next();
          };
        };
        let [result] = chain
          .getTextSelection()
          .getSelectedBlocks({
            types: ['text'],
          })
          .inline(middleware(1))
          .run();

        if (result) return true;

        [result] = chain
          .tryAll(chain => [
            chain.getBlockSelections(),
            chain.getImageSelections(),
          ])
          .getSelectedBlocks({
            types: ['block', 'image'],
          })
          .inline(middleware(0))
          .run();

        return result;
      },
    })
    .addDivider()
    .addInlineAction({
      id: 'convert-to-linked-doc',
      name: '드래그 한 내용을 A-RMS에 요구사항으로 등록 + 하위 요구사항 페이지 생성',
      icon: ARMSIcon,
      isActive: () => false,
      action: (chain, formatBar) => {
        const [_, ctx] = chain
          .getSelectedModels({
            types: ['block', 'text'],
            mode: 'highest',
          })
          .run();
        const { selectedModels } = ctx;
        assertExists(selectedModels);
        if (!selectedModels.length) return;

        const host = formatBar.host;
        host.selection.clear();

        const doc = host.doc;
        const autofill = getTitleFromSelectedModels(selectedModels);
        void promptDocTitle(host, autofill).then(title => {
          if (title === null) return;
          const linkedDoc = convertSelectedBlocksToLinkedDoc(
            doc,
            selectedModels,
            title
          );
          const linkedDocService = host.spec.getService(
            'affine:embed-linked-doc'
          );
          linkedDocService.slots.linkedDocCreated.emit({ docId: linkedDoc.id });
          notifyDocCreated(host, doc);
          host.spec
            .getService('affine:page')
            .telemetryService?.track('DocCreated', {
              control: 'create linked doc',
              page: 'doc editor',
              module: 'format toolbar',
              type: 'embed-linked-doc',
            });
          host.spec
            .getService('affine:page')
            .telemetryService?.track('LinkedDocCreated', {
              control: 'create linked doc',
              page: 'doc editor',
              module: 'format toolbar',
              type: 'embed-linked-doc',
            });
          console.log('여기에서 ARMS 연동');
          arms_add_req();
        });
      },
      showWhen: chain => {
        const [_, ctx] = chain
          .getSelectedModels({
            types: ['block', 'text'],
            mode: 'highest',
          })
          .run();
        const { selectedModels } = ctx;
        return !!selectedModels && selectedModels.length > 0;
      },
    })
    .addBlockTypeSwitch({
      flavour: 'affine:paragraph',
      type: 'text',
      name: 'Text',
      icon: TextIcon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:paragraph',
      type: 'h1',
      name: 'Heading 1',
      icon: Heading1Icon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:paragraph',
      type: 'h2',
      name: 'Heading 2',
      icon: Heading2Icon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:paragraph',
      type: 'h3',
      name: 'Heading 3',
      icon: Heading3Icon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:paragraph',
      type: 'h4',
      name: 'Heading 4',
      icon: Heading4Icon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:paragraph',
      type: 'h5',
      name: 'Heading 5',
      icon: Heading5Icon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:paragraph',
      type: 'h6',
      name: 'Heading 6',
      icon: Heading6Icon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:list',
      type: 'bulleted',
      name: 'Bulleted List',
      icon: BulletedListIcon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:list',
      type: 'numbered',
      name: 'Numbered List',
      icon: NumberedListIcon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:list',
      type: 'todo',
      name: 'To-do List',
      icon: CheckBoxIcon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:code',
      name: 'Code Block',
      icon: CodeIcon,
    })
    .addBlockTypeSwitch({
      flavour: 'affine:paragraph',
      type: 'quote',
      name: 'Quote',
      icon: QuoteIcon,
    });
}

export function promptDocTitle(host: EditorHost, autofill?: string) {
  const notification =
    host.std.spec.getService('affine:page').notificationService;
  if (!notification) return Promise.resolve(undefined);

  return notification.prompt({
    title: 'A-RMS 요구사항 생성',
    message:
      '드래그한 부분을 A-RMS에 요구사항을 생성합니다. \n또한 요구사항 하위 페이지를 구성합니다.\n',
    placeholder: 'Untitled',
    autofill,
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  });
}
async function arms_add_req() {

  // GET 요청
  // @ts-ignore
  await axios({
    method: 'get',
    url: '/api/auth/arms',
    params: {
      c_title: '요구사항 테스트',
      c_req_pdservice_link: 11,
      c_req_pdservice_versionset_link: '["37"]',
      c_req_contents: '<p>요구사항&nbsp;내용을&nbsp;기록합니다.&nbsp;with Dmove</p>',
      c_req_desc: '설명',
      c_req_etc: '비고'
    },
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    crossDomain: true
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });

}
