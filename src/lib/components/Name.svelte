<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import TextPlugin from 'gsap/dist/TextPlugin'

    gsap.registerPlugin(TextPlugin)

    onMount(() => {
      gsap.to("#name", {
        duration: 2,
        text: "CassidyIsCoding",
        ease: "none",
      })
    })

  
  </script>


<h1 id="name" class="font-June text-7xl">Hello there!</h1>
<!-- <DarkName />
<LightName /> -->