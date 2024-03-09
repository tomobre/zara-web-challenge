import { getData } from "../fetch/fetch";

export async function generateStaticParams() {
  const posts = await getData();
  const characterList = data.data.results;

  return characterList.map((character) => ({
    id: character.id,
  }));
}

export default async function HeroDetails() {
  /*   const data = await getData();
  const characterList = data.data.results;
  console.log(data.data.results); */
  return <div></div>;
}
