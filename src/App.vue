<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import FileExplorer from "@/components/FileExplorer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="flex flex-row min-h-screen bg-primary-50 text-primary-950">
    <FileExplorer />
    <div class="flex-1">
      <Header />
      <RouterView class="pl-2" />
    </div>
  </div>
</template>
