<script lang="ts">
    import { getDatabase, ref, get, onValue } from 'firebase/database';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import type { Writable } from 'svelte/store';
  
    interface AWAITime {
      Away_time: string;
      Group_time: string;
      Total_time: string;
      Tks_per_min: string;
      Public_time: string;
      Private_time: string;
    }
  
    const db = getDatabase();
    const awaitTime: Writable<number | null> = writable(null);
    const groupTime: Writable<number | null> = writable(null);
    const totalTime: Writable<number | null> = writable(null);
    const tksPerMin: Writable<number | null> = writable(null);
    const publicTime: Writable<number | null> = writable(null);
    const privateTime: Writable<number | null> = writable(null);
  
    let selectedDate1: string = '';
    let selectedDate2: string = '';
  
    onMount(async () => {
      try {
        const dbRef = ref(db, 'soucty');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const timeData = snapshot.val() as AWAITime;
          awaitTime.set(parseInt(timeData.Away_time, 10));
          groupTime.set(parseInt(timeData.Group_time, 10));
          totalTime.set(parseInt(timeData.Total_time, 10));
          tksPerMin.set(parseInt(timeData.Tks_per_min, 10));
          publicTime.set(parseInt(timeData.Public_time, 10));
          privateTime.set(parseInt(timeData.Private_time, 10));
        }
      } catch (error) {
        console.error('Chyba při načítání dat z Firebase:', error);
      }
    });
  
    function compareData(value1: number | null, value2: number | null): string {
      if (value1 === null || value2 === null) {
        return 'Není dostupné porovnání';
      }
  
      if (value1 > value2) {
        return 'Hodnota 1 je větší';
      } else if (value1 < value2) {
        return 'Hodnota 2 je větší';
      } else {
        return 'Hodnoty jsou stejné';
      }
    }
  
    function compareDataByDate(date1: string, date2: string): void {
      if (!date1 || !date2) {
        console.error('Chyba: Musíte vybrat obě data pro porovnání');
        return;
      }
  
      // Zde můžete implementovat logiku pro porovnání dat podle vybraných datumů
      // Například získání dat z databáze za vybraná období a porovnání hodnot
  
      console.log('Porovnání dat:');
      console.log('Datum 1:', date1);
      console.log('Datum 2:', date2);
  
      // Zde můžete aktualizovat výsledky porovnání v Svelte store nebo jiným způsobem je zobrazit ve vaší aplikaci
    }
  </script>
  
  <style>
    .data-comparator {
      background-color: #F0F4F8;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      animation: fade-in 0.5s ease-out;
      max-height: 1200px; /* Přidejte tento řádek pro omezení výšky */
      overflow: hidden; /* Přidejte tento řádek pro skrytí přebytečného obsahu */
    }
  
    @keyframes fade-in {
      0% {
        opacity: 0;
        transform: translateY(16px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>
  
  <div class="data-comparator">
    {#if $awaitTime !== null && $groupTime !== null}
      <h2 class="text-xl font-bold mb-2">Porovnání dat</h2>
      <p>Hodnota 1 (Await Time): {$awaitTime}</p>
      <p>Hodnota 2 (Group Time): {$groupTime}</p>
  
      <h3 class="text-lg font-bold mt-4">Porovnání za určité období:</h3>
      <p>Zvolte datum 1:</p>
      <input type="date" bind:value={selectedDate1} />
      <p>Zvolte datum 2:</p>
      <input type="date" bind:value={selectedDate2} />
      <button class="bg-orange-500 py-2 px-4" on:click={() => compareDataByDate(selectedDate1, selectedDate2)}>Porovnat</button>
    {/if}
  </div>
  