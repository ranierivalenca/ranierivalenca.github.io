<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import FileExplorer from "@/components/FileExplorer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div
    :class="
      twc(
        'bg-primary-50',
        'text-primary-950',
        'flex',
        'flex-row',
        'min-h-screen',
      )
    "
  >
    <FileExplorer />
    <div class="flex-1">
      <Header />
      <RouterView class="pl-2" />
    </div>
  </div>
</template>
