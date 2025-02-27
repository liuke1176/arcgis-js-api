/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["require","../chunks/_rollupPluginBabelHelpers","../chunks/tslib.es6","../core/Error","../core/HandleOwner","../core/Loadable","../core/Logger","../core/maybe","../core/Promise","../core/promiseUtils","../core/reactiveUtils","../core/accessorSupport/decorators/property","../core/arrayUtils","../core/has","../core/accessorSupport/ensureType","../core/accessorSupport/decorators/subclass","../chunks/vec3f64","./Extent","./Geometry","./Point","./Polygon","./support/axisAngleDegrees","./support/MeshComponent","./support/MeshTransform","./support/MeshVertexAttributes","./support/triangulationUtils","./support/meshUtils/centerAt","./support/meshUtils/loadExternal","./support/meshUtils/offset","./support/meshUtils/primitives","./support/meshUtils/rotate","./support/meshUtils/scale"],(function(e,t,n,r,o,i,s,a,l,c,p,u,h,m,f,d,x,y,g,v,b,w,A,_,M,P,S,z,U,R,F,O){"use strict";var C;const G=s.getLogger("esri.geometry.Mesh");let L=C=function(n){function o(e){var t;return(t=n.call(this,e)||this).components=null,t.transform=null,t.external=null,t.hasZ=!0,t.hasM=!1,t.vertexAttributes=new M.MeshVertexAttributes,t.type="mesh",t}t._inheritsLoose(o,n);var i=o.prototype;return i.initialize=function(){(a.isNone(this.external)||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.handles.add(p.react((()=>{var e;return{vertexAttributes:this.vertexAttributes,components:null==(e=this.components)?void 0:e.map((e=>e.clone())),transform:a.isSome(this.transform)?this.transform.clone():null}}),(()=>this._set("external",null)),{once:!0,sync:!0}))}))},i.addComponent=function(e){this.loaded?(this.components||(this.components=[]),this.components.push(A.from(e)),this.notifyChange("components")):G.error("addComponent()","Mesh must be loaded before applying operations")},i.removeComponent=function(e){if(this.loaded){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}G.error("removeComponent()","Provided component is not part of the list of components")}else G.error("removeComponent()","Mesh must be loaded before applying operations")},i.rotate=function(e,t,n,r){return w.fromAxisAndAngle(T.x,e,E),w.fromAxisAndAngle(T.y,t,j),w.fromAxisAndAngle(T.z,n,k),w.compose(E,j,E),w.compose(E,k,E),F.rotate(this,E,r),this},i.offset=function(e,t,n,r){return this.loaded?(B[0]=e,B[1]=t,B[2]=n,U.offset(this,B,r),this):(G.error("offset()","Mesh must be loaded before applying operations"),this)},i.scale=function(e,t){return this.loaded?(O.scale(this,e,t),this):(G.error("scale()","Mesh must be loaded before applying operations"),this)},i.centerAt=function(e,t){return this.loaded?(S.centerAt(this,e,t),this):(G.error("centerAt()","Mesh must be loaded before applying operations"),this)},i.load=function(e){return a.isSome(this.external)&&this.addResolvingPromise(z.loadExternal(this,this.external.source,e)),Promise.resolve(this)},i.clone=function(){const e=this.components?new Map:null,t=this.components?new Map:null,n={components:this.components?this.components.map((n=>n.cloneWithDeduplication(e,t))):null,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),transform:a.isSome(this.transform)?this.transform.clone():null,external:a.isSome(this.external)?{source:this.external.source,extent:a.isSome(this.external.extent)?this.external.extent.clone():null}:null};return new C(n)},i.vertexAttributesChanged=function(){this.notifyChange("vertexAttributes")},i.toBinaryGLTF=function(){var n=t._asyncToGenerator((function*(t){const{toBinaryGLTF:n}=yield new Promise(((t,n)=>e(["./support/meshUtils/exporters/gltf/gltfexport"],t,n)));return n(this,t)}));function r(e){return n.apply(this,arguments)}return r}(),o.createBox=function(e,t){if(!(e instanceof v))return G.error(".createBox()","expected location to be a Point instance"),null;const n=new C(R.convertUnitGeometry(R.createUnitSizeBox(),e,t));return t&&t.imageFace&&"all"!==t.imageFace?R.extractSingleFaceOfBox(n,t.imageFace):n},o.createSphere=function(e,t){return e instanceof v?new C(R.convertUnitGeometry(R.createUnitSizeSphere(t&&t.densificationFactor||0),e,t)):(G.error(".createSphere()","expected location to be a Point instance"),null)},o.createCylinder=function(e,t){return e instanceof v?new C(R.convertUnitGeometry(R.createUnitSizeCylinder(t&&t.densificationFactor||0),e,t)):(G.error(".createCylinder()","expected location to be a Point instance"),null)},o.createPlane=function(e,t){var n;if(!(e instanceof v))return G.error(".createPlane()","expected location to be a Point instance"),null;const r=null!=(n=null==t?void 0:t.facing)?n:"up",o=R.convertPlaneSizeParameter(r,null==t?void 0:t.size);return new C(R.convertUnitGeometry(R.createUnitSizePlane(r),e,{...t,size:o}))},o.createFromPolygon=function(e,t){if(!(e instanceof b))return G.error(".createFromPolygon()","expected polygon to be a Polygon instance"),null;const n=P.triangulate(e);return new C({vertexAttributes:new M.MeshVertexAttributes({position:n.position}),components:[new A({faces:n.faces,shading:"flat",material:t&&t.material||null})],spatialReference:e.spatialReference})},o.createFromGLTF=function(){var n=t._asyncToGenerator((function*(t,n,o){if(!(t instanceof v))throw G.error(".createfromGLTF()","expected location to be a Point instance"),new r("invalid-input","Expected location to be a Point instance");const{loadGLTFMesh:i}=yield c.whenOrAbort(new Promise(((t,n)=>e(["./support/meshUtils/loadGLTFMesh"],t,n))),o);return new C(yield i(t,n,o))}));function o(e,t,r){return n.apply(this,arguments)}return o}(),o.createWithExternalSource=function(e,t,n){var r,o,i;const s=null!=(r=null==n?void 0:n.extent)?r:null,a=null!=(o=null==n?void 0:n.transform.clone())?o:new _;a.origin=[e.x,e.y,null!=(i=e.z)?i:0];const l=e.spatialReference;return new C({external:{source:t,extent:s},transform:a,spatialReference:l})},o.createIncomplete=function(e,t){var n,o;const i=null!=(n=null==t?void 0:t.transform.clone())?n:new _;i.origin=[e.x,e.y,null!=(o=e.z)?o:0];const s=e.spatialReference,a=new C({transform:i,spatialReference:s});return a.addResolvingPromise(Promise.reject(new r("mesh-incomplete","Mesh resources are not complete"))),a},t._createClass(o,[{key:"hasExtent",get:function(){return!this.loaded&&a.isSome(this.external)&&a.isSome(this.external.extent)||this.loaded&&this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0)}},{key:"boundingInfo",get:function(){const e=this.vertexAttributes.position,t=this.spatialReference;if(0===e.length||this.components&&0===this.components.length)return{extent:new y({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t}),center:new v({x:0,y:0,z:0,spatialReference:t})};const n=a.isSome(this.transform)?this.transform.project(e,t):e;let r=1/0,o=1/0,i=1/0,s=-1/0,l=-1/0,c=-1/0,p=0,u=0,h=0;const m=n.length,f=1/(m/3);let d=0;for(;d<m;){const e=n[d++],t=n[d++],a=n[d++];r=Math.min(r,e),o=Math.min(o,t),i=Math.min(i,a),s=Math.max(s,e),l=Math.max(l,t),c=Math.max(c,a),p+=f*e,u+=f*t,h+=f*a}return{extent:new y({xmin:r,ymin:o,zmin:i,xmax:s,ymax:l,zmax:c,spatialReference:t}),center:new v({x:p,y:u,z:h,spatialReference:t})}}},{key:"anchor",get:function(){if(a.isSome(this.transform))return this.transform.getOriginPoint(this.spatialReference);const e=this.boundingInfo;return new v({x:e.center.x,y:e.center.y,z:e.extent.zmin,spatialReference:this.spatialReference})}},{key:"origin",get:function(){return a.isSome(this.transform)?this.transform.getOriginPoint(this.spatialReference):this.boundingInfo.center}},{key:"extent",get:function(){return!this.loaded&&a.isSome(this.external)&&a.isSome(this.external.extent)?this.external.extent.clone():this.boundingInfo.extent}}]),o}(o.HandleOwnerMixin(i.LoadableMixin(l.EsriPromiseMixin(g))));n.__decorate([u.property({type:[A],json:{write:!0}})],L.prototype,"components",void 0),n.__decorate([u.property({type:_,json:{write:!0}})],L.prototype,"transform",void 0),n.__decorate([u.property({constructOnly:!0})],L.prototype,"external",void 0),n.__decorate([u.property({readOnly:!0})],L.prototype,"hasExtent",null),n.__decorate([u.property({readOnly:!0})],L.prototype,"boundingInfo",null),n.__decorate([u.property({readOnly:!0})],L.prototype,"anchor",null),n.__decorate([u.property({readOnly:!0})],L.prototype,"origin",null),n.__decorate([u.property({readOnly:!0,json:{read:!1}})],L.prototype,"extent",null),n.__decorate([u.property({readOnly:!0,json:{read:!1,write:!0,default:!0}})],L.prototype,"hasZ",void 0),n.__decorate([u.property({readOnly:!0,json:{read:!1,write:!0,default:!1}})],L.prototype,"hasM",void 0),n.__decorate([u.property({type:M.MeshVertexAttributes,nonNullable:!0,json:{write:!0}})],L.prototype,"vertexAttributes",void 0),L=C=n.__decorate([d.subclass("esri.geometry.Mesh")],L);const T={x:x.fromValues(1,0,0),y:x.fromValues(0,1,0),z:x.fromValues(0,0,1)},E=w.create(),j=w.create(),k=w.create(),B=x.create();return L}));
