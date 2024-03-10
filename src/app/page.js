import md5 from "md5";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import { getData } from "./fetch/fetch";

export default async function Home() {
  const data = await getData();
  const characterList = data.data.results;
  console.log(data.data.results);
  return (
    <main>
      <Wrapper>
        {characterList.map((character) => {
          return (
            <Card
              image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              name={character.name}
              link={character.id.toString()}
            />
          );
        })}
      </Wrapper>
    </main>
  );
}
