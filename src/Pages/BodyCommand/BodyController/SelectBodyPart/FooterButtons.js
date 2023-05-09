import classes from "./FooterButtons.module.css";

function FooterButtons(props) {
  const { onClickBack, onClickReset, onClickStart } = props;
  return (
    <div className={classes.footerContainer}>
      <input
        className={classes.actionButton}
        type="button"
        value="BACK"
        onClick={onClickBack}
      />
      <input
        className={classes.actionButton}
        type="button"
        value="RESET"
        onClick={onClickReset}
      />
      <input
        className={classes.actionButton}
        type="button"
        value="START"
        onClick={onClickStart}
      />
    </div>
  );
}

export default FooterButtons;
