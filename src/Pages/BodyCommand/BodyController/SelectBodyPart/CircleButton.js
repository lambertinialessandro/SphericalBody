import classes from "./CircleButton.module.css";

function CircleButton(props) {
  const { classesContainer, classesCircle, disabled, text, onClick } = props;

  return (
    <div
      className={`
          ${classes.container} 
          ${classesContainer}
          `}
    >
      <div
        className={`
          ${classes.circleBig} 
          ${classesCircle}
          `}
        onClick={() => {
          if (!disabled) onClick();
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default CircleButton;
