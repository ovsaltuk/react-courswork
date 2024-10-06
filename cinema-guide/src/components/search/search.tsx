import { Icon } from "@iconify/react";
import { ReactElement } from "react";
import "./styles.scss"

export const Search = (): ReactElement => {
  return (
    <div className="search">
      <button className="search__button-search">
        <Icon icon="ri:search-line" />
      </button>
      <input type="text" className="search__input" />
      <button className="search__button-cancel">
        <Icon icon="system-uicons:cross" />
      </button>
    </div>
  );
};
