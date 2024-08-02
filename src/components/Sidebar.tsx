import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import { looksComponents, motionComponents } from "./SidebarConstants";
import { RootState, useAppSelector } from "../redux/store";

const SidebarContainer = styled(Box)`
  width: 15rem;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent horizontal scrolling */
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0.5rem;
  border-right: 1px solid #e5e7eb;
`;

const SidebarHeader = styled(Box)`
  font-weight: bold;
  margin-bottom: 1.25rem;
  text-align: center;
  border: 2px solid;
  border-radius: 0.25rem;
  color: white;
  padding: 0.5rem;
  width: 100%; /* Ensure it takes full width */
`;

const SectionWrapper = styled(Box)`
  background: dodgerblue;
  border-radius: 5px;
  margin: 10px 0;
  padding: 5px;
  width: 100%;
`;

const SectionTitle = styled(Typography)`
  font-weight: bold;
  display: flex;
  width: 100%;
  justify-content: center;
  color: white;
`;

const ComponentList = styled.ul`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  width: 100%; /* Ensure it takes full width */
`;

const ComponentItem = styled.li`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%; /* Ensure it takes full width */
  white-space: nowrap; /* Prevent text from overflowing */
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Sidebar: React.FC = () => {
  const app = useAppSelector((state: RootState) => state.app);

  /**
   * Renders a list of components with drag and drop functionality.
   *
   * @param components - An array of component names to render.
   * @param droppableId - The id of the droppable area for the components.
   * @returns The JSX element representing the list of components with drag and drop support.
   */
  const renderComponents = (components: string[], droppableId: string) => (
    <Droppable droppableId={droppableId} type="COMPONENTS">
      {(provided) => (
        <ComponentList {...provided.droppableProps} ref={provided.innerRef}>
          {components.map((x, i) => (
            <Draggable
              key={`${x}-${droppableId}`}
              draggableId={`${x}-${droppableId}`}
              index={i}
            >
              {(provided) => (
                <ComponentItem
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  {getComponent(x, String(app.appId))}
                </ComponentItem>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </ComponentList>
      )}
    </Droppable>
  );

  return (
    <SidebarContainer>
      <SidebarHeader className="bg-blue-600">Tasks</SidebarHeader>

      <SectionWrapper>
        <SectionTitle>Motion</SectionTitle>
        {renderComponents(motionComponents, "sideArea-motion")}
      </SectionWrapper>

      <SectionWrapper>
        <SectionTitle>Looks</SectionTitle>
        {renderComponents(looksComponents, "sideArea-looks")}
      </SectionWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
