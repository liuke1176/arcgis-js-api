/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../renderers/ClassBreaksRenderer","../../renderers/DictionaryRenderer","../../renderers/DotDensityRenderer","../../renderers/HeatmapRenderer","../../renderers/Renderer","../../renderers/SimpleRenderer","../../renderers/UniqueValueRenderer","../../renderers/support/jsonUtils","../../core/Error","../../core/maybe","../heuristics/outline","../heuristics/sizeRange","./support/utils","../support/adapters/support/layerUtils","../../chunks/location"],(function(e,r,i,n,a,o,l,s,t,p,m,c,u,y,d,b,h){"use strict";function f(e){return T.apply(this,arguments)}function T(){return(T=r._asyncToGenerator((function*(e){if(!e||!e.layer)throw new m("location-renderer:missing-parameters","'layer' parameter is required");const r={...e};r.symbolType=r.symbolType||"2d";const i=b.createLayerAdapter(r.layer,b.featureCapableLayerTypes);if(r.layer=i,!i)throw new m("location-renderer:invalid-parameters","'layer' must be one of these types: "+b.getLayerTypeLabels(b.featureCapableLayerTypes).join(", "));const n=c.isSome(r.signal)?{signal:r.signal}:null;yield i.load(n);const a=i.geometryType;if(r.outlineOptimizationEnabled="polygon"===a&&r.outlineOptimizationEnabled,r.sizeOptimizationEnabled=("point"===a||"multipoint"===a||"polyline"===a)&&r.sizeOptimizationEnabled,"mesh"===a)r.symbolType="3d-volumetric",r.colorMixMode=r.colorMixMode||"replace",r.edgesType=r.edgesType||"none";else{if("3d-volumetric-uniform"===r.symbolType&&"point"!==a)throw new m("location-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");if(r.symbolType.indexOf("3d-volumetric")>-1&&(!r.view||"3d"!==r.view.type))throw new m("location-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'")}return r}))).apply(this,arguments)}function v(e,r){return g.apply(this,arguments)}function g(){return(g=r._asyncToGenerator((function*(e,r){let i=e.locationScheme,n=null,a=null;const o=yield d.getBasemapInfo(e.basemap,e.view);if(n=c.isSome(o.basemapId)?o.basemapId:null,a=c.isSome(o.basemapTheme)?o.basemapTheme:null,i)return{scheme:h.cloneScheme(i),basemapId:n,basemapTheme:a};const l=h.getSchemes({basemap:n,basemapTheme:a,geometryType:r,worldScale:e.symbolType.indexOf("3d-volumetric")>-1,view:e.view});return l&&(i=l.primaryScheme,n=l.basemapId,a=l.basemapTheme),{scheme:i,basemapId:n,basemapTheme:a}}))).apply(this,arguments)}function w(e){return S.apply(this,arguments)}function S(){return(S=r._asyncToGenerator((function*(e){const r=yield f(e),i=r.layer.geometryType,n=yield v(r,i),a=n.scheme;if(!a)throw new m("location-renderer:insufficient-info","Unable to find location scheme");const{view:o,layer:l,signal:t}=r,[p,c]=yield Promise.all([r.outlineOptimizationEnabled?u({view:o,layer:l,signal:t}):null,r.sizeOptimizationEnabled?y({view:o,layer:l,signal:t}):null]),b=p&&p.opacity,T=new s({symbol:d.createSymbol(i,{type:r.symbolType,color:a.color,size:d.getSymbolSizeFromScheme(a,i),outline:d.getSymbolOutlineFromScheme(a,i,b),meshInfo:{colorMixMode:r.colorMixMode,edgesType:r.edgesType}})});return p&&p.visualVariables&&p.visualVariables.length&&(T.visualVariables=p.visualVariables.map((e=>e.clone()))),c&&c.minSize&&(T.visualVariables?T.visualVariables.push(c.minSize):T.visualVariables=[c.minSize]),{renderer:T,locationScheme:h.cloneScheme(a),basemapId:n.basemapId,basemapTheme:n.basemapTheme}}))).apply(this,arguments)}e.createRenderer=w,Object.defineProperty(e,"__esModule",{value:!0})}));
