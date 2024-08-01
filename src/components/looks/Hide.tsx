// src/components/looks/Hide.tsx

import React from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";

// Define the types for the component props
interface HideProps {
  character: {
    active: string;
  };
  comp_id: string;
}

// Styled component using styled-components
const HideButton = styled.div`
  text-align: center;
  border-radius: 0.375rem;
  background-color: #6b46c1;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Hide: React.FC<HideProps> = ({ character, comp_id }) => {
  // To handle hide component
  const handleDisplay = () => {
    const el = document.getElementById(character.active);
    if (el) {
      el.style.display = "none";
    }
  };

  return (
    <Paper elevation={3}>
      <HideButton id={comp_id} onClick={handleDisplay}>
        Hide
      </HideButton>
    </Paper>
  );
};

export default Hide;