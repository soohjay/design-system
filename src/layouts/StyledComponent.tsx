import * as React from "react";
import styled from "styled-components";

interface StyledComponentProps {
  title: string;
  display: string;
  children: React.ReactNode;
}

const Container = styled.div`
  width: 100%;
  padding: 15px;
`;
const Title = styled.h2``;
const Content = styled.div`
  display: flex;
  
`;

const StyledComponent = (props: StyledComponentProps) => (
  <Container>
    <Title>{props.title}</Title>
    <Content>
      {props.children}
    </Content>
  </Container>
);

export default StyledComponent;
