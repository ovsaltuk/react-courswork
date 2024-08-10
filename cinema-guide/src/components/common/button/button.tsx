import { FC } from "react";
import { ESize } from "../../../app/models/enums/common";
import { Icon } from "@iconify/react";
import "./styles.scss";

export enum EButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Default = "default"
}

interface IButtonProps {
  onClick: () => void;
  icon?: string;
  text?: string;
  wrapperClass?: string;
  type?: EButtonType;
  size?: ESize;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  text,
  icon,
  wrapperClass,
  type = EButtonType.Default,
  size = ESize.large
}) => {

  const iconClassName = icon && !text ? 'only-icon' : '';

  return (
    <div className={`btn ${type}-style ${size}-size ${iconClassName} ${wrapperClass}`} onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {text}
    </div>
  );
};
