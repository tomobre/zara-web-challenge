'use client';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import { useAppContext } from '../context';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox';
import ResultCount from '../components/ResultCount';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const NoContentWrapper = styled.div`
  margin: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 25px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;

export function FavoritesResult() {
  const searchParams = useSearchParams();
  const { favorites } = useAppContext();
  const search = searchParams.get('search');
  const data =
    search !== ''
      ? favorites?.filter((favorite) =>
          favorite.name.toLowerCase().startsWith(search?.toLowerCase()),
        )
      : favorites;
  return (
    <div>
      <Title role='heading'>FAVORITES</Title>
      <SearchBox />
      <ResultCount count={data?.length} />
      {data?.length > 0 ? (
        <Wrapper>
          {data?.map((character) => {
            return (
              <Card
                description={character.description}
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
              />
            );
          })}
        </Wrapper>
      ) : search !== '' ? (
        <NoContentWrapper>
          <h3 role='no-heores-heading'>No heroes found</h3>
        </NoContentWrapper>
      ) : (
        <NoContentWrapper>
          <h3 role='no-favorites-heading'>You have no favorite Heroes</h3>
        </NoContentWrapper>
      )}
    </div>
  );
}

export default function Favorites() {
  return (
    <Suspense>
      <FavoritesResult />
    </Suspense>
  );
}
