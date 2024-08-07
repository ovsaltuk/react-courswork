import { FC } from "react";
import { Link } from "react-router-dom";

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
      {list.map((item) => (
        <li className="nav__item"><Link to={item.path}>{item.label}</Link></li>
      ))}
      <ul className="nav__list"></ul>
    </nav>
  );
};
