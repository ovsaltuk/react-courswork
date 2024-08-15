import { FC } from "react";
import { IMovie } from "../../../app/models/IMovie";
import "./styles.scss";
import { url } from "inspector";

export interface MovieCardProps {
  movie: IMovie;
  position: number;
}

export const MovieCard: FC<MovieCardProps> = ({ movie, position }) => {
  return (
    <div
      className="movie-card"
      style={{ backgroundImage: `url(${movie.posterUrl})` }}
    >
      <span className="movie-card__position">{position}</span>
    </div>
  );
};
