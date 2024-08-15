import { FC } from "react";
import { IMovie } from "../../../app/models/IMovie";
import "./styles.scss";
import { url } from "inspector";
import { Icon } from "@iconify/react";

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
      {!movie.backdropUrl && (
        <div className="movie-card__plug">
          <Icon icon="ph:smiley-sad-fill" />
          <span>no Image</span>
        </div>
      )}
      <span className="movie-card__position">{position}</span>
    </div>
  );
};
