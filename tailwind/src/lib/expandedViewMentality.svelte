<script>
    import { getBackgroundColor } from '../utils.js';
    export let player;
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Mentality
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.aggression)};">
            {player.aggression}
        </div>
        <div class="text-center">
            Aggression
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.interceptions)};">
            {player.interceptions}
        </div>
        <div class="text-center">
            Interceptions
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.positioning)};">
            {player.positioning}
        </div>
        <div class="text-center">
            Positioning
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.vision)};">
            {player.vision}
        </div>
        <div class="text-center">
            Vision
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.penalties)};">
            {player.penalties}
        </div>
        <div class="text-center">
            Penalties
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.composure)};">
            {player.composure}
        </div>
        <div class="text-center">
            Composure
        </div>
    </div>
</div>