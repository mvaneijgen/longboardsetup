<template>
  <div class="component-EmptyWheelsIcon">
    <svg class="alloy-empty-state-svg" width="100%" height="100%" viewBox="0 0 500 500">
      <g class="base">
        <circle cx="251.841" cy="250" r="40.128" fill="none" stroke-width="2px" />
        <circle cx="251.841" cy="250" r="29.948" fill="none" stroke-width="2px" />
      </g>
      <g class="details">
        <path d="M244.298,190.838C244.298,190.838 227.993,195.009 223.589,197.275C219.186,199.54 217.893,202.664 217.79,205.933C217.687,209.202 213.974,215.759 223.589,210.205C233.205,204.651 237.652,203.575 244.298,197.275C250.944,190.974 251.71,188.388 244.298,190.838Z" fill="none" stroke-widt="1px" />
        <path d="M290.214,202.389C290.214,202.389 275.64,193.971 270.907,192.513C266.175,191.054 263.067,192.383 260.707,194.648C258.348,196.913 251.108,199.005 261.867,201.757C272.625,204.509 276.557,206.849 285.713,206.991C294.87,207.134 297.225,205.82 290.214,202.389Z" fill="none" stroke-widt="1px" />
        <path d="M314.965,242.751C314.965,242.751 310.431,226.543 308.067,222.191C305.704,217.839 302.552,216.617 299.282,216.586C296.011,216.556 289.372,212.99 295.14,222.48C300.908,231.969 302.083,236.391 308.53,242.894C314.977,249.398 317.58,250.106 314.965,242.751Z" fill="none" stroke-widt="1px" />
        <path d="M303.443,286.913C303.443,286.913 311.533,272.154 312.886,267.39C314.238,262.626 312.84,259.549 310.522,257.241C308.205,254.932 305.952,247.741 303.441,258.559C300.93,269.376 298.679,273.359 298.741,282.516C298.804,291.674 300.17,293.999 303.443,286.913Z" fill="none" stroke-widt="1px" />
        <path d="M263.645,309.56C263.645,309.56 279.747,304.665 284.045,302.204C288.343,299.744 289.495,296.566 289.452,293.295C289.409,290.025 292.826,283.308 283.468,289.287C274.109,295.265 269.715,296.539 263.357,303.13C256.999,309.721 256.35,312.338 263.645,309.56Z" fill="none" stroke-widt="1px" />
        <path d="M218.259,300.072C218.259,300.072 233.194,307.83 237.987,309.076C242.781,310.322 245.826,308.855 248.082,306.487C250.338,304.118 257.477,301.705 246.606,299.436C235.735,297.168 231.703,295.006 222.549,295.273C213.395,295.54 211.101,296.958 218.259,300.072Z" fill="none" stroke-widt="1px" />
        <path d="M193.729,261.857C193.729,261.857 198.983,277.846 201.538,282.088C204.094,286.33 207.297,287.41 210.566,287.294C213.834,287.178 220.626,290.444 214.44,281.221C208.254,271.999 206.882,267.635 200.151,261.425C193.42,255.216 190.788,254.626 193.729,261.857Z" fill="none" stroke-widt="1px" />
        <path d="M202.178,217.27C202.178,217.27 194.756,232.375 193.617,237.195C192.478,242.015 194.013,245.027 196.431,247.229C198.849,249.432 201.422,256.515 203.447,245.596C205.472,234.677 207.543,230.598 207.071,221.452C206.6,212.307 205.131,210.045 202.178,217.27Z" fill="none" stroke-widt="1px" />
      </g>
      <g class="rubber">
        <circle class="outer" cx="253.918" cy="250" r="139.012" fill="none" stroke-width="2px" />
        <circle class="outer" cx="254.169" cy="250" r="71.216" fill="none" stroke-width="2px" />
        <circle class="inner" cx="254.458" cy="250" r="83.245" fill="none" stroke-width="1px" />
        <circle class="inner" cx="252.357" cy="250" r="118.768" fill="none" stroke-width="1px" />
      </g>
    </svg>

  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  // props: ['item'],
  name: "EmptyWheelsIcon",
  data() {
    return {
      title: "EmptyWheelsIcon",
    };
  }, // End data
  mounted() {
    if (process.browser) {
      //we set visibility:hidden in the CSS to avoid an initial flash - make them visible now, but the from() tweens are going to essentially hide them anyway because their stroke position/length will be 0.
      gsap.set(".base, .rubber, .details", { visibility: "visible" });

      var timeline = gsap.timeline();

      timeline
        // .delay(7)
        .staggerFrom(".rubber .outer", 3, { drawSVG: 0 }, 1)
        .staggerFrom(".rubber .inner", 2, { drawSVG: 0 }, 0.4, "-=1")
        .staggerFrom(".base *", 0.5, { drawSVG: 0 }, 0.1, "-=1")
        .staggerFrom(".details *", 0.5, { drawSVG: 0 }, 0.1, "-=1");
    }
  },
};
</script>
<style scoped>
.base,
.rubber,
.details {
  visibility: hidden;
}
</style>
