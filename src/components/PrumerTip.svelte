<script lang="ts">
    import { getDatabase, ref, get } from 'firebase/database';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import type { Writable } from 'svelte/store';
    import Chart from 'chart.js/auto';
  
    interface TipData {
      type: string;
      tokens: string;
    }
  
    const db = getDatabase();
    const tipCount: Writable<number | null> = writable(null);
    const mfcShareCount: Writable<number | null> = writable(null);
  
    onMount(async () => {
      try {
        const dbRef = ref(db, '2/data');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          let tipCountValue = 0;
          let mfcShareCountValue = 0;
          for (const itemKey in data) {
            const item = data[itemKey] as TipData;
            if (item.type === 'Tip') {
              tipCountValue += parseInt(item.tokens);
            } else if (item.type === 'MFC Share') {
              mfcShareCountValue += parseInt(item.tokens);
            }
          }
          tipCount.set(tipCountValue);
          mfcShareCount.set(mfcShareCountValue);
  
          const canvas = document.getElementById('pie-chart') as HTMLCanvasElement;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            const chart = new Chart(ctx, {
              type: 'pie',
              data: {
                labels: ['Tip', 'MFC Share'],
                datasets: [
                  {
                    data: [tipCountValue, mfcShareCountValue],
                    backgroundColor: ['#FF6384', '#36A2EB'],
                  },
                ],
              },
              options: {
                responsive: true,
              },
            });
          }
        }
      } catch (error) {
        console.error('Chyba při načítání dat z Firebase:', error);
      }
    });
  </script>
  
  <style>
    .average-tip-card {
      background-color: #F0F4F8;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      animation: fade-in 0.5s ease-out;
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
  
  <div class="average-tip-card">
    <h2 class="text-xl font-bold mb-2">Průměr Tipů</h2>
  
    {#if $tipCount !== null}
      <div>
        <p class="font-semibold">Počet Tipů:</p>
        <p>{ $tipCount }</p>
      </div>
    {:else}
      <div>
        <p class="font-semibold">Počet Tipů:</p>
        <p>Načítání...</p>
      </div>
    {/if}
  
    {#if $mfcShareCount !== null}
      <div>
        <p class="font-semibold">Počet MFC Share:</p>
        <p>{ $mfcShareCount }</p>
      </div>
    {:else}
      <div>
        <p class="font-semibold">Počet MFC Share:</p>
        <p>Načítání...</p>
      </div>
    {/if}
  
    <canvas id="pie-chart"></canvas>
  </div>
  