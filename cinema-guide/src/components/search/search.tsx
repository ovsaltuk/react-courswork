import { Icon } from "@iconify/react";
import { ReactElement, useEffect, useState } from "react";
import "./styles.scss";
import { appStore } from "../../app/appStore";
import { IMovie } from "../../app/models/IMovie";
import { MovieMiniCardsList } from "../movieMiniCardsList/movieMiniCardsList";

export const Search = (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<IMovie[]>([]);

  useEffect(() => {
    if (!searchValue) {
      setSearchResult([]);
      return;
    }

    const delay = setTimeout(async () => {
      try {
        const result = await appStore.api.movieApi.searchByFiltersAsync({
          count: 5,
          title: searchValue,
        });

        setSearchResult(result);
      } catch (error) {
        console.error("Ошибка при запросе данных:", error);
      }
    }, 300);

    return () => clearTimeout(delay);
  }, [searchValue]);

  return (
    <div className="search">
      <button className="search__button-search">
        <Icon icon="ri:search-line" />
      </button>
      <input
        type="text"
        className="search__input"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        name="searchByTitle"
      />
      <button
        className="search__button-cancel"
        onClick={() => setSearchValue("")}
      >
        <Icon icon="system-uicons:cross" />
      </button>
      {searchResult.length ? <MovieMiniCardsList list={searchResult}/> : null}
    </div>
  );
};
