import React, { Component } from "react";
import "./index.scss";
import { filterImg } from "../../utils";
import { MPing } from "../../points";

export default class Shop extends Component {
  // 跳转店铺
  gotoShop = e => {
    e && e.stopPropagation();
    const { auctionBaseInfo, shopMessage } = this.props;
    const skuId = auctionBaseInfo && auctionBaseInfo.skuId;
    const shopId = shopMessage && shopMessage.shopId;
    const json = {
      shopId
    };
    MPing.logClick(
      "Mauction_NewvipProuduct_ShopCardConnectService",
      JSON.stringify(json),
      "",
      skuId
    );
    if (shopId) {
      window.location.href = `https://shop.m.jd.com/?shopId=${shopId}`;
    }
  };

  // 联系客服
  shopContact = e => {
    e && e.stopPropagation();
    const { auctionBaseInfo, shopMessage } = this.props;
    const venderId = shopMessage && shopMessage.venderId;
    const skuId = auctionBaseInfo && auctionBaseInfo.skuId;
    const json = {
      venderId
    };
    MPing.logClick(
      "Mauction_NewvipProuduct_ShopCardConnectService",
      JSON.stringify(json),
      "",
      skuId
    );
    if (venderId) {
      window.location.href = `https://jdcs.m.jd.com/chat/index.action?venderId=${venderId}&entry=m_shop`;
      // window.location.href = `https://jdcs.m.jd.com/chat/index.action?venderId=${venderId}&entry=m_shop&sku=${skuId}`;
    }
  };

  render() {
    const { shopMessage } = this.props;
    return (
      <div>
        {shopMessage && (
          <div styleName="shop-container">
            <div
              styleName="shop-main"
              onClick={e => {
                this.gotoShop(e);
              }}
            >
              <div styleName="shop-logo-container">
                <img
                  styleName="shop-logo"
                  src={filterImg(shopMessage.shopLogo)}
                  alt=""
                />
              </div>
              <div styleName="shop-info">
                <div styleName="shop-name">{shopMessage.shopName}</div>
                <div styleName="shop-ext">
                  {shopMessage.shopFollowCount && (
                    <div styleName="shop-follow">
                      {shopMessage.shopFollowCount}人关注
                    </div>
                  )}
                  <div
                    styleName="shop-contact"
                    onClick={e => {
                      this.shopContact(e);
                    }}
                  >
                    <div styleName="shop-contact-icon" />
                    <div styleName="shop-contact-txt">联系客服</div>
                  </div>
                </div>
              </div>
              <div styleName="more-icon" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
