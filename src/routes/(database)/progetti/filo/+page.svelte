<script lang="ts" context="module">
	import { create } from '$cms/field';
	import { decodeHexString } from 'effect/Encoding';
	import { string } from 'effect/Equivalence';

	export const props = create('progetti',{titolo: 'Filo, un programma per studiare'
    string; tag:['Information design' , 'UI/UX']
});
</script>
