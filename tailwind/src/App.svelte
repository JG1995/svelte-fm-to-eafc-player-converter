<script>
  import CompactViewItem from './lib/compactViewItem.svelte';
  import ExpandedViewItem from './lib/expandedViewItem.svelte';
  import FrontPage from "./lib/FrontPage.svelte";

  let showDataItem = false;
  let players = [];

  function handleButtonClick() {
    showDataItem = true;
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

        internationalReputation: (() => {
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
        })(),

        crossing: Math.min(99, Math.round(((player.Cro*0.75) + (player.Cor*0.2) + (player.Fre*0.05))*5.5) + Math.floor(Math.random() * 3) - 1),

        finishing: Math.min(99, Math.round(((player.Fin*0.53) + (player.OtB*0.26) + (player.Lon*0.13) + (player.Fla*0.08))*5.5) + Math.floor(Math.random() * 3) - 1),

        headingAccuracy: Math.min(99, Math.round(((player.Hea * 0.6) + (player.Jum * 0.2) + (player.Str * 0.2)) * 5.5) + Math.floor(Math.random() * 3) - 1),

        shortPassing: Math.min(99, Math.round(((player.Pas*0.5) + (player.Vis*0.20) + (player.Fir*0.05) + (player.Dec*0.20) + (player.Com*0.05))*5.5) + Math.floor(Math.random() * 3) - 1),

        volleys: Math.min(99, Math.round(((player.Fin*0.42) + (player.Tec*0.25) + (player.Lon*0.22) + (player.Fla*0.11))*5.5) + Math.floor(Math.random() * 3) - 1),

        dribbling: Math.min(99, Math.round(((player.Dri*0.75) + (player.Fla*0.15) + (player.Tec*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        curve: Math.min(99, Math.round(((player.Cor*0.20) + (player.Fre*0.25) + (player.Tec*0.25) + (player.Cro*0.3))*5.5) + Math.floor(Math.random() * 3) - 1),

        freeKickAccuracy: Math.min(99, Math.round(((player.Fre*0.7) + (player.Lon*0.2) + (player.Tec*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        longPassing: Math.min(99, Math.round(((player.Pas*0.7) + (player.Vis*0.3))*5.5) + Math.floor(Math.random() * 3) - 1),

        ballControl: Math.min(99, Math.round(((player.Fir*0.4) + (player.Tec*0.3) + (player.Dri*0.2) + (player.Fla*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        acceleration: Math.min(99, Math.round(((player.Acc*0.75) + (player.Agi*0.25))*5.5) + Math.floor(Math.random() * 3) - 1),

        sprintSpeed: Math.min(99, Math.round(((player.Pac*0.80) + (player.Bal*0.2))*5.5) + Math.floor(Math.random() * 3) - 1),

        agility: Math.min(99, Math.round(((player.Agi*0.80) + (player.Bal*0.2))*5.5) + Math.floor(Math.random() * 3) - 1),

        reactions: Math.min(99, Math.round(((player.Ant*0.4) + (player.Det*0.2) + (player.OtB*0.1) + (player.Pos*0.1) + (player.Com*0.2))*5.5) + Math.floor(Math.random() * 3) - 1),

        balance: Math.min(99, Math.round(((player.Bal*0.8) + (player.Agi*0.2) + (player.Tec*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        shotPower: Math.min(99, Math.round(((player.Str*0.5) + (player.Lon*0.3) + (player.Fin*0.2))*5.5) + Math.floor(Math.random() * 3) - 1),

        jumping: Math.min(99, Math.round(((player.Hea*0.6) + (player.Jum*0.4))*5.5) + Math.floor(Math.random() * 3) - 1),

        stamina: Math.min(99, Math.round(((player.Sta*0.5) + (player.Wor*0.25) + (player.Nat*0.25))*5.5) + Math.floor(Math.random() * 3) - 1),

        strength: Math.min(99, Math.round(((player.Str*0.9) + (player.Jum*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        longShots: Math.min(99, Math.round(((player.Lon*0.6) + (player.Fin*0.25) + (player.Tec*0.15))*5.5) + Math.floor(Math.random() * 3) - 1),

        aggression: Math.min(99, Math.round(((player.Agg*0.5) + (player.Bra*0.5))*5.5) + Math.floor(Math.random() * 3) - 1),

        interceptions: Math.min(99, Math.round(((player.Pos*0.4) + (player.Mar*0.3) + (player.Ant*0.3))*5.5) + Math.floor(Math.random() * 3) - 1),

        positioning: Math.min(99, Math.round(((player.OtB*0.7) + (player.Ant*0.3))*5.5) + Math.floor(Math.random() * 3) - 1),

        vision: Math.min(99, Math.round(((player.Vis*0.6) + (player.Dec*0.3) + (player.Fla*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        penalties: Math.min(99, Math.round(((player.Pen*0.5) + (player.Fin*0.25) + (player.Com*0.25))*5.5) + Math.floor(Math.random() * 3) - 1),

        composure: Math.min(99, Math.round(((player.Com*0.6) + (player.Dec*0.3) + (player.Ant*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        defensiveAwareness: Math.min(99, Math.round(((player.Mar*0.4) + (player.Dec*0.3) + (player.Pos*0.3))*5.5) + Math.floor(Math.random() * 3) - 1),

        standingTackle: Math.min(99, Math.round(((player.Tck*0.8) + (player.Pos*0.1) + (player.Ant*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        slidingTackle: Math.min(99, Math.round(((player.Tck*0.5) + (player.Agg*0.2) + (player.Bra*0.3))*5.5) + Math.floor(Math.random() * 3) - 1),

        GKDiving: Math.min(99, Math.round(((player.Ref*0.6) + (player.Bra*0.2) + (player.Agi*0.2))*5.5) + Math.floor(Math.random() * 3) - 1),

        GKHandling: Math.min(99, Math.round(((player.Han*0.7) + (player.Thr*0.2) + (player.Str*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        GKKicking: Math.min(99, Math.round(((player.Kic*0.7) + (player.Pas*0.2) + (player.Vis*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),

        GKPositioning: Math.min(99, Math.round(((player.Pos*0.5) + (player.Cmd*0.3) + (player.Dec*0.2))*5.5) + Math.floor(Math.random() * 3) - 1),

        GKReflexes: Math.min(99, Math.round(((player.Ref*0.8) + (player.Agi*0.1) + (player.Pos*0.1))*5.5) + Math.floor(Math.random() * 3) - 1),
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
</script>

<main>
  {#if !showDataItem}
    <FrontPage on:fileRead={handleFileRead}/>
  {:else}
    {#each players.slice(1) as player} <!-- Assuming each player has a unique id -->
      <CompactViewItem player={player} />
      <ExpandedViewItem player={player} />
    {/each}
  {/if}
</main>