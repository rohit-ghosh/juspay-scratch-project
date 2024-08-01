// src/App.tsx
import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { RootState, useAppDispatch, useAppSelector } from "./redux/store";
import { CompList, updateList } from "./redux/slice/listSlice";
import { cloneDeep } from "lodash";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const complist = useAppSelector((state: RootState) => state.list);
  const events = useAppSelector((state: RootState) => state.events);

  const onDragEnd = (result: DropResult) => {
    console.log("source ", result.source, " destination: ", result.destination);

    let element = result.draggableId.split("-")[0];

    // all lists in mid area
    const old_list: CompList[] = cloneDeep(complist.midAreaLists);

    if (!result.source) {
      return;
    }

    if (result.source.droppableId.split("-")[0] === "midAreaList") {
      // finding the source index of list
      let source_index = old_list.findIndex(
        (x) => x.id === result.source.droppableId
      );

      if (source_index > -1) {
        let comp_list = [...old_list[source_index].comps]; // inside the list
        comp_list.splice(result.source.index, 1);
        old_list[source_index] = {
          ...old_list[source_index],
          comps: comp_list,
        };
      } else {
        return;
      }
    }

    console.log(old_list);
    if (
      !result.destination ||
      result.destination.droppableId === "sideArea-motion"
    ) {
      dispatch(updateList(old_list));
      return;
    } else {
      // Finding the destination index in the list
      let dest_index = old_list.findIndex(
        (x) => x.id === result.destination?.droppableId
      );

      if (dest_index > -1) {
        let dest_comp_list = [...old_list[dest_index].comps]; // Create a copy of the comps array
        dest_comp_list.splice(result.destination!.index, 0, `${element}`);

        old_list[dest_index] = {
          ...old_list[dest_index],
          comps: dest_comp_list,
        };
      } else {
        return;
      }
    }

    dispatch(updateList(old_list));
  };

  return (
    <div className="bg-blue-100 font-sans">
      <div className="h-screen overflow-hidden flex flex-row pt-6">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea area_list={complist} event_values={events} />
          </div>
          <div className="w-1/3 relative h-screen overflow-scroll flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
