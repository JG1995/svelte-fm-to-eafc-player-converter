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

    function setShotPower() {
        return Math.min(99, Math.round(((player.Str*0.5) + (player.Lon*0.3) + (player.Fin*0.2))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setJumping() {
        return Math.min(99, Math.round(((player.Hea*0.6) + (player.Jum*0.4))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setStamina() {
        return Math.min(99, Math.round(((player.Sta*0.5) + (player.Wor*0.25) + (player.Nat*0.25))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setStrength() {
        return Math.min(99, Math.round(((player.Str*0.9) + (player.Jum*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setLongShots() {
        return Math.min(99, Math.round(((player.Lon*0.6) + (player.Fin*0.25) + (player.Tec*0.15))*5.5) + Math.floor(Math.random() * 3) - 1);
    }
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Power
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setShotPower())};">
            {setShotPower()}
        </div>
        <div class="text-center">
            Shot Power
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setJumping())};">
            {setJumping()}
        </div>
        <div class="text-center">
            Jumping
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setStamina())};">
            {setStamina()}
        </div>
        <div class="text-center">
            Stamina
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setStrength())};">
            {setStrength()}
        </div>
        <div class="text-center">
            Strength
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setLongShots())};">
            {setLongShots()}
        </div>
        <div class="text-center">
            Long Shots
        </div>
    </div>
</div>