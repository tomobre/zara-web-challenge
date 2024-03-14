export const dynamic = 'force-static';
import Wrapper from './components/Wrapper';
import Card from './components/Card';
import { getData, getSearchResult } from './fetch/fetch';
import SearchBox from './components/SearchBox.jsx';
import ResultCount from './components/ResultCount';

export default async function Home(props) {
  const data =
    props?.searchParams?.search !== ''
      ? await getSearchResult(props?.searchParams?.search)
      : await getData();
  const characterList = data.data.results;

  return (
    <main>
      <SearchBox />
      <ResultCount count={characterList.length} />
      {characterList.length > 0 ? (
        <Wrapper>
          {characterList.map((character) => {
            return (
              <Card
                key={character.id}
                id={character.id.toString()}
                description={character.description}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                name={character.name}
              />
            );
          })}
        </Wrapper>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
            fontSize: '20px',
          }}
        >
          No heroes found
        </div>
      )}
    </main>
  );
}
