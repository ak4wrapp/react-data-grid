(this["webpackJsonppodcast-player"]=this["webpackJsonppodcast-player"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),c=n(5),a=n.n(c),o=(n(22),n(23),n(17)),s=n(16),l=(n(44),n(45),n(2));function u(e){var t=Object(r.useState)([]),n=Object(o.a)(t,2),i=n[0],c=n[1];Object(r.useEffect)((function(){fetch(e.rssfeed).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})).then((function(e){var t=e.querySelectorAll("item"),n=[];t.forEach((function(e){n.push({pubDate:new Date(e.querySelector("pubDate").textContent),title:e.querySelector("title").innerHTML,mp3:e.querySelector("enclosure").getAttribute("url")})})),c(n)}))}),[e.rssfeed]);return Object(l.jsx)("div",{className:"ag-theme-alpine",style:{height:e.height,width:e.width},children:Object(l.jsx)(s.AgGridReact,{rowData:i,columnDefs:[{headerName:"Episode Title",field:"title",wrapText:!0,autoHeight:!0,flex:2,resizable:!0},{headerName:"Published",field:"pubDate",sortable:!0},{headerName:"Episode",field:"mp3",flex:2,cellRenderer:function(e){return'<audio controls preload="none"\n                                        style="height:2em; vertical-align: middle;">\n                                        <source src='.concat(e.value,' type="audio/mpeg" />\n                                    </audio>')},autoHeight:!0}]})})}var d=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Podcast Player"}),Object(l.jsx)(u,{rssfeed:"https://feeds.simplecast.com/tOjNXec5",height:"500px",width:"100%"})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),i(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(d,{})}),document.getElementById("root")),h()}},[[47,1,2]]]);
//# sourceMappingURL=main.781a4593.chunk.js.map