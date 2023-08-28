<script>
    import Attacking from './expandedViewAttacking.svelte';
    import Skill from './expandedViewSkill.svelte';
    import Movement from './expandedViewMovement.svelte';
    import Power from './expandedViewPower.svelte';
    import Mentality from './expandedViewMentality.svelte';
    import Defending from './expandedViewDefending.svelte';
    import Goalkeeping from './expandedViewGoalkeeping.svelte';
    import Other from './expandedViewOther.svelte';
    import Positions from './expandedViewPositions.svelte';
    export let player;
</script>

<div class="h-auto w-[994px] bg-[#50577A] grid grid-cols-[187px,187px,187px,187px,187px] gap-[14px] text-white font-pt-sans mb-[15px] items-start rounded p-[12px]">

    <div class="col-span-4 grid grid-cols-[187px,187px,187px,187px] gap-[14px]">
        <Attacking player={player}/>
        <Skill player={player}/>
        <Movement player={player}/>
        <Power player={player}/>
        <Mentality player={player}/>
        <Defending player={player}/>
        <Goalkeeping player={player}/>
        <Other player={player}/>
    </div>

    <Positions player={player}/>

</div>




