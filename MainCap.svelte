<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#742284">
	<meta name="theme-color" content="#742284">
	<meta name="msapplication-TileColor" content="#742284">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
	<script defer type="text/javascript" src="instascan.min.js"></script>
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.13/lottie.min.js" integrity="sha512-srGxQe2w7s50+5/nNgEVKYtBm15zRylJwdjxYnGEZr3mmHFJKFjA/ImA2OKizVzoIDX8XISMHDI1+az9pnumbQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script defer type="text/javascript" src="html2canvas.min.js"></script>
</svelte:head>

<script>
    import {PriDaNombre1,PriDaMonto1, PriDaPone1,PriDaNumero, SecDaMonto1} from './stores.js';
	import { push } from "svelte-spa-router";
	import { PriDaNombre, PriDaFecha, PriDaMonto, PriDaPone } from './stores.js';
	
    let items = [
		{ nombre: "Paola Gimenez Flores", fecha: 'Ayer 3:31 pm', monto: '- S/ 133.00', pone: 'h3montone'},
		{ nombre: "902 514 100", fecha: 'Ayer 12:51 pm - Pantalón', monto: 'S/ 80.00', pone: 'h3monto'},
		{ nombre: "Luis Angel Castillo Reinoso", fecha: 'Ayer 9:06 am', monto: '- S/ 75.00', pone: 'h3montone'},
		{ nombre: "Valeria Polo Campo", fecha: '11 May. 2023 - 10:38 pm', monto: 'S/ 190.00', pone: 'h3monto'},
		{ nombre: "Farmacia ISIS S.a.c.", fecha: '11 May. 2023 - 8:28 pm - 2 Pizza', monto: '- S/ 42.00', pone: 'h3montone'},
		{ nombre: "964 346 107", fecha: '10 May. 2023 - 4:34 pm - Whisky', monto: '- S/ 52.80', pone: 'h3montone'},
		{ nombre: "Edi Neyra Camizan", fecha: '10 May. 2023 - 2:23 pm - Recibo', monto: '- S/ 105.00', pone: 'h3montone'},
		{ nombre: "Vanesa Quisca Cansaya", fecha: '10 May. 2023 - 12:46 pm', monto: 'S/ 150.00', pone: 'h3monto'},
		{ nombre: "Jhonathan David Luzon Anazco", fecha: '09 May. 2023 - 12:40 pm', monto: 'S/ 60.00', pone: 'h3monto'},
		{ nombre: "Jose Luis Quispe Flores Carpio", fecha: '08 May. 2023 - 8:34 am - Pago', monto: 'S/ 3.00', pone: 'h3monto'},

	];

	function iraqr(){
		push('/CameraLog');
	}
	function yapear1(){
		push('/YapeoDestin');
	}
	function Yapeado(){
		push('/YapeasteImp');
	}
	function Ocultar(){
		document.getElementById('mostrarsaldo').style.display = 'inline-flex'
		document.getElementById('ocultarsaldo').style.display = 'none'
	}
	function Mostrar(){
		document.getElementById('ocultarsaldo').style.display = 'inline-flex'
		document.getElementById('mostrarsaldo').style.display = 'none'
	}
</script>

