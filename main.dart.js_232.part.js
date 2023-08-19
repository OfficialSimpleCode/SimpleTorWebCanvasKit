self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={aTw:function aTw(){},ay0:function ay0(){},
cIy(){return $.czI()},
aTx:function aTx(d){this.a=d},
aTy:function aTy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aTB:function aTB(d,e){this.mb$=d
this.d9$=e},
aTC:function aTC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aTD:function aTD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
aTG:function aTG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
aTE:function aTE(d,e){this.a=d
this.b=e},
aTF:function aTF(d,e){this.a=d
this.b=e},
aTH:function aTH(d){this.a=d},
ay1:function ay1(){}},A,C,J
B=a.updateHolder(c[100],B)
A=c[0]
C=c[2]
J=c[1]
B.aTw.prototype={}
B.ay0.prototype={}
B.aTx.prototype={
uV(d,e,f,g,h){return this.bw6(d,e,f,g,h)},
bw5(d,e){return this.uV(d,e,null,null,null)},
bw6(d,e,f,g,h){var x=0,w=A.j(y.b),v,u=this
var $async$uV=A.d(function(i,j){if(i===1)return A.f(j,w)
while(true)switch(x){case 0:$.aO().bW($.l4().h(0,C.a0K))
if(f!=null)d.as=d.Q=d.z=null
x=3
return A.c(u.a.uV(d,e,f,g,h).T(0,new B.aTy(d,e,f,g,h),y.b),$async$uV)
case 3:v=j
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$uV,w)}}
B.aTB.prototype={
ET(d,e,f,g){return this.aA2(d,e,f,g)},
aA2(d,e,f,g){var x=0,w=A.j(y.o),v,u=this,t,s,r,q,p,o
var $async$ET=A.d(function(h,i){if(h===1)return A.f(i,w)
while(true)switch(x){case 0:p={}
o=$.b7
p.a=null
t=d.gnT()
s=d.y
r=y.F
o="Businesses/"+o+"/Workers/"+g.d
x=s==null?3:5
break
case 3:x=6
return A.c(u.lU(A.u("MM-yyyy",null).t(t),o+"/PublicData/publicData/BookingsEvents",f).T(0,new B.aTC(p,t,d,g),r),$async$ET)
case 6:x=4
break
case 5:x=7
return A.c(u.lU("recurrenceEvents",o+"/PublicData",f).T(0,new B.aTD(p,t,d,g,e),r),$async$ET)
case 7:case 4:p=p.a
if(p!=null){v=A.aTA(p)
x=1
break}else{q=$.aO()
q.b=C.kT
q.c=""
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ET,w)},
uV(d,e,f,g,h){return this.bw7(d,e,f,g,h)},
bw7(d,e,f,g,h){var x=0,w=A.j(y.b),v,u=this,t,s,r
var $async$uV=A.d(function(i,j){if(i===1)return A.f(j,w)
while(true)switch(x){case 0:r={}
r.a=A.av(y.f)
t=$.b7
s=d.c
s===$&&A.b()
if(C.c.S(s.a,6e7)<=0){v=!1
x=1
break}x=3
return A.c(u.j7(new B.aTG(r,u,f,g,h,"Businesses/"+t+"/Workers",e,d)).T(0,new B.aTH(r),y.b),$async$uV)
case 3:v=j
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$uV,w)}}
B.ay1.prototype={}
var z=a.updateTypes([])
B.aTy.prototype={
$1(d){var x,w,v,u,t=this
if(J.p(d,!0)){x=t.a
if(x.y!=null){w=t.b
if(!w.ay){w.ay=!0
if(w.bf.a==null)$.c_().Dy(w)}}w=t.c
v=w!=null&&t.d!=null
u=t.b
if(v)$.mz().RD(t.e,x,u,w,t.d)
else $.mz().BU(x,u)}return d},
$S:34}
B.aTC.prototype={
$1(d){var x,w,v,u=this,t=null
if(d.gdU(d)&&d.bz(0)!=null){x=d.bz(0)
x.toString
w=u.b
v=J.T(J.T(x,A.u("dd",t).t(w)),A.u("HH:mm",t).t(w))
if(v!=null){x=u.c.e
x===$&&A.b()
u.a.a=A.b3v(A.u("dd-MM-yyyy",t).t(w),v,A.u("MM-yyyy",t).t(w),t,x,u.d.d)}}},
$S:23}
B.aTD.prototype={
$1(d){var x,w,v,u,t,s,r,q=this,p=null,o="dd-MM-yyyy"
if(d.gdU(d)&&d.bz(0)!=null){x=d.bz(0)
x.toString
w=q.b
x=J.T(x,A.u(o,p).t(w))
v=x==null?p:J.T(x,q.c.gA1())
if(v!=null){x=q.c
u=x.e
u===$&&A.b()
t=A.u(o,p).t(w)
w=A.u("MM-yyyy",p).t(w)
s=q.d.d
r=A.b3v(t,v,w,x.z,u,s)
x=q.e
if(x==null)q.a.a=r
else if(!r.fr.w.v(0,A.u(o,p).ap(A.u(o,p).t(x),!1,!1)))q.a.a=r}}},
$S:23}
B.aTG.prototype={
$1(d){return this.aw9(d)},
aw9(a4){var x=0,w=A.j(y.e),v,u=this,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$$1=A.d(function(a5,a6){if(a5===1)return A.f(a6,w)
while(true)switch(x){case 0:d=u.c
a0=d==null
a1=!a0
x=a1&&u.d!=null?3:4
break
case 3:x=5
return A.c(u.b.ET(d,u.e,a4,u.d),$async$$1)
case 5:if(a6==null){v=!1
x=1
break}case 4:t=u.b
s=u.f
r=u.r
a2=A
a3=J
x=6
return A.c(t.ih(r.d,s,a4),$async$$1)
case 6:q=a2.Ou(a3.aa5(a6))
s+="/"
p=q.d
o=u.w
n=o.gnT()
m=y.F
x=7
return A.c(t.ih(A.u("MM-yyyy",null).t(n),s+p+"/PublicData/publicData/BookingsEvents",a4).T(0,new B.aTE(q,o),m),$async$$1)
case 7:x=q.ay?8:9
break
case 8:x=10
return A.c(t.ih("recurrenceEvents",s+r.d+"/PublicData",a4).T(0,new B.aTF(q,r),m),$async$$1)
case 10:case 9:l=A.cl8(o,r.d)
s=o.y
if(s!=null){a1=s.gvT()
if((a1==null?1000:a1)<=1){$.aO().b=C.nn
v=!1
x=1
break}a1=l.cx
k=A.clo(q,l,A.u("HH:mm",null).ap(A.u("HH:mm",null).t(a1),!1,!1),!0,d)
a1=u.a
a1.a=k
if(k.a!==0){d=A.ac(0,1,1,0,0,0,0,!1)
if(!A.a6(d))A.y(A.a9(d))
if(k.v(0,new A.A(d,!1))||a1.a.a>35)$.aO().b=C.hZ
else if(a1.a.a!==0)$.aO().b=C.hY
v=!1
x=1
break}}else{s=A.u("HH:mm",null)
p=o.e
p===$&&A.b()
p=s.ap(p,!1,!1)
s=a1&&u.d!=null?A.cl8(d,u.d.d):null
if(!A.CA(q,l,p,!0,a1,s,u.e)){v=!1
x=1
break}}a1=u.d
if(a0){if(o.y==null){s=$.b7
p=r.d
n=o.d
n===$&&A.b()
m=o.e
m===$&&A.b()
j=o.c
j===$&&A.b()
t.hY("publicData","bookingsTimes."+n+"."+m,"Businesses/"+s+"/Workers/"+p+"/PublicData",a4,C.c.S(j.a,6e7))}}else if(d.y!=null){s=$.b7
p=r.d
n=o.d
n===$&&A.b()
m=o.e
m===$&&A.b()
j=o.c
j===$&&A.b()
t.hY("publicData","bookingsTimes."+n+"."+m,"Businesses/"+s+"/Workers/"+p+"/PublicData",a4,C.c.S(j.a,6e7))}else{s=a1!=null&&r.d!==a1.d
p=$.b7
n=d.d
m=d.e
p="Businesses/"+p
if(s){s=a1.d
n===$&&A.b()
m===$&&A.b()
t.pj("publicData","bookingsTimes."+n+"."+m,p+"/Workers/"+s+"/PublicData",a4)
s=$.b7
p=r.d
m=o.d
m===$&&A.b()
n=o.e
n===$&&A.b()
j=o.c
j===$&&A.b()
t.hY("publicData","bookingsTimes."+m+"."+n,"Businesses/"+s+"/Workers/"+p+"/PublicData",a4,C.c.S(j.a,6e7))}else{s=r.d
j=o.d
j===$&&A.b()
i=o.e
i===$&&A.b()
h=o.c
h===$&&A.b()
h=C.c.S(h.a,6e7)
n===$&&A.b()
m===$&&A.b()
t.dr(A.F(["bookingsTimes."+j+"."+i,h,"bookingsTimes."+n+"."+m,null],y.w,y.b),"publicData",p+"/Workers/"+s+"/PublicData",a4)}}s=o.d
s===$&&A.b()
g=A.u("dd-MM-yyyy",null).ap(s,!1,!1)
if(a0){if(o.y==null){a1=$.b7
s=r.d
p=A.u("MM-yyyy",null).t(g)
n=A.u("dd",null).t(g)
m=o.e
m===$&&A.b()
j=y.w
t.fh(A.F([n,A.F([m,A.Kj(o,r.d).U()],j,y.y)],j,y.v),p,"Businesses/"+a1+"/Workers/"+s+"/PublicData/publicData/BookingsEvents",a4)}}else if(d.y!=null){o.y=null
a1=$.b7
s=r.d
p=A.u("MM-yyyy",null).t(g)
n=A.u("dd",null).t(g)
m=o.e
m===$&&A.b()
j=y.w
t.fh(A.F([n,A.F([m,A.Kj(o,r.d).U()],j,y.y)],j,y.v),p,"Businesses/"+a1+"/Workers/"+s+"/PublicData/publicData/BookingsEvents",a4)}else if(a1!=null){s=d.d
s===$&&A.b()
f=A.u("dd-MM-yyyy",null).ap(s,!1,!1)
s=r.d!==a1.d||A.u("MM-yyyy",null).t(g)!==A.u("MM-yyyy",null).t(f)
p=y.w
n="Businesses/"+$.b7
if(s){a1=a1.d
s=A.u("MM-yyyy",null).t(f)
m=A.u("dd",null).t(f)
j=d.e
j===$&&A.b()
t.pj(s,m+"."+j,n+"/Workers/"+a1+"/PublicData/publicData/BookingsEvents",a4)
a1=$.b7
n=r.d
j=A.u("MM-yyyy",null).t(g)
m=A.u("dd",null).t(g)
s=o.e
s===$&&A.b()
t.fh(A.F([m,A.F([s,A.Kj(o,r.d).U()],p,y.y)],p,y.v),j,"Businesses/"+a1+"/Workers/"+n+"/PublicData/publicData/BookingsEvents",a4)}else{a1=r.d
s=A.u("MM-yyyy",null).t(f)
m=A.u("dd",null).t(f)
j=d.e
j===$&&A.b()
i=A.u("dd",null).t(g)
h=o.e
h===$&&A.b()
t.dr(A.F([m+"."+j,null,i+"."+h,A.Kj(o,r.d).U()],p,y.b),s,n+"/Workers/"+a1+"/PublicData/publicData/BookingsEvents",a4)}}a1=u.e
if(a0){if(o.y!=null){d=$.b7
a0=r.d
a1=y.w
t.fh(A.F([o.d,A.F([o.gA1(),A.Kj(o,r.d).U()],a1,y.y)],a1,y.v),"recurrenceEvents","Businesses/"+d+"/Workers/"+a0+"/PublicData",a4)}}else if(d.y!=null&&a1!=null){e=A.u("dd-MM-yyyy",null).t(a1)
a0=$.b7
r=r.d
a1=d.d
a1===$&&A.b()
t.hY("recurrenceEvents",a1+"."+d.gA1()+".RE.EDA."+e,"Businesses/"+a0+"/Workers/"+r+"/PublicData",a4,"")}if(o.y!=null&&!q.ay){d=$.b7
t.hY(q.d,"hasRecurrenceEvents","Businesses/"+d+"/Workers",a4,!0)}v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$$1,w)},
$S:38}
B.aTE.prototype={
$1(d){var x,w,v
if(d.gdU(d)){x=this.a
w=d.bz(0)
w.toString
v=this.b.gnT()
x.rx.Na(w,x,A.u("MM-yyyy",null).t(v))}},
$S:23}
B.aTF.prototype={
$1(d){var x
if(d.gdU(d)&&d.bz(0)!=null){x=d.bz(0)
x.toString
this.a.bf.Ni(x,this.b.d)}},
$S:23}
B.aTH.prototype={
$1(d){var x
if(d)return!0
else{x=this.a.a
if(x.a!==0)return x
else return!1}},
$S:1000};(function inheritance(){var x=a.mixin,w=a.inherit,v=a.inheritMany
w(B.ay0,A.tQ)
w(B.aTw,B.ay0)
w(B.aTx,A.a0)
v(A.bH,[B.aTy,B.aTC,B.aTD,B.aTG,B.aTE,B.aTF,B.aTH])
w(B.ay1,B.aTw)
w(B.aTB,B.ay1)
x(B.ay0,A.qe)
x(B.ay1,A.pT)})()
var y={f:A.x("A"),y:A.x("Y<l,@>"),v:A.x("Y<l,Y<l,@>>"),F:A.x("aK"),w:A.x("l"),e:A.x("I"),b:A.x("@"),o:A.x("vG?")};(function lazyInitializers(){var x=a.lazyFinal
x($,"d5s","czI",()=>{var w,v="[DEFAULT]",u=A.wd(A.oM(v)),t=u.e
if(t==null){t=u.d
w=$.jH
if(w==null)w=$.jH=A.ug(null,null)
t=u.e=w.q_(u.c,t)
u=t}else u=t
return new B.aTx(new B.aTB(A.mD(u.iA(0,null)),A.tP(A.oM(v))))})})()}
$__dart_deferred_initializers__["FYysfPxoFpo9NhePEUfGPLOPYmY="] = $__dart_deferred_initializers__.current
