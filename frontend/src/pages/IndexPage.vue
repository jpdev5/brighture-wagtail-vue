<template>
  <q-page class="row items-center justify-evenly"> s </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { api } from 'src/boot/axios';

onMounted(async () => {
  const fetch = async () => {
    const data = await api.get('?type=user_guide.UserGuidePage&fields=*');

    console.log(data.data);
  };

  await fetch();
});
</script>
