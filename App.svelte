<script>
	import Router, {location, link} from 'svelte-spa-router';
	import Login from './Login.svelte';
	import MainCap from './MainCap.svelte';
	import CameraLog from './CameraLog.svelte';
	import YapeoCamera from './YapeoCamera.svelte';
	import YapeadoInval from './YapeadoInval.svelte';
	import YapeoDestin from './YapeoDestin.svelte';
	import FinalYapeoS from './FinalYapeoS.svelte';
	import RegistrerNameCash from './RegistrerNameCash.svelte';
	import YapeasteImp from './YapeasteImp.svelte';

	const routes = {
		'/': Login,
		'/MainCap/': MainCap,
		'/CameraLog/': CameraLog,
		'/YapeoDestin/': YapeoDestin,
		'/YapeoCamera/': YapeoCamera,
		'/YapeadoInval/': YapeadoInval,
		'/FinalYapeoS/': FinalYapeoS,
		'/YapeasteImp/': YapeasteImp,
		'/RegistrerNameCash': RegistrerNameCash,

    	'*': Login
	};

</script>

<main>
	<Router {routes}/>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0;
	}
</style>