"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const Container = styled.div``;
const Footer = styled.div`
  background-color: black;
  padding: 2rem;
`;

export default function Card({ image, name, link }) {
  return (
    <Container>
      <Link href={link}>
        <Image width={50} height={50} src={image} />
      </Link>
      <Footer>
        <p>{name}</p>
      </Footer>
    </Container>
  );
}
