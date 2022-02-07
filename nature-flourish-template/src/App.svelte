<script lang="ts">
  import { Stack } from "creditdesign-svelte-components";

  export let headline: string;
  export let standfirst: string;
</script>

<Stack>
  <h1 class="font-size:big-2">{headline}</h1>
  <p>{standfirst}</p>
</Stack>

<style>
</style>
