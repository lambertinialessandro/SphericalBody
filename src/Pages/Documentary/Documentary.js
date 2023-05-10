import classes from "./Documentary.module.css";

function Documentary() {
  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>DOCUMENTARY</h4>
        </div>
      </div>

      <div className={classes.documentaryContainer}>
        <img
          className={classes.documentaryImage}
          src="./images/play.png"
          alt="play"
        />
      </div>
    </>
  );
}

export default Documentary;
