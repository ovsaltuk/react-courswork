import { FC } from "react";
import "./styles.scss";
import { ESize } from "../../../app/models/enums/common";

export enum EButtonType {
  Primary = "primary",
  Secondary = "secondary",
  Default = "default"
}

interface IButtonProps {
  onClick: () => void;
  icon?: string;
  text?: string;
  type?: EButtonType;
  size?: ESize;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  text,
  type = EButtonType.Default,
  size = ESize.large
}) => {
  return (
    <div className={`btn ${type}-style ${size}-size`} onClick={onClick}>
      {text}
    </div>
  );
};
