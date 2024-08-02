import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface ThinkWithTimerProps {
  comp_id: string;
}

interface State {
  show_msg: boolean;
  timer_message: string;
  timer_for_msg: number;
  character_id?: string;
}

const Container = styled(Paper)`
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
  text-align: center;
  background-color: #1e3a8a;

  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 8px;
    margin: 8px 0;
  }

  .text-white {
    color: white;
  }

  .input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    text-align: center;
  }

  .message-box {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1d4ed8;
    color: white;
    padding: 8px;
    margin: 16px 0;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
  }
`;

const ThinkWithTimer: React.FC<ThinkWithTimerProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
  const [state, setState] = useState<State>({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
    character_id: "",
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
    setState({ ...state, show_msg: true, character_id: character.active });
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
    <Container elevation={3}>
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
    </Container>
  );
};

export default ThinkWithTimer;
