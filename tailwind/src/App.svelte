<script>
  import DataItem from './lib/DataItem.svelte';
  import FrontPage from "./lib/FrontPage.svelte";

  let showDataItem = false;

  function handleButtonClick() {
    showDataItem = true;
  }

</script>

<main>
  {#if !showDataItem}
    <FrontPage on:clickButton={handleButtonClick}/>
  {:else}
    <DataItem/>
  {/if}
</main>