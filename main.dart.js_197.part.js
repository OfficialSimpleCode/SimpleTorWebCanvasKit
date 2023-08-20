self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
vm(d,e,f,g,h,a0){var x=0,w=A.j(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$vm=A.e(function(a1,a2){if(a1===1)return A.f(a2,w)
while(true)switch(x){case 0:k=e.gD()
j=e.gN()
k=A.ac(k,j,1,0,0,0,0,!1)
if(!A.a6(k))A.z(A.a9(k))
u=new A.A(k,!1)
k=f==null
if(k)if(g!=null){j=g.a
t=j}else{j=h!=null?h.a:e
t=j}else t=f
if(k)if(g!=null){k=g.b
s=k}else{k=h!=null?h.b:e.u(0,A.W(3,0,0,0,0,0))
s=k}else s=f
k=$.aQ()
j=A.O(A.k("chooseVacationDates",!0),C.p,!1,!1,null,!1,null,!1,!1,!1,!1,0.7,null,15,null,"")
x=3
return A.c(F.I8(d,new H.l8(I.d3,t,s),!0,A.aLk(u,1).cS(A.W(1,0,0,0,0,0)),u,!1,new A.q(k*0.7,null,j,null)),$async$vm)
case 3:r=a2
if(r==null){v=!1
x=1
break}k=r.c
k=A.u("dd-MM-yyyy",null).ao(A.u("dd-MM-yyyy",null).t(k),!1,!1)
j=r.b
j=A.u("dd-MM-yyyy",null).ao(A.u("dd-MM-yyyy",null).t(j),!1,!1)
q=A.ac(0,1,1,0,0,0,0,!1)
if(!A.a6(q))A.z(A.a9(q))
q=A.ac(0,1,1,0,0,0,0,!1)
if(!A.a6(q))A.z(A.a9(q))
p=new A.uW(j,k)
x=B.d3m(a0,p,h)?4:5
break
case 4:new A.aK(A.k("strikingVacations",!0),A.W(0,0,0,0,0,3),C.r,d,null).ag()
x=6
return A.c(B.vm(d,e,f,p,h,a0),$async$vm)
case 6:v=!1
x=1
break
case 5:k=A.ae(d,!1)
j=A.W(0,0,0,2300,0,0)
q=J.be(A.aG("workerHelper.38",0),new B.c6F(p,a0,h),y.e)
o=h!=null
i=J
x=10
return A.c(A.cA("assets/animations/success_animation.json.zip",d,j,q,A.k(o?"vacationUpdated":"vacationAdded",!0),k,!0,!1,!0,!0,C.a6).cP(),$async$vm)
case 10:x=i.p(a2,!0)?7:9
break
case 7:n=p.a
for(;!n.ak(p.b);){m=A.cxa(A.u("dd-MM-yyyy",null).t(n),"00:00","23:59",a0.d)
l=o&&!n.ah(h.a)&&n.ah(h.b.u(0,new A.b4(864e8)))?A.cxa(A.u("dd-MM-yyyy",null).t(n),"00:00","23:59",a0.d):null
if(!A.Ct(a0,m,A.u("HH:mm",null).ao("00:00",!1,!1),!0,l!=null,l,null)){k=A.k("UpdatedVacationsEventError",!0)
j=new A.b4(3e6)
$.QR().au2()
q=$.QR()
$.aMN().a=d
q.YO(new A.aK(k,j,C.r,d,null).auK(),C.r,j)}n=n.u(0,new A.b4(864e8))}$.hQ().CW.R()
v=!0
x=1
break
x=8
break
case 9:x=11
return A.c(B.vm(d,e,f,p,h,a0),$async$vm)
case 11:case 8:v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$vm,w)},
d3m(d,e,f){var x,w={},v=e.a,u=d.rx.d.h(0,A.u("MM-yyyy",null).t(v))
if(u==null)return!0
v=w.a=e.a
w.b=!1
for(;!v.ak(e.b);v=x){u.q(0,new B.cdy(w,f))
x=w.a.u(0,new A.b4(864e8))
w.a=x}return w.b},
c6F:function c6F(d,e,f){this.a=d
this.b=e
this.c=f},
cdy:function cdy(d,e){this.a=d
this.b=e},
aLC(d,e,f){var x=0,w=A.j(y.e),v,u,t,s
var $async$aLC=A.e(function(g,h){if(g===1)return A.f(h,w)
while(true)switch(x){case 0:s=J
x=3
return A.c(B.cak(d,e),$async$aLC)
case 3:if(!s.p(h,!0)){v=!1
x=1
break}u=A.ae(d,!1)
x=4
return A.c(A.cA("assets/animations/delete_animation.json.zip",d,C.a3,J.be(A.aG("workerHelper.50",0),new B.c82(e,f),y.e),A.k("vacationDeleted",!0),u,!0,!1,!0,!0,C.a6).cP(),$async$aLC)
case 4:t=h
u=J.ih(t)
if(u.m(t,!0)){$.hQ().CW.R()
v=!0
x=1
break}v=u.m(t,!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aLC,w)},
cak(d,e){var x=0,w=A.j(y.h),v,u,t,s,r,q
var $async$cak=A.e(function(f,g){if(f===1)return A.f(g,w)
while(true)switch(x){case 0:s=A.k("deleting",!0)
r=A.k("deleteTheVacation",!0)
q=e.a
q=A.u("dd-MM-yyyy",null).t(q)
u=e.b
t=A.k(q===A.u("dd-MM-yyyy",null).t(u)?"onDate":"onDates",!0)
r=A.N(r,"ON",t)
q=e.a
q=A.u("dd-MM-yyyy",null).t(q)
u=e.b
u=A.u("dd-MM-yyyy",null).t(u)
t=e.a
if(q===u)q=A.u("dd-MM-yyyy",null).t(t)
else{q=A.u("d/M/yyyy",null).t(t)
u=e.b
u=q+" - "+A.u("d/M/yyyy",null).t(u)
q=u}x=3
return A.c(A.mu(null,A.O(A.N(r,"DATES",q),C.p,!1,!1,null,!1,null,!1,!1,!1,!1,1,null,15,null,""),d,null,new B.can(d),new B.cao(d),!0,s),$async$cak)
case 3:v=g
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cak,w)},
c82:function c82(d,e){this.a=d
this.b=e},
can:function can(d){this.a=d},
cao:function cao(d){this.a=d},
cSI(d,e,f){return new B.Ha(e,d,f,null)},
Ha:function Ha(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJ8:function aJ8(d){var _=this
_.d=$
_.a=null
_.b=d
_.c=null},
c3B:function c3B(d,e){this.a=d
this.b=e},
aaj:function aaj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aO_:function aO_(d,e){this.a=d
this.b=e},
ahv:function ahv(d){this.a=d},
aum:function aum(d,e,f){this.d=d
this.e=e
this.a=f},
bFG:function bFG(d){this.a=d},
bFC:function bFC(d){this.a=d},
bFD:function bFD(d){this.a=d},
bFE:function bFE(){},
bFF:function bFF(d,e,f){this.a=d
this.b=e
this.c=f},
aul:function aul(d,e,f){this.c=d
this.d=e
this.a=f},
bFz:function bFz(d,e){this.a=d
this.b=e},
bFA:function bFA(d,e,f){this.a=d
this.b=e
this.c=f},
bFB:function bFB(d,e,f){this.a=d
this.b=e
this.c=f}},C,A,E,K,D,J,G,F,H,I
B=a.updateHolder(c[57],B)
C=c[2]
A=c[0]
E=c[130]
K=c[78]
D=c[4]
J=c[1]
G=c[116]
F=c[118]
H=c[155]
I=c[170]
B.Ha.prototype={
a5(){return new B.aJ8(C.l)}}
B.aJ8.prototype={
gKq(){var x,w,v=this.d
if(v===$){x=this.a.d
if(x==null)x=new A.A(Date.now(),!1)
w=x.gD()
x=x.gN()
x=A.ac(w,x,1,0,0,0,0,!1)
if(!A.a6(x))A.z(A.a9(x))
v=this.d=A.az(new A.A(x,!1),y.f)}return v},
p(d){var x,w,v,u,t,s,r=this,q=null,p=r.a.c
if(p==null){x=$.h0()
p=$.a3().ay.h(0,x.b.a)}A.cY(d,!0,y.z)
w=A.r(d)
v=A.k("hereYouCanAddVacations",!0)
u=r.a.c==null&&$.a_().gc8()>1
t=r.a.e
v=E.awu(q,q,u,q,q,v,!1,q,32,t==null?A.k("vacations",!0):t)
if(p!=null){u=$.aQ()
t=r.gKq()
s=r.gKq()
r.a.toString
s=new A.q(u*0.95,q,A.S(A.a([new K.anh(t,q,q,q,q),new A.bX(10,0.8,q,q,q,q),new A.q(q,20,q,q),new A.a8(s,new B.c3B(r,p),q,q,y.y),new B.aum(r.gKq(),p,q)],y.u),C.h,C.i,C.f),q)
u=s}else u=new A.q(q,q,q,q)
return A.ha(v,w.ax.CW,A.cv(u,q,q),q,q,!1,q,q,q)}}
B.aaj.prototype={
p(d){var x=null
return A.cV(A.ag(A.a([A.b_(C.cA,x,x,x,23),new A.q(5,x,x,x),A.O(A.k("addVacation",!0),x,!1,!1,x,!1,x,!1,!1,!1,!1,1,x,17,x,"")],y.u),C.h,C.A,C.f,x),C.w,new B.aO_(this,d),1)}}
B.ahv.prototype={
p(d){var x=null,w=$.aQ()
return A.bc(A.S(A.a([new A.q(w*0.8,x,A.ap(A.k($.a_().gc8()>1?"EmptyVacationsTextManager":"EmptyVacationsText",!0),x,x,x,x,x,A.r(d).p3.r,C.p,x,x),x),A.kn(A.mR("assets/animations/vacationAnimation.json.zip",$.bI()*0.43,!1,x),!1,!1,!1,!1,!1,!1)],y.u),C.h,C.A,C.f),1)}}
B.aum.prototype={
p(d){return new A.a8(this.d,new B.bFG(this),null,null,y.y)}}
B.aul.prototype={
p(d){var x,w=null,v="d/M/yyyy",u=$.aQ(),t=A.O(A.k("start",!0)+":  ",w,!1,!1,w,!1,w,!1,!1,!0,!1,0.7,w,15,w,""),s=this.c,r=s.a,q=y.u
r=A.ag(A.a([t,A.O(A.u(v,w).t(r),w,!1,!1,w,!1,w,!1,!1,!0,!1,1,w,15,w,"")],q),C.h,C.i,C.f,w)
t=A.O(A.k("end",!0)+":  ",w,!1,!1,w,!1,w,!1,!1,!0,!1,0.7,w,15,w,"")
x=s.b
return A.bw(w,A.b9(w,w,w,w,A.S(A.a([A.ag(A.a([A.S(A.a([r,A.ag(A.a([t,A.O(A.u(v,w).t(x),w,!1,!1,w,!1,w,!1,!1,!0,!1,1,w,15,w,"")],q),C.h,C.i,C.f,w)],q),C.af,C.i,C.f),this.bu0(d,s)],q),C.h,C.al,C.f,w),new A.q(w,10,w,w),A.O(A.hh(s.b.dM(s.a.cS(A.W(1,0,0,0,0,0))),-1),w,!1,!1,w,!1,w,!1,!1,!0,!1,0.7,w,15,w,"")],q),C.h,C.i,C.f),w,w,!1,w,w,w,w,new A.B(0,7,0,7),!0,w,w,new A.B(10,10,10,10),20,w,!0,!1,u*0.95),C.m,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bFz(this,d),w,w,w,w,w,w,w,w,!1,C.D)},
bu0(d,e){var x=null
return A.ag(A.a([A.dO(!1,x,x,x,C.bA,!0,x,x,!0,new B.bFA(this,d,e),!1,new A.B(5,5,5,5),25,x,x),A.dO(!1,x,x,x,C.bv,!0,x,x,!0,new B.bFB(this,d,e),!1,new A.B(5,5,5,5),25,x,x)],y.u),C.h,C.A,C.f,x)}}
var z=a.updateTypes([])
B.c6F.prototype={
$1(d){var x=0,w=A.j(y.e),v,u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.ay("workerHelper.38")
x=3
return A.c(D.de().tV(u.c,u.a,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:4}
B.cdy.prototype={
$2(d,e){var x=this.b
if(x!=null){x=x.a
x=A.u("dd",null).t(x)===d}else x=!1
if(x)return
x=this.a
if(e.b95(x.a))x.b=!0},
$S:1133}
B.c82.prototype={
$1(d){var x=0,w=A.j(y.e),v,u=this
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.ay("workerHelper.50")
x=3
return A.c(D.de().ug(u.a,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:4}
B.can.prototype={
$0(){A.ae(this.a,!1).ar(null)
return null},
$S:0}
B.cao.prototype={
$0(){A.ae(this.a,!1).ar(!0)
return null},
$S:0}
B.c3B.prototype={
$3(d,e,f){var x=null,w=this.a,v=w.gKq().a,u=new A.A(Date.now(),!1),t=u.gD()
u=u.gN()
u=A.ac(t,u,1,0,0,0,0,!1)
if(!A.a6(u))A.z(A.a9(u))
if(v.ah(new A.A(u,!1)))return new A.q(x,x,x,x)
return new B.aaj(w.gKq(),this.b,w.a.d,x)},
$S:155}
B.aO_.prototype={
$0(){var x=this.a
return B.vm(this.b,x.c.a,x.e,null,null,x.d)},
$S:0}
B.bFG.prototype={
$3(d,e,f){var x,w,v,u=null,t=this.a,s=t.d.a,r=A.u("MM-yyyy",u).t(s)
s=t.e.rx.d
if(s.h(0,r)==null){J.be(A.aG("workerHelper.23",0),new B.bFC(t),y.F).V(0,new B.bFD(t),y.v)
return A.bc(G.bwp(u,10,90,u,new A.B(0,30,0,0),10),1)}x=s.h(0,r)
x.toString
s=s.h(0,r)
s.toString
w=A.C(s).j("aN<1>")
v=A.an(new A.aN(s,w),!0,w.j("K.E"))
C.b.dA(v,new B.bFE())
if(x.a===0)return new B.ahv(u)
s=$.bI()
return A.bc(A.h8(C.u,u,new B.bFF(t,x,v),v.length,u,u,C.G,new A.B(0,20,0,s*0.1),u,u,!1,C.y,!1),1)},
$S:155}
B.bFC.prototype={
$1(d){var x=0,w=A.j(y.F),v=this,u
var $async$$1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.ay("workerHelper.23")
u=v.a
x=2
return A.c(D.de().Mj(u.e,u.d.a),$async$$1)
case 2:x=3
return A.c(A.i8(A.W(0,0,0,500,0,0),null,y.b),$async$$1)
case 3:return A.h(null,w)}})
return A.i($async$$1,w)},
$S:31}
B.bFD.prototype={
$1(d){return this.a.d.R()},
$S:24}
B.bFE.prototype={
$2(d,e){var x,w=A.hu(d,null)
if(w==null)w=0
x=A.hu(e,null)
return C.c.aT(w,x==null?0:x)},
$S:140}
B.bFF.prototype={
$2(d,e){var x=null,w=this.b.h(0,this.c[e])
if(w==null)return new A.q(x,x,x,x)
return new B.aul(w,this.a.e,x)},
$S:55}
B.bFz.prototype={
$0(){var x=this.a,w=x.c
return B.vm(this.b,w.a,null,null,w,x.d)},
$S:0}
B.bFA.prototype={
$0(){var x=this.c
return B.vm(this.b,x.a,null,null,x,this.a.d)},
$S:35}
B.bFB.prototype={
$0(){return B.aLC(this.b,this.c,this.a.d)},
$S:35};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bH,[B.c6F,B.c82,B.c3B,B.bFG,B.bFC,B.bFD])
x(A.cl,[B.cdy,B.bFE,B.bFF])
x(A.bV,[B.can,B.cao,B.aO_,B.bFz,B.bFA,B.bFB])
w(B.Ha,A.X)
w(B.aJ8,A.a1)
x(A.H,[B.aaj,B.ahv,B.aum,B.aul])})()
A.bN(b.typeUniverse,JSON.parse('{"Ha":{"X":[],"d":[]},"aJ8":{"a1":["Ha"]},"aaj":{"H":[],"d":[]},"ahv":{"H":[],"d":[]},"aum":{"H":[],"d":[]},"aul":{"H":[],"d":[]}}'))
var y={f:A.x("A"),u:A.x("G<d>"),F:A.x("aM"),y:A.x("a8<A>"),z:A.x("o7"),e:A.x("I"),b:A.x("@"),h:A.x("I?"),v:A.x("~")}}
$__dart_deferred_initializers__["WBdTEvGxipevP8WRgZVs55no3vk="] = $__dart_deferred_initializers__.current
