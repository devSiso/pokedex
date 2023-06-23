import { shallowMount } from '@vue/test-utils';
import HamburgerButton from './index.vue';

describe('HamburgerButton', () => {
    it('emits "toggle-menu" event when clicked', () => {
        const wrapper = shallowMount(HamburgerButton, {
            propsData: {
                controlsElementId: 'my-menu',
            },
        });

        wrapper.find('.hamburger-menu').trigger('click');

        expect(wrapper.emitted('toggle-menu')).toBeTruthy();
    });

    it('renders correctly when active is true', () => {
        const wrapper = shallowMount(HamburgerButton, {
            propsData: {
                controlsElementId: 'my-menu',
                active: true,
            },
        });

        expect(wrapper.find('.hamburger-menu--active').exists()).toBe(true);
    });

    it('renders correctly when active is false', () => {
        const wrapper = shallowMount(HamburgerButton, {
            propsData: {
                controlsElementId: 'my-menu',
                active: false,
            },
        });

        expect(wrapper.find('.hamburger-menu--active').exists()).toBe(false);
    });
});
