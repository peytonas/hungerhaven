(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit"],{9808:function(t,e,s){},e290:function(t,e,s){"use strict";var r=s("9808"),a=s.n(r);a.a},fb5e:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"editProfile"},[t._m(0),t._m(1),s("hr"),s("div",{attrs:{id:"headingOne"}},[s("div",{attrs:{id:"accordion"}},[s("div",[s("b",[t._v("Name:")]),s("br"),t._v("\n        "+t._s(t.user.name)+"\n      ")]),t._m(2),s("div",{staticClass:"collapse",attrs:{id:"collapseOne","data-parent":"#accordion"}},[s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.editName(e)}}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"string",placeholder:"type name..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._m(3)])])])]),s("hr"),s("div",[s("b",[t._v("Address:")]),s("br"),t._v("\n        "+t._s(t.user.address)+"\n      ")]),t._m(4),s("div",{staticClass:"collapse",attrs:{id:"collapseTwo","data-parent":"#accordion"}},[s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.editAddress(e)}}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form-control",attrs:{type:"string",placeholder:"type address..."},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),t._m(5)])])])]),s("hr"),s("div",[s("b",[t._v("Allergies:")]),s("br"),t._l(t.user.allergies,(function(e){return s("span",{key:e},[t._v("\n          "+t._s(e)+"\n          "),s("span",{staticClass:"logout-button-color cursor",on:{click:function(s){return s.preventDefault(),t.removeAllergy(e)}}},[t._v("x")])])}))],2),t._m(6),s("div",{staticClass:"collapse",attrs:{id:"collapseThree","data-parent":"#accordion"}},[s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.editAllergies(e)}}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.allergies,expression:"allergies"}],staticClass:"form-control",attrs:{type:"string",placeholder:"type allergies..."},domProps:{value:t.allergies},on:{input:function(e){e.target.composing||(t.allergies=e.target.value)}}}),t._m(7)])])])]),s("hr"),s("div",[s("b",[t._v("Phone Number:")]),s("br"),t._v("\n        "+t._s(t.user.phoneNumber)+"\n      ")]),t._m(8),s("div",{staticClass:"collapse",attrs:{id:"collapseFour","data-parent":"#accordion"}},[s("div",[s("form",{on:{submit:function(e){return e.preventDefault(),t.editPhoneNumber(e)}}},[s("div",{staticClass:"input-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"form-control",attrs:{type:"string",placeholder:"type number..."},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),t._m(9)])])])])])]),s("hr"),s("button",{staticClass:"logout-button cursor",on:{click:function(e){return t.goHome()}}},[t._v("Go Home")])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("img",{staticClass:"col-12 image",attrs:{alt:"Hunger Haven Logo",src:s("98c4")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[s("u",[t._v("Your Profile")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",{staticClass:"mb-0"},[s("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseOne"}},[t._v("edit")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"home-button",attrs:{type:"submit"}},[t._v("➕")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",{staticClass:"mb-0"},[s("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseTwo"}},[t._v("edit")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"home-button",attrs:{type:"submit"}},[t._v("➕")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",{staticClass:"mb-0"},[s("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseThree"}},[t._v("edit")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"home-button",attrs:{type:"submit"}},[t._v("➕")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h5",{staticClass:"mb-0"},[s("button",{staticClass:"btn btn-link",attrs:{"data-toggle":"collapse","data-target":"#collapseFour"}},[t._v("edit")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"home-button",attrs:{type:"submit"}},[t._v("➕")])])}],i={name:"editProfile",data(){return{name:"",address:"",allergies:[],phoneNumber:""}},mounted(){this.$store.dispatch("authenticate")},computed:{user(){return this.$store.state.user},newUser(){return{_id:this.user._id,name:this.user.name,address:this.user.address,phoneNumber:this.user.phoneNumber,allergies:this.user.allergies}}},methods:{goHome(){this.$router.push("/home")},editName(){this.newUser.name;let t=this.name;this.newUser.name=t,this.$store.dispatch("editProfile",this.newUser),this.$store.dispatch("authenticate"),this.name=""},editAddress(){this.newUser.address;let t=this.address;this.newUser.address=t,this.$store.dispatch("editProfile",this.newUser),this.$store.dispatch("authenticate"),this.address=""},editAllergies(){this.newUser.allergies.push(this.allergies);let t=this.newUser.allergies;this.newUser.allergies=t,this.$store.dispatch("editProfile",this.newUser),this.$store.dispatch("authenticate"),this.allergies=""},editPhoneNumber(){this.newUser.phoneNumber;let t=this.phoneNumber;this.newUser.phoneNumber=t,this.$store.dispatch("editProfile",this.newUser),this.$store.dispatch("authenticate"),this.phoneNumber=""},removeAllergy(t){this.$store.dispatch("removeAllergy",{allergy:t,user:this.user})}},components:{}},n=i,o=(s("e290"),s("2877")),l=Object(o["a"])(n,r,a,!1,null,"49bf1f2a",null);e["default"]=l.exports}}]);
//# sourceMappingURL=edit.15882d0b.js.map