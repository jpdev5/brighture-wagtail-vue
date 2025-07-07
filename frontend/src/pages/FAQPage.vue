<template>
  <div class="flex items-center justify-center q-gutter-md">
    <div
      class="flex items-center justify-center"
      style="
        height: 300px;
        width: 100%;
        background-color: #d1d1d2;
        flex-direction: column;
        border-bottom: 0.5px solid #757575;
      "
    >
      <div>
        <p class="text-h4 text-center text-white">Frequently Asked Questions</p>
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
          <q-icon name="close" @click="text = ''" class="cursor-pointer q-mr-md" />
        </template>
      </q-input>
    </div>

    <div class="flex items-center column q-gutter-md">
      <h5>FAQs Content</h5>

      <div class="q-gutter-md" style="display: grid; grid-template-columns: repeat(4, 1fr)">
        <div v-for="i in 8" :key="i">
          <div class="bg-grey-4 q-pa-sm text-center" style="border: 0.5px solid #757575">
            FAQ Number: {{ i }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
</script>
