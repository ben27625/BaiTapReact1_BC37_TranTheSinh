import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div
        className="item"
        style={{
          marginTop: "20px",
          marginRight: "20px",
          border: "1px solid black",
          width: "20%",
          marginBottom: "30px"
        }}
      >
        <div
          className="img"
          style={{ width: "100%", height: "100px", backgroundColor: "gray" }}
        ></div>
        <h2 className="title">Card title</h2>
        <p>
          Lorem Lorem lear components components state props class extends
          function module css, import , import , export default{" "}
        </p>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            border: "none",
            borderRadius: "5px",
            color: "white",
            textAlign: "center",
            marginBottom: "20px"
          }}
        >
          Find Out More
        </button>
      </div>
    );
  }
}

export default Item;
