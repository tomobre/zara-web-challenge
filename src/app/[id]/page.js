import { getData, getCharacter, getCharacterComics } from "../fetch/fetch";
import Image from "next/image";
import Wrapper from "../components/details/Wrapper";
import Hero from "../components/details/Hero";
import ComicCard from "../components/details/ComicCard";
import ScrollComic from "../components/details/ScrollComic";

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
        id={id.toString()}
        name={characterResults[0].name}
        description={characterResults[0].description}
        image={`${characterResults[0].thumbnail.path}.${characterResults[0].thumbnail.extension}`}
      />
      <Wrapper color={"white"}>
        <h3
          style={{
            marginTop: "1.5rem",
            marginBottom: "1.5rem",
            fontSize: "23px",
          }}
        >
          COMICS
        </h3>
        <ScrollComic>
          {comicsResults.map((comic) => {
            const date = comic.dates[0].date.slice(0, 4);
            return (
              <ComicCard
                key={comic.title}
                image={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                title={comic.title}
                date={date}
              />
            );
          })}
        </ScrollComic>
      </Wrapper>
    </div>
  );
}
