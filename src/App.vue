<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import FileExplorer from "@/components/FileExplorer.vue";
import Header from "./components/Header.vue";
import Tabs from "./components/Tabs.vue";

import router from "./router";
import { useEventBus } from "./stores/eventBus";
import { useOpenFilesStore } from "./stores/openFiles";
import type { File } from "./lib/Types";

const openFilesStore = useOpenFilesStore();
const eventBus = useEventBus();

eventBus.onOpenFile((file: File | null) => {
  if (file === null) {
    router.push('/');
    return;
  }
  openFilesStore.openFile(file!);
  router.push(`/${file!.getPath()}`);
});
</script>

<template>
  <Header />
  <div class="content">
    <FileExplorer />
    <main>
      <Tabs />
      <RouterView />
    </main>
  </div>
</template>
