import React from "react";

import "./Card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="Card">
        <h1>Card Title</h1>
        <p>Card Description</p>
        <button>OPEN</button>
      </div>
    );
  }
}

export default Card;
