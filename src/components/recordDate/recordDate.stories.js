import recordDate from "./recordDate.vue";
import {action} from "@storybook/addon-controls"

export default {
title: 'recordDate',
component: recordDate,
argTypes: {
    recordDay:{control:'text', name: 'Дата написания/публикации'}
}
}

const Template = (args) =>( {
components: {recordDate},
setup () {
    return {
        args
    }
},
template: 
`
<recordDate v-bind="args"></recordDate>
`
})

export const recorDateView = Template.bind({})

recordDate.args = {
    recordDay: "30 May"
}