<template>
  <q-header class="q-px-lg custom-header flex justify-between items-center">
    <div class="row">
      <img src="/brighture_bk.png" alt="brighture logo" class="cursor-pointer" />

      <q-tabs v-for="(link, idx) in nav_links" :key="idx" no-caps align="left" class="text-dark">
        <q-route-tab :to="link.link" :label="link.label" exact />
      </q-tabs>
    </div>

    <q-btn no-caps flat dense class="flex items-center" padding="none">
      <div class="flex items-center q-gutter-md">
        <p class="text-dark q-mb-none">Jan Phillip Dacallos</p>
        <q-avatar size="40px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-avatar>
      </div>
      <q-menu>
        <q-list style="min-width: 150px">
          <q-item clickable v-close-popup>
            <q-item-section>Profile</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>Settings</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>Logout</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </q-header>
</template>

<script lang="ts" setup>
interface INavLinks {
  label: string;
  link: string;
}

const nav_links: INavLinks[] = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'About Us',
    link: '/about',
  },
  {
    label: 'Available Positions',
    link: '/available-positions',
  },
  {
    label: 'Position Details',
    link: '/position-details',
  },
  {
    label: 'Testimonials',
    link: '/testimonials',
  },
  {
    label: 'Inquiry',
    link: '/inquiry',
  },
  {
    label: 'Blog',
    link: '/#blog',
  },
];
</script>
