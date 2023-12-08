import Modal from "components/Shared/Modal";
import { MouseEventHandler } from "react";
import {
  CancelBtn,
  FormInput,
  FormLabel,
  InputWrapper,
  ModalBtnsList,
  ModalTable,
  SocialsLink,
  SocialsList,
  SubmitBtn,
  TextArea,
} from "./OrderModal.styled";
import { MdPhone } from "react-icons/md";
import { FaViber, FaWhatsapp, FaInstagram, FaCheck } from "react-icons/fa";
import { IoMdBackspace } from "react-icons/io";
import { LiaTelegram } from "react-icons/lia";

const OrderModal = ({
  toggleModal,
}: {
  toggleModal: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Modal toggleModal={toggleModal}>
      <ModalTable>
        <tr>
          <th>Ваш маршрут</th>
          <th>routeId</th>
        </tr>
        <tr>
          <td>routeBeginCity</td>
          <td>routeBeginDate</td>
        </tr>
        <tr>
          <td>routeEndCity</td>
          <td>routeEndDate</td>
        </tr>
      </ModalTable>
      <h2 className="modal__title">
        {"Натисніть на іконку для зв'язку з водієм"}
      </h2>
      <SocialsList className="socials socials--add-margin-bottom">
        <li className="socials__item">
          <SocialsLink
            href="#"
            className="socials__link"
            rel="noopener nofollow noreferrer"
          >
            <MdPhone size={40} />
          </SocialsLink>
        </li>
        <li className="socials__item">
          <SocialsLink
            href="#"
            target="_blank"
            className="viber"
            rel="noopener nofollow noreferrer"
          >
            <FaViber size={40} />
          </SocialsLink>
        </li>
        <li className="socials__item">
          <SocialsLink
            href="#"
            target="_blank"
            className="telegram"
            rel="noopener nofollow noreferrer"
          >
            <LiaTelegram size={40} />
          </SocialsLink>
        </li>
        <li className="socials__item">
          <SocialsLink
            href="#"
            target="_blank"
            rel="noopener nofollow noreferrer"
            className="whatsapp"
          >
            <FaWhatsapp size={40} />
          </SocialsLink>
        </li>

        <li className="socials__item">
          <SocialsLink
            href="#"
            target="_blank"
            className="instagram"
            rel="noopener nofollow noreferrer"
          >
            <FaInstagram size={40} />
          </SocialsLink>
        </li>
      </SocialsList>
      <p className="modal__subtitle">АБО</p>
      <h2 className="modal__title">
        {"Залиште свої дані, з Вами зв'яжеться водій"}
      </h2>
      <form className="modal-form" autoComplete="off" data-modal-form>
        <InputWrapper className="modal__form">
          <FormLabel>{"Ім'я"}</FormLabel>
          <FormInput
            type="text"
            name="name"
            id="name"
            className="modal__input"
            placeholder="Ім'я"
            required
            pattern="[a-zA-Z\u0400-\u04ff]{3,30}"
          />
        </InputWrapper>
        <InputWrapper className="modal__form">
          <FormLabel>Телефон*</FormLabel>
          <FormInput
            type="tel"
            name="tel"
            id="tel"
            className="modal__input"
            placeholder="+380990011222"
            required
            pattern="\+?[0-9\s\-\(\)]+"
            minLength={10}
            maxLength={13}
          />
        </InputWrapper>
        <InputWrapper className="modal__textarea">
          <FormLabel>Коментар</FormLabel>
          <TextArea name="comment" id="comment" placeholder="Введіть текст" />
        </InputWrapper>
        <ModalBtnsList className="modal__btns">
          <li>
            <CancelBtn
              type="button"
              className="btn modal__btn"
              onClick={toggleModal}
            >
              Скасувати
              <IoMdBackspace />
            </CancelBtn>
          </li>
          <li>
            <SubmitBtn
              type="submit"
              className="btn modal__btn modal__btn--submit"
            >
              Підтвердити
              <FaCheck />
            </SubmitBtn>
          </li>
        </ModalBtnsList>
      </form>
    </Modal>
  );
};

export default OrderModal;
