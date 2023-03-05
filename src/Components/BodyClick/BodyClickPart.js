import { useState } from "react";

import classes from "./BodyClickPart.module.css";

function BodyClickPart(props) {
  const { classesContainer, classesCircle, onClick, text, disabled } = props;

  const [settingsDisabled, setSettingsDisabled] = useState(true);
  const onClickMain = () => {
    setSettingsDisabled(!settingsDisabled);
  };

  return (
    <div
      className={`
    ${classes.classesContainer} 
    ${classesContainer}
  `}
    >
      <div
        className={`
            ${disabled ? classes.disabled : ""} 
            ${classes.bodyCircle} 
            ${classesCircle}
          `}
        onClick={onClickMain}
        onBlur={onClickMain}
      >
        {text}
      </div>
      <div>
        <div
          className={`
            ${settingsDisabled ? classes.disabled : ""} 
            ${classes.circleTop}
            ${classes.bodyCircle} 
          `}
          onClick={onClick}
        >
          "T"
        </div>
        <div
          className={`
            ${settingsDisabled ? classes.disabled : ""}
            ${classes.bodyCircle}
            ${classes.circleCenter}
          `}
          onClick={onClick}
        >
          "C"
        </div>
        <div
          className={`
            ${settingsDisabled ? classes.disabled : ""}
            ${classes.circleBottom}
            ${classes.bodyCircle}
          `}
          onClick={onClick}
        >
          "B"
        </div>
      </div>
    </div>
  );
}

export default BodyClickPart;
