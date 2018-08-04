<template>
  <div class="alloy-background-svg">
    <svg width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none">
      <defs>
        <path id="fluid" d="M0,0l0,400c0,0 32.101,-17.828 49.537,-16.991c22.054,1.059 59.125,22.179 82.784,23.345c20.44,1.006 38.732,-15.415 59.174,-16.354c23.061,-1.059 54.493,11.165 79.191,10c23.659,-1.116 47.213,-15.324 68.994,-16.991c20.635,-1.579 42.08,8.177 61.691,6.991c19.206,-1.162 39.537,-14.107 55.975,-14.107c14.975,0 42.654,14.107 42.654,14.107l0,-390l-500,0Z" style="fill:#c00;" />
        <path id="fluid1" d="M500,0l0,400c0,0 -32.101,-17.828 -49.537,-16.991c-22.054,1.059 -59.125,22.179 -82.784,23.345c-20.44,1.006 -38.71,-16.354 -59.174,-16.354c-23.029,0 -54.304,17.519 -79.001,16.354c-24.312,-1.147 -47.372,-20.619 -69.184,-23.345c-20.535,-2.566 -42.08,8.177 -61.691,6.991c-19.206,-1.162 -39.537,-14.107 -55.975,-14.107c-14.975,0 -42.654,14.107 -42.654,14.107l0,-390l500,0Z" style="fill:#ff6767;" />
        <path id="fluid2" d="M500,0l0,400c0,0 -32.262,7.592 -48.537,6.398c-22.72,-1.667 -63.791,-18.333 -87.784,-16.398c-20.856,1.682 -35.279,29.09 -56.174,28.009c-22.529,-1.165 -52.804,-35 -79.001,-35c-26.198,0 -56.538,35 -78.184,35c-20.808,0 -34.58,-31.998 -51.691,-35c-17.111,-3.001 -34.537,15.826 -50.975,16.991c-16.19,1.148 -47.654,-10 -47.654,-10l0,-390l500,0Z" style="fill:#ff9a9a;" />
      </defs>
      <path id="svg-main-bg" d="M0,0l0,400l49.537,-16.991l82.784,23.345l59.174,-16.354l79.001,16.354l69.184,-23.345l61.691,6.991l55.975,-14.107l42.654,14.107l0,-390l-500,0Z" />
    </svg>
  </div>
</template>

<script>
import {TweenLite, TweenMax, TimelineMax} from "gsap";

export default {
  // props: ['item'],
  name: 'Background',
  data() {
    return {
      title: 'Background'
    }
  }, // End data
  // mounted() {
  //   if (process.browser) {
  //     MorphSVGPlugin.convertToPath("circle, rect, polygon");
  //     // Timeline stuf
  //     const tlMain = new TimelineMax({
  //       // delay: 0.5,
  //       repeat: 10,
  //       repeatDelay: 0
  //     });

  //     // Base ease full timeline
  //     TweenLite.defaultEase = Power1.easeOut;
  //     const baseAnimate = 0.3;

  //     const morphStates = ['#skew', '#ripple'];

  //     function alloyMorphLogo() {
  //       tlMain
  //         .to("#svg-main-bg", 1.5, {morphSVG:{ shape:"#fluid" }})
  //         .to("#svg-main-bg", 1.5, {morphSVG:{ shape:"#fluid1" }})
  //         .to("#svg-main-bg", 1.5, {morphSVG:{ shape:"#fluid2" }})
  //       ;
  //     }
  //     const background = document.querySelector('.alloy-background-svg');
  //     background.addEventListener('click', function(){
  //       alloyMorphLogo();
  //     });
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";
.alloy-background-svg {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;

  svg {
    width: 100%;
    height: 100%;
  }
}
#svg-main-bg {
  fill: $brand-one;
}
</style>