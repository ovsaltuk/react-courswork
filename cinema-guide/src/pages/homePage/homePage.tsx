import { FC, useEffect, useState } from "react";
import axios from "axios";
import { HOST } from "../../app/api/movieApi";
import { IMovie } from "../../app/models/IMovie";
import "./styles.scss";
import { Banner } from "../../components/banner/banner";

export const HomePage: FC = () => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);
  const [topTen, setTopTen] = useState<IMovie[]>();
  useEffect(() => {
    axios.get(`${HOST}/movie/random`).then((res) => setMovie(res.data));
    axios.get(`${HOST}/movie/top10`).then((res) => setTopTen(res.data));
  }, []);
  return (
    <div className="home">
      <Banner movie={movie} />
      <section className="top-ten">
        <div className="container">
          <h2 className="top-ten__title">Топ 10 фильмов</h2>
          <ul className="top-ten">
            {topTen?.map((movie) => (
              <div>
                <img src={movie.posterUrl} alt={movie.title} />
              </div>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};
