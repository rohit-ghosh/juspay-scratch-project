import Paper from "@mui/material/Paper";
import React from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

// Define the types for the component props
interface HideProps {
  comp_id: string;
}

// Styled component using styled-components
const HideButton = styled.div`
  text-align: center;
  border-radius: 0.375rem;
  background-color: #1e3a8a;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.5rem auto;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Hide: React.FC<HideProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
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
