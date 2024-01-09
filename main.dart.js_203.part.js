((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_203",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,D,C={Yb:function Yb(d,e,f){this.d=d
this.e=e
this.a=f},a4J:function a4J(d){this.a=d
this.b=0},aQK:function aQK(){},Ro:function Ro(d){this.b=d},a1g:function a1g(d){this.c=d},
azP(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.bP3(x)},
bP3:function bP3(d){this.a=d},
d95(d,e){var x=B.a([],y.v)
B.bPM(d,1,40,"typeNumber")
B.dyw(e,A.aQR,"errorCorrectLevel",null)
return new C.bP0(d,e,d*4+17,x)},
dyn(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.d97(w,d)
u=new C.a4J(B.a([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.tt(0,4,4)
u.tt(0,q.b.length,C.dd3(4,w))
q.oE(0,u)}if(u.b<=s*8)break}return w},
dcr(d,e,f){var x,w,v,u,t,s,r,q=C.d97(d,e),p=new C.a4J(B.a([],y.t))
for(x=0;x<f.length;++x){w=f[x]
p.tt(0,4,4)
p.tt(0,w.b.length,C.dd3(4,d))
w.oE(0,p)}for(v=q.length,u=0,x=0;x<v;++x)u+=q[x].b
t=u*8
v=p.b
if(v>t)throw B.t(new C.a1g("Input too long. "+v+" > "+t))
if(v+4<=t)p.tt(0,0,4)
for(;D.c.ac(p.b,8)!==0;)p.aFa(!1)
for(s=0;!0;s=r){if(p.b>=t)break
r=s+1
p.tt(0,(s&1)===0?236:17,8)}return C.dEX(p,q)},
dEX(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.bn(e.length,null,!1,h),f=B.bn(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.dFn(r)
t=o.a.length-1
n=C.azP(q,t).aE2(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.a([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
dd3(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.t(B.bk("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.t(B.bk("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.t(B.bk("mode:"+d,x))}else throw B.t(B.bk("type:"+e,x))},
dFn(d){var x,w=y.t,v=C.azP(B.a([1],w),0)
for(x=0;x<d;++x)v=v.fT(0,C.azP(B.a([1,C.d_t(x)],w),0))
return v},
bP0:function bP0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=null
_.e=g},
dyo(d){var x,w,v,u,t,s,r,q,p,o,n
for(x=y.Q,w=d.c,v=d.a,u=d.b,t=d.e,s=0,r=null,q=0;q<8;++q){p=new C.azO(w,v,u,q,B.a([],x))
o=d.d
p.asv(q,o==null?d.d=C.dcr(v,u,t):o,!0)
n=C.dGq(p)
if(q===0||s>n){r=p
s=n}}t=r.d
x=new C.azO(w,v,u,t,B.a([],x))
x.asv(t,d.gbxz(),!1)
return x},
dGv(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.c.ac(f,3)===0
case 3:return D.c.ac(e+f,3)===0
case 4:return(D.c.V(e,2)+D.c.V(f,3)&1)===0
case 5:x=e*f
return D.c.ac(x,2)+D.c.ac(x,3)===0
case 6:x=e*f
return(D.c.ac(x,2)+D.c.ac(x,3)&1)===0
case 7:return(D.c.ac(e*f,3)+D.c.ac(e+f,2)&1)===0
default:throw B.t(B.bk("bad maskPattern:"+d,null))}},
dGq(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.a
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.js(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.js(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.js(w,v)?1:0
if(d.js(n,v))++m;++v
if(d.js(w,v))++m
if(d.js(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.js(w,v)&&!d.js(w,v+1)&&d.js(w,v+2)&&d.js(w,v+3)&&d.js(w,v+4)&&!d.js(w,v+5)&&d.js(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.js(w,v)&&!d.js(w+1,v)&&d.js(w+2,v)&&d.js(w+3,v)&&d.js(w+4,v)&&!d.js(w+5,v)&&d.js(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.js(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
azO:function azO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
d97(d,e){var x,w,v,u,t,s,r=C.dFR(d,e),q=r.length/3|0,p=B.a([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.azQ(u,t))}return p},
dFR(d,e){switch(e){case 1:return A.uJ[(d-1)*4]
case 0:return A.uJ[(d-1)*4+1]
case 3:return A.uJ[(d-1)*4+2]
case 2:return A.uJ[(d-1)*4+3]
default:throw B.t(B.bk("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
azQ:function azQ(d,e){this.a=d
this.b=e},
bIT:function bIT(d,e){this.a=d
this.b=e},
a4K:function a4K(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.f=f
_.x=g
_.cx=h
_.a=i},
aQL:function aQL(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
cum:function cum(d){this.a=d},
acK:function acK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a4L:function a4L(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
csl:function csl(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
K2:function K2(d,e){this.a=d
this.b=e},
Pf:function Pf(d,e){this.a=d
this.b=e},
bP2:function bP2(d,e){this.a=d
this.b=e},
bP1:function bP1(d,e){this.a=d
this.b=e},
azN:function azN(){},
azM:function azM(){},
dyp(d,e,f){var x,w,v,u,t,s=B.aS("qrCode")
try{if(f!==-1){s.sdL(C.d95(f,e))
v=s.Z()
u=D.bO.dw(d)
v.e.push(new C.Ro(u))
v.d=null}else{v=C.d95(C.dyn(e,B.a([new C.Ro(D.bO.dw(d))],y.v)),e)
v.e.push(new C.Ro(D.bO.dw(d)))
v.d=null
s.sdL(v)}v=s.Z()
return new C.a4M(A.Eh,v,null)}catch(t){v=B.aw(t)
if(v instanceof C.a1g){x=v
return new C.a4M(A.b5R,null,x)}else if(y.L.b(v)){w=v
return new C.a4M(A.b5S,null,w)}else throw t}},
a4M:function a4M(d,e,f){this.a=d
this.b=e
this.c=f},
a4N:function a4N(d,e){this.a=d
this.b=e},
det(d){if(d<1)throw B.t(B.bk("glog("+d+")",null))
return $.cTI()[d]},
d_t(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.d1k()[d]},
dEY(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.c.nh(1,x)
for(x=8;x<256;++x)w[x]=w[x-4]^w[x-5]^w[x-6]^w[x-8]
return w},
dEZ(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.d1k()[x]]=x
return w},
dHR(d){var x,w=d<<10>>>0
for(x=w;C.Mf(x)-C.Mf(1335)>=0;)x=(x^D.c.h7(1335,C.Mf(x)-C.Mf(1335)))>>>0
return((w|x)^21522)>>>0},
dHS(d){var x,w=d<<12>>>0
for(x=w;C.Mf(x)-C.Mf(7973)>=0;)x=(x^D.c.h7(7973,C.Mf(x)-C.Mf(7973)))>>>0
return(w|x)>>>0},
Mf(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},A
B=c[0]
D=c[2]
C=a.updateHolder(c[159],C)
A=c[506]
C.Yb.prototype={
n(d){var x=null,w=B.cY(new B.ax(15,15))
return B.io(w,B.ak(x,new B.Nc(1,new C.a4K(this.e,D.u,-1,this.d,D.F,x),x),D.j,D.u,x,x,x,x,x,x,new B.y(10,10,10,10),x,x,x),D.aP)}}
C.a4J.prototype={
i(d,e,f){return B.z(B.bj("cannot change"))},
h(d,e){return(D.c.o4(this.a[D.c.V(e,8)],7-D.c.ac(e,8))&1)===1},
gA(d){return this.b},
sA(d,e){B.z(B.bj("Cannot change"))},
tt(d,e,f){var x
for(x=0;x<f;++x)this.aFa((D.c.kD(e,f-x-1)&1)===1)},
aFa(d){var x=this,w=D.c.V(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=v[w]|D.c.oZ(128,D.c.ac(x.b,8));++x.b},
$ibu:1,
$iU:1,
$iR:1}
C.aQK.prototype={}
C.Ro.prototype={
gA(d){return this.b.length},
oE(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.tt(0,x[v],8)},
$id96:1}
C.a1g.prototype={
l(d){return"QrInputTooLongException: "+this.c},
$icK:1}
C.bP3.prototype={
h(d,e){return this.a[e]},
gA(d){return this.a.length},
fT(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.z(B.bk("glog("+t+")",null))
s=$.cTI()
t=s[t]
r=o[w]
if(r<1)B.z(B.bk("glog("+r+")",null))
m[v]=(u^C.d_t(t+s[r]))>>>0}return C.azP(m,0)},
aE2(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.det(u[0])-C.det(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.z(B.bk("glog("+t+")",null))
w[v]=(u^C.d_t($.cTI()[t]+x))>>>0}return C.azP(w,0).aE2(d)}}
C.bP0.prototype={
gbxz(){var x=this,w=x.d
return w==null?x.d=C.dcr(x.a,x.b,x.e):w}}
C.azO.prototype={
bjF(){var x,w,v,u=this.e
D.b.aI(u)
for(x=this.a,w=y.u,v=0;v<x;++v)u.push(B.bn(x,null,!1,w))},
js(d,e){var x
if(d>=0){x=this.a
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.t(B.bk(""+d+" , "+e,null))
x=this.e[d][e]
x.toString
return x},
asv(d,e,f){var x,w=this
w.bjF()
w.abr(0,0)
x=w.a-7
w.abr(x,0)
w.abr(0,x)
w.bl1()
w.bl2()
w.bl3(d,f)
if(w.b>=7)w.bl4(f)
w.bey(e,d)},
abr(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
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
bl1(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.aXA[this.b-1]
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
bl2(){var x,w,v,u,t
for(x=this.a-8,w=this.e,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
bl3(d,e){var x,w,v,u,t,s,r=C.dHR((this.c<<3|d)>>>0)
for(x=this.e,w=this.a,v=w-15,u=!e,t=0;t<15;++t){s=u&&(D.c.oZ(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.c.oZ(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
bl4(d){var x,w,v,u,t,s=C.dHS(this.b)
for(x=this.e,w=this.a,v=!d,u=0;u<18;++u){t=v&&(D.c.oZ(s,u)&1)===1
x[D.c.V(u,3)][D.c.ac(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.c.oZ(s,u)&1)===1
x[D.c.ac(u,3)+w-8-3][D.c.V(u,3)]=t}},
bey(d,e){var x,w,v,u,t,s,r,q,p,o=this.a,n=o-1
for(x=this.e,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.c.o4(d[t],u)&1)===1
if(C.dGv(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}}}
C.azQ.prototype={}
C.bIT.prototype={
anN(d,e){var x=e!=null?e.T():"any"
return d.l(0)+":"+x},
bsP(d,e,f,g){if(f===A.yf)this.a.push(e)
else this.b.i(0,this.anN(f,g),e)},
az0(d,e,f){return this.bsP(d,e,f,null)},
a0_(d,e){return d===A.yf?D.b.gaj(this.a):this.b.h(0,this.anN(d,e))},
bBk(d){return this.a0_(d,null)}}
C.a4K.prototype={
a0(){return new C.aQL(D.o)}}
C.aQL.prototype={
n(d){var x=this,w=x.a
w=x.e=C.dyp(w.c,1,w.f)
x.d=w.a===A.Eh?w.b:null
return new B.oF(new C.cum(x),null)},
biS(d,e){var x,w,v,u=null,t=this.d
t.toString
x=this.a.cx
w=t.a
v=new C.a4L(w,t.b,!0,d,u,A.ab_,A.aaZ,t,new C.bIT(B.a([],y.H),B.p(y.N,y.Z)),x,u)
v.z=w
v.bcX()
return new C.acK(e,this.a.e,D.h0,B.fs(u,u,u,v,D.V),"qr code",u)},
b63(d,e,f){var x,w=null,v=this.a
v.toString
x=B.ak(w,w,D.j,w,w,w,w,w,w,w,w,w,w,w)
return new C.acK(v.x,v.e,D.h0,x,"qr code",w)}}
C.acK.prototype={
n(d){var x=this,w=null,v=x.c
v=B.ak(w,new B.a7(x.e,x.f,w),D.j,x.d,w,w,w,v,w,w,w,w,w,v)
return new B.cM(B.cW(w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),!1,!1,!1,!1,v,w)}}
C.a4L.prototype={
bcX(){var x,w,v,u,t,s,r
this.y=C.dyo(this.x)
x=this.as
w=$.aM()
v=w.av()
v.sbf(0,D.a7)
x.az0(0,v,A.yf)
v=w.av()
v.sbf(0,D.a7)
x.az0(0,v,A.b5O)
for(u=0;u<3;++u){t=A.aXK[u]
v=w.av()
v.sbf(0,D.ab)
s=x.b
r=t.T()
s.i(0,A.a42.l(0)+":"+r,v)
v=w.av()
v.sbf(0,D.ab)
r=t.T()
s.i(0,A.a43.l(0)+":"+r,v)
v=w.av()
v.sbf(0,D.a7)
r=t.T()
s.i(0,A.a44.l(0)+":"+r,v)}},
ak(a3,a4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this
if(a4.gji()===0){B.b_7().$1("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a4.gji()
w=a2.x.c
v=new C.csl(w,x,0)
u=(w-1)*0
t=v.d=D.f.I7((x-u)/w*2)/2
s=t*w+u
v.e=s
s=v.f=(x-s)/2
a2.a8E(A.BO,a3,v)
a2.a8E(A.BP,a3,v)
a2.a8E(A.KG,a3,v)
r=a2.as.bBk(A.yf)
r.sS(0,a2.at)
for(x=w-7,q=t+0,p=0;p<w;++p)for(o=p<7,n=p>=x,m=s+p*q,l=0;l<w;++l){k=l<7
j=k&&o
i=k&&n
h=l>=x&&o
if(j||i||h)continue
k=a2.y
k===$&&B.b()
g=k.js(l,p)?r:null
if(g==null)continue
f=s+l*q
k=a2.bct(p,l,w)
e=k?0.5:0
k=a2.bcu(p,l,w)
d=k?0.5:0
a3.dR(new B.a9(m,f,m+(t+e),f+(t+d)),g)}x=a2.e
if(x!=null){w=x.gcJ(x)
t=x.gb2(x)
a0=a2.bk9(a4,new B.ao(w,t),null)
w=a0.a
t=(a4.a-w)/2
s=a0.b
q=(a4.b-s)/2
g=$.aM().av()
g.sf4(!0)
g.soo(D.nA)
k=x.gcJ(x)
a1=x.gb2(x)
a3.BW(x,D.v.Hc(new B.ao(k,a1),new B.a9(0,0,k,a1)),D.v.Hc(a0,new B.a9(t,q,t+w,q+s)),g)}},
bcu(d,e,f){var x,w=e+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.js(w,d)},
bct(d,e,f){var x,w=d+1
if(w>=f)return!1
x=this.y
x===$&&B.b()
return x.js(e,w)},
a8E(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=f.d
j===$&&B.b()
x=7*j+6*f.c-j
w=j/2
v=f.f
v===$&&B.b()
u=f.e
u===$&&B.b()
t=v+u-(x+w)
if(d===A.BO){v+=w
s=new B.F(v,v)}else{v+=w
s=d===A.BP?new B.F(v,t):new B.F(t,v)}v=this.as
r=v.a0_(A.a42,d)
r.sc0(j)
u=this.at
r.sS(0,u)
q=v.a0_(A.a43,d)
q.sc0(j)
q.sS(0,D.Ai)
p=v.a0_(A.a44,d)
p.sS(0,u)
v=s.a
u=s.b
o=x-2*j
n=v+j
m=u+j
l=x-j*2-2*w
j=n+w
k=m+w
e.dR(new B.a9(v,u,v+x,u+x),r)
e.dR(new B.a9(n,m,n+o,m+o),q)
e.dR(new B.a9(j,k,j+l,k+l),p)},
bk9(d,e,f){var x=0.25*d.gji()/e.gaDO()
return new B.ao(x*e.a,x*e.b)},
fl(d){var x,w,v=this
if(d instanceof C.a4L){if(v.c===d.c){x=v.z
x===$&&B.b()
w=d.z
w===$&&B.b()
x=x!==w||v.x!==d.x||v.e!=d.e||!v.r.m(0,d.r)||!v.w.m(0,d.w)}else x=!0
return x}return!0}}
C.csl.prototype={}
C.K2.prototype={
T(){return"QrCodeElement."+this.b}}
C.Pf.prototype={
T(){return"FinderPatternPosition."+this.b}}
C.bP2.prototype={
T(){return"QrEyeShape."+this.b}}
C.bP1.prototype={
T(){return"QrDataModuleShape."+this.b}}
C.azN.prototype={
gG(d){return(B.jf(A.b5Q)^D.c.gG(4278190080))>>>0},
m(d,e){var x
if(e==null)return!1
if(e instanceof C.azN){x=D.F.m(0,D.F)
return x}return!1}}
C.azM.prototype={
gG(d){return(B.jf(A.b5P)^D.c.gG(4278190080))>>>0},
m(d,e){var x
if(e==null)return!1
if(e instanceof C.azM){x=D.F.m(0,D.F)
return x}return!1}}
C.a4M.prototype={}
C.a4N.prototype={
T(){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.cum.prototype={
$2(d,e){var x,w=this.a,v=w.e
v===$&&B.b()
if(v.a!==A.Eh)return w.b63(d,e,v.c)
x=w.a.x
w=w.biS(null,x)
return w},
$S:393};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.A,[C.Yb,C.acK])
w(B.af,[C.aQK,C.Ro,C.a1g,C.bP3,C.bP0,C.azO,C.azQ,C.bIT,C.csl,C.azN,C.azM,C.a4M])
v(C.a4J,C.aQK)
v(C.a4K,B.a1)
v(C.aQL,B.aa)
v(C.cum,B.bJ)
v(C.a4L,B.nJ)
w(B.eX,[C.K2,C.Pf,C.bP2,C.bP1,C.a4N])
x(C.aQK,B.b6)})()
B.aQ(b.typeUniverse,JSON.parse('{"Yb":{"A":[],"l":[]},"a4J":{"b6":["I"],"R":["I"],"bu":["I"],"U":["I"],"b6.E":"I","U.E":"I"},"Ro":{"d96":[]},"a1g":{"cK":[]},"a4K":{"a1":[],"l":[]},"aQL":{"aa":["a4K"]},"acK":{"A":[],"l":[]},"a4L":{"bc":[]}}'))
var y=(function rtii(){var x=B.u
return{L:x("cK"),S:x("G<R<C>>"),Q:x("G<R<I?>>"),H:x("G<td>"),v:x("G<d96>"),J:x("G<azQ>"),t:x("G<C>"),Z:x("td"),N:x("n"),T:x("R<C>?"),u:x("I?")}})();(function constants(){var x=a.makeConstList
A.b5P=new C.bP1(0,"square")
A.aaZ=new C.azM()
A.b5Q=new C.bP2(0,"square")
A.ab_=new C.azN()
A.BO=new C.Pf(0,"topLeft")
A.KG=new C.Pf(1,"topRight")
A.BP=new C.Pf(2,"bottomLeft")
A.aQR=B.a(x([1,0,3,2]),y.t)
A.aQW=B.a(x([1,26,19]),y.t)
A.aQV=B.a(x([1,26,16]),y.t)
A.aQU=B.a(x([1,26,13]),y.t)
A.aQX=B.a(x([1,26,9]),y.t)
A.aR0=B.a(x([1,44,34]),y.t)
A.aR_=B.a(x([1,44,28]),y.t)
A.aQZ=B.a(x([1,44,22]),y.t)
A.aQY=B.a(x([1,44,16]),y.t)
A.aR2=B.a(x([1,70,55]),y.t)
A.aR1=B.a(x([1,70,44]),y.t)
A.aRc=B.a(x([2,35,17]),y.t)
A.aRb=B.a(x([2,35,13]),y.t)
A.aQS=B.a(x([1,100,80]),y.t)
A.aRe=B.a(x([2,50,32]),y.t)
A.aRd=B.a(x([2,50,24]),y.t)
A.aTY=B.a(x([4,25,9]),y.t)
A.aQT=B.a(x([1,134,108]),y.t)
A.aRf=B.a(x([2,67,43]),y.t)
A.aSS=B.a(x([2,33,15,2,34,16]),y.t)
A.aT2=B.a(x([2,33,11,2,34,12]),y.t)
A.aRg=B.a(x([2,86,68]),y.t)
A.aU0=B.a(x([4,43,27]),y.t)
A.aU_=B.a(x([4,43,19]),y.t)
A.aTZ=B.a(x([4,43,15]),y.t)
A.aRh=B.a(x([2,98,78]),y.t)
A.aU1=B.a(x([4,49,31]),y.t)
A.aTd=B.a(x([2,32,14,4,33,15]),y.t)
A.aTo=B.a(x([4,39,13,1,40,14]),y.t)
A.aR9=B.a(x([2,121,97]),y.t)
A.aTz=B.a(x([2,60,38,2,61,39]),y.t)
A.aTK=B.a(x([4,40,18,2,41,19]),y.t)
A.aRL=B.a(x([4,40,14,2,41,15]),y.t)
A.aRa=B.a(x([2,146,116]),y.t)
A.aRW=B.a(x([3,58,36,2,59,37]),y.t)
A.aS6=B.a(x([4,36,16,4,37,17]),y.t)
A.aSh=B.a(x([4,36,12,4,37,13]),y.t)
A.aSq=B.a(x([2,86,68,2,87,69]),y.t)
A.aSr=B.a(x([4,69,43,1,70,44]),y.t)
A.aSs=B.a(x([6,43,19,2,44,20]),y.t)
A.aSt=B.a(x([6,43,15,2,44,16]),y.t)
A.aTW=B.a(x([4,101,81]),y.t)
A.aSu=B.a(x([1,80,50,4,81,51]),y.t)
A.aSv=B.a(x([4,50,22,4,51,23]),y.t)
A.aSx=B.a(x([3,36,12,8,37,13]),y.t)
A.aSy=B.a(x([2,116,92,2,117,93]),y.t)
A.aSz=B.a(x([6,58,36,2,59,37]),y.t)
A.aSA=B.a(x([4,46,20,6,47,21]),y.t)
A.aSB=B.a(x([7,42,14,4,43,15]),y.t)
A.aTX=B.a(x([4,133,107]),y.t)
A.aSC=B.a(x([8,59,37,1,60,38]),y.t)
A.aSD=B.a(x([8,44,20,4,45,21]),y.t)
A.aSE=B.a(x([12,33,11,4,34,12]),y.t)
A.aSF=B.a(x([3,145,115,1,146,116]),y.t)
A.aSG=B.a(x([4,64,40,5,65,41]),y.t)
A.aSI=B.a(x([11,36,16,5,37,17]),y.t)
A.aSJ=B.a(x([11,36,12,5,37,13]),y.t)
A.aSK=B.a(x([5,109,87,1,110,88]),y.t)
A.aSL=B.a(x([5,65,41,5,66,42]),y.t)
A.aSM=B.a(x([5,54,24,7,55,25]),y.t)
A.aQJ=B.a(x([11,36,12]),y.t)
A.aSN=B.a(x([5,122,98,1,123,99]),y.t)
A.aSO=B.a(x([7,73,45,3,74,46]),y.t)
A.aSP=B.a(x([15,43,19,2,44,20]),y.t)
A.aSQ=B.a(x([3,45,15,13,46,16]),y.t)
A.aSR=B.a(x([1,135,107,5,136,108]),y.t)
A.aST=B.a(x([10,74,46,1,75,47]),y.t)
A.aSU=B.a(x([1,50,22,15,51,23]),y.t)
A.aSV=B.a(x([2,42,14,17,43,15]),y.t)
A.aSW=B.a(x([5,150,120,1,151,121]),y.t)
A.aSX=B.a(x([9,69,43,4,70,44]),y.t)
A.aSY=B.a(x([17,50,22,1,51,23]),y.t)
A.aSZ=B.a(x([2,42,14,19,43,15]),y.t)
A.aT_=B.a(x([3,141,113,4,142,114]),y.t)
A.aT0=B.a(x([3,70,44,11,71,45]),y.t)
A.aT1=B.a(x([17,47,21,4,48,22]),y.t)
A.aT3=B.a(x([9,39,13,16,40,14]),y.t)
A.aT4=B.a(x([3,135,107,5,136,108]),y.t)
A.aT5=B.a(x([3,67,41,13,68,42]),y.t)
A.aT6=B.a(x([15,54,24,5,55,25]),y.t)
A.aT7=B.a(x([15,43,15,10,44,16]),y.t)
A.aT8=B.a(x([4,144,116,4,145,117]),y.t)
A.aQN=B.a(x([17,68,42]),y.t)
A.aT9=B.a(x([17,50,22,6,51,23]),y.t)
A.aTa=B.a(x([19,46,16,6,47,17]),y.t)
A.aTb=B.a(x([2,139,111,7,140,112]),y.t)
A.aQO=B.a(x([17,74,46]),y.t)
A.aTc=B.a(x([7,54,24,16,55,25]),y.t)
A.aRk=B.a(x([34,37,13]),y.t)
A.aTe=B.a(x([4,151,121,5,152,122]),y.t)
A.aTf=B.a(x([4,75,47,14,76,48]),y.t)
A.aTg=B.a(x([11,54,24,14,55,25]),y.t)
A.aTh=B.a(x([16,45,15,14,46,16]),y.t)
A.aTi=B.a(x([6,147,117,4,148,118]),y.t)
A.aTj=B.a(x([6,73,45,14,74,46]),y.t)
A.aTk=B.a(x([11,54,24,16,55,25]),y.t)
A.aTl=B.a(x([30,46,16,2,47,17]),y.t)
A.aTm=B.a(x([8,132,106,4,133,107]),y.t)
A.aTn=B.a(x([8,75,47,13,76,48]),y.t)
A.aTp=B.a(x([7,54,24,22,55,25]),y.t)
A.aTq=B.a(x([22,45,15,13,46,16]),y.t)
A.aTr=B.a(x([10,142,114,2,143,115]),y.t)
A.aTs=B.a(x([19,74,46,4,75,47]),y.t)
A.aTt=B.a(x([28,50,22,6,51,23]),y.t)
A.aTu=B.a(x([33,46,16,4,47,17]),y.t)
A.aTv=B.a(x([8,152,122,4,153,123]),y.t)
A.aTw=B.a(x([22,73,45,3,74,46]),y.t)
A.aTx=B.a(x([8,53,23,26,54,24]),y.t)
A.aTy=B.a(x([12,45,15,28,46,16]),y.t)
A.aTA=B.a(x([3,147,117,10,148,118]),y.t)
A.aTB=B.a(x([3,73,45,23,74,46]),y.t)
A.aTC=B.a(x([4,54,24,31,55,25]),y.t)
A.aTD=B.a(x([11,45,15,31,46,16]),y.t)
A.aTE=B.a(x([7,146,116,7,147,117]),y.t)
A.aTF=B.a(x([21,73,45,7,74,46]),y.t)
A.aTG=B.a(x([1,53,23,37,54,24]),y.t)
A.aTH=B.a(x([19,45,15,26,46,16]),y.t)
A.aTI=B.a(x([5,145,115,10,146,116]),y.t)
A.aTJ=B.a(x([19,75,47,10,76,48]),y.t)
A.aTL=B.a(x([15,54,24,25,55,25]),y.t)
A.aTM=B.a(x([23,45,15,25,46,16]),y.t)
A.aTN=B.a(x([13,145,115,3,146,116]),y.t)
A.aTO=B.a(x([2,74,46,29,75,47]),y.t)
A.aTP=B.a(x([42,54,24,1,55,25]),y.t)
A.aTQ=B.a(x([23,45,15,28,46,16]),y.t)
A.aQM=B.a(x([17,145,115]),y.t)
A.aTR=B.a(x([10,74,46,23,75,47]),y.t)
A.aTS=B.a(x([10,54,24,35,55,25]),y.t)
A.aTT=B.a(x([19,45,15,35,46,16]),y.t)
A.aTU=B.a(x([17,145,115,1,146,116]),y.t)
A.aRM=B.a(x([14,74,46,21,75,47]),y.t)
A.aRN=B.a(x([29,54,24,19,55,25]),y.t)
A.aRO=B.a(x([11,45,15,46,46,16]),y.t)
A.aRP=B.a(x([13,145,115,6,146,116]),y.t)
A.aRQ=B.a(x([14,74,46,23,75,47]),y.t)
A.aRR=B.a(x([44,54,24,7,55,25]),y.t)
A.aRS=B.a(x([59,46,16,1,47,17]),y.t)
A.aRT=B.a(x([12,151,121,7,152,122]),y.t)
A.aRU=B.a(x([12,75,47,26,76,48]),y.t)
A.aRV=B.a(x([39,54,24,14,55,25]),y.t)
A.aRX=B.a(x([22,45,15,41,46,16]),y.t)
A.aRY=B.a(x([6,151,121,14,152,122]),y.t)
A.aRZ=B.a(x([6,75,47,34,76,48]),y.t)
A.aS_=B.a(x([46,54,24,10,55,25]),y.t)
A.aS0=B.a(x([2,45,15,64,46,16]),y.t)
A.aS1=B.a(x([17,152,122,4,153,123]),y.t)
A.aS2=B.a(x([29,74,46,14,75,47]),y.t)
A.aS3=B.a(x([49,54,24,10,55,25]),y.t)
A.aS4=B.a(x([24,45,15,46,46,16]),y.t)
A.aS5=B.a(x([4,152,122,18,153,123]),y.t)
A.aS7=B.a(x([13,74,46,32,75,47]),y.t)
A.aS8=B.a(x([48,54,24,14,55,25]),y.t)
A.aS9=B.a(x([42,45,15,32,46,16]),y.t)
A.aSa=B.a(x([20,147,117,4,148,118]),y.t)
A.aSb=B.a(x([40,75,47,7,76,48]),y.t)
A.aSc=B.a(x([43,54,24,22,55,25]),y.t)
A.aSd=B.a(x([10,45,15,67,46,16]),y.t)
A.aSe=B.a(x([19,148,118,6,149,119]),y.t)
A.aSf=B.a(x([18,75,47,31,76,48]),y.t)
A.aSg=B.a(x([34,54,24,34,55,25]),y.t)
A.aSi=B.a(x([20,45,15,61,46,16]),y.t)
A.uJ=B.a(x([A.aQW,A.aQV,A.aQU,A.aQX,A.aR0,A.aR_,A.aQZ,A.aQY,A.aR2,A.aR1,A.aRc,A.aRb,A.aQS,A.aRe,A.aRd,A.aTY,A.aQT,A.aRf,A.aSS,A.aT2,A.aRg,A.aU0,A.aU_,A.aTZ,A.aRh,A.aU1,A.aTd,A.aTo,A.aR9,A.aTz,A.aTK,A.aRL,A.aRa,A.aRW,A.aS6,A.aSh,A.aSq,A.aSr,A.aSs,A.aSt,A.aTW,A.aSu,A.aSv,A.aSx,A.aSy,A.aSz,A.aSA,A.aSB,A.aTX,A.aSC,A.aSD,A.aSE,A.aSF,A.aSG,A.aSI,A.aSJ,A.aSK,A.aSL,A.aSM,A.aQJ,A.aSN,A.aSO,A.aSP,A.aSQ,A.aSR,A.aST,A.aSU,A.aSV,A.aSW,A.aSX,A.aSY,A.aSZ,A.aT_,A.aT0,A.aT1,A.aT3,A.aT4,A.aT5,A.aT6,A.aT7,A.aT8,A.aQN,A.aT9,A.aTa,A.aTb,A.aQO,A.aTc,A.aRk,A.aTe,A.aTf,A.aTg,A.aTh,A.aTi,A.aTj,A.aTk,A.aTl,A.aTm,A.aTn,A.aTp,A.aTq,A.aTr,A.aTs,A.aTt,A.aTu,A.aTv,A.aTw,A.aTx,A.aTy,A.aTA,A.aTB,A.aTC,A.aTD,A.aTE,A.aTF,A.aTG,A.aTH,A.aTI,A.aTJ,A.aTL,A.aTM,A.aTN,A.aTO,A.aTP,A.aTQ,A.aQM,A.aTR,A.aTS,A.aTT,A.aTU,A.aRM,A.aRN,A.aRO,A.aRP,A.aRQ,A.aRR,A.aRS,A.aRT,A.aRU,A.aRV,A.aRX,A.aRY,A.aRZ,A.aS_,A.aS0,A.aS1,A.aS2,A.aS3,A.aS4,A.aS5,A.aS7,A.aS8,A.aS9,A.aSa,A.aSb,A.aSc,A.aSd,A.aSe,A.aSf,A.aSg,A.aSi]),y.S)
A.aUm=B.a(x([6,18]),y.t)
A.aUn=B.a(x([6,22]),y.t)
A.aUq=B.a(x([6,26]),y.t)
A.aUw=B.a(x([6,30]),y.t)
A.aUC=B.a(x([6,34]),y.t)
A.aUo=B.a(x([6,22,38]),y.t)
A.aUp=B.a(x([6,24,42]),y.t)
A.aUr=B.a(x([6,26,46]),y.t)
A.aUv=B.a(x([6,28,50]),y.t)
A.aUx=B.a(x([6,30,54]),y.t)
A.aUB=B.a(x([6,32,58]),y.t)
A.aUD=B.a(x([6,34,62]),y.t)
A.aUs=B.a(x([6,26,46,66]),y.t)
A.aUt=B.a(x([6,26,48,70]),y.t)
A.aUu=B.a(x([6,26,50,74]),y.t)
A.aUy=B.a(x([6,30,54,78]),y.t)
A.aUz=B.a(x([6,30,56,82]),y.t)
A.aUA=B.a(x([6,30,58,86]),y.t)
A.aUE=B.a(x([6,34,62,90]),y.t)
A.aV1=B.a(x([6,28,50,72,94]),y.t)
A.aV2=B.a(x([6,26,50,74,98]),y.t)
A.aV3=B.a(x([6,30,54,78,102]),y.t)
A.aV4=B.a(x([6,28,54,80,106]),y.t)
A.aV5=B.a(x([6,32,58,84,110]),y.t)
A.aV6=B.a(x([6,30,58,86,114]),y.t)
A.aV7=B.a(x([6,34,62,90,118]),y.t)
A.aSj=B.a(x([6,26,50,74,98,122]),y.t)
A.aSk=B.a(x([6,30,54,78,102,126]),y.t)
A.aSl=B.a(x([6,26,52,78,104,130]),y.t)
A.aSm=B.a(x([6,30,56,82,108,134]),y.t)
A.aSn=B.a(x([6,34,60,86,112,138]),y.t)
A.aSo=B.a(x([6,30,58,86,114,142]),y.t)
A.aSp=B.a(x([6,34,62,90,118,146]),y.t)
A.aVG=B.a(x([6,30,54,78,102,126,150]),y.t)
A.aVH=B.a(x([6,24,50,76,102,128,154]),y.t)
A.aVI=B.a(x([6,28,54,80,106,132,158]),y.t)
A.aVJ=B.a(x([6,32,58,84,110,136,162]),y.t)
A.aVK=B.a(x([6,26,54,82,110,138,166]),y.t)
A.aVL=B.a(x([6,30,58,86,114,142,170]),y.t)
A.aXA=B.a(x([D.fG,A.aUm,A.aUn,A.aUq,A.aUw,A.aUC,A.aUo,A.aUp,A.aUr,A.aUv,A.aUx,A.aUB,A.aUD,A.aUs,A.aUt,A.aUu,A.aUy,A.aUz,A.aUA,A.aUE,A.aV1,A.aV2,A.aV3,A.aV4,A.aV5,A.aV6,A.aV7,A.aSj,A.aSk,A.aSl,A.aSm,A.aSn,A.aSo,A.aSp,A.aVG,A.aVH,A.aVI,A.aVJ,A.aVK,A.aVL]),y.S)
A.aXK=B.a(x([A.BO,A.KG,A.BP]),B.u("G<Pf>"))
A.a42=new C.K2(0,"finderPatternOuter")
A.a43=new C.K2(1,"finderPatternInner")
A.a44=new C.K2(2,"finderPatternDot")
A.yf=new C.K2(3,"codePixel")
A.b5O=new C.K2(4,"codePixelEmpty")
A.Eh=new C.a4N(0,"valid")
A.b5R=new C.a4N(1,"contentTooLong")
A.b5S=new C.a4N(2,"error")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZA","cTI",()=>C.dEZ())
x($,"dYT","d1k",()=>C.dEY())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_203",e:"endPart",h:b})})($__dart_deferred_initializers__,"2Ogy4KN4ariZfpBVv2rEJySbbU0=");