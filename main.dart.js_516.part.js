((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_516",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,E,B={Hx:function Hx(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},bh_:function bh_(d){this.a=d},bh0:function bh0(d,e,f){this.a=d
this.b=e
this.c=f},bh1:function bh1(d){this.a=d},bh2:function bh2(d,e){this.a=d
this.b=e},apJ:function apJ(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.w=h
_.x=i
_.y=j
_.z=k
_.a=l},bgZ:function bgZ(d){this.a=d},bgY:function bgY(d,e){this.a=d
this.b=e},bgX:function bgX(d){this.a=d},apM:function apM(d,e,f,g,h,i,j){var _=this
_.d=d
_.e=e
_.f=f
_.r=g
_.w=h
_.x=i
_.a=j},a5n:function a5n(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},bR4:function bR4(d){this.a=d},bR3:function bR3(d,e){this.a=d
this.b=e},bR2:function bR2(d){this.a=d}},D
A=c[0]
C=c[2]
E=c[225]
B=a.updateHolder(c[204],B)
D=c[402]
B.Hx.prototype={
Cb(d){return this.bxx(d)},
bxx(d){var x=0,w=A.j(y.A),v,u=this,t,s,r,q,p,o
var $async$Cb=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:if(d.aH.a===0||u.b){t=A.d(d.go?"doCancelSigning":"areYouSure",!1)
s=d.gDQ()
r=A.M(t,"EVENTNAME",s)+" ?"}else if(u.a)r=d.gmj()?A.d("thisBookingWithDepositSureDeletionWorker",!1):A.d("thisBookingWithPaidPaymentDeletionWorker",!1)
else r=d.gmj()?A.d("thisBookingWithDepositSureDeletionUser",!1):A.d("thisBookingWithPaidPaymentDeletionUser",!1)
t=u.f
s=t!=null
q=s?t.fr:null
if(s)if(t.at!==0){if(!u.a)if(d.RG===C.ae)if(!u.b){t=new A.x(Date.now(),!1).v(0,A.Y(0,0,0,0,t.at,0))
s=d.Q
t=t.a>(s==null?d.ok:s).gbD()}else t=!1
else t=!1
else t=!1
p=t}else p=!1
else p=!1
t=u.e
if(t==null)t=d.r!=null||d.w!=null?D.hc:D.hb
o=new A.P(t,$.an(),y.C)
if(d.go)t="cancelSigning"
else if(d.w!=null||d.r!=null)t="recurringBooking"
else t=u.b?"deleteBooking2":"deleteBooking"
t=A.d(t,!0)
if(d.gmj())d.gvy()
else d.gnU()
if(p)s="askForConfirmation"
else if(d.go)s="cancel"
else s=u.b?"delete":"cancel"
s=A.d(s,!0)
x=3
return A.c(A.jY(A.d(u.b?"cancel":"exit",!0),new B.apJ(p,q,r,d,u.a,u.c,u.r,o,null),u.d,s,new B.bh_(u),new B.bh0(u,p,o),!1,t),$async$Cb)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Cb,w)},
a_1(d){return this.bxD(d)},
bxD(d){var x=0,w=A.j(y.A),v,u=this,t,s,r,q,p,o
var $async$a_1=A.e(function(e,f){if(e===1)return A.f(f,w)
while(true)switch(x){case 0:o=u.e
if(o==null)o=d.r!=null||d.fy!=null?D.hc:D.hb
t=new A.P(o,$.an(),y.C)
o=u.b
s=A.d(o?"deletingEvent":"cancellingEvent",!0)
r=d.gbSe()
q=d.gbSd()
p=A.d(o?"delete":"cancel",!0)
x=3
return A.c(A.jY(A.d(o?"cancel":"exit",!0),new B.apM(d,q,r,u.a,u.r,t,null),u.d,p,new B.bh1(u),new B.bh2(u,t),!1,s),$async$a_1)
case 3:v=f
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_1,w)}}
B.apJ.prototype={
n(d){var x,w=this,v=null,u="AMOUNT",t=w.f,s=t.aH.a,r=w.e
if(C.i.u(r,u)){x=A.E(r.split(u)[0],v,!1,!1,v,!1,!1,v,!1,!1,!1,1,v,!1,16,v,"")
r=A.hT(C.dk,A.a([x,A.E(t.gmj()?t.gvy().l(0):t.gnU().l(0),v,!1,!1,v,!1,!0,v,!1,!1,!1,1,v,!1,16,v,""),A.E(r.split(u)[1],C.m,!1,!1,v,!1,!1,v,!1,!1,!1,1,v,!1,16,v,"")],y.u),C.bx,C.aN,0,0)}else r=A.E(r,C.m,!1,!1,v,!1,!1,v,!1,!1,!1,1,v,!1,16,v,"")
if(t.w!=null||t.r!=null)if(w.w){s=t.r
s=s==null?v:s.gfc()
s=new B.a5n(w.y,s,w.z,v)}else s=A.E(A.d("recurrenceDeleteExplainUser",!1),C.m,!1,!1,v,!1,!1,v,!1,!1,!1,1,v,!1,13,v,"")
else s=t.grd()>1&&w.w&&s===0&&w.x?w.bOD(w.z):new A.m(v,v,v,v)
if(w.c){x=w.d
x=new A.a9(C.iF,A.hb(!1,v,!0,!1,!1,!0,!1,14,x==null?A.d("needConfirmationToDelete",!1):x),v)}else x=new A.m(v,v,v,v)
t=t.gajY()>1&&w.w&&t.aH.a!==0?A.aD(A.d("deleteAllTheBookingMakeSure",!1),v,v,v,v,v,A.q(d).p3.z.fv(13),C.m,v,v,v):new A.m(v,v,v,v)
return A.N(A.a([r,new A.m(v,10,v,v),s,x,t],y.u),C.e,C.h,C.d)},
bOD(d){return new A.X(d,new B.bgZ(d),null,null,y.j)}}
B.apM.prototype={
n(d){var x,w,v,u=this,t=null,s=A.d("doCancelTheEvent",!0),r=u.d,q=C.c.l(r.gln())
s=A.E(A.M(s,"COUNTER",q),t,!1,!1,t,!1,!1,t,!1,!1,!1,1,t,!1,16,t,"")
q=u.e
if(q.a>0){x=A.d("eventIncluddeDeposit",!1)
q=q.l(0)
q=new A.a9(C.f3,A.E(A.M(x,"PRICE",q),C.m,!1,!1,t,!1,!1,t,!1,!1,!1,1,t,!1,15,t,""),t)}else q=new A.m(t,t,t,t)
x=u.f
if(x.a>0){w=A.d("eventIncluddePayment",!1)
x=x.l(0)
x=new A.a9(C.f3,A.E(A.M(w,"PRICE",x),C.m,!1,!1,t,!1,!1,t,!1,!1,!1,1,t,!1,15,t,""),t)}else x=new A.m(t,t,t,t)
w=r.r
v=w==null
if((!v||r.fy!=null)&&u.r){r=v?t:w.gfc()
r=new B.a5n(u.w,r,u.x,t)}else r=new A.m(t,t,t,t)
return A.N(A.a([s,new A.m(t,10,t,t),q,x,r],y.u),C.e,C.h,C.d)}}
B.a5n.prototype={
n(d){var x,w=this,v=null,u="dd-MM-yyyy",t=w.c
if(t!=null){t=A.v(u,v).a7(A.v(u,v).t(t),!1,!1)
x=w.d
if(x==null){x=A.a7(0,1,1,0,0,0,0,!1)
if(!A.a0(x))A.A(A.a4(x))
x=new A.x(x,!1)}x=t.aP(0,A.v(u,v).a7(A.v(u,v).t(x),!1,!1))===0
t=x}else t=!1
if(t)w.e.sj(0,D.iE)
return new A.X(w.e,new B.bR4(w),v,v,y.h)}}
var z=a.updateTypes(["~(hJ)","~(hJ?)","fg(B,hJ?,l?)","fg(B,hJ,l?)"])
B.bh_.prototype={
$0(){A.Q(this.a.d,!1).W(null)
return null},
$S:0}
B.bh0.prototype={
$0(){var x=this.b?D.lt:this.c.a
A.Q(this.a.d,!1).W(x)
return null},
$S:0}
B.bh1.prototype={
$0(){A.Q(this.a.d,!1).W(null)
return null},
$S:0}
B.bh2.prototype={
$0(){var x=this.b.a
A.Q(this.a.d,!1).W(x)
return null},
$S:0}
B.bgZ.prototype={
$3(d,e,f){var x=null,w=y.u,v=A.a([],w),u=A.a([D.hb,D.BH],y.r)
C.b.P(u,D.lt)
C.b.p(u,new B.bgY(v,this.a))
return A.ak(x,x,x,A.N(A.a([new A.m($.aj()*0.6,x,A.hb(!1,x,!0,!1,!1,!0,!1,14,A.d("recurrenceDeleteOption",!0)),x),new A.m(x,5,x,x),A.N(v,C.e,C.h,C.d)],w),C.e,C.h,C.d),x,x,0,!1,x,x,x,x,C.nH,!1,x,x,C.hd,x,x,!1,!1,x)},
$S:z+2}
B.bgY.prototype={
$1(d){var x,w,v=null
if(d===D.hb)x="cancelTheWholeBooking"
else{x=D.Ec.h(0,d)
x.toString}x=A.E(A.d(x,!0),v,!1,!1,v,!1,!1,v,!1,!1,!1,0.7,v,!1,13,v,"")
w=this.b
this.a.push(E.aAj(new A.y(5,0,5,0),v,w.a,!1,new B.bgX(w),x,d,y.q))},
$S:z+0}
B.bgX.prototype={
$1(d){var x=this.a
x.sj(0,d)
x.D()},
$S:z+1}
B.bR4.prototype={
$3(d,e,f){var x,w=null,v="dd-MM-yyyy",u=y.u,t=A.a([],u),s=A.a([D.hb,D.hc,D.iE],y.r),r=this.a,q=r.c
if(q!=null){q=A.v(v,w).a7(A.v(v,w).t(q),!1,!1)
x=r.d
if(x==null){x=A.a7(0,1,1,0,0,0,0,!1)
if(!A.a0(x))A.A(A.a4(x))
x=new A.x(x,!1)}x=q.aP(0,A.v(v,w).a7(A.v(v,w).t(x),!1,!1))===0
q=x}else q=!1
if(q)C.b.P(s,D.hc)
C.b.P(s,D.lt)
C.b.p(s,new B.bR3(r,t))
return A.ak(w,w,w,A.N(A.a([new A.m($.aj()*0.6,w,A.hb(!1,w,!0,!1,!1,!0,!1,14,A.d("recurrenceDeleteOption",!0)),w),new A.m(w,5,w,w),A.N(t,C.e,C.h,C.d)],u),C.e,C.h,C.d),w,w,0,!1,w,w,w,w,C.nH,!1,w,w,C.hd,w,w,!1,!1,w)},
$S:z+3}
B.bR3.prototype={
$1(d){var x,w=null,v=D.Ec.h(0,d)
v.toString
v=A.E(A.d(v,!0),w,!1,!1,w,!1,!1,w,!1,!1,!1,0.7,w,!1,13,w,"")
x=this.a
this.b.push(E.aAj(new A.y(5,0,5,0),w,x.e.a,!1,new B.bR2(x),v,d,y.q))},
$S:z+0}
B.bR2.prototype={
$1(d){var x
if(d!=null){x=this.a.e
x.sj(0,d)
x.D()}},
$S:z+1};(function inheritance(){var x=a.inherit,w=a.inheritMany
x(B.Hx,A.af)
w(A.b4,[B.bh_,B.bh0,B.bh1,B.bh2])
w(A.z,[B.apJ,B.apM,B.a5n])
w(A.b3,[B.bgZ,B.bgY,B.bgX,B.bR4,B.bR3,B.bR2])})()
A.aQ(b.typeUniverse,JSON.parse('{"apJ":{"z":[],"l":[]},"apM":{"z":[],"l":[]},"a5n":{"z":[],"l":[]}}'))
var y={q:A.u("hJ"),r:A.u("G<hJ>"),u:A.u("G<l>"),h:A.u("X<hJ>"),j:A.u("X<hJ?>"),C:A.u("P<hJ>"),A:A.u("hJ?")}};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_516",e:"endPart",h:b})})($__dart_deferred_initializers__,"RMfUkJcIfGbZ6dnWIz8rekzoNjQ=");