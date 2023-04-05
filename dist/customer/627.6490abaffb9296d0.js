"use strict";(self.webpackChunkcustomer=self.webpackChunkcustomer||[]).push([[627],{4627:(q,f,s)=>{s.r(f),s.d(f,{MyLearningModule:()=>w});var c=s(6895),u=s(28),o=s(2997),F=s(5698),b=s(4629);const h=(0,o.PH)("[Learnings Resolver] Load All Learnings"),v=(0,o.PH)("[Load Learnings Effect] All Learnings Loaded",(0,o.Ky)()),d=(0,b.H)({selectId:e=>e._id}),Y=d.getInitialState({}),I=(0,o.Lq)(Y,(0,o.on)(v,(e,r)=>d.setAll(r.myLearnings,{...e,allMyLearningsLoaded:!0}))),{selectAll:U,selectEntities:T}=d.getSelectors(),y=(0,o.ZF)("myLearnings"),M=(0,o.P1)(y,U),R=(0,o.P1)(M,e=>e.length),P=(0,o.P1)(y,e=>e.allMyLearningsLoaded),S=(0,o.P1)(y,T);var n=s(4650),l=s(5467),A=s(5931),Z=s(3629);const H=function(e){return["/app/mylearning/id/",e]},z=function(e){return["/app/mylearning/myevaluation/",e]};let B=(()=>{class e{constructor(){this.RAW_URL=Z.N.RAW_URL}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["frontend-card-learning"]],inputs:{learning:"learning",book:"book"},decls:13,vars:12,consts:[[1,"card-book"],[1,"card-container",3,"routerLink"],[1,"upper-container"],[1,"image",3,"src","alt"],[1,"line"],[1,"lower-container"],[1,"toolbar-price"],["title","Claim",1,"toolbar-button",3,"routerLink"],[1,"pi","pi-dollar"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"img",3),n.qZA(),n._UZ(4,"div",4),n.TgZ(5,"div",5)(6,"h2"),n._uU(7),n.qZA()()(),n.TgZ(8,"span",6),n._uU(9),n.ALo(10,"currency"),n.qZA(),n.TgZ(11,"button",7),n._UZ(12,"i",8),n.qZA()()),2&t&&(n.xp6(1),n.Q6J("routerLink",n.VKq(8,H,i.learning._id)),n.xp6(2),n.Q6J("src",null==i.book?null:i.book.image,n.LSH)("alt",null==i.book?null:i.book.image),n.xp6(4),n.Oqu(null==i.book?null:i.book.name),n.xp6(2),n.hij(" ",n.lcZ(10,6,i.learning.price),""),n.xp6(2),n.Q6J("routerLink",n.VKq(10,z,i.learning._id)))},dependencies:[l.rH,c.H9],encapsulation:2}),e})();function J(e,r){if(1&e&&n._UZ(0,"frontend-card-learning",3),2&e){const t=r.$implicit,i=n.oxw(2);n.Q6J("learning",t)("book",i.book(t.book._id))}}function x(e,r){if(1&e&&(n.TgZ(0,"div",1),n.YNc(1,J,1,2,"frontend-card-learning",2),n.ALo(2,"async"),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngForOf",n.lcZ(2,1,t.allMyLearnings$))}}let O=(()=>{class e{constructor(t,i,a,g){this.router=t,this.alertService=i,this.route=a,this.store=g}ngOnInit(){this.route.queryParams.subscribe(t=>{}),this.reload()}reload(){this.allMyLearnings$=this.store.pipe((0,o.Ys)(M)),this.countMyLearnings$=this.store.pipe((0,o.Ys)(R))}book(t){let i;return this.store.pipe((0,o.Ys)((0,u.selectBooksById)(t)),(0,F.q)(1)).subscribe(a=>i=a),i}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.F0),n.Y36(A.c9),n.Y36(l.gz),n.Y36(o.yh))},e.\u0275cmp=n.Xpm({type:e,selectors:[["frontend-my-learning-list"]],decls:1,vars:1,consts:[["class","list-container",4,"ngIf"],[1,"list-container"],[3,"learning","book",4,"ngFor","ngForOf"],[3,"learning","book"]],template:function(t,i){1&t&&n.YNc(0,x,3,3,"div",0),2&t&&n.Q6J("ngIf",i.allMyLearnings$)},dependencies:[c.sg,c.O5,B,c.Ov],encapsulation:2}),e})(),Q=(()=>{class e{constructor(t,i,a,g){this.route=t,this.location=i,this.store=a,this.router=g,this.route.params.subscribe(m=>{m.id?this.store.pipe((0,o.Ys)((e=>(0,o.P1)(S,r=>r[e]))(m.id))).subscribe(C=>{C?this.learning=C:this.router.navigate(["/app/mylearning"])}):this.router.navigate(["/app/mylearning"])})}evaluation(){this.router.navigate([`/app/mylearning/${this.learning._id}/myevaluation`])}back(){this.location.back()}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.gz),n.Y36(c.Ye),n.Y36(o.yh),n.Y36(l.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["frontend-my-learning-view"]],decls:10,vars:2,consts:[[1,"content-container"],[1,"learning-header"],["routerLink","/app/mylearning"],[1,"pi","pi-angle-left"],[1,"card-content"],[3,"innerHTML"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2),n._UZ(3,"i",3),n.TgZ(4,"span"),n._uU(5," Back to My Learning"),n.qZA()()(),n.TgZ(6,"div",4)(7,"h2"),n._uU(8),n.qZA(),n._UZ(9,"div",5),n.qZA()()),2&t&&(n.xp6(8),n.Oqu(i.learning.book.name),n.xp6(1),n.s9C("innerHTML",i.learning.book.content,n.oJD))},dependencies:[l.rH],encapsulation:2}),e})();var E=s(529);let k=(()=>{class e{constructor(t){this.http=t,this.API_URL=Z.N.API_URL}getMyLearnings(){return this.http.get(`${this.API_URL}/mylearning`)}patchMyLearning(t){return this.http.patch(`${this.API_URL}/mylearning/${t}`,{})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(E.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var G=s(8505),V=s(9300),N=s(590),X=s(8746);let p=(()=>{class e{constructor(t){this.store=t,this.loading=!1}resolve(t,i){return this.store.pipe((0,o.Ys)(P),(0,G.b)(a=>{!this.loading&&!a&&(this.loading=!0,this.store.dispatch(h()))}),(0,V.h)(a=>a),(0,N.P)(),(0,X.x)(()=>this.loading=!1))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(o.yh))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})();var L=s(2655),K=s(4351),W=s(4004);let j=(()=>{class e{constructor(t,i,a){this.store=t,this.actions$=i,this.myLearningService=a,this.loadMyLearnings$=(0,L.GW)(()=>this.actions$.pipe((0,L.l4)(h),(0,K.b)(g=>this.myLearningService.getMyLearnings()),(0,W.U)(({result:g})=>v({myLearnings:g??[]}))))}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(o.yh),n.LFG(L.eX),n.LFG(k))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})();const D=[{path:"",component:O,resolve:{books:u.BooksResolver,myLearnings:p}},{path:"id/:id",component:Q,resolve:{books:u.BooksResolver,orders:p}}];let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[k,p],imports:[c.ez,o.Aw.forFeature("myLearnings",I),L.sQ.forFeature([j]),l.Bz.forChild(D),A.As]}),e})()}}]);