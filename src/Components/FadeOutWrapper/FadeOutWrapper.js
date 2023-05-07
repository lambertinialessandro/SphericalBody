import classes from "./FadeOutWrapper.module.css";

function FadeOutWrapper({ title }) {
  return (
    <div className={classes.initDiv}>
      <div className={classes.linkTextContext}>
        <h4 className={classes.linkTitle}>{title}</h4>
      </div>
    </div>
  );
}

export default FadeOutWrapper;
