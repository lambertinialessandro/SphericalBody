import CircleButton from "./CircleButton";
import FooterButtons from "./FooterButtons";

import classes from "./SelectBodyPart.module.css";

function SelectBodyPart(props) {
  const { BodyControllers, dispatch, onClickBack, onClickReset, onClickStart } =
    props;
  return (
    <div className={classes.divBodyPart}>
      <div className={classes.divBodyBackground}>
        {BodyControllers.map((elem) => (
          <CircleButton {...elem} dispatch={dispatch} />
        ))}
      </div>
      <FooterButtons
        onClickBack={onClickBack}
        onClickReset={onClickReset}
        onClickStart={onClickStart}
      />
    </div>
  );
}

export default SelectBodyPart;
