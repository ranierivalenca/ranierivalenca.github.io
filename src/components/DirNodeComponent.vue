<script setup lang="ts">
import type { Directory } from "@/lib/Types";
import { computed, reactive, ref } from "vue";

import NodeComponent from "./NodeComponent.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import ClickableComponent from "./menu/ClickableComponent.vue";

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
  <ClickableComponent
    :fileName="dir.getName()"
    :icon="isOpen.value ? faChevronDown : faChevronRight"
  >
    <a @click="toggle" :title="dir.getName()" />
  </ClickableComponent>
  <ul v-if="isOpen.value">
    <li
      v-for="child in dir.getAsDirectory().getChildren()"
      :key="child.getUuid()"
    >
      <NodeComponent :node="child" />
    </li>
  </ul>
</template>
