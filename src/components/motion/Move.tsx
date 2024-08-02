import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface MoveProps {
  comp_id: string;
}

const Move: React.FC<MoveProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
  const [steps, setSteps] = useState<number>(0);

  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);

    if (el) {
      const left = el.offsetLeft;
      el.style.position = "relative";
      el.style.left = left + steps + "px";
    }
  };

  return (
    <Paper elevation={3}>
      <StyledDiv id={comp_id} onClick={handleClick}>
        Move X{" "}
        <input
          type="number"
          className="text-black text-center w-16 mx-2"
          value={steps}
          onChange={(e) => {
            if (e.target.value) setSteps(parseInt(e.target.value));
            else setSteps(0);
          }}
        />{" "}
        steps
      </StyledDiv>
    </Paper>
  );
};

const StyledDiv = styled.div`
  text-align: center;
  border-radius: 0.25rem;
  background-color: #1e3a8a;
  color: white;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 0.875rem;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;

export default Move;
