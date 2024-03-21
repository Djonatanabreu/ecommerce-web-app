import { createElement } from "react";

import * as Icons from "./iconDatabase";
import { IconProps } from "./types";

export const Icon = ({ name }: IconProps) => {
  if (name) {
    return createElement(Icons[name]);
  } else {
    return <div />;
  }
};
