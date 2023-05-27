<svelte:head>
    <meta name="Apple-mobile-web-app-status-bar-style" content="#742284">
	<meta name="theme-color" content="#742284">
	<meta name="msapplication-TileColor" content="#742284">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
</svelte:head>

<script>
    import { push } from "svelte-spa-router";
    import { PriDaNombre, PriDaFecha, PriDaNumero, PriDaMonto, PriDaPone, SecDaMonto, SecDaFecha, SecDaDes, PriDaCodigo } from './stores.js';
    import { onMount } from 'svelte';
  import { get_all_dirty_from_scope } from "svelte/internal";

    export let nombreya = new String ("");
    export let yapemonto = new Float32Array;
    export let numero = new String
    export let yapedescri = "";
    export let inputdisabled = "disabled";

    nombreya = ''

    function botonatras(){
		push('/MainCap');
	}

    function botonequis(){
		push('/MainCap');
	}

    function subbotonyapearya(){
        PriDaNombre.set(nombreya);
        PriDaNumero.set('*** *** ' + numero);

        // Creamos array con los meses del año
        const meses = ['Ene.', 'Feb.', 'Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Oct.', 'Nov.', 'Dic.'];
        // Creamos el objeto fecha instanciándolo con la clase Date
        const fecha = new Date();
        // Construimos el formato de salida
        let day = '0';
        if (fecha.getDay() < 9){
            day = '0'
        }else{
            day = ''
        }
        let fechas = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' + fecha.getFullYear() + ' - ';
        
        

        let minutos = "0";

        if (fecha.getMinutes() < 10){
            minutos = '0' + fecha.getMinutes();
        }else{
            minutos = fecha.getMinutes();
        }
        let horas = "0"
        if (fecha.getHours() < 10){
            horas = '0';
        }else if(fecha.getHours() == 13){
            horas = '0';
        }else if(fecha.getHours() == 14){
            horas = '0';
        }else if(fecha.getHours() == 15){
            horas = '0';
        }else if(fecha.getHours() == 16){
            horas = '0';
        }else if(fecha.getHours() == 17){
            horas = '0';
        }else if(fecha.getHours() == 18){
            horas = '0';
        }else if(fecha.getHours() == 19){
            horas = '0';
        }else if(fecha.getHours() == 20){
            horas = '0';
        }else if(fecha.getHours() == 21){
            horas = '0';
        }
        else{
            horas = ''
        }

        if (fecha.getHours() > 12){
            fechas = fechas + horas + (fecha.getHours()-12) + ':' + minutos + ' pm';
        }else if(fecha.getHours() == 0){
            fechas = fechas + '12' + ':' + minutos + ' am';
        }else if(fecha.getHours() == 12){
            fechas = fechas + '12' + ':' + minutos + ' pm';
        }else{
            fechas = fechas + horas + fecha.getHours() + ':' + minutos + ' am';
        }

    // Fechas1 para principal
        let fechas1 = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' + fecha.getFullYear() + ' - ';
        if (fecha.getDate() == fecha.getDate()){
            fechas1 = 'Hoy '
        }else if(fecha.getDate() == ((fecha.getDate()) - 1)){
            fechas1 = 'Ayer ';
        }else{
            fechas1 = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' + fecha.getFullYear() + ' - ';
        }
        let minutos1 = "0";

        if (fecha.getMinutes() < 10){
            minutos1 = '0' + fecha.getMinutes();
        }else{
            minutos1 = fecha.getMinutes();
        }
        if (fecha.getHours() > 12){
            fechas1 = fechas1 + (fecha.getHours()-12) + ':' + minutos1 + ' pm';
        }else if(fecha.getHours() == 0){
            fechas1 = fechas1 + '12' + ':' + minutos1 + ' am';
        }else if(fecha.getHours() == 12){
            fechas1 = fechas1 + '12' + ':' + minutos1 + ' pm';
        }else{
            fechas1 = fechas1 + fecha.getHours() + ':' + minutos1 + ' am';
        }


        SecDaFecha.set(fechas);

        if (yapedescri != ""){
            fechas = fechas + ' - ' + yapedescri;
        }

        if (yapedescri != ""){
            fechas1 = fechas1 + ' - ' + yapedescri;
        }
        PriDaCodigo.set('0' + Math.floor(Math.random() * 1999999 + 1000000));
        PriDaFecha.set(fechas1);
        PriDaMonto.set('- S/ ' + new Intl.NumberFormat('en-US', {
       minimumFractionDigits: 2
     }).format(yapemonto));
        PriDaPone.set('h3montone');

        SecDaMonto.set(yapemonto);
        SecDaDes.set(yapedescri);

        push('/FinalYapeoS');
	}

    function oninputyapear(){
        if (yapemonto > 0){
            inputdisabled="";
        }else{
            inputdisabled="disabled"
        }
    }

    onMount(async () => {
        document.getElementById("inputmonto").focus();
    });
</script>
<div class="divyapearmain">
    <div class="divyapeartop">
        <div class="divyapeariz">
            <button on:click={botonatras} class="botonatrasya"></button>
        </div>
        <div class="divyapearme">
            <h3>Yapear a</h3>
        </div>
        <div class="divyapearde">
            <button on:click={botonequis} class="botonequisya"></button>
        </div>
        <div class="divnombreyapear"><input class="nombreyapear" placeholder="Inserte el nombre" bind:value={nombreya}></div>
    </div>
    <div class="divnombreyapear1"><input type="text" maxlength="3"  class="nombreyapear1" placeholder="Inserte el número" bind:value={numero}></div>
    <div class="divyapearmedio1">
        <span class="spanmonto">S/</span>
        <input required bind:value="{yapemonto}" type="number" maxlength="6" on:input="{oninputyapear}" oninput="this.style.width = ((this.value.length + 1) * 10.5) + 'vw';" class="inputmonto" id="inputmonto" placeholder="0" />
        <div class="puedesyapear">Puedes Yapear hasta S/500 diarios</div>
    </div>
    <div class="divyapeardown">
        <input type="text" bind:value="{yapedescri}" class="inputdesc" name="inputdes" placeholder="Agregar mensaje" />
        <button disabled="{inputdisabled}" on:click={subbotonyapearya} class="botonyapearya">Yapear</button>

    </div>
</div>