import { FC } from "react";
import { APP_ROUTES } from "../../app/routes/config";
import { INavigationItem, Navigation } from "../navigation/navigation";
import { Logo } from "../logo/logo";
import "./styles.scss";

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
        <div>Search</div>
        <div>login</div>
      </div>
    </header>
  );
};
