import CircleButton from "./CircleButton";
import FooterButtons from "./FooterButtons";

import classes from "./SelectBodyPart.module.css";

function SelectBodyPart(props) {
  const { BodyControllers, dispatch, src, footerOptions } = props;
  return (
    <div className={classes.divBodyPart}>
      <div
        className={classes.divBodyBackground}
        style={{
          backgroundImage: 'url("' + src + '")',
        }}
      >
        {BodyControllers.map((elem) => (
          <CircleButton {...elem} dispatch={dispatch} />
        ))}
      </div>
      <FooterButtons {...footerOptions} />
    </div>
  );
}

export default SelectBodyPart;
