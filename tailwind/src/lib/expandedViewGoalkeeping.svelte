<script>
    import { getBackgroundColor } from '../utils.js';
    export let player;
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Goalkeeper
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.GKDiving)};">
            {player.GKDiving}
        </div>
        <div class="text-center">
            GK Diving
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.GKHandling)};">
            {player.GKHandling}
        </div>
        <div class="text-center">
            GK Handling
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.GKKicking)};">
            {player.GKKicking}
        </div>
        <div class="text-center">
            GK Kicking
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.GKPositioning)};">
            {player.GKPositioning}
        </div>
        <div class="text-center">
            GK Positioning
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.GKReflexes)};">
            {player.GKReflexes}
        </div>
        <div class="text-center">
            GK Reflexes
        </div>
    </div>
</div>