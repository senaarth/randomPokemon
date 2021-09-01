import React, { useState } from "react";
import Head from "next/head";
import Lottie from "react-lottie";
import Image from "next/image";

import { PokemonCard } from "../components/PokemonCard";

import api from "../services/api";

import { Main, Container } from "../styles/home";

import loading from "../assets/loading.json";
import pokeImg from "../assets/pokemon.png";

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
      setIsLoading(true);
      await api.get(`/pokemon/${pokeNumber}`)
        .then(({ data }) => {
          setPokemon({
            name: data.species.name.toUpperCase(),
            image: data.sprites.other["official-artwork"].front_default,
          });
        })
        .catch((err) => {

        });

      setTimeout(() => setIsLoading(false), 500);
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
        <Image
          src={pokeImg}
        />
        {
          !isLoading ? (
            <PokemonCard
              pokemon={pokemon}
            />
          ) : (
            <Container>
              <Lottie
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: loading,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice'
                  }
                }}
                height={150}
                width={150}
              />
            </Container>
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
