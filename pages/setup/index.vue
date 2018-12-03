<template>
  <div class="alloy-page alloy-page--setup">

    <SetupUI />

  </div>
</template>

<script>
import SetupUI from '@/components/setup/SetupUI.vue';

export default {
  // transition: 'page-alt',
  transition: {
    name: 'page-alt',
    beforeEnter(el) {
      const timelineWave = new TimelineMax({
        repeat: -1,
        // paused: true
      });

      timelineWave
        .to("#wave-one", 3, { morphSVG: "#wave-two", ease: Sine.easeInOut})
        .to("#wave-one", 3, { morphSVG: "#wave-three", ease: Sine.easeInOut})
        .to("#wave-one", 3, { morphSVG: "#wave-one", ease: Sine.easeInOut});
      },
      afterEnter(el) {
        const timelineMain = new TimelineMax();
        timelineMain.to("#wave-one", 3, { morphSVG: "#main", ease: Elastic.easeOut.config(1, 0.3)});
      }
  },
  components: {
    SetupUI,
  },
}
</script>

<style>
</style>

