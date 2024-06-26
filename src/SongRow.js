import React from "react";
import styled from "styled-components";

function SongRow({ track }) {
  return (
    <SongRowContainer>
      <SongRowAlbum src={track.album.images[0].url} alt="" />
      <SongRowInfo>
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </SongRowInfo>
    </SongRowContainer>
  );
}

export default SongRow;

// Styled components
const SongRowContainer = styled.div`
  margin-left: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 100;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
  }
`;

const SongRowAlbum = styled.img`
  height: 40px;
  width: 40px;
`;

const SongRowInfo = styled.div`
  margin-left: 20px;

  > h1 {
    font-size: 16px;
  }

  > p {
    font-size: 14px;
    margin-top: 3px;
    color: gray;
  }
`;
