import Toggler from "./toggler.vue";
import { action } from "@storybook/addon-actions";
import recordDate from "../recordDate/recordDate.vue";

export default {
    title: 'Toggler',
    component: Toggler,
    argTypes: {
        commentsUser: { control: 'text', name: 'Имя комментатора поста' },
        commentsText: { control: 'text', name: 'Текст поста' },
    }
}

const Template = (args) => ({
    components: { Toggler, recordDate },
    setup() {
        return {
            args,
            onToggle: action('toggle'),
        }
    },
    template: `
    <Toggler v-bind="args" @toggle="onToggle">
     <template #toggler-comments>
            <div class="toggler-comments" v-if="args.shown">
              <ul class="toggler-comments__list">
                <li class="toggler-comments__item">
                  <div class="toggler-comments__item-username">
                    {{ args.commentsUser }}
                  </div>
                  <div class="toggler-comments__item-text">
                    {{ args.commentsText }}
                  </div>
                </li>
              </ul>
              <recordDate></recordDate>
            </div>
          </template>
    </Toggler>
    `
})

export const Toggle = Template.bind({});

Toggle.args = {
    commentsUser: 'Alice',
    commentsText: 'Text from Alice',
    shown: false
}