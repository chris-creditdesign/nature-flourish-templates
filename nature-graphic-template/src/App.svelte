<script lang="ts">
  import { Stack } from "creditdesign-svelte-components";
  import * as Pancake from "@sveltejs/pancake";

  export let headline: string;
  export let standfirst: string;
  export let alt_text: string;
  export let data;

  $: neat_headline = headline.toLocaleLowerCase().replaceAll(" ", "-");

  let myFile = new File(
    [
      `x,y
0,0
1,1
2,4
3,9
4,16
5,25
6,36
7,49
8,64
9,81
10,100`,
    ],
    `${neat_headline}.csv`,
    {
      type: "text/csv",
    }
  );
  let download_href = URL.createObjectURL(myFile);
</script>

<Stack>
  <h1 class="font-size:big-2 text-transform:uppercase">{headline}</h1>
  <p>{standfirst}</p>

  <div class="chart" role="img" aria-label={alt_text}>
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
        <Pancake.SvgLine data={data.data} let:d>
          <path class="data" {d} />
        </Pancake.SvgLine>
      </Pancake.Svg>
    </Pancake.Chart>
  </div>

  <p>
    Download the data used to build this chart as as csv file: <a
      href={download_href}
      download={`${neat_headline}.csv`}>{neat_headline}.csv</a
    >
  </p>
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
