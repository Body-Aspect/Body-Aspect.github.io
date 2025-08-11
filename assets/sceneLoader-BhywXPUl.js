var oh=Object.defineProperty;var sh=(e,n,t)=>n in e?oh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var re=(e,n,t)=>sh(e,typeof n!="symbol"?n+"":n,t);import{c as lh,S as Vn,N as yr,C as fe,F as bf,M as sn,V as ce,R as ch,W as Jr,H as go,U as $r,L as Wr,a as gn,D as Et,B as Tt,b as yi,t as uh,d as fh,p as dh,w as ui,e as ph,E as hh,f as Zn,P as Lr,g as On,A as mh,h as lr,i as eo,j as tl,k as $i,l as Qi,m as Of,n as _h,o as St,q as dn,r as dt,s as Cf,u as gh,v as vh,x as Eh,y as dr,z as Jn,G as ct,I as on,J as Pf,K as Kr,O as ar,Q as Yr,T as no,X as Gi,Y as Th,Z as Sh,_ as Rh,$ as Ah,a0 as yh,a1 as Lh,a2 as xh,a3 as Mh,a4 as Ih,a5 as bh,a6 as Oh,a7 as Ch,a8 as Ph,a9 as Nh,aa as wh,ab as Fh,ac as Dh,ad as Li,ae as to,af as Nf,ag as wf,ah as Ki,ai as cr,aj as Xa,ak as Uh,al as Hh,am as Gh,an as Ff,ao as Bh,ap as kh,aq as Wh,ar as zh,as as Zt,at as Df,au as Uf,av as Hf,aw as ro,ax as Gf,ay as Bf,az as vo,aA as ri,aB as Bl,aC as xn,aD as xi,aE as kf,aF as Wf,aG as zr,aH as io,aI as Ss,aJ as Vh,aK as zf,aL as Xh,aM as Kh,aN as Ka,aO as Eo,aP as Yh,aQ as kl,aR as Wl,aS as zl,aT as qh,aU as Vl,aV as jh,aW as fi,aX as Xl,aY as Zh,aZ as Jh,a_ as $h,a$ as Qh,b0 as em,b1 as nm,b2 as tm,b3 as rm,b4 as im,b5 as Ho,b6 as Go,b7 as Bo,b8 as ko,b9 as Kl,ba as Yl,bb as ql,bc as jl,bd as Zl,be as Jl,bf as $l,bg as Ql,bh as ec,bi as nc,bj as tc,bk as rc,bl as ic,bm as ac,bn as oc,bo as sc,bp as lc,bq as cc,br as uc,bs as fc,bt as dc,bu as Wo,bv as pc,bw as hc,bx as am,by as mc,bz as _c,bA as gc,bB as ea,bC as sr,bD as na,bE as Mi,bF as Dn,bG as om,bH as sm,bI as rl,bJ as vc,bK as lm,bL as Rs,bM as As,bN as ys,bO as Ls,bP as xs,bQ as Ms,bR as Is,bS as cm,bT as um,bU as Vf,bV as il,bW as fm,bX as dm,bY as pm,bZ as hm,b_ as mm,b$ as _m,c0 as gm,c1 as vm,c2 as Em,c3 as Tm,c4 as Sm,c5 as Rm,c6 as Am,c7 as ym,c8 as Lm,c9 as Xf,ca as xm,cb as bs,cc as Kf,cd as To,ce as Mm,cf as Ct,cg as Os,ch as Vr,ci as al,cj as ol,ck as Im,cl as Xn,cm as Ii,cn as ha,co as So,cp as vt,cq as ta,cr as ra,cs as bi,ct as Ro,cu as mi,cv as sl,cw as Ya,cx as bm,cy as ia,cz as Pn,cA as Cs,cB as Yf,cC as ll,cD as Ao,cE as ma,cF as Oi,cG as Om,cH as Cm,cI as Ps,cJ as Pm,cK as rr,cL as Nm,cM as wm,cN as Fm,cO as Dm,cP as cl,cQ as zo,cR as Qr,cS as Um,cT as Hm,cU as yo,cV as qf,cW as Gm,cX as Bm,cY as Lo,cZ as km,c_ as jf,c$ as Zf,d0 as Mt,d1 as aa,d2 as gt,d3 as Ns,d4 as ul,d5 as Wm,d6 as Jf,d7 as zm,d8 as Vm,d9 as Xm,da as Km,db as Ym,dc as qm,dd as Ec,de as Tc,df as jm,dg as ai,dh as Zm,di as Jm}from"./index-lXYJ8VYZ.js";import{guidedExperiences as $f}from"./guided-experiences-Mtb-MZ1O.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qf(){let e=null,n=!1,t=null,r=null;function i(a,o){t(a,o),r=e.requestAnimationFrame(i)}return{start:function(){n!==!0&&t!==null&&(r=e.requestAnimationFrame(i),n=!0)},stop:function(){e.cancelAnimationFrame(r),n=!1},setAnimationLoop:function(a){t=a},setContext:function(a){e=a}}}function $m(e){const n=new WeakMap;function t(s,l){const c=s.array,u=s.usage,f=c.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,c,u),s.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function r(s,l,c){const u=l.array,f=l.updateRanges;if(e.bindBuffer(c,s),f.length===0)e.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],g=f[p];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const g=f[p];e.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(s){return s.isInterleavedBufferAttribute&&(s=s.data),n.get(s)}function a(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=n.get(s);l&&(e.deleteBuffer(l.buffer),n.delete(s))}function o(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const u=n.get(s);(!u||u.version<s.version)&&n.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=n.get(s);if(c===void 0)n.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,s,l),c.version=s.version}}return{get:i,remove:a,update:o}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e_=`#ifdef USE_ALPHAHASH
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
#endif`,n_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,t_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,i_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a_=`#ifdef USE_AOMAP
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
#endif`,o_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s_=`#ifdef USE_BATCHING
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
#endif`,l_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d_=`#ifdef USE_IRIDESCENCE
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
#endif`,p_=`#ifdef USE_BUMPMAP
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
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,__=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,R_=`#define PI 3.141592653589793
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
} // validated`,A_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,y_=`vec3 transformedNormal = objectNormal;
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
#endif`,L_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",O_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C_=`#ifdef USE_ENVMAP
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
#endif`,P_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N_=`#ifdef USE_ENVMAP
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
#endif`,w_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F_=`#ifdef USE_ENVMAP
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
#endif`,D_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,B_=`#ifdef USE_GRADIENTMAP
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
}`,k_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
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
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,K_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
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
#endif`,J_=`struct PhysicalMaterial {
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
}`,$_=`
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ug=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_g=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sg=`#ifdef USE_NORMALMAP
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
#endif`,Rg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ag=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ug=`float getShadowMask() {
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
}`,Hg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gg=`#ifdef USE_SKINNING
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
#endif`,Bg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kg=`#ifdef USE_SKINNING
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
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,qg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
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
}`,ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iv=`#include <common>
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
}`,av=`#if DEPTH_PACKING == 3200
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
}`,ov=`#define DISTANCE
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
}`,sv=`#define DISTANCE
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uv=`uniform float scale;
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
}`,fv=`uniform vec3 diffuse;
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
}`,dv=`#include <common>
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
}`,pv=`uniform vec3 diffuse;
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
}`,hv=`#define LAMBERT
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
}`,mv=`#define LAMBERT
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
}`,_v=`#define MATCAP
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
}`,gv=`#define MATCAP
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
}`,vv=`#define NORMAL
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
}`,Ev=`#define NORMAL
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
}`,Tv=`#define PHONG
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
}`,Sv=`#define PHONG
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
}`,Rv=`#define STANDARD
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
}`,Av=`#define STANDARD
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
}`,yv=`#define TOON
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
}`,Lv=`#define TOON
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
}`,xv=`uniform float size;
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Iv=`#include <common>
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
}`,bv=`uniform vec3 color;
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
}`,Ov=`uniform float rotation;
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
}`,Cv=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Qm,alphahash_pars_fragment:e_,alphamap_fragment:n_,alphamap_pars_fragment:t_,alphatest_fragment:r_,alphatest_pars_fragment:i_,aomap_fragment:a_,aomap_pars_fragment:o_,batching_pars_vertex:s_,batching_vertex:l_,begin_vertex:c_,beginnormal_vertex:u_,bsdfs:f_,iridescence_fragment:d_,bumpmap_pars_fragment:p_,clipping_planes_fragment:h_,clipping_planes_pars_fragment:m_,clipping_planes_pars_vertex:__,clipping_planes_vertex:g_,color_fragment:v_,color_pars_fragment:E_,color_pars_vertex:T_,color_vertex:S_,common:R_,cube_uv_reflection_fragment:A_,defaultnormal_vertex:y_,displacementmap_pars_vertex:L_,displacementmap_vertex:x_,emissivemap_fragment:M_,emissivemap_pars_fragment:I_,colorspace_fragment:b_,colorspace_pars_fragment:O_,envmap_fragment:C_,envmap_common_pars_fragment:P_,envmap_pars_fragment:N_,envmap_pars_vertex:w_,envmap_physical_pars_fragment:X_,envmap_vertex:F_,fog_vertex:D_,fog_pars_vertex:U_,fog_fragment:H_,fog_pars_fragment:G_,gradientmap_pars_fragment:B_,lightmap_pars_fragment:k_,lights_lambert_fragment:W_,lights_lambert_pars_fragment:z_,lights_pars_begin:V_,lights_toon_fragment:K_,lights_toon_pars_fragment:Y_,lights_phong_fragment:q_,lights_phong_pars_fragment:j_,lights_physical_fragment:Z_,lights_physical_pars_fragment:J_,lights_fragment_begin:$_,lights_fragment_maps:Q_,lights_fragment_end:eg,logdepthbuf_fragment:ng,logdepthbuf_pars_fragment:tg,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:ig,map_fragment:ag,map_pars_fragment:og,map_particle_fragment:sg,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:ug,morphinstance_vertex:fg,morphcolor_vertex:dg,morphnormal_vertex:pg,morphtarget_pars_vertex:hg,morphtarget_vertex:mg,normal_fragment_begin:_g,normal_fragment_maps:gg,normal_pars_fragment:vg,normal_pars_vertex:Eg,normal_vertex:Tg,normalmap_pars_fragment:Sg,clearcoat_normal_fragment_begin:Rg,clearcoat_normal_fragment_maps:Ag,clearcoat_pars_fragment:yg,iridescence_pars_fragment:Lg,opaque_fragment:xg,packing:Mg,premultiplied_alpha_fragment:Ig,project_vertex:bg,dithering_fragment:Og,dithering_pars_fragment:Cg,roughnessmap_fragment:Pg,roughnessmap_pars_fragment:Ng,shadowmap_pars_fragment:wg,shadowmap_pars_vertex:Fg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Ug,skinbase_vertex:Hg,skinning_pars_vertex:Gg,skinning_vertex:Bg,skinnormal_vertex:kg,specularmap_fragment:Wg,specularmap_pars_fragment:zg,tonemapping_fragment:Vg,tonemapping_pars_fragment:Xg,transmission_fragment:Kg,transmission_pars_fragment:Yg,uv_pars_fragment:qg,uv_pars_vertex:jg,uv_vertex:Zg,worldpos_vertex:Jg,background_vert:$g,background_frag:Qg,backgroundCube_vert:ev,backgroundCube_frag:nv,cube_vert:tv,cube_frag:rv,depth_vert:iv,depth_frag:av,distanceRGBA_vert:ov,distanceRGBA_frag:sv,equirect_vert:lv,equirect_frag:cv,linedashed_vert:uv,linedashed_frag:fv,meshbasic_vert:dv,meshbasic_frag:pv,meshlambert_vert:hv,meshlambert_frag:mv,meshmatcap_vert:_v,meshmatcap_frag:gv,meshnormal_vert:vv,meshnormal_frag:Ev,meshphong_vert:Tv,meshphong_frag:Sv,meshphysical_vert:Rv,meshphysical_frag:Av,meshtoon_vert:yv,meshtoon_frag:Lv,points_vert:xv,points_frag:Mv,shadow_vert:Iv,shadow_frag:bv,sprite_vert:Ov,sprite_frag:Cv},pe={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dn},alphaMap:{value:null},alphaMapTransform:{value:new dn},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dn}},envmap:{envMap:{value:null},envMapRotation:{value:new dn},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dn}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dn}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dn},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dn},normalScale:{value:new Zn(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dn},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dn}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dn}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dn}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dn},alphaTest:{value:0},uvTransform:{value:new dn}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Zn(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dn},alphaMap:{value:null},alphaMapTransform:{value:new dn},alphaTest:{value:0}}},ht={basic:{uniforms:dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new fe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:dt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:dt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:dt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new fe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:dt([pe.points,pe.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:dt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:dt([pe.common,pe.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:dt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:dt([pe.sprite,pe.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new dn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dn}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:dt([pe.common,pe.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:dt([pe.lights,pe.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ht.physical={uniforms:dt([ht.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dn},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dn},clearcoatNormalScale:{value:new Zn(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dn},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dn},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dn},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dn},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dn},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dn},transmissionSamplerSize:{value:new Zn},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dn},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dn},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dn},anisotropyVector:{value:new Zn},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dn}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Ma={r:0,b:0,g:0},Pr=new sr,Pv=new sn;function Nv(e,n,t,r,i,a,o){const s=new fe(0);let l=a===!0?0:1,c,u,f=null,d=0,p=null;function _(v){let E=v.isScene===!0?v.background:null;return E&&E.isTexture&&(E=(v.backgroundBlurriness>0?t:n).get(E)),E}function g(v){let E=!1;const L=_(v);L===null?h(s,l):L&&L.isColor&&(h(L,1),E=!0);const I=e.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||E)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(v,E){const L=_(E);L&&(L.isCubeTexture||L.mapping===vo)?(u===void 0&&(u=new on(new ri(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:Bl(ht.backgroundCube.uniforms),vertexShader:ht.backgroundCube.vertexShader,fragmentShader:ht.backgroundCube.fragmentShader,side:Tt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,x,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Pr.copy(E.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Pv.makeRotationFromEuler(Pr)),u.material.toneMapped=gn.getTransfer(L.colorSpace)!==xn,(f!==L||d!==L.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,f=L,d=L.version,p=e.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new on(new xi(2,2),new dr({name:"BackgroundMaterial",uniforms:Bl(ht.background.uniforms),vertexShader:ht.background.vertexShader,fragmentShader:ht.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=gn.getTransfer(L.colorSpace)!==xn,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(f!==L||d!==L.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,f=L,d=L.version,p=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function h(v,E){v.getRGB(Ma,kf(e)),r.buffers.color.setClear(Ma.r,Ma.g,Ma.b,E,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return s},setClearColor:function(v,E=1){s.set(v),l=E,h(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,h(s,l)},render:g,addToRenderList:m,dispose:T}}function wv(e,n){const t=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=d(null);let a=i,o=!1;function s(S,C,H,G,V){let q=!1;const k=f(G,H,C);a!==k&&(a=k,c(a.object)),q=p(S,G,H,V),q&&_(S,G,H,V),V!==null&&n.update(V,e.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,E(S,C,H,G),V!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n.get(V).buffer))}function l(){return e.createVertexArray()}function c(S){return e.bindVertexArray(S)}function u(S){return e.deleteVertexArray(S)}function f(S,C,H){const G=H.wireframe===!0;let V=r[S.id];V===void 0&&(V={},r[S.id]=V);let q=V[C.id];q===void 0&&(q={},V[C.id]=q);let k=q[G];return k===void 0&&(k=d(l()),q[G]=k),k}function d(S){const C=[],H=[],G=[];for(let V=0;V<t;V++)C[V]=0,H[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,C,H,G){const V=a.attributes,q=C.attributes;let k=0;const ee=H.getAttributes();for(const X in ee)if(ee[X].location>=0){const me=V[X];let _e=q[X];if(_e===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),me===void 0||me.attribute!==_e||_e&&me.data!==_e.data)return!0;k++}return a.attributesNum!==k||a.index!==G}function _(S,C,H,G){const V={},q=C.attributes;let k=0;const ee=H.getAttributes();for(const X in ee)if(ee[X].location>=0){let me=q[X];me===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(me=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(me=S.instanceColor));const _e={};_e.attribute=me,me&&me.data&&(_e.data=me.data),V[X]=_e,k++}a.attributes=V,a.attributesNum=k,a.index=G}function g(){const S=a.newAttributes;for(let C=0,H=S.length;C<H;C++)S[C]=0}function m(S){h(S,0)}function h(S,C){const H=a.newAttributes,G=a.enabledAttributes,V=a.attributeDivisors;H[S]=1,G[S]===0&&(e.enableVertexAttribArray(S),G[S]=1),V[S]!==C&&(e.vertexAttribDivisor(S,C),V[S]=C)}function T(){const S=a.newAttributes,C=a.enabledAttributes;for(let H=0,G=C.length;H<G;H++)C[H]!==S[H]&&(e.disableVertexAttribArray(H),C[H]=0)}function v(S,C,H,G,V,q,k){k===!0?e.vertexAttribIPointer(S,C,H,V,q):e.vertexAttribPointer(S,C,H,G,V,q)}function E(S,C,H,G){g();const V=G.attributes,q=H.getAttributes(),k=C.defaultAttributeValues;for(const ee in q){const X=q[ee];if(X.location>=0){let le=V[ee];if(le===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const me=le.normalized,_e=le.itemSize,we=n.get(le);if(we===void 0)continue;const de=we.buffer,D=we.type,ie=we.bytesPerElement,ge=D===e.INT||D===e.UNSIGNED_INT||le.gpuType===Wf;if(le.isInterleavedBufferAttribute){const oe=le.data,Pe=oe.stride,Be=le.offset;if(oe.isInstancedInterleavedBuffer){for(let Ke=0;Ke<X.locationSize;Ke++)h(X.location+Ke,oe.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ke=0;Ke<X.locationSize;Ke++)m(X.location+Ke);e.bindBuffer(e.ARRAY_BUFFER,de);for(let Ke=0;Ke<X.locationSize;Ke++)v(X.location+Ke,_e/X.locationSize,D,me,Pe*ie,(Be+_e/X.locationSize*Ke)*ie,ge)}else{if(le.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)h(X.location+oe,le.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let oe=0;oe<X.locationSize;oe++)m(X.location+oe);e.bindBuffer(e.ARRAY_BUFFER,de);for(let oe=0;oe<X.locationSize;oe++)v(X.location+oe,_e/X.locationSize,D,me,_e*ie,_e/X.locationSize*oe*ie,ge)}}else if(k!==void 0){const me=k[ee];if(me!==void 0)switch(me.length){case 2:e.vertexAttrib2fv(X.location,me);break;case 3:e.vertexAttrib3fv(X.location,me);break;case 4:e.vertexAttrib4fv(X.location,me);break;default:e.vertexAttrib1fv(X.location,me)}}}}T()}function L(){b();for(const S in r){const C=r[S];for(const H in C){const G=C[H];for(const V in G)u(G[V].object),delete G[V];delete C[H]}delete r[S]}}function I(S){if(r[S.id]===void 0)return;const C=r[S.id];for(const H in C){const G=C[H];for(const V in G)u(G[V].object),delete G[V];delete C[H]}delete r[S.id]}function x(S){for(const C in r){const H=r[C];if(H[S.id]===void 0)continue;const G=H[S.id];for(const V in G)u(G[V].object),delete G[V];delete H[S.id]}}function b(){A(),o=!0,a!==i&&(a=i,c(a.object))}function A(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:b,resetDefaultState:A,dispose:L,releaseStatesOfGeometry:I,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function Fv(e,n,t){let r;function i(c){r=c}function a(c,u){e.drawArrays(r,c,u),t.update(u,r,1)}function o(c,u,f){f!==0&&(e.drawArraysInstanced(r,c,u,f),t.update(u,r,f))}function s(c,u,f){if(f===0)return;n.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,r,1)}function l(c,u,f,d){if(f===0)return;const p=n.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(r,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g]*d[g];t.update(_,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function Dv(e,n,t,r){let i;function a(){if(i!==void 0)return i;if(n.has("EXT_texture_filter_anisotropic")===!0){const x=n.get("EXT_texture_filter_anisotropic");i=e.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==lr&&r.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(x){const b=x===go&&(n.has("EXT_color_buffer_half_float")||n.has("EXT_color_buffer_float"));return!(x!==$r&&r.convert(x)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&x!==zr&&!b)}function l(x){if(x==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&n.has("EXT_clip_control"),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),h=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),v=e.getParameter(e.MAX_VARYING_VECTORS),E=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,I=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:T,maxVaryings:v,maxFragmentUniforms:E,vertexTextures:L,maxSamples:I}}function Uv(e){const n=this;let t=null,r=0,i=!1,a=!1;const o=new Cf,s=new dn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||r!==0||i;return i=d,r=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=e.get(f);if(!i||_===null||_.length===0||a&&!m)a?u(null):c();else{const T=a?0:r,v=T*4;let E=h.clippingState||null;l.value=E,E=u(_,d,v,p);for(let L=0;L!==v;++L)E[L]=t[L];h.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),n.numPlanes=r,n.numIntersection=0}function u(f,d,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const h=p+g*4,T=d.matrixWorldInverse;s.getNormalMatrix(T),(m===null||m.length<h)&&(m=new Float32Array(h));for(let v=0,E=p;v!==g;++v,E+=4)o.copy(f[v]).applyMatrix4(T,s),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return n.numPlanes=g,n.numIntersection=0,m}}function Hv(e){let n=new WeakMap;function t(o,s){return s===io?o.mapping=na:s===Ss&&(o.mapping=Mi),o}function r(o){if(o&&o.isTexture){const s=o.mapping;if(s===io||s===Ss)if(n.has(o)){const l=n.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Vh(l.height);return c.fromEquirectangularTexture(e,o),n.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const s=o.target;s.removeEventListener("dispose",i);const l=n.get(s);l!==void 0&&(n.delete(s),l.dispose())}function a(){n=new WeakMap}return{get:r,dispose:a}}const di=4,Sc=[.125,.215,.35,.446,.526,.582],Gr=20,Vo=new il,Rc=new fe;let Xo=null,Ko=0,Yo=0,qo=!1;const Hr=(1+Math.sqrt(5))/2,oi=1/Hr,Ac=[new ce(-Hr,oi,0),new ce(Hr,oi,0),new ce(-oi,0,Hr),new ce(oi,0,Hr),new ce(0,Hr,-oi),new ce(0,Hr,oi),new ce(-1,1,-1),new ce(1,1,-1),new ce(-1,1,1),new ce(1,1,1)];class yc{constructor(n){this._renderer=n,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(n,t=0,r=.1,i=100){Xo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(n,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(n,t=null){return this._fromTexture(n,t)}fromCubemap(n,t=null){return this._fromTexture(n,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(n){this._lodMax=Math.floor(Math.log2(n)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let n=0;n<this._lodPlanes.length;n++)this._lodPlanes[n].dispose()}_cleanup(n){this._renderer.setRenderTarget(Xo,Ko,Yo),this._renderer.xr.enabled=qo,n.scissorTest=!1,Ia(n,0,0,n.width,n.height)}_fromTexture(n,t){n.mapping===na||n.mapping===Mi?this._setSize(n.image.length===0?16:n.image[0].width||n.image[0].image.width):this._setSize(n.image.width/4),Xo=this._renderer.getRenderTarget(),Ko=this._renderer.getActiveCubeFace(),Yo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(n,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const n=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:cr,minFilter:cr,generateMipmaps:!1,type:go,format:lr,colorSpace:St,depthBuffer:!1},i=Lc(n,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==n||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lc(n,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gv(a)),this._blurMaterial=Bv(a,n,t)}return i}_compileMaterial(n){const t=new on(this._lodPlanes[0],n);this._renderer.compile(t,Vo)}_sceneToCubeUV(n,t,r,i){const s=new Lr(90,1,t,r),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Rc),u.toneMapping=yr,u.autoClear=!1;const p=new Dn({name:"PMREM.Background",side:Tt,depthWrite:!1,depthTest:!1}),_=new on(new ri,p);let g=!1;const m=n.background;m?m.isColor&&(p.color.copy(m),n.background=null,g=!0):(p.color.copy(Rc),g=!0);for(let h=0;h<6;h++){const T=h%3;T===0?(s.up.set(0,l[h],0),s.lookAt(c[h],0,0)):T===1?(s.up.set(0,0,l[h]),s.lookAt(0,c[h],0)):(s.up.set(0,l[h],0),s.lookAt(0,0,c[h]));const v=this._cubeSize;Ia(i,T*v,h>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,s),u.render(n,s)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,n.background=m}_textureToCubeUV(n,t){const r=this._renderer,i=n.mapping===na||n.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=n.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const a=i?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=n;const l=this._cubeSize;Ia(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(o,Vo)}_applyPMREM(n){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let a=1;a<i;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),s=Ac[(i-a-1)%Ac.length];this._blur(n,a-1,a,o,s)}t.autoClear=r}_blur(n,t,r,i,a){const o=this._pingPongRenderTarget;this._halfBlur(n,o,t,r,i,"latitudinal",a),this._halfBlur(o,n,r,r,i,"longitudinal",a)}_halfBlur(n,t,r,i,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new on(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[r]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Gr-1),g=a/_,m=isFinite(a)?1+Math.floor(u*g):Gr;m>Gr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Gr}`);const h=[];let T=0;for(let x=0;x<Gr;++x){const b=x/g,A=Math.exp(-b*b/2);h.push(A),x===0?T+=A:x<m&&(T+=2*A)}for(let x=0;x<h.length;x++)h[x]=h[x]/T;d.envMap.value=n.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-r;const E=this._sizeLods[i],L=3*E*(i>v-di?i-v+di:0),I=4*(this._cubeSize-E);Ia(t,L,I,3*E,2*E),l.setRenderTarget(t),l.render(f,Vo)}}function Gv(e){const n=[],t=[],r=[];let i=e;const a=e-di+1+Sc.length;for(let o=0;o<a;o++){const s=Math.pow(2,i);t.push(s);let l=1/s;o>e-di?l=Sc[o-e+di-1]:o===0&&(l=0),r.push(l);const c=1/(s-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,h=1,T=new Float32Array(g*_*p),v=new Float32Array(m*_*p),E=new Float32Array(h*_*p);for(let I=0;I<p;I++){const x=I%3*2/3-1,b=I>2?0:-1,A=[x,b,0,x+2/3,b,0,x+2/3,b+1,0,x,b,0,x+2/3,b+1,0,x,b+1,0];T.set(A,g*_*I),v.set(d,m*_*I);const S=[I,I,I,I,I,I];E.set(S,h*_*I)}const L=new Jn;L.setAttribute("position",new ct(T,g)),L.setAttribute("uv",new ct(v,m)),L.setAttribute("faceIndex",new ct(E,h)),n.push(L),i>di&&i--}return{lodPlanes:n,sizeLods:t,sigmas:r}}function Lc(e,n,t){const r=new Jr(e,n,t);return r.texture.mapping=vo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ia(e,n,t,r,i){e.viewport.set(n,t,r,i),e.scissor.set(n,t,r,i)}function Bv(e,n,t){const r=new Float32Array(Gr),i=new ce(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/n,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function xc(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function Mc(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kr,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function kv(e){let n=new WeakMap,t=null;function r(s){if(s&&s.isTexture){const l=s.mapping,c=l===io||l===Ss,u=l===na||l===Mi;if(c||u){let f=n.get(s);const d=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==d)return t===null&&(t=new yc(e)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,n.set(s,f),f.texture;if(f!==void 0)return f.texture;{const p=s.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new yc(e)),f=c?t.fromEquirectangular(s):t.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,n.set(s,f),s.addEventListener("dispose",a),f.texture):null}}}return s}function i(s){let l=0;const c=6;for(let u=0;u<c;u++)s[u]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=n.get(l);c!==void 0&&(n.delete(l),c.dispose())}function o(){n=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:o}}function Wv(e){const n={};function t(r){if(n[r]!==void 0)return n[r];let i;switch(r){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(r)}return n[r]=i,i}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const i=t(r);return i===null&&ui("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function zv(e,n,t,r){const i={},a=new WeakMap;function o(f){const d=f.target;d.index!==null&&n.remove(d.index);for(const _ in d.attributes)n.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];const p=a.get(d);p&&(n.remove(p),a.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)n.update(d[p],e.ARRAY_BUFFER)}function c(f){const d=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const T=p.array;g=p.version;for(let v=0,E=T.length;v<E;v+=3){const L=T[v+0],I=T[v+1],x=T[v+2];d.push(L,I,I,x,x,L)}}else if(_!==void 0){const T=_.array;g=_.version;for(let v=0,E=T.length/3-1;v<E;v+=3){const L=v+0,I=v+1,x=v+2;d.push(L,I,I,x,x,L)}}else return;const m=new(om(d)?sm:rl)(d,1);m.version=g;const h=a.get(f);h&&n.remove(h),a.set(f,m)}function u(f){const d=a.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:u}}function Vv(e,n,t){let r;function i(d){r=d}let a,o;function s(d){a=d.type,o=d.bytesPerElement}function l(d,p){e.drawElements(r,p,a,d*o),t.update(p,r,1)}function c(d,p,_){_!==0&&(e.drawElementsInstanced(r,p,a,d*o,_),t.update(p,r,_))}function u(d,p,_){if(_===0)return;n.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,a,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,r,1)}function f(d,p,_,g){if(_===0)return;const m=n.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)c(d[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(r,p,0,a,d,0,g,0,_);let h=0;for(let T=0;T<_;T++)h+=p[T]*g[T];t.update(h,r,1)}}this.setMode=i,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Xv(e){const n={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,o,s){switch(t.calls++,o){case e.TRIANGLES:t.triangles+=s*(a/3);break;case e.LINES:t.lines+=s*(a/2);break;case e.LINE_STRIP:t.lines+=s*(a-1);break;case e.LINE_LOOP:t.lines+=s*a;break;case e.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:n,render:t,programs:null,autoReset:!0,reset:i,update:r}}function Kv(e,n,t){const r=new WeakMap,i=new On;function a(o,s,l){const c=o.morphTargetInfluences,u=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=u!==void 0?u.length:0;let d=r.get(s);if(d===void 0||d.count!==f){let p=function(){b.dispose(),r.delete(s),s.removeEventListener("dispose",p)};d!==void 0&&d.texture.dispose();const _=s.morphAttributes.position!==void 0,g=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,h=s.morphAttributes.position||[],T=s.morphAttributes.normal||[],v=s.morphAttributes.color||[];let E=0;_===!0&&(E=1),g===!0&&(E=2),m===!0&&(E=3);let L=s.attributes.position.count*E,I=1;L>n.maxTextureSize&&(I=Math.ceil(L/n.maxTextureSize),L=n.maxTextureSize);const x=new Float32Array(L*I*4*f),b=new zf(x,L,I,f);b.type=zr,b.needsUpdate=!0;const A=E*4;for(let S=0;S<f;S++){const C=h[S],H=T[S],G=v[S],V=L*I*4*S;for(let q=0;q<C.count;q++){const k=q*A;_===!0&&(i.fromBufferAttribute(C,q),x[V+k+0]=i.x,x[V+k+1]=i.y,x[V+k+2]=i.z,x[V+k+3]=0),g===!0&&(i.fromBufferAttribute(H,q),x[V+k+4]=i.x,x[V+k+5]=i.y,x[V+k+6]=i.z,x[V+k+7]=0),m===!0&&(i.fromBufferAttribute(G,q),x[V+k+8]=i.x,x[V+k+9]=i.y,x[V+k+10]=i.z,x[V+k+11]=G.itemSize===4?i.w:1)}}d={count:f,texture:b,size:new Zn(L,I)},r.set(s,d),s.addEventListener("dispose",p)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=s.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:a}}function Yv(e,n,t,r){let i=new WeakMap;function a(l){const c=r.render.frame,u=l.geometry,f=n.get(l,u);if(i.get(f)!==c&&(n.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),i.get(l)!==c&&(t.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,e.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function o(){i=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const ed=new ea,Ic=new Of(1,1),nd=new zf,td=new Tm,rd=new Sm,bc=[],Oc=[],Cc=new Float32Array(16),Pc=new Float32Array(9),Nc=new Float32Array(4);function Ni(e,n,t){const r=e[0];if(r<=0||r>0)return e;const i=n*t;let a=bc[i];if(a===void 0&&(a=new Float32Array(i),bc[i]=a),n!==0){r.toArray(a,0);for(let o=1,s=0;o!==n;++o)s+=t,e[o].toArray(a,s)}return a}function Kn(e,n){if(e.length!==n.length)return!1;for(let t=0,r=e.length;t<r;t++)if(e[t]!==n[t])return!1;return!0}function Yn(e,n){for(let t=0,r=n.length;t<r;t++)e[t]=n[t]}function xo(e,n){let t=Oc[n];t===void 0&&(t=new Int32Array(n),Oc[n]=t);for(let r=0;r!==n;++r)t[r]=e.allocateTextureUnit();return t}function qv(e,n){const t=this.cache;t[0]!==n&&(e.uniform1f(this.addr,n),t[0]=n)}function jv(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2f(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Kn(t,n))return;e.uniform2fv(this.addr,n),Yn(t,n)}}function Zv(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3f(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else if(n.r!==void 0)(t[0]!==n.r||t[1]!==n.g||t[2]!==n.b)&&(e.uniform3f(this.addr,n.r,n.g,n.b),t[0]=n.r,t[1]=n.g,t[2]=n.b);else{if(Kn(t,n))return;e.uniform3fv(this.addr,n),Yn(t,n)}}function Jv(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4f(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Kn(t,n))return;e.uniform4fv(this.addr,n),Yn(t,n)}}function $v(e,n){const t=this.cache,r=n.elements;if(r===void 0){if(Kn(t,n))return;e.uniformMatrix2fv(this.addr,!1,n),Yn(t,n)}else{if(Kn(t,r))return;Nc.set(r),e.uniformMatrix2fv(this.addr,!1,Nc),Yn(t,r)}}function Qv(e,n){const t=this.cache,r=n.elements;if(r===void 0){if(Kn(t,n))return;e.uniformMatrix3fv(this.addr,!1,n),Yn(t,n)}else{if(Kn(t,r))return;Pc.set(r),e.uniformMatrix3fv(this.addr,!1,Pc),Yn(t,r)}}function eE(e,n){const t=this.cache,r=n.elements;if(r===void 0){if(Kn(t,n))return;e.uniformMatrix4fv(this.addr,!1,n),Yn(t,n)}else{if(Kn(t,r))return;Cc.set(r),e.uniformMatrix4fv(this.addr,!1,Cc),Yn(t,r)}}function nE(e,n){const t=this.cache;t[0]!==n&&(e.uniform1i(this.addr,n),t[0]=n)}function tE(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2i(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Kn(t,n))return;e.uniform2iv(this.addr,n),Yn(t,n)}}function rE(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3i(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Kn(t,n))return;e.uniform3iv(this.addr,n),Yn(t,n)}}function iE(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4i(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Kn(t,n))return;e.uniform4iv(this.addr,n),Yn(t,n)}}function aE(e,n){const t=this.cache;t[0]!==n&&(e.uniform1ui(this.addr,n),t[0]=n)}function oE(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y)&&(e.uniform2ui(this.addr,n.x,n.y),t[0]=n.x,t[1]=n.y);else{if(Kn(t,n))return;e.uniform2uiv(this.addr,n),Yn(t,n)}}function sE(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z)&&(e.uniform3ui(this.addr,n.x,n.y,n.z),t[0]=n.x,t[1]=n.y,t[2]=n.z);else{if(Kn(t,n))return;e.uniform3uiv(this.addr,n),Yn(t,n)}}function lE(e,n){const t=this.cache;if(n.x!==void 0)(t[0]!==n.x||t[1]!==n.y||t[2]!==n.z||t[3]!==n.w)&&(e.uniform4ui(this.addr,n.x,n.y,n.z,n.w),t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.w);else{if(Kn(t,n))return;e.uniform4uiv(this.addr,n),Yn(t,n)}}function cE(e,n,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Ic.compareFunction=Ff,a=Ic):a=ed,t.setTexture2D(n||a,i)}function uE(e,n,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(n||td,i)}function fE(e,n,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(n||rd,i)}function dE(e,n,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(n||nd,i)}function pE(e){switch(e){case 5126:return qv;case 35664:return jv;case 35665:return Zv;case 35666:return Jv;case 35674:return $v;case 35675:return Qv;case 35676:return eE;case 5124:case 35670:return nE;case 35667:case 35671:return tE;case 35668:case 35672:return rE;case 35669:case 35673:return iE;case 5125:return aE;case 36294:return oE;case 36295:return sE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return fE;case 36289:case 36303:case 36311:case 36292:return dE}}function hE(e,n){e.uniform1fv(this.addr,n)}function mE(e,n){const t=Ni(n,this.size,2);e.uniform2fv(this.addr,t)}function _E(e,n){const t=Ni(n,this.size,3);e.uniform3fv(this.addr,t)}function gE(e,n){const t=Ni(n,this.size,4);e.uniform4fv(this.addr,t)}function vE(e,n){const t=Ni(n,this.size,4);e.uniformMatrix2fv(this.addr,!1,t)}function EE(e,n){const t=Ni(n,this.size,9);e.uniformMatrix3fv(this.addr,!1,t)}function TE(e,n){const t=Ni(n,this.size,16);e.uniformMatrix4fv(this.addr,!1,t)}function SE(e,n){e.uniform1iv(this.addr,n)}function RE(e,n){e.uniform2iv(this.addr,n)}function AE(e,n){e.uniform3iv(this.addr,n)}function yE(e,n){e.uniform4iv(this.addr,n)}function LE(e,n){e.uniform1uiv(this.addr,n)}function xE(e,n){e.uniform2uiv(this.addr,n)}function ME(e,n){e.uniform3uiv(this.addr,n)}function IE(e,n){e.uniform4uiv(this.addr,n)}function bE(e,n,t){const r=this.cache,i=n.length,a=xo(t,i);Kn(r,a)||(e.uniform1iv(this.addr,a),Yn(r,a));for(let o=0;o!==i;++o)t.setTexture2D(n[o]||ed,a[o])}function OE(e,n,t){const r=this.cache,i=n.length,a=xo(t,i);Kn(r,a)||(e.uniform1iv(this.addr,a),Yn(r,a));for(let o=0;o!==i;++o)t.setTexture3D(n[o]||td,a[o])}function CE(e,n,t){const r=this.cache,i=n.length,a=xo(t,i);Kn(r,a)||(e.uniform1iv(this.addr,a),Yn(r,a));for(let o=0;o!==i;++o)t.setTextureCube(n[o]||rd,a[o])}function PE(e,n,t){const r=this.cache,i=n.length,a=xo(t,i);Kn(r,a)||(e.uniform1iv(this.addr,a),Yn(r,a));for(let o=0;o!==i;++o)t.setTexture2DArray(n[o]||nd,a[o])}function NE(e){switch(e){case 5126:return hE;case 35664:return mE;case 35665:return _E;case 35666:return gE;case 35674:return vE;case 35675:return EE;case 35676:return TE;case 5124:case 35670:return SE;case 35667:case 35671:return RE;case 35668:case 35672:return AE;case 35669:case 35673:return yE;case 5125:return LE;case 36294:return xE;case 36295:return ME;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return OE;case 35680:case 36300:case 36308:case 36293:return CE;case 36289:case 36303:case 36311:case 36292:return PE}}class wE{constructor(n,t,r){this.id=n,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pE(t.type)}}class FE{constructor(n,t,r){this.id=n,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=NE(t.type)}}class DE{constructor(n){this.id=n,this.seq=[],this.map={}}setValue(n,t,r){const i=this.seq;for(let a=0,o=i.length;a!==o;++a){const s=i[a];s.setValue(n,t[s.id],r)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function wc(e,n){e.seq.push(n),e.map[n.id]=n}function UE(e,n,t){const r=e.name,i=r.length;for(jo.lastIndex=0;;){const a=jo.exec(r),o=jo.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===i){wc(t,c===void 0?new wE(s,e,n):new FE(s,e,n));break}else{let f=t.map[s];f===void 0&&(f=new DE(s),wc(t,f)),t=f}}}class qa{constructor(n,t){this.seq=[],this.map={};const r=n.getProgramParameter(t,n.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=n.getActiveUniform(t,i),o=n.getUniformLocation(t,a.name);UE(a,o,this)}}setValue(n,t,r,i){const a=this.map[t];a!==void 0&&a.setValue(n,r,i)}setOptional(n,t,r){const i=t[r];i!==void 0&&this.setValue(n,r,i)}static upload(n,t,r,i){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=r[s.id];l.needsUpdate!==!1&&s.setValue(n,l.value,i)}}static seqWithValue(n,t){const r=[];for(let i=0,a=n.length;i!==a;++i){const o=n[i];o.id in t&&r.push(o)}return r}}function Fc(e,n,t){const r=e.createShader(n);return e.shaderSource(r,t),e.compileShader(r),r}const HE=37297;let GE=0;function BE(e,n){const t=e.split(`
`),r=[],i=Math.max(n-6,0),a=Math.min(n+6,t.length);for(let o=i;o<a;o++){const s=o+1;r.push(`${s===n?">":" "} ${s}: ${t[o]}`)}return r.join(`
`)}const Dc=new dn;function kE(e){gn._getMatrix(Dc,gn.workingColorSpace,e);const n=`mat3( ${Dc.elements.map(t=>t.toFixed(4))} )`;switch(gn.getTransfer(e)){case Vf:return[n,"LinearTransferOETF"];case xn:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[n,"LinearTransferOETF"]}}function Uc(e,n,t){const r=e.getShaderParameter(n,e.COMPILE_STATUS),i=e.getShaderInfoLog(n).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+BE(e.getShaderSource(n),o)}else return i}function WE(e,n){const t=kE(n);return[`vec4 ${e}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function zE(e,n){let t;switch(n){case gm:t="Linear";break;case _m:t="Reinhard";break;case mm:t="Cineon";break;case hm:t="ACESFilmic";break;case pm:t="AgX";break;case dm:t="Neutral";break;case fm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",n),t="Linear"}return"vec3 "+e+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ba=new ce;function VE(){gn.getLuminanceCoefficients(ba);const e=ba.x.toFixed(4),n=ba.y.toFixed(4),t=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${n}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XE(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function KE(e){const n=[];for(const t in e){const r=e[t];r!==!1&&n.push("#define "+t+" "+r)}return n.join(`
`)}function YE(e,n){const t={},r=e.getProgramParameter(n,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=e.getActiveAttrib(n,i),o=a.name;let s=1;a.type===e.FLOAT_MAT2&&(s=2),a.type===e.FLOAT_MAT3&&(s=3),a.type===e.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:e.getAttribLocation(n,o),locationSize:s}}return t}function Yi(e){return e!==""}function Hc(e,n){const t=n.numSpotLightShadows+n.numSpotLightMaps-n.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,n.numDirLights).replace(/NUM_SPOT_LIGHTS/g,n.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,n.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,n.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,n.numPointLights).replace(/NUM_HEMI_LIGHTS/g,n.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,n.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,n.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,n.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,n.numPointLightShadows)}function Gc(e,n){return e.replace(/NUM_CLIPPING_PLANES/g,n.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,n.numClippingPlanes-n.numClipIntersection)}const qE=/^[ \t]*#include +<([\w\d./]+)>/gm;function ws(e){return e.replace(qE,ZE)}const jE=new Map;function ZE(e,n){let t=Qe[n];if(t===void 0){const r=jE.get(n);if(r!==void 0)t=Qe[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',n,r);else throw new Error("Can not resolve #include <"+n+">")}return ws(t)}const JE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(e){return e.replace(JE,$E)}function $E(e,n,t,r){let i="";for(let a=parseInt(n);a<parseInt(t);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function kc(e){let n=`precision ${e.precision} float;
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
#define LOW_PRECISION`),n}function QE(e){let n="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Pf?n="SHADOWMAP_TYPE_PCF":e.shadowMapType===vm?n="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===ar&&(n="SHADOWMAP_TYPE_VSM"),n}function eT(e){let n="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case na:case Mi:n="ENVMAP_TYPE_CUBE";break;case vo:n="ENVMAP_TYPE_CUBE_UV";break}return n}function nT(e){let n="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Mi:n="ENVMAP_MODE_REFRACTION";break}return n}function tT(e){let n="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case ym:n="ENVMAP_BLENDING_MULTIPLY";break;case Am:n="ENVMAP_BLENDING_MIX";break;case Rm:n="ENVMAP_BLENDING_ADD";break}return n}function rT(e){const n=e.envMapCubeUVHeight;if(n===null)return null;const t=Math.log2(n)-2,r=1/n;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function iT(e,n,t,r){const i=e.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=QE(t),c=eT(t),u=nT(t),f=tT(t),d=rT(t),p=XE(t),_=KE(a),g=i.createProgram();let m,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Yi).join(`
`),h.length>0&&(h+=`
`)):(m=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),h=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yr?"#define TONE_MAPPING":"",t.toneMapping!==yr?Qe.tonemapping_pars_fragment:"",t.toneMapping!==yr?zE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,WE("linearToOutputTexel",t.outputColorSpace),VE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),o=ws(o),o=Hc(o,t),o=Gc(o,t),s=ws(s),s=Hc(s,t),s=Gc(s,t),o=Bc(o),s=Bc(s),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const v=T+m+o,E=T+h+s,L=Fc(i,i.VERTEX_SHADER,v),I=Fc(i,i.FRAGMENT_SHADER,E);i.attachShader(g,L),i.attachShader(g,I),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function x(C){if(e.debug.checkShaderErrors){const H=i.getProgramInfoLog(g).trim(),G=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(I).trim();let q=!0,k=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(q=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(i,g,L,I);else{const ee=Uc(i,L,"vertex"),X=Uc(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+ee+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(G===""||V==="")&&(k=!1);k&&(C.diagnostics={runnable:q,programLog:H,vertexShader:{log:G,prefix:m},fragmentShader:{log:V,prefix:h}})}i.deleteShader(L),i.deleteShader(I),b=new qa(i,g),A=YE(i,g)}let b;this.getUniforms=function(){return b===void 0&&x(this),b};let A;this.getAttributes=function(){return A===void 0&&x(this),A};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(g,HE)),S},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GE++,this.cacheKey=n,this.usedTimes=1,this.program=g,this.vertexShader=L,this.fragmentShader=I,this}let aT=0;class oT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(n){const t=n.vertexShader,r=n.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),o=this._getShaderCacheForMaterial(n);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(n){const t=this.materialCache.get(n);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(n),this}getVertexShaderID(n){return this._getShaderStage(n.vertexShader).id}getFragmentShaderID(n){return this._getShaderStage(n.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(n){const t=this.materialCache;let r=t.get(n);return r===void 0&&(r=new Set,t.set(n,r)),r}_getShaderStage(n){const t=this.shaderCache;let r=t.get(n);return r===void 0&&(r=new sT(n),t.set(n,r)),r}}class sT{constructor(n){this.id=aT++,this.code=n,this.usedTimes=0}}function lT(e,n,t,r,i,a,o){const s=new lm,l=new oT,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(A){return c.add(A),A===0?"uv":`uv${A}`}function m(A,S,C,H,G){const V=H.fog,q=G.geometry,k=A.isMeshStandardMaterial?H.environment:null,ee=(A.isMeshStandardMaterial?t:n).get(A.envMap||k),X=ee&&ee.mapping===vo?ee.image.height:null,le=_[A.type];A.precision!==null&&(p=i.getMaxPrecision(A.precision),p!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const me=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_e=me!==void 0?me.length:0;let we=0;q.morphAttributes.position!==void 0&&(we=1),q.morphAttributes.normal!==void 0&&(we=2),q.morphAttributes.color!==void 0&&(we=3);let de,D,ie,ge;if(le){const vn=ht[le];de=vn.vertexShader,D=vn.fragmentShader}else de=A.vertexShader,D=A.fragmentShader,l.update(A),ie=l.getVertexShaderID(A),ge=l.getFragmentShaderID(A);const oe=e.getRenderTarget(),Pe=e.state.buffers.depth.getReversed(),Be=G.isInstancedMesh===!0,Ke=G.isBatchedMesh===!0,hn=!!A.map,en=!!A.matcap,An=!!ee,P=!!A.aoMap,ut=!!A.lightMap,an=!!A.bumpMap,tn=!!A.normalMap,He=!!A.displacementMap,Tn=!!A.emissiveMap,De=!!A.metalnessMap,M=!!A.roughnessMap,R=A.anisotropy>0,W=A.clearcoat>0,J=A.dispersion>0,te=A.iridescence>0,j=A.sheen>0,Ue=A.transmission>0,Te=R&&!!A.anisotropyMap,xe=W&&!!A.clearcoatMap,un=W&&!!A.clearcoatNormalMap,ue=W&&!!A.clearcoatRoughnessMap,be=te&&!!A.iridescenceMap,ze=te&&!!A.iridescenceThicknessMap,Ye=j&&!!A.sheenColorMap,Oe=j&&!!A.sheenRoughnessMap,ln=!!A.specularMap,$e=!!A.specularColorMap,yn=!!A.specularIntensityMap,N=Ue&&!!A.transmissionMap,ve=Ue&&!!A.thicknessMap,Y=!!A.gradientMap,$=!!A.alphaMap,Ae=A.alphaTest>0,Se=!!A.alphaHash,Ze=!!A.extensions;let Nn=yr;A.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Nn=e.toneMapping);const tt={shaderID:le,shaderType:A.type,shaderName:A.name,vertexShader:de,fragmentShader:D,defines:A.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Ke,batchingColor:Ke&&G._colorsTexture!==null,instancing:Be,instancingColor:Be&&G.instanceColor!==null,instancingMorph:Be&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?e.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:St,alphaToCoverage:!!A.alphaToCoverage,map:hn,matcap:en,envMap:An,envMapMode:An&&ee.mapping,envMapCubeUVHeight:X,aoMap:P,lightMap:ut,bumpMap:an,normalMap:tn,displacementMap:d&&He,emissiveMap:Tn,normalMapObjectSpace:tn&&A.normalMapType===Xh,normalMapTangentSpace:tn&&A.normalMapType===Kh,metalnessMap:De,roughnessMap:M,anisotropy:R,anisotropyMap:Te,clearcoat:W,clearcoatMap:xe,clearcoatNormalMap:un,clearcoatRoughnessMap:ue,dispersion:J,iridescence:te,iridescenceMap:be,iridescenceThicknessMap:ze,sheen:j,sheenColorMap:Ye,sheenRoughnessMap:Oe,specularMap:ln,specularColorMap:$e,specularIntensityMap:yn,transmission:Ue,transmissionMap:N,thicknessMap:ve,gradientMap:Y,opaque:A.transparent===!1&&A.blending===Ka&&A.alphaToCoverage===!1,alphaMap:$,alphaTest:Ae,alphaHash:Se,combine:A.combine,mapUv:hn&&g(A.map.channel),aoMapUv:P&&g(A.aoMap.channel),lightMapUv:ut&&g(A.lightMap.channel),bumpMapUv:an&&g(A.bumpMap.channel),normalMapUv:tn&&g(A.normalMap.channel),displacementMapUv:He&&g(A.displacementMap.channel),emissiveMapUv:Tn&&g(A.emissiveMap.channel),metalnessMapUv:De&&g(A.metalnessMap.channel),roughnessMapUv:M&&g(A.roughnessMap.channel),anisotropyMapUv:Te&&g(A.anisotropyMap.channel),clearcoatMapUv:xe&&g(A.clearcoatMap.channel),clearcoatNormalMapUv:un&&g(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&g(A.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&g(A.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&g(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&g(A.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&g(A.sheenRoughnessMap.channel),specularMapUv:ln&&g(A.specularMap.channel),specularColorMapUv:$e&&g(A.specularColorMap.channel),specularIntensityMapUv:yn&&g(A.specularIntensityMap.channel),transmissionMapUv:N&&g(A.transmissionMap.channel),thicknessMapUv:ve&&g(A.thicknessMap.channel),alphaMapUv:$&&g(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(tn||R),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!q.attributes.uv&&(hn||$),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pe,skinning:G.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:we,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:Nn,decodeVideoTexture:hn&&A.map.isVideoTexture===!0&&gn.getTransfer(A.map.colorSpace)===xn,decodeVideoTextureEmissive:Tn&&A.emissiveMap.isVideoTexture===!0&&gn.getTransfer(A.emissiveMap.colorSpace)===xn,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Et,flipSided:A.side===Tt,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ze&&A.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&A.extensions.multiDraw===!0||Ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function h(A){const S=[];if(A.shaderID?S.push(A.shaderID):(S.push(A.customVertexShaderID),S.push(A.customFragmentShaderID)),A.defines!==void 0)for(const C in A.defines)S.push(C),S.push(A.defines[C]);return A.isRawShaderMaterial===!1&&(T(S,A),v(S,A),S.push(e.outputColorSpace)),S.push(A.customProgramCacheKey),S.join()}function T(A,S){A.push(S.precision),A.push(S.outputColorSpace),A.push(S.envMapMode),A.push(S.envMapCubeUVHeight),A.push(S.mapUv),A.push(S.alphaMapUv),A.push(S.lightMapUv),A.push(S.aoMapUv),A.push(S.bumpMapUv),A.push(S.normalMapUv),A.push(S.displacementMapUv),A.push(S.emissiveMapUv),A.push(S.metalnessMapUv),A.push(S.roughnessMapUv),A.push(S.anisotropyMapUv),A.push(S.clearcoatMapUv),A.push(S.clearcoatNormalMapUv),A.push(S.clearcoatRoughnessMapUv),A.push(S.iridescenceMapUv),A.push(S.iridescenceThicknessMapUv),A.push(S.sheenColorMapUv),A.push(S.sheenRoughnessMapUv),A.push(S.specularMapUv),A.push(S.specularColorMapUv),A.push(S.specularIntensityMapUv),A.push(S.transmissionMapUv),A.push(S.thicknessMapUv),A.push(S.combine),A.push(S.fogExp2),A.push(S.sizeAttenuation),A.push(S.morphTargetsCount),A.push(S.morphAttributeCount),A.push(S.numDirLights),A.push(S.numPointLights),A.push(S.numSpotLights),A.push(S.numSpotLightMaps),A.push(S.numHemiLights),A.push(S.numRectAreaLights),A.push(S.numDirLightShadows),A.push(S.numPointLightShadows),A.push(S.numSpotLightShadows),A.push(S.numSpotLightShadowsWithMaps),A.push(S.numLightProbes),A.push(S.shadowMapType),A.push(S.toneMapping),A.push(S.numClippingPlanes),A.push(S.numClipIntersection),A.push(S.depthPacking)}function v(A,S){s.disableAll(),S.supportsVertexTextures&&s.enable(0),S.instancing&&s.enable(1),S.instancingColor&&s.enable(2),S.instancingMorph&&s.enable(3),S.matcap&&s.enable(4),S.envMap&&s.enable(5),S.normalMapObjectSpace&&s.enable(6),S.normalMapTangentSpace&&s.enable(7),S.clearcoat&&s.enable(8),S.iridescence&&s.enable(9),S.alphaTest&&s.enable(10),S.vertexColors&&s.enable(11),S.vertexAlphas&&s.enable(12),S.vertexUv1s&&s.enable(13),S.vertexUv2s&&s.enable(14),S.vertexUv3s&&s.enable(15),S.vertexTangents&&s.enable(16),S.anisotropy&&s.enable(17),S.alphaHash&&s.enable(18),S.batching&&s.enable(19),S.dispersion&&s.enable(20),S.batchingColor&&s.enable(21),A.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reverseDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),A.push(s.mask)}function E(A){const S=_[A.type];let C;if(S){const H=ht[S];C=Eo.clone(H.uniforms)}else C=A.uniforms;return C}function L(A,S){let C;for(let H=0,G=u.length;H<G;H++){const V=u[H];if(V.cacheKey===S){C=V,++C.usedTimes;break}}return C===void 0&&(C=new iT(e,S,A,a),u.push(C)),C}function I(A){if(--A.usedTimes===0){const S=u.indexOf(A);u[S]=u[u.length-1],u.pop(),A.destroy()}}function x(A){l.remove(A)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:E,acquireProgram:L,releaseProgram:I,releaseShaderCache:x,programs:u,dispose:b}}function cT(){let e=new WeakMap;function n(o){return e.has(o)}function t(o){let s=e.get(o);return s===void 0&&(s={},e.set(o,s)),s}function r(o){e.delete(o)}function i(o,s,l){e.get(o)[s]=l}function a(){e=new WeakMap}return{has:n,get:t,remove:r,update:i,dispose:a}}function uT(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.material.id!==n.material.id?e.material.id-n.material.id:e.z!==n.z?e.z-n.z:e.id-n.id}function Wc(e,n){return e.groupOrder!==n.groupOrder?e.groupOrder-n.groupOrder:e.renderOrder!==n.renderOrder?e.renderOrder-n.renderOrder:e.z!==n.z?n.z-e.z:e.id-n.id}function zc(){const e=[];let n=0;const t=[],r=[],i=[];function a(){n=0,t.length=0,r.length=0,i.length=0}function o(f,d,p,_,g,m){let h=e[n];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},e[n]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=g,h.group=m),n++,h}function s(f,d,p,_,g,m){const h=o(f,d,p,_,g,m);p.transmission>0?r.push(h):p.transparent===!0?i.push(h):t.push(h)}function l(f,d,p,_,g,m){const h=o(f,d,p,_,g,m);p.transmission>0?r.unshift(h):p.transparent===!0?i.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||uT),r.length>1&&r.sort(d||Wc),i.length>1&&i.sort(d||Wc)}function u(){for(let f=n,d=e.length;f<d;f++){const p=e[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:i,init:a,push:s,unshift:l,finish:u,sort:c}}function fT(){let e=new WeakMap;function n(r,i){const a=e.get(r);let o;return a===void 0?(o=new zc,e.set(r,[o])):i>=a.length?(o=new zc,a.push(o)):o=a[i],o}function t(){e=new WeakMap}return{get:n,dispose:t}}function dT(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={direction:new ce,color:new fe};break;case"SpotLight":t={position:new ce,direction:new ce,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return e[n.id]=t,t}}}function pT(){const e={};return{get:function(n){if(e[n.id]!==void 0)return e[n.id];let t;switch(n.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zn};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zn};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Zn,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[n.id]=t,t}}}let hT=0;function mT(e,n){return(n.castShadow?2:0)-(e.castShadow?2:0)+(n.map?1:0)-(e.map?1:0)}function _T(e){const n=new dT,t=pT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new ce);const i=new ce,a=new sn,o=new sn;function s(c){let u=0,f=0,d=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let p=0,_=0,g=0,m=0,h=0,T=0,v=0,E=0,L=0,I=0,x=0;c.sort(mT);for(let A=0,S=c.length;A<S;A++){const C=c[A],H=C.color,G=C.intensity,V=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=H.r*G,f+=H.g*G,d+=H.b*G;else if(C.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(C.sh.coefficients[k],G);x++}else if(C.isDirectionalLight){const k=n.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const ee=C.shadow,X=t.get(C);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,r.directionalShadow[p]=X,r.directionalShadowMap[p]=q,r.directionalShadowMatrix[p]=C.shadow.matrix,T++}r.directional[p]=k,p++}else if(C.isSpotLight){const k=n.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(H).multiplyScalar(G),k.distance=V,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,r.spot[g]=k;const ee=C.shadow;if(C.map&&(r.spotLightMap[L]=C.map,L++,ee.updateMatrices(C),C.castShadow&&I++),r.spotLightMatrix[g]=ee.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,r.spotShadow[g]=X,r.spotShadowMap[g]=q,E++}g++}else if(C.isRectAreaLight){const k=n.get(C);k.color.copy(H).multiplyScalar(G),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),r.rectArea[m]=k,m++}else if(C.isPointLight){const k=n.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const ee=C.shadow,X=t.get(C);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,r.pointShadow[_]=X,r.pointShadowMap[_]=q,r.pointShadowMatrix[_]=C.shadow.matrix,v++}r.point[_]=k,_++}else if(C.isHemisphereLight){const k=n.get(C);k.skyColor.copy(C.color).multiplyScalar(G),k.groundColor.copy(C.groundColor).multiplyScalar(G),r.hemi[h]=k,h++}}m>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=f,r.ambient[2]=d;const b=r.hash;(b.directionalLength!==p||b.pointLength!==_||b.spotLength!==g||b.rectAreaLength!==m||b.hemiLength!==h||b.numDirectionalShadows!==T||b.numPointShadows!==v||b.numSpotShadows!==E||b.numSpotMaps!==L||b.numLightProbes!==x)&&(r.directional.length=p,r.spot.length=g,r.rectArea.length=m,r.point.length=_,r.hemi.length=h,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=v,r.pointShadowMap.length=v,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=v,r.spotLightMatrix.length=E+L-I,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=x,b.directionalLength=p,b.pointLength=_,b.spotLength=g,b.rectAreaLength=m,b.hemiLength=h,b.numDirectionalShadows=T,b.numPointShadows=v,b.numSpotShadows=E,b.numSpotMaps=L,b.numLightProbes=x,r.version=hT++)}function l(c,u){let f=0,d=0,p=0,_=0,g=0;const m=u.matrixWorldInverse;for(let h=0,T=c.length;h<T;h++){const v=c[h];if(v.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),f++}else if(v.isSpotLight){const E=r.spot[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(i),E.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),o.identity(),a.copy(v.matrixWorld),a.premultiply(m),o.extractRotation(a),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const E=r.hemi[g];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:s,setupView:l,state:r}}function Vc(e){const n=new _T(e),t=[],r=[];function i(u){c.camera=u,t.length=0,r.length=0}function a(u){t.push(u)}function o(u){r.push(u)}function s(){n.setup(t)}function l(u){n.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:n,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:s,setupLightsView:l,pushLight:a,pushShadow:o}}function gT(e){let n=new WeakMap;function t(i,a=0){const o=n.get(i);let s;return o===void 0?(s=new Vc(e),n.set(i,[s])):a>=o.length?(s=new Vc(e),o.push(s)):s=o[a],s}function r(){n=new WeakMap}return{get:t,dispose:r}}const vT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ET=`uniform sampler2D shadow_pass;
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
}`;function TT(e,n,t){let r=new bf;const i=new Zn,a=new Zn,o=new On,s=new gh({depthPacking:vh}),l=new Eh,c={},u=t.maxTextureSize,f={[yi]:Tt,[Tt]:yi,[Et]:Et},d=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Zn},radius:{value:4}},vertexShader:vT,fragmentShader:ET}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Jn;_.setAttribute("position",new ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new on(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pf;let h=this.type;this.render=function(I,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const A=e.getRenderTarget(),S=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),H=e.state;H.setBlending(Kr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=h!==ar&&this.type===ar,V=h===ar&&this.type!==ar;for(let q=0,k=I.length;q<k;q++){const ee=I[q],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const le=X.getFrameExtents();if(i.multiply(le),a.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/le.x),i.x=a.x*le.x,X.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/le.y),i.y=a.y*le.y,X.mapSize.y=a.y)),X.map===null||G===!0||V===!0){const _e=this.type!==ar?{minFilter:Yr,magFilter:Yr}:{};X.map!==null&&X.map.dispose(),X.map=new Jr(i.x,i.y,_e),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();const me=X.getViewportCount();for(let _e=0;_e<me;_e++){const we=X.getViewport(_e);o.set(a.x*we.x,a.y*we.y,a.x*we.z,a.y*we.w),H.viewport(o),X.updateMatrices(ee,_e),r=X.getFrustum(),E(x,b,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===ar&&T(X,b),X.needsUpdate=!1}h=this.type,m.needsUpdate=!1,e.setRenderTarget(A,S,C)};function T(I,x){const b=n.update(g);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Jr(i.x,i.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,e.setRenderTarget(I.mapPass),e.clear(),e.renderBufferDirect(x,null,b,d,g,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,e.setRenderTarget(I.map),e.clear(),e.renderBufferDirect(x,null,b,p,g,null)}function v(I,x,b,A){let S=null;const C=b.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(C!==void 0)S=C;else if(S=b.isPointLight===!0?l:s,e.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const H=S.uuid,G=x.uuid;let V=c[H];V===void 0&&(V={},c[H]=V);let q=V[G];q===void 0&&(q=S.clone(),V[G]=q,x.addEventListener("dispose",L)),S=q}if(S.visible=x.visible,S.wireframe=x.wireframe,A===ar?S.side=x.shadowSide!==null?x.shadowSide:x.side:S.side=x.shadowSide!==null?x.shadowSide:f[x.side],S.alphaMap=x.alphaMap,S.alphaTest=x.alphaTest,S.map=x.map,S.clipShadows=x.clipShadows,S.clippingPlanes=x.clippingPlanes,S.clipIntersection=x.clipIntersection,S.displacementMap=x.displacementMap,S.displacementScale=x.displacementScale,S.displacementBias=x.displacementBias,S.wireframeLinewidth=x.wireframeLinewidth,S.linewidth=x.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=e.properties.get(S);H.light=b}return S}function E(I,x,b,A,S){if(I.visible===!1)return;if(I.layers.test(x.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&S===ar)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,I.matrixWorld);const G=n.update(I),V=I.material;if(Array.isArray(V)){const q=G.groups;for(let k=0,ee=q.length;k<ee;k++){const X=q[k],le=V[X.materialIndex];if(le&&le.visible){const me=v(I,le,A,S);I.onBeforeShadow(e,I,x,b,G,me,X),e.renderBufferDirect(b,null,G,me,I,X),I.onAfterShadow(e,I,x,b,G,me,X)}}}else if(V.visible){const q=v(I,V,A,S);I.onBeforeShadow(e,I,x,b,G,q,null),e.renderBufferDirect(b,null,G,q,I,null),I.onAfterShadow(e,I,x,b,G,q,null)}}const H=I.children;for(let G=0,V=H.length;G<V;G++)E(H[G],x,b,A,S)}function L(I){I.target.removeEventListener("dispose",L);for(const b in c){const A=c[b],S=I.target.uuid;S in A&&(A[S].dispose(),delete A[S])}}}const ST={[Is]:Ms,[xs]:As,[Ls]:Rs,[no]:ys,[Ms]:Is,[As]:xs,[Rs]:Ls,[ys]:no};function RT(e,n){function t(){let N=!1;const ve=new On;let Y=null;const $=new On(0,0,0,0);return{setMask:function(Ae){Y!==Ae&&!N&&(e.colorMask(Ae,Ae,Ae,Ae),Y=Ae)},setLocked:function(Ae){N=Ae},setClear:function(Ae,Se,Ze,Nn,tt){tt===!0&&(Ae*=Nn,Se*=Nn,Ze*=Nn),ve.set(Ae,Se,Ze,Nn),$.equals(ve)===!1&&(e.clearColor(Ae,Se,Ze,Nn),$.copy(ve))},reset:function(){N=!1,Y=null,$.set(-1,0,0,0)}}}function r(){let N=!1,ve=!1,Y=null,$=null,Ae=null;return{setReversed:function(Se){if(ve!==Se){const Ze=n.get("EXT_clip_control");ve?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT);const Nn=Ae;Ae=null,this.setClear(Nn)}ve=Se},getReversed:function(){return ve},setTest:function(Se){Se?oe(e.DEPTH_TEST):Pe(e.DEPTH_TEST)},setMask:function(Se){Y!==Se&&!N&&(e.depthMask(Se),Y=Se)},setFunc:function(Se){if(ve&&(Se=ST[Se]),$!==Se){switch(Se){case Is:e.depthFunc(e.NEVER);break;case Ms:e.depthFunc(e.ALWAYS);break;case xs:e.depthFunc(e.LESS);break;case no:e.depthFunc(e.LEQUAL);break;case Ls:e.depthFunc(e.EQUAL);break;case ys:e.depthFunc(e.GEQUAL);break;case As:e.depthFunc(e.GREATER);break;case Rs:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}$=Se}},setLocked:function(Se){N=Se},setClear:function(Se){Ae!==Se&&(ve&&(Se=1-Se),e.clearDepth(Se),Ae=Se)},reset:function(){N=!1,Y=null,$=null,Ae=null,ve=!1}}}function i(){let N=!1,ve=null,Y=null,$=null,Ae=null,Se=null,Ze=null,Nn=null,tt=null;return{setTest:function(vn){N||(vn?oe(e.STENCIL_TEST):Pe(e.STENCIL_TEST))},setMask:function(vn){ve!==vn&&!N&&(e.stencilMask(vn),ve=vn)},setFunc:function(vn,Nt,ir){(Y!==vn||$!==Nt||Ae!==ir)&&(e.stencilFunc(vn,Nt,ir),Y=vn,$=Nt,Ae=ir)},setOp:function(vn,Nt,ir){(Se!==vn||Ze!==Nt||Nn!==ir)&&(e.stencilOp(vn,Nt,ir),Se=vn,Ze=Nt,Nn=ir)},setLocked:function(vn){N=vn},setClear:function(vn){tt!==vn&&(e.clearStencil(vn),tt=vn)},reset:function(){N=!1,ve=null,Y=null,$=null,Ae=null,Se=null,Ze=null,Nn=null,tt=null}}}const a=new t,o=new r,s=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,h=null,T=null,v=null,E=null,L=null,I=null,x=new fe(0,0,0),b=0,A=!1,S=null,C=null,H=null,G=null,V=null;const q=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,ee=0;const X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),k=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),k=ee>=2);let le=null,me={};const _e=e.getParameter(e.SCISSOR_BOX),we=e.getParameter(e.VIEWPORT),de=new On().fromArray(_e),D=new On().fromArray(we);function ie(N,ve,Y,$){const Ae=new Uint8Array(4),Se=e.createTexture();e.bindTexture(N,Se),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ze=0;Ze<Y;Ze++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(ve,0,e.RGBA,1,1,$,0,e.RGBA,e.UNSIGNED_BYTE,Ae):e.texImage2D(ve+Ze,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ae);return Se}const ge={};ge[e.TEXTURE_2D]=ie(e.TEXTURE_2D,e.TEXTURE_2D,1),ge[e.TEXTURE_CUBE_MAP]=ie(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[e.TEXTURE_2D_ARRAY]=ie(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ge[e.TEXTURE_3D]=ie(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),o.setFunc(no),an(!1),tn(Vl),oe(e.CULL_FACE),P(Kr);function oe(N){u[N]!==!0&&(e.enable(N),u[N]=!0)}function Pe(N){u[N]!==!1&&(e.disable(N),u[N]=!1)}function Be(N,ve){return f[N]!==ve?(e.bindFramebuffer(N,ve),f[N]=ve,N===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=ve),N===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=ve),!0):!1}function Ke(N,ve){let Y=p,$=!1;if(N){Y=d.get(ve),Y===void 0&&(Y=[],d.set(ve,Y));const Ae=N.textures;if(Y.length!==Ae.length||Y[0]!==e.COLOR_ATTACHMENT0){for(let Se=0,Ze=Ae.length;Se<Ze;Se++)Y[Se]=e.COLOR_ATTACHMENT0+Se;Y.length=Ae.length,$=!0}}else Y[0]!==e.BACK&&(Y[0]=e.BACK,$=!0);$&&e.drawBuffers(Y)}function hn(N){return _!==N?(e.useProgram(N),_=N,!0):!1}const en={[Gi]:e.FUNC_ADD,[Th]:e.FUNC_SUBTRACT,[Sh]:e.FUNC_REVERSE_SUBTRACT};en[cm]=e.MIN,en[um]=e.MAX;const An={[Rh]:e.ZERO,[Ah]:e.ONE,[yh]:e.SRC_COLOR,[Lh]:e.SRC_ALPHA,[xh]:e.SRC_ALPHA_SATURATE,[Mh]:e.DST_COLOR,[Ih]:e.DST_ALPHA,[bh]:e.ONE_MINUS_SRC_COLOR,[Oh]:e.ONE_MINUS_SRC_ALPHA,[Ch]:e.ONE_MINUS_DST_COLOR,[Ph]:e.ONE_MINUS_DST_ALPHA,[Nh]:e.CONSTANT_COLOR,[wh]:e.ONE_MINUS_CONSTANT_COLOR,[Fh]:e.CONSTANT_ALPHA,[Dh]:e.ONE_MINUS_CONSTANT_ALPHA};function P(N,ve,Y,$,Ae,Se,Ze,Nn,tt,vn){if(N===Kr){g===!0&&(Pe(e.BLEND),g=!1);return}if(g===!1&&(oe(e.BLEND),g=!0),N!==Yh){if(N!==m||vn!==A){if((h!==Gi||E!==Gi)&&(e.blendEquation(e.FUNC_ADD),h=Gi,E=Gi),vn)switch(N){case Ka:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case zl:e.blendFunc(e.ONE,e.ONE);break;case Wl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case kl:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ka:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case zl:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Wl:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case kl:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,v=null,L=null,I=null,x.set(0,0,0),b=0,m=N,A=vn}return}Ae=Ae||ve,Se=Se||Y,Ze=Ze||$,(ve!==h||Ae!==E)&&(e.blendEquationSeparate(en[ve],en[Ae]),h=ve,E=Ae),(Y!==T||$!==v||Se!==L||Ze!==I)&&(e.blendFuncSeparate(An[Y],An[$],An[Se],An[Ze]),T=Y,v=$,L=Se,I=Ze),(Nn.equals(x)===!1||tt!==b)&&(e.blendColor(Nn.r,Nn.g,Nn.b,tt),x.copy(Nn),b=tt),m=N,A=!1}function ut(N,ve){N.side===Et?Pe(e.CULL_FACE):oe(e.CULL_FACE);let Y=N.side===Tt;ve&&(Y=!Y),an(Y),N.blending===Ka&&N.transparent===!1?P(Kr):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),a.setMask(N.colorWrite);const $=N.stencilWrite;s.setTest($),$&&(s.setMask(N.stencilWriteMask),s.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),s.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Tn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):Pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function an(N){S!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),S=N)}function tn(N){N!==qh?(oe(e.CULL_FACE),N!==C&&(N===Vl?e.cullFace(e.BACK):N===jh?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Pe(e.CULL_FACE),C=N}function He(N){N!==H&&(k&&e.lineWidth(N),H=N)}function Tn(N,ve,Y){N?(oe(e.POLYGON_OFFSET_FILL),(G!==ve||V!==Y)&&(e.polygonOffset(ve,Y),G=ve,V=Y)):Pe(e.POLYGON_OFFSET_FILL)}function De(N){N?oe(e.SCISSOR_TEST):Pe(e.SCISSOR_TEST)}function M(N){N===void 0&&(N=e.TEXTURE0+q-1),le!==N&&(e.activeTexture(N),le=N)}function R(N,ve,Y){Y===void 0&&(le===null?Y=e.TEXTURE0+q-1:Y=le);let $=me[Y];$===void 0&&($={type:void 0,texture:void 0},me[Y]=$),($.type!==N||$.texture!==ve)&&(le!==Y&&(e.activeTexture(Y),le=Y),e.bindTexture(N,ve||ge[N]),$.type=N,$.texture=ve)}function W(){const N=me[le];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{e.compressedTexImage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{e.compressedTexImage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{e.texSubImage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{e.texSubImage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function un(){try{e.texStorage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{e.texStorage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function be(){try{e.texImage2D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ze(){try{e.texImage3D.apply(e,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(N){de.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),de.copy(N))}function Oe(N){D.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),D.copy(N))}function ln(N,ve){let Y=c.get(ve);Y===void 0&&(Y=new WeakMap,c.set(ve,Y));let $=Y.get(N);$===void 0&&($=e.getUniformBlockIndex(ve,N.name),Y.set(N,$))}function $e(N,ve){const $=c.get(ve).get(N);l.get(ve)!==$&&(e.uniformBlockBinding(ve,$,N.__bindingPointIndex),l.set(ve,$))}function yn(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},le=null,me={},f={},d=new WeakMap,p=[],_=null,g=!1,m=null,h=null,T=null,v=null,E=null,L=null,I=null,x=new fe(0,0,0),b=0,A=!1,S=null,C=null,H=null,G=null,V=null,de.set(0,0,e.canvas.width,e.canvas.height),D.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:oe,disable:Pe,bindFramebuffer:Be,drawBuffers:Ke,useProgram:hn,setBlending:P,setMaterial:ut,setFlipSided:an,setCullFace:tn,setLineWidth:He,setPolygonOffset:Tn,setScissorTest:De,activeTexture:M,bindTexture:R,unbindTexture:W,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:be,texImage3D:ze,updateUBOMapping:ln,uniformBlockBinding:$e,texStorage2D:un,texStorage3D:ue,texSubImage2D:j,texSubImage3D:Ue,compressedTexSubImage2D:Te,compressedTexSubImage3D:xe,scissor:Ye,viewport:Oe,reset:yn}}function AT(e,n,t,r,i,a,o){const s=n.has("WEBGL_multisampled_render_to_texture")?n.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Zn,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(M,R){return p?new OffscreenCanvas(M,R):Em("canvas")}function g(M,R,W){let J=1;const te=De(M);if((te.width>W||te.height>W)&&(J=W/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const j=Math.floor(J*te.width),Ue=Math.floor(J*te.height);f===void 0&&(f=_(j,Ue));const Te=R?_(j,Ue):f;return Te.width=j,Te.height=Ue,Te.getContext("2d").drawImage(M,0,0,j,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Ue+")."),Te}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){e.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?e.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(M,R,W,J,te=!1){if(M!==null){if(e[M]!==void 0)return e[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let j=R;if(R===e.RED&&(W===e.FLOAT&&(j=e.R32F),W===e.HALF_FLOAT&&(j=e.R16F),W===e.UNSIGNED_BYTE&&(j=e.R8)),R===e.RED_INTEGER&&(W===e.UNSIGNED_BYTE&&(j=e.R8UI),W===e.UNSIGNED_SHORT&&(j=e.R16UI),W===e.UNSIGNED_INT&&(j=e.R32UI),W===e.BYTE&&(j=e.R8I),W===e.SHORT&&(j=e.R16I),W===e.INT&&(j=e.R32I)),R===e.RG&&(W===e.FLOAT&&(j=e.RG32F),W===e.HALF_FLOAT&&(j=e.RG16F),W===e.UNSIGNED_BYTE&&(j=e.RG8)),R===e.RG_INTEGER&&(W===e.UNSIGNED_BYTE&&(j=e.RG8UI),W===e.UNSIGNED_SHORT&&(j=e.RG16UI),W===e.UNSIGNED_INT&&(j=e.RG32UI),W===e.BYTE&&(j=e.RG8I),W===e.SHORT&&(j=e.RG16I),W===e.INT&&(j=e.RG32I)),R===e.RGB_INTEGER&&(W===e.UNSIGNED_BYTE&&(j=e.RGB8UI),W===e.UNSIGNED_SHORT&&(j=e.RGB16UI),W===e.UNSIGNED_INT&&(j=e.RGB32UI),W===e.BYTE&&(j=e.RGB8I),W===e.SHORT&&(j=e.RGB16I),W===e.INT&&(j=e.RGB32I)),R===e.RGBA_INTEGER&&(W===e.UNSIGNED_BYTE&&(j=e.RGBA8UI),W===e.UNSIGNED_SHORT&&(j=e.RGBA16UI),W===e.UNSIGNED_INT&&(j=e.RGBA32UI),W===e.BYTE&&(j=e.RGBA8I),W===e.SHORT&&(j=e.RGBA16I),W===e.INT&&(j=e.RGBA32I)),R===e.RGB&&W===e.UNSIGNED_INT_5_9_9_9_REV&&(j=e.RGB9_E5),R===e.RGBA){const Ue=te?Vf:gn.getTransfer(J);W===e.FLOAT&&(j=e.RGBA32F),W===e.HALF_FLOAT&&(j=e.RGBA16F),W===e.UNSIGNED_BYTE&&(j=Ue===xn?e.SRGB8_ALPHA8:e.RGBA8),W===e.UNSIGNED_SHORT_4_4_4_4&&(j=e.RGBA4),W===e.UNSIGNED_SHORT_5_5_5_1&&(j=e.RGB5_A1)}return(j===e.R16F||j===e.R32F||j===e.RG16F||j===e.RG32F||j===e.RGBA16F||j===e.RGBA32F)&&n.get("EXT_color_buffer_float"),j}function E(M,R){let W;return M?R===null||R===Qi||R===$i?W=e.DEPTH24_STENCIL8:R===zr?W=e.DEPTH32F_STENCIL8:R===ro&&(W=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Qi||R===$i?W=e.DEPTH_COMPONENT24:R===zr?W=e.DEPTH_COMPONENT32F:R===ro&&(W=e.DEPTH_COMPONENT16),W}function L(M,R){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Yr&&M.minFilter!==cr?Math.log2(Math.max(R.width,R.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?R.mipmaps.length:1}function I(M){const R=M.target;R.removeEventListener("dispose",I),b(R),R.isVideoTexture&&u.delete(R)}function x(M){const R=M.target;R.removeEventListener("dispose",x),S(R)}function b(M){const R=r.get(M);if(R.__webglInit===void 0)return;const W=M.source,J=d.get(W);if(J){const te=J[R.__cacheKey];te.usedTimes--,te.usedTimes===0&&A(M),Object.keys(J).length===0&&d.delete(W)}r.remove(M)}function A(M){const R=r.get(M);e.deleteTexture(R.__webglTexture);const W=M.source,J=d.get(W);delete J[R.__cacheKey],o.memory.textures--}function S(M){const R=r.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),r.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(R.__webglFramebuffer[J]))for(let te=0;te<R.__webglFramebuffer[J].length;te++)e.deleteFramebuffer(R.__webglFramebuffer[J][te]);else e.deleteFramebuffer(R.__webglFramebuffer[J]);R.__webglDepthbuffer&&e.deleteRenderbuffer(R.__webglDepthbuffer[J])}else{if(Array.isArray(R.__webglFramebuffer))for(let J=0;J<R.__webglFramebuffer.length;J++)e.deleteFramebuffer(R.__webglFramebuffer[J]);else e.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&e.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&e.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let J=0;J<R.__webglColorRenderbuffer.length;J++)R.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(R.__webglColorRenderbuffer[J]);R.__webglDepthRenderbuffer&&e.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const W=M.textures;for(let J=0,te=W.length;J<te;J++){const j=r.get(W[J]);j.__webglTexture&&(e.deleteTexture(j.__webglTexture),o.memory.textures--),r.remove(W[J])}r.remove(M)}let C=0;function H(){C=0}function G(){const M=C;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),C+=1,M}function V(M){const R=[];return R.push(M.wrapS),R.push(M.wrapT),R.push(M.wrapR||0),R.push(M.magFilter),R.push(M.minFilter),R.push(M.anisotropy),R.push(M.internalFormat),R.push(M.format),R.push(M.type),R.push(M.generateMipmaps),R.push(M.premultiplyAlpha),R.push(M.flipY),R.push(M.unpackAlignment),R.push(M.colorSpace),R.join()}function q(M,R){const W=r.get(M);if(M.isVideoTexture&&He(M),M.isRenderTargetTexture===!1&&M.version>0&&W.__version!==M.version){const J=M.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{D(W,M,R);return}}t.bindTexture(e.TEXTURE_2D,W.__webglTexture,e.TEXTURE0+R)}function k(M,R){const W=r.get(M);if(M.version>0&&W.__version!==M.version){D(W,M,R);return}t.bindTexture(e.TEXTURE_2D_ARRAY,W.__webglTexture,e.TEXTURE0+R)}function ee(M,R){const W=r.get(M);if(M.version>0&&W.__version!==M.version){D(W,M,R);return}t.bindTexture(e.TEXTURE_3D,W.__webglTexture,e.TEXTURE0+R)}function X(M,R){const W=r.get(M);if(M.version>0&&W.__version!==M.version){ie(W,M,R);return}t.bindTexture(e.TEXTURE_CUBE_MAP,W.__webglTexture,e.TEXTURE0+R)}const le={[Li]:e.REPEAT,[to]:e.CLAMP_TO_EDGE,[Nf]:e.MIRRORED_REPEAT},me={[Yr]:e.NEAREST,[wf]:e.NEAREST_MIPMAP_NEAREST,[Ki]:e.NEAREST_MIPMAP_LINEAR,[cr]:e.LINEAR,[Xa]:e.LINEAR_MIPMAP_NEAREST,[Wr]:e.LINEAR_MIPMAP_LINEAR},_e={[Uh]:e.NEVER,[Hh]:e.ALWAYS,[Gh]:e.LESS,[Ff]:e.LEQUAL,[Bh]:e.EQUAL,[kh]:e.GEQUAL,[Wh]:e.GREATER,[zh]:e.NOTEQUAL};function we(M,R){if(R.type===zr&&n.has("OES_texture_float_linear")===!1&&(R.magFilter===cr||R.magFilter===Xa||R.magFilter===Ki||R.magFilter===Wr||R.minFilter===cr||R.minFilter===Xa||R.minFilter===Ki||R.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(M,e.TEXTURE_WRAP_S,le[R.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,le[R.wrapT]),(M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)&&e.texParameteri(M,e.TEXTURE_WRAP_R,le[R.wrapR]),e.texParameteri(M,e.TEXTURE_MAG_FILTER,me[R.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,me[R.minFilter]),R.compareFunction&&(e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,_e[R.compareFunction])),n.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Yr||R.minFilter!==Ki&&R.minFilter!==Wr||R.type===zr&&n.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const W=n.get("EXT_texture_filter_anisotropic");e.texParameterf(M,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function de(M,R){let W=!1;M.__webglInit===void 0&&(M.__webglInit=!0,R.addEventListener("dispose",I));const J=R.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const j=V(R);if(j!==M.__cacheKey){te[j]===void 0&&(te[j]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,W=!0),te[j].usedTimes++;const Ue=te[M.__cacheKey];Ue!==void 0&&(te[M.__cacheKey].usedTimes--,Ue.usedTimes===0&&A(R)),M.__cacheKey=j,M.__webglTexture=te[j].texture}return W}function D(M,R,W){let J=e.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),R.isData3DTexture&&(J=e.TEXTURE_3D);const te=de(M,R),j=R.source;t.bindTexture(J,M.__webglTexture,e.TEXTURE0+W);const Ue=r.get(j);if(j.version!==Ue.__version||te===!0){t.activeTexture(e.TEXTURE0+W);const Te=gn.getPrimaries(gn.workingColorSpace),xe=R.colorSpace===fi?null:gn.getPrimaries(R.colorSpace),un=R.colorSpace===fi||Te===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,un);let ue=g(R.image,!1,i.maxTextureSize);ue=Tn(R,ue);const be=a.convert(R.format,R.colorSpace),ze=a.convert(R.type);let Ye=v(R.internalFormat,be,ze,R.colorSpace,R.isVideoTexture);we(J,R);let Oe;const ln=R.mipmaps,$e=R.isVideoTexture!==!0,yn=Ue.__version===void 0||te===!0,N=j.dataReady,ve=L(R,ue);if(R.isDepthTexture)Ye=E(R.format===eo,R.type),yn&&($e?t.texStorage2D(e.TEXTURE_2D,1,Ye,ue.width,ue.height):t.texImage2D(e.TEXTURE_2D,0,Ye,ue.width,ue.height,0,be,ze,null));else if(R.isDataTexture)if(ln.length>0){$e&&yn&&t.texStorage2D(e.TEXTURE_2D,ve,Ye,ln[0].width,ln[0].height);for(let Y=0,$=ln.length;Y<$;Y++)Oe=ln[Y],$e?N&&t.texSubImage2D(e.TEXTURE_2D,Y,0,0,Oe.width,Oe.height,be,ze,Oe.data):t.texImage2D(e.TEXTURE_2D,Y,Ye,Oe.width,Oe.height,0,be,ze,Oe.data);R.generateMipmaps=!1}else $e?(yn&&t.texStorage2D(e.TEXTURE_2D,ve,Ye,ue.width,ue.height),N&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,ue.width,ue.height,be,ze,ue.data)):t.texImage2D(e.TEXTURE_2D,0,Ye,ue.width,ue.height,0,be,ze,ue.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){$e&&yn&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ve,Ye,ln[0].width,ln[0].height,ue.depth);for(let Y=0,$=ln.length;Y<$;Y++)if(Oe=ln[Y],R.format!==lr)if(be!==null)if($e){if(N)if(R.layerUpdates.size>0){const Ae=Xl(Oe.width,Oe.height,R.format,R.type);for(const Se of R.layerUpdates){const Ze=Oe.data.subarray(Se*Ae/Oe.data.BYTES_PER_ELEMENT,(Se+1)*Ae/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,Se,Oe.width,Oe.height,1,be,Ze)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,Oe.width,Oe.height,ue.depth,be,Oe.data)}else t.compressedTexImage3D(e.TEXTURE_2D_ARRAY,Y,Ye,Oe.width,Oe.height,ue.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?N&&t.texSubImage3D(e.TEXTURE_2D_ARRAY,Y,0,0,0,Oe.width,Oe.height,ue.depth,be,ze,Oe.data):t.texImage3D(e.TEXTURE_2D_ARRAY,Y,Ye,Oe.width,Oe.height,ue.depth,0,be,ze,Oe.data)}else{$e&&yn&&t.texStorage2D(e.TEXTURE_2D,ve,Ye,ln[0].width,ln[0].height);for(let Y=0,$=ln.length;Y<$;Y++)Oe=ln[Y],R.format!==lr?be!==null?$e?N&&t.compressedTexSubImage2D(e.TEXTURE_2D,Y,0,0,Oe.width,Oe.height,be,Oe.data):t.compressedTexImage2D(e.TEXTURE_2D,Y,Ye,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?N&&t.texSubImage2D(e.TEXTURE_2D,Y,0,0,Oe.width,Oe.height,be,ze,Oe.data):t.texImage2D(e.TEXTURE_2D,Y,Ye,Oe.width,Oe.height,0,be,ze,Oe.data)}else if(R.isDataArrayTexture)if($e){if(yn&&t.texStorage3D(e.TEXTURE_2D_ARRAY,ve,Ye,ue.width,ue.height,ue.depth),N)if(R.layerUpdates.size>0){const Y=Xl(ue.width,ue.height,R.format,R.type);for(const $ of R.layerUpdates){const Ae=ue.data.subarray($*Y/ue.data.BYTES_PER_ELEMENT,($+1)*Y/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,$,ue.width,ue.height,1,be,ze,Ae)}R.clearLayerUpdates()}else t.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,be,ze,ue.data)}else t.texImage3D(e.TEXTURE_2D_ARRAY,0,Ye,ue.width,ue.height,ue.depth,0,be,ze,ue.data);else if(R.isData3DTexture)$e?(yn&&t.texStorage3D(e.TEXTURE_3D,ve,Ye,ue.width,ue.height,ue.depth),N&&t.texSubImage3D(e.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,be,ze,ue.data)):t.texImage3D(e.TEXTURE_3D,0,Ye,ue.width,ue.height,ue.depth,0,be,ze,ue.data);else if(R.isFramebufferTexture){if(yn)if($e)t.texStorage2D(e.TEXTURE_2D,ve,Ye,ue.width,ue.height);else{let Y=ue.width,$=ue.height;for(let Ae=0;Ae<ve;Ae++)t.texImage2D(e.TEXTURE_2D,Ae,Ye,Y,$,0,be,ze,null),Y>>=1,$>>=1}}else if(ln.length>0){if($e&&yn){const Y=De(ln[0]);t.texStorage2D(e.TEXTURE_2D,ve,Ye,Y.width,Y.height)}for(let Y=0,$=ln.length;Y<$;Y++)Oe=ln[Y],$e?N&&t.texSubImage2D(e.TEXTURE_2D,Y,0,0,be,ze,Oe):t.texImage2D(e.TEXTURE_2D,Y,Ye,be,ze,Oe);R.generateMipmaps=!1}else if($e){if(yn){const Y=De(ue);t.texStorage2D(e.TEXTURE_2D,ve,Ye,Y.width,Y.height)}N&&t.texSubImage2D(e.TEXTURE_2D,0,0,0,be,ze,ue)}else t.texImage2D(e.TEXTURE_2D,0,Ye,be,ze,ue);m(R)&&h(J),Ue.__version=j.version,R.onUpdate&&R.onUpdate(R)}M.__version=R.version}function ie(M,R,W){if(R.image.length!==6)return;const J=de(M,R),te=R.source;t.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+W);const j=r.get(te);if(te.version!==j.__version||J===!0){t.activeTexture(e.TEXTURE0+W);const Ue=gn.getPrimaries(gn.workingColorSpace),Te=R.colorSpace===fi?null:gn.getPrimaries(R.colorSpace),xe=R.colorSpace===fi||Ue===Te?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const un=R.isCompressedTexture||R.image[0].isCompressedTexture,ue=R.image[0]&&R.image[0].isDataTexture,be=[];for(let $=0;$<6;$++)!un&&!ue?be[$]=g(R.image[$],!0,i.maxCubemapSize):be[$]=ue?R.image[$].image:R.image[$],be[$]=Tn(R,be[$]);const ze=be[0],Ye=a.convert(R.format,R.colorSpace),Oe=a.convert(R.type),ln=v(R.internalFormat,Ye,Oe,R.colorSpace),$e=R.isVideoTexture!==!0,yn=j.__version===void 0||J===!0,N=te.dataReady;let ve=L(R,ze);we(e.TEXTURE_CUBE_MAP,R);let Y;if(un){$e&&yn&&t.texStorage2D(e.TEXTURE_CUBE_MAP,ve,ln,ze.width,ze.height);for(let $=0;$<6;$++){Y=be[$].mipmaps;for(let Ae=0;Ae<Y.length;Ae++){const Se=Y[Ae];R.format!==lr?Ye!==null?$e?N&&t.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae,0,0,Se.width,Se.height,Ye,Se.data):t.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae,ln,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?N&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae,0,0,Se.width,Se.height,Ye,Oe,Se.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae,ln,Se.width,Se.height,0,Ye,Oe,Se.data)}}}else{if(Y=R.mipmaps,$e&&yn){Y.length>0&&ve++;const $=De(be[0]);t.texStorage2D(e.TEXTURE_CUBE_MAP,ve,ln,$.width,$.height)}for(let $=0;$<6;$++)if(ue){$e?N&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,be[$].width,be[$].height,Ye,Oe,be[$].data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ln,be[$].width,be[$].height,0,Ye,Oe,be[$].data);for(let Ae=0;Ae<Y.length;Ae++){const Ze=Y[Ae].image[$].image;$e?N&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae+1,0,0,Ze.width,Ze.height,Ye,Oe,Ze.data):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae+1,ln,Ze.width,Ze.height,0,Ye,Oe,Ze.data)}}else{$e?N&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ye,Oe,be[$]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,ln,Ye,Oe,be[$]);for(let Ae=0;Ae<Y.length;Ae++){const Se=Y[Ae];$e?N&&t.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae+1,0,0,Ye,Oe,Se.image[$]):t.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ae+1,ln,Ye,Oe,Se.image[$])}}}m(R)&&h(e.TEXTURE_CUBE_MAP),j.__version=te.version,R.onUpdate&&R.onUpdate(R)}M.__version=R.version}function ge(M,R,W,J,te,j){const Ue=a.convert(W.format,W.colorSpace),Te=a.convert(W.type),xe=v(W.internalFormat,Ue,Te,W.colorSpace),un=r.get(R),ue=r.get(W);if(ue.__renderTarget=R,!un.__hasExternalTextures){const be=Math.max(1,R.width>>j),ze=Math.max(1,R.height>>j);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?t.texImage3D(te,j,xe,be,ze,R.depth,0,Ue,Te,null):t.texImage2D(te,j,xe,be,ze,0,Ue,Te,null)}t.bindFramebuffer(e.FRAMEBUFFER,M),tn(R)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,te,ue.__webglTexture,0,an(R)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,te,ue.__webglTexture,j),t.bindFramebuffer(e.FRAMEBUFFER,null)}function oe(M,R,W){if(e.bindRenderbuffer(e.RENDERBUFFER,M),R.depthBuffer){const J=R.depthTexture,te=J&&J.isDepthTexture?J.type:null,j=E(R.stencilBuffer,te),Ue=R.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Te=an(R);tn(R)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Te,j,R.width,R.height):W?e.renderbufferStorageMultisample(e.RENDERBUFFER,Te,j,R.width,R.height):e.renderbufferStorage(e.RENDERBUFFER,j,R.width,R.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ue,e.RENDERBUFFER,M)}else{const J=R.textures;for(let te=0;te<J.length;te++){const j=J[te],Ue=a.convert(j.format,j.colorSpace),Te=a.convert(j.type),xe=v(j.internalFormat,Ue,Te,j.colorSpace),un=an(R);W&&tn(R)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,un,xe,R.width,R.height):tn(R)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,un,xe,R.width,R.height):e.renderbufferStorage(e.RENDERBUFFER,xe,R.width,R.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Pe(M,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(e.FRAMEBUFFER,M),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=r.get(R.depthTexture);J.__renderTarget=R,(!J.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),q(R.depthTexture,0);const te=J.__webglTexture,j=an(R);if(R.depthTexture.format===tl)tn(R)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,te,0,j):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,te,0);else if(R.depthTexture.format===eo)tn(R)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,te,0,j):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Be(M){const R=r.get(M),W=M.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==M.depthTexture){const J=M.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),J){const te=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),R.__depthDisposeCallback=te}R.__boundDepthTexture=J}if(M.depthTexture&&!R.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Pe(R.__webglFramebuffer,M)}else if(W){R.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(e.FRAMEBUFFER,R.__webglFramebuffer[J]),R.__webglDepthbuffer[J]===void 0)R.__webglDepthbuffer[J]=e.createRenderbuffer(),oe(R.__webglDepthbuffer[J],M,!1);else{const te=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,j=R.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,j),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,j)}}else if(t.bindFramebuffer(e.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=e.createRenderbuffer(),oe(R.__webglDepthbuffer,M,!1);else{const J=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=R.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,te)}t.bindFramebuffer(e.FRAMEBUFFER,null)}function Ke(M,R,W){const J=r.get(M);R!==void 0&&ge(J.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),W!==void 0&&Be(M)}function hn(M){const R=M.texture,W=r.get(M),J=r.get(R);M.addEventListener("dispose",x);const te=M.textures,j=M.isWebGLCubeRenderTarget===!0,Ue=te.length>1;if(Ue||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=R.version,o.memory.textures++),j){W.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer[Te]=[];for(let xe=0;xe<R.mipmaps.length;xe++)W.__webglFramebuffer[Te][xe]=e.createFramebuffer()}else W.__webglFramebuffer[Te]=e.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer=[];for(let Te=0;Te<R.mipmaps.length;Te++)W.__webglFramebuffer[Te]=e.createFramebuffer()}else W.__webglFramebuffer=e.createFramebuffer();if(Ue)for(let Te=0,xe=te.length;Te<xe;Te++){const un=r.get(te[Te]);un.__webglTexture===void 0&&(un.__webglTexture=e.createTexture(),o.memory.textures++)}if(M.samples>0&&tn(M)===!1){W.__webglMultisampledFramebuffer=e.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(e.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Te=0;Te<te.length;Te++){const xe=te[Te];W.__webglColorRenderbuffer[Te]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,W.__webglColorRenderbuffer[Te]);const un=a.convert(xe.format,xe.colorSpace),ue=a.convert(xe.type),be=v(xe.internalFormat,un,ue,xe.colorSpace,M.isXRRenderTarget===!0),ze=an(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,ze,be,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Te,e.RENDERBUFFER,W.__webglColorRenderbuffer[Te])}e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer&&(W.__webglDepthRenderbuffer=e.createRenderbuffer(),oe(W.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(e.FRAMEBUFFER,null)}}if(j){t.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),we(e.TEXTURE_CUBE_MAP,R);for(let Te=0;Te<6;Te++)if(R.mipmaps&&R.mipmaps.length>0)for(let xe=0;xe<R.mipmaps.length;xe++)ge(W.__webglFramebuffer[Te][xe],M,R,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,xe);else ge(W.__webglFramebuffer[Te],M,R,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);m(R)&&h(e.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let Te=0,xe=te.length;Te<xe;Te++){const un=te[Te],ue=r.get(un);t.bindTexture(e.TEXTURE_2D,ue.__webglTexture),we(e.TEXTURE_2D,un),ge(W.__webglFramebuffer,M,un,e.COLOR_ATTACHMENT0+Te,e.TEXTURE_2D,0),m(un)&&h(e.TEXTURE_2D)}t.unbindTexture()}else{let Te=e.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Te=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),t.bindTexture(Te,J.__webglTexture),we(Te,R),R.mipmaps&&R.mipmaps.length>0)for(let xe=0;xe<R.mipmaps.length;xe++)ge(W.__webglFramebuffer[xe],M,R,e.COLOR_ATTACHMENT0,Te,xe);else ge(W.__webglFramebuffer,M,R,e.COLOR_ATTACHMENT0,Te,0);m(R)&&h(Te),t.unbindTexture()}M.depthBuffer&&Be(M)}function en(M){const R=M.textures;for(let W=0,J=R.length;W<J;W++){const te=R[W];if(m(te)){const j=T(M),Ue=r.get(te).__webglTexture;t.bindTexture(j,Ue),h(j),t.unbindTexture()}}}const An=[],P=[];function ut(M){if(M.samples>0){if(tn(M)===!1){const R=M.textures,W=M.width,J=M.height;let te=e.COLOR_BUFFER_BIT;const j=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ue=r.get(M),Te=R.length>1;if(Te)for(let xe=0;xe<R.length;xe++)t.bindFramebuffer(e.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,null),t.bindFramebuffer(e.FRAMEBUFFER,Ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,null,0);t.bindFramebuffer(e.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let xe=0;xe<R.length;xe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),Te){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ue.__webglColorRenderbuffer[xe]);const un=r.get(R[xe]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,un,0)}e.blitFramebuffer(0,0,W,J,0,0,W,J,te,e.NEAREST),l===!0&&(An.length=0,P.length=0,An.push(e.COLOR_ATTACHMENT0+xe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(An.push(j),P.push(j),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,P)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,An))}if(t.bindFramebuffer(e.READ_FRAMEBUFFER,null),t.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Te)for(let xe=0;xe<R.length;xe++){t.bindFramebuffer(e.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,Ue.__webglColorRenderbuffer[xe]);const un=r.get(R[xe]).__webglTexture;t.bindFramebuffer(e.FRAMEBUFFER,Ue.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,un,0)}t.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const R=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[R])}}}function an(M){return Math.min(i.maxSamples,M.samples)}function tn(M){const R=r.get(M);return M.samples>0&&n.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function He(M){const R=o.render.frame;u.get(M)!==R&&(u.set(M,R),M.update())}function Tn(M,R){const W=M.colorSpace,J=M.format,te=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||W!==St&&W!==fi&&(gn.getTransfer(W)===xn?(J!==lr||te!==$r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),R}function De(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=H,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Ke,this.setupRenderTarget=hn,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=tn}function yT(e,n){function t(r,i=fi){let a;const o=gn.getTransfer(i);if(r===$r)return e.UNSIGNED_BYTE;if(r===Gf)return e.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Zh)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===Jh)return e.BYTE;if(r===$h)return e.SHORT;if(r===ro)return e.UNSIGNED_SHORT;if(r===Wf)return e.INT;if(r===Qi)return e.UNSIGNED_INT;if(r===zr)return e.FLOAT;if(r===go)return e.HALF_FLOAT;if(r===Qh)return e.ALPHA;if(r===em)return e.RGB;if(r===lr)return e.RGBA;if(r===nm)return e.LUMINANCE;if(r===tm)return e.LUMINANCE_ALPHA;if(r===tl)return e.DEPTH_COMPONENT;if(r===eo)return e.DEPTH_STENCIL;if(r===rm)return e.RED;if(r===Hf)return e.RED_INTEGER;if(r===im)return e.RG;if(r===Uf)return e.RG_INTEGER;if(r===Df)return e.RGBA_INTEGER;if(r===Ho||r===Go||r===Bo||r===ko)if(o===xn)if(a=n.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ho)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Go)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ko)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=n.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ho)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Go)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ko)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Kl||r===Yl||r===ql||r===jl)if(a=n.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Kl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ql)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zl||r===Jl||r===$l)if(a=n.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zl||r===Jl)return o===xn?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===$l)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ql||r===ec||r===nc||r===tc||r===rc||r===ic||r===ac||r===oc||r===sc||r===lc||r===cc||r===uc||r===fc||r===dc)if(a=n.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ql)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ec)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===nc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ic)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ac)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===oc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===lc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===cc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===uc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===fc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dc)return o===xn?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wo||r===pc||r===hc)if(a=n.get("EXT_texture_compression_bptc"),a!==null){if(r===Wo)return o===xn?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===am||r===mc||r===_c||r===gc)if(a=n.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wo)return a.COMPRESSED_RED_RGTC1_EXT;if(r===mc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_c)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$i?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:t}}const LT={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(n){return this._targetRay!==null&&this._targetRay.dispatchEvent(n),this._grip!==null&&this._grip.dispatchEvent(n),this._hand!==null&&this._hand.dispatchEvent(n),this}connect(n){if(n&&n.hand){const t=this._hand;if(t)for(const r of n.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:n}),this}disconnect(n){return this.dispatchEvent({type:"disconnected",data:n}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(n,t,r){let i=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(n&&t.session.visibilityState!=="visible-blurred"){if(c&&n.hand){o=!0;for(const g of n.hand.values()){const m=t.getJointPose(g,r),h=this._getHandJoint(c,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:n.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:n.handedness,target:this}))}else l!==null&&n.gripSpace&&(a=t.getPose(n.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(i=t.getPose(n.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(LT)))}return s!==null&&(s.visible=i!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(n,t){if(n.joints[t.jointName]===void 0){const r=new Zt;r.matrixAutoUpdate=!1,r.visible=!1,n.joints[t.jointName]=r,n.add(r)}return n.joints[t.jointName]}}const xT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MT=`
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

}`;class IT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(n,t,r){if(this.texture===null){const i=new ea,a=n.properties.get(i);a.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(n){if(this.texture!==null&&this.mesh===null){const t=n.cameras[0].viewport,r=new dr({vertexShader:xT,fragmentShader:MT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new on(new xi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends hh{constructor(n,t){super();const r=this;let i=null,a=1,o=null,s="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const g=new IT,m=t.getContextAttributes();let h=null,T=null;const v=[],E=[],L=new Zn;let I=null;const x=new Lr;x.viewport=new On;const b=new Lr;b.viewport=new On;const A=[x,b],S=new mh;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let ie=v[D];return ie===void 0&&(ie=new Zo,v[D]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(D){let ie=v[D];return ie===void 0&&(ie=new Zo,v[D]=ie),ie.getGripSpace()},this.getHand=function(D){let ie=v[D];return ie===void 0&&(ie=new Zo,v[D]=ie),ie.getHandSpace()};function G(D){const ie=E.indexOf(D.inputSource);if(ie===-1)return;const ge=v[ie];ge!==void 0&&(ge.update(D.inputSource,D.frame,c||o),ge.dispatchEvent({type:D.type,data:D.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",q);for(let D=0;D<v.length;D++){const ie=E[D];ie!==null&&(E[D]=null,v[D].disconnect(ie))}C=null,H=null,g.reset(),n.setRenderTarget(h),p=null,d=null,f=null,i=null,T=null,de.stop(),r.isPresenting=!1,n.setPixelRatio(I),n.setSize(L.width,L.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){a=D,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){s=D,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(h=n.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=n.getPixelRatio(),n.getSize(L),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let ge=null,oe=null,Pe=null;m.depth&&(Pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?eo:tl,oe=m.stencil?$i:Qi);const Be={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:a};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),n.setPixelRatio(1),n.setSize(d.textureWidth,d.textureHeight,!1),T=new Jr(d.textureWidth,d.textureHeight,{format:lr,type:$r,depthTexture:new Of(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:n.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,ge),i.updateRenderState({baseLayer:p}),n.setPixelRatio(1),n.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Jr(p.framebufferWidth,p.framebufferHeight,{format:lr,type:$r,colorSpace:n.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(s),de.setContext(i),de.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(D){for(let ie=0;ie<D.removed.length;ie++){const ge=D.removed[ie],oe=E.indexOf(ge);oe>=0&&(E[oe]=null,v[oe].disconnect(ge))}for(let ie=0;ie<D.added.length;ie++){const ge=D.added[ie];let oe=E.indexOf(ge);if(oe===-1){for(let Be=0;Be<v.length;Be++)if(Be>=E.length){E.push(ge),oe=Be;break}else if(E[Be]===null){E[Be]=ge,oe=Be;break}if(oe===-1)break}const Pe=v[oe];Pe&&Pe.connect(ge)}}const k=new ce,ee=new ce;function X(D,ie,ge){k.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(ge.matrixWorld);const oe=k.distanceTo(ee),Pe=ie.projectionMatrix.elements,Be=ge.projectionMatrix.elements,Ke=Pe[14]/(Pe[10]-1),hn=Pe[14]/(Pe[10]+1),en=(Pe[9]+1)/Pe[5],An=(Pe[9]-1)/Pe[5],P=(Pe[8]-1)/Pe[0],ut=(Be[8]+1)/Be[0],an=Ke*P,tn=Ke*ut,He=oe/(-P+ut),Tn=He*-P;if(ie.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Tn),D.translateZ(He),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Pe[10]===-1)D.projectionMatrix.copy(ie.projectionMatrix),D.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const De=Ke+He,M=hn+He,R=an-Tn,W=tn+(oe-Tn),J=en*hn/M*De,te=An*hn/M*De;D.projectionMatrix.makePerspective(R,W,J,te,De,M),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function le(D,ie){ie===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(ie.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;let ie=D.near,ge=D.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ge=g.depthFar)),S.near=b.near=x.near=ie,S.far=b.far=x.far=ge,(C!==S.near||H!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,H=S.far),x.layers.mask=D.layers.mask|2,b.layers.mask=D.layers.mask|4,S.layers.mask=x.layers.mask|b.layers.mask;const oe=D.parent,Pe=S.cameras;le(S,oe);for(let Be=0;Be<Pe.length;Be++)le(Pe[Be],oe);Pe.length===2?X(S,x,b):S.projectionMatrix.copy(x.projectionMatrix),me(D,S,oe)};function me(D,ie,ge){ge===null?D.matrix.copy(ie.matrixWorld):(D.matrix.copy(ge.matrixWorld),D.matrix.invert(),D.matrix.multiply(ie.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(ie.projectionMatrix),D.projectionMatrixInverse.copy(ie.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=_h*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(D){l=D,d!==null&&(d.fixedFoveation=D),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=D)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let _e=null;function we(D,ie){if(u=ie.getViewerPose(c||o),_=ie,u!==null){const ge=u.views;p!==null&&(n.setRenderTargetFramebuffer(T,p.framebuffer),n.setRenderTarget(T));let oe=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Be=0;Be<ge.length;Be++){const Ke=ge[Be];let hn=null;if(p!==null)hn=p.getViewport(Ke);else{const An=f.getViewSubImage(d,Ke);hn=An.viewport,Be===0&&(n.setRenderTargetTextures(T,An.colorTexture,d.ignoreDepthValues?void 0:An.depthStencilTexture),n.setRenderTarget(T))}let en=A[Be];en===void 0&&(en=new Lr,en.layers.enable(Be),en.viewport=new On,A[Be]=en),en.matrix.fromArray(Ke.transform.matrix),en.matrix.decompose(en.position,en.quaternion,en.scale),en.projectionMatrix.fromArray(Ke.projectionMatrix),en.projectionMatrixInverse.copy(en.projectionMatrix).invert(),en.viewport.set(hn.x,hn.y,hn.width,hn.height),Be===0&&(S.matrix.copy(en.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(en)}const Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Be=f.getDepthInformation(ge[0]);Be&&Be.isValid&&Be.texture&&g.init(n,Be,i.renderState)}}for(let ge=0;ge<v.length;ge++){const oe=E[ge],Pe=v[ge];oe!==null&&Pe!==void 0&&Pe.update(oe,ie,c||o)}_e&&_e(D,ie),ie.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ie}),_=null}const de=new Qf;de.setAnimationLoop(we),this.setAnimationLoop=function(D){_e=D},this.dispose=function(){}}}const Nr=new sr,OT=new sn;function CT(e,n){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function r(m,h){h.color.getRGB(m.fogColor.value,kf(e)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function i(m,h,T,v,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?a(m,h):h.isMeshToonMaterial?(a(m,h),f(m,h)):h.isMeshPhongMaterial?(a(m,h),u(m,h)):h.isMeshStandardMaterial?(a(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,E)):h.isMeshMatcapMaterial?(a(m,h),_(m,h)):h.isMeshDepthMaterial?a(m,h):h.isMeshDistanceMaterial?(a(m,h),g(m,h)):h.isMeshNormalMaterial?a(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&s(m,h)):h.isPointsMaterial?l(m,h,T,v):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function a(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Tt&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Tt&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const T=n.get(h),v=T.envMap,E=T.envMapRotation;v&&(m.envMap.value=v,Nr.copy(E),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(OT.makeRotationFromEuler(Nr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function s(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,T,v){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*T,m.scale.value=v*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,T){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tt&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const T=n.get(h).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function PT(e,n,t,r){let i={},a={},o=[];const s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,v){const E=v.program;r.uniformBlockBinding(T,E)}function c(T,v){let E=i[T.id];E===void 0&&(_(T),E=u(T),i[T.id]=E,T.addEventListener("dispose",m));const L=v.program;r.updateUBOMapping(T,L);const I=n.render.frame;a[T.id]!==I&&(d(T),a[T.id]=I)}function u(T){const v=f();T.__bindingPointIndex=v;const E=e.createBuffer(),L=T.__size,I=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,E),e.bufferData(e.UNIFORM_BUFFER,L,I),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,v,E),E}function f(){for(let T=0;T<s;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const v=i[T.id],E=T.uniforms,L=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,v);for(let I=0,x=E.length;I<x;I++){const b=Array.isArray(E[I])?E[I]:[E[I]];for(let A=0,S=b.length;A<S;A++){const C=b[A];if(p(C,I,A,L)===!0){const H=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let q=0;q<G.length;q++){const k=G[q],ee=g(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,e.bufferSubData(e.UNIFORM_BUFFER,H+V,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,H,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(T,v,E,L){const I=T.value,x=v+"_"+E;if(L[x]===void 0)return typeof I=="number"||typeof I=="boolean"?L[x]=I:L[x]=I.clone(),!0;{const b=L[x];if(typeof I=="number"||typeof I=="boolean"){if(b!==I)return L[x]=I,!0}else if(b.equals(I)===!1)return b.copy(I),!0}return!1}function _(T){const v=T.uniforms;let E=0;const L=16;for(let x=0,b=v.length;x<b;x++){const A=Array.isArray(v[x])?v[x]:[v[x]];for(let S=0,C=A.length;S<C;S++){const H=A[S],G=Array.isArray(H.value)?H.value:[H.value];for(let V=0,q=G.length;V<q;V++){const k=G[V],ee=g(k),X=E%L,le=X%ee.boundary,me=X+le;E+=le,me!==0&&L-me<ee.storage&&(E+=L-me),H.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=ee.storage}}}const I=E%L;return I>0&&(E+=L-I),T.__size=E,T.__cache={},this}function g(T){const v={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(v.boundary=4,v.storage=4):T.isVector2?(v.boundary=8,v.storage=8):T.isVector3||T.isColor?(v.boundary=16,v.storage=12):T.isVector4?(v.boundary=16,v.storage=16):T.isMatrix3?(v.boundary=48,v.storage=48):T.isMatrix4?(v.boundary=64,v.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),v}function m(T){const v=T.target;v.removeEventListener("dispose",m);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),e.deleteBuffer(i[v.id]),delete i[v.id],delete a[v.id]}function h(){for(const T in i)e.deleteBuffer(i[T]);o=[],i={},a={}}return{bind:l,update:c,dispose:h}}class NT{constructor(n={}){const{canvas:t=lh(),context:r=null,depth:i=!0,stencil:a=!1,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=n;this.isWebGLRenderer=!0;let p;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=r.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,h=null;const T=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this.toneMapping=yr,this.toneMappingExposure=1;const E=this;let L=!1,I=0,x=0,b=null,A=-1,S=null;const C=new On,H=new On;let G=null;const V=new fe(0);let q=0,k=t.width,ee=t.height,X=1,le=null,me=null;const _e=new On(0,0,k,ee),we=new On(0,0,k,ee);let de=!1;const D=new bf;let ie=!1,ge=!1;this.transmissionResolutionScale=1;const oe=new sn,Pe=new sn,Be=new ce,Ke=new On,hn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let en=!1;function An(){return b===null?X:1}let P=r;function ut(y,w){return t.getContext(y,w)}try{const y={alpha:!0,depth:i,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ch}`),t.addEventListener("webglcontextlost",$,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Se,!1),P===null){const w="webgl2";if(P=ut(w,y),P===null)throw ut(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let an,tn,He,Tn,De,M,R,W,J,te,j,Ue,Te,xe,un,ue,be,ze,Ye,Oe,ln,$e,yn,N;function ve(){an=new Wv(P),an.init(),$e=new yT(P,an),tn=new Dv(P,an,n,$e),He=new RT(P,an),tn.reverseDepthBuffer&&d&&He.buffers.depth.setReversed(!0),Tn=new Xv(P),De=new cT,M=new AT(P,an,He,De,tn,$e,Tn),R=new Hv(E),W=new kv(E),J=new $m(P),yn=new wv(P,J),te=new zv(P,J,Tn,yn),j=new Yv(P,te,J,Tn),Ye=new Kv(P,tn,M),ue=new Uv(De),Ue=new lT(E,R,W,an,tn,yn,ue),Te=new CT(E,De),xe=new fT,un=new gT(an),ze=new Nv(E,R,W,He,j,p,l),be=new TT(E,j,tn),N=new PT(P,Tn,tn,He),Oe=new Fv(P,an,Tn),ln=new Vv(P,an,Tn),Tn.programs=Ue.programs,E.capabilities=tn,E.extensions=an,E.properties=De,E.renderLists=xe,E.shadowMap=be,E.state=He,E.info=Tn}ve();const Y=new bT(E,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const y=an.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=an.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(k,ee,!1))},this.getSize=function(y){return y.set(k,ee)},this.setSize=function(y,w,z=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=y,ee=w,t.width=Math.floor(y*X),t.height=Math.floor(w*X),z===!0&&(t.style.width=y+"px",t.style.height=w+"px"),this.setViewport(0,0,y,w)},this.getDrawingBufferSize=function(y){return y.set(k*X,ee*X).floor()},this.setDrawingBufferSize=function(y,w,z){k=y,ee=w,X=z,t.width=Math.floor(y*z),t.height=Math.floor(w*z),this.setViewport(0,0,y,w)},this.getCurrentViewport=function(y){return y.copy(C)},this.getViewport=function(y){return y.copy(_e)},this.setViewport=function(y,w,z,K){y.isVector4?_e.set(y.x,y.y,y.z,y.w):_e.set(y,w,z,K),He.viewport(C.copy(_e).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(we)},this.setScissor=function(y,w,z,K){y.isVector4?we.set(y.x,y.y,y.z,y.w):we.set(y,w,z,K),He.scissor(H.copy(we).multiplyScalar(X).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(y){He.setScissorTest(de=y)},this.setOpaqueSort=function(y){le=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(y=!0,w=!0,z=!0){let K=0;if(y){let F=!1;if(b!==null){const ae=b.texture.format;F=ae===Df||ae===Uf||ae===Hf}if(F){const ae=b.texture.type,Ee=ae===$r||ae===Qi||ae===ro||ae===$i||ae===Gf||ae===Bf,Le=ze.getClearColor(),Ce=ze.getClearAlpha(),qe=Le.r,je=Le.g,ke=Le.b;Ee?(_[0]=qe,_[1]=je,_[2]=ke,_[3]=Ce,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=qe,g[1]=je,g[2]=ke,g[3]=Ce,P.clearBufferiv(P.COLOR,0,g))}else K|=P.COLOR_BUFFER_BIT}w&&(K|=P.DEPTH_BUFFER_BIT),z&&(K|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",$,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),ze.dispose(),xe.dispose(),un.dispose(),De.dispose(),R.dispose(),W.dispose(),j.dispose(),yn.dispose(),N.dispose(),Ue.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Nl),Y.removeEventListener("sessionend",wl),Or.stop()};function $(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const y=Tn.autoReset,w=be.enabled,z=be.autoUpdate,K=be.needsUpdate,F=be.type;ve(),Tn.autoReset=y,be.enabled=w,be.autoUpdate=z,be.needsUpdate=K,be.type=F}function Se(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ze(y){const w=y.target;w.removeEventListener("dispose",Ze),Nn(w)}function Nn(y){tt(y),De.remove(y)}function tt(y){const w=De.get(y).programs;w!==void 0&&(w.forEach(function(z){Ue.releaseProgram(z)}),y.isShaderMaterial&&Ue.releaseShaderCache(y))}this.renderBufferDirect=function(y,w,z,K,F,ae){w===null&&(w=hn);const Ee=F.isMesh&&F.matrixWorld.determinant()<0,Le=eh(y,w,z,K,F);He.setMaterial(K,Ee);let Ce=z.index,qe=1;if(K.wireframe===!0){if(Ce=te.getWireframeAttribute(z),Ce===void 0)return;qe=2}const je=z.drawRange,ke=z.attributes.position;let fn=je.start*qe,mn=(je.start+je.count)*qe;ae!==null&&(fn=Math.max(fn,ae.start*qe),mn=Math.min(mn,(ae.start+ae.count)*qe)),Ce!==null?(fn=Math.max(fn,0),mn=Math.min(mn,Ce.count)):ke!=null&&(fn=Math.max(fn,0),mn=Math.min(mn,ke.count));const kn=mn-fn;if(kn<0||kn===1/0)return;yn.setup(F,K,Le,z,Ce);let wn,pn=Oe;if(Ce!==null&&(wn=J.get(Ce),pn=ln,pn.setIndex(wn)),F.isMesh)K.wireframe===!0?(He.setLineWidth(K.wireframeLinewidth*An()),pn.setMode(P.LINES)):pn.setMode(P.TRIANGLES);else if(F.isLine){let We=K.linewidth;We===void 0&&(We=1),He.setLineWidth(We*An()),F.isLineSegments?pn.setMode(P.LINES):F.isLineLoop?pn.setMode(P.LINE_LOOP):pn.setMode(P.LINE_STRIP)}else F.isPoints?pn.setMode(P.POINTS):F.isSprite&&pn.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)pn.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(an.get("WEBGL_multi_draw"))pn.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const We=F._multiDrawStarts,$n=F._multiDrawCounts,_n=F._multiDrawCount,wt=Ce?J.get(Ce).bytesPerElement:1,ii=De.get(K).currentProgram.getUniforms();for(let mt=0;mt<_n;mt++)ii.setValue(P,"_gl_DrawID",mt),pn.render(We[mt]/wt,$n[mt])}else if(F.isInstancedMesh)pn.renderInstances(fn,kn,F.count);else if(z.isInstancedBufferGeometry){const We=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,$n=Math.min(z.instanceCount,We);pn.renderInstances(fn,kn,$n)}else pn.render(fn,kn)};function vn(y,w,z){y.transparent===!0&&y.side===Et&&y.forceSinglePass===!1?(y.side=Tt,y.needsUpdate=!0,xa(y,w,z),y.side=yi,y.needsUpdate=!0,xa(y,w,z),y.side=Et):xa(y,w,z)}this.compile=function(y,w,z=null){z===null&&(z=y),h=un.get(z),h.init(w),v.push(h),z.traverseVisible(function(F){F.isLight&&F.layers.test(w.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),y!==z&&y.traverseVisible(function(F){F.isLight&&F.layers.test(w.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const K=new Set;return y.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ae=F.material;if(ae)if(Array.isArray(ae))for(let Ee=0;Ee<ae.length;Ee++){const Le=ae[Ee];vn(Le,z,F),K.add(Le)}else vn(ae,z,F),K.add(ae)}),v.pop(),h=null,K},this.compileAsync=function(y,w,z=null){const K=this.compile(y,w,z);return new Promise(F=>{function ae(){if(K.forEach(function(Ee){De.get(Ee).currentProgram.isReady()&&K.delete(Ee)}),K.size===0){F(y);return}setTimeout(ae,10)}an.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Nt=null;function ir(y){Nt&&Nt(y)}function Nl(){Or.stop()}function wl(){Or.start()}const Or=new Qf;Or.setAnimationLoop(ir),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(y){Nt=y,Y.setAnimationLoop(y),y===null?Or.stop():Or.start()},Y.addEventListener("sessionstart",Nl),Y.addEventListener("sessionend",wl),this.render=function(y,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(w),w=Y.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,w,b),h=un.get(y,v.length),h.init(w),v.push(h),Pe.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),D.setFromProjectionMatrix(Pe),ge=this.localClippingEnabled,ie=ue.init(this.clippingPlanes,ge),m=xe.get(y,T.length),m.init(),T.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ae=E.xr.getDepthSensingMesh();ae!==null&&Do(ae,w,-1/0,E.sortObjects)}Do(y,w,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(le,me),en=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,en&&ze.addToRenderList(m,y),this.info.render.frame++,ie===!0&&ue.beginShadows();const z=h.state.shadowsArray;be.render(z,y,w),ie===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,F=m.transmissive;if(h.setupLights(),w.isArrayCamera){const ae=w.cameras;if(F.length>0)for(let Ee=0,Le=ae.length;Ee<Le;Ee++){const Ce=ae[Ee];Dl(K,F,y,Ce)}en&&ze.render(y);for(let Ee=0,Le=ae.length;Ee<Le;Ee++){const Ce=ae[Ee];Fl(m,y,Ce,Ce.viewport)}}else F.length>0&&Dl(K,F,y,w),en&&ze.render(y),Fl(m,y,w);b!==null&&x===0&&(M.updateMultisampleRenderTarget(b),M.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(E,y,w),yn.resetDefaultState(),A=-1,S=null,v.pop(),v.length>0?(h=v[v.length-1],ie===!0&&ue.setGlobalState(E.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Do(y,w,z,K){if(y.visible===!1)return;if(y.layers.test(w.layers)){if(y.isGroup)z=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(w);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||D.intersectsSprite(y)){K&&Ke.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pe);const Ee=j.update(y),Le=y.material;Le.visible&&m.push(y,Ee,Le,z,Ke.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||D.intersectsObject(y))){const Ee=j.update(y),Le=y.material;if(K&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ke.copy(y.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Ke.copy(Ee.boundingSphere.center)),Ke.applyMatrix4(y.matrixWorld).applyMatrix4(Pe)),Array.isArray(Le)){const Ce=Ee.groups;for(let qe=0,je=Ce.length;qe<je;qe++){const ke=Ce[qe],fn=Le[ke.materialIndex];fn&&fn.visible&&m.push(y,Ee,fn,z,Ke.z,ke)}}else Le.visible&&m.push(y,Ee,Le,z,Ke.z,null)}}const ae=y.children;for(let Ee=0,Le=ae.length;Ee<Le;Ee++)Do(ae[Ee],w,z,K)}function Fl(y,w,z,K){const F=y.opaque,ae=y.transmissive,Ee=y.transparent;h.setupLightsView(z),ie===!0&&ue.setGlobalState(E.clippingPlanes,z),K&&He.viewport(C.copy(K)),F.length>0&&La(F,w,z),ae.length>0&&La(ae,w,z),Ee.length>0&&La(Ee,w,z),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Dl(y,w,z,K){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[K.id]===void 0&&(h.state.transmissionRenderTarget[K.id]=new Jr(1,1,{generateMipmaps:!0,type:an.has("EXT_color_buffer_half_float")||an.has("EXT_color_buffer_float")?go:$r,minFilter:Wr,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gn.workingColorSpace}));const ae=h.state.transmissionRenderTarget[K.id],Ee=K.viewport||C;ae.setSize(Ee.z*E.transmissionResolutionScale,Ee.w*E.transmissionResolutionScale);const Le=E.getRenderTarget();E.setRenderTarget(ae),E.getClearColor(V),q=E.getClearAlpha(),q<1&&E.setClearColor(16777215,.5),E.clear(),en&&ze.render(z);const Ce=E.toneMapping;E.toneMapping=yr;const qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),h.setupLightsView(K),ie===!0&&ue.setGlobalState(E.clippingPlanes,K),La(y,z,K),M.updateMultisampleRenderTarget(ae),M.updateRenderTargetMipmap(ae),an.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ke=0,fn=w.length;ke<fn;ke++){const mn=w[ke],kn=mn.object,wn=mn.geometry,pn=mn.material,We=mn.group;if(pn.side===Et&&kn.layers.test(K.layers)){const $n=pn.side;pn.side=Tt,pn.needsUpdate=!0,Ul(kn,z,K,wn,pn,We),pn.side=$n,pn.needsUpdate=!0,je=!0}}je===!0&&(M.updateMultisampleRenderTarget(ae),M.updateRenderTargetMipmap(ae))}E.setRenderTarget(Le),E.setClearColor(V,q),qe!==void 0&&(K.viewport=qe),E.toneMapping=Ce}function La(y,w,z){const K=w.isScene===!0?w.overrideMaterial:null;for(let F=0,ae=y.length;F<ae;F++){const Ee=y[F],Le=Ee.object,Ce=Ee.geometry,qe=K===null?Ee.material:K,je=Ee.group;Le.layers.test(z.layers)&&Ul(Le,w,z,Ce,qe,je)}}function Ul(y,w,z,K,F,ae){y.onBeforeRender(E,w,z,K,F,ae),y.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),F.onBeforeRender(E,w,z,K,y,ae),F.transparent===!0&&F.side===Et&&F.forceSinglePass===!1?(F.side=Tt,F.needsUpdate=!0,E.renderBufferDirect(z,w,K,F,y,ae),F.side=yi,F.needsUpdate=!0,E.renderBufferDirect(z,w,K,F,y,ae),F.side=Et):E.renderBufferDirect(z,w,K,F,y,ae),y.onAfterRender(E,w,z,K,F,ae)}function xa(y,w,z){w.isScene!==!0&&(w=hn);const K=De.get(y),F=h.state.lights,ae=h.state.shadowsArray,Ee=F.state.version,Le=Ue.getParameters(y,F.state,ae,w,z),Ce=Ue.getProgramCacheKey(Le);let qe=K.programs;K.environment=y.isMeshStandardMaterial?w.environment:null,K.fog=w.fog,K.envMap=(y.isMeshStandardMaterial?W:R).get(y.envMap||K.environment),K.envMapRotation=K.environment!==null&&y.envMap===null?w.environmentRotation:y.envMapRotation,qe===void 0&&(y.addEventListener("dispose",Ze),qe=new Map,K.programs=qe);let je=qe.get(Ce);if(je!==void 0){if(K.currentProgram===je&&K.lightsStateVersion===Ee)return Gl(y,Le),je}else Le.uniforms=Ue.getUniforms(y),y.onBeforeCompile(Le,E),je=Ue.acquireProgram(Le,Ce),qe.set(Ce,je),K.uniforms=Le.uniforms;const ke=K.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ke.clippingPlanes=ue.uniform),Gl(y,Le),K.needsLights=th(y),K.lightsStateVersion=Ee,K.needsLights&&(ke.ambientLightColor.value=F.state.ambient,ke.lightProbe.value=F.state.probe,ke.directionalLights.value=F.state.directional,ke.directionalLightShadows.value=F.state.directionalShadow,ke.spotLights.value=F.state.spot,ke.spotLightShadows.value=F.state.spotShadow,ke.rectAreaLights.value=F.state.rectArea,ke.ltc_1.value=F.state.rectAreaLTC1,ke.ltc_2.value=F.state.rectAreaLTC2,ke.pointLights.value=F.state.point,ke.pointLightShadows.value=F.state.pointShadow,ke.hemisphereLights.value=F.state.hemi,ke.directionalShadowMap.value=F.state.directionalShadowMap,ke.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ke.spotShadowMap.value=F.state.spotShadowMap,ke.spotLightMatrix.value=F.state.spotLightMatrix,ke.spotLightMap.value=F.state.spotLightMap,ke.pointShadowMap.value=F.state.pointShadowMap,ke.pointShadowMatrix.value=F.state.pointShadowMatrix),K.currentProgram=je,K.uniformsList=null,je}function Hl(y){if(y.uniformsList===null){const w=y.currentProgram.getUniforms();y.uniformsList=qa.seqWithValue(w.seq,y.uniforms)}return y.uniformsList}function Gl(y,w){const z=De.get(y);z.outputColorSpace=w.outputColorSpace,z.batching=w.batching,z.batchingColor=w.batchingColor,z.instancing=w.instancing,z.instancingColor=w.instancingColor,z.instancingMorph=w.instancingMorph,z.skinning=w.skinning,z.morphTargets=w.morphTargets,z.morphNormals=w.morphNormals,z.morphColors=w.morphColors,z.morphTargetsCount=w.morphTargetsCount,z.numClippingPlanes=w.numClippingPlanes,z.numIntersection=w.numClipIntersection,z.vertexAlphas=w.vertexAlphas,z.vertexTangents=w.vertexTangents,z.toneMapping=w.toneMapping}function eh(y,w,z,K,F){w.isScene!==!0&&(w=hn),M.resetTextureUnits();const ae=w.fog,Ee=K.isMeshStandardMaterial?w.environment:null,Le=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:St,Ce=(K.isMeshStandardMaterial?W:R).get(K.envMap||Ee),qe=K.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,je=!!z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!z.morphAttributes.position,fn=!!z.morphAttributes.normal,mn=!!z.morphAttributes.color;let kn=yr;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(kn=E.toneMapping);const wn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,pn=wn!==void 0?wn.length:0,We=De.get(K),$n=h.state.lights;if(ie===!0&&(ge===!0||y!==S)){const ot=y===S&&K.id===A;ue.setState(K,y,ot)}let _n=!1;K.version===We.__version?(We.needsLights&&We.lightsStateVersion!==$n.state.version||We.outputColorSpace!==Le||F.isBatchedMesh&&We.batching===!1||!F.isBatchedMesh&&We.batching===!0||F.isBatchedMesh&&We.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&We.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&We.instancing===!1||!F.isInstancedMesh&&We.instancing===!0||F.isSkinnedMesh&&We.skinning===!1||!F.isSkinnedMesh&&We.skinning===!0||F.isInstancedMesh&&We.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&We.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&We.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&We.instancingMorph===!1&&F.morphTexture!==null||We.envMap!==Ce||K.fog===!0&&We.fog!==ae||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ue.numPlanes||We.numIntersection!==ue.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==je||We.morphTargets!==ke||We.morphNormals!==fn||We.morphColors!==mn||We.toneMapping!==kn||We.morphTargetsCount!==pn)&&(_n=!0):(_n=!0,We.__version=K.version);let wt=We.currentProgram;_n===!0&&(wt=xa(K,w,F));let ii=!1,mt=!1,Hi=!1;const In=wt.getUniforms(),Lt=We.uniforms;if(He.useProgram(wt.program)&&(ii=!0,mt=!0,Hi=!0),K.id!==A&&(A=K.id,mt=!0),ii||S!==y){He.buffers.depth.getReversed()?(oe.copy(y.projectionMatrix),uh(oe),fh(oe),In.setValue(P,"projectionMatrix",oe)):In.setValue(P,"projectionMatrix",y.projectionMatrix),In.setValue(P,"viewMatrix",y.matrixWorldInverse);const ft=In.map.cameraPosition;ft!==void 0&&ft.setValue(P,Be.setFromMatrixPosition(y.matrixWorld)),tn.logarithmicDepthBuffer&&In.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&In.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,mt=!0,Hi=!0)}if(F.isSkinnedMesh){In.setOptional(P,F,"bindMatrix"),In.setOptional(P,F,"bindMatrixInverse");const ot=F.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),In.setValue(P,"boneTexture",ot.boneTexture,M))}F.isBatchedMesh&&(In.setOptional(P,F,"batchingTexture"),In.setValue(P,"batchingTexture",F._matricesTexture,M),In.setOptional(P,F,"batchingIdTexture"),In.setValue(P,"batchingIdTexture",F._indirectTexture,M),In.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&In.setValue(P,"batchingColorTexture",F._colorsTexture,M));const xt=z.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0)&&Ye.update(F,z,wt),(mt||We.receiveShadow!==F.receiveShadow)&&(We.receiveShadow=F.receiveShadow,In.setValue(P,"receiveShadow",F.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Lt.envMap.value=Ce,Lt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&w.environment!==null&&(Lt.envMapIntensity.value=w.environmentIntensity),mt&&(In.setValue(P,"toneMappingExposure",E.toneMappingExposure),We.needsLights&&nh(Lt,Hi),ae&&K.fog===!0&&Te.refreshFogUniforms(Lt,ae),Te.refreshMaterialUniforms(Lt,K,X,ee,h.state.transmissionRenderTarget[y.id]),qa.upload(P,Hl(We),Lt,M)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(qa.upload(P,Hl(We),Lt,M),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&In.setValue(P,"center",F.center),In.setValue(P,"modelViewMatrix",F.modelViewMatrix),In.setValue(P,"normalMatrix",F.normalMatrix),In.setValue(P,"modelMatrix",F.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ot=K.uniformsGroups;for(let ft=0,Uo=ot.length;ft<Uo;ft++){const Cr=ot[ft];N.update(Cr,wt),N.bind(Cr,wt)}}return wt}function nh(y,w){y.ambientLightColor.needsUpdate=w,y.lightProbe.needsUpdate=w,y.directionalLights.needsUpdate=w,y.directionalLightShadows.needsUpdate=w,y.pointLights.needsUpdate=w,y.pointLightShadows.needsUpdate=w,y.spotLights.needsUpdate=w,y.spotLightShadows.needsUpdate=w,y.rectAreaLights.needsUpdate=w,y.hemisphereLights.needsUpdate=w}function th(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,w,z){De.get(y.texture).__webglTexture=w,De.get(y.depthTexture).__webglTexture=z;const K=De.get(y);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=z===void 0,K.__autoAllocateDepthBuffer||an.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,w){const z=De.get(y);z.__webglFramebuffer=w,z.__useDefaultFramebuffer=w===void 0};const rh=P.createFramebuffer();this.setRenderTarget=function(y,w=0,z=0){b=y,I=w,x=z;let K=!0,F=null,ae=!1,Ee=!1;if(y){const Ce=De.get(y);if(Ce.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(P.FRAMEBUFFER,null),K=!1;else if(Ce.__webglFramebuffer===void 0)M.setupRenderTarget(y);else if(Ce.__hasExternalTextures)M.rebindTextures(y,De.get(y.texture).__webglTexture,De.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const ke=y.depthTexture;if(Ce.__boundDepthTexture!==ke){if(ke!==null&&De.has(ke)&&(y.width!==ke.image.width||y.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(y)}}const qe=y.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);const je=De.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(je[w])?F=je[w][z]:F=je[w],ae=!0):y.samples>0&&M.useMultisampledRTT(y)===!1?F=De.get(y).__webglMultisampledFramebuffer:Array.isArray(je)?F=je[z]:F=je,C.copy(y.viewport),H.copy(y.scissor),G=y.scissorTest}else C.copy(_e).multiplyScalar(X).floor(),H.copy(we).multiplyScalar(X).floor(),G=de;if(z!==0&&(F=rh),He.bindFramebuffer(P.FRAMEBUFFER,F)&&K&&He.drawBuffers(y,F),He.viewport(C),He.scissor(H),He.setScissorTest(G),ae){const Ce=De.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+w,Ce.__webglTexture,z)}else if(Ee){const Ce=De.get(y.texture),qe=w;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,z,qe)}else if(y!==null&&z!==0){const Ce=De.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ce.__webglTexture,z)}A=-1},this.readRenderTargetPixels=function(y,w,z,K,F,ae,Ee){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){He.bindFramebuffer(P.FRAMEBUFFER,Le);try{const Ce=y.texture,qe=Ce.format,je=Ce.type;if(!tn.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tn.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=y.width-K&&z>=0&&z<=y.height-F&&P.readPixels(w,z,K,F,$e.convert(qe),$e.convert(je),ae)}finally{const Ce=b!==null?De.get(b).__webglFramebuffer:null;He.bindFramebuffer(P.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,w,z,K,F,ae,Ee){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=De.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Ee!==void 0&&(Le=Le[Ee]),Le){const Ce=y.texture,qe=Ce.format,je=Ce.type;if(!tn.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tn.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=y.width-K&&z>=0&&z<=y.height-F){He.bindFramebuffer(P.FRAMEBUFFER,Le);const ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ke),P.bufferData(P.PIXEL_PACK_BUFFER,ae.byteLength,P.STREAM_READ),P.readPixels(w,z,K,F,$e.convert(qe),$e.convert(je),0);const fn=b!==null?De.get(b).__webglFramebuffer:null;He.bindFramebuffer(P.FRAMEBUFFER,fn);const mn=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await dh(P,mn,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ae),P.deleteBuffer(ke),P.deleteSync(mn),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,w=null,z=0){y.isTexture!==!0&&(ui("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,y=arguments[1]);const K=Math.pow(2,-z),F=Math.floor(y.image.width*K),ae=Math.floor(y.image.height*K),Ee=w!==null?w.x:0,Le=w!==null?w.y:0;M.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,Ee,Le,F,ae),He.unbindTexture()};const ih=P.createFramebuffer(),ah=P.createFramebuffer();this.copyTextureToTexture=function(y,w,z=null,K=null,F=0,ae=null){y.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,y=arguments[1],w=arguments[2],ae=arguments[3]||0,z=null),ae===null&&(F!==0?(ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=F,F=0):ae=0);let Ee,Le,Ce,qe,je,ke,fn,mn,kn;const wn=y.isCompressedTexture?y.mipmaps[ae]:y.image;if(z!==null)Ee=z.max.x-z.min.x,Le=z.max.y-z.min.y,Ce=z.isBox3?z.max.z-z.min.z:1,qe=z.min.x,je=z.min.y,ke=z.isBox3?z.min.z:0;else{const xt=Math.pow(2,-F);Ee=Math.floor(wn.width*xt),Le=Math.floor(wn.height*xt),y.isDataArrayTexture?Ce=wn.depth:y.isData3DTexture?Ce=Math.floor(wn.depth*xt):Ce=1,qe=0,je=0,ke=0}K!==null?(fn=K.x,mn=K.y,kn=K.z):(fn=0,mn=0,kn=0);const pn=$e.convert(w.format),We=$e.convert(w.type);let $n;w.isData3DTexture?(M.setTexture3D(w,0),$n=P.TEXTURE_3D):w.isDataArrayTexture||w.isCompressedArrayTexture?(M.setTexture2DArray(w,0),$n=P.TEXTURE_2D_ARRAY):(M.setTexture2D(w,0),$n=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,w.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,w.unpackAlignment);const _n=P.getParameter(P.UNPACK_ROW_LENGTH),wt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ii=P.getParameter(P.UNPACK_SKIP_PIXELS),mt=P.getParameter(P.UNPACK_SKIP_ROWS),Hi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,wn.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wn.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,je),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ke);const In=y.isDataArrayTexture||y.isData3DTexture,Lt=w.isDataArrayTexture||w.isData3DTexture;if(y.isDepthTexture){const xt=De.get(y),ot=De.get(w),ft=De.get(xt.__renderTarget),Uo=De.get(ot.__renderTarget);He.bindFramebuffer(P.READ_FRAMEBUFFER,ft.__webglFramebuffer),He.bindFramebuffer(P.DRAW_FRAMEBUFFER,Uo.__webglFramebuffer);for(let Cr=0;Cr<Ce;Cr++)In&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.get(y).__webglTexture,F,ke+Cr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.get(w).__webglTexture,ae,kn+Cr)),P.blitFramebuffer(qe,je,Ee,Le,fn,mn,Ee,Le,P.DEPTH_BUFFER_BIT,P.NEAREST);He.bindFramebuffer(P.READ_FRAMEBUFFER,null),He.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||y.isRenderTargetTexture||De.has(y)){const xt=De.get(y),ot=De.get(w);He.bindFramebuffer(P.READ_FRAMEBUFFER,ih),He.bindFramebuffer(P.DRAW_FRAMEBUFFER,ah);for(let ft=0;ft<Ce;ft++)In?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xt.__webglTexture,F,ke+ft):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,xt.__webglTexture,F),Lt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ot.__webglTexture,ae,kn+ft):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ot.__webglTexture,ae),F!==0?P.blitFramebuffer(qe,je,Ee,Le,fn,mn,Ee,Le,P.COLOR_BUFFER_BIT,P.NEAREST):Lt?P.copyTexSubImage3D($n,ae,fn,mn,kn+ft,qe,je,Ee,Le):P.copyTexSubImage2D($n,ae,fn,mn,qe,je,Ee,Le);He.bindFramebuffer(P.READ_FRAMEBUFFER,null),He.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Lt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D($n,ae,fn,mn,kn,Ee,Le,Ce,pn,We,wn.data):w.isCompressedArrayTexture?P.compressedTexSubImage3D($n,ae,fn,mn,kn,Ee,Le,Ce,pn,wn.data):P.texSubImage3D($n,ae,fn,mn,kn,Ee,Le,Ce,pn,We,wn):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,ae,fn,mn,Ee,Le,pn,We,wn.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,ae,fn,mn,wn.width,wn.height,pn,wn.data):P.texSubImage2D(P.TEXTURE_2D,ae,fn,mn,Ee,Le,pn,We,wn);P.pixelStorei(P.UNPACK_ROW_LENGTH,_n),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,wt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ii),P.pixelStorei(P.UNPACK_SKIP_ROWS,mt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Hi),ae===0&&w.generateMipmaps&&P.generateMipmap($n),He.unbindTexture()},this.copyTextureToTexture3D=function(y,w,z=null,K=null,F=0){return y.isTexture!==!0&&(ui("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,K=arguments[1]||null,y=arguments[2],w=arguments[3],F=arguments[4]||0),ui('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,w,z,K,F)},this.initRenderTarget=function(y){De.get(y).__webglFramebuffer===void 0&&M.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?M.setTextureCube(y,0):y.isData3DTexture?M.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?M.setTexture2DArray(y,0):M.setTexture2D(y,0),He.unbindTexture()},this.resetState=function(){I=0,x=0,b=null,He.reset(),yn.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ph}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n;const t=this.getContext();t.drawingBufferColorspace=gn._getDrawingBufferColorSpace(n),t.unpackColorSpace=gn._getUnpackColorSpace()}}function id(e,n,t){const r=t.length-e-1;if(n>=t[r])return r-1;if(n<=t[e])return e;let i=e,a=r,o=Math.floor((i+a)/2);for(;n<t[o]||n>=t[o+1];)n<t[o]?a=o:i=o,o=Math.floor((i+a)/2);return o}function wT(e,n,t,r){const i=[],a=[],o=[];i[0]=1;for(let s=1;s<=t;++s){a[s]=n-r[e+1-s],o[s]=r[e+s]-n;let l=0;for(let c=0;c<s;++c){const u=o[c+1],f=a[s-c],d=i[c]/(u+f);i[c]=l+u*d,l=f*d}i[s]=l}return i}function FT(e,n,t,r){const i=id(e,r,n),a=wT(i,r,e,n),o=new On(0,0,0,0);for(let s=0;s<=e;++s){const l=t[i-e+s],c=a[s],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function DT(e,n,t,r,i){const a=[];for(let f=0;f<=t;++f)a[f]=0;const o=[];for(let f=0;f<=r;++f)o[f]=a.slice(0);const s=[];for(let f=0;f<=t;++f)s[f]=a.slice(0);s[0][0]=1;const l=a.slice(0),c=a.slice(0);for(let f=1;f<=t;++f){l[f]=n-i[e+1-f],c[f]=i[e+f]-n;let d=0;for(let p=0;p<f;++p){const _=c[p+1],g=l[f-p];s[f][p]=_+g;const m=s[p][f-1]/s[f][p];s[p][f]=d+_*m,d=g*m}s[f][f]=d}for(let f=0;f<=t;++f)o[0][f]=s[f][t];for(let f=0;f<=t;++f){let d=0,p=1;const _=[];for(let g=0;g<=t;++g)_[g]=a.slice(0);_[0][0]=1;for(let g=1;g<=r;++g){let m=0;const h=f-g,T=t-g;f>=g&&(_[p][0]=_[d][0]/s[T+1][h],m=_[p][0]*s[h][T]);const v=h>=-1?1:-h,E=f-1<=T?g-1:t-f;for(let I=v;I<=E;++I)_[p][I]=(_[d][I]-_[d][I-1])/s[T+1][h+I],m+=_[p][I]*s[h+I][T];f<=T&&(_[p][g]=-_[d][g-1]/s[T+1][f],m+=_[p][g]*s[f][T]),o[g][f]=m;const L=d;d=p,p=L}}let u=t;for(let f=1;f<=r;++f){for(let d=0;d<=t;++d)o[f][d]*=u;u*=t-f}return o}function UT(e,n,t,r,i){const a=i<e?i:e,o=[],s=id(e,r,n),l=DT(s,r,e,a,n),c=[];for(let u=0;u<t.length;++u){const f=t[u].clone(),d=f.w;f.x*=d,f.y*=d,f.z*=d,c[u]=f}for(let u=0;u<=a;++u){const f=c[s-e].clone().multiplyScalar(l[u][0]);for(let d=1;d<=e;++d)f.add(c[s-e+d].clone().multiplyScalar(l[u][d]));o[u]=f}for(let u=a+1;u<=i+1;++u)o[u]=new On(0,0,0);return o}function HT(e,n){let t=1;for(let i=2;i<=e;++i)t*=i;let r=1;for(let i=2;i<=n;++i)r*=i;for(let i=2;i<=e-n;++i)r*=i;return t/r}function GT(e){const n=e.length,t=[],r=[];for(let a=0;a<n;++a){const o=e[a];t[a]=new ce(o.x,o.y,o.z),r[a]=o.w}const i=[];for(let a=0;a<n;++a){const o=t[a].clone();for(let s=1;s<=a;++s)o.sub(i[a-s].clone().multiplyScalar(HT(a,s)*r[s]));i[a]=o.divideScalar(r[0])}return i}function BT(e,n,t,r,i){const a=UT(e,n,t,r,i);return GT(a)}class kT extends Lm{constructor(n,t,r,i,a){super();const o=t?t.length-1:0,s=r?r.length:0;this.degree=n,this.knots=t,this.controlPoints=[],this.startKnot=i||0,this.endKnot=a||o;for(let l=0;l<s;++l){const c=r[l];this.controlPoints[l]=new On(c.x,c.y,c.z,c.w)}}getPoint(n,t=new ce){const r=t,i=this.knots[this.startKnot]+n*(this.knots[this.endKnot]-this.knots[this.startKnot]),a=FT(this.degree,this.knots,this.controlPoints,i);return a.w!==1&&a.divideScalar(a.w),r.set(a.x,a.y,a.z)}getTangent(n,t=new ce){const r=t,i=this.knots[0]+n*(this.knots[this.knots.length-1]-this.knots[0]),a=BT(this.degree,this.knots,this.controlPoints,i,1);return r.copy(a[1]).normalize(),r}toJSON(){const n=super.toJSON();return n.degree=this.degree,n.knots=[...this.knots],n.controlPoints=this.controlPoints.map(t=>t.toArray()),n.startKnot=this.startKnot,n.endKnot=this.endKnot,n}fromJSON(n){return super.fromJSON(n),this.degree=n.degree,this.knots=[...n.knots],this.controlPoints=n.controlPoints.map(t=>new On(t[0],t[1],t[2],t[3])),this.startKnot=n.startKnot,this.endKnot=n.endKnot,this}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Pt=Uint8Array,pi=Uint16Array,WT=Int32Array,ad=new Pt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),od=new Pt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),zT=new Pt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),sd=function(e,n){for(var t=new pi(31),r=0;r<31;++r)t[r]=n+=1<<e[r-1];for(var i=new WT(t[30]),r=1;r<30;++r)for(var a=t[r];a<t[r+1];++a)i[a]=a-t[r]<<5|r;return{b:t,r:i}},ld=sd(ad,2),cd=ld.b,VT=ld.r;cd[28]=258,VT[258]=28;var XT=sd(od,0),KT=XT.b,Fs=new pi(32768);for(var Mn=0;Mn<32768;++Mn){var mr=(Mn&43690)>>1|(Mn&21845)<<1;mr=(mr&52428)>>2|(mr&13107)<<2,mr=(mr&61680)>>4|(mr&3855)<<4,Fs[Mn]=((mr&65280)>>8|(mr&255)<<8)>>1}var qi=function(e,n,t){for(var r=e.length,i=0,a=new pi(n);i<r;++i)e[i]&&++a[e[i]-1];var o=new pi(n);for(i=1;i<n;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(t){s=new pi(1<<n);var l=15-n;for(i=0;i<r;++i)if(e[i])for(var c=i<<4|e[i],u=n-e[i],f=o[e[i]-1]++<<u,d=f|(1<<u)-1;f<=d;++f)s[Fs[f]>>l]=c}else for(s=new pi(r),i=0;i<r;++i)e[i]&&(s[i]=Fs[o[e[i]-1]++]>>15-e[i]);return s},_a=new Pt(288);for(var Mn=0;Mn<144;++Mn)_a[Mn]=8;for(var Mn=144;Mn<256;++Mn)_a[Mn]=9;for(var Mn=256;Mn<280;++Mn)_a[Mn]=7;for(var Mn=280;Mn<288;++Mn)_a[Mn]=8;var ud=new Pt(32);for(var Mn=0;Mn<32;++Mn)ud[Mn]=5;var YT=qi(_a,9,1),qT=qi(ud,5,1),Jo=function(e){for(var n=e[0],t=1;t<e.length;++t)e[t]>n&&(n=e[t]);return n},Ft=function(e,n,t){var r=n/8|0;return(e[r]|e[r+1]<<8)>>(n&7)&t},$o=function(e,n){var t=n/8|0;return(e[t]|e[t+1]<<8|e[t+2]<<16)>>(n&7)},jT=function(e){return(e+7)/8|0},ZT=function(e,n,t){return(t==null||t>e.length)&&(t=e.length),new Pt(e.subarray(n,t))},JT=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ut=function(e,n,t){var r=new Error(n||JT[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Ut),!t)throw r;return r},$T=function(e,n,t,r){var i=e.length,a=0;if(!i||n.f&&!n.l)return t||new Pt(0);var o=!t,s=o||n.i!=2,l=n.i;o&&(t=new Pt(i*3));var c=function(hn){var en=t.length;if(hn>en){var An=new Pt(Math.max(en*2,hn));An.set(t),t=An}},u=n.f||0,f=n.p||0,d=n.b||0,p=n.l,_=n.d,g=n.m,m=n.n,h=i*8;do{if(!p){u=Ft(e,f,1);var T=Ft(e,f+1,3);if(f+=3,T)if(T==1)p=YT,_=qT,g=9,m=5;else if(T==2){var I=Ft(e,f,31)+257,x=Ft(e,f+10,15)+4,b=I+Ft(e,f+5,31)+1;f+=14;for(var A=new Pt(b),S=new Pt(19),C=0;C<x;++C)S[zT[C]]=Ft(e,f+C*3,7);f+=x*3;for(var H=Jo(S),G=(1<<H)-1,V=qi(S,H,1),C=0;C<b;){var q=V[Ft(e,f,G)];f+=q&15;var v=q>>4;if(v<16)A[C++]=v;else{var k=0,ee=0;for(v==16?(ee=3+Ft(e,f,3),f+=2,k=A[C-1]):v==17?(ee=3+Ft(e,f,7),f+=3):v==18&&(ee=11+Ft(e,f,127),f+=7);ee--;)A[C++]=k}}var X=A.subarray(0,I),le=A.subarray(I);g=Jo(X),m=Jo(le),p=qi(X,g,1),_=qi(le,m,1)}else Ut(1);else{var v=jT(f)+4,E=e[v-4]|e[v-3]<<8,L=v+E;if(L>i){l&&Ut(0);break}s&&c(d+E),t.set(e.subarray(v,L),d),n.b=d+=E,n.p=f=L*8,n.f=u;continue}if(f>h){l&&Ut(0);break}}s&&c(d+131072);for(var me=(1<<g)-1,_e=(1<<m)-1,we=f;;we=f){var k=p[$o(e,f)&me],de=k>>4;if(f+=k&15,f>h){l&&Ut(0);break}if(k||Ut(2),de<256)t[d++]=de;else if(de==256){we=f,p=null;break}else{var D=de-254;if(de>264){var C=de-257,ie=ad[C];D=Ft(e,f,(1<<ie)-1)+cd[C],f+=ie}var ge=_[$o(e,f)&_e],oe=ge>>4;ge||Ut(3),f+=ge&15;var le=KT[oe];if(oe>3){var ie=od[oe];le+=$o(e,f)&(1<<ie)-1,f+=ie}if(f>h){l&&Ut(0);break}s&&c(d+131072);var Pe=d+D;if(d<le){var Be=a-le,Ke=Math.min(le,Pe);for(Be+d<0&&Ut(3);d<Ke;++d)t[d]=r[Be+d]}for(;d<Pe;++d)t[d]=t[d-le]}}n.l=p,n.p=we,n.b=d,n.f=u,p&&(u=1,n.m=g,n.d=_,n.n=m)}while(!u);return d!=t.length&&o?ZT(t,0,d):t.subarray(0,d)},QT=new Pt(0),eS=function(e,n){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&Ut(6,"invalid zlib data"),(e[1]>>5&1)==1&&Ut(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function nS(e,n){return $T(e.subarray(eS(e),-4),{i:2},n,n)}var tS=typeof TextDecoder<"u"&&new TextDecoder,rS=0;try{tS.decode(QT,{stream:!0}),rS=1}catch{}class iS extends Xf{constructor(n,t={}){const r=t.font;if(r===void 0)super();else{const i=r.generateShapes(n,t.size);t.depth===void 0&&t.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),t.depth=t.depth!==void 0?t.depth:t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}function aS(e,n=!1){const t=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,l=new Jn;let c=0;for(let u=0;u<e.length;++u){const f=e[u];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(f.attributes[p]),d++}if(d!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(s!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(n){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const f=[];for(let d=0;d<e.length;++d){const p=e[d].index;for(let _=0;_<p.count;++_)f.push(p.getX(_)+u);u+=e[d].attributes.position.count}l.setIndex(f)}for(const u in a){const f=Xc(a[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<f;++d){const p=[];for(let g=0;g<o[u].length;++g)p.push(o[u][g][d]);const _=Xc(p);if(!_)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(_)}}return l}function Xc(e){let n,t,r,i=-1,a=0;for(let c=0;c<e.length;++c){const u=e[c];if(n===void 0&&(n=u.array.constructor),n!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=u.normalized),r!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=u.count*t}const o=new n(a),s=new ct(o,t,r);let l=0;for(let c=0;c<e.length;++c){const u=e[c];if(u.isInterleavedBufferAttribute){const f=l/t;for(let d=0,p=u.count;d<p;d++)for(let _=0;_<t;_++){const g=u.getComponent(d,_);s.setComponent(d+f,_,g)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(s.gpuType=i),s}function Kc(e,n){if(n===xm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(n===bs||n===Kf){let t=e.getIndex();if(t===null){const o=[],s=e.getAttribute("position");if(s!==void 0){for(let l=0;l<s.count;l++)o.push(l);e.setIndex(o),t=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}const r=t.count-2,i=[];if(n===bs)for(let o=1;o<=r;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<r;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=e.clone();return a.setIndex(i),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",n),e}const Yc=new To,Oa=new ce;class fd extends Mm{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const n=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],r=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(r),this.setAttribute("position",new Ct(n,3)),this.setAttribute("uv",new Ct(t,2))}applyMatrix4(n){const t=this.attributes.instanceStart,r=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(n),r.applyMatrix4(n),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(n){let t;n instanceof Float32Array?t=n:Array.isArray(n)&&(t=new Float32Array(n));const r=new Os(t,6,1);return this.setAttribute("instanceStart",new Vr(r,3,0)),this.setAttribute("instanceEnd",new Vr(r,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(n){let t;n instanceof Float32Array?t=n:Array.isArray(n)&&(t=new Float32Array(n));const r=new Os(t,6,1);return this.setAttribute("instanceColorStart",new Vr(r,3,0)),this.setAttribute("instanceColorEnd",new Vr(r,3,3)),this}fromWireframeGeometry(n){return this.setPositions(n.attributes.position.array),this}fromEdgesGeometry(n){return this.setPositions(n.attributes.position.array),this}fromMesh(n){return this.fromWireframeGeometry(new al(n.geometry)),this}fromLineSegments(n){const t=n.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new To);const n=this.attributes.instanceStart,t=this.attributes.instanceEnd;n!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(n),Yc.setFromBufferAttribute(t),this.boundingBox.union(Yc))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ol),this.boundingBox===null&&this.computeBoundingBox();const n=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(n!==void 0&&t!==void 0){const r=this.boundingSphere.center;this.boundingBox.getCenter(r);let i=0;for(let a=0,o=n.count;a<o;a++)Oa.fromBufferAttribute(n,a),i=Math.max(i,r.distanceToSquared(Oa)),Oa.fromBufferAttribute(t,a),i=Math.max(i,r.distanceToSquared(Oa));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(n){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(n)}}pe.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Zn(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ht.line={uniforms:Eo.merge([pe.common,pe.fog,pe.line]),vertexShader:`
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
		`};class dd extends dr{constructor(n){super({type:"LineMaterial",uniforms:Eo.clone(ht.line.uniforms),vertexShader:ht.line.vertexShader,fragmentShader:ht.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(n)}get color(){return this.uniforms.diffuse.value}set color(n){this.uniforms.diffuse.value=n}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(n){n===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(n){this.uniforms.linewidth&&(this.uniforms.linewidth.value=n)}get dashed(){return"USE_DASH"in this.defines}set dashed(n){n===!0!==this.dashed&&(this.needsUpdate=!0),n===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(n){this.uniforms.dashScale.value=n}get dashSize(){return this.uniforms.dashSize.value}set dashSize(n){this.uniforms.dashSize.value=n}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(n){this.uniforms.dashOffset.value=n}get gapSize(){return this.uniforms.gapSize.value}set gapSize(n){this.uniforms.gapSize.value=n}get opacity(){return this.uniforms.opacity.value}set opacity(n){this.uniforms&&(this.uniforms.opacity.value=n)}get resolution(){return this.uniforms.resolution.value}set resolution(n){this.uniforms.resolution.value.copy(n)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(n){this.defines&&(n===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),n===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Qo=new On,qc=new ce,jc=new ce,Qn=new On,et=new On,zt=new On,es=new ce,ns=new sn,nt=new Im,Zc=new ce,Ca=new To,Pa=new ol,Vt=new On;let jt,qr;function Jc(e,n,t){return Vt.set(0,0,-n,1).applyMatrix4(e.projectionMatrix),Vt.multiplyScalar(1/Vt.w),Vt.x=qr/t.width,Vt.y=qr/t.height,Vt.applyMatrix4(e.projectionMatrixInverse),Vt.multiplyScalar(1/Vt.w),Math.abs(Math.max(Vt.x,Vt.y))}function oS(e,n){const t=e.matrixWorld,r=e.geometry,i=r.attributes.instanceStart,a=r.attributes.instanceEnd,o=Math.min(r.instanceCount,i.count);for(let s=0,l=o;s<l;s++){nt.start.fromBufferAttribute(i,s),nt.end.fromBufferAttribute(a,s),nt.applyMatrix4(t);const c=new ce,u=new ce;jt.distanceSqToSegment(nt.start,nt.end,u,c),u.distanceTo(c)<qr*.5&&n.push({point:u,pointOnLine:c,distance:jt.origin.distanceTo(u),object:e,face:null,faceIndex:s,uv:null,uv1:null})}}function sS(e,n,t){const r=n.projectionMatrix,a=e.material.resolution,o=e.matrixWorld,s=e.geometry,l=s.attributes.instanceStart,c=s.attributes.instanceEnd,u=Math.min(s.instanceCount,l.count),f=-n.near;jt.at(1,zt),zt.w=1,zt.applyMatrix4(n.matrixWorldInverse),zt.applyMatrix4(r),zt.multiplyScalar(1/zt.w),zt.x*=a.x/2,zt.y*=a.y/2,zt.z=0,es.copy(zt),ns.multiplyMatrices(n.matrixWorldInverse,o);for(let d=0,p=u;d<p;d++){if(Qn.fromBufferAttribute(l,d),et.fromBufferAttribute(c,d),Qn.w=1,et.w=1,Qn.applyMatrix4(ns),et.applyMatrix4(ns),Qn.z>f&&et.z>f)continue;if(Qn.z>f){const v=Qn.z-et.z,E=(Qn.z-f)/v;Qn.lerp(et,E)}else if(et.z>f){const v=et.z-Qn.z,E=(et.z-f)/v;et.lerp(Qn,E)}Qn.applyMatrix4(r),et.applyMatrix4(r),Qn.multiplyScalar(1/Qn.w),et.multiplyScalar(1/et.w),Qn.x*=a.x/2,Qn.y*=a.y/2,et.x*=a.x/2,et.y*=a.y/2,nt.start.copy(Qn),nt.start.z=0,nt.end.copy(et),nt.end.z=0;const g=nt.closestPointToPointParameter(es,!0);nt.at(g,Zc);const m=Xn.lerp(Qn.z,et.z,g),h=m>=-1&&m<=1,T=es.distanceTo(Zc)<qr*.5;if(h&&T){nt.start.fromBufferAttribute(l,d),nt.end.fromBufferAttribute(c,d),nt.start.applyMatrix4(o),nt.end.applyMatrix4(o);const v=new ce,E=new ce;jt.distanceSqToSegment(nt.start,nt.end,E,v),t.push({point:E,pointOnLine:v,distance:jt.origin.distanceTo(E),object:e,face:null,faceIndex:d,uv:null,uv1:null})}}}class lS extends on{constructor(n=new fd,t=new dd({color:Math.random()*16777215})){super(n,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const n=this.geometry,t=n.attributes.instanceStart,r=n.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let o=0,s=0,l=t.count;o<l;o++,s+=2)qc.fromBufferAttribute(t,o),jc.fromBufferAttribute(r,o),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qc.distanceTo(jc);const a=new Os(i,2,1);return n.setAttribute("instanceDistanceStart",new Vr(a,1,0)),n.setAttribute("instanceDistanceEnd",new Vr(a,1,1)),this}raycast(n,t){const r=this.material.worldUnits,i=n.camera;i===null&&!r&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const a=n.params.Line2!==void 0&&n.params.Line2.threshold||0;jt=n.ray;const o=this.matrixWorld,s=this.geometry,l=this.material;qr=l.linewidth+a,s.boundingSphere===null&&s.computeBoundingSphere(),Pa.copy(s.boundingSphere).applyMatrix4(o);let c;if(r)c=qr*.5;else{const f=Math.max(i.near,Pa.distanceToPoint(jt.origin));c=Jc(i,f,l.resolution)}if(Pa.radius+=c,jt.intersectsSphere(Pa)===!1)return;s.boundingBox===null&&s.computeBoundingBox(),Ca.copy(s.boundingBox).applyMatrix4(o);let u;if(r)u=qr*.5;else{const f=Math.max(i.near,Ca.distanceToPoint(jt.origin));u=Jc(i,f,l.resolution)}Ca.expandByScalar(u),jt.intersectsBox(Ca)!==!1&&(r?oS(this,t):sS(this,i,t))}onBeforeRender(n){const t=this.material.uniforms;t&&t.resolution&&(n.getViewport(Qo),this.material.uniforms.resolution.value.set(Qo.z,Qo.w))}}class cS extends Ii{constructor(n){super(n),this.animateBonePositions=!0,this.animateBoneRotations=!0}load(n,t,r,i){const a=this,o=new ha(a.manager);o.setPath(a.path),o.setRequestHeader(a.requestHeader),o.setWithCredentials(a.withCredentials),o.load(n,function(s){try{t(a.parse(s))}catch(l){i?i(l):console.error(l),a.manager.itemError(n)}},r,i)}parse(n){function t(p){s(p)!=="HIERARCHY"&&console.error("THREE.BVHLoader: HIERARCHY expected.");const _=[],g=i(p,s(p),_);s(p)!=="MOTION"&&console.error("THREE.BVHLoader: MOTION expected.");let m=s(p).split(/[\s]+/);const h=parseInt(m[1]);isNaN(h)&&console.error("THREE.BVHLoader: Failed to read number of frames."),m=s(p).split(/[\s]+/);const T=parseFloat(m[2]);isNaN(T)&&console.error("THREE.BVHLoader: Failed to read frame time.");for(let v=0;v<h;v++)m=s(p).split(/[\s]+/),r(m,v*T,g);return _}function r(p,_,g){if(g.type==="ENDSITE")return;const m={time:_,position:new ce,rotation:new vt};g.frames.push(m);const h=new vt,T=new ce(1,0,0),v=new ce(0,1,0),E=new ce(0,0,1);for(let L=0;L<g.channels.length;L++)switch(g.channels[L]){case"Xposition":m.position.x=parseFloat(p.shift().trim());break;case"Yposition":m.position.y=parseFloat(p.shift().trim());break;case"Zposition":m.position.z=parseFloat(p.shift().trim());break;case"Xrotation":h.setFromAxisAngle(T,parseFloat(p.shift().trim())*Math.PI/180),m.rotation.multiply(h);break;case"Yrotation":h.setFromAxisAngle(v,parseFloat(p.shift().trim())*Math.PI/180),m.rotation.multiply(h);break;case"Zrotation":h.setFromAxisAngle(E,parseFloat(p.shift().trim())*Math.PI/180),m.rotation.multiply(h);break;default:console.warn("THREE.BVHLoader: Invalid channel type.")}for(let L=0;L<g.children.length;L++)r(p,_,g.children[L])}function i(p,_,g){const m={name:"",type:"",frames:[]};g.push(m);let h=_.split(/[\s]+/);h[0].toUpperCase()==="END"&&h[1].toUpperCase()==="SITE"?(m.type="ENDSITE",m.name="ENDSITE"):(m.name=h[1],m.type=h[0].toUpperCase()),s(p)!=="{"&&console.error("THREE.BVHLoader: Expected opening { after type & name"),h=s(p).split(/[\s]+/),h[0]!=="OFFSET"&&console.error("THREE.BVHLoader: Expected OFFSET but got: "+h[0]),h.length!==4&&console.error("THREE.BVHLoader: Invalid number of values for OFFSET.");const T=new ce(parseFloat(h[1]),parseFloat(h[2]),parseFloat(h[3]));if((isNaN(T.x)||isNaN(T.y)||isNaN(T.z))&&console.error("THREE.BVHLoader: Invalid values of OFFSET."),m.offset=T,m.type!=="ENDSITE"){h=s(p).split(/[\s]+/),h[0]!=="CHANNELS"&&console.error("THREE.BVHLoader: Expected CHANNELS definition.");const v=parseInt(h[1]);m.channels=h.splice(2,v),m.children=[]}for(;;){const v=s(p);if(v==="}")return m;m.children.push(i(p,v,g))}}function a(p,_){const g=new ta;if(_.push(g),g.position.add(p.offset),g.name=p.name,p.type!=="ENDSITE")for(let m=0;m<p.children.length;m++)g.add(a(p.children[m],_));return g}function o(p){const _=[];for(let g=0;g<p.length;g++){const m=p[g];if(m.type==="ENDSITE")continue;const h=[],T=[],v=[];for(let E=0;E<m.frames.length;E++){const L=m.frames[E];h.push(L.time),T.push(L.position.x+m.offset.x),T.push(L.position.y+m.offset.y),T.push(L.position.z+m.offset.z),v.push(L.rotation.x),v.push(L.rotation.y),v.push(L.rotation.z),v.push(L.rotation.w)}l.animateBonePositions&&_.push(new ra(m.name+".position",h,T)),l.animateBoneRotations&&_.push(new bi(m.name+".quaternion",h,v))}return new Ro("animation",-1,_)}function s(p){let _;for(;(_=p.shift().trim()).length===0;);return _}const l=this,c=n.split(/[\r\n]+/g),u=t(c),f=[];a(u[0],f);const d=o(u);return{skeleton:new So(f),clip:d}}}let nn,Hn,st;class uS extends Ii{constructor(n){super(n)}load(n,t,r,i){const a=this,o=a.path===""?mi.extractUrlBase(n):a.path,s=new ha(this.manager);s.setPath(a.path),s.setResponseType("arraybuffer"),s.setRequestHeader(a.requestHeader),s.setWithCredentials(a.withCredentials),s.load(n,function(l){try{t(a.parse(l,o))}catch(c){i?i(c):console.error(c),a.manager.itemError(n)}},r,i)}parse(n,t){if(_S(n))nn=new mS().parse(n);else{const i=md(n);if(!gS(i))throw new Error("THREE.FBXLoader: Unknown format.");if(Qc(i)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Qc(i));nn=new hS().parse(i)}const r=new sl(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new fS(r,this.manager).parse(nn)}}class fS{constructor(n,t){this.textureLoader=n,this.manager=t}parse(){Hn=this.parseConnections();const n=this.parseImages(),t=this.parseTextures(n),r=this.parseMaterials(t),i=this.parseDeformers(),a=new dS().parse(i);return this.parseScene(i,a,r),st}parseConnections(){const n=new Map;return"Connections"in nn&&nn.Connections.connections.forEach(function(r){const i=r[0],a=r[1],o=r[2];n.has(i)||n.set(i,{parents:[],children:[]});const s={ID:a,relationship:o};n.get(i).parents.push(s),n.has(a)||n.set(a,{parents:[],children:[]});const l={ID:i,relationship:o};n.get(a).children.push(l)}),n}parseImages(){const n={},t={};if("Video"in nn.Objects){const r=nn.Objects.Video;for(const i in r){const a=r[i],o=parseInt(i);if(n[o]=a.RelativeFilename||a.Filename,"Content"in a){const s=a.Content instanceof ArrayBuffer&&a.Content.byteLength>0,l=typeof a.Content=="string"&&a.Content!=="";if(s||l){const c=this.parseImage(r[i]);t[a.RelativeFilename||a.Filename]=c}}}}for(const r in n){const i=n[r];t[i]!==void 0?n[r]=t[i]:n[r]=n[r].split("\\").pop()}return n}parseImage(n){const t=n.Content,r=n.RelativeFilename||n.Filename,i=r.slice(r.lastIndexOf(".")+1).toLowerCase();let a;switch(i){case"bmp":a="image/bmp";break;case"jpg":case"jpeg":a="image/jpeg";break;case"png":a="image/png";break;case"tif":a="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",r),a="image/tga";break;default:console.warn('FBXLoader: Image type "'+i+'" is not supported.');return}if(typeof t=="string")return"data:"+a+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:a}))}}parseTextures(n){const t=new Map;if("Texture"in nn.Objects){const r=nn.Objects.Texture;for(const i in r){const a=this.parseTexture(r[i],n);t.set(parseInt(i),a)}}return t}parseTexture(n,t){const r=this.loadTexture(n,t);r.ID=n.id,r.name=n.attrName;const i=n.WrapModeU,a=n.WrapModeV,o=i!==void 0?i.value:0,s=a!==void 0?a.value:0;if(r.wrapS=o===0?Li:to,r.wrapT=s===0?Li:to,"Scaling"in n){const l=n.Scaling.value;r.repeat.x=l[0],r.repeat.y=l[1]}if("Translation"in n){const l=n.Translation.value;r.offset.x=l[0],r.offset.y=l[1]}return r}loadTexture(n,t){const r=new Set(["tga","tif","tiff","exr","dds","hdr","ktx2"]),i=n.FileName.split(".").pop().toLowerCase(),a=r.has(i)?this.manager.getHandler(`.${i}`):this.textureLoader;if(!a)return console.warn(`FBXLoader: ${i.toUpperCase()} loader not found, creating placeholder texture for`,n.RelativeFilename),new ea;const o=a.path;o||a.setPath(this.textureLoader.path);const s=Hn.get(n.id).children;let l;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(l=t[s[0].ID],(l.indexOf("blob:")===0||l.indexOf("data:")===0)&&a.setPath(void 0));const c=a.load(l);return a.setPath(o),c}parseMaterials(n){const t=new Map;if("Material"in nn.Objects){const r=nn.Objects.Material;for(const i in r){const a=this.parseMaterial(r[i],n);a!==null&&t.set(parseInt(i),a)}}return t}parseMaterial(n,t){const r=n.id,i=n.attrName;let a=n.ShadingModel;if(typeof a=="object"&&(a=a.value),!Hn.has(r))return null;const o=this.parseParameters(n,t,r);let s;switch(a.toLowerCase()){case"phong":s=new Ya;break;case"lambert":s=new bm;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',a),s=new Ya;break}return s.setValues(o),s.name=i,s}parseParameters(n,t,r){const i={};n.BumpFactor&&(i.bumpScale=n.BumpFactor.value),n.Diffuse?i.color=gn.toWorkingColorSpace(new fe().fromArray(n.Diffuse.value),Vn):n.DiffuseColor&&(n.DiffuseColor.type==="Color"||n.DiffuseColor.type==="ColorRGB")&&(i.color=gn.toWorkingColorSpace(new fe().fromArray(n.DiffuseColor.value),Vn)),n.DisplacementFactor&&(i.displacementScale=n.DisplacementFactor.value),n.Emissive?i.emissive=gn.toWorkingColorSpace(new fe().fromArray(n.Emissive.value),Vn):n.EmissiveColor&&(n.EmissiveColor.type==="Color"||n.EmissiveColor.type==="ColorRGB")&&(i.emissive=gn.toWorkingColorSpace(new fe().fromArray(n.EmissiveColor.value),Vn)),n.EmissiveFactor&&(i.emissiveIntensity=parseFloat(n.EmissiveFactor.value)),i.opacity=1-(n.TransparencyFactor?parseFloat(n.TransparencyFactor.value):0),(i.opacity===1||i.opacity===0)&&(i.opacity=n.Opacity?parseFloat(n.Opacity.value):null,i.opacity===null&&(i.opacity=1-(n.TransparentColor?parseFloat(n.TransparentColor.value[0]):0))),i.opacity<1&&(i.transparent=!0),n.ReflectionFactor&&(i.reflectivity=n.ReflectionFactor.value),n.Shininess&&(i.shininess=n.Shininess.value),n.Specular?i.specular=gn.toWorkingColorSpace(new fe().fromArray(n.Specular.value),Vn):n.SpecularColor&&n.SpecularColor.type==="Color"&&(i.specular=gn.toWorkingColorSpace(new fe().fromArray(n.SpecularColor.value),Vn));const a=this;return Hn.get(r).children.forEach(function(o){const s=o.relationship;switch(s){case"Bump":i.bumpMap=a.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":i.aoMap=a.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":i.map=a.getTexture(t,o.ID),i.map!==void 0&&(i.map.colorSpace=Vn);break;case"DisplacementColor":i.displacementMap=a.getTexture(t,o.ID);break;case"EmissiveColor":i.emissiveMap=a.getTexture(t,o.ID),i.emissiveMap!==void 0&&(i.emissiveMap.colorSpace=Vn);break;case"NormalMap":case"Maya|TEX_normal_map":i.normalMap=a.getTexture(t,o.ID);break;case"ReflectionColor":i.envMap=a.getTexture(t,o.ID),i.envMap!==void 0&&(i.envMap.mapping=io,i.envMap.colorSpace=Vn);break;case"SpecularColor":i.specularMap=a.getTexture(t,o.ID),i.specularMap!==void 0&&(i.specularMap.colorSpace=Vn);break;case"TransparentColor":case"TransparencyFactor":i.alphaMap=a.getTexture(t,o.ID),i.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",s);break}}),i}getTexture(n,t){return"LayeredTexture"in nn.Objects&&t in nn.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=Hn.get(t).children[0].ID),n.get(t)}parseDeformers(){const n={},t={};if("Deformer"in nn.Objects){const r=nn.Objects.Deformer;for(const i in r){const a=r[i],o=Hn.get(parseInt(i));if(a.attrType==="Skin"){const s=this.parseSkeleton(o,r);s.ID=i,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),s.geometryID=o.parents[0].ID,n[i]=s}else if(a.attrType==="BlendShape"){const s={id:i};s.rawTargets=this.parseMorphTargets(o,r),s.id=i,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[i]=s}}}return{skeletons:n,morphTargets:t}}parseSkeleton(n,t){const r=[];return n.children.forEach(function(i){const a=t[i.ID];if(a.attrType!=="Cluster")return;const o={ID:i.ID,indices:[],weights:[],transformLink:new sn().fromArray(a.TransformLink.a)};"Indexes"in a&&(o.indices=a.Indexes.a,o.weights=a.Weights.a),r.push(o)}),{rawBones:r,bones:[]}}parseMorphTargets(n,t){const r=[];for(let i=0;i<n.children.length;i++){const a=n.children[i],o=t[a.ID],s={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;s.geoID=Hn.get(parseInt(a.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,r.push(s)}return r}parseScene(n,t,r){st=new Zt;const i=this.parseModels(n.skeletons,t,r),a=nn.Objects.Model,o=this;i.forEach(function(l){const c=a[l.ID];o.setLookAtProperties(l,c),Hn.get(l.ID).parents.forEach(function(f){const d=i.get(f.ID);d!==void 0&&d.add(l)}),l.parent===null&&st.add(l)}),this.bindSkeleton(n.skeletons,t,i),this.addGlobalSceneSettings(),st.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=hd(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const s=new pS().parse();st.children.length===1&&st.children[0].isGroup&&(st.children[0].animations=s,st=st.children[0]),st.animations=s}parseModels(n,t,r){const i=new Map,a=nn.Objects.Model;for(const o in a){const s=parseInt(o),l=a[o],c=Hn.get(s);let u=this.buildSkeleton(c,n,s,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,r);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new ta;break;case"Null":default:u=new Zt;break}u.name=l.attrName?ia.sanitizeNodeName(l.attrName):"",u.userData.originalName=l.attrName,u.ID=s}this.getTransformData(u,l),i.set(s,u)}return i}buildSkeleton(n,t,r,i){let a=null;return n.parents.forEach(function(o){for(const s in t){const l=t[s];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const f=a;a=new ta,a.matrixWorld.copy(c.transformLink),a.name=i?ia.sanitizeNodeName(i):"",a.userData.originalName=i,a.ID=r,l.bones[u]=a,f!==null&&a.add(f)}})}}),a}createCamera(n){let t,r;if(n.children.forEach(function(i){const a=nn.Objects.NodeAttribute[i.ID];a!==void 0&&(r=a)}),r===void 0)t=new Pn;else{let i=0;r.CameraProjectionType!==void 0&&r.CameraProjectionType.value===1&&(i=1);let a=1;r.NearPlane!==void 0&&(a=r.NearPlane.value/1e3);let o=1e3;r.FarPlane!==void 0&&(o=r.FarPlane.value/1e3);let s=window.innerWidth,l=window.innerHeight;r.AspectWidth!==void 0&&r.AspectHeight!==void 0&&(s=r.AspectWidth.value,l=r.AspectHeight.value);const c=s/l;let u=45;r.FieldOfView!==void 0&&(u=r.FieldOfView.value);const f=r.FocalLength?r.FocalLength.value:null;switch(i){case 0:t=new Lr(u,c,a,o),f!==null&&t.setFocalLength(f);break;case 1:console.warn("THREE.FBXLoader: Orthographic cameras not supported yet."),t=new Pn;break;default:console.warn("THREE.FBXLoader: Unknown camera type "+i+"."),t=new Pn;break}}return t}createLight(n){let t,r;if(n.children.forEach(function(i){const a=nn.Objects.NodeAttribute[i.ID];a!==void 0&&(r=a)}),r===void 0)t=new Pn;else{let i;r.LightType===void 0?i=0:i=r.LightType.value;let a=16777215;r.Color!==void 0&&(a=gn.toWorkingColorSpace(new fe().fromArray(r.Color.value),Vn));let o=r.Intensity===void 0?1:r.Intensity.value/100;r.CastLightOnObject!==void 0&&r.CastLightOnObject.value===0&&(o=0);let s=0;r.FarAttenuationEnd!==void 0&&(r.EnableFarAttenuation!==void 0&&r.EnableFarAttenuation.value===0?s=0:s=r.FarAttenuationEnd.value);const l=1;switch(i){case 0:t=new Cs(a,o,s,l);break;case 1:t=new ll(a,o);break;case 2:let c=Math.PI/3;r.InnerAngle!==void 0&&(c=Xn.degToRad(r.InnerAngle.value));let u=0;r.OuterAngle!==void 0&&(u=Xn.degToRad(r.OuterAngle.value),u=Math.max(u,1)),t=new Yf(a,o,s,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+r.LightType.value+", defaulting to a PointLight."),t=new Cs(a,o);break}r.CastShadows!==void 0&&r.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(n,t,r){let i,a=null,o=null;const s=[];return n.children.forEach(function(l){t.has(l.ID)&&(a=t.get(l.ID)),r.has(l.ID)&&s.push(r.get(l.ID))}),s.length>1?o=s:s.length>0?o=s[0]:(o=new Ya({name:Ii.DEFAULT_MATERIAL_NAME,color:13421772}),s.push(o)),"color"in a.attributes&&s.forEach(function(l){l.vertexColors=!0}),a.FBX_Deformer?(i=new Ao(a,o),i.normalizeSkinWeights()):i=new on(a,o),i}createCurve(n,t){const r=n.children.reduce(function(a,o){return t.has(o.ID)&&(a=t.get(o.ID)),a},null),i=new ma({name:Ii.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Oi(r,i)}getTransformData(n,t){const r={};"InheritType"in t&&(r.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?r.eulerOrder=oa(t.RotationOrder.value):r.eulerOrder=oa(0),"Lcl_Translation"in t&&(r.translation=t.Lcl_Translation.value),"PreRotation"in t&&(r.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(r.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(r.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(r.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(r.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(r.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(r.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(r.rotationPivot=t.RotationPivot.value),n.userData.transformData=r}setLookAtProperties(n,t){"LookAtProperty"in t&&Hn.get(n.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const a=nn.Objects.Model[i.ID];if("Lcl_Translation"in a){const o=a.Lcl_Translation.value;n.target!==void 0?(n.target.position.fromArray(o),st.add(n.target)):n.lookAt(new ce().fromArray(o))}}})}bindSkeleton(n,t,r){const i=this.parsePoseNodes();for(const a in n){const o=n[a];Hn.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;Hn.get(c).parents.forEach(function(f){r.has(f.ID)&&r.get(f.ID).bind(new So(o.bones),i[f.ID])})}})}}parsePoseNodes(){const n={};if("Pose"in nn.Objects){const t=nn.Objects.Pose;for(const r in t)if(t[r].attrType==="BindPose"&&t[r].NbPoseNodes>0){const i=t[r].PoseNode;Array.isArray(i)?i.forEach(function(a){n[a.Node]=new sn().fromArray(a.Matrix.a)}):n[i.Node]=new sn().fromArray(i.Matrix.a)}}return n}addGlobalSceneSettings(){if("GlobalSettings"in nn){if("AmbientColor"in nn.GlobalSettings){const n=nn.GlobalSettings.AmbientColor.value,t=n[0],r=n[1],i=n[2];if(t!==0||r!==0||i!==0){const a=new fe().setRGB(t,r,i,Vn);st.add(new Om(a,1))}}"UnitScaleFactor"in nn.GlobalSettings&&(st.userData.unitScaleFactor=nn.GlobalSettings.UnitScaleFactor.value)}}}class dS{constructor(){this.negativeMaterialIndices=!1}parse(n){const t=new Map;if("Geometry"in nn.Objects){const r=nn.Objects.Geometry;for(const i in r){const a=Hn.get(parseInt(i)),o=this.parseGeometry(a,r[i],n);t.set(parseInt(i),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(n,t,r){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(n,t,r);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(n,t,r){const i=r.skeletons,a=[],o=n.parents.map(function(f){return nn.Objects.Model[f.ID]});if(o.length===0)return;const s=n.children.reduce(function(f,d){return i[d.ID]!==void 0&&(f=i[d.ID]),f},null);n.children.forEach(function(f){r.morphTargets[f.ID]!==void 0&&a.push(r.morphTargets[f.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=oa(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=hd(c);return this.genGeometry(t,s,a,u)}genGeometry(n,t,r,i){const a=new Jn;n.attrName&&(a.name=n.attrName);const o=this.parseGeoNode(n,t),s=this.genBuffers(o),l=new Ct(s.vertex,3);if(l.applyMatrix4(i),a.setAttribute("position",l),s.colors.length>0&&a.setAttribute("color",new Ct(s.colors,3)),t&&(a.setAttribute("skinIndex",new rl(s.weightsIndices,4)),a.setAttribute("skinWeight",new Ct(s.vertexWeights,4)),a.FBX_Deformer=t),s.normal.length>0){const c=new dn().getNormalMatrix(i),u=new Ct(s.normal,3);u.applyNormalMatrix(c),a.setAttribute("normal",u)}if(s.uvs.forEach(function(c,u){const f=u===0?"uv":`uv${u}`;a.setAttribute(f,new Ct(s.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=s.materialIndex[0],u=0;if(s.materialIndex.forEach(function(f,d){f!==c&&(a.addGroup(u,d-u,c),c=f,u=d)}),a.groups.length>0){const f=a.groups[a.groups.length-1],d=f.start+f.count;d!==s.materialIndex.length&&a.addGroup(d,s.materialIndex.length-d,c)}a.groups.length===0&&a.addGroup(0,s.materialIndex.length,s.materialIndex[0])}return this.addMorphTargets(a,n,r,i),a}parseGeoNode(n,t){const r={};if(r.vertexPositions=n.Vertices!==void 0?n.Vertices.a:[],r.vertexIndices=n.PolygonVertexIndex!==void 0?n.PolygonVertexIndex.a:[],n.LayerElementColor&&(r.color=this.parseVertexColors(n.LayerElementColor[0])),n.LayerElementMaterial&&(r.material=this.parseMaterialIndices(n.LayerElementMaterial[0])),n.LayerElementNormal&&(r.normal=this.parseNormals(n.LayerElementNormal[0])),n.LayerElementUV){r.uv=[];let i=0;for(;n.LayerElementUV[i];)n.LayerElementUV[i].UV&&r.uv.push(this.parseUVs(n.LayerElementUV[i])),i++}return r.weightTable={},t!==null&&(r.skeleton=t,t.rawBones.forEach(function(i,a){i.indices.forEach(function(o,s){r.weightTable[o]===void 0&&(r.weightTable[o]=[]),r.weightTable[o].push({id:a,weight:i.weights[s]})})})),r}genBuffers(n){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let r=0,i=0,a=!1,o=[],s=[],l=[],c=[],u=[],f=[];const d=this;return n.vertexIndices.forEach(function(p,_){let g,m=!1;p<0&&(p=p^-1,m=!0);let h=[],T=[];if(o.push(p*3,p*3+1,p*3+2),n.color){const v=Na(_,r,p,n.color);l.push(v[0],v[1],v[2])}if(n.skeleton){if(n.weightTable[p]!==void 0&&n.weightTable[p].forEach(function(v){T.push(v.weight),h.push(v.id)}),T.length>4){a||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),a=!0);const v=[0,0,0,0],E=[0,0,0,0];T.forEach(function(L,I){let x=L,b=h[I];E.forEach(function(A,S,C){if(x>A){C[S]=x,x=A;const H=v[S];v[S]=b,b=H}})}),h=v,T=E}for(;T.length<4;)T.push(0),h.push(0);for(let v=0;v<4;++v)u.push(T[v]),f.push(h[v])}if(n.normal){const v=Na(_,r,p,n.normal);s.push(v[0],v[1],v[2])}n.material&&n.material.mappingType!=="AllSame"&&(g=Na(_,r,p,n.material)[0],g<0&&(d.negativeMaterialIndices=!0,g=0)),n.uv&&n.uv.forEach(function(v,E){const L=Na(_,r,p,v);c[E]===void 0&&(c[E]=[]),c[E].push(L[0]),c[E].push(L[1])}),i++,m&&(d.genFace(t,n,o,g,s,l,c,u,f,i),r++,i=0,o=[],s=[],l=[],c=[],u=[],f=[])}),t}getNormalNewell(n){const t=new ce(0,0,0);for(let r=0;r<n.length;r++){const i=n[r],a=n[(r+1)%n.length];t.x+=(i.y-a.y)*(i.z+a.z),t.y+=(i.z-a.z)*(i.x+a.x),t.z+=(i.x-a.x)*(i.y+a.y)}return t.normalize(),t}getNormalTangentAndBitangent(n){const t=this.getNormalNewell(n),i=(Math.abs(t.z)>.5?new ce(0,1,0):new ce(0,0,1)).cross(t).normalize(),a=t.clone().cross(i).normalize();return{normal:t,tangent:i,bitangent:a}}flattenVertex(n,t,r){return new Zn(n.dot(t),n.dot(r))}genFace(n,t,r,i,a,o,s,l,c,u){let f;if(u>3){const d=[],p=t.baseVertexPositions||t.vertexPositions;for(let h=0;h<r.length;h+=3)d.push(new ce(p[r[h]],p[r[h+1]],p[r[h+2]]));const{tangent:_,bitangent:g}=this.getNormalTangentAndBitangent(d),m=[];for(const h of d)m.push(this.flattenVertex(h,_,g));f=Cm.triangulateShape(m,[])}else f=[[0,1,2]];for(const[d,p,_]of f)n.vertex.push(t.vertexPositions[r[d*3]]),n.vertex.push(t.vertexPositions[r[d*3+1]]),n.vertex.push(t.vertexPositions[r[d*3+2]]),n.vertex.push(t.vertexPositions[r[p*3]]),n.vertex.push(t.vertexPositions[r[p*3+1]]),n.vertex.push(t.vertexPositions[r[p*3+2]]),n.vertex.push(t.vertexPositions[r[_*3]]),n.vertex.push(t.vertexPositions[r[_*3+1]]),n.vertex.push(t.vertexPositions[r[_*3+2]]),t.skeleton&&(n.vertexWeights.push(l[d*4]),n.vertexWeights.push(l[d*4+1]),n.vertexWeights.push(l[d*4+2]),n.vertexWeights.push(l[d*4+3]),n.vertexWeights.push(l[p*4]),n.vertexWeights.push(l[p*4+1]),n.vertexWeights.push(l[p*4+2]),n.vertexWeights.push(l[p*4+3]),n.vertexWeights.push(l[_*4]),n.vertexWeights.push(l[_*4+1]),n.vertexWeights.push(l[_*4+2]),n.vertexWeights.push(l[_*4+3]),n.weightsIndices.push(c[d*4]),n.weightsIndices.push(c[d*4+1]),n.weightsIndices.push(c[d*4+2]),n.weightsIndices.push(c[d*4+3]),n.weightsIndices.push(c[p*4]),n.weightsIndices.push(c[p*4+1]),n.weightsIndices.push(c[p*4+2]),n.weightsIndices.push(c[p*4+3]),n.weightsIndices.push(c[_*4]),n.weightsIndices.push(c[_*4+1]),n.weightsIndices.push(c[_*4+2]),n.weightsIndices.push(c[_*4+3])),t.color&&(n.colors.push(o[d*3]),n.colors.push(o[d*3+1]),n.colors.push(o[d*3+2]),n.colors.push(o[p*3]),n.colors.push(o[p*3+1]),n.colors.push(o[p*3+2]),n.colors.push(o[_*3]),n.colors.push(o[_*3+1]),n.colors.push(o[_*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(n.materialIndex.push(i),n.materialIndex.push(i),n.materialIndex.push(i)),t.normal&&(n.normal.push(a[d*3]),n.normal.push(a[d*3+1]),n.normal.push(a[d*3+2]),n.normal.push(a[p*3]),n.normal.push(a[p*3+1]),n.normal.push(a[p*3+2]),n.normal.push(a[_*3]),n.normal.push(a[_*3+1]),n.normal.push(a[_*3+2])),t.uv&&t.uv.forEach(function(g,m){n.uvs[m]===void 0&&(n.uvs[m]=[]),n.uvs[m].push(s[m][d*2]),n.uvs[m].push(s[m][d*2+1]),n.uvs[m].push(s[m][p*2]),n.uvs[m].push(s[m][p*2+1]),n.uvs[m].push(s[m][_*2]),n.uvs[m].push(s[m][_*2+1])})}addMorphTargets(n,t,r,i){if(r.length===0)return;n.morphTargetsRelative=!0,n.morphAttributes.position=[];const a=this;r.forEach(function(o){o.rawTargets.forEach(function(s){const l=nn.Objects.Geometry[s.geoID];l!==void 0&&a.genMorphGeometry(n,t,l,i,s.name)})})}genMorphGeometry(n,t,r,i,a){const o=t.Vertices!==void 0?t.Vertices.a:[],s=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],l=r.Vertices!==void 0?r.Vertices.a:[],c=r.Indexes!==void 0?r.Indexes.a:[],u=n.attributes.position.count*3,f=new Float32Array(u);for(let g=0;g<c.length;g++){const m=c[g]*3;f[m]=l[g*3],f[m+1]=l[g*3+1],f[m+2]=l[g*3+2]}const d={vertexIndices:s,vertexPositions:f,baseVertexPositions:o},p=this.genBuffers(d),_=new Ct(p.vertex,3);_.name=a||r.attrName,_.applyMatrix4(i),n.morphAttributes.position.push(_)}parseNormals(n){const t=n.MappingInformationType,r=n.ReferenceInformationType,i=n.Normals.a;let a=[];return r==="IndexToDirect"&&("NormalIndex"in n?a=n.NormalIndex.a:"NormalsIndex"in n&&(a=n.NormalsIndex.a)),{dataSize:3,buffer:i,indices:a,mappingType:t,referenceType:r}}parseUVs(n){const t=n.MappingInformationType,r=n.ReferenceInformationType,i=n.UV.a;let a=[];return r==="IndexToDirect"&&(a=n.UVIndex.a),{dataSize:2,buffer:i,indices:a,mappingType:t,referenceType:r}}parseVertexColors(n){const t=n.MappingInformationType,r=n.ReferenceInformationType,i=n.Colors.a;let a=[];r==="IndexToDirect"&&(a=n.ColorIndex.a);for(let o=0,s=new fe;o<i.length;o+=4)s.fromArray(i,o),gn.toWorkingColorSpace(s,Vn),s.toArray(i,o);return{dataSize:4,buffer:i,indices:a,mappingType:t,referenceType:r}}parseMaterialIndices(n){const t=n.MappingInformationType,r=n.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:r};const i=n.Materials.a,a=[];for(let o=0;o<i.length;++o)a.push(o);return{dataSize:1,buffer:i,indices:a,mappingType:t,referenceType:r}}parseNurbsGeometry(n){const t=parseInt(n.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",n.Order,n.id),new Jn;const r=t-1,i=n.KnotVector.a,a=[],o=n.Points.a;for(let f=0,d=o.length;f<d;f+=4)a.push(new On().fromArray(o,f));let s,l;if(n.Form==="Closed")a.push(a[0]);else if(n.Form==="Periodic"){s=r,l=i.length-1-s;for(let f=0;f<r;++f)a.push(a[f])}const u=new kT(r,i,a,s,l).getPoints(a.length*12);return new Jn().setFromPoints(u)}}class pS{parse(){const n=[],t=this.parseClips();if(t!==void 0)for(const r in t){const i=t[r],a=this.addClip(i);n.push(a)}return n}parseClips(){if(nn.Objects.AnimationCurve===void 0)return;const n=this.parseAnimationCurveNodes();this.parseAnimationCurves(n);const t=this.parseAnimationLayers(n);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const n=nn.Objects.AnimationCurveNode,t=new Map;for(const r in n){const i=n[r];if(i.attrName.match(/S|R|T|DeformPercent/)!==null){const a={id:i.id,attr:i.attrName,curves:{}};t.set(a.id,a)}}return t}parseAnimationCurves(n){const t=nn.Objects.AnimationCurve;for(const r in t){const i={id:t[r].id,times:t[r].KeyTime.a.map(vS),values:t[r].KeyValueFloat.a},a=Hn.get(i.id);if(a!==void 0){const o=a.parents[0].ID,s=a.parents[0].relationship;s.match(/X/)?n.get(o).curves.x=i:s.match(/Y/)?n.get(o).curves.y=i:s.match(/Z/)?n.get(o).curves.z=i:s.match(/DeformPercent/)&&n.has(o)&&(n.get(o).curves.morph=i)}}}parseAnimationLayers(n){const t=nn.Objects.AnimationLayer,r=new Map;for(const i in t){const a=[],o=Hn.get(parseInt(i));o!==void 0&&(o.children.forEach(function(l,c){if(n.has(l.ID)){const u=n.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(a[c]===void 0){const f=Hn.get(l.ID).parents.filter(function(d){return d.relationship!==void 0})[0].ID;if(f!==void 0){const d=nn.Objects.Model[f.toString()];if(d===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const p={modelName:d.attrName?ia.sanitizeNodeName(d.attrName):"",ID:d.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};st.traverse(function(_){_.ID===d.id&&(p.transform=_.matrix,_.userData.transformData&&(p.eulerOrder=_.userData.transformData.eulerOrder))}),p.transform||(p.transform=new sn),"PreRotation"in d&&(p.preRotation=d.PreRotation.value),"PostRotation"in d&&(p.postRotation=d.PostRotation.value),a[c]=p}}a[c]&&(a[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(a[c]===void 0){const f=Hn.get(l.ID).parents.filter(function(h){return h.relationship!==void 0})[0].ID,d=Hn.get(f).parents[0].ID,p=Hn.get(d).parents[0].ID,_=Hn.get(p).parents[0].ID,g=nn.Objects.Model[_],m={modelName:g.attrName?ia.sanitizeNodeName(g.attrName):"",morphName:nn.Objects.Deformer[f].attrName};a[c]=m}a[c][u.attr]=u}}}),r.set(parseInt(i),a))}return r}parseAnimStacks(n){const t=nn.Objects.AnimationStack,r={};for(const i in t){const a=Hn.get(parseInt(i)).children;a.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=n.get(a[0].ID);r[i]={name:t[i].attrName,layer:o}}return r}addClip(n){let t=[];const r=this;return n.layer.forEach(function(i){t=t.concat(r.generateTracks(i))}),new Ro(n.name,-1,t)}generateTracks(n){const t=[];let r=new ce,i=new ce;if(n.transform&&n.transform.decompose(r,new vt,i),r=r.toArray(),i=i.toArray(),n.T!==void 0&&Object.keys(n.T.curves).length>0){const a=this.generateVectorTrack(n.modelName,n.T.curves,r,"position");a!==void 0&&t.push(a)}if(n.R!==void 0&&Object.keys(n.R.curves).length>0){const a=this.generateRotationTrack(n.modelName,n.R.curves,n.preRotation,n.postRotation,n.eulerOrder);a!==void 0&&t.push(a)}if(n.S!==void 0&&Object.keys(n.S.curves).length>0){const a=this.generateVectorTrack(n.modelName,n.S.curves,i,"scale");a!==void 0&&t.push(a)}if(n.DeformPercent!==void 0){const a=this.generateMorphTrack(n);a!==void 0&&t.push(a)}return t}generateVectorTrack(n,t,r,i){const a=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(a,t,r);return new ra(n+"."+i,a,o)}generateRotationTrack(n,t,r,i,a){let o,s;if(t.x!==void 0&&t.y!==void 0&&t.z!==void 0){const d=this.interpolateRotations(t.x,t.y,t.z,a);o=d[0],s=d[1]}const l=oa(0);r!==void 0&&(r=r.map(Xn.degToRad),r.push(l),r=new sr().fromArray(r),r=new vt().setFromEuler(r)),i!==void 0&&(i=i.map(Xn.degToRad),i.push(l),i=new sr().fromArray(i),i=new vt().setFromEuler(i).invert());const c=new vt,u=new sr,f=[];if(!s||!o)return new bi(n+".quaternion",[0],[0]);for(let d=0;d<s.length;d+=3)u.set(s[d],s[d+1],s[d+2],a),c.setFromEuler(u),r!==void 0&&c.premultiply(r),i!==void 0&&c.multiply(i),d>2&&new vt().fromArray(f,(d-3)/3*4).dot(c)<0&&c.set(-c.x,-c.y,-c.z,-c.w),c.toArray(f,d/3*4);return new bi(n+".quaternion",o,f)}generateMorphTrack(n){const t=n.DeformPercent.curves.morph,r=t.values.map(function(a){return a/100}),i=st.getObjectByName(n.modelName).morphTargetDictionary[n.morphName];return new Ps(n.modelName+".morphTargetInfluences["+i+"]",t.times,r)}getTimesForAllAxes(n){let t=[];if(n.x!==void 0&&(t=t.concat(n.x.times)),n.y!==void 0&&(t=t.concat(n.y.times)),n.z!==void 0&&(t=t.concat(n.z.times)),t=t.sort(function(r,i){return r-i}),t.length>1){let r=1,i=t[0];for(let a=1;a<t.length;a++){const o=t[a];o!==i&&(t[r]=o,i=o,r++)}t=t.slice(0,r)}return t}getKeyframeTrackValues(n,t,r){const i=r,a=[];let o=-1,s=-1,l=-1;return n.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(s=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];a.push(u),i[0]=u}else a.push(i[0]);if(s!==-1){const u=t.y.values[s];a.push(u),i[1]=u}else a.push(i[1]);if(l!==-1){const u=t.z.values[l];a.push(u),i[2]=u}else a.push(i[2])}),a}interpolateRotations(n,t,r,i){const a=[],o=[];a.push(n.times[0]),o.push(Xn.degToRad(n.values[0])),o.push(Xn.degToRad(t.values[0])),o.push(Xn.degToRad(r.values[0]));for(let s=1;s<n.values.length;s++){const l=[n.values[s-1],t.values[s-1],r.values[s-1]];if(isNaN(l[0])||isNaN(l[1])||isNaN(l[2]))continue;const c=l.map(Xn.degToRad),u=[n.values[s],t.values[s],r.values[s]];if(isNaN(u[0])||isNaN(u[1])||isNaN(u[2]))continue;const f=u.map(Xn.degToRad),d=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],p=[Math.abs(d[0]),Math.abs(d[1]),Math.abs(d[2])];if(p[0]>=180||p[1]>=180||p[2]>=180){const g=Math.max(...p)/180,m=new sr(...c,i),h=new sr(...f,i),T=new vt().setFromEuler(m),v=new vt().setFromEuler(h);T.dot(v)&&v.set(-v.x,-v.y,-v.z,-v.w);const E=n.times[s-1],L=n.times[s]-E,I=new vt,x=new sr;for(let b=0;b<1;b+=1/g)I.copy(T.clone().slerp(v.clone(),b)),a.push(E+b*L),x.setFromQuaternion(I,i),o.push(x.x),o.push(x.y),o.push(x.z)}else a.push(n.times[s]),o.push(Xn.degToRad(n.values[s])),o.push(Xn.degToRad(t.values[s])),o.push(Xn.degToRad(r.values[s]))}return[a,o]}}class hS{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(n){this.nodeStack.push(n),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(n,t){this.currentProp=n,this.currentPropName=t}parse(n){this.currentIndent=0,this.allNodes=new pd,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,r=n.split(/[\r\n]+/);return r.forEach(function(i,a){const o=i.match(/^[\s\t]*;/),s=i.match(/^[\s\t]*$/);if(o||s)return;const l=i.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=i.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=i.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(i,l):c?t.parseNodeProperty(i,c,r[++a]):u?t.popStack():i.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(i)}),this.allNodes}parseNodeBegin(n,t){const r=t[1].trim().replace(/^"/,"").replace(/"$/,""),i=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),a={name:r},o=this.parseNodeAttr(i),s=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(r,a):r in s?(r==="PoseNode"?s.PoseNode.push(a):s[r].id!==void 0&&(s[r]={},s[r][s[r].id]=s[r]),o.id!==""&&(s[r][o.id]=a)):typeof o.id=="number"?(s[r]={},s[r][o.id]=a):r!=="Properties70"&&(r==="PoseNode"?s[r]=[a]:s[r]=a),typeof o.id=="number"&&(a.id=o.id),o.name!==""&&(a.attrName=o.name),o.type!==""&&(a.attrType=o.type),this.pushStack(a)}parseNodeAttr(n){let t=n[0];n[0]!==""&&(t=parseInt(n[0]),isNaN(t)&&(t=n[0]));let r="",i="";return n.length>1&&(r=n[1].replace(/^(\w+)::/,""),i=n[2]),{id:t,name:r,type:i}}parseNodeProperty(n,t,r){let i=t[1].replace(/^"/,"").replace(/"$/,"").trim(),a=t[2].replace(/^"/,"").replace(/"$/,"").trim();i==="Content"&&a===","&&(a=r.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(n,i,a);return}if(i==="C"){const l=a.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let f=a.split(",").slice(3);f=f.map(function(d){return d.trim().replace(/^"/,"")}),i="connections",a=[c,u],TS(a,f),o[i]===void 0&&(o[i]=[])}i==="Node"&&(o.id=a),i in o&&Array.isArray(o[i])?o[i].push(a):i!=="a"?o[i]=a:o.a=a,this.setCurrentProp(o,i),i==="a"&&a.slice(-1)!==","&&(o.a=rs(a))}parseNodePropertyContinued(n){const t=this.getCurrentNode();t.a+=n,n.slice(-1)!==","&&(t.a=rs(t.a))}parseNodeSpecialProperty(n,t,r){const i=r.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),a=i[0],o=i[1],s=i[2],l=i[3];let c=i[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=rs(c);break}this.getPrevNode()[a]={type:o,type2:s,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),a)}}class mS{parse(n){const t=new $c(n);t.skip(23);const r=t.getUint32();if(r<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+r);const i=new pd;for(;!this.endOfContent(t);){const a=this.parseNode(t,r);a!==null&&i.add(a.name,a)}return i}endOfContent(n){return n.size()%16===0?(n.getOffset()+160+16&-16)>=n.size():n.getOffset()+160+16>=n.size()}parseNode(n,t){const r={},i=t>=7500?n.getUint64():n.getUint32(),a=t>=7500?n.getUint64():n.getUint32();t>=7500?n.getUint64():n.getUint32();const o=n.getUint8(),s=n.getString(o);if(i===0)return null;const l=[];for(let d=0;d<a;d++)l.push(this.parseProperty(n));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",f=l.length>2?l[2]:"";for(r.singleProperty=a===1&&n.getOffset()===i;i>n.getOffset();){const d=this.parseNode(n,t);d!==null&&this.parseSubNode(s,r,d)}return r.propertyList=l,typeof c=="number"&&(r.id=c),u!==""&&(r.attrName=u),f!==""&&(r.attrType=f),s!==""&&(r.name=s),r}parseSubNode(n,t,r){if(r.singleProperty===!0){const i=r.propertyList[0];Array.isArray(i)?(t[r.name]=r,r.a=i):t[r.name]=i}else if(n==="Connections"&&r.name==="C"){const i=[];r.propertyList.forEach(function(a,o){o!==0&&i.push(a)}),t.connections===void 0&&(t.connections=[]),t.connections.push(i)}else if(r.name==="Properties70")Object.keys(r).forEach(function(a){t[a]=r[a]});else if(n==="Properties70"&&r.name==="P"){let i=r.propertyList[0],a=r.propertyList[1];const o=r.propertyList[2],s=r.propertyList[3];let l;i.indexOf("Lcl ")===0&&(i=i.replace("Lcl ","Lcl_")),a.indexOf("Lcl ")===0&&(a=a.replace("Lcl ","Lcl_")),a==="Color"||a==="ColorRGB"||a==="Vector"||a==="Vector3D"||a.indexOf("Lcl_")===0?l=[r.propertyList[4],r.propertyList[5],r.propertyList[6]]:l=r.propertyList[4],t[i]={type:a,type2:o,flag:s,value:l}}else t[r.name]===void 0?typeof r.id=="number"?(t[r.name]={},t[r.name][r.id]=r):t[r.name]=r:r.name==="PoseNode"?(Array.isArray(t[r.name])||(t[r.name]=[t[r.name]]),t[r.name].push(r)):t[r.name][r.id]===void 0&&(t[r.name][r.id]=r)}parseProperty(n){const t=n.getString(1);let r;switch(t){case"C":return n.getBoolean();case"D":return n.getFloat64();case"F":return n.getFloat32();case"I":return n.getInt32();case"L":return n.getInt64();case"R":return r=n.getUint32(),n.getArrayBuffer(r);case"S":return r=n.getUint32(),n.getString(r);case"Y":return n.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const i=n.getUint32(),a=n.getUint32(),o=n.getUint32();if(a===0)switch(t){case"b":case"c":return n.getBooleanArray(i);case"d":return n.getFloat64Array(i);case"f":return n.getFloat32Array(i);case"i":return n.getInt32Array(i);case"l":return n.getInt64Array(i)}const s=nS(new Uint8Array(n.getArrayBuffer(o))),l=new $c(s.buffer);switch(t){case"b":case"c":return l.getBooleanArray(i);case"d":return l.getFloat64Array(i);case"f":return l.getFloat32Array(i);case"i":return l.getInt32Array(i);case"l":return l.getInt64Array(i)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class $c{constructor(n,t){this.dv=new DataView(n),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(n){this.offset+=n}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(n){const t=[];for(let r=0;r<n;r++)t.push(this.getBoolean());return t}getUint8(){const n=this.dv.getUint8(this.offset);return this.offset+=1,n}getInt16(){const n=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,n}getInt32(){const n=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,n}getInt32Array(n){const t=[];for(let r=0;r<n;r++)t.push(this.getInt32());return t}getUint32(){const n=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,n}getInt64(){let n,t;return this.littleEndian?(n=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),n=this.getUint32()),t&2147483648?(t=~t&4294967295,n=~n&4294967295,n===4294967295&&(t=t+1&4294967295),n=n+1&4294967295,-(t*4294967296+n)):t*4294967296+n}getInt64Array(n){const t=[];for(let r=0;r<n;r++)t.push(this.getInt64());return t}getUint64(){let n,t;return this.littleEndian?(n=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),n=this.getUint32()),t*4294967296+n}getFloat32(){const n=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,n}getFloat32Array(n){const t=[];for(let r=0;r<n;r++)t.push(this.getFloat32());return t}getFloat64(){const n=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,n}getFloat64Array(n){const t=[];for(let r=0;r<n;r++)t.push(this.getFloat64());return t}getArrayBuffer(n){const t=this.dv.buffer.slice(this.offset,this.offset+n);return this.offset+=n,t}getString(n){const t=this.offset;let r=new Uint8Array(this.dv.buffer,t,n);this.skip(n);const i=r.indexOf(0);return i>=0&&(r=new Uint8Array(this.dv.buffer,t,i)),this._textDecoder.decode(r)}}class pd{add(n,t){this[n]=t}}function _S(e){const n="Kaydara FBX Binary  \0";return e.byteLength>=n.length&&n===md(e,0,n.length)}function gS(e){const n=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function r(i){const a=e[i-1];return e=e.slice(t+i),t++,a}for(let i=0;i<n.length;++i)if(r(1)===n[i])return!1;return!0}function Qc(e){const n=/FBXVersion: (\d+)/,t=e.match(n);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function vS(e){return e/46186158e3}const ES=[];function Na(e,n,t,r){let i;switch(r.mappingType){case"ByPolygonVertex":i=e;break;case"ByPolygon":i=n;break;case"ByVertice":i=t;break;case"AllSame":i=r.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+r.mappingType)}r.referenceType==="IndexToDirect"&&(i=r.indices[i]);const a=i*r.dataSize,o=a+r.dataSize;return SS(ES,r.buffer,a,o)}const ts=new sr,si=new ce;function hd(e){const n=new sn,t=new sn,r=new sn,i=new sn,a=new sn,o=new sn,s=new sn,l=new sn,c=new sn,u=new sn,f=new sn,d=new sn,p=e.inheritType?e.inheritType:0;e.translation&&n.setPosition(si.fromArray(e.translation));const _=oa(0);if(e.preRotation){const C=e.preRotation.map(Xn.degToRad);C.push(_),t.makeRotationFromEuler(ts.fromArray(C))}if(e.rotation){const C=e.rotation.map(Xn.degToRad);C.push(e.eulerOrder||_),r.makeRotationFromEuler(ts.fromArray(C))}if(e.postRotation){const C=e.postRotation.map(Xn.degToRad);C.push(_),i.makeRotationFromEuler(ts.fromArray(C)),i.invert()}e.scale&&a.scale(si.fromArray(e.scale)),e.scalingOffset&&s.setPosition(si.fromArray(e.scalingOffset)),e.scalingPivot&&o.setPosition(si.fromArray(e.scalingPivot)),e.rotationOffset&&l.setPosition(si.fromArray(e.rotationOffset)),e.rotationPivot&&c.setPosition(si.fromArray(e.rotationPivot)),e.parentMatrixWorld&&(f.copy(e.parentMatrix),u.copy(e.parentMatrixWorld));const g=t.clone().multiply(r).multiply(i),m=new sn;m.extractRotation(u);const h=new sn;h.copyPosition(u);const T=h.clone().invert().multiply(u),v=m.clone().invert().multiply(T),E=a,L=new sn;if(p===0)L.copy(m).multiply(g).multiply(v).multiply(E);else if(p===1)L.copy(m).multiply(v).multiply(g).multiply(E);else{const H=new sn().scale(new ce().setFromMatrixScale(f)).clone().invert(),G=v.clone().multiply(H);L.copy(m).multiply(g).multiply(G).multiply(E)}const I=c.clone().invert(),x=o.clone().invert();let b=n.clone().multiply(l).multiply(c).multiply(t).multiply(r).multiply(i).multiply(I).multiply(s).multiply(o).multiply(a).multiply(x);const A=new sn().copyPosition(b),S=u.clone().multiply(A);return d.copyPosition(S),b=d.clone().multiply(L),b.premultiply(u.invert()),b}function oa(e){e=e||0;const n=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return e===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),n[0]):n[e]}function rs(e){return e.split(",").map(function(t){return parseFloat(t)})}function md(e,n,t){return n===void 0&&(n=0),t===void 0&&(t=e.byteLength),new TextDecoder().decode(new Uint8Array(e,n,t))}function TS(e,n){for(let t=0,r=e.length,i=n.length;t<i;t++,r++)e[r]=n[t]}function SS(e,n,t,r){for(let i=t,a=0;i<r;i++,a++)e[a]=n[i];return e}let is=class{constructor(n){this.isFont=!0,this.type="Font",this.data=n}generateShapes(n,t=100){const r=[],i=RS(n,t,this.data);for(let a=0,o=i.length;a<o;a++)r.push(...i[a].toShapes());return r}};function RS(e,n,t){const r=Array.from(e),i=n/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let s=0,l=0;for(let c=0;c<r.length;c++){const u=r[c];if(u===`
`)s=0,l-=a;else{const f=AS(u,i,s,l,t);s+=f.offsetX,o.push(f.path)}}return o}function AS(e,n,t,r,i){const a=i.glyphs[e]||i.glyphs["?"];if(!a){console.error('THREE.Font: character "'+e+'" does not exists in font family '+i.familyName+".");return}const o=new Pm;let s,l,c,u,f,d,p,_;if(a.o){const g=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let m=0,h=g.length;m<h;)switch(g[m++]){case"m":s=g[m++]*n+t,l=g[m++]*n+r,o.moveTo(s,l);break;case"l":s=g[m++]*n+t,l=g[m++]*n+r,o.lineTo(s,l);break;case"q":c=g[m++]*n+t,u=g[m++]*n+r,f=g[m++]*n+t,d=g[m++]*n+r,o.quadraticCurveTo(f,d,c,u);break;case"b":c=g[m++]*n+t,u=g[m++]*n+r,f=g[m++]*n+t,d=g[m++]*n+r,p=g[m++]*n+t,_=g[m++]*n+r,o.bezierCurveTo(f,d,p,_,c,u);break}}return{offsetX:a.ha*n,path:o}}class yS extends Ii{constructor(n){super(n),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bS(t)}),this.register(function(t){return new OS(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new BS(t)}),this.register(function(t){return new kS(t)}),this.register(function(t){return new PS(t)}),this.register(function(t){return new NS(t)}),this.register(function(t){return new wS(t)}),this.register(function(t){return new FS(t)}),this.register(function(t){return new IS(t)}),this.register(function(t){return new DS(t)}),this.register(function(t){return new CS(t)}),this.register(function(t){return new HS(t)}),this.register(function(t){return new US(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new WS(t)}),this.register(function(t){return new zS(t)})}load(n,t,r,i){const a=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=mi.extractUrlBase(n);o=mi.resolveURL(c,this.path)}else o=mi.extractUrlBase(n);this.manager.itemStart(n);const s=function(c){i?i(c):console.error(c),a.manager.itemError(n),a.manager.itemEnd(n)},l=new ha(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(n,function(c){try{a.parse(c,o,function(u){t(u),a.manager.itemEnd(n)},s)}catch(u){s(u)}},r,s)}setDRACOLoader(n){return this.dracoLoader=n,this}setKTX2Loader(n){return this.ktx2Loader=n,this}setMeshoptDecoder(n){return this.meshoptDecoder=n,this}register(n){return this.pluginCallbacks.indexOf(n)===-1&&this.pluginCallbacks.push(n),this}unregister(n){return this.pluginCallbacks.indexOf(n)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(n),1),this}parse(n,t,r,i){let a;const o={},s={},l=new TextDecoder;if(typeof n=="string")a=JSON.parse(n);else if(n instanceof ArrayBuffer)if(l.decode(new Uint8Array(n,0,4))===_d){try{o[rn.KHR_BINARY_GLTF]=new VS(n)}catch(f){i&&i(f);return}a=JSON.parse(o[rn.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(n));else a=n;if(a.asset===void 0||a.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new rR(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[f.name]=f,o[f.name]=!0}if(a.extensionsUsed)for(let u=0;u<a.extensionsUsed.length;++u){const f=a.extensionsUsed[u],d=a.extensionsRequired||[];switch(f){case rn.KHR_MATERIALS_UNLIT:o[f]=new MS;break;case rn.KHR_DRACO_MESH_COMPRESSION:o[f]=new XS(a,this.dracoLoader);break;case rn.KHR_TEXTURE_TRANSFORM:o[f]=new KS;break;case rn.KHR_MESH_QUANTIZATION:o[f]=new YS;break;default:d.indexOf(f)>=0&&s[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(s),c.parse(r,i)}parseAsync(n,t){const r=this;return new Promise(function(i,a){r.parse(n,t,i,a)})}}function LS(){let e={};return{get:function(n){return e[n]},add:function(n,t){e[n]=t},remove:function(n){delete e[n]},removeAll:function(){e={}}}}const rn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xS{constructor(n){this.parser=n,this.name=rn.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const n=this.parser,t=this.parser.json.nodes||[];for(let r=0,i=t.length;r<i;r++){const a=t[r];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&n._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(n){const t=this.parser,r="light:"+n;let i=t.cache.get(r);if(i)return i;const a=t.json,l=((a.extensions&&a.extensions[this.name]||{}).lights||[])[n];let c;const u=new fe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],St);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ll(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cs(u),c.distance=f;break;case"spot":c=new Yf(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,or(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+n),i=Promise.resolve(c),t.cache.add(r,i),i}getDependency(n,t){if(n==="light")return this._loadLight(t)}createNodeAttachment(n){const t=this,r=this.parser,a=r.json.nodes[n],s=(a.extensions&&a.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(l){return r._getNodeRef(t.cache,s,l)})}}class MS{constructor(){this.name=rn.KHR_MATERIALS_UNLIT}getMaterialType(){return Dn}extendParams(n,t,r){const i=[];n.color=new fe(1,1,1),n.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const o=a.baseColorFactor;n.color.setRGB(o[0],o[1],o[2],St),n.opacity=o[3]}a.baseColorTexture!==void 0&&i.push(r.assignTexture(n,"map",a.baseColorTexture,Vn))}return Promise.all(i)}}class IS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(n,t){const i=this.parser.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name].emissiveStrength;return a!==void 0&&(t.emissiveIntensity=a),Promise.resolve()}}class bS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_CLEARCOAT}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const r=this.parser,i=r.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&a.push(r.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&a.push(r.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(a.push(r.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const s=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Zn(s,s)}return Promise.all(a)}}class OS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_DISPERSION}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const i=this.parser.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.dispersion=a.dispersion!==void 0?a.dispersion:0,Promise.resolve()}}class CS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_IRIDESCENCE}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const r=this.parser,i=r.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&a.push(r.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&a.push(r.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(a)}}class PS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_SHEEN}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const r=this.parser,i=r.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const s=o.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],St)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&a.push(r.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Vn)),o.sheenRoughnessTexture!==void 0&&a.push(r.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(a)}}class NS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_TRANSMISSION}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const r=this.parser,i=r.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&a.push(r.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(a)}}class wS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_VOLUME}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const r=this.parser,i=r.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&a.push(r.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const s=o.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(s[0],s[1],s[2],St),Promise.all(a)}}class FS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_IOR}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const i=this.parser.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=i.extensions[this.name];return t.ior=a.ior!==void 0?a.ior:1.5,Promise.resolve()}}class DS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_SPECULAR}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const r=this.parser,i=r.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&a.push(r.assignTexture(t,"specularIntensityMap",o.specularTexture));const s=o.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(s[0],s[1],s[2],St),o.specularColorTexture!==void 0&&a.push(r.assignTexture(t,"specularColorMap",o.specularColorTexture,Vn)),Promise.all(a)}}class US{constructor(n){this.parser=n,this.name=rn.EXT_MATERIALS_BUMP}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const r=this.parser,i=r.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&a.push(r.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(a)}}class HS{constructor(n){this.parser=n,this.name=rn.KHR_MATERIALS_ANISOTROPY}getMaterialType(n){const r=this.parser.json.materials[n];return!r.extensions||!r.extensions[this.name]?null:rr}extendMaterialParams(n,t){const r=this.parser,i=r.json.materials[n];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&a.push(r.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(a)}}class GS{constructor(n){this.parser=n,this.name=rn.KHR_TEXTURE_BASISU}loadTexture(n){const t=this.parser,r=t.json,i=r.textures[n];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(n,a.source,o)}}class BS{constructor(n){this.parser=n,this.name=rn.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(n){const t=this.name,r=this.parser,i=r.json,a=i.textures[n];if(!a.extensions||!a.extensions[t])return null;const o=a.extensions[t],s=i.images[o.source];let l=r.textureLoader;if(s.uri){const c=r.options.manager.getHandler(s.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(n,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(n)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(n){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){n(t.height===1)}})),this.isSupported}}class kS{constructor(n){this.parser=n,this.name=rn.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(n){const t=this.name,r=this.parser,i=r.json,a=i.textures[n];if(!a.extensions||!a.extensions[t])return null;const o=a.extensions[t],s=i.images[o.source];let l=r.textureLoader;if(s.uri){const c=r.options.manager.getHandler(s.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(n,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return r.loadTexture(n)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(n){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){n(t.height===1)}})),this.isSupported}}class WS{constructor(n){this.name=rn.EXT_MESHOPT_COMPRESSION,this.parser=n}loadBufferView(n){const t=this.parser.json,r=t.bufferViews[n];if(r.extensions&&r.extensions[this.name]){const i=r.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(s){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,d=new Uint8Array(s,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,d,i.mode,i.filter),p})})}else return null}}class zS{constructor(n){this.name=rn.EXT_MESH_GPU_INSTANCING,this.parser=n}createNodeMesh(n){const t=this.parser.json,r=t.nodes[n];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const i=t.meshes[r.mesh];for(const c of i.primitives)if(c.mode!==Ot.TRIANGLES&&c.mode!==Ot.TRIANGLE_STRIP&&c.mode!==Ot.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=r.extensions[this.name].attributes,s=[],l={};for(const c in o)s.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return s.length<1?null:(s.push(this.parser.createNodeMesh(n)),Promise.all(s).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const _ of f){const g=new sn,m=new ce,h=new vt,T=new ce(1,1,1),v=new Nm(_.geometry,_.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,E),l.SCALE&&T.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,g.compose(m,h,T));for(const E in l)if(E==="_COLOR_0"){const L=l[E];v.instanceColor=new wm(L.array,L.itemSize,L.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);Pn.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),p.push(v)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const _d="glTF",Bi=12,eu={JSON:1313821514,BIN:5130562};class VS{constructor(n){this.name=rn.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(n,0,Bi),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(n.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_d)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bi,a=new DataView(n,Bi);let o=0;for(;o<i;){const s=a.getUint32(o,!0);o+=4;const l=a.getUint32(o,!0);if(o+=4,l===eu.JSON){const c=new Uint8Array(n,Bi+o,s);this.content=r.decode(c)}else if(l===eu.BIN){const c=Bi+o;this.body=n.slice(c,c+s)}o+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XS{constructor(n,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rn.KHR_DRACO_MESH_COMPRESSION,this.json=n,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(n,t){const r=this.json,i=this.dracoLoader,a=n.extensions[this.name].bufferView,o=n.extensions[this.name].attributes,s={},l={},c={};for(const u in o){const f=Ds[u]||u.toLowerCase();s[f]=o[u]}for(const u in n.attributes){const f=Ds[u]||u.toLowerCase();if(o[u]!==void 0){const d=r.accessors[n.attributes[u]],p=_i[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(u){return new Promise(function(f,d){i.decodeDracoFile(u,function(p){for(const _ in p.attributes){const g=p.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}f(p)},s,c,St,d)})})}}class KS{constructor(){this.name=rn.KHR_TEXTURE_TRANSFORM}extendTexture(n,t){return(t.texCoord===void 0||t.texCoord===n.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(n=n.clone(),t.texCoord!==void 0&&(n.channel=t.texCoord),t.offset!==void 0&&n.offset.fromArray(t.offset),t.rotation!==void 0&&(n.rotation=t.rotation),t.scale!==void 0&&n.repeat.fromArray(t.scale),n.needsUpdate=!0),n}}class YS{constructor(){this.name=rn.KHR_MESH_QUANTIZATION}}class gd extends Bm{constructor(n,t,r,i){super(n,t,r,i)}copySampleValue_(n){const t=this.resultBuffer,r=this.sampleValues,i=this.valueSize,a=n*i*3+i;for(let o=0;o!==i;o++)t[o]=r[a+o];return t}interpolate_(n,t,r,i){const a=this.resultBuffer,o=this.sampleValues,s=this.valueSize,l=s*2,c=s*3,u=i-t,f=(r-t)/u,d=f*f,p=d*f,_=n*c,g=_-c,m=-2*p+3*d,h=p-d,T=1-m,v=h-d+f;for(let E=0;E!==s;E++){const L=o[g+E+s],I=o[g+E+l]*u,x=o[_+E+s],b=o[_+E]*u;a[E]=T*L+v*I+m*x+h*b}return a}}const qS=new vt;class jS extends gd{interpolate_(n,t,r,i){const a=super.interpolate_(n,t,r,i);return qS.fromArray(a).normalize().toArray(a),a}}const Ot={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_i={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nu={9728:Yr,9729:cr,9984:wf,9985:Xa,9986:Ki,9987:Wr},tu={33071:to,33648:Nf,10497:Li},as={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ds={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_r={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ZS={CUBICSPLINE:void 0,LINEAR:qf,STEP:Gm},os={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JS(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new Qr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:yi})),e.DefaultMaterial}function wr(e,n,t){for(const r in t.extensions)e[r]===void 0&&(n.userData.gltfExtensions=n.userData.gltfExtensions||{},n.userData.gltfExtensions[r]=t.extensions[r])}function or(e,n){n.extras!==void 0&&(typeof n.extras=="object"?Object.assign(e.userData,n.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+n.extras))}function $S(e,n,t){let r=!1,i=!1,a=!1;for(let c=0,u=n.length;c<u;c++){const f=n[c];if(f.POSITION!==void 0&&(r=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(a=!0),r&&i&&a)break}if(!r&&!i&&!a)return Promise.resolve(e);const o=[],s=[],l=[];for(let c=0,u=n.length;c<u;c++){const f=n[c];if(r){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):e.attributes.position;o.push(d)}if(i){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):e.attributes.normal;s.push(d)}if(a){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):e.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return r&&(e.morphAttributes.position=u),i&&(e.morphAttributes.normal=f),a&&(e.morphAttributes.color=d),e.morphTargetsRelative=!0,e})}function QS(e,n){if(e.updateMorphTargets(),n.weights!==void 0)for(let t=0,r=n.weights.length;t<r;t++)e.morphTargetInfluences[t]=n.weights[t];if(n.extras&&Array.isArray(n.extras.targetNames)){const t=n.extras.targetNames;if(e.morphTargetInfluences.length===t.length){e.morphTargetDictionary={};for(let r=0,i=t.length;r<i;r++)e.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eR(e){let n;const t=e.extensions&&e.extensions[rn.KHR_DRACO_MESH_COMPRESSION];if(t?n="draco:"+t.bufferView+":"+t.indices+":"+ss(t.attributes):n=e.indices+":"+ss(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,i=e.targets.length;r<i;r++)n+=":"+ss(e.targets[r]);return n}function ss(e){let n="";const t=Object.keys(e).sort();for(let r=0,i=t.length;r<i;r++)n+=t[r]+":"+e[t[r]]+";";return n}function Us(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function nR(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const tR=new sn;class rR{constructor(n={},t={}){this.json=n,this.extensions={},this.plugins={},this.options=t,this.cache=new LS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,i=-1,a=!1,o=-1;if(typeof navigator<"u"){const s=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(s)===!0;const l=s.match(/Version\/(\d+)/);i=r&&l?parseInt(l[1],10):-1,a=s.indexOf("Firefox")>-1,o=a?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||r&&i<17||a&&o<98?this.textureLoader=new sl(this.options.manager):this.textureLoader=new Fm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ha(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(n){this.extensions=n}setPlugins(n){this.plugins=n}parse(n,t){const r=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(o){const s={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:r,userData:{}};return wr(a,s,i),or(s,i),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(s)})).then(function(){for(const l of s.scenes)l.updateMatrixWorld();n(s)})}).catch(t)}_markDefs(){const n=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const o=t[i].joints;for(let s=0,l=o.length;s<l;s++)n[o[s]].isBone=!0}for(let i=0,a=n.length;i<a;i++){const o=n[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(r[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(n,t){t!==void 0&&(n.refs[t]===void 0&&(n.refs[t]=n.uses[t]=0),n.refs[t]++)}_getNodeRef(n,t,r){if(n.refs[t]<=1)return r;const i=r.clone(),a=(o,s)=>{const l=this.associations.get(o);l!=null&&this.associations.set(s,l);for(const[c,u]of o.children.entries())a(u,s.children[c])};return a(r,i),i.name+="_instance_"+n.uses[t]++,i}_invokeOne(n){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const i=n(t[r]);if(i)return i}return null}_invokeAll(n){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let i=0;i<t.length;i++){const a=n(t[i]);a&&r.push(a)}return r}getDependency(n,t){const r=n+":"+t;let i=this.cache.get(r);if(!i){switch(n){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(n,t)}),!i)throw new Error("Unknown type: "+n);break}this.cache.add(r,i)}return i}getDependencies(n){let t=this.cache.get(n);if(!t){const r=this,i=this.json[n+(n==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,o){return r.getDependency(n,o)})),this.cache.add(n,t)}return t}loadBuffer(n){const t=this.json.buffers[n],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&n===0)return Promise.resolve(this.extensions[rn.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,o){r.load(mi.resolveURL(t.uri,i.path),a,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(n){const t=this.json.bufferViews[n];return this.getDependency("buffer",t.buffer).then(function(r){const i=t.byteLength||0,a=t.byteOffset||0;return r.slice(a,a+i)})}loadAccessor(n){const t=this,r=this.json,i=this.json.accessors[n];if(i.bufferView===void 0&&i.sparse===void 0){const o=as[i.type],s=_i[i.componentType],l=i.normalized===!0,c=new s(i.count*o);return Promise.resolve(new ct(c,o,l))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(o){const s=o[0],l=as[i.type],c=_i[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?r.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(p&&p!==f){const h=Math.floor(d/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+h+":"+i.count;let v=t.cache.get(T);v||(g=new c(s,h*p,i.count*p/u),v=new Dm(g,p/u),t.cache.add(T,v)),m=new Vr(v,l,d%p/u,_)}else s===null?g=new c(i.count*l):g=new c(s,d,i.count*l),m=new ct(g,l,_);if(i.sparse!==void 0){const h=as.SCALAR,T=_i[i.sparse.indices.componentType],v=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,L=new T(o[1],v,i.sparse.count*h),I=new c(o[2],E,i.sparse.count*l);s!==null&&(m=new ct(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=L.length;x<b;x++){const A=L[x];if(m.setX(A,I[x*l]),l>=2&&m.setY(A,I[x*l+1]),l>=3&&m.setZ(A,I[x*l+2]),l>=4&&m.setW(A,I[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(n){const t=this.json,r=this.options,a=t.textures[n].source,o=t.images[a];let s=this.textureLoader;if(o.uri){const l=r.manager.getHandler(o.uri);l!==null&&(s=l)}return this.loadTextureImage(n,a,s)}loadTextureImage(n,t,r){const i=this,a=this.json,o=a.textures[n],s=a.images[t],l=(s.uri||s.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,r).then(function(u){u.flipY=!1,u.name=o.name||s.name||"",u.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(u.name=s.uri);const d=(a.samplers||{})[o.sampler]||{};return u.magFilter=nu[d.magFilter]||cr,u.minFilter=nu[d.minFilter]||Wr,u.wrapS=tu[d.wrapS]||Li,u.wrapT=tu[d.wrapT]||Li,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Yr&&u.minFilter!==cr,i.associations.set(u,{textures:n}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(n,t){const r=this,i=this.json,a=this.options;if(this.sourceCache[n]!==void 0)return this.sourceCache[n].then(f=>f.clone());const o=i.images[n],s=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=r.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=s.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+n+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new ea(g);m.needsUpdate=!0,d(m)}),t.load(mi.resolveURL(f,a.path),_,void 0,p)})}).then(function(f){return c===!0&&s.revokeObjectURL(l),or(f,o),f.userData.mimeType=o.mimeType||nR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[n]=u,u}assignTexture(n,t,r,i){const a=this;return this.getDependency("texture",r.index).then(function(o){if(!o)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(o=o.clone(),o.channel=r.texCoord),a.extensions[rn.KHR_TEXTURE_TRANSFORM]){const s=r.extensions!==void 0?r.extensions[rn.KHR_TEXTURE_TRANSFORM]:void 0;if(s){const l=a.associations.get(o);o=a.extensions[rn.KHR_TEXTURE_TRANSFORM].extendTexture(o,s),a.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),n[t]=o,o})}assignFinalMaterial(n){const t=n.geometry;let r=n.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(n.isPoints){const s="PointsMaterial:"+r.uuid;let l=this.cache.get(s);l||(l=new cl,zo.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(s,l)),r=l}else if(n.isLine){const s="LineBasicMaterial:"+r.uuid;let l=this.cache.get(s);l||(l=new ma,zo.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,this.cache.add(s,l)),r=l}if(i||a||o){let s="ClonedMaterial:"+r.uuid+":";i&&(s+="derivative-tangents:"),a&&(s+="vertex-colors:"),o&&(s+="flat-shading:");let l=this.cache.get(s);l||(l=r.clone(),a&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(s,l),this.associations.set(l,this.associations.get(r))),r=l}n.material=r}getMaterialType(){return Qr}loadMaterial(n){const t=this,r=this.json,i=this.extensions,a=r.materials[n];let o;const s={},l=a.extensions||{},c=[];if(l[rn.KHR_MATERIALS_UNLIT]){const f=i[rn.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(s,a,t))}else{const f=a.pbrMetallicRoughness||{};if(s.color=new fe(1,1,1),s.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;s.color.setRGB(d[0],d[1],d[2],St),s.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(s,"map",f.baseColorTexture,Vn)),s.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,s.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(s,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(s,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(n)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(n,s)})))}a.doubleSided===!0&&(s.side=Et);const u=a.alphaMode||os.OPAQUE;if(u===os.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,u===os.MASK&&(s.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&o!==Dn&&(c.push(t.assignTexture(s,"normalMap",a.normalTexture)),s.normalScale=new Zn(1,1),a.normalTexture.scale!==void 0)){const f=a.normalTexture.scale;s.normalScale.set(f,f)}if(a.occlusionTexture!==void 0&&o!==Dn&&(c.push(t.assignTexture(s,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&o!==Dn){const f=a.emissiveFactor;s.emissive=new fe().setRGB(f[0],f[1],f[2],St)}return a.emissiveTexture!==void 0&&o!==Dn&&c.push(t.assignTexture(s,"emissiveMap",a.emissiveTexture,Vn)),Promise.all(c).then(function(){const f=new o(s);return a.name&&(f.name=a.name),or(f,a),t.associations.set(f,{materials:n}),a.extensions&&wr(i,f,a),f})}createUniqueName(n){const t=ia.sanitizeNodeName(n||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(n){const t=this,r=this.extensions,i=this.primitiveCache;function a(s){return r[rn.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,t).then(function(l){return ru(l,s,t)})}const o=[];for(let s=0,l=n.length;s<l;s++){const c=n[s],u=eR(c),f=i[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[rn.KHR_DRACO_MESH_COMPRESSION]?d=a(c):d=ru(new Jn,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(n){const t=this,r=this.json,i=this.extensions,a=r.meshes[n],o=a.primitives,s=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?JS(this.cache):this.getDependency("material",o[l].material);s.push(u)}return s.push(t.loadGeometries(o)),Promise.all(s).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,_=u.length;p<_;p++){const g=u[p],m=o[p];let h;const T=c[p];if(m.mode===Ot.TRIANGLES||m.mode===Ot.TRIANGLE_STRIP||m.mode===Ot.TRIANGLE_FAN||m.mode===void 0)h=a.isSkinnedMesh===!0?new Ao(g,T):new on(g,T),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===Ot.TRIANGLE_STRIP?h.geometry=Kc(h.geometry,Kf):m.mode===Ot.TRIANGLE_FAN&&(h.geometry=Kc(h.geometry,bs));else if(m.mode===Ot.LINES)h=new Um(g,T);else if(m.mode===Ot.LINE_STRIP)h=new Oi(g,T);else if(m.mode===Ot.LINE_LOOP)h=new Hm(g,T);else if(m.mode===Ot.POINTS)h=new yo(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&QS(h,a),h.name=t.createUniqueName(a.name||"mesh_"+n),or(h,a),m.extensions&&wr(i,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:n,primitives:p});if(f.length===1)return a.extensions&&wr(i,f[0],a),f[0];const d=new Zt;a.extensions&&wr(i,d,a),t.associations.set(d,{meshes:n});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(n){let t;const r=this.json.cameras[n],i=r[r.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new Lr(Xn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):r.type==="orthographic"&&(t=new il(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),or(t,r),Promise.resolve(t)}loadSkin(n){const t=this.json.skins[n],r=[];for(let i=0,a=t.joints.length;i<a;i++)r.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(i){const a=i.pop(),o=i,s=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){s.push(f);const d=new sn;a!==null&&d.fromArray(a.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new So(s,l)})}loadAnimation(n){const t=this.json,r=this,i=t.animations[n],a=i.name?i.name:"animation_"+n,o=[],s=[],l=[],c=[],u=[];for(let f=0,d=i.channels.length;f<d;f++){const p=i.channels[f],_=i.samplers[p.sampler],g=p.target,m=g.node,h=i.parameters!==void 0?i.parameters[_.input]:_.input,T=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),s.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",T)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(s),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],p=f[1],_=f[2],g=f[3],m=f[4],h=[];for(let T=0,v=d.length;T<v;T++){const E=d[T],L=p[T],I=_[T],x=g[T],b=m[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const A=r._createAnimationTracks(E,L,I,x,b);if(A)for(let S=0;S<A.length;S++)h.push(A[S])}return new Ro(a,void 0,h)})}createNodeMesh(n){const t=this.json,r=this,i=t.nodes[n];return i.mesh===void 0?null:r.getDependency("mesh",i.mesh).then(function(a){const o=r._getNodeRef(r.meshCache,i.mesh,a);return i.weights!==void 0&&o.traverse(function(s){if(s.isMesh)for(let l=0,c=i.weights.length;l<c;l++)s.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(n){const t=this.json,r=this,i=t.nodes[n],a=r._loadNodeShallow(n),o=[],s=i.children||[];for(let c=0,u=s.length;c<u;c++)o.push(r.getDependency("node",s[c]));const l=i.skin===void 0?Promise.resolve(null):r.getDependency("skin",i.skin);return Promise.all([a,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,tR)});for(let p=0,_=f.length;p<_;p++)u.add(f[p]);return u})}_loadNodeShallow(n){const t=this.json,r=this.extensions,i=this;if(this.nodeCache[n]!==void 0)return this.nodeCache[n];const a=t.nodes[n],o=a.name?i.createUniqueName(a.name):"",s=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(n)});return l&&s.push(l),a.camera!==void 0&&s.push(i.getDependency("camera",a.camera).then(function(c){return i._getNodeRef(i.cameraCache,a.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(n)}).forEach(function(c){s.push(c)}),this.nodeCache[n]=Promise.all(s).then(function(c){let u;if(a.isBone===!0?u=new ta:c.length>1?u=new Zt:c.length===1?u=c[0]:u=new Pn,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(a.name&&(u.userData.name=a.name,u.name=o),or(u,a),a.extensions&&wr(r,u,a),a.matrix!==void 0){const f=new sn;f.fromArray(a.matrix),u.applyMatrix4(f)}else a.translation!==void 0&&u.position.fromArray(a.translation),a.rotation!==void 0&&u.quaternion.fromArray(a.rotation),a.scale!==void 0&&u.scale.fromArray(a.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=n,u}),this.nodeCache[n]}loadScene(n){const t=this.extensions,r=this.json.scenes[n],i=this,a=new Zt;r.name&&(a.name=i.createUniqueName(r.name)),or(a,r),r.extensions&&wr(t,a,r);const o=r.nodes||[],s=[];for(let l=0,c=o.length;l<c;l++)s.push(i.getDependency("node",o[l]));return Promise.all(s).then(function(l){for(let u=0,f=l.length;u<f;u++)a.add(l[u]);const c=u=>{const f=new Map;for(const[d,p]of i.associations)(d instanceof zo||d instanceof ea)&&f.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&f.set(d,p)}),f};return i.associations=c(a),a})}_createAnimationTracks(n,t,r,i,a){const o=[],s=n.name?n.name:n.uuid,l=[];_r[a.path]===_r.weights?n.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(s);let c;switch(_r[a.path]){case _r.weights:c=Ps;break;case _r.rotation:c=bi;break;case _r.position:case _r.scale:c=ra;break;default:switch(r.itemSize){case 1:c=Ps;break;case 2:case 3:default:c=ra;break}break}const u=i.interpolation!==void 0?ZS[i.interpolation]:qf,f=this._getArrayFromAccessor(r);for(let d=0,p=l.length;d<p;d++){const _=new c(l[d]+"."+_r[a.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(n){let t=n.array;if(n.normalized){const r=Us(t.constructor),i=new Float32Array(t.length);for(let a=0,o=t.length;a<o;a++)i[a]=t[a]*r;t=i}return t}_createCubicSplineTrackInterpolant(n){n.createInterpolant=function(r){const i=this instanceof bi?jS:gd;return new i(this.times,this.values,this.getValueSize()/3,r)},n.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function iR(e,n,t){const r=n.attributes,i=new To;if(r.POSITION!==void 0){const s=t.json.accessors[r.POSITION],l=s.min,c=s.max;if(l!==void 0&&c!==void 0){if(i.set(new ce(l[0],l[1],l[2]),new ce(c[0],c[1],c[2])),s.normalized){const u=Us(_i[s.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=n.targets;if(a!==void 0){const s=new ce,l=new ce;for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const g=Us(_i[d.componentType]);l.multiplyScalar(g)}s.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(s)}e.boundingBox=i;const o=new ol;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,e.boundingSphere=o}function ru(e,n,t){const r=n.attributes,i=[];function a(o,s){return t.getDependency("accessor",o).then(function(l){e.setAttribute(s,l)})}for(const o in r){const s=Ds[o]||o.toLowerCase();s in e.attributes||i.push(a(r[o],s))}if(n.indices!==void 0&&!e.index){const o=t.getDependency("accessor",n.indices).then(function(s){e.setIndex(s)});i.push(o)}return gn.workingColorSpace!==St&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gn.workingColorSpace}" not supported.`),or(e,n),iR(e,n,t),Promise.all(i).then(function(){return n.targets!==void 0?$S(e,n.targets,t):e})}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var e=function(){try{var t={},r=Object.defineProperty,i=r(t,t,t)&&r}catch{}return i}(),n=function(t){if(this==null)throw TypeError();var r=String(this),i=r.length,a=t?Number(t):0;if(a!=a&&(a=0),!(a<0||a>=i)){var o=r.charCodeAt(a),s;return o>=55296&&o<=56319&&i>a+1&&(s=r.charCodeAt(a+1),s>=56320&&s<=57343)?(o-55296)*1024+s-56320+65536:o}};e?e(String.prototype,"codePointAt",{value:n,configurable:!0,writable:!0}):String.prototype.codePointAt=n}();var dl=0,vd=-3;function sa(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function aR(e,n){this.source=e,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=n,this.destLen=0,this.ltree=new sa,this.dtree=new sa}var Ed=new sa,Td=new sa,pl=new Uint8Array(30),hl=new Uint16Array(30),Sd=new Uint8Array(30),Rd=new Uint16Array(30),oR=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),iu=new sa,Xt=new Uint8Array(320);function Ad(e,n,t,r){var i,a;for(i=0;i<t;++i)e[i]=0;for(i=0;i<30-t;++i)e[i+t]=i/t|0;for(a=r,i=0;i<30;++i)n[i]=a,a+=1<<e[i]}function sR(e,n){var t;for(t=0;t<7;++t)e.table[t]=0;for(e.table[7]=24,e.table[8]=152,e.table[9]=112,t=0;t<24;++t)e.trans[t]=256+t;for(t=0;t<144;++t)e.trans[24+t]=t;for(t=0;t<8;++t)e.trans[168+t]=280+t;for(t=0;t<112;++t)e.trans[176+t]=144+t;for(t=0;t<5;++t)n.table[t]=0;for(n.table[5]=32,t=0;t<32;++t)n.trans[t]=t}var au=new Uint16Array(16);function ls(e,n,t,r){var i,a;for(i=0;i<16;++i)e.table[i]=0;for(i=0;i<r;++i)e.table[n[t+i]]++;for(e.table[0]=0,a=0,i=0;i<16;++i)au[i]=a,a+=e.table[i];for(i=0;i<r;++i)n[t+i]&&(e.trans[au[n[t+i]]++]=i)}function lR(e){e.bitcount--||(e.tag=e.source[e.sourceIndex++],e.bitcount=7);var n=e.tag&1;return e.tag>>>=1,n}function qt(e,n,t){if(!n)return t;for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var r=e.tag&65535>>>16-n;return e.tag>>>=n,e.bitcount-=n,r+t}function Hs(e,n){for(;e.bitcount<24;)e.tag|=e.source[e.sourceIndex++]<<e.bitcount,e.bitcount+=8;var t=0,r=0,i=0,a=e.tag;do r=2*r+(a&1),a>>>=1,++i,t+=n.table[i],r-=n.table[i];while(r>=0);return e.tag=a,e.bitcount-=i,n.trans[t+r]}function cR(e,n,t){var r,i,a,o,s,l;for(r=qt(e,5,257),i=qt(e,5,1),a=qt(e,4,4),o=0;o<19;++o)Xt[o]=0;for(o=0;o<a;++o){var c=qt(e,3,0);Xt[oR[o]]=c}for(ls(iu,Xt,0,19),s=0;s<r+i;){var u=Hs(e,iu);switch(u){case 16:var f=Xt[s-1];for(l=qt(e,2,3);l;--l)Xt[s++]=f;break;case 17:for(l=qt(e,3,3);l;--l)Xt[s++]=0;break;case 18:for(l=qt(e,7,11);l;--l)Xt[s++]=0;break;default:Xt[s++]=u;break}}ls(n,Xt,0,r),ls(t,Xt,r,i)}function ou(e,n,t){for(;;){var r=Hs(e,n);if(r===256)return dl;if(r<256)e.dest[e.destLen++]=r;else{var i,a,o,s;for(r-=257,i=qt(e,pl[r],hl[r]),a=Hs(e,t),o=e.destLen-qt(e,Sd[a],Rd[a]),s=o;s<o+i;++s)e.dest[e.destLen++]=e.dest[s]}}}function uR(e){for(var n,t,r;e.bitcount>8;)e.sourceIndex--,e.bitcount-=8;if(n=e.source[e.sourceIndex+1],n=256*n+e.source[e.sourceIndex],t=e.source[e.sourceIndex+3],t=256*t+e.source[e.sourceIndex+2],n!==(~t&65535))return vd;for(e.sourceIndex+=4,r=n;r;--r)e.dest[e.destLen++]=e.source[e.sourceIndex++];return e.bitcount=0,dl}function fR(e,n){var t=new aR(e,n),r,i,a;do{switch(r=lR(t),i=qt(t,2,0),i){case 0:a=uR(t);break;case 1:a=ou(t,Ed,Td);break;case 2:cR(t,t.ltree,t.dtree),a=ou(t,t.ltree,t.dtree);break;default:a=vd}if(a!==dl)throw new Error("Data error")}while(!r);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}sR(Ed,Td);Ad(pl,hl,4,3);Ad(Sd,Rd,2,1);pl[28]=0;hl[28]=258;var dR=fR;function li(e,n,t,r,i){return Math.pow(1-i,3)*e+3*Math.pow(1-i,2)*i*n+3*(1-i)*Math.pow(i,2)*t+Math.pow(i,3)*r}function hr(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}hr.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};hr.prototype.addPoint=function(e,n){typeof e=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=e,this.x2=e),e<this.x1&&(this.x1=e),e>this.x2&&(this.x2=e)),typeof n=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=n,this.y2=n),n<this.y1&&(this.y1=n),n>this.y2&&(this.y2=n))};hr.prototype.addX=function(e){this.addPoint(e,null)};hr.prototype.addY=function(e){this.addPoint(null,e)};hr.prototype.addBezier=function(e,n,t,r,i,a,o,s){var l=[e,n],c=[t,r],u=[i,a],f=[o,s];this.addPoint(e,n),this.addPoint(o,s);for(var d=0;d<=1;d++){var p=6*l[d]-12*c[d]+6*u[d],_=-3*l[d]+9*c[d]-9*u[d]+3*f[d],g=3*c[d]-3*l[d];if(_===0){if(p===0)continue;var m=-g/p;0<m&&m<1&&(d===0&&this.addX(li(l[d],c[d],u[d],f[d],m)),d===1&&this.addY(li(l[d],c[d],u[d],f[d],m)));continue}var h=Math.pow(p,2)-4*g*_;if(!(h<0)){var T=(-p+Math.sqrt(h))/(2*_);0<T&&T<1&&(d===0&&this.addX(li(l[d],c[d],u[d],f[d],T)),d===1&&this.addY(li(l[d],c[d],u[d],f[d],T)));var v=(-p-Math.sqrt(h))/(2*_);0<v&&v<1&&(d===0&&this.addX(li(l[d],c[d],u[d],f[d],v)),d===1&&this.addY(li(l[d],c[d],u[d],f[d],v)))}}};hr.prototype.addQuad=function(e,n,t,r,i,a){var o=e+.6666666666666666*(t-e),s=n+2/3*(r-n),l=o+1/3*(i-e),c=s+1/3*(a-n);this.addBezier(e,n,o,s,l,c,i,a)};function zn(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}zn.prototype.moveTo=function(e,n){this.commands.push({type:"M",x:e,y:n})};zn.prototype.lineTo=function(e,n){this.commands.push({type:"L",x:e,y:n})};zn.prototype.curveTo=zn.prototype.bezierCurveTo=function(e,n,t,r,i,a){this.commands.push({type:"C",x1:e,y1:n,x2:t,y2:r,x:i,y:a})};zn.prototype.quadTo=zn.prototype.quadraticCurveTo=function(e,n,t,r){this.commands.push({type:"Q",x1:e,y1:n,x:t,y:r})};zn.prototype.close=zn.prototype.closePath=function(){this.commands.push({type:"Z"})};zn.prototype.extend=function(e){if(e.commands)e=e.commands;else if(e instanceof hr){var n=e;this.moveTo(n.x1,n.y1),this.lineTo(n.x2,n.y1),this.lineTo(n.x2,n.y2),this.lineTo(n.x1,n.y2),this.close();return}Array.prototype.push.apply(this.commands,e)};zn.prototype.getBoundingBox=function(){for(var e=new hr,n=0,t=0,r=0,i=0,a=0;a<this.commands.length;a++){var o=this.commands[a];switch(o.type){case"M":e.addPoint(o.x,o.y),n=r=o.x,t=i=o.y;break;case"L":e.addPoint(o.x,o.y),r=o.x,i=o.y;break;case"Q":e.addQuad(r,i,o.x1,o.y1,o.x,o.y),r=o.x,i=o.y;break;case"C":e.addBezier(r,i,o.x1,o.y1,o.x2,o.y2,o.x,o.y),r=o.x,i=o.y;break;case"Z":r=n,i=t;break;default:throw new Error("Unexpected path command "+o.type)}}return e.isEmpty()&&e.addPoint(0,0),e};zn.prototype.draw=function(e){e.beginPath();for(var n=0;n<this.commands.length;n+=1){var t=this.commands[n];t.type==="M"?e.moveTo(t.x,t.y):t.type==="L"?e.lineTo(t.x,t.y):t.type==="C"?e.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y):t.type==="Q"?e.quadraticCurveTo(t.x1,t.y1,t.x,t.y):t.type==="Z"&&e.closePath()}this.fill&&(e.fillStyle=this.fill,e.fill()),this.stroke&&(e.strokeStyle=this.stroke,e.lineWidth=this.strokeWidth,e.stroke())};zn.prototype.toPathData=function(e){e=e!==void 0?e:2;function n(o){return Math.round(o)===o?""+Math.round(o):o.toFixed(e)}function t(){for(var o=arguments,s="",l=0;l<arguments.length;l+=1){var c=o[l];c>=0&&l>0&&(s+=" "),s+=n(c)}return s}for(var r="",i=0;i<this.commands.length;i+=1){var a=this.commands[i];a.type==="M"?r+="M"+t(a.x,a.y):a.type==="L"?r+="L"+t(a.x,a.y):a.type==="C"?r+="C"+t(a.x1,a.y1,a.x2,a.y2,a.x,a.y):a.type==="Q"?r+="Q"+t(a.x1,a.y1,a.x,a.y):a.type==="Z"&&(r+="Z")}return r};zn.prototype.toSVG=function(e){var n='<path d="';return n+=this.toPathData(e),n+='"',this.fill&&this.fill!=="black"&&(this.fill===null?n+=' fill="none"':n+=' fill="'+this.fill+'"'),this.stroke&&(n+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),n+="/>",n};zn.prototype.toDOMElement=function(e){var n=this.toPathData(e),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",n),t};function yd(e){throw new Error(e)}function su(e,n){e||yd(n)}var Ge={fail:yd,argument:su,assert:su},lu=32768,cu=2147483648,Ci={},he={},Ve={};function kt(e){return function(){return e}}he.BYTE=function(e){return Ge.argument(e>=0&&e<=255,"Byte value should be between 0 and 255."),[e]};Ve.BYTE=kt(1);he.CHAR=function(e){return[e.charCodeAt(0)]};Ve.CHAR=kt(1);he.CHARARRAY=function(e){typeof e>"u"&&(e="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var n=[],t=0;t<e.length;t+=1)n[t]=e.charCodeAt(t);return n};Ve.CHARARRAY=function(e){return typeof e>"u"?0:e.length};he.USHORT=function(e){return[e>>8&255,e&255]};Ve.USHORT=kt(2);he.SHORT=function(e){return e>=lu&&(e=-(2*lu-e)),[e>>8&255,e&255]};Ve.SHORT=kt(2);he.UINT24=function(e){return[e>>16&255,e>>8&255,e&255]};Ve.UINT24=kt(3);he.ULONG=function(e){return[e>>24&255,e>>16&255,e>>8&255,e&255]};Ve.ULONG=kt(4);he.LONG=function(e){return e>=cu&&(e=-(2*cu-e)),[e>>24&255,e>>16&255,e>>8&255,e&255]};Ve.LONG=kt(4);he.FIXED=he.ULONG;Ve.FIXED=Ve.ULONG;he.FWORD=he.SHORT;Ve.FWORD=Ve.SHORT;he.UFWORD=he.USHORT;Ve.UFWORD=Ve.USHORT;he.LONGDATETIME=function(e){return[0,0,0,0,e>>24&255,e>>16&255,e>>8&255,e&255]};Ve.LONGDATETIME=kt(8);he.TAG=function(e){return Ge.argument(e.length===4,"Tag should be exactly 4 ASCII characters."),[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]};Ve.TAG=kt(4);he.Card8=he.BYTE;Ve.Card8=Ve.BYTE;he.Card16=he.USHORT;Ve.Card16=Ve.USHORT;he.OffSize=he.BYTE;Ve.OffSize=Ve.BYTE;he.SID=he.USHORT;Ve.SID=Ve.USHORT;he.NUMBER=function(e){return e>=-107&&e<=107?[e+139]:e>=108&&e<=1131?(e=e-108,[(e>>8)+247,e&255]):e>=-1131&&e<=-108?(e=-e-108,[(e>>8)+251,e&255]):e>=-32768&&e<=32767?he.NUMBER16(e):he.NUMBER32(e)};Ve.NUMBER=function(e){return he.NUMBER(e).length};he.NUMBER16=function(e){return[28,e>>8&255,e&255]};Ve.NUMBER16=kt(3);he.NUMBER32=function(e){return[29,e>>24&255,e>>16&255,e>>8&255,e&255]};Ve.NUMBER32=kt(5);he.REAL=function(e){var n=e.toString(),t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(n);if(t){var r=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));n=(Math.round(e*r)/r).toString()}for(var i="",a=0,o=n.length;a<o;a+=1){var s=n[a];s==="e"?i+=n[++a]==="-"?"c":"b":s==="."?i+="a":s==="-"?i+="e":i+=s}i+=i.length&1?"f":"ff";for(var l=[30],c=0,u=i.length;c<u;c+=2)l.push(parseInt(i.substr(c,2),16));return l};Ve.REAL=function(e){return he.REAL(e).length};he.NAME=he.CHARARRAY;Ve.NAME=Ve.CHARARRAY;he.STRING=he.CHARARRAY;Ve.STRING=Ve.CHARARRAY;Ci.UTF8=function(e,n,t){for(var r=[],i=t,a=0;a<i;a++,n+=1)r[a]=e.getUint8(n);return String.fromCharCode.apply(null,r)};Ci.UTF16=function(e,n,t){for(var r=[],i=t/2,a=0;a<i;a++,n+=2)r[a]=e.getUint16(n);return String.fromCharCode.apply(null,r)};he.UTF16=function(e){for(var n=[],t=0;t<e.length;t+=1){var r=e.charCodeAt(t);n[n.length]=r>>8&255,n[n.length]=r&255}return n};Ve.UTF16=function(e){return e.length*2};var Gs={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};Ci.MACSTRING=function(e,n,t,r){var i=Gs[r];if(i!==void 0){for(var a="",o=0;o<t;o++){var s=e.getUint8(n+o);s<=127?a+=String.fromCharCode(s):a+=i[s&127]}return a}};var wa=typeof WeakMap=="function"&&new WeakMap,Fa,pR=function(e){if(!Fa){Fa={};for(var n in Gs)Fa[n]=new String(n)}var t=Fa[e];if(t!==void 0){if(wa){var r=wa.get(t);if(r!==void 0)return r}var i=Gs[e];if(i!==void 0){for(var a={},o=0;o<i.length;o++)a[i.charCodeAt(o)]=o+128;return wa&&wa.set(t,a),a}}};he.MACSTRING=function(e,n){var t=pR(n);if(t!==void 0){for(var r=[],i=0;i<e.length;i++){var a=e.charCodeAt(i);if(a>=128&&(a=t[a],a===void 0))return;r[i]=a}return r}};Ve.MACSTRING=function(e,n){var t=he.MACSTRING(e,n);return t!==void 0?t.length:0};function Bs(e){return e>=-128&&e<=127}function hR(e,n,t){for(var r=0,i=e.length;n<i&&r<64&&e[n]===0;)++n,++r;return t.push(128|r-1),n}function mR(e,n,t){for(var r=0,i=e.length,a=n;a<i&&r<64;){var o=e[a];if(!Bs(o)||o===0&&a+1<i&&e[a+1]===0)break;++a,++r}t.push(r-1);for(var s=n;s<a;++s)t.push(e[s]+256&255);return a}function _R(e,n,t){for(var r=0,i=e.length,a=n;a<i&&r<64;){var o=e[a];if(o===0||Bs(o)&&a+1<i&&Bs(e[a+1]))break;++a,++r}t.push(64|r-1);for(var s=n;s<a;++s){var l=e[s];t.push(l+65536>>8&255,l+256&255)}return a}he.VARDELTAS=function(e){for(var n=0,t=[];n<e.length;){var r=e[n];r===0?n=hR(e,n,t):r>=-128&&r<=127?n=mR(e,n,t):n=_R(e,n,t)}return t};he.INDEX=function(e){for(var n=1,t=[n],r=[],i=0;i<e.length;i+=1){var a=he.OBJECT(e[i]);Array.prototype.push.apply(r,a),n+=a.length,t.push(n)}if(r.length===0)return[0,0];for(var o=[],s=1+Math.floor(Math.log(n)/Math.log(2))/8|0,l=[void 0,he.BYTE,he.USHORT,he.UINT24,he.ULONG][s],c=0;c<t.length;c+=1){var u=l(t[c]);Array.prototype.push.apply(o,u)}return Array.prototype.concat(he.Card16(e.length),he.OffSize(s),o,r)};Ve.INDEX=function(e){return he.INDEX(e).length};he.DICT=function(e){for(var n=[],t=Object.keys(e),r=t.length,i=0;i<r;i+=1){var a=parseInt(t[i],0),o=e[a];n=n.concat(he.OPERAND(o.value,o.type)),n=n.concat(he.OPERATOR(a))}return n};Ve.DICT=function(e){return he.DICT(e).length};he.OPERATOR=function(e){return e<1200?[e]:[12,e-1200]};he.OPERAND=function(e,n){var t=[];if(Array.isArray(n))for(var r=0;r<n.length;r+=1)Ge.argument(e.length===n.length,"Not enough arguments given for type"+n),t=t.concat(he.OPERAND(e[r],n[r]));else if(n==="SID")t=t.concat(he.NUMBER(e));else if(n==="offset")t=t.concat(he.NUMBER32(e));else if(n==="number")t=t.concat(he.NUMBER(e));else if(n==="real")t=t.concat(he.REAL(e));else throw new Error("Unknown operand type "+n);return t};he.OP=he.BYTE;Ve.OP=Ve.BYTE;var Da=typeof WeakMap=="function"&&new WeakMap;he.CHARSTRING=function(e){if(Da){var n=Da.get(e);if(n!==void 0)return n}for(var t=[],r=e.length,i=0;i<r;i+=1){var a=e[i];t=t.concat(he[a.type](a.value))}return Da&&Da.set(e,t),t};Ve.CHARSTRING=function(e){return he.CHARSTRING(e).length};he.OBJECT=function(e){var n=he[e.type];return Ge.argument(n!==void 0,"No encoding function for type "+e.type),n(e.value)};Ve.OBJECT=function(e){var n=Ve[e.type];return Ge.argument(n!==void 0,"No sizeOf function for type "+e.type),n(e.value)};he.TABLE=function(e){for(var n=[],t=e.fields.length,r=[],i=[],a=0;a<t;a+=1){var o=e.fields[a],s=he[o.type];Ge.argument(s!==void 0,"No encoding function for field type "+o.type+" ("+o.name+")");var l=e[o.name];l===void 0&&(l=o.value);var c=s(l);o.type==="TABLE"?(i.push(n.length),n=n.concat([0,0]),r.push(c)):n=n.concat(c)}for(var u=0;u<r.length;u+=1){var f=i[u],d=n.length;Ge.argument(d<65536,"Table "+e.tableName+" too big."),n[f]=d>>8,n[f+1]=d&255,n=n.concat(r[u])}return n};Ve.TABLE=function(e){for(var n=0,t=e.fields.length,r=0;r<t;r+=1){var i=e.fields[r],a=Ve[i.type];Ge.argument(a!==void 0,"No sizeOf function for field type "+i.type+" ("+i.name+")");var o=e[i.name];o===void 0&&(o=i.value),n+=a(o),i.type==="TABLE"&&(n+=2)}return n};he.RECORD=he.TABLE;Ve.RECORD=Ve.TABLE;he.LITERAL=function(e){return e};Ve.LITERAL=function(e){return e.length};function jn(e,n,t){if(n.length&&(n[0].name!=="coverageFormat"||n[0].value===1))for(var r=0;r<n.length;r+=1){var i=n[r];this[i.name]=i.value}if(this.tableName=e,this.fields=n,t)for(var a=Object.keys(t),o=0;o<a.length;o+=1){var s=a[o],l=t[s];this[s]!==void 0&&(this[s]=l)}}jn.prototype.encode=function(){return he.TABLE(this)};jn.prototype.sizeOf=function(){return Ve.TABLE(this)};function la(e,n,t){t===void 0&&(t=n.length);var r=new Array(n.length+1);r[0]={name:e+"Count",type:"USHORT",value:t};for(var i=0;i<n.length;i++)r[i+1]={name:e+i,type:"USHORT",value:n[i]};return r}function ks(e,n,t){var r=n.length,i=new Array(r+1);i[0]={name:e+"Count",type:"USHORT",value:r};for(var a=0;a<r;a++)i[a+1]={name:e+a,type:"TABLE",value:t(n[a],a)};return i}function ca(e,n,t){var r=n.length,i=[];i[0]={name:e+"Count",type:"USHORT",value:r};for(var a=0;a<r;a++)i=i.concat(t(n[a],a));return i}function ao(e){e.format===1?jn.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(la("glyph",e.glyphs))):e.format===2?jn.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(ca("rangeRecord",e.ranges,function(n){return[{name:"startGlyphID",type:"USHORT",value:n.start},{name:"endGlyphID",type:"USHORT",value:n.end},{name:"startCoverageIndex",type:"USHORT",value:n.index}]}))):Ge.assert(!1,"Coverage format must be 1 or 2.")}ao.prototype=Object.create(jn.prototype);ao.prototype.constructor=ao;function oo(e){jn.call(this,"scriptListTable",ca("scriptRecord",e,function(n,t){var r=n.script,i=r.defaultLangSys;return Ge.assert(!!i,"Unable to write GSUB: script "+n.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:n.tag},{name:"script"+t,type:"TABLE",value:new jn("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new jn("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:i.reqFeatureIndex}].concat(la("featureIndex",i.featureIndexes)))}].concat(ca("langSys",r.langSysRecords,function(a,o){var s=a.langSys;return[{name:"langSysTag"+o,type:"TAG",value:a.tag},{name:"langSys"+o,type:"TABLE",value:new jn("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:s.reqFeatureIndex}].concat(la("featureIndex",s.featureIndexes)))}]})))}]}))}oo.prototype=Object.create(jn.prototype);oo.prototype.constructor=oo;function so(e){jn.call(this,"featureListTable",ca("featureRecord",e,function(n,t){var r=n.feature;return[{name:"featureTag"+t,type:"TAG",value:n.tag},{name:"feature"+t,type:"TABLE",value:new jn("featureTable",[{name:"featureParams",type:"USHORT",value:r.featureParams}].concat(la("lookupListIndex",r.lookupListIndexes)))}]}))}so.prototype=Object.create(jn.prototype);so.prototype.constructor=so;function lo(e,n){jn.call(this,"lookupListTable",ks("lookup",e,function(t){var r=n[t.lookupType];return Ge.assert(!!r,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new jn("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat(ks("subtable",t.subtables,r)))}))}lo.prototype=Object.create(jn.prototype);lo.prototype.constructor=lo;var Re={Table:jn,Record:jn,Coverage:ao,ScriptList:oo,FeatureList:so,LookupList:lo,ushortList:la,tableList:ks,recordList:ca};function uu(e,n){return e.getUint8(n)}function co(e,n){return e.getUint16(n,!1)}function gR(e,n){return e.getInt16(n,!1)}function ml(e,n){return e.getUint32(n,!1)}function Ld(e,n){var t=e.getInt16(n,!1),r=e.getUint16(n+2,!1);return t+r/65535}function vR(e,n){for(var t="",r=n;r<n+4;r+=1)t+=String.fromCharCode(e.getInt8(r));return t}function ER(e,n,t){for(var r=0,i=0;i<t;i+=1)r<<=8,r+=e.getUint8(n+i);return r}function TR(e,n,t){for(var r=[],i=n;i<t;i+=1)r.push(e.getUint8(i));return r}function SR(e){for(var n="",t=0;t<e.length;t+=1)n+=String.fromCharCode(e[t]);return n}var RR={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function B(e,n){this.data=e,this.offset=n,this.relativeOffset=0}B.prototype.parseByte=function(){var e=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e};B.prototype.parseChar=function(){var e=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,e};B.prototype.parseCard8=B.prototype.parseByte;B.prototype.parseUShort=function(){var e=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e};B.prototype.parseCard16=B.prototype.parseUShort;B.prototype.parseSID=B.prototype.parseUShort;B.prototype.parseOffset16=B.prototype.parseUShort;B.prototype.parseShort=function(){var e=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,e};B.prototype.parseF2Dot14=function(){var e=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,e};B.prototype.parseULong=function(){var e=ml(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e};B.prototype.parseOffset32=B.prototype.parseULong;B.prototype.parseFixed=function(){var e=Ld(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,e};B.prototype.parseString=function(e){var n=this.data,t=this.offset+this.relativeOffset,r="";this.relativeOffset+=e;for(var i=0;i<e;i++)r+=String.fromCharCode(n.getUint8(t+i));return r};B.prototype.parseTag=function(){return this.parseString(4)};B.prototype.parseLongDateTime=function(){var e=ml(this.data,this.offset+this.relativeOffset+4);return e-=2082844800,this.relativeOffset+=8,e};B.prototype.parseVersion=function(e){var n=co(this.data,this.offset+this.relativeOffset),t=co(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,e===void 0&&(e=4096),n+t/e/10};B.prototype.skip=function(e,n){n===void 0&&(n=1),this.relativeOffset+=RR[e]*n};B.prototype.parseULongList=function(e){e===void 0&&(e=this.parseULong());for(var n=new Array(e),t=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)n[i]=t.getUint32(r),r+=4;return this.relativeOffset+=e*4,n};B.prototype.parseOffset16List=B.prototype.parseUShortList=function(e){e===void 0&&(e=this.parseUShort());for(var n=new Array(e),t=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)n[i]=t.getUint16(r),r+=2;return this.relativeOffset+=e*2,n};B.prototype.parseShortList=function(e){for(var n=new Array(e),t=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)n[i]=t.getInt16(r),r+=2;return this.relativeOffset+=e*2,n};B.prototype.parseByteList=function(e){for(var n=new Array(e),t=this.data,r=this.offset+this.relativeOffset,i=0;i<e;i++)n[i]=t.getUint8(r++);return this.relativeOffset+=e,n};B.prototype.parseList=function(e,n){n||(n=e,e=this.parseUShort());for(var t=new Array(e),r=0;r<e;r++)t[r]=n.call(this);return t};B.prototype.parseList32=function(e,n){n||(n=e,e=this.parseULong());for(var t=new Array(e),r=0;r<e;r++)t[r]=n.call(this);return t};B.prototype.parseRecordList=function(e,n){n||(n=e,e=this.parseUShort());for(var t=new Array(e),r=Object.keys(n),i=0;i<e;i++){for(var a={},o=0;o<r.length;o++){var s=r[o],l=n[s];a[s]=l.call(this)}t[i]=a}return t};B.prototype.parseRecordList32=function(e,n){n||(n=e,e=this.parseULong());for(var t=new Array(e),r=Object.keys(n),i=0;i<e;i++){for(var a={},o=0;o<r.length;o++){var s=r[o],l=n[s];a[s]=l.call(this)}t[i]=a}return t};B.prototype.parseStruct=function(e){if(typeof e=="function")return e.call(this);for(var n=Object.keys(e),t={},r=0;r<n.length;r++){var i=n[r],a=e[i];t[i]=a.call(this)}return t};B.prototype.parseValueRecord=function(e){if(e===void 0&&(e=this.parseUShort()),e!==0){var n={};return e&1&&(n.xPlacement=this.parseShort()),e&2&&(n.yPlacement=this.parseShort()),e&4&&(n.xAdvance=this.parseShort()),e&8&&(n.yAdvance=this.parseShort()),e&16&&(n.xPlaDevice=void 0,this.parseShort()),e&32&&(n.yPlaDevice=void 0,this.parseShort()),e&64&&(n.xAdvDevice=void 0,this.parseShort()),e&128&&(n.yAdvDevice=void 0,this.parseShort()),n}};B.prototype.parseValueRecordList=function(){for(var e=this.parseUShort(),n=this.parseUShort(),t=new Array(n),r=0;r<n;r++)t[r]=this.parseValueRecord(e);return t};B.prototype.parsePointer=function(e){var n=this.parseOffset16();if(n>0)return new B(this.data,this.offset+n).parseStruct(e)};B.prototype.parsePointer32=function(e){var n=this.parseOffset32();if(n>0)return new B(this.data,this.offset+n).parseStruct(e)};B.prototype.parseListOfLists=function(e){for(var n=this.parseOffset16List(),t=n.length,r=this.relativeOffset,i=new Array(t),a=0;a<t;a++){var o=n[a];if(o===0){i[a]=void 0;continue}if(this.relativeOffset=o,e){for(var s=this.parseOffset16List(),l=new Array(s.length),c=0;c<s.length;c++)this.relativeOffset=o+s[c],l[c]=e.call(this);i[a]=l}else i[a]=this.parseUShortList()}return this.relativeOffset=r,i};B.prototype.parseCoverage=function(){var e=this.offset+this.relativeOffset,n=this.parseUShort(),t=this.parseUShort();if(n===1)return{format:1,glyphs:this.parseUShortList(t)};if(n===2){for(var r=new Array(t),i=0;i<t;i++)r[i]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:r}}throw new Error("0x"+e.toString(16)+": Coverage format must be 1 or 2.")};B.prototype.parseClassDef=function(){var e=this.offset+this.relativeOffset,n=this.parseUShort();if(n===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(n===2)return{format:2,ranges:this.parseRecordList({start:B.uShort,end:B.uShort,classId:B.uShort})};throw new Error("0x"+e.toString(16)+": ClassDef format must be 1 or 2.")};B.list=function(e,n){return function(){return this.parseList(e,n)}};B.list32=function(e,n){return function(){return this.parseList32(e,n)}};B.recordList=function(e,n){return function(){return this.parseRecordList(e,n)}};B.recordList32=function(e,n){return function(){return this.parseRecordList32(e,n)}};B.pointer=function(e){return function(){return this.parsePointer(e)}};B.pointer32=function(e){return function(){return this.parsePointer32(e)}};B.tag=B.prototype.parseTag;B.byte=B.prototype.parseByte;B.uShort=B.offset16=B.prototype.parseUShort;B.uShortList=B.prototype.parseUShortList;B.uLong=B.offset32=B.prototype.parseULong;B.uLongList=B.prototype.parseULongList;B.struct=B.prototype.parseStruct;B.coverage=B.prototype.parseCoverage;B.classDef=B.prototype.parseClassDef;var fu={reserved:B.uShort,reqFeatureIndex:B.uShort,featureIndexes:B.uShortList};B.prototype.parseScriptList=function(){return this.parsePointer(B.recordList({tag:B.tag,script:B.pointer({defaultLangSys:B.pointer(fu),langSysRecords:B.recordList({tag:B.tag,langSys:B.pointer(fu)})})}))||[]};B.prototype.parseFeatureList=function(){return this.parsePointer(B.recordList({tag:B.tag,feature:B.pointer({featureParams:B.offset16,lookupListIndexes:B.uShortList})}))||[]};B.prototype.parseLookupList=function(e){return this.parsePointer(B.list(B.pointer(function(){var n=this.parseUShort();Ge.argument(1<=n&&n<=9,"GPOS/GSUB lookup type "+n+" unknown.");var t=this.parseUShort(),r=t&16;return{lookupType:n,lookupFlag:t,subtables:this.parseList(B.pointer(e[n])),markFilteringSet:r?this.parseUShort():void 0}})))||[]};B.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var e=this.parseUShort(),n=this.parseUShort();Ge.argument(e===1&&n<1,"GPOS/GSUB feature variations table unknown.");var t=this.parseRecordList32({conditionSetOffset:B.offset32,featureTableSubstitutionOffset:B.offset32});return t})||[]};var Ie={getByte:uu,getCard8:uu,getUShort:co,getCard16:co,getShort:gR,getULong:ml,getFixed:Ld,getTag:vR,getOffset:ER,getBytes:TR,bytesToString:SR,Parser:B};function AR(e,n){n.parseUShort(),e.length=n.parseULong(),e.language=n.parseULong();var t;e.groupCount=t=n.parseULong(),e.glyphIndexMap={};for(var r=0;r<t;r+=1)for(var i=n.parseULong(),a=n.parseULong(),o=n.parseULong(),s=i;s<=a;s+=1)e.glyphIndexMap[s]=o,o++}function yR(e,n,t,r,i){e.length=n.parseUShort(),e.language=n.parseUShort();var a;e.segCount=a=n.parseUShort()>>1,n.skip("uShort",3),e.glyphIndexMap={};for(var o=new Ie.Parser(t,r+i+14),s=new Ie.Parser(t,r+i+16+a*2),l=new Ie.Parser(t,r+i+16+a*4),c=new Ie.Parser(t,r+i+16+a*6),u=r+i+16+a*8,f=0;f<a-1;f+=1)for(var d=void 0,p=o.parseUShort(),_=s.parseUShort(),g=l.parseShort(),m=c.parseUShort(),h=_;h<=p;h+=1)m!==0?(u=c.offset+c.relativeOffset-2,u+=m,u+=(h-_)*2,d=Ie.getUShort(t,u),d!==0&&(d=d+g&65535)):d=h+g&65535,e.glyphIndexMap[h]=d}function LR(e,n){var t={};t.version=Ie.getUShort(e,n),Ge.argument(t.version===0,"cmap table version should be 0."),t.numTables=Ie.getUShort(e,n+2);for(var r=-1,i=t.numTables-1;i>=0;i-=1){var a=Ie.getUShort(e,n+4+i*8),o=Ie.getUShort(e,n+4+i*8+2);if(a===3&&(o===0||o===1||o===10)||a===0&&(o===0||o===1||o===2||o===3||o===4)){r=Ie.getULong(e,n+4+i*8+4);break}}if(r===-1)throw new Error("No valid cmap sub-tables found.");var s=new Ie.Parser(e,n+r);if(t.format=s.parseUShort(),t.format===12)AR(t,s);else if(t.format===4)yR(t,s,e,n,r);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+t.format+").");return t}function xR(e,n,t){e.segments.push({end:n,start:n,delta:-(n-t),offset:0,glyphIndex:t})}function MR(e){e.segments.push({end:65535,start:65535,delta:1,offset:0})}function IR(e){var n=!0,t;for(t=e.length-1;t>0;t-=1){var r=e.get(t);if(r.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),n=!1;break}}var i=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:n?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:n?12:20}];n||(i=i.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),i=i.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var a=new Re.Table("cmap",i);for(a.segments=[],t=0;t<e.length;t+=1){for(var o=e.get(t),s=0;s<o.unicodes.length;s+=1)xR(a,o.unicodes[s],t);a.segments=a.segments.sort(function(T,v){return T.start-v.start})}MR(a);var l=a.segments.length,c=0,u=[],f=[],d=[],p=[],_=[],g=[];for(t=0;t<l;t+=1){var m=a.segments[t];m.end<=65535&&m.start<=65535?(u=u.concat({name:"end_"+t,type:"USHORT",value:m.end}),f=f.concat({name:"start_"+t,type:"USHORT",value:m.start}),d=d.concat({name:"idDelta_"+t,type:"SHORT",value:m.delta}),p=p.concat({name:"idRangeOffset_"+t,type:"USHORT",value:m.offset}),m.glyphId!==void 0&&(_=_.concat({name:"glyph_"+t,type:"USHORT",value:m.glyphId}))):c+=1,!n&&m.glyphIndex!==void 0&&(g=g.concat({name:"cmap12Start_"+t,type:"ULONG",value:m.start}),g=g.concat({name:"cmap12End_"+t,type:"ULONG",value:m.end}),g=g.concat({name:"cmap12Glyph_"+t,type:"ULONG",value:m.glyphIndex}))}if(a.segCountX2=(l-c)*2,a.searchRange=Math.pow(2,Math.floor(Math.log(l-c)/Math.log(2)))*2,a.entrySelector=Math.log(a.searchRange/2)/Math.log(2),a.rangeShift=a.segCountX2-a.searchRange,a.fields=a.fields.concat(u),a.fields.push({name:"reservedPad",type:"USHORT",value:0}),a.fields=a.fields.concat(f),a.fields=a.fields.concat(d),a.fields=a.fields.concat(p),a.fields=a.fields.concat(_),a.cmap4Length=14+u.length*2+2+f.length*2+d.length*2+p.length*2+_.length*2,!n){var h=16+g.length*4;a.cmap12Offset=12+2*2+4+a.cmap4Length,a.fields=a.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:h},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:g.length/3}]),a.fields=a.fields.concat(g)}return a}var xd={parse:LR,make:IR},ja=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],bR=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],OR=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Br=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function Md(e){this.font=e}Md.prototype.charToGlyphIndex=function(e){var n=e.codePointAt(0),t=this.font.glyphs;if(t){for(var r=0;r<t.length;r+=1)for(var i=t.get(r),a=0;a<i.unicodes.length;a+=1)if(i.unicodes[a]===n)return r}return null};function Id(e){this.cmap=e}Id.prototype.charToGlyphIndex=function(e){return this.cmap.glyphIndexMap[e.codePointAt(0)]||0};function uo(e,n){this.encoding=e,this.charset=n}uo.prototype.charToGlyphIndex=function(e){var n=e.codePointAt(0),t=this.encoding[n];return this.charset.indexOf(t)};function _l(e){switch(e.version){case 1:this.names=Br.slice();break;case 2:this.names=new Array(e.numberOfGlyphs);for(var n=0;n<e.numberOfGlyphs;n++)e.glyphNameIndex[n]<Br.length?this.names[n]=Br[e.glyphNameIndex[n]]:this.names[n]=e.names[e.glyphNameIndex[n]-Br.length];break;case 2.5:this.names=new Array(e.numberOfGlyphs);for(var t=0;t<e.numberOfGlyphs;t++)this.names[t]=Br[t+e.glyphNameIndex[t]];break;case 3:this.names=[];break;default:this.names=[];break}}_l.prototype.nameToGlyphIndex=function(e){return this.names.indexOf(e)};_l.prototype.glyphIndexToName=function(e){return this.names[e]};function CR(e){for(var n,t=e.tables.cmap.glyphIndexMap,r=Object.keys(t),i=0;i<r.length;i+=1){var a=r[i],o=t[a];n=e.glyphs.get(o),n.addUnicode(parseInt(a))}for(var s=0;s<e.glyphs.length;s+=1)n=e.glyphs.get(s),e.cffEncoding?e.isCIDFont?n.name="gid"+s:n.name=e.cffEncoding.charset[s]:e.glyphNames.names&&(n.name=e.glyphNames.glyphIndexToName(s))}function PR(e){e._IndexToUnicodeMap={};for(var n=e.tables.cmap.glyphIndexMap,t=Object.keys(n),r=0;r<t.length;r+=1){var i=t[r],a=n[i];e._IndexToUnicodeMap[a]===void 0?e._IndexToUnicodeMap[a]={unicodes:[parseInt(i)]}:e._IndexToUnicodeMap[a].unicodes.push(parseInt(i))}}function NR(e,n){n.lowMemory?PR(e):CR(e)}function wR(e,n,t,r,i){e.beginPath(),e.moveTo(n,t),e.lineTo(r,i),e.stroke()}var Fr={line:wR};function FR(e,n){var t=n||new zn;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(r){t=r}}}function Rt(e){this.bindConstructorValues(e)}Rt.prototype.bindConstructorValues=function(e){this.index=e.index||0,this.name=e.name||null,this.unicode=e.unicode||void 0,this.unicodes=e.unicodes||e.unicode!==void 0?[e.unicode]:[],"xMin"in e&&(this.xMin=e.xMin),"yMin"in e&&(this.yMin=e.yMin),"xMax"in e&&(this.xMax=e.xMax),"yMax"in e&&(this.yMax=e.yMax),"advanceWidth"in e&&(this.advanceWidth=e.advanceWidth),Object.defineProperty(this,"path",FR(this,e.path))};Rt.prototype.addUnicode=function(e){this.unicodes.length===0&&(this.unicode=e),this.unicodes.push(e)};Rt.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};Rt.prototype.getPath=function(e,n,t,r,i){e=e!==void 0?e:0,n=n!==void 0?n:0,t=t!==void 0?t:72;var a,o;r||(r={});var s=r.xScale,l=r.yScale;if(r.hinting&&i&&i.hinting&&(o=this.path&&i.hinting.exec(this,t)),o)a=i.hinting.getCommands(o),e=Math.round(e),n=Math.round(n),s=l=1;else{a=this.path.commands;var c=1/(this.path.unitsPerEm||1e3)*t;s===void 0&&(s=c),l===void 0&&(l=c)}for(var u=new zn,f=0;f<a.length;f+=1){var d=a[f];d.type==="M"?u.moveTo(e+d.x*s,n+-d.y*l):d.type==="L"?u.lineTo(e+d.x*s,n+-d.y*l):d.type==="Q"?u.quadraticCurveTo(e+d.x1*s,n+-d.y1*l,e+d.x*s,n+-d.y*l):d.type==="C"?u.curveTo(e+d.x1*s,n+-d.y1*l,e+d.x2*s,n+-d.y2*l,e+d.x*s,n+-d.y*l):d.type==="Z"&&u.closePath()}return u};Rt.prototype.getContours=function(){if(this.points===void 0)return[];for(var e=[],n=[],t=0;t<this.points.length;t+=1){var r=this.points[t];n.push(r),r.lastPointOfContour&&(e.push(n),n=[])}return Ge.argument(n.length===0,"There are still points left in the current contour."),e};Rt.prototype.getMetrics=function(){for(var e=this.path.commands,n=[],t=[],r=0;r<e.length;r+=1){var i=e[r];i.type!=="Z"&&(n.push(i.x),t.push(i.y)),(i.type==="Q"||i.type==="C")&&(n.push(i.x1),t.push(i.y1)),i.type==="C"&&(n.push(i.x2),t.push(i.y2))}var a={xMin:Math.min.apply(null,n),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,n),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(a.xMin)||(a.xMin=0),isFinite(a.xMax)||(a.xMax=this.advanceWidth),isFinite(a.yMin)||(a.yMin=0),isFinite(a.yMax)||(a.yMax=0),a.rightSideBearing=this.advanceWidth-a.leftSideBearing-(a.xMax-a.xMin),a};Rt.prototype.draw=function(e,n,t,r,i){this.getPath(n,t,r,i).draw(e)};Rt.prototype.drawPoints=function(e,n,t,r){function i(f,d,p,_){e.beginPath();for(var g=0;g<f.length;g+=1)e.moveTo(d+f[g].x*_,p+f[g].y*_),e.arc(d+f[g].x*_,p+f[g].y*_,2,0,Math.PI*2,!1);e.closePath(),e.fill()}n=n!==void 0?n:0,t=t!==void 0?t:0,r=r!==void 0?r:24;for(var a=1/this.path.unitsPerEm*r,o=[],s=[],l=this.path,c=0;c<l.commands.length;c+=1){var u=l.commands[c];u.x!==void 0&&o.push({x:u.x,y:-u.y}),u.x1!==void 0&&s.push({x:u.x1,y:-u.y1}),u.x2!==void 0&&s.push({x:u.x2,y:-u.y2})}e.fillStyle="blue",i(o,n,t,a),e.fillStyle="red",i(s,n,t,a)};Rt.prototype.drawMetrics=function(e,n,t,r){var i;n=n!==void 0?n:0,t=t!==void 0?t:0,r=r!==void 0?r:24,i=1/this.path.unitsPerEm*r,e.lineWidth=1,e.strokeStyle="black",Fr.line(e,n,-1e4,n,1e4),Fr.line(e,-1e4,t,1e4,t);var a=this.xMin||0,o=this.yMin||0,s=this.xMax||0,l=this.yMax||0,c=this.advanceWidth||0;e.strokeStyle="blue",Fr.line(e,n+a*i,-1e4,n+a*i,1e4),Fr.line(e,n+s*i,-1e4,n+s*i,1e4),Fr.line(e,-1e4,t+-o*i,1e4,t+-o*i),Fr.line(e,-1e4,t+-l*i,1e4,t+-l*i),e.strokeStyle="green",Fr.line(e,n+c*i,-1e4,n+c*i,1e4)};function Ua(e,n,t){Object.defineProperty(e,n,{get:function(){return e.path,e[t]},set:function(r){e[t]=r},enumerable:!0,configurable:!0})}function gl(e,n){if(this.font=e,this.glyphs={},Array.isArray(n))for(var t=0;t<n.length;t++){var r=n[t];r.path.unitsPerEm=e.unitsPerEm,this.glyphs[t]=r}this.length=n&&n.length||0}gl.prototype.get=function(e){if(this.glyphs[e]===void 0){this.font._push(e),typeof this.glyphs[e]=="function"&&(this.glyphs[e]=this.glyphs[e]());var n=this.glyphs[e],t=this.font._IndexToUnicodeMap[e];if(t)for(var r=0;r<t.unicodes.length;r++)n.addUnicode(t.unicodes[r]);this.font.cffEncoding?this.font.isCIDFont?n.name="gid"+e:n.name=this.font.cffEncoding.charset[e]:this.font.glyphNames.names&&(n.name=this.font.glyphNames.glyphIndexToName(e)),this.glyphs[e].advanceWidth=this.font._hmtxTableData[e].advanceWidth,this.glyphs[e].leftSideBearing=this.font._hmtxTableData[e].leftSideBearing}else typeof this.glyphs[e]=="function"&&(this.glyphs[e]=this.glyphs[e]());return this.glyphs[e]};gl.prototype.push=function(e,n){this.glyphs[e]=n,this.length++};function DR(e,n){return new Rt({index:n,font:e})}function UR(e,n,t,r,i,a){return function(){var o=new Rt({index:n,font:e});return o.path=function(){t(o,r,i);var s=a(e.glyphs,o);return s.unitsPerEm=e.unitsPerEm,s},Ua(o,"xMin","_xMin"),Ua(o,"xMax","_xMax"),Ua(o,"yMin","_yMin"),Ua(o,"yMax","_yMax"),o}}function HR(e,n,t,r){return function(){var i=new Rt({index:n,font:e});return i.path=function(){var a=t(e,i,r);return a.unitsPerEm=e.unitsPerEm,a},i}}var er={GlyphSet:gl,glyphLoader:DR,ttfGlyphLoader:UR,cffGlyphLoader:HR};function bd(e,n){if(e===n)return!0;if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;for(var t=0;t<e.length;t+=1)if(!bd(e[t],n[t]))return!1;return!0}else return!1}function Ws(e){var n;return e.length<1240?n=107:e.length<33900?n=1131:n=32768,n}function Tr(e,n,t){var r=[],i=[],a=Ie.getCard16(e,n),o,s;if(a!==0){var l=Ie.getByte(e,n+2);o=n+(a+1)*l+2;for(var c=n+3,u=0;u<a+1;u+=1)r.push(Ie.getOffset(e,c,l)),c+=l;s=o+r[a]}else s=n+2;for(var f=0;f<r.length-1;f+=1){var d=Ie.getBytes(e,o+r[f],o+r[f+1]);t&&(d=t(d)),i.push(d)}return{objects:i,startOffset:n,endOffset:s}}function GR(e,n){var t=[],r=Ie.getCard16(e,n),i,a;if(r!==0){var o=Ie.getByte(e,n+2);i=n+(r+1)*o+2;for(var s=n+3,l=0;l<r+1;l+=1)t.push(Ie.getOffset(e,s,o)),s+=o;a=i+t[r]}else a=n+2;return{offsets:t,startOffset:n,endOffset:a}}function BR(e,n,t,r,i){var a=Ie.getCard16(t,r),o=0;if(a!==0){var s=Ie.getByte(t,r+2);o=r+(a+1)*s+2}var l=Ie.getBytes(t,o+n[e],o+n[e+1]);return l}function kR(e){for(var n="",t=15,r=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var i=e.parseByte(),a=i>>4,o=i&15;if(a===t||(n+=r[a],o===t))break;n+=r[o]}return parseFloat(n)}function WR(e,n){var t,r,i,a;if(n===28)return t=e.parseByte(),r=e.parseByte(),t<<8|r;if(n===29)return t=e.parseByte(),r=e.parseByte(),i=e.parseByte(),a=e.parseByte(),t<<24|r<<16|i<<8|a;if(n===30)return kR(e);if(n>=32&&n<=246)return n-139;if(n>=247&&n<=250)return t=e.parseByte(),(n-247)*256+t+108;if(n>=251&&n<=254)return t=e.parseByte(),-(n-251)*256-t-108;throw new Error("Invalid b0 "+n)}function zR(e){for(var n={},t=0;t<e.length;t+=1){var r=e[t][0],i=e[t][1],a=void 0;if(i.length===1?a=i[0]:a=i,n.hasOwnProperty(r)&&!isNaN(n[r]))throw new Error("Object "+n+" already has key "+r);n[r]=a}return n}function Od(e,n,t){n=n!==void 0?n:0;var r=new Ie.Parser(e,n),i=[],a=[];for(t=t!==void 0?t:e.length;r.relativeOffset<t;){var o=r.parseByte();o<=21?(o===12&&(o=1200+r.parseByte()),i.push([o,a]),a=[]):a.push(WR(r,o))}return zR(i)}function ji(e,n){return n<=390?n=ja[n]:n=e[n-391],n}function Cd(e,n,t){for(var r={},i,a=0;a<n.length;a+=1){var o=n[a];if(Array.isArray(o.type)){var s=[];s.length=o.type.length;for(var l=0;l<o.type.length;l++)i=e[o.op]!==void 0?e[o.op][l]:void 0,i===void 0&&(i=o.value!==void 0&&o.value[l]!==void 0?o.value[l]:null),o.type[l]==="SID"&&(i=ji(t,i)),s[l]=i;r[o.name]=s}else i=e[o.op],i===void 0&&(i=o.value!==void 0?o.value:null),o.type==="SID"&&(i=ji(t,i)),r[o.name]=i}return r}function VR(e,n){var t={};return t.formatMajor=Ie.getCard8(e,n),t.formatMinor=Ie.getCard8(e,n+1),t.size=Ie.getCard8(e,n+2),t.offsetSize=Ie.getCard8(e,n+3),t.startOffset=n,t.endOffset=n+4,t}var Pd=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],Nd=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function XR(e,n){var t=Od(e,0,e.byteLength);return Cd(t,Pd,n)}function wd(e,n,t,r){var i=Od(e,n,t);return Cd(i,Nd,r)}function du(e,n,t,r){for(var i=[],a=0;a<t.length;a+=1){var o=new DataView(new Uint8Array(t[a]).buffer),s=XR(o,r);s._subrs=[],s._subrsBias=0,s._defaultWidthX=0,s._nominalWidthX=0;var l=s.private[0],c=s.private[1];if(l!==0&&c!==0){var u=wd(e,c+n,l,r);if(s._defaultWidthX=u.defaultWidthX,s._nominalWidthX=u.nominalWidthX,u.subrs!==0){var f=c+u.subrs,d=Tr(e,f+n);s._subrs=d.objects,s._subrsBias=Ws(s._subrs)}s._privateDict=u}i.push(s)}return i}function KR(e,n,t,r){var i,a,o=new Ie.Parser(e,n);t-=1;var s=[".notdef"],l=o.parseCard8();if(l===0)for(var c=0;c<t;c+=1)i=o.parseSID(),s.push(ji(r,i));else if(l===1)for(;s.length<=t;){i=o.parseSID(),a=o.parseCard8();for(var u=0;u<=a;u+=1)s.push(ji(r,i)),i+=1}else if(l===2)for(;s.length<=t;){i=o.parseSID(),a=o.parseCard16();for(var f=0;f<=a;f+=1)s.push(ji(r,i)),i+=1}else throw new Error("Unknown charset format "+l);return s}function YR(e,n,t){var r,i={},a=new Ie.Parser(e,n),o=a.parseCard8();if(o===0)for(var s=a.parseCard8(),l=0;l<s;l+=1)r=a.parseCard8(),i[r]=l;else if(o===1){var c=a.parseCard8();r=1;for(var u=0;u<c;u+=1)for(var f=a.parseCard8(),d=a.parseCard8(),p=f;p<=f+d;p+=1)i[p]=r,r+=1}else throw new Error("Unknown encoding format "+o);return new uo(i,t)}function pu(e,n,t){var r,i,a,o,s=new zn,l=[],c=0,u=!1,f=!1,d=0,p=0,_,g,m,h;if(e.isCIDFont){var T=e.tables.cff.topDict._fdSelect[n.index],v=e.tables.cff.topDict._fdArray[T];_=v._subrs,g=v._subrsBias,m=v._defaultWidthX,h=v._nominalWidthX}else _=e.tables.cff.topDict._subrs,g=e.tables.cff.topDict._subrsBias,m=e.tables.cff.topDict._defaultWidthX,h=e.tables.cff.topDict._nominalWidthX;var E=m;function L(b,A){f&&s.closePath(),s.moveTo(b,A),f=!0}function I(){var b;b=l.length%2!==0,b&&!u&&(E=l.shift()+h),c+=l.length>>1,l.length=0,u=!0}function x(b){for(var A,S,C,H,G,V,q,k,ee,X,le,me,_e=0;_e<b.length;){var we=b[_e];switch(_e+=1,we){case 1:I();break;case 3:I();break;case 4:l.length>1&&!u&&(E=l.shift()+h,u=!0),p+=l.pop(),L(d,p);break;case 5:for(;l.length>0;)d+=l.shift(),p+=l.shift(),s.lineTo(d,p);break;case 6:for(;l.length>0&&(d+=l.shift(),s.lineTo(d,p),l.length!==0);)p+=l.shift(),s.lineTo(d,p);break;case 7:for(;l.length>0&&(p+=l.shift(),s.lineTo(d,p),l.length!==0);)d+=l.shift(),s.lineTo(d,p);break;case 8:for(;l.length>0;)r=d+l.shift(),i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),d=a+l.shift(),p=o+l.shift(),s.curveTo(r,i,a,o,d,p);break;case 10:G=l.pop()+g,V=_[G],V&&x(V);break;case 11:return;case 12:switch(we=b[_e],_e+=1,we){case 35:r=d+l.shift(),i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),q=a+l.shift(),k=o+l.shift(),ee=q+l.shift(),X=k+l.shift(),le=ee+l.shift(),me=X+l.shift(),d=le+l.shift(),p=me+l.shift(),l.shift(),s.curveTo(r,i,a,o,q,k),s.curveTo(ee,X,le,me,d,p);break;case 34:r=d+l.shift(),i=p,a=r+l.shift(),o=i+l.shift(),q=a+l.shift(),k=o,ee=q+l.shift(),X=o,le=ee+l.shift(),me=p,d=le+l.shift(),s.curveTo(r,i,a,o,q,k),s.curveTo(ee,X,le,me,d,p);break;case 36:r=d+l.shift(),i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),q=a+l.shift(),k=o,ee=q+l.shift(),X=o,le=ee+l.shift(),me=X+l.shift(),d=le+l.shift(),s.curveTo(r,i,a,o,q,k),s.curveTo(ee,X,le,me,d,p);break;case 37:r=d+l.shift(),i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),q=a+l.shift(),k=o+l.shift(),ee=q+l.shift(),X=k+l.shift(),le=ee+l.shift(),me=X+l.shift(),Math.abs(le-d)>Math.abs(me-p)?d=le+l.shift():p=me+l.shift(),s.curveTo(r,i,a,o,q,k),s.curveTo(ee,X,le,me,d,p);break;default:console.log("Glyph "+n.index+": unknown operator 1200"+we),l.length=0}break;case 14:l.length>0&&!u&&(E=l.shift()+h,u=!0),f&&(s.closePath(),f=!1);break;case 18:I();break;case 19:case 20:I(),_e+=c+7>>3;break;case 21:l.length>2&&!u&&(E=l.shift()+h,u=!0),p+=l.pop(),d+=l.pop(),L(d,p);break;case 22:l.length>1&&!u&&(E=l.shift()+h,u=!0),d+=l.pop(),L(d,p);break;case 23:I();break;case 24:for(;l.length>2;)r=d+l.shift(),i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),d=a+l.shift(),p=o+l.shift(),s.curveTo(r,i,a,o,d,p);d+=l.shift(),p+=l.shift(),s.lineTo(d,p);break;case 25:for(;l.length>6;)d+=l.shift(),p+=l.shift(),s.lineTo(d,p);r=d+l.shift(),i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),d=a+l.shift(),p=o+l.shift(),s.curveTo(r,i,a,o,d,p);break;case 26:for(l.length%2&&(d+=l.shift());l.length>0;)r=d,i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),d=a,p=o+l.shift(),s.curveTo(r,i,a,o,d,p);break;case 27:for(l.length%2&&(p+=l.shift());l.length>0;)r=d+l.shift(),i=p,a=r+l.shift(),o=i+l.shift(),d=a+l.shift(),p=o,s.curveTo(r,i,a,o,d,p);break;case 28:A=b[_e],S=b[_e+1],l.push((A<<24|S<<16)>>16),_e+=2;break;case 29:G=l.pop()+e.gsubrsBias,V=e.gsubrs[G],V&&x(V);break;case 30:for(;l.length>0&&(r=d,i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),d=a+l.shift(),p=o+(l.length===1?l.shift():0),s.curveTo(r,i,a,o,d,p),l.length!==0);)r=d+l.shift(),i=p,a=r+l.shift(),o=i+l.shift(),p=o+l.shift(),d=a+(l.length===1?l.shift():0),s.curveTo(r,i,a,o,d,p);break;case 31:for(;l.length>0&&(r=d+l.shift(),i=p,a=r+l.shift(),o=i+l.shift(),p=o+l.shift(),d=a+(l.length===1?l.shift():0),s.curveTo(r,i,a,o,d,p),l.length!==0);)r=d,i=p+l.shift(),a=r+l.shift(),o=i+l.shift(),d=a+l.shift(),p=o+(l.length===1?l.shift():0),s.curveTo(r,i,a,o,d,p);break;default:we<32?console.log("Glyph "+n.index+": unknown operator "+we):we<247?l.push(we-139):we<251?(A=b[_e],_e+=1,l.push((we-247)*256+A+108)):we<255?(A=b[_e],_e+=1,l.push(-(we-251)*256-A-108)):(A=b[_e],S=b[_e+1],C=b[_e+2],H=b[_e+3],_e+=4,l.push((A<<24|S<<16|C<<8|H)/65536))}}}return x(t),n.advanceWidth=E,s}function qR(e,n,t,r){var i=[],a,o=new Ie.Parser(e,n),s=o.parseCard8();if(s===0)for(var l=0;l<t;l++){if(a=o.parseCard8(),a>=r)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+r+")");i.push(a)}else if(s===3){var c=o.parseCard16(),u=o.parseCard16();if(u!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+u);for(var f,d=0;d<c;d++){if(a=o.parseCard8(),f=o.parseCard16(),a>=r)throw new Error("CFF table CID Font FDSelect has bad FD index value "+a+" (FD count "+r+")");if(f>t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+f);for(;u<f;u++)i.push(a);u=f}if(f!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+f)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+s);return i}function jR(e,n,t,r){t.tables.cff={};var i=VR(e,n),a=Tr(e,i.endOffset,Ie.bytesToString),o=Tr(e,a.endOffset),s=Tr(e,o.endOffset,Ie.bytesToString),l=Tr(e,s.endOffset);t.gsubrs=l.objects,t.gsubrsBias=Ws(t.gsubrs);var c=du(e,n,o.objects,s.objects);if(c.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+c.length);var u=c[0];if(t.tables.cff.topDict=u,u._privateDict&&(t.defaultWidthX=u._privateDict.defaultWidthX,t.nominalWidthX=u._privateDict.nominalWidthX),u.ros[0]!==void 0&&u.ros[1]!==void 0&&(t.isCIDFont=!0),t.isCIDFont){var f=u.fdArray,d=u.fdSelect;if(f===0||d===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");f+=n;var p=Tr(e,f),_=du(e,n,p.objects,s.objects);u._fdArray=_,d+=n,u._fdSelect=qR(e,d,t.numGlyphs,_.length)}var g=n+u.private[1],m=wd(e,g,u.private[0],s.objects);if(t.defaultWidthX=m.defaultWidthX,t.nominalWidthX=m.nominalWidthX,m.subrs!==0){var h=g+m.subrs,T=Tr(e,h);t.subrs=T.objects,t.subrsBias=Ws(t.subrs)}else t.subrs=[],t.subrsBias=0;var v;r.lowMemory?(v=GR(e,n+u.charStrings),t.nGlyphs=v.offsets.length):(v=Tr(e,n+u.charStrings),t.nGlyphs=v.objects.length);var E=KR(e,n+u.charset,t.nGlyphs,s.objects);if(u.encoding===0?t.cffEncoding=new uo(bR,E):u.encoding===1?t.cffEncoding=new uo(OR,E):t.cffEncoding=YR(e,n+u.encoding,E),t.encoding=t.encoding||t.cffEncoding,t.glyphs=new er.GlyphSet(t),r.lowMemory)t._push=function(x){var b=BR(x,v.offsets,e,n+u.charStrings);t.glyphs.push(x,er.cffGlyphLoader(t,x,pu,b))};else for(var L=0;L<t.nGlyphs;L+=1){var I=v.objects[L];t.glyphs.push(L,er.cffGlyphLoader(t,L,pu,I))}}function Fd(e,n){var t,r=ja.indexOf(e);return r>=0&&(t=r),r=n.indexOf(e),r>=0?t=r+ja.length:(t=ja.length+n.length,n.push(e)),t}function ZR(){return new Re.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function JR(e){var n=new Re.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);n.names=[];for(var t=0;t<e.length;t+=1)n.names.push({name:"name_"+t,type:"NAME",value:e[t]});return n}function Dd(e,n,t){for(var r={},i=0;i<e.length;i+=1){var a=e[i],o=n[a.name];o!==void 0&&!bd(o,a.value)&&(a.type==="SID"&&(o=Fd(o,t)),r[a.op]={name:a.name,type:a.type,value:o})}return r}function hu(e,n){var t=new Re.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=Dd(Pd,e,n),t}function mu(e){var n=new Re.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return n.topDicts=[{name:"topDict_0",type:"TABLE",value:e}],n}function $R(e){var n=new Re.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);n.strings=[];for(var t=0;t<e.length;t+=1)n.strings.push({name:"string_"+t,type:"STRING",value:e[t]});return n}function QR(){return new Re.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function eA(e,n){for(var t=new Re.Record("Charsets",[{name:"format",type:"Card8",value:0}]),r=0;r<e.length;r+=1){var i=e[r],a=Fd(i,n);t.fields.push({name:"glyph_"+r,type:"SID",value:a})}return t}function nA(e){var n=[],t=e.path;n.push({name:"width",type:"NUMBER",value:e.advanceWidth});for(var r=0,i=0,a=0;a<t.commands.length;a+=1){var o=void 0,s=void 0,l=t.commands[a];if(l.type==="Q"){var c=.3333333333333333,u=2/3;l={type:"C",x:l.x,y:l.y,x1:Math.round(c*r+u*l.x1),y1:Math.round(c*i+u*l.y1),x2:Math.round(c*l.x+u*l.x1),y2:Math.round(c*l.y+u*l.y1)}}if(l.type==="M")o=Math.round(l.x-r),s=Math.round(l.y-i),n.push({name:"dx",type:"NUMBER",value:o}),n.push({name:"dy",type:"NUMBER",value:s}),n.push({name:"rmoveto",type:"OP",value:21}),r=Math.round(l.x),i=Math.round(l.y);else if(l.type==="L")o=Math.round(l.x-r),s=Math.round(l.y-i),n.push({name:"dx",type:"NUMBER",value:o}),n.push({name:"dy",type:"NUMBER",value:s}),n.push({name:"rlineto",type:"OP",value:5}),r=Math.round(l.x),i=Math.round(l.y);else if(l.type==="C"){var f=Math.round(l.x1-r),d=Math.round(l.y1-i),p=Math.round(l.x2-l.x1),_=Math.round(l.y2-l.y1);o=Math.round(l.x-l.x2),s=Math.round(l.y-l.y2),n.push({name:"dx1",type:"NUMBER",value:f}),n.push({name:"dy1",type:"NUMBER",value:d}),n.push({name:"dx2",type:"NUMBER",value:p}),n.push({name:"dy2",type:"NUMBER",value:_}),n.push({name:"dx",type:"NUMBER",value:o}),n.push({name:"dy",type:"NUMBER",value:s}),n.push({name:"rrcurveto",type:"OP",value:8}),r=Math.round(l.x),i=Math.round(l.y)}}return n.push({name:"endchar",type:"OP",value:14}),n}function tA(e){for(var n=new Re.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),t=0;t<e.length;t+=1){var r=e.get(t),i=nA(r);n.charStrings.push({name:r.name,type:"CHARSTRING",value:i})}return n}function rA(e,n){var t=new Re.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=Dd(Nd,e,n),t}function iA(e,n){for(var t=new Re.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),r=1/n.unitsPerEm,i={version:n.version,fullName:n.fullName,familyName:n.familyName,weight:n.weightName,fontBBox:n.fontBBox||[0,0,0,0],fontMatrix:[r,0,0,r,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},a={},o=[],s,l=1;l<e.length;l+=1)s=e.get(l),o.push(s.name);var c=[];t.header=ZR(),t.nameIndex=JR([n.postScriptName]);var u=hu(i,c);t.topDictIndex=mu(u),t.globalSubrIndex=QR(),t.charsets=eA(o,c),t.charStringsIndex=tA(e),t.privateDict=rA(a,c),t.stringIndex=$R(c);var f=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return i.charset=f,i.encoding=0,i.charStrings=i.charset+t.charsets.sizeOf(),i.private[1]=i.charStrings+t.charStringsIndex.sizeOf(),u=hu(i,c),t.topDictIndex=mu(u),t}var Ud={parse:jR,make:iA};function aA(e,n){var t={},r=new Ie.Parser(e,n);return t.version=r.parseVersion(),t.fontRevision=Math.round(r.parseFixed()*1e3)/1e3,t.checkSumAdjustment=r.parseULong(),t.magicNumber=r.parseULong(),Ge.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=r.parseUShort(),t.unitsPerEm=r.parseUShort(),t.created=r.parseLongDateTime(),t.modified=r.parseLongDateTime(),t.xMin=r.parseShort(),t.yMin=r.parseShort(),t.xMax=r.parseShort(),t.yMax=r.parseShort(),t.macStyle=r.parseUShort(),t.lowestRecPPEM=r.parseUShort(),t.fontDirectionHint=r.parseShort(),t.indexToLocFormat=r.parseShort(),t.glyphDataFormat=r.parseShort(),t}function oA(e){var n=Math.round(new Date().getTime()/1e3)+2082844800,t=n;return e.createdTimestamp&&(t=e.createdTimestamp+2082844800),new Re.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:n},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],e)}var Hd={parse:aA,make:oA};function sA(e,n){var t={},r=new Ie.Parser(e,n);return t.version=r.parseVersion(),t.ascender=r.parseShort(),t.descender=r.parseShort(),t.lineGap=r.parseShort(),t.advanceWidthMax=r.parseUShort(),t.minLeftSideBearing=r.parseShort(),t.minRightSideBearing=r.parseShort(),t.xMaxExtent=r.parseShort(),t.caretSlopeRise=r.parseShort(),t.caretSlopeRun=r.parseShort(),t.caretOffset=r.parseShort(),r.relativeOffset+=8,t.metricDataFormat=r.parseShort(),t.numberOfHMetrics=r.parseUShort(),t}function lA(e){return new Re.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],e)}var Gd={parse:sA,make:lA};function cA(e,n,t,r,i){for(var a,o,s=new Ie.Parser(e,n),l=0;l<r;l+=1){l<t&&(a=s.parseUShort(),o=s.parseShort());var c=i.get(l);c.advanceWidth=a,c.leftSideBearing=o}}function uA(e,n,t,r,i){e._hmtxTableData={};for(var a,o,s=new Ie.Parser(n,t),l=0;l<i;l+=1)l<r&&(a=s.parseUShort(),o=s.parseShort()),e._hmtxTableData[l]={advanceWidth:a,leftSideBearing:o}}function fA(e,n,t,r,i,a,o){o.lowMemory?uA(e,n,t,r,i):cA(n,t,r,i,a)}function dA(e){for(var n=new Re.Table("hmtx",[]),t=0;t<e.length;t+=1){var r=e.get(t),i=r.advanceWidth||0,a=r.leftSideBearing||0;n.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:i}),n.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:a})}return n}var Bd={parse:fA,make:dA};function pA(e){for(var n=new Re.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:e.length}]),t="",r=12+e.length*4,i=0;i<e.length;++i){var a=t.indexOf(e[i]);a<0&&(a=t.length,t+=e[i]),n.fields.push({name:"offset "+i,type:"USHORT",value:r+a}),n.fields.push({name:"length "+i,type:"USHORT",value:e[i].length})}return n.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),n}function hA(e,n){var t=new Ie.Parser(e,n),r=t.parseULong();Ge.argument(r===1,"Unsupported ltag table version."),t.skip("uLong",1);for(var i=t.parseULong(),a=[],o=0;o<i;o++){for(var s="",l=n+t.parseUShort(),c=t.parseUShort(),u=l;u<l+c;++u)s+=String.fromCharCode(e.getInt8(u));a.push(s)}return a}var kd={make:pA,parse:hA};function mA(e,n){var t={},r=new Ie.Parser(e,n);return t.version=r.parseVersion(),t.numGlyphs=r.parseUShort(),t.version===1&&(t.maxPoints=r.parseUShort(),t.maxContours=r.parseUShort(),t.maxCompositePoints=r.parseUShort(),t.maxCompositeContours=r.parseUShort(),t.maxZones=r.parseUShort(),t.maxTwilightPoints=r.parseUShort(),t.maxStorage=r.parseUShort(),t.maxFunctionDefs=r.parseUShort(),t.maxInstructionDefs=r.parseUShort(),t.maxStackElements=r.parseUShort(),t.maxSizeOfInstructions=r.parseUShort(),t.maxComponentElements=r.parseUShort(),t.maxComponentDepth=r.parseUShort()),t}function _A(e){return new Re.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:e}])}var Wd={parse:mA,make:_A},zd=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],Vd={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},gA={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Xd={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function vA(e,n,t){switch(e){case 0:if(n===65535)return"und";if(t)return t[n];break;case 1:return Vd[n];case 3:return Xd[n]}}var zs="utf-16",EA={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},TA={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function Kd(e,n,t){switch(e){case 0:return zs;case 1:return TA[t]||EA[n];case 3:if(n===1||n===10)return zs;break}}function SA(e,n,t){for(var r={},i=new Ie.Parser(e,n),a=i.parseUShort(),o=i.parseUShort(),s=i.offset+i.parseUShort(),l=0;l<o;l++){var c=i.parseUShort(),u=i.parseUShort(),f=i.parseUShort(),d=i.parseUShort(),p=zd[d]||d,_=i.parseUShort(),g=i.parseUShort(),m=vA(c,f,t),h=Kd(c,u,f);if(h!==void 0&&m!==void 0){var T=void 0;if(h===zs?T=Ci.UTF16(e,s+g,_):T=Ci.MACSTRING(e,s+g,_,h),T){var v=r[p];v===void 0&&(v=r[p]={}),v[m]=T}}}return a===1&&i.parseUShort(),r}function cs(e){var n={};for(var t in e)n[e[t]]=parseInt(t);return n}function _u(e,n,t,r,i,a){return new Re.Record("NameRecord",[{name:"platformID",type:"USHORT",value:e},{name:"encodingID",type:"USHORT",value:n},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:r},{name:"length",type:"USHORT",value:i},{name:"offset",type:"USHORT",value:a}])}function RA(e,n){var t=e.length,r=n.length-t+1;e:for(var i=0;i<r;i++)for(;i<r;i++){for(var a=0;a<t;a++)if(n[i+a]!==e[a])continue e;return i}return-1}function gu(e,n){var t=RA(e,n);if(t<0){t=n.length;for(var r=0,i=e.length;r<i;++r)n.push(e[r])}return t}function AA(e,n){var t,r=[],i={},a=cs(zd);for(var o in e){var s=a[o];if(s===void 0&&(s=o),t=parseInt(s),isNaN(t))throw new Error('Name table entry "'+o+'" does not exist, see nameTableNames for complete list.');i[t]=e[o],r.push(t)}for(var l=cs(Vd),c=cs(Xd),u=[],f=[],d=0;d<r.length;d++){t=r[d];var p=i[t];for(var _ in p){var g=p[_],m=1,h=l[_],T=gA[h],v=Kd(m,T,h),E=he.MACSTRING(g,v);E===void 0&&(m=0,h=n.indexOf(_),h<0&&(h=n.length,n.push(_)),T=4,E=he.UTF16(g));var L=gu(E,f);u.push(_u(m,T,h,t,E.length,L));var I=c[_];if(I!==void 0){var x=he.UTF16(g),b=gu(x,f);u.push(_u(3,1,I,t,x.length,b))}}}u.sort(function(C,H){return C.platformID-H.platformID||C.encodingID-H.encodingID||C.languageID-H.languageID||C.nameID-H.nameID});for(var A=new Re.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:u.length},{name:"stringOffset",type:"USHORT",value:6+u.length*12}]),S=0;S<u.length;S++)A.fields.push({name:"record_"+S,type:"RECORD",value:u[S]});return A.fields.push({name:"strings",type:"LITERAL",value:f}),A}var Yd={parse:SA,make:AA},Vs=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function yA(e){for(var n=0;n<Vs.length;n+=1){var t=Vs[n];if(e>=t.begin&&e<t.end)return n}return-1}function LA(e,n){var t={},r=new Ie.Parser(e,n);t.version=r.parseUShort(),t.xAvgCharWidth=r.parseShort(),t.usWeightClass=r.parseUShort(),t.usWidthClass=r.parseUShort(),t.fsType=r.parseUShort(),t.ySubscriptXSize=r.parseShort(),t.ySubscriptYSize=r.parseShort(),t.ySubscriptXOffset=r.parseShort(),t.ySubscriptYOffset=r.parseShort(),t.ySuperscriptXSize=r.parseShort(),t.ySuperscriptYSize=r.parseShort(),t.ySuperscriptXOffset=r.parseShort(),t.ySuperscriptYOffset=r.parseShort(),t.yStrikeoutSize=r.parseShort(),t.yStrikeoutPosition=r.parseShort(),t.sFamilyClass=r.parseShort(),t.panose=[];for(var i=0;i<10;i++)t.panose[i]=r.parseByte();return t.ulUnicodeRange1=r.parseULong(),t.ulUnicodeRange2=r.parseULong(),t.ulUnicodeRange3=r.parseULong(),t.ulUnicodeRange4=r.parseULong(),t.achVendID=String.fromCharCode(r.parseByte(),r.parseByte(),r.parseByte(),r.parseByte()),t.fsSelection=r.parseUShort(),t.usFirstCharIndex=r.parseUShort(),t.usLastCharIndex=r.parseUShort(),t.sTypoAscender=r.parseShort(),t.sTypoDescender=r.parseShort(),t.sTypoLineGap=r.parseShort(),t.usWinAscent=r.parseUShort(),t.usWinDescent=r.parseUShort(),t.version>=1&&(t.ulCodePageRange1=r.parseULong(),t.ulCodePageRange2=r.parseULong()),t.version>=2&&(t.sxHeight=r.parseShort(),t.sCapHeight=r.parseShort(),t.usDefaultChar=r.parseUShort(),t.usBreakChar=r.parseUShort(),t.usMaxContent=r.parseUShort()),t}function xA(e){return new Re.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],e)}var Xs={parse:LA,make:xA,unicodeRanges:Vs,getUnicodeRange:yA};function MA(e,n){var t={},r=new Ie.Parser(e,n);switch(t.version=r.parseVersion(),t.italicAngle=r.parseFixed(),t.underlinePosition=r.parseShort(),t.underlineThickness=r.parseShort(),t.isFixedPitch=r.parseULong(),t.minMemType42=r.parseULong(),t.maxMemType42=r.parseULong(),t.minMemType1=r.parseULong(),t.maxMemType1=r.parseULong(),t.version){case 1:t.names=Br.slice();break;case 2:t.numberOfGlyphs=r.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(var i=0;i<t.numberOfGlyphs;i++)t.glyphNameIndex[i]=r.parseUShort();t.names=[];for(var a=0;a<t.numberOfGlyphs;a++)if(t.glyphNameIndex[a]>=Br.length){var o=r.parseChar();t.names.push(r.parseString(o))}break;case 2.5:t.numberOfGlyphs=r.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(var s=0;s<t.numberOfGlyphs;s++)t.offset[s]=r.parseChar();break}return t}function IA(){return new Re.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var qd={parse:MA,make:IA},Ht=new Array(9);Ht[1]=function(){var n=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(B.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(B.coverage),substitute:this.parseOffset16List()};Ge.assert(!1,"0x"+n.toString(16)+": lookup type 1 format must be 1 or 2.")};Ht[2]=function(){var n=this.parseUShort();return Ge.argument(n===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:n,coverage:this.parsePointer(B.coverage),sequences:this.parseListOfLists()}};Ht[3]=function(){var n=this.parseUShort();return Ge.argument(n===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:n,coverage:this.parsePointer(B.coverage),alternateSets:this.parseListOfLists()}};Ht[4]=function(){var n=this.parseUShort();return Ge.argument(n===1,"GSUB ligature table identifier-format must be 1"),{substFormat:n,coverage:this.parsePointer(B.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var gi={sequenceIndex:B.uShort,lookupListIndex:B.uShort};Ht[5]=function(){var n=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(B.coverage),ruleSets:this.parseListOfLists(function(){var a=this.parseUShort(),o=this.parseUShort();return{input:this.parseUShortList(a-1),lookupRecords:this.parseRecordList(o,gi)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(B.coverage),classDef:this.parsePointer(B.classDef),classSets:this.parseListOfLists(function(){var a=this.parseUShort(),o=this.parseUShort();return{classes:this.parseUShortList(a-1),lookupRecords:this.parseRecordList(o,gi)}})};if(t===3){var r=this.parseUShort(),i=this.parseUShort();return{substFormat:t,coverages:this.parseList(r,B.pointer(B.coverage)),lookupRecords:this.parseRecordList(i,gi)}}Ge.assert(!1,"0x"+n.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};Ht[6]=function(){var n=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(B.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(gi)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(B.coverage),backtrackClassDef:this.parsePointer(B.classDef),inputClassDef:this.parsePointer(B.classDef),lookaheadClassDef:this.parsePointer(B.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(gi)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(B.pointer(B.coverage)),inputCoverage:this.parseList(B.pointer(B.coverage)),lookaheadCoverage:this.parseList(B.pointer(B.coverage)),lookupRecords:this.parseRecordList(gi)};Ge.assert(!1,"0x"+n.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};Ht[7]=function(){var n=this.parseUShort();Ge.argument(n===1,"GSUB Extension Substitution subtable identifier-format must be 1");var t=this.parseUShort(),r=new B(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:Ht[t].call(r)}};Ht[8]=function(){var n=this.parseUShort();return Ge.argument(n===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:n,coverage:this.parsePointer(B.coverage),backtrackCoverage:this.parseList(B.pointer(B.coverage)),lookaheadCoverage:this.parseList(B.pointer(B.coverage)),substitutes:this.parseUShortList()}};function bA(e,n){n=n||0;var t=new B(e,n),r=t.parseVersion(1);return Ge.argument(r===1||r===1.1,"Unsupported GSUB table version."),r===1?{version:r,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(Ht)}:{version:r,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(Ht),variations:t.parseFeatureVariationsList()}}var wi=new Array(9);wi[1]=function(n){return n.substFormat===1?new Re.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Re.Coverage(n.coverage)},{name:"deltaGlyphID",type:"USHORT",value:n.deltaGlyphId}]):new Re.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new Re.Coverage(n.coverage)}].concat(Re.ushortList("substitute",n.substitute)))};wi[2]=function(n){return Ge.assert(n.substFormat===1,"Lookup type 2 substFormat must be 1."),new Re.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Re.Coverage(n.coverage)}].concat(Re.tableList("seqSet",n.sequences,function(t){return new Re.Table("sequenceSetTable",Re.ushortList("sequence",t))})))};wi[3]=function(n){return Ge.assert(n.substFormat===1,"Lookup type 3 substFormat must be 1."),new Re.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Re.Coverage(n.coverage)}].concat(Re.tableList("altSet",n.alternateSets,function(t){return new Re.Table("alternateSetTable",Re.ushortList("alternate",t))})))};wi[4]=function(n){return Ge.assert(n.substFormat===1,"Lookup type 4 substFormat must be 1."),new Re.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new Re.Coverage(n.coverage)}].concat(Re.tableList("ligSet",n.ligatureSets,function(t){return new Re.Table("ligatureSetTable",Re.tableList("ligature",t,function(r){return new Re.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:r.ligGlyph}].concat(Re.ushortList("component",r.components,r.components.length+1)))}))})))};wi[6]=function(n){if(n.substFormat===1){var t=new Re.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:n.substFormat},{name:"coverage",type:"TABLE",value:new Re.Coverage(n.coverage)}].concat(Re.tableList("chainRuleSet",n.chainRuleSets,function(a){return new Re.Table("chainRuleSetTable",Re.tableList("chainRule",a,function(o){var s=Re.ushortList("backtrackGlyph",o.backtrack,o.backtrack.length).concat(Re.ushortList("inputGlyph",o.input,o.input.length+1)).concat(Re.ushortList("lookaheadGlyph",o.lookahead,o.lookahead.length)).concat(Re.ushortList("substitution",[],o.lookupRecords.length));return o.lookupRecords.forEach(function(l,c){s=s.concat({name:"sequenceIndex"+c,type:"USHORT",value:l.sequenceIndex}).concat({name:"lookupListIndex"+c,type:"USHORT",value:l.lookupListIndex})}),new Re.Table("chainRuleTable",s)}))})));return t}else if(n.substFormat===2)Ge.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(n.substFormat===3){var r=[{name:"substFormat",type:"USHORT",value:n.substFormat}];r.push({name:"backtrackGlyphCount",type:"USHORT",value:n.backtrackCoverage.length}),n.backtrackCoverage.forEach(function(a,o){r.push({name:"backtrackCoverage"+o,type:"TABLE",value:new Re.Coverage(a)})}),r.push({name:"inputGlyphCount",type:"USHORT",value:n.inputCoverage.length}),n.inputCoverage.forEach(function(a,o){r.push({name:"inputCoverage"+o,type:"TABLE",value:new Re.Coverage(a)})}),r.push({name:"lookaheadGlyphCount",type:"USHORT",value:n.lookaheadCoverage.length}),n.lookaheadCoverage.forEach(function(a,o){r.push({name:"lookaheadCoverage"+o,type:"TABLE",value:new Re.Coverage(a)})}),r.push({name:"substitutionCount",type:"USHORT",value:n.lookupRecords.length}),n.lookupRecords.forEach(function(a,o){r=r.concat({name:"sequenceIndex"+o,type:"USHORT",value:a.sequenceIndex}).concat({name:"lookupListIndex"+o,type:"USHORT",value:a.lookupListIndex})});var i=new Re.Table("chainContextTable",r);return i}Ge.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function OA(e){return new Re.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Re.ScriptList(e.scripts)},{name:"features",type:"TABLE",value:new Re.FeatureList(e.features)},{name:"lookups",type:"TABLE",value:new Re.LookupList(e.lookups,wi)}])}var jd={parse:bA,make:OA};function CA(e,n){var t=new Ie.Parser(e,n),r=t.parseULong();Ge.argument(r===1,"Unsupported META table version."),t.parseULong(),t.parseULong();for(var i=t.parseULong(),a={},o=0;o<i;o++){var s=t.parseTag(),l=t.parseULong(),c=t.parseULong(),u=Ci.UTF8(e,n+l,c);a[s]=u}return a}function PA(e){var n=Object.keys(e).length,t="",r=16+n*12,i=new Re.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:r},{name:"numTags",type:"ULONG",value:n}]);for(var a in e){var o=t.length;t+=e[a],i.fields.push({name:"tag "+a,type:"TAG",value:a}),i.fields.push({name:"offset "+a,type:"ULONG",value:r+o}),i.fields.push({name:"length "+a,type:"ULONG",value:e[a].length})}return i.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),i}var Zd={parse:CA,make:PA};function NA(e,n){var t=new B(e,n),r=t.parseUShort();Ge.argument(r===0,"Only COLRv0 supported.");var i=t.parseUShort(),a=t.parseOffset32(),o=t.parseOffset32(),s=t.parseUShort();t.relativeOffset=a;var l=t.parseRecordList(i,{glyphID:B.uShort,firstLayerIndex:B.uShort,numLayers:B.uShort});t.relativeOffset=o;var c=t.parseRecordList(s,{glyphID:B.uShort,paletteIndex:B.uShort});return{version:r,baseGlyphRecords:l,layerRecords:c}}function wA(e){var n=e.version;n===void 0&&(n=0);var t=e.baseGlyphRecords;t===void 0&&(t=[]);var r=e.layerRecords;r===void 0&&(r=[]),Ge.argument(n===0,"Only COLRv0 supported.");var i=14,a=i+t.length*6;return new Re.Table("COLR",[{name:"version",type:"USHORT",value:n},{name:"numBaseGlyphRecords",type:"USHORT",value:t.length},{name:"baseGlyphRecordsOffset",type:"ULONG",value:i},{name:"layerRecordsOffset",type:"ULONG",value:a},{name:"numLayerRecords",type:"USHORT",value:r.length}].concat(t.map(function(o,s){return[{name:"glyphID_"+s,type:"USHORT",value:o.glyphID},{name:"firstLayerIndex_"+s,type:"USHORT",value:o.firstLayerIndex},{name:"numLayers_"+s,type:"USHORT",value:o.numLayers}]}).flat(),r.map(function(o,s){return[{name:"LayerGlyphID_"+s,type:"USHORT",value:o.glyphID},{name:"paletteIndex_"+s,type:"USHORT",value:o.paletteIndex}]}).flat()))}var Jd={parse:NA,make:wA};function FA(e,n){var t=new B(e,n),r=t.parseShort(),i=t.parseShort(),a=t.parseShort(),o=t.parseShort(),s=t.parseOffset32(),l=t.parseUShortList(a);t.relativeOffset=s;var c=t.parseULongList(o);return{version:r,numPaletteEntries:i,colorRecords:c,colorRecordIndices:l}}function DA(e){var n=e.version;n===void 0&&(n=0);var t=e.numPaletteEntries;t===void 0&&(t=0);var r=e.colorRecords;r===void 0&&(r=[]);var i=e.colorRecordIndices;return i===void 0&&(i=[0]),Ge.argument(n===0,"Only CPALv0 are supported."),Ge.argument(r.length,"No colorRecords given."),Ge.argument(i.length,"No colorRecordIndices given."),Ge.argument(!t&&i.length==1,"Can't infer numPaletteEntries on multiple colorRecordIndices"),new Re.Table("CPAL",[{name:"version",type:"USHORT",value:n},{name:"numPaletteEntries",type:"USHORT",value:t||r.length},{name:"numPalettes",type:"USHORT",value:i.length},{name:"numColorRecords",type:"USHORT",value:r.length},{name:"colorRecordsArrayOffset",type:"ULONG",value:12+2*i.length}].concat(i.map(function(a,o){return{name:"colorRecordIndices_"+o,type:"USHORT",value:a}}),r.map(function(a,o){return{name:"colorRecords_"+o,type:"ULONG",value:a}})))}var $d={parse:FA,make:DA};function vu(e){return Math.log(e)/Math.log(2)|0}function vl(e){for(;e.length%4!==0;)e.push(0);for(var n=0,t=0;t<e.length;t+=4)n+=(e[t]<<24)+(e[t+1]<<16)+(e[t+2]<<8)+e[t+3];return n%=Math.pow(2,32),n}function Eu(e,n,t,r){return new Re.Record("Table Record",[{name:"tag",type:"TAG",value:e!==void 0?e:""},{name:"checkSum",type:"ULONG",value:n!==void 0?n:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:r!==void 0?r:0}])}function Qd(e){var n=new Re.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);n.tables=e,n.numTables=e.length;var t=Math.pow(2,vu(n.numTables));n.searchRange=16*t,n.entrySelector=vu(t),n.rangeShift=n.numTables*16-n.searchRange;for(var r=[],i=[],a=n.sizeOf()+Eu().sizeOf()*n.numTables;a%4!==0;)a+=1,i.push({name:"padding",type:"BYTE",value:0});for(var o=0;o<e.length;o+=1){var s=e[o];Ge.argument(s.tableName.length===4,"Table name"+s.tableName+" is invalid.");var l=s.sizeOf(),c=Eu(s.tableName,vl(s.encode()),a,l);for(r.push({name:c.tag+" Table Record",type:"RECORD",value:c}),i.push({name:s.tableName+" table",type:"RECORD",value:s}),a+=l,Ge.argument(!isNaN(a),"Something went wrong calculating the offset.");a%4!==0;)a+=1,i.push({name:"padding",type:"BYTE",value:0})}return r.sort(function(u,f){return u.value.tag>f.value.tag?1:-1}),n.fields=n.fields.concat(r),n.fields=n.fields.concat(i),n}function Tu(e,n,t){for(var r=0;r<n.length;r+=1){var i=e.charToGlyphIndex(n[r]);if(i>0){var a=e.glyphs.get(i);return a.getMetrics()}}return t}function UA(e){for(var n=0,t=0;t<e.length;t+=1)n+=e[t];return n/e.length}function HA(e){for(var n=[],t=[],r=[],i=[],a=[],o=[],s=[],l,c=0,u=0,f=0,d=0,p=0,_=0;_<e.glyphs.length;_+=1){var g=e.glyphs.get(_),m=g.unicode|0;if(isNaN(g.advanceWidth))throw new Error("Glyph "+g.name+" ("+_+"): advanceWidth is not a number.");(l>m||l===void 0)&&m>0&&(l=m),c<m&&(c=m);var h=Xs.getUnicodeRange(m);if(h<32)u|=1<<h;else if(h<64)f|=1<<h-32;else if(h<96)d|=1<<h-64;else if(h<123)p|=1<<h-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(g.name!==".notdef"){var T=g.getMetrics();n.push(T.xMin),t.push(T.yMin),r.push(T.xMax),i.push(T.yMax),o.push(T.leftSideBearing),s.push(T.rightSideBearing),a.push(g.advanceWidth)}}var v={xMin:Math.min.apply(null,n),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,r),yMax:Math.max.apply(null,i),advanceWidthMax:Math.max.apply(null,a),advanceWidthAvg:UA(a),minLeftSideBearing:Math.min.apply(null,o),maxLeftSideBearing:Math.max.apply(null,o),minRightSideBearing:Math.min.apply(null,s)};v.ascender=e.ascender,v.descender=e.descender;var E=Hd.make({flags:3,unitsPerEm:e.unitsPerEm,xMin:v.xMin,yMin:v.yMin,xMax:v.xMax,yMax:v.yMax,lowestRecPPEM:3,createdTimestamp:e.createdTimestamp}),L=Gd.make({ascender:v.ascender,descender:v.descender,advanceWidthMax:v.advanceWidthMax,minLeftSideBearing:v.minLeftSideBearing,minRightSideBearing:v.minRightSideBearing,xMaxExtent:v.maxLeftSideBearing+(v.xMax-v.xMin),numberOfHMetrics:e.glyphs.length}),I=Wd.make(e.glyphs.length),x=Xs.make(Object.assign({xAvgCharWidth:Math.round(v.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:u,ulUnicodeRange2:f,ulUnicodeRange3:d,ulUnicodeRange4:p,sTypoAscender:v.ascender,sTypoDescender:v.descender,sTypoLineGap:0,usWinAscent:v.yMax,usWinDescent:Math.abs(v.yMin),ulCodePageRange1:1,sxHeight:Tu(e,"xyvw",{yMax:Math.round(v.ascender/2)}).yMax,sCapHeight:Tu(e,"HIKLEFJMNTZBDPRAGOQSUVWXY",v).yMax,usDefaultChar:e.hasChar(" ")?32:0,usBreakChar:e.hasChar(" ")?32:0},e.tables.os2)),b=Bd.make(e.glyphs),A=xd.make(e.glyphs),S=e.getEnglishName("fontFamily"),C=e.getEnglishName("fontSubfamily"),H=S+" "+C,G=e.getEnglishName("postScriptName");G||(G=S.replace(/\s/g,"")+"-"+C);var V={};for(var q in e.names)V[q]=e.names[q];V.uniqueID||(V.uniqueID={en:e.getEnglishName("manufacturer")+":"+H}),V.postScriptName||(V.postScriptName={en:G}),V.preferredFamily||(V.preferredFamily=e.names.fontFamily),V.preferredSubfamily||(V.preferredSubfamily=e.names.fontSubfamily);var k=[],ee=Yd.make(V,k),X=k.length>0?kd.make(k):void 0,le=qd.make(),me=Ud.make(e.glyphs,{version:e.getEnglishName("version"),fullName:H,familyName:S,weightName:C,postScriptName:G,unitsPerEm:e.unitsPerEm,fontBBox:[0,v.yMin,v.ascender,v.advanceWidthMax]}),_e=e.metas&&Object.keys(e.metas).length>0?Zd.make(e.metas):void 0,we=[E,L,I,x,ee,A,le,me,b];X&&we.push(X),e.tables.gsub&&we.push(jd.make(e.tables.gsub)),e.tables.cpal&&we.push($d.make(e.tables.cpal)),e.tables.colr&&we.push(Jd.make(e.tables.colr)),_e&&we.push(_e);for(var de=Qd(we),D=de.encode(),ie=vl(D),ge=de.fields,oe=!1,Pe=0;Pe<ge.length;Pe+=1)if(ge[Pe].name==="head table"){ge[Pe].value.checkSumAdjustment=2981146554-ie,oe=!0;break}if(!oe)throw new Error("Could not find head table with checkSum to adjust.");return de}var GA={make:Qd,fontToTable:HA,computeCheckSum:vl};function us(e,n){for(var t=0,r=e.length-1;t<=r;){var i=t+r>>>1,a=e[i].tag;if(a===n)return i;a<n?t=i+1:r=i-1}return-t-1}function Su(e,n){for(var t=0,r=e.length-1;t<=r;){var i=t+r>>>1,a=e[i];if(a===n)return i;a<n?t=i+1:r=i-1}return-t-1}function Ru(e,n){for(var t,r=0,i=e.length-1;r<=i;){var a=r+i>>>1;t=e[a];var o=t.start;if(o===n)return t;o<n?r=a+1:i=a-1}if(r>0)return t=e[r-1],n>t.end?0:t}function ga(e,n){this.font=e,this.tableName=n}ga.prototype={searchTag:us,binSearch:Su,getTable:function(e){var n=this.font.tables[this.tableName];return!n&&e&&(n=this.font.tables[this.tableName]=this.createDefaultTable()),n},getScriptNames:function(){var e=this.getTable();return e?e.scripts.map(function(n){return n.tag}):[]},getDefaultScriptName:function(){var e=this.getTable();if(e){for(var n=!1,t=0;t<e.scripts.length;t++){var r=e.scripts[t].tag;if(r==="DFLT")return r;r==="latn"&&(n=!0)}if(n)return"latn"}},getScriptTable:function(e,n){var t=this.getTable(n);if(t){e=e||"DFLT";var r=t.scripts,i=us(t.scripts,e);if(i>=0)return r[i].script;if(n){var a={tag:e,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return r.splice(-1-i,0,a),a.script}}},getLangSysTable:function(e,n,t){var r=this.getScriptTable(e,t);if(r){if(!n||n==="dflt"||n==="DFLT")return r.defaultLangSys;var i=us(r.langSysRecords,n);if(i>=0)return r.langSysRecords[i].langSys;if(t){var a={tag:n,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return r.langSysRecords.splice(-1-i,0,a),a.langSys}}},getFeatureTable:function(e,n,t,r){var i=this.getLangSysTable(e,n,r);if(i){for(var a,o=i.featureIndexes,s=this.font.tables[this.tableName].features,l=0;l<o.length;l++)if(a=s[o[l]],a.tag===t)return a.feature;if(r){var c=s.length;return Ge.assert(c===0||t>=s[c-1].tag,"Features must be added in alphabetical order."),a={tag:t,feature:{params:0,lookupListIndexes:[]}},s.push(a),o.push(c),a.feature}}},getLookupTables:function(e,n,t,r,i){var a=this.getFeatureTable(e,n,t,i),o=[];if(a){for(var s,l=a.lookupListIndexes,c=this.font.tables[this.tableName].lookups,u=0;u<l.length;u++)s=c[l[u]],s.lookupType===r&&o.push(s);if(o.length===0&&i){s={lookupType:r,lookupFlag:0,subtables:[],markFilteringSet:void 0};var f=c.length;return c.push(s),l.push(f),[s]}}return o},getGlyphClass:function(e,n){switch(e.format){case 1:return e.startGlyph<=n&&n<e.startGlyph+e.classes.length?e.classes[n-e.startGlyph]:0;case 2:var t=Ru(e.ranges,n);return t?t.classId:0}},getCoverageIndex:function(e,n){switch(e.format){case 1:var t=Su(e.glyphs,n);return t>=0?t:-1;case 2:var r=Ru(e.ranges,n);return r?r.index+n-r.start:-1}},expandCoverage:function(e){if(e.format===1)return e.glyphs;for(var n=[],t=e.ranges,r=0;r<t.length;r++)for(var i=t[r],a=i.start,o=i.end,s=a;s<=o;s++)n.push(s);return n}};function va(e){ga.call(this,e,"gpos")}va.prototype=ga.prototype;va.prototype.init=function(){var e=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(e)};va.prototype.getKerningValue=function(e,n,t){for(var r=0;r<e.length;r++)for(var i=e[r].subtables,a=0;a<i.length;a++){var o=i[a],s=this.getCoverageIndex(o.coverage,n);if(!(s<0))switch(o.posFormat){case 1:for(var l=o.pairSets[s],c=0;c<l.length;c++){var u=l[c];if(u.secondGlyph===t)return u.value1&&u.value1.xAdvance||0}break;case 2:var f=this.getGlyphClass(o.classDef1,n),d=this.getGlyphClass(o.classDef2,t),p=o.classRecords[f][d];return p.value1&&p.value1.xAdvance||0}}return 0};va.prototype.getKerningTables=function(e,n){if(this.font.tables.gpos)return this.getLookupTables(e,n,"kern",2)};function At(e){ga.call(this,e,"gsub")}function BA(e,n){var t=e.length;if(t!==n.length)return!1;for(var r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function El(e,n,t){for(var r=e.subtables,i=0;i<r.length;i++){var a=r[i];if(a.substFormat===n)return a}if(t)return r.push(t),t}At.prototype=ga.prototype;At.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};At.prototype.getSingle=function(e,n,t){for(var r=[],i=this.getLookupTables(n,t,e,1),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++){var l=o[s],c=this.expandCoverage(l.coverage),u=void 0;if(l.substFormat===1){var f=l.deltaGlyphId;for(u=0;u<c.length;u++){var d=c[u];r.push({sub:d,by:d+f})}}else{var p=l.substitute;for(u=0;u<c.length;u++)r.push({sub:c[u],by:p[u]})}}return r};At.prototype.getMultiple=function(e,n,t){for(var r=[],i=this.getLookupTables(n,t,e,2),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++){var l=o[s],c=this.expandCoverage(l.coverage),u=void 0;for(u=0;u<c.length;u++){var f=c[u],d=l.sequences[u];r.push({sub:f,by:d})}}return r};At.prototype.getAlternates=function(e,n,t){for(var r=[],i=this.getLookupTables(n,t,e,3),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++)for(var l=o[s],c=this.expandCoverage(l.coverage),u=l.alternateSets,f=0;f<c.length;f++)r.push({sub:c[f],by:u[f]});return r};At.prototype.getLigatures=function(e,n,t){for(var r=[],i=this.getLookupTables(n,t,e,4),a=0;a<i.length;a++)for(var o=i[a].subtables,s=0;s<o.length;s++)for(var l=o[s],c=this.expandCoverage(l.coverage),u=l.ligatureSets,f=0;f<c.length;f++)for(var d=c[f],p=u[f],_=0;_<p.length;_++){var g=p[_];r.push({sub:[d].concat(g.components),by:g.ligGlyph})}return r};At.prototype.addSingle=function(e,n,t,r){var i=this.getLookupTables(t,r,e,1,!0)[0],a=El(i,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Ge.assert(a.coverage.format===1,"Single: unable to modify coverage table format "+a.coverage.format);var o=n.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.substitute.splice(s,0,0)),a.substitute[s]=n.by};At.prototype.addMultiple=function(e,n,t,r){Ge.assert(n.by instanceof Array&&n.by.length>1,'Multiple: "by" must be an array of two or more ids');var i=this.getLookupTables(t,r,e,2,!0)[0],a=El(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Ge.assert(a.coverage.format===1,"Multiple: unable to modify coverage table format "+a.coverage.format);var o=n.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.sequences.splice(s,0,0)),a.sequences[s]=n.by};At.prototype.addAlternate=function(e,n,t,r){var i=this.getLookupTables(t,r,e,3,!0)[0],a=El(i,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Ge.assert(a.coverage.format===1,"Alternate: unable to modify coverage table format "+a.coverage.format);var o=n.sub,s=this.binSearch(a.coverage.glyphs,o);s<0&&(s=-1-s,a.coverage.glyphs.splice(s,0,o),a.alternateSets.splice(s,0,0)),a.alternateSets[s]=n.by};At.prototype.addLigature=function(e,n,t,r){var i=this.getLookupTables(t,r,e,4,!0)[0],a=i.subtables[0];a||(a={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},i.subtables[0]=a),Ge.assert(a.coverage.format===1,"Ligature: unable to modify coverage table format "+a.coverage.format);var o=n.sub[0],s=n.sub.slice(1),l={ligGlyph:n.by,components:s},c=this.binSearch(a.coverage.glyphs,o);if(c>=0){for(var u=a.ligatureSets[c],f=0;f<u.length;f++)if(BA(u[f].components,s))return;u.push(l)}else c=-1-c,a.coverage.glyphs.splice(c,0,o),a.ligatureSets.splice(c,0,[l])};At.prototype.getFeature=function(e,n,t){if(/ss\d\d/.test(e))return this.getSingle(e,n,t);switch(e){case"aalt":case"salt":return this.getSingle(e,n,t).concat(this.getAlternates(e,n,t));case"dlig":case"liga":case"rlig":return this.getLigatures(e,n,t);case"ccmp":return this.getMultiple(e,n,t).concat(this.getLigatures(e,n,t));case"stch":return this.getMultiple(e,n,t)}};At.prototype.add=function(e,n,t,r){if(/ss\d\d/.test(e))return this.addSingle(e,n,t,r);switch(e){case"aalt":case"salt":return typeof n.by=="number"?this.addSingle(e,n,t,r):this.addAlternate(e,n,t,r);case"dlig":case"liga":case"rlig":return this.addLigature(e,n,t,r);case"ccmp":return n.by instanceof Array?this.addMultiple(e,n,t,r):this.addLigature(e,n,t,r)}};function ki(e,n){if(!e)throw n}function Au(e,n,t,r,i){var a;return(n&r)>0?(a=e.parseByte(),n&i||(a=-a),a=t+a):(n&i)>0?a=t:a=t+e.parseShort(),a}function ep(e,n,t){var r=new Ie.Parser(n,t);e.numberOfContours=r.parseShort(),e._xMin=r.parseShort(),e._yMin=r.parseShort(),e._xMax=r.parseShort(),e._yMax=r.parseShort();var i,a;if(e.numberOfContours>0){for(var o=e.endPointIndices=[],s=0;s<e.numberOfContours;s+=1)o.push(r.parseUShort());e.instructionLength=r.parseUShort(),e.instructions=[];for(var l=0;l<e.instructionLength;l+=1)e.instructions.push(r.parseByte());var c=o[o.length-1]+1;i=[];for(var u=0;u<c;u+=1)if(a=r.parseByte(),i.push(a),(a&8)>0)for(var f=r.parseByte(),d=0;d<f;d+=1)i.push(a),u+=1;if(Ge.argument(i.length===c,"Bad flags."),o.length>0){var p=[],_;if(c>0){for(var g=0;g<c;g+=1)a=i[g],_={},_.onCurve=!!(a&1),_.lastPointOfContour=o.indexOf(g)>=0,p.push(_);for(var m=0,h=0;h<c;h+=1)a=i[h],_=p[h],_.x=Au(r,a,m,2,16),m=_.x;for(var T=0,v=0;v<c;v+=1)a=i[v],_=p[v],_.y=Au(r,a,T,4,32),T=_.y}e.points=p}else e.points=[]}else if(e.numberOfContours===0)e.points=[];else{e.isComposite=!0,e.points=[],e.components=[];for(var E=!0;E;){i=r.parseUShort();var L={glyphIndex:r.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(i&1)>0?(i&2)>0?(L.dx=r.parseShort(),L.dy=r.parseShort()):L.matchedPoints=[r.parseUShort(),r.parseUShort()]:(i&2)>0?(L.dx=r.parseChar(),L.dy=r.parseChar()):L.matchedPoints=[r.parseByte(),r.parseByte()],(i&8)>0?L.xScale=L.yScale=r.parseF2Dot14():(i&64)>0?(L.xScale=r.parseF2Dot14(),L.yScale=r.parseF2Dot14()):(i&128)>0&&(L.xScale=r.parseF2Dot14(),L.scale01=r.parseF2Dot14(),L.scale10=r.parseF2Dot14(),L.yScale=r.parseF2Dot14()),e.components.push(L),E=!!(i&32)}if(i&256){e.instructionLength=r.parseUShort(),e.instructions=[];for(var I=0;I<e.instructionLength;I+=1)e.instructions.push(r.parseByte())}}}function fs(e,n){for(var t=[],r=0;r<e.length;r+=1){var i=e[r],a={x:n.xScale*i.x+n.scale01*i.y+n.dx,y:n.scale10*i.x+n.yScale*i.y+n.dy,onCurve:i.onCurve,lastPointOfContour:i.lastPointOfContour};t.push(a)}return t}function kA(e){for(var n=[],t=[],r=0;r<e.length;r+=1){var i=e[r];t.push(i),i.lastPointOfContour&&(n.push(t),t=[])}return Ge.argument(t.length===0,"There are still points left in the current contour."),n}function np(e){var n=new zn;if(!e)return n;for(var t=kA(e),r=0;r<t.length;++r){var i=t[r],a=null,o=i[i.length-1],s=i[0];if(o.onCurve)n.moveTo(o.x,o.y);else if(s.onCurve)n.moveTo(s.x,s.y);else{var l={x:(o.x+s.x)*.5,y:(o.y+s.y)*.5};n.moveTo(l.x,l.y)}for(var c=0;c<i.length;++c)if(a=o,o=s,s=i[(c+1)%i.length],o.onCurve)n.lineTo(o.x,o.y);else{var u=s;a.onCurve||((o.x+a.x)*.5,(o.y+a.y)*.5),s.onCurve||(u={x:(o.x+s.x)*.5,y:(o.y+s.y)*.5}),n.quadraticCurveTo(o.x,o.y,u.x,u.y)}n.closePath()}return n}function tp(e,n){if(n.isComposite)for(var t=0;t<n.components.length;t+=1){var r=n.components[t],i=e.get(r.glyphIndex);if(i.getPath(),i.points){var a=void 0;if(r.matchedPoints===void 0)a=fs(i.points,r);else{if(r.matchedPoints[0]>n.points.length-1||r.matchedPoints[1]>i.points.length-1)throw Error("Matched points out of range in "+n.name);var o=n.points[r.matchedPoints[0]],s=i.points[r.matchedPoints[1]],l={xScale:r.xScale,scale01:r.scale01,scale10:r.scale10,yScale:r.yScale,dx:0,dy:0};s=fs([s],l)[0],l.dx=o.x-s.x,l.dy=o.y-s.y,a=fs(i.points,l)}n.points=n.points.concat(a)}}return np(n.points)}function WA(e,n,t,r){for(var i=new er.GlyphSet(r),a=0;a<t.length-1;a+=1){var o=t[a],s=t[a+1];o!==s?i.push(a,er.ttfGlyphLoader(r,a,ep,e,n+o,tp)):i.push(a,er.glyphLoader(r,a))}return i}function zA(e,n,t,r){var i=new er.GlyphSet(r);return r._push=function(a){var o=t[a],s=t[a+1];o!==s?i.push(a,er.ttfGlyphLoader(r,a,ep,e,n+o,tp)):i.push(a,er.glyphLoader(r,a))},i}function VA(e,n,t,r,i){return i.lowMemory?zA(e,n,t,r):WA(e,n,t,r)}var rp={getPath:np,parse:VA},ip,ei,ap,Ks;function op(e){this.font=e,this.getCommands=function(n){return rp.getPath(n).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function XA(e){return e}function sp(e){return Math.sign(e)*Math.round(Math.abs(e))}function KA(e){return Math.sign(e)*Math.round(Math.abs(e*2))/2}function YA(e){return Math.sign(e)*(Math.round(Math.abs(e)+.5)-.5)}function qA(e){return Math.sign(e)*Math.ceil(Math.abs(e))}function jA(e){return Math.sign(e)*Math.floor(Math.abs(e))}var lp=function(e){var n=this.srPeriod,t=this.srPhase,r=this.srThreshold,i=1;return e<0&&(e=-e,i=-1),e+=r-t,e=Math.trunc(e/n)*n,e+=t,e<0?t*i:e*i},Jt={x:1,y:0,axis:"x",distance:function(e,n,t,r){return(t?e.xo:e.x)-(r?n.xo:n.x)},interpolate:function(e,n,t,r){var i,a,o,s,l,c,u;if(!r||r===this){if(i=e.xo-n.xo,a=e.xo-t.xo,l=n.x-n.xo,c=t.x-t.xo,o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){e.x=e.xo+(l+c)/2;return}e.x=e.xo+(l*s+c*o)/u;return}if(i=r.distance(e,n,!0,!0),a=r.distance(e,t,!0,!0),l=r.distance(n,n,!1,!0),c=r.distance(t,t,!1,!0),o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){Jt.setRelative(e,e,(l+c)/2,r,!0);return}Jt.setRelative(e,e,(l*s+c*o)/u,r,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(e,n,t,r,i){if(!r||r===this){e.x=(i?n.xo:n.x)+t;return}var a=i?n.xo:n.x,o=i?n.yo:n.y,s=a+t*r.x,l=o+t*r.y;e.x=s+(e.y-l)/r.normalSlope},slope:0,touch:function(e){e.xTouched=!0},touched:function(e){return e.xTouched},untouch:function(e){e.xTouched=!1}},ur={x:0,y:1,axis:"y",distance:function(e,n,t,r){return(t?e.yo:e.y)-(r?n.yo:n.y)},interpolate:function(e,n,t,r){var i,a,o,s,l,c,u;if(!r||r===this){if(i=e.yo-n.yo,a=e.yo-t.yo,l=n.y-n.yo,c=t.y-t.yo,o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){e.y=e.yo+(l+c)/2;return}e.y=e.yo+(l*s+c*o)/u;return}if(i=r.distance(e,n,!0,!0),a=r.distance(e,t,!0,!0),l=r.distance(n,n,!1,!0),c=r.distance(t,t,!1,!0),o=Math.abs(i),s=Math.abs(a),u=o+s,u===0){ur.setRelative(e,e,(l+c)/2,r,!0);return}ur.setRelative(e,e,(l*s+c*o)/u,r,!0)},normalSlope:0,setRelative:function(e,n,t,r,i){if(!r||r===this){e.y=(i?n.yo:n.y)+t;return}var a=i?n.xo:n.x,o=i?n.yo:n.y,s=a+t*r.x,l=o+t*r.y;e.y=l+r.normalSlope*(e.x-s)},slope:Number.POSITIVE_INFINITY,touch:function(e){e.yTouched=!0},touched:function(e){return e.yTouched},untouch:function(e){e.yTouched=!1}};Object.freeze(Jt);Object.freeze(ur);function Ea(e,n){this.x=e,this.y=n,this.axis=void 0,this.slope=n/e,this.normalSlope=-e/n,Object.freeze(this)}Ea.prototype.distance=function(e,n,t,r){return this.x*Jt.distance(e,n,t,r)+this.y*ur.distance(e,n,t,r)};Ea.prototype.interpolate=function(e,n,t,r){var i,a,o,s,l,c,u;if(o=r.distance(e,n,!0,!0),s=r.distance(e,t,!0,!0),i=r.distance(n,n,!1,!0),a=r.distance(t,t,!1,!0),l=Math.abs(o),c=Math.abs(s),u=l+c,u===0){this.setRelative(e,e,(i+a)/2,r,!0);return}this.setRelative(e,e,(i*c+a*l)/u,r,!0)};Ea.prototype.setRelative=function(e,n,t,r,i){r=r||this;var a=i?n.xo:n.x,o=i?n.yo:n.y,s=a+t*r.x,l=o+t*r.y,c=r.normalSlope,u=this.slope,f=e.x,d=e.y;e.x=(u*f-c*s+l-d)/(u-c),e.y=u*(e.x-f)+d};Ea.prototype.touch=function(e){e.xTouched=!0,e.yTouched=!0};function Ta(e,n){var t=Math.sqrt(e*e+n*n);return e/=t,n/=t,e===1&&n===0?Jt:e===0&&n===1?ur:new Ea(e,n)}function fr(e,n,t,r){this.x=this.xo=Math.round(e*64)/64,this.y=this.yo=Math.round(n*64)/64,this.lastPointOfContour=t,this.onCurve=r,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}fr.prototype.nextTouched=function(e){for(var n=this.nextPointOnContour;!e.touched(n)&&n!==this;)n=n.nextPointOnContour;return n};fr.prototype.prevTouched=function(e){for(var n=this.prevPointOnContour;!e.touched(n)&&n!==this;)n=n.prevPointOnContour;return n};var ua=Object.freeze(new fr(0,0)),ZA={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function Rr(e,n){switch(this.env=e,this.stack=[],this.prog=n,e){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=Jt,this.round=sp}}op.prototype.exec=function(e,n){if(typeof n!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var t=this.font,r=this._prepState;if(!r||r.ppem!==n){var i=this._fpgmState;if(!i){Rr.prototype=ZA,i=this._fpgmState=new Rr("fpgm",t.tables.fpgm),i.funcs=[],i.font=t,exports.DEBUG&&(console.log("---EXEC FPGM---"),i.step=-1);try{ei(i)}catch(c){console.log("Hinting error in FPGM:"+c),this._errorState=3;return}}Rr.prototype=i,r=this._prepState=new Rr("prep",t.tables.prep),r.ppem=n;var a=t.tables.cvt;if(a)for(var o=r.cvt=new Array(a.length),s=n/t.unitsPerEm,l=0;l<a.length;l++)o[l]=a[l]*s;else r.cvt=[];exports.DEBUG&&(console.log("---EXEC PREP---"),r.step=-1);try{ei(r)}catch(c){this._errorState<2&&console.log("Hinting error in PREP:"+c),this._errorState=2}}if(!(this._errorState>1))try{return ap(e,r)}catch(c){this._errorState<1&&(console.log("Hinting error:"+c),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};ap=function(e,n){var t=n.ppem/n.font.unitsPerEm,r=t,i=e.components,a,o,s;if(Rr.prototype=n,!i)s=new Rr("glyf",e.instructions),exports.DEBUG&&(console.log("---EXEC GLYPH---"),s.step=-1),Ks(e,s,t,r),o=s.gZone;else{var l=n.font;o=[],a=[];for(var c=0;c<i.length;c++){var u=i[c],f=l.glyphs.get(u.glyphIndex);s=new Rr("glyf",f.instructions),exports.DEBUG&&(console.log("---EXEC COMP "+c+"---"),s.step=-1),Ks(f,s,t,r);for(var d=Math.round(u.dx*t),p=Math.round(u.dy*r),_=s.gZone,g=s.contours,m=0;m<_.length;m++){var h=_[m];h.xTouched=h.yTouched=!1,h.xo=h.x=h.x+d,h.yo=h.y=h.y+p}var T=o.length;o.push.apply(o,_);for(var v=0;v<g.length;v++)a.push(g[v]+T)}e.instructions&&!s.inhibitGridFit&&(s=new Rr("glyf",e.instructions),s.gZone=s.z0=s.z1=s.z2=o,s.contours=a,o.push(new fr(0,0),new fr(Math.round(e.advanceWidth*t),0)),exports.DEBUG&&(console.log("---EXEC COMPOSITE---"),s.step=-1),ei(s),o.length-=2)}return o};Ks=function(e,n,t,r){for(var i=e.points||[],a=i.length,o=n.gZone=n.z0=n.z1=n.z2=[],s=n.contours=[],l,c=0;c<a;c++)l=i[c],o[c]=new fr(l.x*t,l.y*r,l.lastPointOfContour,l.onCurve);for(var u,f,d=0;d<a;d++)l=o[d],u||(u=l,s.push(d)),l.lastPointOfContour?(l.nextPointOnContour=u,u.prevPointOnContour=l,u=void 0):(f=o[d+1],l.nextPointOnContour=f,f.prevPointOnContour=l);if(!n.inhibitGridFit){if(exports.DEBUG){console.log("PROCESSING GLYPH",n.stack);for(var p=0;p<a;p++)console.log(p,o[p].x,o[p].y)}if(o.push(new fr(0,0),new fr(Math.round(e.advanceWidth*t),0)),ei(n),o.length-=2,exports.DEBUG){console.log("FINISHED GLYPH",n.stack);for(var _=0;_<a;_++)console.log(_,o[_].x,o[_].y)}}};ei=function(e){var n=e.prog;if(n){var t=n.length,r;for(e.ip=0;e.ip<t;e.ip++){if(exports.DEBUG&&e.step++,r=ip[n[e.ip]],!r)throw new Error("unknown instruction: 0x"+Number(n[e.ip]).toString(16));r(e)}}};function Mo(e){for(var n=e.tZone=new Array(e.gZone.length),t=0;t<n.length;t++)n[t]=new fr(0,0)}function cp(e,n){var t=e.prog,r=e.ip,i=1,a;do if(a=t[++r],a===88)i++;else if(a===89)i--;else if(a===64)r+=t[r+1]+1;else if(a===65)r+=2*t[r+1]+1;else if(a>=176&&a<=183)r+=a-176+1;else if(a>=184&&a<=191)r+=(a-184+1)*2;else if(n&&i===1&&a===27)break;while(i>0);e.ip=r}function yu(e,n){exports.DEBUG&&console.log(n.step,"SVTCA["+e.axis+"]"),n.fv=n.pv=n.dpv=e}function Lu(e,n){exports.DEBUG&&console.log(n.step,"SPVTCA["+e.axis+"]"),n.pv=n.dpv=e}function xu(e,n){exports.DEBUG&&console.log(n.step,"SFVTCA["+e.axis+"]"),n.fv=e}function Mu(e,n){var t=n.stack,r=t.pop(),i=t.pop(),a=n.z2[r],o=n.z1[i];exports.DEBUG&&console.log("SPVTL["+e+"]",r,i);var s,l;e?(s=a.y-o.y,l=o.x-a.x):(s=o.x-a.x,l=o.y-a.y),n.pv=n.dpv=Ta(s,l)}function Iu(e,n){var t=n.stack,r=t.pop(),i=t.pop(),a=n.z2[r],o=n.z1[i];exports.DEBUG&&console.log("SFVTL["+e+"]",r,i);var s,l;e?(s=a.y-o.y,l=o.x-a.x):(s=o.x-a.x,l=o.y-a.y),n.fv=Ta(s,l)}function JA(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"SPVFS[]",t,r),e.pv=e.dpv=Ta(r,t)}function $A(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"SPVFS[]",t,r),e.fv=Ta(r,t)}function QA(e){var n=e.stack,t=e.pv;exports.DEBUG&&console.log(e.step,"GPV[]"),n.push(t.x*16384),n.push(t.y*16384)}function ey(e){var n=e.stack,t=e.fv;exports.DEBUG&&console.log(e.step,"GFV[]"),n.push(t.x*16384),n.push(t.y*16384)}function ny(e){e.fv=e.pv,exports.DEBUG&&console.log(e.step,"SFVTPV[]")}function ty(e){var n=e.stack,t=n.pop(),r=n.pop(),i=n.pop(),a=n.pop(),o=n.pop(),s=e.z0,l=e.z1,c=s[t],u=s[r],f=l[i],d=l[a],p=e.z2[o];exports.DEBUG&&console.log("ISECT[], ",t,r,i,a,o);var _=c.x,g=c.y,m=u.x,h=u.y,T=f.x,v=f.y,E=d.x,L=d.y,I=(_-m)*(v-L)-(g-h)*(T-E),x=_*h-g*m,b=T*L-v*E;p.x=(x*(T-E)-b*(_-m))/I,p.y=(x*(v-L)-b*(g-h))/I}function ry(e){e.rp0=e.stack.pop(),exports.DEBUG&&console.log(e.step,"SRP0[]",e.rp0)}function iy(e){e.rp1=e.stack.pop(),exports.DEBUG&&console.log(e.step,"SRP1[]",e.rp1)}function ay(e){e.rp2=e.stack.pop(),exports.DEBUG&&console.log(e.step,"SRP2[]",e.rp2)}function oy(e){var n=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SZP0[]",n),e.zp0=n,n){case 0:e.tZone||Mo(e),e.z0=e.tZone;break;case 1:e.z0=e.gZone;break;default:throw new Error("Invalid zone pointer")}}function sy(e){var n=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SZP1[]",n),e.zp1=n,n){case 0:e.tZone||Mo(e),e.z1=e.tZone;break;case 1:e.z1=e.gZone;break;default:throw new Error("Invalid zone pointer")}}function ly(e){var n=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SZP2[]",n),e.zp2=n,n){case 0:e.tZone||Mo(e),e.z2=e.tZone;break;case 1:e.z2=e.gZone;break;default:throw new Error("Invalid zone pointer")}}function cy(e){var n=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"SZPS[]",n),e.zp0=e.zp1=e.zp2=n,n){case 0:e.tZone||Mo(e),e.z0=e.z1=e.z2=e.tZone;break;case 1:e.z0=e.z1=e.z2=e.gZone;break;default:throw new Error("Invalid zone pointer")}}function uy(e){e.loop=e.stack.pop(),exports.DEBUG&&console.log(e.step,"SLOOP[]",e.loop)}function fy(e){exports.DEBUG&&console.log(e.step,"RTG[]"),e.round=sp}function dy(e){exports.DEBUG&&console.log(e.step,"RTHG[]"),e.round=YA}function py(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"SMD[]",n),e.minDis=n/64}function hy(e){exports.DEBUG&&console.log(e.step,"ELSE[]"),cp(e,!1)}function my(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"JMPR[]",n),e.ip+=n-1}function _y(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"SCVTCI[]",n),e.cvCutIn=n/64}function gy(e){var n=e.stack;exports.DEBUG&&console.log(e.step,"DUP[]"),n.push(n[n.length-1])}function ds(e){exports.DEBUG&&console.log(e.step,"POP[]"),e.stack.pop()}function vy(e){exports.DEBUG&&console.log(e.step,"CLEAR[]"),e.stack.length=0}function Ey(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"SWAP[]"),n.push(t),n.push(r)}function Ty(e){var n=e.stack;exports.DEBUG&&console.log(e.step,"DEPTH[]"),n.push(n.length)}function Sy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"LOOPCALL[]",t,r);var i=e.ip,a=e.prog;e.prog=e.funcs[t];for(var o=0;o<r;o++)ei(e),exports.DEBUG&&console.log(++e.step,o+1<r?"next loopcall":"done loopcall",o);e.ip=i,e.prog=a}function Ry(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"CALL[]",n);var t=e.ip,r=e.prog;e.prog=e.funcs[n],ei(e),e.ip=t,e.prog=r,exports.DEBUG&&console.log(++e.step,"returning from",n)}function Ay(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"CINDEX[]",t),n.push(n[n.length-t])}function yy(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"MINDEX[]",t),n.push(n.splice(n.length-t,1)[0])}function Ly(e){if(e.env!=="fpgm")throw new Error("FDEF not allowed here");var n=e.stack,t=e.prog,r=e.ip,i=n.pop(),a=r;for(exports.DEBUG&&console.log(e.step,"FDEF[]",i);t[++r]!==45;);e.ip=r,e.funcs[i]=t.slice(a+1,r)}function bu(e,n){var t=n.stack.pop(),r=n.z0[t],i=n.fv,a=n.pv;exports.DEBUG&&console.log(n.step,"MDAP["+e+"]",t);var o=a.distance(r,ua);e&&(o=n.round(o)),i.setRelative(r,ua,o,a),i.touch(r),n.rp0=n.rp1=t}function Ou(e,n){var t=n.z2,r=t.length-2,i,a,o;exports.DEBUG&&console.log(n.step,"IUP["+e.axis+"]");for(var s=0;s<r;s++)i=t[s],!e.touched(i)&&(a=i.prevTouched(e),a!==i&&(o=i.nextTouched(e),a===o&&e.setRelative(i,i,e.distance(a,a,!1,!0),e,!0),e.interpolate(i,a,o,e)))}function Cu(e,n){for(var t=n.stack,r=e?n.rp1:n.rp2,i=(e?n.z0:n.z1)[r],a=n.fv,o=n.pv,s=n.loop,l=n.z2;s--;){var c=t.pop(),u=l[c],f=o.distance(i,i,!1,!0);a.setRelative(u,u,f,o),a.touch(u),exports.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-s)+": ":"")+"SHP["+(e?"rp1":"rp2")+"]",c)}n.loop=1}function Pu(e,n){var t=n.stack,r=e?n.rp1:n.rp2,i=(e?n.z0:n.z1)[r],a=n.fv,o=n.pv,s=t.pop(),l=n.z2[n.contours[s]],c=l;exports.DEBUG&&console.log(n.step,"SHC["+e+"]",s);var u=o.distance(i,i,!1,!0);do c!==i&&a.setRelative(c,c,u,o),c=c.nextPointOnContour;while(c!==l)}function Nu(e,n){var t=n.stack,r=e?n.rp1:n.rp2,i=(e?n.z0:n.z1)[r],a=n.fv,o=n.pv,s=t.pop();exports.DEBUG&&console.log(n.step,"SHZ["+e+"]",s);var l;switch(s){case 0:l=n.tZone;break;case 1:l=n.gZone;break;default:throw new Error("Invalid zone")}for(var c,u=o.distance(i,i,!1,!0),f=l.length-2,d=0;d<f;d++)c=l[d],a.setRelative(c,c,u,o)}function xy(e){for(var n=e.stack,t=e.loop,r=e.fv,i=n.pop()/64,a=e.z2;t--;){var o=n.pop(),s=a[o];exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-t)+": ":"")+"SHPIX[]",o,i),r.setRelative(s,s,i),r.touch(s)}e.loop=1}function My(e){for(var n=e.stack,t=e.rp1,r=e.rp2,i=e.loop,a=e.z0[t],o=e.z1[r],s=e.fv,l=e.dpv,c=e.z2;i--;){var u=n.pop(),f=c[u];exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-i)+": ":"")+"IP[]",u,t,"<->",r),s.interpolate(f,a,o,l),s.touch(f)}e.loop=1}function wu(e,n){var t=n.stack,r=t.pop()/64,i=t.pop(),a=n.z1[i],o=n.z0[n.rp0],s=n.fv,l=n.pv;s.setRelative(a,o,r,l),s.touch(a),exports.DEBUG&&console.log(n.step,"MSIRP["+e+"]",r,i),n.rp1=n.rp0,n.rp2=i,e&&(n.rp0=i)}function Iy(e){for(var n=e.stack,t=e.rp0,r=e.z0[t],i=e.loop,a=e.fv,o=e.pv,s=e.z1;i--;){var l=n.pop(),c=s[l];exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-i)+": ":"")+"ALIGNRP[]",l),a.setRelative(c,r,0,o),a.touch(c)}e.loop=1}function by(e){exports.DEBUG&&console.log(e.step,"RTDG[]"),e.round=KA}function Fu(e,n){var t=n.stack,r=t.pop(),i=t.pop(),a=n.z0[i],o=n.fv,s=n.pv,l=n.cvt[r];exports.DEBUG&&console.log(n.step,"MIAP["+e+"]",r,"(",l,")",i);var c=s.distance(a,ua);e&&(Math.abs(c-l)<n.cvCutIn&&(c=l),c=n.round(c)),o.setRelative(a,ua,c,s),n.zp0===0&&(a.xo=a.x,a.yo=a.y),o.touch(a),n.rp0=n.rp1=i}function Oy(e){var n=e.prog,t=e.ip,r=e.stack,i=n[++t];exports.DEBUG&&console.log(e.step,"NPUSHB[]",i);for(var a=0;a<i;a++)r.push(n[++t]);e.ip=t}function Cy(e){var n=e.ip,t=e.prog,r=e.stack,i=t[++n];exports.DEBUG&&console.log(e.step,"NPUSHW[]",i);for(var a=0;a<i;a++){var o=t[++n]<<8|t[++n];o&32768&&(o=-((o^65535)+1)),r.push(o)}e.ip=n}function Py(e){var n=e.stack,t=e.store;t||(t=e.store=[]);var r=n.pop(),i=n.pop();exports.DEBUG&&console.log(e.step,"WS",r,i),t[i]=r}function Ny(e){var n=e.stack,t=e.store,r=n.pop();exports.DEBUG&&console.log(e.step,"RS",r);var i=t&&t[r]||0;n.push(i)}function wy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"WCVTP",t,r),e.cvt[r]=t/64}function Fy(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"RCVT",t),n.push(e.cvt[t]*64)}function Du(e,n){var t=n.stack,r=t.pop(),i=n.z2[r];exports.DEBUG&&console.log(n.step,"GC["+e+"]",r),t.push(n.dpv.distance(i,ua,e,!1)*64)}function Uu(e,n){var t=n.stack,r=t.pop(),i=t.pop(),a=n.z1[r],o=n.z0[i],s=n.dpv.distance(o,a,e,e);exports.DEBUG&&console.log(n.step,"MD["+e+"]",r,i,"->",s),n.stack.push(Math.round(s*64))}function Dy(e){exports.DEBUG&&console.log(e.step,"MPPEM[]"),e.stack.push(e.ppem)}function Uy(e){exports.DEBUG&&console.log(e.step,"FLIPON[]"),e.autoFlip=!0}function Hy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"LT[]",t,r),n.push(r<t?1:0)}function Gy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"LTEQ[]",t,r),n.push(r<=t?1:0)}function By(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"GT[]",t,r),n.push(r>t?1:0)}function ky(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"GTEQ[]",t,r),n.push(r>=t?1:0)}function Wy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"EQ[]",t,r),n.push(t===r?1:0)}function zy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"NEQ[]",t,r),n.push(t!==r?1:0)}function Vy(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"ODD[]",t),n.push(Math.trunc(t)%2?1:0)}function Xy(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"EVEN[]",t),n.push(Math.trunc(t)%2?0:1)}function Ky(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"IF[]",n),n||(cp(e,!0),exports.DEBUG&&console.log(e.step,"EIF[]"))}function Yy(e){exports.DEBUG&&console.log(e.step,"EIF[]")}function qy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"AND[]",t,r),n.push(t&&r?1:0)}function jy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"OR[]",t,r),n.push(t||r?1:0)}function Zy(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"NOT[]",t),n.push(t?0:1)}function ps(e,n){var t=n.stack,r=t.pop(),i=n.fv,a=n.pv,o=n.ppem,s=n.deltaBase+(e-1)*16,l=n.deltaShift,c=n.z0;exports.DEBUG&&console.log(n.step,"DELTAP["+e+"]",r,t);for(var u=0;u<r;u++){var f=t.pop(),d=t.pop(),p=s+((d&240)>>4);if(p===o){var _=(d&15)-8;_>=0&&_++,exports.DEBUG&&console.log(n.step,"DELTAPFIX",f,"by",_*l);var g=c[f];i.setRelative(g,g,_*l,a)}}}function Jy(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"SDB[]",t),e.deltaBase=t}function $y(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"SDS[]",t),e.deltaShift=Math.pow(.5,t)}function Qy(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"ADD[]",t,r),n.push(r+t)}function e0(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"SUB[]",t,r),n.push(r-t)}function n0(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"DIV[]",t,r),n.push(r*64/t)}function t0(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"MUL[]",t,r),n.push(r*t/64)}function r0(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"ABS[]",t),n.push(Math.abs(t))}function i0(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"NEG[]",t),n.push(-t)}function a0(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"FLOOR[]",t),n.push(Math.floor(t/64)*64)}function o0(e){var n=e.stack,t=n.pop();exports.DEBUG&&console.log(e.step,"CEILING[]",t),n.push(Math.ceil(t/64)*64)}function Ha(e,n){var t=n.stack,r=t.pop();exports.DEBUG&&console.log(n.step,"ROUND[]"),t.push(n.round(r/64)*64)}function s0(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"WCVTF[]",t,r),e.cvt[r]=t*e.ppem/e.font.unitsPerEm}function hs(e,n){var t=n.stack,r=t.pop(),i=n.ppem,a=n.deltaBase+(e-1)*16,o=n.deltaShift;exports.DEBUG&&console.log(n.step,"DELTAC["+e+"]",r,t);for(var s=0;s<r;s++){var l=t.pop(),c=t.pop(),u=a+((c&240)>>4);if(u===i){var f=(c&15)-8;f>=0&&f++;var d=f*o;exports.DEBUG&&console.log(n.step,"DELTACFIX",l,"by",d),n.cvt[l]+=d}}}function l0(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"SROUND[]",n),e.round=lp;var t;switch(n&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(e.srPeriod=t,n&48){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*t;break;case 32:e.srPhase=.5*t;break;case 48:e.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}n&=15,n===0?e.srThreshold=0:e.srThreshold=(n/8-.5)*t}function c0(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"S45ROUND[]",n),e.round=lp;var t;switch(n&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(e.srPeriod=t,n&48){case 0:e.srPhase=0;break;case 16:e.srPhase=.25*t;break;case 32:e.srPhase=.5*t;break;case 48:e.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}n&=15,n===0?e.srThreshold=0:e.srThreshold=(n/8-.5)*t}function u0(e){exports.DEBUG&&console.log(e.step,"ROFF[]"),e.round=XA}function f0(e){exports.DEBUG&&console.log(e.step,"RUTG[]"),e.round=qA}function d0(e){exports.DEBUG&&console.log(e.step,"RDTG[]"),e.round=jA}function p0(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"SCANCTRL[]",n)}function Hu(e,n){var t=n.stack,r=t.pop(),i=t.pop(),a=n.z2[r],o=n.z1[i];exports.DEBUG&&console.log(n.step,"SDPVTL["+e+"]",r,i);var s,l;e?(s=a.y-o.y,l=o.x-a.x):(s=o.x-a.x,l=o.y-a.y),n.dpv=Ta(s,l)}function h0(e){var n=e.stack,t=n.pop(),r=0;exports.DEBUG&&console.log(e.step,"GETINFO[]",t),t&1&&(r=35),t&32&&(r|=4096),n.push(r)}function m0(e){var n=e.stack,t=n.pop(),r=n.pop(),i=n.pop();exports.DEBUG&&console.log(e.step,"ROLL[]"),n.push(r),n.push(t),n.push(i)}function _0(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"MAX[]",t,r),n.push(Math.max(r,t))}function g0(e){var n=e.stack,t=n.pop(),r=n.pop();exports.DEBUG&&console.log(e.step,"MIN[]",t,r),n.push(Math.min(r,t))}function v0(e){var n=e.stack.pop();exports.DEBUG&&console.log(e.step,"SCANTYPE[]",n)}function E0(e){var n=e.stack.pop(),t=e.stack.pop();switch(exports.DEBUG&&console.log(e.step,"INSTCTRL[]",n,t),n){case 1:e.inhibitGridFit=!!t;return;case 2:e.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function gr(e,n){var t=n.stack,r=n.prog,i=n.ip;exports.DEBUG&&console.log(n.step,"PUSHB["+e+"]");for(var a=0;a<e;a++)t.push(r[++i]);n.ip=i}function vr(e,n){var t=n.ip,r=n.prog,i=n.stack;exports.DEBUG&&console.log(n.ip,"PUSHW["+e+"]");for(var a=0;a<e;a++){var o=r[++t]<<8|r[++t];o&32768&&(o=-((o^65535)+1)),i.push(o)}n.ip=t}function Me(e,n,t,r,i,a){var o=a.stack,s=e&&o.pop(),l=o.pop(),c=a.rp0,u=a.z0[c],f=a.z1[l],d=a.minDis,p=a.fv,_=a.dpv,g,m,h,T;m=g=_.distance(f,u,!0,!0),h=m>=0?1:-1,m=Math.abs(m),e&&(T=a.cvt[s],r&&Math.abs(m-T)<a.cvCutIn&&(m=T)),t&&m<d&&(m=d),r&&(m=a.round(m)),p.setRelative(f,u,h*m,_),p.touch(f),exports.DEBUG&&console.log(a.step,(e?"MIRP[":"MDRP[")+(n?"M":"m")+(t?">":"_")+(r?"R":"_")+(i===0?"Gr":i===1?"Bl":i===2?"Wh":"")+"]",e?s+"("+a.cvt[s]+","+T+")":"",l,"(d =",g,"->",h*m,")"),a.rp1=a.rp0,a.rp2=l,n&&(a.rp0=l)}ip=[yu.bind(void 0,ur),yu.bind(void 0,Jt),Lu.bind(void 0,ur),Lu.bind(void 0,Jt),xu.bind(void 0,ur),xu.bind(void 0,Jt),Mu.bind(void 0,0),Mu.bind(void 0,1),Iu.bind(void 0,0),Iu.bind(void 0,1),JA,$A,QA,ey,ny,ty,ry,iy,ay,oy,sy,ly,cy,uy,fy,dy,py,hy,my,_y,void 0,void 0,gy,ds,vy,Ey,Ty,Ay,yy,void 0,void 0,void 0,Sy,Ry,Ly,void 0,bu.bind(void 0,0),bu.bind(void 0,1),Ou.bind(void 0,ur),Ou.bind(void 0,Jt),Cu.bind(void 0,0),Cu.bind(void 0,1),Pu.bind(void 0,0),Pu.bind(void 0,1),Nu.bind(void 0,0),Nu.bind(void 0,1),xy,My,wu.bind(void 0,0),wu.bind(void 0,1),Iy,by,Fu.bind(void 0,0),Fu.bind(void 0,1),Oy,Cy,Py,Ny,wy,Fy,Du.bind(void 0,0),Du.bind(void 0,1),void 0,Uu.bind(void 0,0),Uu.bind(void 0,1),Dy,void 0,Uy,void 0,void 0,Hy,Gy,By,ky,Wy,zy,Vy,Xy,Ky,Yy,qy,jy,Zy,ps.bind(void 0,1),Jy,$y,Qy,e0,n0,t0,r0,i0,a0,o0,Ha.bind(void 0,0),Ha.bind(void 0,1),Ha.bind(void 0,2),Ha.bind(void 0,3),void 0,void 0,void 0,void 0,s0,ps.bind(void 0,2),ps.bind(void 0,3),hs.bind(void 0,1),hs.bind(void 0,2),hs.bind(void 0,3),l0,c0,void 0,void 0,u0,void 0,f0,d0,ds,ds,void 0,void 0,void 0,void 0,void 0,p0,Hu.bind(void 0,0),Hu.bind(void 0,1),h0,void 0,m0,_0,g0,v0,E0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,gr.bind(void 0,1),gr.bind(void 0,2),gr.bind(void 0,3),gr.bind(void 0,4),gr.bind(void 0,5),gr.bind(void 0,6),gr.bind(void 0,7),gr.bind(void 0,8),vr.bind(void 0,1),vr.bind(void 0,2),vr.bind(void 0,3),vr.bind(void 0,4),vr.bind(void 0,5),vr.bind(void 0,6),vr.bind(void 0,7),vr.bind(void 0,8),Me.bind(void 0,0,0,0,0,0),Me.bind(void 0,0,0,0,0,1),Me.bind(void 0,0,0,0,0,2),Me.bind(void 0,0,0,0,0,3),Me.bind(void 0,0,0,0,1,0),Me.bind(void 0,0,0,0,1,1),Me.bind(void 0,0,0,0,1,2),Me.bind(void 0,0,0,0,1,3),Me.bind(void 0,0,0,1,0,0),Me.bind(void 0,0,0,1,0,1),Me.bind(void 0,0,0,1,0,2),Me.bind(void 0,0,0,1,0,3),Me.bind(void 0,0,0,1,1,0),Me.bind(void 0,0,0,1,1,1),Me.bind(void 0,0,0,1,1,2),Me.bind(void 0,0,0,1,1,3),Me.bind(void 0,0,1,0,0,0),Me.bind(void 0,0,1,0,0,1),Me.bind(void 0,0,1,0,0,2),Me.bind(void 0,0,1,0,0,3),Me.bind(void 0,0,1,0,1,0),Me.bind(void 0,0,1,0,1,1),Me.bind(void 0,0,1,0,1,2),Me.bind(void 0,0,1,0,1,3),Me.bind(void 0,0,1,1,0,0),Me.bind(void 0,0,1,1,0,1),Me.bind(void 0,0,1,1,0,2),Me.bind(void 0,0,1,1,0,3),Me.bind(void 0,0,1,1,1,0),Me.bind(void 0,0,1,1,1,1),Me.bind(void 0,0,1,1,1,2),Me.bind(void 0,0,1,1,1,3),Me.bind(void 0,1,0,0,0,0),Me.bind(void 0,1,0,0,0,1),Me.bind(void 0,1,0,0,0,2),Me.bind(void 0,1,0,0,0,3),Me.bind(void 0,1,0,0,1,0),Me.bind(void 0,1,0,0,1,1),Me.bind(void 0,1,0,0,1,2),Me.bind(void 0,1,0,0,1,3),Me.bind(void 0,1,0,1,0,0),Me.bind(void 0,1,0,1,0,1),Me.bind(void 0,1,0,1,0,2),Me.bind(void 0,1,0,1,0,3),Me.bind(void 0,1,0,1,1,0),Me.bind(void 0,1,0,1,1,1),Me.bind(void 0,1,0,1,1,2),Me.bind(void 0,1,0,1,1,3),Me.bind(void 0,1,1,0,0,0),Me.bind(void 0,1,1,0,0,1),Me.bind(void 0,1,1,0,0,2),Me.bind(void 0,1,1,0,0,3),Me.bind(void 0,1,1,0,1,0),Me.bind(void 0,1,1,0,1,1),Me.bind(void 0,1,1,0,1,2),Me.bind(void 0,1,1,0,1,3),Me.bind(void 0,1,1,1,0,0),Me.bind(void 0,1,1,1,0,1),Me.bind(void 0,1,1,1,0,2),Me.bind(void 0,1,1,1,0,3),Me.bind(void 0,1,1,1,1,0),Me.bind(void 0,1,1,1,1,1),Me.bind(void 0,1,1,1,1,2),Me.bind(void 0,1,1,1,1,3)];function Fi(e){this.char=e,this.state={},this.activeState=null}function Tl(e,n,t){this.contextName=t,this.startIndex=e,this.endOffset=n}function T0(e,n,t){this.contextName=e,this.openRange=null,this.ranges=[],this.checkStart=n,this.checkEnd=t}function Gt(e,n){this.context=e,this.index=n,this.length=e.length,this.current=e[n],this.backtrack=e.slice(0,n),this.lookahead=e.slice(n+1)}function Io(e){this.eventId=e,this.subscribers=[]}function S0(e){var n=this,t=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];t.forEach(function(i){Object.defineProperty(n.events,i,{value:new Io(i)})}),e&&t.forEach(function(i){var a=e[i];typeof a=="function"&&n.events[i].subscribe(a)});var r=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];r.forEach(function(i){n.events[i].subscribe(n.updateContextsRanges)})}function Un(e){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],S0.call(this,e)}Fi.prototype.setState=function(e,n){return this.state[e]=n,this.activeState={key:e,value:this.state[e]},this.activeState};Fi.prototype.getState=function(e){return this.state[e]||null};Un.prototype.inboundIndex=function(e){return e>=0&&e<this.tokens.length};Un.prototype.composeRUD=function(e){var n=this,t=!0,r=e.map(function(a){return n[a[0]].apply(n,a.slice(1).concat(t))}),i=function(a){return typeof a=="object"&&a.hasOwnProperty("FAIL")};if(r.every(i))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:r.filter(i)};this.dispatch("composeRUD",[r.filter(function(a){return!i(a)})])};Un.prototype.replaceRange=function(e,n,t,r){n=n!==null?n:this.tokens.length;var i=t.every(function(o){return o instanceof Fi});if(!isNaN(e)&&this.inboundIndex(e)&&i){var a=this.tokens.splice.apply(this.tokens,[e,n].concat(t));return r||this.dispatch("replaceToken",[e,n,t]),[a,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};Un.prototype.replaceToken=function(e,n,t){if(!isNaN(e)&&this.inboundIndex(e)&&n instanceof Fi){var r=this.tokens.splice(e,1,n);return t||this.dispatch("replaceToken",[e,n]),[r[0],n]}else return{FAIL:"replaceToken: invalid token or index."}};Un.prototype.removeRange=function(e,n,t){n=isNaN(n)?this.tokens.length:n;var r=this.tokens.splice(e,n);return t||this.dispatch("removeRange",[r,e,n]),r};Un.prototype.removeToken=function(e,n){if(!isNaN(e)&&this.inboundIndex(e)){var t=this.tokens.splice(e,1);return n||this.dispatch("removeToken",[t,e]),t}else return{FAIL:"removeToken: invalid token index."}};Un.prototype.insertToken=function(e,n,t){var r=e.every(function(i){return i instanceof Fi});return r?(this.tokens.splice.apply(this.tokens,[n,0].concat(e)),t||this.dispatch("insertToken",[e,n]),e):{FAIL:"insertToken: invalid token(s)."}};Un.prototype.registerModifier=function(e,n,t){this.events.newToken.subscribe(function(r,i){var a=[r,i],o=n===null||n.apply(this,a)===!0,s=[r,i];if(o){var l=t.apply(this,s);r.setState(e,l)}}),this.registeredModifiers.push(e)};Io.prototype.subscribe=function(e){return typeof e=="function"?this.subscribers.push(e)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};Io.prototype.unsubscribe=function(e){this.subscribers.splice(e,1)};Gt.prototype.setCurrentIndex=function(e){this.index=e,this.current=this.context[e],this.backtrack=this.context.slice(0,e),this.lookahead=this.context.slice(e+1)};Gt.prototype.get=function(e){switch(!0){case e===0:return this.current;case(e<0&&Math.abs(e)<=this.backtrack.length):return this.backtrack.slice(e)[0];case(e>0&&e<=this.lookahead.length):return this.lookahead[e-1];default:return null}};Un.prototype.rangeToText=function(e){if(e instanceof Tl)return this.getRangeTokens(e).map(function(n){return n.char}).join("")};Un.prototype.getText=function(){return this.tokens.map(function(e){return e.char}).join("")};Un.prototype.getContext=function(e){var n=this.registeredContexts[e];return n||null};Un.prototype.on=function(e,n){var t=this.events[e];return t?t.subscribe(n):null};Un.prototype.dispatch=function(e,n){var t=this,r=this.events[e];r instanceof Io&&r.subscribers.forEach(function(i){i.apply(t,n||[])})};Un.prototype.registerContextChecker=function(e,n,t){if(this.getContext(e))return{FAIL:"context name '"+e+"' is already registered."};if(typeof n!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};var r=new T0(e,n,t);return this.registeredContexts[e]=r,this.contextCheckers.push(r),r};Un.prototype.getRangeTokens=function(e){var n=e.startIndex+e.endOffset;return[].concat(this.tokens.slice(e.startIndex,n))};Un.prototype.getContextRanges=function(e){var n=this.getContext(e);return n?n.ranges:{FAIL:"context checker '"+e+"' is not registered."}};Un.prototype.resetContextsRanges=function(){var e=this.registeredContexts;for(var n in e)if(e.hasOwnProperty(n)){var t=e[n];t.ranges=[]}};Un.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var e=this.tokens.map(function(r){return r.char}),n=0;n<e.length;n++){var t=new Gt(e,n);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])};Un.prototype.setEndOffset=function(e,n){var t=this.getContext(n).openRange.startIndex,r=new Tl(t,e,n),i=this.getContext(n).ranges;return r.rangeId=n+"."+i.length,i.push(r),this.getContext(n).openRange=null,r};Un.prototype.runContextCheck=function(e){var n=this,t=e.index;this.contextCheckers.forEach(function(r){var i=r.contextName,a=n.getContext(i).openRange;if(!a&&r.checkStart(e)&&(a=new Tl(t,null,i),n.getContext(i).openRange=a,n.dispatch("contextStart",[i,t])),a&&r.checkEnd(e)){var o=t-a.startIndex+1,s=n.setEndOffset(o,i);n.dispatch("contextEnd",[i,s])}})};Un.prototype.tokenize=function(e){this.tokens=[],this.resetContextsRanges();var n=Array.from(e);this.dispatch("start");for(var t=0;t<n.length;t++){var r=n[t],i=new Gt(n,t);this.dispatch("next",[i]),this.runContextCheck(i);var a=new Fi(r);this.tokens.push(a),this.dispatch("newToken",[a,i])}return this.dispatch("end",[this.tokens]),this.tokens};function xr(e){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(e)}function up(e){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(e)}function Mr(e){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(e)}function Za(e){return/[A-z]/.test(e)}function R0(e){return/\s/.test(e)}function yt(e){this.font=e,this.features={}}function kr(e){this.id=e.id,this.tag=e.tag,this.substitution=e.substitution}function Sa(e,n){if(!e)return-1;switch(n.format){case 1:return n.glyphs.indexOf(e);case 2:for(var t=n.ranges,r=0;r<t.length;r++){var i=t[r];if(e>=i.start&&e<=i.end){var a=e-i.start;return i.index+a}}break;default:return-1}return-1}function A0(e,n){var t=Sa(e,n.coverage);return t===-1?null:e+n.deltaGlyphId}function y0(e,n){var t=Sa(e,n.coverage);return t===-1?null:n.substitute[t]}function ms(e,n){for(var t=[],r=0;r<e.length;r++){var i=e[r],a=n.current;a=Array.isArray(a)?a[0]:a;var o=Sa(a,i);o!==-1&&t.push(o)}return t.length!==e.length?-1:t}function L0(e,n){var t=n.inputCoverage.length+n.lookaheadCoverage.length+n.backtrackCoverage.length;if(e.context.length<t)return[];var r=ms(n.inputCoverage,e);if(r===-1)return[];var i=n.inputCoverage.length-1;if(e.lookahead.length<n.lookaheadCoverage.length)return[];for(var a=e.lookahead.slice(i);a.length&&Mr(a[0].char);)a.shift();var o=new Gt(a,0),s=ms(n.lookaheadCoverage,o),l=[].concat(e.backtrack);for(l.reverse();l.length&&Mr(l[0].char);)l.shift();if(l.length<n.backtrackCoverage.length)return[];var c=new Gt(l,0),u=ms(n.backtrackCoverage,c),f=r.length===n.inputCoverage.length&&s.length===n.lookaheadCoverage.length&&u.length===n.backtrackCoverage.length,d=[];if(f)for(var p=0;p<n.lookupRecords.length;p++)for(var _=n.lookupRecords[p],g=_.lookupListIndex,m=this.getLookupByIndex(g),h=0;h<m.subtables.length;h++){var T=m.subtables[h],v=this.getLookupMethod(m,T),E=this.getSubstitutionType(m,T);if(E==="12")for(var L=0;L<r.length;L++){var I=e.get(L),x=v(I);x&&d.push(x)}}return d}function x0(e,n){var t=e.current,r=Sa(t,n.coverage);if(r===-1)return null;for(var i,a=n.ligatureSets[r],o=0;o<a.length;o++){i=a[o];for(var s=0;s<i.components.length;s++){var l=e.lookahead[s],c=i.components[s];if(l!==c)break;if(s===i.components.length-1)return i}}return null}function M0(e,n){var t=Sa(e,n.coverage);return t===-1?null:n.sequences[t]}yt.prototype.getDefaultScriptFeaturesIndexes=function(){for(var e=this.font.tables.gsub.scripts,n=0;n<e.length;n++){var t=e[n];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]};yt.prototype.getScriptFeaturesIndexes=function(e){var n=this.font.tables;if(!n.gsub)return[];if(!e)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,r=0;r<t.length;r++){var i=t[r];if(i.tag===e&&i.script.defaultLangSys)return i.script.defaultLangSys.featureIndexes;var a=i.langSysRecords;if(a)for(var o=0;o<a.length;o++){var s=a[o];if(s.tag===e){var l=s.langSys;return l.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};yt.prototype.mapTagsToFeatures=function(e,n){for(var t={},r=0;r<e.length;r++){var i=e[r].tag,a=e[r].feature;t[i]=a}this.features[n].tags=t};yt.prototype.getScriptFeatures=function(e){var n=this.features[e];if(this.features.hasOwnProperty(e))return n;var t=this.getScriptFeaturesIndexes(e);if(!t)return null;var r=this.font.tables.gsub;return n=t.map(function(i){return r.features[i]}),this.features[e]=n,this.mapTagsToFeatures(n,e),n};yt.prototype.getSubstitutionType=function(e,n){var t=e.lookupType.toString(),r=n.substFormat.toString();return t+r};yt.prototype.getLookupMethod=function(e,n){var t=this,r=this.getSubstitutionType(e,n);switch(r){case"11":return function(i){return A0.apply(t,[i,n])};case"12":return function(i){return y0.apply(t,[i,n])};case"63":return function(i){return L0.apply(t,[i,n])};case"41":return function(i){return x0.apply(t,[i,n])};case"21":return function(i){return M0.apply(t,[i,n])};default:throw new Error("lookupType: "+e.lookupType+" - substFormat: "+n.substFormat+" is not yet supported")}};yt.prototype.lookupFeature=function(e){var n=e.contextParams,t=n.index,r=this.getFeature({tag:e.tag,script:e.script});if(!r)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+e.tag+"' for script '"+e.script+"'.");for(var i=this.getFeatureLookups(r),a=[].concat(n.context),o=0;o<i.length;o++)for(var s=i[o],l=this.getLookupSubtables(s),c=0;c<l.length;c++){var u=l[c],f=this.getSubstitutionType(s,u),d=this.getLookupMethod(s,u),p=void 0;switch(f){case"11":p=d(n.current),p&&a.splice(t,1,new kr({id:11,tag:e.tag,substitution:p}));break;case"12":p=d(n.current),p&&a.splice(t,1,new kr({id:12,tag:e.tag,substitution:p}));break;case"63":p=d(n),Array.isArray(p)&&p.length&&a.splice(t,1,new kr({id:63,tag:e.tag,substitution:p}));break;case"41":p=d(n),p&&a.splice(t,1,new kr({id:41,tag:e.tag,substitution:p}));break;case"21":p=d(n.current),p&&a.splice(t,1,new kr({id:21,tag:e.tag,substitution:p}));break}n=new Gt(a,t),!(Array.isArray(p)&&!p.length)&&(p=null)}return a.length?a:null};yt.prototype.supports=function(e){if(!e.script)return!1;this.getScriptFeatures(e.script);var n=this.features.hasOwnProperty(e.script);if(!e.tag)return n;var t=this.features[e.script].some(function(r){return r.tag===e.tag});return n&&t};yt.prototype.getLookupSubtables=function(e){return e.subtables||null};yt.prototype.getLookupByIndex=function(e){var n=this.font.tables.gsub.lookups;return n[e]||null};yt.prototype.getFeatureLookups=function(e){return e.lookupListIndexes.map(this.getLookupByIndex.bind(this))};yt.prototype.getFeature=function(n){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(n.script)||this.getScriptFeatures(n.script);var t=this.features[n.script];return t?t.tags[n.tag]?this.features[n.script].tags[n.tag]:null:{FAIL:"No feature for script "+n.script}};function I0(e){var n=e.current,t=e.get(-1);return t===null&&xr(n)||!xr(t)&&xr(n)}function b0(e){var n=e.get(1);return n===null||!xr(n)}var O0={startCheck:I0,endCheck:b0};function C0(e){var n=e.current,t=e.get(-1);return(xr(n)||Mr(n))&&!xr(t)}function P0(e){var n=e.get(1);switch(!0){case n===null:return!0;case(!xr(n)&&!Mr(n)):var t=R0(n);if(!t)return!0;if(t){var r=!1;if(r=e.lookahead.some(function(i){return xr(i)||Mr(i)}),!r)return!0}break;default:return!1}}var N0={startCheck:C0,endCheck:P0};function w0(e,n,t){n[t].setState(e.tag,e.substitution)}function F0(e,n,t){n[t].setState(e.tag,e.substitution)}function D0(e,n,t){e.substitution.forEach(function(r,i){var a=n[t+i];a.setState(e.tag,r)})}function U0(e,n,t){var r=n[t];r.setState(e.tag,e.substitution.ligGlyph);for(var i=e.substitution.components.length,a=0;a<i;a++)r=n[t+a+1],r.setState("deleted",!0)}var Gu={11:w0,12:F0,63:D0,41:U0};function Sl(e,n,t){e instanceof kr&&Gu[e.id]&&Gu[e.id](e,n,t)}function H0(e){for(var n=[].concat(e.backtrack),t=n.length-1;t>=0;t--){var r=n[t],i=up(r),a=Mr(r);if(!i&&!a)return!0;if(i)return!1}return!1}function G0(e){if(up(e.current))return!1;for(var n=0;n<e.lookahead.length;n++){var t=e.lookahead[n],r=Mr(t);if(!r)return!0}return!1}function B0(e){var n=this,t="arab",r=this.featuresTags[t],i=this.tokenizer.getRangeTokens(e);if(i.length!==1){var a=new Gt(i.map(function(s){return s.getState("glyphIndex")}),0),o=new Gt(i.map(function(s){return s.char}),0);i.forEach(function(s,l){if(!Mr(s.char)){a.setCurrentIndex(l),o.setCurrentIndex(l);var c=0;H0(o)&&(c|=1),G0(o)&&(c|=2);var u;switch(c){case 1:u="fina";break;case 2:u="init";break;case 3:u="medi";break}if(r.indexOf(u)!==-1){var f=n.query.lookupFeature({tag:u,script:t,contextParams:a});if(f instanceof Error)return console.info(f.message);f.forEach(function(d,p){d instanceof kr&&(Sl(d,i,p),a.context[p]=d.substitution)})}}})}}function Bu(e,n){var t=e.map(function(r){return r.activeState.value});return new Gt(t,0)}function k0(e){var n=this,t="arab",r=this.tokenizer.getRangeTokens(e),i=Bu(r);i.context.forEach(function(a,o){i.setCurrentIndex(o);var s=n.query.lookupFeature({tag:"rlig",script:t,contextParams:i});s.length&&(s.forEach(function(l){return Sl(l,r,o)}),i=Bu(r))})}function W0(e){var n=e.current,t=e.get(-1);return t===null&&Za(n)||!Za(t)&&Za(n)}function z0(e){var n=e.get(1);return n===null||!Za(n)}var V0={startCheck:W0,endCheck:z0};function ku(e,n){var t=e.map(function(r){return r.activeState.value});return new Gt(t,0)}function X0(e){var n=this,t="latn",r=this.tokenizer.getRangeTokens(e),i=ku(r);i.context.forEach(function(a,o){i.setCurrentIndex(o);var s=n.query.lookupFeature({tag:"liga",script:t,contextParams:i});s.length&&(s.forEach(function(l){return Sl(l,r,o)}),i=ku(r))})}function Wt(e){this.baseDir=e||"ltr",this.tokenizer=new Un,this.featuresTags={}}Wt.prototype.setText=function(e){this.text=e};Wt.prototype.contextChecks={latinWordCheck:V0,arabicWordCheck:O0,arabicSentenceCheck:N0};function _s(e){var n=this.contextChecks[e+"Check"];return this.tokenizer.registerContextChecker(e,n.startCheck,n.endCheck)}function K0(){return _s.call(this,"latinWord"),_s.call(this,"arabicWord"),_s.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function Y0(){var e=this,n=this.tokenizer.getContextRanges("arabicSentence");n.forEach(function(t){var r=e.tokenizer.getRangeTokens(t);e.tokenizer.replaceRange(t.startIndex,t.endOffset,r.reverse())})}Wt.prototype.registerFeatures=function(e,n){var t=this,r=n.filter(function(i){return t.query.supports({script:e,tag:i})});this.featuresTags.hasOwnProperty(e)?this.featuresTags[e]=this.featuresTags[e].concat(r):this.featuresTags[e]=r};Wt.prototype.applyFeatures=function(e,n){if(!e)throw new Error("No valid font was provided to apply features");this.query||(this.query=new yt(e));for(var t=0;t<n.length;t++){var r=n[t];this.query.supports({script:r.script})&&this.registerFeatures(r.script,r.tags)}};Wt.prototype.registerModifier=function(e,n,t){this.tokenizer.registerModifier(e,n,t)};function Rl(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function q0(){var e=this,n="arab";if(this.featuresTags.hasOwnProperty(n)){Rl.call(this);var t=this.tokenizer.getContextRanges("arabicWord");t.forEach(function(r){B0.call(e,r)})}}function j0(){var e=this,n="arab";if(this.featuresTags.hasOwnProperty(n)){var t=this.featuresTags[n];if(t.indexOf("rlig")!==-1){Rl.call(this);var r=this.tokenizer.getContextRanges("arabicWord");r.forEach(function(i){k0.call(e,i)})}}}function Z0(){var e=this,n="latn";if(this.featuresTags.hasOwnProperty(n)){var t=this.featuresTags[n];if(t.indexOf("liga")!==-1){Rl.call(this);var r=this.tokenizer.getContextRanges("latinWord");r.forEach(function(i){X0.call(e,i)})}}}Wt.prototype.checkContextReady=function(e){return!!this.tokenizer.getContext(e)};Wt.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(q0.call(this),j0.call(this)),this.checkContextReady("latinWord")&&Z0.call(this),this.checkContextReady("arabicSentence")&&Y0.call(this)};Wt.prototype.processText=function(e){(!this.text||this.text!==e)&&(this.setText(e),K0.call(this),this.applyFeaturesToContexts())};Wt.prototype.getBidiText=function(e){return this.processText(e),this.tokenizer.getText()};Wt.prototype.getTextGlyphs=function(e){this.processText(e);for(var n=[],t=0;t<this.tokenizer.tokens.length;t++){var r=this.tokenizer.tokens[t];if(!r.state.deleted){var i=r.activeState.value;n.push(Array.isArray(i)?i[0]:i)}}return n};function Sn(e){e=e||{},e.tables=e.tables||{},e.empty||(ki(e.familyName,"When creating a new Font object, familyName is required."),ki(e.styleName,"When creating a new Font object, styleName is required."),ki(e.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),ki(e.ascender,"When creating a new Font object, ascender is required."),ki(e.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:e.familyName||" "},fontSubfamily:{en:e.styleName||" "},fullName:{en:e.fullName||e.familyName+" "+e.styleName},postScriptName:{en:e.postScriptName||(e.familyName+e.styleName).replace(/\s/g,"")},designer:{en:e.designer||" "},designerURL:{en:e.designerURL||" "},manufacturer:{en:e.manufacturer||" "},manufacturerURL:{en:e.manufacturerURL||" "},license:{en:e.license||" "},licenseURL:{en:e.licenseURL||" "},version:{en:e.version||"Version 0.1"},description:{en:e.description||" "},copyright:{en:e.copyright||" "},trademark:{en:e.trademark||" "}},this.unitsPerEm=e.unitsPerEm||1e3,this.ascender=e.ascender,this.descender=e.descender,this.createdTimestamp=e.createdTimestamp,this.tables=Object.assign(e.tables,{os2:Object.assign({usWeightClass:e.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:e.widthClass||this.usWidthClasses.MEDIUM,fsSelection:e.fsSelection||this.fsSelectionValues.REGULAR},e.tables.os2)})),this.supported=!0,this.glyphs=new er.GlyphSet(this,e.glyphs||[]),this.encoding=new Md(this),this.position=new va(this),this.substitution=new At(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new op(this)}})}Sn.prototype.hasChar=function(e){return this.encoding.charToGlyphIndex(e)!==null};Sn.prototype.charToGlyphIndex=function(e){return this.encoding.charToGlyphIndex(e)};Sn.prototype.charToGlyph=function(e){var n=this.charToGlyphIndex(e),t=this.glyphs.get(n);return t||(t=this.glyphs.get(0)),t};Sn.prototype.updateFeatures=function(e){return this.defaultRenderOptions.features.map(function(n){return n.script==="latn"?{script:"latn",tags:n.tags.filter(function(t){return e[t]})}:n})};Sn.prototype.stringToGlyphs=function(e,n){var t=this,r=new Wt,i=function(f){return t.charToGlyphIndex(f.char)};r.registerModifier("glyphIndex",null,i);var a=n?this.updateFeatures(n.features):this.defaultRenderOptions.features;r.applyFeatures(this,a);for(var o=r.getTextGlyphs(e),s=o.length,l=new Array(s),c=this.glyphs.get(0),u=0;u<s;u+=1)l[u]=this.glyphs.get(o[u])||c;return l};Sn.prototype.nameToGlyphIndex=function(e){return this.glyphNames.nameToGlyphIndex(e)};Sn.prototype.nameToGlyph=function(e){var n=this.nameToGlyphIndex(e),t=this.glyphs.get(n);return t||(t=this.glyphs.get(0)),t};Sn.prototype.glyphIndexToName=function(e){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(e):""};Sn.prototype.getKerningValue=function(e,n){e=e.index||e,n=n.index||n;var t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,e,n):this.kerningPairs[e+","+n]||0};Sn.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};Sn.prototype.forEachGlyph=function(e,n,t,r,i,a){n=n!==void 0?n:0,t=t!==void 0?t:0,r=r!==void 0?r:72,i=Object.assign({},this.defaultRenderOptions,i);var o=1/this.unitsPerEm*r,s=this.stringToGlyphs(e,i),l;if(i.kerning){var c=i.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,i.language)}for(var u=0;u<s.length;u+=1){var f=s[u];if(a.call(this,f,n,t,r,i),f.advanceWidth&&(n+=f.advanceWidth*o),i.kerning&&u<s.length-1){var d=l?this.position.getKerningValue(l,f.index,s[u+1].index):this.getKerningValue(f,s[u+1]);n+=d*o}i.letterSpacing?n+=i.letterSpacing*r:i.tracking&&(n+=i.tracking/1e3*r)}return n};Sn.prototype.getPath=function(e,n,t,r,i){var a=new zn;return this.forEachGlyph(e,n,t,r,i,function(o,s,l,c){var u=o.getPath(s,l,c,i,this);a.extend(u)}),a};Sn.prototype.getPaths=function(e,n,t,r,i){var a=[];return this.forEachGlyph(e,n,t,r,i,function(o,s,l,c){var u=o.getPath(s,l,c,i,this);a.push(u)}),a};Sn.prototype.getAdvanceWidth=function(e,n,t){return this.forEachGlyph(e,0,0,n,t,function(){})};Sn.prototype.draw=function(e,n,t,r,i,a){this.getPath(n,t,r,i,a).draw(e)};Sn.prototype.drawPoints=function(e,n,t,r,i,a){this.forEachGlyph(n,t,r,i,a,function(o,s,l,c){o.drawPoints(e,s,l,c)})};Sn.prototype.drawMetrics=function(e,n,t,r,i,a){this.forEachGlyph(n,t,r,i,a,function(o,s,l,c){o.drawMetrics(e,s,l,c)})};Sn.prototype.getEnglishName=function(e){var n=this.names[e];if(n)return n.en};Sn.prototype.validate=function(){var e=this;function n(r,i){}function t(r){var i=e.getEnglishName(r);i&&i.trim().length>0}t("fontFamily"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),this.unitsPerEm>0};Sn.prototype.toTables=function(){return GA.fontToTable(this)};Sn.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};Sn.prototype.toArrayBuffer=function(){for(var e=this.toTables(),n=e.encode(),t=new ArrayBuffer(n.length),r=new Uint8Array(t),i=0;i<n.length;i++)r[i]=n[i];return t};Sn.prototype.download=function(e){var n=this.getEnglishName("fontFamily"),t=this.getEnglishName("fontSubfamily");e=e||n.replace(/\s/g,"")+"-"+t+".otf";var r=this.toArrayBuffer();if(window.URL=window.URL||window.webkitURL,window.URL){var i=new DataView(r),a=new Blob([i],{type:"font/opentype"}),o=document.createElement("a");o.href=window.URL.createObjectURL(a),o.download=e;var s=document.createEvent("MouseEvents");s.initEvent("click",!0,!1),o.dispatchEvent(s)}else console.warn("Font file could not be downloaded. Try using a different browser.")};Sn.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};Sn.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};Sn.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function fp(e,n){var t=JSON.stringify(e),r=256;for(var i in n){var a=parseInt(i);if(!(!a||a<256)){if(JSON.stringify(n[i])===t)return a;r<=a&&(r=a+1)}}return n[r]=e,r}function J0(e,n,t){var r=fp(n.name,t);return[{name:"tag_"+e,type:"TAG",value:n.tag},{name:"minValue_"+e,type:"FIXED",value:n.minValue<<16},{name:"defaultValue_"+e,type:"FIXED",value:n.defaultValue<<16},{name:"maxValue_"+e,type:"FIXED",value:n.maxValue<<16},{name:"flags_"+e,type:"USHORT",value:0},{name:"nameID_"+e,type:"USHORT",value:r}]}function $0(e,n,t){var r={},i=new Ie.Parser(e,n);return r.tag=i.parseTag(),r.minValue=i.parseFixed(),r.defaultValue=i.parseFixed(),r.maxValue=i.parseFixed(),i.skip("uShort",1),r.name=t[i.parseUShort()]||{},r}function Q0(e,n,t,r){for(var i=fp(n.name,r),a=[{name:"nameID_"+e,type:"USHORT",value:i},{name:"flags_"+e,type:"USHORT",value:0}],o=0;o<t.length;++o){var s=t[o].tag;a.push({name:"axis_"+e+" "+s,type:"FIXED",value:n.coordinates[s]<<16})}return a}function eL(e,n,t,r){var i={},a=new Ie.Parser(e,n);i.name=r[a.parseUShort()]||{},a.skip("uShort",1),i.coordinates={};for(var o=0;o<t.length;++o)i.coordinates[t[o].tag]=a.parseFixed();return i}function nL(e,n){var t=new Re.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:e.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:e.instances.length},{name:"instanceSize",type:"USHORT",value:4+e.axes.length*4}]);t.offsetToData=t.sizeOf();for(var r=0;r<e.axes.length;r++)t.fields=t.fields.concat(J0(r,e.axes[r],n));for(var i=0;i<e.instances.length;i++)t.fields=t.fields.concat(Q0(i,e.instances[i],e.axes,n));return t}function tL(e,n,t){var r=new Ie.Parser(e,n),i=r.parseULong();Ge.argument(i===65536,"Unsupported fvar table version.");var a=r.parseOffset16();r.skip("uShort",1);for(var o=r.parseUShort(),s=r.parseUShort(),l=r.parseUShort(),c=r.parseUShort(),u=[],f=0;f<o;f++)u.push($0(e,n+a+f*s,t));for(var d=[],p=n+a+o*s,_=0;_<l;_++)d.push(eL(e,p+_*c,u,t));return{axes:u,instances:d}}var rL={make:nL,parse:tL},iL=function(){return{coverage:this.parsePointer(B.coverage),attachPoints:this.parseList(B.pointer(B.uShortList))}},aL=function(){var e=this.parseUShort();if(Ge.argument(e===1||e===2||e===3,"Unsupported CaretValue table version."),e===1)return{coordinate:this.parseShort()};if(e===2)return{pointindex:this.parseShort()};if(e===3)return{coordinate:this.parseShort()}},oL=function(){return this.parseList(B.pointer(aL))},sL=function(){return{coverage:this.parsePointer(B.coverage),ligGlyphs:this.parseList(B.pointer(oL))}},lL=function(){return this.parseUShort(),this.parseList(B.pointer(B.coverage))};function cL(e,n){n=n||0;var t=new B(e,n),r=t.parseVersion(1);Ge.argument(r===1||r===1.2||r===1.3,"Unsupported GDEF table version.");var i={version:r,classDef:t.parsePointer(B.classDef),attachList:t.parsePointer(iL),ligCaretList:t.parsePointer(sL),markAttachClassDef:t.parsePointer(B.classDef)};return r>=1.2&&(i.markGlyphSets=t.parsePointer(lL)),i}var uL={parse:cL},Bt=new Array(10);Bt[1]=function(){var n=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(B.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(B.coverage),values:this.parseValueRecordList()};Ge.assert(!1,"0x"+n.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};Bt[2]=function(){var n=this.offset+this.relativeOffset,t=this.parseUShort();Ge.assert(t===1||t===2,"0x"+n.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var r=this.parsePointer(B.coverage),i=this.parseUShort(),a=this.parseUShort();if(t===1)return{posFormat:t,coverage:r,valueFormat1:i,valueFormat2:a,pairSets:this.parseList(B.pointer(B.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(i),value2:this.parseValueRecord(a)}})))};if(t===2){var o=this.parsePointer(B.classDef),s=this.parsePointer(B.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:r,valueFormat1:i,valueFormat2:a,classDef1:o,classDef2:s,class1Count:l,class2Count:c,classRecords:this.parseList(l,B.list(c,function(){return{value1:this.parseValueRecord(i),value2:this.parseValueRecord(a)}}))}}};Bt[3]=function(){return{error:"GPOS Lookup 3 not supported"}};Bt[4]=function(){return{error:"GPOS Lookup 4 not supported"}};Bt[5]=function(){return{error:"GPOS Lookup 5 not supported"}};Bt[6]=function(){return{error:"GPOS Lookup 6 not supported"}};Bt[7]=function(){return{error:"GPOS Lookup 7 not supported"}};Bt[8]=function(){return{error:"GPOS Lookup 8 not supported"}};Bt[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function fL(e,n){n=n||0;var t=new B(e,n),r=t.parseVersion(1);return Ge.argument(r===1||r===1.1,"Unsupported GPOS table version "+r),r===1?{version:r,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(Bt)}:{version:r,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(Bt),variations:t.parseFeatureVariationsList()}}var dL=new Array(10);function pL(e){return new Re.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new Re.ScriptList(e.scripts)},{name:"features",type:"TABLE",value:new Re.FeatureList(e.features)},{name:"lookups",type:"TABLE",value:new Re.LookupList(e.lookups,dL)}])}var hL={parse:fL,make:pL};function mL(e){var n={};e.skip("uShort");var t=e.parseUShort();Ge.argument(t===0,"Unsupported kern sub-table version."),e.skip("uShort",2);var r=e.parseUShort();e.skip("uShort",3);for(var i=0;i<r;i+=1){var a=e.parseUShort(),o=e.parseUShort(),s=e.parseShort();n[a+","+o]=s}return n}function _L(e){var n={};e.skip("uShort");var t=e.parseULong();t>1&&console.warn("Only the first kern subtable is supported."),e.skip("uLong");var r=e.parseUShort(),i=r&255;if(e.skip("uShort"),i===0){var a=e.parseUShort();e.skip("uShort",3);for(var o=0;o<a;o+=1){var s=e.parseUShort(),l=e.parseUShort(),c=e.parseShort();n[s+","+l]=c}}return n}function gL(e,n){var t=new Ie.Parser(e,n),r=t.parseUShort();if(r===0)return mL(t);if(r===1)return _L(t);throw new Error("Unsupported kern table version ("+r+").")}var vL={parse:gL};function EL(e,n,t,r){for(var i=new Ie.Parser(e,n),a=r?i.parseUShort:i.parseULong,o=[],s=0;s<t+1;s+=1){var l=a.call(i);r&&(l*=2),o.push(l)}return o}var TL={parse:EL};function SL(e,n){var t=new XMLHttpRequest;t.open("get",e,!0),t.responseType="arraybuffer",t.onload=function(){return t.response?n(null,t.response):n("Font could not be loaded: "+t.statusText)},t.onerror=function(){n("Font could not be loaded")},t.send()}function Wu(e,n){for(var t=[],r=12,i=0;i<n;i+=1){var a=Ie.getTag(e,r),o=Ie.getULong(e,r+4),s=Ie.getULong(e,r+8),l=Ie.getULong(e,r+12);t.push({tag:a,checksum:o,offset:s,length:l,compression:!1}),r+=16}return t}function RL(e,n){for(var t=[],r=44,i=0;i<n;i+=1){var a=Ie.getTag(e,r),o=Ie.getULong(e,r+4),s=Ie.getULong(e,r+8),l=Ie.getULong(e,r+12),c=void 0;s<l?c="WOFF":c=!1,t.push({tag:a,offset:o,compression:c,compressedLength:s,length:l}),r+=20}return t}function Cn(e,n){if(n.compression==="WOFF"){var t=new Uint8Array(e.buffer,n.offset+2,n.compressedLength-2),r=new Uint8Array(n.length);if(dR(t,r),r.byteLength!==n.length)throw new Error("Decompression error: "+n.tag+" decompressed length doesn't match recorded length");var i=new DataView(r.buffer,0);return{data:i,offset:0}}else return{data:e,offset:n.offset}}function dp(e,n){n=n??{};var t,r,i=new Sn({empty:!0}),a=new DataView(e,0),o,s=[],l=Ie.getTag(a,0);if(l==="\0\0\0"||l==="true"||l==="typ1")i.outlinesFormat="truetype",o=Ie.getUShort(a,4),s=Wu(a,o);else if(l==="OTTO")i.outlinesFormat="cff",o=Ie.getUShort(a,4),s=Wu(a,o);else if(l==="wOFF"){var c=Ie.getTag(a,4);if(c==="\0\0\0")i.outlinesFormat="truetype";else if(c==="OTTO")i.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);o=Ie.getUShort(a,12),s=RL(a,o)}else throw new Error("Unsupported OpenType signature "+l);for(var u,f,d,p,_,g,m,h,T,v,E,L,I=0;I<o;I+=1){var x=s[I],b=void 0;switch(x.tag){case"cmap":b=Cn(a,x),i.tables.cmap=xd.parse(b.data,b.offset),i.encoding=new Id(i.tables.cmap);break;case"cvt ":b=Cn(a,x),L=new Ie.Parser(b.data,b.offset),i.tables.cvt=L.parseShortList(x.length/2);break;case"fvar":f=x;break;case"fpgm":b=Cn(a,x),L=new Ie.Parser(b.data,b.offset),i.tables.fpgm=L.parseByteList(x.length);break;case"head":b=Cn(a,x),i.tables.head=Hd.parse(b.data,b.offset),i.unitsPerEm=i.tables.head.unitsPerEm,t=i.tables.head.indexToLocFormat;break;case"hhea":b=Cn(a,x),i.tables.hhea=Gd.parse(b.data,b.offset),i.ascender=i.tables.hhea.ascender,i.descender=i.tables.hhea.descender,i.numberOfHMetrics=i.tables.hhea.numberOfHMetrics;break;case"hmtx":m=x;break;case"ltag":b=Cn(a,x),r=kd.parse(b.data,b.offset);break;case"COLR":b=Cn(a,x),i.tables.colr=Jd.parse(b.data,b.offset);break;case"CPAL":b=Cn(a,x),i.tables.cpal=$d.parse(b.data,b.offset);break;case"maxp":b=Cn(a,x),i.tables.maxp=Wd.parse(b.data,b.offset),i.numGlyphs=i.tables.maxp.numGlyphs;break;case"name":v=x;break;case"OS/2":b=Cn(a,x),i.tables.os2=Xs.parse(b.data,b.offset);break;case"post":b=Cn(a,x),i.tables.post=qd.parse(b.data,b.offset),i.glyphNames=new _l(i.tables.post);break;case"prep":b=Cn(a,x),L=new Ie.Parser(b.data,b.offset),i.tables.prep=L.parseByteList(x.length);break;case"glyf":d=x;break;case"loca":T=x;break;case"CFF ":u=x;break;case"kern":h=x;break;case"GDEF":p=x;break;case"GPOS":_=x;break;case"GSUB":g=x;break;case"meta":E=x;break}}var A=Cn(a,v);if(i.tables.name=Yd.parse(A.data,A.offset,r),i.names=i.tables.name,d&&T){var S=t===0,C=Cn(a,T),H=TL.parse(C.data,C.offset,i.numGlyphs,S),G=Cn(a,d);i.glyphs=rp.parse(G.data,G.offset,H,i,n)}else if(u){var V=Cn(a,u);Ud.parse(V.data,V.offset,i,n)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var q=Cn(a,m);if(Bd.parse(i,q.data,q.offset,i.numberOfHMetrics,i.numGlyphs,i.glyphs,n),NR(i,n),h){var k=Cn(a,h);i.kerningPairs=vL.parse(k.data,k.offset)}else i.kerningPairs={};if(p){var ee=Cn(a,p);i.tables.gdef=uL.parse(ee.data,ee.offset)}if(_){var X=Cn(a,_);i.tables.gpos=hL.parse(X.data,X.offset),i.position.init()}if(g){var le=Cn(a,g);i.tables.gsub=jd.parse(le.data,le.offset)}if(f){var me=Cn(a,f);i.tables.fvar=rL.parse(me.data,me.offset,i.names)}if(E){var _e=Cn(a,E);i.tables.meta=Zd.parse(_e.data,_e.offset),i.metas=i.tables.meta}return i}function AL(e,n,t){return t=t??{},new Promise(function(r,i){SL(e,function(a,o){if(a){if(n)return n(a);i(a)}var s;try{s=dp(o,t)}catch(l){if(n)return n(l,null);i(l)}if(n)return n(null,s);r(s)})})}var yL=Object.freeze({__proto__:null,Font:Sn,Glyph:Rt,Path:zn,BoundingBox:hr,_parse:Ie,parse:dp,load:AL});class LL extends Ii{constructor(n){super(n),this.reversed=!1}load(n,t,r,i){const a=this,o=new ha(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(n,function(s){try{t(a.parse(s))}catch(l){i?i(l):console.error(l),a.manager.itemError(n)}},r,i)}parse(n){function t(i,a){const o=Math.round,s={},l=1e5/((i.unitsPerEm||2048)*72),c=i.encoding.cmap.glyphIndexMap,u=Object.keys(c);for(let f=0;f<u.length;f++){const d=u[f],p=i.glyphs.glyphs[c[d]];if(d!==void 0){const _={ha:o(p.advanceWidth*l),x_min:o(p.xMin*l),x_max:o(p.xMax*l),o:""};a&&(p.path.commands=r(p.path.commands)),p.path.commands.forEach(function(g){g.type.toLowerCase()==="c"&&(g.type="b"),_.o+=g.type.toLowerCase()+" ",g.x!==void 0&&g.y!==void 0&&(_.o+=o(g.x*l)+" "+o(g.y*l)+" "),g.x1!==void 0&&g.y1!==void 0&&(_.o+=o(g.x1*l)+" "+o(g.y1*l)+" "),g.x2!==void 0&&g.y2!==void 0&&(_.o+=o(g.x2*l)+" "+o(g.y2*l)+" ")}),s[String.fromCodePoint(p.unicode)]=_}}return{glyphs:s,familyName:i.getEnglishName("fullName"),ascender:o(i.ascender*l),descender:o(i.descender*l),underlinePosition:i.tables.post.underlinePosition,underlineThickness:i.tables.post.underlineThickness,boundingBox:{xMin:i.tables.head.xMin,xMax:i.tables.head.xMax,yMin:i.tables.head.yMin,yMax:i.tables.head.yMax},resolution:1e3,original_font_information:i.tables.name}}function r(i){const a=[];let o;i.forEach(function(l){l.type.toLowerCase()==="m"?(o=[l],a.push(o)):l.type.toLowerCase()!=="z"&&o.push(l)});const s=[];return a.forEach(function(l){const c={type:"m",x:l[l.length-1].x,y:l[l.length-1].y};s.push(c);for(let u=l.length-1;u>0;u--){const f=l[u],d={type:f.type};f.x2!==void 0&&f.y2!==void 0?(d.x1=f.x2,d.y1=f.y2,d.x2=f.x1,d.y2=f.y1):f.x1!==void 0&&f.y1!==void 0&&(d.x1=f.x1,d.y1=f.y1),d.x=l[u-1].x,d.y=l[u-1].y,s.push(d)}}),s}return t(yL.parse(n),this.reversed)}}class bo extends on{constructor(){const n=bo.SkyShader,t=new dr({name:n.name,uniforms:Eo.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tt,depthWrite:!1});super(new ri(1,1,1),t),this.isSky=!0}}bo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new ce},up:{value:new ce(0,1,0)}},vertexShader:`
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

		}`};class Pi{static createButton(n,t={}){const r=document.createElement("button");function i(){let c=null;async function u(p){p.addEventListener("end",f),await n.xr.setSession(p),r.textContent="EXIT VR",c=p}function f(){c.removeEventListener("end",f),r.textContent="ENTER VR",c=null}r.style.display="",r.style.cursor="pointer",r.style.left="calc(50% - 50px)",r.style.width="100px",r.textContent="ENTER VR";const d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};r.onmouseenter=function(){r.style.opacity="1.0"},r.onmouseleave=function(){r.style.opacity="0.5"},r.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",d).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(u).catch(p=>{console.warn(p)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(u).catch(p=>{console.warn(p)})}function a(){r.style.display="",r.style.cursor="auto",r.style.left="calc(50% - 75px)",r.style.width="150px",r.onmouseenter=null,r.onmouseleave=null,r.onclick=null}function o(){a(),r.textContent="VR NOT SUPPORTED"}function s(c){a(),console.warn("Exception when trying to call xr.isSessionSupported",c),r.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return r.id="VRButton",r.style.display="none",l(r),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():o(),c&&Pi.xrSessionIsGranted&&r.click()}).catch(s),r;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Pi.xrSessionIsGranted=!0})}}}Pi.xrSessionIsGranted=!1;Pi.registerSessionGrantedListener();const Fn={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function pp(e){const n=await fetch(e);if(n.ok)return n.json();throw new Error(n.statusText)}async function xL(e){if(!e)throw new Error("No basePath supplied");return await pp(`${e}/profilesList.json`)}async function ML(e,n,t=null,r=!0){if(!e)throw new Error("No xrInputSource supplied");if(!n)throw new Error("No basePath supplied");const i=await xL(n);let a;if(e.profiles.some(l=>{const c=i[l];return c&&(a={profileId:l,profilePath:`${n}/${c.path}`,deprecated:!!c.deprecated}),!!a}),!a){if(!t)throw new Error("No matching profile name found");const l=i[t];if(!l)throw new Error(`No matching profile name found and default profile "${t}" missing.`);a={profileId:t,profilePath:`${n}/${l.path}`,deprecated:!!l.deprecated}}const o=await pp(a.profilePath);let s;if(r){let l;if(e.handedness==="any"?l=o.layouts[Object.keys(o.layouts)[0]]:l=o.layouts[e.handedness],!l)throw new Error(`No matching handedness, ${e.handedness}, in profile ${a.profileId}`);l.assetPath&&(s=a.profilePath.replace("profile.json",l.assetPath))}return{profile:o,assetPath:s}}const IL={xAxis:0,yAxis:0,button:0,state:Fn.ComponentState.DEFAULT};function bL(e=0,n=0){let t=e,r=n;if(Math.sqrt(e*e+n*n)>1){const o=Math.atan2(n,e);t=Math.cos(o),r=Math.sin(o)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:r*.5+.5}}class OL{constructor(n){this.componentProperty=n.componentProperty,this.states=n.states,this.valueNodeName=n.valueNodeName,this.valueNodeProperty=n.valueNodeProperty,this.valueNodeProperty===Fn.VisualResponseProperty.TRANSFORM&&(this.minNodeName=n.minNodeName,this.maxNodeName=n.maxNodeName),this.value=0,this.updateFromComponent(IL)}updateFromComponent({xAxis:n,yAxis:t,button:r,state:i}){const{normalizedXAxis:a,normalizedYAxis:o}=bL(n,t);switch(this.componentProperty){case Fn.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?a:.5;break;case Fn.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?o:.5;break;case Fn.ComponentProperty.BUTTON:this.value=this.states.includes(i)?r:0;break;case Fn.ComponentProperty.STATE:this.valueNodeProperty===Fn.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class CL{constructor(n,t){if(!n||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=n,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(r=>{const i=new OL(t.visualResponses[r]);this.visualResponses[r]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:Fn.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(n){if(this.values.state=Fn.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&n.buttons.length>this.gamepadIndices.button){const t=n.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=Fn.ComponentState.PRESSED:(t.touched||this.values.button>Fn.ButtonTouchThreshold)&&(this.values.state=Fn.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&n.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=n.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===Fn.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>Fn.AxisTouchThreshold&&(this.values.state=Fn.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&n.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=n.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===Fn.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>Fn.AxisTouchThreshold&&(this.values.state=Fn.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class PL{constructor(n,t,r){if(!n)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=n,this.assetUrl=r,this.id=t.profileId,this.layoutDescription=t.layouts[n.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const a=this.layoutDescription.components[i];this.components[i]=new CL(i,a)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const n=[];return Object.values(this.components).forEach(t=>{n.push(t.data)}),n}updateFromGamepad(){Object.values(this.components).forEach(n=>{n.updateFromGamepad(this.xrInputSource.gamepad)})}}const NL="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",wL="generic-trigger";class FL extends Pn{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(n){return this.envMap==n?this:(this.envMap=n,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(n){super.updateMatrixWorld(n),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(r=>{const{valueNode:i,minNode:a,maxNode:o,value:s,valueNodeProperty:l}=r;i&&(l===Fn.VisualResponseProperty.VISIBILITY?i.visible=s:l===Fn.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(a.quaternion,o.quaternion,s),i.position.lerpVectors(a.position,o.position,s)))})}))}}function DL(e,n){Object.values(e.components).forEach(t=>{const{type:r,touchPointNodeName:i,visualResponses:a}=t;if(r===Fn.ComponentType.TOUCHPAD)if(t.touchPointNode=n.getObjectByName(i),t.touchPointNode){const o=new Lo(.001),s=new Dn({color:255}),l=new on(o,s);t.touchPointNode.add(l)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(a).forEach(o=>{const{valueNodeName:s,minNodeName:l,maxNodeName:c,valueNodeProperty:u}=o;if(u===Fn.VisualResponseProperty.TRANSFORM){if(o.minNode=n.getObjectByName(l),o.maxNode=n.getObjectByName(c),!o.minNode){console.warn(`Could not find ${l} in the model`);return}if(!o.maxNode){console.warn(`Could not find ${c} in the model`);return}}o.valueNode=n.getObjectByName(s),o.valueNode||console.warn(`Could not find ${s} in the model`)})})}function zu(e,n){DL(e.motionController,n),e.envMap&&n.traverse(t=>{t.isMesh&&(t.material.envMap=e.envMap,t.material.needsUpdate=!0)}),e.add(n)}class UL{constructor(n=null,t=null){this.gltfLoader=n,this.path=NL,this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new yS)}setPath(n){return this.path=n,this}createControllerModel(n){const t=new FL;let r=null;return n.addEventListener("connected",i=>{const a=i.data;a.targetRayMode!=="tracked-pointer"||!a.gamepad||a.hand||ML(a,this.path,wL).then(({profile:o,assetPath:s})=>{t.motionController=new PL(a,o,s);const l=this._assetCache[t.motionController.assetUrl];if(l)r=l.scene.clone(),zu(t,r),this.onLoad&&this.onLoad(r);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,c=>{this._assetCache[t.motionController.assetUrl]=c,r=c.scene.clone(),zu(t,r),this.onLoad&&this.onLoad(r)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(o=>{console.warn(o)})}),n.addEventListener("disconnected",()=>{t.motionController=null,t.remove(r),r=null}),t}}const HL="/assets/fabric_190_Albedo-1K-HSpa-1hU.png",GL="/assets/fabric_190_AmbientOcclusion-1K-3FW3CGUr.png",BL="/assets/fabric_190_Height-1K-EsEO1BHO.png",kL="/assets/fabric_190_Normal-1K-Cnw0HIKM.png",WL="/assets/fabric_190_Roughness-1K-BL2uDr8A.png",zL="/assets/uv_grid_opengl-CxHLLdXG.jpg",VL="/assets/Logo-DrPUxpL3.png",XL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK0AAAA5CAYAAABEWKsWAAAPYElEQVR4nO2de7RdRX3HP78kN8klQABNeBUIaBAfyyA+grRWRHkU7IJFE3RJ1YhGI9IuimVBFYWFGMFShVZsoUaCVi2VFGOsElwUyitSIN4ECfISCSgQBZOUPO7z2z9m9j1z5+59zp59zn0kOd+1Zs3s2TO/+e19fmfmN7/5zWxjlCBpD+BdwDHAHWZ2i6T9gaeBDqAb2Aw8CTwK/MyX++UI8TMBmGxm20eC/niCJAOmmtm2seZl3EPSJEmnS/qhpB453CNpkr9/lRrjcUkXS9q7xbzN8jx91f+oOyUkvUvSbyRdNda8jGt4YV0o6VeRAG6VNNuXmSFpWwmhzXBsi3mcFdA+tZW0xwskTZD0W/+MO43QTmg1QUnvALqA64BDo9ufM7PHfXoRMDWB9GZP/1hJl0varWlma3hjC2mNJ+wJ7D/WTLQaLRNaSRMlXQ78D/D6nCJrgat92Q6c0KZgwMczgAuAByXNqchujIktotPGKKAlQitpOvBTnDAV6YfnmlmfT58GHJDYzEs+nu7jI4BVkuYl0mljB8ekZglImgncBryhTrFbzez24Pqjic30A8/79L5Bfidwo6RzzOyfE2mGmCnpPNwfYXKJ8uuBZWa2pqiApJOAk4EDadyTbwQeBL5lZpsK6O0NfAh4M27Yr4c+4FngzgJas4FPAV8xs/UNaIX1pgJnA8+b2XfL1htXkDRd0poSk6i3BXUOlNSfMAGTpMeD+tcXlPlgIu+zCuik4Go501n8Tn5Skd4GSX+aw+t7JL3YJK9XBe//Dz7vyMR3dlNIa6xQWT2QM1vdTONJzO1m9r/B9fuDdtcDpwKHAEvr0AjrH1ZQZomk9zTgpdX4a+CzUd4NwEm4ieOmkiHU11dIGpzASnoNsBzYI4Heljo8nwLslfqgkjqB01PrjStIWlzyH/7eqN7dPv9FSYcE+Z2SNhfQWOjLTJC0qU5bL0jaryT/YU97ScJzd0g6UdLvfN1t8jZkSXMDmqUFQ9I0SVcEdZcE977l85aWpefrvV7SuoBm1tOeG+SV7mkl7RXTGitU6mnlhrALSxR9FvhxUG8/3IoYwOfN7Onsnl+t+UUOjQFcTwNOb66nz80EvlmCr8ows14zWwn8nc+aCmRD+gkVaW4xswtwpkKAE4Pbx1ek+TDwV1XqjnckC62cWvB1iq0EIa43s4Hg+gRfbzv56kCe3Xa5mW3w6WNLtPlnkkZjGOsK0tlq3SuapLnWx6FttdTIUYDCieKOjCo97ULy7bB5+F50nfUga8xsiN4l55uQR/eKIF125eorcrbgkURf4yLJkI9bZT8fCR7HHEkvx/eyF5Qs/qiZPRLlHevjP+SU/yDDzU3fM7P7fNv7Ua6nBTex+0DJsrsyWr4iOhpIZXo+TiDKYEV4ITfpyhYUXqfASUXO2+uSqP4zwDnB9SLS+P3bhLK7EjYE6deNGRdNIFVoP5RQ9rboem6QPhj4rNzS71zgv3Hmngy/B04xs5dg0NxydiKvb5D0psQ6rUSrl4ab9UTL5hZ34BZrAK6QdHSTdEcdpYVW0iuBsnbQAWBVlBfbc78A9OL8Zo8I8p8Cjjezh4K88xkq1GVRT0XYGqRjx55UZPr55iDvtU3QeyFIv+jjw5ugN0jTzH4LfM3nHYBbCt8maWO9gPN73rEgaV6hdXQ41ubU/2GDOgOSviFpn6jeYZK2JLQdoivmI6L9mC/XI+mUxPdxpK/bL+kAn3d80Pa9cn/0FJpLfd3vB3k/CGh+Sgm+vxpqW/3jIH+yavbfKhhTO23KC/gabr26DG40s/dH9deR3/tsxVkZ/iley5c0EbgLeHtZPiMIeGWmZgy7KS0Arg+yfoNTTcqgE9f7XWdmn/D0DDfCZKrQduAJasNxIxyMW/maa2arPc2jgXuojYrPMVQvLcJuOBPiQcCdZvbOuIAX5NNw85Qin4te3PzibmCZz7vazM4t80BjCkl3JfwTP59T/zlJv5a0Wm4N+1K5NfVCn1pJX2+iN8gw7MeK2ri8Cdo/kdO3Q3oHaehKVAp6JJ2Zw+NHJfVWpLlGbqLbFDSOVsRSvLxek1D20TjDzJJenKQvAp9MqVOA2Tgf31yY2YWSVgBn4WbTnUVlPXpx+t2NwE1mpvCmmT0j6c3AR3Dr/PvTeO6wGVgNXBM4yYc0l0i6F/c+jgJ2b0CvH9cj/xewxMx6GpQvg3CRI3fkGleQ04FScFwTbXVIuqZir5KHS1r4KnZJSJoiaVnwTk8aS37K9rTTEuk+37jIcMj5eS6l5p/QCkxvXGTXhH/fF1J/+XkKrnef6a+7gFtHmLW6KCu0qT982ckM4PQl4NO4BYGUfWNlMKXF9HYKSJqGU5tS1Lb1wLzIn2TUUVZoc73p66CUDiW3x2sBTp9s5I1fFd0jRHdHx9twFoZGv20fzqqyArfTYdT0WTm3gUPM7Mkwv6zQvtxCRgznOPNJ4N2kqx6p2DjC9HdI+O1Pyc7gowWvuqzETVKH+P2WWhEzs16GrtJUhpnJzG4xs1NxL+0Y4DKc7+1IYKTotjGyuIyClcoU34PHEsqW0oHNrM/MVpnZ54BZwBnArxLaKYNhJqQ2dggULlun2GnXAu8oWXYGiWvVZtYPfF/ScmAxbmLWLAao4wgt6WRqs+Ky2I77Yz1QNCGR2+z4dtx+tiqOM91mFvsiI+kw4C04XbQeBnB66N1mVqjTy604zsWtiDWasG4E1ppZ3U5F0r64HcOp7xXgCTO726dDL8BX4HTwfXNr1WEmxffgxMYUG7b3AdXO/6qKBxq08W9N0H4q7zklHS7poVbyLWk/ST+qQOf3knI98yS9V9LTFWjeKumPcujtLmmJnA9JVSwO6HX5vK2StgdlnksRon1UfilxQWnC9dtM+aPk4UsN6L9RzW3N7lcguHKbM59qkudtEc29JD3aJM1F0XOfruaE62m58y4yepMk3dkkj4/J9dIZza6cMj2S5pdWD8zsJUkrcUuTjTDMMUbSW3F6SuZi+DLODXG1meXtZMDMbpL7932mLJ8Rhg2xEf21ckPukZR3HtoDt9ftHNyc4DpJr/aT1TNwujnAn5NudRHwsJmFdu4Lce9tJXB5STqZenIRzu59paT/NLMNcr4S1+CedyHOoacMZuAc8Y/DOfZcSu1oq4/gVMc1QBVHmn7g/oJjV58EPubTj5hZmkFA0l+U/Ncsz6n784KyA3LHf35Y/gjQqF6Hqg23dd0Sm4XcEaEZ3unzrgzyktwS67TzlKe3tELdhQE/Z/m8k4O81MM6wt9iY5B/m8+7I5XHOm1lPe2w3zF158JynOQ3Qt42jnUFZQ1n9loKrJXbyVC76Xqw8xN4zPD3FeqkYGWQnuXjcMQ4rUXtlN3elIdwy9NsH1d2ePe/xU/95XTVznZohsdkJJ3lZWZ9kr4MXNug6Ksk7ROtnjxUWLqG1wJ3SVoQnhXlTw2/H3hrSVafwHlhFcK/8GZ8QmcF6Uy1uBm3I8OAf5X0aaqtyP2fmWWWmma22YTDbea9Fu5SXiQp1U/kqJy8ps+ES0GVxpbgVrPqDS2GO8DiB0HegyXpdwDflrTFzEI141rKC+15wQmNRdgLuLgkvVIws3WSLgK+6LOOqFe+DlKXzaviE6PUTkuRLLRm1i/pbJwnez31Ihba+3D2wzIqyQTgeklzzOwZn7cM+JcSPK8wsxUNyowYzGyxpNXAx3FDcUpPeTC1gz/aKEClbt3MVkm6lOHbvkMM2TFgZpsl/RxneC6DvYErgff5+hslraL+AsdzOOebVHyB9OOUjqbAOmFmtwC3pDLhJ1sfTq3XBE6heK5RBpsbF2k9mtFFLsOZVYoWEo6SdHB0/ultlBdagDMkLQ72jt1DsdD2AmdE5qJ6CNUHM7NfJ/CFpFlR261Enpdcsz1wNtsPv3CzJfW5C5DpzqPiu1z5hBG/7DqP+rrq/Oj6RxWaCg3jDxeUGQDODJYAy+B5aj/kXzZposo7OK8Z5D3nuyU1s4082yEd0l6k1nzZJ3v+OQp2/Y4UmmZY0gyc+SfvYIz7zOzooOxE3Jp4yhryJtyO2j5Jx+B62xADwFlmdkMa5yDpH4Dz/OWzOL25rCvjLNxQfq+ZhduzZwNnUs3t7wScBeV9ZvYfnl64B20TTiUpa2CfijvGaj1wuJl1y/lFrKF2cvvPcDuet+aTGIZ+4MdmNthZSTqBmglwG/Dvvs2y6ANu9ic9ZjS7gDm4c9+S7MmloPqnXx8Slf1qQbl6+BNfd/8of7Oi828T+Z4m6YEK/GR4Qf4TU57eoap/fm4ZfCPisVlskX9/Ac05qp0GXgX9ko6PaFb5XUNsVXAikGqLC9+p+vs2hNwRRxdL6ouYuSQq96YKD3SRr9sZ5HVJqmpSCvmZJunLckfHl8UWSd+WdFBE6zMVni3DOkkfUzRcB/cfk/REAr0eSSsk5X4LQ9KrJN0sqbsiv8MsNJIWSHqkIj3Jna2R0eqSdL+kA+N2Wv6lQklvwZ1fm9lUnwUODe2mkh6i/odFYiwzs3m+7jbc8Z+LW7Q1ehByTiCN3P66gQ1ep4/rd1JtT9r2os+dSoPqwQ1mtkDSnsA+eWUD9AK/K/N+5M6dmEn6/Ga7meUuTEjaHagyR3g5m0hL2tPMRs86IckkzZf0S/8Pmh/d/3jiP/AXQd2Dhre48yJ4B818vaeNsvDCe5ykv4nyO1X7ZkEjrJVbDt0lEbyH1I8FttFqSDpf7qikLXKeXhvlPJpul3StnH40a6z5HGtIelnSP8pZXtpoY/xDO/EX0ttoo4022hivaGro8UPXhDrBctIWhDw+FKWzHa8DwXWcHhbi0wzb2HlQKLRe8Z+Ac6qZ6OMs3RFcF4WJQRyGWKjzeMgEMhTM/ij0BXFR6A3K9cZ1x/pMqjaqwWCwxwwFrSMKk4M4L0wJ0h0515M93SzOQii84IQ0C304Yc2ELxPAHp/uDuKenNAdlesJ4p6AXhZngtzuocc5zPeomaCGAjuFoYI6pSBM9SFLdwZ5YdgtuB+W6fT0J+J6wW6cq9s2H7bnxHE6Dt1ByK57grxYeHsIeui81a42xg8mURt686AoLhqmwx5vOzUBzoQ/63nDXjvs2UMVYSCinQlW2EZ3Tjovr4finrg3CINqRltgxz+G6ZNyrmuZ/hnrsHFvXJRfpONmOm2o28Z6baYe9AdxLMh5emsYF6WzeIhO3FYJdiwkWQ9yrAWhEMYCOdHTL5p85VkRBpsKQmg9iAU5nKSFgh3nqS2YOw/+H4FGp4Fp4JlxAAAAAElFTkSuQmCC";let Al,hp;async function KL(){const e=new sl,[n,t,r,i,a,o,s,l]=await Promise.all([e.loadAsync(HL),e.loadAsync(GL),e.loadAsync(BL),e.loadAsync(kL),e.loadAsync(WL),e.loadAsync(zL),e.loadAsync(VL),e.loadAsync(XL)]);new Ya({aoMap:t,displacementMap:r,displacementScale:5,map:n,normalMap:i,bumpMap:a,bumpScale:1.3}),Al=s,hp=l}const YL="/assets/button-4-214382-E-AwFSJf.mp3",qL="/assets/crowd-of-people-talking-29054-BKsR_Ad7.mp3",jL="/assets/welcome-Crt9nPRG.mp3",Zi={};async function ZL(){const e=new km,[n,t,r]=await Promise.all([e.loadAsync(YL),e.loadAsync(qL),e.loadAsync(jL)]);Zi.button4=n,Zi.crowdOfPeopleTalking=t,Zi.welcome=r}const JL="/assets/pirouette-eR-zdDdj.bvh",$L="/assets/01_14-BMk7wjs3.bvh",QL="/assets/05_06-Ox2sEzJV.bvh",ex="/assets/25_01-CMRfgY19.bvh",nx="/assets/35_21-BC7Dj7mm.bvh",tx="/assets/35_30-kYap0SP8.bvh",rx="/assets/137_16-Cwoyb09B.bvh",ix="/assets/141_29-Bt9h8-OO.bvh",ax="/assets/144_33-FuDkc03y.bvh",Yt={};async function ox(){const e=new cS,[n,t,r,i,a,o,s,l,c]=await Promise.all([e.loadAsync(JL),e.loadAsync($L),e.loadAsync(QL),e.loadAsync(ex),e.loadAsync(nx),e.loadAsync(tx),e.loadAsync(rx),e.loadAsync(ix),e.loadAsync(ax)]);Yt.pirouette=n,Yt.animation0114=t,Yt.animation0506=r,Yt.animation2501=i,Yt.animation3521=a,Yt.animation3530=o,Yt.animation13716=s,Yt.animation14129=l,Yt.animation14433=c}var sx={2:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.GltfBuilder=void 0;var r=t(902),i=t(490),a=function(){function o(){this.buffers=[],this.bufferViews=[],this.accessors=[],this.meshes=[],this.nodes=[],this.materials=[],this.sceneNodes=[]}return o.prototype.typedArrayToBase64=function(s){var l,c=new Uint8Array(s.buffer);if(typeof Buffer<"u")l=Buffer.from(c).toString("base64");else{var u="";c.forEach(function(f){return u+=String.fromCharCode(f)}),l=btoa(u)}return{base64String:l,byteLength:c.byteLength}},o.prototype.createBuffer=function(s){var l=s.base64String,c=s.byteLength,u={uri:"data:application/octet-stream;base64,".concat(l),byteLength:c};return this.addBuffer(u)},o.prototype.addBuffer=function(s){return this.buffers.push(s),this.buffers.length-1},o.prototype.createBufferView=function(s,l,c){var u={buffer:s,byteOffset:0,byteLength:l.byteLength,target:c};return this.addBufferView(u)},o.prototype.addBufferView=function(s){return this.bufferViews.push(s),this.bufferViews.length-1},o.prototype.createMaterial=function(s){var l={name:"some_material",pbrMetallicRoughness:{baseColorFactor:s}};return this.addMaterial(l)},o.prototype.addMaterial=function(s){return this.materials.push(s),this.materials.length-1},o.prototype.createAccessorVec3=function(s,l,c){var u={bufferView:s,byteOffset:0,componentType:5126,count:l,type:"VEC3",max:[c.max[0],c.max[1],c.max[2]],min:[c.min[0],c.min[1],c.min[2]]};return this.addAccessor(u)},o.prototype.createAccessorScalar=function(s,l){var c={bufferView:s,byteOffset:0,componentType:5123,count:l,type:"SCALAR"};return this.addAccessor(c)},o.prototype.addAccessor=function(s){return this.accessors.push(s),this.accessors.length-1},o.prototype.addMesh=function(s){return this.meshes.push(s),this.meshes.length-1},o.prototype.addNode=function(s){return this.nodes.push(s),this.nodes.length-1},o.prototype.addSceneNode=function(s){this.sceneNodes.push(s)},o.prototype.createGltfPoints=function(s,l){var c=s.verticesCount,u=s.extent,f=s.vertices,d=this.typedArrayToBase64(f),p=this.createBuffer(d),_=this.createBufferView(p,d,i.BufferViewTarget.ARRAY_BUFFER),g=this.createAccessorVec3(_,c,u),m=l||(0,r.createRandomBaseColorFactor)(),h=this.createMaterial(m),T=this.addMesh({primitives:[{attributes:{POSITION:g},material:h,mode:0}]}),v=this.addNode({mesh:T});this.addSceneNode(v)},o.prototype.createGltfLines=function(s,l,c){var u=s.vertices,f=s.verticesCount,d=s.indexes,p=s.indexesCount,_=s.extent,g=this.typedArrayToBase64(u),m=this.typedArrayToBase64(d),h=this.createBuffer(g),T=this.createBuffer(m),v=this.createBufferView(h,g,i.BufferViewTarget.ARRAY_BUFFER),E=this.createBufferView(T,m,i.BufferViewTarget.ELEMENT_ARRAY_BUFFER),L=this.createAccessorVec3(v,f,_),I=this.createAccessorScalar(E,p),x=c||(0,r.createRandomBaseColorFactor)(),b=this.createMaterial(x),A=this.addMesh({primitives:[{attributes:{POSITION:L},indices:I,material:b,mode:l}]}),S=this.addNode({mesh:A});this.addSceneNode(S)},o.prototype.createGltfTriangles=function(s,l,c){var u=s.vertices,f=s.verticesCount,d=s.indexes,p=s.indexesCount,_=s.normals,g=s.normalsCount,m=s.extent,h=this.typedArrayToBase64(u),T=this.typedArrayToBase64(d),v=this.typedArrayToBase64(_),E=this.createBuffer(h),L=this.createBuffer(T),I=this.createBuffer(v),x=this.createBufferView(E,h,i.BufferViewTarget.ARRAY_BUFFER),b=this.createBufferView(L,T,i.BufferViewTarget.ELEMENT_ARRAY_BUFFER),A=this.createBufferView(I,v,i.BufferViewTarget.ARRAY_BUFFER),S=this.createAccessorVec3(x,f,m),C=this.createAccessorScalar(b,p),H=this.createAccessorVec3(A,g,m),G=c||(0,r.createRandomBaseColorFactor)(),V=this.createMaterial(G),q=this.addMesh({primitives:[{attributes:{POSITION:S,NORMAL:H},indices:C,material:V,mode:l}]}),k=this.addNode({mesh:q});this.addSceneNode(k)},o.prototype.build=function(){return{scene:0,scenes:[{nodes:this.sceneNodes}],nodes:this.nodes,meshes:this.meshes,buffers:this.buffers,bufferViews:this.bufferViews,accessors:this.accessors,materials:this.materials,asset:{version:"2.0"}}},o}();n.GltfBuilder=a},82:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.LinesBuilder=void 0;var r=t(71),i=t(457),a=t(425),o=t(818),s=function(){function l(c,u,f,d,p){f===void 0&&(f=1),this.verticesCount=c,this.indexesCount=u,this.scale=f,this.mode=d,this.baseColorFactor=p,this.indexCounter=-1,this.vertexCounter=-1,this.vertices=new Float32Array(3*c),this.indexes=new Uint16Array(u),this.extent=(0,a.initialiseExtent)()}return l.prototype.addIndex=function(c){return this.indexCounter++,this.indexes[this.indexCounter]=c,this.indexCounter},l.prototype.addVertex=function(c){this.vertexCounter++;var u=Array.isArray(c)?c:(0,i.convertPointObjectToPoint)(c);u=(0,o.scalePoint)(u,this.scale),(0,r.checkExtents)(u,this.extent);var f=3*this.vertexCounter,d=u[0],p=u[1],_=u[2];return this.vertices[f]=d,this.vertices[f+1]=p,this.vertices[f+2]=_,this.vertexCounter},l.prototype.addLine=function(c,u){var f=this.addVertex(c),d=this.addVertex(u);this.addIndex(f),this.addIndex(d)},l.prototype.build=function(){var c=this,u=c.verticesCount,f=c.indexesCount,d=c.extent;return{verticesCount:u,indexesCount:f,vertices:c.vertices,indexes:c.indexes,extent:d}},l.prototype.buildGltf=function(c){c.createGltfLines(this.build(),this.mode,this.baseColorFactor)},l}();n.LinesBuilder=s},732:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.PointsBuilder=void 0;var r=t(71),i=t(457),a=t(425),o=t(818),s=function(){function l(c,u,f){u===void 0&&(u=1),this.verticesCount=c,this.scale=u,this.baseColorFactor=f,this.vertexCounter=-1,this.verticesCount=c,this.vertices=new Float32Array(3*c),this.extent=(0,a.initialiseExtent)(),this.scale=u}return l.prototype.addVertex=function(c){this.vertexCounter++;var u=Array.isArray(c)?c:(0,i.convertPointObjectToPoint)(c);u=(0,o.scalePoint)(u,this.scale),(0,r.checkExtents)(u,this.extent);var f=3*this.vertexCounter,d=u[0],p=u[1],_=u[2];return this.vertices[f]=d,this.vertices[f+1]=p,this.vertices[f+2]=_,this.vertexCounter},l.prototype.addVertices=function(c){var u=this;c.map(function(f){return u.addVertex(f)})},l.prototype.build=function(){var c=this,u=c.verticesCount,f=c.extent;return{verticesCount:u,vertices:c.vertices,extent:f}},l.prototype.buildGltf=function(c){c.createGltfPoints(this.build(),this.baseColorFactor)},l}();n.PointsBuilder=s},920:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.TrianglesBuilder=void 0;var r=t(71),i=t(457),a=t(425),o=t(818),s=function(){function l(c,u,f,d,p,_){d===void 0&&(d=1),this.verticesCount=c,this.indexesCount=u,this.normalsCount=f,this.scale=d,this.mode=p,this.baseColorFactor=_,this.vertexCounter=-1,this.indexCounter=-1,this.normalCounter=-1,this.vertices=new Float32Array(3*c),this.indexes=new Uint16Array(u),this.normals=new Float32Array(3*f),this.extent=(0,a.initialiseExtent)()}return l.prototype.addIndex=function(c){return this.indexCounter++,this.indexes[this.indexCounter]=c,this.indexCounter},l.prototype.addVertex=function(c){this.vertexCounter++;var u=Array.isArray(c)?c:(0,i.convertPointObjectToPoint)(c),f=3*this.vertexCounter;u=(0,o.scalePoint)(u,this.scale),(0,r.checkExtents)(u,this.extent);var d=u[0],p=u[1],_=u[2];return this.vertices[f]=d,this.vertices[f+1]=p,this.vertices[f+2]=_,this.vertexCounter},l.prototype.addNormal=function(c){this.normalCounter++;var u=Array.isArray(c)?c:(0,i.convertPointObjectToPoint)(c),f=3*this.normalCounter,d=u[0],p=u[1],_=u[2];return this.normals[f]=d,this.normals[f+1]=p,this.normals[f+2]=_,this.normalCounter},l.prototype.addTriangle=function(c,u,f){var d=this.addVertex(c),p=this.addVertex(u),_=this.addVertex(f);this.addIndex(d),this.addIndex(p),this.addIndex(_)},l.prototype.build=function(){var c=this;return{verticesCount:c.verticesCount,indexesCount:c.indexesCount,normalsCount:c.normalsCount,vertices:c.vertices,indexes:c.indexes,normals:c.normals,extent:c.extent}},l.prototype.buildGltf=function(c){c.createGltfTriangles(this.build(),this.mode,this.baseColorFactor)},l}();n.TrianglesBuilder=s},71:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.checkExtents=void 0,n.checkExtents=function(t,r){t[0]<r.min[0]&&(r.min[0]=t[0]),t[1]<r.min[1]&&(r.min[1]=t[1]),t[2]<r.min[2]&&(r.min[2]=t[2]),t[0]>r.max[0]&&(r.max[0]=t[0]),t[1]>r.max[1]&&(r.max[1]=t[1]),t[2]>r.max[2]&&(r.max[2]=t[2])}},457:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.convertPointObjectToPoint=void 0,n.convertPointObjectToPoint=function(t){return[t.x,t.y,t.z]}},902:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.createRandomBaseColorFactor=void 0,n.createRandomBaseColorFactor=function(){return[Math.random(),Math.random(),Math.random(),Math.random()]}},425:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.initialiseExtent=void 0;var t=1e6;n.initialiseExtent=function(){return{min:[t,t,t],max:[-1e6,-1e6,-1e6]}}},818:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.scalePoint=void 0,n.scalePoint=function(t,r){return[t[0]/r,t[1]/r,t[2]/r]}},821:(e,n,t)=>{n.rl=n.xO=n.Vv=n.T3=n.NE=n.dT=n.Zh=void 0;var r=t(2);Object.defineProperty(n,"Zh",{enumerable:!0,get:function(){return r.GltfBuilder}});var i=t(82);Object.defineProperty(n,"dT",{enumerable:!0,get:function(){return i.LinesBuilder}});var a=t(732);Object.defineProperty(n,"NE",{enumerable:!0,get:function(){return a.PointsBuilder}});var o=t(920);Object.defineProperty(n,"T3",{enumerable:!0,get:function(){return o.TrianglesBuilder}});var s=t(490);Object.defineProperty(n,"Vv",{enumerable:!0,get:function(){return s.LineType}}),Object.defineProperty(n,"xO",{enumerable:!0,get:function(){return s.TriangleType}});var l=t(902);Object.defineProperty(n,"rl",{enumerable:!0,get:function(){return l.createRandomBaseColorFactor}})},490:(e,n)=>{var t,r,i;Object.defineProperty(n,"__esModule",{value:!0}),n.BufferViewTarget=n.TriangleType=n.LineType=n.scale=void 0,n.scale=1e4,function(a){a[a.LINES=1]="LINES",a[a.LINE_LOOP=2]="LINE_LOOP",a[a.LINE_STRIP=3]="LINE_STRIP"}(t||(n.LineType=t={})),function(a){a[a.TRIANGLES=4]="TRIANGLES",a[a.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",a[a.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(r||(n.TriangleType=r={})),function(a){a[a.ARRAY_BUFFER=34962]="ARRAY_BUFFER",a[a.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(i||(n.BufferViewTarget=i={}))}},Vu={};function Xr(e){var n=Vu[e];if(n!==void 0)return n.exports;var t=Vu[e]={exports:{}};return sx[e](t,t.exports,Xr),t.exports}Xr.d=(e,n)=>{for(var t in n)Xr.o(n,t)&&!Xr.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},Xr.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var U,at={};Xr.d(at,{wx:()=>fM,L7:()=>U,eF:()=>Kx,Ep:()=>Fx,uT:()=>mM,lw:()=>wx,u2:()=>Mp,GO:()=>kx,S5:()=>vi,xM:()=>yl,lo:()=>Nx,jB:()=>zx,yZ:()=>Px,qu:()=>Vx,hC:()=>Cp}),function(e){e[e.TOP_HEAD=1]="TOP_HEAD",e[e.CHIN=2]="CHIN",e[e.NAPE=3]="NAPE",e[e.NAPE_INTERNAL=4]="NAPE_INTERNAL",e[e.NAPE_LEVEL=5]="NAPE_LEVEL",e[e.NECK_INTERNAL=6]="NECK_INTERNAL",e[e.FRONT_NECK=7]="FRONT_NECK",e[e.LEFT_SIDE_NECK=8]="LEFT_SIDE_NECK",e[e.RIGHT_SIDE_NECK=9]="RIGHT_SIDE_NECK",e[e.LEFT_SHOULDER=10]="LEFT_SHOULDER",e[e.RIGHT_SHOULDER=11]="RIGHT_SHOULDER",e[e.LEFT_ARMPIT=12]="LEFT_ARMPIT",e[e.RIGHT_ARMPIT=13]="RIGHT_ARMPIT",e[e.ARMPIT_INTERNAL=14]="ARMPIT_INTERNAL",e[e.CHEST_INTERNAL=15]="CHEST_INTERNAL",e[e.CHEST_LEVEL=16]="CHEST_LEVEL",e[e.LOW_CHEST_LEVEL=17]="LOW_CHEST_LEVEL",e[e.LOW_CHEST_INTERNAL=18]="LOW_CHEST_INTERNAL",e[e.LEFT_NIPPLE=19]="LEFT_NIPPLE",e[e.RIGHT_NIPPLE=20]="RIGHT_NIPPLE",e[e.REAR_WAIST=21]="REAR_WAIST",e[e.FRONT_WAIST=22]="FRONT_WAIST",e[e.WAIST_INTERNAL=23]="WAIST_INTERNAL",e[e.WAIST_LEVEL=24]="WAIST_LEVEL",e[e.TOP_HIP_LEVEL=25]="TOP_HIP_LEVEL",e[e.SEAT_PROMINENCE=26]="SEAT_PROMINENCE",e[e.HIP_INTERNAL=27]="HIP_INTERNAL",e[e.HIP_LEVEL=28]="HIP_LEVEL",e[e.CROTCH=29]="CROTCH",e[e.FRONT_CHEST=31]="FRONT_CHEST",e[e.FRONT_LOW_CHEST=32]="FRONT_LOW_CHEST",e[e.MID_WAIST_INTERNAL=33]="MID_WAIST_INTERNAL",e[e.MID_WAIST_LEVEL=34]="MID_WAIST_LEVEL",e[e.BACK_PROMINENCE=35]="BACK_PROMINENCE",e[e.ABDOMEN_PROMINENCE=36]="ABDOMEN_PROMINENCE",e[e.BACK_ARCH=37]="BACK_ARCH",e[e.LOWER_BUTTOCK=38]="LOWER_BUTTOCK",e[e.UPPER_ABDOMEN=39]="UPPER_ABDOMEN",e[e.LOWER_ABDOMEN=40]="LOWER_ABDOMEN",e[e.LEFT_SIDE_WAIST_BILATERAL=41]="LEFT_SIDE_WAIST_BILATERAL",e[e.RIGHT_SIDE_WAIST_BILATERAL=42]="RIGHT_SIDE_WAIST_BILATERAL",e[e.SHOULDER_INTERNAL=43]="SHOULDER_INTERNAL",e[e.LEFT_ARMPIT_INTERNAL=46]="LEFT_ARMPIT_INTERNAL",e[e.RIGHT_ARMPIT_INTERNAL=47]="RIGHT_ARMPIT_INTERNAL",e[e.REAR_MID_WAIST=48]="REAR_MID_WAIST",e[e.FRONT_MID_WAIST=49]="FRONT_MID_WAIST",e[e.LEFT_TOP_THIGH_INTERNAL=50]="LEFT_TOP_THIGH_INTERNAL",e[e.RIGHT_TOP_THIGH_INTERNAL=51]="RIGHT_TOP_THIGH_INTERNAL",e[e.LEFT_TOP_THIGH_LEVEL=52]="LEFT_TOP_THIGH_LEVEL",e[e.RIGHT_TOP_THIGH_LEVEL=53]="RIGHT_TOP_THIGH_LEVEL",e[e.LEFT_KNEE_INTERNAL=54]="LEFT_KNEE_INTERNAL",e[e.RIGHT_KNEE_INTERNAL=55]="RIGHT_KNEE_INTERNAL",e[e.LEFT_KNEE_LEVEL=56]="LEFT_KNEE_LEVEL",e[e.RIGHT_KNEE_LEVEL=57]="RIGHT_KNEE_LEVEL",e[e.LEFT_CALF=58]="LEFT_CALF",e[e.RIGHT_CALF=59]="RIGHT_CALF",e[e.LEFT_CALF_LEVEL=60]="LEFT_CALF_LEVEL",e[e.RIGHT_CALF_LEVEL=61]="RIGHT_CALF_LEVEL",e[e.LEFT_MINIMUM_LEG_INTERNAL=62]="LEFT_MINIMUM_LEG_INTERNAL",e[e.RIGHT_MINIMUM_LEG_INTERNAL=63]="RIGHT_MINIMUM_LEG_INTERNAL",e[e.LEFT_MINIMUM_LEG_LEVEL=64]="LEFT_MINIMUM_LEG_LEVEL",e[e.RIGHT_MINIMUM_LEG_LEVEL=65]="RIGHT_MINIMUM_LEG_LEVEL",e[e.LEFT_ANKLE_INTERNAL=66]="LEFT_ANKLE_INTERNAL",e[e.RIGHT_ANKLE_INTERNAL=67]="RIGHT_ANKLE_INTERNAL",e[e.LEFT_ANKLE_LEVEL=68]="LEFT_ANKLE_LEVEL",e[e.RIGHT_ANKLE_LEVEL=69]="RIGHT_ANKLE_LEVEL",e[e.LEFT_FLOOR=70]="LEFT_FLOOR",e[e.RIGHT_FLOOR=71]="RIGHT_FLOOR",e[e.LEFT_FLOOR_LEVEL=72]="LEFT_FLOOR_LEVEL",e[e.RIGHT_FLOOR_LEVEL=73]="RIGHT_FLOOR_LEVEL",e[e.LEFT_MID_THIGH_LEVEL=75]="LEFT_MID_THIGH_LEVEL",e[e.RIGHT_MID_THIGH_LEVEL=76]="RIGHT_MID_THIGH_LEVEL",e[e.LEFT_TOP_ARM_INTERNAL=100]="LEFT_TOP_ARM_INTERNAL",e[e.RIGHT_TOP_ARM_INTERNAL=101]="RIGHT_TOP_ARM_INTERNAL",e[e.LEFT_TOP_ARM_LEVEL=102]="LEFT_TOP_ARM_LEVEL",e[e.RIGHT_TOP_ARM_LEVEL=103]="RIGHT_TOP_ARM_LEVEL",e[e.LEFT_ELBOW=104]="LEFT_ELBOW",e[e.RIGHT_ELBOW=105]="RIGHT_ELBOW",e[e.LEFT_ARMCREASE=106]="LEFT_ARMCREASE",e[e.RIGHT_ARMCREASE=107]="RIGHT_ARMCREASE",e[e.LEFT_ELBOW_INTERNAL=108]="LEFT_ELBOW_INTERNAL",e[e.RIGHT_ELBOW_INTERNAL=109]="RIGHT_ELBOW_INTERNAL",e[e.LEFT_WRIST_INNER=110]="LEFT_WRIST_INNER",e[e.RIGHT_WRIST_INNER=111]="RIGHT_WRIST_INNER",e[e.LEFT_WRIST_OUTER=112]="LEFT_WRIST_OUTER",e[e.RIGHT_WRIST_OUTER=113]="RIGHT_WRIST_OUTER",e[e.LEFT_WRIST_INTERNAL=114]="LEFT_WRIST_INTERNAL",e[e.RIGHT_WRIST_INTERNAL=115]="RIGHT_WRIST_INTERNAL",e[e.LEFT_WRIST_LEVEL=116]="LEFT_WRIST_LEVEL",e[e.RIGHT_WRIST_LEVEL=117]="RIGHT_WRIST_LEVEL",e[e.LEFT_HAND=118]="LEFT_HAND",e[e.RIGHT_HAND=119]="RIGHT_HAND",e[e.CWALL_L_HIGH_CHEST=1501]="CWALL_L_HIGH_CHEST",e[e.CWALL_L_ARMPIT=1502]="CWALL_L_ARMPIT",e[e.CWALL_L_CHEST=1503]="CWALL_L_CHEST",e[e.CWALL_L_LOW_CHEST=1504]="CWALL_L_LOW_CHEST",e[e.CWALL_L_WAIST=1505]="CWALL_L_WAIST",e[e.CWALL_MID_HIGH_CHEST=1506]="CWALL_MID_HIGH_CHEST",e[e.CWALL_MID_ARMPIT=1507]="CWALL_MID_ARMPIT",e[e.CWALL_MID_CHEST=1508]="CWALL_MID_CHEST",e[e.CWALL_MID_LOW_CHEST=1509]="CWALL_MID_LOW_CHEST",e[e.CWALL_MID_WAIST=1510]="CWALL_MID_WAIST",e[e.CWALL_R_HIGH_CHEST=1511]="CWALL_R_HIGH_CHEST",e[e.CWALL_R_ARMPIT=1512]="CWALL_R_ARMPIT",e[e.CWALL_R_CHEST=1513]="CWALL_R_CHEST",e[e.CWALL_R_LOW_CHEST=1514]="CWALL_R_LOW_CHEST",e[e.CWALL_R_WAIST=1515]="CWALL_R_WAIST"}(U||(U={}));const yl=new Map([[1,{name:"Top of head",spline:!0}],[2,{name:"Chin"}],[3,{name:"Nape"}],[4,{name:"Nape internal"}],[5,{name:"Nape level"}],[6,{name:"Neck internal",important:!0,spline:!0}],[7,{name:"Front neck",deform:!0}],[8,{name:"Left side neck"}],[9,{name:"Right side neck"}],[10,{name:"Left shoulder",deform:!0}],[11,{name:"Right shoulder",deform:!0}],[12,{name:"Left armpit",important:!0,partition:!0}],[13,{name:"Right armpit",important:!0,partition:!0}],[14,{name:"Armpit internal"}],[15,{name:"Chest internal"}],[16,{name:"Chest level",deform:!0}],[17,{name:"Low chest level",important:!0,deform:!0}],[18,{name:"Low chest internal"}],[19,{name:"Left nipple"}],[20,{name:"Right nipple"}],[21,{name:"Rear waist"}],[22,{name:"Front waist"}],[23,{name:"Waist internal",spline:!0}],[24,{name:"Waist level",important:!0}],[25,{name:"Top hip level"}],[26,{name:"Seat prominence",deform:!0}],[27,{name:"Hip internal",deform:!0}],[28,{name:"Hip level",important:!0}],[29,{name:"Crotch",important:!0,partition:!0}],[31,{name:"Front chest"}],[32,{name:"Front low chest"}],[33,{name:"Mid waist internal"}],[34,{name:"Mid waist level"}],[35,{name:"Back prominence"}],[36,{name:"Abdomen prominence"}],[37,{name:"Back arch"}],[38,{name:"Lower buttock"}],[39,{name:"Upper abdomen"}],[40,{name:"Lower abdomen"}],[41,{name:"Left side waist bilateral"}],[42,{name:"Right side waist bilateral"}],[43,{name:"Shoulder internal"}],[46,{name:"Left armpit internal"}],[47,{name:"Right armpit internal"}],[48,{name:"Rear mid waist"}],[49,{name:"Front mid waist"}],[50,{name:"Left top thigh internal",spline:!0}],[51,{name:"Right top thigh internal",spline:!0}],[52,{name:"Left top thigh level"}],[53,{name:"Right top thigh level"}],[54,{name:"Left knee internal",spline:!0}],[55,{name:"Right knee internal",spline:!0}],[56,{name:"Left knee level",important:!0}],[57,{name:"Right knee level",important:!0}],[58,{name:"Left calf"}],[59,{name:"Right calf"}],[60,{name:"Left calf level"}],[61,{name:"Right calf level"}],[62,{name:"Left minimum leg internal"}],[63,{name:"Right minimum leg internal"}],[64,{name:"Left minimum leg level"}],[65,{name:"Right minimum leg level"}],[66,{name:"Left ankle internal",spline:!0}],[67,{name:"Right ankle internal",spline:!0}],[68,{name:"Left ankle level",important:!0}],[69,{name:"Right ankle level",important:!0}],[70,{name:"Left floor",spline:!0}],[71,{name:"Right floor",spline:!0}],[72,{name:"Left floor level"}],[73,{name:"Right floor level"}],[75,{name:"Left mid thigh level"}],[76,{name:"Right mid thigh level"}],[100,{name:"Left top arm internal",spline:!0}],[101,{name:"Right top arm internal",spline:!0}],[102,{name:"Left top arm level"}],[103,{name:"Right top arm level"}],[104,{name:"Left elbow",important:!0}],[105,{name:"Right elbow",important:!0}],[106,{name:"Left armcrease"}],[107,{name:"Right armcrease"}],[108,{name:"Left elbow internal",spline:!0}],[109,{name:"Right elbow internal",spline:!0}],[110,{name:"Left wrist inner",important:!0}],[111,{name:"Right wrist inner",important:!0}],[112,{name:"Left wrist outer"}],[113,{name:"Right wrist outer"}],[114,{name:"Left wrist internal",deform:!0,spline:!0}],[115,{name:"Right wrist internal",deform:!0,spline:!0}],[116,{name:"Left wrist level"}],[117,{name:"Right wrist level"}],[118,{name:"Left hand",spline:!0}],[119,{name:"Right hand",spline:!0}],[1501,{name:"Chestwall left high chest"}],[1502,{name:"Chestwall left armpit"}],[1503,{name:"Chestwall left chest"}],[1504,{name:"Chestwall left low chest"}],[1505,{name:"Chestwall left waist"}],[1506,{name:"Chestwall mid high chest"}],[1507,{name:"Chestwall mid armpit"}],[1508,{name:"Chestwall mid chest"}],[1509,{name:"Chestwall mid low chest"}],[1510,{name:"Chestwall mid waist"}],[1511,{name:"Chestwall right high chest"}],[1512,{name:"Chestwall right armpit"}],[1513,{name:"Chestwall right chest"}],[1514,{name:"Chestwall right low chest"}],[1515,{name:"Chestwall right waist"}]]);function vi(e){return U[e]!==void 0?e:void 0}var Ei,fo,Q;(function(e){e[e.FEMALE=0]="FEMALE",e[e.MALE=1]="MALE"})(Ei||(Ei={})),function(e){e.LE="LE",e.BE="BE"}(fo||(fo={}));class mp{constructor(n,t=!1,r=fo.LE){this.buffer=n,this.dryRun=t,this.endianness=r,this.position=0,this.littleEndian=this.endianness===fo.LE,this.dataView=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength)}readDouble(){const n=this.dataView.getFloat64(this.position,this.littleEndian);return this.position+=8,n}readFloat(){const n=this.dataView.getFloat32(this.position,this.littleEndian);return this.position+=4,n}readByte(){const n=this.dataView.getInt8(this.position);return this.position+=1,n}readShort(){const n=this.dataView.getInt16(this.position,this.littleEndian);return this.position+=2,n}readInt(){const n=this.dataView.getInt32(this.position,this.littleEndian);return this.position+=4,n}readBoolean(){return this.readShort()===-1}readSexType(){return this.readBoolean()?Ei.MALE:Ei.FEMALE}writeDouble(n){this.dryRun||this.dataView.setFloat64(this.position,n,this.littleEndian),this.position+=8}writeFloat(n){this.dryRun||this.dataView.setFloat32(this.position,n,this.littleEndian),this.position+=4}writeByte(n){this.dryRun||this.dataView.setInt8(this.position,n),this.position+=1}writeShort(n){this.dryRun||this.dataView.setInt16(this.position,n,this.littleEndian),this.position+=2}writeInt(n){this.dryRun||this.dataView.setInt32(this.position,n,this.littleEndian),this.position+=4}writeBoolean(n){this.writeShort(n?-1:0)}writeSexType(n){this.writeBoolean(n===Ei.MALE)}close(){}}class _p{setHeader(n){this.bodyHeader=n,this.bodyParts=[]}setFlags(n){this.flags=n}setLandmarks(n){this.landmarks=n}setReferenceLocations(n){this.referenceLocations=n}setPersonDetails(n){this.personDetails=n}setMeasurements(n){this.measurements=n}setChestWallDefinition(n){this.chestWallDefinition=n}setNormaliseResolution(n){this.normaliseResolution=n}addBodyParts(...n){n.forEach(t=>this.bodyParts.push(t))}build(){return Object.assign(Object.assign(Object.assign({},this.bodyHeader),this.flags),{landmarks:this.landmarks,referenceLocations:this.referenceLocations,personDetails:this.personDetails,measurements:this.measurements,normaliseResolution:this.normaliseResolution,bodyParts:this.bodyParts,chestWallDefinition:this.chestWallDefinition})}}function Ra(e){e.mid=function(n){return{x:(n.min.x+n.max.x)/2,y:(n.min.y+n.max.y)/2,z:(n.min.z+n.max.z)/2}}(e),e.difference=function(n){return{x:n.max.x-n.min.x,y:n.max.y-n.min.y,z:n.max.z-n.min.z}}(e)}function gp(e,n){const t={max:e,min:n};return Ra(t),t}function Oo(){return gp({x:-32700,y:-32700,z:-32700},{x:32700,y:32700,z:32700})}function vp(e,n){n.x>e.max.x&&(e.max.x=n.x),n.x<e.min.x&&(e.min.x=n.x),n.y>e.max.y&&(e.max.y=n.y),n.y<e.min.y&&(e.min.y=n.y),n.z>e.max.z&&(e.max.z=n.z),n.z<e.min.z&&(e.min.z=n.z)}function Ep(e){const n=Oo();for(const t of e)vp(n,t);return Ra(n),n}function Xu(e,n,t){e.min.x=n.min.x,e.min.y=t,e.min.z=n.min.y,e.max.x=n.max.x,e.max.y=t,e.max.z=n.max.y}function Tp(e){e.mid={x:(e.min.x+e.max.x)/2,y:(e.min.y+e.max.y)/2}}class Ll{setPoint(n){this.point=n}setColour(n){this.colour=n}build(){return{point:this.point,colour:this.colour}}}function Ku(e,n,t){const r=t-n;return e.a+e.b*r+e.c*r*r+e.d*r*r*r}function Aa(e,n,t,r,i,a,o){const s=[];let l=0;if(i>=0&&a>0){const c=n.xsPoints[i].x;l=(n.xsPoints[a].x-c)/(r-1);let u=c,f=i,d=n.xsPoints[f+1].x;if(l!=0)for(let p=0;p<r;p++){const _=c+p*l;for(;_>d+1e-4;)f++,u=n.xsPoints[f].x,d=n.xsPoints[f+1].x;const g=t.xs_coeffs[f],m=t.ys_coeffs[f],h=Ku(g,u,_),T=Ku(m,u,_),v=new Ll;if(v.setPoint({x:h,y:T}),o){const E=(_-n.xsPoints[f].x)/(n.xsPoints[f+1].x-n.xsPoints[f].x),L={x:(1-E)*e[f].colour.x+E*e[f+1].colour.x,y:(1-E)*e[f].colour.y+E*e[f+1].colour.y,z:(1-E)*e[f].colour.z+E*e[f+1].colour.z};v.setColour(L)}s.push(v.build())}}return l==0||i<0||a<0?null:s}function Ys(e){if(e.nodes.length>2){e.extent={min:{x:32700,y:32700},mid:{x:0,y:0},max:{x:-32700,y:-32700}},e.samplePoints=Aa(e.nodes,e.parametricNodes,e.parametricCoefficients,200,0,e.nodes.length-1,!1);for(const i of e.samplePoints){const a=i.point;n=e.extent,t=a.x,r=a.y,t>n.max.x&&(n.max.x=t),t<n.min.x&&(n.min.x=t),r>n.max.y&&(n.max.y=r),r<n.min.y&&(n.min.y=r),Tp(n)}}var n,t,r}function lx(e){const n=Oo();if(e.pointLayer)for(const t of e.pointLayer.points)vp(n,t);e.splineLayer&&(e.splineLayer.surface&&(Ys(e.splineLayer.surface),Xu(n,e.splineLayer.surface.extent,e.y)),e.splineLayer.tape&&(Ys(e.splineLayer.tape),Xu(n,e.splineLayer.tape.extent,e.y))),Ra(n),e.extent=n}function Sp(e,n){n.max.x>e.max.x&&(e.max.x=n.max.x),n.min.x<e.min.x&&(e.min.x=n.min.x),n.max.y>e.max.y&&(e.max.y=n.max.y),n.min.y<e.min.y&&(e.min.y=n.min.y),n.max.z>e.max.z&&(e.max.z=n.max.z),n.min.z<e.min.z&&(e.min.z=n.min.z)}function Co(e){const n=Oo();for(const t of e.layers)lx(t),Sp(n,t.extent);if(e.splineRegions)for(const t of e.splineRegions)t.vertices?t.extent=Ep(t.vertices):console.error(t," Vertices list is NULL");Ra(n),e.extent=n}function qs(e){const n=Oo();for(let t of e.bodyParts)Co(t),Sp(n,t.extent);Ra(n),e.extent=n}function Yu(e,n){if(e==0)return null;const t=e-1,r=Array(e).fill(0),i=Array(t).fill(0),a=Array(e).fill(void 0).map(()=>Array(e).fill(0)),o=Array(t+1).fill(0),s=Array(e).fill(0),l=Array(e).fill(0),c=Array(e).fill(0);for(let d=0;d<e;d++){const p=n[d];r[d]=p.x,s[d]=p.y}for(let d=0;d<t;d++){let p=r[d+1]-r[d];i[d]=p}a[0][0]=1,a[0][1]=0,a[t][t]=1,a[t][t-1]=0;for(let d=1;d<t;d++)a[d][d]=2*(i[d-1]+i[d]),a[d][d-1]=i[d-1],a[d][d+1]=i[d];o[0]=0;for(let d=1;d<t;d++)o[d]=3/i[d]*(s[d+1]-s[d])-3/i[d-1]*(s[d]-s[d-1]);o[t]=0;const u=function(d,p,_){const g=Array(d).fill(void 0).map(()=>Array(d).fill(0)),m=Array(d).fill(void 0).map(()=>Array(d).fill(0)),h=Array(d).fill(0),T=Array(d).fill(0),v=d-1;if(d>=3){g[0][0]=p[0][0],m[0][1]=p[0][1]/g[0][0];for(let E=1;E<v;E++)g[E][E-1]=p[E][E-1],g[E][E]=p[E][E]-g[E][E-1]*m[E-1][E],m[E][E+1]=p[E][E+1]/g[E][E];g[v][v-1]=p[v][v-1],g[v][v]=p[v][v]-g[v][v-1]*m[v-1][v],h[0]=_[0]/g[0][0];for(let E=1;E<d;E++)h[E]=(_[E]-g[E][E-1]*h[E-1])/g[E][E];T[v]=h[v];for(let E=v-1;E>=0;E--)T[E]=h[E]-m[E][E+1]*T[E+1]}return T}(e,a,o);for(let d=t-1;d>=0;d--)l[d]=(s[d+1]-s[d])/i[d]-i[d]*(u[d+1]+2*u[d])/3,c[d]=(u[d+1]-u[d])/(3*i[d]);const f=[];for(let d=0;d<t;d++){const p={a:s[d],b:l[d],c:u[d],d:c[d]};f.push(p)}return f}function fa(e,n){const t=n.x-e.x,r=n.y-e.y;return Math.sqrt(t*t+r*r)}function Rp(e){const n=function(t){let r=0;const i=[],a=[];let o={x:0,y:t[0].point.x};i.push(o);let s={x:0,y:t[0].point.y};a.push(s);for(let l=1;l<t.length;l++){const c=t[l].point;r+=fa(t[l-1].point,c),o={x:r,y:c.x},i.push(o),s={x:r,y:c.y},a.push(s)}return{xsPoints:i,ysPoints:a}}(e);return{parametricNodes:n,parametricCoefficients:{xs_coeffs:Yu(e.length,n.xsPoints),ys_coeffs:Yu(e.length,n.ysPoints)}}}function qu(e,n){for(const t of e.nodes){const r=t.point;r.x=r.x-n.x,r.y=r.y-n.z}e.nodes.length>2&&Rp(e.nodes),Ys(e)}function cx(e,n){e.pointLayer&&function(t,r){for(const i of t.points)i.x=i.x-r.x,i.z=i.z-r.z}(e.pointLayer,n),e.splineLayer&&function(t,r){t.surface&&qu(t.surface,r),t.tape&&qu(t.tape,r)}(e.splineLayer,n),e.y=e.y+n.y}function ux(e,n){for(const t of e.layers)cx(t,n)}function Ap(e){qs(e);const n={x:(e.extent.min.x+e.extent.max.x)/2,y:(e.extent.min.y+e.extent.max.y)/2,z:(e.extent.min.z+e.extent.max.z)/2};for(const t of e.bodyParts)ux(t,n);e.landmarks.forEach(t=>{t.x=t.x-n.x,t.y=t.y+n.y,t.z=t.z-n.z}),qs(e)}(function(e){e[e.UNLABELLED=1]="UNLABELLED",e[e.WHOLE_BODY=2]="WHOLE_BODY",e[e.LEFT_LEG=3]="LEFT_LEG",e[e.RIGHT_LEG=4]="RIGHT_LEG",e[e.TORSO=5]="TORSO",e[e.LEFT_ARM=7]="LEFT_ARM",e[e.RIGHT_ARM=8]="RIGHT_ARM",e[e.CHEST_WALL=9]="CHEST_WALL",e[e.LEFT_BREAST=10]="LEFT_BREAST",e[e.RIGHT_BREAST=11]="RIGHT_BREAST",e[e.MJB_BUST=12]="MJB_BUST"})(Q||(Q={}));var O;function Je(e,n){return e.bodyParts.find(t=>Q[t.type]===n)}(function(e){e[e.TORSO_TOPHEAD=1]="TORSO_TOPHEAD",e[e.TORSO_FRONT_NECK=2]="TORSO_FRONT_NECK",e[e.TORSO_NAPE=3]="TORSO_NAPE",e[e.TORSO_NECK=4]="TORSO_NECK",e[e.TORSO_NECK_PREPROCESS=5]="TORSO_NECK_PREPROCESS",e[e.TORSO_NECK_UPPER=6]="TORSO_NECK_UPPER",e[e.TORSO_NECK_LOWER=7]="TORSO_NECK_LOWER",e[e.TORSO_SHOULDER_PREPROCESS=8]="TORSO_SHOULDER_PREPROCESS",e[e.TORSO_SHOULDER=9]="TORSO_SHOULDER",e[e.TORSO_ARMPIT_LOWER=10]="TORSO_ARMPIT_LOWER",e[e.TORSO_ARMPIT_UPPER=11]="TORSO_ARMPIT_UPPER",e[e.TORSO_ARMPIT_PREPROCESS=12]="TORSO_ARMPIT_PREPROCESS",e[e.TORSO_ARMPIT=13]="TORSO_ARMPIT",e[e.TORSO_LOW_CHEST_PREPROCESS=14]="TORSO_LOW_CHEST_PREPROCESS",e[e.TORSO_LOW_CHEST=15]="TORSO_LOW_CHEST",e[e.TORSO_CHEST_PREPROCESS=16]="TORSO_CHEST_PREPROCESS",e[e.TORSO_CHEST=17]="TORSO_CHEST",e[e.TORSO_WAIST_PREPROCESS=18]="TORSO_WAIST_PREPROCESS",e[e.TORSO_WAIST=19]="TORSO_WAIST",e[e.TORSO_WAIST_LOWER=20]="TORSO_WAIST_LOWER",e[e.TORSO_WAIST_UPPER=21]="TORSO_WAIST_UPPER",e[e.TORSO_SEAT_PROMINENCE=22]="TORSO_SEAT_PROMINENCE",e[e.TORSO_HIP_PREPROCESS=23]="TORSO_HIP_PREPROCESS",e[e.TORSO_HIP=24]="TORSO_HIP",e[e.TORSO_HIP_LOWER=25]="TORSO_HIP_LOWER",e[e.TORSO_HIP_UPPER=26]="TORSO_HIP_UPPER",e[e.TORSO_CROTCH=27]="TORSO_CROTCH",e[e.TORSO_CROTCH_ARMPIT_THIRD=28]="TORSO_CROTCH_ARMPIT_THIRD",e[e.CHESTWALL_ARMPIT_PREPROCESS=29]="CHESTWALL_ARMPIT_PREPROCESS",e[e.CHESTWALL_CHEST_PREPROCESS=30]="CHESTWALL_CHEST_PREPROCESS",e[e.CHESTWALL_LOW_CHEST_PREPROCESS=31]="CHESTWALL_LOW_CHEST_PREPROCESS",e[e.CHESTWALL_WAIST_PREPROCESS=32]="CHESTWALL_WAIST_PREPROCESS",e[e.CHESTWALL_HIGH_CHEST_PREPROCESS=33]="CHESTWALL_HIGH_CHEST_PREPROCESS",e[e.CHESTWALL_ARMPIT=34]="CHESTWALL_ARMPIT",e[e.CHESTWALL_CHEST=35]="CHESTWALL_CHEST",e[e.CHESTWALL_LOW_CHEST=36]="CHESTWALL_LOW_CHEST",e[e.CHESTWALL_WAIST=37]="CHESTWALL_WAIST",e[e.CHESTWALL_HIGH_CHEST=38]="CHESTWALL_HIGH_CHEST",e[e.LEFTLEG_FLOOR=39]="LEFTLEG_FLOOR",e[e.LEFTLEG_MINIMUM_LEG=40]="LEFTLEG_MINIMUM_LEG",e[e.LEFTLEG_ANKLE=41]="LEFTLEG_ANKLE",e[e.LEFTLEG_ANKLE_LOWER=42]="LEFTLEG_ANKLE_LOWER",e[e.LEFTLEG_ANKLE_UPPER=43]="LEFTLEG_ANKLE_UPPER",e[e.LEFTLEG_KNEE=44]="LEFTLEG_KNEE",e[e.LEFTLEG_KNEE_LOWER=45]="LEFTLEG_KNEE_LOWER",e[e.LEFTLEG_KNEE_UPPER=46]="LEFTLEG_KNEE_UPPER",e[e.LEFTLEG_THIGH=47]="LEFTLEG_THIGH",e[e.RIGHTLEG_FLOOR=48]="RIGHTLEG_FLOOR",e[e.RIGHTLEG_MINIMUM_LEG=49]="RIGHTLEG_MINIMUM_LEG",e[e.RIGHTLEG_ANKLE=50]="RIGHTLEG_ANKLE",e[e.RIGHTLEG_ANKLE_LOWER=51]="RIGHTLEG_ANKLE_LOWER",e[e.RIGHTLEG_ANKLE_UPPER=52]="RIGHTLEG_ANKLE_UPPER",e[e.RIGHTLEG_KNEE=53]="RIGHTLEG_KNEE",e[e.RIGHTLEG_KNEE_LOWER=54]="RIGHTLEG_KNEE_LOWER",e[e.RIGHTLEG_KNEE_UPPER=55]="RIGHTLEG_KNEE_UPPER",e[e.RIGHTLEG_THIGH=56]="RIGHTLEG_THIGH",e[e.LEFTARM_TOPARM=57]="LEFTARM_TOPARM",e[e.LEFTARM_ELBOW=58]="LEFTARM_ELBOW",e[e.LEFTARM_ELBOW_UPPER=59]="LEFTARM_ELBOW_UPPER",e[e.LEFTARM_ELBOW_LOWER=60]="LEFTARM_ELBOW_LOWER",e[e.LEFTARM_WRIST=61]="LEFTARM_WRIST",e[e.LEFTARM_HAND=62]="LEFTARM_HAND",e[e.RIGHTARM_TOPARM=63]="RIGHTARM_TOPARM",e[e.RIGHTARM_ELBOW=64]="RIGHTARM_ELBOW",e[e.RIGHTARM_ELBOW_UPPER=65]="RIGHTARM_ELBOW_UPPER",e[e.RIGHTARM_ELBOW_LOWER=66]="RIGHTARM_ELBOW_LOWER",e[e.RIGHTARM_WRIST=67]="RIGHTARM_WRIST",e[e.RIGHTARM_HAND=68]="RIGHTARM_HAND"})(O||(O={}));const ne={AXF_VERSION:3.02,BIG_POSITIVE_NUMBER_SNG:1e9,BIG_NEGATIVE_NUMBER_SNG:-1e9,BIG_POSITIVE_NUMBER_INT:32766,BIG_NEGATIVE_NUMBER_INT:-32767,AX_MAX_MEMORY_ALLOCATION:1e8,SMALL_POSITIVE_NUMBER_DBL:1e-8,SMALL_NEGATIVE_NUMBER_DBL:-1e-8,AXF_FULL_LEG:1,AXF_PARTIAL_LEG:1,AXF_NO_LEG:1,AXF_START:1,AXF_END:2,AXF_TAPE:1,AXF_CONTOUR:2,AXF_DEFORM_REFERENCE_SLICE_NECK:0,AXF_DEFORM_REFERENCE_SLICE_SHOULDER:1,AXF_DEFORM_REFERENCE_SLICE_CHEST:2,AXF_DEFORM_REFERENCE_SLICE_UNDER_CHEST:3,AXF_DEFORM_REFERENCE_SLICE_WAIST:4,AXF_DEFORM_REFERENCE_SLICE_SEAT:5,AXF_DEFORM_REFERENCE_SLICE_KNEE:6,AXF_DEFORM_REFERENCE_SLICE_ANKLE:7,AXF_DEFORM_REFERENCE_SLICE_ELBOW:8,AXF_DEFORM_REFERENCE_SLICE_WRIST:9,AXF_MAX_REGION_BOUNDARIES:10,AXF_N_MEASUREMENTS:49,AXF_N_REFERENCE_LOCATIONS:75,AXF_N_SHAPE_MEASUREMENTS:9,UPPER_LEG_NPTS_RADIAL_LOW:5,UPPER_LEG_NPTS_LINEAR_LOW:0,LOWER_LEG_NPTS_RADIAL_LOW:5,LOWER_LEG_NPTS_LINEAR_LOW:0,FOOT_NPTS_RADIAL_LOW:5,FOOT_NPTS_LINEAR_LOW:0,HIP_NPTS_RADIAL_LOW:4,HIP_NPTS_LINEAR_LOW:8,MID_TORSO_NPTS_RADIAL_LOW:8,MID_TORSO_NPTS_LINEAR_LOW:0,UPPER_TORSO_NPTS_RADIAL_LOW:4,UPPER_TORSO_NPTS_LINEAR_LOW:6,HEAD_NPTS_RADIAL_LOW:7,HEAD_NPTS_LINEAR_LOW:0,UPPER_ARM_NPTS_RADIAL_LOW:4,UPPER_ARM_NPTS_LINEAR_LOW:0,LOWER_ARM_NPTS_RADIAL_LOW:4,LOWER_ARM_NPTS_LINEAR_LOW:0,UPPER_LEG_NPTS_RADIAL_MEDIUM:7,UPPER_LEG_NPTS_LINEAR_MEDIUM:0,LOWER_LEG_NPTS_RADIAL_MEDIUM:7,LOWER_LEG_NPTS_LINEAR_MEDIUM:0,FOOT_NPTS_RADIAL_MEDIUM:7,FOOT_NPTS_LINEAR_MEDIUM:0,HIP_NPTS_RADIAL_MEDIUM:6,HIP_NPTS_LINEAR_MEDIUM:12,MID_TORSO_NPTS_RADIAL_MEDIUM:12,MID_TORSO_NPTS_LINEAR_MEDIUM:0,UPPER_TORSO_NPTS_RADIAL_MEDIUM:6,UPPER_TORSO_NPTS_LINEAR_MEDIUM:20,HEAD_NPTS_RADIAL_MEDIUM:16,HEAD_NPTS_LINEAR_MEDIUM:0,UPPER_ARM_NPTS_RADIAL_MEDIUM:4,UPPER_ARM_NPTS_LINEAR_MEDIUM:0,LOWER_ARM_NPTS_RADIAL_MEDIUM:4,LOWER_ARM_NPTS_LINEAR_MEDIUM:0,UPPER_LEG_NPTS_RADIAL_HIGH:9,UPPER_LEG_NPTS_LINEAR_HIGH:0,LOWER_LEG_NPTS_RADIAL_HIGH:9,LOWER_LEG_NPTS_LINEAR_HIGH:0,FOOT_NPTS_RADIAL_HIGH:9,FOOT_NPTS_LINEAR_HIGH:0,HIP_NPTS_RADIAL_HIGH:8,HIP_NPTS_LINEAR_HIGH:16,MID_TORSO_NPTS_RADIAL_HIGH:16,MID_TORSO_NPTS_LINEAR_HIGH:0,UPPER_TORSO_NPTS_RADIAL_HIGH:8,UPPER_TORSO_NPTS_LINEAR_HIGH:12,HEAD_NPTS_RADIAL_HIGH:14,HEAD_NPTS_LINEAR_HIGH:0,UPPER_ARM_NPTS_RADIAL_HIGH:4,UPPER_ARM_NPTS_LINEAR_HIGH:0,LOWER_ARM_NPTS_RADIAL_HIGH:4,LOWER_ARM_NPTS_LINEAR_HIGH:0,LEG_UPPER_NLAYERS_LOW:16,LEG_LOWER_NLAYERS_LOW:16,FOOT_NLAYERS_LOW:4,TORSO_CROTCH_HIP_NLAYERS_LOW:5,TORSO_HIP_WAIST_NLAYERS_LOW:15,TORSO_WAIST_ARMPIT_NLAYERS_LOW:15,TORSO_UPPER_NLAYERS_LOW:16,HEAD_NLAYERS_LOW:10,ARM_UPPER_NLAYERS_LOW:8,ARM_LOWER_NLAYERS_LOW:12,LEG_UPPER_NLAYERS_MEDIUM:24,LEG_LOWER_NLAYERS_MEDIUM:24,FOOT_NLAYERS_MEDIUM:6,TORSO_CROTCH_HIP_NLAYERS_MEDIUM:8,TORSO_HIP_WAIST_NLAYERS_MEDIUM:24,TORSO_WAIST_ARMPIT_NLAYERS_MEDIUM:24,TORSO_UPPER_NLAYERS_MEDIUM:24,HEAD_NLAYERS_MEDIUM:15,ARM_UPPER_NLAYERS_MEDIUM:12,ARM_LOWER_NLAYERS_MEDIUM:18,LEG_UPPER_NLAYERS_HIGH:32,LEG_LOWER_NLAYERS_HIGH:32,FOOT_NLAYERS_HIGH:8,TORSO_CROTCH_HIP_NLAYERS_HIGH:10,TORSO_HIP_WAIST_NLAYERS_HIGH:30,TORSO_WAIST_ARMPIT_NLAYERS_HIGH:30,TORSO_UPPER_NLAYERS_HIGH:32,HEAD_NLAYERS_HIGH:20,ARM_UPPER_NLAYERS_HIGH:16,ARM_LOWER_NLAYERS_HIGH:24,PARTITION_SIDE_CROTCH_CLUSTER_TOLERANCE:550,PARTITION_SIDE_CROTCH_GAP:100,HT_SCALPED:98};function Ti(e,n){let t=ne.BIG_POSITIVE_NUMBER_INT,r=-1;for(let i=0;i<e.layers.length;i++){const a=e.layers[i];let o=Math.abs(a.y-n);o<t&&(t=o,r=i)}return r}function Wi(e,n,t){let r=-1,i=32e3,a=0;for(let o of e.layers){const s=o.y-n,l=Math.abs(s);l<i&&(i=l,r=a),a++}return r}function Er(e,n,t){let r=-1,i=32e3,a=0;for(let o of e.layers){if(o.pointLayer!=null&&o.pointLayer.points.length>0){const s=o.y-n,l=Math.abs(s);l<i&&(i=l,r=a)}a++}return r}function se(e,n){return e.landmarks.find(t=>t.id===n)}function Fe(e,n){if(e.layerMarkers)return e.layerMarkers.find(t=>t.layerNameType==n)}function Ne(e,n,t){let r=Fe(e,n);r?r.value=t:(r={layerNameType:n,value:t},e.layerMarkers||(e.layerMarkers=[]),e.layerMarkers.push(r))}function It(e,n,t){Ne(e,n,function(r,i){const a=Fe(r,i);if(a)return a.value}(e,t)+1)}function js(e,n,t){const r=Fe(e,n),i=Fe(e,t);if(r&&i)return function(a,o,s){for(let l=o;l<s;l++){const c=a.layers[l],u=a.layers[l+1];if(c.y===u.y)return l}return s}(e,r.value,i.value)}function Kt(e,n,t,r){Ne(e,n,js(e,t,r))}function bn(e,n,t){const r=Fe(e,t);r&&Ne(e,n,r.value)}function ni(e,n){return e>n?e:n}function ju(e,n){return n==null?-1:Ti(e,n.y)}function da(e,n){return(e+n)/2}var Z;(function(e){e[e.AXF_NECK_TO_SHOULDER=1]="AXF_NECK_TO_SHOULDER",e[e.AXF_SHOULDER_TO_ARMPIT=2]="AXF_SHOULDER_TO_ARMPIT",e[e.AXF_ARMPIT_TO_WAIST=3]="AXF_ARMPIT_TO_WAIST",e[e.AXF_WAIST_TO_HIP=4]="AXF_WAIST_TO_HIP",e[e.AXF_HIP_TO_CROTCH=5]="AXF_HIP_TO_CROTCH",e[e.AXF_THIGH_TO_KNEE=6]="AXF_THIGH_TO_KNEE",e[e.AXF_KNEE_TO_ANKLE=7]="AXF_KNEE_TO_ANKLE",e[e.AXF_NECK_TO_ARMPIT=8]="AXF_NECK_TO_ARMPIT",e[e.AXF_WAIST_TO_CROTCH=9]="AXF_WAIST_TO_CROTCH",e[e.AXF_ARMPIT_TO_CROTCH=10]="AXF_ARMPIT_TO_CROTCH",e[e.AXF_TOP_TO_ARMPIT=11]="AXF_TOP_TO_ARMPIT",e[e.AXF_THIGH_TO_FLOOR=12]="AXF_THIGH_TO_FLOOR",e[e.AXF_ANKLE_TO_FLOOR=13]="AXF_ANKLE_TO_FLOOR",e[e.AXF_TOP_TO_NECK=14]="AXF_TOP_TO_NECK",e[e.AXF_TOPARM_TO_ELBOW=15]="AXF_TOPARM_TO_ELBOW",e[e.AXF_ELBOW_TO_WRIST=16]="AXF_ELBOW_TO_WRIST",e[e.AXF_WRIST_TO_HAND=17]="AXF_WRIST_TO_HAND",e[e.AXF_ELBOW_TO_HAND=18]="AXF_ELBOW_TO_HAND",e[e.AXF_TOPARM_TO_HAND=19]="AXF_TOPARM_TO_HAND",e[e.AXF_ARMPIT_TO_CHEST=20]="AXF_ARMPIT_TO_CHEST",e[e.AXF_CHEST_TO_UNDERCHEST=21]="AXF_CHEST_TO_UNDERCHEST",e[e.AXF_UNDERCHEST_TO_WAIST=22]="AXF_UNDERCHEST_TO_WAIST",e[e.AXF_CHEST_TO_WAIST=23]="AXF_CHEST_TO_WAIST",e[e.AXF_SEAT_TO_CROTCH=24]="AXF_SEAT_TO_CROTCH",e[e.AXF_WAIST_TO_SEAT=25]="AXF_WAIST_TO_SEAT",e[e.AXF_TOP_TO_SHOULDER=26]="AXF_TOP_TO_SHOULDER",e[e.AXF_THIGH_TO_ANKLE=27]="AXF_THIGH_TO_ANKLE",e[e.AXF_KNEE_TO_FLOOR=28]="AXF_KNEE_TO_FLOOR",e[e.AXF_TOPARM_TO_WRIST=29]="AXF_TOPARM_TO_WRIST",e[e.AXF_ARMPIT_TO_UNDERCHEST=30]="AXF_ARMPIT_TO_UNDERCHEST",e[e.AXF_UNDERCHEST_TO_SEAT=31]="AXF_UNDERCHEST_TO_SEAT",e[e.AXF_CHEST_TO_SEAT=32]="AXF_CHEST_TO_SEAT",e[e.AXF_ARMPIT_TO_SEAT=33]="AXF_ARMPIT_TO_SEAT",e[e.AXF_UNDERCHEST_TO_CROTCH=34]="AXF_UNDERCHEST_TO_CROTCH",e[e.AXF_CHEST_TO_CROTCH=35]="AXF_CHEST_TO_CROTCH",e[e.AXF_THIRD_TO_ARMPIT=36]="AXF_THIRD_TO_ARMPIT"})(Z||(Z={}));function fx(e){let n=Object.keys(Z).filter(t=>Z[t]==e);return n.length>0?n[0]:null}class dx{constructor(){this.DONE_NORMALS=!1,this.DONE_SMOOTH_NORMALS=!1}setHeader(n){this.header=n}setSamplingParameters(n){this.samplingParameters=n}setCentroids(n){this.centroids=n}build(){return Object.assign(Object.assign(Object.assign(Object.assign({},this.header),this.samplingParameters),this.centroids),{DONE_NORMALS:this.DONE_NORMALS,DONE_SMOOTH_NORMALS:this.DONE_SMOOTH_NORMALS})}}var Ln,rt;function qn(e,n,t,r,i){if(!r||!i)return void console.error(`create spline region: body part ${n.id} ${n.type} ${t} start layer or end layer missing`);const a=r.value,o=i.value;if(a<0||o<a)return void console.error(`create spline region: body part ${n.id} ${n.type} ${t} start layer ${a} and end layer ${o} out of range`);const s=new dx;s.setHeader({id:t,type:fx(t),startLayer:a,endLayer:o,startVertex:0,noSides:3});let l=null;if(t==Z.AXF_HIP_TO_CROTCH){const f=Fe(n,O.TORSO_HIP_LOWER);l=n.layers[f.value]}else if(t==Z.AXF_THIRD_TO_ARMPIT){const f=Fe(n,O.TORSO_CROTCH_ARMPIT_THIRD);l=n.layers[f.value]}else if(t==Z.AXF_NECK_TO_ARMPIT){const f=Fe(n,O.TORSO_NECK_LOWER);l=n.layers[f.value]}const c=function(f,d){switch(f){case Z.AXF_THIGH_TO_KNEE:return d==Ln.AXF_LOW?{noRadial:ne.UPPER_LEG_NPTS_RADIAL_LOW,noLinear:ne.UPPER_LEG_NPTS_LINEAR_LOW,noNormalisedLayers:ne.LEG_UPPER_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.UPPER_LEG_NPTS_RADIAL_MEDIUM,noLinear:ne.UPPER_LEG_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.LEG_UPPER_NLAYERS_MEDIUM}:{noRadial:ne.UPPER_LEG_NPTS_RADIAL_HIGH,noLinear:ne.UPPER_LEG_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.LEG_UPPER_NLAYERS_HIGH};case Z.AXF_KNEE_TO_ANKLE:return d==Ln.AXF_LOW?{noRadial:ne.LOWER_LEG_NPTS_RADIAL_LOW,noLinear:ne.LOWER_LEG_NPTS_LINEAR_LOW,noNormalisedLayers:ne.LEG_LOWER_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.LOWER_LEG_NPTS_RADIAL_MEDIUM,noLinear:ne.LOWER_LEG_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.LEG_LOWER_NLAYERS_MEDIUM}:{noRadial:ne.LOWER_LEG_NPTS_RADIAL_HIGH,noLinear:ne.LOWER_LEG_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.LEG_LOWER_NLAYERS_HIGH};case Z.AXF_ANKLE_TO_FLOOR:return d==Ln.AXF_LOW?{noRadial:ne.FOOT_NPTS_RADIAL_LOW,noLinear:ne.FOOT_NPTS_LINEAR_LOW,noNormalisedLayers:ne.FOOT_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.FOOT_NPTS_RADIAL_MEDIUM,noLinear:ne.FOOT_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.FOOT_NLAYERS_MEDIUM}:{noRadial:ne.FOOT_NPTS_RADIAL_HIGH,noLinear:ne.FOOT_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.FOOT_NLAYERS_HIGH};case Z.AXF_HIP_TO_CROTCH:return d==Ln.AXF_LOW?{noRadial:ne.HIP_NPTS_RADIAL_LOW,noLinear:ne.HIP_NPTS_LINEAR_LOW,noNormalisedLayers:ne.TORSO_CROTCH_HIP_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.HIP_NPTS_RADIAL_MEDIUM,noLinear:ne.HIP_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.TORSO_CROTCH_HIP_NLAYERS_MEDIUM}:{noRadial:ne.HIP_NPTS_RADIAL_HIGH,noLinear:ne.HIP_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.TORSO_CROTCH_HIP_NLAYERS_HIGH};case Z.AXF_WAIST_TO_HIP:return d==Ln.AXF_LOW?{noRadial:ne.MID_TORSO_NPTS_RADIAL_LOW,noLinear:ne.MID_TORSO_NPTS_LINEAR_LOW,noNormalisedLayers:ne.TORSO_HIP_WAIST_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.MID_TORSO_NPTS_RADIAL_MEDIUM,noLinear:ne.MID_TORSO_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.TORSO_HIP_WAIST_NLAYERS_MEDIUM}:{noRadial:ne.MID_TORSO_NPTS_RADIAL_HIGH,noLinear:ne.MID_TORSO_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.TORSO_HIP_WAIST_NLAYERS_HIGH};case Z.AXF_ARMPIT_TO_WAIST:return d==Ln.AXF_LOW?{noRadial:ne.MID_TORSO_NPTS_RADIAL_LOW,noLinear:ne.MID_TORSO_NPTS_LINEAR_LOW,noNormalisedLayers:ne.TORSO_WAIST_ARMPIT_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.MID_TORSO_NPTS_RADIAL_MEDIUM,noLinear:ne.MID_TORSO_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.TORSO_WAIST_ARMPIT_NLAYERS_MEDIUM}:{noRadial:ne.MID_TORSO_NPTS_RADIAL_HIGH,noLinear:ne.MID_TORSO_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.TORSO_WAIST_ARMPIT_NLAYERS_HIGH};case Z.AXF_NECK_TO_ARMPIT:return d==Ln.AXF_LOW?{noRadial:ne.UPPER_TORSO_NPTS_RADIAL_LOW,noLinear:ne.UPPER_TORSO_NPTS_LINEAR_LOW,noNormalisedLayers:ne.TORSO_UPPER_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.UPPER_TORSO_NPTS_RADIAL_MEDIUM,noLinear:ne.UPPER_TORSO_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.TORSO_UPPER_NLAYERS_MEDIUM}:{noRadial:ne.UPPER_TORSO_NPTS_RADIAL_HIGH,noLinear:ne.UPPER_TORSO_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.TORSO_UPPER_NLAYERS_HIGH};case Z.AXF_TOP_TO_NECK:return d==Ln.AXF_LOW?{noRadial:ne.HEAD_NPTS_RADIAL_LOW,noLinear:ne.HEAD_NPTS_LINEAR_LOW,noNormalisedLayers:ne.HEAD_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.HEAD_NPTS_RADIAL_MEDIUM,noLinear:ne.HEAD_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.HEAD_NLAYERS_MEDIUM}:{noRadial:ne.HEAD_NPTS_RADIAL_HIGH,noLinear:ne.HEAD_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.HEAD_NLAYERS_HIGH};case Z.AXF_TOPARM_TO_ELBOW:return d==Ln.AXF_LOW?{noRadial:ne.UPPER_ARM_NPTS_RADIAL_LOW,noLinear:ne.UPPER_ARM_NPTS_LINEAR_LOW,noNormalisedLayers:ne.ARM_UPPER_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.UPPER_ARM_NPTS_RADIAL_MEDIUM,noLinear:ne.UPPER_ARM_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.ARM_UPPER_NLAYERS_MEDIUM}:{noRadial:ne.UPPER_ARM_NPTS_RADIAL_HIGH,noLinear:ne.UPPER_ARM_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.ARM_UPPER_NLAYERS_HIGH};case Z.AXF_ELBOW_TO_HAND:return d==Ln.AXF_LOW?{noRadial:ne.LOWER_ARM_NPTS_RADIAL_LOW,noLinear:ne.LOWER_ARM_NPTS_LINEAR_LOW,noNormalisedLayers:ne.ARM_LOWER_NLAYERS_LOW}:d==Ln.AXF_MEDIUM?{noRadial:ne.LOWER_ARM_NPTS_RADIAL_MEDIUM,noLinear:ne.LOWER_ARM_NPTS_LINEAR_MEDIUM,noNormalisedLayers:ne.ARM_LOWER_NLAYERS_MEDIUM}:{noRadial:ne.LOWER_ARM_NPTS_RADIAL_HIGH,noLinear:ne.LOWER_ARM_NPTS_LINEAR_HIGH,noNormalisedLayers:ne.ARM_LOWER_NLAYERS_HIGH};default:return console.log(`Using default Spline Region settings for ${f}`),{noRadial:5,noLinear:5,noNormalisedLayers:24}}}(t,e.normaliseResolution),u=function(f,d,p,_){let g,m,h,T,v,E,L,I,x,b,A,S,C,H,G,V,q,k,ee,X,le,me,_e,we;const de={left:{x:0,y:0},right:{x:0,y:0}},D={left:{x:0,y:0},right:{x:0,y:0}};switch(p){case Z.AXF_THIGH_TO_KNEE:d==Q.LEFT_LEG?(m=se(f,U.LEFT_TOP_THIGH_INTERNAL),g=se(f,U.LEFT_KNEE_INTERNAL)):(m=se(f,U.RIGHT_TOP_THIGH_INTERNAL),g=se(f,U.RIGHT_KNEE_INTERNAL)),de.left.x=g.x,de.left.y=g.z,de.right.x=g.x,de.right.y=g.z,D.left.x=m.x,D.left.y=m.z,D.right.x=m.x,D.right.y=m.z;break;case Z.AXF_KNEE_TO_ANKLE:d==Q.LEFT_LEG?(T=se(f,U.LEFT_ANKLE_INTERNAL),g=se(f,U.LEFT_KNEE_INTERNAL)):(T=se(f,U.RIGHT_ANKLE_INTERNAL),g=se(f,U.RIGHT_KNEE_INTERNAL)),de.left.x=T.x,de.left.y=T.z,de.right.x=T.x,de.right.y=T.z,D.left.x=g.x,D.left.y=g.z,D.right.x=g.x,D.right.y=g.z;break;case Z.AXF_ANKLE_TO_FLOOR:d==Q.LEFT_LEG?(T=se(f,U.LEFT_ANKLE_INTERNAL),h=se(f,U.LEFT_FLOOR)):(T=se(f,U.RIGHT_ANKLE_INTERNAL),h=se(f,U.RIGHT_FLOOR)),de.left.x=h.x,de.left.y=h.z,de.right.x=h.x,de.right.y=h.z,D.left.x=T.x,D.left.y=T.z,D.right.x=T.x,D.right.y=T.z;break;case Z.AXF_HIP_TO_CROTCH:L=se(f,U.HIP_INTERNAL),v=se(f,U.LEFT_TOP_THIGH_INTERNAL),E=se(f,U.RIGHT_TOP_THIGH_INTERNAL);const ie=_;de.left.x=v.x,de.left.y=v.z,de.right.x=E.x,de.right.y=E.z,D.left.x=.75*ie.extent.min.x+.25*ie.extent.max.x,D.left.y=L.z,D.right.x=.25*ie.extent.min.x+.75*ie.extent.max.x,D.right.y=L.z;break;case Z.AXF_WAIST_TO_HIP:L=se(f,U.HIP_INTERNAL),x=se(f,U.WAIST_INTERNAL),de.left.x=L.x,de.left.y=L.z,de.right.x=L.x,de.right.y=L.z,D.left.x=x.x,D.left.y=x.z,D.right.x=x.x,D.right.y=x.z;break;case Z.AXF_ARMPIT_TO_WAIST:b=se(f,U.LEFT_ARMPIT),A=se(f,U.RIGHT_ARMPIT),I={x:(b.x+A.x)/2,z:(b.z+A.z)/2},x=se(f,U.WAIST_INTERNAL),de.left.x=x.x,de.left.y=x.z,de.right.x=x.x,de.right.y=x.z,D.left.x=I.x,D.left.y=I.z,D.right.x=I.x,D.right.y=I.z;break;case Z.AXF_THIRD_TO_ARMPIT:b=se(f,U.LEFT_ARMPIT),A=se(f,U.RIGHT_ARMPIT),I={x:(b.x+A.x)/2,z:(b.z+A.z)/2};const ge=_;de.left.x=ge.extent.mid.x,de.left.y=ge.extent.mid.z,de.right.x=de.left.x,de.right.y=de.left.y,D.left.x=I.x,D.left.y=I.z,D.right.x=D.left.x,D.right.y=D.left.y;break;case Z.AXF_NECK_TO_ARMPIT:S={x:0,y:0},C={x:0,y:0},b=se(f,U.LEFT_ARMPIT_INTERNAL),A=se(f,U.RIGHT_ARMPIT_INTERNAL),G=se(f,U.NECK_INTERNAL);const oe=_;_e=oe.extent.max.x-oe.extent.min.x,_e<ne.UPPER_TORSO_NPTS_LINEAR_HIGH/(.6-.4)?(we=(oe.extent.max.x+oe.extent.min.x)/2,S.x=we-ne.UPPER_TORSO_NPTS_LINEAR_HIGH/2,C.x=we+ne.UPPER_TORSO_NPTS_LINEAR_HIGH/2):(S.x=.6*oe.extent.min.x+.4*oe.extent.max.x,C.x=.4*oe.extent.min.x+.6*oe.extent.max.x),V=se(f,U.LEFT_TOP_ARM_INTERNAL);const Pe=b!=null?b.x:0,Be=b!=null?b.z:0,Ke=A!=null?A.x:0,hn=A!=null?A.z:0;V!=null?(ee=da(V.x,Pe),le=Math.ceil(.65*V.z+.35*Be)):(ee=Pe,le=Be),V=se(f,U.RIGHT_TOP_ARM_INTERNAL),V!=null?(X=da(V.x,Ke),me=Math.ceil(.65*V.z+.35*hn)):(X=Ke,me=hn),de.left.x=ee,de.left.y=le,de.right.x=X,de.right.y=me,D.left.x=S.x,D.left.y=G.z,D.right.x=C.x,D.right.y=G.z;break;case Z.AXF_TOP_TO_NECK:H=se(f,U.TOP_HEAD),G=se(f,U.NECK_INTERNAL),de.left.x=G.x,de.left.y=G.z,de.right.x=G.x,de.right.y=G.z,D.left.x=H.x,D.left.y=H.z,D.right.x=H.x,D.right.y=H.z;break;case Z.AXF_TOPARM_TO_ELBOW:d==Q.LEFT_ARM?(V=se(f,U.LEFT_TOP_ARM_INTERNAL),k=se(f,U.LEFT_ELBOW_INTERNAL)):(V=se(f,U.RIGHT_TOP_ARM_INTERNAL),k=se(f,U.RIGHT_ELBOW_INTERNAL)),de.left.x=k.x,de.left.y=k.z,de.right.x=k.x,de.right.y=k.z,D.left.x=V.x,D.left.y=V.z,D.right.x=V.x,D.right.y=V.z;break;case Z.AXF_ELBOW_TO_HAND:d==Q.LEFT_ARM?(q=se(f,U.LEFT_WRIST_INTERNAL),k=se(f,U.LEFT_ELBOW_INTERNAL)):(q=se(f,U.RIGHT_WRIST_INTERNAL),k=se(f,U.RIGHT_ELBOW_INTERNAL)),de.left.x=q.x,de.left.y=q.z,de.right.x=q.x,de.right.y=q.z,D.left.x=k.x,D.left.y=k.z,D.right.x=k.x,D.right.y=k.z}return{start:de,end:D}}(e,n.id,t,l);return s.setSamplingParameters(c),s.setCentroids(u),s.build()}function px(e,n,t){t?function(i,a){if(a.id==Q.TORSO){const s=se(i,U.CHEST_LEVEL),l=se(i,U.LOW_CHEST_LEVEL),c=se(i,U.WAIST_INTERNAL),u=se(i,U.HIP_INTERNAL),f=se(i,U.NECK_INTERNAL);if(se(i,U.LEFT_SHOULDER),se(i,U.RIGHT_SHOULDER),i.version>1.99){Ne(a,O.TORSO_TOPHEAD,a.layers.length-1),Ne(a,O.TORSO_NECK_PREPROCESS,Wi(a,f.y)),Ne(a,O.TORSO_WAIST_PREPROCESS,Wi(a,c.y)),Ne(a,O.TORSO_HIP_PREPROCESS,Wi(a,u.y)),Ne(a,O.TORSO_CROTCH,0),Kt(a,O.TORSO_ARMPIT_LOWER,O.TORSO_CROTCH,O.TORSO_TOPHEAD),bn(a,O.TORSO_ARMPIT_PREPROCESS,O.TORSO_ARMPIT_LOWER),It(a,O.TORSO_ARMPIT_UPPER,O.TORSO_ARMPIT_LOWER),Ne(a,O.TORSO_CHEST_PREPROCESS,Ti(a,s.y)),Ne(a,O.TORSO_LOW_CHEST_PREPROCESS,Ti(a,l.y));const d=Fe(a,O.TORSO_ARMPIT_LOWER);Ne(a,O.TORSO_CROTCH_ARMPIT_THIRD,Math.round(.333*d.value))}else i.version>1.199&&(Ne(a,O.TORSO_NECK_PREPROCESS,a.layers.length-1),Ne(a,O.TORSO_WAIST_PREPROCESS,Wi(a,c.y)),Ne(a,O.TORSO_HIP_PREPROCESS,Wi(a,u.y)),Ne(a,O.TORSO_CROTCH,0),Kt(a,O.TORSO_ARMPIT_LOWER,O.TORSO_WAIST,O.TORSO_NECK),bn(a,O.TORSO_ARMPIT_PREPROCESS,O.TORSO_ARMPIT_LOWER),It(a,O.TORSO_ARMPIT_UPPER,O.TORSO_ARMPIT_LOWER));bn(a,O.TORSO_WAIST_LOWER,O.TORSO_WAIST_PREPROCESS),bn(a,O.TORSO_WAIST_UPPER,O.TORSO_WAIST_PREPROCESS),bn(a,O.TORSO_HIP_LOWER,O.TORSO_HIP_PREPROCESS),bn(a,O.TORSO_HIP_UPPER,O.TORSO_HIP_PREPROCESS),bn(a,O.TORSO_NECK_LOWER,O.TORSO_NECK_PREPROCESS),bn(a,O.TORSO_NECK_UPPER,O.TORSO_NECK_PREPROCESS),bn(a,O.TORSO_LOW_CHEST,O.TORSO_LOW_CHEST_PREPROCESS)}const o=Je(i,Q.CHEST_WALL);if(o!=null){const s=Fe(a,O.TORSO_LOW_CHEST_PREPROCESS),l=Fe(a,O.TORSO_WAIST_PREPROCESS),c=Fe(a,O.TORSO_ARMPIT_PREPROCESS),u=Fe(a,O.TORSO_NECK_PREPROCESS);Ne(o,O.CHESTWALL_WAIST_PREPROCESS,0);const f=s.value-l.value;Ne(o,O.CHESTWALL_LOW_CHEST_PREPROCESS,f);const d=c.value-l.value;Ne(o,O.CHESTWALL_ARMPIT_PREPROCESS,d),Ne(o,O.CHESTWALL_HIGH_CHEST_PREPROCESS,(u.value+c.value+1)/2-l.value),Ne(o,O.CHESTWALL_CHEST_PREPROCESS,(5*d+5*f)/10),bn(o,O.CHESTWALL_WAIST,O.CHESTWALL_WAIST_PREPROCESS),bn(o,O.CHESTWALL_CHEST,O.CHESTWALL_CHEST_PREPROCESS),bn(o,O.CHESTWALL_ARMPIT,O.CHESTWALL_ARMPIT_PREPROCESS)}if(a.id==Q.LEFT_LEG){const s=se(i,U.LEFT_KNEE_INTERNAL),l=se(i,U.LEFT_ANKLE_INTERNAL);Ne(a,O.LEFTLEG_THIGH,a.layers.length-1),Ne(a,O.LEFTLEG_KNEE,Er(a,s.y)),Ne(a,O.LEFTLEG_ANKLE,ni(2,Er(a,l.y))),Ne(a,O.LEFTLEG_FLOOR,0),bn(a,O.LEFTLEG_ANKLE_LOWER,O.LEFTLEG_ANKLE),bn(a,O.LEFTLEG_ANKLE_UPPER,O.LEFTLEG_ANKLE),bn(a,O.LEFTLEG_KNEE_LOWER,O.LEFTLEG_KNEE),bn(a,O.LEFTLEG_KNEE_UPPER,O.LEFTLEG_KNEE)}if(a.id==Q.RIGHT_LEG){const s=se(i,U.RIGHT_KNEE_INTERNAL),l=se(i,U.RIGHT_ANKLE_INTERNAL);Ne(a,O.RIGHTLEG_THIGH,a.layers.length-1),Ne(a,O.RIGHTLEG_KNEE,Er(a,s.y)),Ne(a,O.RIGHTLEG_ANKLE,ni(2,Er(a,l.y))),Ne(a,O.RIGHTLEG_FLOOR,0),bn(a,O.RIGHTLEG_ANKLE_LOWER,O.RIGHTLEG_ANKLE),bn(a,O.RIGHTLEG_ANKLE_UPPER,O.RIGHTLEG_ANKLE),bn(a,O.RIGHTLEG_KNEE_LOWER,O.RIGHTLEG_KNEE),bn(a,O.RIGHTLEG_KNEE_UPPER,O.RIGHTLEG_KNEE)}if(a.id==Q.LEFT_ARM){const s=se(i,U.LEFT_ELBOW_INTERNAL),l=se(i,U.LEFT_WRIST_INTERNAL);Ne(a,O.LEFTARM_TOPARM,a.layers.length-1),Ne(a,O.LEFTARM_ELBOW,Er(a,s.y)),Ne(a,O.LEFTARM_WRIST,Er(a,l.y)),Ne(a,O.LEFTARM_HAND,0),bn(a,O.LEFTARM_ELBOW_LOWER,O.LEFTARM_ELBOW),bn(a,O.LEFTARM_ELBOW_UPPER,O.LEFTARM_ELBOW)}if(a.id==Q.RIGHT_ARM){const s=se(i,U.RIGHT_ELBOW_INTERNAL),l=se(i,U.RIGHT_WRIST_INTERNAL);Ne(a,O.RIGHTARM_TOPARM,a.layers.length-1),Ne(a,O.RIGHTARM_ELBOW,Er(a,s.y)),Ne(a,O.RIGHTARM_WRIST,Er(a,l.y)),Ne(a,O.RIGHTARM_HAND,0),bn(a,O.RIGHTARM_ELBOW_LOWER,O.RIGHTARM_ELBOW),bn(a,O.RIGHTARM_ELBOW_UPPER,O.RIGHTARM_ELBOW)}}(e,n):function(i,a){if(a.id==Q.LEFT_LEG&&(Ne(a,O.LEFTLEG_THIGH,a.layers.length-1),Ne(a,O.LEFTLEG_FLOOR,0),Kt(a,O.LEFTLEG_ANKLE_LOWER,O.LEFTLEG_FLOOR,O.LEFTLEG_THIGH),It(a,O.LEFTLEG_ANKLE_UPPER,O.LEFTLEG_ANKLE_LOWER),Ne(a,O.LEFTLEG_KNEE_LOWER,js(a,O.LEFTLEG_ANKLE_UPPER,O.LEFTLEG_THIGH)),It(a,O.LEFTLEG_KNEE_UPPER,O.LEFTLEG_KNEE_LOWER)),a.id==Q.RIGHT_LEG&&(Ne(a,O.RIGHTLEG_THIGH,a.layers.length-1),Ne(a,O.RIGHTLEG_FLOOR,0),Kt(a,O.RIGHTLEG_ANKLE_LOWER,O.RIGHTLEG_FLOOR,O.RIGHTLEG_THIGH),It(a,O.RIGHTLEG_ANKLE_UPPER,O.RIGHTLEG_ANKLE_LOWER),Kt(a,O.RIGHTLEG_KNEE_LOWER,O.RIGHTLEG_ANKLE_UPPER,O.RIGHTLEG_THIGH),It(a,O.RIGHTLEG_KNEE_UPPER,O.RIGHTLEG_KNEE_LOWER)),a.id==Q.LEFT_ARM&&(Ne(a,O.LEFTARM_TOPARM,a.layers.length-1),Ne(a,O.LEFTARM_HAND,0),Kt(a,O.LEFTARM_ELBOW_LOWER,O.LEFTARM_HAND,O.LEFTARM_TOPARM),It(a,O.LEFTARM_ELBOW_UPPER,O.LEFTARM_ELBOW_LOWER),Ne(a,O.LEFTARM_WRIST,0)),a.id==Q.RIGHT_ARM&&(Ne(a,O.RIGHTARM_TOPARM,a.layers.length-1),Ne(a,O.RIGHTARM_HAND,0),Kt(a,O.RIGHTARM_ELBOW_LOWER,O.RIGHTARM_HAND,O.RIGHTARM_TOPARM),It(a,O.RIGHTARM_ELBOW_UPPER,O.RIGHTARM_ELBOW_LOWER),Ne(a,O.RIGHTARM_WRIST,0)),a.id==Q.TORSO||a.id==Q.CHEST_WALL){i.noHead||Ne(a,O.TORSO_TOPHEAD,a.layers.length-1),Ne(a,O.TORSO_CROTCH,0),Kt(a,O.TORSO_HIP_LOWER,O.TORSO_CROTCH,O.TORSO_TOPHEAD),It(a,O.TORSO_HIP_UPPER,O.TORSO_HIP_LOWER),Kt(a,O.TORSO_WAIST_LOWER,O.TORSO_HIP_UPPER,O.TORSO_TOPHEAD),It(a,O.TORSO_WAIST_UPPER,O.TORSO_WAIST_LOWER),Kt(a,O.TORSO_ARMPIT_LOWER,O.TORSO_WAIST_UPPER,O.TORSO_TOPHEAD),It(a,O.TORSO_ARMPIT_UPPER,O.TORSO_ARMPIT_LOWER),js(a,O.TORSO_ARMPIT_UPPER,O.TORSO_NECK_LOWER)?It(a,O.TORSO_NECK_UPPER,O.TORSO_NECK_LOWER):Ne(a,O.TORSO_NECK_LOWER,a.layers.length-1);const o=Fe(a,O.TORSO_ARMPIT_LOWER);if(i.sex==Ei.MALE){const u=Fe(a,O.TORSO_WAIST_UPPER),f=u.value+.8*(o.value-u.value),d=u.value+.8*(f-u.value);Ne(a,O.TORSO_CHEST,f),Ne(a,O.TORSO_LOW_CHEST,d)}else{const u=se(i,U.CHEST_LEVEL),f=se(i,U.LOW_CHEST_LEVEL);Ne(a,O.TORSO_CHEST,ju(a,u)),Ne(a,O.TORSO_LOW_CHEST,ju(a,f))}const s=se(i,U.LEFT_SHOULDER),l=se(i,U.RIGHT_SHOULDER);s&&l&&Ne(a,O.TORSO_SHOULDER,Ti(a,da(s.y,l.y)));const c=Math.floor(.333*o.value);Ne(a,O.TORSO_CROTCH_ARMPIT_THIRD,c)}if(a.id==Q.CHEST_WALL){const o=Je(i,Q.TORSO),s=Fe(o,O.TORSO_LOW_CHEST),l=Fe(o,O.TORSO_WAIST_UPPER),c=Fe(o,O.TORSO_ARMPIT_LOWER),u=Fe(o,O.TORSO_NECK_LOWER),f=Fe(o,O.TORSO_ARMPIT_UPPER);Ne(a,O.CHESTWALL_WAIST,0),Ne(a,O.CHESTWALL_LOW_CHEST,s.value-l.value),Ne(a,O.CHESTWALL_ARMPIT,c.value-l.value),Ne(a,O.CHESTWALL_HIGH_CHEST,(u.value+f.value)/2-l.value);const d=Fe(a,O.CHESTWALL_ARMPIT),p=Fe(a,O.CHESTWALL_LOW_CHEST);Ne(a,O.CHESTWALL_CHEST,(5*d.value+5*p.value)/10)}}(e,n);let r=[];if(n.id==Q.TORSO){const i=Fe(n,O.TORSO_NECK_UPPER),a=Fe(n,O.TORSO_TOPHEAD),o=Fe(n,O.TORSO_ARMPIT_UPPER),s=Fe(n,O.TORSO_NECK_LOWER),l=Fe(n,O.TORSO_WAIST_UPPER),c=Fe(n,O.TORSO_ARMPIT_LOWER),u=Fe(n,O.TORSO_HIP_UPPER),f=Fe(n,O.TORSO_WAIST_LOWER),d=Fe(n,O.TORSO_CROTCH),p=Fe(n,O.TORSO_CROTCH_ARMPIT_THIRD);r.push(qn(e,n,Z.AXF_TOP_TO_NECK,i??s,a)),r.push(qn(e,n,Z.AXF_NECK_TO_ARMPIT,o,s)),r.push(qn(e,n,Z.AXF_ARMPIT_TO_WAIST,l,c)),r.push(qn(e,n,Z.AXF_WAIST_TO_HIP,u,f)),r.push(qn(e,n,Z.AXF_HIP_TO_CROTCH,d,u)),r.push(qn(e,n,Z.AXF_THIRD_TO_ARMPIT,p,o??c))}if(n.id==Q.CHEST_WALL)if(t){const i=Fe(n,O.CHESTWALL_WAIST_PREPROCESS),a=Fe(n,O.CHESTWALL_ARMPIT_PREPROCESS);r.push(qn(e,n,Z.AXF_ARMPIT_TO_WAIST,i,a))}else{const i=Fe(n,O.CHESTWALL_WAIST),a=Fe(n,O.CHESTWALL_ARMPIT);r.push(qn(e,n,Z.AXF_ARMPIT_TO_WAIST,i,a))}if(n.id==Q.LEFT_LEG){const i=Fe(n,O.LEFTLEG_KNEE_UPPER),a=Fe(n,O.LEFTLEG_THIGH),o=Fe(n,O.LEFTLEG_ANKLE_UPPER),s=Fe(n,O.LEFTLEG_KNEE_LOWER),l=Fe(n,O.LEFTLEG_FLOOR),c=Fe(n,O.LEFTLEG_ANKLE_LOWER);r.push(qn(e,n,Z.AXF_THIGH_TO_KNEE,i,a)),r.push(qn(e,n,Z.AXF_KNEE_TO_ANKLE,o,s)),r.push(qn(e,n,Z.AXF_ANKLE_TO_FLOOR,l,c))}if(n.id==Q.RIGHT_LEG){const i=Fe(n,O.RIGHTLEG_KNEE_UPPER),a=Fe(n,O.RIGHTLEG_THIGH),o=Fe(n,O.RIGHTLEG_ANKLE_UPPER),s=Fe(n,O.RIGHTLEG_KNEE_LOWER),l=Fe(n,O.RIGHTLEG_FLOOR),c=Fe(n,O.RIGHTLEG_ANKLE_LOWER);r.push(qn(e,n,Z.AXF_THIGH_TO_KNEE,i,a)),r.push(qn(e,n,Z.AXF_KNEE_TO_ANKLE,o,s)),r.push(qn(e,n,Z.AXF_ANKLE_TO_FLOOR,l,c))}if(n.id==Q.LEFT_ARM){const i=Fe(n,O.LEFTARM_ELBOW_UPPER),a=Fe(n,O.LEFTARM_TOPARM),o=Fe(n,O.LEFTARM_WRIST),s=Fe(n,O.LEFTARM_ELBOW_LOWER);r.push(qn(e,n,Z.AXF_TOPARM_TO_ELBOW,i,a)),r.push(qn(e,n,Z.AXF_ELBOW_TO_HAND,o,s))}if(n.id==Q.RIGHT_ARM){const i=Fe(n,O.RIGHTARM_ELBOW_UPPER),a=Fe(n,O.RIGHTARM_TOPARM),o=Fe(n,O.RIGHTARM_WRIST),s=Fe(n,O.RIGHTARM_ELBOW_LOWER);r.push(qn(e,n,Z.AXF_TOPARM_TO_ELBOW,i,a)),r.push(qn(e,n,Z.AXF_ELBOW_TO_HAND,o,s))}r=r.filter(i=>i),n.splineRegions=r}function yp(e,n,t){for(const r of e.bodyParts)px(e,r,n)}function Ga(e,n,t,r){const i=e.vertices.length-1;if(n>i)return console.log("Point Reference 0: Index: "+n+", Exceeded array max: "+i),null;if(t>i)return console.log("Point Reference 1: Index: "+t+", Exceeded array max: "+i),null;if(r>i)return console.log("Point Reference 2: Index: "+r+", Exceeded array max: "+i),null;const a=[n,t,r];return{nSides:e.noSides,pointReference:a}}function Dr(e,n){const t=n.startLayer,r=n.endLayer;if(r>t){let i=n.startVertex;const a=[];for(let o=t;o<r;o++){const s=e.layers[o],l=e.layers[o+1];if(!s){console.log(e.id+" "+n.id+" layer is null: counter: "+o);continue}if(l==null){console.log(e.id+" "+n.id+" layer is null: counter: "+(o+1));continue}if(s.splineLayer==null){console.log(e.id+" "+n.id+" "+s.id+" splineLayer is null: counter: "+o);continue}if(l.splineLayer==null){console.log(e.id+" "+n.id+" "+l.id+" splineLayer is null: counter: "+(o+1));continue}const c=s.splineLayer.surface,u=l.splineLayer.surface;if(!c.nodes.length){console.log(e.id+" "+n.id+" "+l.id+" splineLayer is empty: counter: "+(o+1));continue}if(!u.nodes.length){console.log(e.id+" "+n.id+" "+l.id+" splineLayer is empty: counter: "+(o+1));continue}if(c.nodes.length!=u.nodes.length){console.log(" CubicSpline Node size not equal: A: size: "+c.nodes.length+", y: "+s.y+", B: size: "+u.nodes.length+", y: "+l.y);continue}if(s.y==l.y){console.log("CubicSpline Same Y Level: A: size: "+c.nodes.length+", y: "+s.y+", B: size: "+u.nodes.length+", y: "+l.y);continue}const f=i+c.nodes.length,d=2*c.nodes.length;if(a.length+d<ne.BIG_POSITIVE_NUMBER_INT){for(let m=0;m<c.nodes.length-2;m++){const h=Ga(n,f+m,f+m+1,i+m);a.push(h);const T=Ga(n,i+m,f+m+1,i+m+1);a.push(T)}const p=c.nodes.length-2,_=Ga(n,f+p,f,i+p);a.push(_);const g=Ga(n,i+p,f,i);a.push(g)}i+=c.nodes.length}n.polygons=a}}function hx(e,n,t){for(let r of n.splineRegions)r.noSides=t,n.id==Q.TORSO?(e.noTorso||r.id!=Z.AXF_HIP_TO_CROTCH&&r.id!=Z.AXF_WAIST_TO_HIP&&r.id!=Z.AXF_NECK_TO_ARMPIT||Dr(n,r),e.noBust||r.id==Z.AXF_ARMPIT_TO_WAIST&&Dr(n,r),e.noHead||r.id==Z.AXF_TOP_TO_NECK&&Dr(n,r)):n.id==Q.CHEST_WALL?e.noTorso||e.noBust||r.id==Z.AXF_ARMPIT_TO_WAIST&&Dr(n,r):n.id==Q.LEFT_LEG||n.id==Q.RIGHT_LEG?e.noLegs||r.id!=Z.AXF_ANKLE_TO_FLOOR&&r.id!=Z.AXF_KNEE_TO_ANKLE&&r.id!=Z.AXF_THIGH_TO_KNEE||Dr(n,r):n.id==Q.LEFT_ARM||n.id==Q.RIGHT_ARM?e.noArms||r.id!=Z.AXF_TOPARM_TO_ELBOW&&r.id!=Z.AXF_ELBOW_TO_HAND||Dr(n,r):n.id==Q.MJB_BUST&&(r.id!=Z.AXF_ARMPIT_TO_WAIST&&r.id!=Z.AXF_NECK_TO_ARMPIT||Dr(n,r))}function mx(e,n){const t=[];for(let r of e.nodes)t.push({x:r.point.x,y:n,z:r.point.y});return t}function Ur(e,n,t){if(!e.layers.length)return void console.log(`${e.id} ${n.id} Layers are empty`);let r=[];const i=n.startLayer,a=n.endLayer;for(let o=i;o<=a;o++){const s=e.layers[o];if(s.splineLayer&&s.splineLayer.surface){const l=s.splineLayer.surface;r=r.concat(mx(l,s.y))}else console.log(`${e.id} ${n.id} Spline layer empty`)}n.vertices=r,n.extent=Ep(r)}function _x(e,n){for(const t of n.splineRegions)n.id==Q.TORSO?(e.noTorso||t.id!=Z.AXF_HIP_TO_CROTCH&&t.id!=Z.AXF_WAIST_TO_HIP||Ur(n,t,e.colour),e.noBust||t.id!=Z.AXF_ARMPIT_TO_WAIST&&t.id!=Z.AXF_NECK_TO_ARMPIT||Ur(n,t,e.colour),e.noHead||t.id==Z.AXF_TOP_TO_NECK&&Ur(n,t,e.colour)):n.id==Q.CHEST_WALL?e.noTorso||e.noBust||t.id==Z.AXF_ARMPIT_TO_WAIST&&Ur(n,t):n.id==Q.LEFT_LEG||n.id==Q.RIGHT_LEG?e.noLegs||t.id!=Z.AXF_ANKLE_TO_FLOOR&&t.id!=Z.AXF_KNEE_TO_ANKLE&&t.id!=Z.AXF_THIGH_TO_KNEE||Ur(n,t,e.colour):n.id==Q.RIGHT_ARM||n.id==Q.LEFT_ARM?e.noArms||t.id!=Z.AXF_TOPARM_TO_ELBOW&&t.id!=Z.AXF_ELBOW_TO_HAND||Ur(n,t,e.colour):n.id==Q.MJB_BUST&&(t.id!=Z.AXF_ARMPIT_TO_WAIST&&t.id!=Z.AXF_NECK_TO_ARMPIT||Ur(n,t,e.colour))}function Lp(e){const{x:n,y:t,z:r}=e,i=Math.sqrt(n*n+t*t+r*r);i!=0&&(e.x=n/i,e.y=t/i,e.z=r/i)}function gx(e,n,t){return function(r,i){const a={x:r.y*i.z-r.z*i.y,y:r.z*i.x-r.x*i.z,z:r.x*i.y-r.y*i.x};return Lp(a),a}({x:n.x-e.x,y:n.y-e.y,z:n.z-e.z},{x:t.x-e.x,y:t.y-e.y,z:t.z-e.z})}function vx(e,n,t){try{const r=n.nSides,i=[],a=[];for(let o=0;o<r;o++)a[o]=n.pointReference[o],a[o]>t-1?console.log("Exceeded vertices array size: nVertices: "+t+", index: "+a[o]):i[o]=e.vertices[a[o]];if(i[0]&&i[1]&&i[2]){const o=gx(i[0],i[1],i[2]);n.normal=o}}catch(r){console.log(e.id+" Normal out of range",r)}}function Ex(e){if(e.DONE_SMOOTH_NORMALS||!e.polygons||!e.polygons.length)return;e.DONE_NORMALS||function(i){if(!i.DONE_NORMALS){const a=i.vertices.length;for(let o of i.polygons)vx(i,o,a);i.DONE_NORMALS=!0}}(e);const n=[];for(let i=0;i<e.vertices.length;i++){const a={x:0,y:0,z:0};for(let o of e.polygons)for(let s=0;s<e.noSides;s++)i==o.pointReference[s]&&(o.normal?(t=a,r=o.normal,t.x=t.x+r.x,t.y=t.y+r.y,t.z=t.z+r.z):console.log("Polygon has null normal"));n.push(a)}var t,r;e.normals=n}(function(e){e[e.AXF_LOW=1]="AXF_LOW",e[e.AXF_MEDIUM=2]="AXF_MEDIUM",e[e.AXF_HIGH=3]="AXF_HIGH"})(Ln||(Ln={})),function(e){e[e.START_LEFT_X=1]="START_LEFT_X",e[e.START_LEFT_Y=2]="START_LEFT_Y",e[e.START_RIGHT_X=3]="START_RIGHT_X",e[e.START_RIGHT_Y=4]="START_RIGHT_Y",e[e.END_LEFT_X=5]="END_LEFT_X",e[e.END_LEFT_Y=6]="END_LEFT_Y",e[e.END_RIGHT_X=7]="END_RIGHT_X",e[e.END_RIGHT_Y=8]="END_RIGHT_Y",e[e.START_LAYER=9]="START_LAYER",e[e.END_LAYER=10]="END_LAYER",e[e.NRADIAL=11]="NRADIAL",e[e.NLINEAR=12]="NLINEAR"}(rt||(rt={}));function Zs(e,n){return e.splineRegions.find(t=>t.id==n)}function Zu(e,n,t){if(e)return function(r,i){switch(i){case rt.START_LEFT_X:return r.start.left.x;case rt.START_LEFT_Y:return r.start.left.y;case rt.START_RIGHT_X:return r.start.right.x;case rt.START_RIGHT_Y:return r.start.right.y;case rt.END_LEFT_X:return r.end.left.x;case rt.END_LEFT_Y:return r.end.left.y;case rt.END_RIGHT_X:return r.end.right.x;case rt.END_RIGHT_Y:return r.end.right.y;case rt.START_LAYER:return r.startLayer;case rt.END_LAYER:return r.endLayer;case rt.NRADIAL:return r.noRadial;case rt.NLINEAR:return r.noLinear}return 0}(Zs(e,n),t)}function Ju(e,n,t){return n.startVertex+(t-n.startLayer)*e.layers[t].splineLayer.surface.nodes.length}function $u(e,n,t,r,i,a){if(!e.normals||!n.normals)return void console.error("Spline region normals was null: "+t+", vNearest: "+r);const o=e.normals[t],s=n.normals[r];var l,c;o&&s?i[a]=(c=s,{x:(l=o).x+c.x,y:l.y+c.y,z:l.z+c.z}):console.error("Vector was null, vIndexB: "+t+", vNearest: "+r)}function Tx(e,n,t,r){try{const i=e.normals[n];i!=null?t[r]=JSON.parse(JSON.stringify(i)):console.log(e.id+" Vector was null, vIndexB: "+n+", list size: "+e.normals.length)}catch{console.log(e.id+" Out of bounds")}}function Sx(e,n,t,r,i,a){const o=e.layers[t],s=r.layers[a];if(o&&s){const l=Zs(e,n),c=Zs(r,i);return l&&c&&(l.vertices&&c.vertices?function(u,f,d,p,_,g){const m=f.splineLayer.surface,h=_.splineLayer.surface;if(m.nodes.length>0&&h.nodes.length>0){const T=[],v=[];for(let E=0;E<m.nodes.length;E++){const L=d+E;let I=0,x=ne.BIG_POSITIVE_NUMBER_SNG;for(let b=0;b<h.nodes.length;b++){const A=g+b,S=u.vertices[L],C=p.vertices[A];if(!S||!C){console.log("vertexA or vertexB was missing");continue}const H=fa({x:S.x,y:S.z},{x:C.x,y:C.z});H>=x||(I=A,x=H)}x>=300?Tx(u,L,T,E):$u(u,p,L,I,T,E)}for(let E=0;E<h.nodes.length;E++){const L=g+E;let I=0,x=ne.BIG_POSITIVE_NUMBER_SNG;for(let b=0;b<m.nodes.length;b++){const A=d+b,S=u.vertices[A],C=p.vertices[L];if(!S||!C){console.log("vertexA or vertexB was missing");continue}const H=fa({x:S.x,y:S.z},{x:C.x,y:C.z});H>=x||(I=A,x=H)}x>=300||$u(p,u,L,I,v,E)}for(let E=0;E<m.nodes.length;E++){const L=T[E];L?u.normals[d+E]=L:console.log(`Spline region:${u.type}, y: ${f.y}, iNodeA: ${E}: Normal was NULL`)}for(let E=0;E<h.nodes.length;E++){const L=v[E];L?p.normals[g+E]=L:console.log(`Spline region:${p.type}, y: ${_.y}, iNodeB: ${E}: Normal was NULL`)}}}(l,o,Ju(e,l,t),c,s,Ju(r,c,a)):console.log(`${l.type} or ${c.id} had empty vertices`)),!0}return!1}function _t(e,n,t,r,i,a){const o=Fe(e,t),s=Fe(r,a);if(o&&s)return Sx(e,n,o.value,r,i,s.value);console.error(`${e.type}:${n} ${r.type}:${i} One of the layer markers is missing`)}function Rx(e){if(e.normals){for(let n of e.normals)Lp(n);e.DONE_SMOOTH_NORMALS=!0}else console.error(`${e.id} Spline region normals empty`)}function Ax(e){(function(n){for(let t of n.bodyParts)for(let r of t.splineRegions)r.vertices&&r.vertices.length?(Ex(r),r.DONE_SMOOTH_NORMALS=!0):console.error(`${t.id} ${t.type} ${r.id} Vertices list is NULL`)})(e),function(n){if(n.version<1.999)return;const t=Je(n,Q.TORSO),r=Je(n,Q.LEFT_LEG),i=Je(n,Q.RIGHT_LEG),a=Je(n,Q.LEFT_ARM),o=Je(n,Q.RIGHT_ARM),s=Je(n,Q.MJB_BUST);if(t&&(n.noHead||n.noTorso||_t(t,Z.AXF_NECK_TO_ARMPIT,O.TORSO_NECK_LOWER,t,Z.AXF_TOP_TO_NECK,O.TORSO_NECK_UPPER),n.noTorso||(_t(t,Z.AXF_ARMPIT_TO_WAIST,O.TORSO_ARMPIT_LOWER,t,Z.AXF_NECK_TO_ARMPIT,O.TORSO_ARMPIT_UPPER),_t(t,Z.AXF_WAIST_TO_HIP,O.TORSO_WAIST_LOWER,t,Z.AXF_ARMPIT_TO_WAIST,O.TORSO_WAIST_UPPER),_t(t,Z.AXF_HIP_TO_CROTCH,O.TORSO_HIP_LOWER,t,Z.AXF_WAIST_TO_HIP,O.TORSO_HIP_UPPER)),n.noTorso||n.noLegs||(r&&_t(t,Z.AXF_HIP_TO_CROTCH,O.TORSO_CROTCH,r,Z.AXF_THIGH_TO_KNEE,O.LEFTLEG_THIGH),i&&_t(t,Z.AXF_HIP_TO_CROTCH,O.TORSO_CROTCH,i,Z.AXF_THIGH_TO_KNEE,O.RIGHTLEG_THIGH))),n.noLegs||(r&&(_t(r,Z.AXF_THIGH_TO_KNEE,O.LEFTLEG_KNEE_UPPER,r,Z.AXF_KNEE_TO_ANKLE,O.LEFTLEG_KNEE_LOWER),_t(r,Z.AXF_KNEE_TO_ANKLE,O.LEFTLEG_ANKLE_UPPER,r,Z.AXF_ANKLE_TO_FLOOR,O.LEFTLEG_ANKLE_LOWER)),i&&(_t(i,Z.AXF_THIGH_TO_KNEE,O.RIGHTLEG_KNEE_UPPER,i,Z.AXF_KNEE_TO_ANKLE,O.RIGHTLEG_KNEE_LOWER),_t(i,Z.AXF_KNEE_TO_ANKLE,O.RIGHTLEG_ANKLE_UPPER,i,Z.AXF_ANKLE_TO_FLOOR,O.RIGHTLEG_ANKLE_LOWER))),n.noArms||(a&&_t(a,Z.AXF_TOPARM_TO_ELBOW,O.LEFTARM_ELBOW_UPPER,a,Z.AXF_ELBOW_TO_HAND,O.LEFTARM_ELBOW_LOWER),o&&_t(o,Z.AXF_TOPARM_TO_ELBOW,O.RIGHTARM_ELBOW_UPPER,o,Z.AXF_ELBOW_TO_HAND,O.RIGHTARM_ELBOW_LOWER)),s){const l=Zu(s,Z.AXF_ARMPIT_TO_WAIST,rt.END_LAYER),c=Zu(s,Z.AXF_NECK_TO_ARMPIT,rt.START_LAYER);_t(s,Z.AXF_NECK_TO_ARMPIT,c,s,Z.AXF_ARMPIT_TO_WAIST,l)}}(e),function(n){for(let t of n.bodyParts)for(let r of t.splineRegions)r.vertices&&r.vertices.length?Rx(r):console.error(`${r.type}: Spline region initialised but no vertices added`)}(e)}var cn,ye,En,it,Ji,hi,pa,Ir,Sr,Ar;function Js(e){let n=Object.keys(En).filter(t=>En[t]==e);return n.length>0?n[0]:null}function nr(e){return e.layers[0]}function Qu(e){return e[e.length-1]}function zi(e,n,t,r){const i=r-t,a=e.b+2*e.c*i+3*e.d*i*i,o=n.b+2*n.c*i+3*n.d*i*i;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}function Ja(e,n,t){const{parametricNodes:r,parametricCoefficients:i}=e;let a=0,o=0;for(let s=n;s<t;s++){const l=i.xs_coeffs[s],c=i.ys_coeffs[s],u=r.xsPoints[s].x,f=r.xsPoints[s].x,d=(f-u)/22,p=zi(l,c,u,u),_=zi(l,c,u,f);let g=0;for(let m=1;m<10;m++){a=u+(2*m-1)*d;const h=zi(l,c,u,a);a=u+2*m*d,g=g+4*h+2*zi(l,c,u,a)}a+=d,o+=d*(p+g+4*zi(l,c,u,a)+_)/3}return o}(function(e){e[e.FRONT=1]="FRONT",e[e.SIDE=2]="SIDE",e[e.REAR=3]="REAR"})(cn||(cn={})),function(e){e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT"}(ye||(ye={})),function(e){e[e.NONE=0]="NONE",e[e.AXF_LEG_FRONT_OUTER=1]="AXF_LEG_FRONT_OUTER",e[e.AXF_LEG_FRONT_INNER=2]="AXF_LEG_FRONT_INNER",e[e.AXF_LEG_FRONT_JOIN_LOWER=3]="AXF_LEG_FRONT_JOIN_LOWER",e[e.AXF_LEG_FRONT_JOIN_UPPER=4]="AXF_LEG_FRONT_JOIN_UPPER",e[e.AXF_LEG_SIDE_REAR=5]="AXF_LEG_SIDE_REAR",e[e.AXF_LEG_SIDE_FRONT=6]="AXF_LEG_SIDE_FRONT",e[e.AXF_LEG_SIDE_JOIN_LOWER=7]="AXF_LEG_SIDE_JOIN_LOWER",e[e.AXF_LEG_SIDE_JOIN_UPPER=8]="AXF_LEG_SIDE_JOIN_UPPER",e[e.AXF_ARM_FRONT_OUTER=9]="AXF_ARM_FRONT_OUTER",e[e.AXF_ARM_FRONT_INNER=10]="AXF_ARM_FRONT_INNER",e[e.AXF_ARM_FRONT_JOIN_LOWER=11]="AXF_ARM_FRONT_JOIN_LOWER",e[e.AXF_ARM_FRONT_JOIN_UPPER=12]="AXF_ARM_FRONT_JOIN_UPPER",e[e.AXF_ARM_SIDE_REAR=13]="AXF_ARM_SIDE_REAR",e[e.AXF_ARM_SIDE_FRONT=14]="AXF_ARM_SIDE_FRONT",e[e.AXF_ARM_SIDE_JOIN_LOWER=15]="AXF_ARM_SIDE_JOIN_LOWER",e[e.AXF_ARM_SIDE_JOIN_UPPER=16]="AXF_ARM_SIDE_JOIN_UPPER",e[e.AXF_TORSO_FRONT_LEFT_LOWER=17]="AXF_TORSO_FRONT_LEFT_LOWER",e[e.AXF_TORSO_FRONT_LEFT_UPPER=18]="AXF_TORSO_FRONT_LEFT_UPPER",e[e.AXF_TORSO_FRONT_LEFT_JOIN_MID=19]="AXF_TORSO_FRONT_LEFT_JOIN_MID",e[e.AXF_TORSO_FRONT_RIGHT_LOWER=20]="AXF_TORSO_FRONT_RIGHT_LOWER",e[e.AXF_TORSO_FRONT_RIGHT_UPPER=21]="AXF_TORSO_FRONT_RIGHT_UPPER",e[e.AXF_TORSO_FRONT_RIGHT_JOIN_MID=22]="AXF_TORSO_FRONT_RIGHT_JOIN_MID",e[e.AXF_TORSO_FRONT_JOIN_LOWER=23]="AXF_TORSO_FRONT_JOIN_LOWER",e[e.AXF_TORSO_SIDE_FRONT=24]="AXF_TORSO_SIDE_FRONT",e[e.AXF_TORSO_SIDE_REAR=25]="AXF_TORSO_SIDE_REAR",e[e.AXF_TORSO_SIDE_JOIN_LOWER=26]="AXF_TORSO_SIDE_JOIN_LOWER",e[e.AXF_TORSO_SIDE_JOIN_UPPER=27]="AXF_TORSO_SIDE_JOIN_UPPER"}(En||(En={})),function(e){e[e.UPPER=1]="UPPER",e[e.LOWER=2]="LOWER"}(it||(it={}));class Di{constructor(){this.nodes=[]}setNodes(n){return this.nodes=n,this}setSamplePoints(n){return this.samplePoints=n,this}setSurfaceMeasure(n){return this.surfaceMeasure=n,this}setParametericNodesAndCoefficients(n){return this.parametricNodesAndCoefficients=n,this}hasNodes(){return this.nodes.length>0}addNode(n){this.nodes.push(n)}addDistinctNode(n,t){return function(r,i,a){if(r==null)r=[];else if(a!=0){if(!(Math.abs(i.x-Qu(r).point.x)+Math.abs(i.y-Qu(r).point.y)>=a))return!1}const o={point:{x:i.x,y:i.y}};return r.push(o),!0}(this.nodes,n,t)}regeneratePointsOnSpline(n=200,t=0,r=this.nodes.length-1,i=!1){this.samplePoints=Aa(this.nodes,this.parametricNodesAndCoefficients.parametricNodes,this.parametricNodesAndCoefficients.parametricCoefficients,n,t,r,i)}remove_end_node(){this.nodes.length>1?this.nodes.pop():this.nodes=[]}generateSpline(){this.parametricNodesAndCoefficients=Rp(this.nodes)}splineLength(n=0,t=this.nodes.length-1){this.surfaceMeasure=Ja(this.parametricNodesAndCoefficients,n,t)}closeLoop(){this.addNode(JSON.parse(JSON.stringify(this.nodes[0])))}build(){return Object.assign({samplePoints:this.samplePoints,nodes:this.nodes,surfaceMeasure:this.surfaceMeasure},this.parametricNodesAndCoefficients)}}function po(e,n){let t=-1;if(e.nodes.length){t=0;let r=Math.abs(function(i){return i.nodes[0]}(e).point.y-n);for(let i=0;i<e.nodes.length;i++){const a=Math.abs(e.nodes[i].point.y-n);a<r&&(t=i,r=a)}}return t}function Si(e,n,t){return t==cn.FRONT?e.frontSilhouette.find(r=>r.id===n):e.sideSilhouette.find(r=>r.id===n)}class Ri{constructor(n){this.silhouetteRegionType=n,this.outlineRefs=[]}setFrontSideRearType(n){return this.frontSideRearType=n,this}setCubicSpline(n){return this.cubicSpline=n,this}setCubicSplineFromSegment(n,t,r){const i=Si(n,t,this.frontSideRearType);if(i==null)return console.error(`Silhouette Spline Segment: Segment not found, segcode:${Js(t)}, front side:${function(l){let c=Object.keys(cn).filter(u=>cn[u]==l);return c.length>0?c[0]:null}(this.frontSideRearType)}`),null;const a=po(i.cubicSpline,this.maxLayer.y),o=po(i.cubicSpline,this.minLayer.y);if(!(a>=0&&o>0&&a<i.cubicSpline.nodes.length-1))return console.error(`Silhouette Spline Segment: Min control index out of range, segcode:${t} (${Js(t)}), minControlIndex:${a}, maxControlIndex:${o}, nNodes:${i.cubicSpline.nodes.length}`),null;const s=new Di;return s.setNodes(i.cubicSpline.nodes),s.setParametericNodesAndCoefficients(i.cubicSpline),s.regeneratePointsOnSpline(r,a,o,!1),this.cubicSpline=s.build(),this}setOutlineRef(n){return this.outlineRefs.push(n),this}setMinLayer(n){return this.minLayer=n,this}setMaxLayer(n){return this.maxLayer=n,this}setMinY(n){return this.minY=n,this}setMaxY(n){return this.maxY=n,this}build(){return{id:this.silhouetteRegionType,frontSideRearType:this.frontSideRearType,cubicSpline:this.cubicSpline,outlineRefs:this.outlineRefs,minLayer:this.minLayer,maxLayer:this.maxLayer,minY:this.minY,maxY:this.maxY}}}function bt(e,n,t,r,i,a,o){const s={x:0,y:0,z:0},l=new Ri(n);l.setFrontSideRearType(o);const c=new Di;for(let _=e.layers.length-1;_>0&&(i!=it.UPPER||_!=r);_--){const g=e.layers[_],m=a==ye.RIGHT?g.extent.max:g.extent.min;s.x=o==cn.SIDE?m.x:m.z,s.y=g.y,c.addDistinctNode(s,t)&&l.setOutlineRef({x:s.x,y:s.y,z:g.extent.mid.z})}const u=i==it.UPPER?e.layers[r]:nr(e),f=a==ye.RIGHT?u.extent.max:u.extent.min;s.x=o==cn.SIDE?f.x:f.z,s.y=u.y;let d=c.addDistinctNode(s,t);d||(c.remove_end_node(),d=c.addDistinctNode(s,t)),d&&l.setOutlineRef({x:s.x,y:s.y,z:u.extent.mid.z}),c.generateSpline(),c.regeneratePointsOnSpline();const p=c.build();return l.setCubicSpline(p),l.build()}function yx(e){e.frontSilhouette=function(n){const t=[];switch(n.id){case Q.LEFT_LEG:case Q.RIGHT_LEG:t.push(bt(n,En.AXF_LEG_FRONT_OUTER,0,0,it.LOWER,ye.LEFT,cn.SIDE)),t.push(bt(n,En.AXF_LEG_FRONT_INNER,0,0,it.LOWER,ye.RIGHT,cn.SIDE));break;case Q.LEFT_ARM:case Q.RIGHT_ARM:t.push(bt(n,En.AXF_ARM_FRONT_OUTER,0,0,it.LOWER,ye.LEFT,cn.SIDE)),t.push(bt(n,En.AXF_ARM_FRONT_INNER,0,0,it.LOWER,ye.RIGHT,cn.SIDE));break;case Q.TORSO:t.push(bt(n,En.AXF_TORSO_FRONT_LEFT_LOWER,0,0,it.LOWER,ye.LEFT,cn.SIDE)),t.push(bt(n,En.AXF_TORSO_FRONT_RIGHT_LOWER,0,0,it.LOWER,ye.RIGHT,cn.SIDE));break;default:return null}return t}(e),e.sideSilhouette=function(n){const t=[];return n.id==Q.LEFT_LEG||n.id==Q.RIGHT_LEG?(t.push(bt(n,En.AXF_LEG_SIDE_FRONT,0,0,it.LOWER,ye.RIGHT,cn.FRONT)),t.push(bt(n,En.AXF_LEG_SIDE_REAR,0,0,it.LOWER,ye.LEFT,cn.FRONT))):n.id==Q.TORSO&&(t.push(bt(n,En.AXF_TORSO_SIDE_FRONT,0,0,it.LOWER,ye.RIGHT,cn.FRONT)),t.push(bt(n,En.AXF_TORSO_SIDE_FRONT,0,0,it.UPPER,ye.RIGHT,cn.FRONT)),t.push(bt(n,En.AXF_TORSO_SIDE_REAR,0,0,it.LOWER,ye.LEFT,cn.FRONT)),t.push(bt(n,En.AXF_TORSO_SIDE_REAR,0,0,it.UPPER,ye.LEFT,cn.FRONT))),t}(e)}function xp(e){for(const n of e.bodyParts)yx(n)}function Lx(e,n){Ap(e),xp(e),e.surfaceDefined&&(yp(e,!1),function(t,r,i){for(const a of t.bodyParts)_x(t,a),hx(t,a,r);i&&Ax(t),t.surfaceDefined=!0}(e,3,n))}function xx(e,n,t){const r=function(i,a,o){const s=i.readShort(),l=new Di;for(let c=0;c<s;c++){let u,f;a==1?u={x:i.readDouble(),y:i.readDouble()}:a>1.0001&&a<3.99999?u={x:i.readShort(),y:i.readShort()}:a>=3.99999&&(u={x:i.readFloat(),y:i.readFloat()}),f=o==1?{x:i.readByte(),y:i.readByte(),z:i.readByte()}:{x:255,y:255,z:255},l.addNode({point:u,colour:f})}if(l.hasNodes())return l.generateSpline(),l.splineLength(),l.build()}(e,n,t);if(r)return{surface:r}}function Mx(e,n,t,r,i){const a=e.readShort();let o,s;return n==1&&(o=function(l,c,u){const f=[],d=[],p=l.readShort();for(let _=0;_<p;_++)f.push({x:l.readShort(),y:c,z:l.readShort()}),u==1?d.push({x:l.readByte(),y:l.readByte(),z:l.readByte()}):d.push({x:255,y:255,z:255});return{points:f,colours:d}}(e,a,r)),t!=1||(s=xx(e,i,r),s)?{y:a,pointLayer:o,splineLayer:s}:(console.error(`Empty spline, layer ignored: y: ${a}`),null)}class Po{constructor(n){if(this.id=n,this.type=function(t){let r=Object.keys(Q).filter(i=>Q[i]==t);return r.length>0?r[0]:null}(n),!this.type)throw new Error(`Body part type ${n} not found`)}setLayerOffset(n){this.layerOffset=n}setLayers(n){this.layers=n}setExtent(n){this.extent=n}build(){return{id:this.id,type:this.type,layerOffset:this.layerOffset,layers:this.layers,extent:this.extent}}}function Ix(e,n,t,r,i){const a=e.readShort(),o=new Po(a);o.setLayerOffset(e.readShort());const s=e.readShort(),l=[];for(let c=0;c<s;c++){const u=Mx(e,n,t,r,i);u?l.push(u):console.error(`Layer failed: bodypart - ${a}, layer - ${c}`)}return o.setLayers(l),o.build()}function bx(e){const n=e.readShort(),t=vi(n);return t==null?void console.log("No landmark type with id: "+n):{id:n,landmarkType:t,x:e.readShort(),y:e.readShort(),z:e.readShort()}}function Ox(e,n){const t={};return t.useMidBust=e.readBoolean(),n>3.01&&(t.regenerateArmpitPoints=e.readBoolean()),t.threeLines=e.readBoolean(),t.armpit_z_biasL=e.readDouble(),t.armpit_z_biasR=e.readDouble(),n>3&&(t.chest_z_biasL=e.readDouble(),t.chest_z_biasR=e.readDouble()),t.waist_z_biasL=e.readDouble(),t.waist_z_biasR=e.readDouble(),t.left_bust_x_bias=e.readDouble(),t.right_bust_x_bias=e.readDouble(),t.mid_bust_x_bias=e.readDouble(),t.z_midspline_adjust_highchest=e.readShort(),t.z_midspline_adjust_armpit=e.readShort(),t.z_midspline_adjust_bust=e.readShort(),t.z_midspline_adjust_underbust=e.readShort(),t.z_midspline_adjust_waist=e.readShort(),t.z_leftspline_adjust_highchest=e.readShort(),t.z_leftspline_adjust_armpit=e.readShort(),t.z_leftspline_adjust_bust=e.readShort(),t.z_leftspline_adjust_underbust=e.readShort(),t.z_leftspline_adjust_waist=e.readShort(),t.z_rightspline_adjust_highchest=e.readShort(),t.z_rightspline_adjust_armpit=e.readShort(),t.z_rightspline_adjust_bust=e.readShort(),t.z_rightspline_adjust_underbust=e.readShort(),t.z_rightspline_adjust_waist=e.readShort(),t.y_midspline_adjust_highchest=e.readShort(),t.y_midspline_adjust_armpit=e.readShort(),t.y_midspline_adjust_bust=e.readShort(),t.y_midspline_adjust_underbust=e.readShort(),t.y_midspline_adjust_waist=e.readShort(),t.y_leftspline_adjust_highchest=e.readShort(),t.y_leftspline_adjust_armpit=e.readShort(),t.y_leftspline_adjust_bust=e.readShort(),t.y_leftspline_adjust_underbust=e.readShort(),t.y_leftspline_adjust_waist=e.readShort(),t.y_rightspline_adjust_highchest=e.readShort(),t.y_rightspline_adjust_armpit=e.readShort(),t.y_rightspline_adjust_bust=e.readShort(),t.y_rightspline_adjust_underbust=e.readShort(),t.y_rightspline_adjust_waist=e.readShort(),t}function Cx(e){const n=e.readShort(),t=Ji[function(r){let i=Object.keys(Ji).filter(a=>Ji[a]==r);return i.length>0?i[0]:null}(n)];return t==null?void console.error(`No measurement type with id: ${n}`):{id:n,measurementType:t,value:e.readFloat()}}function Px(e,n=!0){const t=new mp(e),r=new _p;r.setHeader(function(u){return{version:u.readFloat(),colour:u.readBoolean(),sex:u.readSexType(),yResolutionMM:u.readFloat(),xZResolutionMM:u.readFloat(),rawPointsDefined:u.readBoolean(),surfaceDefined:u.readBoolean(),normalisedPointsInLayer:u.readBoolean(),normalisedLayersInRegion:u.readBoolean()}}(t));const{rawPointsDefined:i,surfaceDefined:a,colour:o,version:s}=r.bodyHeader,l={noHead:!1,noArms:!1,noBust:!1,noLegs:!1,noTorso:!1};s<1.999&&(l.noHead=!0,l.noArms=!0),r.setFlags(l),r.setLandmarks(function(u){const f=[],d=u.readShort();for(let p=0;p<d;p++){const _=bx(u);f.push(_)}return f}(t)),s>1.999&&r.setReferenceLocations(function(u){const f=[],d=u.readShort();for(let p=0;p<d;p++){const _={id:u.readShort(),bodypartID:u.readShort(),layerId:u.readShort(),pointId:u.readInt(),visible:!1};f.push(_)}return f}(t)),function(u,f,d){const p=f.readShort(),_=[];for(let m=0;m<p;m++)_.push(f.readShort());u.setPersonDetails(_);const g=[];for(const m of _)switch(m){case hi.AXF_PD_NAME:case hi.AXF_PD_ADDRESS:break;case hi.AXF_PD_MEASUREMENT:const h=f.readShort();for(let T=0;T<h;T++)g.push(Cx(f));break;case hi.AXF_PD_CHESTWALLPARAMETER:u.setChestWallDefinition(Ox(f,d))}u.setMeasurements(g)}(r,t,s),r.addBodyParts(...function(u,f,d,p,_){const g=[],m=u.readShort();for(let h=0;h<m;h++){const T=Ix(u,f,d,p,_);T&&g.push(T)}return g}(t,i,a,o,s)),a&&r.setNormaliseResolution(function(u){const f=u.find(d=>Q[d.type]===Q.TORSO);if(f)switch(nr(f).splineLayer.surface.nodes.length){case 33:return Ln.AXF_LOW;case 49:return Ln.AXF_MEDIUM;case 65:return Ln.AXF_HIGH}}(r.bodyParts)),t.close();const c=r.build();return Lx(c,n),c}function Nx(e,n,t){const r=JSON.parse(JSON.stringify(e));return r.bodyParts.forEach((i,a)=>{(function(o,s,l){o.layers.forEach((c,u)=>{(function(f,d,p){const _=f.y,g=d.y;f.y=(1-p)*_+p*g,function(m,h,T){m.nodes.forEach((v,E)=>{const L=h.nodes[E],I=v.point.x,x=v.point.y,b=L.point.x,A=L.point.y;v.point.x=(1-T)*I+T*b,v.point.y=(1-T)*x+T*A})}(f.splineLayer.surface,d.splineLayer.surface,p)})(c,s.layers[u],l)})})(i,n.bodyParts[a],t)}),r}function ef(e,n){const t=Fe(e,n);if(!t)return;const r=t.value+1;return e.layers[r]}function Mp(e){const n=se(e,U.NECK_INTERNAL),t=se(e,U.TOP_HEAD);t.y=t.y+1500;const r=se(e,U.CHEST_LEVEL),i=se(e,U.LOW_CHEST_INTERNAL),a=se(e,U.WAIST_INTERNAL),o=se(e,U.HIP_INTERNAL),s=se(e,U.LEFT_TOP_ARM_INTERNAL),l=se(e,U.LEFT_ELBOW_INTERNAL),c=se(e,U.LEFT_WRIST_INTERNAL),u=se(e,U.RIGHT_TOP_ARM_INTERNAL),f=se(e,U.RIGHT_ELBOW_INTERNAL),d=se(e,U.RIGHT_WRIST_INTERNAL),p=ef(Je(e,Q.LEFT_LEG),O.LEFTLEG_FLOOR),_=se(e,U.LEFT_TOP_THIGH_INTERNAL);_.y=o.y;const g=se(e,U.LEFT_KNEE_INTERNAL),m=se(e,U.LEFT_ANKLE_INTERNAL),h=se(e,U.LEFT_FLOOR);h.z=p.extent.max.z;const T=ef(Je(e,Q.RIGHT_LEG),O.RIGHTLEG_FLOOR),v=se(e,U.RIGHT_TOP_THIGH_INTERNAL);v.y=o.y;const E=se(e,U.RIGHT_KNEE_INTERNAL),L=se(e,U.RIGHT_ANKLE_INTERNAL),I=se(e,U.RIGHT_FLOOR);return I.z=T.extent.max.z,{torso:{headInternal:t,hipInternal:o,lowChestInternal:i,neckInternal:n,waistInternal:a,chestLevel:r},leftArm:{leftElbowInternal:l,leftTopArmInternal:s,leftWristInternal:c},leftLeg:{leftAnkleInternal:m,leftFloor:h,leftKneeInternal:g,leftTopThighInternal:_},rightArm:{rightElbowInternal:f,rightTopArmInternal:u,rightWristInternal:d},rightLeg:{rightAnkleInternal:L,rightFloor:I,rightKneeInternal:E,rightTopThighInternal:v}}}function ci(e,n,t){return{x:gs(e.x,n.x,t),y:gs(e.y,n.y,t),z:gs(e.z,n.z,t)}}function gs(e,n,t){return e+t*(n-e)}function Rn(e,n){const{x:t,y:r,z:i}=e,{x:a,y:o,z:s}=n;return{x:t-a,y:r-o,z:i-s}}function wx(e){const n=function(r){const{leftArm:{leftElbowInternal:i,leftTopArmInternal:a,leftWristInternal:o},rightArm:{rightElbowInternal:s,rightTopArmInternal:l,rightWristInternal:c},leftLeg:{leftAnkleInternal:u,leftFloor:f,leftKneeInternal:d,leftTopThighInternal:p},rightLeg:{rightAnkleInternal:_,rightFloor:g,rightKneeInternal:m,rightTopThighInternal:h},torso:{headInternal:T,hipInternal:v,lowChestInternal:E,neckInternal:L,waistInternal:I}}=r,x={x:o.x,y:o.y-800,z:o.z},b={x:c.x,y:c.y-800,z:c.z},A={x:h.x,y:v.y,z:v.z},S=Rn(A,v),C=Rn(p,A),H=Rn(d,p),G=Rn(u,d),V=Rn(f,u),q={x:h.x,y:v.y,z:v.z},k=Rn(q,v),ee=Rn(h,q),X=Rn(m,h),le=Rn(_,m),me=Rn(g,_),_e=ci(v,I,.5),we=Rn(_e,v),de=Rn(I,_e),D=Rn(E,I),ie=ci(E,L,.5),ge=Rn(ie,E),oe=Rn(L,ie),Pe=Rn(T,L),Be=Rn(T,T),Ke=ci(a,L,.66),hn=Rn(Ke,E),en=ci(a,L,.5),An=Rn(en,Ke),P=Rn(i,en),ut=Rn(o,i),an=Rn(x,o),tn=ci(l,L,.66),He=Rn(tn,E),Tn=ci(l,L,.5),De=Rn(Tn,tn),M=Rn(s,Tn),R=Rn(c,s);return{head:{head:Pe,topHead:Be},leftArm:{leftArm:An,leftFingerBase:an,leftForeArm:P,leftHand:ut,leftShoulder:hn,leftHandBase:x},leftLeg:{leftFoot:G,leftHip:A,leftLeg:H,leftToeBase:V,leftUpLeg:C,lHipJoint:S},rightArm:{rightArm:De,rightFingerBase:Rn(b,c),rightForeArm:M,rightHand:R,rightShoulder:He,rightHandBase:b},rightLeg:{rHipJoint:k,rightFoot:le,rightHip:q,rightLeg:X,rightToeBase:me,rightUpLeg:ee},torso:{hipInternal:v,waistInternal:I,lowerBack:we,neck:ge,neck1:oe,spine:de,spine1:D}}}(Mp(e));return function(r){const{head:{head:i,topHead:a},leftArm:{leftArm:o,leftFingerBase:s,leftForeArm:l,leftHand:c,leftShoulder:u},leftLeg:{lHipJoint:f,leftFoot:d,leftLeg:p,leftToeBase:_,leftUpLeg:g},rightArm:{rightArm:m,rightFingerBase:h,rightForeArm:T,rightHand:v,rightShoulder:E},rightLeg:{rHipJoint:L,rightFoot:I,rightLeg:x,rightToeBase:b,rightUpLeg:A},torso:{hipInternal:S,waistInternal:C,neck:H,neck1:G,spine:V,spine1:q}}=r;return{name:"Hips",position:S,children:[{name:"LHipJoint",position:f,children:[{name:"LeftUpLeg",position:g,children:[{name:"LeftLeg",position:p,children:[{name:"LeftFoot",position:d,children:[{name:"LeftToeBase",position:_,children:[]}]}]}]}]},{name:"RHipJoint",position:L,children:[{name:"RightUpLeg",position:A,children:[{name:"RightLeg",position:x,children:[{name:"RightFoot",position:I,children:[{name:"RightToeBase",position:b,children:[]}]}]}]}]},{name:"LowerBack",position:C,children:[{name:"Spine",position:V,children:[{name:"Spine1",position:q,children:[{name:"Neck",position:H,children:[{name:"Neck1",position:G,children:[{name:"Head",position:i,children:[{name:"ENDSITE",position:a,children:[]}]}]}]},{name:"LeftShoulder",position:u,children:[{name:"LeftArm",position:o,children:[{name:"LeftForeArm",position:l,children:[{name:"LeftHand",position:c,children:[{name:"LeftFingerBase",position:s,children:[]}]}]}]}]},{name:"RightShoulder",position:E,children:[{name:"RightArm",position:m,children:[{name:"RightForeArm",position:T,children:[{name:"RightHand",position:v,children:[{name:"RightFingerBase",position:h,children:[]}]}]}]}]}]}]}]}]}}(n)}function Fx(e){return[{start:e.leftArmpit,end:e.farLeftArmpit},{start:e.leftArmpit,end:e.leftFloor},{start:e.rightArmpit,end:e.farRightArmpit},{start:e.rightArmpit,end:e.rightFloor},{start:e.crotchLandmark,end:e.crotchFloor},{start:e.leftCrotch,end:e.rightCrotch}]}function Dx(e){let n=0,t=!0;for(let r of e.bodyParts)(t||nr(r).y<n)&&(n=nr(r).y,t=!1);return n}function xl(e,n){let t=-1;for(let r of e.bodyParts)t=Ti(r,n);return t}(function(e){e[e.AXF_HEIGHT=1]="AXF_HEIGHT",e[e.AXF_NECK_GIRTH=2]="AXF_NECK_GIRTH",e[e.AXF_CHEST_GIRTH=3]="AXF_CHEST_GIRTH",e[e.AXF_BUST_GIRTH=4]="AXF_BUST_GIRTH",e[e.AXF_BUST_WIDTH=5]="AXF_BUST_WIDTH",e[e.AXF_UNDER_BUST_GIRTH=6]="AXF_UNDER_BUST_GIRTH",e[e.AXF_LOW_CHEST_GIRTH=7]="AXF_LOW_CHEST_GIRTH",e[e.AXF_WAIST_GIRTH=8]="AXF_WAIST_GIRTH",e[e.AXF_TOP_HIP_GIRTH=9]="AXF_TOP_HIP_GIRTH",e[e.AXF_SEAT_PROMINENCE_GIRTH=10]="AXF_SEAT_PROMINENCE_GIRTH",e[e.AXF_HIP_GIRTH=11]="AXF_HIP_GIRTH",e[e.AXF_NAPE_HEIGHT=20]="AXF_NAPE_HEIGHT",e[e.AXF_BUST_HEIGHT=21]="AXF_BUST_HEIGHT",e[e.AXF_UNDER_BUST_HEIGHT=22]="AXF_UNDER_BUST_HEIGHT",e[e.AXF_WAIST_HEIGHT=23]="AXF_WAIST_HEIGHT",e[e.AXF_HIP_HEIGHT=24]="AXF_HIP_HEIGHT",e[e.AXF_CROTCH_HEIGHT=25]="AXF_CROTCH_HEIGHT",e[e.AXF_FRONT_NECK_HEIGHT=26]="AXF_FRONT_NECK_HEIGHT",e[e.AXF_TORSO_LENGTH_CROTCH_ARMPIT=27]="AXF_TORSO_LENGTH_CROTCH_ARMPIT",e[e.AXF_NIPPLE_WIDTH=40]="AXF_NIPPLE_WIDTH",e[e.AXF_NAPE_TO_WAIST=41]="AXF_NAPE_TO_WAIST",e[e.AXF_THROUGH_RISE=42]="AXF_THROUGH_RISE",e[e.AXF_NAPE_TO_LEFT_NIPPLE=43]="AXF_NAPE_TO_LEFT_NIPPLE",e[e.AXF_NAPE_TO_RIGHT_NIPPLE=44]="AXF_NAPE_TO_RIGHT_NIPPLE",e[e.AXF_CENTRE_SHOULDER_TO_REAR_WAIST=45]="AXF_CENTRE_SHOULDER_TO_REAR_WAIST",e[e.AXF_BACK_SHOULDER_WIDTH=46]="AXF_BACK_SHOULDER_WIDTH",e[e.AXF_NAPE_TO_LEFT_SIDE_NECK=47]="AXF_NAPE_TO_LEFT_SIDE_NECK",e[e.AXF_NAPE_TO_RIGHT_SIDE_NECK=48]="AXF_NAPE_TO_RIGHT_SIDE_NECK",e[e.AXF_LEFT_SIDE_NECK_TO_NIPPLE=49]="AXF_LEFT_SIDE_NECK_TO_NIPPLE",e[e.AXF_RIGHT_SIDE_NECK_TO_NIPPLE=50]="AXF_RIGHT_SIDE_NECK_TO_NIPPLE",e[e.AXF_CENTRE_SHOULDER_TO_FRONT_WAIST=51]="AXF_CENTRE_SHOULDER_TO_FRONT_WAIST",e[e.AXF_LEFT_THIGH_GIRTH=70]="AXF_LEFT_THIGH_GIRTH",e[e.AXF_RIGHT_THIGH_GIRTH=71]="AXF_RIGHT_THIGH_GIRTH",e[e.AXF_LEFT_KNEE_GIRTH=72]="AXF_LEFT_KNEE_GIRTH",e[e.AXF_RIGHT_KNEE_GIRTH=73]="AXF_RIGHT_KNEE_GIRTH",e[e.AXF_LEFT_CALF_GIRTH=74]="AXF_LEFT_CALF_GIRTH",e[e.AXF_RIGHT_CALF_GIRTH=75]="AXF_RIGHT_CALF_GIRTH",e[e.AXF_LEFT_MINIMUM_LEG_GIRTH=76]="AXF_LEFT_MINIMUM_LEG_GIRTH",e[e.AXF_RIGHT_MINIMUM_LEG_GIRTH=77]="AXF_RIGHT_MINIMUM_LEG_GIRTH",e[e.AXF_LEFT_ANKLE_GIRTH=78]="AXF_LEFT_ANKLE_GIRTH",e[e.AXF_RIGHT_ANKLE_GIRTH=79]="AXF_RIGHT_ANKLE_GIRTH",e[e.AXF_LEFT_KNEE_HEIGHT=80]="AXF_LEFT_KNEE_HEIGHT",e[e.AXF_RIGHT_KNEE_HEIGHT=81]="AXF_RIGHT_KNEE_HEIGHT",e[e.AXF_INSIDE_LEG=82]="AXF_INSIDE_LEG",e[e.AXF_LEFT_MID_THIGH_GIRTH=83]="AXF_LEFT_MID_THIGH_GIRTH",e[e.AXF_RIGHT_MID_THIGH_GIRTH=84]="AXF_RIGHT_MID_THIGH_GIRTH",e[e.AXF_LEFT_ARM_LENGTH=90]="AXF_LEFT_ARM_LENGTH",e[e.AXF_RIGHT_ARM_LENGTH=91]="AXF_RIGHT_ARM_LENGTH",e[e.AXF_LEFT_UNDER_ARM_LENGTH=92]="AXF_LEFT_UNDER_ARM_LENGTH",e[e.AXF_RIGHT_UNDER_ARM_LENGTH=93]="AXF_RIGHT_UNDER_ARM_LENGTH",e[e.AXF_LEFT_SHOULDER_SLOPE=94]="AXF_LEFT_SHOULDER_SLOPE",e[e.AXF_RIGHT_SHOULDER_SLOPE=95]="AXF_RIGHT_SHOULDER_SLOPE",e[e.AXF_LEFT_UPPER_ARM_GIRTH=96]="AXF_LEFT_UPPER_ARM_GIRTH",e[e.AXF_RIGHT_UPPER_ARM_GIRTH=97]="AXF_RIGHT_UPPER_ARM_GIRTH",e[e.AXF_LEFT_SHOULDER_TO_ELBOW=98]="AXF_LEFT_SHOULDER_TO_ELBOW",e[e.AXF_RIGHT_SHOULDER_TO_ELBOW=99]="AXF_RIGHT_SHOULDER_TO_ELBOW",e[e.AXF_LEFT_ELBOW_TO_WRIST=100]="AXF_LEFT_ELBOW_TO_WRIST",e[e.AXF_RIGHT_ELBOW_TO_WRIST=101]="AXF_RIGHT_ELBOW_TO_WRIST",e[e.AXF_LEFT_ARMPIT_TO_ARMCREASE=102]="AXF_LEFT_ARMPIT_TO_ARMCREASE",e[e.AXF_RIGHT_ARMPIT_TO_ARMCREASE=103]="AXF_RIGHT_ARMPIT_TO_ARMCREASE",e[e.AXF_LEFT_ARMCREASE_TO_WRIST=104]="AXF_LEFT_ARMCREASE_TO_WRIST",e[e.AXF_RIGHT_ARMCREASE_TO_WRIST=105]="AXF_RIGHT_ARMCREASE_TO_WRIST",e[e.AXF_LEFT_SHOULDER_LENGTH=106]="AXF_LEFT_SHOULDER_LENGTH",e[e.AXF_RIGHT_SHOULDER_LENGTH=107]="AXF_RIGHT_SHOULDER_LENGTH",e[e.AXF_TORSO_LENGTH_CROTCH_ARMPIT_OLD=108]="AXF_TORSO_LENGTH_CROTCH_ARMPIT_OLD",e[e.AXF_BUST_PROMINENCE_UPPER=200]="AXF_BUST_PROMINENCE_UPPER",e[e.AXF_BUST_PROMINENCE_LOWER=201]="AXF_BUST_PROMINENCE_LOWER",e[e.AXF_BUST_ANGLE=206]="AXF_BUST_ANGLE",e[e.AXF_ABDOMEN_PROMINENCE_UPPER=210]="AXF_ABDOMEN_PROMINENCE_UPPER",e[e.AXF_ABDOMEN_PROMINENCE_LOWER=211]="AXF_ABDOMEN_PROMINENCE_LOWER",e[e.AXF_LEFT_FRONT_LATERAL_DEVIATION_UPPER=212]="AXF_LEFT_FRONT_LATERAL_DEVIATION_UPPER",e[e.AXF_RIGHT_FRONT_LATERAL_DEVIATION_UPPER=213]="AXF_RIGHT_FRONT_LATERAL_DEVIATION_UPPER",e[e.AXF_LEFT_FRONT_LATERAL_DEVIATION_LOWER=214]="AXF_LEFT_FRONT_LATERAL_DEVIATION_LOWER",e[e.AXF_RIGHT_FRONT_LATERAL_DEVIATION_LOWER=215]="AXF_RIGHT_FRONT_LATERAL_DEVIATION_LOWER",e[e.AXF_SEAT_PROMINENCE_UPPER=220]="AXF_SEAT_PROMINENCE_UPPER",e[e.AXF_SEAT_PROMINENCE_LOWER=221]="AXF_SEAT_PROMINENCE_LOWER",e[e.AXF_BACK_PROMINENCE_UPPER=230]="AXF_BACK_PROMINENCE_UPPER",e[e.AXF_BACK_PROMINENCE_LOWER=231]="AXF_BACK_PROMINENCE_LOWER",e[e.AXF_SIDE_BILATERAL_CROTCH=232]="AXF_SIDE_BILATERAL_CROTCH",e[e.AXF_SIDE_BILATERAL_WAIST=233]="AXF_SIDE_BILATERAL_WAIST",e[e.AXF_SIDE_BILATERAL_ARMPIT=234]="AXF_SIDE_BILATERAL_ARMPIT",e[e.AXF_FRONT_BILATERAL_CROTCH=235]="AXF_FRONT_BILATERAL_CROTCH",e[e.AXF_FRONT_BILATERAL_HIP=236]="AXF_FRONT_BILATERAL_HIP",e[e.AXF_FRONT_BILATERAL_WAIST=237]="AXF_FRONT_BILATERAL_WAIST",e[e.AXF_FRONT_BILATERAL_ARMPIT=238]="AXF_FRONT_BILATERAL_ARMPIT",e[e.AXF_FRONT_BILATERAL_MIDHIP=239]="AXF_FRONT_BILATERAL_MIDHIP",e[e.AXF_BVI=240]="AXF_BVI",e[e.AXF_TORSO_FRONT_CURVINESS=250]="AXF_TORSO_FRONT_CURVINESS",e[e.AXF_TORSO_REAR_CURVINESS=251]="AXF_TORSO_REAR_CURVINESS"})(Ji||(Ji={})),function(e){e[e.AXF_PD_MEASUREMENT=1]="AXF_PD_MEASUREMENT",e[e.AXF_PD_NAME=2]="AXF_PD_NAME",e[e.AXF_PD_ADDRESS=3]="AXF_PD_ADDRESS",e[e.AXF_PD_CHESTWALLPARAMETER=4]="AXF_PD_CHESTWALLPARAMETER"}(hi||(hi={}));class Ux{constructor(){this.pointReferences=[]}addPointReference(n){this.pointReferences.push(n)}build(){return{pointReferences:this.pointReferences}}}class Hx{setA(n){this.a=n}setB(n){this.b=n}setC(n){this.c=n}setAng(n){this.ang=n}build(){return{a:this.a,b:this.b,c:this.c,ang:this.ang}}}function ti(e,n){const t=new Hx,r=n.x-e.x,i=n.y-e.y,a=Math.sqrt(r*r+i*i);if(a>0)if(t.setA(-i/a),t.setB(r/a),t.setC((e.x*n.y-n.x*e.y)/a),r==0)i>=0?t.setAng(Math.PI/2):t.setAng(3*Math.PI/2);else if(i==0)r>=0?t.setAng(0):t.setAng(Math.PI);else{const o=Math.atan(i/r);o>=0?t.setAng(o):t.setAng(o+Math.PI)}return t.build()}function $s(e,n,t){const r=Math.tan(e),i=Math.sqrt(1/(1+r*r)),a=-i*r;return{b:i,a,c:-a*n-i*t,ang:e}}function Gx(e,n,t){if(e!=0&&n.pointLayer.points.length){const r=ne.PARTITION_SIDE_CROTCH_CLUSTER_TOLERANCE,i=function(c){let u,f;const d={x:0,y:0,z:0};let p,_,g=-1;if(c.points.length){g=0,u=0,f=0;for(let m of c.points)u+=m.x,f+=m.z;d.x=u/c.points.length,d.z=f/c.points.length,_=1e9,c.points.forEach((m,h)=>{p=(m.x-d.x)*(m.x-d.x)+(m.z-d.z)*(m.z-d.z),p<_&&(g=h,_=p)})}return g}(n.pointLayer),a=function(c,u,f){const d=Array(c.length).fill(!1),p=Array(c.length).fill(!1),_=Array(c.length).fill(Array(c.length).fill(!1));let g=1,m=(h=f)*h;var h;for(let v=0;v<c.length;v++){const E=c[v];for(let L=0;L<c.length;L++){const I=c[L];(E.x-I.x)*(E.x-I.x)+(E.z-I.z)*(E.z-I.z)<m&&(_[v][L]=!0)}}for(d[u]=!0;g!=0;){g=0;for(let v=0;v<c.length;v++)if(d[v]==1&&p[v]==0){p[v]=!0;for(let E=0;E<c.length;E++)_[v][E]==1&&d[E]==0&&(d[E]=!0,g++)}}const T=new Ux;for(let v=0;v<c.length;v++)d[v]==1&&T.addPointReference(v);return T.build()}(n.pointLayer.points,i,r),o=function(c,u){const f={x:0,y:0,z:0},d={x:0,y:0,z:0};for(let p=1;p<u.pointReferences.length;p++){const _=c.points[u.pointReferences[p]],g=c.points[u.pointReferences[f.x]],m=c.points[u.pointReferences[d.x]];_.x<g.x?f.x=p:_.x>m.x&&(d.x=p),_.z<g.z?f.z=p:_.z>m.z&&(d.z=p)}return gp(d,f)}(n.pointLayer,a),s={x:n.pointLayer.points[a.pointReferences[o.min.x]].x-ne.PARTITION_SIDE_CROTCH_GAP,y:t.crotchLandmark.y},l={x:n.pointLayer.points[a.pointReferences[o.max.x]].x+ne.PARTITION_SIDE_CROTCH_GAP,y:t.crotchLandmark.y};return{armPartitionLineL:ti(t.leftArmpitLandmark,s),armPartitionLineR:ti(t.rightArmpitLandmark,l)}}return{armPartitionLineL:$s(95*Math.PI/180,t.leftArmpitLandmark.x,t.leftArmpitLandmark.y),armPartitionLineR:$s(95*Math.PI/180,t.rightArmpitLandmark.x,t.rightArmpitLandmark.y)}}function $t(e,n){return(-e.c-e.b*n)/e.a}function Ip(e,n,t){const r=n.crotchLandmark.z,i={x:n.leftArmpitLandmark.x,y:n.leftArmpitLandmark.y,z:r},a={x:n.rightArmpitLandmark.x,y:n.rightArmpitLandmark.y,z:r};return{z:r,leftArmpit:i,rightArmpit:a,farLeftArmpit:{x:e.minX,y:i.y,z:r},farRightArmpit:{x:e.maxX,y:a.y,z:r},leftCrotch:{x:$t(t.armPartitionLineL,n.crotchLandmark.y),y:n.crotchLandmark.y,z:r},rightCrotch:{x:$t(t.armPartitionLineR,n.crotchLandmark.y),y:n.crotchLandmark.y,z:r},crotchFloor:{x:n.crotchLandmark.x,y:e.minY,z:r},leftFloor:{x:$t(t.armPartitionLineL,e.minY),y:e.minY,z:r},rightFloor:{x:$t(t.armPartitionLineR,e.minY),y:e.minY,z:r}}}function bp(e,n){return!!e.landmarks.find(t=>t.id===n)}function Op(e){const n=[];return Array.from(yl.entries()).filter(([t,r])=>r.partition).forEach(([t,r])=>{bp(e,Number(t))||n.push(r.name)}),n}function Cp(e){return{crotchLandmark:se(e,U.CROTCH),leftArmpitLandmark:se(e,U.LEFT_ARMPIT),rightArmpitLandmark:se(e,U.RIGHT_ARMPIT)}}class Bx{setWholeBody(n){this.wholeBody=n}setLandmarks(n){this.landmarks=n}setCrotchLayer(n,t){this.crotchLayerId=n,this.crotchLayer=t}setMinMaxExtents(n){this.minMaxExtents=n}setPartitionLinesArm(n){this.partitionLinesArm=n}setPartitionPoints(n){this.partitionPoints=n}setFloorExtents(n){this.floorExtents=n}build(){return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({wholeBody:this.wholeBody},this.landmarks),{crotchLayerId:this.crotchLayerId,crotchLayer:this.crotchLayer}),this.minMaxExtents),this.partitionLinesArm),this.partitionPoints),this.floorExtents)}}function kx(e,n){const t=new Bx,r=Je(e,Q.WHOLE_BODY);if(!r)throw"No whole body part";t.setWholeBody(r);const i=Op(e);if(i.length)throw`Missing partition landmarks -> ${i.join(", ")}`;const a=Cp(e);t.setLandmarks(a);const o=xl(e,a.crotchLandmark.y),s=r.layers[o];if(t.setCrotchLayer(o,s),!n){if(a.leftArmpitLandmark.x>a.rightArmpitLandmark.x)throw"Armpits wrong way round";if(a.leftArmpitLandmark.y<a.crotchLandmark.y)throw"Left armpit below crotchLandmark";if(a.rightArmpitLandmark.y<a.crotchLandmark.y)throw"Right armpit below crotchLandmark"}const l={minY:Dx(e),minX:e.extent.min.x,maxX:e.extent.max.x};t.setMinMaxExtents(l);const c=Gx(o,s,a);t.setPartitionLinesArm(c);const u=Ip(l,a,c);t.setPartitionPoints(u);const f=function(d,p){return{leftFloorExtent:{start:{x:d.minX,y:d.minY,z:p.z},end:{x:p.leftArmpit.x,y:d.minY,z:p.z}},rightFloorExtent:{start:{x:p.rightArmpit.x,y:d.minY,z:p.z},end:{x:d.maxX,y:d.minY,z:p.z}}}}(l,u);return t.setFloorExtents(f),t.build()}function nf(e,n,t){const r=se(e,n);r&&(r.y=t)}function tr(e){return e.layers[e.layers.length-1]}function tf(e,n,t){let r=t==ye.RIGHT?Q.RIGHT_ARM:Q.LEFT_ARM;const i=new Po(r),a=xl(e,ni(n.leftArmpitLandmark.y,n.rightArmpitLandmark.y));let o=t==ye.RIGHT?n.armPartitionLineR:n.armPartitionLineL,s=0;for(let f=Math.floor(n.crotchLayerId/2);f<=a;f++){const d=n.wholeBody.layers[f],p={x:$t(o,d.y),y:d.y};if(t==ye.LEFT&&d.extent.min.x<p.x||t==ye.RIGHT&&d.extent.max.x>p.x){s=f;break}}const l=[];for(let f=s;f<=a;f++){const d=n.wholeBody.layers[f],p={x:$t(o,d.y),y:d.y},_=[],g=[];for(let m=0;m<d.pointLayer.points.length;m++)(t==ye.LEFT&&d.pointLayer.points[m].x<=p.x||t==ye.RIGHT&&d.pointLayer.points[m].x>=p.x)&&(_.push({x:d.pointLayer.points[m].x,y:d.y,z:d.pointLayer.points[m].z}),g.push({x:d.pointLayer.colours[m].x,y:d.pointLayer.colours[m].y,z:d.pointLayer.colours[m].z}));l.push({y:d.y,pointLayer:{points:_,colours:g}})}i.setLayers(l),i.setLayerOffset(s);const c=i.build();Co(c);const u=.6*tr(c).extent.min.z+.4*tr(c).extent.max.z;return function(f,d,p){const _=se(f,d);_&&(_.z=p)}(e,t==ye.LEFT?U.LEFT_ARMPIT:U.RIGHT_ARMPIT,u),c}class ho{setY(n){return this.y=n,this}setPointLayer(n){return this.pointLayer=n,this}setSplineLayer(n){return this.splineLayer=n,this}setExtent(n){return this.extent=n,this}setCentroid(n){return this.centroid=n,this}build(){return{y:this.y,pointLayer:this.pointLayer,splineLayer:this.splineLayer,extent:this.extent,centroid:this.centroid}}}class Ml{setPoints(n){this.points=n}setColours(n){this.colours=n}build(){return{points:this.points,colours:this.colours}}}function rf(e,n,t){let r=t==ye.RIGHT?Q.RIGHT_LEG:Q.LEFT_LEG;const i=new Po(r),a=[];if(n.crotchLandmark.y<=e.extent.min.y)throw"Crotch landmark bad";i.setLayerOffset(1);for(let s=0;s<=n.crotchLayerId;s++){const l=n.wholeBody.layers[s],c=new ho;c.setY(l.y);const u={x:$t(n.armPartitionLineL,l.y),y:l.y},f={x:$t(n.armPartitionLineR,l.y),y:l.y},d=[],p=[];for(let _=0;_<l.pointLayer.points.length;_++){const g=l.pointLayer.points[_];(t==ye.LEFT&&g.x<=n.crotchLandmark.x&&g.x>u.x||t==ye.RIGHT&&g.x>=n.crotchLandmark.x&&g.x<f.x)&&(d.push({x:g.x,y:l.y,z:g.z}),e.colour&&p.push({x:l.pointLayer.colours[_].x,y:l.pointLayer.colours[_].y,z:l.pointLayer.colours[_].z}))}if(d.length>0){const _=new Ml;_.setPoints(d),e.colour&&_.setColours(p),c.setPointLayer(_.build()),a.push(c.build())}}i.setLayers(a);const o=i.build();return Co(o),o}function Wx(e,n){const t=ni(n.leftArmpitLandmark.y,n.rightArmpitLandmark.y);nf(e,U.LEFT_ARMPIT,t),nf(e,U.RIGHT_ARMPIT,t);const r=new _p;r.setHeader({version:e.version,colour:e.colour,sex:e.sex,yResolutionMM:e.yResolutionMM,xZResolutionMM:e.xZResolutionMM,rawPointsDefined:!0,surfaceDefined:!1,normalisedPointsInLayer:e.normalisedPointsInLayer,normalisedLayersInRegion:e.normalisedLayersInRegion});let i=rf(e,n,ye.LEFT);if(!i)throw"Failed to extract left leg";if(r.addBodyParts(i),i=rf(e,n,ye.RIGHT),!i)throw"Failed to extract right leg";if(r.addBodyParts(i),i=function(a,o){const s=new Po(Q.TORSO),l=xl(a,ni(o.leftArmpitLandmark.y,o.rightArmpitLandmark.y)),c=[];for(let f=o.crotchLayerId;f<l+1;f++){const d=o.wholeBody.layers[f],p=new ho;p.setY(d.y);const _={x:$t(o.armPartitionLineL,d.y),y:d.y},g={x:$t(o.armPartitionLineR,d.y),y:d.y},m=[],h=[];for(let T=0;T<d.pointLayer.points.length;T++){const v=d.pointLayer.points[T],E=d.pointLayer.colours[T];v.x>=_.x&&v.x<=g.x&&(m.push({x:v.x,y:d.y,z:v.z}),h.push({x:E.x,y:E.y,z:E.z}))}p.setPointLayer({points:m,colours:h}),c.push(p.build())}for(let f=l;f<o.wholeBody.layers.length;f++){const d=o.wholeBody.layers[f],p=new ho;p.setY(d.y);const _=[],g=[];for(let m=0;m<d.pointLayer.points.length;m++){const h=d.pointLayer.points[m],T=d.pointLayer.colours[m];_.push({x:h.x,y:d.y,z:h.z}),g.push({x:T.x,y:T.y,z:T.z})}p.setPointLayer({points:_,colours:g}),c.push(p.build())}s.setLayers(c),s.setLayerOffset(o.crotchLayerId);const u=s.build();return Co(u),u}(e,n),!i)throw"Failed to extract torso";if(r.addBodyParts(i),i=tf(e,n,ye.LEFT),!i)throw"Failed to extract left arm";if(r.addBodyParts(i),i=tf(e,n,ye.RIGHT),!i)throw"Failed to extract right arm";return r.addBodyParts(i),r.setLandmarks(JSON.parse(JSON.stringify(e.landmarks))),r.build()}function zx(e,n){const t=Wx(e,n);return qs(t),Ap(t),xp(t),t}function af(e,n){let t=e.start.x,r=e.end.x;return t>r&&(t=e.end.x,r=e.start.x),!(n<t||n>r)}function Vx(e,n,t){let r=!1;if(n==ye.LEFT){const s=e.leftFloor.x+t;af(e.leftFloorExtent,s)&&(e.leftFloor.x=s,r=!0)}else if(n==ye.RIGHT){const s=e.rightFloor.x+t;af(e.rightFloorExtent,s)&&(e.rightFloor.x=s,r=!0)}r&&(e.armPartitionLineL=ti(e.leftArmpitLandmark,e.leftFloor),e.armPartitionLineR=ti(e.rightArmpitLandmark,e.rightFloor)),Object.assign(e,Ip(e,e,e))}class Xx{constructor(){this.sensors=[]}setBinaryHeader(n){this.binaryHeader=n}addSensor(n){this.sensors.push({sensorSize:n,points:new Float32Array(3*n)})}addPoint(n,t,r,i,a){const o=3*t;this.sensors[n].points[o]=r,this.sensors[n].points[o+1]=i,this.sensors[n].points[o+2]=a}build(){return Object.assign(Object.assign({},this.binaryHeader),{sensors:this.sensors})}}function Kx(e){const n=new mp(e),t=new Xx,r={binaryVersion:n.readInt(),fullFlag:n.readInt(),colFlag:n.readInt(),processedFlag:n.readByte(),nSensors:n.readInt(),sensors:[]};t.setBinaryHeader(r);for(let i=0;i<r.nSensors;i++){const a=n.readInt();t.addSensor(a)}return t.sensors.forEach(function(i,a){for(let o=0;o<i.sensorSize;o++){const s=n.readFloat(),l=n.readFloat(),c=n.readFloat();t.addPoint(a,o,s,l,c)}}),t.build()}function Pp(e,n){const t=e.length;if(t>0){let r=0;for(let i of e){const a=i.x-n.x,o=i.z-n.y;r+=Math.sqrt(a*a+o*o)}return r/t}return 0}function Np(e,n){let t=null,r=ne.BIG_POSITIVE_NUMBER_INT;return e.forEach(function(i,a){const o=i.x-n.x,s=i.z-n.y,l=Math.sqrt(o*o+s*s);l<r&&(r=l,t={candidate:i,i:a})}),t}function Yx(e,n,t){return{x:e.x,y:t==Ir.ABOVE?e.y+n:e.y-n}}function qx(e,n,t){return t==Ir.ABOVE&&n.y>e.y||t==Ir.BELOW&&n.y<e.y}function jx(e,n,t,r){const i=[];for(let a of e){const o={x:a.x,y:a.z};qx(n,o,r)&&Math.abs(o.x-n.x)<t&&i.push(a)}return i}function of(e,n,t,r,i){const{points:a,colours:o}=e.pointLayer,{centroid:s}=e,{pStart:l,pEnd:c}=n===Ir.ABOVE?{pStart:s.right,pEnd:s.left}:{pStart:s.left,pEnd:s.right},u=(c.x-l.x)/t,f=Math.abs(u/2);let d={x:1e6,y:1e6};const p=[];for(let _=0;_<t;_++){const g={y:l.y,x:l.x+u/2+_*u},m=jx(a,g,f,n);if(m.length){const h=Yx(g,Pp(m,g),n);if(fa(h,d)>r){const T=new Ll;if(T.setPoint({x:h.x,y:h.y}),i){const v=Np(m,h);if(v){const E=o[v.i];T.setColour({x:E.x,y:E.y,z:E.z})}}p.push(T.build()),d=h}else console.log("Points too close in linear section")}}return p}function Zx(e){const n={x:0,y:0},t=e.length;if(t>0){let r=0,i=0;for(let a of e)r+=a.x,i+=a.z;n.x=r/t,n.y=i/t}return n}function Jx(e,n){let t;if(e.length<=0)return 0;t=-1e4;for(let r of e){const i=r.x-n.x,a=r.z-n.y,o=Math.sqrt(i*i+a*a);o>t&&(t=o)}return t}function $x(e,n){let t;if(e.length<=0)return 0;t=1e7;for(let r of e){const i=r.x-n.x,a=r.z-n.y,o=Math.sqrt(i*i+a*a);o<t&&(t=o)}return t}function Qx(e,n){const t=e.length,r={x:0,y:0},i={x:0,y:0};if(t>0){let a=0,o=0;for(let s of e)a+=s.x,o+=s.z;i.x=a/t,i.y=o/t}if(t>0){let a=i.x-n.x,o=i.y-n.y,s=a*a+o*o-.001,l=0,c=0,u=0;for(let f of e)a=f.x-n.x,o=f.z-n.y,a*a+o*o>=s&&(l+=f.x,c+=f.z,u+=1);r.x=l/u,r.y=c/u}return r}function eM(e,n,t){const r=t*Math.cos(n),i=t*Math.sin(n);return{x:e.x+r,y:e.y+i}}function nM(e,n,t,r){let i;const a=t-e,o=r-n;return i=a==0?o>=0?Math.PI/2:-Math.PI/2:Math.atan(o/a),a<0&&(i+=Math.PI),i<0&&(i=2*Math.PI+i),i}function tM(e,n,t){const r=t.x-n.x,i=t.y-n.y;let a=!1;return(e>=0&&e<Math.PI/2&&r>0&&i>=0||e>=Math.PI/2&&e<Math.PI&&r<=0&&i>0||e>=Math.PI&&e<3*Math.PI/2&&r<0&&i<=0||e>=3*Math.PI/2&&e<2*Math.PI&&r>=0&&i<0)&&(a=!0),a}function rM(e,n,t,r){const i=[];for(let a of e){const o={x:a.x,y:a.z};if(tM(t,n,o)){const s=nM(n.x,n.y,o.x,o.y);Math.abs(t-s)<=r+ne.SMALL_POSITIVE_NUMBER_DBL&&i.push(a)}}return i}function Ba(e,n,t,r,i,a){t==0&&console.log("no sampling level");const{points:o,colours:s}=e.pointLayer,{centroid:l}=e,c=Math.PI/(2*t),u=c/2,f=c/2+(n-1)*(Math.PI/2);let d={x:1e6,y:1e6};const p=[];for(let _=0;_<t;_++){const g=f+_*c;let m=l.left;n!=Ar.FRONT_LEFT&&n!=Ar.REAR_LEFT||(m=l.right);const h=rM(o,m,g,u);if(h.length>0){let T=null;if(i==Sr.RADIAL_CENTROID)T=Zx(h);else if(i==Sr.RADIAL_OUTER_CENTROID)T=Qx(h,m);else{let v=0;i==Sr.RADIAL_MIN?v=$x(h,m):i==Sr.RADIAL_MEAN?v=Pp(h,m):i==Sr.RADIAL_MAX&&(v=Jx(h,m)),T=eM(m,g,v)}if(fa(T,d)>r){const v=new Ll;if(v.setPoint({x:T.x,y:T.y}),a){const E=Np(h,T);if(E){const L=s[E.i];v.setColour({x:L.x,y:L.y,z:L.z})}}p.push(v.build()),d=T}else console.log("points too close in radial section")}}return p}function Qs(e,n,t,r,i,a,o){if(n==0&&t==0)return void console.error(`${e.y}, There are no 'points per radial quart' or 'points per linear section' set`);let s=a?2:1;const l=Sr.RADIAL_CENTROID,c=[];for(let u=0;u<s;u++)n>0&&c.push(...Ba(e,Ar.FRONT_LEFT,n,r,l,o)),t>0&&c.push(...of(e,Ir.ABOVE,t,r,o)),n>0&&c.push(...Ba(e,Ar.FRONT_RIGHT,n,r,l,o)),n>0&&c.push(...Ba(e,Ar.REAR_RIGHT,n,r,l,o)),t>0&&c.push(...of(e,Ir.BELOW,t,r,o)),n>0&&c.push(...Ba(e,Ar.REAR_LEFT,n,r,l,o));if(i==pa.CLOSED&&c.length>1){const u=c[0],f={point:{x:u.point.x,y:u.point.y},colour:o?{x:u.colour.x,y:u.colour.y,z:u.colour.z}:void 0};c.push(f)}return c}function iM(e,n,t,r,i,a,o,s){if(!e.pointLayer||e.pointLayer.points.length<=2)return void console.error(`${e.y} Not enough points in point layer`);if(!t)return console.error(`${e.y} Convert point layer to spline layer: centroid is null`),null;e.centroid=JSON.parse(JSON.stringify(t));const l=new Di;let c,u=Qs(e,r,i,5,a,o,s);if(u.length<=2)return console.error(`${e.y} Didn't generate enough points on spline`),null;if(l.setNodes(u),l.generateSpline(),o){const f=(u.length-1)/4+1,d=3*(u.length-1)/4;c=l.build(),e.pointLayer=function(p,_,g,m){const h=p.surface;h.samplePoints=Aa(h.nodes,h.parametricNodes,h.parametricCoefficients,_,g,m,!1);const T=[];for(let E of h.samplePoints)T.push({x:E.point.x,z:E.point.y});const v=new Ml;return v.setPoints(T),v.build()}({surface:c},200,f,d),u=Qs(e,r,i,5,a,!1,s),l.setNodes(u),l.generateSpline()}return l.regeneratePointsOnSpline(),l.splineLength(),c=l.build(),c?{surface:c}:(console.error(`${e.y} Generating spline surface layer failed`),null)}(function(e){e[e.OPEN=1]="OPEN",e[e.CLOSED=2]="CLOSED",e[e.OPEN_TOP=3]="OPEN_TOP",e[e.OPEN_BOTTOM=4]="OPEN_BOTTOM"})(pa||(pa={})),function(e){e[e.ABOVE=1]="ABOVE",e[e.BELOW=2]="BELOW"}(Ir||(Ir={})),function(e){e[e.RADIAL_CENTROID=0]="RADIAL_CENTROID",e[e.RADIAL_OUTER_CENTROID=1]="RADIAL_OUTER_CENTROID",e[e.RADIAL_MIN=2]="RADIAL_MIN",e[e.RADIAL_MEAN=3]="RADIAL_MEAN",e[e.RADIAL_MAX=4]="RADIAL_MAX"}(Sr||(Sr={})),function(e){e[e.FRONT_LEFT=1]="FRONT_LEFT",e[e.FRONT_RIGHT=2]="FRONT_RIGHT",e[e.REAR_RIGHT=3]="REAR_RIGHT",e[e.REAR_LEFT=4]="REAR_LEFT"}(Ar||(Ar={}));var jr=Xr(821);const aM={bodyparts:{layers:{pointLayer:!0,splineLayer:{surface:!0,tape:!0}},frontSilhouette:!0,sideSilhouette:!0,splineRegions:{mesh:!0}},centroids:!0,landmarks:!0,chestWallDefinition:!0};function Gn(e,n){let t=null,r=32e3;for(const i of e.layers){const a=Math.abs(i.y-n);a<r&&(r=a,t=i)}return t}function sf(e,n,t){return e+t*(n-e)}function lf(e,n){const t=new Ri(0);t.setFrontSideRearType(cn.FRONT);const r=Je(e,Q.TORSO),i=se(e,U.LEFT_ARMPIT),a=se(e,U.RIGHT_ARMPIT);if(i==null||a==null)return console.error("Required landmark not available"),null;const o=ni(i.y,a.y),s=tr(r).y,l=sf(o,s,.2),c=sf(o,s,.8);t.setMinY(l),t.setMaxY(c),t.setMinLayer(Gn(r,l)),t.setMaxLayer(Gn(r,c));const u=n==ye.LEFT?En.AXF_TORSO_FRONT_LEFT_UPPER:En.AXF_TORSO_FRONT_RIGHT_UPPER;return t.setCubicSplineFromSegment(r,u,100),t.build()}class wp{constructor(n,t){this.id=n,this.landmarkType=t}setPoint(n){return this.x=n.x,this.y=n.y,this.z=n.z,this}build(){return{id:this.id,landmarkType:this.landmarkType,x:this.x,y:this.y,z:this.z}}}function Fp(e,n){e.landmarks=e.landmarks.filter(t=>t.id!=n.id),e.landmarks.push(n)}var br,lt;function cf(e,n){return Math.abs(e.a*n.x+e.b*n.y+e.c)}function mo(e,n,t,r){const i=function(u){switch(u){case lt.LEFT:return{x:-1e4,y:0};case lt.LEFT_LOW:return{x:-1e4,y:-1e4};case lt.LEFT_HIGH:return{x:-1e4,y:1e4};case lt.MID:return{x:0,y:0};case lt.MID_LOW:return{x:0,y:-1e4};case lt.MID_HIGH:return{x:0,y:1e4};case lt.RIGHT:return{x:1e4,y:0};case lt.RIGHT_LOW:return{x:1e4,y:-1e4};case lt.RIGHT_HIGH:return{x:1e4,y:1e4}}}(t),a=$s(Math.PI*n/180,i.x,i.y),o=e.samplePoints.length;let s=cf(a,e.samplePoints[0].point),l=e.samplePoints[0].point,c=0;for(let u=1;u<o-1;u++){const f=e.samplePoints[u].point,d=cf(a,f);(d>s&&r==br.FAR||d<s&&r==br.NEAR)&&(c=u,s=d,l=f)}return c>0&&c<o-1||console.error("could not find proximity"),l}function Dp(e,n,t,r,i,a){const o=Si(e,n,t);if(!o)return console.error(`No silhouette segment found: ${Js(n)}`),null;const s=o.cubicSpline,l=po(s,r.y),c=po(s,i.y);return c>=0&&l>0&&c<s.nodes.length-1?(s.nodes=Aa(s.nodes,s.parametricNodes,s.parametricCoefficients,a,c,l,!1),s):(console.error(`Control indexes out of range: min control index: ${c}, max control index: ${l}`),null)}function uf(e){const n=Je(e,Q.TORSO),r=se(e,U.ARMPIT_INTERNAL)||function(f){const d=Je(f,Q.TORSO);let p=se(f,U.LEFT_ARMPIT),_=se(f,U.RIGHT_ARMPIT);if(!p||!_)return;let g=Ti(d,ni(p.y,_.y));const m=d.layers[g].y;return(d.layers[g-1].y=m)&&(g-=1),{x:d.layers[g].extent.mid.x,y:m,z:d.layers[g].extent.mid.z}}(e),i=tr(n).y,a=Math.round(r.y+.05*(i-r.y)),o=Math.round(r.y+.45*(i-r.y)),s=Gn(n,a),l=Gn(n,o),c=mo(Dp(n,En.AXF_TORSO_SIDE_FRONT,cn.SIDE,s,l,100),91,lt.RIGHT,br.FAR),u=Gn(n,c.y);return{z:Math.round(c.x),y:Math.round(c.y),x:u.extent.mid.x}}function ff(e,n){const t=n==ye.LEFT?Je(e,Q.LEFT_LEG):Je(e,Q.RIGHT_LEG),r=4/42,i=Gn(t,Math.round(nr(t).y+r*(tr(t).y-nr(t).y)));return{x:i.extent.mid.x,z:i.extent.mid.z,y:i.y}}function df(e){const n=tr(Je(e,Q.TORSO));return{x:n.extent.mid.x,z:n.extent.mid.z,y:n.y}}function pf(e,n){const t=nr(n==ye.LEFT?Je(e,Q.LEFT_LEG):Je(e,Q.RIGHT_LEG));return{x:t.extent.mid.x,z:t.extent.mid.z,y:t.y}}function hf(e,n){const t=nr(n==ye.LEFT?Je(e,Q.LEFT_ARM):Je(e,Q.RIGHT_ARM));return{x:t.extent.mid.x,z:t.extent.mid.z,y:t.y}}function mf(e,n){const t=n==ye.LEFT?Je(e,Q.LEFT_LEG):Je(e,Q.RIGHT_LEG),r=26/42,i=nr(t).y,a=tr(t).y,o=Gn(t,Math.round(i+r*(a-i)));return{x:o.extent.mid.x,y:o.y,z:o.extent.mid.z}}(function(e){e[e.NEAR=1]="NEAR",e[e.FAR=2]="FAR"})(br||(br={})),function(e){e[e.LEFT=1]="LEFT",e[e.LEFT_HIGH=2]="LEFT_HIGH",e[e.LEFT_LOW=3]="LEFT_LOW",e[e.RIGHT=4]="RIGHT",e[e.RIGHT_HIGH=5]="RIGHT_HIGH",e[e.RIGHT_LOW=6]="RIGHT_LOW",e[e.MID=7]="MID",e[e.MID_HIGH=8]="MID_HIGH",e[e.MID_LOW=9]="MID_LOW"}(lt||(lt={}));class oM{constructor(){this.min={x:32700,y:32700},this.max={x:-32700,y:-32700}}setMin(n){this.min=n}setMax(n){this.max=n}compare(...n){n.forEach(t=>{(function(r,i){i.x>r.max.x&&(r.max.x=i.x),i.x<r.min.x&&(r.min.x=i.x),i.y>r.max.y&&(r.max.y=i.y),i.y<r.min.y&&(r.min.y=i.y)})(this,t)})}build(){return Tp(this),{min:this.min,mid:this.mid,max:this.max}}}function sM(e,n,t){const i=ti(n,t),a=e.b==0?1e11:-e.a/e.b,o=e.b==0?1e11:-e.c/e.b,s=i.b==0?1e11:-i.a/i.b,l=i.b==0?1e11:-i.c/i.b;if(a===s)return!1;const c=(l-o)/(a-s),u=a*c+o,f=new oM;f.compare(n,t);const d=f.build();return(_={x:c,y:u}).x>(p=d).min.x&&_.x<p.max.x&&_.y>p.min.y&&_.y<p.max.y;var p,_}function lM(e,n){let t=-1,r=!1,i=n-1;for(;i>=0&&!r;)e[i]&&(r=!0,t=i),i--;return t}function _f(e,n){e.surface.nodes.length<1&&console.error("Not enough nodes to measure");const t=function(r){const i=r.nodes,a=i.length,o=new Di,s=Array(a).fill(!0);if(a<4)return console.error("Need to be at least 4 points"),null;for(let h=0;h<a-2;h++){const T=ti(i[h].point,i[h+1].point);let v=!0,E=0;for(;v&&E<=a-2;){if((E<h-1&&h%(a-2)!==E||E>h+1&&E%(a-2)!==h)&&sM(T,i[E].point,i[E+1].point)){const L=ti(i[E].point,i[E+1].point);Math.abs(L.a*i[h].point.x+L.b*i[h].point.y+L.c)<Math.abs(L.a*i[h+1].point.x+L.b*i[h+1].point.y+L.c)?s[h]=!1:s[h+1]=!1,v=!1}E+=1}}const l=JSON.parse(JSON.stringify(i));for(;s[0]===!1||s[1]===!1;){for(let h=0;h<a-2;h++)l[h]=l[h+1],s[h]=s[h+1];l[a-1]=l[0],s[a-1]=s[0]}let c,u,f,d,p,_;for(let h=0;h<a-2;h++)if(s[h-1]===!1&&s[h]===!0&&s[h+1]===!1){for(c=h+1,c>=a-1&&(c=0),u=!1;u===!1;)(s[c]=!0)?(f=c,u=!0):(c+=1,c===a&&(c=0));const T={x:l[h].point.x-l[d].point.x,y:l[h].point.y-l[d].point.y},v={x:l[f].point.x-l[d].point.x,y:l[f].point.y-l[d].point.y};(T.y=0)?p.y=1e12:(T.y=0)&&(p.y=-1e12),(v.y=0)?_.y=2e12:(v.y=0)&&(_.y=-2e12),T.y<0&&v.y<0||T.y>0&&v.y>0?T.x/T.y<v.x/v.y&&(s[h]=!1):v.x>0?T.y>0&&v.y<0&&(s[h]=!1):v.x<=0?T.y<0&&v.y>0&&(s[h]=!1):d=h}else s[h]===!0&&(d=h);let g,m=!0;for(let h=0;h<a-1;h++)if(s[h])if(m===!0)o.addNode(l[h]);else{m=!0;const T=l[h];o.addNode({point:{x:g.point.x+.33*(T.point.x-g.point.x),y:g.point.y+.33*(T.point.y-g.point.y)}}),o.addNode({point:{x:g.point.x+.66*(T.point.x-g.point.x),y:g.point.y+.66*(T.point.y-g.point.y)}}),o.addNode(T)}else m===!0&&(m=!1,g=h>0?l[h-1]:l[lM(s,Math.round(a))]);return m===!1&&o.closeLoop(),o}(e.surface);return t.generateSpline(),t.regeneratePointsOnSpline(n,0,t.nodes.length-1),t.splineLength(),e.tape=t.build(),e.tape.surfaceMeasure}function gf(e,n){const t=n==ye.LEFT?Je(e,Q.LEFT_LEG):Je(e,Q.RIGHT_LEG),r=Math.round(.08*t.layers.length),i=Math.round(.23*t.layers.length);let a=r;const o=t.layers[r];if(e.surfaceDefined){_f(o.splineLayer,100);let l=o.splineLayer.tape.surfaceMeasure;for(let c=r+1;c==i;c++){const u=t.layers[c];_f(u.splineLayer,100);const f=u.splineLayer.tape.surfaceMeasure;f<l&&(a=c,l=f)}}else{let l=o.extent.difference.x*o.extent.difference.z;for(let c=r+1;c==i;c++){const u=t.layers[c],f=u.extent.difference.x*u.extent.difference.z;f<l&&(a=c,l=f)}}const s=t.layers[a];return{y:s.y,x:s.extent.mid.x,z:s.extent.mid.z}}function vf(e,n){const t=tr(n==ye.LEFT?Je(e,Q.LEFT_ARM):Je(e,Q.RIGHT_ARM));return{x:t.extent.mid.x,z:t.extent.mid.z,y:t.y}}function Ef(e,n){const t=tr(n==ye.LEFT?Je(e,Q.LEFT_LEG):Je(e,Q.RIGHT_LEG));return{x:t.extent.mid.x,z:t.extent.mid.z,y:t.y}}function Tf(e,n){let t,r;n==ye.LEFT?(t=Je(e,Q.LEFT_ARM),r=Wn(e,U.LEFT_WRIST_LEVEL)):(t=Je(e,Q.RIGHT_ARM),r=Wn(e,U.RIGHT_WRIST_LEVEL));const i=Gn(t,r.y);return{y:i.y,x:i.extent.mid.x,z:i.extent.mid.z}}function Dt(e,n){let t=0;const r=Ja(e,0,e.nodes.length-1);if(r>0){const i=n*r/100;let a=0,o=Ja(e,0,a),s=100*o/r,l=Math.abs(s-n);for(;o<i&&a<e.nodes.length-1;)a+=1,o=Ja(e,0,a),s=100*o/r,Math.abs(s-n)<l&&(l=Math.abs(s-n),t=a)}return e.nodes[t]}function ka(e,n){const t=n.x-e.x,r=n.y-e.y;let i=0;return i=t==0?90:180*Math.atan(r/t)/Math.PI,i<0&&(i+=180),i}function Sf(e,n,t){const r=Je(e,n==ye.LEFT?Q.LEFT_ARM:Q.RIGHT_ARM),i=function(s,l){const c=new Ri(0);c.setFrontSideRearType(cn.FRONT);const u=Je(s,l==ye.LEFT?Q.LEFT_ARM:Q.RIGHT_ARM),f=Si(u,En.AXF_ARM_FRONT_INNER,cn.FRONT).cubicSpline,d=Dt(f,90).point,p=Dt(f,65).point;return c.setMinLayer(Gn(u,d.y)),c.setMaxLayer(Gn(u,p.y)),c.setCubicSplineFromSegment(u,En.AXF_ARM_FRONT_INNER,100),c.build()}(e,n);if(!i)return console.error("Inner wrist: Spline segment not found"),null;const a=n==ye.LEFT?mo(i.cubicSpline,t,lt.RIGHT,br.FAR):mo(i.cubicSpline,t,lt.LEFT,br.FAR),o=Gn(r,a.y);return{x:Math.round(a.x),y:Math.round(a.y),z:o.extent.mid.z}}function Rf(e,n){const t=n==ye.LEFT?U.LEFT_WRIST_INNER:U.RIGHT_WRIST_INNER;let r=se(e,t);r==null&&console.error("Wrist level: wrist landmark not defined");const i=function(l,c){const u=c==ye.LEFT?Je(l,Q.LEFT_ARM):Je(l,Q.RIGHT_ARM),f=Si(u,En.AXF_ARM_FRONT_INNER,cn.FRONT).cubicSpline,d=Si(u,En.AXF_ARM_FRONT_OUTER,cn.FRONT).cubicSpline;let p=Dt(f,5).point,_=Dt(f,30).point,g=ka(p,_);p=Dt(d,5).point,_=Dt(d,30).point;let m=ka(p,_);const h=da(g,m);return p=Dt(f,50).point,_=Dt(f,80).point,g=ka(p,_),p=Dt(d,50).point,_=Dt(d,80).point,m=ka(p,_),[da(g,m),h]}(e,n),a=i[0];let o=n==ye.LEFT?Sf(e,n,Math.round(a+20)):Sf(e,n,Math.round(a-20));o==null&&(o=function(l,c){const u=c==ye.LEFT?Je(l,Q.LEFT_ARM):Je(l,Q.RIGHT_ARM),f=Dt(Si(u,En.AXF_ARM_FRONT_INNER,cn.FRONT).cubicSpline,75).point,d=Gn(u,Math.round(f.y));return{x:c==ye.LEFT?d.extent.max.x:d.extent.min.x,y:d.y,z:d.extent.mid.z}}(e,n));const s=new wp(t,vi(t));return s.setPoint(o),Fp(e,s.build()),r}function Wn(e,n,t){let r,i;{const s=se(e,n);if(s)return s}switch(n){case U.TOP_HEAD:i=df(e);break;case U.NECK_INTERNAL:break;case U.CHIN:i=function(s){const l=Je(s,Q.TORSO);let c=se(s,U.FRONT_NECK),u=c||uf(s);if(!u)return df(s);const f=tr(l),d=Math.round(u.y+.05*(f.y-u.y)),p=Math.round(u.y+.4*(f.y-u.y)),_=Gn(l,d),g=Gn(l,p),m=Dp(l,En.AXF_TORSO_SIDE_FRONT,cn.SIDE,_,g,100);if(!m)return console.error("No spline"),null;const h=mo(m,45,lt.RIGHT,br.NEAR);if(h)return console.error("No refpos"),null;const T=function(v,E,L){const I=v.points.length;let x=!1,b=0;for(;!x&&b<I;)v.points[b].z>E-L&&v.points[b].z<E+L?x=!0:b++;if(!x)return null;let A=v.points[b].x,S=v.points[b].x;for(let C=b+1;C<I-1;C++){const H=v.points[C];H.z>E-L&&H.z<E+L&&(H.x>S?S=H.x:H.x<A&&(A=H.x))}return{min:{x:A,y:0,z:0},max:{x:S,y:0,z:0}}}(Gn(l,u.y).pointLayer,u.z,200);return{y:Math.round(h.y),z:Math.round(h.x),x:T.mid.x}}(e);break;case U.FRONT_NECK:i=uf(e);break;case U.LEFT_SIDE_NECK:r=lf(e,ye.LEFT);break;case U.RIGHT_SIDE_NECK:r=lf(e,ye.RIGHT);break;case U.LEFT_SHOULDER:case U.RIGHT_SHOULDER:case U.SHOULDER_INTERNAL:case U.LEFT_ARMPIT:case U.RIGHT_ARMPIT:case U.CHEST_INTERNAL:case U.CHEST_LEVEL:case U.LOW_CHEST_INTERNAL:case U.LOW_CHEST_LEVEL:case U.WAIST_LEVEL:case U.WAIST_INTERNAL:case U.FRONT_WAIST:case U.REAR_WAIST:case U.HIP_INTERNAL:break;case U.SEAT_PROMINENCE:r=function(s){const l=new Ri(0);l.setFrontSideRearType(cn.SIDE);const c=Je(s,Q.TORSO),u=Wn(s,U.ARMPIT_INTERNAL);if(u==null)return console.error("Required landmark not available"),null;const f=nr(c).y,d=f+.05*(u.y-f),p=f+.35*(u.y-f);return l.setMinY(d),l.setMaxY(p),l.setMinLayer(Gn(c,d)),l.setMaxLayer(Gn(c,p)),l.setCubicSplineFromSegment(c,En.AXF_TORSO_SIDE_REAR,100),l.build()}(e);break;case U.BACK_PROMINENCE:r=function(s){const l=new Ri(0);l.setFrontSideRearType(cn.SIDE);const c=Je(s,Q.TORSO),u=Wn(s,U.NECK_INTERNAL),f=Wn(s,U.WAIST_LEVEL);return u==null||f==null?(console.error("Required landmark not available"),null):(l.setMinLayer(Gn(c,f.y)),l.setMaxLayer(Gn(c,u.y)),l.setCubicSplineFromSegment(c,En.AXF_TORSO_SIDE_REAR,100),l.build())}(e);break;case U.ABDOMEN_PROMINENCE:r=function(s){const l=new Ri(En.NONE);l.setFrontSideRearType(cn.SIDE);const c=Je(s,Q.TORSO),u=Wn(s,U.LOW_CHEST_LEVEL),f=Wn(s,U.CROTCH);return u==null||f==null?(console.error("Required landmark not available"),null):(l.setMinLayer(Gn(c,f.y)),l.setMaxLayer(Gn(c,u.y)),l.setCubicSplineFromSegment(c,En.AXF_TORSO_SIDE_FRONT,100),l.build())}(e);break;case U.LEFT_SIDE_WAIST_BILATERAL:case U.RIGHT_SIDE_WAIST_BILATERAL:case U.CROTCH:case U.ARMPIT_INTERNAL:break;case U.LEFT_TOP_ARM_INTERNAL:i=vf(e,ye.LEFT);break;case U.RIGHT_TOP_ARM_INTERNAL:i=vf(e,ye.RIGHT);break;case U.LEFT_ELBOW_INTERNAL:case U.RIGHT_ELBOW_INTERNAL:break;case U.LEFT_WRIST_INTERNAL:i=Tf(e,ye.LEFT);break;case U.RIGHT_WRIST_INTERNAL:i=Tf(e,ye.RIGHT);break;case U.LEFT_WRIST_LEVEL:i=Rf(e,ye.LEFT);break;case U.RIGHT_WRIST_LEVEL:i=Rf(e,ye.RIGHT);break;case U.LEFT_HAND:i=hf(e,ye.LEFT);break;case U.RIGHT_HAND:i=hf(e,ye.RIGHT);break;case U.LEFT_TOP_THIGH_INTERNAL:i=Ef(e,ye.LEFT);break;case U.RIGHT_TOP_THIGH_INTERNAL:i=Ef(e,ye.RIGHT);break;case U.LEFT_KNEE_INTERNAL:i=mf(e,ye.LEFT);break;case U.RIGHT_KNEE_INTERNAL:i=mf(e,ye.RIGHT);break;case U.LEFT_ANKLE_INTERNAL:i=ff(e,ye.LEFT);break;case U.RIGHT_ANKLE_INTERNAL:i=ff(e,ye.RIGHT);break;case U.LEFT_MINIMUM_LEG_INTERNAL:i=gf(e,ye.LEFT);break;case U.RIGHT_MINIMUM_LEG_INTERNAL:i=gf(e,ye.RIGHT);break;case U.LEFT_FLOOR:i=pf(e,ye.LEFT);break;case U.RIGHT_FLOOR:i=pf(e,ye.RIGHT)}if(r)throw new Error(`Landmark: ${n} ${vi(n)} failed auto detection - There was a silhouette`);if(!i)throw new Error(`Landmark: ${n} ${vi(n)} does not support auto detection`);const a=new wp(n,vi(n));a.setPoint(i);const o=a.build();return Fp(e,o),o}const Il=1e4,Up=[1,0,0,1],cM=[0,1,0,1],Hp=[0,0,1,1];function _o(e,n,t){const r=new jr.NE(n.length,Il,t);r.addVertices(n),r.buildGltf(e)}function Zr(e,n,t){const r=new jr.dT(n.length,n.length,Il,jr.Vv.LINE_STRIP,t);n.forEach(i=>{const a=r.addVertex(i);r.addIndex(a)}),r.buildGltf(e)}function Af(e,n,t,r){return Zr(e,n.nodes.map(i=>({x:i.point.x,y:t,z:i.point.y})),r)}function yf(e,n,t,r){n.forEach(i=>{const a=i.cubicSpline.nodes.map(o=>t===cn.FRONT?{x:o.point.x,y:o.point.y,z:0}:t===cn.SIDE?{x:0,y:o.point.y,z:o.point.x}:void 0);Zr(e,a,r)})}function uM(e,n){const t=function(r){return{leftspline:[Wn(r,U.CWALL_L_HIGH_CHEST),Wn(r,U.CWALL_L_ARMPIT),Wn(r,U.CWALL_L_LOW_CHEST),Wn(r,U.CWALL_L_WAIST)],midspline:[Wn(r,U.CWALL_MID_HIGH_CHEST),Wn(r,U.CWALL_MID_ARMPIT),Wn(r,U.CWALL_MID_CHEST),Wn(r,U.CWALL_MID_LOW_CHEST),Wn(r,U.CWALL_MID_WAIST)],rightspline:[Wn(r,U.CWALL_R_HIGH_CHEST),Wn(r,U.CWALL_R_ARMPIT),Wn(r,U.CWALL_R_LOW_CHEST),Wn(r,U.CWALL_R_WAIST)]}}(n);(function(r,i){const a=["left_bust","mid_bust","right_bust"],o=["highchest","armpit","bust","underbust","waist"];["leftspline","midspline","rightspline"].forEach((s,l)=>{o.filter(c=>!((l===0||l===2)&&c==="bust")).forEach((c,u)=>{const f=r[s][u];f.x+=i[`${a[l]}_x_bias`],f.y+=i[`y_${s}_adjust_${c}`],f.z+=i[`z_${s}_adjust_${c}`]})})})(t,n.chestWallDefinition),Zr(e,t.leftspline,Up),Zr(e,t.midspline,cM),Zr(e,t.rightspline,Hp)}function fM(e,n,{bodyparts:{layers:{pointLayer:t,splineLayer:{surface:r,tape:i}},frontSilhouette:a,sideSilhouette:o,splineRegions:{mesh:s}},centroids:l,landmarks:c,chestWallDefinition:u}=aM){n.bodyParts.forEach(f=>{const d=(0,jr.rl)();f.layers.forEach(p=>{t&&p.pointLayer&&_o(e,p.pointLayer.points,d),p.splineLayer&&(r&&p.splineLayer.surface&&Af(e,p.splineLayer.surface,p.y,d),i&&p.splineLayer.tape&&Af(e,p.splineLayer.tape,p.y,d))}),l&&function(p,_){const g=_.filter(h=>{var T;return(T=h.centroid)===null||T===void 0?void 0:T.left}).map(h=>({x:h.centroid.left.x,y:h.y,z:h.centroid.left.y})),m=_.filter(h=>{var T;return(T=h.centroid)===null||T===void 0?void 0:T.right}).map(h=>({x:h.centroid.right.x,y:h.y,z:h.centroid.right.y}));Zr(p,g,Up),Zr(p,m,Hp)}(e,f.layers),a&&f.frontSilhouette&&yf(e,f.frontSilhouette,cn.FRONT,d),o&&f.sideSilhouette&&yf(e,f.sideSilhouette,cn.SIDE,d),f.splineRegions&&f.splineRegions.forEach(p=>{s&&function(_,g,m){if(!g.DONE_NORMALS)return;const h=new jr.T3(g.vertices.length,3*g.polygons.length,g.normals.length,Il,jr.xO.TRIANGLES,m);g.vertices.forEach(T=>h.addVertex(T)),g.normals.forEach(T=>h.addNormal(T)),g.polygons.flatMap(T=>T.pointReference).forEach(T=>h.addIndex(T)),h.buildGltf(_)}(e,p,d)})}),c&&n.landmarks&&function(f,d,p){_o(f,d.map(_=>({x:_.x,y:_.y,z:_.z})),p)}(e,n.landmarks),u&&n.chestWallDefinition&&uM(e,n)}function dM(e,n,t,r,i){const a=e.splineLayer.surface,o=Aa(a.nodes,a.parametricNodes,a.parametricCoefficients,500,0,a.nodes.length-1,i),s=[],l=[];for(let g of o){const m={x:Math.round(g.point.x),z:Math.round(g.point.y)};if(s.push(m),i){const h={x:g.colour.x,y:g.colour.y,z:g.colour.z};l.push(h)}}const c=new Ml;c.setPoints(s),i&&c.setColours(l);const u=new ho;u.setPointLayer(c.build()),u.setCentroid(JSON.parse(JSON.stringify(e.centroid)));const f=4*t+2*r+1,d=new Di,p=Qs(u.build(),t,r,1e-4,pa.CLOSED,!1,i);if(d.setNodes(p),f!==p.length){console.error(`${e.y} number of nodes was not equal, expected: ${f}, actual: ${p.length}`);const g=new jr.Zh;_o(g,p.map(m=>({x:m.point.x,y:e.y,z:m.point.y})),[1,0,0,1]),_o(g,o.map(m=>({x:m.point.x,y:e.y,z:m.point.y})),[0,1,0,1]),console.log(JSON.stringify(g.build()))}d.generateSpline(),u.setSplineLayer({surface:d.build()});const _=u.build();e.splineLayer=JSON.parse(JSON.stringify(_.splineLayer)),e.centroid=JSON.parse(JSON.stringify(_.centroid))}function pM(e,n){const t=e.endLayer-e.startLayer;if(t<=0)throw`${e.id} Get Layer Centroid: no layers`;const r=(n-e.startLayer)/t,i={left:{x:0,y:0},right:{x:0,y:0}};return i.left.x=e.start.left.x+r*(e.end.left.x-e.start.left.x),i.left.y=e.start.left.y+r*(e.end.left.y-e.start.left.y),i.right.x=e.start.right.x+r*(e.end.right.x-e.start.right.x),i.right.y=e.start.right.y+r*(e.end.right.y-e.start.right.y),i}function Wa(e,n,t,r,i,a){for(let o=e.startLayer;o<=e.endLayer;o++){const s=n[o],l=pM(e,o);s.odd=o%2!=0;const c=iM(s,0,l,e.noRadial,e.noLinear,pa.CLOSED,i,a);c?(s.splineLayer=c,dM(s,0,e.noRadial,e.noLinear,a)):console.error("creating spline layer from point layer failed")}}function hM(e,n,t,r){for(let i of e.splineRegions)try{e.id==Q.TORSO?i.id!=Z.AXF_HIP_TO_CROTCH&&i.id!=Z.AXF_WAIST_TO_HIP&&i.id!=Z.AXF_ARMPIT_TO_WAIST&&i.id!=Z.AXF_NECK_TO_ARMPIT&&i.id!=Z.AXF_TOP_TO_NECK||Wa(i,e.layers,0,0,!1,r):e.id==Q.CHEST_WALL?i.id==Z.AXF_ARMPIT_TO_WAIST&&Wa(i,e.layers,0,0,!0,!1):e.id==Q.LEFT_LEG||e.id==Q.RIGHT_LEG?i.id!=Z.AXF_THIGH_TO_KNEE&&i.id!=Z.AXF_KNEE_TO_ANKLE&&i.id!=Z.AXF_ANKLE_TO_FLOOR||Wa(i,e.layers,0,0,!1,r):e.id!=Q.LEFT_ARM&&e.id!=Q.RIGHT_ARM||i.id!=Z.AXF_TOPARM_TO_ELBOW&&i.id!=Z.AXF_ELBOW_TO_HAND||Wa(i,e.layers,0,0,!1,r)}catch(a){console.error(a)}}function mM(e,n,t){e.version=ne.AXF_VERSION;const r=Op(e);if(r.length)throw new Error("fit Splines: missing partition landmarks -> "+r.join(", "));const i=function(a){return Array.from(yl.entries()).filter(([o,s])=>s.spline&&!bp(a,Number(o))).map(([o,s])=>s.name)}(e);if(i.length)throw new Error("fit Splines: missing spline landmarks -> "+i.join(", "));yp(e,!n),e.xZResolutionMM;for(let a of e.bodyParts)hM(a,0,e.normaliseResolution,e.colour);e.rawPointsDefined=!1,e.normalisedPointsInLayer=!0}at.wx;var vs=at.L7;at.eF;at.Ep;at.uT;var Gp=at.lw,_M=at.u2;at.GO;at.S5;var Bp=at.xM;at.lo;at.jB;var No=at.yZ;at.qu;at.hC;function pt(){return Math.random()*16777215}const kp=new Lo(.003,10,10),Bn=1/1e4,gM=[{type:"converted",folderName:"1 Converted",displays:["points"]},{type:"headRemoved",folderName:"2 Head removed",displays:["points"]},{type:"aligned",folderName:"3a Aligned",displays:["points"]},{type:"partitionedHighArmpit",folderName:"4a PARTITIONED high armpit",displays:["points"]},{type:"partitionedTrueArmpit",folderName:"4b PARTITIONED true armpit",displays:["points"]},{type:"landmarkedHighArmpit",folderName:"5 LANDMARKED high armpit",displays:["points"]},{type:"processedHighArmpit",folderName:"6a PROCESSED high armpit",displays:["points","mesh","surface"]}],vM=["7001c January 20 2015 02_55.axf","7002a January 20 2015 02_18.axf","7004a January 21 2015 06_45.axf","7009b January 26 2015 10_55.axf","7010b January 26 2015 11_36.axf","7011b January 26 2015 12_54.axf","7012a January 26 2015 01_24.axf","7013a January 27 2015 06_00.axf","7014a January 27 2015 06_31.axf","7018b January 29 2015 09_39.axf","7019b February 4 2015 01_35.axf","7021b February 4 2015 05_49.axf","7024b February 9 2015 06_38.axf","7026b February 11 2015 01_35.axf","7027b February 11 2015 03_26.axf","7030d February 17 2015 07_37.axf","7032b February 17 2015 08_10.axf","7052d March 16 2015 04_31.axf","7061b March 18 2015 10_18.axf","7065d March 18 2015 12_37.axf","7066b March 18 2015 01_28.axf","7072a March 19 2015 07_29.bi.axf","7077a March 25 2015 10_49.bi.axf","7078a March 25 2015 11_29.bi.axf","7081a March 26 2015 06_27.bi.axf","7084a March 30 2015 06_21.bi.axf","7088a March 31 2015 01_48.bi.axf","7095b April 15 2015 11_31.bi.axf","7096a April 15 2015 12_01.bi.axf","7099b April 17 2015 05_26.bi.axf","7100a April 17 2015 05_53.bi.axf","7101a April 21 2015 04_25.bi.axf","7102c April 21 2015 05_17.bi.axf","7105a April 22 2015 12_08.bi.axf","7110a April 27 2015 05_42.bi.axf","7113a April 28 2015 05_32.bi.axf","7115a April 29 2015 11_31.bi.axf"],Wp=EM(),bl={UNLABELLED:pt(),WHOLE_BODY:pt(),LEFT_LEG:pt(),RIGHT_LEG:pt(),TORSO:pt(),LEFT_ARM:pt(),RIGHT_ARM:pt(),CHEST_WALL:pt(),LEFT_BREAST:pt(),RIGHT_BREAST:pt(),MJB_BUST:pt()},Lf={fcolour:pt(),scolour:pt()},zp=new Qr({color:16777215,side:Et});function EM(){const e=vM.filter(n=>!n.includes(".bi."));return gM.map(n=>{const{type:t,folderName:r,displays:i}=n,a=e.map(s=>`/assets/axf/new/${r}/${s}`);return{type:t,folderName:r,displays:i,bodyPaths:a,bodyFilenames:e,index:-1}})}function TM(e,n){const t=Wp.find(a=>a.folderName===e);if(!t)throw new Error("Body directory not found");if(t.index=t.bodyFilenames.findIndex(a=>a===n),t.index===-1)throw new Error("Body filename not found");const r=t.bodyPaths[t.index],i=t.bodyFilenames[t.index];return{index:t.index,path:r,filename:i}}function Vp(e){const n=Wp.find(i=>i.type===e);if(!n)throw new Error("Body directory not found");n.index++,n.index>Object.keys(n.bodyPaths).length-1&&(n.index=0);const t=n.bodyPaths[n.index],r=n.bodyFilenames[n.index];return{index:n.index,path:t,filename:r}}function Ol(e,n){if(n==="points")return kM(e);if(n==="splines")return CM(e);if(n==="mesh")return xf(e,{depthTest:!0,opacity:.5,transparent:!0,linewidth:2,clipping:!1});if(n==="meshthick")return xf(e,{linewidth:7});if(n==="surface")return PM(e);if(n==="bones")return NM(e);if(n==="silhouettes")return OM(e);if(n==="skeletonLandmarks")return wM(e);throw new Error(`Invalid display type: ${n}`)}function SM(e,n){const t=new Jn,r=new Float32Array(2*3);return r[0]=e.x,r[1]=e.y,r[2]=e.z,r[3]=n.x,r[4]=n.y,r[5]=n.z,t.setAttribute("position",new ct(r,3)),t.computeBoundingBox(),t}function RM(e,n){const t=new Jn,r=new Float32Array(e.nodes.length*3);return e.nodes.forEach((i,a)=>{const o=a*3;r[o]=i.point.x,r[o+1]=n+1,r[o+2]=i.point.y-1}),t.setAttribute("position",new ct(r,3)),t.computeBoundingBox(),t}function AM(e){const n=new Jn;let t=0;e.forEach(a=>{a.pointLayer?t+=a.pointLayer.points.length*3:a.splineLayer&&(t+=a.splineLayer.surface.nodes.length*3)});const r=new Float32Array(t);let i=0;return e.forEach(a=>{a.pointLayer?(a.pointLayer.points.forEach((o,s)=>{const l=i+s*3;r[l]=o.x,r[l+1]=o.y,r[l+2]=o.z}),i+=a.pointLayer.points.length*3):a.splineLayer&&(a.splineLayer.surface.nodes.forEach((o,s)=>{const l=i+s*3;r[l]=o.point.x,r[l+1]=a.y,r[l+2]=o.point.y}),i+=a.splineLayer.surface.nodes.length*3)}),n.setAttribute("position",new ct(r,3)),n.computeBoundingBox(),n}function yM(e){const n=new Jn,t=new Float32Array(e.nodes.length*3);return e.nodes.forEach((r,i)=>{const a=i*3;t[a]=r.point.x,t[a+1]=r.point.y+1,t[a+2]=-1}),n.setAttribute("position",new ct(t,3)),n.computeBoundingBox(),n}function LM(e){const n=new Jn,t=new Float32Array(e.nodes.length*3);return e.nodes.forEach((r,i)=>{const a=i*3;t[a]=0,t[a+1]=r.point.y+1,t[a+2]=r.point.x-1}),n.setAttribute("position",new ct(t,3)),n.computeBoundingBox(),n}function Xp(e,n,t,r){const i=new ma({linewidth:t,color:r}),a=new Oi(n,i);e.add(a)}function xM(e){const n=[];return e.bodyParts.forEach(t=>{const r={bodypartId:t.id,colourId:t.type.toString(),geometries:[]};t.layers.filter(i=>i.splineLayer).forEach(i=>r.geometries.push({geometry:RM(i.splineLayer.surface,i.y)}))}),n}function MM(e){const n=[];return e.bodyParts.forEach(t=>{t.frontSilhouette&&t.frontSilhouette.forEach(r=>{n.push(yM(r.cubicSpline))})}),n}function IM(e){const n=[];return e.bodyParts.forEach(t=>{t.sideSilhouette&&t.sideSilhouette.forEach(r=>{n.push(LM(r.cubicSpline))})}),n}function bM(e){const n=new Pn;return e.forEach(t=>{const r=bl[t.colourId];t.geometries.forEach(i=>Xp(n,i.geometry,1.5,r))}),n}function el(e,n){const t=new Pn;return e.forEach(r=>{Xp(t,r,4,n)}),t}function OM(e){const n=new Pn;return n.add(el(MM(e),Lf.fcolour)),n.add(el(IM(e),Lf.scolour)),n}function CM(e){const n=xM(e);return bM(n)}function xf(e,n){const t=Cl(e);return Zp(t,n)}function PM(e){const n=qp(e);return WM(Pl(n))}function NM(e){const n=GM(e);return el(n,pt())}function wM(e){const n=_M(e);return FM(n)}function FM(e){const{leftArm:{leftElbowInternal:n,leftTopArmInternal:t,leftWristInternal:r},leftLeg:{leftAnkleInternal:i,leftFloor:a,leftKneeInternal:o,leftTopThighInternal:s},rightArm:{rightElbowInternal:l,rightTopArmInternal:c,rightWristInternal:u},rightLeg:{rightAnkleInternal:f,rightFloor:d,rightKneeInternal:p,rightTopThighInternal:_},torso:{headInternal:g,hipInternal:m,lowChestInternal:h,neckInternal:T,waistInternal:v}}=e,E=new Jn,L=new Float32Array([n.x,n.y,n.z,t.x,t.y,t.z,r.x,r.y,r.z,i.x,i.y,i.z,a.x,a.y,a.z,o.x,o.y,o.z,s.x,s.y,s.z,l.x,l.y,l.z,c.x,c.y,c.z,u.x,u.y,u.z,f.x,f.y,f.z,d.x,d.y,d.z,p.x,p.y,p.z,_.x,_.y,_.z,g.x,g.y,g.z,m.x,m.y,m.z,h.x,h.y,h.z,T.x,T.y,T.z,v.x,v.y,v.z]);E.setAttribute("position",new ct(L,3));const I=new cl({size:.01,color:16711680});return new yo(E,I)}function Cl(e){const n=[];return e.bodyParts.forEach(t=>{var i;const r={bodypartId:t.id,colourId:t.type.toString(),geometries:[]};(i=t.splineRegions)==null||i.forEach(a=>{if(!a.polygons||!a.polygons.length){console.log(a);return}const o=Jp(a);r.geometries.push({regionId:a.id,geometry:o})}),n.push(r)}),n}function Kp(e){const n=[];return e.isBone&&n.push(e),n.push(...e.children.flatMap(t=>Kp(t))),n}function DM(e,n,t){const i={1:e.map(a=>a.name),2:e.map(a=>a.name),3:{6:["Hips","LeftUpLeg","LeftLeg"],7:["LeftUpLeg","LeftLeg","LeftFoot"],13:["LeftLeg","LeftFoot"]},4:{6:["Hips","RightUpLeg","RightLeg"],7:["RightUpLeg","RightLeg","RightFoot"],13:["RightLeg","RightFoot"]},5:{8:["Neck","LeftShoulder","RightShoulder","LeftArm","RightArm"],3:["LeftShoulder","RightShoulder","Spine1"],4:["Spine"],5:["Spine","Hips","RightUpLeg","LeftUpLeg"]},7:{15:["LeftShoulder","LeftArm","LeftForeArm"],18:["LeftArm","LeftForeArm"]},8:{15:["RightShoulder","RightArm","RightForeArm"],18:["RightArm","RightForeArm"]},9:{3:["Spine1"]},10:["Spine1"],11:["Spine1"],12:["Spine1"]}[n];if(Array.isArray(i))return i;if(!t)throw new Error("No region id");return i[t]}function UM(e){if(!e.extent)throw new Error("error");const n=Cl(e),t=HM(e),r=Kp(t[0]);n.forEach(s=>{const{bodypartId:l}=s;s.geometries.forEach(c=>{const{regionId:u}=c,f=DM(r,l,u),d=r.filter(h=>f.includes(h.name)),p=c.geometry.attributes.position,_=new ce,g=[],m=[];for(let h=0;h<p.count;h++){_.fromBufferAttribute(p,h);const T=d.map(L=>{const I=new ce;L.getWorldPosition(I);const x=_.distanceTo(I);return{bone:L,distance:x}});T.sort((L,I)=>L.distance-I.distance);const v=T.slice(0,4),E=v.reduce((L,I)=>L+1/I.distance,0);for(v.forEach(L=>{const I=1/L.distance/E,x=r.indexOf(L.bone);g.push(x),m.push(I)});g.length%4!==0;)g.push(0),m.push(0)}c.geometry.setAttribute("skinIndex",new rl(g,4)),c.geometry.setAttribute("skinWeight",new Ct(m,4))})});const i=Pl(n),a=new Ao(i,zp),o=new So(r);return a.add(r[0]),a.bind(o),{mesh:a,skeleton:o}}function HM(e){const n=Gp(e);return Yp([n])}function Yp(e){return e.map((n,t)=>{const{name:r,position:i}=n,a=new ta;return a.name=r==="ENDSITE"?`ENDSITE${t}`:r,a.position.set(i.x,i.y,i.z),Yp(n.children).forEach(s=>a.add(s)),a})}function qp(e){const n=[];return e.bodyParts.forEach(t=>{var i;const r={bodypartId:t.id,colourId:t.type.toString(),geometries:[]};(i=t.splineRegions)==null||i.forEach(a=>{if(!a.polygons||!a.polygons.length){console.log(a);return}const o=Jp(a);r.geometries.push({regionId:a.id,geometry:o})}),n.push(r)}),n}function jp(e,n){const t=[],{x:r,y:i,z:a}=e.position;let o={x:r,y:i,z:a};return n&&(o={x:n.x+r,y:n.y+i,z:n.z+a},t.push(SM(n,o))),t.push(...e.children.flatMap(s=>jp(s,o))),t}function GM(e){const n=[],t=Gp(e);return n.push(...jp(t)),n}function BM(e){const n=[];return e.bodyParts.forEach(t=>{const r={bodypartId:t.id,colourId:t.type.toString(),geometries:[]},i=AM(t.layers);r.geometries.push({geometry:i}),n.push(r)}),n}function kM(e){const n=new Pn;return BM(e).forEach(r=>{const i=bl[r.colourId];r.geometries.forEach(a=>{const o=new cl({size:.001,color:i}),s=new yo(a.geometry,o);n.add(s)})}),n}function Zp(e,n,t){const r=new Pn;return e.forEach(i=>{const a=t||bl[i.colourId];i.geometries.forEach(o=>{const s=new al(o.geometry),l=new fd().fromWireframeGeometry(s),c=new lS(l,new dd({...n,color:a}));r.add(c)})}),r}function Pl(e){return aS(e.flatMap(n=>n.geometries.map(t=>t.geometry)))}function WM(e){const n=new Pn,t=new on(e,zp);return t.castShadow=!0,t.receiveShadow=!0,n.add(t),n}function Jp(e){if(!e.polygons||!e.vertices||!e.normals)throw new Error("SplineRegion not initialised properly");const n=new Jn,t=[],r=[],i=[],a=new fe;for(const o of e.polygons){const s=e.vertices[o.pointReference[0]],l=e.vertices[o.pointReference[1]],c=e.vertices[o.pointReference[2]];t.push(s.x,s.y,s.z),t.push(l.x,l.y,l.z),t.push(c.x,c.y,c.z);const u=e.normals[o.pointReference[0]],f=e.normals[o.pointReference[1]],d=e.normals[o.pointReference[2]];r.push(u.x,u.y,u.z),r.push(f.x,f.y,f.z),r.push(d.x,d.y,d.z),a.setRGB(1,1,.8);const p=.8;i.push(a.r,a.g,a.b,p),i.push(a.r,a.g,a.b,p),i.push(a.r,a.g,a.b,p)}return n.setAttribute("position",new Ct(t,3).onUpload(Es)),n.setAttribute("normal",new Ct(r,3).onUpload(Es)),n.setAttribute("color",new Ct(i,4).onUpload(Es)),n.computeBoundingSphere(),n}function Es(){this.array=void 0}async function wo(e){const n=await fetch(e);if(!n.ok)throw new Error(`Failed to fetch: ${n.status} ${n.statusText}`);const t=await n.arrayBuffer();return new Uint8Array(t)}const zM={hipInfluence:new ce(500,500,500),hip:"Hips",names:{Hips:"Hips",LHipJoint:"LHipJoint",LeftUpLeg:"LeftUpLeg",LeftLeg:"LeftLeg",LeftFoot:"LeftFoot",LeftToeBase:"LeftToeBase",RHipJoint:"RHipJoint",RightUpLeg:"RightUpLeg",RightLeg:"RightLeg",RightFoot:"RightFoot",RightToeBase:"RightToeBase",LowerBack:"LowerBack",Spine:"Spine",Spine1:"Spine1",Neck:"Neck",Neck1:"Neck1",Head:"Head",LeftShoulder:"LeftShoulder",LeftArm:"LeftArm",LeftForeArm:"LeftForeArm",LeftHand:"LeftHand",LeftFingerBase:"LeftFingerBase",LeftHandIndex1:"LeftHandIndex1",LThumb:"LThumb",RightShoulder:"RightShoulder",RightArm:"RightArm",RightForeArm:"RightForeArm",RightHand:"RightHand",RightFingerBase:"RightFingerBase",RightHandIndex1:"RightHandIndex1",RThumb:"RThumb"}};function nl(e,n){var t;return n.getBoneName!==void 0?n.getBoneName(e):(t=n.names)==null?void 0:t[e.name]}function VM(e,n,t={}){const r=new vt,i=new ce,a=new sn,o=new sn;t.preserveBoneMatrix=t.preserveBoneMatrix!==void 0?t.preserveBoneMatrix:!0,t.preserveBonePositions=t.preserveBonePositions!==void 0?t.preserveBonePositions:!0,t.useTargetMatrix=t.useTargetMatrix!==void 0?t.useTargetMatrix:!1,t.hip=t.hip!==void 0?t.hip:"hip",t.hipInfluence=t.hipInfluence!==void 0?t.hipInfluence:new ce(1,1,1),t.scale=t.scale!==void 0?t.scale:1,t.names=t.names||{};let s;if(e instanceof Ao?e.skeleton.pose():(t.useTargetMatrix=!0,t.preserveBoneMatrix=!1),t.preserveBonePositions){s=[];for(let l=0;l<e.skeleton.bones.length;l++)s.push(e.skeleton.bones[l].position.clone())}if(t.preserveBoneMatrix){e.updateMatrixWorld(),e.matrixWorld.identity();for(let l=0;l<e.children.length;++l)e.children[l].updateMatrixWorld(!0)}for(let l=0;l<e.skeleton.bones.length;++l){const c=e.skeleton.bones[l],u=nl(c,t),f=$p(u,n.bones);o.copy(c.matrixWorld),f&&(f.updateMatrixWorld(),t.useTargetMatrix?a.copy(f.matrixWorld):(a.copy(e.matrixWorld).invert(),a.multiply(f.matrixWorld)),i.setFromMatrixScale(a),a.scale(i.set(1/i.x,1/i.y,1/i.z)),o.makeRotationFromQuaternion(r.setFromRotationMatrix(a)),t.localOffsets&&t.localOffsets[c.name]&&o.multiply(t.localOffsets[c.name]),o.copyPosition(a)),u===t.hip&&(o.elements[12]*=t.scale*t.hipInfluence.x,o.elements[13]*=t.scale*t.hipInfluence.y,o.elements[14]*=t.scale*t.hipInfluence.z,t.hipPosition!==void 0&&(o.elements[12]+=t.hipPosition.x*t.scale,o.elements[13]+=t.hipPosition.y*t.scale,o.elements[14]+=t.hipPosition.z*t.scale)),c.parent?(c.matrix.copy(c.parent.matrixWorld).invert(),c.matrix.multiply(o)):c.matrix.copy(o),c.matrix.decompose(c.position,c.quaternion,c.scale),c.updateMatrixWorld()}if(t.preserveBonePositions)for(let l=0;l<e.skeleton.bones.length;++l){const c=e.skeleton.bones[l];(nl(c,t)||c.name)!==t.hip&&c.position.copy(s[l])}t.preserveBoneMatrix&&e.updateMatrixWorld(!0)}function XM(e,n,t,r={}){r.useFirstFramePosition=r.useFirstFramePosition!==void 0?r.useFirstFramePosition:!1,r.fps=r.fps!==void 0?r.fps:Math.max(...t.tracks.map(d=>d.times.length))/t.duration,r.names=r.names||void 0;const i=Math.round(t.duration*(r.fps/1e3)*1e3),a=t.duration/(i-1),o=[],s=new jf(n),l=[];let c;s.clipAction(t).play();let u=0,f=i;r.trim!==void 0?(u=Math.round(r.trim[0]*r.fps),f=Math.min(Math.round(r.trim[1]*r.fps),i)-u,s.update(r.trim[0])):s.update(0),n.updateMatrixWorld();for(let d=0;d<f;++d){const p=d*a;VM(e,n,r);for(let _=0;_<e.skeleton.bones.length;++_){const g=e.skeleton.bones[_],m=nl(g,r)||g.name;if($p(m,n.bones)){const T=l[_]=l[_]||{bone:g,pos:{times:new Float32Array(f),values:new Float32Array(f*3)},quat:{times:new Float32Array(f),values:new Float32Array(f*4)}};r.useFirstFramePosition&&(d===0&&(c=g.position.clone()),g.position.sub(c)),T.pos.times[d]=p,g.position.toArray(T.pos.values,d*3),T.quat.times[d]=p,g.quaternion.toArray(T.quat.values,d*4)}}d===f-2?s.update(a-1e-7):s.update(a),n.updateMatrixWorld()}for(let d=0;d<l.length;++d){const p=l[d];p&&(p.pos&&o.push(new ra(".bones["+p.bone.name+"].position",p.pos.times,p.pos.values)),o.push(new bi(".bones["+p.bone.name+"].quaternion",p.quat.times,p.quat.values)))}return s.uncacheAction(t),new Ro(t.name,-1,o)}class KM extends Zf{constructor(t,r){super(t);re(this,"skeleton");this.skeleton=r}}function $p(e,n){for(let t=0,r=YM(n);t<r.length;t++)if(e===r[t].name)return r[t]}function YM(e){return Array.isArray(e)?e:e.bones}const za=.002,Vi=new fe(4580095),pr={scene:{background:1907995,fog:10526880,ground:2769747,grid:{one:0,two:0},hemiLight:{sky:16777215,ground:4473924},dirLight:16777215},panel:{buttonColumn:{width:null,height:null,padding:.02,justifyContent:"center",contentDirection:"column",fontFamily:Mt,fontTexture:Mt,fontSize:.07,backgroundColor:new fe(16777215),backgroundOpacity:.09,borderWidth:za,borderRadius:0,borderOpacity:.9,borderColor:Vi,fontSuperSampling:!0},buttonRow:{width:null,height:null,padding:.02,justifyContent:"center",contentDirection:"row",fontFamily:Mt,fontTexture:Mt,fontSize:.07,backgroundColor:new fe(16777215),backgroundOpacity:.09,borderWidth:za,borderRadius:0,borderOpacity:.9,borderColor:Vi,fontSuperSampling:!0},buttonRowNoBorder:{width:null,height:null,padding:.02,justifyContent:"center",contentDirection:"row",fontFamily:Mt,fontTexture:Mt,fontSize:.07,backgroundColor:new fe(16777215),backgroundOpacity:.09,borderWidth:0,borderRadius:0,borderOpacity:.9,borderColor:Vi,fontSuperSampling:!0},landmark:{width:.06,height:.02,padding:.002,justifyContent:"center",contentDirection:"column",fontFamily:Mt,fontTexture:Mt,fontSize:.007,fontColor:new fe(0),interLine:5e-4,backgroundColor:new fe(16777215),backgroundOpacity:1,borderWidth:0,borderRadius:0,borderOpacity:.9,borderColor:Vi,fontSuperSampling:!0},text:{width:2,height:null,padding:.2,justifyContent:"start",textAlign:"left",fontFamily:Mt,fontTexture:Mt,fontColor:new fe(0),backgroundColor:new fe(16777215),backgroundOpacity:.09,borderWidth:za,borderRadius:0,borderOpacity:.9,borderColor:Vi,fontSuperSampling:!0},label:{width:.5,height:null,padding:.002,justifyContent:"center",textAlign:"center",fontFamily:Mt,fontTexture:Mt,backgroundColor:new fe(16777215),backgroundOpacity:.09,borderWidth:0,borderRadius:0,fontSuperSampling:!0},guidedExperienceInner:{height:1.2,width:1.5,padding:.12,justifyContent:"center",textAlign:"left",contentDirection:"column",backgroundColor:new fe(3829647),backgroundOpacity:0,transparent:!1,offset:.001}},button:{buttonPrimary:{buttonOptions:{width:.5,height:.15,justifyContent:"center",offset:.05,margin:.02,borderWidth:0,borderRadius:.04,borderOpacity:.9},selectedAttributes:{offset:.03,backgroundColor:new fe(7829367),fontColor:new fe(2236962)},hoveredStateAttributes:{state:"hovered",attributes:{offset:.035,backgroundColor:new fe(16382457),backgroundOpacity:1,fontColor:new fe(10395294)}},idleStateAttributes:{state:"idle",attributes:{offset:.035,backgroundColor:new fe(4645375),backgroundOpacity:1,fontColor:new fe(687506)}}},buttonSecondary:{buttonOptions:{width:.5,height:.15,justifyContent:"center",offset:.05,margin:.02,borderWidth:za,borderRadius:.04,borderOpacity:1,borderColor:new fe(6981783)},selectedAttributes:{offset:.03,backgroundColor:new fe(7829367),fontColor:new fe(2236962)},hoveredStateAttributes:{state:"hovered",attributes:{offset:.035,backgroundColor:new fe(4972538),backgroundOpacity:1,fontColor:new fe(16777215)}},idleStateAttributes:{state:"idle",attributes:{offset:.035,backgroundColor:new fe(2769235),backgroundOpacity:1,fontColor:new fe(12175831)}}}},buttonNew:{buttonPrimary:{selectedAttributes:{offset:0,backgroundColor:new fe(7829367),fontColor:new fe(2236962)},hoveredAttributes:{offset:0,backgroundColor:new fe(16382457),backgroundOpacity:1,fontColor:new fe(10395294)},idleAttributes:{offset:.08,backgroundColor:new fe(4645375),backgroundOpacity:1,fontColor:new fe(687506)}},buttonSecondary:{selectedAttributes:{offset:0,backgroundColor:new fe(7829367),fontColor:new fe(2236962)},hoveredAttributes:{offset:0,backgroundColor:new fe(16382457),backgroundOpacity:1,fontColor:new fe(10395294)},idleAttributes:{offset:.08,backgroundColor:new fe(2769235),backgroundOpacity:1,fontColor:new fe(12175831),borderColour:new fe(4579839),borderWidth:.01}}}};function Ai(e){return{fontSize:.08,content:e}}function Qt(e){return{fontSize:.06,content:e}}function qM(e){return e.map(n=>new aa({content:`
${n.content}`,fontSize:.08}))}class Fo{constructor(n,t=new ce(0,1.3,-4)){re(this,"panel");re(this,"lastTextStrings",[]);this.height=n,this.position=t}haveTextsChanged(n){const t=n.map(i=>i.content);return t.length!==this.lastTextStrings.length||t.some((i,a)=>i!==this.lastTextStrings[a])?(this.lastTextStrings=t,!0):!1}update(n,t){if(this.haveTextsChanged(t)){const r=new gt({...pr.panel.text,height:this.height});r.position.set(this.position.x,this.position.y,this.position.z),r.add(...qM(t)),n.add(r),this.panel&&(n.remove(this.panel),ya.disposeDescendants(this.panel)),this.panel=r}}render(n){var t;(t=this.panel)==null||t.lookAt(n.position)}}const Mf=new ma({color:16711680});class jM{constructor(n){re(this,"controller1");re(this,"controller2");re(this,"controllerGrip1");re(this,"controllerGrip2");re(this,"leftControllerState","idle");re(this,"rightControllerState","idle");re(this,"noneControllerState","idle");const t=new Jn().setFromPoints([new ce(0,0,-.05),new ce(0,0,-20)]),r=new Oi(t,Mf);r.name="line",this.controller1=n.xr.getController(0),this.controller1.userData.handedness="left",this.controller1.add(r);const i=new Jn().setFromPoints([new ce(0,0,-.05),new ce(0,0,-20)]),a=new Oi(i,Mf);a.name="line",this.controller2=n.xr.getController(1),this.controller2.userData.handedness="right",this.controller2.add(a);const o=new UL;this.controllerGrip1=n.xr.getControllerGrip(0),this.controllerGrip1.add(o.createControllerModel(this.controllerGrip1)),this.controllerGrip2=n.xr.getControllerGrip(1),this.controllerGrip2.add(o.createControllerModel(this.controllerGrip2))}selectstart(n){if(!n.data)return;const t=`${n.data.handedness}ControllerState`;this[t]="selected"}selectend(n){if(!n.data)return;const t=`${n.data.handedness}ControllerState`;this[t]="idle"}addEventListenerWithAbort(n,t,r,i){this[`controller${n}`].addEventListener(t,r),i.addEventListener("abort",()=>{this[`controller${n}`].removeEventListener(t,r)},{once:!0})}}const ZM="/assets/High%20Grass-Q7_f1USz.fbx",JM="/assets/Palm_01-CRl9z-QR.fbx",$M="/assets/Flower-CCEUD56a.fbx",$a={};async function QM(){const e=new uS,[n,t,r]=await Promise.all([e.loadAsync(ZM),e.loadAsync(JM),e.loadAsync($M)]);$a.highGrass=n,$a.palm01=t,$a.flower=r}class eI{constructor(n){re(this,"raycasterObjects");re(this,"raycasterPoints");re(this,"tempMatrix");this.raycasterObjects=new Ns,this.raycasterObjects.camera=n,this.raycasterPoints=new Ns,this.raycasterPoints.camera=n,this.raycasterPoints.params.Points.threshold=20,this.tempMatrix=new sn}getIntersection(n,t){this.tempMatrix.identity().extractRotation(n.matrixWorld),this.raycasterPoints.ray.origin.setFromMatrixPosition(n.matrixWorld),this.raycasterPoints.ray.direction.set(0,0,-1).applyMatrix4(this.tempMatrix);const r=this.raycasterPoints.intersectObjects(t,!0);return r.length>0?r[0]:void 0}getIntersectionReturnObject(n,t){return this.tempMatrix.identity().extractRotation(n.matrixWorld),this.raycasterObjects.ray.origin.setFromMatrixPosition(n.matrixWorld),this.raycasterObjects.ray.direction.set(0,0,-1).applyMatrix4(this.tempMatrix),t.reduce((r,i)=>{const a=this.raycasterObjects.intersectObject(i,!0);return a[0]&&(!r||a[0].distance<r.distance)?(a[0].object=i,a[0]):r},void 0)}}function nI(e,n,t,r){const i=2*Math.PI*e/n-Math.PI/2,a=t*Math.cos(i),o=t*Math.sin(i),s=r[e%r.length];return{x:a,y:o,label:s}}class tI{constructor(n,t=!1){re(this,"scene");re(this,"camera");re(this,"dolly");re(this,"dummyCam");re(this,"sound");re(this,"sky");re(this,"sun");re(this,"audioListener",new Km);re(this,"panelDebug");re(this,"abortController",new AbortController);re(this,"raycasterIntersections");re(this,"extraDebugText");this.renderer=n;const{fog:r,hemiLight:i,dirLight:a}=pr.scene,o=new ul,s={turbidity:10,rayleigh:.5,mieCoefficient:.005,mieDirectionalG:.7,elevation:33,azimuth:25,exposure:n.toneMappingExposure},l=new bo;l.scale.setScalar(45e4),o.add(l);const c=new ce,u=l.material.uniforms;u.turbidity.value=s.turbidity,u.rayleigh.value=s.rayleigh,u.mieCoefficient.value=s.mieCoefficient,u.mieDirectionalG.value=s.mieDirectionalG;const f=Xn.degToRad(90-s.elevation),d=Xn.degToRad(s.azimuth);c.setFromSphericalCoords(1,f,d),u.sunPosition.value.copy(c),n.toneMappingExposure=s.exposure,o.fog=new Wm(r,10,50);const p=new Jf(i.sky,i.ground);p.position.set(0,20,0),o.add(p);const _=new ll(a);_.position.set(-3,10,-10),_.castShadow=!0,_.shadow.camera.top=2,_.shadow.camera.bottom=-2,_.shadow.camera.left=-2,_.shadow.camera.right=2,_.shadow.camera.near=.1,_.shadow.camera.far=40,o.add(_);const g=new Zt,m=[13421772,10066329,6710886],h=[8,5,2.5],T=0,v=.002;for(let S=0;S<h.length;S++){const C=T+S*v;if(S===0){const H=new on(new zm(h[S],64),new Dn({color:m[S]}));H.rotation.x=-Math.PI/2,H.position.y=C,g.add(H)}else{const H=new on(new Vm(h[S],h[S-1],64),new Dn({color:m[S]}));H.rotation.x=-Math.PI/2,H.position.y=C,g.add(H)}}o.add(g);const E=new Lr(50,window.innerWidth/window.innerHeight,.1,1e3);E.position.set(0,1.6,1.5),E.add(this.audioListener);const L=new Pn;L.position.set(0,0,0),L.add(E),o.add(L);const I=new Pn;E.add(I);const x=new Xm(this.audioListener);x.setBuffer(Zi.crowdOfPeopleTalking),x.setLoop(!0),x.setVolume(.1),x.isPlaying&&x.stop(),x.play(),o.add(Xe.controllers.controller1),o.add(Xe.controllers.controller2),o.add(Xe.controllers.controllerGrip1),o.add(Xe.controllers.controllerGrip2),this.raycasterIntersections=new eI(E),t&&(this.panelDebug=new Fo(1.5,new ce(0,3,-4)));const b=12,A=["highGrass","palm01","flower"];for(let S=0;S<b;S++){const C=nI(S,b,7,A),H=$a[C.label].clone(),G=1/25;H.scale.set(G,G,G),H.translateX(C.x),H.translateZ(C.y),o.add(H)}this.scene=o,this.camera=E,this.dolly=L,this.dummyCam=I,this.sound=x,this.sky=l,this.sun=c,this.abortController.signal.addEventListener("abort",()=>{x.stop(),this.audioListener.clear(),ya.disposeDescendants(o),o.clear(),this.scene.remove(Xe.controllers.controller1),this.scene.remove(Xe.controllers.controller2),this.scene.remove(Xe.controllers.controllerGrip1),this.scene.remove(Xe.controllers.controllerGrip2),this.scene.remove(l)},{once:!0})}moveLineIntercept(n){const{handedness:t}=n.target.userData;if(t){const r=n.target.getObjectByName("line"),i=[];this.scene.traverse(o=>{(o instanceof on||o instanceof yo||o instanceof al)&&o.name!=="IGNOREME"&&i.push(o)});const a=this.raycasterIntersections.getIntersection(n.target,i);r.geometry.setFromPoints([new ce(0,0,-.1),new ce(0,0,a?-a.distance:-20)])}}async initialise(){Xe.controllers.addEventListenerWithAbort(1,"selectstart",n=>Xe.controllers.selectstart(n),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"selectstart",n=>Xe.controllers.selectstart(n),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(1,"selectend",n=>Xe.controllers.selectend(n),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"selectend",n=>Xe.controllers.selectend(n),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(1,"move",n=>this.moveLineIntercept(n),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"move",n=>this.moveLineIntercept(n),this.abortController.signal)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}displayDebugText(){const{memory:n,programs:t}=this.renderer.info,r=[Ai("Debugging info"),Ai("Memory"),Qt(`Texture: ${n.textures}`),Qt(`Geometries: ${n.geometries}`),Ai("Programs")];return t==null||t.map(i=>r.push(Qt(`${i.name}`))),this.extraDebugText&&r.push(...this.extraDebugText),r}render(n){this.renderer.render(this.scene,this.camera),this.panelDebug&&(this.panelDebug.render(this.camera),this.panelDebug.update(this.scene,this.displayDebugText()))}}function If(e,n,t,r=.02){const i=-e/2,a=-n/2,o=new Ym;o.moveTo(i+t,a),o.lineTo(i+e-t,a),o.absarc(i+e-t,a+t,t,Math.PI*1.5,0,!1),o.lineTo(i+e,a+n-t),o.absarc(i+e-t,a+n-t,t,0,Math.PI*.5,!1),o.lineTo(i+t,a+n),o.absarc(i+t,a+n-t,t,Math.PI*.5,Math.PI,!1),o.lineTo(i,a+t),o.absarc(i+t,a+t,t,Math.PI,Math.PI*1.5,!1);const s={depth:r,bevelEnabled:!1,steps:1},l=new Xf(o,s);return l.center(),l}class rI{constructor(n,t,r,i,a){re(this,"mesh");re(this,"leftControllerState","idle");re(this,"rightControllerState","idle");re(this,"noneControllerState","idle");re(this,"_state","idle");re(this,"materialInner");re(this,"materialOuter");re(this,"materialText");this.base=n,this.buttonConfig=t,this.content=r,this.callback=i;const o=typeof r=="string"?r:`Next: ${r.name}`,{width:s,height:l,radius:c,depth:u,font:f,idleAttributes:{fontColor:d,borderColour:p,backgroundColor:_,backgroundOpacity:g,borderOpacity:m,borderWidth:h,offset:T}}=t,v=new Dn({color:p??_,opacity:m??1,transparent:!0}),E=If(s,l,c,u);E.computeBoundingBox(),E.computeVertexNormals();const L=new on(E,v);L.position.z=T??0;const I=new Dn({color:_,opacity:g??1,transparent:!0}),x=If(h?s-2*h:s,h?l-2*h:l,c,u);x.computeBoundingBox(),x.computeVertexNormals();const b=new on(x,I);b.position.z=1e-4,L.add(b);const A=new iS(a||o,{font:f,size:.05,depth:.01,curveSegments:4,bevelThickness:.001,bevelSize:.001,bevelEnabled:!1});A.computeBoundingBox(),A.computeVertexNormals();const S=-.5*(A.boundingBox.max.x-A.boundingBox.min.x),C=-.5*(A.boundingBox.max.y-A.boundingBox.min.y),H=new Dn({color:d}),G=new on(A,H);G.position.x=S,G.position.y=C,G.position.z=.01,b.add(G),Xe.controllers.addEventListenerWithAbort(1,"selectstart",this.selectstartMeshUiButtonExtended.bind(this),n.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"selectstart",this.selectstartMeshUiButtonExtended.bind(this),n.abortController.signal),Xe.controllers.addEventListenerWithAbort(1,"move",this.moveMeshUiButtonExtended.bind(this),n.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"move",this.moveMeshUiButtonExtended.bind(this),n.abortController.signal),this.materialOuter=v,this.materialInner=I,this.materialText=H,this.mesh=L}get state(){return this._state}set state(n){switch(this._state=n,n){case"idle":this.updateColours(this.buttonConfig.idleAttributes);break;case"selected":this.updateColours(this.buttonConfig.selectedAttributes),this.callback(this.content);break;case"hovered":this.updateColours(this.buttonConfig.hoveredAttributes);break}}updateColours(n){this.materialOuter.color.set(n.borderColour??n.backgroundColor),this.materialInner.color.set(n.backgroundColor),this.materialText.color.set(n.fontColor),this.mesh.position.z=n.offset??.02}selectstartMeshUiButtonExtended(n){const t=this.base.raycasterIntersections.getIntersectionReturnObject(n.target,[this.mesh]);t&&t.object===this.mesh&&(this.state="selected")}moveMeshUiButtonExtended(n){const t=this.base.raycasterIntersections.getIntersectionReturnObject(n.target,[this.mesh]),{handedness:r}=n.target.userData,i=`${r}ControllerState`;t&&t.object===this.mesh?this[i]!=="hovered"&&(this[i]="hovered"):this[i]!=="idle"&&(this[i]="idle"),this.updateButtonState()}updateButtonState(){(this.leftControllerState==="hovered"||this.rightControllerState==="hovered")&&this.state!=="hovered"?this.state="hovered":this.leftControllerState==="idle"&&this.rightControllerState==="idle"&&this.state!=="idle"&&(this.state="idle")}}const iI="/assets/Rajdhani-Bold-DpQCrXtY.ttf",aI="/assets/Rajdhani-Regular-Dom0fR4-.ttf",oI="/assets/Rajdhani-SemiBold-nEoOYjXG.ttf",Qa={};async function sI(){const e=new LL,[n,t,r]=await Promise.all([e.loadAsync(iI),e.loadAsync(aI),e.loadAsync(oI)]);Qa.fontRajdhaniBold=new is(n),Qa.fontRajdhaniRegular=new is(t),Qa.fontRajdhaniSemiBold=new is(r)}class lI{constructor(n,t,r){re(this,"mesh");re(this,"button");const i={width:1.5,height:.15,radius:.03,depth:.02,font:Qa.fontRajdhaniSemiBold,...pr.buttonNew.buttonPrimary},a=new rI(t,i,r,Xe.switchScene.bind(Xe));if(!a.mesh.geometry.boundingBox)throw new Error("There should be a bounding box");const o=new Dn({color:2769747,opacity:.5,transparent:!0}),s=.02,l=a.mesh.geometry.boundingBox.max.x-a.mesh.geometry.boundingBox.min.x+2*s,c=a.mesh.geometry.boundingBox.max.y-a.mesh.geometry.boundingBox.min.y+2*s,u=new xi(l,c),f=new on(u,o);f.position.set(-2,.75,-4),f.rotation.x=.45,f.add(a.mesh),n.add(f),this.mesh=f,this.button=a}render(n){this.mesh.lookAt(n.position)}}class cI{constructor(n,t){re(this,"meshOuter");this.scene=n,this.createPanel(t)}update(n){this.scene.remove(this.meshOuter),this.createPanel(n)}createPanel(n){const t=new Dn({color:2769747,opacity:.5,transparent:!0}),r=new xi(1.54,1.24),i=new on(r,t);i.position.set(-2,1.5,-4);const a=new Dn({color:2769747}),o=new xi(1.5,1.2),s=new on(o,a);s.position.set(0,0,.001),i.add(s);const l=new gt({...pr.panel.guidedExperienceInner}),c=new gt({height:.15,width:1.5,padding:.1,justifyContent:"center",textAlign:"left",contentDirection:"row",backgroundColor:new fe(3829647),backgroundOpacity:0,offset:.001}),u=new gt({height:.15,width:.7,padding:0,justifyContent:"center",textAlign:"center",backgroundOpacity:0,transparent:!0,offset:.001});u.add(new qm({height:.15,width:.45,backgroundTexture:hp})),c.add(u);const f=new gt({height:.15,width:.75,padding:.12,justifyContent:"center",textAlign:"left",backgroundOpacity:0,transparent:!0,offset:.001});f.add(new aa({content:"Guided Tour",fontSize:.1,fontFamily:Ec,fontTexture:Ec})),c.add(f),l.add(c);const d=new gt({height:.1,width:.8,backgroundOpacity:0});l.add(d);const p=new gt({height:.75,width:1.2,padding:0,contentDirection:"column",justifyContent:"center",textAlign:"left",backgroundOpacity:0,transparent:!0,offset:.001});$f.forEach(_=>{const g={height:.12,width:1.2,padding:.01,contentDirection:"row",justifyContent:"center",textAlign:"left",backgroundColor:new fe(14004345),backgroundOpacity:0,offset:.001};let m=_.name;_.stage&&(m=`${_.stage}. ${m}`),_.optional&&(m=`${m} (Optional)`);const h={content:`
${m}`,fontSize:.06,fontColor:new fe(4449278),fontFamily:Tc,fontTexture:Tc};_.id===n&&(h.fontColor=new fe(3829647),g.backgroundOpacity=1);const T=new gt(g),v=new gt({height:.1,width:.001,padding:0,backgroundOpacity:0});if(_.id===n){const L=new Jn,I=new Float32Array([0,0,0,1,0,0,.5,.5,0]);L.setAttribute("position",new ct(I,3)),L.setIndex([0,1,2]),L.computeVertexNormals();const x=new Dn({color:2769747,side:Et}),b=new on(L,x);b.scale.set(.05,.05,.05),b.position.set(-.1,.025,0),b.rotation.z=-Math.PI/2,v.add(b)}T.add(v);const E=new gt({height:.1,width:1,backgroundOpacity:0});E.add(new aa(h)),T.add(E),p.add(T)}),l.add(p),i.add(l),this.scene.add(i),this.meshOuter=i}render(n){this.meshOuter.lookAt(n.position)}}class Ui extends tI{constructor(t,r,i){super(t,i);re(this,"panelGuidedExperience");re(this,"panelNextGuidedExperience");this.guidedExperience=r,this.panelGuidedExperience=new cI(this.scene,this.guidedExperience.id)}async initialise(){super.initialise();const t=$f.find(r=>r.id===this.guidedExperience.next);t&&(this.panelNextGuidedExperience=new lI(this.scene,this,t)),this.panelGuidedExperience.update(this.guidedExperience.id)}render(t){super.render(t),this.panelNextGuidedExperience&&this.panelNextGuidedExperience.render(this.camera),this.panelGuidedExperience.render(this.camera)}}class uI extends Ui{constructor(){super(...arguments);re(this,"mixer1");re(this,"mixer2");re(this,"currentBody");re(this,"body")}async initialise(){super.initialise(),this.currentBody=TM("6a PROCESSED high armpit","7002a January 20 2015 02_18.axf");const t=await wo(this.currentBody.path),r=No(t);if(!r.extent)throw new Error("error");const{mesh:i,skeleton:a}=UM(r),o=new Zf(a.bones[0]),l=Yt["animation3530"];console.log(a);const c=l.skeleton.bones[0],u=new KM(c,l.skeleton),f=XM(i,u,l.clip,zM);this.mixer1=new jf(i),this.scene.add(i),i.position.set(0,-1,-2),i.rotateY(0),i.translateY(-r.extent.min.y*Bn),i.scale.set(Bn,Bn,Bn),this.scene.add(o),this.mixer1.clipAction(f).play()}render(t){super.render(t),this.currentBody&&(this.mixer1&&this.mixer1.update(t),this.mixer2&&this.mixer2.update(t))}}class fI{constructor(n,t,r,i=!1,a){re(this,"button");re(this,"leftControllerState","idle");re(this,"rightControllerState","idle");re(this,"noneControllerState","idle");this.base=n;const o=i?pr.button.buttonSecondary:pr.button.buttonPrimary,{buttonOptions:s,hoveredStateAttributes:l,idleStateAttributes:c,selectedAttributes:u}=o,f=new gt(s);f.name=typeof t=="string"?t:t.name,f.add(new aa({content:a||f.name}));const d=new jm(n.audioListener);d.setBuffer(Zi.button4),d.setRefDistance(4),f.add(d),f.setupState({state:"selected",attributes:u,onSet:()=>{r(t),d.isPlaying&&d.stop(),d.play()}}),f.setupState(l),f.setupState(c),Xe.controllers.addEventListenerWithAbort(1,"selectstart",this.selectstartMeshUiButtonExtended.bind(this),n.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"selectstart",this.selectstartMeshUiButtonExtended.bind(this),n.abortController.signal),Xe.controllers.addEventListenerWithAbort(1,"move",this.moveMeshUiButtonExtended.bind(this),n.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"move",this.moveMeshUiButtonExtended.bind(this),n.abortController.signal),this.button=f}selectstartMeshUiButtonExtended(n){const t=this.base.raycasterIntersections.getIntersectionReturnObject(n.target,[this.button]);t&&t.object===this.button&&this.button.setState("selected")}moveMeshUiButtonExtended(n){const t=this.base.raycasterIntersections.getIntersectionReturnObject(n.target,[this.button]),{handedness:r}=n.target.userData,i=`${r}ControllerState`;t&&t.object===this.button?this[i]!=="hovered"&&(this[i]="hovered"):this[i]!=="idle"&&(this[i]="idle"),this.updateButtonState()}updateButtonState(){(this.leftControllerState==="hovered"||this.rightControllerState==="hovered")&&this.button.currentState!=="hovered"?this.button.setState("hovered"):this.leftControllerState==="idle"&&this.rightControllerState==="idle"&&this.button.currentState!=="idle"&&this.button.setState("idle")}}const dI=new ma({color:0});class pI{constructor(n,t,r){re(this,"panel");this.panel=new gt(pr.panel.landmark),this.panel.position.copy(r),this.panel.translateZ(.4),this.panel.add(new aa({content:t,offset:1e-4})),setTimeout(()=>n.add(this.panel),100);const i=new Jn().setFromPoints([r.clone(),this.panel.position.clone()]),a=new Oi(i,dI);n.add(a)}lookAt(n){this.panel.lookAt(n.position)}}function hI(e,n,t,r,i=.003){const a=Bp.get(n);if(!a)throw Error(`${t}: Landmark type not found`);const{name:o}=a,s=new Lo(i,10,10),l=new on(s,new Dn({color:16711680}));l.position.copy(r);const c=new pI(e,a.name,r);return{mesh:l,landmarkType:n,name:o,position:r,panel:c}}class mI{constructor(n,t,r,i,a){re(this,"panel");re(this,"landmarkContainers",[]);this.scene=n,this.game=t,this.marker=a,this.marker=a,this.panel=new gt(pr.panel.buttonColumn),this.panel.position.set(2,1.5,-4),i.forEach(o=>{const s=Bp.get(o);if(!s)return;const l=new fI(r,s.name,c=>this.addLandmark(c,o));this.panel.add(l.button)}),this.scene.add(this.panel)}addLandmark(n,t){const{game:r,landmarkContainers:i,marker:a}=this,o=hI(r,t,n,a.mesh.position);o&&(i.push(o),r.add(o.mesh))}dispose(){for(const n of this.landmarkContainers)this.game.remove(n.mesh);this.landmarkContainers=[]}render(n){const{landmarkContainers:t,panel:r}=this;r.lookAt(n.position),t.forEach(i=>i.panel.lookAt(n))}}const Va={mesh:new on(kp,new Dn({color:65280}))};class _I extends Ui{constructor(t,r){super(t,r);re(this,"game");re(this,"panelLandmarks");re(this,"panelText",new Fo(1));re(this,"container");re(this,"body");this.renderer=t,this.guidedExperience=r,this.game=new Pn,this.scene.add(this.game),this.panelLandmarks=new mI(this.scene,this.game,this,[vs.LEFT_ARMPIT,vs.RIGHT_ARMPIT,vs.CROTCH],Va),this.game.add(Va.mesh),this.abortController.signal.addEventListener("abort",()=>{this.panelLandmarks.dispose(),this.game.clear()},{once:!0})}move(t){const{handedness:r}=t.target.userData,i=`${r}ControllerState`,a=this.raycasterIntersections.getIntersection(t.target,[this.body]);Xe.controllers[i]==="selected"&&a&&a.index&&(Va.position=a.point.toArray(),Va.mesh.position.copy(a.point))}async initialise(){super.initialise();const t=Vp("headRemoved"),r=await wo(t.path),i=No(r);if(!i.extent||!i.extent.difference)throw new Error("error");this.body=Ol(i,"points"),this.body.translateY(-i.extent.min.y),this.container=new Pn,this.container.add(this.body),this.container.scale.set(Bn,Bn,Bn),this.container.translateZ(-1),this.game.add(this.container),Xe.controllers.addEventListenerWithAbort(1,"move",this.move.bind(this),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"move",this.move.bind(this),this.abortController.signal)}displayTextControllerState(){return[Ai("Body Aspect"),Qt(`leftControllerState ${Xe.controllers.leftControllerState}`),Qt(`rightControllerState ${Xe.controllers.rightControllerState}`),Qt(`noneControllerState ${Xe.controllers.noneControllerState}`)]}render(t){super.render(t),this.panelLandmarks.render(this.camera),this.panelText.update(this.scene,this.displayTextControllerState()),this.panelText.render(this.camera)}}class gI extends Ui{constructor(t,r){super(t,r);re(this,"panelText");this.guidedExperience=r,this.panelText=new Fo(1),this.panelText.update(this.scene,this.displayText())}render(t){super.render(t),this.panelText.render(this.camera)}displayText(){return[Ai("Body Aspect")]}}class vI extends Ui{constructor(t,r){super(t,r);re(this,"cube");re(this,"panelText");this.guidedExperience=r,this.cube=new on(new ri(.3,.3,.3),new Qr({transparent:!0,map:Al})),this.cube.position.set(0,1,-2),this.scene.add(this.cube),this.panelText=new Fo(1),this.panelText.update(this.scene,this.displayText())}async initialise(){super.initialise()}render(t){super.render(t),this.panelText.render(this.camera),this.cube.rotateX(t),this.cube.rotateY(t),this.cube.rotateZ(t)}displayText(){return[Ai("Body Aspect")]}}const Xi=.003;class EI extends Ui{constructor(t,r){super(t,r);re(this,"subScene");re(this,"subCamera");re(this,"renderTarget");re(this,"crossSectionViewer");re(this,"clip");re(this,"subContainer");re(this,"plane");re(this,"axf");re(this,"verticalOffset");re(this,"halfDepth");re(this,"leftPrevPosition",new ce);re(this,"rightPrevPosition",new ce);this.guidedExperience=r,this.subScene=new ul;const i=3,a=1.5,o=2500;this.renderTarget=new Jr(i*o,a*o);const s=new Dn({map:this.renderTarget.texture}),l=new xi(i,a);this.crossSectionViewer=new on(l,s),this.crossSectionViewer.position.set(2,1,-3),this.scene.add(this.crossSectionViewer);const c=i/a,u=.5;this.clip=this.calculateClip(3),this.subCamera=new il(u*c/-2,u*c/2,u/2,u/-2,this.clip.near,this.clip.far),this.subCamera.position.set(0,3,0),this.subCamera.lookAt(0,0,0),Xe.controllers.addEventListenerWithAbort(1,"move",f=>this.moveCrossSection(f),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"move",f=>this.moveCrossSection(f),this.abortController.signal),this.abortController.signal.addEventListener("abort",()=>{ya.disposeDescendants(this.subScene),this.subScene.clear(),this.renderTarget.dispose()},{once:!0})}moveCrossSection(t){const r=[];if(this.plane){r.push(Qt("there is a plane"));const{handedness:i}=t.target.userData,a=`${i}ControllerState`;if(Xe.controllers[a]==="selected"){r.push(Qt("controller selected"));const o=new ce;t.target.getWorldPosition(o);const s=new ce(0,0,-1);t.target.getWorldDirection(s);const l=new Ns(o,s),c=new Cf(new ce(0,0,1),-(1-this.halfDepth)),u=new ce;l.ray.intersectPlane(c,u)&&(r.push(Qt("intersected")),this.moveClip(u.y+2),r.push(Qt(`Cross-section at Y: ${u.y.toFixed(3)}`)))}}this.extraDebugText=r}addToCrossSection(t){this.axf=t;const r=Ol(t,"meshthick");this.subContainer=new Pn,this.subContainer.add(r),this.subContainer.scale.set(Bn,Bn,Bn),this.subScene.add(this.subContainer),this.halfDepth=t.extent.max.z*Bn;const i=2*t.extent.max.x*Bn,a=this.clip.clipRadius*2,o=2*this.halfDepth;this.plane=new on(new ri(i,a,o),new Dn({color:16711680,depthTest:!0,opacity:.5,transparent:!0})),this.verticalOffset=this.calculateVerticalOffset(),this.plane.translateY(this.verticalOffset),this.plane.translateZ(-1),this.scene.add(this.plane)}calculateClip(t){return{near:t-Xi,middle:t,far:t+Xi,clipRadius:Xi}}calculateVerticalOffset(){return-this.axf.extent.min.y*Bn}convertClipToPlanePosition(t){return this.verticalOffset+3-t.middle}isClipWithinBounds(t){const r=this.axf.extent.max.y*Bn,i=-this.axf.extent.min.y*Bn,a=this.verticalOffset+r+Xi,o=this.verticalOffset-i-Xi;return!(t>=a||t<=o)}moveClip(t){const r=this.calculateClip(t),i=this.convertClipToPlanePosition(r);this.isClipWithinBounds(i)&&(this.plane.position.y=i,this.subCamera.near=r.near,this.subCamera.far=r.far,this.subCamera.updateProjectionMatrix(),this.clip=r)}render(t){super.render(t);const{renderTarget:r,camera:i,subScene:a,subCamera:o,crossSectionViewer:s}=this;s.lookAt(i.position);const l=this.renderer.getRenderTarget(),c=this.renderer.xr.enabled,u=this.renderer.shadowMap.autoUpdate;this.renderer.xr.enabled=!1,this.renderer.shadowMap.autoUpdate=!1,this.renderer.setRenderTarget(r),this.renderer.clear(),this.renderer.render(a,o),this.renderer.xr.enabled=c,this.renderer.shadowMap.autoUpdate=u,this.renderer.setRenderTarget(l)}}const Ts={mesh:new on(kp,new Dn({color:65280}))};class TI extends EI{constructor(t,r){super(t,r);re(this,"game");re(this,"container");re(this,"objsToTest",[]);this.renderer=t,this.guidedExperience=r,this.game=new Pn,this.scene.add(this.game),this.game.add(Ts.mesh),this.abortController.signal.addEventListener("abort",()=>{this.game.clear()},{once:!0})}move(t){const{handedness:r}=t.target.userData,i=`${r}ControllerState`,a=this.raycasterIntersections.getIntersection(t.target,this.objsToTest);Xe.controllers[i]==="selected"&&a&&a.index&&(Ts.position=a.point.toArray(),Ts.mesh.position.copy(a.point))}async initialise(){super.initialise();const t=Vp("processedHighArmpit"),r=await wo(t.path),i=No(r);if(!i.extent||!i.extent.difference)throw new Error("error");const a=Ol(i,"mesh");a.translateY(-i.extent.min.y),this.objsToTest.push(a),this.container=new Pn,this.container.add(a),this.container.scale.set(Bn,Bn,Bn),this.container.translateZ(-1),this.game.add(this.container),this.addToCrossSection(i),Xe.controllers.addEventListenerWithAbort(1,"move",this.move.bind(this),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"move",this.move.bind(this),this.abortController.signal)}render(t){super.render(t)}}function SI(e,n=.1,t=.1){const r=2*n+t,i=[];for(let a=0;a<e;a++){const o=(a-(e-1)/2)*r;i.push(o)}return i}const Qp=.01,RI=new Lo(Qp,10,10);class AI extends Ui{constructor(t,r){super(t,r);re(this,"game");re(this,"nonePushedLeft",!1);re(this,"nonePushedRight",!1);re(this,"leftPushedLeft",!1);re(this,"leftPushedRight",!1);re(this,"rightPushedLeft",!1);re(this,"rightPushedRight",!1);re(this,"box");re(this,"body");re(this,"selectedBody",1);re(this,"upperBodyCount",10);re(this,"leftPrevPosition",new ce);re(this,"rightPrevPosition",new ce);re(this,"navigationBalls",[]);this.game=new Pn,this.scene.add(this.game)}squeezestart(t){if(!t.data)return;const r=this.raycasterIntersections.getIntersectionReturnObject(t.target,[this.box]),i=`${t.data.handedness}ControllerState`;r&&(this.box[i]="squeezed")}squeezeend(t){if(!t.data)return;const r=`${t.data.handedness}ControllerState`;this.box[r]="idle"}move(t){const{handedness:r}=t.target.userData,i=`${r}ControllerState`,a=`${r}PrevPosition`,o=new ce;t.target.getWorldPosition(o);const s=o.clone().sub(this[a]);this[a].copy(o),this.box[i]==="squeezed"&&this.dragging(s)}async initialise(){super.initialise();const t=SI(this.upperBodyCount,Qp,.04);for(let r=0;r<this.upperBodyCount;r++){const i=new Dn({color:r+1===this.selectedBody?"yellow":16777215}),a=new on(RI,i),o={material:i,mesh:a};a.position.set(t[r],1.8,-1),this.scene.add(a),this.navigationBalls.push(o)}await this.loadBody(),Xe.controllers.addEventListenerWithAbort(1,"squeezestart",this.squeezestart.bind(this),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"squeezestart",this.squeezestart.bind(this),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(1,"squeezeend",this.squeezeend.bind(this),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"squeezeend",this.squeezeend.bind(this),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(1,"move",this.move.bind(this),this.abortController.signal),Xe.controllers.addEventListenerWithAbort(2,"move",this.move.bind(this),this.abortController.signal)}async loadBody(){this.clearGame(),this.navigationBalls.forEach((d,p)=>{d.material.color=new fe(p+1===this.selectedBody?"yellow":16777215)});const t=await wo(`/assets/axf/sampleImagesForWorkshop2/${this.selectedBody}.axf`),r=No(t);if(!r.extent||!r.extent.difference)throw new Error("error");this.box=new on(new ri(r.extent.difference.x,r.extent.difference.y,r.extent.difference.z),new Qr({visible:!1})),this.box.name="IGNOREME",this.box.leftControllerState="idle",this.box.rightControllerState="idle",this.box.noneControllerState="idle",this.box.currentState="idle",this.box.translateY(-r.extent.min.y);const i=new Pn,a=qp(r),o=Cl(r),l=Zp(o,{depthTest:!0,opacity:.5,transparent:!0,linewidth:3,clipping:!1},new fe(13195096)),c=Pl(a),u=new on(c,new Qr({color:13986408,side:Et}));u.castShadow=!0,u.receiveShadow=!0,u.add(l),i.add(u),this.body=i,this.body.translateY(-r.extent.min.y);const f=new Pn;f.add(this.box),f.add(this.body),f.scale.set(Bn,Bn,Bn),f.translateZ(-1),this.game.add(f)}clearGame(){this.game.clear(),ya.disposeDescendants(this.game)}dragging(t){this.body.rotateY(t.x*40),this.box.rotateY(t.x*40)}handleThumbstickInput(){const t=this.renderer.xr.getSession();if(t)for(const r of t.inputSources){if(!r.gamepad||!["left","right"].includes(r.handedness))continue;const[i,a,o,s]=r.gamepad.axes,l=`${r.handedness}PushedLeft`,c=`${r.handedness}PushedRight`;o>.5&&!this[c]?(this[c]=!0,this.selectedBody=this.selectedBody===this.upperBodyCount?1:this.selectedBody+1,this.loadBody()):o<-.5&&!this[l]&&(this[l]=!0,this.selectedBody=this.selectedBody===1?this.upperBodyCount:this.selectedBody-1,this.loadBody()),o>-.1&&o<.1&&(this[l]=!1,this[c]=!1)}}render(t){super.render(t),this.handleThumbstickInput()}}const yI={[`${ai.INTRO}`]:gI,[`${ai.BASIC_VISUALISATION}`]:AI,[`${ai.PROCESSING_THE_BODY}`]:_I,[`${ai.CHEST_MEASUREMENTS}`]:TI,[`${ai.ANIMATION}`]:uI,[`${ai.EXIT_PROMPT}`]:vI};class LI{constructor(){re(this,"scene");re(this,"camera");re(this,"cube");const{hemiLight:n}=pr.scene;this.scene=new ul,this.scene.background=new fe("#2A4353"),this.camera=new Lr(60,window.innerWidth/window.innerHeight,.1,10),this.camera.position.z=2;const t=new Jf(n.sky,n.ground);t.position.set(0,20,0),this.scene.add(t),this.cube=new on(new ri(.3,.3,.3),new Qr({transparent:!0,map:Al})),this.cube.position.set(0,1,-2),this.scene.add(this.cube)}render(n,t){n.render(this.scene,this.camera),this.cube.rotateX(t),this.cube.rotateY(t),this.cube.rotateZ(t)}}class ya{constructor(){re(this,"sceneInterface");re(this,"renderer");re(this,"clock",new Zm);re(this,"loadingScene");re(this,"controllers");re(this,"loading",!0);const n=new NT({antialias:!0});n.setPixelRatio(window.devicePixelRatio),n.setSize(window.innerWidth,window.innerHeight),n.localClippingEnabled=!0,n.xr.enabled=!0,document.body.appendChild(n.domElement),document.body.appendChild(Pi.createButton(n)),n.xr.addEventListener("sessionstart",()=>{console.log("session started")}),n.xr.addEventListener("sessionend",function(){console.log("session ended")}),window.addEventListener("resize",this.onWindowResize.bind(this)),this.renderer=n;const t=new jM(n);this.controllers=t}async initialise(){await Promise.all([KL(),ZL(),ox(),QM(),sI()]),this.loadingScene=new LI,this.renderer.setAnimationLoop(this.render.bind(this))}async switchScene(n){n&&(!this.sceneInterface||this.sceneInterface.guidedExperience.id!==n.id)&&(this.loading=!0,this.sceneInterface&&this.sceneInterface.abortController.abort("Closing scene"),this.sceneInterface=new yI[n.id](this.renderer,n),await this.sceneInterface.initialise(),console.log(`Changed to scene ${n.name}`),setTimeout(()=>{this.loading=!1},2e3))}onWindowResize(){this.sceneInterface.onWindowResize()}render(){const n=this.clock.getDelta();Jm(),this.loading?this.loadingScene.render(this.renderer,n):this.sceneInterface.render(n)}static disposeDescendants(n){n.traverse(t=>{t instanceof on&&(t.geometry.dispose(),t.material.dispose())}),n instanceof on&&(n.geometry.dispose(),n.material.dispose())}}const Xe=new ya;export{ya as SceneLoader,Xe as default};
