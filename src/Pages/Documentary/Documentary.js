import classes from "./Documentary.module.css";

function Documentary() {
  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>DOCUMENTARY</h4>
        </div>
      </div>

      <div className={classes.documentaryContainer}>
        <iframe
          className={classes.documentaryVideo}
          src="https://www.youtube.com/embed/vmX7U54kOHk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Documentary;
