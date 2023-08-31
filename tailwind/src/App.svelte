<script>
  import CompactViewItemPlayer from './lib/compactViewItemPlayer.svelte';
  import CompactViewItemGoalkeeper from './lib/compactViewItemGoalkeeper.svelte';
  import ExpandedViewItem from './lib/expandedViewItem.svelte';
  import FrontPage from "./lib/FrontPage.svelte";

  let showDataItem = false;
  let players = [];
  let selectedPlayer = null;

  const playerStates = {};

  function handleCompactViewClick(player) {
    if (!playerStates[player.lastName]) {
      playerStates[player.lastName] = {
        arrowState: true
      };
    }

    // Toggle arrow state
    playerStates[player.lastName].arrowState = !playerStates[player.lastName].arrowState;

    // If the clicked player is already selected, set to null to collapse
    if (selectedPlayer === player) {
      selectedPlayer = null;
    } else {
      selectedPlayer = player;
    }
  }

  function createFMPlayerObjects(text) {
    const lines = text.trim().split('\n'); // Split the text by newline
    const headers = lines[0].trim().split('|').map(h => h.trim()); // Extract headers and trim spaces

    const players = [];

    for (let i = 0; i < lines.length; i+=2) {
      const playerData = lines[i].trim().split('|').map(val => val.trim());
      const playerObject = {};

      for (let j = 0; j < headers.length; j++) {
        playerObject[headers[j]] = playerData[j];
      }

      players.push(playerObject);
    }

    console.log(players)
    return players;
  }

  function convertPlayers(FMPlayers) {
    const EAFCPlayers = FMPlayers.map(player => {
      return {
        firstName: (() => {
          const parts = player.Name.split(' ');
          if (parts.length === 1) {
            return '';
          }
          return parts[0];
        })(),

        lastName: (() => {
          const parts = player.Name.split(' ');
          if (parts.length === 1) {
            return parts[0];
          }
          return parts.slice(1).join(' ');
        })(),

        overall: 99,

        birthday: player.DoB.split(" ")[0],

        height: player.Height,

        heightLong: (() => {
          // Extract the numeric part and convert to integer
          let cm = parseInt(player.Height, 10);

          // Convert cm to inches
          let totalInches = cm / 2.54;

          // Convert inches to feet and inches
          const feet = Math.floor(totalInches / 12);
          const inches = Math.round(totalInches % 12);

          // Return formatted string
          return `${cm} cm / ${feet}'${inches}"`;
        })(),

        weight: player.Weight,

        weightLong: (() => {
          // Extract the numeric part and convert to integer
          const kg = parseInt(player.Weight, 10);

          // Convert kg to lbs
          const lbs = kg * 2.20462;

          // Return formatted string
          return `${kg} kg / ${lbs.toFixed(0)} lbs`;
        })(),

        strongFoot: setStrongFoot(player["Left Foot"], player["Right Foot"]),

        weakFoot: setWeakFoot(player["Left Foot"], player["Right Foot"]),

        skillMoves: Math.ceil(player.Fla / 4),

        internationalReputation: 3,

        /* Implement system to manage Reputation eventually. For now, value is 3.

        (() => {
          let reputation = player.WR
          // Remove anything non-numeric using a regular expression
          const cleanedInput = parseInt(reputation.replace(/[^0-9]/g, ''), 10);

          if (cleanedInput >= 9000) {
            return 5;
          } else if (cleanedInput >= 8000 && cleanedInput < 9000) {
            return 4;
          } else if (cleanedInput >= 7000 && cleanedInput < 8000) {
            return 3;
          } else if (cleanedInput >= 6000 && cleanedInput < 7000) {
            return 2;
          } else {
            return 1;
          }
        })()*/

        crossing: Math.min(94, Math.round(((player.Cro*0.7) + (player.Tec*0.2) + (player.Cor*0.1))*5.5)),

        finishing: Math.min(95, Math.round(((player.Fin*0.4) + (player.Cmp*0.3) + (player.Dec*0.2) + (player.Cnt*0.1))*5.5)),

        headingAccuracy: Math.min(93, Math.round(((player.Hea * 0.8) + (player.Jum * 0.1) + (player.Str * 0.1)) * 5.5)),

        shortPassing: Math.min(93, Math.round(((player.Pas*0.6) + (player.Tec*0.2) + (player.Dec*0.1) + (player.Tea*0.1))*5.5)),

        volleys: Math.min(90, Math.round(((player.Tec*0.4) + (player.Fin*0.3) + (player.Cmp*0.2) + (player.Fla*0.1))*5.5)),

        dribbling: Math.min(95, Math.round(((player.Dri*0.7) + (player.Tec*0.1) + (player.Agi*0.1) + (player.Fir*0.1))*5.5)),

        curve: Math.min(93, Math.round(((player.Cor*0.4) + (player.Fre*0.2) + (player.Tec*0.2) + (player.Cro*0.2))*5.5)),

        freeKickAccuracy: Math.min(94, Math.round(((player.Fre*0.7) + (player.Lon*0.2) + (player.Tec*0.1))*5.5)),

        longPassing: Math.min(93, Math.round(((player.Pas*0.6) + (player.Vis*0.3) + (player.Tec*0.1))*5.5)),

        ballControl: Math.min(94, Math.round(((player.Fir*0.4) + (player.Dri*0.3) + (player.Tec*0.3))*5.5)),

        acceleration: Math.min(97, Math.round(((player.Acc*0.8) + (player.Agi*0.2))*5.5)),

        sprintSpeed: Math.min(97, Math.round(((player.Pac*0.8) + (player.Bal*0.2))*5.5)),

        agility: Math.min(95, Math.round(((player.Agi*0.8) + (player.Bal*0.2))*5.5)),

        reactions: Math.min(93, Math.round(((player.Ant*0.4) + (player.Det*0.2) + (player.OtB*0.1) + (player.Pos*0.1) + (player.Cmp*0.2))*5.5)),

        balance: Math.min(95, Math.round(((player.Bal*0.8) + (player.Agi*0.2))*5.5)),

        shotPower: Math.min(94, Math.round(((player.Str*0.5) + (player.Lon*0.3) + (player.Fin*0.2))*5.5)),

        jumping: Math.min(95, Math.round(((player.Jum*0.6) + (player.Str*0.4))*5.5)),

        stamina: Math.min(95, Math.round(((player.Sta*0.5) + (player.Wor*0.25) + (player.Nat*0.25))*5.5)),

        strength: Math.min(96, Math.round(((player.Str*0.9) + (player.Bal*0.1))*5.5)),

        longShots: Math.min(91, Math.round(((player.Lon*0.7) + (player.Fin*0.2) + (player.Tec*0.1))*5.5)),

        aggression: Math.min(95, Math.round(((player.Agg*0.6) + (player.Bra*0.4))*5.5)),

        interceptions: Math.min(94, Math.round(((player.Pos*0.4) + (player.Mar*0.3) + (player.Ant*0.3))*5.5)),

        positioning: Math.min(95, Math.round(((player.OtB*0.6) + (player.Ant*0.3) + (player.Dec*0.1))*5.5)),

        vision: Math.min(94, Math.round(((player.Vis*0.7) + (player.Dec*0.3))*5.5)),

        penalties: Math.min(92, Math.round(((player.Pen*0.5) + (player.Fin*0.25) + (player.Cmp*0.25))*5.5)),

        composure: Math.min(96, Math.round(((player.Cmp*0.6) + (player.Dec*0.3) + (player.Ant*0.1))*5.5)),

        defensiveAwareness: Math.min(90, Math.round(((player.Mar*0.4) + (player.Dec*0.3) + (player.Pos*0.3))*5.5)),

        standingTackle: Math.min(92, Math.round(((player.Tck*0.8) + (player.Str*0.1) + (player.Ant*0.1))*5.5)),

        slidingTackle: Math.min(90, Math.round(((player.Tck*0.8) + (player.Agg*0.1) + (player.Bra*0.1))*5.5)),

        GKDiving: Math.min(94, Math.round(((player.Ref*0.6) + (player.Bra*0.2) + (player.Agi*0.2))*5.5)),

        GKHandling: Math.min(93, Math.round(((player.Han*0.6) + (player.Thr*0.2) + (player.Aer*0.2))*5.5)),

        GKKicking: Math.min(91, Math.round(((player.Kic*0.7) + (player.Pas*0.2) + (player.Vis*0.1))*5.5)),

        GKPositioning: Math.min(91, Math.round(((player.Pos*0.3) + (player.Com*0.2) + (player.Cmd*0.3) + (player.Dec*0.2))*5.5)),

        GKReflexes: Math.min(95, Math.round(((player.Ref*0.9) + (player.Agi*0.1))*5.5))
      }
    });


    console.log(EAFCPlayers);
    return EAFCPlayers;
  }

  function setStrongFoot(leftFoot, rightFoot) {
    const strengthValues = {
      'Very Weak': 1,
      'Weak': 2,
      'Reasonable': 3,
      'Fairly Strong': 4,
      'Strong': 5,
      'Very Strong': 6
    };

    const leftStrength = strengthValues[leftFoot];
    const rightStrength = strengthValues[rightFoot];

    if (leftStrength > rightStrength) {
      return 'Left Foot';
    } else if (rightStrength > leftStrength) {
      return 'Right Foot';
    } else {
      if (leftStrength === 6) { // Both are 'Very Strong'
        return 'Either';
      } else {
        // If they have the same strength but aren't 'Very Strong',
        // return the 'Left Foot' by default for simplicity.
        return 'Left Foot';
      }
    }
  }

  function setWeakFoot(leftFoot, rightFoot) {
    const stronger = setStrongFoot(leftFoot, rightFoot);

    if (stronger === 'Either') return 5; // If both are 'Very Strong', return 5

    // If not 'Either', find the weaker foot's strength and return its value
    const strengthValue = {
      'Very Weak': 1,
      'Weak': 2,
      'Reasonable': 3,
      'Fairly Strong': 4,
      'Strong': 4
    };

    if (stronger === 'Left Foot') {
      return strengthValue[rightFoot];
    } else {
      return strengthValue[leftFoot];
    }
  }

  function handleFileRead(event) {
    const fileContents = event.detail;
    // Process the file contents as required
    players = convertPlayers(createFMPlayerObjects(fileContents));

    if(players.length > 0) {
      showDataItem = true;
    }
  }

  function setOverall() {
    const functions = [setGKRating, setCBRating, setLBRBRating, setLWBRWBRating, setCDMRating, setCMRating,
      setLMRMRating, setCAMRating, setLWRWRating, setLFCFRFRating, setSTRating]

    return Math.max(...functions.map(func => func()));
  }

  function getHighestRatingFunction(player) {
    const ratings = {
      'GK': setGKRating(player),
      'CB': setCBRating(player),
      'LBRB': setLBRBRating(player),
      'LWBRWB': setLWBRWBRating(player),
      'CDM': setCDMRating(player),
      'CM': setCMRating(player),
      'LMRM': setLMRMRating(player),
      'CAM': setCAMRating(player),
      'LWRW': setLWRWRating(player),
      'LFCFRF': setLFCFRFRating(player),
      'ST': setSTRating(player)
    };

    let maxRating = -Infinity;
    let maxFunction = null;

    for (const [position, rating] of Object.entries(ratings)) {
      if (rating > maxRating) {
        maxRating = rating;
        maxFunction = position;
      }
    }

    return maxFunction;
  }

  function setGKRating(player) {
    return Math.min(99, Math.round((player.GKReflexes*0.15) + (player.GKDiving*0.15) +
            (player.GKPositioning*0.15) + (player.GKHandling*0.1) + (player.GKKicking*0.1) +
            (player.agility*0.08) + (player.reactions*0.08) + (player.composure*0.05) +
            (player.shortPassing*0.05) + (player.longPassing*0.05) + (player.vision*0.04) + (player.internationalReputation)))
  }

  function setCBRating(player) {
    return Math.min(99, Math.round((player.defensiveAwareness*0.15) + (player.standingTackle*0.15) +
            (player.slidingTackle*0.15) + (player.headingAccuracy*0.1) + (player.strength*0.1) +
            (player.aggression*0.08) + (player.interceptions*0.08) + (player.shortPassing*0.05) +
            (player.ballControl*0.05) + (player.reactions*0.05) + (player.jumping*0.04) + (player.internationalReputation)))
  }

  function setLBRBRating(player) {
    return Math.min(99, Math.round((player.slidingTackle*0.13) + (player.standingTackle*0.12) +
            (player.interceptions*0.12) + (player.defensiveAwareness*0.1) + (player.stamina*0.08) +
            (player.reactions*0.08) + (player.crossing*0.07) + (player.headingAccuracy*0.07) +
            (player.ballControl*0.07) + (player.shortPassing*0.06) + (player.sprintSpeed*0.05) +
            (player.aggression*0.05) + (player.internationalReputation)))
  }

  function setLWBRWBRating(player) {
    return Math.min(99, Math.round((player.standingTackle*0.11) + (player.slidingTackle*0.1) +
            (player.crossing*0.1) + (player.shortPassing*0.1) + (player.ballControl*0.1) +
            (player.interceptions*0.1) + (player.defensiveAwareness*0.09) + (player.stamina*0.08) +
            (player.reactions*0.08) + (player.dribbling*0.07) + (player.sprintSpeed*0.04) +
            (player.agility*0.03) + (player.internationalReputation)))
  }

  function setCDMRating(player) {
    return Math.min(99, Math.round((player.shortPassing*0.13) + (player.interceptions*0.13) +
            (player.longPassing*0.11) + (player.defensiveAwareness*0.1) + (player.standingTackle*0.1) +
            (player.ballControl*0.09) + (player.reactions*0.09) + (player.vision*0.08) +
            (player.stamina*0.06) + (player.strength*0.06) + (player.aggression*0.05) + (player.internationalReputation)))
  }

  function setCMRating(player) {
    return Math.min(99, Math.round((player.shortPassing*0.15) + (player.longPassing*0.13) +
            (player.vision*0.12) + (player.ballControl*0.1) + (player.dribbling*0.09) +
            (player.reactions*0.08) + (player.interceptions*0.08) + (player.positioning*0.08) +
            (player.standingTackle*0.06) + (player.stamina*0.06) + (player.longShots*0.05) + (player.internationalReputation)))
  }

  function setLMRMRating(player) {
    return Math.min(99, Math.round((player.crossing*0.14) + (player.dribbling*0.14) +
            (player.shortPassing*0.12) + (player.ballControl*0.12) + (player.longPassing*0.08) +
            (player.vision*0.08) + (player.reactions*0.07) + (player.positioning*0.07) +
            (player.stamina*0.05) + (player.acceleration*0.05) + (player.sprintSpeed*0.05) +
            (player.agility*0.03) + (player.internationalReputation)))
  }

  function setCAMRating(player) {
    return Math.min(99, Math.round((player.shortPassing*0.16) + (player.vision*0.16) +
            (player.ballControl*0.13) + (player.positioning*0.12) + (player.dribbling*0.11) +
            (player.reactions*0.08) + (player.longShots*0.06) + (player.finishing*0.05) +
            (player.shotPower*0.05) + (player.acceleration*0.04) + (player.agility*0.04) + (player.internationalReputation)))
  }

  function setLWRWRating(player) {
    return Math.min(99, Math.round((player.crossing*0.16) + (player.dribbling*0.16) +
            (player.ballControl*0.13) + (player.shortPassing*0.1) + (player.positioning*0.09) +
            (player.acceleration*0.06) + (player.sprintSpeed*0.06) + (player.reactions*0.06) +
            (player.agility*0.05) + (player.vision*0.05) + (player.finishing*0.04) +
            (player.longShots*0.04) + (player.internationalReputation)))
  }

  function setLFCFRFRating(player) {
    return Math.min(99, Math.round((player.finishing*0.12) + (player.positioning*0.12) +
            (player.dribbling*0.11) + (player.ballControl*0.11) + (player.shotPower*0.1) +
            (player.longShots*0.1) + (player.reactions*0.1) + (player.shortPassing*0.06) +
            (player.headingAccuracy*0.05) + (player.vision*0.05) + (player.acceleration*0.04) +
            (player.sprintSpeed*0.04) + (player.internationalReputation)))
  }

  function setSTRating(player) {
    return Math.min(99, Math.round((player.finishing*0.2) + (player.positioning*0.12) +
            (player.headingAccuracy*0.1) + (player.shotPower*0.1) + (player.reactions*0.1) +
            (player.dribbling*0.08) + (player.ballControl*0.08) + (player.volleys*0.05) +
            (player.longShots*0.05) + (player.acceleration*0.05) + (player.sprintSpeed*0.04) +
            (player.strength*0.03) + (player.internationalReputation)))
  }
</script>

<main>
  {#if !showDataItem}
    <FrontPage on:fileRead={handleFileRead}/>
  {:else}
    {#each players.slice(1) as player}
      {#if getHighestRatingFunction(player) === 'GK'}
        <div on:click={() => handleCompactViewClick(player)} style="cursor: pointer;">
          <CompactViewItemGoalkeeper player={player} arrowState={playerStates[player.lastName] ? playerStates[player.lastName].arrowState : true} />
        </div>
      {:else}
        <div on:click={() => handleCompactViewClick(player)} style="cursor: pointer;">
          <CompactViewItemPlayer player={player} arrowState={playerStates[player.lastName] ? playerStates[player.lastName].arrowState : true} />
        </div>
      {/if}
      {#if selectedPlayer === player}
        <ExpandedViewItem player={player} />
      {/if}
    {/each}
  {/if}
</main>
