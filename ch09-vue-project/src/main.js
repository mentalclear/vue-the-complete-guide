import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);
// Globally registered component:
app.component('BaseBadge', BaseBadge);
app.component('BaseCard', BaseCard);

app.mount('#app');
