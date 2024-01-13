((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_122",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={Yn:function Yn(d,e,f){this.d=d
this.e=e
this.a=f},a55:function a55(d){this.a=d
this.b=0},aRF:function aRF(){},Rn:function Rn(d){this.b=d},a1v:function a1v(d){this.c=d},
aAr(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.bQd(x)},
bQd:function bQd(d){this.a=d},
dbg(d,e){var x=B.a([],y.v)
B.bQX(d,1,40,"typeNumber")
B.dAW(e,A.aRU,"errorCorrectLevel",null)
return new C.bQa(d,e,d*4+17,x)},
dAM(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.dbi(w,d)
u=new C.a55(B.a([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.tM(0,4,4)
u.tM(0,q.b.length,C.dfk(4,w))
q.oO(0,u)}if(u.b<=s*8)break}return w},
deC(d,e,f){var x,w,v,u,t,s,r,q=C.dbi(d,e),p=new C.a55(B.a([],y.t))
for(x=0;x<f.length;++x){w=f[x]
p.tM(0,4,4)
p.tM(0,w.b.length,C.dfk(4,d))
w.oO(0,p)}for(v=q.length,u=0,x=0;x<v;++x)u+=q[x].b
t=u*8
v=p.b
if(v>t)throw B.t(new C.a1v("Input too long. "+v+" > "+t))
if(v+4<=t)p.tM(0,0,4)
for(;D.c.aa(p.b,8)!==0;)p.aHA(!1)
for(s=0;!0;s=r){if(p.b>=t)break
r=s+1
p.tM(0,(s&1)===0?236:17,8)}return C.dHB(p,q)},
dHB(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.bn(e.length,null,!1,h),f=B.bn(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.dI1(r)
t=o.a.length-1
n=C.aAr(q,t).aGq(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.a([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
dfk(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.t(B.bj("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.t(B.bj("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.t(B.bj("mode:"+d,x))}else throw B.t(B.bj("type:"+e,x))},
dI1(d){var x,w=y.t,v=C.aAr(B.a([1],w),0)
for(x=0;x<d;++x)v=v.f6(0,C.aAr(B.a([1,C.d1p(x)],w),0))
return v},
bQa:function bQa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=g},
dAN(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=y.Q,w=d.c,v=d.a,u=d.b,t=d.e,s=0,r=null,q=0;q<8;++q){p=new C.aAq(w,v,u,q,B.a([],x))
o=d.d
p.auI(q,o==null?d.d=C.deC(v,u,t):o,!0)
n=C.dJ8(p)
if(q===0||s>n){r=p
s=n}}t=r.d
x=new C.aAq(w,v,u,t,B.a([],x))
x.auI(t,d.gbAh(),!1)
return x},
dJd(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.c.aa(f,3)===0
case 3:return D.c.aa(e+f,3)===0
case 4:return(D.c.U(e,2)+D.c.U(f,3)&1)===0
case 5:x=e*f
return D.c.aa(x,2)+D.c.aa(x,3)===0
case 6:x=e*f
return(D.c.aa(x,2)+D.c.aa(x,3)&1)===0
case 7:return(D.c.aa(e*f,3)+D.c.aa(e+f,2)&1)===0
default:throw B.t(B.bj("bad maskPattern:"+d,null))}},
dJ8(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.jv(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.jv(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.jv(w,v)?1:0
if(d.jv(n,v))++m;++v
if(d.jv(w,v))++m
if(d.jv(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.jv(w,v)&&!d.jv(w,v+1)&&d.jv(w,v+2)&&d.jv(w,v+3)&&d.jv(w,v+4)&&!d.jv(w,v+5)&&d.jv(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.jv(w,v)&&!d.jv(w+1,v)&&d.jv(w+2,v)&&d.jv(w+3,v)&&d.jv(w+4,v)&&!d.jv(w+5,v)&&d.jv(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.jv(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
aAq:function aAq(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dbi(d,e){var x,w,v,u,t,s,r=C.dIA(d,e),q=r.length/3|0,p=B.a([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.aAs(u,t))}return p},
dIA(d,e){switch(e){case 1:return A.vt[(d-1)*4]
case 0:return A.vt[(d-1)*4+1]
case 3:return A.vt[(d-1)*4+2]
case 2:return A.vt[(d-1)*4+3]
default:throw B.t(B.bj("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
aAs:function aAs(d,e){this.a=d
this.b=e},
bJP:function bJP(d,e){this.a=d
this.b=e},
a56:function a56(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.x=g
_.cx=h
_.a=i},
aRG:function aRG(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
cw3:function cw3(d){this.a=d},
ad3:function ad3(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a57:function a57(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.r=i
_.w=j
_.x=k
_.z=_.y=$
_.as=l
_.at=m
_.a=n},
cu1:function cu1(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
Kf:function Kf(d,e){this.a=d
this.b=e},
Pa:function Pa(d,e){this.a=d
this.b=e},
bQc:function bQc(d,e){this.a=d
this.b=e},
bQb:function bQb(d,e){this.a=d
this.b=e},
aAp:function aAp(){},
aAo:function aAo(){},
dAO(d,e,f){var x,w,v,u,t,s=B.aQ("qrCode")
try{if(f!==-1){s.sdR(C.dbg(f,e))
v=s.Y()
u=D.bM.dt(d)
v.e.push(new C.Rn(u))
v.d=null}else{v=C.dbg(C.dAM(e,B.a([new C.Rn(D.bM.dt(d))],y.v)),e)
v.e.push(new C.Rn(D.bM.dt(d)))
v.d=null
s.sdR(v)}v=s.Y()
return new C.a58(A.Fk,v,null)}catch(t){v=B.av(t)
if(v instanceof C.a1v){x=v
return new C.a58(A.b6N,null,x)}else if(y.L.b(v)){w=v
return new C.a58(A.b6O,null,w)}else throw t}},
a58:function a58(d,e,f){this.a=d
this.b=e
this.c=f},
a59:function a59(d,e){this.a=d
this.b=e},
dgT(d){if(d<1)throw B.t(B.bj("glog("+d+")",null))
return $.cVu()[d]},
d1p(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.d3l()[d]},
dHC(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.c.mP(1,x)
for(x=8;x<256;++x)w[x]=w[x-4]^w[x-5]^w[x-6]^w[x-8]
return w},
dHD(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.d3l()[x]]=x
return w},
dKA(d){var x,w=d<<10>>>0
for(x=w;C.Mm(x)-C.Mm(1335)>=0;)x=(x^D.c.h7(1335,C.Mm(x)-C.Mm(1335)))>>>0
return((w|x)^21522)>>>0},
dKB(d){var x,w=d<<12>>>0
for(x=w;C.Mm(x)-C.Mm(7973)>=0;)x=(x^D.c.h7(7973,C.Mm(x)-C.Mm(7973)))>>>0
return(w|x)>>>0},
Mm(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},A
B=c[0]
D=c[2]
C=a.updateHolder(c[155],C)
A=c[344]
C.Yn.prototype={
n(d){var x=null,w=B.cY(new B.ax(15,15))
return B.ir(w,B.al(x,new B.Nh(1,new C.a56(this.e,D.u,-1,this.d,D.G,x),x),D.j,D.u,x,x,x,x,x,x,new B.x(10,10,10,10),x,x,x),D.aU)}}
C.a55.prototype={
i(d,e,f){return B.z(B.bd("cannot change"))},
h(d,e){return(D.c.oe(this.a[D.c.U(e,8)],7-D.c.aa(e,8))&1)===1},
gA(d){return this.b},
sA(d,e){B.z(B.bd("Cannot change"))},
tM(d,e,f){var x
for(x=0;x<f;++x)this.aHA((D.c.kC(e,f-x-1)&1)===1)},
aHA(d){var x=this,w=D.c.U(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=v[w]|D.c.pc(128,D.c.aa(x.b,8));++x.b},
$ibv:1,
$iU:1,
$iT:1}
C.aRF.prototype={}
C.Rn.prototype={
gA(d){return this.b.length},
oO(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.tM(0,x[v],8)},
$idbh:1}
C.a1v.prototype={
l(d){return"QrInputTooLongException: "+this.c},
$icR:1}
C.bQd.prototype={
h(d,e){return this.a[e]},
gA(d){return this.a.length},
f6(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.z(B.bj("glog("+t+")",null))
s=$.cVu()
t=s[t]
r=o[w]
if(r<1)B.z(B.bj("glog("+r+")",null))
m[v]=(u^C.d1p(t+s[r]))>>>0}return C.aAr(m,0)},
aGq(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.dgT(u[0])-C.dgT(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.z(B.bj("glog("+t+")",null))
w[v]=(u^C.d1p($.cVu()[t]+x))>>>0}return C.aAr(w,0).aGq(d)}}
C.bQa.prototype={
gbAh(){var x=this,w=x.d
return w==null?x.d=C.deC(x.a,x.b,x.e):w}}
C.aAq.prototype={
bmt(){var x,w,v,u=this.e
D.b.aH(u)
for(x=this.a,w=y.u,v=0;v<x;++v)u.push(B.bn(x,null,!1,w))},
jv(d,e){var x
if(d>=0){x=this.a
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.t(B.bj(""+d+" , "+e,null))
x=this.e[d][e]
x.toString
return x},
auI(d,e,f){var x,w=this
w.bmt()
w.ade(0,0)
x=w.a-7
w.ade(x,0)
w.ade(0,x)
w.bnQ()
w.bnR()
w.bnS(d,f)
if(w.b>=7)w.bnT(f)
w.bhb(e,d)},
ade(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=this.e,w=this.a,v=-1;v<=7;++v){u=d+v
if(u<=-1||w<=u)continue
for(t=0<=v,s=v<=6,r=v!==0,q=v===6,p=2<=v,o=v<=4,n=-1;n<=7;++n){m=e+n
if(m<=-1||w<=m)continue
if(t)if(s)l=n===0||n===6
else l=!1
else l=!1
if(!l){if(0<=n)if(n<=6)l=!r||q
else l=!1
else l=!1
if(!l)l=p&&o&&2<=n&&n<=4
else l=!0}else l=!0
if(l)x[u][m]=!0
else x[u][m]=!1}}},
bnQ(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.aYt[this.b-1]
for(x=j.length,w=this.e,v=0;v<x;++v)for(u=0;u<x;++u){t=j[v]
s=j[u]
if(w[t][s]!=null)continue
for(r=-2;r<=2;++r)for(q=t+r,p=r!==-2,o=r!==2,n=r===0,m=-2;m<=2;++m){if(p)if(o)if(m!==-2)if(m!==2)l=n&&m===0
else l=!0
else l=!0
else l=!0
else l=!0
k=s+m
if(l)w[q][k]=!0
else w[q][k]=!1}}},
bnR(){var x,w,v,u,t
for(x=this.a-8,w=this.e,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
bnS(d,e){var x,w,v,u,t,s,r=C.dKA((this.c<<3|d)>>>0)
for(x=this.e,w=this.a,v=w-15,u=!e,t=0;t<15;++t){s=u&&(D.c.pc(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.c.pc(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
bnT(d){var x,w,v,u,t,s=C.dKB(this.b)
for(x=this.e,w=this.a,v=!d,u=0;u<18;++u){t=v&&(D.c.pc(s,u)&1)===1
x[D.c.U(u,3)][D.c.aa(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.c.pc(s,u)&1)===1
x[D.c.aa(u,3)+w-8-3][D.c.U(u,3)]=t}},
bhb(d,e){var x,w,v,u,t,s,r,q,p,o=this.a,n=o-1
for(x=this.e,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.c.oe(d[t],u)&1)===1
if(C.dJd(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}}}
C.aAs.prototype={}
C.bJP.prototype={
apN(d,e){var x=e!=null?e.R():"any"
return d.l(0)+":"+x},
bvB(d,e,f,g){if(f===A.z0)this.a.push(e)
else this.b.i(0,this.apN(f,g),e)},
aBe(d,e,f){return this.bvB(d,e,f,null)},
a12(d,e){return d===A.z0?D.b.gaf(this.a):this.b.h(0,this.apN(d,e))},
bE4(d){return this.a12(d,null)}}
C.a56.prototype={
a_(){return new C.aRG(D.o)}}
C.aRG.prototype={
n(d){var x=this,w=x.a
w=x.e=C.dAO(w.c,1,w.f)
x.d=w.a===A.Fk?w.b:null
return new B.oM(new C.cw3(x),null)},
blF(d,e){var x,w,v,u=null,t=this.d
t.toString
x=this.a.cx
w=t.a
v=new C.a57(w,t.b,!0,d,u,A.aca,A.ac9,t,new C.bJP(B.a([],y.H),B.p(y.N,y.Z)),x,u)
v.z=w
v.bfw()
return new C.ad3(e,this.a.e,D.he,B.fh(u,u,u,v,D.V),"qr code",u)},
b8E(d,e,f){var x,w=null,v=this.a
v.toString
x=B.al(w,w,D.j,w,w,w,w,w,w,w,w,w,w,w)
return new C.ad3(v.x,v.e,D.he,x,"qr code",w)}}
C.ad3.prototype={
n(d){var x=this,w=null,v=x.c
v=B.al(w,new B.a9(x.e,x.f,w),D.j,x.d,w,w,w,v,w,w,w,w,w,v)
return new B.cM(B.cV(w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),!1,!1,!1,!1,v,w)}}
C.a57.prototype={
bfw(){var x,w,v,u,t,s,r
this.y=C.dAN(this.x)
x=this.as
w=$.aN()
v=w.ar()
v.sb2(0,D.a5)
x.aBe(0,v,A.z0)
v=w.ar()
v.sb2(0,D.a5)
x.aBe(0,v,A.b6K)
for(u=0;u<3;++u){t=A.aYD[u]
v=w.ar()
v.sb2(0,D.a0)
s=x.b
r=t.R()
s.i(0,A.a5c.l(0)+":"+r,v)
v=w.ar()
v.sb2(0,D.a0)
r=t.R()
s.i(0,A.a5d.l(0)+":"+r,v)
v=w.ar()
v.sb2(0,D.a5)
r=t.R()
s.i(0,A.a5e.l(0)+":"+r,v)}},
ai(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a4.gji()===0){B.b05().$1("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a4.gji()
w=a2.x.c
v=new C.cu1(w,x,0)
u=(w-1)*0
t=v.d=D.f.a4Y((x-u)/w*2)/2
s=t*w+u
v.e=s
s=v.f=(x-s)/2
a2.aa5(A.CI,a3,v)
a2.aa5(A.CJ,a3,v)
a2.aa5(A.LP,a3,v)
r=a2.as.bE4(A.z0)
r.sT(0,a2.at)
for(x=w-7,q=t+0,p=0;p<w;++p)for(o=p<7,n=p>=x,m=s+p*q,l=0;l<w;++l){k=l<7
j=k&&o
i=k&&n
h=l>=x&&o
if(j||i||h)continue
k=a2.y
k===$&&B.b()
g=k.jv(l,p)?r:null
if(g==null)continue
f=s+l*q
k=a2.bf2(p,l,w)
e=k?0.5:0
k=a2.bf3(p,l,w)
d=k?0.5:0
a3.dh(new B.a1(m,f,m+(t+e),f+(t+d)),g)}x=a2.e
if(x!=null){w=x.gcm(x)
t=x.gb3(x)
a0=a2.bmY(a4,new B.ao(w,t),null)
w=a0.a
t=(a4.a-w)/2
s=a0.b
q=(a4.b-s)/2
g=$.aN().ar()
g.sf5(!0)
g.spF(D.LO)
k=x.gcm(x)
a1=x.gb3(x)
a3.Cy(x,D.v.HZ(new B.ao(k,a1),new B.a1(0,0,k,a1)),D.v.HZ(a0,new B.a1(t,q,t+w,q+s)),g)}},
bf3(d,e,f){var x,w=e+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.jv(w,d)},
bf2(d,e,f){var x,w=d+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.jv(e,w)},
aa5(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=f.d
j===$&&B.b()
x=7*j+6*f.c-j
w=j/2
v=f.f
v===$&&B.b()
u=f.e
u===$&&B.b()
t=v+u-(x+w)
if(d===A.CI){v+=w
s=new B.F(v,v)}else{v+=w
s=d===A.CJ?new B.F(v,t):new B.F(t,v)}v=this.as
r=v.a12(A.a5c,d)
r.sc_(j)
u=this.at
r.sT(0,u)
q=v.a12(A.a5d,d)
q.sc_(j)
q.sT(0,D.B6)
p=v.a12(A.a5e,d)
p.sT(0,u)
v=s.a
u=s.b
o=x-2*j
n=v+j
m=u+j
l=x-j*2-2*w
j=n+w
k=m+w
e.dh(new B.a1(v,u,v+x,u+x),r)
e.dh(new B.a1(n,m,n+o,m+o),q)
e.dh(new B.a1(j,k,j+l,k+l),p)},
bmY(d,e,f){var x=0.25*d.gji()/e.gaG9()
return new B.ao(x*e.a,x*e.b)},
fi(d){var x,w,v=this
if(d instanceof C.a57){if(v.c===d.c){x=v.z
x===$&&B.b()
w=d.z
w===$&&B.b()
x=x!==w||v.x!==d.x||v.e!=d.e||!v.r.m(0,d.r)||!v.w.m(0,d.w)}else x=!0
return x}return!0}}
C.cu1.prototype={}
C.Kf.prototype={
R(){return"QrCodeElement."+this.b}}
C.Pa.prototype={
R(){return"FinderPatternPosition."+this.b}}
C.bQc.prototype={
R(){return"QrEyeShape."+this.b}}
C.bQb.prototype={
R(){return"QrDataModuleShape."+this.b}}
C.aAp.prototype={
gG(d){return(B.iM(A.b6M)^D.c.gG(4278190080))>>>0},
m(d,e){var x
if(e==null)return!1
if(e instanceof C.aAp){x=D.G.m(0,D.G)
return x}return!1}}
C.aAo.prototype={
gG(d){return(B.iM(A.b6L)^D.c.gG(4278190080))>>>0},
m(d,e){var x
if(e==null)return!1
if(e instanceof C.aAo){x=D.G.m(0,D.G)
return x}return!1}}
C.a58.prototype={}
C.a59.prototype={
R(){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.cw3.prototype={
$2(d,e){var x,w=this.a,v=w.e
v===$&&B.b()
if(v.a!==A.Fk)return w.b8E(d,e,v.c)
x=w.a.x
w=w.blF(null,x)
return w},
$S:463};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.A,[C.Yn,C.ad3])
w(B.aj,[C.aRF,C.Rn,C.a1v,C.bQd,C.bQa,C.aAq,C.aAs,C.bJP,C.cu1,C.aAp,C.aAo,C.a58])
v(C.a55,C.aRF)
v(C.a56,B.a8)
v(C.aRG,B.ab)
v(C.cw3,B.bX)
v(C.a57,B.rN)
w(B.im,[C.Kf,C.Pa,C.bQc,C.bQb,C.a59])
x(C.aRF,B.b3)})()
B.b8(b.typeUniverse,JSON.parse('{"Yn":{"A":[],"l":[]},"a55":{"b3":["K"],"T":["K"],"bv":["K"],"U":["K"],"b3.E":"K","U.E":"K"},"Rn":{"dbh":[]},"a1v":{"cR":[]},"a56":{"a8":[],"l":[]},"aRG":{"ab":["a56"]},"ad3":{"A":[],"l":[]},"a57":{"b7":[]}}'))
var y=(function rtii(){var x=B.y
return{L:x("cR"),S:x("I<T<C>>"),Q:x("I<T<K?>>"),H:x("I<td>"),v:x("I<dbh>"),J:x("I<aAs>"),t:x("I<C>"),Z:x("td"),N:x("n"),T:x("T<C>?"),u:x("K?")}})();(function constants(){var x=a.makeConstList
A.b6L=new C.bQb(0,"square")
A.ac9=new C.aAo()
A.b6M=new C.bQc(0,"square")
A.aca=new C.aAp()
A.CI=new C.Pa(0,"topLeft")
A.LP=new C.Pa(1,"topRight")
A.CJ=new C.Pa(2,"bottomLeft")
A.aRU=B.a(x([1,0,3,2]),y.t)
A.aRZ=B.a(x([1,26,19]),y.t)
A.aRY=B.a(x([1,26,16]),y.t)
A.aRX=B.a(x([1,26,13]),y.t)
A.aS_=B.a(x([1,26,9]),y.t)
A.aS3=B.a(x([1,44,34]),y.t)
A.aS2=B.a(x([1,44,28]),y.t)
A.aS1=B.a(x([1,44,22]),y.t)
A.aS0=B.a(x([1,44,16]),y.t)
A.aS5=B.a(x([1,70,55]),y.t)
A.aS4=B.a(x([1,70,44]),y.t)
A.aSe=B.a(x([2,35,17]),y.t)
A.aSd=B.a(x([2,35,13]),y.t)
A.aRV=B.a(x([1,100,80]),y.t)
A.aSg=B.a(x([2,50,32]),y.t)
A.aSf=B.a(x([2,50,24]),y.t)
A.aUX=B.a(x([4,25,9]),y.t)
A.aRW=B.a(x([1,134,108]),y.t)
A.aSh=B.a(x([2,67,43]),y.t)
A.aTw=B.a(x([2,33,15,2,34,16]),y.t)
A.aTH=B.a(x([2,33,11,2,34,12]),y.t)
A.aSi=B.a(x([2,86,68]),y.t)
A.aV_=B.a(x([4,43,27]),y.t)
A.aUZ=B.a(x([4,43,19]),y.t)
A.aUY=B.a(x([4,43,15]),y.t)
A.aSj=B.a(x([2,98,78]),y.t)
A.aV0=B.a(x([4,49,31]),y.t)
A.aTS=B.a(x([2,32,14,4,33,15]),y.t)
A.aU2=B.a(x([4,39,13,1,40,14]),y.t)
A.aSb=B.a(x([2,121,97]),y.t)
A.aUd=B.a(x([2,60,38,2,61,39]),y.t)
A.aUo=B.a(x([4,40,18,2,41,19]),y.t)
A.aUz=B.a(x([4,40,14,2,41,15]),y.t)
A.aSc=B.a(x([2,146,116]),y.t)
A.aUK=B.a(x([3,58,36,2,59,37]),y.t)
A.aSN=B.a(x([4,36,16,4,37,17]),y.t)
A.aSY=B.a(x([4,36,12,4,37,13]),y.t)
A.aT8=B.a(x([2,86,68,2,87,69]),y.t)
A.aTj=B.a(x([4,69,43,1,70,44]),y.t)
A.aTq=B.a(x([6,43,19,2,44,20]),y.t)
A.aTr=B.a(x([6,43,15,2,44,16]),y.t)
A.aUV=B.a(x([4,101,81]),y.t)
A.aTs=B.a(x([1,80,50,4,81,51]),y.t)
A.aTt=B.a(x([4,50,22,4,51,23]),y.t)
A.aTu=B.a(x([3,36,12,8,37,13]),y.t)
A.aTv=B.a(x([2,116,92,2,117,93]),y.t)
A.aTx=B.a(x([6,58,36,2,59,37]),y.t)
A.aTy=B.a(x([4,46,20,6,47,21]),y.t)
A.aTz=B.a(x([7,42,14,4,43,15]),y.t)
A.aUW=B.a(x([4,133,107]),y.t)
A.aTA=B.a(x([8,59,37,1,60,38]),y.t)
A.aTB=B.a(x([8,44,20,4,45,21]),y.t)
A.aTC=B.a(x([12,33,11,4,34,12]),y.t)
A.aTD=B.a(x([3,145,115,1,146,116]),y.t)
A.aTE=B.a(x([4,64,40,5,65,41]),y.t)
A.aTF=B.a(x([11,36,16,5,37,17]),y.t)
A.aTG=B.a(x([11,36,12,5,37,13]),y.t)
A.aTI=B.a(x([5,109,87,1,110,88]),y.t)
A.aTJ=B.a(x([5,65,41,5,66,42]),y.t)
A.aTK=B.a(x([5,54,24,7,55,25]),y.t)
A.aRM=B.a(x([11,36,12]),y.t)
A.aTL=B.a(x([5,122,98,1,123,99]),y.t)
A.aTM=B.a(x([7,73,45,3,74,46]),y.t)
A.aTN=B.a(x([15,43,19,2,44,20]),y.t)
A.aTO=B.a(x([3,45,15,13,46,16]),y.t)
A.aTP=B.a(x([1,135,107,5,136,108]),y.t)
A.aTQ=B.a(x([10,74,46,1,75,47]),y.t)
A.aTR=B.a(x([1,50,22,15,51,23]),y.t)
A.aTT=B.a(x([2,42,14,17,43,15]),y.t)
A.aTU=B.a(x([5,150,120,1,151,121]),y.t)
A.aTV=B.a(x([9,69,43,4,70,44]),y.t)
A.aTW=B.a(x([17,50,22,1,51,23]),y.t)
A.aTX=B.a(x([2,42,14,19,43,15]),y.t)
A.aTY=B.a(x([3,141,113,4,142,114]),y.t)
A.aTZ=B.a(x([3,70,44,11,71,45]),y.t)
A.aU_=B.a(x([17,47,21,4,48,22]),y.t)
A.aU0=B.a(x([9,39,13,16,40,14]),y.t)
A.aU1=B.a(x([3,135,107,5,136,108]),y.t)
A.aU3=B.a(x([3,67,41,13,68,42]),y.t)
A.aU4=B.a(x([15,54,24,5,55,25]),y.t)
A.aU5=B.a(x([15,43,15,10,44,16]),y.t)
A.aU6=B.a(x([4,144,116,4,145,117]),y.t)
A.aRQ=B.a(x([17,68,42]),y.t)
A.aU7=B.a(x([17,50,22,6,51,23]),y.t)
A.aU8=B.a(x([19,46,16,6,47,17]),y.t)
A.aU9=B.a(x([2,139,111,7,140,112]),y.t)
A.aRR=B.a(x([17,74,46]),y.t)
A.aUa=B.a(x([7,54,24,16,55,25]),y.t)
A.aSm=B.a(x([34,37,13]),y.t)
A.aUb=B.a(x([4,151,121,5,152,122]),y.t)
A.aUc=B.a(x([4,75,47,14,76,48]),y.t)
A.aUe=B.a(x([11,54,24,14,55,25]),y.t)
A.aUf=B.a(x([16,45,15,14,46,16]),y.t)
A.aUg=B.a(x([6,147,117,4,148,118]),y.t)
A.aUh=B.a(x([6,73,45,14,74,46]),y.t)
A.aUi=B.a(x([11,54,24,16,55,25]),y.t)
A.aUj=B.a(x([30,46,16,2,47,17]),y.t)
A.aUk=B.a(x([8,132,106,4,133,107]),y.t)
A.aUl=B.a(x([8,75,47,13,76,48]),y.t)
A.aUm=B.a(x([7,54,24,22,55,25]),y.t)
A.aUn=B.a(x([22,45,15,13,46,16]),y.t)
A.aUp=B.a(x([10,142,114,2,143,115]),y.t)
A.aUq=B.a(x([19,74,46,4,75,47]),y.t)
A.aUr=B.a(x([28,50,22,6,51,23]),y.t)
A.aUs=B.a(x([33,46,16,4,47,17]),y.t)
A.aUt=B.a(x([8,152,122,4,153,123]),y.t)
A.aUu=B.a(x([22,73,45,3,74,46]),y.t)
A.aUv=B.a(x([8,53,23,26,54,24]),y.t)
A.aUw=B.a(x([12,45,15,28,46,16]),y.t)
A.aUx=B.a(x([3,147,117,10,148,118]),y.t)
A.aUy=B.a(x([3,73,45,23,74,46]),y.t)
A.aUA=B.a(x([4,54,24,31,55,25]),y.t)
A.aUB=B.a(x([11,45,15,31,46,16]),y.t)
A.aUC=B.a(x([7,146,116,7,147,117]),y.t)
A.aUD=B.a(x([21,73,45,7,74,46]),y.t)
A.aUE=B.a(x([1,53,23,37,54,24]),y.t)
A.aUF=B.a(x([19,45,15,26,46,16]),y.t)
A.aUG=B.a(x([5,145,115,10,146,116]),y.t)
A.aUH=B.a(x([19,75,47,10,76,48]),y.t)
A.aUI=B.a(x([15,54,24,25,55,25]),y.t)
A.aUJ=B.a(x([23,45,15,25,46,16]),y.t)
A.aUL=B.a(x([13,145,115,3,146,116]),y.t)
A.aUM=B.a(x([2,74,46,29,75,47]),y.t)
A.aUN=B.a(x([42,54,24,1,55,25]),y.t)
A.aUO=B.a(x([23,45,15,28,46,16]),y.t)
A.aRP=B.a(x([17,145,115]),y.t)
A.aUP=B.a(x([10,74,46,23,75,47]),y.t)
A.aUQ=B.a(x([10,54,24,35,55,25]),y.t)
A.aUR=B.a(x([19,45,15,35,46,16]),y.t)
A.aUS=B.a(x([17,145,115,1,146,116]),y.t)
A.aUT=B.a(x([14,74,46,21,75,47]),y.t)
A.aUU=B.a(x([29,54,24,19,55,25]),y.t)
A.aSO=B.a(x([11,45,15,46,46,16]),y.t)
A.aSP=B.a(x([13,145,115,6,146,116]),y.t)
A.aSQ=B.a(x([14,74,46,23,75,47]),y.t)
A.aSR=B.a(x([44,54,24,7,55,25]),y.t)
A.aSS=B.a(x([59,46,16,1,47,17]),y.t)
A.aST=B.a(x([12,151,121,7,152,122]),y.t)
A.aSU=B.a(x([12,75,47,26,76,48]),y.t)
A.aSV=B.a(x([39,54,24,14,55,25]),y.t)
A.aSW=B.a(x([22,45,15,41,46,16]),y.t)
A.aSX=B.a(x([6,151,121,14,152,122]),y.t)
A.aSZ=B.a(x([6,75,47,34,76,48]),y.t)
A.aT_=B.a(x([46,54,24,10,55,25]),y.t)
A.aT0=B.a(x([2,45,15,64,46,16]),y.t)
A.aT1=B.a(x([17,152,122,4,153,123]),y.t)
A.aT2=B.a(x([29,74,46,14,75,47]),y.t)
A.aT3=B.a(x([49,54,24,10,55,25]),y.t)
A.aT4=B.a(x([24,45,15,46,46,16]),y.t)
A.aT5=B.a(x([4,152,122,18,153,123]),y.t)
A.aT6=B.a(x([13,74,46,32,75,47]),y.t)
A.aT7=B.a(x([48,54,24,14,55,25]),y.t)
A.aT9=B.a(x([42,45,15,32,46,16]),y.t)
A.aTa=B.a(x([20,147,117,4,148,118]),y.t)
A.aTb=B.a(x([40,75,47,7,76,48]),y.t)
A.aTc=B.a(x([43,54,24,22,55,25]),y.t)
A.aTd=B.a(x([10,45,15,67,46,16]),y.t)
A.aTe=B.a(x([19,148,118,6,149,119]),y.t)
A.aTf=B.a(x([18,75,47,31,76,48]),y.t)
A.aTg=B.a(x([34,54,24,34,55,25]),y.t)
A.aTh=B.a(x([20,45,15,61,46,16]),y.t)
A.vt=B.a(x([A.aRZ,A.aRY,A.aRX,A.aS_,A.aS3,A.aS2,A.aS1,A.aS0,A.aS5,A.aS4,A.aSe,A.aSd,A.aRV,A.aSg,A.aSf,A.aUX,A.aRW,A.aSh,A.aTw,A.aTH,A.aSi,A.aV_,A.aUZ,A.aUY,A.aSj,A.aV0,A.aTS,A.aU2,A.aSb,A.aUd,A.aUo,A.aUz,A.aSc,A.aUK,A.aSN,A.aSY,A.aT8,A.aTj,A.aTq,A.aTr,A.aUV,A.aTs,A.aTt,A.aTu,A.aTv,A.aTx,A.aTy,A.aTz,A.aUW,A.aTA,A.aTB,A.aTC,A.aTD,A.aTE,A.aTF,A.aTG,A.aTI,A.aTJ,A.aTK,A.aRM,A.aTL,A.aTM,A.aTN,A.aTO,A.aTP,A.aTQ,A.aTR,A.aTT,A.aTU,A.aTV,A.aTW,A.aTX,A.aTY,A.aTZ,A.aU_,A.aU0,A.aU1,A.aU3,A.aU4,A.aU5,A.aU6,A.aRQ,A.aU7,A.aU8,A.aU9,A.aRR,A.aUa,A.aSm,A.aUb,A.aUc,A.aUe,A.aUf,A.aUg,A.aUh,A.aUi,A.aUj,A.aUk,A.aUl,A.aUm,A.aUn,A.aUp,A.aUq,A.aUr,A.aUs,A.aUt,A.aUu,A.aUv,A.aUw,A.aUx,A.aUy,A.aUA,A.aUB,A.aUC,A.aUD,A.aUE,A.aUF,A.aUG,A.aUH,A.aUI,A.aUJ,A.aUL,A.aUM,A.aUN,A.aUO,A.aRP,A.aUP,A.aUQ,A.aUR,A.aUS,A.aUT,A.aUU,A.aSO,A.aSP,A.aSQ,A.aSR,A.aSS,A.aST,A.aSU,A.aSV,A.aSW,A.aSX,A.aSZ,A.aT_,A.aT0,A.aT1,A.aT2,A.aT3,A.aT4,A.aT5,A.aT6,A.aT7,A.aT9,A.aTa,A.aTb,A.aTc,A.aTd,A.aTe,A.aTf,A.aTg,A.aTh]),y.S)
A.aVi=B.a(x([6,18]),y.t)
A.aVj=B.a(x([6,22]),y.t)
A.aVm=B.a(x([6,26]),y.t)
A.aVs=B.a(x([6,30]),y.t)
A.aVy=B.a(x([6,34]),y.t)
A.aVk=B.a(x([6,22,38]),y.t)
A.aVl=B.a(x([6,24,42]),y.t)
A.aVn=B.a(x([6,26,46]),y.t)
A.aVr=B.a(x([6,28,50]),y.t)
A.aVt=B.a(x([6,30,54]),y.t)
A.aVx=B.a(x([6,32,58]),y.t)
A.aVz=B.a(x([6,34,62]),y.t)
A.aVo=B.a(x([6,26,46,66]),y.t)
A.aVp=B.a(x([6,26,48,70]),y.t)
A.aVq=B.a(x([6,26,50,74]),y.t)
A.aVu=B.a(x([6,30,54,78]),y.t)
A.aVv=B.a(x([6,30,56,82]),y.t)
A.aVw=B.a(x([6,30,58,86]),y.t)
A.aVA=B.a(x([6,34,62,90]),y.t)
A.aVY=B.a(x([6,28,50,72,94]),y.t)
A.aVZ=B.a(x([6,26,50,74,98]),y.t)
A.aW_=B.a(x([6,30,54,78,102]),y.t)
A.aW0=B.a(x([6,28,54,80,106]),y.t)
A.aW1=B.a(x([6,32,58,84,110]),y.t)
A.aW2=B.a(x([6,30,58,86,114]),y.t)
A.aW3=B.a(x([6,34,62,90,118]),y.t)
A.aTi=B.a(x([6,26,50,74,98,122]),y.t)
A.aTk=B.a(x([6,30,54,78,102,126]),y.t)
A.aTl=B.a(x([6,26,52,78,104,130]),y.t)
A.aTm=B.a(x([6,30,56,82,108,134]),y.t)
A.aTn=B.a(x([6,34,60,86,112,138]),y.t)
A.aTo=B.a(x([6,30,58,86,114,142]),y.t)
A.aTp=B.a(x([6,34,62,90,118,146]),y.t)
A.aWB=B.a(x([6,30,54,78,102,126,150]),y.t)
A.aWC=B.a(x([6,24,50,76,102,128,154]),y.t)
A.aWD=B.a(x([6,28,54,80,106,132,158]),y.t)
A.aWE=B.a(x([6,32,58,84,110,136,162]),y.t)
A.aWF=B.a(x([6,26,54,82,110,138,166]),y.t)
A.aWG=B.a(x([6,30,58,86,114,142,170]),y.t)
A.aYt=B.a(x([D.kD,A.aVi,A.aVj,A.aVm,A.aVs,A.aVy,A.aVk,A.aVl,A.aVn,A.aVr,A.aVt,A.aVx,A.aVz,A.aVo,A.aVp,A.aVq,A.aVu,A.aVv,A.aVw,A.aVA,A.aVY,A.aVZ,A.aW_,A.aW0,A.aW1,A.aW2,A.aW3,A.aTi,A.aTk,A.aTl,A.aTm,A.aTn,A.aTo,A.aTp,A.aWB,A.aWC,A.aWD,A.aWE,A.aWF,A.aWG]),y.S)
A.aYD=B.a(x([A.CI,A.LP,A.CJ]),B.y("I<Pa>"))
A.a5c=new C.Kf(0,"finderPatternOuter")
A.a5d=new C.Kf(1,"finderPatternInner")
A.a5e=new C.Kf(2,"finderPatternDot")
A.z0=new C.Kf(3,"codePixel")
A.b6K=new C.Kf(4,"codePixelEmpty")
A.Fk=new C.a59(0,"valid")
A.b6N=new C.a59(1,"contentTooLong")
A.b6O=new C.a59(2,"error")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e15","cVu",()=>C.dHD())
x($,"e0v","d3l",()=>C.dHC())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_122",e:"endPart",h:b})})($__dart_deferred_initializers__,"pAawELZ2YkzamELywIO51omsjmI=");