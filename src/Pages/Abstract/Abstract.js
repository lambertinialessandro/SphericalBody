import classes from "./Abstract.module.css";

function Abstract() {
  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>ABSTRACT</h4>
        </div>
      </div>
      <div className={classes.containerAbstract}>
        <p className={classes.textAbstract}>
          Research possibilities of staging the construction process that I go
          through for creating dance material and how this could develop into a
          choreography that accumulates step-by-step the process to reveal basic
          insights about my practice and method The Spherical System and its
          mode of action.
        </p>
      </div>
    </>
  );
}

export default Abstract;
