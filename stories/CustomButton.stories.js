import CustomButton from '../resources/js/components/CustomButton/index.vue';

export default {
    title: 'Components/CustomButton',
    component: CustomButton,
    argTypes: {
        label: {
            control: {
                type: 'text',
            },
        },
    },
};

const Template = (args) => ({
    components: { CustomButton },
    setup() {
        return { args };
    },
    template: `
        <div class="storybook-container">
           <custom-button :label="args.label" @on-click="handleClick" />
        </div>
    `,
    methods: {
        handleClick() {
            alert('Clicked!')
        },
    },
});


export const Default = Template.bind({});

Default.args = {
    label: 'Button',
};
