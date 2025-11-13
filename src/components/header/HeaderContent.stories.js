import HeaderContent from "./HeaderContent.vue";
import { action } from "@storybook/addon-actions"

export default {
    title: "HeaderContent",
    component: HeaderContent,

    argTypes: {
        nickname: { control: "text", name: "Имя пользователя" },
        userAvatar: { control: "text", name: "URL фотографии" },
        size: { control: "text", name: "Класс для размеров фотографии" },
        headerContent__itemPos: { control: "text", name: "Класс для flex позиционирования" },
        headerAvatar: { control: "text", name: "Класс на фото обертке" },
        nicknameStyle: { control: "text", name: "Класс для ника" },
    }

}

const Template = (args) => ({
    components: {HeaderContent},
setup(){
return{args}
},
    template: `
    <HeaderContent v-bind="args"></HeaderContent>
    `,
})

export const HeaderContentView = Template.bind({});
HeaderContentView.args = {
    nickname: "User",
    userAvatar: "https://a.d-cd.net/ckgAAgDbguA-960.jpg",
    size: "header-content__item-img--size",
    headerContent__itemPos: "",
    headerAvatar: "outlineNone",
    nicknameStyle: "",
}

export const HeaderContentViewOutline = Template.bind({});
HeaderContentViewOutline.args = {
      nickname: "User Outline",
    userAvatar: "https://a.d-cd.net/ckgAAgDbguA-960.jpg",
    size: "header-content__item-img--size",
    headerContent__itemPos: "",
    headerAvatar: "outline",
    nicknameStyle: "",
}