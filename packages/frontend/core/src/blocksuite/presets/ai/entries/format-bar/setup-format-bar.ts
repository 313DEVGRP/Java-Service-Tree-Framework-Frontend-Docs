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
import {EditorHost} from "@blocksuite/block-std";

export const ARMSIcon = html`<img width="35" src="/imgs/req.png"/>`;

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
          console.log("여기에서 ARMS 연동");
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
    message: '드래그한 부분을 A-RMS에 요구사항을 생성합니다. \n또한 요구사항 하위 페이지를 구성합니다.\n',
    placeholder: 'Untitled',
    autofill,
    confirmText: 'Confirm',
    cancelText: 'Cancel',
  });
}

export function arms_add_req() {

  var c_title: '요구사항 테스트';
  var c_req_pdservice_link: 11;
  var c_req_pdservice_versionset_link: '["37"]';
  var c_req_contents: '<p>요구사항&nbsp;내용을&nbsp;기록합니다.&nbsp;with Dmove</p>';
  var c_req_desc: '설명';
  var c_req_etc: '비고';

  var c_req_start_date = 'Mon Nov 18 2024 00:00:00 GMT+0900 (한국 표준시)';
  var c_req_end_date = 'Fri Nov 29 2024 00:00:00 GMT+0900 (한국 표준시)';
  var c_req_writer = '[admin] - 9af24080-050d-4943-b40e-d789c0f976ee';
  var c_req_priority_link = 7;
  var c_req_difficulty_link= 3;
  var c_req_state_link= 10;
  var c_req_reviewer01 = '[admin] - 9af24080-050d-4943-b40e-d789c0f976ee';
  var c_req_reviewer02 = 'none';
  var c_req_reviewer03 = 'none';
  var c_req_reviewer04 = 'none';
  var c_req_reviewer05 = 'none';
  var c_req_reviewer01_status= 'Draft';
  var c_req_reviewer02_status= 'Draft';
  var c_req_reviewer03_status= 'Draft';
  var c_req_reviewer04_status= 'Draft';
  var c_req_reviewer05_status= 'Draft';
  // 인증을 통과하면 ARMS API를 호출합니다.
  // 미들 프록시를 거치지 않고 다이렉트로 백엔드 호출 합니다.
  // @ts-ignore
  axios({
    method: 'post',
    url: 'http://backend-core:31313/arms/reqAdd/T_ARMS_REQADD_11/addNode.do',
    data: { // 전송할 데이터
      ref : 2,
      c_title : c_title,
      c_type : "default",
      c_req_pdservice_link : c_req_pdservice_link,
      c_req_pdservice_versionset_link : c_req_pdservice_versionset_link,
      c_req_start_date : c_req_start_date,
      c_req_end_date : c_req_end_date,
      c_req_writer : c_req_writer,
      c_req_contents : c_req_contents,
      c_req_desc : c_req_desc,
      c_req_etc : c_req_etc,
      c_req_priority_link : c_req_priority_link,
      c_req_difficulty_link : c_req_difficulty_link,
      c_req_state_link : c_req_state_link,
      c_req_reviewer01 : c_req_reviewer01,
      c_req_reviewer02 : c_req_reviewer02,
      c_req_reviewer03 : c_req_reviewer03,
      c_req_reviewer04 : c_req_reviewer04,
      c_req_reviewer05 : c_req_reviewer05,
      c_req_reviewer01_status : c_req_reviewer01_status,
      c_req_reviewer02_status : c_req_reviewer02_status,
      c_req_reviewer03_status : c_req_reviewer03_status,
      c_req_reviewer04_status : c_req_reviewer04_status,
      c_req_reviewer05_status : c_req_reviewer05_status,
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
