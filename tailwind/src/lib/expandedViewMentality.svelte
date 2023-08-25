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

    function setAggression() {
        return Math.min(99, Math.round(((player.Agg*0.5) + (player.Bra*0.5))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setInterceptions() {
        return Math.min(99, Math.round(((player.Pos*0.4) + (player.Mar*0.3) + (player.Ant*0.3))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setPositioning() {
        return Math.min(99, Math.round(((player.OtB*0.7) + (player.Ant*0.3))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setVision() {
        return Math.min(99, Math.round(((player.Vis*0.6) + (player.Dec*0.3) + (player.Fla*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setPenalties() {
        return Math.min(99, Math.round(((player.Pen*0.5) + (player.Fin*0.25) + (player.Com*0.25))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setComposure() {
        return Math.min(99, Math.round(((player.Com*0.6) + (player.Dec*0.3) + (player.Ant*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }
</script>

<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Mentality
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setAggression())};">
            {setAggression()}
        </div>
        <div class="text-center">
            Aggression
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setInterceptions())};">
            {setInterceptions()}
        </div>
        <div class="text-center">
            Interceptions
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setPositioning())};">
            {setPositioning()}
        </div>
        <div class="text-center">
            Positioning
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setVision())};">
            {setVision()}
        </div>
        <div class="text-center">
            Vision
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setPenalties())};">
            {setPenalties()}
        </div>
        <div class="text-center">
            Penalties
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setComposure())};">
            {setComposure()}
        </div>
        <div class="text-center">
            Composure
        </div>
    </div>
</div>