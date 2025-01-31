import { useState } from "react";
import { Button } from "../button/button";
import "./styles.scss";

export const Modal = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const handleFormSubmit = (event: React.FormEvent): void => {
    console.log(event);
  };
  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__close-btn">
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
        <span>Регистрация</span>
        <form onSubmit={handleFormSubmit} className="modal__form">
          <input type="email" name="email" placeholder="Электронная почта" />
          <input type="text" name="name" placeholder="Имя" />
          <input type="text" name="surname" placeholder="Фамилия" />
          <input type="password" name="password" placeholder="Пароль" />
          <input
            type="password"
            name="password-repeat"
            placeholder="Подтвердите пароль"
          />
        </form>
        <div className="modal__button-container">
          <Button onClick={() => {}} text="Войти" />
          <Button onClick={() => {}} text="Регистрация" />
        </div>
      </div>
    </div>
  );
};
