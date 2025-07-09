<template>
  <div class="flex items-center justify-center column q-gutter-md">
    <div
      class="flex items-center justify-center"
      style="
        height: 300px;
        width: 100vw;
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

      <div class="grid grid-cols-2 gap-3">
        <div v-for="i in 8" :key="i">
          <div class="bg-grey-4 q-pa-sm q-px-xl text-center">FAQ Number: {{ i }}</div>
        </div>
      </div>
    </div>

    <div class="flex items-center column q-gutter-md">
      <q-list bordered>
        <q-expansion-item
          group="somegroup"
          icon="explore"
          label="First"
          default-opened
          class="w-72"
        >
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
              eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
              architecto suscipit iste eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
</script>
