import classes from "./BodyVideo.module.css";

function BodyVideo(props) {
  const { stateBody, videoRef1, videoRef2, onEnded, isStarted } = props;
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
        ref={videoRef1}
        muted={true}
        onEnded={onEnded}
        src={src}
        preload="true"
        playsInline
      ></video>
      <video
        className={[classes.videoElement, classes.disable].join(" ")}
        ref={videoRef2}
        muted={true}
        onEnded={onEnded}
        preload="true"
        playsInline
      ></video>
    </div>
  );
}

export default BodyVideo;
