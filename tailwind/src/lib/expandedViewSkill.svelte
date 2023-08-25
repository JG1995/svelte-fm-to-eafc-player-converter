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

    function setDribbling() {
        return Math.min(99, Math.round(((player.Dri*0.75) + (player.Fla*0.15) + (player.Tec*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setCurve() {
        return Math.min(99, Math.round(((player.Cor*0.20) + (player.Fre*0.25) + (player.Tec*0.25) + (player.Cro*0.3))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setFreeKickAccuracy() {
        return Math.min(99, Math.round(((player.Fre*0.7) + (player.Lon*0.2) + (player.Tec*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setLongPassing() {
        return Math.min(99, Math.round(((player.Pas*0.7) + (player.Vis*0.3))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setBallControl() {
        return Math.min(99, Math.round(((player.Fir*0.4) + (player.Tec*0.3) + (player.Dri*0.2) + (player.Fla*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Skill
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setDribbling())};">
            {setDribbling()}
        </div>
        <div class="text-center">
            Dribbling
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setCurve())};">
            {setCurve()}
        </div>
        <div class="text-center">
            Curve
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setFreeKickAccuracy())};">
            {setFreeKickAccuracy()}
        </div>
        <div class="text-center">
            Free Kick Accuracy
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setLongPassing())};">
            {setLongPassing()}
        </div>
        <div class="text-center">
            Long Passing
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setBallControl())};">
            {setBallControl()}
        </div>
        <div class="text-center">
            Ball Control
        </div>
    </div>
</div>