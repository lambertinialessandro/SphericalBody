import classes from "./ButtonLink.module.css";

function ButtonLink(props) {
  const { index, path, title, onClick } = props;

  return (
    <div
      className={`${classes.cardLinkBox} ${
        index % 2 == 0 ? classes.blueColor : classes.yellowColor
      }`}
      onClick={(event) => {
        onClick(event, path);
      }}
    >
      <div className={classes.linkTextContext}>
        <h4 className={classes.linkTitle}>{title}</h4>
      </div>
    </div>
  );
}

export default ButtonLink;
