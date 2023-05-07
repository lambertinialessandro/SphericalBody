import classes from "./SelectCharacter.module.css";

function SelectCharacter(props) {
  const { title1, onClick1, title2, onClick2 } = props;
  return (
    <div className={classes.divBox}>
      <div
        className={`${classes.cardLinkBox} ${classes.yellowColor}`}
        onClick={onClick1}
      >
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>{title1}</h4>
        </div>
      </div>
      <div
        className={`${classes.cardLinkBox} ${classes.blueColor}`}
        onClick={onClick2}
      >
        <div className={classes.linkTextContext}>
          <h4 className={classes.linkTitle}>{title2}</h4>
        </div>
      </div>
    </div>
  );
}

export default SelectCharacter;
