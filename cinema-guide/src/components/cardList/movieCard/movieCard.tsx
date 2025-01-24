import { FC } from "react";
import { IMovie } from "../../../app/models/IMovie";
import "./styles.scss";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../../app/routes/config";

export interface MovieCardProps {
  movie: IMovie;
  position?: number;
}

export const MovieCard: FC<MovieCardProps> = ({ movie, position }) => {

  const { id, posterUrl } = movie;
  return (
    <NavLink
      className="movie-card"
      style={{ backgroundImage: `url(${posterUrl})` }} to={`${APP_ROUTES.movie}/${id}`}    >
      {!posterUrl && (
        <div className="movie-card__plug">
          <Icon icon="ph:smiley-sad-fill" />
          <span>no Image</span>
        </div>
      )}
      {position && <span className="movie-card__position">{position}</span>}
    </NavLink>
  );
};
