import { shallowMount } from '@vue/test-utils';
import StatusBar from './index.vue';

describe('StatusBar', () => {
    it('renders the component correctly with the provided label, value, and type', () => {
        const label = 'Status';
        const value = 75;
        const type = 'fire';

        const wrapper = shallowMount(StatusBar, {
            propsData: {
                label,
                value,
                type,
            },
        });

        expect(wrapper.find('.status-bar__label').text()).toBe(label);

        const tracker = wrapper.find('.status-bar__tracker--value');
        expect(tracker.attributes('style')).toContain(`${value}%`);
        expect(tracker.classes()).toContain(`--${type}`);
    });

});
