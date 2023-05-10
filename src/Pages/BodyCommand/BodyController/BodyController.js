import { useReducer, useState } from "react";

import SelectCharacter from "./SelectCharacter/SelectCharacter";
import SelectBodyPart from "./SelectBodyPart/SelectBodyPart";

import classes from "./BodyController.module.css";

const statesEnum = {
  selectCharacter: 0,
  selectBodyPart: 1,
  selectHide: 2,
  nextState: (state) => {
    switch (state) {
      case statesEnum.selectCharacter:
        return statesEnum.selectBodyPart;
      case statesEnum.selectBodyPart:
        return statesEnum.selectHide;
      case statesEnum.selectHide:
        return statesEnum.selectCharacter;
      default:
        return statesEnum.selectCharacter;
    }
  },
};

const initialState = {
  current: statesEnum.selectCharacter,
  nextState: null,
  fadeOut: false,
  fadeIn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FADEOUT_START":
      return {
        ...state,
        fadeOut: true,
        fadeIn: false,
        nextState: action.nextState,
      };
    case "FADEOUT_FADEIN":
      return {
        ...state,
        fadeOut: false,
        fadeIn: true,
        current: state.nextState,
      };
    case "FADEIN_END":
      return {
        ...state,
        fadeOut: false,
        fadeIn: false,
      };
    default:
      return { ...state };
  }
};

