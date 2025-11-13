import CustomButton from "./CustomButton.vue"
import {action} from "@storybook/addon-actions"

export default {
    component: CustomButton,
    title: "CustomButton",
    argTypes: {
        hoverText: { control: 'text', name: "Текст в кнопке" },
        withHoverText: { control: 'boolean', name: "BooleanValue" },

    }

}

const Template = (args) => ({
    setup() {
        return {
            args
        }
    },
    components: { CustomButton },
    template: `
    <CustomButton hoverText="Unfollow" withHoverText=true >Follow</CustomButton>
    `,
})



export const CustomButtonDef = Template.bind({})

CustomButtonDef.args = {
    hoverText: "Unfollow",
    withHoverText: false,
}