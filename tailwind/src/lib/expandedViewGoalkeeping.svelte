<script>
    export let player;

    function getBackgroundColor(value) {
        if (value < 50) return '#C92A2A';
        if (value >= 50 && value < 60) return '#D95C0F';
        if (value >= 60 && value < 70) return '#E6B600';
        if (value >= 70 && value < 80) return '#66A80F';
        if (value >= 80) return '#0C8539';
        return 'white';  // Default color
    }

    function setGKDiving(value) {
        return Math.min(99, Math.round(((player.Agi*0.6) + (player.Bra*0.2) + (player.Ref*0.2))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setGKHandling(value) {
        return Math.min(99, Math.round(((player.Han*0.7) + (player.Thr*0.2) + (player.Str*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setGKKicking(value) {
        return Math.min(99, Math.round(((player.Kic*0.7) + (player.Pas*0.2) + (player.Vis*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setGKPositioning(value) {
        return Math.min(99, Math.round(((player.Pos*0.5) + (player.Cmd*0.3) + (player.Dec*0.2))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setGKReflexes(value) {
        return Math.min(99, Math.round(((player.Ref*0.8) + (player.Agi*0.1) + (player.Pos*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Goalkeeper
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setGKDiving())};">
            {setGKDiving()}
        </div>
        <div class="text-center">
            GK Diving
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setGKHandling())};">
            {setGKHandling()}
        </div>
        <div class="text-center">
            GK Handling
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setGKKicking())};">
            {setGKKicking()}
        </div>
        <div class="text-center">
            GK Kicking
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setGKPositioning())};">
            {setGKPositioning()}
        </div>
        <div class="text-center">
            GK Positioning
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setGKReflexes())};">
            {setGKReflexes()}
        </div>
        <div class="text-center">
            GK Reflexes
        </div>
    </div>
</div>