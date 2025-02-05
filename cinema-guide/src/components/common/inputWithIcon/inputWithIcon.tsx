import { EInputType } from "../../../app/models/enums/inputTypes";
import { Icons } from "../../../icons/icons";
import "./styles.scss";

export const InputWithIcon = ({
  icon,
  name,
  placeholder,
  isRequired,
  type = EInputType.Text,
}: {
    icon: keyof typeof Icons;
  name: string;
  placeholder: string;
  isRequired: boolean;
  type: EInputType;
}) => {
  return (
    <div className="input-with-icon">
      {Icons[icon]}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
};
