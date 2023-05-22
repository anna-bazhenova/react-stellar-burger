import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import { useEffect } from "react";
import PropTypes from "prop-types";

const modalsRoot = document.getElementById('modals');

function Modal({ children, header, onClose }) {
  useEffect(() => {
    document.addEventListener("keydown", closeModalOnEscape);

    return () => {
      document.removeEventListener("keydown", closeModalOnEscape);
    }
  }, [])

  const closeModalOnEscape = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  const closeModalOnOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  }
  
  return createPortal(
    <ModalOverlay onClick={closeModalOnOverlayClick}>
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

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal;
