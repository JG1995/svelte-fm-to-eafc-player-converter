<script>
    export let player;
</script>

<div class="flex flex-col">
    <div class="font-bold text-left">
        Player Information
    </div>
    <!-- Place for 4 lines of text in div-6 -->
    <div class="flex justify-between w-full">
        <span>Birthday:</span>
        <span>{player.birthday}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Height:</span>
        <span>{player.heightLong}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Weight:</span>
        <span>{player.weightLong}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Strong Foot:</span>
        <span>{player.strongFoot}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Weak Foot:</span>
        <div class="flex items-center">
            <span>{player.weakFoot}</span>
            <img src="/star.png" alt="star" class="ml-2 h-3 w-3" /> <!-- Adjust the height and width as needed -->
        </div>
    </div>

    <div class="flex justify-between w-full">
        <span>Skills:</span>
        <div class="flex items-center">
            <span>{player.skillMoves}</span>
            <img src="/star.png" alt="star" class="ml-2 h-3 w-3" /> <!-- Adjust the height and width as needed -->
        </div>
    </div>
</div>