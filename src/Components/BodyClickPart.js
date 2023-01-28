import classes from "./BodyClickPart.module.css";

function BodyClickPart(props) {
  const { classes: extraClasses, onClick, text, disabled } = props;

  return (
    <div
      className={`${disabled ? classes.disabled : ""} 
      ${classes.bodyCircle} ${extraClasses}`}
      onClick={onClick}
    >
      {text}
    </div>
  );
}

export default BodyClickPart;
