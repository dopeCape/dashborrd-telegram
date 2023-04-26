<script>
  import { onMount } from "svelte";
  import IphoneSelecter from "./IphoneSelecter.svelte";
  import { instance } from "../axios";
  import { iphones } from "../Store/configStore";
  let iphs = $iphones;
  onMount(async () => {
    try {
      let res = await instance.get("/iphone");
      $iphones = res.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<div class="flex flex-col justify-center w-full h-full">
  <div class="mt-7 ml-16 text-3xl font-extrabold tracking-wide">Iphones</div>
  <div class="grid grid-cols-2 w-full h-full grid-row-3">
    {#if $iphones.length !== 0}
      {#each $iphones as iph}
        <IphoneSelecter model={iph[0]} status={iph[1]?.active} />
      {/each}
    {/if}
  </div>
</div>
