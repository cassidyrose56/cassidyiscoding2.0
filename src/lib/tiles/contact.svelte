<script lang="ts">
    import { gsap } from 'gsap';
    import { onMount } from 'svelte';
    // import SplitText from 'gsap-trial';

    // gsap.registerPlugin(SplitText) 

    // onM
    // var split = new SplitText("#contact-title", {type: "chars"});
    // //now animate each character into place from 100px above, fading in:
    // gsap.from(split.chars, {
    //   duration: 1, 
    //   y: 100, 
    //   autoAlpha: 0, 
    //   stagger: 0.05
    // });
  
    let darkMode = false;
  
    const updateGradients = () => {
      if (darkMode) {
        b1 = {
          background: `
            linear-gradient(217deg, rgba(117, 13, 55, 0.8), rgba(255, 153, 102, 0.6) 30%, rgba(117, 13, 55, 0.4) 70.71%),
            linear-gradient(127deg, rgba(255, 153, 102, 0.7), rgba(117, 13, 55, 0.5) 40%, rgba(255, 153, 102, 0.3) 70.71%),
            linear-gradient(336deg, rgba(117, 13, 55, 0.6), rgba(255, 153, 102, 0.4) 20%, rgba(117, 13, 55, 0.2) 70.71%),
            radial-gradient(at 60% 60%, rgba(255, 153, 102, 0.8), rgba(117, 13, 55, 0.6) 30%, rgba(255, 153, 102, 0.4) 70.71%)
          `
        };
  
        b2 = {
          background: `
            linear-gradient(17deg, rgba(255, 153, 102, 0.8), rgba(117, 13, 55, 0.6) 20%, rgba(255, 153, 102, 0.4) 70.71%),
            linear-gradient(200deg, rgba(117, 13, 55, 0.7), rgba(255, 153, 102, 0.5) 50%, rgba(117, 13, 55, 0.3) 70.71%),
            linear-gradient(336deg, rgba(255, 153, 102, 0.6), rgba(117, 13, 55, 0.4) 30%, rgba(255, 153, 102, 0.2) 70.71%),
            radial-gradient(at 40% 40%, rgba(117, 13, 55, 0.8), rgba(255, 153, 102, 0.6) 40%, rgba(117, 13, 55, 0.4) 70.71%)
          `
        };
      } else {
        b1 = {
          background: `
            linear-gradient(217deg, rgba(234, 124, 191, 0.8), rgba(255, 153, 102, 0.6) 30%, rgba(234, 124, 191, 0.4) 70.71%),
            linear-gradient(127deg, rgba(255, 153, 102, 0.7), rgba(234, 124, 191, 0.5) 40%, rgba(255, 153, 102, 0.3) 70.71%),
            linear-gradient(336deg, rgba(234, 124, 191, 0.6), rgba(255, 153, 102, 0.4) 20%, rgba(234, 124, 191, 0.2) 70.71%),
            radial-gradient(at 60% 60%, rgba(255, 153, 102, 0.8), rgba(234, 124, 191, 0.6) 30%, rgba(255, 153, 102, 0.4) 70.71%)
          `
        };
  
        b2 = {
          background: `
            linear-gradient(317deg, rgba(255, 153, 102, 0.8), rgba(234, 124, 191, 0.6) 20%, rgba(255, 153, 102, 0.4) 70.71%),
            linear-gradient(200deg, rgba(234, 124, 191, 0.7), rgba(255, 153, 102, 0.5) 50%, rgba(234, 124, 191, 0.3) 70.71%),
            linear-gradient(336deg, rgba(255, 153, 102, 0.6), rgba(234, 124, 191, 0.4) 30%, rgba(255, 153, 102, 0.2) 70.71%),
            radial-gradient(at 40% 40%, rgba(234, 124, 191, 0.8), rgba(255, 153, 102, 0.6) 40%, rgba(234, 124, 191, 0.4) 70.71%)
          `
        };
      }
    }
  
    let b1 = {};
    let b2 = {};
  
    const checkDarkMode = () => {
      darkMode = document.documentElement.classList.contains('dark');
      updateGradients();
    }
  
    onMount(() => {
      checkDarkMode();
      gsap.fromTo("#contact-tile", b1, {
        ...b2,
        duration: 12,
        ease: "none",
        repeat: -1,
        yoyoEase: "power1.inOut"
      });  
      // Watch for changes in the dark mode class
      const observer = new MutationObserver(checkDarkMode);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  
      return () => {
        observer.disconnect();
      };
    });


</script>

<div id="contact-tile" class="md:col-span-12 h-fit p-6 md:row-span-4 bg-light-pink dark:bg-dark-pink bg-cover bg-no-repeat rounded-lg shadow-md">
    <h2 id="contact-title" class="font-June md:text-5xl text-4xl text-center">Hey there!</h2>
    <p class="font-Hatch font-light text-2xl md:w-7/12 md:leading-loose leading-relaxed text-center md:text-start">I would love to connect! Feel free to <a class="underline text-tertiary-700 dark:text-tertiary-300 font-medium hover:font-semibold" href="mailto:cassidyrose56@gmail.com">send a me a message</a> at cassidyrose56@gmail.com, or shoot me a message on social media. </p>
</div>