import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../app/models/IMovie";
import { appStore } from "../../app/appStore";
import { MovieMetadata } from "../../components/movieMetadata/movieMetadata";
import "./styles.scss"
import { Banner } from "../../components/banner/banner";

export const MoviePage = (): ReactElement => {
  const { id } = useParams();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    id &&
      appStore.api.movieApi
        .getMovieByIdAsync(parseInt(id))
        .then((data) => setMovie(data));
  }, [movie, id]);

  return (
    <div className="movie-page">
      <Banner defaultMovie={movie} isAdditionalButtons={false}/>
    </div>
  );
};
