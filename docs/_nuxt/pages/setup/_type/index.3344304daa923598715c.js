webpackJsonp([5],{"/rQw":function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}),e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},"/wPQ":function(t,e,i){"use strict";var a=i("zTCQ"),o=i("rKnj"),s=!1;var n=function(t){s||i("fVo7")},r=i("VU/8")(a.a,o.a,!1,n,"data-v-b6aed376",null);r.options.__file="components/IconBase.vue",e.a=r.exports},"47yv":function(t,e,i){"use strict";var a=i("GjVg"),o=i("VU/8")(null,a.a,!1,null,null,null);o.options.__file="components/icons/IconInfo.vue",e.a=o.exports},"7kYj":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".component-NothingFound[data-v-aa3a4440]{-webkit-box-flex:2;-ms-flex-positive:2;flex-grow:2;position:relative;width:100%}.component-NothingFound .inner[data-v-aa3a4440]{background-color:#1c0137;color:#fff;max-width:650px;margin:0 auto;padding:15px}@media (min-width:768px){.component-NothingFound .inner[data-v-aa3a4440]{padding:30px}}.component-NothingFound .btn[data-v-aa3a4440]{margin-right:15px}.component-NothingFound a[data-v-aa3a4440]{color:#fff}",""])},"8Jf3":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"alloy-items alloy-cards",attrs:{"data-type":t.item.type,"data-view":t.item.view,"data-item-id":t.item.id,"data-info":t.showInfo}},[i("div",{staticClass:"inner",on:{click:t.itemEdit}},["simple"!=t.item.view?i("img",{attrs:{src:t.item.image,alt:t.item.title}}):i("img",{attrs:{src:"http://alloy.work/codepen/QBOyJj/custom.jpg",alt:t.item.title}}),i("div",{staticClass:"alloy-content"},[i("div",{staticClass:"alloy-meta"},[i("p",[i("strong",[t._v(t._s(t.item.custom))])])]),i("h3",{domProps:{innerHTML:t._s(t.item.title)}}),i("a",{attrs:{href:"http://www.google.com/search?q="+t.item.title.replace(/ /g,"+")}},[t._v("Search online")]),i("a",{staticClass:"report",attrs:{href:"//api.longboardsetup.com/"+t.item.type+"/"+t.item.slug}},[t._v("Report")])])])])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},"9y/9":function(t,e,i){"use strict";var a=i("Dd8w"),o=i.n(a),s=i("NYxO"),n=i("mLW4"),r=(i.n(n),i("/wPQ")),c=i("HldI");e.a={name:"CustomForm",components:{IconBase:r.a,IconTrash:c.a},data:function(){return{types:this.$store.state.items.types,hasQueries:!1,locationOn:!1,item:{}}},computed:o()({},Object(s.mapGetters)({getSetupCurrent:"setup/getSetupCurrent",getCurrentItem:"setup/getCurrentItem"})),methods:{routeToSetup:function(){this.$router.push({path:"/setup"})},handleSubmit:function(){console.warn(this.getSetupCurrent.length);var t=this.getSetupCurrent.length;this.item.view="simple",this.item.id||(this.item.id=""+this.item.custom+t),this.item.type||(this.item.type="custom"+t),this.item.slug=this.item.custom+"~"+Object(n.slugify)(this.item.title),this.item.location&&(this.item.slug+="~"+this.item.location),this.$store.commit("setup/setupAdd",this.item),this.$store.commit("setup/itemCurrentClear"),this.routeToSetup()},deleteMe:function(){this.$store.commit("setup/setupRemove",this.item),this.routeToSetup();var t={title:this.item.title+" removed from your setup",content:"We'll miss him",image:"",type:"warning",timer:6e3};this.$store.commit("notifications/addNotification",t)},setItemFromStore:function(){this.getCurrentItem.location&&(this.locationOn=!0),this.item=o()({},this.getCurrentItem)},imageLink:function(t){return i("sJzT")("./"+t+".svg")}},created:function(){this.setItemFromStore()}}},CegP:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"component-NothingFound"},[i("div",{staticClass:"inner"},[i("h1",[t._v("\n        Sorry, we haven't found any \""+t._s(this.$store.getters["items/getSearch"](this.$route.params.type))+'" products in '+t._s(this.$route.params.type)+"\n        "),i("span",[t._v("and we need your help!")])]),i("p",[t._v("We've gathered around 2000+ products, but there are so much more items that we're still missing.")]),i("p",[t._v("If you're missing an item you want to use in your setup, please submit it. We'll review your submission and it will be on the website within hours.")]),i("p",[t._v("Even by submitting just one item, you'll be helping immensely! But for the brave we can also run an import if you have many products to submit at, follow the link below:")]),i("nuxt-link",{staticClass:"btn btn--alt btn--large",attrs:{to:"/submit"}},[t._v("Submit a product")]),i("nuxt-link",{attrs:{to:"/submit"}},[t._v("Or multiple products")])],1)])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},FCMj:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("pXUU"),o=i("p9O/"),s=i("VU/8")(a.a,o.a,!1,null,null,null);s.options.__file="pages/setup/_type/index.vue",e.default=s.exports},FhOP:function(t,e,i){"use strict";var a=i("9y/9"),o=i("hdX2"),s=!1;var n=function(t){s||i("ZUYT")},r=i("VU/8")(a.a,o.a,!1,n,"data-v-a1fa76fc",null);r.options.__file="components/setup/CustomForm.vue",e.a=r.exports},GAzy:function(t,e,i){t.exports=i.p+"img/bushings.a0275bb.svg"},GjVg:function(t,e,i){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),e("path",{attrs:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}})])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},HldI:function(t,e,i){"use strict";var a=i("/rQw"),o=i("VU/8")(null,a.a,!1,null,null,null);o.options.__file="components/icons/IconTrash.vue",e.a=o.exports},Or8g:function(t,e,i){t.exports=i.p+"img/brackets.7e216fa.svg"},PpES:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDMwMCAzMDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxLjU7Ij4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iNjcuNSIgc3R5bGU9ImZpbGw6I2NjYzsiLz4KICAgIDxjaXJjbGUgaWQ9ImN1c3RvbSIgY3g9IjE1MCIgY3k9IjE1MCIgcj0iNTkuMjU2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS13aWR0aDoxLjczcHg7c3Ryb2tlLWRhc2hhcnJheTo4LjY3LDguNjcsOC42NywwOyIvPgo8L3N2Zz4K"},TLxi:function(t,e,i){"use strict";e.a={name:"NothingFound",data:function(){return{title:"NothingFound"}}}},YO1l:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"svg[data-v-b6aed376]{display:inline-block;vertical-align:baseline;margin-bottom:-2px}",""])},ZUYT:function(t,e,i){var a=i("i8YZ");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("395e0aac",a,!1,{sourceMap:!1})},c73u:function(t,e,i){"use strict";var a=i("TLxi"),o=i("CegP"),s=!1;var n=function(t){s||i("dpBv")},r=i("VU/8")(a.a,o.a,!1,n,"data-v-aa3a4440",null);r.options.__file="components/setup/empty-state/NothingFound.vue",e.a=r.exports},d49A:function(t,e,i){"use strict";var a=i("/wPQ"),o=i("47yv");e.a={props:["item"],name:"Item",components:{IconBase:a.a,IconInfo:o.a},data:function(){return{showInfo:!1}},methods:{toggleInfo:function(t){this.showInfo=!this.showInfo},itemEdit:function(t){this.$store.commit("setup/setupAdd",this.item),this.$store.commit("setup/setSetupNotEdited",!0),this.$router.push({path:"/setup"})}}}},dWSx:function(t,e,i){t.exports=i.p+"img/trucks.899ce83.svg"},dYfJ:function(t,e,i){t.exports=i.p+"img/wheels.6ac4f97.svg"},dpBv:function(t,e,i){var a=i("7kYj");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("2f6bc291",a,!1,{sourceMap:!1})},fVo7:function(t,e,i){var a=i("YO1l");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i("rjj0")("27075327",a,!1,{sourceMap:!1})},hdX2:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"component-Custom"},[i("div",{staticClass:"alloy-items alloy-cards alloy-card--preview",attrs:{"data-view":"simple"}},[i("div",{staticClass:"inner"},[i("div",{staticClass:"preview"},[t._v("Preview")]),t.item.custom?i("img",{attrs:{src:t.imageLink(t.item.custom)}}):i("img",{attrs:{src:t.imageLink("custom")}}),i("div",{staticClass:"alloy-content"},[i("div",{staticClass:"alloy-meta"},[i("p",[t.item.custom?i("strong",[t._v(t._s(t.item.custom))]):i("strong",[t._v("Item type")]),t.item.location?i("span",[t._v("| "+t._s(t.item.location))]):t._e()])]),t.item.title?i("h3",[t._v(t._s(t.item.title))]):i("h3",[t._v("Input a name")])])])]),i("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[i("div",{staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectType"}},[t._v("Select part")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.item.custom,expression:"item.custom"}],attrs:{id:"selectType",required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"custom",e.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._l(this.types,function(e,a){return i("option",{key:a,domProps:{value:e.toLowerCase()}},[t._v(t._s(e))])}),i("option",{attrs:{value:"custom"}},[t._v("Everything else")])],2)]),i("div",{staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectedProductName"}},[t._v("Product name")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],attrs:{id:"selectedProductName",cols:"30",rows:"4",required:""},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})]),i("div",{staticClass:"alloy-checkbox-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.locationOn,expression:"locationOn"}],attrs:{id:"selectedLocation",type:"checkbox"},domProps:{checked:Array.isArray(t.locationOn)?t._i(t.locationOn,null)>-1:t.locationOn},on:{change:function(e){var i=t.locationOn,a=e.target,o=!!a.checked;if(Array.isArray(i)){var s=t._i(i,null);a.checked?s<0&&(t.locationOn=i.concat([null])):s>-1&&(t.locationOn=i.slice(0,s).concat(i.slice(s+1)))}else t.locationOn=o}}}),i("label",{attrs:{for:"selectedLocation"}},[t._v("Define a custom position (e.g. back, top, bottom, ect.)")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.locationOn,expression:"locationOn"}],staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectedLocation"}},[t._v("Location")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.location,expression:"item.location"}],attrs:{id:"selectedLocation",type:"text"},domProps:{value:t.item.location},on:{input:function(e){e.target.composing||t.$set(t.item,"location",e.target.value)}}})]),i("div",{staticClass:"alloy-btn-group"},[t.item.id?i("button",{staticClass:"btn btn--icon",on:{click:function(e){return e.preventDefault(),t.deleteMe(e)}}},[i("span",[t._v("Delete this item")]),i("icon-base",{attrs:{width:"20",height:"20","icon-name":"trash"}},[i("icon-trash")],1)],1):t._e(),t.item.id?i("input",{attrs:{type:"submit",value:"Change",disabled:""==t.item.custom||""==t.item.title}}):i("input",{attrs:{type:"submit",value:"Add",disabled:!t.item.custom||!t.item.title}})])])])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},i8YZ:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".alloy-btn-group[data-v-a1fa76fc]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.alloy-btn-group input[type=submit][data-v-a1fa76fc]{margin-left:auto}.alloy-checkbox-field[data-v-a1fa76fc]{color:#fff;margin-bottom:30px}.alloy-checkbox-field [type=checkbox][data-v-a1fa76fc]{margin-right:15px}.alloy-checkbox-field small[data-v-a1fa76fc]{display:block}.alloy-card--preview[data-v-a1fa76fc]{margin-bottom:30px;height:120px}.preview[data-v-a1fa76fc]{position:absolute;top:0;right:0;text-transform:uppercase;color:#ccc;padding:5px;font-size:12px;line-height:1em}",""])},mLW4:function(t,e){t.exports={slugify:function(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},isMobile:function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}}},nTDA:function(t,e,i){t.exports=i.p+"img/bearings.50a6195.svg"},"p9O/":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"alloy-page alloy-page--type"},["/setup/custom"==this.$route.path?i("CustomForm"):t._e(),i("div",{staticClass:"alloy-select-flexbox"},[i("div",{staticClass:"inner"},[i("transition-group",{staticClass:"transition-card",attrs:{name:"slide-in",tag:"div"}},t._l(t.allItems,function(t){return i("Item",{key:t.id,attrs:{item:t}})}),1)],1)]),t.loading?i("h1",{staticStyle:{color:"#fff"}},[t._v("Loading...")]):t._e(),i("button",{staticClass:"centered",attrs:{disabled:t.loading},on:{click:t.itemsLoad}},[t._v("Load more")])],1)])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},pXUU:function(t,e,i){"use strict";var a=i("FhOP"),o=i("s/qI"),s=i("c73u"),n=i("s4hn"),r=(i.n(n),["orderby=date","order=asc","per_page=18","_embed"]);e.a={name:"type",components:{CustomForm:a.a,Item:o.a,NothingFound:s.a},data:function(){return{customShow:!1,type:this.$route.params.type,page:this.$store.state.items[this.$route.params.type].page,loading:!1,hasSearchResults:!1}},computed:{allItems:function(){return this.$store.getters["items/getItems"](this.$route.params.type)},allSearchItems:function(){return this.$store.getters["items/getSearchResults"](this.$route.params.type)},pageNumber:function(){return this.$store.getters["items/getTypePage"](this.$route.params.type)}},methods:{itemsLoad:function(){var t=this;this.loading=!0,this.$axios.get("wp/v2/"+this.type+"?"+r.join("&")+"&page="+this.$store.getters["items/getTypePage"](this.$route.params.type)+"&_embed").then(function(e){t.$store.commit({type:"items/addItems",itemType:t.type,items:e.data.map(n.fromInputData)}),t.$store.commit({type:"items/incrementPage",itemType:t.type}),t.loading=!1})},itemsinfIniteScroll:function(){var t=this;window.addEventListener("scroll",function(){var e=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop)+window.innerHeight===document.documentElement.offsetHeight;!t.loading&&e&&t.itemsLoad()})}},mounted:function(){this.itemsinfIniteScroll()},created:function(){this.$store.state.items[this.$route.params.type].items.length||this.itemsLoad()},destroyed:function(){}}},rKnj:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 24 24","aria-labelledby":t.iconName,role:"presentation"}},[i("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),i("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])};a._withStripped=!0;var o={render:a,staticRenderFns:[]};e.a=o},"s/qI":function(t,e,i){"use strict";var a=i("d49A"),o=i("8Jf3"),s=i("VU/8")(a.a,o.a,!1,null,null,null);s.options.__file="components/setup/Item.vue",e.a=s.exports},s4hn:function(t,e){t.exports={fromInputData:function(t){var e="/image-not-found.jpg",i={};return void 0!==t._embedded&&(e=t._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url,i=t._embedded["wp:featuredmedia"][0].media_details.sizes),{id:t.id,title:t.title.rendered,slug:t.slug,type:t.type,view:"advanced",image:e,images:i}}}},sJzT:function(t,e,i){var a={"./bearings.svg":"nTDA","./brackets.svg":"Or8g","./bushings.svg":"GAzy","./custom.svg":"PpES","./decks.svg":"u2c6","./trucks-alt.svg":"ySc3","./trucks.svg":"dWSx","./wheels.svg":"dYfJ"};function o(t){return i(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(a)},o.resolve=s,t.exports=o,o.id="sJzT"},u2c6:function(t,e,i){t.exports=i.p+"img/decks.875e3c4.svg"},ySc3:function(t,e,i){t.exports=i.p+"img/trucks-alt.26dc91b.svg"},zTCQ:function(t,e,i){"use strict";e.a={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}}}});