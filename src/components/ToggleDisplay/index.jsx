import React from "react";
import { IconContainer, ShowIcon, HideIcon } from "../../styles";

const ToggleDisplay = ({ display, handleClick }) => {
  return (
    <IconContainer onClick={handleClick}>
      {display ? <HideIcon /> : <ShowIcon />}
    </IconContainer>
  );
};

export default ToggleDisplay;
