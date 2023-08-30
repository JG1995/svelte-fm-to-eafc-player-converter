<script>
    import { getBackgroundColor } from '../utils.js';
    export let player;
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Movement
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.acceleration)};">
            {player.acceleration}
        </div>
        <div class="text-center">
            Acceleration
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.sprintSpeed)};">
            {player.sprintSpeed}
        </div>
        <div class="text-center">
            Sprint Speed
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.agility)};">
            {player.agility}
        </div>
        <div class="text-center">
            Agility
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.reactions)};">
            {player.reactions}
        </div>
        <div class="text-center">
            Reactions
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.balance)};">
            {player.balance}
        </div>
        <div class="text-center">
            Balance
        </div>
    </div>
</div>