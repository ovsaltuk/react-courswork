import { ReactElement, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { appStore } from "../../../app/appStore";

export const GenreCard = ({ genre }: { genre: string }): ReactElement => {
  const [cardBackgroundImg, setCardBackgroundImg] = useState<string>("");

  useEffect(() => {
    appStore.api.movieApi
      .searchByFiltersAsync({ genre: genre })
      .then((data) => setCardBackgroundImg(data[0].posterUrl));
  }, [genre]);
  return (
    <NavLink className="genre-card" to="#">
      <img src={cardBackgroundImg} alt={genre} className="genre-card__img" />
      <span>{genre}</span>
    </NavLink>
  );
};
