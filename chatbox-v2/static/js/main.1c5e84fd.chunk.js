(this["webpackJsonpchatbox-v2"]=this["webpackJsonpchatbox-v2"]||[]).push([[0],{22:function(t,e,n){"use strict";n.d(e,"d",(function(){return I})),n.d(e,"c",(function(){return F})),n.d(e,"a",(function(){return R})),n.d(e,"e",(function(){return U})),n.d(e,"f",(function(){return E})),n.d(e,"b",(function(){return z}));var a=n(24),s=n(6),o=n(2),r=n.n(o),i=n(7),c=n(13),h=n(14),u=n(26),l=n(23),p=n(1),d=n.n(p),f=n(41),b=n(9),m=function(){var t=Object(i.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{headers:{"Client-ID":"gp762nuuoqcoxypju8c569th9wz7q5"}});case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(i.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(t){return t.map((function(t,e){return 0===e?"".concat(t," "):"".concat(t," ").concat(e+1,"x")})).join(", ")},j=n(0),x=function(t){var e,n=Object(p.useContext)(I),a=Object(p.useContext)(R);if(!(null===n||void 0===n?void 0:n.showBadges))return null;var o,r=null!==(e=t.badges)&&void 0!==e?e:"",i=[],c=Object(s.a)(r.split(","));try{for(c.s();!(o=c.n()).done;){var h=o.value,u=a.get(h);u&&i.push(Object(j.jsx)("img",{className:"badge",alt:"",srcSet:g(u),src:u[0]},h))}}catch(l){c.e(l)}finally{c.f()}return Object(j.jsx)(j.Fragment,{children:i})},C=n(29),w=function(t){var e,n=t.text,a=null!==(e=t.emotes)&&void 0!==e?e:"",o=!1;/^\x01ACTION.*\x01$/.test(n)&&(o=!0,n=n.replace(/^\x01ACTION/,"").replace(/\x01$/,"").trim());var r,i=[],c=Object(s.a)(a.split("/"));try{for(c.s();!(r=c.n()).done;){var h=r.value;if(h){var u,l=h.split(":"),d=Object(C.a)(l,2),f=d[0],b=d[1],m=Object(s.a)(b.split(","));try{for(m.s();!(u=m.n()).done;){var v=u.value.split("-"),x=Object(C.a)(v,2),w=x[0],O=x[1];i.push({id:f,urls:["https://static-cdn.jtvnw.net/emoticons/v2/".concat(f,"/default/dark/1.0"),"https://static-cdn.jtvnw.net/emoticons/v2/".concat(f,"/default/dark/2.0"),"https://static-cdn.jtvnw.net/emoticons/v2/".concat(f,"/default/dark/3.0")],start:Math.max(+w,0),end:Math.min(+O+1,n.length)})}}catch(z){m.e(z)}finally{m.f()}}}}catch(z){c.e(z)}finally{c.f()}var y=Object(p.useContext)(U),k=-1,S=0;do{-1===(S=n.indexOf(" ",k+1))&&(S=n.length);var M=n.slice(k+1,S),A=y.get(M);A&&i.push({id:M,urls:A,start:Math.max(k+1,0),end:Math.min(S,n.length)})}while(-1!==(k=n.indexOf(" ",S)));i.sort((function(t,e){return t.start-e.start}));for(var N=0,_=[],B=0,L=i;B<L.length;B++){var V=L[B];_.push(n.slice(N,V.start)),_.push({id:V.id,urls:V.urls,key:"".concat(V.start,"-").concat(V.end)}),N=V.end}_.push(n.substr(N,n.length-N));for(var H=[],I=0,F=_;I<F.length;I++){var R=F[I];if("string"!==typeof R){var E=R;H.push(Object(j.jsx)("img",{className:"emote",alt:R.id,srcSet:g(E.urls),src:E.urls[0]},R.key))}else H.push(R)}return Object(j.jsx)("span",{className:"message-content "+(o?"me":""),children:H})},O=function(t){var e=Object(p.useContext)(I),n=Object(p.useContext)(E);if(!(null===e||void 0===e?void 0:e.showPronouns))return null;var a,s="",o=null===n||void 0===n?void 0:n.userMap.get(t.nick);o?s=null!==(a=null===n||void 0===n?void 0:n.displayMap.get(o.pronoun))&&void 0!==a?a:"":null===n||void 0===n||n.fetchPronouns(t.nick);return s?Object(j.jsx)("span",{className:"pronouns",children:s}):null},y=function(t){var e,n,a,s=null!==(e=Object(p.useContext)(I))&&void 0!==e?e:b.a,o=Object(p.useContext)(F),r=t.message,i=null===(n=r.prefix)||void 0===n?void 0:n.split("@")[0].split("!")[0];if(null===s||void 0===s?void 0:s.blockedUsers.includes(i.toLowerCase()))return null;if((null===s||void 0===s?void 0:s.hideCommands)&&r.params[1].startsWith("!"))return null;var c=null!==(a=r.tags["display-name"])&&void 0!==a?a:i,h="inherit";return(null===s||void 0===s?void 0:s.showUserColours)&&(h=o.process(r.tags.color?r.tags.color:b.b[c.toLowerCase().charCodeAt(0)%15])),Object(j.jsxs)("p",{className:"message",children:[Object(j.jsx)(x,{badges:r.tags.badges}),Object(j.jsx)(O,{nick:i}),Object(j.jsx)("span",{className:"nick",style:{color:h},children:c}),Object(j.jsx)(w,{text:r.params[1],emotes:r.tags.emotes})]})};n(67);function k(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function S(t){return t<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function M(t){return t<=.0031308?12.92*t:Math.pow(1.055*t,1/2.4)-.055}var A={_canvas:null,_context:null,CVDMatrix:{protanope:[0,2.02344,-2.52581,0,1,0,0,0,1],deuteranope:[1,0,0,.494207,0,1.24827,0,0,1],tritanope:[1,0,0,0,1,0,-.395913,.801109,0]}},N=A.RGBA=function(t,e,n,a){this.r=t||0,this.g=e||0,this.b=n||0,this.a=a||0},_=A.HSVA=function(t,e,n,a){this.h=t||0,this.s=e||0,this.v=n||0,this.a=a||0},B=A.HSLA=function(t,e,n,a){this.h=t||0,this.s=e||0,this.l=n||0,this.a=a||0},L=A.XYZA=function(t,e,n,a){this.x=t||0,this.y=e||0,this.z=n||0,this.a=a||0},V=A.LUVA=function(t,e,n,a){this.l=t||0,this.u=e||0,this.v=n||0,this.a=a||0};N.prototype.eq=function(t){return t.r===this.r&&t.g===this.g&&t.b===this.b&&t.a===this.a},N.fromName=function(t){var e=A._context;if(!e){var n=A._canvas=document.createElement("canvas");e=A._context=n.getContext("2d")}e.clearRect(0,0,1,1),e.fillStyle=t,e.fillRect(0,0,1,1);var a=e.getImageData(0,0,1,1);return a&&a.data&&4===a.data.length?new N(a.data[0],a.data[1],a.data[2],a.data[3]/255):null},N.fromCSS=function(t){if(!t)return null;if("#"===(t=t.trim()).charAt(0))return N.fromHex(t);var e=/rgba?\( *(\d+%?) *, *(\d+%?) *, *(\d+%?) *(?:, *([\d.]+))?\)/i.exec(t);if(e){var n=e[1],a=e[2],s=e[3],o=e[4];return n="%"===n.charAt(n.length-1)?parseInt(n,10)/100*255:parseInt(n,10),a="%"===a.charAt(a.length-1)?parseInt(a,10)/100*255:parseInt(a,10),s="%"===s.charAt(s.length-1)?parseInt(s,10)/100*255:parseInt(s,10),o=o?"%"===o.charAt(o.length-1)?parseInt(o,10)/100:parseFloat(o):1,new N(Math.min(Math.max(0,n),255),Math.min(Math.max(0,a),255),Math.min(Math.max(0,s),255),Math.min(Math.max(0,o),1))}return N.fromName(t)},N.fromHex=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if("#"===t.charAt(0)&&(t=t.slice(1)),3===t.length?t="".concat(t[0]).concat(t[0]).concat(t[1]).concat(t[1]).concat(t[2]).concat(t[2]):4===t.length&&(t="".concat(t[0]).concat(t[0]).concat(t[1]).concat(t[1]).concat(t[2]).concat(t[2]).concat(t[3]).concat(t[3])),8===t.length)e=parseInt(t.slice(6),16)/255,t=t.slice(0,6);else if(6!==t.length)throw new Error("invalid hex code");var n=parseInt(t,16);return new N(n>>16,n>>8&255,255&n,e)},N.fromHSVA=function(t,e,n,a){var s,o,r,i=Math.floor(6*t),c=6*t-i,h=n*(1-e),u=n*(1-c*e),l=n*(1-(1-c)*e);switch(i%6){case 0:s=n,o=l,r=h;break;case 1:s=u,o=n,r=h;break;case 2:s=h,o=n,r=l;break;case 3:s=h,o=u,r=n;break;case 4:s=l,o=h,r=n;break;case 5:s=n,o=h,r=u}return new N(Math.round(Math.min(Math.max(0,255*s),255)),Math.round(Math.min(Math.max(0,255*o),255)),Math.round(Math.min(Math.max(0,255*r),255)),void 0===a?1:a)},N.fromXYZA=function(t,e,n,a){var s=3.240479*t-1.53715*e-.498535*n,o=-.969256*t+1.875992*e+.041556*n,r=.055648*t-.204043*e+1.057311*n;return new N(Math.max(0,Math.min(255,255*M(s))),Math.max(0,Math.min(255,255*M(o))),Math.max(0,Math.min(255,255*M(r))),void 0===a?1:a)},N.fromHSLA=function(t,e,n,a){if(0===e){var s=Math.round(Math.min(Math.max(0,255*n),255));return new N(s,s,s,void 0===a?1:a)}var o=n<.5?n*(1+e):n+e-n*e,r=2*n-o;return new N(Math.round(Math.min(Math.max(0,255*k(r,o,t+1/3)),255)),Math.round(Math.min(Math.max(0,255*k(r,o,t)),255)),Math.round(Math.min(Math.max(0,255*k(r,o,t-1/3)),255)),void 0===a?1:a)},N.prototype.toRGBA=function(){return this},N.prototype.toHSVA=function(){return _.fromRGBA(this.r,this.g,this.b,this.a)},N.prototype.toHSLA=function(){return B.fromRGBA(this.r,this.g,this.b,this.a)},N.prototype.toCSS=function(){return"rgb".concat(1!==this.a?"a":"","(").concat(Math.round(this.r),",").concat(Math.round(this.g),",").concat(Math.round(this.b)).concat(1!==this.a?",".concat(this.a):"",")")},N.prototype.toXYZA=function(){return L.fromRGBA(this.r,this.g,this.b,this.a)},N.prototype.toLUVA=function(){return this.toXYZA().toLUVA()},N.prototype.toHex=function(){var t=this.b|this.g<<8|this.r<<16;return"#".concat((16777216+t).toString(16).slice(1))},N.prototype.get_Y=function(){return(.299*this.r+.587*this.g+.114*this.b)/255},N.prototype.luminance=function(){return.2126*S(this.r/255)+.7152*S(this.g/255)+.0722*S(this.b/255)},N.prototype.brighten=function(t){return t="number"===typeof t?t:1,t=Math.round(t/100*255),new N(Math.max(0,Math.min(255,this.r+t)),Math.max(0,Math.min(255,this.g+t)),Math.max(0,Math.min(255,this.b+t)),this.a)},N.prototype.daltonize=function(t){var e;if("string"===typeof t){if(!A.CVDMatrix.hasOwnProperty(t))throw new Error("Invalid CVD matrix");e=A.CVDMatrix[t]}else e=t;var n=e[0],a=e[1],s=e[2],o=e[3],r=e[4],i=e[5],c=e[6],h=e[7],u=e[8],l=17.8824*this.r+43.5161*this.g+4.11935*this.b,p=3.45565*this.r+27.1554*this.g+3.86714*this.b,d=.0299566*this.r+.184309*this.g+1.46709*this.b,f=n*l+a*p+s*d,b=o*l+r*p+i*d,m=c*l+h*p+u*d,v=.0809444479*f+-.130504409*b+.116721066*m,g=-.0102485335*f+.0540193266*b+-.113614708*m,j=-.000365296938*f+-.00412161469*b+.693511405*m,x=0*(v=this.r-v)+0*(g=this.g-g)+0*(j=this.b-j),C=.7*v+1*g+0*j,w=.7*v+0*g+1*j;return v=Math.min(Math.max(0,x+this.r),255),g=Math.min(Math.max(0,C+this.g),255),j=Math.min(Math.max(0,w+this.b),255),new N(v,g,j,this.a)},N.prototype._r=function(t){return new N(t,this.g,this.b,this.a)},N.prototype._g=function(t){return new N(this.r,t,this.b,this.a)},N.prototype._b=function(t){return new N(this.r,this.g,t,this.a)},N.prototype._a=function(t){return new N(this.r,this.g,this.b,t)},B.prototype.eq=function(t){return t.h===this.h&&t.s===this.s&&t.l===this.l&&t.a===this.a},B.fromRGBA=function(t,e,n,a){t/=255,e/=255,n/=255;var s,o,r=Math.max(t,e,n),i=Math.min(t,e,n),c=Math.min(Math.max(0,(r+i)/2),1),h=Math.min(Math.max(0,r-i),1);if(0===h)s=o=0;else{switch(o=c>.5?h/(2-r-i):h/(r+i),r){case t:s=(e-n)/h+(e<n?6:0);break;case e:s=(n-t)/h+2;break;case n:s=(t-e)/h+4}s/=6}return new B(s,o,c,void 0===a?1:a)},B.prototype.targetLuminance=function(t){var e=this.s,n=0,a=1;e*=Math.pow(this.l>.5?-this.l:this.l-1,7)+1;for(var s=(a-n)/2,o=n+s;s>1/65536;o=n+(s/=2)){N.fromHSLA(this.h,e,o,1).luminance()>t?a=o:n=o}return new B(this.h,e,o,this.a)},B.prototype.toRGBA=function(){return N.fromHSLA(this.h,this.s,this.l,this.a)},B.prototype.toCSS=function(){return"hsl".concat(1!==this.a?"a":"","(").concat(Math.round(360*this.h),",").concat(Math.round(100*this.s),"%,").concat(Math.round(100*this.l),"%").concat(1!==this.a?",".concat(this.a):"",")")},B.prototype.toHSLA=function(){return this},B.prototype.toHSVA=function(){return this.toRGBA().toHSVA()},B.prototype.toXYZA=function(){return this.toRGBA().toXYZA()},B.prototype.toLUVA=function(){return this.toRGBA().toLUVA()},B.prototype._h=function(t){return new B(t,this.s,this.l,this.a)},B.prototype._s=function(t){return new B(this.h,t,this.l,this.a)},B.prototype._l=function(t){return new B(this.h,this.s,t,this.a)},B.prototype._a=function(t){return new B(this.h,this.s,this.l,t)},_.prototype.eq=function(t){return t.h===this.h&&t.s===this.s&&t.v===this.v&&t.a===this.a},_.fromRGBA=function(t,e,n,a){t/=255,e/=255,n/=255;var s,o=Math.max(t,e,n),r=Math.min(t,e,n),i=Math.min(Math.max(0,o-r),1),c=0===o?0:i/o,h=o;if(0===i)s=0;else{switch(o){case t:s=(e-n)/i+(e<n?6:0);break;case e:s=(n-t)/i+2;break;case n:s=(t-e)/i+4}s/=6}return new _(s,c,h,void 0===a?1:a)},_.prototype.toRGBA=function(){return N.fromHSVA(this.h,this.s,this.v,this.a)},_.prototype.toHSVA=function(){return this},_.prototype.toHSLA=function(){return this.toRGBA().toHSLA()},_.prototype.toXYZA=function(){return this.toRGBA().toXYZA()},_.prototype.toLUVA=function(){return this.toRGBA().toLUVA()},_.prototype._h=function(t){return new _(t,this.s,this.v,this.a)},_.prototype._s=function(t){return new _(this.h,t,this.v,this.a)},_.prototype._v=function(t){return new _(this.h,this.s,t,this.a)},_.prototype._a=function(t){return new _(this.h,this.s,this.v,t)},L.prototype.eq=function(t){return t.x===this.x&&t.y===this.y&&t.z===this.z},L.fromRGBA=function(t,e,n,a){var s=S(t/255),o=S(e/255),r=S(n/255);return new L(.412453*s+.35758*o+.180423*r,.212671*s+.71516*o+.072169*r,.019334*s+.119193*o+.950227*r,void 0===a?1:a)},L.fromLUVA=function(t,e,n,a){var s=1/(L.WHITE.x+15*L.WHITE.y+3*L.WHITE.z),o=4*L.WHITE.x*s,r=9*L.WHITE.y*s,i=t>8?Math.pow((t+16)/116,3):t/L.KAPPA,c=1/3*(52*t/(e+13*t*o)-1),h=-5*i,u=(i*(39*t/(n+13*t*r)-5)-h)/(c- -1/3);return new L(u,i,u*c+h,void 0===a?1:a)},L.prototype.toRGBA=function(){return N.fromXYZA(this.x,this.y,this.z,this.a)},L.prototype.toLUVA=function(){return V.fromXYZA(this.x,this.y,this.z,this.a)},L.prototype.toHSLA=function(){return this.toRGBA().toHSLA()},L.prototype.toHSVA=function(){return this.toRGBA().toHSVA()},L.prototype.toXYZA=function(){return this},L.prototype._x=function(t){return new L(t,this.y,this.z,this.a)},L.prototype._y=function(t){return new L(this.x,t,this.z,this.a)},L.prototype._z=function(t){return new L(this.x,this.y,t,this.a)},L.prototype._a=function(t){return new L(this.x,this.y,this.z,t)},L.EPSILON=Math.pow(6/29,3),L.KAPPA=Math.pow(29/3,3),L.WHITE=new N(255,255,255,1).toXYZA(),V.prototype.eq=function(t){return t.l===this.l&&t.u===this.u&&t.v===this.v},V.fromXYZA=function(t,e,n,a){var s=1/(L.WHITE.x+15*L.WHITE.y+3*L.WHITE.z),o=4*L.WHITE.x*s,r=9*L.WHITE.y*s,i=e/L.WHITE.y,c=t+15*e+3*n;0===c&&(c=1);var h=1/c,u=4*t*h,l=9*e*h,p=i>L.EPSILON?116*Math.pow(i,1/3)-16:L.KAPPA*i;return new V(p,13*p*(u-o),13*p*(l-r),void 0===a?1:a)},V.prototype.toXYZA=function(){return L.fromLUVA(this.l,this.u,this.v,this.a)},V.prototype.toRGBA=function(){return this.toXYZA().toRGBA()},V.prototype.toHSLA=function(){return this.toXYZA().toHSLA()},V.prototype.toHSVA=function(){return this.toXYZA().toHSVA()},V.prototype.toLUVA=function(){return this},V.prototype._l=function(t){return new V(t,this.u,this.v,this.a)},V.prototype._u=function(t){return new V(this.l,t,this.v,this.a)},V.prototype._v=function(t){return new V(this.l,this.u,t,this.a)},V.prototype._a=function(t){return new V(this.l,this.u,this.v,t)};var H=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"#232323",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4.5;Object(c.a)(this,t),this._contrast=a,this._base=e,this._mode=n,this.rebuildContrast()}return Object(h.a)(t,[{key:"contrast",get:function(){return this._contrast},set:function(t){this._contrast=t,this.rebuildContrast()}},{key:"base",get:function(){return this._base},set:function(t){this._base=t,this.rebuildContrast()}},{key:"dark",get:function(){return this._dark}},{key:"mode",get:function(){return this._mode},set:function(t){this._mode=t,this.rebuildContrast()}},{key:"rebuildContrast",value:function(){this._cache=new Map;var t=N.fromCSS(this._base),e=t.luminance();(this._dark=e<.33)?(this._luv=new L(0,this._contrast*(t.toXYZA().y+.05)-.05,0,1).toLUVA().l,this._luma=this._contrast*(t.luminance()+.05)-.05):(this._luv=new L(0,(t.toXYZA().y+.05)/this._contrast-.05,0,1).toLUVA().l,this._luma=(t.luminance()+.05)/this._contrast-.05)}},{key:"process",value:function(t){var e,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(-1===this._mode)return"";if(0===this._mode)return t;if(t instanceof N&&(t=t.toCSS()),!t)return null;if(this._cache.has(t))return this._cache.get(t);try{e=N.fromCSS(t)}catch(h){if(n)throw h;return null}if(1===this._mode){var a=e.luminance();(this._dark?a<this._luma:a>this._luma)&&(e=e.toHSLA().targetLuminance(this._luma).toRGBA())}else if(2===this._mode){var s=e.toLUVA();(this._dark?s.l<this._luv:s.l>this._luv)&&(e=s._l(this._luv).toRGBA())}else if(3===this._mode)if(this._dark)for(;e.get_Y()<.5;){var o=e.toHSLA();e=o._l(Math.min(Math.max(0,.1+.9*o.l),1)).toRGBA()}else for(;e.get_Y()>=.5;){var r=e.toHSLA();e=r._l(Math.min(Math.max(0,.9*r.l),1)).toRGBA()}else if(4===this._mode){var i=0;if(this._dark)for(;e.luminance()<.15&&i++<127;)e=e.brighten();else for(;e.luminance()>.3&&i++<127;)e=e.brighten(-1)}var c=e.toCSS();return this._cache.set(t,c),c}}]),t}(),I=d.a.createContext(null),F=d.a.createContext(new H),R=d.a.createContext(new Map),U=d.a.createContext(new Map),E=d.a.createContext(null),z=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;Object(c.a)(this,n),a=e.call(this,t);var s={connected:!1,messages:[],badges:new Map,emotes:new Map,pronounUsers:new Map,pronounDisplay:new Map,colorAdjuster:new H};return a.state=s,a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(i.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.load();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var t=Object(i.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.props.channelName===e.channelName){t.next=3;break}return t.next=3,this.load();case 3:this.props.readableColours===e.readableColours&&this.props.readableContrast===e.readableContrast&&this.props.readableBackground===e.readableBackground&&this.props.readableMode===e.readableMode||this.setState({colorAdjuster:new H(this.props.readableBackground,this.props.readableColours?this.props.readableMode:0,this.props.readableContrast)});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"load",value:function(){var t=Object(i.a)(r.a.mark((function t(){var e,n,a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.setState({errorMessage:void 0,messages:[],colorAdjuster:new H(this.props.readableBackground,this.props.readableMode,this.props.readableContrast)}),this.props.channelName){t.next=4;break}return this.setState({errorMessage:"No channel specifed!"}),t.abrupt("return");case 4:return this.state.webSocket&&this.state.webSocket.close(),t.next=7,m("https://api.twitch.tv/v5/users?login=".concat(this.props.channelName));case 7:if(n=t.sent,null===(e=n.users)||void 0===e?void 0:e.length){t.next=11;break}return this.setState({errorMessage:"Specified channel doesn't exist!"}),t.abrupt("return");case 11:return this.setState({channelId:n.users[0]._id,channelName:this.props.channelName}),(a=new WebSocket("wss://irc-ws.chat.twitch.tv","irc")).addEventListener("open",this.onSocketOpen.bind(this)),a.addEventListener("close",this.onSocketClose.bind(this)),a.addEventListener("message",this.onSocketMessage.bind(this)),this.setState({webSocket:a}),s=encodeURIComponent(this.state.channelId),t.next=20,Promise.all([this.loadBadges(s),this.loadEmotes(s),this.loadPronouns()]);case 20:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"loadBadges",value:function(){var t=Object(i.a)(r.a.mark((function t(e){var n,a,o,i,c,h,u,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([m("https://badges.twitch.tv/v1/badges/global/display"),m("https://badges.twitch.tv/v1/badges/channels/".concat(e,"/display"))]);case 2:n=t.sent,a=new Map,o=Object(s.a)(n);try{for(o.s();!(i=o.n()).done;)for(u in c=i.value,h=c.badge_sets)for(l in h[u].versions)a.set("".concat(u,"/").concat(l),[h[u].versions[l].image_url_1x,h[u].versions[l].image_url_2x,h[u].versions[l].image_url_4x])}catch(r){o.e(r)}finally{o.f()}console.log("Loaded badges",a),this.setState({badges:a});case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"loadEmotes",value:function(){var t=Object(i.a)(r.a.mark((function t(e){var n,a,o,i,c,h,u,l;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Map,t.next=3,Promise.all([v("https://api.betterttv.net/3/cached/frankerfacez/emotes/global"),v("https://api.betterttv.net/3/cached/frankerfacez/users/twitch/".concat(e)),v("https://api.betterttv.net/3/cached/emotes/global"),v("https://api.betterttv.net/3/cached/users/twitch/".concat(e)),v("https://api.7tv.app/v2/emotes/global"),v("https://api.7tv.app/v2/users/".concat(e,"/emotes"))]);case 3:a=t.sent,o=Object(s.a)(a),t.prev=5,o.s();case 7:if((i=o.n()).done){t.next=38;break}if(c=i.value,Array.isArray(c)||c.channelEmotes&&(c=c.channelEmotes.concat(c.sharedEmotes)),Array.isArray(c)){t.next=12;break}return t.abrupt("continue",36);case 12:h=Object(s.a)(c),t.prev=13,h.s();case 15:if((u=h.n()).done){t.next=28;break}if(!(l=u.value).images){t.next=20;break}return n.set(l.code,[l.images["1x"],l.images["2x"],l.images["4x"]]),t.abrupt("continue",26);case 20:if(!l.code){t.next=23;break}return n.set(l.code,["https://cdn.betterttv.net/emote/".concat(l.id,"/1x"),"https://cdn.betterttv.net/emote/".concat(l.id,"/2x"),"https://cdn.betterttv.net/emote/".concat(l.id,"/3x")]),t.abrupt("continue",26);case 23:if(!l.urls){t.next=26;break}return n.set(l.name,l.urls.map((function(t){return t[1]}))),t.abrupt("continue",26);case 26:t.next=15;break;case 28:t.next=33;break;case 30:t.prev=30,t.t0=t.catch(13),h.e(t.t0);case 33:return t.prev=33,h.f(),t.finish(33);case 36:t.next=7;break;case 38:t.next=43;break;case 40:t.prev=40,t.t1=t.catch(5),o.e(t.t1);case 43:return t.prev=43,o.f(),t.finish(43);case 46:console.log("Loaded emotes",n),this.setState({emotes:n});case 48:case"end":return t.stop()}}),t,this,[[5,40,43,46],[13,30,33,36]])})));return function(e){return t.apply(this,arguments)}}()},{key:"loadPronouns",value:function(){var t=Object(i.a)(r.a.mark((function t(){var e,n,a,o,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new Map,t.next=3,v("https://pronouns.alejo.io/api/pronouns");case 3:n=t.sent,a=Object(s.a)(n);try{for(a.s();!(o=a.n()).done;)i=o.value,e.set(i.name,i.display)}catch(r){a.e(r)}finally{a.f()}this.setState({pronounDisplay:e});case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchPronouns",value:function(){var t=Object(i.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.state.pronounUsers.has(e)){t.next=2;break}return t.abrupt("return");case 2:return this.state.pronounUsers.set(e,{pending:!0,pronoun:""}),t.next=5,v("https://pronouns.alejo.io/api/users/".concat(e));case 5:if(a=t.sent,Array.isArray(a)){t.next=8;break}return t.abrupt("return");case 8:this.state.pronounUsers.set(e,{pending:!1,pronoun:null===(n=a[0])||void 0===n?void 0:n.pronoun_id}),this.setState({pronounUsers:this.state.pronounUsers});case 10:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"onSocketOpen",value:function(t){this.sendIrc("PASS ass"),this.sendIrc("NICK justinfan".concat(Math.floor(65536*Math.random()))),this.sendIrc("CAP REQ :twitch.tv/commands twitch.tv/tags"),this.sendIrc("JOIN #".concat(this.props.channelName))}},{key:"onSocketClose",value:function(t){}},{key:"onSocketMessage",value:function(t){var e,n=this,o=Object(s.a)(t.data.split("\r\n"));try{var r=function(){var t,s=e.value;if(!s)return"continue";var o=Object(f.parse)(s);if(null===o)return"continue";var r=null===(t=o.command)||void 0===t?void 0:t.toLowerCase();if(!r)return"continue";switch(r){case"ping":return n.sendIrc("PONG ".concat(o.params[0])),"continue";case"privmsg":return n.setState((function(t){return{messages:[].concat(Object(a.a)(t.messages.length>=50?t.messages.slice(1,50):t.messages),[o])}})),"continue"}};for(o.s();!(e=o.n()).done;)r()}catch(i){o.e(i)}finally{o.f()}}},{key:"sendIrc",value:function(t){if(void 0===this.state.webSocket)throw new Error("what the fuck lol");this.state.webSocket.send(t+"\r\n")}},{key:"render",value:function(){var t,e,n={color:null!==(t=this.props.fontColor)&&void 0!==t?t:"white",fill:null!==(e=this.props.fontColor)&&void 0!==e?e:"white",fontFamily:this.props.fontName,fontSize:this.props.fontSize+"pt",fontWeight:this.props.fontWeight,filter:"",webkitTextStroke:"",stroke:"",strokeWidth:""};return this.props.dropShadow&&(n.filter=n.filter+"drop-shadow(".concat(this.props.dropShadowOffset,"px ").concat(this.props.dropShadowOffset,"px ").concat(this.props.dropShadowBlur,"px ").concat(this.props.dropShadowColour,")")),this.props.outline&&(n.webkitTextStroke="".concat(this.props.outlineThickness,"px ").concat(this.props.outlineColour),n.stroke=this.props.outlineColour,n.strokeWidth="".concat(7.5*this.props.outlineThickness,"px")),this.state.errorMessage?Object(j.jsx)("div",{className:"chat-container",style:n,children:Object(j.jsxs)("div",{className:"chat-error",children:[Object(j.jsx)("svg",{height:"128px",viewBox:"0 0 960 960",width:"128px",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(j.jsx)("path",{d:"M0,480C0,435.667 5.66667,393.083 17,352.25C28.3333,311.417 44.4167,273.167 65.25,237.5C86.0833,201.833 111.083,169.417 140.25,140.25C169.417,111.083 201.833,86.0834 237.5,65.25C273.167,44.4167 311.417,28.3334 352.25,17C393.083,5.66669 435.667,0 480,0C524,0 566.417,5.75 607.25,17.25C648.083,28.75 686.333,44.9167 722,65.75C757.667,86.5834 790.083,111.583 819.25,140.75C848.417,169.917 873.417,202.333 894.25,238C915.083,273.667 931.25,311.917 942.75,352.75C954.25,393.583 960,436 960,480C960,524.333 954.333,566.917 943,607.75C931.667,648.583 915.583,686.833 894.75,722.5C873.917,758.167 848.917,790.583 819.75,819.75C790.583,848.917 758.167,873.917 722.5,894.75C686.833,915.583 648.583,931.667 607.75,943C566.917,954.333 524.333,960 480,960C435.667,960 393,954.333 352,943C311,931.667 272.75,915.583 237.25,894.75C201.75,873.917 169.417,848.917 140.25,819.75C111.083,790.583 86.0833,758.25 65.25,722.75C44.4167,687.25 28.3333,649 17,608C5.66667,567 0,524.333 0,480ZM896,480C896,441.667 891.083,404.75 881.25,369.25C871.417,333.75 857.417,300.583 839.25,269.75C821.083,238.917 799.417,210.917 774.25,185.75C749.083,160.583 721.083,138.917 690.25,120.75C659.417,102.583 626.25,88.5834 590.75,78.75C555.25,68.9167 518.333,64.0001 480,64C441.667,64.0001 404.75,68.9167 369.25,78.75C333.75,88.5834 300.583,102.5 269.75,120.5C238.917,138.5 210.833,160.167 185.5,185.5C160.167,210.833 138.5,238.917 120.5,269.75C102.5,300.583 88.5833,333.75 78.75,369.25C68.9167,404.75 64,441.667 64,480C64,518.333 68.9167,555.25 78.75,590.75C88.5833,626.25 102.5,659.417 120.5,690.25C138.5,721.083 160.167,749.167 185.5,774.5C210.833,799.833 238.917,821.5 269.75,839.5C300.583,857.5 333.75,871.417 369.25,881.25C404.75,891.083 441.667,896 480,896C518.333,896 555.25,891.083 590.75,881.25C626.25,871.417 659.417,857.417 690.25,839.25C721.083,821.083 749.083,799.417 774.25,774.25C799.417,749.083 821.083,721.083 839.25,690.25C857.417,659.417 871.417,626.25 881.25,590.75C891.083,555.25 896,518.333 896,480ZM448,544L448,288C448,279.333 451.167,271.833 457.5,265.5C463.833,259.167 471.333,256 480,256C488.667,256 496.167,259.167 502.5,265.5C508.833,271.833 512,279.333 512,288L512,544C512,552.667 508.833,560.167 502.5,566.5C496.167,572.833 488.667,576 480,576C471.333,576 463.833,572.833 457.5,566.5C451.167,560.167 448,552.667 448,544ZM432,672C432,658.667 436.667,647.333 446,638C455.333,628.667 466.667,624 480,624C493.333,624 504.667,628.667 514,638C523.333,647.333 528,658.667 528,672C528,685.333 523.333,696.667 514,706C504.667,715.333 493.333,720 480,720C466.667,720 455.333,715.333 446,706C436.667,696.667 432,685.333 432,672Z"})}),Object(j.jsx)("p",{children:this.state.errorMessage})]})}):Object(j.jsx)("div",{className:"chat-container",children:Object(j.jsx)("div",{className:"chat-root",style:n,children:Object(j.jsx)(I.Provider,{value:this.props,children:Object(j.jsx)(F.Provider,{value:this.state.colorAdjuster,children:Object(j.jsx)(R.Provider,{value:this.state.badges,children:Object(j.jsx)(U.Provider,{value:this.state.emotes,children:Object(j.jsx)(E.Provider,{value:{userMap:this.state.pronounUsers,displayMap:this.state.pronounDisplay,fetchPronouns:this.fetchPronouns.bind(this)},children:this.state.messages.map((function(t){return Object(j.jsx)(y,{message:t},t.tags.id)}))})})})})})})})}}]),n}(p.Component)},40:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h}));var a=n(8),s=(n(1),n(22)),o=n(42),r=n(70),i=n(9),c=n(0),h=function(){var e=i.a;try{var n=Object(r.a)(t.from(window.location.hash.substring(1),"base64"));console.log(e,n),e=Object.assign(e,n)}catch(h){}return e.channelName?Object(c.jsx)(s.b,Object(a.a)({},e)):Object(c.jsx)(o.a,{})}}).call(this,n(16).Buffer)},42:function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var a=n(24),s=n(19),o=n(8),r=n(13),i=n(14),c=n(26),h=n(23),u=n(1),l=n(22),p=n(71),d=(n(68),n(9)),f=n(0),b=function(t){return Object(f.jsxs)("label",{className:"checkbox",children:[Object(f.jsx)("input",{type:"checkbox",checked:t.value,onChange:t.onChange}),Object(f.jsx)("span",{className:"checkmark"})," ",t.label]})},m=function(t){Object(c.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={config:d.a,chatConfig:d.a},a}return Object(i.a)(n,[{key:"updateChat",value:function(){this.setState({chatConfig:this.state.config})}},{key:"onChannelNameChange",value:function(t){this.setState({config:Object(o.a)(Object(o.a)({},this.state.config),{},{channelName:t.target.value})})}},{key:"onValueChange",value:function(t,e){this.setState({config:Object(o.a)(Object(o.a)({},this.state.config),{},Object(s.a)({},t,e)),chatConfig:Object(o.a)(Object(o.a)({},this.state.config),{},Object(s.a)({},t,e))})}},{key:"onSubmit",value:function(t){t.preventDefault()}},{key:"render",value:function(){var t=this,e={};for(var n in this.state.config){var s=this.state.config[n];s!==d.a[n]&&(e[n]=s)}var r=btoa(String.fromCharCode.apply(String,Object(a.a)(p.a(e))));return Object(f.jsxs)("div",{className:"config-root",children:[Object(f.jsx)("div",{className:"config-pane",children:Object(f.jsxs)("div",{className:"config-main",children:[Object(f.jsxs)("form",{onSubmit:this.onSubmit.bind(this),className:"config-input",children:[Object(f.jsx)("h1",{children:"Wam's Chat Thing"}),Object(f.jsxs)("h4",{children:["A simple, easy to use chat box that supports ",Object(f.jsx)("a",{href:"https://betterttv.net/",children:"BetterTTV"}),",\xa0",Object(f.jsx)("a",{href:"https://frankerfacez.com/",children:"FrankerFaceZ"})," and\xa0",Object(f.jsx)("a",{href:"https://7tv.app/",children:"7tv"})," emotes!"]}),Object(f.jsx)("div",{className:"config-warning",children:Object(f.jsx)("p",{children:"This chat box is not yet finished, and links may break in future! Please don't use it in your layouts yet."})}),Object(f.jsx)("label",{className:"form-group-label",children:"Channel Name"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("input",{type:"text",className:"config-input-text",placeholder:"wamwoowam",value:this.state.config.channelName,onChange:this.onChannelNameChange.bind(this),onBlur:this.updateChat.bind(this)})}),Object(f.jsx)("label",{className:"form-group-label",children:"Font"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("input",{type:"text",className:"config-input-text",placeholder:"Font Name",size:1,style:{flex:3},value:this.state.config.fontName,onChange:function(e){return t.onValueChange("fontName",e.target.value)}}),Object(f.jsx)("input",{type:"text",className:"config-input-text",placeholder:"Font Size",size:1,value:this.state.config.fontSize,onChange:function(e){return t.onValueChange("fontSize",isNaN(+e.target.value)?t.state.config.fontSize:+e.target.value)}}),Object(f.jsxs)("select",{className:"config-input-text",value:this.state.config.fontWeight,onChange:function(e){return t.onValueChange("fontWeight",+e.target.value)},children:[Object(f.jsx)("option",{value:"100",children:"Thin"}),Object(f.jsx)("option",{value:"200",children:"Light"}),Object(f.jsx)("option",{value:"300",children:"Semilight"}),Object(f.jsx)("option",{value:"400",children:"Regular"}),Object(f.jsx)("option",{value:"500",children:"Semibold"}),Object(f.jsx)("option",{value:"600",children:"Bold"}),Object(f.jsx)("option",{value:"700",children:"Extra Bold"}),Object(f.jsx)("option",{value:"800",children:"Black"}),Object(f.jsx)("option",{value:"900",children:"Ultra Black"})]}),Object(f.jsx)("input",{type:"color",className:"config-input-text",size:1,value:this.state.config.fontColor,onChange:function(e){return t.onValueChange("fontColor",e.target.value)}})]}),Object(f.jsx)("label",{className:"form-group-label",children:"Ignored users (one per line)"}),Object(f.jsx)("div",{className:"form-group",children:Object(f.jsx)("textarea",{className:"config-input-text",value:this.state.config.blockedUsers.join("\n"),onChange:function(e){return t.onValueChange("blockedUsers",e.target.value.split("\n"))}})}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)(b,{label:"Show badges",value:this.state.config.showBadges,onChange:function(e){return t.onValueChange("showBadges",e.target.checked)}}),Object(f.jsx)(b,{label:"Show pronouns",value:this.state.config.showPronouns,onChange:function(e){return t.onValueChange("showPronouns",e.target.checked)}}),Object(f.jsx)(b,{label:"Show user colours",value:this.state.config.showUserColours,onChange:function(e){return t.onValueChange("showUserColours",e.target.checked)}}),this.state.config.showUserColours?Object(f.jsx)(b,{label:"Readable colours",value:this.state.config.readableColours,onChange:function(e){return t.onValueChange("readableColours",e.target.checked)}}):null,Object(f.jsx)(b,{label:"Hide commands",value:this.state.config.hideCommands,onChange:function(e){return t.onValueChange("hideCommands",e.target.checked)}}),Object(f.jsx)(b,{label:"Drop shadow",value:this.state.config.dropShadow,onChange:function(e){return t.onValueChange("dropShadow",e.target.checked)}}),Object(f.jsx)(b,{label:"Outline",value:this.state.config.outline,onChange:function(e){return t.onValueChange("outline",e.target.checked)}})]}),this.state.config.showUserColours&&this.state.config.readableColours?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{style:{margin:"1em 0.2em -0.5em 0.2em"},children:"Readable Colour Options"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsxs)("label",{className:"form-label",children:["Target Contrast",Object(f.jsx)("input",{type:"range",min:0,max:10,step:.5,value:this.state.config.readableContrast,onChange:function(e){return t.onValueChange("readableContrast",+e.target.value)}})]}),Object(f.jsxs)("label",{className:"form-label",children:["Background Colour",Object(f.jsx)("input",{type:"color",className:"config-input-text",size:1,value:this.state.config.readableBackground,onChange:function(e){return t.onValueChange("readableBackground",e.target.value)}})]}),Object(f.jsxs)("label",{className:"form-label",children:["Adjustment Mode",Object(f.jsxs)("select",{className:"config-input-text",value:this.state.config.readableMode,onChange:function(e){return t.onValueChange("readableMode",+e.target.value)},children:[Object(f.jsx)("option",{value:"1",children:"HSL Luma (FFZ Default)"}),Object(f.jsx)("option",{value:"2",children:"Luv Luma"}),Object(f.jsx)("option",{value:"3",children:"HSL Loop (BTTV-like)"}),Object(f.jsx)("option",{value:"4",children:"RGB Loop"})]})]})]})]}):null,this.state.config.dropShadow?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{style:{margin:"1em 0.2em -0.5em 0.2em"},children:"Shadow Options"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsxs)("label",{className:"form-label",children:["Offset",Object(f.jsx)("input",{type:"text",className:"config-input-text",placeholder:"Shadow Offset",size:1,value:this.state.config.dropShadowOffset,onChange:function(e){return t.onValueChange("dropShadowOffset",isNaN(+e.target.value)?t.state.config.dropShadowOffset:+e.target.value)}})]}),Object(f.jsxs)("label",{className:"form-label",children:["Blur Radius",Object(f.jsx)("input",{type:"text",className:"config-input-text",placeholder:"Shadow Blur Radius",size:1,value:this.state.config.dropShadowBlur,onChange:function(e){return t.onValueChange("dropShadowBlur",isNaN(+e.target.value)?t.state.config.dropShadowBlur:+e.target.value)}})]}),Object(f.jsxs)("label",{className:"form-label",children:["Colour",Object(f.jsx)("input",{type:"color",className:"config-input-text",size:1,value:this.state.config.dropShadowColour,onChange:function(e){return t.onValueChange("dropShadowColour",e.target.value)}})]})]})]}):null,this.state.config.outline?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h4",{style:{margin:"1em 0.2em -0.5em 0.2em"},children:"Outline Options"}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsxs)("label",{className:"form-label",children:["Thickness",Object(f.jsx)("input",{type:"text",className:"config-input-text",placeholder:"Outline Thickness",size:1,value:this.state.config.outlineThickness,onChange:function(e){return t.onValueChange("outlineThickness",isNaN(+e.target.value)?t.state.config.outlineThickness:+e.target.value)}})]}),Object(f.jsxs)("label",{className:"form-label",children:["Colour",Object(f.jsx)("input",{type:"color",className:"config-input-text",size:1,value:this.state.config.outlineColour,onChange:function(e){return t.onValueChange("outlineColour",e.target.value)}})]})]})]}):null]}),Object(f.jsxs)("div",{className:"config-footer",children:[Object(f.jsx)("p",{children:"Paste this into a browser source!"}),Object(f.jsx)("input",{className:"config-input-text",readOnly:!0,value:"".concat(window.location.href,"#").concat(r)})]})]})}),Object(f.jsx)("div",{className:"config-example",children:Object(f.jsx)(l.b,Object(o.a)({},this.state.chatConfig))})]})}}]),n}(u.Component)},43:function(t,e,n){"use strict";n.r(e);n(1);var a=n(39),s=n.n(a),o=n(40),r=(n(69),n(0));s.a.render(Object(r.jsx)(o.a,{}),document.getElementById("root"))},56:function(t,e){},58:function(t,e){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},9:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return o})),function(t){t[t.none=0]="none",t[t.hslLuma=1]="hslLuma",t[t.luv=2]="luv",t[t.hslLoop=3]="hslLoop",t[t.rgbLoop=4]="rgbLoop"}(a||(a={}));var s=["#FF0000","#0000FF","#008000","#B22222","#FF7F50","#9ACD32","#FF4500","#2E8B57","#DAA520","#D2691E","#5F9EA0","#1E90FF","#FF69B4","#8A2BE2","#00FF7F"],o={channelName:"",fontName:"Segoe UI",fontSize:15,fontWeight:400,fontColor:"#FFFFFF",showBadges:!0,showPronouns:!0,showUserColours:!0,dropShadow:!0,dropShadowBlur:1,dropShadowOffset:1,dropShadowColour:"#000000",outline:!1,outlineThickness:1,outlineColour:"#000000",readableColours:!0,readableBackground:"#212121",readableContrast:4.5,readableMode:a.hslLuma,hideCommands:!0,blockedUsers:["streamelements","streamlabs","nightbot","moobot","fossabot"]}}},[[43,1,2]]]);
//# sourceMappingURL=main.1c5e84fd.chunk.js.map