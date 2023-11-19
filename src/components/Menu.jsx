import Styles from "../styles/Menu.module.css";
const Menu = () => {
  return (
    <div className={Styles.menu_bar}>
      <a className="navbar-brand" href="/">
        <img
          className={Styles.home_img}
          src="https://cdn-icons-png.flaticon.com/512/4954/4954983.png"
          alt="home"
        />
      </a>
      <h2>SNAPPER</h2>
    </div>
  );
};
export default Menu;
