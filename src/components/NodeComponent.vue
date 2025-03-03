<script setup lang="ts">
import { MyFSNode } from "@/lib/Types";
import DirNodeComponent from "./DirNodeComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const { node } = defineProps({
  node: {
    type: Object as () => MyFSNode,
    required: true,
  },
});
</script>

<template>
  <DirNodeComponent v-if="node.isDirectory()" :dir="node.getAsDirectory()" />
  <div v-if="node.isFile()" class="flex items-center gap-2">
    <FontAwesomeIcon :icon="faFile" class="size-3" />
    <RouterLink :to="`open${node.getPath()}`" class="flex-1">{{
      `${node.getName()}.md`
    }}</RouterLink>
  </div>
</template>
