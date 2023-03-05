import classes from "./VideoButtons.module.css";

function VideoButtons(props) {
  const { onStart, onReset, disabled } = props;
  return (
    <div className={classes.divButtons}>
      <div
        className={`${disabled ? classes.disabled : ""} 
      ${classes.buttonStart}`}
        onClick={() => {
          onStart();
        }}
      >
        Start
      </div>
      <div
        className={`${disabled ? classes.disabled : ""} 
      ${classes.buttonReset}`}
        onClick={() => {
          onReset();
        }}
      >
        Reset
      </div>
    </div>
  );
}

export default VideoButtons;
