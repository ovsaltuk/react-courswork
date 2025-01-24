import { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMovie } from "../../app/models/IMovie";
import { appStore } from "../../app/appStore";
import { MovieCardsList } from "../../components/cardList/cardList";

export const GenrePage = (): ReactElement => {
  const { genre } = useParams();
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    appStore.api.movieApi
      .searchByFiltersAsync({ genre })
      .then((data) => setMovies(data));
  }, [movies, genre]);

  return (
    <div className="genre-page">
      <MovieCardsList movieList={movies} />
    </div>
  );
};
