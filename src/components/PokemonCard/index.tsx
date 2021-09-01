import Image from "next/image";

import { Container } from "./styles";

export function PokemonCard({ pokemon }) {
    return (
        <Container>
            <h1>{pokemon.name}</h1>
            <Image 
                src={pokemon.image}
                layout="fill"
            />
        </Container>
    );
}