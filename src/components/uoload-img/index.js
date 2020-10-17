import React, { Component } from "react";
import "./index.scss";

export default class UploadImg extends Component {
  render() {
    return (
      <div styleName="upload-img-container">
        <div styleName="upload-wrap">
          <input
            type="file"
            accept="image/*"
            name="file"
            styleName="input-img"
          />
        </div>
        <div styleName="upload-txt"> 上传图片 </div>
      </div>
    );
  }
}
