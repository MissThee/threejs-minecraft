/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rs="143",tn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qa=0,qs=1,ja=2,ha=1,Xa=2,ni=3,si=0,yt=1,rn=2,Ya=1,sn=0,Vn=1,js=2,Xs=3,Ys=4,Za=5,Gn=100,Ka=101,$a=102,Zs=103,Ks=104,Ja=200,Qa=201,eo=202,to=203,da=204,fa=205,no=206,io=207,so=208,ro=209,ao=210,oo=0,lo=1,co=2,ws=3,uo=4,ho=5,fo=6,po=7,ks=0,mo=1,go=2,Gt=0,_o=1,bo=2,vo=3,xo=4,yo=5,pa=300,qn=301,jn=302,Ms=303,Ss=304,Ui=306,Ii=1e3,Pt=1001,Ls=1002,nt=1003,$s=1004,Js=1004,Qs=1005,bt=1006,wo=1007,Oi=1008,xn=1009,Mo=1010,So=1011,ma=1012,Lo=1013,pn=1014,mn=1015,ri=1016,Eo=1017,To=1018,Wn=1020,Po=1021,Ao=1022,Rt=1023,Co=1024,Ro=1025,_n=1026,Xn=1027,ko=1028,Do=1029,Io=1030,Fo=1031,Uo=1033,Vi=33776,Wi=33777,qi=33778,ji=33779,er=35840,tr=35841,nr=35842,ir=35843,Oo=36196,sr=37492,rr=37496,ar=37808,or=37809,lr=37810,cr=37811,ur=37812,hr=37813,dr=37814,fr=37815,pr=37816,mr=37817,gr=37818,_r=37819,br=37820,vr=37821,xr=36492,yn=3e3,Be=3001,zo=3200,No=3201,Bo=0,Go=1,Nt="srgb",gn="srgb-linear",Xi=7680,Ho=519,yr=35044,wr="300 es",Es=1035;class Wt{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yi=Math.PI/180,Mr=180/Math.PI;function li(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(et[r&255]+et[r>>8&255]+et[r>>16&255]+et[r>>24&255]+"-"+et[e&255]+et[e>>8&255]+"-"+et[e>>16&15|64]+et[e>>24&255]+"-"+et[t&63|128]+et[t>>8&255]+"-"+et[t>>16&255]+et[t>>24&255]+et[n&255]+et[n>>8&255]+et[n>>16&255]+et[n>>24&255]).toLowerCase()}function ot(r,e,t){return Math.max(e,Math.min(t,r))}function Vo(r,e){return(r%e+e)%e}function Zi(r,e,t){return(1-t)*r+t*e}function Sr(r){return(r&r-1)===0&&r!==0}function Ts(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class xt{constructor(){xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],p=i[0],f=i[3],_=i[6],w=i[1],E=i[4],y=i[7],L=i[2],A=i[5],U=i[8];return s[0]=o*p+a*w+c*L,s[3]=o*f+a*E+c*A,s[6]=o*_+a*y+c*U,s[1]=l*p+u*w+h*L,s[4]=l*f+u*E+h*A,s[7]=l*_+u*y+h*U,s[2]=d*p+m*w+g*L,s[5]=d*f+m*E+g*A,s[8]=d*_+m*y+g*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+i*s*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*s,m=l*s-o*c,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=h*p,e[1]=(i*l-u*n)*p,e[2]=(a*n-i*o)*p,e[3]=d*p,e[4]=(u*t-i*c)*p,e[5]=(i*s-a*t)*p,e[6]=m*p,e[7]=(n*c-l*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,s=i[0],o=i[3],a=i[6],c=i[1],l=i[4],u=i[7];return i[0]=t*s+n*c,i[3]=t*o+n*l,i[6]=t*a+n*u,i[1]=-n*s+t*c,i[4]=-n*o+t*l,i[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function ga(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function ai(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ki(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ki={[Nt]:{[gn]:bn},[gn]:{[Nt]:ki}},Mt={legacyMode:!0,get workingColorSpace(){return gn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ki[e]&&Ki[e][t]!==void 0){const n=Ki[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},_a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ye={r:0,g:0,b:0},St={h:0,s:0,l:0},hi={h:0,s:0,l:0};function $i(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function di(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=gn){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=gn){if(e=Vo(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$i(o,s,e+1/3),this.g=$i(o,s,e),this.b=$i(o,s,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Nt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Nt){const n=_a[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Mt.fromWorkingColorSpace(di(this,Ye),e),ot(Ye.r*255,0,255)<<16^ot(Ye.g*255,0,255)<<8^ot(Ye.b*255,0,255)<<0}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gn){Mt.fromWorkingColorSpace(di(this,Ye),t);const n=Ye.r,i=Ye.g,s=Ye.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gn){return Mt.fromWorkingColorSpace(di(this,Ye),t),e.r=Ye.r,e.g=Ye.g,e.b=Ye.b,e}getStyle(e=Nt){return Mt.fromWorkingColorSpace(di(this,Ye),e),e!==Nt?`color(${e} ${Ye.r} ${Ye.g} ${Ye.b})`:`rgb(${Ye.r*255|0},${Ye.g*255|0},${Ye.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(St),St.h+=e,St.s+=t,St.l+=n,this.setHSL(St.h,St.s,St.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(St),e.getHSL(hi);const n=Zi(St.h,hi.h,t),i=Zi(St.s,hi.s,t),s=Zi(St.l,hi.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}ke.NAMES=_a;let Tn;class ba{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tn===void 0&&(Tn=ai("canvas")),Tn.width=e.width,Tn.height=e.height;const n=Tn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ai("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=bn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bn(t[n]/255)*255):t[n]=bn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class va{constructor(e=null){this.isSource=!0,this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ji(i[o].image)):s.push(Ji(i[o]))}else s=Ji(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ji(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ba.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wo=0;class wt extends Wt{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,n=Pt,i=Pt,s=bt,o=Oi,a=Rt,c=xn,l=1,u=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wo++}),this.uuid=li(),this.name="",this.source=new va(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pa)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ii:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case Ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ii:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case Ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=pa;class Ze{constructor(e=0,t=0,n=0,i=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],p=c[2],f=c[6],_=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,y=(m+1)/2,L=(_+1)/2,A=(u+d)/4,U=(h+p)/4,b=(g+f)/4;return E>y&&E>L?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=U/n):y>L?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=b/i):L<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(L),n=U/s,i=b/s),this.set(n,i,s,t),this}let w=Math.sqrt((f-g)*(f-g)+(h-p)*(h-p)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(f-g)/w,this.y=(h-p)/w,this.z=(d-u)/w,this.w=Math.acos((l+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wn extends Wt{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new wt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new va(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xa extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nt,this.minFilter=nt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qo extends wt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nt,this.minFilter=nt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[o+0],m=s[o+1],g=s[o+2],p=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=p;return}if(h!==p||c!==d||l!==m||u!==g){let f=1-a;const _=c*d+l*m+u*g+h*p,w=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const L=Math.sqrt(E),A=Math.atan2(L,_*w);f=Math.sin(f*A)/L,a=Math.sin(a*A)/L}const y=a*w;if(c=c*f+d*y,l=l*f+m*y,u=u*f+g*y,h=h*f+p*y,f===1-a){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-a*m,e[t+2]=l*g+u*m+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(s/2),d=c(n/2),m=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(s-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-s*c,this._y=i*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lr.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lr.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*i-a*n,u=c*n+a*t-s*i,h=c*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=l*c+d*-s+u*-a-h*-o,this.y=u*c+d*-o+h*-s-l*-a,this.z=h*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qi.copy(this).projectOnVector(e),this.sub(Qi)}reflect(e){return this.sub(Qi.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qi=new P,Lr=new Mn;class ci{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],h=e[c+1],d=e[c+2];u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),h=e.getY(c),d=e.getZ(c);u<t&&(t=u),h<n&&(n=h),d<i&&(i=d),u>s&&(s=u),h>o&&(o=h),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)ln.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ln)}else n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox),es.applyMatrix4(e.matrixWorld),this.union(es);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qn),fi.subVectors(this.max,Qn),Pn.subVectors(e.a,Qn),An.subVectors(e.b,Qn),Cn.subVectors(e.c,Qn),Xt.subVectors(An,Pn),Yt.subVectors(Cn,An),cn.subVectors(Pn,Cn);let t=[0,-Xt.z,Xt.y,0,-Yt.z,Yt.y,0,-cn.z,cn.y,Xt.z,0,-Xt.x,Yt.z,0,-Yt.x,cn.z,0,-cn.x,-Xt.y,Xt.x,0,-Yt.y,Yt.x,0,-cn.y,cn.x,0];return!ts(t,Pn,An,Cn,fi)||(t=[1,0,0,0,1,0,0,0,1],!ts(t,Pn,An,Cn,fi))?!1:(pi.crossVectors(Xt,Yt),t=[pi.x,pi.y,pi.z],ts(t,Pn,An,Cn,fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ln.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(It[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),It[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),It[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),It[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),It[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),It[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),It[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),It[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(It),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const It=[new P,new P,new P,new P,new P,new P,new P,new P],ln=new P,es=new ci,Pn=new P,An=new P,Cn=new P,Xt=new P,Yt=new P,cn=new P,Qn=new P,fi=new P,pi=new P,un=new P;function ts(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){un.fromArray(r,s);const a=i.x*Math.abs(un.x)+i.y*Math.abs(un.y)+i.z*Math.abs(un.z),c=e.dot(un),l=t.dot(un),u=n.dot(un);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const jo=new ci,Er=new P,mi=new P,ns=new P;class Ds{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):jo.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){ns.subVectors(e,this.center);const t=ns.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(ns.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return this.center.equals(e.center)===!0?mi.set(0,0,1).multiplyScalar(e.radius):mi.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Er.copy(e.center).add(mi)),this.expandByPoint(Er.copy(e.center).sub(mi)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ft=new P,is=new P,gi=new P,Zt=new P,ss=new P,_i=new P,rs=new P;class ya{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ft)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ft.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ft.copy(this.direction).multiplyScalar(t).add(this.origin),Ft.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){is.copy(e).add(t).multiplyScalar(.5),gi.copy(t).sub(e).normalize(),Zt.copy(this.origin).sub(is);const s=e.distanceTo(t)*.5,o=-this.direction.dot(gi),a=Zt.dot(this.direction),c=-Zt.dot(gi),l=Zt.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const p=1/u;h*=p,d*=p,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),m=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(gi).multiplyScalar(d).add(is),m}intersectSphere(e,t){Ft.subVectors(e.center,this.origin);const n=Ft.dot(this.direction),i=Ft.dot(Ft)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ft)!==null}intersectTriangle(e,t,n,i,s){ss.subVectors(t,e),_i.subVectors(n,e),rs.crossVectors(ss,_i);let o=this.direction.dot(rs),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Zt.subVectors(this.origin,e);const c=a*this.direction.dot(_i.crossVectors(Zt,_i));if(c<0)return null;const l=a*this.direction.dot(ss.cross(Zt));if(l<0||c+l>o)return null;const u=-a*Zt.dot(rs);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,c,l,u,h,d,m,g,p,f){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=h,_[14]=d,_[3]=m,_[7]=g,_[11]=p,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Rn.setFromMatrixColumn(e,0).length(),s=1/Rn.setFromMatrixColumn(e,1).length(),o=1/Rn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-p*l,t[9]=-a*c,t[2]=p-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d+p*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=p+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,p=l*h;t[0]=d-p*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=p-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,p=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+p,t[1]=c*h,t[5]=p*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=p-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-p*h}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,p=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+p,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=p*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xo,e,Yo)}lookAt(e,t,n){const i=this.elements;return ht.subVectors(e,t),ht.lengthSq()===0&&(ht.z=1),ht.normalize(),Kt.crossVectors(n,ht),Kt.lengthSq()===0&&(Math.abs(n.z)===1?ht.x+=1e-4:ht.z+=1e-4,ht.normalize(),Kt.crossVectors(n,ht)),Kt.normalize(),bi.crossVectors(ht,Kt),i[0]=Kt.x,i[4]=bi.x,i[8]=ht.x,i[1]=Kt.y,i[5]=bi.y,i[9]=ht.y,i[2]=Kt.z,i[6]=bi.z,i[10]=ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],p=n[6],f=n[10],_=n[14],w=n[3],E=n[7],y=n[11],L=n[15],A=i[0],U=i[4],b=i[8],T=i[12],B=i[1],N=i[5],ee=i[9],te=i[13],I=i[2],Z=i[6],H=i[10],$=i[14],Y=i[3],z=i[7],V=i[11],ne=i[15];return s[0]=o*A+a*B+c*I+l*Y,s[4]=o*U+a*N+c*Z+l*z,s[8]=o*b+a*ee+c*H+l*V,s[12]=o*T+a*te+c*$+l*ne,s[1]=u*A+h*B+d*I+m*Y,s[5]=u*U+h*N+d*Z+m*z,s[9]=u*b+h*ee+d*H+m*V,s[13]=u*T+h*te+d*$+m*ne,s[2]=g*A+p*B+f*I+_*Y,s[6]=g*U+p*N+f*Z+_*z,s[10]=g*b+p*ee+f*H+_*V,s[14]=g*T+p*te+f*$+_*ne,s[3]=w*A+E*B+y*I+L*Y,s[7]=w*U+E*N+y*Z+L*z,s[11]=w*b+E*ee+y*H+L*V,s[15]=w*T+E*te+y*$+L*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],p=e[7],f=e[11],_=e[15];return g*(+s*c*h-i*l*h-s*a*d+n*l*d+i*a*m-n*c*m)+p*(+t*c*m-t*l*d+s*o*d-i*o*m+i*l*u-s*c*u)+f*(+t*l*h-t*a*m-s*o*h+n*o*m+s*a*u-n*l*u)+_*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],p=e[13],f=e[14],_=e[15],w=h*f*l-p*d*l+p*c*m-a*f*m-h*c*_+a*d*_,E=g*d*l-u*f*l-g*c*m+o*f*m+u*c*_-o*d*_,y=u*p*l-g*h*l+g*a*m-o*p*m-u*a*_+o*h*_,L=g*h*c-u*p*c-g*a*d+o*p*d+u*a*f-o*h*f,A=t*w+n*E+i*y+s*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/A;return e[0]=w*U,e[1]=(p*d*s-h*f*s-p*i*m+n*f*m+h*i*_-n*d*_)*U,e[2]=(a*f*s-p*c*s+p*i*l-n*f*l-a*i*_+n*c*_)*U,e[3]=(h*c*s-a*d*s-h*i*l+n*d*l+a*i*m-n*c*m)*U,e[4]=E*U,e[5]=(u*f*s-g*d*s+g*i*m-t*f*m-u*i*_+t*d*_)*U,e[6]=(g*c*s-o*f*s-g*i*l+t*f*l+o*i*_-t*c*_)*U,e[7]=(o*d*s-u*c*s+u*i*l-t*d*l-o*i*m+t*c*m)*U,e[8]=y*U,e[9]=(g*h*s-u*p*s-g*n*m+t*p*m+u*n*_-t*h*_)*U,e[10]=(o*p*s-g*a*s+g*n*l-t*p*l-o*n*_+t*a*_)*U,e[11]=(u*a*s-o*h*s-u*n*l+t*h*l+o*n*m-t*a*m)*U,e[12]=L*U,e[13]=(u*p*i-g*h*i+g*n*d-t*p*d-u*n*f+t*h*f)*U,e[14]=(g*a*i-o*p*i-g*n*c+t*p*c+o*n*f-t*a*f)*U,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,h=a+a,d=s*l,m=s*u,g=s*h,p=o*u,f=o*h,_=a*h,w=c*l,E=c*u,y=c*h,L=n.x,A=n.y,U=n.z;return i[0]=(1-(p+_))*L,i[1]=(m+y)*L,i[2]=(g-E)*L,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(d+_))*A,i[6]=(f+w)*A,i[7]=0,i[8]=(g+E)*U,i[9]=(f-w)*U,i[10]=(1-(d+p))*U,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Rn.set(i[0],i[1],i[2]).length();const o=Rn.set(i[4],i[5],i[6]).length(),a=Rn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Lt.copy(this);const l=1/s,u=1/o,h=1/a;return Lt.elements[0]*=l,Lt.elements[1]*=l,Lt.elements[2]*=l,Lt.elements[4]*=u,Lt.elements[5]*=u,Lt.elements[6]*=u,Lt.elements[8]*=h,Lt.elements[9]*=h,Lt.elements[10]*=h,t.setFromRotationMatrix(Lt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),d=-(o+s)/(o-s),m=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,c=1/(t-e),l=1/(n-i),u=1/(o-s),h=(t+e)*c,d=(n+i)*l,m=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Rn=new P,Lt=new Ke,Xo=new P(0,0,0),Yo=new P(1,1,1),Kt=new P,bi=new P,ht=new P,Tr=new Ke,Pr=new Mn;class Zn{constructor(e=0,t=0,n=0,i=Zn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tr.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tr,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Pr.setFromEuler(this),this.setFromQuaternion(Pr,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Zn.DefaultOrder="XYZ";Zn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Is{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zo=0;const Ar=new P,kn=new Mn,Ut=new Ke,vi=new P,ei=new P,Ko=new P,$o=new Mn,Cr=new P(1,0,0),Rr=new P(0,1,0),kr=new P(0,0,1),Jo={type:"added"},Dr={type:"removed"};class lt extends Wt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zo++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=lt.DefaultUp.clone();const e=new P,t=new Zn,n=new Mn,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ke},normalMatrix:{value:new xt}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=lt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(Cr,e)}rotateY(e){return this.rotateOnAxis(Rr,e)}rotateZ(e){return this.rotateOnAxis(kr,e)}translateOnAxis(e,t){return Ar.copy(e).applyQuaternion(this.quaternion),this.position.add(Ar.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cr,e)}translateY(e){return this.translateOnAxis(Rr,e)}translateZ(e){return this.translateOnAxis(kr,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Ut.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vi.copy(e):vi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ut.lookAt(ei,vi,this.up):Ut.lookAt(vi,ei,this.up),this.quaternion.setFromRotationMatrix(Ut),i&&(Ut.extractRotation(i.matrixWorld),kn.setFromRotationMatrix(Ut),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Jo)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dr)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Dr)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ut.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ut.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ut),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,e,Ko),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ei,$o,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}lt.DefaultUp=new P(0,1,0);lt.DefaultMatrixAutoUpdate=!0;const Et=new P,Ot=new P,as=new P,zt=new P,Dn=new P,In=new P,Ir=new P,os=new P,ls=new P,cs=new P;class Bt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Et.subVectors(e,t),i.cross(Et);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Et.subVectors(i,t),Ot.subVectors(n,t),as.subVectors(e,t);const o=Et.dot(Et),a=Et.dot(Ot),c=Et.dot(as),l=Ot.dot(Ot),u=Ot.dot(as),h=o*l-a*a;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,zt),zt.x>=0&&zt.y>=0&&zt.x+zt.y<=1}static getUV(e,t,n,i,s,o,a,c){return this.getBarycoord(e,t,n,i,zt),c.set(0,0),c.addScaledVector(s,zt.x),c.addScaledVector(o,zt.y),c.addScaledVector(a,zt.z),c}static isFrontFacing(e,t,n,i){return Et.subVectors(n,t),Ot.subVectors(e,t),Et.cross(Ot).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Et.subVectors(this.c,this.b),Ot.subVectors(this.a,this.b),Et.cross(Ot).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Bt.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Dn.subVectors(i,n),In.subVectors(s,n),os.subVectors(e,n);const c=Dn.dot(os),l=In.dot(os);if(c<=0&&l<=0)return t.copy(n);ls.subVectors(e,i);const u=Dn.dot(ls),h=In.dot(ls);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Dn,o);cs.subVectors(e,s);const m=Dn.dot(cs),g=In.dot(cs);if(g>=0&&m<=g)return t.copy(s);const p=m*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(In,a);const f=u*g-m*h;if(f<=0&&h-u>=0&&m-g>=0)return Ir.subVectors(s,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Ir,a);const _=1/(f+p+d);return o=p*_,a=d*_,t.copy(n).addScaledVector(Dn,o).addScaledVector(In,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qo=0;class ui extends Wt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qo++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Vn,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=da,this.blendDst=fa,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ho,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Ya;continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fs extends ui{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qe=new P,xi=new Me;class it{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=yr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new ke),t[n++]=o.r,t[n++]=o.g,t[n++]=o.b}return this}copyVector2sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Me),t[n++]=o.x,t[n++]=o.y}return this}copyVector3sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new P),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z}return this}copyVector4sArray(e){const t=this.array;let n=0;for(let i=0,s=e.length;i<s;i++){let o=e[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new Ze),t[n++]=o.x,t[n++]=o.y,t[n++]=o.z,t[n++]=o.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.applyMatrix3(e),this.setXY(t,xi.x,xi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class wa extends it{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ma extends it{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vn extends it{constructor(e,t,n){super(new Float32Array(e),t,n)}}let el=0;const _t=new Ke,us=new lt,Fn=new P,dt=new ci,ti=new ci,Je=new P;class Ht extends Wt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:el++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ga(e)?Ma:wa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new xt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _t.makeRotationFromQuaternion(e),this.applyMatrix4(_t),this}rotateX(e){return _t.makeRotationX(e),this.applyMatrix4(_t),this}rotateY(e){return _t.makeRotationY(e),this.applyMatrix4(_t),this}rotateZ(e){return _t.makeRotationZ(e),this.applyMatrix4(_t),this}translate(e,t,n){return _t.makeTranslation(e,t,n),this.applyMatrix4(_t),this}scale(e,t,n){return _t.makeScale(e,t,n),this.applyMatrix4(_t),this}lookAt(e){return us.lookAt(e),us.updateMatrix(),this.applyMatrix4(us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fn).negate(),this.translate(Fn.x,Fn.y,Fn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];dt.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,dt.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,dt.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(dt.min),this.boundingBox.expandByPoint(dt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(dt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(dt.min,ti.min),dt.expandByPoint(Je),Je.addVectors(dt.max,ti.max),dt.expandByPoint(Je)):(dt.expandByPoint(ti.min),dt.expandByPoint(ti.max))}dt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Je.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Je));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Je.fromBufferAttribute(a,l),c&&(Fn.fromBufferAttribute(e,l),Je.add(Fn)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new it(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let B=0;B<a;B++)l[B]=new P,u[B]=new P;const h=new P,d=new P,m=new P,g=new Me,p=new Me,f=new Me,_=new P,w=new P;function E(B,N,ee){h.fromArray(i,B*3),d.fromArray(i,N*3),m.fromArray(i,ee*3),g.fromArray(o,B*2),p.fromArray(o,N*2),f.fromArray(o,ee*2),d.sub(h),m.sub(h),p.sub(g),f.sub(g);const te=1/(p.x*f.y-f.x*p.y);!isFinite(te)||(_.copy(d).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(te),w.copy(m).multiplyScalar(p.x).addScaledVector(d,-f.x).multiplyScalar(te),l[B].add(_),l[N].add(_),l[ee].add(_),u[B].add(w),u[N].add(w),u[ee].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let B=0,N=y.length;B<N;++B){const ee=y[B],te=ee.start,I=ee.count;for(let Z=te,H=te+I;Z<H;Z+=3)E(n[Z+0],n[Z+1],n[Z+2])}const L=new P,A=new P,U=new P,b=new P;function T(B){U.fromArray(s,B*3),b.copy(U);const N=l[B];L.copy(N),L.sub(U.multiplyScalar(U.dot(N))).normalize(),A.crossVectors(b,N);const te=A.dot(u[B])<0?-1:1;c[B*4]=L.x,c[B*4+1]=L.y,c[B*4+2]=L.z,c[B*4+3]=te}for(let B=0,N=y.length;B<N;++B){const ee=y[B],te=ee.start,I=ee.count;for(let Z=te,H=te+I;Z<H;Z+=3)T(n[Z+0]),T(n[Z+1]),T(n[Z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new it(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),p=e.getX(d+1),f=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,f),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(e.attributes[i]===void 0)continue;const o=n[i].array,a=e.attributes[i],c=a.array,l=a.itemSize*t,u=Math.min(c.length,o.length-l);for(let h=0,d=l;h<u;h++,d++)o[d]=c[h]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Je.fromBufferAttribute(e,t),Je.normalize(),e.setXYZ(t,Je.x,Je.y,Je.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let p=0,f=c.length;p<f;p++){a.isInterleavedBufferAttribute?m=c[p]*a.data.stride+a.offset:m=c[p]*u;for(let _=0;_<u;_++)d[g++]=l[m++]}return new it(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fr=new Ke,Un=new ya,hs=new Ds,$t=new P,Jt=new P,Qt=new P,ds=new P,fs=new P,ps=new P,yi=new P,wi=new P,Mi=new P,Si=new Me,Li=new Me,Ei=new Me,ms=new P,Ti=new P;class At extends lt{constructor(e=new Ht,t=new Fs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),e.ray.intersectsSphere(hs)===!1)||(Fr.copy(s).invert(),Un.copy(e.ray).applyMatrix4(Fr),n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,d=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],w=i[_.materialIndex],E=Math.max(_.start,g.start),y=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let L=E,A=y;L<A;L+=3){const U=a.getX(L),b=a.getX(L+1),T=a.getX(L+2);o=Pi(this,w,e,Un,c,l,u,h,d,U,b,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let _=p,w=f;_<w;_+=3){const E=a.getX(_),y=a.getX(_+1),L=a.getX(_+2);o=Pi(this,i,e,Un,c,l,u,h,d,E,y,L),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){const _=m[p],w=i[_.materialIndex],E=Math.max(_.start,g.start),y=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let L=E,A=y;L<A;L+=3){const U=L,b=L+1,T=L+2;o=Pi(this,w,e,Un,c,l,u,h,d,U,b,T),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const p=Math.max(0,g.start),f=Math.min(c.count,g.start+g.count);for(let _=p,w=f;_<w;_+=3){const E=_,y=_+1,L=_+2;o=Pi(this,i,e,Un,c,l,u,h,d,E,y,L),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function tl(r,e,t,n,i,s,o,a){let c;if(e.side===yt?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,e.side!==rn,a),c===null)return null;Ti.copy(a),Ti.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Ti);return l<t.near||l>t.far?null:{distance:l,point:Ti.clone(),object:r}}function Pi(r,e,t,n,i,s,o,a,c,l,u,h){$t.fromBufferAttribute(i,l),Jt.fromBufferAttribute(i,u),Qt.fromBufferAttribute(i,h);const d=r.morphTargetInfluences;if(s&&d){yi.set(0,0,0),wi.set(0,0,0),Mi.set(0,0,0);for(let g=0,p=s.length;g<p;g++){const f=d[g],_=s[g];f!==0&&(ds.fromBufferAttribute(_,l),fs.fromBufferAttribute(_,u),ps.fromBufferAttribute(_,h),o?(yi.addScaledVector(ds,f),wi.addScaledVector(fs,f),Mi.addScaledVector(ps,f)):(yi.addScaledVector(ds.sub($t),f),wi.addScaledVector(fs.sub(Jt),f),Mi.addScaledVector(ps.sub(Qt),f)))}$t.add(yi),Jt.add(wi),Qt.add(Mi)}r.isSkinnedMesh&&(r.boneTransform(l,$t),r.boneTransform(u,Jt),r.boneTransform(h,Qt));const m=tl(r,e,t,n,$t,Jt,Qt,ms);if(m){a&&(Si.fromBufferAttribute(a,l),Li.fromBufferAttribute(a,u),Ei.fromBufferAttribute(a,h),m.uv=Bt.getUV(ms,$t,Jt,Qt,Si,Li,Ei,new Me)),c&&(Si.fromBufferAttribute(c,l),Li.fromBufferAttribute(c,u),Ei.fromBufferAttribute(c,h),m.uv2=Bt.getUV(ms,$t,Jt,Qt,Si,Li,Ei,new Me));const g={a:l,b:u,c:h,normal:new P,materialIndex:0};Bt.getNormal($t,Jt,Qt,g.normal),m.face=g}return m}class Vt extends Ht{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new vn(l,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(h,2));function g(p,f,_,w,E,y,L,A,U,b,T){const B=y/U,N=L/b,ee=y/2,te=L/2,I=A/2,Z=U+1,H=b+1;let $=0,Y=0;const z=new P;for(let V=0;V<H;V++){const ne=V*N-te;for(let J=0;J<Z;J++){const ie=J*B-ee;z[p]=ie*w,z[f]=ne*E,z[_]=I,l.push(z.x,z.y,z.z),z[p]=0,z[f]=0,z[_]=A>0?1:-1,u.push(z.x,z.y,z.z),h.push(J/U),h.push(1-V/b),$+=1}}for(let V=0;V<b;V++)for(let ne=0;ne<U;ne++){const J=d+ne+Z*V,ie=d+ne+Z*(V+1),de=d+(ne+1)+Z*(V+1),be=d+(ne+1)+Z*V;c.push(J,ie,be),c.push(ie,de,be),Y+=6}a.addGroup(m,Y,T),m+=Y,d+=$}}static fromJSON(e){return new Vt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Yn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function tt(r){const e={};for(let t=0;t<r.length;t++){const n=Yn(r[t]);for(const i in n)e[i]=n[i]}return e}function nl(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}const il={clone:Yn,merge:tt};var sl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends ui{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sl,this.fragmentShader=rl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yn(e.uniforms),this.uniformsGroups=nl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sa extends lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vt extends Sa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(Yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const On=90,zn=1;class al extends lt{constructor(e,t,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new vt(On,zn,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new P(1,0,0)),this.add(i);const s=new vt(On,zn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new P(-1,0,0)),this.add(s);const o=new vt(On,zn,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new P(0,1,0)),this.add(o);const a=new vt(On,zn,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new P(0,-1,0)),this.add(a);const c=new vt(On,zn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new P(0,0,1)),this.add(c);const l=new vt(On,zn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new P(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,c,l]=this.children,u=e.getRenderTarget(),h=e.toneMapping,d=e.xr.enabled;e.toneMapping=Gt,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Us extends wt{constructor(e,t,n,i,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:qn,super(e,t,n,i,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ol extends wn{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Us(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Vt(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Yn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yt,blending:sn});s.uniforms.tEquirect.value=t;const o=new At(i,s),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=bt),new al(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const gs=new P,ll=new P,cl=new xt;class hn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=gs.subVectors(n,t).cross(ll.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(gs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cl.getNormalMatrix(e),i=this.coplanarPoint(gs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Ds,Ai=new P;class Os{constructor(e=new hn,t=new hn,n=new hn,i=new hn,s=new hn,o=new hn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],h=n[7],d=n[8],m=n[9],g=n[10],p=n[11],f=n[12],_=n[13],w=n[14],E=n[15];return t[0].setComponents(a-i,h-c,p-d,E-f).normalize(),t[1].setComponents(a+i,h+c,p+d,E+f).normalize(),t[2].setComponents(a+s,h+l,p+m,E+_).normalize(),t[3].setComponents(a-s,h-l,p-m,E-_).normalize(),t[4].setComponents(a-o,h-u,p-g,E-w).normalize(),t[5].setComponents(a+o,h+u,p+g,E+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ai.x=i.normal.x>0?e.max.x:e.min.x,Ai.y=i.normal.y>0?e.max.y:e.min.y,Ai.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ai)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function La(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ul(r,e){const t=e.isWebGL2,n=new WeakMap;function i(l,u){const h=l.array,d=l.usage,m=r.createBuffer();r.bindBuffer(u,m),r.bufferData(u,h,d),l.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,h){const d=u.array,m=u.updateRange;r.bindBuffer(h,l),m.count===-1?r.bufferSubData(h,0,d):(t?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(r.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h===void 0?n.set(l,i(l,u)):h.version<l.version&&(s(h.buffer,l,u),h.version=l.version)}return{get:o,remove:a,update:c}}class zs extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,m=[],g=[],p=[],f=[];for(let _=0;_<u;_++){const w=_*d-o;for(let E=0;E<l;E++){const y=E*h-s;g.push(y,-w,0),p.push(0,0,1),f.push(E/a),f.push(1-_/c)}}for(let _=0;_<c;_++)for(let w=0;w<a;w++){const E=w+l*_,y=w+l*(_+1),L=w+1+l*(_+1),A=w+1+l*_;m.push(E,y,A),m.push(y,L,A)}this.setIndex(m),this.setAttribute("position",new vn(g,3)),this.setAttribute("normal",new vn(p,3)),this.setAttribute("uv",new vn(f,2))}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}var hl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,dl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ml=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_l="vec3 transformed = vec3( position );",bl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,xl=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,yl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,wl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Ml=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ll=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,El=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Al=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cl=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Rl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Fl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ul=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ol="gl_FragColor = linearToOutputTexel( gl_FragColor );",zl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ql=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,Zl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$l=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Jl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Ql=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ec=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,nc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ic=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,sc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,rc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ac=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_c=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,wc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Sc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ec=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pc=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ac=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Cc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Rc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,kc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dc=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ic=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Fc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vc=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Wc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yc=`#ifdef USE_SKINNING
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
#endif`,Zc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$c=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jc=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qc=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,eu=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,tu=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,nu=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,iu=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,su=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ru=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,au=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cu=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,du=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,mu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xu=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,yu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mu=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Su=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Lu=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Au=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ru=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ku=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Du=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,Fu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Uu=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,zu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Te={alphamap_fragment:hl,alphamap_pars_fragment:dl,alphatest_fragment:fl,alphatest_pars_fragment:pl,aomap_fragment:ml,aomap_pars_fragment:gl,begin_vertex:_l,beginnormal_vertex:bl,bsdfs:vl,iridescence_fragment:xl,bumpmap_pars_fragment:yl,clipping_planes_fragment:wl,clipping_planes_pars_fragment:Ml,clipping_planes_pars_vertex:Sl,clipping_planes_vertex:Ll,color_fragment:El,color_pars_fragment:Tl,color_pars_vertex:Pl,color_vertex:Al,common:Cl,cube_uv_reflection_fragment:Rl,defaultnormal_vertex:kl,displacementmap_pars_vertex:Dl,displacementmap_vertex:Il,emissivemap_fragment:Fl,emissivemap_pars_fragment:Ul,encodings_fragment:Ol,encodings_pars_fragment:zl,envmap_fragment:Nl,envmap_common_pars_fragment:Bl,envmap_pars_fragment:Gl,envmap_pars_vertex:Hl,envmap_physical_pars_fragment:Ql,envmap_vertex:Vl,fog_vertex:Wl,fog_pars_vertex:ql,fog_fragment:jl,fog_pars_fragment:Xl,gradientmap_pars_fragment:Yl,lightmap_fragment:Zl,lightmap_pars_fragment:Kl,lights_lambert_vertex:$l,lights_pars_begin:Jl,lights_toon_fragment:ec,lights_toon_pars_fragment:tc,lights_phong_fragment:nc,lights_phong_pars_fragment:ic,lights_physical_fragment:sc,lights_physical_pars_fragment:rc,lights_fragment_begin:ac,lights_fragment_maps:oc,lights_fragment_end:lc,logdepthbuf_fragment:cc,logdepthbuf_pars_fragment:uc,logdepthbuf_pars_vertex:hc,logdepthbuf_vertex:dc,map_fragment:fc,map_pars_fragment:pc,map_particle_fragment:mc,map_particle_pars_fragment:gc,metalnessmap_fragment:_c,metalnessmap_pars_fragment:bc,morphcolor_vertex:vc,morphnormal_vertex:xc,morphtarget_pars_vertex:yc,morphtarget_vertex:wc,normal_fragment_begin:Mc,normal_fragment_maps:Sc,normal_pars_fragment:Lc,normal_pars_vertex:Ec,normal_vertex:Tc,normalmap_pars_fragment:Pc,clearcoat_normal_fragment_begin:Ac,clearcoat_normal_fragment_maps:Cc,clearcoat_pars_fragment:Rc,iridescence_pars_fragment:kc,output_fragment:Dc,packing:Ic,premultiplied_alpha_fragment:Fc,project_vertex:Uc,dithering_fragment:Oc,dithering_pars_fragment:zc,roughnessmap_fragment:Nc,roughnessmap_pars_fragment:Bc,shadowmap_pars_fragment:Gc,shadowmap_pars_vertex:Hc,shadowmap_vertex:Vc,shadowmask_pars_fragment:Wc,skinbase_vertex:qc,skinning_pars_vertex:jc,skinning_vertex:Xc,skinnormal_vertex:Yc,specularmap_fragment:Zc,specularmap_pars_fragment:Kc,tonemapping_fragment:$c,tonemapping_pars_fragment:Jc,transmission_fragment:Qc,transmission_pars_fragment:eu,uv_pars_fragment:tu,uv_pars_vertex:nu,uv_vertex:iu,uv2_pars_fragment:su,uv2_pars_vertex:ru,uv2_vertex:au,worldpos_vertex:ou,background_vert:lu,background_frag:cu,cube_vert:uu,cube_frag:hu,depth_vert:du,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:_u,linedashed_vert:bu,linedashed_frag:vu,meshbasic_vert:xu,meshbasic_frag:yu,meshlambert_vert:wu,meshlambert_frag:Mu,meshmatcap_vert:Su,meshmatcap_frag:Lu,meshnormal_vert:Eu,meshnormal_frag:Tu,meshphong_vert:Pu,meshphong_frag:Au,meshphysical_vert:Cu,meshphysical_frag:Ru,meshtoon_vert:ku,meshtoon_frag:Du,points_vert:Iu,points_frag:Fu,shadow_vert:Uu,shadow_frag:Ou,sprite_vert:zu,sprite_frag:Nu},se={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new xt},uv2Transform:{value:new xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new xt}}},Tt={basic:{uniforms:tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:tt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:tt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:tt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:tt([se.points,se.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:tt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:tt([se.common,se.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:tt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:tt([se.sprite,se.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},cube:{uniforms:tt([se.envmap,{opacity:{value:1}}]),vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:tt([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:tt([se.lights,se.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Tt.physical={uniforms:tt([Tt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};function Bu(r,e,t,n,i,s){const o=new ke(0);let a=i===!0?0:1,c,l,u=null,h=0,d=null;function m(p,f){let _=!1,w=f.isScene===!0?f.background:null;w&&w.isTexture&&(w=e.get(w));const E=r.xr,y=E.getSession&&E.getSession();y&&y.environmentBlendMode==="additive"&&(w=null),w===null?g(o,a):w&&w.isColor&&(g(w,1),_=!0),(r.autoClear||_)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Ui)?(l===void 0&&(l=new At(new Vt(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Yn(Tt.cube.uniforms),vertexShader:Tt.cube.vertexShader,fragmentShader:Tt.cube.fragmentShader,side:yt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(L,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,(u!==w||h!==w.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=w,h=w.version,d=r.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new At(new zs(2,2),new an({name:"BackgroundMaterial",uniforms:Yn(Tt.background.uniforms),vertexShader:Tt.background.vertexShader,fragmentShader:Tt.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||h!==w.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=w,h=w.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,f){t.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),a=f,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:m}}function Gu(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=f(null);let l=c,u=!1;function h(I,Z,H,$,Y){let z=!1;if(o){const V=p($,H,Z);l!==V&&(l=V,m(l.object)),z=_(I,$,H,Y),z&&w(I,$,H,Y)}else{const V=Z.wireframe===!0;(l.geometry!==$.id||l.program!==H.id||l.wireframe!==V)&&(l.geometry=$.id,l.program=H.id,l.wireframe=V,z=!0)}Y!==null&&t.update(Y,34963),(z||u)&&(u=!1,b(I,Z,H,$),Y!==null&&r.bindBuffer(34963,t.get(Y).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function p(I,Z,H){const $=H.wireframe===!0;let Y=a[I.id];Y===void 0&&(Y={},a[I.id]=Y);let z=Y[Z.id];z===void 0&&(z={},Y[Z.id]=z);let V=z[$];return V===void 0&&(V=f(d()),z[$]=V),V}function f(I){const Z=[],H=[],$=[];for(let Y=0;Y<i;Y++)Z[Y]=0,H[Y]=0,$[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:H,attributeDivisors:$,object:I,attributes:{},index:null}}function _(I,Z,H,$){const Y=l.attributes,z=Z.attributes;let V=0;const ne=H.getAttributes();for(const J in ne)if(ne[J].location>=0){const de=Y[J];let be=z[J];if(be===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(be=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(be=I.instanceColor)),de===void 0||de.attribute!==be||be&&de.data!==be.data)return!0;V++}return l.attributesNum!==V||l.index!==$}function w(I,Z,H,$){const Y={},z=Z.attributes;let V=0;const ne=H.getAttributes();for(const J in ne)if(ne[J].location>=0){let de=z[J];de===void 0&&(J==="instanceMatrix"&&I.instanceMatrix&&(de=I.instanceMatrix),J==="instanceColor"&&I.instanceColor&&(de=I.instanceColor));const be={};be.attribute=de,de&&de.data&&(be.data=de.data),Y[J]=be,V++}l.attributes=Y,l.attributesNum=V,l.index=$}function E(){const I=l.newAttributes;for(let Z=0,H=I.length;Z<H;Z++)I[Z]=0}function y(I){L(I,0)}function L(I,Z){const H=l.newAttributes,$=l.enabledAttributes,Y=l.attributeDivisors;H[I]=1,$[I]===0&&(r.enableVertexAttribArray(I),$[I]=1),Y[I]!==Z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,Z),Y[I]=Z)}function A(){const I=l.newAttributes,Z=l.enabledAttributes;for(let H=0,$=Z.length;H<$;H++)Z[H]!==I[H]&&(r.disableVertexAttribArray(H),Z[H]=0)}function U(I,Z,H,$,Y,z){n.isWebGL2===!0&&(H===5124||H===5125)?r.vertexAttribIPointer(I,Z,H,Y,z):r.vertexAttribPointer(I,Z,H,$,Y,z)}function b(I,Z,H,$){if(n.isWebGL2===!1&&(I.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const Y=$.attributes,z=H.getAttributes(),V=Z.defaultAttributeValues;for(const ne in z){const J=z[ne];if(J.location>=0){let ie=Y[ne];if(ie===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(ie=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(ie=I.instanceColor)),ie!==void 0){const de=ie.normalized,be=ie.itemSize,j=t.get(ie);if(j===void 0)continue;const De=j.buffer,_e=j.type,ve=j.bytesPerElement;if(ie.isInterleavedBufferAttribute){const ue=ie.data,Fe=ue.stride,Se=ie.offset;if(ue.isInstancedInterleavedBuffer){for(let me=0;me<J.locationSize;me++)L(J.location+me,ue.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let me=0;me<J.locationSize;me++)y(J.location+me);r.bindBuffer(34962,De);for(let me=0;me<J.locationSize;me++)U(J.location+me,be/J.locationSize,_e,de,Fe*ve,(Se+be/J.locationSize*me)*ve)}else{if(ie.isInstancedBufferAttribute){for(let ue=0;ue<J.locationSize;ue++)L(J.location+ue,ie.meshPerAttribute);I.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ue=0;ue<J.locationSize;ue++)y(J.location+ue);r.bindBuffer(34962,De);for(let ue=0;ue<J.locationSize;ue++)U(J.location+ue,be/J.locationSize,_e,de,be*ve,be/J.locationSize*ue*ve)}}else if(V!==void 0){const de=V[ne];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(J.location,de);break;case 3:r.vertexAttrib3fv(J.location,de);break;case 4:r.vertexAttrib4fv(J.location,de);break;default:r.vertexAttrib1fv(J.location,de)}}}}A()}function T(){ee();for(const I in a){const Z=a[I];for(const H in Z){const $=Z[H];for(const Y in $)g($[Y].object),delete $[Y];delete Z[H]}delete a[I]}}function B(I){if(a[I.id]===void 0)return;const Z=a[I.id];for(const H in Z){const $=Z[H];for(const Y in $)g($[Y].object),delete $[Y];delete Z[H]}delete a[I.id]}function N(I){for(const Z in a){const H=a[Z];if(H[I.id]===void 0)continue;const $=H[I.id];for(const Y in $)g($[Y].object),delete $[Y];delete H[I.id]}}function ee(){te(),u=!0,l!==c&&(l=c,m(l.object))}function te(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:te,dispose:T,releaseStatesOfGeometry:B,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:y,disableUnusedAttributes:A}}function Hu(r,e,t,n){const i=n.isWebGL2;let s;function o(l){s=l}function a(l,u){r.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,l,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=c}function Vu(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(U){if(U==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),d=r.getParameter(35660),m=r.getParameter(3379),g=r.getParameter(34076),p=r.getParameter(34921),f=r.getParameter(36347),_=r.getParameter(36348),w=r.getParameter(36349),E=d>0,y=o||e.has("OES_texture_float"),L=E&&y,A=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:E,floatFragmentTextures:y,floatVertexTextures:L,maxSamples:A}}function Wu(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new hn,a=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d,m){const g=h.length!==0||d||n!==0||i;return i=d,t=u(h,m,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(h,d,m){const g=h.clippingPlanes,p=h.clipIntersection,f=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!f)s?u(null):l();else{const w=s?0:n,E=w*4;let y=_.clippingState||null;c.value=y,y=u(g,d,E,m);for(let L=0;L!==E;++L)y[L]=t[L];_.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const p=h!==null?h.length:0;let f=null;if(p!==0){if(f=c.value,g!==!0||f===null){const _=m+p*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<_)&&(f=new Float32Array(_));for(let E=0,y=m;E!==p;++E,y+=4)o.copy(h[E]).applyMatrix4(w,a),o.normal.toArray(f,y),f[y+3]=o.constant}c.value=f,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,f}}function qu(r){let e=new WeakMap;function t(o,a){return a===Ms?o.mapping=qn:a===Ss&&(o.mapping=jn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Ms||a===Ss)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new ol(c.height/2);return l.fromEquirectangularTexture(r,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ea extends Sa{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hn=4,Ur=[.125,.215,.35,.446,.526,.582],fn=20,_s=new Ea,Or=new ke;let bs=null;const dn=(1+Math.sqrt(5))/2,Bn=1/dn,zr=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,dn,Bn),new P(0,dn,-Bn),new P(Bn,0,dn),new P(-Bn,0,dn),new P(dn,Bn,0),new P(-dn,Bn,0)];class Nr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bs),e.scissorTest=!1,Ci(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qn||e.mapping===jn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bt,minFilter:bt,generateMipmaps:!1,type:ri,format:Rt,encoding:yn,depthBuffer:!1},i=Br(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Br(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ju(s)),this._blurMaterial=Xu(s,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,_s)}_sceneToCubeUV(e,t,n,i){const a=new vt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Or),u.toneMapping=Gt,u.autoClear=!1;const m=new Fs({name:"PMREM.Background",side:yt,depthWrite:!1,depthTest:!1}),g=new At(new Vt,m);let p=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,p=!0):(m.color.copy(Or),p=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):w===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const E=this._cubeSize;Ci(i,w*E,_>2?E:0,E,E),u.setRenderTarget(i),p&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qn||e.mapping===jn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hr()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gr());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Ci(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,_s)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=zr[(i-1)%zr.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new At(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fn-1),p=s/g,f=isFinite(s)?1+Math.floor(u*p):fn;f>fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${fn}`);const _=[];let w=0;for(let U=0;U<fn;++U){const b=U/p,T=Math.exp(-b*b/2);_.push(T),U===0?w+=T:U<f&&(w+=2*T)}for(let U=0;U<_.length;U++)_[U]=_[U]/w;d.envMap.value=e.texture,d.samples.value=f,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[i],L=3*y*(i>E-Hn?i-E+Hn:0),A=4*(this._cubeSize-y);Ci(t,L,A,3*y,2*y),c.setRenderTarget(t),c.render(h,_s)}}function ju(r){const e=[],t=[],n=[];let i=r;const s=r-Hn+1+Ur.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>r-Hn?c=Ur[o-r+Hn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,p=3,f=2,_=1,w=new Float32Array(p*g*m),E=new Float32Array(f*g*m),y=new Float32Array(_*g*m);for(let A=0;A<m;A++){const U=A%3*2/3-1,b=A>2?0:-1,T=[U,b,0,U+2/3,b,0,U+2/3,b+1,0,U,b,0,U+2/3,b+1,0,U,b+1,0];w.set(T,p*g*A),E.set(d,f*g*A);const B=[A,A,A,A,A,A];y.set(B,_*g*A)}const L=new Ht;L.setAttribute("position",new it(w,p)),L.setAttribute("uv",new it(E,f)),L.setAttribute("faceIndex",new it(y,_)),e.push(L),i>Hn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Br(r,e,t){const n=new wn(r,e,t);return n.texture.mapping=Ui,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ci(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Xu(r,e,t){const n=new Float32Array(fn),i=new P(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Gr(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Hr(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ns(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sn,depthTest:!1,depthWrite:!1})}function Ns(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yu(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ms||c===Ss,u=c===qn||c===jn;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Nr(r)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Nr(r));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Zu(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ku(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],34962);const m=h.morphAttributes;for(const g in m){const p=m[g];for(let f=0,_=p.length;f<_;f++)e.update(p[f],34962)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let p=0;if(m!==null){const w=m.array;p=m.version;for(let E=0,y=w.length;E<y;E+=3){const L=w[E+0],A=w[E+1],U=w[E+2];d.push(L,A,A,U,U,L)}}else{const w=g.array;p=g.version;for(let E=0,y=w.length/3-1;E<y;E+=3){const L=E+0,A=E+1,U=E+2;d.push(L,A,A,U,U,L)}}const f=new(ga(d)?Ma:wa)(d,1);f.version=p;const _=s.get(h);_&&e.remove(_),s.set(h,f)}function u(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function $u(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,m){r.drawElements(s,m,a,d*c),t.update(m,s,1)}function h(d,m,g){if(g===0)return;let p,f;if(i)p=r,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,a,d*c,g),t.update(m,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h}function Ju(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Qu(r,e){return r[0]-e[0]}function eh(r,e){return Math.abs(e[1])-Math.abs(r[1])}function vs(r,e){let t=1;const n=e.isInterleavedBufferAttribute?e.data.array:e.array;n instanceof Int8Array?t=127:n instanceof Uint8Array?t=255:n instanceof Uint16Array?t=65535:n instanceof Int16Array?t=32767:n instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(t)}function th(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Ze,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h,d){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let f=s.get(u);if(f===void 0||f.count!==p){let Z=function(){te.dispose(),s.delete(u),u.removeEventListener("dispose",Z)};f!==void 0&&f.texture.dispose();const E=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;E===!0&&(T=1),y===!0&&(T=2),L===!0&&(T=3);let B=u.attributes.position.count*T,N=1;B>e.maxTextureSize&&(N=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const ee=new Float32Array(B*N*4*p),te=new xa(ee,B,N,p);te.type=mn,te.needsUpdate=!0;const I=T*4;for(let H=0;H<p;H++){const $=A[H],Y=U[H],z=b[H],V=B*N*4*H;for(let ne=0;ne<$.count;ne++){const J=ne*I;E===!0&&(o.fromBufferAttribute($,ne),$.normalized===!0&&vs(o,$),ee[V+J+0]=o.x,ee[V+J+1]=o.y,ee[V+J+2]=o.z,ee[V+J+3]=0),y===!0&&(o.fromBufferAttribute(Y,ne),Y.normalized===!0&&vs(o,Y),ee[V+J+4]=o.x,ee[V+J+5]=o.y,ee[V+J+6]=o.z,ee[V+J+7]=0),L===!0&&(o.fromBufferAttribute(z,ne),z.normalized===!0&&vs(o,z),ee[V+J+8]=o.x,ee[V+J+9]=o.y,ee[V+J+10]=o.z,ee[V+J+11]=z.itemSize===4?o.w:1)}}f={count:p,texture:te,size:new Me(B,N)},s.set(u,f),u.addEventListener("dispose",Z)}let _=0;for(let E=0;E<m.length;E++)_+=m[E];const w=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",m),d.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}else{const g=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<g;y++){const L=p[y];L[0]=y,L[1]=m[y]}p.sort(eh);for(let y=0;y<8;y++)y<g&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Qu);const f=u.morphAttributes.position,_=u.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const L=a[y],A=L[0],U=L[1];A!==Number.MAX_SAFE_INTEGER&&U?(f&&u.getAttribute("morphTarget"+y)!==f[A]&&u.setAttribute("morphTarget"+y,f[A]),_&&u.getAttribute("morphNormal"+y)!==_[A]&&u.setAttribute("morphNormal"+y,_[A]),i[y]=U,w+=U):(f&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const E=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:c}}function nh(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);return i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Ta=new wt,Pa=new xa,Aa=new qo,Ca=new Us,Vr=[],Wr=[],qr=new Float32Array(16),jr=new Float32Array(9),Xr=new Float32Array(4);function Kn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Vr[i];if(s===void 0&&(s=new Float32Array(i),Vr[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function at(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function zi(r,e){let t=Wr[e];t===void 0&&(t=new Int32Array(e),Wr[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ih(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function sh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2fv(this.addr,e),at(t,e)}}function rh(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;r.uniform3fv(this.addr,e),at(t,e)}}function ah(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4fv(this.addr,e),at(t,e)}}function oh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;Xr.set(n),r.uniformMatrix2fv(this.addr,!1,Xr),at(t,n)}}function lh(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;jr.set(n),r.uniformMatrix3fv(this.addr,!1,jr),at(t,n)}}function ch(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(rt(t,n))return;qr.set(n),r.uniformMatrix4fv(this.addr,!1,qr),at(t,n)}}function uh(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function hh(r,e){const t=this.cache;rt(t,e)||(r.uniform2iv(this.addr,e),at(t,e))}function dh(r,e){const t=this.cache;rt(t,e)||(r.uniform3iv(this.addr,e),at(t,e))}function fh(r,e){const t=this.cache;rt(t,e)||(r.uniform4iv(this.addr,e),at(t,e))}function ph(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mh(r,e){const t=this.cache;rt(t,e)||(r.uniform2uiv(this.addr,e),at(t,e))}function gh(r,e){const t=this.cache;rt(t,e)||(r.uniform3uiv(this.addr,e),at(t,e))}function _h(r,e){const t=this.cache;rt(t,e)||(r.uniform4uiv(this.addr,e),at(t,e))}function bh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ta,i)}function vh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Aa,i)}function xh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Ca,i)}function yh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Pa,i)}function wh(r){switch(r){case 5126:return ih;case 35664:return sh;case 35665:return rh;case 35666:return ah;case 35674:return oh;case 35675:return lh;case 35676:return ch;case 5124:case 35670:return uh;case 35667:case 35671:return hh;case 35668:case 35672:return dh;case 35669:case 35673:return fh;case 5125:return ph;case 36294:return mh;case 36295:return gh;case 36296:return _h;case 35678:case 36198:case 36298:case 36306:case 35682:return bh;case 35679:case 36299:case 36307:return vh;case 35680:case 36300:case 36308:case 36293:return xh;case 36289:case 36303:case 36311:case 36292:return yh}}function Mh(r,e){r.uniform1fv(this.addr,e)}function Sh(r,e){const t=Kn(e,this.size,2);r.uniform2fv(this.addr,t)}function Lh(r,e){const t=Kn(e,this.size,3);r.uniform3fv(this.addr,t)}function Eh(r,e){const t=Kn(e,this.size,4);r.uniform4fv(this.addr,t)}function Th(r,e){const t=Kn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ph(r,e){const t=Kn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ah(r,e){const t=Kn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ch(r,e){r.uniform1iv(this.addr,e)}function Rh(r,e){r.uniform2iv(this.addr,e)}function kh(r,e){r.uniform3iv(this.addr,e)}function Dh(r,e){r.uniform4iv(this.addr,e)}function Ih(r,e){r.uniform1uiv(this.addr,e)}function Fh(r,e){r.uniform2uiv(this.addr,e)}function Uh(r,e){r.uniform3uiv(this.addr,e)}function Oh(r,e){r.uniform4uiv(this.addr,e)}function zh(r,e,t){const n=e.length,i=zi(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Ta,i[s])}function Nh(r,e,t){const n=e.length,i=zi(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Aa,i[s])}function Bh(r,e,t){const n=e.length,i=zi(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Ca,i[s])}function Gh(r,e,t){const n=e.length,i=zi(t,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Pa,i[s])}function Hh(r){switch(r){case 5126:return Mh;case 35664:return Sh;case 35665:return Lh;case 35666:return Eh;case 35674:return Th;case 35675:return Ph;case 35676:return Ah;case 5124:case 35670:return Ch;case 35667:case 35671:return Rh;case 35668:case 35672:return kh;case 35669:case 35673:return Dh;case 5125:return Ih;case 36294:return Fh;case 36295:return Uh;case 36296:return Oh;case 35678:case 36198:case 36298:case 36306:case 35682:return zh;case 35679:case 36299:case 36307:return Nh;case 35680:case 36300:case 36308:case 36293:return Bh;case 36289:case 36303:case 36311:case 36292:return Gh}}class Vh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=wh(t.type)}}class Wh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Hh(t.type)}}class qh{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const xs=/(\w+)(\])?(\[|\.)?/g;function Yr(r,e){r.seq.push(e),r.map[e.id]=e}function jh(r,e,t){const n=r.name,i=n.length;for(xs.lastIndex=0;;){const s=xs.exec(n),o=xs.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yr(t,l===void 0?new Vh(a,r,e):new Wh(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new qh(a),Yr(t,h)),t=h}}}class Di{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);jh(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Zr(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Xh=0;function Yh(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Zh(r){switch(r){case yn:return["Linear","( value )"];case Be:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Kr(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Yh(r.getShaderSource(e),o)}else return i}function Kh(r,e){const t=Zh(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $h(r,e){let t;switch(e){case _o:t="Linear";break;case bo:t="Reinhard";break;case vo:t="OptimizedCineon";break;case xo:t="ACESFilmic";break;case yo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Jh(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ii).join(`
`)}function Qh(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ed(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ii(r){return r!==""}function $r(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jr(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const td=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ps(r){return r.replace(td,nd)}function nd(r,e){const t=Te[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ps(t)}const id=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,sd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qr(r){return r.replace(sd,Ra).replace(id,rd)}function rd(r,e,t,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ra(r,e,t,n)}function Ra(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function ea(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ad(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ha?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function od(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qn:case jn:e="ENVMAP_TYPE_CUBE";break;case Ui:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ld(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case jn:e="ENVMAP_MODE_REFRACTION";break}return e}function cd(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ks:e="ENVMAP_BLENDING_MULTIPLY";break;case mo:e="ENVMAP_BLENDING_MIX";break;case go:e="ENVMAP_BLENDING_ADD";break}return e}function ud(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function hd(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=ad(t),l=od(t),u=ld(t),h=cd(t),d=ud(t),m=t.isWebGL2?"":Jh(t),g=Qh(s),p=i.createProgram();let f,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=[g].filter(ii).join(`
`),f.length>0&&(f+=`
`),_=[m,g].filter(ii).join(`
`),_.length>0&&(_+=`
`)):(f=[ea(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ii).join(`
`),_=[m,ea(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gt?"#define TONE_MAPPING":"",t.toneMapping!==Gt?Te.tonemapping_pars_fragment:"",t.toneMapping!==Gt?$h("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.encodings_pars_fragment,Kh("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ii).join(`
`)),o=Ps(o),o=$r(o,t),o=Jr(o,t),a=Ps(a),a=$r(a,t),a=Jr(a,t),o=Qr(o),a=Qr(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===wr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=w+f+o,y=w+_+a,L=Zr(i,35633,E),A=Zr(i,35632,y);if(i.attachShader(p,L),i.attachShader(p,A),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(p).trim(),B=i.getShaderInfoLog(L).trim(),N=i.getShaderInfoLog(A).trim();let ee=!0,te=!0;if(i.getProgramParameter(p,35714)===!1){ee=!1;const I=Kr(i,L,"vertex"),Z=Kr(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+T+`
`+I+`
`+Z)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(B===""||N==="")&&(te=!1);te&&(this.diagnostics={runnable:ee,programLog:T,vertexShader:{log:B,prefix:f},fragmentShader:{log:N,prefix:_}})}i.deleteShader(L),i.deleteShader(A);let U;this.getUniforms=function(){return U===void 0&&(U=new Di(i,p)),U};let b;return this.getAttributes=function(){return b===void 0&&(b=ed(i,p)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Xh++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=L,this.fragmentShader=A,this}let dd=0;class fd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const n=new pd(e);t.set(e,n)}return t.get(e)}}class pd{constructor(e){this.id=dd++,this.code=e,this.usedTimes=0}}function md(r,e,t,n,i,s,o){const a=new Is,c=new fd,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b,T,B,N,ee){const te=N.fog,I=ee.geometry,Z=b.isMeshStandardMaterial?N.environment:null,H=(b.isMeshStandardMaterial?t:e).get(b.envMap||Z),$=!!H&&H.mapping===Ui?H.image.height:null,Y=g[b.type];b.precision!==null&&(m=i.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,V=z!==void 0?z.length:0;let ne=0;I.morphAttributes.position!==void 0&&(ne=1),I.morphAttributes.normal!==void 0&&(ne=2),I.morphAttributes.color!==void 0&&(ne=3);let J,ie,de,be;if(Y){const Fe=Tt[Y];J=Fe.vertexShader,ie=Fe.fragmentShader}else J=b.vertexShader,ie=b.fragmentShader,c.update(b),de=c.getVertexShaderID(b),be=c.getFragmentShaderID(b);const j=r.getRenderTarget(),De=b.alphaTest>0,_e=b.clearcoat>0,ve=b.iridescence>0;return{isWebGL2:u,shaderID:Y,shaderName:b.type,vertexShader:J,fragmentShader:ie,defines:b.defines,customVertexShaderID:de,customFragmentShaderID:be,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:d,outputEncoding:j===null?r.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:yn,map:!!b.map,matcap:!!b.matcap,envMap:!!H,envMapMode:H&&H.mapping,envMapCubeUVHeight:$,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Go,tangentSpaceNormalMap:b.normalMapType===Bo,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===Be,clearcoat:_e,clearcoatMap:_e&&!!b.clearcoatMap,clearcoatRoughnessMap:_e&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:_e&&!!b.clearcoatNormalMap,iridescence:ve,iridescenceMap:ve&&!!b.iridescenceMap,iridescenceThicknessMap:ve&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Vn,alphaMap:!!b.alphaMap,alphaTest:De,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!I.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!te,useFog:b.fog===!0,fogExp2:te&&te.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:h,skinning:ee.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:b.toneMapped?r.toneMapping:Gt,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===rn,flipSided:b.side===yt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function f(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)T.push(B),T.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(_(T,b),w(T,b),T.push(r.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function _(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function w(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),T.fog&&a.enable(33),b.push(a.mask),a.disableAll(),T.useFog&&a.enable(0),T.flatShading&&a.enable(1),T.logarithmicDepthBuffer&&a.enable(2),T.skinning&&a.enable(3),T.morphTargets&&a.enable(4),T.morphNormals&&a.enable(5),T.morphColors&&a.enable(6),T.premultipliedAlpha&&a.enable(7),T.shadowMapEnabled&&a.enable(8),T.physicallyCorrectLights&&a.enable(9),T.doubleSided&&a.enable(10),T.flipSided&&a.enable(11),T.useDepthPacking&&a.enable(12),T.dithering&&a.enable(13),T.specularIntensityMap&&a.enable(14),T.specularColorMap&&a.enable(15),T.transmission&&a.enable(16),T.transmissionMap&&a.enable(17),T.thicknessMap&&a.enable(18),T.sheen&&a.enable(19),T.sheenColorMap&&a.enable(20),T.sheenRoughnessMap&&a.enable(21),T.decodeVideoTexture&&a.enable(22),T.opaque&&a.enable(23),b.push(a.mask)}function E(b){const T=g[b.type];let B;if(T){const N=Tt[T];B=il.clone(N.uniforms)}else B=b.uniforms;return B}function y(b,T){let B;for(let N=0,ee=l.length;N<ee;N++){const te=l[N];if(te.cacheKey===T){B=te,++B.usedTimes;break}}return B===void 0&&(B=new hd(r,T,b,s),l.push(B)),B}function L(b){if(--b.usedTimes===0){const T=l.indexOf(b);l[T]=l[l.length-1],l.pop(),b.destroy()}}function A(b){c.remove(b)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:E,acquireProgram:y,releaseProgram:L,releaseShaderCache:A,programs:l,dispose:U}}function gd(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function _d(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ta(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function na(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,g,p,f){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:p,group:f},r[e]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=p,_.group=f),e++,_}function a(h,d,m,g,p,f){const _=o(h,d,m,g,p,f);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):t.push(_)}function c(h,d,m,g,p,f){const _=o(h,d,m,g,p,f);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):t.unshift(_)}function l(h,d){t.length>1&&t.sort(h||_d),n.length>1&&n.sort(d||ta),i.length>1&&i.sort(d||ta)}function u(){for(let h=e,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:u,sort:l}}function bd(){let r=new WeakMap;function e(n,i){let s;return r.has(n)===!1?(s=new na,r.set(n,[s])):i>=r.get(n).length?(s=new na,r.get(n).push(s)):s=r.get(n)[i],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function vd(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new ke};break;case"SpotLight":t={position:new P,direction:new P,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function xd(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let yd=0;function wd(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Md(r,e){const t=new vd,n=xd(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new P);const s=new P,o=new Ke,a=new Ke;function c(u,h){let d=0,m=0,g=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,f=0,_=0,w=0,E=0,y=0,L=0,A=0;u.sort(wd);const U=h!==!0?Math.PI:1;for(let T=0,B=u.length;T<B;T++){const N=u[T],ee=N.color,te=N.intensity,I=N.distance,Z=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=ee.r*te*U,m+=ee.g*te*U,g+=ee.b*te*U;else if(N.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(N.sh.coefficients[H],te);else if(N.isDirectionalLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*U),N.castShadow){const $=N.shadow,Y=n.get(N);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=N.shadow.matrix,y++}i.directional[p]=H,p++}else if(N.isSpotLight){const H=t.get(N);if(H.position.setFromMatrixPosition(N.matrixWorld),H.color.copy(ee).multiplyScalar(te*U),H.distance=I,H.coneCos=Math.cos(N.angle),H.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),H.decay=N.decay,N.castShadow){const $=N.shadow,Y=n.get(N);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,i.spotShadow[_]=Y,i.spotShadowMap[_]=Z,i.spotShadowMatrix[_]=N.shadow.matrix,A++}i.spot[_]=H,_++}else if(N.isRectAreaLight){const H=t.get(N);H.color.copy(ee).multiplyScalar(te),H.halfWidth.set(N.width*.5,0,0),H.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=H,w++}else if(N.isPointLight){const H=t.get(N);if(H.color.copy(N.color).multiplyScalar(N.intensity*U),H.distance=N.distance,H.decay=N.decay,N.castShadow){const $=N.shadow,Y=n.get(N);Y.shadowBias=$.bias,Y.shadowNormalBias=$.normalBias,Y.shadowRadius=$.radius,Y.shadowMapSize=$.mapSize,Y.shadowCameraNear=$.camera.near,Y.shadowCameraFar=$.camera.far,i.pointShadow[f]=Y,i.pointShadowMap[f]=Z,i.pointShadowMatrix[f]=N.shadow.matrix,L++}i.point[f]=H,f++}else if(N.isHemisphereLight){const H=t.get(N);H.skyColor.copy(N.color).multiplyScalar(te*U),H.groundColor.copy(N.groundColor).multiplyScalar(te*U),i.hemi[E]=H,E++}}w>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==p||b.pointLength!==f||b.spotLength!==_||b.rectAreaLength!==w||b.hemiLength!==E||b.numDirectionalShadows!==y||b.numPointShadows!==L||b.numSpotShadows!==A)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=w,i.point.length=f,i.hemi.length=E,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=L,i.spotShadowMatrix.length=A,b.directionalLength=p,b.pointLength=f,b.spotLength=_,b.rectAreaLength=w,b.hemiLength=E,b.numDirectionalShadows=y,b.numPointShadows=L,b.numSpotShadows=A,i.version=yd++)}function l(u,h){let d=0,m=0,g=0,p=0,f=0;const _=h.matrixWorldInverse;for(let w=0,E=u.length;w<E;w++){const y=u[w];if(y.isDirectionalLight){const L=i.directional[d];L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(_),d++}else if(y.isSpotLight){const L=i.spot[g];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const L=i.rectArea[p];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),L.halfWidth.set(y.width*.5,0,0),L.halfHeight.set(0,y.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),p++}else if(y.isPointLight){const L=i.point[m];L.position.setFromMatrixPosition(y.matrixWorld),L.position.applyMatrix4(_),m++}else if(y.isHemisphereLight){const L=i.hemi[f];L.direction.setFromMatrixPosition(y.matrixWorld),L.direction.transformDirection(_),f++}}}return{setup:c,setupView:l,state:i}}function ia(r,e){const t=new Md(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Sd(r,e){let t=new WeakMap;function n(s,o=0){let a;return t.has(s)===!1?(a=new ia(r,e),t.set(s,[a])):o>=t.get(s).length?(a=new ia(r,e),t.get(s).push(a)):a=t.get(s)[o],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ld extends ui{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ed extends ui{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Td=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pd=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ad(r,e,t){let n=new Os;const i=new Me,s=new Me,o=new Ze,a=new Ld({depthPacking:No}),c=new Ed,l={},u=t.maxTextureSize,h={0:yt,1:si,2:rn},d=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Td,fragmentShader:Pd}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new it(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new At(g,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha,this.render=function(y,L,A){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;const U=r.getRenderTarget(),b=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),B=r.state;B.setBlending(sn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);for(let N=0,ee=y.length;N<ee;N++){const te=y[N],I=te.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const Z=I.getFrameExtents();if(i.multiply(Z),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,I.mapSize.y=s.y)),I.map===null){const $=this.type!==ni?{minFilter:nt,magFilter:nt}:{};I.map=new wn(i.x,i.y,$),I.map.texture.name=te.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const H=I.getViewportCount();for(let $=0;$<H;$++){const Y=I.getViewport($);o.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),B.viewport(o),I.updateMatrices(te,$),n=I.getFrustum(),E(L,A,I.camera,te,this.type)}I.isPointLightShadow!==!0&&this.type===ni&&_(I,A),I.needsUpdate=!1}f.needsUpdate=!1,r.setRenderTarget(U,b,T)};function _(y,L){const A=e.update(p);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new wn(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(L,null,A,d,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(L,null,A,m,p,null)}function w(y,L,A,U,b,T){let B=null;const N=A.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(N!==void 0?B=N:B=A.isPointLight===!0?c:a,r.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0){const ee=B.uuid,te=L.uuid;let I=l[ee];I===void 0&&(I={},l[ee]=I);let Z=I[te];Z===void 0&&(Z=B.clone(),I[te]=Z),B=Z}return B.visible=L.visible,B.wireframe=L.wireframe,T===ni?B.side=L.shadowSide!==null?L.shadowSide:L.side:B.side=L.shadowSide!==null?L.shadowSide:h[L.side],B.alphaMap=L.alphaMap,B.alphaTest=L.alphaTest,B.clipShadows=L.clipShadows,B.clippingPlanes=L.clippingPlanes,B.clipIntersection=L.clipIntersection,B.displacementMap=L.displacementMap,B.displacementScale=L.displacementScale,B.displacementBias=L.displacementBias,B.wireframeLinewidth=L.wireframeLinewidth,B.linewidth=L.linewidth,A.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(B.referencePosition.setFromMatrixPosition(A.matrixWorld),B.nearDistance=U,B.farDistance=b),B}function E(y,L,A,U,b){if(y.visible===!1)return;if(y.layers.test(L.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===ni)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,y.matrixWorld);const N=e.update(y),ee=y.material;if(Array.isArray(ee)){const te=N.groups;for(let I=0,Z=te.length;I<Z;I++){const H=te[I],$=ee[H.materialIndex];if($&&$.visible){const Y=w(y,$,U,A.near,A.far,b);r.renderBufferDirect(A,null,N,Y,y,H)}}}else if(ee.visible){const te=w(y,ee,U,A.near,A.far,b);r.renderBufferDirect(A,null,N,te,y,null)}}const B=y.children;for(let N=0,ee=B.length;N<ee;N++)E(B[N],L,A,U,b)}}function Cd(r,e,t){const n=t.isWebGL2;function i(){let C=!1;const le=new Ze;let W=null;const oe=new Ze(0,0,0,0);return{setMask:function(ae){W!==ae&&!C&&(r.colorMask(ae,ae,ae,ae),W=ae)},setLocked:function(ae){C=ae},setClear:function(ae,Ce,$e,He,qt){qt===!0&&(ae*=He,Ce*=He,$e*=He),le.set(ae,Ce,$e,He),oe.equals(le)===!1&&(r.clearColor(ae,Ce,$e,He),oe.copy(le))},reset:function(){C=!1,W=null,oe.set(-1,0,0,0)}}}function s(){let C=!1,le=null,W=null,oe=null;return{setTest:function(ae){ae?De(2929):_e(2929)},setMask:function(ae){le!==ae&&!C&&(r.depthMask(ae),le=ae)},setFunc:function(ae){if(W!==ae){if(ae)switch(ae){case oo:r.depthFunc(512);break;case lo:r.depthFunc(519);break;case co:r.depthFunc(513);break;case ws:r.depthFunc(515);break;case uo:r.depthFunc(514);break;case ho:r.depthFunc(518);break;case fo:r.depthFunc(516);break;case po:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);W=ae}},setLocked:function(ae){C=ae},setClear:function(ae){oe!==ae&&(r.clearDepth(ae),oe=ae)},reset:function(){C=!1,le=null,W=null,oe=null}}}function o(){let C=!1,le=null,W=null,oe=null,ae=null,Ce=null,$e=null,He=null,qt=null;return{setTest:function(ze){C||(ze?De(2960):_e(2960))},setMask:function(ze){le!==ze&&!C&&(r.stencilMask(ze),le=ze)},setFunc:function(ze,Dt,mt){(W!==ze||oe!==Dt||ae!==mt)&&(r.stencilFunc(ze,Dt,mt),W=ze,oe=Dt,ae=mt)},setOp:function(ze,Dt,mt){(Ce!==ze||$e!==Dt||He!==mt)&&(r.stencilOp(ze,Dt,mt),Ce=ze,$e=Dt,He=mt)},setLocked:function(ze){C=ze},setClear:function(ze){qt!==ze&&(r.clearStencil(ze),qt=ze)},reset:function(){C=!1,le=null,W=null,oe=null,ae=null,Ce=null,$e=null,He=null,qt=null}}}const a=new i,c=new s,l=new o,u=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,p=[],f=null,_=!1,w=null,E=null,y=null,L=null,A=null,U=null,b=null,T=!1,B=null,N=null,ee=null,te=null,I=null;const Z=r.getParameter(35661);let H=!1,$=0;const Y=r.getParameter(7938);Y.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=$>=1):Y.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=$>=2);let z=null,V={};const ne=r.getParameter(3088),J=r.getParameter(2978),ie=new Ze().fromArray(ne),de=new Ze().fromArray(J);function be(C,le,W){const oe=new Uint8Array(4),ae=r.createTexture();r.bindTexture(C,ae),r.texParameteri(C,10241,9728),r.texParameteri(C,10240,9728);for(let Ce=0;Ce<W;Ce++)r.texImage2D(le+Ce,0,6408,1,1,0,6408,5121,oe);return ae}const j={};j[3553]=be(3553,3553,1),j[34067]=be(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),De(2929),c.setFunc(ws),je(!1),ft(qs),De(2884),Ve(sn);function De(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function _e(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function ve(C,le){return m[C]!==le?(r.bindFramebuffer(C,le),m[C]=le,n&&(C===36009&&(m[36160]=le),C===36160&&(m[36009]=le)),!0):!1}function ue(C,le){let W=p,oe=!1;if(C)if(W=g.get(le),W===void 0&&(W=[],g.set(le,W)),C.isWebGLMultipleRenderTargets){const ae=C.texture;if(W.length!==ae.length||W[0]!==36064){for(let Ce=0,$e=ae.length;Ce<$e;Ce++)W[Ce]=36064+Ce;W.length=ae.length,oe=!0}}else W[0]!==36064&&(W[0]=36064,oe=!0);else W[0]!==1029&&(W[0]=1029,oe=!0);oe&&(t.isWebGL2?r.drawBuffers(W):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W))}function Fe(C){return f!==C?(r.useProgram(C),f=C,!0):!1}const Se={[Gn]:32774,[Ka]:32778,[$a]:32779};if(n)Se[Zs]=32775,Se[Ks]=32776;else{const C=e.get("EXT_blend_minmax");C!==null&&(Se[Zs]=C.MIN_EXT,Se[Ks]=C.MAX_EXT)}const me={[Ja]:0,[Qa]:1,[eo]:768,[da]:770,[ao]:776,[so]:774,[no]:772,[to]:769,[fa]:771,[ro]:775,[io]:773};function Ve(C,le,W,oe,ae,Ce,$e,He){if(C===sn){_===!0&&(_e(3042),_=!1);return}if(_===!1&&(De(3042),_=!0),C!==Za){if(C!==w||He!==T){if((E!==Gn||A!==Gn)&&(r.blendEquation(32774),E=Gn,A=Gn),He)switch(C){case Vn:r.blendFuncSeparate(1,771,1,771);break;case js:r.blendFunc(1,1);break;case Xs:r.blendFuncSeparate(0,769,0,1);break;case Ys:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Vn:r.blendFuncSeparate(770,771,1,771);break;case js:r.blendFunc(770,1);break;case Xs:r.blendFuncSeparate(0,769,0,1);break;case Ys:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,L=null,U=null,b=null,w=C,T=He}return}ae=ae||le,Ce=Ce||W,$e=$e||oe,(le!==E||ae!==A)&&(r.blendEquationSeparate(Se[le],Se[ae]),E=le,A=ae),(W!==y||oe!==L||Ce!==U||$e!==b)&&(r.blendFuncSeparate(me[W],me[oe],me[Ce],me[$e]),y=W,L=oe,U=Ce,b=$e),w=C,T=null}function Qe(C,le){C.side===rn?_e(2884):De(2884);let W=C.side===yt;le&&(W=!W),je(W),C.blending===Vn&&C.transparent===!1?Ve(sn):Ve(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const oe=C.stencilWrite;l.setTest(oe),oe&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Ue(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?De(32926):_e(32926)}function je(C){B!==C&&(C?r.frontFace(2304):r.frontFace(2305),B=C)}function ft(C){C!==qa?(De(2884),C!==N&&(C===qs?r.cullFace(1029):C===ja?r.cullFace(1028):r.cullFace(1032))):_e(2884),N=C}function Xe(C){C!==ee&&(H&&r.lineWidth(C),ee=C)}function Ue(C,le,W){C?(De(32823),(te!==le||I!==W)&&(r.polygonOffset(le,W),te=le,I=W)):_e(32823)}function pt(C){C?De(3089):_e(3089)}function ct(C){C===void 0&&(C=33984+Z-1),z!==C&&(r.activeTexture(C),z=C)}function M(C,le){z===null&&ct();let W=V[z];W===void 0&&(W={type:void 0,texture:void 0},V[z]=W),(W.type!==C||W.texture!==le)&&(r.bindTexture(C,le||j[C]),W.type=C,W.texture=le)}function v(){const C=V[z];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function S(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ce(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function D(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function re(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(C){ie.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),ie.copy(C))}function he(C){de.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),de.copy(C))}function ge(C,le){let W=h.get(le);W===void 0&&(W=new WeakMap,h.set(le,W));let oe=W.get(C);oe===void 0&&(oe=r.getUniformBlockIndex(le,C.name),W.set(C,oe))}function we(C,le){const oe=h.get(le).get(C);u.get(C)!==oe&&(r.uniformBlockBinding(le,oe,C.__bindingPointIndex),u.set(C,oe))}function Ge(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},z=null,V={},m={},g=new WeakMap,p=[],f=null,_=!1,w=null,E=null,y=null,L=null,A=null,U=null,b=null,T=!1,B=null,N=null,ee=null,te=null,I=null,ie.set(0,0,r.canvas.width,r.canvas.height),de.set(0,0,r.canvas.width,r.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:De,disable:_e,bindFramebuffer:ve,drawBuffers:ue,useProgram:Fe,setBlending:Ve,setMaterial:Qe,setFlipSided:je,setCullFace:ft,setLineWidth:Xe,setPolygonOffset:Ue,setScissorTest:pt,activeTexture:ct,bindTexture:M,unbindTexture:v,compressedTexImage2D:q,texImage2D:fe,texImage3D:re,updateUBOMapping:ge,uniformBlockBinding:we,texStorage2D:ce,texStorage3D:D,texSubImage2D:Q,texSubImage3D:S,compressedTexSubImage2D:K,scissor:pe,viewport:he,reset:Ge}}function Rd(r,e,t,n,i,s,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(M,v){return _?new OffscreenCanvas(M,v):ai("canvas")}function E(M,v,q,Q){let S=1;if((M.width>Q||M.height>Q)&&(S=Q/Math.max(M.width,M.height)),S<1||v===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const K=v?Ts:Math.floor,ce=K(S*M.width),D=K(S*M.height);p===void 0&&(p=w(ce,D));const fe=q?w(ce,D):p;return fe.width=ce,fe.height=D,fe.getContext("2d").drawImage(M,0,0,ce,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+ce+"x"+D+")."),fe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function y(M){return Sr(M.width)&&Sr(M.height)}function L(M){return a?!1:M.wrapS!==Pt||M.wrapT!==Pt||M.minFilter!==nt&&M.minFilter!==bt}function A(M,v){return M.generateMipmaps&&v&&M.minFilter!==nt&&M.minFilter!==bt}function U(M){r.generateMipmap(M)}function b(M,v,q,Q,S=!1){if(a===!1)return v;if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=v;return v===6403&&(q===5126&&(K=33326),q===5131&&(K=33325),q===5121&&(K=33321)),v===33319&&(q===5126&&(K=33328),q===5131&&(K=33327),q===5121&&(K=33323)),v===6408&&(q===5126&&(K=34836),q===5131&&(K=34842),q===5121&&(K=Q===Be&&S===!1?35907:32856),q===32819&&(K=32854),q===32820&&(K=32855)),(K===33325||K===33326||K===33327||K===33328||K===34842||K===34836)&&e.get("EXT_color_buffer_float"),K}function T(M,v,q){return A(M,q)===!0||M.isFramebufferTexture&&M.minFilter!==nt&&M.minFilter!==bt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function B(M){return M===nt||M===$s||M===Qs?9728:9729}function N(M){const v=M.target;v.removeEventListener("dispose",N),te(v),v.isVideoTexture&&g.delete(v)}function ee(M){const v=M.target;v.removeEventListener("dispose",ee),Z(v)}function te(M){const v=n.get(M);if(v.__webglInit===void 0)return;const q=M.source,Q=f.get(q);if(Q){const S=Q[v.__cacheKey];S.usedTimes--,S.usedTimes===0&&I(M),Object.keys(Q).length===0&&f.delete(q)}n.remove(M)}function I(M){const v=n.get(M);r.deleteTexture(v.__webglTexture);const q=M.source,Q=f.get(q);delete Q[v.__cacheKey],o.memory.textures--}function Z(M){const v=M.texture,q=n.get(M),Q=n.get(v);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let S=0;S<6;S++)r.deleteFramebuffer(q.__webglFramebuffer[S]),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer[S]);else{if(r.deleteFramebuffer(q.__webglFramebuffer),q.__webglDepthbuffer&&r.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&r.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let S=0;S<q.__webglColorRenderbuffer.length;S++)q.__webglColorRenderbuffer[S]&&r.deleteRenderbuffer(q.__webglColorRenderbuffer[S]);q.__webglDepthRenderbuffer&&r.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let S=0,K=v.length;S<K;S++){const ce=n.get(v[S]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(v[S])}n.remove(v),n.remove(M)}let H=0;function $(){H=0}function Y(){const M=H;return M>=c&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+c),H+=1,M}function z(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.encoding),v.join()}function V(M,v){const q=n.get(M);if(M.isVideoTexture&&pt(M),M.isRenderTargetTexture===!1&&M.version>0&&q.__version!==M.version){const Q=M.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(q,M,v);return}}t.activeTexture(33984+v),t.bindTexture(3553,q.__webglTexture)}function ne(M,v){const q=n.get(M);if(M.version>0&&q.__version!==M.version){_e(q,M,v);return}t.activeTexture(33984+v),t.bindTexture(35866,q.__webglTexture)}function J(M,v){const q=n.get(M);if(M.version>0&&q.__version!==M.version){_e(q,M,v);return}t.activeTexture(33984+v),t.bindTexture(32879,q.__webglTexture)}function ie(M,v){const q=n.get(M);if(M.version>0&&q.__version!==M.version){ve(q,M,v);return}t.activeTexture(33984+v),t.bindTexture(34067,q.__webglTexture)}const de={[Ii]:10497,[Pt]:33071,[Ls]:33648},be={[nt]:9728,[$s]:9984,[Qs]:9986,[bt]:9729,[wo]:9985,[Oi]:9987};function j(M,v,q){if(q?(r.texParameteri(M,10242,de[v.wrapS]),r.texParameteri(M,10243,de[v.wrapT]),(M===32879||M===35866)&&r.texParameteri(M,32882,de[v.wrapR]),r.texParameteri(M,10240,be[v.magFilter]),r.texParameteri(M,10241,be[v.minFilter])):(r.texParameteri(M,10242,33071),r.texParameteri(M,10243,33071),(M===32879||M===35866)&&r.texParameteri(M,32882,33071),(v.wrapS!==Pt||v.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(M,10240,B(v.magFilter)),r.texParameteri(M,10241,B(v.minFilter)),v.minFilter!==nt&&v.minFilter!==bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Q=e.get("EXT_texture_filter_anisotropic");if(v.type===mn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ri&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(r.texParameterf(M,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function De(M,v){let q=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",N));const Q=v.source;let S=f.get(Q);S===void 0&&(S={},f.set(Q,S));const K=z(v);if(K!==M.__cacheKey){S[K]===void 0&&(S[K]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),S[K].usedTimes++;const ce=S[M.__cacheKey];ce!==void 0&&(S[M.__cacheKey].usedTimes--,ce.usedTimes===0&&I(v)),M.__cacheKey=K,M.__webglTexture=S[K].texture}return q}function _e(M,v,q){let Q=3553;v.isDataArrayTexture&&(Q=35866),v.isData3DTexture&&(Q=32879);const S=De(M,v),K=v.source;if(t.activeTexture(33984+q),t.bindTexture(Q,M.__webglTexture),K.version!==K.__currentVersion||S===!0){r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const ce=L(v)&&y(v.image)===!1;let D=E(v.image,ce,!1,u);D=ct(v,D);const fe=y(D)||a,re=s.convert(v.format,v.encoding);let pe=s.convert(v.type),he=b(v.internalFormat,re,pe,v.encoding,v.isVideoTexture);j(Q,v,fe);let ge;const we=v.mipmaps,Ge=a&&v.isVideoTexture!==!0,C=K.__currentVersion===void 0||S===!0,le=T(v,D,fe);if(v.isDepthTexture)he=6402,a?v.type===mn?he=36012:v.type===pn?he=33190:v.type===Wn?he=35056:he=33189:v.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===_n&&he===6402&&v.type!==ma&&v.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=pn,pe=s.convert(v.type)),v.format===Xn&&he===6402&&(he=34041,v.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Wn,pe=s.convert(v.type))),C&&(Ge?t.texStorage2D(3553,1,he,D.width,D.height):t.texImage2D(3553,0,he,D.width,D.height,0,re,pe,null));else if(v.isDataTexture)if(we.length>0&&fe){Ge&&C&&t.texStorage2D(3553,le,he,we[0].width,we[0].height);for(let W=0,oe=we.length;W<oe;W++)ge=we[W],Ge?t.texSubImage2D(3553,W,0,0,ge.width,ge.height,re,pe,ge.data):t.texImage2D(3553,W,he,ge.width,ge.height,0,re,pe,ge.data);v.generateMipmaps=!1}else Ge?(C&&t.texStorage2D(3553,le,he,D.width,D.height),t.texSubImage2D(3553,0,0,0,D.width,D.height,re,pe,D.data)):t.texImage2D(3553,0,he,D.width,D.height,0,re,pe,D.data);else if(v.isCompressedTexture){Ge&&C&&t.texStorage2D(3553,le,he,we[0].width,we[0].height);for(let W=0,oe=we.length;W<oe;W++)ge=we[W],v.format!==Rt?re!==null?Ge?t.compressedTexSubImage2D(3553,W,0,0,ge.width,ge.height,re,ge.data):t.compressedTexImage2D(3553,W,he,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,W,0,0,ge.width,ge.height,re,pe,ge.data):t.texImage2D(3553,W,he,ge.width,ge.height,0,re,pe,ge.data)}else if(v.isDataArrayTexture)Ge?(C&&t.texStorage3D(35866,le,he,D.width,D.height,D.depth),t.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,re,pe,D.data)):t.texImage3D(35866,0,he,D.width,D.height,D.depth,0,re,pe,D.data);else if(v.isData3DTexture)Ge?(C&&t.texStorage3D(32879,le,he,D.width,D.height,D.depth),t.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,re,pe,D.data)):t.texImage3D(32879,0,he,D.width,D.height,D.depth,0,re,pe,D.data);else if(v.isFramebufferTexture){if(C)if(Ge)t.texStorage2D(3553,le,he,D.width,D.height);else{let W=D.width,oe=D.height;for(let ae=0;ae<le;ae++)t.texImage2D(3553,ae,he,W,oe,0,re,pe,null),W>>=1,oe>>=1}}else if(we.length>0&&fe){Ge&&C&&t.texStorage2D(3553,le,he,we[0].width,we[0].height);for(let W=0,oe=we.length;W<oe;W++)ge=we[W],Ge?t.texSubImage2D(3553,W,0,0,re,pe,ge):t.texImage2D(3553,W,he,re,pe,ge);v.generateMipmaps=!1}else Ge?(C&&t.texStorage2D(3553,le,he,D.width,D.height),t.texSubImage2D(3553,0,0,0,re,pe,D)):t.texImage2D(3553,0,he,re,pe,D);A(v,fe)&&U(Q),K.__currentVersion=K.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ve(M,v,q){if(v.image.length!==6)return;const Q=De(M,v),S=v.source;if(t.activeTexture(33984+q),t.bindTexture(34067,M.__webglTexture),S.version!==S.__currentVersion||Q===!0){r.pixelStorei(37440,v.flipY),r.pixelStorei(37441,v.premultiplyAlpha),r.pixelStorei(3317,v.unpackAlignment),r.pixelStorei(37443,0);const K=v.isCompressedTexture||v.image[0].isCompressedTexture,ce=v.image[0]&&v.image[0].isDataTexture,D=[];for(let W=0;W<6;W++)!K&&!ce?D[W]=E(v.image[W],!1,!0,l):D[W]=ce?v.image[W].image:v.image[W],D[W]=ct(v,D[W]);const fe=D[0],re=y(fe)||a,pe=s.convert(v.format,v.encoding),he=s.convert(v.type),ge=b(v.internalFormat,pe,he,v.encoding),we=a&&v.isVideoTexture!==!0,Ge=S.__currentVersion===void 0||Q===!0;let C=T(v,fe,re);j(34067,v,re);let le;if(K){we&&Ge&&t.texStorage2D(34067,C,ge,fe.width,fe.height);for(let W=0;W<6;W++){le=D[W].mipmaps;for(let oe=0;oe<le.length;oe++){const ae=le[oe];v.format!==Rt?pe!==null?we?t.compressedTexSubImage2D(34069+W,oe,0,0,ae.width,ae.height,pe,ae.data):t.compressedTexImage2D(34069+W,oe,ge,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):we?t.texSubImage2D(34069+W,oe,0,0,ae.width,ae.height,pe,he,ae.data):t.texImage2D(34069+W,oe,ge,ae.width,ae.height,0,pe,he,ae.data)}}}else{le=v.mipmaps,we&&Ge&&(le.length>0&&C++,t.texStorage2D(34067,C,ge,D[0].width,D[0].height));for(let W=0;W<6;W++)if(ce){we?t.texSubImage2D(34069+W,0,0,0,D[W].width,D[W].height,pe,he,D[W].data):t.texImage2D(34069+W,0,ge,D[W].width,D[W].height,0,pe,he,D[W].data);for(let oe=0;oe<le.length;oe++){const Ce=le[oe].image[W].image;we?t.texSubImage2D(34069+W,oe+1,0,0,Ce.width,Ce.height,pe,he,Ce.data):t.texImage2D(34069+W,oe+1,ge,Ce.width,Ce.height,0,pe,he,Ce.data)}}else{we?t.texSubImage2D(34069+W,0,0,0,pe,he,D[W]):t.texImage2D(34069+W,0,ge,pe,he,D[W]);for(let oe=0;oe<le.length;oe++){const ae=le[oe];we?t.texSubImage2D(34069+W,oe+1,0,0,pe,he,ae.image[W]):t.texImage2D(34069+W,oe+1,ge,pe,he,ae.image[W])}}}A(v,re)&&U(34067),S.__currentVersion=S.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ue(M,v,q,Q,S){const K=s.convert(q.format,q.encoding),ce=s.convert(q.type),D=b(q.internalFormat,K,ce,q.encoding);n.get(v).__hasExternalTextures||(S===32879||S===35866?t.texImage3D(S,0,D,v.width,v.height,v.depth,0,K,ce,null):t.texImage2D(S,0,D,v.width,v.height,0,K,ce,null)),t.bindFramebuffer(36160,M),Ue(v)?d.framebufferTexture2DMultisampleEXT(36160,Q,S,n.get(q).__webglTexture,0,Xe(v)):r.framebufferTexture2D(36160,Q,S,n.get(q).__webglTexture,0),t.bindFramebuffer(36160,null)}function Fe(M,v,q){if(r.bindRenderbuffer(36161,M),v.depthBuffer&&!v.stencilBuffer){let Q=33189;if(q||Ue(v)){const S=v.depthTexture;S&&S.isDepthTexture&&(S.type===mn?Q=36012:S.type===pn&&(Q=33190));const K=Xe(v);Ue(v)?d.renderbufferStorageMultisampleEXT(36161,K,Q,v.width,v.height):r.renderbufferStorageMultisample(36161,K,Q,v.width,v.height)}else r.renderbufferStorage(36161,Q,v.width,v.height);r.framebufferRenderbuffer(36160,36096,36161,M)}else if(v.depthBuffer&&v.stencilBuffer){const Q=Xe(v);q&&Ue(v)===!1?r.renderbufferStorageMultisample(36161,Q,35056,v.width,v.height):Ue(v)?d.renderbufferStorageMultisampleEXT(36161,Q,35056,v.width,v.height):r.renderbufferStorage(36161,34041,v.width,v.height),r.framebufferRenderbuffer(36160,33306,36161,M)}else{const Q=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let S=0;S<Q.length;S++){const K=Q[S],ce=s.convert(K.format,K.encoding),D=s.convert(K.type),fe=b(K.internalFormat,ce,D,K.encoding),re=Xe(v);q&&Ue(v)===!1?r.renderbufferStorageMultisample(36161,re,fe,v.width,v.height):Ue(v)?d.renderbufferStorageMultisampleEXT(36161,re,fe,v.width,v.height):r.renderbufferStorage(36161,fe,v.width,v.height)}}r.bindRenderbuffer(36161,null)}function Se(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),V(v.depthTexture,0);const Q=n.get(v.depthTexture).__webglTexture,S=Xe(v);if(v.depthTexture.format===_n)Ue(v)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,S):r.framebufferTexture2D(36160,36096,3553,Q,0);else if(v.depthTexture.format===Xn)Ue(v)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,S):r.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function me(M){const v=n.get(M),q=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Se(v.__webglFramebuffer,M)}else if(q){v.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)t.bindFramebuffer(36160,v.__webglFramebuffer[Q]),v.__webglDepthbuffer[Q]=r.createRenderbuffer(),Fe(v.__webglDepthbuffer[Q],M,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Fe(v.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function Ve(M,v,q){const Q=n.get(M);v!==void 0&&ue(Q.__webglFramebuffer,M,M.texture,36064,3553),q!==void 0&&me(M)}function Qe(M){const v=M.texture,q=n.get(M),Q=n.get(v);M.addEventListener("dispose",ee),M.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=v.version,o.memory.textures++);const S=M.isWebGLCubeRenderTarget===!0,K=M.isWebGLMultipleRenderTargets===!0,ce=y(M)||a;if(S){q.__webglFramebuffer=[];for(let D=0;D<6;D++)q.__webglFramebuffer[D]=r.createFramebuffer()}else{if(q.__webglFramebuffer=r.createFramebuffer(),K)if(i.drawBuffers){const D=M.texture;for(let fe=0,re=D.length;fe<re;fe++){const pe=n.get(D[fe]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Ue(M)===!1){const D=K?v:[v];q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,q.__webglMultisampledFramebuffer);for(let fe=0;fe<D.length;fe++){const re=D[fe];q.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(36161,q.__webglColorRenderbuffer[fe]);const pe=s.convert(re.format,re.encoding),he=s.convert(re.type),ge=b(re.internalFormat,pe,he,re.encoding),we=Xe(M);r.renderbufferStorageMultisample(36161,we,ge,M.width,M.height),r.framebufferRenderbuffer(36160,36064+fe,36161,q.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(36161,null),M.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Fe(q.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(S){t.bindTexture(34067,Q.__webglTexture),j(34067,v,ce);for(let D=0;D<6;D++)ue(q.__webglFramebuffer[D],M,v,36064,34069+D);A(v,ce)&&U(34067),t.unbindTexture()}else if(K){const D=M.texture;for(let fe=0,re=D.length;fe<re;fe++){const pe=D[fe],he=n.get(pe);t.bindTexture(3553,he.__webglTexture),j(3553,pe,ce),ue(q.__webglFramebuffer,M,pe,36064+fe,3553),A(pe,ce)&&U(3553)}t.unbindTexture()}else{let D=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?D=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(D,Q.__webglTexture),j(D,v,ce),ue(q.__webglFramebuffer,M,v,36064,D),A(v,ce)&&U(D),t.unbindTexture()}M.depthBuffer&&me(M)}function je(M){const v=y(M)||a,q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0,S=q.length;Q<S;Q++){const K=q[Q];if(A(K,v)){const ce=M.isWebGLCubeRenderTarget?34067:3553,D=n.get(K).__webglTexture;t.bindTexture(ce,D),U(ce),t.unbindTexture()}}}function ft(M){if(a&&M.samples>0&&Ue(M)===!1){const v=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],q=M.width,Q=M.height;let S=16384;const K=[],ce=M.stencilBuffer?33306:36096,D=n.get(M),fe=M.isWebGLMultipleRenderTargets===!0;if(fe)for(let re=0;re<v.length;re++)t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+re,36161,null),t.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+re,3553,null,0);t.bindFramebuffer(36008,D.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,D.__webglFramebuffer);for(let re=0;re<v.length;re++){K.push(36064+re),M.depthBuffer&&K.push(ce);const pe=D.__ignoreDepthValues!==void 0?D.__ignoreDepthValues:!1;if(pe===!1&&(M.depthBuffer&&(S|=256),M.stencilBuffer&&(S|=1024)),fe&&r.framebufferRenderbuffer(36008,36064,36161,D.__webglColorRenderbuffer[re]),pe===!0&&(r.invalidateFramebuffer(36008,[ce]),r.invalidateFramebuffer(36009,[ce])),fe){const he=n.get(v[re]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,he,0)}r.blitFramebuffer(0,0,q,Q,0,0,q,Q,S,9728),m&&r.invalidateFramebuffer(36008,K)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),fe)for(let re=0;re<v.length;re++){t.bindFramebuffer(36160,D.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+re,36161,D.__webglColorRenderbuffer[re]);const pe=n.get(v[re]).__webglTexture;t.bindFramebuffer(36160,D.__webglFramebuffer),r.framebufferTexture2D(36009,36064+re,3553,pe,0)}t.bindFramebuffer(36009,D.__webglMultisampledFramebuffer)}}function Xe(M){return Math.min(h,M.samples)}function Ue(M){const v=n.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function pt(M){const v=o.render.frame;g.get(M)!==v&&(g.set(M,v),M.update())}function ct(M,v){const q=M.encoding,Q=M.format,S=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Es||q!==yn&&(q===Be?a===!1?e.has("EXT_sRGB")===!0&&Q===Rt?(M.format=Es,M.minFilter=bt,M.generateMipmaps=!1):v=ba.sRGBToLinear(v):(Q!==Rt||S!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",q)),v}this.allocateTextureUnit=Y,this.resetTextureUnits=$,this.setTexture2D=V,this.setTexture2DArray=ne,this.setTexture3D=J,this.setTextureCube=ie,this.rebindTextures=Ve,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ue}function kd(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===xn)return 5121;if(s===Eo)return 32819;if(s===To)return 32820;if(s===Mo)return 5120;if(s===So)return 5122;if(s===ma)return 5123;if(s===Lo)return 5124;if(s===pn)return 5125;if(s===mn)return 5126;if(s===ri)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Po)return 6406;if(s===Rt)return 6408;if(s===Co)return 6409;if(s===Ro)return 6410;if(s===_n)return 6402;if(s===Xn)return 34041;if(s===ko)return 6403;if(s===Ao)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Es)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Do)return 36244;if(s===Io)return 33319;if(s===Fo)return 33320;if(s===Uo)return 36249;if(s===Vi||s===Wi||s===qi||s===ji)if(o===Be)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vi)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Wi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===qi)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ji)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vi)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Wi)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===qi)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ji)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===er||s===tr||s===nr||s===ir)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===er)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ir)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Oo)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===sr||s===rr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===sr)return o===Be?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===rr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ar||s===or||s===lr||s===cr||s===ur||s===hr||s===dr||s===fr||s===pr||s===mr||s===gr||s===_r||s===br||s===vr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ar)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===or)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ur)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===hr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===dr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===fr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_r)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===br)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===vr)return o===Be?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===xr)return o===Be?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Wn?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Dd extends vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ri extends lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Id={type:"move"};class ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const p of e.hand.values()){const f=t.getJointPose(p,n);if(l.joints[p.jointName]===void 0){const w=new Ri;w.matrixAutoUpdate=!1,w.visible=!1,l.joints[p.jointName]=w,l.add(w)}const _=l.joints[p.jointName];f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=f.radius),_.visible=f!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Id)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class Fd extends wt{constructor(e,t,n,i,s,o,a,c,l,u){if(u=u!==void 0?u:_n,u!==_n&&u!==Xn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_n&&(n=pn),n===void 0&&u===Xn&&(n=Wn),super(null,i,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:nt,this.minFilter=c!==void 0?c:nt,this.flipY=!1,this.generateMipmaps=!1}}class Ud extends Wt{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,h=null,d=null,m=null;const g=t.getContextAttributes();let p=null,f=null;const _=[],w=[],E=new vt;E.layers.enable(1),E.viewport=new Ze;const y=new vt;y.layers.enable(2),y.viewport=new Ze;const L=[E,y],A=new Dd;A.layers.enable(1),A.layers.enable(2);let U=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let V=_[z];return V===void 0&&(V=new ys,_[z]=V),V.getTargetRaySpace()},this.getControllerGrip=function(z){let V=_[z];return V===void 0&&(V=new ys,_[z]=V),V.getGripSpace()},this.getHand=function(z){let V=_[z];return V===void 0&&(V=new ys,_[z]=V),V.getHandSpace()};function T(z){const V=w.indexOf(z.inputSource);if(V===-1)return;const ne=_[V];ne!==void 0&&ne.dispatchEvent({type:z.type,data:z.inputSource})}function B(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",N);for(let z=0;z<_.length;z++){const V=w[z];V!==null&&(w[z]=null,_[z].disconnect(V))}U=null,b=null,e.setRenderTarget(p),d=null,h=null,u=null,i=null,f=null,Y.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(z){if(i=z,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",B),i.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:d}),f=new wn(d.framebufferWidth,d.framebufferHeight,{format:Rt,type:xn,encoding:e.outputEncoding})}else{let V=null,ne=null,J=null;g.depth&&(J=g.stencil?35056:33190,V=g.stencil?Xn:_n,ne=g.stencil?Wn:pn);const ie={colorFormat:32856,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(ie),i.updateRenderState({layers:[h]}),f=new wn(h.textureWidth,h.textureHeight,{format:Rt,type:xn,depthTexture:new Fd(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const de=e.properties.get(f);de.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await i.requestReferenceSpace(a),Y.setContext(i),Y.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(z){for(let V=0;V<z.removed.length;V++){const ne=z.removed[V],J=w.indexOf(ne);J>=0&&(w[J]=null,_[J].dispatchEvent({type:"disconnected",data:ne}))}for(let V=0;V<z.added.length;V++){const ne=z.added[V];let J=w.indexOf(ne);if(J===-1){for(let de=0;de<_.length;de++)if(de>=w.length){w.push(ne),J=de;break}else if(w[de]===null){w[de]=ne,J=de;break}if(J===-1)break}const ie=_[J];ie&&ie.dispatchEvent({type:"connected",data:ne})}}const ee=new P,te=new P;function I(z,V,ne){ee.setFromMatrixPosition(V.matrixWorld),te.setFromMatrixPosition(ne.matrixWorld);const J=ee.distanceTo(te),ie=V.projectionMatrix.elements,de=ne.projectionMatrix.elements,be=ie[14]/(ie[10]-1),j=ie[14]/(ie[10]+1),De=(ie[9]+1)/ie[5],_e=(ie[9]-1)/ie[5],ve=(ie[8]-1)/ie[0],ue=(de[8]+1)/de[0],Fe=be*ve,Se=be*ue,me=J/(-ve+ue),Ve=me*-ve;V.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ve),z.translateZ(me),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Qe=be+me,je=j+me,ft=Fe-Ve,Xe=Se+(J-Ve),Ue=De*j/je*Qe,pt=_e*j/je*Qe;z.projectionMatrix.makePerspective(ft,Xe,Ue,pt,Qe,je)}function Z(z,V){V===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(V.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(i===null)return;A.near=y.near=E.near=z.near,A.far=y.far=E.far=z.far,(U!==A.near||b!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),U=A.near,b=A.far);const V=z.parent,ne=A.cameras;Z(A,V);for(let ie=0;ie<ne.length;ie++)Z(ne[ie],V);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),z.position.copy(A.position),z.quaternion.copy(A.quaternion),z.scale.copy(A.scale),z.matrix.copy(A.matrix),z.matrixWorld.copy(A.matrixWorld);const J=z.children;for(let ie=0,de=J.length;ie<de;ie++)J[ie].updateMatrixWorld(!0);ne.length===2?I(A,E,y):A.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(z){h!==null&&(h.fixedFoveation=z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=z)};let H=null;function $(z,V){if(l=V.getViewerPose(c||o),m=V,l!==null){const ne=l.views;d!==null&&(e.setRenderTargetFramebuffer(f,d.framebuffer),e.setRenderTarget(f));let J=!1;ne.length!==A.cameras.length&&(A.cameras.length=0,J=!0);for(let ie=0;ie<ne.length;ie++){const de=ne[ie];let be=null;if(d!==null)be=d.getViewport(de);else{const De=u.getViewSubImage(h,de);be=De.viewport,ie===0&&(e.setRenderTargetTextures(f,De.colorTexture,h.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(f))}let j=L[ie];j===void 0&&(j=new vt,j.layers.enable(ie),j.viewport=new Ze,L[ie]=j),j.matrix.fromArray(de.transform.matrix),j.projectionMatrix.fromArray(de.projectionMatrix),j.viewport.set(be.x,be.y,be.width,be.height),ie===0&&A.matrix.copy(j.matrix),J===!0&&A.cameras.push(j)}}for(let ne=0;ne<_.length;ne++){const J=w[ne],ie=_[ne];J!==null&&ie!==void 0&&ie.update(J,V,c||o)}H&&H(z,V),m=null}const Y=new La;Y.setAnimationLoop($),this.setAnimationLoop=function(z){H=z},this.dispose=function(){}}}function Od(r,e){function t(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,_,w,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),h(p,f),f.isMeshPhysicalMaterial&&d(p,f,E)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?a(p,f,_,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===yt&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===yt&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const y=r.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let w;f.map?w=f.map:f.specularMap?w=f.specularMap:f.displacementMap?w=f.displacementMap:f.normalMap?w=f.normalMap:f.bumpMap?w=f.bumpMap:f.roughnessMap?w=f.roughnessMap:f.metalnessMap?w=f.metalnessMap:f.alphaMap?w=f.alphaMap:f.emissiveMap?w=f.emissiveMap:f.clearcoatMap?w=f.clearcoatMap:f.clearcoatNormalMap?w=f.clearcoatNormalMap:f.clearcoatRoughnessMap?w=f.clearcoatRoughnessMap:f.iridescenceMap?w=f.iridescenceMap:f.iridescenceThicknessMap?w=f.iridescenceThicknessMap:f.specularIntensityMap?w=f.specularIntensityMap:f.specularColorMap?w=f.specularColorMap:f.transmissionMap?w=f.transmissionMap:f.thicknessMap?w=f.thicknessMap:f.sheenColorMap?w=f.sheenColorMap:f.sheenRoughnessMap&&(w=f.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let E;f.aoMap?E=f.aoMap:f.lightMap&&(E=f.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uv2Transform.value.copy(E.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function a(p,f,_,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*_,p.scale.value=w*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let E;f.map?E=f.map:f.alphaMap&&(E=f.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),p.uvTransform.value.copy(E.matrix))}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let _;f.map?_=f.map:f.alphaMap&&(_=f.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function d(p,f,_){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===yt&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function zd(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function c(w,E){const y=E.program;n.uniformBlockBinding(w,y)}function l(w,E){let y=i[w.id];y===void 0&&(g(w),y=u(w),i[w.id]=y,w.addEventListener("dispose",f));const L=E.program;n.updateUBOMapping(w,L);const A=e.render.frame;s[w.id]!==A&&(d(w),s[w.id]=A)}function u(w){const E=h();w.__bindingPointIndex=E;const y=r.createBuffer(),L=w.__size,A=w.usage;return r.bindBuffer(35345,y),r.bufferData(35345,L,A),r.bindBuffer(35345,null),r.bindBufferBase(35345,E,y),y}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const E=i[w.id],y=w.uniforms,L=w.__cache;r.bindBuffer(35345,E);for(let A=0,U=y.length;A<U;A++){const b=y[A];if(m(b,A,L)===!0){const T=b.value,B=b.__offset;typeof T=="number"?(b.__data[0]=T,r.bufferSubData(35345,B,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):T.toArray(b.__data),r.bufferSubData(35345,B,b.__data))}}r.bindBuffer(35345,null)}function m(w,E,y){const L=w.value;if(y[E]===void 0)return typeof L=="number"?y[E]=L:y[E]=L.clone(),!0;if(typeof L=="number"){if(y[E]!==L)return y[E]=L,!0}else{const A=y[E];if(A.equals(L)===!1)return A.copy(L),!0}return!1}function g(w){const E=w.uniforms;let y=0;const L=16;let A=0;for(let U=0,b=E.length;U<b;U++){const T=E[U],B=p(T);if(T.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=y,U>0){A=y%L;const N=L-A;A!==0&&N-B.boundary<0&&(y+=L-A,T.__offset=y)}y+=B.storage}return A=y%L,A>0&&(y+=L-A),w.__size=y,w.__cache={},this}function p(w){const E=w.value,y={boundary:0,storage:0};return typeof E=="number"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function f(w){const E=w.target;E.removeEventListener("dispose",f);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function _(){for(const w in i)r.deleteBuffer(i[w]);o=[],i={},s={}}return{bind:c,update:l,dispose:_}}function Nd(){const r=ai("canvas");return r.style.display="block",r}function ka(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:Nd(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,c=r.powerPreference!==void 0?r.powerPreference:"default",l=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,d=null;const m=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yn,this.physicallyCorrectLights=!1,this.toneMapping=Gt,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const p=this;let f=!1,_=0,w=0,E=null,y=-1,L=null;const A=new Ze,U=new Ze;let b=null,T=e.width,B=e.height,N=1,ee=null,te=null;const I=new Ze(0,0,T,B),Z=new Ze(0,0,T,B);let H=!1;const $=new Os;let Y=!1,z=!1,V=null;const ne=new Ke,J=new Me,ie=new P,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return E===null?N:1}let j=t;function De(x,k){for(let G=0;G<x.length;G++){const O=x[G],X=e.getContext(O,k);if(X!==null)return X}return null}try{const x={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Rs}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",we,!1),e.addEventListener("webglcontextcreationerror",Ge,!1),j===null){const k=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&k.shift(),j=De(k,x),j===null)throw De(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let _e,ve,ue,Fe,Se,me,Ve,Qe,je,ft,Xe,Ue,pt,ct,M,v,q,Q,S,K,ce,D,fe,re;function pe(){_e=new Zu(j),ve=new Vu(j,_e,r),_e.init(ve),D=new kd(j,_e,ve),ue=new Cd(j,_e,ve),Fe=new Ju,Se=new gd,me=new Rd(j,_e,ue,Se,ve,D,Fe),Ve=new qu(p),Qe=new Yu(p),je=new ul(j,ve),fe=new Gu(j,_e,je,ve),ft=new Ku(j,je,Fe,fe),Xe=new nh(j,ft,je,Fe),S=new th(j,ve,me),v=new Wu(Se),Ue=new md(p,Ve,Qe,_e,ve,fe,v),pt=new Od(p,Se),ct=new bd,M=new Sd(_e,ve),Q=new Bu(p,Ve,ue,Xe,u,o),q=new Ad(p,Xe,ve),re=new zd(j,Fe,ve,ue),K=new Hu(j,_e,Fe,ve),ce=new $u(j,_e,Fe,ve),Fe.programs=Ue.programs,p.capabilities=ve,p.extensions=_e,p.properties=Se,p.renderLists=ct,p.shadowMap=q,p.state=ue,p.info=Fe}pe();const he=new Ud(p,j);this.xr=he,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const x=_e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=_e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(x){x!==void 0&&(N=x,this.setSize(T,B,!1))},this.getSize=function(x){return x.set(T,B)},this.setSize=function(x,k,G){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=x,B=k,e.width=Math.floor(x*N),e.height=Math.floor(k*N),G!==!1&&(e.style.width=x+"px",e.style.height=k+"px"),this.setViewport(0,0,x,k)},this.getDrawingBufferSize=function(x){return x.set(T*N,B*N).floor()},this.setDrawingBufferSize=function(x,k,G){T=x,B=k,N=G,e.width=Math.floor(x*G),e.height=Math.floor(k*G),this.setViewport(0,0,x,k)},this.getCurrentViewport=function(x){return x.copy(A)},this.getViewport=function(x){return x.copy(I)},this.setViewport=function(x,k,G,O){x.isVector4?I.set(x.x,x.y,x.z,x.w):I.set(x,k,G,O),ue.viewport(A.copy(I).multiplyScalar(N).floor())},this.getScissor=function(x){return x.copy(Z)},this.setScissor=function(x,k,G,O){x.isVector4?Z.set(x.x,x.y,x.z,x.w):Z.set(x,k,G,O),ue.scissor(U.copy(Z).multiplyScalar(N).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(x){ue.setScissorTest(H=x)},this.setOpaqueSort=function(x){ee=x},this.setTransparentSort=function(x){te=x},this.getClearColor=function(x){return x.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(x=!0,k=!0,G=!0){let O=0;x&&(O|=16384),k&&(O|=256),G&&(O|=1024),j.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",we,!1),e.removeEventListener("webglcontextcreationerror",Ge,!1),ct.dispose(),M.dispose(),Se.dispose(),Ve.dispose(),Qe.dispose(),Xe.dispose(),fe.dispose(),re.dispose(),Ue.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ce),he.removeEventListener("sessionend",$e),V&&(V.dispose(),V=null),He.stop()};function ge(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;const x=Fe.autoReset,k=q.enabled,G=q.autoUpdate,O=q.needsUpdate,X=q.type;pe(),Fe.autoReset=x,q.enabled=k,q.autoUpdate=G,q.needsUpdate=O,q.type=X}function Ge(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function C(x){const k=x.target;k.removeEventListener("dispose",C),le(k)}function le(x){W(x),Se.remove(x)}function W(x){const k=Se.get(x).programs;k!==void 0&&(k.forEach(function(G){Ue.releaseProgram(G)}),x.isShaderMaterial&&Ue.releaseShaderCache(x))}this.renderBufferDirect=function(x,k,G,O,X,xe){k===null&&(k=de);const ye=X.isMesh&&X.matrixWorld.determinant()<0,Ee=Ga(x,k,G,O,X);ue.setMaterial(O,ye);let Le=G.index;const Oe=G.attributes.position;if(Le===null){if(Oe===void 0||Oe.count===0)return}else if(Le.count===0)return;let Ae=1;O.wireframe===!0&&(Le=ft.getWireframeAttribute(G),Ae=2),fe.setup(X,O,Ee,G,Le);let Re,Ne=K;Le!==null&&(Re=je.get(Le),Ne=ce,Ne.setIndex(Re));const on=Le!==null?Le.count:Oe.count,Sn=G.drawRange.start*Ae,Ln=G.drawRange.count*Ae,Ct=xe!==null?xe.start*Ae:0,Ie=xe!==null?xe.count*Ae:1/0,En=Math.max(Sn,Ct),We=Math.min(on,Sn+Ln,Ct+Ie)-1,gt=Math.max(0,We-En+1);if(gt!==0){if(X.isMesh)O.wireframe===!0?(ue.setLineWidth(O.wireframeLinewidth*be()),Ne.setMode(1)):Ne.setMode(4);else if(X.isLine){let jt=O.linewidth;jt===void 0&&(jt=1),ue.setLineWidth(jt*be()),X.isLineSegments?Ne.setMode(1):X.isLineLoop?Ne.setMode(2):Ne.setMode(3)}else X.isPoints?Ne.setMode(0):X.isSprite&&Ne.setMode(4);if(X.isInstancedMesh)Ne.renderInstances(En,gt,X.count);else if(G.isInstancedBufferGeometry){const jt=Math.min(G.instanceCount,G._maxInstanceCount);Ne.renderInstances(En,gt,jt)}else Ne.render(En,gt)}},this.compile=function(x,k){d=M.get(x),d.init(),g.push(d),x.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights(p.physicallyCorrectLights),x.traverse(function(G){const O=G.material;if(O)if(Array.isArray(O))for(let X=0;X<O.length;X++){const xe=O[X];Ni(xe,x,G)}else Ni(O,x,G)}),g.pop(),d=null};let oe=null;function ae(x){oe&&oe(x)}function Ce(){He.stop()}function $e(){He.start()}const He=new La;He.setAnimationLoop(ae),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(x){oe=x,he.setAnimationLoop(x),x===null?He.stop():He.start()},he.addEventListener("sessionstart",Ce),he.addEventListener("sessionend",$e),this.render=function(x,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;x.autoUpdate===!0&&x.updateMatrixWorld(),k.parent===null&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),x.isScene===!0&&x.onBeforeRender(p,x,k,E),d=M.get(x,g.length),d.init(),g.push(d),ne.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),$.setFromProjectionMatrix(ne),z=this.localClippingEnabled,Y=v.init(this.clippingPlanes,z,k),h=ct.get(x,m.length),h.init(),m.push(h),qt(x,k,0,p.sortObjects),h.finish(),p.sortObjects===!0&&h.sort(ee,te),Y===!0&&v.beginShadows();const G=d.state.shadowsArray;if(q.render(G,x,k),Y===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(h,x),d.setupLights(p.physicallyCorrectLights),k.isArrayCamera){const O=k.cameras;for(let X=0,xe=O.length;X<xe;X++){const ye=O[X];ze(h,x,ye,ye.viewport)}}else ze(h,x,k);E!==null&&(me.updateMultisampleRenderTarget(E),me.updateRenderTargetMipmap(E)),x.isScene===!0&&x.onAfterRender(p,x,k),fe.resetDefaultState(),y=-1,L=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function qt(x,k,G,O){if(x.visible===!1)return;if(x.layers.test(k.layers)){if(x.isGroup)G=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(k);else if(x.isLight)d.pushLight(x),x.castShadow&&d.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||$.intersectsSprite(x)){O&&ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ne);const ye=Xe.update(x),Ee=x.material;Ee.visible&&h.push(x,ye,Ee,G,ie.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(x.isSkinnedMesh&&x.skeleton.frame!==Fe.render.frame&&(x.skeleton.update(),x.skeleton.frame=Fe.render.frame),!x.frustumCulled||$.intersectsObject(x))){O&&ie.setFromMatrixPosition(x.matrixWorld).applyMatrix4(ne);const ye=Xe.update(x),Ee=x.material;if(Array.isArray(Ee)){const Le=ye.groups;for(let Oe=0,Ae=Le.length;Oe<Ae;Oe++){const Re=Le[Oe],Ne=Ee[Re.materialIndex];Ne&&Ne.visible&&h.push(x,ye,Ne,G,ie.z,Re)}}else Ee.visible&&h.push(x,ye,Ee,G,ie.z,null)}}const xe=x.children;for(let ye=0,Ee=xe.length;ye<Ee;ye++)qt(xe[ye],k,G,O)}function ze(x,k,G,O){const X=x.opaque,xe=x.transmissive,ye=x.transparent;d.setupLightsView(G),xe.length>0&&Dt(X,k,G),O&&ue.viewport(A.copy(O)),X.length>0&&mt(X,k,G),xe.length>0&&mt(xe,k,G),ye.length>0&&mt(ye,k,G),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Dt(x,k,G){const O=ve.isWebGL2;V===null&&(V=new wn(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ri:xn,minFilter:Oi,samples:O&&s===!0?4:0})),p.getDrawingBufferSize(J),O?V.setSize(J.x,J.y):V.setSize(Ts(J.x),Ts(J.y));const X=p.getRenderTarget();p.setRenderTarget(V),p.clear();const xe=p.toneMapping;p.toneMapping=Gt,mt(x,k,G),p.toneMapping=xe,me.updateMultisampleRenderTarget(V),me.updateRenderTargetMipmap(V),p.setRenderTarget(X)}function mt(x,k,G){const O=k.isScene===!0?k.overrideMaterial:null;for(let X=0,xe=x.length;X<xe;X++){const ye=x[X],Ee=ye.object,Le=ye.geometry,Oe=O===null?ye.material:O,Ae=ye.group;Ee.layers.test(G.layers)&&Ba(Ee,k,G,Le,Oe,Ae)}}function Ba(x,k,G,O,X,xe){x.onBeforeRender(p,k,G,O,X,xe),x.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),X.onBeforeRender(p,k,G,O,x,xe),X.transparent===!0&&X.side===rn?(X.side=yt,X.needsUpdate=!0,p.renderBufferDirect(G,k,O,X,x,xe),X.side=si,X.needsUpdate=!0,p.renderBufferDirect(G,k,O,X,x,xe),X.side=rn):p.renderBufferDirect(G,k,O,X,x,xe),x.onAfterRender(p,k,G,O,X,xe)}function Ni(x,k,G){k.isScene!==!0&&(k=de);const O=Se.get(x),X=d.state.lights,xe=d.state.shadowsArray,ye=X.state.version,Ee=Ue.getParameters(x,X.state,xe,k,G),Le=Ue.getProgramCacheKey(Ee);let Oe=O.programs;O.environment=x.isMeshStandardMaterial?k.environment:null,O.fog=k.fog,O.envMap=(x.isMeshStandardMaterial?Qe:Ve).get(x.envMap||O.environment),Oe===void 0&&(x.addEventListener("dispose",C),Oe=new Map,O.programs=Oe);let Ae=Oe.get(Le);if(Ae!==void 0){if(O.currentProgram===Ae&&O.lightsStateVersion===ye)return Vs(x,Ee),Ae}else Ee.uniforms=Ue.getUniforms(x),x.onBuild(G,Ee,p),x.onBeforeCompile(Ee,p),Ae=Ue.acquireProgram(Ee,Le),Oe.set(Le,Ae),O.uniforms=Ee.uniforms;const Re=O.uniforms;(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Re.clippingPlanes=v.uniform),Vs(x,Ee),O.needsLights=Va(x),O.lightsStateVersion=ye,O.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.directionalShadowMap.value=X.state.directionalShadowMap,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotShadowMap.value=X.state.spotShadowMap,Re.spotShadowMatrix.value=X.state.spotShadowMatrix,Re.pointShadowMap.value=X.state.pointShadowMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix);const Ne=Ae.getUniforms(),on=Di.seqWithValue(Ne.seq,Re);return O.currentProgram=Ae,O.uniformsList=on,Ae}function Vs(x,k){const G=Se.get(x);G.outputEncoding=k.outputEncoding,G.instancing=k.instancing,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function Ga(x,k,G,O,X){k.isScene!==!0&&(k=de),me.resetTextureUnits();const xe=k.fog,ye=O.isMeshStandardMaterial?k.environment:null,Ee=E===null?p.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:yn,Le=(O.isMeshStandardMaterial?Qe:Ve).get(O.envMap||ye),Oe=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ae=!!O.normalMap&&!!G.attributes.tangent,Re=!!G.morphAttributes.position,Ne=!!G.morphAttributes.normal,on=!!G.morphAttributes.color,Sn=O.toneMapped?p.toneMapping:Gt,Ln=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ct=Ln!==void 0?Ln.length:0,Ie=Se.get(O),En=d.state.lights;if(Y===!0&&(z===!0||x!==L)){const ut=x===L&&O.id===y;v.setState(O,x,ut)}let We=!1;O.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==En.state.version||Ie.outputEncoding!==Ee||X.isInstancedMesh&&Ie.instancing===!1||!X.isInstancedMesh&&Ie.instancing===!0||X.isSkinnedMesh&&Ie.skinning===!1||!X.isSkinnedMesh&&Ie.skinning===!0||Ie.envMap!==Le||O.fog===!0&&Ie.fog!==xe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==v.numPlanes||Ie.numIntersection!==v.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Ae||Ie.morphTargets!==Re||Ie.morphNormals!==Ne||Ie.morphColors!==on||Ie.toneMapping!==Sn||ve.isWebGL2===!0&&Ie.morphTargetsCount!==Ct)&&(We=!0):(We=!0,Ie.__version=O.version);let gt=Ie.currentProgram;We===!0&&(gt=Ni(O,k,X));let jt=!1,$n=!1,Bi=!1;const st=gt.getUniforms(),Jn=Ie.uniforms;if(ue.useProgram(gt.program)&&(jt=!0,$n=!0,Bi=!0),O.id!==y&&(y=O.id,$n=!0),jt||L!==x){if(st.setValue(j,"projectionMatrix",x.projectionMatrix),ve.logarithmicDepthBuffer&&st.setValue(j,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),L!==x&&(L=x,$n=!0,Bi=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const ut=st.map.cameraPosition;ut!==void 0&&ut.setValue(j,ie.setFromMatrixPosition(x.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&st.setValue(j,"isOrthographic",x.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||X.isSkinnedMesh)&&st.setValue(j,"viewMatrix",x.matrixWorldInverse)}if(X.isSkinnedMesh){st.setOptional(j,X,"bindMatrix"),st.setOptional(j,X,"bindMatrixInverse");const ut=X.skeleton;ut&&(ve.floatVertexTextures?(ut.boneTexture===null&&ut.computeBoneTexture(),st.setValue(j,"boneTexture",ut.boneTexture,me),st.setValue(j,"boneTextureSize",ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gi=G.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0&&ve.isWebGL2===!0)&&S.update(X,G,O,gt),($n||Ie.receiveShadow!==X.receiveShadow)&&(Ie.receiveShadow=X.receiveShadow,st.setValue(j,"receiveShadow",X.receiveShadow)),$n&&(st.setValue(j,"toneMappingExposure",p.toneMappingExposure),Ie.needsLights&&Ha(Jn,Bi),xe&&O.fog===!0&&pt.refreshFogUniforms(Jn,xe),pt.refreshMaterialUniforms(Jn,O,N,B,V),Di.upload(j,Ie.uniformsList,Jn,me)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Di.upload(j,Ie.uniformsList,Jn,me),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&st.setValue(j,"center",X.center),st.setValue(j,"modelViewMatrix",X.modelViewMatrix),st.setValue(j,"normalMatrix",X.normalMatrix),st.setValue(j,"modelMatrix",X.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ut=O.uniformsGroups;for(let Hi=0,Wa=ut.length;Hi<Wa;Hi++)if(ve.isWebGL2){const Ws=ut[Hi];re.update(Ws,gt),re.bind(Ws,gt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return gt}function Ha(x,k){x.ambientLightColor.needsUpdate=k,x.lightProbe.needsUpdate=k,x.directionalLights.needsUpdate=k,x.directionalLightShadows.needsUpdate=k,x.pointLights.needsUpdate=k,x.pointLightShadows.needsUpdate=k,x.spotLights.needsUpdate=k,x.spotLightShadows.needsUpdate=k,x.rectAreaLights.needsUpdate=k,x.hemisphereLights.needsUpdate=k}function Va(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(x,k,G){Se.get(x.texture).__webglTexture=k,Se.get(x.depthTexture).__webglTexture=G;const O=Se.get(x);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=G===void 0,O.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,k){const G=Se.get(x);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(x,k=0,G=0){E=x,_=k,w=G;let O=!0;if(x){const Le=Se.get(x);Le.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),O=!1):Le.__webglFramebuffer===void 0?me.setupRenderTarget(x):Le.__hasExternalTextures&&me.rebindTextures(x,Se.get(x.texture).__webglTexture,Se.get(x.depthTexture).__webglTexture)}let X=null,xe=!1,ye=!1;if(x){const Le=x.texture;(Le.isData3DTexture||Le.isDataArrayTexture)&&(ye=!0);const Oe=Se.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(X=Oe[k],xe=!0):ve.isWebGL2&&x.samples>0&&me.useMultisampledRTT(x)===!1?X=Se.get(x).__webglMultisampledFramebuffer:X=Oe,A.copy(x.viewport),U.copy(x.scissor),b=x.scissorTest}else A.copy(I).multiplyScalar(N).floor(),U.copy(Z).multiplyScalar(N).floor(),b=H;if(ue.bindFramebuffer(36160,X)&&ve.drawBuffers&&O&&ue.drawBuffers(x,X),ue.viewport(A),ue.scissor(U),ue.setScissorTest(b),xe){const Le=Se.get(x.texture);j.framebufferTexture2D(36160,36064,34069+k,Le.__webglTexture,G)}else if(ye){const Le=Se.get(x.texture),Oe=k||0;j.framebufferTextureLayer(36160,36064,Le.__webglTexture,G||0,Oe)}y=-1},this.readRenderTargetPixels=function(x,k,G,O,X,xe,ye){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Se.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){ue.bindFramebuffer(36160,Ee);try{const Le=x.texture,Oe=Le.format,Ae=Le.type;if(Oe!==Rt&&D.convert(Oe)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=Ae===ri&&(_e.has("EXT_color_buffer_half_float")||ve.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Ae!==xn&&D.convert(Ae)!==j.getParameter(35738)&&!(Ae===mn&&(ve.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=x.width-O&&G>=0&&G<=x.height-X&&j.readPixels(k,G,O,X,D.convert(Oe),D.convert(Ae),xe)}finally{const Le=E!==null?Se.get(E).__webglFramebuffer:null;ue.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(x,k,G=0){const O=Math.pow(2,-G),X=Math.floor(k.image.width*O),xe=Math.floor(k.image.height*O);me.setTexture2D(k,0),j.copyTexSubImage2D(3553,G,0,0,x.x,x.y,X,xe),ue.unbindTexture()},this.copyTextureToTexture=function(x,k,G,O=0){const X=k.image.width,xe=k.image.height,ye=D.convert(G.format),Ee=D.convert(G.type);me.setTexture2D(G,0),j.pixelStorei(37440,G.flipY),j.pixelStorei(37441,G.premultiplyAlpha),j.pixelStorei(3317,G.unpackAlignment),k.isDataTexture?j.texSubImage2D(3553,O,x.x,x.y,X,xe,ye,Ee,k.image.data):k.isCompressedTexture?j.compressedTexSubImage2D(3553,O,x.x,x.y,k.mipmaps[0].width,k.mipmaps[0].height,ye,k.mipmaps[0].data):j.texSubImage2D(3553,O,x.x,x.y,ye,Ee,k.image),O===0&&G.generateMipmaps&&j.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(x,k,G,O,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=x.max.x-x.min.x+1,ye=x.max.y-x.min.y+1,Ee=x.max.z-x.min.z+1,Le=D.convert(O.format),Oe=D.convert(O.type);let Ae;if(O.isData3DTexture)me.setTexture3D(O,0),Ae=32879;else if(O.isDataArrayTexture)me.setTexture2DArray(O,0),Ae=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,O.flipY),j.pixelStorei(37441,O.premultiplyAlpha),j.pixelStorei(3317,O.unpackAlignment);const Re=j.getParameter(3314),Ne=j.getParameter(32878),on=j.getParameter(3316),Sn=j.getParameter(3315),Ln=j.getParameter(32877),Ct=G.isCompressedTexture?G.mipmaps[0]:G.image;j.pixelStorei(3314,Ct.width),j.pixelStorei(32878,Ct.height),j.pixelStorei(3316,x.min.x),j.pixelStorei(3315,x.min.y),j.pixelStorei(32877,x.min.z),G.isDataTexture||G.isData3DTexture?j.texSubImage3D(Ae,X,k.x,k.y,k.z,xe,ye,Ee,Le,Oe,Ct.data):G.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(Ae,X,k.x,k.y,k.z,xe,ye,Ee,Le,Ct.data)):j.texSubImage3D(Ae,X,k.x,k.y,k.z,xe,ye,Ee,Le,Oe,Ct),j.pixelStorei(3314,Re),j.pixelStorei(32878,Ne),j.pixelStorei(3316,on),j.pixelStorei(3315,Sn),j.pixelStorei(32877,Ln),X===0&&O.generateMipmaps&&j.generateMipmap(Ae),ue.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?me.setTextureCube(x,0):x.isData3DTexture?me.setTexture3D(x,0):x.isDataArrayTexture?me.setTexture2DArray(x,0):me.setTexture2D(x,0),ue.unbindTexture()},this.resetState=function(){_=0,w=0,E=null,ue.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Bd extends ka{}Bd.prototype.isWebGL1Renderer=!0;class Bs{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ke(e),this.density=t}clone(){return new Bs(this.color,this.density)}toJSON(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}}class Gd extends lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}class Da extends ui{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ks,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sa={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Hd{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Vd=new Hd;class Gs{constructor(e){this.manager=e!==void 0?e:Vd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Ia extends Gs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=sa.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ai("img");function c(){u(),sa.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Wd extends Gs{constructor(e){super(e)}load(e,t,n,i){const s=new Us,o=new Ia(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function c(l){o.load(e[l],function(u){s.images[l]=u,a++,a===6&&(s.needsUpdate=!0,t&&t(s))},void 0,i)}for(let l=0;l<e.length;++l)c(l);return s}}class qd extends Gs{constructor(e){super(e)}load(e,t,n,i){const s=new wt,o=new Ia(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Fa extends lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ra=new Ke,aa=new P,oa=new P;class jd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;aa.setFromMatrixPosition(e.matrixWorld),t.position.copy(aa),oa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(oa),t.updateMatrixWorld(),ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Xd extends jd{constructor(){super(new Ea(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Yd extends Fa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(lt.DefaultUp),this.updateMatrix(),this.target=new lt,this.shadow=new Xd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zd extends Fa{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class en{constructor(e,t,n=0,i=1/0){this.ray=new ya(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return As(e,this,n,t),n.sort(la),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)As(e[i],this,n,t);return n.sort(la),n}}function la(r,e){return r.distance-e.distance}function As(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)As(i[s],e,t,!0)}}class ca{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rs}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rs);var Ua=(r=>(r.Cube="cube",r.HalfCube="halfCube",r.StairsCube="stairsCube",r.Flower1Cube="flower1Cube",r))(Ua||{});const F=Ua,Kd=""+new URL("../assets/png/1.4ee44383.png",import.meta.url).href,$d=""+new URL("../assets/png/2.e52c24af.png",import.meta.url).href,Jd=""+new URL("../assets/png/3.1d2e76a5.png",import.meta.url).href,Qd=""+new URL("../assets/png/4.623e357f.png",import.meta.url).href,ef=""+new URL("../assets/png/5.1c3ee6aa.png",import.meta.url).href,tf=""+new URL("../assets/png/6.a5dce513.png",import.meta.url).href,nf=""+new URL("../assets/png/anvil_base.4cabcffe.png",import.meta.url).href,sf=""+new URL("../assets/png/anvil_top_damaged_0.8c5df6f3.png",import.meta.url).href,rf=""+new URL("../assets/png/anvil_top_damaged_1.4e377a59.png",import.meta.url).href,af=""+new URL("../assets/png/anvil_top_damaged_2.8d1e5162.png",import.meta.url).href,of=""+new URL("../assets/png/atlas.9e7a2ed7.png",import.meta.url).href,lf=""+new URL("../assets/png/beacon.10275b84.png",import.meta.url).href,cf=""+new URL("../assets/png/bed_feet_end.ef2b9935.png",import.meta.url).href,uf=""+new URL("../assets/png/bed_feet_side.9fa80957.png",import.meta.url).href,hf=""+new URL("../assets/png/bed_feet_top.2e110003.png",import.meta.url).href,df=""+new URL("../assets/png/bed_head_end.0fa1c6b5.png",import.meta.url).href,ff=""+new URL("../assets/png/bed_head_side.46c8ce5a.png",import.meta.url).href,pf=""+new URL("../assets/png/bed_head_top.3112430d.png",import.meta.url).href,mf=""+new URL("../assets/png/bedrock.54088be8.png",import.meta.url).href,gf=""+new URL("../assets/png/bookshelf.79d96a48.png",import.meta.url).href,_f=""+new URL("../assets/png/brewing_stand.dfe53a70.png",import.meta.url).href,bf=""+new URL("../assets/png/brewing_stand_base.23bda4ed.png",import.meta.url).href,vf=""+new URL("../assets/png/brick.d74622e7.png",import.meta.url).href,xf=""+new URL("../assets/png/cactus_bottom.e141075b.png",import.meta.url).href,yf=""+new URL("../assets/png/cactus_side.0f403c2e.png",import.meta.url).href,wf=""+new URL("../assets/png/cactus_top.0538f7c7.png",import.meta.url).href,Mf=""+new URL("../assets/png/cake_bottom.66c03469.png",import.meta.url).href,Sf=""+new URL("../assets/png/cake_inner.46decaf8.png",import.meta.url).href,Lf=""+new URL("../assets/png/cake_side.87d5e734.png",import.meta.url).href,Ef=""+new URL("../assets/png/cake_top.f57fd082.png",import.meta.url).href,Tf=""+new URL("../assets/png/carrots_stage_0.c4b749eb.png",import.meta.url).href,Pf=""+new URL("../assets/png/carrots_stage_1.c74bd9e5.png",import.meta.url).href,Af=""+new URL("../assets/png/carrots_stage_2.c7657811.png",import.meta.url).href,Cf=""+new URL("../assets/png/carrots_stage_3.a9ff26f6.png",import.meta.url).href,Rf=""+new URL("../assets/png/cauldron_bottom.12d12880.png",import.meta.url).href,kf=""+new URL("../assets/png/cauldron_inner.432dbf59.png",import.meta.url).href,Df=""+new URL("../assets/png/cauldron_side.7e5662cf.png",import.meta.url).href,If=""+new URL("../assets/png/cauldron_top.0c9a3f25.png",import.meta.url).href,Ff=""+new URL("../assets/png/clay.e09dba95.png",import.meta.url).href,Uf=""+new URL("../assets/png/coal_block.45b6d0d1.png",import.meta.url).href,Of=""+new URL("../assets/png/coal_ore.e99973ba.png",import.meta.url).href,zf=""+new URL("../assets/png/cobblestone.58e7a8d0.png",import.meta.url).href,Nf=""+new URL("../assets/png/cobblestone_mossy.a7fdace1.png",import.meta.url).href,Bf=""+new URL("../assets/png/cocoa_stage_0.b22ec58b.png",import.meta.url).href,Gf=""+new URL("../assets/png/cocoa_stage_1.bb86aded.png",import.meta.url).href,Hf=""+new URL("../assets/png/cocoa_stage_2.13bd5279.png",import.meta.url).href,Vf=""+new URL("../assets/png/command_block.539ce1f5.png",import.meta.url).href,Wf=""+new URL("../assets/png/comparator_off.f56f76b3.png",import.meta.url).href,qf=""+new URL("../assets/png/comparator_on.bad92ce8.png",import.meta.url).href,jf=""+new URL("../assets/png/crafting_table_front.2d26be59.png",import.meta.url).href,Xf=""+new URL("../assets/png/crafting_table_side.aa1d8bfe.png",import.meta.url).href,Yf=""+new URL("../assets/png/crafting_table_top.32208808.png",import.meta.url).href,Zf=""+new URL("../assets/png/daylight_detector_side.b2092477.png",import.meta.url).href,Kf=""+new URL("../assets/png/daylight_detector_top.73127edf.png",import.meta.url).href,$f=""+new URL("../assets/png/deadbush.a47441da.png",import.meta.url).href,Jf=""+new URL("../assets/png/destroy_stage_0.f499533e.png",import.meta.url).href,Qf=""+new URL("../assets/png/destroy_stage_1.0de13fe3.png",import.meta.url).href,ep=""+new URL("../assets/png/destroy_stage_2.3dad4672.png",import.meta.url).href,tp=""+new URL("../assets/png/destroy_stage_3.47e37d00.png",import.meta.url).href,np=""+new URL("../assets/png/destroy_stage_4.27806171.png",import.meta.url).href,ip=""+new URL("../assets/png/destroy_stage_5.a1594b01.png",import.meta.url).href,sp=""+new URL("../assets/png/destroy_stage_6.5410c19b.png",import.meta.url).href,rp=""+new URL("../assets/png/destroy_stage_7.d3f13380.png",import.meta.url).href,ap=""+new URL("../assets/png/destroy_stage_8.0812dac1.png",import.meta.url).href,op=""+new URL("../assets/png/destroy_stage_9.1a04b108.png",import.meta.url).href,lp=""+new URL("../assets/png/diamond_block.ffc0d871.png",import.meta.url).href,cp=""+new URL("../assets/png/diamond_ore.78faaf2c.png",import.meta.url).href,up=""+new URL("../assets/png/dirt.fb045025.png",import.meta.url).href,hp=""+new URL("../assets/png/dirt_podzol_side.5dd198b3.png",import.meta.url).href,dp=""+new URL("../assets/png/dirt_podzol_top.7c162251.png",import.meta.url).href,fp=""+new URL("../assets/png/dispenser_front_horizontal.b8f7af16.png",import.meta.url).href,pp=""+new URL("../assets/png/dispenser_front_vertical.dd120166.png",import.meta.url).href,mp=""+new URL("../assets/png/door_iron_lower.5535b5da.png",import.meta.url).href,gp=""+new URL("../assets/png/door_iron_upper.81eda91d.png",import.meta.url).href,_p=""+new URL("../assets/png/door_wood_lower.751f5959.png",import.meta.url).href,bp=""+new URL("../assets/png/door_wood_upper.7e32610b.png",import.meta.url).href,vp=""+new URL("../assets/png/double_plant_fern_bottom.81077c8b.png",import.meta.url).href,xp=""+new URL("../assets/png/double_plant_fern_top.df01fde3.png",import.meta.url).href,yp=""+new URL("../assets/png/double_plant_grass_bottom.8922e388.png",import.meta.url).href,wp=""+new URL("../assets/png/double_plant_grass_top.187f7e9c.png",import.meta.url).href,Mp=""+new URL("../assets/png/double_plant_paeonia_bottom.f325ac20.png",import.meta.url).href,Sp=""+new URL("../assets/png/double_plant_paeonia_top.a43be8ac.png",import.meta.url).href,Lp=""+new URL("../assets/png/double_plant_rose_bottom.155b18f9.png",import.meta.url).href,Ep=""+new URL("../assets/png/double_plant_rose_top.2d911834.png",import.meta.url).href,Tp=""+new URL("../assets/png/double_plant_sunflower_back.c5844b87.png",import.meta.url).href,Pp=""+new URL("../assets/png/double_plant_sunflower_bottom.8f4b126e.png",import.meta.url).href,Ap=""+new URL("../assets/png/double_plant_sunflower_front.b1e2d21b.png",import.meta.url).href,Cp=""+new URL("../assets/png/double_plant_sunflower_top.8a598e43.png",import.meta.url).href,Rp=""+new URL("../assets/png/double_plant_syringa_bottom.c3a8da79.png",import.meta.url).href,kp=""+new URL("../assets/png/double_plant_syringa_top.b0bfe09a.png",import.meta.url).href,Dp=""+new URL("../assets/png/dragon_egg.fc19de89.png",import.meta.url).href,Ip=""+new URL("../assets/png/dropper_front_horizontal.242e3354.png",import.meta.url).href,Fp=""+new URL("../assets/png/dropper_front_vertical.812031fa.png",import.meta.url).href,Up=""+new URL("../assets/png/emerald_block.3af75337.png",import.meta.url).href,Op=""+new URL("../assets/png/emerald_ore.0d298a4f.png",import.meta.url).href,zp=""+new URL("../assets/png/enchanting_table_bottom.9933436b.png",import.meta.url).href,Np=""+new URL("../assets/png/enchanting_table_side.efd38bdb.png",import.meta.url).href,Bp=""+new URL("../assets/png/enchanting_table_top.3b64a27f.png",import.meta.url).href,Gp=""+new URL("../assets/png/end_stone.f697d8b3.png",import.meta.url).href,Hp=""+new URL("../assets/png/endframe_eye.ec101516.png",import.meta.url).href,Vp=""+new URL("../assets/png/endframe_side.0a7edb28.png",import.meta.url).href,Wp=""+new URL("../assets/png/endframe_top.cc47521f.png",import.meta.url).href,qp=""+new URL("../assets/png/farmland_dry.3c60e48c.png",import.meta.url).href,jp=""+new URL("../assets/png/farmland_wet.cb49d2e1.png",import.meta.url).href,Xp=""+new URL("../assets/png/fern.17e887f9.png",import.meta.url).href,Yp=""+new URL("../assets/png/fire_layer_0.aa2fa0e7.png",import.meta.url).href,Zp=""+new URL("../assets/png/fire_layer_1.82e4aaef.png",import.meta.url).href,Kp=""+new URL("../assets/png/flower_allium.68316f7f.png",import.meta.url).href,$p=""+new URL("../assets/png/flower_blue_orchid.6296c692.png",import.meta.url).href,Jp=""+new URL("../assets/png/flower_dandelion.e6fe8217.png",import.meta.url).href,Qp=""+new URL("../assets/png/flower_houstonia.65bf6f36.png",import.meta.url).href,em=""+new URL("../assets/png/flower_oxeye_daisy.e559f1ae.png",import.meta.url).href,tm=""+new URL("../assets/png/flower_paeonia.2b56dd06.png",import.meta.url).href,nm=""+new URL("../assets/png/flower_pot.94e0bc50.png",import.meta.url).href,im=""+new URL("../assets/png/flower_rose.36250489.png",import.meta.url).href,sm=""+new URL("../assets/png/flower_tulip_orange.9614fdd6.png",import.meta.url).href,rm=""+new URL("../assets/png/flower_tulip_pink.473f1879.png",import.meta.url).href,am=""+new URL("../assets/png/flower_tulip_red.1e00daa4.png",import.meta.url).href,om=""+new URL("../assets/png/flower_tulip_white.65a32240.png",import.meta.url).href,lm=""+new URL("../assets/png/furnace_front_off.f3495924.png",import.meta.url).href,cm=""+new URL("../assets/png/furnace_front_on.a16879e4.png",import.meta.url).href,um=""+new URL("../assets/png/furnace_side.4cf28792.png",import.meta.url).href,hm=""+new URL("../assets/png/furnace_top.fc197ab2.png",import.meta.url).href,dm=""+new URL("../assets/png/glass.47e6c403.png",import.meta.url).href,fm=""+new URL("../assets/png/glass_black.c1cf3096.png",import.meta.url).href,pm=""+new URL("../assets/png/glass_blue.e361b905.png",import.meta.url).href,mm=""+new URL("../assets/png/glass_brown.1c9640c2.png",import.meta.url).href,gm=""+new URL("../assets/png/glass_cyan.e402d81f.png",import.meta.url).href,_m=""+new URL("../assets/png/glass_gray.0fb52d04.png",import.meta.url).href,bm=""+new URL("../assets/png/glass_green.e1c2e3c1.png",import.meta.url).href,vm=""+new URL("../assets/png/glass_light_blue.327fd61d.png",import.meta.url).href,xm=""+new URL("../assets/png/glass_lime.b78b3693.png",import.meta.url).href,ym=""+new URL("../assets/png/glass_magenta.0391d7c4.png",import.meta.url).href,wm=""+new URL("../assets/png/glass_orange.e5a1dcdf.png",import.meta.url).href,Mm=""+new URL("../assets/png/glass_pane_top.ed69dc98.png",import.meta.url).href,Sm=""+new URL("../assets/png/glass_pane_top_black.69c870dc.png",import.meta.url).href,Lm=""+new URL("../assets/png/glass_pane_top_blue.fc7facf7.png",import.meta.url).href,Em=""+new URL("../assets/png/glass_pane_top_brown.0593bd74.png",import.meta.url).href,Tm=""+new URL("../assets/png/glass_pane_top_cyan.16231acd.png",import.meta.url).href,Pm=""+new URL("../assets/png/glass_pane_top_gray.15ca80d3.png",import.meta.url).href,Am=""+new URL("../assets/png/glass_pane_top_green.578f5951.png",import.meta.url).href,Cm=""+new URL("../assets/png/glass_pane_top_light_blue.6315dca8.png",import.meta.url).href,Rm=""+new URL("../assets/png/glass_pane_top_lime.d2c2ca12.png",import.meta.url).href,km=""+new URL("../assets/png/glass_pane_top_magenta.6f15e858.png",import.meta.url).href,Dm=""+new URL("../assets/png/glass_pane_top_orange.09b15047.png",import.meta.url).href,Im=""+new URL("../assets/png/glass_pane_top_pink.42336b58.png",import.meta.url).href,Fm=""+new URL("../assets/png/glass_pane_top_purple.a874defe.png",import.meta.url).href,Um=""+new URL("../assets/png/glass_pane_top_red.678140f3.png",import.meta.url).href,Om=""+new URL("../assets/png/glass_pane_top_silver.3b99a406.png",import.meta.url).href,zm=""+new URL("../assets/png/glass_pane_top_white.1b307566.png",import.meta.url).href,Nm=""+new URL("../assets/png/glass_pane_top_yellow.c93fb666.png",import.meta.url).href,Bm=""+new URL("../assets/png/glass_pink.051dca98.png",import.meta.url).href,Gm=""+new URL("../assets/png/glass_purple.94cdd688.png",import.meta.url).href,Hm=""+new URL("../assets/png/glass_red.b7f9a78a.png",import.meta.url).href,Vm=""+new URL("../assets/png/glass_silver.384d4467.png",import.meta.url).href,Wm=""+new URL("../assets/png/glass_white.bc5cb68b.png",import.meta.url).href,qm=""+new URL("../assets/png/glass_yellow.11378122.png",import.meta.url).href,jm=""+new URL("../assets/png/glowstone.d6b0cb68.png",import.meta.url).href,Xm=""+new URL("../assets/png/gold_block.e58ed761.png",import.meta.url).href,Ym=""+new URL("../assets/png/gold_ore.be0237a6.png",import.meta.url).href,Zm=""+new URL("../assets/png/grass_side.1f5d4845.png",import.meta.url).href,Km=""+new URL("../assets/png/grass_side_overlay.b9b92c64.png",import.meta.url).href,$m=""+new URL("../assets/png/grass_side_snowed.964a1f6a.png",import.meta.url).href,Jm=""+new URL("../assets/png/grass_top.b2aa2204.png",import.meta.url).href,Qm=""+new URL("../assets/png/grass_top_green.be9cf310.png",import.meta.url).href,eg=""+new URL("../assets/png/gravel.054656b3.png",import.meta.url).href,tg=""+new URL("../assets/png/hardened_clay.62fd8ba1.png",import.meta.url).href,ng=""+new URL("../assets/png/hardened_clay_stained_black.d24e5df3.png",import.meta.url).href,ig=""+new URL("../assets/png/hardened_clay_stained_blue.2b07e794.png",import.meta.url).href,sg=""+new URL("../assets/png/hardened_clay_stained_brown.8665bb14.png",import.meta.url).href,rg=""+new URL("../assets/png/hardened_clay_stained_cyan.77edc9be.png",import.meta.url).href,ag=""+new URL("../assets/png/hardened_clay_stained_gray.8863388d.png",import.meta.url).href,og=""+new URL("../assets/png/hardened_clay_stained_green.562360d1.png",import.meta.url).href,lg=""+new URL("../assets/png/hardened_clay_stained_light_blue.26000140.png",import.meta.url).href,cg=""+new URL("../assets/png/hardened_clay_stained_lime.adef7b1d.png",import.meta.url).href,ug=""+new URL("../assets/png/hardened_clay_stained_magenta.5e666b67.png",import.meta.url).href,hg=""+new URL("../assets/png/hardened_clay_stained_orange.203b87e0.png",import.meta.url).href,dg=""+new URL("../assets/png/hardened_clay_stained_pink.64040142.png",import.meta.url).href,fg=""+new URL("../assets/png/hardened_clay_stained_purple.9a1a4cd7.png",import.meta.url).href,pg=""+new URL("../assets/png/hardened_clay_stained_red.27642943.png",import.meta.url).href,mg=""+new URL("../assets/png/hardened_clay_stained_silver.aadb3717.png",import.meta.url).href,gg=""+new URL("../assets/png/hardened_clay_stained_white.d674ab2e.png",import.meta.url).href,_g=""+new URL("../assets/png/hardened_clay_stained_yellow.a6c96488.png",import.meta.url).href,bg=""+new URL("../assets/png/hay_block_side.591026ca.png",import.meta.url).href,vg=""+new URL("../assets/png/hay_block_top.54e8d8a9.png",import.meta.url).href,xg=""+new URL("../assets/png/hopper_inside.6b9a0cba.png",import.meta.url).href,yg=""+new URL("../assets/png/hopper_outside.5cb3a731.png",import.meta.url).href,wg=""+new URL("../assets/png/cauldron_top.0c9a3f25.png",import.meta.url).href,Mg=""+new URL("../assets/png/ice.811fd126.png",import.meta.url).href,Sg=""+new URL("../assets/png/ice_packed.af2413c7.png",import.meta.url).href,Lg=""+new URL("../assets/png/iron_bars.9b2c6b12.png",import.meta.url).href,Eg=""+new URL("../assets/png/iron_block.11e01710.png",import.meta.url).href,Tg=""+new URL("../assets/png/iron_ore.81c082a2.png",import.meta.url).href,Pg=""+new URL("../assets/png/itemframe_background.766f2f38.png",import.meta.url).href,Ag=""+new URL("../assets/png/jukebox_side.e074c49e.png",import.meta.url).href,Cg=""+new URL("../assets/png/jukebox_top.06e295c1.png",import.meta.url).href,Rg=""+new URL("../assets/png/ladder.a62f4a70.png",import.meta.url).href,kg=""+new URL("../assets/png/lapis_block.1705bfa6.png",import.meta.url).href,Dg=""+new URL("../assets/png/lapis_ore.74545bf2.png",import.meta.url).href,Ig=""+new URL("../assets/png/lava_flow.ee3673eb.png",import.meta.url).href,Fg=""+new URL("../assets/png/lava_still.8bc4c492.png",import.meta.url).href,Ug=""+new URL("../assets/png/leaves_acacia.50cc5b0d.png",import.meta.url).href,Og=""+new URL("../assets/png/leaves_acacia_opaque.ace70b13.png",import.meta.url).href,zg=""+new URL("../assets/png/leaves_acacia.50cc5b0d.png",import.meta.url).href,Ng=""+new URL("../assets/png/leaves_acacia_opaque.ace70b13.png",import.meta.url).href,Bg=""+new URL("../assets/png/leaves_acacia.50cc5b0d.png",import.meta.url).href,Gg=""+new URL("../assets/png/leaves_acacia_opaque.ace70b13.png",import.meta.url).href,Hg=""+new URL("../assets/png/leaves_jungle.d42f5476.png",import.meta.url).href,Vg=""+new URL("../assets/png/leaves_jungle_opaque.3794b345.png",import.meta.url).href,Wg=""+new URL("../assets/png/leaves_acacia.50cc5b0d.png",import.meta.url).href,qg=""+new URL("../assets/png/leaves_acacia_opaque.ace70b13.png",import.meta.url).href,jg=""+new URL("../assets/png/leaves_spruce.c05bc731.png",import.meta.url).href,Xg=""+new URL("../assets/png/leaves_spruce_opaque.79f7f545.png",import.meta.url).href,Yg=""+new URL("../assets/png/lever.bc8d5be0.png",import.meta.url).href,Zg=""+new URL("../assets/png/log_acacia.23dba3fe.png",import.meta.url).href,Kg=""+new URL("../assets/png/log_acacia_top.269d6781.png",import.meta.url).href,$g=""+new URL("../assets/png/log_big_oak.f9099836.png",import.meta.url).href,Jg=""+new URL("../assets/png/log_big_oak_top.74a762b0.png",import.meta.url).href,Qg=""+new URL("../assets/png/log_birch.928118c7.png",import.meta.url).href,e0=""+new URL("../assets/png/log_birch_top.da6e5f58.png",import.meta.url).href,t0=""+new URL("../assets/png/log_jungle.92e0c520.png",import.meta.url).href,n0=""+new URL("../assets/png/log_jungle_top.d8049db8.png",import.meta.url).href,i0=""+new URL("../assets/png/log_oak.6f24bf4e.png",import.meta.url).href,s0=""+new URL("../assets/png/log_oak_top.f9045998.png",import.meta.url).href,r0=""+new URL("../assets/png/log_spruce.9e557c9b.png",import.meta.url).href,a0=""+new URL("../assets/png/log_spruce_top.680923bd.png",import.meta.url).href,o0=""+new URL("../assets/png/melon_side.576e7dfe.png",import.meta.url).href,l0=""+new URL("../assets/png/melon_stem_connected.61f12575.png",import.meta.url).href,c0=""+new URL("../assets/png/melon_stem_disconnected.ffbf229b.png",import.meta.url).href,u0=""+new URL("../assets/png/melon_top.32780919.png",import.meta.url).href,h0=""+new URL("../assets/png/mob_spawner.f6b65a99.png",import.meta.url).href,d0=""+new URL("../assets/png/mushroom_block_inside.0cf1bc24.png",import.meta.url).href,f0=""+new URL("../assets/png/mushroom_block_skin_brown.1e868b94.png",import.meta.url).href,p0=""+new URL("../assets/png/mushroom_block_skin_red.39e7e2a6.png",import.meta.url).href,m0=""+new URL("../assets/png/mushroom_block_skin_stem.659c6fe0.png",import.meta.url).href,g0=""+new URL("../assets/png/mushroom_brown.3197a583.png",import.meta.url).href,_0=""+new URL("../assets/png/mushroom_red.cb28da44.png",import.meta.url).href,b0=""+new URL("../assets/png/mycelium_side.4c926fda.png",import.meta.url).href,v0=""+new URL("../assets/png/mycelium_top.d17c1b39.png",import.meta.url).href,x0=""+new URL("../assets/png/nether_brick.9e9f921e.png",import.meta.url).href,y0=""+new URL("../assets/png/nether_wart_stage_0.d8e508e8.png",import.meta.url).href,w0=""+new URL("../assets/png/nether_wart_stage_1.7859e19f.png",import.meta.url).href,M0=""+new URL("../assets/png/nether_wart_stage_2.732b30d3.png",import.meta.url).href,S0=""+new URL("../assets/png/netherrack.aa436e0d.png",import.meta.url).href,L0=""+new URL("../assets/png/jukebox_side.e074c49e.png",import.meta.url).href,E0=""+new URL("../assets/png/obsidian.5456fc99.png",import.meta.url).href,T0=""+new URL("../assets/png/furnace_top.fc197ab2.png",import.meta.url).href,P0=""+new URL("../assets/png/piston_inner.bc6e5edc.png",import.meta.url).href,A0=""+new URL("../assets/png/piston_side.e9e13d76.png",import.meta.url).href,C0=""+new URL("../assets/png/piston_top_normal.a7cae489.png",import.meta.url).href,R0=""+new URL("../assets/png/piston_top_sticky.16e3923a.png",import.meta.url).href,k0=""+new URL("../assets/png/planks_acacia.ca4ee6c5.png",import.meta.url).href,D0=""+new URL("../assets/png/planks_big_oak.b01a86e2.png",import.meta.url).href,I0=""+new URL("../assets/png/planks_birch.9d6f3352.png",import.meta.url).href,F0=""+new URL("../assets/png/planks_jungle.4970d7e8.png",import.meta.url).href,U0=""+new URL("../assets/png/planks_oak.9dd3c835.png",import.meta.url).href,O0=""+new URL("../assets/png/planks_spruce.08976411.png",import.meta.url).href,z0=""+new URL("../assets/png/portal.1c937c9d.png",import.meta.url).href,N0=""+new URL("../assets/png/carrots_stage_0.c4b749eb.png",import.meta.url).href,B0=""+new URL("../assets/png/carrots_stage_1.c74bd9e5.png",import.meta.url).href,G0=""+new URL("../assets/png/carrots_stage_2.c7657811.png",import.meta.url).href,H0=""+new URL("../assets/png/potatoes_stage_3.8f801d7a.png",import.meta.url).href,V0=""+new URL("../assets/png/pumpkin_face_off.e2c21085.png",import.meta.url).href,W0=""+new URL("../assets/png/pumpkin_face_on.f912d24f.png",import.meta.url).href,q0=""+new URL("../assets/png/pumpkin_side.413c5c30.png",import.meta.url).href,j0=""+new URL("../assets/png/melon_stem_connected.61f12575.png",import.meta.url).href,X0=""+new URL("../assets/png/melon_stem_disconnected.ffbf229b.png",import.meta.url).href,Y0=""+new URL("../assets/png/pumpkin_top.e7452a6d.png",import.meta.url).href,Z0=""+new URL("../assets/png/quartz_block_bottom.81c55f51.png",import.meta.url).href,K0=""+new URL("../assets/png/quartz_block_chiseled.7620b5e1.png",import.meta.url).href,$0=""+new URL("../assets/png/quartz_block_chiseled_top.b3bb9098.png",import.meta.url).href,J0=""+new URL("../assets/png/quartz_block_lines.ecc66db9.png",import.meta.url).href,Q0=""+new URL("../assets/png/quartz_block_lines_top.c826287d.png",import.meta.url).href,e_=""+new URL("../assets/png/quartz_block_top.db39589d.png",import.meta.url).href,t_=""+new URL("../assets/png/quartz_block_top.db39589d.png",import.meta.url).href,n_=""+new URL("../assets/png/quartz_ore.e20b1c6a.png",import.meta.url).href,i_=""+new URL("../assets/png/rail_activator.657f072c.png",import.meta.url).href,s_=""+new URL("../assets/png/rail_activator_powered.603a5714.png",import.meta.url).href,r_=""+new URL("../assets/png/rail_detector.6d10fe4b.png",import.meta.url).href,a_=""+new URL("../assets/png/rail_detector_powered.0335525d.png",import.meta.url).href,o_=""+new URL("../assets/png/rail_golden.2ab0b409.png",import.meta.url).href,l_=""+new URL("../assets/png/rail_golden_powered.e53d64b9.png",import.meta.url).href,c_=""+new URL("../assets/png/rail_normal.297ec4b9.png",import.meta.url).href,u_=""+new URL("../assets/png/rail_normal_turned.de844d16.png",import.meta.url).href,h_=""+new URL("../assets/png/red_sand.3da842d7.png",import.meta.url).href,d_=""+new URL("../assets/png/redstone_block.f964d3aa.png",import.meta.url).href,f_=""+new URL("../assets/png/redstone_dust_cross.4815ca09.png",import.meta.url).href,p_=""+new URL("../assets/png/redstone_dust_cross_overlay.a901afae.png",import.meta.url).href,m_=""+new URL("../assets/png/redstone_dust_line.1211cd63.png",import.meta.url).href,g_=""+new URL("../assets/png/redstone_dust_cross_overlay.a901afae.png",import.meta.url).href,__=""+new URL("../assets/png/redstone_lamp_off.34cf23a5.png",import.meta.url).href,b_=""+new URL("../assets/png/redstone_lamp_on.2e2faadb.png",import.meta.url).href,v_=""+new URL("../assets/png/redstone_ore.d5c28eb0.png",import.meta.url).href,x_=""+new URL("../assets/png/redstone_torch_off.7fddaea2.png",import.meta.url).href,y_=""+new URL("../assets/png/redstone_torch_on.535ad488.png",import.meta.url).href,w_=""+new URL("../assets/png/reeds.44200a25.png",import.meta.url).href,M_=""+new URL("../assets/png/repeater_off.0aa9be5c.png",import.meta.url).href,S_=""+new URL("../assets/png/repeater_on.0ad7eeb9.png",import.meta.url).href,L_=""+new URL("../assets/png/sand.9aae2f05.png",import.meta.url).href,E_=""+new URL("../assets/png/sandstone_bottom.2ecee6a4.png",import.meta.url).href,T_=""+new URL("../assets/png/sandstone_carved.f9bad502.png",import.meta.url).href,P_=""+new URL("../assets/png/sandstone_normal.3dcd7603.png",import.meta.url).href,A_=""+new URL("../assets/png/sandstone_smooth.0c0dfc70.png",import.meta.url).href,C_=""+new URL("../assets/png/sandstone_top.0cf7cab6.png",import.meta.url).href,R_=""+new URL("../assets/png/sapling_acacia.aa60b560.png",import.meta.url).href,k_=""+new URL("../assets/png/sapling_birch.c363352b.png",import.meta.url).href,D_=""+new URL("../assets/png/sapling_jungle.49021c91.png",import.meta.url).href,I_=""+new URL("../assets/png/sapling_oak.a9a515fc.png",import.meta.url).href,F_=""+new URL("../assets/png/sapling_roofed_oak.939f1942.png",import.meta.url).href,U_=""+new URL("../assets/png/sapling_spruce.a3f5abf8.png",import.meta.url).href,O_=""+new URL("../assets/png/snow.60c0ef13.png",import.meta.url).href,z_=""+new URL("../assets/png/soul_sand.8471955a.png",import.meta.url).href,N_=""+new URL("../assets/png/sponge.7396d0db.png",import.meta.url).href,B_=""+new URL("../assets/png/stone.489928bc.png",import.meta.url).href,G_=""+new URL("../assets/png/stone_slab_side.5e701b44.png",import.meta.url).href,H_=""+new URL("../assets/png/stone_slab_top.65e8a0b1.png",import.meta.url).href,V_=""+new URL("../assets/png/stonebrick.4b35ff37.png",import.meta.url).href,W_=""+new URL("../assets/png/stonebrick_carved.c92ee7bf.png",import.meta.url).href,q_=""+new URL("../assets/png/stonebrick_cracked.80a65e67.png",import.meta.url).href,j_=""+new URL("../assets/png/stonebrick_mossy.7784348f.png",import.meta.url).href,X_=""+new URL("../assets/png/tallgrass.7a2b3d45.png",import.meta.url).href,Y_=""+new URL("../assets/png/tnt_bottom.4092a0bc.png",import.meta.url).href,Z_=""+new URL("../assets/png/tnt_side.6a5ed560.png",import.meta.url).href,K_=""+new URL("../assets/png/tnt_top.2350fed7.png",import.meta.url).href,$_=""+new URL("../assets/png/torch_on.eba87b99.png",import.meta.url).href,J_=""+new URL("../assets/png/trapdoor.01090e6c.png",import.meta.url).href,Q_=""+new URL("../assets/png/trip_wire.3ff6790b.png",import.meta.url).href,eb=""+new URL("../assets/png/trip_wire_source.c7ffc8dd.png",import.meta.url).href,tb=""+new URL("../assets/png/vine.784e120d.png",import.meta.url).href,nb=""+new URL("../assets/png/water_flow.89af5588.png",import.meta.url).href,ib=""+new URL("../assets/png/water_still.f4a5a43c.png",import.meta.url).href,sb=""+new URL("../assets/png/waterlily.81a79aff.png",import.meta.url).href,rb=""+new URL("../assets/png/web.24ce322a.png",import.meta.url).href,ab=""+new URL("../assets/png/wheat_stage_0.07b7c7f4.png",import.meta.url).href,ob=""+new URL("../assets/png/wheat_stage_1.b55a4062.png",import.meta.url).href,lb=""+new URL("../assets/png/wheat_stage_2.2e3f122b.png",import.meta.url).href,cb=""+new URL("../assets/png/wheat_stage_3.5fb8f256.png",import.meta.url).href,ub=""+new URL("../assets/png/wheat_stage_4.d61ab7b3.png",import.meta.url).href,hb=""+new URL("../assets/png/wheat_stage_5.d238687a.png",import.meta.url).href,db=""+new URL("../assets/png/wheat_stage_6.52bd01ce.png",import.meta.url).href,fb=""+new URL("../assets/png/wheat_stage_7.ab581ca5.png",import.meta.url).href,pb=""+new URL("../assets/png/wool_colored_black.b4aeeb25.png",import.meta.url).href,mb=""+new URL("../assets/png/wool_colored_blue.d3ec9522.png",import.meta.url).href,gb=""+new URL("../assets/png/wool_colored_brown.b116d41e.png",import.meta.url).href,_b=""+new URL("../assets/png/wool_colored_cyan.a85f811f.png",import.meta.url).href,bb=""+new URL("../assets/png/wool_colored_gray.f124ffbc.png",import.meta.url).href,vb=""+new URL("../assets/png/wool_colored_green.80c1d30b.png",import.meta.url).href,xb=""+new URL("../assets/png/wool_colored_light_blue.c60b8612.png",import.meta.url).href,yb=""+new URL("../assets/png/wool_colored_lime.620940b6.png",import.meta.url).href,wb=""+new URL("../assets/png/wool_colored_magenta.e0f42fc9.png",import.meta.url).href,Mb=""+new URL("../assets/png/wool_colored_orange.8dcb6a3f.png",import.meta.url).href,Sb=""+new URL("../assets/png/wool_colored_pink.bbe7586a.png",import.meta.url).href,Lb=""+new URL("../assets/png/wool_colored_purple.1c442de3.png",import.meta.url).href,Eb=""+new URL("../assets/png/wool_colored_red.641fe2c4.png",import.meta.url).href,Tb=""+new URL("../assets/png/wool_colored_silver.2839b29b.png",import.meta.url).href,Pb=""+new URL("../assets/png/wool_colored_white.2ff22680.png",import.meta.url).href,Ab=""+new URL("../assets/png/wool_colored_yellow.aadd3635.png",import.meta.url).href,R={test1:Kd,test2:$d,test3:Jd,test4:Qd,test5:ef,test6:tf,anvil_base:nf,anvil_top_damaged_0:sf,anvil_top_damaged_1:rf,anvil_top_damaged_2:af,atlas:of,beacon:lf,bed_feet_end:cf,bed_feet_side:uf,bed_feet_top:hf,bed_head_end:df,bed_head_side:ff,bed_head_top:pf,bedrock:mf,bookshelf:gf,brewing_stand:_f,brewing_stand_base:bf,brick:vf,cactus_bottom:xf,cactus_side:yf,cactus_top:wf,cake_bottom:Mf,cake_inner:Sf,cake_side:Lf,cake_top:Ef,carrots_stage_0:Tf,carrots_stage_1:Pf,carrots_stage_2:Af,carrots_stage_3:Cf,cauldron_bottom:Rf,cauldron_inner:kf,cauldron_side:Df,cauldron_top:If,clay:Ff,coal_block:Uf,coal_ore:Of,cobblestone:zf,cobblestone_mossy:Nf,cocoa_stage_0:Bf,cocoa_stage_1:Gf,cocoa_stage_2:Hf,command_block:Vf,comparator_off:Wf,comparator_on:qf,crafting_table_front:jf,crafting_table_side:Xf,crafting_table_top:Yf,daylight_detector_side:Zf,daylight_detector_top:Kf,deadbush:$f,destroy_stage_0:Jf,destroy_stage_1:Qf,destroy_stage_2:ep,destroy_stage_3:tp,destroy_stage_4:np,destroy_stage_5:ip,destroy_stage_6:sp,destroy_stage_7:rp,destroy_stage_8:ap,destroy_stage_9:op,diamond_block:lp,diamond_ore:cp,dirt:up,dirt_podzol_side:hp,dirt_podzol_top:dp,dispenser_front_horizontal:fp,dispenser_front_vertical:pp,door_iron_lower:mp,door_iron_upper:gp,door_wood_lower:_p,door_wood_upper:bp,double_plant_fern_bottom:vp,double_plant_fern_top:xp,double_plant_grass_bottom:yp,double_plant_grass_top:wp,double_plant_paeonia_bottom:Mp,double_plant_paeonia_top:Sp,double_plant_rose_bottom:Lp,double_plant_rose_top:Ep,double_plant_sunflower_back:Tp,double_plant_sunflower_bottom:Pp,double_plant_sunflower_front:Ap,double_plant_sunflower_top:Cp,double_plant_syringa_bottom:Rp,double_plant_syringa_top:kp,dragon_egg:Dp,dropper_front_horizontal:Ip,dropper_front_vertical:Fp,emerald_block:Up,emerald_ore:Op,enchanting_table_bottom:zp,enchanting_table_side:Np,enchanting_table_top:Bp,end_stone:Gp,endframe_eye:Hp,endframe_side:Vp,endframe_top:Wp,farmland_dry:qp,farmland_wet:jp,fern:Xp,fire_layer_0:Yp,fire_layer_1:Zp,flower_allium:Kp,flower_blue_orchid:$p,flower_dandelion:Jp,flower_houstonia:Qp,flower_oxeye_daisy:em,flower_paeonia:tm,flower_pot:nm,flower_rose:im,flower_tulip_orange:sm,flower_tulip_pink:rm,flower_tulip_red:am,flower_tulip_white:om,furnace_front_off:lm,furnace_front_on:cm,furnace_side:um,furnace_top:hm,glass:dm,glass_black:fm,glass_blue:pm,glass_brown:mm,glass_cyan:gm,glass_gray:_m,glass_green:bm,glass_light_blue:vm,glass_lime:xm,glass_magenta:ym,glass_orange:wm,glass_pane_top:Mm,glass_pane_top_black:Sm,glass_pane_top_blue:Lm,glass_pane_top_brown:Em,glass_pane_top_cyan:Tm,glass_pane_top_gray:Pm,glass_pane_top_green:Am,glass_pane_top_light_blue:Cm,glass_pane_top_lime:Rm,glass_pane_top_magenta:km,glass_pane_top_orange:Dm,glass_pane_top_pink:Im,glass_pane_top_purple:Fm,glass_pane_top_red:Um,glass_pane_top_silver:Om,glass_pane_top_white:zm,glass_pane_top_yellow:Nm,glass_pink:Bm,glass_purple:Gm,glass_red:Hm,glass_silver:Vm,glass_white:Wm,glass_yellow:qm,glowstone:jm,gold_block:Xm,gold_ore:Ym,grass_side:Zm,grass_side_overlay:Km,grass_side_snowed:$m,grass_top:Jm,grass_top_green:Qm,gravel:eg,hardened_clay:tg,hardened_clay_stained_black:ng,hardened_clay_stained_blue:ig,hardened_clay_stained_brown:sg,hardened_clay_stained_cyan:rg,hardened_clay_stained_gray:ag,hardened_clay_stained_green:og,hardened_clay_stained_light_blue:lg,hardened_clay_stained_lime:cg,hardened_clay_stained_magenta:ug,hardened_clay_stained_orange:hg,hardened_clay_stained_pink:dg,hardened_clay_stained_purple:fg,hardened_clay_stained_red:pg,hardened_clay_stained_silver:mg,hardened_clay_stained_white:gg,hardened_clay_stained_yellow:_g,hay_block_side:bg,hay_block_top:vg,hopper_inside:xg,hopper_outside:yg,hopper_top:wg,ice:Mg,ice_packed:Sg,iron_bars:Lg,iron_block:Eg,iron_ore:Tg,itemframe_background:Pg,jukebox_side:Ag,jukebox_top:Cg,ladder:Rg,lapis_block:kg,lapis_ore:Dg,lava_flow:Ig,lava_still:Fg,leaves_acacia:Ug,leaves_acacia_opaque:Og,leaves_big_oak:zg,leaves_big_oak_opaque:Ng,leaves_birch:Bg,leaves_birch_opaque:Gg,leaves_jungle:Hg,leaves_jungle_opaque:Vg,leaves_oak:Wg,leaves_oak_opaque:qg,leaves_spruce:jg,leaves_spruce_opaque:Xg,lever:Yg,log_acacia:Zg,log_acacia_top:Kg,log_big_oak:$g,log_big_oak_top:Jg,log_birch:Qg,log_birch_top:e0,log_jungle:t0,log_jungle_top:n0,log_oak:i0,log_oak_top:s0,log_spruce:r0,log_spruce_top:a0,melon_side:o0,melon_stem_connected:l0,melon_stem_disconnected:c0,melon_top:u0,mob_spawner:h0,mushroom_block_inside:d0,mushroom_block_skin_brown:f0,mushroom_block_skin_red:p0,mushroom_block_skin_stem:m0,mushroom_brown:g0,mushroom_red:_0,mycelium_side:b0,mycelium_top:v0,nether_brick:x0,nether_wart_stage_0:y0,nether_wart_stage_1:w0,nether_wart_stage_2:M0,netherrack:S0,noteblock:L0,obsidian:E0,piston_bottom:T0,piston_inner:P0,piston_side:A0,piston_top_normal:C0,piston_top_sticky:R0,planks_acacia:k0,planks_big_oak:D0,planks_birch:I0,planks_jungle:F0,planks_oak:U0,planks_spruce:O0,portal:z0,potatoes_stage_0:N0,potatoes_stage_1:B0,potatoes_stage_2:G0,potatoes_stage_3:H0,pumpkin_face_off:V0,pumpkin_face_on:W0,pumpkin_side:q0,pumpkin_stem_connected:j0,pumpkin_stem_disconnected:X0,pumpkin_top:Y0,quartz_block_bottom:Z0,quartz_block_chiseled:K0,quartz_block_chiseled_top:$0,quartz_block_lines:J0,quartz_block_lines_top:Q0,quartz_block_side:e_,quartz_block_top:t_,quartz_ore:n_,rail_activator:i_,rail_activator_powered:s_,rail_detector:r_,rail_detector_powered:a_,rail_golden:o_,rail_golden_powered:l_,rail_normal:c_,rail_normal_turned:u_,red_sand:h_,redstone_block:d_,redstone_dust_cross:f_,redstone_dust_cross_overlay:p_,redstone_dust_line:m_,redstone_dust_line_overlay:g_,redstone_lamp_off:__,redstone_lamp_on:b_,redstone_ore:v_,redstone_torch_off:x_,redstone_torch_on:y_,reeds:w_,repeater_off:M_,repeater_on:S_,sand:L_,sandstone_bottom:E_,sandstone_carved:T_,sandstone_normal:P_,sandstone_smooth:A_,sandstone_top:C_,sapling_acacia:R_,sapling_birch:k_,sapling_jungle:D_,sapling_oak:I_,sapling_roofed_oak:F_,sapling_spruce:U_,snow:O_,soul_sand:z_,sponge:N_,stone:B_,stone_slab_side:G_,stone_slab_top:H_,stonebrick:V_,stonebrick_carved:W_,stonebrick_cracked:q_,stonebrick_mossy:j_,tallgrass:X_,tnt_bottom:Y_,tnt_side:Z_,tnt_top:K_,torch_on:$_,trapdoor:J_,trip_wire:Q_,trip_wire_source:eb,vine:tb,water_flow:nb,water_still:ib,waterlily:sb,web:rb,wheat_stage_0:ab,wheat_stage_1:ob,wheat_stage_2:lb,wheat_stage_3:cb,wheat_stage_4:ub,wheat_stage_5:hb,wheat_stage_6:db,wheat_stage_7:fb,wool_colored_black:pb,wool_colored_blue:mb,wool_colored_brown:gb,wool_colored_cyan:_b,wool_colored_gray:bb,wool_colored_green:vb,wool_colored_light_blue:xb,wool_colored_lime:yb,wool_colored_magenta:wb,wool_colored_orange:Mb,wool_colored_pink:Sb,wool_colored_purple:Lb,wool_colored_red:Eb,wool_colored_silver:Tb,wool_colored_white:Pb,wool_colored_yellow:Ab},Cb={grassdirt:{key:"grassdirt",images:[R.grass_side,R.grass_top,R.dirt],imageSet:[0,0,1,2,0,0],materialParameters:{},materialParametersForOneList:[{},{color:11664236}],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},test:{key:"test",images:[R.test1,R.test2,R.test3,R.test4,R.test5,R.test6],imageSet:[0,1,2,3,4,5],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},grass:{key:"grass",images:[R.grass_top],imageSet:[0,0,0,0,0,0],materialParameters:{color:11664236},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},dirt:{key:"dirt",images:[R.dirt],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},dirt_podzol:{key:"dirt_podzol",images:[R.dirt_podzol_side,R.dirt_podzol_top,R.dirt],imageSet:[0,0,1,2,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},redstone_block:{key:"redstone_block",images:[R.redstone_block],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},diamond_block:{key:"diamond_block",images:[R.diamond_block],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},cobblestone:{key:"cobblestone",images:[R.cobblestone],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},cobblestone_mossy:{key:"cobblestone_mossy",images:[R.cobblestone_mossy],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},stone:{key:"stone",images:[R.stone],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},stone_slab:{key:"stone_slab",images:[R.stone_slab_side,R.stone_slab_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},stonebrick:{key:"stonebrick",images:[R.stonebrick],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},stonebrick_carved:{key:"stonebrick_carved",images:[R.stonebrick_carved],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},stonebrick_cracked:{key:"stonebrick_cracked",images:[R.stonebrick_cracked],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},stonebrick_mossy:{key:"stonebrick_mossy",images:[R.stonebrick_mossy],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},brick:{key:"brick",images:[R.brick],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},planks_birch:{key:"planks_birch",images:[R.planks_birch],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},planks_acacia:{key:"planks_acacia",images:[R.planks_acacia],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},planks_jungle:{key:"planks_jungle",images:[R.planks_jungle],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},planks_oak:{key:"planks_oak",images:[R.planks_oak],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},planks_spruce:{key:"planks_spruce",images:[R.planks_spruce],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},log_acacia:{key:"log_acacia",images:[R.log_acacia,R.log_acacia_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_acacia:{key:"leaves_acacia",images:[R.leaves_acacia],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884,transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_acacia_opaque:{key:"leaves_acacia_opaque",images:[R.leaves_acacia_opaque],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},log_birch:{key:"log_birch",images:[R.log_birch,R.log_birch_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_birch:{key:"leaves_birch",images:[R.leaves_birch],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884,transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_birch_opaque:{key:"leaves_birch_opaque",images:[R.leaves_birch_opaque],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},log_jungle:{key:"log_jungle",images:[R.log_jungle,R.log_jungle_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_jungle:{key:"leaves_jungle",images:[R.leaves_jungle],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884,transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_jungle_opaque:{key:"leaves_jungle_opaque",images:[R.leaves_jungle_opaque],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},log_oak:{key:"log_oak",images:[R.log_oak,R.log_oak_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_oak:{key:"leaves_oak",images:[R.leaves_oak],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884,transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_oak_opaque:{key:"leaves_oak_opaque",images:[R.leaves_oak_opaque],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},log_spruce:{key:"log_spruce",images:[R.log_spruce,R.log_spruce_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_spruce:{key:"leaves_spruce",images:[R.leaves_spruce],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884,transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},leaves_spruce_opaque:{key:"leaves_spruce_opaque",images:[R.leaves_spruce_opaque],imageSet:[0,0,0,0,0,0],materialParameters:{color:9025884},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass:{key:"glass",images:[R.glass],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_black:{key:"glass_black",images:[R.glass_black],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_blue:{key:"glass_blue",images:[R.glass_blue],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_brown:{key:"glass_brown",images:[R.glass_brown],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_cyan:{key:"glass_cyan",images:[R.glass_cyan],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_gray:{key:"glass_gray",images:[R.glass_gray],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_green:{key:"glass_green",images:[R.glass_green],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_light_blue:{key:"glass_light_blue",images:[R.glass_light_blue],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_lime:{key:"glass_lime",images:[R.glass_lime],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_magenta:{key:"glass_magenta",images:[R.glass_magenta],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_orange:{key:"glass_orange",images:[R.glass_orange],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_pink:{key:"glass_pink",images:[R.glass_pink],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_purple:{key:"glass_purple",images:[R.glass_purple],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_red:{key:"glass_red",images:[R.glass_red],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_silver:{key:"glass_silver",images:[R.glass_silver],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_white:{key:"glass_white",images:[R.glass_white],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glass_yellow:{key:"glass_yellow",images:[R.glass_yellow],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},glowstone:{key:"glowstone",images:[R.glowstone],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},gold_block:{key:"gold_block",images:[R.gold_block],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},gold_ore:{key:"gold_ore",images:[R.gold_ore],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},clay:{key:"clay",images:[R.clay],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay:{key:"hardened_clay",images:[R.hardened_clay],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_black:{key:"hardened_clay_stained_black",images:[R.hardened_clay_stained_black],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_blue:{key:"hardened_clay_stained_blue",images:[R.hardened_clay_stained_blue],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_brown:{key:"hardened_clay_stained_brown",images:[R.hardened_clay_stained_brown],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_cyan:{key:"hardened_clay_stained_cyan",images:[R.hardened_clay_stained_cyan],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_gray:{key:"hardened_clay_stained_gray",images:[R.hardened_clay_stained_gray],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_green:{key:"hardened_clay_stained_green",images:[R.hardened_clay_stained_green],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_light_blue:{key:"hardened_clay_stained_light_blue",images:[R.hardened_clay_stained_light_blue],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_lime:{key:"hardened_clay_stained_lime",images:[R.hardened_clay_stained_lime],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_magenta:{key:"hardened_clay_stained_magenta",images:[R.hardened_clay_stained_magenta],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_orange:{key:"hardened_clay_stained_orange",images:[R.hardened_clay_stained_orange],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_pink:{key:"hardened_clay_stained_pink",images:[R.hardened_clay_stained_pink],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_purple:{key:"hardened_clay_stained_purple",images:[R.hardened_clay_stained_purple],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_red:{key:"hardened_clay_stained_red",images:[R.hardened_clay_stained_red],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_silver:{key:"hardened_clay_stained_silver",images:[R.hardened_clay_stained_silver],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_white:{key:"hardened_clay_stained_white",images:[R.hardened_clay_stained_white],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},hardened_clay_stained_yellow:{key:"hardened_clay_stained_yellow",images:[R.hardened_clay_stained_yellow],imageSet:[0,0,0,0,0,0],materialParameters:{transparent:!0},materialParametersForOneList:[],cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},melon:{key:"melon",images:[R.melon_side,R.melon_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},pumpkin_face_off:{key:"pumpkin_face_off",images:[R.pumpkin_face_off,R.pumpkin_side,R.pumpkin_top],imageSet:[0,1,2,2,1,1],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},pumpkin_face_on:{key:"pumpkin_face_on",images:[R.pumpkin_face_on,R.pumpkin_side,R.pumpkin_top],imageSet:[0,1,2,2,1,1],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},test_half:{key:"test_half",images:[""],imageSet:[0,0,0,0,0,0],materialParameters:{color:16777215,transparent:!0,opacity:.8},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.HalfCube}},stone_slab_half:{key:"stone_slab_half",images:[R.stone_slab_side,R.stone_slab_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.HalfCube}},brick_half:{key:"brick_half",images:[R.brick],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.HalfCube}},planks_birch_half:{key:"planks_birch_half",images:[R.planks_birch],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.HalfCube}},planks_acacia_half:{key:"planks_acacia_half",images:[R.planks_acacia],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.HalfCube}},planks_jungle_half:{key:"planks_jungle_half",images:[R.planks_jungle],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.HalfCube}},planks_oak_half:{key:"planks_oak_half",images:[R.planks_oak],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.HalfCube}},planks_spruce_half:{key:"planks_spruce_half",images:[R.planks_spruce],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.HalfCube}},cobblestone_stairs:{key:"cobblestone_stairs",images:[R.cobblestone],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},cobblestone_mossy_stairs:{key:"cobblestone_mossy_stairs",images:[R.cobblestone_mossy],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},stone_stairs:{key:"stone_stairs",images:[R.stone],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},stone_slab_stairs:{key:"stone_slab_stairs",images:[R.stone_slab_side,R.stone_slab_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},brick_stairs:{key:"brick_stairs",images:[R.brick],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},planks_birch_stairs:{key:"planks_birch_stairs",images:[R.planks_birch],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},planks_acacia_stairs:{key:"planks_acacia_stairs",images:[R.planks_acacia],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},planks_jungle_stairs:{key:"planks_jungle_stairs",images:[R.planks_jungle],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},planks_oak_stairs:{key:"planks_oak_stairs",images:[R.planks_oak],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},planks_spruce_stairs:{key:"planks_spruce_stairs",images:[R.planks_spruce],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.StairsCube}},hay_block:{key:"hay_block",images:[R.hay_block_side,R.hay_block_top],imageSet:[0,0,1,1,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},sandstone_normal:{key:"sandstone_normal",images:[R.sandstone_normal,R.sandstone_top,R.sandstone_bottom],imageSet:[0,0,1,2,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},sandstone_smooth:{key:"sandstone_smooth",images:[R.sandstone_smooth,R.sandstone_top,R.sandstone_bottom],imageSet:[0,0,1,2,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},sandstone_carved:{key:"sandstone_carved",images:[R.sandstone_carved,R.sandstone_top,R.sandstone_bottom],imageSet:[0,0,1,2,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!0,y:!0,z:!0}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},tnt:{key:"tnt",images:[R.tnt_side,R.tnt_top,R.tnt_bottom],imageSet:[0,0,1,2,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_white:{key:"wool_colored_white",images:[R.wool_colored_white],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_black:{key:"wool_colored_black",images:[R.wool_colored_black],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_blue:{key:"wool_colored_blue",images:[R.wool_colored_blue],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_brown:{key:"wool_colored_brown",images:[R.wool_colored_brown],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_cyan:{key:"wool_colored_cyan",images:[R.wool_colored_cyan],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_gray:{key:"wool_colored_gray",images:[R.wool_colored_gray],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_green:{key:"wool_colored_green",images:[R.wool_colored_green],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_light_blue:{key:"wool_colored_light_blue",images:[R.wool_colored_light_blue],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_lime:{key:"wool_colored_lime",images:[R.wool_colored_lime],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_magenta:{key:"wool_colored_magenta",images:[R.wool_colored_magenta],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_orange:{key:"wool_colored_orange",images:[R.wool_colored_orange],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_pink:{key:"wool_colored_pink",images:[R.wool_colored_pink],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_purple:{key:"wool_colored_purple",images:[R.wool_colored_purple],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_red:{key:"wool_colored_red",images:[R.wool_colored_red],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_silver:{key:"wool_colored_silver",images:[R.wool_colored_silver],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},wool_colored_yellow:{key:"wool_colored_yellow",images:[R.wool_colored_yellow],imageSet:[0,0,0,0,0,0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!1,z:!1}},cubeAttributes:{isPenetrable:!1,isIndestructible:!1,geometryType:F.Cube}},flower_rose:{key:"flower_rose",images:[R.flower_rose],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_allium:{key:"flower_allium",images:[R.flower_allium],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_blue_orchid:{key:"flower_blue_orchid",images:[R.flower_blue_orchid],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_dandelion:{key:"flower_dandelion",images:[R.flower_dandelion],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_houstonia:{key:"flower_houstonia",images:[R.flower_houstonia],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_oxeye_daisy:{key:"flower_oxeye_daisy",images:[R.flower_oxeye_daisy],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_paeonia:{key:"flower_paeonia",images:[R.flower_paeonia],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_tulip_orange:{key:"flower_tulip_orange",images:[R.flower_tulip_orange],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_tulip_pink:{key:"flower_tulip_pink",images:[R.flower_tulip_pink],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_tulip_red:{key:"flower_tulip_red",images:[R.flower_tulip_red],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},flower_tulip_white:{key:"flower_tulip_white",images:[R.flower_tulip_white],imageSet:[0],materialParameters:{},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}},tallgrass:{key:"tallgrass",images:[R.tallgrass],imageSet:[0],materialParameters:{color:11664236},materialParametersForOneList:[],meshParameters:{rotateEnable:{x:!1,y:!0,z:!1}},cubeAttributes:{isPenetrable:!0,isIndestructible:!1,geometryType:F.Flower1Cube}}},Pe=Cb,Hs={enableShadow:!1,enableDirectionalLight:!0},ua=r=>{const e=[];for(let t=0;t<r.length;t+=9){const n=new P(...r.slice(t,t+3)),i=new P(...r.slice(t+3,t+6)),s=new P(...r.slice(t+6,t+9)),o=new P,a=new P;o.subVectors(s,i),a.subVectors(n,i);const c=o.cross(a).normalize().toArray();e.push(...c,...c,...c)}return e};class kt{constructor(e){if(kt._instanceObj&&kt._instanceObj[e.key])return kt._instanceObj[e.key];this.cubeOptions=e,this._materials=[],this._materialsMap={},this._materialsHalfMap={},this._geometry=void 0,this._geometryMap={},this._cubeSize=1,this.buildMaterials(),this.buildGeometry(),kt._instanceObj={[e.key]:this}}buildGeometry(){if(this._geometryMap&&(this._geometry=this._geometryMap[this.cubeOptions.cubeAttributes.geometryType]),this._geometry)return;let e;this.cubeOptions.cubeAttributes!==void 0&&this.cubeOptions.cubeAttributes.geometryType!==void 0&&(e=this.cubeOptions.cubeAttributes.geometryType);let t;const n=this._cubeSize,i=n/Math.sqrt(2);switch(e){case F.Cube:{t=new Vt(this._cubeSize,this._cubeSize,this._cubeSize);break}case F.HalfCube:{t=new Vt(this._cubeSize,this._cubeSize/2,this._cubeSize);break}case F.StairsCube:{t=new Ht;const s=[[n/2,-n/2,n/2],[-n/2,-n/2,n/2],[-n/2,-n/2,-n/2],[n/2,-n/2,-n/2],[n/2,0,n/2],[0,0,n/2],[0,0,-n/2],[n/2,0,-n/2],[0,n/2,n/2],[-n/2,n/2,n/2],[-n/2,n/2,-n/2],[0,n/2,-n/2]],o=[s[0],s[2],s[3],s[0],s[1],s[2],s[0],s[3],s[7],s[0],s[7],s[4],s[5],s[6],s[11],s[5],s[11],s[8],s[4],s[7],s[6],s[4],s[6],s[5],s[8],s[11],s[10],s[8],s[10],s[9],s[2],s[1],s[9],s[2],s[9],s[10],s[5],s[8],s[9],s[5],s[9],s[1],s[5],s[1],s[0],s[5],s[0],s[4],s[6],s[10],s[11],s[6],s[2],s[10],s[6],s[3],s[2],s[6],s[7],s[3]].flatMap(a=>a);t.setAttribute("position",new it(new Float32Array(o),3,!1)),t.setAttribute("normal",new it(new Float32Array(ua(o)),3,!0)),t.setAttribute("uv",new it(new Float32Array([[0,0],[1,1],[1,0],[0,0],[0,1],[1,1],[0,0],[1,0],[1,.5],[0,0],[1,.5],[0,.5],[0,0],[1,0],[1,.5],[0,0],[1,.5],[0,.5],[0,0],[1,0],[1,.5],[0,0],[1,.5],[0,.5],[0,0],[1,0],[1,.5],[0,0],[1,.5],[0,.5],[0,0],[1,0],[1,1],[0,0],[1,1],[0,1],[.5,.5],[.5,1],[0,1],[.5,.5],[0,1],[0,0],[.5,.5],[0,0],[1,0],[.5,.5],[1,0],[1,.5],[.5,.5],[0,1],[.5,1],[.5,.5],[0,0],[0,1],[.5,.5],[1,0],[0,0],[.5,.5],[1,.5],[1,0]].flatMap(a=>a)),2,!1)),t.groups.push({start:0,materialIndex:0,count:60});break}case F.Flower1Cube:{t=new Ht;const s={block:[[n/2,-n/2,n/2],[-n/2,-n/2,n/2],[-n/2,-n/2,-n/2],[n/2,-n/2,-n/2],[n/2,n/2,n/2],[-n/2,n/2,n/2],[-n/2,n/2,-n/2],[n/2,n/2,-n/2]],cross:[[i,-n/2,i],[-i,-n/2,-i],[-i,n/2,-i],[i,n/2,i],[-i,-n/2,i],[i,-n/2,-i],[i,n/2,-i],[-i,n/2,i]]},o=[s.cross[0],s.cross[1],s.cross[2],s.cross[0],s.cross[2],s.cross[3],s.cross[4],s.cross[5],s.cross[6],s.cross[4],s.cross[6],s.cross[7],s.block[0],s.block[1],s.block[2],s.block[0],s.block[2],s.block[3],s.block[0],s.block[5],s.block[1],s.block[0],s.block[4],s.block[5],s.block[0],s.block[3],s.block[7],s.block[0],s.block[7],s.block[4],s.block[6],s.block[4],s.block[7],s.block[6],s.block[5],s.block[4],s.block[6],s.block[7],s.block[3],s.block[6],s.block[3],s.block[2],s.block[6],s.block[1],s.block[5],s.block[6],s.block[2],s.block[1]].flatMap(a=>a);t.setAttribute("position",new it(new Float32Array(o),3,!1)),t.setAttribute("normal",new it(new Float32Array(ua(o.slice(0,36))),3,!1)),t.setAttribute("uv",new it(new Float32Array([[0,0],[1,0],[1,1],[0,0],[1,1],[0,1],[0,0],[1,0],[1,1],[0,0],[1,1],[0,1]].flatMap(a=>a)),2,!1)),t.groups.push({start:0,materialIndex:0,count:12});break}default:throw"unknown geometryType"}this._geometry=t,this._geometryMap[this.cubeOptions.cubeAttributes.geometryType]=this._geometry}buildMaterials(){if(this._materialsMap&&(this._materials=this._materialsMap[this.cubeOptions.key]),this._materials&&this._materials.length!==0)return;this._materials=[];let e=new qd,t=[];for(let s in this.cubeOptions.images){let o=this.cubeOptions.images[s];if(o===""||o===void 0)t.push(void 0);else{let a=e.load(o);a.generateMipmaps=!0,a.minFilter=Js,a.magFilter=nt,t.push(a)}}let n=[];for(let s in t){let o=t[s];n.push(new Da({map:o,fog:!0,...this.cubeOptions.materialParameters?this.cubeOptions.materialParameters:{},...this.cubeOptions.materialParametersForOneList&&this.cubeOptions.materialParametersForOneList[s]?this.cubeOptions.materialParametersForOneList[s]:{}}))}let i=this.cubeOptions.cubeAttributes!==void 0&&this.cubeOptions.cubeAttributes.geometryType;for(let s in this.cubeOptions.imageSet){let o=this.cubeOptions.imageSet[s],a=n[o];switch(i){case F.HalfCube:if("0145".indexOf(s)>=0){if(this._materialsHalfMap||(this._materialsHalfMap={}),this._materialsHalfMap[this.cubeOptions.key])a=this._materialsHalfMap[this.cubeOptions.key];else if(a.map){let c=a.clone();c.map=a.map.clone();let l=e.load(this.cubeOptions.images[this.cubeOptions.imageSet[s]]);l.generateMipmaps=!0,l.minFilter=Js,l.magFilter=nt,l.wrapS=l.wrapT=Ii,l.repeat.set(1,.5),c.map=l,a=c,this._materialsHalfMap[this.cubeOptions.key]=a}}break;case F.Flower1Cube:Number(s)===0?(a.transparent=!0,a.depthWrite=!1,a.side=rn):(a.transparent=!0,a.opacity=0);break}this._materials.push(a)}i===F.Flower1Cube&&this._materials.length<=1&&this._materials.push(new Fs({transparent:!0,opacity:0})),this._materialsMap[this.cubeOptions.key]=this._materials}buildCube(e,t,n,i,s,o,a){var h,d,m,g,p,f;let c={x:e,y:t,z:n},l={rotateX:s,rotateY:o,rotateZ:a};i&&(typeof i=="string"&&(i=Pe[i]),this.cubeOptions=i,this.buildGeometry(),this.buildMaterials()),i=i,c.x=c.x||0,c.y=c.y||0,c.z=c.z||0;let u=new At(this._geometry,this._materials);return u.receiveShadow=u.castShadow=Hs.enableShadow,u.position.x=c.x,u.position.y=c.y,u.position.z=c.z,u.userData={saveInfo:[e,t,n,this.cubeOptions.key,s,o,a],fullCubePosition:{x:u.position.x,y:u.position.y,z:u.position.z},cubeTypeKey:this.cubeOptions.key,cubeAttributes:this.cubeOptions.cubeAttributes},l.rotateX&&((d=(h=i==null?void 0:i.meshParameters)==null?void 0:h.rotateEnable)==null?void 0:d.x)&&u.rotateX(l.rotateX*Math.PI/180),l.rotateY&&((g=(m=i==null?void 0:i.meshParameters)==null?void 0:m.rotateEnable)==null?void 0:g.y)&&u.rotateY(l.rotateY*Math.PI/180),l.rotateZ&&((f=(p=i==null?void 0:i.meshParameters)==null?void 0:p.rotateEnable)==null?void 0:f.z)&&u.rotateZ(l.rotateZ*Math.PI/180),u.name=this.cubeOptions.key+"("+c.x+","+c.y+","+c.z+")",u}}function Rb(r){if(!r)throw"invalid elementId";let e=document.getElementById(r);return e||(e=document.createElement("div"),e.id="canvas-wrapper",e.style.height="100%",e.style.width="100%",e.style.cursor="pointer",document.body.appendChild(e)),e}function kb(){let r=new Gd,e=8900331;return r.name="SCENE",r.fog=new Bs(e,.03),function(n){if(n=n||1,n===1){r.background=new ke(e);return}let i=new Wd().load([R.test1,R.test2,R.test3,R.test4,R.test5,R.test6]);if(n===2)r.background=i;else{let s=Tt.cube;s.uniforms.tCube.value=i;let o=new an({fragmentShader:s.fragmentShader,vertexShader:s.vertexShader,uniforms:s.uniforms,depthWrite:!1,side:yt}),a=new At(new Vt(1e6,1e6,1e6),o);r.add(a)}}(1),r}function Db(){let r=new Zd;return r.castShadow=!1,r.color=new ke().setHex(16777215),r.intensity=Oa(),r}function Oa(r,e,t){return Math.min(Math.max(t||0,r||0),e||0)}function Ib(){let r=new Yd;return r.castShadow=Hs.enableShadow,r.color=new ke().setHex(16777215),r.intensity=za(),r.shadow.radius=512,r.position.x=100,r.position.y=100,r.position.z=100,r}function za(r,e,t){return Math.min(Math.max(t||0,r||0),e||0)/4}function Fb(){let r=new vt;return r.name="CAMERA",r.fov=45,r.near=.1,r.far=200,r.position.x=10,r.position.y=21,r.position.z=11,r.lookAt(new P(0,22,2)),r}function Ub(){let r=new ka;return r.shadowMap.enabled=Hs.enableShadow,r.setClearColor(16777215,1),r}const Ob=""+new URL("../assets/ogg/bgmPart.9a4f6295.ogg",import.meta.url).href,zb={bgmPart:Ob};function Nb(){let r=0,e=[zb.bgmPart];const t=new Audio;t.volume=.5,t.preload="auto",t.controls=!0,t.autoplay=!0,t.hidden=!0,t.style.display="none",t.style.position="fixed",t.style.top="0",t.style.right="0",t.style.zIndex="101",t.loop=!1,t.src=e[r],t.addEventListener("ended",n,!1),document.addEventListener("click",i,!1),document.body.appendChild(t);function n(){r++;let s=Math.random()*5e4+1e4;r>=e.length&&(r=0),setTimeout(()=>{t.src=e[r],t.play()},s)}function i(){t.play().then(()=>{document.removeEventListener("click",i,!1)})}return t}var oi=function(r,e){e===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=r,this.domElement=e,this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:tn.ROTATE,MIDDLE:tn.DOLLY,RIGHT:tn.PAN},this.touches={ONE:nn.ROTATE,TWO:nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.saveState=function(){t.target0.copy(t.target),t.position0.copy(t.object.position),t.zoom0=t.object.zoom},this.reset=function(){t.target.copy(t.target0),t.object.position.copy(t.position0),t.object.zoom=t.zoom0,t.object.updateProjectionMatrix(),t.dispatchEvent(n),t.update(),a=o.NONE},this.update=function(){var S=new P,K=new Mn().setFromUnitVectors(r.up,new P(0,1,0)),ce=K.clone().invert(),D=new P,fe=new Mn,re=2*Math.PI;return function(){var he=t.object.position;S.copy(he).sub(t.target),S.applyQuaternion(K),l.setFromVector3(S),t.autoRotate&&a===o.NONE&&T(U()),t.enableDamping?(l.theta+=u.theta*t.dampingFactor,l.phi+=u.phi*t.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);var ge=t.minAzimuthAngle,we=t.maxAzimuthAngle;return isFinite(ge)&&isFinite(we)&&(ge<-Math.PI?ge+=re:ge>Math.PI&&(ge-=re),we<-Math.PI?we+=re:we>Math.PI&&(we-=re),ge<=we?l.theta=Math.max(ge,Math.min(we,l.theta)):l.theta=l.theta>(ge+we)/2?Math.max(ge,l.theta):Math.min(we,l.theta)),l.phi=Math.max(t.minPolarAngle,Math.min(t.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(t.minDistance,Math.min(t.maxDistance,l.radius)),t.enableDamping===!0?t.target.addScaledVector(d,t.dampingFactor):t.target.add(d),S.setFromSpherical(l),S.applyQuaternion(ce),he.copy(t.target).add(S),t.object.lookAt(t.target),t.enableDamping===!0?(u.theta*=1-t.dampingFactor,u.phi*=1-t.dampingFactor,d.multiplyScalar(1-t.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),h=1,m||D.distanceToSquared(t.object.position)>c||8*(1-fe.dot(t.object.quaternion))>c?(t.dispatchEvent(n),D.copy(t.object.position),fe.copy(t.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){t.domElement.removeEventListener("contextmenu",Q,!1),t.domElement.removeEventListener("pointerdown",Ve,!1),t.domElement.removeEventListener("wheel",pt,!1),t.domElement.removeEventListener("touchstart",M,!1),t.domElement.removeEventListener("touchend",q,!1),t.domElement.removeEventListener("touchmove",v,!1),t.domElement.ownerDocument.removeEventListener("pointermove",Qe,!1),t.domElement.ownerDocument.removeEventListener("pointerup",je,!1),t.domElement.removeEventListener("keydown",ct,!1)};var t=this,n={type:"change"},i={type:"start"},s={type:"end"},o={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=o.NONE,c=1e-6,l=new ca,u=new ca,h=1,d=new P,m=!1,g=new Me,p=new Me,f=new Me,_=new Me,w=new Me,E=new Me,y=new Me,L=new Me,A=new Me;function U(){return 2*Math.PI/60/60*t.autoRotateSpeed}function b(){return Math.pow(.95,t.zoomSpeed)}function T(S){u.theta-=S}function B(S){u.phi-=S}var N=function(){var S=new P;return function(ce,D){S.setFromMatrixColumn(D,0),S.multiplyScalar(-ce),d.add(S)}}(),ee=function(){var S=new P;return function(ce,D){t.screenSpacePanning===!0?S.setFromMatrixColumn(D,1):(S.setFromMatrixColumn(D,0),S.crossVectors(t.object.up,S)),S.multiplyScalar(ce),d.add(S)}}(),te=function(){var S=new P;return function(ce,D){var fe=t.domElement;if(t.object.isPerspectiveCamera){var re=t.object.position;S.copy(re).sub(t.target);var pe=S.length();pe*=Math.tan(t.object.fov/2*Math.PI/180),N(2*ce*pe/fe.clientHeight,t.object.matrix),ee(2*D*pe/fe.clientHeight,t.object.matrix)}else t.object.isOrthographicCamera?(N(ce*(t.object.right-t.object.left)/t.object.zoom/fe.clientWidth,t.object.matrix),ee(D*(t.object.top-t.object.bottom)/t.object.zoom/fe.clientHeight,t.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),t.enablePan=!1)}}();function I(S){t.object.isPerspectiveCamera?h/=S:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom*S)),t.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function Z(S){t.object.isPerspectiveCamera?h*=S:t.object.isOrthographicCamera?(t.object.zoom=Math.max(t.minZoom,Math.min(t.maxZoom,t.object.zoom/S)),t.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),t.enableZoom=!1)}function H(S){g.set(S.clientX,S.clientY)}function $(S){y.set(S.clientX,S.clientY)}function Y(S){_.set(S.clientX,S.clientY)}function z(S){p.set(S.clientX,S.clientY),f.subVectors(p,g).multiplyScalar(t.rotateSpeed);var K=t.domElement;T(2*Math.PI*f.x/K.clientHeight),B(2*Math.PI*f.y/K.clientHeight),g.copy(p),t.update()}function V(S){L.set(S.clientX,S.clientY),A.subVectors(L,y),A.y>0?I(b()):A.y<0&&Z(b()),y.copy(L),t.update()}function ne(S){w.set(S.clientX,S.clientY),E.subVectors(w,_).multiplyScalar(t.panSpeed),te(E.x,E.y),_.copy(w),t.update()}function J(S){S.deltaY<0?Z(b()):S.deltaY>0&&I(b()),t.update()}function ie(S){var K=!1;switch(S.keyCode){case t.keys.UP:te(0,t.keyPanSpeed),K=!0;break;case t.keys.BOTTOM:te(0,-t.keyPanSpeed),K=!0;break;case t.keys.LEFT:te(t.keyPanSpeed,0),K=!0;break;case t.keys.RIGHT:te(-t.keyPanSpeed,0),K=!0;break}K&&(S.preventDefault(),t.update())}function de(S){if(S.touches.length==1)g.set(S.touches[0].pageX,S.touches[0].pageY);else{var K=.5*(S.touches[0].pageX+S.touches[1].pageX),ce=.5*(S.touches[0].pageY+S.touches[1].pageY);g.set(K,ce)}}function be(S){if(S.touches.length==1)_.set(S.touches[0].pageX,S.touches[0].pageY);else{var K=.5*(S.touches[0].pageX+S.touches[1].pageX),ce=.5*(S.touches[0].pageY+S.touches[1].pageY);_.set(K,ce)}}function j(S){var K=S.touches[0].pageX-S.touches[1].pageX,ce=S.touches[0].pageY-S.touches[1].pageY,D=Math.sqrt(K*K+ce*ce);y.set(0,D)}function De(S){t.enableZoom&&j(S),t.enablePan&&be(S)}function _e(S){t.enableZoom&&j(S),t.enableRotate&&de(S)}function ve(S){if(S.touches.length==1)p.set(S.touches[0].pageX,S.touches[0].pageY);else{var K=.5*(S.touches[0].pageX+S.touches[1].pageX),ce=.5*(S.touches[0].pageY+S.touches[1].pageY);p.set(K,ce)}f.subVectors(p,g).multiplyScalar(t.rotateSpeed);var D=t.domElement;T(2*Math.PI*f.x/D.clientHeight),B(2*Math.PI*f.y/D.clientHeight),g.copy(p)}function ue(S){if(S.touches.length==1)w.set(S.touches[0].pageX,S.touches[0].pageY);else{var K=.5*(S.touches[0].pageX+S.touches[1].pageX),ce=.5*(S.touches[0].pageY+S.touches[1].pageY);w.set(K,ce)}E.subVectors(w,_).multiplyScalar(t.panSpeed),te(E.x,E.y),_.copy(w)}function Fe(S){var K=S.touches[0].pageX-S.touches[1].pageX,ce=S.touches[0].pageY-S.touches[1].pageY,D=Math.sqrt(K*K+ce*ce);L.set(0,D),A.set(0,Math.pow(L.y/y.y,t.zoomSpeed)),I(A.y),y.copy(L)}function Se(S){t.enableZoom&&Fe(S),t.enablePan&&ue(S)}function me(S){t.enableZoom&&Fe(S),t.enableRotate&&ve(S)}function Ve(S){if(t.enabled!==!1)switch(S.pointerType){case"mouse":case"pen":ft(S);break}}function Qe(S){if(t.enabled!==!1)switch(S.pointerType){case"mouse":case"pen":Xe(S);break}}function je(S){switch(S.pointerType){case"mouse":case"pen":Ue();break}}function ft(S){S.preventDefault(),t.domElement.focus?t.domElement.focus():window.focus();var K;switch(S.button){case 0:K=t.mouseButtons.LEFT;break;case 1:K=t.mouseButtons.MIDDLE;break;case 2:K=t.mouseButtons.RIGHT;break;default:K=-1}switch(K){case tn.DOLLY:if(t.enableZoom===!1)return;$(S),a=o.DOLLY;break;case tn.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(t.enablePan===!1)return;Y(S),a=o.PAN}else{if(t.enableRotate===!1)return;H(S),a=o.ROTATE}break;case tn.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(t.enableRotate===!1)return;H(S),a=o.ROTATE}else{if(t.enablePan===!1)return;Y(S),a=o.PAN}break;default:a=o.NONE}a!==o.NONE&&(t.domElement.ownerDocument.addEventListener("pointermove",Qe,!1),t.domElement.ownerDocument.addEventListener("pointerup",je,!1),t.dispatchEvent(i))}function Xe(S){if(t.enabled!==!1)switch(S.preventDefault(),a){case o.ROTATE:if(t.enableRotate===!1)return;z(S);break;case o.DOLLY:if(t.enableZoom===!1)return;V(S);break;case o.PAN:if(t.enablePan===!1)return;ne(S);break}}function Ue(S){t.domElement.ownerDocument.removeEventListener("pointermove",Qe,!1),t.domElement.ownerDocument.removeEventListener("pointerup",je,!1),t.enabled!==!1&&(t.dispatchEvent(s),a=o.NONE)}function pt(S){t.enabled===!1||t.enableZoom===!1||a!==o.NONE&&a!==o.ROTATE||(S.preventDefault(),S.stopPropagation(),t.dispatchEvent(i),J(S),t.dispatchEvent(s))}function ct(S){t.enabled===!1||t.enableKeys===!1||t.enablePan===!1||ie(S)}function M(S){if(t.enabled!==!1){switch(S.preventDefault(),S.touches.length){case 1:switch(t.touches.ONE){case nn.ROTATE:if(t.enableRotate===!1)return;de(S),a=o.TOUCH_ROTATE;break;case nn.PAN:if(t.enablePan===!1)return;be(S),a=o.TOUCH_PAN;break;default:a=o.NONE}break;case 2:switch(t.touches.TWO){case nn.DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;De(S),a=o.TOUCH_DOLLY_PAN;break;case nn.DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;_e(S),a=o.TOUCH_DOLLY_ROTATE;break;default:a=o.NONE}break;default:a=o.NONE}a!==o.NONE&&t.dispatchEvent(i)}}function v(S){if(t.enabled!==!1)switch(S.preventDefault(),S.stopPropagation(),a){case o.TOUCH_ROTATE:if(t.enableRotate===!1)return;ve(S),t.update();break;case o.TOUCH_PAN:if(t.enablePan===!1)return;ue(S),t.update();break;case o.TOUCH_DOLLY_PAN:if(t.enableZoom===!1&&t.enablePan===!1)return;Se(S),t.update();break;case o.TOUCH_DOLLY_ROTATE:if(t.enableZoom===!1&&t.enableRotate===!1)return;me(S),t.update();break;default:a=o.NONE}}function q(S){t.enabled!==!1&&(t.dispatchEvent(s),a=o.NONE)}function Q(S){t.enabled!==!1&&S.preventDefault()}t.domElement.addEventListener("contextmenu",Q,!1),t.domElement.addEventListener("pointerdown",Ve,!1),t.domElement.addEventListener("wheel",pt,!1),t.domElement.addEventListener("touchstart",M,!1),t.domElement.addEventListener("touchend",q,!1),t.domElement.addEventListener("touchmove",v,!1),t.domElement.addEventListener("keydown",ct,!1),this.update()};oi.prototype=Object.create(Wt.prototype);oi.prototype.constructor=oi;var Cs=function(r,e){oi.call(this,r,e),this.screenSpacePanning=!1,this.mouseButtons.LEFT=tn.PAN,this.mouseButtons.RIGHT=tn.ROTATE,this.touches.ONE=nn.PAN,this.touches.TWO=nn.DOLLY_ROTATE};Cs.prototype=Object.create(Wt.prototype);Cs.prototype.constructor=Cs;class Bb extends oi{constructor(e,t){super(e,t),e.lookAt(10,40,10),this.enableZoom=!1,this.enableRotate=!1,this.dampingFactor=1,this.enablePan=!1,this.autoRotate=!0,this.autoRotateSpeed=2}initClickFunction(e){window.addEventListener("mousedown",t=>{let n=Gb(t,e,this.object);if(n.length>0){let i=n[0].object;console.log("\u70B9\u51FB\u7684\u5BF9\u8C61\uFF1A"+i.name)}},!1)}}function Gb(r,e,t){let n=new en,i=new Me;return i.x=r.clientX/window.innerWidth*2-1,i.y=-(r.clientY/window.innerHeight)*2+1,n.setFromCamera(i,t),n.intersectObjects(e)}var Fi=function(r,e){e===void 0&&(console.warn('THREE.PointerLockControls: The second parameter "domElement" is now mandatory.'),e=document.body),this.domElement=e,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI;var t=this,n={type:"change"},i={type:"lock"},s={type:"unlock"},o=new Zn(0,0,0,"YXZ"),a=Math.PI/2,c=new P;function l(d){if(t.isLocked!==!1){var m=d.movementX||d.mozMovementX||d.webkitMovementX||0,g=d.movementY||d.mozMovementY||d.webkitMovementY||0;o.setFromQuaternion(r.quaternion),o.y-=m*.002,o.x-=g*.002,o.x=Math.max(a-t.maxPolarAngle,Math.min(a-t.minPolarAngle,o.x)),r.quaternion.setFromEuler(o),t.dispatchEvent(n)}}function u(){t.domElement.ownerDocument.pointerLockElement===t.domElement?(t.dispatchEvent(i),t.isLocked=!0):(t.dispatchEvent(s),t.isLocked=!1)}function h(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}this.connect=function(){t.domElement.ownerDocument.addEventListener("mousemove",l,!1),t.domElement.ownerDocument.addEventListener("pointerlockchange",u,!1),t.domElement.ownerDocument.addEventListener("pointerlockerror",h,!1)},this.disconnect=function(){t.domElement.ownerDocument.removeEventListener("mousemove",l,!1),t.domElement.ownerDocument.removeEventListener("pointerlockchange",u,!1),t.domElement.ownerDocument.removeEventListener("pointerlockerror",h,!1)},this.dispose=function(){this.disconnect()},this.getObject=function(){return r},this.getDirection=function(){var d=new P(0,0,-1);return function(m){return m.copy(d).applyQuaternion(r.quaternion)}}(),this.moveForward=function(d){c.setFromMatrixColumn(r.matrix,0),c.crossVectors(r.up,c),r.position.addScaledVector(c,d)},this.moveRight=function(d){c.setFromMatrixColumn(r.matrix,0),r.position.addScaledVector(c,d)},this.lock=function(){this.domElement.requestPointerLock()},this.unlock=function(){t.domElement.ownerDocument.exitPointerLock()},this.connect()};Fi.prototype=Object.create(Wt.prototype);Fi.prototype.constructor=Fi;const Hb=""+new URL("../assets/png/wasted.82c33239.png",import.meta.url).href;class Vb{constructor(e,t,n,i){this.previewCube=void 0,this.camera=e,this.domElement=t,this.objects=n,this.objectsImpenetrable=[],this.scene=i,this.currentCubeTypeIndex=0,this.checkRay={X0:[],X1:[],Z0:[],Z1:[],Y0:[],Y1:[]},this.sightRay=new en,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.moveUp=!1,this.moveDown=!1,this.preRunning=void 0,this.isRunning=!1,this.canJump=!1,this.switchFly=void 0,this.canFly=!0,this.switchFlyKeyUpped=!1,this.isFlying=!1,this.velocity=new P,this.direction=new P,this.worldOption={g:7.5},this.personOption={height:1.8,sightHeight:1.5,jumpHeight:1.33,speedWalk:5.7,speedRun:10,accelerateRateStart:.3,accelerateRateStop:.8,thickness:.6},this.initControl(),this.initMaskerForSightControl(),this.initAim(),this.initKeyboardFunction(),this.initMouseFunction(),this.selectObjectsImpenetrable()}update(e){e=e||.016,this.controls.isLocked||(this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.moveUp=!1,this.moveDown=!1),this.updateCameraPosition(e),this.checkAndResetPosition(),this.updatePreviewCube(e)}initControl(){this.controls=new Fi(this.camera,this.domElement)}initMaskerForSightControl(){let e=document.createElement("div");e.style.position="absolute",e.style.zIndex="100",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.id="blocker",e.style.backgroundColor="rgba(0, 0, 0, 0.3)",document.body.append(e),e.addEventListener("click",()=>{this.controls.lock()},!1),this.controls.addEventListener("lock",function(){e.style.display="none"}),this.controls.addEventListener("unlock",function(){e.style.display="block"})}initAim(){let e=i=>{i.style.position="fixed",i.style.left="50%",i.style.top="50%",i.style.transform="translate(-50%,-50%)",i.style.zIndex="1",i.style.fontSize="100%",i.style.fontWeight="bold",i.style.textAlign="center",i.style.verticalAlign="middle",i.style.lineHeight="10px",i.style.fontFamily='"Times New Roman",serif',i.style.backgroundColor="#E0E0E0"},t=document.createElement("div");t.style.height="2px",t.style.width="20px",e(t),document.body.append(t);let n=document.createElement("div");n.style.height="20px",n.style.width="2px",e(n),document.body.append(n)}initKeyboardFunction(){let e=n=>{switch(n.key){case"ArrowUp":case"w":case"W":if(this.moveForward)break;this.preRunning?(this.isRunning=performance.now()-this.preRunning<=200,this.preRunning=performance.now()):this.preRunning=performance.now(),this.moveForward=!0;break;case"ArrowLeft":case"a":case"A":if(this.moveLeft)break;this.moveLeft=!0;break;case"ArrowDown":case"s":case"S":if(this.moveBackward)break;this.moveBackward=!0;break;case"ArrowRight":case"d":case"D":if(this.moveRight)break;this.moveRight=!0;break;case" ":case"Spacebar":if(!this.canJump&&this.switchFlyKeyUpped&&(this.isFlying=this.canFly),this.canJump&&(this.velocity.y+=Math.sqrt(2*this.worldOption.g*7.74*this.personOption.jumpHeight)),this.canJump=!1,this.isFlying){if(this.switchFly?performance.now()-this.switchFly<=200&&(this.isFlying=!this.switchFlyKeyUpped):this.switchFly=performance.now(),this.moveUp)break;this.moveUp=!0,this.switchFlyKeyUpped=!1}this.switchFly=performance.now();break;case"Shift":if(this.moveDown)break;this.moveDown=!0;break}},t=n=>{switch(n.key){case"ArrowUp":case"w":case"W":this.isRunning=!1,this.moveForward=!1;break;case"ArrowLeft":case"a":case"A":this.moveLeft=!1;break;case"ArrowDown":case"s":case"S":this.moveBackward=!1;break;case"ArrowRight":case"d":case"D":this.moveRight=!1;break;case"Shift":this.moveDown=!1;break;case" ":case"Spacebar":this.moveUp=!1,this.switchFlyKeyUpped=!0;break}};document.addEventListener("keydown",e,!1),document.addEventListener("keyup",t,!1)}initMouseFunction(){let e=t=>{t?(this.currentCubeTypeIndex++,this.currentCubeTypeIndex===Object.keys(Pe).length&&(this.currentCubeTypeIndex=0)):(this.currentCubeTypeIndex===0&&(this.currentCubeTypeIndex=Object.keys(Pe).length),this.currentCubeTypeIndex--)};window.addEventListener("mousedown",t=>{this.sightRay.setFromCamera(new Me(0,0),this.camera);let n=this.sightRay.intersectObjects(this.objects);if(n.length>0&&n[0]&&n[0].distance<=10&&n[0].face&&n[0].face.normal&&n[0].object&&n[0].object.position){if(t.button===0&&this.controls.isLocked){this.removeCube(n[0].object);return}if(t.button===2&&this.controls.isLocked){this.addCube(n[0]);return}}},!1),window.addEventListener("wheel",t=>{t instanceof WheelEvent&&e(t.deltaY<0)})}updatePreviewCube(e){var t,n;if(!this.previewCube)this.previewCube=new kt(Pe[Object.keys(Pe)[this.currentCubeTypeIndex]]).buildCube(),this.scene.add(this.previewCube);else{if(this.previewCube.geometryMap||(this.previewCube.geometryMap={}),this.previewCubeType!==Object.keys(Pe)[this.currentCubeTypeIndex])if(this.previewCubeType=Object.keys(Pe)[this.currentCubeTypeIndex],this.previewCube.geometryMap[Object.keys(Pe)[this.currentCubeTypeIndex]])this.previewCube.geometry=this.previewCube.geometryMap[Object.keys(Pe)[this.currentCubeTypeIndex]];else{let i=(n=(t=new kt(Pe[Object.keys(Pe)[this.currentCubeTypeIndex]]))==null?void 0:t._geometry)==null?void 0:n.clone();i&&(i.scale(.01,.01,.01),this.previewCube.geometry=i,this.previewCube.geometryMap[Object.keys(Pe)[this.currentCubeTypeIndex]]=i)}this.previewCube.material=new kt(Pe[Object.keys(Pe)[this.currentCubeTypeIndex]])._materials,this.previewCube.position.copy(this.camera.position),this.previewCubeRotation?this.previewCubeRotation.y!==void 0&&(this.previewCubeRotation.y+=Math.PI/180*60*e%Math.PI):this.previewCubeRotation={y:0},this.previewCube.rotation.copy(this.camera.rotation),this.previewCube.position.add(new P(0,-.065,-.2).applyAxisAngle(new P(0,0,1),this.camera.rotation.z).applyAxisAngle(new P(0,1,0),this.camera.rotation.y).applyAxisAngle(new P(1,0,0),this.camera.rotation.x)),this.previewCube.rotateY(Math.PI/4+(this.previewCubeRotation.y||0))}}updateCameraPosition(e){const t=new P;t.copy(this.controls.getObject().position);{this.direction.z=Number(this.moveForward)-Number(this.moveBackward),this.direction.x=Number(this.moveRight)-Number(this.moveLeft),this.direction.normalize();let n=this.isRunning?this.personOption.speedRun:this.personOption.speedWalk;if(this.moveForward||this.moveBackward){let c=this.velocity.z+this.direction.z*n*this.personOption.accelerateRateStart;this.velocity.z=Math.abs(c)<n?c:this.direction.z*n}else this.velocity.z=Math.abs(this.velocity.z)>1?this.velocity.z*this.personOption.accelerateRateStop:0;let i=this.controls.getObject().position.x;if(this.controls.moveRight(this.velocity.x*e),this.moveLeft||this.moveRight){let c=this.velocity.x+this.direction.x*n*this.personOption.accelerateRateStart;this.velocity.x=Math.abs(c)<n?c:this.direction.x*n}else this.velocity.x=Math.abs(this.velocity.x)>1?this.velocity.x*this.personOption.accelerateRateStop:0;let s=this.controls.getObject().position.z;this.controls.moveForward(this.velocity.z*e);const o=[-(this.personOption.sightHeight-.05),-(this.personOption.sightHeight-this.personOption.height/2),this.personOption.height-this.personOption.sightHeight-.05,-(this.personOption.sightHeight-.5),this.personOption.height-this.personOption.sightHeight-.5];let a=this.personOption.thickness/2;{let c,l;for(let m=0;m<10;m++){this.checkRay.Z0[m]===void 0&&this.checkRay.Z0.push(new en(new P,new P(0,0,-1),0)),this.checkRay.Z0[m].ray.origin.copy(t),this.checkRay.Z0[m].ray.origin.x=i,this.checkRay.Z0[m].ray.origin.x+=(m%2===0?1:-1)*a,this.checkRay.Z0[m].ray.origin.y+=o[Math.floor(m/2)];let g=this.checkRay.Z0[m].intersectObjects(this.objectsImpenetrable);g.length>0&&(l=g[0].point.z,c=Math.max(c===void 0?l:c,l))}let u,h;for(let m=0;m<10;m++){this.checkRay.Z1[m]===void 0&&this.checkRay.Z1.push(new en(new P,new P(0,0,1),0)),this.checkRay.Z1[m].ray.origin.copy(t),this.checkRay.Z1[m].ray.origin.x=i,this.checkRay.Z1[m].ray.origin.x+=(m%2===0?1:-1)*a,this.checkRay.Z1[m].ray.origin.y+=o[Math.floor(m/2)];let g=this.checkRay.Z1[m].intersectObjects(this.objectsImpenetrable);g.length>0&&(h=g[0].point.z,u=Math.min(u===void 0?h:u,h))}let d=this.controls.getObject().position.z;d=Math.min(u===void 0?d:u-this.personOption.thickness/2-.01,d),d=Math.max(c===void 0?d:c+this.personOption.thickness/2+.01,d),this.controls.getObject().position.z=d}{let c,l;for(let m=0;m<10;m++){this.checkRay.X0[m]===void 0&&this.checkRay.X0.push(new en(new P,new P(-1,0,0),0)),this.checkRay.X0[m].ray.origin.copy(t),this.checkRay.X0[m].ray.origin.z=s,this.checkRay.X0[m].ray.origin.z+=(m%2===0?1:-1)*a,this.checkRay.X0[m].ray.origin.y+=o[Math.floor(m/2)];let g=this.checkRay.X0[m].intersectObjects(this.objectsImpenetrable);g.length>0&&(l=g[0].point.x,c=Math.max(c===void 0?l:c,l))}let u,h;for(let m=0;m<10;m++){this.checkRay.X1[m]===void 0&&this.checkRay.X1.push(new en(new P,new P(1,0,0),0)),this.checkRay.X1[m].ray.origin.copy(t),this.checkRay.X1[m].ray.origin.z=s,this.checkRay.X1[m].ray.origin.z+=(m%2===0?1:-1)*a,this.checkRay.X1[m].ray.origin.y+=o[Math.floor(m/2)];let g=this.checkRay.X1[m].intersectObjects(this.objectsImpenetrable);g.length>0&&(h=g[0].point.x,u=Math.min(u===void 0?h:u,h))}let d=this.controls.getObject().position.x;d=Math.max(c===void 0?d:c+this.personOption.thickness/2+.01,d),d=Math.min(u===void 0?d:u-this.personOption.thickness/2-.01,d),this.controls.getObject().position.x=d}}{let n;if(this.isFlying){this.velocity.y=0,this.direction.y=Number(this.moveUp)-Number(this.moveDown),this.direction.normalize();let a=this.isRunning?this.personOption.speedRun:this.personOption.speedWalk;if(this.moveUp||this.moveDown){let l=this.velocity.y+this.direction.y*a*this.personOption.accelerateRateStart;Math.abs(l)<a?this.velocity.y=l:this.velocity.y=this.direction.y*a}else this.velocity.y=Math.abs(this.velocity.y)>1?this.velocity.y*this.personOption.accelerateRateStop:0;n=this.controls.getObject().position.y+this.velocity.y*e*2}let i;{for(let c=0;c<5;c++)this.checkRay.Y0[c]===void 0&&this.checkRay.Y0.push(new en(new P,new P(0,-1,0),0)),this.checkRay.Y0[c].ray.origin.copy(t);let a=this.personOption.thickness/2;this.checkRay.Y0[0].ray.origin.x+=a,this.checkRay.Y0[0].ray.origin.z-=a,this.checkRay.Y0[1].ray.origin.x+=a,this.checkRay.Y0[1].ray.origin.z+=a,this.checkRay.Y0[2].ray.origin.x-=a,this.checkRay.Y0[2].ray.origin.z+=a,this.checkRay.Y0[3].ray.origin.x-=a,this.checkRay.Y0[3].ray.origin.z-=a;for(let c=0;c<5;c++){let l=this.checkRay.Y0[c].intersectObjects(this.objectsImpenetrable);if(l.length>0){let u=l[0].point.y;i=Math.max(i===void 0?u:i,u)}}}let s;{for(let c=0;c<5;c++)this.checkRay.Y1[c]===void 0&&this.checkRay.Y1.push(new en(new P,new P(0,1,0),0)),this.checkRay.Y1[c].ray.origin.copy(t);let a=this.personOption.thickness/2-.001;this.checkRay.Y1[0].ray.origin.x+=a,this.checkRay.Y1[0].ray.origin.z-=a,this.checkRay.Y1[1].ray.origin.x+=a,this.checkRay.Y1[1].ray.origin.z+=a,this.checkRay.Y1[2].ray.origin.x-=a,this.checkRay.Y1[2].ray.origin.z+=a,this.checkRay.Y1[3].ray.origin.x-=a,this.checkRay.Y1[3].ray.origin.z-=a;for(let c=0;c<5;c++){let l=this.checkRay.Y1[c].intersectObjects(this.objectsImpenetrable);if(l.length>0){let u=l[0].point.y;s=Math.min(s===void 0?u:s,u)}}}let o=this.isFlying?n:this.controls.getObject().position.y+this.velocity.y*e;if(o===void 0)return;s!==void 0&&o>s-(this.personOption.height-this.personOption.sightHeight)&&(o=s-(this.personOption.height-this.personOption.sightHeight),this.velocity.y=0),i!==void 0?(o=Math.max(i+this.personOption.sightHeight,o),o===i+this.personOption.sightHeight?(this.velocity.y=0,this.canJump=!0,this.isFlying=!1):this.velocity.y-=this.worldOption.g*Math.sqrt(e)):this.velocity.y-=this.worldOption.g*Math.sqrt(e),this.controls.getObject().position.y=o}}checkAndResetPosition(){this.controls.getObject().position.y<-300&&(Wb(this.domElement),this.velocity.y=0,this.controls.getObject().position.y=50,this.controls.getObject().position.x=10,this.controls.getObject().position.z=11,this.camera.lookAt(new P(0,50,0)))}removeCube(e){let t=this.objects.findIndex(i=>i.id===e.id);t>=0&&this.objects.splice(t,1);const n=this.scene.getObjectById(e.id);n&&(this.scene.remove(n),this.selectObjectsImpenetrable())}addCube(e){var f;let t=(f=e.face)==null?void 0:f.normal,n=e.object.rotation,i=e.object.position,s=e.point,o=Pe[e.object.userData.cubeTypeKey].cubeAttributes&&Pe[e.object.userData.cubeTypeKey].cubeAttributes.geometryType===F.HalfCube,a=Pe[e.object.userData.cubeTypeKey].cubeAttributes&&Pe[e.object.userData.cubeTypeKey].cubeAttributes.geometryType===F.Flower1Cube,c=Pe[Object.keys(Pe)[this.currentCubeTypeIndex]].cubeAttributes&&Pe[Object.keys(Pe)[this.currentCubeTypeIndex]].cubeAttributes.geometryType===F.Flower1Cube,l=Pe[Object.keys(Pe)[this.currentCubeTypeIndex]].cubeAttributes&&Pe[Object.keys(Pe)[this.currentCubeTypeIndex]].cubeAttributes.geometryType===F.HalfCube,u=Pe[Object.keys(Pe)[this.currentCubeTypeIndex]].cubeAttributes&&Pe[Object.keys(Pe)[this.currentCubeTypeIndex]].cubeAttributes.geometryType===F.StairsCube,h=new P(t==null?void 0:t.x,t==null?void 0:t.y,t==null?void 0:t.z);h=h.applyAxisAngle(new P(0,0,1),n.z),h=h.applyAxisAngle(new P(0,1,0),n.y),h=h.applyAxisAngle(new P(1,0,0),n.x),h.round();let d;if(!a&&c&&h.y!==1)return;if(a)d=i;else{let _=h.y;o?l?h.y!==0&&(_=h.y/2):h.y!==0?(i.y>0?i.y%1===.25:i.y%1===-.75)?_=h.y*(h.y>0?3:5)/4:_=h.y*(h.y>0?5:3)/4:(i.y>0?i.y%1===.25:i.y%1===-.75)?_=-1/4:_=1/4:l&&(h.y!==0?_=h.y*3/4:_=(s.y>i.y?1:-1)/4),d={x:i.x+h.x,y:i.y+_,z:i.z+h.z};{let w;for(let E of this.objects)Math.round(E.position.x)===Math.round(d.x)&&Math.round(E.position.y)===Math.round(d.y)&&Math.round(E.position.z)===Math.round(d.z)&&(w=E);if(w){if(w.userData.cubeAttributes.geometryType===F.Flower1Cube)this.removeCube(w);else if(!l)return}}}let m={x:0,y:0,z:0};if(!l){let _,w=this.camera.getWorldDirection(new P(1,0,0));Math.abs(w.x)>=Math.abs(w.z)?_=new P(-w.x,0,0):_=new P(0,0,-w.z),_.normalize().round(),Math.abs(w.y)>=.5&&(_.y=w.y>0?1:-1),_.x===1?m.y=0:_.x===-1?m.y=180:_.z===1?m.y=-90:_.z===-1&&(m.y=90),_.y!==0&&(m.z=_.y>0?-90:90),m.z+=90}u&&(m.z-=90);let p=new kt(Pe[Object.keys(Pe)[this.currentCubeTypeIndex]]).buildCube(d.x,d.y,d.z,Pe[Object.keys(Pe)[this.currentCubeTypeIndex]],0,m.y,m.z);a&&this.removeCube(e.object),this.scene.add(p),this.objects.push(p),this.selectObjectsImpenetrable()}selectObjectsImpenetrable(){this.objectsImpenetrable=this.objects.filter(e=>!(e.userData&&e.userData.cubeAttributes&&e.userData.cubeAttributes.isPenetrable))}}const Wb=r=>{let e=document.getElementById("wastedCover");if(!e){const t=window.document.createElement("div");t.style.position="fixed",t.style.left="0",t.style.right="0",t.style.top="0",t.style.bottom="0",t.style.position="fixed",t.style.pointerEvents="none",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="space-around",t.style.fontWeight="900",t.style.stroke="2vw solid white",t.style.zIndex="10000",t.style.backgroundImage=`url('${Hb}')`,t.style.backgroundPosition="center",t.style.backgroundRepeat="no-repeat",t.style.backgroundSize="20%",t.style.backgroundColor="white",t.id="wastedCover",document.body.append(t),e=t}setTimeout(()=>{e&&(e.style.transition="background 0.8s linear",e.style.backgroundColor="rgba(0,0,0,0.3)",e.style.opacity="1"),r.style.filter="grayscale(100%) blur(3px)"},1),setTimeout(()=>{e&&(e.style.transition="none",e.style.backgroundColor="white",e.style.opacity="0"),r.style.filter="",r.style.transition="filter 0.8s linear"},3e3)};var Na=(r=>(r.ShowOrbitControl="ShowOrbitControl",r.MCFirstPersonControl="MCFirstPersonControl",r))(Na||{});const qb=(r,e,t,n,i)=>{let s;switch(r){case"ShowOrbitControl":let o=new Bb(t,n.domElement);o.initClickFunction(e.children),s=o;break;case"MCFirstPersonControl":s=new Vb(t,n.domElement,i,e);break}return s};class jb{constructor(){this.objects=[],this.prevTime=performance.now()}init(e="canvas-wrapper"){this.canvasEl=Rb(e),this.scene=kb(),this.lightAmbient=Db(),this.scene.add(this.lightAmbient),this.lightDirectional=Ib(),this.scene.add(this.lightDirectional),this.camera=Fb(),this.camera.aspect=this.canvasEl.offsetWidth/this.canvasEl.offsetHeight,this.camera.updateProjectionMatrix(),this.scene.add(this.camera),this.renderer=Ub(),this.renderer.setSize(this.canvasEl.offsetWidth,this.canvasEl.offsetHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.canvasEl.appendChild(this.renderer.domElement),this.controls=qb(Na.MCFirstPersonControl,this.scene,this.camera,this.renderer,this.objects),this.bgmPlayer=Nb(),this.changeLight=this.changeLightFunBuilder(),this.addBlocks(),this.startAnimate()}startAnimate(){this.animate(),window.addEventListener("resize",()=>{this.camera.aspect=this.canvasEl.offsetWidth/this.canvasEl.offsetHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvasEl.offsetWidth,this.canvasEl.offsetHeight)})}animate(){var n,i,s;(i=(n=this.statsWindow)==null?void 0:n.stats)==null||i.update();let e=performance.now(),t=(e-this.prevTime)/1e3;this.prevTime=e,(s=this.controls)==null||s.update(t),this.renderer.render(this.scene,this.camera),this.changeLight(),requestAnimationFrame(()=>{this.animate()})}changeLightFunBuilder(){let e={current:1,low:.5,high:1,becomeHigher:!0};return()=>{this.lightAmbient.intensity=Oa(e.current,e.high,e.low),this.lightDirectional&&(this.lightDirectional.intensity=za(e.current,e.high,e.low)),e.becomeHigher?e.current<=1?e.current-=2e-4:e.becomeHigher=!1:e.current>=.5?e.current+=2e-4:e.becomeHigher=!0}}addBlocks(){var i;let e=[[3,9,2,"stone",void 0,void 0,void 0],[3,9,3,"stone",void 0,void 0,void 0],[3,9,9,"stone",void 0,void 0,void 0],[4,9,4,"stone",void 0,void 0,void 0],[5,9,1,"stone",void 0,void 0,void 0],[5,9,6,"stone",void 0,void 0,void 0],[6,9,1,"stone",void 0,void 0,void 0],[7,9,5,"wool_colored_pink",void 0,void 0,void 0],[7,9,7,"stone",void 0,void 0,void 0],[7,9,10,"stone",void 0,void 0,void 0],[8,9,3,"stone",void 0,void 0,void 0],[8,9,5,"stone",void 0,void 0,void 0],[8,9,11,"stone",void 0,void 0,void 0],[9,9,4,"stone",void 0,void 0,void 0],[9,9,8,"stone",void 0,void 0,void 0],[11,9,11,"stone",void 0,void 0,void 0],[12,9,8,"stone",void 0,void 0,void 0],[2,9,2,"stone",0,180,90],[2,9,3,"stone",0,-90,90],[2,9,9,"stone",0,-90,90],[7,9,14,"grass",0,0,180],[8,9,14,"grass",0,0,180],[9,9,14,"grass",0,0,180],[10,9,14,"grass",0,0,180],[11,9,14,"grass",0,0,180],[6,9,14,"stone",0,0,180],[6,9,13,"grass",0,0,90],[8,9,13,"grass",0,0,90],[9,9,13,"grass",0,0,90],[10,9,13,"grass",0,0,90],[11,9,13,"grass",0,0,90],[12,9,13,"grass",0,0,180],[6,9,12,"grass",0,0,90],[7,9,12,"grass",0,0,90],[8,9,12,"grass",0,0,90],[9,9,12,"grass",0,0,90],[10,9,12,"grass",0,0,90],[11,9,12,"grass",0,0,90],[12,9,12,"grass",0,0,90],[6,9,10,"grass",0,0,180],[10,9,11,"grass",0,90,90],[10,9,10,"grass",0,90,180],[9,9,10,"grass",0,90,90],[10,9,9,"grass",0,90,180],[8,9,9,"grass",0,90,90],[7,9,9,"grass",0,0,90],[6,9,9,"grass",0,0,180],[12,9,11,"grass",0,90,180],[11,9,10,"grass",0,90,180],[11,9,8,"grass",0,90,180],[11,9,9,"grass",0,90,180],[7,9,6,"grass",0,180,180],[9,9,6,"grass",0,180,90],[10,9,8,"grass",0,90,90],[8,9,8,"grass",0,90,90],[9,9,7,"grass",0,90,90],[7,9,8,"grass",0,90,90],[6,9,8,"grass",0,90,90],[6,9,7,"grass",0,90,90],[6,9,6,"grass",0,90,180],[5,9,8,"grass",0,90,180],[5,9,9,"grass",0,90,180],[4,9,9,"grass",0,90,180],[4,9,8,"grass",0,90,90],[9,9,5,"grass",0,90,180],[9,9,3,"grass",0,0,180],[7,9,3,"grass",0,0,90],[6,9,3,"wool_colored_pink",0,0,90],[5,9,3,"grass",0,0,90],[5,9,5,"grass",0,90,180],[4,9,7,"grass",0,90,90],[3,9,8,"grass",0,90,90],[4,9,6,"grass",0,180,180],[7,9,4,"grass",0,180,180],[3,9,4,"grass",0,0,90],[3,9,6,"grass",0,90,90],[3,9,5,"grass",0,0,180],[3,9,7,"wool_colored_pink",0,90,180],[2,9,8,"grass",0,90,180],[2,9,7,"grass",0,90,180],[2,9,6,"grass",0,90,180],[2,9,5,"grass",0,90,180],[2,9,4,"grass",0,90,180],[8,9,2,"grass",0,180,90],[8,9,4,"grass",0,180,180],[6,9,2,"grass",0,-90,90],[5,9,2,"grass",0,180,90],[4,9,3,"grass",0,180,90],[9,9,1,"grass",0,180,90],[8,9,1,"grass",0,180,90],[4,9,1,"grass",0,180,180],[3,9,1,"grass",0,180,180],[1,9,9,"grass",0,90,90],[1,9,8,"grass",0,90,90],[1,9,7,"grass",0,90,90],[1,9,6,"grass",0,90,90],[1,9,5,"grass",0,90,90],[1,9,4,"grass",0,90,90],[10,10,8,"grass",0,180,180],[11,10,9,"grass",0,-90,90],[11,10,10,"grass",0,-90,180],[12,9,10,"grass",0,90,180],[12,9,9,"grass",0,-90,180],[6,9,4,"grass",0,90,180],[2,10,5,"tallgrass",0,180,180],[2,10,4,"tallgrass",0,180,180],[2,10,7,"tallgrass",0,180,180],[2,10,8,"tallgrass",0,180,180],[11,10,14,"tallgrass",0,-90,180],[1,10,4,"tallgrass",0,-90,90],[7,9,0,"grass",0,0,180],[9,10,1,"tallgrass",0,-90,90],[10,10,9,"grass",0,180,90],[6,9,5,"wool_colored_pink",0,-90,180],[7,9,1,"grass",0,-90,180],[7,9,2,"grass",0,180,180],[9,9,2,"grass",0,180,180],[8,10,5,"tallgrass",0,-90,180],[9,10,7,"flower_houstonia",0,90,90],[9,10,10,"flower_houstonia",0,90,180],[6,10,14,"tallgrass",0,-90,180],[7,10,12,"tallgrass",0,0,180],[8,10,12,"tallgrass",0,0,180],[9,10,14,"tallgrass",0,0,180],[32,26,20,"stonebrick_cracked",0,180,180],[32,28,20,"stonebrick_cracked",0,180,180],[32,29,20,"cobblestone",0,-90,90],[32,28.25,19,"stone_slab_half",0,0,0],[31,28.25,20,"stone_slab_half",0,0,0],[32,28.25,21,"stone_slab_half",0,0,0],[33,28.25,20,"stone_slab_half",0,0,0],[31,27.75,20,"stone_slab_half",0,0,0],[30,27.75,20,"stone_slab_half",0,0,0],[32,27.75,21,"stone_slab_half",0,0,0],[32,27.75,22,"stone_slab_half",0,0,0],[33,27.75,20,"stone_slab_half",0,0,0],[34,27.75,20,"stone_slab_half",0,0,0],[32,27.75,19,"stone_slab_half",0,0,0],[32,27.75,18,"stone_slab_half",0,0,0],[33,26.25,20,"stone_slab_half",0,0,0],[32,26.25,19,"stone_slab_half",0,0,0],[31,26.25,20,"stone_slab_half",0,0,0],[32,26.25,21,"stone_slab_half",0,0,0],[32,25,20,"stonebrick",0,0,0],[33,25,20,"stone_slab_stairs",0,0,0],[32,25,19,"stone_slab_stairs",0,90,0],[31,25,20,"stone_slab_stairs",0,180,0],[32,25,21,"stone_slab_stairs",0,-90,0],[32,24,20,"stonebrick",0,-90,0],[32,23,20,"stonebrick",0,-90,0],[31,24,20,"stone_slab_stairs",0,180,-90],[32,24,21,"stone_slab_stairs",0,-90,-90],[33,24,20,"stone_slab_stairs",0,0,-90],[32,24,19,"stone_slab_stairs",0,90,-90],[32,27,21,"cobblestone_stairs",0,90,0],[31,27,20,"cobblestone_stairs",0,0,0],[32,27,19,"cobblestone_stairs",0,-90,0],[33,27,20,"cobblestone_stairs",0,180,0],[32,27,20,"glowstone",0,90,90],[32,26,20,"stonebrick_cracked",0,180,180],[32,28,20,"stonebrick_cracked",0,180,180],[32,29,20,"cobblestone",0,-90,90],[32,28.25,19,"stone_slab_half",0,0,0],[31,28.25,20,"stone_slab_half",0,0,0],[32,28.25,21,"stone_slab_half",0,0,0],[33,28.25,20,"stone_slab_half",0,0,0],[31,27.75,20,"stone_slab_half",0,0,0],[30,27.75,20,"stone_slab_half",0,0,0],[32,27.75,21,"stone_slab_half",0,0,0],[32,27.75,22,"stone_slab_half",0,0,0],[33,27.75,20,"stone_slab_half",0,0,0],[34,27.75,20,"stone_slab_half",0,0,0],[32,27.75,19,"stone_slab_half",0,0,0],[32,27.75,18,"stone_slab_half",0,0,0],[33,26.25,20,"stone_slab_half",0,0,0],[32,26.25,19,"stone_slab_half",0,0,0],[31,26.25,20,"stone_slab_half",0,0,0],[32,26.25,21,"stone_slab_half",0,0,0],[32,25,20,"stonebrick",0,0,0],[33,25,20,"stone_slab_stairs",0,0,0],[32,25,19,"stone_slab_stairs",0,90,0],[31,25,20,"stone_slab_stairs",0,180,0],[32,25,21,"stone_slab_stairs",0,-90,0],[32,24,20,"stonebrick",0,-90,0],[32,23,20,"stonebrick",0,-90,0],[31,24,20,"stone_slab_stairs",0,180,-90],[32,24,21,"stone_slab_stairs",0,-90,-90],[33,24,20,"stone_slab_stairs",0,0,-90],[32,24,19,"stone_slab_stairs",0,90,-90],[32,27,21,"cobblestone_stairs",0,90,0],[31,27,20,"cobblestone_stairs",0,0,0],[32,27,19,"cobblestone_stairs",0,-90,0],[33,27,20,"cobblestone_stairs",0,180,0],[32,27,20,"glowstone",0,90,90],[32,26,20,"stonebrick_cracked",0,180,180],[32,28,20,"stonebrick_cracked",0,180,180],[32,29,20,"cobblestone",0,-90,90],[32,28.25,19,"stone_slab_half",0,0,0],[31,28.25,20,"stone_slab_half",0,0,0],[32,28.25,21,"stone_slab_half",0,0,0],[33,28.25,20,"stone_slab_half",0,0,0],[31,27.75,20,"stone_slab_half",0,0,0],[30,27.75,20,"stone_slab_half",0,0,0],[32,27.75,21,"stone_slab_half",0,0,0],[32,27.75,22,"stone_slab_half",0,0,0],[33,27.75,20,"stone_slab_half",0,0,0],[34,27.75,20,"stone_slab_half",0,0,0],[32,27.75,19,"stone_slab_half",0,0,0],[32,27.75,18,"stone_slab_half",0,0,0],[33,26.25,20,"stone_slab_half",0,0,0],[32,26.25,19,"stone_slab_half",0,0,0],[31,26.25,20,"stone_slab_half",0,0,0],[32,26.25,21,"stone_slab_half",0,0,0],[32,25,20,"stonebrick",0,0,0],[33,25,20,"stone_slab_stairs",0,0,0],[32,25,19,"stone_slab_stairs",0,90,0],[31,25,20,"stone_slab_stairs",0,180,0],[32,25,21,"stone_slab_stairs",0,-90,0],[32,24,20,"stonebrick",0,-90,0],[32,23,20,"stonebrick",0,-90,0],[31,24,20,"stone_slab_stairs",0,180,-90],[32,24,21,"stone_slab_stairs",0,-90,-90],[33,24,20,"stone_slab_stairs",0,0,-90],[32,24,19,"stone_slab_stairs",0,90,-90],[32,27,21,"cobblestone_stairs",0,90,0],[31,27,20,"cobblestone_stairs",0,0,0],[32,27,19,"cobblestone_stairs",0,-90,0],[33,27,20,"cobblestone_stairs",0,180,0],[32,27,20,"glowstone",0,90,90],[32,26,20,"stonebrick_cracked",0,180,180],[32,28,20,"stonebrick_cracked",0,180,180],[32,29,20,"cobblestone",0,-90,90],[32,28.25,19,"stone_slab_half",0,0,0],[31,28.25,20,"stone_slab_half",0,0,0],[32,28.25,21,"stone_slab_half",0,0,0],[33,28.25,20,"stone_slab_half",0,0,0],[31,27.75,20,"stone_slab_half",0,0,0],[30,27.75,20,"stone_slab_half",0,0,0],[32,27.75,21,"stone_slab_half",0,0,0],[32,27.75,22,"stone_slab_half",0,0,0],[33,27.75,20,"stone_slab_half",0,0,0],[34,27.75,20,"stone_slab_half",0,0,0],[32,27.75,19,"stone_slab_half",0,0,0],[32,27.75,18,"stone_slab_half",0,0,0],[33,26.25,20,"stone_slab_half",0,0,0],[32,26.25,19,"stone_slab_half",0,0,0],[31,26.25,20,"stone_slab_half",0,0,0],[32,26.25,21,"stone_slab_half",0,0,0],[32,25,20,"stonebrick",0,0,0],[33,25,20,"stone_slab_stairs",0,0,0],[32,25,19,"stone_slab_stairs",0,90,0],[31,25,20,"stone_slab_stairs",0,180,0],[32,25,21,"stone_slab_stairs",0,-90,0],[32,24,20,"stonebrick",0,-90,0],[32,23,20,"stonebrick",0,-90,0],[31,24,20,"stone_slab_stairs",0,180,-90],[32,24,21,"stone_slab_stairs",0,-90,-90],[33,24,20,"stone_slab_stairs",0,0,-90],[32,24,19,"stone_slab_stairs",0,90,-90],[32,27,21,"cobblestone_stairs",0,90,0],[31,27,20,"cobblestone_stairs",0,0,0],[32,27,19,"cobblestone_stairs",0,-90,0],[33,27,20,"cobblestone_stairs",0,180,0],[32,27,20,"glowstone",0,90,90],[8,9,7,"grassdirt",0,90,180],[8,9,6,"grassdirt",0,90,180],[9,9,9,"grassdirt",0,90,180],[8,9,10,"grassdirt",0,90,180],[6,9,11,"grassdirt",0,90,90],[7,9,11,"grassdirt",0,90,180],[5,9,7,"grassdirt",0,0,180],[9,9,11,"cobblestone",0,0,180],[7,9,13,"stone",0,-90,180],[1,9,3,"grass",0,0,180],[1,9,2,"grass",0,0,180],[1,9,1,"grass",0,0,180],[2,9,1,"grass",0,0,180],[0,9,1,"grass",0,90,180],[0,9,2,"grass",0,90,180],[0,9,0,"grass",0,0,180],[1,9,0,"grass",0,0,180],[5,9,4,"log_spruce",0,90,180],[5,10,4,"log_spruce",0,90,180],[5,10,3,"log_spruce",0,90,180],[4,10,3,"log_spruce",0,90,180],[5,13,3,"log_spruce",0,-90,180],[6,10,3,"log_spruce",0,0,180],[6,10,4,"log_spruce",0,-90,90],[5,10,2,"log_spruce",0,0,90],[4,14,4,"wool_colored_pink",0,90,180],[4,14,3,"wool_colored_pink",0,90,180],[5,14,3,"wool_colored_pink",0,90,180],[5,15,4,"wool_colored_pink",0,90,180],[4,15,4,"wool_colored_pink",0,90,180],[4,15,3,"wool_colored_pink",0,90,180],[5,15,3,"wool_colored_pink",0,90,180],[4,16,3,"wool_colored_pink",0,180,90],[4,16,4,"wool_colored_pink",0,180,90],[5,16,4,"wool_colored_pink",0,-90,90],[5,16,5,"wool_colored_pink",0,-90,90],[6,16,4,"wool_colored_pink",0,0,90],[7,16,4,"wool_colored_pink",0,0,90],[7,17,4,"wool_colored_pink",0,0,90],[5,16,3,"wool_colored_pink",0,0,90],[5,16,2,"wool_colored_pink",0,0,90],[6,16,3,"wool_colored_pink",0,0,90],[6,16,2,"wool_colored_pink",0,0,90],[6,16,1,"wool_colored_pink",0,90,90],[6,16,0,"wool_colored_pink",0,90,90],[5,15,2,"wool_colored_pink",0,90,90],[5,16,1,"wool_colored_pink",0,90,90],[4,16,1,"wool_colored_pink",0,90,90],[5,16,0,"wool_colored_pink",0,90,90],[4,16,0,"wool_colored_pink",0,90,90],[3,16,0,"wool_colored_pink",0,90,90],[3,16,-1,"wool_colored_pink",0,180,90],[2,16,0,"wool_colored_pink",0,180,90],[3,15,3,"wool_colored_pink",0,180,90],[2,15,3,"wool_colored_pink",0,180,90],[3,15,2,"wool_colored_pink",0,180,90],[3,16,3,"wool_colored_pink",0,180,90],[2,15,2,"wool_colored_pink",0,180,90],[2,16,3,"wool_colored_pink",0,180,90],[3,16,4,"wool_colored_pink",0,180,90],[2,16,4,"wool_colored_pink",0,180,90],[3,16,5,"wool_colored_pink",0,180,90],[2,16,5,"wool_colored_pink",0,180,90],[3,15,4,"wool_colored_pink",0,-90,90],[4,15,5,"wool_colored_pink",0,-90,90],[4,15,6,"wool_colored_pink",0,-90,90],[3,15,5,"wool_colored_pink",0,-90,90],[4,15,7,"wool_colored_pink",0,-90,90],[3,15,6,"wool_colored_pink",0,-90,90],[3,16,6,"wool_colored_pink",0,-90,90],[4,16,5,"wool_colored_pink",0,-90,90],[5,15,5,"wool_colored_pink",0,-90,90],[6,15,5,"wool_colored_pink",0,-90,90],[7,15,5,"wool_colored_pink",0,-90,90],[8,16,5,"wool_colored_pink",0,0,90],[8,16,4,"wool_colored_pink",0,0,90],[7,16,3,"wool_colored_pink",0,0,90],[8,16,3,"wool_colored_pink",0,0,90],[7,16,2,"wool_colored_pink",0,0,90],[7,16,1,"wool_colored_pink",0,90,90],[6,14,3,"wool_colored_pink",0,90,90],[6,15,3,"wool_colored_pink",0,90,90],[5,17,0,"wool_colored_pink",0,90,90],[4,17,0,"wool_colored_pink",0,90,180],[3,17,0,"wool_colored_pink",0,180,180],[2,17,0,"wool_colored_pink",0,180,180],[6,17,2,"wool_colored_pink",0,180,90],[3,17,1,"wool_colored_pink",0,180,180],[2,17,1,"wool_colored_pink",0,180,180],[3,16,1,"wool_colored_pink",0,180,180],[4,16,2,"wool_colored_pink",0,180,180],[3,17,3,"wool_colored_pink",0,180,180],[2,17,3,"wool_colored_pink",0,-90,180],[3,17,5,"wool_colored_pink",0,-90,180],[3,17,6,"wool_colored_pink",0,-90,180],[5,17,5,"wool_colored_pink",0,-90,90],[6,16,5,"wool_colored_pink",0,-90,90],[5,17,3,"wool_colored_pink",0,-90,90],[5,17,4,"wool_colored_pink",0,-90,90],[6,16,6,"wool_colored_pink",0,0,180],[7,16,5,"wool_colored_pink",0,0,180],[6,17,5,"wool_colored_pink",0,0,180],[6,17,3,"wool_colored_pink",0,0,180],[7,17,3,"wool_colored_pink",0,0,180],[7,17,2,"wool_colored_pink",0,0,180],[6,17,1,"wool_colored_pink",0,90,180],[3,17,4,"wool_colored_pink",0,180,180],[2,17,4,"wool_colored_pink",0,180,180],[4,17,1,"wool_colored_pink",0,-90,180],[4,17,4,"wool_colored_pink",0,-90,180],[4,17,5,"wool_colored_pink",0,-90,180],[4,17,6,"wool_colored_pink",0,-90,180],[6,15,2,"wool_colored_pink",0,0,90],[7,15,2,"wool_colored_pink",0,0,90],[7,15,3,"wool_colored_pink",0,0,90],[5,15,1,"wool_colored_pink",0,0,90],[6,15,1,"wool_colored_pink",0,0,90],[5,15,0,"wool_colored_pink",0,90,90],[4,15,2,"wool_colored_pink",0,90,90],[4,15,0,"wool_colored_pink",0,180,90],[3,15,1,"wool_colored_pink",0,180,90],[2,15,1,"wool_colored_pink",0,180,90],[3,16,2,"wool_colored_pink",0,180,90],[2,16,2,"wool_colored_pink",0,180,90],[4,17,2,"wool_colored_pink",0,180,90],[3,14,4,"log_spruce",0,180,90],[2,15,4,"log_spruce",0,180,90],[5,14,4,"log_spruce",0,-90,90],[5,14,5,"log_spruce",0,-90,90],[6,15,6,"log_spruce",0,-90,90],[6,14,2,"log_spruce",0,0,90],[7,15,1,"log_spruce",0,0,90],[2,15,6,"wool_colored_pink",0,180,90],[5,15,6,"wool_colored_pink",0,-90,90],[5,16,6,"wool_colored_pink",0,-90,90],[7,15,6,"wool_colored_pink",0,-90,90],[6,15,4,"wool_colored_pink",0,0,90],[6,15,0,"wool_colored_pink",0,90,90],[7,14,5,"wool_colored_pink",0,0,90],[4,15,1,"wool_colored_pink",0,90,90],[3,14,0,"wool_colored_pink",0,180,90],[1,14,2,"wool_colored_pink",0,180,90],[1,16,2,"wool_colored_pink",0,180,0],[1,16,3,"wool_colored_pink",0,180,0],[1,15,3,"wool_colored_pink",0,180,0],[1,15,4,"wool_colored_pink",0,180,0],[2,15,5,"wool_colored_pink",0,180,0],[3,14,6,"wool_colored_pink",0,180,0],[1,14,4,"wool_colored_pink",0,180,0],[8,15,6,"wool_colored_pink",0,0,90],[7,16,6,"wool_colored_pink",0,0,90],[6,14,4,"glass_pink",0,-90,90],[6,14,5,"glass_pink",0,-90,90],[7,15,4,"glass_pink",0,0,90],[5,14,6,"glass_pink",0,-90,90],[4,14,5,"glass_pink",0,-90,90],[2,14,4,"glass_pink",0,-90,90],[3,14,5,"glass_pink",0,-90,90],[3,14,3,"glass_pink",0,180,90],[2,14,3,"glass_pink",0,180,90],[5,14,2,"glass_pink",0,180,90],[4,14,2,"glass_pink",0,180,90],[5,14,1,"glass_pink",0,180,90],[4,14,1,"glass_pink",0,180,90],[3,15,0,"glass_pink",0,180,90],[2,16,1,"glass_pink",0,180,90],[1,15,2,"glass_pink",0,180,90],[1,15,5,"glass_pink",0,180,90],[2,17,5,"glass_pink",0,-90,90],[4,16,6,"glass_pink",0,-90,90],[6,17,6,"glass_pink",0,-90,90],[7,17,5,"glass_pink",0,-90,90],[5,16,7,"glass_pink",0,0,90],[5,17,6,"glass_pink",0,-90,90],[7,14,4,"glass_pink",0,90,90],[7,14,3,"glass_pink",0,90,90],[6,14,1,"wool_colored_pink",0,0,90],[4,15,-1,"wool_colored_pink",0,0,90],[5,16,-1,"wool_colored_pink",0,0,90],[2,15,0,"wool_colored_pink",0,90,90],[2,14,5,"wool_colored_pink",0,-90,90],[7,14,6,"wool_colored_pink",0,-90,90],[8,14,3,"wool_colored_pink",0,0,90],[4,14,6,"wool_colored_pink",0,-90,90],[6,14,6,"wool_colored_pink",0,0,90],[6,15,7,"wool_colored_pink",0,0,90],[6,14,0,"wool_colored_pink",0,0,90],[7,14,1,"wool_colored_pink",0,0,90],[7,14,2,"wool_colored_pink",0,0,90],[4,14,0,"wool_colored_pink",0,90,90],[5,14,0,"wool_colored_pink",0,90,90],[8,15,2,"wool_colored_pink",0,0,90],[3,15,7,"wool_colored_pink",0,-90,90],[1,15,1,"wool_colored_pink",0,180,90],[2,14,2,"wool_colored_pink",0,90,90],[2,14,1,"wool_colored_pink",0,90,90],[5,11,4,"log_spruce",0,0,180],[5,10,5,"log_spruce",0,-90,180],[5,12,4,"log_spruce",0,-90,90],[5,12,3,"log_spruce",0,0,0],[5,13,2,"log_spruce",0,0,90],[4,10,4,"log_spruce",0,-90,90],[4,9,5,"log_spruce",0,-90,90],[4,9,2,"log_spruce",0,180,90],[3,18,3,"glass_pink",0,0,90],[4,18,0,"glass_pink",0,0,90],[6,17,0,"glass_pink",0,0,90],[6,18,1,"glass_pink",0,0,90],[6,18,2,"glass_pink",0,0,90],[6,18,3,"glass_pink",0,0,90],[6,17,4,"glass_pink",0,0,90],[5,18,5,"glass_pink",0,0,180],[6,18,5,"glass_pink",0,0,180],[8,17,3,"glass_pink",0,0,180],[2,17,2,"glass_pink",0,0,180],[4,18,3,"wool_colored_pink",0,90,180],[4,18,2,"wool_colored_pink",0,90,180],[5,17,2,"wool_colored_pink",0,90,180],[5,18,2,"wool_colored_pink",0,90,180],[6,18,4,"wool_colored_pink",0,90,180],[4,18,4,"wool_colored_pink",0,0,180],[5,18,4,"wool_colored_pink",0,0,180],[5,18,3,"wool_colored_pink",0,0,180],[4,18,1,"wool_colored_pink",0,0,180],[5,18,1,"wool_colored_pink",0,90,180],[7,15,0,"wool_colored_pink",0,90,90],[6,15,-1,"wool_colored_pink",0,90,90],[5,15,-1,"wool_colored_pink",0,90,90],[5,15,-2,"wool_colored_pink",0,90,90],[4,15,-2,"wool_colored_pink",0,90,90],[3,15,-1,"wool_colored_pink",0,90,90],[5,10,6,"flower_houstonia",0,0,90],[3,10,5,"flower_houstonia",0,-90,90],[5,11,3,"flower_houstonia",0,0,90],[6,11,4,"tallgrass",0,-90,90],[10,11,8,"tallgrass",0,-90,90],[7,10,4,"tallgrass",0,-90,90],[4,10,8,"tallgrass",0,-90,90],[6,10,9,"tallgrass",0,-90,180],[6,10,10,"tallgrass",0,0,90],[3,10,1,"tallgrass",0,-90,180]],t=new kt(Pe.grass);for(let s of e){let o=t.buildCube(...s);this.scene.add(o),this.objects.push(o)}let n=[[32,26,20,"stonebrick_cracked",0,180,180],[32,28,20,"stonebrick_cracked",0,180,180],[32,29,20,"cobblestone",0,-90,90],[32,28.25,19,"stone_slab_half",0,0,0],[31,28.25,20,"stone_slab_half",0,0,0],[32,28.25,21,"stone_slab_half",0,0,0],[33,28.25,20,"stone_slab_half",0,0,0],[31,27.75,20,"stone_slab_half",0,0,0],[30,27.75,20,"stone_slab_half",0,0,0],[32,27.75,21,"stone_slab_half",0,0,0],[32,27.75,22,"stone_slab_half",0,0,0],[33,27.75,20,"stone_slab_half",0,0,0],[34,27.75,20,"stone_slab_half",0,0,0],[32,27.75,19,"stone_slab_half",0,0,0],[32,27.75,18,"stone_slab_half",0,0,0],[33,26.25,20,"stone_slab_half",0,0,0],[32,26.25,19,"stone_slab_half",0,0,0],[31,26.25,20,"stone_slab_half",0,0,0],[32,26.25,21,"stone_slab_half",0,0,0],[32,25,20,"stonebrick",0,0,0],[33,25,20,"stone_slab_stairs",0,0,0],[32,25,19,"stone_slab_stairs",0,90,0],[31,25,20,"stone_slab_stairs",0,180,0],[32,25,21,"stone_slab_stairs",0,-90,0],[32,24,20,"stonebrick",0,-90,0],[32,23,20,"stonebrick",0,-90,0],[31,24,20,"stone_slab_stairs",0,180,-90],[32,24,21,"stone_slab_stairs",0,-90,-90],[33,24,20,"stone_slab_stairs",0,0,-90],[32,24,19,"stone_slab_stairs",0,90,-90],[32,27,21,"cobblestone_stairs",0,90,0],[31,27,20,"cobblestone_stairs",0,0,0],[32,27,19,"cobblestone_stairs",0,-90,0],[33,27,20,"cobblestone_stairs",0,180,0],[32,27,20,"glowstone",0,90,90]];for(let s of n){let o=t.buildCube(...s);o.position.x-=44,o.position.y-=16,o.position.z-=25,this.scene.add(o),this.objects.push(o)}for(let s of n){let o=t.buildCube(...s);o.position.x-=10,o.position.y-=8,o.position.z-=45,this.scene.add(o),this.objects.push(o)}for(let s of n){let o=t.buildCube(...s);o.position.x-=45,o.position.y-=5,o.position.z+=15,this.scene.add(o),this.objects.push(o)}{let s=new Da({transparent:!0,opacity:.3,color:16777215,side:rn});for(let o=0;o<=50;o++){const a=Math.round(Math.random()*10+4),c=4,l=Math.round(Math.random()*10+4);let u=new At(new Vt(a,c,l),s);if(u.position.x=5+(Math.random()>.5?-1:1)*Math.round(Math.random()*60)+a/2,u.position.z=(Math.random()>.5?-1:1)*Math.round(Math.random()*60)+l/2,u.position.y=Math.round(Math.random()*60)-10,u.position.y>2&&u.position.y<15&&Math.abs(u.position.x)<20&&Math.abs(u.position.z)<20){o--;continue}this.scene.add(u)}}this.controls&&"selectObjectsImpenetrable"in this.controls&&((i=this.controls)==null||i.selectObjectsImpenetrable())}}export{jb as default};
