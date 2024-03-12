"use client";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import { useAppContext } from "../context";

export default function Favorites() {
  const { favorites } = useAppContext();

  return (
    <div>
      <Wrapper>
        {favorites.map((character) => {
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
    </div>
  );
}
