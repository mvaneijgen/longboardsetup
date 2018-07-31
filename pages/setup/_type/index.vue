<template>
  <div class="alloy-page alloy-page--type">
    <div class="alloy-select-grid">
      <div class="inner">
        <Item v-for="(banaan, index) in loop" :key="index" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from '@/components/setup/Item.vue';

export default {
  name: 'type',
  components: {
    Item,
  },
  data() {
    return {
      loop: 20,
      item: {
        id: 1,
        wpID: "",
        type: "deck",
        view: "advanced",
        title: "Subsonic Century 36",
        brand: "Subsonic",
        description:
          "Taking it's cue from the well-loved Century 40, the Century 36 is a shorter, lighter version of that tried-and-true deck. This updated model sports a more compact package in the hybrid push-pump category, featuring 1\" of drop, wedge/dewedge system, and a bit more room for flex. With a 7-ply construction and short wheelbase, this lightweight board allows for a very lively setup, making carving and pumping much more attractive to both new and experienced riders.",
        image: "subsonic-century-36-deck-only.jpg",
        price: 182.95,
      }
    }
  }, // End data
}
</script>

