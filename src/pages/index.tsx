import React, { useState } from "react";
import Head from "next/head";

import { PokemonCard } from "../components/PokemonCard";

import api from "../services/api";

import { Main } from "./styles";

interface Pokemon {
  name: string;
  image: string;
}

export default function Home() {
  const [pokeNumber, setPokeNumber] = useState(Math.floor(Math.random() * (898 - 1) + 1));
  const [pokemon, setPokemon] = useState({} as Pokemon);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    async function getPokemon() {
      try {
        const { data } = await api.get(`/pokemon/${pokeNumber}`);

        setPokemon({
          name: data.species.name.toUpperCase(),
          image: data.sprites.other["official-artwork"].front_default,
        });
        setIsLoading(false);
      } catch {

      }
    };

    getPokemon();
  }, [pokeNumber]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Head>
        <title>PokéRandom</title>
      </Head>
      <Main>
        {
          !isLoading && (
            <PokemonCard
              pokemon={pokemon}
            />
          )
        }
        <button
          onClick={() => setPokeNumber(Math.floor(Math.random() * (898 - 1) + 1))}
        >
          GET A RANDOM POKEMON
        </button>
      </Main>
    </div>
  );
}
