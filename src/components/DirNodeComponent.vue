<script setup lang="ts">
import type { Directory } from "@/lib/Types";
import { computed, reactive, ref } from "vue";

import NodeComponent from "./NodeComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

const { dir } = defineProps({
  dir: {
    type: Object as () => Directory,
    required: true,
  },
});

const isOpen = reactive({ value: dir.isOpen() });

const toggle = () => {
  dir.toggle();
  isOpen.value = dir.isOpen();
};
</script>

<template>
    <FontAwesomeIcon :icon="isOpen.value ? faChevronDown : faChevronRight" class="size-3" />
  <span v-on:click="toggle()" class="ml-2">{{ dir.getName() }}</span>
  <ul v-if="isOpen.value" class="px-4 border-l border-primary-300">
    <li
      v-for="child in dir.getAsDirectory().getChildren()"
      :key="child.getUuid()"
    >
      <NodeComponent :node="child" />
    </li>
  </ul>
</template>
