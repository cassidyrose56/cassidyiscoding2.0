<script lang="ts">
    import { browser } from '$app/environment';
  
    let darkMode = true;
  
    const handleSwitchDarkMode = () => {
      darkMode = !darkMode;
      localStorage.setItem('theme', darkMode ? 'dark' : 'light');
      darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
      window.dispatchEvent(new CustomEvent('dark-mode-toggle', { detail: darkMode }));
    }
  
    if (browser) {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        darkMode = true;
      } else {
        document.documentElement.classList.remove('dark');
        darkMode = false;
      }
    }
  </script>
  
  <div>
    <input checked={darkMode} on:click={handleSwitchDarkMode} type="checkbox" id="theme-toggle" />
    <label for="theme-toggle" />
  </div>