webpackJsonp([5],{IJCV:function(t,a,e){"use strict";a.a={name:"CallToAction",data:function(){return{title:"CallToAction",callToActions:this.$store.state.default.callToActions}}}},NGKS:function(t,a,e){"use strict";a.a={name:"ToolsUsed",data:function(){return{title:"ToolsUsed",tools:this.$store.state.default.toolsUsed}}}},RulR:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"component-CallToAction"},t._l(t.callToActions,function(a,o){return e("div",{key:o,staticClass:"alloy-cards cta",attrs:{"data-cta-type":a.type}},[e("div",{staticClass:"inner"},[e("p",[e("strong",[t._v(t._s(a.title))]),e("span",[t._v(t._s(a.description))])]),e("a",{staticClass:"btn btn--small",attrs:{href:a.url}},[t._v(t._s(a.cta))])])])}))};o._withStripped=!0;var s={render:o,staticRenderFns:[]};a.a=s},RzvT:function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("div",{staticClass:"inner"},[e("div",{staticClass:"alloy-col"},[e("CallToAction")],1),e("div",{staticClass:"alloy-col"},[e("h3",[t._v("Road map")]),e("p",[t._v("Projects are never done, as specially not personal side projects ")]),e("ul",t._l(t.todos,function(a,o){return e("li",{key:o},[t._v(t._s(a.name))])})),e("h4",[t._v("What to help?")]),e("p",[t._v("Are you a Vue.js/Nuxt or Javascript developer? ")]),e("a",{staticClass:"btn btn--small",attrs:{href:"#"}},[t._v("Shoot me a message")])]),e("div",{staticClass:"alloy-col"},[e("h3",[t._v("About")]),e("div",{domProps:{innerHTML:t._s(this.$store.state.default.about_text)}}),e("h4",[t._v("Mitchel van Eijgen")]),t._m(0)]),e("div",{staticClass:"alloy-col"},[e("h3",[t._v("Special thanks!")]),e("ul",t._l(t.specialThanks,function(a,o){return e("li",{key:o},[t._v(t._s(a.name)+"\n          "),e("small",[t._v("("+t._s(a.realname)+")")])])}))])]),t.banana?e("div",{staticClass:"banana",on:{click:t.foundBanana}},[e("svg",{attrs:{viewBox:"0 0 27 23",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"}},[e("path",{attrs:{fill:"none",d:"M0 0h27v23H0z"}}),e("clipPath",{attrs:{id:"a"}},[e("path",{attrs:{d:"M0 0h27v23H0z"}})]),e("g",{attrs:{"clip-path":"url(#a)"}},[e("path",{attrs:{d:"M22.663 1.384l-.399 1.299a.5.5 0 0 0-.001.289s.351 1.2.593 1.837c.237.626.537 1.183.758 1.73.261.643.553 1.212.662 1.762.113.571.137 1.168.062 1.739a10.922 10.922 0 0 1-1.039 3.387c-.491.988-1.194 1.897-1.971 2.733-1.064 1.145-2.298 2.153-3.613 3.028-1.075.715-2.194 1.363-3.377 1.748-1.823.592-3.739 1.05-5.569.868-1.307-.131-2.612-.765-3.883-1.43-1.027-.536-2.642-1.826-3.055-2.152l.421-.597c.345.043 2.263.295 3.548.143 2.283-.269 4.524-.954 6.603-1.879 1.957-.871 3.896-1.956 5.489-3.451a14.306 14.306 0 0 0 3.192-4.431 8.562 8.562 0 0 0 .789-3.261c.013-.378-.068-.793-.143-1.15-.063-.294-.106-.452-.127-.53l.298-1.925.762.243z",fill:"#f5d85f"}}),e("path",{attrs:{d:"M23.556.636a.521.521 0 0 0-.119-.057L21.648.013a.501.501 0 0 0-.646.398l-.403 2.596a.492.492 0 0 0 .013.209s.071.261.14.587c.069.327.128.733.123.909a7.611 7.611 0 0 1-.699 2.879 13.347 13.347 0 0 1-2.966 4.117c-1.474 1.382-3.316 2.421-5.214 3.266-2.002.891-4.15 1.545-6.313 1.8-1.082.128-3.623-.157-3.623-.157a.501.501 0 0 0-.47.209l-.865 1.23a.504.504 0 0 0 .096.676s2.214 1.804 3.602 2.529c1.284.671 2.692 1.382 4.246 1.537 2.06.205 4.107-.304 5.979-.912 1.319-.429 2.512-1.129 3.621-1.866 1.37-.911 2.664-1.966 3.791-3.179.817-.879 1.585-1.858 2.136-2.968a11.888 11.888 0 0 0 1.133-3.702c.09-.687.063-1.39-.07-2.065l-.002-.001c-.147-.741-.481-1.362-.716-1.94-.248-.614-.544-1.166-.751-1.711a30.45 30.45 0 0 1-.523-1.629l.498-1.622a.5.5 0 0 0-.209-.567zm-.893.748l-.399 1.299a.5.5 0 0 0-.001.289s.351 1.2.593 1.837c.237.626.537 1.183.758 1.73.261.643.553 1.212.662 1.762.113.571.137 1.168.062 1.739a10.922 10.922 0 0 1-1.039 3.387c-.491.988-1.194 1.897-1.971 2.733-1.064 1.145-2.298 2.153-3.613 3.028-1.075.715-2.194 1.363-3.377 1.748-1.823.592-3.739 1.05-5.569.868-1.307-.131-2.612-.765-3.883-1.43-1.027-.536-2.642-1.826-3.055-2.152l.421-.597c.345.043 2.263.295 3.548.143 2.283-.269 4.524-.954 6.603-1.879 1.957-.871 3.896-1.956 5.489-3.451a14.306 14.306 0 0 0 3.192-4.431 8.562 8.562 0 0 0 .789-3.261c.013-.378-.068-.793-.143-1.15-.063-.294-.106-.452-.127-.53l.298-1.925.762.243z"}}),e("path",{attrs:{d:"M15.051 18.066a.5.5 0 0 0-.506.062l-.363.271a4.756 4.756 0 0 1-2.897.952l-.453-.003a.5.5 0 1 0-.009 1l.453.003a5.76 5.76 0 0 0 3.506-1.152l.363-.271a.501.501 0 0 0-.07-.85l-.024-.012z"}})])])]):t._e()])};o._withStripped=!0;var s={render:o,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Graphic designer who loves technology.\n        "),a("a",{attrs:{href:"https://mvaneijgen.nl"}},[this._v("mvaneijgen.nl")])])}]};a.a=s},"UD+t":function(t,a,e){"use strict";var o=e("af5t"),s=e("yqLL");a.a={transition:"page-alt",components:{ToolsUsed:o.a,Footer:s.a},data:function(){return{notificationShow:!0}},methods:{notificationAbout:function(){this.notificationShow=!1;this.$store.commit("notifications/addNotification",{title:"You should be building a deck!",content:"But if you really want here is boring text",image:"",type:"",timer:3500})}},created:function(){this.notificationShow&&this.notificationAbout()}}},"X/hy":function(t,a,e){var o=e("l87j");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("ba808a88",o,!1,{sourceMap:!1})},af5t:function(t,a,e){"use strict";var o=e("NGKS"),s=e("vT9/"),n=!1;var i=function(t){n||e("X/hy")},l=e("VU/8")(o.a,s.a,!1,i,"data-v-4db7051f",null);l.options.__file="components/default/ToolsUsed.vue",a.a=l.exports},hSk2:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("UD+t"),s=e("lZJo"),n=e("VU/8")(o.a,s.a,!1,null,null,null);n.options.__file="pages/about.vue",a.default=n.exports},l7kw:function(t,a,e){var o=e("xB47");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("e9955622",o,!1,{sourceMap:!1})},l87j:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".component-ToolsUsed>.inner[data-v-4db7051f]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));grid-column-gap:15px;grid-row-gap:15px}.component-ToolsUsed>.inner>[data-v-4db7051f]{padding:15px;font-size:16px;line-height:1.4em;background-color:#4f039b;color:#fff}",""])},lDaj:function(t,a,e){"use strict";var o=e("IJCV"),s=e("RulR"),n=e("VU/8")(o.a,s.a,!1,null,null,null);n.options.__file="components/CallToAction.vue",a.a=n.exports},lZJo:function(t,a,e){"use strict";var o=function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"alloy-page alloy-page--content alloy-page--about"},[a("div",{staticClass:"alloy-conttent alloy-text-light"},[a("h2",[this._v("About")]),a("div",{domProps:{innerHTML:this._s(this.$store.state.default.about_text)}})]),a("ToolsUsed")],1),a("Footer")],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};a.a=s},sFHl:function(t,a,e){"use strict";var o=e("lDaj");a.a={name:"Footer",components:{CallToAction:o.a},data:function(){return{title:"Footer",todos:this.$store.state.default.todos,specialThanks:this.$store.state.default.specialThanks,banana:!0}},methods:{foundBanana:function(){this.banana=!1;this.$store.commit("notifications/addNotification",{title:"You've found a banana!",content:"I hope you're proud of yourself",image:"",type:"",timer:3500})}}}},"vT9/":function(t,a,e){"use strict";var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"component-ToolsUsed"},[t._m(0),e("p"),e("div",{staticClass:"inner"},t._l(t.tools,function(a,o){return e("div",{key:o,staticClass:"alloy-cards alloy-items alloy-items--tools"},[e("h4",[t._v(t._s(a.title))]),e("p",[t._v(t._s(a.about))])])}))])};o._withStripped=!0;var s={render:o,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"alloy-content alloy-text-light"},[a("h4",[this._v("Like the site?")]),a("h2",[this._v("Here are some tools that have been used in the creation of this site.")])])}]};a.a=s},xB47:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".banana[data-v-0d2d6594]{position:absolute;bottom:-10px;right:15px;width:40px}",""])},yqLL:function(t,a,e){"use strict";var o=e("sFHl"),s=e("RzvT"),n=!1;var i=function(t){n||e("l7kw")},l=e("VU/8")(o.a,s.a,!1,i,"data-v-0d2d6594",null);l.options.__file="components/Footer.vue",a.a=l.exports}});