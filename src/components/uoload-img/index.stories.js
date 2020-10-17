import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import UploadImg from ".";

storiesOf("UI组件|UploadImg", module)
  .addDecorator(withKnobs)
  .add("上传图片", () => {
    return <UploadImg />;
  });
