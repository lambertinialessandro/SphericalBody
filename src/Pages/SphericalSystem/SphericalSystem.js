import classes from "./SphericalSystem.module.css";

function SphericalSystem() {
  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>SPHERICAL SYSTEM</h4>
        </div>
      </div>

      <div className={classes.containerSphericalSystem}>
        <p className={classes.textSphericalSystem}>
          The Spherical System on its own is very complex. For this research, I
          analyzed a way to compact it into a few basic and general principles
          that I would like to address as follows.
          <br />
          <br />
          The Spherical System is a movement practice tool developed by Fernando
          Domínguez Rincón that promotes mind-body connectivity over
          strength-form. I t consists of the visualization of a “Spherical Body”
          that is made up of spheres, strings, and a cube.
        </p>
        <div className={classes.textSphericalSystem}>
          <p>The elements that constitute the Spherical Body are:</p>
          <ul className={classes.normalList}>
            <li>35 spheres</li>
            <li>29 strings</li>
            <li>01 cube</li>
          </ul>
          <br />
          <p>
            Through a guided experience, is recommended that the participants
            close their eyes (to not connect - or distract by the outside
            environment). The participants should inhale and exhale three times
            before entering the first activation.
          </p>
        </div>
        <p className={classes.textSphericalSystem}>
          After this, the participants decide on a "Code of Spheres", meaning
          that they select a number of spheres (normally between 4 or 8 spheres)
          and name them by numbers; from 1 to 8.
          <br />
          <br />
          For this research, the dancers selected a code of five spheres.
          <br />
          <br />
          Having the code, the participants proceed to improvise using a large
          variety of tasks that The Spherical System offer.
        </p>
      </div>
    </>
  );
}

export default SphericalSystem;
