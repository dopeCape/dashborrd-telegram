<script>
  import { instance } from "../axios";

  const handleNotify = async () => {
    instance.get("/config/notify").then(() => console.log("notifyed"));
  };
</script>

<div
  class="flex flex-wrap justify-center content-center w-full h-full align-middle"
>
  <div class="mb-5 text-lg text-transparent_white">To notify all users</div>
  <button class="p-3 w-[50%]  bg-gray-300" on:click={handleNotify}
    >Notify</button
  >
</div>
