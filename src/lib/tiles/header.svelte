<script lang="ts">
    import { gsap } from 'gsap';
    import TextPlugin from 'gsap';
    import { onMount } from 'svelte';

    import ThemeSwitch from '../components/ThemeSwitch.svelte';
    import SMTile from '../tiles/sm.svelte'
    import Name from '../components/Name.svelte'

    gsap.registerPlugin(TextPlugin)

    onMount(() => {
        
    })

</script>

<div class="flex items-center justify-center md:col-span-7 md:row-span-3 bg-transparent rounded-lg p-4">
    <ThemeSwitch />
    <Name />
    <SMTile />
</div>