function BodyController({
  classesNames,
  videoRef,
  stateBody,
  dispatch /* , footer */,
}) {
  const [animationManager, dispatchAnimation] = useReducer(
    reducer,
    initialState
  );
  const onAnimationEnd = (event) => {
    if (event.target === event.currentTarget) {
      if (animationManager.fadeOut || animationManager.nextState) {
        dispatchAnimation({ type: "FADEOUT_FADEIN" });
      }
      if (animationManager.fadeIn) {
        dispatchAnimation({ type: "FADEIN_END" });
      }
    }
  };

  const enabledCharacter1 = {
    HEAD: true,
    CHEST: true,
    PELVIS: false,
    SHOULDER_R: true,
    ELBOW_R: false,
    HAND_R: false,
    SHOULDER_L: false,
    ELBOW_L: true,
    HAND_L: false,
    HIP_R: false,
    KNEE_R: false,
    FOOT_R: false,
    HIP_L: false,
    KNEE_L: true,
    FOOT_L: false,
  };
  const enabledCharacter2 = {
    HEAD: true,
    CHEST: false,
    PELVIS: true,
    SHOULDER_R: false,
    ELBOW_R: false,
    HAND_R: true,
    SHOULDER_L: false,
    ELBOW_L: true,
    HAND_L: false,
    HIP_R: false,
    KNEE_R: true,
    FOOT_R: false,
    HIP_L: false,
    KNEE_L: false,
    FOOT_L: false,
  };
  const [character, setCharacter] = useState({
    id: 0,
    colorBody: classes.blueColor,
    colorOther: classes.yellowColor,
    enabledCurrent: enabledCharacter1,
  });
  const onClickSelectCharacter1 = () => {
    setCharacter({
      id: 1,
      colorBody: classes.blueColor,
      colorOther: classes.yellowColor,
      enabledCurrent: enabledCharacter1,
    });
    dispatch({ type: "CHANGE_VIDEO", videoSubject: "./video/Dancer1/" });
    dispatch({ type: "ENABLE_BUTTONS", enabledCurrent: enabledCharacter1 });

    dispatchAnimation({
      type: "FADEOUT_START",
      nextState: statesEnum.nextState(animationManager.current),
    });
  };
  const onClickSelectCharacter2 = () => {
    setCharacter({
      id: 1,
      colorBody: classes.yellowColor,
      colorOther: classes.blueColor,
      enabledCurrent: enabledCharacter2,
    });
    dispatch({ type: "CHANGE_VIDEO", videoSubject: "./video/Dancer2/" });
    dispatch({ type: "ENABLE_BUTTONS", enabledCurrent: enabledCharacter2 });

    dispatchAnimation({
      type: "FADEOUT_START",
      nextState: statesEnum.nextState(animationManager.current),
    });
  };

  const onClickBack = () => {
    dispatch({ type: "RESET_ACTIONS" });
    dispatchAnimation({
      type: "FADEOUT_START",
      nextState: statesEnum.selectCharacter,
    });
  };
  const onClickStart = () => {
    dispatch({ type: "START", videoRef });
    dispatchAnimation("FADEOUT_START");
  };
  const onClickReset = () => {
    dispatch({ type: "RESET_ACTIONS" });
  };

  const BodyControllers = [
    /* CENTRAL CORE */
    {
      key: "HEAD",
      classesContainer: classes.bodyPositionHead,
      classesCircle: [
        classes.circleHead,
        character.colorBody,
        character.enabledCurrent["HEAD"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "HEAD" });
      },
      text: stateBody.headText,
      disabled: stateBody.disabled,
    },
    {
      key: "CHEST",
      classesContainer: classes.bodyPositionChest,
      classesCircle: [
        classes.circleChest,
        character.colorBody,
        character.enabledCurrent["CHEST"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "CHEST" });
      },
      text: stateBody.chestText,
      disabled: stateBody.disabled,
    },
    {
      key: "PELVIS",
      classesContainer: classes.bodyPositionPelvis,
      classesCircle: [
        classes.circlePelvis,
        character.colorBody,
        character.enabledCurrent["PELVIS"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "PELVIS" });
      },
      text: stateBody.pelvisText,
      disabled: stateBody.disabled,
    },
    /**/
    /* RIGHT ARM */
    {
      key: "SHOULDER_R",
      classesContainer: classes.bodyPositionShoulderR,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["SHOULDER_R"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "SHOULDER_R" });
      },
      text: stateBody.ShoulderRText,
      disabled: stateBody.disabled,
    },
    {
      key: "ELBOW_R",
      classesContainer: classes.bodyPositionElbowR,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["ELBOW_R"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "ELBOW_R" });
      },
      text: stateBody.ElbowRText,
      disabled: stateBody.disabled,
    },
    {
      key: "HAND_R",
      classesContainer: classes.bodyPositionHandR,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["HAND_R"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "HAND_R" });
      },
      text: stateBody.HandRText,
      disabled: stateBody.disabled,
    },
    /**/
    /* LEFT ARM */
    {
      key: "SHOULDER_L",
      classesContainer: classes.bodyPositionShoulderL,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["SHOULDER_L"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "SHOULDER_L" });
      },
      text: stateBody.ShoulderLText,
      disabled: stateBody.disabled,
    },
    {
      key: "ELBOW_L",
      classesContainer: classes.bodyPositionElbowL,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["ELBOW_L"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "ELBOW_L" });
      },
      text: stateBody.ElbowLText,
      disabled: stateBody.disabled,
    },
    {
      key: "HAND_L",
      classesContainer: classes.bodyPositionHandL,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["HAND_L"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "HAND_L" });
      },
      text: stateBody.HandLText,
      disabled: stateBody.disabled,
    },
    /**/
    /* RIGHT LEG */
    {
      key: "KNEE_R",
      classesContainer: classes.bodyPositionKneeR,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["KNEE_R"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "KNEE_R" });
      },
      text: stateBody.KneeRText,
      disabled: stateBody.disabled,
    },
    {
      key: "FOOT_R",
      classesContainer: classes.bodyPositionFootR,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["FOOT_R"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "FOOT_R" });
      },
      text: stateBody.FootRText,
      disabled: stateBody.disabled,
    },
    /**/
    /* LEFT LEG */
    {
      key: "KNEE_L",
      classesContainer: classes.bodyPositionKneeL,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["KNEE_L"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "KNEE_L" });
      },
      text: stateBody.KneeLText,
      disabled: stateBody.disabled,
    },
    {
      key: "FOOT_L",
      classesContainer: classes.bodyPositionFootL,
      classesCircle: [
        classes.circleSmall,
        character.colorOther,
        character.enabledCurrent["FOOT_L"] ? classes.active : "",
        stateBody.disabled ? classes.disabled : "",
      ].join(" "),
      onClick: () => {
        dispatch({ videoRef, type: "FOOT_L" });
      },
      text: stateBody.FootLText,
      disabled: stateBody.disabled,
    },
  ];

  return (
    <div
      id="mainDiv"
      className={`${classes.divBody} ${
        animationManager.fadeIn ? classes.fadeIn : ""
      } ${animationManager.fadeOut ? classes.fadeOut : ""} ${classesNames}`}
      onAnimationEnd={onAnimationEnd}
    >
      {animationManager.current === statesEnum.selectCharacter && (
        <SelectCharacter
          title1="DANCER 1"
          onClick1={onClickSelectCharacter1}
          title2="DANCER 2"
          onClick2={onClickSelectCharacter2}
        />
      )}
      {animationManager.current !== statesEnum.selectCharacter && (
        <SelectBodyPart
          BodyControllers={BodyControllers}
          dispatch={dispatch}
          src={stateBody.videoSubject + "DANCER.png"}
          footerOptions={{
            disabled: stateBody.disabled,
            onClickBack: onClickBack,
            onClickReset: onClickReset,
            onClickStart: onClickStart,
          }}
        />
      )}
    </div>
  );
}

export default BodyController;
