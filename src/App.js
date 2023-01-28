import BodyCommands from "./BodyCommands/BodyCommands";
import BodySingle from "./BodySingle/BodySingle";

function App() {
  const isBodySingle = false;
  const isBodyCommands = true;

  return (
    <div>
      {isBodySingle && <BodySingle />}
      {isBodyCommands && <BodyCommands />}
    </div>
  );
}

export default App;
