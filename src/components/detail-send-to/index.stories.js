import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import DetailSendTo from ".";

storiesOf("商详页组件|DetailSendTo", module)
  .addDecorator(withKnobs)
  .add(
    "商详地址选择",
    () => {
      return <DetailSendTo />;
    },
    {
      info: {
        text: `info`
      },
      notes: { markdown: `## DetailSendTo` }
    }
  );
