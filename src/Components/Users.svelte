<script lang="ts">
  import { onMount } from "svelte";
  import SingleUser from "./SingleUser.svelte";
  import { instance } from "../axios";
  import { user } from "../Store/configStore";
  let users;

  onMount(async () => {
    try {
      let res = await instance.get("/user");
      users = res.data;
      $user = res.data;
      console.log(users);
    } catch (error) {
      throw error;
    }
  });
  let userss = [
    {
      phone: "7709662879",
      iphones: ["14", "13"],
    },
    {
      phone: "8149848778",
      iphones: ["11", "SE"],
    },
    {
      phone: "9766780607",

      iphones: ["13", "12"],
    },
  ];
</script>

<div class="flex flex-wrap w-full h-full">
  <div
    class="flex justify-between mt-16 ml-16 w-full text-3xl font-extrabold tracking-wide"
  >
    Users

    <input
      class="mr-5 text-xl outline-none w-30%"
      type="search"
      placeholder="User Name."
    />
  </div>
  <div class="mt-5 ml-16 w-full h-full font-bold text-transparent_white">
    {#if users == undefined}
      <div>loading</div>
    {:else}
      {users?.length} Users

      {#each users as user}
        <div class="flex mt-5 w-full">
          <SingleUser {user} />
        </div>
      {/each}
    {/if}
  </div>
</div>
