import { FC } from "react"
import "./styles.scss"
import { Icon } from "@iconify/react"
import { SocialList } from "../common/socials/socialList/socialList"
import { ISocialLink } from "../common/socials/socialLink/socialLink"

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
      <div className="footer__copyright">
      <span>LLC «Мультимедиа Визион»</span>
      <Icon icon="ic:baseline-copyright" />
      <span>Все права защищены</span>
      </div>
      <SocialList list={socials}/>
    </div>
  </footer>)
}