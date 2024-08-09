import { FC } from "react";
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
  type?: EButtonType;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  text,
  type = EButtonType.Default,
}) => {
  return (
    <div className={`btn ${type}-style`} onClick={onClick}>
      {text}
    </div>
  );
};
