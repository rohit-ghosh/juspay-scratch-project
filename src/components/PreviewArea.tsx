import React from 'react';
import { RootState, useAppSelector } from '../redux/store'; // Adjust the import according to your store setup
import CatSprite from './CatSprite';

const PreviewArea: React.FC = () => {
  const character = useAppSelector((state: RootState) => state.character);
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

  return (
    <div className="w-full flex-none h-full overflow-y-auto p-3" id="preview_area">
      <div className="font-bold mb-5 text-center border-2 rounded text-white bg-green-400 p-2 w-auto">
        Preview Area
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
