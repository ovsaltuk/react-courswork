import { FC } from "react"
import "./styles.scss"
import { Icon } from "@iconify/react"

export const Footer: FC = () => {
  return(<footer className="footer">
    <div className="container">
      <div className="footer__copyright">
      <span>LLC «Мультимедиа Визион»</span>
      <Icon icon="ic:baseline-copyright" />
      <span>Все права защищены</span>
      </div>
      <div className="footer__socials"></div>
    </div>
  </footer>)
}