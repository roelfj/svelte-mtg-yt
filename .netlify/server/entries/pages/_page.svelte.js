import { c as create_ssr_component, d as createEventDispatcher, e as escape, v as validate_component } from "../../chunks/index2.js";
const global = "";
const Player_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".player.svelte-1s4wejw{flex-grow:1}.plus.svelte-1s4wejw{background-color:seagreen}.minus.svelte-1s4wejw{background-color:brown}button[disabled].svelte-1s4wejw{background-color:gray;pointer-events:none}button.svelte-1s4wejw{font-size:20px;border-radius:3px;width:40px;height:40px;color:white;font-family:monospace;font-weight:bold}",
  map: null
};
const Player = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { score } = $$props;
  let { winningText } = $$props;
  let { won } = $$props;
  let { fontColour } = $$props;
  let { gameOver = false } = $$props;
  createEventDispatcher();
  if ($$props.score === void 0 && $$bindings.score && score !== void 0)
    $$bindings.score(score);
  if ($$props.winningText === void 0 && $$bindings.winningText && winningText !== void 0)
    $$bindings.winningText(winningText);
  if ($$props.won === void 0 && $$bindings.won && won !== void 0)
    $$bindings.won(won);
  if ($$props.fontColour === void 0 && $$bindings.fontColour && fontColour !== void 0)
    $$bindings.fontColour(fontColour);
  if ($$props.gameOver === void 0 && $$bindings.gameOver && gameOver !== void 0)
    $$bindings.gameOver(gameOver);
  $$result.css.add(css$1);
  return `<div style="${"color: " + escape(fontColour, true)}" class="player svelte-1s4wejw"><h2>${escape(score)}</h2>
    <button ${gameOver ? "disabled" : ""} class="plus svelte-1s4wejw">+</button>
    <button ${gameOver ? "disabled" : ""} class="minus svelte-1s4wejw">-</button>
    ${won ? `<h2>${escape(winningText)}</h2>` : ``}</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-4ofnw5{width:80%;padding:20px;border:solid gray 1px;margin:0 auto;background-color:wheat;margin:10vh auto}#controls-container.svelte-4ofnw5{display:flex}button.svelte-4ofnw5{display:block;width:100%;margin-top:20px;border:solid salmon 1px;background-color:sandybrown;color:rgb(61,56,56);font-size:20px;border-right:3px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let blueWon;
  let redWon;
  let gameOver;
  let redScore = 20;
  let blueScore = 20;
  $$result.css.add(css);
  blueWon = redScore <= 0;
  redWon = blueScore <= 0;
  gameOver = blueWon || redWon;
  return `<main class="svelte-4ofnw5"><h1>The Gathering</h1>
    <div id="controls-container" class="svelte-4ofnw5">${validate_component(Player, "Player").$$render(
    $$result,
    {
      gameOver,
      fontColour: "blue",
      won: blueWon,
      winningText: "Blue Wins",
      score: blueScore
    },
    {},
    {}
  )}
        ${validate_component(Player, "Player").$$render(
    $$result,
    {
      gameOver,
      fontColour: "red",
      won: redWon,
      winningText: "Red Wins",
      score: redScore
    },
    {},
    {}
  )}</div>
    <button class="svelte-4ofnw5">Start Game</button></main>`;
});
export {
  Page as default
};
