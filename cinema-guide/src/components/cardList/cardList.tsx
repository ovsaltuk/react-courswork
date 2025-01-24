import { FC } from "react";
import { IMovie } from "../../app/models/IMovie";
import "./styles.scss";
import { MovieCard } from "./movieCard/movieCard";

interface IMovieCardsListProps {
  movieList: IMovie[];
  isTopTen?: boolean;
}

export const MovieCardsList: FC<IMovieCardsListProps> = ({
  movieList,
  isTopTen = false,
}) => {
  return (
    <ul className="card-list">
      {movieList.map((movie, index) => (
        <li key={movie.id} className="card-list__card">
          {isTopTen ? (
            <MovieCard movie={movie} position={index + 1} />
          ) : (
            <MovieCard movie={movie} />
          )}
        </li>
      ))}
    </ul>
  );
};
