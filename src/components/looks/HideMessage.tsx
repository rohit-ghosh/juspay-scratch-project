import Paper from "@mui/material/Paper";
import React from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface HideMessageProps {
  comp_id: string;
}

const StyledDiv = styled.div`
  border-radius: 0.25rem;
  background-color: #1e3a8a;
  text-align: center;
  color: white;
  width: 100%;
  padding: 0.25rem;
  margin: 0.75rem 0;
`;

const HideMessage: React.FC<HideMessageProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
  const appState = useAppSelector((state: RootState) => state.app);
  const displayMessage = () => {
    window.clearTimeout(appState.appId);
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (el) el.style.display = "none";
    if (el2) el2.style.display = "none";
  };

  return (
    <Paper elevation={3}>
      <StyledDiv id={comp_id} onClick={displayMessage}>
        Hide Message
      </StyledDiv>
    </Paper>
  );
};

export default HideMessage;
