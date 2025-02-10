import { useState } from "react";
import { Button } from "../button/button";
import { InputWithIcon } from "../inputWithIcon/inputWithIcon";
import { EInputType } from "../../../app/models/enums/inputTypes";
import { useModal } from "../../../app/context/modalContext/modalContext";
import "./styles.scss";
import { appStore } from "../../../app/appStore";
import { useAuth } from "../../../app/context/authContext/authContext";

export const Modal = () => {
  const { isOpen, closeModal } = useModal();
  const [isRegistration, setIsRegistration] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepitPassword] = useState<string>("");

  const { login } = useAuth();

  const handleLoginAsync = async () => {
    try {
      const response = await appStore.api.movieApi.loginAsync(email, password);

      if (response.data.result) {
        login();
        closeModal();
      } else {
        alert("Неверный логин или пароль");
      }
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      alert("Произошла ошибка при выполнении запроса");
    }
  };

  const handleRegistration = () => {
    appStore.api.movieApi.registartionAsync({ email, password, name, surname });
  };

  const handleSubmit = () => {
    isRegistration ? handleRegistration() : handleLoginAsync();
  };

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
        <InputWithIcon
          type={EInputType.Email}
          name="email"
          placeholder="Электронная почта"
          icon="RiMailSendLine"
          isRequired
          onChange={setEmail}
        />
        {isRegistration ? (
          <InputWithIcon
            type={EInputType.Text}
            icon="GoPerson"
            name="name"
            placeholder="Имя"
            isRequired
            onChange={setName}
          />
        ) : null}
        {isRegistration ? (
          <InputWithIcon
            type={EInputType.Text}
            icon="GoPerson"
            name="surname"
            placeholder="Фамилия"
            isRequired
            onChange={setSurname}
          />
        ) : null}
        <InputWithIcon
          type={EInputType.Password}
          icon="RiKeyLine"
          name="password"
          placeholder="Пароль"
          isRequired
          onChange={setPassword}
        />
        {isRegistration ? (
          <InputWithIcon
            type={EInputType.Password}
            icon="RiKeyLine"
            name="password-repeat"
            placeholder="Подтвердите пароль"
            isRequired
            onChange={setRepitPassword}
          />
        ) : null}
        <div className="modal__button-container">
          <Button
            onClick={handleSubmit}
            text={isRegistration ? "Создать аккаунт" : "Войти"}
          />
          <Button
            onClick={() => setIsRegistration(!isRegistration)}
            text={isRegistration ? "У меня есть пароль" : "Регистрация"}
          />
        </div>
      </div>
    </div>
  );
};
