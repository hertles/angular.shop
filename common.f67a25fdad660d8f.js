"use strict";(self.webpackChunkpet=self.webpackChunkpet||[]).push([[592],{3474:(y,m,n)=>{n.d(m,{H:()=>P});var t=n(4946),l=n(9862);let p=(()=>{class s{constructor(u){this.http=u}getProducts(){return this.http.get("https://fakestoreapi.com/products")}getProduct(u){return this.http.get(`https://fakestoreapi.com/products/${u}`)}static#t=this.\u0275fac=function(i){return new(i||s)(t.LFG(l.eN))};static#o=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var a=n(2572),h=n(7398),d=n(1901);let P=(()=>{class s extends p{constructor(u,i){super(i),this.userService=u}getProducts(){const u=this.userService.getCurrentUser();return(0,a.a)([super.getProducts(),u]).pipe((0,h.U)(([i,_])=>i.map(g=>({...g,chosen:_?.preferences.has(g.id)}))))}getProduct(u){const i=this.userService.getCurrentUser();return(0,a.a)([super.getProduct(u),i]).pipe((0,h.U)(([_,g])=>({..._,chosen:g?.preferences.has(_.id)})))}static#t=this.\u0275fac=function(i){return new(i||s)(t.LFG(d.K),t.LFG(l.eN))};static#o=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},1427:(y,m,n)=>{n.d(m,{X:()=>g});var t=n(4946),l=n(1901),p=n(6814),a=n(9078),h=n(9481);const d=function(o){return["/products",o]},P=function(o,f){return{product__choose:!0,product__choose__chosen:o,"product__choose__not-chosen":f}};let s=(()=>{class o{constructor(e,c){this.differs=e,this.cdr=c,this.differ=this.differs.find({}).create(),this.choose=new t.vpe}chooseProduct(e){e.stopPropagation(),this.choose.emit(!this.product.chosen)}ngDoCheck(){const e=this.differ.diff(this.product);e&&(e.forEachItem(c=>{"chosen"===c.key&&c.currentValue!==c.previousValue&&null!==c.previousValue&&console.log(c.currentValue?`You have chosen product ${this.product.id}`:`You have canceled your choose of product ${this.product.id}`)}),this.cdr.markForCheck())}static#t=this.\u0275fac=function(c){return new(c||o)(t.Y36(t.aQg),t.Y36(t.sBO))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-product"]],inputs:{product:"product"},outputs:{choose:"choose"},decls:13,vars:16,consts:[[1,"product"],[1,"product__container",3,"routerLink"],[1,"product__image-block"],[1,"product__image",3,"src","alt"],[3,"ngClass","click"],["src","assets/images/heart-svgrepo-com.svg","alt","\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"],[1,"product__title",3,"tooltip"]],template:function(c,r){1&c&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.TgZ(4,"div",4),t.NdJ("click",function(C){return r.chooseProduct(C)}),t._UZ(5,"img",5),t.qZA()(),t.TgZ(6,"strong",6),t._uU(7),t.qZA(),t.TgZ(8,"div"),t._uU(9,"\u0426\u0435\u043d\u0430: "),t.TgZ(10,"strong"),t._uU(11),t.ALo(12,"currency"),t.qZA()()()()),2&c&&(t.xp6(1),t.Q6J("routerLink",t.VKq(11,d,r.product.id)),t.xp6(2),t.Q6J("src",r.product.image,t.LSH)("alt",r.product.title),t.xp6(1),t.Q6J("ngClass",t.WLB(13,P,r.product.chosen,!r.product.chosen)),t.xp6(2),t.Q6J("tooltip",r.product.title),t.xp6(1),t.Oqu(r.product.title),t.xp6(4),t.Oqu(t.Dn7(12,7,r.product.price,"EUR","symbol")))},dependencies:[a.i,p.mk,h.rH,p.H9],styles:[".product[_ngcontent-%COMP%]{margin:20px;display:inline-block}.product__container[_ngcontent-%COMP%]{width:300px;gap:10px;display:flex;flex-direction:column;justify-content:center;cursor:pointer}.product__title[_ngcontent-%COMP%]{max-width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.product__image-block[_ngcontent-%COMP%]{height:300px;background-color:#fff;display:flex;border-radius:20px;padding:20px;filter:brightness(1);-webkit-user-select:none;user-select:none}.product__image[_ngcontent-%COMP%]{object-fit:contain;max-height:100%;max-width:100%;margin:0 auto;transition:.1s ease-in}.product__choose[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0;margin:20px;padding:10px 10px 5px;border-radius:10px;transition:.1s}.product__choose[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px}.product__choose__chosen[_ngcontent-%COMP%]{background-color:#b22222;animation:_ngcontent-%COMP%_downScale .4s}.product__choose__not-chosen[_ngcontent-%COMP%]{display:none;background-color:#000}.product__choose[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.product[_ngcontent-%COMP%]:hover   .product__image[_ngcontent-%COMP%]{transform:scale(1.1)}.product[_ngcontent-%COMP%]:hover   .product__choose__not-chosen[_ngcontent-%COMP%]{display:block}@keyframes _ngcontent-%COMP%_downScale{0%{transform:scale(1)}25%{transform:scale(1.2)}75%{transform:scale(.9)}to{transform:scale(1)}}@media screen and (pointer: coarse){.product__choose__not-chosen[_ngcontent-%COMP%]{display:block!important}}"]})}return o})();function v(o,f){1&o&&(t.ynx(0),t._uU(1,"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),t.BQk())}function u(o,f){if(1&o&&(t.ynx(0),t._uU(1),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.hij("\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445: ",e.productsError.message,"")}}function i(o,f){1&o&&(t.TgZ(0,"p"),t._uU(1," \u041d\u0435\u0442 \u0442\u043e\u0432\u0430\u0440\u043e\u0432\n"),t.qZA())}function _(o,f){if(1&o){const e=t.EpF();t.TgZ(0,"app-product",2),t.NdJ("choose",function(){const O=t.CHM(e).$implicit,C=t.oxw();return t.KtG(C.chooseProduct(O.id))}),t.qZA()}2&o&&t.Q6J("product",f.$implicit)}let g=(()=>{class o{constructor(e){this.userService=e,this.productsError=null,this.productsLoading=!0,this.trackByProducts=(c,r)=>r.title}chooseProduct(e){this.userService.togglePreference(e)}static#t=this.\u0275fac=function(c){return new(c||o)(t.Y36(l.K))};static#o=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-list"]],inputs:{products:"products",productsError:"productsError",productsLoading:"productsLoading"},decls:4,vars:5,consts:[[4,"ngIf"],[3,"product","choose",4,"ngFor","ngForOf","ngForTrackBy"],[3,"product","choose"]],template:function(c,r){1&c&&(t.YNc(0,v,2,0,"ng-container",0),t.YNc(1,u,2,1,"ng-container",0),t.YNc(2,i,2,0,"p",0),t.YNc(3,_,1,1,"app-product",1)),2&c&&(t.Q6J("ngIf",r.productsLoading),t.xp6(1),t.Q6J("ngIf",r.productsError),t.xp6(1),t.Q6J("ngIf",!(r.productsLoading||r.productsError||null!=r.products&&r.products.length)),t.xp6(1),t.Q6J("ngForOf",r.products)("ngForTrackBy",r.trackByProducts))},dependencies:[p.sg,p.O5,s],styles:["[_nghost-%COMP%]{width:100%;display:grid;justify-content:center;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));justify-items:center;gap:10px}"]})}return o})()},1568:(y,m,n)=>{n.d(m,{R:()=>h});var t=n(2482),l=n(6814),p=n(9481),a=n(4946);let h=(()=>{class d{static#t=this.\u0275fac=function(v){return new(v||d)};static#o=this.\u0275mod=a.oAB({type:d});static#r=this.\u0275inj=a.cJS({imports:[t.S,l.ez,p.Bz]})}return d})()}}]);