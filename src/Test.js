import CircleButton from "./Components/CircleButton/CircleButton";

import classes from "./Components/CircleButton/CircleButton.module.css";

function Test() {
  const circles = [
    {
      key: "1",
      classesContainer: classes.testPos1,
      classesCircle: classes.testSize,
      text: "1",
      disabled: false,
      onClicks: [
        {
          key: "1",
          onClick: () => {
            console.log("SCELTA 1");
          },
          head: "1",
          text: "scelta",
        },
      ],
    },
  ];
  return (
    <>
      <span class="material-symbols-outlined">unfold_more_double</span>
      <span class="material-symbols-outlined">swap_horiz</span>
      <span class="material-symbols-outlined">download</span>
      <span className="material-symbols-outlined">step_out</span>,
      <span className="material-symbols-outlined">move_selection_up</span>
      <span className="material-symbols-outlined">shift_lock</span>
      <span className="material-symbols-outlined">height</span>
      <span className="material-symbols-outlined">vertical_align_bottom</span>
      <span className="material-symbols-outlined">width</span>
      <span class="material-symbols-outlined">settings_ethernet</span>
      {circles.map((elem) => (
        <CircleButton {...elem} />
      ))}
    </>
  );
}

export default Test;
