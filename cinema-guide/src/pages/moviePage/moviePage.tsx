import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../app/models/IMovie";
import { appStore } from "../../app/appStore";
import { Banner } from "../../components/banner/banner";
import "./styles.scss";

export const MoviePage = (): ReactElement => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    if (!id) return;

    const fetchMovie = async () => {
      const data = await appStore.api.movieApi.getMovieByIdAsync(parseInt(id));
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="movie-page">
      <Banner defaultMovie={movie} isAdditionalButtons={false} />
      <section className="about">
        <h2>O Фильме</h2>
        <ul className="dotted-list">
          {movie?.language && (
            <li>
              <span>Язык оригинала</span>
              <span className="dots"></span>
              <span className="value">{movie.language}</span>
            </li>
          )}
          {movie?.budget && (
            <li>
              <span>Бюджет</span>
              <span className="dots"></span>
              <span className="value">{movie?.budget}</span>
            </li>
          )}
          {movie?.revenue && (
            <li>
              <span>Выручка</span>
              <span className="dots"></span>
              <span className="value">{movie?.revenue} $</span>
            </li>
          )}
          {movie?.director && (
            <li>
              <span>Режиссёр</span>
              <span className="dots"></span>
              <span className="value">{movie.director}</span>
            </li>
          )}
          {movie?.production && (
            <li>
              <span>Продакшен</span>
              <span className="dots"></span>
              <span className="value">{movie.production }</span>
            </li>
          )}
          {movie?.awardsSummary && (
            <li>
              <span>Награды</span>
              <span className="dots"></span>
              <span className="value">{movie.awardsSummary}</span>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};
