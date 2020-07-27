import * as React from "react";

export interface IButtonProps {
  children?: any;
}

const Button: React.SFC<IButtonProps> = (props) => (
  <button type="button">{props.children}</button>
);

Button.defaultProps = {
  children: null,
};

export default Button;
