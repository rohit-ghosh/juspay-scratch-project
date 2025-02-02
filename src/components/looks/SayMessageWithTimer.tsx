import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface SayMessageWithTimerProps {
  comp_id: string;
}

interface State {
  show_msg: boolean;
  timer_message: string;
  timer_for_msg: number;
}

const Container = styled(Paper)`
  border-radius: 8px;
  text-align: center;
  background-color: #1e3a8a;
  padding: 0.5rem;
  margin: 1rem 0;
`;

const InputContainer = styled.div`
  display: grid;
  align-items: center;
  margin: 0.5rem 0;
`;

const InputLabel = styled.div`
  color: white;
`;

const Input = styled.input`
  padding: 0.25rem;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1d4ed8;
  color: white;
  padding: 8px 16px;
  margin: 0.5rem 0;
  cursor: pointer;
  font-size: 0.875rem;
`;

const SayMessageWithTimer: React.FC<SayMessageWithTimerProps> = ({
  comp_id,
}) => {
  const character = useAppSelector((state: RootState) => state.character);
  const [state, setState] = useState<State>({
    show_msg: false,
    timer_message: "",
    timer_for_msg: 0,
  });

  const displayMessage = () => {
    const el = document.getElementById(`${character.active}-message-box`);
    const el2 = document.getElementById(`${character.active}-message-box1`);
    if (el && el2) {
      el2.style.display = "none";
      if (state.show_msg) {
        setState({ ...state, show_msg: false });
        el.style.display = "none";
        return;
      }
      setState({ ...state, show_msg: true });

      el.style.display = "block";
      el.style.position = "relative";

      el.innerHTML = state.timer_message;
      window.setTimeout(() => {
        setState({ ...state, show_msg: false });
        el.style.display = "none";
      }, state.timer_for_msg * 1000);
    }
  };

  return (
    <Container elevation={3}>
      <div className="rounded text-center p-2 my-3">
        <InputContainer>
          <InputLabel>Message</InputLabel>
          <Input
            type="text"
            value={state.timer_message}
            onChange={(e) => {
              e.target.value.length > 0 &&
                setState({ ...state, timer_message: e.target.value });
            }}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Timer</InputLabel>
          <Input
            type="number"
            value={state.timer_for_msg}
            onChange={(e) => {
              parseInt(e.target.value) > 0 &&
                setState({ ...state, timer_for_msg: parseInt(e.target.value) });
            }}
          />
        </InputContainer>
        <Button id={comp_id} onClick={displayMessage}>
          {`Say ${state.timer_message}`}
        </Button>
      </div>
    </Container>
  );
};

export default SayMessageWithTimer;
