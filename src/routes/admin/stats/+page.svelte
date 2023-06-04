<script lang="ts">
  import { getDatabase, ref, get } from 'firebase/database';
  import { onMount } from 'svelte';
  import { writable, } from 'svelte/store';
  import type {Writable} from 'svelte/store';

  interface User {
    UID: string;
    date: string;
    notes: string;
    reference_id: string;
    tokens: string;
    type: string;
    user: string;
  }

  const PAGE_SIZE: number = 10;

  const users: Writable<User[]> = writable([]);
  const topUsers: Writable<User[]> = writable([]);
  const filteredUsers: Writable<User[]> = writable([]);

  let currentPage: number = 1;
  let totalPages: number = 1;
  let filterValue: string = '';

 

  function filterUsers(filterValue: string): void {
    const filtered: User[] = users.filter(user => user.user.toLowerCase().includes(filterValue.toLowerCase()));
    filteredUsers.set(filtered);
    totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    goToPage(1);
  }
  function goToPage(page: number): void {
    if (page < 1 || page > totalPages) {
      return;
    }
    currentPage = page;
    const startIndex: number = (currentPage - 1) * PAGE_SIZE;
    const endIndex: number = startIndex + PAGE_SIZE;
    const usersOnPage: User[] = filteredUsers.slice(startIndex, endIndex);
    filteredUsers.set(usersOnPage);
  }
</script>

<style>
  .card {
    background-color: #f1f1f1;
    border-radius: 4px;
    padding: 1rem;
    margin-bottom: 1rem;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .pagination-button {
    background-color: #f1f1f1;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #555;
    cursor: pointer;
    margin: 0 0.25rem;
    padding: 0.25rem 0.5rem;
    transition: background-color 0.3s;
  }

  .pagination-button:hover {
    background-color: #e5e5e5;
  }

  .pagination-button.active {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
  }
</style>

<div class="p-4">
  <h2 class="text-lg font-semibold mb-2">Statistiky</h2>
  <p>Počet tokenů: </p>
  <p>Počet uživatelů: </p>
</div>

<div class="p-4">
  <h2 class="text-lg font-semibold mb-2">Top 10 uživatelů s nejvíce tokeny</h2>
  {#each $topUsers as user}
    <div class="card mb-2">
      <p class="font-semibold">{user.user}</p>
      <p>Počet tokenů: {user.tokens}</p>
    </div>
  {/each}
</div>

<div class="p-4">
  <h2 class="text-lg font-semibold mb-2">Filtrovaní uživatelé</h2>
  {#each $filteredUsers as user}
    <div class="card mb-2">
      <p class="font-semibold">{user.user}</p>
      <p>Počet tokenů: {user.tokens}</p>
    </div>
  {/each}

  <div class="pagination">
    {#each Array.from({ length: totalPages }) as _, i}
      <button class="pagination-button {i + 1 === currentPage ? 'active' : ''}" on:click="{() => goToPage(i + 1)}">{i + 1}</button>
    {/each}
  </div>
</div>
