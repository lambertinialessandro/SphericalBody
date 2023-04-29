import classes from "./BodyText.module.css";

function BodyText({ title, context }) {
  return (
    <div className={classes.TextArea}>
      <h4 className={classes.TextAreaTitle}>{title}</h4>
      <p className={classes.TextAreaText}>{context}</p>
    </div>
  );
}

export default BodyText;
