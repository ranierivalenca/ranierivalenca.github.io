<script setup lang="ts">
import { MyFSNode } from "@/lib/Types";
import DirNodeComponent from "./DirNodeComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import FileNodeComponent from "./FileNodeComponent.vue";

const { node } = defineProps({
  node: {
    type: Object as () => MyFSNode,
    required: true,
  },
});
</script>

<template>
  <DirNodeComponent v-if="node.isDirectory()" :dir="node.getAsDirectory()" />
  <FileNodeComponent v-else :file="node.getAsFile()" />
</template>
