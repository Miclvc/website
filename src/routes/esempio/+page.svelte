<script>
	import { get_collection } from '$cms';
	const progetti = get_collection('progetti');
</script>

{#each progetti as progetto}
	<p>{progetto.titolo}</p>
{/each}
