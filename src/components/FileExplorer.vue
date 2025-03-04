<script setup lang="ts">
import { data } from "@/lib/files";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faChevronLeft,
  faClose,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import NodeComponent from "./NodeComponent.vue";
import { reactive, ref } from "vue";
import { useEventBus } from "@/stores/eventBus";

const eventBus = useEventBus();
// --- variables ---
const isOpen = ref(false);
eventBus.onOpenFile(() => {
  isOpen.value = false;
});
</script>

<template>
  <div class="file-explorer">
    <div
      class="overlay"
      @click="isOpen = false"
      :class="{ hidden: !isOpen }"
    ></div>

    <div class="side-menu" :class="{ open: isOpen }">
      <div class="menu-content">
        <h2>Explorer</h2>
        <menu>
          <li v-for="node in data.getNodes()" :key="node.getUuid()">
            <NodeComponent :node="node" />
          </li>
        </menu>
      </div>
      <div class="menu-tab md:hidden" @click="isOpen = !isOpen">
        <div class="clickable">
          <FontAwesomeIcon
            class="text-2xl"
            :icon="isOpen ? faChevronLeft : faEllipsisVertical"
          />
        </div>
      </div>
    </div>
  </div>
</template>
