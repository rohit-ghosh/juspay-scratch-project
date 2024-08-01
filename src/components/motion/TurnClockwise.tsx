import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RedoIcon from "@material-ui/icons/Redo";
import Paper from "@material-ui/core/Paper";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store"; // Adjust the import according to your store setup
import styled from "@emotion/styled";
import { setCharacterAngle } from "../../redux/slice/characterSlice";

interface TurnClockWiseProps {
  comp_id: string;
}

const RotateContainer = styled.div`
  text-align: center;
  border-radius: 0.25rem;
  background-color: #3b82f6;
  padding: 0.5rem;
  margin: 0.75rem 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Input = styled.input`
  margin: 0 0.5rem;
  padding: 0.25rem;
  text-align: center;
`;

const Button = styled.div`
  display: flex;
  background-color: #1e40af;
  color: white;
  padding: 0.5rem 1rem;
  margin: 0.75rem 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
  text-align: center;
`;

const TurnClockWise: React.FC<TurnClockWiseProps> = ({ comp_id }) => {
  const [angle, setAngle] = useState<number>(0);
  const dispatch = useAppDispatch();
  const character = useAppSelector((state: RootState) => state.character);

  const handleClick = () => {
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle) {
      el!.style.transform = `rotate(${character_angle.angle + angle}deg)`;
      dispatch(setCharacterAngle(character_angle.angle + angle));
    }
  };

  return (
    <Paper elevation={3}>
      <RotateContainer>
        <GridContainer>
          <div style={{ color: "white" }}>Rotate By:</div>
          <Input
            type="number"
            value={angle}
            onChange={(e) => setAngle(parseInt(e.target.value))}
          />
        </GridContainer>
        <Button id={comp_id} onClick={handleClick}>
          <div style={{ margin: "auto" }}>
            Turn
            <RedoIcon style={{ margin: "0 0.5rem" }} /> {angle} degrees
          </div>
        </Button>
      </RotateContainer>
    </Paper>
  );
};

export default TurnClockWise;