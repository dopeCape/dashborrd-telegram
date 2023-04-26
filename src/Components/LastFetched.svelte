<script>
  import { config } from "../Store/configStore";

  let last_fetched = " 5";
  let conf = $config;
</script>

<div class="flex flex-col flex-wrap justify-center w-full h-full text-center">
  <div class="mb-5 text-xl text-transparent_white">Last Price Update</div>
  <div class="text-2xl font-bold">
    {`${last_fetched} `}<span class="text-sm font-light"> Mins ago.</span>
  </div>
</div>
