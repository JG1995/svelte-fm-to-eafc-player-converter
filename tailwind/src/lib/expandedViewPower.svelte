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
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Power
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.shotPower)};">
            {player.shotPower}
        </div>
        <div class="text-center">
            Shot Power
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.jumping)};">
            {player.jumping}
        </div>
        <div class="text-center">
            Jumping
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.stamina)};">
            {player.stamina}
        </div>
        <div class="text-center">
            Stamina
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.strength)};">
            {player.strength}
        </div>
        <div class="text-center">
            Strength
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(player.longShots)};">
            {player.longShots}
        </div>
        <div class="text-center">
            Long Shots
        </div>
    </div>
</div>