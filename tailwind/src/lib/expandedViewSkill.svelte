<script>
    import { getBackgroundColor } from '../utils.js';
    export let player;
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Skill
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.dribbling)};">
            {player.dribbling}
        </div>
        <div class="text-center">
            Dribbling
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.curve)};">
            {player.curve}
        </div>
        <div class="text-center">
            Curve
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.freeKickAccuracy)};">
            {player.freeKickAccuracy}
        </div>
        <div class="text-center">
            Free Kick Accuracy
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.longPassing)};">
            {player.longPassing}
        </div>
        <div class="text-center">
            Long Passing
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.ballControl)};">
            {player.ballControl}
        </div>
        <div class="text-center">
            Ball Control
        </div>
    </div>
</div>