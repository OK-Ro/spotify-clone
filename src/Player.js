import React from "react";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default Player;
