<script lang="ts">
  import { iphones } from "../Store/configStore";
  import { instance } from "../axios";
  export let status;

  export let model: String;
  const handleCheckBox = async () => {
    let res = await instance.post("/iphone/status", {
      data: {
        iphone: model,
      },
    });
    $iphones = res.data;
  };
</script>

<div class="flex flex-col flex-wrap justify-center content-center">
  <div>Iphone {model}</div>
  <div class="mt-5">
    <label class="inline-flex relative items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        class="sr-only peer"
        checked={status}
        on:click={handleCheckBox}
      />
      <div
        class="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 border-red peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[ dark:peer-focus:ring-blue-800''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      />
    </label>
  </div>
</div>
