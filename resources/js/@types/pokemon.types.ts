export interface PokemonStats {
    hp: number;
    attack: number;
    defense: number;
    spp: number;
    spd: number;
    speed: number;
}

export interface Pokemon {
    name: string;
    primary_type: string;
    secondary_type?: string;
    image_url: string;
    id: string;
    stats: PokemonStats;
    description: string;
}
