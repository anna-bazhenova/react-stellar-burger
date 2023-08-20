import { MouseEvent } from "react";
import styles from "./modal-overlay.module.css";

type TModalOverlayProps = {
  children: React.ReactNode;
  onClick: (evt: MouseEvent) => void;
}

const ModalOverlay = ({ children, onClick }: TModalOverlayProps) => {
  return (
    <div className={styles.overlay} onClick={onClick}>
      {children}
    </div>
  );
}

export default ModalOverlay;
