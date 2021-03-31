import React, { Component } from "react";
import "./index.scss";

export default class LiveTag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeInterVal: null,
      timeCounter: null,
      curLiveData: {}
    };
  }
  _formatStartTime(leftTime) {
    let seconds = leftTime / 1000;
    let days = 0;
    let hours = 0;
    let min = 0;
    let sec = 0;
    if (seconds >= 86400) {
      days = Math.floor(seconds / 86400);
      seconds -= days * 86400;
    }
    if (seconds >= 3600) {
      hours = Math.floor(seconds / 3600);
      seconds -= hours * 3600;
    }
    if (seconds >= 60) {
      min = Math.floor(seconds / 60);
      seconds -= min * 60;
    }
    sec = Math.round(seconds);

    hours = hours > 9 ? hours : `0${hours}`;
    min = min > 9 ? min : `0${min}`;
    sec = sec > 9 ? sec : `0${sec}`;
    return `${days > 0 ? days + "天 " : ""}${hours}:${min}:${sec}`;
  }

  _startCounter(startTime) {
    this.state.timeInterVal && clearInterval(this.state.timeInterVal);
    let leftTime = startTime - Date.now();
    let timeCounter = this._formatStartTime(leftTime);
    let timeInterVal = setInterval(() => {
      leftTime -= 1000;
      if (leftTime <= 0) {
        clearInterval(this.state.timeInterVal);
        this.props.onCountEnd();
        return;
      }
      timeCounter = this._formatStartTime(leftTime);
      this.setState({ timeCounter });
    }, 1000);
    this.setState({ timeInterVal, timeCounter });
  }
  componentDidMount() {
    const { liveList = [], liveValue } = this.props;
    let curLiveData = liveList.find(item => item.value === liveValue) || {};
    if (curLiveData.startTime > 0) {
      this._startCounter(curLiveData.startTime);
    }
    this.setState({ curLiveData });
  }
  render() {
    const { timeCounter, curLiveData } = this.state;
    return curLiveData.code ? (
      <div styleName="yp-livetag">
        <span
          styleName={
            "yp-livetag__statusbox yp-livetag__status--" + curLiveData.code
          }
        >
          <span styleName="yp-livetag__status">{curLiveData.label}</span>
        </span>
        {timeCounter && <span styleName="yp-livetag__mark">{timeCounter}</span>}
        {curLiveData.viewNum && !timeCounter && (
          <span styleName="yp-livetag__mark">{curLiveData.viewNum}</span>
        )}
      </div>
    ) : null;
  }
}
