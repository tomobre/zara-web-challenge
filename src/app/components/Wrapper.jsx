"use client";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  grid-auto-rows: minmax(100px, auto);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
`;

export default function Wrapper({ children }) {
  return <Container>{children}</Container>;
}
