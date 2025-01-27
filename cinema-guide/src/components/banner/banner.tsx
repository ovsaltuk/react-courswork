import { FC, useEffect, useState } from "react";
import "./styles.scss";
import { Button, EButtonType } from "../common/button/button";
import { Rating } from "../common/rating/rating";
import { ESize } from "../../app/models/enums/common";
import { formatDuration } from "../../app/common/utils/formatDuration";
import { IMovie } from "../../app/models/IMovie";
import { appStore } from "../../app/appStore";
import { MovieMetadata } from "../movieMetadata/movieMetadata";

interface IBannerProps {
  defaultMovie?: IMovie;
  isAdditionalButtons?: boolean;
}

export const Banner: FC<IBannerProps> = ({
  defaultMovie,
  isAdditionalButtons = true,
}) => {
  const [movie, setMovie] = useState<IMovie | undefined>(
    defaultMovie ? defaultMovie : undefined
  );

  const fetchMovie = async () => {
    const movieData = await appStore.api.movieApi.getRandomMovieAsync();
    setMovie(movieData);
  };

  useEffect(() => {
    !defaultMovie ? fetchMovie() : setMovie(defaultMovie);
  }, [defaultMovie]);

  return (
    <div className="banner-movie">
      {movie && (
        <>
          <div className="banner-movie__info">
            <div className="banner-movie__top-panel">
              <MovieMetadata movie={movie} />
            </div>
            <h1 className="banner-movie__title">{movie?.title}</h1>
            <p className="banner-movie__plot">{movie?.plot}</p>
            <div className="banner-movie__btn-container">
              <Button
                onClick={() => {}}
                text="Трейлер"
                type={EButtonType.Primary}
              />
              {isAdditionalButtons && (
                <Button
                  onClick={() => {}}
                  text="О Фильме"
                  type={EButtonType.Primary}
                />
              )}

              <Button
                onClick={() => {}}
                icon="mdi:heart-outline"
                type={EButtonType.Primary}
              />
              {isAdditionalButtons && (
                <Button
                  onClick={fetchMovie}
                  icon="pepicons-pop:arrows-spin"
                  type={EButtonType.Primary}
                />
              )}
            </div>
          </div>
          <img
            alt={movie.title}
            className="banner-movie__img"
            style={{ backgroundImage: `url(${movie?.backdropUrl})` }}
            src={movie?.backdropUrl}
          />
        </>
      )}
    </div>
  );
};
