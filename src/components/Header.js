import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div
        className="header"
        style={{
          display: "flex",
          backgroundColor: "black",
          color: "white",
          justifyContent: "space-between",
        }}
      >
        <a style={{ padding: "20px", fontSize: "30px" }}>Start Boostrap</a>
        <nav style={{ display: "flex" }}>
          <a
            style={{
              margin: "0 10px",
              fontSize: "20px",
              lineHeight: "center",
              padding: "20px",
            }}
            href={URL}
          >
            Home
          </a>
          <a
            style={{
              margin: "0 10px",
              fontSize: "20px",
              lineHeight: "center",
              padding: "20px",
            }}
            href={URL}
          >
            About
          </a>
          <a
            style={{
              margin: "0 10px",
              fontSize: "20px",
              lineHeight: "center",
              padding: "20px",
            }}
            href={URL}
          >
            Service
          </a>
          <a
            style={{
              margin: "0 10px",
              fontSize: "20px",
              lineHeight: "center",
              padding: "20px",
            }}
            href={URL}
          >
            Contact
          </a>
        </nav>
      </div>
    );
  }
}

export default Header;
