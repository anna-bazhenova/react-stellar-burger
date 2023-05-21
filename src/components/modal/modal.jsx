import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalsRoot = document.getElementById('modals');

function Modal({ children, header, onClose }) {
  return createPortal(
    <ModalOverlay>
      <div className={`${styles.modal} pl-10 pr-10 pt-10 pb-15`}>
        <div className={styles.header_container}>
          <h3 className="text text_type_main-large">{header}</h3>
          <button className={styles.button_close} onClick={onClose}>
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
