javascript:(function(d,u,w,p,s,h,c,n,a,a2,a3,a3f,ce,x,o,g,_g,com,pm){
	p=/^https:\/\/(mobile\.)?twitter\.com\/.+$/g;
	if(!p.test(u)){
		alert("Twitterを表示してから実行してください");
		return;
	}
	n="__bl__";
	a=d.getElementById(n);
	if(a){
		alert("すでに実行しています");
		return;
	}

LZWEncoder=function(){var E={};var p=-1;var I;var g;var m;var n;var e;var f;var o=12;var C=5003;var B;var q=o;var v;var H=1<<o;var u=[];var s=[];var z=C;var G=0;var x=false;var j;var b;var A;var J=0;var F=0;var t=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535];var d;var l=[];var w=E.LZWEncoder=function w(N,L,O,M){I=N;g=L;m=O;n=Math.max(2,M)};var y=function y(M,L){l[d++]=M;if(d>=254){a(L)}};var k=function k(L){D(z);G=b+2;x=true;r(b,L)};var D=function D(L){for(var M=0;M<L;++M){u[M]=-1}};var K=E.compress=function K(S,M){var O;var P;var R;var Q;var T;var N;var L;j=S;x=false;B=j;v=c(B);b=1<<(S-1);A=b+1;G=b+2;d=0;Q=i();L=0;for(O=z;O<65536;O*=2){++L}L=8-L;N=z;D(N);r(b,M);outer_loop:while((R=i())!=p){O=(R<<q)+Q;P=(R<<L)^Q;if(u[P]==O){Q=s[P];continue}else{if(u[P]>=0){T=N-P;if(P===0){T=1}do{if((P-=T)<0){P+=N}if(u[P]==O){Q=s[P];continue outer_loop}}while(u[P]>=0)}}r(Q,M);Q=R;if(G<H){s[P]=G++;u[P]=O}else{k(M)}}r(Q,M);r(A,M)};var h=E.encode=function h(L){L.writeByte(n);e=I*g;f=0;K(n+1,L);L.writeByte(0)};var a=function a(L){if(d>0){L.writeByte(d);L.writeBytes(l,0,d);d=0}};var c=function c(L){return(1<<L)-1};var i=function i(){if(e===0){return p}--e;var L=m[f++];return L&255};var r=function r(L,M){J&=t[F];if(F>0){J|=(L<<F)}else{J=L}F+=B;while(F>=8){y((J&255),M);J>>=8;F-=8}if(G>v||x){if(x){v=c(B=j);x=false}else{++B;if(B==q){v=H}else{v=c(B)}}}if(L==A){while(F>0){y((J&255),M);J>>=8;F-=8}a(M)}};w.apply(this,arguments);return E};
NeuQuant=function(){var P={};var M=256;var E=499;var C=491;var B=487;var A=503;var o=(3*A);var I=(M-1);var z=4;var e=100;var O=16;var v=(1<<O);var b=10;var p=(1<<b);var y=10;var H=(v>>y);var q=(v<<(b-y));var U=(M>>3);var i=6;var h=(1<<i);var T=(U*h);var g=30;var t=10;var m=(1<<t);var s;var G=8;var d=(1<<G);var Q=(t+G);var K=(1<<Q);var u;var N;var a;var l;var n=[];var f=[];var w=[];var J=[];var j=P.NeuQuant=function j(W,V,Y){var X;var Z;u=W;N=V;a=Y;l=new Array(M);for(X=0;X<M;X++){l[X]=new Array(4);Z=l[X];Z[0]=Z[1]=Z[2]=(X<<(z+8))/M;w[X]=v/M;f[X]=0}};var r=function r(){var aa=[];var Y=new Array(M);for(var Z=0;Z<M;Z++){Y[l[Z][3]]=Z}var W=0;for(var V=0;V<M;V++){var X=Y[V];aa[W++]=(l[X][0]);aa[W++]=(l[X][1]);aa[W++]=(l[X][2])}return aa};var c=function c(){var W;var V;var ab;var Z;var aa;var Y;var ac;var X;ac=0;X=0;for(W=0;W<M;W++){aa=l[W];ab=W;Z=aa[1];for(V=W+1;V<M;V++){Y=l[V];if(Y[1]<Z){ab=V;Z=Y[1]}}Y=l[ab];if(W!=ab){V=Y[0];Y[0]=aa[0];aa[0]=V;V=Y[1];Y[1]=aa[1];aa[1]=V;V=Y[2];Y[2]=aa[2];aa[2]=V;V=Y[3];Y[3]=aa[3];aa[3]=V}if(Z!=ac){n[ac]=(X+W)>>1;for(V=ac+1;V<Z;V++){n[V]=W}ac=Z;X=W}}n[ac]=(X+I)>>1;for(V=ac+1;V<256;V++){n[V]=I}};var k=function k(){var ac;var ab;var ah;var ad;var V;var ae;var ag;var Z;var Y;var ai;var aa;var W;var af;var X;if(N<o){a=1}s=30+((a-1)/3);W=u;af=0;X=N;aa=N/(3*a);ai=(aa/e)|0;Z=m;ae=T;ag=ae>>i;if(ag<=1){ag=0}for(ac=0;ac<ag;ac++){J[ac]=Z*(((ag*ag-ac*ac)*d)/(ag*ag))}if(N<o){Y=3}else{if((N%E)!==0){Y=3*E}else{if((N%C)!==0){Y=3*C}else{if((N%B)!==0){Y=3*B}else{Y=3*A}}}}ac=0;while(ac<aa){ah=(W[af+0]&255)<<z;ad=(W[af+1]&255)<<z;V=(W[af+2]&255)<<z;ab=D(ah,ad,V);R(Z,ab,ah,ad,V);if(ag!==0){L(ag,ab,ah,ad,V)}af+=Y;if(af>=X){af-=N}ac++;if(ai===0){ai=1}if(ac%ai===0){Z-=Z/s;ae-=ae/g;ag=ae>>i;if(ag<=1){ag=0}for(ab=0;ab<ag;ab++){J[ab]=Z*(((ag*ag-ab*ab)*d)/(ag*ag))}}}};var x=P.map=function x(ad,ab,V){var Z;var Y;var ac;var ae;var aa;var W;var X;aa=1000;X=-1;Z=n[ab];Y=Z-1;while((Z<M)||(Y>=0)){if(Z<M){W=l[Z];ac=W[1]-ab;if(ac>=aa){Z=M}else{Z++;if(ac<0){ac=-ac}ae=W[0]-ad;if(ae<0){ae=-ae}ac+=ae;if(ac<aa){ae=W[2]-V;if(ae<0){ae=-ae}ac+=ae;if(ac<aa){aa=ac;X=W[3]}}}}if(Y>=0){W=l[Y];ac=ab-W[1];if(ac>=aa){Y=-1}else{Y--;if(ac<0){ac=-ac}ae=W[0]-ad;if(ae<0){ae=-ae}ac+=ae;if(ac<aa){ae=W[2]-V;if(ae<0){ae=-ae}ac+=ae;if(ac<aa){aa=ac;X=W[3]}}}}}return(X)};var S=P.process=function S(){k();F();c();return r()};var F=function F(){var W;var V;for(W=0;W<M;W++){l[W][0]>>=z;l[W][1]>>=z;l[W][2]>>=z;l[W][3]=W}};var L=function L(af,ab,ag,ac,V){var aa;var Z;var ae;var Y;var ah;var X;var W;ae=ab-af;if(ae<-1){ae=-1}Y=ab+af;if(Y>M){Y=M}aa=ab+1;Z=ab-1;X=1;while((aa<Y)||(Z>ae)){ah=J[X++];if(aa<Y){W=l[aa++];try{W[0]-=(ah*(W[0]-ag))/K;W[1]-=(ah*(W[1]-ac))/K;W[2]-=(ah*(W[2]-V))/K}catch(ad){}}if(Z>ae){W=l[Z--];try{W[0]-=(ah*(W[0]-ag))/K;W[1]-=(ah*(W[1]-ac))/K;W[2]-=(ah*(W[2]-V))/K}catch(ad){}}}};var R=function R(Z,W,V,Y,X){var aa=l[W];aa[0]-=(Z*(aa[0]-V))/m;aa[1]-=(Z*(aa[1]-Y))/m;aa[2]-=(Z*(aa[2]-X))/m};var D=function D(af,ac,W){var aa;var ae;var ag;var ah;var Y;var ab;var ad;var Z;var V;var X;Z=~(1<<31);V=Z;ab=-1;ad=ab;for(aa=0;aa<M;aa++){X=l[aa];ae=X[0]-af;if(ae<0){ae=-ae}ag=X[1]-ac;if(ag<0){ag=-ag}ae+=ag;ag=X[2]-W;if(ag<0){ag=-ag}ae+=ag;if(ae<Z){Z=ae;ab=aa}ah=ae-((f[aa])>>(O-z));if(ah<V){V=ah;ad=aa}Y=(w[aa]>>y);w[aa]-=Y;f[aa]+=(Y<<b)}w[ab]+=H;f[ab]-=q;return(ad)};j.apply(this,arguments);return P};
GIFEncoder=function(){for(var V=0,w={};V<256;V++){w[V]=String.fromCharCode(V)}function U(){this.bin=[]}U.prototype.getData=function(){for(var ac="",ab=this.bin.length,ad=0;ad<ab;ad++){ac+=w[this.bin[ad]]}return ac};U.prototype.writeByte=function(i){this.bin.push(i)};U.prototype.writeUTFBytes=function(ac){for(var ab=ac.length,ad=0;ad<ab;ad++){this.writeByte(ac.charCodeAt(ad))}};U.prototype.writeBytes=function(af,ae,ad){for(var ab=ad||af.length,ac=ae||0;ac<ab;ac++){this.writeByte(af[ac])}};var T={};var a;var d;var Q=null;var o;var F=-1;var I=0;var aa=false;var L;var h;var j;var z;var t;var P;var f=[];var R=7;var B=-1;var G=false;var N=true;var M=false;var p=10;var H="Generated by jsgif (https://github.com/antimatter15/jsgif/)";var D=T.setDelay=function D(i){I=Math.round(i/10)};var x=T.setDispose=function x(i){if(i>=0){B=i}};var r=T.setRepeat=function r(i){if(i>=0){F=i}};var b=T.setTransparent=function b(i){Q=i};var C=T.setComment=function C(i){H=i};var m=T.addFrame=function m(ab,i){if((ab===null)||!aa||L===null){throw new Error("Please call start method before calling addFrame")}var ac=true;try{if(!i){h=ab.getImageData(0,0,ab.canvas.width,ab.canvas.height).data;if(!M){K(ab.canvas.width,ab.canvas.height)}}else{if(ab instanceof ImageData){h=ab.data;if(!sizeset||a!=ab.width||d!=ab.height){K(ab.width,ab.height)}else{}}else{if(ab instanceof Uint8ClampedArray){if(ab.length==(a*d*4)){h=ab}else{console.log("Please set the correct size: ImageData length mismatch");ac=false}}else{console.log("Please provide correct input");ac=false}}}l();e();if(N){X();S();if(F>=0){E()}}v();if(H!==""){y()}Y();if(!N){S()}u();N=false}catch(ad){ac=false}return ac};var k=T.download=function k(i){if(L===null||G==false){console.log("Please call start method and add frames and call finish method before calling download")}else{i=i!==undefined?(i.endsWith(".gif")?i:i+".gif"):"download.gif";var ab=document.createElement("a");ab.download=i;ab.href=URL.createObjectURL(new Blob([new Uint8Array(L.bin)],{type:"image/gif"}));ab.click()}};var q=T.finish=function q(){if(!aa){return false}var i=true;aa=false;try{L.writeByte(59);G=true}catch(ab){i=false}return i};var O=function O(){o=0;h=null;j=null;z=null;P=null;G=false;N=true};var n=T.setFrameRate=function n(i){if(i!=15){I=Math.round(100/i)}};var g=T.setQuality=function g(i){if(i<1){i=1}p=i};var K=T.setSize=function K(i,ab){if(aa&&!N){return}a=i;d=ab;if(a<1){a=320}if(d<1){d=240}M=true};var A=T.start=function A(){O();var i=true;G=false;L=new U();try{L.writeUTFBytes("GIF89a")}catch(ab){i=false}return aa=i};var J=T.cont=function J(){O();var i=true;G=false;L=new U();return aa=i};var e=function e(){var ab=j.length;var i=ab/3;z=[];var af=new NeuQuant(j,ab,p);P=af.process();var ac=0;for(var ae=0;ae<i;ae++){var ad=af.map(j[ac++]&255,j[ac++]&255,j[ac++]&255);f[ad]=true;z[ae]=ad}j=null;t=8;R=7;if(Q!==null){o=s(Q)}};var s=function s(ak){if(P===null){return -1}var ab=(ak&16711680)>>16;var ag=(ak&65280)>>8;var am=(ak&255);var ae=0;var ad=256*256*256;var ai=P.length;for(var af=0;af<ai;){var ac=ab-(P[af++]&255);var al=ag-(P[af++]&255);var an=am-(P[af]&255);var aj=ac*ac+al*al+an*an;var ah=af/3;if(f[ah]&&(aj<ad)){ad=aj;ae=ah}af++}return ae};var l=function l(){var ac=a;var af=d;j=[];var ah=h;var ag=0;for(var ae=0;ae<af;ae++){for(var ad=0;ad<ac;ad++){var ab=(ae*ac*4)+ad*4;j[ag++]=ah[ab];j[ag++]=ah[ab+1];j[ag++]=ah[ab+2]}}};var v=function v(){L.writeByte(33);L.writeByte(249);L.writeByte(4);var i;var ab;if(Q===null){i=0;ab=0}else{i=1;ab=2}if(B>=0){ab=B&7}ab<<=2;L.writeByte(0|ab|0|i);Z(I);L.writeByte(o);L.writeByte(0)};var y=function y(){L.writeByte(33);L.writeByte(254);L.writeByte(H.length);L.writeUTFBytes(H);L.writeByte(0)};var Y=function Y(){L.writeByte(44);Z(0);Z(0);Z(a);Z(d);if(N){L.writeByte(0)}else{L.writeByte(128|0|0|0|R)}};var X=function X(){Z(a);Z(d);L.writeByte((128|112|0|R));L.writeByte(0);L.writeByte(0)};var E=function E(){L.writeByte(33);L.writeByte(255);L.writeByte(11);L.writeUTFBytes("NETSCAPE2.0");L.writeByte(3);L.writeByte(1);Z(F);L.writeByte(0)};var S=function S(){L.writeBytes(P);var ac=(3*256)-P.length;for(var ab=0;ab<ac;ab++){L.writeByte(0)}};var Z=function Z(i){L.writeByte(i&255);L.writeByte((i>>8)&255)};var u=function u(){var i=new LZWEncoder(a,d,z,t);i.encode(L)};var W=T.stream=function W(){return L};var c=T.setProperties=function c(i,ab){aa=i;N=ab};return T};

	a=d.createElement('div');
	a.setAttribute('id',n);
	a2=d.createElement('div');
	a2.innerHTML="ツイートの詳細ページを開くと動画・GIFのURLを表示します";
	a.appendChild(a2);
	o=a.style;
	o.position = "fixed";
	o.bottom = "0";
	o.left = "0";
	o.width = "100vw";
	o.height = "8em";
	o.border="1px solid #aaa";
	o.backgroundColor="#fff";
	d.body.style.paddingBottom="4em";
	d.body.appendChild(a);
	a3=d.createElement('a');
	a3.href="#";
	a3.innerHTML="×";
	o=a3.style;
	o.display = "block";
	o.position = "fixed";
	o.fontSize="1.5em";
	o.bottom = "5.4em";
	o.left = "0";
	o.width = "2em";
	o.height = "2em";
	o.border="1px solid #aaa";
	o.backgroundColor="#1da1f2";
	o.textAlign="center";
	o.lineHeight="2em";
	o.borderRadius="0 1em 1em 0";
	o.color="#fff";
	o.textDecoration="none";
	o.fontWeight="bold";
	d.body.style.paddingBottom="4em";
	d.body.appendChild(a3);
	a3f=0;
	a3.onclick=function(){
		a3f=!a3f;
		if(a3f){
			a3.innerHTML="＞";
			a.style.display="none";
		}else{
			a3.innerHTML="×";
			a.style.display="block";
		}
		return false;
	};
	h=function(c,o){
		o=XMLHttpRequest.prototype.open;
		XMLHttpRequest.prototype.open=function(){
			this.addEventListener('load',function(){
				c(this);
			});
			o.apply(this, arguments);
		};
	};
	com=function(id,id2,sd,sd2,i){
		sd=id.data;
		sd2=id2.data;
		for(i=0;i<sd.length;i+=4){
			if(sd[i]!=sd2[i]||sd[i+1]!=sd2[i+1]||sd[i+2]!=sd2[i+2]||sd[i+3]!=sd2[i+3]){
				return 0;
			}
		}
		return 1;
	};
	_g=function(src,pr,li,n,fps=60,ff,vi,se,du,ca,ct,ca2,ct2,it,cu,en,r,sw,sh,de,cde,sid,sid2) {
		ff=false;
		vi=d.createElement("video");
		vi.addEventListener('seeked', async function() {
			if(se) se();
		});
		vi.src=src;
		vi.load();
		return {cancel:()=>{
				if(ff){
					return;
				}
				ff=true;
			},
			promise:new Promise(async (res) => {
				while((vi.duration === Infinity || isNaN(vi.duration)) && vi.readyState < 2) {
					await new Promise(r => setTimeout(r, 1000));
					vi.currentTime = 10000000*Math.random();
				}
				du=vi.duration;
				ca=d.createElement('canvas');
				ct=ca.getContext('2d');
				ca2=d.createElement('canvas');
				ct2=0;
				sw=vi.videoWidth;
				sh=vi.videoHeight;
				ca.width=sw;
				ca.height=sh;
				ca2.width=sw;
				ca2.height=sh;
				it=1/fps;
				de=it*1000;
				cde=de;
				cu=0;
				en = new GIFEncoder();
				en.setRepeat(0);
				en.setDelay(de);
				en.start();
				while(cu<du) {
					vi.currentTime = cu;
					await new Promise(r => se=r);
					ct.drawImage(vi,0,0,sw,sh);
					sid=ct.getImageData(0,0,sw,sh);
					if(!ct2){
						ct2=ca2.getContext('2d');
					}else{
						sid2=ct2.getImageData(0,0,sw,sh);
					}
					if(!sid2||!com(sid,sid2)){
						en.setDelay(cde);
						en.addFrame(ct);
						cde=de;
					}else{
						cde+=de;
						sid=0;
					}
					ct2.drawImage(vi,0,0,sw,sh);
					cu+=it;
					pr.innerHTML=((vi.currentTime/du)*100).toFixed(2)+' %';
					if(ff) return;
				}
				if(!sid){
					en.setDelay(cde);
					en.addFrame(ct);
				}
				en.finish();
				r=w.URL.createObjectURL(new Blob([(new Uint8Array(en.stream().bin)).buffer], {type: 'image/gif'}));
				pr.innerHTML="100 %";
				li.innerHTML="ダウンロード";
				li.onclick=function(){w.open(r);return false;};
				li.href=r;
				li.download=n;
				ff=true;
				res(r);
			}),
		};
	};
	g=function(src,pr,li,n){
		if(pm) pm.cancel();
		if(src) pm=_g(src,pr,li,n);
	};
	ce=function(v3,ft,b,k,k2,n,bu,li,pr){
		if(v3.type=="video"||v3.type=="animated_gif"){
			v3.video_info.variants.forEach(function(v4){
				if((v4.content_type=="video/mp4")&&(!b||b.bitrate<v4.bitrate)){
					b = v4;
				}
			});
			k="<div style=\"width:100vw;text-overflow:ellipsis;white-space:nowrap;\">";
			k2="<div style=\"width:100vw;text-overflow:ellipsis;white-space:nowrap;margin-bottom:1em;\">";
			n=b.url.match(".+/(.+?)([\?#;].*)?$")[1];
			a2.innerHTML=k+ft+"</div>"+k2+"mp4:<a download=\""+n+"\" target=\"_blank\" href=\""+b.url+"\">"+b.url+"</a></div>";
			if(v3.type=="animated_gif"){
				if(x){x.abort();x=0;}
				g();
				x=new XMLHttpRequest();
				x.open('GET', b.url, true);
				x.responseType='arraybuffer';
				x.onload=function(e) {
					bu=w.URL.createObjectURL(new Blob([this.response],{type:"video/mp4"}));
					pr=d.createElement('span');
					li=d.createElement('a');
					o=li.style;
					o.display="inlone-block";
					o.padding="0.8em";
					o.backgroundColor="#1da1f2";
					o.borderRadius="1.3em";
					o.color="#fff";
					o.textDecoration="none";
					li.innerHTML="gif変換";
					li.href="#";
					pr.innerHTML="";
					var sb=0;
					li.onclick=function(){
						if(sb) return false;
						li.innerHTML="gif変換中...";
						sb=1;
						g(bu,pr,li,n);
						return false;
					};
					a2.appendChild(li);
					a2.appendChild(pr);
					x=0;
				};
				x.send();
			}
		}
	};
	c=function(r,j,l,i,v,v2,t){
		p=/^https:\/\/(mobile\.)?twitter\.com\/i\/api\/2\/timeline\/conversation\/\d+\.json\?.+$/g;
		if(p.test(r.responseURL)){
			j=JSON.parse(r.response);
			console.log(j);
			v=j.globalObjects.tweets;
			i=r.responseURL.match(/conversation\/(\d+)\.json/);
			i=i[1];
			t = v[i];
			if(t.extended_entities){
				t.extended_entities.media.forEach(function(v3){
					ce(v3,t.full_text);
				});
			}
		}else{
			p=/^https:\/\/(mobile\.)?twitter\.com\/i\/api\/graphql\/.+\/TweetDetail\?.+$/g;
			if(p.test(r.responseURL)){
				j=JSON.parse(r.response);
				j.data.threaded_conversation_with_injections.instructions.forEach(function(v){
					if(v.type=="TimelineAddEntries"){
						l=v.entries.reverse();
						for(i=0;i<l.length;i++){
							v2=l[i];
							if(v2.entryId.indexOf("tweet-")===0){
								t = v2.content.itemContent.tweet_results.result.legacy;
								if(t.extended_entities){
									t.extended_entities.media.forEach(function(v3){
										ce(v3,t.full_text);
									});
								}
								break;
							}
						}
					}
				});
			}
		}
	};
	h(c);
	
})(document,location.href,window,2)

