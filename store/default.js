export const state = () => ({
  title: "longboard setup.com",
  tagline: "Share your dream setup",
  url: "https://longboardsetup.com",
  description:
    "I am a graphic desigher from The Netherlands, working for my self since 2009 and recently under the name Studio Alloy as a collective of creative designer and developers.",
  // twitter_username: "mvaneijgen",
  // github_username: " mvaneijgen",
  // linkedin_username: "mvaneijgen",
  // codepen_username: "mvaneijgen",
  // copyright: "Mitchel van Eijgen",
  //------------------------------------------------------//
  // Site content
  //------------------------------------------------------//
  about_text: `
  <p>As a long distance push boarder myself I’ve found it difficult to find the right setup for me, this resulted in doing some miss buys. Next to that it's hard to get effective feedback via online platforms, but I believe the community has the knowledge, it just needs to be easier to share setups.</p>
  <p>That is why I've build this tool to make it easy to share your current, dream or complicated setup. It can also be used to request feedback on a specific part, just leave that part empty and share the URL to <a href="https://www.reddit.com/r/longboarding/">/r/longboarding</a>, Discord or any other platform or your choosing and have the community discus on that part and share suggestions.</p>
  `,
  //------------------------------------------------------//
  // About me
  //------------------------------------------------------//
  me: {
    name: "Mitchel van Eijgen",
    tagline: "Graphic designer who loves technology",
    email: "mvaneijgen@gmail.com",
    phone: "06 38 63 27 35",
    address: "Lange herenvest 122<br/>2011 BX Haarlem",
    twitter_username: "mvaneijgen",
    github_username: " mvaneijgen",
    linkedin_username: "mvaneijgen",
    codepen_username: "mvaneijgen",
    avatar: '"http://0.gravatar.com/avatar/8a68ce0259bbb16411035e487ecb27c5"',
    url: "https://mvaneijgen.nl"
  },
  //------------------------------------------------------//
  // Tools {object}
  //------------------------------------------------------//
  toolsUsed: [
    {
      title: "Vue.js/Nuxt.js",
      about:
        "Everything you see here is powered by Vue.js with a Nuxt.js shell.",
      url: "",
      image: "",
    },
    {
      title: "Wordpress",
      about:
        "And then in particular, the Wordpress Rest API. This hosts all this app its data.",
      url: "",
      image: "",
    },
    {
      title: "Greensock",
      about: "For all these awesome SVG animations.",
      url: "",
      image: "",
    },
    {
      title: "Github pages",
      about: "The site is hosted on the powerful servers of Github (for free).",
      url: "",
      image: "",
    },
  ],
  //------------------------------------------------------//
  // Site call to actions
  //------------------------------------------------------//
  callToActions: [
    {
      title: "Are you missing products?",
      description: "Help fill our database by uploading your own!",
      cta: "Upload your own",
      type: "cta--alt",
      url: "#",
    },
    {
      title: "Have a lot of products to add?",
      description:
        "If you have a large collection or products, we love to add them all at once. Just get in contact with us.",
      cta: "Contact",
      type: "",
      url: "#",
    },
  ],
  //------------------------------------------------------//
  // Site Roadmap/todos
  //------------------------------------------------------//
  todos: [
    {
      name: "Allow saving setups in localStorage()",
      description: "",
    },
    {
      name: "Store most visited/popular in firebase database",
      description: "",
    },
  ],
  specialThanks: [
    {
      name: "username",
      realname: "Real name",
      url: "#",
    },
    // {
    //   name: "aureex",
    //   realname: "",
    //   url: "https://www.reddit.com/user/aureex",
    // },
    // {
    //   name: "aiyekara",
    //   realname: "",
    //   url: "https://www.reddit.com/user/aiyekara",
    // },
  ],
});

// export const mutations = {
//   setupClear(state, payload) {
//     state.setupCurrent = state.initSetupCurrent;
//   },
// };

// export const getters = {
//   get(state) {
//     return state.list;
//   }
// };
