"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9849],{9849:(D,T,u)=>{u.r(T),u.d(T,{ListordersPageModule:()=>N});var v=u(6814),s=u(95),c=u(9843),Z=u(4193),m=u(5861),_=u(553),t=u(5879),U=u(1229),F=u(9862),S=u(7076),C=u(2014);function A(n,g){1&n&&(t.TgZ(0,"div",28),t._uU(1," Por Favor Indica la Cantidad de Cada Producto !!! "),t.qZA())}function x(n,g){if(1&n){const d=t.EpF();t.TgZ(0,"ion-row",null,29)(2,"ion-col",19),t._uU(3),t.qZA(),t.TgZ(4,"ion-col",20),t._uU(5),t.qZA(),t.TgZ(6,"ion-col",20),t._uU(7),t.qZA(),t.TgZ(8,"ion-col",20)(9,"ion-input",30),t.NdJ("keypress",function(e){t.CHM(d);const o=t.oxw();return t.KtG(o.validateNumber(e))})("ngModelChange",function(e){const i=t.CHM(d).$implicit;return t.KtG(i.Cantidad=e)})("input",function(e){const i=t.CHM(d).$implicit,l=t.oxw();return t.KtG(l.updateCantidad(i,e))}),t.qZA()(),t.TgZ(10,"ion-col",20),t._uU(11),t.qZA(),t.TgZ(12,"ion-col",19),t._uU(13),t.qZA(),t.TgZ(14,"ion-col",19),t._uU(15),t.qZA(),t.TgZ(16,"ion-col",19),t._uU(17),t.qZA(),t.TgZ(18,"ion-col",19),t._uU(19),t.qZA(),t.TgZ(20,"ion-col",19)(21,"a",31),t.NdJ("click",function(){const o=t.CHM(d).$implicit,i=t.oxw();return t.KtG(i.deleteProducto(o))}),t._UZ(22,"ion-icon",32),t.qZA()()()}if(2&n){const d=g.$implicit,a=g.index,e=t.oxw();t.xp6(3),t.Oqu((e.currentPage-1)*e.itemsPerPage+a+1),t.xp6(2),t.hij(" ",d.codart," "),t.xp6(2),t.hij(" ",d.desart," "),t.xp6(2),t.Q6J("ngModel",d.Cantidad),t.xp6(2),t.hij(" ",d.preve1," "),t.xp6(2),t.hij(" ",d.iva," "),t.xp6(2),t.hij("",d.factura," "),t.xp6(2),t.Oqu(d.preve3),t.xp6(2),t.hij("",d.nota," ")}}const P=[{path:"",component:(()=>{var n;class g{constructor(a,e,o,i,l,h,p,r){this.router=a,this.route=e,this.dataSharingService=o,this.fb=i,this.http=l,this.loginService=h,this.alertController=p,this.storage=r,this.searchText="",this.items=[],this.currentPage=1,this.itemsPerPage=10,this.displayedItems=[],this.dataSeleccionada=[],this.totalMayorCincuenta=!1,this.cantidadVacia=!0,this.mostrarMensajeError=!1,this.FormData=this.fb.group({tipdoc:new s.NI("",s.kI.required),subtotalF:new s.NI(""),subtotalN:new s.NI(""),ivaF:new s.NI(""),totalF:new s.NI(""),totalBS:new s.NI(""),pedidos:[{}],tasdolar:new s.NI(""),fectas:new s.NI(""),nomcli:new s.NI(""),codcli:new s.NI(""),dirsed:new s.NI("")}),this.cantidadVacia=!0,this.initStorage()}ngOnInit(){this.viewTasa(),this.ViewData(),this.route.params.subscribe(a=>{this.codcli=a.codcli}),this.dataSharingService.datosSeleccionados$.subscribe(a=>{console.log(a),this.dataSeleccionada=a,this.dataSharingService.setContador(this.dataSeleccionada.length),this.calcularTotales(),this.items=this.dataSeleccionada})}deleteProducto(a){var e=this;return(0,m.Z)(function*(){var i;yield(yield e.alertController.create({header:"Eliminar Producto",message:"\xbfSeguro que quieres eliminar el producto seleccionado?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Eliminar",handler:(i=(0,m.Z)(function*(){try{const l=e.dataSeleccionada.indexOf(a);-1!==l&&(e.dataSeleccionada.splice(l,1),e.dataSharingService.setContador(e.dataSharingService.getContador()-1),a.seleccionado=!1),e.calcularTotales(),e.dataSharingService.enviarDatosSeleccionados(e.dataSeleccionada)}catch(l){console.error("Error al eliminar el producto:",l)}}),function(){return i.apply(this,arguments)})}]})).present()})()}end1(){this.dataSharingService.enviarDatosSeleccionados([]),this.dataSharingService.setContador(0),this.router.navigate(["dashboard"])}SendData(){var a=this;return(0,m.Z)(function*(){var o;yield(yield a.alertController.create({header:"Guardar Pedido",message:"Estas Seguro de Guardar el Pedido",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Aceptar",handler:(o=(0,m.Z)(function*(){try{a.http.post(`${_.N.apiOrdersUrl}/new/save/${a.idsuc}`,a.FormData.value).subscribe(i=>{console.log(a.FormData.value)}),a.router.navigate(["viewordersglobal"])}catch(i){console.error("Error al Guardar el Pedido:",i)}}),function(){return o.apply(this,arguments)})}]})).present()})()}initStorage(){var a=this;return(0,m.Z)(function*(){yield a.storage.create()})()}ViewData(){var a=this;return(0,m.Z)(function*(){a.idsuc=a.route.snapshot.paramMap.get("idsuc"),a.http.get(`${_.N.apiOrdersUrl}/new/client/${a.idsuc}`).subscribe(e=>{var o,i,l,h,p,r;a.info=e.infoCli,a.info&&a.info.length>0&&(a.FormData.patchValue({nomcli:null===(o=a.info[0])||void 0===o?void 0:o.nomcli,codcli:null===(i=a.info[0])||void 0===i?void 0:i.codcli,dirsed:null===(l=a.info[0])||void 0===l?void 0:l.dirsed}),null===(h=a.FormData.get("nomcli"))||void 0===h||h.disable(),null===(p=a.FormData.get("codcli"))||void 0===p||p.disable(),null===(r=a.FormData.get("dirsed"))||void 0===r||r.disable(),a.storage.set(`cliorder_data_${a.idsuc}`,a.info))})})()}end(){this.dataSharingService.setContador(0),this.dataSharingService.enviarDatosSeleccionados([]),this.router.navigate(["dashboard"])}viewTasa(){var a=this;return(0,m.Z)(function*(){a.http.get(`${_.N.APIURL}/tasaIva`).subscribe(e=>{a.info2=e.info,a.tasdol=a.info2[0].tasdol,a.info2&&a.info2.length>0&&(a.FormData.patchValue({fectas:a.info2[0].fectas,tasdolar:a.info2[0].tasdol}),a.storage.set("tasa_iva_data",a.info2[0]))})})()}calcularTotales(){var a,e,o,i,l;let h=0,p=0;for(const r of this.dataSeleccionada)r.iva=+(r.Cantidad*r.preve1*r.monimp/100).toFixed(2),r.factura=+(r.Cantidad*r.preve1+r.iva).toFixed(2),r.nota=+(r.Cantidad*r.preve3).toFixed(2),r.impuesto=+(r.Cantidad*r.preve1*r.monimp/100).toFixed(2),h+=r.nota,p+=r.factura-r.iva;null===(a=this.FormData.get("subtotalF"))||void 0===a||a.setValue(p.toFixed(2)),null===(e=this.FormData.get("subtotalN"))||void 0===e||e.setValue(h.toFixed(2)),null===(o=this.FormData.get("totalF"))||void 0===o||o.setValue(this.calcularTotal$()),null===(i=this.FormData.get("totalBS"))||void 0===i||i.setValue(this.calcularTotalBS()),null===(l=this.FormData.get("pedidos"))||void 0===l||l.setValue(this.dataSeleccionada)}order(){this.idsuc=this.route.snapshot.paramMap.get("idsuc"),this.router.navigate(["newordersclient",this.idsuc])}onSearchInput(a){const e=a.target;null!=e.value&&(this.searchText=e.value,this.loadDisplayedItems())}sortColumn(a){this.filteredItems.sort((e,o)=>e[a]<o[a]?-1:e[a]>o[a]?1:0)}loadDisplayedItems(){const a=(this.currentPage-1)*this.itemsPerPage;this.displayedItems=this.filteredItems.slice(a,a+this.itemsPerPage)}get filteredItems(){return this.items.filter(a=>a.desart.toLowerCase().includes(this.searchText.toLowerCase()))}updateCantidad(a,e){var o,i,l,h;let p=Number(e.target.value);isNaN(p)&&(p=1,e.target.value="1"),a.Cantidad=p,a.iva=+(a.Cantidad*a.preve1*a.monimp/100).toFixed(2),a.factura=+(a.Cantidad*a.preve1+a.iva).toFixed(2),a.nota=+(a.Cantidad*a.preve3).toFixed(2),a.impuesto=+(a.Cantidad*a.preve1*a.monimp/100).toFixed(2);let r=0,b=0;for(const f of this.dataSeleccionada)r+=f.nota,b+=f.factura-f.iva;null===(o=this.FormData.get("subtotalF"))||void 0===o||o.setValue(b.toFixed(2)),null===(i=this.FormData.get("subtotalN"))||void 0===i||i.setValue(r.toFixed(2)),null===(l=this.FormData.get("totalF"))||void 0===l||l.setValue(this.calcularTotal$()),null===(h=this.FormData.get("totalBS"))||void 0===h||h.setValue(this.calcularTotalBS()),this.cantidadVacia=""===e.target.value.trim()}todosCamposTienenValores(){const a=this.dataSeleccionada.every(e=>!isNaN(e.Cantidad)&&e.Cantidad>0);return this.mostrarMensajeError=!a,a}validateNumber(a){const e=String.fromCharCode(a.which);/[0-9]/.test(e)||a.preventDefault()}calcularSubTotal(){let a=0;for(const e of this.dataSeleccionada)a+=e.nota,this.totalMayorCincuenta=a>=50;return a.toFixed(2)}calcularSubTotalFactura(){let a=0;for(const e of this.dataSeleccionada)a+=e.factura-e.iva;return a.toFixed(2)}calcularIva(){var a;let e=0;for(const o of this.dataSeleccionada)e+=o.iva;return null===(a=this.FormData.get("ivaF"))||void 0===a||a.setValue(e.toFixed(2)),e.toFixed(2)}calcularTotal$(){const o=+this.calcularSubTotalFactura()+ +this.calcularIva();return this.totalMayorCincuenta=o>=50,o.toFixed(2)}calcularTotalBS(){return(+this.calcularTotal$()*this.tasdol).toFixed(2)}}return(n=g).\u0275fac=function(a){return new(a||n)(t.Y36(Z.F0),t.Y36(Z.gz),t.Y36(U.s),t.Y36(s.qu),t.Y36(F.eN),t.Y36(S.F),t.Y36(c.Br),t.Y36(C.K))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-listorders"]],decls:139,vars:21,consts:[[3,"translucent"],["scroll-y","true",3,"fullscreen"],["align","center"],[2,"float","right","margin-right","30px",3,"click"],["name","arrow-forward-outline","color","danger",2,"font-size","3em"],[3,"formGroup"],["position","floating"],["name","newspaper-outline"],["formControlName","codcli"],["name","document-text-outline"],["name","airplane-outline"],["formControlName","dirsed"],["formControlName","tipdoc"],["value","01"],["name","folder-outline"],["value","05"],["name","search-outline"],["placeholder","Buscar...",1,"custom-search-input",3,"ngModel","ngModelChange","input"],["class","error-message",4,"ngIf"],["size","1"],["size","1.5"],[4,"ngFor","ngForOf"],["placeholder","Sub-Total",3,"disabled","value"],["placeholder","IVA",3,"disabled","value"],["placeholder","Total $",3,"disabled","value"],["placeholder","Total BS",3,"disabled","value"],["color","success","expand","block",3,"disabled","click"],["color","danger","expand","block",3,"click"],[1,"error-message"],["cantidadInputs",""],["placeholder","Cantidad","color","success",3,"ngModel","keypress","ngModelChange","input"],[3,"click"],["name","trash-outline",2,"font-size","30px","color","rgb(216, 15, 15)"]],template:function(a,e){1&a&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"listorders"),t.qZA()()(),t.TgZ(4,"ion-content",1),t._UZ(5,"br"),t.TgZ(6,"ion-title",2),t._uU(7,"Listar Pedidos"),t.qZA(),t._UZ(8,"br")(9,"br"),t.TgZ(10,"ion-title",2),t._uU(11,"Pedidos"),t.qZA(),t.TgZ(12,"a",3),t.NdJ("click",function(){return e.order()}),t._UZ(13,"ion-icon",4),t.qZA(),t._UZ(14,"br")(15,"br"),t.TgZ(16,"form",5),t._UZ(17,"br"),t.TgZ(18,"ion-item")(19,"ion-label",6),t._UZ(20,"ion-icon",7),t._uU(21,".RIF"),t.qZA(),t._UZ(22,"ion-input",8),t.qZA(),t._UZ(23,"br"),t.TgZ(24,"ion-item")(25,"ion-label",6),t._UZ(26,"ion-icon",9),t._uU(27,".Razon Social"),t.qZA(),t._UZ(28,"ion-input",8),t.qZA(),t._UZ(29,"br"),t.TgZ(30,"ion-item")(31,"ion-label",6),t._UZ(32,"ion-icon",10),t._uU(33,".Direccion de Sucursal"),t.qZA(),t._UZ(34,"ion-input",11),t.qZA(),t._UZ(35,"br"),t.TgZ(36,"ion-item")(37,"ion-label",6),t._uU(38,".Tipo de Documento"),t.qZA(),t.TgZ(39,"ion-select",12)(40,"ion-select-option",13),t._UZ(41,"ion-icon",14),t._uU(42,".Factura"),t.qZA(),t.TgZ(43,"ion-select-option",15),t._UZ(44,"ion-icon",9),t._uU(45,".Nota"),t.qZA()()(),t._UZ(46,"br")(47,"br"),t.qZA(),t.TgZ(48,"ion-item")(49,"ion-label",6),t._UZ(50,"ion-icon",16),t._uU(51,".Buscar"),t.qZA(),t.TgZ(52,"ion-input",17),t.NdJ("ngModelChange",function(i){return e.searchText=i})("input",function(i){return e.onSearchInput(i)}),t.qZA()(),t._UZ(53,"br"),t.YNc(54,A,2,0,"div",18),t._UZ(55,"br")(56,"br"),t.TgZ(57,"ion-grid")(58,"ion-row")(59,"ion-col",19)(60,"strong"),t._uU(61,"No"),t.qZA()(),t.TgZ(62,"ion-col",20)(63,"strong"),t._uU(64,"Codigo"),t.qZA()(),t.TgZ(65,"ion-col",20)(66,"strong"),t._uU(67,"Producto"),t.qZA()(),t.TgZ(68,"ion-col",20)(69,"strong"),t._uU(70,"Cantidad"),t.qZA()(),t.TgZ(71,"ion-col",20)(72,"strong"),t._uU(73,"Precio(1)"),t.qZA()(),t.TgZ(74,"ion-col",19)(75,"strong"),t._uU(76,"IVA"),t.qZA()(),t.TgZ(77,"ion-col",19)(78,"strong"),t._uU(79,"Factura"),t.qZA()(),t.TgZ(80,"ion-col",19)(81,"strong"),t._uU(82,"Precio(2)"),t.qZA()(),t.TgZ(83,"ion-col",19)(84,"strong"),t._uU(85,"Nota"),t.qZA()(),t.TgZ(86,"ion-col",19)(87,"strong"),t._uU(88,"Accion"),t.qZA()()(),t.YNc(89,x,23,9,"ion-row",21),t.qZA(),t.TgZ(90,"ion-grid")(91,"ion-row"),t._UZ(92,"ion-col",19)(93,"ion-col",20)(94,"ion-col",20)(95,"ion-col",20),t.TgZ(96,"ion-col",20)(97,"ion-item")(98,"ion-label",6),t._uU(99,"Sub-Total"),t.qZA(),t._UZ(100,"ion-input",22),t.qZA(),t._UZ(101,"br"),t.TgZ(102,"ion-item")(103,"ion-label",6),t._uU(104,"IVA"),t.qZA(),t._UZ(105,"ion-input",23),t.qZA(),t._UZ(106,"br"),t.TgZ(107,"ion-item")(108,"ion-label",6),t._uU(109,"Total $"),t.qZA(),t._UZ(110,"ion-input",24),t.qZA(),t._UZ(111,"br"),t.TgZ(112,"ion-item")(113,"ion-label",6),t._uU(114,"Total BS"),t.qZA(),t._UZ(115,"ion-input",25),t.qZA()(),t._UZ(116,"ion-col",20),t.TgZ(117,"ion-col",20)(118,"ion-item")(119,"ion-label",6),t._uU(120,"Sub-Total"),t.qZA(),t._UZ(121,"ion-input",22),t.qZA(),t._UZ(122,"br"),t.TgZ(123,"ion-item")(124,"ion-label",6),t._uU(125,"IVA"),t.qZA(),t._UZ(126,"ion-input",23),t.qZA(),t._UZ(127,"br"),t.TgZ(128,"ion-item")(129,"ion-label",6),t._uU(130,"Total $"),t.qZA(),t._UZ(131,"ion-input",24),t.qZA()()()(),t._UZ(132,"br")(133,"br"),t.TgZ(134,"ion-button",26),t.NdJ("click",function(){return e.SendData()}),t._uU(135," Guardar\n"),t.qZA(),t._UZ(136,"br"),t.TgZ(137,"ion-button",27),t.NdJ("click",function(){return e.end1()}),t._uU(138,"Salir"),t.qZA()()),2&a&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(12),t.Q6J("formGroup",e.FormData),t.xp6(36),t.Q6J("ngModel",e.searchText),t.xp6(2),t.Q6J("ngIf",!e.todosCamposTienenValores()),t.xp6(35),t.Q6J("ngForOf",e.items),t.xp6(11),t.Q6J("disabled",!0)("value",e.calcularSubTotalFactura()||e.FormData),t.xp6(5),t.Q6J("disabled",!0)("value",e.calcularIva()||e.FormData),t.xp6(5),t.Q6J("disabled",!0)("value",e.calcularTotal$()||e.FormData),t.xp6(5),t.Q6J("disabled",!0)("value",e.calcularTotalBS()||e.FormData),t.xp6(6),t.Q6J("disabled",!0)("value",e.calcularSubTotal()||e.FormData),t.xp6(5),t.Q6J("disabled",!0)("value",0),t.xp6(5),t.Q6J("disabled",!0)("value",e.calcularSubTotal()||e.FormData),t.xp6(3),t.Q6J("disabled",!e.todosCamposTienenValores()||!e.totalMayorCincuenta||e.FormData.invalid))},dependencies:[v.sg,v.O5,s._Y,s.JJ,s.JL,s.On,c.YG,c.wI,c.W2,c.jY,c.Gu,c.gu,c.pK,c.Ie,c.Q$,c.Nd,c.t9,c.n0,c.wd,c.sr,c.QI,c.j9,s.sg,s.u],styles:['@charset "UTF-8";.custom-search-input[_ngcontent-%COMP%]{border:none;border-bottom:1px solid #000;border-radius:0;padding:.5rem;background-color:transparent;width:100%;font-size:1rem;color:#fff;outline:none}.custom-search-input[_ngcontent-%COMP%]:focus{border-bottom:2px solid #007bff}']}),g})()}];let q=(()=>{var n;class g{}return(n=g).\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Z.Bz.forChild(P),Z.Bz]}),g})(),N=(()=>{var n;class g{}return(n=g).\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.ez,s.u5,c.Pc,q,s.UX]}),g})()}}]);