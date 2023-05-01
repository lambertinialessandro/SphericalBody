import { useRef, useReducer } from "react";

import BodyClick from "../Components/BodyClick/BodyClick";
import BodyVideo from "../Components/BodyVideo/BodyVideo";
import Header from "../Components/Header/Header";

import classes from "./BodySingleCommand.module.css";

const videoSubject = "./video/subject1/"; // test, subject1

function BodySingleCommand(props) {
  const videoRef = useRef();

  const initialState = {
    disabled: false,

    // CENTRAL CORE
    headText: "",
    chestText: "",
    pelvisText: "",

    // RIGHT ARM
    ShoulderRText: "",
    ElbowRText: "",
    HandRText: "",

    // LEFT ARM
    ShoulderLText: "",
    ElbowLText: "",
    HandLText: "",

    // RIGHT LEG
    KneeRText: "",
    FootRText: "",

    // LEFT LEG
    KneeLText: "",
    FootLText: "",
  };

  function helperReducerTask(task, video1, video2, video3) {
    if (task === "FLOATING") {
      setTimeout(() => {
        videoRef.current.src = video1;
        videoRef.current.currentTime = 0.01;
        videoRef.current.play();
      }, 1000);
    } else if (task === "REJECTING") {
      setTimeout(() => {
        videoRef.current.src = video2;
        videoRef.current.currentTime = 0.01;
        videoRef.current.play();
      }, 1000);
    } else if (task === "SUPPORTING") {
      setTimeout(() => {
        videoRef.current.src = video3;
        videoRef.current.currentTime = 0.01;
        videoRef.current.play();
      }, 1000);
    } else throw Error("Unknown action.");
  }

  function reducerBody(state, action) {
    if (action.type === "RESET") {
      return initialState;
    } else if (action.type === "STOP") {
      videoRef.current.src = videoSubject + "dance1.mp4";
      videoRef.current.currentTime = 0;

      return { ...state, disabled: false };
    } // CENTRAL CORE
    else if (action.type === "HEAD") {
      helperReducerTask(
        action.task,
        videoSubject + "dance1.mp4",
        videoSubject + "dance1.mp4",
        videoSubject + "dance1.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } else if (action.type === "CHEST") {
      helperReducerTask(
        action.task,
        videoSubject + "dance2.mp4",
        videoSubject + "dance2.mp4",
        videoSubject + "dance2.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } else if (action.type === "PELVIS") {
      helperReducerTask(
        action.task,
        videoSubject + "dance3.mp4",
        videoSubject + "dance3.mp4",
        videoSubject + "dance3.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } // RIGHT ARM
    else if (action.type === "SHOULDER_R") {
      helperReducerTask(
        action.task,
        videoSubject + "dance4.mp4",
        videoSubject + "dance4.mp4",
        videoSubject + "dance4.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } else if (action.type === "ELBOW_R") {
      helperReducerTask(
        action.task,
        videoSubject + "dance5.mp4",
        videoSubject + "dance5.mp4",
        videoSubject + "dance5.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } else if (action.type === "HAND_R") {
      helperReducerTask(
        action.task,
        videoSubject + "dance6.mp4",
        videoSubject + "dance6.mp4",
        videoSubject + "dance6.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } // LEFT ARM
    else if (action.type === "SHOULDER_L") {
      helperReducerTask(
        action.task,
        videoSubject + "dance1.mp4",
        videoSubject + "dance1.mp4",
        videoSubject + "dance1.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } else if (action.type === "ELBOW_L") {
      helperReducerTask(
        action.task,
        videoSubject + "dance2.mp4",
        videoSubject + "dance2.mp4",
        videoSubject + "dance2.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } else if (action.type === "HAND_L") {
      helperReducerTask(
        action.task,
        videoSubject + "dance3.mp4",
        videoSubject + "dance3.mp4",
        videoSubject + "dance3.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } // RIGHT LEG
    else if (action.type === "KNEE_R") {
      helperReducerTask(
        action.task,
        videoSubject + "dance4.mp4",
        videoSubject + "dance4.mp4",
        videoSubject + "dance4.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } else if (action.type === "FOOT_R") {
      helperReducerTask(
        action.task,
        videoSubject + "dance5.mp4",
        videoSubject + "dance5.mp4",
        videoSubject + "dance5.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } // LEFT LEG
    else if (action.type === "KNEE_L") {
      helperReducerTask(
        action.task,
        videoSubject + "dance6.mp4",
        videoSubject + "dance6.mp4",
        videoSubject + "dance6.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    } else if (action.type === "FOOT_L") {
      helperReducerTask(
        action.task,
        videoSubject + "dance1.mp4",
        videoSubject + "dance1.mp4",
        videoSubject + "dance1.mp4"
      );
      return {
        ...state,
        disabled: true,
      };
    }

    throw Error("Unknown action.");
  }

  const [stateBody, dispatch] = useReducer(reducerBody, initialState);

  return (
    <>
      <Header />
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>Single Command</h4>
          <p className={classes.linkSubTitle}>
            There will be shown one command at a time
          </p>
        </div>
      </div>

      <div className={classes.divContainer}>
        <div>Tutorial</div>
        <div>Video</div>
        <div>Controller</div>
        <div className={classes.divBody}>
          <BodyVideo
            videoRef={videoRef}
            onEnded={() => {
              dispatch({ type: "STOP" });
            }}
            src={videoSubject + "dance1.mp4"}
          />
          <BodyClick stateBody={stateBody} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
}

export default BodySingleCommand;
