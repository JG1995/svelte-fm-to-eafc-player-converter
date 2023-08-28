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

    function setOverall() {
        const functions = [setCBRating, setLBRBRating, setLWBRWBRating, setCDMRating, setCMRating,
            setLMRMRating, setCAMRating, setLWRWRating, setLFCFRFRating, setSTRating]

        return Math.max(...functions.map(func => func()));
    }

    function setAvgPace() {
        return Math.min(99, Math.round((player.sprintSpeed*0.55) + (player.acceleration*0.45)));
    }

    function setAvgShooting() {
        return Math.min(99, Math.round((player.finishing*0.45) + (player.longShots*0.2) + (player.shotPower*0.2)
            + (player.positioning*0.05) + (player.penalties*0.05) + (player.volleys*0.05)));
    }

    function setAvgPassing() {
        return Math.min(99, Math.round((player.shortPassing*0.35) + (player.vision*0.2) + (player.crossing*0.2)
            + (player.curve*0.05) + (player.freeKickAccuracy*0.05) + (player.longPassing*0.15)));
    }

    function setAvgDribbling() {
        return Math.min(99, Math.round((player.dribbling*0.5) + (player.ballControl*0.35) + (player.agility*0.1)
            + (player.balance*0.05)));
    }

    function setAvgDefence() {
        return Math.min(99, Math.round((player.defensiveAwareness*0.3) + (player.standingTackle*0.3) + (player.headingAccuracy*0.1)
            + (player.interceptions*0.2) + (player.slidingTackle*0.1)));
    }

    function setAvgPhysical() {
        return Math.min(99, Math.round((player.strength*0.5) + (player.stamina*0.25) + (player.aggression*0.2)
            + (player.jumping*0.05)));
    }

    function setCBRating() {
        return Math.min(99, Math.round((player.defensiveAwareness*0.15) + (player.standingTackle*0.15) +
            (player.slidingTackle*0.15) + (player.headingAccuracy*0.1) + (player.strength*0.1) +
            (player.aggression*0.08) + (player.interceptions*0.08) + (player.shortPassing*0.05) +
            (player.ballControl*0.05) + (player.reactions*0.05) + (player.jumping*0.04) + (player.internationalReputation)))
    }

    function setLBRBRating() {
        return Math.min(99, Math.round((player.slidingTackle*0.13) + (player.standingTackle*0.12) +
            (player.interceptions*0.12) + (player.defensiveAwareness*0.1) + (player.stamina*0.08) +
            (player.reactions*0.08) + (player.crossing*0.07) + (player.headingAccuracy*0.07) +
            (player.ballControl*0.07) + (player.shortPassing*0.06) + (player.sprintSpeed*0.05) +
            (player.aggression*0.05) + (player.internationalReputation)))
    }

    function setLWBRWBRating() {
        return Math.min(99, Math.round((player.standingTackle*0.11) + (player.slidingTackle*0.1) +
            (player.crossing*0.1) + (player.shortPassing*0.1) + (player.ballControl*0.1) +
            (player.interceptions*0.1) + (player.defensiveAwareness*0.09) + (player.stamina*0.08) +
            (player.reactions*0.08) + (player.dribbling*0.07) + (player.sprintSpeed*0.04) +
            (player.agility*0.03) + (player.internationalReputation)))
    }

    function setCDMRating() {
        return Math.min(99, Math.round((player.shortPassing*0.13) + (player.interceptions*0.13) +
            (player.longPassing*0.11) + (player.defensiveAwareness*0.1) + (player.standingTackle*0.1) +
            (player.ballControl*0.09) + (player.reactions*0.09) + (player.vision*0.08) +
            (player.stamina*0.06) + (player.strength*0.06) + (player.aggression*0.05) + (player.internationalReputation)))
    }

    function setCMRating() {
        return Math.min(99, Math.round((player.shortPassing*0.15) + (player.longPassing*0.13) +
            (player.vision*0.12) + (player.ballControl*0.1) + (player.dribbling*0.09) +
            (player.reactions*0.08) + (player.interceptions*0.08) + (player.positioning*0.08) +
            (player.standingTackle*0.06) + (player.stamina*0.06) + (player.longShots*0.05) + (player.internationalReputation)))
    }

    function setLMRMRating() {
        return Math.min(99, Math.round((player.crossing*0.14) + (player.dribbling*0.14) +
            (player.shortPassing*0.12) + (player.ballControl*0.12) + (player.longPassing*0.08) +
            (player.vision*0.08) + (player.reactions*0.07) + (player.positioning*0.07) +
            (player.stamina*0.05) + (player.acceleration*0.05) + (player.sprintSpeed*0.05) +
            (player.agility*0.03) + (player.internationalReputation)))
    }

    function setCAMRating() {
        return Math.min(99, Math.round((player.shortPassing*0.16) + (player.vision*0.16) +
            (player.ballControl*0.13) + (player.positioning*0.12) + (player.dribbling*0.11) +
            (player.reactions*0.08) + (player.longShots*0.06) + (player.finishing*0.05) +
            (player.shotPower*0.05) + (player.acceleration*0.04) + (player.agility*0.04) + (player.internationalReputation)))
    }

    function setLWRWRating() {
        return Math.min(99, Math.round((player.crossing*0.16) + (player.dribbling*0.16) +
            (player.ballControl*0.13) + (player.shortPassing*0.1) + (player.positioning*0.09) +
            (player.acceleration*0.06) + (player.sprintSpeed*0.06) + (player.reactions*0.06) +
            (player.agility*0.05) + (player.vision*0.05) + (player.finishing*0.04) +
            (player.longShots*0.04) + (player.internationalReputation)))
    }

    function setLFCFRFRating() {
        return Math.min(99, Math.round((player.finishing*0.12) + (player.positioning*0.12) +
            (player.dribbling*0.11) + (player.ballControl*0.11) + (player.shotPower*0.1) +
            (player.longShots*0.1) + (player.reactions*0.1) + (player.shortPassing*0.06) +
            (player.headingAccuracy*0.05) + (player.vision*0.05) + (player.acceleration*0.04) +
            (player.sprintSpeed*0.04) + (player.internationalReputation)))
    }

    function setSTRating() {
        return Math.min(99, Math.round((player.finishing*0.2) + (player.positioning*0.12) +
            (player.headingAccuracy*0.1) + (player.shotPower*0.1) + (player.reactions*0.1) +
            (player.dribbling*0.08) + (player.ballControl*0.08) + (player.volleys*0.05) +
            (player.longShots*0.05) + (player.acceleration*0.05) + (player.sprintSpeed*0.04) +
            (player.strength*0.03) + (player.internationalReputation)))
    }
