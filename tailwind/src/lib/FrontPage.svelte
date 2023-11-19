<script>
    import TailwindCss from './TailwindCSS.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function handleClickDemo() {
        dispatch('clickButton');
    }

    let files;

    function handleClick() {
        document.getElementById('fileInput').click();
    }

    async function handleChange() {
        if (files && files.length > 0) {
            const file = files[0];
            const contents = await readFileAsString(file);
            dispatch('fileRead', contents);
        }
    }

    function readFileAsString(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = event => resolve(event.target.result);
            reader.onerror = error => reject(error);
            reader.readAsText(file);
        });
    }

</script>

<style>
    #fileInput {
        display: none;
    }
</style>

<TailwindCss/>

<main>
    <div class="container mx-auto bg-404258 text-dee0e7 flex flex-col justify-center items-center">
        <div class="w-3/4 text-center flex flex-col justify-center items-center">
            <h1 class="text-nunito font-black text-5xl mb-4">FM to EAFC Player Converter</h1>

            <ul class="list-decimal list-inside w-2/3 mb-6 font-pt-sans text-xs">
                <li class="mb-2"><a href="https://www.mediafire.com/file/q47rtsnam2u3yql/FMtoEAFCPlayerConverterViews.zip/file">Download and extract this .ZIP file containing the FM Views you will need. Place them in "\Documents\Sports Interactive\Football Manager 2024\views".</a></li>
                    <li class="mb-2"><strong>If exporting a Squad:</strong> Go to your squad-panel, click "View -> Custom -> Import View", and select "Stat Conversion View - Squad - No IGE" from the list.</li>
                    <li class="mb-2"><strong>If exporting a Shortlist:</strong> Go to your shortlist-panel, click "View -> Custom -> Import View", and select "Stat Conversion View - Shortlist - No IGE" from the list.</li>
                <li class="mb-2">Select the newly imported view from the drop-down menu.</li>
                <li class="mb-2">Select all the players you want to export - Or CTRL+A for all of them!</li>
                <li class="mb-2">Press CTRL+P, and select "Text File". Save it some place you'll remember.</li>
                <li class="mb-2">Click the "Upload" button below, and find the file you saved! The website will handle the rest!</li>
            </ul>

            <input type="file" bind:files accept=".rtf" id="fileInput" on:change={handleChange} />
            <button class="w-2/5 h-36 bg-474E68 border-dashed border-4 border-6B728E flex flex-col justify-center items-center cursor-pointer mb-6"
                    on:click={handleClick}>
                <p class="text-2xl font-pt-sans">UPLOAD</p>
                <p class="mt-2 font-pt-sans">Click to open file explorer <br> and choose a .RTF file</p>
            </button>

            <div class="w-3/5 text-dee0e7/40 text-center font-pt-sans">We recommend only using exports containing 500 players or less. There’s “technically” no limit, but your browser may freeze or crash.</div>
        </div>
    </div>
</main>