import { useEffect, useRef } from "react";
import ButtonLink from "./ButtonLink";

import classes from "./Home.module.css";

function Home() {
  const links = [
    {
      key: "SingleCommand",
      to: "/SingleCommand",
      title: "Single Command",
      subTitle: "There will be shown one command at a time",
    },
    {
      key: "MultipleCommand",
      to: "/MultipleCommand",
      title: "Multiple Command",
      subTitle: "There will be shown one command at a time",
    },
    {
      key: "Duet",
      to: "/Duet",
      title: "Duet",
      subTitle: "Duet",
    },
    {
      key: "Documentation",
      to: "/Documentation",
      title: "Documentation",
      subTitle: "Documentation",
    },
  ];

  const homeRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();

      console.log("homeRef.current", homeRef.current);
      console.log("event.deltaY", event.deltaY);
      console.log("event.deltaX", event.deltaX);

      window.scrollBy({
        // homeRef.current
        left:
          event.deltaY != 0
            ? event.deltaY < 0
              ? -30
              : 30
            : event.deltaX < 0
            ? -30
            : 30,
      });
    };

    homeRef.current.addEventListener("wheel", handleWheel);
    /* return () => {
      homeRef.current.removeEventListener("onmousedown", handleWheel);
    }; */
  }, []);

  return (
    <div id="home" className="" ref={homeRef}>
      <div id="canvas-div" className="canvas-div"></div>
      <div className={classes.divButtons}>
        <div className={classes.buttones}>
          {links.map((link) => (
            <ButtonLink {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
