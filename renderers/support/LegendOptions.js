/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../chunks/tslib.es6","../../core/JSONSupport","../../core/accessorSupport/decorators/property","../../core/arrayUtils","../../core/has","../../core/accessorSupport/ensureType","../../core/accessorSupport/decorators/subclass"],(function(e,t,r,o,s,n,p,i,c){"use strict";var u;e.LegendOptions=u=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).title=null,t}return t._inheritsLoose(r,e),r.prototype.clone=function(){return new u({title:this.title})},r}(o.JSONSupport),r.__decorate([s.property({type:String,json:{write:!0}})],e.LegendOptions.prototype,"title",void 0),e.LegendOptions=u=r.__decorate([c.subclass("esri.renderers.support.LegendOptions")],e.LegendOptions);const l=e.LegendOptions;e.default=l,Object.defineProperty(e,"__esModule",{value:!0})}));
