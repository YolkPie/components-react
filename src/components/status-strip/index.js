import React, { Component } from "react";
import { formatPrice } from "../../utils";
import "./index.scss";

export default class StatusStrip extends Component {
  render() {
    return <div styleName="status-strip">商品已下架</div>;
  }
}
