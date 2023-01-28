import BodyClickPart from "./BodyClickPart";

import classes from "./BodyClick.module.css";

function BodyClick(props) {
  const { stateBody, dispatch } = props;

  return (
    <div
      className={`${stateBody.disabled ? classes.disabled : ""} 
    ${classes.divBody}`}
    >
      {/* CENTRAL CORE */}
      <BodyClickPart
        classes={classes.bodyPositionHead}
        onClick={() => dispatch({ type: "HEAD" })}
        text={stateBody.headText}
        disabled={stateBody.disabled}
      />
      <BodyClickPart
        classes={classes.bodyPositionChest}
        onClick={() => dispatch({ type: "CHEST" })}
        text={stateBody.chestText}
        disabled={stateBody.disabled}
      />
      <BodyClickPart
        classes={classes.bodyPositionPelvis}
        onClick={() => dispatch({ type: "PELVIS" })}
        text={stateBody.pelvisText}
        disabled={stateBody.disabled}
      />

      {/* RIGHT ARM */}
      <BodyClickPart
        classes={classes.bodyPositionShoulderR}
        onClick={() => dispatch({ type: "SHOULDER_R" })}
        text={stateBody.ShoulderRText}
        disabled={stateBody.disabled}
      />
      <BodyClickPart
        classes={classes.bodyPositionElbowR}
        onClick={() => dispatch({ type: "ELBOW_R" })}
        text={stateBody.ElbowRText}
        disabled={stateBody.disabled}
      />
      <BodyClickPart
        classes={classes.bodyPositionHandR}
        onClick={() => dispatch({ type: "HAND_R" })}
        text={stateBody.HandRText}
        disabled={stateBody.disabled}
      />

      {/* LEFT ARM */}
      <BodyClickPart
        classes={classes.bodyPositionShoulderL}
        onClick={() => dispatch({ type: "SHOULDER_L" })}
        text={stateBody.ShoulderLText}
        disabled={stateBody.disabled}
      />
      <BodyClickPart
        classes={classes.bodyPositionElbowL}
        onClick={() => dispatch({ type: "ELBOW_L" })}
        text={stateBody.ElbowLText}
        disabled={stateBody.disabled}
      />
      <BodyClickPart
        classes={classes.bodyPositionHandL}
        onClick={() => dispatch({ type: "HAND_L" })}
        text={stateBody.HandLText}
        disabled={stateBody.disabled}
      />

      {/* RIGHT LEG */}
      <BodyClickPart
        classes={classes.bodyPositionKneeR}
        onClick={() => dispatch({ type: "KNEE_R" })}
        text={stateBody.KneeRText}
        disabled={stateBody.disabled}
      />
      <BodyClickPart
        classes={classes.bodyPositionFootR}
        onClick={() => dispatch({ type: "FOOT_R" })}
        text={stateBody.FootRText}
        disabled={stateBody.disabled}
      />

      {/* LEFT LEG */}
      <BodyClickPart
        classes={classes.bodyPositionKneeL}
        onClick={() => dispatch({ type: "KNEE_L" })}
        text={stateBody.KneeLText}
        disabled={stateBody.disabled}
      />
      <BodyClickPart
        classes={classes.bodyPositionFootL}
        onClick={() => dispatch({ type: "FOOT_L" })}
        text={stateBody.FootLText}
        disabled={stateBody.disabled}
      />
    </div>
  );
}

export default BodyClick;
