import { useContext } from "react";
import ModalContext from "../../util/modalContext";

export default function BorrowBox({}) {
  const modalCtx = useContext(ModalContext);

  function handleBorrow() {
    modalCtx.showRisk();
  }
  return (
    <>
      <div className="buttons-container">
        <div className="borrow-buttons">
          <button className="primary-btn" onClick={handleBorrow}>
            Borrow
          </button>
        </div>
      </div>
    </>
  );
}
