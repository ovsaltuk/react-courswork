import { FC } from "react";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../app/routes/config";

export const Header: FC = () => {
  return (
    <header className="header">
      <div>logo</div>
      <div>
        <Link to={APP_ROUTES.root}>Главная</Link>
        <Link to={APP_ROUTES.genres}>Жанры</Link>
      </div>
      <div>Search</div>
      <div>login</div>
    </header>
  );
};
