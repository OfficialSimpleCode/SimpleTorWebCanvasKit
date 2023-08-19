self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
vp(d,e,f,g,h,a0){var x=0,w=A.j(y.e),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$vp=A.d(function(a1,a2){if(a1===1)return A.f(a2,w)
while(true)switch(x){case 0:k=e.gC()
j=e.gL()
k=A.ac(k,j,1,0,0,0,0,!1)
if(!A.a6(k))A.y(A.a9(k))
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
return A.c(F.If(d,new H.l8(I.d3,t,s),!0,A.aLt(u,1).cT(A.W(1,0,0,0,0,0)),u,!1,new A.q(k*0.7,null,j,null)),$async$vp)
case 3:r=a2
if(r==null){v=!1
x=1
break}k=r.c
k=A.u("dd-MM-yyyy",null).ap(A.u("dd-MM-yyyy",null).t(k),!1,!1)
j=r.b
j=A.u("dd-MM-yyyy",null).ap(A.u("dd-MM-yyyy",null).t(j),!1,!1)
q=A.ac(0,1,1,0,0,0,0,!1)
if(!A.a6(q))A.y(A.a9(q))
q=A.ac(0,1,1,0,0,0,0,!1)
if(!A.a6(q))A.y(A.a9(q))
p=new A.uZ(j,k)
x=B.d4C(a0,p,h)?4:5
break
case 4:new A.aL(A.k("strikingVacations",!0),A.W(0,0,0,0,0,3),C.r,d,null).af()
x=6
return A.c(B.vp(d,e,f,p,h,a0),$async$vp)
case 6:v=!1
x=1
break
case 5:k=A.ae(d,!1)
j=A.W(0,0,0,2300,0,0)
q=J.bf(A.aH("workerHelper.36",0),new B.c7h(p,a0,h),y.e)
o=h!=null
i=J
x=10
return A.c(A.cF("assets/animations/success_animation.json.zip",d,j,q,A.k(o?"vacationUpdated":"vacationAdded",!0),k,!0,!1,!0,!0,C.a6).cU(),$async$vp)
case 10:x=i.p(a2,!0)?7:9
break
case 7:n=p.a
for(;!n.ak(p.b);){m=A.cy8(A.u("dd-MM-yyyy",null).t(n),"00:00","23:59",a0.d)
l=o&&!n.ah(h.a)&&n.ah(h.b.u(0,new A.b5(864e8)))?A.cy8(A.u("dd-MM-yyyy",null).t(n),"00:00","23:59",a0.d):null
if(!A.CA(a0,m,A.u("HH:mm",null).ap("00:00",!1,!1),!0,l!=null,l,null)){k=A.k("UpdatedVacationsEventError",!0)
j=new A.b5(3e6)
$.R3().auh()
q=$.R3()
$.aMU().a=d
q.YZ(new A.aL(k,j,C.r,d,null).auZ(),C.r,j)}n=n.u(0,new A.b5(864e8))}$.hS().CW.O()
v=!0
x=1
break
x=8
break
case 9:x=11
return A.c(B.vp(d,e,f,p,h,a0),$async$vp)
case 11:case 8:v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$vp,w)},
d4C(d,e,f){var x,w={},v=e.a,u=d.rx.d.h(0,A.u("MM-yyyy",null).t(v))
if(u==null)return!0
v=w.a=e.a
w.b=!1
for(;!v.ak(e.b);v=x){u.q(0,new B.cee(w,f))
x=w.a.u(0,new A.b5(864e8))
w.a=x}return w.b},
c7h:function c7h(d,e,f){this.a=d
this.b=e
this.c=f},
cee:function cee(d,e){this.a=d
this.b=e},
aLK(d,e,f){var x=0,w=A.j(y.e),v,u,t,s
var $async$aLK=A.d(function(g,h){if(g===1)return A.f(h,w)
while(true)switch(x){case 0:s=J
x=3
return A.c(B.cb_(d,e),$async$aLK)
case 3:if(!s.p(h,!0)){v=!1
x=1
break}u=A.ae(d,!1)
x=4
return A.c(A.cF("assets/animations/delete_animation.json.zip",d,C.a4,J.bf(A.aH("workerHelper.47",0),new B.c8G(e,f),y.e),A.k("vacationDeleted",!0),u,!0,!1,!0,!0,C.a6).cU(),$async$aLK)
case 4:t=h
u=J.ij(t)
if(u.m(t,!0)){$.hS().CW.O()
v=!0
x=1
break}v=u.m(t,!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aLK,w)},
cb_(d,e){var x=0,w=A.j(y.h),v,u,t,s,r,q
var $async$cb_=A.d(function(f,g){if(f===1)return A.f(g,w)
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
return A.c(A.mv(null,A.O(A.N(r,"DATES",q),C.p,!1,!1,null,!1,null,!1,!1,!1,!1,1,null,15,null,""),d,null,new B.cb2(d),new B.cb3(d),!0,s),$async$cb_)
case 3:v=g
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cb_,w)},
c8G:function c8G(d,e){this.a=d
this.b=e},
cb2:function cb2(d){this.a=d},
cb3:function cb3(d){this.a=d},
cTN(d,e,f){return new B.Hh(e,d,f,null)},
Hh:function Hh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aJh:function aJh(d){var _=this
_.d=$
_.a=null
_.b=d
_.c=null},
c4c:function c4c(d,e){this.a=d
this.b=e},
aar:function aar(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aO6:function aO6(d,e){this.a=d
this.b=e},
ahD:function ahD(d){this.a=d},
aut:function aut(d,e,f){this.d=d
this.e=e
this.a=f},
bGi:function bGi(d){this.a=d},
bGe:function bGe(d){this.a=d},
bGf:function bGf(d){this.a=d},
bGg:function bGg(){},
bGh:function bGh(d,e,f){this.a=d
this.b=e
this.c=f},
aus:function aus(d,e,f){this.c=d
this.d=e
this.a=f},
bGb:function bGb(d,e){this.a=d
this.b=e},
bGc:function bGc(d,e,f){this.a=d
this.b=e
this.c=f},
bGd:function bGd(d,e,f){this.a=d
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
B.Hh.prototype={
a5(){return new B.aJh(C.l)}}
B.aJh.prototype={
gKy(){var x,w,v=this.d
if(v===$){x=this.a.d
if(x==null)x=new A.A(Date.now(),!1)
w=x.gC()
x=x.gL()
x=A.ac(w,x,1,0,0,0,0,!1)
if(!A.a6(x))A.y(A.a9(x))
v=this.d=A.az(new A.A(x,!1),y.f)}return v},
p(d){var x,w,v,u,t,s,r=this,q=null,p=r.a.c
if(p==null){x=$.h0()
p=$.a3().ay.h(0,x.b.a)}A.d0(d,!0,y.z)
w=A.r(d)
v=A.k("hereYouCanAddVacations",!0)
u=r.a.c==null&&$.a_().gc9()>1
t=r.a.e
v=E.awB(q,q,u,q,q,v,!1,q,32,t==null?A.k("vacations",!0):t)
if(p!=null){u=$.aQ()
t=r.gKy()
s=r.gKy()
r.a.toString
s=new A.q(u*0.95,q,A.S(A.a([new K.ano(t,q,q,q,q),new A.bX(10,0.8,q,q,q,q),new A.q(q,20,q,q),new A.a8(s,new B.c4c(r,p),q,q,y.y),new B.aut(r.gKy(),p,q)],y.u),C.h,C.i,C.f),q)
u=s}else u=new A.q(q,q,q,q)
return A.hb(v,w.ax.CW,A.cw(u,q,q),q,q,!1,q,q,q)}}
B.aar.prototype={
p(d){var x=null
return A.cW(A.ag(A.a([A.b_(C.cA,x,x,x,23),new A.q(5,x,x,x),A.O(A.k("addVacation",!0),x,!1,!1,x,!1,x,!1,!1,!1,!1,1,x,17,x,"")],y.u),C.h,C.A,C.f,x),C.w,new B.aO6(this,d),1)}}
B.ahD.prototype={
p(d){var x=null,w=$.aQ()
return A.bc(A.S(A.a([new A.q(w*0.8,x,A.ap(A.k($.a_().gc9()>1?"EmptyVacationsTextManager":"EmptyVacationsText",!0),x,x,x,x,x,A.r(d).p3.r,C.p,x,x),x),A.kp(A.mT("assets/animations/vacationAnimation.json.zip",$.bN()*0.43,!1,x),!1,!1,!1,!1,!1,!1)],y.u),C.h,C.A,C.f),1)}}
B.aut.prototype={
p(d){return new A.a8(this.d,new B.bGi(this),null,null,y.y)}}
B.aus.prototype={
p(d){var x,w=null,v="d/M/yyyy",u=$.aQ(),t=A.O(A.k("start",!0)+":  ",w,!1,!1,w,!1,w,!1,!1,!0,!1,0.7,w,15,w,""),s=this.c,r=s.a,q=y.u
r=A.ag(A.a([t,A.O(A.u(v,w).t(r),w,!1,!1,w,!1,w,!1,!1,!0,!1,1,w,15,w,"")],q),C.h,C.i,C.f,w)
t=A.O(A.k("end",!0)+":  ",w,!1,!1,w,!1,w,!1,!1,!0,!1,0.7,w,15,w,"")
x=s.b
return A.bw(w,A.b9(w,w,w,w,A.S(A.a([A.ag(A.a([A.S(A.a([r,A.ag(A.a([t,A.O(A.u(v,w).t(x),w,!1,!1,w,!1,w,!1,!1,!0,!1,1,w,15,w,"")],q),C.h,C.i,C.f,w)],q),C.af,C.i,C.f),this.bui(d,s)],q),C.h,C.al,C.f,w),new A.q(w,10,w,w),A.O(A.hi(s.b.dO(s.a.cT(A.W(1,0,0,0,0,0))),-1),w,!1,!1,w,!1,w,!1,!1,!0,!1,0.7,w,15,w,"")],q),C.h,C.i,C.f),w,w,!1,w,w,w,w,new A.B(0,7,0,7),!0,w,w,new A.B(10,10,10,10),20,w,!0,!1,u*0.95),C.m,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new B.bGb(this,d),w,w,w,w,w,w,w,w,!1,C.D)},
bui(d,e){var x=null
return A.ag(A.a([A.dP(!1,x,x,x,C.bB,!0,x,x,!0,new B.bGc(this,d,e),!1,new A.B(5,5,5,5),25,x,x),A.dP(!1,x,x,x,C.bv,!0,x,x,!0,new B.bGd(this,d,e),!1,new A.B(5,5,5,5),25,x,x)],y.u),C.h,C.A,C.f,x)}}
var z=a.updateTypes([])
B.c7h.prototype={
$1(d){var x=0,w=A.j(y.e),v,u=this
var $async$$1=A.d(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.ay("workerHelper.36")
x=3
return A.c(D.dq().tU(u.c,u.a,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:4}
B.cee.prototype={
$2(d,e){var x=this.b
if(x!=null){x=x.a
x=A.u("dd",null).t(x)===d}else x=!1
if(x)return
x=this.a
if(e.b9b(x.a))x.b=!0},
$S:1134}
B.c8G.prototype={
$1(d){var x=0,w=A.j(y.e),v,u=this
var $async$$1=A.d(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.ay("workerHelper.47")
x=3
return A.c(D.dq().ue(u.a,u.b),$async$$1)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:4}
B.cb2.prototype={
$0(){A.ae(this.a,!1).au(null)
return null},
$S:0}
B.cb3.prototype={
$0(){A.ae(this.a,!1).au(!0)
return null},
$S:0}
B.c4c.prototype={
$3(d,e,f){var x=null,w=this.a,v=w.gKy().a,u=new A.A(Date.now(),!1),t=u.gC()
u=u.gL()
u=A.ac(t,u,1,0,0,0,0,!1)
if(!A.a6(u))A.y(A.a9(u))
if(v.ah(new A.A(u,!1)))return new A.q(x,x,x,x)
return new B.aar(w.gKy(),this.b,w.a.d,x)},
$S:158}
B.aO6.prototype={
$0(){var x=this.a
return B.vp(this.b,x.c.a,x.e,null,null,x.d)},
$S:0}
B.bGi.prototype={
$3(d,e,f){var x,w,v,u=null,t=this.a,s=t.d.a,r=A.u("MM-yyyy",u).t(s)
s=t.e.rx.d
if(s.h(0,r)==null){J.bf(A.aH("workerHelper.21",0),new B.bGe(t),y.F).T(0,new B.bGf(t),y.v)
return A.bc(G.bwZ(u,10,90,u,new A.B(0,30,0,0),10),1)}x=s.h(0,r)
x.toString
s=s.h(0,r)
s.toString
w=A.D(s).j("aN<1>")
v=A.an(new A.aN(s,w),!0,w.j("K.E"))
C.b.dD(v,new B.bGg())
if(x.a===0)return new B.ahD(u)
s=$.bN()
return A.bc(A.h8(C.u,u,new B.bGh(t,x,v),v.length,u,u,C.G,new A.B(0,20,0,s*0.1),u,u,!1,C.y,!1),1)},
$S:158}
B.bGe.prototype={
$1(d){var x=0,w=A.j(y.F),v=this,u
var $async$$1=A.d(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:A.ay("workerHelper.21")
u=v.a
x=2
return A.c(D.dq().Mr(u.e,u.d.a),$async$$1)
case 2:x=3
return A.c(A.ia(A.W(0,0,0,500,0,0),null,y.b),$async$$1)
case 3:return A.h(null,w)}})
return A.i($async$$1,w)},
$S:32}
B.bGf.prototype={
$1(d){return this.a.d.O()},
$S:25}
B.bGg.prototype={
$2(d,e){var x,w=A.hv(d,null)
if(w==null)w=0
x=A.hv(e,null)
return C.c.aX(w,x==null?0:x)},
$S:154}
B.bGh.prototype={
$2(d,e){var x=null,w=this.b.h(0,this.c[e])
if(w==null)return new A.q(x,x,x,x)
return new B.aus(w,this.a.e,x)},
$S:55}
B.bGb.prototype={
$0(){var x=this.a,w=x.c
return B.vp(this.b,w.a,null,null,w,x.d)},
$S:0}
B.bGc.prototype={
$0(){var x=this.c
return B.vp(this.b,x.a,null,null,x,this.a.d)},
$S:35}
B.bGd.prototype={
$0(){return B.aLK(this.b,this.c,this.a.d)},
$S:35};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.bH,[B.c7h,B.c8G,B.c4c,B.bGi,B.bGe,B.bGf])
x(A.cp,[B.cee,B.bGg,B.bGh])
x(A.bV,[B.cb2,B.cb3,B.aO6,B.bGb,B.bGc,B.bGd])
w(B.Hh,A.X)
w(B.aJh,A.a2)
x(A.H,[B.aar,B.ahD,B.aut,B.aus])})()
A.bM(b.typeUniverse,JSON.parse('{"Hh":{"X":[],"e":[]},"aJh":{"a2":["Hh"]},"aar":{"H":[],"e":[]},"ahD":{"H":[],"e":[]},"aut":{"H":[],"e":[]},"aus":{"H":[],"e":[]}}'))
var y={f:A.x("A"),u:A.x("G<e>"),F:A.x("aK"),y:A.x("a8<A>"),z:A.x("o9"),e:A.x("I"),b:A.x("@"),h:A.x("I?"),v:A.x("~")}}
$__dart_deferred_initializers__["buMJvNK7idPQ6nXg0gsEk6nBS+4="] = $__dart_deferred_initializers__.current
