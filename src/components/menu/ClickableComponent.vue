<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const { fileName, icon } = defineProps({
  fileName: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="wrapper">
    <div class="item">
      <FontAwesomeIcon :icon="icon" class="size-3" />
      <span>
        {{ fileName }}.md
      </span>

      <!-- Caution: This MUST be an <a> tag -->
      <slot />
    </div>
  </div>
</template>
