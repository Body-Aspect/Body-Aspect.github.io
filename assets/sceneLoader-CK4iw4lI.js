var Pu=Object.defineProperty;var Nu=(e,n,t)=>n in e?Pu(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var ne=(e,n,t)=>Nu(e,typeof n!="symbol"?n+"":n,t);import{c as Cu,S as Cn,N as qt,C as xe,F as Ql,M as $e,V as le,R as bu,W as Ri,H as ro,U as Ai,L as ui,a as un,D as yt,B as at,b as Vi,t as wu,d as Fu,p as Du,w as Pi,e as Uu,E as Hu,f as Un,P as $t,g as vn,A as Gu,h as Gt,i as jr,j as vs,k as cr,l as ur,m as ec,n as Bu,o as ct,q as rn,r as et,s as Wu,u as ku,v as Vu,x as zu,y as Wt,z as $n,G as lt,I as mn,J as nc,K as hi,O as Dt,Q as _i,T as qr,X as Ji,Y as Xu,Z as Ku,_ as Yu,$ as ju,a0 as qu,a1 as $u,a2 as Zu,a3 as Ju,a4 as Qu,a5 as ed,a6 as nd,a7 as td,a8 as id,a9 as rd,aa as od,ab as sd,ac as ad,ad as zi,ae as $r,af as tc,ag as ic,ah as rr,ai as Bt,aj as Vr,ak as ld,al as cd,am as ud,an as rc,ao as dd,ap as fd,aq as pd,ar as hd,as as Ot,at as oc,au as sc,av as ac,aw as Zr,ax as lc,ay as cc,az as oo,aA as Li,aB as $s,aC as gn,aD as Ls,aE as uc,aF as dc,aG as di,aH as Jr,aI as Zo,aJ as _d,aK as fc,aL as md,aM as Ed,aN as zr,aO as so,aP as Td,aQ as Zs,aR as Js,aS as Qs,aT as gd,aU as ea,aV as Rd,aW as Ni,aX as na,aY as Ad,aZ as Sd,a_ as vd,a$ as Ld,b0 as xd,b1 as Md,b2 as yd,b3 as Id,b4 as Od,b5 as vo,b6 as Lo,b7 as xo,b8 as Mo,b9 as ta,ba as ia,bb as ra,bc as oa,bd as sa,be as aa,bf as la,bg as ca,bh as ua,bi as da,bj as fa,bk as pa,bl as ha,bm as _a,bn as ma,bo as Ea,bp as Ta,bq as ga,br as Ra,bs as Aa,bt as Sa,bu as yo,bv as va,bw as La,bx as Pd,by as xa,bz as Ma,bA as ya,bB as dr,bC as Ht,bD as fr,bE as Xi,bF as qn,bG as Nd,bH as Cd,bI as xs,bJ as Ia,bK as bd,bL as Jo,bM as Qo,bN as es,bO as ns,bP as ts,bQ as is,bR as rs,bS as wd,bT as Fd,bU as pc,bV as Ms,bW as Dd,bX as Ud,bY as Hd,bZ as Gd,b_ as Bd,b$ as Wd,c0 as kd,c1 as Vd,c2 as zd,c3 as Xd,c4 as Kd,c5 as Yd,c6 as jd,c7 as qd,c8 as $d,c9 as Zd,ca as os,cb as hc,cc as ao,cd as Jd,ce as mt,cf as ss,cg as fi,ch as _c,ci as ys,cj as Qd,ck as bn,cl as pr,cm as lo,cn as co,co as ot,cp as hr,cq as _r,cr as Ki,cs as uo,ct as Di,cu as Is,cv as Xr,cw as ef,cx as mr,cy as Ln,cz as as,cA as mc,cB as Os,cC as fo,cD as po,cE as Ar,cF as nf,cG as tf,cH as ls,cI as bt,cJ as rf,cK as of,cL as sf,cM as af,cN as Ec,cO as Io,cP as Sr,cQ as lf,cR as cf,cS as Tc,cT as gc,cU as uf,cV as df,cW as Ps,cX as ff,cY as Rc,cZ as Ac,c_ as Qn,c$ as Zt,d0 as st,d1 as Oa,d2 as pf,d3 as Ns,d4 as hf,d5 as Sc,d6 as _f,d7 as mf,d8 as Ef,d9 as Tf,da as Ft,db as gf,dc as Rf}from"./index-enP5E1sB.js";import{guidedExperiences as Pa}from"./guided-experiences-B2gt84z0.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function vc(){let e=null,n=!1,t=null,i=null;function r(o,s){t(o,s),i=e.requestAnimationFrame(r)}return{start:function(){n!==!0&&t!==null&&(i=e.requestAnimationFrame(r),n=!0)},stop:function(){e.cancelAnimationFrame(i),n=!1},setAnimationLoop:function(o){t=o},setContext:function(o){e=o}}}function Af(e){const n=new WeakMap;function t(a,l){const c=a.array,d=a.usage,u=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,d),a.onUploadCallback();let h;if(c instanceof Float32Array)h=e.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=e.HALF_FLOAT:h=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=e.SHORT;else if(c instanceof Uint32Array)h=e.UNSIGNED_INT;else if(c instanceof Int32Array)h=e.INT;else if(c instanceof Int8Array)h=e.BYTE;else if(c instanceof Uint8Array)h=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const d=l.array,u=l.updateRanges;if(e.bindBuffer(c,a),u.length===0)e.bufferSubData(c,0,d);else{u.sort((h,m)=>h.start-m.start);let f=0;for(let h=1;h<u.length;h++){const m=u[f],E=u[h];E.start<=m.start+m.count+1?m.count=Math.max(m.count,E.start+E.count-m.start):(++f,u[f]=E)}u.length=f+1;for(let h=0,m=u.length;h<m;h++){const E=u[h];e.bufferSubData(c,E.start*d.BYTES_PER_ELEMENT,d,E.start,E.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),n.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=n.get(a);l&&(e.deleteBuffer(l.buffer),n.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=n.get(a);(!d||d.version<a.version)&&n.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=n.get(a);if(c===void 0)n.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,If=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ff=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xf=`#define PI 3.141592653589793
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
} // validated`,Kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,Yf=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ep=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,np=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cp=`#ifdef USE_GRADIENTMAP
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
}`,up=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,hp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ap=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ip=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Op=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Np=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Xp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,th=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,oh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,sh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,ah=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
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
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
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
#endif`,dh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ph=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_h=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mh=`#ifdef USE_TRANSMISSION
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
#endif`,Eh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Th=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ah=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sh=`uniform sampler2D t2D;
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
}`,vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yh=`#include <common>
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
}`,Ih=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Oh=`#define DISTANCE
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
}`,Ph=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ch=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`uniform float scale;
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
}`,wh=`uniform vec3 diffuse;
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
}`,Fh=`#include <common>
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
}`,Dh=`uniform vec3 diffuse;
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
}`,Uh=`#define LAMBERT
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
}`,Hh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Gh=`#define MATCAP
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
}`,Bh=`#define MATCAP
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
}`,Wh=`#define NORMAL
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
}`,kh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vh=`#define PHONG
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
}`,zh=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Xh=`#define STANDARD
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
}`,Kh=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Yh=`#define TOON
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
}`,jh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,qh=`uniform float size;
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
}`,$h=`uniform vec3 diffuse;
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
}`,Zh=`#include <common>
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
}`,Jh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qh=`uniform float rotation;
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
}`,e_=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Sf,alphahash_pars_fragment:vf,alphamap_fragment:Lf,alphamap_pars_fragment:xf,alphatest_fragment:Mf,alphatest_pars_fragment:yf,aomap_fragment:If,aomap_pars_fragment:Of,batching_pars_vertex:Pf,batching_vertex:Nf,begin_vertex:Cf,beginnormal_vertex:bf,bsdfs:wf,iridescence_fragment:Ff,bumpmap_pars_fragment:Df,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:Hf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Bf,color_fragment:Wf,color_pars_fragment:kf,color_pars_vertex:Vf,color_vertex:zf,common:Xf,cube_uv_reflection_fragment:Kf,defaultnormal_vertex:Yf,displacementmap_pars_vertex:jf,displacementmap_vertex:qf,emissivemap_fragment:$f,emissivemap_pars_fragment:Zf,colorspace_fragment:Jf,colorspace_pars_fragment:Qf,envmap_fragment:ep,envmap_common_pars_fragment:np,envmap_pars_fragment:tp,envmap_pars_vertex:ip,envmap_physical_pars_fragment:hp,envmap_vertex:rp,fog_vertex:op,fog_pars_vertex:sp,fog_fragment:ap,fog_pars_fragment:lp,gradientmap_pars_fragment:cp,lightmap_pars_fragment:up,lights_lambert_fragment:dp,lights_lambert_pars_fragment:fp,lights_pars_begin:pp,lights_toon_fragment:_p,lights_toon_pars_fragment:mp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:gp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Ap,lights_fragment_maps:Sp,lights_fragment_end:vp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:xp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:yp,map_fragment:Ip,map_pars_fragment:Op,map_particle_fragment:Pp,map_particle_pars_fragment:Np,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:bp,morphinstance_vertex:wp,morphcolor_vertex:Fp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Up,morphtarget_vertex:Hp,normal_fragment_begin:Gp,normal_fragment_maps:Bp,normal_pars_fragment:Wp,normal_pars_vertex:kp,normal_vertex:Vp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Xp,clearcoat_normal_fragment_maps:Kp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:jp,opaque_fragment:qp,packing:$p,premultiplied_alpha_fragment:Zp,project_vertex:Jp,dithering_fragment:Qp,dithering_pars_fragment:eh,roughnessmap_fragment:nh,roughnessmap_pars_fragment:th,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:oh,shadowmask_pars_fragment:sh,skinbase_vertex:ah,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:uh,specularmap_fragment:dh,specularmap_pars_fragment:fh,tonemapping_fragment:ph,tonemapping_pars_fragment:hh,transmission_fragment:_h,transmission_pars_fragment:mh,uv_pars_fragment:Eh,uv_pars_vertex:Th,uv_vertex:gh,worldpos_vertex:Rh,background_vert:Ah,background_frag:Sh,backgroundCube_vert:vh,backgroundCube_frag:Lh,cube_vert:xh,cube_frag:Mh,depth_vert:yh,depth_frag:Ih,distanceRGBA_vert:Oh,distanceRGBA_frag:Ph,equirect_vert:Nh,equirect_frag:Ch,linedashed_vert:bh,linedashed_frag:wh,meshbasic_vert:Fh,meshbasic_frag:Dh,meshlambert_vert:Uh,meshlambert_frag:Hh,meshmatcap_vert:Gh,meshmatcap_frag:Bh,meshnormal_vert:Wh,meshnormal_frag:kh,meshphong_vert:Vh,meshphong_frag:zh,meshphysical_vert:Xh,meshphysical_frag:Kh,meshtoon_vert:Yh,meshtoon_frag:jh,points_vert:qh,points_frag:$h,shadow_vert:Zh,shadow_frag:Jh,sprite_vert:Qh,sprite_frag:e_},ue={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new rn},alphaMap:{value:null},alphaMapTransform:{value:new rn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new rn}},envmap:{envMap:{value:null},envMapRotation:{value:new rn},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new rn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new rn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new rn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new rn},normalScale:{value:new Un(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new rn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new rn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new rn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new rn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new rn},alphaTest:{value:0},uvTransform:{value:new rn}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new Un(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new rn},alphaMap:{value:null},alphaMapTransform:{value:new rn},alphaTest:{value:0}}},tt={basic:{uniforms:et([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:et([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:et([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:et([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:et([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:et([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:et([ue.points,ue.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:et([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:et([ue.common,ue.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:et([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:et([ue.sprite,ue.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new rn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new rn}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:et([ue.common,ue.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:et([ue.lights,ue.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};tt.physical={uniforms:et([tt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new rn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new rn},clearcoatNormalScale:{value:new Un(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new rn},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new rn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new rn},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new rn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new rn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new rn},transmissionSamplerSize:{value:new Un},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new rn},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new rn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new rn},anisotropyVector:{value:new Un},anisotropyMap:{value:null},anisotropyMapTransform:{value:new rn}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Nr={r:0,b:0,g:0},ti=new Ht,n_=new $e;function t_(e,n,t,i,r,o,s){const a=new xe(0);let l=o===!0?0:1,c,d,u=null,f=0,h=null;function m(g){let T=g.isScene===!0?g.background:null;return T&&T.isTexture&&(T=(g.backgroundBlurriness>0?t:n).get(T)),T}function E(g){let T=!1;const y=m(g);y===null?p(a,l):y&&y.isColor&&(p(y,1),T=!0);const I=e.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,s):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(e.autoClear||T)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(g,T){const y=m(T);y&&(y.isCubeTexture||y.mapping===oo)?(d===void 0&&(d=new mn(new Li(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:$s(tt.backgroundCube.uniforms),vertexShader:tt.backgroundCube.vertexShader,fragmentShader:tt.backgroundCube.fragmentShader,side:at,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,O,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),ti.copy(T.backgroundRotation),ti.x*=-1,ti.y*=-1,ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(n_.makeRotationFromEuler(ti)),d.material.toneMapped=un.getTransfer(y.colorSpace)!==gn,(u!==y||f!==y.version||h!==e.toneMapping)&&(d.material.needsUpdate=!0,u=y,f=y.version,h=e.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new mn(new Ls(2,2),new Wt({name:"BackgroundMaterial",uniforms:$s(tt.background.uniforms),vertexShader:tt.background.vertexShader,fragmentShader:tt.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=un.getTransfer(y.colorSpace)!==gn,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,h=e.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function p(g,T){g.getRGB(Nr,uc(e)),i.buffers.color.setClear(Nr.r,Nr.g,Nr.b,T,s)}function A(){d!==void 0&&(d.geometry.dispose(),d.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(g,T=1){a.set(g),l=T,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,p(a,l)},render:E,addToRenderList:_,dispose:A}}function i_(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(v,P,k,V,K){let ee=!1;const W=u(V,k,P);o!==W&&(o=W,c(o.object)),ee=h(v,V,k,K),ee&&m(v,V,k,K),K!==null&&n.update(K,e.ELEMENT_ARRAY_BUFFER),(ee||s)&&(s=!1,T(v,P,k,V),K!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(K).buffer))}function l(){return e.createVertexArray()}function c(v){return e.bindVertexArray(v)}function d(v){return e.deleteVertexArray(v)}function u(v,P,k){const V=k.wireframe===!0;let K=i[v.id];K===void 0&&(K={},i[v.id]=K);let ee=K[P.id];ee===void 0&&(ee={},K[P.id]=ee);let W=ee[V];return W===void 0&&(W=f(l()),ee[V]=W),W}function f(v){const P=[],k=[],V=[];for(let K=0;K<t;K++)P[K]=0,k[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:V,object:v,attributes:{},index:null}}function h(v,P,k,V){const K=o.attributes,ee=P.attributes;let W=0;const se=k.getAttributes();for(const X in se)if(se[X].location>=0){const Ie=K[X];let De=ee[X];if(De===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(De=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(De=v.instanceColor)),Ie===void 0||Ie.attribute!==De||De&&Ie.data!==De.data)return!0;W++}return o.attributesNum!==W||o.index!==V}function m(v,P,k,V){const K={},ee=P.attributes;let W=0;const se=k.getAttributes();for(const X in se)if(se[X].location>=0){let Ie=ee[X];Ie===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(Ie=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(Ie=v.instanceColor));const De={};De.attribute=Ie,Ie&&Ie.data&&(De.data=Ie.data),K[X]=De,W++}o.attributes=K,o.attributesNum=W,o.index=V}function E(){const v=o.newAttributes;for(let P=0,k=v.length;P<k;P++)v[P]=0}function _(v){p(v,0)}function p(v,P){const k=o.newAttributes,V=o.enabledAttributes,K=o.attributeDivisors;k[v]=1,V[v]===0&&(e.enableVertexAttribArray(v),V[v]=1),K[v]!==P&&(e.vertexAttribDivisor(v,P),K[v]=P)}function A(){const v=o.newAttributes,P=o.enabledAttributes;for(let k=0,V=P.length;k<V;k++)P[k]!==v[k]&&(e.disableVertexAttribArray(k),P[k]=0)}function g(v,P,k,V,K,ee,W){W===!0?e.vertexAttribIPointer(v,P,k,K,ee):e.vertexAttribPointer(v,P,k,V,K,ee)}function T(v,P,k,V){E();const K=V.attributes,ee=k.getAttributes(),W=P.defaultAttributeValues;for(const se in ee){const X=ee[se];if(X.location>=0){let _e=K[se];if(_e===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor)),_e!==void 0){const Ie=_e.normalized,De=_e.itemSize,We=n.get(_e);if(We===void 0)continue;const ce=We.buffer,D=We.type,ie=We.bytesPerElement,me=D===e.INT||D===e.UNSIGNED_INT||_e.gpuType===dc;if(_e.isInterleavedBufferAttribute){const oe=_e.data,ye=oe.stride,Ce=_e.offset;if(oe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<X.locationSize;Ue++)p(X.location+Ue,oe.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ue=0;Ue<X.locationSize;Ue++)_(X.location+Ue);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let Ue=0;Ue<X.locationSize;Ue++)g(X.location+Ue,De/X.locationSize,D,Ie,ye*ie,(Ce+De/X.locationSize*Ue)*ie,me)}else{if(_e.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)p(X.location+oe,_e.meshPerAttribute);v.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let oe=0;oe<X.locationSize;oe++)_(X.location+oe);e.bindBuffer(e.ARRAY_BUFFER,ce);for(let oe=0;oe<X.locationSize;oe++)g(X.location+oe,De/X.locationSize,D,Ie,De*ie,De/X.locationSize*oe*ie,me)}}else if(W!==void 0){const Ie=W[se];if(Ie!==void 0)switch(Ie.length){case 2:e.vertexAttrib2fv(X.location,Ie);break;case 3:e.vertexAttrib3fv(X.location,Ie);break;case 4:e.vertexAttrib4fv(X.location,Ie);break;default:e.vertexAttrib1fv(X.location,Ie)}}}}A()}function y(){b();for(const v in i){const P=i[v];for(const k in P){const V=P[k];for(const K in V)d(V[K].object),delete V[K];delete P[k]}delete i[v]}}function I(v){if(i[v.id]===void 0)return;const P=i[v.id];for(const k in P){const V=P[k];for(const K in V)d(V[K].object),delete V[K];delete P[k]}delete i[v.id]}function O(v){for(const P in i){const k=i[P];if(k[v.id]===void 0)continue;const V=k[v.id];for(const K in V)d(V[K].object),delete V[K];delete k[v.id]}}function b(){L(),s=!0,o!==r&&(o=r,c(o.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:L,dispose:y,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:_,disableUnusedAttributes:A}}function r_(e,n,t){let i;function r(c){i=c}function o(c,d){e.drawArrays(i,c,d),t.update(d,i,1)}function s(c,d,u){u!==0&&(e.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function a(c,d,u){if(u===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let h=0;for(let m=0;m<u;m++)h+=d[m];t.update(h,i,1)}function l(c,d,u,f){if(u===0)return;const h=n.get("WEBGL_multi_draw");if(h===null)for(let m=0;m<c.length;m++)s(c[m],d[m],f[m]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,u);let m=0;for(let E=0;E<u;E++)m+=d[E]*f[E];t.update(m,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function o_(e,n,t,i){let r;function o(){if(r!==void 0)return r;if(n.has("EXT_texture_filter_anisotropic")===!0){const O=n.get("EXT_texture_filter_anisotropic");r=e.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(O){return!(O!==Gt&&i.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(O){const b=O===ro&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(O!==Ai&&i.convert(O)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==di&&!b)}function l(O){if(O==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),h=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),T=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),y=m>0,I=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:m,maxTextureSize:E,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:A,maxVaryings:g,maxFragmentUniforms:T,vertexTextures:y,maxSamples:I}}function s_(e){const n=this;let t=null,i=0,r=!1,o=!1;const s=new Wu,a=new rn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||i!==0||r;return r=f,i=u.length,h},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const m=u.clippingPlanes,E=u.clipIntersection,_=u.clipShadows,p=e.get(u);if(!r||m===null||m.length===0||o&&!_)o?d(null):c();else{const A=o?0:i,g=A*4;let T=p.clippingState||null;l.value=T,T=d(m,f,g,h);for(let y=0;y!==g;++y)T[y]=t[y];p.clippingState=T,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),n.numPlanes=i,n.numIntersection=0}function d(u,f,h,m){const E=u!==null?u.length:0;let _=null;if(E!==0){if(_=l.value,m!==!0||_===null){const p=h+E*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(_===null||_.length<p)&&(_=new Float32Array(p));for(let g=0,T=h;g!==E;++g,T+=4)s.copy(u[g]).applyMatrix4(A,a),s.normal.toArray(_,T),_[T+3]=s.constant}l.value=_,l.needsUpdate=!0}return n.numPlanes=E,n.numIntersection=0,_}}function a_(e){let n=new WeakMap;function t(s,a){return a===Jr?s.mapping=fr:a===Zo&&(s.mapping=Xi),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Jr||a===Zo)if(n.has(s)){const l=n.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new _d(l.height);return c.fromEquirectangularTexture(e,s),n.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=n.get(a);l!==void 0&&(n.delete(a),l.dispose())}function o(){n=new WeakMap}return{get:i,dispose:o}}const bi=4,Na=[.125,.215,.35,.446,.526,.582],ci=20,Oo=new Ms,Ca=new xe;let Po=null,No=0,Co=0,bo=!1;const li=(1+Math.sqrt(5))/2,yi=1/li,ba=[new le(-li,yi,0),new le(li,yi,0),new le(-yi,0,li),new le(yi,0,li),new le(0,li,-yi),new le(0,li,yi),new le(-1,1,-1),new le(1,1,-1),new le(-1,1,1),new le(1,1,1)];class wa{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,i=.1,r=100){Po=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(n,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Da(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Po,No,Co),this._renderer.xr.enabled=bo,n.scissorTest=!1,Cr(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===fr||n.mapping===Xi?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Po=this._renderer.getRenderTarget(),No=this._renderer.getActiveCubeFace(),Co=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(n,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ro,format:Gt,colorSpace:ct,depthBuffer:!1},r=Fa(n,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fa(n,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l_(o)),this._blurMaterial=c_(o,n,t)}return r}_compileMaterial(n){const t=new mn(this._lodPlanes[0],n);this._renderer.compile(t,Oo)}_sceneToCubeUV(n,t,i,r){const a=new $t(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ca),d.toneMapping=qt,d.autoClear=!1;const h=new qn({name:"PMREM.Background",side:at,depthWrite:!1,depthTest:!1}),m=new mn(new Li,h);let E=!1;const _=n.background;_?_.isColor&&(h.color.copy(_),n.background=null,E=!0):(h.color.copy(Ca),E=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):A===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const g=this._cubeSize;Cr(r,A*g,p>2?g:0,g,g),d.setRenderTarget(r),E&&d.render(m,a),d.render(n,a)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=f,d.autoClear=u,n.background=_}_textureToCubeUV(n,t){const i=this._renderer,r=n.mapping===fr||n.mapping===Xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Da());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new mn(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=n;const l=this._cubeSize;Cr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Oo)}_applyPMREM(n){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=ba[(r-o-1)%ba.length];this._blur(n,o-1,o,s,a)}t.autoClear=i}_blur(n,t,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(n,s,t,i,r,"latitudinal",o),this._halfBlur(s,n,i,i,r,"longitudinal",o)}_halfBlur(n,t,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new mn(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,m=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*ci-1),E=o/m,_=isFinite(o)?1+Math.floor(d*E):ci;_>ci&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ci}`);const p=[];let A=0;for(let O=0;O<ci;++O){const b=O/E,L=Math.exp(-b*b/2);p.push(L),O===0?A+=L:O<_&&(A+=2*L)}for(let O=0;O<p.length;O++)p[O]=p[O]/A;f.envMap.value=n.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=m,f.mipInt.value=g-i;const T=this._sizeLods[r],y=3*T*(r>g-bi?r-g+bi:0),I=4*(this._cubeSize-T);Cr(t,y,I,3*T,2*T),l.setRenderTarget(t),l.render(u,Oo)}}function l_(e){const n=[],t=[],i=[];let r=e;const o=e-bi+1+Na.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);t.push(a);let l=1/a;s>e-bi?l=Na[s-e+bi-1]:s===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,m=6,E=3,_=2,p=1,A=new Float32Array(E*m*h),g=new Float32Array(_*m*h),T=new Float32Array(p*m*h);for(let I=0;I<h;I++){const O=I%3*2/3-1,b=I>2?0:-1,L=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];A.set(L,E*m*I),g.set(f,_*m*I);const v=[I,I,I,I,I,I];T.set(v,p*m*I)}const y=new $n;y.setAttribute("position",new lt(A,E)),y.setAttribute("uv",new lt(g,_)),y.setAttribute("faceIndex",new lt(T,p)),n.push(y),r>bi&&r--}return{lodPlanes:n,sizeLods:t,sigmas:i}}function Fa(e,n,t){const i=new Ri(e,n,t);return i.texture.mapping=oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cr(e,n,t,i,r){e.viewport.set(n,t,i,r),e.scissor.set(n,t,i,r)}function c_(e,n,t){const i=new Float32Array(ci),r=new le(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:ci,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Da(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cs(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ua(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Cs(){return`

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
	`}function u_(e){let n=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jr||l===Zo,d=l===fr||l===Xi;if(c||d){let u=n.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wa(e)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,n.set(a,u),u.texture;if(u!==void 0)return u.texture;{const h=a.image;return c&&h&&h.height>0||d&&h&&r(h)?(t===null&&(t=new wa(e)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,n.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=n.get(l);c!==void 0&&(n.delete(l),c.dispose())}function s(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function d_(e){const n={};function t(i){if(n[i]!==void 0)return n[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return n[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Pi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function f_(e,n,t,i){const r={},o=new WeakMap;function s(u){const f=u.target;f.index!==null&&n.remove(f.index);for(const m in f.attributes)n.remove(f.attributes[m]);f.removeEventListener("dispose",s),delete r[f.id];const h=o.get(f);h&&(n.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const h in f)n.update(f[h],e.ARRAY_BUFFER)}function c(u){const f=[],h=u.index,m=u.attributes.position;let E=0;if(h!==null){const A=h.array;E=h.version;for(let g=0,T=A.length;g<T;g+=3){const y=A[g+0],I=A[g+1],O=A[g+2];f.push(y,I,I,O,O,y)}}else if(m!==void 0){const A=m.array;E=m.version;for(let g=0,T=A.length/3-1;g<T;g+=3){const y=g+0,I=g+1,O=g+2;f.push(y,I,I,O,O,y)}}else return;const _=new(Nd(f)?Cd:xs)(f,1);_.version=E;const p=o.get(u);p&&n.remove(p),o.set(u,_)}function d(u){const f=o.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:d}}function p_(e,n,t){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){e.drawElements(i,h,o,f*s),t.update(h,i,1)}function c(f,h,m){m!==0&&(e.drawElementsInstanced(i,h,o,f*s,m),t.update(h,i,m))}function d(f,h,m){if(m===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,m);let _=0;for(let p=0;p<m;p++)_+=h[p];t.update(_,i,1)}function u(f,h,m,E){if(m===0)return;const _=n.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/s,h[p],E[p]);else{_.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,E,0,m);let p=0;for(let A=0;A<m;A++)p+=h[A]*E[A];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function h_(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(t.calls++,s){case e.TRIANGLES:t.triangles+=a*(o/3);break;case e.LINES:t.lines+=a*(o/2);break;case e.LINE_STRIP:t.lines+=a*(o-1);break;case e.LINE_LOOP:t.lines+=a*o;break;case e.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:r,update:i}}function __(e,n,t){const i=new WeakMap,r=new vn;function o(s,a,l){const c=s.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let h=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",h)};f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let T=0;m===!0&&(T=1),E===!0&&(T=2),_===!0&&(T=3);let y=a.attributes.position.count*T,I=1;y>n.maxTextureSize&&(I=Math.ceil(y/n.maxTextureSize),y=n.maxTextureSize);const O=new Float32Array(y*I*4*u),b=new fc(O,y,I,u);b.type=di,b.needsUpdate=!0;const L=T*4;for(let v=0;v<u;v++){const P=p[v],k=A[v],V=g[v],K=y*I*4*v;for(let ee=0;ee<P.count;ee++){const W=ee*L;m===!0&&(r.fromBufferAttribute(P,ee),O[K+W+0]=r.x,O[K+W+1]=r.y,O[K+W+2]=r.z,O[K+W+3]=0),E===!0&&(r.fromBufferAttribute(k,ee),O[K+W+4]=r.x,O[K+W+5]=r.y,O[K+W+6]=r.z,O[K+W+7]=0),_===!0&&(r.fromBufferAttribute(V,ee),O[K+W+8]=r.x,O[K+W+9]=r.y,O[K+W+10]=r.z,O[K+W+11]=V.itemSize===4?r.w:1)}}f={count:u,texture:b,size:new Un(y,I)},i.set(a,f),a.addEventListener("dispose",h)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,t);else{let h=0;for(let E=0;E<c.length;E++)h+=c[E];const m=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(e,"morphTargetBaseInfluence",m),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:o}}function m_(e,n,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,d=l.geometry,u=n.get(l,d);if(r.get(u)!==c&&(n.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function s(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const Lc=new dr,Ha=new ec(1,1),xc=new fc,Mc=new Xd,yc=new Kd,Ga=[],Ba=[],Wa=new Float32Array(16),ka=new Float32Array(9),Va=new Float32Array(4);function ji(e,n,t){const i=e[0];if(i<=0||i>0)return e;const r=n*t;let o=Ga[r];if(o===void 0&&(o=new Float32Array(r),Ga[r]=o),n!==0){i.toArray(o,0);for(let s=1,a=0;s!==n;++s)a+=t,e[s].toArray(o,a)}return o}function wn(e,n){if(e.length!==n.length)return!1;for(let t=0,i=e.length;t<i;t++)if(e[t]!==n[t])return!1;return!0}function Fn(e,n){for(let t=0,i=n.length;t<i;t++)e[t]=n[t]}function ho(e,n){let t=Ba[n];t===void 0&&(t=new Int32Array(n),Ba[n]=t);for(let i=0;i!==n;++i)t[i]=e.allocateTextureUnit();return t}function E_(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function T_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(wn(t,n))return;e.uniform2fv(this.addr,n),Fn(t,n)}}function g_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(wn(t,n))return;e.uniform3fv(this.addr,n),Fn(t,n)}}function R_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(wn(t,n))return;e.uniform4fv(this.addr,n),Fn(t,n)}}function A_(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(wn(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),Fn(t,n)}else{if(wn(t,i))return;Va.set(i),e.uniformMatrix2fv(this.addr,!1,Va),Fn(t,i)}}function S_(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(wn(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),Fn(t,n)}else{if(wn(t,i))return;ka.set(i),e.uniformMatrix3fv(this.addr,!1,ka),Fn(t,i)}}function v_(e,n){const t=this.cache,i=n.elements;if(i===void 0){if(wn(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),Fn(t,n)}else{if(wn(t,i))return;Wa.set(i),e.uniformMatrix4fv(this.addr,!1,Wa),Fn(t,i)}}function L_(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function x_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(wn(t,n))return;e.uniform2iv(this.addr,n),Fn(t,n)}}function M_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(wn(t,n))return;e.uniform3iv(this.addr,n),Fn(t,n)}}function y_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(wn(t,n))return;e.uniform4iv(this.addr,n),Fn(t,n)}}function I_(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function O_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(wn(t,n))return;e.uniform2uiv(this.addr,n),Fn(t,n)}}function P_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(wn(t,n))return;e.uniform3uiv(this.addr,n),Fn(t,n)}}function N_(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(wn(t,n))return;e.uniform4uiv(this.addr,n),Fn(t,n)}}function C_(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let o;this.type===e.SAMPLER_2D_SHADOW?(Ha.compareFunction=rc,o=Ha):o=Lc,t.setTexture2D(n||o,r)}function b_(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(n||Mc,r)}function w_(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(n||yc,r)}function F_(e,n,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(n||xc,r)}function D_(e){switch(e){case 5126:return E_;case 35664:return T_;case 35665:return g_;case 35666:return R_;case 35674:return A_;case 35675:return S_;case 35676:return v_;case 5124:case 35670:return L_;case 35667:case 35671:return x_;case 35668:case 35672:return M_;case 35669:case 35673:return y_;case 5125:return I_;case 36294:return O_;case 36295:return P_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return b_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return F_}}function U_(e,n){e.uniform1fv(this.addr,n)}function H_(e,n){const t=ji(n,this.size,2);e.uniform2fv(this.addr,t)}function G_(e,n){const t=ji(n,this.size,3);e.uniform3fv(this.addr,t)}function B_(e,n){const t=ji(n,this.size,4);e.uniform4fv(this.addr,t)}function W_(e,n){const t=ji(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function k_(e,n){const t=ji(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function V_(e,n){const t=ji(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function z_(e,n){e.uniform1iv(this.addr,n)}function X_(e,n){e.uniform2iv(this.addr,n)}function K_(e,n){e.uniform3iv(this.addr,n)}function Y_(e,n){e.uniform4iv(this.addr,n)}function j_(e,n){e.uniform1uiv(this.addr,n)}function q_(e,n){e.uniform2uiv(this.addr,n)}function $_(e,n){e.uniform3uiv(this.addr,n)}function Z_(e,n){e.uniform4uiv(this.addr,n)}function J_(e,n,t){const i=this.cache,r=n.length,o=ho(t,r);wn(i,o)||(e.uniform1iv(this.addr,o),Fn(i,o));for(let s=0;s!==r;++s)t.setTexture2D(n[s]||Lc,o[s])}function Q_(e,n,t){const i=this.cache,r=n.length,o=ho(t,r);wn(i,o)||(e.uniform1iv(this.addr,o),Fn(i,o));for(let s=0;s!==r;++s)t.setTexture3D(n[s]||Mc,o[s])}function em(e,n,t){const i=this.cache,r=n.length,o=ho(t,r);wn(i,o)||(e.uniform1iv(this.addr,o),Fn(i,o));for(let s=0;s!==r;++s)t.setTextureCube(n[s]||yc,o[s])}function nm(e,n,t){const i=this.cache,r=n.length,o=ho(t,r);wn(i,o)||(e.uniform1iv(this.addr,o),Fn(i,o));for(let s=0;s!==r;++s)t.setTexture2DArray(n[s]||xc,o[s])}function tm(e){switch(e){case 5126:return U_;case 35664:return H_;case 35665:return G_;case 35666:return B_;case 35674:return W_;case 35675:return k_;case 35676:return V_;case 5124:case 35670:return z_;case 35667:case 35671:return X_;case 35668:case 35672:return K_;case 35669:case 35673:return Y_;case 5125:return j_;case 36294:return q_;case 36295:return $_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}class im{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.setValue=D_(t.type)}}class rm{constructor(n,t,i){this.id=n,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tm(t.type)}}class om{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(n,t[a.id],i)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function za(e,n){e.seq.push(n),e.map[n.id]=n}function sm(e,n,t){const i=e.name,r=i.length;for(wo.lastIndex=0;;){const o=wo.exec(i),s=wo.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){za(t,c===void 0?new im(a,e,n):new rm(a,e,n));break}else{let u=t.map[a];u===void 0&&(u=new om(a),za(t,u)),t=u}}}class Kr{constructor(n,t){this.seq=[],this.map={};const i=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=n.getActiveUniform(t,r),s=n.getUniformLocation(t,o.name);sm(o,s,this)}}setValue(n,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(n,i,r)}setOptional(n,t,i){const r=t[i];r!==void 0&&this.setValue(n,i,r)}static upload(n,t,i,r){for(let o=0,s=t.length;o!==s;++o){const a=t[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(n,l.value,r)}}static seqWithValue(n,t){const i=[];for(let r=0,o=n.length;r!==o;++r){const s=n[r];s.id in t&&i.push(s)}return i}}function Xa(e,n,t){const i=e.createShader(n);return e.shaderSource(i,t),e.compileShader(i),i}const am=37297;let lm=0;function cm(e,n){const t=e.split(`
`),i=[],r=Math.max(n-6,0),o=Math.min(n+6,t.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===n?">":" "} ${a}: ${t[s]}`)}return i.join(`
`)}const Ka=new rn;function um(e){un._getMatrix(Ka,un.workingColorSpace,e);const n=`mat3( ${Ka.elements.map(t=>t.toFixed(4))} )`;switch(un.getTransfer(e)){case pc:return[n,"LinearTransferOETF"];case gn:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Ya(e,n,t){const i=e.getShaderParameter(n,e.COMPILE_STATUS),r=e.getShaderInfoLog(n).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+cm(e.getShaderSource(n),s)}else return r}function dm(e,n){const t=um(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fm(e,n){let t;switch(n){case kd:t="Linear";break;case Wd:t="Reinhard";break;case Bd:t="Cineon";break;case Gd:t="ACESFilmic";break;case Hd:t="AgX";break;case Ud:t="Neutral";break;case Dd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const br=new le;function pm(){un.getLuminanceCoefficients(br);const e=br.x.toFixed(4),n=br.y.toFixed(4),t=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hm(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function _m(e){const n=[];for(const t in e){const i=e[t];i!==!1&&n.push("#define "+t+" "+i)}return n.join(`
`)}function mm(e,n){const t={},i=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=e.getActiveAttrib(n,r),s=o.name;let a=1;o.type===e.FLOAT_MAT2&&(a=2),o.type===e.FLOAT_MAT3&&(a=3),o.type===e.FLOAT_MAT4&&(a=4),t[s]={type:o.type,location:e.getAttribLocation(n,s),locationSize:a}}return t}function or(e){return e!==""}function ja(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function qa(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const Em=/^[ \t]*#include +<([\w\d./]+)>/gm;function cs(e){return e.replace(Em,gm)}const Tm=new Map;function gm(e,n){let t=Ke[n];if(t===void 0){const i=Tm.get(n);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,i);else throw new Error("Can not resolve #include <"+n+">")}return cs(t)}const Rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(e){return e.replace(Rm,Am)}function Am(e,n,t,i){let r="";for(let o=parseInt(n);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Za(e){let n=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?n+=`
#define HIGH_PRECISION`:e.precision==="mediump"?n+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(n+=`
#define LOW_PRECISION`),n}function Sm(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===nc?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===Vd?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Dt&&(n="SHADOWMAP_TYPE_VSM"),n}function vm(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case fr:case Xi:n="ENVMAP_TYPE_CUBE";break;case oo:n="ENVMAP_TYPE_CUBE_UV";break}return n}function Lm(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Xi:n="ENVMAP_MODE_REFRACTION";break}return n}function xm(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case qd:n="ENVMAP_BLENDING_MULTIPLY";break;case jd:n="ENVMAP_BLENDING_MIX";break;case Yd:n="ENVMAP_BLENDING_ADD";break}return n}function Mm(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,i=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ym(e,n,t,i){const r=e.getContext(),o=t.defines;let s=t.vertexShader,a=t.fragmentShader;const l=Sm(t),c=vm(t),d=Lm(t),u=xm(t),f=Mm(t),h=hm(t),m=_m(o),E=r.createProgram();let _,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(or).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(or).join(`
`),p.length>0&&(p+=`
`)):(_=[Za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),p=[Za(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qt?"#define TONE_MAPPING":"",t.toneMapping!==qt?Ke.tonemapping_pars_fragment:"",t.toneMapping!==qt?fm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,dm("linearToOutputTexel",t.outputColorSpace),pm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),s=cs(s),s=ja(s,t),s=qa(s,t),a=cs(a),a=ja(a,t),a=qa(a,t),s=$a(s),a=$a(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Ia?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ia?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const g=A+_+s,T=A+p+a,y=Xa(r,r.VERTEX_SHADER,g),I=Xa(r,r.FRAGMENT_SHADER,T);r.attachShader(E,y),r.attachShader(E,I),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function O(P){if(e.debug.checkShaderErrors){const k=r.getProgramInfoLog(E).trim(),V=r.getShaderInfoLog(y).trim(),K=r.getShaderInfoLog(I).trim();let ee=!0,W=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(ee=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,E,y,I);else{const se=Ya(r,y,"vertex"),X=Ya(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+se+`
`+X)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||K==="")&&(W=!1);W&&(P.diagnostics={runnable:ee,programLog:k,vertexShader:{log:V,prefix:_},fragmentShader:{log:K,prefix:p}})}r.deleteShader(y),r.deleteShader(I),b=new Kr(r,E),L=mm(r,E)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(E,am)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lm++,this.cacheKey=n,this.usedTimes=1,this.program=E,this.vertexShader=y,this.fragmentShader=I,this}let Im=0;class Om{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,i=n.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(n);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let i=t.get(n);return i===void 0&&(i=new Set,t.set(n,i)),i}_getShaderStage(n){const t=this.shaderCache;let i=t.get(n);return i===void 0&&(i=new Pm(n),t.set(n,i)),i}}class Pm{constructor(n){this.id=Im++,this.code=n,this.usedTimes=0}}function Nm(e,n,t,i,r,o,s){const a=new bd,l=new Om,c=new Set,d=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(L){return c.add(L),L===0?"uv":`uv${L}`}function _(L,v,P,k,V){const K=k.fog,ee=V.geometry,W=L.isMeshStandardMaterial?k.environment:null,se=(L.isMeshStandardMaterial?t:n).get(L.envMap||W),X=se&&se.mapping===oo?se.image.height:null,_e=m[L.type];L.precision!==null&&(h=r.getMaxPrecision(L.precision),h!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",h,"instead."));const Ie=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,De=Ie!==void 0?Ie.length:0;let We=0;ee.morphAttributes.position!==void 0&&(We=1),ee.morphAttributes.normal!==void 0&&(We=2),ee.morphAttributes.color!==void 0&&(We=3);let ce,D,ie,me;if(_e){const dn=tt[_e];ce=dn.vertexShader,D=dn.fragmentShader}else ce=L.vertexShader,D=L.fragmentShader,l.update(L),ie=l.getVertexShaderID(L),me=l.getFragmentShaderID(L);const oe=e.getRenderTarget(),ye=e.state.buffers.depth.getReversed(),Ce=V.isInstancedMesh===!0,Ue=V.isBatchedMesh===!0,on=!!L.map,Ye=!!L.matcap,pn=!!se,N=!!L.aoMap,ut=!!L.lightMap,Ze=!!L.bumpMap,Je=!!L.normalMap,Ne=!!L.displacementMap,En=!!L.emissiveMap,Pe=!!L.metalnessMap,x=!!L.roughnessMap,R=L.anisotropy>0,H=L.clearcoat>0,q=L.dispersion>0,Q=L.iridescence>0,Y=L.sheen>0,Oe=L.transmission>0,pe=R&&!!L.anisotropyMap,Re=H&&!!L.clearcoatMap,nn=H&&!!L.clearcoatNormalMap,ae=H&&!!L.clearcoatRoughnessMap,Ae=Q&&!!L.iridescenceMap,Fe=Q&&!!L.iridescenceThicknessMap,He=Y&&!!L.sheenColorMap,Se=Y&&!!L.sheenRoughnessMap,Qe=!!L.specularMap,Xe=!!L.specularColorMap,_n=!!L.specularIntensityMap,C=Oe&&!!L.transmissionMap,de=Oe&&!!L.thicknessMap,z=!!L.gradientMap,$=!!L.alphaMap,Ee=L.alphaTest>0,he=!!L.alphaHash,Ve=!!L.extensions;let xn=qt;L.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(xn=e.toneMapping);const kn={shaderID:_e,shaderType:L.type,shaderName:L.name,vertexShader:ce,fragmentShader:D,defines:L.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:h,batching:Ue,batchingColor:Ue&&V._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&V.instanceColor!==null,instancingMorph:Ce&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:oe===null?e.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ct,alphaToCoverage:!!L.alphaToCoverage,map:on,matcap:Ye,envMap:pn,envMapMode:pn&&se.mapping,envMapCubeUVHeight:X,aoMap:N,lightMap:ut,bumpMap:Ze,normalMap:Je,displacementMap:f&&Ne,emissiveMap:En,normalMapObjectSpace:Je&&L.normalMapType===md,normalMapTangentSpace:Je&&L.normalMapType===Ed,metalnessMap:Pe,roughnessMap:x,anisotropy:R,anisotropyMap:pe,clearcoat:H,clearcoatMap:Re,clearcoatNormalMap:nn,clearcoatRoughnessMap:ae,dispersion:q,iridescence:Q,iridescenceMap:Ae,iridescenceThicknessMap:Fe,sheen:Y,sheenColorMap:He,sheenRoughnessMap:Se,specularMap:Qe,specularColorMap:Xe,specularIntensityMap:_n,transmission:Oe,transmissionMap:C,thicknessMap:de,gradientMap:z,opaque:L.transparent===!1&&L.blending===zr&&L.alphaToCoverage===!1,alphaMap:$,alphaTest:Ee,alphaHash:he,combine:L.combine,mapUv:on&&E(L.map.channel),aoMapUv:N&&E(L.aoMap.channel),lightMapUv:ut&&E(L.lightMap.channel),bumpMapUv:Ze&&E(L.bumpMap.channel),normalMapUv:Je&&E(L.normalMap.channel),displacementMapUv:Ne&&E(L.displacementMap.channel),emissiveMapUv:En&&E(L.emissiveMap.channel),metalnessMapUv:Pe&&E(L.metalnessMap.channel),roughnessMapUv:x&&E(L.roughnessMap.channel),anisotropyMapUv:pe&&E(L.anisotropyMap.channel),clearcoatMapUv:Re&&E(L.clearcoatMap.channel),clearcoatNormalMapUv:nn&&E(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&E(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&E(L.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&E(L.iridescenceThicknessMap.channel),sheenColorMapUv:He&&E(L.sheenColorMap.channel),sheenRoughnessMapUv:Se&&E(L.sheenRoughnessMap.channel),specularMapUv:Qe&&E(L.specularMap.channel),specularColorMapUv:Xe&&E(L.specularColorMap.channel),specularIntensityMapUv:_n&&E(L.specularIntensityMap.channel),transmissionMapUv:C&&E(L.transmissionMap.channel),thicknessMapUv:de&&E(L.thicknessMap.channel),alphaMapUv:$&&E(L.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Je||R),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ee.attributes.uv&&(on||$),fog:!!K,useFog:L.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ye,skinning:V.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:We,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:L.dithering,shadowMapEnabled:e.shadowMap.enabled&&P.length>0,shadowMapType:e.shadowMap.type,toneMapping:xn,decodeVideoTexture:on&&L.map.isVideoTexture===!0&&un.getTransfer(L.map.colorSpace)===gn,decodeVideoTextureEmissive:En&&L.emissiveMap.isVideoTexture===!0&&un.getTransfer(L.emissiveMap.colorSpace)===gn,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===yt,flipSided:L.side===at,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Ve&&L.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&L.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return kn.vertexUv1s=c.has(1),kn.vertexUv2s=c.has(2),kn.vertexUv3s=c.has(3),c.clear(),kn}function p(L){const v=[];if(L.shaderID?v.push(L.shaderID):(v.push(L.customVertexShaderID),v.push(L.customFragmentShaderID)),L.defines!==void 0)for(const P in L.defines)v.push(P),v.push(L.defines[P]);return L.isRawShaderMaterial===!1&&(A(v,L),g(v,L),v.push(e.outputColorSpace)),v.push(L.customProgramCacheKey),v.join()}function A(L,v){L.push(v.precision),L.push(v.outputColorSpace),L.push(v.envMapMode),L.push(v.envMapCubeUVHeight),L.push(v.mapUv),L.push(v.alphaMapUv),L.push(v.lightMapUv),L.push(v.aoMapUv),L.push(v.bumpMapUv),L.push(v.normalMapUv),L.push(v.displacementMapUv),L.push(v.emissiveMapUv),L.push(v.metalnessMapUv),L.push(v.roughnessMapUv),L.push(v.anisotropyMapUv),L.push(v.clearcoatMapUv),L.push(v.clearcoatNormalMapUv),L.push(v.clearcoatRoughnessMapUv),L.push(v.iridescenceMapUv),L.push(v.iridescenceThicknessMapUv),L.push(v.sheenColorMapUv),L.push(v.sheenRoughnessMapUv),L.push(v.specularMapUv),L.push(v.specularColorMapUv),L.push(v.specularIntensityMapUv),L.push(v.transmissionMapUv),L.push(v.thicknessMapUv),L.push(v.combine),L.push(v.fogExp2),L.push(v.sizeAttenuation),L.push(v.morphTargetsCount),L.push(v.morphAttributeCount),L.push(v.numDirLights),L.push(v.numPointLights),L.push(v.numSpotLights),L.push(v.numSpotLightMaps),L.push(v.numHemiLights),L.push(v.numRectAreaLights),L.push(v.numDirLightShadows),L.push(v.numPointLightShadows),L.push(v.numSpotLightShadows),L.push(v.numSpotLightShadowsWithMaps),L.push(v.numLightProbes),L.push(v.shadowMapType),L.push(v.toneMapping),L.push(v.numClippingPlanes),L.push(v.numClipIntersection),L.push(v.depthPacking)}function g(L,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),L.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),L.push(a.mask)}function T(L){const v=m[L.type];let P;if(v){const k=tt[v];P=so.clone(k.uniforms)}else P=L.uniforms;return P}function y(L,v){let P;for(let k=0,V=d.length;k<V;k++){const K=d[k];if(K.cacheKey===v){P=K,++P.usedTimes;break}}return P===void 0&&(P=new ym(e,v,L,o),d.push(P)),P}function I(L){if(--L.usedTimes===0){const v=d.indexOf(L);d[v]=d[d.length-1],d.pop(),L.destroy()}}function O(L){l.remove(L)}function b(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:I,releaseShaderCache:O,programs:d,dispose:b}}function Cm(){let e=new WeakMap;function n(s){return e.has(s)}function t(s){let a=e.get(s);return a===void 0&&(a={},e.set(s,a)),a}function i(s){e.delete(s)}function r(s,a,l){e.get(s)[a]=l}function o(){e=new WeakMap}return{has:n,get:t,remove:i,update:r,dispose:o}}function bm(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Ja(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function Qa(){const e=[];let n=0;const t=[],i=[],r=[];function o(){n=0,t.length=0,i.length=0,r.length=0}function s(u,f,h,m,E,_){let p=e[n];return p===void 0?(p={id:u.id,object:u,geometry:f,material:h,groupOrder:m,renderOrder:u.renderOrder,z:E,group:_},e[n]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=h,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=E,p.group=_),n++,p}function a(u,f,h,m,E,_){const p=s(u,f,h,m,E,_);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(u,f,h,m,E,_){const p=s(u,f,h,m,E,_);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||bm),i.length>1&&i.sort(f||Ja),r.length>1&&r.sort(f||Ja)}function d(){for(let u=n,f=e.length;u<f;u++){const h=e[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:d,sort:c}}function wm(){let e=new WeakMap;function n(i,r){const o=e.get(i);let s;return o===void 0?(s=new Qa,e.set(i,[s])):r>=o.length?(s=new Qa,o.push(s)):s=o[r],s}function t(){e=new WeakMap}return{get:n,dispose:t}}function Fm(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new le,color:new xe};break;case"SpotLight":t={position:new le,direction:new le,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new le,halfWidth:new le,halfHeight:new le};break}return e[n.id]=t,t}}}function Dm(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Un};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Un};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Un,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let Um=0;function Hm(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function Gm(e){const n=new Fm,t=Dm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new le);const r=new le,o=new $e,s=new $e;function a(c){let d=0,u=0,f=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let h=0,m=0,E=0,_=0,p=0,A=0,g=0,T=0,y=0,I=0,O=0;c.sort(Hm);for(let L=0,v=c.length;L<v;L++){const P=c[L],k=P.color,V=P.intensity,K=P.distance,ee=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=k.r*V,u+=k.g*V,f+=k.b*V;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],V);O++}else if(P.isDirectionalLight){const W=n.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const se=P.shadow,X=t.get(P);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.directionalShadow[h]=X,i.directionalShadowMap[h]=ee,i.directionalShadowMatrix[h]=P.shadow.matrix,A++}i.directional[h]=W,h++}else if(P.isSpotLight){const W=n.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(k).multiplyScalar(V),W.distance=K,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[E]=W;const se=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,se.updateMatrices(P),P.castShadow&&I++),i.spotLightMatrix[E]=se.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,i.spotShadow[E]=X,i.spotShadowMap[E]=ee,T++}E++}else if(P.isRectAreaLight){const W=n.get(P);W.color.copy(k).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[_]=W,_++}else if(P.isPointLight){const W=n.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const se=P.shadow,X=t.get(P);X.shadowIntensity=se.intensity,X.shadowBias=se.bias,X.shadowNormalBias=se.normalBias,X.shadowRadius=se.radius,X.shadowMapSize=se.mapSize,X.shadowCameraNear=se.camera.near,X.shadowCameraFar=se.camera.far,i.pointShadow[m]=X,i.pointShadowMap[m]=ee,i.pointShadowMatrix[m]=P.shadow.matrix,g++}i.point[m]=W,m++}else if(P.isHemisphereLight){const W=n.get(P);W.skyColor.copy(P.color).multiplyScalar(V),W.groundColor.copy(P.groundColor).multiplyScalar(V),i.hemi[p]=W,p++}}_>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=f;const b=i.hash;(b.directionalLength!==h||b.pointLength!==m||b.spotLength!==E||b.rectAreaLength!==_||b.hemiLength!==p||b.numDirectionalShadows!==A||b.numPointShadows!==g||b.numSpotShadows!==T||b.numSpotMaps!==y||b.numLightProbes!==O)&&(i.directional.length=h,i.spot.length=E,i.rectArea.length=_,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=T+y-I,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=O,b.directionalLength=h,b.pointLength=m,b.spotLength=E,b.rectAreaLength=_,b.hemiLength=p,b.numDirectionalShadows=A,b.numPointShadows=g,b.numSpotShadows=T,b.numSpotMaps=y,b.numLightProbes=O,i.version=Um++)}function l(c,d){let u=0,f=0,h=0,m=0,E=0;const _=d.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const g=c[p];if(g.isDirectionalLight){const T=i.directional[u];T.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),u++}else if(g.isSpotLight){const T=i.spot[h];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(_),h++}else if(g.isRectAreaLight){const T=i.rectArea[m];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(_),s.identity(),o.copy(g.matrixWorld),o.premultiply(_),s.extractRotation(o),T.halfWidth.set(g.width*.5,0,0),T.halfHeight.set(0,g.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),m++}else if(g.isPointLight){const T=i.point[f];T.position.setFromMatrixPosition(g.matrixWorld),T.position.applyMatrix4(_),f++}else if(g.isHemisphereLight){const T=i.hemi[E];T.direction.setFromMatrixPosition(g.matrixWorld),T.direction.transformDirection(_),E++}}}return{setup:a,setupView:l,state:i}}function el(e){const n=new Gm(e),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function o(d){t.push(d)}function s(d){i.push(d)}function a(){n.setup(t)}function l(d){n.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:n,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function Bm(e){let n=new WeakMap;function t(r,o=0){const s=n.get(r);let a;return s===void 0?(a=new el(e),n.set(r,[a])):o>=s.length?(a=new el(e),s.push(a)):a=s[o],a}function i(){n=new WeakMap}return{get:t,dispose:i}}const Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,km=`uniform sampler2D shadow_pass;
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
}`;function Vm(e,n,t){let i=new Ql;const r=new Un,o=new Un,s=new vn,a=new ku({depthPacking:Vu}),l=new zu,c={},d=t.maxTextureSize,u={[Vi]:at,[at]:Vi,[yt]:yt},f=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Un},radius:{value:4}},vertexShader:Wm,fragmentShader:km}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const m=new $n;m.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new mn(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let p=this.type;this.render=function(I,O,b){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||I.length===0)return;const L=e.getRenderTarget(),v=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),k=e.state;k.setBlending(hi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const V=p!==Dt&&this.type===Dt,K=p===Dt&&this.type!==Dt;for(let ee=0,W=I.length;ee<W;ee++){const se=I[ee],X=se.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const _e=X.getFrameExtents();if(r.multiply(_e),o.copy(X.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(o.x=Math.floor(d/_e.x),r.x=o.x*_e.x,X.mapSize.x=o.x),r.y>d&&(o.y=Math.floor(d/_e.y),r.y=o.y*_e.y,X.mapSize.y=o.y)),X.map===null||V===!0||K===!0){const De=this.type!==Dt?{minFilter:_i,magFilter:_i}:{};X.map!==null&&X.map.dispose(),X.map=new Ri(r.x,r.y,De),X.map.texture.name=se.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();const Ie=X.getViewportCount();for(let De=0;De<Ie;De++){const We=X.getViewport(De);s.set(o.x*We.x,o.y*We.y,o.x*We.z,o.y*We.w),k.viewport(s),X.updateMatrices(se,De),i=X.getFrustum(),T(O,b,X.camera,se,this.type)}X.isPointLightShadow!==!0&&this.type===Dt&&A(X,b),X.needsUpdate=!1}p=this.type,_.needsUpdate=!1,e.setRenderTarget(L,v,P)};function A(I,O){const b=n.update(E);f.defines.VSM_SAMPLES!==I.blurSamples&&(f.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ri(r.x,r.y)),f.uniforms.shadow_pass.value=I.map.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,e.setRenderTarget(I.mapPass),e.clear(),e.renderBufferDirect(O,null,b,f,E,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,e.setRenderTarget(I.map),e.clear(),e.renderBufferDirect(O,null,b,h,E,null)}function g(I,O,b,L){let v=null;const P=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(P!==void 0)v=P;else if(v=b.isPointLight===!0?l:a,e.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const k=v.uuid,V=O.uuid;let K=c[k];K===void 0&&(K={},c[k]=K);let ee=K[V];ee===void 0&&(ee=v.clone(),K[V]=ee,O.addEventListener("dispose",y)),v=ee}if(v.visible=O.visible,v.wireframe=O.wireframe,L===Dt?v.side=O.shadowSide!==null?O.shadowSide:O.side:v.side=O.shadowSide!==null?O.shadowSide:u[O.side],v.alphaMap=O.alphaMap,v.alphaTest=O.alphaTest,v.map=O.map,v.clipShadows=O.clipShadows,v.clippingPlanes=O.clippingPlanes,v.clipIntersection=O.clipIntersection,v.displacementMap=O.displacementMap,v.displacementScale=O.displacementScale,v.displacementBias=O.displacementBias,v.wireframeLinewidth=O.wireframeLinewidth,v.linewidth=O.linewidth,b.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=e.properties.get(v);k.light=b}return v}function T(I,O,b,L,v){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===Dt)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);const V=n.update(I),K=I.material;if(Array.isArray(K)){const ee=V.groups;for(let W=0,se=ee.length;W<se;W++){const X=ee[W],_e=K[X.materialIndex];if(_e&&_e.visible){const Ie=g(I,_e,L,v);I.onBeforeShadow(e,I,O,b,V,Ie,X),e.renderBufferDirect(b,null,V,Ie,I,X),I.onAfterShadow(e,I,O,b,V,Ie,X)}}}else if(K.visible){const ee=g(I,K,L,v);I.onBeforeShadow(e,I,O,b,V,ee,null),e.renderBufferDirect(b,null,V,ee,I,null),I.onAfterShadow(e,I,O,b,V,ee,null)}}const k=I.children;for(let V=0,K=k.length;V<K;V++)T(k[V],O,b,L,v)}function y(I){I.target.removeEventListener("dispose",y);for(const b in c){const L=c[b],v=I.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const zm={[rs]:is,[ts]:Qo,[ns]:Jo,[qr]:es,[is]:rs,[Qo]:ts,[Jo]:ns,[es]:qr};function Xm(e,n){function t(){let C=!1;const de=new vn;let z=null;const $=new vn(0,0,0,0);return{setMask:function(Ee){z!==Ee&&!C&&(e.colorMask(Ee,Ee,Ee,Ee),z=Ee)},setLocked:function(Ee){C=Ee},setClear:function(Ee,he,Ve,xn,kn){kn===!0&&(Ee*=xn,he*=xn,Ve*=xn),de.set(Ee,he,Ve,xn),$.equals(de)===!1&&(e.clearColor(Ee,he,Ve,xn),$.copy(de))},reset:function(){C=!1,z=null,$.set(-1,0,0,0)}}}function i(){let C=!1,de=!1,z=null,$=null,Ee=null;return{setReversed:function(he){if(de!==he){const Ve=n.get("EXT_clip_control");de?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const xn=Ee;Ee=null,this.setClear(xn)}de=he},getReversed:function(){return de},setTest:function(he){he?oe(e.DEPTH_TEST):ye(e.DEPTH_TEST)},setMask:function(he){z!==he&&!C&&(e.depthMask(he),z=he)},setFunc:function(he){if(de&&(he=zm[he]),$!==he){switch(he){case rs:e.depthFunc(e.NEVER);break;case is:e.depthFunc(e.ALWAYS);break;case ts:e.depthFunc(e.LESS);break;case qr:e.depthFunc(e.LEQUAL);break;case ns:e.depthFunc(e.EQUAL);break;case es:e.depthFunc(e.GEQUAL);break;case Qo:e.depthFunc(e.GREATER);break;case Jo:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}$=he}},setLocked:function(he){C=he},setClear:function(he){Ee!==he&&(de&&(he=1-he),e.clearDepth(he),Ee=he)},reset:function(){C=!1,z=null,$=null,Ee=null,de=!1}}}function r(){let C=!1,de=null,z=null,$=null,Ee=null,he=null,Ve=null,xn=null,kn=null;return{setTest:function(dn){C||(dn?oe(e.STENCIL_TEST):ye(e.STENCIL_TEST))},setMask:function(dn){de!==dn&&!C&&(e.stencilMask(dn),de=dn)},setFunc:function(dn,Tt,wt){(z!==dn||$!==Tt||Ee!==wt)&&(e.stencilFunc(dn,Tt,wt),z=dn,$=Tt,Ee=wt)},setOp:function(dn,Tt,wt){(he!==dn||Ve!==Tt||xn!==wt)&&(e.stencilOp(dn,Tt,wt),he=dn,Ve=Tt,xn=wt)},setLocked:function(dn){C=dn},setClear:function(dn){kn!==dn&&(e.clearStencil(dn),kn=dn)},reset:function(){C=!1,de=null,z=null,$=null,Ee=null,he=null,Ve=null,xn=null,kn=null}}}const o=new t,s=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,h=[],m=null,E=!1,_=null,p=null,A=null,g=null,T=null,y=null,I=null,O=new xe(0,0,0),b=0,L=!1,v=null,P=null,k=null,V=null,K=null;const ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,se=0;const X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=se>=1):X.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=se>=2);let _e=null,Ie={};const De=e.getParameter(e.SCISSOR_BOX),We=e.getParameter(e.VIEWPORT),ce=new vn().fromArray(De),D=new vn().fromArray(We);function ie(C,de,z,$){const Ee=new Uint8Array(4),he=e.createTexture();e.bindTexture(C,he),e.texParameteri(C,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(C,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ve=0;Ve<z;Ve++)C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY?e.texImage3D(de,0,e.RGBA,1,1,$,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D(de+Ve,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return he}const me={};me[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),me[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),me[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),oe(e.DEPTH_TEST),s.setFunc(qr),Ze(!1),Je(ea),oe(e.CULL_FACE),N(hi);function oe(C){d[C]!==!0&&(e.enable(C),d[C]=!0)}function ye(C){d[C]!==!1&&(e.disable(C),d[C]=!1)}function Ce(C,de){return u[C]!==de?(e.bindFramebuffer(C,de),u[C]=de,C===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=de),C===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=de),!0):!1}function Ue(C,de){let z=h,$=!1;if(C){z=f.get(de),z===void 0&&(z=[],f.set(de,z));const Ee=C.textures;if(z.length!==Ee.length||z[0]!==e.COLOR_ATTACHMENT0){for(let he=0,Ve=Ee.length;he<Ve;he++)z[he]=e.COLOR_ATTACHMENT0+he;z.length=Ee.length,$=!0}}else z[0]!==e.BACK&&(z[0]=e.BACK,$=!0);$&&e.drawBuffers(z)}function on(C){return m!==C?(e.useProgram(C),m=C,!0):!1}const Ye={[Ji]:e.FUNC_ADD,[Xu]:e.FUNC_SUBTRACT,[Ku]:e.FUNC_REVERSE_SUBTRACT};Ye[wd]=e.MIN,Ye[Fd]=e.MAX;const pn={[Yu]:e.ZERO,[ju]:e.ONE,[qu]:e.SRC_COLOR,[$u]:e.SRC_ALPHA,[Zu]:e.SRC_ALPHA_SATURATE,[Ju]:e.DST_COLOR,[Qu]:e.DST_ALPHA,[ed]:e.ONE_MINUS_SRC_COLOR,[nd]:e.ONE_MINUS_SRC_ALPHA,[td]:e.ONE_MINUS_DST_COLOR,[id]:e.ONE_MINUS_DST_ALPHA,[rd]:e.CONSTANT_COLOR,[od]:e.ONE_MINUS_CONSTANT_COLOR,[sd]:e.CONSTANT_ALPHA,[ad]:e.ONE_MINUS_CONSTANT_ALPHA};function N(C,de,z,$,Ee,he,Ve,xn,kn,dn){if(C===hi){E===!0&&(ye(e.BLEND),E=!1);return}if(E===!1&&(oe(e.BLEND),E=!0),C!==Td){if(C!==_||dn!==L){if((p!==Ji||T!==Ji)&&(e.blendEquation(e.FUNC_ADD),p=Ji,T=Ji),dn)switch(C){case zr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qs:e.blendFunc(e.ONE,e.ONE);break;case Js:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zs:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case zr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Qs:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Js:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Zs:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}A=null,g=null,y=null,I=null,O.set(0,0,0),b=0,_=C,L=dn}return}Ee=Ee||de,he=he||z,Ve=Ve||$,(de!==p||Ee!==T)&&(e.blendEquationSeparate(Ye[de],Ye[Ee]),p=de,T=Ee),(z!==A||$!==g||he!==y||Ve!==I)&&(e.blendFuncSeparate(pn[z],pn[$],pn[he],pn[Ve]),A=z,g=$,y=he,I=Ve),(xn.equals(O)===!1||kn!==b)&&(e.blendColor(xn.r,xn.g,xn.b,kn),O.copy(xn),b=kn),_=C,L=!1}function ut(C,de){C.side===yt?ye(e.CULL_FACE):oe(e.CULL_FACE);let z=C.side===at;de&&(z=!z),Ze(z),C.blending===zr&&C.transparent===!1?N(hi):N(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),o.setMask(C.colorWrite);const $=C.stencilWrite;a.setTest($),$&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),En(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):ye(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(C){v!==C&&(C?e.frontFace(e.CW):e.frontFace(e.CCW),v=C)}function Je(C){C!==gd?(oe(e.CULL_FACE),C!==P&&(C===ea?e.cullFace(e.BACK):C===Rd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ye(e.CULL_FACE),P=C}function Ne(C){C!==k&&(W&&e.lineWidth(C),k=C)}function En(C,de,z){C?(oe(e.POLYGON_OFFSET_FILL),(V!==de||K!==z)&&(e.polygonOffset(de,z),V=de,K=z)):ye(e.POLYGON_OFFSET_FILL)}function Pe(C){C?oe(e.SCISSOR_TEST):ye(e.SCISSOR_TEST)}function x(C){C===void 0&&(C=e.TEXTURE0+ee-1),_e!==C&&(e.activeTexture(C),_e=C)}function R(C,de,z){z===void 0&&(_e===null?z=e.TEXTURE0+ee-1:z=_e);let $=Ie[z];$===void 0&&($={type:void 0,texture:void 0},Ie[z]=$),($.type!==C||$.texture!==de)&&(_e!==z&&(e.activeTexture(z),_e=z),e.bindTexture(C,de||me[C]),$.type=C,$.texture=de)}function H(){const C=Ie[_e];C!==void 0&&C.type!==void 0&&(e.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Q(){try{e.compressedTexImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Y(){try{e.texSubImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{e.texSubImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function nn(){try{e.texStorage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ae(){try{e.texStorage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ae(){try{e.texImage2D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{e.texImage3D.apply(e,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(C){ce.equals(C)===!1&&(e.scissor(C.x,C.y,C.z,C.w),ce.copy(C))}function Se(C){D.equals(C)===!1&&(e.viewport(C.x,C.y,C.z,C.w),D.copy(C))}function Qe(C,de){let z=c.get(de);z===void 0&&(z=new WeakMap,c.set(de,z));let $=z.get(C);$===void 0&&($=e.getUniformBlockIndex(de,C.name),z.set(C,$))}function Xe(C,de){const $=c.get(de).get(C);l.get(de)!==$&&(e.uniformBlockBinding(de,$,C.__bindingPointIndex),l.set(de,$))}function _n(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),d={},_e=null,Ie={},u={},f=new WeakMap,h=[],m=null,E=!1,_=null,p=null,A=null,g=null,T=null,y=null,I=null,O=new xe(0,0,0),b=0,L=!1,v=null,P=null,k=null,V=null,K=null,ce.set(0,0,e.canvas.width,e.canvas.height),D.set(0,0,e.canvas.width,e.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:oe,disable:ye,bindFramebuffer:Ce,drawBuffers:Ue,useProgram:on,setBlending:N,setMaterial:ut,setFlipSided:Ze,setCullFace:Je,setLineWidth:Ne,setPolygonOffset:En,setScissorTest:Pe,activeTexture:x,bindTexture:R,unbindTexture:H,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:Ae,texImage3D:Fe,updateUBOMapping:Qe,uniformBlockBinding:Xe,texStorage2D:nn,texStorage3D:ae,texSubImage2D:Y,texSubImage3D:Oe,compressedTexSubImage2D:pe,compressedTexSubImage3D:Re,scissor:He,viewport:Se,reset:_n}}function Km(e,n,t,i,r,o,s){const a=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Un,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(x,R){return h?new OffscreenCanvas(x,R):zd("canvas")}function E(x,R,H){let q=1;const Q=Pe(x);if((Q.width>H||Q.height>H)&&(q=H/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const Y=Math.floor(q*Q.width),Oe=Math.floor(q*Q.height);u===void 0&&(u=m(Y,Oe));const pe=R?m(Y,Oe):u;return pe.width=Y,pe.height=Oe,pe.getContext("2d").drawImage(x,0,0,Y,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Oe+")."),pe}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),x;return x}function _(x){return x.generateMipmaps}function p(x){e.generateMipmap(x)}function A(x){return x.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?e.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(x,R,H,q,Q=!1){if(x!==null){if(e[x]!==void 0)return e[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let Y=R;if(R===e.RED&&(H===e.FLOAT&&(Y=e.R32F),H===e.HALF_FLOAT&&(Y=e.R16F),H===e.UNSIGNED_BYTE&&(Y=e.R8)),R===e.RED_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.R8UI),H===e.UNSIGNED_SHORT&&(Y=e.R16UI),H===e.UNSIGNED_INT&&(Y=e.R32UI),H===e.BYTE&&(Y=e.R8I),H===e.SHORT&&(Y=e.R16I),H===e.INT&&(Y=e.R32I)),R===e.RG&&(H===e.FLOAT&&(Y=e.RG32F),H===e.HALF_FLOAT&&(Y=e.RG16F),H===e.UNSIGNED_BYTE&&(Y=e.RG8)),R===e.RG_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RG8UI),H===e.UNSIGNED_SHORT&&(Y=e.RG16UI),H===e.UNSIGNED_INT&&(Y=e.RG32UI),H===e.BYTE&&(Y=e.RG8I),H===e.SHORT&&(Y=e.RG16I),H===e.INT&&(Y=e.RG32I)),R===e.RGB_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RGB8UI),H===e.UNSIGNED_SHORT&&(Y=e.RGB16UI),H===e.UNSIGNED_INT&&(Y=e.RGB32UI),H===e.BYTE&&(Y=e.RGB8I),H===e.SHORT&&(Y=e.RGB16I),H===e.INT&&(Y=e.RGB32I)),R===e.RGBA_INTEGER&&(H===e.UNSIGNED_BYTE&&(Y=e.RGBA8UI),H===e.UNSIGNED_SHORT&&(Y=e.RGBA16UI),H===e.UNSIGNED_INT&&(Y=e.RGBA32UI),H===e.BYTE&&(Y=e.RGBA8I),H===e.SHORT&&(Y=e.RGBA16I),H===e.INT&&(Y=e.RGBA32I)),R===e.RGB&&H===e.UNSIGNED_INT_5_9_9_9_REV&&(Y=e.RGB9_E5),R===e.RGBA){const Oe=Q?pc:un.getTransfer(q);H===e.FLOAT&&(Y=e.RGBA32F),H===e.HALF_FLOAT&&(Y=e.RGBA16F),H===e.UNSIGNED_BYTE&&(Y=Oe===gn?e.SRGB8_ALPHA8:e.RGBA8),H===e.UNSIGNED_SHORT_4_4_4_4&&(Y=e.RGBA4),H===e.UNSIGNED_SHORT_5_5_5_1&&(Y=e.RGB5_A1)}return(Y===e.R16F||Y===e.R32F||Y===e.RG16F||Y===e.RG32F||Y===e.RGBA16F||Y===e.RGBA32F)&&n.get("EXT_color_buffer_float"),Y}function T(x,R){let H;return x?R===null||R===ur||R===cr?H=e.DEPTH24_STENCIL8:R===di?H=e.DEPTH32F_STENCIL8:R===Zr&&(H=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ur||R===cr?H=e.DEPTH_COMPONENT24:R===di?H=e.DEPTH_COMPONENT32F:R===Zr&&(H=e.DEPTH_COMPONENT16),H}function y(x,R){return _(x)===!0||x.isFramebufferTexture&&x.minFilter!==_i&&x.minFilter!==Bt?Math.log2(Math.max(R.width,R.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?R.mipmaps.length:1}function I(x){const R=x.target;R.removeEventListener("dispose",I),b(R),R.isVideoTexture&&d.delete(R)}function O(x){const R=x.target;R.removeEventListener("dispose",O),v(R)}function b(x){const R=i.get(x);if(R.__webglInit===void 0)return;const H=x.source,q=f.get(H);if(q){const Q=q[R.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&L(x),Object.keys(q).length===0&&f.delete(H)}i.remove(x)}function L(x){const R=i.get(x);e.deleteTexture(R.__webglTexture);const H=x.source,q=f.get(H);delete q[R.__cacheKey],s.memory.textures--}function v(x){const R=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(R.__webglFramebuffer[q]))for(let Q=0;Q<R.__webglFramebuffer[q].length;Q++)e.deleteFramebuffer(R.__webglFramebuffer[q][Q]);else e.deleteFramebuffer(R.__webglFramebuffer[q]);R.__webglDepthbuffer&&e.deleteRenderbuffer(R.__webglDepthbuffer[q])}else{if(Array.isArray(R.__webglFramebuffer))for(let q=0;q<R.__webglFramebuffer.length;q++)e.deleteFramebuffer(R.__webglFramebuffer[q]);else e.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&e.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&e.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let q=0;q<R.__webglColorRenderbuffer.length;q++)R.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(R.__webglColorRenderbuffer[q]);R.__webglDepthRenderbuffer&&e.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const H=x.textures;for(let q=0,Q=H.length;q<Q;q++){const Y=i.get(H[q]);Y.__webglTexture&&(e.deleteTexture(Y.__webglTexture),s.memory.textures--),i.remove(H[q])}i.remove(x)}let P=0;function k(){P=0}function V(){const x=P;return x>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+r.maxTextures),P+=1,x}function K(x){const R=[];return R.push(x.wrapS),R.push(x.wrapT),R.push(x.wrapR||0),R.push(x.magFilter),R.push(x.minFilter),R.push(x.anisotropy),R.push(x.internalFormat),R.push(x.format),R.push(x.type),R.push(x.generateMipmaps),R.push(x.premultiplyAlpha),R.push(x.flipY),R.push(x.unpackAlignment),R.push(x.colorSpace),R.join()}function ee(x,R){const H=i.get(x);if(x.isVideoTexture&&Ne(x),x.isRenderTargetTexture===!1&&x.version>0&&H.__version!==x.version){const q=x.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(H,x,R);return}}t.bindTexture(e.TEXTURE_2D,H.__webglTexture,e.TEXTURE0+R)}function W(x,R){const H=i.get(x);if(x.version>0&&H.__version!==x.version){D(H,x,R);return}t.bindTexture(e.TEXTURE_2D_ARRAY,H.__webglTexture,e.TEXTURE0+R)}function se(x,R){const H=i.get(x);if(x.version>0&&H.__version!==x.version){D(H,x,R);return}t.bindTexture(e.TEXTURE_3D,H.__webglTexture,e.TEXTURE0+R)}function X(x,R){const H=i.get(x);if(x.version>0&&H.__version!==x.version){ie(H,x,R);return}t.bindTexture(e.TEXTURE_CUBE_MAP,H.__webglTexture,e.TEXTURE0+R)}const _e={[zi]:e.REPEAT,[$r]:e.CLAMP_TO_EDGE,[tc]:e.MIRRORED_REPEAT},Ie={[_i]:e.NEAREST,[ic]:e.NEAREST_MIPMAP_NEAREST,[rr]:e.NEAREST_MIPMAP_LINEAR,[Bt]:e.LINEAR,[Vr]:e.LINEAR_MIPMAP_NEAREST,[ui]:e.LINEAR_MIPMAP_LINEAR},De={[ld]:e.NEVER,[cd]:e.ALWAYS,[ud]:e.LESS,[rc]:e.LEQUAL,[dd]:e.EQUAL,[fd]:e.GEQUAL,[pd]:e.GREATER,[hd]:e.NOTEQUAL};function We(x,R){if(R.type===di&&n.has("OES_texture_float_linear")===!1&&(R.magFilter===Bt||R.magFilter===Vr||R.magFilter===rr||R.magFilter===ui||R.minFilter===Bt||R.minFilter===Vr||R.minFilter===rr||R.minFilter===ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(x,e.TEXTURE_WRAP_S,_e[R.wrapS]),e.texParameteri(x,e.TEXTURE_WRAP_T,_e[R.wrapT]),(x===e.TEXTURE_3D||x===e.TEXTURE_2D_ARRAY)&&e.texParameteri(x,e.TEXTURE_WRAP_R,_e[R.wrapR]),e.texParameteri(x,e.TEXTURE_MAG_FILTER,Ie[R.magFilter]),e.texParameteri(x,e.TEXTURE_MIN_FILTER,Ie[R.minFilter]),R.compareFunction&&(e.texParameteri(x,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(x,e.TEXTURE_COMPARE_FUNC,De[R.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===_i||R.minFilter!==rr&&R.minFilter!==ui||R.type===di&&n.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const H=n.get("EXT_texture_filter_anisotropic");e.texParameterf(x,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ce(x,R){let H=!1;x.__webglInit===void 0&&(x.__webglInit=!0,R.addEventListener("dispose",I));const q=R.source;let Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));const Y=K(R);if(Y!==x.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,H=!0),Q[Y].usedTimes++;const Oe=Q[x.__cacheKey];Oe!==void 0&&(Q[x.__cacheKey].usedTimes--,Oe.usedTimes===0&&L(R)),x.__cacheKey=Y,x.__webglTexture=Q[Y].texture}return H}function D(x,R,H){let q=e.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),R.isData3DTexture&&(q=e.TEXTURE_3D);const Q=ce(x,R),Y=R.source;t.bindTexture(q,x.__webglTexture,e.TEXTURE0+H);const Oe=i.get(Y);if(Y.version!==Oe.__version||Q===!0){t.activeTexture(e.TEXTURE0+H);const pe=un.getPrimaries(un.workingColorSpace),Re=R.colorSpace===Ni?null:un.getPrimaries(R.colorSpace),nn=R.colorSpace===Ni||pe===Re?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,nn);let ae=E(R.image,!1,r.maxTextureSize);ae=En(R,ae);const Ae=o.convert(R.format,R.colorSpace),Fe=o.convert(R.type);let He=g(R.internalFormat,Ae,Fe,R.colorSpace,R.isVideoTexture);We(q,R);let Se;const Qe=R.mipmaps,Xe=R.isVideoTexture!==!0,_n=Oe.__version===void 0||Q===!0,C=Y.dataReady,de=y(R,ae);if(R.isDepthTexture)He=T(R.format===jr,R.type),_n&&(Xe?t.texStorage2D(e.TEXTURE_2D,1,He,ae.width,ae.height):t.texImage2D(e.TEXTURE_2D,0,He,ae.width,ae.height,0,Ae,Fe,null));else if(R.isDataTexture)if(Qe.length>0){Xe&&_n&&t.texStorage2D(e.TEXTURE_2D,de,He,Qe[0].width,Qe[0].height);for(let z=0,$=Qe.length;z<$;z++)Se=Qe[z],Xe?C&&t.texSubImage2D(e.TEXTURE_2D,z,0,0,Se.width,Se.height,Ae,Fe,Se.data):t.texImage2D(e.TEXTURE_2D,z,He,Se.width,Se.height,0,Ae,Fe,Se.data);R.generateMipmaps=!1}else Xe?(_n&&t.texStorage2D(e.TEXTURE_2D,de,He,ae.width,ae.height),C&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ae.width,ae.height,Ae,Fe,ae.data)):t.texImage2D(e.TEXTURE_2D,0,He,ae.width,ae.height,0,Ae,Fe,ae.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Xe&&_n&&t.texStorage3D(e.TEXTURE_2D_ARRAY,de,He,Qe[0].width,Qe[0].height,ae.depth);for(let z=0,$=Qe.length;z<$;z++)if(Se=Qe[z],R.format!==Gt)if(Ae!==null)if(Xe){if(C)if(R.layerUpdates.size>0){const Ee=na(Se.width,Se.height,R.format,R.type);for(const he of R.layerUpdates){const Ve=Se.data.subarray(he*Ee/Se.data.BYTES_PER_ELEMENT,(he+1)*Ee/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,he,Se.width,Se.height,1,Ae,Ve)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,Se.width,Se.height,ae.depth,Ae,Se.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,z,He,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?C&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,z,0,0,0,Se.width,Se.height,ae.depth,Ae,Fe,Se.data):t.texImage3D(e.TEXTURE_2D_ARRAY,z,He,Se.width,Se.height,ae.depth,0,Ae,Fe,Se.data)}else{Xe&&_n&&t.texStorage2D(e.TEXTURE_2D,de,He,Qe[0].width,Qe[0].height);for(let z=0,$=Qe.length;z<$;z++)Se=Qe[z],R.format!==Gt?Ae!==null?Xe?C&&t.compressedTexSubImage2D(e.TEXTURE_2D,z,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(e.TEXTURE_2D,z,He,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?C&&t.texSubImage2D(e.TEXTURE_2D,z,0,0,Se.width,Se.height,Ae,Fe,Se.data):t.texImage2D(e.TEXTURE_2D,z,He,Se.width,Se.height,0,Ae,Fe,Se.data)}else if(R.isDataArrayTexture)if(Xe){if(_n&&t.texStorage3D(e.TEXTURE_2D_ARRAY,de,He,ae.width,ae.height,ae.depth),C)if(R.layerUpdates.size>0){const z=na(ae.width,ae.height,R.format,R.type);for(const $ of R.layerUpdates){const Ee=ae.data.subarray($*z/ae.data.BYTES_PER_ELEMENT,($+1)*z/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,ae.width,ae.height,1,Ae,Fe,Ee)}R.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Fe,ae.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,He,ae.width,ae.height,ae.depth,0,Ae,Fe,ae.data);else if(R.isData3DTexture)Xe?(_n&&t.texStorage3D(e.TEXTURE_3D,de,He,ae.width,ae.height,ae.depth),C&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ae,Fe,ae.data)):t.texImage3D(e.TEXTURE_3D,0,He,ae.width,ae.height,ae.depth,0,Ae,Fe,ae.data);else if(R.isFramebufferTexture){if(_n)if(Xe)t.texStorage2D(e.TEXTURE_2D,de,He,ae.width,ae.height);else{let z=ae.width,$=ae.height;for(let Ee=0;Ee<de;Ee++)t.texImage2D(e.TEXTURE_2D,Ee,He,z,$,0,Ae,Fe,null),z>>=1,$>>=1}}else if(Qe.length>0){if(Xe&&_n){const z=Pe(Qe[0]);t.texStorage2D(e.TEXTURE_2D,de,He,z.width,z.height)}for(let z=0,$=Qe.length;z<$;z++)Se=Qe[z],Xe?C&&t.texSubImage2D(e.TEXTURE_2D,z,0,0,Ae,Fe,Se):t.texImage2D(e.TEXTURE_2D,z,He,Ae,Fe,Se);R.generateMipmaps=!1}else if(Xe){if(_n){const z=Pe(ae);t.texStorage2D(e.TEXTURE_2D,de,He,z.width,z.height)}C&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,Ae,Fe,ae)}else t.texImage2D(e.TEXTURE_2D,0,He,Ae,Fe,ae);_(R)&&p(q),Oe.__version=Y.version,R.onUpdate&&R.onUpdate(R)}x.__version=R.version}function ie(x,R,H){if(R.image.length!==6)return;const q=ce(x,R),Q=R.source;t.bindTexture(e.TEXTURE_CUBE_MAP,x.__webglTexture,e.TEXTURE0+H);const Y=i.get(Q);if(Q.version!==Y.__version||q===!0){t.activeTexture(e.TEXTURE0+H);const Oe=un.getPrimaries(un.workingColorSpace),pe=R.colorSpace===Ni?null:un.getPrimaries(R.colorSpace),Re=R.colorSpace===Ni||Oe===pe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const nn=R.isCompressedTexture||R.image[0].isCompressedTexture,ae=R.image[0]&&R.image[0].isDataTexture,Ae=[];for(let $=0;$<6;$++)!nn&&!ae?Ae[$]=E(R.image[$],!0,r.maxCubemapSize):Ae[$]=ae?R.image[$].image:R.image[$],Ae[$]=En(R,Ae[$]);const Fe=Ae[0],He=o.convert(R.format,R.colorSpace),Se=o.convert(R.type),Qe=g(R.internalFormat,He,Se,R.colorSpace),Xe=R.isVideoTexture!==!0,_n=Y.__version===void 0||q===!0,C=Q.dataReady;let de=y(R,Fe);We(e.TEXTURE_CUBE_MAP,R);let z;if(nn){Xe&&_n&&t.texStorage2D(e.TEXTURE_CUBE_MAP,de,Qe,Fe.width,Fe.height);for(let $=0;$<6;$++){z=Ae[$].mipmaps;for(let Ee=0;Ee<z.length;Ee++){const he=z[Ee];R.format!==Gt?He!==null?Xe?C&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,0,0,he.width,he.height,He,he.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,Qe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?C&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,0,0,he.width,he.height,He,Se,he.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,Qe,he.width,he.height,0,He,Se,he.data)}}}else{if(z=R.mipmaps,Xe&&_n){z.length>0&&de++;const $=Pe(Ae[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,de,Qe,$.width,$.height)}for(let $=0;$<6;$++)if(ae){Xe?C&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ae[$].width,Ae[$].height,He,Se,Ae[$].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Qe,Ae[$].width,Ae[$].height,0,He,Se,Ae[$].data);for(let Ee=0;Ee<z.length;Ee++){const Ve=z[Ee].image[$].image;Xe?C&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,0,0,Ve.width,Ve.height,He,Se,Ve.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,Qe,Ve.width,Ve.height,0,He,Se,Ve.data)}}else{Xe?C&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,He,Se,Ae[$]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Qe,He,Se,Ae[$]);for(let Ee=0;Ee<z.length;Ee++){const he=z[Ee];Xe?C&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,0,0,He,Se,he.image[$]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,Qe,He,Se,he.image[$])}}}_(R)&&p(e.TEXTURE_CUBE_MAP),Y.__version=Q.version,R.onUpdate&&R.onUpdate(R)}x.__version=R.version}function me(x,R,H,q,Q,Y){const Oe=o.convert(H.format,H.colorSpace),pe=o.convert(H.type),Re=g(H.internalFormat,Oe,pe,H.colorSpace),nn=i.get(R),ae=i.get(H);if(ae.__renderTarget=R,!nn.__hasExternalTextures){const Ae=Math.max(1,R.width>>Y),Fe=Math.max(1,R.height>>Y);Q===e.TEXTURE_3D||Q===e.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,Re,Ae,Fe,R.depth,0,Oe,pe,null):t.texImage2D(Q,Y,Re,Ae,Fe,0,Oe,pe,null)}t.bindFramebuffer(e.FRAMEBUFFER,x),Je(R)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,Q,ae.__webglTexture,0,Ze(R)):(Q===e.TEXTURE_2D||Q>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,Q,ae.__webglTexture,Y),t.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(x,R,H){if(e.bindRenderbuffer(e.RENDERBUFFER,x),R.depthBuffer){const q=R.depthTexture,Q=q&&q.isDepthTexture?q.type:null,Y=T(R.stencilBuffer,Q),Oe=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pe=Ze(R);Je(R)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,pe,Y,R.width,R.height):H?e.renderbufferStorageMultisample(e.RENDERBUFFER,pe,Y,R.width,R.height):e.renderbufferStorage(e.RENDERBUFFER,Y,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Oe,e.RENDERBUFFER,x)}else{const q=R.textures;for(let Q=0;Q<q.length;Q++){const Y=q[Q],Oe=o.convert(Y.format,Y.colorSpace),pe=o.convert(Y.type),Re=g(Y.internalFormat,Oe,pe,Y.colorSpace),nn=Ze(R);H&&Je(R)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,nn,Re,R.width,R.height):Je(R)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,nn,Re,R.width,R.height):e.renderbufferStorage(e.RENDERBUFFER,Re,R.width,R.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ye(x,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,x),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(R.depthTexture);q.__renderTarget=R,(!q.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ee(R.depthTexture,0);const Q=q.__webglTexture,Y=Ze(R);if(R.depthTexture.format===vs)Je(R)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,Q,0);else if(R.depthTexture.format===jr)Je(R)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0,Y):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Ce(x){const R=i.get(x),H=x.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==x.depthTexture){const q=x.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),q){const Q=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),R.__depthDisposeCallback=Q}R.__boundDepthTexture=q}if(x.depthTexture&&!R.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ye(R.__webglFramebuffer,x)}else if(H){R.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(e.FRAMEBUFFER,R.__webglFramebuffer[q]),R.__webglDepthbuffer[q]===void 0)R.__webglDepthbuffer[q]=e.createRenderbuffer(),oe(R.__webglDepthbuffer[q],x,!1);else{const Q=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Y=R.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,Y),e.framebufferRenderbuffer(e.FRAMEBUFFER,Q,e.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=e.createRenderbuffer(),oe(R.__webglDepthbuffer,x,!1);else{const q=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Q=R.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,Q),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,Q)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ue(x,R,H){const q=i.get(x);R!==void 0&&me(q.__webglFramebuffer,x,x.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),H!==void 0&&Ce(x)}function on(x){const R=x.texture,H=i.get(x),q=i.get(R);x.addEventListener("dispose",O);const Q=x.textures,Y=x.isWebGLCubeRenderTarget===!0,Oe=Q.length>1;if(Oe||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=R.version,s.memory.textures++),Y){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(R.mipmaps&&R.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let Re=0;Re<R.mipmaps.length;Re++)H.__webglFramebuffer[pe][Re]=e.createFramebuffer()}else H.__webglFramebuffer[pe]=e.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<R.mipmaps.length;pe++)H.__webglFramebuffer[pe]=e.createFramebuffer()}else H.__webglFramebuffer=e.createFramebuffer();if(Oe)for(let pe=0,Re=Q.length;pe<Re;pe++){const nn=i.get(Q[pe]);nn.__webglTexture===void 0&&(nn.__webglTexture=e.createTexture(),s.memory.textures++)}if(x.samples>0&&Je(x)===!1){H.__webglMultisampledFramebuffer=e.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<Q.length;pe++){const Re=Q[pe];H.__webglColorRenderbuffer[pe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const nn=o.convert(Re.format,Re.colorSpace),ae=o.convert(Re.type),Ae=g(Re.internalFormat,nn,ae,Re.colorSpace,x.isXRRenderTarget===!0),Fe=Ze(x);e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe,Ae,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+pe,e.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}e.bindRenderbuffer(e.RENDERBUFFER,null),x.depthBuffer&&(H.__webglDepthRenderbuffer=e.createRenderbuffer(),oe(H.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(Y){t.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),We(e.TEXTURE_CUBE_MAP,R);for(let pe=0;pe<6;pe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Re=0;Re<R.mipmaps.length;Re++)me(H.__webglFramebuffer[pe][Re],x,R,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Re);else me(H.__webglFramebuffer[pe],x,R,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);_(R)&&p(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let pe=0,Re=Q.length;pe<Re;pe++){const nn=Q[pe],ae=i.get(nn);t.bindTexture(e.TEXTURE_2D,ae.__webglTexture),We(e.TEXTURE_2D,nn),me(H.__webglFramebuffer,x,nn,e.COLOR_ATTACHMENT0+pe,e.TEXTURE_2D,0),_(nn)&&p(e.TEXTURE_2D)}t.unbindTexture()}else{let pe=e.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(pe=x.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(pe,q.__webglTexture),We(pe,R),R.mipmaps&&R.mipmaps.length>0)for(let Re=0;Re<R.mipmaps.length;Re++)me(H.__webglFramebuffer[Re],x,R,e.COLOR_ATTACHMENT0,pe,Re);else me(H.__webglFramebuffer,x,R,e.COLOR_ATTACHMENT0,pe,0);_(R)&&p(pe),t.unbindTexture()}x.depthBuffer&&Ce(x)}function Ye(x){const R=x.textures;for(let H=0,q=R.length;H<q;H++){const Q=R[H];if(_(Q)){const Y=A(x),Oe=i.get(Q).__webglTexture;t.bindTexture(Y,Oe),p(Y),t.unbindTexture()}}}const pn=[],N=[];function ut(x){if(x.samples>0){if(Je(x)===!1){const R=x.textures,H=x.width,q=x.height;let Q=e.COLOR_BUFFER_BIT;const Y=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Oe=i.get(x),pe=R.length>1;if(pe)for(let Re=0;Re<R.length;Re++)t.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Re=0;Re<R.length;Re++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(Q|=e.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(Q|=e.STENCIL_BUFFER_BIT)),pe){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Oe.__webglColorRenderbuffer[Re]);const nn=i.get(R[Re]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,nn,0)}e.blitFramebuffer(0,0,H,q,0,0,H,q,Q,e.NEAREST),l===!0&&(pn.length=0,N.length=0,pn.push(e.COLOR_ATTACHMENT0+Re),x.depthBuffer&&x.resolveDepthBuffer===!1&&(pn.push(Y),N.push(Y),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,N)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,pn))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),pe)for(let Re=0;Re<R.length;Re++){t.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.RENDERBUFFER,Oe.__webglColorRenderbuffer[Re]);const nn=i.get(R[Re]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Oe.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Re,e.TEXTURE_2D,nn,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const R=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[R])}}}function Ze(x){return Math.min(r.maxSamples,x.samples)}function Je(x){const R=i.get(x);return x.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ne(x){const R=s.render.frame;d.get(x)!==R&&(d.set(x,R),x.update())}function En(x,R){const H=x.colorSpace,q=x.format,Q=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||H!==ct&&H!==Ni&&(un.getTransfer(H)===gn?(q!==Gt||Q!==Ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),R}function Pe(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=k,this.setTexture2D=ee,this.setTexture2DArray=W,this.setTexture3D=se,this.setTextureCube=X,this.rebindTextures=Ue,this.setupRenderTarget=on,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Je}function Ym(e,n){function t(i,r=Ni){let o;const s=un.getTransfer(r);if(i===Ai)return e.UNSIGNED_BYTE;if(i===lc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===cc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Ad)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Sd)return e.BYTE;if(i===vd)return e.SHORT;if(i===Zr)return e.UNSIGNED_SHORT;if(i===dc)return e.INT;if(i===ur)return e.UNSIGNED_INT;if(i===di)return e.FLOAT;if(i===ro)return e.HALF_FLOAT;if(i===Ld)return e.ALPHA;if(i===xd)return e.RGB;if(i===Gt)return e.RGBA;if(i===Md)return e.LUMINANCE;if(i===yd)return e.LUMINANCE_ALPHA;if(i===vs)return e.DEPTH_COMPONENT;if(i===jr)return e.DEPTH_STENCIL;if(i===Id)return e.RED;if(i===ac)return e.RED_INTEGER;if(i===Od)return e.RG;if(i===sc)return e.RG_INTEGER;if(i===oc)return e.RGBA_INTEGER;if(i===vo||i===Lo||i===xo||i===Mo)if(s===gn)if(o=n.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=n.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ta||i===ia||i===ra||i===oa)if(o=n.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===ta)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ia)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ra)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sa||i===aa||i===la)if(o=n.get("WEBGL_compressed_texture_etc"),o!==null){if(i===sa||i===aa)return s===gn?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===la)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ca||i===ua||i===da||i===fa||i===pa||i===ha||i===_a||i===ma||i===Ea||i===Ta||i===ga||i===Ra||i===Aa||i===Sa)if(o=n.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ca)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ua)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===da)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fa)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pa)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ha)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_a)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ma)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ea)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ta)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ga)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ra)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Aa)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sa)return s===gn?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===va||i===La)if(o=n.get("EXT_texture_compression_bptc"),o!==null){if(i===yo)return s===gn?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===va)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===La)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Pd||i===xa||i===Ma||i===ya)if(o=n.get("EXT_texture_compression_rgtc"),o!==null){if(i===yo)return o.COMPRESSED_RED_RGTC1_EXT;if(i===xa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ma)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ya)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===cr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:t}}const jm={type:"move"};class Fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const t=this._hand;if(t)for(const i of n.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,t,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(n&&t.session.visibilityState!=="visible-blurred"){if(c&&n.hand){s=!0;for(const E of n.hand.values()){const _=t.getJointPose(E,i),p=this._getHandJoint(c,E);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,m=.005;c.inputState.pinching&&f>h+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&f<=h-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else l!==null&&n.gripSpace&&(o=t.getPose(n.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(n.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(n,t){if(n.joints[t.jointName]===void 0){const i=new Ot;i.matrixAutoUpdate=!1,i.visible=!1,n.joints[t.jointName]=i,n.add(i)}return n.joints[t.jointName]}}const qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`;class Zm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,i){if(this.texture===null){const r=new dr,o=n.properties.get(r);o.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,i=new Wt({vertexShader:qm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new Ls(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends Hu{constructor(n,t){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,d=null,u=null,f=null,h=null,m=null;const E=new Zm,_=t.getContextAttributes();let p=null,A=null;const g=[],T=[],y=new Un;let I=null;const O=new $t;O.viewport=new vn;const b=new $t;b.viewport=new vn;const L=[O,b],v=new Gu;let P=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let ie=g[D];return ie===void 0&&(ie=new Fo,g[D]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(D){let ie=g[D];return ie===void 0&&(ie=new Fo,g[D]=ie),ie.getGripSpace()},this.getHand=function(D){let ie=g[D];return ie===void 0&&(ie=new Fo,g[D]=ie),ie.getHandSpace()};function V(D){const ie=T.indexOf(D.inputSource);if(ie===-1)return;const me=g[ie];me!==void 0&&(me.update(D.inputSource,D.frame,c||s),me.dispatchEvent({type:D.type,data:D.inputSource}))}function K(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",ee);for(let D=0;D<g.length;D++){const ie=T[D];ie!==null&&(T[D]=null,g[D].disconnect(ie))}P=null,k=null,E.reset(),n.setRenderTarget(p),h=null,f=null,u=null,r=null,A=null,ce.stop(),i.isPresenting=!1,n.setPixelRatio(I),n.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(p=n.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",K),r.addEventListener("inputsourceschange",ee),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=n.getPixelRatio(),n.getSize(y),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let me=null,oe=null,ye=null;_.depth&&(ye=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=_.stencil?jr:vs,oe=_.stencil?cr:ur);const Ce={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:o};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),n.setPixelRatio(1),n.setSize(f.textureWidth,f.textureHeight,!1),A=new Ri(f.textureWidth,f.textureHeight,{format:Gt,type:Ai,depthTexture:new ec(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:_.stencil,colorSpace:n.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const me={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,t,me),r.updateRenderState({baseLayer:h}),n.setPixelRatio(1),n.setSize(h.framebufferWidth,h.framebufferHeight,!1),A=new Ri(h.framebufferWidth,h.framebufferHeight,{format:Gt,type:Ai,colorSpace:n.outputColorSpace,stencilBuffer:_.stencil})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function ee(D){for(let ie=0;ie<D.removed.length;ie++){const me=D.removed[ie],oe=T.indexOf(me);oe>=0&&(T[oe]=null,g[oe].disconnect(me))}for(let ie=0;ie<D.added.length;ie++){const me=D.added[ie];let oe=T.indexOf(me);if(oe===-1){for(let Ce=0;Ce<g.length;Ce++)if(Ce>=T.length){T.push(me),oe=Ce;break}else if(T[Ce]===null){T[Ce]=me,oe=Ce;break}if(oe===-1)break}const ye=g[oe];ye&&ye.connect(me)}}const W=new le,se=new le;function X(D,ie,me){W.setFromMatrixPosition(ie.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);const oe=W.distanceTo(se),ye=ie.projectionMatrix.elements,Ce=me.projectionMatrix.elements,Ue=ye[14]/(ye[10]-1),on=ye[14]/(ye[10]+1),Ye=(ye[9]+1)/ye[5],pn=(ye[9]-1)/ye[5],N=(ye[8]-1)/ye[0],ut=(Ce[8]+1)/Ce[0],Ze=Ue*N,Je=Ue*ut,Ne=oe/(-N+ut),En=Ne*-N;if(ie.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(En),D.translateZ(Ne),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),ye[10]===-1)D.projectionMatrix.copy(ie.projectionMatrix),D.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Pe=Ue+Ne,x=on+Ne,R=Ze-En,H=Je+(oe-En),q=Ye*on/x*Pe,Q=pn*on/x*Pe;D.projectionMatrix.makePerspective(R,H,q,Q,Pe,x),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function _e(D,ie){ie===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(ie.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;let ie=D.near,me=D.far;E.texture!==null&&(E.depthNear>0&&(ie=E.depthNear),E.depthFar>0&&(me=E.depthFar)),v.near=b.near=O.near=ie,v.far=b.far=O.far=me,(P!==v.near||k!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,k=v.far),O.layers.mask=D.layers.mask|2,b.layers.mask=D.layers.mask|4,v.layers.mask=O.layers.mask|b.layers.mask;const oe=D.parent,ye=v.cameras;_e(v,oe);for(let Ce=0;Ce<ye.length;Ce++)_e(ye[Ce],oe);ye.length===2?X(v,O,b):v.projectionMatrix.copy(O.projectionMatrix),Ie(D,v,oe)};function Ie(D,ie,me){me===null?D.matrix.copy(ie.matrixWorld):(D.matrix.copy(me.matrixWorld),D.matrix.invert(),D.matrix.multiply(ie.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(ie.projectionMatrix),D.projectionMatrixInverse.copy(ie.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=Bu*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=D)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(v)};let De=null;function We(D,ie){if(d=ie.getViewerPose(c||s),m=ie,d!==null){const me=d.views;h!==null&&(n.setRenderTargetFramebuffer(A,h.framebuffer),n.setRenderTarget(A));let oe=!1;me.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Ce=0;Ce<me.length;Ce++){const Ue=me[Ce];let on=null;if(h!==null)on=h.getViewport(Ue);else{const pn=u.getViewSubImage(f,Ue);on=pn.viewport,Ce===0&&(n.setRenderTargetTextures(A,pn.colorTexture,f.ignoreDepthValues?void 0:pn.depthStencilTexture),n.setRenderTarget(A))}let Ye=L[Ce];Ye===void 0&&(Ye=new $t,Ye.layers.enable(Ce),Ye.viewport=new vn,L[Ce]=Ye),Ye.matrix.fromArray(Ue.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ue.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(on.x,on.y,on.width,on.height),Ce===0&&(v.matrix.copy(Ye.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(Ye)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const Ce=u.getDepthInformation(me[0]);Ce&&Ce.isValid&&Ce.texture&&E.init(n,Ce,r.renderState)}}for(let me=0;me<g.length;me++){const oe=T[me],ye=g[me];oe!==null&&ye!==void 0&&ye.update(oe,ie,c||s)}De&&De(D,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const ce=new vc;ce.setAnimationLoop(We),this.setAnimationLoop=function(D){De=D},this.dispose=function(){}}}const ii=new Ht,Qm=new $e;function eE(e,n){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,uc(e)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,A,g,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(_,p):p.isMeshToonMaterial?(o(_,p),u(_,p)):p.isMeshPhongMaterial?(o(_,p),d(_,p)):p.isMeshStandardMaterial?(o(_,p),f(_,p),p.isMeshPhysicalMaterial&&h(_,p,T)):p.isMeshMatcapMaterial?(o(_,p),m(_,p)):p.isMeshDepthMaterial?o(_,p):p.isMeshDistanceMaterial?(o(_,p),E(_,p)):p.isMeshNormalMaterial?o(_,p):p.isLineBasicMaterial?(s(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,A,g):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===at&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===at&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const A=n.get(p),g=A.envMap,T=A.envMapRotation;g&&(_.envMap.value=g,ii.copy(T),ii.x*=-1,ii.y*=-1,ii.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),_.envMapRotation.value.setFromMatrix4(Qm.makeRotationFromEuler(ii)),_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function s(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,A,g){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*A,_.scale.value=g*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function d(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function u(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function h(_,p,A){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===at&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function E(_,p){const A=n.get(p).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nE(e,n,t,i){let r={},o={},s=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,g){const T=g.program;i.uniformBlockBinding(A,T)}function c(A,g){let T=r[A.id];T===void 0&&(m(A),T=d(A),r[A.id]=T,A.addEventListener("dispose",_));const y=g.program;i.updateUBOMapping(A,y);const I=n.render.frame;o[A.id]!==I&&(f(A),o[A.id]=I)}function d(A){const g=u();A.__bindingPointIndex=g;const T=e.createBuffer(),y=A.__size,I=A.usage;return e.bindBuffer(e.UNIFORM_BUFFER,T),e.bufferData(e.UNIFORM_BUFFER,y,I),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,T),T}function u(){for(let A=0;A<a;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const g=r[A.id],T=A.uniforms,y=A.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let I=0,O=T.length;I<O;I++){const b=Array.isArray(T[I])?T[I]:[T[I]];for(let L=0,v=b.length;L<v;L++){const P=b[L];if(h(P,I,L,y)===!0){const k=P.__offset,V=Array.isArray(P.value)?P.value:[P.value];let K=0;for(let ee=0;ee<V.length;ee++){const W=V[ee],se=E(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,e.bufferSubData(e.UNIFORM_BUFFER,k+K,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,K),K+=se.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,P.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function h(A,g,T,y){const I=A.value,O=g+"_"+T;if(y[O]===void 0)return typeof I=="number"||typeof I=="boolean"?y[O]=I:y[O]=I.clone(),!0;{const b=y[O];if(typeof I=="number"||typeof I=="boolean"){if(b!==I)return y[O]=I,!0}else if(b.equals(I)===!1)return b.copy(I),!0}return!1}function m(A){const g=A.uniforms;let T=0;const y=16;for(let O=0,b=g.length;O<b;O++){const L=Array.isArray(g[O])?g[O]:[g[O]];for(let v=0,P=L.length;v<P;v++){const k=L[v],V=Array.isArray(k.value)?k.value:[k.value];for(let K=0,ee=V.length;K<ee;K++){const W=V[K],se=E(W),X=T%y,_e=X%se.boundary,Ie=X+_e;T+=_e,Ie!==0&&y-Ie<se.storage&&(T+=y-Ie),k.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=se.storage}}}const I=T%y;return I>0&&(T+=y-I),A.__size=T,A.__cache={},this}function E(A){const g={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(g.boundary=4,g.storage=4):A.isVector2?(g.boundary=8,g.storage=8):A.isVector3||A.isColor?(g.boundary=16,g.storage=12):A.isVector4?(g.boundary=16,g.storage=16):A.isMatrix3?(g.boundary=48,g.storage=48):A.isMatrix4?(g.boundary=64,g.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),g}function _(A){const g=A.target;g.removeEventListener("dispose",_);const T=s.indexOf(g.__bindingPointIndex);s.splice(T,1),e.deleteBuffer(r[g.id]),delete r[g.id],delete o[g.id]}function p(){for(const A in r)e.deleteBuffer(r[A]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}class tE{constructor(n={}){const{canvas:t=Cu(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=n;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const m=new Uint32Array(4),E=new Int32Array(4);let _=null,p=null;const A=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=qt,this.toneMappingExposure=1;const T=this;let y=!1,I=0,O=0,b=null,L=-1,v=null;const P=new vn,k=new vn;let V=null;const K=new xe(0);let ee=0,W=t.width,se=t.height,X=1,_e=null,Ie=null;const De=new vn(0,0,W,se),We=new vn(0,0,W,se);let ce=!1;const D=new Ql;let ie=!1,me=!1;this.transmissionResolutionScale=1;const oe=new $e,ye=new $e,Ce=new le,Ue=new vn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function pn(){return b===null?X:1}let N=i;function ut(S,w){return t.getContext(S,w)}try{const S={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){const w="webgl2";if(N=ut(w,S),N===null)throw ut(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ze,Je,Ne,En,Pe,x,R,H,q,Q,Y,Oe,pe,Re,nn,ae,Ae,Fe,He,Se,Qe,Xe,_n,C;function de(){Ze=new d_(N),Ze.init(),Xe=new Ym(N,Ze),Je=new o_(N,Ze,n,Xe),Ne=new Xm(N,Ze),Je.reverseDepthBuffer&&f&&Ne.buffers.depth.setReversed(!0),En=new h_(N),Pe=new Cm,x=new Km(N,Ze,Ne,Pe,Je,Xe,En),R=new a_(T),H=new u_(T),q=new Af(N),_n=new i_(N,q),Q=new f_(N,q,En,_n),Y=new m_(N,Q,q,En),He=new __(N,Je,x),ae=new s_(Pe),Oe=new Nm(T,R,H,Ze,Je,_n,ae),pe=new eE(T,Pe),Re=new wm,nn=new Bm(Ze),Fe=new t_(T,R,H,Ne,Y,h,l),Ae=new Vm(T,Y,Je),C=new nE(N,En,Je,Ne),Se=new r_(N,Ze,En),Qe=new p_(N,Ze,En),En.programs=Oe.programs,T.capabilities=Je,T.extensions=Ze,T.properties=Pe,T.renderLists=Re,T.shadowMap=Ae,T.state=Ne,T.info=En}de();const z=new Jm(T,N);this.xr=z,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Ze.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ze.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(W,se,!1))},this.getSize=function(S){return S.set(W,se)},this.setSize=function(S,w,G=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=S,se=w,t.width=Math.floor(S*X),t.height=Math.floor(w*X),G===!0&&(t.style.width=S+"px",t.style.height=w+"px"),this.setViewport(0,0,S,w)},this.getDrawingBufferSize=function(S){return S.set(W*X,se*X).floor()},this.setDrawingBufferSize=function(S,w,G){W=S,se=w,X=G,t.width=Math.floor(S*G),t.height=Math.floor(w*G),this.setViewport(0,0,S,w)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(De)},this.setViewport=function(S,w,G,B){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,w,G,B),Ne.viewport(P.copy(De).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(We)},this.setScissor=function(S,w,G,B){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,w,G,B),Ne.scissor(k.copy(We).multiplyScalar(X).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(S){Ne.setScissorTest(ce=S)},this.setOpaqueSort=function(S){_e=S},this.setTransparentSort=function(S){Ie=S},this.getClearColor=function(S){return S.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(S=!0,w=!0,G=!0){let B=0;if(S){let F=!1;if(b!==null){const te=b.texture.format;F=te===oc||te===sc||te===ac}if(F){const te=b.texture.type,fe=te===Ai||te===ur||te===Zr||te===cr||te===lc||te===cc,ge=Fe.getClearColor(),ve=Fe.getClearAlpha(),Ge=ge.r,Be=ge.g,be=ge.b;fe?(m[0]=Ge,m[1]=Be,m[2]=be,m[3]=ve,N.clearBufferuiv(N.COLOR,0,m)):(E[0]=Ge,E[1]=Be,E[2]=be,E[3]=ve,N.clearBufferiv(N.COLOR,0,E))}else B|=N.COLOR_BUFFER_BIT}w&&(B|=N.DEPTH_BUFFER_BIT),G&&(B|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Fe.dispose(),Re.dispose(),nn.dispose(),Pe.dispose(),R.dispose(),H.dispose(),Y.dispose(),_n.dispose(),C.dispose(),Oe.dispose(),z.dispose(),z.removeEventListener("sessionstart",Vs),z.removeEventListener("sessionend",zs),ei.stop()};function $(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=En.autoReset,w=Ae.enabled,G=Ae.autoUpdate,B=Ae.needsUpdate,F=Ae.type;de(),En.autoReset=S,Ae.enabled=w,Ae.autoUpdate=G,Ae.needsUpdate=B,Ae.type=F}function he(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){const w=S.target;w.removeEventListener("dispose",Ve),xn(w)}function xn(S){kn(S),Pe.remove(S)}function kn(S){const w=Pe.get(S).programs;w!==void 0&&(w.forEach(function(G){Oe.releaseProgram(G)}),S.isShaderMaterial&&Oe.releaseShaderCache(S))}this.renderBufferDirect=function(S,w,G,B,F,te){w===null&&(w=on);const fe=F.isMesh&&F.matrixWorld.determinant()<0,ge=Lu(S,w,G,B,F);Ne.setMaterial(B,fe);let ve=G.index,Ge=1;if(B.wireframe===!0){if(ve=Q.getWireframeAttribute(G),ve===void 0)return;Ge=2}const Be=G.drawRange,be=G.attributes.position;let tn=Be.start*Ge,ln=(Be.start+Be.count)*Ge;te!==null&&(tn=Math.max(tn,te.start*Ge),ln=Math.min(ln,(te.start+te.count)*Ge)),ve!==null?(tn=Math.max(tn,0),ln=Math.min(ln,ve.count)):be!=null&&(tn=Math.max(tn,0),ln=Math.min(ln,be.count));const Pn=ln-tn;if(Pn<0||Pn===1/0)return;_n.setup(F,B,ge,G,ve);let Mn,sn=Se;if(ve!==null&&(Mn=q.get(ve),sn=Qe,sn.setIndex(Mn)),F.isMesh)B.wireframe===!0?(Ne.setLineWidth(B.wireframeLinewidth*pn()),sn.setMode(N.LINES)):sn.setMode(N.TRIANGLES);else if(F.isLine){let we=B.linewidth;we===void 0&&(we=1),Ne.setLineWidth(we*pn()),F.isLineSegments?sn.setMode(N.LINES):F.isLineLoop?sn.setMode(N.LINE_LOOP):sn.setMode(N.LINE_STRIP)}else F.isPoints?sn.setMode(N.POINTS):F.isSprite&&sn.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)sn.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))sn.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const we=F._multiDrawStarts,Hn=F._multiDrawCounts,cn=F._multiDrawCount,gt=ve?q.get(ve).bytesPerElement:1,Mi=Pe.get(B).currentProgram.getUniforms();for(let it=0;it<cn;it++)Mi.setValue(N,"_gl_DrawID",it),sn.render(we[it]/gt,Hn[it])}else if(F.isInstancedMesh)sn.renderInstances(tn,Pn,F.count);else if(G.isInstancedBufferGeometry){const we=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Hn=Math.min(G.instanceCount,we);sn.renderInstances(tn,Pn,Hn)}else sn.render(tn,Pn)};function dn(S,w,G){S.transparent===!0&&S.side===yt&&S.forceSinglePass===!1?(S.side=at,S.needsUpdate=!0,Pr(S,w,G),S.side=Vi,S.needsUpdate=!0,Pr(S,w,G),S.side=yt):Pr(S,w,G)}this.compile=function(S,w,G=null){G===null&&(G=S),p=nn.get(G),p.init(w),g.push(p),G.traverseVisible(function(F){F.isLight&&F.layers.test(w.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),S!==G&&S.traverseVisible(function(F){F.isLight&&F.layers.test(w.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const B=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const ge=te[fe];dn(ge,G,F),B.add(ge)}else dn(te,G,F),B.add(te)}),g.pop(),p=null,B},this.compileAsync=function(S,w,G=null){const B=this.compile(S,w,G);return new Promise(F=>{function te(){if(B.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){F(S);return}setTimeout(te,10)}Ze.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Tt=null;function wt(S){Tt&&Tt(S)}function Vs(){ei.stop()}function zs(){ei.start()}const ei=new vc;ei.setAnimationLoop(wt),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(S){Tt=S,z.setAnimationLoop(S),S===null?ei.stop():ei.start()},z.addEventListener("sessionstart",Vs),z.addEventListener("sessionend",zs),this.render=function(S,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(w),w=z.getCamera()),S.isScene===!0&&S.onBeforeRender(T,S,w,b),p=nn.get(S,g.length),p.init(w),g.push(p),ye.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),D.setFromProjectionMatrix(ye),me=this.localClippingEnabled,ie=ae.init(this.clippingPlanes,me),_=Re.get(S,A.length),_.init(),A.push(_),z.enabled===!0&&z.isPresenting===!0){const te=T.xr.getDepthSensingMesh();te!==null&&Ao(te,w,-1/0,T.sortObjects)}Ao(S,w,0,T.sortObjects),_.finish(),T.sortObjects===!0&&_.sort(_e,Ie),Ye=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ye&&Fe.addToRenderList(_,S),this.info.render.frame++,ie===!0&&ae.beginShadows();const G=p.state.shadowsArray;Ae.render(G,S,w),ie===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=_.opaque,F=_.transmissive;if(p.setupLights(),w.isArrayCamera){const te=w.cameras;if(F.length>0)for(let fe=0,ge=te.length;fe<ge;fe++){const ve=te[fe];Ks(B,F,S,ve)}Ye&&Fe.render(S);for(let fe=0,ge=te.length;fe<ge;fe++){const ve=te[fe];Xs(_,S,ve,ve.viewport)}}else F.length>0&&Ks(B,F,S,w),Ye&&Fe.render(S),Xs(_,S,w);b!==null&&O===0&&(x.updateMultisampleRenderTarget(b),x.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(T,S,w),_n.resetDefaultState(),L=-1,v=null,g.pop(),g.length>0?(p=g[g.length-1],ie===!0&&ae.setGlobalState(T.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?_=A[A.length-1]:_=null};function Ao(S,w,G,B){if(S.visible===!1)return;if(S.layers.test(w.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(w);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||D.intersectsSprite(S)){B&&Ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ye);const fe=Y.update(S),ge=S.material;ge.visible&&_.push(S,fe,ge,G,Ue.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||D.intersectsObject(S))){const fe=Y.update(S),ge=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ue.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ue.copy(fe.boundingSphere.center)),Ue.applyMatrix4(S.matrixWorld).applyMatrix4(ye)),Array.isArray(ge)){const ve=fe.groups;for(let Ge=0,Be=ve.length;Ge<Be;Ge++){const be=ve[Ge],tn=ge[be.materialIndex];tn&&tn.visible&&_.push(S,fe,tn,G,Ue.z,be)}}else ge.visible&&_.push(S,fe,ge,G,Ue.z,null)}}const te=S.children;for(let fe=0,ge=te.length;fe<ge;fe++)Ao(te[fe],w,G,B)}function Xs(S,w,G,B){const F=S.opaque,te=S.transmissive,fe=S.transparent;p.setupLightsView(G),ie===!0&&ae.setGlobalState(T.clippingPlanes,G),B&&Ne.viewport(P.copy(B)),F.length>0&&Or(F,w,G),te.length>0&&Or(te,w,G),fe.length>0&&Or(fe,w,G),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function Ks(S,w,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new Ri(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?ro:Ai,minFilter:ui,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:un.workingColorSpace}));const te=p.state.transmissionRenderTarget[B.id],fe=B.viewport||P;te.setSize(fe.z*T.transmissionResolutionScale,fe.w*T.transmissionResolutionScale);const ge=T.getRenderTarget();T.setRenderTarget(te),T.getClearColor(K),ee=T.getClearAlpha(),ee<1&&T.setClearColor(16777215,.5),T.clear(),Ye&&Fe.render(G);const ve=T.toneMapping;T.toneMapping=qt;const Ge=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),ie===!0&&ae.setGlobalState(T.clippingPlanes,B),Or(S,G,B),x.updateMultisampleRenderTarget(te),x.updateRenderTargetMipmap(te),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let be=0,tn=w.length;be<tn;be++){const ln=w[be],Pn=ln.object,Mn=ln.geometry,sn=ln.material,we=ln.group;if(sn.side===yt&&Pn.layers.test(B.layers)){const Hn=sn.side;sn.side=at,sn.needsUpdate=!0,Ys(Pn,G,B,Mn,sn,we),sn.side=Hn,sn.needsUpdate=!0,Be=!0}}Be===!0&&(x.updateMultisampleRenderTarget(te),x.updateRenderTargetMipmap(te))}T.setRenderTarget(ge),T.setClearColor(K,ee),Ge!==void 0&&(B.viewport=Ge),T.toneMapping=ve}function Or(S,w,G){const B=w.isScene===!0?w.overrideMaterial:null;for(let F=0,te=S.length;F<te;F++){const fe=S[F],ge=fe.object,ve=fe.geometry,Ge=B===null?fe.material:B,Be=fe.group;ge.layers.test(G.layers)&&Ys(ge,w,G,ve,Ge,Be)}}function Ys(S,w,G,B,F,te){S.onBeforeRender(T,w,G,B,F,te),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(T,w,G,B,S,te),F.transparent===!0&&F.side===yt&&F.forceSinglePass===!1?(F.side=at,F.needsUpdate=!0,T.renderBufferDirect(G,w,B,F,S,te),F.side=Vi,F.needsUpdate=!0,T.renderBufferDirect(G,w,B,F,S,te),F.side=yt):T.renderBufferDirect(G,w,B,F,S,te),S.onAfterRender(T,w,G,B,F,te)}function Pr(S,w,G){w.isScene!==!0&&(w=on);const B=Pe.get(S),F=p.state.lights,te=p.state.shadowsArray,fe=F.state.version,ge=Oe.getParameters(S,F.state,te,w,G),ve=Oe.getProgramCacheKey(ge);let Ge=B.programs;B.environment=S.isMeshStandardMaterial?w.environment:null,B.fog=w.fog,B.envMap=(S.isMeshStandardMaterial?H:R).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?w.environmentRotation:S.envMapRotation,Ge===void 0&&(S.addEventListener("dispose",Ve),Ge=new Map,B.programs=Ge);let Be=Ge.get(ve);if(Be!==void 0){if(B.currentProgram===Be&&B.lightsStateVersion===fe)return qs(S,ge),Be}else ge.uniforms=Oe.getUniforms(S),S.onBeforeCompile(ge,T),Be=Oe.acquireProgram(ge,ve),Ge.set(ve,Be),B.uniforms=ge.uniforms;const be=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(be.clippingPlanes=ae.uniform),qs(S,ge),B.needsLights=Mu(S),B.lightsStateVersion=fe,B.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=Be,B.uniformsList=null,Be}function js(S){if(S.uniformsList===null){const w=S.currentProgram.getUniforms();S.uniformsList=Kr.seqWithValue(w.seq,S.uniforms)}return S.uniformsList}function qs(S,w){const G=Pe.get(S);G.outputColorSpace=w.outputColorSpace,G.batching=w.batching,G.batchingColor=w.batchingColor,G.instancing=w.instancing,G.instancingColor=w.instancingColor,G.instancingMorph=w.instancingMorph,G.skinning=w.skinning,G.morphTargets=w.morphTargets,G.morphNormals=w.morphNormals,G.morphColors=w.morphColors,G.morphTargetsCount=w.morphTargetsCount,G.numClippingPlanes=w.numClippingPlanes,G.numIntersection=w.numClipIntersection,G.vertexAlphas=w.vertexAlphas,G.vertexTangents=w.vertexTangents,G.toneMapping=w.toneMapping}function Lu(S,w,G,B,F){w.isScene!==!0&&(w=on),x.resetTextureUnits();const te=w.fog,fe=B.isMeshStandardMaterial?w.environment:null,ge=b===null?T.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ct,ve=(B.isMeshStandardMaterial?H:R).get(B.envMap||fe),Ge=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Be=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),be=!!G.morphAttributes.position,tn=!!G.morphAttributes.normal,ln=!!G.morphAttributes.color;let Pn=qt;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Pn=T.toneMapping);const Mn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,sn=Mn!==void 0?Mn.length:0,we=Pe.get(B),Hn=p.state.lights;if(ie===!0&&(me===!0||S!==v)){const Xn=S===v&&B.id===L;ae.setState(B,S,Xn)}let cn=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Hn.state.version||we.outputColorSpace!==ge||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==ve||B.fog===!0&&we.fog!==te||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ae.numPlanes||we.numIntersection!==ae.numIntersection)||we.vertexAlphas!==Ge||we.vertexTangents!==Be||we.morphTargets!==be||we.morphNormals!==tn||we.morphColors!==ln||we.toneMapping!==Pn||we.morphTargetsCount!==sn)&&(cn=!0):(cn=!0,we.__version=B.version);let gt=we.currentProgram;cn===!0&&(gt=Pr(B,w,F));let Mi=!1,it=!1,Zi=!1;const An=gt.getUniforms(),dt=we.uniforms;if(Ne.useProgram(gt.program)&&(Mi=!0,it=!0,Zi=!0),B.id!==L&&(L=B.id,it=!0),Mi||v!==S){Ne.buffers.depth.getReversed()?(oe.copy(S.projectionMatrix),wu(oe),Fu(oe),An.setValue(N,"projectionMatrix",oe)):An.setValue(N,"projectionMatrix",S.projectionMatrix),An.setValue(N,"viewMatrix",S.matrixWorldInverse);const Jn=An.map.cameraPosition;Jn!==void 0&&Jn.setValue(N,Ce.setFromMatrixPosition(S.matrixWorld)),Je.logarithmicDepthBuffer&&An.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&An.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,it=!0,Zi=!0)}if(F.isSkinnedMesh){An.setOptional(N,F,"bindMatrix"),An.setOptional(N,F,"bindMatrixInverse");const Xn=F.skeleton;Xn&&(Xn.boneTexture===null&&Xn.computeBoneTexture(),An.setValue(N,"boneTexture",Xn.boneTexture,x))}F.isBatchedMesh&&(An.setOptional(N,F,"batchingTexture"),An.setValue(N,"batchingTexture",F._matricesTexture,x),An.setOptional(N,F,"batchingIdTexture"),An.setValue(N,"batchingIdTexture",F._indirectTexture,x),An.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&An.setValue(N,"batchingColorTexture",F._colorsTexture,x));const ft=G.morphAttributes;if((ft.position!==void 0||ft.normal!==void 0||ft.color!==void 0)&&He.update(F,G,gt),(it||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,An.setValue(N,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(dt.envMap.value=ve,dt.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&w.environment!==null&&(dt.envMapIntensity.value=w.environmentIntensity),it&&(An.setValue(N,"toneMappingExposure",T.toneMappingExposure),we.needsLights&&xu(dt,Zi),te&&B.fog===!0&&pe.refreshFogUniforms(dt,te),pe.refreshMaterialUniforms(dt,B,X,se,p.state.transmissionRenderTarget[S.id]),Kr.upload(N,js(we),dt,x)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Kr.upload(N,js(we),dt,x),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&An.setValue(N,"center",F.center),An.setValue(N,"modelViewMatrix",F.modelViewMatrix),An.setValue(N,"normalMatrix",F.normalMatrix),An.setValue(N,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Xn=B.uniformsGroups;for(let Jn=0,So=Xn.length;Jn<So;Jn++){const ni=Xn[Jn];C.update(ni,gt),C.bind(ni,gt)}}return gt}function xu(S,w){S.ambientLightColor.needsUpdate=w,S.lightProbe.needsUpdate=w,S.directionalLights.needsUpdate=w,S.directionalLightShadows.needsUpdate=w,S.pointLights.needsUpdate=w,S.pointLightShadows.needsUpdate=w,S.spotLights.needsUpdate=w,S.spotLightShadows.needsUpdate=w,S.rectAreaLights.needsUpdate=w,S.hemisphereLights.needsUpdate=w}function Mu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,w,G){Pe.get(S.texture).__webglTexture=w,Pe.get(S.depthTexture).__webglTexture=G;const B=Pe.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=G===void 0,B.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,w){const G=Pe.get(S);G.__webglFramebuffer=w,G.__useDefaultFramebuffer=w===void 0};const yu=N.createFramebuffer();this.setRenderTarget=function(S,w=0,G=0){b=S,I=w,O=G;let B=!0,F=null,te=!1,fe=!1;if(S){const ve=Pe.get(S);if(ve.__useDefaultFramebuffer!==void 0)Ne.bindFramebuffer(N.FRAMEBUFFER,null),B=!1;else if(ve.__webglFramebuffer===void 0)x.setupRenderTarget(S);else if(ve.__hasExternalTextures)x.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const be=S.depthTexture;if(ve.__boundDepthTexture!==be){if(be!==null&&Pe.has(be)&&(S.width!==be.image.width||S.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(S)}}const Ge=S.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(fe=!0);const Be=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Be[w])?F=Be[w][G]:F=Be[w],te=!0):S.samples>0&&x.useMultisampledRTT(S)===!1?F=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[G]:F=Be,P.copy(S.viewport),k.copy(S.scissor),V=S.scissorTest}else P.copy(De).multiplyScalar(X).floor(),k.copy(We).multiplyScalar(X).floor(),V=ce;if(G!==0&&(F=yu),Ne.bindFramebuffer(N.FRAMEBUFFER,F)&&B&&Ne.drawBuffers(S,F),Ne.viewport(P),Ne.scissor(k),Ne.setScissorTest(V),te){const ve=Pe.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+w,ve.__webglTexture,G)}else if(fe){const ve=Pe.get(S.texture),Ge=w;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ve.__webglTexture,G,Ge)}else if(S!==null&&G!==0){const ve=Pe.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ve.__webglTexture,G)}L=-1},this.readRenderTargetPixels=function(S,w,G,B,F,te,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){Ne.bindFramebuffer(N.FRAMEBUFFER,ge);try{const ve=S.texture,Ge=ve.format,Be=ve.type;if(!Je.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=S.width-B&&G>=0&&G<=S.height-F&&N.readPixels(w,G,B,F,Xe.convert(Ge),Xe.convert(Be),te)}finally{const ve=b!==null?Pe.get(b).__webglFramebuffer:null;Ne.bindFramebuffer(N.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(S,w,G,B,F,te,fe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(ge=ge[fe]),ge){const ve=S.texture,Ge=ve.format,Be=ve.type;if(!Je.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=S.width-B&&G>=0&&G<=S.height-F){Ne.bindFramebuffer(N.FRAMEBUFFER,ge);const be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.bufferData(N.PIXEL_PACK_BUFFER,te.byteLength,N.STREAM_READ),N.readPixels(w,G,B,F,Xe.convert(Ge),Xe.convert(Be),0);const tn=b!==null?Pe.get(b).__webglFramebuffer:null;Ne.bindFramebuffer(N.FRAMEBUFFER,tn);const ln=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Du(N,ln,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,te),N.deleteBuffer(be),N.deleteSync(ln),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,w=null,G=0){S.isTexture!==!0&&(Pi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,S=arguments[1]);const B=Math.pow(2,-G),F=Math.floor(S.image.width*B),te=Math.floor(S.image.height*B),fe=w!==null?w.x:0,ge=w!==null?w.y:0;x.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,fe,ge,F,te),Ne.unbindTexture()};const Iu=N.createFramebuffer(),Ou=N.createFramebuffer();this.copyTextureToTexture=function(S,w,G=null,B=null,F=0,te=null){S.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],w=arguments[2],te=arguments[3]||0,G=null),te===null&&(F!==0?(Pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let fe,ge,ve,Ge,Be,be,tn,ln,Pn;const Mn=S.isCompressedTexture?S.mipmaps[te]:S.image;if(G!==null)fe=G.max.x-G.min.x,ge=G.max.y-G.min.y,ve=G.isBox3?G.max.z-G.min.z:1,Ge=G.min.x,Be=G.min.y,be=G.isBox3?G.min.z:0;else{const ft=Math.pow(2,-F);fe=Math.floor(Mn.width*ft),ge=Math.floor(Mn.height*ft),S.isDataArrayTexture?ve=Mn.depth:S.isData3DTexture?ve=Math.floor(Mn.depth*ft):ve=1,Ge=0,Be=0,be=0}B!==null?(tn=B.x,ln=B.y,Pn=B.z):(tn=0,ln=0,Pn=0);const sn=Xe.convert(w.format),we=Xe.convert(w.type);let Hn;w.isData3DTexture?(x.setTexture3D(w,0),Hn=N.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(x.setTexture2DArray(w,0),Hn=N.TEXTURE_2D_ARRAY):(x.setTexture2D(w,0),Hn=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,w.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,w.unpackAlignment);const cn=N.getParameter(N.UNPACK_ROW_LENGTH),gt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Mi=N.getParameter(N.UNPACK_SKIP_PIXELS),it=N.getParameter(N.UNPACK_SKIP_ROWS),Zi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mn.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mn.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Be),N.pixelStorei(N.UNPACK_SKIP_IMAGES,be);const An=S.isDataArrayTexture||S.isData3DTexture,dt=w.isDataArrayTexture||w.isData3DTexture;if(S.isDepthTexture){const ft=Pe.get(S),Xn=Pe.get(w),Jn=Pe.get(ft.__renderTarget),So=Pe.get(Xn.__renderTarget);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,Jn.__webglFramebuffer),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,So.__webglFramebuffer);for(let ni=0;ni<ve;ni++)An&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(S).__webglTexture,F,be+ni),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(w).__webglTexture,te,Pn+ni)),N.blitFramebuffer(Ge,Be,fe,ge,tn,ln,fe,ge,N.DEPTH_BUFFER_BIT,N.NEAREST);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(F!==0||S.isRenderTargetTexture||Pe.has(S)){const ft=Pe.get(S),Xn=Pe.get(w);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,Iu),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ou);for(let Jn=0;Jn<ve;Jn++)An?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ft.__webglTexture,F,be+Jn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ft.__webglTexture,F),dt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xn.__webglTexture,te,Pn+Jn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xn.__webglTexture,te),F!==0?N.blitFramebuffer(Ge,Be,fe,ge,tn,ln,fe,ge,N.COLOR_BUFFER_BIT,N.NEAREST):dt?N.copyTexSubImage3D(Hn,te,tn,ln,Pn+Jn,Ge,Be,fe,ge):N.copyTexSubImage2D(Hn,te,tn,ln,Ge,Be,fe,ge);Ne.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else dt?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Hn,te,tn,ln,Pn,fe,ge,ve,sn,we,Mn.data):w.isCompressedArrayTexture?N.compressedTexSubImage3D(Hn,te,tn,ln,Pn,fe,ge,ve,sn,Mn.data):N.texSubImage3D(Hn,te,tn,ln,Pn,fe,ge,ve,sn,we,Mn):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,te,tn,ln,fe,ge,sn,we,Mn.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,te,tn,ln,Mn.width,Mn.height,sn,Mn.data):N.texSubImage2D(N.TEXTURE_2D,te,tn,ln,fe,ge,sn,we,Mn);N.pixelStorei(N.UNPACK_ROW_LENGTH,cn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,gt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mi),N.pixelStorei(N.UNPACK_SKIP_ROWS,it),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Zi),te===0&&w.generateMipmaps&&N.generateMipmap(Hn),Ne.unbindTexture()},this.copyTextureToTexture3D=function(S,w,G=null,B=null,F=0){return S.isTexture!==!0&&(Pi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,B=arguments[1]||null,S=arguments[2],w=arguments[3],F=arguments[4]||0),Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,w,G,B,F)},this.initRenderTarget=function(S){Pe.get(S).__webglFramebuffer===void 0&&x.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?x.setTextureCube(S,0):S.isData3DTexture?x.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?x.setTexture2DArray(S,0):x.setTexture2D(S,0),Ne.unbindTexture()},this.resetState=function(){I=0,O=0,b=null,Ne.reset(),_n.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Uu}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=un._getDrawingBufferColorSpace(n),t.unpackColorSpace=un._getUnpackColorSpace()}}function Ic(e,n,t){const i=t.length-e-1;if(n>=t[i])return i-1;if(n<=t[e])return e;let r=e,o=i,s=Math.floor((r+o)/2);for(;n<t[s]||n>=t[s+1];)n<t[s]?o=s:r=s,s=Math.floor((r+o)/2);return s}function iE(e,n,t,i){const r=[],o=[],s=[];r[0]=1;for(let a=1;a<=t;++a){o[a]=n-i[e+1-a],s[a]=i[e+a]-n;let l=0;for(let c=0;c<a;++c){const d=s[c+1],u=o[a-c],f=r[c]/(d+u);r[c]=l+d*f,l=u*f}r[a]=l}return r}function rE(e,n,t,i){const r=Ic(e,i,n),o=iE(r,i,e,n),s=new vn(0,0,0,0);for(let a=0;a<=e;++a){const l=t[r-e+a],c=o[a],d=l.w*c;s.x+=l.x*d,s.y+=l.y*d,s.z+=l.z*d,s.w+=l.w*c}return s}function oE(e,n,t,i,r){const o=[];for(let u=0;u<=t;++u)o[u]=0;const s=[];for(let u=0;u<=i;++u)s[u]=o.slice(0);const a=[];for(let u=0;u<=t;++u)a[u]=o.slice(0);a[0][0]=1;const l=o.slice(0),c=o.slice(0);for(let u=1;u<=t;++u){l[u]=n-r[e+1-u],c[u]=r[e+u]-n;let f=0;for(let h=0;h<u;++h){const m=c[h+1],E=l[u-h];a[u][h]=m+E;const _=a[h][u-1]/a[u][h];a[h][u]=f+m*_,f=E*_}a[u][u]=f}for(let u=0;u<=t;++u)s[0][u]=a[u][t];for(let u=0;u<=t;++u){let f=0,h=1;const m=[];for(let E=0;E<=t;++E)m[E]=o.slice(0);m[0][0]=1;for(let E=1;E<=i;++E){let _=0;const p=u-E,A=t-E;u>=E&&(m[h][0]=m[f][0]/a[A+1][p],_=m[h][0]*a[p][A]);const g=p>=-1?1:-p,T=u-1<=A?E-1:t-u;for(let I=g;I<=T;++I)m[h][I]=(m[f][I]-m[f][I-1])/a[A+1][p+I],_+=m[h][I]*a[p+I][A];u<=A&&(m[h][E]=-m[f][E-1]/a[A+1][u],_+=m[h][E]*a[u][A]),s[E][u]=_;const y=f;f=h,h=y}}let d=t;for(let u=1;u<=i;++u){for(let f=0;f<=t;++f)s[u][f]*=d;d*=t-u}return s}function sE(e,n,t,i,r){const o=r<e?r:e,s=[],a=Ic(e,i,n),l=oE(a,i,e,o,n),c=[];for(let d=0;d<t.length;++d){const u=t[d].clone(),f=u.w;u.x*=f,u.y*=f,u.z*=f,c[d]=u}for(let d=0;d<=o;++d){const u=c[a-e].clone().multiplyScalar(l[d][0]);for(let f=1;f<=e;++f)u.add(c[a-e+f].clone().multiplyScalar(l[d][f]));s[d]=u}for(let d=o+1;d<=r+1;++d)s[d]=new vn(0,0,0);return s}function aE(e,n){let t=1;for(let r=2;r<=e;++r)t*=r;let i=1;for(let r=2;r<=n;++r)i*=r;for(let r=2;r<=e-n;++r)i*=r;return t/i}function lE(e){const n=e.length,t=[],i=[];for(let o=0;o<n;++o){const s=e[o];t[o]=new le(s.x,s.y,s.z),i[o]=s.w}const r=[];for(let o=0;o<n;++o){const s=t[o].clone();for(let a=1;a<=o;++a)s.sub(r[o-a].clone().multiplyScalar(aE(o,a)*i[a]));r[o]=s.divideScalar(i[0])}return r}function cE(e,n,t,i,r){const o=sE(e,n,t,i,r);return lE(o)}class uE extends $d{constructor(n,t,i,r,o){super();const s=t?t.length-1:0,a=i?i.length:0;this.degree=n,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=o||s;for(let l=0;l<a;++l){const c=i[l];this.controlPoints[l]=new vn(c.x,c.y,c.z,c.w)}}getPoint(n,t=new le){const i=t,r=this.knots[this.startKnot]+n*(this.knots[this.endKnot]-this.knots[this.startKnot]),o=rE(this.degree,this.knots,this.controlPoints,r);return o.w!==1&&o.divideScalar(o.w),i.set(o.x,o.y,o.z)}getTangent(n,t=new le){const i=t,r=this.knots[0]+n*(this.knots[this.knots.length-1]-this.knots[0]),o=cE(this.degree,this.knots,this.controlPoints,r,1);return i.copy(o[1]).normalize(),i}toJSON(){const n=super.toJSON();return n.degree=this.degree,n.knots=[...this.knots],n.controlPoints=this.controlPoints.map(t=>t.toArray()),n.startKnot=this.startKnot,n.endKnot=this.endKnot,n}fromJSON(n){return super.fromJSON(n),this.degree=n.degree,this.knots=[...n.knots],this.controlPoints=n.controlPoints.map(t=>new vn(t[0],t[1],t[2],t[3])),this.startKnot=n.startKnot,this.endKnot=n.endKnot,this}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Et=Uint8Array,wi=Uint16Array,dE=Int32Array,Oc=new Et([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Pc=new Et([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),fE=new Et([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Nc=function(e,n){for(var t=new wi(31),i=0;i<31;++i)t[i]=n+=1<<e[i-1];for(var r=new dE(t[30]),i=1;i<30;++i)for(var o=t[i];o<t[i+1];++o)r[o]=o-t[i]<<5|i;return{b:t,r}},Cc=Nc(Oc,2),bc=Cc.b,pE=Cc.r;bc[28]=258,pE[258]=28;var hE=Nc(Pc,0),_E=hE.b,us=new wi(32768);for(var Rn=0;Rn<32768;++Rn){var kt=(Rn&43690)>>1|(Rn&21845)<<1;kt=(kt&52428)>>2|(kt&13107)<<2,kt=(kt&61680)>>4|(kt&3855)<<4,us[Rn]=((kt&65280)>>8|(kt&255)<<8)>>1}var sr=function(e,n,t){for(var i=e.length,r=0,o=new wi(n);r<i;++r)e[r]&&++o[e[r]-1];var s=new wi(n);for(r=1;r<n;++r)s[r]=s[r-1]+o[r-1]<<1;var a;if(t){a=new wi(1<<n);var l=15-n;for(r=0;r<i;++r)if(e[r])for(var c=r<<4|e[r],d=n-e[r],u=s[e[r]-1]++<<d,f=u|(1<<d)-1;u<=f;++u)a[us[u]>>l]=c}else for(a=new wi(i),r=0;r<i;++r)e[r]&&(a[r]=us[s[e[r]-1]++]>>15-e[r]);return a},vr=new Et(288);for(var Rn=0;Rn<144;++Rn)vr[Rn]=8;for(var Rn=144;Rn<256;++Rn)vr[Rn]=9;for(var Rn=256;Rn<280;++Rn)vr[Rn]=7;for(var Rn=280;Rn<288;++Rn)vr[Rn]=8;var wc=new Et(32);for(var Rn=0;Rn<32;++Rn)wc[Rn]=5;var mE=sr(vr,9,1),EE=sr(wc,5,1),Do=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},Rt=function(e,n,t){var i=n/8|0;return(e[i]|e[i+1]<<8)>>(n&7)&t},Uo=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},TE=function(e){return(e+7)/8|0},gE=function(e,n,t){return(t==null||t>e.length)&&(t=e.length),new Et(e.subarray(n,t))},RE=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],St=function(e,n,t){var i=new Error(n||RE[e]);if(i.code=e,Error.captureStackTrace&&Error.captureStackTrace(i,St),!t)throw i;return i},AE=function(e,n,t,i){var r=e.length,o=0;if(!r||n.f&&!n.l)return t||new Et(0);var s=!t,a=s||n.i!=2,l=n.i;s&&(t=new Et(r*3));var c=function(on){var Ye=t.length;if(on>Ye){var pn=new Et(Math.max(Ye*2,on));pn.set(t),t=pn}},d=n.f||0,u=n.p||0,f=n.b||0,h=n.l,m=n.d,E=n.m,_=n.n,p=r*8;do{if(!h){d=Rt(e,u,1);var A=Rt(e,u+1,3);if(u+=3,A)if(A==1)h=mE,m=EE,E=9,_=5;else if(A==2){var I=Rt(e,u,31)+257,O=Rt(e,u+10,15)+4,b=I+Rt(e,u+5,31)+1;u+=14;for(var L=new Et(b),v=new Et(19),P=0;P<O;++P)v[fE[P]]=Rt(e,u+P*3,7);u+=O*3;for(var k=Do(v),V=(1<<k)-1,K=sr(v,k,1),P=0;P<b;){var ee=K[Rt(e,u,V)];u+=ee&15;var g=ee>>4;if(g<16)L[P++]=g;else{var W=0,se=0;for(g==16?(se=3+Rt(e,u,3),u+=2,W=L[P-1]):g==17?(se=3+Rt(e,u,7),u+=3):g==18&&(se=11+Rt(e,u,127),u+=7);se--;)L[P++]=W}}var X=L.subarray(0,I),_e=L.subarray(I);E=Do(X),_=Do(_e),h=sr(X,E,1),m=sr(_e,_,1)}else St(1);else{var g=TE(u)+4,T=e[g-4]|e[g-3]<<8,y=g+T;if(y>r){l&&St(0);break}a&&c(f+T),t.set(e.subarray(g,y),f),n.b=f+=T,n.p=u=y*8,n.f=d;continue}if(u>p){l&&St(0);break}}a&&c(f+131072);for(var Ie=(1<<E)-1,De=(1<<_)-1,We=u;;We=u){var W=h[Uo(e,u)&Ie],ce=W>>4;if(u+=W&15,u>p){l&&St(0);break}if(W||St(2),ce<256)t[f++]=ce;else if(ce==256){We=u,h=null;break}else{var D=ce-254;if(ce>264){var P=ce-257,ie=Oc[P];D=Rt(e,u,(1<<ie)-1)+bc[P],u+=ie}var me=m[Uo(e,u)&De],oe=me>>4;me||St(3),u+=me&15;var _e=_E[oe];if(oe>3){var ie=Pc[oe];_e+=Uo(e,u)&(1<<ie)-1,u+=ie}if(u>p){l&&St(0);break}a&&c(f+131072);var ye=f+D;if(f<_e){var Ce=o-_e,Ue=Math.min(_e,ye);for(Ce+f<0&&St(3);f<Ue;++f)t[f]=i[Ce+f]}for(;f<ye;++f)t[f]=t[f-_e]}}n.l=h,n.p=We,n.b=f,n.f=d,h&&(d=1,n.m=E,n.d=m,n.n=_)}while(!d);return f!=t.length&&s?gE(t,0,f):t.subarray(0,f)},SE=new Et(0),vE=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&St(6,"invalid zlib data"),(e[1]>>5&1)==1&&St(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function LE(e,n){return AE(e.subarray(vE(e),-4),{i:2},n,n)}var xE=typeof TextDecoder<"u"&&new TextDecoder,ME=0;try{xE.decode(SE,{stream:!0}),ME=1}catch{}function yE(e,n=!1){const t=e[0].index!==null,i=new Set(Object.keys(e[0].attributes)),r=new Set(Object.keys(e[0].morphAttributes)),o={},s={},a=e[0].morphTargetsRelative,l=new $n;let c=0;for(let d=0;d<e.length;++d){const u=e[d];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in u.attributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;o[h]===void 0&&(o[h]=[]),o[h].push(u.attributes[h]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in u.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;s[h]===void 0&&(s[h]=[]),s[h].push(u.morphAttributes[h])}if(n){let h;if(t)h=u.index.count;else if(u.attributes.position!==void 0)h=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,d),c+=h}}if(t){let d=0;const u=[];for(let f=0;f<e.length;++f){const h=e[f].index;for(let m=0;m<h.count;++m)u.push(h.getX(m)+d);d+=e[f].attributes.position.count}l.setIndex(u)}for(const d in o){const u=nl(o[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(const d in s){const u=s[d][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let f=0;f<u;++f){const h=[];for(let E=0;E<s[d].length;++E)h.push(s[d][E][f]);const m=nl(h);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(m)}}return l}function nl(e){let n,t,i,r=-1,o=0;for(let c=0;c<e.length;++c){const d=e[c];if(n===void 0&&(n=d.array.constructor),n!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=d.normalized),i!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=d.count*t}const s=new n(o),a=new lt(s,t,i);let l=0;for(let c=0;c<e.length;++c){const d=e[c];if(d.isInterleavedBufferAttribute){const u=l/t;for(let f=0,h=d.count;f<h;f++)for(let m=0;m<t;m++){const E=d.getComponent(f,m);a.setComponent(f+u,m,E)}}else s.set(d.array,l);l+=d.count*t}return r!==void 0&&(a.gpuType=r),a}function tl(e,n){if(n===Zd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(n===os||n===hc){let t=e.getIndex();if(t===null){const s=[],a=e.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)s.push(l);e.setIndex(s),t=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const i=t.count-2,r=[];if(n===os)for(let s=1;s<=i;s++)r.push(t.getX(0)),r.push(t.getX(s)),r.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(r.push(t.getX(s)),r.push(t.getX(s+1)),r.push(t.getX(s+2))):(r.push(t.getX(s+2)),r.push(t.getX(s+1)),r.push(t.getX(s)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=e.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",n),e}const il=new ao,wr=new le;class Fc extends Jd{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const n=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new mt(n,3)),this.setAttribute("uv",new mt(t,2))}applyMatrix4(n){const t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(n),i.applyMatrix4(n),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(n){let t;n instanceof Float32Array?t=n:Array.isArray(n)&&(t=new Float32Array(n));const i=new ss(t,6,1);return this.setAttribute("instanceStart",new fi(i,3,0)),this.setAttribute("instanceEnd",new fi(i,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(n){let t;n instanceof Float32Array?t=n:Array.isArray(n)&&(t=new Float32Array(n));const i=new ss(t,6,1);return this.setAttribute("instanceColorStart",new fi(i,3,0)),this.setAttribute("instanceColorEnd",new fi(i,3,3)),this}fromWireframeGeometry(n){return this.setPositions(n.attributes.position.array),this}fromEdgesGeometry(n){return this.setPositions(n.attributes.position.array),this}fromMesh(n){return this.fromWireframeGeometry(new _c(n.geometry)),this}fromLineSegments(n){const t=n.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const n=this.attributes.instanceStart,t=this.attributes.instanceEnd;n!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(n),il.setFromBufferAttribute(t),this.boundingBox.union(il))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys),this.boundingBox===null&&this.computeBoundingBox();const n=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(n!==void 0&&t!==void 0){const i=this.boundingSphere.center;this.boundingBox.getCenter(i);let r=0;for(let o=0,s=n.count;o<s;o++)wr.fromBufferAttribute(n,o),r=Math.max(r,i.distanceToSquared(wr)),wr.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(wr));this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(n){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(n)}}ue.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Un(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};tt.line={uniforms:so.merge([ue.common,ue.fog,ue.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Dc extends Wt{constructor(n){super({type:"LineMaterial",uniforms:so.clone(tt.line.uniforms),vertexShader:tt.line.vertexShader,fragmentShader:tt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(n)}get color(){return this.uniforms.diffuse.value}set color(n){this.uniforms.diffuse.value=n}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(n){this.uniforms.linewidth&&(this.uniforms.linewidth.value=n)}get dashed(){return"USE_DASH"in this.defines}set dashed(n){n===!0!==this.dashed&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(n){this.uniforms.dashScale.value=n}get dashSize(){return this.uniforms.dashSize.value}set dashSize(n){this.uniforms.dashSize.value=n}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(n){this.uniforms.dashOffset.value=n}get gapSize(){return this.uniforms.gapSize.value}set gapSize(n){this.uniforms.gapSize.value=n}get opacity(){return this.uniforms.opacity.value}set opacity(n){this.uniforms&&(this.uniforms.opacity.value=n)}get resolution(){return this.uniforms.resolution.value}set resolution(n){this.uniforms.resolution.value.copy(n)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(n){this.defines&&(n===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),n===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Ho=new vn,rl=new le,ol=new le,Gn=new vn,Bn=new vn,Lt=new vn,Go=new le,Bo=new $e,Wn=new Qd,sl=new le,Fr=new ao,Dr=new ys,xt=new vn;let It,mi;function al(e,n,t){return xt.set(0,0,-n,1).applyMatrix4(e.projectionMatrix),xt.multiplyScalar(1/xt.w),xt.x=mi/t.width,xt.y=mi/t.height,xt.applyMatrix4(e.projectionMatrixInverse),xt.multiplyScalar(1/xt.w),Math.abs(Math.max(xt.x,xt.y))}function IE(e,n){const t=e.matrixWorld,i=e.geometry,r=i.attributes.instanceStart,o=i.attributes.instanceEnd,s=Math.min(i.instanceCount,r.count);for(let a=0,l=s;a<l;a++){Wn.start.fromBufferAttribute(r,a),Wn.end.fromBufferAttribute(o,a),Wn.applyMatrix4(t);const c=new le,d=new le;It.distanceSqToSegment(Wn.start,Wn.end,d,c),d.distanceTo(c)<mi*.5&&n.push({point:d,pointOnLine:c,distance:It.origin.distanceTo(d),object:e,face:null,faceIndex:a,uv:null,uv1:null})}}function OE(e,n,t){const i=n.projectionMatrix,o=e.material.resolution,s=e.matrixWorld,a=e.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,d=Math.min(a.instanceCount,l.count),u=-n.near;It.at(1,Lt),Lt.w=1,Lt.applyMatrix4(n.matrixWorldInverse),Lt.applyMatrix4(i),Lt.multiplyScalar(1/Lt.w),Lt.x*=o.x/2,Lt.y*=o.y/2,Lt.z=0,Go.copy(Lt),Bo.multiplyMatrices(n.matrixWorldInverse,s);for(let f=0,h=d;f<h;f++){if(Gn.fromBufferAttribute(l,f),Bn.fromBufferAttribute(c,f),Gn.w=1,Bn.w=1,Gn.applyMatrix4(Bo),Bn.applyMatrix4(Bo),Gn.z>u&&Bn.z>u)continue;if(Gn.z>u){const g=Gn.z-Bn.z,T=(Gn.z-u)/g;Gn.lerp(Bn,T)}else if(Bn.z>u){const g=Bn.z-Gn.z,T=(Bn.z-u)/g;Bn.lerp(Gn,T)}Gn.applyMatrix4(i),Bn.applyMatrix4(i),Gn.multiplyScalar(1/Gn.w),Bn.multiplyScalar(1/Bn.w),Gn.x*=o.x/2,Gn.y*=o.y/2,Bn.x*=o.x/2,Bn.y*=o.y/2,Wn.start.copy(Gn),Wn.start.z=0,Wn.end.copy(Bn),Wn.end.z=0;const E=Wn.closestPointToPointParameter(Go,!0);Wn.at(E,sl);const _=bn.lerp(Gn.z,Bn.z,E),p=_>=-1&&_<=1,A=Go.distanceTo(sl)<mi*.5;if(p&&A){Wn.start.fromBufferAttribute(l,f),Wn.end.fromBufferAttribute(c,f),Wn.start.applyMatrix4(s),Wn.end.applyMatrix4(s);const g=new le,T=new le;It.distanceSqToSegment(Wn.start,Wn.end,T,g),t.push({point:T,pointOnLine:g,distance:It.origin.distanceTo(T),object:e,face:null,faceIndex:f,uv:null,uv1:null})}}}class PE extends mn{constructor(n=new Fc,t=new Dc({color:Math.random()*16777215})){super(n,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const n=this.geometry,t=n.attributes.instanceStart,i=n.attributes.instanceEnd,r=new Float32Array(2*t.count);for(let s=0,a=0,l=t.count;s<l;s++,a+=2)rl.fromBufferAttribute(t,s),ol.fromBufferAttribute(i,s),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+rl.distanceTo(ol);const o=new ss(r,2,1);return n.setAttribute("instanceDistanceStart",new fi(o,1,0)),n.setAttribute("instanceDistanceEnd",new fi(o,1,1)),this}raycast(n,t){const i=this.material.worldUnits,r=n.camera;r===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=n.params.Line2!==void 0&&n.params.Line2.threshold||0;It=n.ray;const s=this.matrixWorld,a=this.geometry,l=this.material;mi=l.linewidth+o,a.boundingSphere===null&&a.computeBoundingSphere(),Dr.copy(a.boundingSphere).applyMatrix4(s);let c;if(i)c=mi*.5;else{const u=Math.max(r.near,Dr.distanceToPoint(It.origin));c=al(r,u,l.resolution)}if(Dr.radius+=c,It.intersectsSphere(Dr)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Fr.copy(a.boundingBox).applyMatrix4(s);let d;if(i)d=mi*.5;else{const u=Math.max(r.near,Fr.distanceToPoint(It.origin));d=al(r,u,l.resolution)}Fr.expandByScalar(d),It.intersectsBox(Fr)!==!1&&(i?IE(this,t):OE(this,r,t))}onBeforeRender(n){const t=this.material.uniforms;t&&t.resolution&&(n.getViewport(Ho),this.material.uniforms.resolution.value.set(Ho.z,Ho.w))}}class NE extends pr{constructor(n){super(n),this.animateBonePositions=!0,this.animateBoneRotations=!0}load(n,t,i,r){const o=this,s=new lo(o.manager);s.setPath(o.path),s.setRequestHeader(o.requestHeader),s.setWithCredentials(o.withCredentials),s.load(n,function(a){try{t(o.parse(a))}catch(l){r?r(l):console.error(l),o.manager.itemError(n)}},i,r)}parse(n){function t(h){a(h)!=="HIERARCHY"&&console.error("THREE.BVHLoader: HIERARCHY expected.");const m=[],E=r(h,a(h),m);a(h)!=="MOTION"&&console.error("THREE.BVHLoader: MOTION expected.");let _=a(h).split(/[\s]+/);const p=parseInt(_[1]);isNaN(p)&&console.error("THREE.BVHLoader: Failed to read number of frames."),_=a(h).split(/[\s]+/);const A=parseFloat(_[2]);isNaN(A)&&console.error("THREE.BVHLoader: Failed to read frame time.");for(let g=0;g<p;g++)_=a(h).split(/[\s]+/),i(_,g*A,E);return m}function i(h,m,E){if(E.type==="ENDSITE")return;const _={time:m,position:new le,rotation:new ot};E.frames.push(_);const p=new ot,A=new le(1,0,0),g=new le(0,1,0),T=new le(0,0,1);for(let y=0;y<E.channels.length;y++)switch(E.channels[y]){case"Xposition":_.position.x=parseFloat(h.shift().trim());break;case"Yposition":_.position.y=parseFloat(h.shift().trim());break;case"Zposition":_.position.z=parseFloat(h.shift().trim());break;case"Xrotation":p.setFromAxisAngle(A,parseFloat(h.shift().trim())*Math.PI/180),_.rotation.multiply(p);break;case"Yrotation":p.setFromAxisAngle(g,parseFloat(h.shift().trim())*Math.PI/180),_.rotation.multiply(p);break;case"Zrotation":p.setFromAxisAngle(T,parseFloat(h.shift().trim())*Math.PI/180),_.rotation.multiply(p);break;default:console.warn("THREE.BVHLoader: Invalid channel type.")}for(let y=0;y<E.children.length;y++)i(h,m,E.children[y])}function r(h,m,E){const _={name:"",type:"",frames:[]};E.push(_);let p=m.split(/[\s]+/);p[0].toUpperCase()==="END"&&p[1].toUpperCase()==="SITE"?(_.type="ENDSITE",_.name="ENDSITE"):(_.name=p[1],_.type=p[0].toUpperCase()),a(h)!=="{"&&console.error("THREE.BVHLoader: Expected opening { after type & name"),p=a(h).split(/[\s]+/),p[0]!=="OFFSET"&&console.error("THREE.BVHLoader: Expected OFFSET but got: "+p[0]),p.length!==4&&console.error("THREE.BVHLoader: Invalid number of values for OFFSET.");const A=new le(parseFloat(p[1]),parseFloat(p[2]),parseFloat(p[3]));if((isNaN(A.x)||isNaN(A.y)||isNaN(A.z))&&console.error("THREE.BVHLoader: Invalid values of OFFSET."),_.offset=A,_.type!=="ENDSITE"){p=a(h).split(/[\s]+/),p[0]!=="CHANNELS"&&console.error("THREE.BVHLoader: Expected CHANNELS definition.");const g=parseInt(p[1]);_.channels=p.splice(2,g),_.children=[]}for(;;){const g=a(h);if(g==="}")return _;_.children.push(r(h,g,E))}}function o(h,m){const E=new hr;if(m.push(E),E.position.add(h.offset),E.name=h.name,h.type!=="ENDSITE")for(let _=0;_<h.children.length;_++)E.add(o(h.children[_],m));return E}function s(h){const m=[];for(let E=0;E<h.length;E++){const _=h[E];if(_.type==="ENDSITE")continue;const p=[],A=[],g=[];for(let T=0;T<_.frames.length;T++){const y=_.frames[T];p.push(y.time),A.push(y.position.x+_.offset.x),A.push(y.position.y+_.offset.y),A.push(y.position.z+_.offset.z),g.push(y.rotation.x),g.push(y.rotation.y),g.push(y.rotation.z),g.push(y.rotation.w)}l.animateBonePositions&&m.push(new _r(_.name+".position",p,A)),l.animateBoneRotations&&m.push(new Ki(_.name+".quaternion",p,g))}return new uo("animation",-1,m)}function a(h){let m;for(;(m=h.shift().trim()).length===0;);return m}const l=this,c=n.split(/[\r\n]+/g),d=t(c),u=[];o(d[0],u);const f=s(d);return{skeleton:new co(u),clip:f}}}let je,In,Kn;class CE extends pr{constructor(n){super(n)}load(n,t,i,r){const o=this,s=o.path===""?Di.extractUrlBase(n):o.path,a=new lo(this.manager);a.setPath(o.path),a.setResponseType("arraybuffer"),a.setRequestHeader(o.requestHeader),a.setWithCredentials(o.withCredentials),a.load(n,function(l){try{t(o.parse(l,s))}catch(c){r?r(c):console.error(c),o.manager.itemError(n)}},i,r)}parse(n,t){if(HE(n))je=new UE().parse(n);else{const r=Gc(n);if(!GE(r))throw new Error("THREE.FBXLoader: Unknown format.");if(cl(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+cl(r));je=new DE().parse(r)}const i=new Is(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new bE(i,this.manager).parse(je)}}class bE{constructor(n,t){this.textureLoader=n,this.manager=t}parse(){In=this.parseConnections();const n=this.parseImages(),t=this.parseTextures(n),i=this.parseMaterials(t),r=this.parseDeformers(),o=new wE().parse(r);return this.parseScene(r,o,i),Kn}parseConnections(){const n=new Map;return"Connections"in je&&je.Connections.connections.forEach(function(i){const r=i[0],o=i[1],s=i[2];n.has(r)||n.set(r,{parents:[],children:[]});const a={ID:o,relationship:s};n.get(r).parents.push(a),n.has(o)||n.set(o,{parents:[],children:[]});const l={ID:r,relationship:s};n.get(o).children.push(l)}),n}parseImages(){const n={},t={};if("Video"in je.Objects){const i=je.Objects.Video;for(const r in i){const o=i[r],s=parseInt(r);if(n[s]=o.RelativeFilename||o.Filename,"Content"in o){const a=o.Content instanceof ArrayBuffer&&o.Content.byteLength>0,l=typeof o.Content=="string"&&o.Content!=="";if(a||l){const c=this.parseImage(i[r]);t[o.RelativeFilename||o.Filename]=c}}}}for(const i in n){const r=n[i];t[r]!==void 0?n[i]=t[r]:n[i]=n[i].split("\\").pop()}return n}parseImage(n){const t=n.Content,i=n.RelativeFilename||n.Filename,r=i.slice(i.lastIndexOf(".")+1).toLowerCase();let o;switch(r){case"bmp":o="image/bmp";break;case"jpg":case"jpeg":o="image/jpeg";break;case"png":o="image/png";break;case"tif":o="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),o="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+o+";base64,"+t;{const s=new Uint8Array(t);return window.URL.createObjectURL(new Blob([s],{type:o}))}}parseTextures(n){const t=new Map;if("Texture"in je.Objects){const i=je.Objects.Texture;for(const r in i){const o=this.parseTexture(i[r],n);t.set(parseInt(r),o)}}return t}parseTexture(n,t){const i=this.loadTexture(n,t);i.ID=n.id,i.name=n.attrName;const r=n.WrapModeU,o=n.WrapModeV,s=r!==void 0?r.value:0,a=o!==void 0?o.value:0;if(i.wrapS=s===0?zi:$r,i.wrapT=a===0?zi:$r,"Scaling"in n){const l=n.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in n){const l=n.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(n,t){const i=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),r=n.FileName.split(".").pop().toLowerCase(),o=i.has(r)?this.manager.getHandler(`.${r}`):this.textureLoader;if(!o)return console.warn(`FBXLoader: ${r.toUpperCase()} loader not found, creating placeholder texture for`,n.RelativeFilename),new dr;const s=o.path;s||o.setPath(this.textureLoader.path);const a=In.get(n.id).children;let l;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(l=t[a[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&o.setPath(void 0));const c=o.load(l);return o.setPath(s),c}parseMaterials(n){const t=new Map;if("Material"in je.Objects){const i=je.Objects.Material;for(const r in i){const o=this.parseMaterial(i[r],n);o!==null&&t.set(parseInt(r),o)}}return t}parseMaterial(n,t){const i=n.id,r=n.attrName;let o=n.ShadingModel;if(typeof o=="object"&&(o=o.value),!In.has(i))return null;const s=this.parseParameters(n,t,i);let a;switch(o.toLowerCase()){case"phong":a=new Xr;break;case"lambert":a=new ef;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',o),a=new Xr;break}return a.setValues(s),a.name=r,a}parseParameters(n,t,i){const r={};n.BumpFactor&&(r.bumpScale=n.BumpFactor.value),n.Diffuse?r.color=un.toWorkingColorSpace(new xe().fromArray(n.Diffuse.value),Cn):n.DiffuseColor&&(n.DiffuseColor.type==="Color"||n.DiffuseColor.type==="ColorRGB")&&(r.color=un.toWorkingColorSpace(new xe().fromArray(n.DiffuseColor.value),Cn)),n.DisplacementFactor&&(r.displacementScale=n.DisplacementFactor.value),n.Emissive?r.emissive=un.toWorkingColorSpace(new xe().fromArray(n.Emissive.value),Cn):n.EmissiveColor&&(n.EmissiveColor.type==="Color"||n.EmissiveColor.type==="ColorRGB")&&(r.emissive=un.toWorkingColorSpace(new xe().fromArray(n.EmissiveColor.value),Cn)),n.EmissiveFactor&&(r.emissiveIntensity=parseFloat(n.EmissiveFactor.value)),r.opacity=1-(n.TransparencyFactor?parseFloat(n.TransparencyFactor.value):0),(r.opacity===1||r.opacity===0)&&(r.opacity=n.Opacity?parseFloat(n.Opacity.value):null,r.opacity===null&&(r.opacity=1-(n.TransparentColor?parseFloat(n.TransparentColor.value[0]):0))),r.opacity<1&&(r.transparent=!0),n.ReflectionFactor&&(r.reflectivity=n.ReflectionFactor.value),n.Shininess&&(r.shininess=n.Shininess.value),n.Specular?r.specular=un.toWorkingColorSpace(new xe().fromArray(n.Specular.value),Cn):n.SpecularColor&&n.SpecularColor.type==="Color"&&(r.specular=un.toWorkingColorSpace(new xe().fromArray(n.SpecularColor.value),Cn));const o=this;return In.get(i).children.forEach(function(s){const a=s.relationship;switch(a){case"Bump":r.bumpMap=o.getTexture(t,s.ID);break;case"Maya|TEX_ao_map":r.aoMap=o.getTexture(t,s.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=o.getTexture(t,s.ID),r.map!==void 0&&(r.map.colorSpace=Cn);break;case"DisplacementColor":r.displacementMap=o.getTexture(t,s.ID);break;case"EmissiveColor":r.emissiveMap=o.getTexture(t,s.ID),r.emissiveMap!==void 0&&(r.emissiveMap.colorSpace=Cn);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=o.getTexture(t,s.ID);break;case"ReflectionColor":r.envMap=o.getTexture(t,s.ID),r.envMap!==void 0&&(r.envMap.mapping=Jr,r.envMap.colorSpace=Cn);break;case"SpecularColor":r.specularMap=o.getTexture(t,s.ID),r.specularMap!==void 0&&(r.specularMap.colorSpace=Cn);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=o.getTexture(t,s.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(n,t){return"LayeredTexture"in je.Objects&&t in je.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=In.get(t).children[0].ID),n.get(t)}parseDeformers(){const n={},t={};if("Deformer"in je.Objects){const i=je.Objects.Deformer;for(const r in i){const o=i[r],s=In.get(parseInt(r));if(o.attrType==="Skin"){const a=this.parseSkeleton(s,i);a.ID=r,s.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=s.parents[0].ID,n[r]=a}else if(o.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(s,i),a.id=r,s.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:n,morphTargets:t}}parseSkeleton(n,t){const i=[];return n.children.forEach(function(r){const o=t[r.ID];if(o.attrType!=="Cluster")return;const s={ID:r.ID,indices:[],weights:[],transformLink:new $e().fromArray(o.TransformLink.a)};"Indexes"in o&&(s.indices=o.Indexes.a,s.weights=o.Weights.a),i.push(s)}),{rawBones:i,bones:[]}}parseMorphTargets(n,t){const i=[];for(let r=0;r<n.children.length;r++){const o=n.children[r],s=t[o.ID],a={name:s.attrName,initialWeight:s.DeformPercent,id:s.id,fullWeights:s.FullWeights.a};if(s.attrType!=="BlendShapeChannel")return;a.geoID=In.get(parseInt(o.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(a)}return i}parseScene(n,t,i){Kn=new Ot;const r=this.parseModels(n.skeletons,t,i),o=je.Objects.Model,s=this;r.forEach(function(l){const c=o[l.ID];s.setLookAtProperties(l,c),In.get(l.ID).parents.forEach(function(u){const f=r.get(u.ID);f!==void 0&&f.add(l)}),l.parent===null&&Kn.add(l)}),this.bindSkeleton(n.skeletons,t,r),this.addGlobalSceneSettings(),Kn.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Hc(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new FE().parse();Kn.children.length===1&&Kn.children[0].isGroup&&(Kn.children[0].animations=a,Kn=Kn.children[0]),Kn.animations=a}parseModels(n,t,i){const r=new Map,o=je.Objects.Model;for(const s in o){const a=parseInt(s),l=o[s],c=In.get(a);let d=this.buildSkeleton(c,n,a,l.attrName);if(!d){switch(l.attrType){case"Camera":d=this.createCamera(c);break;case"Light":d=this.createLight(c);break;case"Mesh":d=this.createMesh(c,t,i);break;case"NurbsCurve":d=this.createCurve(c,t);break;case"LimbNode":case"Root":d=new hr;break;case"Null":default:d=new Ot;break}d.name=l.attrName?mr.sanitizeNodeName(l.attrName):"",d.userData.originalName=l.attrName,d.ID=a}this.getTransformData(d,l),r.set(a,d)}return r}buildSkeleton(n,t,i,r){let o=null;return n.parents.forEach(function(s){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,d){if(c.ID===s.ID){const u=o;o=new hr,o.matrixWorld.copy(c.transformLink),o.name=r?mr.sanitizeNodeName(r):"",o.userData.originalName=r,o.ID=i,l.bones[d]=o,u!==null&&o.add(u)}})}}),o}createCamera(n){let t,i;if(n.children.forEach(function(r){const o=je.Objects.NodeAttribute[r.ID];o!==void 0&&(i=o)}),i===void 0)t=new Ln;else{let r=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(r=1);let o=1;i.NearPlane!==void 0&&(o=i.NearPlane.value/1e3);let s=1e3;i.FarPlane!==void 0&&(s=i.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(a=i.AspectWidth.value,l=i.AspectHeight.value);const c=a/l;let d=45;i.FieldOfView!==void 0&&(d=i.FieldOfView.value);const u=i.FocalLength?i.FocalLength.value:null;switch(r){case 0:t=new $t(d,c,o,s),u!==null&&t.setFocalLength(u);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Ln;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new Ln;break}}return t}createLight(n){let t,i;if(n.children.forEach(function(r){const o=je.Objects.NodeAttribute[r.ID];o!==void 0&&(i=o)}),i===void 0)t=new Ln;else{let r;i.LightType===void 0?r=0:r=i.LightType.value;let o=16777215;i.Color!==void 0&&(o=un.toWorkingColorSpace(new xe().fromArray(i.Color.value),Cn));let s=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(s=0);let a=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?a=0:a=i.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new as(o,s,a,l);break;case 1:t=new Os(o,s);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=bn.degToRad(i.InnerAngle.value));let d=0;i.OuterAngle!==void 0&&(d=bn.degToRad(i.OuterAngle.value),d=Math.max(d,1)),t=new mc(o,s,a,c,d,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new as(o,s);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(n,t,i){let r,o=null,s=null;const a=[];return n.children.forEach(function(l){t.has(l.ID)&&(o=t.get(l.ID)),i.has(l.ID)&&a.push(i.get(l.ID))}),a.length>1?s=a:a.length>0?s=a[0]:(s=new Xr({name:pr.DEFAULT_MATERIAL_NAME,color:13421772}),a.push(s)),"color"in o.attributes&&a.forEach(function(l){l.vertexColors=!0}),o.FBX_Deformer?(r=new fo(o,s),r.normalizeSkinWeights()):r=new mn(o,s),r}createCurve(n,t){const i=n.children.reduce(function(o,s){return t.has(s.ID)&&(o=t.get(s.ID)),o},null),r=new po({name:pr.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Ar(i,r)}getTransformData(n,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=Er(t.RotationOrder.value):i.eulerOrder=Er(0),"Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),n.userData.transformData=i}setLookAtProperties(n,t){"LookAtProperty"in t&&In.get(n.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const o=je.Objects.Model[r.ID];if("Lcl_Translation"in o){const s=o.Lcl_Translation.value;n.target!==void 0?(n.target.position.fromArray(s),Kn.add(n.target)):n.lookAt(new le().fromArray(s))}}})}bindSkeleton(n,t,i){const r=this.parsePoseNodes();for(const o in n){const s=n[o];In.get(parseInt(s.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;In.get(c).parents.forEach(function(u){i.has(u.ID)&&i.get(u.ID).bind(new co(s.bones),r[u.ID])})}})}}parsePoseNodes(){const n={};if("Pose"in je.Objects){const t=je.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const r=t[i].PoseNode;Array.isArray(r)?r.forEach(function(o){n[o.Node]=new $e().fromArray(o.Matrix.a)}):n[r.Node]=new $e().fromArray(r.Matrix.a)}}return n}addGlobalSceneSettings(){if("GlobalSettings"in je){if("AmbientColor"in je.GlobalSettings){const n=je.GlobalSettings.AmbientColor.value,t=n[0],i=n[1],r=n[2];if(t!==0||i!==0||r!==0){const o=new xe().setRGB(t,i,r,Cn);Kn.add(new nf(o,1))}}"UnitScaleFactor"in je.GlobalSettings&&(Kn.userData.unitScaleFactor=je.GlobalSettings.UnitScaleFactor.value)}}}class wE{constructor(){this.negativeMaterialIndices=!1}parse(n){const t=new Map;if("Geometry"in je.Objects){const i=je.Objects.Geometry;for(const r in i){const o=In.get(parseInt(r)),s=this.parseGeometry(o,i[r],n);t.set(parseInt(r),s)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(n,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(n,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(n,t,i){const r=i.skeletons,o=[],s=n.parents.map(function(u){return je.Objects.Model[u.ID]});if(s.length===0)return;const a=n.children.reduce(function(u,f){return r[f.ID]!==void 0&&(u=r[f.ID]),u},null);n.children.forEach(function(u){i.morphTargets[u.ID]!==void 0&&o.push(i.morphTargets[u.ID])});const l=s[0],c={};"RotationOrder"in l&&(c.eulerOrder=Er(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const d=Hc(c);return this.genGeometry(t,a,o,d)}genGeometry(n,t,i,r){const o=new $n;n.attrName&&(o.name=n.attrName);const s=this.parseGeoNode(n,t),a=this.genBuffers(s),l=new mt(a.vertex,3);if(l.applyMatrix4(r),o.setAttribute("position",l),a.colors.length>0&&o.setAttribute("color",new mt(a.colors,3)),t&&(o.setAttribute("skinIndex",new xs(a.weightsIndices,4)),o.setAttribute("skinWeight",new mt(a.vertexWeights,4)),o.FBX_Deformer=t),a.normal.length>0){const c=new rn().getNormalMatrix(r),d=new mt(a.normal,3);d.applyNormalMatrix(c),o.setAttribute("normal",d)}if(a.uvs.forEach(function(c,d){const u=d===0?"uv":`uv${d}`;o.setAttribute(u,new mt(a.uvs[d],2))}),s.material&&s.material.mappingType!=="AllSame"){let c=a.materialIndex[0],d=0;if(a.materialIndex.forEach(function(u,f){u!==c&&(o.addGroup(d,f-d,c),c=u,d=f)}),o.groups.length>0){const u=o.groups[o.groups.length-1],f=u.start+u.count;f!==a.materialIndex.length&&o.addGroup(f,a.materialIndex.length-f,c)}o.groups.length===0&&o.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(o,n,i,r),o}parseGeoNode(n,t){const i={};if(i.vertexPositions=n.Vertices!==void 0?n.Vertices.a:[],i.vertexIndices=n.PolygonVertexIndex!==void 0?n.PolygonVertexIndex.a:[],n.LayerElementColor&&(i.color=this.parseVertexColors(n.LayerElementColor[0])),n.LayerElementMaterial&&(i.material=this.parseMaterialIndices(n.LayerElementMaterial[0])),n.LayerElementNormal&&(i.normal=this.parseNormals(n.LayerElementNormal[0])),n.LayerElementUV){i.uv=[];let r=0;for(;n.LayerElementUV[r];)n.LayerElementUV[r].UV&&i.uv.push(this.parseUVs(n.LayerElementUV[r])),r++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(r,o){r.indices.forEach(function(s,a){i.weightTable[s]===void 0&&(i.weightTable[s]=[]),i.weightTable[s].push({id:o,weight:r.weights[a]})})})),i}genBuffers(n){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,r=0,o=!1,s=[],a=[],l=[],c=[],d=[],u=[];const f=this;return n.vertexIndices.forEach(function(h,m){let E,_=!1;h<0&&(h=h^-1,_=!0);let p=[],A=[];if(s.push(h*3,h*3+1,h*3+2),n.color){const g=Ur(m,i,h,n.color);l.push(g[0],g[1],g[2])}if(n.skeleton){if(n.weightTable[h]!==void 0&&n.weightTable[h].forEach(function(g){A.push(g.weight),p.push(g.id)}),A.length>4){o||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),o=!0);const g=[0,0,0,0],T=[0,0,0,0];A.forEach(function(y,I){let O=y,b=p[I];T.forEach(function(L,v,P){if(O>L){P[v]=O,O=L;const k=g[v];g[v]=b,b=k}})}),p=g,A=T}for(;A.length<4;)A.push(0),p.push(0);for(let g=0;g<4;++g)d.push(A[g]),u.push(p[g])}if(n.normal){const g=Ur(m,i,h,n.normal);a.push(g[0],g[1],g[2])}n.material&&n.material.mappingType!=="AllSame"&&(E=Ur(m,i,h,n.material)[0],E<0&&(f.negativeMaterialIndices=!0,E=0)),n.uv&&n.uv.forEach(function(g,T){const y=Ur(m,i,h,g);c[T]===void 0&&(c[T]=[]),c[T].push(y[0]),c[T].push(y[1])}),r++,_&&(f.genFace(t,n,s,E,a,l,c,d,u,r),i++,r=0,s=[],a=[],l=[],c=[],d=[],u=[])}),t}getNormalNewell(n){const t=new le(0,0,0);for(let i=0;i<n.length;i++){const r=n[i],o=n[(i+1)%n.length];t.x+=(r.y-o.y)*(r.z+o.z),t.y+=(r.z-o.z)*(r.x+o.x),t.z+=(r.x-o.x)*(r.y+o.y)}return t.normalize(),t}getNormalTangentAndBitangent(n){const t=this.getNormalNewell(n),r=(Math.abs(t.z)>.5?new le(0,1,0):new le(0,0,1)).cross(t).normalize(),o=t.clone().cross(r).normalize();return{normal:t,tangent:r,bitangent:o}}flattenVertex(n,t,i){return new Un(n.dot(t),n.dot(i))}genFace(n,t,i,r,o,s,a,l,c,d){let u;if(d>3){const f=[],h=t.baseVertexPositions||t.vertexPositions;for(let p=0;p<i.length;p+=3)f.push(new le(h[i[p]],h[i[p+1]],h[i[p+2]]));const{tangent:m,bitangent:E}=this.getNormalTangentAndBitangent(f),_=[];for(const p of f)_.push(this.flattenVertex(p,m,E));u=tf.triangulateShape(_,[])}else u=[[0,1,2]];for(const[f,h,m]of u)n.vertex.push(t.vertexPositions[i[f*3]]),n.vertex.push(t.vertexPositions[i[f*3+1]]),n.vertex.push(t.vertexPositions[i[f*3+2]]),n.vertex.push(t.vertexPositions[i[h*3]]),n.vertex.push(t.vertexPositions[i[h*3+1]]),n.vertex.push(t.vertexPositions[i[h*3+2]]),n.vertex.push(t.vertexPositions[i[m*3]]),n.vertex.push(t.vertexPositions[i[m*3+1]]),n.vertex.push(t.vertexPositions[i[m*3+2]]),t.skeleton&&(n.vertexWeights.push(l[f*4]),n.vertexWeights.push(l[f*4+1]),n.vertexWeights.push(l[f*4+2]),n.vertexWeights.push(l[f*4+3]),n.vertexWeights.push(l[h*4]),n.vertexWeights.push(l[h*4+1]),n.vertexWeights.push(l[h*4+2]),n.vertexWeights.push(l[h*4+3]),n.vertexWeights.push(l[m*4]),n.vertexWeights.push(l[m*4+1]),n.vertexWeights.push(l[m*4+2]),n.vertexWeights.push(l[m*4+3]),n.weightsIndices.push(c[f*4]),n.weightsIndices.push(c[f*4+1]),n.weightsIndices.push(c[f*4+2]),n.weightsIndices.push(c[f*4+3]),n.weightsIndices.push(c[h*4]),n.weightsIndices.push(c[h*4+1]),n.weightsIndices.push(c[h*4+2]),n.weightsIndices.push(c[h*4+3]),n.weightsIndices.push(c[m*4]),n.weightsIndices.push(c[m*4+1]),n.weightsIndices.push(c[m*4+2]),n.weightsIndices.push(c[m*4+3])),t.color&&(n.colors.push(s[f*3]),n.colors.push(s[f*3+1]),n.colors.push(s[f*3+2]),n.colors.push(s[h*3]),n.colors.push(s[h*3+1]),n.colors.push(s[h*3+2]),n.colors.push(s[m*3]),n.colors.push(s[m*3+1]),n.colors.push(s[m*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(n.materialIndex.push(r),n.materialIndex.push(r),n.materialIndex.push(r)),t.normal&&(n.normal.push(o[f*3]),n.normal.push(o[f*3+1]),n.normal.push(o[f*3+2]),n.normal.push(o[h*3]),n.normal.push(o[h*3+1]),n.normal.push(o[h*3+2]),n.normal.push(o[m*3]),n.normal.push(o[m*3+1]),n.normal.push(o[m*3+2])),t.uv&&t.uv.forEach(function(E,_){n.uvs[_]===void 0&&(n.uvs[_]=[]),n.uvs[_].push(a[_][f*2]),n.uvs[_].push(a[_][f*2+1]),n.uvs[_].push(a[_][h*2]),n.uvs[_].push(a[_][h*2+1]),n.uvs[_].push(a[_][m*2]),n.uvs[_].push(a[_][m*2+1])})}addMorphTargets(n,t,i,r){if(i.length===0)return;n.morphTargetsRelative=!0,n.morphAttributes.position=[];const o=this;i.forEach(function(s){s.rawTargets.forEach(function(a){const l=je.Objects.Geometry[a.geoID];l!==void 0&&o.genMorphGeometry(n,t,l,r,a.name)})})}genMorphGeometry(n,t,i,r,o){const s=t.Vertices!==void 0?t.Vertices.a:[],a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=i.Vertices!==void 0?i.Vertices.a:[],c=i.Indexes!==void 0?i.Indexes.a:[],d=n.attributes.position.count*3,u=new Float32Array(d);for(let E=0;E<c.length;E++){const _=c[E]*3;u[_]=l[E*3],u[_+1]=l[E*3+1],u[_+2]=l[E*3+2]}const f={vertexIndices:a,vertexPositions:u,baseVertexPositions:s},h=this.genBuffers(f),m=new mt(h.vertex,3);m.name=o||i.attrName,m.applyMatrix4(r),n.morphAttributes.position.push(m)}parseNormals(n){const t=n.MappingInformationType,i=n.ReferenceInformationType,r=n.Normals.a;let o=[];return i==="IndexToDirect"&&("NormalIndex"in n?o=n.NormalIndex.a:"NormalsIndex"in n&&(o=n.NormalsIndex.a)),{dataSize:3,buffer:r,indices:o,mappingType:t,referenceType:i}}parseUVs(n){const t=n.MappingInformationType,i=n.ReferenceInformationType,r=n.UV.a;let o=[];return i==="IndexToDirect"&&(o=n.UVIndex.a),{dataSize:2,buffer:r,indices:o,mappingType:t,referenceType:i}}parseVertexColors(n){const t=n.MappingInformationType,i=n.ReferenceInformationType,r=n.Colors.a;let o=[];i==="IndexToDirect"&&(o=n.ColorIndex.a);for(let s=0,a=new xe;s<r.length;s+=4)a.fromArray(r,s),un.toWorkingColorSpace(a,Cn),a.toArray(r,s);return{dataSize:4,buffer:r,indices:o,mappingType:t,referenceType:i}}parseMaterialIndices(n){const t=n.MappingInformationType,i=n.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const r=n.Materials.a,o=[];for(let s=0;s<r.length;++s)o.push(s);return{dataSize:1,buffer:r,indices:o,mappingType:t,referenceType:i}}parseNurbsGeometry(n){const t=parseInt(n.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",n.Order,n.id),new $n;const i=t-1,r=n.KnotVector.a,o=[],s=n.Points.a;for(let u=0,f=s.length;u<f;u+=4)o.push(new vn().fromArray(s,u));let a,l;if(n.Form==="Closed")o.push(o[0]);else if(n.Form==="Periodic"){a=i,l=r.length-1-a;for(let u=0;u<i;++u)o.push(o[u])}const d=new uE(i,r,o,a,l).getPoints(o.length*12);return new $n().setFromPoints(d)}}class FE{parse(){const n=[],t=this.parseClips();if(t!==void 0)for(const i in t){const r=t[i],o=this.addClip(r);n.push(o)}return n}parseClips(){if(je.Objects.AnimationCurve===void 0)return;const n=this.parseAnimationCurveNodes();this.parseAnimationCurves(n);const t=this.parseAnimationLayers(n);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const n=je.Objects.AnimationCurveNode,t=new Map;for(const i in n){const r=n[i];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const o={id:r.id,attr:r.attrName,curves:{}};t.set(o.id,o)}}return t}parseAnimationCurves(n){const t=je.Objects.AnimationCurve;for(const i in t){const r={id:t[i].id,times:t[i].KeyTime.a.map(BE),values:t[i].KeyValueFloat.a},o=In.get(r.id);if(o!==void 0){const s=o.parents[0].ID,a=o.parents[0].relationship;a.match(/X/)?n.get(s).curves.x=r:a.match(/Y/)?n.get(s).curves.y=r:a.match(/Z/)?n.get(s).curves.z=r:a.match(/DeformPercent/)&&n.has(s)&&(n.get(s).curves.morph=r)}}}parseAnimationLayers(n){const t=je.Objects.AnimationLayer,i=new Map;for(const r in t){const o=[],s=In.get(parseInt(r));s!==void 0&&(s.children.forEach(function(l,c){if(n.has(l.ID)){const d=n.get(l.ID);if(d.curves.x!==void 0||d.curves.y!==void 0||d.curves.z!==void 0){if(o[c]===void 0){const u=In.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(u!==void 0){const f=je.Objects.Model[u.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const h={modelName:f.attrName?mr.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Kn.traverse(function(m){m.ID===f.id&&(h.transform=m.matrix,m.userData.transformData&&(h.eulerOrder=m.userData.transformData.eulerOrder))}),h.transform||(h.transform=new $e),"PreRotation"in f&&(h.preRotation=f.PreRotation.value),"PostRotation"in f&&(h.postRotation=f.PostRotation.value),o[c]=h}}o[c]&&(o[c][d.attr]=d)}else if(d.curves.morph!==void 0){if(o[c]===void 0){const u=In.get(l.ID).parents.filter(function(p){return p.relationship!==void 0})[0].ID,f=In.get(u).parents[0].ID,h=In.get(f).parents[0].ID,m=In.get(h).parents[0].ID,E=je.Objects.Model[m],_={modelName:E.attrName?mr.sanitizeNodeName(E.attrName):"",morphName:je.Objects.Deformer[u].attrName};o[c]=_}o[c][d.attr]=d}}}),i.set(parseInt(r),o))}return i}parseAnimStacks(n){const t=je.Objects.AnimationStack,i={};for(const r in t){const o=In.get(parseInt(r)).children;o.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const s=n.get(o[0].ID);i[r]={name:t[r].attrName,layer:s}}return i}addClip(n){let t=[];const i=this;return n.layer.forEach(function(r){t=t.concat(i.generateTracks(r))}),new uo(n.name,-1,t)}generateTracks(n){const t=[];let i=new le,r=new le;if(n.transform&&n.transform.decompose(i,new ot,r),i=i.toArray(),r=r.toArray(),n.T!==void 0&&Object.keys(n.T.curves).length>0){const o=this.generateVectorTrack(n.modelName,n.T.curves,i,"position");o!==void 0&&t.push(o)}if(n.R!==void 0&&Object.keys(n.R.curves).length>0){const o=this.generateRotationTrack(n.modelName,n.R.curves,n.preRotation,n.postRotation,n.eulerOrder);o!==void 0&&t.push(o)}if(n.S!==void 0&&Object.keys(n.S.curves).length>0){const o=this.generateVectorTrack(n.modelName,n.S.curves,r,"scale");o!==void 0&&t.push(o)}if(n.DeformPercent!==void 0){const o=this.generateMorphTrack(n);o!==void 0&&t.push(o)}return t}generateVectorTrack(n,t,i,r){const o=this.getTimesForAllAxes(t),s=this.getKeyframeTrackValues(o,t,i);return new _r(n+"."+r,o,s)}generateRotationTrack(n,t,i,r,o){let s,a;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const f=this.interpolateRotations(t.x,t.y,t.z,o);s=f[0],a=f[1]}const l=Er(0);i!==void 0&&(i=i.map(bn.degToRad),i.push(l),i=new Ht().fromArray(i),i=new ot().setFromEuler(i)),r!==void 0&&(r=r.map(bn.degToRad),r.push(l),r=new Ht().fromArray(r),r=new ot().setFromEuler(r).invert());const c=new ot,d=new Ht,u=[];if(!a||!s)return new Ki(n+".quaternion",[0],[0]);for(let f=0;f<a.length;f+=3)d.set(a[f],a[f+1],a[f+2],o),c.setFromEuler(d),i!==void 0&&c.premultiply(i),r!==void 0&&c.multiply(r),f>2&&new ot().fromArray(u,(f-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(u,f/3*4);return new Ki(n+".quaternion",s,u)}generateMorphTrack(n){const t=n.DeformPercent.curves.morph,i=t.values.map(function(o){return o/100}),r=Kn.getObjectByName(n.modelName).morphTargetDictionary[n.morphName];return new ls(n.modelName+".morphTargetInfluences["+r+"]",t.times,i)}getTimesForAllAxes(n){let t=[];if(n.x!==void 0&&(t=t.concat(n.x.times)),n.y!==void 0&&(t=t.concat(n.y.times)),n.z!==void 0&&(t=t.concat(n.z.times)),t=t.sort(function(i,r){return i-r}),t.length>1){let i=1,r=t[0];for(let o=1;o<t.length;o++){const s=t[o];s!==r&&(t[i]=s,r=s,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(n,t,i){const r=i,o=[];let s=-1,a=-1,l=-1;return n.forEach(function(c){if(t.x&&(s=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),s!==-1){const d=t.x.values[s];o.push(d),r[0]=d}else o.push(r[0]);if(a!==-1){const d=t.y.values[a];o.push(d),r[1]=d}else o.push(r[1]);if(l!==-1){const d=t.z.values[l];o.push(d),r[2]=d}else o.push(r[2])}),o}interpolateRotations(n,t,i,r){const o=[],s=[];o.push(n.times[0]),s.push(bn.degToRad(n.values[0])),s.push(bn.degToRad(t.values[0])),s.push(bn.degToRad(i.values[0]));for(let a=1;a<n.values.length;a++){const l=[n.values[a-1],t.values[a-1],i.values[a-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(bn.degToRad),d=[n.values[a],t.values[a],i.values[a]];if(isNaN(d[0])||isNaN(d[1])||isNaN(d[2]))continue;const u=d.map(bn.degToRad),f=[d[0]-l[0],d[1]-l[1],d[2]-l[2]],h=[Math.abs(f[0]),Math.abs(f[1]),Math.abs(f[2])];if(h[0]>=180||h[1]>=180||h[2]>=180){const E=Math.max(...h)/180,_=new Ht(...c,r),p=new Ht(...u,r),A=new ot().setFromEuler(_),g=new ot().setFromEuler(p);A.dot(g)&&g.set(-g.x,-g.y,-g.z,-g.w);const T=n.times[a-1],y=n.times[a]-T,I=new ot,O=new Ht;for(let b=0;b<1;b+=1/E)I.copy(A.clone().slerp(g.clone(),b)),o.push(T+b*y),O.setFromQuaternion(I,r),s.push(O.x),s.push(O.y),s.push(O.z)}else o.push(n.times[a]),s.push(bn.degToRad(n.values[a])),s.push(bn.degToRad(t.values[a])),s.push(bn.degToRad(i.values[a]))}return[o,s]}}class DE{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(n){this.nodeStack.push(n),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(n,t){this.currentProp=n,this.currentPropName=t}parse(n){this.currentIndent=0,this.allNodes=new Uc,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=n.split(/[\r\n]+/);return i.forEach(function(r,o){const s=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(s||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),d=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,i[++o]):d?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(n,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),o={name:i},s=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,o):i in a?(i==="PoseNode"?a.PoseNode.push(o):a[i].id!==void 0&&(a[i]={},a[i][a[i].id]=a[i]),s.id!==""&&(a[i][s.id]=o)):typeof s.id=="number"?(a[i]={},a[i][s.id]=o):i!=="Properties70"&&(i==="PoseNode"?a[i]=[o]:a[i]=o),typeof s.id=="number"&&(o.id=s.id),s.name!==""&&(o.attrName=s.name),s.type!==""&&(o.attrType=s.type),this.pushStack(o)}parseNodeAttr(n){let t=n[0];n[0]!==""&&(t=parseInt(n[0]),isNaN(t)&&(t=n[0]));let i="",r="";return n.length>1&&(i=n[1].replace(/^(\w+)::/,""),r=n[2]),{id:t,name:i,type:r}}parseNodeProperty(n,t,i){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),o=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&o===","&&(o=i.replace(/"/g,"").replace(/,$/,"").trim());const s=this.getCurrentNode();if(s.name==="Properties70"){this.parseNodeSpecialProperty(n,r,o);return}if(r==="C"){const l=o.split(",").slice(1),c=parseInt(l[0]),d=parseInt(l[1]);let u=o.split(",").slice(3);u=u.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",o=[c,d],kE(o,u),s[r]===void 0&&(s[r]=[])}r==="Node"&&(s.id=o),r in s&&Array.isArray(s[r])?s[r].push(o):r!=="a"?s[r]=o:s.a=o,this.setCurrentProp(s,r),r==="a"&&o.slice(-1)!==","&&(s.a=ko(o))}parseNodePropertyContinued(n){const t=this.getCurrentNode();t.a+=n,n.slice(-1)!==","&&(t.a=ko(t.a))}parseNodeSpecialProperty(n,t,i){const r=i.split('",').map(function(d){return d.trim().replace(/^\"/,"").replace(/\s/,"_")}),o=r[0],s=r[1],a=r[2],l=r[3];let c=r[4];switch(s){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=ko(c);break}this.getPrevNode()[o]={type:s,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),o)}}class UE{parse(n){const t=new ll(n);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const r=new Uc;for(;!this.endOfContent(t);){const o=this.parseNode(t,i);o!==null&&r.add(o.name,o)}return r}endOfContent(n){return n.size()%16===0?(n.getOffset()+160+16&-16)>=n.size():n.getOffset()+160+16>=n.size()}parseNode(n,t){const i={},r=t>=7500?n.getUint64():n.getUint32(),o=t>=7500?n.getUint64():n.getUint32();t>=7500?n.getUint64():n.getUint32();const s=n.getUint8(),a=n.getString(s);if(r===0)return null;const l=[];for(let f=0;f<o;f++)l.push(this.parseProperty(n));const c=l.length>0?l[0]:"",d=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(i.singleProperty=o===1&&n.getOffset()===r;r>n.getOffset();){const f=this.parseNode(n,t);f!==null&&this.parseSubNode(a,i,f)}return i.propertyList=l,typeof c=="number"&&(i.id=c),d!==""&&(i.attrName=d),u!==""&&(i.attrType=u),a!==""&&(i.name=a),i}parseSubNode(n,t,i){if(i.singleProperty===!0){const r=i.propertyList[0];Array.isArray(r)?(t[i.name]=i,i.a=r):t[i.name]=r}else if(n==="Connections"&&i.name==="C"){const r=[];i.propertyList.forEach(function(o,s){s!==0&&r.push(o)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(i.name==="Properties70")Object.keys(i).forEach(function(o){t[o]=i[o]});else if(n==="Properties70"&&i.name==="P"){let r=i.propertyList[0],o=i.propertyList[1];const s=i.propertyList[2],a=i.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),o.indexOf("Lcl ")===0&&(o=o.replace("Lcl ","Lcl_")),o==="Color"||o==="ColorRGB"||o==="Vector"||o==="Vector3D"||o.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[r]={type:o,type2:s,flag:a,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(n){const t=n.getString(1);let i;switch(t){case"C":return n.getBoolean();case"D":return n.getFloat64();case"F":return n.getFloat32();case"I":return n.getInt32();case"L":return n.getInt64();case"R":return i=n.getUint32(),n.getArrayBuffer(i);case"S":return i=n.getUint32(),n.getString(i);case"Y":return n.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=n.getUint32(),o=n.getUint32(),s=n.getUint32();if(o===0)switch(t){case"b":case"c":return n.getBooleanArray(r);case"d":return n.getFloat64Array(r);case"f":return n.getFloat32Array(r);case"i":return n.getInt32Array(r);case"l":return n.getInt64Array(r)}const a=LE(new Uint8Array(n.getArrayBuffer(s))),l=new ll(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class ll{constructor(n,t){this.dv=new DataView(n),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(n){this.offset+=n}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(n){const t=[];for(let i=0;i<n;i++)t.push(this.getBoolean());return t}getUint8(){const n=this.dv.getUint8(this.offset);return this.offset+=1,n}getInt16(){const n=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,n}getInt32(){const n=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,n}getInt32Array(n){const t=[];for(let i=0;i<n;i++)t.push(this.getInt32());return t}getUint32(){const n=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,n}getInt64(){let n,t;return this.littleEndian?(n=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),n=this.getUint32()),t&2147483648?(t=~t&4294967295,n=~n&4294967295,n===4294967295&&(t=t+1&4294967295),n=n+1&4294967295,-(t*4294967296+n)):t*4294967296+n}getInt64Array(n){const t=[];for(let i=0;i<n;i++)t.push(this.getInt64());return t}getUint64(){let n,t;return this.littleEndian?(n=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),n=this.getUint32()),t*4294967296+n}getFloat32(){const n=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,n}getFloat32Array(n){const t=[];for(let i=0;i<n;i++)t.push(this.getFloat32());return t}getFloat64(){const n=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,n}getFloat64Array(n){const t=[];for(let i=0;i<n;i++)t.push(this.getFloat64());return t}getArrayBuffer(n){const t=this.dv.buffer.slice(this.offset,this.offset+n);return this.offset+=n,t}getString(n){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,n);this.skip(n);const r=i.indexOf(0);return r>=0&&(i=new Uint8Array(this.dv.buffer,t,r)),this._textDecoder.decode(i)}}class Uc{add(n,t){this[n]=t}}function HE(e){const n="Kaydara FBX Binary  \0";return e.byteLength>=n.length&&n===Gc(e,0,n.length)}function GE(e){const n=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(r){const o=e[r-1];return e=e.slice(t+r),t++,o}for(let r=0;r<n.length;++r)if(i(1)===n[r])return!1;return!0}function cl(e){const n=/FBXVersion: (\d+)/,t=e.match(n);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function BE(e){return e/46186158e3}const WE=[];function Ur(e,n,t,i){let r;switch(i.mappingType){case"ByPolygonVertex":r=e;break;case"ByPolygon":r=n;break;case"ByVertice":r=t;break;case"AllSame":r=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(r=i.indices[r]);const o=r*i.dataSize,s=o+i.dataSize;return VE(WE,i.buffer,o,s)}const Wo=new Ht,Ii=new le;function Hc(e){const n=new $e,t=new $e,i=new $e,r=new $e,o=new $e,s=new $e,a=new $e,l=new $e,c=new $e,d=new $e,u=new $e,f=new $e,h=e.inheritType?e.inheritType:0;e.translation&&n.setPosition(Ii.fromArray(e.translation));const m=Er(0);if(e.preRotation){const P=e.preRotation.map(bn.degToRad);P.push(m),t.makeRotationFromEuler(Wo.fromArray(P))}if(e.rotation){const P=e.rotation.map(bn.degToRad);P.push(e.eulerOrder||m),i.makeRotationFromEuler(Wo.fromArray(P))}if(e.postRotation){const P=e.postRotation.map(bn.degToRad);P.push(m),r.makeRotationFromEuler(Wo.fromArray(P)),r.invert()}e.scale&&o.scale(Ii.fromArray(e.scale)),e.scalingOffset&&a.setPosition(Ii.fromArray(e.scalingOffset)),e.scalingPivot&&s.setPosition(Ii.fromArray(e.scalingPivot)),e.rotationOffset&&l.setPosition(Ii.fromArray(e.rotationOffset)),e.rotationPivot&&c.setPosition(Ii.fromArray(e.rotationPivot)),e.parentMatrixWorld&&(u.copy(e.parentMatrix),d.copy(e.parentMatrixWorld));const E=t.clone().multiply(i).multiply(r),_=new $e;_.extractRotation(d);const p=new $e;p.copyPosition(d);const A=p.clone().invert().multiply(d),g=_.clone().invert().multiply(A),T=o,y=new $e;if(h===0)y.copy(_).multiply(E).multiply(g).multiply(T);else if(h===1)y.copy(_).multiply(g).multiply(E).multiply(T);else{const k=new $e().scale(new le().setFromMatrixScale(u)).clone().invert(),V=g.clone().multiply(k);y.copy(_).multiply(E).multiply(V).multiply(T)}const I=c.clone().invert(),O=s.clone().invert();let b=n.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(r).multiply(I).multiply(a).multiply(s).multiply(o).multiply(O);const L=new $e().copyPosition(b),v=d.clone().multiply(L);return f.copyPosition(v),b=f.clone().multiply(y),b.premultiply(d.invert()),b}function Er(e){e=e||0;const n=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return e===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),n[0]):n[e]}function ko(e){return e.split(",").map(function(t){return parseFloat(t)})}function Gc(e,n,t){return n===void 0&&(n=0),t===void 0&&(t=e.byteLength),new TextDecoder().decode(new Uint8Array(e,n,t))}function kE(e,n){for(let t=0,i=e.length,r=n.length;t<r;t++,i++)e[i]=n[t]}function VE(e,n,t,i){for(let r=t,o=0;r<i;r++,o++)e[o]=n[r];return e}class zE extends pr{constructor(n){super(n),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new qE(t)}),this.register(function(t){return new $E(t)}),this.register(function(t){return new oT(t)}),this.register(function(t){return new sT(t)}),this.register(function(t){return new aT(t)}),this.register(function(t){return new JE(t)}),this.register(function(t){return new QE(t)}),this.register(function(t){return new eT(t)}),this.register(function(t){return new nT(t)}),this.register(function(t){return new jE(t)}),this.register(function(t){return new tT(t)}),this.register(function(t){return new ZE(t)}),this.register(function(t){return new rT(t)}),this.register(function(t){return new iT(t)}),this.register(function(t){return new KE(t)}),this.register(function(t){return new lT(t)}),this.register(function(t){return new cT(t)})}load(n,t,i,r){const o=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const c=Di.extractUrlBase(n);s=Di.resolveURL(c,this.path)}else s=Di.extractUrlBase(n);this.manager.itemStart(n);const a=function(c){r?r(c):console.error(c),o.manager.itemError(n),o.manager.itemEnd(n)},l=new lo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(n,function(c){try{o.parse(c,s,function(d){t(d),o.manager.itemEnd(n)},a)}catch(d){a(d)}},i,a)}setDRACOLoader(n){return this.dracoLoader=n,this}setKTX2Loader(n){return this.ktx2Loader=n,this}setMeshoptDecoder(n){return this.meshoptDecoder=n,this}register(n){return this.pluginCallbacks.indexOf(n)===-1&&this.pluginCallbacks.push(n),this}unregister(n){return this.pluginCallbacks.indexOf(n)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n),1),this}parse(n,t,i,r){let o;const s={},a={},l=new TextDecoder;if(typeof n=="string")o=JSON.parse(n);else if(n instanceof ArrayBuffer)if(l.decode(new Uint8Array(n,0,4))===Bc){try{s[qe.KHR_BINARY_GLTF]=new uT(n)}catch(u){r&&r(u);return}o=JSON.parse(s[qe.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(n));else o=n;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new vT(o,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,s[u.name]=!0}if(o.extensionsUsed)for(let d=0;d<o.extensionsUsed.length;++d){const u=o.extensionsUsed[d],f=o.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:s[u]=new YE;break;case qe.KHR_DRACO_MESH_COMPRESSION:s[u]=new dT(o,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:s[u]=new fT;break;case qe.KHR_MESH_QUANTIZATION:s[u]=new pT;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(a),c.parse(i,r)}parseAsync(n,t){const i=this;return new Promise(function(r,o){i.parse(n,t,r,o)})}}function XE(){let e={};return{get:function(n){return e[n]},add:function(n,t){e[n]=t},remove:function(n){delete e[n]},removeAll:function(){e={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class KE{constructor(n){this.parser=n,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const n=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&n._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(n){const t=this.parser,i="light:"+n;let r=t.cache.get(i);if(r)return r;const o=t.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[n];let c;const d=new xe(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],ct);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Os(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new as(d),c.distance=u;break;case"spot":c=new mc(d),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Ut(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+n),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(n,t){if(n==="light")return this._loadLight(t)}createNodeAttachment(n){const t=this,i=this.parser,o=i.json.nodes[n],a=(o.extensions&&o.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class YE{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return qn}extendParams(n,t,i){const r=[];n.color=new xe(1,1,1),n.opacity=1;const o=t.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const s=o.baseColorFactor;n.color.setRGB(s[0],s[1],s[2],ct),n.opacity=s[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(n,"map",o.baseColorTexture,Cn))}return Promise.all(r)}}class jE{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(n,t){const r=this.parser.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(t.emissiveIntensity=o),Promise.resolve()}}class qE{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Un(a,a)}return Promise.all(o)}}class $E{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const r=this.parser.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class ZE{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(o)}}class JE{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=r.extensions[this.name];if(s.sheenColorFactor!==void 0){const a=s.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ct)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&o.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Cn)),s.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(o)}}class QE{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&o.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(o)}}class eT{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&o.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const a=s.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(a[0],a[1],a[2],ct),Promise.all(o)}}class nT{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const r=this.parser.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return t.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class tT{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&o.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const a=s.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(a[0],a[1],a[2],ct),s.specularColorTexture!==void 0&&o.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Cn)),Promise.all(o)}}class iT{constructor(n){this.parser=n,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&o.push(i.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(o)}}class rT{constructor(n){this.parser=n,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(n){const i=this.parser.json.materials[n];return!i.extensions||!i.extensions[this.name]?null:bt}extendMaterialParams(n,t){const i=this.parser,r=i.json.materials[n];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],s=r.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&o.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(o)}}class oT{constructor(n){this.parser=n,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(n){const t=this.parser,i=t.json,r=i.textures[n];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(n,o.source,s)}}class sT{constructor(n){this.parser=n,this.name=qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(n){const t=this.name,i=this.parser,r=i.json,o=r.textures[n];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=r.images[s.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(n,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(n)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(n){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){n(t.height===1)}})),this.isSupported}}class aT{constructor(n){this.parser=n,this.name=qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(n){const t=this.name,i=this.parser,r=i.json,o=r.textures[n];if(!o.extensions||!o.extensions[t])return null;const s=o.extensions[t],a=r.images[s.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(n,s.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(n)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(n){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){n(t.height===1)}})),this.isSupported}}class lT{constructor(n){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=n}loadBufferView(n){const t=this.parser.json,i=t.bufferViews[n];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,d=r.count,u=r.byteStride,f=new Uint8Array(a,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(d,u,f,r.mode,r.filter).then(function(h){return h.buffer}):s.ready.then(function(){const h=new ArrayBuffer(d*u);return s.decodeGltfBuffer(new Uint8Array(h),d,u,f,r.mode,r.filter),h})})}else return null}}class cT{constructor(n){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=n}createNodeMesh(n){const t=this.parser.json,i=t.nodes[n];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==_t.TRIANGLES&&c.mode!==_t.TRIANGLE_STRIP&&c.mode!==_t.TRIANGLE_FAN&&c.mode!==void 0)return null;const s=i.extensions[this.name].attributes,a=[],l={};for(const c in s)a.push(this.parser.getDependency("accessor",s[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(n)),Promise.all(a).then(c=>{const d=c.pop(),u=d.isGroup?d.children:[d],f=c[0].count,h=[];for(const m of u){const E=new $e,_=new le,p=new ot,A=new le(1,1,1),g=new rf(m.geometry,m.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&_.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,T),l.SCALE&&A.fromBufferAttribute(l.SCALE,T),g.setMatrixAt(T,E.compose(_,p,A));for(const T in l)if(T==="_COLOR_0"){const y=l[T];g.instanceColor=new of(y.array,y.itemSize,y.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&m.geometry.setAttribute(T,l[T]);Ln.prototype.copy.call(g,m),this.parser.assignFinalMaterial(g),h.push(g)}return d.isGroup?(d.clear(),d.add(...h),d):h[0]}))}}const Bc="glTF",Qi=12,ul={JSON:1313821514,BIN:5130562};class uT{constructor(n){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(n,0,Qi),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(n.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Bc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Qi,o=new DataView(n,Qi);let s=0;for(;s<r;){const a=o.getUint32(s,!0);s+=4;const l=o.getUint32(s,!0);if(s+=4,l===ul.JSON){const c=new Uint8Array(n,Qi+s,a);this.content=i.decode(c)}else if(l===ul.BIN){const c=Qi+s;this.body=n.slice(c,c+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class dT{constructor(n,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=n,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(n,t){const i=this.json,r=this.dracoLoader,o=n.extensions[this.name].bufferView,s=n.extensions[this.name].attributes,a={},l={},c={};for(const d in s){const u=ds[d]||d.toLowerCase();a[u]=s[d]}for(const d in n.attributes){const u=ds[d]||d.toLowerCase();if(s[d]!==void 0){const f=i.accessors[n.attributes[d]],h=Ui[f.componentType];c[u]=h.name,l[u]=f.normalized===!0}}return t.getDependency("bufferView",o).then(function(d){return new Promise(function(u,f){r.decodeDracoFile(d,function(h){for(const m in h.attributes){const E=h.attributes[m],_=l[m];_!==void 0&&(E.normalized=_)}u(h)},a,c,ct,f)})})}}class fT{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(n,t){return(t.texCoord===void 0||t.texCoord===n.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(n=n.clone(),t.texCoord!==void 0&&(n.channel=t.texCoord),t.offset!==void 0&&n.offset.fromArray(t.offset),t.rotation!==void 0&&(n.rotation=t.rotation),t.scale!==void 0&&n.repeat.fromArray(t.scale),n.needsUpdate=!0),n}}class pT{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class Wc extends df{constructor(n,t,i,r){super(n,t,i,r)}copySampleValue_(n){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=n*r*3+r;for(let s=0;s!==r;s++)t[s]=i[o+s];return t}interpolate_(n,t,i,r){const o=this.resultBuffer,s=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=r-t,u=(i-t)/d,f=u*u,h=f*u,m=n*c,E=m-c,_=-2*h+3*f,p=h-f,A=1-_,g=p-f+u;for(let T=0;T!==a;T++){const y=s[E+T+a],I=s[E+T+l]*d,O=s[m+T+a],b=s[m+T]*d;o[T]=A*y+g*I+_*O+p*b}return o}}const hT=new ot;class _T extends Wc{interpolate_(n,t,i,r){const o=super.interpolate_(n,t,i,r);return hT.fromArray(o).normalize().toArray(o),o}}const _t={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ui={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},dl={9728:_i,9729:Bt,9984:ic,9985:Vr,9986:rr,9987:ui},fl={33071:$r,33648:tc,10497:zi},Vo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ds={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vt={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},mT={CUBICSPLINE:void 0,LINEAR:gc,STEP:uf},zo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ET(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Sr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),e.DefaultMaterial}function ri(e,n,t){for(const i in t.extensions)e[i]===void 0&&(n.userData.gltfExtensions=n.userData.gltfExtensions||{},n.userData.gltfExtensions[i]=t.extensions[i])}function Ut(e,n){n.extras!==void 0&&(typeof n.extras=="object"?Object.assign(e.userData,n.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+n.extras))}function TT(e,n,t){let i=!1,r=!1,o=!1;for(let c=0,d=n.length;c<d;c++){const u=n[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(e);const s=[],a=[],l=[];for(let c=0,d=n.length;c<d;c++){const u=n[c];if(i){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):e.attributes.position;s.push(f)}if(r){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):e.attributes.normal;a.push(f)}if(o){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):e.attributes.color;l.push(f)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],u=c[1],f=c[2];return i&&(e.morphAttributes.position=d),r&&(e.morphAttributes.normal=u),o&&(e.morphAttributes.color=f),e.morphTargetsRelative=!0,e})}function gT(e,n){if(e.updateMorphTargets(),n.weights!==void 0)for(let t=0,i=n.weights.length;t<i;t++)e.morphTargetInfluences[t]=n.weights[t];if(n.extras&&Array.isArray(n.extras.targetNames)){const t=n.extras.targetNames;if(e.morphTargetInfluences.length===t.length){e.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)e.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function RT(e){let n;const t=e.extensions&&e.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?n="draco:"+t.bufferView+":"+t.indices+":"+Xo(t.attributes):n=e.indices+":"+Xo(e.attributes)+":"+e.mode,e.targets!==void 0)for(let i=0,r=e.targets.length;i<r;i++)n+=":"+Xo(e.targets[i]);return n}function Xo(e){let n="";const t=Object.keys(e).sort();for(let i=0,r=t.length;i<r;i++)n+=t[i]+":"+e[t[i]]+";";return n}function fs(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AT(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const ST=new $e;class vT{constructor(n={},t={}){this.json=n,this.extensions={},this.plugins={},this.options=t,this.cache=new XE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,s=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,o=a.indexOf("Firefox")>-1,s=o?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||o&&s<98?this.textureLoader=new Is(this.options.manager):this.textureLoader=new sf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new lo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(n){this.extensions=n}setPlugins(n){this.plugins=n}parse(n,t){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const a={scene:s[0][r.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:r.asset,parser:i,userData:{}};return ri(o,a,r),Ut(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();n(a)})}).catch(t)}_markDefs(){const n=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=t.length;r<o;r++){const s=t[r].joints;for(let a=0,l=s.length;a<l;a++)n[s[a]].isBone=!0}for(let r=0,o=n.length;r<o;r++){const s=n[r];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(n,t){t!==void 0&&(n.refs[t]===void 0&&(n.refs[t]=n.uses[t]=0),n.refs[t]++)}_getNodeRef(n,t,i){if(n.refs[t]<=1)return i;const r=i.clone(),o=(s,a)=>{const l=this.associations.get(s);l!=null&&this.associations.set(a,l);for(const[c,d]of s.children.entries())o(d,a.children[c])};return o(i,r),r.name+="_instance_"+n.uses[t]++,r}_invokeOne(n){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=n(t[i]);if(r)return r}return null}_invokeAll(n){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const o=n(t[r]);o&&i.push(o)}return i}getDependency(n,t){const i=n+":"+t;let r=this.cache.get(i);if(!r){switch(n){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(t)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(n,t)}),!r)throw new Error("Unknown type: "+n);break}this.cache.add(i,r)}return r}getDependencies(n){let t=this.cache.get(n);if(!t){const i=this,r=this.json[n+(n==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(o,s){return i.getDependency(n,s)})),this.cache.add(n,t)}return t}loadBuffer(n){const t=this.json.buffers[n],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&n===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,s){i.load(Di.resolveURL(t.uri,r.path),o,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(n){const t=this.json.bufferViews[n];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,o=t.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(n){const t=this,i=this.json,r=this.json.accessors[n];if(r.bufferView===void 0&&r.sparse===void 0){const s=Vo[r.type],a=Ui[r.componentType],l=r.normalized===!0,c=new a(r.count*s);return Promise.resolve(new lt(c,s,l))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(s){const a=s[0],l=Vo[r.type],c=Ui[r.componentType],d=c.BYTES_PER_ELEMENT,u=d*l,f=r.byteOffset||0,h=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let E,_;if(h&&h!==u){const p=Math.floor(f/h),A="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let g=t.cache.get(A);g||(E=new c(a,p*h,r.count*h/d),g=new af(E,h/d),t.cache.add(A,g)),_=new fi(g,l,f%h/d,m)}else a===null?E=new c(r.count*l):E=new c(a,f,r.count*l),_=new lt(E,l,m);if(r.sparse!==void 0){const p=Vo.SCALAR,A=Ui[r.sparse.indices.componentType],g=r.sparse.indices.byteOffset||0,T=r.sparse.values.byteOffset||0,y=new A(s[1],g,r.sparse.count*p),I=new c(s[2],T,r.sparse.count*l);a!==null&&(_=new lt(_.array.slice(),_.itemSize,_.normalized)),_.normalized=!1;for(let O=0,b=y.length;O<b;O++){const L=y[O];if(_.setX(L,I[O*l]),l>=2&&_.setY(L,I[O*l+1]),l>=3&&_.setZ(L,I[O*l+2]),l>=4&&_.setW(L,I[O*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}_.normalized=m}return _})}loadTexture(n){const t=this.json,i=this.options,o=t.textures[n].source,s=t.images[o];let a=this.textureLoader;if(s.uri){const l=i.manager.getHandler(s.uri);l!==null&&(a=l)}return this.loadTextureImage(n,o,a)}loadTextureImage(n,t,i){const r=this,o=this.json,s=o.textures[n],a=o.images[t],l=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=s.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const f=(o.samplers||{})[s.sampler]||{};return d.magFilter=dl[f.magFilter]||Bt,d.minFilter=dl[f.minFilter]||ui,d.wrapS=fl[f.wrapS]||zi,d.wrapT=fl[f.wrapT]||zi,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==_i&&d.minFilter!==Bt,r.associations.set(d,{textures:n}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(n,t){const i=this,r=this.json,o=this.options;if(this.sourceCache[n]!==void 0)return this.sourceCache[n].then(u=>u.clone());const s=r.images[n],a=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const f=new Blob([u],{type:s.mimeType});return l=a.createObjectURL(f),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+n+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(u){return new Promise(function(f,h){let m=f;t.isImageBitmapLoader===!0&&(m=function(E){const _=new dr(E);_.needsUpdate=!0,f(_)}),t.load(Di.resolveURL(u,o.path),m,void 0,h)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ut(u,s),u.userData.mimeType=s.mimeType||AT(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[n]=d,d}assignTexture(n,t,i,r){const o=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),o.extensions[qe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=o.associations.get(s);s=o.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),o.associations.set(s,l)}}return r!==void 0&&(s.colorSpace=r),n[t]=s,s})}assignFinalMaterial(n){const t=n.geometry;let i=n.material;const r=t.attributes.tangent===void 0,o=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(n.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ec,Io.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(n.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new po,Io.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||o||s){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),o&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),o&&(l.vertexColors=!0),s&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}n.material=i}getMaterialType(){return Sr}loadMaterial(n){const t=this,i=this.json,r=this.extensions,o=i.materials[n];let s;const a={},l=o.extensions||{},c=[];if(l[qe.KHR_MATERIALS_UNLIT]){const u=r[qe.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(a,o,t))}else{const u=o.pbrMetallicRoughness||{};if(a.color=new xe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],ct),a.opacity=f[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Cn)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(n)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(n,a)})))}o.doubleSided===!0&&(a.side=yt);const d=o.alphaMode||zo.OPAQUE;if(d===zo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===zo.MASK&&(a.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&s!==qn&&(c.push(t.assignTexture(a,"normalMap",o.normalTexture)),a.normalScale=new Un(1,1),o.normalTexture.scale!==void 0)){const u=o.normalTexture.scale;a.normalScale.set(u,u)}if(o.occlusionTexture!==void 0&&s!==qn&&(c.push(t.assignTexture(a,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&s!==qn){const u=o.emissiveFactor;a.emissive=new xe().setRGB(u[0],u[1],u[2],ct)}return o.emissiveTexture!==void 0&&s!==qn&&c.push(t.assignTexture(a,"emissiveMap",o.emissiveTexture,Cn)),Promise.all(c).then(function(){const u=new s(a);return o.name&&(u.name=o.name),Ut(u,o),t.associations.set(u,{materials:n}),o.extensions&&ri(r,u,o),u})}createUniqueName(n){const t=mr.sanitizeNodeName(n||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(n){const t=this,i=this.extensions,r=this.primitiveCache;function o(a){return i[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return pl(l,a,t)})}const s=[];for(let a=0,l=n.length;a<l;a++){const c=n[a],d=RT(c),u=r[d];if(u)s.push(u.promise);else{let f;c.extensions&&c.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=o(c):f=pl(new $n,c,t),r[d]={primitive:c,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(n){const t=this,i=this.json,r=this.extensions,o=i.meshes[n],s=o.primitives,a=[];for(let l=0,c=s.length;l<c;l++){const d=s[l].material===void 0?ET(this.cache):this.getDependency("material",s[l].material);a.push(d)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],u=[];for(let h=0,m=d.length;h<m;h++){const E=d[h],_=s[h];let p;const A=c[h];if(_.mode===_t.TRIANGLES||_.mode===_t.TRIANGLE_STRIP||_.mode===_t.TRIANGLE_FAN||_.mode===void 0)p=o.isSkinnedMesh===!0?new fo(E,A):new mn(E,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),_.mode===_t.TRIANGLE_STRIP?p.geometry=tl(p.geometry,hc):_.mode===_t.TRIANGLE_FAN&&(p.geometry=tl(p.geometry,os));else if(_.mode===_t.LINES)p=new lf(E,A);else if(_.mode===_t.LINE_STRIP)p=new Ar(E,A);else if(_.mode===_t.LINE_LOOP)p=new cf(E,A);else if(_.mode===_t.POINTS)p=new Tc(E,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+_.mode);Object.keys(p.geometry.morphAttributes).length>0&&gT(p,o),p.name=t.createUniqueName(o.name||"mesh_"+n),Ut(p,o),_.extensions&&ri(r,p,_),t.assignFinalMaterial(p),u.push(p)}for(let h=0,m=u.length;h<m;h++)t.associations.set(u[h],{meshes:n,primitives:h});if(u.length===1)return o.extensions&&ri(r,u[0],o),u[0];const f=new Ot;o.extensions&&ri(r,f,o),t.associations.set(f,{meshes:n});for(let h=0,m=u.length;h<m;h++)f.add(u[h]);return f})}loadCamera(n){let t;const i=this.json.cameras[n],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new $t(bn.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new Ms(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ut(t,i),Promise.resolve(t)}loadSkin(n){const t=this.json.skins[n],i=[];for(let r=0,o=t.joints.length;r<o;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),s=r,a=[],l=[];for(let c=0,d=s.length;c<d;c++){const u=s[c];if(u){a.push(u);const f=new $e;o!==null&&f.fromArray(o.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new co(a,l)})}loadAnimation(n){const t=this.json,i=this,r=t.animations[n],o=r.name?r.name:"animation_"+n,s=[],a=[],l=[],c=[],d=[];for(let u=0,f=r.channels.length;u<f;u++){const h=r.channels[u],m=r.samplers[h.sampler],E=h.target,_=E.node,p=r.parameters!==void 0?r.parameters[m.input]:m.input,A=r.parameters!==void 0?r.parameters[m.output]:m.output;E.node!==void 0&&(s.push(this.getDependency("node",_)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(m),d.push(E))}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(u){const f=u[0],h=u[1],m=u[2],E=u[3],_=u[4],p=[];for(let A=0,g=f.length;A<g;A++){const T=f[A],y=h[A],I=m[A],O=E[A],b=_[A];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const L=i._createAnimationTracks(T,y,I,O,b);if(L)for(let v=0;v<L.length;v++)p.push(L[v])}return new uo(o,void 0,p)})}createNodeMesh(n){const t=this.json,i=this,r=t.nodes[n];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const s=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),s})}loadNode(n){const t=this.json,i=this,r=t.nodes[n],o=i._loadNodeShallow(n),s=[],a=r.children||[];for(let c=0,d=a.length;c<d;c++)s.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(s),l]).then(function(c){const d=c[0],u=c[1],f=c[2];f!==null&&d.traverse(function(h){h.isSkinnedMesh&&h.bind(f,ST)});for(let h=0,m=u.length;h<m;h++)d.add(u[h]);return d})}_loadNodeShallow(n){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[n]!==void 0)return this.nodeCache[n];const o=t.nodes[n],s=o.name?r.createUniqueName(o.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(n)});return l&&a.push(l),o.camera!==void 0&&a.push(r.getDependency("camera",o.camera).then(function(c){return r._getNodeRef(r.cameraCache,o.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(n)}).forEach(function(c){a.push(c)}),this.nodeCache[n]=Promise.all(a).then(function(c){let d;if(o.isBone===!0?d=new hr:c.length>1?d=new Ot:c.length===1?d=c[0]:d=new Ln,d!==c[0])for(let u=0,f=c.length;u<f;u++)d.add(c[u]);if(o.name&&(d.userData.name=o.name,d.name=s),Ut(d,o),o.extensions&&ri(i,d,o),o.matrix!==void 0){const u=new $e;u.fromArray(o.matrix),d.applyMatrix4(u)}else o.translation!==void 0&&d.position.fromArray(o.translation),o.rotation!==void 0&&d.quaternion.fromArray(o.rotation),o.scale!==void 0&&d.scale.fromArray(o.scale);return r.associations.has(d)||r.associations.set(d,{}),r.associations.get(d).nodes=n,d}),this.nodeCache[n]}loadScene(n){const t=this.extensions,i=this.json.scenes[n],r=this,o=new Ot;i.name&&(o.name=r.createUniqueName(i.name)),Ut(o,i),i.extensions&&ri(t,o,i);const s=i.nodes||[],a=[];for(let l=0,c=s.length;l<c;l++)a.push(r.getDependency("node",s[l]));return Promise.all(a).then(function(l){for(let d=0,u=l.length;d<u;d++)o.add(l[d]);const c=d=>{const u=new Map;for(const[f,h]of r.associations)(f instanceof Io||f instanceof dr)&&u.set(f,h);return d.traverse(f=>{const h=r.associations.get(f);h!=null&&u.set(f,h)}),u};return r.associations=c(o),o})}_createAnimationTracks(n,t,i,r,o){const s=[],a=n.name?n.name:n.uuid,l=[];Vt[o.path]===Vt.weights?n.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(Vt[o.path]){case Vt.weights:c=ls;break;case Vt.rotation:c=Ki;break;case Vt.position:case Vt.scale:c=_r;break;default:switch(i.itemSize){case 1:c=ls;break;case 2:case 3:default:c=_r;break}break}const d=r.interpolation!==void 0?mT[r.interpolation]:gc,u=this._getArrayFromAccessor(i);for(let f=0,h=l.length;f<h;f++){const m=new c(l[f]+"."+Vt[o.path],t.array,u,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),s.push(m)}return s}_getArrayFromAccessor(n){let t=n.array;if(n.normalized){const i=fs(t.constructor),r=new Float32Array(t.length);for(let o=0,s=t.length;o<s;o++)r[o]=t[o]*i;t=r}return t}_createCubicSplineTrackInterpolant(n){n.createInterpolant=function(i){const r=this instanceof Ki?_T:Wc;return new r(this.times,this.values,this.getValueSize()/3,i)},n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function LT(e,n,t){const i=n.attributes,r=new ao;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new le(l[0],l[1],l[2]),new le(c[0],c[1],c[2])),a.normalized){const d=fs(Ui[a.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=n.targets;if(o!==void 0){const a=new le,l=new le;for(let c=0,d=o.length;c<d;c++){const u=o[c];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],h=f.min,m=f.max;if(h!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(h[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(h[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(h[2]),Math.abs(m[2]))),f.normalized){const E=fs(Ui[f.componentType]);l.multiplyScalar(E)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}e.boundingBox=r;const s=new ys;r.getCenter(s.center),s.radius=r.min.distanceTo(r.max)/2,e.boundingSphere=s}function pl(e,n,t){const i=n.attributes,r=[];function o(s,a){return t.getDependency("accessor",s).then(function(l){e.setAttribute(a,l)})}for(const s in i){const a=ds[s]||s.toLowerCase();a in e.attributes||r.push(o(i[s],a))}if(n.indices!==void 0&&!e.index){const s=t.getDependency("accessor",n.indices).then(function(a){e.setIndex(a)});r.push(s)}return un.workingColorSpace!==ct&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${un.workingColorSpace}" not supported.`),Ut(e,n),LT(e,n,t),Promise.all(r).then(function(){return n.targets!==void 0?TT(e,n.targets,t):e})}class _o extends mn{constructor(){const n=_o.SkyShader,t=new Wt({name:n.name,uniforms:so.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:at,depthWrite:!1});super(new Li(1,1,1),t),this.isSky=!0}}_o.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new le},up:{value:new le(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};class xT{static createButton(n,t={}){const i=document.createElement("button");function r(){if(t.domOverlay===void 0){const f=document.createElement("div");f.style.display="none",document.body.appendChild(f);const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.setAttribute("width",38),h.setAttribute("height",38),h.style.position="absolute",h.style.right="20px",h.style.top="20px",h.addEventListener("click",function(){c.end()}),f.appendChild(h);const m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),m.setAttribute("stroke","#fff"),m.setAttribute("stroke-width",2),h.appendChild(m),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:f}}let c=null;async function d(f){f.addEventListener("end",u),n.xr.setReferenceSpaceType("local"),await n.xr.setSession(f),i.textContent="STOP AR",t.domOverlay.root.style.display="",c=f}function u(){c.removeEventListener("end",u),i.textContent="START AR",t.domOverlay.root.style.display="none",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="START AR",i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(d):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(d).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(d).catch(f=>{console.warn(f)})}function o(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function s(){o(),i.textContent="AR NOT SUPPORTED"}function a(c){o(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="ARButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?r():s()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}class Yi{static createButton(n,t={}){const i=document.createElement("button");function r(){let c=null;async function d(h){h.addEventListener("end",u),await n.xr.setSession(h),i.textContent="EXIT VR",c=h}function u(){c.removeEventListener("end",u),i.textContent="ENTER VR",c=null}i.style.display="",i.style.cursor="pointer",i.style.left="calc(50% - 50px)",i.style.width="100px",i.textContent="ENTER VR";const f={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};i.onmouseenter=function(){i.style.opacity="1.0"},i.onmouseleave=function(){i.style.opacity="0.5"},i.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",f).then(d):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(d).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(d).catch(h=>{console.warn(h)})}function o(){i.style.display="",i.style.cursor="auto",i.style.left="calc(50% - 75px)",i.style.width="150px",i.onmouseenter=null,i.onmouseleave=null,i.onclick=null}function s(){o(),i.textContent="VR NOT SUPPORTED"}function a(c){o(),console.warn("Exception when trying to call xr.isSessionSupported",c),i.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return i.id="VRButton",i.style.display="none",l(i),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?r():s(),c&&Yi.xrSessionIsGranted&&i.click()}).catch(a),i;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Yi.xrSessionIsGranted=!0})}}}Yi.xrSessionIsGranted=!1;Yi.registerSessionGrantedListener();const yn={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function kc(e){const n=await fetch(e);if(n.ok)return n.json();throw new Error(n.statusText)}async function MT(e){if(!e)throw new Error("No basePath supplied");return await kc(`${e}/profilesList.json`)}async function yT(e,n,t=null,i=!0){if(!e)throw new Error("No xrInputSource supplied");if(!n)throw new Error("No basePath supplied");const r=await MT(n);let o;if(e.profiles.some(l=>{const c=r[l];return c&&(o={profileId:l,profilePath:`${n}/${c.path}`,deprecated:!!c.deprecated}),!!o}),!o){if(!t)throw new Error("No matching profile name found");const l=r[t];if(!l)throw new Error(`No matching profile name found and default profile "${t}" missing.`);o={profileId:t,profilePath:`${n}/${l.path}`,deprecated:!!l.deprecated}}const s=await kc(o.profilePath);let a;if(i){let l;if(e.handedness==="any"?l=s.layouts[Object.keys(s.layouts)[0]]:l=s.layouts[e.handedness],!l)throw new Error(`No matching handedness, ${e.handedness}, in profile ${o.profileId}`);l.assetPath&&(a=o.profilePath.replace("profile.json",l.assetPath))}return{profile:s,assetPath:a}}const IT={xAxis:0,yAxis:0,button:0,state:yn.ComponentState.DEFAULT};function OT(e=0,n=0){let t=e,i=n;if(Math.sqrt(e*e+n*n)>1){const s=Math.atan2(n,e);t=Math.cos(s),i=Math.sin(s)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:i*.5+.5}}class PT{constructor(n){this.componentProperty=n.componentProperty,this.states=n.states,this.valueNodeName=n.valueNodeName,this.valueNodeProperty=n.valueNodeProperty,this.valueNodeProperty===yn.VisualResponseProperty.TRANSFORM&&(this.minNodeName=n.minNodeName,this.maxNodeName=n.maxNodeName),this.value=0,this.updateFromComponent(IT)}updateFromComponent({xAxis:n,yAxis:t,button:i,state:r}){const{normalizedXAxis:o,normalizedYAxis:s}=OT(n,t);switch(this.componentProperty){case yn.ComponentProperty.X_AXIS:this.value=this.states.includes(r)?o:.5;break;case yn.ComponentProperty.Y_AXIS:this.value=this.states.includes(r)?s:.5;break;case yn.ComponentProperty.BUTTON:this.value=this.states.includes(r)?i:0;break;case yn.ComponentProperty.STATE:this.valueNodeProperty===yn.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(r):this.value=this.states.includes(r)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class NT{constructor(n,t){if(!n||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=n,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(i=>{const r=new PT(t.visualResponses[i]);this.visualResponses[i]=r}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:yn.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(n){if(this.values.state=yn.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&n.buttons.length>this.gamepadIndices.button){const t=n.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=yn.ComponentState.PRESSED:(t.touched||this.values.button>yn.ButtonTouchThreshold)&&(this.values.state=yn.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&n.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=n.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===yn.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>yn.AxisTouchThreshold&&(this.values.state=yn.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&n.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=n.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===yn.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>yn.AxisTouchThreshold&&(this.values.state=yn.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class CT{constructor(n,t,i){if(!n)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=n,this.assetUrl=i,this.id=t.profileId,this.layoutDescription=t.layouts[n.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(r=>{const o=this.layoutDescription.components[r];this.components[r]=new NT(r,o)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const n=[];return Object.values(this.components).forEach(t=>{n.push(t.data)}),n}updateFromGamepad(){Object.values(this.components).forEach(n=>{n.updateFromGamepad(this.xrInputSource.gamepad)})}}const bT="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",wT="generic-trigger";class FT extends Ln{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(n){return this.envMap==n?this:(this.envMap=n,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(n){super.updateMatrixWorld(n),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(i=>{const{valueNode:r,minNode:o,maxNode:s,value:a,valueNodeProperty:l}=i;r&&(l===yn.VisualResponseProperty.VISIBILITY?r.visible=a:l===yn.VisualResponseProperty.TRANSFORM&&(r.quaternion.slerpQuaternions(o.quaternion,s.quaternion,a),r.position.lerpVectors(o.position,s.position,a)))})}))}}function DT(e,n){Object.values(e.components).forEach(t=>{const{type:i,touchPointNodeName:r,visualResponses:o}=t;if(i===yn.ComponentType.TOUCHPAD)if(t.touchPointNode=n.getObjectByName(r),t.touchPointNode){const s=new Ps(.001),a=new qn({color:255}),l=new mn(s,a);t.touchPointNode.add(l)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(o).forEach(s=>{const{valueNodeName:a,minNodeName:l,maxNodeName:c,valueNodeProperty:d}=s;if(d===yn.VisualResponseProperty.TRANSFORM){if(s.minNode=n.getObjectByName(l),s.maxNode=n.getObjectByName(c),!s.minNode){console.warn(`Could not find ${l} in the model`);return}if(!s.maxNode){console.warn(`Could not find ${c} in the model`);return}}s.valueNode=n.getObjectByName(a),s.valueNode||console.warn(`Could not find ${a} in the model`)})})}function hl(e,n){DT(e.motionController,n),e.envMap&&n.traverse(t=>{t.isMesh&&(t.material.envMap=e.envMap,t.material.needsUpdate=!0)}),e.add(n)}class UT{constructor(n=null,t=null){this.gltfLoader=n,this.path=bT,this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new zE)}setPath(n){return this.path=n,this}createControllerModel(n){const t=new FT;let i=null;return n.addEventListener("connected",r=>{const o=r.data;o.targetRayMode!=="tracked-pointer"||!o.gamepad||o.hand||yT(o,this.path,wT).then(({profile:s,assetPath:a})=>{t.motionController=new CT(o,s,a);const l=this._assetCache[t.motionController.assetUrl];if(l)i=l.scene.clone(),hl(t,i),this.onLoad&&this.onLoad(i);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,c=>{this._assetCache[t.motionController.assetUrl]=c,i=c.scene.clone(),hl(t,i),this.onLoad&&this.onLoad(i)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(s=>{console.warn(s)})}),n.addEventListener("disconnected",()=>{t.motionController=null,t.remove(i),i=null}),t}}const HT="/assets/fabric_190_Albedo-1K-HSpa-1hU.png",GT="/assets/fabric_190_AmbientOcclusion-1K-3FW3CGUr.png",BT="/assets/fabric_190_Height-1K-EsEO1BHO.png",WT="/assets/fabric_190_Normal-1K-Cnw0HIKM.png",kT="/assets/fabric_190_Roughness-1K-BL2uDr8A.png",VT="/assets/uv_grid_opengl-CxHLLdXG.jpg",zT="/assets/Logo-DrPUxpL3.png";let bs,ws;async function XT(){const e=new Is,[n,t,i,r,o,s,a]=await Promise.all([e.loadAsync(HT),e.loadAsync(GT),e.loadAsync(BT),e.loadAsync(WT),e.loadAsync(kT),e.loadAsync(VT),e.loadAsync(zT)]);bs=new Xr({aoMap:t,displacementMap:i,displacementScale:5,map:n,normalMap:r,bumpMap:o,bumpScale:1.3}),ws=a}const KT="/assets/button-4-214382-E-AwFSJf.mp3",YT="/assets/crowd-of-people-talking-29054-BKsR_Ad7.mp3",jT="/assets/welcome-Crt9nPRG.mp3",ar={};async function qT(){const e=new ff,[n,t,i]=await Promise.all([e.loadAsync(KT),e.loadAsync(YT),e.loadAsync(jT)]);ar.button4=n,ar.crowdOfPeopleTalking=t,ar.welcome=i}const $T="/assets/pirouette-eR-zdDdj.bvh",ZT="/assets/01_14-BMk7wjs3.bvh",JT="/assets/05_06-Ox2sEzJV.bvh",QT="/assets/25_01-CMRfgY19.bvh",eg="/assets/137_16-Cwoyb09B.bvh",Ci={};async function ng(){const e=new NE,[n,t,i,r,o]=await Promise.all([e.loadAsync($T),e.loadAsync(ZT),e.loadAsync(JT),e.loadAsync(QT),e.loadAsync(eg)]);Ci.pirouette=n,Ci.animation0114=t,Ci.animation0506=i,Ci.animation2501=r,Ci.animation13716=o}var tg={2:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GltfBuilder=void 0;var i=t(902),r=t(490),o=function(){function s(){this.buffers=[],this.bufferViews=[],this.accessors=[],this.meshes=[],this.nodes=[],this.materials=[],this.sceneNodes=[]}return s.prototype.typedArrayToBase64=function(a){var l,c=new Uint8Array(a.buffer);if(typeof Buffer<"u")l=Buffer.from(c).toString("base64");else{var d="";c.forEach(function(u){return d+=String.fromCharCode(u)}),l=btoa(d)}return{base64String:l,byteLength:c.byteLength}},s.prototype.createBuffer=function(a){var l=a.base64String,c=a.byteLength,d={uri:"data:application/octet-stream;base64,".concat(l),byteLength:c};return this.addBuffer(d)},s.prototype.addBuffer=function(a){return this.buffers.push(a),this.buffers.length-1},s.prototype.createBufferView=function(a,l,c){var d={buffer:a,byteOffset:0,byteLength:l.byteLength,target:c};return this.addBufferView(d)},s.prototype.addBufferView=function(a){return this.bufferViews.push(a),this.bufferViews.length-1},s.prototype.createMaterial=function(a){var l={name:"some_material",pbrMetallicRoughness:{baseColorFactor:a}};return this.addMaterial(l)},s.prototype.addMaterial=function(a){return this.materials.push(a),this.materials.length-1},s.prototype.createAccessorVec3=function(a,l,c){var d={bufferView:a,byteOffset:0,componentType:5126,count:l,type:"VEC3",max:[c.max[0],c.max[1],c.max[2]],min:[c.min[0],c.min[1],c.min[2]]};return this.addAccessor(d)},s.prototype.createAccessorScalar=function(a,l){var c={bufferView:a,byteOffset:0,componentType:5123,count:l,type:"SCALAR"};return this.addAccessor(c)},s.prototype.addAccessor=function(a){return this.accessors.push(a),this.accessors.length-1},s.prototype.addMesh=function(a){return this.meshes.push(a),this.meshes.length-1},s.prototype.addNode=function(a){return this.nodes.push(a),this.nodes.length-1},s.prototype.addSceneNode=function(a){this.sceneNodes.push(a)},s.prototype.createGltfPoints=function(a,l){var c=a.verticesCount,d=a.extent,u=a.vertices,f=this.typedArrayToBase64(u),h=this.createBuffer(f),m=this.createBufferView(h,f,r.BufferViewTarget.ARRAY_BUFFER),E=this.createAccessorVec3(m,c,d),_=l||(0,i.createRandomBaseColorFactor)(),p=this.createMaterial(_),A=this.addMesh({primitives:[{attributes:{POSITION:E},material:p,mode:0}]}),g=this.addNode({mesh:A});this.addSceneNode(g)},s.prototype.createGltfLines=function(a,l,c){var d=a.vertices,u=a.verticesCount,f=a.indexes,h=a.indexesCount,m=a.extent,E=this.typedArrayToBase64(d),_=this.typedArrayToBase64(f),p=this.createBuffer(E),A=this.createBuffer(_),g=this.createBufferView(p,E,r.BufferViewTarget.ARRAY_BUFFER),T=this.createBufferView(A,_,r.BufferViewTarget.ELEMENT_ARRAY_BUFFER),y=this.createAccessorVec3(g,u,m),I=this.createAccessorScalar(T,h),O=c||(0,i.createRandomBaseColorFactor)(),b=this.createMaterial(O),L=this.addMesh({primitives:[{attributes:{POSITION:y},indices:I,material:b,mode:l}]}),v=this.addNode({mesh:L});this.addSceneNode(v)},s.prototype.createGltfTriangles=function(a,l,c){var d=a.vertices,u=a.verticesCount,f=a.indexes,h=a.indexesCount,m=a.normals,E=a.normalsCount,_=a.extent,p=this.typedArrayToBase64(d),A=this.typedArrayToBase64(f),g=this.typedArrayToBase64(m),T=this.createBuffer(p),y=this.createBuffer(A),I=this.createBuffer(g),O=this.createBufferView(T,p,r.BufferViewTarget.ARRAY_BUFFER),b=this.createBufferView(y,A,r.BufferViewTarget.ELEMENT_ARRAY_BUFFER),L=this.createBufferView(I,g,r.BufferViewTarget.ARRAY_BUFFER),v=this.createAccessorVec3(O,u,_),P=this.createAccessorScalar(b,h),k=this.createAccessorVec3(L,E,_),V=c||(0,i.createRandomBaseColorFactor)(),K=this.createMaterial(V),ee=this.addMesh({primitives:[{attributes:{POSITION:v,NORMAL:k},indices:P,material:K,mode:l}]}),W=this.addNode({mesh:ee});this.addSceneNode(W)},s.prototype.build=function(){return{scene:0,scenes:[{nodes:this.sceneNodes}],nodes:this.nodes,meshes:this.meshes,buffers:this.buffers,bufferViews:this.bufferViews,accessors:this.accessors,materials:this.materials,asset:{version:"2.0"}}},s}();n.GltfBuilder=o},82:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LinesBuilder=void 0;var i=t(71),r=t(457),o=t(425),s=t(818),a=function(){function l(c,d,u,f,h){u===void 0&&(u=1),this.verticesCount=c,this.indexesCount=d,this.scale=u,this.mode=f,this.baseColorFactor=h,this.indexCounter=-1,this.vertexCounter=-1,this.vertices=new Float32Array(3*c),this.indexes=new Uint16Array(d),this.extent=(0,o.initialiseExtent)()}return l.prototype.addIndex=function(c){return this.indexCounter++,this.indexes[this.indexCounter]=c,this.indexCounter},l.prototype.addVertex=function(c){this.vertexCounter++;var d=Array.isArray(c)?c:(0,r.convertPointObjectToPoint)(c);d=(0,s.scalePoint)(d,this.scale),(0,i.checkExtents)(d,this.extent);var u=3*this.vertexCounter,f=d[0],h=d[1],m=d[2];return this.vertices[u]=f,this.vertices[u+1]=h,this.vertices[u+2]=m,this.vertexCounter},l.prototype.addLine=function(c,d){var u=this.addVertex(c),f=this.addVertex(d);this.addIndex(u),this.addIndex(f)},l.prototype.build=function(){var c=this,d=c.verticesCount,u=c.indexesCount,f=c.extent;return{verticesCount:d,indexesCount:u,vertices:c.vertices,indexes:c.indexes,extent:f}},l.prototype.buildGltf=function(c){c.createGltfLines(this.build(),this.mode,this.baseColorFactor)},l}();n.LinesBuilder=a},732:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PointsBuilder=void 0;var i=t(71),r=t(457),o=t(425),s=t(818),a=function(){function l(c,d,u){d===void 0&&(d=1),this.verticesCount=c,this.scale=d,this.baseColorFactor=u,this.vertexCounter=-1,this.verticesCount=c,this.vertices=new Float32Array(3*c),this.extent=(0,o.initialiseExtent)(),this.scale=d}return l.prototype.addVertex=function(c){this.vertexCounter++;var d=Array.isArray(c)?c:(0,r.convertPointObjectToPoint)(c);d=(0,s.scalePoint)(d,this.scale),(0,i.checkExtents)(d,this.extent);var u=3*this.vertexCounter,f=d[0],h=d[1],m=d[2];return this.vertices[u]=f,this.vertices[u+1]=h,this.vertices[u+2]=m,this.vertexCounter},l.prototype.addVertices=function(c){var d=this;c.map(function(u){return d.addVertex(u)})},l.prototype.build=function(){var c=this,d=c.verticesCount,u=c.extent;return{verticesCount:d,vertices:c.vertices,extent:u}},l.prototype.buildGltf=function(c){c.createGltfPoints(this.build(),this.baseColorFactor)},l}();n.PointsBuilder=a},920:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TrianglesBuilder=void 0;var i=t(71),r=t(457),o=t(425),s=t(818),a=function(){function l(c,d,u,f,h,m){f===void 0&&(f=1),this.verticesCount=c,this.indexesCount=d,this.normalsCount=u,this.scale=f,this.mode=h,this.baseColorFactor=m,this.vertexCounter=-1,this.indexCounter=-1,this.normalCounter=-1,this.vertices=new Float32Array(3*c),this.indexes=new Uint16Array(d),this.normals=new Float32Array(3*u),this.extent=(0,o.initialiseExtent)()}return l.prototype.addIndex=function(c){return this.indexCounter++,this.indexes[this.indexCounter]=c,this.indexCounter},l.prototype.addVertex=function(c){this.vertexCounter++;var d=Array.isArray(c)?c:(0,r.convertPointObjectToPoint)(c),u=3*this.vertexCounter;d=(0,s.scalePoint)(d,this.scale),(0,i.checkExtents)(d,this.extent);var f=d[0],h=d[1],m=d[2];return this.vertices[u]=f,this.vertices[u+1]=h,this.vertices[u+2]=m,this.vertexCounter},l.prototype.addNormal=function(c){this.normalCounter++;var d=Array.isArray(c)?c:(0,r.convertPointObjectToPoint)(c),u=3*this.normalCounter,f=d[0],h=d[1],m=d[2];return this.normals[u]=f,this.normals[u+1]=h,this.normals[u+2]=m,this.normalCounter},l.prototype.addTriangle=function(c,d,u){var f=this.addVertex(c),h=this.addVertex(d),m=this.addVertex(u);this.addIndex(f),this.addIndex(h),this.addIndex(m)},l.prototype.build=function(){var c=this;return{verticesCount:c.verticesCount,indexesCount:c.indexesCount,normalsCount:c.normalsCount,vertices:c.vertices,indexes:c.indexes,normals:c.normals,extent:c.extent}},l.prototype.buildGltf=function(c){c.createGltfTriangles(this.build(),this.mode,this.baseColorFactor)},l}();n.TrianglesBuilder=a},71:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.checkExtents=void 0,n.checkExtents=function(t,i){t[0]<i.min[0]&&(i.min[0]=t[0]),t[1]<i.min[1]&&(i.min[1]=t[1]),t[2]<i.min[2]&&(i.min[2]=t[2]),t[0]>i.max[0]&&(i.max[0]=t[0]),t[1]>i.max[1]&&(i.max[1]=t[1]),t[2]>i.max[2]&&(i.max[2]=t[2])}},457:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.convertPointObjectToPoint=void 0,n.convertPointObjectToPoint=function(t){return[t.x,t.y,t.z]}},902:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createRandomBaseColorFactor=void 0,n.createRandomBaseColorFactor=function(){return[Math.random(),Math.random(),Math.random(),Math.random()]}},425:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.initialiseExtent=void 0;var t=1e6;n.initialiseExtent=function(){return{min:[t,t,t],max:[-1e6,-1e6,-1e6]}}},818:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.scalePoint=void 0,n.scalePoint=function(t,i){return[t[0]/i,t[1]/i,t[2]/i]}},821:(e,n,t)=>{n.rl=n.xO=n.Vv=n.T3=n.NE=n.dT=n.Zh=void 0;var i=t(2);Object.defineProperty(n,"Zh",{enumerable:!0,get:function(){return i.GltfBuilder}});var r=t(82);Object.defineProperty(n,"dT",{enumerable:!0,get:function(){return r.LinesBuilder}});var o=t(732);Object.defineProperty(n,"NE",{enumerable:!0,get:function(){return o.PointsBuilder}});var s=t(920);Object.defineProperty(n,"T3",{enumerable:!0,get:function(){return s.TrianglesBuilder}});var a=t(490);Object.defineProperty(n,"Vv",{enumerable:!0,get:function(){return a.LineType}}),Object.defineProperty(n,"xO",{enumerable:!0,get:function(){return a.TriangleType}});var l=t(902);Object.defineProperty(n,"rl",{enumerable:!0,get:function(){return l.createRandomBaseColorFactor}})},490:(e,n)=>{var t,i,r;Object.defineProperty(n,"__esModule",{value:!0}),n.BufferViewTarget=n.TriangleType=n.LineType=n.scale=void 0,n.scale=1e4,function(o){o[o.LINES=1]="LINES",o[o.LINE_LOOP=2]="LINE_LOOP",o[o.LINE_STRIP=3]="LINE_STRIP"}(t||(n.LineType=t={})),function(o){o[o.TRIANGLES=4]="TRIANGLES",o[o.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",o[o.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(i||(n.TriangleType=i={})),function(o){o[o.ARRAY_BUFFER=34962]="ARRAY_BUFFER",o[o.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(r||(n.BufferViewTarget=r={}))}},_l={};function pi(e){var n=_l[e];if(n!==void 0)return n.exports;var t=_l[e]={exports:{}};return tg[e](t,t.exports,pi),t.exports}pi.d=(e,n)=>{for(var t in n)pi.o(n,t)&&!pi.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},pi.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var U,Zn={};pi.d(Zn,{wx:()=>sR,L7:()=>U,eF:()=>Wg,Ep:()=>Pg,uT:()=>uR,lw:()=>Og,GO:()=>Dg,S5:()=>Hi,xM:()=>Fs,lo:()=>Ig,jB:()=>Hg,yZ:()=>yg,qu:()=>Gg,hC:()=>ru}),function(e){e[e.TOP_HEAD=1]="TOP_HEAD",e[e.CHIN=2]="CHIN",e[e.NAPE=3]="NAPE",e[e.NAPE_INTERNAL=4]="NAPE_INTERNAL",e[e.NAPE_LEVEL=5]="NAPE_LEVEL",e[e.NECK_INTERNAL=6]="NECK_INTERNAL",e[e.FRONT_NECK=7]="FRONT_NECK",e[e.LEFT_SIDE_NECK=8]="LEFT_SIDE_NECK",e[e.RIGHT_SIDE_NECK=9]="RIGHT_SIDE_NECK",e[e.LEFT_SHOULDER=10]="LEFT_SHOULDER",e[e.RIGHT_SHOULDER=11]="RIGHT_SHOULDER",e[e.LEFT_ARMPIT=12]="LEFT_ARMPIT",e[e.RIGHT_ARMPIT=13]="RIGHT_ARMPIT",e[e.ARMPIT_INTERNAL=14]="ARMPIT_INTERNAL",e[e.CHEST_INTERNAL=15]="CHEST_INTERNAL",e[e.CHEST_LEVEL=16]="CHEST_LEVEL",e[e.LOW_CHEST_LEVEL=17]="LOW_CHEST_LEVEL",e[e.LOW_CHEST_INTERNAL=18]="LOW_CHEST_INTERNAL",e[e.LEFT_NIPPLE=19]="LEFT_NIPPLE",e[e.RIGHT_NIPPLE=20]="RIGHT_NIPPLE",e[e.REAR_WAIST=21]="REAR_WAIST",e[e.FRONT_WAIST=22]="FRONT_WAIST",e[e.WAIST_INTERNAL=23]="WAIST_INTERNAL",e[e.WAIST_LEVEL=24]="WAIST_LEVEL",e[e.TOP_HIP_LEVEL=25]="TOP_HIP_LEVEL",e[e.SEAT_PROMINENCE=26]="SEAT_PROMINENCE",e[e.HIP_INTERNAL=27]="HIP_INTERNAL",e[e.HIP_LEVEL=28]="HIP_LEVEL",e[e.CROTCH=29]="CROTCH",e[e.FRONT_CHEST=31]="FRONT_CHEST",e[e.FRONT_LOW_CHEST=32]="FRONT_LOW_CHEST",e[e.MID_WAIST_INTERNAL=33]="MID_WAIST_INTERNAL",e[e.MID_WAIST_LEVEL=34]="MID_WAIST_LEVEL",e[e.BACK_PROMINENCE=35]="BACK_PROMINENCE",e[e.ABDOMEN_PROMINENCE=36]="ABDOMEN_PROMINENCE",e[e.BACK_ARCH=37]="BACK_ARCH",e[e.LOWER_BUTTOCK=38]="LOWER_BUTTOCK",e[e.UPPER_ABDOMEN=39]="UPPER_ABDOMEN",e[e.LOWER_ABDOMEN=40]="LOWER_ABDOMEN",e[e.LEFT_SIDE_WAIST_BILATERAL=41]="LEFT_SIDE_WAIST_BILATERAL",e[e.RIGHT_SIDE_WAIST_BILATERAL=42]="RIGHT_SIDE_WAIST_BILATERAL",e[e.SHOULDER_INTERNAL=43]="SHOULDER_INTERNAL",e[e.LEFT_ARMPIT_INTERNAL=46]="LEFT_ARMPIT_INTERNAL",e[e.RIGHT_ARMPIT_INTERNAL=47]="RIGHT_ARMPIT_INTERNAL",e[e.REAR_MID_WAIST=48]="REAR_MID_WAIST",e[e.FRONT_MID_WAIST=49]="FRONT_MID_WAIST",e[e.LEFT_TOP_THIGH_INTERNAL=50]="LEFT_TOP_THIGH_INTERNAL",e[e.RIGHT_TOP_THIGH_INTERNAL=51]="RIGHT_TOP_THIGH_INTERNAL",e[e.LEFT_TOP_THIGH_LEVEL=52]="LEFT_TOP_THIGH_LEVEL",e[e.RIGHT_TOP_THIGH_LEVEL=53]="RIGHT_TOP_THIGH_LEVEL",e[e.LEFT_KNEE_INTERNAL=54]="LEFT_KNEE_INTERNAL",e[e.RIGHT_KNEE_INTERNAL=55]="RIGHT_KNEE_INTERNAL",e[e.LEFT_KNEE_LEVEL=56]="LEFT_KNEE_LEVEL",e[e.RIGHT_KNEE_LEVEL=57]="RIGHT_KNEE_LEVEL",e[e.LEFT_CALF=58]="LEFT_CALF",e[e.RIGHT_CALF=59]="RIGHT_CALF",e[e.LEFT_CALF_LEVEL=60]="LEFT_CALF_LEVEL",e[e.RIGHT_CALF_LEVEL=61]="RIGHT_CALF_LEVEL",e[e.LEFT_MINIMUM_LEG_INTERNAL=62]="LEFT_MINIMUM_LEG_INTERNAL",e[e.RIGHT_MINIMUM_LEG_INTERNAL=63]="RIGHT_MINIMUM_LEG_INTERNAL",e[e.LEFT_MINIMUM_LEG_LEVEL=64]="LEFT_MINIMUM_LEG_LEVEL",e[e.RIGHT_MINIMUM_LEG_LEVEL=65]="RIGHT_MINIMUM_LEG_LEVEL",e[e.LEFT_ANKLE_INTERNAL=66]="LEFT_ANKLE_INTERNAL",e[e.RIGHT_ANKLE_INTERNAL=67]="RIGHT_ANKLE_INTERNAL",e[e.LEFT_ANKLE_LEVEL=68]="LEFT_ANKLE_LEVEL",e[e.RIGHT_ANKLE_LEVEL=69]="RIGHT_ANKLE_LEVEL",e[e.LEFT_FLOOR=70]="LEFT_FLOOR",e[e.RIGHT_FLOOR=71]="RIGHT_FLOOR",e[e.LEFT_FLOOR_LEVEL=72]="LEFT_FLOOR_LEVEL",e[e.RIGHT_FLOOR_LEVEL=73]="RIGHT_FLOOR_LEVEL",e[e.LEFT_MID_THIGH_LEVEL=75]="LEFT_MID_THIGH_LEVEL",e[e.RIGHT_MID_THIGH_LEVEL=76]="RIGHT_MID_THIGH_LEVEL",e[e.LEFT_TOP_ARM_INTERNAL=100]="LEFT_TOP_ARM_INTERNAL",e[e.RIGHT_TOP_ARM_INTERNAL=101]="RIGHT_TOP_ARM_INTERNAL",e[e.LEFT_TOP_ARM_LEVEL=102]="LEFT_TOP_ARM_LEVEL",e[e.RIGHT_TOP_ARM_LEVEL=103]="RIGHT_TOP_ARM_LEVEL",e[e.LEFT_ELBOW=104]="LEFT_ELBOW",e[e.RIGHT_ELBOW=105]="RIGHT_ELBOW",e[e.LEFT_ARMCREASE=106]="LEFT_ARMCREASE",e[e.RIGHT_ARMCREASE=107]="RIGHT_ARMCREASE",e[e.LEFT_ELBOW_INTERNAL=108]="LEFT_ELBOW_INTERNAL",e[e.RIGHT_ELBOW_INTERNAL=109]="RIGHT_ELBOW_INTERNAL",e[e.LEFT_WRIST_INNER=110]="LEFT_WRIST_INNER",e[e.RIGHT_WRIST_INNER=111]="RIGHT_WRIST_INNER",e[e.LEFT_WRIST_OUTER=112]="LEFT_WRIST_OUTER",e[e.RIGHT_WRIST_OUTER=113]="RIGHT_WRIST_OUTER",e[e.LEFT_WRIST_INTERNAL=114]="LEFT_WRIST_INTERNAL",e[e.RIGHT_WRIST_INTERNAL=115]="RIGHT_WRIST_INTERNAL",e[e.LEFT_WRIST_LEVEL=116]="LEFT_WRIST_LEVEL",e[e.RIGHT_WRIST_LEVEL=117]="RIGHT_WRIST_LEVEL",e[e.LEFT_HAND=118]="LEFT_HAND",e[e.RIGHT_HAND=119]="RIGHT_HAND",e[e.CWALL_L_HIGH_CHEST=1501]="CWALL_L_HIGH_CHEST",e[e.CWALL_L_ARMPIT=1502]="CWALL_L_ARMPIT",e[e.CWALL_L_CHEST=1503]="CWALL_L_CHEST",e[e.CWALL_L_LOW_CHEST=1504]="CWALL_L_LOW_CHEST",e[e.CWALL_L_WAIST=1505]="CWALL_L_WAIST",e[e.CWALL_MID_HIGH_CHEST=1506]="CWALL_MID_HIGH_CHEST",e[e.CWALL_MID_ARMPIT=1507]="CWALL_MID_ARMPIT",e[e.CWALL_MID_CHEST=1508]="CWALL_MID_CHEST",e[e.CWALL_MID_LOW_CHEST=1509]="CWALL_MID_LOW_CHEST",e[e.CWALL_MID_WAIST=1510]="CWALL_MID_WAIST",e[e.CWALL_R_HIGH_CHEST=1511]="CWALL_R_HIGH_CHEST",e[e.CWALL_R_ARMPIT=1512]="CWALL_R_ARMPIT",e[e.CWALL_R_CHEST=1513]="CWALL_R_CHEST",e[e.CWALL_R_LOW_CHEST=1514]="CWALL_R_LOW_CHEST",e[e.CWALL_R_WAIST=1515]="CWALL_R_WAIST"}(U||(U={}));const Fs=new Map([[1,{name:"Top of head",spline:!0}],[2,{name:"Chin"}],[3,{name:"Nape"}],[4,{name:"Nape internal"}],[5,{name:"Nape level"}],[6,{name:"Neck internal",important:!0,spline:!0}],[7,{name:"Front neck",deform:!0}],[8,{name:"Left side neck"}],[9,{name:"Right side neck"}],[10,{name:"Left shoulder",deform:!0}],[11,{name:"Right shoulder",deform:!0}],[12,{name:"Left armpit",important:!0,partition:!0}],[13,{name:"Right armpit",important:!0,partition:!0}],[14,{name:"Armpit internal"}],[15,{name:"Chest internal"}],[16,{name:"Chest level",deform:!0}],[17,{name:"Low chest level",important:!0,deform:!0}],[18,{name:"Low chest internal"}],[19,{name:"Left nipple"}],[20,{name:"Right nipple"}],[21,{name:"Rear waist"}],[22,{name:"Front waist"}],[23,{name:"Waist internal",spline:!0}],[24,{name:"Waist level",important:!0}],[25,{name:"Top hip level"}],[26,{name:"Seat prominence",deform:!0}],[27,{name:"Hip internal",deform:!0}],[28,{name:"Hip level",important:!0}],[29,{name:"Crotch",important:!0,partition:!0}],[31,{name:"Front chest"}],[32,{name:"Front low chest"}],[33,{name:"Mid waist internal"}],[34,{name:"Mid waist level"}],[35,{name:"Back prominence"}],[36,{name:"Abdomen prominence"}],[37,{name:"Back arch"}],[38,{name:"Lower buttock"}],[39,{name:"Upper abdomen"}],[40,{name:"Lower abdomen"}],[41,{name:"Left side waist bilateral"}],[42,{name:"Right side waist bilateral"}],[43,{name:"Shoulder internal"}],[46,{name:"Left armpit internal"}],[47,{name:"Right armpit internal"}],[48,{name:"Rear mid waist"}],[49,{name:"Front mid waist"}],[50,{name:"Left top thigh internal",spline:!0}],[51,{name:"Right top thigh internal",spline:!0}],[52,{name:"Left top thigh level"}],[53,{name:"Right top thigh level"}],[54,{name:"Left knee internal",spline:!0}],[55,{name:"Right knee internal",spline:!0}],[56,{name:"Left knee level",important:!0}],[57,{name:"Right knee level",important:!0}],[58,{name:"Left calf"}],[59,{name:"Right calf"}],[60,{name:"Left calf level"}],[61,{name:"Right calf level"}],[62,{name:"Left minimum leg internal"}],[63,{name:"Right minimum leg internal"}],[64,{name:"Left minimum leg level"}],[65,{name:"Right minimum leg level"}],[66,{name:"Left ankle internal",spline:!0}],[67,{name:"Right ankle internal",spline:!0}],[68,{name:"Left ankle level",important:!0}],[69,{name:"Right ankle level",important:!0}],[70,{name:"Left floor",spline:!0}],[71,{name:"Right floor",spline:!0}],[72,{name:"Left floor level"}],[73,{name:"Right floor level"}],[75,{name:"Left mid thigh level"}],[76,{name:"Right mid thigh level"}],[100,{name:"Left top arm internal",spline:!0}],[101,{name:"Right top arm internal",spline:!0}],[102,{name:"Left top arm level"}],[103,{name:"Right top arm level"}],[104,{name:"Left elbow",important:!0}],[105,{name:"Right elbow",important:!0}],[106,{name:"Left armcrease"}],[107,{name:"Right armcrease"}],[108,{name:"Left elbow internal",spline:!0}],[109,{name:"Right elbow internal",spline:!0}],[110,{name:"Left wrist inner",important:!0}],[111,{name:"Right wrist inner",important:!0}],[112,{name:"Left wrist outer"}],[113,{name:"Right wrist outer"}],[114,{name:"Left wrist internal",deform:!0,spline:!0}],[115,{name:"Right wrist internal",deform:!0,spline:!0}],[116,{name:"Left wrist level"}],[117,{name:"Right wrist level"}],[118,{name:"Left hand",spline:!0}],[119,{name:"Right hand",spline:!0}],[1501,{name:"Chestwall left high chest"}],[1502,{name:"Chestwall left armpit"}],[1503,{name:"Chestwall left chest"}],[1504,{name:"Chestwall left low chest"}],[1505,{name:"Chestwall left waist"}],[1506,{name:"Chestwall mid high chest"}],[1507,{name:"Chestwall mid armpit"}],[1508,{name:"Chestwall mid chest"}],[1509,{name:"Chestwall mid low chest"}],[1510,{name:"Chestwall mid waist"}],[1511,{name:"Chestwall right high chest"}],[1512,{name:"Chestwall right armpit"}],[1513,{name:"Chestwall right chest"}],[1514,{name:"Chestwall right low chest"}],[1515,{name:"Chestwall right waist"}]]);function Hi(e){return U[e]!==void 0?e:void 0}var Gi,Qr,Z;(function(e){e[e.FEMALE=0]="FEMALE",e[e.MALE=1]="MALE"})(Gi||(Gi={})),function(e){e.LE="LE",e.BE="BE"}(Qr||(Qr={}));class Vc{constructor(n,t=!1,i=Qr.LE){this.buffer=n,this.dryRun=t,this.endianness=i,this.position=0,this.littleEndian=this.endianness===Qr.LE,this.dataView=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength)}readDouble(){const n=this.dataView.getFloat64(this.position,this.littleEndian);return this.position+=8,n}readFloat(){const n=this.dataView.getFloat32(this.position,this.littleEndian);return this.position+=4,n}readByte(){const n=this.dataView.getInt8(this.position);return this.position+=1,n}readShort(){const n=this.dataView.getInt16(this.position,this.littleEndian);return this.position+=2,n}readInt(){const n=this.dataView.getInt32(this.position,this.littleEndian);return this.position+=4,n}readBoolean(){return this.readShort()===-1}readSexType(){return this.readBoolean()?Gi.MALE:Gi.FEMALE}writeDouble(n){this.dryRun||this.dataView.setFloat64(this.position,n,this.littleEndian),this.position+=8}writeFloat(n){this.dryRun||this.dataView.setFloat32(this.position,n,this.littleEndian),this.position+=4}writeByte(n){this.dryRun||this.dataView.setInt8(this.position,n),this.position+=1}writeShort(n){this.dryRun||this.dataView.setInt16(this.position,n,this.littleEndian),this.position+=2}writeInt(n){this.dryRun||this.dataView.setInt32(this.position,n,this.littleEndian),this.position+=4}writeBoolean(n){this.writeShort(n?-1:0)}writeSexType(n){this.writeBoolean(n===Gi.MALE)}close(){}}class zc{setHeader(n){this.bodyHeader=n,this.bodyParts=[]}setFlags(n){this.flags=n}setLandmarks(n){this.landmarks=n}setReferenceLocations(n){this.referenceLocations=n}setPersonDetails(n){this.personDetails=n}setMeasurements(n){this.measurements=n}setChestWallDefinition(n){this.chestWallDefinition=n}setNormaliseResolution(n){this.normaliseResolution=n}addBodyParts(...n){n.forEach(t=>this.bodyParts.push(t))}build(){return Object.assign(Object.assign(Object.assign({},this.bodyHeader),this.flags),{landmarks:this.landmarks,referenceLocations:this.referenceLocations,personDetails:this.personDetails,measurements:this.measurements,normaliseResolution:this.normaliseResolution,bodyParts:this.bodyParts,chestWallDefinition:this.chestWallDefinition})}}function Lr(e){e.mid=function(n){return{x:(n.min.x+n.max.x)/2,y:(n.min.y+n.max.y)/2,z:(n.min.z+n.max.z)/2}}(e),e.difference=function(n){return{x:n.max.x-n.min.x,y:n.max.y-n.min.y,z:n.max.z-n.min.z}}(e)}function Xc(e,n){const t={max:e,min:n};return Lr(t),t}function mo(){return Xc({x:-32700,y:-32700,z:-32700},{x:32700,y:32700,z:32700})}function Kc(e,n){n.x>e.max.x&&(e.max.x=n.x),n.x<e.min.x&&(e.min.x=n.x),n.y>e.max.y&&(e.max.y=n.y),n.y<e.min.y&&(e.min.y=n.y),n.z>e.max.z&&(e.max.z=n.z),n.z<e.min.z&&(e.min.z=n.z)}function Yc(e){const n=mo();for(const t of e)Kc(n,t);return Lr(n),n}function ml(e,n,t){e.min.x=n.min.x,e.min.y=t,e.min.z=n.min.y,e.max.x=n.max.x,e.max.y=t,e.max.z=n.max.y}function jc(e){e.mid={x:(e.min.x+e.max.x)/2,y:(e.min.y+e.max.y)/2}}class Ds{setPoint(n){this.point=n}setColour(n){this.colour=n}build(){return{point:this.point,colour:this.colour}}}function El(e,n,t){const i=t-n;return e.a+e.b*i+e.c*i*i+e.d*i*i*i}function xr(e,n,t,i,r,o,s){const a=[];let l=0;if(r>=0&&o>0){const c=n.xsPoints[r].x;l=(n.xsPoints[o].x-c)/(i-1);let d=c,u=r,f=n.xsPoints[u+1].x;if(l!=0)for(let h=0;h<i;h++){const m=c+h*l;for(;m>f+1e-4;)u++,d=n.xsPoints[u].x,f=n.xsPoints[u+1].x;const E=t.xs_coeffs[u],_=t.ys_coeffs[u],p=El(E,d,m),A=El(_,d,m),g=new Ds;if(g.setPoint({x:p,y:A}),s){const T=(m-n.xsPoints[u].x)/(n.xsPoints[u+1].x-n.xsPoints[u].x),y={x:(1-T)*e[u].colour.x+T*e[u+1].colour.x,y:(1-T)*e[u].colour.y+T*e[u+1].colour.y,z:(1-T)*e[u].colour.z+T*e[u+1].colour.z};g.setColour(y)}a.push(g.build())}}return l==0||r<0||o<0?null:a}function ps(e){if(e.nodes.length>2){e.extent={min:{x:32700,y:32700},mid:{x:0,y:0},max:{x:-32700,y:-32700}},e.samplePoints=xr(e.nodes,e.parametricNodes,e.parametricCoefficients,200,0,e.nodes.length-1,!1);for(const r of e.samplePoints){const o=r.point;n=e.extent,t=o.x,i=o.y,t>n.max.x&&(n.max.x=t),t<n.min.x&&(n.min.x=t),i>n.max.y&&(n.max.y=i),i<n.min.y&&(n.min.y=i),jc(n)}}var n,t,i}function ig(e){const n=mo();if(e.pointLayer)for(const t of e.pointLayer.points)Kc(n,t);e.splineLayer&&(e.splineLayer.surface&&(ps(e.splineLayer.surface),ml(n,e.splineLayer.surface.extent,e.y)),e.splineLayer.tape&&(ps(e.splineLayer.tape),ml(n,e.splineLayer.tape.extent,e.y))),Lr(n),e.extent=n}function qc(e,n){n.max.x>e.max.x&&(e.max.x=n.max.x),n.min.x<e.min.x&&(e.min.x=n.min.x),n.max.y>e.max.y&&(e.max.y=n.max.y),n.min.y<e.min.y&&(e.min.y=n.min.y),n.max.z>e.max.z&&(e.max.z=n.max.z),n.min.z<e.min.z&&(e.min.z=n.min.z)}function Eo(e){const n=mo();for(const t of e.layers)ig(t),qc(n,t.extent);if(e.splineRegions)for(const t of e.splineRegions)t.vertices?t.extent=Yc(t.vertices):console.error(t," Vertices list is NULL");Lr(n),e.extent=n}function hs(e){const n=mo();for(let t of e.bodyParts)Eo(t),qc(n,t.extent);Lr(n),e.extent=n}function Tl(e,n){if(e==0)return null;const t=e-1,i=Array(e).fill(0),r=Array(t).fill(0),o=Array(e).fill(void 0).map(()=>Array(e).fill(0)),s=Array(t+1).fill(0),a=Array(e).fill(0),l=Array(e).fill(0),c=Array(e).fill(0);for(let f=0;f<e;f++){const h=n[f];i[f]=h.x,a[f]=h.y}for(let f=0;f<t;f++){let h=i[f+1]-i[f];r[f]=h}o[0][0]=1,o[0][1]=0,o[t][t]=1,o[t][t-1]=0;for(let f=1;f<t;f++)o[f][f]=2*(r[f-1]+r[f]),o[f][f-1]=r[f-1],o[f][f+1]=r[f];s[0]=0;for(let f=1;f<t;f++)s[f]=3/r[f]*(a[f+1]-a[f])-3/r[f-1]*(a[f]-a[f-1]);s[t]=0;const d=function(f,h,m){const E=Array(f).fill(void 0).map(()=>Array(f).fill(0)),_=Array(f).fill(void 0).map(()=>Array(f).fill(0)),p=Array(f).fill(0),A=Array(f).fill(0),g=f-1;if(f>=3){E[0][0]=h[0][0],_[0][1]=h[0][1]/E[0][0];for(let T=1;T<g;T++)E[T][T-1]=h[T][T-1],E[T][T]=h[T][T]-E[T][T-1]*_[T-1][T],_[T][T+1]=h[T][T+1]/E[T][T];E[g][g-1]=h[g][g-1],E[g][g]=h[g][g]-E[g][g-1]*_[g-1][g],p[0]=m[0]/E[0][0];for(let T=1;T<f;T++)p[T]=(m[T]-E[T][T-1]*p[T-1])/E[T][T];A[g]=p[g];for(let T=g-1;T>=0;T--)A[T]=p[T]-_[T][T+1]*A[T+1]}return A}(e,o,s);for(let f=t-1;f>=0;f--)l[f]=(a[f+1]-a[f])/r[f]-r[f]*(d[f+1]+2*d[f])/3,c[f]=(d[f+1]-d[f])/(3*r[f]);const u=[];for(let f=0;f<t;f++){const h={a:a[f],b:l[f],c:d[f],d:c[f]};u.push(h)}return u}function Tr(e,n){const t=n.x-e.x,i=n.y-e.y;return Math.sqrt(t*t+i*i)}function $c(e){const n=function(t){let i=0;const r=[],o=[];let s={x:0,y:t[0].point.x};r.push(s);let a={x:0,y:t[0].point.y};o.push(a);for(let l=1;l<t.length;l++){const c=t[l].point;i+=Tr(t[l-1].point,c),s={x:i,y:c.x},r.push(s),a={x:i,y:c.y},o.push(a)}return{xsPoints:r,ysPoints:o}}(e);return{parametricNodes:n,parametricCoefficients:{xs_coeffs:Tl(e.length,n.xsPoints),ys_coeffs:Tl(e.length,n.ysPoints)}}}function gl(e,n){for(const t of e.nodes){const i=t.point;i.x=i.x-n.x,i.y=i.y-n.z}e.nodes.length>2&&$c(e.nodes),ps(e)}function rg(e,n){e.pointLayer&&function(t,i){for(const r of t.points)r.x=r.x-i.x,r.z=r.z-i.z}(e.pointLayer,n),e.splineLayer&&function(t,i){t.surface&&gl(t.surface,i),t.tape&&gl(t.tape,i)}(e.splineLayer,n),e.y=e.y+n.y}function og(e,n){for(const t of e.layers)rg(t,n)}function Zc(e){hs(e);const n={x:(e.extent.min.x+e.extent.max.x)/2,y:(e.extent.min.y+e.extent.max.y)/2,z:(e.extent.min.z+e.extent.max.z)/2};for(const t of e.bodyParts)og(t,n);e.landmarks.forEach(t=>{t.x=t.x-n.x,t.y=t.y+n.y,t.z=t.z-n.z}),hs(e)}(function(e){e[e.UNLABELLED=1]="UNLABELLED",e[e.WHOLE_BODY=2]="WHOLE_BODY",e[e.LEFT_LEG=3]="LEFT_LEG",e[e.RIGHT_LEG=4]="RIGHT_LEG",e[e.TORSO=5]="TORSO",e[e.LEFT_ARM=7]="LEFT_ARM",e[e.RIGHT_ARM=8]="RIGHT_ARM",e[e.CHEST_WALL=9]="CHEST_WALL",e[e.LEFT_BREAST=10]="LEFT_BREAST",e[e.RIGHT_BREAST=11]="RIGHT_BREAST",e[e.MJB_BUST=12]="MJB_BUST"})(Z||(Z={}));var M;function ze(e,n){return e.bodyParts.find(t=>Z[t.type]===n)}(function(e){e[e.TORSO_TOPHEAD=1]="TORSO_TOPHEAD",e[e.TORSO_FRONT_NECK=2]="TORSO_FRONT_NECK",e[e.TORSO_NAPE=3]="TORSO_NAPE",e[e.TORSO_NECK=4]="TORSO_NECK",e[e.TORSO_NECK_PREPROCESS=5]="TORSO_NECK_PREPROCESS",e[e.TORSO_NECK_UPPER=6]="TORSO_NECK_UPPER",e[e.TORSO_NECK_LOWER=7]="TORSO_NECK_LOWER",e[e.TORSO_SHOULDER_PREPROCESS=8]="TORSO_SHOULDER_PREPROCESS",e[e.TORSO_SHOULDER=9]="TORSO_SHOULDER",e[e.TORSO_ARMPIT_LOWER=10]="TORSO_ARMPIT_LOWER",e[e.TORSO_ARMPIT_UPPER=11]="TORSO_ARMPIT_UPPER",e[e.TORSO_ARMPIT_PREPROCESS=12]="TORSO_ARMPIT_PREPROCESS",e[e.TORSO_ARMPIT=13]="TORSO_ARMPIT",e[e.TORSO_LOW_CHEST_PREPROCESS=14]="TORSO_LOW_CHEST_PREPROCESS",e[e.TORSO_LOW_CHEST=15]="TORSO_LOW_CHEST",e[e.TORSO_CHEST_PREPROCESS=16]="TORSO_CHEST_PREPROCESS",e[e.TORSO_CHEST=17]="TORSO_CHEST",e[e.TORSO_WAIST_PREPROCESS=18]="TORSO_WAIST_PREPROCESS",e[e.TORSO_WAIST=19]="TORSO_WAIST",e[e.TORSO_WAIST_LOWER=20]="TORSO_WAIST_LOWER",e[e.TORSO_WAIST_UPPER=21]="TORSO_WAIST_UPPER",e[e.TORSO_SEAT_PROMINENCE=22]="TORSO_SEAT_PROMINENCE",e[e.TORSO_HIP_PREPROCESS=23]="TORSO_HIP_PREPROCESS",e[e.TORSO_HIP=24]="TORSO_HIP",e[e.TORSO_HIP_LOWER=25]="TORSO_HIP_LOWER",e[e.TORSO_HIP_UPPER=26]="TORSO_HIP_UPPER",e[e.TORSO_CROTCH=27]="TORSO_CROTCH",e[e.TORSO_CROTCH_ARMPIT_THIRD=28]="TORSO_CROTCH_ARMPIT_THIRD",e[e.CHESTWALL_ARMPIT_PREPROCESS=29]="CHESTWALL_ARMPIT_PREPROCESS",e[e.CHESTWALL_CHEST_PREPROCESS=30]="CHESTWALL_CHEST_PREPROCESS",e[e.CHESTWALL_LOW_CHEST_PREPROCESS=31]="CHESTWALL_LOW_CHEST_PREPROCESS",e[e.CHESTWALL_WAIST_PREPROCESS=32]="CHESTWALL_WAIST_PREPROCESS",e[e.CHESTWALL_HIGH_CHEST_PREPROCESS=33]="CHESTWALL_HIGH_CHEST_PREPROCESS",e[e.CHESTWALL_ARMPIT=34]="CHESTWALL_ARMPIT",e[e.CHESTWALL_CHEST=35]="CHESTWALL_CHEST",e[e.CHESTWALL_LOW_CHEST=36]="CHESTWALL_LOW_CHEST",e[e.CHESTWALL_WAIST=37]="CHESTWALL_WAIST",e[e.CHESTWALL_HIGH_CHEST=38]="CHESTWALL_HIGH_CHEST",e[e.LEFTLEG_FLOOR=39]="LEFTLEG_FLOOR",e[e.LEFTLEG_MINIMUM_LEG=40]="LEFTLEG_MINIMUM_LEG",e[e.LEFTLEG_ANKLE=41]="LEFTLEG_ANKLE",e[e.LEFTLEG_ANKLE_LOWER=42]="LEFTLEG_ANKLE_LOWER",e[e.LEFTLEG_ANKLE_UPPER=43]="LEFTLEG_ANKLE_UPPER",e[e.LEFTLEG_KNEE=44]="LEFTLEG_KNEE",e[e.LEFTLEG_KNEE_LOWER=45]="LEFTLEG_KNEE_LOWER",e[e.LEFTLEG_KNEE_UPPER=46]="LEFTLEG_KNEE_UPPER",e[e.LEFTLEG_THIGH=47]="LEFTLEG_THIGH",e[e.RIGHTLEG_FLOOR=48]="RIGHTLEG_FLOOR",e[e.RIGHTLEG_MINIMUM_LEG=49]="RIGHTLEG_MINIMUM_LEG",e[e.RIGHTLEG_ANKLE=50]="RIGHTLEG_ANKLE",e[e.RIGHTLEG_ANKLE_LOWER=51]="RIGHTLEG_ANKLE_LOWER",e[e.RIGHTLEG_ANKLE_UPPER=52]="RIGHTLEG_ANKLE_UPPER",e[e.RIGHTLEG_KNEE=53]="RIGHTLEG_KNEE",e[e.RIGHTLEG_KNEE_LOWER=54]="RIGHTLEG_KNEE_LOWER",e[e.RIGHTLEG_KNEE_UPPER=55]="RIGHTLEG_KNEE_UPPER",e[e.RIGHTLEG_THIGH=56]="RIGHTLEG_THIGH",e[e.LEFTARM_TOPARM=57]="LEFTARM_TOPARM",e[e.LEFTARM_ELBOW=58]="LEFTARM_ELBOW",e[e.LEFTARM_ELBOW_UPPER=59]="LEFTARM_ELBOW_UPPER",e[e.LEFTARM_ELBOW_LOWER=60]="LEFTARM_ELBOW_LOWER",e[e.LEFTARM_WRIST=61]="LEFTARM_WRIST",e[e.LEFTARM_HAND=62]="LEFTARM_HAND",e[e.RIGHTARM_TOPARM=63]="RIGHTARM_TOPARM",e[e.RIGHTARM_ELBOW=64]="RIGHTARM_ELBOW",e[e.RIGHTARM_ELBOW_UPPER=65]="RIGHTARM_ELBOW_UPPER",e[e.RIGHTARM_ELBOW_LOWER=66]="RIGHTARM_ELBOW_LOWER",e[e.RIGHTARM_WRIST=67]="RIGHTARM_WRIST",e[e.RIGHTARM_HAND=68]="RIGHTARM_HAND"})(M||(M={}));const J={AXF_VERSION:3.02,BIG_POSITIVE_NUMBER_SNG:1e9,BIG_NEGATIVE_NUMBER_SNG:-1e9,BIG_POSITIVE_NUMBER_INT:32766,BIG_NEGATIVE_NUMBER_INT:-32767,AX_MAX_MEMORY_ALLOCATION:1e8,SMALL_POSITIVE_NUMBER_DBL:1e-8,SMALL_NEGATIVE_NUMBER_DBL:-1e-8,AXF_FULL_LEG:1,AXF_PARTIAL_LEG:1,AXF_NO_LEG:1,AXF_START:1,AXF_END:2,AXF_TAPE:1,AXF_CONTOUR:2,AXF_DEFORM_REFERENCE_SLICE_NECK:0,AXF_DEFORM_REFERENCE_SLICE_SHOULDER:1,AXF_DEFORM_REFERENCE_SLICE_CHEST:2,AXF_DEFORM_REFERENCE_SLICE_UNDER_CHEST:3,AXF_DEFORM_REFERENCE_SLICE_WAIST:4,AXF_DEFORM_REFERENCE_SLICE_SEAT:5,AXF_DEFORM_REFERENCE_SLICE_KNEE:6,AXF_DEFORM_REFERENCE_SLICE_ANKLE:7,AXF_DEFORM_REFERENCE_SLICE_ELBOW:8,AXF_DEFORM_REFERENCE_SLICE_WRIST:9,AXF_MAX_REGION_BOUNDARIES:10,AXF_N_MEASUREMENTS:49,AXF_N_REFERENCE_LOCATIONS:75,AXF_N_SHAPE_MEASUREMENTS:9,UPPER_LEG_NPTS_RADIAL_LOW:5,UPPER_LEG_NPTS_LINEAR_LOW:0,LOWER_LEG_NPTS_RADIAL_LOW:5,LOWER_LEG_NPTS_LINEAR_LOW:0,FOOT_NPTS_RADIAL_LOW:5,FOOT_NPTS_LINEAR_LOW:0,HIP_NPTS_RADIAL_LOW:4,HIP_NPTS_LINEAR_LOW:8,MID_TORSO_NPTS_RADIAL_LOW:8,MID_TORSO_NPTS_LINEAR_LOW:0,UPPER_TORSO_NPTS_RADIAL_LOW:4,UPPER_TORSO_NPTS_LINEAR_LOW:6,HEAD_NPTS_RADIAL_LOW:7,HEAD_NPTS_LINEAR_LOW:0,UPPER_ARM_NPTS_RADIAL_LOW:4,UPPER_ARM_NPTS_LINEAR_LOW:0,LOWER_ARM_NPTS_RADIAL_LOW:4,LOWER_ARM_NPTS_LINEAR_LOW:0,UPPER_LEG_NPTS_RADIAL_MEDIUM:7,UPPER_LEG_NPTS_LINEAR_MEDIUM:0,LOWER_LEG_NPTS_RADIAL_MEDIUM:7,LOWER_LEG_NPTS_LINEAR_MEDIUM:0,FOOT_NPTS_RADIAL_MEDIUM:7,FOOT_NPTS_LINEAR_MEDIUM:0,HIP_NPTS_RADIAL_MEDIUM:6,HIP_NPTS_LINEAR_MEDIUM:12,MID_TORSO_NPTS_RADIAL_MEDIUM:12,MID_TORSO_NPTS_LINEAR_MEDIUM:0,UPPER_TORSO_NPTS_RADIAL_MEDIUM:6,UPPER_TORSO_NPTS_LINEAR_MEDIUM:20,HEAD_NPTS_RADIAL_MEDIUM:16,HEAD_NPTS_LINEAR_MEDIUM:0,UPPER_ARM_NPTS_RADIAL_MEDIUM:4,UPPER_ARM_NPTS_LINEAR_MEDIUM:0,LOWER_ARM_NPTS_RADIAL_MEDIUM:4,LOWER_ARM_NPTS_LINEAR_MEDIUM:0,UPPER_LEG_NPTS_RADIAL_HIGH:9,UPPER_LEG_NPTS_LINEAR_HIGH:0,LOWER_LEG_NPTS_RADIAL_HIGH:9,LOWER_LEG_NPTS_LINEAR_HIGH:0,FOOT_NPTS_RADIAL_HIGH:9,FOOT_NPTS_LINEAR_HIGH:0,HIP_NPTS_RADIAL_HIGH:8,HIP_NPTS_LINEAR_HIGH:16,MID_TORSO_NPTS_RADIAL_HIGH:16,MID_TORSO_NPTS_LINEAR_HIGH:0,UPPER_TORSO_NPTS_RADIAL_HIGH:8,UPPER_TORSO_NPTS_LINEAR_HIGH:12,HEAD_NPTS_RADIAL_HIGH:14,HEAD_NPTS_LINEAR_HIGH:0,UPPER_ARM_NPTS_RADIAL_HIGH:4,UPPER_ARM_NPTS_LINEAR_HIGH:0,LOWER_ARM_NPTS_RADIAL_HIGH:4,LOWER_ARM_NPTS_LINEAR_HIGH:0,LEG_UPPER_NLAYERS_LOW:16,LEG_LOWER_NLAYERS_LOW:16,FOOT_NLAYERS_LOW:4,TORSO_CROTCH_HIP_NLAYERS_LOW:5,TORSO_HIP_WAIST_NLAYERS_LOW:15,TORSO_WAIST_ARMPIT_NLAYERS_LOW:15,TORSO_UPPER_NLAYERS_LOW:16,HEAD_NLAYERS_LOW:10,ARM_UPPER_NLAYERS_LOW:8,ARM_LOWER_NLAYERS_LOW:12,LEG_UPPER_NLAYERS_MEDIUM:24,LEG_LOWER_NLAYERS_MEDIUM:24,FOOT_NLAYERS_MEDIUM:6,TORSO_CROTCH_HIP_NLAYERS_MEDIUM:8,TORSO_HIP_WAIST_NLAYERS_MEDIUM:24,TORSO_WAIST_ARMPIT_NLAYERS_MEDIUM:24,TORSO_UPPER_NLAYERS_MEDIUM:24,HEAD_NLAYERS_MEDIUM:15,ARM_UPPER_NLAYERS_MEDIUM:12,ARM_LOWER_NLAYERS_MEDIUM:18,LEG_UPPER_NLAYERS_HIGH:32,LEG_LOWER_NLAYERS_HIGH:32,FOOT_NLAYERS_HIGH:8,TORSO_CROTCH_HIP_NLAYERS_HIGH:10,TORSO_HIP_WAIST_NLAYERS_HIGH:30,TORSO_WAIST_ARMPIT_NLAYERS_HIGH:30,TORSO_UPPER_NLAYERS_HIGH:32,HEAD_NLAYERS_HIGH:20,ARM_UPPER_NLAYERS_HIGH:16,ARM_LOWER_NLAYERS_HIGH:24,PARTITION_SIDE_CROTCH_CLUSTER_TOLERANCE:550,PARTITION_SIDE_CROTCH_GAP:100,HT_SCALPED:98};function Bi(e,n){let t=J.BIG_POSITIVE_NUMBER_INT,i=-1;for(let r=0;r<e.layers.length;r++){const o=e.layers[r];let s=Math.abs(o.y-n);s<t&&(t=s,i=r)}return i}function er(e,n,t){let i=-1,r=32e3,o=0;for(let s of e.layers){const a=s.y-n,l=Math.abs(a);l<r&&(r=l,i=o),o++}return i}function zt(e,n,t){let i=-1,r=32e3,o=0;for(let s of e.layers){if(s.pointLayer!=null&&s.pointLayer.points.length>0){const a=s.y-n,l=Math.abs(a);l<r&&(r=l,i=o)}o++}return i}function re(e,n){return e.landmarks.find(t=>t.id===n)}function Me(e,n){if(e.layerMarkers)return e.layerMarkers.find(t=>t.layerNameType==n)}function Le(e,n,t){let i=Me(e,n);i?i.value=t:(i={layerNameType:n,value:t},e.layerMarkers||(e.layerMarkers=[]),e.layerMarkers.push(i))}function pt(e,n,t){Le(e,n,function(i,r){const o=Me(i,r);if(o)return o.value}(e,t)+1)}function _s(e,n,t){const i=Me(e,n),r=Me(e,t);if(i&&r)return function(o,s,a){for(let l=s;l<a;l++){const c=o.layers[l],d=o.layers[l+1];if(c.y===d.y)return l}return a}(e,i.value,r.value)}function Mt(e,n,t,i){Le(e,n,_s(e,t,i))}function Sn(e,n,t){const i=Me(e,t);i&&Le(e,n,i.value)}function Si(e,n){return e>n?e:n}function Rl(e,n){return n==null?-1:Bi(e,n.y)}function gr(e,n){return(e+n)/2}var j;(function(e){e[e.AXF_NECK_TO_SHOULDER=1]="AXF_NECK_TO_SHOULDER",e[e.AXF_SHOULDER_TO_ARMPIT=2]="AXF_SHOULDER_TO_ARMPIT",e[e.AXF_ARMPIT_TO_WAIST=3]="AXF_ARMPIT_TO_WAIST",e[e.AXF_WAIST_TO_HIP=4]="AXF_WAIST_TO_HIP",e[e.AXF_HIP_TO_CROTCH=5]="AXF_HIP_TO_CROTCH",e[e.AXF_THIGH_TO_KNEE=6]="AXF_THIGH_TO_KNEE",e[e.AXF_KNEE_TO_ANKLE=7]="AXF_KNEE_TO_ANKLE",e[e.AXF_NECK_TO_ARMPIT=8]="AXF_NECK_TO_ARMPIT",e[e.AXF_WAIST_TO_CROTCH=9]="AXF_WAIST_TO_CROTCH",e[e.AXF_ARMPIT_TO_CROTCH=10]="AXF_ARMPIT_TO_CROTCH",e[e.AXF_TOP_TO_ARMPIT=11]="AXF_TOP_TO_ARMPIT",e[e.AXF_THIGH_TO_FLOOR=12]="AXF_THIGH_TO_FLOOR",e[e.AXF_ANKLE_TO_FLOOR=13]="AXF_ANKLE_TO_FLOOR",e[e.AXF_TOP_TO_NECK=14]="AXF_TOP_TO_NECK",e[e.AXF_TOPARM_TO_ELBOW=15]="AXF_TOPARM_TO_ELBOW",e[e.AXF_ELBOW_TO_WRIST=16]="AXF_ELBOW_TO_WRIST",e[e.AXF_WRIST_TO_HAND=17]="AXF_WRIST_TO_HAND",e[e.AXF_ELBOW_TO_HAND=18]="AXF_ELBOW_TO_HAND",e[e.AXF_TOPARM_TO_HAND=19]="AXF_TOPARM_TO_HAND",e[e.AXF_ARMPIT_TO_CHEST=20]="AXF_ARMPIT_TO_CHEST",e[e.AXF_CHEST_TO_UNDERCHEST=21]="AXF_CHEST_TO_UNDERCHEST",e[e.AXF_UNDERCHEST_TO_WAIST=22]="AXF_UNDERCHEST_TO_WAIST",e[e.AXF_CHEST_TO_WAIST=23]="AXF_CHEST_TO_WAIST",e[e.AXF_SEAT_TO_CROTCH=24]="AXF_SEAT_TO_CROTCH",e[e.AXF_WAIST_TO_SEAT=25]="AXF_WAIST_TO_SEAT",e[e.AXF_TOP_TO_SHOULDER=26]="AXF_TOP_TO_SHOULDER",e[e.AXF_THIGH_TO_ANKLE=27]="AXF_THIGH_TO_ANKLE",e[e.AXF_KNEE_TO_FLOOR=28]="AXF_KNEE_TO_FLOOR",e[e.AXF_TOPARM_TO_WRIST=29]="AXF_TOPARM_TO_WRIST",e[e.AXF_ARMPIT_TO_UNDERCHEST=30]="AXF_ARMPIT_TO_UNDERCHEST",e[e.AXF_UNDERCHEST_TO_SEAT=31]="AXF_UNDERCHEST_TO_SEAT",e[e.AXF_CHEST_TO_SEAT=32]="AXF_CHEST_TO_SEAT",e[e.AXF_ARMPIT_TO_SEAT=33]="AXF_ARMPIT_TO_SEAT",e[e.AXF_UNDERCHEST_TO_CROTCH=34]="AXF_UNDERCHEST_TO_CROTCH",e[e.AXF_CHEST_TO_CROTCH=35]="AXF_CHEST_TO_CROTCH",e[e.AXF_THIRD_TO_ARMPIT=36]="AXF_THIRD_TO_ARMPIT"})(j||(j={}));function sg(e){let n=Object.keys(j).filter(t=>j[t]==e);return n.length>0?n[0]:null}class ag{constructor(){this.DONE_NORMALS=!1,this.DONE_SMOOTH_NORMALS=!1}setHeader(n){this.header=n}setSamplingParameters(n){this.samplingParameters=n}setCentroids(n){this.centroids=n}build(){return Object.assign(Object.assign(Object.assign(Object.assign({},this.header),this.samplingParameters),this.centroids),{DONE_NORMALS:this.DONE_NORMALS,DONE_SMOOTH_NORMALS:this.DONE_SMOOTH_NORMALS})}}var Tn,Vn;function Dn(e,n,t,i,r){if(!i||!r)return void console.error(`create spline region: body part ${n.id} ${n.type} ${t} start layer or end layer missing`);const o=i.value,s=r.value;if(o<0||s<o)return void console.error(`create spline region: body part ${n.id} ${n.type} ${t} start layer ${o} and end layer ${s} out of range`);const a=new ag;a.setHeader({id:t,type:sg(t),startLayer:o,endLayer:s,startVertex:0,noSides:3});let l=null;if(t==j.AXF_HIP_TO_CROTCH){const u=Me(n,M.TORSO_HIP_LOWER);l=n.layers[u.value]}else if(t==j.AXF_THIRD_TO_ARMPIT){const u=Me(n,M.TORSO_CROTCH_ARMPIT_THIRD);l=n.layers[u.value]}else if(t==j.AXF_NECK_TO_ARMPIT){const u=Me(n,M.TORSO_NECK_LOWER);l=n.layers[u.value]}const c=function(u,f){switch(u){case j.AXF_THIGH_TO_KNEE:return f==Tn.AXF_LOW?{noRadial:J.UPPER_LEG_NPTS_RADIAL_LOW,noLinear:J.UPPER_LEG_NPTS_LINEAR_LOW,noNormalisedLayers:J.LEG_UPPER_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.UPPER_LEG_NPTS_RADIAL_MEDIUM,noLinear:J.UPPER_LEG_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.LEG_UPPER_NLAYERS_MEDIUM}:{noRadial:J.UPPER_LEG_NPTS_RADIAL_HIGH,noLinear:J.UPPER_LEG_NPTS_LINEAR_HIGH,noNormalisedLayers:J.LEG_UPPER_NLAYERS_HIGH};case j.AXF_KNEE_TO_ANKLE:return f==Tn.AXF_LOW?{noRadial:J.LOWER_LEG_NPTS_RADIAL_LOW,noLinear:J.LOWER_LEG_NPTS_LINEAR_LOW,noNormalisedLayers:J.LEG_LOWER_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.LOWER_LEG_NPTS_RADIAL_MEDIUM,noLinear:J.LOWER_LEG_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.LEG_LOWER_NLAYERS_MEDIUM}:{noRadial:J.LOWER_LEG_NPTS_RADIAL_HIGH,noLinear:J.LOWER_LEG_NPTS_LINEAR_HIGH,noNormalisedLayers:J.LEG_LOWER_NLAYERS_HIGH};case j.AXF_ANKLE_TO_FLOOR:return f==Tn.AXF_LOW?{noRadial:J.FOOT_NPTS_RADIAL_LOW,noLinear:J.FOOT_NPTS_LINEAR_LOW,noNormalisedLayers:J.FOOT_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.FOOT_NPTS_RADIAL_MEDIUM,noLinear:J.FOOT_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.FOOT_NLAYERS_MEDIUM}:{noRadial:J.FOOT_NPTS_RADIAL_HIGH,noLinear:J.FOOT_NPTS_LINEAR_HIGH,noNormalisedLayers:J.FOOT_NLAYERS_HIGH};case j.AXF_HIP_TO_CROTCH:return f==Tn.AXF_LOW?{noRadial:J.HIP_NPTS_RADIAL_LOW,noLinear:J.HIP_NPTS_LINEAR_LOW,noNormalisedLayers:J.TORSO_CROTCH_HIP_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.HIP_NPTS_RADIAL_MEDIUM,noLinear:J.HIP_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.TORSO_CROTCH_HIP_NLAYERS_MEDIUM}:{noRadial:J.HIP_NPTS_RADIAL_HIGH,noLinear:J.HIP_NPTS_LINEAR_HIGH,noNormalisedLayers:J.TORSO_CROTCH_HIP_NLAYERS_HIGH};case j.AXF_WAIST_TO_HIP:return f==Tn.AXF_LOW?{noRadial:J.MID_TORSO_NPTS_RADIAL_LOW,noLinear:J.MID_TORSO_NPTS_LINEAR_LOW,noNormalisedLayers:J.TORSO_HIP_WAIST_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.MID_TORSO_NPTS_RADIAL_MEDIUM,noLinear:J.MID_TORSO_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.TORSO_HIP_WAIST_NLAYERS_MEDIUM}:{noRadial:J.MID_TORSO_NPTS_RADIAL_HIGH,noLinear:J.MID_TORSO_NPTS_LINEAR_HIGH,noNormalisedLayers:J.TORSO_HIP_WAIST_NLAYERS_HIGH};case j.AXF_ARMPIT_TO_WAIST:return f==Tn.AXF_LOW?{noRadial:J.MID_TORSO_NPTS_RADIAL_LOW,noLinear:J.MID_TORSO_NPTS_LINEAR_LOW,noNormalisedLayers:J.TORSO_WAIST_ARMPIT_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.MID_TORSO_NPTS_RADIAL_MEDIUM,noLinear:J.MID_TORSO_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.TORSO_WAIST_ARMPIT_NLAYERS_MEDIUM}:{noRadial:J.MID_TORSO_NPTS_RADIAL_HIGH,noLinear:J.MID_TORSO_NPTS_LINEAR_HIGH,noNormalisedLayers:J.TORSO_WAIST_ARMPIT_NLAYERS_HIGH};case j.AXF_NECK_TO_ARMPIT:return f==Tn.AXF_LOW?{noRadial:J.UPPER_TORSO_NPTS_RADIAL_LOW,noLinear:J.UPPER_TORSO_NPTS_LINEAR_LOW,noNormalisedLayers:J.TORSO_UPPER_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.UPPER_TORSO_NPTS_RADIAL_MEDIUM,noLinear:J.UPPER_TORSO_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.TORSO_UPPER_NLAYERS_MEDIUM}:{noRadial:J.UPPER_TORSO_NPTS_RADIAL_HIGH,noLinear:J.UPPER_TORSO_NPTS_LINEAR_HIGH,noNormalisedLayers:J.TORSO_UPPER_NLAYERS_HIGH};case j.AXF_TOP_TO_NECK:return f==Tn.AXF_LOW?{noRadial:J.HEAD_NPTS_RADIAL_LOW,noLinear:J.HEAD_NPTS_LINEAR_LOW,noNormalisedLayers:J.HEAD_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.HEAD_NPTS_RADIAL_MEDIUM,noLinear:J.HEAD_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.HEAD_NLAYERS_MEDIUM}:{noRadial:J.HEAD_NPTS_RADIAL_HIGH,noLinear:J.HEAD_NPTS_LINEAR_HIGH,noNormalisedLayers:J.HEAD_NLAYERS_HIGH};case j.AXF_TOPARM_TO_ELBOW:return f==Tn.AXF_LOW?{noRadial:J.UPPER_ARM_NPTS_RADIAL_LOW,noLinear:J.UPPER_ARM_NPTS_LINEAR_LOW,noNormalisedLayers:J.ARM_UPPER_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.UPPER_ARM_NPTS_RADIAL_MEDIUM,noLinear:J.UPPER_ARM_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.ARM_UPPER_NLAYERS_MEDIUM}:{noRadial:J.UPPER_ARM_NPTS_RADIAL_HIGH,noLinear:J.UPPER_ARM_NPTS_LINEAR_HIGH,noNormalisedLayers:J.ARM_UPPER_NLAYERS_HIGH};case j.AXF_ELBOW_TO_HAND:return f==Tn.AXF_LOW?{noRadial:J.LOWER_ARM_NPTS_RADIAL_LOW,noLinear:J.LOWER_ARM_NPTS_LINEAR_LOW,noNormalisedLayers:J.ARM_LOWER_NLAYERS_LOW}:f==Tn.AXF_MEDIUM?{noRadial:J.LOWER_ARM_NPTS_RADIAL_MEDIUM,noLinear:J.LOWER_ARM_NPTS_LINEAR_MEDIUM,noNormalisedLayers:J.ARM_LOWER_NLAYERS_MEDIUM}:{noRadial:J.LOWER_ARM_NPTS_RADIAL_HIGH,noLinear:J.LOWER_ARM_NPTS_LINEAR_HIGH,noNormalisedLayers:J.ARM_LOWER_NLAYERS_HIGH};default:return console.log(`Using default Spline Region settings for ${u}`),{noRadial:5,noLinear:5,noNormalisedLayers:24}}}(t,e.normaliseResolution),d=function(u,f,h,m){let E,_,p,A,g,T,y,I,O,b,L,v,P,k,V,K,ee,W,se,X,_e,Ie,De,We;const ce={left:{x:0,y:0},right:{x:0,y:0}},D={left:{x:0,y:0},right:{x:0,y:0}};switch(h){case j.AXF_THIGH_TO_KNEE:f==Z.LEFT_LEG?(_=re(u,U.LEFT_TOP_THIGH_INTERNAL),E=re(u,U.LEFT_KNEE_INTERNAL)):(_=re(u,U.RIGHT_TOP_THIGH_INTERNAL),E=re(u,U.RIGHT_KNEE_INTERNAL)),ce.left.x=E.x,ce.left.y=E.z,ce.right.x=E.x,ce.right.y=E.z,D.left.x=_.x,D.left.y=_.z,D.right.x=_.x,D.right.y=_.z;break;case j.AXF_KNEE_TO_ANKLE:f==Z.LEFT_LEG?(A=re(u,U.LEFT_ANKLE_INTERNAL),E=re(u,U.LEFT_KNEE_INTERNAL)):(A=re(u,U.RIGHT_ANKLE_INTERNAL),E=re(u,U.RIGHT_KNEE_INTERNAL)),ce.left.x=A.x,ce.left.y=A.z,ce.right.x=A.x,ce.right.y=A.z,D.left.x=E.x,D.left.y=E.z,D.right.x=E.x,D.right.y=E.z;break;case j.AXF_ANKLE_TO_FLOOR:f==Z.LEFT_LEG?(A=re(u,U.LEFT_ANKLE_INTERNAL),p=re(u,U.LEFT_FLOOR)):(A=re(u,U.RIGHT_ANKLE_INTERNAL),p=re(u,U.RIGHT_FLOOR)),ce.left.x=p.x,ce.left.y=p.z,ce.right.x=p.x,ce.right.y=p.z,D.left.x=A.x,D.left.y=A.z,D.right.x=A.x,D.right.y=A.z;break;case j.AXF_HIP_TO_CROTCH:y=re(u,U.HIP_INTERNAL),g=re(u,U.LEFT_TOP_THIGH_INTERNAL),T=re(u,U.RIGHT_TOP_THIGH_INTERNAL);const ie=m;ce.left.x=g.x,ce.left.y=g.z,ce.right.x=T.x,ce.right.y=T.z,D.left.x=.75*ie.extent.min.x+.25*ie.extent.max.x,D.left.y=y.z,D.right.x=.25*ie.extent.min.x+.75*ie.extent.max.x,D.right.y=y.z;break;case j.AXF_WAIST_TO_HIP:y=re(u,U.HIP_INTERNAL),O=re(u,U.WAIST_INTERNAL),ce.left.x=y.x,ce.left.y=y.z,ce.right.x=y.x,ce.right.y=y.z,D.left.x=O.x,D.left.y=O.z,D.right.x=O.x,D.right.y=O.z;break;case j.AXF_ARMPIT_TO_WAIST:b=re(u,U.LEFT_ARMPIT),L=re(u,U.RIGHT_ARMPIT),I={x:(b.x+L.x)/2,z:(b.z+L.z)/2},O=re(u,U.WAIST_INTERNAL),ce.left.x=O.x,ce.left.y=O.z,ce.right.x=O.x,ce.right.y=O.z,D.left.x=I.x,D.left.y=I.z,D.right.x=I.x,D.right.y=I.z;break;case j.AXF_THIRD_TO_ARMPIT:b=re(u,U.LEFT_ARMPIT),L=re(u,U.RIGHT_ARMPIT),I={x:(b.x+L.x)/2,z:(b.z+L.z)/2};const me=m;ce.left.x=me.extent.mid.x,ce.left.y=me.extent.mid.z,ce.right.x=ce.left.x,ce.right.y=ce.left.y,D.left.x=I.x,D.left.y=I.z,D.right.x=D.left.x,D.right.y=D.left.y;break;case j.AXF_NECK_TO_ARMPIT:v={x:0,y:0},P={x:0,y:0},b=re(u,U.LEFT_ARMPIT_INTERNAL),L=re(u,U.RIGHT_ARMPIT_INTERNAL),V=re(u,U.NECK_INTERNAL);const oe=m;De=oe.extent.max.x-oe.extent.min.x,De<J.UPPER_TORSO_NPTS_LINEAR_HIGH/(.6-.4)?(We=(oe.extent.max.x+oe.extent.min.x)/2,v.x=We-J.UPPER_TORSO_NPTS_LINEAR_HIGH/2,P.x=We+J.UPPER_TORSO_NPTS_LINEAR_HIGH/2):(v.x=.6*oe.extent.min.x+.4*oe.extent.max.x,P.x=.4*oe.extent.min.x+.6*oe.extent.max.x),K=re(u,U.LEFT_TOP_ARM_INTERNAL);const ye=b!=null?b.x:0,Ce=b!=null?b.z:0,Ue=L!=null?L.x:0,on=L!=null?L.z:0;K!=null?(se=gr(K.x,ye),_e=Math.ceil(.65*K.z+.35*Ce)):(se=ye,_e=Ce),K=re(u,U.RIGHT_TOP_ARM_INTERNAL),K!=null?(X=gr(K.x,Ue),Ie=Math.ceil(.65*K.z+.35*on)):(X=Ue,Ie=on),ce.left.x=se,ce.left.y=_e,ce.right.x=X,ce.right.y=Ie,D.left.x=v.x,D.left.y=V.z,D.right.x=P.x,D.right.y=V.z;break;case j.AXF_TOP_TO_NECK:k=re(u,U.TOP_HEAD),V=re(u,U.NECK_INTERNAL),ce.left.x=V.x,ce.left.y=V.z,ce.right.x=V.x,ce.right.y=V.z,D.left.x=k.x,D.left.y=k.z,D.right.x=k.x,D.right.y=k.z;break;case j.AXF_TOPARM_TO_ELBOW:f==Z.LEFT_ARM?(K=re(u,U.LEFT_TOP_ARM_INTERNAL),W=re(u,U.LEFT_ELBOW_INTERNAL)):(K=re(u,U.RIGHT_TOP_ARM_INTERNAL),W=re(u,U.RIGHT_ELBOW_INTERNAL)),ce.left.x=W.x,ce.left.y=W.z,ce.right.x=W.x,ce.right.y=W.z,D.left.x=K.x,D.left.y=K.z,D.right.x=K.x,D.right.y=K.z;break;case j.AXF_ELBOW_TO_HAND:f==Z.LEFT_ARM?(ee=re(u,U.LEFT_WRIST_INTERNAL),W=re(u,U.LEFT_ELBOW_INTERNAL)):(ee=re(u,U.RIGHT_WRIST_INTERNAL),W=re(u,U.RIGHT_ELBOW_INTERNAL)),ce.left.x=ee.x,ce.left.y=ee.z,ce.right.x=ee.x,ce.right.y=ee.z,D.left.x=W.x,D.left.y=W.z,D.right.x=W.x,D.right.y=W.z}return{start:ce,end:D}}(e,n.id,t,l);return a.setSamplingParameters(c),a.setCentroids(d),a.build()}function lg(e,n,t){t?function(r,o){if(o.id==Z.TORSO){const a=re(r,U.CHEST_LEVEL),l=re(r,U.LOW_CHEST_LEVEL),c=re(r,U.WAIST_INTERNAL),d=re(r,U.HIP_INTERNAL),u=re(r,U.NECK_INTERNAL);if(re(r,U.LEFT_SHOULDER),re(r,U.RIGHT_SHOULDER),r.version>1.99){Le(o,M.TORSO_TOPHEAD,o.layers.length-1),Le(o,M.TORSO_NECK_PREPROCESS,er(o,u.y)),Le(o,M.TORSO_WAIST_PREPROCESS,er(o,c.y)),Le(o,M.TORSO_HIP_PREPROCESS,er(o,d.y)),Le(o,M.TORSO_CROTCH,0),Mt(o,M.TORSO_ARMPIT_LOWER,M.TORSO_CROTCH,M.TORSO_TOPHEAD),Sn(o,M.TORSO_ARMPIT_PREPROCESS,M.TORSO_ARMPIT_LOWER),pt(o,M.TORSO_ARMPIT_UPPER,M.TORSO_ARMPIT_LOWER),Le(o,M.TORSO_CHEST_PREPROCESS,Bi(o,a.y)),Le(o,M.TORSO_LOW_CHEST_PREPROCESS,Bi(o,l.y));const f=Me(o,M.TORSO_ARMPIT_LOWER);Le(o,M.TORSO_CROTCH_ARMPIT_THIRD,Math.round(.333*f.value))}else r.version>1.199&&(Le(o,M.TORSO_NECK_PREPROCESS,o.layers.length-1),Le(o,M.TORSO_WAIST_PREPROCESS,er(o,c.y)),Le(o,M.TORSO_HIP_PREPROCESS,er(o,d.y)),Le(o,M.TORSO_CROTCH,0),Mt(o,M.TORSO_ARMPIT_LOWER,M.TORSO_WAIST,M.TORSO_NECK),Sn(o,M.TORSO_ARMPIT_PREPROCESS,M.TORSO_ARMPIT_LOWER),pt(o,M.TORSO_ARMPIT_UPPER,M.TORSO_ARMPIT_LOWER));Sn(o,M.TORSO_WAIST_LOWER,M.TORSO_WAIST_PREPROCESS),Sn(o,M.TORSO_WAIST_UPPER,M.TORSO_WAIST_PREPROCESS),Sn(o,M.TORSO_HIP_LOWER,M.TORSO_HIP_PREPROCESS),Sn(o,M.TORSO_HIP_UPPER,M.TORSO_HIP_PREPROCESS),Sn(o,M.TORSO_NECK_LOWER,M.TORSO_NECK_PREPROCESS),Sn(o,M.TORSO_NECK_UPPER,M.TORSO_NECK_PREPROCESS),Sn(o,M.TORSO_LOW_CHEST,M.TORSO_LOW_CHEST_PREPROCESS)}const s=ze(r,Z.CHEST_WALL);if(s!=null){const a=Me(o,M.TORSO_LOW_CHEST_PREPROCESS),l=Me(o,M.TORSO_WAIST_PREPROCESS),c=Me(o,M.TORSO_ARMPIT_PREPROCESS),d=Me(o,M.TORSO_NECK_PREPROCESS);Le(s,M.CHESTWALL_WAIST_PREPROCESS,0);const u=a.value-l.value;Le(s,M.CHESTWALL_LOW_CHEST_PREPROCESS,u);const f=c.value-l.value;Le(s,M.CHESTWALL_ARMPIT_PREPROCESS,f),Le(s,M.CHESTWALL_HIGH_CHEST_PREPROCESS,(d.value+c.value+1)/2-l.value),Le(s,M.CHESTWALL_CHEST_PREPROCESS,(5*f+5*u)/10),Sn(s,M.CHESTWALL_WAIST,M.CHESTWALL_WAIST_PREPROCESS),Sn(s,M.CHESTWALL_CHEST,M.CHESTWALL_CHEST_PREPROCESS),Sn(s,M.CHESTWALL_ARMPIT,M.CHESTWALL_ARMPIT_PREPROCESS)}if(o.id==Z.LEFT_LEG){const a=re(r,U.LEFT_KNEE_INTERNAL),l=re(r,U.LEFT_ANKLE_INTERNAL);Le(o,M.LEFTLEG_THIGH,o.layers.length-1),Le(o,M.LEFTLEG_KNEE,zt(o,a.y)),Le(o,M.LEFTLEG_ANKLE,Si(2,zt(o,l.y))),Le(o,M.LEFTLEG_FLOOR,0),Sn(o,M.LEFTLEG_ANKLE_LOWER,M.LEFTLEG_ANKLE),Sn(o,M.LEFTLEG_ANKLE_UPPER,M.LEFTLEG_ANKLE),Sn(o,M.LEFTLEG_KNEE_LOWER,M.LEFTLEG_KNEE),Sn(o,M.LEFTLEG_KNEE_UPPER,M.LEFTLEG_KNEE)}if(o.id==Z.RIGHT_LEG){const a=re(r,U.RIGHT_KNEE_INTERNAL),l=re(r,U.RIGHT_ANKLE_INTERNAL);Le(o,M.RIGHTLEG_THIGH,o.layers.length-1),Le(o,M.RIGHTLEG_KNEE,zt(o,a.y)),Le(o,M.RIGHTLEG_ANKLE,Si(2,zt(o,l.y))),Le(o,M.RIGHTLEG_FLOOR,0),Sn(o,M.RIGHTLEG_ANKLE_LOWER,M.RIGHTLEG_ANKLE),Sn(o,M.RIGHTLEG_ANKLE_UPPER,M.RIGHTLEG_ANKLE),Sn(o,M.RIGHTLEG_KNEE_LOWER,M.RIGHTLEG_KNEE),Sn(o,M.RIGHTLEG_KNEE_UPPER,M.RIGHTLEG_KNEE)}if(o.id==Z.LEFT_ARM){const a=re(r,U.LEFT_ELBOW_INTERNAL),l=re(r,U.LEFT_WRIST_INTERNAL);Le(o,M.LEFTARM_TOPARM,o.layers.length-1),Le(o,M.LEFTARM_ELBOW,zt(o,a.y)),Le(o,M.LEFTARM_WRIST,zt(o,l.y)),Le(o,M.LEFTARM_HAND,0),Sn(o,M.LEFTARM_ELBOW_LOWER,M.LEFTARM_ELBOW),Sn(o,M.LEFTARM_ELBOW_UPPER,M.LEFTARM_ELBOW)}if(o.id==Z.RIGHT_ARM){const a=re(r,U.RIGHT_ELBOW_INTERNAL),l=re(r,U.RIGHT_WRIST_INTERNAL);Le(o,M.RIGHTARM_TOPARM,o.layers.length-1),Le(o,M.RIGHTARM_ELBOW,zt(o,a.y)),Le(o,M.RIGHTARM_WRIST,zt(o,l.y)),Le(o,M.RIGHTARM_HAND,0),Sn(o,M.RIGHTARM_ELBOW_LOWER,M.RIGHTARM_ELBOW),Sn(o,M.RIGHTARM_ELBOW_UPPER,M.RIGHTARM_ELBOW)}}(e,n):function(r,o){if(o.id==Z.LEFT_LEG&&(Le(o,M.LEFTLEG_THIGH,o.layers.length-1),Le(o,M.LEFTLEG_FLOOR,0),Mt(o,M.LEFTLEG_ANKLE_LOWER,M.LEFTLEG_FLOOR,M.LEFTLEG_THIGH),pt(o,M.LEFTLEG_ANKLE_UPPER,M.LEFTLEG_ANKLE_LOWER),Le(o,M.LEFTLEG_KNEE_LOWER,_s(o,M.LEFTLEG_ANKLE_UPPER,M.LEFTLEG_THIGH)),pt(o,M.LEFTLEG_KNEE_UPPER,M.LEFTLEG_KNEE_LOWER)),o.id==Z.RIGHT_LEG&&(Le(o,M.RIGHTLEG_THIGH,o.layers.length-1),Le(o,M.RIGHTLEG_FLOOR,0),Mt(o,M.RIGHTLEG_ANKLE_LOWER,M.RIGHTLEG_FLOOR,M.RIGHTLEG_THIGH),pt(o,M.RIGHTLEG_ANKLE_UPPER,M.RIGHTLEG_ANKLE_LOWER),Mt(o,M.RIGHTLEG_KNEE_LOWER,M.RIGHTLEG_ANKLE_UPPER,M.RIGHTLEG_THIGH),pt(o,M.RIGHTLEG_KNEE_UPPER,M.RIGHTLEG_KNEE_LOWER)),o.id==Z.LEFT_ARM&&(Le(o,M.LEFTARM_TOPARM,o.layers.length-1),Le(o,M.LEFTARM_HAND,0),Mt(o,M.LEFTARM_ELBOW_LOWER,M.LEFTARM_HAND,M.LEFTARM_TOPARM),pt(o,M.LEFTARM_ELBOW_UPPER,M.LEFTARM_ELBOW_LOWER),Le(o,M.LEFTARM_WRIST,0)),o.id==Z.RIGHT_ARM&&(Le(o,M.RIGHTARM_TOPARM,o.layers.length-1),Le(o,M.RIGHTARM_HAND,0),Mt(o,M.RIGHTARM_ELBOW_LOWER,M.RIGHTARM_HAND,M.RIGHTARM_TOPARM),pt(o,M.RIGHTARM_ELBOW_UPPER,M.RIGHTARM_ELBOW_LOWER),Le(o,M.RIGHTARM_WRIST,0)),o.id==Z.TORSO||o.id==Z.CHEST_WALL){r.noHead||Le(o,M.TORSO_TOPHEAD,o.layers.length-1),Le(o,M.TORSO_CROTCH,0),Mt(o,M.TORSO_HIP_LOWER,M.TORSO_CROTCH,M.TORSO_TOPHEAD),pt(o,M.TORSO_HIP_UPPER,M.TORSO_HIP_LOWER),Mt(o,M.TORSO_WAIST_LOWER,M.TORSO_HIP_UPPER,M.TORSO_TOPHEAD),pt(o,M.TORSO_WAIST_UPPER,M.TORSO_WAIST_LOWER),Mt(o,M.TORSO_ARMPIT_LOWER,M.TORSO_WAIST_UPPER,M.TORSO_TOPHEAD),pt(o,M.TORSO_ARMPIT_UPPER,M.TORSO_ARMPIT_LOWER),_s(o,M.TORSO_ARMPIT_UPPER,M.TORSO_NECK_LOWER)?pt(o,M.TORSO_NECK_UPPER,M.TORSO_NECK_LOWER):Le(o,M.TORSO_NECK_LOWER,o.layers.length-1);const s=Me(o,M.TORSO_ARMPIT_LOWER);if(r.sex==Gi.MALE){const d=Me(o,M.TORSO_WAIST_UPPER),u=d.value+.8*(s.value-d.value),f=d.value+.8*(u-d.value);Le(o,M.TORSO_CHEST,u),Le(o,M.TORSO_LOW_CHEST,f)}else{const d=re(r,U.CHEST_LEVEL),u=re(r,U.LOW_CHEST_LEVEL);Le(o,M.TORSO_CHEST,Rl(o,d)),Le(o,M.TORSO_LOW_CHEST,Rl(o,u))}const a=re(r,U.LEFT_SHOULDER),l=re(r,U.RIGHT_SHOULDER);a&&l&&Le(o,M.TORSO_SHOULDER,Bi(o,gr(a.y,l.y)));const c=Math.floor(.333*s.value);Le(o,M.TORSO_CROTCH_ARMPIT_THIRD,c)}if(o.id==Z.CHEST_WALL){const s=ze(r,Z.TORSO),a=Me(s,M.TORSO_LOW_CHEST),l=Me(s,M.TORSO_WAIST_UPPER),c=Me(s,M.TORSO_ARMPIT_LOWER),d=Me(s,M.TORSO_NECK_LOWER),u=Me(s,M.TORSO_ARMPIT_UPPER);Le(o,M.CHESTWALL_WAIST,0),Le(o,M.CHESTWALL_LOW_CHEST,a.value-l.value),Le(o,M.CHESTWALL_ARMPIT,c.value-l.value),Le(o,M.CHESTWALL_HIGH_CHEST,(d.value+u.value)/2-l.value);const f=Me(o,M.CHESTWALL_ARMPIT),h=Me(o,M.CHESTWALL_LOW_CHEST);Le(o,M.CHESTWALL_CHEST,(5*f.value+5*h.value)/10)}}(e,n);let i=[];if(n.id==Z.TORSO){const r=Me(n,M.TORSO_NECK_UPPER),o=Me(n,M.TORSO_TOPHEAD),s=Me(n,M.TORSO_ARMPIT_UPPER),a=Me(n,M.TORSO_NECK_LOWER),l=Me(n,M.TORSO_WAIST_UPPER),c=Me(n,M.TORSO_ARMPIT_LOWER),d=Me(n,M.TORSO_HIP_UPPER),u=Me(n,M.TORSO_WAIST_LOWER),f=Me(n,M.TORSO_CROTCH),h=Me(n,M.TORSO_CROTCH_ARMPIT_THIRD);i.push(Dn(e,n,j.AXF_TOP_TO_NECK,r??a,o)),i.push(Dn(e,n,j.AXF_NECK_TO_ARMPIT,s,a)),i.push(Dn(e,n,j.AXF_ARMPIT_TO_WAIST,l,c)),i.push(Dn(e,n,j.AXF_WAIST_TO_HIP,d,u)),i.push(Dn(e,n,j.AXF_HIP_TO_CROTCH,f,d)),i.push(Dn(e,n,j.AXF_THIRD_TO_ARMPIT,h,s??c))}if(n.id==Z.CHEST_WALL)if(t){const r=Me(n,M.CHESTWALL_WAIST_PREPROCESS),o=Me(n,M.CHESTWALL_ARMPIT_PREPROCESS);i.push(Dn(e,n,j.AXF_ARMPIT_TO_WAIST,r,o))}else{const r=Me(n,M.CHESTWALL_WAIST),o=Me(n,M.CHESTWALL_ARMPIT);i.push(Dn(e,n,j.AXF_ARMPIT_TO_WAIST,r,o))}if(n.id==Z.LEFT_LEG){const r=Me(n,M.LEFTLEG_KNEE_UPPER),o=Me(n,M.LEFTLEG_THIGH),s=Me(n,M.LEFTLEG_ANKLE_UPPER),a=Me(n,M.LEFTLEG_KNEE_LOWER),l=Me(n,M.LEFTLEG_FLOOR),c=Me(n,M.LEFTLEG_ANKLE_LOWER);i.push(Dn(e,n,j.AXF_THIGH_TO_KNEE,r,o)),i.push(Dn(e,n,j.AXF_KNEE_TO_ANKLE,s,a)),i.push(Dn(e,n,j.AXF_ANKLE_TO_FLOOR,l,c))}if(n.id==Z.RIGHT_LEG){const r=Me(n,M.RIGHTLEG_KNEE_UPPER),o=Me(n,M.RIGHTLEG_THIGH),s=Me(n,M.RIGHTLEG_ANKLE_UPPER),a=Me(n,M.RIGHTLEG_KNEE_LOWER),l=Me(n,M.RIGHTLEG_FLOOR),c=Me(n,M.RIGHTLEG_ANKLE_LOWER);i.push(Dn(e,n,j.AXF_THIGH_TO_KNEE,r,o)),i.push(Dn(e,n,j.AXF_KNEE_TO_ANKLE,s,a)),i.push(Dn(e,n,j.AXF_ANKLE_TO_FLOOR,l,c))}if(n.id==Z.LEFT_ARM){const r=Me(n,M.LEFTARM_ELBOW_UPPER),o=Me(n,M.LEFTARM_TOPARM),s=Me(n,M.LEFTARM_WRIST),a=Me(n,M.LEFTARM_ELBOW_LOWER);i.push(Dn(e,n,j.AXF_TOPARM_TO_ELBOW,r,o)),i.push(Dn(e,n,j.AXF_ELBOW_TO_HAND,s,a))}if(n.id==Z.RIGHT_ARM){const r=Me(n,M.RIGHTARM_ELBOW_UPPER),o=Me(n,M.RIGHTARM_TOPARM),s=Me(n,M.RIGHTARM_WRIST),a=Me(n,M.RIGHTARM_ELBOW_LOWER);i.push(Dn(e,n,j.AXF_TOPARM_TO_ELBOW,r,o)),i.push(Dn(e,n,j.AXF_ELBOW_TO_HAND,s,a))}i=i.filter(r=>r),n.splineRegions=i}function Jc(e,n,t){for(const i of e.bodyParts)lg(e,i,n)}function Hr(e,n,t,i){const r=e.vertices.length-1;if(n>r)return console.log("Point Reference 0: Index: "+n+", Exceeded array max: "+r),null;if(t>r)return console.log("Point Reference 1: Index: "+t+", Exceeded array max: "+r),null;if(i>r)return console.log("Point Reference 2: Index: "+i+", Exceeded array max: "+r),null;const o=[n,t,i];return{nSides:e.noSides,pointReference:o}}function oi(e,n){const t=n.startLayer,i=n.endLayer;if(i>t){let r=n.startVertex;const o=[];for(let s=t;s<i;s++){const a=e.layers[s],l=e.layers[s+1];if(!a){console.log(e.id+" "+n.id+" layer is null: counter: "+s);continue}if(l==null){console.log(e.id+" "+n.id+" layer is null: counter: "+(s+1));continue}if(a.splineLayer==null){console.log(e.id+" "+n.id+" "+a.id+" splineLayer is null: counter: "+s);continue}if(l.splineLayer==null){console.log(e.id+" "+n.id+" "+l.id+" splineLayer is null: counter: "+(s+1));continue}const c=a.splineLayer.surface,d=l.splineLayer.surface;if(!c.nodes.length){console.log(e.id+" "+n.id+" "+l.id+" splineLayer is empty: counter: "+(s+1));continue}if(!d.nodes.length){console.log(e.id+" "+n.id+" "+l.id+" splineLayer is empty: counter: "+(s+1));continue}if(c.nodes.length!=d.nodes.length){console.log(" CubicSpline Node size not equal: A: size: "+c.nodes.length+", y: "+a.y+", B: size: "+d.nodes.length+", y: "+l.y);continue}if(a.y==l.y){console.log("CubicSpline Same Y Level: A: size: "+c.nodes.length+", y: "+a.y+", B: size: "+d.nodes.length+", y: "+l.y);continue}const u=r+c.nodes.length,f=2*c.nodes.length;if(o.length+f<J.BIG_POSITIVE_NUMBER_INT){for(let _=0;_<c.nodes.length-2;_++){const p=Hr(n,u+_,u+_+1,r+_);o.push(p);const A=Hr(n,r+_,u+_+1,r+_+1);o.push(A)}const h=c.nodes.length-2,m=Hr(n,u+h,u,r+h);o.push(m);const E=Hr(n,r+h,u,r);o.push(E)}r+=c.nodes.length}n.polygons=o}}function cg(e,n,t){for(let i of n.splineRegions)i.noSides=t,n.id==Z.TORSO?(e.noTorso||i.id!=j.AXF_HIP_TO_CROTCH&&i.id!=j.AXF_WAIST_TO_HIP&&i.id!=j.AXF_NECK_TO_ARMPIT||oi(n,i),e.noBust||i.id==j.AXF_ARMPIT_TO_WAIST&&oi(n,i),e.noHead||i.id==j.AXF_TOP_TO_NECK&&oi(n,i)):n.id==Z.CHEST_WALL?e.noTorso||e.noBust||i.id==j.AXF_ARMPIT_TO_WAIST&&oi(n,i):n.id==Z.LEFT_LEG||n.id==Z.RIGHT_LEG?e.noLegs||i.id!=j.AXF_ANKLE_TO_FLOOR&&i.id!=j.AXF_KNEE_TO_ANKLE&&i.id!=j.AXF_THIGH_TO_KNEE||oi(n,i):n.id==Z.LEFT_ARM||n.id==Z.RIGHT_ARM?e.noArms||i.id!=j.AXF_TOPARM_TO_ELBOW&&i.id!=j.AXF_ELBOW_TO_HAND||oi(n,i):n.id==Z.MJB_BUST&&(i.id!=j.AXF_ARMPIT_TO_WAIST&&i.id!=j.AXF_NECK_TO_ARMPIT||oi(n,i))}function ug(e,n){const t=[];for(let i of e.nodes)t.push({x:i.point.x,y:n,z:i.point.y});return t}function si(e,n,t){if(!e.layers.length)return void console.log(`${e.id} ${n.id} Layers are empty`);let i=[];const r=n.startLayer,o=n.endLayer;for(let s=r;s<=o;s++){const a=e.layers[s];if(a.splineLayer&&a.splineLayer.surface){const l=a.splineLayer.surface;i=i.concat(ug(l,a.y))}else console.log(`${e.id} ${n.id} Spline layer empty`)}n.vertices=i,n.extent=Yc(i)}function dg(e,n){for(const t of n.splineRegions)n.id==Z.TORSO?(e.noTorso||t.id!=j.AXF_HIP_TO_CROTCH&&t.id!=j.AXF_WAIST_TO_HIP||si(n,t,e.colour),e.noBust||t.id!=j.AXF_ARMPIT_TO_WAIST&&t.id!=j.AXF_NECK_TO_ARMPIT||si(n,t,e.colour),e.noHead||t.id==j.AXF_TOP_TO_NECK&&si(n,t,e.colour)):n.id==Z.CHEST_WALL?e.noTorso||e.noBust||t.id==j.AXF_ARMPIT_TO_WAIST&&si(n,t):n.id==Z.LEFT_LEG||n.id==Z.RIGHT_LEG?e.noLegs||t.id!=j.AXF_ANKLE_TO_FLOOR&&t.id!=j.AXF_KNEE_TO_ANKLE&&t.id!=j.AXF_THIGH_TO_KNEE||si(n,t,e.colour):n.id==Z.RIGHT_ARM||n.id==Z.LEFT_ARM?e.noArms||t.id!=j.AXF_TOPARM_TO_ELBOW&&t.id!=j.AXF_ELBOW_TO_HAND||si(n,t,e.colour):n.id==Z.MJB_BUST&&(t.id!=j.AXF_ARMPIT_TO_WAIST&&t.id!=j.AXF_NECK_TO_ARMPIT||si(n,t,e.colour))}function Qc(e){const{x:n,y:t,z:i}=e,r=Math.sqrt(n*n+t*t+i*i);r!=0&&(e.x=n/r,e.y=t/r,e.z=i/r)}function fg(e,n,t){return function(i,r){const o={x:i.y*r.z-i.z*r.y,y:i.z*r.x-i.x*r.z,z:i.x*r.y-i.y*r.x};return Qc(o),o}({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z},{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z})}function pg(e,n,t){try{const i=n.nSides,r=[],o=[];for(let s=0;s<i;s++)o[s]=n.pointReference[s],o[s]>t-1?console.log("Exceeded vertices array size: nVertices: "+t+", index: "+o[s]):r[s]=e.vertices[o[s]];if(r[0]&&r[1]&&r[2]){const s=fg(r[0],r[1],r[2]);n.normal=s}}catch(i){console.log(e.id+" Normal out of range",i)}}function hg(e){if(e.DONE_SMOOTH_NORMALS||!e.polygons||!e.polygons.length)return;e.DONE_NORMALS||function(r){if(!r.DONE_NORMALS){const o=r.vertices.length;for(let s of r.polygons)pg(r,s,o);r.DONE_NORMALS=!0}}(e);const n=[];for(let r=0;r<e.vertices.length;r++){const o={x:0,y:0,z:0};for(let s of e.polygons)for(let a=0;a<e.noSides;a++)r==s.pointReference[a]&&(s.normal?(t=o,i=s.normal,t.x=t.x+i.x,t.y=t.y+i.y,t.z=t.z+i.z):console.log("Polygon has null normal"));n.push(o)}var t,i;e.normals=n}(function(e){e[e.AXF_LOW=1]="AXF_LOW",e[e.AXF_MEDIUM=2]="AXF_MEDIUM",e[e.AXF_HIGH=3]="AXF_HIGH"})(Tn||(Tn={})),function(e){e[e.START_LEFT_X=1]="START_LEFT_X",e[e.START_LEFT_Y=2]="START_LEFT_Y",e[e.START_RIGHT_X=3]="START_RIGHT_X",e[e.START_RIGHT_Y=4]="START_RIGHT_Y",e[e.END_LEFT_X=5]="END_LEFT_X",e[e.END_LEFT_Y=6]="END_LEFT_Y",e[e.END_RIGHT_X=7]="END_RIGHT_X",e[e.END_RIGHT_Y=8]="END_RIGHT_Y",e[e.START_LAYER=9]="START_LAYER",e[e.END_LAYER=10]="END_LAYER",e[e.NRADIAL=11]="NRADIAL",e[e.NLINEAR=12]="NLINEAR"}(Vn||(Vn={}));function ms(e,n){return e.splineRegions.find(t=>t.id==n)}function Al(e,n,t){if(e)return function(i,r){switch(r){case Vn.START_LEFT_X:return i.start.left.x;case Vn.START_LEFT_Y:return i.start.left.y;case Vn.START_RIGHT_X:return i.start.right.x;case Vn.START_RIGHT_Y:return i.start.right.y;case Vn.END_LEFT_X:return i.end.left.x;case Vn.END_LEFT_Y:return i.end.left.y;case Vn.END_RIGHT_X:return i.end.right.x;case Vn.END_RIGHT_Y:return i.end.right.y;case Vn.START_LAYER:return i.startLayer;case Vn.END_LAYER:return i.endLayer;case Vn.NRADIAL:return i.noRadial;case Vn.NLINEAR:return i.noLinear}return 0}(ms(e,n),t)}function Sl(e,n,t){return n.startVertex+(t-n.startLayer)*e.layers[t].splineLayer.surface.nodes.length}function vl(e,n,t,i,r,o){if(!e.normals||!n.normals)return void console.error("Spline region normals was null: "+t+", vNearest: "+i);const s=e.normals[t],a=n.normals[i];var l,c;s&&a?r[o]=(c=a,{x:(l=s).x+c.x,y:l.y+c.y,z:l.z+c.z}):console.error("Vector was null, vIndexB: "+t+", vNearest: "+i)}function _g(e,n,t,i){try{const r=e.normals[n];r!=null?t[i]=JSON.parse(JSON.stringify(r)):console.log(e.id+" Vector was null, vIndexB: "+n+", list size: "+e.normals.length)}catch{console.log(e.id+" Out of bounds")}}function mg(e,n,t,i,r,o){const s=e.layers[t],a=i.layers[o];if(s&&a){const l=ms(e,n),c=ms(i,r);return l&&c&&(l.vertices&&c.vertices?function(d,u,f,h,m,E){const _=u.splineLayer.surface,p=m.splineLayer.surface;if(_.nodes.length>0&&p.nodes.length>0){const A=[],g=[];for(let T=0;T<_.nodes.length;T++){const y=f+T;let I=0,O=J.BIG_POSITIVE_NUMBER_SNG;for(let b=0;b<p.nodes.length;b++){const L=E+b,v=d.vertices[y],P=h.vertices[L];if(!v||!P){console.log("vertexA or vertexB was missing");continue}const k=Tr({x:v.x,y:v.z},{x:P.x,y:P.z});k>=O||(I=L,O=k)}O>=300?_g(d,y,A,T):vl(d,h,y,I,A,T)}for(let T=0;T<p.nodes.length;T++){const y=E+T;let I=0,O=J.BIG_POSITIVE_NUMBER_SNG;for(let b=0;b<_.nodes.length;b++){const L=f+b,v=d.vertices[L],P=h.vertices[y];if(!v||!P){console.log("vertexA or vertexB was missing");continue}const k=Tr({x:v.x,y:v.z},{x:P.x,y:P.z});k>=O||(I=L,O=k)}O>=300||vl(h,d,y,I,g,T)}for(let T=0;T<_.nodes.length;T++){const y=A[T];y?d.normals[f+T]=y:console.log(`Spline region:${d.type}, y: ${u.y}, iNodeA: ${T}: Normal was NULL`)}for(let T=0;T<p.nodes.length;T++){const y=g[T];y?h.normals[E+T]=y:console.log(`Spline region:${h.type}, y: ${m.y}, iNodeB: ${T}: Normal was NULL`)}}}(l,s,Sl(e,l,t),c,a,Sl(i,c,o)):console.log(`${l.type} or ${c.id} had empty vertices`)),!0}return!1}function rt(e,n,t,i,r,o){const s=Me(e,t),a=Me(i,o);if(s&&a)return mg(e,n,s.value,i,r,a.value);console.error(`${e.type}:${n} ${i.type}:${r} One of the layer markers is missing`)}function Eg(e){if(e.normals){for(let n of e.normals)Qc(n);e.DONE_SMOOTH_NORMALS=!0}else console.error(`${e.id} Spline region normals empty`)}function Tg(e){(function(n){for(let t of n.bodyParts)for(let i of t.splineRegions)i.vertices&&i.vertices.length?(hg(i),i.DONE_SMOOTH_NORMALS=!0):console.error(`${t.id} ${t.type} ${i.id} Vertices list is NULL`)})(e),function(n){if(n.version<1.999)return;const t=ze(n,Z.TORSO),i=ze(n,Z.LEFT_LEG),r=ze(n,Z.RIGHT_LEG),o=ze(n,Z.LEFT_ARM),s=ze(n,Z.RIGHT_ARM),a=ze(n,Z.MJB_BUST);if(t&&(n.noHead||n.noTorso||rt(t,j.AXF_NECK_TO_ARMPIT,M.TORSO_NECK_LOWER,t,j.AXF_TOP_TO_NECK,M.TORSO_NECK_UPPER),n.noTorso||(rt(t,j.AXF_ARMPIT_TO_WAIST,M.TORSO_ARMPIT_LOWER,t,j.AXF_NECK_TO_ARMPIT,M.TORSO_ARMPIT_UPPER),rt(t,j.AXF_WAIST_TO_HIP,M.TORSO_WAIST_LOWER,t,j.AXF_ARMPIT_TO_WAIST,M.TORSO_WAIST_UPPER),rt(t,j.AXF_HIP_TO_CROTCH,M.TORSO_HIP_LOWER,t,j.AXF_WAIST_TO_HIP,M.TORSO_HIP_UPPER)),n.noTorso||n.noLegs||(i&&rt(t,j.AXF_HIP_TO_CROTCH,M.TORSO_CROTCH,i,j.AXF_THIGH_TO_KNEE,M.LEFTLEG_THIGH),r&&rt(t,j.AXF_HIP_TO_CROTCH,M.TORSO_CROTCH,r,j.AXF_THIGH_TO_KNEE,M.RIGHTLEG_THIGH))),n.noLegs||(i&&(rt(i,j.AXF_THIGH_TO_KNEE,M.LEFTLEG_KNEE_UPPER,i,j.AXF_KNEE_TO_ANKLE,M.LEFTLEG_KNEE_LOWER),rt(i,j.AXF_KNEE_TO_ANKLE,M.LEFTLEG_ANKLE_UPPER,i,j.AXF_ANKLE_TO_FLOOR,M.LEFTLEG_ANKLE_LOWER)),r&&(rt(r,j.AXF_THIGH_TO_KNEE,M.RIGHTLEG_KNEE_UPPER,r,j.AXF_KNEE_TO_ANKLE,M.RIGHTLEG_KNEE_LOWER),rt(r,j.AXF_KNEE_TO_ANKLE,M.RIGHTLEG_ANKLE_UPPER,r,j.AXF_ANKLE_TO_FLOOR,M.RIGHTLEG_ANKLE_LOWER))),n.noArms||(o&&rt(o,j.AXF_TOPARM_TO_ELBOW,M.LEFTARM_ELBOW_UPPER,o,j.AXF_ELBOW_TO_HAND,M.LEFTARM_ELBOW_LOWER),s&&rt(s,j.AXF_TOPARM_TO_ELBOW,M.RIGHTARM_ELBOW_UPPER,s,j.AXF_ELBOW_TO_HAND,M.RIGHTARM_ELBOW_LOWER)),a){const l=Al(a,j.AXF_ARMPIT_TO_WAIST,Vn.END_LAYER),c=Al(a,j.AXF_NECK_TO_ARMPIT,Vn.START_LAYER);rt(a,j.AXF_NECK_TO_ARMPIT,c,a,j.AXF_ARMPIT_TO_WAIST,l)}}(e),function(n){for(let t of n.bodyParts)for(let i of t.splineRegions)i.vertices&&i.vertices.length?Eg(i):console.error(`${i.type}: Spline region initialised but no vertices added`)}(e)}var en,Te,fn,zn,lr,Fi,Rr,Jt,Kt,Yt;function Es(e){let n=Object.keys(fn).filter(t=>fn[t]==e);return n.length>0?n[0]:null}function Nt(e){return e.layers[0]}function Ll(e){return e[e.length-1]}function nr(e,n,t,i){const r=i-t,o=e.b+2*e.c*r+3*e.d*r*r,s=n.b+2*n.c*r+3*n.d*r*r;return Math.sqrt(Math.pow(o,2)+Math.pow(s,2))}function Yr(e,n,t){const{parametricNodes:i,parametricCoefficients:r}=e;let o=0,s=0;for(let a=n;a<t;a++){const l=r.xs_coeffs[a],c=r.ys_coeffs[a],d=i.xsPoints[a].x,u=i.xsPoints[a].x,f=(u-d)/22,h=nr(l,c,d,d),m=nr(l,c,d,u);let E=0;for(let _=1;_<10;_++){o=d+(2*_-1)*f;const p=nr(l,c,d,o);o=d+2*_*f,E=E+4*p+2*nr(l,c,d,o)}o+=f,s+=f*(h+E+4*nr(l,c,d,o)+m)/3}return s}(function(e){e[e.FRONT=1]="FRONT",e[e.SIDE=2]="SIDE",e[e.REAR=3]="REAR"})(en||(en={})),function(e){e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT"}(Te||(Te={})),function(e){e[e.NONE=0]="NONE",e[e.AXF_LEG_FRONT_OUTER=1]="AXF_LEG_FRONT_OUTER",e[e.AXF_LEG_FRONT_INNER=2]="AXF_LEG_FRONT_INNER",e[e.AXF_LEG_FRONT_JOIN_LOWER=3]="AXF_LEG_FRONT_JOIN_LOWER",e[e.AXF_LEG_FRONT_JOIN_UPPER=4]="AXF_LEG_FRONT_JOIN_UPPER",e[e.AXF_LEG_SIDE_REAR=5]="AXF_LEG_SIDE_REAR",e[e.AXF_LEG_SIDE_FRONT=6]="AXF_LEG_SIDE_FRONT",e[e.AXF_LEG_SIDE_JOIN_LOWER=7]="AXF_LEG_SIDE_JOIN_LOWER",e[e.AXF_LEG_SIDE_JOIN_UPPER=8]="AXF_LEG_SIDE_JOIN_UPPER",e[e.AXF_ARM_FRONT_OUTER=9]="AXF_ARM_FRONT_OUTER",e[e.AXF_ARM_FRONT_INNER=10]="AXF_ARM_FRONT_INNER",e[e.AXF_ARM_FRONT_JOIN_LOWER=11]="AXF_ARM_FRONT_JOIN_LOWER",e[e.AXF_ARM_FRONT_JOIN_UPPER=12]="AXF_ARM_FRONT_JOIN_UPPER",e[e.AXF_ARM_SIDE_REAR=13]="AXF_ARM_SIDE_REAR",e[e.AXF_ARM_SIDE_FRONT=14]="AXF_ARM_SIDE_FRONT",e[e.AXF_ARM_SIDE_JOIN_LOWER=15]="AXF_ARM_SIDE_JOIN_LOWER",e[e.AXF_ARM_SIDE_JOIN_UPPER=16]="AXF_ARM_SIDE_JOIN_UPPER",e[e.AXF_TORSO_FRONT_LEFT_LOWER=17]="AXF_TORSO_FRONT_LEFT_LOWER",e[e.AXF_TORSO_FRONT_LEFT_UPPER=18]="AXF_TORSO_FRONT_LEFT_UPPER",e[e.AXF_TORSO_FRONT_LEFT_JOIN_MID=19]="AXF_TORSO_FRONT_LEFT_JOIN_MID",e[e.AXF_TORSO_FRONT_RIGHT_LOWER=20]="AXF_TORSO_FRONT_RIGHT_LOWER",e[e.AXF_TORSO_FRONT_RIGHT_UPPER=21]="AXF_TORSO_FRONT_RIGHT_UPPER",e[e.AXF_TORSO_FRONT_RIGHT_JOIN_MID=22]="AXF_TORSO_FRONT_RIGHT_JOIN_MID",e[e.AXF_TORSO_FRONT_JOIN_LOWER=23]="AXF_TORSO_FRONT_JOIN_LOWER",e[e.AXF_TORSO_SIDE_FRONT=24]="AXF_TORSO_SIDE_FRONT",e[e.AXF_TORSO_SIDE_REAR=25]="AXF_TORSO_SIDE_REAR",e[e.AXF_TORSO_SIDE_JOIN_LOWER=26]="AXF_TORSO_SIDE_JOIN_LOWER",e[e.AXF_TORSO_SIDE_JOIN_UPPER=27]="AXF_TORSO_SIDE_JOIN_UPPER"}(fn||(fn={})),function(e){e[e.UPPER=1]="UPPER",e[e.LOWER=2]="LOWER"}(zn||(zn={}));class qi{constructor(){this.nodes=[]}setNodes(n){return this.nodes=n,this}setSamplePoints(n){return this.samplePoints=n,this}setSurfaceMeasure(n){return this.surfaceMeasure=n,this}setParametericNodesAndCoefficients(n){return this.parametricNodesAndCoefficients=n,this}hasNodes(){return this.nodes.length>0}addNode(n){this.nodes.push(n)}addDistinctNode(n,t){return function(i,r,o){if(i==null)i=[];else if(o!=0){if(!(Math.abs(r.x-Ll(i).point.x)+Math.abs(r.y-Ll(i).point.y)>=o))return!1}const s={point:{x:r.x,y:r.y}};return i.push(s),!0}(this.nodes,n,t)}regeneratePointsOnSpline(n=200,t=0,i=this.nodes.length-1,r=!1){this.samplePoints=xr(this.nodes,this.parametricNodesAndCoefficients.parametricNodes,this.parametricNodesAndCoefficients.parametricCoefficients,n,t,i,r)}remove_end_node(){this.nodes.length>1?this.nodes.pop():this.nodes=[]}generateSpline(){this.parametricNodesAndCoefficients=$c(this.nodes)}splineLength(n=0,t=this.nodes.length-1){this.surfaceMeasure=Yr(this.parametricNodesAndCoefficients,n,t)}closeLoop(){this.addNode(JSON.parse(JSON.stringify(this.nodes[0])))}build(){return Object.assign({samplePoints:this.samplePoints,nodes:this.nodes,surfaceMeasure:this.surfaceMeasure},this.parametricNodesAndCoefficients)}}function eo(e,n){let t=-1;if(e.nodes.length){t=0;let i=Math.abs(function(r){return r.nodes[0]}(e).point.y-n);for(let r=0;r<e.nodes.length;r++){const o=Math.abs(e.nodes[r].point.y-n);o<i&&(t=r,i=o)}}return t}function Wi(e,n,t){return t==en.FRONT?e.frontSilhouette.find(i=>i.id===n):e.sideSilhouette.find(i=>i.id===n)}class ki{constructor(n){this.silhouetteRegionType=n,this.outlineRefs=[]}setFrontSideRearType(n){return this.frontSideRearType=n,this}setCubicSpline(n){return this.cubicSpline=n,this}setCubicSplineFromSegment(n,t,i){const r=Wi(n,t,this.frontSideRearType);if(r==null)return console.error(`Silhouette Spline Segment: Segment not found, segcode:${Es(t)}, front side:${function(l){let c=Object.keys(en).filter(d=>en[d]==l);return c.length>0?c[0]:null}(this.frontSideRearType)}`),null;const o=eo(r.cubicSpline,this.maxLayer.y),s=eo(r.cubicSpline,this.minLayer.y);if(!(o>=0&&s>0&&o<r.cubicSpline.nodes.length-1))return console.error(`Silhouette Spline Segment: Min control index out of range, segcode:${t} (${Es(t)}), minControlIndex:${o}, maxControlIndex:${s}, nNodes:${r.cubicSpline.nodes.length}`),null;const a=new qi;return a.setNodes(r.cubicSpline.nodes),a.setParametericNodesAndCoefficients(r.cubicSpline),a.regeneratePointsOnSpline(i,o,s,!1),this.cubicSpline=a.build(),this}setOutlineRef(n){return this.outlineRefs.push(n),this}setMinLayer(n){return this.minLayer=n,this}setMaxLayer(n){return this.maxLayer=n,this}setMinY(n){return this.minY=n,this}setMaxY(n){return this.maxY=n,this}build(){return{id:this.silhouetteRegionType,frontSideRearType:this.frontSideRearType,cubicSpline:this.cubicSpline,outlineRefs:this.outlineRefs,minLayer:this.minLayer,maxLayer:this.maxLayer,minY:this.minY,maxY:this.maxY}}}function ht(e,n,t,i,r,o,s){const a={x:0,y:0,z:0},l=new ki(n);l.setFrontSideRearType(s);const c=new qi;for(let m=e.layers.length-1;m>0&&(r!=zn.UPPER||m!=i);m--){const E=e.layers[m],_=o==Te.RIGHT?E.extent.max:E.extent.min;a.x=s==en.SIDE?_.x:_.z,a.y=E.y,c.addDistinctNode(a,t)&&l.setOutlineRef({x:a.x,y:a.y,z:E.extent.mid.z})}const d=r==zn.UPPER?e.layers[i]:Nt(e),u=o==Te.RIGHT?d.extent.max:d.extent.min;a.x=s==en.SIDE?u.x:u.z,a.y=d.y;let f=c.addDistinctNode(a,t);f||(c.remove_end_node(),f=c.addDistinctNode(a,t)),f&&l.setOutlineRef({x:a.x,y:a.y,z:d.extent.mid.z}),c.generateSpline(),c.regeneratePointsOnSpline();const h=c.build();return l.setCubicSpline(h),l.build()}function gg(e){e.frontSilhouette=function(n){const t=[];switch(n.id){case Z.LEFT_LEG:case Z.RIGHT_LEG:t.push(ht(n,fn.AXF_LEG_FRONT_OUTER,0,0,zn.LOWER,Te.LEFT,en.SIDE)),t.push(ht(n,fn.AXF_LEG_FRONT_INNER,0,0,zn.LOWER,Te.RIGHT,en.SIDE));break;case Z.LEFT_ARM:case Z.RIGHT_ARM:t.push(ht(n,fn.AXF_ARM_FRONT_OUTER,0,0,zn.LOWER,Te.LEFT,en.SIDE)),t.push(ht(n,fn.AXF_ARM_FRONT_INNER,0,0,zn.LOWER,Te.RIGHT,en.SIDE));break;case Z.TORSO:t.push(ht(n,fn.AXF_TORSO_FRONT_LEFT_LOWER,0,0,zn.LOWER,Te.LEFT,en.SIDE)),t.push(ht(n,fn.AXF_TORSO_FRONT_RIGHT_LOWER,0,0,zn.LOWER,Te.RIGHT,en.SIDE));break;default:return null}return t}(e),e.sideSilhouette=function(n){const t=[];return n.id==Z.LEFT_LEG||n.id==Z.RIGHT_LEG?(t.push(ht(n,fn.AXF_LEG_SIDE_FRONT,0,0,zn.LOWER,Te.RIGHT,en.FRONT)),t.push(ht(n,fn.AXF_LEG_SIDE_REAR,0,0,zn.LOWER,Te.LEFT,en.FRONT))):n.id==Z.TORSO&&(t.push(ht(n,fn.AXF_TORSO_SIDE_FRONT,0,0,zn.LOWER,Te.RIGHT,en.FRONT)),t.push(ht(n,fn.AXF_TORSO_SIDE_FRONT,0,0,zn.UPPER,Te.RIGHT,en.FRONT)),t.push(ht(n,fn.AXF_TORSO_SIDE_REAR,0,0,zn.LOWER,Te.LEFT,en.FRONT)),t.push(ht(n,fn.AXF_TORSO_SIDE_REAR,0,0,zn.UPPER,Te.LEFT,en.FRONT))),t}(e)}function eu(e){for(const n of e.bodyParts)gg(n)}function Rg(e,n){Zc(e),eu(e),e.surfaceDefined&&(Jc(e,!1),function(t,i,r){for(const o of t.bodyParts)dg(t,o),cg(t,o,i);r&&Tg(t),t.surfaceDefined=!0}(e,3,n))}function Ag(e,n,t){const i=function(r,o,s){const a=r.readShort(),l=new qi;for(let c=0;c<a;c++){let d,u;o==1?d={x:r.readDouble(),y:r.readDouble()}:o>1.0001&&o<3.99999?d={x:r.readShort(),y:r.readShort()}:o>=3.99999&&(d={x:r.readFloat(),y:r.readFloat()}),u=s==1?{x:r.readByte(),y:r.readByte(),z:r.readByte()}:{x:255,y:255,z:255},l.addNode({point:d,colour:u})}if(l.hasNodes())return l.generateSpline(),l.splineLength(),l.build()}(e,n,t);if(i)return{surface:i}}function Sg(e,n,t,i,r){const o=e.readShort();let s,a;return n==1&&(s=function(l,c,d){const u=[],f=[],h=l.readShort();for(let m=0;m<h;m++)u.push({x:l.readShort(),y:c,z:l.readShort()}),d==1?f.push({x:l.readByte(),y:l.readByte(),z:l.readByte()}):f.push({x:255,y:255,z:255});return{points:u,colours:f}}(e,o,i)),t!=1||(a=Ag(e,r,i),a)?{y:o,pointLayer:s,splineLayer:a}:(console.error(`Empty spline, layer ignored: y: ${o}`),null)}class To{constructor(n){if(this.id=n,this.type=function(t){let i=Object.keys(Z).filter(r=>Z[r]==t);return i.length>0?i[0]:null}(n),!this.type)throw new Error(`Body part type ${n} not found`)}setLayerOffset(n){this.layerOffset=n}setLayers(n){this.layers=n}setExtent(n){this.extent=n}build(){return{id:this.id,type:this.type,layerOffset:this.layerOffset,layers:this.layers,extent:this.extent}}}function vg(e,n,t,i,r){const o=e.readShort(),s=new To(o);s.setLayerOffset(e.readShort());const a=e.readShort(),l=[];for(let c=0;c<a;c++){const d=Sg(e,n,t,i,r);d?l.push(d):console.error(`Layer failed: bodypart - ${o}, layer - ${c}`)}return s.setLayers(l),s.build()}function Lg(e){const n=e.readShort(),t=Hi(n);return t==null?void console.log("No landmark type with id: "+n):{id:n,landmarkType:t,x:e.readShort(),y:e.readShort(),z:e.readShort()}}function xg(e,n){const t={};return t.useMidBust=e.readBoolean(),n>3.01&&(t.regenerateArmpitPoints=e.readBoolean()),t.threeLines=e.readBoolean(),t.armpit_z_biasL=e.readDouble(),t.armpit_z_biasR=e.readDouble(),n>3&&(t.chest_z_biasL=e.readDouble(),t.chest_z_biasR=e.readDouble()),t.waist_z_biasL=e.readDouble(),t.waist_z_biasR=e.readDouble(),t.left_bust_x_bias=e.readDouble(),t.right_bust_x_bias=e.readDouble(),t.mid_bust_x_bias=e.readDouble(),t.z_midspline_adjust_highchest=e.readShort(),t.z_midspline_adjust_armpit=e.readShort(),t.z_midspline_adjust_bust=e.readShort(),t.z_midspline_adjust_underbust=e.readShort(),t.z_midspline_adjust_waist=e.readShort(),t.z_leftspline_adjust_highchest=e.readShort(),t.z_leftspline_adjust_armpit=e.readShort(),t.z_leftspline_adjust_bust=e.readShort(),t.z_leftspline_adjust_underbust=e.readShort(),t.z_leftspline_adjust_waist=e.readShort(),t.z_rightspline_adjust_highchest=e.readShort(),t.z_rightspline_adjust_armpit=e.readShort(),t.z_rightspline_adjust_bust=e.readShort(),t.z_rightspline_adjust_underbust=e.readShort(),t.z_rightspline_adjust_waist=e.readShort(),t.y_midspline_adjust_highchest=e.readShort(),t.y_midspline_adjust_armpit=e.readShort(),t.y_midspline_adjust_bust=e.readShort(),t.y_midspline_adjust_underbust=e.readShort(),t.y_midspline_adjust_waist=e.readShort(),t.y_leftspline_adjust_highchest=e.readShort(),t.y_leftspline_adjust_armpit=e.readShort(),t.y_leftspline_adjust_bust=e.readShort(),t.y_leftspline_adjust_underbust=e.readShort(),t.y_leftspline_adjust_waist=e.readShort(),t.y_rightspline_adjust_highchest=e.readShort(),t.y_rightspline_adjust_armpit=e.readShort(),t.y_rightspline_adjust_bust=e.readShort(),t.y_rightspline_adjust_underbust=e.readShort(),t.y_rightspline_adjust_waist=e.readShort(),t}function Mg(e){const n=e.readShort(),t=lr[function(i){let r=Object.keys(lr).filter(o=>lr[o]==i);return r.length>0?r[0]:null}(n)];return t==null?void console.error(`No measurement type with id: ${n}`):{id:n,measurementType:t,value:e.readFloat()}}function yg(e,n=!0){const t=new Vc(e),i=new zc;i.setHeader(function(d){return{version:d.readFloat(),colour:d.readBoolean(),sex:d.readSexType(),yResolutionMM:d.readFloat(),xZResolutionMM:d.readFloat(),rawPointsDefined:d.readBoolean(),surfaceDefined:d.readBoolean(),normalisedPointsInLayer:d.readBoolean(),normalisedLayersInRegion:d.readBoolean()}}(t));const{rawPointsDefined:r,surfaceDefined:o,colour:s,version:a}=i.bodyHeader,l={noHead:!1,noArms:!1,noBust:!1,noLegs:!1,noTorso:!1};a<1.999&&(l.noHead=!0,l.noArms=!0),i.setFlags(l),i.setLandmarks(function(d){const u=[],f=d.readShort();for(let h=0;h<f;h++){const m=Lg(d);u.push(m)}return u}(t)),a>1.999&&i.setReferenceLocations(function(d){const u=[],f=d.readShort();for(let h=0;h<f;h++){const m={id:d.readShort(),bodypartID:d.readShort(),layerId:d.readShort(),pointId:d.readInt(),visible:!1};u.push(m)}return u}(t)),function(d,u,f){const h=u.readShort(),m=[];for(let _=0;_<h;_++)m.push(u.readShort());d.setPersonDetails(m);const E=[];for(const _ of m)switch(_){case Fi.AXF_PD_NAME:case Fi.AXF_PD_ADDRESS:break;case Fi.AXF_PD_MEASUREMENT:const p=u.readShort();for(let A=0;A<p;A++)E.push(Mg(u));break;case Fi.AXF_PD_CHESTWALLPARAMETER:d.setChestWallDefinition(xg(u,f))}d.setMeasurements(E)}(i,t,a),i.addBodyParts(...function(d,u,f,h,m){const E=[],_=d.readShort();for(let p=0;p<_;p++){const A=vg(d,u,f,h,m);A&&E.push(A)}return E}(t,r,o,s,a)),o&&i.setNormaliseResolution(function(d){const u=d.find(f=>Z[f.type]===Z.TORSO);if(u)switch(Nt(u).splineLayer.surface.nodes.length){case 33:return Tn.AXF_LOW;case 49:return Tn.AXF_MEDIUM;case 65:return Tn.AXF_HIGH}}(i.bodyParts)),t.close();const c=i.build();return Rg(c,n),c}function Ig(e,n,t){const i=JSON.parse(JSON.stringify(e));return i.bodyParts.forEach((r,o)=>{(function(s,a,l){s.layers.forEach((c,d)=>{(function(u,f,h){const m=u.y,E=f.y;u.y=(1-h)*m+h*E,function(_,p,A){_.nodes.forEach((g,T)=>{const y=p.nodes[T],I=g.point.x,O=g.point.y,b=y.point.x,L=y.point.y;g.point.x=(1-A)*I+A*b,g.point.y=(1-A)*O+A*L})}(u.splineLayer.surface,f.splineLayer.surface,h)})(c,a.layers[d],l)})})(r,n.bodyParts[o],t)}),i}function xl(e,n){const t=Me(e,n);if(!t)return;const i=t.value+1;return e.layers[i]}function Oi(e,n,t){return{x:Ko(e.x,n.x,t),y:Ko(e.y,n.y,t),z:Ko(e.z,n.z,t)}}function Ko(e,n,t){return e+t*(n-e)}function hn(e,n){const{x:t,y:i,z:r}=e,{x:o,y:s,z:a}=n;return{x:t-o,y:i-s,z:r-a}}function Og(e){const n=re(e,U.NECK_INTERNAL),t=re(e,U.TOP_HEAD);t.y=t.y+1500;const i=re(e,U.LOW_CHEST_INTERNAL),r=re(e,U.WAIST_INTERNAL),o=re(e,U.HIP_INTERNAL),s=re(e,U.LEFT_TOP_ARM_INTERNAL),a=re(e,U.LEFT_ELBOW_INTERNAL),l=re(e,U.LEFT_WRIST_INTERNAL),c={x:l.x,y:l.y-800,z:l.z},d=re(e,U.RIGHT_TOP_ARM_INTERNAL),u=re(e,U.RIGHT_ELBOW_INTERNAL),f=re(e,U.RIGHT_WRIST_INTERNAL),h={x:f.x,y:f.y-800,z:f.z},m=xl(ze(e,Z.LEFT_LEG),M.LEFTLEG_FLOOR),E=re(e,U.LEFT_TOP_THIGH_INTERNAL);E.y=o.y;const _=re(e,U.LEFT_KNEE_INTERNAL),p=re(e,U.LEFT_ANKLE_INTERNAL),A=re(e,U.LEFT_FLOOR);A.z=m.extent.max.z;const g=xl(ze(e,Z.RIGHT_LEG),M.RIGHTLEG_FLOOR),T=re(e,U.RIGHT_TOP_THIGH_INTERNAL);T.y=o.y;const y=re(e,U.RIGHT_KNEE_INTERNAL),I=re(e,U.RIGHT_ANKLE_INTERNAL),O=re(e,U.RIGHT_FLOOR);O.z=g.extent.max.z;const b=hn({x:E.x,y:o.y,z:o.z},o),L=hn(E,b),v=hn(_,L),P=hn(p,v),k=hn(A,P),V=hn({x:T.x,y:o.y,z:o.z},o),K=hn(T,V),ee=hn(y,K),W=hn(I,ee),se=hn(O,W),X=hn(Oi(o,r,.5),o),_e=hn(r,X),Ie=hn(i,_e),De=hn(Oi(i,n,.5),Ie),We=hn(n,De),ce=hn(t,We),D=hn(t,ce),ie=hn(Oi(s,n,.66),We),me=hn(Oi(s,n,.5),ie),oe=hn(a,me),ye=hn(l,oe),Ce=hn(c,ye),Ue=hn(Oi(d,n,.66),We),on=hn(Oi(d,n,.5),Ue),Ye=hn(u,on),pn=hn(f,Ye);return{name:"Hips",position:o,children:[{name:"LHipJoint",position:b,children:[{name:"LeftUpLeg",position:L,children:[{name:"LeftLeg",position:v,children:[{name:"LeftFoot",position:P,children:[{name:"LeftToeBase",position:k,children:[]}]}]}]}]},{name:"RHipJoint",position:V,children:[{name:"RightUpLeg",position:K,children:[{name:"RightLeg",position:ee,children:[{name:"RightFoot",position:W,children:[{name:"RightToeBase",position:se,children:[]}]}]}]}]},{name:"LowerBack",position:r,children:[{name:"Spine",position:_e,children:[{name:"Spine1",position:Ie,children:[{name:"Neck",position:De,children:[{name:"Neck1",position:We,children:[{name:"Head",position:ce,children:[{name:"ENDSITE",position:D,children:[]}]},{name:"LeftShoulder",position:ie,children:[{name:"LeftArm",position:me,children:[{name:"LeftForeArm",position:oe,children:[{name:"LeftHand",position:ye,children:[{name:"LeftFingerBase",position:Ce,children:[]}]}]}]}]},{name:"RightShoulder",position:Ue,children:[{name:"RightArm",position:on,children:[{name:"RightForeArm",position:Ye,children:[{name:"RightHand",position:pn,children:[{name:"RightFingerBase",position:hn(h,pn),children:[]}]}]}]}]}]}]}]}]}]}]}}function Pg(e){return[{start:e.leftArmpit,end:e.farLeftArmpit},{start:e.leftArmpit,end:e.leftFloor},{start:e.rightArmpit,end:e.farRightArmpit},{start:e.rightArmpit,end:e.rightFloor},{start:e.crotchLandmark,end:e.crotchFloor},{start:e.leftCrotch,end:e.rightCrotch}]}function Ng(e){let n=0,t=!0;for(let i of e.bodyParts)(t||Nt(i).y<n)&&(n=Nt(i).y,t=!1);return n}function Us(e,n){let t=-1;for(let i of e.bodyParts)t=Bi(i,n);return t}(function(e){e[e.AXF_HEIGHT=1]="AXF_HEIGHT",e[e.AXF_NECK_GIRTH=2]="AXF_NECK_GIRTH",e[e.AXF_CHEST_GIRTH=3]="AXF_CHEST_GIRTH",e[e.AXF_BUST_GIRTH=4]="AXF_BUST_GIRTH",e[e.AXF_BUST_WIDTH=5]="AXF_BUST_WIDTH",e[e.AXF_UNDER_BUST_GIRTH=6]="AXF_UNDER_BUST_GIRTH",e[e.AXF_LOW_CHEST_GIRTH=7]="AXF_LOW_CHEST_GIRTH",e[e.AXF_WAIST_GIRTH=8]="AXF_WAIST_GIRTH",e[e.AXF_TOP_HIP_GIRTH=9]="AXF_TOP_HIP_GIRTH",e[e.AXF_SEAT_PROMINENCE_GIRTH=10]="AXF_SEAT_PROMINENCE_GIRTH",e[e.AXF_HIP_GIRTH=11]="AXF_HIP_GIRTH",e[e.AXF_NAPE_HEIGHT=20]="AXF_NAPE_HEIGHT",e[e.AXF_BUST_HEIGHT=21]="AXF_BUST_HEIGHT",e[e.AXF_UNDER_BUST_HEIGHT=22]="AXF_UNDER_BUST_HEIGHT",e[e.AXF_WAIST_HEIGHT=23]="AXF_WAIST_HEIGHT",e[e.AXF_HIP_HEIGHT=24]="AXF_HIP_HEIGHT",e[e.AXF_CROTCH_HEIGHT=25]="AXF_CROTCH_HEIGHT",e[e.AXF_FRONT_NECK_HEIGHT=26]="AXF_FRONT_NECK_HEIGHT",e[e.AXF_TORSO_LENGTH_CROTCH_ARMPIT=27]="AXF_TORSO_LENGTH_CROTCH_ARMPIT",e[e.AXF_NIPPLE_WIDTH=40]="AXF_NIPPLE_WIDTH",e[e.AXF_NAPE_TO_WAIST=41]="AXF_NAPE_TO_WAIST",e[e.AXF_THROUGH_RISE=42]="AXF_THROUGH_RISE",e[e.AXF_NAPE_TO_LEFT_NIPPLE=43]="AXF_NAPE_TO_LEFT_NIPPLE",e[e.AXF_NAPE_TO_RIGHT_NIPPLE=44]="AXF_NAPE_TO_RIGHT_NIPPLE",e[e.AXF_CENTRE_SHOULDER_TO_REAR_WAIST=45]="AXF_CENTRE_SHOULDER_TO_REAR_WAIST",e[e.AXF_BACK_SHOULDER_WIDTH=46]="AXF_BACK_SHOULDER_WIDTH",e[e.AXF_NAPE_TO_LEFT_SIDE_NECK=47]="AXF_NAPE_TO_LEFT_SIDE_NECK",e[e.AXF_NAPE_TO_RIGHT_SIDE_NECK=48]="AXF_NAPE_TO_RIGHT_SIDE_NECK",e[e.AXF_LEFT_SIDE_NECK_TO_NIPPLE=49]="AXF_LEFT_SIDE_NECK_TO_NIPPLE",e[e.AXF_RIGHT_SIDE_NECK_TO_NIPPLE=50]="AXF_RIGHT_SIDE_NECK_TO_NIPPLE",e[e.AXF_CENTRE_SHOULDER_TO_FRONT_WAIST=51]="AXF_CENTRE_SHOULDER_TO_FRONT_WAIST",e[e.AXF_LEFT_THIGH_GIRTH=70]="AXF_LEFT_THIGH_GIRTH",e[e.AXF_RIGHT_THIGH_GIRTH=71]="AXF_RIGHT_THIGH_GIRTH",e[e.AXF_LEFT_KNEE_GIRTH=72]="AXF_LEFT_KNEE_GIRTH",e[e.AXF_RIGHT_KNEE_GIRTH=73]="AXF_RIGHT_KNEE_GIRTH",e[e.AXF_LEFT_CALF_GIRTH=74]="AXF_LEFT_CALF_GIRTH",e[e.AXF_RIGHT_CALF_GIRTH=75]="AXF_RIGHT_CALF_GIRTH",e[e.AXF_LEFT_MINIMUM_LEG_GIRTH=76]="AXF_LEFT_MINIMUM_LEG_GIRTH",e[e.AXF_RIGHT_MINIMUM_LEG_GIRTH=77]="AXF_RIGHT_MINIMUM_LEG_GIRTH",e[e.AXF_LEFT_ANKLE_GIRTH=78]="AXF_LEFT_ANKLE_GIRTH",e[e.AXF_RIGHT_ANKLE_GIRTH=79]="AXF_RIGHT_ANKLE_GIRTH",e[e.AXF_LEFT_KNEE_HEIGHT=80]="AXF_LEFT_KNEE_HEIGHT",e[e.AXF_RIGHT_KNEE_HEIGHT=81]="AXF_RIGHT_KNEE_HEIGHT",e[e.AXF_INSIDE_LEG=82]="AXF_INSIDE_LEG",e[e.AXF_LEFT_MID_THIGH_GIRTH=83]="AXF_LEFT_MID_THIGH_GIRTH",e[e.AXF_RIGHT_MID_THIGH_GIRTH=84]="AXF_RIGHT_MID_THIGH_GIRTH",e[e.AXF_LEFT_ARM_LENGTH=90]="AXF_LEFT_ARM_LENGTH",e[e.AXF_RIGHT_ARM_LENGTH=91]="AXF_RIGHT_ARM_LENGTH",e[e.AXF_LEFT_UNDER_ARM_LENGTH=92]="AXF_LEFT_UNDER_ARM_LENGTH",e[e.AXF_RIGHT_UNDER_ARM_LENGTH=93]="AXF_RIGHT_UNDER_ARM_LENGTH",e[e.AXF_LEFT_SHOULDER_SLOPE=94]="AXF_LEFT_SHOULDER_SLOPE",e[e.AXF_RIGHT_SHOULDER_SLOPE=95]="AXF_RIGHT_SHOULDER_SLOPE",e[e.AXF_LEFT_UPPER_ARM_GIRTH=96]="AXF_LEFT_UPPER_ARM_GIRTH",e[e.AXF_RIGHT_UPPER_ARM_GIRTH=97]="AXF_RIGHT_UPPER_ARM_GIRTH",e[e.AXF_LEFT_SHOULDER_TO_ELBOW=98]="AXF_LEFT_SHOULDER_TO_ELBOW",e[e.AXF_RIGHT_SHOULDER_TO_ELBOW=99]="AXF_RIGHT_SHOULDER_TO_ELBOW",e[e.AXF_LEFT_ELBOW_TO_WRIST=100]="AXF_LEFT_ELBOW_TO_WRIST",e[e.AXF_RIGHT_ELBOW_TO_WRIST=101]="AXF_RIGHT_ELBOW_TO_WRIST",e[e.AXF_LEFT_ARMPIT_TO_ARMCREASE=102]="AXF_LEFT_ARMPIT_TO_ARMCREASE",e[e.AXF_RIGHT_ARMPIT_TO_ARMCREASE=103]="AXF_RIGHT_ARMPIT_TO_ARMCREASE",e[e.AXF_LEFT_ARMCREASE_TO_WRIST=104]="AXF_LEFT_ARMCREASE_TO_WRIST",e[e.AXF_RIGHT_ARMCREASE_TO_WRIST=105]="AXF_RIGHT_ARMCREASE_TO_WRIST",e[e.AXF_LEFT_SHOULDER_LENGTH=106]="AXF_LEFT_SHOULDER_LENGTH",e[e.AXF_RIGHT_SHOULDER_LENGTH=107]="AXF_RIGHT_SHOULDER_LENGTH",e[e.AXF_TORSO_LENGTH_CROTCH_ARMPIT_OLD=108]="AXF_TORSO_LENGTH_CROTCH_ARMPIT_OLD",e[e.AXF_BUST_PROMINENCE_UPPER=200]="AXF_BUST_PROMINENCE_UPPER",e[e.AXF_BUST_PROMINENCE_LOWER=201]="AXF_BUST_PROMINENCE_LOWER",e[e.AXF_BUST_ANGLE=206]="AXF_BUST_ANGLE",e[e.AXF_ABDOMEN_PROMINENCE_UPPER=210]="AXF_ABDOMEN_PROMINENCE_UPPER",e[e.AXF_ABDOMEN_PROMINENCE_LOWER=211]="AXF_ABDOMEN_PROMINENCE_LOWER",e[e.AXF_LEFT_FRONT_LATERAL_DEVIATION_UPPER=212]="AXF_LEFT_FRONT_LATERAL_DEVIATION_UPPER",e[e.AXF_RIGHT_FRONT_LATERAL_DEVIATION_UPPER=213]="AXF_RIGHT_FRONT_LATERAL_DEVIATION_UPPER",e[e.AXF_LEFT_FRONT_LATERAL_DEVIATION_LOWER=214]="AXF_LEFT_FRONT_LATERAL_DEVIATION_LOWER",e[e.AXF_RIGHT_FRONT_LATERAL_DEVIATION_LOWER=215]="AXF_RIGHT_FRONT_LATERAL_DEVIATION_LOWER",e[e.AXF_SEAT_PROMINENCE_UPPER=220]="AXF_SEAT_PROMINENCE_UPPER",e[e.AXF_SEAT_PROMINENCE_LOWER=221]="AXF_SEAT_PROMINENCE_LOWER",e[e.AXF_BACK_PROMINENCE_UPPER=230]="AXF_BACK_PROMINENCE_UPPER",e[e.AXF_BACK_PROMINENCE_LOWER=231]="AXF_BACK_PROMINENCE_LOWER",e[e.AXF_SIDE_BILATERAL_CROTCH=232]="AXF_SIDE_BILATERAL_CROTCH",e[e.AXF_SIDE_BILATERAL_WAIST=233]="AXF_SIDE_BILATERAL_WAIST",e[e.AXF_SIDE_BILATERAL_ARMPIT=234]="AXF_SIDE_BILATERAL_ARMPIT",e[e.AXF_FRONT_BILATERAL_CROTCH=235]="AXF_FRONT_BILATERAL_CROTCH",e[e.AXF_FRONT_BILATERAL_HIP=236]="AXF_FRONT_BILATERAL_HIP",e[e.AXF_FRONT_BILATERAL_WAIST=237]="AXF_FRONT_BILATERAL_WAIST",e[e.AXF_FRONT_BILATERAL_ARMPIT=238]="AXF_FRONT_BILATERAL_ARMPIT",e[e.AXF_FRONT_BILATERAL_MIDHIP=239]="AXF_FRONT_BILATERAL_MIDHIP",e[e.AXF_BVI=240]="AXF_BVI",e[e.AXF_TORSO_FRONT_CURVINESS=250]="AXF_TORSO_FRONT_CURVINESS",e[e.AXF_TORSO_REAR_CURVINESS=251]="AXF_TORSO_REAR_CURVINESS"})(lr||(lr={})),function(e){e[e.AXF_PD_MEASUREMENT=1]="AXF_PD_MEASUREMENT",e[e.AXF_PD_NAME=2]="AXF_PD_NAME",e[e.AXF_PD_ADDRESS=3]="AXF_PD_ADDRESS",e[e.AXF_PD_CHESTWALLPARAMETER=4]="AXF_PD_CHESTWALLPARAMETER"}(Fi||(Fi={}));class Cg{constructor(){this.pointReferences=[]}addPointReference(n){this.pointReferences.push(n)}build(){return{pointReferences:this.pointReferences}}}class bg{setA(n){this.a=n}setB(n){this.b=n}setC(n){this.c=n}setAng(n){this.ang=n}build(){return{a:this.a,b:this.b,c:this.c,ang:this.ang}}}function vi(e,n){const t=new bg,i=n.x-e.x,r=n.y-e.y,o=Math.sqrt(i*i+r*r);if(o>0)if(t.setA(-r/o),t.setB(i/o),t.setC((e.x*n.y-n.x*e.y)/o),i==0)r>=0?t.setAng(Math.PI/2):t.setAng(3*Math.PI/2);else if(r==0)i>=0?t.setAng(0):t.setAng(Math.PI);else{const s=Math.atan(r/i);s>=0?t.setAng(s):t.setAng(s+Math.PI)}return t.build()}function Ts(e,n,t){const i=Math.tan(e),r=Math.sqrt(1/(1+i*i)),o=-r*i;return{b:r,a:o,c:-o*n-r*t,ang:e}}function wg(e,n,t){if(e!=0&&n.pointLayer.points.length){const i=J.PARTITION_SIDE_CROTCH_CLUSTER_TOLERANCE,r=function(c){let d,u;const f={x:0,y:0,z:0};let h,m,E=-1;if(c.points.length){E=0,d=0,u=0;for(let _ of c.points)d+=_.x,u+=_.z;f.x=d/c.points.length,f.z=u/c.points.length,m=1e9,c.points.forEach((_,p)=>{h=(_.x-f.x)*(_.x-f.x)+(_.z-f.z)*(_.z-f.z),h<m&&(E=p,m=h)})}return E}(n.pointLayer),o=function(c,d,u){const f=Array(c.length).fill(!1),h=Array(c.length).fill(!1),m=Array(c.length).fill(Array(c.length).fill(!1));let E=1,_=(p=u)*p;var p;for(let g=0;g<c.length;g++){const T=c[g];for(let y=0;y<c.length;y++){const I=c[y];(T.x-I.x)*(T.x-I.x)+(T.z-I.z)*(T.z-I.z)<_&&(m[g][y]=!0)}}for(f[d]=!0;E!=0;){E=0;for(let g=0;g<c.length;g++)if(f[g]==1&&h[g]==0){h[g]=!0;for(let T=0;T<c.length;T++)m[g][T]==1&&f[T]==0&&(f[T]=!0,E++)}}const A=new Cg;for(let g=0;g<c.length;g++)f[g]==1&&A.addPointReference(g);return A.build()}(n.pointLayer.points,r,i),s=function(c,d){const u={x:0,y:0,z:0},f={x:0,y:0,z:0};for(let h=1;h<d.pointReferences.length;h++){const m=c.points[d.pointReferences[h]],E=c.points[d.pointReferences[u.x]],_=c.points[d.pointReferences[f.x]];m.x<E.x?u.x=h:m.x>_.x&&(f.x=h),m.z<E.z?u.z=h:m.z>_.z&&(f.z=h)}return Xc(f,u)}(n.pointLayer,o),a={x:n.pointLayer.points[o.pointReferences[s.min.x]].x-J.PARTITION_SIDE_CROTCH_GAP,y:t.crotchLandmark.y},l={x:n.pointLayer.points[o.pointReferences[s.max.x]].x+J.PARTITION_SIDE_CROTCH_GAP,y:t.crotchLandmark.y};return{armPartitionLineL:vi(t.leftArmpitLandmark,a),armPartitionLineR:vi(t.rightArmpitLandmark,l)}}return{armPartitionLineL:Ts(95*Math.PI/180,t.leftArmpitLandmark.x,t.leftArmpitLandmark.y),armPartitionLineR:Ts(95*Math.PI/180,t.rightArmpitLandmark.x,t.rightArmpitLandmark.y)}}function Pt(e,n){return(-e.c-e.b*n)/e.a}function nu(e,n,t){const i=n.crotchLandmark.z,r={x:n.leftArmpitLandmark.x,y:n.leftArmpitLandmark.y,z:i},o={x:n.rightArmpitLandmark.x,y:n.rightArmpitLandmark.y,z:i};return{z:i,leftArmpit:r,rightArmpit:o,farLeftArmpit:{x:e.minX,y:r.y,z:i},farRightArmpit:{x:e.maxX,y:o.y,z:i},leftCrotch:{x:Pt(t.armPartitionLineL,n.crotchLandmark.y),y:n.crotchLandmark.y,z:i},rightCrotch:{x:Pt(t.armPartitionLineR,n.crotchLandmark.y),y:n.crotchLandmark.y,z:i},crotchFloor:{x:n.crotchLandmark.x,y:e.minY,z:i},leftFloor:{x:Pt(t.armPartitionLineL,e.minY),y:e.minY,z:i},rightFloor:{x:Pt(t.armPartitionLineR,e.minY),y:e.minY,z:i}}}function tu(e,n){return!!e.landmarks.find(t=>t.id===n)}function iu(e){const n=[];return Array.from(Fs.entries()).filter(([t,i])=>i.partition).forEach(([t,i])=>{tu(e,Number(t))||n.push(i.name)}),n}function ru(e){return{crotchLandmark:re(e,U.CROTCH),leftArmpitLandmark:re(e,U.LEFT_ARMPIT),rightArmpitLandmark:re(e,U.RIGHT_ARMPIT)}}class Fg{setWholeBody(n){this.wholeBody=n}setLandmarks(n){this.landmarks=n}setCrotchLayer(n,t){this.crotchLayerId=n,this.crotchLayer=t}setMinMaxExtents(n){this.minMaxExtents=n}setPartitionLinesArm(n){this.partitionLinesArm=n}setPartitionPoints(n){this.partitionPoints=n}setFloorExtents(n){this.floorExtents=n}build(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({wholeBody:this.wholeBody},this.landmarks),{crotchLayerId:this.crotchLayerId,crotchLayer:this.crotchLayer}),this.minMaxExtents),this.partitionLinesArm),this.partitionPoints),this.floorExtents)}}function Dg(e,n){const t=new Fg,i=ze(e,Z.WHOLE_BODY);if(!i)throw"No whole body part";t.setWholeBody(i);const r=iu(e);if(r.length)throw`Missing partition landmarks -> ${r.join(", ")}`;const o=ru(e);t.setLandmarks(o);const s=Us(e,o.crotchLandmark.y),a=i.layers[s];if(t.setCrotchLayer(s,a),!n){if(o.leftArmpitLandmark.x>o.rightArmpitLandmark.x)throw"Armpits wrong way round";if(o.leftArmpitLandmark.y<o.crotchLandmark.y)throw"Left armpit below crotchLandmark";if(o.rightArmpitLandmark.y<o.crotchLandmark.y)throw"Right armpit below crotchLandmark"}const l={minY:Ng(e),minX:e.extent.min.x,maxX:e.extent.max.x};t.setMinMaxExtents(l);const c=wg(s,a,o);t.setPartitionLinesArm(c);const d=nu(l,o,c);t.setPartitionPoints(d);const u=function(f,h){return{leftFloorExtent:{start:{x:f.minX,y:f.minY,z:h.z},end:{x:h.leftArmpit.x,y:f.minY,z:h.z}},rightFloorExtent:{start:{x:h.rightArmpit.x,y:f.minY,z:h.z},end:{x:f.maxX,y:f.minY,z:h.z}}}}(l,d);return t.setFloorExtents(u),t.build()}function Ml(e,n,t){const i=re(e,n);i&&(i.y=t)}function Ct(e){return e.layers[e.layers.length-1]}function yl(e,n,t){let i=t==Te.RIGHT?Z.RIGHT_ARM:Z.LEFT_ARM;const r=new To(i),o=Us(e,Si(n.leftArmpitLandmark.y,n.rightArmpitLandmark.y));let s=t==Te.RIGHT?n.armPartitionLineR:n.armPartitionLineL,a=0;for(let u=Math.floor(n.crotchLayerId/2);u<=o;u++){const f=n.wholeBody.layers[u],h={x:Pt(s,f.y),y:f.y};if(t==Te.LEFT&&f.extent.min.x<h.x||t==Te.RIGHT&&f.extent.max.x>h.x){a=u;break}}const l=[];for(let u=a;u<=o;u++){const f=n.wholeBody.layers[u],h={x:Pt(s,f.y),y:f.y},m=[],E=[];for(let _=0;_<f.pointLayer.points.length;_++)(t==Te.LEFT&&f.pointLayer.points[_].x<=h.x||t==Te.RIGHT&&f.pointLayer.points[_].x>=h.x)&&(m.push({x:f.pointLayer.points[_].x,y:f.y,z:f.pointLayer.points[_].z}),E.push({x:f.pointLayer.colours[_].x,y:f.pointLayer.colours[_].y,z:f.pointLayer.colours[_].z}));l.push({y:f.y,pointLayer:{points:m,colours:E}})}r.setLayers(l),r.setLayerOffset(a);const c=r.build();Eo(c);const d=.6*Ct(c).extent.min.z+.4*Ct(c).extent.max.z;return function(u,f,h){const m=re(u,f);m&&(m.z=h)}(e,t==Te.LEFT?U.LEFT_ARMPIT:U.RIGHT_ARMPIT,d),c}class no{setY(n){return this.y=n,this}setPointLayer(n){return this.pointLayer=n,this}setSplineLayer(n){return this.splineLayer=n,this}setExtent(n){return this.extent=n,this}setCentroid(n){return this.centroid=n,this}build(){return{y:this.y,pointLayer:this.pointLayer,splineLayer:this.splineLayer,extent:this.extent,centroid:this.centroid}}}class Hs{setPoints(n){this.points=n}setColours(n){this.colours=n}build(){return{points:this.points,colours:this.colours}}}function Il(e,n,t){let i=t==Te.RIGHT?Z.RIGHT_LEG:Z.LEFT_LEG;const r=new To(i),o=[];if(n.crotchLandmark.y<=e.extent.min.y)throw"Crotch landmark bad";r.setLayerOffset(1);for(let a=0;a<=n.crotchLayerId;a++){const l=n.wholeBody.layers[a],c=new no;c.setY(l.y);const d={x:Pt(n.armPartitionLineL,l.y),y:l.y},u={x:Pt(n.armPartitionLineR,l.y),y:l.y},f=[],h=[];for(let m=0;m<l.pointLayer.points.length;m++){const E=l.pointLayer.points[m];(t==Te.LEFT&&E.x<=n.crotchLandmark.x&&E.x>d.x||t==Te.RIGHT&&E.x>=n.crotchLandmark.x&&E.x<u.x)&&(f.push({x:E.x,y:l.y,z:E.z}),e.colour&&h.push({x:l.pointLayer.colours[m].x,y:l.pointLayer.colours[m].y,z:l.pointLayer.colours[m].z}))}if(f.length>0){const m=new Hs;m.setPoints(f),e.colour&&m.setColours(h),c.setPointLayer(m.build()),o.push(c.build())}}r.setLayers(o);const s=r.build();return Eo(s),s}function Ug(e,n){const t=Si(n.leftArmpitLandmark.y,n.rightArmpitLandmark.y);Ml(e,U.LEFT_ARMPIT,t),Ml(e,U.RIGHT_ARMPIT,t);const i=new zc;i.setHeader({version:e.version,colour:e.colour,sex:e.sex,yResolutionMM:e.yResolutionMM,xZResolutionMM:e.xZResolutionMM,rawPointsDefined:!0,surfaceDefined:!1,normalisedPointsInLayer:e.normalisedPointsInLayer,normalisedLayersInRegion:e.normalisedLayersInRegion});let r=Il(e,n,Te.LEFT);if(!r)throw"Failed to extract left leg";if(i.addBodyParts(r),r=Il(e,n,Te.RIGHT),!r)throw"Failed to extract right leg";if(i.addBodyParts(r),r=function(o,s){const a=new To(Z.TORSO),l=Us(o,Si(s.leftArmpitLandmark.y,s.rightArmpitLandmark.y)),c=[];for(let u=s.crotchLayerId;u<l+1;u++){const f=s.wholeBody.layers[u],h=new no;h.setY(f.y);const m={x:Pt(s.armPartitionLineL,f.y),y:f.y},E={x:Pt(s.armPartitionLineR,f.y),y:f.y},_=[],p=[];for(let A=0;A<f.pointLayer.points.length;A++){const g=f.pointLayer.points[A],T=f.pointLayer.colours[A];g.x>=m.x&&g.x<=E.x&&(_.push({x:g.x,y:f.y,z:g.z}),p.push({x:T.x,y:T.y,z:T.z}))}h.setPointLayer({points:_,colours:p}),c.push(h.build())}for(let u=l;u<s.wholeBody.layers.length;u++){const f=s.wholeBody.layers[u],h=new no;h.setY(f.y);const m=[],E=[];for(let _=0;_<f.pointLayer.points.length;_++){const p=f.pointLayer.points[_],A=f.pointLayer.colours[_];m.push({x:p.x,y:f.y,z:p.z}),E.push({x:A.x,y:A.y,z:A.z})}h.setPointLayer({points:m,colours:E}),c.push(h.build())}a.setLayers(c),a.setLayerOffset(s.crotchLayerId);const d=a.build();return Eo(d),d}(e,n),!r)throw"Failed to extract torso";if(i.addBodyParts(r),r=yl(e,n,Te.LEFT),!r)throw"Failed to extract left arm";if(i.addBodyParts(r),r=yl(e,n,Te.RIGHT),!r)throw"Failed to extract right arm";return i.addBodyParts(r),i.setLandmarks(JSON.parse(JSON.stringify(e.landmarks))),i.build()}function Hg(e,n){const t=Ug(e,n);return hs(t),Zc(t),eu(t),t}function Ol(e,n){let t=e.start.x,i=e.end.x;return t>i&&(t=e.end.x,i=e.start.x),!(n<t||n>i)}function Gg(e,n,t){let i=!1;if(n==Te.LEFT){const a=e.leftFloor.x+t;Ol(e.leftFloorExtent,a)&&(e.leftFloor.x=a,i=!0)}else if(n==Te.RIGHT){const a=e.rightFloor.x+t;Ol(e.rightFloorExtent,a)&&(e.rightFloor.x=a,i=!0)}i&&(e.armPartitionLineL=vi(e.leftArmpitLandmark,e.leftFloor),e.armPartitionLineR=vi(e.rightArmpitLandmark,e.rightFloor)),Object.assign(e,nu(e,e,e))}class Bg{constructor(){this.sensors=[]}setBinaryHeader(n){this.binaryHeader=n}addSensor(n){this.sensors.push({sensorSize:n,points:new Float32Array(3*n)})}addPoint(n,t,i,r,o){const s=3*t;this.sensors[n].points[s]=i,this.sensors[n].points[s+1]=r,this.sensors[n].points[s+2]=o}build(){return Object.assign(Object.assign({},this.binaryHeader),{sensors:this.sensors})}}function Wg(e){const n=new Vc(e),t=new Bg,i={binaryVersion:n.readInt(),fullFlag:n.readInt(),colFlag:n.readInt(),processedFlag:n.readByte(),nSensors:n.readInt(),sensors:[]};t.setBinaryHeader(i);for(let r=0;r<i.nSensors;r++){const o=n.readInt();t.addSensor(o)}return t.sensors.forEach(function(r,o){for(let s=0;s<r.sensorSize;s++){const a=n.readFloat(),l=n.readFloat(),c=n.readFloat();t.addPoint(o,s,a,l,c)}}),t.build()}function ou(e,n){const t=e.length;if(t>0){let i=0;for(let r of e){const o=r.x-n.x,s=r.z-n.y;i+=Math.sqrt(o*o+s*s)}return i/t}return 0}function su(e,n){let t=null,i=J.BIG_POSITIVE_NUMBER_INT;return e.forEach(function(r,o){const s=r.x-n.x,a=r.z-n.y,l=Math.sqrt(s*s+a*a);l<i&&(i=l,t={candidate:r,i:o})}),t}function kg(e,n,t){return{x:e.x,y:t==Jt.ABOVE?e.y+n:e.y-n}}function Vg(e,n,t){return t==Jt.ABOVE&&n.y>e.y||t==Jt.BELOW&&n.y<e.y}function zg(e,n,t,i){const r=[];for(let o of e){const s={x:o.x,y:o.z};Vg(n,s,i)&&Math.abs(s.x-n.x)<t&&r.push(o)}return r}function Pl(e,n,t,i,r){const{points:o,colours:s}=e.pointLayer,{centroid:a}=e,{pStart:l,pEnd:c}=n===Jt.ABOVE?{pStart:a.right,pEnd:a.left}:{pStart:a.left,pEnd:a.right},d=(c.x-l.x)/t,u=Math.abs(d/2);let f={x:1e6,y:1e6};const h=[];for(let m=0;m<t;m++){const E={y:l.y,x:l.x+d/2+m*d},_=zg(o,E,u,n);if(_.length){const p=kg(E,ou(_,E),n);if(Tr(p,f)>i){const A=new Ds;if(A.setPoint({x:p.x,y:p.y}),r){const g=su(_,p);if(g){const T=s[g.i];A.setColour({x:T.x,y:T.y,z:T.z})}}h.push(A.build()),f=p}else console.log("Points too close in linear section")}}return h}function Xg(e){const n={x:0,y:0},t=e.length;if(t>0){let i=0,r=0;for(let o of e)i+=o.x,r+=o.z;n.x=i/t,n.y=r/t}return n}function Kg(e,n){let t;if(e.length<=0)return 0;t=-1e4;for(let i of e){const r=i.x-n.x,o=i.z-n.y,s=Math.sqrt(r*r+o*o);s>t&&(t=s)}return t}function Yg(e,n){let t;if(e.length<=0)return 0;t=1e7;for(let i of e){const r=i.x-n.x,o=i.z-n.y,s=Math.sqrt(r*r+o*o);s<t&&(t=s)}return t}function jg(e,n){const t=e.length,i={x:0,y:0},r={x:0,y:0};if(t>0){let o=0,s=0;for(let a of e)o+=a.x,s+=a.z;r.x=o/t,r.y=s/t}if(t>0){let o=r.x-n.x,s=r.y-n.y,a=o*o+s*s-.001,l=0,c=0,d=0;for(let u of e)o=u.x-n.x,s=u.z-n.y,o*o+s*s>=a&&(l+=u.x,c+=u.z,d+=1);i.x=l/d,i.y=c/d}return i}function qg(e,n,t){const i=t*Math.cos(n),r=t*Math.sin(n);return{x:e.x+i,y:e.y+r}}function $g(e,n,t,i){let r;const o=t-e,s=i-n;return r=o==0?s>=0?Math.PI/2:-Math.PI/2:Math.atan(s/o),o<0&&(r+=Math.PI),r<0&&(r=2*Math.PI+r),r}function Zg(e,n,t){const i=t.x-n.x,r=t.y-n.y;let o=!1;return(e>=0&&e<Math.PI/2&&i>0&&r>=0||e>=Math.PI/2&&e<Math.PI&&i<=0&&r>0||e>=Math.PI&&e<3*Math.PI/2&&i<0&&r<=0||e>=3*Math.PI/2&&e<2*Math.PI&&i>=0&&r<0)&&(o=!0),o}function Jg(e,n,t,i){const r=[];for(let o of e){const s={x:o.x,y:o.z};if(Zg(t,n,s)){const a=$g(n.x,n.y,s.x,s.y);Math.abs(t-a)<=i+J.SMALL_POSITIVE_NUMBER_DBL&&r.push(o)}}return r}function Gr(e,n,t,i,r,o){t==0&&console.log("no sampling level");const{points:s,colours:a}=e.pointLayer,{centroid:l}=e,c=Math.PI/(2*t),d=c/2,u=c/2+(n-1)*(Math.PI/2);let f={x:1e6,y:1e6};const h=[];for(let m=0;m<t;m++){const E=u+m*c;let _=l.left;n!=Yt.FRONT_LEFT&&n!=Yt.REAR_LEFT||(_=l.right);const p=Jg(s,_,E,d);if(p.length>0){let A=null;if(r==Kt.RADIAL_CENTROID)A=Xg(p);else if(r==Kt.RADIAL_OUTER_CENTROID)A=jg(p,_);else{let g=0;r==Kt.RADIAL_MIN?g=Yg(p,_):r==Kt.RADIAL_MEAN?g=ou(p,_):r==Kt.RADIAL_MAX&&(g=Kg(p,_)),A=qg(_,E,g)}if(Tr(A,f)>i){const g=new Ds;if(g.setPoint({x:A.x,y:A.y}),o){const T=su(p,A);if(T){const y=a[T.i];g.setColour({x:y.x,y:y.y,z:y.z})}}h.push(g.build()),f=A}else console.log("points too close in radial section")}}return h}function gs(e,n,t,i,r,o,s){if(n==0&&t==0)return void console.error(`${e.y}, There are no 'points per radial quart' or 'points per linear section' set`);let a=o?2:1;const l=Kt.RADIAL_CENTROID,c=[];for(let d=0;d<a;d++)n>0&&c.push(...Gr(e,Yt.FRONT_LEFT,n,i,l,s)),t>0&&c.push(...Pl(e,Jt.ABOVE,t,i,s)),n>0&&c.push(...Gr(e,Yt.FRONT_RIGHT,n,i,l,s)),n>0&&c.push(...Gr(e,Yt.REAR_RIGHT,n,i,l,s)),t>0&&c.push(...Pl(e,Jt.BELOW,t,i,s)),n>0&&c.push(...Gr(e,Yt.REAR_LEFT,n,i,l,s));if(r==Rr.CLOSED&&c.length>1){const d=c[0],u={point:{x:d.point.x,y:d.point.y},colour:s?{x:d.colour.x,y:d.colour.y,z:d.colour.z}:void 0};c.push(u)}return c}function Qg(e,n,t,i,r,o,s,a){if(!e.pointLayer||e.pointLayer.points.length<=2)return void console.error(`${e.y} Not enough points in point layer`);if(!t)return console.error(`${e.y} Convert point layer to spline layer: centroid is null`),null;e.centroid=JSON.parse(JSON.stringify(t));const l=new qi;let c,d=gs(e,i,r,5,o,s,a);if(d.length<=2)return console.error(`${e.y} Didn't generate enough points on spline`),null;if(l.setNodes(d),l.generateSpline(),s){const u=(d.length-1)/4+1,f=3*(d.length-1)/4;c=l.build(),e.pointLayer=function(h,m,E,_){const p=h.surface;p.samplePoints=xr(p.nodes,p.parametricNodes,p.parametricCoefficients,m,E,_,!1);const A=[];for(let T of p.samplePoints)A.push({x:T.point.x,z:T.point.y});const g=new Hs;return g.setPoints(A),g.build()}({surface:c},200,u,f),d=gs(e,i,r,5,o,!1,a),l.setNodes(d),l.generateSpline()}return l.regeneratePointsOnSpline(),l.splineLength(),c=l.build(),c?{surface:c}:(console.error(`${e.y} Generating spline surface layer failed`),null)}(function(e){e[e.OPEN=1]="OPEN",e[e.CLOSED=2]="CLOSED",e[e.OPEN_TOP=3]="OPEN_TOP",e[e.OPEN_BOTTOM=4]="OPEN_BOTTOM"})(Rr||(Rr={})),function(e){e[e.ABOVE=1]="ABOVE",e[e.BELOW=2]="BELOW"}(Jt||(Jt={})),function(e){e[e.RADIAL_CENTROID=0]="RADIAL_CENTROID",e[e.RADIAL_OUTER_CENTROID=1]="RADIAL_OUTER_CENTROID",e[e.RADIAL_MIN=2]="RADIAL_MIN",e[e.RADIAL_MEAN=3]="RADIAL_MEAN",e[e.RADIAL_MAX=4]="RADIAL_MAX"}(Kt||(Kt={})),function(e){e[e.FRONT_LEFT=1]="FRONT_LEFT",e[e.FRONT_RIGHT=2]="FRONT_RIGHT",e[e.REAR_RIGHT=3]="REAR_RIGHT",e[e.REAR_LEFT=4]="REAR_LEFT"}(Yt||(Yt={}));var Ei=pi(821);const eR={bodyparts:{layers:{pointLayer:!0,splineLayer:{surface:!0,tape:!0}},frontSilhouette:!0,sideSilhouette:!0,splineRegions:{mesh:!0}},centroids:!0,landmarks:!0,chestWallDefinition:!0};function On(e,n){let t=null,i=32e3;for(const r of e.layers){const o=Math.abs(r.y-n);o<i&&(i=o,t=r)}return t}function Nl(e,n,t){return e+t*(n-e)}function Cl(e,n){const t=new ki(0);t.setFrontSideRearType(en.FRONT);const i=ze(e,Z.TORSO),r=re(e,U.LEFT_ARMPIT),o=re(e,U.RIGHT_ARMPIT);if(r==null||o==null)return console.error("Required landmark not available"),null;const s=Si(r.y,o.y),a=Ct(i).y,l=Nl(s,a,.2),c=Nl(s,a,.8);t.setMinY(l),t.setMaxY(c),t.setMinLayer(On(i,l)),t.setMaxLayer(On(i,c));const d=n==Te.LEFT?fn.AXF_TORSO_FRONT_LEFT_UPPER:fn.AXF_TORSO_FRONT_RIGHT_UPPER;return t.setCubicSplineFromSegment(i,d,100),t.build()}class au{constructor(n,t){this.id=n,this.landmarkType=t}setPoint(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}build(){return{id:this.id,landmarkType:this.landmarkType,x:this.x,y:this.y,z:this.z}}}function lu(e,n){e.landmarks=e.landmarks.filter(t=>t.id!=n.id),e.landmarks.push(n)}var Qt,Yn;function bl(e,n){return Math.abs(e.a*n.x+e.b*n.y+e.c)}function to(e,n,t,i){const r=function(d){switch(d){case Yn.LEFT:return{x:-1e4,y:0};case Yn.LEFT_LOW:return{x:-1e4,y:-1e4};case Yn.LEFT_HIGH:return{x:-1e4,y:1e4};case Yn.MID:return{x:0,y:0};case Yn.MID_LOW:return{x:0,y:-1e4};case Yn.MID_HIGH:return{x:0,y:1e4};case Yn.RIGHT:return{x:1e4,y:0};case Yn.RIGHT_LOW:return{x:1e4,y:-1e4};case Yn.RIGHT_HIGH:return{x:1e4,y:1e4}}}(t),o=Ts(Math.PI*n/180,r.x,r.y),s=e.samplePoints.length;let a=bl(o,e.samplePoints[0].point),l=e.samplePoints[0].point,c=0;for(let d=1;d<s-1;d++){const u=e.samplePoints[d].point,f=bl(o,u);(f>a&&i==Qt.FAR||f<a&&i==Qt.NEAR)&&(c=d,a=f,l=u)}return c>0&&c<s-1||console.error("could not find proximity"),l}function cu(e,n,t,i,r,o){const s=Wi(e,n,t);if(!s)return console.error(`No silhouette segment found: ${Es(n)}`),null;const a=s.cubicSpline,l=eo(a,i.y),c=eo(a,r.y);return c>=0&&l>0&&c<a.nodes.length-1?(a.nodes=xr(a.nodes,a.parametricNodes,a.parametricCoefficients,o,c,l,!1),a):(console.error(`Control indexes out of range: min control index: ${c}, max control index: ${l}`),null)}function wl(e){const n=ze(e,Z.TORSO),i=re(e,U.ARMPIT_INTERNAL)||function(u){const f=ze(u,Z.TORSO);let h=re(u,U.LEFT_ARMPIT),m=re(u,U.RIGHT_ARMPIT);if(!h||!m)return;let E=Bi(f,Si(h.y,m.y));const _=f.layers[E].y;return(f.layers[E-1].y=_)&&(E-=1),{x:f.layers[E].extent.mid.x,y:_,z:f.layers[E].extent.mid.z}}(e),r=Ct(n).y,o=Math.round(i.y+.05*(r-i.y)),s=Math.round(i.y+.45*(r-i.y)),a=On(n,o),l=On(n,s),c=to(cu(n,fn.AXF_TORSO_SIDE_FRONT,en.SIDE,a,l,100),91,Yn.RIGHT,Qt.FAR),d=On(n,c.y);return{z:Math.round(c.x),y:Math.round(c.y),x:d.extent.mid.x}}function Fl(e,n){const t=n==Te.LEFT?ze(e,Z.LEFT_LEG):ze(e,Z.RIGHT_LEG),i=4/42,r=On(t,Math.round(Nt(t).y+i*(Ct(t).y-Nt(t).y)));return{x:r.extent.mid.x,z:r.extent.mid.z,y:r.y}}function Dl(e){const n=Ct(ze(e,Z.TORSO));return{x:n.extent.mid.x,z:n.extent.mid.z,y:n.y}}function Ul(e,n){const t=Nt(n==Te.LEFT?ze(e,Z.LEFT_LEG):ze(e,Z.RIGHT_LEG));return{x:t.extent.mid.x,z:t.extent.mid.z,y:t.y}}function Hl(e,n){const t=Nt(n==Te.LEFT?ze(e,Z.LEFT_ARM):ze(e,Z.RIGHT_ARM));return{x:t.extent.mid.x,z:t.extent.mid.z,y:t.y}}function Gl(e,n){const t=n==Te.LEFT?ze(e,Z.LEFT_LEG):ze(e,Z.RIGHT_LEG),i=26/42,r=Nt(t).y,o=Ct(t).y,s=On(t,Math.round(r+i*(o-r)));return{x:s.extent.mid.x,y:s.y,z:s.extent.mid.z}}(function(e){e[e.NEAR=1]="NEAR",e[e.FAR=2]="FAR"})(Qt||(Qt={})),function(e){e[e.LEFT=1]="LEFT",e[e.LEFT_HIGH=2]="LEFT_HIGH",e[e.LEFT_LOW=3]="LEFT_LOW",e[e.RIGHT=4]="RIGHT",e[e.RIGHT_HIGH=5]="RIGHT_HIGH",e[e.RIGHT_LOW=6]="RIGHT_LOW",e[e.MID=7]="MID",e[e.MID_HIGH=8]="MID_HIGH",e[e.MID_LOW=9]="MID_LOW"}(Yn||(Yn={}));class nR{constructor(){this.min={x:32700,y:32700},this.max={x:-32700,y:-32700}}setMin(n){this.min=n}setMax(n){this.max=n}compare(...n){n.forEach(t=>{(function(i,r){r.x>i.max.x&&(i.max.x=r.x),r.x<i.min.x&&(i.min.x=r.x),r.y>i.max.y&&(i.max.y=r.y),r.y<i.min.y&&(i.min.y=r.y)})(this,t)})}build(){return jc(this),{min:this.min,mid:this.mid,max:this.max}}}function tR(e,n,t){const r=vi(n,t),o=e.b==0?1e11:-e.a/e.b,s=e.b==0?1e11:-e.c/e.b,a=r.b==0?1e11:-r.a/r.b,l=r.b==0?1e11:-r.c/r.b;if(o===a)return!1;const c=(l-s)/(o-a),d=o*c+s,u=new nR;u.compare(n,t);const f=u.build();return(m={x:c,y:d}).x>(h=f).min.x&&m.x<h.max.x&&m.y>h.min.y&&m.y<h.max.y;var h,m}function iR(e,n){let t=-1,i=!1,r=n-1;for(;r>=0&&!i;)e[r]&&(i=!0,t=r),r--;return t}function Bl(e,n){e.surface.nodes.length<1&&console.error("Not enough nodes to measure");const t=function(i){const r=i.nodes,o=r.length,s=new qi,a=Array(o).fill(!0);if(o<4)return console.error("Need to be at least 4 points"),null;for(let p=0;p<o-2;p++){const A=vi(r[p].point,r[p+1].point);let g=!0,T=0;for(;g&&T<=o-2;){if((T<p-1&&p%(o-2)!==T||T>p+1&&T%(o-2)!==p)&&tR(A,r[T].point,r[T+1].point)){const y=vi(r[T].point,r[T+1].point);Math.abs(y.a*r[p].point.x+y.b*r[p].point.y+y.c)<Math.abs(y.a*r[p+1].point.x+y.b*r[p+1].point.y+y.c)?a[p]=!1:a[p+1]=!1,g=!1}T+=1}}const l=JSON.parse(JSON.stringify(r));for(;a[0]===!1||a[1]===!1;){for(let p=0;p<o-2;p++)l[p]=l[p+1],a[p]=a[p+1];l[o-1]=l[0],a[o-1]=a[0]}let c,d,u,f,h,m;for(let p=0;p<o-2;p++)if(a[p-1]===!1&&a[p]===!0&&a[p+1]===!1){for(c=p+1,c>=o-1&&(c=0),d=!1;d===!1;)(a[c]=!0)?(u=c,d=!0):(c+=1,c===o&&(c=0));const A={x:l[p].point.x-l[f].point.x,y:l[p].point.y-l[f].point.y},g={x:l[u].point.x-l[f].point.x,y:l[u].point.y-l[f].point.y};(A.y=0)?h.y=1e12:(A.y=0)&&(h.y=-1e12),(g.y=0)?m.y=2e12:(g.y=0)&&(m.y=-2e12),A.y<0&&g.y<0||A.y>0&&g.y>0?A.x/A.y<g.x/g.y&&(a[p]=!1):g.x>0?A.y>0&&g.y<0&&(a[p]=!1):g.x<=0?A.y<0&&g.y>0&&(a[p]=!1):f=p}else a[p]===!0&&(f=p);let E,_=!0;for(let p=0;p<o-1;p++)if(a[p])if(_===!0)s.addNode(l[p]);else{_=!0;const A=l[p];s.addNode({point:{x:E.point.x+.33*(A.point.x-E.point.x),y:E.point.y+.33*(A.point.y-E.point.y)}}),s.addNode({point:{x:E.point.x+.66*(A.point.x-E.point.x),y:E.point.y+.66*(A.point.y-E.point.y)}}),s.addNode(A)}else _===!0&&(_=!1,E=p>0?l[p-1]:l[iR(a,Math.round(o))]);return _===!1&&s.closeLoop(),s}(e.surface);return t.generateSpline(),t.regeneratePointsOnSpline(n,0,t.nodes.length-1),t.splineLength(),e.tape=t.build(),e.tape.surfaceMeasure}function Wl(e,n){const t=n==Te.LEFT?ze(e,Z.LEFT_LEG):ze(e,Z.RIGHT_LEG),i=Math.round(.08*t.layers.length),r=Math.round(.23*t.layers.length);let o=i;const s=t.layers[i];if(e.surfaceDefined){Bl(s.splineLayer,100);let l=s.splineLayer.tape.surfaceMeasure;for(let c=i+1;c==r;c++){const d=t.layers[c];Bl(d.splineLayer,100);const u=d.splineLayer.tape.surfaceMeasure;u<l&&(o=c,l=u)}}else{let l=s.extent.difference.x*s.extent.difference.z;for(let c=i+1;c==r;c++){const d=t.layers[c],u=d.extent.difference.x*d.extent.difference.z;u<l&&(o=c,l=u)}}const a=t.layers[o];return{y:a.y,x:a.extent.mid.x,z:a.extent.mid.z}}function kl(e,n){const t=Ct(n==Te.LEFT?ze(e,Z.LEFT_ARM):ze(e,Z.RIGHT_ARM));return{x:t.extent.mid.x,z:t.extent.mid.z,y:t.y}}function Vl(e,n){const t=Ct(n==Te.LEFT?ze(e,Z.LEFT_LEG):ze(e,Z.RIGHT_LEG));return{x:t.extent.mid.x,z:t.extent.mid.z,y:t.y}}function zl(e,n){let t,i;n==Te.LEFT?(t=ze(e,Z.LEFT_ARM),i=Nn(e,U.LEFT_WRIST_LEVEL)):(t=ze(e,Z.RIGHT_ARM),i=Nn(e,U.RIGHT_WRIST_LEVEL));const r=On(t,i.y);return{y:r.y,x:r.extent.mid.x,z:r.extent.mid.z}}function At(e,n){let t=0;const i=Yr(e,0,e.nodes.length-1);if(i>0){const r=n*i/100;let o=0,s=Yr(e,0,o),a=100*s/i,l=Math.abs(a-n);for(;s<r&&o<e.nodes.length-1;)o+=1,s=Yr(e,0,o),a=100*s/i,Math.abs(a-n)<l&&(l=Math.abs(a-n),t=o)}return e.nodes[t]}function Br(e,n){const t=n.x-e.x,i=n.y-e.y;let r=0;return r=t==0?90:180*Math.atan(i/t)/Math.PI,r<0&&(r+=180),r}function Xl(e,n,t){const i=ze(e,n==Te.LEFT?Z.LEFT_ARM:Z.RIGHT_ARM),r=function(a,l){const c=new ki(0);c.setFrontSideRearType(en.FRONT);const d=ze(a,l==Te.LEFT?Z.LEFT_ARM:Z.RIGHT_ARM),u=Wi(d,fn.AXF_ARM_FRONT_INNER,en.FRONT).cubicSpline,f=At(u,90).point,h=At(u,65).point;return c.setMinLayer(On(d,f.y)),c.setMaxLayer(On(d,h.y)),c.setCubicSplineFromSegment(d,fn.AXF_ARM_FRONT_INNER,100),c.build()}(e,n);if(!r)return console.error("Inner wrist: Spline segment not found"),null;const o=n==Te.LEFT?to(r.cubicSpline,t,Yn.RIGHT,Qt.FAR):to(r.cubicSpline,t,Yn.LEFT,Qt.FAR),s=On(i,o.y);return{x:Math.round(o.x),y:Math.round(o.y),z:s.extent.mid.z}}function Kl(e,n){const t=n==Te.LEFT?U.LEFT_WRIST_INNER:U.RIGHT_WRIST_INNER;let i=re(e,t);i==null&&console.error("Wrist level: wrist landmark not defined");const r=function(l,c){const d=c==Te.LEFT?ze(l,Z.LEFT_ARM):ze(l,Z.RIGHT_ARM),u=Wi(d,fn.AXF_ARM_FRONT_INNER,en.FRONT).cubicSpline,f=Wi(d,fn.AXF_ARM_FRONT_OUTER,en.FRONT).cubicSpline;let h=At(u,5).point,m=At(u,30).point,E=Br(h,m);h=At(f,5).point,m=At(f,30).point;let _=Br(h,m);const p=gr(E,_);return h=At(u,50).point,m=At(u,80).point,E=Br(h,m),h=At(f,50).point,m=At(f,80).point,_=Br(h,m),[gr(E,_),p]}(e,n),o=r[0];let s=n==Te.LEFT?Xl(e,n,Math.round(o+20)):Xl(e,n,Math.round(o-20));s==null&&(s=function(l,c){const d=c==Te.LEFT?ze(l,Z.LEFT_ARM):ze(l,Z.RIGHT_ARM),u=At(Wi(d,fn.AXF_ARM_FRONT_INNER,en.FRONT).cubicSpline,75).point,f=On(d,Math.round(u.y));return{x:c==Te.LEFT?f.extent.max.x:f.extent.min.x,y:f.y,z:f.extent.mid.z}}(e,n));const a=new au(t,Hi(t));return a.setPoint(s),lu(e,a.build()),i}function Nn(e,n,t){let i,r;{const a=re(e,n);if(a)return a}switch(n){case U.TOP_HEAD:r=Dl(e);break;case U.NECK_INTERNAL:break;case U.CHIN:r=function(a){const l=ze(a,Z.TORSO);let c=re(a,U.FRONT_NECK),d=c||wl(a);if(!d)return Dl(a);const u=Ct(l),f=Math.round(d.y+.05*(u.y-d.y)),h=Math.round(d.y+.4*(u.y-d.y)),m=On(l,f),E=On(l,h),_=cu(l,fn.AXF_TORSO_SIDE_FRONT,en.SIDE,m,E,100);if(!_)return console.error("No spline"),null;const p=to(_,45,Yn.RIGHT,Qt.NEAR);if(p)return console.error("No refpos"),null;const A=function(g,T,y){const I=g.points.length;let O=!1,b=0;for(;!O&&b<I;)g.points[b].z>T-y&&g.points[b].z<T+y?O=!0:b++;if(!O)return null;let L=g.points[b].x,v=g.points[b].x;for(let P=b+1;P<I-1;P++){const k=g.points[P];k.z>T-y&&k.z<T+y&&(k.x>v?v=k.x:k.x<L&&(L=k.x))}return{min:{x:L,y:0,z:0},max:{x:v,y:0,z:0}}}(On(l,d.y).pointLayer,d.z,200);return{y:Math.round(p.y),z:Math.round(p.x),x:A.mid.x}}(e);break;case U.FRONT_NECK:r=wl(e);break;case U.LEFT_SIDE_NECK:i=Cl(e,Te.LEFT);break;case U.RIGHT_SIDE_NECK:i=Cl(e,Te.RIGHT);break;case U.LEFT_SHOULDER:case U.RIGHT_SHOULDER:case U.SHOULDER_INTERNAL:case U.LEFT_ARMPIT:case U.RIGHT_ARMPIT:case U.CHEST_INTERNAL:case U.CHEST_LEVEL:case U.LOW_CHEST_INTERNAL:case U.LOW_CHEST_LEVEL:case U.WAIST_LEVEL:case U.WAIST_INTERNAL:case U.FRONT_WAIST:case U.REAR_WAIST:case U.HIP_INTERNAL:break;case U.SEAT_PROMINENCE:i=function(a){const l=new ki(0);l.setFrontSideRearType(en.SIDE);const c=ze(a,Z.TORSO),d=Nn(a,U.ARMPIT_INTERNAL);if(d==null)return console.error("Required landmark not available"),null;const u=Nt(c).y,f=u+.05*(d.y-u),h=u+.35*(d.y-u);return l.setMinY(f),l.setMaxY(h),l.setMinLayer(On(c,f)),l.setMaxLayer(On(c,h)),l.setCubicSplineFromSegment(c,fn.AXF_TORSO_SIDE_REAR,100),l.build()}(e);break;case U.BACK_PROMINENCE:i=function(a){const l=new ki(0);l.setFrontSideRearType(en.SIDE);const c=ze(a,Z.TORSO),d=Nn(a,U.NECK_INTERNAL),u=Nn(a,U.WAIST_LEVEL);return d==null||u==null?(console.error("Required landmark not available"),null):(l.setMinLayer(On(c,u.y)),l.setMaxLayer(On(c,d.y)),l.setCubicSplineFromSegment(c,fn.AXF_TORSO_SIDE_REAR,100),l.build())}(e);break;case U.ABDOMEN_PROMINENCE:i=function(a){const l=new ki(fn.NONE);l.setFrontSideRearType(en.SIDE);const c=ze(a,Z.TORSO),d=Nn(a,U.LOW_CHEST_LEVEL),u=Nn(a,U.CROTCH);return d==null||u==null?(console.error("Required landmark not available"),null):(l.setMinLayer(On(c,u.y)),l.setMaxLayer(On(c,d.y)),l.setCubicSplineFromSegment(c,fn.AXF_TORSO_SIDE_FRONT,100),l.build())}(e);break;case U.LEFT_SIDE_WAIST_BILATERAL:case U.RIGHT_SIDE_WAIST_BILATERAL:case U.CROTCH:case U.ARMPIT_INTERNAL:break;case U.LEFT_TOP_ARM_INTERNAL:r=kl(e,Te.LEFT);break;case U.RIGHT_TOP_ARM_INTERNAL:r=kl(e,Te.RIGHT);break;case U.LEFT_ELBOW_INTERNAL:case U.RIGHT_ELBOW_INTERNAL:break;case U.LEFT_WRIST_INTERNAL:r=zl(e,Te.LEFT);break;case U.RIGHT_WRIST_INTERNAL:r=zl(e,Te.RIGHT);break;case U.LEFT_WRIST_LEVEL:r=Kl(e,Te.LEFT);break;case U.RIGHT_WRIST_LEVEL:r=Kl(e,Te.RIGHT);break;case U.LEFT_HAND:r=Hl(e,Te.LEFT);break;case U.RIGHT_HAND:r=Hl(e,Te.RIGHT);break;case U.LEFT_TOP_THIGH_INTERNAL:r=Vl(e,Te.LEFT);break;case U.RIGHT_TOP_THIGH_INTERNAL:r=Vl(e,Te.RIGHT);break;case U.LEFT_KNEE_INTERNAL:r=Gl(e,Te.LEFT);break;case U.RIGHT_KNEE_INTERNAL:r=Gl(e,Te.RIGHT);break;case U.LEFT_ANKLE_INTERNAL:r=Fl(e,Te.LEFT);break;case U.RIGHT_ANKLE_INTERNAL:r=Fl(e,Te.RIGHT);break;case U.LEFT_MINIMUM_LEG_INTERNAL:r=Wl(e,Te.LEFT);break;case U.RIGHT_MINIMUM_LEG_INTERNAL:r=Wl(e,Te.RIGHT);break;case U.LEFT_FLOOR:r=Ul(e,Te.LEFT);break;case U.RIGHT_FLOOR:r=Ul(e,Te.RIGHT)}if(i)throw new Error(`Landmark: ${n} ${Hi(n)} failed auto detection - There was a silhouette`);if(!r)throw new Error(`Landmark: ${n} ${Hi(n)} does not support auto detection`);const o=new au(n,Hi(n));o.setPoint(r);const s=o.build();return lu(e,s),s}const Gs=1e4,uu=[1,0,0,1],rR=[0,1,0,1],du=[0,0,1,1];function io(e,n,t){const i=new Ei.NE(n.length,Gs,t);i.addVertices(n),i.buildGltf(e)}function Ti(e,n,t){const i=new Ei.dT(n.length,n.length,Gs,Ei.Vv.LINE_STRIP,t);n.forEach(r=>{const o=i.addVertex(r);i.addIndex(o)}),i.buildGltf(e)}function Yl(e,n,t,i){return Ti(e,n.nodes.map(r=>({x:r.point.x,y:t,z:r.point.y})),i)}function jl(e,n,t,i){n.forEach(r=>{const o=r.cubicSpline.nodes.map(s=>t===en.FRONT?{x:s.point.x,y:s.point.y,z:0}:t===en.SIDE?{x:0,y:s.point.y,z:s.point.x}:void 0);Ti(e,o,i)})}function oR(e,n){const t=function(i){return{leftspline:[Nn(i,U.CWALL_L_HIGH_CHEST),Nn(i,U.CWALL_L_ARMPIT),Nn(i,U.CWALL_L_LOW_CHEST),Nn(i,U.CWALL_L_WAIST)],midspline:[Nn(i,U.CWALL_MID_HIGH_CHEST),Nn(i,U.CWALL_MID_ARMPIT),Nn(i,U.CWALL_MID_CHEST),Nn(i,U.CWALL_MID_LOW_CHEST),Nn(i,U.CWALL_MID_WAIST)],rightspline:[Nn(i,U.CWALL_R_HIGH_CHEST),Nn(i,U.CWALL_R_ARMPIT),Nn(i,U.CWALL_R_LOW_CHEST),Nn(i,U.CWALL_R_WAIST)]}}(n);(function(i,r){const o=["left_bust","mid_bust","right_bust"],s=["highchest","armpit","bust","underbust","waist"];["leftspline","midspline","rightspline"].forEach((a,l)=>{s.filter(c=>!((l===0||l===2)&&c==="bust")).forEach((c,d)=>{const u=i[a][d];u.x+=r[`${o[l]}_x_bias`],u.y+=r[`y_${a}_adjust_${c}`],u.z+=r[`z_${a}_adjust_${c}`]})})})(t,n.chestWallDefinition),Ti(e,t.leftspline,uu),Ti(e,t.midspline,rR),Ti(e,t.rightspline,du)}function sR(e,n,{bodyparts:{layers:{pointLayer:t,splineLayer:{surface:i,tape:r}},frontSilhouette:o,sideSilhouette:s,splineRegions:{mesh:a}},centroids:l,landmarks:c,chestWallDefinition:d}=eR){n.bodyParts.forEach(u=>{const f=(0,Ei.rl)();u.layers.forEach(h=>{t&&h.pointLayer&&io(e,h.pointLayer.points,f),h.splineLayer&&(i&&h.splineLayer.surface&&Yl(e,h.splineLayer.surface,h.y,f),r&&h.splineLayer.tape&&Yl(e,h.splineLayer.tape,h.y,f))}),l&&function(h,m){const E=m.filter(p=>{var A;return(A=p.centroid)===null||A===void 0?void 0:A.left}).map(p=>({x:p.centroid.left.x,y:p.y,z:p.centroid.left.y})),_=m.filter(p=>{var A;return(A=p.centroid)===null||A===void 0?void 0:A.right}).map(p=>({x:p.centroid.right.x,y:p.y,z:p.centroid.right.y}));Ti(h,E,uu),Ti(h,_,du)}(e,u.layers),o&&u.frontSilhouette&&jl(e,u.frontSilhouette,en.FRONT,f),s&&u.sideSilhouette&&jl(e,u.sideSilhouette,en.SIDE,f),u.splineRegions&&u.splineRegions.forEach(h=>{a&&function(m,E,_){if(!E.DONE_NORMALS)return;const p=new Ei.T3(E.vertices.length,3*E.polygons.length,E.normals.length,Gs,Ei.xO.TRIANGLES,_);E.vertices.forEach(A=>p.addVertex(A)),E.normals.forEach(A=>p.addNormal(A)),E.polygons.flatMap(A=>A.pointReference).forEach(A=>p.addIndex(A)),p.buildGltf(m)}(e,h,f)})}),c&&n.landmarks&&function(u,f,h){io(u,f.map(m=>({x:m.x,y:m.y,z:m.z})),h)}(e,n.landmarks),d&&n.chestWallDefinition&&oR(e,n)}function aR(e,n,t,i,r){const o=e.splineLayer.surface,s=xr(o.nodes,o.parametricNodes,o.parametricCoefficients,500,0,o.nodes.length-1,r),a=[],l=[];for(let E of s){const _={x:Math.round(E.point.x),z:Math.round(E.point.y)};if(a.push(_),r){const p={x:E.colour.x,y:E.colour.y,z:E.colour.z};l.push(p)}}const c=new Hs;c.setPoints(a),r&&c.setColours(l);const d=new no;d.setPointLayer(c.build()),d.setCentroid(JSON.parse(JSON.stringify(e.centroid)));const u=4*t+2*i+1,f=new qi,h=gs(d.build(),t,i,1e-4,Rr.CLOSED,!1,r);if(f.setNodes(h),u!==h.length){console.error(`${e.y} number of nodes was not equal, expected: ${u}, actual: ${h.length}`);const E=new Ei.Zh;io(E,h.map(_=>({x:_.point.x,y:e.y,z:_.point.y})),[1,0,0,1]),io(E,s.map(_=>({x:_.point.x,y:e.y,z:_.point.y})),[0,1,0,1]),console.log(JSON.stringify(E.build()))}f.generateSpline(),d.setSplineLayer({surface:f.build()});const m=d.build();e.splineLayer=JSON.parse(JSON.stringify(m.splineLayer)),e.centroid=JSON.parse(JSON.stringify(m.centroid))}function lR(e,n){const t=e.endLayer-e.startLayer;if(t<=0)throw`${e.id} Get Layer Centroid: no layers`;const i=(n-e.startLayer)/t,r={left:{x:0,y:0},right:{x:0,y:0}};return r.left.x=e.start.left.x+i*(e.end.left.x-e.start.left.x),r.left.y=e.start.left.y+i*(e.end.left.y-e.start.left.y),r.right.x=e.start.right.x+i*(e.end.right.x-e.start.right.x),r.right.y=e.start.right.y+i*(e.end.right.y-e.start.right.y),r}function Wr(e,n,t,i,r,o){for(let s=e.startLayer;s<=e.endLayer;s++){const a=n[s],l=lR(e,s);a.odd=s%2!=0;const c=Qg(a,0,l,e.noRadial,e.noLinear,Rr.CLOSED,r,o);c?(a.splineLayer=c,aR(a,0,e.noRadial,e.noLinear,o)):console.error("creating spline layer from point layer failed")}}function cR(e,n,t,i){for(let r of e.splineRegions)try{e.id==Z.TORSO?r.id!=j.AXF_HIP_TO_CROTCH&&r.id!=j.AXF_WAIST_TO_HIP&&r.id!=j.AXF_ARMPIT_TO_WAIST&&r.id!=j.AXF_NECK_TO_ARMPIT&&r.id!=j.AXF_TOP_TO_NECK||Wr(r,e.layers,0,0,!1,i):e.id==Z.CHEST_WALL?r.id==j.AXF_ARMPIT_TO_WAIST&&Wr(r,e.layers,0,0,!0,!1):e.id==Z.LEFT_LEG||e.id==Z.RIGHT_LEG?r.id!=j.AXF_THIGH_TO_KNEE&&r.id!=j.AXF_KNEE_TO_ANKLE&&r.id!=j.AXF_ANKLE_TO_FLOOR||Wr(r,e.layers,0,0,!1,i):e.id!=Z.LEFT_ARM&&e.id!=Z.RIGHT_ARM||r.id!=j.AXF_TOPARM_TO_ELBOW&&r.id!=j.AXF_ELBOW_TO_HAND||Wr(r,e.layers,0,0,!1,i)}catch(o){console.error(o)}}function uR(e,n,t){e.version=J.AXF_VERSION;const i=iu(e);if(i.length)throw new Error("fit Splines: missing partition landmarks -> "+i.join(", "));const r=function(o){return Array.from(Fs.entries()).filter(([s,a])=>a.spline&&!tu(o,Number(s))).map(([s,a])=>a.name)}(e);if(r.length)throw new Error("fit Splines: missing spline landmarks -> "+r.join(", "));Jc(e,!n),e.xZResolutionMM;for(let o of e.bodyParts)cR(o,0,e.normaliseResolution,e.colour);e.rawPointsDefined=!1,e.normalisedPointsInLayer=!0}Zn.wx;var Yo=Zn.L7;Zn.eF;Zn.Ep;Zn.uT;var fu=Zn.lw;Zn.GO;Zn.S5;var pu=Zn.xM;Zn.lo;Zn.jB;var Mr=Zn.yZ;Zn.qu;Zn.hC;function nt(){return Math.random()*16777215}const Bs=new Ps(.003,10,10),an=1/1e4,dR=[{type:"converted",folderName:"1 Converted",displays:["points"]},{type:"headRemoved",folderName:"2 Head removed",displays:["points"]},{type:"aligned",folderName:"3a Aligned",displays:["points"]},{type:"partitionedHighArmpit",folderName:"4a PARTITIONED high armpit",displays:["points"]},{type:"partitionedTrueArmpit",folderName:"4b PARTITIONED true armpit",displays:["points"]},{type:"landmarkedHighArmpit",folderName:"5 LANDMARKED high armpit",displays:["points"]},{type:"processedHighArmpit",folderName:"6a PROCESSED high armpit",displays:["points","mesh","surface"]}],fR=["7001c January 20 2015 02_55.axf","7002a January 20 2015 02_18.axf","7004a January 21 2015 06_45.axf","7009b January 26 2015 10_55.axf","7010b January 26 2015 11_36.axf","7011b January 26 2015 12_54.axf","7012a January 26 2015 01_24.axf","7013a January 27 2015 06_00.axf","7014a January 27 2015 06_31.axf","7018b January 29 2015 09_39.axf","7019b February 4 2015 01_35.axf","7021b February 4 2015 05_49.axf","7024b February 9 2015 06_38.axf","7026b February 11 2015 01_35.axf","7027b February 11 2015 03_26.axf","7030d February 17 2015 07_37.axf","7032b February 17 2015 08_10.axf","7052d March 16 2015 04_31.axf","7061b March 18 2015 10_18.axf","7065d March 18 2015 12_37.axf","7066b March 18 2015 01_28.axf","7072a March 19 2015 07_29.bi.axf","7077a March 25 2015 10_49.bi.axf","7078a March 25 2015 11_29.bi.axf","7081a March 26 2015 06_27.bi.axf","7084a March 30 2015 06_21.bi.axf","7088a March 31 2015 01_48.bi.axf","7095b April 15 2015 11_31.bi.axf","7096a April 15 2015 12_01.bi.axf","7099b April 17 2015 05_26.bi.axf","7100a April 17 2015 05_53.bi.axf","7101a April 21 2015 04_25.bi.axf","7102c April 21 2015 05_17.bi.axf","7105a April 22 2015 12_08.bi.axf","7110a April 27 2015 05_42.bi.axf","7113a April 28 2015 05_32.bi.axf","7115a April 29 2015 11_31.bi.axf"],jt=pR(),Ws={UNLABELLED:nt(),WHOLE_BODY:nt(),LEFT_LEG:nt(),RIGHT_LEG:nt(),TORSO:nt(),LEFT_ARM:nt(),RIGHT_ARM:nt(),CHEST_WALL:nt(),LEFT_BREAST:nt(),RIGHT_BREAST:nt(),MJB_BUST:nt()},ql={fcolour:nt(),scolour:nt()};function pR(){const e=fR.filter(n=>!n.includes(".bi."));return dR.map(n=>{const{type:t,folderName:i,displays:r}=n,o=e.map(a=>`/assets/axf/new/${i}/${a}`);return{type:t,folderName:i,displays:r,bodyPaths:o,bodyFilenames:e,index:-1}})}function hu(e,n){const t=jt.find(o=>o.folderName===e);if(!t)throw new Error("Body directory not found");if(t.index=t.bodyFilenames.findIndex(o=>o===n),t.index===-1)throw new Error("Body filename not found");const i=t.bodyPaths[t.index],r=t.bodyFilenames[t.index];return{index:t.index,path:i,filename:r}}function ks(e){const n=jt.find(r=>r.type===e);if(!n)throw new Error("Body directory not found");n.index++,n.index>Object.keys(n.bodyPaths).length-1&&(n.index=0);const t=n.bodyPaths[n.index],i=n.bodyFilenames[n.index];return{index:n.index,path:t,filename:i}}function $i(e,n){if(n==="points")return bR(e);if(n==="splines")return LR(e);if(n==="mesh")return $l(e,{depthTest:!0,opacity:.5,transparent:!0,linewidth:2,clipping:!1});if(n==="meshthick")return $l(e,{linewidth:7});if(n==="surface")return xR(e);if(n==="bones")return MR(e);if(n==="silhouettes")return vR(e);throw new Error(`Invalid display type: ${n}`)}function hR(e,n){const t=new $n,i=new Float32Array(2*3);return i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=n.x,i[4]=n.y,i[5]=n.z,t.setAttribute("position",new lt(i,3)),t.computeBoundingBox(),t}function _R(e,n){const t=new $n,i=new Float32Array(e.nodes.length*3);return e.nodes.forEach((r,o)=>{const s=o*3;i[s]=r.point.x,i[s+1]=n+1,i[s+2]=r.point.y-1}),t.setAttribute("position",new lt(i,3)),t.computeBoundingBox(),t}function mR(e){const n=new $n;let t=0;e.forEach(o=>{o.pointLayer?t+=o.pointLayer.points.length*3:o.splineLayer&&(t+=o.splineLayer.surface.nodes.length*3)});const i=new Float32Array(t);let r=0;return e.forEach(o=>{o.pointLayer?(o.pointLayer.points.forEach((s,a)=>{const l=r+a*3;i[l]=s.x,i[l+1]=s.y,i[l+2]=s.z}),r+=o.pointLayer.points.length*3):o.splineLayer&&(o.splineLayer.surface.nodes.forEach((s,a)=>{const l=r+a*3;i[l]=s.point.x,i[l+1]=o.y,i[l+2]=s.point.y}),r+=o.splineLayer.surface.nodes.length*3)}),n.setAttribute("position",new lt(i,3)),n.computeBoundingBox(),n}function ER(e){const n=new $n,t=new Float32Array(e.nodes.length*3);return e.nodes.forEach((i,r)=>{const o=r*3;t[o]=i.point.x,t[o+1]=i.point.y+1,t[o+2]=-1}),n.setAttribute("position",new lt(t,3)),n.computeBoundingBox(),n}function TR(e){const n=new $n,t=new Float32Array(e.nodes.length*3);return e.nodes.forEach((i,r)=>{const o=r*3;t[o]=0,t[o+1]=i.point.y+1,t[o+2]=i.point.x-1}),n.setAttribute("position",new lt(t,3)),n.computeBoundingBox(),n}function _u(e,n,t,i){const r=new po({linewidth:t,color:i}),o=new Ar(n,r);e.add(o)}function gR(e){const n=[];return e.bodyParts.forEach(t=>{const i={bodypartId:t.id,colourId:t.type.toString(),geometries:[]};t.layers.filter(r=>r.splineLayer).forEach(r=>i.geometries.push({geometry:_R(r.splineLayer.surface,r.y)}))}),n}function RR(e){const n=[];return e.bodyParts.forEach(t=>{t.frontSilhouette&&t.frontSilhouette.forEach(i=>{n.push(ER(i.cubicSpline))})}),n}function AR(e){const n=[];return e.bodyParts.forEach(t=>{t.sideSilhouette&&t.sideSilhouette.forEach(i=>{n.push(TR(i.cubicSpline))})}),n}function SR(e){const n=new Ln;return e.forEach(t=>{const i=Ws[t.colourId];t.geometries.forEach(r=>_u(n,r.geometry,1.5,i))}),n}function Rs(e,n){const t=new Ln;return e.forEach(i=>{_u(t,i,4,n)}),t}function vR(e){const n=new Ln;return n.add(Rs(RR(e),ql.fcolour)),n.add(Rs(AR(e),ql.scolour)),n}function LR(e){const n=gR(e);return SR(n)}function $l(e,n){const t=mu(e);return wR(t,n)}function xR(e){const n=PR(e);return FR(Ru(n))}function MR(e){const n=NR(e);return Rs(n,nt())}function mu(e){const n=[];return e.bodyParts.forEach(t=>{var r;const i={bodypartId:t.id,colourId:t.type.toString(),geometries:[]};(r=t.splineRegions)==null||r.forEach(o=>{if(!o.polygons||!o.polygons.length){console.log(o);return}const s=Au(o);i.geometries.push({regionId:o.id,geometry:s})}),n.push(i)}),n}function Eu(e){const n=[];return e.isBone&&n.push(e),n.push(...e.children.flatMap(t=>Eu(t))),n}function yR(e,n,t){const r={1:e.map(o=>o.name),2:e.map(o=>o.name),3:{6:["LeftUpLeg"],7:["LeftLeg"],13:["LeftFoot"]},4:{6:["RightUpLeg"],7:["RightLeg"],13:["RightFoot"]},5:{8:["Neck","LeftShoulder","RightShoulder","LeftArm","RightArm"],3:["LeftShoulder","RightShoulder","Spine1"],4:["Spine"],5:["Hips"]},7:{15:["LeftShoulder","LeftArm","LeftForeArm"],18:["LeftArm","LeftForeArm"]},8:{15:["RightShoulder","RightArm","RightForeArm"],18:["RightArm","RightForeArm"]},9:{3:["Spine1"]},10:["Spine1"],11:["Spine1"],12:["Spine1"]}[n];if(Array.isArray(r))return r;if(!t)throw new Error("No region id");return r[t]}function IR(e){if(!e.extent)throw new Error("error");const n=mu(e),t=OR(e),i=Eu(t[0]);n.forEach(a=>{const{bodypartId:l}=a;a.geometries.forEach(c=>{const{regionId:d}=c,u=yR(i,l,d),f=i.filter(p=>u.includes(p.name)),h=c.geometry.attributes.position,m=new le,E=[],_=[];for(let p=0;p<h.count;p++){m.fromBufferAttribute(h,p);const A=f.map(y=>{const I=new le;y.getWorldPosition(I);const O=m.distanceTo(I);return{bone:y,distance:O}});A.sort((y,I)=>y.distance-I.distance);const g=A.slice(0,4),T=g.reduce((y,I)=>y+1/I.distance,0);for(g.forEach(y=>{const I=1/y.distance/T,O=i.indexOf(y.bone);E.push(O),_.push(I)});E.length%4!==0;)E.push(0),_.push(0)}c.geometry.setAttribute("skinIndex",new xs(E,4)),c.geometry.setAttribute("skinWeight",new mt(_,4))})});const r=Ru(n),o=new fo(r,bs),s=new co(i);return o.add(i[0]),o.bind(s),{mesh:o,skeleton:s}}function OR(e){const n=fu(e);return Tu([n])}function Tu(e){return e.map((n,t)=>{const{name:i,position:r}=n,o=new hr;return o.name=i==="ENDSITE"?`ENDSITE${t}`:i,o.position.set(r.x,r.y,r.z),Tu(n.children).forEach(a=>o.add(a)),o})}function PR(e){const n=[];return e.bodyParts.forEach(t=>{var r;const i={bodypartId:t.id,colourId:t.type.toString(),geometries:[]};(r=t.splineRegions)==null||r.forEach(o=>{if(!o.polygons||!o.polygons.length){console.log(o);return}const s=Au(o);i.geometries.push({regionId:o.id,geometry:s})}),n.push(i)}),n}function gu(e,n){const t=[],{x:i,y:r,z:o}=e.position;let s={x:i,y:r,z:o};return n&&(s={x:n.x+i,y:n.y+r,z:n.z+o},t.push(hR(n,s))),t.push(...e.children.flatMap(a=>gu(a,s))),t}function NR(e){const n=[],t=fu(e);return n.push(...gu(t)),n}function CR(e){const n=[];return e.bodyParts.forEach(t=>{const i={bodypartId:t.id,colourId:t.type.toString(),geometries:[]},r=mR(t.layers);i.geometries.push({geometry:r}),n.push(i)}),n}function bR(e){const n=new Ln;return CR(e).forEach(i=>{const r=Ws[i.colourId];i.geometries.forEach(o=>{const s=new Ec({size:.001,color:r}),a=new Tc(o.geometry,s);n.add(a)})}),n}function wR(e,n){const t=new Ln;return e.forEach(i=>{const r=Ws[i.colourId];i.geometries.forEach(o=>{const s=new _c(o.geometry),a=new Fc().fromWireframeGeometry(s),l=new PE(a,new Dc({...n,color:r}));t.add(l)})}),t}function Ru(e){return yE(e.flatMap(n=>n.geometries.map(t=>t.geometry)))}function FR(e){const n=new Ln,t=new mn(e,bs);return n.add(t),n}function Au(e){if(!e.polygons||!e.vertices||!e.normals)throw new Error("SplineRegion not initialised properly");const n=new $n,t=[],i=[],r=[],o=new xe;for(const s of e.polygons){const a=e.vertices[s.pointReference[0]],l=e.vertices[s.pointReference[1]],c=e.vertices[s.pointReference[2]];t.push(a.x,a.y,a.z),t.push(l.x,l.y,l.z),t.push(c.x,c.y,c.z);const d=e.normals[s.pointReference[0]],u=e.normals[s.pointReference[1]],f=e.normals[s.pointReference[2]];i.push(d.x,d.y,d.z),i.push(u.x,u.y,u.z),i.push(f.x,f.y,f.z),o.setRGB(1,1,.8);const h=.8;r.push(o.r,o.g,o.b,h),r.push(o.r,o.g,o.b,h),r.push(o.r,o.g,o.b,h)}return n.setAttribute("position",new mt(t,3).onUpload(jo)),n.setAttribute("normal",new mt(i,3).onUpload(jo)),n.setAttribute("color",new mt(r,4).onUpload(jo)),n.computeBoundingSphere(),n}function jo(){this.array=void 0}async function yr(e){const n=await fetch(e);if(!n.ok)throw new Error(`Failed to fetch: ${n.status} ${n.statusText}`);const t=await n.arrayBuffer();return new Uint8Array(t)}const DR={hipInfluence:new le(500,500,500),hip:"Hips",names:{Hips:"Hips",LHipJoint:"LHipJoint",LeftUpLeg:"LeftUpLeg",LeftLeg:"LeftLeg",LeftFoot:"LeftFoot",LeftToeBase:"LeftToeBase",RHipJoint:"RHipJoint",RightUpLeg:"RightUpLeg",RightLeg:"RightLeg",RightFoot:"RightFoot",RightToeBase:"RightToeBase",LowerBack:"LowerBack",Spine:"Spine",Spine1:"Spine1",Neck:"Neck",Neck1:"Neck1",Head:"Head",LeftShoulder:"LeftShoulder",LeftArm:"LeftArm",LeftForeArm:"LeftForeArm",LeftHand:"LeftHand",LeftFingerBase:"LeftFingerBase",LeftHandIndex1:"LeftHandIndex1",LThumb:"LThumb",RightShoulder:"RightShoulder",RightArm:"RightArm",RightForeArm:"RightForeArm",RightHand:"RightHand",RightFingerBase:"RightFingerBase",RightHandIndex1:"RightHandIndex1",RThumb:"RThumb"}};function As(e,n){var t;return n.getBoneName!==void 0?n.getBoneName(e):(t=n.names)==null?void 0:t[e.name]}function UR(e,n,t={}){const i=new ot,r=new le,o=new $e,s=new $e;t.preserveBoneMatrix=t.preserveBoneMatrix!==void 0?t.preserveBoneMatrix:!0,t.preserveBonePositions=t.preserveBonePositions!==void 0?t.preserveBonePositions:!0,t.useTargetMatrix=t.useTargetMatrix!==void 0?t.useTargetMatrix:!1,t.hip=t.hip!==void 0?t.hip:"hip",t.hipInfluence=t.hipInfluence!==void 0?t.hipInfluence:new le(1,1,1),t.scale=t.scale!==void 0?t.scale:1,t.names=t.names||{};let a;if(e instanceof fo?e.skeleton.pose():(t.useTargetMatrix=!0,t.preserveBoneMatrix=!1),t.preserveBonePositions){a=[];for(let l=0;l<e.skeleton.bones.length;l++)a.push(e.skeleton.bones[l].position.clone())}if(t.preserveBoneMatrix){e.updateMatrixWorld(),e.matrixWorld.identity();for(let l=0;l<e.children.length;++l)e.children[l].updateMatrixWorld(!0)}for(let l=0;l<e.skeleton.bones.length;++l){const c=e.skeleton.bones[l],d=As(c,t),u=Su(d,n.bones);s.copy(c.matrixWorld),u&&(u.updateMatrixWorld(),t.useTargetMatrix?o.copy(u.matrixWorld):(o.copy(e.matrixWorld).invert(),o.multiply(u.matrixWorld)),r.setFromMatrixScale(o),o.scale(r.set(1/r.x,1/r.y,1/r.z)),s.makeRotationFromQuaternion(i.setFromRotationMatrix(o)),t.localOffsets&&t.localOffsets[c.name]&&s.multiply(t.localOffsets[c.name]),s.copyPosition(o)),d===t.hip&&(s.elements[12]*=t.scale*t.hipInfluence.x,s.elements[13]*=t.scale*t.hipInfluence.y,s.elements[14]*=t.scale*t.hipInfluence.z,t.hipPosition!==void 0&&(s.elements[12]+=t.hipPosition.x*t.scale,s.elements[13]+=t.hipPosition.y*t.scale,s.elements[14]+=t.hipPosition.z*t.scale)),c.parent?(c.matrix.copy(c.parent.matrixWorld).invert(),c.matrix.multiply(s)):c.matrix.copy(s),c.matrix.decompose(c.position,c.quaternion,c.scale),c.updateMatrixWorld()}if(t.preserveBonePositions)for(let l=0;l<e.skeleton.bones.length;++l){const c=e.skeleton.bones[l];(As(c,t)||c.name)!==t.hip&&c.position.copy(a[l])}t.preserveBoneMatrix&&e.updateMatrixWorld(!0)}function HR(e,n,t,i={}){i.useFirstFramePosition=i.useFirstFramePosition!==void 0?i.useFirstFramePosition:!1,i.fps=i.fps!==void 0?i.fps:Math.max(...t.tracks.map(f=>f.times.length))/t.duration,i.names=i.names||void 0;const r=Math.round(t.duration*(i.fps/1e3)*1e3),o=t.duration/(r-1),s=[],a=new Rc(n),l=[];let c;a.clipAction(t).play();let d=0,u=r;i.trim!==void 0?(d=Math.round(i.trim[0]*i.fps),u=Math.min(Math.round(i.trim[1]*i.fps),r)-d,a.update(i.trim[0])):a.update(0),n.updateMatrixWorld();for(let f=0;f<u;++f){const h=f*o;UR(e,n,i);for(let m=0;m<e.skeleton.bones.length;++m){const E=e.skeleton.bones[m],_=As(E,i)||E.name;if(Su(_,n.bones)){const A=l[m]=l[m]||{bone:E,pos:{times:new Float32Array(u),values:new Float32Array(u*3)},quat:{times:new Float32Array(u),values:new Float32Array(u*4)}};i.useFirstFramePosition&&(f===0&&(c=E.position.clone()),E.position.sub(c)),A.pos.times[f]=h,E.position.toArray(A.pos.values,f*3),A.quat.times[f]=h,E.quaternion.toArray(A.quat.values,f*4)}}f===u-2?a.update(o-1e-7):a.update(o),n.updateMatrixWorld()}for(let f=0;f<l.length;++f){const h=l[f];h&&(h.pos&&s.push(new _r(".bones["+h.bone.name+"].position",h.pos.times,h.pos.values)),s.push(new Ki(".bones["+h.bone.name+"].quaternion",h.quat.times,h.quat.values)))}return a.uncacheAction(t),new uo(t.name,-1,s)}class GR extends Ac{constructor(t,i){super(t);ne(this,"skeleton");this.skeleton=i}}function Su(e,n){for(let t=0,i=BR(n);t<i.length;t++)if(e===i[t].name)return i[t]}function BR(e){return Array.isArray(e)?e:e.bones}const tr=.002,ai=new xe(4580095),jn={scene:{background:1907995,fog:10526880,ground:2769747,grid:{one:0,two:0},hemiLight:{sky:16777215,ground:4473924},dirLight:16777215},panel:{buttonColumn:{width:null,height:null,padding:.02,justifyContent:"center",contentDirection:"column",fontFamily:Qn,fontTexture:Qn,fontSize:.07,backgroundColor:new xe(16777215),backgroundOpacity:.09,borderWidth:tr,borderRadius:0,borderOpacity:.9,borderColor:ai,fontSuperSampling:!0},buttonRow:{width:null,height:null,padding:.02,justifyContent:"center",contentDirection:"row",fontFamily:Qn,fontTexture:Qn,fontSize:.07,backgroundColor:new xe(16777215),backgroundOpacity:.09,borderWidth:tr,borderRadius:0,borderOpacity:.9,borderColor:ai,fontSuperSampling:!0},buttonRowNoBorder:{width:null,height:null,padding:.02,justifyContent:"center",contentDirection:"row",fontFamily:Qn,fontTexture:Qn,fontSize:.07,backgroundColor:new xe(16777215),backgroundOpacity:.09,borderWidth:0,borderRadius:0,borderOpacity:.9,borderColor:ai,fontSuperSampling:!0},landmark:{width:.06,height:.02,padding:.002,justifyContent:"center",contentDirection:"column",fontFamily:Qn,fontTexture:Qn,fontSize:.007,fontColor:new xe(0),interLine:5e-4,backgroundColor:new xe(16777215),backgroundOpacity:1,borderWidth:0,borderRadius:0,borderOpacity:.9,borderColor:ai,fontSuperSampling:!0},text:{width:2,height:null,padding:.2,justifyContent:"center",textAlign:"left",fontFamily:Qn,fontTexture:Qn,fontColor:new xe(0),backgroundColor:new xe(16777215),backgroundOpacity:.09,borderWidth:tr,borderRadius:0,borderOpacity:.9,borderColor:ai,fontSuperSampling:!0},label:{width:.5,height:null,padding:.002,justifyContent:"center",textAlign:"center",fontFamily:Qn,fontTexture:Qn,backgroundColor:new xe(16777215),backgroundOpacity:.09,borderWidth:0,borderRadius:0,fontSuperSampling:!0},guidedExperience:{width:1.1,height:null,padding:.06,justifyContent:"center",textAlign:"left",fontFamily:Qn,fontTexture:Qn,fontColor:new xe(0),backgroundColor:new xe(16777215),backgroundOpacity:.09,borderWidth:tr,borderRadius:0,borderOpacity:.9,borderColor:ai,fontSuperSampling:!0}},button:{buttonOptions:{width:.5,height:.15,justifyContent:"center",offset:.05,margin:.02,borderWidth:tr,borderRadius:0,borderOpacity:.9,borderColor:ai},selectedAttributes:{offset:.03,backgroundColor:new xe(7829367),fontColor:new xe(2236962)},hoveredStateAttributes:{state:"hovered",attributes:{offset:.035,backgroundColor:new xe(10066329),backgroundOpacity:1,fontColor:new xe(16777215)}},idleStateAttributes:{state:"idle",attributes:{offset:.035,backgroundColor:new xe(8947848),backgroundOpacity:.3,fontColor:new xe(16777215)}}}};function gi(e){return{fontSize:.08,content:e}}function vt(e){return{fontSize:.06,content:e}}function WR(e){return e.map(n=>new Zt({content:`
${n.content}`,fontSize:.08}))}class Ir{constructor(n,t=new le(0,1.3,-4)){ne(this,"panel");ne(this,"lastTextStrings",[]);this.height=n,this.position=t}haveTextsChanged(n){const t=n.map(r=>r.content);return t.length!==this.lastTextStrings.length||t.some((r,o)=>r!==this.lastTextStrings[o])?(this.lastTextStrings=t,!0):!1}update(n,t){if(this.haveTextsChanged(t)){this.panel&&(Ro.disposeDescendants(this.panel),n.remove(this.panel));const i=new st({...jn.panel.text,height:this.height});i.position.set(this.position.x,this.position.y,this.position.z),i.add(...WR(t)),n.add(i),this.panel=i}}render(n){var t;(t=this.panel)==null||t.lookAt(n.position)}}const kR="/assets/High%20Grass-Q7_f1USz.fbx",VR="/assets/Palm_01-CRl9z-QR.fbx",Ss={};async function zR(){const e=new CE,[n,t]=await Promise.all([e.loadAsync(kR),e.loadAsync(VR)]);Ss.highGrass=n,Ss.palm01=t}class XR{constructor(n){ne(this,"raycasterObjects");ne(this,"raycasterPoints");ne(this,"tempMatrix");this.raycasterObjects=new Oa,this.raycasterObjects.camera=n,this.raycasterPoints=new Oa,this.raycasterPoints.camera=n,this.raycasterPoints.params.Points.threshold=20,this.tempMatrix=new $e}getIntersection(n,t){this.tempMatrix.identity().extractRotation(n.matrixWorld),this.raycasterPoints.ray.origin.setFromMatrixPosition(n.matrixWorld),this.raycasterPoints.ray.direction.set(0,0,-1).applyMatrix4(this.tempMatrix);const i=this.raycasterPoints.intersectObjects(t,!0);return i.length>0?i[0]:void 0}getIntersectionReturnObject(n,t){return this.tempMatrix.identity().extractRotation(n.matrixWorld),this.raycasterObjects.ray.origin.setFromMatrixPosition(n.matrixWorld),this.raycasterObjects.ray.direction.set(0,0,-1).applyMatrix4(this.tempMatrix),t.reduce((i,r)=>{const o=this.raycasterObjects.intersectObject(r,!0);return o[0]&&(!i||o[0].distance<i.distance)?(o[0].object=r,o[0]):i},void 0)}dispose(){this.raycasterObjects.camera=null,this.raycasterPoints.camera=null}}class KR{constructor(n){ne(this,"scene");ne(this,"camera");ne(this,"dolly");ne(this,"dummyCam");ne(this,"sound");ne(this,"sky");ne(this,"sun");ne(this,"audioListener",new pf);ne(this,"panelDebug");ne(this,"abortController",new AbortController);ne(this,"raycasterIntersections");const{fog:t,hemiLight:i,dirLight:r}=jn.scene,o=new Ns,s={turbidity:10,rayleigh:3,mieCoefficient:.005,mieDirectionalG:.7,elevation:2,azimuth:180,exposure:n.toneMappingExposure},a=new _o;a.scale.setScalar(45e4),o.add(a);const l=new le,c=a.material.uniforms;c.turbidity.value=s.turbidity,c.rayleigh.value=s.rayleigh,c.mieCoefficient.value=s.mieCoefficient,c.mieDirectionalG.value=s.mieDirectionalG;const d=bn.degToRad(90-s.elevation),u=bn.degToRad(s.azimuth);l.setFromSphericalCoords(1,d,u),c.sunPosition.value.copy(l),n.toneMappingExposure=s.exposure,o.fog=new hf(t,10,50);const f=new Sc(i.sky,i.ground);f.position.set(0,20,0),o.add(f);const h=new Os(r);h.position.set(-3,10,-10),h.castShadow=!0,h.shadow.camera.top=2,h.shadow.camera.bottom=-2,h.shadow.camera.left=-2,h.shadow.camera.right=2,h.shadow.camera.near=.1,h.shadow.camera.far=40,o.add(h);const m=new Ot,E=[13421772,10066329,6710886],_=[8,5,2.5],p=0,A=.002;for(let O=0;O<_.length;O++){const b=p+O*A;if(O===0){const L=new mn(new _f(_[O],64),new qn({color:E[O]}));L.rotation.x=-Math.PI/2,L.position.y=b,m.add(L)}else{const L=new mn(new mf(_[O],_[O-1],64),new qn({color:E[O]}));L.rotation.x=-Math.PI/2,L.position.y=b,m.add(L)}}o.add(m);const g=new $t(50,window.innerWidth/window.innerHeight,.1,1e3);g.position.set(0,1.6,1.5),g.add(this.audioListener);const T=new Ln;T.position.set(0,0,0),T.add(g),o.add(T);const y=new Ln;g.add(y);const I=new Ef(this.audioListener);I.setBuffer(ar.crowdOfPeopleTalking),I.setLoop(!0),I.setVolume(.1),I.isPlaying&&I.stop(),I.play(),o.add(ke.controllers.controller1),o.add(ke.controllers.controller2),o.add(ke.controllers.controllerGrip1),o.add(ke.controllers.controllerGrip2),ke.controllers.addEventListenerWithAbort(1,"selectstart",ke.controllers.selectstart.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"selectstart",ke.controllers.selectstart.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(1,"selectend",ke.controllers.selectend.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"selectend",ke.controllers.selectend.bind(this),this.abortController.signal),this.raycasterIntersections=new XR(g),this.panelDebug=new Ir(1.5,new le(0,3,-4)),o.add(Ss.highGrass),this.scene=o,this.camera=g,this.dolly=T,this.dummyCam=y,this.sound=I,this.sky=a,this.sun=l,this.abortController.signal.addEventListener("abort",()=>{I.stop(),this.audioListener.clear(),Ro.disposeDescendants(o),o.clear(),this.scene.remove(ke.controllers.controller1),this.scene.remove(ke.controllers.controller2),this.scene.remove(ke.controllers.controllerGrip1),this.scene.remove(ke.controllers.controllerGrip2),this.scene.remove(a)},{once:!0})}async initialise(){}onWindowResize(n){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)}displayDebugText(n){const{memory:t,programs:i}=n.info,r=[gi("Debugging info"),gi("Memory"),vt(`Texture: ${t.textures}`),vt(`Geometries: ${t.geometries}`),gi("Programs")];return i==null||i.map(o=>r.push(vt(`${o.name}`))),r}render(n,t){n.render(this.scene,this.camera),this.panelDebug.render(this.camera),this.panelDebug.update(this.scene,this.displayDebugText(n))}}class Xt{constructor(n,t,i,r){ne(this,"button");ne(this,"leftControllerState","idle");ne(this,"rightControllerState","idle");ne(this,"noneControllerState","idle");this.base=n;const{button:{buttonOptions:o,hoveredStateAttributes:s,idleStateAttributes:a,selectedAttributes:l}}=jn,c=new st(o);c.name=typeof t=="string"?t:t.name,c.add(new Zt({content:r||c.name}));const d=new Tf(n.audioListener);d.setBuffer(ar.button4),d.setRefDistance(4),c.add(d),c.setupState({state:"selected",attributes:l,onSet:()=>{i(t),d.isPlaying&&d.stop(),d.play()}}),c.setupState(s),c.setupState(a),ke.controllers.addEventListenerWithAbort(1,"selectstart",this.selectstartMeshUiButtonExtended.bind(this),n.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"selectstart",this.selectstartMeshUiButtonExtended.bind(this),n.abortController.signal),ke.controllers.addEventListenerWithAbort(1,"move",this.moveMeshUiButtonExtended.bind(this),n.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"move",this.moveMeshUiButtonExtended.bind(this),n.abortController.signal),this.button=c}selectstartMeshUiButtonExtended(n){const t=this.base.raycasterIntersections.getIntersectionReturnObject(n.target,[this.button]);t&&t.object===this.button&&this.button.setState("selected")}moveMeshUiButtonExtended(n){const t=this.base.raycasterIntersections.getIntersectionReturnObject(n.target,[this.button]),{handedness:i}=n.target.userData,r=`${i}ControllerState`,o=n.target.getObjectByName("line");t&&t.object===this.button?(o&&(o.scale.z=t.distance),this[r]!=="hovered"&&(this[r]="hovered")):this[r]!=="idle"&&(this[r]="idle",o&&this.resetLineLength(o)),this.updateButtonState()}updateButtonState(){(this.leftControllerState==="hovered"||this.rightControllerState==="hovered")&&this.button.currentState!=="hovered"?this.button.setState("hovered"):this.leftControllerState==="idle"&&this.rightControllerState==="idle"&&this.button.currentState!=="idle"&&this.button.setState("idle")}resetLineLength(n){this.button.currentState==="idle"&&(n.scale.z=go)}}class YR{constructor(n,t,i){ne(this,"panel");ne(this,"button");this.panel=new st(jn.panel.buttonColumn),this.panel.position.set(-2,2.5,-4),this.panel.rotation.x=.45,this.button=new Xt(t,i,ke.switchScene.bind(ke)),this.panel.add(this.button.button),n.add(this.panel)}render(n){this.panel.lookAt(n.position)}}class jR{constructor(n,t,i){ne(this,"panel");this.scene=n,this.height=t,this.createPanel(i)}update(n){this.scene.remove(this.panel),this.createPanel(n)}createPanel(n){this.panel=new st({...jn.panel.guidedExperience,height:this.height}),this.panel.position.set(-2,1.5,-4),this.panel.add(...n),this.scene.add(this.panel)}render(n){this.panel.lookAt(n.position)}}class xi extends KR{constructor(t,i){super(t);ne(this,"panelGuidedExperience");ne(this,"panelNextGuidedExperience");this.guidedExperience=i,this.panelGuidedExperience=new jR(this.scene,1.2,this.displayTextGuidedExperience())}async initialise(){super.initialise();const t=Pa.find(i=>i.id===this.guidedExperience.next);t&&(this.panelNextGuidedExperience=new YR(this.scene,this,t)),this.panelGuidedExperience.update(this.displayTextGuidedExperience())}displayTextGuidedExperience(){const t=[new Zt({content:`
Guided Experience`,fontSize:.08})];return Pa.forEach(i=>{let r=i.name;i.stage&&(r=`Stage ${i.stage} - ${r}`),i.optional&&(r=`${r} (Optional)`);const o={content:`
${r}`,fontSize:.06};i.id===this.guidedExperience.id&&(o.fontColor=new xe(16711680)),t.push(new Zt(o))}),t}render(t,i){super.render(t,i),this.panelNextGuidedExperience&&this.panelNextGuidedExperience.render(this.camera),this.panelGuidedExperience.render(this.camera)}}class Zl extends xi{constructor(){super(...arguments);ne(this,"mixer1");ne(this,"currentBody");ne(this,"body")}async initialise(){super.initialise(),this.currentBody=hu("6a PROCESSED high armpit","7002a January 20 2015 02_18.axf");const t=await yr(this.currentBody.path),i=Mr(t);if(!i.extent)throw new Error("error");const{mesh:r,skeleton:o}=IR(i),s=new Ac(o.bones[0]),a=$i(i,"bones");a.translateY(-i.extent.min.y*an),a.scale.set(an,an,an),this.scene.add(a);const c=Ci["animation0506"];console.log(o);const d=c.skeleton.bones[0],u=new GR(d,c.skeleton),f=HR(r,u,c.clip,DR);this.mixer1=new Rc(r),this.scene.add(r),r.position.set(-.5,0,-2),r.rotateY(-60),r.translateY(-i.extent.min.y*an),r.scale.set(an,an,an),this.scene.add(s),this.mixer1.clipAction(f).play()}render(t,i){this.currentBody&&(this.mixer1&&this.mixer1.update(i),super.render(t,i))}}class qR{constructor(n,t,i){ne(this,"panel");ne(this,"buttonStagePrev");ne(this,"buttonStageNext");ne(this,"buttonBodyPrev");ne(this,"buttonBodyNext");ne(this,"buttonDisplayPrev");ne(this,"buttonDisplayNext");const r=new st(jn.panel.buttonColumn);r.position.set(2,1.5,-4);const o=new st(jn.panel.buttonRowNoBorder);this.buttonStagePrev=new Xt(t,"Prev",i("stage","prev"));const s=new st(jn.panel.label),a=new Zt({content:"Stage",fontSize:.08});s.add(a),this.buttonStageNext=new Xt(t,"Next",i("stage","next")),o.add(this.buttonStagePrev.button,s,this.buttonStageNext.button);const l=new st(jn.panel.buttonRowNoBorder);this.buttonBodyPrev=new Xt(t,"Prev",i("body","prev"));const c=new st(jn.panel.label),d=new Zt({content:"Body",fontSize:.08});c.add(d),this.buttonBodyNext=new Xt(t,"Next",i("body","next")),l.add(this.buttonBodyPrev.button,c,this.buttonBodyNext.button);const u=new st(jn.panel.buttonRowNoBorder);this.buttonDisplayPrev=new Xt(t,"Prev",i("display","prev"));const f=new st(jn.panel.label),h=new Zt({content:"Display",fontSize:.08});f.add(h),this.buttonDisplayNext=new Xt(t,"Next",i("display","next")),u.add(this.buttonDisplayPrev.button,f,this.buttonDisplayNext.button),r.add(o,l,u),n.add(r),this.panel=r}render(n){this.panel.lookAt(n.position)}}function $R(e,n,t,i){const r=jt[0].bodyFilenames,o=jt.map(l=>l.folderName),s=(l,c,d)=>d==="next"?(l+1)%c.length:(l-1+c.length)%c.length,a={...e};if(n==="body"){const l=r.indexOf(e.body),c=s(l,r,t);a.body=r[c]}else if(n==="stage"){const l=o.indexOf(e.stage),c=s(l,o,t);a.stage=o[c];const d=i[a.stage]||[];d.includes(a.display)||(a.display=d[0])}else if(n==="display"){const l=i[e.stage]||[],c=l.indexOf(e.display),d=s(c,l,t);a.display=l[d]}return a}class ZR extends xi{constructor(t,i){super(t,i);ne(this,"game");ne(this,"state");ne(this,"panelSwitchBody");ne(this,"panelText");ne(this,"currentBody");ne(this,"body");ne(this,"box");ne(this,"objsToTest",[]);ne(this,"leftPrevPosition",new le);ne(this,"rightPrevPosition",new le);this.renderer=t,this.guidedExperience=i,this.game=new Ln,this.scene.add(this.game),this.state={stage:jt[0].folderName,body:jt[0].bodyFilenames[0],display:jt[0].displays[0]},this.panelSwitchBody=new qR(this.scene,this,this.navigate.bind(this)),this.panelText=new Ir(1.5),ke.controllers.addEventListenerWithAbort(1,"squeezestart",this.squeezestart.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"squeezestart",this.squeezestart.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(1,"squeezeend",this.squeezeend.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"squeezeend",this.squeezeend.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(1,"move",this.move.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"move",this.move.bind(this),this.abortController.signal)}squeezestart(t){if(!t.data)return;const i=this.raycasterIntersections.getIntersectionReturnObject(t.target,this.objsToTest),r=`${t.data.handedness}ControllerState`;this.objsToTest.forEach(o=>{i&&i.object===o&&(o[r]="squeezed")})}squeezeend(t){if(!t.data)return;const i=`${t.data.handedness}ControllerState`;this.objsToTest.forEach(r=>{r[i]="idle"})}move(t){const{handedness:i}=t.target.userData,r=`${i}ControllerState`,o=`${i}PrevPosition`,s=new le;t.target.getWorldPosition(s);const a=s.clone().sub(this[o]);this[o].copy(s),this.objsToTest.forEach(l=>{l[r]==="squeezed"&&this.dragging(a)})}displayText(){const t=[gi("Body Aspect"),vt(`Stage: ${this.state.stage}`),vt(`Body: ${this.state.body}`),vt(`Display: ${this.state.display}`)];return this.box&&t.push(vt(`Box: left: ${this.box.leftControllerState}, right: ${this.box.rightControllerState}`)),t}async initialise(){super.initialise(),this.clearGame(),this.currentBody=hu(this.state.stage,this.state.body);const t=await yr(this.currentBody.path),i=Mr(t);if(!i.extent||!i.extent.difference)throw new Error("error");this.box=new mn(new Li(i.extent.difference.x,i.extent.difference.y,i.extent.difference.z),new Sr({visible:!1})),this.box.leftControllerState="idle",this.box.rightControllerState="idle",this.box.noneControllerState="idle",this.box.currentState="idle",this.box.translateY(-i.extent.min.y),this.objsToTest.push(this.box),this.body=$i(i,this.state.display),this.body.translateY(-i.extent.min.y);const r=new Ln;r.add(this.box),r.add(this.body),r.scale.set(an,an,an),r.translateZ(-1),this.game.add(r),this.panelText.update(this.scene,this.displayText())}navigate(t,i){return async()=>{const r=jt.reduce((o,s)=>(o[s.folderName]=s.displays,o),{});this.state=$R(this.state,t,i,r),await this.initialise()}}clearGame(){for(this.objsToTest=[];this.game.children.length;)this.game.remove(this.game.children[0])}dragging(t){this.body.rotateY(t.x*90),this.box.rotateY(t.x*90)}render(t,i){this.currentBody&&this.box&&(this.panelSwitchBody.render(this.camera),this.panelText.render(this.camera),super.render(t,i))}}const JR=new po({color:0});class QR{constructor(n,t,i){ne(this,"panel");this.panel=new st(jn.panel.landmark),this.panel.position.copy(i),this.panel.translateZ(.4),this.panel.add(new Zt({content:t,offset:1e-4})),setTimeout(()=>n.add(this.panel),100);const r=new $n().setFromPoints([i.clone(),this.panel.position.clone()]),o=new Ar(r,JR);n.add(o)}lookAt(n){this.panel.lookAt(n.position)}}function vu(e,n,t,i,r=.003){const o=pu.get(n);if(!o)throw Error(`${t}: Landmark type not found`);const{name:s}=o,a=new Ps(r,10,10),l=new mn(a,new qn({color:16711680}));l.position.copy(i);const c=new QR(e,o.name,i);return{mesh:l,landmarkType:n,name:s,position:i,panel:c}}const qo={mesh:new mn(Bs,new qn({color:65280}))};class Jl extends xi{constructor(t,i){super(t,i);ne(this,"game");ne(this,"loaded",!1);ne(this,"container");ne(this,"landmarkContainers",[]);this.guidedExperience=i,this.game=new Ln,this.scene.add(this.game),this.game.add(qo.mesh),this.abortController.signal.addEventListener("abort",()=>{this.game.clear()},{once:!0})}move(t){const{handedness:i}=t.target.userData,r=`${i}ControllerState`,o=t.target.getObjectByName("line"),s=this.raycasterIntersections.getIntersection(t.target,[this.container]);ke.controllers[r]==="selected"&&s&&s.index?(o&&(o.scale.z=s.distance),qo.position=s.point.toArray(),qo.mesh.position.copy(s.point)):o&&(o.scale.z=go)}async initialise(){super.initialise();const t=ks("processedHighArmpit"),i=await yr(t.path),r=Mr(i);if(!r.extent||!r.extent.difference)throw new Error("error");const o=$i(r,"mesh");o.translateY(-r.extent.min.y),this.container=new Ln,this.container.add(o),r.landmarks.forEach(s=>{const a=new le(s.x*an,(s.y-r.extent.min.y)*an,s.z*an-1),l=vu(this.game,s.landmarkType,"something",a);l&&(this.landmarkContainers.push(l),this.game.add(l.mesh))}),this.container.scale.set(an,an,an),this.container.translateZ(-1),this.game.add(this.container),ke.controllers.addEventListenerWithAbort(1,"move",this.move.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"move",this.move.bind(this),this.abortController.signal),this.loaded=!0}render(t,i){this.loaded&&(this.landmarkContainers.forEach(r=>r.panel.lookAt(this.camera)),super.render(t,i))}}class eA{constructor(n,t,i,r,o){ne(this,"panel");ne(this,"landmarkContainers",[]);this.scene=n,this.game=t,this.marker=o,this.marker=o,this.panel=new st(jn.panel.buttonColumn),this.panel.position.set(2,1.5,-4),r.forEach(s=>{const a=pu.get(s);if(!a)return;const l=new Xt(i,a.name,c=>this.addLandmark(c,s));this.panel.add(l.button)}),this.scene.add(this.panel)}addLandmark(n,t){const{game:i,landmarkContainers:r,marker:o}=this,s=vu(i,t,n,o.mesh.position);s&&(r.push(s),i.add(s.mesh))}dispose(){for(const n of this.landmarkContainers)this.game.remove(n.mesh);this.landmarkContainers=[]}render(n){const{landmarkContainers:t,panel:i}=this;i.lookAt(n.position),t.forEach(r=>r.panel.lookAt(n))}}const kr={mesh:new mn(Bs,new qn({color:65280}))};class nA extends xi{constructor(t,i){super(t,i);ne(this,"game");ne(this,"panelLandmarks");ne(this,"panelText",new Ir(1));ne(this,"loaded",!1);ne(this,"container");this.renderer=t,this.guidedExperience=i,this.game=new Ln,this.scene.add(this.game),this.panelLandmarks=new eA(this.scene,this.game,this,[Yo.LEFT_ARMPIT,Yo.RIGHT_ARMPIT,Yo.CROTCH],kr),this.game.add(kr.mesh),this.abortController.signal.addEventListener("abort",()=>{this.panelLandmarks.dispose(),this.game.clear()},{once:!0})}move(t){const{handedness:i}=t.target.userData,r=`${i}ControllerState`,o=t.target.getObjectByName("line"),s=this.raycasterIntersections.getIntersection(t.target,[this.container]);ke.controllers[r]==="selected"&&s&&s.index?(o&&(o.scale.z=s.distance),kr.position=s.point.toArray(),kr.mesh.position.copy(s.point)):o&&(o.scale.z=go)}async initialise(){super.initialise();const t=ks("headRemoved"),i=await yr(t.path),r=Mr(i);if(!r.extent||!r.extent.difference)throw new Error("error");const o=$i(r,"points");o.translateY(-r.extent.min.y),this.container=new Ln,this.container.add(o),this.container.scale.set(an,an,an),this.container.translateZ(-1),this.game.add(this.container),ke.controllers.addEventListenerWithAbort(1,"move",this.move.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"move",this.move.bind(this),this.abortController.signal),this.loaded=!0}displayTextControllerState(){return[gi("Body Aspect"),vt(`leftControllerState ${ke.controllers.leftControllerState}`),vt(`rightControllerState ${ke.controllers.rightControllerState}`),vt(`noneControllerState ${ke.controllers.noneControllerState}`)]}render(t,i){this.loaded&&(this.panelLandmarks.render(this.camera),this.panelText.update(this.scene,this.displayTextControllerState()),this.panelText.render(this.camera),super.render(t,i))}}class tA extends xi{constructor(t,i){super(t,i);ne(this,"panelText");this.guidedExperience=i,this.panelText=new Ir(1),this.panelText.update(this.scene,this.displayText())}render(t,i){super.render(t,i),this.panelText.render(this.camera)}displayText(){return[gi("Body Aspect"),vt("Something")]}}class iA extends xi{constructor(t,i){super(t,i);ne(this,"cube");ne(this,"panelText");this.guidedExperience=i,this.cube=new mn(new Li(.3,.3,.3),new Sr({transparent:!0,map:ws})),this.cube.position.set(0,1,-2),this.scene.add(this.cube),this.panelText=new Ir(1),this.panelText.update(this.scene,this.displayText())}async initialise(){super.initialise()}render(t,i){super.render(t,i),this.panelText.render(this.camera),this.cube.rotateX(i),this.cube.rotateY(i),this.cube.rotateZ(i)}displayText(){return[gi("Body Aspect")]}}const ir=.003;class rA extends xi{constructor(t,i){super(t,i);ne(this,"subScene");ne(this,"subCamera");ne(this,"renderTarget");ne(this,"crossSectionViewer");ne(this,"clip");ne(this,"subContainer");ne(this,"plane");ne(this,"axf");ne(this,"verticalOffset");ne(this,"leftPrevPosition",new le);ne(this,"rightPrevPosition",new le);this.guidedExperience=i,this.subScene=new Ns;const r=3,o=1.5,s=2500;this.renderTarget=new Ri(r*s,o*s);const a=new qn({map:this.renderTarget.texture}),l=new Ls(r,o);this.crossSectionViewer=new mn(l,a),this.crossSectionViewer.position.set(2,1,-3),this.scene.add(this.crossSectionViewer);const c=r/o,d=.5;this.clip=this.calculateClip(3),this.subCamera=new Ms(d*c/-2,d*c/2,d/2,d/-2,this.clip.near,this.clip.far),this.subCamera.position.set(0,3,0),this.subCamera.lookAt(0,0,0),ke.controllers.addEventListenerWithAbort(1,"move",this.move.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"move",this.move.bind(this),this.abortController.signal),this.abortController.signal.addEventListener("abort",()=>{Ro.disposeDescendants(this.subScene),this.subScene.clear(),this.renderTarget.dispose()},{once:!0})}move(t){const{handedness:i}=t.target.userData,r=`${i}ControllerState`,o=`${i}PrevPosition`,s=t.target.getObjectByName("line"),a=new le;t.target.getWorldPosition(a);const l=a.clone().sub(this[o]);if(this[o].copy(a),this.plane){const c=this.raycasterIntersections.getIntersection(t.target,[this.plane]);ke.controllers[r]==="selected"&&c&&c.index&&(s&&(s.scale.z=c.distance),this.dragging(l))}}dragging(t){this.moveClip(t.y*90)}addToCrossSection(t){this.axf=t;const i=$i(t,"meshthick");this.subContainer=new Ln,this.subContainer.add(i),this.subContainer.scale.set(an,an,an),this.subScene.add(this.subContainer);const r=2*t.extent.max.x*an,o=this.clip.clipRadius*2,s=2*t.extent.max.z*an;this.plane=new mn(new Li(r,o,s),new qn({color:16711680,depthTest:!0,opacity:.5,transparent:!0})),this.verticalOffset=this.calculateVerticalOffset(),this.plane.translateY(this.verticalOffset),this.plane.translateZ(-1),this.scene.add(this.plane)}calculateClip(t){return{near:t-ir,middle:t,far:t+ir,clipRadius:ir}}calculateVerticalOffset(){return-this.axf.extent.min.y*an}convertClipToPlanePosition(t){return this.verticalOffset+3-t.middle}isClipWithinBounds(t){const i=this.axf.extent.max.y*an,r=-this.axf.extent.min.y*an,o=this.verticalOffset+i+ir,s=this.verticalOffset-r-ir;return!(t>=o||t<=s)}moveClip(t){const i=this.calculateClip(t),r=this.convertClipToPlanePosition(i);this.isClipWithinBounds(r)&&(this.plane.position.y=r,this.subCamera.near=i.near,this.subCamera.far=i.far,this.subCamera.updateProjectionMatrix(),this.clip=i)}render(t,i){super.render(t,i);const{renderTarget:r,camera:o,subScene:s,subCamera:a,crossSectionViewer:l}=this;l.lookAt(o.position);const c=t.getRenderTarget(),d=t.xr.enabled,u=t.shadowMap.autoUpdate;t.xr.enabled=!1,t.shadowMap.autoUpdate=!1,t.setRenderTarget(r),t.clear(),t.render(s,a),t.xr.enabled=d,t.shadowMap.autoUpdate=u,t.setRenderTarget(c)}}const $o={mesh:new mn(Bs,new qn({color:65280}))};class oA extends rA{constructor(t,i){super(t,i);ne(this,"game");ne(this,"loaded",!1);ne(this,"container");ne(this,"objsToTest",[]);this.renderer=t,this.guidedExperience=i,this.game=new Ln,this.scene.add(this.game),this.game.add($o.mesh),this.abortController.signal.addEventListener("abort",()=>{this.game.clear()},{once:!0})}move(t){const{handedness:i}=t.target.userData,r=`${i}ControllerState`,o=t.target.getObjectByName("line"),s=this.raycasterIntersections.getIntersection(t.target,this.objsToTest);ke.controllers[r]==="selected"&&s&&s.index?(o&&(o.scale.z=s.distance),$o.position=s.point.toArray(),$o.mesh.position.copy(s.point)):o&&(o.scale.z=go)}async initialise(){super.initialise();const t=ks("processedHighArmpit"),i=await yr(t.path),r=Mr(i);if(!r.extent||!r.extent.difference)throw new Error("error");const o=$i(r,"mesh");o.translateY(-r.extent.min.y),this.objsToTest.push(o),this.container=new Ln,this.container.add(o),this.container.scale.set(an,an,an),this.container.translateZ(-1),this.game.add(this.container),this.addToCrossSection(r),ke.controllers.addEventListenerWithAbort(1,"move",this.move.bind(this),this.abortController.signal),ke.controllers.addEventListenerWithAbort(2,"move",this.move.bind(this),this.abortController.signal),this.loaded=!0}render(t,i){this.loaded&&super.render(t,i)}}const sA={[`${Ft.INTRO}`]:tA,[`${Ft.SCAN_VIEW_MODES}`]:ZR,[`${Ft.LANDMARKING_SEGMENTATION}`]:nA,[`${Ft.LANDMARKING_BREAST_DEFINITION}`]:Jl,[`${Ft.BRA_VS_NO_BRA_TOGGLE}`]:Jl,[`${Ft.CHESTWALL_ESTIMATION}`]:oA,[`${Ft.STYLISATION_AND_ANONYMISATION}`]:Zl,[`${Ft.ANIMATION}`]:Zl,[`${Ft.EXIT_PROMPT}`]:iA};class aA{constructor(){ne(this,"scene");ne(this,"camera");ne(this,"cube");const{hemiLight:n}=jn.scene;this.scene=new Ns,this.scene.background=new xe(2236979),this.camera=new $t(60,window.innerWidth/window.innerHeight,.1,10),this.camera.position.z=2;const t=new Sc(n.sky,n.ground);t.position.set(0,20,0),this.scene.add(t),this.cube=new mn(new Li(.3,.3,.3),new Sr({transparent:!0,map:ws})),this.cube.position.set(0,1,-2),this.scene.add(this.cube)}render(n,t){n.render(this.scene,this.camera),this.cube.rotateX(t),this.cube.rotateY(t),this.cube.rotateZ(t)}}const lA=10;class cA{constructor(n){ne(this,"controller1");ne(this,"controller2");ne(this,"controllerGrip1");ne(this,"controllerGrip2");ne(this,"leftControllerState","idle");ne(this,"rightControllerState","idle");ne(this,"noneControllerState","idle");const t=new $n().setFromPoints([new le(0,0,0),new le(0,0,-1)]),i=new Ar(t);i.name="line",i.scale.z=lA,this.controller1=n.xr.getController(0),this.controller1.userData.handedness="left",this.controller1.add(i.clone()),this.controller2=n.xr.getController(1),this.controller2.userData.handedness="right",this.controller2.add(i.clone());const r=new UT;this.controllerGrip1=n.xr.getControllerGrip(0),this.controllerGrip1.add(r.createControllerModel(this.controllerGrip1)),this.controllerGrip2=n.xr.getControllerGrip(1),this.controllerGrip2.add(r.createControllerModel(this.controllerGrip2))}selectstart(n){if(!n.data)return;const t=`${n.data.handedness}ControllerState`;this[t]="selected"}selectend(n){if(!n.data)return;const t=`${n.data.handedness}ControllerState`;this[t]="idle"}addEventListenerWithAbort(n,t,i,r){this[`controller${n}`].addEventListener(t,i),r.addEventListener("abort",()=>{this[`controller${n}`].removeEventListener(t,i)},{once:!0})}}const go=10;class Ro{constructor(){ne(this,"sceneInterface");ne(this,"renderer");ne(this,"clock",new gf);ne(this,"loadingScene");ne(this,"controllers");ne(this,"loading",!0);const n=new tE({antialias:!0});n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.xr.enabled=!0,document.body.appendChild(n.domElement),document.body.appendChild(Yi.createButton(n)),document.body.appendChild(xT.createButton(n)),n.xr.addEventListener("sessionstart",()=>{console.log("session started")}),n.xr.addEventListener("sessionend",function(){console.log("session ended")}),window.addEventListener("resize",this.onWindowResize.bind(this)),this.renderer=n;const t=new cA(n);this.controllers=t}async initialise(){await Promise.all([XT(),qT(),ng(),zR()]),this.loadingScene=new aA,this.renderer.setAnimationLoop(this.render.bind(this))}async switchScene(n){n&&(!this.sceneInterface||this.sceneInterface.guidedExperience.id!==n.id)&&(this.loading=!0,this.sceneInterface&&this.sceneInterface.abortController.abort("Closing scene"),this.sceneInterface=new sA[n.id](this.renderer,n),await this.sceneInterface.initialise(),console.log(`Changed to scene ${n.name}`),setTimeout(()=>{this.loading=!1},5e3))}onWindowResize(){this.sceneInterface.onWindowResize(this.renderer)}render(){const n=this.clock.getDelta();Rf(),this.loading?this.loadingScene.render(this.renderer,n):this.sceneInterface.render(this.renderer,n)}static disposeDescendants(n){n.traverse(t=>{t instanceof mn&&(t.geometry.dispose(),t.material.dispose())})}}const ke=new Ro;export{Ro as SceneLoader,ke as default,go as lineScaleDefault};
