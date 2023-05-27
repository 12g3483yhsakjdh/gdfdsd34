<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#4a1972">
	<meta name="theme-color" content="#4a1972">
	<meta name="msapplication-TileColor" content="#4a1972">
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.13/lottie.min.js" integrity="sha512-srGxQe2w7s50+5/nNgEVKYtBm15zRylJwdjxYnGEZr3mmHFJKFjA/ImA2OKizVzoIDX8XISMHDI1+az9pnumbQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script defer type="text/javascript" src="html2canvas.min.js"></script>
</svelte:head>

<script>
    import { push } from "svelte-spa-router";
    import { PriDaNombre, PriDaFecha, PriDaMonto, PriDaPone, SecDaMonto, PriDaNumero, SecDaFecha, SecDaDes, PriDaCodigo } from './stores.js';
    import { onMount } from 'svelte';

    async function shareCanvas() {
        const canvas = await html2canvas(document.getElementById('capture'));
        const dataUrl = canvas.toDataURL('imgage/png');
        const blob = await (await fetch(dataUrl)).blob();
        const filesArray = [
            new File(
                [blob],
                'animation.png',
                {
                    type: blob.type,
                    lastModified: new Date().getTime()
                }
            )
        ];
        const shareData = {
            files: filesArray,
        };
        navigator.share(shareData);
    }
    
    function subbotoncompartir(){
        bodymovin.goToAndStop(54,true);
        shareCanvas();
    }

    function subbotoninicio(){
        push('/MainCap');
    }

    function subbotonyapearte(){
        push('/YapeoDestin');
    }

    onMount(async () => {
        var animation = bodymovin.loadAnimation({
        container: document.getElementById('bm'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets7.lottiefiles.com/packages/lf20_4xt4sirg.json'
        })
    });
</script>
<div class="divyapeadomain1"></div>
<div class="divyapeadomain">
    <div id="capture" class="divdegrado">
    <div class="divyapeadotop">
        <div id ="bm" class="divyapeadotopcell">
        </div>
    </div>
    <div class="divyapeadomedio">
        <!--div class="divyapeadomediotop"></div-->
        <div class="divyapeadomediomedio">
            <h3 class="letrayapeaste">¡Yapeaste!</h3>
            <div class="montodiv">
                <span class="spanmontoya">S/</span>
                <span class="inputmontoya">{$SecDaMonto}</span>
            </div>
            <h3 class="letrasnombre1">{$PriDaNombre}</h3>
            <h3 class="letrasfecha1">{$SecDaFecha}</h3>
            <h3 class="letrasnumero">N° de celular: <spam style="color: #000;">{$PriDaNumero}</spam></h3>
            <h3 class="letrasnumero">Destino: <spam style="color: #000;">Yape</spam></h3>
            <h3 class="letrasoperación">N° de operación: <spam style="color: #000;">{$PriDaCodigo}</spam></h3>
            {#if $SecDaDes !== ""}
            <h3 class="letrasdescri">{$SecDaDes}</h3>
            {/if}
            <div class="divletrasdes"></div>
        </div>
    </div>
    <div style="height: 7vw;"></div>
    <div class="divyapeadomediodown">
        <div class="divrenueva">
            <div class="fatherrenueva">
                <h3 class="renuevaletra">¡Renueva tu Yape!</h3>
                <p class="renuevadescripcion">Podrás acceder a nuevas <br> funcionalidades</p>
                <h3 class="conoceletra">Conoce más
                    <img class="logo-flecha" src="flecha-yape.svg" alt="sj">
                </h3>
            </div>
            <div class="renuevaimagen"></div>
        </div>
    </div>
    </div>
    <div class="divyapeadoabajo">
        <div class="mediobot">
            <button on:click={subbotoncompartir} class="botoncompartir"></button>
            <h3 class="textoabajoboton">Compartir</h3>
        </div>
        <div class="mediobot">
            <button on:click={subbotoninicio} class="botoninicioya"></button>
            <h3 class="textoabajoboton">Ir a inicio</h3>
        </div>
        <div class="mediobot">
            <button  class="botonyapearte"></button>
            <h3 class="textoabajoboton">Mis promos</h3>
        </div>
    </div>
</div>
