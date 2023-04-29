import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

import HeaderHome from "./HeaderHome";
import ButtonLink from "./ButtonLink";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import classes from "./Home.module.css";

function Home({ links }) {
  const history = useHistory();

  const homeRef = useRef(null);

  /* useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const delta = 30;

      console.log("homeRef.current", homeRef.current);
      console.log("event.deltaY", event.deltaY);
      console.log("event.deltaX", event.deltaX);

      window.scrollBy({
        // homeRef.current
        left:
          event.deltaY != 0
            ? event.deltaY < 0
              ? -delta
              : delta
            : event.deltaX < 0
            ? -delta
            : delta,
      });
    };

    homeRef.current.addEventListener("wheel", handleWheel);
    /* return () => {
      homeRef.current.removeEventListener("onmousedown", handleWheel);
    }; * /
  }, []); */

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const divFSM = useRef(null);
  function openFSM(event, path) {
    const currentTarget = event.currentTarget;
    const currentDivFSM = divFSM.current;

    const position = currentTarget.getBoundingClientRect();
    const size = {
      width: window.getComputedStyle(currentTarget).width,
      height: window.getComputedStyle(currentTarget).height,
    };

    homeRef.current.classList.add(classes.hiddenOverflowX);

    currentDivFSM.style.top = position.top + "px";
    currentDivFSM.style.left = position.left + "px";
    currentDivFSM.style.height = size.height;
    currentDivFSM.style.width = size.width;
    currentDivFSM.style.margin = currentTarget.style.margin;
    currentDivFSM.innerHTML = currentTarget.innerHTML;

    currentDivFSM.classList.add(classes.fullscreen);

    setTimeout(() => {
      history.push(path);
    }, 2200);
  }

  return (
    <div id="home" ref={homeRef}>
      {/* https://vincentgarreau.com/particles.js/#default */}
      <Particles
        className={classes.particles}
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#07827f",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#0c7472",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 5,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#07827f",
              opacity: 1,
              width: 2,
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "bounce",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: false,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <HeaderHome />
      <div className={classes.divButtons}>
        <div className={classes.buttons}>
          {links.map((link) => (
            <ButtonLink {...{ ...link, onClick: openFSM }} />
          ))}
        </div>
        <div className={classes.fsm_actual} ref={divFSM}></div>
      </div>
    </div>
  );
}

export default Home;
