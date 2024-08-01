// src/components/looks/ThinkWithTimer.tsx

import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "@emotion/styled";

interface ThinkWithTimerProps {
  character: {
    active: string;
  };
  comp_id: string;
}

interface State {
  show_msg: boolean;
  timer_message: string;
  timer_for_msg: number;
  character_id?: string;
}

const Container = styled(Paper)`
  elevation: 3;
  .rounded {
    text-align: center;
    background-color: #6b46c1;
    padding: 0.5rem;
    margin: 0.75rem 0;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0.5rem 0;
  }
  .text-white {
    color: white;
  }
  .input {
    margin: 0 0.5rem;
    padding: 0.25rem;
    text-align: center;
  }
  .message-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
    background-color: #4a148c;
    color: white;
    padding: 0.5rem;
    margin: 0.5rem 0;
    font-size: 0.875rem;
    cursor: pointer;
  }
`;

const ThinkWithTimer: React.FC<ThinkWithTimerProps> = ({ character, comp_id }) => {
  const [state, setState] = useState<State>({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      if (el) el.style.display = "none";
      if (el2) el2.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true });
    if (el) {
      el.style.display = "inline-block";
      el.style.position = "relative";
      el.innerHTML = state.timer_message;
    }
    if (el2) {
      el2.style.display = "block";
      el2.style.position = "relative";
    }

    window.setTimeout(() => {
      setState({ ...state, show_msg: false });
      if (el) el.style.display = "none";
      if (el2) el2.style.display = "none";
    }, state.timer_for_msg * 1000);
  };

  return (
    <Container>
      <div className="rounded">
        <div className="grid">
          <div className="text-white">Message</div>
          <input
            className="input"
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, timer_message: e.target.value });
            }}
          />
        </div>
        <div className="grid">
          <div className="text-white">Timer:</div>
          <input
            className="input"
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
          className="message-box"
          onClick={() => displayMessage()}
        >
          {`Think ${state.timer_message}`}
        </div>
      </div>
    </Container>
  );
};

export default ThinkWithTimer;