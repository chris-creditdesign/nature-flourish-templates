<script>
  export let name;
  export let example_state_property;
</script>

<style>
  main {
    text-align: center;
    font-family: helvetica;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: pink;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Hello {name}!</h1>
  <p>
    The example number setting is
    <strong>{example_state_property}</strong>
  </p>
</main>
