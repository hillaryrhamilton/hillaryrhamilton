(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{2875:function(e,r,o){"use strict";o.d(r,{default:function(){return n.a}});var t=o(885),n=o.n(t)},885:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),function(e,r){for(var o in r)Object.defineProperty(e,o,{enumerable:!0,get:r[o]})}(r,{default:function(){return s},getImageProps:function(){return l}});let t=o(9284),n=o(8882),i=o(2615),a=t._(o(1451));function l(e){let{props:r}=(0,n.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/hillaryrhamilton/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,o]of Object.entries(r))void 0===o&&delete r[e];return{props:r}}let s=i.Image},5:function(e){e.exports={style:{fontFamily:"'__CalSans_a5811c', '__CalSans_Fallback_a5811c'"},className:"__className_a5811c"}},55:function(e,r,o){"use strict";o.d(r,{m:function(){return E}});var t=/^\[(.+)\]$/;function n(e,r){var o=e;return r.split("-").forEach(function(e){o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o}var i=/\s+/;function a(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=function e(r){if("string"==typeof r)return r;for(var o,t="",n=0;n<r.length;n++)r[n]&&(o=e(r[n]))&&(t&&(t+=" "),t+=o);return t}(e))&&(t&&(t+=" "),t+=r);return t}function l(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var s=/^\[(?:([a-z-]+):)?(.+)\]$/i,c=/^\d+\/\d+$/,d=new Set(["px","full","screen"]),u=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,p=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,f=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function b(e){return y(e)||d.has(e)||c.test(e)||m(e)}function m(e){return _(e,"length",I)}function g(e){return _(e,"size",P)}function h(e){return _(e,"position",P)}function v(e){return _(e,"url",M)}function x(e){return _(e,"number",y)}function y(e){return!Number.isNaN(Number(e))}function w(e){return e.endsWith("%")&&y(e.slice(0,-1))}function k(e){return N(e)||_(e,"number",N)}function z(e){return s.test(e)}function C(){return!0}function j(e){return u.test(e)}function G(e){return _(e,"",S)}function _(e,r,o){var t=s.exec(e);return!!t&&(t[1]?t[1]===r:o(t[2]))}function I(e){return p.test(e)}function P(){return!1}function M(e){return e.startsWith("url(")}function N(e){return Number.isInteger(Number(e))}function S(e){return f.test(e)}var E=function(){for(var e,r,o,l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];var d=function(i){var a=s[0];return r=(e=function(e){var r,o,i,a,l,s,c,d,u,p,f;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++r>e&&(r=0,t=o,o=new Map)}return{get:function(e){var r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set:function(e,r){o.has(e)?o.set(e,r):n(e,r)}}}(e.cacheSize),splitModifiers:(o=1===(r=e.separator||":").length,i=r[0],a=r.length,function(e){for(var t,n=[],l=0,s=0,c=0;c<e.length;c++){var d=e[c];if(0===l){if(d===i&&(o||e.slice(c,c+a)===r)){n.push(e.slice(s,c)),s=c+a;continue}if("/"===d){t=c;continue}}"["===d?l++:"]"===d&&l--}var u=0===n.length?e:e.substring(s),p=u.startsWith("!"),f=p?u.substring(1):u;return{modifiers:n,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:t&&t>s?t-s:void 0}}),...(d=e.theme,u=e.prefix,p={nextPart:new Map,validators:[]},(f=Object.entries(e.classGroups),u?f.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?u+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[u+e[0],e[1]]})):e})]}):f).forEach(function(e){var r=e[0];(function e(r,o,t,i){r.forEach(function(r){if("string"==typeof r){(""===r?o:n(o,r)).classGroupId=t;return}if("function"==typeof r){if(r.isThemeGetter){e(r(i),o,t,i);return}o.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(function(r){var a=r[0];e(r[1],n(o,a),t,i)})})})(e[1],p,r,d)}),l=e.conflictingClassGroups,c=void 0===(s=e.conflictingClassGroupModifiers)?{}:s,{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,o){if(0===r.length)return o.classGroupId;var t=r[0],n=o.nextPart.get(t),i=n?e(r.slice(1),n):void 0;if(i)return i;if(0!==o.validators.length){var a=r.join("-");return o.validators.find(function(e){return(0,e.validator)(a)})?.classGroupId}}(r,p)||function(e){if(t.test(e)){var r=t.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){var o=l[e]||[];return r&&c[e]?[].concat(o,c[e]):o}})}}(s.slice(1).reduce(function(e,r){return r(e)},a()))).cache.get,o=e.cache.set,d=u,u(i)};function u(t){var n,a,l,s,c,d=r(t);if(d)return d;var u=(a=(n=e).splitModifiers,l=n.getClassGroupId,s=n.getConflictingClassGroupIds,c=new Set,t.trim().split(i).map(function(e){var r=a(e),o=r.modifiers,t=r.hasImportantModifier,n=r.baseClassName,i=r.maybePostfixModifierPosition,s=l(i?n.substring(0,i):n),c=!!i;if(!s){if(!i||!(s=l(n)))return{isTailwindClass:!1,originalClassName:e};c=!1}var d=(function(e){if(e.length<=1)return e;var r=[],o=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,o.sort().concat([e])),o=[]):o.push(e)}),r.push.apply(r,o.sort()),r})(o).join(":");return{isTailwindClass:!0,modifierId:t?d+"!":d,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,o=e.classGroupId,t=e.hasPostfixModifier,n=r+o;return!c.has(n)&&(c.add(n),s(o,t).forEach(function(e){return c.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return o(t,u),u}return function(){return d(a.apply(null,arguments))}}(function(){var e=l("colors"),r=l("spacing"),o=l("blur"),t=l("brightness"),n=l("borderColor"),i=l("borderRadius"),a=l("borderSpacing"),s=l("borderWidth"),c=l("contrast"),d=l("grayscale"),u=l("hueRotate"),p=l("invert"),f=l("gap"),_=l("gradientColorStops"),I=l("gradientColorStopPositions"),P=l("inset"),M=l("margin"),N=l("opacity"),S=l("padding"),E=l("saturate"),O=l("scale"),T=l("sepia"),W=l("skew"),$=l("space"),R=l("translate"),q=function(){return["auto","contain","none"]},A=function(){return["auto","hidden","clip","visible","scroll"]},F=function(){return["auto",z,r]},L=function(){return[z,r]},V=function(){return["",b]},B=function(){return["auto",y,z]},D=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},H=function(){return["solid","dashed","dotted","double","none"]},J=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},K=function(){return["start","end","center","between","around","evenly","stretch"]},Q=function(){return["","0",z]},U=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},X=function(){return[y,x]},Y=function(){return[y,z]};return{cacheSize:500,theme:{colors:[C],spacing:[b],blur:["none","",j,z],brightness:X(),borderColor:[e],borderRadius:["none","","full",j,z],borderSpacing:L(),borderWidth:V(),contrast:X(),grayscale:Q(),hueRotate:Y(),invert:Q(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[w,m],inset:F(),margin:F(),opacity:X(),padding:L(),saturate:X(),scale:X(),sepia:Q(),skew:Y(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",z]}],container:["container"],columns:[{columns:[j]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(D(),[z])}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[P]}],"inset-x":[{"inset-x":[P]}],"inset-y":[{"inset-y":[P]}],start:[{start:[P]}],end:[{end:[P]}],top:[{top:[P]}],right:[{right:[P]}],bottom:[{bottom:[P]}],left:[{left:[P]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",k]}],basis:[{basis:F()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",z]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",k]}],"grid-cols":[{"grid-cols":[C]}],"col-start-end":[{col:["auto",{span:["full",k]},z]}],"col-start":[{"col-start":B()}],"col-end":[{"col-end":B()}],"grid-rows":[{"grid-rows":[C]}],"row-start-end":[{row:["auto",{span:[k]},z]}],"row-start":[{"row-start":B()}],"row-end":[{"row-end":B()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",z]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(K())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(K(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(K(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[S]}],px:[{px:[S]}],py:[{py:[S]}],ps:[{ps:[S]}],pe:[{pe:[S]}],pt:[{pt:[S]}],pr:[{pr:[S]}],pb:[{pb:[S]}],pl:[{pl:[S]}],m:[{m:[M]}],mx:[{mx:[M]}],my:[{my:[M]}],ms:[{ms:[M]}],me:[{me:[M]}],mt:[{mt:[M]}],mr:[{mr:[M]}],mb:[{mb:[M]}],ml:[{ml:[M]}],"space-x":[{"space-x":[$]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[$]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",z,r]}],"min-w":[{"min-w":["min","max","fit",z,b]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[j]},j,z]}],h:[{h:[z,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",z,b]}],"max-h":[{"max-h":[z,r,"min","max","fit"]}],"font-size":[{text:["base",j,m]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",x]}],"font-family":[{font:[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",z]}],"line-clamp":[{"line-clamp":["none",y,x]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",z,b]}],"list-image":[{"list-image":["none",z]}],"list-style-type":[{list:["none","disc","decimal",z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[N]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[N]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(H(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",b]}],"underline-offset":[{"underline-offset":["auto",z,b]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[N]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(D(),[h])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",g]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},v]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[I]}],"gradient-via-pos":[{via:[I]}],"gradient-to-pos":[{to:[I]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[N]}],"border-style":[{border:[].concat(H(),["hidden"])}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[N]}],"divide-style":[{divide:H()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(H())}],"outline-offset":[{"outline-offset":[z,b]}],"outline-w":[{outline:[b]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:V()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[N]}],"ring-offset-w":[{"ring-offset":[b]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",j,G]}],"shadow-color":[{shadow:[C]}],opacity:[{opacity:[N]}],"mix-blend":[{"mix-blend":J()}],"bg-blend":[{"bg-blend":J()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",j,z]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[E]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[N]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",z]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",z]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[O]}],"scale-x":[{"scale-x":[O]}],"scale-y":[{"scale-y":[O]}],rotate:[{rotate:[k,z]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[W]}],"skew-y":[{"skew-y":[W]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",z]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[b,x]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})}}]);