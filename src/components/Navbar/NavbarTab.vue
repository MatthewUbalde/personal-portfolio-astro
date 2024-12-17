<script lang="ts" setup>
import type { NavLinkParent, NavLink } from "../../const";

const { nav } = defineProps<{
  nav: NavLinkParent;
}>();
</script>

<template>
  <a :href="nav.href" class="bg-cyan-950 px-4 py-2 text-xl rounded-r-md w-fit">
    {{ nav.label }}
    <div class="text-cyan-600 text-sm">{{ nav.href }}</div>
  </a>
  <!-- nav's children -->
  <div
    v-if="nav.children"
    class="flex flex-row gap-1 p-1 border-cyan-950 border-4 rounded-md rounded-tl-none w-full"
  >
    <a
      v-for="cNav in nav.children"
      :key="cNav.href"
      :href="`${nav.href}${cNav.href}`"
      class="bg-cyan-950 px-4 py-2 text-xl rounded-md w-fit"
    >
      {{ cNav.label }}
      <div class="text-cyan-600 text-sm">
        {{ nav.href + cNav.href }}
      </div>
    </a>
  </div>
</template>
