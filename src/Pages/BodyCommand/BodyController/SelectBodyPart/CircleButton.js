import classes from "./CircleButton.module.css";

function CircleButton(props) {
  const { classesContainer, classesCircle, disabled, text, onClick } = props;

  return (
    <div
      className={`
        ${disabled ? classes.disabled : ""} 
          ${classes.container} 
          ${classesContainer}
          `}
    >
      <div
        className={`
          ${classes.circleBig} 
          ${classesCircle}
          `}
        onClick={onClick}
      >
        {text}
      </div>
    </div>
  );
}

export default CircleButton;
