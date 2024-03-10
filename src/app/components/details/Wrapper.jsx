"use client";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 70%;
  padding: 10px;
`;

export default function Wrapper({ children, color }) {
  return (
    <div style={{ backgroundColor: color }}>
      <Container>{children}</Container>;
    </div>
  );
}
