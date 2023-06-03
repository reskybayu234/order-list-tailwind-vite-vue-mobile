<script setup>
import { ref, onMounted, computed } from "vue";
import { useOrderStore } from "../store/order.js";

const orderStore = useOrderStore();

let data = {
  page: "1",
  itemsPerPage: "10",
  search: "",
};

orderStore.fetchOrder(data);

const orderData = computed(() => {
  return orderStore.getOrder;
});

console.log("orderData", orderData);
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
        <div class="flex-1 px-2 mx-2 text-white font-Poppins">
          Oruduru Listo
        </div>
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
      <div>
        <section>
          <div class="mobile flex w-full px-6 my-8 justify-between">
            <div class="flex items-center">
              <select
                id="small"
                class="col-span-3 px-3 block w-full bg-gray-200 border text-sm border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Filter</option>
                <option value="US">Lunas</option>
                <option value="CA">Belum Lunas</option>
                <option value="FR">Cancel</option>
              </select>
            </div>
            <div class="flex w-40 items-center">
              <div
                class="h-[28px] p-2 rounded-2xl flex bg-primary items-center mr-4"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.125 4.0625C8.125 4.95898 7.83398 5.78711 7.34375 6.45898L9.81641 8.93359C10.0605 9.17773 10.0605 9.57422 9.81641 9.81836C9.57227 10.0625 9.17578 10.0625 8.93164 9.81836L6.45898 7.34375C5.78711 7.83594 4.95898 8.125 4.0625 8.125C1.81836 8.125 0 6.30664 0 4.0625C0 1.81836 1.81836 0 4.0625 0C6.30664 0 8.125 1.81836 8.125 4.0625ZM4.0625 6.875C4.43184 6.875 4.79757 6.80225 5.1388 6.66091C5.48003 6.51957 5.79007 6.3124 6.05124 6.05124C6.3124 5.79007 6.51957 5.48003 6.66091 5.1388C6.80225 4.79757 6.875 4.43184 6.875 4.0625C6.875 3.69316 6.80225 3.32743 6.66091 2.9862C6.51957 2.64497 6.3124 2.33493 6.05124 2.07376C5.79007 1.8126 5.48003 1.60543 5.1388 1.46409C4.79757 1.32275 4.43184 1.25 4.0625 1.25C3.69316 1.25 3.32743 1.32275 2.9862 1.46409C2.64497 1.60543 2.33493 1.8126 2.07376 2.07376C1.8126 2.33493 1.60543 2.64497 1.46409 2.9862C1.32275 3.32743 1.25 3.69316 1.25 4.0625C1.25 4.43184 1.32275 4.79757 1.46409 5.1388C1.60543 5.48003 1.8126 5.79007 2.07376 6.05124C2.33493 6.3124 2.64497 6.51957 2.9862 6.66091C3.32743 6.80225 3.69316 6.875 4.0625 6.875Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div class="w-72">
                <button
                  class="text-white bg-primary text-xs rounded-xl h-[28px] flex items-center justify-center w-full px-2 uppercase font-bold font-Poppins"
                >
                  Add Order
                </button>
              </div>
            </div>
          </div>
          <div class="desktop flex justify-between px-6 my-8">
            <div class="flex w-64">
              <select
                class="select border-2 bg-gray-200 border-primary w-full max-w-xs"
              >
                <option selected>Filter Status</option>
                <option>Lunas</option>
                <option>Belum Lunas</option>
                <option>Cancel</option>
              </select>
            </div>
            <div class="flex ml-5">
              <form class="w-96">
                <label
                  for="default-search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >Search</label
                >
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                  />
                  <button
                    type="submit"
                    class="text-white absolute right-2.5 bottom-2.5 bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
              <div class="flex">
                <button class="ml-5 bg-primary text-white rounded-xl p-3 h-12">
                  ADD ORDER
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <!-- DESKTOP VERSION -->
          <div class="desktop mx-6">
            <table class="table w-full">
              <!-- head -->
              <thead>
                <tr>
                  <th class="bg-primary text-white">#</th>
                  <th class="bg-primary text-white">Name</th>
                  <th class="bg-primary text-white">Whatsapp</th>
                  <th class="bg-primary text-white">Edition</th>
                  <th class="bg-primary text-white">Status</th>
                  <th class="bg-primary text-white">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in orderData.data.docs" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.phone }}</td>
                  <td>{{ item.namaEdisi }}</td>
                  <td v-if="item.status == 'Lunas'">
                    <span
                      class="inline-flex items-center border border-4 p-1 mr-2 text-sm font-semibold text-gray-800 bg-green-300 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {{ item.status.toUpperCase() }}
                    </span>
                  </td>
                  <td v-else>
                    <span
                      class="inline-flex items-center border border-2 p-1 font-semibold mr-2 text-sm text-gray-800 bg-red-300 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {{ item.status }}
                    </span>
                  </td>
                  <td>
                    <div class="dropdown dropdown-hover">
                      <label tabindex="0" class="bg-primary btn"
                        ><font-awesome-icon
                          :icon="['fas', 'bars']"
                          style="color: #ffffff"
                      /></label>
                      <ul
                        tabindex="0"
                        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <div
                            class="tooltip tooltip-right px-0 mx-0 w-16 py-0 my-0"
                            data-tip="view detail"
                          >
                            <button
                              type="button"
                              class="text-blue-700 hover:text-white w-16 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg border-2 text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                            >
                              <font-awesome-icon :icon="['fas', 'eye']" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div
                            class="tooltip tooltip-right px-0 mx-0 w-16 py-0 my-0"
                            data-tip="edit order"
                          >
                            <button
                              type="button"
                              class="text-purple-700 hover:text-white w-16 border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg border-2 text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                            >
                              <font-awesome-icon :icon="['fas', 'pen']" />
                            </button>
                          </div>
                        </li>
                        <li>
                          <div
                            class="tooltip tooltip-right px-0 mx-0 w-16 py-0 my-0"
                            data-tip="delete order"
                          >
                            <button
                              type="button"
                              class="text-red-700 hover:text-white w-16 border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2 mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                            >
                              <font-awesome-icon :icon="['fas', 'trash-can']" />
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- ================= -->
          <!-- MOBILE VERSION -->
          <div
            class="mobile card border overflow-auto h-98 border-primary border-2 mx-auto w-84 bg-gray-100 shadow-xl"
          >
            <div class="card-body">
              <div v-for="(item, index) in orderData.data.docs" :key="index">
                <div class="flex">
                  <div class="flex-1">
                    <div class="font-bold text-gray-400">Nama</div>
                    <div class="font-bold">
                      {{ item.name }}
                    </div>
                  </div>
                  <div class="flex-1 text-end">
                    <div class="font-bold text-gray-400">Whatsapp</div>

                    <div class="font-bold">{{ item.phone }}</div>
                  </div>
                </div>

                <div class="flex mt-4">
                  <div class="flex-1">
                    <div class="font-bold text-gray-400">Edisi</div>
                    <div class="font-bold">
                      {{ item.namaEdisi }}
                    </div>
                  </div>
                  <div class="flex-1 text-end">
                    <div class="font-bold text-gray-400">Status</div>

                    <div>
                      <div v-if="item.status == 'Lunas'">
                        <span
                          class="inline-flex items-center justify-center w-24 text-xs text-gray-800 bg-green-300 rounded-full dark:bg-gray-700 dark:text-gray-300"
                        >
                          {{ item.status.toUpperCase() }}
                        </span>
                      </div>
                      <div v-else>
                        <span
                          class="inline-flex items-center border w-24 justify-center border-2 text-xs text-gray-800 bg-red-300 rounded-full dark:bg-gray-700 dark:text-gray-300"
                        >
                          {{ item.status }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mx-24 mt-2">
                  <div class="dropdown dropdown-hover mx-2">
                    <label tabindex="0" class="bg-primary btn"
                      ><font-awesome-icon
                        :icon="['fas', 'bars']"
                        style="color: #ffffff; margin: 0px"
                    /></label>
                    <ul
                      class="dropdown-content menu p-2 shadow bg-base-100 rounded-box"
                    >
                      <li>
                        <div
                          class="tooltip tooltip-right px-0 mx-0 w-16 py-0 my-0"
                          data-tip="view detail"
                        >
                          <button
                            type="button"
                            class="text-blue-700 hover:text-white w-16 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg border-2 text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                          >
                            <font-awesome-icon :icon="['fas', 'eye']" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div
                          class="tooltip tooltip-right px-0 mx-0 w-16 py-0 my-0"
                          data-tip="edit order"
                        >
                          <button
                            type="button"
                            class="text-purple-700 hover:text-white w-16 border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg border-2 text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                          >
                            <font-awesome-icon :icon="['fas', 'pen']" />
                          </button>
                        </div>
                      </li>
                      <li>
                        <div
                          class="tooltip tooltip-right px-0 mx-0 w-16 py-0 my-0"
                          data-tip="delete order"
                        >
                          <button
                            type="button"
                            class="text-red-700 hover:text-white w-16 border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2 mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                          >
                            <font-awesome-icon :icon="['fas', 'trash-can']" />
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="bg-gray-300 rounded-xl h-1 my-3"></div>
              </div>
            </div>
          </div>
        </section>

        <footer
          class="footer absolute items-center bottom-0 pb-8 mt-8 p-3 h-10 bg-primary text-neutral-content"
        >
          <div class="items-center grid-flow-col">
            <p>Copyright © 2023 - Byra Application</p>
          </div>
          <div
            class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"
          ></div>
        </footer>
      </div>
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
<style scoped>
@media not all and (max-width: 640px) {
  .mobile {
    display: none;
  }
}

@media not all and (min-width: 640px) {
  .desktop {
    display: none;
  }
}
</style>
