<script>
  import { config } from "../Store/configStore";
  import { instance } from "../axios";

  const handleLink = () => {
    window.open("https://t.me/test_bot_iphone_bot", "_blank");
  };
  const handleStop = async () => {
    try {
      let res = await instance.get("/config/stop");
      $config = res.data;
      console.log($config);
    } catch (error) {}
  };
</script>

<div
  class="flex flex-col flex-wrap justify-center content-center w-full h-full"
>
  <button class="p-2 mb-5 bg-gray-300" on:click={handleLink}
    ><i class="p-2 fa-solid fa-link" />Iphone Bot</button
  >

  {#if $config.stopped}
    <button class="p-2 bg-green-500" on:click={handleStop}>Start</button>
  {:else}
    <button class="p-2 bg-red-500" on:click={handleStop}>Stop</button>
  {/if}
</div>
