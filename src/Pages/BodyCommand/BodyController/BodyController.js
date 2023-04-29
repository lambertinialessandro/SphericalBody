import CircleButton from "../../../Components/CircleButton/CircleButton";

import classes from "./BodyController.module.css";

function BodyController({ videoRef, stateBody, dispatch /* , footer */ }) {
  const generateActions = (action1, action2, action3) => {
    return [
      {
        key: "1",
        onClick: action1,
        head: (
          <span className="material-symbols-outlined">move_selection_up</span>
        ),
        text: "Floating",
      },
      {
        key: "2",
        onClick: action2,
        head: <span className="material-symbols-outlined">swap_horiz</span>,
        text: "Rejecting",
      },
      {
        key: "3",
        onClick: action3,
        head: <span className="material-symbols-outlined">download</span>,
        text: "Supporting",
      },
    ];
  };

  const BodyControllers = [
    /* CENTRAL CORE */
    {
      key: "HEAD",
      classesContainer: classes.bodyPositionHead,
      classesCircle: classes.circleHead,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "HEAD", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "HEAD", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "HEAD", task: "SUPPORTING" });
        }
      ),
      text: stateBody.headText,
      disabled: stateBody.disabled,
    },
    {
      key: "CHEST",
      classesContainer: classes.bodyPositionChest,
      classesCircle: classes.circleChest,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "CHEST", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "CHEST", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "CHEST", task: "SUPPORTING" });
        }
      ),
      text: stateBody.chestText,
      disabled: stateBody.disabled,
    },
    {
      key: "PELVIS",
      classesContainer: classes.bodyPositionPelvis,
      classesCircle: classes.circlePelvis,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "PELVIS", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "PELVIS", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "PELVIS", task: "SUPPORTING" });
        }
      ),
      text: stateBody.pelvisText,
      disabled: stateBody.disabled,
    },
    /**/
    /* RIGHT ARM */
    {
      key: "SHOULDER_R",
      classesContainer: classes.bodyPositionShoulderR,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "SHOULDER_R", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "SHOULDER_R", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "SHOULDER_R", task: "SUPPORTING" });
        }
      ),
      text: stateBody.ShoulderRText,
      disabled: stateBody.disabled,
    },
    {
      key: "ELBOW_R",
      classesContainer: classes.bodyPositionElbowR,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "ELBOW_R", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "ELBOW_R", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "ELBOW_R", task: "SUPPORTING" });
        }
      ),
      text: stateBody.ElbowRText,
      disabled: stateBody.disabled,
    },
    {
      key: "HAND_R",
      classesContainer: classes.bodyPositionHandR,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "HAND_R", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "HAND_R", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "HAND_R", task: "SUPPORTING" });
        }
      ),
      text: stateBody.HandRText,
      disabled: stateBody.disabled,
    },
    /**/
    /* LEFT ARM */
    {
      key: "SHOULDER_L",
      classesContainer: classes.bodyPositionShoulderL,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "SHOULDER_L", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "SHOULDER_L", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "SHOULDER_L", task: "SUPPORTING" });
        }
      ),
      text: stateBody.ShoulderLText,
      disabled: stateBody.disabled,
    },
    {
      key: "ELBOW_L",
      classesContainer: classes.bodyPositionElbowL,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "ELBOW_L", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "ELBOW_L", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "ELBOW_L", task: "SUPPORTING" });
        }
      ),
      text: stateBody.ElbowLText,
      disabled: stateBody.disabled,
    },
    {
      key: "HAND_L",
      classesContainer: classes.bodyPositionHandL,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "HAND_L", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "HAND_L", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "HAND_L", task: "SUPPORTING" });
        }
      ),
      text: stateBody.HandLText,
      disabled: stateBody.disabled,
    },
    /**/
    /* RIGHT LEG */
    {
      key: "KNEE_R",
      classesContainer: classes.bodyPositionKneeR,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "KNEE_R", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "KNEE_R", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "KNEE_R", task: "SUPPORTING" });
        }
      ),
      text: stateBody.KneeRText,
      disabled: stateBody.disabled,
    },
    {
      key: "FOOT_R",
      classesContainer: classes.bodyPositionFootR,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "FOOT_R", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "FOOT_R", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "FOOT_R", task: "SUPPORTING" });
        }
      ),
      text: stateBody.FootRText,
      disabled: stateBody.disabled,
    },
    /**/
    /* LEFT LEG */
    {
      key: "KNEE_L",
      classesContainer: classes.bodyPositionKneeL,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "KNEE_L", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "KNEE_L", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "KNEE_L", task: "SUPPORTING" });
        }
      ),
      text: stateBody.KneeLText,
      disabled: stateBody.disabled,
    },
    {
      key: "FOOT_L",
      classesContainer: classes.bodyPositionFootL,
      classesCircle: classes.circleSmall,
      onClicks: generateActions(
        () => {
          dispatch({ videoRef, type: "FOOT_L", task: "FLOATING" });
        },
        () => {
          dispatch({ videoRef, type: "FOOT_L", task: "REJECTING" });
        },
        () => {
          dispatch({ videoRef, type: "FOOT_L", task: "SUPPORTING" });
        }
      ),
      text: stateBody.FootLText,
      disabled: stateBody.disabled,
    },
  ];

  return (
    <div className={classes.divBody}>
      {BodyControllers.map((elem) => (
        <CircleButton {...elem} />
      ))}
    </div> /* (footer ? { footer } : "") */
  );
}

export default BodyController;
