<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { SITE_NAVIGATION } from "../../const";
import type { NavLinkType } from "../../types";

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
  const currentNav = tokens.length > 0 ? `/${tokens[tokens.length - 1]}` : "";
  if (currentNav === null) return SITE_NAVIGATION;

  // If there is current nav, then we check for it!
  // We're only checking on the first level's children
  let navArray: NavLinkType[] = [...SITE_NAVIGATION];
  navArray = navArray.filter(
    (nav) =>
      (nav.children !== undefined && nav.children.length !== 0) ||
      nav.href !== currentNav
  );

  navArray.forEach((nav) => {
    if (nav.children === undefined) return;
    nav.children = nav.children.filter((pn) => pn.href !== currentNav);
  });

  return navArray;
};

const currentNav = computed(() => filterNav());
</script>

<template>
  <!-- Empty div just to pad the top -->
  <div class="mt-32"></div>
  <nav
    :class="{
      'inset-1 sm:inset-4': !hide,
    }"
    class="fixed z-40 top-1 inset-x-1 sm:top-4 sm:inset-x-4 p-1 sm:p-4 bg-cyan-900 rounded-md transition-all"
  >
    <div class="flex flex-row gap-1 sm:gap-2 text-xl sm:text-base">
      <a
        v-if="props.prev"
        href="{{ props.prev }}"
        class="bg-cyan-950 p-3 sm:p-2 rounded-md"
        ><</a
      >
      <div class="flex-grow">
        <button
          @click="toggleHide"
          class="flex-grow bg-cyan-950 p-3 sm:p-2 w-full rounded-md text-start"
        >
          {{ props.current }}
        </button>
        <div
          class="flex flex-row items-end gap-2 mx-2"
          :class="{ hidden: !hide }"
        >
          <span class="text-cyan-600">Quick Navigation</span>
          <a v-for="nav in currentNav" :href="nav.href" class="text-sm">{{
            nav.label
          }}</a>
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
