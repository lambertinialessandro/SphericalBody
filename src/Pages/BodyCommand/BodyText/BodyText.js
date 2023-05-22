import classes from "./BodyText.module.css";

function BodyText({ context }) {
  return (
    <div className={classes.TextArea}>
      {context.map((item, index) => {
        return (
          <>
            <p key={index} className={classes.TextAreaText}>
              {item}
            </p>
            <br />
          </>
        );
      })}
    </div>
  );
}

export default BodyText;
