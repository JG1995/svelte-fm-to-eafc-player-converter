<script>
    export let firstname = "";
    export let lastname = "";
    export let overall = 0;
    export let birthday = "";
    export let heightMetric = 0;
    export let heightImperial = 0;
    export let weightMetric = 0;
    export let weightImperial = 0;
    export let strongfoot = "";
    export let weakfoot = 0;
    export let skills = 0;
    export let avgPace = 0;
    export let avgShooting = 0;
    export let avgPassing = 0;
    export let avgDribbling = 0;
    export let avgDefence = 0;
    export let avgPhysical = 0;
    export let crossing = 0;
    export let finishing = 0;
    export let headingAccuracy = 0;
    export let shortPassing = 0;
    export let volleys = 0;
    export let dribbling = 0;
    export let curve = 0;
    export let freeKickAccuracy = 0;
    export let longPassing = 0;
    export let ballControl = 0;
    export let acceleration = 0;
    export let sprintSpeed = 0;
    export let agility = 0;
    export let reactions = 0;
    export let balance = 0;
    export let shotPower = 0;
    export let jumping = 0;
    export let stamina = 0;
    export let strength = 0;
    export let longShots = 0;
    export let aggression = 0;
    export let interceptions = 0;
    export let positioning = 0;
    export let vision = 0;
    export let penalties = 0;
    export let composure = 0;
    export let defensiveAwareness = 0;
    export let standingTackle = 0;
    export let slidingTackle = 0;
    export let GKDiving = 0;
    export let GKHandling = 0;
    export let GKKicking = 0;
    export let GKPositioning = 0;
    export let GKReflexes = 0;

    function getBackgroundColor(value) {
        if (value < 50) return '#C92A2A';
        if (value >= 50 && value < 59) return '#D95C0F';
        if (value >= 60 && value < 69) return '#E6B600';
        if (value >= 70 && value < 79) return '#66A80F';
        if (value >= 80) return '#0C8539';
        return 'white';  // Default color
    }
</script>

<div class="h-[80px] w-[994px] bg-[#6B728E] grid grid-cols-[70px,70px,70px,70px,70px,70px,70px,70px,70px,70px,70px,70px]
gap-[14px] text-white font-pt-sans mb-[15px] items-center rounded">
    <div class="col-span-4 flex flex-col items-center justify-center">
        <!-- Place for name that spans divs 1, 2, 3, and 4 -->
        Jude <br/> <b>Bellingham</b>
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
            <span>186cm</span>
        </div>

        <div class="flex justify-between w-full">
            <span>Weight:</span>
            <span>75kg</span>
        </div>

        <div class="flex justify-between w-full">
            <span>Weak Foot:</span>
            <span>4</span>
        </div>

        <div class="flex justify-between w-full">
            <span>Skills:</span>
            <span>4</span>
        </div>
    </div>


    <!-- div 7 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Pace
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(75)};">
            75
        </div>
    </div>

    <!-- div 8 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Shooting
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(75)};">
            75
        </div>
    </div>

    <!-- div 9 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Passing
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(78)};">
            78
        </div>
    </div>

    <!-- div 10 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Dribbling
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(84)};">
            84
        </div>
    </div>

    <!-- div 11 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Defence
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(77)};">
            77
        </div>
    </div>

    <!-- div 12 -->
    <div class="h-[80px] col-span-1 flex flex-col items-center justify-items-stretch">
        <div class="font-bold text-center pb-[8px] pt-[3px]">
            Physical
        </div>
        <div class="text-center py-1 px-2 rounded"
             style="background-color: {getBackgroundColor(80)};">
            80
        </div>
    </div>
</div>
