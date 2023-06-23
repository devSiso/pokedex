import { shallowMount } from '@vue/test-utils';
import PokemonCard from './index.vue';

describe('PokemonCard', () => {
    const pokemon = {
        id: '001',
        name: 'Bulbasaur',
        primary_type: 'grass',
        secondary_type: 'poison',
        image_url: '/images/bulbasaur.png',
    };

    it('renders the Pokemon card correctly', () => {
        const wrapper = shallowMount(PokemonCard, {
            propsData: {
                pokemon,
            },
        });

        expect(wrapper.find('.pokemon-card').exists()).toBe(true);
        expect(wrapper.find('.pokemon-card__content-name').text()).toBe('Bulbasaur');

        const types = wrapper.findAll('.pokemon-card__type');
        expect(types.length).toBe(2);
        expect(types.at(0).attributes('title')).toBe('grass');
        expect(types.at(1).attributes('title')).toBe('poison');

        const image = wrapper.find('.pokemon-card__image');
        expect(image.attributes('src')).toBe('/images/bulbasaur.png');
        expect(image.attributes('alt')).toBe('Bulbasaur');
    });

    it('sets the correct CSS classes based on Pokemon type', () => {
        const wrapper = shallowMount(PokemonCard, {
            propsData: {
                pokemon,
            },
        });

        expect(wrapper.classes()).toContain('--grass');
    });

});
