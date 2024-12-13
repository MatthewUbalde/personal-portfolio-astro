<script lang="ts" setup>
import { ref, computed } from "vue";
import { SITE_NAVIGATION } from "../const";
import type { NavLinkParent, NavLink } from "../const";

const props = defineProps({
  current: String,
});

const filterNav = () => {
  const navArray: NavLinkParent[] = [...SITE_NAVIGATION];

  const tokens = props.current.split("/");
  let currentNav = null;

  if (tokens.length > 0) {
    currentNav = `/${tokens[tokens.length - 1]}`;
  }

  var filteredNav: NavLinkParent[];
  if (currentNav !== null) {
    filteredNav = navArray.filter(
      (nav) =>
        (nav.children !== undefined && nav.children.length !== 0) ||
        nav.href !== currentNav
    );
  }

  if (currentNav !== null) {
    filteredNav.forEach((nav) => {
      if (nav.children === undefined) return;
      nav.children = nav.children.filter((pn) => pn.href !== currentNav);
    });
  }
  return filteredNav;
};

const hide = ref(true);
const toggleHide = () => {
  hide.value = !hide.value;
};
</script>

<template>
  <nav
    v-if="hide"
    class="sticky z-40 top-0 inset-x-0 p-4 m-4 bg-cyan-900 rounded-md"
  >
    <div class="mx-auto text-center text-sm">Navigation Bar</div>
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
    <div class="mx-auto text-center text-sm">Where to?</div>
    <button
      @click="toggleHide"
      class="w-full bg-cyan-950 p-2 rounded-md text-start"
    >
      {{ props.current }}
    </button>

    <!-- Contains the navigation links -->
    <div class="flex flex-col gap-2 w-full h-full overflow-y-auto mt-2">
      <!-- Individual navigation links -->
      <div v-for="nav in filterNav()" class="flex flex-col">
        <a
          :href="nav.href"
          class="bg-cyan-950 px-4 py-2 text-xl rounded-r-md w-fit"
        >
          {{ nav.label }}
          <span class="text-cyan-600 text-sm">{{ nav.href }}</span>
        </a>
        <!-- nav's children -->
        <div
          v-if="nav.children"
          class="flex flex-col gap-1 p-1 border-cyan-950 border-4 rounded-md rounded-tl-none w-full"
        >
          <a
            v-for="childrenNav in nav.children"
            :key="childrenNav.href"
            :href="`${nav.href}${childrenNav.href}`"
            class="bg-cyan-950 px-4 py-2 rounded-md w-fit"
          >
            {{ childrenNav.label }}
            <span class="text-cyan-600 text-sm">{{
              nav.href + childrenNav.href
            }}</span>
          </a>
        </div>
      </div>
    </div>
    <!-- *end* Contains the navigation links -->
  </nav>
</template>
