import stories from "@/pages/stories/stories.vue";
import feeds from "@/pages/feeds/feeds.vue";

export const routes =  [
    {
        path: "/",
        component: feeds,
    },
    {
        path: "/stories/:id?",
        component: stories,

    }
]