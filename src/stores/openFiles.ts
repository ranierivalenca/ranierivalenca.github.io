import { File } from "@/lib/Types";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useEventBus } from "./eventBus";

const saveFiles = (files: File[]) => {
  const jsonFiles = files.map((f) => f.toJson());
  sessionStorage.setItem("files", JSON.stringify(jsonFiles));
};
const saveActiveFile = (file: File) => {
  sessionStorage.setItem("activeFile", file.toJson());
};
const loadFiles = (): File[] => {
  const files = sessionStorage.getItem("files");
  return files ? JSON.parse(files).map(File.fromJSON) : [];
};
const loadActiveFile = (): File | null => {
  const file = sessionStorage.getItem("activeFile");
  return file ? File.fromJSON(file) : null;
};

export const useOpenFilesStore = defineStore("openFiles", () => {
  const files = ref<File[]>(loadFiles());
  const activeFile = ref<File | null>(loadActiveFile());

  // const activeFileIndex = computed(() => {
  //     return files.value.findIndex(file => file.getUuid() === activeFile.value?.getUuid())
  // })

  function getFiles(): File[] {
    return files.value as File[];
  }

  function getActiveFile(): File | null {
    return activeFile.value as File;
  }

  function getFileByIndex(index: number): File | null {
    const files = getFiles();
    if (index < 0 || index >= files.length) {
      return null;
    }
    return files[index] as File;
  }

  function setActiveFile(file: File | null) {
    activeFile.value = file;
    if (!file) {
      return;
    }
    saveActiveFile(file);
  }

  function openFile(file: File) {
    setActiveFile(file);
    if (getFiles().some((f) => f.getUuid() === file.getUuid())) {
      return;
    }
    getFiles().push(file);
    saveFiles(getFiles() as File[]);
  }

  function closeFile(file: File) {
    const index = getFiles().findIndex((f) => f.getUuid() === file.getUuid());
    if (index === -1) {
      return;
    }
    getFiles().splice(index, 1);
    saveFiles(getFiles() as File[]);
    if (getActiveFile()?.getUuid() === file.getUuid()) {
      const nextIndex = index === 0 ? 0 : index - 1;
      useEventBus().openFile(getFileByIndex(nextIndex));
    }
  }

  return { files, activeFile, openFile, closeFile };
});
