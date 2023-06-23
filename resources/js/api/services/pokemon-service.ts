import APIService from "..";
import { formatPokemonId } from "../../utils";
import type { Pokemon } from '../../@types/pokemon.types'

class PokemonDataService extends APIService {
    constructor() {
        super();
    }

    async fetchPokemonFlavorTextByName(name: string): Promise<{ name: string, flavor_text: string }> {
        const data = await this.get(`/pokemon-species/${name}`);
        const flavor_text: string = data.flavor_text_entries.find((item: any) => item.language.name === "en" && item.version.name === "ruby").flavor_text;

        return {
            name,
            flavor_text
        }
    }

    async fetchPokemonByName(name: string) {
        const data = await this.get(`/pokemon/${name}`);
        return data;
    }

    async fetchOriginalPokemons(limit: number = 150): Promise<Pokemon[]> {
        const { results } = await this.get(`/pokemon?limit=${limit}`);
        const pokemonDataPromises = results.map((pokemon: any) => this.fetchPokemonByName(pokemon.name));
        const pokemonTextFlavorsPromises = results.map((pokemon: any) => this.fetchPokemonFlavorTextByName(pokemon.name));
        const allPokemonTextFlavors = await Promise.all(pokemonTextFlavorsPromises);

        const allPokemonData = (await Promise.all(pokemonDataPromises)).map((pokemon: any) => {
            return {
                name: pokemon.name,
                primary_type: pokemon.types[0].type.name,
                secondary_type: pokemon.types[1] ? pokemon.types[1].type.name : undefined,
                image_url: pokemon.sprites.other['official-artwork'].front_default,
                id: formatPokemonId(pokemon.id),
                stats: {
                    hp: pokemon.stats.find((stat: any) => stat.stat.name === 'hp').base_stat,
                    attack: pokemon.stats.find((stat: any) => stat.stat.name === 'attack').base_stat,
                    defense: pokemon.stats.find((stat: any) => stat.stat.name === 'defense').base_stat,
                    spp: pokemon.stats.find((stat: any) => stat.stat.name === 'special-attack').base_stat,
                    spd: pokemon.stats.find((stat: any) => stat.stat.name === 'special-defense').base_stat,
                    speed: pokemon.stats.find((stat: any) => stat.stat.name === 'speed').base_stat,
                },
                description: allPokemonTextFlavors.find((flavor: { name: string, flavor_text: string }) => flavor.name === pokemon.name).flavor_text,
            }
        });

        return allPokemonData;
    }
}

export default new PokemonDataService();
