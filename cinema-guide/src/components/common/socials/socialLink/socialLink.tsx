import { Icon } from "@iconify/react";
import { FC } from "react";
import { Link } from "react-router-dom"
import "./styles.scss"

export interface ISocialLink {
    id: number;
    link: string;
    iconyfyUlr: string;
}

export const SocialLink: FC<ISocialLink> = ({link, iconyfyUlr}) => {
    return (<Link to={link} className="link">
        <Icon icon={iconyfyUlr} />
    </Link>)
}