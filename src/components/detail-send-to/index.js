import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

export default class DetailSendTo extends Component {
  getPromiseInfo = () => {
    const { data, isPreSaleTypeOne } = this.props;
    let promiseInfo = "";
    if (isPreSaleTypeOne) {
      promiseInfo = data && data.reserveContentInfo;
    } else if (
      data &&
      data.shipmentInfo &&
      data.shipmentInfo.showDeliveryDateAndTime
    ) {
      promiseInfo = data.shipmentInfo.showDeliveryDateAndTime;
    }
    return promiseInfo;
  };

  render() {
    const { lbsData, onClick, isPreSaleTypeOne } = this.props;
    const lbsTmp = lbsData.addressSummary + lbsData.addressExt + lbsData.where;
    const addStr =
      lbsTmp ||
      lbsData.sendTo ||
      (lbsData.tenantShopInfo &&
        lbsData.tenantShopInfo[0] &&
        lbsData.tenantShopInfo[0].storeAddress);

    const shopLogo =
      lbsData && lbsData.tenantInfo && lbsData.tenantInfo.circleLogo
        ? lbsData.tenantInfo.circleLogo
        : "https://m.360buyimg.com/img/jfs/t1/61259/15/5267/579/5d37ff19Ec38f305b/28dda4377bde43d7.png";
    const shopName =
      lbsData.tenantInfo && lbsData.tenantInfo.tenantName
        ? lbsData.tenantInfo.tenantName + lbsData.storeName
        : `${lbsData.storeName}`;

    return (
      <div styleName="container">
        <div styleName="main">
          <div styleName="shop-info">
            <div styleName="shop-logo">
              <img styleName="shop-icon" src={shopLogo} alt="" />
            </div>
            <div styleName="shop-name">{shopName}</div>
          </div>
          <div styleName="send-to" onClick={onClick}>
            <span styleName="title">送至</span>
            <span styleName="address-info">{addStr}</span>
            <span styleName="address-img" />
          </div>
          {this.getPromiseInfo() && (
            <div styleName="promise">
              <div
                styleName={`promise-info ${isPreSaleTypeOne ? "pre-sale" : ""}`}
              >
                {this.getPromiseInfo()}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

DetailSendTo.defaultProps = {
  data: {},
  lbsData: {},
  onClick: () => {}
};

DetailSendTo.propTypes = {
  data: PropTypes.object || {},
  lbsData: PropTypes.object || {},
  onClick: PropTypes.func
};
