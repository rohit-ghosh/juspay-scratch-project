import React from "react";
import styled from "@emotion/styled";
import SvgIcon from "@mui/material/SvgIcon";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

const StyledSvg = styled(SvgIcon)<{ size: number }>`
  fill: currentColor;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

const Icon: React.FC<IconProps> = ({ name, size = 20, className = "" }) => {
  return (
    <StyledSvg className={className} size={size}>
      <use xlinkHref={`/icons/solid.svg#${name}`} />
    </StyledSvg>
  );
};

export default Icon;
