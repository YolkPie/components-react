import React, { Component } from "react";
import "./index.scss";

export default class LiveTag extends Component {
  render() {
    const { liveData } = this.props;
    return (
      <div styleName="tag-container">
        <span styleName={"tag-txt-box tag-" + liveData.code}>
          <span styleName="tag-txt">{liveData.label}</span>
        </span>
        {liveData.subLabel && (
          <span styleName="tag-sub">{liveData.subLabel}人</span>
        )}
      </div>
    );
  }
}
