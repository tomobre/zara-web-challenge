"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "../context";

const Container = styled.div`
  height: 250px;
`;
const Footer = styled.div`
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border-bottom: 20px solid #d8dcdd;
    border-left: 20px solid transparent;
    width: 0;
  }
  position: relative;
  background-color: black;
  padding: 1rem;
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Card({ image, name, id, description }) {
  const { favorites, setFavorites } = useAppContext();
  const checkFav = favorites.findIndex((character) => character.id === id);

  const toggleFavorite = (id) => {
    if (checkFav === -1) {
      setFavorites([...favorites, { name, description, image, id }]);
    } else {
      favorites.splice(checkFav, 1);
      setFavorites([...favorites]);
    }
  };

  return (
    <Container>
      <Link href={id}>
        <Image alt={name} width={180} height={180} src={image} />
      </Link>
      <Footer>
        <p style={{ color: "white" }}>{name}</p>
        <div onClick={() => toggleFavorite(id)}>
          {checkFav === -1 ? (
            <Image
              alt="white-heart"
              width={10}
              height={10}
              src={"/assets/Heart_icon_w.png"}
            />
          ) : (
            <Image
              alt="red-heart"
              width={10}
              height={10}
              src={"/assets/Heart_icon_r.png"}
            />
          )}
        </div>
      </Footer>
    </Container>
  );
}
