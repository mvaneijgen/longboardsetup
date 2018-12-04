<template>
  <div class="component-Header">
    <header>
      <h1 v-if="'index' == this.$route.name" class="centered">{{ this.$store.state.setup.title }}</h1>
      <SetupName v-if="'index' != this.$route.name" />
      <svg id="header-animation" width="100%" height="100%" viewBox="0 0 4763 567">
        <path id="wave-one" d="M0,0l4762.2,0l0,468c0,0 -270.426,0 -647.205,0c-376.779,0 -826.622,98.929 -1163,98.929c-336.378,0 -583.245,-98.929 -888,-98.929c-304.755,0 -726.826,40.929 -978,40.929c-251.174,0 -393.146,-40.929 -614,-40.929c-220.854,0 -472,0 -472,0l0,-468Z" style="fill:#fff;"/>
        <defs>
          <path id="wave-two" d="M0,0l4762.2,0l0,468c0,0 -274.426,98.929 -651.205,98.929c-376.779,0 -824.622,-168 -1161,-168c-336.378,0 -582.245,139.654 -887,139.654c-304.755,0 -605.826,-176.654 -857,-176.654c-251.174,0 -518.146,205 -739,205c-220.854,0 -467,-98.929 -467,-98.929l0,-468Z" style="fill:#00a5dc;"/>
          <path id="wave-three" d="M0,0l4762.2,0l0,468c0,0 -260.426,-38.071 -637.205,-38.071c-376.779,0 -736.29,38.071 -1072.67,38.071c-336.378,0 -636.577,-38.071 -941.332,-38.071c-304.755,0 -633.259,108.654 -884.433,108.654c-251.174,0 -492.713,-255.118 -713.567,-255.118c-220.854,0 -513,184.535 -513,184.535l0,-468Z" style="fill:#ff2de9;"/>
          <path id="main" d="M0,0l4762.2,0l0,468l-673.205,70.583l-1152,-29.654l-962,58l-879,-144.929l-624,86.929l-472,-40.929l0,-468Z" style="fill:#fff;"/>
        </defs>
      </svg>

    </header>
    <SlideNav/>
  </div>
</template>

<script>
import {TweenMax, TimelineMax} from "gsap";

import SetupName from '@/components/setup/SetupName.vue';
import SlideNav from '@/components/SlideNav.vue';

export default {
  // props: ['item'],
  name: 'Header',
  components: {
    SetupName,
    SlideNav
  },
  data() {
    return {
      title: 'Header'
    }
  }, // End data
}
</script>