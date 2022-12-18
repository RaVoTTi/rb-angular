"use strict";(self.webpackChunkcustomer=self.webpackChunkcustomer||[]).push([[973],{6973:(x,h,o)=>{o.r(h),o.d(h,{AuthUserModule:()=>p});var c=o(6895),d=o(5467),i=o(433),g=o(8505),v=o(9884),t=o(4650),Z=o(9653),u=o(5931);class m{constructor(s){this.elementRef=s,this._msg="This field is required",this._color="red",this.element=s}set errorMsg(s){s?(this._msg=s,this.setMsg(),this.element.nativeElement.classList.remove("hidden")):this.element.nativeElement.classList.add("hidden")}ngOnInit(){this.setClass(),this.setColor(),this.element.nativeElement.classList.add("hidden")}setMsg(){this.element.nativeElement.innerText=this._msg}setColor(){this.element.nativeElement.style.color=this._color}setClass(){this.element.nativeElement.style.fontSize=".8rem"}static#t=this.\u0275fac=function(e){return new(e||m)(t.Y36(t.SBq))};static#e=this.\u0275dir=t.lG2({type:m,selectors:[["","errorMsg",""]],inputs:{errorMsg:"errorMsg"}})}function f(l,s){if(1&l){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"i"),t._uU(3,"\u{1f3f9}"),t.qZA(),t._uU(4," Enter your details below to continue "),t.qZA(),t.TgZ(5,"form",8)(6,"div",9)(7,"label",10),t._uU(8," Email"),t.qZA(),t._UZ(9,"input",11)(10,"small",12),t.qZA(),t.TgZ(11,"div",9)(12,"label",10),t._uU(13," Password"),t.qZA(),t._UZ(14,"input",13)(15,"small",12),t.qZA(),t.TgZ(16,"div",14),t._UZ(17,"input",15),t.TgZ(18,"label"),t._uU(19," Remember Me"),t.qZA()(),t.TgZ(20,"div",16)(21,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onSubmit())}),t._uU(22,"LOGIN"),t.qZA()(),t.TgZ(23,"div",18)(24,"span"),t._uU(25,"New to Robin Boook?"),t.qZA(),t.TgZ(26,"a",19),t._uU(27," Sign up Now "),t.qZA()()()()}if(2&l){const e=t.oxw();t.xp6(5),t.Q6J("formGroup",e.loginForm),t.xp6(5),t.Q6J("errorMsg",e.errorMsg("email")),t.xp6(5),t.Q6J("errorMsg",e.errorMsg("password")),t.xp6(6),t.Q6J("disabled",e.loginForm.invalid||e.loginForm.disabled)}}function U(l,s){if(1&l){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7)(2,"i"),t._uU(3,"\u{1f3f9}"),t.qZA(),t._uU(4," Fill the gaps and discover a great amount of new oppotunities! "),t.qZA(),t.TgZ(5,"form",8)(6,"div",9)(7,"label",10),t._uU(8," Name"),t.qZA(),t._UZ(9,"input",20)(10,"small",12),t.qZA(),t.TgZ(11,"div",9)(12,"label",10),t._uU(13," LastName"),t.qZA(),t._UZ(14,"input",21)(15,"small",12),t.qZA(),t.TgZ(16,"div",9)(17,"label",10),t._uU(18," Email"),t.qZA(),t._UZ(19,"input",11)(20,"small",12),t.qZA(),t.TgZ(21,"div",9)(22,"label",10),t._uU(23," Phone"),t.qZA(),t._UZ(24,"input",22)(25,"small",12),t.qZA(),t.TgZ(26,"div",9)(27,"label",10),t._uU(28," Password"),t.qZA(),t._UZ(29,"input",23)(30,"small",12),t.qZA(),t.TgZ(31,"div",9)(32,"label",10),t._uU(33,"Confirm Password"),t.qZA(),t._UZ(34,"input",24)(35,"small",12),t.qZA(),t.TgZ(36,"div",14),t._UZ(37,"input",25),t.TgZ(38,"b"),t._uU(39,"Accept "),t.qZA(),t.TgZ(40,"a",26),t._uU(41,"Terms & Conditions"),t.qZA()(),t.TgZ(42,"div",16)(43,"button",17),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.onSubmit())}),t._uU(44,"SIGN UP"),t.qZA()(),t.TgZ(45,"div",18)(46,"span"),t._uU(47,"Already have an account?"),t.qZA(),t.TgZ(48,"a",27),t._uU(49," Login Now "),t.qZA()()()()}if(2&l){const e=t.oxw();t.xp6(5),t.Q6J("formGroup",e.signUpForm),t.xp6(5),t.Q6J("errorMsg",e.errorMsg("name")),t.xp6(5),t.Q6J("errorMsg",e.errorMsg("lastName")),t.xp6(5),t.Q6J("errorMsg",e.errorMsg("email")),t.xp6(5),t.Q6J("errorMsg",e.errorMsg("phone")),t.xp6(5),t.Q6J("errorMsg",e.errorMsg("password")),t.xp6(5),t.Q6J("errorMsg",e.errorMsg("password2")),t.xp6(8),t.Q6J("disabled",e.signUpForm.invalid||e.signUpForm.disabled)}}class a{constructor(s,e,r,n,b,q,_){this.router=s,this.formBuilder=e,this.authBaseService=r,this.store=n,this.alert=b,this.errorH=q,this.vs=_,this.login=!0,this.login=!this.router.url.includes("signup")}ngOnInit(){this._initForm()}onSubmit(){this.login?(this.loginForm.disable(),this._login()):(this.signUpForm.disable(),this._postSignUp())}_login(){if(this.loginForm.invalid)return void this.loginForm.markAllAsTouched();const{email:s,password:e}=this.loginForm.value;this.authBaseService.postLogin({email:s,password:e}).pipe((0,g.b)(({token:r})=>{r&&(this.store.dispatch(v.uQ.login({token:r})),this.router.navigate(["/app"]))})).subscribe({error:({error:r})=>{this.loginForm.enable(),this.alert.fire({icon:"error",text:r?.msg?r?.msg:"Something happened"})}})}_postSignUp(){this.signUpForm.invalid?this.signUpForm.markAllAsTouched():this.authBaseService.postSignUp(this.signUpForm.value).pipe((0,g.b)(s=>{s.ok&&this.alert.fire({icon:"success",text:"User Created succesful"})})).subscribe({error:({error:s})=>{this.signUpForm.enable(),this.alert.fire({icon:"error",text:s?.msg?s?.msg:"Something happened"})}})}_initForm(){this.login?this.loginForm=this.formBuilder.group({email:["",[i.kI.required,this.vs.validatePat("emailPat")]],password:["",[i.kI.required,this.vs.validatePat("passwordPat")]]}):this.signUpForm=this.formBuilder.group({name:["",[i.kI.required,this.vs.validatePat("namePat")]],lastName:["",[i.kI.required,this.vs.validatePat("namePat")]],email:["",[i.kI.required,this.vs.validatePat("emailPat")]],phone:["",[i.kI.required,this.vs.validatePat("phone")]],password:["",[i.kI.required,this.vs.validatePat("passwordPat")]],password2:["",[i.kI.required]],terms:[!1,[i.kI.required,i.kI.requiredTrue]]},{validators:[this.vs.passwordMismatch("password","password2")]})}errorMsg(s){return this.errorH.errorMsg(this.login?this.loginForm.controls[s]:this.signUpForm.controls[s])}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(d.F0),t.Y36(i.qu),t.Y36(v.ri),t.Y36(Z.yh),t.Y36(u.c9),t.Y36(u.q_),t.Y36(u.S9))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["frontend-auth-view"]],decls:7,vars:2,consts:[[1,"auth-container"],[1,"auth-in"],[1,"auth-logo"],["src","assets/word@2x.png","alt","","routerLink","/app/books",1,"logo"],["class","auth-card",4,"ngIf","ngIfElse"],["signup",""],[1,"auth-card"],[1,"auth-alert"],["autocomplete","off",3,"formGroup"],[1,"input-label"],[1,"label"],["placeholder","robin@boook.com","formControlName","email","type","text",1,"input"],[3,"errorMsg"],["type","password","placeholder","*********","formControlName","password",1,"input"],[1,"auth-check"],["id","flexCheckDefault","type","checkbox",1,"input-checkbox"],[1,"button-container"],[1,"button-primary",3,"disabled","click"],[1,"details"],["routerLink","/auth/signup"],["placeholder","Robin","formControlName","name","type","text",1,"input"],["type","text","placeholder","Boook","formControlName","lastName",1,"input"],["type","number","placeholder","(111) 111-1111","formControlName","phone",1,"input"],["type","password","placeholder","********","formControlName","password",1,"input"],["type","password","placeholder","********","formControlName","password2",1,"input"],["formControlName","terms","type","checkbox",1,"input-radio"],["href",""],["routerLink","/auth"]],template:function(e,r){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.YNc(4,f,28,4,"div",4),t.qZA()(),t.YNc(5,U,50,8,"ng-template",null,5,t.W1O)),2&e){const n=t.MAs(6);t.xp6(4),t.Q6J("ngIf",r.loginForm)("ngIfElse",n)}},dependencies:[c.O5,d.rH,m,i._Y,i.Fj,i.wV,i.Wl,i.JJ,i.JL,i.sg,i.u],encapsulation:2})}const A=[{path:"",component:a},{path:"signup",component:a}];class p{static#t=this.\u0275fac=function(e){return new(e||p)};static#e=this.\u0275mod=t.oAB({type:p});static#s=this.\u0275inj=t.cJS({imports:[c.ez,d.Bz.forChild(A),u.As,i.u5,i.UX]})}}}]);