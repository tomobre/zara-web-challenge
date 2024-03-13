'use client';
import Wrapper from '../components/Wrapper';
import Card from '../components/Card';
import { useAppContext } from '../context';
import styled from 'styled-components';
import SearchBox from '../components/SearchBox';
import ResultCount from '../components/ResultCount';

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

export default function Favorites({ searchParams }) {
  const { favorites } = useAppContext();
  const search = searchParams.search;
  const data =
    search !== ''
      ? favorites.filter((favorite) =>
          favorite.name.toLowerCase().startsWith(search?.toLowerCase()),
        )
      : favorites;

  return (
    <div>
      <Title>FAVORITES</Title>
      <SearchBox />
      <ResultCount count={data.length} />
      {data.length > 0 ? (
        <Wrapper>
          {data.map((character) => {
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
          <h3>No heroes found</h3>
        </NoContentWrapper>
      ) : (
        <NoContentWrapper>
          <h3>You have no favorite Heroes</h3>
        </NoContentWrapper>
      )}
    </div>
  );
}
