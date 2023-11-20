import { Link } from "react-router-dom";
import Styles from "../styles/Menu.module.css";
const Menu = () => {
  return (
    <div className={Styles.menu_bar}>
      <Link className="navbar-brand" to="/">
        <img
          className={Styles.home_img}
          src="https://cdn-icons-png.flaticon.com/512/4954/4954983.png"
          alt="home"
        />
      </Link>
      <h2>SNAPPER</h2>
      <Link to={"/create"} className={`btn btn-light ${Styles.custom_button}`}>
        Create Snap
      </Link>
    </div>
  );
};
export default Menu;
