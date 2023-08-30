<script>
    import { getBackgroundColor } from '../utils.js';
    export let player;

    function setGKRating() {
        return Math.min(99, Math.round((player.GKReflexes*0.15) + (player.GKDiving*0.15) +
            (player.GKPositioning*0.15) + (player.GKHandling*0.1) + (player.GKKicking*0.1) +
            (player.agility*0.08) + (player.reactions*0.08) + (player.composure*0.05) +
            (player.shortPassing*0.05) + (player.longPassing*0.05) + (player.vision*0.04) + (player.internationalReputation)))
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

<div class="h-auto flex flex-col gap-[5px] col-start-5 row-span-full">
    <div class="font-bold text-left">
        Positions
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setSTRating())};">
            {setSTRating()}
        </div>
        <div class="text-center">
            ST
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setLFCFRFRating())};">
            {setLFCFRFRating()}
        </div>
        <div class="text-center">
            LF/CF/RF
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setLWRWRating())};">
            {setLWRWRating()}
        </div>
        <div class="text-center">
            LW/RW
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setCAMRating())};">
            {setCAMRating()}
        </div>
        <div class="text-center">
            CAM
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setLMRMRating())};">
            {setLMRMRating()}
        </div>
        <div class="text-center">
            LM/RM
        </div>
    </div>
    <div class="col-span-1 flex flex-row items-center">
        <div class=" text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setCMRating())};">
            {setCMRating()}
        </div>
        <div class="text-center">
            CM
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setCDMRating())};">
            {setCDMRating()}
        </div>
        <div class="text-center">
            CDM
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setLWBRWBRating())};">
            {setLWBRWBRating()}
        </div>
        <div class="text-center">
            LWB/RWB
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setLBRBRating())};">
            {setLBRBRating()}
        </div>
        <div class="text-center">
            LB/RB
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setCBRating())};">
            {setCBRating()}
        </div>
        <div class="text-center">
            CB
        </div>
    </div>

    <div class="col-span-1 flex flex-row items-center">
        <div class="text-center py-0.5 px-2 rounded mr-2" style="background-color: {getBackgroundColor(setGKRating())};">
            {setGKRating()}
        </div>
        <div class="text-center">
            GK
        </div>
    </div>
</div>