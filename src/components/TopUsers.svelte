<script lang="ts">
    import { getDatabase, ref, get } from 'firebase/database';
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import type { Writable } from 'svelte/store';
    import Chart from 'chart.js/auto';
  
    interface UserData {
      tokens: string;
      user: string;
    }
  
    const db = getDatabase();
    const topUsers: Writable<UserData[]> = writable([]);
  
    onMount(async () => {
      try {
        const dbRef = ref(db, '2/data');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          const users: { [key: string]: number } = {};
  
          for (const itemKey in data) {
            const item = data[itemKey] as UserData;
            const { user, tokens } = item;
  
            if (users[user]) {
              users[user] += parseInt(tokens);
            } else {
              users[user] = parseInt(tokens);
            }
          }
  
          const sortedUsers = Object.entries(users)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([user, tokens]) => ({ user, tokens }));
  
          topUsers.set(sortedUsers);
  
          const ctx = document.getElementById('top-users-chart') as HTMLCanvasElement;
          if (ctx) {
            const chart = new Chart(ctx, {
              type: 'pie',
              data: {
                labels: sortedUsers.map((user) => user.user),
                datasets: [
                  {
                    data: sortedUsers.map((user) => user.tokens),
                    backgroundColor: [
                      '#FF6384',
                      '#36A2EB',
                      '#FFCE56',
                      '#8B008B',
                      '#3CB371',
                      '#BA55D3',
                      '#FFA500',
                      '#800080',
                      '#008080',
                      '#FFFF00',
                    ],
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
    .top-users-card {
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
  
  <div class="top-users-card">
    <h2 class="text-xl font-bold mb-2">Nejlepší uživatelé</h2>
  
    {#if $topUsers.length > 0}
      <div>
        <ul>
          {#each $topUsers as { user, tokens }, index}
            <li>{index + 1}. {user} ({tokens} tokenů)</li>
          {/each}
        </ul>
      </div>
    {:else}
      <div>
        <p>Načítání...</p>
      </div>
    {/if}
  
    <canvas id="top-users-chart"></canvas>
  </div>
  