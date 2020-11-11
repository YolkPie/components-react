import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import StatusStrip from ".";

storiesOf("单品页组件|StatusStrip", module)
  .addDecorator(withKnobs)
  .add("商品状态条", () => {
    return <StatusStrip />;
  });
