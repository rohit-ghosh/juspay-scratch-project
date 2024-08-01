// Import necessary modules and libraries
import React from "react";
import SvgIcon from '@mui/material/SvgIcon';
import styled from "@emotion/styled";

// Define the props interface
interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

// Styled component for the SVG
const StyledSvg = styled(SvgIcon)<{ size: number }>`
  fill: currentColor;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

// Functional component with TypeScript
const Icon: React.FC<IconProps> = ({ name, size = 20, className = "" }) => {
  return (
    <StyledSvg className={className} size={size}>
      <use xlinkHref={`/icons/solid.svg#${name}`} />
    </StyledSvg>
  );
};

export default Icon;