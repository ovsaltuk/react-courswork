import { ReactElement } from "react";
import { IMovie } from "../../../app/models/IMovie";
import { formatDuration } from "../../../app/common/utils/formatDuration";
import { ESize } from "../../../app/models/enums/common";
import { Rating } from "../../common/rating/rating";
import "./styles.scss";
import { NavLink } from "react-router-dom";

export const MovieMiniCard = ({movie}: {movie: IMovie}): ReactElement => {
  return (
    <NavLink className="movie-mini-card" to="#">
      <img src={movie.posterUrl} alt={movie.title} className="movie-mini-card__img"/>
      <div className="movie-mini-card__description">
        <div className="movie-mini-card__info">
          <Rating size={ESize.s} rating={movie.tmdbRating} />
          <span>{movie.releaseYear}</span>
          <span>{movie.genres[0]}</span>
          <span>{formatDuration(movie.runtime)}</span>
        </div>
        <span className="movie-mini-card__title">{movie.title}</span>
      </div>
    </NavLink>
  );
};
