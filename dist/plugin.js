!function r(a,d,l){function c(n,t){if(!d[n]){if(!a[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(s)return s(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var i=d[n]={exports:{}};a[n][0].call(i.exports,function(t){var e=a[n][1][t];return c(e||t)},i,i.exports,r,a,d,l)}return d[n].exports}for(var s="function"==typeof require&&require,t=0;t<l.length;t++)c(l[t]);return c}({1:[function(t,e,n){"use strict";var i=[],a=function(t,e){var n=document.head||document.getElementsByTagName("head")[0],o=i[i.length-1];if((e=e||{}).insertAt=e.insertAt||"bottom","top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),i.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}};e.exports={createLink:function(t,e){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("link");for(var i in o.href=t,o.rel="stylesheet",e)if(e.hasOwnProperty(i)){var r=e[i];o.setAttribute("data-"+i,r)}n.appendChild(o)},createStyle:function(t,e,n){n=n||{};var o=document.createElement("style");for(var i in o.type="text/css",e)if(e.hasOwnProperty(i)){var r=e[i];o.setAttribute("data-"+i,r)}o.sheet?(o.innerHTML=t,o.sheet.cssText=t,a(o,{insertAt:n.insertAt})):o.styleSheet?(a(o,{insertAt:n.insertAt}),o.styleSheet.cssText=t):(o.appendChild(document.createTextNode(t)),a(o,{insertAt:n.insertAt}))}}},{}],2:[function(t,e,n){var o=".starter-kit-container {\n  padding: 10px;\n  background-color: #bada55;\n}\n.btn-uniprot,\n.btn-pick-random {\n  margin-bottom: 5px;\n}\n";t("browserify-css").createStyle(o,{href:"src\\css\\styles.css"},{insertAt:"bottom"}),e.exports=o},{"browserify-css":1}],3:[function(t,e,n){"use strict";t("../css/styles.css");var o="starter-kit",i={selected:[],allBioEntities:[],pickedRandomly:void 0},r=void 0,a=void 0,d=function(t){var e;console.log("registering "+o+" plugin"),$(".tab-content").css("position","relative"),r=t,a=$(r.element),a.attr("id"),console.log("minerva object ",r),console.log("project id: ",r.project.data.getProjectId()),console.log("model id: ",r.project.data.getModels()[0].modelId),r.project.map.addListener({dbOverlayName:"search",type:"onSearch",callback:p}),(e=$('<div class="'+o+'-container"></div>').appendTo(a)).append('\n        <div class="panel panel-default panel-events">\n            <div class="panel-heading">Events (Select an element in the map)</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),e.append('<button type="button" class="btn-focus btn btn-primary btn-default btn-block">Focus</button>'),e.append('<button type="button" class="btn-highlight btn btn-primary btn-default btn-block">Highlight</button>'),e.append("<hr>"),e.append('<button type="button" class="btn-pick-random btn btn-primary btn-default btn-block">Retrieve random object from map</button>'),e.append('\n        <div class="panel panel-default panel-randomly-picked">\n            <div class="panel-heading">Randomly picked object</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),e.append('<button type="button" class="btn-focus-random btn btn-primary btn-default btn-block">Focus</button>'),e.append('<button type="button" class="btn-highlight-random btn btn-primary btn-default btn-block">Highlight</button>'),e.append("<hr>"),e.append('<button type="button" class="btn-uniprot btn btn-primary btn-default btn-block">Retrieve from UniProt</button>'),e.append('\n        <div class="panel panel-default panel-uniprot">\n            <div class="panel-heading">Uniprot records for the picked object</div>\n            <div class="panel-body">\n                <code></code>\n            </div>\n        </div>\n    '),e.find(".btn-highlight").on("click",function(){return u()}),e.find(".btn-focus").on("click",function(){return m()}),e.find(".btn-pick-random").on("click",function(){return function(){function e(){i.pickedRandomly=i.allBioEntities[Math.floor(Math.random()*i.allBioEntities.length)];var t=i.pickedRandomly.constructor.name+" - ";"Alias"===i.pickedRandomly.constructor.name?t+=i.pickedRandomly.getElementId()+" - "+i.pickedRandomly.getName():t+=""+i.pickedRandomly.getReactionId(),a.find(".panel-randomly-picked .panel-body").html(t)}0<i.allBioEntities.length?e():r.project.data.getAllBioEntities().then(function(t){i.allBioEntities=t,e()})}()}),e.find(".btn-highlight-random").on("click",function(){return u(!0)}),e.find(".btn-focus-random").on("click",function(){return m(!0)}),e.find(".btn-uniprot").on("click",function(){return t=a.find(".panel-randomly-picked .panel-body").text(),void $.ajax({type:"GET",url:"https://www.uniprot.org/uniprot/?query="+t+"&sort=score&columns=id,entry%20name,reviewed,protein%20names,3d,genes,organism,length&format=tab&limit=10"}).then(function(t){a.find(".panel-uniprot .panel-body code").html(JSON.stringify(t))});var t})},l=function(){return console.log("unregistering "+o+" plugin"),r.project.map.removeAllListeners(),r.project.map.getHighlightedBioEntities().then(function(t){return r.project.map.hideBioEntity(t)})},c=function(){return o},s=function(){return"1.0.0"};function p(t){i.selected=t[0];var e="";0<i.selected.length&&i.selected.forEach(function(t){"Alias"===t.constructor.name&&(e+="<div>"+t.getName()+" - "+t.getElementId()+"</div>")}),a.find(".panel-events .panel-body").html(e)}function u(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=[];t?i.pickedRandomly&&e.push({element:{id:i.pickedRandomly.id,modelId:i.pickedRandomly.getModelId(),type:i.pickedRandomly.constructor.name.toUpperCase()},type:"SURFACE",options:{color:"#00FF00",opacity:.5}}):i.selected.forEach(function(t){e.push({element:{id:t.id,modelId:t.getModelId(),type:"ALIAS"},type:"ICON"})}),r.project.map.showBioEntity(e)}function m(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];function e(t){"Alias"===t.constructor.name?r.project.map.fitBounds({modelId:t.getModelId(),x1:t.getX(),y1:t.getY(),x2:t.getX()+t.getWidth(),y2:t.getY()+t.getHeight()}):r.project.map.fitBounds({modelId:t.getModelId(),x1:t.getCenter().x,y1:t.getCenter().y,x2:t.getCenter().x,y2:t.getCenter().y})}!t&&0<i.selected.length&&e(i.selected[0]),t&&i.pickedRandomly&&e(i.pickedRandomly)}minervaDefine(function(){return{register:d,unregister:l,getName:c,getVersion:s}})},{"../css/styles.css":2}]},{},[3]);
