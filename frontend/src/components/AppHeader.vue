<template>
  <q-header class="q-px-lg custom-header flex justify-between items-center">
    <q-tabs no-caps align="left" class="text-dark">
      <img src="/brighture_bk.png" alt="brighture logo" class="cursor-pointer" />
      <q-route-tab to="/#" label="Page One" />
      <q-route-tab to="/#" label="Page Two" />
      <q-route-tab to="/#" label="Page Three" />
    </q-tabs>

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
