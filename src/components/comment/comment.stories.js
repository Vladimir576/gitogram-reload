import comment from "./comment.vue"

export default {
    component: comment,
    title: "Comment",
    argTypes: {
        username: { control: "text", name: "Имя комментатора" },
        text: { control: "text", name: "Текст комментария " }
    },
}

const Template = (args) => ({
    components: { comment },
    setup() {
        return { args }
    },
    template: `
  <comment v-bind="args"></comment>
  `
})

export const commentView = Template.bind({});
commentView.args = {
    username: "UserName",
    text: "Text by UserName"
}

