<script setup lang="ts">
import type { File } from "@/lib/Types";
import { useEventBus } from "@/stores/eventBus";
import { useOpenFilesStore } from "@/stores/openFiles";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed, ref, watch, nextTick } from "vue";

const openFilesStore = useOpenFilesStore();
const eventBus = useEventBus();

const openFiles = computed(() => openFilesStore.files);
const activeFile = computed(() => openFilesStore.activeFile);

const tabContainer = ref<HTMLElement | null>(null);

watch(activeFile, async () => {
  // Wait for DOM update before scrolling
  await nextTick();
  const activeTab = tabContainer.value?.querySelector('.tab.active');
  activeTab?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
});
</script>

<template>
  <div class="tabs">
    <div ref="tabContainer" class="items-wrapper">
        <div
          v-for="file in openFiles"
          :key="file.getUuid()"
          class="tab"
          :class="{ active: file.getUuid() === activeFile?.getUuid() }"
          @click="eventBus.openFile(file as File)"
        >
          <span>{{ file.getName() }}</span>
          <button v-if="openFiles.length > 1" @click.stop="openFilesStore.closeFile(file as File)">
            <FontAwesomeIcon :icon="faClose" />
          </button>
        </div>
    </div>
  </div>
</template>
