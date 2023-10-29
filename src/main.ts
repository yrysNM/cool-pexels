import { createApp } from "vue"
import { VueMasonryPlugin } from "vue-masonry"
import App from "./App.vue"

createApp(App).use(VueMasonryPlugin).mount("#app")
