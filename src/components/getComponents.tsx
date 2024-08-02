import GotoXY from "./motion/Goto";
import Hide from "./looks/Hide";
import HideMessage from "./looks/HideMessage";
import Move from "./motion/Move";
import MoveY from "./motion/MoveY";
import SayMessage from "./looks/SayMessage";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Show from "./looks/Show";
import Size from "./looks/Size";
import store from "../redux/store";
import Think from "./looks/Think";
import ThinkWithTimer from "./looks/ThinkWithTimer";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";

export const getComponent = (key: string, id: string): JSX.Element | null => {
  const character = store.getState().character;
  switch (key) {
    case "MOVE_Y":
      return <MoveY comp_id={id} character={character} />;
    case "MOVE":
      return <Move comp_id={id} character={character} />;
    case "TURN_CLOCKWISE":
      return <TurnClockwise comp_id={id} />;
    case "TURN_ANTI_CLOCKWISE":
      return <TurnAntiClockwise comp_id={id} />;
    case "GOTO_XY":
      return <GotoXY comp_id={id} character={character} />;
    case "SAY_MESSAGE":
      return <SayMessage comp_id={id} />;
    case "SAY_MESSAGE_WITH_TIMER":
      return <SayMessageWithTimer comp_id={id} character={character} />;
    case "SIZE":
      return <Size comp_id={id} character={character} />;
    case "SHOW":
      return <Show comp_id={id} character={character} />;
    case "HIDE":
      return <Hide comp_id={id} character={character} />;
    case "HIDE_MESSAGE":
      return <HideMessage comp_id={id} character={character} />;
    case "THINK":
      return <Think comp_id={id} character={character} />;
    case "THINK_TIMER":
      return <ThinkWithTimer comp_id={id} character={character} />;
    default:
      return null;
  }
};
