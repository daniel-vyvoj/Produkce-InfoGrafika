<script lang="ts">
    import { getDatabase, ref, get, onValue } from 'firebase/database';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import type { Writable } from 'svelte/store';
  
    interface Token {
      UID: string;
      date: string;
      notes: string;
      reference_id: string;
      tokens: string;
      type: string;
      user: string;
    }
  
    const db = getDatabase();
    const tokens: Writable<Token[]> = writable([]);
    const years: Writable<string[]> = writable([]);
    const selectedYears: Writable<string[]> = writable([]);
    const typeCounts: Writable<{ year: string; type1Count: number; type2Count: number }[]> = writable([]);
  
    onMount(async () => {
      try {
        const dbRef = ref(db, '2/data');
        onValue(dbRef, (snapshot) => {
          if (snapshot.exists()) {
            const tokensData = Object.values(snapshot.val()) as Token[];
            tokens.set(tokensData);
  
            const uniqueYears = [...new Set(tokensData.map((token) => new Date(token.date).getFullYear()))];
            years.set(uniqueYears.map((year) => year.toString()));
          }
        });
      } catch (error) {
        console.error('Chyba při načítání dat z Firebase:', error);
      }
    });
  
    $: {
      if ($tokens.length > 0 && $selectedYears.length > 0) {
        const years = $selectedYears;
        const type1 = 'TIP';
        const type2 = 'MFC Share';
  
        const tokensData = $tokens;
  
        const typeCountsData: { year: string; type1Count: number; type2Count: number }[] = [];
  
        for (const year of years) {
          const tokensType1 = tokensData.filter((token) => {
            const tokenYear = new Date(token.date).getFullYear().toString();
            return token.type === type1 && tokenYear === year;
          });
  
          const tokensType2 = tokensData.filter((token) => {
            const tokenYear = new Date(token.date).getFullYear().toString();
            return token.type === type2 && tokenYear === year;
          });
  
          const type1Count = tokensType1.length;
          const type2Count = tokensType2.length;
  
          typeCountsData.push({
            year,
            type1Count,
            type2Count
          });
        }
  
        typeCounts.set(typeCountsData);
      }
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
    {#if $tokens.length > 0}
      <h2 class="text-xl font-bold mb-2">Porovnání typů</h2>
  
      <h3 class="text-lg font-bold mt-4">Vyberte roky:</h3>
      <div class="mt-2">
        <select multiple bind:value={$selectedYears}>
          {#each $years as year (year)}
            <option value={year}>{year}</option>
          {/each}
        </select>
      </div>
  
      {#if $selectedYears.length > 0}
        <h3 class="text-lg font-bold mt-4">Výsledky porovnání:</h3>
        <table class="mt-2">
          <thead>
            <tr>
              <th class="px-2 py-1">Rok</th>
              <th class="px-2 py-1">TIP</th>
              <th class="px-2 py-1">MFC</th>
            </tr>
          </thead>
          <tbody>
            {#each $typeCounts as { year, type1Count, type2Count } (year)}
              <tr>
                <td class="px-2 py-1">{year}</td>
                <td class="px-2 py-1">{type1Count}</td>
                <td class="px-2 py-1">{type2Count}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      {/if}
    {/if}
  </div>
  
  