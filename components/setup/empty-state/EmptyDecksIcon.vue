<template>
  <div class="component-EmptyDecksIcon">
    <svg class="alloy-empty-state-svg" width="100%" height="100%" viewBox="0 0 250 500">
      <g class="board">
        <path class="depth" d="M126.117,462.989c-0.033,0 -2.634,-425.978 -2.634,-425.978c0,0 26.09,-1.251 26.09,25.077c0,19.45 -4.74,21.467 11.703,40.88c16.443,19.413 19.147,19.133 19.147,45.258c0,26.125 -6.43,181.691 -7.987,199.337c-1.557,17.646 -5.6,25.052 -14.413,39.509c-8.812,14.457 -9.405,25.918 -9.45,42.997c-0.046,17.08 -3.976,32.867 -22.456,32.92Z" fill="none" stroke-width="1px"></path>
        <path class="back" d="M123.423,462.853c-17.518,0.05 -21.95,-14.704 -21.996,-31.784c-0.045,-17.079 -0.638,-28.54 -9.45,-42.997c-8.813,-14.457 -12.856,-21.863 -14.413,-39.509c-1.557,-17.646 -7.987,-173.212 -7.987,-199.337c0,-26.125 2.704,-25.845 19.147,-45.258c16.443,-19.413 11.703,-21.43 11.703,-40.88c0,-19.451 14.037,-25.555 23.15,-25.555c9.113,0 22.996,6.104 22.996,25.555c0,19.45 -4.74,21.467 11.703,40.88c16.443,19.413 19.147,19.133 19.147,45.258c0,26.125 -6.43,181.691 -7.987,199.337c-1.557,17.646 -5.6,25.052 -14.413,39.509c-8.812,14.457 -9.405,25.918 -9.45,42.997c-0.046,17.08 -3.67,31.731 -22.15,31.784Z" fill="#fff" stroke-width="2px"></path>
      </g>
      <g class="curves">
        <path d="M102.532,376.71c14.004,1.414 28.578,1.552 43.867,0" fill="none" stroke-width="0.5px"></path>
        <path d="M108.841,392.081c9.976,0.472 20.358,0.518 31.249,0" fill="none" stroke-width="0.5px"></path>
        <path d="M100.446,112.287c15.209,-0.788 31.158,-0.84 48.039,0" fill="none" stroke-width="0.5px"></path>
        <path d="M114.233,90.994c6.533,0.34 13.332,0.374 20.465,0" fill="none" stroke-width="0.5px"></path>
      </g>
      <g class="screw">
        <circle cx="115.163" cy="50.368" r="0.839" stroke-width="1px"></circle>
        <circle cx="115.163" cy="77.756" r="0.839" stroke-width="1px"></circle>
        <circle cx="132.899" cy="50.368" r="0.839" stroke-width="1px"></circle>
        <circle cx="132.899" cy="77.756" r="0.839" stroke-width="1px"></circle>
        <circle cx="115.163" cy="421.407" r="0.839" stroke-width="1px"></circle>
        <circle cx="115.163" cy="447.795" r="0.839" stroke-width="1px"></circle>
        <circle cx="132.899" cy="421.407" r="0.839" stroke-width="1px"></circle>
        <circle cx="115.163" cy="413.407" r="0.839" stroke-width="1px"></circle>
        <circle cx="132.899" cy="413.407" r="0.839" stroke-width="1px"></circle>
        <circle cx="132.899" cy="447.795" r="0.839" stroke-width="1px"></circle>
        <circle cx="115.163" cy="440.795" r="0.839" stroke-width="1px"></circle>
        <circle cx="132.899" cy="440.795" r="0.839" stroke-width="1px"></circle>
      </g>
      <g class="design">
        <path d="M72.122,231.874l80.456,-80.455l0,36.013l-78.51,76.932l-1.946,-32.49Z" fill="none" stroke-width="1px"></path>
        <path d="M172.196,266.431l-80.455,-80.455l0,36.013l79.47,80.086l0.985,-35.644Z" fill="none" stroke-width="1px"></path>
        <path d="M115.478,274.407l60.114,-59.87l-2.366,37.766l-57.748,56.597l0,-34.493Z" fill="none" stroke-width="1px"></path>
      </g>
    </svg>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { DrawSVGPlugin } from "@/static/gsap/DrawSVGPlugin.min.js";
import { MorphSVGPlugin } from "@/static/gsap/MorphSVGPlugin.min.js";
gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);
// import drawSVG from "@/assets/js/DrawSVGPlugin.js"; // This gives a lot of errors now loaded directly from the /static folder and the nuxt.config.js

export default {
  // props: ['item'],
  name: "EmptyDecksIcon",
  data() {
    return {
      title: "EmptyDecksIcon",
    };
  }, // End data
  mounted() {
    if (process.browser) {
      // we set visibility:hidden in the CSS to avoid an initial flash - make them visible now, but the from() tweens are going to essentially hide them anyway because their stroke position/length will be 0.
      gsap.set(".design, .screw, .curves, .board", {
        visibility: "visible",
      });
      const timeline = gsap.timeline();
      timeline
        .from(".board .back", 3, { drawSVG: 0 })
        .from(".board .depth", 3, { drawSVG: 0 }, "-=2")
        .staggerFrom(".curves *", 1, { drawSVG: 0 }, 0.2, "-=0.5")
        .staggerFrom(".screw *", 0.3, { scale: 0 }, 0.2, "-=0.5")
        .staggerFrom(".design *", 1, { drawSVG: 0 }, 1, "-=0.5")
        .from(".screw *", 1, { scale: 0 }, "-=2");
    }
  },
};
</script>
<style scoped>
.design,
.screw,
.curves,
.board {
  visibility: hidden;
}
</style>
