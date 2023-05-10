import { NavLink } from "react-router-dom";
import classes from "./HeaderSubPage.module.css";

function HeaderSubPage() {
  return (
    <div className={classes.mainText}>
      <div className={classes.divImagesHeader}>
        <img
          className={classes.mainTitleSphere}
          src="./images/title_sphere_color.png"
          alt="title_sphere_color"
        ></img>
        <img
          className={classes.mainTitle}
          src="./images/title_color.png"
          alt="title_color"
        ></img>
      </div>
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
