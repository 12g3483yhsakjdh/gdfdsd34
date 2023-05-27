<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#742284">
	<meta name="theme-color" content="#742284">
	<meta name="msapplication-TileColor" content="#742284">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
</svelte:head>

<script>
    import { push } from "svelte-spa-router";
    import {PriDaNombre1,PriDaMonto1, PriDaPone1, SecDaMonto1} from './stores.js';
    import { onMount } from 'svelte';

    export let nombreya = new String ("");
    export let yapemonto = new Float32Array;

    nombreya = ''

    function subbotonyapearya(){
        PriDaNombre1.set(nombreya);
        PriDaMonto1.set('S/ ' + Intl.NumberFormat('en-US', {
       minimumFractionDigits: 2
     }).format(yapemonto));
        PriDaPone1.set('h3montone');

        SecDaMonto1.set(yapemonto);

        push('/login');
	}

    
    onMount(async () => {
        document.getElementById("inputmonto").focus();
    });
</script>
<div class="divyapearmain">
    <div class="divyapeartop">
    
        <div class="divnombreyapear"><input class="nombreyapear" bind:value={nombreya} placeholder="Escribe tu nombre aquí"></div>
    </div>
    <div class="divyapearmedio">
        <span class="spanmonto">S/</span>
        <input required bind:value="{yapemonto}" maxlength="9"  oninput="this.style.width = ((this.value.length + 1) * 10.5) + 'vw';" type="number" class="inputmonto" id="inputmonto" placeholder="0" />
        <div class="puedesyapear">Introduce el monto </div>
    </div>
    <div class="divyapeardown">
        <button  on:click={subbotonyapearya} class="botonyapearya">Registrarse</button>
    </div>
</div>
