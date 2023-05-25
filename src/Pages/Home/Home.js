import { useRef } from "react";
import { useHistory } from "react-router-dom";

import HeaderHome from "./HeaderHome";
import ButtonLink from "./ButtonLink";
import AutomaticAudio from "../../Components/AutomaticAudio/AutomaticAudio";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import classes from "./Home.module.css";

function Home({ links }) {
  const history = useHistory();

  const homeRef = useRef(null);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const divFSM = useRef(null);
  function openFSM(event, path) {
    const currentTarget = event.currentTarget;

    const position = currentTarget.getBoundingClientRect();
    const size = {
      width: window.getComputedStyle(currentTarget).width,
      height: window.getComputedStyle(currentTarget).height,
    };
    const h = window.pageYOffset;

    const currentDivFSM = divFSM.current;
    currentDivFSM.style.top = position.top + h + "px";
    currentDivFSM.style.left = position.left + "px";
    currentDivFSM.style.height = size.height;
    currentDivFSM.style.width = size.width;

    currentDivFSM.style.marginTop = currentTarget.style.marginTop;

    currentDivFSM.innerHTML = currentTarget.innerHTML;

    const includeBlue = currentTarget.className.includes("blue");
    currentDivFSM.classList.add(
      includeBlue ? classes.blueColor : classes.yellowColor
    );
    currentDivFSM.classList.add(classes.fullscreen);

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      history.push(path);
    }, 1200);
  }

  return (
    <div className={classes.home} ref={homeRef}>
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
              value: ["#08827f", "#c4a91b"],
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#ffffff",
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
              color: "#b6b2b2",
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
      <div className={classes.containerContext}>
        <div className={classes.containerButtons}>
          {links.map((link) => (
            <ButtonLink {...{ ...link, onClick: openFSM }} />
          ))}
        </div>
        <div className={classes.fsm_actual} ref={divFSM}></div>
      </div>
      <AutomaticAudio src="./audio/Spherical body music final.mp3" />
    </div>
  );
}

export default Home;
