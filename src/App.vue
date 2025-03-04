<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import FileExplorer from "@/components/FileExplorer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="content">
    <FileExplorer />
    <RouterView />
  </div>
</template>
