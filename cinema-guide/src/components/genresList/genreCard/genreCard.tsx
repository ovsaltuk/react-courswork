import { ReactElement, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { appStore } from "../../../app/appStore";
import "./styles.scss";
import { capitalizeFirstLetter } from "../../../app/common/utils/capitalizeFirstLetter";
import { APP_ROUTES } from "../../../app/routes/config";

export const GenreCard = ({ genre }: { genre: string }): ReactElement => {
  const [cardBackgroundImg, setCardBackgroundImg] = useState<string>("");

  useEffect(() => {
    appStore.api.movieApi
      .searchByFiltersAsync({ genre: genre })
      .then((data) => setCardBackgroundImg(data[0].posterUrl));
  }, [genre]);
  return (
    <NavLink
      className="genre-card"
      to={`${APP_ROUTES.genre}/${genre}`}
      style={{ backgroundImage: `url(${cardBackgroundImg})` }}
    >
      <div className="genre-card__title">
        <span>{capitalizeFirstLetter(genre)}</span>
      </div>
    </NavLink>
  );
};
