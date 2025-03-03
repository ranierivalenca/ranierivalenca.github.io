<script setup lang="ts">
import { File } from "@/lib/Types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const { file } = defineProps({
  file: {
    type: Object as () => File,
    required: true,
  },
});
</script>

<template>
<div class="flex items-center gap-2">
    <FontAwesomeIcon :icon="faFile" class="size-3" />
    <RouterLink :to="`open${file.getPath()}`" class="flex-1">{{
      `${file.getName()}.md`
    }}</RouterLink>
</div>
</template>
