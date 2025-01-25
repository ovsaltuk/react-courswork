import { formatDuration } from "../../app/common/utils/formatDuration";
import { ESize } from "../../app/models/enums/common";
import { IMovie } from "../../app/models/IMovie";
import { Rating } from "../common/rating/rating";
import "./styles.scss";

export const MovieMetadata = ({ movie }: { movie: IMovie }) => {
  return (
    <ul className="metadata">
      <li className="metadata__tag">
        <Rating size={ESize.l} rating={movie.tmdbRating} />
      </li>
      <li className="metadata__tag">{movie.releaseYear}</li>
      <li className="metadata__tag">{movie.genres.join(", ")}</li>
      <li className="metadata__tag">{formatDuration(movie.runtime)}</li>
    </ul>
  );
};
