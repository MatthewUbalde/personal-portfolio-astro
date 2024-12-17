<script lang="ts" setup>
import { ref, computed } from "vue";
import { SITE_NAVIGATION } from "../../const";
import type { NavLinkParent, NavLink } from "../../const";

import NavbarTab from "./NavbarTab.vue";

const props = defineProps({
  current: String,
});

const filterNav = () => {
  const tokens = props.current ? props.current.split("/") : "";

  let navArray: NavLinkParent[] = [...SITE_NAVIGATION];
  let currentNav = tokens.length > 0 ? `/${tokens[tokens.length - 1]}` : "";

  if (currentNav !== null) {
    navArray = navArray.filter(
      (nav) =>
        (nav.children !== undefined && nav.children.length !== 0) ||
        nav.href !== currentNav
    );
  }

  if (currentNav !== null) {
    navArray.forEach((nav) => {
      if (nav.children === undefined) return;
      nav.children = nav.children.filter((pn) => pn.href !== currentNav);
    });
  }

  return navArray;
};

const hide = ref(true);
const toggleHide = () => {
  hide.value = !hide.value;
};
</script>

<template>
  <nav
    v-if="hide"
    class="sticky z-40 top-4 inset-x-0 p-4 m-4 bg-cyan-900 rounded-md"
  >
    <button
      @click="toggleHide"
      class="bg-cyan-950 p-2 rounded-md w-full text-start"
    >
      {{ props.current }}
    </button>
  </nav>
  <nav
    v-if="!hide"
    class="fixed z-40 inset-0 p-4 m-4 flex flex-col justify-start items-start bg-cyan-900 rounded-md"
  >
    <button
      @click="toggleHide"
      class="w-full bg-cyan-950 p-2 rounded-md text-start"
    >
      {{ props.current }}
    </button>
    <div class="mx-auto text-center text-sm">Where to?</div>

    <!-- Contains the navigation links -->
    <div class="flex flex-col gap-2 w-full h-full overflow-y-auto mt-2">
      <!-- Individual navigation links -->
      <div v-for="nav in filterNav()" class="flex flex-col">
        <NavbarTab :nav="nav" />
      </div>
    </div>
    <!-- *end* Contains the navigation links -->
  </nav>
</template>
