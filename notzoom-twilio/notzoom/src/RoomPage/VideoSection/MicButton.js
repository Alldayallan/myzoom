import React, { useState } from "react";

import MicButtonImg from "../../resources/images/mic.svg";
import MicButtonImgOff from "../../resources/images/micOff.svg";

const MicButton = ({ room }) => {
  const [isMicMuted, setIsMicMuted] = useState(false);

  const handleMicButtonPressed = () => {
    isMicMuted ? unmute() : mute();
    setIsMicMuted(!isMicMuted);
  };

  const mute = () => {
    // mute our microphone
  };

  const unmute = () => {
    // turn on mic
  };

  return (
    <div className="video_button_container">
      <img
        src={isMicMuted ? MicButtonImgOff : MicButtonImg}
        onClick={handleMicButtonPressed}
        className="video_button_image"
        alt=""
      />
    </div>
  );
};

export default MicButton;
