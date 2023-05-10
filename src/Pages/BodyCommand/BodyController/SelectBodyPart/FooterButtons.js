import classes from "./FooterButtons.module.css";

function FooterButtons(props) {
  const { disabled, onClickBack, onClickReset, onClickStart } = props;

  const buttonsClasses = [
    classes.actionButton,
    classes.footerContainer,
    disabled ? classes.disabled : classes.blueButton,
  ].join(" ");
  return (
    <div className={classes.footerContainer}>
      <input
        className={buttonsClasses}
        type="button"
        value="BACK"
        onClick={onClickBack}
        disabled={disabled}
      />
      <input
        className={buttonsClasses}
        type="button"
        value="RESET"
        onClick={onClickReset}
        disabled={disabled}
      />
      <input
        className={buttonsClasses}
        type="button"
        value="START"
        onClick={onClickStart}
        disabled={disabled}
      />
    </div>
  );
}

export default FooterButtons;
