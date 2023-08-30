<script>
    import { getBackgroundColor } from '../utils.js';
    export let player;
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Attacking
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.crossing)};">
            {player.crossing}
        </div>
        <div class="text-center">
            Crossing
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.finishing)};">
            {player.finishing}
        </div>
        <div class="text-center">
            Finishing
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.headingAccuracy)};">
            {player.headingAccuracy}
        </div>
        <div class="text-center">
            Heading Accuracy
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.shortPassing)};">
            {player.shortPassing}
        </div>
        <div class="text-center">
            Short Passing
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.volleys)};">
            {player.volleys}
        </div>
        <div class="text-center">
            Volleys
        </div>
    </div>
</div>

