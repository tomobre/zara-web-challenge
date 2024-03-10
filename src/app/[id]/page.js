import { getData, getCharacter, getCharacterComics } from "../fetch/fetch";
import Image from "next/image";
import Wrapper from "../components/details/Wrapper";
import Hero from "../components/details/Hero";

export async function generateStaticParams() {
  const data = await getData();
  const characterList = data.data.results;

  return characterList.map((character) => ({
    id: character.id.toString(),
  }));
}

export default async function Page({ params }) {
  const { id } = params;
  const fetchData = await getCharacter(id);
  const fetchCharacterComics = await getCharacterComics(id);
  const { results: characterResults } = fetchData.data;
  const { results: comicsResults } = fetchCharacterComics.data;
  return (
    <div>
      <Hero
        name={characterResults[0].name}
        description={characterResults[0].description}
        image={`${characterResults[0].thumbnail.path}.${characterResults[0].thumbnail.extension}`}
      />
      <Wrapper color={"white"}>
        <h3>COMICS</h3>
        {comicsResults.map((comic) => {
          const date = comic.dates[0].date.slice(0, 4);
          return (
            <div>
              <Image
                width={100}
                height={150}
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              />
              <h3>{comic.title}</h3>
              <p>{date}</p>
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
}
