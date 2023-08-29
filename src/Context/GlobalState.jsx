import AudioContext from "./AudioContext";
import intro from "../Sounds/Fur_Elise_Rock.mp3";

function GlobalState(props) {
  const introMusic = new Audio(intro);

  return (
    <AudioContext.Provider value={{ introMusic }}>
      {props.children}
    </AudioContext.Provider>
  );
}

export default GlobalState;