<script lang="ts">
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebase";

  let email: string;
  let pass: string;
  const handleLogIn = () => {
    signInWithEmailAndPassword(auth, email, pass).then((user) => {
      console.log(user);
    });
  };
</script>

<div
  class="flex flex-col flex-wrap justify-center content-center w-screen h-screen text-center bg-white"
>
  <div class="mb-[4%] text-4xl font-extrabold">Telegram Bot Dashboard</div>
  <div
    class="w-[25%] h-[35%] bg-gray_i_like flex flex-wrap justify-center content-center flex-col"
  >
    <input
      placeholder="Email"
      class="w-[60%] bg-transparent text-2xl p-3 outline-none mb-5 mt-2"
      bind:value={email}
    />

    <input
      placeholder="Password"
      type="password"
      class="w-[60%] bg-transparent text-2xl p-3 outline-none mb-5"
      bind:value={pass}
    />
    <button
      class="p-2 mb-5 text-2xl font-extrabold text-white bg-black outline-none"
      on:click={handleLogIn}>Login</button
    >
  </div>
</div>
