<template>
  <div class="flex items-center justify-center flex-col gap-5">
    <div
      class="flex items-center justify-center w-full"
      style="
        height: 300px;
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

    <div class="flex justify-center items-center w-full flex-col gap-3">
      <h5>Questions</h5>

      <q-list v-for="i in 4" :key="i" bordered class="w-1/2">
        <q-expansion-item
          group="somegroup"
          icon="explore"
          :label="`${i} Item`"
          class="w-full"
          :default-opened="i === 1"
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

    <div>
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none"> Test me </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref('');
</script>
