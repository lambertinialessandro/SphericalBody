import classes from "./BodyVideo.module.css";

const videoSubject = "./video/simone/";

function BodyVideo(props) {
  const { videoRef, onEnded, src } = props;

  return (
    <div
      className={classes.divVideo}
      style={{
        backgroundImage: 'url("./video/simone/startVideo.jpg")',
      }}
    >
      <video
        className={classes.videoElement}
        ref={videoRef}
        muted={true}
        onEnded={onEnded}
        src={src}
      />
    </div>
  );
}

export default BodyVideo;
