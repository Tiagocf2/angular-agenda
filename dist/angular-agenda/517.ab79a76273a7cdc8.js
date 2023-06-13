"use strict";(self.webpackChunkangular_agenda=self.webpackChunkangular_agenda||[]).push([[517],{3517:(L,g,n)=>{n.r(g),n.d(g,{AuthShellModule:()=>c});var f=n(1662),e=n(2223),s=n(6012);let m=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-auth-layout"]],decls:3,vars:0,consts:[[1,"auth-layout"],[1,"content-card"]],template:function(l,M){1&l&&(e.TgZ(0,"main",0)(1,"mat-card",1),e._UZ(2,"router-outlet"),e.qZA()())},dependencies:[f.lC,s.a8],styles:[".auth-layout[_ngcontent-%COMP%]{background-color:#0a0a15;display:flex;justify-content:center;align-items:center;height:-moz-fit-content;height:fit-content;min-height:calc(100% - 50px);padding-top:50px}.content-card[_ngcontent-%COMP%]{display:flex;align-items:center;padding:1.125rem 3rem;width:-moz-fit-content;width:fit-content;margin-top:-15vh}@media screen and (max-width: 500px){.content-card[_ngcontent-%COMP%]{width:100%;height:100%;margin-top:0}}"]}),o})();var p=n(1486);const d=[{path:"",component:m,children:[{path:"login",loadChildren:()=>Promise.resolve().then(n.bind(n,5582)).then(o=>o.LoginModule),title:p.fA.format("Login")},{path:"cadastro",loadChildren:()=>Promise.all([n.e(592),n.e(884)]).then(n.bind(n,6884)).then(o=>o.SignupModule),title:p.fA.format("Login")}]}];let v=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.Bz.forChild(d),f.Bz]}),o})();var y=n(5582);let c=(()=>{class o{}return o.\u0275fac=function(l){return new(l||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[v,y.LoginModule,s.QW]}),o})()},5582:(L,g,n)=>{n.r(g),n.d(g,{LoginModule:()=>x});var f=n(4755),e=n(9401),s=n(6012),m=n(9114),p=n(8097),d=n(1728),v=n(1292),y=n(430),c=n(1662),o=n(5698),u=n(262),l=n(515),M=n(1486),A=n(5764),t=n(2223),S=n(5030),Z=n(9406);const T=[{path:"",component:(()=>{class a{constructor(i,r,C,b){this.formBuilder=i,this.router=r,this.authService=C,this.messagesService=b,this.loading=!1,this.passwordVisible=!1}ngOnInit(){this.formulario=this.formBuilder.group({username:[null,[e.kI.required,e.kI.minLength(6)]],password:[null,[e.kI.required,e.kI.minLength(6)]],rememberMe:[!1]})}handleSubmit(){if(!this.formulario.valid)return;this.loading=!0;const i=this.formulario.value;this.authService.signin({username:i.username,password:i.password},i.rememberMe).pipe((0,o.q)(1),(0,u.K)(r=>(console.error(r),this.loading=!1,this.messagesService.showMessage({text:(0,M.LT)(r),type:A.C.ERROR}),l.E))).subscribe(()=>{this.router.navigate(["/home"])})}changePasswordVisibility(){this.passwordVisible=!this.passwordVisible}}return a.\u0275fac=function(i){return new(i||a)(t.Y36(e.qu),t.Y36(c.F0),t.Y36(S.e),t.Y36(Z.K))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-login"]],decls:24,vars:4,consts:[[1,"auth-card-title"],[1,"auth-form",3,"formGroup","ngSubmit"],["matInput","","formControlName","username"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","","aria-label","Mostrar Senha","type","button",3,"click"],["formControlName","rememberMe"],["mat-raised-button","","color","primary",3,"disabled"],["mat-flat-button","","routerLink","/auth/cadastro"]],template:function(i,r){1&i&&(t.TgZ(0,"mat-card-header")(1,"mat-card-title",0),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"mat-card-subtitle"),t._uU(4,"Insira suas informa\xe7\xf5es para continuar"),t.qZA()(),t.TgZ(5,"mat-card-content")(6,"form",1),t.NdJ("ngSubmit",function(){return r.handleSubmit()}),t.TgZ(7,"mat-form-field")(8,"mat-label"),t._uU(9,"Usu\xe1rio"),t.qZA(),t._UZ(10,"input",2),t.qZA(),t.TgZ(11,"mat-form-field")(12,"mat-label"),t._uU(13,"Senha"),t.qZA(),t._UZ(14,"input",3),t.TgZ(15,"button",4),t.NdJ("click",function(){return r.changePasswordVisibility()}),t.TgZ(16,"mat-icon"),t._uU(17),t.qZA()()(),t.TgZ(18,"mat-checkbox",5),t._uU(19,"Lembrar de mim"),t.qZA(),t.TgZ(20,"button",6),t._uU(21," Continuar "),t.qZA(),t.TgZ(22,"a",7),t._uU(23,"Cadastre-se"),t.qZA()()()),2&i&&(t.xp6(6),t.Q6J("formGroup",r.formulario),t.xp6(8),t.Q6J("type",r.passwordVisible?"text":"password"),t.xp6(3),t.Oqu(r.passwordVisible?"visibility_off":"visibility"),t.xp6(3),t.Q6J("disabled",r.loading))},dependencies:[e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,c.rH,s.dn,s.dk,s.$j,s.n5,m.KE,m.hX,m.R9,p.Nt,d.zs,d.lW,d.RK,v.oG,y.Hw],styles:["mat-card-header[_ngcontent-%COMP%]{margin-bottom:1rem}",".auth-form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.auth-card-title[_ngcontent-%COMP%]{font-size:2.5rem;line-height:1.5em;text-align:center;margin-bottom:.5rem}.auth-form-group[_ngcontent-%COMP%]{display:flex;gap:.75rem}.auth-form-group[_ngcontent-%COMP%] > mat-form-field[_ngcontent-%COMP%]{flex-grow:1}.mat-mdc-card-header[_ngcontent-%COMP%]{justify-content:center}"]}),a})()}];let P=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.Bz.forChild(T),c.Bz]}),a})(),x=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[{provide:m.o2,useValue:{appearance:"outline",hideRequiredMarker:!0}}],imports:[f.ez,e.UX,P,s.QW,m.lN,p.c,d.ot,v.p9,y.Ps]}),a})()}}]);