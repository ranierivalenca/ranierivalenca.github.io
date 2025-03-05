<script setup lang="ts">
import { useOpenFilesStore } from "@/stores/openFiles";
import { useRoute, useRouter } from "vue-router";
import { computed, nextTick, onMounted, ref, watch } from "vue";
import { data } from "@/lib/files";
import { useEventBus } from "@/stores/eventBus";
import type { File } from "@/lib/Types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { MyMarked } from "@/lib/MyMarked";

const openFiles = useOpenFilesStore();
const eventBus = useEventBus();

const route = useRoute();
const router = useRouter();

const currentFile = computed(() => openFiles.activeFile);
const hash = ref("");

const marked = new MyMarked();

const htmlContent = ref(
  marked.render((currentFile.value as File)?.getMarkdown() || "")
);
const isLoading = ref(false);

function openFileByPath(path: string) {
  // console.group("openFileByPath");
  console.log({ path, data });
  const file = data.getNodeByPath(path);

  if (!file?.isFile()) {
    console.warn("TODO: treat directory paths", path);
    return;
  }

  eventBus.openFile(file.getAsFile());
  //
  console.log({ file });
  if (!file) {
    // TODO: 404
    console.warn("File not found", path);
    return;
  }
}

watch(
  () => currentFile.value,
  async (file) => {
    if (!file) return;
    if (file.isMarkdownSet()) {
      htmlContent.value = marked.render(file.getMarkdown());
      return;
    }

    htmlContent.value = "";
    isLoading.value = true;

    const response = await fetch(`/data/${file.getPath()}.md`);
    const text = await response.text();
    console.log({ text });
    file.setMarkdown(text);

    setTimeout(async () => {
      htmlContent.value = marked.render(file?.getMarkdown() || "");
      isLoading.value = false;

      if (hash.value) {
        router.push({ hash: hash.value });
        await nextTick();
        const element = document.getElementById(hash.value.slice(1));
        if (element) {
          element.scrollIntoView();
        }
      }
    }, 500);
  }
);

onMounted(() => {
  hash.value = route.hash;
  openFileByPath(route.params.path as string);
});
</script>

<template>
  <div v-if="isLoading" class="loading">
    <FontAwesomeIcon :icon="faSpinner" spin />
    <span> Loading... </span>
  </div>
  <div class="main-wrapper">
    <main v-html="htmlContent" />
  </div>
</template>
