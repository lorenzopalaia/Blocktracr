<template>
  <div class="navbar">
    <div class="navbar-start">
      <router-link to="/" class="text-4xl text-white uppercase">Blocktracr</router-link>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <router-link
          :to="route.path"
          class="text-2xl"
          v-for="route in routes"
          :key="route.path"
        >
          <li
            class="mx-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-secondary"
          >
            {{ route.name }}
          </li>
        </router-link>
      </ul>
    </div>
    <div class="navbar-end">
      <div class="dropdown">
        <div tabindex="0" role="button" class="lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
        >
          <router-link
            :to="route.path"
            class="text-2xl"
            v-for="route in routes"
            :key="route.path"
          >
            <li
              class="mx-4 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primary to-secondary"
            >
              {{ route.name }}
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Market",
          path: "/market",
        },
      ],
    };
  },
};
</script>

<style></style>
