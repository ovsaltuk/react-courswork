import { Icon } from "@iconify/react";
import "./styles.scss";
import { FC } from "react";
import { ESize } from "../../../app/models/enums/common";
import { getRatingClassName } from "./util/helpers";

interface IRatingProps {
  rating: number;
  size: ESize
}

export const Rating: FC<IRatingProps> = ({rating, size}) => {
  const ratingColor = getRatingClassName(rating);

  return (
    <div className={`rating ${size}-size ${ratingColor}`}>
      <Icon icon="material-symbols:star" />
      <span>{rating}</span>
    </div>
  );
};
