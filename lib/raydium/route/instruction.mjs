import{TOKEN_PROGRAM_ID as E}from"@solana/spl-token";import{SystemProgram as ce,TransactionInstruction as me}from"@solana/web3.js";import m from"bn.js";import we from"big.js";import at from"bn.js";import{get as v,set as pe}from"lodash";import de from"pino";import le from"pino-pretty";var q={},be={},fe=le({colorize:!0,levelFirst:!0,translateTime:"SYS:yyyymmdd HH:MM:ss.l"}),ge=de({base:null,level:"silent"},fe);function b(n){let e=v(q,n);if(!e){let r=v(be,n);e=ge.child({name:n},{level:r}),pe(q,n,e)}return e.logWithError=(...r)=>{let o=r.map(i=>typeof i=="object"?JSON.stringify(i):i).join(", ");throw new Error(o)},e}import ye from"toformat";var xe=ye,h=xe;import L from"big.js";import he from"decimal.js-light";var w=b("module/fraction"),_=h(L),P=h(he),Pe={[0]:P.ROUND_DOWN,[1]:P.ROUND_HALF_UP,[2]:P.ROUND_UP},ke={[0]:L.roundDown,[1]:L.roundHalfUp,[2]:L.roundUp},u=class{constructor(e,r=V){this.numerator=p(e),this.denominator=p(r)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new u(this.denominator,this.numerator)}add(e){let r=e instanceof u?e:new u(p(e));return this.denominator.eq(r.denominator)?new u(this.numerator.add(r.numerator),this.denominator):new u(this.numerator.mul(r.denominator).add(r.numerator.mul(this.denominator)),this.denominator.mul(r.denominator))}sub(e){let r=e instanceof u?e:new u(p(e));return this.denominator.eq(r.denominator)?new u(this.numerator.sub(r.numerator),this.denominator):new u(this.numerator.mul(r.denominator).sub(r.numerator.mul(this.denominator)),this.denominator.mul(r.denominator))}mul(e){let r=e instanceof u?e:new u(p(e));return new u(this.numerator.mul(r.numerator),this.denominator.mul(r.denominator))}div(e){let r=e instanceof u?e:new u(p(e));return new u(this.numerator.mul(r.denominator),this.denominator.mul(r.numerator))}toSignificant(e,r={groupSeparator:""},o=1){Number.isInteger(e)||w.logWithError(`${e} is not an integer.`),e<=0&&w.logWithError(`${e} is not positive.`),P.set({precision:e+1,rounding:Pe[o]});let i=new P(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(e);return i.toFormat(i.decimalPlaces(),r)}toFixed(e,r={groupSeparator:""},o=1){return Number.isInteger(e)||w.logWithError(`${e} is not an integer.`),e<0&&w.logWithError(`${e} is negative.`),_.DP=e,_.RM=ke[o]||1,new _(this.numerator.toString()).div(this.denominator.toString()).toFormat(e,r)}isZero(){return this.numerator.isZero()}};var gt=b("Raydium_amount"),yt=h(we);import{PublicKey as Be}from"@solana/web3.js";var j={symbol:"SOL",name:"Solana",decimals:9},g={symbol:"WSOL",name:"Wrapped SOL",mint:"So11111111111111111111111111111111111111112",decimals:9,extensions:{coingeckoId:"solana"}},Pt={isQuantumSOL:!0,isLp:!1,official:!0,mint:new Be(g.mint),decimals:9,symbol:"SOL",id:"sol",name:"solana",icon:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",extensions:{coingeckoId:"solana"}};import{PublicKey as D}from"@solana/web3.js";import{TOKEN_PROGRAM_ID as Te}from"@solana/spl-token";import{PublicKey as c,SystemProgram as Ne,SYSVAR_RENT_PUBKEY as We}from"@solana/web3.js";function t({pubkey:n,isSigner:e=!1,isWritable:r=!0}){return{pubkey:n,isWritable:r,isSigner:e}}var Bt=[t({pubkey:Te,isWritable:!1}),t({pubkey:Ne.programId,isWritable:!1}),t({pubkey:We,isWritable:!1})];function Y({publicKey:n,transformSol:e}){if(n instanceof c)return e&&n.equals(k)?B:n;if(e&&n===k.toBase58())return B;if(typeof n=="string")try{return new c(n)}catch{throw new Error("invalid public key")}throw new Error("invalid public key")}var H=new c("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),X=new c("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),Tt=new c("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),G=new c("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),z=new c("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),Z=new c("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),J=new c("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),$=new c("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),Nt=new c("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),Wt=new c("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),Q=new c("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),B=new c("So11111111111111111111111111111111111111112"),k=c.default;var U=class{constructor({mint:e,decimals:r,symbol:o="UNKNOWN",name:i="UNKNOWN",skipMint:d=!1}){if(e===k.toBase58()||e instanceof D&&k.equals(e)){this.decimals=g.decimals,this.symbol=g.symbol,this.name=g.name,this.mint=new D(g.mint);return}this.decimals=r,this.symbol=o,this.name=i,this.mint=d?D.default:Y({publicKey:e})}equals(e){return this===e?!0:this.mint.equals(e.mint)}},S=U;S.WSOL=new U(g);var R=class{constructor({decimals:e,symbol:r="UNKNOWN",name:o="UNKNOWN"}){this.decimals=e,this.symbol=r,this.name=o}equals(e){return this===e}},I=R;I.SOL=new R(j);var qt=new u(K);var zt=b("Raydium_price");var T=b("Raydium_bignumber");var ln=new m(0),V=new m(1),bn=new m(2),fn=new m(3),gn=new m(5),Le=new m(10),K=new m(100),yn=new m(1e3),xn=new m(1e4),ee=9007199254740991;function p(n){if(n instanceof m)return n;if(typeof n=="string"){if(n.match(/^-?[0-9]+$/))return new m(n);T.logWithError(`invalid BigNumberish string: ${n}`)}return typeof n=="number"?(n%1&&T.logWithError(`BigNumberish number underflow: ${n}`),(n>=ee||n<=-ee)&&T.logWithError(`BigNumberish number overflow: ${n}`),new m(String(n))):typeof n=="bigint"?new m(n.toString()):(T.logWithError(`invalid BigNumberish value: ${n}`),new m(0))}import{PublicKey as Me}from"@solana/web3.js";import{PublicKey as yr}from"@solana/web3.js";import ue,{isBN as se}from"bn.js";import{bits as kn,BitStructure as Sn,blob as _e,Blob as wn,cstr as Ln,f32 as Bn,f32be as Tn,f64 as Nn,f64be as Wn,greedy as En,Layout as De,ns64 as _n,ns64be as Dn,nu64 as Un,nu64be as In,offset as Rn,s16 as Mn,s16be as On,s24 as An,s24be as Fn,s32 as Cn,s32be as vn,s40 as qn,s40be as Vn,s48 as jn,s48be as Yn,s8 as Hn,seq as Ue,struct as Xn,Structure as Ie,u16 as Gn,u16be as zn,u24 as Zn,u24be as Jn,u32 as $n,u32be as Qn,u40 as Kn,u40be as er,u48 as tr,u48be as nr,u8 as rr,UInt as Re,union as or,Union as ir,unionLayoutDiscriminator as ur,utf8 as sr}from"@solana/buffer-layout";var te=De,ne=Ie;var re=Re;var oe=Ue;var ie=_e;var M=class extends te{constructor(r,o,i){super(r,i);this.blob=ie(r),this.signed=o}decode(r,o=0){let i=new ue(this.blob.decode(r,o),10,"le");return this.signed?i.fromTwos(this.span*8).clone():i}encode(r,o,i=0){return typeof r=="number"&&(r=new ue(r)),this.signed&&(r=r.toTwos(this.span*8)),this.blob.encode(r.toArrayLike(Buffer,"le",this.span),o,i)}};function A(n){return new re(1,n)}function l(n){return new M(8,!1,n)}var O=class extends ne{decode(e,r){return super.decode(e,r)}};function x(n,e,r){return new O(n,e,r)}function ae(n,e,r){let o,i=typeof e=="number"?e:se(e)?e.toNumber():new Proxy(e,{get(d,f){if(!o){let y=Reflect.get(d,"count");o=se(y)?y.toNumber():y,Reflect.set(d,"count",o)}return Reflect.get(d,f)},set(d,f,y){return f==="count"&&(o=y),Reflect.set(d,f,y)}});return oe(n,i,r)}var F=new Me("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),Oe=5e4,Ae=x([l("x"),l("y"),l("price")]),Br=x([l("accountType"),l("status"),l("multiplier"),l("validDataCount"),ae(Ae,Oe,"DataElement")]);import{PublicKey as Fe}from"@solana/web3.js";var Ce="routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS",C=new Fe(Ce);var Er=[G,H,B,Z,X,J,$,z,Q].map(n=>n.toBase58());var N=x([A("instruction"),l("amountIn"),l("amountOut")]),W=x([A("instruction")]);var ve=b("Raydium_route_instruction");function qr(n){let{fixedSide:e}=n;if(e==="in")return[qe(n),Ve(n)];throw ve.logWithError("invalid params","params",n),new Error(`invalid params, params: ${n}`)}function qe({fromPoolKeys:n,toPoolKeys:e,userKeys:r,amountIn:o,amountOut:i}){let d=Buffer.alloc(N.span),f;return n.version===4?(N.encode({instruction:0,amountIn:p(o),amountOut:p(i)},d),f=[t({pubkey:ce.programId,isWritable:!1}),t({pubkey:E,isWritable:!1}),t({pubkey:n.programId,isWritable:!1}),t({pubkey:n.id}),t({pubkey:e.id,isWritable:!1}),t({pubkey:n.authority,isWritable:!1}),t({pubkey:n.openOrders}),t({pubkey:n.baseVault}),t({pubkey:n.quoteVault}),t({pubkey:n.marketProgramId,isWritable:!1}),t({pubkey:n.marketId}),t({pubkey:n.marketBids}),t({pubkey:n.marketAsks}),t({pubkey:n.marketEventQueue}),t({pubkey:n.marketBaseVault}),t({pubkey:n.marketQuoteVault}),t({pubkey:n.marketAuthority,isWritable:!1}),t({pubkey:r.inTokenAccount}),t({pubkey:r.middleTokenAccount}),t({pubkey:r.middleStatusAccount}),t({pubkey:r.owner,isWritable:!1,isSigner:!0})]):(N.encode({instruction:2,amountIn:p(o),amountOut:p(i)},d),f=[t({pubkey:ce.programId,isWritable:!1}),t({pubkey:E,isWritable:!1}),t({pubkey:n.programId,isWritable:!1}),t({pubkey:n.id}),t({pubkey:e.id,isWritable:!1}),t({pubkey:n.authority,isWritable:!1}),t({pubkey:n.openOrders}),t({pubkey:n.baseVault}),t({pubkey:n.quoteVault}),t({pubkey:F,isWritable:!1}),t({pubkey:n.marketProgramId,isWritable:!1}),t({pubkey:n.marketId}),t({pubkey:n.marketBids}),t({pubkey:n.marketAsks}),t({pubkey:n.marketEventQueue}),t({pubkey:n.id}),t({pubkey:n.id}),t({pubkey:n.id}),t({pubkey:r.inTokenAccount}),t({pubkey:r.middleTokenAccount}),t({pubkey:r.middleStatusAccount}),t({pubkey:r.owner,isWritable:!1,isSigner:!0})]),new me({programId:C,keys:f,data:d})}function Ve({fromPoolKeys:n,toPoolKeys:e,userKeys:r}){let o=Buffer.alloc(W.span),i;return e.version===4?(W.encode({instruction:1},o),i=[t({pubkey:E,isWritable:!1}),t({pubkey:e.programId,isWritable:!1}),t({pubkey:n.id,isWritable:!1}),t({pubkey:e.id}),t({pubkey:e.authority,isWritable:!1}),t({pubkey:e.openOrders}),t({pubkey:e.baseVault}),t({pubkey:e.quoteVault}),t({pubkey:e.marketProgramId,isWritable:!1}),t({pubkey:e.marketId}),t({pubkey:e.marketBids}),t({pubkey:e.marketAsks}),t({pubkey:e.marketEventQueue}),t({pubkey:e.marketBaseVault}),t({pubkey:e.marketQuoteVault}),t({pubkey:e.marketAuthority,isWritable:!1}),t({pubkey:r.middleTokenAccount}),t({pubkey:r.outTokenAccount}),t({pubkey:r.middleStatusAccount}),t({pubkey:r.owner,isWritable:!1,isSigner:!0})]):(W.encode({instruction:3},o),i=[t({pubkey:E,isWritable:!1}),t({pubkey:e.programId,isWritable:!1}),t({pubkey:n.id,isWritable:!1}),t({pubkey:e.id}),t({pubkey:e.authority,isWritable:!1}),t({pubkey:e.openOrders}),t({pubkey:e.baseVault}),t({pubkey:e.quoteVault}),t({pubkey:F,isWritable:!1}),t({pubkey:e.marketProgramId,isWritable:!1}),t({pubkey:e.marketId}),t({pubkey:e.marketBids}),t({pubkey:e.marketAsks}),t({pubkey:e.marketEventQueue}),t({pubkey:e.id}),t({pubkey:e.id}),t({pubkey:e.id}),t({pubkey:r.middleTokenAccount}),t({pubkey:r.outTokenAccount}),t({pubkey:r.middleStatusAccount}),t({pubkey:r.owner,isWritable:!1,isSigner:!0})]),new me({programId:C,keys:i,data:o})}export{qr as makeRouteSwapInstruction,qe as makeSwapInFixedInInstruction,Ve as makeSwapOutFixedInInstruction};
//# sourceMappingURL=instruction.mjs.map