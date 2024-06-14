import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { FaHome, FaSearch, FaMusic } from "react-icons/fa";
import { useDataLayerValue } from "./DataLayer";

// Styled components
const SidebarContainer = styled.div`
  height: 100vh;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  flex: 0.2;
  min-width: 230px;
  background-color: #040404;
`;

const Divider = styled.hr`
  border: 1px solid #282828;
  width: 90%;
  margin: 10px auto;
`;

const LogoImage = styled.img`
  height: 100px;
  width: auto;
  padding: 10px;
  margin: auto;
`;

const Title = styled.strong`
  margin-left: 5px;
  padding: 5px;
  font-size: 12px;
`;

// Functional component
function Sidebar() {
  const [{ playlists }] = useDataLayerValue();

  return (
    <SidebarContainer>
      <LogoImage
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />

      <SidebarOption title="Home" Icon={FaHome} />
      <SidebarOption title="Search" Icon={FaSearch} />
      <SidebarOption title="Your Library" Icon={FaMusic} />

      <Divider />

      <Title className="sidebar__title">PLAYLISTS</Title>

      <Divider />

      {playlists?.items?.map((playlist) => (
        <SidebarOption key={playlist.id} title={playlist.name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;
