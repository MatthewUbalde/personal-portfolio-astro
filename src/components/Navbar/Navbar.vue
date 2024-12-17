<script lang="ts" setup>
import { ref, computed, onMounted } from "vue";
import { SITE_NAVIGATION } from "../../const";
import type { NavLinkParent, NavLink } from "../../const";

import NavbarTab from "./NavbarTab.vue";

const props = defineProps({
  current: {
    type: String,
    required: true,
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
  let navArray: NavLinkParent[] = [...SITE_NAVIGATION];
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
      'inset-y-4': !hide,
    }"
    class="fixed z-40 top-4 inset-x-4 p-4 bg-cyan-900 rounded-md transition-all"
  >
    <button
      @click="toggleHide"
      class="bg-cyan-950 p-2 w-full rounded-md text-start"
    >
      {{ props.current }}
    </button>
    <!-- The navigation links -->
    <div
      :class="{ hidden: hide }"
      class="flex flex-col justify-start items-start"
    >
      <div class="flex flex-col gap-2 w-full h-full overflow-y-auto mt-2">
        <div v-for="nav in currentNav" class="flex flex-col">
          <NavbarTab :nav="nav" />
        </div>
      </div>
    </div>
  </nav>
</template>
