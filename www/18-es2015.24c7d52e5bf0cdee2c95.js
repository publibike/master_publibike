(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"f+ep":function(l,n,u){"use strict";u.r(n),u.d(n,"LoginPageModuleNgFactory",(function(){return I}));var e=u("8Y7J");class o{}var r=u("pMnS"),s=u("SVse"),t=u("MKJQ"),i=u("sZkV"),a=u("s7LF"),b=u("mrSG");class g{constructor(l,n,u,e,o){this.formBuilder=l,this.authServices=n,this.navCtrl=u,this.loadingCtrl=e,this.storage=o,this.validation_messages={email:[{type:"required",message:" El correo es requerido"},{type:"pattern",message:"Ingrese un correo v\xe1lido"}],password:[{type:"required",message:" El password es requerido"},{type:"minlength",message:"Minimo 5 letras para el password"}]},this.errorMessage="",this.loginForm=this.formBuilder.group({email:new a.c("",a.l.compose([a.l.required,a.l.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new a.c("",a.l.compose([a.l.required,a.l.minLength(5)]))})}ngOnInit(){}presentLoading(){return Object(b.a)(this,void 0,void 0,(function*(){this.loading=yield this.loadingCtrl.create({cssClass:"my-custom-class",message:"Cargando..."}),yield this.loading.present()}))}loginUser(l){this.presentLoading(),this.authServices.loginUser(l).then(l=>Object(b.a)(this,void 0,void 0,(function*(){this.errorMessage="",this.storage.set("isUserLoggedIn",!0),this.storage.set("userId",l),this.loading.dismiss(),this.navCtrl.navigateForward("/menu/home")}))).catch(l=>{this.loading.dismiss(),console.log("ERROR",l.name),console.log("Error",typeof l.name),"SyntaxError"==l.name?this.errorMessage="Correo y/o clave incorrecta":"TypeError"===l.name?(console.log("HELLO"),this.errorMessage="Problemas conectando al servidor"):(console.log("hola"),this.errorMessage=l)})}goToRegister(){this.navCtrl.navigateForward("/register")}}var c=u("fKRy"),d=u("xgBC"),m=e.rb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Sb(0,[(l()(),e.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,1,"p",[["id","alertUser"]],null,null,null,null,null)),(l()(),e.Pb(2,null,[" ",""]))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.message)}))}function h(l){return e.Sb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.cb(16777216,null,null,1,null,p)),e.sb(2,16384,null,0,s.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.cb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("email").hasError(n.context.$implicit.type)&&(u.loginForm.get("email").dirty||u.loginForm.get("email").touched))}),null)}function v(l){return e.Sb(0,[(l()(),e.tb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.tb(1,0,null,null,1,"p",[["id","alertUser"]],null,null,null,null,null)),(l()(),e.Pb(2,null,[" ",""]))],null,(function(l,n){l(n,2,0,n.parent.context.$implicit.message)}))}function f(l){return e.Sb(0,[(l()(),e.tb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.cb(16777216,null,null,1,null,v)),e.sb(2,16384,null,0,s.k,[e.N,e.K],{ngIf:[0,"ngIf"]},null),(l()(),e.cb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.loginForm.get("password").hasError(n.context.$implicit.type)&&(u.loginForm.get("password").dirty||u.loginForm.get("password").touched))}),null)}function C(l){return e.Sb(0,[(l()(),e.tb(0,0,null,null,40,"ion-content",[],null,null,null,t.x,t.d)),e.sb(1,49152,null,0,i.s,[e.h,e.l,e.z],null,null),(l()(),e.tb(2,0,null,0,3,"div",[["class","header-index"]],null,null,null,null,null)),(l()(),e.tb(3,0,null,null,0,"img",[["class","img-header"],["src","assets/img/background-publibike.jpg"]],null,null,null,null,null)),(l()(),e.tb(4,0,null,null,1,"div",[["class","logo-publibike-in"]],null,null,null,null,null)),(l()(),e.tb(5,0,null,null,0,"img",[["src","assets/img/logo-ekobike.png"]],null,null,null,null,null)),(l()(),e.Pb(-1,0,["` "])),(l()(),e.tb(7,0,null,0,33,"form",[["class","form-ui"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,r=l.component;return"submit"===n&&(o=!1!==e.Hb(l,9).onSubmit(u)&&o),"reset"===n&&(o=!1!==e.Hb(l,9).onReset()&&o),"ngSubmit"===n&&(o=!1!==r.loginUser(r.loginForm.value)&&o),o}),null,null)),e.sb(8,16384,null,0,a.p,[],null,null),e.sb(9,540672,null,0,a.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Kb(2048,null,a.a,null,[a.e]),e.sb(11,16384,null,0,a.j,[[4,a.a]],null,null),(l()(),e.tb(12,0,null,null,8,"ion-item",[["color","secondary"]],null,null,null,t.C,t.i)),e.sb(13,49152,null,0,i.F,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.tb(14,0,null,0,6,"ion-input",[["color","tertiary"],["formControlName","email"],["placeholder","Correo"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Hb(l,15)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Hb(l,15)._handleInputEvent(u.target)&&o),o}),t.B,t.h)),e.sb(15,4341760,null,0,i.Ib,[e.r,e.l],null,null),e.Kb(1024,null,a.g,(function(l){return[l]}),[i.Ib]),e.sb(17,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.o]],{name:[0,"name"]},null),e.Kb(2048,null,a.h,null,[a.d]),e.sb(19,16384,null,0,a.i,[[4,a.h]],null,null),e.sb(20,49152,null,0,i.E,[e.h,e.l,e.z],{color:[0,"color"],placeholder:[1,"placeholder"]},null),(l()(),e.tb(21,0,null,null,2,"div",[["class","validation-error"]],null,null,null,null,null)),(l()(),e.cb(16777216,null,null,1,null,h)),e.sb(23,278528,null,0,s.j,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(24,0,null,null,8,"ion-item",[["color","secondary"]],null,null,null,t.C,t.i)),e.sb(25,49152,null,0,i.F,[e.h,e.l,e.z],{color:[0,"color"]},null),(l()(),e.tb(26,0,null,0,6,"ion-input",[["color","tertiary"],["formControlName","password"],["placeholder","Contrase\xf1a"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0;return"ionBlur"===n&&(o=!1!==e.Hb(l,27)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==e.Hb(l,27)._handleInputEvent(u.target)&&o),o}),t.B,t.h)),e.sb(27,4341760,null,0,i.Ib,[e.r,e.l],null,null),e.Kb(1024,null,a.g,(function(l){return[l]}),[i.Ib]),e.sb(29,671744,null,0,a.d,[[3,a.a],[8,null],[8,null],[6,a.g],[2,a.o]],{name:[0,"name"]},null),e.Kb(2048,null,a.h,null,[a.d]),e.sb(31,16384,null,0,a.i,[[4,a.h]],null,null),e.sb(32,49152,null,0,i.E,[e.h,e.l,e.z],{color:[0,"color"],placeholder:[1,"placeholder"],type:[2,"type"]},null),(l()(),e.tb(33,0,null,null,2,"div",[["class","validation-error"]],null,null,null,null,null)),(l()(),e.cb(16777216,null,null,1,null,f)),e.sb(35,278528,null,0,s.j,[e.N,e.K,e.s],{ngForOf:[0,"ngForOf"]},null),(l()(),e.tb(36,0,null,null,1,"p",[["id","alertUser"]],null,null,null,null,null)),(l()(),e.Pb(37,null,[" ",""])),(l()(),e.tb(38,0,null,null,2,"ion-button",[["class","button-login"],["color","primary"],["text-center",""],["type","Submit"]],null,null,null,t.v,t.b)),e.sb(39,49152,null,0,i.i,[e.h,e.l,e.z],{color:[0,"color"],disabled:[1,"disabled"],type:[2,"type"]},null),(l()(),e.Pb(-1,0,[" INICIAR SESI\xd3N "])),(l()(),e.tb(41,0,null,null,5,"ion-footer",[],null,null,null,t.y,t.e)),e.sb(42,49152,null,0,i.x,[e.h,e.l,e.z],null,null),(l()(),e.tb(43,0,null,0,3,"div",[["class","new-user"]],null,null,null,null,null)),(l()(),e.tb(44,0,null,null,2,"ion-button",[["class","register"],["expand","full"],["full",""],["outline",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToRegister()&&e),e}),t.v,t.b)),e.sb(45,49152,null,0,i.i,[e.h,e.l,e.z],{expand:[0,"expand"]},null),(l()(),e.Pb(-1,0,[" \xbfEres un usuario nuevo? "]))],(function(l,n){var u=n.component;l(n,9,0,u.loginForm),l(n,13,0,"secondary"),l(n,17,0,"email"),l(n,20,0,"tertiary","Correo"),l(n,23,0,u.validation_messages.email),l(n,25,0,"secondary"),l(n,29,0,"password"),l(n,32,0,"tertiary","Contrase\xf1a","password"),l(n,35,0,u.validation_messages.password),l(n,39,0,"primary",!u.loginForm.valid,"Submit"),l(n,45,0,"full")}),(function(l,n){var u=n.component;l(n,7,0,e.Hb(n,11).ngClassUntouched,e.Hb(n,11).ngClassTouched,e.Hb(n,11).ngClassPristine,e.Hb(n,11).ngClassDirty,e.Hb(n,11).ngClassValid,e.Hb(n,11).ngClassInvalid,e.Hb(n,11).ngClassPending),l(n,14,0,e.Hb(n,19).ngClassUntouched,e.Hb(n,19).ngClassTouched,e.Hb(n,19).ngClassPristine,e.Hb(n,19).ngClassDirty,e.Hb(n,19).ngClassValid,e.Hb(n,19).ngClassInvalid,e.Hb(n,19).ngClassPending),l(n,26,0,e.Hb(n,31).ngClassUntouched,e.Hb(n,31).ngClassTouched,e.Hb(n,31).ngClassPristine,e.Hb(n,31).ngClassDirty,e.Hb(n,31).ngClassValid,e.Hb(n,31).ngClassInvalid,e.Hb(n,31).ngClassPending),l(n,37,0,u.errorMessage)}))}function y(l){return e.Sb(0,[(l()(),e.tb(0,0,null,null,1,"app-login",[],null,null,null,C,m)),e.sb(1,114688,null,0,g,[a.b,c.a,i.Eb,i.Bb,d.b],null,null)],(function(l,n){l(n,1,0)}),null)}var F=e.pb("app-login",g,y,{},{},[]),H=u("iInd");class w{}var I=e.qb(o,[],(function(l){return e.Eb([e.Fb(512,e.j,e.V,[[8,[r.a,F]],[3,e.j],e.x]),e.Fb(4608,s.m,s.l,[e.u]),e.Fb(4608,a.n,a.n,[]),e.Fb(4608,i.b,i.b,[e.z,e.g]),e.Fb(4608,i.Db,i.Db,[i.b,e.j,e.r]),e.Fb(4608,i.Gb,i.Gb,[i.b,e.j,e.r]),e.Fb(4608,a.b,a.b,[]),e.Fb(1073742336,s.b,s.b,[]),e.Fb(1073742336,a.m,a.m,[]),e.Fb(1073742336,a.f,a.f,[]),e.Fb(1073742336,i.zb,i.zb,[]),e.Fb(1073742336,H.n,H.n,[[2,H.s],[2,H.m]]),e.Fb(1073742336,w,w,[]),e.Fb(1073742336,a.k,a.k,[]),e.Fb(1073742336,o,o,[]),e.Fb(1024,H.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);