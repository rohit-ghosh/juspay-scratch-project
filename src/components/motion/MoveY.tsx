import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface MoveYProps {
  comp_id: string;
}

const StyledDiv = styled.div`
  text-align: center;
  border-radius: 0.25rem;
  background-color: #1e3a8a;
  color: white;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 0.875rem;
  margin-left: auto;
  margin-right: auto;
`;

const StyledInput = styled.input`
  color: black;
  text-align: center;
  width: 4rem;
  margin: 0 0.5rem;
`;

const MoveY: React.FC<MoveYProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
  const [steps, setSteps] = useState<number>(0);

  const handleClick = () => {
    const el = document.getElementById(`${character.active}-div`);
    if (el) {
      const top = el.offsetTop;
      el.style.position = "relative";
      el.style.top = `${top + steps}px`;
    }
  };

  return (
    <Paper elevation={3}>
      <StyledDiv>
        Move Y
        <StyledInput
          type="number"
          value={steps}
          onChange={(e) => {
            if (e.target.value) setSteps(parseInt(e.target.value));
            else setSteps(0);
          }}
        />
        steps
        <div
          id={comp_id}
          className="flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex mx-auto">Move</div>
        </div>
      </StyledDiv>
    </Paper>
  );
};

export default MoveY;
