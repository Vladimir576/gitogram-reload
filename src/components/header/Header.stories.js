import Header from "./Header.vue";


export default {
    component: Header,
    title: "Header",
    parameters: {
        docs: {
            description: {
                component: `
                Компонент Header является элементом заменющим контент в отдельных местах вместо slot'a,и зависит от внешней обертки, в Storybook создался div с определенными стилями чтобы показать как он может и должен выглядеть на отдельных фрагментах страницы 
                `
            },
        },
    },
};

const Template = () => ({
    components: { Header },
    template: `
    <div 
    style="display: flex;
    justify-content: space-between;
    ">
    <Header></Header>
    </div>
    `
})

export const HeaderView = Template.bind({});
HeaderView.parameters = {
    docs: {
        description: {
            story: 'Эта история показывает компонент без внешней обёртки layout.',
        },
    },
}