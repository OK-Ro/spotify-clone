import styled from "styled-components";
import { loginUrl } from "./spotify";

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;
`;

const SpotifyLogo = styled.img`
  width: auto;
  height: 200px;
`;

const LoginButton = styled.button`
  padding: 20px;
  border-radius: 99px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  background-color: #1db954;
`;

function Login() {
  const handleLogin = () => {
    window.location.href = loginUrl;
  };
  return (
    <LoginContainer>
      <SpotifyLogo
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />
      <LoginButton onClick={handleLogin}>LOGIN WITH SPOTIFY</LoginButton>
    </LoginContainer>
  );
}

export default Login;
