import { FC, useEffect, useState } from "react";
import { IMovie } from "../../app/models/IMovie";
import "./styles.scss";
import { Banner } from "../../components/banner/banner";
import { MovieCardsList } from "../../components/cardList/cardList";
import { appStore } from "../../app/appStore";

export const HomePage: FC = () => {
  const [topTen, setTopTen] = useState<IMovie[]>();
 
  useEffect(() => {
    appStore.api.getTopTenMoviesAsync().then((data) => setTopTen(data))
  }, []);
  return (
    <div className="home">
      <Banner/>
      <section className="top-ten">
        <div className="container">
          <h2 className="top-ten__title">Топ 10 фильмов</h2>
          {topTen && <MovieCardsList movieList={topTen} />}
        </div>
      </section>
    </div>
  );
};
