import { ReactElement } from "react";
import { IMovie } from "../../app/models/IMovie";
import { MovieMiniCard } from "./movieMiniCard/movieMiniCard";
import "./styles.scss"

export const MovieMiniCardsList = ({
  list,
}: {
  list: IMovie[];
}): ReactElement => {
  return (
    <ul className="movie-mini-cards-list">
      {list.map((movie) => (
        <li key={movie.id}>
          <MovieMiniCard movie={movie}/>
        </li>
      ))}
    </ul>
  );
};
