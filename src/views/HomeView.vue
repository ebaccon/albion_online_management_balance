<script setup lang="ts">
import Button from 'primevue/button'
import IftaLabel from 'primevue/iftalabel'
import IconField from 'primevue/iconfield'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import { ref } from 'vue'


const value = ref(null);
</script>

<template>
  <main>
    <div class="flex justify-center">
        <Card class="max-w-sm w-full bg-blue-500">
          <template #content>
            <Button label="Hello World" />
            <Button label="Success" severity="success" />
            <IftaLabel>
                <IconField>
                    <InputText id="email" v-model="value" autocomplete="off" variant="filled" />
                </IconField>
                <label for="email">Email</label>
            </IftaLabel>
          </template>
        </Card>
    </div>
  </main>
</template>
