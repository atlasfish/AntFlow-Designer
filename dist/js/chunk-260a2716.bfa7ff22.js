(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-260a2716"],{"219f":function(e,t,o){},"2aef":function(e,t,o){"use strict";o("ac1f"),o("1276"),o("d3b7"),o("159b"),o("e9c4"),o("b64b");var r=function(e,t){var o=e.split(","),r=Object.create(null);return o.forEach((function(e){return r[e]=!0})),t?function(e){return r[e.toLowerCase()]}:function(e){return r[e]}},_=r("accept,accept-charset,accesskey,action,align,alt,async,autocomplete,autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,name,contenteditable,contextmenu,controls,coords,data,datetime,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,type,usemap,value,width,wrap");function a(e,t,o){t.props.value=o,t.on.input=function(t){e.$emit("input",t)},t.on.change=function(t){e.$emit("input",t)}}var n={"el-input":{prepend:function(e,t,o){return e("template",{slot:"prepend"},[t[o]])},append:function(e,t,o){return e("template",{slot:"append"},[t[o]])}},"el-select":{options:function(e,t,o){var r=[];return t.options.forEach((function(t){r.push(e("el-option",{attrs:{label:t.label,value:t.value,disabled:t.disabled}}))})),r}},"el-radio-group":{options:function(e,t,o){var r=[];return t.options.forEach((function(o){"button"===t.optionType?r.push(e("el-radio-button",{attrs:{label:o.value}},[o.label])):r.push(e("el-radio",{attrs:{label:o.value,border:t.border}},[o.label]))})),r}},"el-checkbox-group":{options:function(e,t,o){var r=[];return t.options.forEach((function(o){"button"===t.optionType?r.push(e("el-checkbox-button",{attrs:{label:o.value}},[o.label])):r.push(e("el-checkbox",{attrs:{label:o.value,border:t.border}},[o.label]))})),r}},"el-upload":{"list-type":function(e,t,o){var r=[];return"picture-card"===t["list-type"]?r.push(e("i",{class:"el-icon-plus"})):r.push(e("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[t.buttonText])),t.showTip&&r.push(e("div",{slot:"tip",class:"el-upload__tip"},["只能上传不超过 ",t.fileSize,t.sizeUnit," 的",t.accept,"文件"])),r}}};t["a"]={create:function(){},render:function(e){var t=this,o=JSON.parse(JSON.stringify(this.conf)),r={attrs:{},props:{formData:this.formData,value:this.value||o["defaultValue"]},on:{},style:{}},i=[],s=n[o.tag];return s&&Object.keys(s).forEach((function(t){var r=s[t];o[t]&&i.push(r(e,o,t))})),Object.keys(o).forEach((function(e){var n=o[e];"vModel"===e?a(t,r,void 0===t.value?o["defaultValue"]:t.value):r[e]?r[e]=n:_(e)?r.attrs[e]=n:r.props[e]=n})),e(this.conf.tag,r,i)},props:["conf","value","formData"]}},"4fad":function(e,t,o){var r=o("d039"),_=o("861d"),a=o("c6b6"),n=o("d86b"),i=Object.isExtensible,s=r((function(){i(1)}));e.exports=s||n?function(e){return!!_(e)&&((!n||"ArrayBuffer"!=a(e))&&(!i||i(e)))}:i},"8d8f":function(e,t,o){"use strict";o.r(t);var r,_,a=o("f1f2"),n=a["a"],i=(o("939d"),o("2877")),s=Object(i["a"])(n,r,_,!1,null,"4cfa97a5",null);t["default"]=s.exports},"939d":function(e,t,o){"use strict";o("219f")},bb2f:function(e,t,o){var r=o("d039");e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d86b:function(e,t,o){var r=o("d039");e.exports=r((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},dca8:function(e,t,o){var r=o("23e7"),_=o("bb2f"),a=o("d039"),n=o("861d"),i=o("f183").onFreeze,s=Object.freeze,l=a((function(){s(1)}));r({target:"Object",stat:!0,forced:l,sham:!_},{freeze:function(e){return s&&n(e)?s(i(e)):e}})},f183:function(e,t,o){var r=o("23e7"),_=o("e330"),a=o("d012"),n=o("861d"),i=o("1a2d"),s=o("9bf2").f,l=o("241c"),c=o("057f"),u=o("4fad"),f=o("90e3"),d=o("bb2f"),p=!1,b=f("meta"),m=0,h=function(e){s(e,b,{value:{objectID:"O"+m++,weakData:{}}})},E=function(e,t){if(!n(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,b)){if(!u(e))return"F";if(!t)return"E";h(e)}return e[b].objectID},g=function(e,t){if(!i(e,b)){if(!u(e))return!0;if(!t)return!1;h(e)}return e[b].weakData},v=function(e){return d&&p&&u(e)&&!i(e,b)&&h(e),e},D=function(){O.enable=function(){},p=!0;var e=l.f,t=_([].splice),o={};o[b]=1,e(o).length&&(l.f=function(o){for(var r=e(o),_=0,a=r.length;_<a;_++)if(r[_]===b){t(r,_,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:c.f}))},O=e.exports={enable:D,fastKey:E,getWeakData:g,onFreeze:v};a[b]=!0},f1f2:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_gitee_vue_zto_flow_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("5530"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("b64b"),core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("159b"),core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("d9e2"),core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("d81d"),core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("dca8"),core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_6__),_utils_render_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("2aef"),_api__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("365c"),_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("d0f3"),setFcOrgSelectRule=function(e,t){return{validator:function(o,r,_){var a=t.formModel[o.field];if(0!==Object.keys(a||{}).length){var n=0;e.tabList.forEach((function(e){a&&Array.isArray(a[e])&&(n+=a[e].length)})),_(n?void 0:new Error("".concat(e.title,"不能为空")))}else _()},trigger:_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][e.tag],type:"object",required:!0}};function buildRules(conf,ctx){if(void 0!==conf.vModel&&_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][conf.tag]){var rules=[];if(conf.required){var type=Array.isArray(conf.defaultValue)?"array":void 0,message=Array.isArray(conf.defaultValue)?"请至少选择一个":conf.placeholder;void 0===message&&(message="".concat(conf.label,"不能为空")),"fc-org-select"===conf.tag?rules.push(setFcOrgSelectRule(conf,ctx)):rules.push({required:!0,type:type,message:message,trigger:_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][conf.tag]})}conf.regList&&Array.isArray(conf.regList)&&conf.regList.forEach((function(item){item.pattern&&rules.push({pattern:eval(item.pattern),message:item.message,trigger:_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][conf.tag]})})),ctx.ruleList[conf.vModel]=rules}}var setData=function(e,t,o){o&&e.$set(e.formModel,o,t)},_isMounted=!1,buildData=function(e,t,o){return setData(e,t,o,!0)},layouts={colFormItem:function(e,t,o){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];buildRules(e,o),!_isMounted&&buildData(o,e.defaultValue,e.vModel);var _="";e.labelWidth&&(_="".concat(e.labelWidth,"px")),r&&(_="0px");!_components_DynamicForm_components_generator_config_js__WEBPACK_IMPORTED_MODULE_9__["g"][e.tag]&&e.required||e.tag;var a=function(t){setData(o,t,e.vModel),"fc-org-select"===e.tag&&o.$refs[o.confGlobal.formRef].validateField(e.vModel,(function(){}))},n=t("el-col",{attrs:{span:e.span}},[t("el-form-item",{attrs:{"label-width":_,label:r?"":e.label,prop:e.vModel}},[t(_utils_render_js__WEBPACK_IMPORTED_MODULE_7__["a"],{attrs:{formData:o.formModel,conf:e,value:o.formModel[e.vModel]},ref:"table"===e.rowType?e.vModel:void 0,on:{input:a}})])]);if(r){var i=t("el-col",{attrs:{span:24},style:"font-size: 14px;padding:6px 0px;margin-bottom: 4px;border-bottom: 1px solid #e5e5e5;"},[e.label]);return[i,n]}return n},rowFormItem:function(e,t,o){if("table"===e.rowType){o.tableRefs[e.vModel]=e;var r=Object(D_gitee_vue_zto_flow_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])(Object(D_gitee_vue_zto_flow_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])({},e),{},{config:e,formSize:o.confGlobal.size,labelWidth:"".concat(e.labelWidth||o.confGlobal.labelWidth,"px")});return this.colFormItem(r,t,o,"list"===e.type)}buildRules(e,o);var _,a,n={type:"default"===e.type?void 0:e.type,justify:"default"===e.type?void 0:e.justify,align:"default"===e.type?void 0:e.align,gutter:"number"===typeof e.gutter?e.gutter:void 0},i=t("el-col",{attrs:{span:e.span||24}},[t("el-row",{props:Object(D_gitee_vue_zto_flow_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["a"])({},n)},[Array.isArray(e.children)&&e.children.map((function(e){return layouts[e.layout](e,t,o)}))])]);return e.showDivider?("custom"===e.cmpType&&e.explain&&(a=t("el-tooltip",{attrs:{effect:"dark",content:"组件说明",placement:"top"}},[t("i",{class:"el-icon-info",on:{click:o.showExplain.bind(this,e.explain,e.label)},style:"margin-right: 8px; color: #E6A23C;cursor: pointer;"})])),_=t("el-col",{attrs:{span:24}},[t("el-divider",{attrs:{"content-position":"left"}},[a," ",e.label])]),[_,i]):i}};__webpack_exports__["a"]={data:function(){return{tableRefs:{},drawerTitle:"",drawerText:"",drawerVisible:!1,containerWidth:66,confGlobal:this.$route.params.formData||null,formModel:{},ruleList:{}}},mounted:function(){this.confGlobal?this.initDefaultData(this.confGlobal):this.getConfigByAjax(),_isMounted=!0},methods:{submitForm:function(){var e=this,t=this.checkTableData();this.$refs[this.confGlobal.formRef].validate((function(o){o&&t&&(e.$notify({title:"表单数据",message:"请在控制台中查看数据输出",position:"bottom-right"}),console.log("表单数据",e.formModel))}))},resetForm:function(){this.$refs[this.confGlobal.formRef].resetFields(),this.resetTableData()},resetTableData:function(){var e=this;Object.keys(this.tableRefs).forEach((function(t){e.$refs[t]["$children"][0].reset()}))},checkTableData:function(){var e=this,t=!0;return Object.keys(this.tableRefs).forEach((function(o){var r=e.$refs[o].$children[0].submit();r?e.formModel[o]=r:t=!1})),t},showExplain:function(e,t){e&&(this.drawerTitle=t,this.drawerText=e,this.drawerVisible=!0)},buildDrawer:function(e){var t=this,o=e("pre",{style:"padding-left: 1rem;"},[this.drawerText]);return e("el-drawer",{props:{title:this.drawerTitle+"说明",visible:this.drawerVisible},on:{"update:visible":function(e){return t.drawerVisible=e}}},[o])},buildForm:function(e){var t=this,o=(this.confGlobal.labelPosition,this.confGlobal.fields.map((function(o){return layouts[o.layout](o,e,t)}))),r={props:{model:this.formModel,rules:this.ruleList,size:this.confGlobal.size,labelWidth:this.confGlobal.labelWidth+"px",labelPosition:this.confGlobal.labelPosition||void 0},ref:this.confGlobal.formRef},_=e("el-col",{attrs:{span:24}},[e("el-form-item",{style:"text-align:right;"},[e("el-button",{attrs:{type:"primary"},on:{click:this.submitForm}},["提交"]),e("el-button",{on:{click:this.resetForm}},["重置"])])]);return e("el-form",r,[o,_])},initDefaultData:function(e){var t=this;e.fields.forEach((function(e){t.$set(t.formModel,e.vModel,e.defaultValue)}))},getConfigByAjax:function(){var e=this;Object(_api__WEBPACK_IMPORTED_MODULE_8__["c"])().then((function(t){e.confGlobal=Object.freeze(t.formData),e.initDefaultData(t.formData)}))}},render:function(e){var t=this;return this.confGlobal?e("div",{class:"preview-container",style:"width:"+this.containerWidth+"%;"},[e("el-row",{attrs:{gutter:this.confGlobal.gutter},style:"padding: 2rem 2rem 0;"},[this.buildForm(e)]),e("div",{class:"width-slider"},[e("el-slider",{attrs:{min:30,max:96},model:{value:t.containerWidth,callback:function(e){t.containerWidth=e}}})]),this.buildDrawer(e)]):e("div",{directives:[{name:"loading",value:"true"}],class:"loading-mask"})}}}}]);
//# sourceMappingURL=chunk-260a2716.bfa7ff22.js.map