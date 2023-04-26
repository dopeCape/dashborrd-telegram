<script>
	import { onAuthStateChanged, signOut } from "firebase/auth";
	import Setting from "../Components/Setting.svelte";
	import Users from "../Components/Users.svelte";
	import { auth } from "../firebase";
	import LoginScreen from "../Components/LoginScreen.svelte";
	let userX;

	onAuthStateChanged(auth, (user) => {
		if (user) {
			console.log(user);
			userX = user;
		}
	});
	const handleLogOut = () => {
		signOut(auth);
		userX = null;
	};
</script>

{#if userX != null}
	<div class="grid overflow-hidden grid-cols-10 grid-rows-1 w-screen h-screen">
		<div
			class="flex overflow-hidden flex-col flex-wrap col-span-1 content-center w-full max-w-full h-full bg-sidebarblack"
			id="sidebar"
		>
			<div
				class="relative top-16 justify-self-start text-xl font-bold text-center cursor-pointer text-palewhite"
			>
				Iphone-bot
			</div>
			<button
				class="relative top-3/4 p-2 w-4/5 rounded-sm cursor-pointer text-palewhite bg-gray_i_like hover:"
				on:click={handleLogOut}
			>
				logout</button
			>
		</div>

		<div id="settign" class="col-span-3 bg-palewhite">
			<Setting />
		</div>
		<div class="col-span-6" id="users">
			<Users />
		</div>
	</div>
{:else}
	<LoginScreen />
{/if}
