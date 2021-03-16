import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import LiveTag from ".";

storiesOf("UI组件|LiveTag", module)
  .addDecorator(withKnobs)
  .add("标签组件", () => {
    let liveList = [
      { code: "preplay", label: "预告中", value: 1, subLabel: 159837 },
      { code: "playing", label: "直播中", value: 2, subLabel: 20 },
      { code: "replay", label: "回放", value: 3, subLabel: 40 },
      { code: "will", label: "即将开播", value: 3, subLabel: "" }
    ];
    return liveList.map(item => <LiveTag liveData={item} />);
  });
