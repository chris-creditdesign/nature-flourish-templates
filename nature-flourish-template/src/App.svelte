<script lang="ts">
  import { Stack } from "creditdesign-svelte-components";
  import * as Pancake from "@sveltejs/pancake";

  export let headline: string;
  export let standfirst: string;

  const points = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 16 },
    { x: 5, y: 25 },
    { x: 6, y: 36 },
    { x: 7, y: 49 },
    { x: 8, y: 64 },
    { x: 9, y: 81 },
    { x: 10, y: 100 },
  ];
</script>

<Stack>
  <h1 class="font-size:big-2 text-transform:uppercase">{headline}</h1>
  <p>{standfirst}</p>

  <div class="chart">
    <Pancake.Chart x1={0} x2={10} y1={0} y2={100}>
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
        <Pancake.SvgLine data={points} let:d>
          <path class="data" {d} />
        </Pancake.SvgLine>
      </Pancake.Svg>
    </Pancake.Chart>
  </div>
</Stack>

<style>
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
    border-bottom: 1px dashed green;
  }

  .grid-line.vertical {
    height: 10px;
    position: absolute;
    top: 100%;
    border-left: 2px dashed green;
  }

  path.data {
    stroke: #eb5b25;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-width: 4px;
    fill: none;
  }
</style>
