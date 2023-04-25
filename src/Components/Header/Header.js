import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.mainText}>
      <img className={classes.mainTitle} src="./images/title_black.png"></img>
      <NavLink
        className={classes.backButton}
        activeClassName={""}
        to={"./home"}
      >
        {"Home"}
      </NavLink>
    </div>
  );
}

export default Header;
