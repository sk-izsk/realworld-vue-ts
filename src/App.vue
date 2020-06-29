<template>
  <div id="app">
    <AppNavbar />
    <router-view />
    <AppFooter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

import AppFooter from "@/components/AppFooter";
import AppNavbar from "@/components/AppNavbar";
@Component({
  components: {
    AppFooter,
    AppNavbar,
  },
})
export default class App extends Vue {}
</script>

<style></style>
