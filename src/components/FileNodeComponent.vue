<script setup lang="ts">
import { File } from "@/lib/Types";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import ClickableComponent from "./menu/ClickableComponent.vue";
import OpenFile from "./menu/OpenFile.vue";

const { file } = defineProps({
  file: {
    type: Object as () => File,
    required: true,
  },
});
</script>

<template>
  <ClickableComponent :fileName="file.getName()" :icon="faFile">
    <!-- <RouterLink :to="`open${file.getPath()}`" @click="openFile" :title="`${file.getName()}.md`" /> -->
    <OpenFile :file="file">
      {{ file.getName() }}
    </OpenFile>
  </ClickableComponent>
</template>
