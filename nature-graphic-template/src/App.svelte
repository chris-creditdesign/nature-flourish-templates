<script lang="ts">
  import { onMount } from "svelte";
  import { Stack } from "creditdesign-svelte-components";
  import * as Pancake from "@sveltejs/pancake";
  import type { FlourishData } from "./types";
  import get_download_href from "./utils/get_download_href";

  export let headline: string;
  export let standfirst: string;
  export let alt_text: string;
  export let data: FlourishData;

  $: neat_headline = headline.toLocaleLowerCase().replaceAll(" ", "-");

  let download_href = "";

  onMount(() => {
    download_href = get_download_href(neat_headline, data.data);
  });
</script>

<Stack className="border-bottom">
  <Stack stackSpace="var(--s-4)">
    <h1 class="font-size:big-1 text-transform:uppercase">{headline}</h1>
    <p>{standfirst}</p>
  </Stack>

  <div class="chart" role="img" aria-label={alt_text}>
    <Pancake.Chart x1={0} x2={10} y1={0} y2={100} aria-hidden="true">
      <Pancake.Box x2={10} y2={0}>
        <div class="baseline" />
      </Pancake.Box>

      <Pancake.Grid vertical count={10} let:value>
        <span class="x label">{value}</span>
        <div class="grid-line vertical" />
      </Pancake.Grid>

      <Pancake.Grid horizontal count={4} let:value let:first>
        <span class="y label">{value}</span>
        <div class="grid-line horizontal" />
      </Pancake.Grid>

      <Pancake.Svg>
        <Pancake.SvgLine data={data.data} let:d>
          <path class="data" {d} />
        </Pancake.SvgLine>
      </Pancake.Svg>
    </Pancake.Chart>
  </div>

  <p class="font-size:small">
    Download the data used to build this chart as as csv file: <a
      href={download_href}
      download={`${neat_headline}.csv`}>{neat_headline}.csv</a
    >
  </p>
</Stack>

<style>
  :global(.border-bottom) {
    padding-block-end: var(--s1);
    border-block-end: 1px solid #979797;
  }

  .chart {
    padding: 3em 2em 2em 3em;
    width: 100%;
    height: 300px;
    position: relative;
    box-sizing: border-box;
  }

  .baseline {
    width: 102%;
    left: -1%;
    position: absolute;
    height: 100%;
    border-bottom: 3px solid black;
  }

  .y.label {
    position: absolute;
    left: -2.5em;
    width: 2em;
    text-align: right;
    bottom: -0.5em;
  }

  .x.label {
    position: absolute;
    width: 4em;
    left: -2em;
    bottom: -1.8em;
    font-family: sans-serif;
    text-align: center;
  }

  .grid-line.horizontal {
    width: 100%;
    border-bottom: 1px dashed #000000;
  }

  .grid-line.vertical {
    height: 8px;
    position: absolute;
    top: 100%;
    border-left: 1px solid #000000;
  }

  path.data {
    stroke: #eb5b25;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 4px;
    fill: none;
  }
</style>
