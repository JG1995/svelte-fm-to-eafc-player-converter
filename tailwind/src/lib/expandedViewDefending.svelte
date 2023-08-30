<script>
    import { getBackgroundColor } from '../utils.js';
    export let player;
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Defending
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.defensiveAwareness)};">
            {player.defensiveAwareness}
        </div>
        <div class="text-center">
            Def. Awareness
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.standingTackle)};">
            {player.standingTackle}
        </div>
        <div class="text-center">
            Standing Tackle
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.slidingTackle)};">
            {player.slidingTackle}
        </div>
        <div class="text-center">
            Sliding Tackle
        </div>
    </div>
</div>
