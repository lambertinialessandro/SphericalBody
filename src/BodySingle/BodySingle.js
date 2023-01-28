import { useReducer } from "react";
import BodyClick from "../Components/BodyClick";

const initialState = {
  number: 0,

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

  if (action.type === "RESET") {
    return initialState;
  } // CENTRAL CORE
  else if (action.type === "HEAD") {
    console.log("HEAD");
    return {
      ...state,
      number: nextNumber,
    };
  } else if (action.type === "CHEST") {
    console.log("CHEST");
    return {
      ...state,
      number: nextNumber,
    };
  } else if (action.type === "PELVIS") {
    console.log("PELVIS");
    return {
      ...state,
      number: nextNumber,
    };
  } // RIGHT ARM
  else if (action.type === "SHOULDER_R") {
    console.log("SHOULDER_R");
    return {
      ...state,
      number: nextNumber,
    };
  } else if (action.type === "ELBOW_R") {
    console.log("ELBOW_R");
    return {
      ...state,
      number: nextNumber,
    };
  } else if (action.type === "HAND_R") {
    console.log("HAND_R");
    return {
      ...state,
      number: nextNumber,
    };
  } // LEFT ARM
  else if (action.type === "SHOULDER_L") {
    console.log("SHOULDER_L");
    return {
      ...state,
      number: nextNumber,
    };
  } else if (action.type === "ELBOW_L") {
    console.log("ELBOW_L");
    return {
      ...state,
      number: nextNumber,
    };
  } else if (action.type === "HAND_L") {
    console.log("HAND_L");
    return {
      ...state,
      number: nextNumber,
    };
  } // RIGHT LEG
  else if (action.type === "KNEE_R") {
    console.log("KNEE_R");
    return {
      ...state,
      number: nextNumber,
    };
  } else if (action.type === "FOOT_R") {
    console.log("FOOT_R");
    return {
      ...state,
      number: nextNumber,
    };
  } // LEFT LEG
  else if (action.type === "KNEE_L") {
    console.log("KNEE_L");
    return {
      ...state,
      number: nextNumber,
    };
  } else if (action.type === "FOOT_L") {
    console.log("FOOT_L");
    return {
      ...state,
      number: nextNumber,
    };
  }

  throw Error("Unknown action.");
}

function BodySingle(props) {
  const [stateBody, dispatch] = useReducer(reducerBody, initialState);

  return (
    <>
      <BodyClick stateBody={stateBody} dispatch={dispatch} />
    </>
  );
}

export default BodySingle;
