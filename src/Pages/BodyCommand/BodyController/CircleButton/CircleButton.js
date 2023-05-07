import { useState } from "react";

import classes from "./CircleButton.module.css";

function CircleButton(props) {
  const {
    classesContainer,
    classesCircle,
    disabled,
    text,
    onClicks,
    dispatch,
  } = props;
  const [showOptions, setShowOptions] = useState(false);

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
          ${showOptions ? classes.circleBigOpen : classes.circleBig} 
          ${classesCircle}
          `}
        onClick={() => {
          setShowOptions(!showOptions);
        }}
      >
        {text}
      </div>
      <div
        className={`
            ${showOptions ? "" : classes.disabled} 
            ${classes.container_scelte} 
            `}
      >
        {onClicks.map((elem) => (
          <div
            key={elem.key}
            className={classes.scelta}
            onClick={() => {
              setShowOptions(false);
              elem.onClick();
            }}
          >
            <div className={classes.sceltaHead}>{elem.head}</div>
            <div className={classes.sceltaText}>{elem.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CircleButton;