<div class="divprincipal">
	<div class="divbienvenida">
		<h3 class="h3bien">Hola, {$PriDaNombre1}</h3>
		<img class="imgayud" src="ayuda.svg" alt="hola"/>
		<img class="imgcamp" src="campana.svg" alt="divbienvenida"/>
		<input type="text" class="h3bien1">
	
	</div>
	<div class="divsaldo">
		<div class="divsaldobrother">
			<button class="botonsaldobrother"><div class="divdonariconoredes"/>
				<div class="divdonarnombrepri">
					<div class="divdonarnombre">
						<h3 class="h3donarnombre">Yapea tus servicios</h3>
						<h3 class="h3donarlema">Hazlo aquí</h3>
					</div>
				</div>
			</button>
			<button class="botonsaldobrother"><div class="divdonariconocompras"/>
				<div class="divdonarnombrepri">
					<div class="divdonarnombre">
						<h3 class="h3donarnombre">Compra en KFC</h3>
						<h3 class="h3donarlema">Conoce más aquí</h3>
					</div>
				</div>
			</button>
			<button class="botonsaldobrother"><div class="divdonariconoplus"/>
				<div class="divdonarnombrepri">
					<div class="divdonarnombre">
						<h3 class="h3donarnombre">Paga online con Yape</h3>
						<h3 class="h3donarlema">Conoce más aquí</h3>
					</div>
				</div>
			</button>
			<button class="botonsaldobrother"><div class="divdonariconolast"/>
				<div class="divdonarnombrepri">
					<div class="divdonarnombre">
						<h3 class="h3donarnombre">Recarga tu cel</h3>
						<h3 class="h3donarlema">Ingresa aquí</h3>
					</div>
				</div>
			</button>
			<button class="botonsaldo"><div class="divdonariconochat"/>
				<div class="divdonarnombrepri">
					<div class="divdonarnombre">
						<h3 class="h3donarnombre">Emergencia Ciclón Yaku</h3>
						<h3 class="h3donarlema">Kits ayuda humanitaria</h3>
					</div>
				</div>
			</button>
			<!-- <button class="botonsaldobrother"><div class="divdonaricono"/>
				<div class="divdonarnombrepri">
					<div class="divdonarnombre">
						<h3 class="h3donarnombre">Enseña Perú</h3>
						<h3 class="h3donarlema">Niñas que aprenden</h3>
					</div>
				</div>
			</button> -->
		</div>
		<div style="display: flex; justify-content: center;">
			<span class="circulos" style="background-color: #fff;"></span>
			<span class="circulos"></span>
			<span class="circulos"></span>
			<span class="circulos"></span>
			<span class="circulos"></span>
		</div>
	</div>

	<div class="divdonar">
		<div >
			<button class="botonsaldo1" id="ocultarsaldo" on:click={Ocultar} ><img class="imagencamp" src="ojo.svg" alt="botonsaldo"/>Mostrar Saldo
			</button>
			<button class="botonsaldo2" id="mostrarsaldo" on:click={Mostrar}><div class="imgojo1" src="eyeclose.svg" />Ocultar Saldo
				<h3 class="h3donarnombre1">{$PriDaMonto1}</h3>
			</button>
		</div>
	</div>
	<div class="divmovi">
		<div class="divulti">
			<h3 class="h3ulti">Últimos Movimientos</h3>
		</div>
		<div class="divvertodo">
			<h3 class="h3vertodo">Ver todos</h3>
		</div>
	</div>
	<div class="divprilista">
		{#if $PriDaNombre !== ""}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="divitem" on:click="{Yapeado}">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">{$PriDaNombre}</h3>
					<h3 class="h3fecha">{$PriDaFecha}</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="{$PriDaPone}">{$PriDaMonto}</h3>
			</div>
		</div>
		{/if}
		{#each items as item}
		<div class="divitem">
			<div class="divdes">
				<div class="divdes1">
					<h3 class="h3nombre">{item.nombre}</h3>
					<h3 class="h3fecha">{item.fecha}</h3>
				</div>
			</div>
			<div class="divmonto">
				<h3 class="{item.pone}">{item.monto}</h3>
			</div>
		</div>
		{/each}
	</div>
	<div class="divprifooter">
		<div class="divesca">
			<button on:click={iraqr} class="botonesca"><img class="imgqr" src="qr.svg" alt="botonescanear"/>Escanear QR</button>
		</div>
		<div class="divyapear">
			<button on:click={yapear1} class="botonyapear"><img class="imgflecha" src="flecha.svg" alt="botonyapear"/>Yapear</button>
		</div>
	</div>
</div>