var RE=Object.defineProperty;var Rf=t=>{throw TypeError(t)};var SE=(t,e,n)=>e in t?RE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Kt=(t,e,n)=>SE(t,typeof e!="symbol"?e+"":e,n),Sf=(t,e,n)=>e.has(t)||Rf("Cannot "+n);var it=(t,e,n)=>(Sf(t,e,"read from private field"),n?n.call(t):e.get(t)),wc=(t,e,n)=>e.has(t)?Rf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n);var ce=(t,e,n)=>(Sf(t,e,"access private method"),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Be={},Nr=[],bn=()=>{},CE=()=>!1,gl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Xu=t=>t.startsWith("onUpdate:"),vt=Object.assign,Zu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},PE=Object.prototype.hasOwnProperty,Ne=(t,e)=>PE.call(t,e),ge=Array.isArray,Vr=t=>_l(t)==="[object Map]",dg=t=>_l(t)==="[object Set]",ve=t=>typeof t=="function",ct=t=>typeof t=="string",ks=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",fg=t=>(ze(t)||ve(t))&&ve(t.then)&&ve(t.catch),pg=Object.prototype.toString,_l=t=>pg.call(t),kE=t=>_l(t).slice(8,-1),mg=t=>_l(t)==="[object Object]",eh=t=>ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wi=Yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),yl=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},OE=/-(\w)/g,an=yl(t=>t.replace(OE,(e,n)=>n?n.toUpperCase():"")),DE=/\B([A-Z])/g,Os=yl(t=>t.replace(DE,"-$1").toLowerCase()),vl=yl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ec=yl(t=>t?`on${vl(t)}`:""),bs=(t,e)=>!Object.is(t,e),ya=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gg=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Xc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cf;const _g=()=>Cf||(Cf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bn(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ct(s)?LE(s):Bn(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ct(t)||ze(t))return t}const xE=/;(?![^(]*\))/g,NE=/:([^]+)/,VE=/\/\*[^]*?\*\//g;function LE(t){const e={};return t.replace(VE,"").split(xE).forEach(n=>{if(n){const s=n.split(NE);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ni(t){let e="";if(ct(t))e=t;else if(ge(t))for(let n=0;n<t.length;n++){const s=ni(t[n]);s&&(e+=s+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ME="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",UE=Yu(ME);function yg(t){return!!t||t===""}const vg=t=>!!(t&&t.__v_isRef===!0),se=t=>ct(t)?t:t==null?"":ge(t)||ze(t)&&(t.toString===pg||!ve(t.toString))?vg(t)?se(t.value):JSON.stringify(t,wg,2):String(t),wg=(t,e)=>vg(e)?wg(t,e.value):Vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Tc(s,i)+" =>"]=r,n),{})}:dg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tc(n))}:ks(e)?Tc(e):ze(e)&&!ge(e)&&!mg(e)?String(e):e,Tc=(t,e="")=>{var n;return ks(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class FE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function BE(){return Gt}let $e;const Ic=new WeakSet;class Eg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Gt&&Gt.active&&Gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ic.has(this)&&(Ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ig(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pf(this),bg(this);const e=$e,n=hn;$e=this,hn=!0;try{return this.fn()}finally{Ag(this),$e=e,hn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)sh(e);this.deps=this.depsTail=void 0,Pf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zc(this)&&this.run()}get dirty(){return Zc(this)}}let Tg=0,Ki,zi;function Ig(t,e=!1){if(t.flags|=8,e){t.next=zi,zi=t;return}t.next=Ki,Ki=t}function th(){Tg++}function nh(){if(--Tg>0)return;if(zi){let e=zi;for(zi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ki;){let e=Ki;for(Ki=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function bg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ag(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),sh(s),$E(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Zc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Rg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Rg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ao))return;t.globalVersion=ao;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Zc(t)){t.flags&=-3;return}const n=$e,s=hn;$e=t,hn=!0;try{bg(t);const r=t.fn(t._value);(e.version===0||bs(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=n,hn=s,Ag(t),t.flags&=-3}}function sh(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)sh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $E(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let hn=!0;const Sg=[];function Ds(){Sg.push(hn),hn=!1}function xs(){const t=Sg.pop();hn=t===void 0?!0:t}function Pf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=$e;$e=void 0;try{e()}finally{$e=n}}}let ao=0;class jE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rh{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!hn||$e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==$e)n=this.activeLink=new jE($e,this),$e.deps?(n.prevDep=$e.depsTail,$e.depsTail.nextDep=n,$e.depsTail=n):$e.deps=$e.depsTail=n,Cg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=$e.depsTail,n.nextDep=void 0,$e.depsTail.nextDep=n,$e.depsTail=n,$e.deps===n&&($e.deps=s)}return n}trigger(e){this.version++,ao++,this.notify(e)}notify(e){th();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nh()}}}function Cg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Cg(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const eu=new WeakMap,Qs=Symbol(""),tu=Symbol(""),lo=Symbol("");function Ot(t,e,n){if(hn&&$e){let s=eu.get(t);s||eu.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new rh),r.map=s,r.key=n),r.track()}}function Kn(t,e,n,s,r,i){const o=eu.get(t);if(!o){ao++;return}const l=c=>{c&&c.trigger()};if(th(),e==="clear")o.forEach(l);else{const c=ge(t),u=c&&eh(n);if(c&&n==="length"){const d=Number(s);o.forEach((p,m)=>{(m==="length"||m===lo||!ks(m)&&m>=d)&&l(p)})}else switch(n!==void 0&&l(o.get(n)),u&&l(o.get(lo)),e){case"add":c?u&&l(o.get("length")):(l(o.get(Qs)),Vr(t)&&l(o.get(tu)));break;case"delete":c||(l(o.get(Qs)),Vr(t)&&l(o.get(tu)));break;case"set":Vr(t)&&l(o.get(Qs));break}}nh()}function br(t){const e=Ve(t);return e===t?e:(Ot(e,"iterate",lo),rn(t)?e:e.map(St))}function wl(t){return Ot(t=Ve(t),"iterate",lo),t}const qE={__proto__:null,[Symbol.iterator](){return bc(this,Symbol.iterator,St)},concat(...t){return br(this).concat(...t.map(e=>ge(e)?br(e):e))},entries(){return bc(this,"entries",t=>(t[1]=St(t[1]),t))},every(t,e){return Vn(this,"every",t,e,void 0,arguments)},filter(t,e){return Vn(this,"filter",t,e,n=>n.map(St),arguments)},find(t,e){return Vn(this,"find",t,e,St,arguments)},findIndex(t,e){return Vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Vn(this,"findLast",t,e,St,arguments)},findLastIndex(t,e){return Vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ac(this,"includes",t)},indexOf(...t){return Ac(this,"indexOf",t)},join(t){return br(this).join(t)},lastIndexOf(...t){return Ac(this,"lastIndexOf",t)},map(t,e){return Vn(this,"map",t,e,void 0,arguments)},pop(){return bi(this,"pop")},push(...t){return bi(this,"push",t)},reduce(t,...e){return kf(this,"reduce",t,e)},reduceRight(t,...e){return kf(this,"reduceRight",t,e)},shift(){return bi(this,"shift")},some(t,e){return Vn(this,"some",t,e,void 0,arguments)},splice(...t){return bi(this,"splice",t)},toReversed(){return br(this).toReversed()},toSorted(t){return br(this).toSorted(t)},toSpliced(...t){return br(this).toSpliced(...t)},unshift(...t){return bi(this,"unshift",t)},values(){return bc(this,"values",St)}};function bc(t,e,n){const s=wl(t),r=s[e]();return s!==t&&!rn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const HE=Array.prototype;function Vn(t,e,n,s,r,i){const o=wl(t),l=o!==t&&!rn(t),c=o[e];if(c!==HE[e]){const p=c.apply(t,i);return l?St(p):p}let u=n;o!==t&&(l?u=function(p,m){return n.call(this,St(p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=c.call(o,u,s);return l&&r?r(d):d}function kf(t,e,n,s){const r=wl(t);let i=n;return r!==t&&(rn(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,St(l),c,t)}),r[e](i,...s)}function Ac(t,e,n){const s=Ve(t);Ot(s,"iterate",lo);const r=s[e](...n);return(r===-1||r===!1)&&lh(n[0])?(n[0]=Ve(n[0]),s[e](...n)):r}function bi(t,e,n=[]){Ds(),th();const s=Ve(t)[e].apply(t,n);return nh(),xs(),s}const WE=Yu("__proto__,__v_isRef,__isVue"),Pg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ks));function KE(t){ks(t)||(t=String(t));const e=Ve(this);return Ot(e,"has",t),e.hasOwnProperty(t)}class kg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?iT:Ng:i?xg:Dg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ge(e);if(!r){let c;if(o&&(c=qE[n]))return c;if(n==="hasOwnProperty")return KE}const l=Reflect.get(e,n,st(e)?e:s);return(ks(n)?Pg.has(n):WE(n))||(r||Ot(e,"get",n),i)?l:st(l)?o&&eh(n)?l:l.value:ze(l)?r?Lg(l):Tl(l):l}}class Og extends kg{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=er(i);if(!rn(s)&&!er(s)&&(i=Ve(i),s=Ve(s)),!ge(e)&&st(i)&&!st(s))return c?!1:(i.value=s,!0)}const o=ge(e)&&eh(n)?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,s,st(e)?e:r);return e===Ve(r)&&(o?bs(s,i)&&Kn(e,"set",n,s):Kn(e,"add",n,s)),l}deleteProperty(e,n){const s=Ne(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Kn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!ks(n)||!Pg.has(n))&&Ot(e,"has",n),s}ownKeys(e){return Ot(e,"iterate",ge(e)?"length":Qs),Reflect.ownKeys(e)}}class zE extends kg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const GE=new Og,QE=new zE,JE=new Og(!0);const ih=t=>t,El=t=>Reflect.getPrototypeOf(t);function ra(t,e,n=!1,s=!1){t=t.__v_raw;const r=Ve(t),i=Ve(e);n||(bs(e,i)&&Ot(r,"get",e),Ot(r,"get",i));const{has:o}=El(r),l=s?ih:n?ch:St;if(o.call(r,e))return l(t.get(e));if(o.call(r,i))return l(t.get(i));t!==r&&t.get(e)}function ia(t,e=!1){const n=this.__v_raw,s=Ve(n),r=Ve(t);return e||(bs(t,r)&&Ot(s,"has",t),Ot(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function oa(t,e=!1){return t=t.__v_raw,!e&&Ot(Ve(t),"iterate",Qs),Reflect.get(t,"size",t)}function Of(t,e=!1){!e&&!rn(t)&&!er(t)&&(t=Ve(t));const n=Ve(this);return El(n).has.call(n,t)||(n.add(t),Kn(n,"add",t,t)),this}function Df(t,e,n=!1){!n&&!rn(e)&&!er(e)&&(e=Ve(e));const s=Ve(this),{has:r,get:i}=El(s);let o=r.call(s,t);o||(t=Ve(t),o=r.call(s,t));const l=i.call(s,t);return s.set(t,e),o?bs(e,l)&&Kn(s,"set",t,e):Kn(s,"add",t,e),this}function xf(t){const e=Ve(this),{has:n,get:s}=El(e);let r=n.call(e,t);r||(t=Ve(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&Kn(e,"delete",t,void 0),i}function Nf(){const t=Ve(this),e=t.size!==0,n=t.clear();return e&&Kn(t,"clear",void 0,void 0),n}function aa(t,e){return function(s,r){const i=this,o=i.__v_raw,l=Ve(o),c=e?ih:t?ch:St;return!t&&Ot(l,"iterate",Qs),o.forEach((u,d)=>s.call(r,c(u),c(d),i))}}function la(t,e,n){return function(...s){const r=this.__v_raw,i=Ve(r),o=Vr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),d=n?ih:e?ch:St;return!e&&Ot(i,"iterate",c?tu:Qs),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function os(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function YE(){const t={get(i){return ra(this,i)},get size(){return oa(this)},has:ia,add:Of,set:Df,delete:xf,clear:Nf,forEach:aa(!1,!1)},e={get(i){return ra(this,i,!1,!0)},get size(){return oa(this)},has:ia,add(i){return Of.call(this,i,!0)},set(i,o){return Df.call(this,i,o,!0)},delete:xf,clear:Nf,forEach:aa(!1,!0)},n={get(i){return ra(this,i,!0)},get size(){return oa(this,!0)},has(i){return ia.call(this,i,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:aa(!0,!1)},s={get(i){return ra(this,i,!0,!0)},get size(){return oa(this,!0)},has(i){return ia.call(this,i,!0)},add:os("add"),set:os("set"),delete:os("delete"),clear:os("clear"),forEach:aa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=la(i,!1,!1),n[i]=la(i,!0,!1),e[i]=la(i,!1,!0),s[i]=la(i,!0,!0)}),[t,n,e,s]}const[XE,ZE,eT,tT]=YE();function oh(t,e){const n=e?t?tT:eT:t?ZE:XE;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Ne(n,r)&&r in s?n:s,r,i)}const nT={get:oh(!1,!1)},sT={get:oh(!1,!0)},rT={get:oh(!0,!1)};const Dg=new WeakMap,xg=new WeakMap,Ng=new WeakMap,iT=new WeakMap;function oT(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function aT(t){return t.__v_skip||!Object.isExtensible(t)?0:oT(kE(t))}function Tl(t){return er(t)?t:ah(t,!1,GE,nT,Dg)}function Vg(t){return ah(t,!1,JE,sT,xg)}function Lg(t){return ah(t,!0,QE,rT,Ng)}function ah(t,e,n,s,r){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=aT(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return r.set(t,l),l}function Lr(t){return er(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function er(t){return!!(t&&t.__v_isReadonly)}function rn(t){return!!(t&&t.__v_isShallow)}function lh(t){return t?!!t.__v_raw:!1}function Ve(t){const e=t&&t.__v_raw;return e?Ve(e):t}function lT(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&gg(t,"__v_skip",!0),t}const St=t=>ze(t)?Tl(t):t,ch=t=>ze(t)?Lg(t):t;function st(t){return t?t.__v_isRef===!0:!1}function kt(t){return Mg(t,!1)}function cT(t){return Mg(t,!0)}function Mg(t,e){return st(t)?t:new uT(t,e)}class uT{constructor(e,n){this.dep=new rh,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ve(e),this._value=n?e:St(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||rn(e)||er(e);e=s?e:Ve(e),bs(e,n)&&(this._rawValue=e,this._value=s?e:St(e),this.dep.trigger())}}function Je(t){return st(t)?t.value:t}const hT={get:(t,e,n)=>e==="__v_raw"?t:Je(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return st(r)&&!st(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ug(t){return Lr(t)?t:new Proxy(t,hT)}class dT{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new rh(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ao-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Ig(this,!0),!0}get value(){const e=this.dep.track();return Rg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fT(t,e,n=!1){let s,r;return ve(t)?s=t:(s=t.get,r=t.set),new dT(s,r,n)}const ca={},qa=new WeakMap;let Hs;function pT(t,e=!1,n=Hs){if(n){let s=qa.get(n);s||qa.set(n,s=[]),s.push(t)}}function mT(t,e,n=Be){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:c}=n,u=$=>r?$:rn($)||r===!1||r===0?$n($,1):$n($);let d,p,m,_,b=!1,P=!1;if(st(t)?(p=()=>t.value,b=rn(t)):Lr(t)?(p=()=>u(t),b=!0):ge(t)?(P=!0,b=t.some($=>Lr($)||rn($)),p=()=>t.map($=>{if(st($))return $.value;if(Lr($))return u($);if(ve($))return c?c($,2):$()})):ve(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Ds();try{m()}finally{xs()}}const $=Hs;Hs=d;try{return c?c(t,3,[_]):t(_)}finally{Hs=$}}:p=bn,e&&r){const $=p,ae=r===!0?1/0:r;p=()=>$n($(),ae)}const S=BE(),U=()=>{d.stop(),S&&Zu(S.effects,d)};if(i&&e){const $=e;e=(...ae)=>{$(...ae),U()}}let M=P?new Array(t.length).fill(ca):ca;const F=$=>{if(!(!(d.flags&1)||!d.dirty&&!$))if(e){const ae=d.run();if(r||b||(P?ae.some((de,A)=>bs(de,M[A])):bs(ae,M))){m&&m();const de=Hs;Hs=d;try{const A=[ae,M===ca?void 0:P&&M[0]===ca?[]:M,_];c?c(e,3,A):e(...A),M=ae}finally{Hs=de}}}else d.run()};return l&&l(F),d=new Eg(p),d.scheduler=o?()=>o(F,!1):F,_=$=>pT($,!1,d),m=d.onStop=()=>{const $=qa.get(d);if($){if(c)c($,4);else for(const ae of $)ae();qa.delete(d)}},e?s?F(!0):M=d.run():o?o(F.bind(null,!0),!0):d.run(),U.pause=d.pause.bind(d),U.resume=d.resume.bind(d),U.stop=U,U}function $n(t,e=1/0,n){if(e<=0||!ze(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,st(t))$n(t.value,e,n);else if(ge(t))for(let s=0;s<t.length;s++)$n(t[s],e,n);else if(dg(t)||Vr(t))t.forEach(s=>{$n(s,e,n)});else if(mg(t)){for(const s in t)$n(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&$n(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function bo(t,e,n,s){try{return s?t(...s):t()}catch(r){Il(r,e,n)}}function kn(t,e,n,s){if(ve(t)){const r=bo(t,e,n,s);return r&&fg(r)&&r.catch(i=>{Il(i,e,n)}),r}if(ge(t)){const r=[];for(let i=0;i<t.length;i++)r.push(kn(t[i],e,n,s));return r}}function Il(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,u)===!1)return}l=l.parent}if(i){Ds(),bo(i,null,10,[t,c,u]),xs();return}}gT(t,n,r,s,o)}function gT(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Ut=[];let wn=-1;const Mr=[];let us=null,Rr=0;const Fg=Promise.resolve();let Ha=null;function Bg(t){const e=Ha||Fg;return t?e.then(this?t.bind(this):t):e}function _T(t){let e=wn+1,n=Ut.length;for(;e<n;){const s=e+n>>>1,r=Ut[s],i=co(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function uh(t){if(!(t.flags&1)){const e=co(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=co(n)?Ut.push(t):Ut.splice(_T(e),0,t),t.flags|=1,$g()}}function $g(){Ha||(Ha=Fg.then(qg))}function yT(t){ge(t)?Mr.push(...t):us&&t.id===-1?us.splice(Rr+1,0,t):t.flags&1||(Mr.push(t),t.flags|=1),$g()}function Vf(t,e,n=wn+1){for(;n<Ut.length;n++){const s=Ut[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ut.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function jg(t){if(Mr.length){const e=[...new Set(Mr)].sort((n,s)=>co(n)-co(s));if(Mr.length=0,us){us.push(...e);return}for(us=e,Rr=0;Rr<us.length;Rr++){const n=us[Rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}us=null,Rr=0}}const co=t=>t.id==null?t.flags&2?-1:1/0:t.id;function qg(t){try{for(wn=0;wn<Ut.length;wn++){const e=Ut[wn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),bo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;wn<Ut.length;wn++){const e=Ut[wn];e&&(e.flags&=-2)}wn=-1,Ut.length=0,jg(),Ha=null,(Ut.length||Mr.length)&&qg()}}let Qt=null,Hg=null;function Wa(t){const e=Qt;return Qt=t,Hg=t&&t.type.__scopeId||null,e}function Ke(t,e=Qt,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Hf(-1);const i=Wa(e);let o;try{o=t(...r)}finally{Wa(i),s._d&&Hf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function zn(t,e){if(Qt===null)return t;const n=Pl(Qt),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,l,c=Be]=e[r];i&&(ve(i)&&(i={mounted:i,updated:i}),i.deep&&$n(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function js(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const l=r[o];i&&(l.oldValue=i[o].value);let c=l.dir[s];c&&(Ds(),kn(c,n,8,[t.el,l,t,e]),xs())}}const vT=Symbol("_vte"),wT=t=>t.__isTeleport;function hh(t,e){t.shapeFlag&6&&t.component?(t.transition=e,hh(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Wg(t,e){return ve(t)?vt({name:t.name},e,{setup:t}):t}function Kg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function nu(t,e,n,s,r=!1){if(ge(t)){t.forEach((b,P)=>nu(b,e&&(ge(e)?e[P]:e),n,s,r));return}if(Gi(s)&&!r)return;const i=s.shapeFlag&4?Pl(s.component):s.el,o=r?null:i,{i:l,r:c}=t,u=e&&e.r,d=l.refs===Be?l.refs={}:l.refs,p=l.setupState,m=Ve(p),_=p===Be?()=>!1:b=>Ne(m,b);if(u!=null&&u!==c&&(ct(u)?(d[u]=null,_(u)&&(p[u]=null)):st(u)&&(u.value=null)),ve(c))bo(c,l,12,[o,d]);else{const b=ct(c),P=st(c);if(b||P){const S=()=>{if(t.f){const U=b?_(c)?p[c]:d[c]:c.value;r?ge(U)&&Zu(U,i):ge(U)?U.includes(i)||U.push(i):b?(d[c]=[i],_(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else b?(d[c]=o,_(c)&&(p[c]=o)):P&&(c.value=o,t.k&&(d[t.k]=o))};o?(S.id=-1,zt(S,n)):S()}}}const Gi=t=>!!t.type.__asyncLoader,zg=t=>t.type.__isKeepAlive;function ET(t,e){Gg(t,"a",e)}function TT(t,e){Gg(t,"da",e)}function Gg(t,e,n=Pt){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(bl(e,s,n),n){let r=n.parent;for(;r&&r.parent;)zg(r.parent.vnode)&&IT(s,e,n,r),r=r.parent}}function IT(t,e,n,s){const r=bl(e,t,s,!0);dh(()=>{Zu(s[e],r)},n)}function bl(t,e,n=Pt,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ds();const l=Ro(n),c=kn(e,n,t,o);return l(),xs(),c});return s?r.unshift(i):r.push(i),i}}const es=t=>(e,n=Pt)=>{(!Cl||t==="sp")&&bl(t,(...s)=>e(...s),n)},bT=es("bm"),Ao=es("m"),AT=es("bu"),RT=es("u"),ST=es("bum"),dh=es("um"),CT=es("sp"),PT=es("rtg"),kT=es("rtc");function OT(t,e=Pt){bl("ec",t,e)}const DT="components";function ur(t,e){return NT(DT,t,!0,e)||t}const xT=Symbol.for("v-ndc");function NT(t,e,n=!0,s=!1){const r=Qt||Pt;if(r){const i=r.type;{const l=EI(i,!1);if(l&&(l===e||l===an(e)||l===vl(an(e))))return i}const o=Lf(r[t]||i[t],e)||Lf(r.appContext[t],e);return!o&&s?i:o}}function Lf(t,e){return t&&(t[e]||t[an(e)]||t[vl(an(e))])}function un(t,e,n,s){let r;const i=n,o=ge(t);if(o||ct(t)){const l=o&&Lr(t);let c=!1;l&&(c=!rn(t),t=wl(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(c?St(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let l=0;l<t;l++)r[l]=e(l+1,l,void 0,i)}else if(ze(t))if(t[Symbol.iterator])r=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);r=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const d=l[c];r[c]=e(t[d],d,c,i)}}else r=[];return r}const su=t=>t?p_(t)?Pl(t):su(t.parent):null,Qi=vt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>su(t.parent),$root:t=>su(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fh(t),$forceUpdate:t=>t.f||(t.f=()=>{uh(t.update)}),$nextTick:t=>t.n||(t.n=Bg.bind(t.proxy)),$watch:t=>tI.bind(t)}),Rc=(t,e)=>t!==Be&&!t.__isScriptSetup&&Ne(t,e),VT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(Rc(s,e))return o[e]=1,s[e];if(r!==Be&&Ne(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Ne(u,e))return o[e]=3,i[e];if(n!==Be&&Ne(n,e))return o[e]=4,n[e];ru&&(o[e]=0)}}const d=Qi[e];let p,m;if(d)return e==="$attrs"&&Ot(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Be&&Ne(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ne(m,e))return m[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return Rc(r,e)?(r[e]=n,!0):s!==Be&&Ne(s,e)?(s[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let l;return!!n[o]||t!==Be&&Ne(t,o)||Rc(e,o)||(l=i[0])&&Ne(l,o)||Ne(s,o)||Ne(Qi,o)||Ne(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mf(t){return ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ru=!0;function LT(t){const e=fh(t),n=t.proxy,s=t.ctx;ru=!1,e.beforeCreate&&Uf(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:l,provide:c,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:b,activated:P,deactivated:S,beforeDestroy:U,beforeUnmount:M,destroyed:F,unmounted:$,render:ae,renderTracked:de,renderTriggered:A,errorCaptured:w,serverPrefetch:T,expose:R,inheritAttrs:C,components:k,directives:I,filters:xt}=e;if(u&&MT(u,s,null),o)for(const Re in o){const Te=o[Re];ve(Te)&&(s[Re]=Te.bind(n))}if(r){const Re=r.call(n,n);ze(Re)&&(t.data=Tl(Re))}if(ru=!0,i)for(const Re in i){const Te=i[Re],Ht=ve(Te)?Te.bind(n,n):ve(Te.get)?Te.get.bind(n,n):bn,ln=!ve(Te)&&ve(Te.set)?Te.set.bind(n):bn,tn=sn({get:Ht,set:ln});Object.defineProperty(s,Re,{enumerable:!0,configurable:!0,get:()=>tn.value,set:Ge=>tn.value=Ge})}if(l)for(const Re in l)Qg(l[Re],s,n,Re);if(c){const Re=ve(c)?c.call(n):c;Reflect.ownKeys(Re).forEach(Te=>{va(Te,Re[Te])})}d&&Uf(d,t,"c");function rt(Re,Te){ge(Te)?Te.forEach(Ht=>Re(Ht.bind(n))):Te&&Re(Te.bind(n))}if(rt(bT,p),rt(Ao,m),rt(AT,_),rt(RT,b),rt(ET,P),rt(TT,S),rt(OT,w),rt(kT,de),rt(PT,A),rt(ST,M),rt(dh,$),rt(CT,T),ge(R))if(R.length){const Re=t.exposed||(t.exposed={});R.forEach(Te=>{Object.defineProperty(Re,Te,{get:()=>n[Te],set:Ht=>n[Te]=Ht})})}else t.exposed||(t.exposed={});ae&&t.render===bn&&(t.render=ae),C!=null&&(t.inheritAttrs=C),k&&(t.components=k),I&&(t.directives=I),T&&Kg(t)}function MT(t,e,n=bn){ge(t)&&(t=iu(t));for(const s in t){const r=t[s];let i;ze(r)?"default"in r?i=dn(r.from||s,r.default,!0):i=dn(r.from||s):i=dn(r),st(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function Uf(t,e,n){kn(ge(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qg(t,e,n,s){let r=s.includes(".")?c_(n,s):()=>n[s];if(ct(t)){const i=e[t];ve(i)&&wa(r,i)}else if(ve(t))wa(r,t.bind(n));else if(ze(t))if(ge(t))t.forEach(i=>Qg(i,e,n,s));else{const i=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(i)&&wa(r,i,t)}}function fh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Ka(c,u,o,!0)),Ka(c,e,o)),ze(e)&&i.set(e,c),c}function Ka(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ka(t,i,n,!0),r&&r.forEach(o=>Ka(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=UT[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const UT={data:Ff,props:Bf,emits:Bf,methods:Oi,computed:Oi,beforeCreate:Mt,created:Mt,beforeMount:Mt,mounted:Mt,beforeUpdate:Mt,updated:Mt,beforeDestroy:Mt,beforeUnmount:Mt,destroyed:Mt,unmounted:Mt,activated:Mt,deactivated:Mt,errorCaptured:Mt,serverPrefetch:Mt,components:Oi,directives:Oi,watch:BT,provide:Ff,inject:FT};function Ff(t,e){return e?t?function(){return vt(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function FT(t,e){return Oi(iu(t),iu(e))}function iu(t){if(ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Mt(t,e){return t?[...new Set([].concat(t,e))]:e}function Oi(t,e){return t?vt(Object.create(null),t,e):e}function Bf(t,e){return t?ge(t)&&ge(e)?[...new Set([...t,...e])]:vt(Object.create(null),Mf(t),Mf(e??{})):e}function BT(t,e){if(!t)return e;if(!e)return t;const n=vt(Object.create(null),t);for(const s in e)n[s]=Mt(t[s],e[s]);return n}function Jg(){return{app:null,config:{isNativeTag:CE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $T=0;function jT(t,e){return function(s,r=null){ve(s)||(s=vt({},s)),r!=null&&!ze(r)&&(r=null);const i=Jg(),o=new WeakSet,l=[];let c=!1;const u=i.app={_uid:$T++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:II,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&ve(d.install)?(o.add(d),d.install(u,...p)):ve(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!c){const _=u._ceVNode||Ee(s,r);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),p&&e?e(_,d):t(_,d,m),c=!0,u._container=d,d.__vue_app__=u,Pl(_.component)}},onUnmount(d){l.push(d)},unmount(){c&&(kn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ur;Ur=u;try{return d()}finally{Ur=p}}};return u}}let Ur=null;function va(t,e){if(Pt){let n=Pt.provides;const s=Pt.parent&&Pt.parent.provides;s===n&&(n=Pt.provides=Object.create(s)),n[t]=e}}function dn(t,e,n=!1){const s=Pt||Qt;if(s||Ur){const r=Ur?Ur._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ve(e)?e.call(s&&s.proxy):e}}const Yg={},Xg=()=>Object.create(Yg),Zg=t=>Object.getPrototypeOf(t)===Yg;function qT(t,e,n,s=!1){const r={},i=Xg();t.propsDefaults=Object.create(null),e_(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Vg(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function HT(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,l=Ve(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Al(t.emitsOptions,m))continue;const _=e[m];if(c)if(Ne(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const b=an(m);r[b]=ou(c,l,b,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{e_(t,e,r,i)&&(u=!0);let d;for(const p in l)(!e||!Ne(e,p)&&((d=Os(p))===p||!Ne(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(r[p]=ou(c,l,p,void 0,t,!0)):delete r[p]);if(i!==l)for(const p in i)(!e||!Ne(e,p))&&(delete i[p],u=!0)}u&&Kn(t.attrs,"set","")}function e_(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Wi(c))continue;const u=e[c];let d;r&&Ne(r,d=an(c))?!i||!i.includes(d)?n[d]=u:(l||(l={}))[d]=u:Al(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Ve(n),u=l||Be;for(let d=0;d<i.length;d++){const p=i[d];n[p]=ou(r,c,p,u[p],t,!Ne(u,p))}}return o}function ou(t,e,n,s,r,i){const o=t[n];if(o!=null){const l=Ne(o,"default");if(l&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ve(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const d=Ro(r);s=u[n]=c.call(null,e),d()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Os(n))&&(s=!0))}return s}const WT=new WeakMap;function t_(t,e,n=!1){const s=n?WT:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},l=[];let c=!1;if(!ve(t)){const d=p=>{c=!0;const[m,_]=t_(p,e,!0);vt(o,m),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return ze(t)&&s.set(t,Nr),Nr;if(ge(i))for(let d=0;d<i.length;d++){const p=an(i[d]);$f(p)&&(o[p]=Be)}else if(i)for(const d in i){const p=an(d);if($f(p)){const m=i[d],_=o[p]=ge(m)||ve(m)?{type:m}:vt({},m),b=_.type;let P=!1,S=!0;if(ge(b))for(let U=0;U<b.length;++U){const M=b[U],F=ve(M)&&M.name;if(F==="Boolean"){P=!0;break}else F==="String"&&(S=!1)}else P=ve(b)&&b.name==="Boolean";_[0]=P,_[1]=S,(P||Ne(_,"default"))&&l.push(p)}}const u=[o,l];return ze(t)&&s.set(t,u),u}function $f(t){return t[0]!=="$"&&!Wi(t)}const n_=t=>t[0]==="_"||t==="$stable",ph=t=>ge(t)?t.map(En):[En(t)],KT=(t,e,n)=>{if(e._n)return e;const s=Ke((...r)=>ph(e(...r)),n);return s._c=!1,s},s_=(t,e,n)=>{const s=t._ctx;for(const r in t){if(n_(r))continue;const i=t[r];if(ve(i))e[r]=KT(r,i,s);else if(i!=null){const o=ph(i);e[r]=()=>o}}},r_=(t,e)=>{const n=ph(e);t.slots.default=()=>n},i_=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},zT=(t,e,n)=>{const s=t.slots=Xg();if(t.vnode.shapeFlag&32){const r=e._;r?(i_(s,e,n),n&&gg(s,"_",r,!0)):s_(e,s)}else e&&r_(t,e)},GT=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Be;if(s.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:i_(r,e,n):(i=!e.$stable,s_(e,r)),o=e}else e&&(r_(t,e),o={default:1});if(i)for(const l in r)!n_(l)&&o[l]==null&&delete r[l]},zt=lI;function QT(t){return JT(t)}function JT(t,e){const n=_g();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:c,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=bn,insertStaticContent:b}=t,P=(v,E,D,j=null,V=null,W=null,J=void 0,G=null,z=!!E.dynamicChildren)=>{if(v===E)return;v&&!Ai(v,E)&&(j=L(v),Ge(v,V,W,!0),v=null),E.patchFlag===-2&&(z=!1,E.dynamicChildren=null);const{type:K,ref:he,shapeFlag:X}=E;switch(K){case Rl:S(v,E,D,j);break;case tr:U(v,E,D,j);break;case Ea:v==null&&M(E,D,j,J);break;case qe:k(v,E,D,j,V,W,J,G,z);break;default:X&1?ae(v,E,D,j,V,W,J,G,z):X&6?I(v,E,D,j,V,W,J,G,z):(X&64||X&128)&&K.process(v,E,D,j,V,W,J,G,z,re)}he!=null&&V&&nu(he,v&&v.ref,W,E||v,!E)},S=(v,E,D,j)=>{if(v==null)s(E.el=l(E.children),D,j);else{const V=E.el=v.el;E.children!==v.children&&u(V,E.children)}},U=(v,E,D,j)=>{v==null?s(E.el=c(E.children||""),D,j):E.el=v.el},M=(v,E,D,j)=>{[v.el,v.anchor]=b(v.children,E,D,j,v.el,v.anchor)},F=({el:v,anchor:E},D,j)=>{let V;for(;v&&v!==E;)V=m(v),s(v,D,j),v=V;s(E,D,j)},$=({el:v,anchor:E})=>{let D;for(;v&&v!==E;)D=m(v),r(v),v=D;r(E)},ae=(v,E,D,j,V,W,J,G,z)=>{E.type==="svg"?J="svg":E.type==="math"&&(J="mathml"),v==null?de(E,D,j,V,W,J,G,z):T(v,E,V,W,J,G,z)},de=(v,E,D,j,V,W,J,G)=>{let z,K;const{props:he,shapeFlag:X,transition:le,dirs:ie}=v;if(z=v.el=o(v.type,W,he&&he.is,he),X&8?d(z,v.children):X&16&&w(v.children,z,null,j,V,Sc(v,W),J,G),ie&&js(v,null,j,"created"),A(z,v,v.scopeId,J,j),he){for(const xe in he)xe!=="value"&&!Wi(xe)&&i(z,xe,null,he[xe],W,j);"value"in he&&i(z,"value",null,he.value,W),(K=he.onVnodeBeforeMount)&&vn(K,j,v)}ie&&js(v,null,j,"beforeMount");const fe=YT(V,le);fe&&le.beforeEnter(z),s(z,E,D),((K=he&&he.onVnodeMounted)||fe||ie)&&zt(()=>{K&&vn(K,j,v),fe&&le.enter(z),ie&&js(v,null,j,"mounted")},V)},A=(v,E,D,j,V)=>{if(D&&_(v,D),j)for(let W=0;W<j.length;W++)_(v,j[W]);if(V){let W=V.subTree;if(E===W||h_(W.type)&&(W.ssContent===E||W.ssFallback===E)){const J=V.vnode;A(v,J,J.scopeId,J.slotScopeIds,V.parent)}}},w=(v,E,D,j,V,W,J,G,z=0)=>{for(let K=z;K<v.length;K++){const he=v[K]=G?hs(v[K]):En(v[K]);P(null,he,E,D,j,V,W,J,G)}},T=(v,E,D,j,V,W,J)=>{const G=E.el=v.el;let{patchFlag:z,dynamicChildren:K,dirs:he}=E;z|=v.patchFlag&16;const X=v.props||Be,le=E.props||Be;let ie;if(D&&qs(D,!1),(ie=le.onVnodeBeforeUpdate)&&vn(ie,D,E,v),he&&js(E,v,D,"beforeUpdate"),D&&qs(D,!0),(X.innerHTML&&le.innerHTML==null||X.textContent&&le.textContent==null)&&d(G,""),K?R(v.dynamicChildren,K,G,D,j,Sc(E,V),W):J||Te(v,E,G,null,D,j,Sc(E,V),W,!1),z>0){if(z&16)C(G,X,le,D,V);else if(z&2&&X.class!==le.class&&i(G,"class",null,le.class,V),z&4&&i(G,"style",X.style,le.style,V),z&8){const fe=E.dynamicProps;for(let xe=0;xe<fe.length;xe++){const Pe=fe[xe],Et=X[Pe],ht=le[Pe];(ht!==Et||Pe==="value")&&i(G,Pe,Et,ht,V,D)}}z&1&&v.children!==E.children&&d(G,E.children)}else!J&&K==null&&C(G,X,le,D,V);((ie=le.onVnodeUpdated)||he)&&zt(()=>{ie&&vn(ie,D,E,v),he&&js(E,v,D,"updated")},j)},R=(v,E,D,j,V,W,J)=>{for(let G=0;G<E.length;G++){const z=v[G],K=E[G],he=z.el&&(z.type===qe||!Ai(z,K)||z.shapeFlag&70)?p(z.el):D;P(z,K,he,null,j,V,W,J,!0)}},C=(v,E,D,j,V)=>{if(E!==D){if(E!==Be)for(const W in E)!Wi(W)&&!(W in D)&&i(v,W,E[W],null,V,j);for(const W in D){if(Wi(W))continue;const J=D[W],G=E[W];J!==G&&W!=="value"&&i(v,W,G,J,V,j)}"value"in D&&i(v,"value",E.value,D.value,V)}},k=(v,E,D,j,V,W,J,G,z)=>{const K=E.el=v?v.el:l(""),he=E.anchor=v?v.anchor:l("");let{patchFlag:X,dynamicChildren:le,slotScopeIds:ie}=E;ie&&(G=G?G.concat(ie):ie),v==null?(s(K,D,j),s(he,D,j),w(E.children||[],D,he,V,W,J,G,z)):X>0&&X&64&&le&&v.dynamicChildren?(R(v.dynamicChildren,le,D,V,W,J,G),(E.key!=null||V&&E===V.subTree)&&o_(v,E,!0)):Te(v,E,D,he,V,W,J,G,z)},I=(v,E,D,j,V,W,J,G,z)=>{E.slotScopeIds=G,v==null?E.shapeFlag&512?V.ctx.activate(E,D,j,J,z):xt(E,D,j,V,W,J,z):en(v,E,z)},xt=(v,E,D,j,V,W,J)=>{const G=v.component=gI(v,j,V);if(zg(v)&&(G.ctx.renderer=re),_I(G,!1,J),G.asyncDep){if(V&&V.registerDep(G,rt,J),!v.el){const z=G.subTree=Ee(tr);U(null,z,E,D)}}else rt(G,v,E,D,V,W,J)},en=(v,E,D)=>{const j=E.component=v.component;if(oI(v,E,D))if(j.asyncDep&&!j.asyncResolved){Re(j,E,D);return}else j.next=E,j.update();else E.el=v.el,j.vnode=E},rt=(v,E,D,j,V,W,J)=>{const G=()=>{if(v.isMounted){let{next:X,bu:le,u:ie,parent:fe,vnode:xe}=v;{const Tt=a_(v);if(Tt){X&&(X.el=xe.el,Re(v,X,J)),Tt.asyncDep.then(()=>{v.isUnmounted||G()});return}}let Pe=X,Et;qs(v,!1),X?(X.el=xe.el,Re(v,X,J)):X=xe,le&&ya(le),(Et=X.props&&X.props.onVnodeBeforeUpdate)&&vn(Et,fe,X,xe),qs(v,!0);const ht=Cc(v),ft=v.subTree;v.subTree=ht,P(ft,ht,p(ft.el),L(ft),v,V,W),X.el=ht.el,Pe===null&&aI(v,ht.el),ie&&zt(ie,V),(Et=X.props&&X.props.onVnodeUpdated)&&zt(()=>vn(Et,fe,X,xe),V)}else{let X;const{el:le,props:ie}=E,{bm:fe,m:xe,parent:Pe,root:Et,type:ht}=v,ft=Gi(E);if(qs(v,!1),fe&&ya(fe),!ft&&(X=ie&&ie.onVnodeBeforeMount)&&vn(X,Pe,E),qs(v,!0),le&&Ue){const Tt=()=>{v.subTree=Cc(v),Ue(le,v.subTree,v,V,null)};ft&&ht.__asyncHydrate?ht.__asyncHydrate(le,v,Tt):Tt()}else{Et.ce&&Et.ce._injectChildStyle(ht);const Tt=v.subTree=Cc(v);P(null,Tt,D,j,v,V,W),E.el=Tt.el}if(xe&&zt(xe,V),!ft&&(X=ie&&ie.onVnodeMounted)){const Tt=E;zt(()=>vn(X,Pe,Tt),V)}(E.shapeFlag&256||Pe&&Gi(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&v.a&&zt(v.a,V),v.isMounted=!0,E=D=j=null}};v.scope.on();const z=v.effect=new Eg(G);v.scope.off();const K=v.update=z.run.bind(z),he=v.job=z.runIfDirty.bind(z);he.i=v,he.id=v.uid,z.scheduler=()=>uh(he),qs(v,!0),K()},Re=(v,E,D)=>{E.component=v;const j=v.vnode.props;v.vnode=E,v.next=null,HT(v,E.props,j,D),GT(v,E.children,D),Ds(),Vf(v),xs()},Te=(v,E,D,j,V,W,J,G,z=!1)=>{const K=v&&v.children,he=v?v.shapeFlag:0,X=E.children,{patchFlag:le,shapeFlag:ie}=E;if(le>0){if(le&128){ln(K,X,D,j,V,W,J,G,z);return}else if(le&256){Ht(K,X,D,j,V,W,J,G,z);return}}ie&8?(he&16&&Bt(K,V,W),X!==K&&d(D,X)):he&16?ie&16?ln(K,X,D,j,V,W,J,G,z):Bt(K,V,W,!0):(he&8&&d(D,""),ie&16&&w(X,D,j,V,W,J,G,z))},Ht=(v,E,D,j,V,W,J,G,z)=>{v=v||Nr,E=E||Nr;const K=v.length,he=E.length,X=Math.min(K,he);let le;for(le=0;le<X;le++){const ie=E[le]=z?hs(E[le]):En(E[le]);P(v[le],ie,D,null,V,W,J,G,z)}K>he?Bt(v,V,W,!0,!1,X):w(E,D,j,V,W,J,G,z,X)},ln=(v,E,D,j,V,W,J,G,z)=>{let K=0;const he=E.length;let X=v.length-1,le=he-1;for(;K<=X&&K<=le;){const ie=v[K],fe=E[K]=z?hs(E[K]):En(E[K]);if(Ai(ie,fe))P(ie,fe,D,null,V,W,J,G,z);else break;K++}for(;K<=X&&K<=le;){const ie=v[X],fe=E[le]=z?hs(E[le]):En(E[le]);if(Ai(ie,fe))P(ie,fe,D,null,V,W,J,G,z);else break;X--,le--}if(K>X){if(K<=le){const ie=le+1,fe=ie<he?E[ie].el:j;for(;K<=le;)P(null,E[K]=z?hs(E[K]):En(E[K]),D,fe,V,W,J,G,z),K++}}else if(K>le)for(;K<=X;)Ge(v[K],V,W,!0),K++;else{const ie=K,fe=K,xe=new Map;for(K=fe;K<=le;K++){const Nt=E[K]=z?hs(E[K]):En(E[K]);Nt.key!=null&&xe.set(Nt.key,K)}let Pe,Et=0;const ht=le-fe+1;let ft=!1,Tt=0;const ns=new Array(ht);for(K=0;K<ht;K++)ns[K]=0;for(K=ie;K<=X;K++){const Nt=v[K];if(Et>=ht){Ge(Nt,V,W,!0);continue}let nn;if(Nt.key!=null)nn=xe.get(Nt.key);else for(Pe=fe;Pe<=le;Pe++)if(ns[Pe-fe]===0&&Ai(Nt,E[Pe])){nn=Pe;break}nn===void 0?Ge(Nt,V,W,!0):(ns[nn-fe]=K+1,nn>=Tt?Tt=nn:ft=!0,P(Nt,E[nn],D,null,V,W,J,G,z),Et++)}const yr=ft?XT(ns):Nr;for(Pe=yr.length-1,K=ht-1;K>=0;K--){const Nt=fe+K,nn=E[Nt],vr=Nt+1<he?E[Nt+1].el:j;ns[K]===0?P(null,nn,D,vr,V,W,J,G,z):ft&&(Pe<0||K!==yr[Pe]?tn(nn,D,vr,2):Pe--)}}},tn=(v,E,D,j,V=null)=>{const{el:W,type:J,transition:G,children:z,shapeFlag:K}=v;if(K&6){tn(v.component.subTree,E,D,j);return}if(K&128){v.suspense.move(E,D,j);return}if(K&64){J.move(v,E,D,re);return}if(J===qe){s(W,E,D);for(let X=0;X<z.length;X++)tn(z[X],E,D,j);s(v.anchor,E,D);return}if(J===Ea){F(v,E,D);return}if(j!==2&&K&1&&G)if(j===0)G.beforeEnter(W),s(W,E,D),zt(()=>G.enter(W),V);else{const{leave:X,delayLeave:le,afterLeave:ie}=G,fe=()=>s(W,E,D),xe=()=>{X(W,()=>{fe(),ie&&ie()})};le?le(W,fe,xe):xe()}else s(W,E,D)},Ge=(v,E,D,j=!1,V=!1)=>{const{type:W,props:J,ref:G,children:z,dynamicChildren:K,shapeFlag:he,patchFlag:X,dirs:le,cacheIndex:ie}=v;if(X===-2&&(V=!1),G!=null&&nu(G,null,D,v,!0),ie!=null&&(E.renderCache[ie]=void 0),he&256){E.ctx.deactivate(v);return}const fe=he&1&&le,xe=!Gi(v);let Pe;if(xe&&(Pe=J&&J.onVnodeBeforeUnmount)&&vn(Pe,E,v),he&6)yn(v.component,D,j);else{if(he&128){v.suspense.unmount(D,j);return}fe&&js(v,null,E,"beforeUnmount"),he&64?v.type.remove(v,E,D,re,j):K&&!K.hasOnce&&(W!==qe||X>0&&X&64)?Bt(K,E,D,!1,!0):(W===qe&&X&384||!V&&he&16)&&Bt(z,E,D),j&&Qe(v)}(xe&&(Pe=J&&J.onVnodeUnmounted)||fe)&&zt(()=>{Pe&&vn(Pe,E,v),fe&&js(v,null,E,"unmounted")},D)},Qe=v=>{const{type:E,el:D,anchor:j,transition:V}=v;if(E===qe){ts(D,j);return}if(E===Ea){$(v);return}const W=()=>{r(D),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(v.shapeFlag&1&&V&&!V.persisted){const{leave:J,delayLeave:G}=V,z=()=>J(D,W);G?G(v.el,W,z):z()}else W()},ts=(v,E)=>{let D;for(;v!==E;)D=m(v),r(v),v=D;r(E)},yn=(v,E,D)=>{const{bum:j,scope:V,job:W,subTree:J,um:G,m:z,a:K}=v;jf(z),jf(K),j&&ya(j),V.stop(),W&&(W.flags|=8,Ge(J,v,E,D)),G&&zt(G,E),zt(()=>{v.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Bt=(v,E,D,j=!1,V=!1,W=0)=>{for(let J=W;J<v.length;J++)Ge(v[J],E,D,j,V)},L=v=>{if(v.shapeFlag&6)return L(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const E=m(v.anchor||v.el),D=E&&E[vT];return D?m(D):E};let te=!1;const Y=(v,E,D)=>{v==null?E._vnode&&Ge(E._vnode,null,null,!0):P(E._vnode||null,v,E,null,null,null,D),E._vnode=v,te||(te=!0,Vf(),jg(),te=!1)},re={p:P,um:Ge,m:tn,r:Qe,mt:xt,mc:w,pc:Te,pbc:R,n:L,o:t};let Se,Ue;return{render:Y,hydrate:Se,createApp:jT(Y,Se)}}function Sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qs({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function YT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function o_(t,e,n=!1){const s=t.children,r=e.children;if(ge(s)&&ge(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=hs(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&o_(o,l)),l.type===Rl&&(l.el=o.el)}}function XT(t){const e=t.slice(),n=[0];let s,r,i,o,l;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<u?i=l+1:o=l;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function a_(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:a_(e)}function jf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ZT=Symbol.for("v-scx"),eI=()=>dn(ZT);function wa(t,e,n){return l_(t,e,n)}function l_(t,e,n=Be){const{immediate:s,deep:r,flush:i,once:o}=n,l=vt({},n);let c;if(Cl)if(i==="sync"){const m=eI();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!e||s)l.once=!0;else{const m=()=>{};return m.stop=bn,m.resume=bn,m.pause=bn,m}const u=Pt;l.call=(m,_,b)=>kn(m,u,_,b);let d=!1;i==="post"?l.scheduler=m=>{zt(m,u&&u.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(m,_)=>{_?m():uh(m)}),l.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const p=mT(t,e,l);return c&&c.push(p),p}function tI(t,e,n){const s=this.proxy,r=ct(t)?t.includes(".")?c_(s,t):()=>s[t]:t.bind(s,s);let i;ve(e)?i=e:(i=e.handler,n=e);const o=Ro(this),l=l_(r,i.bind(s),n);return o(),l}function c_(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const nI=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${an(e)}Modifiers`]||t[`${Os(e)}Modifiers`];function sI(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Be;let r=n;const i=e.startsWith("update:"),o=i&&nI(s,e.slice(7));o&&(o.trim&&(r=n.map(d=>ct(d)?d.trim():d)),o.number&&(r=n.map(Xc)));let l,c=s[l=Ec(e)]||s[l=Ec(an(e))];!c&&i&&(c=s[l=Ec(Os(e))]),c&&kn(c,t,6,r);const u=s[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,kn(u,t,6,r)}}function u_(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},l=!1;if(!ve(t)){const c=u=>{const d=u_(u,e,!0);d&&(l=!0,vt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(ze(t)&&s.set(t,null),null):(ge(i)?i.forEach(c=>o[c]=null):vt(o,i),ze(t)&&s.set(t,o),o)}function Al(t,e){return!t||!gl(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Os(e))||Ne(t,e))}function Cc(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:c,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:b,inheritAttrs:P}=t,S=Wa(t);let U,M;try{if(n.shapeFlag&4){const $=r||s,ae=$;U=En(u.call(ae,$,d,p,_,m,b)),M=l}else{const $=e;U=En($.length>1?$(p,{attrs:l,slots:o,emit:c}):$(p,null)),M=e.props?l:rI(l)}}catch($){Ji.length=0,Il($,t,1),U=Ee(tr)}let F=U;if(M&&P!==!1){const $=Object.keys(M),{shapeFlag:ae}=F;$.length&&ae&7&&(i&&$.some(Xu)&&(M=iI(M,i)),F=qr(F,M,!1,!0))}return n.dirs&&(F=qr(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&hh(F,n.transition),U=F,Wa(S),U}const rI=t=>{let e;for(const n in t)(n==="class"||n==="style"||gl(n))&&((e||(e={}))[n]=t[n]);return e},iI=(t,e)=>{const n={};for(const s in t)(!Xu(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function oI(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?qf(s,o,u):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(o[m]!==s[m]&&!Al(u,m))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?qf(s,o,u):!0:!!o;return!1}function qf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Al(n,i))return!0}return!1}function aI({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const h_=t=>t.__isSuspense;function lI(t,e){e&&e.pendingBranch?ge(t)?e.effects.push(...t):e.effects.push(t):yT(t)}const qe=Symbol.for("v-fgt"),Rl=Symbol.for("v-txt"),tr=Symbol.for("v-cmt"),Ea=Symbol.for("v-stc"),Ji=[];let Jt=null;function Z(t=!1){Ji.push(Jt=t?null:[])}function cI(){Ji.pop(),Jt=Ji[Ji.length-1]||null}let uo=1;function Hf(t){uo+=t,t<0&&Jt&&(Jt.hasOnce=!0)}function d_(t){return t.dynamicChildren=uo>0?Jt||Nr:null,cI(),uo>0&&Jt&&Jt.push(t),t}function ee(t,e,n,s,r,i){return d_(y(t,e,n,s,r,i,!0))}function uI(t,e,n,s,r){return d_(Ee(t,e,n,s,r,!0))}function za(t){return t?t.__v_isVNode===!0:!1}function Ai(t,e){return t.type===e.type&&t.key===e.key}const f_=({key:t})=>t??null,Ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ct(t)||st(t)||ve(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function y(t,e=null,n=null,s=0,r=null,i=t===qe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&f_(e),ref:e&&Ta(e),scopeId:Hg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Qt};return l?(mh(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ct(n)?8:16),uo>0&&!o&&Jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Jt.push(c),c}const Ee=hI;function hI(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===xT)&&(t=tr),za(t)){const l=qr(t,e,!0);return n&&mh(l,n),uo>0&&!i&&Jt&&(l.shapeFlag&6?Jt[Jt.indexOf(t)]=l:Jt.push(l)),l.patchFlag=-2,l}if(TI(t)&&(t=t.__vccOpts),e){e=dI(e);let{class:l,style:c}=e;l&&!ct(l)&&(e.class=ni(l)),ze(c)&&(lh(c)&&!ge(c)&&(c=vt({},c)),e.style=Bn(c))}const o=ct(t)?1:h_(t)?128:wT(t)?64:ze(t)?4:ve(t)?2:0;return y(t,e,n,s,r,o,i,!0)}function dI(t){return t?lh(t)||Zg(t)?vt({},t):t:null}function qr(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:c}=t,u=e?fI(r||{},e):r,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&f_(u),ref:e&&e.ref?n&&i?ge(i)?i.concat(Ta(e)):[i,Ta(e)]:Ta(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&qr(t.ssContent),ssFallback:t.ssFallback&&qr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&hh(d,c.clone(d)),d}function Ie(t=" ",e=0){return Ee(Rl,null,t,e)}function Sl(t,e){const n=Ee(Ea,null,t);return n.staticCount=e,n}function Oe(t="",e=!1){return e?(Z(),uI(tr,null,t)):Ee(tr,null,t)}function En(t){return t==null||typeof t=="boolean"?Ee(tr):ge(t)?Ee(qe,null,t.slice()):za(t)?hs(t):Ee(Rl,null,String(t))}function hs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:qr(t)}function mh(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ge(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),mh(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Zg(e)?e._ctx=Qt:r===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:Qt},n=32):(e=String(e),s&64?(n=16,e=[Ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function fI(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=ni([e.class,s.class]));else if(r==="style")e.style=Bn([e.style,s.style]);else if(gl(r)){const i=e[r],o=s[r];o&&i!==o&&!(ge(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function vn(t,e,n,s=null){kn(t,e,7,[n,s])}const pI=Jg();let mI=0;function gI(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||pI,i={uid:mI++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new FE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:t_(s,r),emitsOptions:u_(s,r),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:s.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sI.bind(null,i),t.ce&&t.ce(i),i}let Pt=null,Ga,au;{const t=_g(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ga=e("__VUE_INSTANCE_SETTERS__",n=>Pt=n),au=e("__VUE_SSR_SETTERS__",n=>Cl=n)}const Ro=t=>{const e=Pt;return Ga(t),t.scope.on(),()=>{t.scope.off(),Ga(e)}},Wf=()=>{Pt&&Pt.scope.off(),Ga(null)};function p_(t){return t.vnode.shapeFlag&4}let Cl=!1;function _I(t,e=!1,n=!1){e&&au(e);const{props:s,children:r}=t.vnode,i=p_(t);qT(t,s,i,e),zT(t,r,n);const o=i?yI(t,e):void 0;return e&&au(!1),o}function yI(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,VT);const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?wI(t):null,i=Ro(t);Ds();const o=bo(s,t,0,[t.props,r]);if(xs(),i(),fg(o)){if(Gi(t)||Kg(t),o.then(Wf,Wf),e)return o.then(l=>{Kf(t,l,e)}).catch(l=>{Il(l,t,0)});t.asyncDep=o}else Kf(t,o,e)}else m_(t,e)}function Kf(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=Ug(e)),m_(t,n)}let zf;function m_(t,e,n){const s=t.type;if(!t.render){if(!e&&zf&&!s.render){const r=s.template||fh(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=s,u=vt(vt({isCustomElement:i,delimiters:l},o),c);s.render=zf(r,u)}}t.render=s.render||bn}{const r=Ro(t);Ds();try{LT(t)}finally{xs(),r()}}}const vI={get(t,e){return Ot(t,"get",""),t[e]}};function wI(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,vI),slots:t.slots,emit:t.emit,expose:e}}function Pl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ug(lT(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qi)return Qi[n](t)},has(e,n){return n in e||n in Qi}})):t.proxy}function EI(t,e=!0){return ve(t)?t.displayName||t.name:t.name||e&&t.__name}function TI(t){return ve(t)&&"__vccOpts"in t}const sn=(t,e)=>fT(t,e,Cl);function g_(t,e,n){const s=arguments.length;return s===2?ze(e)&&!ge(e)?za(e)?Ee(t,null,[e]):Ee(t,e):Ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&za(n)&&(n=[n]),Ee(t,e,n))}const II="3.5.11";/**
* @vue/runtime-dom v3.5.11
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lu;const Gf=typeof window<"u"&&window.trustedTypes;if(Gf)try{lu=Gf.createPolicy("vue",{createHTML:t=>t})}catch{}const __=lu?t=>lu.createHTML(t):t=>t,bI="http://www.w3.org/2000/svg",AI="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Qf=Fn&&Fn.createElement("template"),RI={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Fn.createElementNS(bI,t):e==="mathml"?Fn.createElementNS(AI,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Qf.innerHTML=__(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const l=Qf.content;if(s==="svg"||s==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},SI=Symbol("_vtc");function CI(t,e,n){const s=t[SI];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qa=Symbol("_vod"),y_=Symbol("_vsh"),PI={beforeMount(t,{value:e},{transition:n}){t[Qa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ri(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ri(t,!0),s.enter(t)):s.leave(t,()=>{Ri(t,!1)}):Ri(t,e))},beforeUnmount(t,{value:e}){Ri(t,e)}};function Ri(t,e){t.style.display=e?t[Qa]:"none",t[y_]=!e}const kI=Symbol(""),OI=/(^|;)\s*display\s*:/;function DI(t,e,n){const s=t.style,r=ct(n);let i=!1;if(n&&!r){if(e)if(ct(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ia(s,l,"")}else for(const o in e)n[o]==null&&Ia(s,o,"");for(const o in n)o==="display"&&(i=!0),Ia(s,o,n[o])}else if(r){if(e!==n){const o=s[kI];o&&(n+=";"+o),s.cssText=n,i=OI.test(n)}}else e&&t.removeAttribute("style");Qa in t&&(t[Qa]=i?s.display:"",t[y_]&&(s.display="none"))}const Jf=/\s*!important$/;function Ia(t,e,n){if(ge(n))n.forEach(s=>Ia(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=xI(t,e);Jf.test(n)?t.setProperty(Os(s),n.replace(Jf,""),"important"):t[s]=n}}const Yf=["Webkit","Moz","ms"],Pc={};function xI(t,e){const n=Pc[e];if(n)return n;let s=an(e);if(s!=="filter"&&s in t)return Pc[e]=s;s=vl(s);for(let r=0;r<Yf.length;r++){const i=Yf[r]+s;if(i in t)return Pc[e]=i}return e}const Xf="http://www.w3.org/1999/xlink";function Zf(t,e,n,s,r,i=UE(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xf,e.slice(6,e.length)):t.setAttributeNS(Xf,e,n):n==null||i&&!yg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ks(n)?String(n):n)}function ep(t,e,n,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?__(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=yg(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function Sr(t,e,n,s){t.addEventListener(e,n,s)}function NI(t,e,n,s){t.removeEventListener(e,n,s)}const tp=Symbol("_vei");function VI(t,e,n,s,r=null){const i=t[tp]||(t[tp]={}),o=i[e];if(s&&o)o.value=s;else{const[l,c]=LI(e);if(s){const u=i[e]=FI(s,r);Sr(t,l,u,c)}else o&&(NI(t,l,o,c),i[e]=void 0)}}const np=/(?:Once|Passive|Capture)$/;function LI(t){let e;if(np.test(t)){e={};let s;for(;s=t.match(np);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Os(t.slice(2)),e]}let kc=0;const MI=Promise.resolve(),UI=()=>kc||(MI.then(()=>kc=0),kc=Date.now());function FI(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;kn(BI(s,n.value),e,5,[s])};return n.value=t,n.attached=UI(),n}function BI(t,e){if(ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const sp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$I=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?CI(t,s,o):e==="style"?DI(t,n,s):gl(e)?Xu(e)||VI(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):jI(t,e,s,o))?(ep(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zf(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ct(s))?ep(t,an(e),s):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Zf(t,e,s,o))};function jI(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&sp(e)&&ve(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return sp(e)&&ct(n)?!1:e in t}const rp=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ge(e)?n=>ya(e,n):e};function qI(t){t.target.composing=!0}function ip(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Oc=Symbol("_assign"),vs={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Oc]=rp(r);const i=s||r.props&&r.props.type==="number";Sr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Xc(l)),t[Oc](l)}),n&&Sr(t,"change",()=>{t.value=t.value.trim()}),e||(Sr(t,"compositionstart",qI),Sr(t,"compositionend",ip),Sr(t,"change",ip))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Oc]=rp(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xc(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},HI=["ctrl","shift","alt","meta"],WI={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>HI.some(n=>t[`${n}Key`]&&!e.includes(n))},Yi=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const l=WI[e[o]];if(l&&l(r,e))return}return t(r,...i)})},KI={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},v_=(t,e)=>{const n=t._withKeys||(t._withKeys={}),s=e.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=Os(r.key);if(e.some(o=>o===i||KI[o]===i))return t(r)})},zI=vt({patchProp:$I},RI);let op;function GI(){return op||(op=QT(zI))}const QI=(...t)=>{const e=GI().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=YI(s);if(!r)return;const i=e._component;!ve(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,JI(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function JI(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function YI(t){return ct(t)?document.querySelector(t):t}var ap={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},XI=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],l=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},E_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,l=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|u>>6,_=u&63;c||(_=64,o||(m=64)),s.push(n[d],n[p],n[m],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(w_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],l=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||l==null||u==null||p==null)throw new ZI;const m=i<<2|l>>4;if(s.push(m),u!==64){const _=l<<4&240|u>>2;if(s.push(_),p!==64){const b=u<<6&192|p;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const e0=function(t){const e=w_(t);return E_.encodeByteArray(e,!0)},Ja=function(t){return e0(t).replace(/\./g,"")},T_=function(t){try{return E_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=()=>t0().__FIREBASE_DEFAULTS__,s0=()=>{if(typeof process>"u"||typeof ap>"u")return;const t=ap.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},r0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&T_(t[1]);return e&&JSON.parse(e)},kl=()=>{try{return n0()||s0()||r0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},I_=t=>{var e,n;return(n=(e=kl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},b_=t=>{const e=I_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},A_=()=>{var t;return(t=kl())===null||t===void 0?void 0:t.config},R_=t=>{var e;return(e=kl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ja(JSON.stringify(n)),Ja(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function o0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function a0(){var t;const e=(t=kl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function l0(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function c0(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function u0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function h0(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function d0(){return!a0()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function f0(){try{return typeof indexedDB=="object"}catch{return!1}}function p0(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=m0,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,So.prototype.create)}}class So{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?g0(i,s):"Error",l=`${this.serviceName}: ${o} (${r}).`;return new Dn(r,l,s)}}function g0(t,e){return t.replace(_0,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const _0=/\{\$([^}]+)}/g;function y0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(lp(i)&&lp(o)){if(!Hr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function lp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function v0(t,e){const n=new w0(t,e);return n.subscribe.bind(n)}class w0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");E0(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Dc),r.error===void 0&&(r.error=Dc),r.complete===void 0&&(r.complete=Dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function E0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class As{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new i0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(b0(e))try{this.getOrInitializeService({instanceIdentifier:Ws})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Ws){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ws){return this.instances.has(e)}getOptions(e=Ws){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);s===l&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:I0(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ws){return this.component?this.component.multipleInstances?e:Ws:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function I0(t){return t===Ws?void 0:t}function b0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new T0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ae||(Ae={}));const R0={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},S0=Ae.INFO,C0={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},P0=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=C0[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gh{constructor(e){this.name=e,this._logLevel=S0,this._logHandler=P0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?R0[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const k0=(t,e)=>e.some(n=>t instanceof n);let cp,up;function O0(){return cp||(cp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function D0(){return up||(up=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const C_=new WeakMap,cu=new WeakMap,P_=new WeakMap,xc=new WeakMap,_h=new WeakMap;function x0(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ws(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&C_.set(n,t)}).catch(()=>{}),_h.set(e,t),e}function N0(t){if(cu.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cu.set(t,e)}let uu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function V0(t){uu=t(uu)}function L0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Nc(this),e,...n);return P_.set(s,e.sort?e.sort():[e]),ws(s)}:D0().includes(t)?function(...e){return t.apply(Nc(this),e),ws(C_.get(this))}:function(...e){return ws(t.apply(Nc(this),e))}}function M0(t){return typeof t=="function"?L0(t):(t instanceof IDBTransaction&&N0(t),k0(t,O0())?new Proxy(t,uu):t)}function ws(t){if(t instanceof IDBRequest)return x0(t);if(xc.has(t))return xc.get(t);const e=M0(t);return e!==t&&(xc.set(t,e),_h.set(e,t)),e}const Nc=t=>_h.get(t);function U0(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),l=ws(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ws(o.result),c.oldVersion,c.newVersion,ws(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const F0=["get","getKey","getAll","getAllKeys","count"],B0=["put","add","delete","clear"],Vc=new Map;function hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=B0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||F0.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),r&&c.done]))[0]};return Vc.set(e,i),i}V0(t=>({...t,get:(e,n,s)=>hp(e,n)||t.get(e,n,s),has:(e,n)=>!!hp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(j0(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function j0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hu="@firebase/app",dp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new gh("@firebase/app"),q0="@firebase/app-compat",H0="@firebase/analytics-compat",W0="@firebase/analytics",K0="@firebase/app-check-compat",z0="@firebase/app-check",G0="@firebase/auth",Q0="@firebase/auth-compat",J0="@firebase/database",Y0="@firebase/data-connect",X0="@firebase/database-compat",Z0="@firebase/functions",eb="@firebase/functions-compat",tb="@firebase/installations",nb="@firebase/installations-compat",sb="@firebase/messaging",rb="@firebase/messaging-compat",ib="@firebase/performance",ob="@firebase/performance-compat",ab="@firebase/remote-config",lb="@firebase/remote-config-compat",cb="@firebase/storage",ub="@firebase/storage-compat",hb="@firebase/firestore",db="@firebase/vertexai-preview",fb="@firebase/firestore-compat",pb="firebase",mb="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="[DEFAULT]",gb={[hu]:"fire-core",[q0]:"fire-core-compat",[W0]:"fire-analytics",[H0]:"fire-analytics-compat",[z0]:"fire-app-check",[K0]:"fire-app-check-compat",[G0]:"fire-auth",[Q0]:"fire-auth-compat",[J0]:"fire-rtdb",[Y0]:"fire-data-connect",[X0]:"fire-rtdb-compat",[Z0]:"fire-fn",[eb]:"fire-fn-compat",[tb]:"fire-iid",[nb]:"fire-iid-compat",[sb]:"fire-fcm",[rb]:"fire-fcm-compat",[ib]:"fire-perf",[ob]:"fire-perf-compat",[ab]:"fire-rc",[lb]:"fire-rc-compat",[cb]:"fire-gcs",[ub]:"fire-gcs-compat",[hb]:"fire-fst",[fb]:"fire-fst-compat",[db]:"fire-vertex","fire-js":"fire-js",[pb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new Map,_b=new Map,fu=new Map;function fp(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function nr(t){const e=t.name;if(fu.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;fu.set(e,t);for(const n of Ya.values())fp(n,t);for(const n of _b.values())fp(n,t);return!0}function Ol(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Es=new So("app","Firebase",yb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new As("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Es.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr=mb;function k_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:du,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Es.create("bad-app-name",{appName:String(r)});if(n||(n=A_()),!n)throw Es.create("no-options");const i=Ya.get(r);if(i){if(Hr(n,i.options)&&Hr(s,i.config))return i;throw Es.create("duplicate-app",{appName:r})}const o=new A0(r);for(const c of fu.values())o.addComponent(c);const l=new vb(n,s,o);return Ya.set(r,l),l}function yh(t=du){const e=Ya.get(t);if(!e&&t===du&&A_())return k_();if(!e)throw Es.create("no-app",{appName:t});return e}function An(t,e,n){var s;let r=(s=gb[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${r}" with version "${e}":`];i&&l.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(l.join(" "));return}nr(new As(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb="firebase-heartbeat-database",Eb=1,ho="firebase-heartbeat-store";let Lc=null;function O_(){return Lc||(Lc=U0(wb,Eb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Es.create("idb-open",{originalErrorMessage:t.message})})),Lc}async function Tb(t){try{const n=(await O_()).transaction(ho),s=await n.objectStore(ho).get(D_(t));return await n.done,s}catch(e){if(e instanceof Dn)Jn.warn(e.message);else{const n=Es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function pp(t,e){try{const s=(await O_()).transaction(ho,"readwrite");await s.objectStore(ho).put(e,D_(t)),await s.done}catch(n){if(n instanceof Dn)Jn.warn(n.message);else{const s=Es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(s.message)}}}function D_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=1024,bb=30*24*60*60*1e3;class Ab{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Sb(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=bb}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Jn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mp(),{heartbeatsToSend:s,unsentEntries:r}=Rb(this._heartbeatsCache.heartbeats),i=Ja(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Jn.warn(n),""}}}function mp(){return new Date().toISOString().substring(0,10)}function Rb(t,e=Ib){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),gp(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),gp(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Sb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f0()?p0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Tb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return pp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return pp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function gp(t){return Ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t){nr(new As("platform-logger",e=>new $0(e),"PRIVATE")),nr(new As("heartbeat",e=>new Ab(e),"PRIVATE")),An(hu,dp,t),An(hu,dp,"esm2017"),An("fire-js","")}Cb("");function vh(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function x_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Pb=x_,N_=new So("auth","Firebase",x_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new gh("@firebase/auth");function kb(t,...e){Xa.logLevel<=Ae.WARN&&Xa.warn(`Auth (${hr}): ${t}`,...e)}function ba(t,...e){Xa.logLevel<=Ae.ERROR&&Xa.error(`Auth (${hr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,...e){throw wh(t,...e)}function Rn(t,...e){return wh(t,...e)}function V_(t,e,n){const s=Object.assign(Object.assign({},Pb()),{[e]:n});return new So("auth","Firebase",s).create(e,{appName:t.name})}function Gn(t){return V_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wh(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return N_.create(t,...e)}function pe(t,e,...n){if(!t)throw wh(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ba(e),new Error(e)}function Yn(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ob(){return _p()==="http:"||_p()==="https:"}function _p(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Db(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ob()||c0()||"connection"in navigator)?navigator.onLine:!0}function xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n){this.shortDelay=e,this.longDelay=n,Yn(n>e,"Short delay should be less than long delay!"),this.isMobile=o0()||u0()}get(){return Db()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e){Yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=new Po(3e4,6e4);function Ns(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vs(t,e,n,s,r={}){return M_(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const l=Co(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return l0()||(u.referrerPolicy="no-referrer"),L_.fetch()(U_(t,t.config.apiHost,n,l),u)})}async function M_(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Nb),e);try{const r=new Mb(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ua(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ua(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ua(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ua(t,"user-disabled",o);const d=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw V_(t,d,u);fn(t,d)}}catch(r){if(r instanceof Dn)throw r;fn(t,"network-request-failed",{message:String(r)})}}async function ko(t,e,n,s,r={}){const i=await Vs(t,e,n,s,r);return"mfaPendingCredential"in i&&fn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function U_(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Eh(t.config,r):`${t.config.apiScheme}://${r}`}function Lb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Mb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rn(this.auth,"network-request-failed")),Vb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ua(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Rn(t,e,s);return r.customData._tokenResponse=n,r}function yp(t){return t!==void 0&&t.enterprise!==void 0}class Ub{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Lb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Fb(t,e){return Vs(t,"GET","/v2/recaptchaConfig",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bb(t,e){return Vs(t,"POST","/v1/accounts:delete",e)}async function F_(t,e){return Vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $b(t,e=!1){const n=Ye(t),s=await n.getIdToken(e),r=Th(s);pe(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Xi(Mc(r.auth_time)),issuedAtTime:Xi(Mc(r.iat)),expirationTime:Xi(Mc(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function Th(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ba("JWT malformed, contained fewer than 3 sections"),null;try{const r=T_(n);return r?JSON.parse(r):(ba("Failed to decode base64 JWT payload"),null)}catch(r){return ba("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function vp(t){const e=Th(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&jb(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function jb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(t){var e;const n=t.auth,s=await t.getIdToken(),r=await fo(t,F_(n,{idToken:s}));pe(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?B_(i.providerUserInfo):[],l=Wb(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new mu(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Hb(t){const e=Ye(t);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wb(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function B_(t){return t.map(e=>{var{providerId:n}=e,s=vh(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(t,e){const n=await M_(t,{},async()=>{const s=Co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=U_(t,r,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",L_.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zb(t,e){return Vs(t,"POST","/v2/accounts:revokeToken",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=vp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Kb(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Fr;return s&&(pe(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(pe(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(pe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fr,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qn{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new mu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await fo(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $b(this,e)}reload(){return Hb(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Za(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await fo(this,Bb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,l,c,u,d;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,m=(r=n.email)!==null&&r!==void 0?r:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,S=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,U=(u=n.createdAt)!==null&&u!==void 0?u:void 0,M=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:F,emailVerified:$,isAnonymous:ae,providerData:de,stsTokenManager:A}=n;pe(F&&A,e,"internal-error");const w=Fr.fromJSON(this.name,A);pe(typeof F=="string",e,"internal-error"),as(p,e.name),as(m,e.name),pe(typeof $=="boolean",e,"internal-error"),pe(typeof ae=="boolean",e,"internal-error"),as(_,e.name),as(b,e.name),as(P,e.name),as(S,e.name),as(U,e.name),as(M,e.name);const T=new qn({uid:F,auth:e,email:m,emailVerified:$,displayName:p,isAnonymous:ae,photoURL:b,phoneNumber:_,tenantId:P,stsTokenManager:w,createdAt:U,lastLoginAt:M});return de&&Array.isArray(de)&&(T.providerData=de.map(R=>Object.assign({},R))),S&&(T._redirectEventId=S),T}static async _fromIdTokenResponse(e,n,s=!1){const r=new Fr;r.updateFromServerResponse(n);const i=new qn({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Za(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];pe(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?B_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),l=new Fr;l.updateFromIdToken(s);const c=new qn({uid:r.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new mu(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=new Map;function Hn(t){Yn(t instanceof Function,"Expected a class definition");let e=wp.get(t);return e?(Yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$_.type="NONE";const Ep=$_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t,e,n){return`firebase:${t}:${e}:${n}`}class Br{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Aa(this.userKey,r.apiKey,i),this.fullPersistenceKey=Aa("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Br(Hn(Ep),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Hn(Ep);const o=Aa(s,e.config.apiKey,e.name);let l=null;for(const u of n)try{const d=await u._get(o);if(d){const p=qn._fromJSON(e,d);u!==i&&(l=p),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Br(i,e,s):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Br(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(z_(e))return"Blackberry";if(G_(e))return"Webos";if(q_(e))return"Safari";if((e.includes("chrome/")||H_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function j_(t=Dt()){return/firefox\//i.test(t)}function q_(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function H_(t=Dt()){return/crios\//i.test(t)}function W_(t=Dt()){return/iemobile/i.test(t)}function K_(t=Dt()){return/android/i.test(t)}function z_(t=Dt()){return/blackberry/i.test(t)}function G_(t=Dt()){return/webos/i.test(t)}function Ih(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gb(t=Dt()){var e;return Ih(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qb(){return h0()&&document.documentMode===10}function Q_(t=Dt()){return Ih(t)||K_(t)||G_(t)||z_(t)||/windows phone/i.test(t)||W_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t,e=[]){let n;switch(t){case"Browser":n=Tp(Dt());break;case"Worker":n=`${Tp(Dt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(t,e={}){return Vs(t,"GET","/v2/passwordPolicy",Ns(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb=6;class Zb{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Xb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ip(this),this.idTokenSubscription=new Ip(this),this.beforeStateQueue=new Jb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Hn(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Br.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await F_(this,{idToken:e}),s=await qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(Gn(this));const n=e?Ye(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Yb(this),n=new Zb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new So("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await zb(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Hn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await Br.create(this,[Hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&kb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function dr(t){return Ye(t)}class Ip{constructor(e){this.auth=e,this.observer=null,this.addObserver=v0(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function tA(t){Dl=t}function Y_(t){return Dl.loadJS(t)}function nA(){return Dl.recaptchaEnterpriseScript}function sA(){return Dl.gapiScript}function rA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const iA="recaptcha-enterprise",oA="NO_RECAPTCHA";class aA{constructor(e){this.type=iA,this.auth=dr(e)}async verify(e="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{Fb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new Ub(c);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function r(i,o,l){const c=window.grecaptcha;yp(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(oA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(l=>{if(!n&&yp(window.grecaptcha))r(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=nA();c.length!==0&&(c+=l),Y_(c).then(()=>{r(l,i,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function bp(t,e,n,s=!1){const r=new aA(t);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gu(t,e,n,s){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await bp(t,e,n,n==="getOobCode");return s(t,i)}else return s(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await bp(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lA(t,e){const n=Ol(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Hr(i,e??{}))return r;fn(r,"already-initialized")}return n.initialize({options:e})}function cA(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function uA(t,e,n){const s=dr(t);pe(s._canInitEmulator,s,"emulator-config-failed"),pe(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!1,i=X_(e),{host:o,port:l}=hA(e),c=l===null?"":`:${l}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),dA()}function X_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hA(t){const e=X_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Ap(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Ap(o)}}}function Ap(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function fA(t,e){return Vs(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){return ko(t,"POST","/v1/accounts:signInWithPassword",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e){return ko(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}async function gA(t,e){return ko(t,"POST","/v1/accounts:signInWithEmailLink",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po extends bh{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new po(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new po(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,n,"signInWithPassword",pA);case"emailLink":return mA(e,{email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gu(e,s,"signUpPassword",fA);case"emailLink":return gA(e,{idToken:n,email:this._email,oobCode:this._password});default:fn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e){return ko(t,"POST","/v1/accounts:signInWithIdp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A="http://localhost";class sr extends bh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=vh(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new sr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,$r(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:_A,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Co(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vA(t){const e=Di(xi(t)).link,n=e?Di(xi(e)).deep_link_id:null,s=Di(xi(t)).deep_link_id;return(s?Di(xi(s)).link:null)||s||n||e||t}class Ah{constructor(e){var n,s,r,i,o,l;const c=Di(xi(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(s=c.oobCode)!==null&&s!==void 0?s:null,p=yA((r=c.mode)!==null&&r!==void 0?r:null);pe(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=vA(e);try{return new Ah(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.providerId=si.PROVIDER_ID}static credential(e,n){return po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ah.parseLink(n);return pe(s,"argument-error"),po._fromEmailAndCode(e,s.code,s.tenantId)}}si.PROVIDER_ID="password";si.EMAIL_PASSWORD_SIGN_IN_METHOD="password";si.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Z_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs extends Oo{constructor(){super("facebook.com")}static credential(e){return sr._fromParams({providerId:fs.PROVIDER_ID,signInMethod:fs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fs.credentialFromTaggedObject(e)}static credentialFromError(e){return fs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fs.credential(e.oauthAccessToken)}catch{return null}}}fs.FACEBOOK_SIGN_IN_METHOD="facebook.com";fs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps extends Oo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return sr._fromParams({providerId:ps.PROVIDER_ID,signInMethod:ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ps.credentialFromTaggedObject(e)}static credentialFromError(e){return ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ps.credential(n,s)}catch{return null}}}ps.GOOGLE_SIGN_IN_METHOD="google.com";ps.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Oo{constructor(){super("github.com")}static credential(e){return sr._fromParams({providerId:ms.PROVIDER_ID,signInMethod:ms.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ms.credentialFromTaggedObject(e)}static credentialFromError(e){return ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ms.credential(e.oauthAccessToken)}catch{return null}}}ms.GITHUB_SIGN_IN_METHOD="github.com";ms.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Oo{constructor(){super("twitter.com")}static credential(e,n){return sr._fromParams({providerId:gs.PROVIDER_ID,signInMethod:gs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gs.credentialFromTaggedObject(e)}static credentialFromError(e){return gs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gs.credential(n,s)}catch{return null}}}gs.TWITTER_SIGN_IN_METHOD="twitter.com";gs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e){return ko(t,"POST","/v1/accounts:signUp",Ns(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await qn._fromIdTokenResponse(e,s,r),o=Rp(s);return new rr({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Rp(s);return new rr({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Rp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Dn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new el(e,n,s,r)}}function ey(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,i,e,s):i})}async function EA(t,e,n=!1){const s=await fo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rr._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e,n=!1){const{auth:s}=t;if(Tn(s.app))return Promise.reject(Gn(s));const r="reauthenticate";try{const i=await fo(t,ey(s,r,e,t),n);pe(i.idToken,s,"internal-error");const o=Th(i.idToken);pe(o,s,"internal-error");const{sub:l}=o;return pe(t.uid===l,s,"user-mismatch"),rr._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&fn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ty(t,e,n=!1){if(Tn(t.app))return Promise.reject(Gn(t));const s="signIn",r=await ey(t,s,e),i=await rr._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function IA(t,e){return ty(dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ny(t){const e=dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bA(t,e,n){if(Tn(t.app))return Promise.reject(Gn(t));const s=dr(t),o=await gu(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wA).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ny(t),c}),l=await rr._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function AA(t,e,n){return Tn(t.app)?Promise.reject(Gn(t)):IA(Ye(t),si.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&ny(t),s})}function RA(t,e,n,s){return Ye(t).onIdTokenChanged(e,n,s)}function SA(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function ri(t,e,n,s){return Ye(t).onAuthStateChanged(e,n,s)}function CA(t){return Ye(t).signOut()}const tl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=1e3,kA=10;class ry extends sy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Qb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kA):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},PA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ry.type="LOCAL";const OA=ry;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy extends sy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}iy.type="SESSION";const oy=iy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new xl(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const l=Array.from(o).map(async u=>u(n.origin,i)),c=await DA(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const u=Rh("",20);r.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(){return window}function NA(t){Sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(){return typeof Sn().WorkerGlobalScope<"u"&&typeof Sn().importScripts=="function"}async function VA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function LA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MA(){return ay()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly="firebaseLocalStorageDb",UA=1,nl="firebaseLocalStorage",cy="fbase_key";class Do{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Nl(t,e){return t.transaction([nl],e?"readwrite":"readonly").objectStore(nl)}function FA(){const t=indexedDB.deleteDatabase(ly);return new Do(t).toPromise()}function _u(){const t=indexedDB.open(ly,UA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(nl,{keyPath:cy})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(nl)?e(s):(s.close(),await FA(),e(await _u()))})})}async function Sp(t,e,n){const s=Nl(t,!0).put({[cy]:e,value:n});return new Do(s).toPromise()}async function BA(t,e){const n=Nl(t,!1).get(e),s=await new Do(n).toPromise();return s===void 0?null:s.value}function Cp(t,e){const n=Nl(t,!0).delete(e);return new Do(n).toPromise()}const $A=800,jA=3;class uy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _u(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ay()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xl._getInstance(MA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await VA(),!this.activeServiceWorker)return;this.sender=new xA(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||LA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _u();return await Sp(e,tl,"1"),await Cp(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Sp(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>BA(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Nl(r,!1).getAll();return new Do(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uy.type="LOCAL";const qA=uy;new Po(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t,e){return e?Hn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh extends bh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function WA(t){return ty(t.auth,new Sh(t),t.bypassAuthState)}function KA(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),TA(n,new Sh(t),t.bypassAuthState)}async function zA(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),EA(n,new Sh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return WA;case"linkViaPopup":case"linkViaRedirect":return zA;case"reauthViaPopup":case"reauthViaRedirect":return KA;default:fn(this.auth,"internal-error")}}resolve(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA=new Po(2e3,1e4);class Dr extends hy{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Dr.currentPopupAction&&Dr.currentPopupAction.cancel(),Dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Yn(this.filter.length===1,"Popup operations only handle one event");const e=Rh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GA.get())};e()}}Dr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="pendingRedirect",Ra=new Map;class JA extends hy{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const s=await YA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YA(t,e){const n=eR(e),s=ZA(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function XA(t,e){Ra.set(t._key(),e)}function ZA(t){return Hn(t._redirectPersistence)}function eR(t){return Aa(QA,t.config.apiKey,t.name)}async function tR(t,e,n=!1){if(Tn(t.app))return Promise.reject(Gn(t));const s=dr(t),r=HA(s,e),o=await new JA(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=10*60*1e3;class sR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!dy(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=nR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pp(e))}saveEventToCache(e){this.cachedEventUids.add(Pp(e)),this.lastProcessedEventTime=Date.now()}}function Pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(t,e={}){return Vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aR=/^https?/;async function lR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iR(t);for(const n of e)try{if(cR(n))return}catch{}fn(t,"unauthorized-domain")}function cR(t){const e=pu(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!aR.test(n))return!1;if(oR.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new Po(3e4,6e4);function kp(){const t=Sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hR(t){return new Promise((e,n)=>{var s,r,i;function o(){kp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kp(),n(Rn(t,"network-request-failed"))},timeout:uR.get()})}if(!((r=(s=Sn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Sn().gapi)===null||i===void 0)&&i.load)o();else{const l=rA("iframefcb");return Sn()[l]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},Y_(`${sA()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Sa=null,e})}let Sa=null;function dR(t){return Sa=Sa||hR(t),Sa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new Po(5e3,15e3),pR="__/auth/iframe",mR="emulator/auth/iframe",gR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_R=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yR(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eh(e,mR):`https://${t.config.authDomain}/${pR}`,s={apiKey:e.apiKey,appName:t.name,v:hr},r=_R.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Co(s).slice(1)}`}async function vR(t){const e=await dR(t),n=Sn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:yR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gR,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),l=Sn().setTimeout(()=>{i(o)},fR.get());function c(){Sn().clearTimeout(l),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ER=500,TR=600,IR="_blank",bR="http://localhost";class Op{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AR(t,e,n,s=ER,r=TR){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const c=Object.assign(Object.assign({},wR),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(l=H_(u)?IR:n),j_(u)&&(e=e||bR,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[_,b])=>`${m}${_}=${b},`,"");if(Gb(u)&&l!=="_self")return RR(e||"",l),new Op(null);const p=window.open(e||"",l,d);pe(p,t,"popup-blocked");try{p.focus()}catch{}return new Op(p)}function RR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR="__/auth/handler",CR="emulator/auth/handler",PR=encodeURIComponent("fac");async function Dp(t,e,n,s,r,i){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:hr,eventId:r};if(e instanceof Z_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",y0(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Oo){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),u=c?`#${PR}=${encodeURIComponent(c)}`:"";return`${kR(t)}?${Co(l).slice(1)}${u}`}function kR({config:t}){return t.emulator?Eh(t,CR):`https://${t.authDomain}/${SR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="webStorageSupport";class OR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oy,this._completeRedirectFn=tR,this._overrideRedirectResult=XA}async _openPopup(e,n,s,r){var i;Yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Dp(e,n,s,pu(),r);return AR(e,o,Rh())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Dp(e,n,s,pu(),r);return NA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(Yn(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vR(e),s=new sR(e);return n.register("authEvent",r=>(pe(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uc,{type:Uc},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Uc];o!==void 0&&n(!!o),fn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=lR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Q_()||q_()||Ih()}}const DR=OR;var xp="@firebase/auth",Np="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function VR(t){nr(new As("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J_(t)},u=new eA(s,r,i,c);return cA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),nr(new As("auth-internal",e=>{const n=dr(e.getProvider("auth").getImmediate());return(s=>new xR(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(xp,Np,NR(t)),An(xp,Np,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=5*60,MR=R_("authIdTokenMaxAge")||LR;let Vp=null;const UR=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>MR)return;const r=n==null?void 0:n.token;Vp!==r&&(Vp=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Rs(t=yh()){const e=Ol(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lA(t,{popupRedirectResolver:DR,persistence:[qA,OA,oy]}),s=R_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=UR(i.toString());SA(n,o,()=>o(n.currentUser)),RA(n,l=>o(l))}}const r=I_("auth");return r&&uA(n,`http://${r}`),n}function FR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}tA({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Rn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",FR().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});VR("Browser");/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof document<"u";function fy(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function BR(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&fy(t.default)}const Le=Object.assign;function Fc(t,e){const n={};for(const s in e){const r=e[s];n[s]=pn(r)?r.map(t):t(r)}return n}const Zi=()=>{},pn=Array.isArray,py=/#/g,$R=/&/g,jR=/\//g,qR=/=/g,HR=/\?/g,my=/\+/g,WR=/%5B/g,KR=/%5D/g,gy=/%5E/g,zR=/%60/g,_y=/%7B/g,GR=/%7C/g,yy=/%7D/g,QR=/%20/g;function Ch(t){return encodeURI(""+t).replace(GR,"|").replace(WR,"[").replace(KR,"]")}function JR(t){return Ch(t).replace(_y,"{").replace(yy,"}").replace(gy,"^")}function yu(t){return Ch(t).replace(my,"%2B").replace(QR,"+").replace(py,"%23").replace($R,"%26").replace(zR,"`").replace(_y,"{").replace(yy,"}").replace(gy,"^")}function YR(t){return yu(t).replace(qR,"%3D")}function XR(t){return Ch(t).replace(py,"%23").replace(HR,"%3F")}function ZR(t){return t==null?"":XR(t).replace(jR,"%2F")}function mo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eS=/\/$/,tS=t=>t.replace(eS,"");function Bc(t,e,n="/"){let s,r={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),r=t(i)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=iS(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:mo(o)}}function nS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Lp(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sS(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Wr(e.matched[s],n.matched[r])&&vy(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vy(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!rS(t[n],e[n]))return!1;return!0}function rS(t,e){return pn(t)?Mp(t,e):pn(e)?Mp(e,t):t===e}function Mp(t,e){return pn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function iS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const ls={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var go;(function(t){t.pop="pop",t.push="push"})(go||(go={}));var eo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(eo||(eo={}));function oS(t){if(!t)if(Cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tS(t)}const aS=/^[^#]+#/;function lS(t,e){return t.replace(aS,"#")+e}function cS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Vl=()=>({left:window.scrollX,top:window.scrollY});function uS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=cS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Up(t,e){return(history.state?history.state.position-e:-1)+t}const vu=new Map;function hS(t,e){vu.set(t,e)}function dS(t){const e=vu.get(t);return vu.delete(t),e}let fS=()=>location.protocol+"//"+location.host;function wy(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let l=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(l);return c[0]!=="/"&&(c="/"+c),Lp(c,"")}return Lp(n,t)+s+r}function pS(t,e,n,s){let r=[],i=[],o=null;const l=({state:m})=>{const _=wy(t,location),b=n.value,P=e.value;let S=0;if(m){if(n.value=_,e.value=m,o&&o===b){o=null;return}S=P?m.position-P.position:0}else s(_);r.forEach(U=>{U(n.value,b,{delta:S,type:go.pop,direction:S?S>0?eo.forward:eo.back:eo.unknown})})};function c(){o=n.value}function u(m){r.push(m);const _=()=>{const b=r.indexOf(m);b>-1&&r.splice(b,1)};return i.push(_),_}function d(){const{history:m}=window;m.state&&m.replaceState(Le({},m.state,{scroll:Vl()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Fp(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Vl():null}}function mS(t){const{history:e,location:n}=window,s={value:wy(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:fS()+t+c;try{e[d?"replaceState":"pushState"](u,"",m),r.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(c,u){const d=Le({},e.state,Fp(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,d,!0),s.value=c}function l(c,u){const d=Le({},r.value,e.state,{forward:c,scroll:Vl()});i(d.current,d,!0);const p=Le({},Fp(s.value,c,null),{position:d.position+1},u);i(c,p,!1),s.value=c}return{location:s,state:r,push:l,replace:o}}function gS(t){t=oS(t);const e=mS(t),n=pS(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Le({location:"",base:t,go:s,createHref:lS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function _S(t){return typeof t=="string"||t&&typeof t=="object"}function Ey(t){return typeof t=="string"||typeof t=="symbol"}const Ty=Symbol("");var Bp;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Bp||(Bp={}));function Kr(t,e){return Le(new Error,{type:t,[Ty]:!0},e)}function Ln(t,e){return t instanceof Error&&Ty in t&&(e==null||!!(t.type&e))}const $p="[^/]+?",yS={sensitive:!1,strict:!1,start:!0,end:!0},vS=/[.+*?^${}()[\]/\\]/g;function wS(t,e){const n=Le({},yS,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=40+(n.sensitive?.25:0);if(m.type===0)p||(r+="/"),r+=m.value.replace(vS,"\\$&"),_+=40;else if(m.type===1){const{value:b,repeatable:P,optional:S,regexp:U}=m;i.push({name:b,repeatable:P,optional:S});const M=U||$p;if(M!==$p){_+=10;try{new RegExp(`(${M})`)}catch($){throw new Error(`Invalid custom RegExp for param "${b}" (${M}): `+$.message)}}let F=P?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(F=S&&u.length<2?`(?:/${F})`:"/"+F),S&&(F+="?"),r+=F,_+=20,S&&(_+=-8),P&&(_+=-20),M===".*"&&(_+=-50)}d.push(_)}s.push(d)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function l(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",b=i[m-1];p[b.name]=_&&b.repeatable?_.split("/"):_}return p}function c(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===0)d+=_.value;else if(_.type===1){const{value:b,repeatable:P,optional:S}=_,U=b in u?u[b]:"";if(pn(U)&&!P)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const M=pn(U)?U.join("/"):U;if(!M)if(S)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${b}"`);d+=M}}return d||"/"}return{re:o,score:s,keys:i,parse:l,stringify:c}}function ES(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Iy(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=ES(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(jp(s))return 1;if(jp(r))return-1}return r.length-s.length}function jp(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TS={type:0,value:""},IS=/[a-zA-Z0-9_]/;function bS(t){if(!t)return[[]];if(t==="/")return[[TS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let l=0,c,u="",d="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=s;break;case 1:c==="("?n=2:IS.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),r}function AS(t,e,n){const s=wS(bS(t.path),n),r=Le(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function RS(t,e){const n=[],s=new Map;e=Kp({strict:!1,end:!0,sensitive:!1},e);function r(p){return s.get(p)}function i(p,m,_){const b=!_,P=Hp(p);P.aliasOf=_&&_.record;const S=Kp(e,p),U=[P];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of $)U.push(Hp(Le({},P,{components:_?_.record.components:P.components,path:ae,aliasOf:_?_.record:P})))}let M,F;for(const $ of U){const{path:ae}=$;if(m&&ae[0]!=="/"){const de=m.record.path,A=de[de.length-1]==="/"?"":"/";$.path=m.record.path+(ae&&A+ae)}if(M=AS($,m,S),_?_.alias.push(M):(F=F||M,F!==M&&F.alias.push(M),b&&p.name&&!Wp(M)&&o(p.name)),by(M)&&c(M),P.children){const de=P.children;for(let A=0;A<de.length;A++)i(de[A],M,_&&_.children[A])}_=_||M}return F?()=>{o(F)}:Zi}function o(p){if(Ey(p)){const m=s.get(p);m&&(s.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&s.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const m=PS(p,n);n.splice(m,0,p),p.record.name&&!Wp(p)&&s.set(p.record.name,p)}function u(p,m){let _,b={},P,S;if("name"in p&&p.name){if(_=s.get(p.name),!_)throw Kr(1,{location:p});S=_.record.name,b=Le(qp(m.params,_.keys.filter(F=>!F.optional).concat(_.parent?_.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),p.params&&qp(p.params,_.keys.map(F=>F.name))),P=_.stringify(b)}else if(p.path!=null)P=p.path,_=n.find(F=>F.re.test(P)),_&&(b=_.parse(P),S=_.record.name);else{if(_=m.name?s.get(m.name):n.find(F=>F.re.test(m.path)),!_)throw Kr(1,{location:p,currentLocation:m});S=_.record.name,b=Le({},m.params,p.params),P=_.stringify(b)}const U=[];let M=_;for(;M;)U.unshift(M.record),M=M.parent;return{name:S,path:P,params:b,matched:U,meta:CS(U)}}t.forEach(p=>i(p));function d(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:r}}function qp(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Hp(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:SS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function SS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Wp(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CS(t){return t.reduce((e,n)=>Le(e,n.meta),{})}function Kp(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function PS(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Iy(t,e[i])<0?s=i:n=i+1}const r=kS(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function kS(t){let e=t;for(;e=e.parent;)if(by(e)&&Iy(t,e)===0)return e}function by({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function OS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(my," "),o=i.indexOf("="),l=mo(o<0?i:i.slice(0,o)),c=o<0?null:mo(i.slice(o+1));if(l in e){let u=e[l];pn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function zp(t){let e="";for(let n in t){const s=t[n];if(n=YR(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(pn(s)?s.map(i=>i&&yu(i)):[s&&yu(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function DS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=pn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const xS=Symbol(""),Gp=Symbol(""),Ll=Symbol(""),Ph=Symbol(""),wu=Symbol("");function Si(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ds(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Kr(4,{from:n,to:e})):m instanceof Error?c(m):_S(m)?c(Kr(2,{from:e,to:m})):(o&&s.enterCallbacks[r]===o&&typeof m=="function"&&o.push(m),l())},d=i(()=>t.call(s&&s.instances[r],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function $c(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(fy(c)){const d=(c.__vccOpts||c)[e];d&&i.push(ds(d,n,s,o,l,r))}else{let u=c();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=BR(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&ds(_,n,s,o,l,r)()}))}}return i}function Qp(t){const e=dn(Ll),n=dn(Ph),s=sn(()=>{const c=Je(t.to);return e.resolve(c)}),r=sn(()=>{const{matched:c}=s.value,{length:u}=c,d=c[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Wr.bind(null,d));if(m>-1)return m;const _=Jp(c[u-2]);return u>1&&Jp(d)===_&&p[p.length-1].path!==_?p.findIndex(Wr.bind(null,c[u-2])):m}),i=sn(()=>r.value>-1&&MS(n.params,s.value.params)),o=sn(()=>r.value>-1&&r.value===n.matched.length-1&&vy(n.params,s.value.params));function l(c={}){return LS(c)?e[Je(t.replace)?"replace":"push"](Je(t.to)).catch(Zi):Promise.resolve()}return{route:s,href:sn(()=>s.value.href),isActive:i,isExactActive:o,navigate:l}}const NS=Wg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qp,setup(t,{slots:e}){const n=Tl(Qp(t)),{options:s}=dn(Ll),r=sn(()=>({[Yp(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yp(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:g_("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),VS=NS;function LS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function MS(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!pn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Jp(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yp=(t,e,n)=>t??e??n,US=Wg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=dn(wu),r=sn(()=>t.route||s.value),i=dn(Gp,0),o=sn(()=>{let u=Je(i);const{matched:d}=r.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),l=sn(()=>r.value.matched[o.value]);va(Gp,sn(()=>o.value+1)),va(xS,l),va(wu,r);const c=kt();return wa(()=>[c.value,l.value,t.name],([u,d,p],[m,_,b])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Wr(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=r.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return Xp(n.default,{Component:m,route:u});const _=p.props[d],b=_?_===!0?u.params:typeof _=="function"?_(u):_:null,S=g_(m,Le({},b,e,{onVnodeUnmounted:U=>{U.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return Xp(n.default,{Component:S,route:u})||S}}});function Xp(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const FS=US;function BS(t){const e=RS(t.routes,t),n=t.parseQuery||OS,s=t.stringifyQuery||zp,r=t.history,i=Si(),o=Si(),l=Si(),c=cT(ls);let u=ls;Cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Fc.bind(null,L=>""+L),p=Fc.bind(null,ZR),m=Fc.bind(null,mo);function _(L,te){let Y,re;return Ey(L)?(Y=e.getRecordMatcher(L),re=te):re=L,e.addRoute(re,Y)}function b(L){const te=e.getRecordMatcher(L);te&&e.removeRoute(te)}function P(){return e.getRoutes().map(L=>L.record)}function S(L){return!!e.getRecordMatcher(L)}function U(L,te){if(te=Le({},te||c.value),typeof L=="string"){const E=Bc(n,L,te.path),D=e.resolve({path:E.path},te),j=r.createHref(E.fullPath);return Le(E,D,{params:m(D.params),hash:mo(E.hash),redirectedFrom:void 0,href:j})}let Y;if(L.path!=null)Y=Le({},L,{path:Bc(n,L.path,te.path).path});else{const E=Le({},L.params);for(const D in E)E[D]==null&&delete E[D];Y=Le({},L,{params:p(E)}),te.params=p(te.params)}const re=e.resolve(Y,te),Se=L.hash||"";re.params=d(m(re.params));const Ue=nS(s,Le({},L,{hash:JR(Se),path:re.path})),v=r.createHref(Ue);return Le({fullPath:Ue,hash:Se,query:s===zp?DS(L.query):L.query||{}},re,{redirectedFrom:void 0,href:v})}function M(L){return typeof L=="string"?Bc(n,L,c.value.path):Le({},L)}function F(L,te){if(u!==L)return Kr(8,{from:te,to:L})}function $(L){return A(L)}function ae(L){return $(Le(M(L),{replace:!0}))}function de(L){const te=L.matched[L.matched.length-1];if(te&&te.redirect){const{redirect:Y}=te;let re=typeof Y=="function"?Y(L):Y;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=M(re):{path:re},re.params={}),Le({query:L.query,hash:L.hash,params:re.path!=null?{}:L.params},re)}}function A(L,te){const Y=u=U(L),re=c.value,Se=L.state,Ue=L.force,v=L.replace===!0,E=de(Y);if(E)return A(Le(M(E),{state:typeof E=="object"?Le({},Se,E.state):Se,force:Ue,replace:v}),te||Y);const D=Y;D.redirectedFrom=te;let j;return!Ue&&sS(s,re,Y)&&(j=Kr(16,{to:D,from:re}),tn(re,re,!0,!1)),(j?Promise.resolve(j):R(D,re)).catch(V=>Ln(V)?Ln(V,2)?V:ln(V):Te(V,D,re)).then(V=>{if(V){if(Ln(V,2))return A(Le({replace:v},M(V.to),{state:typeof V.to=="object"?Le({},Se,V.to.state):Se,force:Ue}),te||D)}else V=k(D,re,!0,v,Se);return C(D,re,V),V})}function w(L,te){const Y=F(L,te);return Y?Promise.reject(Y):Promise.resolve()}function T(L){const te=ts.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(L):L()}function R(L,te){let Y;const[re,Se,Ue]=$S(L,te);Y=$c(re.reverse(),"beforeRouteLeave",L,te);for(const E of re)E.leaveGuards.forEach(D=>{Y.push(ds(D,L,te))});const v=w.bind(null,L,te);return Y.push(v),Bt(Y).then(()=>{Y=[];for(const E of i.list())Y.push(ds(E,L,te));return Y.push(v),Bt(Y)}).then(()=>{Y=$c(Se,"beforeRouteUpdate",L,te);for(const E of Se)E.updateGuards.forEach(D=>{Y.push(ds(D,L,te))});return Y.push(v),Bt(Y)}).then(()=>{Y=[];for(const E of Ue)if(E.beforeEnter)if(pn(E.beforeEnter))for(const D of E.beforeEnter)Y.push(ds(D,L,te));else Y.push(ds(E.beforeEnter,L,te));return Y.push(v),Bt(Y)}).then(()=>(L.matched.forEach(E=>E.enterCallbacks={}),Y=$c(Ue,"beforeRouteEnter",L,te,T),Y.push(v),Bt(Y))).then(()=>{Y=[];for(const E of o.list())Y.push(ds(E,L,te));return Y.push(v),Bt(Y)}).catch(E=>Ln(E,8)?E:Promise.reject(E))}function C(L,te,Y){l.list().forEach(re=>T(()=>re(L,te,Y)))}function k(L,te,Y,re,Se){const Ue=F(L,te);if(Ue)return Ue;const v=te===ls,E=Cr?history.state:{};Y&&(re||v?r.replace(L.fullPath,Le({scroll:v&&E&&E.scroll},Se)):r.push(L.fullPath,Se)),c.value=L,tn(L,te,Y,v),ln()}let I;function xt(){I||(I=r.listen((L,te,Y)=>{if(!yn.listening)return;const re=U(L),Se=de(re);if(Se){A(Le(Se,{replace:!0}),re).catch(Zi);return}u=re;const Ue=c.value;Cr&&hS(Up(Ue.fullPath,Y.delta),Vl()),R(re,Ue).catch(v=>Ln(v,12)?v:Ln(v,2)?(A(v.to,re).then(E=>{Ln(E,20)&&!Y.delta&&Y.type===go.pop&&r.go(-1,!1)}).catch(Zi),Promise.reject()):(Y.delta&&r.go(-Y.delta,!1),Te(v,re,Ue))).then(v=>{v=v||k(re,Ue,!1),v&&(Y.delta&&!Ln(v,8)?r.go(-Y.delta,!1):Y.type===go.pop&&Ln(v,20)&&r.go(-1,!1)),C(re,Ue,v)}).catch(Zi)}))}let en=Si(),rt=Si(),Re;function Te(L,te,Y){ln(L);const re=rt.list();return re.length?re.forEach(Se=>Se(L,te,Y)):console.error(L),Promise.reject(L)}function Ht(){return Re&&c.value!==ls?Promise.resolve():new Promise((L,te)=>{en.add([L,te])})}function ln(L){return Re||(Re=!L,xt(),en.list().forEach(([te,Y])=>L?Y(L):te()),en.reset()),L}function tn(L,te,Y,re){const{scrollBehavior:Se}=t;if(!Cr||!Se)return Promise.resolve();const Ue=!Y&&dS(Up(L.fullPath,0))||(re||!Y)&&history.state&&history.state.scroll||null;return Bg().then(()=>Se(L,te,Ue)).then(v=>v&&uS(v)).catch(v=>Te(v,L,te))}const Ge=L=>r.go(L);let Qe;const ts=new Set,yn={currentRoute:c,listening:!0,addRoute:_,removeRoute:b,clearRoutes:e.clearRoutes,hasRoute:S,getRoutes:P,resolve:U,options:t,push:$,replace:ae,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:rt.add,isReady:Ht,install(L){const te=this;L.component("RouterLink",VS),L.component("RouterView",FS),L.config.globalProperties.$router=te,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>Je(c)}),Cr&&!Qe&&c.value===ls&&(Qe=!0,$(r.location).catch(Se=>{}));const Y={};for(const Se in ls)Object.defineProperty(Y,Se,{get:()=>c.value[Se],enumerable:!0});L.provide(Ll,te),L.provide(Ph,Vg(Y)),L.provide(wu,c);const re=L.unmount;ts.add(L),L.unmount=function(){ts.delete(L),ts.size<1&&(u=ls,I&&I(),I=null,c.value=ls,Qe=!1,Re=!1),re()}}};function Bt(L){return L.reduce((te,Y)=>te.then(()=>T(Y)),Promise.resolve())}return yn}function $S(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(u=>Wr(u,l))?s.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Wr(u,c))||r.push(c))}return[n,s,r]}function jS(){return dn(Ll)}function qS(t){return dn(Ph)}var HS="firebase",WS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(HS,WS,"app");var Zp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Js,Ay;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,w){function T(){}T.prototype=w.prototype,A.D=w.prototype,A.prototype=new T,A.prototype.constructor=A,A.C=function(R,C,k){for(var I=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)I[xt-2]=arguments[xt];return w.prototype[C].apply(R,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,w,T){T||(T=0);var R=Array(16);if(typeof w=="string")for(var C=0;16>C;++C)R[C]=w.charCodeAt(T++)|w.charCodeAt(T++)<<8|w.charCodeAt(T++)<<16|w.charCodeAt(T++)<<24;else for(C=0;16>C;++C)R[C]=w[T++]|w[T++]<<8|w[T++]<<16|w[T++]<<24;w=A.g[0],T=A.g[1],C=A.g[2];var k=A.g[3],I=w+(k^T&(C^k))+R[0]+3614090360&4294967295;w=T+(I<<7&4294967295|I>>>25),I=k+(C^w&(T^C))+R[1]+3905402710&4294967295,k=w+(I<<12&4294967295|I>>>20),I=C+(T^k&(w^T))+R[2]+606105819&4294967295,C=k+(I<<17&4294967295|I>>>15),I=T+(w^C&(k^w))+R[3]+3250441966&4294967295,T=C+(I<<22&4294967295|I>>>10),I=w+(k^T&(C^k))+R[4]+4118548399&4294967295,w=T+(I<<7&4294967295|I>>>25),I=k+(C^w&(T^C))+R[5]+1200080426&4294967295,k=w+(I<<12&4294967295|I>>>20),I=C+(T^k&(w^T))+R[6]+2821735955&4294967295,C=k+(I<<17&4294967295|I>>>15),I=T+(w^C&(k^w))+R[7]+4249261313&4294967295,T=C+(I<<22&4294967295|I>>>10),I=w+(k^T&(C^k))+R[8]+1770035416&4294967295,w=T+(I<<7&4294967295|I>>>25),I=k+(C^w&(T^C))+R[9]+2336552879&4294967295,k=w+(I<<12&4294967295|I>>>20),I=C+(T^k&(w^T))+R[10]+4294925233&4294967295,C=k+(I<<17&4294967295|I>>>15),I=T+(w^C&(k^w))+R[11]+2304563134&4294967295,T=C+(I<<22&4294967295|I>>>10),I=w+(k^T&(C^k))+R[12]+1804603682&4294967295,w=T+(I<<7&4294967295|I>>>25),I=k+(C^w&(T^C))+R[13]+4254626195&4294967295,k=w+(I<<12&4294967295|I>>>20),I=C+(T^k&(w^T))+R[14]+2792965006&4294967295,C=k+(I<<17&4294967295|I>>>15),I=T+(w^C&(k^w))+R[15]+1236535329&4294967295,T=C+(I<<22&4294967295|I>>>10),I=w+(C^k&(T^C))+R[1]+4129170786&4294967295,w=T+(I<<5&4294967295|I>>>27),I=k+(T^C&(w^T))+R[6]+3225465664&4294967295,k=w+(I<<9&4294967295|I>>>23),I=C+(w^T&(k^w))+R[11]+643717713&4294967295,C=k+(I<<14&4294967295|I>>>18),I=T+(k^w&(C^k))+R[0]+3921069994&4294967295,T=C+(I<<20&4294967295|I>>>12),I=w+(C^k&(T^C))+R[5]+3593408605&4294967295,w=T+(I<<5&4294967295|I>>>27),I=k+(T^C&(w^T))+R[10]+38016083&4294967295,k=w+(I<<9&4294967295|I>>>23),I=C+(w^T&(k^w))+R[15]+3634488961&4294967295,C=k+(I<<14&4294967295|I>>>18),I=T+(k^w&(C^k))+R[4]+3889429448&4294967295,T=C+(I<<20&4294967295|I>>>12),I=w+(C^k&(T^C))+R[9]+568446438&4294967295,w=T+(I<<5&4294967295|I>>>27),I=k+(T^C&(w^T))+R[14]+3275163606&4294967295,k=w+(I<<9&4294967295|I>>>23),I=C+(w^T&(k^w))+R[3]+4107603335&4294967295,C=k+(I<<14&4294967295|I>>>18),I=T+(k^w&(C^k))+R[8]+1163531501&4294967295,T=C+(I<<20&4294967295|I>>>12),I=w+(C^k&(T^C))+R[13]+2850285829&4294967295,w=T+(I<<5&4294967295|I>>>27),I=k+(T^C&(w^T))+R[2]+4243563512&4294967295,k=w+(I<<9&4294967295|I>>>23),I=C+(w^T&(k^w))+R[7]+1735328473&4294967295,C=k+(I<<14&4294967295|I>>>18),I=T+(k^w&(C^k))+R[12]+2368359562&4294967295,T=C+(I<<20&4294967295|I>>>12),I=w+(T^C^k)+R[5]+4294588738&4294967295,w=T+(I<<4&4294967295|I>>>28),I=k+(w^T^C)+R[8]+2272392833&4294967295,k=w+(I<<11&4294967295|I>>>21),I=C+(k^w^T)+R[11]+1839030562&4294967295,C=k+(I<<16&4294967295|I>>>16),I=T+(C^k^w)+R[14]+4259657740&4294967295,T=C+(I<<23&4294967295|I>>>9),I=w+(T^C^k)+R[1]+2763975236&4294967295,w=T+(I<<4&4294967295|I>>>28),I=k+(w^T^C)+R[4]+1272893353&4294967295,k=w+(I<<11&4294967295|I>>>21),I=C+(k^w^T)+R[7]+4139469664&4294967295,C=k+(I<<16&4294967295|I>>>16),I=T+(C^k^w)+R[10]+3200236656&4294967295,T=C+(I<<23&4294967295|I>>>9),I=w+(T^C^k)+R[13]+681279174&4294967295,w=T+(I<<4&4294967295|I>>>28),I=k+(w^T^C)+R[0]+3936430074&4294967295,k=w+(I<<11&4294967295|I>>>21),I=C+(k^w^T)+R[3]+3572445317&4294967295,C=k+(I<<16&4294967295|I>>>16),I=T+(C^k^w)+R[6]+76029189&4294967295,T=C+(I<<23&4294967295|I>>>9),I=w+(T^C^k)+R[9]+3654602809&4294967295,w=T+(I<<4&4294967295|I>>>28),I=k+(w^T^C)+R[12]+3873151461&4294967295,k=w+(I<<11&4294967295|I>>>21),I=C+(k^w^T)+R[15]+530742520&4294967295,C=k+(I<<16&4294967295|I>>>16),I=T+(C^k^w)+R[2]+3299628645&4294967295,T=C+(I<<23&4294967295|I>>>9),I=w+(C^(T|~k))+R[0]+4096336452&4294967295,w=T+(I<<6&4294967295|I>>>26),I=k+(T^(w|~C))+R[7]+1126891415&4294967295,k=w+(I<<10&4294967295|I>>>22),I=C+(w^(k|~T))+R[14]+2878612391&4294967295,C=k+(I<<15&4294967295|I>>>17),I=T+(k^(C|~w))+R[5]+4237533241&4294967295,T=C+(I<<21&4294967295|I>>>11),I=w+(C^(T|~k))+R[12]+1700485571&4294967295,w=T+(I<<6&4294967295|I>>>26),I=k+(T^(w|~C))+R[3]+2399980690&4294967295,k=w+(I<<10&4294967295|I>>>22),I=C+(w^(k|~T))+R[10]+4293915773&4294967295,C=k+(I<<15&4294967295|I>>>17),I=T+(k^(C|~w))+R[1]+2240044497&4294967295,T=C+(I<<21&4294967295|I>>>11),I=w+(C^(T|~k))+R[8]+1873313359&4294967295,w=T+(I<<6&4294967295|I>>>26),I=k+(T^(w|~C))+R[15]+4264355552&4294967295,k=w+(I<<10&4294967295|I>>>22),I=C+(w^(k|~T))+R[6]+2734768916&4294967295,C=k+(I<<15&4294967295|I>>>17),I=T+(k^(C|~w))+R[13]+1309151649&4294967295,T=C+(I<<21&4294967295|I>>>11),I=w+(C^(T|~k))+R[4]+4149444226&4294967295,w=T+(I<<6&4294967295|I>>>26),I=k+(T^(w|~C))+R[11]+3174756917&4294967295,k=w+(I<<10&4294967295|I>>>22),I=C+(w^(k|~T))+R[2]+718787259&4294967295,C=k+(I<<15&4294967295|I>>>17),I=T+(k^(C|~w))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+w&4294967295,A.g[1]=A.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+k&4294967295}s.prototype.u=function(A,w){w===void 0&&(w=A.length);for(var T=w-this.blockSize,R=this.B,C=this.h,k=0;k<w;){if(C==0)for(;k<=T;)r(this,A,k),k+=this.blockSize;if(typeof A=="string"){for(;k<w;)if(R[C++]=A.charCodeAt(k++),C==this.blockSize){r(this,R),C=0;break}}else for(;k<w;)if(R[C++]=A[k++],C==this.blockSize){r(this,R),C=0;break}}this.h=C,this.o+=w},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var w=1;w<A.length-8;++w)A[w]=0;var T=8*this.o;for(w=A.length-8;w<A.length;++w)A[w]=T&255,T/=256;for(this.u(A),A=Array(16),w=T=0;4>w;++w)for(var R=0;32>R;R+=8)A[T++]=this.g[w]>>>R&255;return A};function i(A,w){var T=l;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=w(A)}function o(A,w){this.h=w;for(var T=[],R=!0,C=A.length-1;0<=C;C--){var k=A[C]|0;R&&k==w||(T[C]=k,R=!1)}this.g=T}var l={};function c(A){return-128<=A&&128>A?i(A,function(w){return new o([w|0],0>w?-1:0)}):new o([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return S(u(-A));for(var w=[],T=1,R=0;A>=T;R++)w[R]=A/T|0,T*=4294967296;return new o(w,0)}function d(A,w){if(A.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(A.charAt(0)=="-")return S(d(A.substring(1),w));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(w,8)),R=p,C=0;C<A.length;C+=8){var k=Math.min(8,A.length-C),I=parseInt(A.substring(C,C+k),w);8>k?(k=u(Math.pow(w,k)),R=R.j(k).add(u(I))):(R=R.j(T),R=R.add(u(I)))}return R}var p=c(0),m=c(1),_=c(16777216);t=o.prototype,t.m=function(){if(P(this))return-S(this).m();for(var A=0,w=1,T=0;T<this.g.length;T++){var R=this.i(T);A+=(0<=R?R:4294967296+R)*w,w*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b(this))return"0";if(P(this))return"-"+S(this).toString(A);for(var w=u(Math.pow(A,6)),T=this,R="";;){var C=$(T,w).g;T=U(T,C.j(w));var k=((0<T.g.length?T.g[0]:T.h)>>>0).toString(A);if(T=C,b(T))return k+R;for(;6>k.length;)k="0"+k;R=k+R}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function b(A){if(A.h!=0)return!1;for(var w=0;w<A.g.length;w++)if(A.g[w]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=U(this,A),P(A)?-1:b(A)?0:1};function S(A){for(var w=A.g.length,T=[],R=0;R<w;R++)T[R]=~A.g[R];return new o(T,~A.h).add(m)}t.abs=function(){return P(this)?S(this):this},t.add=function(A){for(var w=Math.max(this.g.length,A.g.length),T=[],R=0,C=0;C<=w;C++){var k=R+(this.i(C)&65535)+(A.i(C)&65535),I=(k>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);R=I>>>16,k&=65535,I&=65535,T[C]=I<<16|k}return new o(T,T[T.length-1]&-2147483648?-1:0)};function U(A,w){return A.add(S(w))}t.j=function(A){if(b(this)||b(A))return p;if(P(this))return P(A)?S(this).j(S(A)):S(S(this).j(A));if(P(A))return S(this.j(S(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var w=this.g.length+A.g.length,T=[],R=0;R<2*w;R++)T[R]=0;for(R=0;R<this.g.length;R++)for(var C=0;C<A.g.length;C++){var k=this.i(R)>>>16,I=this.i(R)&65535,xt=A.i(C)>>>16,en=A.i(C)&65535;T[2*R+2*C]+=I*en,M(T,2*R+2*C),T[2*R+2*C+1]+=k*en,M(T,2*R+2*C+1),T[2*R+2*C+1]+=I*xt,M(T,2*R+2*C+1),T[2*R+2*C+2]+=k*xt,M(T,2*R+2*C+2)}for(R=0;R<w;R++)T[R]=T[2*R+1]<<16|T[2*R];for(R=w;R<2*w;R++)T[R]=0;return new o(T,0)};function M(A,w){for(;(A[w]&65535)!=A[w];)A[w+1]+=A[w]>>>16,A[w]&=65535,w++}function F(A,w){this.g=A,this.h=w}function $(A,w){if(b(w))throw Error("division by zero");if(b(A))return new F(p,p);if(P(A))return w=$(S(A),w),new F(S(w.g),S(w.h));if(P(w))return w=$(A,S(w)),new F(S(w.g),w.h);if(30<A.g.length){if(P(A)||P(w))throw Error("slowDivide_ only works with positive integers.");for(var T=m,R=w;0>=R.l(A);)T=ae(T),R=ae(R);var C=de(T,1),k=de(R,1);for(R=de(R,2),T=de(T,2);!b(R);){var I=k.add(R);0>=I.l(A)&&(C=C.add(T),k=I),R=de(R,1),T=de(T,1)}return w=U(A,C.j(w)),new F(C,w)}for(C=p;0<=A.l(w);){for(T=Math.max(1,Math.floor(A.m()/w.m())),R=Math.ceil(Math.log(T)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),k=u(T),I=k.j(w);P(I)||0<I.l(A);)T-=R,k=u(T),I=k.j(w);b(k)&&(k=m),C=C.add(k),A=U(A,I)}return new F(C,A)}t.A=function(A){return $(this,A).h},t.and=function(A){for(var w=Math.max(this.g.length,A.g.length),T=[],R=0;R<w;R++)T[R]=this.i(R)&A.i(R);return new o(T,this.h&A.h)},t.or=function(A){for(var w=Math.max(this.g.length,A.g.length),T=[],R=0;R<w;R++)T[R]=this.i(R)|A.i(R);return new o(T,this.h|A.h)},t.xor=function(A){for(var w=Math.max(this.g.length,A.g.length),T=[],R=0;R<w;R++)T[R]=this.i(R)^A.i(R);return new o(T,this.h^A.h)};function ae(A){for(var w=A.g.length+1,T=[],R=0;R<w;R++)T[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(T,A.h)}function de(A,w){var T=w>>5;w%=32;for(var R=A.g.length-T,C=[],k=0;k<R;k++)C[k]=0<w?A.i(k+T)>>>w|A.i(k+T+1)<<32-w:A.i(k+T);return new o(C,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Ay=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Js=o}).apply(typeof Zp<"u"?Zp:typeof self<"u"?self:typeof window<"u"?window:{});var ha=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ry,Ni,Sy,Ca,Eu,Cy,Py,ky;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ha=="object"&&ha];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var s=n(this);function r(a,h){if(h)e:{var f=s;a=a.split(".");for(var g=0;g<a.length-1;g++){var O=a[g];if(!(O in f))break e;f=f[O]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,O={next:function(){if(!g&&f<a.length){var x=f++;return{value:h(x,a[x]),done:!1}}return g=!0,{done:!0,value:void 0}}};return O[Symbol.iterator]=function(){return O},O}r("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var O=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(O,g),a.apply(h,O)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function b(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,O,x){for(var Q=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)Q[Fe-2]=arguments[Fe];return h.prototype[O].apply(g,Q)}}function P(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function S(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const O=a.length||0,x=g.length||0;a.length=O+x;for(let Q=0;Q<x;Q++)a[O+Q]=g[Q]}else a.push(g)}}class U{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function M(a){return/^[\s\xa0]*$/.test(a)}function F(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function $(a){return $[" "](a),a}$[" "]=function(){};var ae=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function de(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function A(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function w(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(a,h){let f,g;for(let O=1;O<arguments.length;O++){g=arguments[O];for(f in g)a[f]=g[f];for(let x=0;x<T.length;x++)f=T[x],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function C(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function k(a){l.setTimeout(()=>{throw a},0)}function I(){var a=Ht;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class xt{constructor(){this.h=this.g=null}add(h,f){const g=en.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var en=new U(()=>new rt,a=>a.reset());class rt{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Re,Te=!1,Ht=new xt,ln=()=>{const a=l.Promise.resolve(void 0);Re=()=>{a.then(tn)}};var tn=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){k(f)}var h=en;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Te=!1};function Ge(){this.s=this.s,this.C=this.C}Ge.prototype.s=!1,Ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var ts=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function yn(a,h){if(Qe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ae){e:{try{$(h.nodeName);var O=!0;break e}catch{}O=!1}O||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Bt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&yn.aa.h.call(this)}}b(yn,Qe);var Bt={2:"touch",3:"pen",4:"mouse"};yn.prototype.h=function(){yn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),te=0;function Y(a,h,f,g,O){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=O,this.key=++te,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Se(a){this.src=a,this.g={},this.h=0}Se.prototype.add=function(a,h,f,g,O){var x=a.toString();a=this.g[x],a||(a=this.g[x]=[],this.h++);var Q=v(a,h,g,O);return-1<Q?(h=a[Q],f||(h.fa=!1)):(h=new Y(h,this.src,x,!!g,O),h.fa=f,a.push(h)),h};function Ue(a,h){var f=h.type;if(f in a.g){var g=a.g[f],O=Array.prototype.indexOf.call(g,h,void 0),x;(x=0<=O)&&Array.prototype.splice.call(g,O,1),x&&(re(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function v(a,h,f,g){for(var O=0;O<a.length;++O){var x=a[O];if(!x.da&&x.listener==h&&x.capture==!!f&&x.ha==g)return O}return-1}var E="closure_lm_"+(1e6*Math.random()|0),D={};function j(a,h,f,g,O){if(Array.isArray(h)){for(var x=0;x<h.length;x++)j(a,h[x],f,g,O);return null}return f=le(f),a&&a[L]?a.K(h,f,u(g)?!!g.capture:!!g,O):V(a,h,f,!1,g,O)}function V(a,h,f,g,O,x){if(!h)throw Error("Invalid event type");var Q=u(O)?!!O.capture:!!O,Fe=he(a);if(Fe||(a[E]=Fe=new Se(a)),f=Fe.add(h,f,g,Q,x),f.proxy)return f;if(g=W(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)ts||(O=Q),O===void 0&&(O=!1),a.addEventListener(h.toString(),g,O);else if(a.attachEvent)a.attachEvent(z(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function W(){function a(f){return h.call(a.src,a.listener,f)}const h=K;return a}function J(a,h,f,g,O){if(Array.isArray(h))for(var x=0;x<h.length;x++)J(a,h[x],f,g,O);else g=u(g)?!!g.capture:!!g,f=le(f),a&&a[L]?(a=a.i,h=String(h).toString(),h in a.g&&(x=a.g[h],f=v(x,f,g,O),-1<f&&(re(x[f]),Array.prototype.splice.call(x,f,1),x.length==0&&(delete a.g[h],a.h--)))):a&&(a=he(a))&&(h=a.g[h.toString()],a=-1,h&&(a=v(h,f,g,O)),(f=-1<a?h[a]:null)&&G(f))}function G(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[L])Ue(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(z(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=he(h))?(Ue(f,a),f.h==0&&(f.src=null,h[E]=null)):re(a)}}}function z(a){return a in D?D[a]:D[a]="on"+a}function K(a,h){if(a.da)a=!0;else{h=new yn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&G(a),a=f.call(g,h)}return a}function he(a){return a=a[E],a instanceof Se?a:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[X]||(a[X]=function(h){return a.handleEvent(h)}),a[X])}function ie(){Ge.call(this),this.i=new Se(this),this.M=this,this.F=null}b(ie,Ge),ie.prototype[L]=!0,ie.prototype.removeEventListener=function(a,h,f,g){J(this,a,h,f,g)};function fe(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Qe(h,a);else if(h instanceof Qe)h.target=h.target||a;else{var O=h;h=new Qe(g,a),R(h,O)}if(O=!0,f)for(var x=f.length-1;0<=x;x--){var Q=h.g=f[x];O=xe(Q,g,!0,h)&&O}if(Q=h.g=a,O=xe(Q,g,!0,h)&&O,O=xe(Q,g,!1,h)&&O,f)for(x=0;x<f.length;x++)Q=h.g=f[x],O=xe(Q,g,!1,h)&&O}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)re(f[g]);delete a.g[h],a.h--}}this.F=null},ie.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ie.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function xe(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var O=!0,x=0;x<h.length;++x){var Q=h[x];if(Q&&!Q.da&&Q.capture==f){var Fe=Q.listener,pt=Q.ha||Q.src;Q.fa&&Ue(a.i,Q),O=Fe.call(pt,g)!==!1&&O}}return O&&!g.defaultPrevented}function Pe(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Et(a){a.g=Pe(()=>{a.g=null,a.i&&(a.i=!1,Et(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ht extends Ge{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){Ge.call(this),this.h=a,this.g={}}b(ft,Ge);var Tt=[];function ns(a){de(a.g,function(h,f){this.g.hasOwnProperty(f)&&G(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),ns(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yr=l.JSON.stringify,Nt=l.JSON.parse,nn=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function vr(){}vr.prototype.h=null;function Nd(a){return a.h||(a.h=a.i())}function Vd(){}var di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oc(){Qe.call(this,"d")}b(oc,Qe);function ac(){Qe.call(this,"c")}b(ac,Qe);var Us={},Ld=null;function qo(){return Ld=Ld||new ie}Us.La="serverreachability";function Md(a){Qe.call(this,Us.La,a)}b(Md,Qe);function fi(a){const h=qo();fe(h,new Md(h))}Us.STAT_EVENT="statevent";function Ud(a,h){Qe.call(this,Us.STAT_EVENT,a),this.stat=h}b(Ud,Qe);function Vt(a){const h=qo();fe(h,new Ud(h,a))}Us.Ma="timingevent";function Fd(a,h){Qe.call(this,Us.Ma,a),this.size=h}b(Fd,Qe);function pi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function mi(){this.g=!0}mi.prototype.xa=function(){this.g=!1};function sE(a,h,f,g,O,x){a.info(function(){if(a.g)if(x)for(var Q="",Fe=x.split("&"),pt=0;pt<Fe.length;pt++){var ke=Fe[pt].split("=");if(1<ke.length){var It=ke[0];ke=ke[1];var bt=It.split("_");Q=2<=bt.length&&bt[1]=="type"?Q+(It+"="+ke+"&"):Q+(It+"=redacted&")}}else Q=null;else Q=x;return"XMLHTTP REQ ("+g+") [attempt "+O+"]: "+h+`
`+f+`
`+Q})}function rE(a,h,f,g,O,x,Q){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+O+"]: "+h+`
`+f+`
`+x+" "+Q})}function wr(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+oE(a,f)+(g?" "+g:"")})}function iE(a,h){a.info(function(){return"TIMEOUT: "+h})}mi.prototype.info=function(){};function oE(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var O=g[1];if(Array.isArray(O)&&!(1>O.length)){var x=O[0];if(x!="noop"&&x!="stop"&&x!="close")for(var Q=1;Q<O.length;Q++)O[Q]=""}}}}return yr(f)}catch{return h}}var Ho={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Bd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lc;function Wo(){}b(Wo,vr),Wo.prototype.g=function(){return new XMLHttpRequest},Wo.prototype.i=function(){return{}},lc=new Wo;function ss(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $d}function $d(){this.i=null,this.g="",this.h=!1}var jd={},cc={};function uc(a,h,f){a.L=1,a.v=Qo(xn(h)),a.m=f,a.P=!0,qd(a,null)}function qd(a,h){a.F=Date.now(),Ko(a),a.A=xn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),sf(f.i,"t",g),a.C=0,f=a.j.J,a.h=new $d,a.g=Tf(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ht(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var O="readystatechange";Array.isArray(O)||(O&&(Tt[0]=O.toString()),O=Tt);for(var x=0;x<O.length;x++){var Q=j(f,O[x],g||h.handleEvent,!1,h.h||h);if(!Q)break;h.g[Q.key]=Q}h=a.H?w(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),fi(),sE(a.i,a.u,a.A,a.l,a.R,a.m)}ss.prototype.ca=function(a){a=a.target;const h=this.M;h&&Nn(a)==3?h.j():this.Y(a)},ss.prototype.Y=function(a){try{if(a==this.g)e:{const bt=Nn(this.g);var h=this.g.Ba();const Ir=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||hf(this.g)))){this.J||bt!=4||h==7||(h==8||0>=Ir?fi(3):fi(2)),hc(this);var f=this.g.Z();this.X=f;t:if(Hd(this)){var g=hf(this.g);a="";var O=g.length,x=Nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fs(this),gi(this);var Q="";break t}this.h.i=new l.TextDecoder}for(h=0;h<O;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(x&&h==O-1)});g.length=0,this.h.g+=a,this.C=0,Q=this.h.g}else Q=this.g.oa();if(this.o=f==200,rE(this.i,this.u,this.A,this.l,this.R,bt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Fe,pt=this.g;if((Fe=pt.g?pt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Fe)){var ke=Fe;break t}}ke=null}if(f=ke)wr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dc(this,f);else{this.o=!1,this.s=3,Vt(12),Fs(this),gi(this);break e}}if(this.P){f=!0;let cn;for(;!this.J&&this.C<Q.length;)if(cn=aE(this,Q),cn==cc){bt==4&&(this.s=4,Vt(14),f=!1),wr(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==jd){this.s=4,Vt(15),wr(this.i,this.l,Q,"[Invalid Chunk]"),f=!1;break}else wr(this.i,this.l,cn,null),dc(this,cn);if(Hd(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||Q.length!=0||this.h.h||(this.s=1,Vt(16),f=!1),this.o=this.o&&f,!f)wr(this.i,this.l,Q,"[Invalid Chunked Response]"),Fs(this),gi(this);else if(0<Q.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+Q.length),yc(It),It.M=!0,Vt(11))}}else wr(this.i,this.l,Q,null),dc(this,Q);bt==4&&Fs(this),this.o&&!this.J&&(bt==4?yf(this.j,this):(this.o=!1,Ko(this)))}else bE(this.g),f==400&&0<Q.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),Fs(this),gi(this)}}}catch{}finally{}};function Hd(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function aE(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?cc:(f=Number(h.substring(f,g)),isNaN(f)?jd:(g+=1,g+f>h.length?cc:(h=h.slice(g,g+f),a.C=g+f,h)))}ss.prototype.cancel=function(){this.J=!0,Fs(this)};function Ko(a){a.S=Date.now()+a.I,Wd(a,a.I)}function Wd(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=pi(m(a.ba,a),h)}function hc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}ss.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(iE(this.i,this.A),this.L!=2&&(fi(),Vt(17)),Fs(this),this.s=2,gi(this)):Wd(this,this.S-a)};function gi(a){a.j.G==0||a.J||yf(a.j,a)}function Fs(a){hc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ns(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function dc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||fc(f.h,a))){if(!a.K&&fc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var O=g;if(O[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)ta(f),Zo(f);else break e;_c(f),Vt(18)}}else f.za=O[1],0<f.za-f.T&&37500>O[2]&&f.F&&f.v==0&&!f.C&&(f.C=pi(m(f.Za,f),6e3));if(1>=Gd(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else $s(f,11)}else if((a.K||f.g==a)&&ta(f),!M(h))for(O=f.Da.g.parse(h),h=0;h<O.length;h++){let ke=O[h];if(f.T=ke[0],ke=ke[1],f.G==2)if(ke[0]=="c"){f.K=ke[1],f.ia=ke[2];const It=ke[3];It!=null&&(f.la=It,f.j.info("VER="+f.la));const bt=ke[4];bt!=null&&(f.Aa=bt,f.j.info("SVER="+f.Aa));const Ir=ke[5];Ir!=null&&typeof Ir=="number"&&0<Ir&&(g=1.5*Ir,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const cn=a.g;if(cn){const sa=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(sa){var x=g.h;x.g||sa.indexOf("spdy")==-1&&sa.indexOf("quic")==-1&&sa.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(pc(x,x.h),x.h=null))}if(g.D){const vc=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;vc&&(g.ya=vc,je(g.I,g.D,vc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var Q=a;if(g.qa=Ef(g,g.J?g.ia:null,g.W),Q.K){Qd(g.h,Q);var Fe=Q,pt=g.L;pt&&(Fe.I=pt),Fe.B&&(hc(Fe),Ko(Fe)),g.g=Q}else gf(g);0<f.i.length&&ea(f)}else ke[0]!="stop"&&ke[0]!="close"||$s(f,7);else f.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?$s(f,7):gc(f):ke[0]!="noop"&&f.l&&f.l.ta(ke),f.v=0)}}fi(4)}catch{}}var lE=class{constructor(a,h){this.g=a,this.map=h}};function Kd(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zd(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Gd(a){return a.h?1:a.g?a.g.size:0}function fc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function pc(a,h){a.g?a.g.add(h):a.h=h}function Qd(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Kd.prototype.cancel=function(){if(this.i=Jd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jd(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return P(a.i)}function cE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function uE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Yd(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=uE(a),g=cE(a),O=g.length,x=0;x<O;x++)h.call(void 0,g[x],f&&f[x],a)}var Xd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hE(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),O=null;if(0<=g){var x=a[f].substring(0,g);O=a[f].substring(g+1)}else x=a[f];h(x,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Bs(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Bs){this.h=a.h,zo(this,a.j),this.o=a.o,this.g=a.g,Go(this,a.s),this.l=a.l;var h=a.i,f=new vi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Zd(this,f),this.m=a.m}else a&&(h=String(a).match(Xd))?(this.h=!1,zo(this,h[1]||"",!0),this.o=_i(h[2]||""),this.g=_i(h[3]||"",!0),Go(this,h[4]),this.l=_i(h[5]||"",!0),Zd(this,h[6]||"",!0),this.m=_i(h[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}Bs.prototype.toString=function(){var a=[],h=this.j;h&&a.push(yi(h,ef,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(yi(h,ef,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(yi(f,f.charAt(0)=="/"?pE:fE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",yi(f,gE)),a.join("")};function xn(a){return new Bs(a)}function zo(a,h,f){a.j=f?_i(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Go(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Zd(a,h,f){h instanceof vi?(a.i=h,_E(a.i,a.h)):(f||(h=yi(h,mE)),a.i=new vi(h,a.h))}function je(a,h,f){a.i.set(h,f)}function Qo(a){return je(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function _i(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,dE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var ef=/[#\/\?@]/g,fE=/[#\?:]/g,pE=/[#\?]/g,mE=/[#\?@]/g,gE=/#/g;function vi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function rs(a){a.g||(a.g=new Map,a.h=0,a.i&&hE(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=vi.prototype,t.add=function(a,h){rs(this),this.i=null,a=Er(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function tf(a,h){rs(a),h=Er(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function nf(a,h){return rs(a),h=Er(a,h),a.g.has(h)}t.forEach=function(a,h){rs(this),this.g.forEach(function(f,g){f.forEach(function(O){a.call(h,O,g,this)},this)},this)},t.na=function(){rs(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const O=a[g];for(let x=0;x<O.length;x++)f.push(h[g])}return f},t.V=function(a){rs(this);let h=[];if(typeof a=="string")nf(this,a)&&(h=h.concat(this.g.get(Er(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return rs(this),this.i=null,a=Er(this,a),nf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function sf(a,h,f){tf(a,h),0<f.length&&(a.i=null,a.g.set(Er(a,h),P(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const x=encodeURIComponent(String(g)),Q=this.V(g);for(g=0;g<Q.length;g++){var O=x;Q[g]!==""&&(O+="="+encodeURIComponent(String(Q[g]))),a.push(O)}}return this.i=a.join("&")};function Er(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function _E(a,h){h&&!a.j&&(rs(a),a.i=null,a.g.forEach(function(f,g){var O=g.toLowerCase();g!=O&&(tf(this,g),sf(this,O,f))},a)),a.j=h}function yE(a,h){const f=new mi;if(l.Image){const g=new Image;g.onload=_(is,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(is,f,"TestLoadImage: error",!1,h,g),g.onabort=_(is,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(is,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function vE(a,h){const f=new mi,g=new AbortController,O=setTimeout(()=>{g.abort(),is(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(x=>{clearTimeout(O),x.ok?is(f,"TestPingServer: ok",!0,h):is(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(O),is(f,"TestPingServer: error",!1,h)})}function is(a,h,f,g,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),g(f)}catch{}}function wE(){this.g=new nn}function EE(a,h,f){const g=f||"";try{Yd(a,function(O,x){let Q=O;u(O)&&(Q=yr(O)),h.push(g+x+"="+encodeURIComponent(Q))})}catch(O){throw h.push(g+"type="+encodeURIComponent("_badmap")),O}}function Jo(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Jo,vr),Jo.prototype.g=function(){return new Yo(this.l,this.j)},Jo.prototype.i=function(a){return function(){return a}}({});function Yo(a,h){ie.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Yo,ie),t=Yo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ei(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ei(this)),this.g&&(this.readyState=3,Ei(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function rf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?wi(this):Ei(this),this.readyState==3&&rf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,wi(this))},t.Qa=function(a){this.g&&(this.response=a,wi(this))},t.ga=function(){this.g&&wi(this)};function wi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ei(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Ei(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Yo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function of(a){let h="";return de(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function mc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=of(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):je(a,h,f))}function Ze(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(Ze,ie);var TE=/^https?$/i,IE=["POST","PUT"];t=Ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lc.g(),this.v=this.o?Nd(this.o):Nd(lc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(x){af(this,x);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var O in g)f.set(O,g[O]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const x of g.keys())f.set(x,g.get(x));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(x=>x.toLowerCase()=="content-type"),O=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(IE,h,void 0))||g||O||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,Q]of f)this.g.setRequestHeader(x,Q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{uf(this),this.u=!0,this.g.send(a),this.u=!1}catch(x){af(this,x)}};function af(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,lf(a),Xo(a)}function lf(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),Xo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xo(this,!0)),Ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cf(this):this.bb())},t.bb=function(){cf(this)};function cf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Nn(a)!=4||a.Z()!=2)){if(a.u&&Nn(a)==4)Pe(a.Ea,0,a);else if(fe(a,"readystatechange"),Nn(a)==4){a.h=!1;try{const Q=a.Z();e:switch(Q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=Q===0){var O=String(a.D).match(Xd)[1]||null;!O&&l.self&&l.self.location&&(O=l.self.location.protocol.slice(0,-1)),g=!TE.test(O?O.toLowerCase():"")}f=g}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var x=2<Nn(a)?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.Z()+"]",lf(a)}}finally{Xo(a)}}}}function Xo(a,h){if(a.g){uf(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||fe(a,"ready");try{f.onreadystatechange=g}catch{}}}function uf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Nn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Nt(h)}};function hf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bE(a){const h={};a=(a.g&&2<=Nn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(M(a[g]))continue;var f=C(a[g]);const O=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const x=h[O]||[];h[O]=x,x.push(f)}A(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function df(a){this.Aa=0,this.i=[],this.j=new mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ti("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ti("baseRetryDelayMs",5e3,a),this.cb=Ti("retryDelaySeedMs",1e4,a),this.Wa=Ti("forwardChannelMaxRetries",2,a),this.wa=Ti("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Kd(a&&a.concurrentRequestLimit),this.Da=new wE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=df.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Vt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Ef(this,null,this.W),ea(this)};function gc(a){if(ff(a),a.G==3){var h=a.U++,f=xn(a.I);if(je(f,"SID",a.K),je(f,"RID",h),je(f,"TYPE","terminate"),Ii(a,f),h=new ss(a,a.j,h),h.L=2,h.v=Qo(xn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Tf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ko(h)}wf(a)}function Zo(a){a.g&&(yc(a),a.g.cancel(),a.g=null)}function ff(a){Zo(a),a.u&&(l.clearTimeout(a.u),a.u=null),ta(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function ea(a){if(!zd(a.h)&&!a.s){a.s=!0;var h=a.Ga;Re||ln(),Te||(Re(),Te=!0),Ht.add(h,a),a.B=0}}function AE(a,h){return Gd(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=pi(m(a.Ga,a,h),vf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const O=new ss(this,this.j,a);let x=this.o;if(this.S&&(x?(x=w(x),R(x,this.S)):x=this.S),this.m!==null||this.O||(O.H=x,x=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=mf(this,O,h),f=xn(this.I),je(f,"RID",a),je(f,"CVER",22),this.D&&je(f,"X-HTTP-Session-Id",this.D),Ii(this,f),x&&(this.O?h="headers="+encodeURIComponent(String(of(x)))+"&"+h:this.m&&mc(f,this.m,x)),pc(this.h,O),this.Ua&&je(f,"TYPE","init"),this.P?(je(f,"$req",h),je(f,"SID","null"),O.T=!0,uc(O,f,null)):uc(O,f,h),this.G=2}}else this.G==3&&(a?pf(this,a):this.i.length==0||zd(this.h)||pf(this))};function pf(a,h){var f;h?f=h.l:f=a.U++;const g=xn(a.I);je(g,"SID",a.K),je(g,"RID",f),je(g,"AID",a.T),Ii(a,g),a.m&&a.o&&mc(g,a.m,a.o),f=new ss(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=mf(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pc(a.h,f),uc(f,g,h)}function Ii(a,h){a.H&&de(a.H,function(f,g){je(h,g,f)}),a.l&&Yd({},function(f,g){je(h,g,f)})}function mf(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var O=a.i;let x=-1;for(;;){const Q=["count="+f];x==-1?0<f?(x=O[0].g,Q.push("ofs="+x)):x=0:Q.push("ofs="+x);let Fe=!0;for(let pt=0;pt<f;pt++){let ke=O[pt].g;const It=O[pt].map;if(ke-=x,0>ke)x=Math.max(0,O[pt].g-100),Fe=!1;else try{EE(It,Q,"req"+ke+"_")}catch{g&&g(It)}}if(Fe){g=Q.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function gf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Re||ln(),Te||(Re(),Te=!0),Ht.add(h,a),a.v=0}}function _c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=pi(m(a.Fa,a),vf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,_f(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=pi(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),Zo(this),_f(this))};function yc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function _f(a){a.g=new ss(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=xn(a.qa);je(h,"RID","rpc"),je(h,"SID",a.K),je(h,"AID",a.T),je(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&je(h,"TO",a.ja),je(h,"TYPE","xmlhttp"),Ii(a,h),a.m&&a.o&&mc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Qo(xn(h)),f.m=null,f.P=!0,qd(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Zo(this),_c(this),Vt(19))};function ta(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function yf(a,h){var f=null;if(a.g==h){ta(a),yc(a),a.g=null;var g=2}else if(fc(a.h,h))f=h.D,Qd(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var O=a.B;g=qo(),fe(g,new Fd(g,f)),ea(a)}else gf(a);else if(O=h.s,O==3||O==0&&0<h.X||!(g==1&&AE(a,h)||g==2&&_c(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),O){case 1:$s(a,5);break;case 4:$s(a,10);break;case 3:$s(a,6);break;default:$s(a,2)}}}function vf(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function $s(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const O=!g;g=new Bs(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zo(g,"https"),Qo(g),O?yE(g.toString(),f):vE(g.toString(),f)}else Vt(2);a.G=0,a.l&&a.l.sa(h),wf(a),ff(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function wf(a){if(a.G=0,a.ka=[],a.l){const h=Jd(a.h);(h.length!=0||a.i.length!=0)&&(S(a.ka,h),S(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Ef(a,h,f){var g=f instanceof Bs?xn(f):new Bs(f);if(g.g!="")h&&(g.g=h+"."+g.g),Go(g,g.s);else{var O=l.location;g=O.protocol,h=h?h+"."+O.hostname:O.hostname,O=+O.port;var x=new Bs(null);g&&zo(x,g),h&&(x.g=h),O&&Go(x,O),f&&(x.l=f),g=x}return f=a.D,h=a.ya,f&&h&&je(g,f,h),je(g,"VER",a.la),Ii(a,g),g}function Tf(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Ze(new Jo({eb:f})):new Ze(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function If(){}t=If.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function na(){}na.prototype.g=function(a,h){return new Wt(a,h)};function Wt(a,h){ie.call(this),this.g=new df(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!M(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!M(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Tr(this)}b(Wt,ie),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){gc(this.g)},Wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=yr(a),a=f);h.i.push(new lE(h.Ya++,a)),h.G==3&&ea(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,gc(this.g),delete this.g,Wt.aa.N.call(this)};function bf(a){oc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}b(bf,oc);function Af(){ac.call(this),this.status=1}b(Af,ac);function Tr(a){this.g=a}b(Tr,If),Tr.prototype.ua=function(){fe(this.g,"a")},Tr.prototype.ta=function(a){fe(this.g,new bf(a))},Tr.prototype.sa=function(a){fe(this.g,new Af)},Tr.prototype.ra=function(){fe(this.g,"b")},na.prototype.createWebChannel=na.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,ky=function(){return new na},Py=function(){return qo()},Cy=Us,Eu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,Ca=Ho,Bd.COMPLETE="complete",Sy=Bd,Vd.EventType=di,di.OPEN="a",di.CLOSE="b",di.ERROR="c",di.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Ni=Vd,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,Ry=Ze}).apply(typeof ha<"u"?ha:typeof self<"u"?self:typeof window<"u"?window:{});const em="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ir=new gh("@firebase/firestore");function Ci(){return ir.logLevel}function oe(t,...e){if(ir.logLevel<=Ae.DEBUG){const n=e.map(kh);ir.debug(`Firestore (${ii}): ${t}`,...n)}}function Xn(t,...e){if(ir.logLevel<=Ae.ERROR){const n=e.map(kh);ir.error(`Firestore (${ii}): ${t}`,...n)}}function zr(t,...e){if(ir.logLevel<=Ae.WARN){const n=e.map(kh);ir.warn(`Firestore (${ii}): ${t}`,...n)}}function kh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t="Unexpected state"){const e=`FIRESTORE (${ii}) INTERNAL ASSERTION FAILED: `+t;throw Xn(e),new Error(e)}function Me(t,e){t||me()}function ye(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Dn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class KS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class zS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class GS{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Me(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Qn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qn,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},l=c=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Me(typeof s.accessToken=="string"),new Oy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Rt(e)}}class QS{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class JS{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new QS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class YS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Me(this.o===void 0);const s=i=>{i.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,oe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new YS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=ZS(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function De(t,e){return t<e?-1:t>e?1:0}function Gr(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ut.fromMillis(Date.now())}static fromDate(e){return ut.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new ut(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _e(e)}static min(){return new _e(new ut(0,0))}static max(){return new _e(new ut(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,s){n===void 0?n=0:n>e.length&&me(),s===void 0?s=e.length-n:s>e.length-n&&me(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return _o.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _o?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends _o{construct(e,n,s){return new He(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ne(B.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new He(n)}static emptyPath(){return new He([])}}const eC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends _o{construct(e,n,s){return new gt(e,n,s)}static isValidIdentifier(e){return eC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new ne(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const l=e[r];if(l==="\\"){if(r+1===e.length)throw new ne(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else l==="`"?(o=!o,r++):l!=="."||o?(s+=l,r++):(i(),r++)}if(i(),o)throw new ne(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(He.fromString(e))}static fromName(e){return new ue(He.fromString(e).popFirst(5))}static empty(){return new ue(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new He(e.slice()))}}function tC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=_e.fromTimestamp(s===1e9?new ut(n+1,0):new ut(n,s));return new Ss(r,ue.empty(),e)}function nC(t){return new Ss(t.readTime,t.key,-1)}class Ss{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ss(_e.min(),ue.empty(),-1)}static max(){return new Ss(_e.max(),ue.empty(),-1)}}function sC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(t.documentKey,e.documentKey),n!==0?n:De(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==rC)throw t;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,s)=>{n(e)})}static reject(e){return new q((n,s)=>{s(e)})}static waitFor(e){return new q((n,s)=>{let r=0,i=0,o=!1;e.forEach(l=>{++r,l.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=q.resolve(!1);for(const s of e)n=n.next(r=>r?q.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new q((s,r)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(d=>{o[u]=d,++l,l===i&&s(o)},d=>r(d))}})}static doWhile(e,n){return new q((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function oC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function No(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Oh.oe=-1;function Ml(t){return t==null}function sl(t){return t===0&&1/t==-1/0}function aC(t){return typeof t=="number"&&Number.isInteger(t)&&!sl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xy(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||mt.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,mt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new da(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new da(this.root,e,this.comparator,!1)}getReverseIterator(){return new da(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new da(this.root,e,this.comparator,!0)}}class da{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class mt{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??mt.RED,this.left=r??mt.EMPTY,this.right=i??mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new mt(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return mt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw me();const e=this.left.check();if(e!==this.right.check())throw me();return e+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw me()}get value(){throw me()}get color(){throw me()}get left(){throw me()}get right(){throw me()}copy(e,n,s,r,i){return this}insert(e,n,s){return new mt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nm(this.data.getIterator())}getIteratorFrom(e){return new nm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof yt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new yt(this.comparator);return n.data=e,n}}class nm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new yt(gt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ny("Invalid base64 string: "+i):i}}(e);return new wt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const lC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cs(t){if(Me(!!t),typeof t=="string"){let e=0;const n=lC.exec(t);if(Me(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function or(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xh(t){const e=t.mapValue.fields.__previous_value__;return Dh(e)?xh(e):e}function yo(t){const e=Cs(t.mapValue.fields.__local_write_time__.timestampValue);return new ut(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e,n,s,r,i,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class vo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new vo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof vo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Dh(t)?4:hC(t)?9007199254740991:uC(t)?10:11:me()}function On(t,e){if(t===e)return!0;const n=ar(t);if(n!==ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return yo(t).isEqual(yo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Cs(r.timestampValue),l=Cs(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return or(r.bytesValue).isEqual(or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return nt(r.geoPointValue.latitude)===nt(i.geoPointValue.latitude)&&nt(r.geoPointValue.longitude)===nt(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return nt(r.integerValue)===nt(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=nt(r.doubleValue),l=nt(i.doubleValue);return o===l?sl(o)===sl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Gr(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},l=i.mapValue.fields||{};if(tm(o)!==tm(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!On(o[c],l[c])))return!1;return!0}(t,e);default:return me()}}function wo(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Qr(t,e){if(t===e)return 0;const n=ar(t),s=ar(e);if(n!==s)return De(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return De(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=nt(i.integerValue||i.doubleValue),c=nt(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return sm(t.timestampValue,e.timestampValue);case 4:return sm(yo(t),yo(e));case 5:return De(t.stringValue,e.stringValue);case 6:return function(i,o){const l=or(i),c=or(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const d=De(l[u],c[u]);if(d!==0)return d}return De(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=De(nt(i.latitude),nt(o.latitude));return l!==0?l:De(nt(i.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return rm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,u,d;const p=i.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,b=(c=m.value)===null||c===void 0?void 0:c.arrayValue,P=De(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0);return P!==0?P:rm(_,b)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===fa.mapValue&&o===fa.mapValue)return 0;if(i===fa.mapValue)return 1;if(o===fa.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=o.fields||{},d=Object.keys(u);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=De(c[p],d[p]);if(m!==0)return m;const _=Qr(l[c[p]],u[d[p]]);if(_!==0)return _}return De(c.length,d.length)}(t.mapValue,e.mapValue);default:throw me()}}function sm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return De(t,e);const n=Cs(t),s=Cs(e),r=De(n.seconds,s.seconds);return r!==0?r:De(n.nanos,s.nanos)}function rm(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Qr(n[r],s[r]);if(i)return i}return De(n.length,s.length)}function Jr(t){return Tu(t)}function Tu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Cs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ue.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Tu(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Tu(n.fields[o])}`;return r+"}"}(t.mapValue):me()}function im(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Iu(t){return!!t&&"integerValue"in t}function Nh(t){return!!t&&"arrayValue"in t}function om(t){return!!t&&"nullValue"in t}function am(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pa(t){return!!t&&"mapValue"in t}function uC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function to(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=to(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=to(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=to(n)}setAll(e){let n=gt.emptyPath(),s={},r=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=l.popLast()}o?s[l.lastSegment()]=to(o):r.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Pa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){fr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new $t(to(this.value))}}function Vy(t){const e=[];return fr(t.fields,(n,s)=>{const r=new gt([n]);if(Pa(s)){const i=Vy(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n,s,r,i,o,l){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ct(e,0,_e.min(),_e.min(),_e.min(),$t.empty(),0)}static newFoundDocument(e,n,s,r){return new Ct(e,1,n,_e.min(),s,r,0)}static newNoDocument(e,n){return new Ct(e,2,n,_e.min(),_e.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new Ct(e,3,n,_e.min(),_e.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(_e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.position=e,this.inclusive=n}}function lm(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=ue.comparator(ue.fromName(o.referenceValue),n.key):s=Qr(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function cm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function dC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{}class at extends Ly{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new pC(e,n,s):n==="array-contains"?new _C(e,s):n==="in"?new yC(e,s):n==="not-in"?new vC(e,s):n==="array-contains-any"?new wC(e,s):new at(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new mC(e,s):new gC(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qr(n,this.value)):n!==null&&ar(this.value)===ar(n)&&this.matchesComparison(Qr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends Ly{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new mn(e,n)}matches(e){return My(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function My(t){return t.op==="and"}function Uy(t){return fC(t)&&My(t)}function fC(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function bu(t){if(t instanceof at)return t.field.canonicalString()+t.op.toString()+Jr(t.value);if(Uy(t))return t.filters.map(e=>bu(e)).join(",");{const e=t.filters.map(n=>bu(n)).join(",");return`${t.op}(${e})`}}function Fy(t,e){return t instanceof at?function(s,r){return r instanceof at&&s.op===r.op&&s.field.isEqual(r.field)&&On(s.value,r.value)}(t,e):t instanceof mn?function(s,r){return r instanceof mn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,l)=>i&&Fy(o,r.filters[l]),!0):!1}(t,e):void me()}function By(t){return t instanceof at?function(n){return`${n.field.canonicalString()} ${n.op} ${Jr(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(By).join(" ,")+"}"}(t):"Filter"}class pC extends at{constructor(e,n,s){super(e,n,s),this.key=ue.fromName(s.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class mC extends at{constructor(e,n){super(e,"in",n),this.keys=$y("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class gC extends at{constructor(e,n){super(e,"not-in",n),this.keys=$y("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function $y(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ue.fromName(s.referenceValue))}class _C extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Nh(n)&&wo(n.arrayValue,this.value)}}class yC extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class vC extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wo(this.value.arrayValue,n)}}class wC extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Nh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>wo(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n=null,s=[],r=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function um(t,e=null,n=[],s=[],r=null,i=null,o=null){return new EC(t,e,n,s,r,i,o)}function Vh(t){const e=ye(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>bu(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Ml(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Jr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Jr(s)).join(",")),e.ue=n}return e.ue}function Lh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!dC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Fy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cm(t.startAt,e.startAt)&&cm(t.endAt,e.endAt)}function Au(t){return ue.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n=null,s=[],r=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function TC(t,e,n,s,r,i,o,l){return new oi(t,e,n,s,r,i,o,l)}function Mh(t){return new oi(t)}function hm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jy(t){return t.collectionGroup!==null}function no(t){const e=ye(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new yt(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Eo(i,s))}),n.has(gt.keyField().canonicalString())||e.ce.push(new Eo(gt.keyField(),s))}return e.ce}function Cn(t){const e=ye(t);return e.le||(e.le=IC(e,no(t))),e.le}function IC(t,e){if(t.limitType==="F")return um(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Eo(r.field,i)});const n=t.endAt?new rl(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new rl(t.startAt.position,t.startAt.inclusive):null;return um(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Ru(t,e){const n=t.filters.concat([e]);return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Su(t,e,n){return new oi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ul(t,e){return Lh(Cn(t),Cn(e))&&t.limitType===e.limitType}function qy(t){return`${Vh(Cn(t))}|lt:${t.limitType}`}function Pr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>By(r)).join(", ")}]`),Ml(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Jr(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Jr(r)).join(",")),`Target(${s})`}(Cn(t))}; limitType=${t.limitType})`}function Fl(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):ue.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of no(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,l,c){const u=lm(o,l,c);return o.inclusive?u<=0:u<0}(s.startAt,no(s),r)||s.endAt&&!function(o,l,c){const u=lm(o,l,c);return o.inclusive?u>=0:u>0}(s.endAt,no(s),r))}(t,e)}function bC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hy(t){return(e,n)=>{let s=!1;for(const r of no(t)){const i=AC(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function AC(t,e,n){const s=t.field.isKeyField()?ue.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),u=l.data.field(i);return c!==null&&u!==null?Qr(c,u):me()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return me()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){fr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return xy(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC=new Xe(ue.comparator);function Zn(){return RC}const Wy=new Xe(ue.comparator);function Vi(...t){let e=Wy;for(const n of t)e=e.insert(n.key,n);return e}function Ky(t){let e=Wy;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function zs(){return so()}function zy(){return so()}function so(){return new ai(t=>t.toString(),(t,e)=>t.isEqual(e))}const SC=new Xe(ue.comparator),CC=new yt(ue.comparator);function be(...t){let e=CC;for(const n of t)e=e.add(n);return e}const PC=new yt(De);function kC(){return PC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sl(e)?"-0":e}}function Gy(t){return{integerValue:""+t}}function OC(t,e){return aC(e)?Gy(e):Uh(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this._=void 0}}function DC(t,e,n){return t instanceof To?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Dh(i)&&(i=xh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Yr?Jy(t,e):t instanceof Xr?Yy(t,e):function(r,i){const o=Qy(r,i),l=dm(o)+dm(r.Pe);return Iu(o)&&Iu(r.Pe)?Gy(l):Uh(r.serializer,l)}(t,e)}function xC(t,e,n){return t instanceof Yr?Jy(t,e):t instanceof Xr?Yy(t,e):n}function Qy(t,e){return t instanceof il?function(s){return Iu(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class To extends Bl{}class Yr extends Bl{constructor(e){super(),this.elements=e}}function Jy(t,e){const n=Xy(e);for(const s of t.elements)n.some(r=>On(r,s))||n.push(s);return{arrayValue:{values:n}}}class Xr extends Bl{constructor(e){super(),this.elements=e}}function Yy(t,e){let n=Xy(e);for(const s of t.elements)n=n.filter(r=>!On(r,s));return{arrayValue:{values:n}}}class il extends Bl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function dm(t){return nt(t.integerValue||t.doubleValue)}function Xy(t){return Nh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.field=e,this.transform=n}}function NC(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Yr&&r instanceof Yr||s instanceof Xr&&r instanceof Xr?Gr(s.elements,r.elements,On):s instanceof il&&r instanceof il?On(s.Pe,r.Pe):s instanceof To&&r instanceof To}(t.transform,e.transform)}class VC{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ka(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $l{}function Zy(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bh(t.key,on.none()):new Vo(t.key,t.data,on.none());{const n=t.data,s=$t.empty();let r=new yt(gt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ls(t.key,s,new Yt(r.toArray()),on.none())}}function LC(t,e,n){t instanceof Vo?function(r,i,o){const l=r.value.clone(),c=pm(r.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ls?function(r,i,o){if(!ka(r.precondition,i))return void i.convertToUnknownDocument(o.version);const l=pm(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(ev(r)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,s){return t instanceof Vo?function(i,o,l,c){if(!ka(i.precondition,o))return l;const u=i.value.clone(),d=mm(i.fieldTransforms,c,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Ls?function(i,o,l,c){if(!ka(i.precondition,o))return l;const u=mm(i.fieldTransforms,c,o),d=o.data;return d.setAll(ev(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,s):function(i,o,l){return ka(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function MC(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=Qy(s.transform,r||null);i!=null&&(n===null&&(n=$t.empty()),n.set(s.field,i))}return n||null}function fm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Gr(s,r,(i,o)=>NC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vo extends $l{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ls extends $l{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ev(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function pm(t,e,n){const s=new Map;Me(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,l=e.data.field(i.field);s.set(i.field,xC(o,l,n[r]))}return s}function mm(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,DC(i,o,e))}return s}class Bh extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UC extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&LC(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ro(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ro(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=zy();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(r.key)?null:l;const c=Zy(o,l);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(_e.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),be())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,(n,s)=>fm(n,s))&&Gr(this.baseMutations,e.baseMutations,(n,s)=>fm(n,s))}}class $h{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){Me(e.mutations.length===s.length);let r=function(){return SC}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new $h(e,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Ce;function jC(t){switch(t){default:return me();case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0}}function tv(t){if(t===void 0)return Xn("GRPC error has no .code"),B.UNKNOWN;switch(t){case ot.OK:return B.OK;case ot.CANCELLED:return B.CANCELLED;case ot.UNKNOWN:return B.UNKNOWN;case ot.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case ot.INTERNAL:return B.INTERNAL;case ot.UNAVAILABLE:return B.UNAVAILABLE;case ot.UNAUTHENTICATED:return B.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case ot.NOT_FOUND:return B.NOT_FOUND;case ot.ALREADY_EXISTS:return B.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return B.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case ot.ABORTED:return B.ABORTED;case ot.OUT_OF_RANGE:return B.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return B.UNIMPLEMENTED;case ot.DATA_LOSS:return B.DATA_LOSS;default:return me()}}(Ce=ot||(ot={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=new Js([4294967295,4294967295],0);function gm(t){const e=qC().encode(t),n=new Ay;return n.update(e),new Uint8Array(n.digest())}function _m(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Js([n,s],0),new Js([r,i],0)]}class jh{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Li(`Invalid padding: ${n}`);if(s<0)throw new Li(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Li(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Li(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Js.fromNumber(this.Ie)}Ee(e,n,s){let r=e.add(n.multiply(Js.fromNumber(s)));return r.compare(HC)===1&&(r=new Js([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=gm(e),[s,r]=_m(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new jh(i,r,n);return s.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=gm(e),[s,r]=_m(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Li extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Lo.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new jl(_e.min(),r,new Xe(De),Zn(),be())}}class Lo{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Lo(s,n,be(),be(),be())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class nv{constructor(e,n){this.targetId=e,this.me=n}}class sv{constructor(e,n,s=wt.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class ym{constructor(){this.fe=0,this.ge=wm(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=be(),n=be(),s=be();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:me()}}),new Lo(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=wm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Me(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Zn(),this.qe=vm(),this.Qe=new Xe(De)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const s=this.Ge(n);switch(e.state){case 0:this.ze(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),s.De(e.resumeToken));break;default:me()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,s=e.me.count,r=this.Je(n);if(r){const i=r.target;if(Au(i))if(s===0){const o=new ue(i.path);this.Ue(n,o,Ct.newNoDocument(o,_e.min()))}else Me(s===1);else{const o=this.Ye(n);if(o!==s){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,l;try{o=or(s).toUint8Array()}catch(c){if(c instanceof Ny)return zr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new jh(o,r,i)}catch(c){return zr(c instanceof Li?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,s){return n.me.count===s-this.nt(e,n.targetId)?0:2}nt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Au(l.target)){const c=new ue(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Ct.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let s=be();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new jl(e,n,this.Qe,this.ke,s);return this.ke=Zn(),this.qe=vm(),this.Qe=new Xe(De),r}$e(e,n){if(!this.ze(e))return;const s=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,s){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ym,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new yt(De),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ym),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function vm(){return new Xe(ue.comparator)}function wm(){return new Xe(ue.comparator)}const KC={asc:"ASCENDING",desc:"DESCENDING"},zC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},GC={and:"AND",or:"OR"};class QC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cu(t,e){return t.useProto3Json||Ml(e)?e:{value:e}}function ol(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JC(t,e){return ol(t,e.toTimestamp())}function Pn(t){return Me(!!t),_e.fromTimestamp(function(n){const s=Cs(n);return new ut(s.seconds,s.nanos)}(t))}function qh(t,e){return Pu(t,e).canonicalString()}function Pu(t,e){const n=function(r){return new He(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iv(t){const e=He.fromString(t);return Me(uv(e)),e}function ku(t,e){return qh(t.databaseId,e.path)}function jc(t,e){const n=iv(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(B.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(B.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ue(av(n))}function ov(t,e){return qh(t.databaseId,e)}function YC(t){const e=iv(t);return e.length===4?He.emptyPath():av(e)}function Ou(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function av(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Em(t,e,n){return{name:ku(t,e),fields:n.value.mapValue.fields}}function XC(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:me()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,d){return u.useProto3Json?(Me(d===void 0||typeof d=="string"),wt.fromBase64String(d||"")):(Me(d===void 0||d instanceof Buffer||d instanceof Uint8Array),wt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const d=u.code===void 0?B.UNKNOWN:tv(u.code);return new ne(d,u.message||"")}(o);n=new sv(s,r,i,l||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=jc(t,s.document.name),i=Pn(s.document.updateTime),o=s.document.createTime?Pn(s.document.createTime):_e.min(),l=new $t({mapValue:{fields:s.document.fields}}),c=Ct.newFoundDocument(r,i,o,l),u=s.targetIds||[],d=s.removedTargetIds||[];n=new Oa(u,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=jc(t,s.document),i=s.readTime?Pn(s.readTime):_e.min(),o=Ct.newNoDocument(r,i),l=s.removedTargetIds||[];n=new Oa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=jc(t,s.document),i=s.removedTargetIds||[];n=new Oa([],i,r,null)}else{if(!("filter"in e))return me();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new $C(r,i),l=s.targetId;n=new nv(l,o)}}return n}function ZC(t,e){let n;if(e instanceof Vo)n={update:Em(t,e.key,e.value)};else if(e instanceof Bh)n={delete:ku(t,e.key)};else if(e instanceof Ls)n={update:Em(t,e.key,e.data),updateMask:lP(e.fieldMask)};else{if(!(e instanceof UC))return me();n={verify:ku(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const l=o.transform;if(l instanceof To)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Yr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Xr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof il)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw me()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:JC(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me()}(t,e.precondition)),n}function eP(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Pn(r.updateTime):Pn(i);return o.isEqual(_e.min())&&(o=Pn(i)),new VC(o,r.transformResults||[])}(n,e))):[]}function tP(t,e){return{documents:[ov(t,e.path)]}}function nP(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=ov(t,r);const i=function(u){if(u.length!==0)return cv(mn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(d=>function(m){return{field:kr(m.field),direction:iP(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Cu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:r}}function sP(t){let e=YC(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){Me(s===1);const d=n.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=lv(p);return m instanceof mn&&Uy(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(b){return new Eo(Or(b.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,Ml(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,_=p.values||[];return new rl(_,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,_=p.values||[];return new rl(_,m)}(n.endAt)),TC(e,r,o,i,l,"F",c,u)}function rP(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function lv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Or(n.unaryFilter.field);return at.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Or(n.unaryFilter.field);return at.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(n.unaryFilter.field);return at.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Or(n.unaryFilter.field);return at.create(o,"!=",{nullValue:"NULL_VALUE"});default:return me()}}(t):t.fieldFilter!==void 0?function(n){return at.create(Or(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return me()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(s=>lv(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return me()}}(n.compositeFilter.op))}(t):me()}function iP(t){return KC[t]}function oP(t){return zC[t]}function aP(t){return GC[t]}function kr(t){return{fieldPath:t.canonicalString()}}function Or(t){return gt.fromServerFormat(t.fieldPath)}function cv(t){return t instanceof at?function(n){if(n.op==="=="){if(am(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NAN"}};if(om(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(am(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NAN"}};if(om(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(n.field),op:oP(n.op),value:n.value}}}(t):t instanceof mn?function(n){const s=n.getFilters().map(r=>cv(r));return s.length===1?s[0]:{compositeFilter:{op:aP(n.op),filters:s}}}(t):me()}function lP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n,s,r,i=_e.min(),o=_e.min(),l=wt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new ys(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ys(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.ct=e}}function uP(t){const e=sP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Su(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this.un=new dP}addToCollectionParentIndex(e,n){return this.un.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Ss.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Ss.min())}updateCollectionGroup(e,n,s){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class dP{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new yt(He.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new yt(He.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zr(0)}static kn(){return new Zr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(){this.changes=new ai(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ct.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?q.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&ro(s.mutation,r,Yt.empty(),ut.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,be()).next(()=>s))}getLocalViewOfDocuments(e,n,s=be()){const r=zs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Vi();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=zs();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,be()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,s,r){let i=Zn();const o=so(),l=function(){return so()}();return n.forEach((c,u)=>{const d=s.get(u.key);r.has(u.key)&&(d===void 0||d.mutation instanceof Ls)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),ro(d.mutation,u,d.mutation.getFieldMask(),ut.now())):o.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,d)=>o.set(u,d)),n.forEach((u,d)=>{var p;return l.set(u,new pP(d,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const s=so();let r=new Xe((o,l)=>o-l),i=be();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let d=s.get(c)||Yt.empty();d=l.applyToLocalView(u,d),s.set(c,d);const p=(r.get(l.batchId)||be()).add(c);r=r.insert(l.batchId,p)})}).next(()=>{const o=[],l=r.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,d=c.value,p=zy();d.forEach(m=>{if(!i.has(m)){const _=Zy(n.get(m),s.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return ue.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):q.resolve(zs());let l=-1,c=i;return o.next(u=>q.forEach(u,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?q.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,be())).next(d=>({batchId:l,changes:Ky(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next(s=>{let r=Vi();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Vi();return this.indexManager.getCollectionParents(e,i).next(l=>q.forEach(l,c=>{const u=function(p,m){return new oi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,Ct.newInvalidDocument(d)))});let l=Vi();return o.forEach((c,u)=>{const d=i.get(c);d!==void 0&&ro(d.mutation,u,Yt.empty(),ut.now()),Fl(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gP{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return q.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Pn(r.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(r){return{name:r.name,query:uP(r.bundledQuery),readTime:Pn(r.readTime)}}(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(){this.overlays=new Xe(ue.comparator),this.Ir=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const s=zs();return q.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.ht(e,n,i)}),q.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Ir.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(s)),q.resolve()}getOverlaysForCollection(e,n,s){const r=zs(),i=n.length+1,o=new ue(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return q.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new Xe((u,d)=>u-d);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let d=i.get(u.largestBatchId);d===null&&(d=zs(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const l=zs(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,d)=>l.set(u,d)),!(l.size()>=r)););return q.resolve(l)}ht(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Ir.get(r.largestBatchId).delete(s.key);this.Ir.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new BC(n,s));let i=this.Ir.get(n);i===void 0&&(i=be(),this.Ir.set(n,i)),this.Ir.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this.sessionToken=wt.EMPTY_BYTE_STRING}getSessionToken(e){return q.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,q.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(){this.Tr=new yt(dt.Er),this.dr=new yt(dt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const s=new dt(e,n);this.Tr=this.Tr.add(s),this.dr=this.dr.add(s)}Rr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.Vr(new dt(e,n))}mr(e,n){e.forEach(s=>this.removeReference(s,n))}gr(e){const n=new ue(new He([])),s=new dt(n,e),r=new dt(n,e+1),i=[];return this.dr.forEachInRange([s,r],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ue(new He([])),s=new dt(n,e),r=new dt(n,e+1);let i=be();return this.dr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new dt(e,0),s=this.Tr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class dt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ue.comparator(e.key,n.key)||De(e.wr,n.wr)}static Ar(e,n){return De(e.wr,n.wr)||ue.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new yt(dt.Er)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new FC(i,n,s,r);this.mutationQueue.push(o);for(const l of r)this.br=this.br.add(new dt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.vr(s),i=r<0?0:r;return q.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new dt(n,0),r=new dt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([s,r],o=>{const l=this.Dr(o.wr);i.push(l)}),q.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new yt(De);return n.forEach(r=>{const i=new dt(r,0),o=new dt(r,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{s=s.add(l.wr)})}),q.resolve(this.Cr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;ue.isDocumentKey(i)||(i=i.child(""));const o=new dt(new ue(i),0);let l=new yt(De);return this.br.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(l=l.add(c.wr)),!0)},o),q.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(s=>{const r=this.Dr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){Me(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.br;return q.forEach(n.mutations,r=>{const i=new dt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.br=s})}On(e){}containsKey(e,n){const s=new dt(n,0),r=this.br.firstAfterOrEqual(s);return q.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.Mr=e,this.docs=function(){return new Xe(ue.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Mr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return q.resolve(s?s.document.mutableCopy():Ct.newInvalidDocument(n))}getEntries(e,n){let s=Zn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Ct.newInvalidDocument(r))}),q.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=Zn();const o=n.path,l=new ue(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:d}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||sC(nC(d),s)<=0||(r.has(d.key)||Fl(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return q.resolve(i)}getAllFromCollectionGroup(e,n,s,r){me()}Or(e,n){return q.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new EP(this)}getSize(e){return q.resolve(this.size)}}class EP extends fP{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.cr.addEntry(e,r)):this.cr.removeEntry(s)}),q.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TP{constructor(e){this.persistence=e,this.Nr=new ai(n=>Vh(n),Lh),this.lastRemoteSnapshotVersion=_e.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Hh,this.targetCount=0,this.kr=Zr.Bn()}forEachTarget(e,n){return this.Nr.forEach((s,r)=>n(r)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Lr&&(this.Lr=n),q.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Zr(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.Kn(n),q.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&s.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),r++)}),q.waitFor(i).next(()=>r)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const s=this.Nr.get(n)||null;return q.resolve(s)}addMatchingKeys(e,n,s){return this.Br.Rr(n,s),q.resolve()}removeMatchingKeys(e,n,s){this.Br.mr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),q.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Br.yr(n);return q.resolve(s)}containsKey(e,n){return q.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IP{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Oh(0),this.Kr=!1,this.Kr=!0,this.$r=new yP,this.referenceDelegate=e(this),this.Ur=new TP(this),this.indexManager=new hP,this.remoteDocumentCache=function(r){return new wP(r)}(s=>this.referenceDelegate.Wr(s)),this.serializer=new cP(n),this.Gr=new gP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _P,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.qr[e.toKey()];return s||(s=new vP(n,this.referenceDelegate),this.qr[e.toKey()]=s),s}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,s){oe("MemoryPersistence","Starting transaction:",e);const r=new bP(this.Qr.next());return this.referenceDelegate.zr(),s(r).next(i=>this.referenceDelegate.jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Hr(e,n){return q.or(Object.values(this.qr).map(s=>()=>s.containsKey(e,n)))}}class bP extends iC{constructor(e){super(),this.currentSequenceNumber=e}}class Wh{constructor(e){this.persistence=e,this.Jr=new Hh,this.Yr=null}static Zr(e){return new Wh(e)}get Xr(){if(this.Yr)return this.Yr;throw me()}addReference(e,n,s){return this.Jr.addReference(s,n),this.Xr.delete(s.toString()),q.resolve()}removeReference(e,n,s){return this.Jr.removeReference(s,n),this.Xr.add(s.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),q.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(r=>this.Xr.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.Xr.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Xr,s=>{const r=ue.fromPath(s);return this.ei(e,r).next(i=>{i||n.removeEntry(r,_e.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(s=>{s?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return q.or([()=>q.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.$i=s,this.Ui=r}static Wi(e,n){let s=be(),r=be();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Kh(e,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return d0()?8:oC(Dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AP;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,s,r){return s.documentReadCount<this.ji?(Ci()<=Ae.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",Pr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),q.resolve()):(Ci()<=Ae.DEBUG&&oe("QueryEngine","Query:",Pr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Hi*r?(Ci()<=Ae.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",Pr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(n))):q.resolve())}Yi(e,n){if(hm(n))return q.resolve(null);let s=Cn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Su(n,null,"F"),s=Cn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=be(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.ts(n,l);return this.ns(n,u,o,c.readTime)?this.Yi(e,Su(n,null,"F")):this.rs(e,u,n,c)}))})))}Zi(e,n,s,r){return hm(n)||r.isEqual(_e.min())?q.resolve(null):this.Ji.getDocuments(e,s).next(i=>{const o=this.ts(n,i);return this.ns(n,o,s,r)?q.resolve(null):(Ci()<=Ae.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Pr(n)),this.rs(e,o,n,tC(r,-1)).next(l=>l))})}ts(e,n){let s=new yt(Hy(e));return n.forEach((r,i)=>{Fl(e,i)&&(s=s.add(i))}),s}ns(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Xi(e,n,s){return Ci()<=Ae.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",Pr(n)),this.Ji.getDocumentsMatchingQuery(e,n,Ss.min(),s)}rs(e,n,s,r){return this.Ji.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e,n,s,r){this.persistence=e,this.ss=n,this.serializer=r,this.os=new Xe(De),this._s=new ai(i=>Vh(i),Lh),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(s)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mP(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function CP(t,e,n,s){return new SP(t,e,n,s)}async function hv(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.ls(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],l=[];let c=be();for(const u of r){o.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}for(const u of i){l.push(u.batchId);for(const d of u.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(s,c).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:l}))})})}function PP(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,d){const p=u.batch,m=p.keys();let _=q.resolve();return m.forEach(b=>{_=_.next(()=>d.getEntry(c,b)).next(P=>{const S=u.docVersions.get(b);Me(S!==null),P.version.compareTo(S)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),d.addEntry(P)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(l){let c=be();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function dv(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function kP(t,e){const n=ye(t),s=e.snapshotVersion;let r=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});r=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const m=r.get(p);if(!m)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(wt.EMPTY_BYTE_STRING,_e.min()).withLastLimboFreeSnapshotVersion(_e.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,s)),r=r.insert(p,_),function(P,S,U){return P.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(m,_,d)&&l.push(n.Ur.updateTargetData(i,_))});let c=Zn(),u=be();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(OP(i,o,e.documentUpdates).next(d=>{c=d.Ps,u=d.Is})),!s.isEqual(_e.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,s));l.push(d)}return q.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.os=r,i))}function OP(t,e,n){let s=be(),r=be();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=Zn();return n.forEach((l,c)=>{const u=i.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(l)),c.isNoDocument()&&c.version.isEqual(_e.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):oe("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{Ps:o,Is:r}})}function DP(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function xP(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Ur.getTargetData(s,e).next(i=>i?(r=i,q.resolve(r)):n.Ur.allocateTargetId(s).next(o=>(r=new ys(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Ur.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.os.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.os=n.os.insert(s.targetId,s),n._s.set(e,s.targetId)),s})}async function Du(t,e,n){const s=ye(t),r=s.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!No(o))throw o;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.os=s.os.remove(e),s._s.delete(r.target)}function Tm(t,e,n){const s=ye(t);let r=_e.min(),i=be();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,d){const p=ye(c),m=p._s.get(d);return m!==void 0?q.resolve(p.os.get(m)):p.Ur.getTargetData(u,d)}(s,o,Cn(e)).next(l=>{if(l)return r=l.lastLimboFreeSnapshotVersion,s.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>s.ss.getDocumentsMatchingQuery(o,e,n?r:_e.min(),n?i:be())).next(l=>(NP(s,bC(e),l),{documents:l,Ts:i})))}function NP(t,e,n){let s=t.us.get(e)||_e.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.us.set(e,s)}class Im{constructor(){this.activeTargetIds=kC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VP{constructor(){this.so=new Im,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,s){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Im,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa=null;function qc(){return pa===null?pa=function(){return 268435456+Math.round(2147483648*Math.random())}():pa++,"0x"+pa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="WebChannelConnection";class FP extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=s+"://"+n.host,this.vo=`projects/${r}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}get Fo(){return!1}Mo(n,s,r,i,o){const l=qc(),c=this.xo(n,s.toUriEncodedString());oe("RestConnection",`Sending RPC '${n}' ${l}:`,c,r);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,c,u,r).then(d=>(oe("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw zr("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",r),d})}Lo(n,s,r,i,o,l){return this.Mo(n,s,r,i,o)}Oo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ii}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}xo(n,s){const r=MP[n];return`${this.Do}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,s,r){const i=qc();return new Promise((o,l)=>{const c=new Ry;c.setWithCredentials(!0),c.listenOnce(Sy.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ca.NO_ERROR:const d=c.getResponseJson();oe(At,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case Ca.TIMEOUT:oe(At,`RPC '${e}' ${i} timed out`),l(new ne(B.DEADLINE_EXCEEDED,"Request time out"));break;case Ca.HTTP_ERROR:const p=c.getStatus();if(oe(At,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const b=function(S){const U=S.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(U)>=0?U:B.UNKNOWN}(_.status);l(new ne(b,_.message))}else l(new ne(B.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(B.UNAVAILABLE,"Connection failed."));break;default:me()}}finally{oe(At,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);oe(At,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}Bo(e,n,s){const r=qc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ky(),l=Py(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const d=i.join("");oe(At,`Creating RPC '${e}' stream ${r}: ${d}`,c);const p=o.createWebChannel(d,c);let m=!1,_=!1;const b=new UP({Io:S=>{_?oe(At,`Not sending because RPC '${e}' stream ${r} is closed:`,S):(m||(oe(At,`Opening RPC '${e}' stream ${r} transport.`),p.open(),m=!0),oe(At,`RPC '${e}' stream ${r} sending:`,S),p.send(S))},To:()=>p.close()}),P=(S,U,M)=>{S.listen(U,F=>{try{M(F)}catch($){setTimeout(()=>{throw $},0)}})};return P(p,Ni.EventType.OPEN,()=>{_||(oe(At,`RPC '${e}' stream ${r} transport opened.`),b.yo())}),P(p,Ni.EventType.CLOSE,()=>{_||(_=!0,oe(At,`RPC '${e}' stream ${r} transport closed`),b.So())}),P(p,Ni.EventType.ERROR,S=>{_||(_=!0,zr(At,`RPC '${e}' stream ${r} transport errored:`,S),b.So(new ne(B.UNAVAILABLE,"The operation could not be completed")))}),P(p,Ni.EventType.MESSAGE,S=>{var U;if(!_){const M=S.data[0];Me(!!M);const F=M,$=F.error||((U=F[0])===null||U===void 0?void 0:U.error);if($){oe(At,`RPC '${e}' stream ${r} received error:`,$);const ae=$.status;let de=function(T){const R=ot[T];if(R!==void 0)return tv(R)}(ae),A=$.message;de===void 0&&(de=B.INTERNAL,A="Unknown error status: "+ae+" with message "+$.message),_=!0,b.So(new ne(de,A)),p.close()}else oe(At,`RPC '${e}' stream ${r} received:`,M),b.bo(M)}}),P(l,Cy.STAT_EVENT,S=>{S.stat===Eu.PROXY?oe(At,`RPC '${e}' stream ${r} detected buffering proxy`):S.stat===Eu.NOPROXY&&oe(At,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{b.wo()},0),b}}function Hc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return new QC(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,n,s=1e3,r=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=s,this.qo=r,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),s=Math.max(0,Date.now()-this.Uo),r=Math.max(0,n-s);r>0&&oe("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,r,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,n,s,r,i,o,l,c){this.ui=e,this.Ho=s,this.Jo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new fv(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Xn(n.toString()),Xn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Yo===n&&this.P_(s,r)},s=>{e(()=>{const r=new ne(B.UNKNOWN,"Fetching auth token failed: "+s.message);return this.I_(r)})})}P_(e,n){const s=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{s(()=>this.listener.Eo())}),this.stream.Ro(()=>{s(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(r=>{s(()=>this.I_(r))}),this.stream.onMessage(r=>{s(()=>++this.e_==1?this.E_(r):this.onNext(r))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class BP extends pv{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=XC(this.serializer,e),s=function(i){if(!("targetChange"in i))return _e.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?_e.min():o.readTime?Pn(o.readTime):_e.min()}(e);return this.listener.d_(n,s)}A_(e){const n={};n.database=Ou(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=Au(c)?{documents:tP(i,c)}:{query:nP(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=rv(i,o.resumeToken);const u=Cu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(_e.min())>0){l.readTime=ol(i,o.snapshotVersion.toTimestamp());const u=Cu(i,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const s=rP(this.serializer,e);s&&(n.labels=s),this.a_(n)}R_(e){const n={};n.database=Ou(this.serializer),n.removeTarget=e,this.a_(n)}}class $P extends pv{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Me(!!e.streamToken),this.lastStreamToken=e.streamToken,Me(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=eP(e.writeResults,e.commitTime),s=Pn(e.commitTime);return this.listener.g_(s,n)}p_(){const e={};e.database=Ou(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>ZC(this.serializer,s))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.y_=!1}w_(){if(this.y_)throw new ne(B.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,s,r){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Pu(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(B.UNKNOWN,i.toString())})}Lo(e,n,s,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Pu(n,s),r,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(B.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Xn(n),this.D_=!1):oe("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{s.enqueueAndForget(async()=>{pr(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=ye(c);u.L_.add(4),await Mo(u),u.q_.set("Unknown"),u.L_.delete(4),await Hl(u)}(this))})}),this.q_=new qP(s,r)}}async function Hl(t){if(pr(t))for(const e of t.B_)await e(!0)}async function Mo(t){for(const e of t.B_)await e(!1)}function mv(t,e){const n=ye(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Jh(n)?Qh(n):li(n).r_()&&Gh(n,e))}function zh(t,e){const n=ye(t),s=li(n);n.N_.delete(e),s.r_()&&gv(n,e),n.N_.size===0&&(s.r_()?s.o_():pr(n)&&n.q_.set("Unknown"))}function Gh(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(_e.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}li(t).A_(e)}function gv(t,e){t.Q_.xe(e),li(t).R_(e)}function Qh(t){t.Q_=new WC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),li(t).start(),t.q_.v_()}function Jh(t){return pr(t)&&!li(t).n_()&&t.N_.size>0}function pr(t){return ye(t).L_.size===0}function _v(t){t.Q_=void 0}async function WP(t){t.q_.set("Online")}async function KP(t){t.N_.forEach((e,n)=>{Gh(t,e)})}async function zP(t,e){_v(t),Jh(t)?(t.q_.M_(e),Qh(t)):t.q_.set("Unknown")}async function GP(t,e,n){if(t.q_.set("Online"),e instanceof sv&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const l of i.targetIds)r.N_.has(l)&&(await r.remoteSyncer.rejectListen(l,o),r.N_.delete(l),r.Q_.removeTarget(l))}(t,e)}catch(s){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await al(t,s)}else if(e instanceof Oa?t.Q_.Ke(e):e instanceof nv?t.Q_.He(e):t.Q_.We(e),!n.isEqual(_e.min()))try{const s=await dv(t.localStore);n.compareTo(s)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(u);d&&i.N_.set(u,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(wt.EMPTY_BYTE_STRING,d.snapshotVersion)),gv(i,c);const p=new ys(d.target,c,u,d.sequenceNumber);Gh(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(s){oe("RemoteStore","Failed to raise snapshot:",s),await al(t,s)}}async function al(t,e,n){if(!No(e))throw e;t.L_.add(1),await Mo(t),t.q_.set("Offline"),n||(n=()=>dv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Hl(t)})}function yv(t,e){return e().catch(n=>al(t,n,e))}async function Wl(t){const e=ye(t),n=Ps(e);let s=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;QP(e);)try{const r=await DP(e.localStore,s);if(r===null){e.O_.length===0&&n.o_();break}s=r.batchId,JP(e,r)}catch(r){await al(e,r)}vv(e)&&wv(e)}function QP(t){return pr(t)&&t.O_.length<10}function JP(t,e){t.O_.push(e);const n=Ps(t);n.r_()&&n.V_&&n.m_(e.mutations)}function vv(t){return pr(t)&&!Ps(t).n_()&&t.O_.length>0}function wv(t){Ps(t).start()}async function YP(t){Ps(t).p_()}async function XP(t){const e=Ps(t);for(const n of t.O_)e.m_(n.mutations)}async function ZP(t,e,n){const s=t.O_.shift(),r=$h.from(s,e,n);await yv(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Wl(t)}async function e1(t,e){e&&Ps(t).V_&&await async function(s,r){if(function(o){return jC(o)&&o!==B.ABORTED}(r.code)){const i=s.O_.shift();Ps(s).s_(),await yv(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Wl(s)}}(t,e),vv(t)&&wv(t)}async function Am(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const s=pr(n);n.L_.add(3),await Mo(n),s&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Hl(n)}async function t1(t,e){const n=ye(t);e?(n.L_.delete(2),await Hl(n)):e||(n.L_.add(2),await Mo(n),n.q_.set("Unknown"))}function li(t){return t.K_||(t.K_=function(n,s,r){const i=ye(n);return i.w_(),new BP(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:WP.bind(null,t),Ro:KP.bind(null,t),mo:zP.bind(null,t),d_:GP.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Jh(t)?Qh(t):t.q_.set("Unknown")):(await t.K_.stop(),_v(t))})),t.K_}function Ps(t){return t.U_||(t.U_=function(n,s,r){const i=ye(n);return i.w_(),new $P(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:YP.bind(null,t),mo:e1.bind(null,t),f_:XP.bind(null,t),g_:ZP.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Wl(t)):(await t.U_.stop(),t.O_.length>0&&(oe("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Qn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,l=new Yh(e,n,o,r,i);return l.start(s),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xh(t,e){if(Xn("AsyncQueue",`${e}: ${t}`),No(t))return new ne(B.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||ue.comparator(n.key,s.key):(n,s)=>ue.comparator(n.key,s.key),this.keyedMap=Vi(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new jr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.W_=new Xe(ue.comparator)}track(e){const n=e.doc.key,s=this.W_.get(n);s?e.type!==0&&s.type===3?this.W_=this.W_.insert(n,e):e.type===3&&s.type!==1?this.W_=this.W_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.W_=this.W_.remove(n):e.type===1&&s.type===2?this.W_=this.W_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):me():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,s)=>{e.push(s)}),e}}class ei{constructor(e,n,s,r,i,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ei(e,n,jr.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class s1{constructor(){this.queries=Sm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,s){const r=ye(n),i=r.queries;r.queries=Sm(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(s)})})(this,new ne(B.ABORTED,"Firestore shutting down"))}}function Sm(){return new ai(t=>qy(t),Ul)}async function Ev(t,e){const n=ye(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.H_()&&e.J_()&&(s=2):(i=new n1,s=e.J_()?0:1);try{switch(s){case 0:i.z_=await n.onListen(r,!0);break;case 1:i.z_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const l=Xh(o,`Initialization of query '${Pr(e.query)}' failed`);return void e.onError(l)}n.queries.set(r,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Zh(n)}async function Tv(t,e){const n=ye(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?r=e.J_()?0:1:!i.H_()&&e.J_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function r1(t,e){const n=ye(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(r)&&(s=!0);o.z_=r}}s&&Zh(n)}function i1(t,e,n){const s=ye(t),r=s.queries.get(e);if(r)for(const i of r.j_)i.onError(n);s.queries.delete(e)}function Zh(t){t.Y_.forEach(e=>{e.next()})}var xu,Cm;(Cm=xu||(xu={})).ea="default",Cm.Cache="cache";class Iv{constructor(e,n,s){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=s||{}}X_(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new ei(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const s=n!=="Offline";return(!this.options._a||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(e){this.key=e}}class Av{constructor(e){this.key=e}}class o1{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=be(),this.mutatedKeys=be(),this.Aa=Hy(e),this.Ra=new jr(this.Aa)}get Va(){return this.Ta}ma(e,n){const s=n?n.fa:new Rm,r=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,l=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,p)=>{const m=r.get(d),_=Fl(this.query,p)?p:null,b=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let S=!1;m&&_?m.data.isEqual(_.data)?b!==P&&(s.track({type:3,doc:_}),S=!0):this.ga(m,_)||(s.track({type:2,doc:_}),S=!0,(c&&this.Aa(_,c)>0||u&&this.Aa(_,u)<0)&&(l=!0)):!m&&_?(s.track({type:0,doc:_}),S=!0):m&&!_&&(s.track({type:1,doc:m}),S=!0,(c||u)&&(l=!0)),S&&(_?(o=o.add(_),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{Ra:o,fa:s,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(_,b){const P=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me()}};return P(_)-P(b)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(s),r=r!=null&&r;const l=n&&!r?this.ya():[],c=this.da.size===0&&this.current&&!r?1:0,u=c!==this.Ea;return this.Ea=c,o.length!==0||u?{snapshot:new ei(this.query,e.Ra,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Rm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=be(),this.Ra.forEach(s=>{this.Sa(s.key)&&(this.da=this.da.add(s.key))});const n=[];return e.forEach(s=>{this.da.has(s)||n.push(new Av(s))}),this.da.forEach(s=>{e.has(s)||n.push(new bv(s))}),n}ba(e){this.Ta=e.Ts,this.da=be();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ei.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class a1{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class l1{constructor(e){this.key=e,this.va=!1}}class c1{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new ai(l=>qy(l),Ul),this.Ma=new Map,this.xa=new Set,this.Oa=new Xe(ue.comparator),this.Na=new Map,this.La=new Hh,this.Ba={},this.ka=new Map,this.qa=Zr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function u1(t,e,n=!0){const s=Ov(t);let r;const i=s.Fa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Da()):r=await Rv(s,e,n,!0),r}async function h1(t,e){const n=Ov(t);await Rv(n,e,!0,!1)}async function Rv(t,e,n,s){const r=await xP(t.localStore,Cn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return s&&(l=await d1(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&mv(t.remoteStore,r),l}async function d1(t,e,n,s,r){t.Ka=(p,m,_)=>async function(P,S,U,M){let F=S.view.ma(U);F.ns&&(F=await Tm(P.localStore,S.query,!1).then(({documents:A})=>S.view.ma(A,F)));const $=M&&M.targetChanges.get(S.targetId),ae=M&&M.targetMismatches.get(S.targetId)!=null,de=S.view.applyChanges(F,P.isPrimaryClient,$,ae);return km(P,S.targetId,de.wa),de.snapshot}(t,p,m,_);const i=await Tm(t.localStore,e,!0),o=new o1(e,i.Ts),l=o.ma(i.documents),c=Lo.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(l,t.isPrimaryClient,c);km(t,n,u.wa);const d=new a1(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function f1(t,e,n){const s=ye(t),r=s.Fa.get(e),i=s.Ma.get(r.targetId);if(i.length>1)return s.Ma.set(r.targetId,i.filter(o=>!Ul(o,e))),void s.Fa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Du(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&zh(s.remoteStore,r.targetId),Nu(s,r.targetId)}).catch(xo)):(Nu(s,r.targetId),await Du(s.localStore,r.targetId,!0))}async function p1(t,e){const n=ye(t),s=n.Fa.get(e),r=n.Ma.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),zh(n.remoteStore,s.targetId))}async function m1(t,e,n){const s=T1(t);try{const r=await function(o,l){const c=ye(o),u=ut.now(),d=l.reduce((_,b)=>_.add(b.key),be());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let b=Zn(),P=be();return c.cs.getEntries(_,d).next(S=>{b=S,b.forEach((U,M)=>{M.isValidDocument()||(P=P.add(U))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,b)).next(S=>{p=S;const U=[];for(const M of l){const F=MC(M,p.get(M.key).overlayedDocument);F!=null&&U.push(new Ls(M.key,F,Vy(F.value.mapValue),on.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,U,l)}).next(S=>{m=S;const U=S.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(_,S.batchId,U)})}).then(()=>({batchId:m.batchId,changes:Ky(p)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,l,c){let u=o.Ba[o.currentUser.toKey()];u||(u=new Xe(De)),u=u.insert(l,c),o.Ba[o.currentUser.toKey()]=u}(s,r.batchId,n),await Uo(s,r.changes),await Wl(s.remoteStore)}catch(r){const i=Xh(r,"Failed to persist write");n.reject(i)}}async function Sv(t,e){const n=ye(t);try{const s=await kP(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Na.get(i);o&&(Me(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.va=!0:r.modifiedDocuments.size>0?Me(o.va):r.removedDocuments.size>0&&(Me(o.va),o.va=!1))}),await Uo(n,s,e)}catch(s){await xo(s)}}function Pm(t,e,n){const s=ye(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&r.push(l.snapshot)}),function(o,l){const c=ye(o);c.onlineState=l;let u=!1;c.queries.forEach((d,p)=>{for(const m of p.j_)m.Z_(l)&&(u=!0)}),u&&Zh(c)}(s.eventManager,e),r.length&&s.Ca.d_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function g1(t,e,n){const s=ye(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Na.get(e),i=r&&r.key;if(i){let o=new Xe(ue.comparator);o=o.insert(i,Ct.newNoDocument(i,_e.min()));const l=be().add(i),c=new jl(_e.min(),new Map,new Xe(De),o,l);await Sv(s,c),s.Oa=s.Oa.remove(i),s.Na.delete(e),ed(s)}else await Du(s.localStore,e,!1).then(()=>Nu(s,e,n)).catch(xo)}async function _1(t,e){const n=ye(t),s=e.batch.batchId;try{const r=await PP(n.localStore,e);Pv(n,s,null),Cv(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Uo(n,r)}catch(r){await xo(r)}}async function y1(t,e,n){const s=ye(t);try{const r=await function(o,l){const c=ye(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let d;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Me(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d)).next(()=>c.localDocuments.getDocuments(u,d))})}(s.localStore,e);Pv(s,e,n),Cv(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Uo(s,r)}catch(r){await xo(r)}}function Cv(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Pv(t,e,n){const s=ye(t);let r=s.Ba[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Ba[s.currentUser.toKey()]=r}}function Nu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Ma.get(e))t.Fa.delete(s),n&&t.Ca.$a(s,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(s=>{t.La.containsKey(s)||kv(t,s)})}function kv(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(zh(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ed(t))}function km(t,e,n){for(const s of n)s instanceof bv?(t.La.addReference(s.key,e),v1(t,s)):s instanceof Av?(oe("SyncEngine","Document no longer in limbo: "+s.key),t.La.removeReference(s.key,e),t.La.containsKey(s.key)||kv(t,s.key)):me()}function v1(t,e){const n=e.key,s=n.path.canonicalString();t.Oa.get(n)||t.xa.has(s)||(oe("SyncEngine","New document in limbo: "+n),t.xa.add(s),ed(t))}function ed(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ue(He.fromString(e)),s=t.qa.next();t.Na.set(s,new l1(n)),t.Oa=t.Oa.insert(n,s),mv(t.remoteStore,new ys(Cn(Mh(n.path)),s,"TargetPurposeLimboResolution",Oh.oe))}}async function Uo(t,e,n){const s=ye(t),r=[],i=[],o=[];s.Fa.isEmpty()||(s.Fa.forEach((l,c)=>{o.push(s.Ka(c,e,n).then(u=>{var d;if((u||n)&&s.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;s.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){r.push(u);const p=Kh.Wi(c.targetId,u);i.push(p)}}))}),await Promise.all(o),s.Ca.d_(r),await async function(c,u){const d=ye(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,m=>q.forEach(m.$i,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>q.forEach(m.Ui,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!No(p))throw p;oe("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.os.get(m),b=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(b);d.os=d.os.insert(m,P)}}}(s.localStore,i))}async function w1(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const s=await hv(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ne(B.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Uo(n,s.hs)}}function E1(t,e){const n=ye(t),s=n.Na.get(e);if(s&&s.va)return be().add(s.key);{let r=be();const i=n.Ma.get(e);if(!i)return r;for(const o of i){const l=n.Fa.get(o);r=r.unionWith(l.view.Va)}return r}}function Ov(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=E1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=g1.bind(null,e),e.Ca.d_=r1.bind(null,e.eventManager),e.Ca.$a=i1.bind(null,e.eventManager),e}function T1(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=y1.bind(null,e),e}class ll{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ql(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return CP(this.persistence,new RP,e.initialUser,this.serializer)}Ga(e){return new IP(Wh.Zr,this.serializer)}Wa(e){return new VP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ll.provider={build:()=>new ll};class Vu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Pm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=w1.bind(null,this.syncEngine),await t1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new s1}()}createDatastore(e){const n=ql(e.databaseInfo.databaseId),s=function(i){return new FP(i)}(e.databaseInfo);return function(i,o,l,c){return new jP(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,l){return new HP(s,r,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Pm(this.syncEngine,n,0),function(){return bm.D()?new bm:new LP}())}createSyncEngine(e,n){return function(r,i,o,l,c,u,d){const p=new c1(r,i,o,l,c,u);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=ye(r);oe("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Mo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vu.provider={build:()=>new Vu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Xn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Rt.UNAUTHENTICATED,this.clientId=Dy.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{oe("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(oe("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Xh(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Wc(t,e){t.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await hv(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Om(t,e){t.asyncQueue.verifyOperationInProgress();const n=await b1(t);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Am(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Am(e.remoteStore,r)),t._onlineComponents=e}async function b1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===B.FAILED_PRECONDITION||r.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;zr("Error using user provided cache. Falling back to memory cache: "+n),await Wc(t,new ll)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await Wc(t,new ll);return t._offlineComponents}async function xv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await Om(t,t._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await Om(t,new Vu))),t._onlineComponents}function A1(t){return xv(t).then(e=>e.syncEngine)}async function Nv(t){const e=await xv(t),n=e.eventManager;return n.onListen=u1.bind(null,e.syncEngine),n.onUnlisten=f1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=h1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=p1.bind(null,e.syncEngine),n}function R1(t,e,n={}){const s=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Dv({next:m=>{d.Za(),o.enqueueAndForget(()=>Tv(i,p));const _=m.docs.has(l);!_&&m.fromCache?u.reject(new ne(B.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&c&&c.source==="server"?u.reject(new ne(B.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Iv(Mh(l.path),d,{includeMetadataChanges:!0,_a:!0});return Ev(i,p)}(await Nv(t),t.asyncQueue,e,n,s)),s.promise}function S1(t,e,n={}){const s=new Qn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,u){const d=new Dv({next:m=>{d.Za(),o.enqueueAndForget(()=>Tv(i,p)),m.fromCache&&c.source==="server"?u.reject(new ne(B.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Iv(l,d,{includeMetadataChanges:!0,_a:!0});return Ev(i,p)}(await Nv(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(t,e,n){if(!n)throw new ne(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function C1(t,e,n,s){if(e===!0&&s===!0)throw new ne(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xm(t){if(!ue.isDocumentKey(t))throw new ne(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Nm(t){if(ue.isDocumentKey(t))throw new ne(B.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kl(t);throw new ne(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}C1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class zl{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new KS;switch(s.type){case"firstParty":return new JS(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ne(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Dm.get(n);s&&(oe("ComponentProvider","Removing Datastore"),Dm.delete(n),s.terminate())}(this),Promise.resolve()}}function P1(t,e,n,s={}){var r;const i=(t=gn(t,zl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let l,c;if(typeof s.mockUserToken=="string")l=s.mockUserToken,c=Rt.MOCK_USER;else{l=S_(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new ne(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Rt(u)}t._authCredentials=new zS(new Oy(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new mr(this.firestore,e,this._query)}}class Ft{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class Ts extends mr{constructor(e,n,s){super(e,n,Mh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new ue(e))}withConverter(e){return new Ts(this.firestore,e,this._path)}}function Gl(t,e,...n){if(t=Ye(t),Lv("collection","path",e),t instanceof zl){const s=He.fromString(e,...n);return Nm(s),new Ts(t,null,s)}{if(!(t instanceof Ft||t instanceof Ts))throw new ne(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(He.fromString(e,...n));return Nm(s),new Ts(t.firestore,null,s)}}function _t(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=Dy.newId()),Lv("doc","path",e),t instanceof zl){const s=He.fromString(e,...n);return xm(s),new Ft(t,null,new ue(s))}{if(!(t instanceof Ft||t instanceof Ts))throw new ne(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(He.fromString(e,...n));return xm(s),new Ft(t.firestore,t instanceof Ts?t.converter:null,new ue(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new fv(this,"async_queue_retry"),this.Vu=()=>{const s=Hc();s&&oe("AsyncQueue","Visibility state changed to "+s.visibilityState),this.t_.jo()},this.mu=e;const n=Hc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Hc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Qn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!No(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(s=>{this.Eu=s,this.du=!1;const r=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(s);throw Xn("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.du=!1,s))));return this.mu=n,n}enqueueAfterDelay(e,n,s){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const r=Yh.createAndSchedule(this,e,n,s,i=>this.yu(i));return this.Tu.push(r),r}fu(){this.Eu&&me()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class gr extends zl{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Lm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lm(e),this._firestoreClient=void 0,await e}}}function k1(t,e){const n=typeof t=="object"?t:yh(),s=typeof t=="string"?t:"(default)",r=Ol(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=b_("firestore");i&&P1(r,...i)}return r}function td(t){if(t._terminated)throw new ne(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||O1(t),t._firestoreClient}function O1(t){var e,n,s;const r=t._freezeSettings(),i=function(l,c,u,d){return new cC(l,c,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Vv(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new I1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ti(wt.fromBase64String(e))}catch(n){throw new ne(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ti(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=/^__.*__$/;class x1{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Ls(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vo(e,this.data,n,this.fieldTransforms)}}class Mv{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Ls(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Uv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me()}}class Jl{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.Ou(e),r}Nu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Fu({path:s,xu:!1});return r.vu(),r}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return cl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Uv(this.Cu)&&D1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class N1{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ql(e)}Qu(e,n,s,r=!1){return new Jl({Cu:e,methodName:n,qu:s,path:gt.emptyPath(),xu:!1,ku:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Yl(t){const e=t._freezeSettings(),n=ql(t._databaseId);return new N1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fv(t,e,n,s,r,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,r);ad("Data must be an object, but it was:",o,s);const l=$v(s,o);let c,u;if(i.merge)c=new Yt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=Lu(e,p,n);if(!o.contains(m))throw new ne(B.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);qv(d,m)||d.push(m)}c=new Yt(d),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new x1(new $t(l),c,u)}class Xl extends ci{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xl}}function Bv(t,e,n){return new Jl({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class rd extends ci{_toFieldTransform(e){return new Fh(e.path,new To)}isEqual(e){return e instanceof rd}}class id extends ci{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=Bv(this,e,!0),s=this.Ku.map(i=>_r(i,n)),r=new Yr(s);return new Fh(e.path,r)}isEqual(e){return e instanceof id&&Hr(this.Ku,e.Ku)}}class od extends ci{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=Bv(this,e,!0),s=this.Ku.map(i=>_r(i,n)),r=new Xr(s);return new Fh(e.path,r)}isEqual(e){return e instanceof od&&Hr(this.Ku,e.Ku)}}function V1(t,e,n,s){const r=t.Qu(1,e,n);ad("Data must be an object, but it was:",r,s);const i=[],o=$t.empty();fr(s,(c,u)=>{const d=ld(e,c,n);u=Ye(u);const p=r.Nu(d);if(u instanceof Xl)i.push(d);else{const m=_r(u,p);m!=null&&(i.push(d),o.set(d,m))}});const l=new Yt(i);return new Mv(o,l,r.fieldTransforms)}function L1(t,e,n,s,r,i){const o=t.Qu(1,e,n),l=[Lu(e,s,n)],c=[r];if(i.length%2!=0)throw new ne(B.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(Lu(e,i[m])),c.push(i[m+1]);const u=[],d=$t.empty();for(let m=l.length-1;m>=0;--m)if(!qv(u,l[m])){const _=l[m];let b=c[m];b=Ye(b);const P=o.Nu(_);if(b instanceof Xl)u.push(_);else{const S=_r(b,P);S!=null&&(u.push(_),d.set(_,S))}}const p=new Yt(u);return new Mv(d,p,o.fieldTransforms)}function M1(t,e,n,s=!1){return _r(n,t.Qu(s?4:3,e))}function _r(t,e){if(jv(t=Ye(t)))return ad("Unsupported field value:",e,t),$v(t,e);if(t instanceof ci)return function(s,r){if(!Uv(r.Cu))throw r.Bu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Bu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const l of s){let c=_r(l,r.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return OC(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=ut.fromDate(s);return{timestampValue:ol(r.serializer,i)}}if(s instanceof ut){const i=new ut(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ol(r.serializer,i)}}if(s instanceof nd)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof ti)return{bytesValue:rv(r.serializer,s._byteString)};if(s instanceof Ft){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:qh(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof sd)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return Uh(l.serializer,c)})}}}}}}(s,r);throw r.Bu(`Unsupported field value: ${Kl(s)}`)}(t,e)}function $v(t,e){const n={};return xy(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fr(t,(s,r)=>{const i=_r(r,e.Mu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function jv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ut||t instanceof nd||t instanceof ti||t instanceof Ft||t instanceof ci||t instanceof sd)}function ad(t,e,n){if(!jv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Kl(n);throw s==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+s)}}function Lu(t,e,n){if((e=Ye(e))instanceof Ql)return e._internalPath;if(typeof e=="string")return ld(t,e);throw cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const U1=new RegExp("[~\\*/\\[\\]]");function ld(t,e,n){if(e.search(U1)>=0)throw cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ql(...e.split("."))._internalPath}catch{throw cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cl(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new ne(B.INVALID_ARGUMENT,l+t+c)}function qv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new F1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class F1 extends Hv{data(){return super.data()}}function cd(t,e){return typeof e=="string"?ld(t,e):e instanceof Ql?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(B.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ud{}class Wv extends ud{}function hd(t,e,...n){let s=[];e instanceof ud&&s.push(e),s=s.concat(n),function(i){const o=i.filter(c=>c instanceof fd).length,l=i.filter(c=>c instanceof dd).length;if(o>1||o>0&&l>0)throw new ne(B.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)t=r._apply(t);return t}class dd extends Wv{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new dd(e,n,s)}_apply(e){const n=this._parse(e);return Kv(e._query,n),new mr(e.firestore,e.converter,Ru(e._query,n))}_parse(e){const n=Yl(e.firestore);return function(i,o,l,c,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(B.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Um(p,d);const _=[];for(const b of p)_.push(Mm(c,i,b));m={arrayValue:{values:_}}}else m=Mm(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Um(p,d),m=M1(l,o,p,d==="in"||d==="not-in");return at.create(u,d,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class fd extends ud{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new fd(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:mn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let o=r;const l=i.getFlattenedFilters();for(const c of l)Kv(o,c),o=Ru(o,c)}(e._query,n),new mr(e.firestore,e.converter,Ru(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class pd extends Wv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new pd(e,n)}_apply(e){const n=function(r,i,o){if(r.startAt!==null)throw new ne(B.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new ne(B.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Eo(i,o)}(e._query,this._field,this._direction);return new mr(e.firestore,e.converter,function(r,i){const o=r.explicitOrderBy.concat([i]);return new oi(r.path,r.collectionGroup,o,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function md(t,e="asc"){const n=e,s=cd("orderBy",t);return pd._create(s,n)}function Mm(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new ne(B.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jy(e)&&n.indexOf("/")!==-1)throw new ne(B.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(He.fromString(n));if(!ue.isDocumentKey(s))throw new ne(B.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return im(t,new ue(s))}if(n instanceof Ft)return im(t,n._key);throw new ne(B.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Kl(n)}.`)}function Um(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(B.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Kv(t,e){const n=function(r,i){for(const o of r)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(B.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(B.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class $1{convertValue(e,n="none"){switch(ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return fr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>nt(o.doubleValue));return new sd(i)}convertGeoPoint(e){return new nd(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=xh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(yo(e));default:return null}}convertTimestamp(e){const n=Cs(e);return new ut(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=He.fromString(e);Me(uv(s));const r=new vo(s.get(1),s.get(3)),i=new ue(s.popFirst(5));return r.isEqual(n)||Xn(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Gv extends Hv{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(cd("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Da extends Gv{data(e={}){return super.data(e)}}class j1{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Mi(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new Da(this._firestore,this._userDataWriter,s.key,s,new Mi(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(B.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(l=>{const c=new Da(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Mi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Da(r._firestore,r._userDataWriter,l.doc.key,l.doc,new Mi(r._snapshot.mutatedKeys.has(l.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,d=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:q1(l.type),doc:c,oldIndex:u,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function q1(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(t){t=gn(t,Ft);const e=gn(t.firestore,gr);return R1(td(e),t._key).then(n=>K1(e,t,n))}class Qv extends $1{constructor(e){super(),this.firestore=e}convertBytes(e){return new ti(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function gd(t){t=gn(t,mr);const e=gn(t.firestore,gr),n=td(e),s=new Qv(e);return B1(t._query),S1(n,t._query).then(r=>new j1(e,s,t,r))}function Jv(t,e,n){t=gn(t,Ft);const s=gn(t.firestore,gr),r=zv(t.converter,e);return Zl(s,[Fv(Yl(s),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,on.none())])}function Wn(t,e,n,...s){t=gn(t,Ft);const r=gn(t.firestore,gr),i=Yl(r);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Ql?L1(i,"updateDoc",t._key,e,n,s):V1(i,"updateDoc",t._key,e),Zl(r,[o.toMutation(t._key,on.exists(!0))])}function H1(t){return Zl(gn(t.firestore,gr),[new Bh(t._key,on.none())])}function W1(t,e){const n=gn(t.firestore,gr),s=_t(t),r=zv(t.converter,e);return Zl(n,[Fv(Yl(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,on.exists(!1))]).then(()=>s)}function Zl(t,e){return function(s,r){const i=new Qn;return s.asyncQueue.enqueueAndForget(async()=>m1(await A1(s),r,i)),i.promise}(td(t),e)}function K1(t,e,n){const s=n.docs.get(e._key),r=new Qv(t);return new Gv(t,r,e._key,s,new Mi(n.hasPendingWrites,n.fromCache),e.converter)}function z1(){return new rd("serverTimestamp")}function Yv(...t){return new id("arrayUnion",t)}function Xv(...t){return new od("arrayRemove",t)}(function(e,n=!0){(function(r){ii=r})(hr),nr(new As("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),l=new gr(new GS(s.getProvider("auth-internal")),new XS(s.getProvider("app-check-internal")),function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ne(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vo(u.options.projectId,d)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),An(em,"4.7.3",e),An(em,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv="firebasestorage.googleapis.com",ew="storageBucket",G1=2*60*1e3,Q1=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Dn{constructor(e,n,s=0){super(Kc(e),`Firebase Storage: ${n} (${Kc(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Kc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var et;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(et||(et={}));function Kc(t){return"storage/"+t}function _d(){const t="An unknown error occurred, please check the error payload for server response.";return new tt(et.UNKNOWN,t)}function J1(t){return new tt(et.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Y1(t){return new tt(et.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function X1(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new tt(et.UNAUTHENTICATED,t)}function Z1(){return new tt(et.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ek(t){return new tt(et.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function tk(){return new tt(et.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function nk(){return new tt(et.CANCELED,"User canceled the upload/download.")}function sk(t){return new tt(et.INVALID_URL,"Invalid URL '"+t+"'.")}function rk(t){return new tt(et.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function ik(){return new tt(et.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ew+"' property when initializing the app?")}function ok(){return new tt(et.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function ak(){return new tt(et.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function lk(t){return new tt(et.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Mu(t){return new tt(et.INVALID_ARGUMENT,t)}function tw(){return new tt(et.APP_DELETED,"The Firebase app was deleted.")}function ck(t){return new tt(et.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function io(t,e){return new tt(et.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Pi(t){throw new tt(et.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=Xt.makeFromUrl(e,n)}catch{return new Xt(e,"")}if(s.path==="")return s;throw rk(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u($){$.path_=decodeURIComponent($.path)}const d="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",_=new RegExp(`^https?://${p}/${d}/b/${r}/o${m}`,"i"),b={bucket:1,path:3},P=n===Zv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,S="([^?#]*)",U=new RegExp(`^https?://${P}/${r}/${S}`,"i"),F=[{regex:l,indices:c,postModify:i},{regex:_,indices:b,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let $=0;$<F.length;$++){const ae=F[$],de=ae.regex.exec(e);if(de){const A=de[ae.indices.bucket];let w=de[ae.indices.path];w||(w=""),s=new Xt(A,w),ae.postModify(s);break}}if(s==null)throw sk(e);return s}}class uk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e,n){let s=1,r=null,i=null,o=!1,l=0;function c(){return l===2}let u=!1;function d(...S){u||(u=!0,e.apply(null,S))}function p(S){r=setTimeout(()=>{r=null,t(_,c())},S)}function m(){i&&clearTimeout(i)}function _(S,...U){if(u){m();return}if(S){m(),d.call(null,S,...U);return}if(c()||o){m(),d.call(null,S,...U);return}s<64&&(s*=2);let F;l===1?(l=2,F=0):F=(s+Math.random())*1e3,p(F)}let b=!1;function P(S){b||(b=!0,m(),!u&&(r!==null?(S||(l=2),clearTimeout(r),p(0)):S||(l=1)))}return p(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function dk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fk(t){return t!==void 0}function pk(t){return typeof t=="object"&&!Array.isArray(t)}function yd(t){return typeof t=="string"||t instanceof String}function Fm(t){return vd()&&t instanceof Blob}function vd(){return typeof Blob<"u"}function Bm(t,e,n,s){if(s<e)throw Mu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Mu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function nw(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Ys;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ys||(Ys={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n,s,r,i,o,l,c,u,d,p,m=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=d,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,b)=>{this.resolve_=_,this.reject_=b,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new ma(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const l=i.getErrorCode()===Ys.NO_ERROR,c=i.getStatus();if(!l||mk(c,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===Ys.ABORT;s(!1,new ma(!1,null,d));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new ma(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,l=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());fk(c)?i(c):i()}catch(c){o(c)}else if(l!==null){const c=_d();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(r.canceled){const c=this.appDelete_?tw():nk();o(c)}else{const c=tk();o(c)}};this.canceled_?n(!1,new ma(!1,null,!0)):this.backoffId_=hk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&dk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ma{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function _k(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function yk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function vk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Ek(t,e,n,s,r,i,o=!0){const l=nw(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return vk(u,e),_k(u,n),yk(u,i),wk(u,s),new gk(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Ik(...t){const e=Tk();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(vd())return new Blob(t);throw new tt(et.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function bk(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(t){if(typeof atob>"u")throw lk("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class zc{constructor(e,n){this.data=e,this.contentType=n||null}}function Rk(t,e){switch(t){case In.RAW:return new zc(sw(e));case In.BASE64:case In.BASE64URL:return new zc(rw(t,e));case In.DATA_URL:return new zc(Ck(e),Pk(e))}throw _d()}function sw(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=s,o=t.charCodeAt(++n);s=65536|(i&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function Sk(t){let e;try{e=decodeURIComponent(t)}catch{throw io(In.DATA_URL,"Malformed data URL.")}return sw(e)}function rw(t,e){switch(t){case In.BASE64:{const r=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(r||i)throw io(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case In.BASE64URL:{const r=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(r||i)throw io(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ak(e)}catch(r){throw r.message.includes("polyfill")?r:io(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class iw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw io(In.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=kk(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function Ck(t){const e=new iw(t);return e.base64?rw(In.BASE64,e.rest):Sk(e.rest)}function Pk(t){return new iw(t).contentType}function kk(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){let s=0,r="";Fm(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(Fm(this.data_)){const s=this.data_,r=bk(s,e,n);return r===null?null:new _s(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new _s(s,!0)}}static getBlob(...e){if(vd()){const n=e.map(s=>s instanceof _s?s.data_:s);return new _s(Ik.apply(null,n))}else{const n=e.map(o=>yd(o)?Rk(In.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const r=new Uint8Array(s);let i=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)r[i++]=o[l]}),new _s(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ow(t){let e;try{e=JSON.parse(t)}catch{return null}return pk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Dk(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function aw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xk(t,e){return e}class Lt{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||xk}}let ga=null;function Nk(t){return!yd(t)||t.length<2?t:aw(t)}function lw(){if(ga)return ga;const t=[];t.push(new Lt("bucket")),t.push(new Lt("generation")),t.push(new Lt("metageneration")),t.push(new Lt("name","fullPath",!0));function e(i,o){return Nk(o)}const n=new Lt("name");n.xform=e,t.push(n);function s(i,o){return o!==void 0?Number(o):o}const r=new Lt("size");return r.xform=s,t.push(r),t.push(new Lt("timeCreated")),t.push(new Lt("updated")),t.push(new Lt("md5Hash",null,!0)),t.push(new Lt("cacheControl",null,!0)),t.push(new Lt("contentDisposition",null,!0)),t.push(new Lt("contentEncoding",null,!0)),t.push(new Lt("contentLanguage",null,!0)),t.push(new Lt("contentType",null,!0)),t.push(new Lt("metadata","customMetadata",!0)),ga=t,ga}function Vk(t,e){function n(){const s=t.bucket,r=t.fullPath,i=new Xt(s,r);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function Lk(t,e,n){const s={};s.type="file";const r=n.length;for(let i=0;i<r;i++){const o=n[i];s[o.local]=o.xform(s,e[o.server])}return Vk(s,t),s}function cw(t,e,n){const s=ow(e);return s===null?null:Lk(t,s,n)}function Mk(t,e,n,s){const r=ow(e);if(r===null||!yd(r.downloadTokens))return null;const i=r.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const d=t.bucket,p=t.fullPath,m="/b/"+o(d)+"/o/"+o(p),_=ec(m,n,s),b=nw({alt:"media",token:u});return _+b})[0]}function Uk(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const i=e[r];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class wd{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t){if(!t)throw _d()}function Fk(t,e){function n(s,r){const i=cw(t,r,e);return uw(i!==null),i}return n}function Bk(t,e){function n(s,r){const i=cw(t,r,e);return uw(i!==null),Mk(i,r,t.host,t._protocol)}return n}function hw(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=Z1():r=X1():n.getStatus()===402?r=Y1(t.bucket):n.getStatus()===403?r=ek(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function dw(t){const e=hw(t);function n(s,r){let i=e(s,r);return s.getStatus()===404&&(i=J1(t.path)),i.serverResponse=r.serverResponse,i}return n}function $k(t,e,n){const s=e.fullServerUrl(),r=ec(s,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,l=new wd(r,i,Bk(t,n),o);return l.errorHandler=dw(e),l}function jk(t,e){const n=e.fullServerUrl(),s=ec(n,t.host,t._protocol),r="DELETE",i=t.maxOperationRetryTime;function o(c,u){}const l=new wd(s,r,o,i);return l.successCodes=[200,204],l.errorHandler=dw(e),l}function qk(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Hk(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=qk(null,e)),s}function Wk(t,e,n,s,r){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let F="";for(let $=0;$<2;$++)F=F+Math.random().toString().slice(2);return F}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=Hk(e,s,r),d=Uk(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",_=_s.getBlob(p,s,m);if(_===null)throw ok();const b={name:u.fullPath},P=ec(i,t.host,t._protocol),S="POST",U=t.maxUploadRetryTime,M=new wd(P,S,Fk(t,n),U);return M.urlParams=b,M.headers=o,M.body=_.uploadData(),M.errorHandler=hw(e),M}class Kk{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw Pi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Pi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Pi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Pi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Pi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class zk extends Kk{initXhr(){this.xhr_.responseType="text"}}function Ed(){return new zk}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){this._service=e,n instanceof Xt?this._location=n:this._location=Xt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new lr(e,n)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aw(this._location.path)}get storage(){return this._service}get parent(){const e=Ok(this._location.path);if(e===null)return null;const n=new Xt(this._location.bucket,e);return new lr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ck(e)}}function Gk(t,e,n){t._throwIfRoot("uploadBytes");const s=Wk(t.storage,t._location,lw(),new _s(e,!0),n);return t.storage.makeRequestWithTokens(s,Ed).then(r=>({metadata:r,ref:t}))}function Qk(t){t._throwIfRoot("getDownloadURL");const e=$k(t.storage,t._location,lw());return t.storage.makeRequestWithTokens(e,Ed).then(n=>{if(n===null)throw ak();return n})}function Jk(t){t._throwIfRoot("deleteObject");const e=jk(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Ed)}function Yk(t,e){const n=Dk(t._location.path,e),s=new Xt(t._location.bucket,n);return new lr(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(t){return/^[A-Za-z]+:\/\//.test(t)}function Zk(t,e){return new lr(t,e)}function fw(t,e){if(t instanceof Td){const n=t;if(n._bucket==null)throw ik();const s=new lr(n,n._bucket);return e!=null?fw(s,e):s}else return e!==void 0?Yk(t,e):t}function eO(t,e){if(e&&Xk(e)){if(t instanceof Td)return Zk(t,e);throw Mu("To use ref(service, url), the first argument must be a Storage instance.")}else return fw(t,e)}function $m(t,e){const n=e==null?void 0:e[ew];return n==null?null:Xt.makeFromBucketSpec(n,t)}function tO(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:S_(r,t.app.options.projectId))}class Td{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=Zv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=G1,this._maxUploadRetryTime=Q1,this._requests=new Set,r!=null?this._bucket=Xt.makeFromBucketSpec(r,this._host):this._bucket=$m(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=$m(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new lr(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new uk(tw());{const o=Ek(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const jm="@firebase/storage",qm="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw="storage";function nO(t,e,n){return t=Ye(t),Gk(t,e,n)}function Id(t){return t=Ye(t),Qk(t)}function sO(t){return t=Ye(t),Jk(t)}function ul(t,e){return t=Ye(t),eO(t,e)}function mw(t=yh(),e){t=Ye(t);const s=Ol(t,pw).getImmediate({identifier:e}),r=b_("storage");return r&&rO(s,...r),s}function rO(t,e,n,s={}){tO(t,e,n,s)}function iO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new Td(n,s,r,e,hr)}function oO(){nr(new As(pw,iO,"PUBLIC").setMultipleInstances(!0)),An(jm,qm,""),An(jm,qm,"esm2017")}oO();const aO="/assets/challenge-D0amuE6W.webp",lO="/assets/social-Ba3KKyLH.webp",Ms=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},cO={class:"page-background"},uO={class:"trending-background"},hO={class:"trending"},dO={class:"container-fluid"},fO={class:"row g-3"},pO={class:"card h-100 recipe",style:{height:"350px"}},mO=["src","alt"],gO={class:"card-body"},_O={class:"card-title"},yO={class:"card-text"},vO={class:"features"},wO={class:"container-fluid p-0"},EO={class:"row mt-5"},TO={class:"col-md-6 challenge-box mx-0 px-0"},IO={class:"challenge-text p-5"},bO={class:"row mt-5"},AO={class:"col-md-6 g-0 socials-box"},RO={class:"socials-text p-5"},SO={class:"faq-background"},CO={class:"faq"},PO=["onClick"],kO={class:"question"},OO={class:"answer"},DO="afbc0b914dc54eafa85c4f030283b3bf",xO=6,NO={__name:"About",setup(t){jS();const e=`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${xO}&addRecipeInformation=true&apiKey=${DO}`;function n(i){return i?i.replace(/(<([^>]+)>)/gi,"")+"...":"No description available."}Ao(()=>{kL(e)});const s=kt([{question:"What types of recipes can I expect to find on Let Me Cook?",answer:"Our recipe library spans a variety of cuisines and meal types, including appetizers, main courses, desserts, and healthy options. The recommendations are dynamically tailored to your ingredients, so you might discover anything from simple comfort foods to more elaborate dishes that make use of pantry staples and fresh produce alike.",open:!1},{question:"How do I earn points?",answer:"By participating in challenges! Input your ingredients, choose a challenge, cook up the recipe given and you'll earn it!",open:!1},{question:"Can I share my own recipes or meals?",answer:"Yes! You can post pictures and details of your meals on the socials page to share with the community. Alternatively, you can also head to the socials page to get inspiration from other food enthusiasts and interact with them 😁",open:!1}]);function r(i){s.value[i].isActive=!s.value[i].isActive}return(i,o)=>{const l=ur("router-link");return Z(),ee(qe,null,[o[12]||(o[12]=y("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We",crossorigin:"anonymous"},null,-1)),o[13]||(o[13]=y("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"},null,-1)),o[14]||(o[14]=y("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Merienda"},null,-1)),o[15]||(o[15]=y("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",integrity:"sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==",crossorigin:"anonymous",referrerpolicy:"no-referrer"},null,-1)),y("div",cO,[o[11]||(o[11]=Sl('<section class="getStarted" data-v-926643fb><div class="image-container-wrapper row" data-v-926643fb><div class="image-container" data-v-926643fb><div class="text-overlay" data-v-926643fb><h1 class="title" data-v-926643fb>Get Started!</h1><p class="description" data-v-926643fb> Welcome to <span class="logo-name" style="font-weight:bold;font-style:italic;" data-v-926643fb>Let Me Cook</span>, your go-to platform for personalised recipe discovery! Get meal ideas based on ingredients you already have, take on cooking challenges to earn points, and climb the leaderboard. Share your creations, connect with other food lovers, and make cooking a fun, interactive experience. Let&#39;s get cooking! </p></div></div><div class="text-below" data-v-926643fb><h1 class="title" data-v-926643fb>Get Started!</h1><p class="description" data-v-926643fb> Welcome to <span class="logo-name" style="font-weight:bold;font-style:italic;" data-v-926643fb>Let Me Cook</span>, your go-to platform for personalised recipe discovery! Get meal ideas based on ingredients you already have, take on cooking challenges to earn points, and climb the leaderboard. Share your creations, connect with other food lovers, and make cooking a fun, interactive experience. Let&#39;s get cooking! </p></div></div></section>',1)),y("div",uO,[y("section",hO,[o[0]||(o[0]=y("div",{class:"text-center"},[y("h1",null,"Trending Recipes")],-1)),y("div",dO,[y("div",fO,[(Z(!0),ee(qe,null,un(Je(nE),c=>(Z(),ee("div",{key:c.id,class:"col-lg-4 col-md-6 col-sm-12 gx-0"},[y("div",pO,[y("img",{src:c.image,alt:c.title,class:"card-img-top img-fluid",style:{height:"150px","object-fit":"cover"}},null,8,mO),y("div",gO,[y("h5",_O,se(c.title),1),y("p",yO,se(n(c.summary)),1)])])]))),128))])])])]),y("section",vO,[y("div",wO,[y("div",EO,[o[4]||(o[4]=y("div",{class:"col-md-6 g-0 d-flex"},[y("div",{class:"challenge-img px-2"},[y("img",{src:aO,class:"img-fluid"})])],-1)),y("div",TO,[y("div",IO,[o[2]||(o[2]=y("h1",null,"Take on the Challenge!",-1)),o[3]||(o[3]=y("p",null,'Turn your ingredients into a cooking adventure! At "Challenges", each recipe recommendation is a unique challenge with points based on difficulty. Cook, earn points, and climb the leaderboard as you compete with fellow foodies. Ready to cook and conquer?',-1)),Ee(l,{to:"/start"},{default:Ke(()=>o[1]||(o[1]=[y("button",{class:"bg-green-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-green-600"},"Go to Challenges",-1)])),_:1})])])]),y("div",bO,[y("div",AO,[y("div",RO,[o[6]||(o[6]=y("h1",null,"Cook, Share & Connect!",-1)),o[7]||(o[7]=y("p",null,'Show off your culinary creations! At "Socials", you can share recipes, browse inspiring meals, and connect with fellow food lovers. Like posts, spark new ideas, and fuel your cooking adventures with a community that celebrates creativity in the kitchen. Ready to share and get inspired?',-1)),Ee(l,{to:"/social"},{default:Ke(()=>o[5]||(o[5]=[y("button",{class:"bg-blue-500 text-white text-lg px-6 py-3 rounded-lg hover:bg-blue-600"},"Go to Socials",-1)])),_:1})])]),o[8]||(o[8]=y("div",{class:"col-md-6 d-flex order-first order-md-last"},[y("div",{class:"socials-img"},[y("img",{src:lO,class:"img-fluid"})])],-1))])])]),y("div",SO,[y("section",CO,[o[10]||(o[10]=y("h1",{class:"mb-4 faq-header"},"FAQs",-1)),(Z(!0),ee(qe,null,un(s.value,(c,u)=>(Z(),ee("div",{key:u,class:"faq-body",onClick:d=>r(u)},[y("div",kO,[y("h3",null,se(c.question),1),o[9]||(o[9]=y("svg",{width:"20",height:"10",viewBox:"0 0 42 25"},[y("path",{d:"M3 3L21 21L39 3",stroke:"black","stroke-width":"1","stroke-linecap":"round"})],-1))]),zn(y("div",OO,[y("p",null,se(c.answer),1)],512),[[PI,c.isActive]])],8,PO))),128))])])])],64)}}},VO=Ms(NO,[["__scopeId","data-v-926643fb"]]),LO={class:"w-full max-w-md border rounded-2xl shadow-lg mx-auto my-24 p-8"},MO={class:"text-center space-y-4"},UO={class:"md:flex md:items-center md:justify-center md:space-x-4"},FO={class:"md:flex md:items-center md:justify-center md:space-x-4"},BO={class:"md:flex md:items-center md:justify-center md:space-x-4"},$O={__name:"Register",setup(t){return(e,n)=>(Z(),ee("div",LO,[n[7]||(n[7]=y("p",{class:"text-4xl font-bold text-gray-900 text-center"},"Register",-1)),n[8]||(n[8]=y("br",null,null,-1)),y("form",MO,[y("div",UO,[n[4]||(n[4]=y("label",{class:"w-full md:w-1/4 text-gray-700 font-semibold text-center md:text-right"},"Name:",-1)),zn(y("input",{"onUpdate:modelValue":n[0]||(n[0]=s=>st(Fa)?Fa.value=s:null),type:"text",placeholder:"Name",class:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"},null,512),[[vs,Je(Fa)]])]),y("div",FO,[n[5]||(n[5]=y("label",{class:"w-full md:w-1/4 text-gray-700 font-semibold text-center md:text-right"},"Email:",-1)),zn(y("input",{"onUpdate:modelValue":n[1]||(n[1]=s=>st(oo)?oo.value=s:null),type:"text",placeholder:"Email",class:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"},null,512),[[vs,Je(oo)]])]),y("div",BO,[n[6]||(n[6]=y("label",{class:"w-full md:w-1/4 text-gray-700 font-semibold text-center md:text-right"},"Password:",-1)),zn(y("input",{"onUpdate:modelValue":n[2]||(n[2]=s=>st(Ba)?Ba.value=s:null),type:"password",placeholder:"Password",class:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"},null,512),[[vs,Je(Ba)]])]),y("button",{onClick:n[3]||(n[3]=(...s)=>Je(cg)&&Je(cg)(...s)),type:"submit",class:"focus:outline-none text-white bg-tomato hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 pt-1.5 pb-2 mb-2"},"Register")])]))}},jO={class:"w-full max-w-md border rounded-2xl shadow-lg mx-auto my-24 p-8"},qO={class:"text-center space-y-4"},HO={class:"md:flex md:items-center md:justify-center md:space-x-4"},WO={class:"md:flex md:items-center md:justify-center md:space-x-4"},KO={class:"text-center"},zO={class:"text-sm text-gray-900 mt-5 text-center"},GO={class:"whitespace-nowrap"},QO={__name:"Login",setup(t){return(e,n)=>{const s=ur("router-link");return Z(),ee("div",jO,[n[7]||(n[7]=y("p",{class:"text-4xl font-bold text-gray-900 text-center"},"Login",-1)),n[8]||(n[8]=y("br",null,null,-1)),y("form",qO,[y("div",HO,[n[3]||(n[3]=y("label",{class:"w-full md:w-1/4 text-gray-700 font-semibold text-center md:text-right"},"Email:",-1)),zn(y("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>st($a)?$a.value=r:null),type:"text",placeholder:"Email",class:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 mt-2 md:mt-0"},null,512),[[vs,Je($a)]])]),y("div",WO,[n[4]||(n[4]=y("label",{class:"w-full md:w-1/4 text-gray-700 font-semibold text-center md:text-right"},"Password:",-1)),zn(y("input",{"onUpdate:modelValue":n[1]||(n[1]=r=>st(ja)?ja.value=r:null),type:"password",placeholder:"Password",class:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200 mt-2 md:mt-0"},null,512),[[vs,Je(ja)]])]),y("div",KO,[y("button",{onClick:n[2]||(n[2]=(...r)=>Je(ug)&&Je(ug)(...r)),type:"submit",class:"focus:outline-none text-white bg-tomato hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2 mt-4"},"Login")])]),y("div",zO,[n[6]||(n[6]=Ie(" Not registered yet? ")),y("span",GO,[Ee(s,{to:"/register",class:"text-tomato hover:text-red-500"},{default:Ke(()=>n[5]||(n[5]=[Ie("Create account")])),_:1})])])])}}};function gw(t,e){return function(){return t.apply(e,arguments)}}const{toString:JO}=Object.prototype,{getPrototypeOf:bd}=Object,tc=(t=>e=>{const n=JO.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),_n=t=>(t=t.toLowerCase(),e=>tc(e)===t),nc=t=>e=>typeof e===t,{isArray:ui}=Array,Io=nc("undefined");function YO(t){return t!==null&&!Io(t)&&t.constructor!==null&&!Io(t.constructor)&&Zt(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const _w=_n("ArrayBuffer");function XO(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&_w(t.buffer),e}const ZO=nc("string"),Zt=nc("function"),yw=nc("number"),sc=t=>t!==null&&typeof t=="object",eD=t=>t===!0||t===!1,xa=t=>{if(tc(t)!=="object")return!1;const e=bd(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},tD=_n("Date"),nD=_n("File"),sD=_n("Blob"),rD=_n("FileList"),iD=t=>sc(t)&&Zt(t.pipe),oD=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Zt(t.append)&&((e=tc(t))==="formdata"||e==="object"&&Zt(t.toString)&&t.toString()==="[object FormData]"))},aD=_n("URLSearchParams"),[lD,cD,uD,hD]=["ReadableStream","Request","Response","Headers"].map(_n),dD=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let s,r;if(typeof t!="object"&&(t=[t]),ui(t))for(s=0,r=t.length;s<r;s++)e.call(null,t[s],s,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let l;for(s=0;s<o;s++)l=i[s],e.call(null,t[l],l,t)}}function vw(t,e){e=e.toLowerCase();const n=Object.keys(t);let s=n.length,r;for(;s-- >0;)if(r=n[s],e===r.toLowerCase())return r;return null}const Gs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ww=t=>!Io(t)&&t!==Gs;function Uu(){const{caseless:t}=ww(this)&&this||{},e={},n=(s,r)=>{const i=t&&vw(e,r)||r;xa(e[i])&&xa(s)?e[i]=Uu(e[i],s):xa(s)?e[i]=Uu({},s):ui(s)?e[i]=s.slice():e[i]=s};for(let s=0,r=arguments.length;s<r;s++)arguments[s]&&Fo(arguments[s],n);return e}const fD=(t,e,n,{allOwnKeys:s}={})=>(Fo(e,(r,i)=>{n&&Zt(r)?t[i]=gw(r,n):t[i]=r},{allOwnKeys:s}),t),pD=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),mD=(t,e,n,s)=>{t.prototype=Object.create(e.prototype,s),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},gD=(t,e,n,s)=>{let r,i,o;const l={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),i=r.length;i-- >0;)o=r[i],(!s||s(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&bd(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},_D=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const s=t.indexOf(e,n);return s!==-1&&s===n},yD=t=>{if(!t)return null;if(ui(t))return t;let e=t.length;if(!yw(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},vD=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&bd(Uint8Array)),wD=(t,e)=>{const s=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=s.next())&&!r.done;){const i=r.value;e.call(t,i[0],i[1])}},ED=(t,e)=>{let n;const s=[];for(;(n=t.exec(e))!==null;)s.push(n);return s},TD=_n("HTMLFormElement"),ID=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,s,r){return s.toUpperCase()+r}),Hm=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),bD=_n("RegExp"),Ew=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),s={};Fo(n,(r,i)=>{let o;(o=e(r,i,t))!==!1&&(s[i]=o||r)}),Object.defineProperties(t,s)},AD=t=>{Ew(t,(e,n)=>{if(Zt(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const s=t[n];if(Zt(s)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},RD=(t,e)=>{const n={},s=r=>{r.forEach(i=>{n[i]=!0})};return ui(t)?s(t):s(String(t).split(e)),n},SD=()=>{},CD=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e,Gc="abcdefghijklmnopqrstuvwxyz",Wm="0123456789",Tw={DIGIT:Wm,ALPHA:Gc,ALPHA_DIGIT:Gc+Gc.toUpperCase()+Wm},PD=(t=16,e=Tw.ALPHA_DIGIT)=>{let n="";const{length:s}=e;for(;t--;)n+=e[Math.random()*s|0];return n};function kD(t){return!!(t&&Zt(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const OD=t=>{const e=new Array(10),n=(s,r)=>{if(sc(s)){if(e.indexOf(s)>=0)return;if(!("toJSON"in s)){e[r]=s;const i=ui(s)?[]:{};return Fo(s,(o,l)=>{const c=n(o,r+1);!Io(c)&&(i[l]=c)}),e[r]=void 0,i}}return s};return n(t,0)},DD=_n("AsyncFunction"),xD=t=>t&&(sc(t)||Zt(t))&&Zt(t.then)&&Zt(t.catch),Iw=((t,e)=>t?setImmediate:e?((n,s)=>(Gs.addEventListener("message",({source:r,data:i})=>{r===Gs&&i===n&&s.length&&s.shift()()},!1),r=>{s.push(r),Gs.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Zt(Gs.postMessage)),ND=typeof queueMicrotask<"u"?queueMicrotask.bind(Gs):typeof process<"u"&&process.nextTick||Iw,N={isArray:ui,isArrayBuffer:_w,isBuffer:YO,isFormData:oD,isArrayBufferView:XO,isString:ZO,isNumber:yw,isBoolean:eD,isObject:sc,isPlainObject:xa,isReadableStream:lD,isRequest:cD,isResponse:uD,isHeaders:hD,isUndefined:Io,isDate:tD,isFile:nD,isBlob:sD,isRegExp:bD,isFunction:Zt,isStream:iD,isURLSearchParams:aD,isTypedArray:vD,isFileList:rD,forEach:Fo,merge:Uu,extend:fD,trim:dD,stripBOM:pD,inherits:mD,toFlatObject:gD,kindOf:tc,kindOfTest:_n,endsWith:_D,toArray:yD,forEachEntry:wD,matchAll:ED,isHTMLForm:TD,hasOwnProperty:Hm,hasOwnProp:Hm,reduceDescriptors:Ew,freezeMethods:AD,toObjectSet:RD,toCamelCase:ID,noop:SD,toFiniteNumber:CD,findKey:vw,global:Gs,isContextDefined:ww,ALPHABET:Tw,generateString:PD,isSpecCompliantForm:kD,toJSONObject:OD,isAsyncFn:DD,isThenable:xD,setImmediate:Iw,asap:ND};function we(t,e,n,s,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),s&&(this.request=s),r&&(this.response=r,this.status=r.status?r.status:null)}N.inherits(we,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:N.toJSONObject(this.config),code:this.code,status:this.status}}});const bw=we.prototype,Aw={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Aw[t]={value:t}});Object.defineProperties(we,Aw);Object.defineProperty(bw,"isAxiosError",{value:!0});we.from=(t,e,n,s,r,i)=>{const o=Object.create(bw);return N.toFlatObject(t,o,function(c){return c!==Error.prototype},l=>l!=="isAxiosError"),we.call(o,t.message,e,n,s,r),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const VD=null;function Fu(t){return N.isPlainObject(t)||N.isArray(t)}function Rw(t){return N.endsWith(t,"[]")?t.slice(0,-2):t}function Km(t,e,n){return t?t.concat(e).map(function(r,i){return r=Rw(r),!n&&i?"["+r+"]":r}).join(n?".":""):e}function LD(t){return N.isArray(t)&&!t.some(Fu)}const MD=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function rc(t,e,n){if(!N.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(P,S){return!N.isUndefined(S[P])});const s=n.metaTokens,r=n.visitor||d,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&N.isSpecCompliantForm(e);if(!N.isFunction(r))throw new TypeError("visitor must be a function");function u(b){if(b===null)return"";if(N.isDate(b))return b.toISOString();if(!c&&N.isBlob(b))throw new we("Blob is not supported. Use a Buffer instead.");return N.isArrayBuffer(b)||N.isTypedArray(b)?c&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function d(b,P,S){let U=b;if(b&&!S&&typeof b=="object"){if(N.endsWith(P,"{}"))P=s?P:P.slice(0,-2),b=JSON.stringify(b);else if(N.isArray(b)&&LD(b)||(N.isFileList(b)||N.endsWith(P,"[]"))&&(U=N.toArray(b)))return P=Rw(P),U.forEach(function(F,$){!(N.isUndefined(F)||F===null)&&e.append(o===!0?Km([P],$,i):o===null?P:P+"[]",u(F))}),!1}return Fu(b)?!0:(e.append(Km(S,P,i),u(b)),!1)}const p=[],m=Object.assign(MD,{defaultVisitor:d,convertValue:u,isVisitable:Fu});function _(b,P){if(!N.isUndefined(b)){if(p.indexOf(b)!==-1)throw Error("Circular reference detected in "+P.join("."));p.push(b),N.forEach(b,function(U,M){(!(N.isUndefined(U)||U===null)&&r.call(e,U,N.isString(M)?M.trim():M,P,m))===!0&&_(U,P?P.concat(M):[M])}),p.pop()}}if(!N.isObject(t))throw new TypeError("data must be an object");return _(t),e}function zm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(s){return e[s]})}function Ad(t,e){this._pairs=[],t&&rc(t,this,e)}const Sw=Ad.prototype;Sw.append=function(e,n){this._pairs.push([e,n])};Sw.toString=function(e){const n=e?function(s){return e.call(this,s,zm)}:zm;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function UD(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Cw(t,e,n){if(!e)return t;const s=n&&n.encode||UD,r=n&&n.serialize;let i;if(r?i=r(e,n):i=N.isURLSearchParams(e)?e.toString():new Ad(e,n).toString(s),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Gm{constructor(){this.handlers=[]}use(e,n,s){return this.handlers.push({fulfilled:e,rejected:n,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(s){s!==null&&e(s)})}}const Pw={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},FD=typeof URLSearchParams<"u"?URLSearchParams:Ad,BD=typeof FormData<"u"?FormData:null,$D=typeof Blob<"u"?Blob:null,jD={isBrowser:!0,classes:{URLSearchParams:FD,FormData:BD,Blob:$D},protocols:["http","https","file","blob","url","data"]},Rd=typeof window<"u"&&typeof document<"u",Bu=typeof navigator=="object"&&navigator||void 0,qD=Rd&&(!Bu||["ReactNative","NativeScript","NS"].indexOf(Bu.product)<0),HD=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",WD=Rd&&window.location.href||"http://localhost",KD=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Rd,hasStandardBrowserEnv:qD,hasStandardBrowserWebWorkerEnv:HD,navigator:Bu,origin:WD},Symbol.toStringTag,{value:"Module"})),jt={...KD,...jD};function zD(t,e){return rc(t,new jt.classes.URLSearchParams,Object.assign({visitor:function(n,s,r,i){return jt.isNode&&N.isBuffer(n)?(this.append(s,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function GD(t){return N.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function QD(t){const e={},n=Object.keys(t);let s;const r=n.length;let i;for(s=0;s<r;s++)i=n[s],e[i]=t[i];return e}function kw(t){function e(n,s,r,i){let o=n[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=i>=n.length;return o=!o&&N.isArray(r)?r.length:o,c?(N.hasOwnProp(r,o)?r[o]=[r[o],s]:r[o]=s,!l):((!r[o]||!N.isObject(r[o]))&&(r[o]=[]),e(n,s,r[o],i)&&N.isArray(r[o])&&(r[o]=QD(r[o])),!l)}if(N.isFormData(t)&&N.isFunction(t.entries)){const n={};return N.forEachEntry(t,(s,r)=>{e(GD(s),r,n,0)}),n}return null}function JD(t,e,n){if(N.isString(t))try{return(e||JSON.parse)(t),N.trim(t)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(t)}const Bo={transitional:Pw,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const s=n.getContentType()||"",r=s.indexOf("application/json")>-1,i=N.isObject(e);if(i&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return r?JSON.stringify(kw(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(i){if(s.indexOf("application/x-www-form-urlencoded")>-1)return zD(e,this.formSerializer).toString();if((l=N.isFileList(e))||s.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return rc(l?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||r?(n.setContentType("application/json",!1),JD(e)):e}],transformResponse:[function(e){const n=this.transitional||Bo.transitional,s=n&&n.forcedJSONParsing,r=this.responseType==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(s&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?we.from(l,we.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:jt.classes.FormData,Blob:jt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch"],t=>{Bo.headers[t]={}});const YD=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),XD=t=>{const e={};let n,s,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),s=o.substring(r+1).trim(),!(!n||e[n]&&YD[n])&&(n==="set-cookie"?e[n]?e[n].push(s):e[n]=[s]:e[n]=e[n]?e[n]+", "+s:s)}),e},Qm=Symbol("internals");function ki(t){return t&&String(t).trim().toLowerCase()}function Na(t){return t===!1||t==null?t:N.isArray(t)?t.map(Na):String(t)}function ZD(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=n.exec(t);)e[s[1]]=s[2];return e}const ex=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Qc(t,e,n,s,r){if(N.isFunction(s))return s.call(this,e,n);if(r&&(e=n),!!N.isString(e)){if(N.isString(s))return e.indexOf(s)!==-1;if(N.isRegExp(s))return s.test(e)}}function tx(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,s)=>n.toUpperCase()+s)}function nx(t,e){const n=N.toCamelCase(" "+e);["get","set","has"].forEach(s=>{Object.defineProperty(t,s+n,{value:function(r,i,o){return this[s].call(this,e,r,i,o)},configurable:!0})})}class qt{constructor(e){e&&this.set(e)}set(e,n,s){const r=this;function i(l,c,u){const d=ki(c);if(!d)throw new Error("header name must be a non-empty string");const p=N.findKey(r,d);(!p||r[p]===void 0||u===!0||u===void 0&&r[p]!==!1)&&(r[p||c]=Na(l))}const o=(l,c)=>N.forEach(l,(u,d)=>i(u,d,c));if(N.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(N.isString(e)&&(e=e.trim())&&!ex(e))o(XD(e),n);else if(N.isHeaders(e))for(const[l,c]of e.entries())i(c,l,s);else e!=null&&i(n,e,s);return this}get(e,n){if(e=ki(e),e){const s=N.findKey(this,e);if(s){const r=this[s];if(!n)return r;if(n===!0)return ZD(r);if(N.isFunction(n))return n.call(this,r,s);if(N.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ki(e),e){const s=N.findKey(this,e);return!!(s&&this[s]!==void 0&&(!n||Qc(this,this[s],s,n)))}return!1}delete(e,n){const s=this;let r=!1;function i(o){if(o=ki(o),o){const l=N.findKey(s,o);l&&(!n||Qc(s,s[l],l,n))&&(delete s[l],r=!0)}}return N.isArray(e)?e.forEach(i):i(e),r}clear(e){const n=Object.keys(this);let s=n.length,r=!1;for(;s--;){const i=n[s];(!e||Qc(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){const n=this,s={};return N.forEach(this,(r,i)=>{const o=N.findKey(s,i);if(o){n[o]=Na(r),delete n[i];return}const l=e?tx(i):String(i).trim();l!==i&&delete n[i],n[l]=Na(r),s[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return N.forEach(this,(s,r)=>{s!=null&&s!==!1&&(n[r]=e&&N.isArray(s)?s.join(", "):s)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const s=new this(e);return n.forEach(r=>s.set(r)),s}static accessor(e){const s=(this[Qm]=this[Qm]={accessors:{}}).accessors,r=this.prototype;function i(o){const l=ki(o);s[l]||(nx(r,o),s[l]=!0)}return N.isArray(e)?e.forEach(i):i(e),this}}qt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(qt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(s){this[n]=s}}});N.freezeMethods(qt);function Jc(t,e){const n=this||Bo,s=e||n,r=qt.from(s.headers);let i=s.data;return N.forEach(t,function(l){i=l.call(n,i,r.normalize(),e?e.status:void 0)}),r.normalize(),i}function Ow(t){return!!(t&&t.__CANCEL__)}function hi(t,e,n){we.call(this,t??"canceled",we.ERR_CANCELED,e,n),this.name="CanceledError"}N.inherits(hi,we,{__CANCEL__:!0});function Dw(t,e,n){const s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):e(new we("Request failed with status code "+n.status,[we.ERR_BAD_REQUEST,we.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function sx(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function rx(t,e){t=t||10;const n=new Array(t),s=new Array(t);let r=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),d=s[i];o||(o=u),n[r]=c,s[r]=u;let p=i,m=0;for(;p!==r;)m+=n[p++],p=p%t;if(r=(r+1)%t,r===i&&(i=(i+1)%t),u-o<e)return;const _=d&&u-d;return _?Math.round(m*1e3/_):void 0}}function ix(t,e){let n=0,s=1e3/e,r,i;const o=(u,d=Date.now())=>{n=d,r=null,i&&(clearTimeout(i),i=null),t.apply(null,u)};return[(...u)=>{const d=Date.now(),p=d-n;p>=s?o(u,d):(r=u,i||(i=setTimeout(()=>{i=null,o(r)},s-p)))},()=>r&&o(r)]}const hl=(t,e,n=3)=>{let s=0;const r=rx(50,250);return ix(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,c=o-s,u=r(c),d=o<=l;s=o;const p={loaded:o,total:l,progress:l?o/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&d?(l-o)/u:void 0,event:i,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(p)},n)},Jm=(t,e)=>{const n=t!=null;return[s=>e[0]({lengthComputable:n,total:t,loaded:s}),e[1]]},Ym=t=>(...e)=>N.asap(()=>t(...e)),ox=jt.hasStandardBrowserEnv?function(){const e=jt.navigator&&/(msie|trident)/i.test(jt.navigator.userAgent),n=document.createElement("a");let s;function r(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return s=r(window.location.href),function(o){const l=N.isString(o)?r(o):o;return l.protocol===s.protocol&&l.host===s.host}}():function(){return function(){return!0}}(),ax=jt.hasStandardBrowserEnv?{write(t,e,n,s,r,i){const o=[t+"="+encodeURIComponent(e)];N.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),N.isString(s)&&o.push("path="+s),N.isString(r)&&o.push("domain="+r),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function lx(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function cx(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function xw(t,e){return t&&!lx(e)?cx(t,e):e}const Xm=t=>t instanceof qt?{...t}:t;function cr(t,e){e=e||{};const n={};function s(u,d,p){return N.isPlainObject(u)&&N.isPlainObject(d)?N.merge.call({caseless:p},u,d):N.isPlainObject(d)?N.merge({},d):N.isArray(d)?d.slice():d}function r(u,d,p){if(N.isUndefined(d)){if(!N.isUndefined(u))return s(void 0,u,p)}else return s(u,d,p)}function i(u,d){if(!N.isUndefined(d))return s(void 0,d)}function o(u,d){if(N.isUndefined(d)){if(!N.isUndefined(u))return s(void 0,u)}else return s(void 0,d)}function l(u,d,p){if(p in e)return s(u,d);if(p in t)return s(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(u,d)=>r(Xm(u),Xm(d),!0)};return N.forEach(Object.keys(Object.assign({},t,e)),function(d){const p=c[d]||r,m=p(t[d],e[d],d);N.isUndefined(m)&&p!==l||(n[d]=m)}),n}const Nw=t=>{const e=cr({},t);let{data:n,withXSRFToken:s,xsrfHeaderName:r,xsrfCookieName:i,headers:o,auth:l}=e;e.headers=o=qt.from(o),e.url=Cw(xw(e.baseURL,e.url),t.params,t.paramsSerializer),l&&o.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let c;if(N.isFormData(n)){if(jt.hasStandardBrowserEnv||jt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((c=o.getContentType())!==!1){const[u,...d]=c?c.split(";").map(p=>p.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...d].join("; "))}}if(jt.hasStandardBrowserEnv&&(s&&N.isFunction(s)&&(s=s(e)),s||s!==!1&&ox(e.url))){const u=r&&i&&ax.read(i);u&&o.set(r,u)}return e},ux=typeof XMLHttpRequest<"u",hx=ux&&function(t){return new Promise(function(n,s){const r=Nw(t);let i=r.data;const o=qt.from(r.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=r,d,p,m,_,b;function P(){_&&_(),b&&b(),r.cancelToken&&r.cancelToken.unsubscribe(d),r.signal&&r.signal.removeEventListener("abort",d)}let S=new XMLHttpRequest;S.open(r.method.toUpperCase(),r.url,!0),S.timeout=r.timeout;function U(){if(!S)return;const F=qt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),ae={data:!l||l==="text"||l==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:F,config:t,request:S};Dw(function(A){n(A),P()},function(A){s(A),P()},ae),S=null}"onloadend"in S?S.onloadend=U:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(U)},S.onabort=function(){S&&(s(new we("Request aborted",we.ECONNABORTED,t,S)),S=null)},S.onerror=function(){s(new we("Network Error",we.ERR_NETWORK,t,S)),S=null},S.ontimeout=function(){let $=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const ae=r.transitional||Pw;r.timeoutErrorMessage&&($=r.timeoutErrorMessage),s(new we($,ae.clarifyTimeoutError?we.ETIMEDOUT:we.ECONNABORTED,t,S)),S=null},i===void 0&&o.setContentType(null),"setRequestHeader"in S&&N.forEach(o.toJSON(),function($,ae){S.setRequestHeader(ae,$)}),N.isUndefined(r.withCredentials)||(S.withCredentials=!!r.withCredentials),l&&l!=="json"&&(S.responseType=r.responseType),u&&([m,b]=hl(u,!0),S.addEventListener("progress",m)),c&&S.upload&&([p,_]=hl(c),S.upload.addEventListener("progress",p),S.upload.addEventListener("loadend",_)),(r.cancelToken||r.signal)&&(d=F=>{S&&(s(!F||F.type?new hi(null,t,S):F),S.abort(),S=null)},r.cancelToken&&r.cancelToken.subscribe(d),r.signal&&(r.signal.aborted?d():r.signal.addEventListener("abort",d)));const M=sx(r.url);if(M&&jt.protocols.indexOf(M)===-1){s(new we("Unsupported protocol "+M+":",we.ERR_BAD_REQUEST,t));return}S.send(i||null)})},dx=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let s=new AbortController,r;const i=function(u){if(!r){r=!0,l();const d=u instanceof Error?u:this.reason;s.abort(d instanceof we?d:new hi(d instanceof Error?d.message:d))}};let o=e&&setTimeout(()=>{o=null,i(new we(`timeout ${e} of ms exceeded`,we.ETIMEDOUT))},e);const l=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),t=null)};t.forEach(u=>u.addEventListener("abort",i));const{signal:c}=s;return c.unsubscribe=()=>N.asap(l),c}},fx=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let s=0,r;for(;s<n;)r=s+e,yield t.slice(s,r),s=r},px=async function*(t,e){for await(const n of mx(t))yield*fx(n,e)},mx=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:s}=await e.read();if(n)break;yield s}}finally{await e.cancel()}},Zm=(t,e,n,s)=>{const r=px(t,e);let i=0,o,l=c=>{o||(o=!0,s&&s(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await r.next();if(u){l(),c.close();return}let p=d.byteLength;if(n){let m=i+=p;n(m)}c.enqueue(new Uint8Array(d))}catch(u){throw l(u),u}},cancel(c){return l(c),r.return()}},{highWaterMark:2})},ic=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Vw=ic&&typeof ReadableStream=="function",gx=ic&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Lw=(t,...e)=>{try{return!!t(...e)}catch{return!1}},_x=Vw&&Lw(()=>{let t=!1;const e=new Request(jt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),eg=64*1024,$u=Vw&&Lw(()=>N.isReadableStream(new Response("").body)),dl={stream:$u&&(t=>t.body)};ic&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!dl[e]&&(dl[e]=N.isFunction(t[e])?n=>n[e]():(n,s)=>{throw new we(`Response type '${e}' is not supported`,we.ERR_NOT_SUPPORT,s)})})})(new Response);const yx=async t=>{if(t==null)return 0;if(N.isBlob(t))return t.size;if(N.isSpecCompliantForm(t))return(await new Request(jt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(N.isArrayBufferView(t)||N.isArrayBuffer(t))return t.byteLength;if(N.isURLSearchParams(t)&&(t=t+""),N.isString(t))return(await gx(t)).byteLength},vx=async(t,e)=>{const n=N.toFiniteNumber(t.getContentLength());return n??yx(e)},wx=ic&&(async t=>{let{url:e,method:n,data:s,signal:r,cancelToken:i,timeout:o,onDownloadProgress:l,onUploadProgress:c,responseType:u,headers:d,withCredentials:p="same-origin",fetchOptions:m}=Nw(t);u=u?(u+"").toLowerCase():"text";let _=dx([r,i&&i.toAbortSignal()],o),b;const P=_&&_.unsubscribe&&(()=>{_.unsubscribe()});let S;try{if(c&&_x&&n!=="get"&&n!=="head"&&(S=await vx(d,s))!==0){let ae=new Request(e,{method:"POST",body:s,duplex:"half"}),de;if(N.isFormData(s)&&(de=ae.headers.get("content-type"))&&d.setContentType(de),ae.body){const[A,w]=Jm(S,hl(Ym(c)));s=Zm(ae.body,eg,A,w)}}N.isString(p)||(p=p?"include":"omit");const U="credentials"in Request.prototype;b=new Request(e,{...m,signal:_,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:s,duplex:"half",credentials:U?p:void 0});let M=await fetch(b);const F=$u&&(u==="stream"||u==="response");if($u&&(l||F&&P)){const ae={};["status","statusText","headers"].forEach(T=>{ae[T]=M[T]});const de=N.toFiniteNumber(M.headers.get("content-length")),[A,w]=l&&Jm(de,hl(Ym(l),!0))||[];M=new Response(Zm(M.body,eg,A,()=>{w&&w(),P&&P()}),ae)}u=u||"text";let $=await dl[N.findKey(dl,u)||"text"](M,t);return!F&&P&&P(),await new Promise((ae,de)=>{Dw(ae,de,{data:$,headers:qt.from(M.headers),status:M.status,statusText:M.statusText,config:t,request:b})})}catch(U){throw P&&P(),U&&U.name==="TypeError"&&/fetch/i.test(U.message)?Object.assign(new we("Network Error",we.ERR_NETWORK,t,b),{cause:U.cause||U}):we.from(U,U&&U.code,t,b)}}),ju={http:VD,xhr:hx,fetch:wx};N.forEach(ju,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const tg=t=>`- ${t}`,Ex=t=>N.isFunction(t)||t===null||t===!1,Mw={getAdapter:t=>{t=N.isArray(t)?t:[t];const{length:e}=t;let n,s;const r={};for(let i=0;i<e;i++){n=t[i];let o;if(s=n,!Ex(n)&&(s=ju[(o=String(n)).toLowerCase()],s===void 0))throw new we(`Unknown adapter '${o}'`);if(s)break;r[o||"#"+i]=s}if(!s){const i=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(tg).join(`
`):" "+tg(i[0]):"as no adapter specified";throw new we("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return s},adapters:ju};function Yc(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new hi(null,t)}function ng(t){return Yc(t),t.headers=qt.from(t.headers),t.data=Jc.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Mw.getAdapter(t.adapter||Bo.adapter)(t).then(function(s){return Yc(t),s.data=Jc.call(t,t.transformResponse,s),s.headers=qt.from(s.headers),s},function(s){return Ow(s)||(Yc(t),s&&s.response&&(s.response.data=Jc.call(t,t.transformResponse,s.response),s.response.headers=qt.from(s.response.headers))),Promise.reject(s)})}const Uw="1.7.7",Sd={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Sd[t]=function(s){return typeof s===t||"a"+(e<1?"n ":" ")+t}});const sg={};Sd.transitional=function(e,n,s){function r(i,o){return"[Axios v"+Uw+"] Transitional option '"+i+"'"+o+(s?". "+s:"")}return(i,o,l)=>{if(e===!1)throw new we(r(o," has been removed"+(n?" in "+n:"")),we.ERR_DEPRECATED);return n&&!sg[o]&&(sg[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,l):!0}};function Tx(t,e,n){if(typeof t!="object")throw new we("options must be an object",we.ERR_BAD_OPTION_VALUE);const s=Object.keys(t);let r=s.length;for(;r-- >0;){const i=s[r],o=e[i];if(o){const l=t[i],c=l===void 0||o(l,i,t);if(c!==!0)throw new we("option "+i+" must be "+c,we.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new we("Unknown option "+i,we.ERR_BAD_OPTION)}}const qu={assertOptions:Tx,validators:Sd},cs=qu.validators;class Xs{constructor(e){this.defaults=e,this.interceptors={request:new Gm,response:new Gm}}async request(e,n){try{return await this._request(e,n)}catch(s){if(s instanceof Error){let r;Error.captureStackTrace?Error.captureStackTrace(r={}):r=new Error;const i=r.stack?r.stack.replace(/^.+\n/,""):"";try{s.stack?i&&!String(s.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+i):s.stack=i}catch{}}throw s}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=cr(this.defaults,n);const{transitional:s,paramsSerializer:r,headers:i}=n;s!==void 0&&qu.assertOptions(s,{silentJSONParsing:cs.transitional(cs.boolean),forcedJSONParsing:cs.transitional(cs.boolean),clarifyTimeoutError:cs.transitional(cs.boolean)},!1),r!=null&&(N.isFunction(r)?n.paramsSerializer={serialize:r}:qu.assertOptions(r,{encode:cs.function,serialize:cs.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&N.merge(i.common,i[n.method]);i&&N.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=qt.concat(o,i);const l=[];let c=!0;this.interceptors.request.forEach(function(P){typeof P.runWhen=="function"&&P.runWhen(n)===!1||(c=c&&P.synchronous,l.unshift(P.fulfilled,P.rejected))});const u=[];this.interceptors.response.forEach(function(P){u.push(P.fulfilled,P.rejected)});let d,p=0,m;if(!c){const b=[ng.bind(this),void 0];for(b.unshift.apply(b,l),b.push.apply(b,u),m=b.length,d=Promise.resolve(n);p<m;)d=d.then(b[p++],b[p++]);return d}m=l.length;let _=n;for(p=0;p<m;){const b=l[p++],P=l[p++];try{_=b(_)}catch(S){P.call(this,S);break}}try{d=ng.call(this,_)}catch(b){return Promise.reject(b)}for(p=0,m=u.length;p<m;)d=d.then(u[p++],u[p++]);return d}getUri(e){e=cr(this.defaults,e);const n=xw(e.baseURL,e.url);return Cw(n,e.params,e.paramsSerializer)}}N.forEach(["delete","get","head","options"],function(e){Xs.prototype[e]=function(n,s){return this.request(cr(s||{},{method:e,url:n,data:(s||{}).data}))}});N.forEach(["post","put","patch"],function(e){function n(s){return function(i,o,l){return this.request(cr(l||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Xs.prototype[e]=n(),Xs.prototype[e+"Form"]=n(!0)});class Cd{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const s=this;this.promise.then(r=>{if(!s._listeners)return;let i=s._listeners.length;for(;i-- >0;)s._listeners[i](r);s._listeners=null}),this.promise.then=r=>{let i;const o=new Promise(l=>{s.subscribe(l),i=l}).then(r);return o.cancel=function(){s.unsubscribe(i)},o},e(function(i,o,l){s.reason||(s.reason=new hi(i,o,l),n(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=s=>{e.abort(s)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Cd(function(r){e=r}),cancel:e}}}function Ix(t){return function(n){return t.apply(null,n)}}function bx(t){return N.isObject(t)&&t.isAxiosError===!0}const Hu={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Hu).forEach(([t,e])=>{Hu[e]=t});function Fw(t){const e=new Xs(t),n=gw(Xs.prototype.request,e);return N.extend(n,Xs.prototype,e,{allOwnKeys:!0}),N.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Fw(cr(t,r))},n}const We=Fw(Bo);We.Axios=Xs;We.CanceledError=hi;We.CancelToken=Cd;We.isCancel=Ow;We.VERSION=Uw;We.toFormData=rc;We.AxiosError=we;We.Cancel=We.CanceledError;We.all=function(e){return Promise.all(e)};We.spread=Ix;We.isAxiosError=bx;We.mergeConfig=cr;We.AxiosHeaders=qt;We.formToJSON=t=>kw(N.isHTMLForm(t)?new FormData(t):t);We.getAdapter=Mw.getAdapter;We.HttpStatusCode=Hu;We.default=We;const Ax={key:0},Rx={class:"page row"},Sx={class:"recipe"},Cx={class:"container-fluid"},Px={class:"row"},kx={class:"col-lg-6 p-0 d-flex"},Ox=["src"],Dx={class:"col-lg-6 p-0 m-auto"},xx={class:"recipe-details"},Nx={class:"recipe-title"},Vx={class:"recipe-score"},Lx={class:"recipe-description"},Mx=["innerHTML"],Ux={class:"recipe-icons"},Fx={class:"instruction-section"},Bx={class:"container-fluid"},$x={class:"row box1"},jx={class:"col-lg-6 ingredient-box"},qx={key:0,class:"recipe-ingredient"},Hx={class:"col-lg-6 m-auto"},Wx={class:"nutrition"},Kx={class:"nutritional-info"},zx={class:"row"},Gx={class:"col"},Qx={class:"recipe-steps box2"},Jx={class:"centered-upload-trigger"},Yx={key:1,class:"no-challenge-message"},Xx={class:"modal-content"},Zx={style:{"font-weight":"bold"}},eN={style:{"font-weight":"bold"}},tN={key:0},nN={class:"mt-2"},sN={key:1},rN=["disabled"],iN=["disabled"],oN={key:3,class:"loading-overlay"},aN={class:"toast-container position-fixed bottom-0 end-0 p-3"},lN={id:"liveToast",class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toastRef"},cN={class:"toast-body"},uN={data(){return{userName:"",userEmail:"",userPoints:"",userStreak:"",userActiveChallenge:"",ingredient:"",documentId:null,recipeImg:"",recipeTitle:"",recipeScore:"",description:"",steps:[],ingredients:[],calories:"",carbs:"",fat:"",protein:"",isModalVisible:!1,caption:"",file:null,currentScore:0,toastMessage:"",isLoading:!1,timeTaken:"",servings:""}},methods:{formatTimestamp(t){return new Date(t.seconds*1e3).toLocaleString()},openModal(){this.isModalVisible=!0},closeModal(){this.isModalVisible=!1},async getUserData(t){try{const e=_t(lt,"user",t),n=await Is(e);if(n.exists()){const s=n.data();this.userName=s.name,this.userEmail=s.email,this.userPoints=s.points,this.userStreak=s.streak,this.userActiveChallenge=s.activeChallenge,this.documentId=t,this.displayActiveChallenge()}else console.log("No such document!")}catch(e){console.error("Error getting user document:",e)}},async displayActiveChallenge(){var t;if(this.userActiveChallenge){const e="https://api.spoonacular.com/recipes",n="afbc0b914dc54eafa85c4f030283b3bf";try{const s=await We.get(`${e}/${this.userActiveChallenge}/information`,{params:{includeNutrition:!1,apiKey:n}}),{data:r}=s;this.recipeTitle=r.title,this.recipeImg=r.image,this.description=r.summary,this.servings=r.servings,this.timeTaken=r.readyInMinutes,this.recipeScore=r.analyzedInstructions.length>0?r.analyzedInstructions[0].steps.length*r.readyInMinutes:r.readyInMinutes,this.steps=((t=r.analyzedInstructions[0])==null?void 0:t.steps)||[];const i=await We.get(`${e}/${this.userActiveChallenge}/ingredientWidget.json`,{params:{apiKey:n}});this.ingredients=i.data.ingredients;const l=(await We.get(`${e}/${this.userActiveChallenge}/nutritionWidget.json`,{params:{apiKey:n}})).data;this.calories=l.calories,this.carbs=l.carbs,this.fat=l.fat,this.protein=l.protein}catch(s){console.error("Error fetching recipe data:",s.message)}}},triggerFileInput(){this.$refs.fileInput.click()},onFileChange(t){const e=t.target.files[0];this.validateAndSetFile(e)},handleDrop(t){const e=t.dataTransfer.files[0];this.validateAndSetFile(e)},validateAndSetFile(t){t&&t.type.startsWith("image/")?this.file=t:alert("Please select a valid image file.")},async completeAndUploadChallenge(){const t=Rs().currentUser;if(!this.file||!this.caption){alert("Please choose a file, and add a caption before completing.");return}this.isLoading=!0;try{const e=Gl(lt,"posts"),s=(await W1(e,{challengeName:this.recipeTitle,challengeScore:this.recipeScore,userId:t.uid,likes:0,caption:this.caption,timestamp:z1(),likedBy:[]})).id,r=ul(xd,`uploads/${t.uid}/${s}`);await nO(r,this.file);const i=await Id(r);if(t){const o=_t(lt,"user",t.uid),l=await Is(o);if(l.exists()){const c=l.data();this.currentScore=Number(c.points)}await Wn(o,{points:this.currentScore+Number(this.recipeScore),activeChallenge:""}),this.toastMessage=`Challenge completed successfully! You have obtained ${this.recipeScore} points.`,this.showBootstrapToast(),this.closeModal(),setTimeout(()=>{this.$router.replace("/profile")},2500)}else alert("User not authenticated.")}catch(e){console.error("Error completing challenge or uploading file:",e),alert("Failed to complete challenge. Please try again.")}finally{this.isLoading=!1}},showBootstrapToast(){const t=this.$refs.toastRef;new bootstrap.Toast(t).show()}},mounted(){ri(jo,t=>{if(!t)$o.push("/login");else{const e=t.uid;this.getUserData(e)}})}},hN=Object.assign(uN,{__name:"MyChallenge",setup(t){return(e,n)=>{const s=ur("router-link");return Z(),ee(qe,null,[n[26]||(n[26]=Sl('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" data-v-63ea5de0><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merienda" data-v-63ea5de0><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" data-v-63ea5de0><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" data-v-63ea5de0><meta name="viewport" content="width=device-width, initial-scale=1.0" data-v-63ea5de0>',5)),e.userActiveChallenge?(Z(),ee("div",Ax,[y("section",Rx,[n[9]||(n[9]=y("section",{class:"heading"},[y("h1",null,"Active Challenge")],-1)),y("section",Sx,[y("div",Cx,[y("div",Px,[y("div",kx,[y("img",{class:"recipe-img",src:e.recipeImg,alt:""},null,8,Ox)]),y("div",Dx,[y("div",xx,[y("div",Nx,[y("p",null,se(e.recipeTitle),1)]),y("div",Vx,[y("p",null,"Score: "+se(e.recipeScore),1)]),y("div",Lx,[y("p",{innerHTML:e.description},null,8,Mx)])])])])])])]),n[16]||(n[16]=y("hr",{class:"break1"},null,-1)),n[17]||(n[17]=y("div",{class:"instructions"},[y("h4",null,"Instructions")],-1)),y("div",Ux,[y("h5",null,[n[10]||(n[10]=y("i",{class:"fa-regular fa-clock"},null,-1)),Ie(" "+se(e.timeTaken)+" mins",1)]),y("h5",null,[n[11]||(n[11]=y("i",{class:"fa-solid fa-utensils"},null,-1)),Ie(" "+se(e.servings)+" servings",1)])]),y("section",Fx,[y("div",Bx,[y("div",$x,[y("div",jx,[e.ingredients&&e.ingredients.length?(Z(),ee("div",qx,[n[13]||(n[13]=y("h3",null,"Ingredients:",-1)),y("ol",null,[(Z(!0),ee(qe,null,un(e.ingredients,(r,i)=>(Z(),ee("li",{key:i},[n[12]||(n[12]=y("i",{class:"fa-solid fa-bread-slice"},null,-1)),Ie(" "+se(r.name),1)]))),128))])])):Oe("",!0)]),y("div",Hx,[y("div",Wx,[n[14]||(n[14]=y("h3",null,"Nutrition Info",-1)),y("div",Kx,[y("p",null,"Calories: "+se(e.calories)+"cal",1),y("p",null,"Carbs: "+se(e.carbs),1),y("p",null,"Fat: "+se(e.fat),1),y("p",null,"Protein: "+se(e.protein),1)])])])]),y("div",zx,[y("div",Gx,[y("div",Qx,[n[15]||(n[15]=y("h3",null,"Recipe Steps:",-1)),y("ol",null,[(Z(!0),ee(qe,null,un(e.steps,(r,i)=>(Z(),ee("li",{key:i},se(i+1)+". "+se(r.step),1))),128))])])])])])]),y("div",Jx,[y("button",{onClick:n[0]||(n[0]=(...r)=>e.openModal&&e.openModal(...r)),class:"open-modal-button"}," Upload Your Image ")])])):(Z(),ee("div",Yx,[y("p",null,[n[19]||(n[19]=Ie("No active challenge! ")),Ee(s,{to:"/start",class:"get-cooking-link"},{default:Ke(()=>n[18]||(n[18]=[Ie("Get to cooking!")])),_:1})])])),e.isModalVisible?(Z(),ee("div",{key:2,class:"modal-overlay",onClick:n[8]||(n[8]=Yi((...r)=>e.closeModal&&e.closeModal(...r),["self"]))},[y("div",Xx,[y("p",null,[n[20]||(n[20]=Ie("Challenge: ")),y("span",Zx,se(e.recipeTitle),1)]),y("p",null,[n[21]||(n[21]=Ie("Score: ")),y("span",eN,se(e.recipeScore),1)]),y("div",{onDragover:n[2]||(n[2]=Yi(()=>{},["prevent"])),onDrop:n[3]||(n[3]=Yi((...r)=>e.handleDrop&&e.handleDrop(...r),["prevent"])),onClick:n[4]||(n[4]=(...r)=>e.triggerFileInput&&e.triggerFileInput(...r)),class:"drop-zone border border-secondary rounded p-4 text-center"},[y("input",{type:"file",onChange:n[1]||(n[1]=(...r)=>e.onFileChange&&e.onFileChange(...r)),ref:"fileInput",class:"file-input",accept:"image/*"},null,544),e.file?(Z(),ee("div",tN,[n[22]||(n[22]=y("i",{class:"fa fa-check-circle fa-3x text-success"},null,-1)),y("p",nN,"File selected: "+se(e.file.name),1)])):(Z(),ee("div",sN,n[23]||(n[23]=[y("i",{class:"fa fa-cloud-upload-alt fa-3x text-secondary upload-icon"},null,-1),y("p",{class:"mt-2"},"Drag and drop an image file here, or click to select",-1)])))],32),zn(y("input",{type:"text","onUpdate:modelValue":n[5]||(n[5]=r=>e.caption=r),placeholder:"Add a catchy caption for your image...",class:"form-control mt-3 caption-input",onKeyup:n[6]||(n[6]=v_((...r)=>e.completeAndUploadChallenge&&e.completeAndUploadChallenge(...r),["enter"])),disabled:!e.file},null,40,rN),[[vs,e.caption]]),y("button",{onClick:n[7]||(n[7]=(...r)=>e.completeAndUploadChallenge&&e.completeAndUploadChallenge(...r)),disabled:!e.file||!e.caption,class:"upload-button btn btn-primary mt-3"}," Post your cooking! ",8,iN)])])):Oe("",!0),e.isLoading?(Z(),ee("div",oN,n[24]||(n[24]=[y("div",{class:"loading-spinner"},null,-1),y("p",null,"We are cooking, please wait...",-1)]))):Oe("",!0),y("div",aN,[y("div",lN,[n[25]||(n[25]=y("div",{class:"toast-header"},[y("strong",{class:"me-auto"},"Challenge Completed!"),y("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1)),y("div",cN,se(e.toastMessage),1)],512)])],64)}}}),dN=Ms(hN,[["__scopeId","data-v-63ea5de0"]]);kt(null);const fN={class:"page"},pN={class:"heading row"},mN={class:"ingredients"},gN={class:"type-ingredient"},_N={class:"suggested-ingredient"},yN={key:0},vN=["onClick"],wN={class:"selected-ingredient"},EN={key:0},TN={class:"sel-ingredients"},IN=["onClick"],bN={id:"recipe-list"},AN={key:0},RN={key:1},SN=["onClick"],CN=["src","alt"],PN={class:"recipe-content"},kN={class:"recipe-score"},ON={class:"modal-content"},DN=["src"],xN={class:"toast-container position-fixed bottom-0 end-0 p-3"},NN={id:"liveToast",class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toastRef"},VN={class:"toast-body"},LN={data(){return{isLoggedIn:!1,typedIngredient:"",selectedIngredients:[],suggestedIngredients:[],fetchIngredientsTimer:null,apiKey:"afbc0b914dc54eafa85c4f030283b3bf",numberOfRecipes:10,recipes:[],documentId:null,loadingData:!0,isModalVisible:!1,selectedRecipe:{},uid:null,selectedChallenge:null,toast:null,stepsIngredient:null}},computed:{},methods:{openModal(t){this.selectedRecipe=t,this.isModalVisible=!0,document.body.style.overflow="hidden"},closeModal(){this.isModalVisible=!1,this.selectedRecipe={},document.body.style.overflow=""},showToast(){this.toast&&this.toast.show()},calcScore(t){var e,n,s;return(t.readyInMinutes||1)*(((s=(n=(e=t.analyzedInstructions)==null?void 0:e[0])==null?void 0:n.steps)==null?void 0:s.length)??1)},async stepsCalc(t){We.get("https://api.spoonacular.com/recipes/"+t.id+"/ingredientWidget.json?apiKey="+this.apiKey).then(e=>{this.stepsIngredient=e.data.ingredients,console.log(this.stepsIngredient)}).catch(e=>{console.log(e.message)})},async addChallenge(t){console.log(this.uid),console.log(t),this.selectedChallenge=t.title;try{const e=_t(lt,"user",this.uid);await Wn(e,{activeChallenge:t.id}),console.log("UPDATED"),this.showToast()}catch(e){console.log(e)}this.closeModal()},fetchIngredientsDebounced(){clearTimeout(this.fetchIngredientsTimer),this.fetchIngredientsTimer=setTimeout(()=>{this.fetchIngredients()},500)},fetchIngredients(){if(this.typedIngredient.length>1){const t=`https://api.spoonacular.com/food/ingredients/autocomplete?query=${this.typedIngredient}&number=15&apiKey=${this.apiKey}`;We.get(t).then(e=>{this.suggestedIngredients=e.data}).catch(e=>{console.log(e.message)})}},async selectIngredient(t){if(this.uid)try{const e=_t(lt,"ingredients",this.uid);await Wn(e,{ingredient:Yv(t.name)}),this.selectedIngredients.push(t.name),this.typedIngredient="",this.suggestedIngredients=[],console.log("Ingredient added: ",t)}catch(e){console.error("Error adding ingredient: ",e)}else console.error("No document ID found.")},async removeIngredient(t,e){const n=_t(lt,"ingredients",this.uid);try{await Wn(n,{ingredient:Xv(t)}),this.selectedIngredients.splice(e,1),console.log(`${t} removed successfully!`)}catch(s){console.error("Error removing ingredient:",s)}},fetchRecipes(){const t=`https://api.spoonacular.com/recipes/complexSearch?sort=popularity&number=${this.numberOfRecipes}&addRecipeInformation=true&addRecipeInstructions=true&includeIngredients=${this.selectedIngredients.join(",")}&addRecipeNutrition=true&instructionsRequired=true&apiKey=${this.apiKey}`;We.get(t).then(e=>{this.recipes=e.data.results,console.log(e.data)}).catch(e=>{console.log(e.message)})},async getDocumentId(){try{if(this.uid){const t=_t(lt,"ingredients",this.uid),e=await Is(t);if(e.exists()){const n=e.data();this.loadingData=!0,this.selectedIngredients=n.ingredient||[],this.loadingData=!1}else console.log("No ingredients document found for the provided documentId.")}}catch(t){console.error("Error getting document ID: ",t)}},clearInput(){this.typedIngredient=""}},watch:{selectedIngredients:{handler(){this.loadingData||this.fetchRecipes()},deep:!0,immediate:!0}},mounted(){ri(jo,e=>{e?(this.uid=e.uid,console.log("User is logged in with UID:",this.uid),this.getDocumentId()):(this.uid=null,console.log("User is not logged in."))});const t=this.$refs.toastRef;t&&(this.toast=new bootstrap.Toast(t))}},MN=Object.assign(LN,{__name:"Start",setup(t){return(e,n)=>{const s=ur("router-link");return Z(),ee(qe,null,[n[15]||(n[15]=Sl('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" data-v-2d6df15d><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Merienda" data-v-2d6df15d><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" data-v-2d6df15d><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" data-v-2d6df15d><meta name="viewport" content="width=device-width, initial-scale=1.0" data-v-2d6df15d>',5)),y("section",fN,[y("section",pN,[n[7]||(n[7]=y("h1",null,"Challenges",-1)),y("section",mN,[y("div",gN,[n[6]||(n[6]=y("span",{class:"search-icon",style:{"font-family":"Outfit, FontAwesome"}},"",-1)),zn(y("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>e.typedIngredient=r),onInput:n[1]||(n[1]=(...r)=>e.fetchIngredientsDebounced&&e.fetchIngredientsDebounced(...r)),id:"ingredient-input",type:"text",placeholder:"Enter Your Ingredient",style:{"font-family":"Outfit, FontAwesome"}},null,544),[[vs,e.typedIngredient]]),y("span",null,[e.typedIngredient?(Z(),ee("button",{key:0,class:"clear-button",onClick:n[2]||(n[2]=(...r)=>e.clearInput&&e.clearInput(...r)),style:{"font-family":"Outfit, FontAwesome"}},"")):Oe("",!0)])]),y("div",_N,[e.suggestedIngredients.length&&e.typedIngredient?(Z(),ee("ul",yN,[(Z(!0),ee(qe,null,un(e.suggestedIngredients,(r,i)=>(Z(),ee("li",{key:i,onClick:o=>e.selectIngredient(r)},se(r.name),9,vN))),128))])):Oe("",!0)]),y("div",wN,[e.selectedIngredients.length?(Z(),ee("div",EN,[y("div",TN,[y("ul",null,[(Z(!0),ee(qe,null,un(e.selectedIngredients,(r,i)=>(Z(),ee("li",{key:i},[Ie(se(r)+" ",1),y("button",{onClick:o=>e.removeIngredient(r,i)},"X",8,IN)]))),128))])])])):Oe("",!0)])])]),y("div",bN,[e.selectedIngredients.length>0?(Z(),ee("h1",AN,"Your suggested recipes!")):(Z(),ee("h1",RN,"Trending Recipes!")),(Z(!0),ee(qe,null,un(e.recipes,r=>(Z(),ee("div",{key:r.id,class:"recipe",onClick:i=>{e.openModal(r),e.stepsCalc(r)}},[y("img",{src:r.image,alt:r.title,class:"image-container-wrapper"},null,8,CN),y("div",PN,[y("h3",null,se(r.title),1),n[10]||(n[10]=y("p",null,null,-1)),y("div",kN,[n[8]||(n[8]=y("h4",null,"Score",-1)),y("p",null,se(e.calcScore(r)),1)]),y("div",null,[n[9]||(n[9]=y("h4",null,"Nutritional Information",-1)),y("p",null,"Calories: "+se(r.nutrition.nutrients[0].amount)+"cal",1),y("p",null,"Fat: "+se(r.nutrition.nutrients[1].amount)+"g",1),y("p",null,"Carbohydrates: "+se(r.nutrition.nutrients[3].amount)+"g",1),y("p",null,"Protein: "+se(r.nutrition.nutrients[10].amount)+"g",1)])])],8,SN))),128))]),e.isModalVisible?(Z(),ee("div",{key:0,class:"modal-overlay",onClick:n[5]||(n[5]=Yi((...r)=>e.closeModal&&e.closeModal(...r),["self"]))},[y("div",ON,[y("h3",null,se(e.selectedRecipe.title),1),y("img",{src:e.selectedRecipe.image,alt:"Recipe image"},null,8,DN),y("p",null,se(e.selectedRecipe.description),1),y("p",null,"Calories: "+se(e.selectedRecipe.nutrition.nutrients[0].amount)+"cal",1),y("p",null,"Fat: "+se(e.selectedRecipe.nutrition.nutrients[1].amount)+"g",1),y("p",null,"Carbohydrates: "+se(e.selectedRecipe.nutrition.nutrients[3].amount)+"g",1),y("p",null,"Protein: "+se(e.selectedRecipe.nutrition.nutrients[10].amount)+"g",1),y("ul",null,[n[11]||(n[11]=Ie("Ingredients Required: ")),(Z(!0),ee(qe,null,un(e.stepsIngredient,(r,i)=>(Z(),ee("li",{key:i},se(i+1+") "+r.name.charAt(0).toUpperCase()+r.name.slice(1)),1))),128))]),y("button",{onClick:n[3]||(n[3]=(...r)=>e.closeModal&&e.closeModal(...r)),style:{"background-color":"rgb(255, 157, 101)","font-weight":"700"}},"Close"),y("button",{onClick:n[4]||(n[4]=r=>e.addChallenge(e.selectedRecipe)),style:{"background-color":"#cc7e51","font-weight":"700"}},"Start Challenge!")])])):Oe("",!0),y("div",xN,[y("div",NN,[n[14]||(n[14]=y("div",{class:"toast-header"},[y("strong",{class:"me-auto"},"Challenge Added!"),y("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"})],-1)),y("div",VN,[Ie(" Successfully added "+se(e.selectedChallenge)+"! Click ",1),Ee(s,{to:"/mychallenge"},{default:Ke(()=>n[12]||(n[12]=[Ie("here")])),_:1}),n[13]||(n[13]=Ie(" to view the details! "))])],512)])])],64)}}}),UN=Ms(MN,[["__scopeId","data-v-2d6df15d"]]),FN={name:"Leaderboard",setup(){const t=kt([]);let e=kt(0);const n=async()=>{try{const r=Gl(lt,"user"),i=hd(r,md("points","desc")),o=await gd(i);t.value=o.docs.map(l=>({...l.data(),ingredientId:l.id})),e.value=Math.max(...t.value.slice(0,5).map(l=>l.points))}catch(r){console.error("Error fetching users:",r)}},s=r=>{if(!e.value)return 40;const i=20,o=60,l=i+r/e.value*(o-i);return Math.min(Math.max(l,i),o)};return Ao(()=>{n()}),{users:t,calculateHeight:s}}},BN={class:"leaderboard-container"},$N={class:"bg-white/99 flex items-center justify-center h-[75vh]"},jN={class:"flex items-end justify-center space-x-2 p-6"},qN={class:"text-lg font-semibold"},HN={class:"text-sm"},WN={class:"text-lg font-semibold"},KN={class:"text-sm"},zN={class:"text-lg font-semibold"},GN={class:"text-sm"},QN={class:"text-lg font-semibold"},JN={class:"text-sm"},YN={class:"text-lg font-semibold"},XN={class:"text-sm"},ZN={class:"leaderboard-table mt-5 mx-auto max-w-xl p-4"};function eV(t,e,n,s,r,i){return Z(),ee(qe,null,[e[7]||(e[7]=y("link",{href:"https://fonts.googleapis.com/css2?family=VT323&display=swap",rel:"stylesheet"},null,-1)),y("div",BN,[e[6]||(e[6]=y("h1",{id:"title",class:"game-title animate-glow"},"🏆 Leaderboard 🏆",-1)),y("div",$N,[y("div",jN,[s.users[3]?(Z(),ee("div",{key:0,id:"fourth",class:"podium bg-red-200 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl",style:Bn({height:`${s.calculateHeight(s.users[3].points)}vh`})},[e[0]||(e[0]=y("div",{class:"text-2xl font-bold"},"4",-1)),y("div",qN,se(s.users[3].name),1),y("div",HN,se(s.users[3].points),1)],4)):Oe("",!0),s.users[1]?(Z(),ee("div",{key:1,id:"second",class:"podium bg-red-300 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl",style:Bn({height:`${s.calculateHeight(s.users[1].points)}vh`})},[e[1]||(e[1]=y("div",{class:"text-2xl font-bold"},"2",-1)),y("div",WN,se(s.users[1].name),1),y("div",KN,se(s.users[1].points),1)],4)):Oe("",!0),s.users[0]?(Z(),ee("div",{key:2,id:"first",class:"podium bg-red-400 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl",style:Bn({height:`${s.calculateHeight(s.users[0].points)}vh`})},[e[2]||(e[2]=y("div",{class:"text-3xl font-bold"},"1",-1)),y("div",zN,se(s.users[0].name),1),y("div",GN,se(s.users[0].points),1)],4)):Oe("",!0),s.users[2]?(Z(),ee("div",{key:3,id:"third",class:"podium bg-red-300 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl",style:Bn({height:`${s.calculateHeight(s.users[2].points)}vh`})},[e[3]||(e[3]=y("div",{class:"text-2xl font-bold"},"3",-1)),y("div",QN,se(s.users[2].name),1),y("div",JN,se(s.users[2].points),1)],4)):Oe("",!0),s.users[4]?(Z(),ee("div",{key:4,id:"fifth",class:"podium bg-red-200 text-gray-800 rounded-lg text-center w-32 flex flex-col items-center justify-center shadow-xl",style:Bn({height:`${s.calculateHeight(s.users[4].points)}vh`})},[e[4]||(e[4]=y("div",{class:"text-2xl font-bold"},"5",-1)),y("div",YN,se(s.users[4].name),1),y("div",XN,se(s.users[4].points),1)],4)):Oe("",!0)])]),y("div",ZN,[e[5]||(e[5]=y("div",{class:"table-header grid grid-cols-3 gap-4 text-white bg-red-400 p-4 rounded-lg text-center mb-2"},[y("div",null,"Rank"),y("div",null,"Name"),y("div",null,"Total Points")],-1)),(Z(!0),ee(qe,null,un(s.users.slice(5,15),(o,l)=>(Z(),ee("div",{key:o.ingredientId,class:ni(["table-row grid grid-cols-3 gap-4 p-4 rounded-lg mb-2 text-center shadow-md",l%2===0?"bg-red-300 text-gray-800":"bg-red-400 text-white"])},[y("div",null,se(l+6),1),y("div",null,se(o.name),1),y("div",null,se(o.points),1)],2))),128))])])],64)}const tV=Ms(FN,[["render",eV],["__scopeId","data-v-395c2411"]]),Bw=t=>Array.isArray(t),$w=t=>Bw(t)?t:[t];let nV=function(t){let e=function(b){return $w(b).forEach(P=>{var S;return _.set(Symbol((S=P.char)==null?void 0:S.innerText),r({...P}))}),this},n=()=>c().filter(b=>b.typeable),s=function(b,P){let S=[..._.keys()];_.set(S[b],r(P))},r=b=>(b.shouldPauseCursor=function(){return!!(this.typeable||this.cursorable||this.deletable)},b),i=function(){_.forEach(b=>delete b.done)},o=function(){_=new Map,e(t)},l=()=>_,c=()=>Array.from(_.values()),u=b=>_.delete(b),d=()=>{const b=[];for(let[,P]of l())P.done||b.push(P);return b},p=(b=!1)=>b?c():c().filter(P=>!P.done),m=(b,P=!1)=>P?_.delete(b):_.get(b).done=!0,_=new Map;return e(t),{add:e,set:s,wipe:o,done:m,reset:i,destroy:u,getItems:p,getQueue:l,getTypeable:n,getPendingQueueItems:d}};const jw="data-typeit-id",Zs="ti-cursor",sV="END",rV={started:!1,completed:!1,frozen:!1,destroyed:!1},xr={breakLines:!0,cursor:{autoPause:!0,autoPauseDelay:500,animation:{frames:[0,0,1].map(t=>({opacity:t})),options:{iterations:1/0,easing:"steps(2, start)",fill:"forwards"}}},cursorChar:"|",cursorSpeed:1e3,deleteSpeed:null,html:!0,lifeLike:!0,loop:!1,loopDelay:750,nextStringDelay:750,speed:100,startDelay:250,startDelete:!1,strings:[],waitUntilVisible:!1,beforeString:()=>{},afterString:()=>{},beforeStep:()=>{},afterStep:()=>{},afterComplete:()=>{}},iV=`[${jw}]:before {content: '.'; display: inline-block; width: 0; visibility: hidden;}`,Va=t=>document.createElement(t),Pd=t=>document.createTextNode(t),qw=(t,e="")=>{let n=Va("style");n.id=e,n.appendChild(Pd(t)),document.head.appendChild(n)},rg=t=>(Bw(t)||(t=[t/2,t/2]),t),ig=(t,e)=>Math.abs(Math.random()*(t+e-(t-e))+(t-e));let og=t=>t/2;function oV(t){let{speed:e,deleteSpeed:n,lifeLike:s}=t;return n=n!==null?n:e/3,s?[ig(e,og(e)),ig(n,og(n))]:[e,n]}const Hw=t=>Array.from(t);let kd=t=>([...t.childNodes].forEach(e=>{if(e.nodeValue){[...e.nodeValue].forEach(n=>{e.parentNode.insertBefore(Pd(n),e)}),e.remove();return}kd(e)}),t);const Ww=t=>{let e=document.implementation.createHTMLDocument();return e.body.innerHTML=t,kd(e.body)};function Kw(t,e=!1,n=!1){let s=t.querySelector(`.${Zs}`),r=document.createTreeWalker(t,NodeFilter.SHOW_ALL,{acceptNode:l=>{var c,u;if(s&&n){if((c=l.classList)!=null&&c.contains(Zs))return NodeFilter.FILTER_ACCEPT;if(s.contains(l))return NodeFilter.FILTER_REJECT}return(u=l.classList)!=null&&u.contains(Zs)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),i,o=[];for(;i=r.nextNode();)i.originalParent||(i.originalParent=i.parentNode),o.push(i);return e?o.reverse():o}function aV(t){return Kw(Ww(t))}function lV(t,e=!0){return e?aV(t):Hw(t).map(Pd)}const cV=({index:t,newIndex:e,queueItems:n,cleanUp:s})=>{for(let r=t+1;r<e+1;r++)s(n[r][0])},zw=t=>Number.isInteger(t),ag=({queueItems:t,selector:e,cursorPosition:n,to:s})=>{if(zw(e))return e*-1;let r=new RegExp(sV,"i").test(s),i=e?[...t].reverse().findIndex(({char:l})=>{let c=l.parentElement,u=c.matches(e);return r&&u?!0:u&&c.firstChild.isSameNode(l)}):-1;i<0&&(i=r?0:t.length-1);let o=r?0:1;return i-n+o},uV=t=>(t.forEach(clearTimeout),[]),_a=(t,e)=>new Array(e).fill(t);let fl=t=>new Promise(e=>{requestAnimationFrame(async()=>{e(await t())})}),Gw=t=>t==null?void 0:t.getAnimations().find(e=>e.id===t.dataset.tiAnimationId),Qw=({cursor:t,frames:e,options:n})=>{let s=t.animate(e,n);return s.pause(),s.id=t.dataset.tiAnimationId,fl(()=>{fl(()=>{s.play()})}),s},hV=({cursor:t,options:e,cursorOptions:n})=>{if(!t||!n)return;let s=Gw(t),r;s&&(e.delay=s.effect.getComputedTiming().delay,r=s.currentTime,s.cancel());let i=Qw({cursor:t,frames:n.animation.frames,options:e});return r&&(i.currentTime=r),i},lg=t=>{var e;return(e=t.func)==null?void 0:e.call(null)},dV=async({index:t,queueItems:e,wait:n,cursor:s,cursorOptions:r})=>{let i=e[t][1],o=[],l=t,c=i,u=()=>c&&!c.delay,d=i.shouldPauseCursor()&&r.autoPause;for(;u();)o.push(c),u()&&l++,c=e[l]?e[l][1]:null;if(o.length)return await fl(async()=>{for(let _ of o)await lg(_)}),l-1;let p=Gw(s),m;return p&&(m={...p.effect.getComputedTiming(),delay:d?r.autoPauseDelay:0}),await n(async()=>{p&&d&&p.cancel(),await fl(()=>{lg(i)})},i.delay),await hV({cursor:s,options:m,cursorOptions:r}),t};const fV=(t,e)=>{new IntersectionObserver((s,r)=>{s.forEach(i=>{i.isIntersecting&&(e(),r.unobserve(t))})},{threshold:1}).observe(t)},pV=()=>Math.random().toString().substring(2,9),pl=t=>"value"in t;let mV=t=>pl(t)?Hw(t.value):Kw(t,!0).filter(e=>!(e.childNodes.length>0)),Ar=t=>typeof t=="function"?t():t,Od=(t,e=document,n=!1)=>e[`querySelector${n?"All":""}`](t),gV=t=>/body/i.test(t==null?void 0:t.tagName),_V=(t,e)=>{if(pl(t)){t.value=`${t.value}${e.textContent}`;return}e.innerHTML="";let n=gV(e.originalParent)?t:e.originalParent||t,s=Od("."+Zs,n)||null;s&&s.parentElement!==n&&(n=s.parentElement),n.insertBefore(e,s)};const yV=t=>/<(.+)>(.*?)<\/(.+)>/.test(t.outerHTML),Ui=(t,e)=>Object.assign({},t,e);let vV=t=>{var e,n;if(typeof t=="object"){let s={},{frames:r,options:i}=xr.cursor.animation;return s.animation=t.animation||{},s.animation.frames=((e=t.animation)==null?void 0:e.frames)||r,s.animation.options=Ui(i,((n=t.animation)==null?void 0:n.options)||{}),s.autoPause=t.autoPause??xr.cursor.autoPause,s.autoPauseDelay=t.autoPauseDelay||xr.cursor.autoPauseDelay,s}return t===!0?xr.cursor:t};const wV=(t,e)=>{if(!t)return;let n=t.parentNode;(n.childNodes.length>1||n.isSameNode(e)?t:n).remove()},EV=(t,e,n)=>{let s=e[n-1],r=Od(`.${Zs}`,t);t=(s==null?void 0:s.parentNode)||t,t.insertBefore(r,s||null)};function TV(t){return typeof t=="string"?Od(t):t}let IV={"font-family":"","font-weight":"","font-size":"","font-style":"","line-height":"",color:"",transform:"translateX(-.125em)"},bV=(t,e)=>{let s=`${`[${jw}='${t}']`} .${Zs}`,r=getComputedStyle(e),i=Object.entries(IV).reduce((o,[l,c])=>`${o} ${l}: var(--ti-cursor-${l}, ${c||r[l]});`,"");qw(`${s} { display: inline-block; width: 0; ${i} }`,t)};function AV(t){return t.replace(/<!--(.+?)-->/g,"").trim().split(/<br(?:\s*?)(?:\/)?>/)}let RV=(t,e,n)=>Math.min(Math.max(e+t,0),n.length),SV=(t,e,n)=>new Promise(s=>{let r=async()=>{await t(),s()};n.push(setTimeout(r,e||0))});var H,Jw,Fi,Wu,Yw,Ku,zu,Gu,La,Mn,Xw,Bi,$i,Zw,ml,eE,tE,Qu,Ma,ji,Ua,Ks,qi,Hi,Ju,Un;class CV{constructor(e,n={}){wc(this,H);Kt(this,"element");Kt(this,"timeouts");Kt(this,"cursorPosition");Kt(this,"predictedCursorPosition");Kt(this,"statuses",{started:!1,completed:!1,frozen:!1,destroyed:!1,firing:!1});Kt(this,"opts");Kt(this,"id");Kt(this,"queue");Kt(this,"cursor");Kt(this,"flushCallback",null);Kt(this,"unfreeze",()=>{});Kt(this,"is",function(e){return this.statuses[e]});wc(this,ml,e=>{this.opts.cursor=vV(e.cursor??xr.cursor),this.opts.strings=ce(this,H,eE).call(this,$w(this.opts.strings)),this.opts=Ui(this.opts,{html:!it(this,H,Hi)&&this.opts.html,nextStringDelay:rg(this.opts.nextStringDelay),loopDelay:rg(this.opts.loopDelay)})});this.opts=Ui(xr,n),this.element=TV(e),this.timeouts=[],this.cursorPosition=0,this.unfreeze=()=>{},this.predictedCursorPosition=null,this.statuses=Ui({},rV),this.id=pV(),this.queue=nV([{delay:this.opts.startDelay}]),it(this,ml).call(this,n),this.cursor=ce(this,H,tE).call(this),this.element.dataset.typeitId=this.id,qw(iV),this.opts.strings.length&&ce(this,H,Zw).call(this)}go(){return this.statuses.started?this:(ce(this,H,Gu).call(this),this.opts.waitUntilVisible?(fV(this.element,ce(this,H,Fi).bind(this)),this):(ce(this,H,Fi).call(this),this))}destroy(e=!0){this.timeouts=uV(this.timeouts),Ar(e)&&this.cursor&&ce(this,H,Ua).call(this,this.cursor),this.statuses.destroyed=!0}reset(e){!this.is("destroyed")&&this.destroy(),e?(this.queue.wipe(),e(this)):this.queue.reset(),this.cursorPosition=0;for(let n in this.statuses)this.statuses[n]=!1;return this.element[ce(this,H,La).call(this)?"value":"innerHTML"]="",this}type(e,n={}){e=Ar(e);let{instant:s}=n,r=ce(this,H,Bi).call(this,n),o=lV(e,this.opts.html).map(c=>({func:()=>ce(this,H,Ma).call(this,c),char:c,delay:s||yV(c)?0:ce(this,H,Ks).call(this),typeable:c.nodeType===Node.TEXT_NODE})),l=[r[0],{func:async()=>await this.opts.beforeString(e,this)},...o,{func:async()=>await this.opts.afterString(e,this)},r[1]];return ce(this,H,Mn).call(this,l,n)}break(e={}){return ce(this,H,Mn).call(this,{func:()=>ce(this,H,Ma).call(this,Va("BR")),typeable:!0},e)}move(e,n={}){e=Ar(e);let s=ce(this,H,Bi).call(this,n),{instant:r,to:i}=n,o=ag({queueItems:this.queue.getTypeable(),selector:e===null?"":e,to:i,cursorPosition:it(this,H,qi)}),l=o<0?-1:1;return this.predictedCursorPosition=it(this,H,qi)+o,ce(this,H,Mn).call(this,[s[0],..._a({func:()=>ce(this,H,Wu).call(this,l),delay:r?0:ce(this,H,Ks).call(this),cursorable:!0},Math.abs(o)),s[1]],n)}exec(e,n={}){let s=ce(this,H,Bi).call(this,n);return ce(this,H,Mn).call(this,[s[0],{func:()=>e(this)},s[1]],n)}options(e,n={}){return e=Ar(e),ce(this,H,$i).call(this,e),ce(this,H,Mn).call(this,{},n)}pause(e,n={}){return ce(this,H,Mn).call(this,{delay:Ar(e)},n)}delete(e=null,n={}){e=Ar(e);let s=ce(this,H,Bi).call(this,n),r=e,{instant:i,to:o}=n,l=this.queue.getTypeable(),c=r===null?l.length:zw(r)?r:ag({queueItems:l,selector:r,cursorPosition:it(this,H,qi),to:o});return ce(this,H,Mn).call(this,[s[0],..._a({func:ce(this,H,ji).bind(this),delay:i?0:ce(this,H,Ks).call(this,1),deletable:!0},c),s[1]],n)}freeze(){this.statuses.frozen=!0}flush(e=null){return this.flushCallback=e||this.flushCallback,this.statuses.firing?this:(ce(this,H,Gu).call(this),ce(this,H,Fi).call(this,!1).then(()=>{if(this.queue.getPendingQueueItems().length>0)return this.flush();this.flushCallback(),this.flushCallback=null}),this)}getQueue(){return this.queue}getOptions(){return this.opts}updateOptions(e){return ce(this,H,$i).call(this,e)}getElement(){return this.element}empty(e={}){return ce(this,H,Mn).call(this,{func:ce(this,H,Jw).bind(this)},e)}}H=new WeakSet,Jw=async function(){if(ce(this,H,La).call(this)){this.element.value="";return}it(this,H,Un).forEach(ce(this,H,Ua).bind(this))},Fi=async function(e=!0){this.statuses.started=!0,this.statuses.firing=!0;let n=s=>{this.queue.done(s,!e)};try{let s=[...this.queue.getQueue()];for(let i=0;i<s.length;i++){let[o,l]=s[i];if(!l.done){if(!l.deletable||l.deletable&&it(this,H,Un).length){let c=await ce(this,H,Ku).call(this,i,s);cV({index:i,newIndex:c,queueItems:s,cleanUp:n}),i=c}n(o)}}if(!e)return this.statuses.firing=!1,this;if(this.statuses.completed=!0,this.statuses.firing=!1,await this.opts.afterComplete(this),!this.opts.loop)throw"";let r=this.opts.loopDelay;ce(this,H,zu).call(this,async()=>{await ce(this,H,Yw).call(this,r[0]),ce(this,H,Fi).call(this)},r[1])}catch{}return this.statuses.firing=!1,this},Wu=async function(e){this.cursorPosition=RV(e,this.cursorPosition,it(this,H,Un)),EV(this.element,it(this,H,Un),this.cursorPosition)},Yw=async function(e){let n=it(this,H,qi);n&&await ce(this,H,Wu).call(this,{value:n});let s=it(this,H,Un).map(r=>[Symbol(),{func:ce(this,H,ji).bind(this),delay:ce(this,H,Ks).call(this,1),deletable:!0,shouldPauseCursor:()=>!0}]);for(let r=0;r<s.length;r++)await ce(this,H,Ku).call(this,r,s);this.queue.reset(),this.queue.set(0,{delay:e})},Ku=function(e,n){return dV({index:e,queueItems:n,wait:ce(this,H,zu).bind(this),cursor:this.cursor,cursorOptions:this.opts.cursor})},zu=async function(e,n,s=!1){this.statuses.frozen&&await new Promise(r=>{this.unfreeze=()=>{this.statuses.frozen=!1,r()}}),s||await this.opts.beforeStep(this),await SV(e,n,this.timeouts),s||await this.opts.afterStep(this)},Gu=async function(){if(!ce(this,H,La).call(this)&&this.cursor&&this.element.appendChild(this.cursor),it(this,H,Ju)){bV(this.id,this.element),this.cursor.dataset.tiAnimationId=this.id;let{animation:e}=this.opts.cursor,{frames:n,options:s}=e;Qw({frames:n,cursor:this.cursor,options:{duration:this.opts.cursorSpeed,...s}})}},La=function(){return pl(this.element)},Mn=function(e,n){return this.queue.add(e),ce(this,H,Xw).call(this,n),this},Xw=function(e={}){let n=e.delay;n&&this.queue.add({delay:n})},Bi=function(e={}){return[{func:()=>ce(this,H,$i).call(this,e)},{func:()=>ce(this,H,$i).call(this,this.opts)}]},$i=async function(e){this.opts=Ui(this.opts,e)},Zw=function(){let e=this.opts.strings.filter(n=>!!n);e.forEach((n,s)=>{if(this.type(n),s+1===e.length)return;let r=this.opts.breakLines?[{func:()=>ce(this,H,Ma).call(this,Va("BR")),typeable:!0}]:_a({func:ce(this,H,ji).bind(this),delay:ce(this,H,Ks).call(this,1)},this.queue.getTypeable().length);ce(this,H,Qu).call(this,r)})},ml=new WeakMap,eE=function(e){let n=this.element.innerHTML;return n?(this.element.innerHTML="",this.opts.startDelete?(this.element.innerHTML=n,kd(this.element),ce(this,H,Qu).call(this,_a({func:ce(this,H,ji).bind(this),delay:ce(this,H,Ks).call(this,1),deletable:!0},it(this,H,Un).length)),e):AV(n).concat(e)):e},tE=function(){if(it(this,H,Hi))return null;let e=Va("span");return e.className=Zs,it(this,H,Ju)?(e.innerHTML=Ww(this.opts.cursorChar).innerHTML,e):(e.style.visibility="hidden",e)},Qu=function(e){let n=this.opts.nextStringDelay;this.queue.add([{delay:n[0]},...e,{delay:n[1]}])},Ma=function(e){_V(this.element,e)},ji=function(){it(this,H,Un).length&&(it(this,H,Hi)?this.element.value=this.element.value.slice(0,-1):ce(this,H,Ua).call(this,it(this,H,Un)[this.cursorPosition]))},Ua=function(e){wV(e,this.element)},Ks=function(e=0){return oV(this.opts)[e]},qi=function(){return this.predictedCursorPosition??this.cursorPosition},Hi=function(){return pl(this.element)},Ju=function(){return!!this.opts.cursor&&!it(this,H,Hi)},Un=function(){return mV(this.element)};const PV={data(){return{file:null,caption:"",recipeTitle:"",selectedChallenge:"",recipeImg:"",recipeScore:"",description:"",steps:[],ingredients:[],currentScore:0,userid:"",apiKey:"3b4bc382f3b948ed811574383e4234c6",posts:[],displayPosts:[]}},methods:{formatTimestamp(t){return new Date(t.seconds*1e3).toLocaleString()},async likePost(t){const e=_t(lt,"posts",t.id),n=_t(lt,"user",t.userId),s=await Is(n);if(t.isLikedByUser){if(await Wn(e,{likes:t.likes-1,likedBy:Xv(this.userid)}),s.exists())var r=s.data().points;else console.log("No such document!");await Wn(n,{points:r-10}),t.likes-=1,t.isLikedByUser=!1}else{const i=_t(lt,"user",t.userId),o=await Is(i);if(await Wn(e,{likes:t.likes+1,likedBy:Yv(this.userid)}),o.exists())var r=o.data().points;else console.log("No such document!");await Wn(i,{points:r+10}),t.likes+=1,t.isLikedByUser=!0}},async fetchPosts(){const t=Gl(lt,"posts"),e=hd(t,md("timestamp","desc"));try{const n=await gd(e),s=await Promise.all(n.docs.map(async r=>{const i=r.data(),o=r.id,l=i.userId,c=ul(xd,`uploads/${l}/${o}`),u=await Id(c);return{id:o,...i,imageUrl:u,isLikedByUser:i.likedBy&&i.likedBy.includes(this.userid)}}));this.posts=s,this.fetchPostsWithUsernames()}catch(n){console.error("Error fetching posts or images:",n)}},async fetchPostsWithUsernames(){const t=this.posts,e=await Promise.all(t.map(async n=>{const s=_t(lt,"user",n.userId),r=await Is(s);if(r.exists()){const i=r.data();return{...n,name:i.name}}else return console.warn(`User not found for userId: ${n.userId}`),n}));console.log("Posts with usernames:",e),this.displayPosts=e}},mounted(){const t=Rs();ri(t,e=>{e?(this.userid=e.uid,this.fetchPosts()):(console.log("User not authenticated"),this.$router.push("/login"))})},name:"SocialPage",setup(){Ao(()=>{new CV("#dynamic-title",{strings:["Welcome to Your Feed","Discover New Challenges!"],speed:100,breakLines:!1,loop:!0}).go()})}},kV={class:"posts-container"},OV={key:0,class:"post-card"},DV={class:"post-header"},xV={class:"user-avatar"},NV={class:"username m-0"},VV={class:"timestamp"},LV={class:"post-image"},MV=["src"],UV={class:"post-details"},FV={class:"challenge-name"},BV={class:"caption"},$V={class:"score-likes-row"},jV={class:"challenge-score"},qV=["onClick"];function HV(t,e,n,s,r,i){return Z(),ee("div",kV,[e[1]||(e[1]=y("h2",{id:"dynamic-title"},null,-1)),(Z(!0),ee(qe,null,un(r.displayPosts,o=>(Z(),ee("div",{key:o.id},[o.userId!=this.userid?(Z(),ee("div",OV,[y("div",DV,[y("div",xV,se(o.name.charAt(0).toUpperCase()),1),y("div",null,[y("h5",NV,se(o.name),1),y("span",VV,se(i.formatTimestamp(o.timestamp)),1)])]),y("div",LV,[y("img",{src:o.imageUrl,alt:"Post Image",class:"single-post-image"},null,8,MV)]),y("div",UV,[y("h4",FV,se(o.challengeName),1),y("p",BV,se(o.caption),1),y("div",$V,[y("p",jV,[e[0]||(e[0]=y("strong",null,"Score:",-1)),Ie(" "+se(o.challengeScore),1)]),y("button",{onClick:l=>i.likePost(o),class:"like-button"},[y("i",{class:ni([o.isLikedByUser?"fas fa-heart liked":"far fa-heart"])},null,2),Ie(" "+se(o.likes)+" Likes ",1)],8,qV)])])])):Oe("",!0)]))),128))])}const WV=Ms(PV,[["render",HV],["__scopeId","data-v-243afb56"]]),KV={class:"posts-container"},zV={class:"user-details"},GV={class:"user-name"},QV={class:"user-score"},JV={key:0,class:"no-posts"},YV={key:1},XV={class:"post-header"},ZV={class:"user-avatar"},eL={class:"username m-0"},tL={class:"timestamp"},nL={class:"menu-wrapper"},sL=["onClick"],rL={key:0,class:"dropdown-menu"},iL=["onClick"],oL=["onClick"],aL={class:"post-image"},lL=["src"],cL={class:"post-details"},uL={class:"challenge-name"},hL={class:"caption"},dL={class:"score-likes-row"},fL={class:"challenge-score"},pL={class:"likes-count"},mL={key:2,class:"modal-overlay"},gL={class:"modal-content"},_L={class:"modal-buttons"},yL=["disabled"],vL={key:3,class:"modal-overlay"},wL={class:"modal-content"},EL={class:"modal-buttons"},TL={data(){return{apiKey:"1e42638a7ad644caafcdb135d8b4b7b5",userid:"",posts:[],recipeTitle:"",recipeScore:"",displayMyPosts:[],deletePostId:"",showModal:!1,showDeleteModal:!1,editPost:null,postToDelete:null,newCaption:"",activeMenu:null,userName:"",userScore:0}},methods:{toggleMenu(t){this.activeMenu===t?this.activeMenu=null:this.activeMenu=t},handleClickOutside(t){t.target.closest(".menu-container")||(this.activeMenu=null)},openEditModal(t){this.showModal=!0,this.editPost=t,this.newCaption=t.caption},openDeleteModal(t){this.showDeleteModal=!0,this.postToDelete=t},closeDeleteModal(){this.showDeleteModal=!1,this.postToDelete=null},async confirmDelete(){if(this.postToDelete)try{const t=_t(lt,"posts",this.postToDelete.id);await H1(t);const e=this.postToDelete.imageUrl,n=new URL(e),s=decodeURIComponent(n.pathname.split("/o/")[1]),r=mw(),i=ul(r,s);await sO(i),this.closeDeleteModal(),await this.fetchPosts(),console.log("Post successfully deleted.")}catch(t){console.error("Error deleting post or image:",t),this.closeDeleteModal()}},closeModal(){this.showModal=!1,this.editPost=null,this.newCaption="",this.activeMenu=null},async saveCaption(){if(this.newCaption.trim()&&this.editPost)try{const t=_t(lt,"posts",this.editPost.id);await Wn(t,{caption:this.newCaption}),this.editPost.caption=this.newCaption,this.closeModal()}catch(t){console.error("Error updating caption:",t)}},formatTimestamp(t){return new Date(t.seconds*1e3).toLocaleString()},async fetchPosts(){const t=Gl(lt,"posts"),e=hd(t,md("timestamp","desc"));try{const n=await gd(e),s=await Promise.all(n.docs.map(async r=>{const i=r.data(),o=r.id,l=i.userId;if(l!==this.userid)return null;const c=ul(xd,`uploads/${l}/${o}`),u=await Id(c);return{id:o,...i,imageUrl:u,isLikedByUser:i.likedBy&&i.likedBy.includes(this.userid)}}));this.posts=s.filter(r=>r!==null),this.fetchPostsWithUsernames()}catch(n){console.error("Error fetching posts or images:",n)}},async fetchUserInfo(){try{const t=_t(lt,"user",this.userid),e=await Is(t);if(e.exists()){const n=e.data();this.userName=n.name,this.userScore=n.points||0}else console.warn("User document not found.")}catch(t){console.error("Error fetching user info:",t)}},async fetchPostsWithUsernames(){const t=this.posts,e=await Promise.all(t.map(async n=>{const s=_t(lt,"user",n.userId),r=await Is(s);if(r.exists()){const i=r.data();return{...n,name:i.name}}else return console.warn(`User not found for userId: ${n.userId}`),n}));this.displayMyPosts=e,console.log("My Posts:",this.displayMyPosts)}},mounted(){const t=Rs();ri(t,async e=>{e?(this.userid=e.uid,console.log(e.uid),this.fetchPosts(),await this.fetchUserInfo()):(console.log("User not authenticated"),this.$router.push("/login"))}),document.addEventListener("click",this.handleClickOutside)},unmounted(){document.removeEventListener("click",this.handleClickOutside)}},IL=Object.assign(TL,{__name:"Profile",setup(t){return(e,n)=>{const s=ur("router-link");return Z(),ee("div",KV,[y("div",zV,[y("span",GV,"User: "+se(e.userName),1),y("span",QV,"Score: "+se(e.userScore),1)]),n[13]||(n[13]=y("h2",{id:"title"},"Your Posts",-1)),e.displayMyPosts.length===0?(Z(),ee("div",JV,[y("p",null,[n[7]||(n[7]=Ie("You haven't posted anything yet, ")),Ee(s,{to:"/start",class:"get-cooking-link"},{default:Ke(()=>n[6]||(n[6]=[Ie("get to cooking!")])),_:1})])])):(Z(),ee("div",YV,[(Z(!0),ee(qe,null,un(e.displayMyPosts,r=>(Z(),ee("div",{key:r.id,class:"post-card"},[y("div",XV,[y("div",ZV,se(r.name.charAt(0).toUpperCase()),1),y("div",null,[y("h5",eL,se(r.name),1),y("span",tL,se(e.formatTimestamp(r.timestamp)),1)]),y("div",nL,[y("div",{class:"menu-container",onClick:Yi(i=>e.toggleMenu(r.id),["stop"])},[n[8]||(n[8]=y("i",{class:"fas fa-ellipsis-v menu-icon"},null,-1)),e.activeMenu===r.id?(Z(),ee("div",rL,[y("button",{onClick:i=>e.openEditModal(r),class:"dropdown-item"},"Edit",8,iL),y("button",{onClick:i=>e.openDeleteModal(r),class:"dropdown-item"},"Delete",8,oL)])):Oe("",!0)],8,sL)])]),y("div",aL,[y("img",{src:r.imageUrl,alt:"Post Image",class:"single-post-image"},null,8,lL)]),y("div",cL,[y("h4",uL,se(r.challengeName),1),y("p",hL,se(r.caption),1),y("div",dL,[y("p",fL,[n[9]||(n[9]=y("strong",null,"Score:",-1)),Ie(" "+se(r.challengeScore),1)]),y("p",pL,se(r.likes)+" Likes",1)])])]))),128))])),e.showModal?(Z(),ee("div",mL,[y("div",gL,[n[10]||(n[10]=y("h3",null,"Edit Caption",-1)),zn(y("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=r=>e.newCaption=r),placeholder:"Enter new caption",class:"modal-input",onKeyup:n[1]||(n[1]=v_((...r)=>e.saveCaption&&e.saveCaption(...r),["enter"]))},null,544),[[vs,e.newCaption]]),y("div",_L,[y("button",{onClick:n[2]||(n[2]=(...r)=>e.closeModal&&e.closeModal(...r)),class:"modal-cancel-button"},"Cancel"),y("button",{onClick:n[3]||(n[3]=(...r)=>e.saveCaption&&e.saveCaption(...r)),class:"modal-save-button",disabled:!e.newCaption.trim()},"Save",8,yL)])])])):Oe("",!0),e.showDeleteModal?(Z(),ee("div",vL,[y("div",wL,[n[11]||(n[11]=y("h3",null,"Confirm Delete",-1)),n[12]||(n[12]=y("p",null,"Are you sure you want to delete this post?",-1)),y("div",EL,[y("button",{onClick:n[4]||(n[4]=(...r)=>e.closeDeleteModal&&e.closeDeleteModal(...r)),class:"modal-cancel-button"},"Cancel"),y("button",{onClick:n[5]||(n[5]=(...r)=>e.confirmDelete&&e.confirmDelete(...r)),class:"modal-del-button btn btn-danger"},"Yes, Delete")])])])):Oe("",!0)])}}}),bL=Ms(IL,[["__scopeId","data-v-94d0ba9d"]]),AL=[{path:"/",name:"About",component:VO},{path:"/register",name:"Register",component:$O},{path:"/login",name:"Login",component:QO},{path:"/mychallenge",name:"MyChallenge",component:dN,meta:{requiresAuth:!0}},{path:"/start",name:"Start",component:UN,meta:{requiresAuth:!0}},{path:"/leaderboard",name:"Leaderboard",component:tV,meta:{requiresAuth:!0}},{path:"/social",name:"Social",component:WV,meta:{requiresAuth:!0}},{path:"/profile",name:"Profile",component:bL,meta:{requiresAuth:!0}}],$o=BS({history:gS(),routes:AL,scrollBehavior(t,e,n){return n||{top:0}}});$o.beforeEach((t,e,n)=>{const s=Rs();t.matched.some(i=>i.meta.requiresAuth)?ri(s,i=>{i?n():n({name:"Login"})}):n()});const RL={apiKey:"AIzaSyD4t9Ulylj6RKodtw8hram5RYykaU-Hs_s",authDomain:"let-me-cook-a6cd6.firebaseapp.com",projectId:"let-me-cook-a6cd6",storageBucket:"let-me-cook-a6cd6.firebasestorage.app",messagingSenderId:"175589138122",appId:"1:175589138122:web:1883b9686d8efeb360de33"},Dd=k_(RL),lt=k1(Dd),jo=Rs(Dd),xd=mw(Dd);jo.currentUser;const Fa=kt(""),oo=kt(""),Ba=kt(""),$a=kt(""),ja=kt(""),nE=kt([]),SL=kt(""),cg=t=>{t.preventDefault(),console.log("Called"),bA(Rs(),oo.value,Ba.value).then(e=>{var n=Rs().lastNotifiedUid;CL(n),PL(n),$o.push("/")}).catch(e=>{alert(e.message)})};async function CL(t){try{await Jv(_t(lt,"user",t),{name:Fa.value,email:oo.value,points:0,streak:0,activeChallenge:""})}catch(e){console.error("Error adding document: ",e)}}async function PL(t){try{await Jv(_t(lt,"ingredients",t),{ingredient:[]})}catch(e){console.error("Error adding document: ",e)}}const ug=t=>{t.preventDefault(),AA(jo,$a.value,ja.value).then(e=>{const n=e.user;console.log(n.email,"signed in user"),$o.push("/")}).catch(e=>{e.code=="auth/invalid-email"?alert("Your email is invalid, please try again."):e.code=="auth/invalid-credential"&&alert("Incorrect password, please try again."),console.log(e.code)})};async function kL(t){try{const e=await fetch(t);if(!e.ok)throw new Error("Network response was not ok");const n=await e.json();nE.value=n.results}catch(e){console.error("Error fetching the recipes:",e),SL.value="Failed to fetch recipes."}}const hg=t=>{CA(jo).then(()=>{console.log("Sign-out successful")}).catch(e=>{console.log("Error signing out:",e)})},OL="/assets/lmc-pXa8iDKy.png",DL={class:"border-gray-200 relative"},xL={class:"flex items-center justify-between mx-0 p-3"},NL=["src"],VL={class:"font-medium flex flex-col space-y-4 items-center text-lg px-0 pt-3 md:pt-0"},LL={key:0},ML={key:1},UL={key:2},FL={key:3},BL={key:4},$L={key:5},jL={key:6},qL={key:7},HL={class:"hidden md:flex md:items-center md:justify-center md:space-x-8"},WL={class:"font-medium flex flex-row space-x-8 items-center text-lg px-0 pt-3 md:pt-0"},KL={key:0},zL={key:1},GL={key:2},QL={key:3},JL={key:4},YL={key:5},XL={key:6},ZL={key:0,class:"hidden md:flex items-center ml-4 text-lg"},eM={__name:"Navbar",setup(t){const e=Rs(),n=kt(!1),s=kt(""),r=qS(),i=()=>{o.value=!1},o=kt(!1),l=()=>{o.value=!o.value},c=kt(1),u=()=>{const p=window.scrollY||document.documentElement.scrollTop;c.value=Math.max(1-p/200,0)},d=sn(()=>({opacity:c.value,pointerEvents:c.value===0?"none":"auto"}));return Ao(()=>{window.addEventListener("scroll",u),ri(e,p=>{n.value=!!p})}),dh(()=>{window.removeEventListener("scroll",u)}),(p,m)=>{const _=ur("router-link");return Z(),ee("div",{id:"bg",class:"transition-opacity duration-500",style:Bn(d.value)},[y("nav",DL,[y("div",xL,[Ee(_,{to:"/",class:"flex items-center no-underline"},{default:Ke(()=>[y("img",{src:Je(OL),alt:"Logo",class:"h-10 w-10 mr-2"},null,8,NL),m[2]||(m[2]=y("span",{class:"text-xl font-bold text-gray-900 no-underline"},"Let Me Cook",-1))]),_:1}),y("button",{onClick:l,class:"md:hidden inline-flex items-center p-1 w-8 h-8 text-gray-900 focus:outline-none z-10"},m[3]||(m[3]=[y("span",{class:"sr-only"},"Open main menu",-1),y("svg",{class:"w-6 h-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])),y("div",{class:ni(["fixed inset-0 bg-white flex flex-col items-center justify-center transition-all duration-500 ease-in-out",o.value?"opacity-100":"opacity-0 pointer-events-none"])},[y("ul",VL,[!n.value&&Je(r).name!=="Register"?(Z(),ee("li",LL,[Ee(_,{to:"/register",onClick:i,class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[4]||(m[4]=[Ie("Register")])),_:1})])):Oe("",!0),!n.value&&Je(r).name!=="Login"?(Z(),ee("li",ML,[Ee(_,{to:"/login",onClick:i,class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[5]||(m[5]=[Ie("Login")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",UL,[Ee(_,{to:"/mychallenge",onClick:i,class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[6]||(m[6]=[Ie("My Challenge")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",FL,[Ee(_,{to:"/Start",onClick:i,class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[7]||(m[7]=[Ie("Start")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",BL,[Ee(_,{to:"/social",onClick:i,class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[8]||(m[8]=[Ie("Social")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",$L,[Ee(_,{to:"/leaderboard",onClick:i,class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[9]||(m[9]=[Ie("Leaderboard")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",jL,[Ee(_,{to:"/profile",onClick:i,class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[10]||(m[10]=[Ie("Profile")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",qL,[Ee(_,{to:"/login",onClick:m[0]||(m[0]=()=>{Je(hg)(s.value),i()}),class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline text-lg font-semibold","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[11]||(m[11]=[Ie(" Sign Out ")])),_:1})])):Oe("",!0)])],2),y("div",HL,[y("ul",WL,[!n.value&&Je(r).name!=="Register"?(Z(),ee("li",KL,[Ee(_,{to:"/register",class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[12]||(m[12]=[Ie("Register")])),_:1})])):Oe("",!0),!n.value&&Je(r).name!=="Login"?(Z(),ee("li",zL,[Ee(_,{to:"/login",class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[13]||(m[13]=[Ie("Login")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",GL,[Ee(_,{to:"/mychallenge",class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[14]||(m[14]=[Ie("My Challenge")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",QL,[Ee(_,{to:"/Start",class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[15]||(m[15]=[Ie("Start")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",JL,[Ee(_,{to:"/social",class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[16]||(m[16]=[Ie("Social")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",YL,[Ee(_,{to:"/leaderboard",class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[17]||(m[17]=[Ie("Leaderboard")])),_:1})])):Oe("",!0),n.value?(Z(),ee("li",XL,[Ee(_,{to:"/profile",class:"py-2 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[18]||(m[18]=[Ie("Profile")])),_:1})])):Oe("",!0)])]),n.value?(Z(),ee("div",ZL,[Ee(_,{to:"/login",onClick:m[1]||(m[1]=b=>Je(hg)(s.value)),class:"py-2 px-3 text-gray-900 rounded hover:bg-gray-100 no-underline","active-class":"text-tomato","exact-active-class":"text-tomato"},{default:Ke(()=>m[19]||(m[19]=[Ie(" Sign Out ")])),_:1})])):Oe("",!0)])])],4)}}},tM=Ms(eM,[["__scopeId","data-v-108c6817"]]),nM={};function sM(t,e){return e[0]||(e[0]=Sl('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer"><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"><meta name="viewport" content="width=device-width, initial-scale=1.0"><div class="footer-background"><section class="footer"><h5>About Let Me Cook</h5><div class="footere-p"><p>Founded in 2024, Let Me Cook is a platform designed to inspire home cooks of all skill levels to create meals using leftover ingredients and reduce food waste. The platform features engaging cooking challenges and an interactive social page, fostering community support and collaboration.</p></div><div class="icons"><i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-twitter"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-tiktok"></i><i class="fa-brands fa-snapchat"></i></div><br><div class="copyright"><p>© 2024 Let Me Cook. All rights reserved.</p></div></section></div>',4))}const rM=Ms(nM,[["render",sM]]),iM={__name:"App",setup(t){return(e,n)=>{const s=ur("router-view");return Z(),ee(qe,null,[Ee(tM),Ee(s),Ee(rM)],64)}}};QI(iM).use($o).mount("#app");
