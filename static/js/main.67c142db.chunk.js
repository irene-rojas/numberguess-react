(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/black_cat.4b1eb2da.png"},function(e,t,a){e.exports=a.p+"static/media/brown_cat.1f536498.png"},function(e,t,a){e.exports=a.p+"static/media/gray_cat.ff6e9d8e.png"},function(e,t,a){e.exports=a.p+"static/media/yellow_cat.6f62f27b.png"},function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/frame.953720e2.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),s=a.n(c),i=(a(18),a(1)),o=a(2),u=a(4),l=a(3),m=a(5),b=(a(20),a(22),function(e){return r.a.createElement("img",{src:e.src,alt:e.alt,value:e.value,className:"zoom",onClick:e.onClick})}),g=a(8),d=a.n(g),h=a(9),p=a.n(h),f=a(10),v=a.n(f),N=a(11),w=a.n(N),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).generateNumber=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},a.state={buttons:[{id:"black",src:d.a,alt:"blackBtn",value:a.generateNumber(1,12)},{id:"brown",src:p.a,alt:"brownBtn",value:a.generateNumber(1,12)},{id:"gray",src:v.a,alt:"grayBtn",value:a.generateNumber(1,12)},{id:"yellow",src:w.a,alt:"yellowBtn",value:a.generateNumber(1,12)}]},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.buttons.map(function(t){return r.a.createElement(b,{className:t.id,key:t.id,src:t.src,alt:t.alt,value:t.value,onClick:e.props.onClick})}))}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).targetNumber=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},a.state={targetNumber:a.targetNumber(19,120),currentValue:0,gamesWon:0},a.handleClick=function(e){e.preventDefault();var t=a.state.currentValue,n=parseInt(e.target.getAttribute("value"));a.setState({currentValue:t+n})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.state.currentValue===this.state.targetNumber?this.setState({targetNumber:this.targetNumber(19,120),currentValue:0,gamesWon:this.state.gamesWon+1}):this.state.currentValue>=this.state.targetNumber&&this.setState({targetNumber:this.targetNumber(19,120),currentValue:0,gamesWon:this.state.gamesWon})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:a(24),alt:"frame",id:"instructFrame"}),r.a.createElement("div",{className:"resultsDiv"},r.a.createElement("div",{className:"targetNumber"},"Target number = ",this.state.targetNumber),r.a.createElement("div",{className:"currentValue"},"Current value = ",this.state.currentValue),r.a.createElement("div",{className:"gamesWon"},"Games won = ",this.state.gamesWon)),r.a.createElement("div",{className:"buttonGrid"},r.a.createElement(k,{key:this.state.targetNumber,onClick:this.handleClick})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,2,1]]]);
//# sourceMappingURL=main.67c142db.chunk.js.map