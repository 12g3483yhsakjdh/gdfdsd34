<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#4a1972">
	<meta name="theme-color" content="#4a1972">
	<meta name="msapplication-TileColor" content="#4a1972">
	<script defer src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.13/lottie.min.js" integrity="sha512-srGxQe2w7s50+5/nNgEVKYtBm15zRylJwdjxYnGEZr3mmHFJKFjA/ImA2OKizVzoIDX8XISMHDI1+az9pnumbQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	<script defer type="text/javascript" src="html2canvas.min.js"></script>
</svelte:head>

<script>
    import { push } from "svelte-spa-router";
    import { PriDaNombre, PriDaNumero, PriDaFecha, PriDaMonto, PriDaPone, SecDaMonto, SecDaFecha, SecDaDes } from './stores.js';

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
       
    }

    function subbotonyapearte(){
        push('/YapeoDestin');
    }

    function botonequis(){
		push('/MainCap');
	}


</script>
<div class="divyapeadomain2"></div>
<div class="divyapeadomain">
    <div class="divyapearde1">
        <button on:click={botonequis} class="botonequisya1"></button>
    </div>
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
            <h3 class="letrasnumero">{$PriDaNumero}</h3>
            <h3 class="letrasfecha1">{$SecDaFecha}</h3>
            {#if $SecDaDes !== ""}
            <div class="divletrasdes"><h3 class="letrasdescri">{$SecDaDes}</h3></div>
            {/if}
        </div>
    </div>
    <div style="height: 7vw;"></div>
    </div>
    <div class="divyapeadoabajo">
        <div class="latbot1" style="width: 30.4vw;">1</div>
        <div class="mediobot1">
            <button on:click={subbotoncompartir} class="botoncompartir"></button>
            <h3 class="textoabajoboton">Compartir</h3>
        </div>
        <div class="mediobot2">
            <button on:click={subbotonyapearte} class="botonyapearte1"></button>
            <h3 class="textoabajoboton">Nuevo Yapeo</h3>
        </div>
        <div class="latbot1">5</div>
    </div>
</div>