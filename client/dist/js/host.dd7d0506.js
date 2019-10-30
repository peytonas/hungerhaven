(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["host"],{"04d8":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"row justify-content-center"},[t._m(1),s("h2",[t._v("Event #"+t._s(t.event.pin))]),s("span",{staticClass:"logout-button-color cursor",on:{click:function(e){return e.preventDefault(),t.cancelEvent(e)}}},[t._v("×")])]),t._m(2),s("div",{staticClass:"row justify-content-around"},[s("div",{staticClass:"col-md-4"},[s("div",{staticClass:"row justify-content-between"},[t._m(3),s("mainCourseModal"),s("sideModal",{attrs:{takenSides:t.takenSides}}),s("drinkModal",{attrs:{takenDrinks:t.takenDrinks}}),s("dessertModal",{attrs:{takenDesserts:t.takenDesserts}}),s("timeModal"),s("placeModal"),s("reqSideModal"),s("reqDrinkModal"),s("reqDessertModal"),t._m(4)],1)])]),s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"mt-2"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header card-bg"},[t._v("Your Potluck:")]),s("EventInfo")],1)])]),s("div",{staticClass:"row justify-content-center"},[s("button",{staticClass:"logout-button",on:{click:t.goHome}},[t._v("Go Home")])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("img",{staticClass:"col-12 image",attrs:{alt:"Hunger Haven Logo",src:s("98c4")}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("audio",{attrs:{id:"oof"}},[n("source",{attrs:{src:s("6329"),type:"audio/mpeg"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("p",[t._v("What are you providing?")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4"},[s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#mainCourseModal"}},[t._v("Main Course")]),s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#sideModal"}},[t._v("Sides")]),s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#drinkModal"}},[t._v("Drinks")]),s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#dessertModal"}},[t._v("Desserts")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4"},[s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#timeModal"}},[t._v("Time")]),s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#placeModal"}},[t._v("Place")]),s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#reqSideModal"}},[t._v("Request Side")]),s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#reqDrinkModal"}},[t._v("Request Drink")]),s("button",{staticClass:"home-button",attrs:{"data-toggle":"modal","data-target":"#reqDessertModal"}},[t._v("Request Dessert")])])}],i=s("3d20"),r=s.n(i),o=s("3ab5"),d=s("42f4"),l=s("6c9c"),c=s("34a0"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"timeModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Date:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDate,expression:"newDate"}],staticClass:"border-left text-center ml-2 mt-2",attrs:{type:"date",min:"2019",max:"3030",id:"hours",placeholder:"2019",required:""},domProps:{value:t.newDate},on:{input:function(e){e.target.composing||(t.newDate=e.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Time:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newTime,expression:"newTime"}],staticClass:"border-left text-center",attrs:{type:"time",id:"time",placeholder:"time",required:""},domProps:{value:t.newTime},on:{input:function(e){e.target.composing||(t.newTime=e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.addTime()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer"})])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("add a time")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],v=s("8055"),m=s.n(v),p={name:"timeModal",props:[],data(){return{newDate:"",newTime:"",newMinutes:"",newAMPM:"",newMonth:"",newDay:"",newYear:"2019",socket:m()("localhost:3001")}},methods:{changeAMPM(t){this.newAMPM=t},changeMonth(t){this.newMonth=t},addTime(){let t="",e=this.newTime,s=parseInt(e.slice(0,2)),n=parseInt(e.slice(3,5));n<10&&(n="0"+n.toString()),s>12?(s-=12,t=s.toString()+":"+n+" PM",this.newTime=t):this.newTime=s.toString()+":"+n+" AM";let a=this.newDate.split("-"),i={eventId:this.$store.state.event._id,pin:this.$store.state.event.pin,hours:this.newTime,minutes:this.newMinutes,ampm:this.newAMPM,year:a[0],month:a[1],day:a[2]};this.$store.dispatch("editEvent",i),this.socket.emit("SEND_CHANGETIME",i)}},computed:{},components:{}},_=p,f=s("2877"),b=Object(f["a"])(_,u,h,!1,null,null,null),C=b.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"placeModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Location:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPlace.place,expression:"newPlace.place"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"add a place...",required:""},domProps:{value:t.newPlace.place},on:{input:function(e){e.target.composing||t.$set(t.newPlace,"place",e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.addPlace()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer"})])])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("add a place")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],D={name:"placeModal",props:[],data(){return{newPlace:{},socket:m()("localhost:3001")}},methods:{addPlace(){this.newPlace.eventId=this.$store.state.event._id,this.newPlace.pin=this.$store.state.event.pin,this.$store.dispatch("editEvent",this.newPlace),this.socket.emit("SEND_CHANGEPLACE",{newPlace:this.newPlace.place,eventId:this.$store.state.event._id,pin:this.$store.state.event.pin}),this.newPlace=""}},computed:{},components:{}},w=D,E=Object(f["a"])(w,g,k,!1,null,null,null),$=E.exports,q=s("a155"),M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"reqSideModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Sides:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newSide,expression:"newSide"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"add a side...",required:""},domProps:{value:t.newSide},on:{input:function(e){e.target.composing||(t.newSide=e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.reqSide()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer"})])])])},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Request a side")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],I={name:"reqSideModal",props:[],data(){return{newSide:"",socket:m()("localhost:3001")}},methods:{reqSide(){this.event.reqSides.push(this.newSide),this.$store.dispatch("editEvent",{reqSides:this.event.reqSides,eventId:this.event._id,pin:this.event.pin}),this.socket.emit("SEND_REQSIDE",{reqSide:this.newSide,eventId:this.event._id,pin:this.event.pin}),this.newSide=""}},computed:{event(){return this.$store.state.event}},components:{}},x=I,y=Object(f["a"])(x,M,S,!1,null,null,null),N=y.exports,P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"reqDrinkModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Drinks:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDrink,expression:"newDrink"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"add a drink...",required:""},domProps:{value:t.newDrink},on:{input:function(e){e.target.composing||(t.newDrink=e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.reqDrink()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer"})])])])},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Request a drink")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],T={name:"reqDrinkModal",props:[],data(){return{newDrink:"",socket:m()("localhost:3001")}},methods:{reqDrink(){this.event.reqDrinks.push(this.newDrink),this.$store.dispatch("editEvent",{reqDrinks:this.event.reqDrinks,eventId:this.event._id,pin:this.event.pin}),this.socket.emit("SEND_REQDRINK",{reqDrink:this.newDrink,eventId:this.event._id,pin:this.event.pin}),this.newDrink=""}},computed:{event(){return this.$store.state.event}},components:{}},A=T,O=Object(f["a"])(A,P,R,!1,null,null,null),j=O.exports,G=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"reqDessertModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Desserts:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDessert,expression:"newDessert"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"add a dessert...",required:""},domProps:{value:t.newDessert},on:{input:function(e){e.target.composing||(t.newDessert=e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.reqDessert()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer"})])])])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("Request a dessert")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],H={name:"reqDessertModal",props:[],data(){return{newDessert:"",socket:m()("localhost:3001")}},methods:{reqDessert(){this.event.reqDesserts.push(this.newDessert),this.$store.dispatch("editEvent",{reqDesserts:this.event.reqDesserts,eventId:this.event._id,pin:this.event.pin}),this.socket.emit("SEND_REQDESSERT",{reqDessert:this.newDessert,eventId:this.event._id,pin:this.event.pin}),this.newDessert=""}},computed:{event(){return this.$store.state.event}},components:{}},F=H,Q=Object(f["a"])(F,G,B,!1,null,null,null),K=Q.exports,L={name:"hostView",mounted(){this.$store.dispatch("authenticate"),this.$store.dispatch("getEventInfo",this.$route.params).then(t=>{this.event.attendees.forEach(t=>{t.sides.forEach(t=>{this.takenSides.push(t)})}),this.event.attendees.forEach(t=>{t.drinks.forEach(t=>{this.takenDrinks.push(t)})}),this.event.attendees.forEach(t=>{t.desserts.forEach(t=>{this.takenDesserts.push(t)})})})},props:[],methods:{goHome(){this.$router.push("/home")},cancelEvent(){let t=document.getElementById("oof");const e=r.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:2e3});r.a.fire({title:"Are you sure?",text:"People are relying on you for food and entertainment...",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, cancel the potluck."}).then(s=>{s.value&&(t.play(),setTimeout(()=>{e.fire("Cancelled Potluck!","","success"),this.$store.dispatch("cancelEvent",this.event).then(t=>{this.$router.push("/home")})},500))})}},data(){return{takenSides:[],takenDesserts:[],takenDrinks:[]}},computed:{user(){return this.$store.state.user},event(){return this.$store.state.event},attendees(){return this.$store.state.event.attendees},allergies(){let t=[];for(let e=0;e<this.attendees.length;e++)for(let s=0;s<this.attendees[e].allergies.length;s++)t.push(this.attendees[e].allergies[s]);return t}},components:{mainCourseModal:o["a"],sideModal:d["a"],drinkModal:l["a"],dessertModal:c["a"],timeModal:C,placeModal:$,EventInfo:q["a"],reqSideModal:N,reqDrinkModal:j,reqDessertModal:K}},U=L,Y=(s("86bf"),Object(f["a"])(U,n,a,!1,null,null,null));e["default"]=Y.exports},"34a0":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"dessertModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Desserts:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDessert,expression:"newDessert"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"add a main...",required:""},domProps:{value:t.newDessert},on:{input:function(e){e.target.composing||(t.newDessert=e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.addDessert()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer text-left"},[s("p",[t._v("\n          The host has requested these desserts:\n          "),s("br"),t._l(t.event.reqDesserts,(function(e){return s("span",{key:e,on:{click:function(s){return t.addDessertFromReq(e)}}},[-1==t.takenDesserts.indexOf(e)?s("span",[t._v("\n              • "+t._s(e)+"\n              "),s("br")]):t._e(),s("br")])}))],2)])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("add a dessert")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],i=s("8055"),r=s.n(i),o={name:"dessertModal",props:["takenDesserts"],data(){return{newDessert:"",socket:r()("localhost:3001")}},methods:{addDessert(){this.event.desserts.push(this.newDessert),this.attendee.desserts.push(this.newDessert),this.$store.dispatch("editEvent",{desserts:this.event.desserts,eventId:this.event._id,pin:this.event.pin}),this.$store.dispatch("bringingThings",{sides:this.attendee.sides,drinks:this.attendee.drinks,desserts:this.attendee.desserts,eventId:this.event._id}),this.socket.emit("SEND_BRINGDESSERT",{dessert:this.newDessert,eventId:this.event._id,pin:this.event.pin,attendeeId:this.attendee._id}),this.newDessert=""},addDessertFromReq(t){this.event.desserts.push(t);let e=this.event.reqDesserts.indexOf(t);this.event.reqDesserts.splice(e,1),this.attendee.desserts.push(t),this.$store.dispatch("editEvent",{desserts:this.event.desserts,reqDesserts:this.event.reqDesserts,eventId:this.event._id,pin:this.event.pin}),this.$store.dispatch("bringingThings",{sides:this.event.sides,drinks:this.attendee.drinks,desserts:this.attendee.desserts,eventId:this.event._id})}},computed:{event(){return this.$store.state.event},attendee(){for(let t in this.event.attendees)if(this.event.attendees[t].userId==this.$store.state.user._id)return this.event.attendees[t]}},components:{}},d=o,l=s("2877"),c=Object(l["a"])(d,n,a,!1,null,null,null);e["a"]=c.exports},"3ab5":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"mainCourseModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Main Course:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newMainCourse,expression:"newMainCourse"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"add a main...",required:""},domProps:{value:t.newMainCourse},on:{input:function(e){e.target.composing||(t.newMainCourse=e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.addMainCourse()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer"})])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("add a main course")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],i=s("8055"),r=s.n(i),o={name:"mainCourseModal",props:[],data(){return{newMainCourse:"",socket:r()("localhost:3001")}},methods:{addMainCourse(){let t={eventId:this.$store.state.event._id,pin:this.$store.state.event.pin,maincourse:this.newMainCourse};this.$store.dispatch("editEvent",t),this.socket.emit("SEND_CHANGEMAINCOURSE",{maincourse:this.newMainCourse,eventId:this.$store.state.event._id,pin:this.$store.state.event.pin}),this.newMainCourse=""}},computed:{},components:{}},d=o,l=s("2877"),c=Object(l["a"])(d,n,a,!1,null,null,null);e["a"]=c.exports},"3eec":function(t,e,s){},"42f4":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"sideModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Sides:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newSide,expression:"newSide"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"add a side...",required:""},domProps:{value:t.newSide},on:{input:function(e){e.target.composing||(t.newSide=e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.addSide()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer text-left"},[s("p",[t._v("\n          The host has requested these sides:\n          "),s("br"),t._l(t.event.reqSides,(function(e){return s("span",{key:e,on:{click:function(s){return t.addSideFromReq(e)}}},[-1==t.takenSides.indexOf(e)?s("span",[t._v("\n              • "+t._s(e)+"\n              "),s("br")]):t._e()])}))],2)])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("add a side")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],i=s("8055"),r=s.n(i),o={name:"sideModal",props:["takenSides"],data(){return{newSide:"",socket:r()("localhost:3001")}},methods:{addSide(){this.event.sides.push(this.newSide),this.attendee.sides.push(this.newSide),this.$store.dispatch("editEvent",{sides:this.event.sides,eventId:this.event._id,pin:this.event.pin}),this.$store.dispatch("bringingThings",{sides:this.attendee.sides,drinks:this.attendee.drinks,desserts:this.attendee.desserts,eventId:this.event._id}),this.socket.emit("SEND_BRINGSIDE",{side:this.newSide,eventId:this.event._id,pin:this.event.pin,attendeeId:this.attendee._id}),this.newSide=""},addSideFromReq(t){this.event.sides.push(t);let e=this.event.reqSides.indexOf(t);this.event.reqSides.splice(e,1),this.attendee.sides.push(t),this.$store.dispatch("editEvent",{sides:this.event.sides,reqSides:this.event.reqSides,eventId:this.event._id,pin:this.event.pin}),this.$store.dispatch("bringingThings",{sides:this.event.sides,drinks:this.attendee.drinks,desserts:this.attendee.desserts,eventId:this.event._id})}},computed:{event(){return this.$store.state.event},attendee(){for(let t in this.event.attendees)if(this.event.attendees[t].userId==this.$store.state.user._id)return this.event.attendees[t]}},mounted(){},components:{}},d=o,l=s("2877"),c=Object(l["a"])(d,n,a,!1,null,null,null);e["a"]=c.exports},6329:function(t,e,s){t.exports=s.p+"media/roblox-oof.1b73a78c.mp3"},"6c9c":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"drinkModal",tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"title"}},[t._v("Drinks:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newDrink,expression:"newDrink"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"add a drink...",required:""},domProps:{value:t.newDrink},on:{input:function(e){e.target.composing||(t.newDrink=e.target.value)}}})]),s("button",{staticClass:"register-button",attrs:{"data-dismiss":"modal"},on:{click:function(e){return t.addDrink()}}},[t._v("submit")])])]),s("div",{staticClass:"modal-footer text-left"},[s("p",[t._v("\n          The host has requested these drinks:\n          "),s("br"),t._l(t.event.reqDrinks,(function(e){return s("span",{key:e,on:{click:function(s){return t.addDrinkFromReq(e)}}},[-1==t.takenDrinks.indexOf(e)?s("span",[t._v("\n              • "+t._s(e)+"\n              "),s("br")]):t._e()])}))],2)])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title"},[t._v("add a drink")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],i=s("8055"),r=s.n(i),o={name:"drinkModal",props:["takenDrinks"],data(){return{newDrink:"",socket:r()("localhost:3001")}},methods:{addDrink(){this.event.drinks.push(this.newDrink),this.attendee.drinks.push(this.newDrink),this.$store.dispatch("editEvent",{sides:this.event.sides,drinks:this.event.drinks,desserts:this.event.desserts,eventId:this.event._id,pin:this.event.pin}),this.$store.dispatch("bringingThings",{sides:this.event.sides,drinks:this.attendee.drinks,desserts:this.attendee.desserts,eventId:this.event._id}),this.socket.emit("SEND_BRINGDRINK",{drink:this.newDrink,eventId:this.event._id,pin:this.event.pin,attendeeId:this.attendee._id}),this.newDrink=""},addDrinkFromReq(t){this.event.drinks.push(t);let e=this.event.reqDrinks.indexOf(t);this.event.reqDrinks.splice(e,1),this.attendee.drinks.push(t),this.$store.dispatch("editEvent",{drinks:this.event.drinks,reqDrinks:this.event.reqDrinks,eventId:this.event._id,pin:this.event.pin}),this.$store.dispatch("bringingThings",{sides:this.event.sides,drinks:this.attendee.drinks,desserts:this.attendee.desserts,eventId:this.event._id})}},computed:{event(){return this.$store.state.event},attendee(){for(let t in this.event.attendees)if(this.event.attendees[t].userId==this.$store.state.user._id)return this.event.attendees[t]}},components:{}},d=o,l=s("2877"),c=Object(l["a"])(d,n,a,!1,null,null,null);e["a"]=c.exports},"7e3e":function(t,e,s){"use strict";var n=s("8c8b"),a=s.n(n);a.a},"86bf":function(t,e,s){"use strict";var n=s("3eec"),a=s.n(n);a.a},"8c8b":function(t,e,s){},a155:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"eventInfo"},[s("div",{staticClass:"card-body row"},[s("p",{staticClass:"card-text col-6"},[s("b",[t._v("Main Course:")]),t._v("\n      "+t._s(this.event.maincourse)+"\n      "),s("br"),s("br"),s("b",[t._v("Sides:")]),s("br"),t._l(this.attendees,(function(e){return s("span",t._l(e.sides,(function(n){return"accepted"==e.status?s("span",[t._v("\n          • "+t._s(n)+"\n          "),s("br")]):t._e()})),0)})),s("br"),s("b",[t._v("Drinks:")]),s("br"),t._l(this.attendees,(function(e){return s("span",t._l(e.drinks,(function(n){return"accepted"==e.status?s("span",[t._v("\n          • "+t._s(n)+"\n          "),s("br")]):t._e()})),0)})),s("br"),s("b",[t._v("Desserts:")]),s("br"),t._l(this.attendees,(function(e){return s("span",t._l(e.desserts,(function(n){return"accepted"==e.status?s("span",[t._v("\n          • "+t._s(n)+"\n          "),s("br")]):t._e()})),0)}))],2),s("p",{staticClass:"card-text col-6"},[s("b",[t._v("Time:")]),s("br"),t._v("\n      "+t._s(this.event.month)+"/"+t._s(this.event.day)+"/"+t._s(this.event.year)+"\n      "),s("br"),t._v("\n      "+t._s(this.event.hours)+t._s(this.event.minutes)+" "+t._s(this.event.ampm)+"\n      "),s("br"),s("b",[t._v("Place:")]),s("br"),t._v("\n      "+t._s(this.event.place)+"\n      "),s("br"),s("b",[t._v("Requested Sides:")]),s("br"),t._l(this.event.reqSides,(function(e){return s("span",[t._v("\n        • "+t._s(e)+"\n        "),s("br")])})),s("br"),s("b",[t._v("Requested Drinks:")]),s("br"),t._l(this.event.reqDrinks,(function(e){return s("span",[t._v("\n        • "+t._s(e)+"\n        "),s("br")])})),s("br"),s("b",[t._v("Requested Desserts:")]),s("br"),t._l(this.event.reqDesserts,(function(e){return s("span",[t._v("\n        • "+t._s(e)+"\n        "),s("br")])}))],2),s("p",{staticClass:"card-text col-6"},t._l(this.event.attendees,(function(e){return s("span",{key:e.userId},[s("div",{staticClass:"attendee-button",attrs:{"data-toggle":"modal","data-target":"#AttendeeModal"+e._id}},[s("b",[t._v(t._s(e.name)+":")])]),t._v("\n        "+t._s(e.status)+"\n        "),s("AttendeeModal",{attrs:{attendeeprop:e}}),s("br")],1)})),0),s("div",{staticClass:"col-6"},[s("div",{staticClass:"dropdown"},[t._m(0),s("ul",{staticClass:"dropdown-menu blue-grade",attrs:{role:"menu","aria-labelledby":"menu1"}},t._l(this.allergies,(function(e){return s("li",{key:e,staticClass:"d-flex justify-content-center text-center",attrs:{role:"presentation"}},[t._v("• "+t._s(e))])})),0)])])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn blue-grade dropdown-toggle",attrs:{id:"menu1",type:"button","data-toggle":"dropdown"}},[t._v("\n          Allergies\n          "),s("span",{staticClass:"caret"})])}],i=s("8055"),r=s.n(i),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal fade",attrs:{id:"AttendeeModal"+t.attendeeprop._id,tabindex:"-1",role:"dialog"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("h5",[t._v("Name:")]),s("h5",[t._v(t._s(t.attendeeprop.name))]),s("br"),s("h5",[t._v("Phone Number:")]),s("h5",[t._v(t._s(t.attendeeprop.phoneNumber))]),s("br"),s("h5",[t._v("Allergies:")]),t._l(t.attendeeprop.allergies,(function(e){return s("h5",[t._v(t._s(e))])})),s("br"),s("h5",[t._v("Attending:")]),s("h5",[t._v(t._s(t.attendeeprop.status))]),s("br"),s("h5",[t._v("# of Plus Ones:")]),s("h5",[t._v(t._s(t.attendeeprop.plusOnes))])],2)])])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h4",{staticClass:"modal-title"},[t._v("Personal Info.")]),s("button",{staticClass:"logout-button",attrs:{"data-dismiss":"modal"}},[t._v("×")])])}],l={name:"component",props:["attendeeprop"],data(){return{}},computed:{event(){return this.$store.state.event},attendees(){return this.$store.state.event.attendees}},methods:{},components:{}},c=l,u=s("2877"),h=Object(u["a"])(c,o,d,!1,null,"bcf5477e",null),v=h.exports,m={name:"eventInfo",data(){return{socket:r()("localhost:3001")}},computed:{event(){return this.$store.state.event},attendees(){return this.$store.state.event.attendees},allergies(){if(this.attendees){let t=[];for(let e=0;e<this.attendees.length;e++)for(let s=0;s<this.attendees[e].allergies.length;s++)t.push(this.attendees[e].allergies[s]);return t}return{}},attendee(){for(let t in this.event.attendees)if(this.event.attendees[t].userId==this.$store.state.user._id)return this.event.attendees[t]}},methods:{},mounted(){this.socket.on("ADDATTENDEE",t=>{this.$store.state.event.attendees.push(t.newAttendee)}),this.socket.on("CHANGESTATUS",t=>{let e=this.$store.state.event.attendees.find(e=>e._id==t.attendeeId);e.status=t.status}),this.socket.on("BRINGSIDE",t=>{let e=this.$store.state.event.attendees.find(e=>e._id==t.attendeeId);e.sides.push(t.side)}),this.socket.on("BRINGDRINK",t=>{let e=this.$store.state.event.attendees.find(e=>e._id==t.attendeeId);e.drinks.push(t.drink)}),this.socket.on("BRINGDESSERT",t=>{let e=this.$store.state.event.attendees.find(e=>e._id==t.attendeeId);e.desserts.push(t.dessert)}),this.socket.on("CHANGEMAINCOURSE",t=>{this.$store.state.event.maincourse=t.maincourse}),this.socket.on("CHANGETIME",t=>{this.$store.state.event.year=t.year,this.$store.state.event.month=t.month,this.$store.state.event.day=t.day,this.$store.state.event.hours=t.hours}),this.socket.on("CHANGEPLACE",t=>{this.$store.state.event.place=t.newPlace}),this.socket.on("REQSIDE",t=>{this.$store.state.event.reqSides.push(t.reqSide)}),this.socket.on("REQDRINK",t=>{this.$store.state.event.reqDrinks.push(t.reqDrink)}),this.socket.on("REQDESSERT",t=>{this.$store.state.event.reqDesserts.push(t.reqDessert)})},components:{AttendeeModal:v}},p=m,_=(s("7e3e"),Object(u["a"])(p,n,a,!1,null,"4a499608",null));e["a"]=_.exports}}]);
//# sourceMappingURL=host.dd7d0506.js.map