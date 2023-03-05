import classes from "./HeaderHome.module.css";

function HeaderHome() {
  return (
    <div className={classes.mainText}>
      <div className={classes.mainTextContent}>
        <h1 className={classes.mainTitle}>Staging an accumulation process</h1>
        <p className={classes.mainSubTitle}>
          Presentation by:
          <br />
          Fernando Domínguez Rincon
        </p>
      </div>
    </div>
  );
}

export default HeaderHome;
