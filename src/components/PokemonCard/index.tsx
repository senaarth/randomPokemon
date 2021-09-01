import Image from "next/image";

import { Container } from "./styles";

export function PokemonCard({ pokemon }) {
    return (
        <Container>
            <h3>{pokemon.name}</h3>
            <Image 
                src={pokemon.image}
                layout="fill"
            />
        </Container>
    );
}