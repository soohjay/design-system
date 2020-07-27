import * as React from "react";
import styled from "styled-components";
import { colors } from "../themes/colors";

interface ColorProps {
  /** 컬러 코드 */
  color: string;
  /** 컬러 이름 */
  name: string;
  /** 그라데이션 여부 */
  isGradient?: boolean;
}

interface styledProps {
  bgType?: string;
  bgColor?: string;
  isColoredCode?: boolean;
  coloredCode?: string;
}

const Container = styled.div<styledProps>`
  width: 120px;
  height: 120px;
  margin: 5px;
  border: 0px;
  border-radius: 10px;
  background-${(props) => props.bgType}: ${(props) => props.bgColor};
  position: relative;
  box-shadow: 2px 2px 3px rgba(0,0,0,0.32);
`;

const Datail = styled.div`
  width: 100%;
  height: 40px;
  color: ${colors.black};
  background-color: ${colors.white};
  text-align: center;
  position: absolute;
  bottom: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: grid;
`;

const ColorInfo = styled.label<styledProps>`
  width: 100%;
  font-size: ${(props) => (props.isColoredCode ? "14px" : "18px")};
  color: ${(props) => (props.isColoredCode ? colors.black : props.coloredCode)};
`;

const Color = ({ color, name, isGradient }: ColorProps) => (
  <Container bgType={isGradient ? "image" : "color"} bgColor={color}>
    <Datail color={color}>
      <ColorInfo>{name}</ColorInfo>
      <ColorInfo isColoredCode={true} coloredCode={color}>
        {color}
      </ColorInfo>
    </Datail>
  </Container>
);

Color.defaultProps = {
  color: colors.black,
  name: "black",
  isGradient: false,
};

export default Color;
