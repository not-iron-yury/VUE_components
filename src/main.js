import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFaceSmile,
  faHand,
  faAddressBook,
  faCalendar,
  faHourglass,
  faFolder,
} from '@fortawesome/free-regular-svg-icons';

import './style.css';
import App from './App.vue';
import router from './router';

library.add([faFaceSmile, faHand, faAddressBook, faCalendar, faHourglass, faFolder]);

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
