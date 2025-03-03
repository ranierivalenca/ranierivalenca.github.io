<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { onMounted, ref } from "vue";

// --- variables ---

const isDark = ref(false);

// --- lifecycle hooks ---

onMounted(() => {
  // check if user prefers dark theme
  const isDarkPref = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkPref) {
    isDark.value = true;
    document.querySelector("html")!.classList.add("dark");
  }
});

// --- methods ---

const toggleTheme = () => {
  const html = document.querySelector("html")!;
  if (html.classList.contains("dark")) {
    isDark.value = false;
    html.classList.remove("dark");
  } else {
    isDark.value = true;
    html.classList.add("dark");
  }
};
</script>

<template>
  <header class="flex justify-between border-b border-primary-300 p-2 bg-primary-100 sticky top-0 z-[1]">
    <h1 class="text-lg">ranierivalenca.dev</h1>
    <!-- dark / light theme selector -->
    <div
      class="w-10 h-5 rounded-full bg-primary-300 border-primary-500 flex items-center p-0.5 cursor-pointer border"
      @click="toggleTheme()"
    >
      <div
        class="w-4 h-4 rounded-full transform duration-300 p-0 m-0 flex justify-center items-center bg-primary-900 text-xs"
        :class="{
          'translate-x-0': !isDark,
          'translate-x-4.5': isDark,
        }"
      >
        <FontAwesomeIcon
          :icon="isDark ? faMoon : faSun"
          class="text-primary-100"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
h1 {
    font-variant: small-caps;
}
</style>
