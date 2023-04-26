<script>
  import { onMount } from "svelte";
  import AllowAnyTime from "./AllowAnyTime.svelte";
  import BotLink from "./BotLink.svelte";
  import Counter from "./Counter.svelte";
  import Iphones from "./Iphones.svelte";
  import LastFetched from "./LastFetched.svelte";
  import NotifyUsers from "./NotifyUsers.svelte";
  import SetUpDateDuration from "./SetUpDateDuration.svelte";
  import { instance } from "../axios";
  import { config, iphones } from "../Store/configStore";
  import AllowUpdatesDay from "./AllowUpdatesDay.svelte";

  onMount(() => {
    instance.get("/config").then((res) => {
      $config = res.data;
    });
    instance.get("/iphone").then((res) => {
      $iphones = res.data;
    });
    console.log($iphones);
  });
</script>

<div class="flex relative flex-col w-full h-full">
  <div class="relative mt-16 ml-16 text-4xl font-extrabold tracking-wide">
    Settings
  </div>
  <div
    id="general-setting"
    class="grid relative grid-cols-2 grid-rows-3 w-full h-1/2"
  >
    <Counter />
    <LastFetched />

    <AllowUpdatesDay />

    <AllowAnyTime />

    <NotifyUsers />

    <BotLink />
  </div>

  <div id="iphone-setting" class="w-full h-full">
    <Iphones />
  </div>
</div>
