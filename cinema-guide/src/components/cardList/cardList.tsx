import { FC } from "react";
import { IMovie } from "../../app/models/IMovie";
import "./styles.scss";
import { MovieCard } from "./movieCard/movieCard";

interface IMovieCardsListProps {
  movieList: IMovie[];
}

export const MovieCardsList: FC<IMovieCardsListProps> = ({ movieList }) => {
  return (
    <ul className="card-list">
      {movieList.map((movie, index) => (
        <li key={movie.id} className="card-list__card">
          <MovieCard movie={movie} position={index + 1} />
        </li>
      ))}
    </ul>
  );
};
