import { useRef, useReducer } from "react";

import BodyText from "./BodyText/BodyText";
import BodyVideo from "./BodyVideo/BodyVideo";
import BodyController from "./BodyController/BodyController";

import classes from "./BodyCommand.module.css";

function BodyCommand({ title, leftText, reducer, initialState }) {
  const videoRef1 = useRef();
  const videoRef2 = useRef();

  const [stateBody, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>{title}</h4>
        </div>
      </div>

      <div className={classes.Container}>
        <BodyText context={leftText.context} />
        <div className={classes.divSmallManager}>
          <BodyController
            classesNames={stateBody.disabled ? classes.fadeOut : ""}
            videoRef1={videoRef1}
            videoRef2={videoRef2}
            stateBody={stateBody}
            dispatch={dispatch}
          />
          <BodyVideo
            stateBody={stateBody}
            videoRef1={videoRef1}
            videoRef2={videoRef2}
            isStarted={stateBody.disabled}
            onEnded={(e) => {
              dispatch({ videoRef1, videoRef2, type: "NEXT_ACTION" });
            }}
          />
        </div>
      </div>
    </>
  );
}

export default BodyCommand;
