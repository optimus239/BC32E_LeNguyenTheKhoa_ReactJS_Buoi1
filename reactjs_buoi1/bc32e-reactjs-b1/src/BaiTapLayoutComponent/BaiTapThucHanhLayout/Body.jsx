import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div className="pt-5">
        <div className="container px-lg-5">
          <Banner></Banner>
          <Item></Item>
        </div>
      </div>
    );
  }
}
