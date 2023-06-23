import { shallowMount } from '@vue/test-utils';
import CustomSearchInput from './index.vue';

describe('CustomSearchInput', () => {
    it('emits "on-search" event with the input value when searched', () => {
        const wrapper = shallowMount(CustomSearchInput, {
            propsData: {
                name: 'search',
                placeholder: 'Search',
            },
        });

        const searchInput = wrapper.find('input[type="search"]');
        const searchValue = 'Test';

        searchInput.setValue(searchValue);
        searchInput.trigger('input');
        searchInput.trigger('keydown.enter');

        const emittedSearchEvent = wrapper.emitted('on-search');
        expect(emittedSearchEvent).toBeTruthy();

        if (emittedSearchEvent) {
            expect(emittedSearchEvent[0][0]).toBe(searchValue);
        }
    });
});
