import { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./modal.css";
import closeImg from "../../assets/BrandingAssets-main/Icons/close-icon.png";
import ModalContext from "../../util/modalContext";

function Modal({ children, open, onClose }) {
  const dialog = useRef();

  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  const handleClose = () => {
    modalCtx.hideModal();
  };

  return createPortal(
    <dialog className="modal popup-container" ref={dialog} onClose={onClose}>
      <button className="close-button" onClick={handleClose}>
        <img src={closeImg} alt="x" />
      </button>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
