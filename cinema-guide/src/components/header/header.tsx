import { FC } from "react";
import { APP_ROUTES } from "../../app/routes/config";
import { INavigationItem, Navigation } from "../navigation/navigation";
import { Logo } from "../logo/logo";
import "./styles.scss";
import { Search } from "../search/search";
import { useModal } from "../../app/context/modalContext/modalContext";

const NavListItems: INavigationItem[] = [
  { label: "Главная", path: APP_ROUTES.root },
  { label: "Жанры", path: APP_ROUTES.genres },
];

export const Header: FC = () => {
  const { openModal } = useModal();

  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Navigation list={NavListItems} />
        <Search />
        <button className="login-btn" onClick={openModal}>
          Войти
        </button>
      </div>
    </header>
  );
};
