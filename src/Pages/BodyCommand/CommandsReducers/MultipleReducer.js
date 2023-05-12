const videoSubject = "./video/simone/"; // test, subject1

export const initialState = {
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

function helperReducerTask(nextNumber, task, video1, video2, video3) {
  let text = "";
  let video = "";

  if (task === "FLOATING") {
    text = (
      <>
        {nextNumber}
        <span className="material-symbols-outlined">move_selection_up</span>
      </>
    );
    video = video1;
  } else if (task === "REJECTING") {
    text = (
      <>
        {nextNumber}
        <span className="material-symbols-outlined">swap_horiz</span>
      </>
    );
    video = video2;
  } else if (task === "SUPPORTING") {
    text = (
      <>
        {nextNumber}
        <span className="material-symbols-outlined">download</span>
      </>
    );
    video = video3;
  } else throw Error("Unknown action.");

  return [text, video];
}

export function reducerBody(state, action) {
  const videoRef = action?.videoRef;
  const nextNumber = state.number + 1;

  if (action.type === "START") {
    if (state.listActions.length === 0) {
      return state;
    }

    setTimeout(() => {
      videoRef.current.src = state.listActions[state.curAction];
      videoRef.current.currentTime = 0.01;
      videoRef.current.play();
    }, 1000);

    return { ...state, disabled: true, curAction: state.curAction + 1 };
  } else if (action.type === "NEXT_ACTION") {
    if (state.curAction < state.listActions.length) {
      videoRef.current.pause();
      videoRef.current.src = state.listActions[state.curAction];
      videoRef.current.currentTime = 0.01;
      videoRef.current.play();

      return { ...state, curAction: state.curAction + 1 };
    } else {
      videoRef.current.src = videoSubject + "idle.mp4";
      videoRef.current.currentTime = 0;

      return { ...state, disabled: false, curAction: 0 };
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

    const [headText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance1.mp4",
      videoSubject + "dance1.mp4",
      videoSubject + "dance1.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      headText: headText,
      listActions: [...state.listActions, video],
    };
  } else if (action.type === "CHEST") {
    if (state.chestText) {
      return state;
    }

    const [chestText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance2.mp4",
      videoSubject + "dance2.mp4",
      videoSubject + "dance2.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      chestText: chestText,
      listActions: [...state.listActions, video],
    };
  } else if (action.type === "PELVIS") {
    if (state.pelvisText) {
      return state;
    }

    const [pelvisText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance3.mp4",
      videoSubject + "dance3.mp4",
      videoSubject + "dance3.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      pelvisText: pelvisText,
      listActions: [...state.listActions, video],
    };
  } // RIGHT ARM
  else if (action.type === "SHOULDER_R") {
    if (state.ShoulderRText) {
      return state;
    }

    const [ShoulderRText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance4.mp4",
      videoSubject + "dance4.mp4",
      videoSubject + "dance4.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      ShoulderRText: ShoulderRText,
      listActions: [...state.listActions, video],
    };
  } else if (action.type === "ELBOW_R") {
    if (state.ElbowRText) {
      return state;
    }

    const [ElbowRText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance5.mp4",
      videoSubject + "dance5.mp4",
      videoSubject + "dance5.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      ElbowRText: ElbowRText,
      listActions: [...state.listActions, video],
    };
  } else if (action.type === "HAND_R") {
    if (state.HandRText) {
      return state;
    }

    const [HandRText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance6.mp4",
      videoSubject + "dance6.mp4",
      videoSubject + "dance6.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      HandRText: HandRText,
      listActions: [...state.listActions, video],
    };
  } // LEFT ARM
  else if (action.type === "SHOULDER_L") {
    if (state.ShoulderLText) {
      return state;
    }

    const [ShoulderLText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance1.mp4",
      videoSubject + "dance1.mp4",
      videoSubject + "dance1.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      ShoulderLText: ShoulderLText,
      listActions: [...state.listActions, video],
    };
  } else if (action.type === "ELBOW_L") {
    if (state.ElbowLText) {
      return state;
    }

    const [ElbowLText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance2.mp4",
      videoSubject + "dance2.mp4",
      videoSubject + "dance2.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      ElbowLText: ElbowLText,
      listActions: [...state.listActions, video],
    };
  } else if (action.type === "HAND_L") {
    if (state.HandLText) {
      return state;
    }

    const [HandLText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance3.mp4",
      videoSubject + "dance3.mp4",
      videoSubject + "dance3.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      HandLText: HandLText,
      listActions: [...state.listActions, video],
    };
  } // RIGHT LEG
  else if (action.type === "KNEE_R") {
    if (state.KneeRText) {
      return state;
    }

    const [KneeRText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance4.mp4",
      videoSubject + "dance4.mp4",
      videoSubject + "dance4.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      KneeRText: KneeRText,
      listActions: [...state.listActions, video],
    };
  } else if (action.type === "FOOT_R") {
    if (state.FootRText) {
      return state;
    }

    const [FootRText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance5.mp4",
      videoSubject + "dance5.mp4",
      videoSubject + "dance5.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      FootRText: FootRText,
      listActions: [...state.listActions, video],
    };
  } // LEFT LEG
  else if (action.type === "KNEE_L") {
    if (state.KneeLText) {
      return state;
    }

    const [KneeLText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance6.mp4",
      videoSubject + "dance6.mp4",
      videoSubject + "dance6.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      KneeLText: KneeLText,
      listActions: [...state.listActions, video],
    };
  } else if (action.type === "FOOT_L") {
    if (state.FootLText) {
      return state;
    }

    const [FootLText, video] = helperReducerTask(
      nextNumber,
      action.task,
      videoSubject + "dance1.mp4",
      videoSubject + "dance1.mp4",
      videoSubject + "dance1.mp4"
    );
    return {
      ...state,
      number: nextNumber,
      FootLText: FootLText,
      listActions: [...state.listActions, video],
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
