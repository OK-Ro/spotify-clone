import React from "react";
import styled from "styled-components";

// Styled components
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  color: gray;
  height: 40px;
  cursor: pointer;
  transition: 200ms color ease-in;

  &:hover {
    color: white;
  }
`;

const OptionIcon = styled.div`
  padding-left: 10px;
  padding-right: 10px;
`;

const OptionText = styled.p`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 14px;
`;

// Functional component
function SidebarOption({ title, Icon }) {
  return (
    <OptionContainer>
      {Icon && <OptionIcon as={Icon} />}
      {Icon ? <h4>{title}</h4> : <OptionText>{title}</OptionText>}
    </OptionContainer>
  );
}

export default SidebarOption;
