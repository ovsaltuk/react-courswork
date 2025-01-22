import { ReactElement, useEffect, useState } from "react";
import { GenreCard } from "./genreCard/genreCard";
import { appStore } from "../../app/appStore";
import "./styles.scss";

export const GenresList = (): ReactElement => {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    appStore.api.movieApi.getGenresAsync().then((data) => setGenres(data));
  }, []);
  return (
    <ul className="genres-list">
      {genres.map((genre) => (
        <li className="genres-list__item"><GenreCard genre={genre} /></li>
      ))}
    </ul>
  );
};
