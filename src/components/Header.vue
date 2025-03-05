<script setup lang="ts">
import { useEventBus } from "@/stores/eventBus";
import DarkModeSwith from "./DarkModeSwitch.vue";
import { data } from "@/lib/files";

const eventBus = useEventBus();
const openHome = () => {
  eventBus.openFile(data.getHome())
}
</script>

<template>
  <header>
    <h1 @click="openHome">ranierivalenca.dev</h1>
    <DarkModeSwith />
  </header>
</template>
