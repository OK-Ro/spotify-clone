import React from "react";
import { Search } from "@material-ui/icons";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #040404;
  color: white;
  padding: 10px;
  height: 60px;
  align-items: center;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    color: gray;
  }

  input {
    border: none;
    background-color: transparent;
    outline-width: 0;
    color: white;
    font-size: 16px;
    margin-left: 10px;
  }

  input::placeholder {
    color: lightgray;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

// Functional component
function Header() {
  const [{ user }] = useDataLayerValue();

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Search />
        <input placeholder="Search for Artists, Songs, or Albums" type="text" />
      </HeaderLeft>
      <HeaderRight>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
