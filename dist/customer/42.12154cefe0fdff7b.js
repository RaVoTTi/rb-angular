"use strict";(self.webpackChunkcustomer=self.webpackChunkcustomer||[]).push([[42],{4042:(h,d,r)=>{r.r(d),r.d(d,{SettingsModule:()=>i});var m=r(6895),t=r(433),o=r(4650),n=r(5931),c=r(3470);class s{constructor(l,e,a,f){this.errorH=l,this.formBuilder=e,this.vs=a,this.alert=f,this.disabled=!1}ngOnInit(){this.alert.fire({title:"Something when wrong",text:"We'll get it fixed as soon as we can",icon:"error"},{urlConfi:"/app/books",urlCancel:"/app/books"})}_initForm(){this.phoneForm=this.formBuilder.control("",[t.kI.required]),this.emailForm=this.formBuilder.control("",[t.kI.required]),this.passwordForm=this.formBuilder.group({password:["",[t.kI.required]],password2:["",[t.kI.required]]},{validators:[this.vs.passwordMismatch("password","password2")]})}static#o=this.\u0275fac=function(e){return new(e||s)(o.Y36(n.q_),o.Y36(t.qu),o.Y36(n.S9),o.Y36(n.c9))};static#t=this.\u0275cmp=o.Xpm({type:s,selectors:[["frontend-my-settings"]],decls:33,vars:2,consts:[["title","Settings"],[1,"container-fluid"],[1,"rb-card","mt-4","mb-4"],["autocomplete","off"],[1,"input-label"],[1,"label"],["readonly","","placeholder","Robin","type","text",1,"form-control"],["readonly","","type","text","placeholder","Boook",1,"form-control"],["readonly","","placeholder","robin@boook.com","type","text",1,"form-control",3,"formControl"],["readonly","","type","number","placeholder","(111) 111-1111",1,"form-control",3,"formControl"],["readonly","","type","password","placeholder","********",1,"form-control"],[1,"row","mb-3","mt-3"],[1,"col-md-12","col-sm-12","col-xs-12","text-center"],[1,"btn","btn-primary","btn-block"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,a){1&e&&(o._UZ(0,"frontend-sub-nav",0),o.TgZ(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",4)(5,"label",5),o._uU(6," Name"),o.qZA(),o._UZ(7,"input",6),o.qZA(),o.TgZ(8,"div",4)(9,"label",5),o._uU(10," LastName"),o.qZA(),o._UZ(11,"input",7),o.qZA(),o.TgZ(12,"div",4)(13,"label",5),o._uU(14," Email"),o.qZA(),o._UZ(15,"input",8),o.qZA(),o.TgZ(16,"div",4)(17,"label",5),o._uU(18," Phone"),o.qZA(),o._UZ(19,"input",9),o.qZA(),o.TgZ(20,"div",4)(21,"label",5),o._uU(22," Password"),o.qZA(),o._UZ(23,"input",10),o.qZA(),o.TgZ(24,"div",4)(25,"label",5),o._uU(26,"Confirm Password"),o.qZA(),o._UZ(27,"input",10),o.qZA(),o.TgZ(28,"div",11)(29,"div",12)(30,"button",13),o._UZ(31,"span",14),o._uU(32," Modify Account "),o.qZA()()()()()()),2&e&&(o.xp6(15),o.Q6J("formControl",a.emailForm),o.xp6(4),o.Q6J("formControl",a.phoneForm))},dependencies:[c.A,t._Y,t.Fj,t.wV,t.JJ,t.JL,t.oH],encapsulation:2})}var p=r(5467);const u=[{path:"",component:s}];class i{static#o=this.\u0275fac=function(e){return new(e||i)};static#t=this.\u0275mod=o.oAB({type:i});static#r=this.\u0275inj=o.cJS({imports:[m.ez,n.As,t.UX,p.Bz.forChild(u)]})}}}]);