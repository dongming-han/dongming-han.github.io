!function(){var e;!function(){!function(e,t){if(!e.test(window.location.pathname))return;var n=t[decodeURIComponent(window.location.hash.slice(1))];n&&(window.location.href=window.location.origin+n)}(/components\.html$/,{"什么是组件？":"/v2/guide/components.html","使用组件":"/v2/guide/components-registration.html","全局注册":"/v2/guide/components-registration.html#全局注册","局部注册":"/v2/guide/components-registration.html#局部注册","DOM-模板解析注意事项":"/v2/guide/components.html#解析-DOM-模板时的注意事项","data-必须是函数":"/v2/guide/components.html#data-必须是一个函数","组件组合":"/v2/guide/components.html#组件的组织",Prop:"/v2/guide/components.html#通过-Prop-向子组件传递数据","使用-Prop-传递数据":"/v2/guide/components.html#通过-Prop-向子组件传递数据","camelCase-vs-kebab-case":"/v2/guide/components-props.html#Prop-的大小写-camelCase-vs-kebab-case","动态-Prop":"/v2/guide/components-props.html#静态的和动态的-Prop","字面量语法-vs-动态语法":"/v2/guide/components-props.html#静态的和动态的-Prop","单向数据流":"/v2/guide/components-props.html#单向数据流","Prop-验证":"/v2/guide/components-props.html#Prop-验证","非-Prop-特性":"/v2/guide/components-props.html#非-Prop-的特性","替换-合并现有的特性":"/v2/guide/components-props.html#替换-合并已有的特性","自定义事件":"/v2/guide/components.html#通过事件向父级组件发送消息","使用-v-on-绑定自定义事件":"/v2/guide/components.html#通过事件向父级组件发送消息","给组件绑定原生事件":"/v2/guide/components-custom-events.html#将原生事件绑定到组件","sync-修饰符":"/v2/guide/components-custom-events.html#sync-修饰符","使用自定义事件的表单输入组件":"/v2/guide/components-custom-events.html#将原生事件绑定到组件","自定义组件的-v-model":"/v2/guide/components-custom-events.html#自定义组件的-v-model","非父子组件的通信":"/v2/guide/state-management.html","使用插槽分发内容":"/v2/guide/components.html#通过插槽分发内容","编译作用域":"/v2/guide/components-slots.html#编译作用域","单个插槽":"/v2/guide/components-slots.html#插槽内容","具名插槽":"/v2/guide/components-slots.html#具名插槽","作用域插槽":"/v2/guide/components-slots.html#作用域插槽","动态组件":"/v2/guide/components.html#动态组件","keep-alive":"/v2/guide/components-dynamic-async.html#在动态组件上使用-keep-alive","杂项":"/v2/guide/components-edge-cases.html","编写可复用组件":"/v2/guide/components.html#组件的组织","子组件引用":"/v2/guide/components-edge-cases.html#访问子组件实例或子元素","异步组件":"/v2/guide/components-dynamic-async.html#异步组件","高级异步组件":"/v2/guide/components-dynamic-async.html#处理加载状态","组件命名约定":"/v2/guide/components-registration.html#组件名","递归组件":"/v2/guide/components-edge-cases.html#递归组件","组件间的循环引用":"/v2/guide/components-edge-cases.html#组件之间的循环引用","内联模板":"/v2/guide/components-edge-cases.html#内联模板","X-Templates":"/v2/guide/components-edge-cases.html#X-Templates","对低开销的静态组件使用-v-once":"/v2/guide/components-edge-cases.html#通过-v-once-创建低开销的静态组件"})}(),function(){var e=document.getElementById("mobile-bar"),t=document.querySelector(".sidebar"),n=e.querySelector(".menu-button");n.addEventListener("click",function(){t.classList.toggle("open")}),document.body.addEventListener("click",function(e){e.target===n||t.contains(e.target)||t.classList.remove("open")});var o={},r={};document.body.addEventListener("touchstart",function(e){o.x=e.changedTouches[0].clientX,o.y=e.changedTouches[0].clientY}),document.body.addEventListener("touchend",function(e){r.y=e.changedTouches[0].clientY,r.x=e.changedTouches[0].clientX;var n=r.x-o.x,c=r.y-o.y;Math.abs(n)>Math.abs(c)&&(n>0&&o.x<=80?t.classList.add("open"):t.classList.remove("open"))})}(),function(){var e=document.getElementById("modal-player"),t=document.getElementById("video-modal");if(!e||!t)return;var n=t.querySelector(".video-space"),o=document.createElement("div");o.className="overlay";var r=!1;e.addEventListener("click",function(e){e.stopPropagation(),t.classList.toggle("open"),document.body.classList.toggle("stop-scroll"),document.body.appendChild(o),n.innerHTML='<iframe style="height: 100%; left: 0; position: absolute; top: 0; width: 100%;" src="//player.youku.com/embed/XMzMwMTYyODMyNA==?autoplay=true&client_id=37ae6144009e277d" frameborder="0" allowfullscreen></iframe>',r=!0}),document.body.addEventListener("click",function(c){r&&c.target!==e&&!t.contains(c.target)&&(t.classList.remove("open"),document.body.classList.remove("stop-scroll"),document.body.removeChild(o),n.innerHTML="",r=!1)})}(),PAGE_TYPE&&((e=document.querySelector(".version-select"))&&e.addEventListener("change",function(e){var t=e.target.value,n=window.location.pathname.match(/\/v\d\/(\w+?)\//)[1];"SELF"!==t&&window.location.assign("https://"+t+(t&&".")+"vuejs.org/"+n+"/")}),function(){var e=document.querySelector(".content.api");if(e){var t=[].slice.call(e.querySelectorAll("h3"));t.forEach(function(e){var t=e.textContent.match(/^([^(]+)\(/);if(t){var n=function(e,t){if("string"!=typeof e)throw new TypeError("str must be a string!");var n=(t=t||{}).separator||"-",o=function(e){if("string"!=typeof e)throw new TypeError("str must be a string!");return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}(n),r=e.replace(/[\u0000-\u001f]/g,"").replace(/[\s~`!@#\$%\^&\*\(\)\-_\+=\[\]\{\}\|\\;:"'<>,\.\?\/]+/g,n).replace(new RegExp(o+"{2,}","g"),n).replace(new RegExp("^"+o+"+|"+o+"+$","g"),"");switch(t.transform){case 1:return r.toLowerCase();case 2:return r.toUpperCase();default:return r}}(t[1]);e.setAttribute("id",n),e.querySelector("a").setAttribute("href","#"+n)}var o,r=e.parentNode.nextSibling;if(("UL"===r.tagName||(r=r.nextSibling))&&"UL"===r.tagName){var c=document.createElement("li"),a=(o=(o=e.textContent).replace(/\([^\)]*?\)/g,"").replace(/(Vue\.)(\w+)/g,'$1$2" OR "$2').replace(/vm\./g,"Vue.prototype."),"https://github.com/search?utf8=%E2%9C%93&q=repo%3Avuejs%2Fvue+extension%3Ajs+"+encodeURIComponent('"'+o+'"')+"&type=Code");c.innerHTML='<a href="'+a+'" target="_blank">源代码</a>',r.appendChild(c)}})}}(),function(){var e=[].forEach,t=(document.getElementById("main"),document.getElementById("header"),document.querySelector(".sidebar")),n=document.querySelector(".content"),o=t.querySelector(".sidebar-link.current"),r=document.querySelector(".content").classList,c=r.contains("api")||r.contains("style-guide");if(o||c){var a,s=[];c?a=document.querySelector(".menu-root"):((a=document.createElement("ul")).className="menu-sub",o.parentNode.appendChild(a));var i=n.querySelectorAll("h2");i.length?e.call(i,function(e){a.appendChild(m(e));var t=function(e){var t=[],n=e.nextSibling;for(;n&&"H2"!==n.tagName;)"H3"===n.tagName&&t.push(n),n=n.nextSibling;return t}(e);s.push(e),s.push.apply(s,t),t.length&&a.appendChild(function(e,t){var n=document.createElement("ul");t&&(n.className="menu-sub");return e.forEach(function(e){n.appendChild(m(e))}),n}(t,c))}):(i=n.querySelectorAll("h3"),e.call(i,function(e){a.appendChild(m(e)),s.push(e)}));var l=!1;a.addEventListener("click",function(e){e.target.classList.contains("section-link")&&(t.classList.remove("open"),p(e.target),l=!0,setTimeout(function(){l=!1},400))},!0),s.filter(function(e){if(!e.querySelector("a"))return!1;var t=[].slice.call(document.querySelectorAll("demo"));return!t.some(function(t){return t.contains(e)})}).forEach(function(e){var t=e.querySelector("a");t.setAttribute("data-scroll","");for(var n=Array.prototype.slice.call(e.childNodes),o=0;o<n.length;o++){var r=n[o];r!==t&&t.appendChild(r)}}),smoothScroll.init({speed:400,offset:0})}var d=!1;function u(){var e=document.documentElement,t=e&&e.scrollTop||document.body.scrollTop;if(!l&&s){for(var n,o=0;o<s.length;o++){var r=s[o];if(r.offsetTop>t){n||(n=r);break}n=r}n&&p(n.id,!d)}}function m(e){var t=document.createElement("li");window.arst=e;var n=[].slice.call(e.childNodes).map(function(e){return e.nodeType===Node.TEXT_NODE?e.nodeValue:-1!==["CODE","SPAN"].indexOf(e.tagName)?e.textContent:""}).join("").replace(/\(.*\)$/,"");return t.innerHTML='<a class="section-link" data-scroll href="#'+e.id+'">'+function(e){return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}(n)+"</a>",t}function p(e,n){var r=t.querySelector(".section-link.active"),c="string"==typeof e?t.querySelector('.section-link[href="#'+e+'"]'):e;if(c!==r&&(r&&r.classList.remove("active"),c.classList.add("active"),n)){var a=o?o.offsetTop-8:0,s=c.offsetTop+c.parentNode.clientHeight,i=t.clientHeight,l=c.offsetTop>=t.scrollTop&&s<=t.scrollTop+i,d=s-a<i,u=l?t.scrollTop:d?a:s-i;t.scrollTop=u}}t.addEventListener("mouseover",function(){d=!0}),t.addEventListener("mouseleave",function(){d=!1}),window.addEventListener("scroll",u),window.addEventListener("resize",u)}(),function(){var e=window.location.hash;if(!e)return;var t=function(e){"#"===e.charAt(0)&&(e=e.substr(1));try{e=decodeURIComponent(e)}catch(e){}return CSS.escape(e)}(e);if(!document.getElementById(t)){var n=r(t),o=[].slice.call(document.querySelectorAll("[id]")).map(function(e){return e.id});o.sort(function(e,t){var o=c(n,r(e)),a=c(n,r(t));return o<a?-1:o>a?1:0}),window.location.hash="#"+o[0]}function r(e){return e.toLowerCase().replace(/\-(?:deprecated|removed|replaced|changed|obsolete)$/,"")}function c(e,t){var n=[];if(!e||!t)return(t||e).length;for(var o=0;o<=t.length;n[o]=[o++]);for(var r=0;r<=e.length;n[0][r]=r++);for(var o=1;o<=t.length;o++)for(var r=1;r<=e.length;r++)n[o][r]=t.charAt(o-1)===e.charAt(r-1)?n[o-1][r-1]:n[o][r]=Math.min(n[o-1][r-1]+1,Math.min(n[o][r-1]+1,n[o-1][r]+1));return n[t.length][e.length]}}())}();