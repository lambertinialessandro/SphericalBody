import classes from "./Description.module.css";

function Description() {
  return (
    <>
      <div className={`${classes.initDiv} z-10`}>
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>DESCRIPTION</h4>
        </div>
      </div>
      <div className={classes.containerDescription}>
        <p className={classes.textDescription}>
          With the "Spherical Body" choreography, you'll be delving into the
          intricacies of movement through various stages.
        </p>
        <p className={classes.textDescription}>
          Your journey begins with exploring a software based on Dominguez
          Rincon's "The Spherical System." In this App, you will look at how we
          reimagine the body structure with a diagram that represents "The
          Spherical Body", which features the five spheres selected by each
          dancer, which we refer to as "The Code".
        </p>
        <p className={classes.textDescription}>
          You can organize "Their Code" by clicking on the solid color spheres
          to create brief movement sequences that the avatar dancers will
          execute in the order you select. This experience will give you a
          glimpse into how we visualize and organize the body to create
          choreographic material.
        </p>
        <p className={classes.textDescription}>
          Then, you are invited to enter the theater to witness a live
          performance where you will experience more insights about the method
          while the dancers will bring their codes to life, adding layers of
          intricacy.
        </p>
        <p className={classes.textDescription}>
          This performance aims to offer you a behind-the-scenes look at the
          creative process of choreographer Fernando Domínguez Rincón.
        </p>
      </div>
    </>
  );
}

export default Description;
