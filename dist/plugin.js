!function a(r,l,d){function s(n,e){if(!l[n]){if(!r[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(c)return c(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var i=l[n]={exports:{}};r[n][0].call(i.exports,function(e){var t=r[n][1][e];return s(t||e)},i,i.exports,a,r,l,d)}return l[n].exports}for(var c="function"==typeof require&&require,e=0;e<d.length;e++)s(d[e]);return s}({1:[function(e,t,n){"use strict";var i=[],r=function(e,t){var n=document.head||document.getElementsByTagName("head")[0],o=i[i.length-1];if((t=t||{}).insertAt=t.insertAt||"bottom","top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),i.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}};t.exports={createLink:function(e,t){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("link");for(var i in o.href=e,o.rel="stylesheet",t)if(t.hasOwnProperty(i)){var a=t[i];o.setAttribute("data-"+i,a)}n.appendChild(o)},createStyle:function(e,t,n){n=n||{};var o=document.createElement("style");for(var i in o.type="text/css",t)if(t.hasOwnProperty(i)){var a=t[i];o.setAttribute("data-"+i,a)}o.sheet?(o.innerHTML=e,o.sheet.cssText=e,r(o,{insertAt:n.insertAt})):o.styleSheet?(r(o,{insertAt:n.insertAt}),o.styleSheet.cssText=e):(o.appendChild(document.createTextNode(e)),r(o,{insertAt:n.insertAt}))}}},{}],2:[function(e,t,n){var o=".starter-kit-container {\n  padding: 10px;\n  background-color: #bada55;\n}\n.btn-uniprot,\n.btn-pick-random,\n.btn-minerva,\n.btn-aliases {\n  margin-bottom: 5px;\n}\n";e("browserify-css").createStyle(o,{href:"src/css/styles.css"},{insertAt:"bottom"}),t.exports=o},{"browserify-css":1}],3:[function(e,t,n){"use strict";e("../css/styles.css");var o="starter-kit",i={selected:[],allBioEntities:[],pickedRandomly:void 0},a=void 0,r=void 0,l=function(e){var t;console.log("registering "+o+" plugin"),$(".tab-content").css("position","relative"),a=e,r=$(a.element),r.attr("id"),console.log("minerva object ",a),console.log("project id: ",a.project.data.getProjectId()),console.log("model id: ",a.project.data.getModels()[0].modelId),a.project.map.addListener({dbOverlayName:"search",type:"onSearch",callback:p}),a.project.map.addListener({object:"overlay",type:"onHide",callback:u}),a.project.map.addListener({object:"overlay",type:"onShow",callback:u}),(t=$('<div class="'+o+'-container"></div>').appendTo(r)).append('\n        <div class="panel panel-default panel-events">\n            <div class="panel-heading">Events (Select an element in the map)</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),t.append('<button type="button" class="btn-focus btn btn-primary btn-default btn-block">Focus</button>'),t.append('<button type="button" class="btn-highlight btn btn-primary btn-default btn-block">Highlight</button>'),t.append("<hr>"),t.append('<button type="button" class="btn-pick-random btn btn-primary btn-default btn-block">Retrieve random object from map</button>'),t.append('\n        <div class="panel panel-default panel-randomly-picked">\n            <div class="panel-heading">Randomly picked object</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),t.append('<button type="button" class="btn-focus-random btn btn-primary btn-default btn-block">Focus</button>'),t.append('<button type="button" class="btn-highlight-random btn btn-primary btn-default btn-block">Highlight</button>'),t.append("<hr>"),t.append("<h4>Query UniProt API</h4>"),t.append('<button type="button" class="btn-uniprot btn btn-primary btn-default btn-block">Retrieve from UniProt</button>'),t.append('\n        <div class="panel panel-default panel-uniprot">\n            <div class="panel-heading">Uniprot records for the picked object</div>\n            <div class="panel-body">\n                <code></code>\n            </div>\n        </div>\n    '),t.append("<hr>"),t.append("<h4>Query Minerva API</h4>"),t.append('\n        <form class="form-horizontal">\n            <div class="form-group">\n                <label class="col-sm-2 control-label">Address</label>\n                <div class="col-sm-10">\n                    <input class="input-minerva-address form-control" placeholder="https://minerva-dev.lcsb.uni.lu/minerva">\n                </div>\n            </div>\n            <div class="form-group">\n                <label class="col-sm-2 control-label">Project ID</label>\n                <div class="col-sm-10">\n                    <input class="input-minerva-projectid form-control" placeholder="sample2">\n                </div>\n            </div>                        \n        </form>\n        <button type="button" class="btn-minerva btn btn-primary btn-default btn-block">Retrieve from Minerva</button>\n        <div class="panel panel-default panel-minerva">\n            <div class="panel-heading">Names of elements</div>\n            <div class="panel-body">                \n            </div>\n        </div>\n    '),t.append("<hr>"),t.append("<h4>Show species by alias</h4>"),t.append('\n        <form class="form-horizontal">\n            <div class="col-sm-10">\n                <input class="input-aliases-to-higlight form-control" placeholder="species aliases">\n            </div>                        \n        </form>\n        <button type="button" class="btn-aliases btn btn-primary btn-default btn-block">Highlight</button>\n    '),t.find(".btn-highlight").on("click",function(){return m()}),t.find(".btn-focus").on("click",function(){return b()}),t.find(".btn-pick-random").on("click",function(){return function(){function t(){i.pickedRandomly=i.allBioEntities[Math.floor(Math.random()*i.allBioEntities.length)];var e=i.pickedRandomly.constructor.name+" - ";"Alias"===i.pickedRandomly.constructor.name?e+=i.pickedRandomly.getElementId()+" - "+i.pickedRandomly.getName():e+=""+i.pickedRandomly.getReactionId(),r.find(".panel-randomly-picked .panel-body").html(e)}0<i.allBioEntities.length?t():a.project.data.getAllBioEntities().then(function(e){i.allBioEntities=e,t()})}()}),t.find(".btn-highlight-random").on("click",function(){return m(!0)}),t.find(".btn-focus-random").on("click",function(){return b(!0)}),t.find(".btn-uniprot").on("click",function(){return e=r.find(".panel-randomly-picked .panel-body").text(),void $.ajax({type:"GET",url:"https://www.uniprot.org/uniprot/?query="+e+"&sort=score&columns=id,entry%20name,reviewed,protein%20names,3d,genes,organism,length&format=tab&limit=10"}).then(function(e){r.find(".panel-uniprot .panel-body code").text(e)});var e}),t.find(".btn-minerva").on("click",function(){return e=r.find(".input-minerva-address").val(),t=r.find(".input-minerva-projectid").val(),void $.getJSON(e+"/api/doLogin").then(function(){return $.getJSON(e+"/api/projects/"+t+"/models/")}).then(function(e){console.log("models"),r.find(".panel-minerva .panel-body").text(e)});var e,t})},d=function(){return console.log("unregistering "+o+" plugin"),a.project.map.removeAllListeners(),a.project.map.getHighlightedBioEntities().then(function(e){return a.project.map.hideBioEntity(e)})},s=function(){return o},c=function(){return"1.0.0"};function p(e){i.selected=e[0];var t="";0<i.selected.length&&i.selected.forEach(function(e){"Alias"===e.constructor.name&&(t+="<div>"+e.getName()+" - "+e.getElementId()+"</div>")}),r.find(".panel-events .panel-body").html(t)}function u(e){a.project.map.getVisibleDataOverlays().then(function(e){for(var t=[],n="",o=0;o<e.length;o++)n+=e[o].getName()+",",e[o].getAliases().forEach(function(e){t.push({element:{id:e.id,modelId:e.getModelId(),type:"ALIAS"},type:"ICON"})});r.find(".panel-events .panel-body").html(n),console.log("overlays: ",e),a.project.map.showBioEntity(t)})}function m(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0],t=[];e?i.pickedRandomly&&t.push({element:{id:i.pickedRandomly.id,modelId:i.pickedRandomly.getModelId(),type:i.pickedRandomly.constructor.name.toUpperCase()},type:"SURFACE",options:{color:"#00FF00",opacity:.5}}):i.selected.forEach(function(e){t.push({element:{id:e.id,modelId:e.getModelId(),type:"ALIAS"},type:"ICON"})}),a.project.map.showBioEntity(t)}function b(){var e=0<arguments.length&&void 0!==arguments[0]&&arguments[0];function t(e){"Alias"===e.constructor.name?a.project.map.fitBounds({modelId:e.getModelId(),x1:e.getX(),y1:e.getY(),x2:e.getX()+e.getWidth(),y2:e.getY()+e.getHeight()}):a.project.map.fitBounds({modelId:e.getModelId(),x1:e.getCenter().x,y1:e.getCenter().y,x2:e.getCenter().x,y2:e.getCenter().y})}!e&&0<i.selected.length&&t(i.selected[0]),e&&i.pickedRandomly&&t(i.pickedRandomly)}minervaDefine(function(){return{register:l,unregister:d,getName:s,getVersion:c}})},{"../css/styles.css":2}]},{},[3]);
