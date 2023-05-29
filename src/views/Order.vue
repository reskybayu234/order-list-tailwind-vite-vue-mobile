<template>
  <div class="mt-12">
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
  </div>
</template>
