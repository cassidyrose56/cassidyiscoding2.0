<script lang="ts">
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';

    import TitleToggle from '../lib/tiles/header.svelte'
    import DescTile from '../lib/tiles/desc.svelte'
    import SkillzTile from '../lib/tiles/skillz.svelte'
    import WorkTile from '../lib/tiles/work.svelte'
    import ContactTile from '../lib/tiles/contact.svelte'
    import '../app.css';

    var tl = gsap.timeline({ defaults:{opacity:0, ease:"back"}});
    function init() {
        tl.from("#pageContent", {ease:"linear", autoAlpha:0})
            .from("#sm-tile", {y:50}, "-=0.4")
            .from("#desc-tile", {y:50}, "-=0.4")
            .from("#skillz-tile", {y:50}, "-=0.4")
            .from("#work-tile", {y:50}, "-=0.4")
            .from("#contact-tile", {y:50}, "-=0.4")
        }

        onMount(() => {
        init(); //do stuff
    })

</script>
<div class="md:px-[12vw] pb-12">
    <TitleToggle />
    <div id="pageContent" class="invisible min-h-screen grid md:grid-cols-12 grid-cols-1 md:grid-rows-[10] gap-8 p-8">
        <DescTile />
        <WorkTile />
        <SkillzTile />
        <ContactTile />
    </div>
</div>


<style>

</style>

