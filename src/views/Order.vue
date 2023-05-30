<script setup>
import { ref } from "vue";
import { useOrderStore } from "../store/order.js";

// export default {
//   setup() {
//     const orderStore = useOrderStore();

//     return { orderStore };
//   },
// };
</script>

<template>
  <!-- <div class="mt-12">
    <div class="grid mx-5 grid-cols-7">
      <select
        id="small"
        class="col-span-3 px-3 block w-full bg-gray-200 border text-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Filter Status</option>
        <option value="US">Lunas</option>
        <option value="CA">Belum Lunas</option>
        <option value="FR">Cancel</option>
      </select>

      <div class="bg-gray-200 justify-center rounded-xl ml-10 w-8">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-250 -250 1000 1000">
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
          />
        </svg>
      </div>
      <button class="col-span-3 text-white bg-[#002D74] rounded-xl ml-8 w-26">
        Add Order
      </button>
    </div>
  </div> -->
  <div class="flex w-full px-6 my-8 justify-between">
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
      <div class="h-[28px] p-2 rounded-2xl flex bg-primary items-center mr-4">
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
          class="text-white bg-primary text-xs rounded-xl h-[28px] flex items-center justify-center w-full px-2 uppercase font-bold"
        >
          Add Order
        </button>
      </div>
    </div>
  </div>
</template>
