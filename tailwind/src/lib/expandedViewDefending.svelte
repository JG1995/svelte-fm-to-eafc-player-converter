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

    function setDefensiveAwareness() {
        return Math.min(99, Math.round(((player.Mar*0.4) + (player.Dec*0.3) + (player.Pos*0.3))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setStandingTackle() {
        return Math.min(99, Math.round(((player.Tck*0.8) + (player.Pos*0.1) + (player.Ant*0.1))*5.5) + Math.floor(Math.random() * 3) - 1);
    }

    function setSlidingTackle() {
        return Math.min(99, Math.round(((player.Tck*0.5) + (player.Agg*0.2) + (player.Bra*0.3))*5.5) + Math.floor(Math.random() * 3) - 1);
    }
</script>
<div class="flex flex-col gap-[5px]">
    <div class="font-bold text-left">
        Defending
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setDefensiveAwareness())};">
            {setDefensiveAwareness()}
        </div>
        <div class="text-center">
            Def. Awareness
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setStandingTackle())};">
            {setStandingTackle()}
        </div>
        <div class="text-center">
            Standing Tackle
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setSlidingTackle())};">
            {setSlidingTackle()}
        </div>
        <div class="text-center">
            Sliding Tackle
        </div>
    </div>
</div>
