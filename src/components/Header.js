import React from "react";

import "./Header.css";

const Header = ({ participants, currentUser }) => {
  return (
    <header>
      {participants
        .filter((participant) => participant !== currentUser)
        .map((participant) => (
          <img className="participants" src={participant.avatar} />
        ))}
    </header>
  );
};

export default Header;
