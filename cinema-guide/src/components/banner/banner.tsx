import { FC } from "react";
import { IMovie } from "../../app/models/IMovie";
import "./styles.scss";
import { Button, EButtonType } from "../common/button/button";
import { Rating } from "../common/rating/rating";
import { ESize } from "../../app/models/enums/common";
import { formatDuration } from "../../app/common/utils/formatDuration";

interface IBannerProps {
  movie: IMovie;
}

export const Banner: FC<IBannerProps> = ({ movie }) => {
  return (
    <div className="banner-movie">
      <div className="banner-movie__info">
        <div className="banner-movie__top-panel">
          <Rating rating={movie?.tmdbRating} size={ESize.large} />
          <span>{movie?.releaseYear}</span>
          <span>{movie.genres && movie.genres.join(" ")}</span>
          <span>{formatDuration(movie?.runtime)}</span>
        </div>
        <h1 className="banner-movie__title">{movie?.title}</h1>
        <p className="banner-movie__plot">{movie?.plot}</p>
        <div className="banner-movie__btn-container">
          <Button
            onClick={() => {}}
            text="Трейлер"
            type={EButtonType.Primary}
          />
          <Button
            onClick={() => {}}
            text="О Фильме"
            type={EButtonType.Primary}
          />
          <Button
            onClick={() => {}}
            icon="mdi:heart-outline"
            type={EButtonType.Primary}
          />
          <Button
            onClick={() => {}}
            icon="pepicons-pop:arrows-spin"
            type={EButtonType.Primary}
          />
        </div>
      </div>
      <div
        className="banner-movie__background"
        style={{ backgroundImage: `url(${movie?.backdropUrl})` }}
      ></div>
    </div>
  );
};
