import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import { getData } from "./fetch/fetch";

export default async function Home() {
  const data = await getData();
  const characterList = data.data.results;

  return (
    <main>
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
    </main>
  );
}
