import { shallowMount } from '@vue/test-utils';
import FullScreenMenu from './index.vue';

describe('FullScreenMenu', () => {
    it('renders correctly when isOpen is true', () => {
        const wrapper = shallowMount(FullScreenMenu, {
            propsData: {
                isOpen: true,
            },
        });

        expect(wrapper.find('.full-screen-menu--open').exists()).toBe(true);
    });

    it('renders correctly when isOpen is false', () => {
        const wrapper = shallowMount(FullScreenMenu, {
            propsData: {
                isOpen: false,
            },
        });

        expect(wrapper.find('.full-screen-menu--open').exists()).toBe(false);
    });
});
