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

    function setAcceleration() {
        return Math.min(99, Math.round(((player.Acc*0.75) + (player.Agi*0.25))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setSprintSpeed() {
        return Math.min(99, Math.round(((player.Pac*0.80) + (player.Bal*0.2))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setAgility() {
        return Math.min(99, Math.round(((player.Agi*0.80) + (player.Bal*0.2))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setReactions() {
        return Math.min(99, Math.round(((player.Ant*0.4) + (player.Det*0.2) + (player.OtB*0.1) + (player.Pos*0.1) + (player.Com*0.2))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setBalance() {
        return Math.min(99, Math.round(((player.Bal*0.8) + (player.Agi*0.2) + (player.Tec*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Movement
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setAcceleration())};">
            {setAcceleration()}
        </div>
        <div class="text-center">
            Acceleration
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setSprintSpeed())};">
            {setSprintSpeed()}
        </div>
        <div class="text-center">
            Sprint Speed
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setAgility())};">
            {setAgility()}
        </div>
        <div class="text-center">
            Agility
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setReactions())};">
            {setReactions()}
        </div>
        <div class="text-center">
            Reactions
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setBalance())};">
            {setBalance()}
        </div>
        <div class="text-center">
            Balance
        </div>
    </div>
</div>