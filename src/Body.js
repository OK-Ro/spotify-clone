import React from "react";
import styled from "styled-components";
import Header from "./Header";
import { useDataLayerValue } from "./DataLayer";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@mui/icons-material";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <BodyContainer>
      <Header spotify={spotify} />
      <BodyInfo>
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <BodyInfoText>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </BodyInfoText>
      </BodyInfo>
      <BodySongs>
        <BodyIcons>
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </BodyIcons>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow key={item.track.id} track={item.track} />
        ))}
      </BodySongs>
    </BodyContainer>
  );
}

export default Body;

// Styled components
const BodyContainer = styled.div`
  height: 100vh;
  flex: 0.8;
  color: white;
  padding: 30px;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  overflow-y: overlay;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const BodyInfo = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;

  > img {
    height: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  }
`;

const BodyInfoText = styled.div`
  flex: 1;

  > h2 {
    font-size: 48px;
    margin-bottom: 10px;
  }

  > p {
    font-size: 14px;
  }
`;

const BodyIcons = styled.div`
  display: flex;
  align-items: center;

  > .MuiSvgIcon-root {
    margin-right: 20px;
  }

  .body__shuffle {
    font-size: 80px !important;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .body__shuffle:hover {
    transition: 100ms transform ease-in;
    transform: scale(1.08);
  }
`;

const BodySongs = styled.div`
  margin: 20px -30px;
`;
