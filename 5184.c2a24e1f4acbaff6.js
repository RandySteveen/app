"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5184],{5184:(N,_,p)=>{p.r(_),p.d(_,{OrdeslistglobalPageModule:()=>x});var b=p(6814),n=p(95),u=p(9843),Z=p(4193),m=p(5861),v=p(553),t=p(5879),U=p(9862),F=p(2014),A=p(7718);function C(l,h){if(1&l){const d=t.EpF();t.TgZ(0,"ion-row",null,28)(2,"ion-col",19),t._uU(3),t.qZA(),t.TgZ(4,"ion-col",20),t._uU(5),t.qZA(),t.TgZ(6,"ion-col",20),t._uU(7),t.qZA(),t.TgZ(8,"ion-col",20)(9,"ion-input",29),t.NdJ("keypress",function(o){t.CHM(d);const e=t.oxw();return t.KtG(e.validateNumber(o))})("ngModelChange",function(o){const r=t.CHM(d).$implicit;return t.KtG(r.Cantidad=o)})("input",function(o){const r=t.CHM(d).$implicit,s=t.oxw();return t.KtG(s.updateCantidad(r,o))}),t.qZA()(),t.TgZ(10,"ion-col",20),t._uU(11),t.qZA(),t.TgZ(12,"ion-col",19),t._uU(13),t.qZA(),t.TgZ(14,"ion-col",19),t._uU(15),t.qZA(),t.TgZ(16,"ion-col",19),t._uU(17),t.qZA(),t.TgZ(18,"ion-col",19),t._uU(19),t.qZA(),t.TgZ(20,"ion-col",19)(21,"a",30),t.NdJ("click",function(){const e=t.CHM(d).$implicit,r=t.oxw();return t.KtG(r.deleteOrders(e))}),t._UZ(22,"ion-icon",31),t.qZA()()()}if(2&l){const d=h.$implicit,a=h.index,o=t.oxw();t.xp6(3),t.Oqu((o.currentPage-1)*o.itemsPerPage+a+1),t.xp6(2),t.Oqu(d.codart),t.xp6(2),t.Oqu(d.desart),t.xp6(2),t.Q6J("ngModel",d.Cantidad),t.xp6(2),t.hij(" ",d.preve1," "),t.xp6(2),t.hij("",d.iva," "),t.xp6(2),t.hij("",d.factura," "),t.xp6(2),t.Oqu(d.preve3),t.xp6(2),t.hij("",d.nota," ")}}const S=[{path:"",component:(()=>{var l;class h{constructor(a,o,e,r,s,c,g,i){this.router=a,this.route=o,this.fb=e,this.http=r,this.alertController=s,this.storage=c,this.dataSharingService=g,this.fb1=i,this.searchText="",this.items=[],this.currentPage=1,this.itemsPerPage=10,this.displayedItems=[],this.dataSeleccionada=[],this.allData=[],this.totalMayorCincuenta=!1,this.cantidadVacia=!0,this.mostrarMensajeError=!1,this.initStorage(),this.FormData=this.fb.group({tipdoc:new n.NI("",n.kI.required),subtotalF:new n.NI(""),subtotalN:new n.NI(""),ivaF:new n.NI(""),totalF:new n.NI(""),totalBS:new n.NI(""),pedidos:[{}],tasdolar:new n.NI(""),fectas:new n.NI(""),nomcli:new n.NI(""),codcli:new n.NI(""),dirsed:new n.NI("")}),this.cantidadVacia=!0,this.formDelete=this.fb1.group({idpedido:new n.NI(""),codart:new n.NI("")})}initStorage(){var a=this;return(0,m.Z)(function*(){yield a.storage.create()})()}viewData(){var a=this;return(0,m.Z)(function*(){a.idsuc=a.route.snapshot.paramMap.get("idsuc"),a.idpedido=a.route.snapshot.paramMap.get("idpedido"),a.http.get(`${v.N.apiOrdersUrl}/list/${a.idsuc}/${a.idpedido}`).subscribe(o=>{if(a.info=o.infoUser,a.codart=o.info[0].codart,a.info&&a.info.length>0){var e,r,s;a.FormData.patchValue({nomcli:a.info[0].nomcli,codcli:a.info[0].codcli,dirsed:a.info[0].dirsed,canart:a.info[0].canart}),a.codclii=a.info[0].codcli,null===(e=a.FormData.get("nomcli"))||void 0===e||e.disable(),null===(r=a.FormData.get("codcli"))||void 0===r||r.disable(),null===(s=a.FormData.get("dirsed"))||void 0===s||s.disable();for(const c of o.info)a.allData.find(i=>i.codart===c.codart)||(a.allData.push(c),a.calcularTotales());a.storage.set(`orderlist_data_${a.idsuc}`,a.allData),a.calcularTotales()}})})()}viewTasa(){var a=this;return(0,m.Z)(function*(){a.http.get(`${v.N.APIURL}/tasaIva`).subscribe(o=>{a.info2=o.info,a.tasdol=a.info2[0].tasdol,a.info2&&a.info2.length>0&&(a.FormData.patchValue({fectas:a.info2[0].fectas,tasdolar:a.info2[0].tasdol}),a.storage.set("tasa_iva_data",a.info2[0]))})})()}ngOnInit(){var a=this;return(0,m.Z)(function*(){a.viewTasa(),a.viewData(),a.route.params.subscribe(o=>{a.codcli=o.codcli}),a.dataSharingService.datosSeleccionados$.subscribe(o=>{a.dataSeleccionada=o,a.dataSharingService.setContador(a.items.length),a.calcularTotales();for(const e of a.dataSeleccionada)a.allData.find(s=>s.codart===e.codart)||a.allData.push(e);a.items=a.allData})})()}deleteOrders(a){var o=this;return(0,m.Z)(function*(){var r;yield(yield o.alertController.create({header:"Eliminar Producto",message:"\xbfSeguro que quieres eliminar el producto seleccionado?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Eliminar",handler:(r=(0,m.Z)(function*(){try{const g=o.items.indexOf(a);var s,c;-1!==g&&(o.items.splice(g,1),null===(s=o.formDelete.get("idpedido"))||void 0===s||s.setValue(o.idpedido),null===(c=o.formDelete.get("codart"))||void 0===c||c.setValue(a.codart),o.http.put(`${v.N.apiOrdersUrl}/delete/product`,o.formDelete.value).subscribe(i=>{console.log("los datos que elimino son estos",i),console.log(o.formDelete.value)}),a.seleccionado=!1),o.dataSharingService.enviarDatosSeleccionados(o.dataSeleccionada)}catch(g){console.error("Error al eliminar el producto:",g)}}),function(){return r.apply(this,arguments)})}]})).present()})()}end1(){this.dataSharingService.enviarDatosSeleccionados([]),this.dataSharingService.setContador(0),this.router.navigate(["dashboard"])}calcularTotales(){var a,o,e,r,s;let c=0,g=0;for(const i of this.items)!isNaN(i.Cantidad)&&!isNaN(i.preve1)&&!isNaN(i.monimp)&&(i.iva=+(i.Cantidad*i.preve1*i.monimp/100).toFixed(2),i.factura=+(i.Cantidad*i.preve1+i.iva).toFixed(2),i.nota=+(i.Cantidad*i.preve3).toFixed(2),i.impuesto=+(i.Cantidad*i.preve1*i.monimp/100).toFixed(2),c+=i.nota,g+=i.factura);null===(a=this.FormData.get("subtotalF"))||void 0===a||a.setValue(g.toFixed(2)),null===(o=this.FormData.get("subtotalN"))||void 0===o||o.setValue(c.toFixed(2)),null===(e=this.FormData.get("totalF"))||void 0===e||e.setValue(this.calcularTotal$()),null===(r=this.FormData.get("totalBS"))||void 0===r||r.setValue(this.calcularTotalBS()),null===(s=this.FormData.get("pedidos"))||void 0===s||s.setValue(this.items)}updateCantidad(a,o){var e,r,s,c;let g=Number(o.target.value);isNaN(g)&&(g=1,o.target.value="1"),a.Cantidad=g,a.iva=+(a.Cantidad*a.preve1*a.monimp/100).toFixed(2),a.factura=+(a.Cantidad*a.preve1+a.iva).toFixed(2),a.nota=+(a.Cantidad*a.preve3).toFixed(2),a.impuesto=+(a.Cantidad*a.preve1*a.monimp/100).toFixed(2);let i=0,T=0;for(const f of this.items)i+=f.nota,T+=f.factura-f.iva;null===(e=this.FormData.get("subtotalF"))||void 0===e||e.setValue(T.toFixed(2)),null===(r=this.FormData.get("subtotalN"))||void 0===r||r.setValue(i.toFixed(2)),null===(s=this.FormData.get("totalF"))||void 0===s||s.setValue(this.calcularTotal$()),null===(c=this.FormData.get("totalBS"))||void 0===c||c.setValue(this.calcularTotalBS()),this.cantidadVacia=""===o.target.value.trim()}validateNumber(a){const o=String.fromCharCode(a.which);/[0-9]/.test(o)||a.preventDefault()}calcularSubTotal(){let a=0;for(const o of this.items)a+=o.nota,this.totalMayorCincuenta=a>=50;return a.toFixed(2)}calcularSubTotalFactura(){let a=0;for(const o of this.items)a+=o.factura-o.iva;return a.toFixed(2)}calcularIva(){var a;let o=0;for(const e of this.items)o+=e.iva;return null===(a=this.FormData.get("ivaF"))||void 0===a||a.setValue(o.toFixed(2)),o.toFixed(2)}calcularTotal$(){const e=+this.calcularSubTotalFactura()+ +this.calcularIva();return this.totalMayorCincuenta=e>=50,e.toFixed(2)}calcularTotalBS(){return(+this.calcularTotal$()*this.tasdol).toFixed(2)}routerdevueld(){this.idsuc=this.route.snapshot.paramMap.get("idsuc"),this.idpedido=this.route.snapshot.paramMap.get("idpedido"),this.router.navigate(["ordeseditglobal",this.idsuc,this.idpedido])}end(){this.dataSharingService.setContador(0),this.dataSharingService.enviarDatosSeleccionados([]),this.router.navigate(["dashboard"])}sortColumn(a){this.filteredItems.sort((o,e)=>o[a]<e[a]?-1:o[a]>e[a]?1:0)}get filteredItems(){return this.items.filter(a=>a.desart.toLowerCase().includes(this.searchText.toLowerCase()))}onSearchInput(a){const o=a.target;null!=o.value&&(this.searchText=o.value,this.loadDisplayedItems())}loadDisplayedItems(){const a=(this.currentPage-1)*this.itemsPerPage;this.displayedItems=this.filteredItems.slice(a,a+this.itemsPerPage)}SendData(){var a=this;return(0,m.Z)(function*(){var e;yield(yield a.alertController.create({header:"Editar Pedido",message:"\xbfSeguro que quieres guardar el pedido editado?",buttons:[{text:"Cancelar",role:"cancel",cssClass:"secondary",handler:()=>{}},{text:"Aceptar",handler:(e=(0,m.Z)(function*(){a.http.post(`${v.N.apiOrdersUrl}/update/${a.idsuc}/${a.idpedido}/${a.codclii}`,a.FormData.value).subscribe(r=>{}),console.log(a.codclii),console.log(a.FormData.value),a.router.navigate(["viewordersglobal"])}),function(){return e.apply(this,arguments)})}]})).present()})()}}return(l=h).\u0275fac=function(a){return new(a||l)(t.Y36(Z.F0),t.Y36(Z.gz),t.Y36(n.qu),t.Y36(U.eN),t.Y36(u.Br),t.Y36(F.K),t.Y36(A.A),t.Y36(n.qu))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-ordeslistglobal"]],decls:137,vars:20,consts:[[3,"translucent"],["scroll-y","true",3,"fullscreen"],["align","center"],[2,"float","right","margin-right","30px",3,"click"],["name","arrow-forward-outline","color","danger",2,"font-size","3em"],[3,"formGroup"],["position","floating"],["name","newspaper-outline"],["formControlName","codcli"],["name","document-text-outline"],["formControlName","nomcli"],["name","airplane-outline"],["formControlName","dirsed"],["formControlName","tipdoc"],["value","01"],["name","folder-outline"],["value","05"],["name","search-outline"],["placeholder","Buscar...",1,"custom-search-input",3,"ngModel","ngModelChange","input"],["size","1"],["size","1.5"],[4,"ngFor","ngForOf"],["placeholder","Sub-Total",3,"disabled","value"],["placeholder","IVA",3,"disabled","value"],["placeholder","Total $",3,"disabled","value"],["placeholder","Total BS",3,"disabled","value"],["color","success","expand","block",3,"disabled","click"],["color","danger","expand","block",3,"click"],["cantidadInputs",""],["placeholder","Cantidad","color","success",3,"ngModel","keypress","ngModelChange","input"],[3,"click"],["name","trash-outline",2,"font-size","30px","color","rgb(216, 15, 15)"]],template:function(a,o){1&a&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"ordeslistglobal"),t.qZA()()(),t.TgZ(4,"ion-content",1),t._UZ(5,"br"),t.TgZ(6,"ion-title",2),t._uU(7,"Editar Pedidos Listados"),t.qZA(),t._UZ(8,"br")(9,"br"),t.TgZ(10,"ion-title",2),t._uU(11,"Pedidos"),t.qZA(),t.TgZ(12,"a",3),t.NdJ("click",function(){return o.routerdevueld()}),t._UZ(13,"ion-icon",4),t.qZA(),t._UZ(14,"br")(15,"br"),t.TgZ(16,"form",5),t._UZ(17,"br"),t.TgZ(18,"ion-item")(19,"ion-label",6),t._UZ(20,"ion-icon",7),t._uU(21,".RIF"),t.qZA(),t._UZ(22,"ion-input",8),t.qZA(),t._UZ(23,"br"),t.TgZ(24,"ion-item")(25,"ion-label",6),t._UZ(26,"ion-icon",9),t._uU(27,".Razon Social "),t.qZA(),t._UZ(28,"ion-input",10),t.qZA(),t._UZ(29,"br"),t.TgZ(30,"ion-item")(31,"ion-label",6),t._UZ(32,"ion-icon",11),t._uU(33,".Direccion de Sucursal "),t.qZA(),t._UZ(34,"ion-input",12),t.qZA(),t._UZ(35,"br"),t.TgZ(36,"ion-item")(37,"ion-label",6),t._uU(38,"Tipo de Documento"),t.qZA(),t.TgZ(39,"ion-select",13)(40,"ion-select-option",14),t._UZ(41,"ion-icon",15),t._uU(42,".Factura "),t.qZA(),t.TgZ(43,"ion-select-option",16),t._UZ(44,"ion-icon",9),t._uU(45,".Nota "),t.qZA()()(),t._UZ(46,"br")(47,"br"),t.qZA(),t.TgZ(48,"ion-item")(49,"ion-label",6),t._UZ(50,"ion-icon",17),t._uU(51,".Buscar"),t.qZA(),t.TgZ(52,"ion-input",18),t.NdJ("ngModelChange",function(r){return o.searchText=r})("input",function(r){return o.onSearchInput(r)}),t.qZA()(),t._UZ(53,"br")(54,"br"),t.TgZ(55,"ion-grid")(56,"ion-row")(57,"ion-col",19)(58,"strong"),t._uU(59,"No"),t.qZA()(),t.TgZ(60,"ion-col",20)(61,"strong"),t._uU(62,"Codigo"),t.qZA()(),t.TgZ(63,"ion-col",20)(64,"strong"),t._uU(65,"Producto"),t.qZA()(),t.TgZ(66,"ion-col",20)(67,"strong"),t._uU(68,"Cantidad"),t.qZA()(),t.TgZ(69,"ion-col",20)(70,"strong"),t._uU(71,"Precio(1)"),t.qZA()(),t.TgZ(72,"ion-col",19)(73,"strong"),t._uU(74,"IVA"),t.qZA()(),t.TgZ(75,"ion-col",19)(76,"strong"),t._uU(77,"Factura"),t.qZA()(),t.TgZ(78,"ion-col",19)(79,"strong"),t._uU(80,"Precio(2)"),t.qZA()(),t.TgZ(81,"ion-col",19)(82,"strong"),t._uU(83,"Nota"),t.qZA()(),t.TgZ(84,"ion-col",19)(85,"strong"),t._uU(86,"Accion"),t.qZA()()(),t.YNc(87,C,23,9,"ion-row",21),t.qZA(),t.TgZ(88,"ion-grid")(89,"ion-row"),t._UZ(90,"ion-col",19)(91,"ion-col",20)(92,"ion-col",20)(93,"ion-col",20),t.TgZ(94,"ion-col",20)(95,"ion-item")(96,"ion-label",6),t._uU(97,"Sub-Total"),t.qZA(),t._UZ(98,"ion-input",22),t.qZA(),t._UZ(99,"br"),t.TgZ(100,"ion-item")(101,"ion-label",6),t._uU(102,"IVA"),t.qZA(),t._UZ(103,"ion-input",23),t.qZA(),t._UZ(104,"br"),t.TgZ(105,"ion-item")(106,"ion-label",6),t._uU(107,"Total $"),t.qZA(),t._UZ(108,"ion-input",24),t.qZA(),t._UZ(109,"br"),t.TgZ(110,"ion-item")(111,"ion-label",6),t._uU(112,"Total BS"),t.qZA(),t._UZ(113,"ion-input",25),t.qZA()(),t._UZ(114,"ion-col",20),t.TgZ(115,"ion-col",20)(116,"ion-item")(117,"ion-label",6),t._uU(118,"Sub-Total"),t.qZA(),t._UZ(119,"ion-input",22),t.qZA(),t._UZ(120,"br"),t.TgZ(121,"ion-item")(122,"ion-label",6),t._uU(123,"IVA"),t.qZA(),t._UZ(124,"ion-input",23),t.qZA(),t._UZ(125,"br"),t.TgZ(126,"ion-item")(127,"ion-label",6),t._uU(128,"Total $"),t.qZA(),t._UZ(129,"ion-input",24),t.qZA()()()(),t._UZ(130,"br")(131,"br"),t.TgZ(132,"ion-button",26),t.NdJ("click",function(){return o.SendData()}),t._uU(133," Guardar\n"),t.qZA(),t._UZ(134,"br"),t.TgZ(135,"ion-button",27),t.NdJ("click",function(){return o.end1()}),t._uU(136,"Salir"),t.qZA()()),2&a&&(t.Q6J("translucent",!0),t.xp6(4),t.Q6J("fullscreen",!0),t.xp6(12),t.Q6J("formGroup",o.FormData),t.xp6(36),t.Q6J("ngModel",o.searchText),t.xp6(35),t.Q6J("ngForOf",o.items),t.xp6(11),t.Q6J("disabled",!0)("value",o.calcularSubTotalFactura()||o.FormData),t.xp6(5),t.Q6J("disabled",!0)("value",o.calcularIva()||o.FormData),t.xp6(5),t.Q6J("disabled",!0)("value",o.calcularTotal$()||o.FormData),t.xp6(5),t.Q6J("disabled",!0)("value",o.calcularTotalBS()||o.FormData),t.xp6(6),t.Q6J("disabled",!0)("value",o.calcularSubTotal()||o.FormData),t.xp6(5),t.Q6J("disabled",!0)("value",0),t.xp6(5),t.Q6J("disabled",!0)("value",o.calcularSubTotal()||o.FormData),t.xp6(3),t.Q6J("disabled",!o.totalMayorCincuenta||o.FormData.invalid))},dependencies:[b.sg,n._Y,n.JJ,n.JL,n.On,u.YG,u.wI,u.W2,u.jY,u.Gu,u.gu,u.pK,u.Ie,u.Q$,u.Nd,u.t9,u.n0,u.wd,u.sr,u.QI,u.j9,n.sg,n.u]}),h})()}];let q=(()=>{var l;class h{}return(l=h).\u0275fac=function(a){return new(a||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[Z.Bz.forChild(S),Z.Bz]}),h})(),x=(()=>{var l;class h{}return(l=h).\u0275fac=function(a){return new(a||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[b.ez,n.u5,u.Pc,q,n.UX]}),h})()}}]);