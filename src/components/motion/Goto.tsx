import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface GotoXYProps {
  comp_id: string;
}

const StyledDiv = styled.div`
  text-align: center;
  border-radius: 0.375rem;
  background-color: #1e3a8a;
  padding: 0.5rem;
  margin: 0.75rem 0;

  .grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 0.5rem 0;
  }

  .text-white {
    color: #ffffff;
  }

  .input {
    margin: 0 0.5rem;
    padding: 0.25rem;
    text-align: center;
  }

  .button {
    text-align: center;
    background-color: #1d4ed8;
    color: #ffffff;
    padding: 0.5rem;
    margin: 0.5rem 0;
    font-size: 0.875rem;
    cursor: pointer;
  }
`;

const GotoXY: React.FC<GotoXYProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
  const [state, setState] = useState({ goto_x: 0, goto_y: 0 });

  const gotoXY = () => {
    const el = document.getElementById(`${character.active}-div`);
    if (el) {
      el.style.position = "relative";
      el.style.left = `${state.goto_x}px`;
      el.style.top = `${state.goto_y}px`;
    }
  };

  return (
    <Paper elevation={3}>
      <StyledDiv>
        <div className="grid">
          <div className="text-white">X</div>
          <input
            className="input"
            type="number"
            value={state.goto_x}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value)) {
                setState({ ...state, goto_x: value });
              }
            }}
          />
        </div>
        <div className="grid">
          <div className="text-white">Y</div>
          <input
            className="input"
            type="number"
            value={state.goto_y}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value)) {
                setState({ ...state, goto_y: value });
              }
            }}
          />
        </div>
        <div id={comp_id} className="button" onClick={gotoXY}>
          Go to X : {state.goto_x} Y : {state.goto_y}
        </div>
      </StyledDiv>
    </Paper>
  );
};

export default GotoXY;
