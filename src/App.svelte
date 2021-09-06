<script>
	let random_player;
	const api_key = "AIzaSyCqxgY4My0qkNzDrnt0cdg7UhfDvZSZFow";
	const creed_channel = "UCP-tFf_VMQzhyeKMONL1KvQ";
	let videos = [];

	let last_video_id = "";

	const res = fetch(
		`https://www.googleapis.com/youtube/v3/search?part=id&channelId=${creed_channel}&maxResults=50&order=date&key=${api_key}`
	);
	res.then((response) => {
		response
			.json()
			.then((data) => {
				let items = data.items;
				if (!items) {
					throw new Error("No items found in response from YouTube.");
				}
				videos = items
					.filter((item) => item.id.hasOwnProperty("videoId"))
					.map((item) => item.id.videoId);
			})
			.catch((err) => {
				console.error("Unable to get videos from Youtube API! Defaulting to backup video list.");
				console.error(err);
				console.error(response);
				videos = ["qnkuBUAwfe0", "J16lInLZRms", "9RZXaoaK8NI", "eX3ZSlKdsrM", "iBBqjGd3fHQ", "wu0VRsVCQ48", "oPzhUp8mWgs", "CFLXxqoapPY", "erFoLBcNyKI", "3k3jxi4JhXA"];
			})
			.then(() => newSong());
	});

	function newSong() {
		var player = document.createElement("IFRAME");
		let selection = videos[Math.floor(Math.random() * videos.length)];
		while (selection == last_video_id && last_video_id != "") {
			selection = videos[Math.floor(Math.random() * videos.length)];
		}
		var randomVideoUrl =
			"https://www.youtube.com/embed/" + selection + "?autoplay=1";
		player.setAttribute("id", "music");
		player.setAttribute("src", randomVideoUrl);
		player.style = "position: absolute;top: 0;left: 0;width: 100%;height: 100%;display: block;margin: 0 auto;";

		random_player.innerHTML = "";

		random_player.appendChild(player);
		last_video_id = selection;
	}
</script>

<div id="main" class="description">
	<h1 class="text-success fw-bold">Welcome to Stapp's World!</h1>
	<p class="text-muted">
		Stay a while, listen to the beautiful music of Scott Stapp :)
	</p>
	<div class="youtube_player" bind:this={random_player}>
		<iframe title="Youtube Video" class="youtube_video"></iframe>
	</div>
	<div class="button_container">
		<button type="button" style="margin: 1em" class="btn btn-outline-info" on:click={newSong}>
			Next Song
		</button>
	</div>
	<div class="links">
		<a href="https://github.com/StappsWorld" target="_blank"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				fill="currentColor"
				class="bi bi-github"
				viewBox="0 0 16 16"
			>
				<path
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
				/>
			</svg></a
		>
	</div>
</div>

<style>
	@media only screen and (max-width: 724px) {
		.description {
			margin: auto;
			border-radius: 1em;
			position: absolute;
			left: 50%;
			top: 45%;
			transform: translate(-50%, -55%);
			text-align: center;
			width: 100%;
		}
	}
	
	@media only screen and (min-width: 725px) {
		.description {
			margin: auto;
			left: 50%;
			position: absolute;
			top: 45%;
			transform: translate(-50%, -55%);
			text-align: center;
			width: 50%;
			height: 50%;
		}
	}
	
	.youtube_player {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
	}
</style>
