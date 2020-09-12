import React, { Component } from "react";
import "./index.scss";
import { filterImg } from "../../utils";
import { MPing } from "../../points";

export default class Shop extends Component {
  gotoShop = () => {
    const { gotoShop } = this.props;
    if (gotoShop && typeof gotoShop === "function") {
      gotoShop();
    }
  };

  shopContact = () => {
    const { shopContact } = this.props;
    if (shopContact && typeof shopContact === "function") {
      shopContact();
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
                if (e) {
                  e.stopPropagation();
                }
                this.gotoShop();
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
                      if (e) {
                        e.stopPropagation();
                      }
                      this.shopContact();
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
