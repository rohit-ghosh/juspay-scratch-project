import React from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

interface ShowProps {
  character: {
    active: string;
  };
  comp_id: string;
}

const StyledDiv = styled.div`
  border-radius: 0.25rem;
  text-align: center;
  background-color: #1e3a8a;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Show: React.FC<ShowProps> = ({ character, comp_id }) => {
  // To handle show component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    if (el) {
      el.style.display = "inline-block";
    }
  };

  return (
    <Paper elevation={3}>
      <StyledDiv id={comp_id} onClick={handleDisplay}>
        Show
      </StyledDiv>
    </Paper>
  );
};

export default Show;