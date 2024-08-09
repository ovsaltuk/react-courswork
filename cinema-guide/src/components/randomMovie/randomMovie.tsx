import { FC } from "react";
import { IMovie } from "../../app/models/IMovie";
import "./styles.scss";
import { Button } from "../common/button/button";

interface IBannerProps {
  movie: IMovie;
}

export const RandomMovie: FC<IBannerProps> = ({ movie }) => {
  return (
    <div
      className="random-movie"
      style={{ backgroundImage: `url(${movie?.backdropUrl})` }}
    >
      <div className="random-movie__info">
        <div className="random-movie__top-panel">
          <span className="random-movie__rating">{movie?.tmdbRating}</span>
          <span>{movie?.releaseYear}</span>
          <span>{movie.genres && movie.genres.join(" ")}</span>
          <span>{movie?.runtime}</span>
        </div>
        <h1 className="random-movie__title">{movie?.title}</h1>
        <p className="random-movie__plot">{movie?.plot}</p>
        <div className="random-movie__btn-container">
          <Button onClick={()=>{}} text="Трейлер"/>
          <Button onClick={()=>{}} text="О Фильме"/>
          <Button onClick={()=>{}} text="Лайк"/>
          <Button onClick={()=>{}} text="Замена"/>
        </div>
      </div>
    </div>
  );
};
