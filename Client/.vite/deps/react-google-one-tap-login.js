import {
  require_react
} from "./chunk-D3R7NK7K.js";
import {
  __toESM
} from "./chunk-WXXH56N5.js";

// node_modules/.pnpm/react-google-one-tap-login@0.1.1_react@18.3.1/node_modules/react-google-one-tap-login/dist/index.es5.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
      if (e.indexOf(p[i]) < 0)
        t[p[i]] = s[p[i]];
  }
  return t;
}
function useScript(src) {
  var _a = (0, import_react.useState)(src ? "loading" : "idle"), status = _a[0], setStatus = _a[1];
  (0, import_react.useEffect)(function() {
    if (!src) {
      setStatus("idle");
      return;
    }
    var script = document.querySelector('script[src="' + src + '"]');
    if (!script) {
      script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.setAttribute("data-status", "loading");
      document.body.appendChild(script);
      var setAttributeFromEvent = function(event) {
        !!script && script.setAttribute("data-status", event.type === "load" ? "ready" : "error");
      };
      script.addEventListener("load", setAttributeFromEvent);
      script.addEventListener("error", setAttributeFromEvent);
    } else {
      setStatus(script.getAttribute("data-status") || "idle");
    }
    var setStateFromEvent = function(event) {
      setStatus(event.type === "load" ? "ready" : "error");
    };
    script.addEventListener("load", setStateFromEvent);
    script.addEventListener("error", setStateFromEvent);
    return function() {
      if (script) {
        script.removeEventListener("load", setStateFromEvent);
        script.removeEventListener("error", setStateFromEvent);
      }
    };
  }, [src]);
  return status;
}
var scriptFlag = "__googleOneTapScript__";
var googleClientScriptURL = "https://accounts.google.com/gsi/client";
var oauthEndpointURL = "https://oauth2.googleapis.com/tokeninfo?id_token=";
function callback(_a) {
  var data = _a.data, onError = _a.onError, onSuccess = _a.onSuccess;
  if (data === null || data === void 0 ? void 0 : data.credential) {
    fetch("" + oauthEndpointURL + data.credential).then(function(resp) {
      if ((resp === null || resp === void 0 ? void 0 : resp.status) === 200 && (resp === null || resp === void 0 ? void 0 : resp.json)) {
        return resp.json();
      } else {
        if (onError) {
          onError();
        }
        throw new Error("Something went wrong");
      }
    }).then(function(resp) {
      if (onSuccess) {
        onSuccess(resp);
      }
    }).catch(function(error) {
      if (onError) {
        onError(error);
      }
      throw error;
    });
  }
}
function useGoogleOneTapLogin(_a) {
  var onError = _a.onError, disabled = _a.disabled, onSuccess = _a.onSuccess, googleAccountConfigs = _a.googleAccountConfigs, _b = _a.disableCancelOnUnmount, disableCancelOnUnmount = _b === void 0 ? false : _b;
  var script = useScript(googleClientScriptURL);
  var callbackToUse = googleAccountConfigs.callback ? googleAccountConfigs.callback : function(data) {
    return callback({ data, onError, onSuccess });
  };
  (0, import_react.useEffect)(function() {
    if (!(window === null || window === void 0 ? void 0 : window[scriptFlag]) && window.google && script === "ready") {
      window.google.accounts.id.initialize(__assign(__assign({}, googleAccountConfigs), { callback: callbackToUse }));
      window[scriptFlag] = true;
    }
    if ((window === null || window === void 0 ? void 0 : window[scriptFlag]) && script === "ready" && !disabled) {
      window.google.accounts.id.prompt();
      return function() {
        if (!disableCancelOnUnmount) {
          window.google.accounts.id.cancel();
        }
      };
    }
  }, [script, window === null || window === void 0 ? void 0 : window[scriptFlag], disabled]);
  return null;
}
function GoogleOneTapLogin(_a) {
  var _b = _a.children, children = _b === void 0 ? null : _b, props = __rest(_a, ["children"]);
  useGoogleOneTapLogin(props);
  return children;
}
var index = (0, import_react.memo)(GoogleOneTapLogin);
var index_es5_default = index;
export {
  index_es5_default as default,
  useGoogleOneTapLogin
};
/*! Bundled license information:

react-google-one-tap-login/dist/index.es5.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** *)
*/
//# sourceMappingURL=react-google-one-tap-login.js.map
