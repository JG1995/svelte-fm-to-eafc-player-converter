<script>
    export let player;

    function getBackgroundColor(value) {
        if (value < 50) return '#C92A2A';
        if (value >= 50 && value < 59) return '#D95C0F';
        if (value >= 60 && value < 69) return '#E6B600';
        if (value >= 70 && value < 79) return '#66A80F';
        if (value >= 80) return '#0C8539';
        return 'white';  // Default color
    }

    function setCrossing(value) {
        return Math.round(((player.Cro*0.75) + (player.Cor*0.2) + (player.Fre*0.05))*5)
    }

    function setFinishing(value) {
        return Math.round(((player.Fin*0.53) + (player.OtB*0.26) + (player.Lon*0.13) + (player.Fla*0.08))*5)
    }

    function setHeadingAccuracy(value) {
        return Math.round(((player.Hea*0.6) + (player.Jum*0.2) + (player.Str*0.2))*5)
    }

    function setShortPassing(value) {
        return Math.round(((player.Pas*0.5) + (player.Vis*0.20) + (player.Fir*0.05) + (player.Dec*0.20) + (player.Com*0.05))*5)
    }

    function setVolleys(value) {
        return Math.round(((player.Fin*0.42) + (player.Tec*0.25) + (player.Lon*0.22) + (player.Fla*0.11))*5)
    }
</script>

<div class="flex flex-col space-y-4">
    <div class="col-span-1 flex flex-row items-center">
        <div class="h-[20px] w-[30px] text-center py-1 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setCrossing())};">
            {setCrossing()}
        </div>
        <div class="text-center">
            Crossing
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="h-[20px] w-[30px] text-center py-1 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setFinishing())};">
            {setFinishing()}
        </div>
        <div class="text-center">
            Finishing
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="h-[20px] w-[30px] text-center py-1 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setHeadingAccuracy())};">
            {setHeadingAccuracy()}
        </div>
        <div class="text-center">
            Heading Accuracy
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="h-[20px] w-[30px] text-center py-1 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setShortPassing())};">
            {setShortPassing()}
        </div>
        <div class="text-center">
            Short Passing
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="h-[20px] w-[30px] text-center py-1 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setVolleys())};">
            {setVolleys()}
        </div>
        <div class="text-center">
            Volleys
        </div>
    </div>
</div>

