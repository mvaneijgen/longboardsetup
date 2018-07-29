import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      title: "Longboard Setup",
      types: [
        "trucks",
        "wheels",
        "bearings",
        "bushings",
        "pivot cups",
        "brackets",
        "custom"
      ],
      setup: [
        {
          id: 1,
          wpID: "",
          type: "deck",
          view: "advanced",
          title: "Subsonic Century 36",
          brand: "Subsonic",
          description:
            "Taking it's cue from the well-loved Century 40, the Century 36 is a shorter, lighter version of that tried-and-true deck. This updated model sports a more compact package in the hybrid push-pump category, featuring 1\" of drop, wedge/dewedge system, and a bit more room for flex. With a 7-ply construction and short wheelbase, this lightweight board allows for a very lively setup, making carving and pumping much more attractive to both new and experienced riders.",
          image: "subsonic-century-36-deck-only.jpg",
          price: 182.95
        },
        {
          id: 2,
          wpID: "",
          type: "trucks",
          view: "advanced",
          title: "Surf Rodz 30mm x 10mm Axle Extension",
          brand: "Surf Rodz",
          description: "Surf Rodz 30mm x 10mm axle extension",
          image: "surf-rodz-20mm-x-10mm-axle-extension.jpg",
          price: 58.000043
        },
        {
          id: 3,
          wpID: "",
          type: "wheels",
          view: "advanced",
          title: "Alva Conical 59mm Aqua Wheels",
          brand: "Alva",
          description: "Slight Inset Bearings",
          image: "alva-conical-59mm-aqua-wheels.jpg",
          price: 63.95
        },
        {
          id: 4,
          wpID: "",
          type: "custom",
          view: "simple",
          title: "Orangatang Nipple Double Barrel Bushings hard",
          brand: "",
          description: "",
          image: "",
          price: ""
        }
      ],
      _advancedOn: false,
      // get advancedOn() {
      //   return this._advancedOn;
      // },
      // set advancedOn(value) {
      //   this._advancedOn = value;
      // },
      decks: [],
      trucks: [],
      wheels: []
    },
    mutations: {
      add(state, payload) {
        state.items = payload;
        state.currentItem = payload[0];
      },
      error(state, payload) {},
      description(state, payload) {
        state.description = payload;
      }
    }
  });
};

export default createStore;
