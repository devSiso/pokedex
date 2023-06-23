import StatusBar from '../resources/js/components/StatusBar/index.vue';

export default {
    title: 'Components/StatusBar',
    component: StatusBar,
    argTypes: {
        label: { control: 'text' },
        value: { control: 'number' },
        type: { control: 'text' },
    },
};

const Template = (args) => ({
    components: { StatusBar },
    setup() {
        return { args };
    },
    template: '<StatusBar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    label: 'ATK',
    value: 75,
    type: 'grass',
};
