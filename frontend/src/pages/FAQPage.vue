<template>
  <div
    class="flex items-center justify-center"
    style="height: 350px; width: 100%; background-color: #d1d1d2; flex-direction: column"
  >
    <div>
      <h1 class="text-h4 text-center text-white">Frequently Asked Questions</h1>
    </div>

    <q-input
      bg-color="primary"
      rounded
      standout
      v-model="text"
      label="Search for keyword..."
      style="width: 50%"
    >
      <template v-slot:prepend>
        <q-icon name="search" class="q-ml-md" />
      </template>
      <template v-slot:append>
        <q-icon name="close" @click="text = ''" class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
</script>
