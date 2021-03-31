import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import LiveTag from ".";

storiesOf("UI组件|LiveTag", module)
  .addDecorator(withKnobs)
  .add("标签组件", () => {
    let liveList = [
      {
        code: "preplay",
        label: "预告中11",
        value: 2,
        startTime: 1622977701000
      },
      { code: "playing", label: "直播中", value: 4, viewNum: "20人" },
      { code: "replay", label: "回放", value: 6, viewNum: "40人" },
      { code: "willPlay", label: "即将开播", value: 8, viewNum: "" }
    ];
    let liveValue = 2;
    const _countEnd = () => {
      liveValue = 4;
      alert("倒计时结束，5秒后刷新数据");
      setTimeout(() => {
        alert("ajax refresh data");
      }, 1000 * 5);
    };
    return (
      <div>
        <LiveTag
          liveList={liveList}
          liveValue={liveValue}
          onCountEnd={() => _countEnd()}
        />
        <LiveTag liveList={liveList} liveValue={4} />
        <LiveTag liveList={liveList} liveValue={6} />
        <LiveTag liveList={liveList} liveValue={8} />
      </div>
    );
  });
