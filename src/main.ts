import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
    license: 'eyJpZCI6ImFhNTE2Y2U4LTk1NDEtNDliYy05M2U5LTE4ZDVmZjQzNDgzYSIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3OTQ1MDc4NDksImV4cCI6MTgyNjA0Mzg0OX0.920F3ehgZVABh0MoDdkXpk63O7oIkeJGboo9qP0Wy9BA_HlpQiuzE1e0psvshoVYduJCF4sba7txo17RNBXLDQ'
});

app.mount('#app')
