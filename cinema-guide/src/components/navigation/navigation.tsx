import { FC } from "react";
import { Link } from "react-router-dom";
import "./styles.scss"

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
        <li className="nav__item" key={index}><Link to={item.path}>{item.label}</Link></li>
      ))}
      <ul className="nav__list"></ul>
    </nav>
  );
};
