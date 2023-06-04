<!-- LoadingBar.svelte -->

<script>
    export let progress = 0;
</script>

<div class="bg-gray-200 h-2 relative rounded-full overflow-hidden">
    <div class="absolute top-0 left-0 h-2 bg-blue-500" style={`width: ${progress}%;`}></div>
</div>
