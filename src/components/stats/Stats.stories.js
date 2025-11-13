import Stats from "./Stats.vue";
import { action } from "@storybook/addon-actions"

export default {
    component: Stats,
    title: "Stats",
    argTypes: {
        starAmount: { control: 'text', name: "Количество лайков" },
        forkAmount: { control: 'text', name: "Количество репостов" }
    }
};

const Template = (args) => ({
    components: { Stats },
    setup() {
        return {
            args
        }
    },
    template: `
    <Stats v-bind="args"></Stats>
    `
});

export const StatsView = Template.bind({});

StatsView.args = {
    starAmount: "156k",
    forkAmount: "756"
}