"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.div`
  background-color: black;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
`;

export default function Navbar() {
  return (
    <Wrapper>
      <Image
        alt="marvel-logo"
        width={140}
        height={60}
        src={"/assets/Marvel logo.png"}
      />
      <Image
        alt="favorites-heart"
        width={30}
        height={30}
        src={"/assets/Heart_icon_r.png"}
      />
    </Wrapper>
  );
}