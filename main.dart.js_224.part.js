self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={am7:function am7(d,e){this.c=d
this.a=e},beh:function beh(d){this.a=d},bef:function bef(d,e){this.a=d
this.b=e},beg:function beg(d,e){this.a=d
this.b=e},
vi(d,e,f,g,h,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$vi=A.e(function(a1,a2){if(a1===1)return A.f(a2,w)
while(true)switch(x){case 0:k=e.gD()
j=e.gN()
k=A.ac(k,j,1,0,0,0,0,!1)
if(!A.a6(k))A.z(A.ab(k))
u=new A.A(k,!1)
k=f==null
if(k)if(g!=null){j=g.a
t=j}else{j=h!=null?h.a:e
t=j}else t=f
if(k)if(g!=null){k=g.b
s=k}else{k=h!=null?h.b:e.t(0,A.Z(3,0,0,0,0,0))
s=k}else s=f
k=$.aR()
j=A.P(A.k("chooseVacationDates",!0),C.r,!1,!1,null,!1,null,!1,!1,!1,0.7,null,15,null,"")
x=3
return A.c(K.HR(d,new G.jd(I.d3,t,s),!0,A.aJW(u,1).d1(A.Z(1,0,0,0,0,0)),u,!1,new A.q(k*0.7,null,j,null)),$async$vi)
case 3:r=a2
if(r==null){v=!1
x=1
break}k=r.c
k=A.v("dd-MM-yyyy",null).aq(A.v("dd-MM-yyyy",null).u(k),!1,!1)
j=r.b
j=A.v("dd-MM-yyyy",null).aq(A.v("dd-MM-yyyy",null).u(j),!1,!1)
q=A.ac(0,1,1,0,0,0,0,!1)
if(!A.a6(q))A.z(A.ab(q))
q=A.ac(0,1,1,0,0,0,0,!1)
if(!A.a6(q))A.z(A.ab(q))
p=new A.uU(j,k)
x=B.cZJ(a0,p,h)?4:5
break
case 4:new A.aM(A.k("strikingVacations",!0),A.Z(0,0,0,0,0,3),C.t,d,null).ai()
x=6
return A.c(B.vi(d,e,f,p,h,a0),$async$vi)
case 6:v=!1
x=1
break
case 5:k=A.af(d,!1)
j=A.Z(0,0,0,2300,0,0)
q=J.bj(A.aJ("workerHelper.34",0),new B.c2Z(p,a0,h),y.y)
o=h!=null
i=J
x=10
return A.c(A.cM("assets/animations/success_animation.json.zip",d,!1,j,q,null,A.k(o?"vacationUpdated":"vacationAdded",!0),k,!0,!1,!0,!0,C.a7).cZ(),$async$vi)
case 10:x=i.p(a2,!0)?7:9
break
case 7:n=p.a
for(;!n.al(p.b);){m=B.ctf(A.v("dd-MM-yyyy",null).u(n),"00:00","23:59",a0.d)
l=o&&!n.ah(h.a)&&n.ah(h.b.t(0,new A.b3(864e8)))?B.ctf(A.v("dd-MM-yyyy",null).u(n),"00:00","23:59",a0.d):null
if(!N.HM(a0,m,A.v("HH:mm",null).aq("00:00",!1,!1),!0,l!=null,l,null)){k=A.k("UpdatedVacationsEventError",!0)
j=new A.b3(3e6)
$.Qi().arQ()
q=$.Qi()
$.aLp().a=d
q.Xo(new A.aM(k,j,C.t,d,null).asv(),C.t,j)}n=n.t(0,new A.b3(864e8))}$.iM().CW.U()
v=!0
x=1
break
x=8
break
case 9:x=11
return A.c(B.vi(d,e,f,p,h,a0),$async$vi)
case 11:case 8:v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$vi,w)},
cZJ(d,e,f){var x,w={},v=e.a,u=d.RG.d.h(0,A.v("MM-yyyy",null).u(v))
if(u==null)return!0
v=w.a=e.a
w.b=!1
for(;!v.al(e.b);v=x){u.q(0,new B.c9E(w,f))
x=w.a.t(0,new A.b3(864e8))
w.a=x}return w.b},
c2Z:function c2Z(d,e,f){this.a=d
this.b=e
this.c=f},
c9E:function c9E(d,e){this.a=d
this.b=e},
aKf(d,e,f){var x=0,w=A.j(y.y),v,u,t,s
var $async$aKf=A.e(function(g,h){if(g===1)return A.f(h,w)
while(true)switch(x){case 0:s=J
x=3
return A.c(B.c6G(d,e),$async$aKf)
case 3:if(!s.p(h,!0)){v=!1
x=1
break}u=A.af(d,!1)
x=4
return A.c(A.cM("assets/animations/delete_animation.json.zip",d,!1,C.a3,J.bj(A.aJ("workerHelper.43",0),new B.c4n(e,f),y.y),null,A.k("vacationDeleted",!0),u,!0,!1,!0,!0,C.a7).cZ(),$async$aKf)
case 4:t=h
u=J.it(t)
if(u.m(t,!0)){$.iM().CW.U()
v=!0
x=1
break}v=u.m(t,!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aKf,w)},
c6G(d,e){var x=0,w=A.j(y.u),v,u,t,s,r,q
var $async$c6G=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:s=A.k("deleting",!0)
r=A.k("deleteTheVacation",!0)
q=e.a
q=A.v("dd-MM-yyyy",null).u(q)
u=e.b
t=A.k(q===A.v("dd-MM-yyyy",null).u(u)?"onDate":"onDates",!0)
r=A.Y(r,"ON",t)
q=e.a
q=A.v("dd-MM-yyyy",null).u(q)
u=e.b
u=A.v("dd-MM-yyyy",null).u(u)
t=e.a
if(q===u)q=A.v("dd-MM-yyyy",null).u(t)
else{q=A.v("d/M/yyyy",null).u(t)
u=e.b
u=q+" - "+A.v("d/M/yyyy",null).u(u)
q=u}x=3
return A.c(A.mj(null,A.P(A.Y(r,"DATES",q),C.r,!1,!1,null,!1,null,!1,!1,!1,1,null,15,null,""),d,null,new B.c6J(d),new B.c6K(d),!0,s),$async$c6G)
case 3:v=g
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6G,w)},
c4n:function c4n(d,e){this.a=d
this.b=e},
c6J:function c6J(d){this.a=d},
c6K:function c6K(d){this.a=d},
cOe(d,e,f){return new B.GW(e,d,f,null)},
GW:function GW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHM:function aHM(d){var _=this
_.d=$
_.a=null
_.b=d
_.c=null},
c_V:function c_V(d,e){this.a=d
this.b=e},
a9b:function a9b(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aME:function aME(d,e){this.a=d
this.b=e},
agm:function agm(d){this.a=d},
at6:function at6(d,e,f){this.d=d
this.e=e
this.a=f},
bCA:function bCA(d){this.a=d},
bCw:function bCw(d){this.a=d},
bCx:function bCx(d){this.a=d},
bCy:function bCy(){},
bCz:function bCz(d,e,f){this.a=d
this.b=e
this.c=f},
at5:function at5(d,e,f){this.c=d
this.d=e
this.a=f},
bCt:function bCt(d,e){this.a=d
this.b=e},
bCu:function bCu(d,e,f){this.a=d
this.b=e
this.c=f},
bCv:function bCv(d,e,f){this.a=d
this.b=e
this.c=f},
ctf(d,e,f,g){var x=null,w=A.v("HH:mm",x).aq(e,!1,!1),v=y.N,u=A.a_U(0,-2,"","",!1,1,1,"","",x,x,!0,!0,!0,A.G(["0",new A.hG(C.c.T(A.v("HH:mm",x).aq(f,!1,!1).dC(w).a,6e7))],v,y.B)),t=A.aaw(A.n(v,y.g),A.az(v),"")
t.cx=A.v("dd-MM-yyyy",x).aq(d,!1,!1)
t.fr=g
t.dx=A.G(["",u],v,y.a)
return t}},A,C,H,L,E,F,D,J,M,K,G,I,N
B=a.updateHolder(c[56],B)
A=c[0]
C=c[2]
H=c[120]
L=c[226]
E=c[200]
F=c[175]
D=c[3]
J=c[1]
M=c[111]
K=c[125]
G=c[163]
I=c[186]
N=c[8]
B.am7.prototype={
p(d){return new A.a9(this.c,new B.beh(this),null,null,y.L)}}
B.GW.prototype={
a3(){return new B.aHM(C.l)}}
B.aHM.prototype={
gJy(){var x,w,v=this.d
if(v===$){x=this.a.d
w=x.gD()
x=x.gN()
x=A.ac(w,x,1,0,0,0,0,!1)
if(!A.a6(x))A.z(A.ab(x))
v=this.d=A.aD(new A.A(x,!1),y.k)}return v},
p(d){var x,w,v,u,t,s,r=this,q=null,p=r.a.c
A.cW(d,!0,y.K)
x=A.t(d)
w=A.k("hereYouCanAddVacations",!0)
v=r.a
v=v.e
w=H.avf(q,q,!1,q,q,w,!1,q,32,v)
v=$.aR()
u=r.gJy()
t=A.c4(q,10,0.8)
s=r.gJy()
r.a.toString
s=A.T(A.a([new B.am7(u,q),t,new A.q(q,20,q,q),new A.a9(s,new B.c_V(r,p),q,q,y.L),new B.at6(r.gJy(),p,q)],y.p),C.h,C.i,C.f)
return A.h1(w,x.ax.CW,A.cu(new A.q(v*0.95,q,s,q),q,q),q,!1,q,q,q)}}
B.a9b.prototype={
p(d){var x=null
return A.d0(A.ai(A.a([A.b0(L.cy,x,x,x,23),new A.q(5,x,x,x),A.P(A.k("addVacation",!0),x,!1,!1,x,!1,x,!1,!1,!1,1,x,17,x,"")],y.p),C.h,C.z,C.f),C.v,new B.aME(this,d),1)}}
B.agm.prototype={
p(d){var x=null,w=$.aR()
return A.b8(A.T(A.a([new A.q(w*0.8,x,A.ap(A.k($.a4().ct()>1?"EmptyVacationsTextManager":"EmptyVacationsText",!0),x,x,x,x,x,A.t(d).p3.r,C.r,x,x),x),A.mb(A.oQ("assets/animations/vacationAnimation.json.zip",$.bL()*0.43,!1,x),!1,!1,!1,!1,!1,!1)],y.p),C.h,C.z,C.f),1)}}
B.at6.prototype={
p(d){return new A.a9(this.d,new B.bCA(this),null,null,y.L)}}
B.at5.prototype={
p(d){var x,w=null,v="d/M/yyyy",u=$.aR(),t=A.P(A.k("start",!0)+":  ",w,!1,!1,w,!1,w,!1,!0,!1,0.7,w,15,w,""),s=this.c,r=s.a,q=y.p
r=A.ai(A.a([t,A.P(A.v(v,w).u(r),w,!1,!1,w,!1,w,!1,!0,!1,1,w,15,w,"")],q),C.h,C.i,C.f)
t=A.P(A.k("end",!0)+":  ",w,!1,!1,w,!1,w,!1,!0,!1,0.7,w,15,w,"")
x=s.b
return A.bv(w,A.bb(w,w,w,A.T(A.a([A.ai(A.a([A.T(A.a([r,A.ai(A.a([t,A.P(A.v(v,w).u(x),w,!1,!1,w,!1,w,!1,!0,!1,1,w,15,w,"")],q),C.h,C.i,C.f)],q),C.ae,C.i,C.f),this.bpU(d,s)],q),C.h,C.am,C.f),new A.q(w,10,w,w),A.P(A.h5(s.b.dC(s.a.d1(A.Z(1,0,0,0,0,0))),-1),w,!1,!1,w,!1,w,!1,!0,!1,0.7,w,15,w,"")],q),C.h,C.i,C.f),w,w,!1,w,w,w,w,new A.B(0,7,0,7),!0,w,w,new A.B(10,10,10,10),20,w,!0,u*0.95),C.m,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bCt(this,d),w,w,w,w,w,w,w,!1,C.D)},
bpU(d,e){var x=null
return A.ai(A.a([A.dZ(!1,x,x,C.bw,!0,x,x,!0,new B.bCu(this,d,e),new A.B(5,5,5,5),25,x,x),A.dZ(!1,x,x,C.br,!0,x,x,!0,new B.bCv(this,d,e),new A.B(5,5,5,5),25,x,x)],y.p),C.h,C.z,C.f)}}
var z=a.updateTypes([])
B.beh.prototype={
$3(d,e,f){var x,w,v=null,u=this.a,t=A.bv(v,A.cF(!1,A.b0(E.wz,A.t(d).ax.f,v,v,40),1),C.m,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.bef(u,e),v,v,v,v,v,v,v,!1,C.D),s=A.v("M-yyyy",v).u(e),r=A.t(d).p3.y
r.toString
r=A.ap(s,v,v,v,v,v,r.fj(A.t(d).ax.f,20),v,C.n,v)
s=A.v("MMMM",$.nt().b).u(e)
x=A.t(d).p3.y
x.toString
w=y.p
return new A.a5(F.dv,A.T(A.a([A.ai(A.a([t,A.T(A.a([r,A.ap(s,v,v,v,v,v,x.fj(A.t(d).ax.f,15),v,C.n,v)],w),C.h,C.i,C.f),A.bv(v,A.b0(E.wA,A.t(d).ax.f,v,v,40),C.m,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new B.beg(u,e),v,v,v,v,v,v,v,!1,C.D)],w),C.h,C.am,C.f)],w),C.h,C.i,C.f),v)},
$S:1011}
B.bef.prototype={
$0(){var x=this.a.c
x.sk(0,A.aJW(this.b,-1))
x.U()},
$S:0}
B.beg.prototype={
$0(){var x=this.a.c
x.sk(0,A.aJW(this.b,1))
x.U()},
$S:0}
B.c2Z.prototype={
$1(d){var x=0,w=A.j(y.y),v,u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.aC("workerHelper.34")
x=3
return A.c(D.dq().ti(u.c,u.a,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:4}
B.c9E.prototype={
$2(d,e){var x=this.b
if(x!=null){x=x.a
x=A.v("dd",null).u(x)===d}else x=!1
if(x)return
x=this.a
if(e.b5S(x.a))x.b=!0},
$S:1012}
B.c4n.prototype={
$1(d){var x=0,w=A.j(y.y),v,u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.aC("workerHelper.43")
x=3
return A.c(D.dq().tE(u.a,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:4}
B.c6J.prototype={
$0(){A.af(this.a,!1).aC(null)
return null},
$S:0}
B.c6K.prototype={
$0(){A.af(this.a,!1).aC(!0)
return null},
$S:0}
B.c_V.prototype={
$3(d,e,f){var x=null,w=this.a,v=w.gJy().a,u=new A.A(Date.now(),!1),t=u.gD()
u=u.gN()
u=A.ac(t,u,1,0,0,0,0,!1)
if(!A.a6(u))A.z(A.ab(u))
if(v.ah(new A.A(u,!1)))return new A.q(x,x,x,x)
return new B.a9b(w.gJy(),this.b,w.a.d,x)},
$S:152}
B.aME.prototype={
$0(){var x=this.a
return B.vi(this.b,x.c.a,x.e,null,null,x.d)},
$S:0}
B.bCA.prototype={
$3(d,e,f){var x,w,v,u=null,t=this.a,s=t.d.a,r=A.v("MM-yyyy",u).u(s)
s=t.e.RG.d
if(s.h(0,r)==null){J.bj(A.aJ("workerHelper.17",0),new B.bCw(t),y.P).W(0,new B.bCx(t),y.H)
return A.b8(M.btF(10,90,u,new A.B(0,30,0,0)),1)}x=s.h(0,r)
x.toString
s=s.h(0,r)
s.toString
w=A.D(s).j("aP<1>")
v=A.al(new A.aP(s,w),!0,w.j("M.E"))
C.b.dt(v,new B.bCy())
if(x.a===0)return new B.agm(u)
s=$.bL()
return A.b8(A.h0(u,u,new B.bCz(t,x,v),v.length,u,u,C.aq,new A.B(0,20,0,s*0.1),u,C.A,!1),1)},
$S:152}
B.bCw.prototype={
$1(d){var x=0,w=A.j(y.P),v=this,u
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.aC("workerHelper.17")
u=v.a
x=2
return A.c(D.dq().Lj(u.e,u.d.a),$async$$1)
case 2:x=3
return A.c(A.jg(A.Z(0,0,0,500,0,0),null,y.z),$async$$1)
case 3:return A.h(null,w)}})
return A.i($async$$1,w)},
$S:32}
B.bCx.prototype={
$1(d){return this.a.d.U()},
$S:24}
B.bCy.prototype={
$2(d,e){var x,w=A.hD(d,null)
if(w==null)w=0
x=A.hD(e,null)
return C.c.aU(w,x==null?0:x)},
$S:164}
B.bCz.prototype={
$2(d,e){var x=null,w=this.b.h(0,this.c[e])
if(w==null)return new A.q(x,x,x,x)
return new B.at5(w,this.a.e,x)},
$S:48}
B.bCt.prototype={
$0(){var x=this.a,w=x.c
return B.vi(this.b,w.a,null,null,w,x.d)},
$S:0}
B.bCu.prototype={
$0(){var x=this.c
return B.vi(this.b,x.a,null,null,x,this.a.d)},
$S:33}
B.bCv.prototype={
$0(){return B.aKf(this.b,this.c,this.a.d)},
$S:33};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.H,[B.am7,B.a9b,B.agm,B.at6,B.at5])
x(A.bC,[B.beh,B.c2Z,B.c4n,B.c_V,B.bCA,B.bCw,B.bCx])
x(A.bU,[B.bef,B.beg,B.c6J,B.c6K,B.aME,B.bCt,B.bCu,B.bCv])
x(A.c3,[B.c9E,B.bCy,B.bCz])
w(B.GW,A.V)
w(B.aHM,A.a0)})()
A.bH(b.typeUniverse,JSON.parse('{"am7":{"H":[],"d":[]},"GW":{"V":[],"d":[]},"aHM":{"a0":["GW"]},"a9b":{"H":[],"d":[]},"agm":{"H":[],"d":[]},"at6":{"H":[],"d":[]},"at5":{"H":[],"d":[]}}'))
var y=(function rtii(){var x=A.x
return{k:x("A"),g:x("r0"),p:x("C<d>"),P:x("aA"),N:x("l"),a:x("em"),B:x("hG"),L:x("a9<A>"),K:x("o8"),y:x("I"),z:x("@"),u:x("I?"),H:x("~")}})()}
$__dart_deferred_initializers__["tHBA3QQFM+AfMZWU1dwVPPTEOvQ="] = $__dart_deferred_initializers__.current
