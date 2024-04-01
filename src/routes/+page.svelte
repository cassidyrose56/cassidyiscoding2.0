<script lang="ts">
    import TitleToggle from '../lib/tiles/title.toggle.svelte'
    import SMTile from '../lib/tiles/sm.svelte'
    import DescTile from '../lib/tiles/desc.svelte'
    import SkillzTile from '../lib/tiles/skillz.svelte'
    import WorkTile from '../lib/tiles/work.svelte'
    import FunTile from '../lib/tiles/fun.svelte'
    import ContactTile from '../lib/tiles/contact.svelte'
    import '../app.css';
</script>

<div class="min-h-screen w-screen grid md:grid-cols-12 grid-cols-1 md:grid-rows-[14] gap-6 p-8">
    <SMTile />
    <TitleToggle />
    <DescTile />
    <WorkTile />
    <SkillzTile />
    <FunTile />
    <ContactTile />
</div>

