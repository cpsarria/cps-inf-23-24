(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[615],{8343:function(n,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/classificacio",function(){return a(108)}])},9117:function(n,e,a){"use strict";var t=a(5893),s=(a(7294),a(1590)),r={maintainAspectRatio:!0,scales:{x:{grid:{display:!1}},y:{grid:{borderDash:[3,3]}}},plugins:{legend:{display:!1}}},i={maintainAspectRatio:!0,scales:{x:{grid:{display:!1}},y:{grid:{borderDash:[3,3]},reverse:!0}},plugins:{legend:{display:!1}}};e.Z=function(n){return console.log(n.data),0===n.data.datasets.length?null:(0,t.jsx)(s.x1,{data:n.data,options:n.reverse?i:r})}},682:function(n,e,a){"use strict";a.d(e,{_:function(){return o}});var t=a(5893),s=(a(7294),a(8527)),r=a(9876),i=a(1664),o=function(n){var e,a=n.codgroup,o=n.jornada,d=n.maxJornada,c=n.pathurl,x=(e="string"===typeof o?parseInt(o):o)-1,l=e+1;return(0,t.jsx)(s.M5,{w:"100%",children:(0,t.jsx)(s.xu,{maxW:{base:"sm",md:"95%"},w:{base:"sm",md:"95%"},children:(0,t.jsxs)(s.kC,{p:3,h:"50px",mx:"auto",mb:2,shadow:"lg",rounded:"lg",overflow:"hidden",children:[x>0&&(0,t.jsx)(i.default,{href:"".concat(c,"?j=").concat(x,"&id=").concat(a),passHref:!0,children:(0,t.jsx)(s.xu,{w:.1,d:{base:"block",md:"flex"},children:(0,t.jsx)(r.Y4,{w:6,h:6,pt:0,pr:2})})})||(0,t.jsx)(s.xu,{w:.1,d:{base:"block",md:"flex"}}),(0,t.jsxs)(s.xu,{w:.8,textAlign:"center",d:{base:"block",md:"block"},children:["Jornada ",e]}),l<=d&&(0,t.jsx)(i.default,{href:"".concat(c,"?j=").concat(l,"&id=").concat(a),passHref:!0,children:(0,t.jsx)(s.xu,{w:.1,d:{base:"block",md:"block"},textAlign:"right",children:(0,t.jsx)(r.LZ,{w:6,h:6,pt:0,pl:2})})})||(0,t.jsx)(s.xu,{w:.1,d:{base:"block",md:"flex"}})]})})})}},108:function(n,e,a){"use strict";a.r(e);var t=a(5893),s=a(7294),r=a(949),i=a(8527),o=a(1664),d=a(1338),c=a(2980),x=a(9175),l=a(9117),u=a(682),p=a(2064),f=a(4276),j=a(1163),h=a(4916),m=a(4297),g=a(9649);e.default=function(){var n=(0,r.ff)("taula.100","taula.900"),e=(0,j.useRouter)().query.id,a=(0,s.useState)({obj:null,error:null}),b=a[0],w=a[1];(0,s.useEffect)((function(){e&&(0,h.fetcher)("/data/classificacio/".concat(e,".json"),w)}),[e]);var v=b.obj,_=b.error;if(!b||!v)return(0,t.jsx)(m.g,{});if(b&&_)return(0,t.jsx)(g.j,{error:_});var k=v.dataAcumulada,y=v.dataPosicio,A=v.codgroup,C=v.menuFollowTeams,q=v.jornada,N=v.maxjornada,P=v.codequip,E=v.data,W=(0,p.mainMenu)(A,C);return(0,t.jsxs)(i.xu,{className:"container",children:[(0,t.jsx)(f.w,{navMenu:W}),(0,t.jsx)(i.xu,{pt:2,fontSize:"3xl",children:"CLASSIFICACI\xd3"}),(0,t.jsx)(u._,{jornada:q,maxJornada:N,codgroup:A,pathurl:"/classificacio-jornada"}),(0,t.jsx)(x.w,{striped:!0,codequip:P,data:E,keys:["posicio","nom","partits","punts","diff_gols"],labels:{posicio:"P",nom:"Nom",partits:"Partits",punts:"Punts",diff_gols:"Diff Gols"},keyFunc:"codequip",tableProps:{td:{color:n,maxWidth:["150px","xl","100px"]},thead:{fontStyle:"bold"}},mapper:{posicio:[function(n){return(0,t.jsx)(i.xv,{children:n.posicio})},{w:"30px",p:"10px",textAlign:"center",maxW:"10px"}],nom:[function(n){return(0,t.jsx)(i.xv,{children:n.codequip>0?(0,t.jsx)(o.default,{href:"/equip?id=".concat(n.codequip),children:n.nom}):n.nom})},{p:"10px"}],partits:[function(n){return(0,t.jsx)(i.xv,{children:n.partits})},{w:"30px",p:"10px",textAlign:"center",maxW:"10px"}],punts:[function(n){return(0,t.jsx)(i.xv,{children:n.punts})},{w:"30px",p:"10px",textAlign:"center",maxW:"10px"}],diff_gols:[function(n){return(0,t.jsx)(i.xv,{children:n.diff_gols})},{w:"30px",p:"10px",textAlign:"center",maxW:"10px"}]}}),(0,t.jsx)(d.C,{desktop:"20px"}),(0,t.jsx)(i.xu,{padding:["10px 10%","10px 10%","10px 25%"],children:(0,t.jsx)(l.Z,{data:y,reverse:!0})}),(0,t.jsx)(d.C,{desktop:"35px"}),(0,t.jsx)(i.xu,{padding:["10px 10%","10px 10%","10px 25%"],children:(0,t.jsx)(l.Z,{data:k})}),(0,t.jsx)(d.C,{desktop:"35px"}),(0,t.jsx)(c.Z,{})]})}}},function(n){n.O(0,[757,414,100,658,289,693,774,888,179],(function(){return e=8343,n(n.s=e);var e}));var e=n.O();_N_E=e}]);