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
} from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";

// Styled components
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

const LeftSection = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  color: white;
  max-width: 300px;
`;

const CenterSection = styled.div`
  flex: 0.4;
  padding: 0 100px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 300px;
`;

const RightSection = styled.div`
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

const SongInfo = styled.div`
  > h4 {
    margin-bottom: 5px;
  }
  > p {
    font-size: 12px;
  }
`;

const GreenIcon = styled.div`
  color: #1ed15e;
  &:hover {
    transition: transform 0.2s ease-in;
    transform: scale(1.2);
  }
`;

const StyledSlider = styled(Slider)`
  color: #1ed15e;
`;

// Footer component
function Footer() {
  return (
    <FooterContainer>
      <LeftSection>
        <AlbumLogo
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
        />
        <SongInfo>
          <h4>My fav song</h4>
          <p>Atharva</p>
        </SongInfo>
      </LeftSection>
      <CenterSection>
        <Shuffle as={GreenIcon} />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline fontSize="large" className="footer__icon" />
        <SkipNext className="footer__icon" />
        <Repeat as={GreenIcon} />
      </CenterSection>
      <RightSection>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <StyledSlider />
          </Grid>
        </Grid>
      </RightSection>
    </FooterContainer>
  );
}

export default Footer;
