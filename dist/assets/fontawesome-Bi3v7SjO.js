import{g as Vt}from"./vendor-gH-7aFTg.js";import{R as Wa}from"./router-CMAxaAdi.js";/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */function Ee(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}function Kt(e){if(Array.isArray(e))return e}function qt(e){if(Array.isArray(e))return Ee(e)}function Jt(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function Qt(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Ua(r.key),r)}}function Zt(e,a,t){return a&&Qt(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function oe(e,a){var t=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=Xe(e))||a){t&&(e=t);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(l){throw l},f:n}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,o=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var l=t.next();return o=l.done,l},e:function(l){s=!0,i=l},f:function(){try{o||t.return==null||t.return()}finally{if(s)throw i}}}}function b(e,a,t){return(a=Ua(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function er(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ar(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,a===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=i.call(t)).done)&&(s.push(r.value),s.length!==a);l=!0);}catch(d){c=!0,n=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw n}}return s}}function tr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function na(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?na(Object(t),!0).forEach(function(r){b(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):na(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function me(e,a){return Kt(e)||ar(e,a)||Xe(e,a)||tr()}function E(e){return qt(e)||er(e)||Xe(e)||rr()}function nr(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Ua(e){var a=nr(e,"string");return typeof a=="symbol"?a:a+""}function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},fe(e)}function Xe(e,a){if(e){if(typeof e=="string")return Ee(e,a);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Ee(e,a):void 0}}var ia=function(){},Ve={},Ya={},Ha=null,Ba={mark:ia,measure:ia};try{typeof window<"u"&&(Ve=window),typeof document<"u"&&(Ya=document),typeof MutationObserver<"u"&&(Ha=MutationObserver),typeof performance<"u"&&(Ba=performance)}catch{}var ir=Ve.navigator||{},oa=ir.userAgent,sa=oa===void 0?"":oa,$=Ve,w=Ya,la=Ha,ne=Ba;$.document;var T=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",Ga=~sa.indexOf("MSIE")||~sa.indexOf("Trident/"),be,or=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,sr=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Slab Press|Slab|Whiteboard)?.*/i,Xa={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"}},lr={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Va=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],P="classic",ee="duotone",Ka="sharp",qa="sharp-duotone",Ja="chisel",Qa="etch",Za="jelly",et="jelly-duo",at="jelly-fill",tt="notdog",rt="notdog-duo",nt="slab",it="slab-press",ot="thumbprint",st="whiteboard",fr="Classic",cr="Duotone",ur="Sharp",dr="Sharp Duotone",mr="Chisel",vr="Etch",pr="Jelly",hr="Jelly Duo",gr="Jelly Fill",br="Notdog",yr="Notdog Duo",xr="Slab",Sr="Slab Press",wr="Thumbprint",Ar="Whiteboard",lt=[P,ee,Ka,qa,Ja,Qa,Za,et,at,tt,rt,nt,it,ot,st];be={},b(b(b(b(b(b(b(b(b(b(be,P,fr),ee,cr),Ka,ur),qa,dr),Ja,mr),Qa,vr),Za,pr),et,hr),at,gr),tt,br),b(b(b(b(b(be,rt,yr),nt,xr),it,Sr),ot,wr),st,Ar);var kr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"}},Pr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"}},Cr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),Ir={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},whiteboard:{semibold:"fawsb"}},ft=["fak","fa-kit","fakd","fa-kit-duotone"],fa={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Or=["kit"],Er="kit",Nr="kit-duotone",Mr="Kit",zr="Kit Duotone";b(b({},Er,Mr),Nr,zr);var Lr={kit:{"fa-kit":"fak"}},Tr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Fr={kit:{fak:"fa-kit"}},ca={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},ye,ie={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press"],_r="classic",$r="duotone",Rr="sharp",Dr="sharp-duotone",Wr="chisel",Ur="etch",Yr="jelly",Hr="jelly-duo",Br="jelly-fill",Gr="notdog",Xr="notdog-duo",Vr="slab",Kr="slab-press",qr="thumbprint",Jr="whiteboard",Qr="Classic",Zr="Duotone",en="Sharp",an="Sharp Duotone",tn="Chisel",rn="Etch",nn="Jelly",on="Jelly Duo",sn="Jelly Fill",ln="Notdog",fn="Notdog Duo",cn="Slab",un="Slab Press",dn="Thumbprint",mn="Whiteboard";ye={},b(b(b(b(b(b(b(b(b(b(ye,_r,Qr),$r,Zr),Rr,en),Dr,an),Wr,tn),Ur,rn),Yr,nn),Hr,on),Br,sn),Gr,ln),b(b(b(b(b(ye,Xr,fn),Vr,cn),Kr,un),qr,dn),Jr,mn);var vn="kit",pn="kit-duotone",hn="Kit",gn="Kit Duotone";b(b({},vn,hn),pn,gn);var bn={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"}},yn={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"]},Ne={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"}},xn=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],ct=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr"].concat(jr,xn),Sn=["solid","regular","light","thin","duotone","brands","semibold"],ut=[1,2,3,4,5,6,7,8,9,10],wn=ut.concat([11,12,13,14,15,16,17,18,19,20]),An=["aw","fw","pull-left","pull-right"],kn=[].concat(E(Object.keys(yn)),Sn,An,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",ie.GROUP,ie.SWAP_OPACITY,ie.PRIMARY,ie.SECONDARY]).concat(ut.map(function(e){return"".concat(e,"x")})).concat(wn.map(function(e){return"w-".concat(e)})),Pn={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},z="___FONT_AWESOME___",Me=16,dt="fa",mt="svg-inline--fa",U="data-fa-i2svg",ze="data-fa-pseudo-element",Cn="data-fa-pseudo-element-pending",Ke="data-prefix",qe="data-icon",ua="fontawesome-i2svg",In="async",On=["HTML","HEAD","STYLE","SCRIPT"],vt=["::before","::after",":before",":after"],pt=function(){try{return!0}catch{return!1}}();function ae(e){return new Proxy(e,{get:function(t,r){return r in t?t[r]:t[P]}})}var ht=f({},Xa);ht[P]=f(f(f(f({},{"fa-duotone":"duotone"}),Xa[P]),fa.kit),fa["kit-duotone"]);var En=ae(ht),Le=f({},Ir);Le[P]=f(f(f(f({},{duotone:"fad"}),Le[P]),ca.kit),ca["kit-duotone"]);var da=ae(Le),Te=f({},Ne);Te[P]=f(f({},Te[P]),Fr.kit);var gt=ae(Te),Fe=f({},bn);Fe[P]=f(f({},Fe[P]),Lr.kit);ae(Fe);var Nn=or,bt="fa-layers-text",Mn=sr,zn=f({},kr);ae(zn);var Ln=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],xe=lr,Tn=[].concat(E(Or),E(kn)),J=$.FontAwesomeConfig||{};function Fn(e){var a=w.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function jn(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(w&&typeof w.querySelector=="function"){var _n=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_n.forEach(function(e){var a=me(e,2),t=a[0],r=a[1],n=jn(Fn(t));n!=null&&(J[r]=n)})}var yt={styleDefault:"solid",familyDefault:P,cssPrefix:dt,replacementClass:mt,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};J.familyPrefix&&(J.cssPrefix=J.familyPrefix);var V=f(f({},yt),J);V.autoReplaceSvg||(V.observeMutations=!1);var m={};Object.keys(yt).forEach(function(e){Object.defineProperty(m,e,{enumerable:!0,set:function(t){V[e]=t,Q.forEach(function(r){return r(m)})},get:function(){return V[e]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(a){V.cssPrefix=a,Q.forEach(function(t){return t(m)})},get:function(){return V.cssPrefix}});$.FontAwesomeConfig=m;var Q=[];function $n(e){return Q.push(e),function(){Q.splice(Q.indexOf(e),1)}}var B=Me,M={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rn(e){if(!(!e||!T)){var a=w.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var t=w.head.childNodes,r=null,n=t.length-1;n>-1;n--){var i=t[n],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return w.head.insertBefore(a,r),e}}var Dn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ma(){for(var e=12,a="";e-- >0;)a+=Dn[Math.random()*62|0];return a}function K(e){for(var a=[],t=(e||[]).length>>>0;t--;)a[t]=e[t];return a}function Je(e){return e.classList?K(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function xt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Wn(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,'="').concat(xt(e[t]),'" ')},"").trim()}function ve(e){return Object.keys(e||{}).reduce(function(a,t){return a+"".concat(t,": ").concat(e[t].trim(),";")},"")}function Qe(e){return e.size!==M.size||e.x!==M.x||e.y!==M.y||e.rotate!==M.rotate||e.flipX||e.flipY}function Un(e){var a=e.transform,t=e.containerWidth,r=e.iconWidth,n={transform:"translate(".concat(t/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:n,inner:l,path:c}}function Yn(e){var a=e.transform,t=e.width,r=t===void 0?Me:t,n=e.height,i=n===void 0?Me:n,o="";return Ga?o+="translate(".concat(a.x/B-r/2,"em, ").concat(a.y/B-i/2,"em) "):o+="translate(calc(-50% + ".concat(a.x/B,"em), calc(-50% + ").concat(a.y/B,"em)) "),o+="scale(".concat(a.size/B*(a.flipX?-1:1),", ").concat(a.size/B*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Hn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}`;function St(){var e=dt,a=mt,t=m.cssPrefix,r=m.replacementClass,n=Hn;if(t!==e||r!==a){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");n=n.replace(i,".".concat(t,"-")).replace(o,"--".concat(t,"-")).replace(s,".".concat(r))}return n}var va=!1;function Se(){m.autoAddCss&&!va&&(Rn(St()),va=!0)}var Bn={mixout:function(){return{dom:{css:St,insertCss:Se}}},hooks:function(){return{beforeDOMElementCreation:function(){Se()},beforeI2svg:function(){Se()}}}},L=$||{};L[z]||(L[z]={});L[z].styles||(L[z].styles={});L[z].hooks||(L[z].hooks={});L[z].shims||(L[z].shims=[]);var O=L[z],wt=[],At=function(){w.removeEventListener("DOMContentLoaded",At),ce=1,wt.map(function(a){return a()})},ce=!1;T&&(ce=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),ce||w.addEventListener("DOMContentLoaded",At));function Gn(e){T&&(ce?setTimeout(e,0):wt.push(e))}function te(e){var a=e.tag,t=e.attributes,r=t===void 0?{}:t,n=e.children,i=n===void 0?[]:n;return typeof e=="string"?xt(e):"<".concat(a," ").concat(Wn(r),">").concat(i.map(te).join(""),"</").concat(a,">")}function pa(e,a,t){if(e&&e[a]&&e[a][t])return{prefix:a,iconName:t,icon:e[a][t]}}var we=function(a,t,r,n){var i=Object.keys(a),o=i.length,s=t,l,c,d;for(r===void 0?(l=1,d=a[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,a[c],c,a);return d};function kt(e){return E(e).length!==1?null:e.codePointAt(0).toString(16)}function ha(e){return Object.keys(e).reduce(function(a,t){var r=e[t],n=!!r.icon;return n?a[r.iconName]=r.icon:a[t]=r,a},{})}function Pt(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.skipHooks,n=r===void 0?!1:r,i=ha(a);typeof O.hooks.addPack=="function"&&!n?O.hooks.addPack(e,ha(a)):O.styles[e]=f(f({},O.styles[e]||{}),i),e==="fas"&&Pt("fa",a)}var Z=O.styles,Xn=O.shims,Ct=Object.keys(gt),Vn=Ct.reduce(function(e,a){return e[a]=Object.keys(gt[a]),e},{}),Ze=null,It={},Ot={},Et={},Nt={},Mt={};function Kn(e){return~Tn.indexOf(e)}function qn(e,a){var t=a.split("-"),r=t[0],n=t.slice(1).join("-");return r===e&&n!==""&&!Kn(n)?n:null}var zt=function(){var a=function(i){return we(Z,function(o,s,l){return o[l]=we(s,i,{}),o},{})};It=a(function(n,i,o){if(i[3]&&(n[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){n[l.toString(16)]=o})}return n}),Ot=a(function(n,i,o){if(n[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){n[l]=o})}return n}),Mt=a(function(n,i,o){var s=i[2];return n[o]=o,s.forEach(function(l){n[l]=o}),n});var t="far"in Z||m.autoFetchSvg,r=we(Xn,function(n,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!t&&(s="fas"),typeof o=="string"&&(n.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(n.unicodes[o.toString(16)]={prefix:s,iconName:l}),n},{names:{},unicodes:{}});Et=r.names,Nt=r.unicodes,Ze=pe(m.styleDefault,{family:m.familyDefault})};$n(function(e){Ze=pe(e.styleDefault,{family:m.familyDefault})});zt();function ea(e,a){return(It[e]||{})[a]}function Jn(e,a){return(Ot[e]||{})[a]}function W(e,a){return(Mt[e]||{})[a]}function Lt(e){return Et[e]||{prefix:null,iconName:null}}function Qn(e){var a=Nt[e],t=ea("fas",e);return a||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function R(){return Ze}var Tt=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var a=P,t=Ct.reduce(function(r,n){return r[n]="".concat(m.cssPrefix,"-").concat(n),r},{});return lt.forEach(function(r){(e.includes(t[r])||e.some(function(n){return Vn[r].includes(n)}))&&(a=r)}),a}function pe(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.family,r=t===void 0?P:t,n=En[r][e];if(r===ee&&!e)return"fad";var i=da[r][e]||da[r][n],o=e in O.styles?e:null,s=i||o||null;return s}function ei(e){var a=[],t=null;return e.forEach(function(r){var n=qn(m.cssPrefix,r);n?t=n:r&&a.push(r)}),{iconName:t,rest:a}}function ga(e){return e.sort().filter(function(a,t,r){return r.indexOf(a)===t})}var ba=ct.concat(ft);function he(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.skipLookups,r=t===void 0?!1:t,n=null,i=ga(e.filter(function(p){return ba.includes(p)})),o=ga(e.filter(function(p){return!ba.includes(p)})),s=i.filter(function(p){return n=p,!Va.includes(p)}),l=me(s,1),c=l[0],d=c===void 0?null:c,u=Zn(i),v=f(f({},ei(o)),{},{prefix:pe(d,{family:u})});return f(f(f({},v),ni({values:e,family:u,styles:Z,config:m,canonical:v,givenPrefix:n})),ai(r,n,v))}function ai(e,a,t){var r=t.prefix,n=t.iconName;if(e||!r||!n)return{prefix:r,iconName:n};var i=a==="fa"?Lt(n):{},o=W(r,n);return n=i.iconName||o||n,r=i.prefix||r,r==="far"&&!Z.far&&Z.fas&&!m.autoFetchSvg&&(r="fas"),{prefix:r,iconName:n}}var ti=lt.filter(function(e){return e!==P||e!==ee}),ri=Object.keys(Ne).filter(function(e){return e!==P}).map(function(e){return Object.keys(Ne[e])}).flat();function ni(e){var a=e.values,t=e.family,r=e.canonical,n=e.givenPrefix,i=n===void 0?"":n,o=e.styles,s=o===void 0?{}:o,l=e.config,c=l===void 0?{}:l,d=t===ee,u=a.includes("fa-duotone")||a.includes("fad"),v=c.familyDefault==="duotone",p=r.prefix==="fad"||r.prefix==="fa-duotone";if(!d&&(u||v||p)&&(r.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(r.prefix="fab"),!r.prefix&&ti.includes(t)){var x=Object.keys(s).find(function(S){return ri.includes(S)});if(x||c.autoFetchSvg){var g=Cr.get(t).defaultShortPrefixId;r.prefix=g,r.iconName=W(r.prefix,r.iconName)||r.iconName}}return(r.prefix==="fa"||i==="fa")&&(r.prefix=R()||"fas"),r}var ii=function(){function e(){Jt(this,e),this.definitions={}}return Zt(e,[{key:"add",value:function(){for(var t=this,r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=n.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){t.definitions[s]=f(f({},t.definitions[s]||{}),o[s]),Pt(s,o[s]),zt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,r){var n=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(n).map(function(i){var o=n[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];t[s]||(t[s]={}),d.length>0&&d.forEach(function(u){typeof u=="string"&&(t[s][u]=c)}),t[s][l]=c}),t}}])}(),ya=[],G={},X={},oi=Object.keys(X);function si(e,a){var t=a.mixoutsTo;return ya=e,G={},Object.keys(X).forEach(function(r){oi.indexOf(r)===-1&&delete X[r]}),ya.forEach(function(r){var n=r.mixout?r.mixout():{};if(Object.keys(n).forEach(function(o){typeof n[o]=="function"&&(t[o]=n[o]),fe(n[o])==="object"&&Object.keys(n[o]).forEach(function(s){t[o]||(t[o]={}),t[o][s]=n[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){G[o]||(G[o]=[]),G[o].push(i[o])})}r.provides&&r.provides(X)}),t}function je(e,a){for(var t=arguments.length,r=new Array(t>2?t-2:0),n=2;n<t;n++)r[n-2]=arguments[n];var i=G[e]||[];return i.forEach(function(o){a=o.apply(null,[a].concat(r))}),a}function Y(e){for(var a=arguments.length,t=new Array(a>1?a-1:0),r=1;r<a;r++)t[r-1]=arguments[r];var n=G[e]||[];n.forEach(function(i){i.apply(null,t)})}function D(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return X[e]?X[e].apply(null,a):void 0}function _e(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,t=e.prefix||R();if(a)return a=W(t,a)||a,pa(Ft.definitions,t,a)||pa(O.styles,t,a)}var Ft=new ii,li=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,Y("noAuto")},fi={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return T?(Y("beforeI2svg",a),D("pseudoElements2svg",a),D("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Gn(function(){ui({autoReplaceSvgRoot:t}),Y("watch",a)})}},ci={icon:function(a){if(a===null)return null;if(fe(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:W(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var t=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=pe(a[0]);return{prefix:r,iconName:W(r,t)||t}}if(typeof a=="string"&&(a.indexOf("".concat(m.cssPrefix,"-"))>-1||a.match(Nn))){var n=he(a.split(" "),{skipLookups:!0});return{prefix:n.prefix||R(),iconName:W(n.prefix,n.iconName)||n.iconName}}if(typeof a=="string"){var i=R();return{prefix:i,iconName:W(i,a)||a}}}},C={noAuto:li,config:m,dom:fi,parse:ci,library:Ft,findIconDefinition:_e,toHtml:te},ui=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=a.autoReplaceSvgRoot,r=t===void 0?w:t;(Object.keys(O.styles).length>0||m.autoFetchSvg)&&T&&m.autoReplaceSvg&&C.dom.i2svg({node:r})};function ge(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return te(r)})}}),Object.defineProperty(e,"node",{get:function(){if(T){var r=w.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function di(e){var a=e.children,t=e.main,r=e.mask,n=e.attributes,i=e.styles,o=e.transform;if(Qe(o)&&t.found&&!r.found){var s=t.width,l=t.height,c={x:s/l/2,y:.5};n.style=ve(f(f({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:n,children:a}]}function mi(e){var a=e.prefix,t=e.iconName,r=e.children,n=e.attributes,i=e.symbol,o=i===!0?"".concat(a,"-").concat(m.cssPrefix,"-").concat(t):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},n),{},{id:o}),children:r}]}]}function vi(e){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(t){return t in e})}function aa(e){var a=e.icons,t=a.main,r=a.mask,n=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.maskId,c=e.extra,d=e.watchable,u=d===void 0?!1:d,v=r.found?r:t,p=v.width,x=v.height,g=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(I){return c.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(c.classes).join(" "),S={children:[],attributes:f(f({},c.attributes),{},{"data-prefix":n,"data-icon":i,class:g,role:c.attributes.role||"img",viewBox:"0 0 ".concat(p," ").concat(x)})};!vi(c.attributes)&&!c.attributes["aria-hidden"]&&(S.attributes["aria-hidden"]="true"),u&&(S.attributes[U]="");var y=f(f({},S),{},{prefix:n,iconName:i,main:t,mask:r,maskId:l,transform:o,symbol:s,styles:f({},c.styles)}),A=r.found&&t.found?D("generateAbstractMask",y)||{children:[],attributes:{}}:D("generateAbstractIcon",y)||{children:[],attributes:{}},k=A.children,F=A.attributes;return y.children=k,y.attributes=F,s?mi(y):di(y)}function xa(e){var a=e.content,t=e.width,r=e.height,n=e.transform,i=e.extra,o=e.watchable,s=o===void 0?!1:o,l=f(f({},i.attributes),{},{class:i.classes.join(" ")});s&&(l[U]="");var c=f({},i.styles);Qe(n)&&(c.transform=Yn({transform:n,width:t,height:r}),c["-webkit-transform"]=c.transform);var d=ve(c);d.length>0&&(l.style=d);var u=[];return u.push({tag:"span",attributes:l,children:[a]}),u}function pi(e){var a=e.content,t=e.extra,r=f(f({},t.attributes),{},{class:t.classes.join(" ")}),n=ve(t.styles);n.length>0&&(r.style=n);var i=[];return i.push({tag:"span",attributes:r,children:[a]}),i}var Ae=O.styles;function $e(e){var a=e[0],t=e[1],r=e.slice(4),n=me(r,1),i=n[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(xe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:t,icon:o}}var hi={found:!1,width:512,height:512};function gi(e,a){!pt&&!m.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function Re(e,a){var t=a;return a==="fa"&&m.styleDefault!==null&&(a=R()),new Promise(function(r,n){if(t==="fa"){var i=Lt(e)||{};e=i.iconName||e,a=i.prefix||a}if(e&&a&&Ae[a]&&Ae[a][e]){var o=Ae[a][e];return r($e(o))}gi(e,a),r(f(f({},hi),{},{icon:m.showMissingIcons&&e?D("missingIconAbstract")||{}:{}}))})}var Sa=function(){},De=m.measurePerformance&&ne&&ne.mark&&ne.measure?ne:{mark:Sa,measure:Sa},q='FA "7.0.0"',bi=function(a){return De.mark("".concat(q," ").concat(a," begins")),function(){return jt(a)}},jt=function(a){De.mark("".concat(q," ").concat(a," ends")),De.measure("".concat(q," ").concat(a),"".concat(q," ").concat(a," begins"),"".concat(q," ").concat(a," ends"))},ta={begin:bi,end:jt},se=function(){};function wa(e){var a=e.getAttribute?e.getAttribute(U):null;return typeof a=="string"}function yi(e){var a=e.getAttribute?e.getAttribute(Ke):null,t=e.getAttribute?e.getAttribute(qe):null;return a&&t}function xi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(m.replacementClass)}function Si(){if(m.autoReplaceSvg===!0)return le.replace;var e=le[m.autoReplaceSvg];return e||le.replace}function wi(e){return w.createElementNS("http://www.w3.org/2000/svg",e)}function Ai(e){return w.createElement(e)}function _t(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.ceFn,r=t===void 0?e.tag==="svg"?wi:Ai:t;if(typeof e=="string")return w.createTextNode(e);var n=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){n.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){n.appendChild(_t(o,{ceFn:r}))}),n}function ki(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var le={replace:function(a){var t=a[0];if(t.parentNode)if(a[1].forEach(function(n){t.parentNode.insertBefore(_t(n),t)}),t.getAttribute(U)===null&&m.keepOriginalSource){var r=w.createComment(ki(t));t.parentNode.replaceChild(r,t)}else t.remove()},nest:function(a){var t=a[0],r=a[1];if(~Je(t).indexOf(m.replacementClass))return le.replace(a);var n=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===m.replacementClass||l.match(n)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?t.removeAttribute("class"):t.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return te(s)}).join(`
`);t.setAttribute(U,""),t.innerHTML=o}};function Aa(e){e()}function $t(e,a){var t=typeof a=="function"?a:se;if(e.length===0)t();else{var r=Aa;m.mutateApproach===In&&(r=$.requestAnimationFrame||Aa),r(function(){var n=Si(),i=ta.begin("mutate");e.map(n),i(),t()})}}var ra=!1;function Rt(){ra=!0}function We(){ra=!1}var ue=null;function ka(e){if(la&&m.observeMutations){var a=e.treeCallback,t=a===void 0?se:a,r=e.nodeCallback,n=r===void 0?se:r,i=e.pseudoElementsCallback,o=i===void 0?se:i,s=e.observeMutationsRoot,l=s===void 0?w:s;ue=new la(function(c){if(!ra){var d=R();K(c).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!wa(u.addedNodes[0])&&(m.searchPseudoElements&&o(u.target),t(u.target)),u.type==="attributes"&&u.target.parentNode&&m.searchPseudoElements&&o([u.target],!0),u.type==="attributes"&&wa(u.target)&&~Ln.indexOf(u.attributeName))if(u.attributeName==="class"&&yi(u.target)){var v=he(Je(u.target)),p=v.prefix,x=v.iconName;u.target.setAttribute(Ke,p||d),x&&u.target.setAttribute(qe,x)}else xi(u.target)&&n(u.target)})}}),T&&ue.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Pi(){ue&&ue.disconnect()}function Ci(e){var a=e.getAttribute("style"),t=[];return a&&(t=a.split(";").reduce(function(r,n){var i=n.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),t}function Ii(e){var a=e.getAttribute("data-prefix"),t=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",n=he(Je(e));return n.prefix||(n.prefix=R()),a&&t&&(n.prefix=a,n.iconName=t),n.iconName&&n.prefix||(n.prefix&&r.length>0&&(n.iconName=Jn(n.prefix,e.innerText)||ea(n.prefix,kt(e.innerText))),!n.iconName&&m.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(n.iconName=e.firstChild.data)),n}function Oi(e){var a=K(e.attributes).reduce(function(t,r){return t.name!=="class"&&t.name!=="style"&&(t[r.name]=r.value),t},{});return a}function Ei(){return{iconName:null,prefix:null,transform:M,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pa(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},t=Ii(e),r=t.iconName,n=t.prefix,i=t.rest,o=Oi(e),s=je("parseNodeAttributes",{},e),l=a.styleParser?Ci(e):[];return f({iconName:r,prefix:n,transform:M,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ni=O.styles;function Dt(e){var a=m.autoReplaceSvg==="nest"?Pa(e,{styleParser:!1}):Pa(e);return~a.extra.classes.indexOf(bt)?D("generateLayersText",e,a):D("generateSvgReplacementMutation",e,a)}function Mi(){return[].concat(E(ft),E(ct))}function Ca(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!T)return Promise.resolve();var t=w.documentElement.classList,r=function(u){return t.add("".concat(ua,"-").concat(u))},n=function(u){return t.remove("".concat(ua,"-").concat(u))},i=m.autoFetchSvg?Mi():Va.concat(Object.keys(Ni));i.includes("fa")||i.push("fa");var o=[".".concat(bt,":not([").concat(U,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(U,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=K(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),n("complete");else return Promise.resolve();var l=ta.begin("onTree"),c=s.reduce(function(d,u){try{var v=Dt(u);v&&d.push(v)}catch(p){pt||p.name==="MissingIcon"&&console.error(p)}return d},[]);return new Promise(function(d,u){Promise.all(c).then(function(v){$t(v,function(){r("active"),r("complete"),n("pending"),typeof a=="function"&&a(),l(),d()})}).catch(function(v){l(),u(v)})})}function zi(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Dt(e).then(function(t){t&&$t([t],a)})}function Li(e){return function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:_e(a||{}),n=t.mask;return n&&(n=(n||{}).icon?n:_e(n||{})),e(r,f(f({},t),{},{mask:n}))}}var Ti=function(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=t.transform,n=r===void 0?M:r,i=t.symbol,o=i===void 0?!1:i,s=t.mask,l=s===void 0?null:s,c=t.maskId,d=c===void 0?null:c,u=t.classes,v=u===void 0?[]:u,p=t.attributes,x=p===void 0?{}:p,g=t.styles,S=g===void 0?{}:g;if(a){var y=a.prefix,A=a.iconName,k=a.icon;return ge(f({type:"icon"},a),function(){return Y("beforeDOMElementCreation",{iconDefinition:a,params:t}),aa({icons:{main:$e(k),mask:l?$e(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:y,iconName:A,transform:f(f({},M),n),symbol:o,maskId:d,extra:{attributes:x,styles:S,classes:v}})})}},Fi={mixout:function(){return{icon:Li(Ti)}},hooks:function(){return{mutationObserverCallbacks:function(t){return t.treeCallback=Ca,t.nodeCallback=zi,t}}},provides:function(a){a.i2svg=function(t){var r=t.node,n=r===void 0?w:r,i=t.callback,o=i===void 0?function(){}:i;return Ca(n,o)},a.generateSvgReplacementMutation=function(t,r){var n=r.iconName,i=r.prefix,o=r.transform,s=r.symbol,l=r.mask,c=r.maskId,d=r.extra;return new Promise(function(u,v){Promise.all([Re(n,i),l.iconName?Re(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(p){var x=me(p,2),g=x[0],S=x[1];u([t,aa({icons:{main:g,mask:S},prefix:i,iconName:n,transform:o,symbol:s,maskId:c,extra:d,watchable:!0})])}).catch(v)})},a.generateAbstractIcon=function(t){var r=t.children,n=t.attributes,i=t.main,o=t.transform,s=t.styles,l=ve(s);l.length>0&&(n.style=l);var c;return Qe(o)&&(c=D("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:n}}}},ji={mixout:function(){return{layer:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.classes,i=n===void 0?[]:n;return ge({type:"layer"},function(){Y("beforeDOMElementCreation",{assembler:t,params:r});var o=[];return t(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(E(i)).join(" ")},children:o}]})}}}},_i={mixout:function(){return{counter:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};r.title;var n=r.classes,i=n===void 0?[]:n,o=r.attributes,s=o===void 0?{}:o,l=r.styles,c=l===void 0?{}:l;return ge({type:"counter",content:t},function(){return Y("beforeDOMElementCreation",{content:t,params:r}),pi({content:t.toString(),extra:{attributes:s,styles:c,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(E(i))}})})}}}},$i={mixout:function(){return{text:function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,i=n===void 0?M:n,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,u=d===void 0?{}:d;return ge({type:"text",content:t},function(){return Y("beforeDOMElementCreation",{content:t,params:r}),xa({content:t,transform:f(f({},M),i),extra:{attributes:c,styles:u,classes:["".concat(m.cssPrefix,"-layers-text")].concat(E(s))}})})}}},provides:function(a){a.generateLayersText=function(t,r){var n=r.transform,i=r.extra,o=null,s=null;if(Ga){var l=parseInt(getComputedStyle(t).fontSize,10),c=t.getBoundingClientRect();o=c.width/l,s=c.height/l}return Promise.resolve([t,xa({content:t.innerHTML,width:o,height:s,transform:n,extra:i,watchable:!0})])}}},Wt=new RegExp('"',"ug"),Ia=[1105920,1112319],Oa=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Pr),Pn),Tr),Ue=Object.keys(Oa).reduce(function(e,a){return e[a.toLowerCase()]=Oa[a],e},{}),Ri=Object.keys(Ue).reduce(function(e,a){var t=Ue[a];return e[a]=t[900]||E(Object.entries(t))[0][1],e},{});function Di(e){var a=e.replace(Wt,"");return kt(E(a)[0]||"")}function Wi(e){var a=e.getPropertyValue("font-feature-settings").includes("ss01"),t=e.getPropertyValue("content"),r=t.replace(Wt,""),n=r.codePointAt(0),i=n>=Ia[0]&&n<=Ia[1],o=r.length===2?r[0]===r[1]:!1;return i||o||a}function Ui(e,a){var t=e.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(a),n=isNaN(r)?"normal":r;return(Ue[t]||{})[n]||Ri[t]}function Ea(e,a){var t="".concat(Cn).concat(a.replace(":","-"));return new Promise(function(r,n){if(e.getAttribute(t)!==null)return r();var i=K(e.children),o=i.filter(function(H){return H.getAttribute(ze)===a})[0],s=$.getComputedStyle(e,a),l=s.getPropertyValue("font-family"),c=l.match(Mn),d=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!c)return e.removeChild(o),r();if(c&&u!=="none"&&u!==""){var v=s.getPropertyValue("content"),p=Ui(l,d),x=Di(v),g=c[0].startsWith("FontAwesome"),S=Wi(s),y=ea(p,x),A=y;if(g){var k=Qn(x);k.iconName&&k.prefix&&(y=k.iconName,p=k.prefix)}if(y&&!S&&(!o||o.getAttribute(Ke)!==p||o.getAttribute(qe)!==A)){e.setAttribute(t,A),o&&e.removeChild(o);var F=Ei(),I=F.extra;I.attributes[ze]=a,Re(y,p).then(function(H){var re=aa(f(f({},F),{},{icons:{main:H,mask:Tt()},prefix:p,iconName:A,extra:I,watchable:!0})),j=w.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?e.insertBefore(j,e.firstChild):e.appendChild(j),j.outerHTML=re.map(function(Xt){return te(Xt)}).join(`
`),e.removeAttribute(t),r()}).catch(n)}else r()}else r()})}function Yi(e){return Promise.all([Ea(e,"::before"),Ea(e,"::after")])}function Hi(e){return e.parentNode!==document.head&&!~On.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ze)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Bi=function(a){return!!a&&vt.some(function(t){return a.includes(t)})},Gi=function(a){if(!a)return[];for(var t=new Set,r=[a],n=[/(?=\s:)/,new RegExp("(?<=\\)\\)?[^,]*,)")],i=function(){var p=s[o];r=r.flatMap(function(x){return x.split(p).map(function(g){return g.replace(/,\s*$/,"").trim()})})},o=0,s=n;o<s.length;o++)i();r=r.flatMap(function(v){return v.includes("(")?v:v.split(",").map(function(p){return p.trim()})});var l=oe(r),c;try{for(l.s();!(c=l.n()).done;){var d=c.value;if(Bi(d)){var u=vt.reduce(function(v,p){return v.replace(p,"")},d);u!==""&&u!=="*"&&t.add(u)}}}catch(v){l.e(v)}finally{l.f()}return t};function Na(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(T){var t;if(a)t=e;else if(m.searchPseudoElementsFullScan)t=e.querySelectorAll("*");else{var r=new Set,n=oe(document.styleSheets),i;try{for(n.s();!(i=n.n()).done;){var o=i.value;try{var s=oe(o.cssRules),l;try{for(s.s();!(l=s.n()).done;){var c=l.value,d=Gi(c.selectorText),u=oe(d),v;try{for(u.s();!(v=u.n()).done;){var p=v.value;r.add(p)}}catch(g){u.e(g)}finally{u.f()}}}catch(g){s.e(g)}finally{s.f()}}catch(g){m.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(g.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(g){n.e(g)}finally{n.f()}if(!r.size)return;var x=Array.from(r).join(", ");try{t=e.querySelectorAll(x)}catch{}}return new Promise(function(g,S){var y=K(t).filter(Hi).map(Yi),A=ta.begin("searchPseudoElements");Rt(),Promise.all(y).then(function(){A(),We(),g()}).catch(function(){A(),We(),S()})})}}var Xi={hooks:function(){return{mutationObserverCallbacks:function(t){return t.pseudoElementsCallback=Na,t}}},provides:function(a){a.pseudoElements2svg=function(t){var r=t.node,n=r===void 0?w:r;m.searchPseudoElements&&Na(n)}}},Ma=!1,Vi={mixout:function(){return{dom:{unwatch:function(){Rt(),Ma=!0}}}},hooks:function(){return{bootstrap:function(){ka(je("mutationObserverCallbacks",{}))},noAuto:function(){Pi()},watch:function(t){var r=t.observeMutationsRoot;Ma?We():ka(je("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},za=function(a){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,n){var i=n.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},t)},Ki={mixout:function(){return{parse:{transform:function(t){return za(t)}}}},hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-transform");return n&&(t.transform=za(n)),t}}},provides:function(a){a.generateAbstractTransformGrouping=function(t){var r=t.main,n=t.transform,i=t.containerWidth,o=t.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(n.x*32,", ").concat(n.y*32,") "),c="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),d="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:u,path:v};return{tag:"g",attributes:f({},p.outer),children:[{tag:"g",attributes:f({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:f(f({},r.icon.attributes),p.path)}]}]}}}},ke={x:0,y:0,width:"100%",height:"100%"};function La(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function qi(e){return e.tag==="g"?e.children:[e]}var Ji={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-mask"),i=n?he(n.split(" ").map(function(o){return o.trim()})):Tt();return i.prefix||(i.prefix=R()),t.mask=i,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides:function(a){a.generateAbstractMask=function(t){var r=t.children,n=t.attributes,i=t.main,o=t.mask,s=t.maskId,l=t.transform,c=i.width,d=i.icon,u=o.width,v=o.icon,p=Un({transform:l,containerWidth:u,iconWidth:c}),x={tag:"rect",attributes:f(f({},ke),{},{fill:"white"})},g=d.children?{children:d.children.map(La)}:{},S={tag:"g",attributes:f({},p.inner),children:[La(f({tag:d.tag,attributes:f(f({},d.attributes),p.path)},g))]},y={tag:"g",attributes:f({},p.outer),children:[S]},A="mask-".concat(s||ma()),k="clip-".concat(s||ma()),F={tag:"mask",attributes:f(f({},ke),{},{id:A,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,y]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:k},children:qi(v)},F]};return r.push(I,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(k,")"),mask:"url(#".concat(A,")")},ke)}),{children:r,attributes:n}}}},Qi={provides:function(a){var t=!1;$.matchMedia&&(t=$.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],n={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:f(f({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=f(f({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:f(f({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return t||s.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:f(f({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:t?[]:[{tag:"animate",attributes:f(f({},o),{},{values:"1;0;0;0;0;1;"})}]}),t||r.push({tag:"path",attributes:f(f({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Zi={hooks:function(){return{parseNodeAttributes:function(t,r){var n=r.getAttribute("data-fa-symbol"),i=n===null?!1:n===""?!0:n;return t.symbol=i,t}}}},eo=[Bn,Fi,ji,_i,$i,Xi,Vi,Ki,Ji,Qi,Zi];si(eo,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;var Ye=C.parse;C.findIconDefinition;C.toHtml;var ao=C.icon;C.layer;C.text;C.counter;var Pe={exports:{}},Ce,Ta;function to(){if(Ta)return Ce;Ta=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Ce=e,Ce}var Ie,Fa;function ro(){if(Fa)return Ie;Fa=1;var e=to();function a(){}function t(){}return t.resetWarningCache=a,Ie=function(){function r(o,s,l,c,d,u){if(u!==e){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}r.isRequired=r;function n(){return r}var i={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:t,resetWarningCache:a};return i.PropTypes=i,i},Ie}var ja;function no(){return ja||(ja=1,Pe.exports=ro()()),Pe.exports}var io=no();const h=Vt(io);var oo={};function He(e,a){(a==null||a>e.length)&&(a=e.length);for(var t=0,r=Array(a);t<a;t++)r[t]=e[t];return r}function so(e){if(Array.isArray(e))return e}function lo(e){if(Array.isArray(e))return He(e)}function _(e,a,t){return(a=go(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function fo(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function co(e,a){var t=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r,n,i,o,s=[],l=!0,c=!1;try{if(i=(t=t.call(e)).next,a!==0)for(;!(l=(r=i.call(t)).done)&&(s.push(r.value),s.length!==a);l=!0);}catch(d){c=!0,n=d}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw n}}return s}}function uo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _a(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function N(e){for(var a=1;a<arguments.length;a++){var t=arguments[a]!=null?arguments[a]:{};a%2?_a(Object(t),!0).forEach(function(r){_(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_a(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function vo(e,a){if(e==null)return{};var t,r,n=po(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)===-1&&{}.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function po(e,a){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(a.indexOf(r)!==-1)continue;t[r]=e[r]}return t}function $a(e,a){return so(e)||co(e,a)||Ut(e,a)||uo()}function Be(e){return lo(e)||fo(e)||Ut(e)||mo()}function ho(e,a){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,a);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function go(e){var a=ho(e,"string");return typeof a=="symbol"?a:a+""}function de(e){"@babel/helpers - typeof";return de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},de(e)}function Ut(e,a){if(e){if(typeof e=="string")return He(e,a);var t={}.toString.call(e).slice(8,-1);return t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set"?Array.from(e):t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?He(e,a):void 0}}var bo="7.0.0-alpha1",Ge;try{var yo=require("@fortawesome/fontawesome-svg-core/package.json");Ge=yo.version}catch{Ge=oo.FA_VERSION||"7.0.0-alpha8"}function xo(e){var a=e.beat,t=e.fade,r=e.beatFade,n=e.bounce,i=e.shake,o=e.flash,s=e.spin,l=e.spinPulse,c=e.spinReverse,d=e.pulse,u=e.fixedWidth,v=e.inverse,p=e.border,x=e.listItem,g=e.flip,S=e.size,y=e.rotation,A=e.pull,k=e.swapOpacity,F=e.rotateBy,I=e.widthAuto,H=So(Ge,bo),re=_(_(_(_(_(_({"fa-beat":a,"fa-fade":t,"fa-beat-fade":r,"fa-bounce":n,"fa-shake":i,"fa-flash":o,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":d,"fa-fw":u,"fa-inverse":v,"fa-border":p,"fa-li":x,"fa-flip":g===!0,"fa-flip-horizontal":g==="horizontal"||g==="both","fa-flip-vertical":g==="vertical"||g==="both"},"fa-".concat(S),typeof S<"u"&&S!==null),"fa-rotate-".concat(y),typeof y<"u"&&y!==null&&y!==0),"fa-pull-".concat(A),typeof A<"u"&&A!==null),"fa-swap-opacity",k),"fa-rotate-by",H&&F),"fa-width-auto",H&&I);return Object.keys(re).map(function(j){return re[j]?j:null}).filter(function(j){return j})}function So(e,a){for(var t=e.split("-"),r=$a(t,2),n=r[0],i=r[1],o=a.split("-"),s=$a(o,2),l=s[0],c=s[1],d=n.split("."),u=l.split("."),v=0;v<Math.max(d.length,u.length);v++){var p=d[v]||"0",x=u[v]||"0",g=parseInt(p,10),S=parseInt(x,10);if(g!==S)return g>S}for(var y=0;y<Math.max(d.length,u.length);y++){var A=d[y]||"0",k=u[y]||"0";if(A!==k&&A.length!==k.length)return A.length<k.length}return!(i&&!c)}function wo(e){return e=e-0,e===e}function Yt(e){return wo(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(a,t){return t?t.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Ao=["style"];function ko(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Po(e){return e.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,t){var r=t.indexOf(":"),n=Yt(t.slice(0,r)),i=t.slice(r+1).trim();return n.startsWith("webkit")?a[ko(n)]=i:a[n]=i,a},{})}function Ht(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var r=(a.children||[]).map(function(l){return Ht(e,l)}),n=Object.keys(a.attributes||{}).reduce(function(l,c){var d=a.attributes[c];switch(c){case"class":l.attrs.className=d,delete a.attributes.class;break;case"style":l.attrs.style=Po(d);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=d:l.attrs[Yt(c)]=d}return l},{attrs:{}}),i=t.style,o=i===void 0?{}:i,s=vo(t,Ao);return n.attrs.style=N(N({},n.attrs.style),o),e.apply(void 0,[a.tag,N(N({},n.attrs),s)].concat(Be(r)))}var Bt=!1;try{Bt=!0}catch{}function Co(){if(!Bt&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ra(e){if(e&&de(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ye.icon)return Ye.icon(e);if(e===null)return null;if(e&&de(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Oe(e,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?_({},e,a):{}}var Da={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,rotateBy:!1,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1,widthAuto:!1},Gt=Wa.forwardRef(function(e,a){var t=N(N({},Da),e),r=t.icon,n=t.mask,i=t.symbol,o=t.className,s=t.title,l=t.titleId,c=t.maskId,d=Ra(r),u=Oe("classes",[].concat(Be(xo(t)),Be((o||"").split(" ")))),v=Oe("transform",typeof t.transform=="string"?Ye.transform(t.transform):t.transform),p=Oe("mask",Ra(n)),x=ao(d,N(N(N(N({},u),v),p),{},{symbol:i,title:s,titleId:l,maskId:c}));if(!x)return Co("Could not find icon",d),null;var g=x.abstract,S={ref:a};return Object.keys(t).forEach(function(y){Da.hasOwnProperty(y)||(S[y]=t[y])}),Io(g[0],S)});Gt.displayName="FontAwesomeIcon";Gt.propTypes={beat:h.bool,border:h.bool,beatFade:h.bool,bounce:h.bool,className:h.string,fade:h.bool,flash:h.bool,mask:h.oneOfType([h.object,h.array,h.string]),maskId:h.string,fixedWidth:h.bool,inverse:h.bool,flip:h.oneOf([!0,!1,"horizontal","vertical","both"]),icon:h.oneOfType([h.object,h.array,h.string]),listItem:h.bool,pull:h.oneOf(["right","left"]),pulse:h.bool,rotation:h.oneOf([0,90,180,270]),rotateBy:h.bool,shake:h.bool,size:h.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:h.bool,spinPulse:h.bool,spinReverse:h.bool,symbol:h.oneOfType([h.bool,h.string]),title:h.string,titleId:h.string,transform:h.oneOfType([h.string,h.object]),swapOpacity:h.bool,widthAuto:h.bool};var Io=Ht.bind(null,Wa.createElement);/*!
 * Font Awesome Free 7.0.0 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2025 Fonticons, Inc.
 */var Uo={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-114.9 0c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1l-10.9 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-72 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l130.9 0c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64l10.9 0 0-40z"]},Oo={prefix:"fas",iconName:"cloud-arrow-up",icon:[576,512,[62338,"cloud-upload","cloud-upload-alt"],"f0ee","M144 480c-79.5 0-144-64.5-144-144 0-63.4 41-117.2 97.9-136.5-1.3-7.7-1.9-15.5-1.9-23.5 0-79.5 64.5-144 144-144 55.4 0 103.5 31.3 127.6 77.1 14.2-8.3 30.8-13.1 48.4-13.1 53 0 96 43 96 96 0 15.7-3.8 30.6-10.5 43.7 44 20.3 74.5 64.7 74.5 116.3 0 70.7-57.3 128-128 128l-304 0zM305 191c-9.4-9.4-24.6-9.4-33.9 0l-72 72c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l31-31 0 102.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-102.1 31 31c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-72-72z"]},Yo=Oo,Ho={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]},Bo={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},Go={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z"]},Xo={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},Eo={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M345 273c9.4-9.4 9.4-24.6 0-33.9L201 95c-6.9-6.9-17.2-8.9-26.2-5.2S160 102.3 160 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L345 273zm7 143c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0z"]},Vo=Eo,Ko={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},qo={prefix:"fas",iconName:"paper-plane",icon:[576,512,[61913],"f1d8","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]},Jo={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M320 16a104 104 0 1 1 0 208 104 104 0 1 1 0-208zM96 88a72 72 0 1 1 0 144 72 72 0 1 1 0-144zM0 416c0-70.7 57.3-128 128-128 12.8 0 25.2 1.9 36.9 5.4-32.9 36.8-52.9 85.4-52.9 138.6l0 16c0 11.4 2.4 22.2 6.7 32L32 480c-17.7 0-32-14.3-32-32l0-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32l0-16c0-53.2-20-101.8-52.9-138.6 11.7-3.5 24.1-5.4 36.9-5.4 70.7 0 128 57.3 128 128l0 32c0 17.7-14.3 32-32 32l-86.7 0zM472 160a72 72 0 1 1 144 0 72 72 0 1 1 -144 0zM160 432c0-88.4 71.6-160 160-160s160 71.6 160 160l0 16c0 17.7-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32l0-16z"]},Qo={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 132.5-114.6 240-256 240-37.1 0-72.3-7.4-104.1-20.7L33.5 510.1c-9.4 4-20.2 1.7-27.1-5.8S-2 485.8 2.8 476.8l48.8-92.2C19.2 344.3 0 294.3 0 240 0 107.5 114.6 0 256 0S512 107.5 512 240z"]},Zo={prefix:"fas",iconName:"broom",icon:[576,512,[129529],"f51a","M566.6 54.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192-34.7-34.7c-4.2-4.2-10-6.6-16-6.6-12.5 0-22.6 10.1-22.6 22.6l0 29.1 108.3 108.3 29.1 0c12.5 0 22.6-10.1 22.6-22.6 0-6-2.4-11.8-6.6-16l-34.7-34.7 192-192zM341.1 353.4L222.6 234.9c-42.7-3.7-85.2 11.7-115.8 42.3l-8 8c-22.3 22.3-34.8 52.5-34.8 84 0 6.8 7.1 11.2 13.2 8.2l51.1-25.5c5-2.5 9.5 4.1 5.4 7.9L7.3 473.4C2.7 477.6 0 483.6 0 489.9 0 502.1 9.9 512 22.1 512l173.3 0c38.8 0 75.9-15.4 103.4-42.8 30.6-30.6 45.9-73.1 42.3-115.8z"]},No={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"]},es=No,as={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M311.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0c23.7 0 44.4 12.9 55.4 32zM248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 0c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm0 128c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM96 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},ts={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M136 128a120 120 0 1 1 240 0 120 120 0 1 1 -240 0zM48 482.3C48 383.8 127.8 304 226.3 304l59.4 0c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3zM544 96c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24z"]},rs={prefix:"fas",iconName:"chart-line",icon:[512,512,["line-chart"],"f201","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7 262.6 153.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l73.4-73.4 57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"]},Mo={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},ns=Mo,is={prefix:"fas",iconName:"arrow-up",icon:[384,512,[8593],"f062","M214.6 17.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 117.3 160 488c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"]},os={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z"]},ss={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},zo={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},ls=zo,fs={prefix:"fas",iconName:"spinner",icon:[512,512,[],"f110","M208 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm0 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm368 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM75 369.1A48 48 0 1 1 142.9 437 48 48 0 1 1 75 369.1zM75 75A48 48 0 1 1 142.9 142.9 48 48 0 1 1 75 75zM437 369.1A48 48 0 1 1 369.1 437 48 48 0 1 1 437 369.1z"]},cs={prefix:"fas",iconName:"road",icon:[512,512,[128739],"f018","M223.9 32l-76.2 0c-29.4 0-55.1 20.1-62.1 48.6L1.4 420.5C-6.1 450.7 16.8 480 48 480l175.9 0 0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64 176.1 0c31.2 0 54.1-29.3 46.6-59.5L426.5 80.6C419.4 52.1 393.8 32 364.3 32l-76.4 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64zm64 192l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z"]},us={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},ds={prefix:"fas",iconName:"skull-crossbones",icon:[448,512,[128369,9760],"f714","M384 144C384 64.5 312.4 0 224 0S64 64.5 64 144c0 47.1 25.1 88.9 64 115.2l0 28.8c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-28.8c38.9-26.3 64-68.1 64-115.2zM160 128a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM445.5 339.7c-6.8-16.3-25.5-24-41.8-17.2L224 397.3 44.3 322.5c-16.3-6.8-35 .9-41.8 17.2s.9 35 17.2 41.8L140.8 432 19.7 482.5C3.4 489.3-4.3 508 2.5 524.3s25.5 24 41.8 17.2L224 466.7 403.7 541.5c16.3 6.8 35-.9 41.8-17.2s-.9-35-17.2-41.8L307.2 432 428.3 381.5c16.3-6.8 24-25.5 17.2-41.8z"]},ms={prefix:"fas",iconName:"ruler",icon:[576,512,[128207],"f545","M209.1 516.2c-18.7 18.7-49.1 18.7-67.9 0L28.1 403.1c-18.7-18.7-18.7-49.1 0-67.9l17-17 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 33.9-33.9 50.9 50.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-50.9-50.9 33.9-33.9 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 33.9-33.9 50.9 50.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-50.9-50.9 33.9-33.9 73.5 73.5c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-73.5-73.5 17-17c18.7-18.7 49.1-18.7 67.9 0L548.5 108.9c18.7 18.7 18.7 49.1 0 67.9L209.1 516.2z"]},Lo={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]},vs=Lo,To={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm84.4-299.3l-80 128c-4.2 6.7-11.4 10.9-19.3 11.3s-15.5-3.2-20.2-9.6l-48-64c-8-10.6-5.8-25.6 4.8-33.6s25.6-5.8 33.6 4.8l27 36 61.4-98.3c7-11.2 21.8-14.7 33.1-7.6s14.7 21.8 7.6 33.1z"]},ps=To,hs={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},gs={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M471.3 6.7C477.7 .6 487-1.6 495.6 1.2 505.4 4.5 512 13.7 512 24l0 186.9c0 131.2-108.1 237.1-238.8 237.1-77 0-143.4-49.5-167.5-118.7-35.4 30.8-57.7 76.1-57.7 126.7 0 13.3-10.7 24-24 24S0 469.3 0 456C0 381.1 38.2 315.1 96.1 276.3 131.4 252.7 173.5 240 216 240l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-39.7 0-77.3 8.8-111 24.5 23.3-70 89.2-120.5 167-120.5 66.4 0 115.8-22.1 148.7-44 19.2-12.8 35.5-28.1 50.7-45.3z"]},bs={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},ys={prefix:"fas",iconName:"flag",icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-121.6 62.7-18.8c41.9-12.6 87.1-8.7 126.2 10.9 42.7 21.4 92.5 24 137.2 7.2l37.1-13.9c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-11.8 5.9c-44.9 22.5-97.8 22.5-142.8 0-36.4-18.2-78.3-21.8-117.2-10.1L64 54.4 64 32z"]},Fo={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.1-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 168c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm26.7 216a26.7 26.7 0 1 0 -53.3 0 26.7 26.7 0 1 0 53.3 0z"]},xs=Fo,Ss={prefix:"fas",iconName:"lock",icon:[384,512,[128274],"f023","M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]},ws={prefix:"fas",iconName:"paw",icon:[512,512,[],"f1b0","M234.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5 .3-86.2 32.6-96.8 70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3-14.3-70.1 10.2-84.1 59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5l0 1.6c0 25.8-20.9 46.7-46.7 46.7-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2-25.8 0-46.7-20.9-46.7-46.7l0-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3 29.1 51.7 10.2 84.1-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5 46.9 53.9 32.6 96.8-52.1 69.1-84.4 58.5z"]},jo={prefix:"fas",iconName:"helmet-safety",icon:[576,512,["hard-hat","hat-hard"],"f807","M352 264l0-200c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 200c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-185.9C90 109.8 32 191.8 32 288l0 64 512 0 0-64c-1-95.2-58.4-177.7-144-209.8L400 264c0 13.3-10.7 24-24 24s-24-10.7-24-24zM40 400c-22.1 0-40 17.9-40 40s17.9 40 40 40l496 0c22.1 0 40-17.9 40-40s-17.9-40-40-40L40 400z"]},As=jo,ks={prefix:"fas",iconName:"recycle",icon:[512,512,[9842,9850,9851],"f1b8","M152.3 60C198.5-20 314-20 360.2 60l37.3 64.6 27.7-16c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3L436.9 223c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l27.7-16-37.3-64.6c-21.6-37.3-75.4-37.3-97 0l-5.3 9.1c-8.8 15.3-28.4 20.5-43.7 11.7S138.2 84.5 147 69.1l5.3-9.1zM449.7 279.1c15.3-8.8 34.9-3.6 43.7 11.7l5.3 9.1c46.2 80-11.5 180-103.9 180l-74.6 0 0 32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2l0 32 74.6 0c43.1 0 70.1-46.7 48.5-84l-5.3-9.1c-8.8-15.3-3.6-34.9 11.7-43.7zM51 235.4l-27.7-16c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20L116.5 152c12.8-3.4 26 4.2 29.4 17l23.4 87.4c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-27.7-16-37.3 64.6c-21.6 37.3 5.4 84 48.5 84l10.6 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-10.6 0C25.3 480-32.4 380 13.8 300L51 235.4z"]},Ps={prefix:"fas",iconName:"eye-slash",icon:[576,512,[],"f070","M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z"]},Cs={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},_o={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]},Is=_o,$o={prefix:"fas",iconName:"screwdriver-wrench",icon:[576,512,["tools"],"f7d9","M224.1 97.1l0 49.6 .5 .5c6.5-82.4 75.4-147.2 159.5-147.2 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8 16.5 4.3 24.1l-88.7 88.7c-3 3-4.7 7.1-4.7 11.3l0 41.4c0 8.8 7.2 16 16 16l41.4 0c4.2 0 8.3-1.7 11.3-4.7l88.7-88.7c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 60.6-33.7 113.4-83.5 140.5l81.5 81.5c18.7 18.7 18.7 49.1 0 67.9l-60.1 60.1c-18.7 18.7-49.1 18.7-67.9 0L288.1 384c-27.4-27.4-33.6-67.9-18.5-101.3l-90.7-90.7-49.6 0c-10.7 0-20.7-5.3-26.6-14.2L23.4 58.9c-4.2-6.3-3.4-14.8 2-20.2L70.8-6.7c5.4-5.4 13.8-6.2 20.2-2L209.9 70.5c8.9 5.9 14.2 15.9 14.2 26.6zm-8.5 199.5c-6.3 37 2.4 76.1 26.4 107.4L147 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8l135.4-135.4 35 35z"]},Os=$o,Es={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Ro={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Ns=Ro;export{Cs as A,Qo as B,ms as C,cs as D,hs as E,Gt as F,Bo as G,Yo as H,os as I,qo as J,fs as K,Ps as L,Go as M,Ko as N,Uo as O,rs as P,Ho as Q,es as R,As as a,us as b,Os as c,ns as d,Vo as e,bs as f,ts as g,gs as h,ls as i,ys as j,vs as k,Es as l,ss as m,as as n,Xo as o,Ss as p,ws as q,Jo as r,ks as s,is as t,Ns as u,xs as v,Zo as w,ds as x,ps as y,Is as z};
