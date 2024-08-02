import GotoXY from "./motion/Goto";
import Hide from "./looks/Hide";
import HideMessage from "./looks/HideMessage";
import Move from "./motion/Move";
import MoveY from "./motion/MoveY";
import SayMessage from "./looks/SayMessage";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import Show from "./looks/Show";
import Size from "./looks/Size";
import Think from "./looks/Think";
import ThinkWithTimer from "./looks/ThinkWithTimer";
import TurnAntiClockwise from "./motion/TurnAntiClockwise";
import TurnClockwise from "./motion/TurnClockwise";

export const getComponent = (key: string, id: string): JSX.Element | null => {
  const componentMap = {
    MOVE_Y: MoveY,
    MOVE: Move,
    TURN_CLOCKWISE: TurnClockwise,
    TURN_ANTI_CLOCKWISE: TurnAntiClockwise,
    GOTO_XY: GotoXY,
    SAY_MESSAGE: SayMessage,
    SAY_MESSAGE_WITH_TIMER: SayMessageWithTimer,
    SIZE: Size,
    SHOW: Show,
    HIDE: Hide,
    HIDE_MESSAGE: HideMessage,
    THINK: Think,
    THINK_TIMER: ThinkWithTimer,
  };
  type ComponentKey = keyof typeof componentMap;

  const Component = componentMap[key as ComponentKey];
  return Component ? <Component comp_id={id} /> : null;
};
