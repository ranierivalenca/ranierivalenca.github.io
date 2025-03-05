<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { onMounted, ref } from "vue";

// --- variables ---

const isPreferenceSaved = sessionStorage.getItem("theme") !== null;
const isDark = ref(sessionStorage.getItem("theme") === "dark");

// --- lifecycle hooks ---

onMounted(() => {
  // check if user prefers dark theme
  const isDarkPref = window.matchMedia("(prefers-color-scheme: dark)").matches || isDark.value;
  const shouldBeDark = (isDarkPref && !isPreferenceSaved) || (isPreferenceSaved && isDark.value);
  if (shouldBeDark) {
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

    sessionStorage.setItem("theme", "light");
  } else {
    isDark.value = true;
    html.classList.add("dark");
    
    sessionStorage.setItem("theme", "dark");
  }
};
</script>

<template>
  <div class="dark-mode-switch" @click="toggleTheme()">
    <div
      class="switch"
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
</template>
