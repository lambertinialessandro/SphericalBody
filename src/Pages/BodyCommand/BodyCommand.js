import { useRef, useReducer } from "react";

import BodyText from "./BodyText/BodyText";
import BodyVideo from "./BodyVideo/BodyVideo";
import BodyController from "./BodyController/BodyController";

import classes from "./BodyCommand.module.css";

function BodyCommand({
  title,
  leftText,
  reducer,
  initialState /* , footer */,
}) {
  const videoRef = useRef();

  const [stateBody, dispatch] = useReducer(reducer, initialState);

  // TODO creare un wrapper per il fade out iniziale
  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>{title}</h4>
        </div>
      </div>

      <div className={classes.Container}>
        <BodyText context={leftText.context} />
        <BodyController
          videoRef={videoRef}
          stateBody={stateBody}
          dispatch={dispatch}
        />
        <BodyVideo
          stateBody={stateBody}
          videoRef={videoRef}
          onEnded={(e) => {
            console.log("e", e);
            dispatch({ videoRef, type: "STOP_VIDEO" });
          }}
        />
      </div>
    </>
  );
}

export default BodyCommand;
