import classes from "./BodyVideo.module.css";

function BodyVideo(props) {
  const { stateBody, videoRef, onEnded, isStarted } = props;
  const src = stateBody.videoSubject + "IDLE.mp4";

  return (
    <div
      className={[classes.divVideo, isStarted ? classes.fadeIn : ""].join(" ")}
      style={{
        backgroundImage: 'url("' + src + '")',
      }}
    >
      <video
        className={classes.videoElement}
        ref={videoRef}
        muted={true}
        onEnded={onEnded}
        src={src}
        preload="auto"
      ></video>
    </div>
  );
}

export default BodyVideo;
