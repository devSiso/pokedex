import { Pokemon } from "../@types/pokemon.types";

export const formatPokemonId = (id: number): string => {
    if (id < 10) {
        return `00${id}`;
    } else if (id < 100 && id >= 10) {
        return `0${id}`;
    }

    return id.toString();
}

export const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);
