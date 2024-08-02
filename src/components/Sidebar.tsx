import React from "react";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import { RootState, useAppSelector } from "../redux/store";
import { motionComponents, looksComponents } from "./SidebarConstants";

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

const SectionTitle = styled(Typography)`
  font-weight: bold;
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
  return (
    <SidebarContainer>
      <SidebarHeader className="bg-blue-600">Side Bar</SidebarHeader>

      {/* Motion */}
      <SectionTitle>Motion</SectionTitle>
      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ComponentList {...provided.droppableProps} ref={provided.innerRef}>
            {motionComponents.map((x, i) => (
              <Draggable
                key={`${x}-sideArea`}
                draggableId={`${x}-sideArea`}
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

      {/* Looks */}
      <SectionTitle>Looks</SectionTitle>
      <Droppable droppableId="sideArea-looks" type="COMPONENTS">
        {(provided) => (
          <ComponentList {...provided.droppableProps} ref={provided.innerRef}>
            {looksComponents.map((x, i) => (
              <Draggable
                key={`${x}-sideArea`}
                draggableId={`${x}-sideArea`}
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
    </SidebarContainer>
  );
};

export default Sidebar;
