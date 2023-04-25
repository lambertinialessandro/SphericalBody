import { useRef, useReducer } from "react";

import Header from "../Components/Header/Header";
import BodyTutorial from "./BodyTutorial/BodyTutorial";
import BodyVideo from "./BodyVideo/BodyVideo";
import BodyController from "./BodyController/BodyController";

import classes from "./BodyCommand.module.css";

const videoSubject = "./video/simone/"; // test, subject1

function BodyCommand({
  title,
  subtitle,
  reducer,
  initialState /* , footer */,
}) {
  const videoRef = useRef();

  const [stateBody, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Header />
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>{title}</h4>
          <p className={classes.linkSubTitle}>{subtitle}</p>
        </div>
      </div>

      <div className={classes.Container}>
        <BodyTutorial title={title} subtitle={subtitle} />
        <BodyController
          videoRef={videoRef}
          stateBody={stateBody}
          dispatch={dispatch}
          /* footer={footer} */
        />
        <BodyVideo
          videoRef={videoRef}
          onEnded={() => {
            dispatch({ videoRef, type: "STOP" });
          }}
          src={videoSubject + "idle.mp4"}
        />
      </div>
    </>
  );
}

export default BodyCommand;
