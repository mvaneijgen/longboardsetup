webpackJsonp([9],{"/rQw":function(t,e,i){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("g",[e("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}),e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},"/wPQ":function(t,e,i){"use strict";var o=i("zTCQ"),a=i("rKnj"),n=!1;var s=function(t){n||i("fVo7")},r=i("VU/8")(o.a,a.a,!1,s,"data-v-b6aed376",null);r.options.__file="components/IconBase.vue",e.a=r.exports},"6skc":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("BXLW"),a=i("QyZG"),n=i("VU/8")(o.a,a.a,!1,null,null,null);n.options.__file="pages/setup/custom.vue",e.default=n.exports},"9y/9":function(t,e,i){"use strict";var o=i("Dd8w"),a=i.n(o),n=i("NYxO"),s=i("mLW4"),r=(i.n(s),i("/wPQ")),l=i("HldI");e.a={name:"CustomForm",components:{IconBase:r.a,IconTrash:l.a},data:function(){return{types:this.$store.state.items.types,hasQueries:!1,locationOn:!1,item:{}}},computed:a()({},Object(n.mapGetters)({getSetupCurrent:"setup/getSetupCurrent",getCurrentItem:"setup/getCurrentItem"})),methods:{routeToSetup:function(){this.$router.push({path:"/setup"})},handleSubmit:function(){console.warn(this.getSetupCurrent.length);var t=this.getSetupCurrent.length;this.item.view="simple",this.item.id||(this.item.id=""+this.item.custom+t),this.item.type||(this.item.type="custom"+t),this.item.slug=this.item.custom+"~"+Object(s.slugify)(this.item.title),this.item.location&&(this.item.slug+="~"+this.item.location),this.$store.commit("setup/setupAdd",this.item),this.$store.commit("setup/itemCurrentClear"),this.routeToSetup()},deleteMe:function(){this.$store.commit("setup/setupRemove",this.item),this.routeToSetup();var t={title:this.item.title+" removed from your setup",content:"We'll miss him",image:"",type:"warning",timer:3500};this.$store.commit("notifications/addNotification",t)},setItemFromStore:function(){this.item=a()({},this.getCurrentItem)}},created:function(){this.setItemFromStore()}}},BXLW:function(t,e,i){"use strict";var o=i("FhOP");e.a={components:{CustomForm:o.a}}},FhOP:function(t,e,i){"use strict";var o=i("9y/9"),a=i("hdX2"),n=!1;var s=function(t){n||i("ZUYT")},r=i("VU/8")(o.a,a.a,!1,s,"data-v-a1fa76fc",null);r.options.__file="components/setup/CustomForm.vue",e.a=r.exports},HldI:function(t,e,i){"use strict";var o=i("/rQw"),a=i("VU/8")(null,o.a,!1,null,null,null);a.options.__file="components/icons/IconTrash.vue",e.a=a.exports},QyZG:function(t,e,i){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"alloy-page alloy-page--setup"},[e("CustomForm")],1)};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},YO1l:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"svg[data-v-b6aed376]{display:inline-block;vertical-align:baseline;margin-bottom:-2px}",""])},ZUYT:function(t,e,i){var o=i("i8YZ");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("395e0aac",o,!1,{sourceMap:!1})},fVo7:function(t,e,i){var o=i("YO1l");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i("rjj0")("27075327",o,!1,{sourceMap:!1})},hdX2:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"component-Custom"},[i("form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[i("div",{staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectType"}},[t._v("Select part")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.item.custom,expression:"item.custom"}],attrs:{id:"selectType",required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.item,"custom",e.target.multiple?i:i[0])}}},[i("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._l(this.types,function(e,o){return i("option",{key:o,domProps:{value:e.toLowerCase()}},[t._v(t._s(e))])}),i("option",{attrs:{value:"custom"}},[t._v("Everything else")])],2)]),i("div",{staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectedProductName"}},[t._v("Product name")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],attrs:{id:"selectedProductName",cols:"30",rows:"4",required:""},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})]),i("div",{staticClass:"alloy-checkbox-field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.locationOn,expression:"locationOn"}],attrs:{id:"selectedLocation",type:"checkbox"},domProps:{checked:Array.isArray(t.locationOn)?t._i(t.locationOn,null)>-1:t.locationOn},on:{change:function(e){var i=t.locationOn,o=e.target,a=!!o.checked;if(Array.isArray(i)){var n=t._i(i,null);o.checked?n<0&&(t.locationOn=i.concat([null])):n>-1&&(t.locationOn=i.slice(0,n).concat(i.slice(n+1)))}else t.locationOn=a}}}),i("label",{attrs:{for:"selectedLocation"}},[t._v("Define a custom position (e.g. back, top, bottom, ect.)")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.locationOn,expression:"locationOn"}],staticClass:"alloy-input-field"},[i("label",{attrs:{for:"selectedLocation"}},[t._v("Location")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.location,expression:"item.location"}],attrs:{id:"selectedLocation",type:"text"},domProps:{value:t.item.location},on:{input:function(e){e.target.composing||t.$set(t.item,"location",e.target.value)}}})]),i("div",{staticClass:"alloy-btn-group"},[t.item.id?i("button",{staticClass:"btn btn--icon",on:{click:function(e){return e.preventDefault(),t.deleteMe(e)}}},[i("span",[t._v("Delete this item")]),i("icon-base",{attrs:{width:"20",height:"20","icon-name":"trash"}},[i("icon-trash")],1)],1):t._e(),t.item.id?i("input",{attrs:{type:"submit",value:"Change",disabled:""==t.item.custom||""==t.item.title}}):i("input",{attrs:{type:"submit",value:"Add",disabled:!t.item.custom||!t.item.title}})])])])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},i8YZ:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".alloy-checkbox-field[data-v-a1fa76fc]{color:#fff;margin-bottom:30px}.alloy-checkbox-field [type=checkbox][data-v-a1fa76fc]{margin-right:15px}.alloy-checkbox-field small[data-v-a1fa76fc]{display:block}",""])},mLW4:function(t,e){t.exports={slugify:function(t){return t.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}}},rKnj:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 24 24","aria-labelledby":t.iconName,role:"presentation"}},[i("title",{attrs:{id:t.iconName,lang:"en"}},[t._v(t._s(t.iconName)+" icon")]),i("g",{attrs:{fill:t.iconColor}},[t._t("default")],2)])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};e.a=a},zTCQ:function(t,e,i){"use strict";e.a={props:{iconName:{type:String,default:"box"},width:{type:[Number,String],default:18},height:{type:[Number,String],default:18},iconColor:{type:String,default:"currentColor"}}}}});