<script lang="ts">
    import { getDatabase, ref, get } from 'firebase/database';
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
  
    onMount(async () => {
      try {
        const dbRef = ref(db, 'soucty');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const timeData = snapshot.val() as AWAITime;
          awaitTime.set(parseInt(timeData.Away_time));
          groupTime.set(parseInt(timeData.Group_time));
          totalTime.set(parseInt(timeData.Total_time));
          tksPerMin.set(parseInt(timeData.Tks_per_min));
          publicTime.set(parseInt(timeData.Public_time));
          privateTime.set(parseInt(timeData.Private_time));
        }
      } catch (error) {
        console.error('Chyba při načítání dat z Firebase:', error);
      }
    });
  </script>
  
  <style>
    .await-time-card {
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
  
  {#if $awaitTime !== null}
    <div class="await-time-card">
      <h2 class="text-xl font-bold mb-2">AWAI Time</h2>
      <p class="text-4xl font-bold text-blue-600">{ $awaitTime }</p>
      <p class="text-gray-500">Celkový AWAI Time</p>
  
      <h3 class="text-lg font-bold mt-4">Další hodnoty:</h3>
      <div>
        <p class="font-semibold">Group Time:</p>
        <p>{ $groupTime }</p>
      </div>
      <div>
        <p class="font-semibold">Total Time:</p>
        <p>{ $totalTime }</p>
      </div>
      <div>
        <p class="font-semibold">Tks per Min:</p>
        <p>{ $tksPerMin }</p>
      </div>
      <div>
        <p class="font-semibold">Public Time:</p>
        <p>{ $publicTime }</p>
      </div>
      <div>
        <p class="font-semibold">Private Time:</p>
        <p>{ $privateTime }</p>
      </div>
    </div>
  {:else}
    <div class="await-time-card">
      <p>Načítání...</p>
    </div>
  {/if}
  