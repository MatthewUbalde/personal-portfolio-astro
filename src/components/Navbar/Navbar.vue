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
  const lastNavToken = props.current.split("/").at(-1);
  if (!lastNavToken) return SITE_NAVIGATION;

  // If there is current nav, then we check for it!
  // We're only checking on the first level's children
  const currentNav = `/personal-portfolio-astro/${lastNavToken}`;
  const navArray = SITE_NAVIGATION.filter(
    (nav) => nav.children || nav.href !== currentNav
  );

  navArray.forEach((nav) => {
    if (nav.children)
      nav.children = nav.children.filter((pn) => pn.href !== currentNav);
  });

  return navArray;
};

const filterQuickNav = () => {
  const lastNavToken = props.current.split("/").at(-1);
  if (!lastNavToken) return SITE_NAVIGATION;

  const navArray = SITE_NAVIGATION.filter(
    (nav) => !nav.href.includes(lastNavToken)
  );

  return navArray;
};

const currentNav = filterNav();
const quickNav = filterQuickNav();
</script>

<template>
  <nav
    :class="{
      'inset-1 sm:inset-4': !hide,
    }"
    class="fixed z-40 top-1 inset-x-1 sm:top-4 sm:inset-x-4 p-1 sm:p-4 bg-cyan-900 rounded-md transition-all overflow-hidden"
  >
    <div class="flex flex-col gap-1 sm:gap-2">
      <!-- Top bar -->
      <div class="flex flex-row gap-1 sm:gap-2">
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
          class="flex-grow bg-cyan-950 p-3 sm:p-2 rounded-md text-start break-all"
        >
          {{ props.current }}
        </button>
      </div>
      <!-- Quick Navigation Links -->
      <div
        :class="{ '!hidden': !hide }"
        class="hidden sm:flex flex-row sm:gap-2 sm:items-center rounded-md border-4 border-cyan-950 overflow-hidden"
      >
        <span class="bg-cyan-950 p-1">Quick Navigation</span>
        <div class="flex flex-col sm:flex-row sm:gap-2 px-1 sm:p-0">
          <a
            class="px-2 bg-cyan-950 rounded-md"
            v-for="nav in quickNav"
            :href="nav.href"
            >{{ nav.label }}</a
          >
        </div>
      </div>
    </div>
    <!-- The navigation links -->
    <div :class="{ hidden: hide }" class="w-full h-full overflow-scroll">
      <div class="mx-auto w-fit p-1 sm:p-2 text-sm sm:text-base">Where to?</div>
      <div class="flex flex-col gap-1">
        <NavbarTab v-for="nav in currentNav" :nav="nav" />
      </div>
    </div>
  </nav>
</template>
