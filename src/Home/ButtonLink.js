import { useState } from "react";
import { useHistory } from "react-router-dom";

import classes from "./ButtonLink.module.css";

function ButtonLink(props) {
  const { to, title, subTitle } = props;
  const history = useHistory();

  const [clicked, setClicked] = useState(false);

  const handleTransitionEnd = () => {
    if (clicked) {
      // history.push(to);
    }
  };

  return (
    <div
      className={`${classes.cardLinkBox} ${clicked && classes.fullscreen}`}
      onTransitionEnd={handleTransitionEnd}
      onClick={() => setClicked(true)}
    >
      <div className={classes.linkTextContext}>
        <h4 className={classes.linkTitle}>{title}</h4>
        <p className={classes.linkSubTitle}>{subTitle}</p>
      </div>
    </div>
  );
}

export default ButtonLink;
