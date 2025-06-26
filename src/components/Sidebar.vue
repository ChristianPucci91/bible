<template>
  <v-navigation-drawer app permanent>
     <v-list lines="two">
      <template v-for="(item, index) in items">
        <v-list-subheader
          v-if="item.header"
          :key="item.header"
          inset
        >
          {{ item.header }}
        </v-list-subheader>

        <v-divider class="m-0"
          v-else-if="item.divider"
          :key="index"
          inset
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
          :prepend-avatar="item.avatar"
          ripple
          :active-class="'v-list-item--active'"
          :to="item.route"
        >
          <template v-slot:title>
            <div v-html="item.title"></div>
          </template>

          <template v-slot:subtitle>
            <div v-html="item.subtitle"></div>
          </template>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>

 const items = [
    {
      header: 'Get started',
    },
    { divider: true },
    {
      avatar: '',
      title: 'Mantra',
      subtitle: `
        <div class="my-2">- Checklist pre progetto</div>
        <div class="my-2">- Best practices e tips</div>
        <div class="my-2">- Naming variabili, funzioni</div>
      `,
      route: '/mantra'
    },

    {
      header: 'LARAVEL',
    },
    { divider: true },
    {
      avatar: '',
      title: 'Best Practise',
      subtitle: `
        <div class="my-2">- Scaffholding laravel</div>
        <div class="my-2">- Modelli, metodi, relations</div>
        <div class="my-2">- Controllers e funzioni</div>
      `,
      route: '/best-practise'
    },
    {
      avatar: '',
      title: 'Tests',
      subtitle: `
        <div class="my-2">- Unit tests</div>
      `,
      route: '/tests'
    },
    {
      avatar: '',
      title: 'Handlers',
      subtitle: `
        <div class="my-2">- File Upload</div>
        <div class="my-2">- Mail</div>
        <div class="my-2">- DataTable</div>
      `,
      route: '/handlers'
    },

  ]
</script>