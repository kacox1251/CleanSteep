(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(46),c=a.n(r),o=a(7),i=a(10),u=a(9),m=a(13),s=a(8);var d=function(e){var t=e.children;return l.a.createElement("div",{style:{height:150,clear:"both",paddingTop:40,textAlign:"center"},className:"jumbotron"},t)};function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function f(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function p(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}function h(e){return l.a.createElement("div",{className:"input-group mb-3"},l.a.createElement("input",{type:"text",onChange:e.handleInputChange,name:"city",value:e.city,className:"form-control",placeholder:"City","aria-label":"City","aria-describedby":"basic-addon1"}),l.a.createElement("input",{type:"text",onChange:e.handleInputChange,name:"state",value:e.state,className:"form-control",placeholder:"State","aria-label":"State","aria-describedby":"basic-addon1"}))}function E(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function b(e){var t=e.handleFormSubmit,a=e.children;return l.a.createElement("div",null,l.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:t},a))}function v(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}function y(e){return l.a.createElement("button",Object.assign({},e,{style:{marginLeft:5},className:"btn btn-success"}),e.children)}var N=function(e){return l.a.createElement("div",{className:"card mb-3",style:{maxWidth:540},"data-lat":e.lat,"data-long":e.long},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:e.image,className:"card-img",alt:"Route Thumbnail"})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("p",{className:"card-text"},"Type: ",e.type," | Location: ",e.location),l.a.createElement("p",{className:"card-text text-right"},l.a.createElement("small",{className:"text-muted"},"Difficulty: ",e.rating," | Pitches: ",e.pitches),l.a.createElement("button",{style:{marginLeft:50},type:"button",className:"btn btn-outline-dark",onClick:e.handleAddRoute},"Save"))))))},R=a(5),w=a.n(R),x={getMountainRoutes:function(e,t){return w.a.get("/api/data/locations?city=".concat(e,"&state=").concat(t))},saveRoute:function(e){return w.a.post("/api/data/routes",e)},getRoute:function(){return w.a.get("/api/data/routes")},deleteRoute:function(e){return w.a.delete("/api/data/routes/"+e)},changeComplete:function(e){var t=e.id,a=e.completed;return w.a.put("/api/data/routes/"+t,a)},changeRating:function(e){var t=e.id,a=e.rating;return w.a.put("/api/data/routes/"+t,a)},register:function(e){return w.a.post("/api/user",{username:e.email,password:e.password})},login:function(e){return w.a.post("/api/user/login",{username:e.email,password:e.password})},logout:function(){return w.a.post("/api/user/logout")},status:function(){return w.a.get("/api/user")}};var C=function(){var e=Object(n.useState)({city:"",state:""}),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),i=Object(s.a)(c,2),E=i[0],v=i[1],R=a.city,w=a.state;return l.a.createElement(g,{fluid:!0},l.a.createElement(f,null,l.a.createElement(p,{size:"md-9"},l.a.createElement(d,null,l.a.createElement("h1",null,"Search Page"),l.a.createElement(o.b,{to:"/routes"},l.a.createElement("button",{type:"button",className:"btn btn-success"},"Saved Routes")),l.a.createElement(y,{onClick:function(e){e.preventDefault(),x.logout().then(function(){window.location.assign("/")}).catch(function(e){console.log("error!",e)})}},"Logout")),l.a.createElement("form",null,l.a.createElement(h,{city:R,state:w,handleInputChange:function(e){var t=e.target,n=t.name,l=t.value;r(Object(m.a)({},a,Object(u.a)({},n,l)))}}),l.a.createElement(b,{handleFormSubmit:function(e){e.preventDefault(),x.getMountainRoutes(R,w).then(function(e){v(e.data)}).catch(function(e){return console.log(e)}),r(Object(m.a)({},a,{city:"",state:""}))}},"Search Location")),E.length?l.a.createElement("div",null,E.map(function(e){return l.a.createElement(N,{key:e.id,image:e.imgSmall,name:e.name,type:e.type,rating:e.rating,pitches:e.pitches,location:e.location,lat:e.longitude,long:e.latitude,handleAddRoute:function(){return function(e){var t=E.filter(function(t){return t.id===e});console.log(t[0]),x.saveRoute({routeID:t[0].id,routeName:t[0].name,routeType:t[0].type,routeImage:t[0].imgSmall,routePitch:t[0].pitches,routeLocation:{lat:t[0].latitude,long:t[0].longitude,location:t[0].location},routeDifficulty:t[0].rating}).then(function(e){console.log("Route saved")}).catch(function(e){return console.log(e)})}(e.id)}})})):l.a.createElement("h3",null,"No Results to Display"))))},j=a(49);var k=function(e){var t=e.location.join(", ");return console.log(t),l.a.createElement("div",{className:"card mb-3",style:{maxWidth:540},"data-id":e.id,"data-lat":e.lat,"data-long":e.long},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("img",{src:e.image,className:"card-img",alt:"Route Thumbnail"})),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},e.name),l.a.createElement("p",{className:"card-text"},"Type: ",e.type," | Location: ",t),l.a.createElement("p",{className:"card-text text-right"},l.a.createElement("small",{className:"text-muted"},"Difficulty: ",e.difficulty," | Pitches: ",e.pitches)),l.a.createElement("button",{style:{marginLeft:5,float:"right"},type:"button",className:"btn btn-light",onClick:e.markComplete},l.a.createElement("i",{className:"fa fa-check-square"})),l.a.createElement("button",{style:{marginLeft:5,float:"right"},type:"button",className:"btn btn-light",onClick:e.handleDelete,"aria-label":"Delete"},l.a.createElement("i",{className:"fa fa-trash"})),l.a.createElement("div",null,l.a.createElement(j.a,{onChange:function(t){var a=e.id,n={routeRating:{rating:t}};x.changeRating({id:a,rating:n}).then(function(e){console.log("Rating changed")}).catch(function(e){return console.log(e)})},initialRating:e.rating,emptySymbol:"fa fa-star-o fa-2x",fullSymbol:"fa fa-star fa-2x"}))))))},O=a(11);a(122);var S=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1];function c(){x.getRoute().then(function(e){r(e.data),i(e.data)}).catch(function(e){return console.log(e)})}function i(e){var t,a=[],n=document.getElementById("graphRouteNames"),l=document.getElementById("routeOptions").value;if(document.getElementById("graph").innerHTML="",void 0!==e){(t="complete"===l?e.filter(function(e){return document.getElementById("graphTitle").innerHTML="Completed Routes",e.completed}):e.filter(function(e){return document.getElementById("graphTitle").innerHTML="Incomplete Routes",!e.completed})).forEach(function(e){a[e.routeDifficulty]=(a[e.routeDifficulty]||0)+1});var r=Math.min(450,450)/2-40,c=O.e("#graph").append("svg").attr("width",450).attr("height",450).append("g").attr("transform","translate(225,225)"),o=O.d().domain(a).range(["#114641","#1D5D4D","#307456","#498B5B","#68A25E","#8CB85F","#B4CD5F","#E2E062"]),i=O.c().value(function(e){return e.value})(O.b(a));c.selectAll("whatever").data(i).enter().append("path").attr("d",O.a().innerRadius(0).outerRadius(r)).attr("fill",function(e){return o(e.data.key)}).attr("stroke","black").style("stroke-width","2px").style("opacity",.7);var u=O.a().innerRadius(.5*r).outerRadius(.8*r),m=O.a().innerRadius(.9*r).outerRadius(.9*r);c.selectAll("allPolylines").data(i).enter().append("polyline").attr("stroke","black").style("fill","none").attr("stroke-width",1).attr("points",function(e){var t=u.centroid(e),a=m.centroid(e),n=m.centroid(e),l=e.startAngle+(e.endAngle-e.startAngle)/2;return n[0]=.95*r*(l<Math.PI?1:-1),[t,a,n]}),c.selectAll("allLabels").data(i).enter().append("text").text(function(e){return e.data.key}).attr("transform",function(e){var t=m.centroid(e),a=e.startAngle+(e.endAngle-e.startAngle)/2;return t[0]=.99*r*(a<Math.PI?1:-1),"translate("+t+")"}).style("text-anchor",function(e){return e.startAngle+(e.endAngle-e.startAngle)/2<Math.PI?"start":"end"}),n.innerHTML="",t.forEach(function(e){var t=document.createElement("p");t.innerHTML="<b>Route Name:</b> ".concat(e.routeName," <b>Route Grade:</b> ").concat(e.routeDifficulty),n.append(t)})}}return Object(n.useEffect)(function(){c()},[]),l.a.createElement(g,{fluid:!0},l.a.createElement(f,null,l.a.createElement(p,{size:"md-5"},l.a.createElement(d,null,l.a.createElement("h1",null,"Saved Routes"),l.a.createElement(o.b,{to:"/search"},l.a.createElement("button",{type:"button",className:"btn btn-success"},"Search Routes")),l.a.createElement(y,{onClick:function(e){e.preventDefault(),x.logout().then(function(){window.location.assign("/")}).catch(function(e){console.log("error!",e)})}},"Logout")),a.length?l.a.createElement("div",null,a.map(function(e){return l.a.createElement(k,{key:e._id,id:e._id,rating:e.routeRating.rating,image:e.routeImage,name:e.routeName,type:e.routeType,difficulty:e.routeDifficulty,pitches:e.routePitch,location:e.routeLocation.location,lat:e.routeLocation.longitude,long:e.routeLocation.latitude,completed:e.routeRating.completed,handleDelete:function(){return t=e._id,void x.deleteRoute(t).then(function(e){c(),console.log("Route deleted")}).catch(function(e){return console.log(e)});var t},markComplete:function(){return function(e){var t=e._id;x.changeComplete({id:t,completed:{completed:!0}}).then(function(e){console.log("Marked complete"),window.location.reload(!1)}).catch(function(e){return console.log(e)})}(e)}})})):l.a.createElement("h3",null,"No Saved Routes")),l.a.createElement(p,{size:"md-7"},l.a.createElement("div",{className:"centered"},l.a.createElement("select",{id:"routeOptions",onChange:function(){return i(a)}},l.a.createElement("option",{value:"complete"},"Completed Routes"),l.a.createElement("option",{value:"incomplete"},"Incomplete Routes")),l.a.createElement("h1",{id:"graphTitle"},"Completed Routes"),l.a.createElement("div",{id:"graph"}),l.a.createElement("div",{id:"graphRouteNames"})))))},T=(a(123),function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"jumbotron homePage"},l.a.createElement(o.b,{to:"/login",className:"mr-1"},l.a.createElement("button",{type:"button",className:"btn btn-success btn-lg"},"Login")),l.a.createElement(o.b,{to:"/signup"},l.a.createElement("button",{type:"button",className:"btn btn-success btn-lg"},"Sign Up"))))});a(30);var D=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1];function c(e){var t=e.target,n=t.name,l=t.value;r(Object(m.a)({},a,Object(u.a)({},n,l)))}return l.a.createElement(g,{fluid:!0},l.a.createElement(f,null,l.a.createElement(p,{size:"md-12"},l.a.createElement(d,null,l.a.createElement("h1",{className:"pageTitle"},"Login")))),l.a.createElement(f,null,l.a.createElement(p,{size:"md-12"},l.a.createElement("form",null,l.a.createElement(E,{onChange:c,name:"email",placeholder:"email",type:"email"}),l.a.createElement(E,{onChange:c,name:"password",placeholder:"password",type:"password"}),l.a.createElement(v,{onClick:function(e){e.preventDefault(),a.email&&a.password&&x.login(a).then(function(){window.location.assign("/search")}).catch(function(e){console.log("error!",e)})}},"Submit")))))};var I=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),a=t[0],r=t[1];function c(e){var t=e.target,n=t.name,l=t.value;r(Object(m.a)({},a,Object(u.a)({},n,l)))}return l.a.createElement(g,{fluid:!0},l.a.createElement(f,null,l.a.createElement(p,{size:"md-12"},l.a.createElement(d,null,l.a.createElement("h1",{className:"pageTitle"},"Sign Up")))),l.a.createElement(f,null,l.a.createElement(p,{size:"md-12"},l.a.createElement("form",null,l.a.createElement(E,{onChange:c,name:"email",placeholder:"email",type:"email"}),l.a.createElement(E,{onChange:c,name:"password",placeholder:"password",type:"password"}),l.a.createElement(v,{onClick:function(e){e.preventDefault(),a.email&&a.password&&x.register(a).then(function(e){alert("You are now registered! Please login"),window.location.assign("/login")}).catch(function(e){console.log("error!",e)})}},"Sign Up")))))},L=(a(124),a(17));var A=function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)(function(){"/"==window.location.pathname&&(L.a.fromTo(t,1,{x:25,y:340},{x:60,y:300}),L.a.fromTo(t,1,{x:60,y:300},{x:20,y:240,delay:1}),L.a.fromTo(t,1,{x:20,y:240},{x:70,y:150,delay:2}),L.a.fromTo(t,1,{x:70,y:150},{x:0,y:0,delay:3}))}),l.a.createElement("img",{className:"headerImage",id:"headerImg",src:"./images/RockClimbingCartoon.png",alt:"Rock Climbing Image",ref:function(e){t=e}})},M=a(50),B={backgroundImage:"url(".concat(a.n(M).a,")")};var P=function(){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid pageTitle",style:B},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4 header"},"Clean Steep",l.a.createElement(A,null))))};var z=function(){return l.a.createElement(o.a,null,l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(T,null)),l.a.createElement(i.a,{exact:!0,path:"/signup"},l.a.createElement(I,null)),l.a.createElement(i.a,{exact:!0,path:"/login"},l.a.createElement(D,null)),l.a.createElement(i.a,{exact:!0,path:"/search"},l.a.createElement(C,null)),l.a.createElement(i.a,{exact:!0,path:"/routes"},l.a.createElement(S,null)))))};c.a.render(l.a.createElement(z,null),document.getElementById("root"))},30:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/Rocks.50b3b7b4.jpg"},94:function(e,t,a){e.exports=a(125)}},[[94,1,2]]]);
//# sourceMappingURL=main.44e450ab.chunk.js.map