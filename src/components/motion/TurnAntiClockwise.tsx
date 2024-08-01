import React, { useState } from "react";
import UndoIcon from "@material-ui/icons/Undo";
import Paper from "@material-ui/core/Paper";
import { RootState, useAppDispatch, useAppSelector } from "../../redux/store"; // Assuming you have a RootState type defined
import styled from "@emotion/styled";
import { setCharacterAngle } from "../../redux/slice/characterSlice";

interface TurnAntiClockWiseProps {
  comp_id: string;
}

const StyledPaper = styled(Paper)`
  .text-center {
    text-align: center;
  }
  .rounded {
    border-radius: 0.25rem;
  }
  .bg-blue-500 {
    background-color: #3b82f6;
  }
  .p-2 {
    padding: 0.5rem;
  }
  .my-3 {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .grid {
    display: grid;
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .text-white {
    color: #ffffff;
  }
  .mx-2 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .p-1 {
    padding: 0.25rem;
  }
  .py-0 {
    padding-top: 0;
    padding-bottom: 0;
  }
  .bg-blue-700 {
    background-color: #1d4ed8;
  }
  .px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
  .mt-3 {
    margin-top: 0.75rem;
  }
  .mb-1 {
    margin-bottom: 0.25rem;
  }
  .text-sm {
    font-size: 0.875rem;
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .flex {
    display: flex;
  }
  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }
`;

const TurnAntiClockWise: React.FC<TurnAntiClockWiseProps> = ({ comp_id }) => {
  const [angle, setAngle] = useState(0);
  const dispatch = useAppDispatch();
  const character = useAppSelector((state: RootState) => state.character);

  const handleClick = () => {
    let anti_angle = -1 * angle;
    const el = document.getElementById(character.active);
    const character_angle = character.characters.find(
      (x) => x.id === character.active
    );
    if (character_angle && el) {
      el.style.transform = `rotate(${character_angle.angle + anti_angle}deg)`;
      dispatch(setCharacterAngle(character_angle.angle + anti_angle));
    }
  };

  return (
    <StyledPaper elevation={3}>
      <div className="text-center rounded bg-blue-500 p-2 my-3">
        <div className="grid grid-cols-2">
          <div className="text-white">Rotate By:</div>
          <input
            className="mx-2 p-1 py-0 text-center"
            type="number"
            value={angle}
            onChange={(e) => {
              setAngle(parseInt(e.target.value));
            }}
          />
        </div>
        <div
          id={comp_id}
          className="flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex mx-auto">
            Turn
            <UndoIcon className="mx-2" />
            {angle} degrees
          </div>
        </div>
      </div>
    </StyledPaper>
  );
};

export default TurnAntiClockWise;