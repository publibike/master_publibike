(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{nGUn:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return o}));var r=n("gHap"),a=(n("rxGk"),n("ItpF"));const o=(t,e,n,o,c)=>{const i=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:n,onMove:t=>{o(t.deltaX/i.innerWidth)},onEnd:t=>{const e=i.innerWidth,n=t.deltaX/e,a=t.velocityX,o=a>=0&&(a>.2||t.deltaX>e/2),s=(o?1-n:n)*e;let u=0;if(s>5){const t=s/Math.abs(a);u=Math.min(t,540)}c(o,n<=0?.01:Object(r.c)(0,n,.9999),u)}})}}}]);