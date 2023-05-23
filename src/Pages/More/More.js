import classes from "./More.module.css";

function More() {
  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>MORE...</h4>
        </div>
      </div>

      <div className={classes.containerDescription}>
        <p className={classes.textDescription}>
          We are launching today the official website of The Spherical System.
          In there, we activated a Forum to create a community. We would like to
          hear your comments about the performance. If you like to share them
          with us, please click on the following link:
          <br />
          <div>
            <a
              href="https://www.thesphericalsystem.com/forum"
              className={classes.linkText}
              target="_blank"
              rel="noreferrer"
            >
              www.thesphericalsystem.com/forum
            </a>
          </div>
        </p>

        <p className={classes.textDescription}>
          If you want to support us recovering expenses for this production,
          your donations are welcome!
          <br />
          <a
            href="https://www.gofundme.com/f/318ge2ckrc"
            className={classes.linkText}
            target="_blank"
            rel="noreferrer"
          >
            www.gofundme.com/f/318ge2ckrc
          </a>
        </p>
        <p className={classes.textDescription}>
          We are premiering a documentary video as a tool to spread our passion
          for movement!
        </p>
      </div>

      <div className={classes.moreContainer}>
        <iframe
          className={classes.moreVideo}
          src="https://www.youtube.com/embed/vmX7U54kOHk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className={classes.containerDescription}>
        <p className={classes.textDescription}>
          Are you interested in following our journey within Spherical Body
          performance and The Spherical System?
          <br />
          Here you can find official websites and social media channels.
        </p>
        <p className={`${classes.textDescription} ${classes.bottomsLinks}`}>
          Dance Company
          <a
            href="https://www.fdrdance.com"
            className={classes.linkText}
            target="_blank"
            rel="noreferrer"
          >
            www.fdrdance.com
          </a>
        </p>

        <p className={`${classes.textDescription} ${classes.bottomsLinks}`}>
          Dance Method
          <a
            href="https://www.thesphericalsystem.com"
            className={classes.linkText}
            target="_blank"
            rel="noreferrer"
          >
            www.thesphericalsystem.com
          </a>
        </p>

        <p className={`${classes.textDescription} ${classes.bottomsLinks}`}>
          Instagram
          <a
            href="https://www.instagram.com/fdrdance/"
            className={classes.linkText}
            target="_blank"
            rel="noreferrer"
          >
            @fdrdance
          </a>
          <a
            href="https://www.instagram.com/thesphericalsystem/"
            className={classes.linkText}
            target="_blank"
            rel="noreferrer"
          >
            @thesphericalsystem
          </a>
        </p>

        <p className={`${classes.textDescription} ${classes.bottomsLinks}`}>
          Facebook
          <a
            href="https://www.facebook.com/fdrdancecompany"
            className={classes.linkText}
            target="_blank"
            rel="noreferrer"
          >
            @fdrdancecompany
          </a>
        </p>
      </div>
    </>
  );
}

export default More;
