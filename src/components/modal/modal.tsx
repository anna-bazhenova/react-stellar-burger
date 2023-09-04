import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { ReactNode, useEffect, MouseEvent} from "react";

const modalsRoot = document.getElementById('modals') as HTMLElement;

type TModalProps = {
  children: ReactNode;
  header: string;
  onClose: () => void;
}

const Modal = ({ children, header, onClose }: TModalProps) => {
  useEffect(() => {
    const closeModalOnEscape = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        onClose();
      }
    };
    
    document.addEventListener("keydown", closeModalOnEscape);

    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    }
  }, [onClose])

  const closeModalOnOverlayClick = (evt: MouseEvent) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }
  
  return createPortal(
    <ModalOverlay onClick={closeModalOnOverlayClick}>
      <div className={`${styles.modal} pl-10 pr-10 pt-10 pb-15`} data-cy="modal">
        <div className={styles.header_container}>
          <h3 className="text text_type_main-large">{header}</h3>
          <button className={styles.button_close} onClick={onClose} data-cy="modal-close-button">
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalsRoot
  );
}

export default Modal;
