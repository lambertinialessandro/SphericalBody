import classes from "./ButtonLink.module.css";

function ButtonLink(props) {
  const { path, title, subTitle, onClick } = props;

  return (
    <div
      className={`${classes.cardLinkBox}`}
      onClick={(event) => {
        onClick(event, path);
      }}
    >
      <div className={classes.linkTextContext}>
        <h4 className={classes.linkTitle}>{title}</h4>
        <p className={classes.linkSubTitle}>{subTitle}</p>
      </div>
    </div>
  );
}

export default ButtonLink;
