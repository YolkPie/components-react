import React, { Component } from "react";
import "./index.scss";
import { formatPrice } from "../../utils";

export default class Belt extends Component {
  render() {
    const { auctionBaseInfo } = this.props;
    const startPrice = auctionBaseInfo && auctionBaseInfo.startPrice;
    const price = formatPrice(startPrice);
    const priceArr = price.toString().split(".");
    const integer = priceArr[0];
    const decimal = priceArr[1];
    return (
      <div styleName="belt-container">
        <div styleName="left">
          <div styleName="price-txt">新人价</div>
          <div styleName="price-flag">¥</div>
          {startPrice > 0 && (
            <div styleName="price">
              <div>{integer}</div>
              {decimal && decimal > 0 && (
                <div styleName={`${integer > 0 ? "decimal" : ""}`}>
                  .{decimal}
                </div>
              )}
            </div>
          )}
        </div>
        <div styleName="right">新人专享，超值福利！</div>
      </div>
    );
  }
}
