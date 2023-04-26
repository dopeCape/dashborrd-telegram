<script>
  import { config } from "../Store/configStore";

  let isOpen = false;
  let current_duration = 5;
  let conf = $config;

  const handleOptions = () => {
    isOpen = !isOpen;
  };
</script>

<div
  class="flex flex-col flex-wrap justify-center content-center w-full h-full"
>
  <div class="text-xl text-transparent_white">Duration to fetch new price</div>
  <div class="inline-block relative mt-5 ml-16 w-1/2 text-left">
    <div>
      <button
        type="button"
        class="inline-flex gap-x-1.5 justify-center py-2 px-3 w-full text-sm font-semibold text-gray-900 bg-white rounded-md ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-gray-50"
        id="menu-button"
        aria-expanded="true"
        on:click={handleOptions}
        aria-haspopup="true"
      >
        {current_duration} Mins
        <svg
          class="-mr-1 w-5 h-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"

      To: "transform opacity-0 scale-95"

  -->
    {#if isOpen}
      <div
        class="absolute left-1 z-10 mt-2 w-56 bg-white rounded-md divide-y divide-gray-100 ring-1 ring-black ring-opacity-5 shadow-lg origin-top-left focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none">
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <div
            class="block py-2 px-4 text-sm text-gray-700 cursor-pointer hover:text-white hover:bg-transparent_white"
            role="menuitem"
            tabindex="-1"
            id="menu-item-0"
          >
            10 Mins
          </div>
          <div
            class="block py-2 px-4 text-sm text-gray-700 cursor-pointer hover:text-white hover:bg-transparent_white"
            role="menuitem"
            tabindex="-1"
            id="menu-item-1"
          >
            30 Mins
          </div>
        </div>
      </div>
    {/if}
  </div>
</div>
