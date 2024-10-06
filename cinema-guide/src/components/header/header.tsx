import { FC } from "react";
import { APP_ROUTES } from "../../app/routes/config";
import { INavigationItem, Navigation } from "../navigation/navigation";
import { Logo } from "../logo/logo";
import "./styles.scss";
import { Search } from "../search/search";

const NavListItems: INavigationItem[] = [
  { label: "Главная", path: APP_ROUTES.root },
  { label: "Жанры", path: APP_ROUTES.genres },
];

export const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <Logo />
        <Navigation list={NavListItems} />
        <Search />
        <button className="login-btn">Войти</button>
      </div>
    </header>
  );
};
