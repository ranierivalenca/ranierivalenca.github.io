<script setup lang="ts">
import { useOpenFilesStore } from "@/stores/openFiles";
import { useRoute } from "vue-router";
import { computed, onMounted, watch } from "vue";
import { data } from "@/lib/files";

const openFiles = useOpenFilesStore();

const route = useRoute();
const file = computed(() => openFiles.activeFile);

function openFileByPath(path: string) {
  console.group("openFileByPath");
  console.log({ path, data })
  console.groupEnd();
  const file = data.getNodeByPath(path);
  if (!file) {
    // TODO: 404
    console.warn("File not found", path);
    return;
  }
  console.log("openFileByPath", file);
  openFiles.openFile(file.getAsFile());
}

watch(
  () => route.params.path,
  (newPath) => openFileByPath(newPath as string)
);

watch(
  () => openFiles.activeFile,
  (newFile) => {
    console.warn("activeFile", newFile);
    console.log("activeFile", newFile);
    if (newFile) {
      route.params.path = newFile.getPath();
    }
  }
)

onMounted(() => {
  openFileByPath(route.params.path as string);
});
</script>

<template>
  <div>Reading file: {{ file }}</div>
</template>
