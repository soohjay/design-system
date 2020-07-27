import { storiesOf } from "@storybook/react";
import * as React from "react";
import Color from "./Color";
import { colors } from "../themes/colors";

import StyledComponent from "../layouts/StyledComponent";

const primary = ["navy", "orange"];
const state = ["info", "success", "warning", "error"];
const black = ["darkBlack", "black", "lightBlack", "white"];
const grey = ["grey1", "grey2", "grey3", "grey4", "grey5"];

storiesOf("Color", module).add("color", () => {
  return (
    <>
      <StyledComponent title="Primary" display="row">
        {primary.map((item: string) => (
          <Color color={colors[item]} name={item} />
        ))}
      </StyledComponent>
      <StyledComponent title="State" display="row">
        {state.map((item: string) => (
          <Color color={colors[item]} name={item} />
        ))}
      </StyledComponent>
      <StyledComponent title="black" display="row">
        {black.map((item: string) => (
          <Color color={colors[item]} name={item} />
        ))}
      </StyledComponent>
      <StyledComponent title="grey" display="row">
        {grey.map((item: string) => (
          <Color color={colors[item]} name={item} />
        ))}
      </StyledComponent>
    </>
  );
});
