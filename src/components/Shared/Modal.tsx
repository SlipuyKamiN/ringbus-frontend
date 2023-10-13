import { createPortal } from "react-dom";
import { Backdrop, ModalWrapper } from "./Modal.styled";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({
  children,
  toggleModal,
}: {
  children: React.ReactNode;
  toggleModal: Function;
}) => {
  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;

    if (target.dataset.backdrop) {
      toggleModal();
    }
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.code === "Escape") {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("click", handleClick);
    };
  });

  return createPortal(
    <Backdrop data-backdrop>
      <ModalWrapper>{children}</ModalWrapper>
    </Backdrop>,
    modalRoot as HTMLAnchorElement
  );
};

export default Modal;
