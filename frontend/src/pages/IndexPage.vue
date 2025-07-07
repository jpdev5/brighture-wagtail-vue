<template>
  <q-page>
    <f-a-q-page />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { api } from 'src/boot/axios';
import FAQPage from './FAQPage.vue';

onMounted(async () => {
  const fetch = async () => {
    const data = await api.get('?type=user_guide.UserGuidePage&fields=*');

    console.log(data.data);
  };

  await fetch();
});
</script>
