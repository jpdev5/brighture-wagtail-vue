<template>
  <q-layout view="hHh lpR fFf">
    <AppHeader />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import AppHeader from 'src/components/AppHeader.vue';
</script>
