import { Navigate, useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal({ children }) {
  const naviagte = useNavigate();

  function closeHandler() {
    naviagte('..');
  }

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}/>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
