!function r(a,c,d){function l(n,t){if(!c[n]){if(!a[n]){var e="function"==typeof require&&require;if(!t&&e)return e(n,!0);if(s)return s(n,!0);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}var o=c[n]={exports:{}};a[n][0].call(o.exports,function(t){var e=a[n][1][t];return l(e||t)},o,o.exports,r,a,c,d)}return c[n].exports}for(var s="function"==typeof require&&require,t=0;t<d.length;t++)l(d[t]);return l}({1:[function(t,e,n){"use strict";var o=[],a=function(t,e){var n=document.head||document.getElementsByTagName("head")[0],i=o[o.length-1];if((e=e||{}).insertAt=e.insertAt||"bottom","top"===e.insertAt)i?i.nextSibling?n.insertBefore(t,i.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),o.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}};e.exports={createLink:function(t,e){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("link");for(var o in i.href=t,i.rel="stylesheet",e)if(e.hasOwnProperty(o)){var r=e[o];i.setAttribute("data-"+o,r)}n.appendChild(i)},createStyle:function(t,e,n){n=n||{};var i=document.createElement("style");for(var o in i.type="text/css",e)if(e.hasOwnProperty(o)){var r=e[o];i.setAttribute("data-"+o,r)}i.sheet?(i.innerHTML=t,i.sheet.cssText=t,a(i,{insertAt:n.insertAt})):i.styleSheet?(a(i,{insertAt:n.insertAt}),i.styleSheet.cssText=t):(i.appendChild(document.createTextNode(t)),a(i,{insertAt:n.insertAt}))}}},{}],2:[function(t,e,n){var i=".starter-kit-container {\n  padding: 10px;\n  height: 100%;\n  background-color: #bada55;\n}\n.btn-uniprot,\n.btn-pick-random {\n  margin-bottom: 5px;\n}\n";t("browserify-css").createStyle(i,{href:"src\\css\\styles.css"},{insertAt:"bottom"}),e.exports=i},{"browserify-css":1}],3:[function(t,e,n){"use strict";t("../css/styles.css");var i="starter-kit",o={selected:[]},r=void 0,a=void 0,c=function(t){var e;console.log("registering "+i+" plugin"),$(".tab-content").css("position","relative"),r=t,a=$(r.element),a.attr("id"),console.log("minerva object ",r),console.log("project id: ",r.project.data.getProjectId()),console.log("model id: ",r.project.data.getModels()[0].modelId),r.project.map.addListener({dbOverlayName:"search",type:"onSearch",callback:p}),(e=$('<div class="'+i+'-container"></div>').appendTo(a)).append('\n        <div class="panel panel-default panel-events">\n            <div class="panel-heading">Events (Select an element in the map)</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),e.append('<button type="button" class="btn-highlight btn btn-primary btn-default btn-block">Highlight</button>'),e.append('<button type="button" class="btn-focus btn btn-primary btn-default btn-block">Focus</button>'),e.append("<hr>"),e.append('<button type="button" class="btn-pick-random btn btn-primary btn-default btn-block">Retrieve random object from map</button>'),e.append('\n        <div class="panel panel-default panel-randomly-picked">\n            <div class="panel-heading">Randomly picked object</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),e.append('<button type="button" class="btn-focus-random btn btn-primary btn-default btn-block">Focus</button>'),e.append('<button type="button" class="btn-highlight-random btn btn-primary btn-default btn-block">Highlight</button>'),e.append("<hr>"),e.append('<button type="button" class="btn-uniprot btn btn-primary btn-default btn-block">Retrieve from UniProt</button>'),e.append('\n        <div class="panel panel-default panel-uniprot">\n            <div class="panel-heading">Uniprot records for the picked object</div>\n            <div class="panel-body">\n                <code></code>\n            </div>\n        </div>\n    '),e.find(".btn-highlight").on("click",function(){return u()}),e.find(".btn-focus").on("click",function(){return b()}),e.find(".btn-pick-random").on("click",function(){return function(){function e(){o.picked=o.allBioEntities[Math.floor(Math.random()*o.allBioEntities.length)];var t=o.picked.constructor.name+" - ";"Alias"===o.picked.constructor.name?t+=o.picked.getElementId()+" - "+o.picked.getName():t+=""+o.picked.getReactionId(),a.find(".panel-randomly-picked .panel-body").html(t)}o.allBioEntities?e():r.project.data.getAllBioEntities().then(function(t){o.allBioEntities=t,e()})}()}),e.find(".btn-highlight-random").on("click",function(){return u(!0)}),e.find(".btn-focus-random").on("click",function(){return b(!0)}),e.find(".btn-uniprot").on("click",function(){return t=a.find(".panel-uniprot .panel-randomly-picked").text(),void $.ajax({type:"GET",url:"https://www.uniprot.org/uniprot/?query="+t+"&sort=score&columns=id,entry%20name,reviewed,protein%20names,3d,genes,organism,length&format=tab&limit=10"}).then(function(t){a.find(".panel-uniprot .panel-body code").html(JSON.stringify(t))});var t})},d=function(){return console.log("unregistering "+i+" plugin"),r.project.map.removeAllListeners(),r.project.map.getHighlightedBioEntities().then(function(t){return r.project.map.hideBioEntity(t)})},l=function(){return i},s=function(){return"1.0.0"};function p(t){o.selected=t[0];var e="";0<o.selected.length&&o.selected.forEach(function(t){"Alias"===t.constructor.name&&(e+="<div>"+t.getName()+" - "+t.getElementId()+"</div>")}),a.find(".panel-events .panel-body").html(e)}function u(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=[];t?o.picked&&e.push({element:{id:o.picked.id,modelId:o.picked.getModelId(),type:o.picked.constructor.name.toUpperCase()},type:"SURFACE",options:{color:"#00FF00",opacity:.5}}):o.selected.forEach(function(t){e.push({element:{id:t.id,modelId:t.getModelId(),type:"ALIAS"},type:"SURFACE",options:{color:"#FF0000",opacity:.5}})}),r.project.map.showBioEntity(e)}function b(){var t=0<arguments.length&&void 0!==arguments[0]&&arguments[0];function e(t){"Alias"===t.constructor.name?r.project.map.fitBounds({modelId:t.getModelId(),x1:t.getX(),y1:t.getY(),x2:t.getX()+t.getWidth(),y2:t.getY()+t.getHeight()}):r.project.map.fitBounds({modelId:t.getModelId(),x1:t.getCenter().x,y1:t.getCenter().y,x2:t.getCenter().x,y2:t.getCenter().x})}!t&&0<o.selected.length&&e(o.selected[0]),t&&o.picked&&e(o.picked)}minervaDefine(function(){return{register:c,unregister:d,getName:l,getVersion:s}})},{"../css/styles.css":2}]},{},[3]);