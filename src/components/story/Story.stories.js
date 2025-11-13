import "../progressLine/ProgressLine.vue"
import Story from "../story/Story.vue"
import ProgressLine from "../progressLine/ProgressLine.vue"
import HeaderContent from "../header/HeaderContent.vue"
import StoryContent from "../storyContent/StoryContent.vue"
import CustomButton from "../customButton/CustomButton.vue"
import "../header/HeaderContent.scss"
import "../customButton/CustomButton.scss"
import "../storyContent/StoryContent.scss"
import actions from "@storybook/addon-actions"

export default {
    name: "Story",
    component: Story,
    argTypes: {
        hoverText: { control: "text", name: "Text for button" }, withHoverText: { control: "boolean", name: "Boolean value for a button" },
        nickname: { control: "text", name: "Имя пользователя" },
        userAvatar: { control: "text", name: "URL фотографии" },
        size: { control: "text", name: "Класс для размеров фотографии" },
        headerContent__itemPos: { control: "text", name: "Класс для flex позиционирования" },
        headerAvatar: { control: "text", name: "Класс на фото обертке" },
        nicknameStyle: { control: "text", name: "Класс для ника" },
        storyText: { control: "text", name: "Текст из истории" },

    }
}

const Template = (args) => ({
    components: {Story, ProgressLine, HeaderContent, StoryContent, CustomButton},
    setup() {
        return {
            args
        }
    },
    template: `<story v-bind="args"></story>`
})

export const StoryView = Template.bind({});
StoryView.args = {
    nickname: "User",
    userAvatar: "https://a.d-cd.net/ckgAAgDbguA-960.jpg",
    size: "story-content__user-img--size",
    headerContent__itemPos: "flexLine",
    headerAvatar: "outlineNone",
    nicknameStyle: "story-content__user-nickname",
    withHoverText: true,
    hoverText: "Unfollow",
    storyText: "Just",
}
