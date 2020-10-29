<script>
	let src = "./images/jelovnik.svg"
	let jelovnik = true
	let isMobile

	if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  	// true for mobile device
		isMobile = true
	} else {
	// false for not mobile device
		isMobile = false
	}

	const toggleButton = (page) => {
		if (page === "jelovnik") {
			jelovnik = true
			src = "./images/jelovnik.svg"
		} else if (page === "ponude") {
			jelovnik = false
			src = "./images/ponude.svg"
		}
	}
</script>

<main class={isMobile ? "main-mobile" : "main-pc"}>
	<h1>KC PIZZA JELOVNIK</h1>
	<p id="address">Ulica Antuna Nemčića 2, 48000 Koprivnica</p>
	<div class="buttons">
		<button on:click={() => toggleButton("jelovnik")} id={jelovnik ? "button" : "button-deactivated"}>Jelovnik</button>
		<button on:click={() => toggleButton("ponude")} id={!jelovnik ? "button" : "button-deactivated"}>Posebne ponude</button>
	</div>
	<img {src} alt="Slika jelovnika">
</main>

<style>
	.main-mobile {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		align-items: center;
		justify-content: center;
	}

	.main-pc {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		align-items: center;
		justify-content: center;
		zoom: 200%;
	}

	h1 {
		color: #3E2A12;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	#address {
		color:#3E2A12;
		font-size: 1em;
	}

	#button {
		background-color: Transparent;
		background-repeat:no-repeat;
		cursor:pointer;
		overflow: hidden;
		outline:none;
		border-bottom-color: #D6923E;
		color: #D6923E;
		border-bottom-width: 2;
		border-right: none;
		border-top:none;
		border-left: none;
		margin: 3em;
	}

	#button-deactivated {
		background-color: Transparent;
		background-repeat:no-repeat;
		cursor:pointer;
		overflow: hidden;
		outline:none;
		border-bottom-color: #3E2A12;
		border-bottom-width: 2;
		border-right: none;
		border-top:none;
		border-left: none;
		margin: 3em;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>