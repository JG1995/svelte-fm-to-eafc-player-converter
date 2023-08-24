<script>
    import Attacking from './expandedViewAttacking.svelte';
    import Skill from './expandedViewSkill.svelte';
    import Movement from './expandedViewMovement.svelte';
    import Power from './expandedViewPower.svelte';
    import Mentality from './expandedViewMentality.svelte';
    import Defending from './expandedViewDefending.svelte';
    import Goalkeeping from './expandedViewGoalkeeping.svelte';
    import Other from './expandedViewOther.svelte';
    export let player;
</script>

<div class="h-[332px] w-[994px] bg-[#50577A] grid grid-cols-[187px,187px,187px,187px,187px] grid-row-[159px,159px]
gap-[14px] text-white font-pt-sans mb-[15px] items-center rounded">
    <Attacking player={player}/>
</div>
