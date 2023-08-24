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
    function setFirstName() {
        const parts = player.Name.split(' ');
        if (parts.length === 1) {
            return '';
        }
        return parts[0];
    }

    function setLastName() {
        const parts = player.Name.split(' ');
        if (parts.length === 1) {
            return parts[0];
        }
        return parts.slice(1).join(' ');
    }


    function setOverall(value) {

    }

    function setAvgPace(value) {

    }

    function setAvgShooting(value) {

    }

    function setAvgPassing(value) {

    }

    function setAvgDribbling(value) {

    }

    function setAvgDefence(value) {

    }

    function setAvgPhysical(value) {

    }

    function setWeakFoot(value) {

    }

    function setSkillMoves() {
        return Math.ceil(player.Fla / 4)
    }

</script>

<div class="h-[80px] w-[994px] bg-[#6B728E] grid grid-cols-[70px,70px,70px,70px,70px,70px,70px,70px,70px,70px,70px,70px]
gap-[14px] text-white font-pt-sans mb-[15px] items-center rounded">
    <div class="col-span-4 flex flex-col items-center justify-center">
        <!-- Place for name that spans divs 1, 2, 3, and 4 -->
        {setFirstName()} <br/> <b>{setLastName()}</b>
    </div>

    <!-- div 5 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Overall
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(85)};">
            85
        </div>
    </div>

    <!-- div 6 -->
    <div class="col-span-1 flex flex-col items-center justify-center text-[11px]">
        <!-- Place for 4 lines of text in div-6 -->
        <div class="flex justify-between w-full">
            <span>Height:</span>
            <span>{player.Height}</span>
        </div>

        <div class="flex justify-between w-full">
            <span>Weight:</span>
            <span>{player.Weight}</span>
        </div>

        <div class="flex justify-between w-full">
            <span>Weak Foot:</span>
            <span>4</span>
        </div>

        <div class="flex justify-between w-full">
            <span>Skills:</span>
            <span>{setSkillMoves()}</span>
        </div>
    </div>


    <!-- div 7 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Pace
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.Pac*5)};">
            {player.Pac*5}
        </div>
    </div>

    <!-- div 8 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Shooting
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.Fin*5)};">
            {player.Fin*5}
        </div>
    </div>

    <!-- div 9 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Passing
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.Pas*5)};">
            {player.Pas*5}
        </div>
    </div>

    <!-- div 10 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Dribbling
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.Dri*5)};">
            {player.Dri*5-1}
        </div>
    </div>

    <!-- div 11 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Defence
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.Tck*5)};">
            {player.Tck*5}
        </div>
    </div>

    <!-- div 12 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Physical
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.Str*5)};">
            {player.Str*5}
        </div>
    </div>
</div>
