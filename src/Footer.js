import React from "react";
import styled from "styled-components";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  height: 65px;
  width: 100%;
  background-color: #282828;
  padding: 20px;
`;

const FooterLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: white;
  max-width: 300px;
`;

const FooterCenter = styled.div`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`;

const FooterRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const AlbumLogo = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  object-fit: contain;
`;

const GreenIcon = styled.div`
  color: #1ed15e;
`;

const SongInfo = styled.div`
  > h4 {
    margin-bottom: 5px;
  }

  > p {
    font-size: 12px;
  }
`;

const FooterIcon = styled.div`
  &:hover {
    transition: transform 0.2s ease-in;
    transform: scale(1.2) !important;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <AlbumLogo
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
        />
        <SongInfo>
          <h4>My fav song</h4>
          <p>Atharva</p>
        </SongInfo>
      </FooterLeft>
      <FooterCenter>
        <GreenIcon as={Shuffle} />
        <FooterIcon as={SkipPrevious} />
        <FooterIcon as={PlayCircleOutline} fontSize="large" />
        <FooterIcon as={SkipNext} />
        <GreenIcon as={Repeat} />
      </FooterCenter>
      <FooterRight>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider style={{ color: "#1ed15e" }} />
          </Grid>
        </Grid>
      </FooterRight>
    </FooterContainer>
  );
}

export default Footer;
