import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../app/routes/config";

export const Logo = () => {
  return (
    <Link to={APP_ROUTES.root}>
      <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo" />
    </Link>
  );
};
