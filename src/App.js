import React from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Item from "./components/Item";
import Footer from "./components/Footer.js";

class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <div className="body">
          <Banner />
          <div
            className="items"
            style={{ margin: "0 100px", display: "flex",  }}
          >
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
