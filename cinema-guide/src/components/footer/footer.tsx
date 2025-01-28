import { FC } from "react"
import { SocialList } from "../common/socials/socialList/socialList"
import { ISocialLink } from "../common/socials/socialLink/socialLink"
import "./styles.scss"

const socials: ISocialLink[] = [
  {
    link: "https://vk.com/",
    iconyfyUlr: "basil:vk-solid",
    id: 1
  },
  {
    link: "https://www.youtube.com/",
    iconyfyUlr: "mdi:youtube",
    id: 2
  },
  {
    link: "https://ok.ru/",
    iconyfyUlr: "mdi:odnoklassniki",
    id: 3
  },
  {
    link: "https://web.telegram.org/",
    iconyfyUlr: "mingcute:telegram-fill",
    id: 4
  },
];

export const Footer: FC = () => {
  return(<footer className="footer">
    <div className="container">
      <SocialList list={socials}/>
    </div>
  </footer>)
}