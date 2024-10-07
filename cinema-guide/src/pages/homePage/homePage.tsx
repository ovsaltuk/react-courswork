import { FC, useEffect, useState } from "react";
import { HOST } from "../../app/api/movieApi";
import { IMovie } from "../../app/models/IMovie";
import "./styles.scss";
import { Banner } from "../../components/banner/banner";
import { MovieCardsList } from "../../components/cardList/cardList";
import axios from "axios";
import { BannerStore } from "../../components/banner/store";

export const HomePage: FC = () => {
  const [topTen, setTopTen] = useState<IMovie[]>();
  const bannerStore = new BannerStore();
  useEffect(() => {
    axios.get(`${HOST}/movie/top10`).then((res) => setTopTen(res.data));
  }, []);
  return (
    <div className="home">
      <Banner store={bannerStore} />
      <section className="top-ten">
        <div className="container">
          <h2 className="top-ten__title">Топ 10 фильмов</h2>
          {topTen && <MovieCardsList movieList={topTen} />}
        </div>
      </section>
    </div>
  );
};
