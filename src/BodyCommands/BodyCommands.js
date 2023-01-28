import { useReducer, useRef } from "react";
import BodyClick from "../Components/BodyClick";

import classes from "./BodyCommands.module.css";

function BodyCommands(props) {
  const videoRef = useRef();

  const initialState = {
    number: 0,

    curAction: 0,
    listActions: [],

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
  function reducerBody(state, action) {
    const nextNumber = state.number + 1;

    if (action.type === "START") {
      console.log("state.listActions", state.listActions);

      if (state.listActions.length == 0) {
        return state;
      }

      setTimeout(action.onRun, 2500);

      return { ...state, disabled: true };
    } else if (action.type === "NEXT ACTION") {
      console.log("state.curAction", state.curAction);
      console.log("state.listActions.length", state.listActions.length);
      console.log("");

      if (state.curAction < state.listActions.length) {
        videoRef.current.src = "video/dance2.mp4";
        videoRef.current.currentTime = 0;
        videoRef.current.play();

        return { ...state, curAction: state.curAction + 1 };
      } else {
        videoRef.current.src = "video/dance1.mp4";
        videoRef.current.currentTime = 0;

        //dispatch({ type: "STOP" });
        return { ...state, disabled: false };
      }
    } else if (action.type === "STOP") {
      return { ...state, disabled: false };
    } else if (action.type === "RESET") {
      return initialState;
    } // CENTRAL CORE
    else if (action.type === "HEAD") {
      if (state.headText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        headText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } else if (action.type === "CHEST") {
      if (state.chestText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        chestText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } else if (action.type === "PELVIS") {
      if (state.pelvisText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        pelvisText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } // RIGHT ARM
    else if (action.type === "SHOULDER_R") {
      if (state.ShoulderRText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        ShoulderRText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } else if (action.type === "ELBOW_R") {
      if (state.ElbowRText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        ElbowRText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } else if (action.type === "HAND_R") {
      if (state.HandRText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        HandRText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } // LEFT ARM
    else if (action.type === "SHOULDER_L") {
      if (state.ShoulderLText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        ShoulderLText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } else if (action.type === "ELBOW_L") {
      if (state.ElbowLText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        ElbowLText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } else if (action.type === "HAND_L") {
      if (state.HandLText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        HandLText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } // RIGHT LEG
    else if (action.type === "KNEE_R") {
      if (state.KneeRText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        KneeRText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } else if (action.type === "FOOT_R") {
      if (state.FootRText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        FootRText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } // LEFT LEG
    else if (action.type === "KNEE_L") {
      if (state.KneeLText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        KneeLText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    } else if (action.type === "FOOT_L") {
      if (state.FootLText) {
        return state;
      }
      return {
        ...state,
        number: nextNumber,
        FootLText: nextNumber,
        listActions: [...state.listActions, action.type],
      };
    }

    throw Error("Unknown action.");
  }

  const [stateBody, dispatch] = useReducer(reducerBody, initialState);

  const handleVideoEnded = () => {
    dispatch({ type: "NEXT ACTION" });
    /* videoRef.current.src = "video/dance1.mp4";
    videoRef.current.currentTime = 0;
    dispatch({ type: "STOP" }); */
  };

  return (
    <div className={classes.divContainer}>
      <div className={classes.divBody}>
        <div className={classes.divVideo}>
          <video
            className={classes.videoElement}
            ref={videoRef}
            muted={true}
            onEnded={handleVideoEnded}
            src={"video/dance1.mp4"}
          />
        </div>
        <BodyClick stateBody={stateBody} dispatch={dispatch} />
      </div>

      <div className={classes.divButtons}>
        <div
          className={`${stateBody.disabled ? classes.disabled : ""} 
          ${classes.buttonStart}`}
          onClick={() => {
            if (!stateBody.disabled)
              dispatch({
                type: "START",
                onRun: () => {
                  dispatch({ type: "NEXT ACTION" });
                },
              });
          }}
        >
          Start
        </div>
        <div
          className={`${stateBody.disabled ? classes.disabled : ""} 
          ${classes.buttonReset}`}
          onClick={() => {
            if (!stateBody.disabled) dispatch({ type: "RESET" });
          }}
        >
          Reset
        </div>
      </div>
    </div>
  );
}

export default BodyCommands;
