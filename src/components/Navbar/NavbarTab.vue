<script lang="ts" setup>
import { computed } from "vue";
import type { NavLinkType } from "../../types";

const { nav } = defineProps<{
  nav: NavLinkType;
}>();

const hasChildren = computed(() => nav.children !== undefined);
</script>

<template>
  <!-- Current Nav -->
  <div class="flex flex-col">
    <a
      :href="nav.href"
      :class="{ 'rounded-t-md': hasChildren, 'rounded-md': !hasChildren }"
      class="bg-cyan-950 px-4 py-2 text-xl"
    >
      {{ nav.label }}
      <div class="text-cyan-600 text-sm">{{ nav.href }}</div>
    </a>
    <!-- Nav's Children Container -->
    <div
      v-if="nav.children"
      :class="{ 'rounded-b-md': hasChildren, 'rounded-md': !hasChildren }"
      class="flex flex-col sm:flex-row items-stretch gap-1 p-1 border-cyan-950 border-4"
    >
      <!-- Current Nav Children -->
      <a
        v-for="cNav in nav.children"
        :key="cNav.href"
        :href="`${nav.href}${cNav.href}`"
        class="flex-grow bg-cyan-950 px-4 py-2 text-xl rounded-md"
      >
        {{ cNav.label }}
        <div class="text-cyan-600 text-sm">
          {{ nav.href + cNav.href }}
        </div>
      </a>
    </div>
  </div>
</template>
