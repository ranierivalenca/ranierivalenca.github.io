<script setup lang="ts">
import { File } from "@/lib/Types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import ClickableComponent from "./menu/ClickableComponent.vue";

const { file } = defineProps({
  file: {
    type: Object as () => File,
    required: true,
  },
});
</script>

<template>
  <ClickableComponent :fileName="file.getName()" :icon="faFile">
    <RouterLink :to="`open${file.getPath()}`" :title="`${file.getName()}.md`" />
  </ClickableComponent>
</template>
