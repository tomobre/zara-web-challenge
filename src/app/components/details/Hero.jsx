"use client";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import Image from "next/image";

const Container = styled.div`
  margin: auto;
  width: 70%;
  padding: 10px;
`;

export default function Hero({ name, description, image }) {
  return (
    <Wrapper color={"black"}>
      <h2 style={{ color: "white" }}>{name}</h2>
      <p style={{ color: "white" }}>{description}</p>
      <Image width={400} height={500} src={image} />
    </Wrapper>
  );
}
