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
  <div>
    <section>
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
    </section>
    <section>
      <!-- DESKTOP VERSION -->
      <div class="desktop mx-6 overflow-x-auto">
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
            <!-- row 1 -->
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Lunas</td>
              <td><button class=""></button></td>
            </tr>
            <!-- row 2 -->
            <tr class="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Lunas</td>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Lunas</td>
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
          <div class="flex mx-5">
            <div class="flex-none font-bold text-gray-400">Nama</div>
            <div class="grow"></div>
            <div class="flex-none font-bold text-gray-400">Whatsapp</div>
          </div>
          <div class="flex">
            <div class="flex-none font-bold">Itadori Yuji</div>
            <div class="grow"></div>
            <div class="flex-none font-bold">082342747922</div>
          </div>
          <div class="flex mx-5 mt-5">
            <div class="flex-none font-bold text-gray-400">Edisi</div>
            <div class="grow"></div>
            <div class="flex-none font-bold mr-3 text-gray-400">Status</div>
          </div>
          <div class="flex">
            <div class="flex-none font-bold">Lathifa Series</div>
            <div class="grow"></div>
            <div class="flex-none font-bold mr-2">Belum Lunas</div>
          </div>
          <div class="mx-auto">
            <button class="bg-primary rounded-xl h-8 w-16">
              <font-awesome-icon
                :icon="['fas', 'bars']"
                style="color: #ffffff"
              />
            </button>
          </div>
          <div class="bg-gray-300 rounded-xl h-1"></div>
          <div class="flex mx-5">
            <div class="flex-none font-bold text-gray-400">Nama</div>
            <div class="grow"></div>
            <div class="flex-none font-bold text-gray-400">Whatsapp</div>
          </div>
          <div class="flex">
            <div class="flex-none font-bold">Itadori Yuji</div>
            <div class="grow"></div>
            <div class="flex-none font-bold">082342747922</div>
          </div>
          <div class="flex mx-5 mt-5">
            <div class="flex-none font-bold text-gray-400">Edisi</div>
            <div class="grow"></div>
            <div class="flex-none font-bold mr-3 text-gray-400">Status</div>
          </div>
          <div class="flex">
            <div class="flex-none font-bold">Lathifa Series</div>
            <div class="grow"></div>
            <div class="flex-none font-bold mr-2">Belum Lunas</div>
          </div>
          <div class="mx-auto">
            <button class="bg-primary rounded-xl h-8 w-16">
              <font-awesome-icon
                :icon="['fas', 'bars']"
                style="color: #ffffff"
              />
            </button>
          </div>
          <div class="bg-gray-300 rounded-xl h-1"></div>
          <div class="flex mx-5">
            <div class="flex-none font-bold text-gray-400">Nama</div>
            <div class="grow"></div>
            <div class="flex-none font-bold text-gray-400">Whatsapp</div>
          </div>
          <div class="flex">
            <div class="flex-none font-bold">Itadori Yuji</div>
            <div class="grow"></div>
            <div class="flex-none font-bold">082342747922</div>
          </div>
          <div class="flex mx-5 mt-5">
            <div class="flex-none font-bold text-gray-400">Edisi</div>
            <div class="grow"></div>
            <div class="flex-none font-bold mr-3 text-gray-400">Status</div>
          </div>
          <div class="flex">
            <div class="flex-none font-bold">Lathifa Series</div>
            <div class="grow"></div>
            <div class="flex-none font-bold mr-2">Belum Lunas</div>
          </div>
          <div class="mx-auto">
            <button class="bg-primary rounded-xl h-8 w-16">
              <font-awesome-icon
                :icon="['fas', 'bars']"
                style="color: #ffffff"
              />
            </button>
          </div>
          <div class="bg-gray-300 rounded-xl h-1"></div>
        </div>
      </div>
    </section>
    <!-- <section>
      <div class="btn-group float-right mt-3 mr-4">
        <button class="btn btn-md">1</button>
        <button class="btn btn-md btn-active">2</button>
        <button class="btn btn-md">3</button>
        <button class="btn btn-md">4</button>
      </div>
    </section> -->
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
