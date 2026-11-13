(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vs="187",Tl=0,va=1,Al=2,ir=1,bl=2,gi=3,Fn=0,Pt=1,un=2,jn=0,xi=1,xa=2,Ma=3,Sa=4,Rl=5,Qn=100,wl=101,Cl=102,Pl=103,Ll=104,Dl=200,Il=201,Nl=202,Ul=203,go=204,_o=205,Fl=206,Ol=207,Bl=208,zl=209,Gl=210,Hl=211,Vl=212,kl=213,Wl=214,Qr=0,jr=1,es=2,Mi=3,ts=4,ns=5,is=6,rs=7,vo=0,Xl=1,ql=2,hn=0,xo=1,Mo=2,So=3,Eo=4,yo=5,To=6,Ao=7,bo=300,ni=301,Si=302,yr=303,Tr=304,ss=1e3,dn=1001,as=1002,vt=1003,Yl=1004,Ii=1005,Ct=1006,Ar=1007,Tn=1008,It=1009,Ro=1010,wo=1011,Ei=1012,ks=1013,tn=1014,Qt=1015,nn=1016,Ws=1017,Xs=1018,ii=1020,Co=35902,Po=35899,Lo=1021,Do=1022,jt=1023,bn=1026,An=1027,Io=1028,qs=1029,On=1030,Ys=1031,Ks=1033,rr=33776,sr=33777,ar=33778,or=33779,os=35840,ls=35841,cs=35842,us=35843,ds=36196,hs=37492,fs=37496,ps=37488,ms=37489,cr=37490,gs=37491,_s=37808,vs=37809,xs=37810,Ms=37811,Ss=37812,Es=37813,ys=37814,Ts=37815,As=37816,bs=37817,Rs=37818,ws=37819,Cs=37820,Ps=37821,Ls=36492,Ds=36494,Is=36495,Ns=36283,Us=36284,ur=36285,Fs=36286,Kl=3200,Os=0,Zl=1,yn="",zt="srgb",dr="srgb-linear",hr="linear",Ze="srgb",br=7680,$l=519,Jl=512,Ql=513,jl=514,No=515,ec=516,tc=517,Uo=518,Fo=519,nc=35044,Ea="300 es",qt=2e3,yi=2001;function ic(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rc(){const i=fr("canvas");return i.style.display="block",i}const ya={};function Ta(...i){const e="THREE."+i.shift();console.log(e,...i)}function Oo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=Oo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function qe(...i){i=Oo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ei(...i){const e=i.join(" ");e in ya||(ya[e]=!0,we(...i))}function sc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ac={[Qr]:Qr,[es]:is,[ts]:ts,[Mi]:ns,[jr]:jr,[is]:es,[rs]:rs,[ns]:Mi};class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rr=Math.PI/180,Bs=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function oc(i,e){return(i%e+e)%e}function wr(i,e,t){return(1-t)*i+t*e}function lc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zs(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function cc(i,e){if(e.constructor===Float32Array)return i;const t=Zs(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function uc(i,e){if(e.constructor===Float32Array)return i;const t=Zs(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}const ia=class ia{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ia.prototype.isVector2=!0;let Oe=ia;class oi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],p=n[r+2],g=n[r+3],u=s[a+0],m=s[a+1],x=s[a+2],T=s[a+3];if(g!==T||c!==u||l!==m||p!==x){let h=c*u+l*m+p*x+g*T;h<0&&(u=-u,m=-m,x=-x,T=-T,h=-h);let d=1-o;if(h<.9995){const M=Math.acos(h),A=Math.sin(M);d=Math.sin(d*M)/A,o=Math.sin(o*M)/A,c=c*d+u*o,l=l*d+m*o,p=p*d+x*o,g=g*d+T*o}else{c=c*d+u*o,l=l*d+m*o,p=p*d+x*o,g=g*d+T*o;const M=1/Math.sqrt(c*c+l*l+p*p+g*g);c*=M,l*=M,p*=M,g*=M}}e[t]=c,e[t+1]=l,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],p=n[r+3],g=s[a],u=s[a+1],m=s[a+2],x=s[a+3];return e[t]=o*x+p*g+c*m-l*u,e[t+1]=c*x+p*u+l*g-o*m,e[t+2]=l*x+p*m+o*u-c*g,e[t+3]=p*x-o*g-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),p=o(r/2),g=o(s/2),u=c(n/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=u*p*g+l*m*x,this._y=l*m*g-u*p*x,this._z=l*p*x+u*m*g,this._w=l*p*g-u*m*x;break;case"YXZ":this._x=u*p*g+l*m*x,this._y=l*m*g-u*p*x,this._z=l*p*x-u*m*g,this._w=l*p*g+u*m*x;break;case"ZXY":this._x=u*p*g-l*m*x,this._y=l*m*g+u*p*x,this._z=l*p*x+u*m*g,this._w=l*p*g-u*m*x;break;case"ZYX":this._x=u*p*g-l*m*x,this._y=l*m*g+u*p*x,this._z=l*p*x-u*m*g,this._w=l*p*g+u*m*x;break;case"YZX":this._x=u*p*g+l*m*x,this._y=l*m*g+u*p*x,this._z=l*p*x-u*m*g,this._w=l*p*g-u*m*x;break;case"XZY":this._x=u*p*g-l*m*x,this._y=l*m*g-u*p*x,this._z=l*p*x+u*m*g,this._w=l*p*g+u*m*x;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],p=t[6],g=t[10],u=n+o+g;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(p-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>g){const m=2*Math.sqrt(1+n-o-g);this._w=(p-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>g){const m=2*Math.sqrt(1+o-n-g);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+p)/m}else{const m=2*Math.sqrt(1+g-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,p=t._w;return this._x=n*p+a*o+r*l-s*c,this._y=r*p+a*c+s*o-n*l,this._z=s*p+a*l+n*c-r*o,this._w=a*p-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),p=Math.sin(l);c=Math.sin(c*l)/p,t=Math.sin(t*l)/p,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ra=class ra{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Aa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Aa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),p=2*(o*t-s*r),g=2*(s*n-a*t);return this.x=t+c*l+a*g-o*p,this.y=n+c*p+o*l-s*g,this.z=r+c*g+s*p-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cr.copy(this).projectOnVector(e),this.sub(Cr)}reflect(e){return this.sub(Cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ra.prototype.isVector3=!0;let B=ra;const Cr=new B,Aa=new oi,sa=class sa{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=c,p[6]=n,p[7]=a,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],p=n[4],g=n[7],u=n[2],m=n[5],x=n[8],T=r[0],h=r[3],d=r[6],M=r[1],A=r[4],E=r[7],R=r[2],b=r[5],f=r[8];return s[0]=a*T+o*M+c*R,s[3]=a*h+o*A+c*b,s[6]=a*d+o*E+c*f,s[1]=l*T+p*M+g*R,s[4]=l*h+p*A+g*b,s[7]=l*d+p*E+g*f,s[2]=u*T+m*M+x*R,s[5]=u*h+m*A+x*b,s[8]=u*d+m*E+x*f,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8];return t*a*p-t*o*l-n*s*p+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8],g=p*a-o*l,u=o*c-p*s,m=l*s-a*c,x=t*g+n*u+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/x;return e[0]=g*T,e[1]=(r*l-p*n)*T,e[2]=(o*n-r*a)*T,e[3]=u*T,e[4]=(p*t-r*c)*T,e[5]=(r*s-o*t)*T,e[6]=m*T,e[7]=(n*c-l*t)*T,e[8]=(a*t-n*s)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Pr.makeScale(e,t)),this}rotate(e){return ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Pr.makeRotation(-e)),this}translate(e,t){return ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Pr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};sa.prototype.isMatrix3=!0;let Pe=sa;const Pr=new Pe,ba=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ra=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dc(){const i={enabled:!0,workingColorSpace:dr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Ze&&(r.r=fn(r.r),r.g=fn(r.g),r.b=fn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yn?hr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[dr]:{primaries:e,whitePoint:n,transfer:hr,toXYZ:ba,fromXYZ:Ra,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:Ze,toXYZ:ba,fromXYZ:Ra,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}const ke=dc();function fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class hc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gn===void 0&&(Gn=fr("canvas")),Gn.width=e.width,Gn.height=e.height;const r=Gn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Gn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=fn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fn(t[n]/255)*255):t[n]=fn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fc=0;class $s{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Lr(r[a].image)):s.push(Lr(r[a]))}else s=Lr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Lr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}let pc=0;const Dr=new B;class bt extends zn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=dn,r=dn,s=Ct,a=Tn,o=jt,c=It,l=bt.DEFAULT_ANISOTROPY,p=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=bi(),this.name="",this.source=new $s(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Dr).x}get height(){return this.source.getSize(Dr).y}get depth(){return this.source.getSize(Dr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case dn:e.x=e.x<0?0:1;break;case as:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case dn:e.y=e.y<0?0:1;break;case as:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=bo;bt.DEFAULT_ANISOTROPY=1;const aa=class aa{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],p=c[4],g=c[8],u=c[1],m=c[5],x=c[9],T=c[2],h=c[6],d=c[10];if(Math.abs(p-u)<.01&&Math.abs(g-T)<.01&&Math.abs(x-h)<.01){if(Math.abs(p+u)<.1&&Math.abs(g+T)<.1&&Math.abs(x+h)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,E=(m+1)/2,R=(d+1)/2,b=(p+u)/4,f=(g+T)/4,S=(x+h)/4;return A>E&&A>R?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=b/n,s=f/n):E>R?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=b/r,s=S/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=f/s,r=S/s),this.set(n,r,s,t),this}let M=Math.sqrt((h-x)*(h-x)+(g-T)*(g-T)+(u-p)*(u-p));return Math.abs(M)<.001&&(M=1),this.x=(h-x)/M,this.y=(g-T)/M,this.z=(u-p)/M,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};aa.prototype.isVector4=!0;let rt=aa;class mc extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=new bt({width:e,height:t,depth:n.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new $s(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class en extends mc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bo extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gc extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const gr=class gr{constructor(e,t,n,r,s,a,o,c,l,p,g,u,m,x,T,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,p,g,u,m,x,T,h)}set(e,t,n,r,s,a,o,c,l,p,g,u,m,x,T,h){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=p,d[10]=g,d[14]=u,d[3]=m,d[7]=x,d[11]=T,d[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Hn.setFromMatrixColumn(e,0).length(),s=1/Hn.setFromMatrixColumn(e,1).length(),a=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),p=Math.cos(s),g=Math.sin(s);if(e.order==="XYZ"){const u=a*p,m=a*g,x=o*p,T=o*g;t[0]=c*p,t[4]=-c*g,t[8]=l,t[1]=m+x*l,t[5]=u-T*l,t[9]=-o*c,t[2]=T-u*l,t[6]=x+m*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*p,m=c*g,x=l*p,T=l*g;t[0]=u+T*o,t[4]=x*o-m,t[8]=a*l,t[1]=a*g,t[5]=a*p,t[9]=-o,t[2]=m*o-x,t[6]=T+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*p,m=c*g,x=l*p,T=l*g;t[0]=u-T*o,t[4]=-a*g,t[8]=x+m*o,t[1]=m+x*o,t[5]=a*p,t[9]=T-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*p,m=a*g,x=o*p,T=o*g;t[0]=c*p,t[4]=x*l-m,t[8]=u*l+T,t[1]=c*g,t[5]=T*l+u,t[9]=m*l-x,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,x=o*c,T=o*l;t[0]=c*p,t[4]=T-u*g,t[8]=x*g+m,t[1]=g,t[5]=a*p,t[9]=-o*p,t[2]=-l*p,t[6]=m*g+x,t[10]=u-T*g}else if(e.order==="XZY"){const u=a*c,m=a*l,x=o*c,T=o*l;t[0]=c*p,t[4]=-g,t[8]=l*p,t[1]=u*g+T,t[5]=a*p,t[9]=m*g-x,t[2]=x*g-m,t[6]=o*p,t[10]=T*g+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_c,e,vc)}lookAt(e,t,n){const r=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),_n.crossVectors(n,Lt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),_n.crossVectors(n,Lt)),_n.normalize(),Ni.crossVectors(Lt,_n),r[0]=_n.x,r[4]=Ni.x,r[8]=Lt.x,r[1]=_n.y,r[5]=Ni.y,r[9]=Lt.y,r[2]=_n.z,r[6]=Ni.z,r[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],p=n[1],g=n[5],u=n[9],m=n[13],x=n[2],T=n[6],h=n[10],d=n[14],M=n[3],A=n[7],E=n[11],R=n[15],b=r[0],f=r[4],S=r[8],N=r[12],P=r[1],I=r[5],G=r[9],q=r[13],L=r[2],V=r[6],J=r[10],z=r[14],te=r[3],W=r[7],Q=r[11],j=r[15];return s[0]=a*b+o*P+c*L+l*te,s[4]=a*f+o*I+c*V+l*W,s[8]=a*S+o*G+c*J+l*Q,s[12]=a*N+o*q+c*z+l*j,s[1]=p*b+g*P+u*L+m*te,s[5]=p*f+g*I+u*V+m*W,s[9]=p*S+g*G+u*J+m*Q,s[13]=p*N+g*q+u*z+m*j,s[2]=x*b+T*P+h*L+d*te,s[6]=x*f+T*I+h*V+d*W,s[10]=x*S+T*G+h*J+d*Q,s[14]=x*N+T*q+h*z+d*j,s[3]=M*b+A*P+E*L+R*te,s[7]=M*f+A*I+E*V+R*W,s[11]=M*S+A*G+E*J+R*Q,s[15]=M*N+A*q+E*z+R*j,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],p=e[2],g=e[6],u=e[10],m=e[14],x=e[3],T=e[7],h=e[11],d=e[15],M=c*m-l*u,A=o*m-l*g,E=o*u-c*g,R=a*m-l*p,b=a*u-c*p,f=a*g-o*p;return t*(T*M-h*A+d*E)-n*(x*M-h*R+d*b)+r*(x*A-T*R+d*f)-s*(x*E-T*b+h*f)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],p=e[10];return t*(a*p-o*l)-n*(s*p-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],p=e[8],g=e[9],u=e[10],m=e[11],x=e[12],T=e[13],h=e[14],d=e[15],M=t*o-n*a,A=t*c-r*a,E=t*l-s*a,R=n*c-r*o,b=n*l-s*o,f=r*l-s*c,S=p*T-g*x,N=p*h-u*x,P=p*d-m*x,I=g*h-u*T,G=g*d-m*T,q=u*d-m*h,L=M*q-A*G+E*I+R*P-b*N+f*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/L;return e[0]=(o*q-c*G+l*I)*V,e[1]=(r*G-n*q-s*I)*V,e[2]=(T*f-h*b+d*R)*V,e[3]=(u*b-g*f-m*R)*V,e[4]=(c*P-a*q-l*N)*V,e[5]=(t*q-r*P+s*N)*V,e[6]=(h*E-x*f-d*A)*V,e[7]=(p*f-u*E+m*A)*V,e[8]=(a*G-o*P+l*S)*V,e[9]=(n*P-t*G-s*S)*V,e[10]=(x*b-T*E+d*M)*V,e[11]=(g*E-p*b-m*M)*V,e[12]=(o*N-a*I-c*S)*V,e[13]=(t*I-n*N+r*S)*V,e[14]=(T*A-x*R-h*M)*V,e[15]=(p*R-g*A+u*M)*V,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,p=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,p*o+n,p*c-r*a,0,l*c-r*o,p*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,p=a+a,g=o+o,u=s*l,m=s*p,x=s*g,T=a*p,h=a*g,d=o*g,M=c*l,A=c*p,E=c*g,R=n.x,b=n.y,f=n.z;return r[0]=(1-(T+d))*R,r[1]=(m+E)*R,r[2]=(x-A)*R,r[3]=0,r[4]=(m-E)*b,r[5]=(1-(u+d))*b,r[6]=(h+M)*b,r[7]=0,r[8]=(x+A)*f,r[9]=(h-M)*f,r[10]=(1-(u+T))*f,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Hn.set(r[0],r[1],r[2]).length();const o=Hn.set(r[4],r[5],r[6]).length(),c=Hn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Vt.copy(this);const l=1/a,p=1/o,g=1/c;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=p,Vt.elements[5]*=p,Vt.elements[6]*=p,Vt.elements[8]*=g,Vt.elements[9]*=g,Vt.elements[10]*=g,t.setFromRotationMatrix(Vt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=qt,c=!1){const l=this.elements,p=2*s/(t-e),g=2*s/(n-r),u=(t+e)/(t-e),m=(n+r)/(n-r);let x,T;if(c)x=s/(a-s),T=a*s/(a-s);else if(o===qt)x=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===yi)x=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=g,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=qt,c=!1){const l=this.elements,p=2/(t-e),g=2/(n-r),u=-(t+e)/(t-e),m=-(n+r)/(n-r);let x,T;if(c)x=1/(a-s),T=a/(a-s);else if(o===qt)x=-2/(a-s),T=-(a+s)/(a-s);else if(o===yi)x=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=g,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=x,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};gr.prototype.isMatrix4=!0;let tt=gr;const Hn=new B,Vt=new tt,_c=new B(0,0,0),vc=new B(1,1,1),_n=new B,Ni=new B,Lt=new B,wa=new tt,Ca=new oi;class Rn{constructor(e=0,t=0,n=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],p=r[9],g=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ca.setFromEuler(this),this.setFromQuaternion(Ca,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xc=0;const Pa=new B,Vn=new oi,sn=new tt,Ui=new B,di=new B,Mc=new B,Sc=new oi,La=new B(1,0,0),Da=new B(0,1,0),Ia=new B(0,0,1),Na={type:"added"},Ec={type:"removed"},kn={type:"childadded",child:null},Ir={type:"childremoved",child:null};class Rt extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new B,t=new Rn,n=new oi,r=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new Pe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(La,e)}rotateY(e){return this.rotateOnAxis(Da,e)}rotateZ(e){return this.rotateOnAxis(Ia,e)}translateOnAxis(e,t){return Pa.copy(e).applyQuaternion(this.quaternion),this.position.add(Pa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(La,e)}translateY(e){return this.translateOnAxis(Da,e)}translateZ(e){return this.translateOnAxis(Ia,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ui.copy(e):Ui.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sn.lookAt(di,Ui,this.up):sn.lookAt(Ui,di,this.up),this.quaternion.setFromRotationMatrix(sn),r&&(sn.extractRotation(r.matrixWorld),Vn.setFromRotationMatrix(sn),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Na),kn.child=e,this.dispatchEvent(kn),kn.child=null):qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ec),Ir.child=e,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Na),kn.child=e,this.dispatchEvent(kn),kn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,e,Mc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,Sc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,p=c.length;l<p;l++){const g=c[l];s(e.shapes,g)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),p=a(e.images),g=a(e.shapes),u=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),p.length>0&&(n.images=p),g.length>0&&(n.shapes=g),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),x.length>0&&(n.nodes=x)}return n.object=r,n;function a(o){const c=[];for(const l in o){const p=o[l];delete p.metadata,c.push(p)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Rt.DEFAULT_UP=new B(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _i extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yc={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const T of e.hand.values()){const h=t.getJointPose(T,n),d=this._getHandJoint(l,T);h!==null&&(d.matrix.fromArray(h.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=h.radius),d.visible=h!==null}const p=l.joints["index-finger-tip"],g=l.joints["thumb-tip"],u=p.position.distanceTo(g.position),m=.02,x=.005;l.inputState.pinching&&u>m+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _i;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},Fi={h:0,s:0,l:0};function Ur(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ke.workingColorSpace){if(e=oc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ur(a,s,e+1/3),this.g=Ur(a,s,e),this.b=Ur(a,s,e-1/3)}return ke.colorSpaceToWorking(this,r),this}setStyle(e,t=zt){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,t);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){const n=Go[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fn(e.r),this.g=fn(e.g),this.b=fn(e.b),this}copyLinearToSRGB(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return ke.workingToColorSpace(Et.copy(this),e),Math.round(Ve(Et.r*255,0,255))*65536+Math.round(Ve(Et.g*255,0,255))*256+Math.round(Ve(Et.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.workingToColorSpace(Et.copy(this),t);const n=Et.r,r=Et.g,s=Et.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const p=(o+a)/2;if(o===a)c=0,l=0;else{const g=a-o;switch(l=p<=.5?g/(a+o):g/(2-a-o),a){case n:c=(r-s)/g+(r<s?6:0);break;case r:c=(s-n)/g+2;break;case s:c=(n-r)/g+4;break}c/=6}return e.h=c,e.s=l,e.l=p,e}getRGB(e,t=ke.workingColorSpace){return ke.workingToColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=zt){ke.workingToColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,r=Et.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(Fi);const n=wr(vn.h,Fi.h,t),r=wr(vn.s,Fi.s,t),s=wr(vn.l,Fi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new Be;Be.NAMES=Go;class Tc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kt=new B,an=new B,Fr=new B,on=new B,Wn=new B,Xn=new B,Ua=new B,Or=new B,Br=new B,zr=new B,Gr=new rt,Hr=new rt,Vr=new rt;class Xt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kt.subVectors(r,t),an.subVectors(n,t),Fr.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(an),c=kt.dot(Fr),l=an.dot(an),p=an.dot(Fr),g=a*l-o*o;if(g===0)return s.set(0,0,0),null;const u=1/g,m=(l*c-o*p)*u,x=(a*p-o*c)*u;return s.set(1-m-x,x,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,on)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,on.x),c.addScaledVector(a,on.y),c.addScaledVector(o,on.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Gr.setScalar(0),Hr.setScalar(0),Vr.setScalar(0),Gr.fromBufferAttribute(e,t),Hr.fromBufferAttribute(e,n),Vr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Gr,s.x),a.addScaledVector(Hr,s.y),a.addScaledVector(Vr,s.z),a}static isFrontFacing(e,t,n,r){return kt.subVectors(n,t),an.subVectors(e,t),kt.cross(an).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),an.subVectors(this.a,this.b),kt.cross(an).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Wn.subVectors(r,n),Xn.subVectors(s,n),Or.subVectors(e,n);const c=Wn.dot(Or),l=Xn.dot(Or);if(c<=0&&l<=0)return t.copy(n);Br.subVectors(e,r);const p=Wn.dot(Br),g=Xn.dot(Br);if(p>=0&&g<=p)return t.copy(r);const u=c*g-p*l;if(u<=0&&c>=0&&p<=0&&c-p>0)return a=c/(c-p),t.copy(n).addScaledVector(Wn,a);zr.subVectors(e,s);const m=Wn.dot(zr),x=Xn.dot(zr);if(x>=0&&m<=x)return t.copy(s);const T=m*l-c*x;if(T<=0&&l>=0&&x<=0)return o=l/(l-x),t.copy(n).addScaledVector(Xn,o);const h=p*x-m*g;if(h<=0&&g-p>=0&&m-x>=0)return Ua.subVectors(s,r),o=(g-p)/(g-p+(m-x)),t.copy(r).addScaledVector(Ua,o);const d=1/(h+T+u);return a=T*d,o=u*d,t.copy(n).addScaledVector(Wn,a).addScaledVector(Xn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ri{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(e.matrixWorld),this.union(Oi)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hi),Bi.subVectors(this.max,hi),qn.subVectors(e.a,hi),Yn.subVectors(e.b,hi),Kn.subVectors(e.c,hi),xn.subVectors(Yn,qn),Mn.subVectors(Kn,Yn),Ln.subVectors(qn,Kn);let t=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-Ln.z,Ln.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,Ln.z,0,-Ln.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-Ln.y,Ln.x,0];return!kr(t,qn,Yn,Kn,Bi)||(t=[1,0,0,0,1,0,0,0,1],!kr(t,qn,Yn,Kn,Bi))?!1:(zi.crossVectors(xn,Mn),t=[zi.x,zi.y,zi.z],kr(t,qn,Yn,Kn,Bi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ln=[new B,new B,new B,new B,new B,new B,new B,new B],Wt=new B,Oi=new Ri,qn=new B,Yn=new B,Kn=new B,xn=new B,Mn=new B,Ln=new B,hi=new B,Bi=new B,zi=new B,Dn=new B;function kr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Dn.fromArray(i,s);const o=r.x*Math.abs(Dn.x)+r.y*Math.abs(Dn.y)+r.z*Math.abs(Dn.z),c=e.dot(Dn),l=t.dot(Dn),p=n.dot(Dn);if(Math.max(-Math.max(c,l,p),Math.min(c,l,p))>o)return!1}return!0}const ot=new B,Gi=new Oe;let Ac=0;class Un extends zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ac++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=Qt,this.version=0,this._normalizationScale=e!==void 0?Zs(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Gi.fromBufferAttribute(this,t),Gi.applyMatrix3(e),this.setXY(t,Gi.x,Gi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):cc(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):uc(e,this.array)}}class Ho extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vo extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}const bc=new Ri,fi=new B,Wr=new B;class _r{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fi.subVectors(e,this.center);const t=fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(fi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fi.copy(e.center).add(Wr)),this.expandByPoint(fi.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Rc=0;const Bt=new tt,Xr=new Rt,Zn=new B,Dt=new Ri,pi=new Ri,mt=new B;class Yt extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rc++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)?Vo:Ho)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Pe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Xr.lookAt(e),Xr.updateMatrix(),this.applyMatrix4(Xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dt.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,Dt.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,Dt.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(Dt.min),this.boundingBox.expandByPoint(Dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Dt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(mt.addVectors(Dt.min,pi.min),Dt.expandByPoint(mt),mt.addVectors(Dt.max,pi.max),Dt.expandByPoint(mt)):(Dt.expandByPoint(pi.min),Dt.expandByPoint(pi.max))}Dt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,p=o.count;l<p;l++)mt.fromBufferAttribute(o,l),c&&(Zn.fromBufferAttribute(e,l),mt.add(Zn)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Un(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new B,c[N]=new B;const p=new B,g=new B,u=new B,m=new Oe,x=new Oe,T=new Oe,h=new B,d=new B;function M(N,P,I){l[N]=l[P]=l[I]=1,p.fromBufferAttribute(n,N),g.fromBufferAttribute(n,P),u.fromBufferAttribute(n,I),m.fromBufferAttribute(s,N),x.fromBufferAttribute(s,P),T.fromBufferAttribute(s,I),g.sub(p),u.sub(p),x.sub(m),T.sub(m);const G=1/(x.x*T.y-T.x*x.y);isFinite(G)&&(h.copy(g).multiplyScalar(T.y).addScaledVector(u,-x.y).multiplyScalar(G),d.copy(u).multiplyScalar(x.x).addScaledVector(g,-T.x).multiplyScalar(G),o[N].add(h),o[P].add(h),o[I].add(h),c[N].add(d),c[P].add(d),c[I].add(d))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,P=A.length;N<P;++N){const I=A[N],G=I.start,q=I.count;for(let L=G,V=G+q;L<V;L+=3)M(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const E=new B,R=new B,b=new B,f=new B;function S(N){b.fromBufferAttribute(r,N),f.copy(b);const P=o[N];E.copy(P),E.sub(b.multiplyScalar(b.dot(P))).normalize(),R.crossVectors(f,P);const G=R.dot(c[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,G)}for(let N=0,P=n.count;N<P;++N)l[N]&&S(N);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const r=new B,s=new B,a=new B,o=new B,c=new B,l=new B,p=new B,g=new B;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),T=e.getX(u+1),h=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,T),a.fromBufferAttribute(t,h),p.subVectors(a,s),g.subVectors(r,s),p.cross(g),o.fromBufferAttribute(n,x),c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,h),o.add(p),c.add(p),l.add(p),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(h,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),p.subVectors(a,s),g.subVectors(r,s),p.cross(g),n.setXYZ(u+0,p.x,p.y,p.z),n.setXYZ(u+1,p.x,p.y,p.z),n.setXYZ(u+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(o,c){const l=o.array,p=o.itemSize,g=o.normalized,u=new l.constructor(c.length*p);let m=0,x=0;for(let T=0,h=c.length;T<h;T++){o.isInterleavedBufferAttribute?m=c[T]*o.data.stride+o.offset:m=c[T]*p;for(let d=0;d<p;d++)u[x++]=l[m++]}return new Un(u,p,g)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let p=0,g=l.length;p<g;p++){const u=l[p],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],p=[];for(let g=0,u=l.length;g<u;g++){const m=l[g];p.push(m.toJSON(e.data))}p.length>0&&(r[c]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const p=r[l];this.setAttribute(l,p.clone(t))}const s=e.morphAttributes;for(const l in s){const p=[],g=s[l];for(let u=0,m=g.length;u<m;u++)p.push(g[u].clone(t));this.morphAttributes[l]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,p=a.length;l<p;l++){const g=a[l];this.addGroup(g.start,g.count,g.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qr=new B,wc=new B,Cc=new Pe;class En{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=qr.subVectors(n,t).cross(wc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(qr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cc.getNormalMatrix(e),r=this.coplanarPoint(qr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Pc=0;class li extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pc++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=xi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Mi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cn=new B,Yr=new B,Hi=new B,Vi=new B;class ko{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Yr.copy(e).add(t).multiplyScalar(.5),Hi.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Yr);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Hi),o=Vi.dot(this.direction),c=-Vi.dot(Hi),l=Vi.lengthSq(),p=Math.abs(1-a*a);let g,u,m,x;if(p>0)if(g=a*c-o,u=a*o-c,x=s*p,g>=0)if(u>=-x)if(u<=x){const T=1/p;g*=T,u*=T,m=g*(g+a*u+2*o)+u*(a*g+u+2*c)+l}else u=s,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*c)+l;else u=-s,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*c)+l;else u<=-x?(g=Math.max(0,-(-a*s+o)),u=g>0?-s:Math.min(Math.max(-s,-c),s),m=-g*g+u*(u+2*c)+l):u<=x?(g=0,u=Math.min(Math.max(-s,-c),s),m=u*(u+2*c)+l):(g=Math.max(0,-(a*s+o)),u=g>0?s:Math.min(Math.max(-s,-c),s),m=-g*g+u*(u+2*c)+l);else u=a>0?-s:s,g=Math.max(0,-(a*u+o)),m=-g*g+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Yr).addScaledVector(Hi,u),m}intersectSphere(e,t){if(e.radius<0)return null;cn.subVectors(e.center,this.origin);const n=cn.dot(this.direction),r=cn.dot(cn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),p>=0?(s=(e.min.y-u.y)*p,a=(e.max.y-u.y)*p):(s=(e.max.y-u.y)*p,a=(e.min.y-u.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),g>=0?(o=(e.min.z-u.z)*g,c=(e.max.z-u.z)*g):(o=(e.max.z-u.z)*g,c=(e.min.z-u.z)*g),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,p=o.z,g=e.x-a.x,u=e.y-a.y,m=e.z-a.z,x=t.x-a.x,T=t.y-a.y,h=t.z-a.z,d=n.x-a.x,M=n.y-a.y,A=n.z-a.z,E=Math.abs(c),R=Math.abs(l),b=Math.abs(p);let f,S,N,P,I,G,q,L,V,J,z,te;if(E>=R&&E>=b?(N=c,G=g,V=x,te=d,c>=0?(f=l,S=p,P=u,I=m,q=T,L=h,J=M,z=A):(f=p,S=l,P=m,I=u,q=h,L=T,J=A,z=M)):R>=b?(N=l,G=u,V=T,te=M,l>=0?(f=p,S=c,P=m,I=g,q=h,L=x,J=A,z=d):(f=c,S=p,P=g,I=m,q=x,L=h,J=d,z=A)):(N=p,G=m,V=h,te=A,p>=0?(f=c,S=l,P=g,I=u,q=x,L=T,J=d,z=M):(f=l,S=c,P=u,I=g,q=T,L=x,J=M,z=d)),N===0)return null;const W=f/N,Q=S/N,j=1/N,Se=P-W*G,Le=I-Q*G,K=q-W*V,pe=L-Q*V,ve=J-W*te,Ae=z-Q*te,me=ve*pe-Ae*K,Ie=Se*Ae-Le*ve,st=K*Le-pe*Se;if(r){if(me<0||Ie<0||st<0)return null}else if((me<0||Ie<0||st<0)&&(me>0||Ie>0||st>0))return null;const Re=me+Ie+st;if(Re===0)return null;const Ye=j*(me*G+Ie*V+st*te);return(Re>0?Ye<0:Ye>0)?null:this.at(Ye/Re,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wo extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fa=new tt,In=new ko,ki=new _r,Oa=new B,Wi=new B,Xi=new B,qi=new B,Kr=new B,Yi=new B,Ba=new B,Ki=new B;class pn extends Rt{constructor(e=new Yt,t=new Wo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Yi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const p=o[c],g=s[c];p!==0&&(Kr.fromBufferAttribute(g,e),a?Yi.addScaledVector(Kr,p):Yi.addScaledVector(Kr.sub(t),p))}t.add(Yi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ki.copy(n.boundingSphere),ki.applyMatrix4(s),In.copy(e.ray).recast(e.near),!(ki.containsPoint(In.origin)===!1&&(In.intersectSphere(ki,Oa)===null||In.origin.distanceToSquared(Oa)>(e.far-e.near)**2))&&(Fa.copy(s).invert(),In.copy(e.ray).applyMatrix4(Fa),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,p=s.attributes.uv1,g=s.attributes.normal,u=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,T=u.length;x<T;x++){const h=u[x],d=a[h.materialIndex],M=Math.max(h.start,m.start),A=Math.min(o.count,Math.min(h.start+h.count,m.start+m.count));for(let E=M,R=A;E<R;E+=3){const b=o.getX(E),f=o.getX(E+1),S=o.getX(E+2);r=Zi(this,d,e,n,l,p,g,b,f,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),T=Math.min(o.count,m.start+m.count);for(let h=x,d=T;h<d;h+=3){const M=o.getX(h),A=o.getX(h+1),E=o.getX(h+2);r=Zi(this,a,e,n,l,p,g,M,A,E),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,T=u.length;x<T;x++){const h=u[x],d=a[h.materialIndex],M=Math.max(h.start,m.start),A=Math.min(c.count,Math.min(h.start+h.count,m.start+m.count));for(let E=M,R=A;E<R;E+=3){const b=E,f=E+1,S=E+2;r=Zi(this,d,e,n,l,p,g,b,f,S),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=h.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),T=Math.min(c.count,m.start+m.count);for(let h=x,d=T;h<d;h+=3){const M=h,A=h+1,E=h+2;r=Zi(this,a,e,n,l,p,g,M,A,E),r&&(r.faceIndex=Math.floor(h/3),t.push(r))}}}}function Lc(i,e,t,n,r,s,a,o){let c;if(e.side===Pt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Fn,o),c===null)return null;Ki.copy(o),Ki.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ki);return l<t.near||l>t.far?null:{distance:l,point:Ki.clone(),object:i}}function Zi(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Wi),i.getVertexPosition(c,Xi),i.getVertexPosition(l,qi);const p=Lc(i,e,t,n,Wi,Xi,qi,Ba);if(p){const g=new B;Xt.getBarycoord(Ba,Wi,Xi,qi,g),r&&(p.uv=Xt.getInterpolatedAttribute(r,o,c,l,g,new Oe)),s&&(p.uv1=Xt.getInterpolatedAttribute(s,o,c,l,g,new Oe)),a&&(p.normal=Xt.getInterpolatedAttribute(a,o,c,l,g,new B),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new B,materialIndex:0};Xt.getNormal(Wi,Xi,qi,u.normal),p.face=u,p.barycoord=g}return p}class Dc extends bt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=vt,p=vt,g,u){super(null,a,o,c,l,p,r,s,g,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nn=new _r,Ic=new Oe(.5,.5),$i=new B;class Ti{constructor(e=new En,t=new En,n=new En,r=new En,s=new En,a=new En){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qt,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],p=s[4],g=s[5],u=s[6],m=s[7],x=s[8],T=s[9],h=s[10],d=s[11],M=s[12],A=s[13],E=s[14],R=s[15];if(r[0].setComponents(l-a,m-p,d-x,R-M).normalize(),r[1].setComponents(l+a,m+p,d+x,R+M).normalize(),r[2].setComponents(l+o,m+g,d+T,R+A).normalize(),r[3].setComponents(l-o,m-g,d-T,R-A).normalize(),n)r[4].setComponents(c,u,h,E).normalize(),r[5].setComponents(l-c,m-u,d-h,R-E).normalize();else if(r[4].setComponents(l-c,m-u,d-h,R-E).normalize(),t===qt)r[5].setComponents(l+c,m+u,d+h,R+E).normalize();else if(t===yi)r[5].setComponents(c,u,h,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){Nn.center.set(0,0,0);const t=Ic.distanceTo(e.center);return Nn.radius=.7071067811865476+t,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($i.x=r.normal.x>0?e.max.x:e.min.x,$i.y=r.normal.y>0?e.max.y:e.min.y,$i.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($i)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const za=new tt;class Js{constructor(){this.coordinateSystem=qt,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,n=this._frustums;for(let r=0;r<t.length;r++){const s=t[r];za.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),n[r]===void 0&&(n[r]=new Ti),n[r].setFromProjectionMatrix(za,s.coordinateSystem,s.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Ti),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new Js().copy(this)}}class Xo extends li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ga=new tt,zs=new ko,Ji=new _r,Qi=new B;class Nc extends Rt{constructor(e=new Yt,t=new Xo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(r),Ji.radius+=s,e.ray.intersectsSphere(Ji)===!1)return;Ga.copy(r).invert(),zs.copy(e.ray).applyMatrix4(Ga);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,g=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let x=u,T=m;x<T;x++){const h=l.getX(x);Qi.fromBufferAttribute(g,h),Ha(Qi,h,c,r,e,t,this)}}else{const u=Math.max(0,a.start),m=Math.min(g.count,a.start+a.count);for(let x=u,T=m;x<T;x++)Qi.fromBufferAttribute(g,x),Ha(Qi,x,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ha(i,e,t,n,r,s,a){const o=zs.distanceSqToPoint(i);if(o<t){const c=new B;zs.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qo extends bt{constructor(e=[],t=ni,n,r,s,a,o,c,l,p){super(e,t,n,r,s,a,o,c,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ri extends bt{constructor(e,t,n=tn,r,s,a,o=vt,c=vt,l,p=bn,g=1){if(p!==bn&&p!==An)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:g};super(u,r,s,a,o,c,p,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $s(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Yo extends ri{constructor(e,t=tn,n=ni,r,s,a=vt,o=vt,c,l=bn){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,n,r,s,a,o,c,l),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ko extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wi extends Yt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],p=[],g=[];let u=0,m=0;x("z","y","x",-1,-1,n,t,e,a,s,0),x("z","y","x",1,-1,n,t,-e,a,s,1),x("x","z","y",1,1,e,n,t,r,a,2),x("x","z","y",1,-1,e,n,-t,r,a,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(p,3)),this.setAttribute("uv",new yt(g,2));function x(T,h,d,M,A,E,R,b,f,S,N){const P=E/f,I=R/S,G=E/2,q=R/2,L=b/2,V=f+1,J=S+1;let z=0,te=0;const W=new B;for(let Q=0;Q<J;Q++){const j=Q*I-q;for(let Se=0;Se<V;Se++){const Le=Se*P-G;W[T]=Le*M,W[h]=j*A,W[d]=L,l.push(W.x,W.y,W.z),W[T]=0,W[h]=0,W[d]=b>0?1:-1,p.push(W.x,W.y,W.z),g.push(Se/f),g.push(1-Q/S),z+=1}}for(let Q=0;Q<S;Q++)for(let j=0;j<f;j++){const Se=u+j+V*Q,Le=u+j+V*(Q+1),K=u+(j+1)+V*(Q+1),pe=u+(j+1)+V*Q;c.push(Se,Le,pe),c.push(Le,K,pe),te+=6}o.addGroup(m,te,N),m+=te,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qs extends Yt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),p(),this.setAttribute("position",new yt(s,3)),this.setAttribute("normal",new yt(s.slice(),3)),this.setAttribute("uv",new yt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const A=new B,E=new B,R=new B;for(let b=0;b<t.length;b+=3)m(t[b+0],A),m(t[b+1],E),m(t[b+2],R),c(A,E,R,M)}function c(M,A,E,R){const b=R+1,f=[];for(let S=0;S<=b;S++){f[S]=[];const N=M.clone().lerp(E,S/b),P=A.clone().lerp(E,S/b),I=b-S;for(let G=0;G<=I;G++)G===0&&S===b?f[S][G]=N:f[S][G]=N.clone().lerp(P,G/I)}for(let S=0;S<b;S++)for(let N=0;N<2*(b-S)-1;N++){const P=Math.floor(N/2);N%2===0?(u(f[S][P+1]),u(f[S+1][P]),u(f[S][P])):(u(f[S][P+1]),u(f[S+1][P+1]),u(f[S+1][P]))}}function l(M){const A=new B;for(let E=0;E<s.length;E+=3)A.x=s[E+0],A.y=s[E+1],A.z=s[E+2],A.normalize().multiplyScalar(M),s[E+0]=A.x,s[E+1]=A.y,s[E+2]=A.z}function p(){const M=new B;for(let A=0;A<s.length;A+=3){M.x=s[A+0],M.y=s[A+1],M.z=s[A+2];const E=h(M)/2/Math.PI+.5,R=d(M)/Math.PI+.5;a.push(E,1-R)}x(),g()}function g(){for(let M=0;M<a.length;M+=6){const A=a[M+0],E=a[M+2],R=a[M+4],b=Math.max(A,E,R),f=Math.min(A,E,R);b>.9&&f<.1&&(A<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),R<.2&&(a[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function m(M,A){const E=M*3;A.x=e[E+0],A.y=e[E+1],A.z=e[E+2]}function x(){const M=new B,A=new B,E=new B,R=new B,b=new Oe,f=new Oe,S=new Oe;for(let N=0,P=0;N<s.length;N+=9,P+=6){M.set(s[N+0],s[N+1],s[N+2]),A.set(s[N+3],s[N+4],s[N+5]),E.set(s[N+6],s[N+7],s[N+8]),b.set(a[P+0],a[P+1]),f.set(a[P+2],a[P+3]),S.set(a[P+4],a[P+5]),R.copy(M).add(A).add(E).divideScalar(3);const I=h(R);T(b,P+0,M,I),T(f,P+2,A,I),T(S,P+4,E,I)}}function T(M,A,E,R){R<0&&M.x===1&&(a[A]=M.x-1),E.x===0&&E.z===0&&(a[A]=R/2/Math.PI+.5)}function h(M){return Math.atan2(M.z,-M.x)}function d(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.vertices,e.indices,e.radius,e.detail)}}class js extends Qs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new js(e.radius,e.detail)}}class vr extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,p=c+1,g=e/o,u=t/c,m=[],x=[],T=[],h=[];for(let d=0;d<p;d++){const M=d*u-a;for(let A=0;A<l;A++){const E=A*g-s;x.push(E,-M,0),T.push(0,0,1),h.push(A/o),h.push(1-d/c)}}for(let d=0;d<c;d++)for(let M=0;M<o;M++){const A=M+l*d,E=M+l*(d+1),R=M+1+l*(d+1),b=M+1+l*d;m.push(A,E,b),m.push(E,R,b)}this.setIndex(m),this.setAttribute("position",new yt(x,3)),this.setAttribute("normal",new yt(T,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class ea extends Yt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);const c=[],l=[],p=[],g=[],u=new B,m=new B,x=new B;for(let T=0;T<=n;T++){const h=a+T/n*o;for(let d=0;d<=r;d++){const M=d/r*s;m.x=(e+t*Math.cos(h))*Math.cos(M),m.y=(e+t*Math.cos(h))*Math.sin(M),m.z=t*Math.sin(h),l.push(m.x,m.y,m.z),u.x=e*Math.cos(M),u.y=e*Math.sin(M),x.subVectors(m,u).normalize(),p.push(x.x,x.y,x.z),g.push(d/r),g.push(T/n)}}for(let T=1;T<=n;T++)for(let h=1;h<=r;h++){const d=(r+1)*T+h-1,M=(r+1)*(T-1)+h-1,A=(r+1)*(T-1)+h,E=(r+1)*T+h;c.push(d,M,E),c.push(M,A,E)}this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(p,3)),this.setAttribute("uv",new yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ea(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Va(r))r.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Va(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=si(i[t]);for(const r in n)e[r]=n[r]}return e}function Va(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Uc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zo(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const Fc={clone:si,merge:At};var Oc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oc,this.fragmentShader=Bc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=si(e.uniforms),this.uniformsGroups=Uc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Be().setHex(r.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(r.value);break;case"v3":this.uniforms[n].value=new B().fromArray(r.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(r.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class zc extends Bn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gc extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Os,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hc extends Gc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ei('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ei('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Vc extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kc extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class $o extends Rt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Zr=new tt,ka=new B,Wa=new B;class Wc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=It,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(ka),Wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Zr,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===yi||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ji=new B,er=new oi,Zt=new B;class Jo extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ji,er,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ji,er,Zt.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(ji,er,Zt),Zt.x===1&&Zt.y===1&&Zt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ji,er,Zt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Sn=new B,Xa=new Oe,qa=new Oe;class Gt extends Jo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(Rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Sn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z),Sn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sn.x,Sn.y).multiplyScalar(-e/Sn.z)}getViewSize(e,t){return this.getViewBounds(e,Xa,qa),t.subVectors(qa,Xa)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Xc extends Wc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0}}class qc extends $o{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Yc extends Jo{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=p*this.view.offsetY,c=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kc extends $o{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const $n=-90,Jn=1;class Gs extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt($n,Jn,e,t);r.layers=this.layers,this.add(r);const s=new Gt($n,Jn,e,t);s.layers=this.layers,this.add(s);const a=new Gt($n,Jn,e,t);a.layers=this.layers,this.add(a);const o=new Gt($n,Jn,e,t);o.layers=this.layers,this.add(o);const c=new Gt($n,Jn,e,t);c.layers=this.layers,this.add(c);const l=new Gt($n,Jn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===qt)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,p]=this.children,g=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;e.isWebGLRenderer===!0?h=e.state.buffers.depth.getReversed():h=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=T,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,u,m),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Zc extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Ya(i,e,t,n){const r=$c(n);switch(t){case Lo:return i*e;case Io:return i*e/r.components*r.byteLength;case qs:return i*e/r.components*r.byteLength;case On:return i*e*2/r.components*r.byteLength;case Ys:return i*e*2/r.components*r.byteLength;case Do:return i*e*3/r.components*r.byteLength;case jt:return i*e*4/r.components*r.byteLength;case Ks:return i*e*4/r.components*r.byteLength;case rr:case sr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ar:case or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ls:case us:return Math.max(i,16)*Math.max(e,8)/4;case os:case cs:return Math.max(i,8)*Math.max(e,8)/2;case ds:case hs:case ps:case ms:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fs:case cr:case gs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _s:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ms:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ss:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Es:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ys:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ts:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case As:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case bs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ws:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Cs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ps:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ls:case Ds:case Is:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ns:case Us:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ur:case Fs:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $c(i){switch(i){case It:case Ro:return{byteLength:1,components:1};case Ei:case wo:case nn:return{byteLength:2,components:1};case Ws:case Xs:return{byteLength:2,components:4};case tn:case ks:case Qt:return{byteLength:4,components:1};case Co:case Po:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vs}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vs);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qo(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Jc(i){const e=new WeakMap;function t(o,c){const l=o.array,p=o.usage,g=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,p),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,c,l){const p=c.array,g=c.updateRanges;if(i.bindBuffer(l,o),g.length===0)i.bufferSubData(l,0,p);else{g.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<g.length;m++){const x=g[u],T=g[m];T.start<=x.start+x.count+1?x.count=Math.max(x.count,T.start+T.count-x.start):(++u,g[u]=T)}g.length=u+1;for(let m=0,x=g.length;m<x;m++){const T=g[m];i.bufferSubData(l,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Qc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ru=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,au=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,du=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_u=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Eu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Au=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ru="gl_FragColor = linearToOutputTexel( gl_FragColor );",wu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Pu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Lu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Iu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ku=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$u=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ju=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ed=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,od=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ld=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ud=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dd=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_d=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ed=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Td=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ld=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Id=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ud=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$d=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eh=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ih=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ah=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ch=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ph=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_h=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Th=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ah=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ch=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ph=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:Qc,alphahash_pars_fragment:jc,alphamap_fragment:eu,alphamap_pars_fragment:tu,alphatest_fragment:nu,alphatest_pars_fragment:iu,aomap_fragment:ru,aomap_pars_fragment:su,batching_pars_vertex:au,batching_vertex:ou,begin_vertex:lu,beginnormal_vertex:cu,bsdfs:uu,iridescence_fragment:du,bumpmap_pars_fragment:hu,clipping_planes_fragment:fu,clipping_planes_pars_fragment:pu,clipping_planes_pars_vertex:mu,clipping_planes_vertex:gu,color_fragment:_u,color_pars_fragment:vu,color_pars_vertex:xu,color_vertex:Mu,common:Su,defaultnormal_vertex:Eu,displacementmap_pars_vertex:yu,displacementmap_vertex:Tu,emissivemap_fragment:Au,emissivemap_pars_fragment:bu,colorspace_fragment:Ru,colorspace_pars_fragment:wu,envmap_fragment:Cu,envmap_common_pars_fragment:Pu,envmap_pars_fragment:Lu,envmap_pars_vertex:Du,envmap_physical_pars_fragment:ku,envmap_vertex:Iu,fog_vertex:Nu,fog_pars_vertex:Uu,fog_fragment:Fu,fog_pars_fragment:Ou,gradientmap_pars_fragment:Bu,lightmap_pars_fragment:zu,lights_lambert_fragment:Gu,lights_lambert_pars_fragment:Hu,lights_pars_begin:Vu,lights_toon_fragment:Wu,lights_toon_pars_fragment:Xu,lights_phong_fragment:qu,lights_phong_pars_fragment:Yu,lights_physical_fragment:Ku,lights_physical_pars_fragment:Zu,lights_fragment_begin:$u,lights_fragment_maps:Ju,lights_fragment_end:Qu,lightprobes_pars_fragment:ju,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:rd,map_pars_fragment:sd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:ld,metalnessmap_pars_fragment:cd,morphinstance_vertex:ud,morphcolor_vertex:dd,morphnormal_vertex:hd,morphtarget_pars_vertex:fd,morphtarget_vertex:pd,normal_fragment_begin:md,normal_fragment_maps:gd,normal_pars_fragment:_d,normal_pars_vertex:vd,normal_vertex:xd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:Ed,clearcoat_pars_fragment:yd,iridescence_pars_fragment:Td,opaque_fragment:Ad,packing:bd,premultiplied_alpha_fragment:Rd,project_vertex:wd,dithering_fragment:Cd,dithering_pars_fragment:Pd,roughnessmap_fragment:Ld,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:Id,shadowmap_pars_vertex:Nd,shadowmap_vertex:Ud,shadowmask_pars_fragment:Fd,skinbase_vertex:Od,skinning_pars_vertex:Bd,skinning_vertex:zd,skinnormal_vertex:Gd,specularmap_fragment:Hd,specularmap_pars_fragment:Vd,tonemapping_fragment:kd,tonemapping_pars_fragment:Wd,transmission_fragment:Xd,transmission_pars_fragment:qd,uv_pars_fragment:Yd,uv_pars_vertex:Kd,uv_vertex:Zd,worldpos_vertex:$d,background_vert:Jd,background_frag:Qd,backgroundCube_vert:jd,backgroundCube_frag:eh,cube_vert:th,cube_frag:nh,depth_vert:ih,depth_frag:rh,distance_vert:sh,distance_frag:ah,equirect_vert:oh,equirect_frag:lh,linedashed_vert:ch,linedashed_frag:uh,meshbasic_vert:dh,meshbasic_frag:hh,meshlambert_vert:fh,meshlambert_frag:ph,meshmatcap_vert:mh,meshmatcap_frag:gh,meshnormal_vert:_h,meshnormal_frag:vh,meshphong_vert:xh,meshphong_frag:Mh,meshphysical_vert:Sh,meshphysical_frag:Eh,meshtoon_vert:yh,meshtoon_frag:Th,points_vert:Ah,points_frag:bh,shadow_vert:Rh,shadow_frag:wh,sprite_vert:Ch,sprite_frag:Ph},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},Jt={basic:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:At([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:At([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:At([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:At([fe.points,fe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:At([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:At([fe.common,fe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:At([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:At([fe.sprite,fe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distance:{uniforms:At([fe.common,fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distance_vert,fragmentShader:Fe.distance_frag},shadow:{uniforms:At([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Jt.physical={uniforms:At([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const tr={r:0,b:0,g:0},Lh=new tt,jo=new Pe;jo.set(-1,0,0,0,1,0,0,0,1);function Dh(i,e,t,n,r,s){const a=new Be(0);let o=r===!0?0:1,c,l,p=null,g=0,u=null;function m(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const E=M.backgroundBlurriness>0;A=e.get(A,E)}return A}function x(M){let A=!1;const E=m(M);E===null?h(a,o):E&&E.isColor&&(h(E,1),A=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?t.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(M,A){const E=m(A);E&&E.isCubeTexture?(l===void 0&&(l=new pn(new wi(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:si(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,b,f){this.matrixWorld.copyPosition(f.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=E,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Lh.makeRotationFromEuler(A.backgroundRotation)).transpose(),E.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(jo),l.material.toneMapped=ke.getTransfer(E.colorSpace)!==Ze,(p!==E||g!==E.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,p=E,g=E.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new pn(new vr(2,2),new Bn({name:"BackgroundMaterial",uniforms:si(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=ke.getTransfer(E.colorSpace)!==Ze,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||g!==E.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,p=E,g=E.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function h(M,A){M.getRGB(tr,Zo(i)),t.buffers.color.setClear(tr.r,tr.g,tr.b,A,s)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,h(a,o)},render:x,addToRenderList:T,dispose:d}}function Ih(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,a=!1;function o(I,G,q,L,V){let J=!1;const z=g(I,L,q,G);s!==z&&(s=z,l(s.object)),J=m(I,L,q,V),J&&x(I,L,q,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,E(I,G,q,L),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(I){return i.bindVertexArray(I)}function p(I){return i.deleteVertexArray(I)}function g(I,G,q,L){const V=L.wireframe===!0;let J=n[G.id];J===void 0&&(J={},n[G.id]=J);const z=I.isInstancedMesh===!0?I.id:0;let te=J[z];te===void 0&&(te={},J[z]=te);let W=te[q.id];W===void 0&&(W={},te[q.id]=W);let Q=W[V];return Q===void 0&&(Q=u(c()),W[V]=Q),Q}function u(I){const G=[],q=[],L=[];for(let V=0;V<t;V++)G[V]=0,q[V]=0,L[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:L,object:I,attributes:{},index:null}}function m(I,G,q,L){const V=s.attributes,J=G.attributes;let z=0;const te=q.getAttributes();for(const W in te)if(te[W].location>=0){const j=V[W];let Se=J[W];if(Se===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(Se=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(Se=I.instanceColor)),j===void 0||j.attribute!==Se||Se&&j.data!==Se.data)return!0;z++}return s.attributesNum!==z||s.index!==L}function x(I,G,q,L){const V={},J=G.attributes;let z=0;const te=q.getAttributes();for(const W in te)if(te[W].location>=0){let j=J[W];j===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(j=I.instanceColor));const Se={};Se.attribute=j,j&&j.data&&(Se.data=j.data),V[W]=Se,z++}s.attributes=V,s.attributesNum=z,s.index=L}function T(){const I=s.newAttributes;for(let G=0,q=I.length;G<q;G++)I[G]=0}function h(I){d(I,0)}function d(I,G){const q=s.newAttributes,L=s.enabledAttributes,V=s.attributeDivisors;q[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),V[I]!==G&&(i.vertexAttribDivisor(I,G),V[I]=G)}function M(){const I=s.newAttributes,G=s.enabledAttributes;for(let q=0,L=G.length;q<L;q++)G[q]!==I[q]&&(i.disableVertexAttribArray(q),G[q]=0)}function A(I,G,q,L,V,J,z){z===!0?i.vertexAttribIPointer(I,G,q,V,J):i.vertexAttribPointer(I,G,q,L,V,J)}function E(I,G,q,L){T();const V=L.attributes,J=q.getAttributes(),z=G.defaultAttributeValues;for(const te in J){const W=J[te];if(W.location>=0){let Q=V[te];if(Q===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),Q!==void 0){const j=Q.normalized,Se=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;const K=Le.buffer,pe=Le.type,ve=Le.bytesPerElement,Ae=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===ks;if(Q.isInterleavedBufferAttribute){const me=Q.data,Ie=me.isInterleavedBuffer===!0?me.stride:me.itemSize,st=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Re=0;Re<W.locationSize;Re++)d(W.location+Re,me.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Re=0;Re<W.locationSize;Re++)h(W.location+Re);i.bindBuffer(i.ARRAY_BUFFER,K);for(let Re=0;Re<W.locationSize;Re++)A(W.location+Re,Se/W.locationSize,pe,j,Ie*ve,(st+Se/W.locationSize*Re)*ve,Ae)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)d(W.location+me,Q.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<W.locationSize;me++)h(W.location+me);i.bindBuffer(i.ARRAY_BUFFER,K);for(let me=0;me<W.locationSize;me++)A(W.location+me,Se/W.locationSize,pe,j,Se*ve,Se/W.locationSize*me*ve,Ae)}}else if(z!==void 0){const j=z[te];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(W.location,j);break;case 3:i.vertexAttrib3fv(W.location,j);break;case 4:i.vertexAttrib4fv(W.location,j);break;default:i.vertexAttrib1fv(W.location,j)}}}}M()}function R(){N();for(const I in n){const G=n[I];for(const q in G){const L=G[q];for(const V in L){const J=L[V];for(const z in J)p(J[z].object),delete J[z];delete L[V]}}delete n[I]}}function b(I){if(n[I.id]===void 0)return;const G=n[I.id];for(const q in G){const L=G[q];for(const V in L){const J=L[V];for(const z in J)p(J[z].object),delete J[z];delete L[V]}}delete n[I.id]}function f(I){for(const G in n){const q=n[G];for(const L in q){const V=q[L];if(V[I.id]===void 0)continue;const J=V[I.id];for(const z in J)p(J[z].object),delete J[z];delete V[I.id]}}}function S(I){for(const G in n){const q=n[G],L=I.isInstancedMesh===!0?I.id:0,V=q[L];if(V!==void 0){for(const J in V){const z=V[J];for(const te in z)p(z[te].object),delete z[te];delete V[J]}delete q[L],Object.keys(q).length===0&&delete n[G]}}}function N(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfObject:S,releaseStatesOfProgram:f,initAttributes:T,enableAttribute:h,disableUnusedAttributes:M}}function Nh(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,p){p!==0&&(i.drawArraysInstanced(n,c,l,p),t.update(l,n,p))}function o(c,l,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,p);let u=0;for(let m=0;m<p;m++)u+=l[m];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Uh(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const f=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(f.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(f){return!(f!==jt&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(f){const S=f===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(f!==It&&f!==Qt&&!S&&n.convert(f)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(f){if(f==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";f="mediump"}return f==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const p=c(l);p!==l&&(we("WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&g===!1;t.reversedDepthBuffer===!0&&g===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&g===!0&&we("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),h=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:g,maxTextures:m,maxVertexTextures:x,maxTextureSize:T,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:E,maxSamples:R,samples:b}}function Fh(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new En,o=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(g,u){const m=g.length!==0||u||n!==0||r;return r=u,n=g.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,u){t=p(g,u,0)},this.setState=function(g,u,m){const x=g.clippingPlanes,T=g.clipIntersection,h=g.clipShadows,d=i.get(g);if(!r||x===null||x.length===0||s&&!h)s?p(null):l();else{const M=s?0:n,A=M*4;let E=d.clippingState||null;c.value=E,E=p(x,u,A,m);for(let R=0;R!==A;++R)E[R]=t[R];d.clippingState=E,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(g,u,m,x){const T=g!==null?g.length:0;let h=null;if(T!==0){if(h=c.value,x!==!0||h===null){const d=m+T*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(h===null||h.length<d)&&(h=new Float32Array(d));for(let A=0,E=m;A!==T;++A,E+=4)a.copy(g[A]).applyMatrix4(M,o),a.normal.toArray(h,E),h[E+3]=a.constant}c.value=h,c.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,h}}class ta extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wi(5,5,5),s=new Bn({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:jn});s.uniforms.tEquirect.value=t;const a=new pn(r,s),o=t.minFilter;return t.minFilter===Tn&&(t.minFilter=Ct),new Gs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ka=256,Oh=3,Bh=20,el=256,tl=16,zh=3,Gh=new B,Hh=new Be;class pr{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Gs(1,10,null),this._boxMesh=new pn(new wi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Gh}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),p=this._getSourceTarget(!0);t>0&&(p.texture.mipmapsAutoUpdate=!1);const g=c.autoClear,u=c.autoClearColor,m=c.autoClearDepth,x=c.autoClearStencil,T=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,T===null&&(e.background=c.getClearColor(Hh));const h=new Gs(n,r,p);return h.position.copy(o),h.update(c,e),c.autoClear=g,c.autoClearColor=u,c.autoClearDepth=m,c.autoClearStencil=x,e.background=T,t>0&&(p.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$a(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ka,lc(e))}_fromTexture(e,t){e.mapping===ni||e.mapping===Si?this._setSize(e.image.length===0?Ka:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){const e=this._cubeSize,t=Za(e,!1,!1),n=Math.log2(e)-Oh;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Za(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){const r=this._boxMesh,s=this._cubeCamera;r.material=n,s.renderTarget=e,s.activeMipmapLevel=t;const a=e.width>>t;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ni||e.mapping===Si?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ja()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$a()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Vh(),this._integrationMaterial=kh());const t=this._cubeSize,n=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(t/tl);for(let a=0;a<=n;a++){const o=pr.lodToRoughness(a,n);if(a>n-zh)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(t)+.5*Math.log2(6/(el*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Wh());const n=this._blurMaterial,r=n.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(s,0,n)}}function Za(i,e,t){return new ta(i,{minFilter:Tn,generateMipmaps:e,type:nn,colorSpace:dr,depthBuffer:t})}function Ci(i,e,t){return new Bn({name:i,uniforms:e,vertexShader:Fe.cube_vert,fragmentShader:t,side:Pt,blending:jn,depthTest:!1,depthWrite:!1})}function Vh(){return Ci("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${el}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function kh(){return Ci("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:tl}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Wh(){return Ci("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Bh}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function $a(){return Ci("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ja(){return Ci("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xh(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,m=!1){return u==null?null:m?a(u):s(u)}function s(u){if(u&&u.isTexture){const m=u.mapping;if(m===yr||m===Tr)if(e.has(u)){const x=e.get(u).texture;return o(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const T=new ta(x.height);return T.fromEquirectangularTexture(i,u),e.set(u,T),u.addEventListener("dispose",l),o(T.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){const m=u.mapping,x=m===yr||m===Tr,T=m===ni||m===Si;if(x||T){let h=t.get(u);const d=h!==void 0?h.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new pr(i)),h=x?n.fromEquirectangular(u,h):n.fromCubemap(u,h),h.texture.pmremVersion=u.pmremVersion,t.set(u,h),h.texture;if(h!==void 0)return h.texture;{const M=u.image;return x&&M&&M.height>0||T&&M&&c(M)?(n===null&&(n=new pr(i)),h=x?n.fromEquirectangular(u):n.fromCubemap(u),h.texture.pmremVersion=u.pmremVersion,t.set(u,h),u.addEventListener("dispose",p),h.texture):null}}}return u}function o(u,m){return m===yr?u.mapping=ni:m===Tr&&(u.mapping=Si),u}function c(u){let m=0;const x=6;for(let T=0;T<x;T++)u[T]!==void 0&&m++;return m===x}function l(u){const m=u.target;m.removeEventListener("dispose",l);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function p(u){const m=u.target;m.removeEventListener("dispose",p);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function qh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ei("WebGLRenderer: "+n+" extension not supported."),r}}}function Yh(i,e,t,n){const r={},s=new WeakMap,a=new FinalizationRegistry(x=>delete r[x]);function o(x){c(x.target)}function c(x){x.index!==null&&e.remove(x.index);for(const h in x.attributes)e.remove(x.attributes[h]);x.removeEventListener("dispose",o),delete r[x.id],a.unregister(x);const T=s.get(x);T&&(e.remove(T),s.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function l(x,T){return r[T.id]!==void 0||(T.addEventListener("dispose",o),r[T.id]=new WeakRef(T),a.register(T,T.id,T),t.memory.geometries++),T}function p(x){const T=x.attributes;for(const h in T)e.update(T[h],i.ARRAY_BUFFER)}function g(x){const T=x.index,h=x.attributes.position;let d=0;if(h===void 0)return;const M=T!==null?T.array.length:h.array.length/3-1,A=h.count>=65535?Vo:Ho,E=new A(Math.ceil(M/3)*6,1),R=E.array;if(T!==null){const f=T.array;d=T.version;for(let S=0,N=0;S<M;S+=3){const P=f[S+0],I=f[S+1],G=f[S+2];R[N++]=P,R[N++]=I,R[N++]=I,R[N++]=G,R[N++]=G,R[N++]=P}}else{d=h.version;for(let f=0,S=0;f<M;f+=3){const N=f+0,P=f+1,I=f+2;R[S++]=N,R[S++]=P,R[S++]=P,R[S++]=I,R[S++]=I,R[S++]=N}}E.version=d;const b=s.get(x);b&&e.remove(b),s.set(x,E)}function u(x){const T=s.get(x);if(T){const h=x.index;h!==null&&T.version<h.version&&g(x)}else g(x);return s.get(x)}function m(){for(const x in r){const T=r[x].deref();T!==void 0&&c(T)}}return{get:l,update:p,getWireframeAttribute:u,dispose:m}}function Kh(i,e,t){let n;function r(g){n=g}let s,a;function o(g){s=g.type,a=g.bytesPerElement}function c(g,u){i.drawElements(n,u,s,g*a),t.update(u,n,1)}function l(g,u,m){m!==0&&(i.drawElementsInstanced(n,u,s,g*a,m),t.update(u,n,m))}function p(g,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,g,0,m);let T=0;for(let h=0;h<m;h++)T+=u[h];t.update(T,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=p}function Zh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function $h(i,e,t){const n=new WeakMap,r=new rt;function s(a,o,c){const l=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=p!==void 0?p.length:0;let u=n.get(o);if(u===void 0||u.count!==g){let P=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",P)};var m=P;u!==void 0&&u.texture.dispose();const x=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,h=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),T===!0&&(E=2),h===!0&&(E=3);let R=o.attributes.position.count*E,b=1;R>e.maxTextureSize&&(b=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const f=new Float32Array(R*b*4*g),S=new Bo(f,R,b,g);S.type=Qt,S.needsUpdate=!0;const N=E*4;for(let I=0;I<g;I++){const G=d[I],q=M[I],L=A[I],V=R*b*4*I;for(let J=0;J<G.count;J++){const z=J*N;x===!0&&(r.fromBufferAttribute(G,J),f[V+z+0]=r.x,f[V+z+1]=r.y,f[V+z+2]=r.z,f[V+z+3]=0),T===!0&&(r.fromBufferAttribute(q,J),f[V+z+4]=r.x,f[V+z+5]=r.y,f[V+z+6]=r.z,f[V+z+7]=0),h===!0&&(r.fromBufferAttribute(L,J),f[V+z+8]=r.x,f[V+z+9]=r.y,f[V+z+10]=r.z,f[V+z+11]=L.itemSize===4?r.w:1)}}u={count:g,texture:S,size:new Oe(R,b)},n.set(o,u),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let x=0;for(let h=0;h<l.length;h++)x+=l[h];const T=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(i,"morphTargetBaseInfluence",T),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function Jh(i,e,t,n,r){let s=new WeakMap;function a(l){const p=r.render.frame,g=l.geometry,u=e.get(l,g);if(s.get(u)!==p&&(e.update(u),s.set(u,p)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==p&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,p))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return u}function o(){s=new WeakMap}function c(l){const p=l.target;p.removeEventListener("dispose",c),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:o}}const Qh={[xo]:"LINEAR_TONE_MAPPING",[Mo]:"REINHARD_TONE_MAPPING",[So]:"CINEON_TONE_MAPPING",[Eo]:"ACES_FILMIC_TONE_MAPPING",[To]:"AGX_TONE_MAPPING",[Ao]:"NEUTRAL_TONE_MAPPING",[yo]:"CUSTOM_TONE_MAPPING"};function jh(i,e,t,n,r,s){const a=new en(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const p=new Yt;p.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new yt([0,2,0,0,2,0],2));const g=new zc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new pn(p,g),m=new Yc(-1,1,1,-1,0,1);let x=null,T=null,h=!1,d,M=null,A=[],E=!1;this.setSize=function(R,b){a.setSize(R,b),o!==null&&o.setSize(R,b),c!==null&&c.setSize(R,b);for(let f=0;f<A.length;f++){const S=A[f];S.setSize&&S.setSize(R,b)}},this.setEffects=function(R){A=R,E=A.length>0&&A[0].isRenderPass===!0;const b=a.width,f=a.height;A.length>0&&o===null&&(o=new en(b,f,{type:nn,depthBuffer:!1,stencilBuffer:!1}),c=new en(b,f,{type:nn,depthBuffer:!1,stencilBuffer:!1}));const S=r===!0&&A.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new ri(b,f),s===!0&&(l.format=An,l.type=ii)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<A.length;N++){const P=A[N];P.setSize&&P.setSize(b,f),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(R,b){if(h||R.toneMapping===hn&&A.length===0)return!1;if(M=b,b!==null){const f=b.width,S=b.height;(a.width!==f||a.height!==S)&&this.setSize(f,S)}return E===!1&&R.setRenderTarget(a),d=R.toneMapping,R.toneMapping=hn,!0},this.hasRenderPass=function(){return E},this.end=function(R,b){R.toneMapping=d,h=!0;let f=a,S=o;for(let N=0;N<A.length;N++){const P=A[N];P.enabled!==!1&&(P.render(R,S,f,b),P.needsSwap!==!1&&(f=S,S=S===o?c:o))}if(x!==R.outputColorSpace||T!==R.toneMapping){x=R.outputColorSpace,T=R.toneMapping,g.defines={},ke.getTransfer(x)===Ze&&(g.defines.SRGB_TRANSFER="");const N=Qh[T];N&&(g.defines[N]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=f.texture,R.setRenderTarget(M),R.render(u,m),M=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),p.dispose(),g.dispose()}}const nl=new bt,il=new ri(1,1),rl=new Yo(1),sl=new Bo,al=new gc,ol=new qo,Qa=[],ja=[],eo=new Float32Array(16),to=new Float32Array(9),no=new Float32Array(4);function ci(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Qa[r];if(s===void 0&&(s=new Float32Array(r),Qa[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function xr(i,e){let t=ja[e];t===void 0&&(t=new Int32Array(e),ja[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),dt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),dt(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),dt(t,e)}}function sf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;no.set(n),i.uniformMatrix2fv(this.addr,!1,no),dt(t,n)}}function af(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;to.set(n),i.uniformMatrix3fv(this.addr,!1,to),dt(t,n)}}function of(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),dt(t,e)}else{if(ut(t,n))return;eo.set(n),i.uniformMatrix4fv(this.addr,!1,eo),dt(t,n)}}function lf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),dt(t,e)}}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),dt(t,e)}}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),dt(t,e)}}function hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),dt(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),dt(t,e)}}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),dt(t,e)}}function Mr(i){return i.version===0&&(i.compareFunction=Fo,i.needsUpdate=!0),i}function gf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?s=Mr(il):s=nl,t.setTexture2D(e||s,r)}function _f(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||al,r)}function vf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_CUBE_SHADOW?s=Mr(rl):s=ol,t.setTextureCube(e||s,r)}function xf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||sl,r)}function Mf(i){switch(i){case 5126:return ef;case 35664:return tf;case 35665:return nf;case 35666:return rf;case 35674:return sf;case 35675:return af;case 35676:return of;case 5124:case 35670:return lf;case 35667:case 35671:return cf;case 35668:case 35672:return uf;case 35669:case 35673:return df;case 5125:return hf;case 36294:return ff;case 36295:return pf;case 36296:return mf;case 35678:case 36198:case 36298:case 36306:case 35682:return gf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return vf;case 36289:case 36303:case 36311:case 36292:return xf}}function Sf(i,e){i.uniform1fv(this.addr,e)}function Ef(i,e){const t=ci(e,this.size,2);i.uniform2fv(this.addr,t)}function yf(i,e){const t=ci(e,this.size,3);i.uniform3fv(this.addr,t)}function Tf(i,e){const t=ci(e,this.size,4);i.uniform4fv(this.addr,t)}function Af(i,e){const t=ci(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bf(i,e){const t=ci(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rf(i,e){const t=ci(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wf(i,e){i.uniform1iv(this.addr,e)}function Cf(i,e){i.uniform2iv(this.addr,e)}function Pf(i,e){i.uniform3iv(this.addr,e)}function Lf(i,e){i.uniform4iv(this.addr,e)}function Df(i,e){i.uniform1uiv(this.addr,e)}function If(i,e){i.uniform2uiv(this.addr,e)}function Nf(i,e){i.uniform3uiv(this.addr,e)}function Uf(i,e){i.uniform4uiv(this.addr,e)}function Ff(i,e,t){const n=this.cache,r=e.length,s=xr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Mr(il):a=nl;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Of(i,e,t){const n=this.cache,r=e.length,s=xr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||al,s[a])}function Bf(i,e,t){const n=this.cache,r=e.length,s=xr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Mr(rl):a=ol;for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a,s[o])}function zf(i,e,t){const n=this.cache,r=e.length,s=xr(t,r);ut(n,s)||(i.uniform1iv(this.addr,s),dt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sl,s[a])}function Gf(i){switch(i){case 5126:return Sf;case 35664:return Ef;case 35665:return yf;case 35666:return Tf;case 35674:return Af;case 35675:return bf;case 35676:return Rf;case 5124:case 35670:return wf;case 35667:case 35671:return Cf;case 35668:case 35672:return Pf;case 35669:case 35673:return Lf;case 5125:return Df;case 36294:return If;case 36295:return Nf;case 36296:return Uf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Bf;case 36289:case 36303:case 36311:case 36292:return zf}}class Hf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mf(t.type)}}class Vf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gf(t.type)}}class kf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function io(i,e){i.seq.push(e),i.map[e.id]=e}function Wf(i,e,t){const n=i.name,r=n.length;for($r.lastIndex=0;;){const s=$r.exec(n),a=$r.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){io(t,l===void 0?new Hf(o,i,e):new Vf(o,i,e));break}else{let g=t.map[o];g===void 0&&(g=new kf(o),io(t,g)),t=g}}}class lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Wf(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ro(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Xf=37297;let qf=0;function Yf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const so=new Pe;function Kf(i){ke._getMatrix(so,ke.workingColorSpace,i);const e=`mat3( ${so.elements.map(t=>t.toFixed(4))} )`;switch(ke.getTransfer(i)){case hr:return[e,"LinearTransferOETF"];case Ze:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ao(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Yf(i.getShaderSource(e),o)}else return s}function Zf(i,e){const t=Kf(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const $f={[xo]:"Linear",[Mo]:"Reinhard",[So]:"Cineon",[Eo]:"ACESFilmic",[To]:"AgX",[Ao]:"Neutral",[yo]:"Custom"};function Jf(i,e){const t=$f[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nr=new B;function Qf(){ke.getLuminanceCoefficients(nr);const i=nr.x.toFixed(4),e=nr.y.toFixed(4),t=nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vi).join(`
`)}function ep(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function vi(i){return i!==""}function oo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function lo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hs(i){return i.replace(np,ip)}function ip(i,e){const t=Fe[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Hs(t)}const rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function co(i){return i.replace(rp,sp)}function sp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ap={[ir]:"SHADOWMAP_TYPE_PCF",[gi]:"SHADOWMAP_TYPE_VSM"};function op(i){return ap[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lp={[Si]:"ENVMAP_MODE_REFRACTION"};function cp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lp[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const up={[vo]:"ENVMAP_BLENDING_MULTIPLY",[Xl]:"ENVMAP_BLENDING_MIX",[ql]:"ENVMAP_BLENDING_ADD"};function dp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":up[i.combine]||"ENVMAP_BLENDING_NONE"}function hp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=op(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",p=cp(t),g=dp(t),u=jf(t),m=ep(s),x=r.createProgram();let T,h,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vi).join(`
`),T.length>0&&(T+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vi).join(`
`),h.length>0&&(h+=`
`)):(T=[uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),h=[uo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hn?"#define TONE_MAPPING":"",t.toneMapping!==hn?Fe.tonemapping_pars_fragment:"",t.toneMapping!==hn?Jf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Zf("linearToOutputTexel",t.outputColorSpace),Qf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vi).join(`
`)),a=Hs(a),a=oo(a,t),a=lo(a,t),o=Hs(o),o=oo(o,t),o=lo(o,t),a=co(a),o=co(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,T=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,h=["#define varying in",t.glslVersion===Ea?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ea?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=d+T+a,A=d+h+o,E=ro(r,r.VERTEX_SHADER,M),R=ro(r,r.FRAGMENT_SHADER,A);r.attachShader(x,E),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(P){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(E)||"",q=r.getShaderInfoLog(R)||"",L=I.trim(),V=G.trim(),J=q.trim();let z=!0,te=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,E,R);else{const W=ao(r,E,"vertex"),Q=ao(r,R,"fragment");qe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+W+`
`+Q)}else L!==""?we("WebGLProgram: Program Info Log:",L):(V===""||J==="")&&(te=!1);te&&(P.diagnostics={runnable:z,programLog:L,vertexShader:{log:V,prefix:T},fragmentShader:{log:J,prefix:h}})}r.deleteShader(E),r.deleteShader(R),f=new lr(r,x),S=tp(r,x)}let f;this.getUniforms=function(){return f===void 0&&b(this),f};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(x,Xf)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=R,this}let fp=0;class pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mp(e),t.set(e,n)),n}}class mp{constructor(e){this.id=fp++,this.code=e,this.usedTimes=0}}function gp(i){return i===On||i===cr||i===ur}function _p(i,e,t,n,r,s){const a=new zo,o=new pp,c=new Set,l=[],p=new Map,g=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(f){return c.add(f),f===0?"uv":`uv${f}`}function x(f,S,N,P,I,G){const q=P.fog,L=I.geometry,V=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?P.environment:null,J=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap,z=e.get(f.envMap||V,J),te=u[f.type];let W=n.precision;f.precision!==null&&(W=n.getMaxPrecision(f.precision),W!==f.precision&&we("WebGLProgram.getParameters:",f.precision,"not supported, using",W,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,j=Q!==void 0?Q.length:0;let Se=0;L.morphAttributes.position!==void 0&&(Se=1),L.morphAttributes.normal!==void 0&&(Se=2),L.morphAttributes.color!==void 0&&(Se=3);let Le,K,pe,ve;if(te){const he=Jt[te];Le=he.vertexShader,K=he.fragmentShader}else{Le=f.vertexShader,K=f.fragmentShader;const he=o.getVertexShaderStage(f),Ke=o.getFragmentShaderStage(f);o.update(f,he,Ke),pe=he.id,ve=Ke.id}const Ae=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ie=I.isInstancedMesh===!0,st=I.isBatchedMesh===!0,Re=!!f.map,Ye=!!f.matcap,$e=!!z,ze=$e&&z.isPMREMTexture===!0,gt=!!f.aoMap,lt=!!f.lightMap,wt=!!f.bumpMap&&f.wireframe===!1,nt=!!f.normalMap,Kt=!!f.displacementMap,ht=!!f.emissiveMap,Nt=!!f.metalnessMap,Ut=!!f.roughnessMap,Ft=f.anisotropy>0,D=f.clearcoat>0,Ot=f.diffuseRoughness>0,je=f.dispersion>0,et=f.retroreflectivity>0,de=f.iridescence>0,ct=f.sheen>0,be=f.transmission>0,Ce=Ft&&!!f.anisotropyMap,y=D&&!!f.clearcoatMap,_=D&&!!f.clearcoatNormalMap,F=D&&!!f.clearcoatRoughnessMap,ee=Ot&&!!f.diffuseRoughnessMap,$=de&&!!f.iridescenceMap,re=de&&!!f.iridescenceThicknessMap,ce=ct&&!!f.sheenColorMap,X=ct&&!!f.sheenRoughnessMap,Y=!!f.specularMap,ae=!!f.specularColorMap,w=!!f.specularIntensityMap,Z=be&&!!f.transmissionMap,k=be&&!!f.thicknessMap,oe=!!f.gradientMap,ie=!!f.alphaMap,se=f.alphaTest>0,ye=!!f.alphaHash,Ue=!!f.extensions;let ne=hn;f.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);const Te=ze?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,Ne={shaderID:te,shaderType:f.type,shaderName:f.name,vertexShader:Le,fragmentShader:K,defines:f.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:W,batching:st,batchingColor:st&&I._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&I.instanceColor!==null,instancingMorph:Ie&&I.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:ke.workingColorSpace,alphaToCoverage:!!f.alphaToCoverage,map:Re,matcap:Ye,envMap:$e,envMapMode:$e&&z.mapping,envMapPMREM:ze,envMapMaxLod:ze?Te.length-1:null,envMapSize:ze?Te[0].width:null,aoMap:gt,lightMap:lt,bumpMap:wt,normalMap:nt,displacementMap:Kt,emissiveMap:ht,normalMapObjectSpace:nt&&f.normalMapType===Zl,normalMapTangentSpace:nt&&f.normalMapType===Os,packedNormalMap:nt&&f.normalMapType===Os&&gp(f.normalMap.format),metalnessMap:Nt,roughnessMap:Ut,anisotropy:Ft,anisotropyMap:Ce,clearcoat:D,clearcoatMap:y,clearcoatNormalMap:_,clearcoatRoughnessMap:F,diffuseRoughness:Ot,diffuseRoughnessMap:ee,dispersion:je,retroreflection:et,iridescence:de,iridescenceMap:$,iridescenceThicknessMap:re,sheen:ct,sheenColorMap:ce,sheenRoughnessMap:X,specularMap:Y,specularColorMap:ae,specularIntensityMap:w,transmission:be,transmissionMap:Z,thicknessMap:k,gradientMap:oe,opaque:f.transparent===!1&&f.blending===xi&&f.alphaToCoverage===!1,alphaMap:ie,alphaTest:se,alphaHash:ye,combine:f.combine,mapUv:Re&&m(f.map.channel),aoMapUv:gt&&m(f.aoMap.channel),lightMapUv:lt&&m(f.lightMap.channel),bumpMapUv:wt&&m(f.bumpMap.channel),normalMapUv:nt&&m(f.normalMap.channel),displacementMapUv:Kt&&m(f.displacementMap.channel),emissiveMapUv:ht&&m(f.emissiveMap.channel),metalnessMapUv:Nt&&m(f.metalnessMap.channel),roughnessMapUv:Ut&&m(f.roughnessMap.channel),anisotropyMapUv:Ce&&m(f.anisotropyMap.channel),clearcoatMapUv:y&&m(f.clearcoatMap.channel),clearcoatNormalMapUv:_&&m(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&m(f.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&m(f.diffuseRoughnessMap.channel),iridescenceMapUv:$&&m(f.iridescenceMap.channel),iridescenceThicknessMapUv:re&&m(f.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(f.sheenColorMap.channel),sheenRoughnessMapUv:X&&m(f.sheenRoughnessMap.channel),specularMapUv:Y&&m(f.specularMap.channel),specularColorMapUv:ae&&m(f.specularColorMap.channel),specularIntensityMapUv:w&&m(f.specularIntensityMap.channel),transmissionMapUv:Z&&m(f.transmissionMap.channel),thicknessMapUv:k&&m(f.thicknessMap.channel),alphaMapUv:ie&&m(f.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(nt||Ft),vertexNormals:!!L.attributes.normal,vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(Re||ie),fog:!!q,useFog:f.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:f.wireframe===!1&&(f.flatShading===!0||L.attributes.normal===void 0&&nt===!1&&(f.isMeshLambertMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isMeshPhysicalMaterial)),sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:me,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:G.filter(he=>he.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Re&&f.map.isVideoTexture===!0&&ke.getTransfer(f.map.colorSpace)===Ze,decodeVideoTextureEmissive:ht&&f.emissiveMap.isVideoTexture===!0&&ke.getTransfer(f.emissiveMap.colorSpace)===Ze,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===un,flipSided:f.side===Pt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:Ue&&f.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&f.extensions.multiDraw===!0||st)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function T(f){const S=[];if(f.shaderID?S.push(f.shaderID):(S.push(f.customVertexShaderID),S.push(f.customFragmentShaderID)),f.defines!==void 0)for(const N in f.defines)S.push(N),S.push(f.defines[N]);return f.isRawShaderMaterial===!1&&(h(S,f),d(S,f),S.push(i.outputColorSpace)),S.push(f.customProgramCacheKey),S.join()}function h(f,S){f.push(S.precision),f.push(S.outputColorSpace),f.push(S.envMapMode),f.push(S.envMapPMREM),f.push(S.envMapMaxLod),f.push(S.envMapSize),f.push(S.mapUv),f.push(S.alphaMapUv),f.push(S.lightMapUv),f.push(S.aoMapUv),f.push(S.bumpMapUv),f.push(S.normalMapUv),f.push(S.displacementMapUv),f.push(S.emissiveMapUv),f.push(S.metalnessMapUv),f.push(S.roughnessMapUv),f.push(S.anisotropyMapUv),f.push(S.clearcoatMapUv),f.push(S.clearcoatNormalMapUv),f.push(S.clearcoatRoughnessMapUv),f.push(S.diffuseRoughnessMapUv),f.push(S.iridescenceMapUv),f.push(S.iridescenceThicknessMapUv),f.push(S.sheenColorMapUv),f.push(S.sheenRoughnessMapUv),f.push(S.specularMapUv),f.push(S.specularColorMapUv),f.push(S.specularIntensityMapUv),f.push(S.transmissionMapUv),f.push(S.thicknessMapUv),f.push(S.combine),f.push(S.fogExp2),f.push(S.sizeAttenuation),f.push(S.morphTargetsCount),f.push(S.numSunLights),f.push(S.numDirLights),f.push(S.numPointLights),f.push(S.numSpotLights),f.push(S.numSpotLightMaps),f.push(S.numHemiLights),f.push(S.numRectAreaLights),f.push(S.numSunLightShadows),f.push(S.numDirLightShadows),f.push(S.numPointLightShadows),f.push(S.numSpotLightShadows),f.push(S.numSpotLightShadowsWithMaps),f.push(S.numLightProbes),f.push(S.numLightProbeGrids),f.push(S.shadowMapType),f.push(S.toneMapping),f.push(S.numClippingPlanes),f.push(S.numClipIntersection),f.push(S.depthPacking)}function d(f,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),f.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),f.push(a.mask)}function M(f){const S=u[f.type];let N;if(S){const P=Jt[S];N=Fc.clone(P.uniforms)}else N=f.uniforms;return N}function A(f,S){let N=p.get(S);return N!==void 0?++N.usedTimes:(N=new hp(i,S,f,r),l.push(N),p.set(S,N)),N}function E(f){if(--f.usedTimes===0){const S=l.indexOf(f);l[S]=l[l.length-1],l.pop(),p.delete(f.cacheKey),f.destroy()}}function R(f){o.remove(f)}function b(){o.dispose()}return{getParameters:x,getProgramCacheKey:T,getUniforms:M,acquireProgram:A,releaseProgram:E,releaseShaderCache:R,programs:l,dispose:b}}function vp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ho(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function o(u,m,x,T,h,d){let M=i[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:x,materialVariant:a(u),groupOrder:T,renderOrder:u.renderOrder,z:h,group:d},i[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=x,M.materialVariant=a(u),M.groupOrder=T,M.renderOrder=u.renderOrder,M.z=h,M.group=d),e++,M}function c(u,m,x,T,h,d,M){M.reversedDepth===!0&&(h=-h);const A=o(u,m,x,T,h,d);x.transmission>0?n.push(A):x.transparent===!0?r.push(A):t.push(A)}function l(u,m,x,T,h,d){const M=o(u,m,x,T,h,d);x.transmission>0?n.unshift(M):x.transparent===!0?r.unshift(M):t.unshift(M)}function p(u,m){t.length>1&&t.sort(u||xp),n.length>1&&n.sort(m||ho),r.length>1&&r.sort(m||ho)}function g(){for(let u=e,m=i.length;u<m;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:g,sort:p}}function Mp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new fo,i.set(n,[a])):r>=s.length?(a=new fo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new Be};break;case"SpotLight":t={position:new B,direction:new B,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Ep(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let yp=0;function Tp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ap(i){const e=new Sp,t=Ep(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);const r=new B,s=new tt,a=new tt;function o(l){let p=0,g=0,u=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let m=0,x=0,T=0,h=0,d=0,M=0,A=0,E=0,R=0,b=0,f=0,S=0,N=0,P=0;l.sort(Tp);for(let G=0,q=l.length;G<q;G++){const L=l[G],V=L.color,J=L.intensity,z=L.distance;let te=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===On?te=L.shadow.map.texture:te=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)p+=V.r*J,g+=V.g*J,u+=V.b*J;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],J);P++}else if(L.isSunLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=j,n.sunShadowMap[x]=te;const Se=Q.getViewportCount();for(let Le=0;Le<Se;Le++)n.sunShadowMatrix[T+Le]=Q.getMatrix(Le),n.sunShadowCascade[T+Le]=Q._cascadeData[Le];T+=Se,x++}n.sun[m]=W,m++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[h]=j,n.directionalShadowMap[h]=te,n.directionalShadowMatrix[h]=L.shadow.matrix,R++}n.directional[h]=W,h++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(V).multiplyScalar(J),W.distance=z,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[M]=W;const Q=L.shadow;if(L.map&&(n.spotLightMap[S]=L.map,S++,Q.updateMatrices(L),L.castShadow&&N++),n.spotLightMatrix[M]=Q.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[M]=j,n.spotShadowMap[M]=te,f++}M++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(V).multiplyScalar(J),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[A]=W,A++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[d]=j,n.pointShadowMap[d]=te,n.pointShadowMatrix[d]=L.shadow.matrix,b++}n.point[d]=W,d++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(J),W.groundColor.copy(L.groundColor).multiplyScalar(J),n.hemi[E]=W,E++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=g,n.ambient[2]=u;const I=n.hash;(I.sunLength!==m||I.directionalLength!==h||I.pointLength!==d||I.spotLength!==M||I.rectAreaLength!==A||I.hemiLength!==E||I.numSunShadows!==x||I.numDirectionalShadows!==R||I.numPointShadows!==b||I.numSpotShadows!==f||I.numSpotMaps!==S||I.numLightProbes!==P)&&(n.sun.length=m,n.directional.length=h,n.spot.length=M,n.rectArea.length=A,n.point.length=d,n.hemi.length=E,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=f,n.spotShadowMap.length=f,n.spotLightMatrix.length=f+S-N,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,I.sunLength=m,I.directionalLength=h,I.pointLength=d,I.spotLength=M,I.rectAreaLength=A,I.hemiLength=E,I.numSunShadows=x,I.numDirectionalShadows=R,I.numPointShadows=b,I.numSpotShadows=f,I.numSpotMaps=S,I.numLightProbes=P,n.version=yp++)}function c(l,p){let g=0,u=0,m=0,x=0,T=0,h=0;const d=p.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){const E=l[M];if(E.isSunLight){const R=n.sun[g];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(d),g++}else if(E.isDirectionalLight){const R=n.directional[u];R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),u++}else if(E.isSpotLight){const R=n.spot[x];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(d),x++}else if(E.isRectAreaLight){const R=n.rectArea[T];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),a.identity(),s.copy(E.matrixWorld),s.premultiply(d),a.extractRotation(s),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),T++}else if(E.isPointLight){const R=n.point[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const R=n.hemi[h];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(d),h++}}}return{setup:o,setupView:c,state:n}}function po(i){const e=new Ap(i),t=[],n=[],r=[];function s(g){p.camera=g,t.length=0,n.length=0,r.length=0}function a(g){g.isLightProbeGrid?r.push(g):t.push(g)}function o(g){n.push(g)}function c(){e.setup(t),r.sort((g,u)=>g.priority-u.priority||g.id-u.id)}function l(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function bp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new po(i),e.set(r,[o])):s>=a.length?(o=new po(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cp=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Pp=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],mo=new tt,mi=new B,Jr=new B;function Lp(i,e,t){let n=new Ti;const r=new Oe,s=new Oe,a=new rt,o=new Vc,c=new kc,l={},p=t.maxTextureSize,g={[Fn]:Pt,[Pt]:Fn,[un]:un},u=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:Rp,fragmentShader:wp}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new Yt;x.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new pn(x,u),h=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let d=this.type;this.render=function(b,f,S){if(h.enabled===!1||h.autoUpdate===!1&&h.needsUpdate===!1||b.length===0)return;this.type===bl&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);const N=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),G=i.state;G.setBlending(jn),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const q=d!==this.type;q&&f.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(V=>V.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,V=b.length;L<V;L++){const J=b[L],z=J.shadow;if(z===void 0){we("WebGLShadowMap:",J,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const te=z.getFrameExtents();r.multiply(te),s.copy(z.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/te.x),r.x=s.x*te.x,z.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/te.y),r.y=s.y*te.y,z.mapSize.y=s.y));const W=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=W,z.map===null||q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===gi){if(J.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new en(r.x,r.y,{format:On,type:nn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),z.map.texture.name=J.name+".shadowMap",z.map.depthTexture=new ri(r.x,r.y,Qt),z.map.depthTexture.name=J.name+".shadowMapDepth",z.map.depthTexture.format=bn,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=vt,z.map.depthTexture.magFilter=vt}else J.isPointLight?(z.map=new ta(r.x),z.map.depthTexture=new Yo(r.x,tn)):(z.map=new en(r.x,r.y),z.map.depthTexture=new ri(r.x,r.y,tn)),z.map.depthTexture.name=J.name+".shadowMap",z.map.depthTexture.format=bn,this.type===ir?(z.map.depthTexture.compareFunction=W?Uo:No,z.map.depthTexture.minFilter=Ct,z.map.depthTexture.magFilter=Ct):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=vt,z.map.depthTexture.magFilter=vt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==r.x||z.map.height!==r.y)&&z.map.setSize(r.x,r.y);const Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();J.isPointLight!==!0&&z.updateMatrices(J,S);const j=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let Se=0;Se<Q;Se++){const Le=z.getCamera(Se);if(J.isPointLight){const K=z.camera,pe=z.matrix,ve=J.distance||K.far;ve!==K.far&&(K.far=ve,K.updateProjectionMatrix()),mi.setFromMatrixPosition(J.matrixWorld),K.position.copy(mi),Jr.copy(K.position),Jr.add(Cp[Se]),K.up.copy(Pp[Se]),K.lookAt(Jr),K.updateMatrixWorld(),pe.makeTranslation(-mi.x,-mi.y,-mi.z),mo.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),z._frustum.setFromProjectionMatrix(mo,K.coordinateSystem,K.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(z.map),i.clear());const K=z.getViewport(Se);a.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),G.viewport(a)}n=z.getFrustum(Se),E(f,S,Le,J,j,this.type)}z.isPointLightShadow!==!0&&this.type===gi&&M(z,S),z.needsUpdate=!1}d=this.type,h.needsUpdate=!1,i.setRenderTarget(N,P,I)};function M(b,f){const S=e.update(T);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null?b.mapPass=new en(r.x,r.y,{format:On,type:nn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(f,null,S,u,T,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value.set(b.map.width,b.map.height),m.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(f,null,S,m,T,null)}function A(b,f,S,N){let P=null;const I=S.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)P=I;else if(P=S.isPointLight===!0?c:o,i.localClippingEnabled&&f.clipShadows===!0&&Array.isArray(f.clippingPlanes)&&f.clippingPlanes.length!==0||f.displacementMap&&f.displacementScale!==0||f.alphaMap&&f.alphaTest>0||f.map&&f.alphaTest>0||f.alphaToCoverage===!0){const G=P.uuid,q=f.uuid;let L=l[G];L===void 0&&(L={},l[G]=L);let V=L[q];V===void 0&&(V=P.clone(),L[q]=V,f.addEventListener("dispose",R)),P=V}if(P.visible=f.visible,P.wireframe=f.wireframe,N===gi?P.side=f.shadowSide!==null?f.shadowSide:f.side:P.side=f.shadowSide!==null?f.shadowSide:g[f.side],P.alphaMap=f.alphaMap,P.alphaTest=f.alphaToCoverage===!0?.5:f.alphaTest,P.map=f.map,P.clipShadows=f.clipShadows,P.clippingPlanes=f.clippingPlanes,P.clipIntersection=f.clipIntersection,P.displacementMap=f.displacementMap,P.displacementScale=f.displacementScale,P.displacementBias=f.displacementBias,P.wireframeLinewidth=f.wireframeLinewidth,P.linewidth=f.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const G=i.properties.get(P);G.light=S}return P}function E(b,f,S,N,P,I){if(b.visible===!1)return;if(b.layers.test(P)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===gi)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,b.matrixWorld);const L=e.update(b),V=b.material;if(Array.isArray(V)){const J=L.groups;for(let z=0,te=J.length;z<te;z++){const W=J[z],Q=V[W.materialIndex];if(Q&&Q.visible){const j=A(b,Q,N,I);b.onBeforeShadow(i,b,f,S,L,j,W),i.renderBufferDirect(S,null,L,j,b,W),b.onAfterShadow(i,b,f,S,L,j,W)}}}else if(V.visible){const J=A(b,V,N,I);b.onBeforeShadow(i,b,f,S,L,J,null),i.renderBufferDirect(S,null,L,J,b,null),b.onAfterShadow(i,b,f,S,L,J,null)}}const q=b.children;for(let L=0,V=q.length;L<V;L++)E(q[L],f,S,N,P,I)}function R(b){b.target.removeEventListener("dispose",R);for(const S in l){const N=l[S],P=b.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function Dp(i,e){function t(){let w=!1;const Z=new rt;let k=null;const oe=new rt(0,0,0,0);return{setMask:function(ie){k!==ie&&!w&&(i.colorMask(ie,ie,ie,ie),k=ie)},setLocked:function(ie){w=ie},setClear:function(ie,se,ye,Ue,ne){ne===!0&&(ie*=Ue,se*=Ue,ye*=Ue),Z.set(ie,se,ye,Ue),oe.equals(Z)===!1&&(i.clearColor(ie,se,ye,Ue),oe.copy(Z))},reset:function(){w=!1,k=null,oe.set(-1,0,0,0)}}}function n(){let w=!1,Z=!1,k=null,oe=null,ie=null;return{setReversed:function(se){if(Z!==se){const ye=e.get("EXT_clip_control");se?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Z=se;const Ue=ie;ie=null,this.setClear(Ue)}},getReversed:function(){return Z},setTest:function(se){se?me(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(se){k!==se&&!w&&(i.depthMask(se),k=se)},setFunc:function(se){if(Z&&(se=ac[se]),oe!==se){switch(se){case Qr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case es:i.depthFunc(i.LESS);break;case Mi:i.depthFunc(i.LEQUAL);break;case ts:i.depthFunc(i.EQUAL);break;case ns:i.depthFunc(i.GEQUAL);break;case is:i.depthFunc(i.GREATER);break;case rs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=se}},setLocked:function(se){w=se},setClear:function(se){ie!==se&&(ie=se,Z&&(se=1-se),i.clearDepth(se))},reset:function(){w=!1,k=null,oe=null,ie=null,Z=!1}}}function r(){let w=!1,Z=null,k=null,oe=null,ie=null,se=null,ye=null,Ue=null,ne=null;return{setTest:function(Te){w||(Te?me(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(Te){Z!==Te&&!w&&(i.stencilMask(Te),Z=Te)},setFunc:function(Te,Ne,he){(k!==Te||oe!==Ne||ie!==he)&&(i.stencilFunc(Te,Ne,he),k=Te,oe=Ne,ie=he)},setOp:function(Te,Ne,he){(se!==Te||ye!==Ne||Ue!==he)&&(i.stencilOp(Te,Ne,he),se=Te,ye=Ne,Ue=he)},setLocked:function(Te){w=Te},setClear:function(Te){ne!==Te&&(i.clearStencil(Te),ne=Te)},reset:function(){w=!1,Z=null,k=null,oe=null,ie=null,se=null,ye=null,Ue=null,ne=null}}}const s=new t,a=new n,o=new r;let c={};const l=new WeakMap;let p={},g={},u={},m=new WeakMap,x=[],T=null,h=!1,d=null,M=null,A=null,E=null,R=null,b=null,f=null,S=new Be(0,0,0),N=0,P=!1,I=null,G=null,q=null,L=null,V=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,te=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),z=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),z=te>=2);let Q=null,j={};const Se=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),K=new rt().fromArray(Se),pe=new rt().fromArray(Le);function ve(w,Z,k,oe){const ie=new Uint8Array(4),se=i.createTexture();i.bindTexture(w,se),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<k;ye++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(Z,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(Z+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return se}const Ae={};Ae[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Mi),wt(!1),nt(va),me(i.CULL_FACE),gt(jn);function me(w){p[w]!==!0&&(i.enable(w),p[w]=!0)}function Ie(w){p[w]!==!1&&(i.disable(w),p[w]=!1)}function st(w,Z){return u[w]!==Z?(i.bindFramebuffer(w,Z),u[w]=Z,w===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Z),w===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Z),!0):!1}function Re(w,Z){let k=x,oe=!1;if(w){k=m.get(Z),k===void 0&&(k=[],m.set(Z,k));const ie=w.textures;if(k.length!==ie.length||k[0]!==i.COLOR_ATTACHMENT0){for(let se=0,ye=ie.length;se<ye;se++)k[se]=i.COLOR_ATTACHMENT0+se;k.length=ie.length,oe=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,oe=!0);oe&&i.drawBuffers(k)}function Ye(w){return T!==w?(i.useProgram(w),T=w,!0):!1}const $e={[Qn]:i.FUNC_ADD,[wl]:i.FUNC_SUBTRACT,[Cl]:i.FUNC_REVERSE_SUBTRACT};$e[Pl]=i.MIN,$e[Ll]=i.MAX;const ze={[Dl]:i.ZERO,[Il]:i.ONE,[Nl]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[Gl]:i.SRC_ALPHA_SATURATE,[Bl]:i.DST_COLOR,[Fl]:i.DST_ALPHA,[Ul]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[zl]:i.ONE_MINUS_DST_COLOR,[Ol]:i.ONE_MINUS_DST_ALPHA,[Hl]:i.CONSTANT_COLOR,[Vl]:i.ONE_MINUS_CONSTANT_COLOR,[kl]:i.CONSTANT_ALPHA,[Wl]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(w,Z,k,oe,ie,se,ye,Ue,ne,Te){if(w===jn){h===!0&&(Ie(i.BLEND),h=!1);return}if(h===!1&&(me(i.BLEND),h=!0),w!==Rl){if(w!==d||Te!==P){if((M!==Qn||R!==Qn)&&(i.blendEquation(i.FUNC_ADD),M=Qn,R=Qn),Te)switch(w){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.ONE,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:qe("WebGLState: Invalid blending: ",w);break}else switch(w){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ma:qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sa:qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:qe("WebGLState: Invalid blending: ",w);break}A=null,E=null,b=null,f=null,S.set(0,0,0),N=0,d=w,P=Te}return}ie=ie||Z,se=se||k,ye=ye||oe,(Z!==M||ie!==R)&&(i.blendEquationSeparate($e[Z],$e[ie]),M=Z,R=ie),(k!==A||oe!==E||se!==b||ye!==f)&&(i.blendFuncSeparate(ze[k],ze[oe],ze[se],ze[ye]),A=k,E=oe,b=se,f=ye),(Ue.equals(S)===!1||ne!==N)&&(i.blendColor(Ue.r,Ue.g,Ue.b,ne),S.copy(Ue),N=ne),d=w,P=!1}function lt(w,Z){w.side===un?Ie(i.CULL_FACE):me(i.CULL_FACE);let k=w.side===Pt;Z&&(k=!k),wt(k),w.blending===xi&&w.transparent===!1?gt(jn):gt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const oe=w.stencilWrite;o.setTest(oe),oe&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),ht(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function wt(w){I!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),I=w)}function nt(w){w!==Tl?(me(i.CULL_FACE),w!==G&&(w===va?i.cullFace(i.BACK):w===Al?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),G=w}function Kt(w){w!==q&&(z&&i.lineWidth(w),q=w)}function ht(w,Z,k){w?(me(i.POLYGON_OFFSET_FILL),(L!==Z||V!==k)&&(L=Z,V=k,a.getReversed()&&(Z=-Z,k=-k),i.polygonOffset(Z,k))):Ie(i.POLYGON_OFFSET_FILL)}function Nt(w){w?me(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function Ut(w){w===void 0&&(w=i.TEXTURE0+J-1),Q!==w&&(i.activeTexture(w),Q=w)}function Ft(w,Z,k){k===void 0&&(Q===null?k=i.TEXTURE0+J-1:k=Q);let oe=j[k];oe===void 0&&(oe={type:void 0,texture:void 0},j[k]=oe),(oe.type!==w||oe.texture!==Z)&&(Q!==k&&(i.activeTexture(k),Q=k),i.bindTexture(w,Z||Ae[w]),oe.type=w,oe.texture=Z)}function D(){const w=j[Q];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function Ot(){try{i.compressedTexImage2D(...arguments)}catch(w){qe("WebGLState:",w)}}function je(){try{i.compressedTexImage3D(...arguments)}catch(w){qe("WebGLState:",w)}}function et(){try{i.texSubImage2D(...arguments)}catch(w){qe("WebGLState:",w)}}function de(){try{i.texSubImage3D(...arguments)}catch(w){qe("WebGLState:",w)}}function ct(){try{i.compressedTexSubImage2D(...arguments)}catch(w){qe("WebGLState:",w)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(w){qe("WebGLState:",w)}}function Ce(){try{i.texStorage2D(...arguments)}catch(w){qe("WebGLState:",w)}}function y(){try{i.texStorage3D(...arguments)}catch(w){qe("WebGLState:",w)}}function _(){try{i.texImage2D(...arguments)}catch(w){qe("WebGLState:",w)}}function F(){try{i.texImage3D(...arguments)}catch(w){qe("WebGLState:",w)}}function ee(w){return g[w]!==void 0?g[w]:i.getParameter(w)}function $(w,Z){g[w]!==Z&&(i.pixelStorei(w,Z),g[w]=Z)}function re(w){K.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),K.copy(w))}function ce(w){pe.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),pe.copy(w))}function X(w,Z){let k=l.get(Z);k===void 0&&(k=new WeakMap,l.set(Z,k));let oe=k.get(w);oe===void 0&&(oe=i.getUniformBlockIndex(Z,w.name),i.uniformBlockBinding(Z,oe,oe),k.set(w,oe))}function Y(w,Z,k){const ie=l.get(Z).get(w);c[ie]!==k&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,k),c[ie]=k)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},g={},Q=null,j={},u={},c={},m=new WeakMap,x=[],T=null,h=!1,d=null,M=null,A=null,E=null,R=null,b=null,f=null,S=new Be(0,0,0),N=0,P=!1,I=null,G=null,q=null,L=null,V=null,K.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:me,disable:Ie,bindFramebuffer:st,drawBuffers:Re,useProgram:Ye,setBlending:gt,setMaterial:lt,setFlipSided:wt,setCullFace:nt,setLineWidth:Kt,setPolygonOffset:ht,setScissorTest:Nt,activeTexture:Ut,bindTexture:Ft,unbindTexture:D,compressedTexImage2D:Ot,compressedTexImage3D:je,texImage2D:_,texImage3D:F,pixelStorei:$,getParameter:ee,updateUBOMapping:X,uniformBlockBinding:Y,texStorage2D:Ce,texStorage3D:y,texSubImage2D:et,texSubImage3D:de,compressedTexSubImage2D:ct,compressedTexSubImage3D:be,scissor:re,viewport:ce,reset:ae}}function Ip(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,p=new WeakMap,g=new Set;let u;const m=new WeakMap,x=new Set,T=new FinalizationRegistry(y=>x.delete(y));let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(y,_){return h?new OffscreenCanvas(y,_):fr("canvas")}function M(y,_,F){let ee=1;const $=Ce(y);if(($.width>F||$.height>F)&&(ee=F/Math.max($.width,$.height)),ee<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const re=Math.floor(ee*$.width),ce=Math.floor(ee*$.height);u===void 0&&(u=d(re,ce));const X=_?d(re,ce):u;return X.width=re,X.height=ce,X.getContext("2d").drawImage(y,0,0,re,ce),we("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+re+"x"+ce+")."),X}else return"data"in y&&we("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),y;return y}function A(y){return y.generateMipmaps}function E(y){i.generateMipmap(y)}function R(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(y,_,F,ee,$,re=!1){if(y!==null){if(i[y]!==void 0)return i[y];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=_;if(_===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8),F===i.UNSIGNED_SHORT&&ce&&(X=ce.R16_EXT),F===i.SHORT&&ce&&(X=ce.R16_SNORM_EXT)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),_===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8),F===i.UNSIGNED_SHORT&&ce&&(X=ce.RG16_EXT),F===i.SHORT&&ce&&(X=ce.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),_===i.RGB&&(F===i.UNSIGNED_SHORT&&ce&&(X=ce.RGB16_EXT),F===i.SHORT&&ce&&(X=ce.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),_===i.RGBA){const Y=re?hr:ke.getTransfer($);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=Y===Ze?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ce&&(X=ce.RGBA16_EXT),F===i.SHORT&&ce&&(X=ce.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function f(y,_){let F;return y?_===null||_===tn||_===ii?F=i.DEPTH24_STENCIL8:_===Qt?F=i.DEPTH32F_STENCIL8:_===Ei&&(F=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===tn||_===ii?F=i.DEPTH_COMPONENT24:_===Qt?F=i.DEPTH_COMPONENT32F:_===Ei&&(F=i.DEPTH_COMPONENT16),F}function S(y,_){return A(y)===!0||y.isFramebufferTexture&&y.minFilter!==vt&&y.minFilter!==Ct?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function N(y){const _=new WeakRef(y);n.get(y).__ref=_,x.add(_),T.register(y,_,_)}function P(y){const _=n.get(y).__ref;_!==void 0&&(x.delete(_),T.unregister(_))}function I(y){q(y.target)}function G(y){L(y.target)}function q(y){y.removeEventListener("dispose",I),P(y),J(y),y.isVideoTexture&&p.delete(y),y.isHTMLTexture&&g.delete(y)}function L(y){y.removeEventListener("dispose",G),P(y),te(y)}function V(){for(const y of x){const _=y.deref();_!==void 0&&(_.isRenderTarget===!0?L(_):q(_))}x.clear(),g.clear()}function J(y){const _=n.get(y);if(_.__webglInit===void 0)return;const F=y.source,ee=m.get(F);if(ee){const $=ee[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&z(y),Object.keys(ee).length===0&&m.delete(F)}n.remove(y)}function z(y){const _=n.get(y);i.deleteTexture(_.__webglTexture);const F=y.source,ee=m.get(F);delete ee[_.__cacheKey],a.memory.textures--}function te(y){const _=n.get(y);_.__depthDisposeCallback&&_.__depthDisposeCallback();const F=y.depthTexture;if(F&&F.renderTarget===y&&q(F),y.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let re=0;re<_.__webglFramebuffer[$].length;re++)i.deleteFramebuffer(_.__webglFramebuffer[$][re]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const ee=y.textures;for(let $=0,re=ee.length;$<re;$++){const ce=n.get(ee[$]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ee[$])}n.remove(y)}let W=0;function Q(){W=0}function j(){return W}function Se(y){W=y}function Le(){const y=W;return y>=r.maxTextures&&we("WebGLTextures: Trying to use "+(y+1)+" texture units while this GPU supports only "+r.maxTextures),W+=1,y}function K(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.mipmapsAutoUpdate),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function pe(y,_){const F=n.get(y);if(y.isVideoTexture&&ct(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const ee=y.image;if(ee===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{lt(F,y,_);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function ve(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){lt(F,y,_);return}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Ae(y,_){const F=n.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){lt(F,y,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function me(y,_){const F=n.get(y);if(y.version>0&&F.__version!==y.version){wt(F,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const Ie={[ss]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[as]:i.MIRRORED_REPEAT},st={[vt]:i.NEAREST,[Yl]:i.NEAREST_MIPMAP_NEAREST,[Ii]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[Ar]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},Re={[Jl]:i.NEVER,[Fo]:i.ALWAYS,[Ql]:i.LESS,[No]:i.LEQUAL,[jl]:i.EQUAL,[Uo]:i.GEQUAL,[ec]:i.GREATER,[tc]:i.NOTEQUAL};function Ye(y,_){if(_.type===Qt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ct||_.magFilter===Ar||_.magFilter===Ii||_.magFilter===Tn||_.minFilter===Ct||_.minFilter===Ar||_.minFilter===Ii||_.minFilter===Tn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,Ie[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,Ie[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,Ie[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,st[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,st[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Re[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===vt||_.minFilter!==Ii&&_.minFilter!==Tn||_.type===Qt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $e(y,_){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",I),N(_));const ee=_.source;let $=m.get(ee);$===void 0&&($={},m.set(ee,$));const re=K(_);if(re!==y.__cacheKey){$[re]===void 0&&($[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[re].usedTimes++;const ce=$[y.__cacheKey];ce!==void 0&&($[y.__cacheKey].usedTimes--,ce.usedTimes===0&&z(_)),y.__cacheKey=re,y.__webglTexture=$[re].texture}return F}function ze(y,_,F){return Math.floor(Math.floor(y/F)/_)}function gt(y,_,F,ee){const re=y.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,ee,_.data);else{re.sort((w,Z)=>w.start-Z.start);let ce=0;for(let w=1;w<re.length;w++){const Z=re[ce],k=re[w],oe=Z.start+Z.count,ie=ze(k.start,_.width,4),se=ze(Z.start,_.width,4);k.start<=oe+1&&ie===se&&ze(k.start+k.count-1,_.width,4)===ie?Z.count=Math.max(Z.count,k.start+k.count-Z.start):(++ce,re[ce]=k)}re.length=ce+1;const X=t.getParameter(i.UNPACK_ROW_LENGTH),Y=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let w=0,Z=re.length;w<Z;w++){const k=re[w],oe=Math.floor(k.start/4),ie=Math.ceil(k.count/4),se=oe%_.width,ye=Math.floor(oe/_.width),Ue=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,ye),t.texSubImage2D(i.TEXTURE_2D,0,se,ye,Ue,ne,F,ee,_.data)}y.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,X),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Y),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function lt(y,_,F){let ee=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=i.TEXTURE_3D);const $=$e(y,_),re=_.source;t.bindTexture(ee,y.__webglTexture,i.TEXTURE0+F);const ce=n.get(re);if(re.version!==ce.__version||$===!0){if(t.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ne=ke.getPrimaries(ke.workingColorSpace),Te=_.colorSpace===yn?null:ke.getPrimaries(_.colorSpace),Ne=_.colorSpace===yn||ne===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Y=M(_.image,!1,r.maxTextureSize);Y=be(_,Y);const ae=s.convert(_.format,_.colorSpace),w=s.convert(_.type);let Z=b(_.internalFormat,ae,w,_.normalized,_.colorSpace,_.isVideoTexture);Ye(ee,_);let k;const oe=_.mipmaps,ie=_.isVideoTexture!==!0,se=ce.__version===void 0||$===!0,ye=re.dataReady,Ue=S(_,Y);if(_.isDepthTexture)Z=f(_.format===An,_.type),se&&(ie?t.texStorage2D(i.TEXTURE_2D,1,Z,Y.width,Y.height):t.texImage2D(i.TEXTURE_2D,0,Z,Y.width,Y.height,0,ae,w,null));else if(_.isDataTexture)if(oe.length>0){ie&&se&&t.texStorage2D(i.TEXTURE_2D,Ue,Z,oe[0].width,oe[0].height);for(let ne=0,Te=oe.length;ne<Te;ne++)k=oe[ne],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,k.width,k.height,ae,w,k.data):t.texImage2D(i.TEXTURE_2D,ne,Z,k.width,k.height,0,ae,w,k.data);_.generateMipmaps=!1}else ie?(se&&t.texStorage2D(i.TEXTURE_2D,Ue,Z,Y.width,Y.height),ye&&gt(_,Y,ae,w)):t.texImage2D(i.TEXTURE_2D,0,Z,Y.width,Y.height,0,ae,w,Y.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){ie&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Z,oe[0].width,oe[0].height,Y.depth);for(let ne=0,Te=oe.length;ne<Te;ne++)if(k=oe[ne],_.format!==jt)if(ae!==null)if(ie){if(ye)if(_.layerUpdates.size>0){const Ne=Ya(k.width,k.height,_.format,_.type);for(const he of _.layerUpdates){const Ke=k.data.subarray(he*Ne/k.data.BYTES_PER_ELEMENT,(he+1)*Ne/k.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,he,k.width,k.height,1,ae,Ke)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,k.width,k.height,Y.depth,ae,k.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Z,k.width,k.height,Y.depth,0,k.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,k.width,k.height,Y.depth,ae,w,k.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Z,k.width,k.height,Y.depth,0,ae,w,k.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{ie&&se&&t.texStorage2D(i.TEXTURE_2D,Ue,Z,oe[0].width,oe[0].height);for(let ne=0,Te=oe.length;ne<Te;ne++)k=oe[ne],_.format!==jt?ae!==null?ie?ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,k.width,k.height,ae,k.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Z,k.width,k.height,0,k.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,k.width,k.height,ae,w,k.data):t.texImage2D(i.TEXTURE_2D,ne,Z,k.width,k.height,0,ae,w,k.data)}else if(_.isDataArrayTexture)if(ie){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,Z,Y.width,Y.height,Y.depth),ye)if(_.layerUpdates.size>0){const ne=Ya(Y.width,Y.height,_.format,_.type);for(const Te of _.layerUpdates){const Ne=Y.data.subarray(Te*ne/Y.data.BYTES_PER_ELEMENT,(Te+1)*ne/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Te,Y.width,Y.height,1,ae,w,Ne)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ae,w,Y.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Z,Y.width,Y.height,Y.depth,0,ae,w,Y.data);else if(_.isData3DTexture)ie?(se&&t.texStorage3D(i.TEXTURE_3D,Ue,Z,Y.width,Y.height,Y.depth),ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ae,w,Y.data)):t.texImage3D(i.TEXTURE_3D,0,Z,Y.width,Y.height,Y.depth,0,ae,w,Y.data);else if(_.isFramebufferTexture){if(se)if(ie)t.texStorage2D(i.TEXTURE_2D,Ue,Z,Y.width,Y.height);else{let ne=Y.width,Te=Y.height;for(let Ne=0;Ne<Ue;Ne++)t.texImage2D(i.TEXTURE_2D,Ne,Z,ne,Te,0,ae,w,null),ne>>=1,Te>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),Y.parentNode!==ne){ne.appendChild(Y),g.add(_),ne.onpaint=Te=>{const Ne=Te.changedElements;for(const he of g)Ne.includes(he.image)&&(he.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Y);else{const Ne=i.RGBA,he=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ne,he,Ke,Y)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&se){const ne=Ce(oe[0]);t.texStorage2D(i.TEXTURE_2D,Ue,Z,ne.width,ne.height)}for(let ne=0,Te=oe.length;ne<Te;ne++)k=oe[ne],ie?ye&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,w,k):t.texImage2D(i.TEXTURE_2D,ne,Z,ae,w,k);_.generateMipmaps=!1}else if(ie){if(se){const ne=Ce(Y);t.texStorage2D(i.TEXTURE_2D,Ue,Z,ne.width,ne.height)}ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,w,Y)}else t.texImage2D(i.TEXTURE_2D,0,Z,ae,w,Y);A(_)&&_.mipmapsAutoUpdate===!0&&E(ee),ce.__version=re.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function wt(y,_,F){if(_.image.length!==6)return;const ee=$e(y,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+F);const re=n.get($);if($.version!==re.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const ce=ke.getPrimaries(ke.workingColorSpace),X=_.colorSpace===yn?null:ke.getPrimaries(_.colorSpace),Y=_.colorSpace===yn||ce===X?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Y);const ae=_.isCompressedTexture||_.image[0].isCompressedTexture,w=_.image[0]&&_.image[0].isDataTexture,Z=[];for(let he=0;he<6;he++)!ae&&!w?Z[he]=M(_.image[he],!0,r.maxCubemapSize):Z[he]=w?_.image[he].image:_.image[he],Z[he]=be(_,Z[he]);const k=Z[0],oe=s.convert(_.format,_.colorSpace),ie=s.convert(_.type);let se=b(_.internalFormat,oe,ie,_.normalized,_.colorSpace);const ye=_.isVideoTexture!==!0,Ue=re.__version===void 0||ee===!0,ne=$.dataReady;let Te=S(_,k);Ye(i.TEXTURE_CUBE_MAP,_);let Ne;if(_.isDepthTexture){if(se=f(_.format===An,_.type),Ue)if(ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,se,k.width,k.height);else for(let he=0;he<6;he++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,se,k.width,k.height,0,oe,ie,null)}else if(ae){ye&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,se,k.width,k.height);for(let he=0;he<6;he++){Ne=Z[he].mipmaps;for(let Ke=0;Ke<Ne.length;Ke++){const ft=Ne[Ke];_.format!==jt?oe!==null?ye?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke,0,0,ft.width,ft.height,oe,ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke,se,ft.width,ft.height,0,ft.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke,0,0,ft.width,ft.height,oe,ie,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke,se,ft.width,ft.height,0,oe,ie,ft.data)}}}else{if(Ne=_.mipmaps,ye&&Ue){Ne.length>0&&Te++;const he=Ce(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,se,he.width,he.height)}for(let he=0;he<6;he++)if(w){ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Z[he].width,Z[he].height,oe,ie,Z[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,se,Z[he].width,Z[he].height,0,oe,ie,Z[he].data);for(let Ke=0;Ke<Ne.length;Ke++){const mn=Ne[Ke].image[he].image;ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke+1,0,0,mn.width,mn.height,oe,ie,mn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke+1,se,mn.width,mn.height,0,oe,ie,mn.data)}}else{ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,oe,ie,Z[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,se,oe,ie,Z[he]);for(let Ke=0;Ke<Ne.length;Ke++){const ft=Ne[Ke];ye?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke+1,0,0,oe,ie,ft.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ke+1,se,oe,ie,ft.image[he])}}}A(_)&&_.mipmapsAutoUpdate===!0&&E(i.TEXTURE_CUBE_MAP),re.__version=$.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function nt(y,_,F,ee,$,re){const ce=s.convert(F.format,F.colorSpace),X=s.convert(F.type),Y=b(F.internalFormat,ce,X,F.normalized,F.colorSpace),ae=n.get(_),w=n.get(F);if(w.__renderTarget=_,!ae.__hasExternalTextures){const Z=Math.max(1,_.width>>re),k=Math.max(1,_.height>>re);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,re,Y,Z,k,_.depth,0,ce,X,null):t.texImage2D($,re,Y,Z,k,0,ce,X,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,$,w.__webglTexture,0,et(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,$,w.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(y,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const ee=_.depthTexture,$=ee&&ee.isDepthTexture?ee.type:null,re=f(_.stencilBuffer,$),ce=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(_),re,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(_),re,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,re,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,y)}else{const ee=_.textures;for(let $=0;$<ee.length;$++){const re=ee[$],ce=s.convert(re.format,re.colorSpace),X=s.convert(re.type),Y=b(re.internalFormat,ce,X,re.normalized,re.colorSpace);de(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,et(_),Y,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,et(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(y,_,F){const ee=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const $=n.get(_.depthTexture);$.__renderTarget=_;const re=ee?_.depthTexture.image[0]:_.depthTexture.image;(!$.__webglTexture||re.width!==_.width||re.height!==_.height)&&(re.width=_.width,re.height=_.height,_.depthTexture.needsUpdate=!0),ee?me(_.depthTexture,0):pe(_.depthTexture,0);const ce=$.__webglTexture,X=et(_),Y=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,ae=_.depthTexture.format===An?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===bn)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Y,ce,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Y,ce,0);else if(_.depthTexture.format===An)de(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,Y,ce,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,ae,Y,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(y){const _=n.get(y),F=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const ee=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",$)};ee.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=ee}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(F)for(let ee=0;ee<6;ee++)ht(_.__webglFramebuffer[ee],y,ee);else y.texture.mipmaps.length>0?ht(_.__webglFramebuffer[0],y,0):ht(_.__webglFramebuffer,y,0);else if(F){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=i.createRenderbuffer(),Kt(_.__webglDepthbuffer[ee],y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}}else if(y.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Kt(_.__webglDepthbuffer,y,!1);else{const $=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(y,_,F){const ee=n.get(y);_!==void 0&&nt(ee.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Nt(y)}function Ft(y){const _=y.texture,F=n.get(y),ee=n.get(_);y.addEventListener("dispose",G),N(y);const $=y.textures,re=y.isWebGLCubeRenderTarget===!0,ce=$.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=_.version,a.memory.textures++),re){F.__webglFramebuffer=[];for(let X=0;X<6;X++)if(_.mipmaps.length>0){F.__webglFramebuffer[X]=[];for(let Y=0;Y<_.mipmaps.length;Y++)F.__webglFramebuffer[X][Y]=i.createFramebuffer()}else F.__webglFramebuffer[X]=i.createFramebuffer()}else{if(_.mipmaps.length>0){F.__webglFramebuffer=[];for(let X=0;X<_.mipmaps.length;X++)F.__webglFramebuffer[X]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ce)for(let X=0,Y=$.length;X<Y;X++){const ae=n.get($[X]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&de(y)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let X=0;X<$.length;X++){const Y=$[X];F.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[X]);const ae=s.convert(Y.format,Y.colorSpace),w=s.convert(Y.type),Z=b(Y.internalFormat,ae,w,Y.normalized,Y.colorSpace,y.isXRRenderTarget===!0),k=et(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,k,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,F.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Kt(F.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_);for(let X=0;X<6;X++)if(_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)nt(F.__webglFramebuffer[X][Y],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,Y);else nt(F.__webglFramebuffer[X],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);A(_)?E(i.TEXTURE_CUBE_MAP):_.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let X=0,Y=$.length;X<Y;X++){const ae=$[X],w=n.get(ae);let Z=i.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Z=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Z,w.__webglTexture),Ye(Z,ae),nt(F.__webglFramebuffer,y,ae,i.COLOR_ATTACHMENT0+X,Z,0),A(ae)&&E(Z)}t.unbindTexture()}else{let X=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(X=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(X,ee.__webglTexture),Ye(X,_),_.mipmaps.length>0)for(let Y=0;Y<_.mipmaps.length;Y++)nt(F.__webglFramebuffer[Y],y,_,i.COLOR_ATTACHMENT0,X,Y);else nt(F.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,X,0);A(_)?E(X):_.mipmaps.length>0&&i.texParameteri(X,i.TEXTURE_MAX_LEVEL,_.mipmaps.length-1),t.unbindTexture()}y.depthBuffer&&Nt(y)}function D(y){const _=y.textures;for(let F=0,ee=_.length;F<ee;F++){const $=_[F];if(A($)&&$.mipmapsAutoUpdate===!0){const re=R(y),ce=n.get($).__webglTexture;t.bindTexture(re,ce),E(re),t.unbindTexture()}}}const Ot=[];function je(y){if(y.samples>0){if(de(y)===!1){const _=y.textures,F=y.width,ee=y.height;let $=i.COLOR_BUFFER_BIT;const re=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(y),X=_.length>1;if(X)for(let ae=0;ae<_.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),y.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<_.length;ae++){if(y.resolveDepthBuffer&&(y.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),X){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const w=n.get(_[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,w,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,$,i.NEAREST),c===!0&&(Ot.length=0,Ot.push(i.COLOR_ATTACHMENT0+ae),y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&Ot.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let ae=0;ae<_.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);const w=n.get(_[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,w,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.storeMultisampledDepthBuffer===!1&&c){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function et(y){return Math.min(r.maxSamples,y.samples)}function de(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ct(y){const _=a.render.frame;p.get(y)!==_&&(p.set(y,_),y.update())}function be(y,_){const F=y.colorSpace,ee=y.format,$=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==dr&&F!==yn&&(ke.getTransfer(F)===Ze?(ee!==jt||$!==It)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):qe("WebGLTextures: Unsupported texture color space:",F)),_}function Ce(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=Le,this.resetTextureUnits=Q,this.getTextureUnits=j,this.setTextureUnits=Se,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=Ae,this.setTextureCube=me,this.rebindTextures=Ut,this.setupRenderTarget=Ft,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=de,this.dispose=V}function Np(i,e){function t(n,r=yn){let s;const a=ke.getTransfer(r);if(n===It)return i.UNSIGNED_BYTE;if(n===Ws)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Co)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Po)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ro)return i.BYTE;if(n===wo)return i.SHORT;if(n===Ei)return i.UNSIGNED_SHORT;if(n===ks)return i.INT;if(n===tn)return i.UNSIGNED_INT;if(n===Qt)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===Lo)return i.ALPHA;if(n===Do)return i.RGB;if(n===jt)return i.RGBA;if(n===bn)return i.DEPTH_COMPONENT;if(n===An)return i.DEPTH_STENCIL;if(n===Io)return i.RED;if(n===qs)return i.RED_INTEGER;if(n===On)return i.RG;if(n===Ys)return i.RG_INTEGER;if(n===Ks)return i.RGBA_INTEGER;if(n===rr||n===sr||n===ar||n===or)if(a===Ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===os||n===ls||n===cs||n===us)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===os)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ls)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===us)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ds||n===hs||n===fs||n===ps||n===ms||n===cr||n===gs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ds||n===hs)return a===Ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ps)return s.COMPRESSED_R11_EAC;if(n===ms)return s.COMPRESSED_SIGNED_R11_EAC;if(n===cr)return s.COMPRESSED_RG11_EAC;if(n===gs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===_s||n===vs||n===xs||n===Ms||n===Ss||n===Es||n===ys||n===Ts||n===As||n===bs||n===Rs||n===ws||n===Cs||n===Ps)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_s)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ms)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ss)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Es)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ys)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ts)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===As)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ws)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cs)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ps)return a===Ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ls||n===Ds||n===Is)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ls)return a===Ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ds)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Is)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ns||n===Us||n===ur||n===Fs)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ns)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Us)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ur)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ii?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Up=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Op{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ko(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Bn({vertexShader:Up,fragmentShader:Fp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bp extends zn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,p=null,g=null,u=null,m=null,x=null;const T=typeof XRWebGLBinding<"u",h=new Op,d={},M=t.getContextAttributes();let A=null,E=null;const R=[],b=[],f=new Oe;let S=null,N=null;const P=new Gt;P.viewport=new rt;const I=new Gt;I.viewport=new rt;const G=[P,I],q=new Zc;let L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let pe=R[K];return pe===void 0&&(pe=new Nr,R[K]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(K){let pe=R[K];return pe===void 0&&(pe=new Nr,R[K]=pe),pe.getGripSpace()},this.getHand=function(K){let pe=R[K];return pe===void 0&&(pe=new Nr,R[K]=pe),pe.getHandSpace()};function J(K){const pe=b.indexOf(K.inputSource);if(pe===-1)return;const ve=R[pe];ve!==void 0&&(ve.update(K.inputSource,K.frame,l||a),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",te);for(let K=0;K<R.length;K++){const pe=b[K];pe!==null&&(b[K]=null,R[K].disconnect(pe))}L=null,V=null,h.reset();for(const K in d)delete d[K];if(e.setRenderTarget(A),m=null,u=null,g=null,r=null,E=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(f.width,f.height,!1),N!==null){const K=N.camera;K.fov=N.fov,K.zoom=N.zoom,K.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(r,t)),g},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",z),r.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(f),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ae=null,me=null;M.depth&&(me=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=M.stencil?An:bn,Ae=M.stencil?ii:tn);const Ie={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};g=this.getBinding(),u=g.createProjectionLayer(Ie),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),E=new en(u.textureWidth,u.textureHeight,{format:jt,type:It,depthTexture:new ri(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ve={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new en(m.framebufferWidth,m.framebufferHeight,{format:jt,type:It,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Le.setContext(r),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function te(K){for(let pe=0;pe<K.removed.length;pe++){const ve=K.removed[pe],Ae=b.indexOf(ve);Ae>=0&&(b[Ae]=null,R[Ae].disconnect(ve))}for(let pe=0;pe<K.added.length;pe++){const ve=K.added[pe];let Ae=b.indexOf(ve);if(Ae===-1){for(let Ie=0;Ie<R.length;Ie++)if(Ie>=b.length){b.push(ve),Ae=Ie;break}else if(b[Ie]===null){b[Ie]=ve,Ae=Ie;break}if(Ae===-1)break}const me=R[Ae];me&&me.connect(ve)}}function W(K,pe){pe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(pe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let pe=K.near,ve=K.far;h.texture!==null&&(h.depthNear>0&&(pe=h.depthNear),h.depthFar>0&&(ve=h.depthFar)),q.near=I.near=P.near=pe,q.far=I.far=P.far=ve,(L!==q.near||V!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),L=q.near,V=q.far),q.layers.mask=K.layers.mask|6,P.layers.mask=q.layers.mask&-5,I.layers.mask=q.layers.mask&-3;const Ae=K.parent,me=q.cameras;W(q,Ae);for(let Ie=0;Ie<me.length;Ie++)W(me[Ie],Ae);q.projectionMatrix.copy(P.projectionMatrix),q.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&K.isPerspectiveCamera&&(N={camera:K,fov:K.fov,zoom:K.zoom}),Q(K,q,Ae)};function Q(K,pe,ve){ve===null?K.matrix.copy(pe.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(pe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(pe.projectionMatrix),K.projectionMatrixInverse.copy(pe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Bs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(K){c=K,u!==null&&(u.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(q)},this.getCameraTexture=function(K){return d[K]};let j=null;function Se(K,pe){if(p=pe.getViewerPose(l||a),x=pe,p!==null){const ve=p.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Ae=!1;ve.length!==q.cameras.length&&(q.cameras.length=0,Ae=!0);for(let Re=0;Re<ve.length;Re++){const Ye=ve[Re];let $e=null;if(m!==null)$e=m.getViewport(Ye);else{const gt=g.getViewSubImage(u,Ye);$e=gt.viewport,Re===0&&(e.setRenderTargetTextures(E,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(E))}let ze=G[Re];ze===void 0&&(ze=new Gt,ze.layers.enable(Re),ze.viewport=new rt,G[Re]=ze),ze.matrix.fromArray(Ye.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ye.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set($e.x,$e.y,$e.width,$e.height),Re===0&&(q.matrix.copy(ze.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Ae===!0&&q.cameras.push(ze)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){g=n.getBinding();const Re=g.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&h.init(Re,r.renderState)}if(me&&me.includes("camera-access")&&T){e.state.unbindTexture(),g=n.getBinding();for(let Re=0;Re<ve.length;Re++){const Ye=ve[Re].camera;if(Ye){let $e=d[Ye];$e||($e=new Ko,d[Ye]=$e);const ze=g.getCameraImage(Ye);$e.sourceTexture=ze}}}}for(let ve=0;ve<R.length;ve++){const Ae=b[ve],me=R[ve];Ae!==null&&me!==void 0&&me.update(Ae,pe,l||a)}j&&j(K,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}const Le=new Qo;Le.setAnimationLoop(Se),this.setAnimationLoop=function(K){j=K},this.dispose=function(){}}}const zp=new tt,ll=new Pe;ll.set(-1,0,0,0,1,0,0,0,1);function Gp(i,e){function t(h,d){h.matrixAutoUpdate===!0&&h.updateMatrix(),d.value.copy(h.matrix)}function n(h,d){d.color.getRGB(h.fogColor.value,Zo(i)),d.isFog?(h.fogNear.value=d.near,h.fogFar.value=d.far):d.isFogExp2&&(h.fogDensity.value=d.density)}function r(h,d,M,A,E){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(h,d):d.isMeshLambertMaterial?(s(h,d),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(h,d),g(h,d)):d.isMeshPhongMaterial?(s(h,d),p(h,d),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(h,d),u(h,d),d.isMeshPhysicalMaterial&&m(h,d,E)):d.isMeshMatcapMaterial?(s(h,d),x(h,d)):d.isMeshDepthMaterial?s(h,d):d.isMeshDistanceMaterial?(s(h,d),T(h,d)):d.isMeshNormalMaterial?s(h,d):d.isLineBasicMaterial?(a(h,d),d.isLineDashedMaterial&&o(h,d)):d.isPointsMaterial?c(h,d,M,A):d.isSpriteMaterial?l(h,d):d.isShadowMaterial?(h.color.value.copy(d.color),h.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(h,d){h.opacity.value=d.opacity,d.color&&h.diffuse.value.copy(d.color),d.emissive&&h.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(h.map.value=d.map,t(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.bumpMap&&(h.bumpMap.value=d.bumpMap,t(d.bumpMap,h.bumpMapTransform),h.bumpScale.value=d.bumpScale,d.side===Pt&&(h.bumpScale.value*=-1)),d.normalMap&&(h.normalMap.value=d.normalMap,t(d.normalMap,h.normalMapTransform),h.normalScale.value.copy(d.normalScale),d.side===Pt&&h.normalScale.value.negate()),d.displacementMap&&(h.displacementMap.value=d.displacementMap,t(d.displacementMap,h.displacementMapTransform),h.displacementScale.value=d.displacementScale,h.displacementBias.value=d.displacementBias),d.emissiveMap&&(h.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,h.emissiveMapTransform)),d.specularMap&&(h.specularMap.value=d.specularMap,t(d.specularMap,h.specularMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest);const M=e.get(d),A=M.envMap,E=M.envMapRotation;A&&(h.envMap.value=A,h.envMapRotation.value.setFromMatrix4(zp.makeRotationFromEuler(E)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&h.envMapRotation.value.premultiply(ll),h.reflectivity.value=d.reflectivity,h.ior.value=d.ior,h.refractionRatio.value=d.refractionRatio),d.lightMap&&(h.lightMap.value=d.lightMap,h.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,h.lightMapTransform)),d.aoMap&&(h.aoMap.value=d.aoMap,h.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,h.aoMapTransform))}function a(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,d.map&&(h.map.value=d.map,t(d.map,h.mapTransform))}function o(h,d){h.dashSize.value=d.dashSize,h.totalSize.value=d.dashSize+d.gapSize,h.scale.value=d.scale}function c(h,d,M,A){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.size.value=d.size*M,h.scale.value=A*.5,d.map&&(h.map.value=d.map,t(d.map,h.uvTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function l(h,d){h.diffuse.value.copy(d.color),h.opacity.value=d.opacity,h.rotation.value=d.rotation,d.map&&(h.map.value=d.map,t(d.map,h.mapTransform)),d.alphaMap&&(h.alphaMap.value=d.alphaMap,t(d.alphaMap,h.alphaMapTransform)),d.alphaTest>0&&(h.alphaTest.value=d.alphaTest)}function p(h,d){h.specular.value.copy(d.specular),h.shininess.value=Math.max(d.shininess,1e-4)}function g(h,d){d.gradientMap&&(h.gradientMap.value=d.gradientMap)}function u(h,d){h.metalness.value=d.metalness,d.metalnessMap&&(h.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,h.metalnessMapTransform)),h.roughness.value=d.roughness,d.roughnessMap&&(h.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,h.roughnessMapTransform)),d.envMap&&(h.envMapIntensity.value=d.envMapIntensity)}function m(h,d,M){h.ior.value=d.ior,d.diffuseRoughness>0&&(h.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(h.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,h.diffuseRoughnessMapTransform))),d.sheen>0&&(h.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),h.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(h.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,h.sheenColorMapTransform)),d.sheenRoughnessMap&&(h.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,h.sheenRoughnessMapTransform))),d.clearcoat>0&&(h.clearcoat.value=d.clearcoat,h.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(h.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,h.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(h.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&h.clearcoatNormalScale.value.negate())),d.dispersion>0&&(h.dispersion.value=d.dispersion),d.retroreflectivity>0&&(h.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(h.iridescence.value=d.iridescence,h.iridescenceIOR.value=d.iridescenceIOR,h.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,h.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(h.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,h.iridescenceMapTransform)),d.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),d.transmission>0&&(h.transmission.value=d.transmission,h.transmissionSamplerMap.value=M.texture,h.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(h.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,h.transmissionMapTransform)),h.thickness.value=d.thickness,d.thicknessMap&&(h.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=d.attenuationDistance,h.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(h.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(h.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=d.specularIntensity,h.specularColor.value.copy(d.specularColor),d.specularColorMap&&(h.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,h.specularColorMapTransform)),d.specularIntensityMap&&(h.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,h.specularIntensityMapTransform))}function x(h,d){d.matcap&&(h.matcap.value=d.matcap)}function T(h,d){const M=e.get(d).light;h.referencePosition.value.setFromMatrixPosition(M.matrixWorld),h.nearDistance.value=M.shadow.camera.near,h.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Hp(i,e,t,n){let r={},s={};function a(M,A){const E=A.program;n.uniformBlockBinding(M,E,r[M.id])}function o(M,A){let E=r[M.id];E===void 0&&(x(M),E=c(M),r[M.id]=E,M.addEventListener("dispose",h));const R=A.program;n.updateUBOMapping(M,R);const b=e.render.frame;s[M.id]!==b&&(l(M),s[M.id]=b)}function c(M){const A=i.createBuffer(),E=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,E,R),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function l(M){const A=r[M.id],E=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let b=0,f=E.length;b<f;b++){const S=E[b];if(Array.isArray(S))for(let N=0,P=S.length;N<P;N++)p(S[N],b,N,R);else p(S,b,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,A,E,R){if(u(M,A,E,R)===!0){const b=M.__offset,f=M.value;if(Array.isArray(f)){let S=0;for(let N=0;N<f.length;N++){const P=f[N],I=T(P,!0);g(P,M.__data,S),S+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else g(f,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,M.__data)}}function g(M,A,E){typeof M=="number"||typeof M=="boolean"?A[E]=M:M.isMatrix3?(A[E]=M.elements[0],A[E+1]=M.elements[1],A[E+2]=M.elements[2],A[E+3]=0,A[E+4]=M.elements[3],A[E+5]=M.elements[4],A[E+6]=M.elements[5],A[E+7]=0,A[E+8]=M.elements[6],A[E+9]=M.elements[7],A[E+10]=M.elements[8],A[E+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-E),E):M.toArray(A,E)}function u(M,A,E,R){const b=M.value,f=A+"_"+E;if(Array.isArray(b)){R[f]===void 0&&(R[f]=[]);const S=R[f];let N=!1;for(let P=0;P<b.length;P++)m(b[P],S,P)===!0&&(N=!0);return N}return m(b,R,f)}function m(M,A,E){if(A[E]===void 0)return typeof M=="number"||typeof M=="boolean"?A[E]=M:ArrayBuffer.isView(M)?A[E]=M.slice():A[E]=M.clone(),!0;{const R=A[E];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return A[E]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function x(M){const A=M.uniforms;let E=0;const R=16;for(let f=0,S=A.length;f<S;f++){const N=Array.isArray(A[f])?A[f]:[A[f]];for(let P=0,I=N.length;P<I;P++){const G=N[P],q=Array.isArray(G.value)?G.value:[G.value],L=Array.isArray(A[f])||Array.isArray(G.value);let V=E;for(let z=0,te=q.length;z<te;z++){const W=q[z],Q=T(W,L),j=E%R,Se=j%Q.boundary,Le=j+Se;E+=Se,Le!==0&&R-Le<Q.storage&&(E+=R-Le),z===0&&(V=E),E+=Q.storage}const J=G.type==="int"?Int32Array:G.type==="uint"?Uint32Array:Float32Array;G.__data=new J((E-V)/Float32Array.BYTES_PER_ELEMENT),G.__offset=V}}const b=E%R;return b>0&&(E+=R-b),M.__size=E,M.__cache={},this}function T(M,A){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=16,E.storage=48):M.isMatrix4?(E.boundary=16,E.storage=64):M.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(E.boundary=16,E.storage=M.byteLength):we("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(E.boundary=16,E.storage=Math.ceil(E.storage/16)*16),E}function h(M){const A=M.target;A.removeEventListener("dispose",h),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const M in r)i.deleteBuffer(r[M]);r={},s={}}return{bind:a,update:o,dispose:d}}const Vp=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let $t=null;function kp(){return $t===null&&($t=new Dc(Vp,16,16,On,nn),$t.name="DFG_LUT",$t.minFilter=Ct,$t.magFilter=Ct,$t.wrapS=dn,$t.wrapT=dn,$t.generateMipmaps=!1,$t.needsUpdate=!0),$t}class Wp{constructor(e={}){const{canvas:t=rc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:u=!1,outputBufferType:m=It}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;const T=m,h=new Set([Ks,Ys,qs]),d=new Set([It,tn,Ei,ii,Ws,Xs]),M=new Uint32Array(4),A=new Int32Array(4),E={textures:[],min:[],max:[],resolution:[]};let R=null,b=null;const f=[],S=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,G=null,q=null,L=null,V=null;this._outputColorSpace=zt;let J=0,z=0,te=null,W=-1,Q=null;const j=new rt,Se=new rt;let Le=null;const K=new Be(0);let pe=0,ve=t.width,Ae=t.height,me=1,Ie=null,st=null;const Re=new rt(0,0,ve,Ae),Ye=new rt(0,0,ve,Ae);let $e=!1;const ze=new Ti,gt=new Js;let lt=!1,wt=!1;const nt=new tt,Kt=new B,ht=new rt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Ft(){return te===null?me:1}let D=n;function Ot(v,C){return t.getContext(v,C)}let je,et,de,ct,be,Ce,y,_,F,ee,$,re,ce,X,Y,ae,w,Z,k,oe,ie,se,ye;try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vs}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",he,!1),D===null){const C="webgl2";if(D=Ot(C,v),D===null)throw Ot(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(v){throw t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",he,!1),qe("WebGLRenderer: "+v.message),v}function Ue(){je=new qh(D),je.init(),ie=new Np(D,je),et=new Uh(D,je,e,ie),de=new Dp(D,je),et.reversedDepthBuffer&&u&&de.buffers.depth.setReversed(!0),q=D.createFramebuffer(),L=D.createFramebuffer(),V=D.createFramebuffer(),ct=new Zh(D),be=new vp,Ce=new Ip(D,je,de,be,et,ie,ct),y=new Xh(P),_=new Jc(D),se=new Ih(D,_),F=new Yh(D,_,ct,se),ee=new Jh(D,F,_,se,ct),Z=new $h(D,et,Ce),Y=new Fh(be),$=new _p(P,y,je,et,se,Y),re=new Gp(P,be),ce=new Mp,X=new bp(je),w=new Dh(P,y,de,ee,x,c),ae=new Lp(P,ee,et),ye=new Hp(D,ct,et,de),k=new Nh(D,je,ct),oe=new Kh(D,je,ct),ct.programs=$.programs,P.capabilities=et,P.extensions=je,P.properties=be,P.renderLists=ce,P.shadowMap=ae,P.state=de,P.info=ct}T!==It&&(N=new jh(T,t.width,t.height,o,r,s));const ne=new Bp(P,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=je.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=je.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(v){v!==void 0&&(me=v,this.setSize(ve,Ae,!1))},this.getSize=function(v){return v.set(ve,Ae)},this.setSize=function(v,C,H=!0){if(ne.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=v,Ae=C,t.width=Math.floor(v*me),t.height=Math.floor(C*me),H===!0&&(t.style.width=v+"px",t.style.height=C+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(ve*me,Ae*me).floor()},this.setDrawingBufferSize=function(v,C,H){ve=v,Ae=C,me=H,t.width=Math.floor(v*H),t.height=Math.floor(C*H),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(T===It){qe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(j)},this.getViewport=function(v){return v.copy(Re)},this.setViewport=function(v,C,H,U){v.isVector4?Re.set(v.x,v.y,v.z,v.w):Re.set(v,C,H,U),de.viewport(j.copy(Re).multiplyScalar(Ft()).round())},this.getScissor=function(v){return v.copy(Ye)},this.setScissor=function(v,C,H,U){v.isVector4?Ye.set(v.x,v.y,v.z,v.w):Ye.set(v,C,H,U),de.scissor(Se.copy(Ye).multiplyScalar(Ft()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(v){de.setScissorTest($e=v)},this.setOpaqueSort=function(v){Ie=v},this.setTransparentSort=function(v){st=v},this.getClearColor=function(v){return v.copy(w.getClearColor())},this.setClearColor=function(){w.setClearColor(...arguments)},this.getClearAlpha=function(){return w.getClearAlpha()},this.setClearAlpha=function(){w.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,H=!0){let U=0;if(v){let O=!1;if(te!==null){const ue=te.texture.format;O=h.has(ue)}if(O){const ue=te.texture.type,_e=d.has(ue),le=w.getClearColor(),ge=w.getClearAlpha(),Ee=le.r,De=le.g,Ge=le.b;_e?(M[0]=Ee,M[1]=De,M[2]=Ge,M[3]=ge,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=Ee,A[1]=De,A[2]=Ge,A[3]=ge,D.clearBufferiv(D.COLOR,0,A))}else U|=D.COLOR_BUFFER_BIT}C&&(U|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(U|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&D.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),G=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",he,!1),w.dispose(),ce.dispose(),X.dispose(),Ce.dispose(),be.dispose(),y.dispose(),ee.dispose(),F.dispose(),se.dispose(),ye.dispose(),$.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",la),ne.removeEventListener("sessionend",ca),wn.stop()};function Te(v){v.preventDefault(),Ta("WebGLRenderer: Context Lost."),I=!0}function Ne(){Ta("WebGLRenderer: Context Restored."),I=!1;const v=ct.autoReset,C=ae.enabled,H=ae.autoUpdate,U=ae.needsUpdate,O=ae.type;Ue(),ct.autoReset=v,ae.enabled=C,ae.autoUpdate=H,ae.needsUpdate=U,ae.type=O}function he(v){qe("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ke(v){const C=v.target;C.removeEventListener("dispose",Ke),ft(C)}function ft(v){mn(v),be.remove(v)}function mn(v){const C=be.get(v).programs;C!==void 0&&(C.forEach(function(H){$.releaseProgram(H)}),v.isShaderMaterial&&$.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,H,U,O,ue){C===null&&(C=Nt);const _e=O.isMesh&&O.matrixWorld.determinantAffine()<0,le=Sl(v,C,H,U,O);de.setMaterial(U,_e);let ge=H.index,Ee=1;if(U.wireframe===!0){if(ge=F.getWireframeAttribute(H),ge===void 0)return;Ee=2}const De=H.drawRange,Ge=H.attributes.position;let xe=De.start*Ee,He=(De.start+De.count)*Ee;ue!==null&&(xe=Math.max(xe,ue.start*Ee),He=Math.min(He,(ue.start+ue.count)*Ee)),ge!==null?(xe=Math.max(xe,0),He=Math.min(He,ge.count)):Ge!=null&&(xe=Math.max(xe,0),He=Math.min(He,Ge.count));const at=He-xe;if(at<0||at===1/0)return;se.setup(O,U,le,H,ge);let Qe,Je=k;if(ge!==null&&(Qe=_.get(ge),Je=oe,Je.setIndex(Qe)),O.isMesh)U.wireframe===!0?(de.setLineWidth(U.wireframeLinewidth*Ft()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(O.isLine){let xt=U.linewidth;xt===void 0&&(xt=1),de.setLineWidth(xt*Ft()),O.isLineSegments?Je.setMode(D.LINES):O.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else O.isPoints?Je.setMode(D.POINTS):O.isSprite&&Je.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(je.get("WEBGL_multi_draw"))Je.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const xt=O._multiDrawStarts,Me=O._multiDrawCounts,Tt=O._multiDrawCount,Xe=ge?_.get(ge).bytesPerElement:1,Cn=be.get(U).currentProgram.getUniforms();for(let Mt=0;Mt<Tt;Mt++)Cn.setValue(D,"_gl_DrawID",Mt),Je.render(xt[Mt]/Xe,Me[Mt])}else if(O.isInstancedMesh)Je.renderInstances(xe,at,O.count);else if(H.isInstancedBufferGeometry){const xt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,xt);Je.renderInstances(xe,at,Me)}else Je.render(xe,at)};function oa(v,C,H,U){G!==null&&v.isNodeMaterial&&G.setObject(U,v),lt===!0&&Y.setState(v,H,!1),v.transparent===!0&&v.side===un&&v.forceSinglePass===!1?(v.side=Pt,v.needsUpdate=!0,ui(v,C,U),v.side=Fn,v.needsUpdate=!0,ui(v,C,U),v.side=un):ui(v,C,U)}this.compile=function(v,C,H=null){H===null&&(H=v),G!==null&&G.renderStart(v,C,H),b=X.get(H),b.init(C),S.push(b),H.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),v!==H&&v.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(b.pushLight(O),O.castShadow&&b.pushShadow(O))}),b.setupLights(),G!==null&&G.updateLights(b.state.lightsArray),wt=this.localClippingEnabled,lt=Y.init(this.clippingPlanes,wt),lt===!0&&Y.setGlobalState(this.clippingPlanes,C),G!==null&&ae.render(b.state.shadowsArray,H,C);const U=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const le=ue[_e];oa(le,H,C,O),U.add(le)}else oa(ue,H,C,O),U.add(ue)}),b=S.pop(),G!==null&&G.renderEnd(),U},this.compileAsync=function(v,C,H=null){const U=this.compile(v,C,H);return new Promise(O=>{function ue(){if(U.forEach(function(_e){const ge=be.get(_e).currentProgram;(ge===void 0||ge.isReady())&&U.delete(_e)}),U.size===0){O(v);return}setTimeout(ue,10)}je.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Sr=null;function xl(v){Sr&&Sr(v)}function la(){wn.stop()}function ca(){wn.start()}const wn=new Qo;wn.setAnimationLoop(xl),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(v){Sr=v,ne.setAnimationLoop(v),v===null?wn.stop():wn.start()},ne.addEventListener("sessionstart",la),ne.addEventListener("sessionend",ca),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;G!==null&&G.renderStart(v,C);const H=ne.enabled===!0&&ne.isPresenting===!0,U=N!==null&&(te===null||H)&&N.begin(P,te);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(C),C=ne.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,C,te),b=X.get(v,S.length),b.init(C),b.state.textureUnits=Ce.getTextureUnits(),S.push(b),nt.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?gt.setFromArrayCamera(C):ze.setFromProjectionMatrix(nt,qt,C.reversedDepth),wt=this.localClippingEnabled,lt=Y.init(this.clippingPlanes,wt),R=ce.get(v,f.length),R.init(),f.push(R),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){const _e=P.xr.getDepthSensingMesh();_e!==null&&Er(_e,C,-1/0,P.sortObjects)}Er(v,C,0,P.sortObjects),R.finish(),G!==null&&G.updateLights(b.state.lightsArray),P.sortObjects===!0&&R.sort(Ie,st),Ut=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Ut&&w.addToRenderList(R,v),this.info.autoReset===!0&&this.info.reset(),lt===!0&&Y.beginShadows();const O=b.state.shadowsArray;if(ae.render(O,v,C),lt===!0&&Y.endShadows(),(U&&N.hasRenderPass())===!1){const _e=R.opaque,le=R.transmissive;if(b.setupLights(),C.isArrayCamera){const ge=C.cameras;if(le.length>0)for(let Ee=0,De=ge.length;Ee<De;Ee++){const Ge=ge[Ee];da(_e,le,v,Ge)}Ut&&w.render(v);for(let Ee=0,De=ge.length;Ee<De;Ee++){const Ge=ge[Ee];ua(R,v,Ge,Ge.viewport)}}else le.length>0&&da(_e,le,v,C),Ut&&w.render(v),ua(R,v,C)}te!==null&&z===0&&(Ce.updateMultisampleRenderTarget(te),Ce.updateRenderTargetMipmap(te)),U&&N.end(P),v.isScene===!0&&v.onAfterRender(P,v,C),se.resetDefaultState(),W=-1,Q=null,S.pop(),S.length>0?(b=S[S.length-1],Ce.setTextureUnits(b.state.textureUnits),lt===!0&&Y.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,f.pop(),f.length>0?R=f[f.length-1]:R=null,G!==null&&G.renderEnd()};function Er(v,C,H,U){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)H=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){const _e=C.isArrayCamera?gt:ze;if(!v.frustumCulled||v.intersectsFrustum(_e)){U&&ht.setFromMatrixPosition(v.matrixWorld).applyMatrix4(nt);const le=ee.update(v),ge=v.material;ge.visible&&R.push(v,le,ge,H,ht.z,null,C)}}else if(v.isMesh||v.isLine||v.isPoints){const _e=C.isArrayCamera?gt:ze;if(!v.frustumCulled||v.intersectsFrustum(_e)){const le=ee.update(v),ge=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),ht.copy(v.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ht.copy(le.boundingSphere.center)),ht.applyMatrix4(v.matrixWorld).applyMatrix4(nt)),Array.isArray(ge)){const Ee=le.groups;for(let De=0,Ge=Ee.length;De<Ge;De++){const xe=Ee[De],He=ge[xe.materialIndex];He&&He.visible&&R.push(v,le,He,H,ht.z,xe,C)}}else ge.visible&&R.push(v,le,ge,H,ht.z,null,C)}}}const ue=v.children;for(let _e=0,le=ue.length;_e<le;_e++)Er(ue[_e],C,H,U)}function ua(v,C,H,U){const{opaque:O,transmissive:ue,transparent:_e}=v;b.setupLightsView(H),lt===!0&&Y.setGlobalState(P.clippingPlanes,H),U&&de.viewport(j.copy(U)),O.length>0&&Li(O,C,H),ue.length>0&&Li(ue,C,H),_e.length>0&&Li(_e,C,H),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function da(v,C,H,U){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[U.id]===void 0){const xe=je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[U.id]=new en(1,1,{generateMipmaps:!0,type:xe?nn:It,minFilter:Tn,samples:Math.max(4,et.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ke.workingColorSpace})}const ue=b.state.transmissionRenderTarget[U.id],_e=U.viewport||j;ue.setSize(_e.z*P.transmissionResolutionScale,_e.w*P.transmissionResolutionScale);const le=P.getRenderTarget(),ge=P.getActiveCubeFace(),Ee=P.getActiveMipmapLevel();P.setRenderTarget(ue),P.getClearColor(K),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Ut&&w.render(H);const De=P.toneMapping;P.toneMapping=hn;const Ge=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),b.setupLightsView(U),lt===!0&&Y.setGlobalState(P.clippingPlanes,U),Li(v,H,U),Ce.updateMultisampleRenderTarget(ue),Ce.updateRenderTargetMipmap(ue),je.has("WEBGL_multisampled_render_to_texture")===!1){let xe=!1;for(let He=0,at=C.length;He<at;He++){const Qe=C[He],{object:Je,geometry:xt,material:Me,group:Tt}=Qe;if(Me.side===un&&Je.layers.test(U.layers)){const Xe=Me.side;Me.side=Pt,Me.needsUpdate=!0,ha(Je,H,U,xt,Me,Tt),Me.side=Xe,Me.needsUpdate=!0,xe=!0}}xe===!0&&(Ce.updateMultisampleRenderTarget(ue),Ce.updateRenderTargetMipmap(ue))}P.setRenderTarget(le,ge,Ee),P.setClearColor(K,pe),Ge!==void 0&&(U.viewport=Ge),P.toneMapping=De}function Li(v,C,H){const U=C.isScene===!0?C.overrideMaterial:null;for(let O=0,ue=v.length;O<ue;O++){const _e=v[O],{object:le,geometry:ge,group:Ee}=_e;let De=_e.material;De.allowOverride===!0&&U!==null&&(De=U),le.layers.test(H.layers)&&ha(le,C,H,ge,De,Ee)}}function ha(v,C,H,U,O,ue){G!==null&&O.isNodeMaterial&&G.setObject(v,O),v.onBeforeRender(P,C,H,U,O,ue),v.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(P,C,H,U,v,ue),O.transparent===!0&&O.side===un&&O.forceSinglePass===!1?(O.side=Pt,O.needsUpdate=!0,P.renderBufferDirect(H,C,U,O,v,ue),O.side=Fn,O.needsUpdate=!0,P.renderBufferDirect(H,C,U,O,v,ue),O.side=un):P.renderBufferDirect(H,C,U,O,v,ue),v.onAfterRender(P,C,H,U,O,ue)}function fa(v){let C=0;for(const H of v)H.texture!==null&&C++;return C}function ui(v,C,H){C.isScene!==!0&&(C=Nt);const U=be.get(v),O=b.state.lights,ue=b.state.shadowsArray,_e=O.state.version,le=$.getParameters(v,O.state,ue,C,H,b.state.lightProbeGridArray),ge=$.getProgramCacheKey(le);let Ee=U.programs;U.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,U.fog=C.fog;const De=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;U.envMap=y.get(v.envMap||U.environment,De),U.envMapRotation=U.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Ee===void 0&&(v.addEventListener("dispose",Ke),Ee=new Map,U.programs=Ee,U.programVariants=new Map);let Ge=Ee.get(ge);if(Ge!==void 0){if(U.currentProgram===Ge&&U.lightsStateVersion===_e)return ma(v,le),Ge}else le.uniforms=$.getUniforms(v),G!==null&&v.isNodeMaterial&&G.build(v,H,le),v.onBeforeCompile(le,P),Ge=$.acquireProgram(le,ge),Ee.set(ge,Ge),U.uniforms=le.uniforms;const xe=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(xe.clippingPlanes=Y.uniform),ma(v,le),U.needsLights=yl(v),U.lightsStateVersion=_e,U.needsLights&&(xe.ambientLightColor.value=O.state.ambient,xe.lightProbe.value=O.state.probe,xe.sunLights.value=O.state.sun,xe.sunLightShadows.value=O.state.sunShadow,xe.directionalLights.value=O.state.directional,xe.directionalLightShadows.value=O.state.directionalShadow,xe.spotLights.value=O.state.spot,xe.spotLightShadows.value=O.state.spotShadow,xe.rectAreaLights.value=O.state.rectArea,xe.ltc_1.value=O.state.rectAreaLTC1,xe.ltc_2.value=O.state.rectAreaLTC2,xe.pointLights.value=O.state.point,xe.pointLightShadows.value=O.state.pointShadow,xe.hemisphereLights.value=O.state.hemi,xe.sunShadowMatrix.value=O.state.sunShadowMatrix,xe.sunShadowCascade.value=O.state.sunShadowCascade,xe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,xe.spotLightMatrix.value=O.state.spotLightMatrix,xe.spotLightMap.value=O.state.spotLightMap,xe.pointShadowMatrix.value=O.state.pointShadowMatrix),U.numLightProbeGrids=fa(b.state.lightProbeGridArray),U.currentProgram=Ge,U.uniformsList=null,Ge}function Ml(v,C,H,U,O){const ue=be.get(v),_e=ue.currentProgram.id+","+U+","+O;let le=ue.programVariants.get(_e);return le===void 0?(le=ui(v,C,H),ue.programVariants.set(_e,le)):(ue.currentProgram=le,ue.uniformsList=null,ue.outputColorSpace=U,ue.toneMapping=O),le}function pa(v){if(v.uniformsList===null){const C=v.currentProgram.getUniforms();v.uniformsList=lr.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function ma(v,C){const H=be.get(v);H.outputColorSpace=C.outputColorSpace,H.batching=C.batching,H.batchingColor=C.batchingColor,H.instancing=C.instancing,H.instancingColor=C.instancingColor,H.instancingMorph=C.instancingMorph,H.skinning=C.skinning,H.morphTargets=C.morphTargets,H.morphNormals=C.morphNormals,H.morphColors=C.morphColors,H.morphTargetsCount=C.morphTargetsCount,H.numClippingPlanes=C.numClippingPlanes,H.numIntersection=C.numClipIntersection,H.vertexAlphas=C.vertexAlphas,H.vertexTangents=C.vertexTangents,H.toneMapping=C.toneMapping}function Sl(v,C,H,U,O){C.isScene!==!0&&(C=Nt),Ce.resetTextureUnits();const ue=C.fog,_e=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?C.environment:null,le=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ke.workingColorSpace,ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Ee=y.get(U.envMap||_e,ge),De=U.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),xe=!!H.morphAttributes.position,He=!!H.morphAttributes.normal,at=!!H.morphAttributes.color;let Qe=hn;U.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Qe=P.toneMapping);const Je=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xt=Je!==void 0?Je.length:0,Me=be.get(U),Tt=b.state.lights;if(lt===!0&&(wt===!0||v!==Q)){const it=v===Q&&U.id===W;Y.setState(U,v,it)}let Xe=!1,Cn=!1;U.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Tt.state.version||O.isBatchedMesh&&Me.batching===!1||!O.isBatchedMesh&&Me.batching===!0||O.isBatchedMesh&&Me.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Me.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Me.instancing===!1||!O.isInstancedMesh&&Me.instancing===!0||O.isSkinnedMesh&&Me.skinning===!1||!O.isSkinnedMesh&&Me.skinning===!0||O.isInstancedMesh&&Me.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Me.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Me.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Me.instancingMorph===!1&&O.morphTexture!==null||Me.envMap!==Ee||U.fog===!0&&Me.fog!==ue||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Y.numPlanes||Me.numIntersection!==Y.numIntersection)||Me.vertexAlphas!==De||Me.vertexTangents!==Ge||Me.morphTargets!==xe||Me.morphNormals!==He||Me.morphColors!==at||Me.morphTargetsCount!==xt||Me.numLightProbeGrids!==fa(b.state.lightProbeGridArray)?Xe=!0:(Me.outputColorSpace!==le||Me.toneMapping!==Qe)&&(Cn=!0):(Xe=!0,Me.__version=U.version);let Mt=Me.currentProgram;(Xe===!0||Cn===!0)&&(Mt=Cn===!0?Ml(U,C,O,le,Qe):ui(U,C,O),G&&U.isNodeMaterial&&G.onUpdateProgram(U,Mt,Me));let Di=!1,gn=!1,Pn=!1;const We=Mt.getUniforms(),_t=Me.uniforms;if(de.useProgram(Mt.program)&&(Di=!0,gn=!0,Pn=!0),U.id!==W&&(W=U.id,gn=!0),Di||Q!==v){de.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),We.setValue(D,"projectionMatrix",v.projectionMatrix),We.setValue(D,"viewMatrix",v.matrixWorldInverse);const pt=We.map.cameraPosition;pt!==void 0&&pt.setValue(D,Kt.setFromMatrixPosition(v.matrixWorld)),et.logarithmicDepthBuffer&&We.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&We.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,gn=!0,Pn=!0)}if(Me.needsLights&&(Tt.state.sunShadowMap.length>0&&We.setValue(D,"sunShadowMap",Tt.state.sunShadowMap,Ce),Tt.state.directionalShadowMap.length>0&&We.setValue(D,"directionalShadowMap",Tt.state.directionalShadowMap,Ce),Tt.state.spotShadowMap.length>0&&We.setValue(D,"spotShadowMap",Tt.state.spotShadowMap,Ce),Tt.state.pointShadowMap.length>0&&We.setValue(D,"pointShadowMap",Tt.state.pointShadowMap,Ce)),O.isSkinnedMesh){We.setOptional(D,O,"bindMatrix"),We.setOptional(D,O,"bindMatrixInverse");const it=O.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),We.setValue(D,"boneTexture",it.boneTexture,Ce))}O.isBatchedMesh&&(We.setOptional(D,O,"batchingTexture"),We.setValue(D,"batchingTexture",O._matricesTexture,Ce),We.setOptional(D,O,"batchingIdTexture"),We.setValue(D,"batchingIdTexture",O._indirectTexture,Ce),We.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&We.setValue(D,"batchingColorTexture",O._colorsTexture,Ce));const Ht=H.morphAttributes;if((Ht.position!==void 0||Ht.normal!==void 0||Ht.color!==void 0)&&Z.update(O,H,Mt),(gn||Me.receiveShadow!==O.receiveShadow)&&(Me.receiveShadow=O.receiveShadow,We.setValue(D,"receiveShadow",O.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&C.environment!==null&&(_t.envMapIntensity.value=C.environmentIntensity),_t.dfgLUT!==void 0&&(_t.dfgLUT.value=kp()),gn){if(We.setValue(D,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&El(_t,Pn),ue&&U.fog===!0&&re.refreshFogUniforms(_t,ue),re.refreshMaterialUniforms(_t,U,me,Ae,b.state.transmissionRenderTarget[v.id]),Me.needsLights&&Me.numLightProbeGrids>0){const it=E;let pt=0;for(const rn of b.state.lightProbeGridArray)rn.texture!==null&&(it.textures[pt]=rn.texture,it.min[pt]=rn.boundingBox.min,it.max[pt]=rn.boundingBox.max,it.resolution[pt]=rn.resolution,pt++);for(const rn in it)it[rn].length=pt;_t.probesSH.value=it.textures,_t.probesMin.value=it.min,_t.probesMax.value=it.max,_t.probesResolution.value=it.resolution}lr.upload(D,pa(Me),_t,Ce)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(lr.upload(D,pa(Me),_t,Ce),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&We.setValue(D,"center",O.center),We.setValue(D,"modelViewMatrix",O.modelViewMatrix),We.setValue(D,"normalMatrix",O.normalMatrix),We.setValue(D,"modelMatrix",O.matrixWorld),U.uniformsGroups!==void 0){const it=U.uniformsGroups;for(let pt=0,rn=it.length;pt<rn;pt++){const _a=it[pt];ye.update(_a,Mt),ye.bind(_a,Mt)}}return Mt}function El(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function yl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(v,C,H){const U=be.get(v);U.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),be.get(v.texture).__webglTexture=C,be.get(v.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:H,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){const H=be.get(v);H.__webglFramebuffer=C,H.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,H=0){te=v,J=C,z=H;let U=null,O=!1,ue=!1;if(v){const le=be.get(v);if(le.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(D.FRAMEBUFFER,le.__webglFramebuffer),j.copy(v.viewport),Se.copy(v.scissor),Le=v.scissorTest,de.viewport(j),de.scissor(Se),de.setScissorTest(Le),W=-1;return}else if(le.__webglFramebuffer===void 0)Ce.setupRenderTarget(v);else if(le.__hasExternalTextures)Ce.rebindTextures(v,be.get(v.texture).__webglTexture,be.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const De=v.depthTexture;if(le.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ce.setupDepthRenderbuffer(v)}}const ge=v.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(ue=!0);const Ee=be.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ee[C])?U=Ee[C][H]:U=Ee[C],O=!0):v.samples>0&&Ce.useMultisampledRTT(v)===!1?U=be.get(v).__webglMultisampledFramebuffer:Array.isArray(Ee)?U=Ee[H]:U=Ee,j.copy(v.viewport),Se.copy(v.scissor),Le=v.scissorTest}else j.copy(Re).multiplyScalar(me).floor(),Se.copy(Ye).multiplyScalar(me).floor(),Le=$e;if(H!==0&&(U=q),de.bindFramebuffer(D.FRAMEBUFFER,U)&&de.drawBuffers(v,U),de.viewport(j),de.scissor(Se),de.setScissorTest(Le),O){const le=be.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+C,le.__webglTexture,H)}else if(ue){const le=C;for(let ge=0;ge<v.textures.length;ge++){const Ee=be.get(v.textures[ge]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ge,Ee.__webglTexture,H,le)}}else if(v!==null&&H!==0){const le=be.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,le.__webglTexture,H)}W=-1};function ga(v){const C=be.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=et.textureFormatReadable(v.format),C.__typeReadable=et.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,H,U,O,ue,_e,le=0){if(!(v&&v.isWebGLRenderTarget)){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge){de.bindFramebuffer(D.FRAMEBUFFER,ge);try{const Ee=v.textures[le],De=Ee.format,Ge=Ee.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const xe=ga(Ee);if(xe.__formatReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(xe.__typeReadable===!1){qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-U&&H>=0&&H<=v.height-O&&D.readPixels(C,H,U,O,ie.convert(De),ie.convert(Ge),ue)}finally{const Ee=te!==null?be.get(te).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(v,C,H,U,O,ue,_e,le=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=be.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&_e!==void 0&&(ge=ge[_e],Array.isArray(ge)&&(ge=ge[0])),ge)if(C>=0&&C<=v.width-U&&H>=0&&H<=v.height-O){de.bindFramebuffer(D.FRAMEBUFFER,ge);const Ee=v.textures[le],De=Ee.format,Ge=Ee.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+le);const xe=ga(Ee);if(xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,He),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(C,H,U,O,ie.convert(De),ie.convert(Ge),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const at=te!==null?be.get(te).__webglFramebuffer:null;de.bindFramebuffer(D.FRAMEBUFFER,at);const Qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await sc(D,Qe,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,He),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(He),D.deleteSync(Qe),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,H=0){const U=Math.pow(2,-H),O=Math.floor(v.image.width*U),ue=Math.floor(v.image.height*U),_e=C!==null?C.x:0,le=C!==null?C.y:0;Ce.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,_e,le,O,ue),de.unbindTexture()},this.copyTextureToTexture=function(v,C,H=null,U=null,O=0,ue=0){let _e,le,ge,Ee,De,Ge,xe,He,at;const Qe=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(H!==null)_e=H.max.x-H.min.x,le=H.max.y-H.min.y,ge=H.isBox3?H.max.z-H.min.z:1,Ee=H.min.x,De=H.min.y,Ge=H.isBox3?H.min.z:0;else{const We=Math.pow(2,-O);_e=Math.floor(Qe.width*We),le=Math.floor(Qe.height*We),v.isDataArrayTexture?ge=Qe.depth:v.isData3DTexture?ge=Math.floor(Qe.depth*We):ge=1,Ee=0,De=0,Ge=0}U!==null?(xe=U.x,He=U.y,at=U.z):(xe=0,He=0,at=0);const Je=ie.convert(C.format),xt=ie.convert(C.type);let Me;C.isData3DTexture?(Ce.setTexture3D(C,0),Me=D.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(Ce.setTexture2DArray(C,0),Me=D.TEXTURE_2D_ARRAY):(Ce.setTexture2D(C,0),Me=D.TEXTURE_2D),de.activeTexture(D.TEXTURE0),de.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),de.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),de.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const Tt=de.getParameter(D.UNPACK_ROW_LENGTH),Xe=de.getParameter(D.UNPACK_IMAGE_HEIGHT),Cn=de.getParameter(D.UNPACK_SKIP_PIXELS),Mt=de.getParameter(D.UNPACK_SKIP_ROWS),Di=de.getParameter(D.UNPACK_SKIP_IMAGES);de.pixelStorei(D.UNPACK_ROW_LENGTH,Qe.width),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe.height),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),de.pixelStorei(D.UNPACK_SKIP_ROWS,De),de.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge);const gn=v.isDataArrayTexture||v.isData3DTexture,Pn=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){const We=be.get(v),_t=be.get(C),Ht=be.get(We.__renderTarget),it=be.get(_t.__renderTarget);de.bindFramebuffer(D.READ_FRAMEBUFFER,Ht.__webglFramebuffer),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let pt=0;pt<ge;pt++)gn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(v).__webglTexture,O,Ge+pt),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(C).__webglTexture,ue,at+pt)),D.blitFramebuffer(Ee,De,Ee+_e,De+le,xe,He,xe+_e,He+le,D.DEPTH_BUFFER_BIT,D.NEAREST);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||be.has(v)){const We=be.get(v),_t=be.get(C);de.bindFramebuffer(D.READ_FRAMEBUFFER,L),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,V);for(let Ht=0;Ht<ge;Ht++)gn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,We.__webglTexture,O,Ge+Ht):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,We.__webglTexture,O),Pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,_t.__webglTexture,ue,at+Ht):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_t.__webglTexture,ue),O!==0?D.blitFramebuffer(Ee,De,Ee+_e,De+le,xe,He,xe+_e,He+le,D.COLOR_BUFFER_BIT,D.NEAREST):Pn?D.copyTexSubImage3D(Me,ue,xe,He,at+Ht,Ee,De,_e,le):D.copyTexSubImage2D(Me,ue,xe,He,Ee,De,_e,le);de.bindFramebuffer(D.READ_FRAMEBUFFER,null),de.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pn?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Me,ue,xe,He,at,_e,le,ge,Je,xt,Qe.data):C.isCompressedArrayTexture?D.compressedTexSubImage3D(Me,ue,xe,He,at,_e,le,ge,Je,Qe.data):D.texSubImage3D(Me,ue,xe,He,at,_e,le,ge,Je,xt,Qe):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ue,xe,He,_e,le,Je,xt,Qe.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ue,xe,He,Qe.width,Qe.height,Je,Qe.data):D.texSubImage2D(D.TEXTURE_2D,ue,xe,He,_e,le,Je,xt,Qe);de.pixelStorei(D.UNPACK_ROW_LENGTH,Tt),de.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Xe),de.pixelStorei(D.UNPACK_SKIP_PIXELS,Cn),de.pixelStorei(D.UNPACK_SKIP_ROWS,Mt),de.pixelStorei(D.UNPACK_SKIP_IMAGES,Di),ue===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&D.generateMipmap(Me),de.unbindTexture()},this.initRenderTarget=function(v){be.get(v).__webglFramebuffer===void 0&&Ce.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ce.setTextureCube(v,0):v.isData3DTexture?Ce.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ce.setTexture2DArray(v,0):Ce.setTexture2D(v,0),de.unbindTexture()},this.resetState=function(){J=0,z=0,te=null,de.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=ke._getUnpackColorSpace()}}document.querySelector("#app").innerHTML=`
<div class="app">
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-icon">T</div>
      <div><b>TATSKIE</b><small>SHARE NETWORK</small></div>
    </div>

    <div class="nav-label">WORKSPACE</div>
    <button class="nav active" data-page="dashboard">◈ Dashboard</button>
    <button class="nav" data-page="send">↗ Send files</button>
    <button class="nav" data-page="receive">⇩ Receive files</button>
    <button class="nav" data-page="devices">⌘ Devices</button>
    <button class="nav" data-page="settings">⚙ Settings</button>

    <div class="sidebar-bottom">
      <span class="online-dot"></span>
      SYSTEM READY
      <small>VERSION 988.0.3 · ARM64</small>
    </div>
  </aside>

  <main class="main">
    <header>
      <div>
        <div class="eyebrow">IMMERSIVE TRANSFER SYSTEM</div>
        <h1 id="page-title">Command Center</h1>
      </div>
      <div class="header-right">
        <span class="status"><i></i> ENGINE ONLINE</span>
        <div class="avatar">T</div>
      </div>
    </header>

    <section id="dashboard" class="page">
      <div class="hero">
        <div class="hero-copy">
          <div class="eyebrow">NEXT GENERATION FILE TRANSFER</div>
          <h2>Move data.<br><span>Without limits.</span></h2>
          <p>Secure, high-speed device-to-device file sharing powered by QUIC and verified by BLAKE3.</p>
          <div class="hero-buttons">
            <button class="primary" data-goto="send">↗ SEND FILES</button>
            <button class="secondary" data-goto="receive">⇩ RECEIVE FILES</button>
          </div>
        </div>
        <div class="orb-wrap">
          <canvas id="orb"></canvas>
          <div class="orb-caption">TATSKIE CORE <span>● ACTIVE</span></div>
        </div>
      </div>

      <div class="section-heading">SYSTEM OVERVIEW <span>LIVE DASHBOARD</span></div>
      <div class="stats">
        <article class="stat"><small>TRANSFER ENGINE</small><b class="cyan">QUIC</b><span>Transport protocol</span></article>
        <article class="stat"><small>INTEGRITY</small><b class="purple">BLAKE3</b><span>Content verification</span></article>
        <article class="stat"><small>RECOVERY</small><b class="green">ENABLED</b><span>Resumable transfers</span></article>
        <article class="stat"><small>VERSION</small><b>988.0.3</b><span>Immersive edition</span></article>
      </div>

      <div class="section-heading">QUICK ACTIONS</div>
      <div class="actions">
        <button data-goto="send"><b>↗</b><strong>Send a file</strong><small>Select a file to prepare a transfer</small></button>
        <button data-goto="receive"><b>⇩</b><strong>Receive a file</strong><small>Prepare to receive from another device</small></button>
        <button data-goto="devices"><b>⌘</b><strong>Manage devices</strong><small>View connection management</small></button>
      </div>
    </section>

    <section id="send" class="page hidden">
      <div class="panel">
        <div class="eyebrow">OUTGOING TRANSFER</div>
        <h2>Send your files</h2>
        <p>Select a file to prepare it for secure transfer.</p>
        <label class="dropzone" for="file-input">
          <div class="upload-icon">↑</div>
          <strong>Choose a file</strong>
          <span>Click to browse your device</span>
          <input type="file" id="file-input">
        </label>
        <div id="file-info" class="file-info">No file selected</div>
        <div class="notice">Transfer networking and device pairing will be connected in the next backend integration phase.</div>
      </div>
    </section>

    <section id="receive" class="page hidden">
      <div class="panel">
        <div class="eyebrow">INCOMING TRANSFER</div>
        <h2>Receive files</h2>
        <div class="receive-icon">⇩</div>
        <p>Incoming transfer listener is not connected yet.</p>
        <div class="notice">Your QUIC receiver and resumable transfer engine are already implemented in Rust. Next we will expose them through secure application commands.</div>
      </div>
    </section>

    <section id="devices" class="page hidden">
      <div class="panel">
        <div class="eyebrow">NETWORK MANAGEMENT</div>
        <h2>Your devices</h2>
        <div class="device-row"><span>●</span><div><b>Local device</b><small>Current application host</small></div><strong>LOCAL</strong></div>
        <div class="notice">Remote device discovery and authenticated pairing are not connected yet.</div>
      </div>
    </section>

    <section id="settings" class="page hidden">
      <div class="panel">
        <div class="eyebrow">APPLICATION CONFIGURATION</div>
        <h2>Settings</h2>
        <div class="setting"><span>Application version</span><b>988.0.3</b></div>
        <div class="setting"><span>Transport</span><b>QUIC</b></div>
        <div class="setting"><span>Integrity verification</span><b>BLAKE3</b></div>
        <div class="setting"><span>Resumable transfers</span><b>Enabled in engine</b></div>
        <div class="setting"><span>Maximum file size</span><b>10 GB default</b></div>
      </div>
    </section>

    <footer>TATSKIE-SHARE <span>SECURE DATA TRANSFER SYSTEM</span></footer>
  </main>
</div>`;const Xp=["dashboard","send","receive","devices","settings"];function cl(i){Xp.includes(i)&&(document.querySelectorAll(".page").forEach(e=>e.classList.toggle("hidden",e.id!==i)),document.querySelectorAll(".nav").forEach(e=>e.classList.toggle("active",e.dataset.page===i)),document.querySelector("#page-title").textContent=i==="dashboard"?"Command Center":i.charAt(0).toUpperCase()+i.slice(1))}document.querySelectorAll("[data-page]").forEach(i=>i.addEventListener("click",()=>cl(i.dataset.page)));document.querySelectorAll("[data-goto]").forEach(i=>i.addEventListener("click",()=>cl(i.dataset.goto)));document.querySelector("#file-input").addEventListener("change",i=>{const e=i.target.files[0];document.querySelector("#file-info").textContent=e?`${e.name} · ${(e.size/1048576).toFixed(2)} MB · Selected`:"No file selected"});const ai=document.querySelector("#orb"),Pi=new Tc,mr=new Gt(45,1,.1,100);mr.position.z=5;const na=new Wp({canvas:ai,alpha:!0,antialias:!0});na.setPixelRatio(Math.min(devicePixelRatio,2));const Ai=new _i;Pi.add(Ai);const qp=new js(1.05,4),Yp=new Hc({color:1342975,emissive:404608,emissiveIntensity:1.2,metalness:.75,roughness:.18,wireframe:!0}),ul=new pn(qp,Yp);Ai.add(ul);const Kp=new Wo({color:1495039,transparent:!0,opacity:.8});for(let i=0;i<3;i++){const e=new pn(new ea(1.35+i*.17,.009,8,180),Kp.clone());e.rotation.x=Math.PI*(.3+i*.27),e.rotation.y=Math.PI*(.2+i*.3),Ai.add(e)}const dl=new Yt,hl=[];for(let i=0;i<650;i++)hl.push((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5);dl.setAttribute("position",new yt(hl,3));const fl=new Nc(dl,new Xo({color:4771839,size:.018,transparent:!0,opacity:.8}));Pi.add(fl);Pi.add(new Kc(7904511,2));const pl=new qc(1477887,30,10);pl.position.set(2,2,3);Pi.add(pl);function ml(){const i=ai.clientWidth||400,e=ai.clientHeight||400;na.setSize(i,e,!1),mr.aspect=i/e,mr.updateProjectionMatrix()}new ResizeObserver(ml).observe(ai);ml();let gl=0,_l=0;ai.addEventListener("pointermove",i=>{const e=ai.getBoundingClientRect();gl=((i.clientX-e.left)/e.width-.5)*.5,_l=((i.clientY-e.top)/e.height-.5)*.5});function vl(i){requestAnimationFrame(vl),Ai.rotation.y=i*22e-5+gl,Ai.rotation.x=Math.sin(i*3e-4)*.15+_l,fl.rotation.y=-i*25e-6,ul.scale.setScalar(1+Math.sin(i*.0015)*.025),na.render(Pi,mr)}requestAnimationFrame(vl);
