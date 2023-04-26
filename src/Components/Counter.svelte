<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import { user } from "../Store/configStore";

  let count;
  $: {
    count = $user.length;
  }
</script>

<div class="flex flex-col flex-wrap justify-center w-full h-full text-center">
  <div class="mr-10 mb-5 text-xl text-transparent_white">Active Bot Count</div>

  <div class="mr-10 text-2xl font-bold">{count}</div>
</div>
