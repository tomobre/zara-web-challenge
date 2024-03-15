import Wrapper from './components/Wrapper';
import Card from './components/Card';
import { getData, getSearchResult } from './fetch/fetch';
import SearchBox from './components/SearchBox.jsx';
import ResultCount from './components/ResultCount';

const testing = async () => {
  const res = await fetch('/api/dummy', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: {},
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary

    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export default async function Home(props) {
  const test = await testing();
  const searchParams = props?.searchParams;
  const search = searchParams.search;
  const data = search !== '' ? await getSearchResult(search) : await getData();
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
