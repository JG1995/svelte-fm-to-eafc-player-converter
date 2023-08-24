<script>
  import DataItem from './lib/DataItem.svelte';
  import FrontPage from "./lib/FrontPage.svelte";

  let showDataItem = false;

  function handleButtonClick() {
    showDataItem = true;
  }

  function parseData(text) {
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

  let textData = '| Rec     | Inf | Name             | Cor | Cro | Dri | Fin | Fir | Fre | Hea | Lon | L Th | Mar | Pas | Pen | Tck | Tec | Agg | Ant | Bra | Cmp | Cnt | Dec | Det | Fla | Ldr | OtB | Pos | Tea | Vis | Wor | Acc | Agi | Bal | Jum | Nat | Pac | Sta | Str | Aer | Cmd | Com | Ecc | Han | Kic | 1v1 | Pun | Ref | TRO | Thr | DoB                       | Height | Weight | Right Foot    | Left Foot     | \n' +
          '| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| \n' +
          '| - -  -  |     | Lionel Messi     | 15  | 15  | 20  | 17  | 19  | 18  | 10  | 16  | 4    | 4   | 19  | 17  | 7   | 20  | 7   | 16  | 10  | 16  | 13  | 18  | 20  | 20  | 14  | 14  | 5   | 14  | 20  | 9   | 16  | 15  | 18  | 6   | 14  | 15  | 13  | 9   | 2   | 2   | 3   | 1   | 1   | 3   | 1   | 2   | 3   | 1   | 1   | 24/6/1987 (35 years old)  | 169 cm | 67 kg  | Fairly Strong | Very Strong   | \n' +
          '| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| \n' +
          '| - -  -  |     | Mohamed Salah    | 11  | 14  | 16  | 16  | 17  | 12  | 10  | 13  | 6    | 7   | 15  | 17  | 7   | 17  | 11  | 15  | 10  | 15  | 15  | 15  | 18  | 15  | 11  | 17  | 9   | 16  | 17  | 15  | 18  | 16  | 17  | 8   | 17  | 17  | 15  | 15  | 2   | 3   | 3   | 2   | 3   | 2   | 2   | 1   | 3   | 1   | 4   | 15/6/1992 (30 years old)  | 175 cm | 72 kg  | Weak          | Very Strong   | \n'; // or get it from a file input

  let players = parseData(textData);

</script>

<main>
  {#if !showDataItem}
    <FrontPage on:clickButton={handleButtonClick}/>
  {:else}
    {#each players.slice(1) as player} <!-- Assuming each player has a unique id -->
      <DataItem player={player} />
    {/each}
  {/if}
</main>