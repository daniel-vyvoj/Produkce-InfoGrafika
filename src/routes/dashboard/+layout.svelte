<script lang="ts">
	import SideBarMenu from "../../components/DashBoard/Sidebar.svelte";



</script>

<div class="flex">
    <div class="w-1/5">
      <SideBarMenu />
    </div>
    <div class="w-4/5">
<slot/>
    </div>
</div>