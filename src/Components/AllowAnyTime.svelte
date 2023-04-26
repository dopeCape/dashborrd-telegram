<script>
  import { onMount } from "svelte";
  import { config } from "../Store/configStore";

  import { instance } from "../axios";
  const handleCheck = async () => {
    try {
      let res = await instance.get("/config/allowusers");
      $config.allowUsersToCheck = !$config.allowUsersToCheck;
    } catch (error) {
      console.log(error);
    }
  };
  let conf = $config;
  onMount(() => {
    console.log(conf);
  });
</script>

<div class="flex flex-col flex-wrap justify-center content-center w-100 h-100">
  <div class="mb-5 text-center text-l text-transparent_white">
    Allow users to Chelck for Price anytime
  </div>

  <div class="pl-28">
    <label class="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        checked={$config.allowUsersToCheck}
        on:click={handleCheck}
      />
      <div
        class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 border-red peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[ dark:peer-focus:ring-blue-800''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      />
    </label>
  </div>
</div>
