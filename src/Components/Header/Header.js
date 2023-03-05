import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.mainText}>
      <h1 className={classes.mainTitle}>Ballet Dancing</h1>
      <NavLink
        className={classes.backButton}
        activeClassName={""}
        to={"./home"}
      >
        {"<- Back"}
      </NavLink>
    </div>
  );
}

export default Header;
