import PokemonCard from '../resources/js/components/PokemonCard/index.vue';

export default {
    title: 'Components/PokemonCard',
    component: PokemonCard,
    argTypes: {
        pokemon: {
            control: {
                type: 'object',
            },
        },
    },
};

const Template = (args) => ({
    components: { PokemonCard },
    setup() {
        return { args };
    },
    template: `
        <div class="storybook-container">
            <pokemon-card :pokemon="args.pokemon" />
        </div>
    `,
});

export const Default = Template.bind({});

Default.args = {
    pokemon: {
        id: 1,
        name: 'Pikachu',
        primary_type: 'electric',
        secondary_type: null,
        image_url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
    },
};
