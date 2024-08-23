import { FC } from "react";
import { ISocialLink, SocialLink } from "../socialLink/socialLink";
import "./styles.scss"

interface ISocialListProps {
  list: ISocialLink[];
}

export const SocialList: FC<ISocialListProps> = ({ list }) => {
  return (
    <ul className="social-list">
      {list.map(({ link, iconyfyUlr, id }) => (
        <li key={id} className="social-list__item">
          <SocialLink link={link} iconyfyUlr={iconyfyUlr} id={id} />
        </li>
      ))}
    </ul>
  );
};
