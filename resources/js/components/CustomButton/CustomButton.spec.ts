import { shallowMount } from '@vue/test-utils';
import CustomButton from './index.vue';

describe('CustomButton', () => {
    it('emits "on-click" event when clicked', () => {
        const wrapper = shallowMount(CustomButton, {
            propsData: {
                label: 'Click me',
            },
        });

        wrapper.find('.custom-button').trigger('click');

        expect(wrapper.emitted('on-click')).toBeTruthy();
    });

    it('renders the correct label', () => {
        const label = 'Click me';
        const wrapper = shallowMount(CustomButton, {
            propsData: {
                label,
            },
        });

        expect(wrapper.find('.custom-button__label').text()).toBe(label);
    });
});
