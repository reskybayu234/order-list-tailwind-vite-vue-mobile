import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser as farUser } from "@fortawesome/free-regular-svg-icons";

import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

library.add(farUser);
library.add(faTwitter);
library.add(fas);

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(mdiVue, {
  icons: mdijs,
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router).mount("#app");
