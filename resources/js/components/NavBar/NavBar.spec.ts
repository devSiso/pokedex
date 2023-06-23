import { shallowMount } from '@vue/test-utils';
import NavBar from './index.vue';

describe('NavBar', () => {
    const currentRouteName = 'home';

    it('renders the navigation items correctly', () => {
        const wrapper = shallowMount(NavBar, {
            propsData: {
                currentRouteName,
            },
        }) as any;

        const navigationItemsWrapper = wrapper.findComponent({ name: 'navigation-items' });

        expect(navigationItemsWrapper.exists()).toBe(true);
        expect(navigationItemsWrapper.props('items')).toEqual([
            {
                icon: 'home',
                href: '/',
                active: true,
                label: 'Home',
                disabled: false,
            },
            {
                icon: 'list',
                href: '/list',
                active: false,
                label: 'Lista',
                disabled: false,
            },
        ]);
    });
});
