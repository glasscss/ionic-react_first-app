"use strict";(self.webpackChunkExploringApp=self.webpackChunkExploringApp||[]).push([[22],{5022:function(n,t,e){e.r(t),e.d(t,{createSwipeBackGesture:function(){return a}});var r=e(1811),i=e(9507),u=e(7909),a=function(n,t,e,a,o){var c=n.ownerDocument.defaultView,f=(0,i.i)(n),s=function(n){return f?-n.deltaX:n.deltaX};return(0,u.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(n){return function(n){var t=n.startX;return f?t>=c.innerWidth-50:t<=50}(n)&&t()},onStart:e,onMove:function(n){var t=s(n)/c.innerWidth;a(t)},onEnd:function(n){var t=s(n),e=c.innerWidth,i=t/e,u=function(n){return f?-n.velocityX:n.velocityX}(n),a=u>=0&&(u>.2||t>e/2),l=(a?1-i:i)*e,p=0;if(l>5){var h=l/Math.abs(u);p=Math.min(h,540)}o(a,i<=0?.01:(0,r.j)(0,i,.9999),p)}})}}}]);
//# sourceMappingURL=22.6face74d.chunk.js.map