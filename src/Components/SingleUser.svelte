<script lang="ts">
  import { instance } from "../axios";

  export let user;
  const blockUser = async () => {
    let res = await instance.post("/user/block", {
      data: {
        userId: user?.userId,
      },
    });
    console.log(res);
    user = res.data;
  };
</script>

<div
  class="flex flex-wrap justify-between w-full align-middle h-[50px] bg-gray_i_like"
>
  <div class="mt-3 ml-4 font-extrabold">
    {user.username}
  </div>

  <div class="grid grid-cols-3 grid-rows-2">
    {#each user.iphones as phone}
      <div class="mr-3 font-bold text-transparent_white">
        Iphone-{phone}
      </div>
    {/each}
  </div>

  <button
    class="mt-1 bg-black w-[100px] h-[80%] text-white mb-1 mr-3"
    on:click={blockUser}>{user.blocked ? "unblock" : "block"}</button
  >
</div>
