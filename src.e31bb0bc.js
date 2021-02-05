// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\icons\\arrow-half-wite.svg":[["arrow-half-wite.5e712f5b.svg","images/icons/arrow-half-wite.svg"],"images/icons/arrow-half-wite.svg"],"./..\\images\\icons\\half-arrow-right.svg":[["half-arrow-right.cbb4a0dd.svg","images/icons/half-arrow-right.svg"],"images/icons/half-arrow-right.svg"],"./..\\images\\card-icons\\visa.svg":[["visa.5701e722.svg","images/card-icons/visa.svg"],"images/card-icons/visa.svg"],"./..\\images\\card-icons\\mastercard.svg":[["mastercard.de7dc411.svg","images/card-icons/mastercard.svg"],"images/card-icons/mastercard.svg"],"./..\\images\\card-icons\\mir.svg":[["mir.994fbfca.svg","images/card-icons/mir.svg"],"images/card-icons/mir.svg"],"./..\\images\\hero\\ellipse-mobile.png":[["ellipse-mobile.82612833.png","images/hero/ellipse-mobile.png"],"images/hero/ellipse-mobile.png"],"./..\\images\\hero\\ellipse-mobile@2x.png":[["ellipse-mobile@2x.8a95fe06.png","images/hero/ellipse-mobile@2x.png"],"images/hero/ellipse-mobile@2x.png"],"./..\\images\\hero\\ellipse-tablet.png":[["ellipse-tablet.83b25ccc.png","images/hero/ellipse-tablet.png"],"images/hero/ellipse-tablet.png"],"./..\\images\\hero\\ellipse-tablet@2x.png":[["ellipse-tablet@2x.a103ecaf.png","images/hero/ellipse-tablet@2x.png"],"images/hero/ellipse-tablet@2x.png"],"./..\\images\\hero\\slider-pic5-tablet.png":[["slider-pic5-tablet.63f0e366.png","images/hero/slider-pic5-tablet.png"],"images/hero/slider-pic5-tablet.png"],"./..\\images\\hero\\slider-pic5-tablet@2x.png":[["slider-pic5-tablet@2x.d030248d.png","images/hero/slider-pic5-tablet@2x.png"],"images/hero/slider-pic5-tablet@2x.png"],"./..\\images\\hero\\slider-pic4-tablet.png":[["slider-pic4-tablet.6d79f3fd.png","images/hero/slider-pic4-tablet.png"],"images/hero/slider-pic4-tablet.png"],"./..\\images\\hero\\slider-pic4-tablet@2x.png":[["slider-pic4-tablet@2x.726f9fe1.png","images/hero/slider-pic4-tablet@2x.png"],"images/hero/slider-pic4-tablet@2x.png"],"./..\\images\\hero\\ellipse-desktop.png":[["ellipse-desktop.548edcaf.png","images/hero/ellipse-desktop.png"],"images/hero/ellipse-desktop.png"],"./..\\images\\hero\\ellipse-desktop@2x.png":[["ellipse-desktop@2x.a32c28a8.png","images/hero/ellipse-desktop@2x.png"],"images/hero/ellipse-desktop@2x.png"],"./..\\images\\hero\\slider-pic5-desktop.png":[["slider-pic5-desktop.7b54f216.png","images/hero/slider-pic5-desktop.png"],"images/hero/slider-pic5-desktop.png"],"./..\\images\\hero\\slider-pic5-desktop@2x.png":[["slider-pic5-desktop@2x.1cb0712b.png","images/hero/slider-pic5-desktop@2x.png"],"images/hero/slider-pic5-desktop@2x.png"],"./..\\images\\hero\\slider-pic4-desktop.png":[["slider-pic4-desktop.b091b645.png","images/hero/slider-pic4-desktop.png"],"images/hero/slider-pic4-desktop.png"],"./..\\images\\hero\\slider-pic4-desktop@2x.png":[["slider-pic4-desktop@2x.60bf4400.png","images/hero/slider-pic4-desktop@2x.png"],"images/hero/slider-pic4-desktop@2x.png"],"./..\\images\\icons\\arrow-right.png":[["arrow-right.0870e27a.png","images/icons/arrow-right.png"],"images/icons/arrow-right.png"],"./..\\images\\icons\\arrow-right@2x.png":[["arrow-right@2x.2ff403e8.png","images/icons/arrow-right@2x.png"],"images/icons/arrow-right@2x.png"],"./..\\images\\hero\\slider-pic7-mobile.png":[["slider-pic7-mobile.5d004874.png","images/hero/slider-pic7-mobile.png"],"images/hero/slider-pic7-mobile.png"],"./..\\images\\hero\\slider-pic7-mobile@2x.png":[["slider-pic7-mobile@2x.598e3d1f.png","images/hero/slider-pic7-mobile@2x.png"],"images/hero/slider-pic7-mobile@2x.png"],"./..\\images\\hero\\slider-pic7-tablet.png":[["slider-pic7-tablet.db5c8d7a.png","images/hero/slider-pic7-tablet.png"],"images/hero/slider-pic7-tablet.png"],"./..\\images\\hero\\slider-pic7-tablet@2x.png":[["slider-pic7-tablet@2x.1a82d800.png","images/hero/slider-pic7-tablet@2x.png"],"images/hero/slider-pic7-tablet@2x.png"],"./..\\images\\hero\\slider-pic7-desktop.png":[["slider-pic7-desktop.1e13540e.png","images/hero/slider-pic7-desktop.png"],"images/hero/slider-pic7-desktop.png"],"./..\\images\\hero\\slider-pic7-desktop@2x.png":[["slider-pic7-desktop@2x.79266187.png","images/hero/slider-pic7-desktop@2x.png"],"images/hero/slider-pic7-desktop@2x.png"],"./..\\images\\products\\home-pic1-mobile.png":[["home-pic1-mobile.3a89392a.png","images/products/home-pic1-mobile.png"],"images/products/home-pic1-mobile.png"],"./..\\images\\products\\home-pic1-tablet.png":[["home-pic1-tablet.8614c1e1.png","images/products/home-pic1-tablet.png"],"images/products/home-pic1-tablet.png"],"./..\\images\\products\\home-pic1-desktop.png":[["home-pic1-desktop.36a1be94.png","images/products/home-pic1-desktop.png"],"images/products/home-pic1-desktop.png"],"./..\\images\\products\\home-pic2-mobile.png":[["home-pic2-mobile.e781c29c.png","images/products/home-pic2-mobile.png"],"images/products/home-pic2-mobile.png"],"./..\\images\\products\\home-pic2-tablet.png":[["home-pic2-tablet.3ad815da.png","images/products/home-pic2-tablet.png"],"images/products/home-pic2-tablet.png"],"./..\\images\\products\\home-pic2-desktop.png":[["home-pic2-desktop.23214a09.png","images/products/home-pic2-desktop.png"],"images/products/home-pic2-desktop.png"],"./..\\images\\products\\home-pic3-mobile.png":[["home-pic3-mobile.a33881be.png","images/products/home-pic3-mobile.png"],"images/products/home-pic3-mobile.png"],"./..\\images\\products\\home-pic3-tablet.png":[["home-pic3-tablet.5aea7708.png","images/products/home-pic3-tablet.png"],"images/products/home-pic3-tablet.png"],"./..\\images\\products\\home-pic3-desktop.png":[["home-pic3-desktop.6b6ff4cd.png","images/products/home-pic3-desktop.png"],"images/products/home-pic3-desktop.png"],"./..\\images\\icons\\arrow-right.svg":[["arrow-right.776cb8d4.svg","images/icons/arrow-right.svg"],"images/icons/arrow-right.svg"],"./..\\images\\icons\\group-circles.svg":[["group-circles.1024f343.svg","images/icons/group-circles.svg"],"images/icons/group-circles.svg"],"./..\\images\\manufacture\\sectionbg1-mobile.png":[["sectionbg1-mobile.7c2cdf6b.png","images/manufacture/sectionbg1-mobile.png"],"images/manufacture/sectionbg1-mobile.png"],"./..\\images\\manufacture\\sectionbg1-mobile@2x.png":[["sectionbg1-mobile@2x.18f49684.png","images/manufacture/sectionbg1-mobile@2x.png"],"images/manufacture/sectionbg1-mobile@2x.png"],"./..\\images\\manufacture\\sectionbg1-desktop.png":[["sectionbg1-desktop.98b5fea1.png","images/manufacture/sectionbg1-desktop.png"],"images/manufacture/sectionbg1-desktop.png"],"./..\\images\\manufacture\\sectionbg1-desktop@2x.png":[["sectionbg1-desktop@2x.39289c3e.png","images/manufacture/sectionbg1-desktop@2x.png"],"images/manufacture/sectionbg1-desktop@2x.png"],"./..\\images\\icons\\milk.svg":[["milk.f8f2c7e9.svg","images/icons/milk.svg"],"images/icons/milk.svg"],"./..\\images\\icons\\apple.svg":[["apple.3b10bd52.svg","images/icons/apple.svg"],"images/icons/apple.svg"],"./..\\images\\icons\\lollipop.svg":[["lollipop.eb45a5fb.svg","images/icons/lollipop.svg"],"images/icons/lollipop.svg"],"./..\\images\\icons\\arrowsquare.svg":[["arrowsquare.1668d77b.svg","images/icons/arrowsquare.svg"],"images/icons/arrowsquare.svg"],"./..\\images\\icons\\home.svg":[["home.6770a1b9.svg","images/icons/home.svg"],"images/icons/home.svg"],"./..\\images\\icons\\brackets.svg":[["brackets.adba9281.svg","images/icons/brackets.svg"],"images/icons/brackets.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./sass/main.scss");
},{"./sass/main.scss":"sass/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "53643" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map