import { ReactElement } from "react";
import { IMovie } from "../../../app/models/IMovie";
import { formatDuration } from "../../../app/common/utils/formatDuration";
import { ESize } from "../../../app/models/enums/common";
import { Rating } from "../../common/rating/rating";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { APP_ROUTES } from "../../../app/routes/config";

export const MovieMiniCard = ({ movie }: { movie: IMovie }): ReactElement => {
  const { releaseYear, genres, runtime, posterUrl, title, tmdbRating, id } =
    movie;

  return (
    <NavLink className="movie-mini-card" to={`${APP_ROUTES.movie}/${id}`}>
      <img src={posterUrl} alt={title} className="movie-mini-card__img" />
      <div className="movie-mini-card__description">
        <div className="movie-mini-card__info">
          <Rating size={ESize.s} rating={tmdbRating} />
          <span>{releaseYear}</span>
          <span>{genres[0]}</span>
          <span>{formatDuration(runtime)}</span>
        </div>
        <span className="movie-mini-card__title">{title}</span>
      </div>
    </NavLink>
  );
};
