import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

interface MoveYProps {
  character: { active: string };
  comp_id: string;
}

const StyledDiv = styled.div`
  text-align: center;
  border-radius: 0.375rem;
  background-color: #1e40af; /* bg-blue-700 */
  color: white;
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 0.875rem;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
`;

const StyledInput = styled.input`
  color: black;
  text-align: center;
  width: 4rem;
  margin: 0 0.5rem;
`;

const MoveY: React.FC<MoveYProps> = ({ character, comp_id }) => {
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
      <StyledDiv id={comp_id} onClick={handleClick}>
        Move Y
        <StyledInput
          type="number"
          value={steps}
          onChange={(e) => setSteps(parseInt(e.target.value))}
        />
        steps
      </StyledDiv>
    </Paper>
  );
};

export default MoveY;