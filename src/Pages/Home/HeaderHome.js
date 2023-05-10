import classes from "./HeaderHome.module.css";

function HeaderHome() {
  return (
    <div className={classes.mainTitle}>
      <img
        className={classes.mainTitleSphere}
        src="./images/title_sphere_color.png"
        alt="title_sphere_color"
      ></img>
      <img
        className={classes.mainTitleText}
        src="./images/title_color.png"
        alt="title_color"
      ></img>
    </div>
  );
}

export default HeaderHome;
