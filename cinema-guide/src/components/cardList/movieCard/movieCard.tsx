import { FC } from "react";
import { IMovie } from "../../../app/models/IMovie";
import "./styles.scss";

export interface MovieCardProps {
  
  movie: IMovie;
}

export const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
    </div>
  );
};
