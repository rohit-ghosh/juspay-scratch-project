import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";
import { Box, Typography } from "@mui/material";
import { RootState, useAppSelector } from "../redux/store";
import styled from "@emotion/styled";

const SidebarContainer = styled(Box)`
  width: 15rem;
  height: 100%;
  overflow-y: auto;
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
  background-color: #38a169;
  padding: 0.5rem;
  width: auto;
`;

const SectionTitle = styled(Typography)`
  font-weight: bold;
`;

const ComponentList = styled.ul`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;

const ComponentItem = styled.li`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const Sidebar: React.FC = () => {
  const app = useAppSelector((state:RootState) => state.app);
  return (
    <SidebarContainer>
      <SidebarHeader>Side Bar</SidebarHeader>

      {/* Motion */}
      <SectionTitle>Motion</SectionTitle>
      <Droppable droppableId="sideArea-motion" type="COMPONENTS">
        {(provided) => (
          <ComponentList
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
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
          <ComponentList
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
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