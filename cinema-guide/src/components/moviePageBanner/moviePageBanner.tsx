import { ReactElement } from "react";
import { IMovie } from "../../app/models/IMovie";
import "./styles.scss";

export const MoviePageBanner = ({ movie }: { movie: IMovie }): ReactElement => {
  const { posterUrl, title } = movie;

  return (
    <div className="movie-page-banner">
      <div className="movie-page-banner__info"></div>
      <img className="movie-page-banner__img" src={posterUrl} alt={title} />
    </div>
  );
};
