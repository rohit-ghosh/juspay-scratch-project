import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";
import styled from "@emotion/styled";
import { DragDropContext } from "react-beautiful-dnd";
import { Header } from "./components/Header/Header";

const Root = styled(`div`)`
  flex-grow: 1;
`;

export const App = () => {
  return (
    <Root>
      <Header />
      <DragDropContext onDragEnd={() => {}}>
        <Sidebar />
        <MidArea />
        <PreviewArea />
      </DragDropContext>
    </Root>
  );
};

export default App;
