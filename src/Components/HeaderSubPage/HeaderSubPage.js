import { NavLink } from "react-router-dom";
import classes from "./HeaderSubPage.module.css";

function HeaderSubPage() {
  return (
    <div className={classes.mainText}>
      <img className={classes.mainTitle} src="./images/title_black.png"></img>
      <NavLink
        className={classes.backButton}
        activeClassName={""}
        to={"/SphericalBody/Home"}
      >
        {"Home"}
      </NavLink>
    </div>
  );
}

export default HeaderSubPage;
