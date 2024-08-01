import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store'; // Adjust the import according to your store setup
import CatSprite from './CatSprite';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { addCharacter, setActive } from '../redux/slice/characterSlice';

// Styling for MaterialUI Components
const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    button: {
      margin: 0,
    },
  })
);

const PreviewArea: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const character = useAppSelector((state: RootState) => state.character);
  const [active, setActiveState] = useState(character.active);
  let elmnt: HTMLElement | null = null;
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  const dragMouseDown = (e: React.MouseEvent, id: string) => {
    elmnt = document.getElementById(id);
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag as any;
  };

  const elementDrag = (e: MouseEvent) => {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    if (elmnt) {
      elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
      elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
    }
  };

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    const value = e.target.value as string;
    setActiveState(value);
    dispatch(setActive(value));
  };

  return (
    <div className="w-full flex-none h-full overflow-y-auto p-3" id="preview_area">
      <div className="flex justify-between mb-10">
        <div className="font-bold mb-5 text-center border border-2 rounded text-white bg-green-400 p-2 w-auto">
          Preview Area
        </div>
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">
              Active
            </InputLabel>
            <Select
              labelId="demo-simple-select-placeholder-label-label"
              id="demo-simple-select-placeholder-label"
              value={active}
              onChange={handleChange}
              displayEmpty
              className={classes.selectEmpty}
            >
              {character.characters.map((x, i) => {
                const first = x.id.charAt(0).toUpperCase();
                const name = first + x.id.substr(1);
                return (
                  <MenuItem key={i} value={x.id}>
                    {name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<AddCircleIcon />}
            // todo fix this
            onClick={() => dispatch(addCharacter(0))}
          >
            Create
          </Button>
        </div>
      </div>
      <div className="flex justify-around h-full">
        {character.characters.map((x, i) => (
          <div
            id={`${x.id}-${i}`}
            key={i}
            className="absolute"
            onMouseDown={(e) => dragMouseDown(e, `${x.id}-${i}`)}
          >
            <div id={`${x.id}-div`} className="character">
              <div
                className="hidden border-2 p-2 ml-3 mb-2 w-auto whitespace-nowrap"
                id={x.id + '-message-box'}
              ></div>
              <div
                className="hidden rounded-full border-2 w-4 left-1/2 h-4 ml-3 mb-2 whitespace-nowrap"
                id={x.id + '-message-box1'}
              ></div>
              <CatSprite charac_id={x.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviewArea;
