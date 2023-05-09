export const initialState = {
  videoSubject: "./video/Dancer1/",
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

export function reducerBody(state, action) {
  const videoRef = action?.videoRef;
  const nextNumber = state.number + 1;

  if (action.type === "START") {
    console.log("START");
    if (state.listActions.length === 0) {
      return state;
    }

    /* setTimeout(() => {
      videoRef.current.src = state.listActions[state.curAction];
      videoRef.current.currentTime = 0.01;
      videoRef.current.play();
    }, 1000); // TODO: cambiare il tempo */

    return { ...state, disabled: true, curAction: state.curAction + 1 };
  } else if (action.type === "NEXT ACTION") {
    if (state.curAction < state.listActions.length) {
      videoRef.current.pause();
      videoRef.current.src = state.listActions[state.curAction];
      //videoRef.current.load(state.listActions[state.curAction]);
      videoRef.current.currentTime = 0.01;
      videoRef.current.play();

      return { ...state, curAction: state.curAction + 1 };
    } else {
      videoRef.current.src = state.videoSubject + "IDLE.mp4";
      videoRef.current.currentTime = 0;

      return { ...state, disabled: false, curAction: 0 };
    }
  } else if (action.type === "STOP") {
    return { ...state, disabled: false };
  } else if (action.type === "STOP_VIDEO") {
    videoRef.current.src = state.videoSubject + "IDLE.mp4";
    videoRef.current.currentTime = 0;

    return { ...state, disabled: false, curAction: 0 };
    return { ...state, disabled: false };
  } else if (action.type === "RESET") {
    return initialState;
  } else if (action.type === "RESET_ACTIONS") {
    return { ...initialState, videoSubject: state.videoSubject };
  } else if (action.type === "CHANGE_VIDEO") {
    return {
      ...state,
      videoSubject: action.videoSubject ?? state.videoSubject,
    };
  } // CENTRAL CORE
  else if (action.type === "HEAD") {
    if (state.headText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      headText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "HEAD.mp4"],
    };
  } else if (action.type === "CHEST") {
    if (state.chestText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      chestText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "CHEST.mp4"],
    };
  } else if (action.type === "PELVIS") {
    if (state.pelvisText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      pelvisText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "PELVIS.mp4"],
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
      listActions: [
        ...state.listActions,
        state.videoSubject + "SHOULDER_R.mp4",
      ],
    };
  } else if (action.type === "ELBOW_R") {
    if (state.ElbowRText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      ElbowRText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "ELBOW_R.mp4"],
    };
  } else if (action.type === "HAND_R") {
    if (state.HandRText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      HandRText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "HAND_R.mp4"],
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
      listActions: [
        ...state.listActions,
        state.videoSubject + "SHOULDER_L.mp4",
      ],
    };
  } else if (action.type === "ELBOW_L") {
    if (state.ElbowLText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      ElbowLText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "ELBOW_L.mp4"],
    };
  } else if (action.type === "HAND_L") {
    if (state.HandLText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      HandLText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "HAND_L.mp4"],
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
      listActions: [...state.listActions, state.videoSubject + "KNEE_R.mp4"],
    };
  } else if (action.type === "FOOT_R") {
    if (state.FootRText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      FootRText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "FOOT_R.mp4"],
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
      listActions: [...state.listActions, state.videoSubject + "KNEE_L.mp4"],
    };
  } else if (action.type === "FOOT_L") {
    if (state.FootLText) {
      return state;
    }

    return {
      ...state,
      number: nextNumber,
      FootLText: nextNumber,
      listActions: [...state.listActions, state.videoSubject + "FOOT_L.mp4"],
    };
  }

  throw Error("Unknown action.");
}

export const leftText = {
  context:
    'The Spherical Body is a diagram that proposes an architecture of spheres,\
    strings, and a cube representing the body.\
    \
    Click on the solid spheres to create a short sequence of five movements.\
    These are the five spheres that the dancer has selected (known as "code")\
    and will be the origin of the choreography you will witness on stage.',
};
