<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#742284">
	<meta name="theme-color" content="#742284">
	<meta name="msapplication-TileColor" content="#742284">
</svelte:head>

<script>
	import { push } from "svelte-spa-router";

	export let name;

	name = "QR";

	export let clave = "";

	function numero(numi){
		clave = clave + numi;
		if (clave.length == 6) {
			if (clave == "231320") {
				push('/MainCap');
			}else{
				document.getElementById('flotante').style.display = 'block'
				clave = "";
			}
		}
	}

	function numeroback(){
		clave = clave.substring(0, clave.length - 1);
	}

	function ayudaboton(){
	}
	function  Registrate(){
		push('/RegistrerNameCash')
	}

        function cerrar() {
			document.getElementById('flotante').style.display = 'none'
        }
</script>

<div class="divlogin">
		
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="divquestion"><img on:click={ayudaboton} class="imgquestion" alt="question" src="/question.svg" height="36px" width="36px" /></div>
		<div class="divqrpri">
			<div class="divqrsec"></div>
	</div>
	<h4>Recibe pagos por {name}</h4>
	<div class="footer">
			<h3>Ingresa tu clave Yape</h3>
			<div class="clavediv">
				<ul class="ulclave">
					{#if clave.length > 0}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 1}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 2}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 3}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 4}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
					{#if clave.length > 5}<li class="liclaveu"></li>{:else}<li class="liclave"></li>{/if}
				</ul>
			</div>
			<div class="divpadrow1">
				<button on:click={() => numero(4)} class="pad"><p>4</p></button>
				<button on:click={() => numero(7)} class="pad"><p>7</p></button>
				<button on:click={() => numero(5)} class="pad"><p>5</p></button>
			</div>
			<div class="divpadrow2">
				<button on:click={() => numero(0)} class="pad"><p>0</p></button>
				<button on:click={() => numero(8)} class="pad"><p>8</p></button>
				<button on:click={() => numero(6)} class="pad"><p>6</p></button>
			</div>
			<div class="divpadrow2">
				<button on:click={() => numero(1)} class="pad"><p>1</p></button>
				<button on:click={() => numero(2)} class="pad"><p>2</p></button>
				<button on:click={() => numero(3)} class="pad"><p>3</p></button>
			</div>
			<div class="divpadrow2">
				<div class="padinv"></div>
				<button on:click={() => numero(9)} class="pad"><p>9</p></button>
				<button on:click={numeroback} class="padinvback"></button>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<h3 class="h3ol" on:click="{Registrate}">¿Olvidaste tu clave?</h3>
		</div>
		<div class="alertapadre" id="flotante">
			<div class="colortransparente"></div>
			<div class="alertainicial">
				<h3 class="alertletrapri">Clave incorrecta</h3>
				<h3 class="alertletra">Después de 3 intentos incorrectos <br>
				el acceso se bloqueará. En caso no <br>
				recuerdes tu clave, cámbiala.
				</h3>
			<div style="display: flex;">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<h3 class="h3olone" style="margin-left: 15vw; margin-bottom: 4.3vw;" on:click={cerrar}>INTENTAR DE NUEVO</h3>
					<h3 class="h3olone">CAMBIAR CLAVE</h3>	
			</div>
		</div>	
	</div>
</div>
