import React, { Component } from "react";
import { glassesArr } from "./data";

export default class Glasses extends Component {
  state = {
    id: glassesArr[0].id,
    price: glassesArr[0].price,
    name: glassesArr[0].name,
    desc: glassesArr[0].desc,
    url: glassesArr[0].url,
    // them url voiws casi desc ow day ne
  };
  handleChangeId = (id) => {
    const detail = glassesArr.find((item) => item.id === +id);
    this.setState({ ...detail });
  };
  render() {
    return (
      <div className="background">
        <div className="background2">
          <div className="header">
            <p>TRY GLASSES APP ONLINE</p>
          </div>
          <div className="image_model">
            <div>
              <img className="img1" src="glassesImage/model.jpg" alt="" />
              <img className="glasses1" src={this.state.url} alt="" />
              <div className="infor">
                <p className="title">{this.state.name}</p>
                <p className="price">{this.state.price}</p>
                <p className="desc">{this.state.desc}</p>
              </div>
            </div>
            <div>
              <img className="img2" src="glassesImage/model.jpg" alt="" />
            </div>
          </div>
          <div className="project">
            <img
              onClick={() => {
                this.handleChangeId("1");
              }}
              src="glassesImage/v1.png"
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeId("2");
              }}
              src="glassesImage/v2.png"
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeId("3");
              }}
              src="glassesImage/v3.png"
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeId("4");
              }}
              src="glassesImage/v4.png"
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeId("5");
              }}
              src="glassesImage/v5.png"
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeId("6");
              }}
              src="glassesImage/v6.png"
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeId("7");
              }}
              src="glassesImage/v7.png"
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeId("8");
              }}
              src="glassesImage/v8.png"
              alt=""
            />
            <img
              onClick={() => {
                this.handleChangeId("9");
              }}
              src="glassesImage/v9.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
