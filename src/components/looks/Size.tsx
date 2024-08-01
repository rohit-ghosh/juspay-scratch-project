import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import styled from "@emotion/styled";

interface SizeProps {
  character: { active: string };
  comp_id: string;
}

const Container = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: #6b46c1;
  padding: 16px;
  margin: 16px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 8px 0;
`;

const Input = styled.input`
  margin: 0 8px;
  padding: 4px 0;
  text-align: center;
`;

const Button = styled.div`
  text-align: center;
  background-color: #553c9a;
  color: white;
  padding: 8px 16px;
  margin: 8px 0;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Size: React.FC<SizeProps> = ({ character, comp_id }) => {
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
            onChange={(e) => setScale(parseInt(e.target.value))}
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