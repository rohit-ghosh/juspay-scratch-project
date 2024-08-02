import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { RootState, useAppSelector } from "../../redux/store";

interface SizeProps {
  comp_id: string;
}

const Container = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: #1e3a8a;
  padding: 16px;
  margin: 16px 0;
  border-radius: 0.25rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 8px 0;
`;

const Input = styled.input`
  padding: 4px 0;
  text-align: center;
`;

const Button = styled.div`
  text-align: center;
  background-color: #1d4ed8;
  color: white;
  padding: 8px 16px;
  margin: 8px 0;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Size: React.FC<SizeProps> = ({ comp_id }) => {
  const character = useAppSelector((state: RootState) => state.character);
  const [scale, setScale] = useState<number>(1);

  const changeSize = () => {
    const el = document.getElementById(character.active);
    if (el) {
      el.style.transform = `scale(${scale})`;
    }
  };

  return (
    <Paper elevation={3}>
      <Container>
        <Grid>
          <div style={{ color: "white" }}>Size:</div>
          <Input
            type="number"
            value={scale}
            onChange={(e) => {
              if (e.target.value) setScale(parseInt(e.target.value));
              else setScale(0);
            }}
          />
        </Grid>
        <Button id={comp_id} onClick={changeSize}>
          Size {scale}
        </Button>
      </Container>
    </Paper>
  );
};

export default Size;
