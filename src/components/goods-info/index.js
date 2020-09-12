import React, { Component } from "react";
import "./index.scss";

export default class GoodsInfo extends Component {
  render() {
    const { auctionBaseInfo } = this.props;
    return (
      <div styleName="goods-info-container">
        <div styleName="goods-info-main">
          <div styleName="goods-name">
            {auctionBaseInfo && auctionBaseInfo.title}
          </div>
          <div styleName="goods-ext">
            下单即享白条免洗，赠送限量版耳机，赠完为止！前5000名评价者可获得额外自拍杆！新品热卖中
          </div>
          <div styleName="goods-promotion-icon">新人专享</div>
        </div>
      </div>
    );
  }
}
