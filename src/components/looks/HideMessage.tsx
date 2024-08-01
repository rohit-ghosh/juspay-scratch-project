import React from "react";
import Paper from "@mui/material/Paper";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface HideMessageProps {
  character: { active: string };
  comp_id: string;
}

const StyledDiv = styled.div`
  border-radius: 0.25rem;
  background-color: #6b46c1;
  text-align: center;
  color: white;
  max-width: fit-content;
  padding: 0.25rem;
  margin: 0.75rem 0;
`;

const HideMessage: React.FC<HideMessageProps> = ({ character, comp_id }) => {
  const appState = useAppSelector((state:RootState) => state.app);
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