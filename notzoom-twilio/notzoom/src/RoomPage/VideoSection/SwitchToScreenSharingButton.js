import React, { useState } from "react";

import SwitchImg from "../../resources/images/switchToScreenSharing.svg";

const SwitchToScreenSharingButton = () => {
  const [isScreenSharingActive, setIsScreenSharingActive] = useState(false);

  const handleSreenSharingEnabling = () => {
    // handle screen sharing
  };

  return (
    <div className="video_button_container">
      <img
        src={SwitchImg}
        onClick={handleSreenSharingEnabling}
        className="video_button_image"
        alt=""
      />
    </div>
  );
};

export default SwitchToScreenSharingButton;
