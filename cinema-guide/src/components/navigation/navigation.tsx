import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

export interface INavigationItem {
  label: string;
  path: string;
}

interface INavigationProps {
  list: INavigationItem[];
}

export const Navigation: FC<INavigationProps> = ({ list }) => {
  return (
    <nav className="nav">
      {list.map((item, index) => (
        <li className="nav__item" key={index}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
      <ul className="nav__list"></ul>
    </nav>
  );
};
