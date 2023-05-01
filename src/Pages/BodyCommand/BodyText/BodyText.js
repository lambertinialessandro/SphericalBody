import classes from "./BodyText.module.css";

function BodyText({ context }) {
  return (
    <div className={classes.TextArea}>
      <p className={classes.TextAreaText}>{context}</p>
    </div>
  );
}

export default BodyText;
