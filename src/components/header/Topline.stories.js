import Topline from "./Topline.vue";
import HeaderContent from "./HeaderContent.vue";
import Header from "./Header.vue";
import '../header/HeaderContent.scss'
import '../header/header.scss'

export default {
    component: Topline,
    title: "Topline",
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
    components: { Topline, HeaderContent, Header },
    setup() {
        return {
            args
        }
    },
    template: `
    <Topline >
    <template #topline>
    <Header></Header>
    </template>
    <template #header-content>
      <ul class="header-content__list">
        <li
          class="header-content__item"
          v-for="(item, index) in 9"
          :key="index"
        >
    <HeaderContent v-bind="args"></HeaderContent>
    </li>
    </ul>
    </template>
    </Topline>
    `
})


export const ToplineView = Template.bind({});

ToplineView.args = {
    nickname: "User",
    userAvatar: "https://a.d-cd.net/ckgAAgDbguA-960.jpg",
    size: "header-content__item-img--size",
    headerContent__itemPos: "",
    headerAvatar: "outline",
    nicknameStyle: "",
}