</script>

<div class="h-[80px] w-[994px] bg-[#6B728E] grid grid-cols-[70px,70px,70px,70px,70px,70px,70px,70px,70px,70px,70px,70px]
gap-[14px] text-white font-pt-sans mb-[15px] items-center rounded">
    <div class="col-span-4 flex flex-col items-center justify-center">
        <!-- Place for name that spans divs 1, 2, 3, and 4 -->
        {player.firstName} <br/> <b>{player.lastName}</b>
    </div>

    <!-- div 5 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Overall
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setOverall())};">
            {setOverall()}
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
            <span>Weak Foot:</span>
            <span>{player.weakFoot}</span>
        </div>

        <div class="flex justify-between w-full">
            <span>Skills:</span>
            <span>{player.skillMoves}</span>
        </div>
    </div>


    <!-- div 7 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Pace
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setAvgPace())};">
            {setAvgPace()}
        </div>
    </div>

    <!-- div 8 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Shooting
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setAvgShooting())};">
            {setAvgShooting()}
        </div>
    </div>

    <!-- div 9 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Passing
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setAvgPassing())};">
            {setAvgPassing()}
        </div>
    </div>

    <!-- div 10 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Dribbling
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setAvgDribbling())};">
            {setAvgDribbling()}
        </div>
    </div>

    <!-- div 11 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Defence
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setAvgDefence())};">
            {setAvgDefence()}
        </div>
    </div>

    <!-- div 12 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Physical
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(setAvgPhysical())};">
            {setAvgPhysical()}
        </div>
    </div>
</div>
