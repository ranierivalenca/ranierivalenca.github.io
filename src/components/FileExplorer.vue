<script setup lang="ts">
import { data } from "@/lib/files";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

import NodeComponent from "./NodeComponent.vue";
import { reactive, ref } from "vue";

// --- variables ---
const isOpen = ref(false);
</script>

<template>
  <div class="w-12 md:hidden"></div>
  <div
    class="fixed top-0 left-0 z-20 h-full flex flex-col items-center border-r border-primary-300 bg-primary-100 transision-all md:hidden"
    :class="{
      'w-12': !isOpen,
      'w-0': isOpen,
    }"
  >
    <div
      class="text-2xl p-4 cursor-pointer transition"
      @click="isOpen = !isOpen"
    >
      <FontAwesomeIcon :icon="faBars" />
    </div>
  </div>

  <div
    v-if="isOpen"
    class="fixed inset-0 z-10 bg-black opacity-50"
    @click="isOpen = false"
    :class="{ hidden: !isOpen }"
  ></div>

  <div class="md:w-1/3"></div>
  <div
    class="fixed top-0 left-0 z-30 h-full bg-primary-100 border-r border-primary-200 w-2/3 transition md:w-1/3 md:translate-x-0"
    :class="{
      'translate-x-0': isOpen,
      '-translate-x-full': !isOpen,
    }"
  >
    <div class="border-b border-primary-200 flex justify-between p-2">
      <p class="small-caps">Explorer</p>
      <span class="cursor-pointer px-4 md:hidden" @click="isOpen = !isOpen">
        <FontAwesomeIcon :icon="faClose" />
      </span>
    </div>
    <ul class="p-4">
      <li v-for="node in data" :key="node.getUuid()">
        <NodeComponent :node="node" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.small-caps {
  font-variant: small-caps;
}
</style>
