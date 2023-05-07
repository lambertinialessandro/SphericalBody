import { useState } from "react";

import SelectCharacter from "./SelectCharacter/SelectCharacter";
import CircleButton from "./CircleButton/CircleButton";

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

  const [state, setState] = useState("selectCharacter");
  const nextState = (state) => {
    switch (state) {
      case "selectCharacter":
        return "selectBodyPart";
      case "selectBodyPart":
        return "selectHide";
      case "selectHide":
        return "selectCharacter";
    }
  };

  const [character, setCharacter] = useState(0);
  const onClickSelectCharacter1 = () => {
    setCharacter(1);
    setState(nextState(state));
  };
  const onClickSelectCharacter2 = () => {
    setCharacter(2);
    setState(nextState(state));
  };

  const onClickBack = () => {
    dispatch({ type: "RESET" });
    setState("selectCharacter");
  };
  const onClickStart = () => {
    dispatch({ type: "START" });
    setState(nextState(state));
  };
  const onClickReset = () => {
    dispatch({ type: "RESET" });
    setState(nextState(state));
  };

  const BodyControllers = [
    /* CENTRAL CORE */
    {
      key: "HEAD",
      classesContainer: classes.bodyPositionHead,
      classesCircle: [classes.circleHead, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleChest, classes.blueColor].join(" "),
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
      classesCircle: [classes.circlePelvis, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      classesCircle: [classes.circleSmall, classes.blueColor].join(" "),
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
      {state === "selectCharacter" && (
        <SelectCharacter
          title1="DANCER 1"
          onClick1={onClickSelectCharacter1}
          title2="DANCER 2"
          onClick2={onClickSelectCharacter2}
        />
      )}
      {state === "selectBodyPart" && (
        <div
          Style="margin: auto;
        width: 248px;
        height: 558px;"
        >
          <div className={classes.divBodyBackground}>
            {BodyControllers.map((elem) => (
              <CircleButton {...elem} dispatch={dispatch} />
            ))}
          </div>
          <div className="flex justify-around max-w-[500px]">
            <input type="button" value="BACK" onClick={onClickBack} />
            <input type="button" value="RESET" onClick={onClickReset} />
            <input type="button" value="START" onClick={onClickStart} />
          </div>
        </div>
      )}
      {state === "selectHide" && (
        <div className={classes.divBody}>selectHide</div>
      )}
    </div>
  );
}

export default BodyController;
