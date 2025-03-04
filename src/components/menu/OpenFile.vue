<script setup lang="ts">
import { useOpenFilesStore } from "@/stores/openFiles";
import { useEventBus } from "@/stores/eventBus";
import { File } from "@/lib/Types";
import router from "@/router";

const openFilesStore = useOpenFilesStore();
const eventBus = useEventBus();

const { file } = defineProps({
  file: {
    type: Object as () => File,
    required: true,
  },
});

const openFile = () => {
//   eventBus.emit("open-file", file);
eventBus.openFile(file);
};
</script>

<template>
  <a @click="openFile" :title="`${file.getName()}.md`">
    <slot />
  </a>
</template>
