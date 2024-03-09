"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}
