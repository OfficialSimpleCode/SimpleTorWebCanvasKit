self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var B={
a_V(d){var x=new A.em("","","",$,$,$,!1,$,$,"",-2,1,1,!0,A.n(y.w,y.t))
x.aHX(d,{})
return x},
bz3:function bz3(d,e){this.a=d
this.b=e},
bz2:function bz2(d,e,f){this.a=d
this.b=e
this.c=f},
bz1:function bz1(d,e){this.a=d
this.b=e},
c6_(d,e){var x={}
x.a=!1
C.b.q(d.x,new B.c60(x,e))
return x.a},
c60:function c60(d,e){this.a=d
this.b=e},
cta(d,e){var x={},w=A.n(y.w,y.y)
x.a=e
B.a_V(d.dx).CW.q(0,new B.c4Z(x,w))
return w},
cgt(d,e,f){var x,w={}
w.a=w.b=0
x=e.gad(e)
C.b.q(d,new B.c6Z(w,A.al(x,!0,A.D(x).j("M.E")),f))
return w.b},
HM(d,e,f,a0,a1,a2,a3){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g="HH:mm"
if(d==null)return!1
x=!a0
if(x&&d.z&&B.c6_(d,e.cx)){$.bd().aQ(C.X,"Holiday is free day for this worker -> don't generate times",h,h)
return!1}if(x&&d.apQ(e.cx)){$.bd().aQ(C.X,"This day is closin by the worker",h,h)
return!1}f=A.v(g,h).aq(A.v(g,h).u(f),!1,!1)
w=a0?A.a([A.v(g,h).aq("00:00",!1,!1),A.v(g,h).aq("23:59",!1,!1)],y.A):h
v=A.v("dd-MM-yyyy",h).u(e.cx)
x=w==null
u=x?E.cg2(d.Xk(e.cx)):w
t=B.csp(d,v,a1,a2,a3)
if(x)C.b.ib(u)
C.b.ib(t)
s=B.ctk(t,f)
r=B.a_V(e.dx)
x=r.CW
q=J.aK(x.gdv(x))
p=J.iU(q,y.e)
for(o=0;o<q;++o)p[o]=0
for(n=0;n<u.length;n+=2){m=u[n]
l=u[n+1]
if(m.al(f))break
if(!l.al(f))continue
k=r.a
if(f.t(0,new A.b3(6e7*(k===$?r.a=0:k))).al(l)){$.aO().b=C.Dw
return!1}j=B.cta(e,f)
i=B.cgt(p,j,s)===0
if(!i&&B.cWN(e,f,v,d,j)){$.aO().b=C.kD
return!1}return i}return!1},
cWN(d,e,f,g,h){var x,w,v,u,t={},s=g.R8
if(!s.c.G(0,f))return!1
t.a=A.a([],y.A)
s.c.h(0,f).q(0,new B.c5Z(t))
x=B.ctk(t.a,e)
s=B.a_V(d.dx).CW
w=J.aK(s.gdv(s))
v=J.iU(w,y.e)
for(u=0;u<w;++u)v[u]=0
return B.cgt(v,h,x)!==0},
ctk(d,e){var x,w,v=A.a([],y.A)
for(x=0;x<d.length;x+=2){w=x+1
if(!d[w].ah(e)){v.push(d[x])
v.push(d[w])}}return v},
csp(d,e,f,g,h){var x,w,v="dd-MM-yyyy",u=null,t={},s=A.a([],y.A),r=A.v(v,u).aq(e,!1,!1),q=d.R8
if(q.a.G(0,e)){q=q.a.h(0,e)
q.toString
x=A.D(q).j("aP<1>")
x=A.k9(new A.aP(q,x),new B.c32(s,d,e),x.j("M.E"),y.F)
A.al(x,!0,A.D(x).j("M.E"))}w=A.az(y.w)
if(f&&g!=null&&h!=null)g.gpe().q(0,new B.c33(w,h))
d.bZ.b.q(0,new B.c34(f,g,r,w,s))
if(f&&g!=null&&g.fr===d.d&&g.p4==null){q=g.cx
if(C.c.T(r.dC(A.v(v,u).aq(A.v(v,u).u(q),!1,!1)).a,1e6)===0){q=g.cx
t.a=A.v("HH:mm",u).aq(A.v("HH:mm",u).u(q),!1,!1)
B.a_V(g.dx).CW.q(0,new B.c35(t,s))}}return s},
c4Z:function c4Z(d,e){this.a=d
this.b=e},
c6Z:function c6Z(d,e,f){this.a=d
this.b=e
this.c=f},
c5Z:function c5Z(d){this.a=d},
c32:function c32(d,e,f){this.a=d
this.b=e
this.c=f},
c33:function c33(d,e){this.a=d
this.b=e},
c34:function c34(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c31:function c31(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
c35:function c35(d,e){this.a=d
this.b=e}},A,C,D,J,E
B=a.updateHolder(c[8],B)
A=c[0]
C=c[2]
D=c[204]
J=c[1]
E=c[155]
var z=a.updateTypes([])
B.bz3.prototype={
$2(d,e){A.ua(e.z,new B.bz2(this.a,this.b,e),y.F)},
$S:12}
B.bz2.prototype={
$1(d){var x,w,v=this.c,u=this.b
v.CW.q(0,new B.bz1(this.a,u))
x=v.e
x===$&&A.b()
if(x!=null){w=u.e
w===$&&A.b()
w.a=w.a+x.a
w.b=x.b}x=u.Q
w=v.Q
if(x==="")u.Q=w
else u.Q=x+(" + "+w)
u.y=u.goV()&&v.goV()
u.x=u.gqe()&&v.gqe()
x=v.r
x===$&&A.b()
u.r=x
u.f=u.giM()+v.giM()
u.a=u.gfw()+v.gfw()},
$S:46}
B.bz1.prototype={
$2(d,e){var x=this.a
this.b.CW.i(0,""+x.a,e);++x.a},
$S:34}
B.c60.prototype={
$1(d){var x,w,v=A.v("dd-MM-yyyy",null).u(this.b)
switch(d.a){case 1:x=C.d.ar(v,0,v.length-4)
w=this.a
w.a=w.a||D.SQ.G(0,x+"0000")
return
default:x=this.a
x.a=x.a||D.lf.h(0,d).G(0,v)
return}},
$S:202}
B.c4Z.prototype={
$2(d,e){var x=this.a,w=x.a.t(0,A.Z(0,0,0,0,e.b,0))
x.a=w
this.b.i(0,d,A.G(["start",w,"duration",A.Z(0,0,0,0,e.a,0)],y.w,y.b))
x.a=x.a.t(0,A.Z(0,0,0,0,e.a,0))},
$S:34}
B.c6Z.prototype={
$1(d){var x,w,v,u,t,s=this.b,r=this.a,q=J.a_(s[r.a],"start"),p=q.t(0,J.a_(s[r.a],"duration"))
for(s=this.c,x=s.length;d<x;d+=2){w=d+1
if(w>=x)break
v=s[d]
w=s[w]
u=A.xG(v,w,q,p)
if(u==="STRIKE"){t=C.c.T(w.dC(q).a,6e7)
r.b=Math.max(r.b,t)
break}if(u==="BEFORE")break}++r.a},
$S:19}
B.c5Z.prototype={
$2(d,e){var x,w,v,u,t,s
try{x=A.v("HH:mm",null).aq(d,!1,!1)
w=J.dD(x,A.Z(0,0,0,0,J.a_(e,1),0))
t=this.a
t.a=C.b.a8(t.a,A.a([x,w],y.A))}catch(s){v=A.ao(s)
u="Error while creating the during payment list, iilegal list"
$.bd().aQ(C.a1,A.F(u)+" -> "+A.F(e)+"\n"+A.F(v),null,null)}},
$S:294}
B.c32.prototype={
$1(d){var x,w=A.v("HH:mm",null).aq(d,!1,!1),v=this.a
v.push(w)
x=this.b.R8.a.h(0,this.c).h(0,d)
x.toString
v.push(w.t(0,A.Z(0,0,0,0,x,0)))},
$S:57}
B.c33.prototype={
$2(d,e){var x,w,v=A.v("HH:mm",null).aq(d,!1,!1),u=this.b,t=u.gD(),s=u.gN()
u=u.gac()
x=v.gbE()
w=v.gcc()
u=A.ac(t,s,u,x,w,0,0,!1)
if(!A.a6(u))A.z(A.ab(u))
this.a.t(0,new A.A(u,!1).l(0))},
$S:31}
B.c34.prototype={
$2(d,e){var x=this
J.aI(e,new B.c31(x.a,x.b,x.c,x.d,x.e))},
$S:62}
B.c31.prototype={
$2(d,e){var x,w,v,u=this
if(u.a){x=u.b
x=x!=null&&x.p4!=null}else x=!1
if(x){w=A.v("HH:mm",null).aq(d,!1,!1)
if(u.d.v(0,u.c.t(0,A.Z(0,w.gbE(),0,0,w.gcc(),0)).l(0)))return}x=e.fr
if(x==null)return
if(x.k_(u.c)){v=A.v("HH:mm",null).aq(d,!1,!1)
x=u.e
x.push(v)
x.push(v.t(0,A.Z(0,0,0,0,e.at,0)))}},
$S:31}
B.c35.prototype={
$2(d,e){var x,w,v=this.a,u=v.a.t(0,A.Z(0,0,0,0,e.b,0))
v.a=u
x=u.t(0,A.Z(0,0,0,0,e.a,0))
w=this.b
C.b.K(w,v.a)
C.b.K(w,x)
v.a=x},
$S:34};(function inheritance(){var x=a.inheritMany
x(A.c3,[B.bz3,B.bz1,B.c4Z,B.c5Z,B.c33,B.c34,B.c31,B.c35])
x(A.bC,[B.bz2,B.c60,B.c6Z,B.c32])})()
var y={p:A.x("at<l,l>"),A:A.x("C<A>"),x:A.x("C<l>"),y:A.x("W<l,@>"),F:A.x("aA"),w:A.x("l"),t:A.x("hG"),b:A.x("@"),e:A.x("u")};(function constants(){var x=a.makeConstList
D.ak2=A.a(x(["01-01-0000","16-01-0000","20-02-0000","29-05-0000","19-06-0000","04-07-0000","04-09-0000","09-10-0000","11-11-0000","23-11-0000","25-12-0000"]),y.x)
D.SQ=new A.at(11,{"01-01-0000":"New Year's Day","16-01-0000":"Martin Luther King Jr. Day","20-02-0000":"Presidents' Day","29-05-0000":"Memorial Day","19-06-0000":"Juneteenth","04-07-0000":"Independence Day","04-09-0000":"Labor Day","09-10-0000":"Columbus Day","11-11-0000":"Veterans Day","23-11-0000":"Thanksgiving Day","25-12-0000":"Christmas Day"},D.ak2,y.p)
D.ajQ=A.a(x(["06-04-2023","12-04-2023","26-04-2023","26-05-2023","16-09-2023","17-09-2023","25-09-2023","30-09-2023","07-10-2023","23-04-2024","29-04-2024","14-05-2024","12-06-2024","03-10-2024","04-10-2024","12-10-2024","17-10-2024","24-10-2024","13-04-2025","19-04-2025","01-05-2025","02-06-2025","23-09-2025","24-09-2025","02-10-2025","07-10-2025","14-10-2025"]),y.x)
D.ao8=new A.at(27,{"06-04-2023":"Passover (Day 1)","12-04-2023":"Passover (Day 7)","26-04-2023":"Yom HaAtzmaut","26-05-2023":"Shavuot","16-09-2023":"Rosh Hashana","17-09-2023":"Rosh Hashana (Day 2)","25-09-2023":"Yom Kippur","30-09-2023":"Sukkot","07-10-2023":"Simchat Torah","23-04-2024":"Passover (Day 1)","29-04-2024":"Passover (Day 7)","14-05-2024":"Yom HaAtzmaut","12-06-2024":"Shavuot","03-10-2024":"Rosh Hashana","04-10-2024":"Rosh Hashana (Day 2)","12-10-2024":"Yom Kippur","17-10-2024":"Sukkot","24-10-2024":"Simchat Torah","13-04-2025":"Passover (Day 1)","19-04-2025":"Passover (Day 7)","01-05-2025":"Yom HaAtzmaut","02-06-2025":"Shavuot","23-09-2025":"Rosh Hashana","24-09-2025":"Rosh Hashana (Day 2)","02-10-2025":"Yom Kippur","07-10-2025":"Sukkot","14-10-2025":"Simchat Torah"},D.ajQ,y.p)
D.lf=new A.bp([C.yw,D.SQ,C.yx,D.ao8],A.x("bp<m6,W<l,l>>"))})()}
$__dart_deferred_initializers__["+V0wAMMqeh9Jw/qTaULU0l+tuyI="] = $__dart_deferred_initializers__.current
