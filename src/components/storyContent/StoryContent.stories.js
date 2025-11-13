import StoryContent from "./StoryContent.vue";
import { action } from "@storybook/addon-actions"
export default {
    component: StoryContent,
    title: "StoryContent",
    argTypes: {
        storyText: { control: "text", name: "Тест поста истории" },
        storyImg: { control: "text", name: "Иной src юзер аватара  поста" }
    }
}

const Template = (args) => ({
    setup() {
        return {
            args
        }
    },
    components: { StoryContent },
    template: `<StoryContent v-bind=args></StoryContent>`
})

export const StoryContentView = Template.bind({});

StoryContentView.args = {
    storyText: "For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.",
    storyImg: "https://cs5.pikabu.ru/post_img/big/2015/06/04/11/1433446202_1725992411.jpg",
}
