import PokemonLoader from '../resources/js/components/PokemonLoader/index.vue';

export default {
    title: 'Components/PokemonLoader',
    component: PokemonLoader,
};

export const Default = () => ({
    components: { PokemonLoader },
    template: '<pokemon-loader />',
});
