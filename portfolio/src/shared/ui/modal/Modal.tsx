import React, { useEffect } from "react";

import "./Modal.scss";

interface AuxProps {
  children: JSX.Element[] | JSX.Element;
  closeModal: () => void;
}

const Modal: React.FC<AuxProps> = ({ children, closeModal }) => {
  //@ts-ignore
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
