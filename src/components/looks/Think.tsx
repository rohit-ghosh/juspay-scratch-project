import Paper from "@mui/material/Paper";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface ThinkMessageProps {
  comp_id: string;
}

interface State {
  show_msg: boolean;
  message: string;
  character_id: string;
}

const ThinkMessage: React.FC<ThinkMessageProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
  const app = useAppSelector((state: RootState) => state.app);
  const [state, setState] = useState<State>({
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
      if (el2) el2.style.display = "none";
      return;
    }
    setState({ ...state, show_msg: true, character_id: character.active });
    if (el) {
      el.style.display = "block";
      el.style.position = "relative";
      el.innerHTML = state.message;
    }
    if (el2) {
      el2.style.display = "block";
      el2.style.position = "relative";
    }
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
              e.target.value.length > 0 &&
                setState({ ...state, message: e.target.value });
            }}
          />
        </StyledGrid>
        <StyledMessageBox id={comp_id} onClick={() => displayMessage()}>
          {`Think ${state.message}`}
        </StyledMessageBox>
      </StyledContainer>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  margin: 16px 0;
`;

const StyledContainer = styled.div`
  text-align: center;
  background-color: #1e3a8a;
  padding: 16px;
  border-radius: 0.25rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Adjusted to give input more space */
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`;

const StyledLabel = styled.div`
  color: white;
`;

const StyledInput = styled.input`
  width: 100%; /* Ensure input takes full width of its grid cell */
  padding: 4px;
  text-align: center;
  box-sizing: border-box;
`;

const StyledMessageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d4ed8;
  color: white;
  padding: 8px;
  margin: 16px 0;
  cursor: pointer;
  font-size: 14px;
`;

export default ThinkMessage;
