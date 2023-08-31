<script>
    import { getBackgroundColor } from '../utils.js';
    export let player;
    export let arrowState;

    function setSpeed() {
        return Math.min(99, Math.round((player.sprintSpeed*0.45) + (player.acceleration*0.55)));
    }

    function setGKRating() {
        return Math.min(99, Math.round((player.GKReflexes*0.15) + (player.GKDiving*0.15) +
            (player.GKPositioning*0.15) + (player.GKHandling*0.1) + (player.GKKicking*0.1) +
            (player.agility*0.08) + (player.reactions*0.08) + (player.composure*0.05) +
            (player.shortPassing*0.05) + (player.longPassing*0.05) + (player.vision*0.04) + (player.internationalReputation)))
    }
</script>

<div class="h-[80px] w-[1014px] bg-[#6B728E] grid grid-cols-[70px,70px,70px,70px,70px,70px,70px,70px,70px,70px,70px,70px]
gap-[14px] text-white font-pt-sans mb-[15px] items-center rounded">
    <div class="col-span-1 flex flex-col items-center justify-center">
        <img src={arrowState ? "/expand-arrow-white.png" : "/contract-arrow-white.png"} alt="expand" class="ml-2 h-5 w-5" />
    </div>

    <div class="col-span-3 flex flex-col items-center justify-center">
        <!-- Place for name that spans divs 1, 2, 3, and 4 -->
        {player.firstName} <br/> <b>{player.lastName}</b>
    </div>

    <!-- div 5 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Overall
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setGKRating())};">
            {setGKRating()}
        </div>
    </div>

    <!-- div 6 -->
    <div class="col-span-1 flex flex-col items-center justify-center text-[11px]">
        <!-- Place for 4 lines of text in div-6 -->
        <div class="flex justify-between w-full">
            <span>Height:</span>
            <span>{player.height}</span>
        </div>

        <div class="flex justify-between w-full">
            <span>Weight:</span>
            <span>{player.weight}</span>
        </div>

        <div class="flex justify-between w-full">
            <span>WF:</span>
            <div class="flex items-center">
                <span>{player.weakFoot}</span>
                <img src="/star.png" alt="star" class="ml-2 h-2 w-2" /> <!-- Adjust the height and width as needed -->
            </div>
        </div>

        <div class="flex justify-between w-full">
            <span>Skills:</span>
            <div class="flex items-center">
                <span>{player.skillMoves}</span>
                <img src="/star.png" alt="star" class="ml-2 h-2 w-2" /> <!-- Adjust the height and width as needed -->
            </div>
        </div>
    </div>


    <!-- div 7 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Diving
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.GKDiving)};">
            {player.GKDiving}
        </div>
    </div>

    <!-- div 8 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Handling
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.GKHandling)};">
            {player.GKHandling}
        </div>
    </div>

    <!-- div 9 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Kicking
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.GKKicking)};">
            {player.GKKicking}
        </div>
    </div>

    <!-- div 10 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Reflexes
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.GKReflexes)};">
            {player.GKReflexes}
        </div>
    </div>

    <!-- div 11 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Speed
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setSpeed())};">
            {setSpeed()}
        </div>
    </div>

    <!-- div 12 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Positioning
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(player.GKPositioning)};">
            {player.GKPositioning}
        </div>
    </div>
</div>
