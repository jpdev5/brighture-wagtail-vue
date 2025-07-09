<template>
  <div class="flex items-center justify-center flex-col gap-8">
    <div
      class="flex items-center justify-center w-full"
      style="
        height: 300px;
        background-image:
          linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/faq_bg.jpeg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        flex-direction: column;
        border-bottom: 0.2em solid #757575;
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

      <div class="grid grid-cols-2 gap-8">
        <div v-for="(faq, index) in faqContents" :key="index">
          <div class="bg-slate-50 py-4 px-7 rounded-md">
            <h5 class="!text-lg !font-semibold mb-2 text-[#373518]">{{ faq.label }}</h5>
            <ul class="list-disc pl-5 text-left space-y-1">
              <li v-for="(item, idx) in faq.content" :key="idx">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center w-full flex-col gap-5">
      <h5>Need Help?</h5>

      <div class="flex justify-center items-center w-full flex-col gap-3">
        <q-list v-for="(questions, index) in needHelpContents" :key="index" bordered class="w-1/2">
          <q-expansion-item
            group="somegroup"
            :label="`${questions.label}`"
            icon="help"
            class="w-full"
            :default-opened="index === 0"
          >
            <q-card>
              <q-card-section v-for="(item, idx) in questions.content" :key="idx">
                {{ item }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </div>

    <div id="blog" class="flex justify-center w-full px-52 gap-8">
      <h5>Trending</h5>

      <div class="grid grid-cols-4 gap-5">
        <q-card
          v-for="(topics, idx) in trendingTopics"
          :key="idx"
          class="my-card hover:drop-shadow-lg cursor-pointer"
          flat
          bordered
          @click="redirect('https://www.facebook.com/')"
        >
          <img :src="topics.image" :alt="topics.title" />

          <q-card-section>
            <div class="text-h6">{{ topics.title }}</div>
            <div class="text-subtitle2">{{ topics.author }}</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            {{ topics.summary }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { faqContents } from 'src/components/data/faq-page';
import { needHelpContents } from 'src/components/data/faq-page';
import { trendingTopics } from 'src/components/data/faq-page';

const text = ref('');

function redirect(url: string) {
  window.open(url, '_blank');
}
</script>
