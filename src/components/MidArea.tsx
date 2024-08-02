import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Paper from "@mui/material/Paper";
import { useAppDispatch } from "../redux/store";
import { styled } from "@mui/material";
import { addList } from "../redux/slice/listSlice";

// Define styled components
const StyledButton = styled(Button)`
  margin: 0;
`;

const RunButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#9c27b0"),
  backgroundColor: "#1d4ed8",
  fontSize: '13px',
  '&:hover': {
    backgroundColor: '#1d4sa8',
  }
}));

// Define types for props
interface MidAreaProps {
  area_list: {
    midAreaLists: {
      id: string;
      comps: string[];
    }[];
  };
  event_values: {
    wait: Record<string, number>;
    repeat: Record<string, number>;
  };
}

const MidArea: React.FC<MidAreaProps> = ({ area_list, event_values }) => {
  const dispatch = useAppDispatch();

  const eventFire = (el: HTMLElement | null, etype: string) => {
    if (el) {
      const evObj = new Event(etype, { bubbles: true, cancelable: true });
      el.dispatchEvent(evObj);
    }
  };

  const handleClick = (arr: string[], id: string) => {
    if (arr.length === 0) return;
    let i = 0;
    let repeat = 1;
    let str1 = `comp${arr[i]}-${id}-${i}`;

    if (arr[i] === "WAIT") {
      let str2 = `comp${arr[i]}-${id}-${i}`;
      let last_time = new Date().getTime();
      let curr_time = new Date().getTime();
      while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
        curr_time = new Date().getTime();
      }
    } else if (arr[i] !== "REPEAT") {
      eventFire(document.getElementById(str1), "click");
    } else {
      repeat = event_values.repeat[str1] + 1;
    }
    i++;

    const cnt = setInterval(() => {
      if (i === arr.length) {
        clearInterval(cnt);
      }

      if (arr[i] === "WAIT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        let last_time = new Date().getTime();
        let curr_time = new Date().getTime();
        while ((curr_time - last_time) / 1000 < event_values.wait[str2] - 2) {
          curr_time = new Date().getTime();
        }
        i++;
      } else if (arr[i] === "REPEAT") {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        repeat = repeat * (event_values.repeat[str2] + 1);
        i++;
      } else if (arr[i - 1] === "REPEAT" && repeat > 2) {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2), "click");
        repeat--;
      } else {
        let str2 = `comp${arr[i]}-${id}-${i}`;
        eventFire(document.getElementById(str2), "click");
        i++;
      }
    }, 2000);
  };

  return (
    <div className="flex-1 h-full overflow-auto p-3">
      <div className="flex justify-between">
        <div className="font-bold mb-5 text-center border-2 rounded text-white bg-green-400 p-2 w-auto">
          Mid Area
        </div>

        <div>
          <StyledButton
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => dispatch(addList())}
          >
            Add List
          </StyledButton>
        </div>
      </div>
      <div className="grid grid-flow-col">
        {area_list.midAreaLists.map((l) => (
          <div className="w-60" key={l.id}>
            <Paper elevation={3} className="p-4">
              <div className="w-52 border-2 border-gray-300 p-2">
                <Droppable droppableId={l.id} type="COMPONENTS">
                  {(provided) => (
                    <ul
                      className={`${l.id} w-48 h-full`}
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      <div className="text-center mx-auto my-2 mb-4">
                        <RunButton
                          variant="contained"
                          startIcon={<PlayArrowIcon />}
                          onClick={() => handleClick(l.comps, l.id)}
                        >
                          Run
                        </RunButton>
                      </div>

                      {l.comps &&
                        l.comps.map((x, i) => {
                          let str = `${x}`;
                          let component_id = `comp${str}-${l.id}-${i}`;

                          return (
                            <Draggable
                              key={`${str}-${l.id}-${i}`}
                              draggableId={`${str}-${l.id}-${i}`}
                              index={i}
                            >
                              {(provided) => (
                                <li
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {getComponent(str, component_id)}
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              </div>
            </Paper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MidArea;