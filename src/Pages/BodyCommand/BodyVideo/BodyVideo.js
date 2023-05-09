import classes from "./BodyVideo.module.css";

function BodyVideo(props) {
  const { stateBody, videoRef, onEnded } = props;
  const src = stateBody.videoSubject + "IDLE.mp4";
  console.log("src", src);

  return (
    <div
      className={classes.divVideo}
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
      >
        <source src={src} type="video/mp4" />
        <source src={stateBody.videoSubject + "HEAD.webm"} type="video/mp4" />
        <source src={stateBody.videoSubject + "CHEST.webm"} type="video/mp4" />
      </video>
    </div>
  );
}

export default BodyVideo;
