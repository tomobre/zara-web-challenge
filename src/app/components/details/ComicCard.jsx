'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  position: relative;
  scroll-snap-align: center;
  margin-right: 15px;
  width: 150px;
`;

export default function ComicCard({ image, title, date }) {
  return (
    <Wrapper>
      <Image
        priority={false}
        alt={title}
        width={150}
        height={240}
        src={image}
      />
      <h3 style={{ fontSize: '13px' }}>{title}</h3>
      <p style={{ fontSize: '13px' }}>{date}</p>
    </Wrapper>
  );
}
