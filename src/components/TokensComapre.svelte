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
    const comparisonResult: Writable<string> = writable('');
  
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
  
    let selectedYear1: string = '';
    let selectedYear2: string = '';
  
    function compareTokensByYear(): void {
      if (!selectedYear1 || !selectedYear2) {
        console.error('Chyba: Musíte vybrat obě roky pro porovnání');
        return;
      }
  
      const year1 = parseInt(selectedYear1, 10);
      const year2 = parseInt(selectedYear2, 10);
  
      if (isNaN(year1) || isNaN(year2)) {
        console.error('Chyba: Neplatný formát roku');
        return;
      }
  
      const tokensData = $tokens;
  
      const tokensYear1 = tokensData.filter((token) => {
        const tokenYear = new Date(token.date).getFullYear();
        return tokenYear === year1;
      });
  
      const tokensYear2 = tokensData.filter((token) => {
        const tokenYear = new Date(token.date).getFullYear();
        return tokenYear === year2;
      });
  
      const countYear1 = tokensYear1.reduce((total, token) => total + parseInt(token.tokens, 10), 0);
      const countYear2 = tokensYear2.reduce((total, token) => total + parseInt(token.tokens, 10), 0);
  
      const percentYear1 = (countYear1 / (countYear1 + countYear2)) * 100;
      const percentYear2 = (countYear2 / (countYear1 + countYear2)) * 100;
  
      const result = `Porovnání tokenu:\nRok ${year1} tokenu: ${countYear1}\nRok ${year2} tokenu: ${countYear2}\nProcento tokenu v roce ${year1}: ${percentYear1.toFixed(2)}%\nProcento tokenu v roce ${year2}: ${percentYear2.toFixed(2)}%`;
  
      comparisonResult.set(result);
    }
  </script>
  
  <style>
    .token-comparator {
      background-color: #f0f4f8;
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
  
  <div class="token-comparator">
    {#if $years.length > 0}
      <h2 class="text-xl font-bold mb-2">Porovnání tokenu</h2>
      <p>Výběr roku 1:</p>
      <select bind:value={selectedYear1}>
        <option disabled selected>-- Vyberte rok --</option>
        {#each $years as year}
          <option value={year}>{year}</option>
        {/each}
      </select>
      <p>Výběr roku 2:</p>
      <select bind:value={selectedYear2}>
        <option disabled selected>-- Vyberte rok --</option>
        {#each $years as year}
          <option value={year}>{year}</option>
        {/each}
      </select>
      <button on:click={compareTokensByYear}>Porovnat</button>
      {#if $comparisonResult}
        <p class="text-bold text-center">{$comparisonResult}</p> <br>
      {/if}
    {/if}
  </div>

  
  
  