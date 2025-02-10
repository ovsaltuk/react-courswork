import { EInputType } from "../../../app/models/enums/inputTypes";
import { Icons } from "../../../icons/icons";
import "./styles.scss";

interface IInputWithIconProps {
  icon: keyof typeof Icons;
  name: string;
  placeholder: string;
  isRequired: boolean;
  type: EInputType;
  onChange?: (value: string) => void;
}

export const InputWithIcon = ({
  icon,
  name,
  placeholder,
  isRequired,
  type = EInputType.Text,
  onChange,
}: IInputWithIconProps) => {
  return (
    <div className="input-with-icon">
      {Icons[icon]}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        autoComplete="on"
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};
