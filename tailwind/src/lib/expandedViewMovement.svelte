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