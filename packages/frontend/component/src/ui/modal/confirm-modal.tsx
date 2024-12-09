import { DialogTrigger } from '@radix-ui/react-dialog';
import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import { createContext, useCallback, useContext, useState } from 'react';

import type { ButtonProps } from '../button';
import { Button } from '../button';
import type { ModalProps } from './modal';
import { Modal } from './modal';
import * as styles from './styles.css';

import Multiselect from 'multiselect-react-dropdown';

export interface ConfirmModalProps extends ModalProps {
  confirmButtonOptions?: Omit<ButtonProps, 'children'>;
  onConfirm?: (() => void) | (() => Promise<void>);
  onCancel?: () => void;
  confirmText?: React.ReactNode;
  cancelText?: React.ReactNode;
  cancelButtonOptions?: Omit<ButtonProps, 'children'>;
  reverseFooter?: boolean;
  /**
   * Auto focus on confirm button when modal opened
   * @default true
   */
  autoFocusConfirm?: boolean;
}

export const ConfirmModal = ({
  children,
  confirmButtonOptions,
  // FIXME: we need i18n
  confirmText,
  cancelText = 'Cancel',
  cancelButtonOptions,
  reverseFooter,
  onConfirm,
  onCancel,
  width = 480,
  autoFocusConfirm = true,
  ...props
}: ConfirmModalProps) => {
  const onConfirmClick = useCallback(() => {
    Promise.resolve(onConfirm?.()).catch(err => {
      console.error(err);
    });
  }, [onConfirm]);
  return (
    <Modal
      contentOptions={{
        className: styles.confirmModalContainer,
        onPointerDownOutside: e => {
          e.stopPropagation();
          onCancel?.();
        },
      }}
      width={width}
      closeButtonOptions={{
        onClick: onCancel,
      }}
      {...props}
    >
      {children ? (
        <div className={styles.confirmModalContent}>{children}</div>
      ) : null}

      <div>
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <p>✔ 요구사항을 생성할 대상 제품(서비스) + 버전을 선택하세요.</p>
        <div style={{display:'table'}}>
          <span style={{display:'table-cell', verticalAlign:'middle', width:'120px', textAlign:'right'}}>제품(서비스) → &nbsp;</span>
          <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck(){}}
            onRemove={function noRefCheck(){}}
            onSearch={function noRefCheck(){}}
            onSelect={function noRefCheck(){}}
            options={[
              {
                cat: 'Group 1',
                key: 'Option 1'
              },
              {
                cat: 'Group 1',
                key: 'Option 2'
              },
              {
                cat: 'Group 1',
                key: 'Option 3'
              },
              {
                cat: 'Group 2',
                key: 'Option 4'
              },
              {
                cat: 'Group 2',
                key: 'Option 5'
              },
              {
                cat: 'Group 2',
                key: 'Option 6'
              },
              {
                cat: 'Group 2',
                key: 'Option 7'
              }
            ]}
            placeholder="요구사항 생성 → 제품(서비스)"
            style={{
              searchBox: {
                border: 'none',
                'border-bottom': '1px solid blue',
                'border-radius': '0px',
              }
            }}
            singleSelect
          />
        </div>
        <div style={{display:'table'}}>
          <span style={{display:'table-cell', verticalAlign:'middle', width:'120px', textAlign:'right'}}>버전 → &nbsp;</span>
          <Multiselect
            displayValue="key"
            onKeyPressFn={function noRefCheck(){}}
            onRemove={function noRefCheck(){}}
            onSearch={function noRefCheck(){}}
            onSelect={function noRefCheck(){}}
            options={[
              {
                cat: 'Group 1',
                key: 'Option 1'
              },
              {
                cat: 'Group 1',
                key: 'Option 2'
              },
              {
                cat: 'Group 1',
                key: 'Option 3'
              },
              {
                cat: 'Group 2',
                key: 'Option 4'
              },
              {
                cat: 'Group 2',
                key: 'Option 5'
              },
              {
                cat: 'Group 2',
                key: 'Option 6'
              },
              {
                cat: 'Group 2',
                key: 'Option 7'
              }
            ]}
            placeholder="제품(서비스)의 Version 선택"
            style={{
              chips: {
                background: 'red',
              },
              multiselectContainer: {
                color: 'red',
              },
              searchBox: {
                border: 'none',
                'border-bottom': '1px solid blue',
                'border-radius': '0px',
              }
            }}
          />
        </div>
    </div>




      <div
        className={clsx(styles.modalFooter, {
          modalFooterWithChildren: !!children,
          reverse: reverseFooter,
        })}
      >
        <DialogTrigger asChild>
          <Button
            onClick={onCancel}
            data-testid="confirm-modal-cancel"
            {...cancelButtonOptions}
          >
            {cancelText}
          </Button>
        </DialogTrigger>
        <Button
          onClick={onConfirmClick}
          data-testid="confirm-modal-confirm"
          autoFocus={autoFocusConfirm}
          {...confirmButtonOptions}
        >
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
};

interface OpenConfirmModalOptions {
  autoClose?: boolean;
  onSuccess?: () => void;
}
interface ConfirmModalContextProps {
  modalProps: ConfirmModalProps;
  openConfirmModal: (
    props?: ConfirmModalProps,
    options?: OpenConfirmModalOptions
  ) => void;
  closeConfirmModal: () => void;
}
const ConfirmModalContext = createContext<ConfirmModalContextProps>({
  modalProps: { open: false },
  openConfirmModal: () => {},
  closeConfirmModal: () => {},
});
export const ConfirmModalProvider = ({ children }: PropsWithChildren) => {
  const [modalProps, setModalProps] = useState<ConfirmModalProps>({
    open: false,
  });

  const setLoading = useCallback((value: boolean) => {
    setModalProps(prev => ({
      ...prev,
      confirmButtonOptions: {
        ...prev.confirmButtonOptions,
        loading: value,
      },
    }));
  }, []);

  const closeConfirmModal = useCallback(() => {
    setModalProps({ open: false });
  }, []);

  const openConfirmModal = useCallback(
    (props?: ConfirmModalProps, options?: OpenConfirmModalOptions) => {
      const { autoClose = true, onSuccess } = options ?? {};
      if (!props) {
        setModalProps({ open: true });
        return;
      }

      const { onConfirm: _onConfirm, ...otherProps } = props;

      const onConfirm = () => {
        setLoading(true);
        return Promise.resolve(_onConfirm?.())
          .then(() => onSuccess?.())
          .catch(console.error)
          .finally(() => setLoading(false))
          .finally(() => autoClose && closeConfirmModal());
      };
      setModalProps({ ...otherProps, onConfirm, open: true });
    },
    [closeConfirmModal, setLoading]
  );

  const onOpenChange = useCallback(
    (open: boolean) => {
      modalProps.onOpenChange?.(open);
      setModalProps(props => ({ ...props, open }));
    },
    [modalProps]
  );

  return (
    <ConfirmModalContext.Provider
      value={{ openConfirmModal, closeConfirmModal, modalProps }}
    >
      {children}
      {/* TODO(@catsjuice): multi-instance support(unnecessary for now) */}
      <ConfirmModal {...modalProps} onOpenChange={onOpenChange} />
    </ConfirmModalContext.Provider>
  );
};

export const useConfirmModal = () => {
  const context = useContext(ConfirmModalContext);
  if (!context) {
    throw new Error(
      'useConfirmModal must be used within a ConfirmModalProvider'
    );
  }
  return {
    openConfirmModal: context.openConfirmModal,
    closeConfirmModal: context.closeConfirmModal,
  };
};
