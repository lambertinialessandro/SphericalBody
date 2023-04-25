import classes from "./BodyVideo.module.css";

const videoSubject = "./video/subject1/";

function BodyVideo(props) {
  const { videoRef, onEnded, src } = props;

  return (
    <div
      className={classes.divVideo}
      style={{ backgroundImage: 'url("./video/subject1/startVideo.jpg")' }}
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
