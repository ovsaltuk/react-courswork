import { useState } from "react";
import { Button } from "../button/button";
import "./styles.scss";
import { InputWithIcon } from "../inputWithIcon/inputWithIcon";
import { EInputType } from "../../../app/models/enums/inputTypes";
import { useModal } from "../../../app/context/modalContext/modalContext";

export const Modal = () => {
  const { isOpen, closeModal } = useModal();
  const [isRegistration, setIsRegistration] = useState<boolean>(false);

  const handleFormSubmit = (event: React.FormEvent): void => {};

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__close-btn" onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M7.293 8L3.146 3.854a.5.5 0 1 1 .708-.708L8 7.293l4.146-4.147a.5.5 0 0 1 .708.708L8.707 8l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707l-4.146 4.147a.5.5 0 0 1-.708-.708z"
            ></path>
          </svg>
        </div>
        <div className="modal__header">
          <img src={`${process.env.PUBLIC_URL}/logo__black.png`} alt="logo" />
        </div>
        {isRegistration ? <span>Регистрация</span> : null}
        <form className="modal__form" onSubmit={handleFormSubmit}>
          <InputWithIcon
            type={EInputType.Email}
            name="email"
            placeholder="Электронная почта"
            icon="RiMailSendLine"
            isRequired
          />
          {isRegistration ? (
            <InputWithIcon
              type={EInputType.Text}
              icon="GoPerson"
              name="name"
              placeholder="Имя"
              isRequired
            />
          ) : null}
          {isRegistration ? (
            <InputWithIcon
              type={EInputType.Text}
              icon="GoPerson"
              name="surname"
              placeholder="Фамилия"
              isRequired
            />
          ) : null}
          <InputWithIcon
            type={EInputType.Password}
            icon="RiKeyLine"
            name="password"
            placeholder="Пароль"
            isRequired
          />
          {isRegistration ? (
            <InputWithIcon
              type={EInputType.Password}
              icon="RiKeyLine"
              name="password-repeat"
              placeholder="Подтвердите пароль"
              isRequired
            />
          ) : null}
          <div className="modal__button-container">
            <Button
              onClick={() => {}}
              text={isRegistration ? "Создать аккаунт" : "Войти"}
            />
            <Button
              onClick={() => setIsRegistration(!isRegistration)}
              text={isRegistration ? "У меня есть пароль" : "Регистрация"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
