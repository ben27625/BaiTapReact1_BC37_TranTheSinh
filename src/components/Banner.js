import React from "react";

class Banner extends React.Component {
  render() {
    return (
      <div className="Banner " style={{ margin: "0 100px" }}>
        <h2 style={{ fontSize: "50px" }}>A Warm Welcome !</h2>
        <p>
          Lorem lorem - working with inline style - working with inline style -
          working with inline style
        </p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
        >
          Call to action
        </button>
      </div>
    );
  }
}

export default Banner;
