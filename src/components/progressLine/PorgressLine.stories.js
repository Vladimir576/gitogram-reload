import ProgressLine from "./ProgressLine.vue";

export default {
    component: ProgressLine,
    title: "ProgressLine",
    argTypes: {
        onFinish: {
            action:"onFinish",
            description: "fires when progress end"
        }
    }
}

const Template = (args) => ({
    components: { ProgressLine },
    setup() {
        return { args }
    },
    template: `<ProgressLine v-bind="args" @onFinish="onFinish"></ProgressLine>`,
})

export const ProgressLineView = Template.bind({});