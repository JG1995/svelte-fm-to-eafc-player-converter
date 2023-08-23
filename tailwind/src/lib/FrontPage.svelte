<script>
    import TailwindCss from './TailwindCSS.svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('clickButton');
    }

    function reloadPage() {
        location.reload();
    }

    // This variable determines how many times the component appears
    let demoCount = 5;

    // Create an array of the desired length
    let items = new Array(demoCount).fill({});
</script>

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

            <button class="w-2/5 h-36 bg-474E68 border-dashed border-4 border-6B728E flex flex-col justify-center items-center cursor-pointer mb-6"
                    on:click={handleClick}>
                <p class="text-2xl font-pt-sans">UPLOAD</p>
                <p class="mt-2 font-pt-sans">Click to open file explorer <br> or drag-and-drop a file</p>
            </button>


            <p class="w-3/5 text-dee0e7/40 text-center font-pt-sans">We recommend only using exports containing 500 players or less. There’s “technically” no limit, but your browser may freeze or crash.</p>
        </div>
    </div>
</main>