<script lang="ts">
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import pkg from 'gsap-trial/dist/MorphSVGPlugin';
    const { MorphSVGPlugin } = pkg;
    gsap.registerPlugin(MorphSVGPlugin) 

    import DarkName from '$lib/svgs/DarkName.svelte';
    import LightName from '$lib/svgs/LightName.svelte';
  
    
  const sourcePaths = '#sourcePath1, #sourcePath2, ...';
  const destinationPaths = '#destinationPath1, #destinationPath2, ...';

  // gsap.to(sourcePaths, {
  //   duration: 1,
  //   morphSVG: destinationPaths,
  //   onComplete: function() {
  //     document.getElementById('lightName').style.display = 'none';
  //     document.getElementById('darkName').style.display = 'block';
  //   }
  // });
  </script>


<h1 class="font-June text-7xl">CassidyIsCoding</h1>
<!-- <DarkName />
<LightName /> -->