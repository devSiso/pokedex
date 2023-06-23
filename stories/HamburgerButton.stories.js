import HamburgerButton from '../resources/js/components/HamburgerButton/index.vue';

export default {
    title: 'Components/HamburgerButton',
    component: HamburgerButton,
    argTypes: {
        controlsElementId: {
            control: {
                type: 'text',
            },
        },
        active: {
            control: {
                type: 'boolean',
            },
        },
    },
};

const Template = (args) => ({
    components: { HamburgerButton },
    setup() {
        return { args };
    },
    template: `
        <div class="storybook-container">
            <hamburger-button :controlsElementId="args.controlsElementId" :active="args.active" />
        </div>
    `,
});

export const Default = Template.bind({});

Default.args = {
    controlsElementId: 'teste',
    active: false,
}
