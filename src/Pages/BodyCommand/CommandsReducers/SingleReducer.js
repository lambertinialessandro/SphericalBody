const videoSubject = "./video/simone/"; // test, subject1

export const initialState = {
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

function helperReducerTask(videoRef, task, video1, video2, video3) {
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

export function reducerBody(state, action) {
  const videoRef = action?.videoRef;
  if (action.type === "RESET") {
    return initialState;
  } else if (action.type === "STOP") {
    videoRef.current.src = videoSubject + "idle.mp4";
    videoRef.current.currentTime = 0;

    return { ...state, disabled: false };
  } // CENTRAL CORE
  else if (action.type === "HEAD") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "head.mp4",
      videoSubject + "head.mp4",
      videoSubject + "head.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } else if (action.type === "CHEST") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "chest.mp4",
      videoSubject + "chest.mp4",
      videoSubject + "chest.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } else if (action.type === "PELVIS") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "pelvis.mp4",
      videoSubject + "pelvis.mp4",
      videoSubject + "pelvis.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } // RIGHT ARM
  else if (action.type === "SHOULDER_R") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "shoulder_r.mp4",
      videoSubject + "shoulder_r.mp4",
      videoSubject + "shoulder_r.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } else if (action.type === "ELBOW_R") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "elbow_r.mp4",
      videoSubject + "elbow_r.mp4",
      videoSubject + "elbow_r.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } else if (action.type === "HAND_R") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "hand_r.mp4",
      videoSubject + "hand_r.mp4",
      videoSubject + "hand_r.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } // LEFT ARM
  else if (action.type === "SHOULDER_L") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "shoulder_l.mp4",
      videoSubject + "shoulder_l.mp4",
      videoSubject + "shoulder_l.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } else if (action.type === "ELBOW_L") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "elbow_l.mp4",
      videoSubject + "elbow_l.mp4",
      videoSubject + "elbow_l.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } else if (action.type === "HAND_L") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "hand_l.mp4",
      videoSubject + "hand_l.mp4",
      videoSubject + "hand_l.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } // RIGHT LEG
  else if (action.type === "KNEE_R") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "knee_r.mp4",
      videoSubject + "knee_r.mp4",
      videoSubject + "knee_r.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } else if (action.type === "FOOT_R") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "foot_r.mp4",
      videoSubject + "foot_r.mp4",
      videoSubject + "foot_r.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } // LEFT LEG
  else if (action.type === "KNEE_L") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "knee_l.mp4",
      videoSubject + "knee_l.mp4",
      videoSubject + "knee_l.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  } else if (action.type === "FOOT_L") {
    helperReducerTask(
      videoRef,
      action.task,
      videoSubject + "foot_l.mp4",
      videoSubject + "foot_l.mp4",
      videoSubject + "foot_l.mp4"
    );
    return {
      ...state,
      disabled: true,
    };
  }

  throw Error("Unknown action.");
}

export const leftText = {
  title: "Tutorial",
  context:
    " La mappa è composta da un corpo umano schematizzato con dei cerchi nelle articolazioni.\
  Premendo su uno di questi cerchi, si aprirà un menù a tendina con tre opzioni: descrizione, esercizi e video.\
  Selezionando l'opzione Video, si verrà reindirizzati a una pagina dove si potrà guardare un video riguardante l'articolazione selezionata e i relativi esercizi. In sostanza,\
  il tutorial spiega come esplorare la mappa e guardare i video delle articolazioni selezionate.",
};
