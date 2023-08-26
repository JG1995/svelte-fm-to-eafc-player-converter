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
        <span>{player.weakFoot}</span>
    </div>

    <div class="flex justify-between w-full">
        <span>Skills:</span>
        <span>{player.skillMoves}</span>
    </div>
</div>