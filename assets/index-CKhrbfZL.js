(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const _f=()=>{};var dc={};/**
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
 */const Xl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},yf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,p=i>>2,_=(i&3)<<4|l>>4;let E=(l&15)<<2|d>>6,R=d&63;u||(R=64,a||(E=64)),r.push(t[p],t[_],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):yf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const _=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||d==null||_==null)throw new Ef;const E=i<<2|l>>4;if(r.push(E),d!==64){const R=l<<4&240|d>>2;if(r.push(R),_!==64){const S=d<<6&192|_;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ef extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vf=function(n){const e=Xl(n);return Zl.encodeByteArray(e,!0)},fs=function(n){return vf(n).replace(/\./g,"")},eu=function(n){try{return Zl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Tf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const If=()=>Tf().__FIREBASE_DEFAULTS__,wf=()=>{if(typeof process>"u"||typeof dc>"u")return;const n=dc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Af=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&eu(n[1]);return e&&JSON.parse(e)},Ns=()=>{try{return _f()||If()||wf()||Af()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},tu=n=>{var e,t;return(t=(e=Ns())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},nu=n=>{const e=tu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ru=()=>{var n;return(n=Ns())==null?void 0:n.config},su=n=>{var e;return(e=Ns())==null?void 0:e[`_${n}`]};/**
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
 */class bf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Nt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function po(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function iu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n};return[fs(JSON.stringify(t)),fs(JSON.stringify(a)),""].join(".")}const rr={};function Rf(){const n={prod:[],emulator:[]};for(const e of Object.keys(rr))rr[e]?n.emulator.push(e):n.prod.push(e);return n}function Sf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let fc=!1;function mo(n,e){if(typeof window>"u"||typeof document>"u"||!Nt(window.location.host)||rr[n]===e||rr[n]||fc)return;rr[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Rf().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function l(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{fc=!0,a()},E}function p(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function _(){const E=Sf(r),R=t("text"),S=document.getElementById(R)||document.createElement("span"),D=t("learnmore"),k=document.getElementById(D)||document.createElement("a"),x=t("preprendIcon"),L=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const W=E.element;l(W),p(k,D);const H=d();u(L,x),W.append(L,S,k,H),document.body.appendChild(W)}i?(S.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",_):_()}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Pf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function Cf(){var e;const n=(e=Ns())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Df(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Vf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nf(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Of(){return!Cf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xf(){try{return typeof indexedDB=="object"}catch{return!1}}function Lf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Mf="FirebaseError";class Ze extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Mf,Object.setPrototypeOf(this,Ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vr.prototype.create)}}class vr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Uf(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ze(s,l,r)}}function Uf(n,e){return n.replace(Ff,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ff=/\{\$([^}]+)}/g;function Bf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function zt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(pc(i)&&pc(a)){if(!zt(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function pc(n){return n!==null&&typeof n=="object"}/**
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
 */function Tr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function $f(n,e){const t=new jf(n,e);return t.subscribe.bind(t)}class jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");qf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=bi),s.error===void 0&&(s.error=bi),s.complete===void 0&&(s.complete=bi);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bi(){}/**
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
 */function le(n){return n&&n._delegate?n._delegate:n}class Rt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qt="[DEFAULT]";/**
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
 */class Wf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zf(e))try{this.getOrInitializeService({instanceIdentifier:qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qt){return this.instances.has(e)}getOptions(e=qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qt){return this.component?this.component.multipleInstances?e:qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hf(n){return n===qt?void 0:n}function zf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(z||(z={}));const Kf={debug:z.DEBUG,verbose:z.VERBOSE,info:z.INFO,warn:z.WARN,error:z.ERROR,silent:z.SILENT},Qf=z.INFO,Jf={[z.DEBUG]:"log",[z.VERBOSE]:"log",[z.INFO]:"info",[z.WARN]:"warn",[z.ERROR]:"error"},Yf=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Jf[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class go{constructor(e){this.name=e,this._logLevel=Qf,this._logHandler=Yf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Kf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,z.DEBUG,...e),this._logHandler(this,z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,z.VERBOSE,...e),this._logHandler(this,z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,z.INFO,...e),this._logHandler(this,z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,z.WARN,...e),this._logHandler(this,z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,z.ERROR,...e),this._logHandler(this,z.ERROR,...e)}}const Xf=(n,e)=>e.some(t=>n instanceof t);let mc,gc;function Zf(){return mc||(mc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ep(){return gc||(gc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ou=new WeakMap,$i=new WeakMap,au=new WeakMap,Ri=new WeakMap,_o=new WeakMap;function tp(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(vt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&ou.set(t,n)}).catch(()=>{}),_o.set(e,n),e}function np(n){if($i.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});$i.set(n,e)}let ji={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $i.get(n);if(e==="objectStoreNames")return n.objectStoreNames||au.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function rp(n){ji=n(ji)}function sp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Si(this),e,...t);return au.set(r,e.sort?e.sort():[e]),vt(r)}:ep().includes(n)?function(...e){return n.apply(Si(this),e),vt(ou.get(this))}:function(...e){return vt(n.apply(Si(this),e))}}function ip(n){return typeof n=="function"?sp(n):(n instanceof IDBTransaction&&np(n),Xf(n,Zf())?new Proxy(n,ji):n)}function vt(n){if(n instanceof IDBRequest)return tp(n);if(Ri.has(n))return Ri.get(n);const e=ip(n);return e!==n&&(Ri.set(n,e),_o.set(e,n)),e}const Si=n=>_o.get(n);function op(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=vt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(vt(a.result),u.oldVersion,u.newVersion,vt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ap=["get","getKey","getAll","getAllKeys","count"],cp=["put","add","delete","clear"],Pi=new Map;function _c(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Pi.get(e))return Pi.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=cp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ap.includes(t)))return;const i=async function(a,...l){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),s&&u.done]))[0]};return Pi.set(e,i),i}rp(n=>({...n,get:(e,t,r)=>_c(e,t)||n.get(e,t,r),has:(e,t)=>!!_c(e,t)||n.has(e,t)}));/**
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
 */class lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(up(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function up(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qi="@firebase/app",yc="0.14.7";/**
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
 */const nt=new go("@firebase/app"),hp="@firebase/app-compat",dp="@firebase/analytics-compat",fp="@firebase/analytics",pp="@firebase/app-check-compat",mp="@firebase/app-check",gp="@firebase/auth",_p="@firebase/auth-compat",yp="@firebase/database",Ep="@firebase/data-connect",vp="@firebase/database-compat",Tp="@firebase/functions",Ip="@firebase/functions-compat",wp="@firebase/installations",Ap="@firebase/installations-compat",bp="@firebase/messaging",Rp="@firebase/messaging-compat",Sp="@firebase/performance",Pp="@firebase/performance-compat",Cp="@firebase/remote-config",kp="@firebase/remote-config-compat",Dp="@firebase/storage",Vp="@firebase/storage-compat",Np="@firebase/firestore",Op="@firebase/ai",xp="@firebase/firestore-compat",Lp="firebase",Mp="12.8.0";/**
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
 */const Wi="[DEFAULT]",Up={[qi]:"fire-core",[hp]:"fire-core-compat",[fp]:"fire-analytics",[dp]:"fire-analytics-compat",[mp]:"fire-app-check",[pp]:"fire-app-check-compat",[gp]:"fire-auth",[_p]:"fire-auth-compat",[yp]:"fire-rtdb",[Ep]:"fire-data-connect",[vp]:"fire-rtdb-compat",[Tp]:"fire-fn",[Ip]:"fire-fn-compat",[wp]:"fire-iid",[Ap]:"fire-iid-compat",[bp]:"fire-fcm",[Rp]:"fire-fcm-compat",[Sp]:"fire-perf",[Pp]:"fire-perf-compat",[Cp]:"fire-rc",[kp]:"fire-rc-compat",[Dp]:"fire-gcs",[Vp]:"fire-gcs-compat",[Np]:"fire-fst",[xp]:"fire-fst-compat",[Op]:"fire-vertex","fire-js":"fire-js",[Lp]:"fire-js-all"};/**
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
 */const ps=new Map,Fp=new Map,Hi=new Map;function Ec(n,e){try{n.container.addComponent(e)}catch(t){nt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gt(n){const e=n.name;if(Hi.has(e))return nt.debug(`There were multiple attempts to register component ${e}.`),!1;Hi.set(e,n);for(const t of ps.values())Ec(t,n);for(const t of Fp.values())Ec(t,n);return!0}function Os(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function xe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Bp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tt=new vr("app","Firebase",Bp);/**
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
 */class $p{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const Zt=Mp;function cu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Wi,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Tt.create("bad-app-name",{appName:String(s)});if(t||(t=ru()),!t)throw Tt.create("no-options");const i=ps.get(s);if(i){if(zt(t,i.options)&&zt(r,i.config))return i;throw Tt.create("duplicate-app",{appName:s})}const a=new Gf(s);for(const u of Hi.values())a.addComponent(u);const l=new $p(t,r,a);return ps.set(s,l),l}function yo(n=Wi){const e=ps.get(n);if(!e&&n===Wi&&ru())return cu();if(!e)throw Tt.create("no-app",{appName:n});return e}function He(n,e,t){let r=Up[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),nt.warn(a.join(" "));return}Gt(new Rt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const jp="firebase-heartbeat-database",qp=1,ur="firebase-heartbeat-store";let Ci=null;function lu(){return Ci||(Ci=op(jp,qp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ur)}catch(t){console.warn(t)}}}}).catch(n=>{throw Tt.create("idb-open",{originalErrorMessage:n.message})})),Ci}async function Wp(n){try{const t=(await lu()).transaction(ur),r=await t.objectStore(ur).get(uu(n));return await t.done,r}catch(e){if(e instanceof Ze)nt.warn(e.message);else{const t=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});nt.warn(t.message)}}}async function vc(n,e){try{const r=(await lu()).transaction(ur,"readwrite");await r.objectStore(ur).put(e,uu(n)),await r.done}catch(t){if(t instanceof Ze)nt.warn(t.message);else{const r=Tt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});nt.warn(r.message)}}}function uu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Hp=1024,zp=30;class Gp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>zp){const a=Jp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){nt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Tc(),{heartbeatsToSend:r,unsentEntries:s}=Kp(this._heartbeatsCache.heartbeats),i=fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return nt.warn(t),""}}}function Tc(){return new Date().toISOString().substring(0,10)}function Kp(n,e=Hp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ic(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ic(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Qp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xf()?Lf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return vc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ic(n){return fs(JSON.stringify({version:2,heartbeats:n})).length}function Jp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Yp(n){Gt(new Rt("platform-logger",e=>new lp(e),"PRIVATE")),Gt(new Rt("heartbeat",e=>new Gp(e),"PRIVATE")),He(qi,yc,n),He(qi,yc,"esm2020"),He("fire-js","")}Yp("");var Xp="firebase",Zp="12.8.0";/**
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
 */He(Xp,Zp,"app");function hu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const em=hu,du=new vr("auth","Firebase",hu());/**
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
 */const ms=new go("@firebase/auth");function tm(n,...e){ms.logLevel<=z.WARN&&ms.warn(`Auth (${Zt}): ${n}`,...e)}function rs(n,...e){ms.logLevel<=z.ERROR&&ms.error(`Auth (${Zt}): ${n}`,...e)}/**
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
 */function Be(n,...e){throw Eo(n,...e)}function ze(n,...e){return Eo(n,...e)}function fu(n,e,t){const r={...em(),[e]:t};return new vr("auth","Firebase",r).create(e,{appName:n.name})}function It(n){return fu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Eo(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return du.create(n,...e)}function U(n,e,...t){if(!n)throw Eo(e,...t)}function et(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rs(e),new Error(e)}function rt(n,e){n||et(e)}/**
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
 */function zi(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function nm(){return wc()==="http:"||wc()==="https:"}function wc(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function rm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nm()||Df()||"connection"in navigator)?navigator.onLine:!0}function sm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Pf()||Vf()}get(){return rm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vo(n,e){rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class pu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;et("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;et("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;et("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const im={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const om=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],am=new Ir(3e4,6e4);function en(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Ot(n,e,t,r,s={}){return mu(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Tr({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:u,...i};return kf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Nt(n.emulatorConfig.host)&&(d.credentials="include"),pu.fetch()(await gu(n,n.config.apiHost,t,l),d)})}async function mu(n,e,t){n._canInitEmulator=!1;const r={...im,...e};try{const s=new lm(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw zr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw zr(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw zr(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw zr(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw fu(n,p,d);Be(n,p)}}catch(s){if(s instanceof Ze)throw s;Be(n,"network-request-failed",{message:String(s)})}}async function xs(n,e,t,r,s={}){const i=await Ot(n,e,t,r,s);return"mfaPendingCredential"in i&&Be(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function gu(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?vo(n.config,s):`${n.config.apiScheme}://${s}`;return om.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function cm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ze(this.auth,"network-request-failed")),am.get())})}}function zr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ze(n,e,r);return s.customData._tokenResponse=t,s}function Ac(n){return n!==void 0&&n.enterprise!==void 0}class um{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hm(n,e){return Ot(n,"GET","/v2/recaptchaConfig",en(n,e))}/**
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
 */async function dm(n,e){return Ot(n,"POST","/v1/accounts:delete",e)}async function gs(n,e){return Ot(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function sr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fm(n,e=!1){const t=le(n),r=await t.getIdToken(e),s=To(r);U(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:sr(ki(s.auth_time)),issuedAtTime:sr(ki(s.iat)),expirationTime:sr(ki(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ki(n){return Number(n)*1e3}function To(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const s=eu(t);return s?JSON.parse(s):(rs("Failed to decode base64 JWT payload"),null)}catch(s){return rs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bc(n){const e=To(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hr(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ze&&pm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function pm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class mm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=sr(this.lastLoginAt),this.creationTime=sr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _s(n){var _;const e=n.auth,t=await n.getIdToken(),r=await hr(n,gs(e,{idToken:t}));U(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(_=s.providerUserInfo)!=null&&_.length?_u(s.providerUserInfo):[],a=_m(n.providerData,i),l=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Gi(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(n,p)}async function gm(n){const e=le(n);await _s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _m(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _u(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function ym(n,e){const t=await mu(n,{},async()=>{const r=Tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await gu(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return n.emulatorConfig&&Nt(n.emulatorConfig.host)&&(u.credentials="include"),pu.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Em(n,e){return Ot(n,"POST","/v2/accounts:revokeToken",en(n,e))}/**
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
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){U(e.length!==0,"internal-error");const t=bc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(U(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await ym(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new fn;return r&&(U(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(U(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(U(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return et("not implemented")}}/**
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
 */function dt(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Me{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new mm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Gi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await hr(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fm(this,e)}reload(){return gm(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Me({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xe(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await hr(this,dm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,l=t.tenantId??void 0,u=t._redirectEventId??void 0,d=t.createdAt??void 0,p=t.lastLoginAt??void 0,{uid:_,emailVerified:E,isAnonymous:R,providerData:S,stsTokenManager:D}=t;U(_&&D,e,"internal-error");const k=fn.fromJSON(this.name,D);U(typeof _=="string",e,"internal-error"),dt(r,e.name),dt(s,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof R=="boolean",e,"internal-error"),dt(i,e.name),dt(a,e.name),dt(l,e.name),dt(u,e.name),dt(d,e.name),dt(p,e.name);const x=new Me({uid:_,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:l,stsTokenManager:k,createdAt:d,lastLoginAt:p});return S&&Array.isArray(S)&&(x.providerData=S.map(L=>({...L}))),u&&(x._redirectEventId=u),x}static async _fromIdTokenResponse(e,t,r=!1){const s=new fn;s.updateFromServerResponse(t);const i=new Me({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _s(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];U(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_u(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new fn;l.updateFromIdToken(r);const u=new Me({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Rc=new Map;function tt(n){rt(n instanceof Function,"Expected a class definition");let e=Rc.get(n);return e?(rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Rc.set(n,e),e)}/**
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
 */class yu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}yu.type="NONE";const Sc=yu;/**
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
 */function ss(n,e,t){return`firebase:${n}:${e}:${t}`}class pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ss(this.userKey,s.apiKey,i),this.fullPersistenceKey=ss("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gs(this.auth,{idToken:e}).catch(()=>{});return t?Me._fromGetAccountInfoResponse(this.auth,t,e):null}return Me._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pn(tt(Sc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||tt(Sc);const a=ss(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const p=await d._get(a);if(p){let _;if(typeof p=="string"){const E=await gs(e,{idToken:p}).catch(()=>{});if(!E)break;_=await Me._fromGetAccountInfoResponse(e,E,p)}else _=Me._fromJSON(e,p);d!==i&&(l=_),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new pn(i,e,r):(i=u[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new pn(i,e,r))}}/**
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
 */function Pc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Iu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Eu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Au(e))return"Blackberry";if(bu(e))return"Webos";if(vu(e))return"Safari";if((e.includes("chrome/")||Tu(e))&&!e.includes("edge/"))return"Chrome";if(wu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Eu(n=be()){return/firefox\//i.test(n)}function vu(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tu(n=be()){return/crios\//i.test(n)}function Iu(n=be()){return/iemobile/i.test(n)}function wu(n=be()){return/android/i.test(n)}function Au(n=be()){return/blackberry/i.test(n)}function bu(n=be()){return/webos/i.test(n)}function Io(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vm(n=be()){var e;return Io(n)&&!!((e=window.navigator)!=null&&e.standalone)}function Tm(){return Nf()&&document.documentMode===10}function Ru(n=be()){return Io(n)||wu(n)||bu(n)||Au(n)||/windows phone/i.test(n)||Iu(n)}/**
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
 */function Su(n,e=[]){let t;switch(n){case"Browser":t=Pc(be());break;case"Worker":t=`${Pc(be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Zt}/${r}`}/**
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
 */class Im{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const u=e(i);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function wm(n,e={}){return Ot(n,"GET","/v2/passwordPolicy",en(n,e))}/**
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
 */const Am=6;class bm{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Am,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Rm{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cc(this),this.idTokenSubscription=new Cc(this),this.beforeStateQueue=new Im(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=du,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=tt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gs(this,{idToken:e}),r=await Me._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _s(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=sm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xe(this.app))return Promise.reject(It(this));const t=e?le(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xe(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xe(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(tt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await wm(this),t=new bm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new vr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Em(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&tt(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[tt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Su(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&tm(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Sn(n){return le(n)}class Cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=$f(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ls={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sm(n){Ls=n}function Pu(n){return Ls.loadJS(n)}function Pm(){return Ls.recaptchaEnterpriseScript}function Cm(){return Ls.gapiScript}function km(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Dm{constructor(){this.enterprise=new Vm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Vm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Nm="recaptcha-enterprise",Cu="NO_RECAPTCHA";class Om{constructor(e){this.type=Nm,this.auth=Sn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,l)=>{hm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new um(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,a,l){const u=window.grecaptcha;Ac(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Cu)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dm().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(l=>{if(!t&&Ac(window.grecaptcha))s(l,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Pm();u.length!==0&&(u+=l),Pu(u).then(()=>{s(l,i,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function kc(n,e,t,r=!1,s=!1){const i=new Om(n);let a;if(s)a=Cu;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const l={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,d=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:a}):Object.assign(l,{captchaResponse:a}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Dc(n,e,t,r,s){var i;if((i=n._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await kc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await kc(n,e,t,t==="getOobCode");return r(n,l)}else return Promise.reject(a)})}/**
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
 */function xm(n,e){const t=Os(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(zt(i,e??{}))return s;Be(s,"already-initialized")}return t.initialize({options:e})}function Lm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(tt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Mm(n,e,t){const r=Sn(n);U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=ku(e),{host:a,port:l}=Um(e),u=l===null?"":`:${l}`,d={url:`${i}//${a}${u}/`},p=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){U(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),U(zt(d,r.config.emulator)&&zt(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Nt(a)?(po(`${i}//${a}${u}`),mo("Auth",!0)):Fm()}function ku(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Um(n){const e=ku(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Vc(a)}}}function Vc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Fm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class wo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return et("not implemented")}_getIdTokenResponse(e){return et("not implemented")}_linkToIdToken(e,t){return et("not implemented")}_getReauthenticationResolver(e){return et("not implemented")}}async function Bm(n,e){return Ot(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $m(n,e){return xs(n,"POST","/v1/accounts:signInWithPassword",en(n,e))}/**
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
 */async function jm(n,e){return xs(n,"POST","/v1/accounts:signInWithEmailLink",en(n,e))}async function qm(n,e){return xs(n,"POST","/v1/accounts:signInWithEmailLink",en(n,e))}/**
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
 */class dr extends wo{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new dr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new dr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dc(e,t,"signInWithPassword",$m);case"emailLink":return jm(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dc(e,r,"signUpPassword",Bm);case"emailLink":return qm(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mn(n,e){return xs(n,"POST","/v1/accounts:signInWithIdp",en(n,e))}/**
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
 */const Wm="http://localhost";class Kt extends wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new Kt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mn(e,t)}buildRequest(){const e={requestUri:Wm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Tr(t)}return e}}/**
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
 */function Hm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zm(n){const e=Xn(Zn(n)).link,t=e?Xn(Zn(e)).deep_link_id:null,r=Xn(Zn(n)).deep_link_id;return(r?Xn(Zn(r)).link:null)||r||t||e||n}class Ao{constructor(e){const t=Xn(Zn(e)),r=t.apiKey??null,s=t.oobCode??null,i=Hm(t.mode??null);U(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=zm(e);try{return new Ao(t)}catch{return null}}}/**
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
 */class Pn{constructor(){this.providerId=Pn.PROVIDER_ID}static credential(e,t){return dr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ao.parseLink(t);return U(r,"argument-error"),dr._fromEmailAndCode(e,r.code,r.tenantId)}}Pn.PROVIDER_ID="password";Pn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Du{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wr extends Du{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ft extends wr{constructor(){super("facebook.com")}static credential(e){return Kt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
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
 */class pt extends wr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class mt extends wr{constructor(){super("github.com")}static credential(e){return Kt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
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
 */class gt extends wr{constructor(){super("twitter.com")}static credential(e,t){return Kt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gt.credential(t,r)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
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
 */class vn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Me._fromIdTokenResponse(e,r,s),a=Nc(r);return new vn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Nc(r);return new vn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Nc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ys extends Ze{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ys(e,t,r,s)}}function Vu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(n,i,e,r):i})}async function Gm(n,e,t=!1){const r=await hr(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return vn._forOperation(n,"link",r)}/**
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
 */async function Km(n,e,t=!1){const{auth:r}=n;if(xe(r.app))return Promise.reject(It(r));const s="reauthenticate";try{const i=await hr(n,Vu(r,s,e,n),t);U(i.idToken,r,"internal-error");const a=To(i.idToken);U(a,r,"internal-error");const{sub:l}=a;return U(n.uid===l,r,"user-mismatch"),vn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
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
 */async function Nu(n,e,t=!1){if(xe(n.app))return Promise.reject(It(n));const r="signIn",s=await Vu(n,r,e),i=await vn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Qm(n,e){return Nu(Sn(n),e)}/**
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
 */async function Jm(n){const e=Sn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Ym(n,e,t){return xe(n.app)?Promise.reject(It(n)):Qm(le(n),Pn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Jm(n),r})}function Xm(n,e,t,r){return le(n).onIdTokenChanged(e,t,r)}function Zm(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function eg(n,e,t,r){return le(n).onAuthStateChanged(e,t,r)}function tg(n){return le(n).signOut()}const Es="__sak";/**
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
 */class Ou{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Es,"1"),this.storage.removeItem(Es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ng=1e3,rg=10;class xu extends Ou{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ru(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Tm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xu.type="LOCAL";const sg=xu;/**
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
 */class Lu extends Ou{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lu.type="SESSION";const Mu=Lu;/**
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
 */function ig(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ms{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ms(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async d=>d(t.origin,i)),u=await ig(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ms.receivers=[];/**
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
 */function bo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class og{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,u)=>{const d=bo("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(_){const E=_;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(E.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ge(){return window}function ag(n){Ge().location.href=n}/**
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
 */function Uu(){return typeof Ge().WorkerGlobalScope<"u"&&typeof Ge().importScripts=="function"}async function cg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function ug(){return Uu()?self:null}/**
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
 */const Fu="firebaseLocalStorageDb",hg=1,vs="firebaseLocalStorage",Bu="fbase_key";class Ar{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Us(n,e){return n.transaction([vs],e?"readwrite":"readonly").objectStore(vs)}function dg(){const n=indexedDB.deleteDatabase(Fu);return new Ar(n).toPromise()}function Ki(){const n=indexedDB.open(Fu,hg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vs,{keyPath:Bu})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vs)?e(r):(r.close(),await dg(),e(await Ki()))})})}async function Oc(n,e,t){const r=Us(n,!0).put({[Bu]:e,value:t});return new Ar(r).toPromise()}async function fg(n,e){const t=Us(n,!1).get(e),r=await new Ar(t).toPromise();return r===void 0?null:r.value}function xc(n,e){const t=Us(n,!0).delete(e);return new Ar(t).toPromise()}const pg=800,mg=3;class $u{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ki(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>mg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ms._getInstance(ug()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await cg(),!this.activeServiceWorker)return;this.sender=new og(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ki();return await Oc(e,Es,"1"),await xc(e,Es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Oc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>fg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Us(s,!1).getAll();return new Ar(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$u.type="LOCAL";const gg=$u;new Ir(3e4,6e4);/**
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
 */function _g(n,e){return e?tt(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ro extends wo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function yg(n){return Nu(n.auth,new Ro(n),n.bypassAuthState)}function Eg(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Km(t,new Ro(n),n.bypassAuthState)}async function vg(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),Gm(t,new Ro(n),n.bypassAuthState)}/**
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
 */class ju{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yg;case"linkViaPopup":case"linkViaRedirect":return vg;case"reauthViaPopup":case"reauthViaRedirect":return Eg;default:Be(this.auth,"internal-error")}}resolve(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Tg=new Ir(2e3,1e4);class hn extends ju{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hn.currentPopupAction&&hn.currentPopupAction.cancel(),hn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){rt(this.filter.length===1,"Popup operations only handle one event");const e=bo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tg.get())};e()}}hn.currentPopupAction=null;/**
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
 */const Ig="pendingRedirect",is=new Map;class wg extends ju{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=is.get(this.auth._key());if(!e){try{const r=await Ag(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}is.set(this.auth._key(),e)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ag(n,e){const t=Sg(e),r=Rg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function bg(n,e){is.set(n._key(),e)}function Rg(n){return tt(n._redirectPersistence)}function Sg(n){return ss(Ig,n.config.apiKey,n.name)}async function Pg(n,e,t=!1){if(xe(n.app))return Promise.reject(It(n));const r=Sn(n),s=_g(r,e),a=await new wg(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const Cg=10*60*1e3;class kg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!qu(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(ze(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lc(e))}saveEventToCache(e){this.cachedEventUids.add(Lc(e)),this.lastProcessedEventTime=Date.now()}}function Lc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qu(n);default:return!1}}/**
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
 */async function Vg(n,e={}){return Ot(n,"GET","/v1/projects",e)}/**
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
 */const Ng=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Og=/^https?/;async function xg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vg(n);for(const t of e)try{if(Lg(t))return}catch{}Be(n,"unauthorized-domain")}function Lg(n){const e=zi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Og.test(t))return!1;if(Ng.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Mg=new Ir(3e4,6e4);function Mc(){const n=Ge().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ug(n){return new Promise((e,t)=>{var s,i,a;function r(){Mc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mc(),t(ze(n,"network-request-failed"))},timeout:Mg.get()})}if((i=(s=Ge().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Ge().gapi)!=null&&a.load)r();else{const l=km("iframefcb");return Ge()[l]=()=>{gapi.load?r():t(ze(n,"network-request-failed"))},Pu(`${Cm()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw os=null,e})}let os=null;function Fg(n){return os=os||Ug(n),os}/**
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
 */const Bg=new Ir(5e3,15e3),$g="__/auth/iframe",jg="emulator/auth/iframe",qg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Wg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Hg(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vo(e,jg):`https://${n.config.authDomain}/${$g}`,r={apiKey:e.apiKey,appName:n.name,v:Zt},s=Wg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Tr(r).slice(1)}`}async function zg(n){const e=await Fg(n),t=Ge().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:Hg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=ze(n,"network-request-failed"),l=Ge().setTimeout(()=>{i(a)},Bg.get());function u(){Ge().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const Gg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kg=500,Qg=600,Jg="_blank",Yg="http://localhost";class Uc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xg(n,e,t,r=Kg,s=Qg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...Gg,width:r.toString(),height:s.toString(),top:i,left:a},d=be().toLowerCase();t&&(l=Tu(d)?Jg:t),Eu(d)&&(e=e||Yg,u.scrollbars="yes");const p=Object.entries(u).reduce((E,[R,S])=>`${E}${R}=${S},`,"");if(vm(d)&&l!=="_self")return Zg(e||"",l),new Uc(null);const _=window.open(e||"",l,p);U(_,n,"popup-blocked");try{_.focus()}catch{}return new Uc(_)}function Zg(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const e_="__/auth/handler",t_="emulator/auth/handler",n_=encodeURIComponent("fac");async function Fc(n,e,t,r,s,i){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Zt,eventId:s};if(e instanceof Du){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Bf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,_]of Object.entries({}))a[p]=_}if(e instanceof wr){const p=e.getScopes().filter(_=>_!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await n._getAppCheckToken(),d=u?`#${n_}=${encodeURIComponent(u)}`:"";return`${r_(n)}?${Tr(l).slice(1)}${d}`}function r_({config:n}){return n.emulator?vo(n,t_):`https://${n.authDomain}/${e_}`}/**
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
 */const Di="webStorageSupport";class s_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mu,this._completeRedirectFn=Pg,this._overrideRedirectResult=bg}async _openPopup(e,t,r,s){var a;rt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await Fc(e,t,r,zi(),s);return Xg(e,i,bo())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Fc(e,t,r,zi(),s);return ag(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(rt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await zg(e),r=new kg(e);return t.register("authEvent",s=>(U(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Di,{type:Di},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Di];i!==void 0&&t(!!i),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ru()||vu()||Io()}}const i_=s_;var Bc="@firebase/auth",$c="1.12.0";/**
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
 */class o_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function a_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function c_(n){Gt(new Rt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;U(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Su(n)},d=new Rm(r,s,i,u);return Lm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new Rt("auth-internal",e=>{const t=Sn(e.getProvider("auth").getImmediate());return(r=>new o_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),He(Bc,$c,a_(n)),He(Bc,$c,"esm2020")}/**
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
 */const l_=5*60,u_=su("authIdTokenMaxAge")||l_;let jc=null;const h_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>u_)return;const s=t==null?void 0:t.token;jc!==s&&(jc=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function d_(n=yo()){const e=Os(n,"auth");if(e.isInitialized())return e.getImmediate();const t=xm(n,{popupRedirectResolver:i_,persistence:[gg,sg,Mu]}),r=su("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=h_(i.toString());Zm(t,a,()=>a(t.currentUser)),Xm(t,l=>a(l))}}const s=tu("auth");return s&&Mm(t,`http://${s}`),t}function f_(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}Sm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ze("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",f_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});c_("Browser");var qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wt,Wu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function y(){}y.prototype=m.prototype,v.F=m.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(I,T,A){for(var g=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)g[Ce-2]=arguments[Ce];return m.prototype[T].apply(I,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,y){y||(y=0);const I=Array(16);if(typeof m=="string")for(var T=0;T<16;++T)I[T]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(T=0;T<16;++T)I[T]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=v.g[0],y=v.g[1],T=v.g[2];let A=v.g[3],g;g=m+(A^y&(T^A))+I[0]+3614090360&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+I[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+I[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+I[3]+3250441966&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+I[4]+4118548399&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+I[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+I[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+I[7]+4249261313&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+I[8]+1770035416&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+I[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+I[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+I[11]+2304563134&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(A^y&(T^A))+I[12]+1804603682&4294967295,m=y+(g<<7&4294967295|g>>>25),g=A+(T^m&(y^T))+I[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(y^A&(m^y))+I[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=y+(m^T&(A^m))+I[15]+1236535329&4294967295,y=T+(g<<22&4294967295|g>>>10),g=m+(T^A&(y^T))+I[1]+4129170786&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+I[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+I[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+I[0]+3921069994&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+I[5]+3593408605&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+I[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+I[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+I[4]+3889429448&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+I[9]+568446438&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+I[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+I[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+I[8]+1163531501&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(y^T))+I[13]+2850285829&4294967295,m=y+(g<<5&4294967295|g>>>27),g=A+(y^T&(m^y))+I[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^y&(A^m))+I[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=y+(A^m&(T^A))+I[12]+2368359562&4294967295,y=T+(g<<20&4294967295|g>>>12),g=m+(y^T^A)+I[5]+4294588738&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+I[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+I[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+I[14]+4259657740&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+I[1]+2763975236&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+I[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+I[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+I[10]+3200236656&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+I[13]+681279174&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+I[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+I[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+I[6]+76029189&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(y^T^A)+I[9]+3654602809&4294967295,m=y+(g<<4&4294967295|g>>>28),g=A+(m^y^T)+I[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^y)+I[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=y+(T^A^m)+I[2]+3299628645&4294967295,y=T+(g<<23&4294967295|g>>>9),g=m+(T^(y|~A))+I[0]+4096336452&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+I[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+I[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+I[5]+4237533241&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+I[12]+1700485571&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+I[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+I[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+I[1]+2240044497&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+I[8]+1873313359&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+I[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+I[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+I[13]+1309151649&4294967295,y=T+(g<<21&4294967295|g>>>11),g=m+(T^(y|~A))+I[4]+4149444226&4294967295,m=y+(g<<6&4294967295|g>>>26),g=A+(y^(m|~T))+I[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~y))+I[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=y+(A^(T|~m))+I[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+A&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const y=m-this.blockSize,I=this.C;let T=this.h,A=0;for(;A<m;){if(T==0)for(;A<=y;)s(this,v,A),A+=this.blockSize;if(typeof v=="string"){for(;A<m;)if(I[T++]=v.charCodeAt(A++),T==this.blockSize){s(this,I),T=0;break}}else for(;A<m;)if(I[T++]=v[A++],T==this.blockSize){s(this,I),T=0;break}}this.h=T,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,y=0;y<4;++y)for(let I=0;I<32;I+=8)v[m++]=this.g[y]>>>I&255;return v};function i(v,m){var y=l;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=m(v)}function a(v,m){this.h=m;const y=[];let I=!0;for(let T=v.length-1;T>=0;T--){const A=v[T]|0;I&&A==m||(y[T]=A,I=!1)}this.g=y}var l={};function u(v){return-128<=v&&v<128?i(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function d(v){if(isNaN(v)||!isFinite(v))return _;if(v<0)return k(d(-v));const m=[];let y=1;for(let I=0;v>=y;I++)m[I]=v/y|0,y*=4294967296;return new a(m,0)}function p(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return k(p(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=d(Math.pow(m,8));let I=_;for(let A=0;A<v.length;A+=8){var T=Math.min(8,v.length-A);const g=parseInt(v.substring(A,A+T),m);T<8?(T=d(Math.pow(m,T)),I=I.j(T).add(d(g))):(I=I.j(y),I=I.add(d(g)))}return I}var _=u(0),E=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-k(this).m();let v=0,m=1;for(let y=0;y<this.g.length;y++){const I=this.i(y);v+=(I>=0?I:4294967296+I)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(S(this))return"0";if(D(this))return"-"+k(this).toString(v);const m=d(Math.pow(v,6));var y=this;let I="";for(;;){const T=H(y,m).g;y=x(y,T.j(m));let A=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=T,S(y))return A+I;for(;A.length<6;)A="0"+A;I=A+I}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function S(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function D(v){return v.h==-1}n.l=function(v){return v=x(this,v),D(v)?-1:S(v)?0:1};function k(v){const m=v.g.length,y=[];for(let I=0;I<m;I++)y[I]=~v.g[I];return new a(y,~v.h).add(E)}n.abs=function(){return D(this)?k(this):this},n.add=function(v){const m=Math.max(this.g.length,v.g.length),y=[];let I=0;for(let T=0;T<=m;T++){let A=I+(this.i(T)&65535)+(v.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);I=g>>>16,A&=65535,g&=65535,y[T]=g<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function x(v,m){return v.add(k(m))}n.j=function(v){if(S(this)||S(v))return _;if(D(this))return D(v)?k(this).j(k(v)):k(k(this).j(v));if(D(v))return k(this.j(k(v)));if(this.l(R)<0&&v.l(R)<0)return d(this.m()*v.m());const m=this.g.length+v.g.length,y=[];for(var I=0;I<2*m;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(let T=0;T<v.g.length;T++){const A=this.i(I)>>>16,g=this.i(I)&65535,Ce=v.i(T)>>>16,Mt=v.i(T)&65535;y[2*I+2*T]+=g*Mt,L(y,2*I+2*T),y[2*I+2*T+1]+=A*Mt,L(y,2*I+2*T+1),y[2*I+2*T+1]+=g*Ce,L(y,2*I+2*T+1),y[2*I+2*T+2]+=A*Ce,L(y,2*I+2*T+2)}for(v=0;v<m;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=m;v<2*m;v++)y[v]=0;return new a(y,0)};function L(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function W(v,m){this.g=v,this.h=m}function H(v,m){if(S(m))throw Error("division by zero");if(S(v))return new W(_,_);if(D(v))return m=H(k(v),m),new W(k(m.g),k(m.h));if(D(m))return m=H(v,k(m)),new W(k(m.g),m.h);if(v.g.length>30){if(D(v)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var y=E,I=m;I.l(v)<=0;)y=re(y),I=re(I);var T=Z(y,1),A=Z(I,1);for(I=Z(I,2),y=Z(y,2);!S(I);){var g=A.add(I);g.l(v)<=0&&(T=T.add(y),A=g),I=Z(I,1),y=Z(y,1)}return m=x(v,T.j(m)),new W(T,m)}for(T=_;v.l(m)>=0;){for(y=Math.max(1,Math.floor(v.m()/m.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),A=d(y),g=A.j(m);D(g)||g.l(v)>0;)y-=I,A=d(y),g=A.j(m);S(A)&&(A=E),T=T.add(A),v=x(v,g)}return new W(T,v)}n.B=function(v){return H(this,v).h},n.and=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)&v.i(I);return new a(y,this.h&v.h)},n.or=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)|v.i(I);return new a(y,this.h|v.h)},n.xor=function(v){const m=Math.max(this.g.length,v.g.length),y=[];for(let I=0;I<m;I++)y[I]=this.i(I)^v.i(I);return new a(y,this.h^v.h)};function re(v){const m=v.g.length+1,y=[];for(let I=0;I<m;I++)y[I]=v.i(I)<<1|v.i(I-1)>>>31;return new a(y,v.h)}function Z(v,m){const y=m>>5;m%=32;const I=v.g.length-y,T=[];for(let A=0;A<I;A++)T[A]=m>0?v.i(A+y)>>>m|v.i(A+y+1)<<32-m:v.i(A+y);return new a(T,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Wu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,wt=a}).apply(typeof qc<"u"?qc:typeof self<"u"?self:typeof window<"u"?window:{});var Gr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hu,er,zu,as,Qi,Gu,Ku,Qu;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gr=="object"&&Gr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break e;h=h[w]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(c){var h=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&h.push([f,c[f]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function l(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function u(o,c,h){return o.call.apply(o.bind,arguments)}function d(o,c,h){return d=u,d.apply(null,arguments)}function p(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function _(o,c){function h(){}h.prototype=c.prototype,o.Z=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(f,w,b){for(var V=Array(arguments.length-2),q=2;q<arguments.length;q++)V[q-2]=arguments[q];return c.prototype[w].apply(f,V)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const c=o.length;if(c>0){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function S(o,c){for(let f=1;f<arguments.length;f++){const w=arguments[f];var h=typeof w;if(h=h!="object"?h:w?Array.isArray(w)?"array":h:"null",h=="array"||h=="object"&&typeof w.length=="number"){h=o.length||0;const b=w.length||0;o.length=h+b;for(let V=0;V<b;V++)o[h+V]=w[V]}else o.push(w)}}class D{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function k(o){a.setTimeout(()=>{throw o},0)}function x(){var o=v;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class L{constructor(){this.h=this.g=null}add(c,h){const f=W.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var W=new D(()=>new H,o=>o.reset());class H{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let re,Z=!1,v=new L,m=()=>{const o=Promise.resolve(void 0);re=()=>{o.then(y)}};function y(){for(var o;o=x();){try{o.h.call(o.g)}catch(h){k(h)}var c=W;c.j(o),c.h<100&&(c.h++,o.next=c.g,c.g=o)}Z=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,c),a.removeEventListener("test",h,c)}catch{}return o}();function g(o){return/^[\s\xa0]*$/.test(o)}function Ce(o,c){T.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,c)}_(Ce,T),Ce.prototype.init=function(o,c){const h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget,c||(h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ce.Z.h.call(this)},Ce.prototype.h=function(){Ce.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Mt="closure_listenable_"+(Math.random()*1e6|0),Ud=0;function Fd(o,c,h,f,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++Ud,this.da=this.fa=!1}function Dr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Vr(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function Bd(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function ha(o){const c={};for(const h in o)c[h]=o[h];return c}const da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fa(o,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let b=0;b<da.length;b++)h=da[b],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function Nr(o){this.src=o,this.g={},this.h=0}Nr.prototype.add=function(o,c,h,f,w){const b=o.toString();o=this.g[b],o||(o=this.g[b]=[],this.h++);const V=ni(o,c,f,w);return V>-1?(c=o[V],h||(c.fa=!1)):(c=new Fd(c,this.src,b,!!f,w),c.fa=h,o.push(c)),c};function ti(o,c){const h=c.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,c,void 0),b;(b=w>=0)&&Array.prototype.splice.call(f,w,1),b&&(Dr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ni(o,c,h,f){for(let w=0;w<o.length;++w){const b=o[w];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==f)return w}return-1}var ri="closure_lm_"+(Math.random()*1e6|0),si={};function pa(o,c,h,f,w){if(Array.isArray(c)){for(let b=0;b<c.length;b++)pa(o,c[b],h,f,w);return null}return h=_a(h),o&&o[Mt]?o.J(c,h,l(f)?!!f.capture:!1,w):$d(o,c,h,!1,f,w)}function $d(o,c,h,f,w,b){if(!c)throw Error("Invalid event type");const V=l(w)?!!w.capture:!!w;let q=oi(o);if(q||(o[ri]=q=new Nr(o)),h=q.add(c,h,f,V,b),h.proxy)return h;if(f=jd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)A||(w=V),w===void 0&&(w=!1),o.addEventListener(c.toString(),f,w);else if(o.attachEvent)o.attachEvent(ga(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function jd(){function o(h){return c.call(o.src,o.listener,h)}const c=qd;return o}function ma(o,c,h,f,w){if(Array.isArray(c))for(var b=0;b<c.length;b++)ma(o,c[b],h,f,w);else f=l(f)?!!f.capture:!!f,h=_a(h),o&&o[Mt]?(o=o.i,b=String(c).toString(),b in o.g&&(c=o.g[b],h=ni(c,h,f,w),h>-1&&(Dr(c[h]),Array.prototype.splice.call(c,h,1),c.length==0&&(delete o.g[b],o.h--)))):o&&(o=oi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ni(c,h,f,w)),(h=o>-1?c[o]:null)&&ii(h))}function ii(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Mt])ti(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(ga(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=oi(c))?(ti(h,o),h.h==0&&(h.src=null,c[ri]=null)):Dr(o)}}}function ga(o){return o in si?si[o]:si[o]="on"+o}function qd(o,c){if(o.da)o=!0;else{c=new Ce(c,this);const h=o.listener,f=o.ha||o.src;o.fa&&ii(o),o=h.call(f,c)}return o}function oi(o){return o=o[ri],o instanceof Nr?o:null}var ai="__closure_events_fn_"+(Math.random()*1e9>>>0);function _a(o){return typeof o=="function"?o:(o[ai]||(o[ai]=function(c){return o.handleEvent(c)}),o[ai])}function Te(){I.call(this),this.i=new Nr(this),this.M=this,this.G=null}_(Te,I),Te.prototype[Mt]=!0,Te.prototype.removeEventListener=function(o,c,h,f){ma(this,o,c,h,f)};function Re(o,c){var h,f=o.G;if(f)for(h=[];f;f=f.G)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new T(c,o);else if(c instanceof T)c.target=c.target||o;else{var w=c;c=new T(f,o),fa(c,w)}w=!0;let b,V;if(h)for(V=h.length-1;V>=0;V--)b=c.g=h[V],w=Or(b,f,!0,c)&&w;if(b=c.g=o,w=Or(b,f,!0,c)&&w,w=Or(b,f,!1,c)&&w,h)for(V=0;V<h.length;V++)b=c.g=h[V],w=Or(b,f,!1,c)&&w}Te.prototype.N=function(){if(Te.Z.N.call(this),this.i){var o=this.i;for(const c in o.g){const h=o.g[c];for(let f=0;f<h.length;f++)Dr(h[f]);delete o.g[c],o.h--}}this.G=null},Te.prototype.J=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Te.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Or(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();let w=!0;for(let b=0;b<c.length;++b){const V=c[b];if(V&&!V.da&&V.capture==h){const q=V.listener,de=V.ha||V.src;V.fa&&ti(o.i,V),w=q.call(de,f)!==!1&&w}}return w&&!f.defaultPrevented}function Wd(o,c){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=d(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(o,c||0)}function ya(o){o.g=Wd(()=>{o.g=null,o.i&&(o.i=!1,ya(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Hd extends I{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ya(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nn(o){I.call(this),this.h=o,this.g={}}_(Nn,I);var Ea=[];function va(o){Vr(o.g,function(c,h){this.g.hasOwnProperty(h)&&ii(c)},o),o.g={}}Nn.prototype.N=function(){Nn.Z.N.call(this),va(this)},Nn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ci=a.JSON.stringify,zd=a.JSON.parse,Gd=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ta(){}function Ia(){}var On={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function li(){T.call(this,"d")}_(li,T);function ui(){T.call(this,"c")}_(ui,T);var Ut={},wa=null;function xr(){return wa=wa||new Te}Ut.Ia="serverreachability";function Aa(o){T.call(this,Ut.Ia,o)}_(Aa,T);function xn(o){const c=xr();Re(c,new Aa(c))}Ut.STAT_EVENT="statevent";function ba(o,c){T.call(this,Ut.STAT_EVENT,o),this.stat=c}_(ba,T);function Se(o){const c=xr();Re(c,new ba(c,o))}Ut.Ja="timingevent";function Ra(o,c){T.call(this,Ut.Ja,o),this.size=c}_(Ra,T);function Ln(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},c)}function Mn(){this.g=!0}Mn.prototype.ua=function(){this.g=!1};function Kd(o,c,h,f,w,b){o.info(function(){if(o.g)if(b){var V="",q=b.split("&");for(let X=0;X<q.length;X++){var de=q[X].split("=");if(de.length>1){const me=de[0];de=de[1];const je=me.split("_");V=je.length>=2&&je[1]=="type"?V+(me+"="+de+"&"):V+(me+"=redacted&")}}}else V=null;else V=b;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+V})}function Qd(o,c,h,f,w,b,V){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+b+" "+V})}function rn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Yd(o,h)+(f?" "+f:"")})}function Jd(o,c){o.info(function(){return"TIMEOUT: "+c})}Mn.prototype.info=function(){};function Yd(o,c){if(!o.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(o=0;o<b.length;o++)if(Array.isArray(b[o])){var h=b[o];if(!(h.length<2)){var f=h[1];if(Array.isArray(f)&&!(f.length<1)){var w=f[0];if(w!="noop"&&w!="stop"&&w!="close")for(let V=1;V<f.length;V++)f[V]=""}}}}return ci(b)}catch{return c}}var Lr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Sa={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Pa;function hi(){}_(hi,Ta),hi.prototype.g=function(){return new XMLHttpRequest},Pa=new hi;function Un(o){return encodeURIComponent(String(o))}function Xd(o){var c=1;o=o.split(":");const h=[];for(;c>0&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function ot(o,c,h,f){this.j=o,this.i=c,this.l=h,this.S=f||1,this.V=new Nn(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ca}function Ca(){this.i=null,this.g="",this.h=!1}var ka={},di={};function fi(o,c,h){o.M=1,o.A=Ur($e(c)),o.u=h,o.R=!0,Da(o,null)}function Da(o,c){o.F=Date.now(),Mr(o),o.B=$e(o.A);var h=o.B,f=o.S;Array.isArray(f)||(f=[String(f)]),Wa(h.i,"t",f),o.C=0,h=o.j.L,o.h=new Ca,o.g=cc(o.j,h?c:null,!o.u),o.P>0&&(o.O=new Hd(d(o.Y,o,o.g),o.P)),c=o.V,h=o.g,f=o.ba;var w="readystatechange";Array.isArray(w)||(w&&(Ea[0]=w.toString()),w=Ea);for(let b=0;b<w.length;b++){const V=pa(h,w[b],f||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=o.J?ha(o.J):{},o.u?(o.v||(o.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,c)):(o.v="GET",o.g.ea(o.B,o.v,null,c)),xn(),Kd(o.i,o.v,o.B,o.l,o.S,o.u)}ot.prototype.ba=function(o){o=o.target;const c=this.O;c&&lt(o)==3?c.j():this.Y(o)},ot.prototype.Y=function(o){try{if(o==this.g)e:{const q=lt(this.g),de=this.g.ya(),X=this.g.ca();if(!(q<3)&&(q!=3||this.g&&(this.h.h||this.g.la()||Ya(this.g)))){this.K||q!=4||de==7||(de==8||X<=0?xn(3):xn(2)),pi(this);var c=this.g.ca();this.X=c;var h=Zd(this);if(this.o=c==200,Qd(this.i,this.v,this.B,this.l,this.S,q,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,w=this.g;if((f=w.g?w.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var b=f;break t}}b=null}if(o=b)rn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,mi(this,o);else{this.o=!1,this.m=3,Se(12),Ft(this),Fn(this);break e}}if(this.R){o=!0;let me;for(;!this.K&&this.C<h.length;)if(me=ef(this,h),me==di){q==4&&(this.m=4,Se(14),o=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(me==ka){this.m=4,Se(15),rn(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else rn(this.i,this.l,me,null),mi(this,me);if(Va(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),q!=4||h.length!=0||this.h.h||(this.m=1,Se(16),o=!1),this.o=this.o&&o,!o)rn(this.i,this.l,h,"[Invalid Chunked Response]"),Ft(this),Fn(this);else if(h.length>0&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.aa&&!V.P&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),wi(V),V.P=!0,Se(11))}}else rn(this.i,this.l,h,null),mi(this,h);q==4&&Ft(this),this.o&&!this.K&&(q==4?sc(this.j,this):(this.o=!1,Mr(this)))}else mf(this.g),c==400&&h.indexOf("Unknown SID")>0?(this.m=3,Se(12)):(this.m=0,Se(13)),Ft(this),Fn(this)}}}catch{}finally{}};function Zd(o){if(!Va(o))return o.g.la();const c=Ya(o.g);if(c==="")return"";let h="";const f=c.length,w=lt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Ft(o),Fn(o),"";o.h.i=new a.TextDecoder}for(let b=0;b<f;b++)o.h.h=!0,h+=o.h.i.decode(c[b],{stream:!(w&&b==f-1)});return c.length=0,o.h.g+=h,o.C=0,o.h.g}function Va(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ef(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?di:(h=Number(c.substring(h,f)),isNaN(h)?ka:(f+=1,f+h>c.length?di:(c=c.slice(f,f+h),o.C=f+h,c)))}ot.prototype.cancel=function(){this.K=!0,Ft(this)};function Mr(o){o.T=Date.now()+o.H,Na(o,o.H)}function Na(o,c){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Ln(d(o.aa,o),c)}function pi(o){o.D&&(a.clearTimeout(o.D),o.D=null)}ot.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Jd(this.i,this.B),this.M!=2&&(xn(),Se(17)),Ft(this),this.m=2,Fn(this)):Na(this,this.T-o)};function Fn(o){o.j.I==0||o.K||sc(o.j,o)}function Ft(o){pi(o);var c=o.O;c&&typeof c.dispose=="function"&&c.dispose(),o.O=null,va(o.V),o.g&&(c=o.g,o.g=null,c.abort(),c.dispose())}function mi(o,c){try{var h=o.j;if(h.I!=0&&(h.g==o||gi(h.h,o))){if(!o.L&&gi(h.h,o)&&h.I==3){try{var f=h.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)qr(h),$r(h);else break e;Ii(h),Se(18)}}else h.xa=w[1],0<h.xa-h.K&&w[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=Ln(d(h.Va,h),6e3));La(h.h)<=1&&h.ta&&(h.ta=void 0)}else $t(h,11)}else if((o.L||h.g==o)&&qr(h),!g(c))for(w=h.Ba.g.parse(c),c=0;c<w.length;c++){let X=w[c];const me=X[0];if(!(me<=h.K))if(h.K=me,X=X[1],h.I==2)if(X[0]=="c"){h.M=X[1],h.ba=X[2];const je=X[3];je!=null&&(h.ka=je,h.j.info("VER="+h.ka));const jt=X[4];jt!=null&&(h.za=jt,h.j.info("SVER="+h.za));const ut=X[5];ut!=null&&typeof ut=="number"&&ut>0&&(f=1.5*ut,h.O=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const ht=o.g;if(ht){const Hr=ht.g?ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hr){var b=f.h;b.g||Hr.indexOf("spdy")==-1&&Hr.indexOf("quic")==-1&&Hr.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(_i(b,b.h),b.h=null))}if(f.G){const Ai=ht.g?ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Ai&&(f.wa=Ai,ee(f.J,f.G,Ai))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),f=h;var V=o;if(f.na=ac(f,f.L?f.ba:null,f.W),V.L){Ma(f.h,V);var q=V,de=f.O;de&&(q.H=de),q.D&&(pi(q),Mr(q)),f.g=V}else nc(f);h.i.length>0&&jr(h)}else X[0]!="stop"&&X[0]!="close"||$t(h,7);else h.I==3&&(X[0]=="stop"||X[0]=="close"?X[0]=="stop"?$t(h,7):Ti(h):X[0]!="noop"&&h.l&&h.l.qa(X),h.A=0)}}xn(4)}catch{}}var tf=class{constructor(o,c){this.g=o,this.map=c}};function Oa(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function xa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function La(o){return o.h?1:o.g?o.g.size:0}function gi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function _i(o,c){o.g?o.g.add(c):o.h=c}function Ma(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Oa.prototype.cancel=function(){if(this.i=Ua(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ua(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.G);return c}return R(o.i)}var Fa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nf(o,c){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const f=o[h].indexOf("=");let w,b=null;f>=0?(w=o[h].substring(0,f),b=o[h].substring(f+1)):w=o[h],c(w,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function at(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;o instanceof at?(this.l=o.l,Bn(this,o.j),this.o=o.o,this.g=o.g,$n(this,o.u),this.h=o.h,yi(this,Ha(o.i)),this.m=o.m):o&&(c=String(o).match(Fa))?(this.l=!1,Bn(this,c[1]||"",!0),this.o=jn(c[2]||""),this.g=jn(c[3]||"",!0),$n(this,c[4]),this.h=jn(c[5]||"",!0),yi(this,c[6]||"",!0),this.m=jn(c[7]||"")):(this.l=!1,this.i=new Wn(null,this.l))}at.prototype.toString=function(){const o=[];var c=this.j;c&&o.push(qn(c,Ba,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(qn(c,Ba,!0),"@"),o.push(Un(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(qn(h,h.charAt(0)=="/"?of:sf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",qn(h,cf)),o.join("")},at.prototype.resolve=function(o){const c=$e(this);let h=!!o.j;h?Bn(c,o.j):h=!!o.o,h?c.o=o.o:h=!!o.g,h?c.g=o.g:h=o.u!=null;var f=o.h;if(h)$n(c,o.u);else if(h=!!o.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var w=c.h.lastIndexOf("/");w!=-1&&(f=c.h.slice(0,w+1)+f)}if(w=f,w==".."||w==".")f="";else if(w.indexOf("./")!=-1||w.indexOf("/.")!=-1){f=w.lastIndexOf("/",0)==0,w=w.split("/");const b=[];for(let V=0;V<w.length;){const q=w[V++];q=="."?f&&V==w.length&&b.push(""):q==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),f&&V==w.length&&b.push("")):(b.push(q),f=!0)}f=b.join("/")}else f=w}return h?c.h=f:h=o.i.toString()!=="",h?yi(c,Ha(o.i)):h=!!o.m,h&&(c.m=o.m),c};function $e(o){return new at(o)}function Bn(o,c,h){o.j=h?jn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function $n(o,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);o.u=c}else o.u=null}function yi(o,c,h){c instanceof Wn?(o.i=c,lf(o.i,o.l)):(h||(c=qn(c,af)),o.i=new Wn(c,o.l))}function ee(o,c,h){o.i.set(c,h)}function Ur(o){return ee(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function jn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function qn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,rf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function rf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ba=/[#\/\?@]/g,sf=/[#\?:]/g,of=/[#\?]/g,af=/[#\?@]/g,cf=/#/g;function Wn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Bt(o){o.g||(o.g=new Map,o.h=0,o.i&&nf(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Wn.prototype,n.add=function(o,c){Bt(this),this.i=null,o=sn(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function $a(o,c){Bt(o),c=sn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ja(o,c){return Bt(o),c=sn(o,c),o.g.has(c)}n.forEach=function(o,c){Bt(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(c,w,f,this)},this)},this)};function qa(o,c){Bt(o);let h=[];if(typeof c=="string")ja(o,c)&&(h=h.concat(o.g.get(sn(o,c))));else for(o=Array.from(o.g.values()),c=0;c<o.length;c++)h=h.concat(o[c]);return h}n.set=function(o,c){return Bt(this),this.i=null,o=sn(this,o),ja(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=qa(this,o),o.length>0?String(o[0]):c):c};function Wa(o,c,h){$a(o,c),h.length>0&&(o.i=null,o.g.set(sn(o,c),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var h=c[f];const w=Un(h);h=qa(this,h);for(let b=0;b<h.length;b++){let V=w;h[b]!==""&&(V+="="+Un(h[b])),o.push(V)}}return this.i=o.join("&")};function Ha(o){const c=new Wn;return c.i=o.i,o.g&&(c.g=new Map(o.g),c.h=o.h),c}function sn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function lf(o,c){c&&!o.j&&(Bt(o),o.i=null,o.g.forEach(function(h,f){const w=f.toLowerCase();f!=w&&($a(this,f),Wa(this,w,h))},o)),o.j=c}function uf(o,c){const h=new Mn;if(a.Image){const f=new Image;f.onload=p(ct,h,"TestLoadImage: loaded",!0,c,f),f.onerror=p(ct,h,"TestLoadImage: error",!1,c,f),f.onabort=p(ct,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(ct,h,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function hf(o,c){const h=new Mn,f=new AbortController,w=setTimeout(()=>{f.abort(),ct(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(b=>{clearTimeout(w),b.ok?ct(h,"TestPingServer: ok",!0,c):ct(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ct(h,"TestPingServer: error",!1,c)})}function ct(o,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function df(){this.g=new Gd}function Ei(o){this.i=o.Sb||null,this.h=o.ab||!1}_(Ei,Ta),Ei.prototype.g=function(){return new Fr(this.i,this.h)};function Fr(o,c){Te.call(this),this.H=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}_(Fr,Te),n=Fr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=c,this.readyState=1,zn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(c.body=o),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Hn(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,zn(this)),this.g&&(this.readyState=3,zn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;za(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function za(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Hn(this):zn(this),this.readyState==3&&za(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,Hn(this))},n.Na=function(o){this.g&&(this.response=o,Hn(this))},n.ga=function(){this.g&&Hn(this)};function Hn(o){o.readyState=4,o.l=null,o.j=null,o.B=null,zn(o)}n.setRequestHeader=function(o,c){this.A.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function zn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ga(o){let c="";return Vr(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function vi(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Ga(h),typeof o=="string"?h!=null&&Un(h):ee(o,c,h))}function ie(o){Te.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}_(ie,Te);var ff=/^https?$/i,pf=["POST","PUT"];n=ie.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Pa.g(),this.g.onreadystatechange=E(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(b){Ka(this,b);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())h.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),w=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(pf,c,void 0)>=0)||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,V]of h)this.g.setRequestHeader(b,V);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(b){Ka(this,b)}};function Ka(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.o=5,Qa(o),Br(o)}function Qa(o){o.A||(o.A=!0,Re(o,"complete"),Re(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,Re(this,"complete"),Re(this,"abort"),Br(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Br(this,!0)),ie.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ja(this):this.Xa())},n.Xa=function(){Ja(this)};function Ja(o){if(o.h&&typeof i<"u"){if(o.v&&lt(o)==4)setTimeout(o.Ca.bind(o),0);else if(Re(o,"readystatechange"),lt(o)==4){o.h=!1;try{const b=o.ca();e:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=b===0){let V=String(o.D).match(Fa)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),f=!ff.test(V?V.toLowerCase():"")}h=f}if(h)Re(o,"complete"),Re(o,"success");else{o.o=6;try{var w=lt(o)>2?o.g.statusText:""}catch{w=""}o.l=w+" ["+o.ca()+"]",Qa(o)}}finally{Br(o)}}}}function Br(o,c){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,c||Re(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function lt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return lt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),zd(c)}};function Ya(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function mf(o){const c={};o=(o.g&&lt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(g(o[f]))continue;var h=Xd(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[w]||[];c[w]=b,b.push(h)}Bd(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Xa(o){this.za=0,this.i=[],this.j=new Mn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Gn("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Gn("baseRetryDelayMs",5e3,o),this.Za=Gn("retryDelaySeedMs",1e4,o),this.Ta=Gn("forwardChannelMaxRetries",2,o),this.va=Gn("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Oa(o&&o.concurrentRequestLimit),this.Ba=new df,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Xa.prototype,n.ka=8,n.I=1,n.connect=function(o,c,h,f){Se(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.J=ac(this,null,this.W),jr(this)};function Ti(o){if(Za(o),o.I==3){var c=o.V++,h=$e(o.J);if(ee(h,"SID",o.M),ee(h,"RID",c),ee(h,"TYPE","terminate"),Kn(o,h),c=new ot(o,o.j,c),c.M=2,c.A=Ur($e(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=c.A,h=!0),h||(c.g=cc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),Mr(c)}oc(o)}function $r(o){o.g&&(wi(o),o.g.cancel(),o.g=null)}function Za(o){$r(o),o.v&&(a.clearTimeout(o.v),o.v=null),qr(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function jr(o){if(!xa(o.h)&&!o.m){o.m=!0;var c=o.Ea;re||m(),Z||(re(),Z=!0),v.add(c,o),o.D=0}}function gf(o,c){return La(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=c.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Ln(d(o.Ea,o,c),ic(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const w=new ot(this,this.j,o);let b=this.o;if(this.U&&(b?(b=ha(b),fa(b,this.U)):b=this.U),this.u!==null||this.R||(w.J=b,b=null),this.S)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=tc(this,w,c),h=$e(this.J),ee(h,"RID",o),ee(h,"CVER",22),this.G&&ee(h,"X-HTTP-Session-Id",this.G),Kn(this,h),b&&(this.R?c="headers="+Un(Ga(b))+"&"+c:this.u&&vi(h,this.u,b)),_i(this.h,w),this.Ra&&ee(h,"TYPE","init"),this.S?(ee(h,"$req",c),ee(h,"SID","null"),w.U=!0,fi(w,h,null)):fi(w,h,c),this.I=2}}else this.I==3&&(o?ec(this,o):this.i.length==0||xa(this.h)||ec(this))};function ec(o,c){var h;c?h=c.l:h=o.V++;const f=$e(o.J);ee(f,"SID",o.M),ee(f,"RID",h),ee(f,"AID",o.K),Kn(o,f),o.u&&o.o&&vi(f,o.u,o.o),h=new ot(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),c&&(o.i=c.G.concat(o.i)),c=tc(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),_i(o.h,h),fi(h,f,c)}function Kn(o,c){o.H&&Vr(o.H,function(h,f){ee(c,f,h)}),o.l&&Vr({},function(h,f){ee(c,f,h)})}function tc(o,c,h){h=Math.min(o.i.length,h);const f=o.l?d(o.l.Ka,o.l,o):null;e:{var w=o.i;let q=-1;for(;;){const de=["count="+h];q==-1?h>0?(q=w[0].g,de.push("ofs="+q)):q=0:de.push("ofs="+q);let X=!0;for(let me=0;me<h;me++){var b=w[me].g;const je=w[me].map;if(b-=q,b<0)q=Math.max(0,w[me].g-100),X=!1;else try{b="req"+b+"_"||"";try{var V=je instanceof Map?je:Object.entries(je);for(const[jt,ut]of V){let ht=ut;l(ut)&&(ht=ci(ut)),de.push(b+jt+"="+encodeURIComponent(ht))}}catch(jt){throw de.push(b+"type="+encodeURIComponent("_badmap")),jt}}catch{f&&f(je)}}if(X){V=de.join("&");break e}}V=void 0}return o=o.i.splice(0,h),c.G=o,V}function nc(o){if(!o.g&&!o.v){o.Y=1;var c=o.Da;re||m(),Z||(re(),Z=!0),v.add(c,o),o.A=0}}function Ii(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Ln(d(o.Da,o),ic(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,rc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Ln(d(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Se(10),$r(this),rc(this))};function wi(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function rc(o){o.g=new ot(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var c=$e(o.na);ee(c,"RID","rpc"),ee(c,"SID",o.M),ee(c,"AID",o.K),ee(c,"CI",o.F?"0":"1"),!o.F&&o.ia&&ee(c,"TO",o.ia),ee(c,"TYPE","xmlhttp"),Kn(o,c),o.u&&o.o&&vi(c,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=Ur($e(c)),h.u=null,h.R=!0,Da(h,o)}n.Va=function(){this.C!=null&&(this.C=null,$r(this),Ii(this),Se(19))};function qr(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function sc(o,c){var h=null;if(o.g==c){qr(o),wi(o),o.g=null;var f=2}else if(gi(o.h,c))h=c.G,Ma(o.h,c),f=1;else return;if(o.I!=0){if(c.o)if(f==1){h=c.u?c.u.length:0,c=Date.now()-c.F;var w=o.D;f=xr(),Re(f,new Ra(f,h)),jr(o)}else nc(o);else if(w=c.m,w==3||w==0&&c.X>0||!(f==1&&gf(o,c)||f==2&&Ii(o)))switch(h&&h.length>0&&(c=o.h,c.i=c.i.concat(h)),w){case 1:$t(o,5);break;case 4:$t(o,10);break;case 3:$t(o,6);break;default:$t(o,2)}}}function ic(o,c){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*c}function $t(o,c){if(o.j.info("Error code "+c),c==2){var h=d(o.bb,o),f=o.Ua;const w=!f;f=new at(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Bn(f,"https"),Ur(f),w?uf(f.toString(),h):hf(f.toString(),h)}else Se(2);o.I=0,o.l&&o.l.pa(c),oc(o),Za(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function oc(o){if(o.I=0,o.ja=[],o.l){const c=Ua(o.h);(c.length!=0||o.i.length!=0)&&(S(o.ja,c),S(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function ac(o,c,h){var f=h instanceof at?$e(h):new at(h);if(f.g!="")c&&(f.g=c+"."+f.g),$n(f,f.u);else{var w=a.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;const b=new at(null);f&&Bn(b,f),c&&(b.g=c),w&&$n(b,w),h&&(b.h=h),f=b}return h=o.G,c=o.wa,h&&c&&ee(f,h,c),ee(f,"VER",o.ka),Kn(o,f),f}function cc(o,c,h){if(c&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Aa&&!o.ma?new ie(new Ei({ab:h})):new ie(o.ma),c.Fa(o.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lc(){}n=lc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Wr(){}Wr.prototype.g=function(o,c){return new Ve(o,c)};function Ve(o,c){Te.call(this),this.g=new Xa(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(o?o["X-WebChannel-Client-Profile"]=c.sa:o={"X-WebChannel-Client-Profile":c.sa}),this.g.U=o,(o=c&&c.Qb)&&!g(o)&&(this.g.u=o),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!g(c)&&(this.g.G=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new on(this)}_(Ve,Te),Ve.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ve.prototype.close=function(){Ti(this.g)},Ve.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=ci(o),o=h);c.i.push(new tf(c.Ya++,o)),c.I==3&&jr(c)},Ve.prototype.N=function(){this.g.l=null,delete this.j,Ti(this.g),delete this.g,Ve.Z.N.call(this)};function uc(o){li.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}_(uc,li);function hc(){ui.call(this),this.status=1}_(hc,ui);function on(o){this.g=o}_(on,lc),on.prototype.ra=function(){Re(this.g,"a")},on.prototype.qa=function(o){Re(this.g,new uc(o))},on.prototype.pa=function(o){Re(this.g,new hc)},on.prototype.oa=function(){Re(this.g,"b")},Wr.prototype.createWebChannel=Wr.prototype.g,Ve.prototype.send=Ve.prototype.o,Ve.prototype.open=Ve.prototype.m,Ve.prototype.close=Ve.prototype.close,Qu=function(){return new Wr},Ku=function(){return xr()},Gu=Ut,Qi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Lr.NO_ERROR=0,Lr.TIMEOUT=8,Lr.HTTP_ERROR=6,as=Lr,Sa.COMPLETE="complete",zu=Sa,Ia.EventType=On,On.OPEN="a",On.CLOSE="b",On.ERROR="c",On.MESSAGE="d",Te.prototype.listen=Te.prototype.J,er=Ia,ie.prototype.listenOnce=ie.prototype.K,ie.prototype.getLastError=ie.prototype.Ha,ie.prototype.getLastErrorCode=ie.prototype.ya,ie.prototype.getStatus=ie.prototype.ca,ie.prototype.getResponseJson=ie.prototype.La,ie.prototype.getResponseText=ie.prototype.la,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Fa,Hu=ie}).apply(typeof Gr<"u"?Gr:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
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
 */let Cn="12.8.0";function p_(n){Cn=n}/**
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
 */const Qt=new go("@firebase/firestore");function an(){return Qt.logLevel}function N(n,...e){if(Qt.logLevel<=z.DEBUG){const t=e.map(So);Qt.debug(`Firestore (${Cn}): ${n}`,...t)}}function st(n,...e){if(Qt.logLevel<=z.ERROR){const t=e.map(So);Qt.error(`Firestore (${Cn}): ${n}`,...t)}}function Tn(n,...e){if(Qt.logLevel<=z.WARN){const t=e.map(So);Qt.warn(`Firestore (${Cn}): ${n}`,...t)}}function So(n){if(typeof n=="string")return n;try{return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Ju(n,r,t)}function Ju(n,e,t){let r=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw st(r),new Error(r)}function Y(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Ju(e,s,r)}function $(n,e){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends Ze{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class At{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Yu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(we.UNAUTHENTICATED))}shutdown(){}}class g_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class __{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Y(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new At;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new At,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new At)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Y(typeof r.accessToken=="string",31837,{l:r}),new Yu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Y(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class y_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class E_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new y_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(we.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Wc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Y(this.o===void 0,3512);const r=i=>{i.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Wc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Y(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Wc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function T_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Po{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=T_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function G(n,e){return n<e?-1:n>e?1:0}function Ji(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Vi(s)===Vi(i)?G(s,i):Vi(s)?1:-1}return G(n.length,e.length)}const I_=55296,w_=57343;function Vi(n){const e=n.charCodeAt(0);return e>=I_&&e<=w_}function In(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const Hc="__name__";class qe{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qe?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=qe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return G(e.length,t.length)}static compareSegments(e,t){const r=qe.isNumericId(e),s=qe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?qe.extractNumericId(e).compare(qe.extractNumericId(t)):Ji(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wt.fromString(e.substring(4,e.length-2))}}class te extends qe{construct(e,t,r){return new te(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new te(t)}static emptyPath(){return new te([])}}const A_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends qe{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return A_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Hc}static keyField(){return new Ee([Hc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new O(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new O(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(te.fromString(e))}static fromName(e){return new M(te.fromString(e).popFirst(5))}static empty(){return new M(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return te.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new te(e.slice()))}}/**
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
 */function Xu(n,e,t){if(!t)throw new O(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function b_(n,e,t,r){if(e===!0&&r===!0)throw new O(C.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function zc(n){if(!M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Gc(n){if(M.isDocumentKey(n))throw new O(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Zu(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Co(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function Jt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Co(n);throw new O(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function br(n,e){if(!Zu(n))throw new O(C.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(C.INVALID_ARGUMENT,t);return!0}/**
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
 */const Kc=-62135596800,Qc=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Qc);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Kc)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qc}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(br(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Kc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:he("string",ne._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
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
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ne(0,0))}static max(){return new B(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fr=-1;function R_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new St(s,M.empty(),e)}function S_(n){return new St(n.readTime,n.key,fr)}class St{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new St(B.min(),M.empty(),fr)}static max(){return new St(B.max(),M.empty(),fr)}}function P_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:G(n.largestBatchId,e.largestBatchId))}/**
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
 */const C_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function kn(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==C_)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):P.reject(t)}static resolve(e){return new P((t,r)=>{t(e)})}static reject(e){return new P((t,r)=>{r(e)})}static waitFor(e){return new P((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next(s=>s?P.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new P((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next(p=>{a[d]=p,++l,l===i&&r(a)},p=>s(p))}})}static doWhile(e,t){return new P((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function D_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Dn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Fs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Fs.ce=-1;/**
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
 */const ko=-1;function Bs(n){return n==null}function Ts(n){return n===0&&1/n==-1/0}function V_(n){return typeof n=="number"&&Number.isInteger(n)&&!Ts(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const eh="";function N_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Jc(e)),e=O_(n.get(t),e);return Jc(e)}function O_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case eh:t+="";break;default:t+=i}}return t}function Jc(n){return n+eh+""}/**
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
 */function Yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function th(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class se{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Kr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Kr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Kr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Kr(this.root,e,this.comparator,!0)}}class Kr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ye(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xc(this.data.getIterator())}getIteratorFrom(e){return new Xc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class Xc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ne{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new pe(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return In(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class nh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nh("Invalid base64 string: "+i):i}}(e);return new ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const x_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(Y(!!n,39018),typeof n=="string"){let e=0;const t=x_.exec(n);if(Y(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ce(n.seconds),nanos:ce(n.nanos)}}function ce(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ct(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
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
 */const rh="server_timestamp",sh="__type__",ih="__previous_value__",oh="__local_write_time__";function Do(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[sh])==null?void 0:r.stringValue)===rh}function $s(n){const e=n.mapValue.fields[ih];return Do(e)?$s(e):e}function pr(n){const e=Pt(n.mapValue.fields[oh].timestampValue);return new ne(e.seconds,e.nanos)}/**
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
 */class L_{constructor(e,t,r,s,i,a,l,u,d,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=_}}const Is="(default)";class mr{constructor(e,t){this.projectId=e,this.database=t||Is}static empty(){return new mr("","")}get isDefaultDatabase(){return this.database===Is}isEqual(e){return e instanceof mr&&e.projectId===this.projectId&&e.database===this.database}}function M_(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new O(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mr(n.options.projectId,e)}/**
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
 */const ah="__type__",U_="__max__",Qr={mapValue:{}},ch="__vector__",ws="value";function kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Do(n)?4:B_(n)?9007199254740991:F_(n)?10:11:F(28295,{value:n})}function Ye(n,e){if(n===e)return!0;const t=kt(n);if(t!==kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return pr(n).isEqual(pr(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Pt(s.timestampValue),l=Pt(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Ct(s.bytesValue).isEqual(Ct(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ce(s.geoPointValue.latitude)===ce(i.geoPointValue.latitude)&&ce(s.geoPointValue.longitude)===ce(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ce(s.integerValue)===ce(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ce(s.doubleValue),l=ce(i.doubleValue);return a===l?Ts(a)===Ts(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return In(n.arrayValue.values||[],e.arrayValue.values||[],Ye);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Yc(a)!==Yc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Ye(a[u],l[u])))return!1;return!0}(n,e);default:return F(52216,{left:n})}}function gr(n,e){return(n.values||[]).find(t=>Ye(t,e))!==void 0}function wn(n,e){if(n===e)return 0;const t=kt(n),r=kt(e);if(t!==r)return G(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return G(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ce(i.integerValue||i.doubleValue),u=ce(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Zc(n.timestampValue,e.timestampValue);case 4:return Zc(pr(n),pr(e));case 5:return Ji(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Ct(i),u=Ct(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=G(l[d],u[d]);if(p!==0)return p}return G(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=G(ce(i.latitude),ce(a.latitude));return l!==0?l:G(ce(i.longitude),ce(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return el(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,R,S,D;const l=i.fields||{},u=a.fields||{},d=(E=l[ws])==null?void 0:E.arrayValue,p=(R=u[ws])==null?void 0:R.arrayValue,_=G(((S=d==null?void 0:d.values)==null?void 0:S.length)||0,((D=p==null?void 0:p.values)==null?void 0:D.length)||0);return _!==0?_:el(d,p)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Qr.mapValue&&a===Qr.mapValue)return 0;if(i===Qr.mapValue)return 1;if(a===Qr.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=a.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let _=0;_<u.length&&_<p.length;++_){const E=Ji(u[_],p[_]);if(E!==0)return E;const R=wn(l[u[_]],d[p[_]]);if(R!==0)return R}return G(u.length,p.length)}(n.mapValue,e.mapValue);default:throw F(23264,{he:t})}}function Zc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return G(n,e);const t=Pt(n),r=Pt(e),s=G(t.seconds,r.seconds);return s!==0?s:G(t.nanos,r.nanos)}function el(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=wn(t[s],r[s]);if(i)return i}return G(t.length,r.length)}function An(n){return Yi(n)}function Yi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Pt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ct(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return M.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Yi(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Yi(t.fields[a])}`;return s+"}"}(n.mapValue):F(61005,{value:n})}function cs(n){switch(kt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$s(n);return e?16+cs(e):16;case 5:return 2*n.stringValue.length;case 6:return Ct(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+cs(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return xt(r.fields,(i,a)=>{s+=i.length+cs(a)}),s}(n.mapValue);default:throw F(13486,{value:n})}}function Xi(n){return!!n&&"integerValue"in n}function Vo(n){return!!n&&"arrayValue"in n}function tl(n){return!!n&&"nullValue"in n}function nl(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ls(n){return!!n&&"mapValue"in n}function F_(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[ah])==null?void 0:r.stringValue)===ch}function ir(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return xt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ir(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ir(n.arrayValue.values[t]);return e}return{...n}}function B_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===U_}/**
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
 */class De{constructor(e){this.value=e}static empty(){return new De({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ls(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ir(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=ir(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ls(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ye(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ls(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){xt(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new De(ir(this.value))}}function lh(n){const e=[];return xt(n.fields,(t,r)=>{const s=new Ee([t]);if(ls(r)){const i=lh(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ne(e)}/**
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
 */class Ae{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ae(e,0,B.min(),B.min(),B.min(),De.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,B.min(),B.min(),De.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,B.min(),B.min(),De.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=De.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=De.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class As{constructor(e,t){this.position=e,this.inclusive=t}}function rl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=wn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function sl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Ye(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class bs{constructor(e,t="asc"){this.field=e,this.dir=t}}function $_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class uh{}class fe extends uh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new q_(e,t,r):t==="array-contains"?new z_(e,r):t==="in"?new G_(e,r):t==="not-in"?new K_(e,r):t==="array-contains-any"?new Q_(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new W_(e,r):new H_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(wn(t,this.value)):t!==null&&kt(this.value)===kt(t)&&this.matchesComparison(wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xe extends uh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Xe(e,t)}matches(e){return hh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hh(n){return n.op==="and"}function dh(n){return j_(n)&&hh(n)}function j_(n){for(const e of n.filters)if(e instanceof Xe)return!1;return!0}function Zi(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+An(n.value);if(dh(n))return n.filters.map(e=>Zi(e)).join(",");{const e=n.filters.map(t=>Zi(t)).join(",");return`${n.op}(${e})`}}function fh(n,e){return n instanceof fe?function(r,s){return s instanceof fe&&r.op===s.op&&r.field.isEqual(s.field)&&Ye(r.value,s.value)}(n,e):n instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&fh(a,s.filters[l]),!0):!1}(n,e):void F(19439)}function ph(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${An(t.value)}`}(n):n instanceof Xe?function(t){return t.op.toString()+" {"+t.getFilters().map(ph).join(" ,")+"}"}(n):"Filter"}class q_ extends fe{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class W_ extends fe{constructor(e,t){super(e,"in",t),this.keys=mh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class H_ extends fe{constructor(e,t){super(e,"not-in",t),this.keys=mh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function mh(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>M.fromName(r.referenceValue))}class z_ extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vo(t)&&gr(t.arrayValue,this.value)}}class G_ extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&gr(this.value.arrayValue,t)}}class K_ extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!gr(this.value.arrayValue,t)}}class Q_ extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>gr(this.value.arrayValue,r))}}/**
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
 */class J_{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Te=null}}function il(n,e=null,t=[],r=[],s=null,i=null,a=null){return new J_(n,e,t,r,s,i,a)}function No(n){const e=$(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Zi(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Bs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>An(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>An(r)).join(",")),e.Te=t}return e.Te}function Oo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!$_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!fh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!sl(n.startAt,e.startAt)&&sl(n.endAt,e.endAt)}function eo(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class js{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Y_(n,e,t,r,s,i,a,l){return new js(n,e,t,r,s,i,a,l)}function gh(n){return new js(n)}function ol(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function X_(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Z_(n){return n.collectionGroup!==null}function or(n){const e=$(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new pe(Ee.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new bs(i,r))}),t.has(Ee.keyField().canonicalString())||e.Ie.push(new bs(Ee.keyField(),r))}return e.Ie}function Ke(n){const e=$(n);return e.Ee||(e.Ee=ey(e,or(n))),e.Ee}function ey(n,e){if(n.limitType==="F")return il(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bs(s.field,i)});const t=n.endAt?new As(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new As(n.startAt.position,n.startAt.inclusive):null;return il(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function to(n,e,t){return new js(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qs(n,e){return Oo(Ke(n),Ke(e))&&n.limitType===e.limitType}function _h(n){return`${No(Ke(n))}|lt:${n.limitType}`}function cn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>ph(s)).join(", ")}]`),Bs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>An(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>An(s)).join(",")),`Target(${r})`}(Ke(n))}; limitType=${n.limitType})`}function Ws(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of or(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,u){const d=rl(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,or(r),s)||r.endAt&&!function(a,l,u){const d=rl(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,or(r),s))}(n,e)}function ty(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function yh(n){return(e,t)=>{let r=!1;for(const s of or(n)){const i=ny(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function ny(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):function(i,a,l){const u=a.data.field(i),d=l.data.field(i);return u!==null&&d!==null?wn(u,d):F(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class tn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xt(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return th(this.inner)}size(){return this.innerSize}}/**
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
 */const ry=new se(M.comparator);function it(){return ry}const Eh=new se(M.comparator);function tr(...n){let e=Eh;for(const t of n)e=e.insert(t.key,t);return e}function vh(n){let e=Eh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Wt(){return ar()}function Th(){return ar()}function ar(){return new tn(n=>n.toString(),(n,e)=>n.isEqual(e))}const sy=new se(M.comparator),iy=new pe(M.comparator);function K(...n){let e=iy;for(const t of n)e=e.add(t);return e}const oy=new pe(G);function ay(){return oy}/**
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
 */function xo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ts(e)?"-0":e}}function Ih(n){return{integerValue:""+n}}function cy(n,e){return V_(e)?Ih(e):xo(n,e)}/**
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
 */class Hs{constructor(){this._=void 0}}function ly(n,e,t){return n instanceof Rs?function(s,i){const a={fields:{[sh]:{stringValue:rh},[oh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Do(i)&&(i=$s(i)),i&&(a.fields[ih]=i),{mapValue:a}}(t,e):n instanceof _r?Ah(n,e):n instanceof yr?bh(n,e):function(s,i){const a=wh(s,i),l=al(a)+al(s.Ae);return Xi(a)&&Xi(s.Ae)?Ih(l):xo(s.serializer,l)}(n,e)}function uy(n,e,t){return n instanceof _r?Ah(n,e):n instanceof yr?bh(n,e):t}function wh(n,e){return n instanceof Ss?function(r){return Xi(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Rs extends Hs{}class _r extends Hs{constructor(e){super(),this.elements=e}}function Ah(n,e){const t=Rh(e);for(const r of n.elements)t.some(s=>Ye(s,r))||t.push(r);return{arrayValue:{values:t}}}class yr extends Hs{constructor(e){super(),this.elements=e}}function bh(n,e){let t=Rh(e);for(const r of n.elements)t=t.filter(s=>!Ye(s,r));return{arrayValue:{values:t}}}class Ss extends Hs{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function al(n){return ce(n.integerValue||n.doubleValue)}function Rh(n){return Vo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function hy(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof _r&&s instanceof _r||r instanceof yr&&s instanceof yr?In(r.elements,s.elements,Ye):r instanceof Ss&&s instanceof Ss?Ye(r.Ae,s.Ae):r instanceof Rs&&s instanceof Rs}(n.transform,e.transform)}class dy{constructor(e,t){this.version=e,this.transformResults=t}}class Ue{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ue}static exists(e){return new Ue(void 0,e)}static updateTime(e){return new Ue(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function us(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class zs{}function Sh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Lo(n.key,Ue.none()):new Rr(n.key,n.data,Ue.none());{const t=n.data,r=De.empty();let s=new pe(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Lt(n.key,r,new Ne(s.toArray()),Ue.none())}}function fy(n,e,t){n instanceof Rr?function(s,i,a){const l=s.value.clone(),u=ll(s.fieldTransforms,i,a.transformResults);l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Lt?function(s,i,a){if(!us(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ll(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Ph(s)),u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function cr(n,e,t,r){return n instanceof Rr?function(i,a,l,u){if(!us(i.precondition,a))return l;const d=i.value.clone(),p=ul(i.fieldTransforms,u,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Lt?function(i,a,l,u){if(!us(i.precondition,a))return l;const d=ul(i.fieldTransforms,u,a),p=a.data;return p.setAll(Ph(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(_=>_.field))}(n,e,t,r):function(i,a,l){return us(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function py(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=wh(r.transform,s||null);i!=null&&(t===null&&(t=De.empty()),t.set(r.field,i))}return t||null}function cl(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&In(r,s,(i,a)=>hy(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Rr extends zs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lt extends zs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ph(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function ll(n,e,t){const r=new Map;Y(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,uy(a,l,t[s]))}return r}function ul(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,ly(i,a,e))}return r}class Lo extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class my extends zs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gy{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=cr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Th();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const u=Sh(a,l);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),K())}isEqual(e){return this.batchId===e.batchId&&In(this.mutations,e.mutations,(t,r)=>cl(t,r))&&In(this.baseMutations,e.baseMutations,(t,r)=>cl(t,r))}}class Mo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Y(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return sy}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Mo(e,t,r,s)}}/**
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
 */class _y{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class yy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ue,Q;function Ey(n){switch(n){case C.OK:return F(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Ch(n){if(n===void 0)return st("GRPC error has no .code"),C.UNKNOWN;switch(n){case ue.OK:return C.OK;case ue.CANCELLED:return C.CANCELLED;case ue.UNKNOWN:return C.UNKNOWN;case ue.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ue.INTERNAL:return C.INTERNAL;case ue.UNAVAILABLE:return C.UNAVAILABLE;case ue.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ue.NOT_FOUND:return C.NOT_FOUND;case ue.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ue.ABORTED:return C.ABORTED;case ue.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ue.DATA_LOSS:return C.DATA_LOSS;default:return F(39323,{code:n})}}(Q=ue||(ue={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vy(){return new TextEncoder}/**
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
 */const Ty=new wt([4294967295,4294967295],0);function hl(n){const e=vy().encode(n),t=new Wu;return t.update(e),new Uint8Array(t.digest())}function dl(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wt([t,r],0),new wt([s,i],0)]}class Uo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new nr(`Invalid padding: ${t}`);if(r<0)throw new nr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new nr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new nr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=wt.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(wt.fromNumber(r)));return s.compare(Ty)===1&&(s=new wt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=hl(e),[r,s]=dl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Uo(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.ge===0)return;const t=hl(e),[r,s]=dl(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.be(a)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class nr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Gs{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Sr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Gs(B.min(),s,new se(G),it(),K())}}class Sr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Sr(r,t,K(),K(),K())}}/**
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
 */class hs{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=s}}class kh{constructor(e,t){this.targetId=e,this.Ce=t}}class Dh{constructor(e,t,r=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class fl{constructor(){this.ve=0,this.Fe=pl(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=K(),t=K(),r=K();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:i})}}),new Sr(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=pl()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,Y(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Iy{constructor(e){this.Ge=e,this.ze=new Map,this.je=it(),this.He=Jr(),this.Je=Jr(),this.Ze=new se(G)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:F(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(eo(i))if(r===0){const a=new M(i.path);this.et(t,a,Ae.newNoDocument(a,B.min()))}else Y(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const l=this.ut(e),u=l?this.ct(l,e,a):1;if(u!==0){this.it(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Ct(r).toUint8Array()}catch(u){if(u instanceof nh)return Tn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Uo(a,s,i)}catch(u){return Tn(u instanceof nr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.ge===0?null:l}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const l=this.ot(a);if(l){if(i.current&&eo(l.target)){const u=new M(l.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,Ae.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.Ke())}});let r=K();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new Gs(e,t,this.Ze,this.je,r);return this.je=it(),this.He=Jr(),this.Je=Jr(),this.Ze=new se(G),s}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new fl,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new pe(G),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new pe(G),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||N("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new fl),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Jr(){return new se(M.comparator)}function pl(){return new se(M.comparator)}const wy={asc:"ASCENDING",desc:"DESCENDING"},Ay={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},by={and:"AND",or:"OR"};class Ry{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function no(n,e){return n.useProto3Json||Bs(e)?e:{value:e}}function Ps(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Vh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Sy(n,e){return Ps(n,e.toTimestamp())}function Qe(n){return Y(!!n,49232),B.fromTimestamp(function(t){const r=Pt(t);return new ne(r.seconds,r.nanos)}(n))}function Fo(n,e){return ro(n,e).canonicalString()}function ro(n,e){const t=function(s){return new te(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Nh(n){const e=te.fromString(n);return Y(Uh(e),10190,{key:e.toString()}),e}function so(n,e){return Fo(n.databaseId,e.path)}function Ni(n,e){const t=Nh(e);if(t.get(1)!==n.databaseId.projectId)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(xh(t))}function Oh(n,e){return Fo(n.databaseId,e)}function Py(n){const e=Nh(n);return e.length===4?te.emptyPath():xh(e)}function io(n){return new te(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function xh(n){return Y(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function ml(n,e,t){return{name:so(n,e),fields:t.value.mapValue.fields}}function Cy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(Y(p===void 0||typeof p=="string",58123),ve.fromBase64String(p||"")):(Y(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ve.fromUint8Array(p||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const p=d.code===void 0?C.UNKNOWN:Ch(d.code);return new O(p,d.message||"")}(a);t=new Dh(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ni(n,r.document.name),i=Qe(r.document.updateTime),a=r.document.createTime?Qe(r.document.createTime):B.min(),l=new De({mapValue:{fields:r.document.fields}}),u=Ae.newFoundDocument(s,i,a,l),d=r.targetIds||[],p=r.removedTargetIds||[];t=new hs(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ni(n,r.document),i=r.readTime?Qe(r.readTime):B.min(),a=Ae.newNoDocument(s,i),l=r.removedTargetIds||[];t=new hs([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ni(n,r.document),i=r.removedTargetIds||[];t=new hs([],i,s,null)}else{if(!("filter"in e))return F(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new yy(s,i),l=r.targetId;t=new kh(l,a)}}return t}function ky(n,e){let t;if(e instanceof Rr)t={update:ml(n,e.key,e.value)};else if(e instanceof Lo)t={delete:so(n,e.key)};else if(e instanceof Lt)t={update:ml(n,e.key,e.data),updateMask:Fy(e.fieldMask)};else{if(!(e instanceof my))return F(16599,{dt:e.type});t={verify:so(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof Rs)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _r)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ss)return{fieldPath:a.field.canonicalString(),increment:l.Ae};throw F(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Sy(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)}(n,e.precondition)),t}function Dy(n,e){return n&&n.length>0?(Y(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Qe(s.updateTime):Qe(i);return a.isEqual(B.min())&&(a=Qe(i)),new dy(a,s.transformResults||[])}(t,e))):[]}function Vy(n,e){return{documents:[Oh(n,e.path)]}}function Ny(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Oh(n,s);const i=function(d){if(d.length!==0)return Mh(Xe.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(p=>function(E){return{field:ln(E.field),direction:Ly(E.dir)}}(p))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=no(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:s}}function Oy(n){let e=Py(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Y(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=function(_){const E=Lh(_);return E instanceof Xe&&dh(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(_){return _.map(E=>function(S){return new bs(un(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(E))}(t.orderBy));let l=null;t.limit&&(l=function(_){let E;return E=typeof _=="object"?_.value:_,Bs(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(_){const E=!!_.before,R=_.values||[];return new As(R,E)}(t.startAt));let d=null;return t.endAt&&(d=function(_){const E=!_.before,R=_.values||[];return new As(R,E)}(t.endAt)),Y_(e,s,a,i,l,"F",u,d)}function xy(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=un(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=un(t.unaryFilter.field);return fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=un(t.unaryFilter.field);return fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=un(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}}(n):n.fieldFilter!==void 0?function(t){return fe.create(un(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Xe.create(t.compositeFilter.filters.map(r=>Lh(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}}(t.compositeFilter.op))}(n):F(30097,{filter:n})}function Ly(n){return wy[n]}function My(n){return Ay[n]}function Uy(n){return by[n]}function ln(n){return{fieldPath:n.canonicalString()}}function un(n){return Ee.fromServerFormat(n.fieldPath)}function Mh(n){return n instanceof fe?function(t){if(t.op==="=="){if(nl(t.value))return{unaryFilter:{field:ln(t.field),op:"IS_NAN"}};if(tl(t.value))return{unaryFilter:{field:ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nl(t.value))return{unaryFilter:{field:ln(t.field),op:"IS_NOT_NAN"}};if(tl(t.value))return{unaryFilter:{field:ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(t.field),op:My(t.op),value:t.value}}}(n):n instanceof Xe?function(t){const r=t.getFilters().map(s=>Mh(s));return r.length===1?r[0]:{compositeFilter:{op:Uy(t.op),filters:r}}}(n):F(54877,{filter:n})}function Fy(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Uh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Fh(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class yt{constructor(e,t,r,s,i=B.min(),a=B.min(),l=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class By{constructor(e){this.yt=e}}function $y(n){const e=Oy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?to(e,e.limit,"L"):e}/**
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
 */class jy{constructor(){this.Sn=new qy}addToCollectionParentIndex(e,t){return this.Sn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(St.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(St.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class qy{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(te.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(te.comparator)).toArray()}}/**
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
 */const gl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bh=41943040;class ke{static withCacheSize(e){return new ke(e,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ke.DEFAULT_COLLECTION_PERCENTILE=10,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ke.DEFAULT=new ke(Bh,ke.DEFAULT_COLLECTION_PERCENTILE,ke.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ke.DISABLED=new ke(-1,0,0);/**
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
 */class bn{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new bn(0)}static ar(){return new bn(-1)}}/**
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
 */const _l="LruGarbageCollector",Wy=1048576;function yl([n,e],[t,r]){const s=G(n,t);return s===0?G(e,r):s}class Hy{constructor(e){this.Pr=e,this.buffer=new pe(yl),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();yl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class zy{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){N(_l,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Dn(t)?N(_l,"Ignoring IndexedDB error during garbage collection: ",t):await kn(t)}await this.Ar(3e5)})}}class Gy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Fs.ce);const r=new Hy(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(N("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(gl)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(N("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),gl):this.gr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,s,i,a,l,u,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(_=>(_>this.params.maximumSequenceNumbersToCollect?(N("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${_}`),s=this.params.maximumSequenceNumbersToCollect):s=_,a=Date.now(),this.nthSequenceNumber(e,s))).next(_=>(r=_,l=Date.now(),this.removeTargets(e,r,t))).next(_=>(i=_,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(_=>(d=Date.now(),an()<=z.DEBUG&&N("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(u-l)+`ms
	Removed ${_} documents in `+(d-u)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:_})))}}function Ky(n,e){return new Gy(n,e)}/**
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
 */class Qy{constructor(){this.changes=new tn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Jy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Yy{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&cr(r.mutation,s,Ne.empty(),ne.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,K()).next(()=>r))}getLocalViewOfDocuments(e,t,r=K()){const s=Wt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=tr();return i.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Wt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,K()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=it();const a=ar(),l=function(){return ar()}();return t.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Lt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),cr(p.mutation,d,p.mutation.getFieldMask(),ne.now())):a.set(d.key,Ne.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>a.set(d,p)),t.forEach((d,p)=>l.set(d,new Jy(p,a.get(d)??null))),l))}recalculateAndSaveOverlays(e,t){const r=ar();let s=new se((a,l)=>a-l),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let p=r.get(u)||Ne.empty();p=l.applyToLocalView(d,p),r.set(u,p);const _=(s.get(l.batchId)||K()).add(u);s=s.insert(l.batchId,_)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,_=Th();p.forEach(E=>{if(!i.has(E)){const R=Sh(t.get(E),r.get(E));R!==null&&_.set(E,R),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,_))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return X_(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Z_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(Wt());let l=fr,u=i;return a.next(d=>P.forEach(d,(p,_)=>(l<_.largestBatchId&&(l=_.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next(E=>{u=u.insert(p,E)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,K())).next(p=>({batchId:l,changes:vh(p)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next(r=>{let s=tr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=tr();return this.indexManager.getCollectionParents(e,i).next(l=>P.forEach(l,u=>{const d=function(_,E){return new js(E,null,_.explicitOrderBy.slice(),_.filters.slice(),_.limit,_.limitType,_.startAt,_.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((_,E)=>{a=a.insert(_,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ae.newInvalidDocument(p)))});let l=tr();return a.forEach((u,d)=>{const p=i.get(u);p!==void 0&&cr(p.mutation,d,Ne.empty(),ne.now()),Ws(t,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Xy{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return P.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Qe(s.createTime)}}(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,function(s){return{name:s.name,query:$y(s.bundledQuery),readTime:Qe(s.readTime)}}(t)),P.resolve()}}/**
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
 */class Zy{constructor(){this.overlays=new se(M.comparator),this.Lr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wt();return P.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.bt(e,t,i)}),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=Wt(),i=t.length+1,a=new M(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Wt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Wt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return P.resolve(l)}bt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _y(t,r));let i=this.Lr.get(t);i===void 0&&(i=K(),this.Lr.set(t,i)),this.Lr.set(t,i.add(r.key))}}/**
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
 */class eE{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Bo{constructor(){this.kr=new pe(ge.Kr),this.qr=new pe(ge.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new ge(e,t))}Qr(e,t){e.forEach(r=>this.removeReference(r,t))}Gr(e){const t=new M(new te([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new M(new te([])),r=new ge(t,e),s=new ge(t,e+1);let i=K();return this.qr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new ge(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return M.comparator(e.key,t.key)||G(e.Hr,t.Hr)}static Ur(e,t){return G(e.Hr,t.Hr)||M.comparator(e.key,t.key)}}/**
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
 */class tE{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new pe(ge.Kr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new gy(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Jr=this.Jr.add(new ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?ko:this.Yn-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([r,s],a=>{const l=this.Zr(a.Hr);i.push(l)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(G);return t.forEach(s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([i,a],l=>{r=r.add(l.Hr)})}),P.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const a=new ge(new M(i),0);let l=new pe(G);return this.Jr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.Hr)),!0)},a),P.resolve(this.Yr(l))}Yr(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Y(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return P.forEach(t.mutations,s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Jr=r})}nr(e){}containsKey(e,t){const r=new ge(t,0),s=this.Jr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class nE{constructor(e){this.ti=e,this.docs=function(){return new se(M.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=it();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=it();const a=t.path,l=new M(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||P_(S_(p),r)<=0||(s.has(p.key)||Ws(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F(9500)}ni(e,t){return P.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rE(this)}getSize(e){return P.resolve(this.size)}}class rE extends Qy{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),P.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
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
 */class sE{constructor(e){this.persistence=e,this.ri=new tn(t=>No(t),Oo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.ii=0,this.si=new Bo,this.targetCount=0,this.oi=bn._r()}forEachTarget(e,t){return this.ri.forEach((r,s)=>t(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),P.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new bn(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.lr(t),P.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ri.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ri.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.si.containsKey(t))}}/**
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
 */class $h{constructor(e,t){this._i={},this.overlays={},this.ai=new Fs(0),this.ui=!1,this.ui=!0,this.ci=new eE,this.referenceDelegate=e(this),this.li=new sE(this),this.indexManager=new jy,this.remoteDocumentCache=function(s){return new nE(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new By(t),this.Pi=new Xy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Zy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new tE(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){N("MemoryPersistence","Starting transaction:",e);const s=new iE(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ii(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return P.or(Object.values(this._i).map(r=>()=>r.containsKey(e,t)))}}class iE extends k_{constructor(e){super(),this.currentSequenceNumber=e}}class $o{constructor(e){this.persistence=e,this.Ri=new Bo,this.Ai=null}static Vi(e){return new $o(e)}get di(){if(this.Ai)return this.Ai;throw F(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.di,r=>{const s=M.fromPath(r);return this.mi(e,s).next(i=>{i||t.removeEntry(s,B.min())})}).next(()=>(this.Ai=null,t.apply(e)))}updateLimboDocument(e,t){return this.mi(e,t).next(r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())})}hi(e){return 0}mi(e,t){return P.or([()=>P.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Cs{constructor(e,t){this.persistence=e,this.fi=new tn(r=>N_(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Ky(this,t)}static Vi(e,t){return new Cs(e,t)}Ti(){}Ii(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}pr(e){let t=0;return this.mr(e,r=>{t++}).next(()=>t)}mr(e,t){return P.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?P.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,a=>this.wr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,B.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),P.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=cs(e.data.value)),t}wr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class jo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=s}static Es(e,t){let r=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jo(e,t.fromCache,r,s)}}/**
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
 */class oE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class aE{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return Of()?8:D_(be())>0?6:4}()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.gs(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ps(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new oE;return this.ys(e,t,a).next(l=>{if(i.result=l,this.As)return this.ws(e,t,a,l.size)})}).next(()=>i.result)}ws(e,t,r,s){return r.documentReadCount<this.Vs?(an()<=z.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",cn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(an()<=z.DEBUG&&N("QueryEngine","Query:",cn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(an()<=z.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",cn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ke(t))):P.resolve())}gs(e,t){if(ol(t))return P.resolve(null);let r=Ke(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=to(t,null,"F"),r=Ke(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=K(...i);return this.fs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.bs(t,l);return this.Ss(t,d,a,u.readTime)?this.gs(e,to(t,null,"F")):this.Ds(e,d,t,u)}))})))}ps(e,t,r,s){return ol(t)||s.isEqual(B.min())?P.resolve(null):this.fs.getDocuments(e,r).next(i=>{const a=this.bs(t,i);return this.Ss(t,a,r,s)?P.resolve(null):(an()<=z.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cn(t)),this.Ds(e,a,t,R_(s,fr)).next(l=>l))})}bs(e,t){let r=new pe(yh(e));return t.forEach((s,i)=>{Ws(e,i)&&(r=r.add(i))}),r}Ss(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,t,r){return an()<=z.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",cn(t)),this.fs.getDocumentsMatchingQuery(e,t,St.min(),r)}Ds(e,t,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const qo="LocalStore",cE=3e8;class lE{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new se(G),this.Fs=new tn(i=>No(i),Oo),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Yy(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.vs))}}function uE(n,e,t,r){return new lE(n,e,t,r)}async function jh(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Os(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let u=K();for(const d of s){a.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:l}))})})}function hE(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const _=d.batch,E=_.keys();let R=P.resolve();return E.forEach(S=>{R=R.next(()=>p.getEntry(u,S)).next(D=>{const k=d.docVersions.get(S);Y(k!==null,48541),D.version.compareTo(k)<0&&(_.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),R.next(()=>l.mutationQueue.removeMutationBatch(u,_))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=K();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function qh(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function dE(n,e){const t=$(n),r=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const l=[];e.targetChanges.forEach((p,_)=>{const E=s.get(_);if(!E)return;l.push(t.li.removeMatchingKeys(i,p.removedDocuments,_).next(()=>t.li.addMatchingKeys(i,p.addedDocuments,_)));let R=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(_)!==null?R=R.withResumeToken(ve.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(p.resumeToken,r)),s=s.insert(_,R),function(D,k,x){return D.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=cE?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(E,R,p)&&l.push(t.li.updateTargetData(i,R))});let u=it(),d=K();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(fE(i,a,e.documentUpdates).next(p=>{u=p.Bs,d=p.Ls})),!r.isEqual(B.min())){const p=t.li.getLastRemoteSnapshotVersion(i).next(_=>t.li.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return P.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(t.vs=s,i))}function fE(n,e,t){let r=K(),s=K();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=it();return t.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(B.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):N(qo,"Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Bs:a,Ls:s}})}function pE(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=ko),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function mE(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.li.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):t.li.allocateTargetId(r).next(a=>(s=new yt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r})}async function oo(n,e,t){const r=$(n),s=r.vs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Dn(a))throw a;N(qo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function El(n,e,t){const r=$(n);let s=B.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,p){const _=$(u),E=_.Fs.get(p);return E!==void 0?P.resolve(_.vs.get(E)):_.li.getTargetData(d,p)}(r,a,Ke(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,l.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?i:K())).next(l=>(gE(r,ty(e),l),{documents:l,ks:i})))}function gE(n,e,t){let r=n.Ms.get(e)||B.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ms.set(e,r)}class vl{constructor(){this.activeTargetIds=ay()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class _E{constructor(){this.vo=new vl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new vl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yE{Mo(e){}shutdown(){}}/**
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
 */const Tl="ConnectivityMonitor";class Il{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){N(Tl,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){N(Tl,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yr=null;function ao(){return Yr===null?Yr=function(){return 268435456+Math.round(2147483648*Math.random())}():Yr++,"0x"+Yr.toString(16)}/**
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
 */const Oi="RestConnection",EE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class vE{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Is?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=ao(),l=this.Qo(e,t.toUriEncodedString());N(Oi,`Sending RPC '${e}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:d}=new URL(l),p=Nt(d);return this.zo(e,l,u,r,p).then(_=>(N(Oi,`Received RPC '${e}' ${a}: `,_),_),_=>{throw Tn(Oi,`RPC '${e}' ${a} failed with error: `,_,"url: ",l,"request:",r),_})}jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}Go(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,t){const r=EE[e];let s=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class TE{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ie="WebChannelConnection",Qn=(n,e,t)=>{n.listen(e,r=>{try{t(r)}catch(s){setTimeout(()=>{throw s},0)}})};class gn extends vE{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!gn.c_){const e=Ku();Qn(e,Gu.STAT_EVENT,t=>{t.stat===Qi.PROXY?N(Ie,"STAT_EVENT: detected buffering proxy"):t.stat===Qi.NOPROXY&&N(Ie,"STAT_EVENT: detected no buffering proxy")}),gn.c_=!0}}zo(e,t,r,s,i){const a=ao();return new Promise((l,u)=>{const d=new Hu;d.setWithCredentials(!0),d.listenOnce(zu.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case as.NO_ERROR:const _=d.getResponseJson();N(Ie,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(_)),l(_);break;case as.TIMEOUT:N(Ie,`RPC '${e}' ${a} timed out`),u(new O(C.DEADLINE_EXCEEDED,"Request time out"));break;case as.HTTP_ERROR:const E=d.getStatus();if(N(Ie,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const S=R==null?void 0:R.error;if(S&&S.status&&S.message){const D=function(x){const L=x.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(L)>=0?L:C.UNKNOWN}(S.status);u(new O(D,S.message))}else u(new O(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(C.UNAVAILABLE,"Connection failed."));break;default:F(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{N(Ie,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);N(Ie,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)})}T_(e,t,r){const s=ao(),i=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");N(Ie,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=a.createWebChannel(d,l);this.I_(p);let _=!1,E=!1;const R=new TE({Ho:S=>{E?N(Ie,`Not sending because RPC '${e}' stream ${s} is closed:`,S):(_||(N(Ie,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),N(Ie,`RPC '${e}' stream ${s} sending:`,S),p.send(S))},Jo:()=>p.close()});return Qn(p,er.EventType.OPEN,()=>{E||(N(Ie,`RPC '${e}' stream ${s} transport opened.`),R.i_())}),Qn(p,er.EventType.CLOSE,()=>{E||(E=!0,N(Ie,`RPC '${e}' stream ${s} transport closed`),R.o_(),this.E_(p))}),Qn(p,er.EventType.ERROR,S=>{E||(E=!0,Tn(Ie,`RPC '${e}' stream ${s} transport errored. Name:`,S.name,"Message:",S.message),R.o_(new O(C.UNAVAILABLE,"The operation could not be completed")))}),Qn(p,er.EventType.MESSAGE,S=>{var D;if(!E){const k=S.data[0];Y(!!k,16349);const x=k,L=(x==null?void 0:x.error)||((D=x[0])==null?void 0:D.error);if(L){N(Ie,`RPC '${e}' stream ${s} received error:`,L);const W=L.status;let H=function(v){const m=ue[v];if(m!==void 0)return Ch(m)}(W),re=L.message;H===void 0&&(H=C.INTERNAL,re="Unknown error status: "+W+" with message "+L.message),E=!0,R.o_(new O(H,re)),p.close()}else N(Ie,`RPC '${e}' stream ${s} received:`,k),R.__(k)}}),gn.u_(),setTimeout(()=>{R.s_()},0),R}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(t=>t===e)}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Qu()}}/**
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
 */function IE(n){return new gn(n)}function xi(){return typeof document<"u"?document:null}/**
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
 */function Ks(n){return new Ry(n,!0)}/**
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
 */gn.c_=!1;class Wh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const wl="PersistentStream";class Hh{constructor(e,t,r,s,i,a,l,u){this.Ci=e,this.b_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Wh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===C.RESOURCE_EXHAUSTED?(st(t.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new O(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return N(wl,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget(()=>this.D_===e?t():(N(wl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wE extends Hh{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Cy(this.serializer,e),r=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Qe(a.readTime):B.min()}(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=io(this.serializer),t.addTarget=function(i,a){let l;const u=a.target;if(l=eo(u)?{documents:Vy(i,u)}:{query:Ny(i,u).ft},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Vh(i,a.resumeToken);const d=no(i,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){l.readTime=Ps(i,a.snapshotVersion.toTimestamp());const d=no(i,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=xy(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=io(this.serializer),t.removeTarget=e,this.K_(t)}}class AE extends Hh{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return Y(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Y(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Y(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Dy(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=io(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ky(this.serializer,r))};this.K_(t)}}/**
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
 */class bE{}class RE extends bE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,ro(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(C.UNKNOWN,i.toString())})}jo(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.jo(e,ro(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function SE(n,e,t,r){return new RE(n,e,t,r)}class PE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(st(t),this.aa=!1):N("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Yt="RemoteStore";class CE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{nn(this)&&(N(Yt,"Restarting streams for network reachability change."),await async function(u){const d=$(u);d.Ea.add(4),await Pr(d),d.Va.set("Unknown"),d.Ea.delete(4),await Qs(d)}(this))})}),this.Va=new PE(r,s)}}async function Qs(n){if(nn(n))for(const e of n.Ra)await e(!0)}async function Pr(n){for(const e of n.Ra)await e(!1)}function zh(n,e){const t=$(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Go(t)?zo(t):Vn(t).O_()&&Ho(t,e))}function Wo(n,e){const t=$(n),r=Vn(t);t.Ia.delete(e),r.O_()&&Gh(t,e),t.Ia.size===0&&(r.O_()?r.L_():nn(t)&&t.Va.set("Unknown"))}function Ho(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Vn(n).Z_(e)}function Gh(n,e){n.da.$e(e),Vn(n).X_(e)}function zo(n){n.da=new Iy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Vn(n).start(),n.Va.ua()}function Go(n){return nn(n)&&!Vn(n).x_()&&n.Ia.size>0}function nn(n){return $(n).Ea.size===0}function Kh(n){n.da=void 0}async function kE(n){n.Va.set("Online")}async function DE(n){n.Ia.forEach((e,t)=>{Ho(n,e)})}async function VE(n,e){Kh(n),Go(n)?(n.Va.ha(e),zo(n)):n.Va.set("Unknown")}async function NE(n,e,t){if(n.Va.set("Online"),e instanceof Dh&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ia.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ia.delete(l),s.da.removeTarget(l))}(n,e)}catch(r){N(Yt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ks(n,r)}else if(e instanceof hs?n.da.Xe(e):e instanceof kh?n.da.st(e):n.da.tt(e),!t.isEqual(B.min()))try{const r=await qh(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.da.Tt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ia.get(d);p&&i.Ia.set(d,p.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const p=i.Ia.get(u);if(!p)return;i.Ia.set(u,p.withResumeToken(ve.EMPTY_BYTE_STRING,p.snapshotVersion)),Gh(i,u);const _=new yt(p.target,u,d,p.sequenceNumber);Ho(i,_)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){N(Yt,"Failed to raise snapshot:",r),await ks(n,r)}}async function ks(n,e,t){if(!Dn(e))throw e;n.Ea.add(1),await Pr(n),n.Va.set("Offline"),t||(t=()=>qh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N(Yt,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Qs(n)})}function Qh(n,e){return e().catch(t=>ks(n,t,e))}async function Js(n){const e=$(n),t=Dt(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:ko;for(;OE(e);)try{const s=await pE(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,xE(e,s)}catch(s){await ks(e,s)}Jh(e)&&Yh(e)}function OE(n){return nn(n)&&n.Ta.length<10}function xE(n,e){n.Ta.push(e);const t=Dt(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function Jh(n){return nn(n)&&!Dt(n).x_()&&n.Ta.length>0}function Yh(n){Dt(n).start()}async function LE(n){Dt(n).ra()}async function ME(n){const e=Dt(n);for(const t of n.Ta)e.ea(t.mutations)}async function UE(n,e,t){const r=n.Ta.shift(),s=Mo.from(r,e,t);await Qh(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Js(n)}async function FE(n,e){e&&Dt(n).Y_&&await async function(r,s){if(function(a){return Ey(a)&&a!==C.ABORTED}(s.code)){const i=r.Ta.shift();Dt(r).B_(),await Qh(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Js(r)}}(n,e),Jh(n)&&Yh(n)}async function Al(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),N(Yt,"RemoteStore received new credentials");const r=nn(t);t.Ea.add(3),await Pr(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qs(t)}async function BE(n,e){const t=$(n);e?(t.Ea.delete(2),await Qs(t)):e||(t.Ea.add(2),await Pr(t),t.Va.set("Unknown"))}function Vn(n){return n.ma||(n.ma=function(t,r,s){const i=$(t);return i.sa(),new wE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:kE.bind(null,n),Yo:DE.bind(null,n),t_:VE.bind(null,n),J_:NE.bind(null,n)}),n.Ra.push(async e=>{e?(n.ma.B_(),Go(n)?zo(n):n.Va.set("Unknown")):(await n.ma.stop(),Kh(n))})),n.ma}function Dt(n){return n.fa||(n.fa=function(t,r,s){const i=$(t);return i.sa(),new AE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:LE.bind(null,n),t_:FE.bind(null,n),ta:ME.bind(null,n),na:UE.bind(null,n)}),n.Ra.push(async e=>{e?(n.fa.B_(),await Js(n)):(await n.fa.stop(),n.Ta.length>0&&(N(Yt,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Ko{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new At,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Ko(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(n,e){if(st("AsyncQueue",`${e}: ${n}`),Dn(n))return new O(C.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class _n{static emptySet(e){return new _n(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=tr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof _n)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new _n;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class bl{constructor(){this.ga=new se(M.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):F(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Rn{constructor(e,t,r,s,i,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new Rn(e,t,_n.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class $E{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(e=>e.Da())}}class jE{constructor(){this.queries=Rl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=Rl(),i.forEach((a,l)=>{for(const u of l.ba)u.onError(r)})})(this,new O(C.ABORTED,"Firestore shutting down"))}}function Rl(){return new tn(n=>_h(n),qs)}async function qE(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.Da()&&(r=2):(i=new $E,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Qo(a,`Initialization of query '${cn(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.ba.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&Jo(t)}async function WE(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.ba.indexOf(e);a>=0&&(i.ba.splice(a,1),i.ba.length===0?s=e.Da()?0:1:!i.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function HE(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.ba)l.Fa(s)&&(r=!0);a.wa=s}}r&&Jo(t)}function zE(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.ba)i.onError(t);r.queries.delete(e)}function Jo(n){n.Ca.forEach(e=>{e.next()})}var co,Sl;(Sl=co||(co={})).Ma="default",Sl.Cache="cache";class GE{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Rn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==co.Cache}}/**
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
 */class Xh{constructor(e){this.key=e}}class Zh{constructor(e){this.key=e}}class KE{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=K(),this.mutatedKeys=K(),this.eu=yh(e),this.tu=new _n(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new bl,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,_)=>{const E=s.get(p),R=Ws(this.query,_)?_:null,S=!!E&&this.mutatedKeys.has(E.key),D=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let k=!1;E&&R?E.data.isEqual(R.data)?S!==D&&(r.track({type:3,doc:R}),k=!0):this.su(E,R)||(r.track({type:2,doc:R}),k=!0,(u&&this.eu(R,u)>0||d&&this.eu(R,d)<0)&&(l=!0)):!E&&R?(r.track({type:0,doc:R}),k=!0):E&&!R&&(r.track({type:1,doc:E}),k=!0,(u||d)&&(l=!0)),k&&(R?(a=a.add(R),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{tu:a,iu:r,Ss:l,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((p,_)=>function(R,S){const D=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{Vt:k})}};return D(R)-D(S)}(p.type,_.type)||this.eu(p.doc,_.doc)),this.ou(r),s=s??!1;const l=t&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,d=u!==this.Xa;return this.Xa=u,a.length!==0||d?{snapshot:new Rn(this.query,e.tu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:l}:{au:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new bl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=K(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new Zh(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new Xh(r))}),t}cu(e){this.Za=e.ks,this.Ya=K();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Rn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yo="SyncEngine";class QE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class JE{constructor(e){this.key=e,this.hu=!1}}class YE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new tn(l=>_h(l),qs),this.Iu=new Map,this.Eu=new Set,this.Ru=new se(M.comparator),this.Au=new Map,this.Vu=new Bo,this.du={},this.mu=new Map,this.fu=bn.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function XE(n,e,t=!0){const r=id(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await ed(r,e,t,!0),s}async function ZE(n,e){const t=id(n);await ed(t,e,!0,!1)}async function ed(n,e,t,r){const s=await mE(n.localStore,Ke(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await ev(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&zh(n.remoteStore,s),l}async function ev(n,e,t,r,s){n.pu=(_,E,R)=>async function(D,k,x,L){let W=k.view.ru(x);W.Ss&&(W=await El(D.localStore,k.query,!1).then(({documents:v})=>k.view.ru(v,W)));const H=L&&L.targetChanges.get(k.targetId),re=L&&L.targetMismatches.get(k.targetId)!=null,Z=k.view.applyChanges(W,D.isPrimaryClient,H,re);return Cl(D,k.targetId,Z.au),Z.snapshot}(n,_,E,R);const i=await El(n.localStore,e,!0),a=new KE(e,i.ks),l=a.ru(i.documents),u=Sr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(l,n.isPrimaryClient,u);Cl(n,t,d.au);const p=new QE(e,t,a);return n.Tu.set(e,p),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function tv(n,e,t){const r=$(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!qs(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Wo(r.remoteStore,s.targetId),lo(r,s.targetId)}).catch(kn)):(lo(r,s.targetId),await oo(r.localStore,s.targetId,!0))}async function nv(n,e){const t=$(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Wo(t.remoteStore,r.targetId))}async function rv(n,e,t){const r=uv(n);try{const s=await function(a,l){const u=$(a),d=ne.now(),p=l.reduce((R,S)=>R.add(S.key),K());let _,E;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let S=it(),D=K();return u.xs.getEntries(R,p).next(k=>{S=k,S.forEach((x,L)=>{L.isValidDocument()||(D=D.add(x))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,S)).next(k=>{_=k;const x=[];for(const L of l){const W=py(L,_.get(L.key).overlayedDocument);W!=null&&x.push(new Lt(L.key,W,lh(W.value.mapValue),Ue.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,x,l)}).next(k=>{E=k;const x=k.applyToLocalDocumentSet(_,D);return u.documentOverlayCache.saveOverlays(R,k.batchId,x)})}).then(()=>({batchId:E.batchId,changes:vh(_)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,u){let d=a.du[a.currentUser.toKey()];d||(d=new se(G)),d=d.insert(l,u),a.du[a.currentUser.toKey()]=d}(r,s.batchId,t),await Cr(r,s.changes),await Js(r.remoteStore)}catch(s){const i=Qo(s,"Failed to persist write");t.reject(i)}}async function td(n,e){const t=$(n);try{const r=await dE(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(Y(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?Y(a.hu,14607):s.removedDocuments.size>0&&(Y(a.hu,42227),a.hu=!1))}),await Cr(t,r,e)}catch(r){await kn(r)}}function Pl(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const u=$(a);u.onlineState=l;let d=!1;u.queries.forEach((p,_)=>{for(const E of _.ba)E.va(l)&&(d=!0)}),d&&Jo(u)}(r.eventManager,e),s.length&&r.Pu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sv(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new se(M.comparator);a=a.insert(i,Ae.newNoDocument(i,B.min()));const l=K().add(i),u=new Gs(B.min(),new Map,new se(G),a,l);await td(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Xo(r)}else await oo(r.localStore,e,!1).then(()=>lo(r,e,t)).catch(kn)}async function iv(n,e){const t=$(n),r=e.batch.batchId;try{const s=await hE(t.localStore,e);rd(t,r,null),nd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Cr(t,s)}catch(s){await kn(s)}}async function ov(n,e,t){const r=$(n);try{const s=await function(a,l){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(_=>(Y(_!==null,37113),p=_.keys(),u.mutationQueue.removeMutationBatch(d,_))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);rd(r,e,t),nd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Cr(r,s)}catch(s){await kn(s)}}function nd(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function rd(n,e,t){const r=$(n);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function lo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach(r=>{n.Vu.containsKey(r)||sd(n,r)})}function sd(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Wo(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),Xo(n))}function Cl(n,e,t){for(const r of t)r instanceof Xh?(n.Vu.addReference(r.key,e),av(n,r)):r instanceof Zh?(N(Yo,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||sd(n,r.key)):F(19791,{wu:r})}function av(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(N(Yo,"New document in limbo: "+t),n.Eu.add(r),Xo(n))}function Xo(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new M(te.fromString(e)),r=n.fu.next();n.Au.set(r,new JE(t)),n.Ru=n.Ru.insert(t,r),zh(n.remoteStore,new yt(Ke(gh(t.path)),r,"TargetPurposeLimboResolution",Fs.ce))}}async function Cr(n,e,t){const r=$(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((l,u)=>{a.push(r.pu(u,e,t).then(d=>{var p;if((d||t)&&r.isPrimaryClient){const _=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,_?"current":"not-current")}if(d){s.push(d);const _=jo.Es(u.targetId,d);i.push(_)}}))}),await Promise.all(a),r.Pu.J_(s),await async function(u,d){const p=$(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",_=>P.forEach(d,E=>P.forEach(E.Ts,R=>p.persistence.referenceDelegate.addReference(_,E.targetId,R)).next(()=>P.forEach(E.Is,R=>p.persistence.referenceDelegate.removeReference(_,E.targetId,R)))))}catch(_){if(!Dn(_))throw _;N(qo,"Failed to update sequence numbers: "+_)}for(const _ of d){const E=_.targetId;if(!_.fromCache){const R=p.vs.get(E),S=R.snapshotVersion,D=R.withLastLimboFreeSnapshotVersion(S);p.vs=p.vs.insert(E,D)}}}(r.localStore,i))}async function cv(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){N(Yo,"User change. New user:",e.toKey());const r=await jh(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(l=>{l.forEach(u=>{u.reject(new O(C.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cr(t,r.Ns)}}function lv(n,e){const t=$(n),r=t.Au.get(e);if(r&&r.hu)return K().add(r.key);{let s=K();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const l=t.Tu.get(a);s=s.unionWith(l.view.nu)}return s}}function id(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=td.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sv.bind(null,e),e.Pu.J_=HE.bind(null,e.eventManager),e.Pu.yu=zE.bind(null,e.eventManager),e}function uv(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ov.bind(null,e),e}class Ds{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ks(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return uE(this.persistence,new aE,e.initialUser,this.serializer)}Cu(e){return new $h($o.Vi,this.serializer)}Du(e){return new _E}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ds.provider={build:()=>new Ds};class hv extends Ds{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Y(this.persistence.referenceDelegate instanceof Cs,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new zy(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ke.withCacheSize(this.cacheSizeBytes):ke.DEFAULT;return new $h(r=>Cs.Vi(r,t),this.serializer)}}class uo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cv.bind(null,this.syncEngine),await BE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jE}()}createDatastore(e){const t=Ks(e.databaseInfo.databaseId),r=IE(e.databaseInfo);return SE(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new CE(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Pl(this.syncEngine,t,0),function(){return Il.v()?new Il:new yE}())}createSyncEngine(e,t){return function(s,i,a,l,u,d,p){const _=new YE(s,i,a,l,u,d);return p&&(_.gu=!0),_}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=$(s);N(Yt,"RemoteStore shutting down."),i.Ea.add(5),await Pr(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}uo.provider={build:()=>new uo};/**
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
 */class dv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):st("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Vt="FirestoreClient";class fv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=Po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{N(Vt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(N(Vt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new At;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Qo(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Li(n,e){n.asyncQueue.verifyOperationInProgress(),N(Vt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await jh(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pv(n);N(Vt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Al(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Al(e.remoteStore,s)),n._onlineComponents=e}async function pv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N(Vt,"Using user provided OfflineComponentProvider");try{await Li(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Tn("Error using user provided cache. Falling back to memory cache: "+t),await Li(n,new Ds)}}else N(Vt,"Using default OfflineComponentProvider"),await Li(n,new hv(void 0));return n._offlineComponents}async function od(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N(Vt,"Using user provided OnlineComponentProvider"),await kl(n,n._uninitializedComponentsProvider._online)):(N(Vt,"Using default OnlineComponentProvider"),await kl(n,new uo))),n._onlineComponents}function mv(n){return od(n).then(e=>e.syncEngine)}async function gv(n){const e=await od(n),t=e.eventManager;return t.onListen=XE.bind(null,e.syncEngine),t.onUnlisten=tv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ZE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=nv.bind(null,e.syncEngine),t}function _v(n,e,t={}){const r=new At;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,u,d){const p=new dv({next:E=>{p.Nu(),a.enqueueAndForget(()=>WE(i,_)),E.fromCache&&u.source==="server"?d.reject(new O(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(E)},error:E=>d.reject(E)}),_=new GE(l,p,{includeMetadataChanges:!0,Ka:!0});return qE(i,_)}(await gv(n),n.asyncQueue,e,t,r)),r.promise}function yv(n,e){const t=new At;return n.asyncQueue.enqueueAndForget(async()=>rv(await mv(n),e,t)),t.promise}/**
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
 */function ad(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ev="ComponentProvider",Dl=new Map;function vv(n,e,t,r,s){return new L_(n,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ad(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const cd="firestore.googleapis.com",Vl=!0;class Nl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new O(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cd,this.ssl=Vl}else this.host=e.host,this.ssl=e.ssl??Vl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Wy)throw new O(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}b_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ad(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new O(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ys{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new m_;switch(r.type){case"firstParty":return new E_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Dl.get(t);r&&(N(Ev,"Removing Datastore"),Dl.delete(t),r.terminate())}(this),Promise.resolve()}}function Tv(n,e,t,r={}){var d;n=Jt(n,Ys);const s=Nt(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},l=`${e}:${t}`;s&&(po(`https://${l}`),mo("Firestore",!0)),i.host!==cd&&i.host!==l&&Tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:l,ssl:s,emulatorOptions:r};if(!zt(u,a)&&(n._setSettings(u),r.mockUserToken)){let p,_;if(typeof r.mockUserToken=="string")p=r.mockUserToken,_=we.MOCK_USER;else{p=iu(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new O(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new we(E)}n._authCredentials=new g_(new Yu(p,_))}}/**
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
 */class Xs{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Xs(this.firestore,e,this._query)}}class _e{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _e(this.firestore,e,this._key)}toJSON(){return{type:_e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(br(t,_e._jsonSchema))return new _e(e,r||null,new M(te.fromString(t.referencePath)))}}_e._jsonSchemaVersion="firestore/documentReference/1.0",_e._jsonSchema={type:he("string",_e._jsonSchemaVersion),referencePath:he("string")};class bt extends Xs{constructor(e,t,r){super(e,t,gh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _e(this.firestore,null,new M(e))}withConverter(e){return new bt(this.firestore,e,this._path)}}function Ol(n,e,...t){if(n=le(n),Xu("collection","path",e),n instanceof Ys){const r=te.fromString(e,...t);return Gc(r),new bt(n,null,r)}{if(!(n instanceof _e||n instanceof bt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return Gc(r),new bt(n.firestore,null,r)}}function ho(n,e,...t){if(n=le(n),arguments.length===1&&(e=Po.newId()),Xu("doc","path",e),n instanceof Ys){const r=te.fromString(e,...t);return zc(r),new _e(n,null,new M(r))}{if(!(n instanceof _e||n instanceof bt))throw new O(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(te.fromString(e,...t));return zc(r),new _e(n.firestore,n instanceof bt?n.converter:null,new M(r))}}/**
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
 */const xl="AsyncQueue";class Ll{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Wh(this,"async_queue_retry"),this._c=()=>{const r=xi();r&&N(xl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=xi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=xi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new At;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!Dn(e))throw e;N(xl,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,st("INTERNAL UNHANDLED ERROR: ",Ml(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=Ko.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&F(47125,{Pc:Ml(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Ml(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class kr extends Ys{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ll,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ll(e),this._firestoreClient=void 0,await e}}}function Iv(n,e){const t=typeof n=="object"?n:yo(),r=typeof n=="string"?n:Is,s=Os(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=nu("firestore");i&&Tv(s,...i)}return s}function ld(n){if(n._terminated)throw new O(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||wv(n),n._firestoreClient}function wv(n){var r,s,i,a;const e=n._freezeSettings(),t=vv(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,e);n._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((a=e.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new fv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class Le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Le(ve.fromBase64String(e))}catch(t){throw new O(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Le(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(br(e,Le._jsonSchema))return Le.fromBase64String(e.bytes)}}Le._jsonSchemaVersion="firestore/bytes/1.0",Le._jsonSchema={type:he("string",Le._jsonSchemaVersion),bytes:he("string")};/**
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
 */class Zo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ea{constructor(e){this._methodName=e}}/**
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
 */class Je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Je._jsonSchemaVersion}}static fromJSON(e){if(br(e,Je._jsonSchema))return new Je(e.latitude,e.longitude)}}Je._jsonSchemaVersion="firestore/geoPoint/1.0",Je._jsonSchema={type:he("string",Je._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
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
 */class Fe{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Fe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(br(e,Fe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Fe(e.vectorValues);throw new O(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Fe._jsonSchemaVersion="firestore/vectorValue/1.0",Fe._jsonSchema={type:he("string",Fe._jsonSchemaVersion),vectorValues:he("object")};/**
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
 */const Av=/^__.*__$/;class bv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rr(e,this.data,t,this.fieldTransforms)}}class ud{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Lt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{dataSource:n})}}class ta{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new ta({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Vs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(hd(this.dataSource)&&Av.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Rv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ks(e)}createContext(e,t,r,s=!1){return new ta({dataSource:e,methodName:t,targetDoc:r,path:Ee.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dd(n){const e=n._freezeSettings(),t=Ks(n._databaseId);return new Rv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Sv(n,e,t,r,s,i={}){const a=n.createContext(i.merge||i.mergeFields?2:0,e,t,s);na("Data must be an object, but it was:",a,r);const l=fd(r,a);let u,d;if(i.merge)u=new Ne(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const _ of i.mergeFields){const E=Er(e,_,t);if(!a.contains(E))throw new O(C.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);gd(p,E)||p.push(E)}u=new Ne(p),d=a.fieldTransforms.filter(_=>u.covers(_.field))}else u=null,d=a.fieldTransforms;return new bv(new De(l),u,d)}class Zs extends ea{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Zs}}function Pv(n,e,t,r){const s=n.createContext(1,e,t);na("Data must be an object, but it was:",s,r);const i=[],a=De.empty();xt(r,(u,d)=>{const p=md(e,u,t);d=le(d);const _=s.childContextForFieldPath(p);if(d instanceof Zs)i.push(p);else{const E=ei(d,_);E!=null&&(i.push(p),a.set(p,E))}});const l=new Ne(i);return new ud(a,l,s.fieldTransforms)}function Cv(n,e,t,r,s,i){const a=n.createContext(1,e,t),l=[Er(e,r,t)],u=[s];if(i.length%2!=0)throw new O(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)l.push(Er(e,i[E])),u.push(i[E+1]);const d=[],p=De.empty();for(let E=l.length-1;E>=0;--E)if(!gd(d,l[E])){const R=l[E];let S=u[E];S=le(S);const D=a.childContextForFieldPath(R);if(S instanceof Zs)d.push(R);else{const k=ei(S,D);k!=null&&(d.push(R),p.set(R,k))}}const _=new Ne(d);return new ud(p,_,a.fieldTransforms)}function ei(n,e){if(pd(n=le(n)))return na("Unsupported field value:",e,n),fd(n,e);if(n instanceof ea)return function(r,s){if(!hd(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let u=ei(l,s.childContextForArray(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ne.fromDate(r);return{timestampValue:Ps(s.serializer,i)}}if(r instanceof ne){const i=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ps(s.serializer,i)}}if(r instanceof Je)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Le)return{bytesValue:Vh(s.serializer,r._byteString)};if(r instanceof _e){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fe)return function(a,l){const u=a instanceof Fe?a.toArray():a;return{mapValue:{fields:{[ah]:{stringValue:ch},[ws]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.createError("VectorValues must only contain numeric values.");return xo(l.serializer,p)})}}}}}}(r,s);if(Fh(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Co(r)}`)}(n,e)}function fd(n,e){const t={};return th(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xt(n,(r,s)=>{const i=ei(s,e.childContextForField(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function pd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof Je||n instanceof Le||n instanceof _e||n instanceof ea||n instanceof Fe||Fh(n))}function na(n,e,t){if(!pd(t)||!Zu(t)){const r=Co(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Er(n,e,t){if((e=le(e))instanceof Zo)return e._internalPath;if(typeof e=="string")return md(n,e);throw Vs("Field path arguments must be of type string or ",n,!1,void 0,t)}const kv=new RegExp("[~\\*/\\[\\]]");function md(n,e,t){if(e.search(kv)>=0)throw Vs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zo(...e.split("."))._internalPath}catch{throw Vs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Vs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(C.INVALID_ARGUMENT,l+n+u)}function gd(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Dv{convertValue(e,t="none"){switch(kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ct(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return xt(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[ws].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>ce(a.doubleValue));return new Fe(t)}convertGeoPoint(e){return new Je(ce(e.latitude),ce(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=$s(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(pr(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=te.fromString(e);Y(Uh(r),9688,{name:e});const s=new mr(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||st(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */class Vv extends Dv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Le(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _e(this.firestore,null,t)}}const Ul="@firebase/firestore",Fl="4.10.0";/**
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
 */class _d{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _e(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Er("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nv extends _d{data(){return super.data()}}/**
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
 */function Ov(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function xv(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Xr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yn extends _d{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Er("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=yn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}yn._jsonSchemaVersion="firestore/documentSnapshot/1.0",yn._jsonSchema={type:he("string",yn._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class ds extends yn{data(e={}){return super.data(e)}}class En{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Xr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ds(this._firestore,this._userDataWriter,r.key,r,new Xr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const u=new ds(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new ds(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Xr(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),p=a.indexOf(l.doc.key)),{type:Lv(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=En._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Po.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Lv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}/**
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
 */En._jsonSchemaVersion="firestore/querySnapshot/1.0",En._jsonSchema={type:he("string",En._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};function Mv(n){n=Jt(n,Xs);const e=Jt(n.firestore,kr),t=ld(e),r=new Vv(e);return Ov(n._query),_v(t,n._query).then(s=>new En(e,r,n,s))}function Uv(n,e,t,...r){n=Jt(n,_e);const s=Jt(n.firestore,kr),i=dd(s);let a;return a=typeof(e=le(e))=="string"||e instanceof Zo?Cv(i,"updateDoc",n._key,e,t,r):Pv(i,"updateDoc",n._key,e),ra(s,[a.toMutation(n._key,Ue.exists(!0))])}function Fv(n){return ra(Jt(n.firestore,kr),[new Lo(n._key,Ue.none())])}function Bv(n,e){const t=Jt(n.firestore,kr),r=ho(n),s=xv(n.converter,e),i=dd(n.firestore);return ra(t,[Sv(i,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ue.exists(!1))]).then(()=>r)}function ra(n,e){const t=ld(n);return yv(t,e)}(function(e,t=!0){p_(Zt),Gt(new Rt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new kr(new __(r.getProvider("auth-internal")),new v_(a,r.getProvider("app-check-internal")),M_(a,s),a);return i={useFetchStreams:t,...i},l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),He(Ul,Fl,e),He(Ul,Fl,"esm2020")})();/**
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
 */const yd="firebasestorage.googleapis.com",Ed="storageBucket",$v=2*60*1e3,jv=10*60*1e3;/**
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
 */class ae extends Ze{constructor(e,t,r=0){super(Mi(e),`Firebase Storage: ${t} (${Mi(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Mi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var oe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(oe||(oe={}));function Mi(n){return"storage/"+n}function sa(){const n="An unknown error occurred, please check the error payload for server response.";return new ae(oe.UNKNOWN,n)}function qv(n){return new ae(oe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Wv(n){return new ae(oe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Hv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ae(oe.UNAUTHENTICATED,n)}function zv(){return new ae(oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Gv(n){return new ae(oe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Kv(){return new ae(oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Qv(){return new ae(oe.CANCELED,"User canceled the upload/download.")}function Jv(n){return new ae(oe.INVALID_URL,"Invalid URL '"+n+"'.")}function Yv(n){return new ae(oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Xv(){return new ae(oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ed+"' property when initializing the app?")}function Zv(){return new ae(oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function eT(){return new ae(oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function tT(n){return new ae(oe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fo(n){return new ae(oe.INVALID_ARGUMENT,n)}function vd(){return new ae(oe.APP_DELETED,"The Firebase app was deleted.")}function nT(n){return new ae(oe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function lr(n,e){return new ae(oe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Jn(n){throw new ae(oe.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Oe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Oe.makeFromUrl(e,t)}catch{return new Oe(e,"")}if(r.path==="")return r;throw Yv(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(H){H.path.charAt(H.path.length-1)==="/"&&(H.path_=H.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function d(H){H.path_=decodeURIComponent(H.path)}const p="v[A-Za-z0-9_]+",_=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",R=new RegExp(`^https?://${_}/${p}/b/${s}/o${E}`,"i"),S={bucket:1,path:3},D=t===yd?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",x=new RegExp(`^https?://${D}/${s}/${k}`,"i"),W=[{regex:l,indices:u,postModify:i},{regex:R,indices:S,postModify:d},{regex:x,indices:{bucket:1,path:2},postModify:d}];for(let H=0;H<W.length;H++){const re=W[H],Z=re.regex.exec(e);if(Z){const v=Z[re.indices.bucket];let m=Z[re.indices.path];m||(m=""),r=new Oe(v,m),re.postModify(r);break}}if(r==null)throw Jv(e);return r}}class rT{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function sT(n,e,t){let r=1,s=null,i=null,a=!1,l=0;function u(){return l===2}let d=!1;function p(...k){d||(d=!0,e.apply(null,k))}function _(k){s=setTimeout(()=>{s=null,n(R,u())},k)}function E(){i&&clearTimeout(i)}function R(k,...x){if(d){E();return}if(k){E(),p.call(null,k,...x);return}if(u()||a){E(),p.call(null,k,...x);return}r<64&&(r*=2);let W;l===1?(l=2,W=0):W=(r+Math.random())*1e3,_(W)}let S=!1;function D(k){S||(S=!0,E(),!d&&(s!==null?(k||(l=2),clearTimeout(s),_(0)):k||(l=1)))}return _(0),i=setTimeout(()=>{a=!0,D(!0)},t),D}function iT(n){n(!1)}/**
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
 */function oT(n){return n!==void 0}function aT(n){return typeof n=="object"&&!Array.isArray(n)}function ia(n){return typeof n=="string"||n instanceof String}function Bl(n){return oa()&&n instanceof Blob}function oa(){return typeof Blob<"u"}function $l(n,e,t,r){if(r<e)throw fo(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw fo(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function aa(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Td(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var Ht;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ht||(Ht={}));/**
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
 */function cT(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class lT{constructor(e,t,r,s,i,a,l,u,d,p,_,E=!0,R=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=_,this.retry=E,this.isUsingEmulator=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,D)=>{this.resolve_=S,this.reject_=D,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Zr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const l=i.getErrorCode()===Ht.NO_ERROR,u=i.getStatus();if(!l||cT(u,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Ht.ABORT;r(!1,new Zr(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Zr(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,l=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());oT(u)?i(u):i()}catch(u){a(u)}else if(l!==null){const u=sa();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(s.canceled){const u=this.appDelete_?vd():Qv();a(u)}else{const u=Kv();a(u)}};this.canceled_?t(!1,new Zr(!1,null,!0)):this.backoffId_=sT(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&iT(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function uT(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function hT(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function dT(n,e){e&&(n["X-Firebase-GMPID"]=e)}function fT(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function pT(n,e,t,r,s,i,a=!0,l=!1){const u=Td(n.urlParams),d=n.url+u,p=Object.assign({},n.headers);return dT(p,e),uT(p,t),hT(p,i),fT(p,r),new lT(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,l)}/**
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
 */function mT(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function gT(...n){const e=mT();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(oa())return new Blob(n);throw new ae(oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _T(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function yT(n){if(typeof atob>"u")throw tT("base-64");return atob(n)}/**
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
 */const We={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ui{constructor(e,t){this.data=e,this.contentType=t||null}}function ET(n,e){switch(n){case We.RAW:return new Ui(Id(e));case We.BASE64:case We.BASE64URL:return new Ui(wd(n,e));case We.DATA_URL:return new Ui(TT(e),IT(e))}throw sa()}function Id(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function vT(n){let e;try{e=decodeURIComponent(n)}catch{throw lr(We.DATA_URL,"Malformed data URL.")}return Id(e)}function wd(n,e){switch(n){case We.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw lr(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case We.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw lr(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=yT(e)}catch(s){throw s.message.includes("polyfill")?s:lr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Ad{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw lr(We.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=wT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function TT(n){const e=new Ad(n);return e.base64?wd(We.BASE64,e.rest):vT(e.rest)}function IT(n){return new Ad(n).contentType}function wT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class _t{constructor(e,t){let r=0,s="";Bl(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Bl(this.data_)){const r=this.data_,s=_T(r,e,t);return s===null?null:new _t(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new _t(r,!0)}}static getBlob(...e){if(oa()){const t=e.map(r=>r instanceof _t?r.data_:r);return new _t(gT.apply(null,t))}else{const t=e.map(a=>ia(a)?ET(We.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)s[i++]=a[l]}),new _t(s,!0)}}uploadData(){return this.data_}}/**
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
 */function bd(n){let e;try{e=JSON.parse(n)}catch{return null}return aT(e)?e:null}/**
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
 */function AT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function bT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Rd(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function RT(n,e){return e}class Pe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||RT}}let es=null;function ST(n){return!ia(n)||n.length<2?n:Rd(n)}function Sd(){if(es)return es;const n=[];n.push(new Pe("bucket")),n.push(new Pe("generation")),n.push(new Pe("metageneration")),n.push(new Pe("name","fullPath",!0));function e(i,a){return ST(a)}const t=new Pe("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Pe("size");return s.xform=r,n.push(s),n.push(new Pe("timeCreated")),n.push(new Pe("updated")),n.push(new Pe("md5Hash",null,!0)),n.push(new Pe("cacheControl",null,!0)),n.push(new Pe("contentDisposition",null,!0)),n.push(new Pe("contentEncoding",null,!0)),n.push(new Pe("contentLanguage",null,!0)),n.push(new Pe("contentType",null,!0)),n.push(new Pe("metadata","customMetadata",!0)),es=n,es}function PT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Oe(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function CT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return PT(r,n),r}function Pd(n,e,t){const r=bd(e);return r===null?null:CT(n,r,t)}function kT(n,e,t,r){const s=bd(e);if(s===null||!ia(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=n.bucket,_=n.fullPath,E="/b/"+a(p)+"/o/"+a(_),R=aa(E,t,r),S=Td({alt:"media",token:d});return R+S})[0]}function DT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Cd{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function kd(n){if(!n)throw sa()}function VT(n,e){function t(r,s){const i=Pd(n,s,e);return kd(i!==null),i}return t}function NT(n,e){function t(r,s){const i=Pd(n,s,e);return kd(i!==null),kT(i,s,n.host,n._protocol)}return t}function Dd(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=zv():s=Hv():t.getStatus()===402?s=Wv(n.bucket):t.getStatus()===403?s=Gv(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function OT(n){const e=Dd(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=qv(n.path)),i.serverResponse=s.serverResponse,i}return t}function xT(n,e,t){const r=e.fullServerUrl(),s=aa(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,l=new Cd(s,i,NT(n,t),a);return l.errorHandler=OT(e),l}function LT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function MT(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=LT(null,e)),r}function UT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let W="";for(let H=0;H<2;H++)W=W+Math.random().toString().slice(2);return W}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const d=MT(e,r,s),p=DT(d,t),_="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,E=`\r
--`+u+"--",R=_t.getBlob(_,r,E);if(R===null)throw Zv();const S={name:d.fullPath},D=aa(i,n.host,n._protocol),k="POST",x=n.maxUploadRetryTime,L=new Cd(D,k,VT(n,t),x);return L.urlParams=S,L.headers=a,L.body=R.uploadData(),L.errorHandler=Dd(e),L}class FT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ht.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ht.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ht.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Jn("cannot .send() more than once");if(Nt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Jn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Jn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Jn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Jn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class BT extends FT{initXhr(){this.xhr_.responseType="text"}}function Vd(){return new BT}/**
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
 */class Xt{constructor(e,t){this._service=e,t instanceof Oe?this._location=t:this._location=Oe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Xt(e,t)}get root(){const e=new Oe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rd(this._location.path)}get storage(){return this._service}get parent(){const e=AT(this._location.path);if(e===null)return null;const t=new Oe(this._location.bucket,e);return new Xt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw nT(e)}}function $T(n,e,t){n._throwIfRoot("uploadBytes");const r=UT(n.storage,n._location,Sd(),new _t(e,!0),t);return n.storage.makeRequestWithTokens(r,Vd).then(s=>({metadata:s,ref:n}))}function jT(n){n._throwIfRoot("getDownloadURL");const e=xT(n.storage,n._location,Sd());return n.storage.makeRequestWithTokens(e,Vd).then(t=>{if(t===null)throw eT();return t})}function qT(n,e){const t=bT(n._location.path,e),r=new Oe(n._location.bucket,t);return new Xt(n.storage,r)}/**
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
 */function WT(n){return/^[A-Za-z]+:\/\//.test(n)}function HT(n,e){return new Xt(n,e)}function Nd(n,e){if(n instanceof ca){const t=n;if(t._bucket==null)throw Xv();const r=new Xt(t,t._bucket);return e!=null?Nd(r,e):r}else return e!==void 0?qT(n,e):n}function zT(n,e){if(e&&WT(e)){if(n instanceof ca)return HT(n,e);throw fo("To use ref(service, url), the first argument must be a Storage instance.")}else return Nd(n,e)}function jl(n,e){const t=e==null?void 0:e[Ed];return t==null?null:Oe.makeFromBucketSpec(t,n)}function GT(n,e,t,r={}){n.host=`${e}:${t}`;const s=Nt(e);s&&(po(`https://${n.host}/b`),mo("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:iu(i,n.app.options.projectId))}class ca{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=yd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=$v,this._maxUploadRetryTime=jv,this._requests=new Set,s!=null?this._bucket=Oe.makeFromBucketSpec(s,this._host):this._bucket=jl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Oe.makeFromBucketSpec(this._url,e):this._bucket=jl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){$l("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){$l("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Xt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new rT(vd());{const a=pT(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const ql="@firebase/storage",Wl="0.14.0";/**
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
 */const Od="storage";function KT(n,e,t){return n=le(n),$T(n,e,t)}function QT(n){return n=le(n),jT(n)}function JT(n,e){return n=le(n),zT(n,e)}function YT(n=yo(),e){n=le(n);const r=Os(n,Od).getImmediate({identifier:e}),s=nu("storage");return s&&XT(r,...s),r}function XT(n,e,t,r={}){GT(n,e,t,r)}function ZT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ca(t,r,s,e,Zt)}function eI(){Gt(new Rt(Od,ZT,"PUBLIC").setMultipleInstances(!0)),He(ql,Wl,""),He(ql,Wl,"esm2020")}eI();const tI={apiKey:"AIzaSyBLFin0djocgXKbF9iTGXrFrIxfAWsR67M",authDomain:"dip-to-white-website.firebaseapp.com",projectId:"dip-to-white-website",storageBucket:"dip-to-white-website.firebasestorage.app",messagingSenderId:"226781699903",appId:"1:226781699903:web:f8f8799d8f67d25f36bd8a"},la=cu(tI),Fi=d_(la),ts=Iv(la),nI=YT(la);class rI{constructor(e=[]){this.deletedIds=JSON.parse(localStorage.getItem("dtw_deleted_ids")||"[]"),this.originalHardcodedWorks=[...e],this.works=e.filter(t=>!this.deletedIds.includes(t.id.toString())),this.filteredWorks=this.works,this.currentCategory="all",this.mainType="all",this.viewMode="grid",this.currentPage="home",this.listeners=[],this.user=null,this.initAuth()}fixPath(e){if(!e||e.startsWith("http")||e.startsWith("data:"))return e;const t="/DTW_website/".replace(/\/$/,"");if(t&&e.startsWith(t))return e;let r=e.replace(/^\/public\//,"/");return r.startsWith("/")||(r="/"+r),t+r}checkFirebaseConfig(){return!0}isConfigured(){return!0}setCurrentPage(e){this.currentPage=e,this.notify()}setMainType(e){this.mainType=e,this.currentCategory="all",this.updateFilteredWorks(),this.notify()}setCategory(e){this.currentCategory=e,this.updateFilteredWorks(),this.notify()}updateFilteredWorks(){let e=this.mainType==="all"?this.works:this.works.filter(t=>t.mainType===this.mainType);this.currentCategory!=="all"&&(e=e.filter(t=>(t.category||"其他")===this.currentCategory)),e.sort((t,r)=>t.featured!==r.featured?t.featured?-1:1:(r.year||0)-(t.year||0)),this.filteredWorks=e}getCategories(){const t=(this.mainType==="all"?this.works:this.works.filter(a=>a.mainType===this.mainType)).map(a=>a.category||"other"),r=[...new Set(t)];let s=["all"];const i=r.filter(a=>a!=="all"&&a!=="other");return i.sort(),s.push(...i),s.includes("other")||s.push("other"),s}subscribe(e){this.listeners.includes(e)||this.listeners.push(e)}notify(){this.listeners.forEach(e=>e(this))}toggleViewMode(){this.viewMode=this.viewMode==="grid"?"list":"grid",this.notify()}initAuth(){eg(Fi,e=>{this.user=e,e?this.currentPage==="admin"&&this.notify():this.currentPage==="admin"&&this.notify()})}async login(e,t){try{return await Ym(Fi,e,t),{success:!0}}catch(r){return{success:!1,error:r.message}}}async logout(){await tg(Fi)}async addWork(e){try{const t=await Bv(Ol(ts,"works"),e),r={...e,id:t.id};return this.works=[r,...this.works],this.updateFilteredWorks(),this.notify(),{success:!0}}catch(t){return console.error("Error adding document: ",t),{success:!1,error:t.message}}}async deleteWork(e){console.log("[VM] deleteWork called with ID:",e,"Type:",typeof e);try{try{await Fv(ho(ts,"works",e.toString())),console.log("[VM] Firestore delete attempt finished for:",e)}catch(r){console.warn("[VM] Firestore delete failed (likely hardcoded):",r)}const t=this.works.length;this.works=this.works.filter(r=>!(r.id.toString()===e.toString())),console.log("[VM] Local works filtered. Before:",t,"After:",this.works.length),this.deletedIds.includes(e.toString())||(this.deletedIds.push(e.toString()),localStorage.setItem("dtw_deleted_ids",JSON.stringify(this.deletedIds)),console.log("[VM] ID saved to localStorage:",e)),this.updateFilteredWorks(),this.notify()}catch(t){console.error("[VM] Error in deleteWork process:",t)}}async updateWork(e,t){try{const r=ho(ts,"works",e.toString());await Uv(r,t);const s=this.works.findIndex(i=>i.id.toString()===e.toString());return s!==-1&&(this.works[s]={...this.works[s],...t},this.updateFilteredWorks(),this.notify()),{success:!0}}catch(r){return console.error("Error updating document: ",r),{success:!1,error:r.message}}}async compressImage(e,t=1920,r=.8){return new Promise(s=>{const i=new FileReader;i.readAsDataURL(e),i.onload=a=>{const l=new Image;l.src=a.target.result,l.onload=()=>{const u=document.createElement("canvas");let d=l.width,p=l.height;d>t&&(p=Math.round(p*t/d),d=t),u.width=d,u.height=p,u.getContext("2d").drawImage(l,0,0,d,p),u.toBlob(E=>{const R=new File([E],e.name,{type:"image/jpeg",lastModified:Date.now()});s(R)},"image/jpeg",r)}}})}async uploadFile(e){if(!e)return null;let t=e;const r=e.type.startsWith("image/"),s=e.type.startsWith("video/");r&&e.size>2*1024*1024&&(console.log(`[VM] Image too large (${(e.size/1024/1024).toFixed(2)}MB). Compressing...`),t=await this.compressImage(e),console.log(`[VM] Compression complete. New size: ${(t.size/1024/1024).toFixed(2)}MB`));const i=10*1024*1024;if(s&&e.size>i&&!confirm(`呢個影片 File 有 ${(e.size/1048576).toFixed(2)}MB，對網頁背景嚟講可能太重。建議你先跟隨流程進行壓縮。仲要繼續上傳嗎？`))return null;const a=JT(nI,"uploads/"+new Date().getTime()+"_"+t.name);return await KT(a,t),await QT(a)}async fetchWorks(){try{const e=await Mv(Ol(ts,"works")),t=[];e.forEach(a=>{t.push({...a.data(),id:a.id})});const r=t.filter(a=>!this.deletedIds.includes(a.id.toString())),i=(this.originalHardcodedWorks||this.works).filter(a=>{const l=this.deletedIds.includes(a.id.toString()),u=r.some(d=>d.title===a.title);return!l&&!u});this.works=[...r,...i],this.works.sort((a,l)=>(l.year||0)-(a.year||0)),this.updateFilteredWorks(),this.notify(),console.log("[VM] Sync complete. Firestore:",r.length,"Hardcoded:",i.length)}catch(e){console.error("Error fetching works: ",e)}}getYears(){return[...new Set(this.works.map(t=>t.year))].sort((t,r)=>r-t)}}const sI=n=>{const e="/DTW_website/".replace(/\/$/,""),t=n.getCategories(),r=n.currentPage==="home";return`
    <header class="main-header ${r?"is-home":""}">
      <div class="header-content">
        <h1 class="logo">
          <a href="#" id="go-home">
            <img src="${e}/images/DTW Logo/DTW logo_WHITE.png" alt="DTW Logo" class="logo-img">
          </a>
        </h1>
        <div class="main-nav-links">
           <a href="#" class="nav-link ${n.currentPage==="home"?"active":""}" id="nav-home">主頁</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${n.currentPage==="works"?"active":""}" id="nav-works">作品</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${n.currentPage==="services"?"active":""}" id="nav-services">服務範圍</a>
           <span class="nav-divider">/</span>
           <a href="#" class="nav-link ${n.currentPage==="about"?"active":""}" id="nav-about">關於我們</a>
        </div>
        <button class="menu-toggle" id="menu-toggle">
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div id="mobile-menu-overlay" class="mobile-menu-overlay">
        <div class="mobile-menu-content">
          <div class="mobile-nav-links">
            <a href="#" class="mobile-nav-link" data-page="home">主頁</a>
            <a href="#" class="mobile-nav-link" data-page="works">作品</a>
            <a href="#" class="mobile-nav-link" data-page="services">服務範圍</a>
            <a href="#" class="mobile-nav-link" data-page="about">關於我們</a>
          </div>
          
          <div class="mobile-contact-info">
            <p class="contact-label">聯絡我們</p>
            <a href="https://wa.me/85260931637" target="_blank" class="contact-item">WHATSAPP</a>
            <a href="mailto:diptowhiteproduction@gmail.com" class="contact-item">EMAIL</a>
          </div>
        </div>
      </div>
      
      ${!r&&n.currentPage!=="admin"?`
      <nav class="category-nav" id="category-nav">
        <div class="filter-group">
          <div class="type-switch">
            <a href="#" class="main-type-link ${n.mainType==="all"?"active":""}" data-type="all">全部</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${n.mainType==="video"?"active":""}" data-type="video">影片製作服務</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${n.mainType==="photography"?"active":""}" data-type="photography">攝影服務</a>
            <span class="nav-divider">/</span>
            <a href="#" class="main-type-link ${n.mainType==="design"?"active":""}" data-type="design">設計服務</a>
          </div>
          
          <ul class="cat-list">
            ${t.map(s=>`
              <li><a href="#" class="filter-link ${n.currentCategory===s?"active":""}" data-category="${s}">${s==="all"?"全部":s==="other"?"其他":s}</a></li>
            `).join("")}
          </ul>
        </div>
        
        <div class="view-controls">
          <span class="view-count">${n.filteredWorks.length} 個作品</span>
          <div class="mode-switch">
             <a href="#" id="grid-mode" class="${n.viewMode==="grid"?"active":""}">網格</a>
             <span class="nav-divider">/</span>
             <a href="#" id="list-mode" class="${n.viewMode==="list"?"active":""}">列表</a>
          </div>
        </div>
      </nav>
      `:""}
    </header>
  `},Hl=n=>n.viewMode==="list"?`
      <div class="works-list">
        ${n.filteredWorks.map(e=>`
          <div class="list-item" data-id="${e.id}">
            <span class="item-year">${e.year}</span>
            <span class="item-title">${e.title}</span>
            <span class="item-cat">${e.category}</span>
          </div>
        `).join("")}
      </div>
    `:`
    <div class="grid-container">
      ${n.filteredWorks.map(e=>`
        <div class="work-item" data-id="${e.id}">
          <div class="work-image-wrapper">
            <img src="${n.fixPath(e.thumbnail)}" alt="${e.title}" loading="lazy" />
            <div class="work-overlay">
              <div class="work-info">
                <h3>${e.title}</h3>
                <p>${e.category}</p>
              </div>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `,iI=n=>{const e="/DTW_website/".replace(/\/$/,"");return n.works.slice(0,5),`
    <div class="home-container">
      <div class="home-bg-layer" id="home-bg-layer">
        <video 
          class="home-bg-media active" 
          id="base-video"
          autoplay 
          muted 
          loop 
          playsinline
          webkit-playsinline
        >
          <source src="${e}/Videos/Background_Video/網站主頁_1.mp4" type="video/mp4">
        </video>
      </div>
      <div class="home-bg-overlay"></div>
      <div class="home-content">
        <div class="home-hero-text">
          <span class="home-subtitle">精選作品 / PORTFOLIO</span>
          <h2 class="home-main-title">用心記錄每個<br><span class="hero-accent">珍貴時刻的價值</span></h2>
        </div>
        <nav class="home-recent-works">
          <ul>
            <!-- 由 JS 填充精選作品 -->
            ${n.works.filter(t=>t.featured).slice(0,5).map((t,r)=>`
              <li style="--delay: ${.1+r*.05}s">
                <a href="#" class="home-work-link" data-id="${t.id}">
                  <span class="work-index">${(r+1).toString().padStart(2,"0")}</span>
                  <span class="work-title">${t.title}</span>
                </a>
              </li>
            `).join("")}
            <li style="--delay: 0.6s">
              <a href="#" id="view-more-works" class="home-more-link">查看全部作品 VIEW ALL PROJECTS —</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="home-footer-info">
        <p>© 2026 DIPTOWHITE PRODUCTION</p>
      </div>
    </div>
  `},oI=n=>`
    <div class="page-container about-page">
      <section class="about-hero">
        <div class="about-hero-content">
          <span class="about-label">SINCE 2019</span>
          <h2 class="about-title">用心記錄每個<br><span class="hero-accent">珍貴時刻的價值</span></h2>
        </div>
      </section>

      <section class="about-story">
        <div class="story-grid">
          <div class="story-text">
            <h3>關於漸白 (DiptoWhite)</h3>
            <p>漸白成立於 2019 年初期，這是一個由跨領域青年組成的影像製作團隊。核心成員皆畢業於多媒體、電影及設計相關專業。</p>
            <p>在那段充滿變數與不安的時期，我們聚集了一群熱愛視覺藝術的年輕人，共同探討一個核心命題：<strong>「我想成為怎樣的大人？」</strong></p>
          </div>
          <div class="story-vision">
            <p>「漸白」不僅僅是一個工作室標籤，它是一個探索職業路徑、在動盪環境中尋找自我價值的平台。我們致力於將傳統的紀錄轉化為具有情感深度的視覺故事。</p>
          </div>
        </div>
      </section>

      <section class="about-specialties">
        <div class="specialty-item">
          <span class="item-num">01</span>
          <div class="item-content">
            <h4>情感敘事 (Emotional Storytelling)</h4>
            <p>我們擅長以特寫鏡頭與細膩的剪輯，捕捉那些稍縱即逝的真摯情感。無論是人物專訪還是品牌短片，我們都致力於挖掘影像背後的溫度。</p>
          </div>
        </div>
        <div class="specialty-item">
          <span class="item-num">02</span>
          <div class="item-content">
            <h4>跨界設計與創意 (Cross-disciplinary Design)</h4>
            <p>從動態影像到平面設計，我們提供一站式的視覺方案。包括品牌包裝、印刷材料及導視系統，確保品牌的視覺語言在所有維度上保持一致。</p>
          </div>
        </div>
        <div class="specialty-item">
          <span class="item-num">03</span>
          <div class="item-content">
            <h4>高質量現場方案 (High-quality Live Solutions)</h4>
            <p>應對瞬息萬變的活動現場，我們提供專業的直播與紀錄服務，確保每一場活動的精彩瞬間都能被完美呈現並永久保存。</p>
          </div>
        </div>
      </section>

      <section class="about-cta">
        <p>準備好與我們一起探索下一個故事了嗎？</p>
        <a href="#" id="view-works-from-about" class="about-btn">查看作品集 —</a>
      </section>
    </div>
  `,aI=n=>`
    <div class="page-container services-page">
      <section class="services-hero">
        <div class="services-hero-content">
          <span class="services-label">OUR SERVICES</span>
          <h2 class="services-title">專業影像與設計<br><span class="hero-accent">的一站式解決方案</span></h2>
        </div>
      </section>

      <section class="services-list">
        <div class="service-card">
          <div class="service-card-header">
            <span class="service-icon">🎬</span>
            <h3>活動紀錄 (Event Recording)</h3>
          </div>
          <p>專業的現場攝影與錄影，捕捉活動中最動人的瞬間，並將其編織成細膩的視覺故事。</p>
          <ul class="service-details">
            <li>商業活動 / 派對</li>
            <li>婚禮紀錄 (精選)</li>
            <li>直播服務</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-card-header">
            <span class="service-icon">🎙️</span>
            <h3>人物故事 (Life Stories / 人訪)</h3>
          </div>
          <p>漸白的核心競爭力。我們專注於捕捉真摯的情感與個人的生命旅程，將其轉化為感人至深的影像紀錄。</p>
          <ul class="service-details">
            <li>深度訪談</li>
            <li>紀錄片式紀實</li>
            <li>個人傳記影像</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-card-header">
            <span class="service-icon">🎥</span>
            <h3>影像方案 (Image Solutions)</h3>
          </div>
          <p>為品牌或個人量身打造的高品質影像內容，從創意構思到後期剪輯全程把控。</p>
          <ul class="service-details">
            <li>品牌形象片 (Brand Video)</li>
            <li>音樂錄影帶 (MV)</li>
            <li>創意短片</li>
          </ul>
        </div>

        <div class="service-card">
          <div class="service-card-header">
            <span class="service-icon">🎨</span>
            <h3>設計與製作 (Design & Production)</h3>
          </div>
          <p>將品牌視覺延伸至實體物料，提供從平面設計到產品包裝的全方位創意支持。</p>
          <ul class="service-details">
            <li>品牌識別 / 包裝設計</li>
            <li>活動物料 (背板、宣傳冊)</li>
            <li>紀念品 / 創意周邊</li>
          </ul>
        </div>
      </section>

      <section class="process-section">
        <h3 class="process-title">專業流程 (Our Process)</h3>
        <div class="process-grid">
          <div class="process-step">
            <span class="step-num">01</span>
            <h4>初步溝通</h4>
            <p>深入交流，了解您的需求、願景與預算。</p>
          </div>
          <div class="process-step">
            <span class="step-num">02</span>
            <h4>報價與確認</h4>
            <p>為您量身定制方案，明確各項細節並簽署協議。</p>
          </div>
          <div class="process-step">
            <span class="step-num">03</span>
            <h4>設計與製作</h4>
            <p>將概念轉化為具體的影像與設計，並保持溝通。</p>
          </div>
          <div class="process-step">
            <span class="step-num">04</span>
            <h4>修改與交付</h4>
            <p>基於您的反饋優化細節，確保最終成果精準達標。</p>
          </div>
        </div>
      </section>

      <section class="services-cta">
        <p>期待與您合作，開啟新的視覺篇章。</p>
        <a href="#" class="services-btn" id="contact-btn">立即諮詢 —</a>
      </section>
    </div>
  `,cI=()=>`
    <div class="loading-container" style="
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      color: #fff;
    ">
      <div class="spinner" style="
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top: 4px solid #fff;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
      "></div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </div>
  `,lI=n=>`
    <div class="admin-login-container" style="
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f5f5f5;
    ">
      <form id="admin-login-form" style="
        background: #fff;
        padding: 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        width: 100%;
        max-width: 400px;
      ">
        <h2 style="margin-bottom: 1.5rem; text-align: center;">Admin Login</h2>
        
        <!-- Config Warning -->
        <div id="login-config-warning" style="background: #fff3cd; color: #856404; padding: 0.8rem; margin-bottom: 1rem; border: 1px solid #ffeeba; font-size: 0.9rem; display: none;">
             Please set up your Firebase keys in <code>src/firebase/config.js</code>.
        </div>

        <div style="margin-bottom: 1rem;">
          <input type="email" id="admin-email" placeholder="管理員郵箱" required style="
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
          ">
        </div>
        <div style="margin-bottom: 1.5rem;">
          <input type="password" id="admin-password" placeholder="密碼" required style="
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 16px;
          ">
        </div>
        <button type="submit" style="
          width: 100%;
          padding: 12px;
          background: #000;
          color: #fff;
          border: none;
          border-radius: 4px;
          font-size: 16px;
          cursor: pointer;
          transition: background 0.3s;
        ">登入</button>
      </form>
      <p id="login-error" style="color: red; margin-top: 1rem; display: none;"></p>
    </div>
  `,uI=n=>`
    <div class="admin-dashboard-container" style="padding: 2rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>作品管理後台</h2>
        <div style="display: flex; gap: 1rem;">
          <a href="#" id="go-home" style="padding: 8px 16px; background: #eee; color: #000; text-decoration: none; border: 1px solid #ddd; border-radius: 4px;">返回主頁</a>
          <button id="logout-btn" style="padding: 8px 16px; background: #666; color: #fff; border: none; cursor: pointer; border-radius: 4px;">登出</button>
        </div>
      </div>

      <div class="admin-controls" style="margin-bottom: 2rem; padding: 1rem; background: #fff; border: 1px solid #ddd;">
        <h3>新增/編輯作品</h3>
        <form id="work-form" style="display: grid; gap: 1rem; margin-top: 1rem;">
          <input type="hidden" id="work-id">

          <!-- Config Warning -->
          <div id="firebase-config-warning" style="background: #fff3cd; color: #856404; padding: 1rem; margin-bottom: 1rem; border: 1px solid #ffeeba; display: none;">
            <strong>Configuration Needed:</strong> Please update <code>src/firebase/config.js</code> with your actual Firebase project keys to enable Upload and Login features.
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div>
              <label>標題 / Title</label>
              <input type="text" id="work-title" required style="width: 100%; padding: 8px;">
            </div>
            <div>
              <label>年份 / Year</label>
              <input type="number" id="work-year" value="${new Date().getFullYear()}" style="width: 100%; padding: 8px;">
            </div>
          </div>
          
          <div>
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" id="work-featured" style="width: 18px; height: 18px;">
              <span>設定為精選作品 (顯示喺主頁) / Featured on Home Page</span>
            </label>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
             <div>
              <label>主分類 / Service Type</label>
              <select id="work-mainType" style="width: 100%; padding: 8px;">
                <option value="video">影片製作服務</option>
                <option value="photography">攝影服務</option>
                <option value="design">設計服務</option>
              </select>
            </div>
            <div>
              <label>子分類 / Category</label>
              <input type="text" id="work-category" placeholder="例如: 品牌形象, 活動花絮, 人訪故事" list="category-list" style="width: 100%; padding: 8px;">
              <datalist id="category-list">
                <!-- 影片製作服務 -->
                <option value="品牌形象影片">
                <option value="活動花絮">
                <option value="人訪故事">
                <option value="動畫製作">
                <!-- 攝影服務 -->
                <option value="人像攝影">
                <option value="客製化">
                <!-- 其他 -->
                <option value="其他">
              </datalist>
            </div>
          </div>

          <div>
            <label>縮圖 (主要展示圖)</label>
            <input type="file" id="work-thumbnail-file" accept="image/*">
            <input type="text" id="work-thumbnail-url" placeholder="或輸入圖片 URL" style="width: 100%; padding: 8px; margin-top: 5px;">
          </div>

          <div>
            <label>額外相片 (可多選)</label>
            <div style="display: flex; gap: 10px; align-items: center;">
              <input type="file" id="work-images-files" multiple accept="image/*">
              <button type="button" id="clear-images-btn" style="padding: 4px 8px; font-size: 10px; background: #ffebeb; color: #d00; border: 1px solid #ffcccc; cursor: pointer;">清空現有相片</button>
            </div>
            <p style="font-size: 10px; opacity: 0.6; margin-top: 5px;">(呢度上傳嘅相會自動追加，點擊「清空」可重設)</p>
            <div id="existing-images-preview" style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 10px;"></div>
          </div>

          <div>
             <label>作品詳情連結/視頻 (可選)</label>
             <input type="file" id="work-media-file" accept="video/*,image/*">
             <input type="text" id="work-media-url" placeholder="輸入視頻/詳情圖 URL" style="width: 100%; padding: 8px; margin-top: 5px;">
          </div>

          <div>
            <label>描述</label>
            <textarea id="work-description" rows="3" style="width: 100%; padding: 8px;"></textarea>
          </div>

          <div style="display: flex; gap: 10px;">
            <button type="submit" style="padding: 10px 20px; background: #000; color: #fff; border: none; cursor: pointer;">保存作品</button>
            <button type="button" id="reset-form-btn" style="padding: 10px 20px; background: #eee; border: none; cursor: pointer;">重置</button>
          </div>
        </form>
      </div>

      <div class="works-list">
        <h3>現有作品列表</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; background: #fff;">
          <thead>
            <tr style="background: #f0f0f0; text-align: left;">
              <th style="padding: 10px;">序列</th>
              <th style="padding: 10px;">縮圖</th>
              <th style="padding: 10px;">標題</th>
              <th style="padding: 10px;">精選</th>
              <th style="padding: 10px;">分類</th>
              <th style="padding: 10px;">操作</th>
            </tr>
          </thead>
          <tbody id="admin-works-table-body">
            <!-- 由 JS 填充 -->
          </tbody>
        </table>
      </div>
    </div>
  `,hI=(n,e)=>n?`
    <div class="modal-overlay" id="modal-overlay">
      <div class="modal-content">
        <button class="modal-close" id="modal-close">&times;</button>
        
        <div class="modal-body">
          <div class="modal-media">
            ${n.images&&n.images.length>0?n.images.map(t=>`<img src="${e.fixPath(t)}" alt="${n.title}" />`).join(""):`<img src="${e.fixPath(n.thumbnail)}" alt="${n.title}" />`}
          </div>
          
          <div class="modal-info">
            <div class="modal-header">
              <span class="modal-year">${n.year}</span>
              <h2 class="modal-title">${n.title}</h2>
              <span class="modal-category">${n.category}</span>
            </div>
            
            <div class="modal-description">
              <p>${n.description||"No description available."}</p>
            </div>
            
            ${n.mediaUrl?`
              <div class="modal-actions">
                <a href="${e.fixPath(n.mediaUrl)}" target="_blank" class="video-btn">
                  VIEW VIDEO / 影片連結
                </a>
              </div>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `:"";let xd=!0,Bi=null,zl=null;const J=n=>{if(!n||n.startsWith("http")||n.startsWith("data:"))return n;const e="/DTW_website/".replace(/\/$/,"");if(e&&n.startsWith(e))return n;let t=n.replace(/^\/public\//,"/");return t.startsWith("/")||(t="/"+t),e+t},Ld=[J("/Videos/Background_Video/main_hero_bg.mp4")],Gl={events:[J("/Videos/Theme_Clip/活動花䋈/A.mp4"),J("/Videos/Theme_Clip/活動花䋈/B.mp4"),J("/Videos/Theme_Clip/活動花䋈/C.mp4")],exhibition:[J("/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00001.jpg"),J("/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00002.jpg"),J("/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00003.jpg"),J("/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00004.jpg"),J("/images/Design_portfolio/Event_Exhibition_Installation/Event_Exhibition_Installation00005.jpg")],stories:[J("/Videos/Theme_Clip/人物故事/A.mp4"),J("/Videos/Theme_Clip/人物故事/B.mp4")],special:[J("/Videos/Theme_Clip/特別主題/A.mp4"),J("/Videos/Theme_Clip/特別主題/B.mp4")],brand:[J("/Videos/Background_Video/bg_video00002.mp4"),J("/Videos/Background_Video/bg_video00003.mp4"),J("/Videos/Background_Video/bg_video00004.mp4"),J("/Videos/Background_Video/bg_video00005.mp4")],printing:[J("/images/Design_portfolio/Printing Materials/Printing Materials00001.jpeg"),J("/images/Design_portfolio/Printing Materials/Printing Materials00002.png"),J("/images/Design_portfolio/Printing Materials/Printing Materials00003.png"),J("/images/Design_portfolio/Printing Materials/Printing Materials00004.png"),J("/images/Design_portfolio/Printing Materials/Printing Materials00005.png")],multimedia:[J("/images/Design_portfolio/Multimedia/Multimedia00001.png"),J("/images/Design_portfolio/Multimedia/Multimedia00002.png"),J("/images/Design_portfolio/Multimedia/Multimedia00003.png")],souvenir:[J("/images/Design_portfolio/Souvenir/Souvenir00001.jpg"),J("/images/Design_portfolio/Souvenir/Souvenir00002.jpeg"),J("/images/Design_portfolio/Souvenir/Souvenir00003.png"),J("/images/Design_portfolio/Souvenir/Souvenir00004.jpg"),J("/images/Design_portfolio/Souvenir/Souvenir00005.jpg")]};let Yn=0,Et=null,ns=Ld;const Kl=n=>/\.(jpg|jpeg|png|webp|gif)$/i.test(n),Ql=(n=null)=>{if(Et&&clearInterval(Et),n&&Gl[n]){ns=Gl[n],Yn=0;const e=()=>{Yn=(Yn+1)%ns.length;const r=ns[Yn];Kl(r)?dn(r,null,e):dn(null,r,e)},t=ns[Yn];Kl(t)?dn(t,null,e):dn(null,t,e)}else Md()},dI=()=>{Et&&clearInterval(Et)},j=new rI([]),fI=async()=>{const n=[],e=r=>new Promise(s=>{r||s();const i=new Image;i.src=r,i.onload=s,i.onerror=s}),t=(r,s=1e4)=>new Promise(i=>{if(!r){i();return}const a=document.createElement("video");a.src=r,a.preload="auto";let l=!1;const u=()=>{l||(l=!0,a.oncanplaythrough=null,a.onerror=null,i())};a.oncanplaythrough=u,a.onerror=u,a.load(),setTimeout(u,s)});try{const r=n.map(i=>e(i)),s=Ld[0];s&&await t(s),await Promise.all(r),await new Promise(i=>setTimeout(i,1e3))}catch(r){console.warn("Preloading error:",r)}finally{xd=!1,ua()}},ua=()=>{var r;let n=document.getElementById("header-root"),e=document.getElementById("app-root");if(xd){document.body.innerHTML=cI(),Bi=null;return}else document.getElementById("header-root")||(document.body.innerHTML=`
            <div id="header-root"></div>
            <main id="app-root" class="container"></main>
            <div id="footer-root"></div>
            <div id="modal-root"></div>
         `,n=document.getElementById("header-root"),e=document.getElementById("app-root"));n.innerHTML=sI(j);const t=Bi!==j.currentPage;if(j.currentPage==="home")if(document.body.classList.add("is-home"),e.innerHTML="",document.querySelector(".home-container"))t&&Ql();else{const i=document.createElement("div");i.innerHTML=iI(j),document.body.appendChild(i.firstElementChild),Ql()}else if(document.body.classList.remove("is-home"),dI(),document.body.style.backgroundColor="#ffffff",(r=document.querySelector(".home-container"))==null||r.remove(),j.currentPage==="admin"){const s=zl!==j.user;j.user?t||s?(e.innerHTML=uI(),gI(j)):pI(j):(t||s)&&(e.innerHTML=lI(),mI(j)),zl=j.user}else t?j.currentPage==="works"?e.innerHTML=Hl(j):j.currentPage==="services"?e.innerHTML=aI():j.currentPage==="about"&&(e.innerHTML=oI()):j.currentPage==="works"&&(e.innerHTML=Hl(j));(j.currentPage!=="admin"||j.user)&&_I(),Bi=j.currentPage},pI=n=>{const e=document.getElementById("admin-works-table-body");e&&(console.log("[View] Incremental update for Admin Table"),e.innerHTML=n.works.map((t,r)=>`
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px; font-size: 11px; opacity: 0.6;">${r+1}</td>
                <td style="padding: 10px;">
                    <img src="${J(t.thumbnail)}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                </td>
                <td style="padding: 10px; font-weight: 500;">${t.title}</td>
                <td style="padding: 10px; text-align: center;">${t.featured?"⭐":""}</td>
                <td style="padding: 10px;">${t.category}</td>
                <td style="padding: 10px;">
                    <div style="display: flex; gap: 8px;">
                      <button type="button" class="edit-btn" data-id="${t.id}" style="padding: 5px 12px; background: #eee; border: none; cursor: pointer; border-radius: 4px;">編輯</button>
                      <button type="button" class="delete-btn" data-id="${t.id}" style="padding: 5px 12px; background: #ffebeb; color: #d00; border: none; cursor: pointer; border-radius: 4px;">刪除</button>
                    </div>
                </td>
            </tr>
        `).join(""))},mI=n=>{document.getElementById("login-config-warning");const e=document.getElementById("admin-login-form");e==null||e.addEventListener("submit",async t=>{t.preventDefault();const r=document.getElementById("admin-email").value,s=document.getElementById("admin-password").value,i=document.getElementById("login-error"),a=await n.login(r,s);a.success||(i.textContent="登入失敗: "+a.error,i.style.display="block")})},gI=n=>{var r,s,i;(r=document.getElementById("logout-btn"))==null||r.addEventListener("click",()=>{n.logout()});const e=document.getElementById("work-form");e==null||e.addEventListener("submit",async a=>{a.preventDefault();const l=e.querySelector('button[type="submit"]');l.disabled=!0,l.textContent="保存中...",n.checkFirebaseConfig();try{const u=document.getElementById("work-id").value,d=document.getElementById("work-title").value,p=parseInt(document.getElementById("work-year").value),_=document.getElementById("work-featured").checked,E=document.getElementById("work-mainType").value,R=document.getElementById("work-category").value,S=document.getElementById("work-description").value;let D=document.getElementById("work-thumbnail-url").value;const k=document.getElementById("work-thumbnail-file").files[0];k&&(D=await n.uploadFile(k));let x=document.getElementById("work-media-url").value;const L=document.getElementById("work-media-file").files[0];L&&(x=await n.uploadFile(L));const W=document.getElementById("work-images-files").files;let H=[];if(W.length>0){const Z=Array.from(W).map(v=>n.uploadFile(v));H=await Promise.all(Z),H=H.filter(v=>v!==null)}const re={title:d,year:p,featured:_,mainType:E,category:R,description:S,thumbnail:D,mediaUrl:x,updatedAt:new Date};if(u){const Z=n.works.find(m=>m.id.toString()===u.toString());let v=Z&&Z.images?[...Z.images]:[];H.length>0?re.images=[...v,...H]:re.images=v,await n.updateWork(u,re),alert("作品已更新!")}else re.images=H,await n.addWork({...re,createdAt:new Date}),alert("作品已保存!");e.reset(),document.getElementById("work-id").value="",l.textContent="保存作品"}catch(u){alert("保存失敗: "+u.message)}finally{l.disabled=!1}}),(s=document.getElementById("reset-form-btn"))==null||s.addEventListener("click",()=>{e.reset(),document.getElementById("work-id").value="",document.querySelector('#work-form button[type="submit"]').textContent="保存作品";const a=document.getElementById("existing-images-preview");a&&(a.innerHTML="")}),(i=document.getElementById("clear-images-btn"))==null||i.addEventListener("click",async()=>{const a=document.getElementById("work-id").value;if(!a){alert("請先選擇一個現有作品進行編輯。");return}if(confirm("確定要清空呢個作品嘅所有額外相片嗎？"))try{await n.updateWork(a,{images:[]});const l=document.getElementById("existing-images-preview");l&&(l.innerHTML=""),alert("額外相片已清空！")}catch(l){alert("清空失敗: "+l.message)}});const t=document.getElementById("admin-works-table-body");t&&(t.innerHTML=n.works.map((a,l)=>`
            <tr style="border-bottom: 1px solid #eee;">
                <td style="padding: 10px; font-size: 11px; opacity: 0.6;">${l+1}</td>
                <td style="padding: 10px;">
                    <img src="${J(a.thumbnail)}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                </td>
                <td style="padding: 10px; font-weight: 500;">${a.title}</td>
                <td style="padding: 10px; text-align: center;">${a.featured?"⭐":""}</td>
                <td style="padding: 10px;">${a.category}</td>
                <td style="padding: 10px;">
                    <div style="display: flex; gap: 8px;">
                      <button type="button" class="edit-btn" data-id="${a.id}" style="padding: 5px 12px; background: #eee; border: none; cursor: pointer; border-radius: 4px;">編輯</button>
                      <button type="button" class="delete-btn" data-id="${a.id}" style="padding: 5px 12px; background: #ffebeb; color: #d00; border: none; cursor: pointer; border-radius: 4px;">刪除</button>
                    </div>
                </td>
            </tr>
        `).join(""),t.addEventListener("click",a=>{const l=a.target.closest(".delete-btn"),u=a.target.closest(".edit-btn");if(l){a.preventDefault(),a.stopPropagation();const d=l.dataset.id;console.log("[View] Delete clicked for ID:",d),confirm("確定要永久刪除呢個作品嗎？")?(console.log("[View] User confirmed delete for:",d),n.deleteWork(d)):console.log("[View] User cancelled delete for:",d)}if(u){a.preventDefault(),a.stopPropagation();const d=u.dataset.id;console.log("[View] Edit clicked for ID:",d);const p=n.works.find(_=>_.id.toString()===d.toString());if(p){document.getElementById("work-id").value=p.id,document.getElementById("work-title").value=p.title,document.getElementById("work-year").value=p.year,document.getElementById("work-featured").checked=!!p.featured,document.getElementById("work-mainType").value=p.mainType,document.getElementById("work-category").value=p.category,document.getElementById("work-description").value=p.description||"",document.getElementById("work-thumbnail-url").value=p.thumbnail,document.getElementById("work-media-url").value=p.mediaUrl||"";const _=document.getElementById("existing-images-preview");_&&p.images?(_.innerHTML=p.images.map((E,R)=>`
              <div style="position: relative;" class="preview-img-wrapper" data-index="${R}">
                <img src="${n.fixPath(E)}" style="width: 60px; height: 60px; object-fit: cover; border: 1px solid #ddd; border-radius: 4px;" />
                <button type="button" class="remove-single-img" data-url="${E}" style="position: absolute; top: -5px; right: -5px; width: 18px; height: 18px; background: #ff4d4d; color: white; border: none; border-radius: 50%; cursor: pointer; font-size: 12px; line-height: 18px; padding: 0;">&times;</button>
              </div>
            `).join(""),_.onclick=async E=>{const R=E.target.closest(".remove-single-img");if(R){const S=R.dataset.url,D=document.getElementById("work-id").value;if(!D)return;if(confirm("確定要移除呢張相片嗎？"))try{const x=n.works.find(L=>L.id.toString()===D.toString()).images.filter(L=>L!==S);await n.updateWork(D,{images:x}),R.closest(".preview-img-wrapper").remove(),alert("相片已移除！")}catch(k){alert("移除失敗: "+k.message)}}}):_&&(_.innerHTML=""),document.querySelector('#work-form button[type="submit"]').textContent="更新作品",window.scrollTo({top:0,behavior:"smooth"})}}}))},_I=()=>{var r,s,i,a,l,u,d,p,_,E,R;(r=document.getElementById("view-works-from-about"))==null||r.addEventListener("click",S=>{S.preventDefault(),j.setCurrentPage("works")}),(s=document.getElementById("contact-btn"))==null||s.addEventListener("click",S=>{S.preventDefault(),alert("感謝您的關注！請通過社交媒體或郵件與我們聯繫。")}),(i=document.getElementById("go-home"))==null||i.addEventListener("click",S=>{S.preventDefault(),j.setCurrentPage("home")}),(a=document.getElementById("nav-home"))==null||a.addEventListener("click",S=>{S.preventDefault(),j.setCurrentPage("home")}),(l=document.getElementById("nav-works"))==null||l.addEventListener("click",S=>{S.preventDefault(),j.setCurrentPage("works")}),(u=document.getElementById("nav-services"))==null||u.addEventListener("click",S=>{S.preventDefault(),j.setCurrentPage("services")}),(d=document.getElementById("nav-about"))==null||d.addEventListener("click",S=>{S.preventDefault(),j.setCurrentPage("about")});const n=document.getElementById("menu-toggle"),e=document.getElementById("mobile-menu-overlay"),t=document.querySelector(".main-header");n==null||n.addEventListener("click",()=>{t.classList.toggle("menu-open")}),e==null||e.addEventListener("click",S=>{const D=S.target.closest(".mobile-nav-link");if(D){S.preventDefault();const k=D.dataset.page;j.setCurrentPage(k),t.classList.remove("menu-open")}}),window.addEventListener("resize",()=>{window.innerWidth>768&&t.classList.remove("menu-open")}),document.querySelectorAll(".main-type-link").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault(),j.setMainType(D.target.dataset.type),j.setCurrentPage("works")})}),document.querySelectorAll(".filter-link").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault(),j.setCategory(D.target.dataset.category)})}),(p=document.getElementById("view-more-works"))==null||p.addEventListener("click",S=>{S.preventDefault(),j.setCurrentPage("works")}),document.querySelectorAll(".home-work-link").forEach(S=>{S.addEventListener("mouseenter",D=>{const k=D.currentTarget.dataset.id,x=j.works.find(L=>L.id.toString()===k.toString());x&&x.mediaUrl?dn(null,x.mediaUrl):x&&x.thumbnail&&dn(x.thumbnail,null)}),S.addEventListener("click",D=>{D.preventDefault();const k=D.currentTarget.dataset.id,x=j.works.find(L=>L.id.toString()===k.toString());x&&Jl(x)})}),(_=document.querySelector(".home-recent-works"))==null||_.addEventListener("mouseleave",()=>{Md()}),(E=document.getElementById("grid-mode"))==null||E.addEventListener("click",S=>{S.preventDefault(),j.viewMode!=="grid"&&j.toggleViewMode()}),(R=document.getElementById("list-mode"))==null||R.addEventListener("click",S=>{S.preventDefault(),j.viewMode!=="list"&&j.toggleViewMode()}),document.querySelectorAll(".work-item, .list-item").forEach(S=>{S.addEventListener("click",D=>{D.preventDefault();const k=S.dataset.id;console.log("[Popup] Clicked item ID:",k);const x=j.works.find(L=>L.id.toString()===(k==null?void 0:k.toString()));console.log("[Popup] Found work:",x),x&&Jl(x)})})},Jl=n=>{var t,r;const e=document.getElementById("modal-root");e&&(e.innerHTML=hI(n,j),(t=document.getElementById("modal-close"))==null||t.addEventListener("click",Yl),(r=document.getElementById("modal-overlay"))==null||r.addEventListener("click",s=>{s.target.id==="modal-overlay"&&Yl()}))},Yl=()=>{const n=document.getElementById("modal-root");n&&(n.innerHTML="")},dn=(n,e,t=null)=>{const r=document.getElementById("home-bg-layer");if(!r)return;Et&&clearInterval(Et);const s=document.getElementById("dynamic-bg"),i=document.getElementById("base-video");if(e||n){const a=e?document.createElement("video"):document.createElement("img");a.id="dynamic-bg",a.className="home-bg-media",e?(a.muted=!0,a.autoplay=!0,a.playsinline=!0,a.setAttribute("webkit-playsinline","true"),a.setAttribute("playsinline","true"),a.disablePictureInPicture=!0,a.loop=!1,a.src=e,t&&(a.addEventListener("ended",t,{once:!0}),Et=setTimeout(t,15e3))):(a.src=n,t&&(Et=setTimeout(t,4e3))),r.appendChild(a),setTimeout(()=>{a.classList.add("active"),s&&s.classList.remove("active"),i&&i.classList.remove("active"),setTimeout(()=>{s&&s.parentNode===r&&s.remove()},800)},50)}},Md=()=>{const n=document.getElementById("dynamic-bg");n==null||n.remove();const e=document.getElementById("base-video");e&&e.classList.add("active")};j.subscribe(ua);document.addEventListener("DOMContentLoaded",()=>{ua(),fI(),j.fetchWorks(),window.goToAdmin=()=>j.setCurrentPage("admin"),window.location.hash==="#admin"&&j.setCurrentPage("admin")});
