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

            <ul class="list-decimal list-inside w-1/3 mb-6 font-pt-sans">
                <li class="mb-2">Placeholder Text 1</li>
                <li class="mb-2">Placeholder Text 2</li>
                <li class="mb-2">Placeholder Text 3</li>
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