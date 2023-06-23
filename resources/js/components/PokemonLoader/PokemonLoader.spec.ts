import { shallowMount } from '@vue/test-utils';
import PokemonLoader from './index.vue';

describe('PokemonLoader', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(PokemonLoader);
  });

  it('renders the loader correctly', () => {
    expect(wrapper.find('.pokemon-loader').exists()).toBe(true);
    expect(wrapper.find('.pokemon-loader__pokeball').exists()).toBe(true);
    expect(wrapper.find('.pokemon-loader__text').exists()).toBe(true);
    expect(wrapper.find('.pokemon-loader__text').text()).toBe('Loading');
  });
});
