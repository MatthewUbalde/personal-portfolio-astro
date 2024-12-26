<script lang="ts" setup>
import { ref } from "vue";
import { SITE_NAVIGATION } from "../../const";

import NavbarTab from "./NavbarTab.vue";

const props = defineProps({
  current: {
    type: String,
    required: true,
  },
  prev: {
    type: String,
    required: false,
  },
});

const hide = ref(true);
const toggleHide = () => {
  hide.value = !hide.value;
};

const filterNav = () => {
  const tokens = props.current.split("/");
  if (tokens.length > 3) return SITE_NAVIGATION;

  const lastNavToken = tokens.at(-1);
  if (!lastNavToken) return SITE_NAVIGATION;

  // If there is current nav, then we check for it!
  // We're only checking on the first level's children
  const currentNav = `/${lastNavToken}`;
  const navArray = SITE_NAVIGATION.filter(
    (nav) => nav.children || nav.href !== currentNav
  );

  navArray.forEach((nav) => {
    if (nav.children)
      nav.children = nav.children.filter((pn) => pn.href !== currentNav);
  });

  return navArray;
};

const currentNav = filterNav();
</script>

<template>
  <nav
    :class="{
      'inset-1 sm:inset-4': !hide,
    }"
    class="fixed z-40 top-1 inset-x-1 sm:top-4 sm:inset-x-4 p-1 sm:p-4 bg-cyan-900 rounded-md transition-all"
  >
    <div class="flex flex-col gap-1 sm:gap-2">
      <!-- Top bar -->
      <div class="flex flex-row gap-1 sm:gap-2 text-xl sm:text-base">
        <!-- Back Button -->
        <a
          v-if="props.prev"
          :href="props.prev"
          class="bg-cyan-950 p-3 sm:p-2 rounded-md"
          ><</a
        >
        <!-- "Search bar" -->
        <button
          @click="toggleHide"
          class="flex-grow bg-cyan-950 p-3 sm:p-2 rounded-md text-start"
        >
          {{ props.current }}
        </button>
      </div>
      <!-- Quick Navigation Links -->
      <div
        :class="{ hidden: !hide }"
        class="hidden sm:flex flex-col sm:flex-row sm:gap-2 sm:items-end text-xl sm:text-base"
      >
        <span class="text-cyan-600">Quick Navigation</span>
        <div class="flex flex-col sm:flex-row sm:gap-2 px-1 sm:p-0">
          <a v-for="nav in currentNav" :href="nav.href">{{ nav.label }}</a>
        </div>
      </div>
    </div>
    <!-- The navigation links -->
    <div :class="{ hidden: hide }" class="w-full h-full">
      <div class="mx-auto w-fit p-1 sm:p-2">Where to?</div>
      <div class="flex flex-col gap-1 overflow-scroll">
        <NavbarTab v-for="nav in currentNav" :nav="nav" />
      </div>
    </div>
  </nav>
</template>
