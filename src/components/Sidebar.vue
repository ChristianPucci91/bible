<template>
  <v-navigation-drawer app permanent>
    <v-list nav dense>
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        :to="item.route"
        link
        :active-class="'v-list-item--active'"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
const menuItems = [
  { title: 'Home', icon: 'mdi-view-dashboard', route: '/' },
  { title: 'About', icon: 'mdi-account-group', route: '/about' },
  { title: 'Best Practise', icon: 'mdi-account-group', route: '/best-practise' },

]
</script>