<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-primary">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="bg-white btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2 text-white">Oruduru Listo</div>
        <div class="flex-none hidden lg:block">
          <ul class="menu text-white menu-horizontal">
            <!-- Navbar menu content here -->
            <li><a>Dashboard </a></li>
            <li><a>Customer Detail</a></li>
            <li><a>Order Detail</a></li>
            <li><a>Setting</a></li>
          </ul>
        </div>
      </div>

      <!-- Page content here -->
      <router-view />
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100">
        <!-- Sidebar content here -->
        <li>
          <div class="flex">
            <div class="flex-none">
              <font-awesome-icon :icon="['fas', 'table-columns']" />
            </div>
            <div class="flex-1">
              <a>Dashboard</a>
            </div>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex-none">
              <font-awesome-icon :icon="['fas', 'user']" />
            </div>
            <div class="flex-1">
              <a>Customer Detail</a>
            </div>
          </div>
        </li>

        <li>
          <div class="flex">
            <div class="flex-none">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </div>
            <div class="flex-1">
              <a>Order Detail</a>
            </div>
          </div>
        </li>
        <li>
          <div class="flex">
            <div class="flex-none">
              <font-awesome-icon :icon="['fas', 'gear']" />
            </div>
            <div class="flex-1"><a>Setting</a></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
