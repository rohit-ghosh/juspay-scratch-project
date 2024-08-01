import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "@emotion/styled";

interface SayMessageWithTimerProps {
  character: {
    active: string;
  };
  comp_id: string;
}

interface State {
  show_msg: boolean;
  timer_message: string;
  timer_for_msg: number;
}

const Container = styled(Paper)`
  .rounded {
    border-radius: 8px;
  }
  .text-center {
    text-align: center;
  }
  .bg-purple-500 {
    background-color: #9c27b0;
  }
  .bg-purple-700 {
    background-color: #7b1fa2;
  }
  .text-white {
    color: white;
  }
  .p-2 {
    padding: 0.5rem;
  }
  .my-3 {
    margin: 1rem 0;
  }
  .grid {
    display: grid;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  .my-2 {
    margin: 0.5rem 0;
  }
  .mx-2 {
    margin: 0 0.5rem;
  }
  .p-1 {
    padding: 0.25rem;
  }
  .py-0 {
    padding-top: 0;
    padding-bottom: 0;
  }
  .flex {
    display: flex;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .text-sm {
    font-size: 0.875rem;
  }
`;

const SayMessageWithTimer: React.FC<SayMessageWithTimerProps> = ({ character, comp_id }) => {
  const [state, setState] = useState<State>({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (el && el2) {
      el2.style.display = "none";
      if (state.show_msg) {
        setState({ ...state, show_msg: false });
        el.style.display = "none";
        return;
      }
      setState({ ...state, show_msg: true });

      el.style.display = "block";
      el.style.position = "relative";

      el.innerHTML = state.timer_message;
      window.setTimeout(() => {
        setState({ ...state, show_msg: false });
        el.style.display = "none";
      }, state.timer_for_msg * 1000);
    }
  };

  return (
    <Container elevation={3}>
      <div className="rounded text-center bg-purple-500 p-2 my-3">
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Message</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, timer_message: e.target.value });
            }}
          />
        </div>
        <div className="grid grid-cols-2 my-2">
          <div className="text-white">Timer:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              parseInt(e.target.value) > 0 &&
                setState({ ...state, timer_for_msg: parseInt(e.target.value) });
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex flex-row flex-wrap text-center bg-purple-700 text-white px-2 py-1 my-2 text-sm cursor-pointer"
          onClick={() => displayMessage()}
        >
          {`Say ${state.timer_message}`}
        </div>
      </div>
    </Container>
  );
};

export default SayMessageWithTimer;