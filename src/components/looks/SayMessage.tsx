import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { RootState, useAppSelector } from "../../redux/store";
import styled from "@emotion/styled";

interface SayMessageProps {
  comp_id: string;
}

const SayMessage: React.FC<SayMessageProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
  const app = useAppSelector((state: RootState) => state.app);
  const [state, setState] = useState({
    show_msg: false,
    message: "",
    character_id: "",
  });

  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);

    if (state.show_msg && state.character_id === character.active) {
      setState({ ...state, show_msg: false });
      if (el) el.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true, character_id: character.active });
    if (el) {
      el.style.display = "block";
      el.style.position = "relative";
      el.innerHTML = state.message;
    }
    if (el2) el2.style.display = "none";

    window.clearTimeout(app.appId);
  };

  return (
    <StyledPaper elevation={3}>
      <StyledContainer>
        <StyledGrid>
          <StyledLabel>Message</StyledLabel>
          <StyledInput
            type="text"
            value={state.message}
            onChange={(e) => {
              setState({ ...state, message: e.target.value });
            }}
          />
        </StyledGrid>
        <StyledButton id={comp_id} onClick={displayMessage}>
          {`Say ${state.message}`}
        </StyledButton>
      </StyledContainer>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  padding: 16px;
  margin: 16px 0;
`;

const StyledContainer = styled.div`
  text-align: center;
  background-color: #6b46c1;
  padding: 16px;
  border-radius: 8px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`;

const StyledLabel = styled.div`
  color: white;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5a67d8;
  color: white;
  padding: 8px 16px;
  margin: 16px 0;
  cursor: pointer;
  border-radius: 4px;
`;

export default SayMessage;
