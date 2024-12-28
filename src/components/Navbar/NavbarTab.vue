<script lang="ts" setup>
import type { NavLinkType } from "../../types";

const { nav } = defineProps<{
  nav: NavLinkType;
}>();
</script>

<template>
  <!-- Current Nav -->
  <div class="flex flex-col rounded-md overflow-hidden">
    <a :href="nav.href" class="bg-cyan-950 px-4 py-2 text-xl break-words">
      {{ nav.label }}
      <div class="text-cyan-600 text-xs sm:text-sm break-all">
        {{ "..." + nav.href.substring("/personal-portfolio-astro".length) }}
      </div>
    </a>
    <!-- Nav's Children Container -->
    <div
      v-if="nav.children"
      class="flex flex-col sm:flex-row items-stretch gap-1 p-1 border-cyan-950 border-4"
    >
      <!-- Current Nav Children -->
      <a
        v-for="cNav in nav.children"
        :key="cNav.href"
        :href="`${nav.href}${cNav.href}`"
        class="flex-grow bg-cyan-950 px-4 py-2 text-xl rounded-md break-words"
      >
        {{ cNav.label }}
        <div class="text-cyan-600 text-xs sm:text-sm break-all">
          {{ "..." + cNav.href }}
        </div>
      </a>
    </div>
  </div>
</template>
