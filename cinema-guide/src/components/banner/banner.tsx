import { useEffect, useState } from "react";
import "./styles.scss";
import { Button, EButtonType } from "../common/button/button";
import { Rating } from "../common/rating/rating";
import { ESize } from "../../app/models/enums/common";
import { formatDuration } from "../../app/common/utils/formatDuration";
import { IMovie } from "../../app/models/IMovie";
import { appStore } from "../../app/appStore";

export const Banner = () => {
  const [movie, setMovie] = useState<IMovie | undefined>(undefined);

  const fetchMovie = async () => {
    const movieData = await appStore.api.movieApi.getRandomMovieAsync();
    setMovie(movieData);
  };
  useEffect(() => {
    fetchMovie(); 
  }, []);

  return (
    <div className="banner-movie">
      {movie && (
        <>
          <div className="banner-movie__info">
            <div className="banner-movie__top-panel">
              <Rating rating={movie?.tmdbRating} size={ESize.l} />
              <span>{movie?.releaseYear}</span>
              <span>{movie?.genres && movie.genres.join(" ")}</span>
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
                onClick={fetchMovie}
                icon="pepicons-pop:arrows-spin"
                type={EButtonType.Primary}
              />
            </div>
          </div>
          <div
            className="banner-movie__background"
            style={{ backgroundImage: `url(${movie?.backdropUrl})` }}
          ></div>
        </>
      )}
    </div>
  );
};
