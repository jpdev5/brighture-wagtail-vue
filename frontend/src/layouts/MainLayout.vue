<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="q-px-lg custom-header">
      <q-tabs align="left" class="text-dark q-px-xl q-py-xs">
        <img src="/brighture_bk.png" alt="brighture logo" class="cursor-pointer" />

        <q-route-tab to="/#" label="Page One" />
        <q-route-tab to="/#" label="Page Two" />
        <q-route-tab to="/#" label="Page Three" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
