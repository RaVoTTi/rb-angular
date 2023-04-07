"use strict";(self.webpackChunkcustomer=self.webpackChunkcustomer||[]).push([[676],{1676:(S,c,n)=>{n.r(c),n.d(c,{MyOrdersModule:()=>C});var i=n(6895),s=n(5467),l=n(5698),e=n(4650),m=n(3629),f=n(529);let u=(()=>{class r{constructor(t){this.http=t,this.API_URL=m.N.API_URL}getMyOrders(){return this.http.get(`${this.API_URL}/myorder`)}getMyOrderById(t){return this.http.get(`${this.API_URL}/myorder/${t}`)}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(f.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var a=n(1743),Z=n(3470);function g(r,o){1&r&&(e.TgZ(0,"th"),e._uU(1,"Date"),e.qZA())}function h(r,o){if(1&r&&(e.TgZ(0,"td"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&r){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,t.dateCreated))}}const y=function(r){return["/app/myorders/id/",r]};function A(r,o){if(1&r&&(e.TgZ(0,"tr")(1,"td")(2,"a",8),e._uU(3),e.qZA()(),e.TgZ(4,"td"),e._uU(5),e.ALo(6,"titlecase"),e.qZA(),e.YNc(7,h,3,3,"td",4),e.TgZ(8,"td"),e._uU(9),e.ALo(10,"titlecase"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"currency"),e.qZA()()),2&r){const t=o.$implicit,d=e.oxw(2);e.xp6(2),e.Q6J("routerLink",e.VKq(12,y,t._id)),e.xp6(1),e.hij("",t._id.slice(-10)," "),e.xp6(2),e.Oqu(e.lcZ(6,6,t.book.name)),e.xp6(2),e.Q6J("ngIf",d.screenWidth>700),e.xp6(2),e.hij("",e.lcZ(10,8,t.condition)," "),e.xp6(3),e.Oqu(e.lcZ(13,10,t.price))}}function O(r,o){if(1&r&&(e.TgZ(0,"div",5)(1,"table",6)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Order id"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Name"),e.qZA(),e.YNc(8,g,2,0,"th",4),e.TgZ(9,"th"),e._uU(10,"Condition"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Price"),e.qZA()()(),e.TgZ(13,"tbody"),e.YNc(14,A,14,14,"tr",7),e.qZA()()()),2&r){const t=e.oxw();e.xp6(8),e.Q6J("ngIf",t.screenWidth>700),e.xp6(6),e.Q6J("ngForOf",t.orders)}}function U(r,o){1&r&&e._UZ(0,"frontend-spinner")}let v=(()=>{class r{constructor(t){this.myOrdersService=t}ngOnInit(){this.myOrdersService.getMyOrders().pipe((0,l.q)(1)).subscribe(({result:t})=>{t&&(this.orders=t)})}onWindowResize(){this.screenWidth=window.innerWidth}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(u))},r.\u0275cmp=e.Xpm({type:r,selectors:[["frontend-my-orders-list"]],hostBindings:function(t,d){1&t&&e.NdJ("resize",function(I){return d.onWindowResize(I)},!1,e.Jf7)},decls:5,vars:2,consts:[["title","Orders"],[1,"order"],[1,"container-fluid"],["class","order-table",4,"ngIf"],[4,"ngIf"],[1,"order-table"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,d){1&t&&(e._UZ(0,"frontend-sub-nav",0),e.TgZ(1,"section",1)(2,"div",2),e.YNc(3,O,15,2,"div",3),e.YNc(4,U,1,0,"frontend-spinner",4),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngIf",d.orders),e.xp6(1),e.Q6J("ngIf",!d.orders))},dependencies:[i.sg,i.O5,a.O,Z.A,s.rH,i.rS,i.H9,i.uU],encapsulation:2}),r})();function T(r,o){if(1&r&&(e.TgZ(0,"div",5)(1,"div",6)(2,"div",7),e._UZ(3,"img",8),e.qZA(),e.TgZ(4,"div",9)(5,"div",10)(6,"table",11)(7,"tbody")(8,"tr")(9,"td"),e._uU(10,"ROBIN BOOK LLC"),e.qZA()(),e.TgZ(11,"tr")(12,"td"),e._uU(13,"Casper, WY 82601, US"),e.qZA()(),e.TgZ(14,"tr")(15,"td"),e._uU(16,"www.robinboook.com "),e.qZA()()()()(),e.TgZ(17,"div",10)(18,"table",11)(19,"tbody")(20,"tr")(21,"th"),e._uU(22,"Date:"),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.ALo(25,"date"),e.qZA()(),e.TgZ(26,"tr")(27,"th"),e._uU(28,"Order#:"),e.qZA(),e.TgZ(29,"td"),e._uU(30),e.qZA()(),e.TgZ(31,"tr")(32,"th"),e._uU(33,"Sold To:"),e.qZA(),e.TgZ(34,"td"),e._uU(35),e.ALo(36,"titlecase"),e.ALo(37,"titlecase"),e.qZA()()()()()(),e._UZ(38,"hr",12),e.TgZ(39,"table",13)(40,"thead")(41,"tr")(42,"th"),e._uU(43,"Item "),e.qZA(),e.TgZ(44,"th"),e._uU(45,"Ordered"),e.qZA(),e.TgZ(46,"th",14),e._uU(47,"Quantity"),e.qZA(),e.TgZ(48,"th"),e._uU(49,"Price"),e.qZA(),e.TgZ(50,"th"),e._uU(51,"Amount"),e.qZA()()(),e.TgZ(52,"tbody")(53,"tr")(54,"td"),e._uU(55),e.ALo(56,"titlecase"),e.qZA(),e.TgZ(57,"td"),e._uU(58),e.ALo(59,"date"),e.qZA(),e.TgZ(60,"td",14),e._uU(61,"1"),e.qZA(),e.TgZ(62,"td"),e._uU(63),e.ALo(64,"currency"),e.qZA(),e.TgZ(65,"td"),e._uU(66),e.ALo(67,"currency"),e.qZA()(),e.TgZ(68,"tr"),e._UZ(69,"th",15)(70,"th",16),e.TgZ(71,"th"),e._uU(72,"Delivery"),e.qZA(),e.TgZ(73,"th"),e._uU(74),e.ALo(75,"currency"),e.qZA()(),e.TgZ(76,"tr"),e._UZ(77,"th",15)(78,"th",16),e.TgZ(79,"th"),e._uU(80,"Discount"),e.qZA(),e.TgZ(81,"th"),e._uU(82),e.ALo(83,"currency"),e.qZA()(),e.TgZ(84,"tr",17),e._UZ(85,"th",15)(86,"th",16),e.TgZ(87,"th"),e._uU(88,"Total Paid"),e.qZA(),e.TgZ(89,"th"),e._uU(90),e.ALo(91,"currency"),e.qZA()()()()()()),2&r){const t=e.oxw();e.xp6(24),e.Oqu(e.lcZ(25,11,t.order.dateCreated)),e.xp6(6),e.Oqu(t.order._id),e.xp6(5),e.AsE("",e.lcZ(36,13,t.order.user.lastName),", ",e.lcZ(37,15,t.order.user.name),""),e.xp6(20),e.hij("",e.lcZ(56,17,t.order.book.name)," (Summarized)"),e.xp6(3),e.Oqu(e.lcZ(59,19,t.order.dateCreated)),e.xp6(5),e.hij("US",e.lcZ(64,21,t.order.price)," "),e.xp6(3),e.hij("US",e.lcZ(67,23,t.order.price)," "),e.xp6(8),e.hij("US",e.lcZ(75,25,0)," "),e.xp6(8),e.hij("US",e.lcZ(83,27,0)," "),e.xp6(8),e.hij("US",e.lcZ(91,29,t.order.price)," ")}}function _(r,o){1&r&&e._UZ(0,"frontend-spinner")}let q=(()=>{class r{constructor(t,d){this.route=t,this.myOrdersService=d}reload(){this.route.params.subscribe(t=>{t.id&&(this.orderId=t.id)}),this.myOrdersService.getMyOrderById(this.orderId).pipe((0,l.q)(1)).subscribe(({result:t})=>{t&&(this.order=t)})}ngOnInit(){this.reload()}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(s.gz),e.Y36(u))},r.\u0275cmp=e.Xpm({type:r,selectors:[["frontend-my-order-view"]],decls:5,vars:2,consts:[["title","Receipt"],[1,"order"],[1,"container-fluid"],["class","order-table",4,"ngIf"],[4,"ngIf"],[1,"order-table"],[1,"d-flex","flex-column"],[1,"col-6","col-md-4","mt-2"],["src","assets/img/logo-header.svg"],[1,"row","mt-2","p-2"],[1,"col-md-6"],[1,"table","table-borderless"],[1,"m-3"],[1,"table","table-striped"],[1,"d-md-table-cell","d-none"],["colspan","3",1,"d-md-table-cell","d-none"],["colspan","2",1,"d-table-cell","d-md-none"],[1,"table-success"]],template:function(t,d){1&t&&(e._UZ(0,"frontend-sub-nav",0),e.TgZ(1,"section",1)(2,"div",2),e.YNc(3,T,92,31,"div",3),e.YNc(4,_,1,0,"frontend-spinner",4),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("ngIf",d.order),e.xp6(1),e.Q6J("ngIf",!d.order))},dependencies:[i.O5,a.O,Z.A,i.rS,i.H9,i.uU],encapsulation:2}),r})();var x=n(9646);let p=(()=>{class r{resolve(t,d){return(0,x.of)(!0)}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var M=n(28),L=n(122);const b=[{path:"",component:v,resolve:{myOrders:p}},{path:"id/:id",component:q,resolve:{books:M.BooksResolver,myOrders:p}}];let C=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[i.ez,L.As,s.Bz.forChild(b)]}),r})()}}]);