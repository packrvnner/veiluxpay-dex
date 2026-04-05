import Or, { useState as Qt, useEffect as Qe, useMemo as Mt, useCallback as xn } from "react";
import { useTranslation as Ir } from "@pancakeswap/localization";
import { Svg as _r, Flex as Pr, Link as wn, Message as En, MessageText as Fn, useToast as vn } from "@pancakeswap/uikit";
import { useBridge as Cn, cBridge as kn, deBridge as An, stargate as Bn, layerZero as Tn, meson as Sn, mayan as Dn, locales as Rn, createGTMEventListener as On, EventTypes as It, CanonicalBridgeProvider as In, BridgeTransfer as _n, BridgeRoutes as Pn } from "@bnb-chain/canonical-bridge-widget";
import { allCasesNameToChainId as Un } from "@pancakeswap/chains";
import { keyframes as Nn, styled as Ur, createGlobalStyle as Ln, useTheme as jn } from "styled-components";
import { useBytecode as $n, useAccount as Mn } from "wagmi";
function zn(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nr = { exports: {} }, H = Nr.exports = {}, oe, ae;
function zt() {
  throw new Error("setTimeout has not been defined");
}
function Ht() {
  throw new Error("clearTimeout has not been defined");
}
(function() {
  try {
    typeof setTimeout == "function" ? oe = setTimeout : oe = zt;
  } catch {
    oe = zt;
  }
  try {
    typeof clearTimeout == "function" ? ae = clearTimeout : ae = Ht;
  } catch {
    ae = Ht;
  }
})();
function Lr(e) {
  if (oe === setTimeout)
    return setTimeout(e, 0);
  if ((oe === zt || !oe) && setTimeout)
    return oe = setTimeout, setTimeout(e, 0);
  try {
    return oe(e, 0);
  } catch {
    try {
      return oe.call(null, e, 0);
    } catch {
      return oe.call(this, e, 0);
    }
  }
}
function Hn(e) {
  if (ae === clearTimeout)
    return clearTimeout(e);
  if ((ae === Ht || !ae) && clearTimeout)
    return ae = clearTimeout, clearTimeout(e);
  try {
    return ae(e);
  } catch {
    try {
      return ae.call(null, e);
    } catch {
      return ae.call(this, e);
    }
  }
}
var fe = [], Ne = !1, ke, ht = -1;
function qn() {
  !Ne || !ke || (Ne = !1, ke.length ? fe = ke.concat(fe) : ht = -1, fe.length && jr());
}
function jr() {
  if (!Ne) {
    var e = Lr(qn);
    Ne = !0;
    for (var r = fe.length; r; ) {
      for (ke = fe, fe = []; ++ht < r; )
        ke && ke[ht].run();
      ht = -1, r = fe.length;
    }
    ke = null, Ne = !1, Hn(e);
  }
}
H.nextTick = function(e) {
  var r = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var i = 1; i < arguments.length; i++)
      r[i - 1] = arguments[i];
  fe.push(new $r(e, r)), fe.length === 1 && !Ne && Lr(jr);
};
function $r(e, r) {
  this.fun = e, this.array = r;
}
$r.prototype.run = function() {
  this.fun.apply(null, this.array);
};
H.title = "browser";
H.browser = !0;
H.env = {};
H.argv = [];
H.version = "";
H.versions = {};
function me() {
}
H.on = me;
H.addListener = me;
H.once = me;
H.off = me;
H.removeListener = me;
H.removeAllListeners = me;
H.emit = me;
H.prependListener = me;
H.prependOnceListener = me;
H.listeners = function(e) {
  return [];
};
H.binding = function(e) {
  throw new Error("process.binding is not supported");
};
H.cwd = function() {
  return "/";
};
H.chdir = function(e) {
  throw new Error("process.chdir is not supported");
};
H.umask = function() {
  return 0;
};
var Wn = Nr.exports;
const Zt = /* @__PURE__ */ zn(Wn);
var qt = { exports: {} }, Ve = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr;
function Vn() {
  if (hr)
    return Ve;
  hr = 1;
  var e = Or, r = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(m, x, E) {
    var d, b = {}, k = null, T = null;
    E !== void 0 && (k = "" + E), x.key !== void 0 && (k = "" + x.key), x.ref !== void 0 && (T = x.ref);
    for (d in x)
      a.call(x, d) && !l.hasOwnProperty(d) && (b[d] = x[d]);
    if (m && m.defaultProps)
      for (d in x = m.defaultProps, x)
        b[d] === void 0 && (b[d] = x[d]);
    return { $$typeof: r, type: m, key: k, ref: T, props: b, _owner: c.current };
  }
  return Ve.Fragment = i, Ve.jsx = u, Ve.jsxs = u, Ve;
}
var Ge = {}, mr;
function Gn() {
  return mr || (mr = 1, Zt.env.NODE_ENV !== "production" && function() {
    var e = Or, r = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), m = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), v = Symbol.iterator, C = "@@iterator";
    function N(p) {
      if (p === null || typeof p != "object")
        return null;
      var w = v && p[v] || p[C];
      return typeof w == "function" ? w : null;
    }
    var A = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(p) {
      {
        for (var w = arguments.length, F = new Array(w > 1 ? w - 1 : 0), B = 1; B < w; B++)
          F[B - 1] = arguments[B];
        G("error", p, F);
      }
    }
    function G(p, w, F) {
      {
        var B = A.ReactDebugCurrentFrame, U = B.getStackAddendum();
        U !== "" && (w += "%s", F = F.concat([U]));
        var j = F.map(function(O) {
          return String(O);
        });
        j.unshift("Warning: " + w), Function.prototype.apply.call(console[p], console, j);
      }
    }
    var ne = !1, $e = !1, tt = !1, Bt = !1, ue = !1, Me;
    Me = Symbol.for("react.module.reference");
    function rt(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === a || p === l || ue || p === c || p === E || p === d || Bt || p === T || ne || $e || tt || typeof p == "object" && p !== null && (p.$$typeof === k || p.$$typeof === b || p.$$typeof === u || p.$$typeof === m || p.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === Me || p.getModuleId !== void 0));
    }
    function Tt(p, w, F) {
      var B = p.displayName;
      if (B)
        return B;
      var U = w.displayName || w.name || "";
      return U !== "" ? F + "(" + U + ")" : F;
    }
    function nt(p) {
      return p.displayName || "Context";
    }
    function te(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case a:
          return "Fragment";
        case i:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case E:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case m:
            var w = p;
            return nt(w) + ".Consumer";
          case u:
            var F = p;
            return nt(F._context) + ".Provider";
          case x:
            return Tt(p, p.render, "ForwardRef");
          case b:
            var B = p.displayName || null;
            return B !== null ? B : te(p.type) || "Memo";
          case k: {
            var U = p, j = U._payload, O = U._init;
            try {
              return te(O(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var de = Object.assign, xe = 0, it, ze, He, ot, at, st, ct;
    function lt() {
    }
    lt.__reactDisabledLog = !0;
    function q() {
      {
        if (xe === 0) {
          it = console.log, ze = console.info, He = console.warn, ot = console.error, at = console.group, st = console.groupCollapsed, ct = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: lt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        xe++;
      }
    }
    function K() {
      {
        if (xe--, xe === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: de({}, p, {
              value: it
            }),
            info: de({}, p, {
              value: ze
            }),
            warn: de({}, p, {
              value: He
            }),
            error: de({}, p, {
              value: ot
            }),
            group: de({}, p, {
              value: at
            }),
            groupCollapsed: de({}, p, {
              value: st
            }),
            groupEnd: de({}, p, {
              value: ct
            })
          });
        }
        xe < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ae = A.ReactCurrentDispatcher, Be;
    function we(p, w, F) {
      {
        if (Be === void 0)
          try {
            throw Error();
          } catch (U) {
            var B = U.stack.trim().match(/\n( *(at )?)/);
            Be = B && B[1] || "";
          }
        return `
` + Be + p;
      }
    }
    var Te = !1, Ee;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      Ee = new be();
    }
    function Se(p, w) {
      if (!p || Te)
        return "";
      {
        var F = Ee.get(p);
        if (F !== void 0)
          return F;
      }
      var B;
      Te = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Ae.current, Ae.current = null, q();
      try {
        if (w) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (pe) {
              B = pe;
            }
            Reflect.construct(p, [], O);
          } else {
            try {
              O.call();
            } catch (pe) {
              B = pe;
            }
            p.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            B = pe;
          }
          p();
        }
      } catch (pe) {
        if (pe && B && typeof pe.stack == "string") {
          for (var D = pe.stack.split(`
`), J = B.stack.split(`
`), z = D.length - 1, W = J.length - 1; z >= 1 && W >= 0 && D[z] !== J[W]; )
            W--;
          for (; z >= 1 && W >= 0; z--, W--)
            if (D[z] !== J[W]) {
              if (z !== 1 || W !== 1)
                do
                  if (z--, W--, W < 0 || D[z] !== J[W]) {
                    var Q = `
` + D[z].replace(" at new ", " at ");
                    return p.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", p.displayName)), typeof p == "function" && Ee.set(p, Q), Q;
                  }
                while (z >= 1 && W >= 0);
              break;
            }
        }
      } finally {
        Te = !1, Ae.current = j, K(), Error.prepareStackTrace = U;
      }
      var Ie = p ? p.displayName || p.name : "", fr = Ie ? we(Ie) : "";
      return typeof p == "function" && Ee.set(p, fr), fr;
    }
    function ut(p, w, F) {
      return Se(p, !1);
    }
    function St(p) {
      var w = p.prototype;
      return !!(w && w.isReactComponent);
    }
    function Fe(p, w, F) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return Se(p, St(p));
      if (typeof p == "string")
        return we(p);
      switch (p) {
        case E:
          return we("Suspense");
        case d:
          return we("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case x:
            return ut(p.render);
          case b:
            return Fe(p.type, w, F);
          case k: {
            var B = p, U = B._payload, j = B._init;
            try {
              return Fe(j(U), w, F);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, ge = {}, dt = A.ReactDebugCurrentFrame;
    function De(p) {
      if (p) {
        var w = p._owner, F = Fe(p.type, p._source, w ? w.type : null);
        dt.setExtraStackFrame(F);
      } else
        dt.setExtraStackFrame(null);
    }
    function qe(p, w, F, B, U) {
      {
        var j = Function.call.bind(re);
        for (var O in p)
          if (j(p, O)) {
            var D = void 0;
            try {
              if (typeof p[O] != "function") {
                var J = Error((B || "React class") + ": " + F + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              D = p[O](w, O, B, F, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              D = z;
            }
            D && !(D instanceof Error) && (De(U), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", F, O, typeof D), De(null)), D instanceof Error && !(D.message in ge) && (ge[D.message] = !0, De(U), P("Failed %s type: %s", F, D.message), De(null));
          }
      }
    }
    var Dt = Array.isArray;
    function We(p) {
      return Dt(p);
    }
    function pt(p) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, F = w && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return F;
      }
    }
    function Re(p) {
      try {
        return X(p), !1;
      } catch {
        return !0;
      }
    }
    function X(p) {
      return "" + p;
    }
    function Oe(p) {
      if (Re(p))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(p)), X(p);
    }
    var ve = A.ReactCurrentOwner, ie = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ft, o, t;
    t = {};
    function n(p) {
      if (re.call(p, "ref")) {
        var w = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function s(p) {
      if (re.call(p, "key")) {
        var w = Object.getOwnPropertyDescriptor(p, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function f(p, w) {
      if (typeof p.ref == "string" && ve.current && w && ve.current.stateNode !== w) {
        var F = te(ve.current.type);
        t[F] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', te(ve.current.type), p.ref), t[F] = !0);
      }
    }
    function h(p, w) {
      {
        var F = function() {
          ft || (ft = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        F.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: F,
          configurable: !0
        });
      }
    }
    function g(p, w) {
      {
        var F = function() {
          o || (o = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        F.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: F,
          configurable: !0
        });
      }
    }
    var S = function(p, w, F, B, U, j, O) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: p,
        key: w,
        ref: F,
        props: O,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function M(p, w, F, B, U) {
      {
        var j, O = {}, D = null, J = null;
        F !== void 0 && (Oe(F), D = "" + F), s(w) && (Oe(w.key), D = "" + w.key), n(w) && (J = w.ref, f(w, U));
        for (j in w)
          re.call(w, j) && !ie.hasOwnProperty(j) && (O[j] = w[j]);
        if (p && p.defaultProps) {
          var z = p.defaultProps;
          for (j in z)
            O[j] === void 0 && (O[j] = z[j]);
        }
        if (D || J) {
          var W = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          D && h(O, W), J && g(O, W);
        }
        return S(p, D, J, U, B, ve.current, O);
      }
    }
    var L = A.ReactCurrentOwner, $ = A.ReactDebugCurrentFrame;
    function R(p) {
      if (p) {
        var w = p._owner, F = Fe(p.type, p._source, w ? w.type : null);
        $.setExtraStackFrame(F);
      } else
        $.setExtraStackFrame(null);
    }
    var Rt;
    Rt = !1;
    function Ot(p) {
      return typeof p == "object" && p !== null && p.$$typeof === r;
    }
    function cr() {
      {
        if (L.current) {
          var p = te(L.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function dn(p) {
      {
        if (p !== void 0) {
          var w = p.fileName.replace(/^.*[\\\/]/, ""), F = p.lineNumber;
          return `

Check your code at ` + w + ":" + F + ".";
        }
        return "";
      }
    }
    var lr = {};
    function pn(p) {
      {
        var w = cr();
        if (!w) {
          var F = typeof p == "string" ? p : p.displayName || p.name;
          F && (w = `

Check the top-level render call using <` + F + ">.");
        }
        return w;
      }
    }
    function ur(p, w) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var F = pn(w);
        if (lr[F])
          return;
        lr[F] = !0;
        var B = "";
        p && p._owner && p._owner !== L.current && (B = " It was passed a child from " + te(p._owner.type) + "."), R(p), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', F, B), R(null);
      }
    }
    function dr(p, w) {
      {
        if (typeof p != "object")
          return;
        if (We(p))
          for (var F = 0; F < p.length; F++) {
            var B = p[F];
            Ot(B) && ur(B, w);
          }
        else if (Ot(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var U = N(p);
          if (typeof U == "function" && U !== p.entries)
            for (var j = U.call(p), O; !(O = j.next()).done; )
              Ot(O.value) && ur(O.value, w);
        }
      }
    }
    function fn(p) {
      {
        var w = p.type;
        if (w == null || typeof w == "string")
          return;
        var F;
        if (typeof w == "function")
          F = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === x || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === b))
          F = w.propTypes;
        else
          return;
        if (F) {
          var B = te(w);
          qe(F, p.props, "prop", B, p);
        } else if (w.PropTypes !== void 0 && !Rt) {
          Rt = !0;
          var U = te(w);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hn(p) {
      {
        for (var w = Object.keys(p.props), F = 0; F < w.length; F++) {
          var B = w[F];
          if (B !== "children" && B !== "key") {
            R(p), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), R(null);
            break;
          }
        }
        p.ref !== null && (R(p), P("Invalid attribute `ref` supplied to `React.Fragment`."), R(null));
      }
    }
    function pr(p, w, F, B, U, j) {
      {
        var O = rt(p);
        if (!O) {
          var D = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = dn(U);
          J ? D += J : D += cr();
          var z;
          p === null ? z = "null" : We(p) ? z = "array" : p !== void 0 && p.$$typeof === r ? (z = "<" + (te(p.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : z = typeof p, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, D);
        }
        var W = M(p, w, F, U, j);
        if (W == null)
          return W;
        if (O) {
          var Q = w.children;
          if (Q !== void 0)
            if (B)
              if (We(Q)) {
                for (var Ie = 0; Ie < Q.length; Ie++)
                  dr(Q[Ie], p);
                Object.freeze && Object.freeze(Q);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dr(Q, p);
        }
        return p === a ? hn(W) : fn(W), W;
      }
    }
    function mn(p, w, F) {
      return pr(p, w, F, !0);
    }
    function bn(p, w, F) {
      return pr(p, w, F, !1);
    }
    var gn = bn, yn = mn;
    Ge.Fragment = a, Ge.jsx = gn, Ge.jsxs = yn;
  }()), Ge;
}
Zt.env.NODE_ENV === "production" ? qt.exports = Vn() : qt.exports = Gn();
var I = qt.exports;
const Kn = (e) => {
  const { isGlobalFeeLoading: r, isRefreshing: i } = Cn();
  return /* @__PURE__ */ I.jsxs(Jn, { width: "32px", height: "32px", viewBox: "0 0 20 20", fill: "none", ...e, children: [
    /* @__PURE__ */ I.jsx("circle", { cx: "10.12", cy: "10.12", r: "9.12", fill: "#1FC7D4", "fill-opacity": "0.2" }),
    /* @__PURE__ */ I.jsx(
      "mask",
      {
        id: "mask0_1009_72807",
        style: {
          maskType: "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: "-3",
        y: "-1",
        width: "24",
        height: "21",
        children: /* @__PURE__ */ I.jsx("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 -1H-3V20H21V-1ZM11 0H0V11H11V0Z", fill: "#D9D9D9" })
      }
    ),
    /* @__PURE__ */ I.jsx("g", { mask: "url(#mask0_1009_72807)", children: /* @__PURE__ */ I.jsx(
      "circle",
      {
        className: !r && !i ? "refreshBorder" : void 0,
        cx: "10.12",
        cy: "10.12",
        r: "8.12",
        stroke: "#1FC7D4",
        "stroke-width": "2",
        "stroke-linecap": "round",
        strokeDasharray: 54,
        strokeDashoffset: 54
      }
    ) }),
    /* @__PURE__ */ I.jsx(
      "mask",
      {
        id: "mask1_1009_72807",
        style: {
          maskType: "alpha"
        },
        maskUnits: "userSpaceOnUse",
        x: "4",
        y: "3",
        width: "13",
        height: "13",
        children: /* @__PURE__ */ I.jsx("rect", { x: "4.64795", y: "3.9184", width: "11.6736", height: "11.6736", fill: "#48D0DB" })
      }
    ),
    /* @__PURE__ */ I.jsx("g", { mask: "url(#mask1_1009_72807)", children: /* @__PURE__ */ I.jsx(
      "path",
      {
        d: "M10.5093 13.6463C9.42301 13.6463 8.49885 13.2693 7.73683 12.5154C6.9748 11.7615 6.59379 10.8414 6.59379 9.75509V9.66997L6.15603 10.1077C6.06685 10.1969 5.95336 10.2415 5.81555 10.2415C5.67774 10.2415 5.56424 10.1969 5.47507 10.1077C5.3859 10.0186 5.34131 9.90506 5.34131 9.76725C5.34131 9.62944 5.3859 9.51594 5.47507 9.42677L6.73971 8.16213C6.83699 8.06485 6.95048 8.01621 7.08019 8.01621C7.20989 8.01621 7.32339 8.06485 7.42067 8.16213L8.68531 9.42677C8.77448 9.51594 8.81907 9.62944 8.81907 9.76725C8.81907 9.90506 8.77448 10.0186 8.68531 10.1077C8.59613 10.1969 8.48264 10.2415 8.34483 10.2415C8.20701 10.2415 8.09352 10.1969 8.00435 10.1077L7.56659 9.66997V9.75509C7.56659 10.5658 7.85235 11.2548 8.42387 11.8223C8.99539 12.3898 9.69053 12.6735 10.5093 12.6735C10.639 12.6735 10.7667 12.6654 10.8923 12.6492C11.018 12.633 11.1416 12.6046 11.2632 12.564C11.401 12.5235 11.5307 12.5276 11.6523 12.5762C11.7739 12.6248 11.8672 12.71 11.932 12.8316C11.9969 12.9613 12.003 13.089 11.9503 13.2146C11.8976 13.3403 11.8023 13.4234 11.6645 13.4639C11.4781 13.5287 11.2875 13.5754 11.093 13.6037C10.8984 13.6321 10.7039 13.6463 10.5093 13.6463ZM10.4607 6.83669C10.331 6.83669 10.2033 6.8448 10.0776 6.86101C9.95197 6.87722 9.82835 6.9056 9.70675 6.94613C9.56893 6.98666 9.4372 6.98261 9.31155 6.93397C9.18589 6.88533 9.09064 6.80021 9.02579 6.67861C8.96093 6.55701 8.95485 6.43338 9.00755 6.30773C9.06024 6.18208 9.15144 6.09898 9.28115 6.05845C9.47571 5.9936 9.67027 5.94496 9.86483 5.91253C10.0594 5.8801 10.258 5.86389 10.4607 5.86389C11.547 5.86389 12.4711 6.24085 13.2331 6.99477C13.9952 7.74869 14.3762 8.6688 14.3762 9.75509V9.84021L14.8139 9.40245C14.9031 9.31328 15.0166 9.26869 15.1544 9.26869C15.2922 9.26869 15.4057 9.31328 15.4949 9.40245C15.5841 9.49162 15.6287 9.60512 15.6287 9.74293C15.6287 9.88074 15.5841 9.99424 15.4949 10.0834L14.2303 11.348C14.133 11.4453 14.0195 11.494 13.8898 11.494C13.7601 11.494 13.6466 11.4453 13.5493 11.348L12.2847 10.0834C12.1955 9.99424 12.1509 9.88074 12.1509 9.74293C12.1509 9.60512 12.1955 9.49162 12.2847 9.40245C12.3738 9.31328 12.4873 9.26869 12.6251 9.26869C12.763 9.26869 12.8765 9.31328 12.9656 9.40245L13.4034 9.84021V9.75509C13.4034 8.94442 13.1176 8.25536 12.5461 7.68789C11.9746 7.12042 11.2794 6.83669 10.4607 6.83669Z",
        fill: "#48D0DB"
      }
    ) })
  ] });
}, Yn = Nn`
  to {
    stroke-dashoffset: 0;
  }
`, Jn = Ur(_r)`
  fill: none;
  color: inherit;
  .refreshBorder {
    animation: ${Yn} 32s linear forwards infinite;
  }
`;
function Xn(e) {
  return /* @__PURE__ */ I.jsxs(_r, { width: "20", height: "20", viewBox: "0 0 20 20", ...e, children: [
    /* @__PURE__ */ I.jsxs("g", { "clip-path": "url(#clip0_1044_1163)", children: [
      /* @__PURE__ */ I.jsx(
        "mask",
        {
          id: "mask0_1044_1163",
          style: {
            maskType: "alpha"
          },
          maskUnits: "userSpaceOnUse",
          x: "0",
          y: "0",
          width: "20",
          height: "20",
          children: /* @__PURE__ */ I.jsx(
            "path",
            {
              d: "M4.55973 17.1694C4.08084 17.1694 3.67293 17.001 3.33598 16.664C2.99904 16.3271 2.83057 15.9192 2.83057 15.4403V4.55986C2.83057 4.08097 2.99904 3.67305 3.33598 3.33611C3.67293 2.99916 4.08084 2.83069 4.55973 2.83069H9.13536C9.37772 2.83069 9.58244 2.91374 9.74952 3.07986C9.91647 3.24611 9.99994 3.44979 9.99994 3.6909C9.99994 3.93201 9.91647 4.13715 9.74952 4.30631C9.58244 4.47534 9.37772 4.55986 9.13536 4.55986H4.55973V15.4403H15.4401V10.8646C15.4401 10.6223 15.5232 10.4176 15.6893 10.2505C15.8556 10.0835 16.0592 10.0001 16.3004 10.0001C16.5415 10.0001 16.7466 10.0835 16.9158 10.2505C17.0848 10.4176 17.1693 10.6223 17.1693 10.8646V15.4403C17.1693 15.9192 17.0008 16.3271 16.6639 16.664C16.327 17.001 15.919 17.1694 15.4401 17.1694H4.55973ZM15.4401 5.77673L8.81244 12.4044C8.63647 12.5806 8.43793 12.6643 8.21682 12.6557C7.99584 12.6471 7.79737 12.5547 7.6214 12.3786C7.44529 12.2026 7.35723 11.9999 7.35723 11.7703C7.35723 11.5406 7.44529 11.3377 7.6214 11.1617L14.2233 4.55986H12.8645C12.6222 4.55986 12.4174 4.4768 12.2504 4.31069C12.0834 4.14444 11.9999 3.94076 11.9999 3.69965C11.9999 3.45854 12.0834 3.2534 12.2504 3.08423C12.4174 2.9152 12.6222 2.83069 12.8645 2.83069H16.3047C16.5471 2.83069 16.7518 2.91416 16.9189 3.08111C17.0858 3.24819 17.1693 3.45291 17.1693 3.69527V7.13548C17.1693 7.37784 17.0863 7.58256 16.9201 7.74965C16.7539 7.91659 16.5502 8.00006 16.3091 8.00006C16.068 8.00006 15.8629 7.91659 15.6937 7.74965C15.5247 7.58256 15.4401 7.37784 15.4401 7.13548V5.77673Z",
              fill: "#1C1B1F"
            }
          )
        }
      ),
      /* @__PURE__ */ I.jsx("g", { mask: "url(#mask0_1044_1163)", children: /* @__PURE__ */ I.jsx("rect", { width: "20", height: "20" }) })
    ] }),
    /* @__PURE__ */ I.jsx("defs", { children: /* @__PURE__ */ I.jsx("clipPath", { id: "clip0_1044_1163", children: /* @__PURE__ */ I.jsx("rect", { width: "20", height: "20", fill: "white" }) }) })
  ] });
}
function Qn() {
  return /* @__PURE__ */ I.jsx(Pr, { marginTop: "16px", alignItems: "center", justifyContent: "center", children: /* @__PURE__ */ I.jsxs(Zn, { href: "https://bridge.pancakeswap.finance/", target: "_blank", rel: "noopener", children: [
    "V1 Bridge supports bridging to/from Aptos",
    /* @__PURE__ */ I.jsx(Xn, {})
  ] }) });
}
const Zn = Ur(wn)`
  display: inline;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: ${(e) => e.theme.isDark ? "#B8ADD2" : "#7A6EAA"};
  text-align: center;
  & > svg {
    margin-left: 4px;
    display: inline;
    vertical-align: middle;
    color: inherit;
    fill: none;
  }
`, er = [
  {
    id: 1,
    name: "Ethereum",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://ethereum-rpc.publicnode.com/"] } },
    blockExplorers: {
      default: { name: "Etherscan", url: "https://etherscan.io" }
    }
  },
  {
    id: 10,
    name: "Optimism",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://mainnet.optimism.io"] } },
    blockExplorers: {
      default: { name: "OP Mainnet Explorer", url: "https://optimistic.etherscan.io" }
    }
  },
  {
    id: 14,
    name: "Flare",
    chainType: "evm",
    nativeCurrency: {
      name: "FLR",
      symbol: "FLR",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://flare-api.flare.network/ext/bc/C/rpc"] } },
    blockExplorers: {
      default: { name: "Flare Scan", url: "https://flarescan.com/" }
    }
  },
  {
    id: 44,
    name: "Crab Network",
    chainType: "evm",
    nativeCurrency: {
      name: "Crab Network Native Token",
      symbol: "CRAB",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://crab-rpc.darwinia.network"] } },
    blockExplorers: {
      default: { name: "Crab explorer", url: "https://crab-scan.darwinia.network" }
    }
  },
  {
    id: 56,
    name: "BNB Smart Chain",
    chainType: "evm",
    nativeCurrency: {
      name: "BNB Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://bsc-dataseed.bnbchain.org"] } },
    blockExplorers: {
      default: { name: "bscscan", url: "https://bscscan.com" }
    }
  },
  {
    id: 57,
    name: "Syscoin",
    chainType: "evm",
    nativeCurrency: {
      name: "Syscoin",
      symbol: "SYS",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.syscoin.org"] } },
    blockExplorers: {
      default: { name: "Syscoin Block Explorer", url: "https://explorer.syscoin.org" }
    }
  },
  {
    id: 58,
    name: "Ontology",
    chainType: "evm",
    nativeCurrency: {
      name: "ONG",
      symbol: "ONG",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://dappnode1.ont.io:10339"] } },
    blockExplorers: {
      default: { name: "explorer", url: "https://explorer.ont.io" }
    }
  },
  {
    id: 66,
    name: "OKXChain",
    chainType: "evm",
    nativeCurrency: {
      name: "OKXChain Global Utility Token",
      symbol: "OKT",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://exchainrpc.okex.org"] } },
    blockExplorers: {
      default: { name: "oklink", url: "https://www.oklink.com/oktc" }
    }
  },
  {
    id: 73,
    name: "FNCY",
    chainType: "evm",
    nativeCurrency: {
      name: "FNCY",
      symbol: "FNCY",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://fncy-seed1.fncy.world"] } },
    blockExplorers: {
      default: { name: "fncy scan", url: "https://fncyscan.fncy.world" }
    }
  },
  {
    id: 100,
    name: "Gnosis",
    chainType: "evm",
    nativeCurrency: {
      name: "xDAI",
      symbol: "XDAI",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.gnosischain.com"] } },
    blockExplorers: {
      default: { name: "gnosisscan", url: "https://gnosisscan.io" }
    }
  },
  {
    id: 128,
    name: "Huobi ECO Chain",
    chainType: "evm",
    nativeCurrency: {
      name: "Huobi ECO Chain Native Token",
      symbol: "HT",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://http-mainnet.hecochain.com"] } },
    blockExplorers: {
      default: { name: "hecoinfo", url: "https://hecoinfo.com", tokenUrlPattern: "https://hecoscan.io/#/token20/{0}" }
    }
  },
  {
    id: 137,
    name: "Polygon",
    chainType: "evm",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://polygon-rpc.com"] } },
    blockExplorers: {
      default: { name: "polygonscan", url: "https://polygonscan.com" }
    }
  },
  {
    id: 169,
    name: "Manta Pacific",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://pacific-rpc.manta.network/http"] } },
    blockExplorers: {
      default: { name: "manta-pacific Explorer", url: "https://pacific-explorer.manta.network" }
    }
  },
  {
    id: 196,
    name: "X Layer",
    chainType: "evm",
    nativeCurrency: {
      name: "X Layer Global Utility Token",
      symbol: "OKB",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.xlayer.tech"] } },
    blockExplorers: {
      default: { name: "OKLink", url: "https://www.oklink.com/xlayer" }
    }
  },
  {
    id: 204,
    name: "opBNB",
    chainType: "evm",
    nativeCurrency: {
      name: "BNB Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://opbnb-mainnet-rpc.bnbchain.org"] } },
    blockExplorers: {
      default: { name: "opbnbscan", url: "https://mainnet.opbnbscan.com" }
    }
  },
  {
    id: 248,
    name: "Oasys",
    chainType: "evm",
    nativeCurrency: {
      name: "OAS",
      symbol: "OAS",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.mainnet.oasys.games"] } },
    blockExplorers: {
      default: { name: "Oasys-Mainnet explorer", url: "https://explorer.oasys.games" }
    }
  },
  {
    id: 250,
    name: "Fantom Opera",
    chainType: "evm",
    nativeCurrency: {
      name: "Fantom",
      symbol: "FTM",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpcapi.fantom.network"] } },
    blockExplorers: {
      default: { name: "ftmscan", url: "https://ftmscan.com" }
    }
  },
  {
    id: 288,
    name: "Boba Network",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://mainnet.boba.network"] } },
    blockExplorers: {
      default: { name: "Bobascan", url: "https://bobascan.com" }
    }
  },
  {
    id: 314,
    name: "Filecoin",
    chainType: "evm",
    nativeCurrency: {
      name: "filecoin",
      symbol: "FIL",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://api.node.glif.io"] } },
    blockExplorers: {
      default: { name: "Filfox", url: "https://filfox.info/en" }
    }
  },
  {
    id: 324,
    name: "zkSync",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://mainnet.era.zksync.io"] } },
    blockExplorers: {
      default: {
        name: "zkSync Era Block Explorer",
        url: "https://explorer.zksync.io",
        tokenUrlPattern: "https://explorer.zksync.io/address/{0}"
      }
    }
  },
  {
    id: 336,
    name: "Shiden",
    chainType: "evm",
    nativeCurrency: {
      name: "Shiden",
      symbol: "SDN",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://shiden.public.blastapi.io"] } },
    blockExplorers: {
      default: { name: "subscan", url: "https://shiden.subscan.io" }
    }
  },
  {
    id: 416,
    name: "SX Network",
    chainType: "evm",
    nativeCurrency: {
      name: "SX Network",
      symbol: "SX",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.sx.technology"] } },
    blockExplorers: {
      default: { name: "SX Network Explorer", url: "https://explorer.sx.technology" }
    }
  },
  {
    id: 592,
    name: "Astar",
    chainType: "evm",
    nativeCurrency: {
      name: "Astar",
      symbol: "ASTR",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://evm.astar.network"] } },
    blockExplorers: {
      default: { name: "subscan", url: "https://astar.subscan.io" }
    }
  },
  {
    id: 1024,
    name: "CLV Parachain",
    chainType: "evm",
    nativeCurrency: {
      name: "CLV",
      symbol: "CLV",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://api-para.clover.finance"] } },
    blockExplorers: {
      default: { name: "CLV Blockchain Explore", url: "https://clvscan.com/" }
    }
  },
  {
    id: 1030,
    name: "Conflux eSpace",
    chainType: "evm",
    nativeCurrency: {
      name: "CFX",
      symbol: "CFX",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://evm.confluxrpc.com"] } },
    blockExplorers: {
      default: { name: "Conflux Scan", url: "https://evm.confluxscan.net" }
    }
  },
  {
    id: 1088,
    name: "Metis Andromeda",
    chainType: "evm",
    nativeCurrency: {
      name: "Metis",
      symbol: "METIS",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://andromeda.metis.io/?owner=1088"] } },
    blockExplorers: {
      default: { name: "Metis Andromeda explorer", url: "https://andromeda-explorer.metis.io" }
    }
  },
  {
    id: 1101,
    name: "Polygon zkEVM",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://zkevm-rpc.com"] } },
    blockExplorers: {
      default: { name: "PolygonScan", url: "https://zkevm.polygonscan.com" }
    }
  },
  {
    id: 1284,
    name: "Moonbeam",
    chainType: "evm",
    nativeCurrency: {
      name: "Glimmer",
      symbol: "GLMR",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.api.moonbeam.network"] } },
    blockExplorers: {
      default: { name: "moonscan", url: "https://moonbeam.moonscan.io" }
    }
  },
  {
    id: 1285,
    name: "Moonriver",
    chainType: "evm",
    nativeCurrency: {
      name: "Moonriver",
      symbol: "MOVR",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.api.moonriver.moonbeam.network"] } },
    blockExplorers: {
      default: { name: "moonscan", url: "https://moonriver.moonscan.io" }
    }
  },
  {
    id: 1329,
    name: "Sei Network",
    chainType: "evm",
    nativeCurrency: {
      name: "SEI",
      symbol: "SEI",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://evm-rpc.sei-apis.com"] } },
    blockExplorers: {
      default: { name: "Sei Scan", url: "https://www.seiscan.app/" }
    }
  },
  {
    id: 1625,
    name: "Gravity Alpha",
    chainType: "evm",
    nativeCurrency: {
      name: "Gravity",
      symbol: "G.",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.gravity.xyz"] } },
    blockExplorers: {
      default: { name: "Gravity Alpha Mainnet Explorer", url: "https://explorer.gravity.xyz" }
    }
  },
  {
    id: 2001,
    name: "Milkomeda C1",
    chainType: "evm",
    nativeCurrency: {
      name: "milkAda",
      symbol: "mADA",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc-mainnet-cardano-evm.c1.milkomeda.com"] } },
    blockExplorers: {
      default: { name: "Blockscout", url: "https://explorer-mainnet-cardano-evm.c1.milkomeda.com" }
    }
  },
  {
    id: 2002,
    name: "Milkomeda A1",
    chainType: "evm",
    nativeCurrency: {
      name: "milkALGO",
      symbol: "mALGO",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc-mainnet-algorand-rollup.a1.milkomeda.com"] } },
    blockExplorers: {
      default: { name: "", url: "" }
    }
  },
  {
    id: 2222,
    name: "Kava",
    chainType: "evm",
    nativeCurrency: {
      name: "Kava",
      symbol: "KAVA",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://evm.kava.io"] } },
    blockExplorers: {
      default: { name: "Kava EVM Explorer", url: "https://kavascan.com" }
    }
  },
  {
    id: 5e3,
    name: "Mantle",
    chainType: "evm",
    nativeCurrency: {
      name: "Mantle",
      symbol: "MNT",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.mantle.xyz/"] } },
    blockExplorers: {
      default: { name: "Mantle Mainnet Explorer", url: "https://explorer.mantle.xyz/" }
    }
  },
  {
    id: 7700,
    name: "Canto",
    chainType: "evm",
    nativeCurrency: {
      name: "Canto",
      symbol: "CANTO",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://canto.gravitychain.io"] } },
    blockExplorers: {
      default: { name: "Canto Explorer (OKLink)", url: "https://www.oklink.com/canto" }
    }
  },
  {
    id: 8217,
    name: "Klaytn",
    chainType: "evm",
    nativeCurrency: {
      name: "KLAY",
      symbol: "KLAY",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://klaytn.blockpi.network/v1/rpc/public"] } },
    blockExplorers: {
      default: { name: "Klaytnscope", url: "https://scope.klaytn.com" }
    }
  },
  {
    id: 8453,
    name: "Base",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://mainnet.base.org"] } },
    blockExplorers: {
      default: { name: "basescan", url: "https://basescan.org" }
    }
  },
  {
    id: 8822,
    name: "IOTA EVM",
    chainType: "evm",
    nativeCurrency: {
      name: "IOTA Token",
      symbol: "IOTA",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://json-rpc.evm.iotaledger.net"] } },
    blockExplorers: {
      default: { name: "IOTA EVM explorer", url: "https://explorer.evm.iota.org" }
    }
  },
  {
    id: 9001,
    name: "Evmos",
    chainType: "evm",
    nativeCurrency: {
      name: "Evmos",
      symbol: "EVMOS",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://evmos-mainnet.public.blastapi.io"] } },
    blockExplorers: {
      default: {
        name: "Evmos Explorer (Escan)",
        url: "https://www.mintscan.io/evmos",
        tokenUrlPattern: "https://www.mintscan.io/evmos/address/{0}"
      }
    }
  },
  {
    id: 13e3,
    name: "SPS",
    chainType: "evm",
    nativeCurrency: {
      name: "ECG",
      symbol: "ECG  ",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.ssquad.games"] } },
    blockExplorers: {
      default: { name: "SPS Explorer", url: "http://spsscan.ssquad.games" }
    }
  },
  {
    id: 23294,
    name: "Oasis Sapphire",
    chainType: "evm",
    nativeCurrency: {
      name: "Sapphire Rose",
      symbol: "ROSE",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://sapphire.oasis.io"] } },
    blockExplorers: {
      default: { name: "Oasis Sapphire Explorer", url: "https://explorer.oasis.io/mainnet/sapphire" }
    }
  },
  {
    id: 42161,
    name: "Arbitrum One",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://arb1.arbitrum.io/rpc"] } },
    blockExplorers: {
      default: { name: "Arbiscan", url: "https://arbiscan.io" }
    }
  },
  {
    id: 42170,
    name: "Arbitrum Nova",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://nova.arbitrum.io/rpc"] } },
    blockExplorers: {
      default: { name: "Arbitrum Nova Chain Explorer", url: "https://nova-explorer.arbitrum.io" }
    }
  },
  {
    id: 42220,
    name: "Celo",
    chainType: "evm",
    nativeCurrency: {
      name: "CELO",
      symbol: "CELO",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://forno.celo.org"] } },
    blockExplorers: {
      default: { name: "Celoscan", url: "https://celoscan.io" }
    }
  },
  {
    id: 42262,
    name: "Oasis Emerald",
    chainType: "evm",
    nativeCurrency: {
      name: "Emerald Rose",
      symbol: "ROSE",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://emerald.oasis.io"] } },
    blockExplorers: {
      default: { name: "Oasis Emerald Explorer", url: "https://explorer.oasis.io/mainnet/emerald" }
    }
  },
  {
    id: 43114,
    name: "Avalanche",
    chainType: "evm",
    nativeCurrency: {
      name: "Avalanche",
      symbol: "AVAX",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://api.avax.network/ext/bc/C/rpc"] } },
    blockExplorers: {
      default: { name: "snowtrace", url: "https://snowtrace.io" }
    }
  },
  {
    id: 47805,
    name: "REI Network",
    chainType: "evm",
    nativeCurrency: {
      name: "REI",
      symbol: "REI",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.rei.network"] } },
    blockExplorers: {
      default: { name: "rei-scan", url: "https://scan.rei.network" }
    }
  },
  {
    id: 59144,
    name: "Linea",
    chainType: "evm",
    nativeCurrency: {
      name: "Linea Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.linea.build"] } },
    blockExplorers: {
      default: { name: "Etherscan", url: "https://lineascan.build" }
    }
  },
  {
    id: 71402,
    name: "Godwoken",
    chainType: "evm",
    nativeCurrency: {
      name: "pCKB",
      symbol: "pCKB",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://v1.mainnet.godwoken.io/rpc"] } },
    blockExplorers: {
      default: {
        name: "GWScan Block Explorer",
        url: "https://v1.gwscan.com",
        tokenUrlPattern: "https://v1.gwscan.com/account/{0}"
      }
    }
  },
  {
    id: 81457,
    name: "Blast",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.blast.io"] } },
    blockExplorers: {
      default: { name: "Blastscan", url: "https://blastscan.io" }
    }
  },
  // {
  //   id: 112358,
  //   name: 'Metachain One',
  //   nativeCurrency: {
  //     name: 'Metao',
  //     symbol: 'METAO',
  //     decimals: 18,
  //   },
  //   rpcUrl: 'https://rpc.metachain.one',
  //   explorer: {
  //     name: 'blockscout',
  //     url: 'https://explorer.metachain.one',
  //   },
  // },
  {
    id: 167e3,
    name: "Taiko",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.mainnet.taiko.xyz"] } },
    blockExplorers: {
      default: { name: "Taiko Scan", url: "https://taikoscan.io" }
    }
  },
  {
    id: 210425,
    name: "PlatON",
    chainType: "evm",
    nativeCurrency: {
      name: "LAT",
      symbol: "lat",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://openapi2.platon.network/rpc"] } },
    blockExplorers: {
      default: {
        name: "PlatON explorer",
        url: "https://scan.platon.network",
        tokenUrlPattern: "https://scan.platon.network/tokens-detail?type=erc20&address={0}"
      }
    }
  },
  {
    id: 534352,
    name: "Scroll",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://rpc.scroll.io"] } },
    blockExplorers: {
      default: { name: "Scrollscan", url: "https://scrollscan.com" }
    }
  },
  {
    id: 1313161554,
    name: "Aurora",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://mainnet.aurora.dev"] } },
    blockExplorers: {
      default: { name: "aurorascan.dev", url: "https://aurorascan.dev" }
    }
  },
  {
    id: 1380012617,
    name: "RARI Chain",
    chainType: "evm",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://mainnet.rpc.rarichain.org/http"] } },
    blockExplorers: {
      default: { name: "Rari Mainnet Explorer", url: "https://mainnet.explorer.rarichain.org/" }
    }
  },
  {
    id: 16666e5,
    name: "Harmony One",
    chainType: "evm",
    nativeCurrency: {
      name: "ONE",
      symbol: "ONE",
      decimals: 18
    },
    rpcUrls: { default: { http: ["https://api.harmony.one"] } },
    blockExplorers: {
      default: { name: "Harmony Block Explorer", url: "https://explorer.harmony.one" }
    }
  },
  // {
  //   id: 728126428,
  //   name: 'Tron',
  //   nativeCurrency: {
  //     name: 'TRX',
  //     symbol: 'TRX',
  //     decimals: 6,
  //   },
  //   rpcUrl: 'https://api.trongrid.io',
  //   explorer: {
  //     name: 'Tron Scan',
  //     url: 'https://tronscan.io/',
  //     tokenUrlPattern: 'https://tronscan.io/#/token20/{0}',
  //   },
  //   chainType: 'tron',
  // },
  {
    id: 7565164,
    name: "Solana",
    nativeCurrency: {
      name: "SOL",
      symbol: "SOL",
      decimals: 9
    },
    rpcUrls: { default: { http: ["https://solana-rpc.debridge.finance"] } },
    blockExplorers: {
      default: { name: "Solana explorer", url: "https://explorer.solana.com" }
    },
    chainType: "solana"
  }
], Ce = {
  ASSET_PREFIX: "https://static.bnbchain.org/bnb-chain-bridge/static",
  SERVER_ENDPOINT: "https://canonical-bridge-api.bnbchain.world",
  SOLANA_RPC_ENDPOINT: "https://solana-rpc.debridge.finance"
}, ei = globalThis || void 0 || self;
function Mr(e, r) {
  return function() {
    return e.apply(r, arguments);
  };
}
const { toString: ti } = Object.prototype, { getPrototypeOf: tr } = Object, Et = /* @__PURE__ */ ((e) => (r) => {
  const i = ti.call(r);
  return e[i] || (e[i] = i.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), le = (e) => (e = e.toLowerCase(), (r) => Et(r) === e), Ft = (e) => (r) => typeof r === e, { isArray: je } = Array, Je = Ft("undefined");
function ri(e) {
  return e !== null && !Je(e) && e.constructor !== null && !Je(e.constructor) && ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const zr = le("ArrayBuffer");
function ni(e) {
  let r;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? r = ArrayBuffer.isView(e) : r = e && e.buffer && zr(e.buffer), r;
}
const ii = Ft("string"), ee = Ft("function"), Hr = Ft("number"), vt = (e) => e !== null && typeof e == "object", oi = (e) => e === !0 || e === !1, mt = (e) => {
  if (Et(e) !== "object")
    return !1;
  const r = tr(e);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, ai = le("Date"), si = le("File"), ci = le("Blob"), li = le("FileList"), ui = (e) => vt(e) && ee(e.pipe), di = (e) => {
  let r;
  return e && (typeof FormData == "function" && e instanceof FormData || ee(e.append) && ((r = Et(e)) === "formdata" || // detect form-data instance
  r === "object" && ee(e.toString) && e.toString() === "[object FormData]"));
}, pi = le("URLSearchParams"), fi = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ze(e, r, { allOwnKeys: i = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let a, c;
  if (typeof e != "object" && (e = [e]), je(e))
    for (a = 0, c = e.length; a < c; a++)
      r.call(null, e[a], a, e);
  else {
    const l = i ? Object.getOwnPropertyNames(e) : Object.keys(e), u = l.length;
    let m;
    for (a = 0; a < u; a++)
      m = l[a], r.call(null, e[m], m, e);
  }
}
function qr(e, r) {
  r = r.toLowerCase();
  const i = Object.keys(e);
  let a = i.length, c;
  for (; a-- > 0; )
    if (c = i[a], r === c.toLowerCase())
      return c;
  return null;
}
const Wr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ei, Vr = (e) => !Je(e) && e !== Wr;
function Wt() {
  const { caseless: e } = Vr(this) && this || {}, r = {}, i = (a, c) => {
    const l = e && qr(r, c) || c;
    mt(r[l]) && mt(a) ? r[l] = Wt(r[l], a) : mt(a) ? r[l] = Wt({}, a) : je(a) ? r[l] = a.slice() : r[l] = a;
  };
  for (let a = 0, c = arguments.length; a < c; a++)
    arguments[a] && Ze(arguments[a], i);
  return r;
}
const hi = (e, r, i, { allOwnKeys: a } = {}) => (Ze(r, (c, l) => {
  i && ee(c) ? e[l] = Mr(c, i) : e[l] = c;
}, { allOwnKeys: a }), e), mi = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), bi = (e, r, i, a) => {
  e.prototype = Object.create(r.prototype, a), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: r.prototype
  }), i && Object.assign(e.prototype, i);
}, gi = (e, r, i, a) => {
  let c, l, u;
  const m = {};
  if (r = r || {}, e == null)
    return r;
  do {
    for (c = Object.getOwnPropertyNames(e), l = c.length; l-- > 0; )
      u = c[l], (!a || a(u, e, r)) && !m[u] && (r[u] = e[u], m[u] = !0);
    e = i !== !1 && tr(e);
  } while (e && (!i || i(e, r)) && e !== Object.prototype);
  return r;
}, yi = (e, r, i) => {
  e = String(e), (i === void 0 || i > e.length) && (i = e.length), i -= r.length;
  const a = e.indexOf(r, i);
  return a !== -1 && a === i;
}, xi = (e) => {
  if (!e)
    return null;
  if (je(e))
    return e;
  let r = e.length;
  if (!Hr(r))
    return null;
  const i = new Array(r);
  for (; r-- > 0; )
    i[r] = e[r];
  return i;
}, wi = /* @__PURE__ */ ((e) => (r) => e && r instanceof e)(typeof Uint8Array < "u" && tr(Uint8Array)), Ei = (e, r) => {
  const a = (e && e[Symbol.iterator]).call(e);
  let c;
  for (; (c = a.next()) && !c.done; ) {
    const l = c.value;
    r.call(e, l[0], l[1]);
  }
}, Fi = (e, r) => {
  let i;
  const a = [];
  for (; (i = e.exec(r)) !== null; )
    a.push(i);
  return a;
}, vi = le("HTMLFormElement"), Ci = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(i, a, c) {
    return a.toUpperCase() + c;
  }
), br = (({ hasOwnProperty: e }) => (r, i) => e.call(r, i))(Object.prototype), ki = le("RegExp"), Gr = (e, r) => {
  const i = Object.getOwnPropertyDescriptors(e), a = {};
  Ze(i, (c, l) => {
    let u;
    (u = r(c, l, e)) !== !1 && (a[l] = u || c);
  }), Object.defineProperties(e, a);
}, Ai = (e) => {
  Gr(e, (r, i) => {
    if (ee(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1)
      return !1;
    const a = e[i];
    if (ee(a)) {
      if (r.enumerable = !1, "writable" in r) {
        r.writable = !1;
        return;
      }
      r.set || (r.set = () => {
        throw Error("Can not rewrite read-only method '" + i + "'");
      });
    }
  });
}, Bi = (e, r) => {
  const i = {}, a = (c) => {
    c.forEach((l) => {
      i[l] = !0;
    });
  };
  return je(e) ? a(e) : a(String(e).split(r)), i;
}, Ti = () => {
}, Si = (e, r) => (e = +e, Number.isFinite(e) ? e : r), _t = "abcdefghijklmnopqrstuvwxyz", gr = "0123456789", Kr = {
  DIGIT: gr,
  ALPHA: _t,
  ALPHA_DIGIT: _t + _t.toUpperCase() + gr
}, Di = (e = 16, r = Kr.ALPHA_DIGIT) => {
  let i = "";
  const { length: a } = r;
  for (; e--; )
    i += r[Math.random() * a | 0];
  return i;
};
function Ri(e) {
  return !!(e && ee(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Oi = (e) => {
  const r = new Array(10), i = (a, c) => {
    if (vt(a)) {
      if (r.indexOf(a) >= 0)
        return;
      if (!("toJSON" in a)) {
        r[c] = a;
        const l = je(a) ? [] : {};
        return Ze(a, (u, m) => {
          const x = i(u, c + 1);
          !Je(x) && (l[m] = x);
        }), r[c] = void 0, l;
      }
    }
    return a;
  };
  return i(e, 0);
}, Ii = le("AsyncFunction"), _i = (e) => e && (vt(e) || ee(e)) && ee(e.then) && ee(e.catch), y = {
  isArray: je,
  isArrayBuffer: zr,
  isBuffer: ri,
  isFormData: di,
  isArrayBufferView: ni,
  isString: ii,
  isNumber: Hr,
  isBoolean: oi,
  isObject: vt,
  isPlainObject: mt,
  isUndefined: Je,
  isDate: ai,
  isFile: si,
  isBlob: ci,
  isRegExp: ki,
  isFunction: ee,
  isStream: ui,
  isURLSearchParams: pi,
  isTypedArray: wi,
  isFileList: li,
  forEach: Ze,
  merge: Wt,
  extend: hi,
  trim: fi,
  stripBOM: mi,
  inherits: bi,
  toFlatObject: gi,
  kindOf: Et,
  kindOfTest: le,
  endsWith: yi,
  toArray: xi,
  forEachEntry: Ei,
  matchAll: Fi,
  isHTMLForm: vi,
  hasOwnProperty: br,
  hasOwnProp: br,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Gr,
  freezeMethods: Ai,
  toObjectSet: Bi,
  toCamelCase: Ci,
  noop: Ti,
  toFiniteNumber: Si,
  findKey: qr,
  global: Wr,
  isContextDefined: Vr,
  ALPHABET: Kr,
  generateString: Di,
  isSpecCompliantForm: Ri,
  toJSONObject: Oi,
  isAsyncFn: Ii,
  isThenable: _i
};
var Yr = {}, Ct = {};
Ct.byteLength = Ni;
Ct.toByteArray = ji;
Ct.fromByteArray = zi;
var se = [], Z = [], Pi = typeof Uint8Array < "u" ? Uint8Array : Array, Pt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var _e = 0, Ui = Pt.length; _e < Ui; ++_e)
  se[_e] = Pt[_e], Z[Pt.charCodeAt(_e)] = _e;
Z[45] = 62;
Z[95] = 63;
function Jr(e) {
  var r = e.length;
  if (r % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var i = e.indexOf("=");
  i === -1 && (i = r);
  var a = i === r ? 0 : 4 - i % 4;
  return [i, a];
}
function Ni(e) {
  var r = Jr(e), i = r[0], a = r[1];
  return (i + a) * 3 / 4 - a;
}
function Li(e, r, i) {
  return (r + i) * 3 / 4 - i;
}
function ji(e) {
  var r, i = Jr(e), a = i[0], c = i[1], l = new Pi(Li(e, a, c)), u = 0, m = c > 0 ? a - 4 : a, x;
  for (x = 0; x < m; x += 4)
    r = Z[e.charCodeAt(x)] << 18 | Z[e.charCodeAt(x + 1)] << 12 | Z[e.charCodeAt(x + 2)] << 6 | Z[e.charCodeAt(x + 3)], l[u++] = r >> 16 & 255, l[u++] = r >> 8 & 255, l[u++] = r & 255;
  return c === 2 && (r = Z[e.charCodeAt(x)] << 2 | Z[e.charCodeAt(x + 1)] >> 4, l[u++] = r & 255), c === 1 && (r = Z[e.charCodeAt(x)] << 10 | Z[e.charCodeAt(x + 1)] << 4 | Z[e.charCodeAt(x + 2)] >> 2, l[u++] = r >> 8 & 255, l[u++] = r & 255), l;
}
function $i(e) {
  return se[e >> 18 & 63] + se[e >> 12 & 63] + se[e >> 6 & 63] + se[e & 63];
}
function Mi(e, r, i) {
  for (var a, c = [], l = r; l < i; l += 3)
    a = (e[l] << 16 & 16711680) + (e[l + 1] << 8 & 65280) + (e[l + 2] & 255), c.push($i(a));
  return c.join("");
}
function zi(e) {
  for (var r, i = e.length, a = i % 3, c = [], l = 16383, u = 0, m = i - a; u < m; u += l)
    c.push(Mi(e, u, u + l > m ? m : u + l));
  return a === 1 ? (r = e[i - 1], c.push(
    se[r >> 2] + se[r << 4 & 63] + "=="
  )) : a === 2 && (r = (e[i - 2] << 8) + e[i - 1], c.push(
    se[r >> 10] + se[r >> 4 & 63] + se[r << 2 & 63] + "="
  )), c.join("");
}
var rr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
rr.read = function(e, r, i, a, c) {
  var l, u, m = c * 8 - a - 1, x = (1 << m) - 1, E = x >> 1, d = -7, b = i ? c - 1 : 0, k = i ? -1 : 1, T = e[r + b];
  for (b += k, l = T & (1 << -d) - 1, T >>= -d, d += m; d > 0; l = l * 256 + e[r + b], b += k, d -= 8)
    ;
  for (u = l & (1 << -d) - 1, l >>= -d, d += a; d > 0; u = u * 256 + e[r + b], b += k, d -= 8)
    ;
  if (l === 0)
    l = 1 - E;
  else {
    if (l === x)
      return u ? NaN : (T ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, a), l = l - E;
  }
  return (T ? -1 : 1) * u * Math.pow(2, l - a);
};
rr.write = function(e, r, i, a, c, l) {
  var u, m, x, E = l * 8 - c - 1, d = (1 << E) - 1, b = d >> 1, k = c === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, T = a ? 0 : l - 1, v = a ? 1 : -1, C = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (m = isNaN(r) ? 1 : 0, u = d) : (u = Math.floor(Math.log(r) / Math.LN2), r * (x = Math.pow(2, -u)) < 1 && (u--, x *= 2), u + b >= 1 ? r += k / x : r += k * Math.pow(2, 1 - b), r * x >= 2 && (u++, x /= 2), u + b >= d ? (m = 0, u = d) : u + b >= 1 ? (m = (r * x - 1) * Math.pow(2, c), u = u + b) : (m = r * Math.pow(2, b - 1) * Math.pow(2, c), u = 0)); c >= 8; e[i + T] = m & 255, T += v, m /= 256, c -= 8)
    ;
  for (u = u << c | m, E += c; E > 0; e[i + T] = u & 255, T += v, u /= 256, E -= 8)
    ;
  e[i + T - v] |= C * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const r = Ct, i = rr, a = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = d, e.SlowBuffer = $e, e.INSPECT_MAX_BYTES = 50;
  const c = 2147483647;
  e.kMaxLength = c;
  const { Uint8Array: l, ArrayBuffer: u, SharedArrayBuffer: m } = globalThis;
  d.TYPED_ARRAY_SUPPORT = x(), !d.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function x() {
    try {
      const o = new l(1), t = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(t, l.prototype), Object.setPrototypeOf(o, t), o.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(d.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (d.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(d.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (d.isBuffer(this))
        return this.byteOffset;
    }
  });
  function E(o) {
    if (o > c)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
    const t = new l(o);
    return Object.setPrototypeOf(t, d.prototype), t;
  }
  function d(o, t, n) {
    if (typeof o == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return v(o);
    }
    return b(o, t, n);
  }
  d.poolSize = 8192;
  function b(o, t, n) {
    if (typeof o == "string")
      return C(o, t);
    if (u.isView(o))
      return A(o);
    if (o == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
      );
    if (X(o, u) || o && X(o.buffer, u) || typeof m < "u" && (X(o, m) || o && X(o.buffer, m)))
      return P(o, t, n);
    if (typeof o == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const s = o.valueOf && o.valueOf();
    if (s != null && s !== o)
      return d.from(s, t, n);
    const f = G(o);
    if (f)
      return f;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof o[Symbol.toPrimitive] == "function")
      return d.from(o[Symbol.toPrimitive]("string"), t, n);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof o
    );
  }
  d.from = function(o, t, n) {
    return b(o, t, n);
  }, Object.setPrototypeOf(d.prototype, l.prototype), Object.setPrototypeOf(d, l);
  function k(o) {
    if (typeof o != "number")
      throw new TypeError('"size" argument must be of type number');
    if (o < 0)
      throw new RangeError('The value "' + o + '" is invalid for option "size"');
  }
  function T(o, t, n) {
    return k(o), o <= 0 ? E(o) : t !== void 0 ? typeof n == "string" ? E(o).fill(t, n) : E(o).fill(t) : E(o);
  }
  d.alloc = function(o, t, n) {
    return T(o, t, n);
  };
  function v(o) {
    return k(o), E(o < 0 ? 0 : ne(o) | 0);
  }
  d.allocUnsafe = function(o) {
    return v(o);
  }, d.allocUnsafeSlow = function(o) {
    return v(o);
  };
  function C(o, t) {
    if ((typeof t != "string" || t === "") && (t = "utf8"), !d.isEncoding(t))
      throw new TypeError("Unknown encoding: " + t);
    const n = tt(o, t) | 0;
    let s = E(n);
    const f = s.write(o, t);
    return f !== n && (s = s.slice(0, f)), s;
  }
  function N(o) {
    const t = o.length < 0 ? 0 : ne(o.length) | 0, n = E(t);
    for (let s = 0; s < t; s += 1)
      n[s] = o[s] & 255;
    return n;
  }
  function A(o) {
    if (X(o, l)) {
      const t = new l(o);
      return P(t.buffer, t.byteOffset, t.byteLength);
    }
    return N(o);
  }
  function P(o, t, n) {
    if (t < 0 || o.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (o.byteLength < t + (n || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let s;
    return t === void 0 && n === void 0 ? s = new l(o) : n === void 0 ? s = new l(o, t) : s = new l(o, t, n), Object.setPrototypeOf(s, d.prototype), s;
  }
  function G(o) {
    if (d.isBuffer(o)) {
      const t = ne(o.length) | 0, n = E(t);
      return n.length === 0 || o.copy(n, 0, 0, t), n;
    }
    if (o.length !== void 0)
      return typeof o.length != "number" || Oe(o.length) ? E(0) : N(o);
    if (o.type === "Buffer" && Array.isArray(o.data))
      return N(o.data);
  }
  function ne(o) {
    if (o >= c)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + c.toString(16) + " bytes");
    return o | 0;
  }
  function $e(o) {
    return +o != o && (o = 0), d.alloc(+o);
  }
  d.isBuffer = function(t) {
    return t != null && t._isBuffer === !0 && t !== d.prototype;
  }, d.compare = function(t, n) {
    if (X(t, l) && (t = d.from(t, t.offset, t.byteLength)), X(n, l) && (n = d.from(n, n.offset, n.byteLength)), !d.isBuffer(t) || !d.isBuffer(n))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === n)
      return 0;
    let s = t.length, f = n.length;
    for (let h = 0, g = Math.min(s, f); h < g; ++h)
      if (t[h] !== n[h]) {
        s = t[h], f = n[h];
        break;
      }
    return s < f ? -1 : f < s ? 1 : 0;
  }, d.isEncoding = function(t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, d.concat = function(t, n) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0)
      return d.alloc(0);
    let s;
    if (n === void 0)
      for (n = 0, s = 0; s < t.length; ++s)
        n += t[s].length;
    const f = d.allocUnsafe(n);
    let h = 0;
    for (s = 0; s < t.length; ++s) {
      let g = t[s];
      if (X(g, l))
        h + g.length > f.length ? (d.isBuffer(g) || (g = d.from(g)), g.copy(f, h)) : l.prototype.set.call(
          f,
          g,
          h
        );
      else if (d.isBuffer(g))
        g.copy(f, h);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      h += g.length;
    }
    return f;
  };
  function tt(o, t) {
    if (d.isBuffer(o))
      return o.length;
    if (u.isView(o) || X(o, u))
      return o.byteLength;
    if (typeof o != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof o
      );
    const n = o.length, s = arguments.length > 2 && arguments[2] === !0;
    if (!s && n === 0)
      return 0;
    let f = !1;
    for (; ; )
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return n;
        case "utf8":
        case "utf-8":
          return qe(o).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return n * 2;
        case "hex":
          return n >>> 1;
        case "base64":
          return pt(o).length;
        default:
          if (f)
            return s ? -1 : qe(o).length;
          t = ("" + t).toLowerCase(), f = !0;
      }
  }
  d.byteLength = tt;
  function Bt(o, t, n) {
    let s = !1;
    if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((n === void 0 || n > this.length) && (n = this.length), n <= 0) || (n >>>= 0, t >>>= 0, n <= t))
      return "";
    for (o || (o = "utf8"); ; )
      switch (o) {
        case "hex":
          return ct(this, t, n);
        case "utf8":
        case "utf-8":
          return ze(this, t, n);
        case "ascii":
          return at(this, t, n);
        case "latin1":
        case "binary":
          return st(this, t, n);
        case "base64":
          return it(this, t, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return lt(this, t, n);
        default:
          if (s)
            throw new TypeError("Unknown encoding: " + o);
          o = (o + "").toLowerCase(), s = !0;
      }
  }
  d.prototype._isBuffer = !0;
  function ue(o, t, n) {
    const s = o[t];
    o[t] = o[n], o[n] = s;
  }
  d.prototype.swap16 = function() {
    const t = this.length;
    if (t % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let n = 0; n < t; n += 2)
      ue(this, n, n + 1);
    return this;
  }, d.prototype.swap32 = function() {
    const t = this.length;
    if (t % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let n = 0; n < t; n += 4)
      ue(this, n, n + 3), ue(this, n + 1, n + 2);
    return this;
  }, d.prototype.swap64 = function() {
    const t = this.length;
    if (t % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let n = 0; n < t; n += 8)
      ue(this, n, n + 7), ue(this, n + 1, n + 6), ue(this, n + 2, n + 5), ue(this, n + 3, n + 4);
    return this;
  }, d.prototype.toString = function() {
    const t = this.length;
    return t === 0 ? "" : arguments.length === 0 ? ze(this, 0, t) : Bt.apply(this, arguments);
  }, d.prototype.toLocaleString = d.prototype.toString, d.prototype.equals = function(t) {
    if (!d.isBuffer(t))
      throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : d.compare(this, t) === 0;
  }, d.prototype.inspect = function() {
    let t = "";
    const n = e.INSPECT_MAX_BYTES;
    return t = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (t += " ... "), "<Buffer " + t + ">";
  }, a && (d.prototype[a] = d.prototype.inspect), d.prototype.compare = function(t, n, s, f, h) {
    if (X(t, l) && (t = d.from(t, t.offset, t.byteLength)), !d.isBuffer(t))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t
      );
    if (n === void 0 && (n = 0), s === void 0 && (s = t ? t.length : 0), f === void 0 && (f = 0), h === void 0 && (h = this.length), n < 0 || s > t.length || f < 0 || h > this.length)
      throw new RangeError("out of range index");
    if (f >= h && n >= s)
      return 0;
    if (f >= h)
      return -1;
    if (n >= s)
      return 1;
    if (n >>>= 0, s >>>= 0, f >>>= 0, h >>>= 0, this === t)
      return 0;
    let g = h - f, S = s - n;
    const M = Math.min(g, S), L = this.slice(f, h), $ = t.slice(n, s);
    for (let R = 0; R < M; ++R)
      if (L[R] !== $[R]) {
        g = L[R], S = $[R];
        break;
      }
    return g < S ? -1 : S < g ? 1 : 0;
  };
  function Me(o, t, n, s, f) {
    if (o.length === 0)
      return -1;
    if (typeof n == "string" ? (s = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, Oe(n) && (n = f ? 0 : o.length - 1), n < 0 && (n = o.length + n), n >= o.length) {
      if (f)
        return -1;
      n = o.length - 1;
    } else if (n < 0)
      if (f)
        n = 0;
      else
        return -1;
    if (typeof t == "string" && (t = d.from(t, s)), d.isBuffer(t))
      return t.length === 0 ? -1 : rt(o, t, n, s, f);
    if (typeof t == "number")
      return t = t & 255, typeof l.prototype.indexOf == "function" ? f ? l.prototype.indexOf.call(o, t, n) : l.prototype.lastIndexOf.call(o, t, n) : rt(o, [t], n, s, f);
    throw new TypeError("val must be string, number or Buffer");
  }
  function rt(o, t, n, s, f) {
    let h = 1, g = o.length, S = t.length;
    if (s !== void 0 && (s = String(s).toLowerCase(), s === "ucs2" || s === "ucs-2" || s === "utf16le" || s === "utf-16le")) {
      if (o.length < 2 || t.length < 2)
        return -1;
      h = 2, g /= 2, S /= 2, n /= 2;
    }
    function M($, R) {
      return h === 1 ? $[R] : $.readUInt16BE(R * h);
    }
    let L;
    if (f) {
      let $ = -1;
      for (L = n; L < g; L++)
        if (M(o, L) === M(t, $ === -1 ? 0 : L - $)) {
          if ($ === -1 && ($ = L), L - $ + 1 === S)
            return $ * h;
        } else
          $ !== -1 && (L -= L - $), $ = -1;
    } else
      for (n + S > g && (n = g - S), L = n; L >= 0; L--) {
        let $ = !0;
        for (let R = 0; R < S; R++)
          if (M(o, L + R) !== M(t, R)) {
            $ = !1;
            break;
          }
        if ($)
          return L;
      }
    return -1;
  }
  d.prototype.includes = function(t, n, s) {
    return this.indexOf(t, n, s) !== -1;
  }, d.prototype.indexOf = function(t, n, s) {
    return Me(this, t, n, s, !0);
  }, d.prototype.lastIndexOf = function(t, n, s) {
    return Me(this, t, n, s, !1);
  };
  function Tt(o, t, n, s) {
    n = Number(n) || 0;
    const f = o.length - n;
    s ? (s = Number(s), s > f && (s = f)) : s = f;
    const h = t.length;
    s > h / 2 && (s = h / 2);
    let g;
    for (g = 0; g < s; ++g) {
      const S = parseInt(t.substr(g * 2, 2), 16);
      if (Oe(S))
        return g;
      o[n + g] = S;
    }
    return g;
  }
  function nt(o, t, n, s) {
    return Re(qe(t, o.length - n), o, n, s);
  }
  function te(o, t, n, s) {
    return Re(Dt(t), o, n, s);
  }
  function de(o, t, n, s) {
    return Re(pt(t), o, n, s);
  }
  function xe(o, t, n, s) {
    return Re(We(t, o.length - n), o, n, s);
  }
  d.prototype.write = function(t, n, s, f) {
    if (n === void 0)
      f = "utf8", s = this.length, n = 0;
    else if (s === void 0 && typeof n == "string")
      f = n, s = this.length, n = 0;
    else if (isFinite(n))
      n = n >>> 0, isFinite(s) ? (s = s >>> 0, f === void 0 && (f = "utf8")) : (f = s, s = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const h = this.length - n;
    if ((s === void 0 || s > h) && (s = h), t.length > 0 && (s < 0 || n < 0) || n > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    f || (f = "utf8");
    let g = !1;
    for (; ; )
      switch (f) {
        case "hex":
          return Tt(this, t, n, s);
        case "utf8":
        case "utf-8":
          return nt(this, t, n, s);
        case "ascii":
        case "latin1":
        case "binary":
          return te(this, t, n, s);
        case "base64":
          return de(this, t, n, s);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return xe(this, t, n, s);
        default:
          if (g)
            throw new TypeError("Unknown encoding: " + f);
          f = ("" + f).toLowerCase(), g = !0;
      }
  }, d.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function it(o, t, n) {
    return t === 0 && n === o.length ? r.fromByteArray(o) : r.fromByteArray(o.slice(t, n));
  }
  function ze(o, t, n) {
    n = Math.min(o.length, n);
    const s = [];
    let f = t;
    for (; f < n; ) {
      const h = o[f];
      let g = null, S = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
      if (f + S <= n) {
        let M, L, $, R;
        switch (S) {
          case 1:
            h < 128 && (g = h);
            break;
          case 2:
            M = o[f + 1], (M & 192) === 128 && (R = (h & 31) << 6 | M & 63, R > 127 && (g = R));
            break;
          case 3:
            M = o[f + 1], L = o[f + 2], (M & 192) === 128 && (L & 192) === 128 && (R = (h & 15) << 12 | (M & 63) << 6 | L & 63, R > 2047 && (R < 55296 || R > 57343) && (g = R));
            break;
          case 4:
            M = o[f + 1], L = o[f + 2], $ = o[f + 3], (M & 192) === 128 && (L & 192) === 128 && ($ & 192) === 128 && (R = (h & 15) << 18 | (M & 63) << 12 | (L & 63) << 6 | $ & 63, R > 65535 && R < 1114112 && (g = R));
        }
      }
      g === null ? (g = 65533, S = 1) : g > 65535 && (g -= 65536, s.push(g >>> 10 & 1023 | 55296), g = 56320 | g & 1023), s.push(g), f += S;
    }
    return ot(s);
  }
  const He = 4096;
  function ot(o) {
    const t = o.length;
    if (t <= He)
      return String.fromCharCode.apply(String, o);
    let n = "", s = 0;
    for (; s < t; )
      n += String.fromCharCode.apply(
        String,
        o.slice(s, s += He)
      );
    return n;
  }
  function at(o, t, n) {
    let s = "";
    n = Math.min(o.length, n);
    for (let f = t; f < n; ++f)
      s += String.fromCharCode(o[f] & 127);
    return s;
  }
  function st(o, t, n) {
    let s = "";
    n = Math.min(o.length, n);
    for (let f = t; f < n; ++f)
      s += String.fromCharCode(o[f]);
    return s;
  }
  function ct(o, t, n) {
    const s = o.length;
    (!t || t < 0) && (t = 0), (!n || n < 0 || n > s) && (n = s);
    let f = "";
    for (let h = t; h < n; ++h)
      f += ve[o[h]];
    return f;
  }
  function lt(o, t, n) {
    const s = o.slice(t, n);
    let f = "";
    for (let h = 0; h < s.length - 1; h += 2)
      f += String.fromCharCode(s[h] + s[h + 1] * 256);
    return f;
  }
  d.prototype.slice = function(t, n) {
    const s = this.length;
    t = ~~t, n = n === void 0 ? s : ~~n, t < 0 ? (t += s, t < 0 && (t = 0)) : t > s && (t = s), n < 0 ? (n += s, n < 0 && (n = 0)) : n > s && (n = s), n < t && (n = t);
    const f = this.subarray(t, n);
    return Object.setPrototypeOf(f, d.prototype), f;
  };
  function q(o, t, n) {
    if (o % 1 !== 0 || o < 0)
      throw new RangeError("offset is not uint");
    if (o + t > n)
      throw new RangeError("Trying to access beyond buffer length");
  }
  d.prototype.readUintLE = d.prototype.readUIntLE = function(t, n, s) {
    t = t >>> 0, n = n >>> 0, s || q(t, n, this.length);
    let f = this[t], h = 1, g = 0;
    for (; ++g < n && (h *= 256); )
      f += this[t + g] * h;
    return f;
  }, d.prototype.readUintBE = d.prototype.readUIntBE = function(t, n, s) {
    t = t >>> 0, n = n >>> 0, s || q(t, n, this.length);
    let f = this[t + --n], h = 1;
    for (; n > 0 && (h *= 256); )
      f += this[t + --n] * h;
    return f;
  }, d.prototype.readUint8 = d.prototype.readUInt8 = function(t, n) {
    return t = t >>> 0, n || q(t, 1, this.length), this[t];
  }, d.prototype.readUint16LE = d.prototype.readUInt16LE = function(t, n) {
    return t = t >>> 0, n || q(t, 2, this.length), this[t] | this[t + 1] << 8;
  }, d.prototype.readUint16BE = d.prototype.readUInt16BE = function(t, n) {
    return t = t >>> 0, n || q(t, 2, this.length), this[t] << 8 | this[t + 1];
  }, d.prototype.readUint32LE = d.prototype.readUInt32LE = function(t, n) {
    return t = t >>> 0, n || q(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + this[t + 3] * 16777216;
  }, d.prototype.readUint32BE = d.prototype.readUInt32BE = function(t, n) {
    return t = t >>> 0, n || q(t, 4, this.length), this[t] * 16777216 + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
  }, d.prototype.readBigUInt64LE = ie(function(t) {
    t = t >>> 0, re(t, "offset");
    const n = this[t], s = this[t + 7];
    (n === void 0 || s === void 0) && ge(t, this.length - 8);
    const f = n + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24, h = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + s * 2 ** 24;
    return BigInt(f) + (BigInt(h) << BigInt(32));
  }), d.prototype.readBigUInt64BE = ie(function(t) {
    t = t >>> 0, re(t, "offset");
    const n = this[t], s = this[t + 7];
    (n === void 0 || s === void 0) && ge(t, this.length - 8);
    const f = n * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t], h = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + s;
    return (BigInt(f) << BigInt(32)) + BigInt(h);
  }), d.prototype.readIntLE = function(t, n, s) {
    t = t >>> 0, n = n >>> 0, s || q(t, n, this.length);
    let f = this[t], h = 1, g = 0;
    for (; ++g < n && (h *= 256); )
      f += this[t + g] * h;
    return h *= 128, f >= h && (f -= Math.pow(2, 8 * n)), f;
  }, d.prototype.readIntBE = function(t, n, s) {
    t = t >>> 0, n = n >>> 0, s || q(t, n, this.length);
    let f = n, h = 1, g = this[t + --f];
    for (; f > 0 && (h *= 256); )
      g += this[t + --f] * h;
    return h *= 128, g >= h && (g -= Math.pow(2, 8 * n)), g;
  }, d.prototype.readInt8 = function(t, n) {
    return t = t >>> 0, n || q(t, 1, this.length), this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t];
  }, d.prototype.readInt16LE = function(t, n) {
    t = t >>> 0, n || q(t, 2, this.length);
    const s = this[t] | this[t + 1] << 8;
    return s & 32768 ? s | 4294901760 : s;
  }, d.prototype.readInt16BE = function(t, n) {
    t = t >>> 0, n || q(t, 2, this.length);
    const s = this[t + 1] | this[t] << 8;
    return s & 32768 ? s | 4294901760 : s;
  }, d.prototype.readInt32LE = function(t, n) {
    return t = t >>> 0, n || q(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
  }, d.prototype.readInt32BE = function(t, n) {
    return t = t >>> 0, n || q(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
  }, d.prototype.readBigInt64LE = ie(function(t) {
    t = t >>> 0, re(t, "offset");
    const n = this[t], s = this[t + 7];
    (n === void 0 || s === void 0) && ge(t, this.length - 8);
    const f = this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (s << 24);
    return (BigInt(f) << BigInt(32)) + BigInt(n + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24);
  }), d.prototype.readBigInt64BE = ie(function(t) {
    t = t >>> 0, re(t, "offset");
    const n = this[t], s = this[t + 7];
    (n === void 0 || s === void 0) && ge(t, this.length - 8);
    const f = (n << 24) + // Overflow
    this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
    return (BigInt(f) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + s);
  }), d.prototype.readFloatLE = function(t, n) {
    return t = t >>> 0, n || q(t, 4, this.length), i.read(this, t, !0, 23, 4);
  }, d.prototype.readFloatBE = function(t, n) {
    return t = t >>> 0, n || q(t, 4, this.length), i.read(this, t, !1, 23, 4);
  }, d.prototype.readDoubleLE = function(t, n) {
    return t = t >>> 0, n || q(t, 8, this.length), i.read(this, t, !0, 52, 8);
  }, d.prototype.readDoubleBE = function(t, n) {
    return t = t >>> 0, n || q(t, 8, this.length), i.read(this, t, !1, 52, 8);
  };
  function K(o, t, n, s, f, h) {
    if (!d.isBuffer(o))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > f || t < h)
      throw new RangeError('"value" argument is out of bounds');
    if (n + s > o.length)
      throw new RangeError("Index out of range");
  }
  d.prototype.writeUintLE = d.prototype.writeUIntLE = function(t, n, s, f) {
    if (t = +t, n = n >>> 0, s = s >>> 0, !f) {
      const S = Math.pow(2, 8 * s) - 1;
      K(this, t, n, s, S, 0);
    }
    let h = 1, g = 0;
    for (this[n] = t & 255; ++g < s && (h *= 256); )
      this[n + g] = t / h & 255;
    return n + s;
  }, d.prototype.writeUintBE = d.prototype.writeUIntBE = function(t, n, s, f) {
    if (t = +t, n = n >>> 0, s = s >>> 0, !f) {
      const S = Math.pow(2, 8 * s) - 1;
      K(this, t, n, s, S, 0);
    }
    let h = s - 1, g = 1;
    for (this[n + h] = t & 255; --h >= 0 && (g *= 256); )
      this[n + h] = t / g & 255;
    return n + s;
  }, d.prototype.writeUint8 = d.prototype.writeUInt8 = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 1, 255, 0), this[n] = t & 255, n + 1;
  }, d.prototype.writeUint16LE = d.prototype.writeUInt16LE = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 2, 65535, 0), this[n] = t & 255, this[n + 1] = t >>> 8, n + 2;
  }, d.prototype.writeUint16BE = d.prototype.writeUInt16BE = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 2, 65535, 0), this[n] = t >>> 8, this[n + 1] = t & 255, n + 2;
  }, d.prototype.writeUint32LE = d.prototype.writeUInt32LE = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 4, 4294967295, 0), this[n + 3] = t >>> 24, this[n + 2] = t >>> 16, this[n + 1] = t >>> 8, this[n] = t & 255, n + 4;
  }, d.prototype.writeUint32BE = d.prototype.writeUInt32BE = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 4, 4294967295, 0), this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = t & 255, n + 4;
  };
  function Ae(o, t, n, s, f) {
    Fe(t, s, f, o, n, 7);
    let h = Number(t & BigInt(4294967295));
    o[n++] = h, h = h >> 8, o[n++] = h, h = h >> 8, o[n++] = h, h = h >> 8, o[n++] = h;
    let g = Number(t >> BigInt(32) & BigInt(4294967295));
    return o[n++] = g, g = g >> 8, o[n++] = g, g = g >> 8, o[n++] = g, g = g >> 8, o[n++] = g, n;
  }
  function Be(o, t, n, s, f) {
    Fe(t, s, f, o, n, 7);
    let h = Number(t & BigInt(4294967295));
    o[n + 7] = h, h = h >> 8, o[n + 6] = h, h = h >> 8, o[n + 5] = h, h = h >> 8, o[n + 4] = h;
    let g = Number(t >> BigInt(32) & BigInt(4294967295));
    return o[n + 3] = g, g = g >> 8, o[n + 2] = g, g = g >> 8, o[n + 1] = g, g = g >> 8, o[n] = g, n + 8;
  }
  d.prototype.writeBigUInt64LE = ie(function(t, n = 0) {
    return Ae(this, t, n, BigInt(0), BigInt("0xffffffffffffffff"));
  }), d.prototype.writeBigUInt64BE = ie(function(t, n = 0) {
    return Be(this, t, n, BigInt(0), BigInt("0xffffffffffffffff"));
  }), d.prototype.writeIntLE = function(t, n, s, f) {
    if (t = +t, n = n >>> 0, !f) {
      const M = Math.pow(2, 8 * s - 1);
      K(this, t, n, s, M - 1, -M);
    }
    let h = 0, g = 1, S = 0;
    for (this[n] = t & 255; ++h < s && (g *= 256); )
      t < 0 && S === 0 && this[n + h - 1] !== 0 && (S = 1), this[n + h] = (t / g >> 0) - S & 255;
    return n + s;
  }, d.prototype.writeIntBE = function(t, n, s, f) {
    if (t = +t, n = n >>> 0, !f) {
      const M = Math.pow(2, 8 * s - 1);
      K(this, t, n, s, M - 1, -M);
    }
    let h = s - 1, g = 1, S = 0;
    for (this[n + h] = t & 255; --h >= 0 && (g *= 256); )
      t < 0 && S === 0 && this[n + h + 1] !== 0 && (S = 1), this[n + h] = (t / g >> 0) - S & 255;
    return n + s;
  }, d.prototype.writeInt8 = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[n] = t & 255, n + 1;
  }, d.prototype.writeInt16LE = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 2, 32767, -32768), this[n] = t & 255, this[n + 1] = t >>> 8, n + 2;
  }, d.prototype.writeInt16BE = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 2, 32767, -32768), this[n] = t >>> 8, this[n + 1] = t & 255, n + 2;
  }, d.prototype.writeInt32LE = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 4, 2147483647, -2147483648), this[n] = t & 255, this[n + 1] = t >>> 8, this[n + 2] = t >>> 16, this[n + 3] = t >>> 24, n + 4;
  }, d.prototype.writeInt32BE = function(t, n, s) {
    return t = +t, n = n >>> 0, s || K(this, t, n, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[n] = t >>> 24, this[n + 1] = t >>> 16, this[n + 2] = t >>> 8, this[n + 3] = t & 255, n + 4;
  }, d.prototype.writeBigInt64LE = ie(function(t, n = 0) {
    return Ae(this, t, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), d.prototype.writeBigInt64BE = ie(function(t, n = 0) {
    return Be(this, t, n, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function we(o, t, n, s, f, h) {
    if (n + s > o.length)
      throw new RangeError("Index out of range");
    if (n < 0)
      throw new RangeError("Index out of range");
  }
  function Te(o, t, n, s, f) {
    return t = +t, n = n >>> 0, f || we(o, t, n, 4), i.write(o, t, n, s, 23, 4), n + 4;
  }
  d.prototype.writeFloatLE = function(t, n, s) {
    return Te(this, t, n, !0, s);
  }, d.prototype.writeFloatBE = function(t, n, s) {
    return Te(this, t, n, !1, s);
  };
  function Ee(o, t, n, s, f) {
    return t = +t, n = n >>> 0, f || we(o, t, n, 8), i.write(o, t, n, s, 52, 8), n + 8;
  }
  d.prototype.writeDoubleLE = function(t, n, s) {
    return Ee(this, t, n, !0, s);
  }, d.prototype.writeDoubleBE = function(t, n, s) {
    return Ee(this, t, n, !1, s);
  }, d.prototype.copy = function(t, n, s, f) {
    if (!d.isBuffer(t))
      throw new TypeError("argument should be a Buffer");
    if (s || (s = 0), !f && f !== 0 && (f = this.length), n >= t.length && (n = t.length), n || (n = 0), f > 0 && f < s && (f = s), f === s || t.length === 0 || this.length === 0)
      return 0;
    if (n < 0)
      throw new RangeError("targetStart out of bounds");
    if (s < 0 || s >= this.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("sourceEnd out of bounds");
    f > this.length && (f = this.length), t.length - n < f - s && (f = t.length - n + s);
    const h = f - s;
    return this === t && typeof l.prototype.copyWithin == "function" ? this.copyWithin(n, s, f) : l.prototype.set.call(
      t,
      this.subarray(s, f),
      n
    ), h;
  }, d.prototype.fill = function(t, n, s, f) {
    if (typeof t == "string") {
      if (typeof n == "string" ? (f = n, n = 0, s = this.length) : typeof s == "string" && (f = s, s = this.length), f !== void 0 && typeof f != "string")
        throw new TypeError("encoding must be a string");
      if (typeof f == "string" && !d.isEncoding(f))
        throw new TypeError("Unknown encoding: " + f);
      if (t.length === 1) {
        const g = t.charCodeAt(0);
        (f === "utf8" && g < 128 || f === "latin1") && (t = g);
      }
    } else
      typeof t == "number" ? t = t & 255 : typeof t == "boolean" && (t = Number(t));
    if (n < 0 || this.length < n || this.length < s)
      throw new RangeError("Out of range index");
    if (s <= n)
      return this;
    n = n >>> 0, s = s === void 0 ? this.length : s >>> 0, t || (t = 0);
    let h;
    if (typeof t == "number")
      for (h = n; h < s; ++h)
        this[h] = t;
    else {
      const g = d.isBuffer(t) ? t : d.from(t, f), S = g.length;
      if (S === 0)
        throw new TypeError('The value "' + t + '" is invalid for argument "value"');
      for (h = 0; h < s - n; ++h)
        this[h + n] = g[h % S];
    }
    return this;
  };
  const be = {};
  function Se(o, t, n) {
    be[o] = class extends n {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: t.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${o}]`, this.stack, delete this.name;
      }
      get code() {
        return o;
      }
      set code(f) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: f,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${o}]: ${this.message}`;
      }
    };
  }
  Se(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(o) {
      return o ? `${o} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Se(
    "ERR_INVALID_ARG_TYPE",
    function(o, t) {
      return `The "${o}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError
  ), Se(
    "ERR_OUT_OF_RANGE",
    function(o, t, n) {
      let s = `The value of "${o}" is out of range.`, f = n;
      return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? f = ut(String(n)) : typeof n == "bigint" && (f = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (f = ut(f)), f += "n"), s += ` It must be ${t}. Received ${f}`, s;
    },
    RangeError
  );
  function ut(o) {
    let t = "", n = o.length;
    const s = o[0] === "-" ? 1 : 0;
    for (; n >= s + 4; n -= 3)
      t = `_${o.slice(n - 3, n)}${t}`;
    return `${o.slice(0, n)}${t}`;
  }
  function St(o, t, n) {
    re(t, "offset"), (o[t] === void 0 || o[t + n] === void 0) && ge(t, o.length - (n + 1));
  }
  function Fe(o, t, n, s, f, h) {
    if (o > n || o < t) {
      const g = typeof t == "bigint" ? "n" : "";
      let S;
      throw h > 3 ? t === 0 || t === BigInt(0) ? S = `>= 0${g} and < 2${g} ** ${(h + 1) * 8}${g}` : S = `>= -(2${g} ** ${(h + 1) * 8 - 1}${g}) and < 2 ** ${(h + 1) * 8 - 1}${g}` : S = `>= ${t}${g} and <= ${n}${g}`, new be.ERR_OUT_OF_RANGE("value", S, o);
    }
    St(s, f, h);
  }
  function re(o, t) {
    if (typeof o != "number")
      throw new be.ERR_INVALID_ARG_TYPE(t, "number", o);
  }
  function ge(o, t, n) {
    throw Math.floor(o) !== o ? (re(o, n), new be.ERR_OUT_OF_RANGE(n || "offset", "an integer", o)) : t < 0 ? new be.ERR_BUFFER_OUT_OF_BOUNDS() : new be.ERR_OUT_OF_RANGE(
      n || "offset",
      `>= ${n ? 1 : 0} and <= ${t}`,
      o
    );
  }
  const dt = /[^+/0-9A-Za-z-_]/g;
  function De(o) {
    if (o = o.split("=")[0], o = o.trim().replace(dt, ""), o.length < 2)
      return "";
    for (; o.length % 4 !== 0; )
      o = o + "=";
    return o;
  }
  function qe(o, t) {
    t = t || 1 / 0;
    let n;
    const s = o.length;
    let f = null;
    const h = [];
    for (let g = 0; g < s; ++g) {
      if (n = o.charCodeAt(g), n > 55295 && n < 57344) {
        if (!f) {
          if (n > 56319) {
            (t -= 3) > -1 && h.push(239, 191, 189);
            continue;
          } else if (g + 1 === s) {
            (t -= 3) > -1 && h.push(239, 191, 189);
            continue;
          }
          f = n;
          continue;
        }
        if (n < 56320) {
          (t -= 3) > -1 && h.push(239, 191, 189), f = n;
          continue;
        }
        n = (f - 55296 << 10 | n - 56320) + 65536;
      } else
        f && (t -= 3) > -1 && h.push(239, 191, 189);
      if (f = null, n < 128) {
        if ((t -= 1) < 0)
          break;
        h.push(n);
      } else if (n < 2048) {
        if ((t -= 2) < 0)
          break;
        h.push(
          n >> 6 | 192,
          n & 63 | 128
        );
      } else if (n < 65536) {
        if ((t -= 3) < 0)
          break;
        h.push(
          n >> 12 | 224,
          n >> 6 & 63 | 128,
          n & 63 | 128
        );
      } else if (n < 1114112) {
        if ((t -= 4) < 0)
          break;
        h.push(
          n >> 18 | 240,
          n >> 12 & 63 | 128,
          n >> 6 & 63 | 128,
          n & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return h;
  }
  function Dt(o) {
    const t = [];
    for (let n = 0; n < o.length; ++n)
      t.push(o.charCodeAt(n) & 255);
    return t;
  }
  function We(o, t) {
    let n, s, f;
    const h = [];
    for (let g = 0; g < o.length && !((t -= 2) < 0); ++g)
      n = o.charCodeAt(g), s = n >> 8, f = n % 256, h.push(f), h.push(s);
    return h;
  }
  function pt(o) {
    return r.toByteArray(De(o));
  }
  function Re(o, t, n, s) {
    let f;
    for (f = 0; f < s && !(f + n >= t.length || f >= o.length); ++f)
      t[f + n] = o[f];
    return f;
  }
  function X(o, t) {
    return o instanceof t || o != null && o.constructor != null && o.constructor.name != null && o.constructor.name === t.name;
  }
  function Oe(o) {
    return o !== o;
  }
  const ve = function() {
    const o = "0123456789abcdef", t = new Array(256);
    for (let n = 0; n < 16; ++n) {
      const s = n * 16;
      for (let f = 0; f < 16; ++f)
        t[s + f] = o[n] + o[f];
    }
    return t;
  }();
  function ie(o) {
    return typeof BigInt > "u" ? ft : o;
  }
  function ft() {
    throw new Error("BigInt not supported");
  }
})(Yr);
const Hi = Yr.Buffer;
function _(e, r, i, a, c) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", r && (this.code = r), i && (this.config = i), a && (this.request = a), c && (this.response = c);
}
y.inherits(_, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Xr = _.prototype, Qr = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Qr[e] = { value: e };
});
Object.defineProperties(_, Qr);
Object.defineProperty(Xr, "isAxiosError", { value: !0 });
_.from = (e, r, i, a, c, l) => {
  const u = Object.create(Xr);
  return y.toFlatObject(e, u, function(x) {
    return x !== Error.prototype;
  }, (m) => m !== "isAxiosError"), _.call(u, e.message, r, i, a, c), u.cause = e, u.name = e.name, l && Object.assign(u, l), u;
};
const qi = null;
function Vt(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Zr(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function yr(e, r, i) {
  return e ? e.concat(r).map(function(c, l) {
    return c = Zr(c), !i && l ? "[" + c + "]" : c;
  }).join(i ? "." : "") : r;
}
function Wi(e) {
  return y.isArray(e) && !e.some(Vt);
}
const Vi = y.toFlatObject(y, {}, null, function(r) {
  return /^is[A-Z]/.test(r);
});
function kt(e, r, i) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  r = r || new FormData(), i = y.toFlatObject(i, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(C, N) {
    return !y.isUndefined(N[C]);
  });
  const a = i.metaTokens, c = i.visitor || d, l = i.dots, u = i.indexes, x = (i.Blob || typeof Blob < "u" && Blob) && y.isSpecCompliantForm(r);
  if (!y.isFunction(c))
    throw new TypeError("visitor must be a function");
  function E(v) {
    if (v === null)
      return "";
    if (y.isDate(v))
      return v.toISOString();
    if (!x && y.isBlob(v))
      throw new _("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(v) || y.isTypedArray(v) ? x && typeof Blob == "function" ? new Blob([v]) : Hi.from(v) : v;
  }
  function d(v, C, N) {
    let A = v;
    if (v && !N && typeof v == "object") {
      if (y.endsWith(C, "{}"))
        C = a ? C : C.slice(0, -2), v = JSON.stringify(v);
      else if (y.isArray(v) && Wi(v) || (y.isFileList(v) || y.endsWith(C, "[]")) && (A = y.toArray(v)))
        return C = Zr(C), A.forEach(function(G, ne) {
          !(y.isUndefined(G) || G === null) && r.append(
            // eslint-disable-next-line no-nested-ternary
            u === !0 ? yr([C], ne, l) : u === null ? C : C + "[]",
            E(G)
          );
        }), !1;
    }
    return Vt(v) ? !0 : (r.append(yr(N, C, l), E(v)), !1);
  }
  const b = [], k = Object.assign(Vi, {
    defaultVisitor: d,
    convertValue: E,
    isVisitable: Vt
  });
  function T(v, C) {
    if (!y.isUndefined(v)) {
      if (b.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + C.join("."));
      b.push(v), y.forEach(v, function(A, P) {
        (!(y.isUndefined(A) || A === null) && c.call(
          r,
          A,
          y.isString(P) ? P.trim() : P,
          C,
          k
        )) === !0 && T(A, C ? C.concat(P) : [P]);
      }), b.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return T(e), r;
}
function xr(e) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(a) {
    return r[a];
  });
}
function nr(e, r) {
  this._pairs = [], e && kt(e, this, r);
}
const en = nr.prototype;
en.append = function(r, i) {
  this._pairs.push([r, i]);
};
en.toString = function(r) {
  const i = r ? function(a) {
    return r.call(this, a, xr);
  } : xr;
  return this._pairs.map(function(c) {
    return i(c[0]) + "=" + i(c[1]);
  }, "").join("&");
};
function Gi(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tn(e, r, i) {
  if (!r)
    return e;
  const a = i && i.encode || Gi, c = i && i.serialize;
  let l;
  if (c ? l = c(r, i) : l = y.isURLSearchParams(r) ? r.toString() : new nr(r, i).toString(a), l) {
    const u = e.indexOf("#");
    u !== -1 && (e = e.slice(0, u)), e += (e.indexOf("?") === -1 ? "?" : "&") + l;
  }
  return e;
}
class wr {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(r, i, a) {
    return this.handlers.push({
      fulfilled: r,
      rejected: i,
      synchronous: a ? a.synchronous : !1,
      runWhen: a ? a.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(r) {
    y.forEach(this.handlers, function(a) {
      a !== null && r(a);
    });
  }
}
const rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ki = typeof URLSearchParams < "u" ? URLSearchParams : nr, Yi = typeof FormData < "u" ? FormData : null, Ji = typeof Blob < "u" ? Blob : null, Xi = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ki,
    FormData: Yi,
    Blob: Ji
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, nn = typeof window < "u" && typeof document < "u", Qi = ((e) => nn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Zi = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: nn,
  hasStandardBrowserEnv: Qi,
  hasStandardBrowserWebWorkerEnv: Zi
}, Symbol.toStringTag, { value: "Module" })), ce = {
  ...eo,
  ...Xi
};
function to(e, r) {
  return kt(e, new ce.classes.URLSearchParams(), Object.assign({
    visitor: function(i, a, c, l) {
      return ce.isNode && y.isBuffer(i) ? (this.append(a, i.toString("base64")), !1) : l.defaultVisitor.apply(this, arguments);
    }
  }, r));
}
function ro(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((r) => r[0] === "[]" ? "" : r[1] || r[0]);
}
function no(e) {
  const r = {}, i = Object.keys(e);
  let a;
  const c = i.length;
  let l;
  for (a = 0; a < c; a++)
    l = i[a], r[l] = e[l];
  return r;
}
function on(e) {
  function r(i, a, c, l) {
    let u = i[l++];
    if (u === "__proto__")
      return !0;
    const m = Number.isFinite(+u), x = l >= i.length;
    return u = !u && y.isArray(c) ? c.length : u, x ? (y.hasOwnProp(c, u) ? c[u] = [c[u], a] : c[u] = a, !m) : ((!c[u] || !y.isObject(c[u])) && (c[u] = []), r(i, a, c[u], l) && y.isArray(c[u]) && (c[u] = no(c[u])), !m);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const i = {};
    return y.forEachEntry(e, (a, c) => {
      r(ro(a), c, i, 0);
    }), i;
  }
  return null;
}
function io(e, r, i) {
  if (y.isString(e))
    try {
      return (r || JSON.parse)(e), y.trim(e);
    } catch (a) {
      if (a.name !== "SyntaxError")
        throw a;
    }
  return (i || JSON.stringify)(e);
}
const ir = {
  transitional: rn,
  adapter: ["xhr", "http"],
  transformRequest: [function(r, i) {
    const a = i.getContentType() || "", c = a.indexOf("application/json") > -1, l = y.isObject(r);
    if (l && y.isHTMLForm(r) && (r = new FormData(r)), y.isFormData(r))
      return c ? JSON.stringify(on(r)) : r;
    if (y.isArrayBuffer(r) || y.isBuffer(r) || y.isStream(r) || y.isFile(r) || y.isBlob(r))
      return r;
    if (y.isArrayBufferView(r))
      return r.buffer;
    if (y.isURLSearchParams(r))
      return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), r.toString();
    let m;
    if (l) {
      if (a.indexOf("application/x-www-form-urlencoded") > -1)
        return to(r, this.formSerializer).toString();
      if ((m = y.isFileList(r)) || a.indexOf("multipart/form-data") > -1) {
        const x = this.env && this.env.FormData;
        return kt(
          m ? { "files[]": r } : r,
          x && new x(),
          this.formSerializer
        );
      }
    }
    return l || c ? (i.setContentType("application/json", !1), io(r)) : r;
  }],
  transformResponse: [function(r) {
    const i = this.transitional || ir.transitional, a = i && i.forcedJSONParsing, c = this.responseType === "json";
    if (r && y.isString(r) && (a && !this.responseType || c)) {
      const u = !(i && i.silentJSONParsing) && c;
      try {
        return JSON.parse(r);
      } catch (m) {
        if (u)
          throw m.name === "SyntaxError" ? _.from(m, _.ERR_BAD_RESPONSE, this, null, this.response) : m;
      }
    }
    return r;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: ce.classes.FormData,
    Blob: ce.classes.Blob
  },
  validateStatus: function(r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ir.headers[e] = {};
});
const or = ir, oo = y.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ao = (e) => {
  const r = {};
  let i, a, c;
  return e && e.split(`
`).forEach(function(u) {
    c = u.indexOf(":"), i = u.substring(0, c).trim().toLowerCase(), a = u.substring(c + 1).trim(), !(!i || r[i] && oo[i]) && (i === "set-cookie" ? r[i] ? r[i].push(a) : r[i] = [a] : r[i] = r[i] ? r[i] + ", " + a : a);
  }), r;
}, Er = Symbol("internals");
function Ke(e) {
  return e && String(e).trim().toLowerCase();
}
function bt(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(bt) : String(e);
}
function so(e) {
  const r = /* @__PURE__ */ Object.create(null), i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let a;
  for (; a = i.exec(e); )
    r[a[1]] = a[2];
  return r;
}
const co = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ut(e, r, i, a, c) {
  if (y.isFunction(a))
    return a.call(this, r, i);
  if (c && (r = i), !!y.isString(r)) {
    if (y.isString(a))
      return r.indexOf(a) !== -1;
    if (y.isRegExp(a))
      return a.test(r);
  }
}
function lo(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (r, i, a) => i.toUpperCase() + a);
}
function uo(e, r) {
  const i = y.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((a) => {
    Object.defineProperty(e, a + i, {
      value: function(c, l, u) {
        return this[a].call(this, r, c, l, u);
      },
      configurable: !0
    });
  });
}
class At {
  constructor(r) {
    r && this.set(r);
  }
  set(r, i, a) {
    const c = this;
    function l(m, x, E) {
      const d = Ke(x);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const b = y.findKey(c, d);
      (!b || c[b] === void 0 || E === !0 || E === void 0 && c[b] !== !1) && (c[b || x] = bt(m));
    }
    const u = (m, x) => y.forEach(m, (E, d) => l(E, d, x));
    return y.isPlainObject(r) || r instanceof this.constructor ? u(r, i) : y.isString(r) && (r = r.trim()) && !co(r) ? u(ao(r), i) : r != null && l(i, r, a), this;
  }
  get(r, i) {
    if (r = Ke(r), r) {
      const a = y.findKey(this, r);
      if (a) {
        const c = this[a];
        if (!i)
          return c;
        if (i === !0)
          return so(c);
        if (y.isFunction(i))
          return i.call(this, c, a);
        if (y.isRegExp(i))
          return i.exec(c);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, i) {
    if (r = Ke(r), r) {
      const a = y.findKey(this, r);
      return !!(a && this[a] !== void 0 && (!i || Ut(this, this[a], a, i)));
    }
    return !1;
  }
  delete(r, i) {
    const a = this;
    let c = !1;
    function l(u) {
      if (u = Ke(u), u) {
        const m = y.findKey(a, u);
        m && (!i || Ut(a, a[m], m, i)) && (delete a[m], c = !0);
      }
    }
    return y.isArray(r) ? r.forEach(l) : l(r), c;
  }
  clear(r) {
    const i = Object.keys(this);
    let a = i.length, c = !1;
    for (; a--; ) {
      const l = i[a];
      (!r || Ut(this, this[l], l, r, !0)) && (delete this[l], c = !0);
    }
    return c;
  }
  normalize(r) {
    const i = this, a = {};
    return y.forEach(this, (c, l) => {
      const u = y.findKey(a, l);
      if (u) {
        i[u] = bt(c), delete i[l];
        return;
      }
      const m = r ? lo(l) : String(l).trim();
      m !== l && delete i[l], i[m] = bt(c), a[m] = !0;
    }), this;
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const i = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (a, c) => {
      a != null && a !== !1 && (i[c] = r && y.isArray(a) ? a.join(", ") : a);
    }), i;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, i]) => r + ": " + i).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...i) {
    const a = new this(r);
    return i.forEach((c) => a.set(c)), a;
  }
  static accessor(r) {
    const a = (this[Er] = this[Er] = {
      accessors: {}
    }).accessors, c = this.prototype;
    function l(u) {
      const m = Ke(u);
      a[m] || (uo(c, u), a[m] = !0);
    }
    return y.isArray(r) ? r.forEach(l) : l(r), this;
  }
}
At.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(At.prototype, ({ value: e }, r) => {
  let i = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => e,
    set(a) {
      this[i] = a;
    }
  };
});
y.freezeMethods(At);
const he = At;
function Nt(e, r) {
  const i = this || or, a = r || i, c = he.from(a.headers);
  let l = a.data;
  return y.forEach(e, function(m) {
    l = m.call(i, l, c.normalize(), r ? r.status : void 0);
  }), c.normalize(), l;
}
function an(e) {
  return !!(e && e.__CANCEL__);
}
function et(e, r, i) {
  _.call(this, e ?? "canceled", _.ERR_CANCELED, r, i), this.name = "CanceledError";
}
y.inherits(et, _, {
  __CANCEL__: !0
});
function po(e, r, i) {
  const a = i.config.validateStatus;
  !i.status || !a || a(i.status) ? e(i) : r(new _(
    "Request failed with status code " + i.status,
    [_.ERR_BAD_REQUEST, _.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4],
    i.config,
    i.request,
    i
  ));
}
const fo = ce.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, r, i, a, c, l) {
      const u = [e + "=" + encodeURIComponent(r)];
      y.isNumber(i) && u.push("expires=" + new Date(i).toGMTString()), y.isString(a) && u.push("path=" + a), y.isString(c) && u.push("domain=" + c), l === !0 && u.push("secure"), document.cookie = u.join("; ");
    },
    read(e) {
      const r = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return r ? decodeURIComponent(r[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function ho(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function mo(e, r) {
  return r ? e.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : e;
}
function sn(e, r) {
  return e && !ho(r) ? mo(e, r) : r;
}
const bo = ce.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const r = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
    let a;
    function c(l) {
      let u = l;
      return r && (i.setAttribute("href", u), u = i.href), i.setAttribute("href", u), {
        href: i.href,
        protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
        host: i.host,
        search: i.search ? i.search.replace(/^\?/, "") : "",
        hash: i.hash ? i.hash.replace(/^#/, "") : "",
        hostname: i.hostname,
        port: i.port,
        pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
      };
    }
    return a = c(window.location.href), function(u) {
      const m = y.isString(u) ? c(u) : u;
      return m.protocol === a.protocol && m.host === a.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function go(e) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return r && r[1] || "";
}
function yo(e, r) {
  e = e || 10;
  const i = new Array(e), a = new Array(e);
  let c = 0, l = 0, u;
  return r = r !== void 0 ? r : 1e3, function(x) {
    const E = Date.now(), d = a[l];
    u || (u = E), i[c] = x, a[c] = E;
    let b = l, k = 0;
    for (; b !== c; )
      k += i[b++], b = b % e;
    if (c = (c + 1) % e, c === l && (l = (l + 1) % e), E - u < r)
      return;
    const T = d && E - d;
    return T ? Math.round(k * 1e3 / T) : void 0;
  };
}
function Fr(e, r) {
  let i = 0;
  const a = yo(50, 250);
  return (c) => {
    const l = c.loaded, u = c.lengthComputable ? c.total : void 0, m = l - i, x = a(m), E = l <= u;
    i = l;
    const d = {
      loaded: l,
      total: u,
      progress: u ? l / u : void 0,
      bytes: m,
      rate: x || void 0,
      estimated: x && u && E ? (u - l) / x : void 0,
      event: c
    };
    d[r ? "download" : "upload"] = !0, e(d);
  };
}
const xo = typeof XMLHttpRequest < "u", wo = xo && function(e) {
  return new Promise(function(i, a) {
    let c = e.data;
    const l = he.from(e.headers).normalize();
    let { responseType: u, withXSRFToken: m } = e, x;
    function E() {
      e.cancelToken && e.cancelToken.unsubscribe(x), e.signal && e.signal.removeEventListener("abort", x);
    }
    let d;
    if (y.isFormData(c)) {
      if (ce.hasStandardBrowserEnv || ce.hasStandardBrowserWebWorkerEnv)
        l.setContentType(!1);
      else if ((d = l.getContentType()) !== !1) {
        const [C, ...N] = d ? d.split(";").map((A) => A.trim()).filter(Boolean) : [];
        l.setContentType([C || "multipart/form-data", ...N].join("; "));
      }
    }
    let b = new XMLHttpRequest();
    if (e.auth) {
      const C = e.auth.username || "", N = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      l.set("Authorization", "Basic " + btoa(C + ":" + N));
    }
    const k = sn(e.baseURL, e.url);
    b.open(e.method.toUpperCase(), tn(k, e.params, e.paramsSerializer), !0), b.timeout = e.timeout;
    function T() {
      if (!b)
        return;
      const C = he.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), A = {
        data: !u || u === "text" || u === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: C,
        config: e,
        request: b
      };
      po(function(G) {
        i(G), E();
      }, function(G) {
        a(G), E();
      }, A), b = null;
    }
    if ("onloadend" in b ? b.onloadend = T : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, b.onabort = function() {
      b && (a(new _("Request aborted", _.ECONNABORTED, e, b)), b = null);
    }, b.onerror = function() {
      a(new _("Network Error", _.ERR_NETWORK, e, b)), b = null;
    }, b.ontimeout = function() {
      let N = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const A = e.transitional || rn;
      e.timeoutErrorMessage && (N = e.timeoutErrorMessage), a(new _(
        N,
        A.clarifyTimeoutError ? _.ETIMEDOUT : _.ECONNABORTED,
        e,
        b
      )), b = null;
    }, ce.hasStandardBrowserEnv && (m && y.isFunction(m) && (m = m(e)), m || m !== !1 && bo(k))) {
      const C = e.xsrfHeaderName && e.xsrfCookieName && fo.read(e.xsrfCookieName);
      C && l.set(e.xsrfHeaderName, C);
    }
    c === void 0 && l.setContentType(null), "setRequestHeader" in b && y.forEach(l.toJSON(), function(N, A) {
      b.setRequestHeader(A, N);
    }), y.isUndefined(e.withCredentials) || (b.withCredentials = !!e.withCredentials), u && u !== "json" && (b.responseType = e.responseType), typeof e.onDownloadProgress == "function" && b.addEventListener("progress", Fr(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && b.upload && b.upload.addEventListener("progress", Fr(e.onUploadProgress)), (e.cancelToken || e.signal) && (x = (C) => {
      b && (a(!C || C.type ? new et(null, e, b) : C), b.abort(), b = null);
    }, e.cancelToken && e.cancelToken.subscribe(x), e.signal && (e.signal.aborted ? x() : e.signal.addEventListener("abort", x)));
    const v = go(k);
    if (v && ce.protocols.indexOf(v) === -1) {
      a(new _("Unsupported protocol " + v + ":", _.ERR_BAD_REQUEST, e));
      return;
    }
    b.send(c || null);
  });
}, Gt = {
  http: qi,
  xhr: wo
};
y.forEach(Gt, (e, r) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: r });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: r });
  }
});
const vr = (e) => `- ${e}`, Eo = (e) => y.isFunction(e) || e === null || e === !1, cn = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: r } = e;
    let i, a;
    const c = {};
    for (let l = 0; l < r; l++) {
      i = e[l];
      let u;
      if (a = i, !Eo(i) && (a = Gt[(u = String(i)).toLowerCase()], a === void 0))
        throw new _(`Unknown adapter '${u}'`);
      if (a)
        break;
      c[u || "#" + l] = a;
    }
    if (!a) {
      const l = Object.entries(c).map(
        ([m, x]) => `adapter ${m} ` + (x === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let u = r ? l.length > 1 ? `since :
` + l.map(vr).join(`
`) : " " + vr(l[0]) : "as no adapter specified";
      throw new _(
        "There is no suitable adapter to dispatch the request " + u,
        "ERR_NOT_SUPPORT"
      );
    }
    return a;
  },
  adapters: Gt
};
function Lt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new et(null, e);
}
function Cr(e) {
  return Lt(e), e.headers = he.from(e.headers), e.data = Nt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), cn.getAdapter(e.adapter || or.adapter)(e).then(function(a) {
    return Lt(e), a.data = Nt.call(
      e,
      e.transformResponse,
      a
    ), a.headers = he.from(a.headers), a;
  }, function(a) {
    return an(a) || (Lt(e), a && a.response && (a.response.data = Nt.call(
      e,
      e.transformResponse,
      a.response
    ), a.response.headers = he.from(a.response.headers))), Promise.reject(a);
  });
}
const kr = (e) => e instanceof he ? { ...e } : e;
function Le(e, r) {
  r = r || {};
  const i = {};
  function a(E, d, b) {
    return y.isPlainObject(E) && y.isPlainObject(d) ? y.merge.call({ caseless: b }, E, d) : y.isPlainObject(d) ? y.merge({}, d) : y.isArray(d) ? d.slice() : d;
  }
  function c(E, d, b) {
    if (y.isUndefined(d)) {
      if (!y.isUndefined(E))
        return a(void 0, E, b);
    } else
      return a(E, d, b);
  }
  function l(E, d) {
    if (!y.isUndefined(d))
      return a(void 0, d);
  }
  function u(E, d) {
    if (y.isUndefined(d)) {
      if (!y.isUndefined(E))
        return a(void 0, E);
    } else
      return a(void 0, d);
  }
  function m(E, d, b) {
    if (b in r)
      return a(E, d);
    if (b in e)
      return a(void 0, E);
  }
  const x = {
    url: l,
    method: l,
    data: l,
    baseURL: u,
    transformRequest: u,
    transformResponse: u,
    paramsSerializer: u,
    timeout: u,
    timeoutMessage: u,
    withCredentials: u,
    withXSRFToken: u,
    adapter: u,
    responseType: u,
    xsrfCookieName: u,
    xsrfHeaderName: u,
    onUploadProgress: u,
    onDownloadProgress: u,
    decompress: u,
    maxContentLength: u,
    maxBodyLength: u,
    beforeRedirect: u,
    transport: u,
    httpAgent: u,
    httpsAgent: u,
    cancelToken: u,
    socketPath: u,
    responseEncoding: u,
    validateStatus: m,
    headers: (E, d) => c(kr(E), kr(d), !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, r)), function(d) {
    const b = x[d] || c, k = b(e[d], r[d], d);
    y.isUndefined(k) && b !== m || (i[d] = k);
  }), i;
}
const ln = "1.6.8", ar = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, r) => {
  ar[e] = function(a) {
    return typeof a === e || "a" + (r < 1 ? "n " : " ") + e;
  };
});
const Ar = {};
ar.transitional = function(r, i, a) {
  function c(l, u) {
    return "[Axios v" + ln + "] Transitional option '" + l + "'" + u + (a ? ". " + a : "");
  }
  return (l, u, m) => {
    if (r === !1)
      throw new _(
        c(u, " has been removed" + (i ? " in " + i : "")),
        _.ERR_DEPRECATED
      );
    return i && !Ar[u] && (Ar[u] = !0, console.warn(
      c(
        u,
        " has been deprecated since v" + i + " and will be removed in the near future"
      )
    )), r ? r(l, u, m) : !0;
  };
};
function Fo(e, r, i) {
  if (typeof e != "object")
    throw new _("options must be an object", _.ERR_BAD_OPTION_VALUE);
  const a = Object.keys(e);
  let c = a.length;
  for (; c-- > 0; ) {
    const l = a[c], u = r[l];
    if (u) {
      const m = e[l], x = m === void 0 || u(m, l, e);
      if (x !== !0)
        throw new _("option " + l + " must be " + x, _.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (i !== !0)
      throw new _("Unknown option " + l, _.ERR_BAD_OPTION);
  }
}
const Kt = {
  assertOptions: Fo,
  validators: ar
}, ye = Kt.validators;
class xt {
  constructor(r) {
    this.defaults = r, this.interceptors = {
      request: new wr(),
      response: new wr()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(r, i) {
    try {
      return await this._request(r, i);
    } catch (a) {
      if (a instanceof Error) {
        let c;
        Error.captureStackTrace ? Error.captureStackTrace(c = {}) : c = new Error();
        const l = c.stack ? c.stack.replace(/^.+\n/, "") : "";
        a.stack ? l && !String(a.stack).endsWith(l.replace(/^.+\n.+\n/, "")) && (a.stack += `
` + l) : a.stack = l;
      }
      throw a;
    }
  }
  _request(r, i) {
    typeof r == "string" ? (i = i || {}, i.url = r) : i = r || {}, i = Le(this.defaults, i);
    const { transitional: a, paramsSerializer: c, headers: l } = i;
    a !== void 0 && Kt.assertOptions(a, {
      silentJSONParsing: ye.transitional(ye.boolean),
      forcedJSONParsing: ye.transitional(ye.boolean),
      clarifyTimeoutError: ye.transitional(ye.boolean)
    }, !1), c != null && (y.isFunction(c) ? i.paramsSerializer = {
      serialize: c
    } : Kt.assertOptions(c, {
      encode: ye.function,
      serialize: ye.function
    }, !0)), i.method = (i.method || this.defaults.method || "get").toLowerCase();
    let u = l && y.merge(
      l.common,
      l[i.method]
    );
    l && y.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete l[v];
      }
    ), i.headers = he.concat(u, l);
    const m = [];
    let x = !0;
    this.interceptors.request.forEach(function(C) {
      typeof C.runWhen == "function" && C.runWhen(i) === !1 || (x = x && C.synchronous, m.unshift(C.fulfilled, C.rejected));
    });
    const E = [];
    this.interceptors.response.forEach(function(C) {
      E.push(C.fulfilled, C.rejected);
    });
    let d, b = 0, k;
    if (!x) {
      const v = [Cr.bind(this), void 0];
      for (v.unshift.apply(v, m), v.push.apply(v, E), k = v.length, d = Promise.resolve(i); b < k; )
        d = d.then(v[b++], v[b++]);
      return d;
    }
    k = m.length;
    let T = i;
    for (b = 0; b < k; ) {
      const v = m[b++], C = m[b++];
      try {
        T = v(T);
      } catch (N) {
        C.call(this, N);
        break;
      }
    }
    try {
      d = Cr.call(this, T);
    } catch (v) {
      return Promise.reject(v);
    }
    for (b = 0, k = E.length; b < k; )
      d = d.then(E[b++], E[b++]);
    return d;
  }
  getUri(r) {
    r = Le(this.defaults, r);
    const i = sn(r.baseURL, r.url);
    return tn(i, r.params, r.paramsSerializer);
  }
}
y.forEach(["delete", "get", "head", "options"], function(r) {
  xt.prototype[r] = function(i, a) {
    return this.request(Le(a || {}, {
      method: r,
      url: i,
      data: (a || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(r) {
  function i(a) {
    return function(l, u, m) {
      return this.request(Le(m || {}, {
        method: r,
        headers: a ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: l,
        data: u
      }));
    };
  }
  xt.prototype[r] = i(), xt.prototype[r + "Form"] = i(!0);
});
const gt = xt;
class sr {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let i;
    this.promise = new Promise(function(l) {
      i = l;
    });
    const a = this;
    this.promise.then((c) => {
      if (!a._listeners)
        return;
      let l = a._listeners.length;
      for (; l-- > 0; )
        a._listeners[l](c);
      a._listeners = null;
    }), this.promise.then = (c) => {
      let l;
      const u = new Promise((m) => {
        a.subscribe(m), l = m;
      }).then(c);
      return u.cancel = function() {
        a.unsubscribe(l);
      }, u;
    }, r(function(l, u, m) {
      a.reason || (a.reason = new et(l, u, m), i(a.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : this._listeners = [r];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(r) {
    if (!this._listeners)
      return;
    const i = this._listeners.indexOf(r);
    i !== -1 && this._listeners.splice(i, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let r;
    return {
      token: new sr(function(c) {
        r = c;
      }),
      cancel: r
    };
  }
}
const vo = sr;
function Co(e) {
  return function(i) {
    return e.apply(null, i);
  };
}
function ko(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Yt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Yt).forEach(([e, r]) => {
  Yt[r] = e;
});
const Ao = Yt;
function un(e) {
  const r = new gt(e), i = Mr(gt.prototype.request, r);
  return y.extend(i, gt.prototype, r, { allOwnKeys: !0 }), y.extend(i, r, null, { allOwnKeys: !0 }), i.create = function(c) {
    return un(Le(e, c));
  }, i;
}
const V = un(or);
V.Axios = gt;
V.CanceledError = et;
V.CancelToken = vo;
V.isCancel = an;
V.VERSION = ln;
V.toFormData = kt;
V.AxiosError = _;
V.Cancel = V.CanceledError;
V.all = function(r) {
  return Promise.all(r);
};
V.spread = Co;
V.isAxiosError = ko;
V.mergeConfig = Le;
V.AxiosHeaders = he;
V.formToJSON = (e) => on(y.isHTMLForm(e) ? new FormData(e) : e);
V.getAdapter = cn.getAdapter;
V.HttpStatusCode = Ao;
V.default = V;
const Ye = V, Bo = {
  1: [
    {
      address: "0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898",
      bridgeAddress: "0x152649eA73beAb28c5b49B26eb48f7EAD6d4c898",
      decimals: 18,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 101,
      version: 1
    }
  ],
  56: [
    {
      address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
      bridgeAddress: "0xb274202daBA6AE180c665B4fbE59857b7c3a8091",
      decimals: 18,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 102,
      version: 1
    }
  ],
  204: [
    {
      address: "0x2779106e4F4A8A28d77A24c18283651a2AE22D1C",
      bridgeAddress: "0x2779106e4F4A8A28d77A24c18283651a2AE22D1C",
      decimals: 18,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 202,
      version: 1
    }
  ],
  324: [
    {
      address: "0x3a287a06c66f9e95a56327185ca2bdf5f031cecd",
      bridgeAddress: "0x3a287a06c66f9e95a56327185ca2bdf5f031cecd",
      decimals: 18,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 165,
      version: 1
    }
  ],
  1101: [
    {
      address: "0x0D1E753a25eBda689453309112904807625bEFBe",
      bridgeAddress: "0x0D1E753a25eBda689453309112904807625bEFBe",
      decimals: 18,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 158,
      version: 1
    }
  ],
  8453: [
    {
      address: "0x3055913c90Fcc1A6CE9a358911721eEb942013A1",
      bridgeAddress: "0x3055913c90Fcc1A6CE9a358911721eEb942013A1",
      decimals: 18,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 184,
      version: 1
    }
  ],
  42161: [
    {
      address: "0x1b896893dfc86bb67Cf57767298b9073D2c1bA2c",
      bridgeAddress: "0x1b896893dfc86bb67Cf57767298b9073D2c1bA2c",
      decimals: 18,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 110,
      version: 1
    }
  ],
  59144: [
    {
      address: "0x0D1E753a25eBda689453309112904807625bEFBe",
      bridgeAddress: "0x0D1E753a25eBda689453309112904807625bEFBe",
      decimals: 18,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 183,
      version: 1
    }
  ],
  7565164: [
    {
      address: "4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL",
      bridgeAddress: "4qQeZ5LwSz6HuupUu8jCtgXyW1mYQcNbFAW1sWZp89HL",
      decimals: 9,
      symbol: "CAKE",
      name: "Cake",
      endpointID: 30168,
      version: 2,
      details: {
        innerTokenProgramId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        oftProgramId: "4S4vn2PZubb8BukEJsXEGdcuTYCgnnwaaona6YMLM4dS",
        escrowTokenAccount: "DTUCojYiwXrdNWjtA3xJ18VF7pA9u3x99b7hsV6LvvNN",
        oftPDA: "2r1KQ7hAPLpuWLVKpNVhKyxxCQ36mLhE74sRsa2z39Ax",
        mintAuthority: "2r1KQ7hAPLpuWLVKpNVhKyxxCQ36mLhE74sRsa2z39Ax"
      }
    }
  ]
}, To = [
  {
    chainId: 1,
    chainName: "Ethereum"
  },
  {
    chainId: 56,
    chainName: "BSC"
  },
  {
    chainId: 204,
    chainName: "Opbnb Mainnet"
  },
  {
    chainId: 324,
    chainName: "Zksync Era"
  },
  {
    chainId: 1101,
    chainName: "Polygon zkEvm"
  },
  {
    chainId: 8453,
    chainName: "Base"
  },
  {
    chainId: 42161,
    chainName: "Arbitrum"
  },
  {
    chainId: 59144,
    chainName: "Linea"
  },
  {
    chainId: 7565164,
    chainName: "Solana"
  }
], So = {
  tokens: Bo,
  chains: To
};
function Do(e) {
  const [r, i] = Qt();
  return Qe(() => {
    (async () => {
      const [c, l, u, m, x] = await Promise.all([
        Ye.get(`${Ce.SERVER_ENDPOINT}/api/bridge/v2/cbridge`),
        Ye.get(`${Ce.SERVER_ENDPOINT}/api/bridge/v2/debridge`),
        Ye.get(`${Ce.SERVER_ENDPOINT}/api/bridge/v2/stargate`),
        Ye.get(`${Ce.SERVER_ENDPOINT}/api/bridge/v2/meson`),
        Ye.get(`${Ce.SERVER_ENDPOINT}/api/bridge/v2/mayan`)
      ]), E = c.data.data, d = l.data.data, b = m.data.data, k = x.data.data, T = u.data.data, v = {
        defaultFromChainId: 1,
        defaultToChainId: 56,
        defaultTokenAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        defaultAmount: "",
        chainOrders: [56, 1, 137, 324, 42161, 59144, 8453, 204],
        tokenOrders: [
          "CAKE",
          "USDC",
          "USDT",
          "FDUSD",
          "USDC.e",
          "ETH",
          "wBETH",
          "wstETH",
          "weETH",
          "UNI",
          "AAVE",
          "LDO",
          "LINK",
          "BTC",
          "BTCB",
          "WBTC",
          "sUSDe",
          "DOGE",
          "ADA",
          "DAI",
          "XRP",
          "PEPE",
          "ELON",
          "FLOKI",
          "MAGA",
          "BabyDoge",
          "BABYGROK",
          "PLANET",
          "OMNI",
          "AGI",
          "FET",
          "AIOZ",
          "AI",
          "NFP",
          "CGPT",
          "PHB",
          "ZIG",
          "NUM",
          "GHX",
          "PENDLE",
          "RDNT",
          "ROSE",
          "HOOK",
          "MASK",
          "EDU",
          "MBOX",
          "BNX"
        ],
        chainConfigs: e,
        displayTokenSymbols: {
          10: {
            "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": "USDC.e"
          },
          56: {
            "0x2170Ed0880ac9A755fd29B2688956BD959F933F8": "ETH"
          },
          137: {
            "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": "USDC.e"
          },
          324: {
            "0x1d17CBcF0D6D143135aE902365D2E5e2A16538D4": "USDC",
            "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4": "USDC.e"
          },
          1101: {
            "0x37eAA0eF3549a5Bb7D431be78a3D99BD360d19e5": "USDC.e"
          },
          42161: {
            "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8": "USDC.e"
          },
          43114: {
            "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664": "USDC.e",
            "0xc7198437980c041c805A1EDcbA50c1Ce5db95118": "USDT.e",
            "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB": "WETH.e"
          }
        },
        providers: [
          kn({
            config: E,
            excludedChains: [],
            excludedTokens: {
              56: ["0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"],
              42161: ["0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9", "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8"]
              // ['USDT', 'USDC.e']
            }
          }),
          An({
            config: d,
            excludedChains: [],
            excludedTokens: {
              // We excluded certain tokens because: previously during testing, these token transactions failed. Some due to internal errors from third parties, and others due to lack of liquidity, hence we removed them.
              1: ["cUSDCv3", "0x5e21D1EE5cf0077B314c381720273ae82378D613"],
              56: [
                "0x67d66e8Ec1Fd25d98B3Ccd3B19B7dc4b4b7fC493",
                "0x0000000000000000000000000000000000000000",
                "0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649"
              ],
              137: ["cUSDCv3"],
              42161: ["cUSDCv3"],
              43114: ["BNB"],
              7565164: [
                "So11111111111111111111111111111111111111112",
                "FmqVMWXBESyu4g6FT1uz1GABKdJ4j6wbuuLFwPJtqpmu",
                "2kaRSuDcz1V1kqq1sDmP23Wy98jutHQQgr5fGDWRpump",
                "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"
              ]
            }
          }),
          Bn({
            config: T,
            excludedChains: [],
            excludedTokens: {}
          }),
          Tn({
            config: So,
            excludedChains: [],
            excludedTokens: {}
          }),
          Sn({
            config: b,
            excludedChains: [],
            excludedTokens: {
              42161: ["SOL"]
            }
          }),
          Dn({
            config: k,
            excludedChains: [],
            excludedTokens: {}
          })
        ]
      };
      i(v);
    })();
  }, [e]), r;
}
const Ro = {
  ...Rn.en
}, Br = {
  en: Ro
}, Oo = {
  base: "0px",
  sm: "576px",
  md: "576px",
  lg: "968px"
};
function Io(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Xe(e, r) {
  return Xe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, c) {
    return a.__proto__ = c, a;
  }, Xe(e, r);
}
function _o(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, Xe(e, r);
}
function Jt(e) {
  return Jt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, Jt(e);
}
function Po(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Uo() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yt(e, r, i) {
  return Uo() ? yt = Reflect.construct.bind() : yt = function(c, l, u) {
    var m = [null];
    m.push.apply(m, l);
    var x = Function.bind.apply(c, m), E = new x();
    return u && Xe(E, u.prototype), E;
  }, yt.apply(null, arguments);
}
function Xt(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Xt = function(a) {
    if (a === null || !Po(a))
      return a;
    if (typeof a != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(a))
        return r.get(a);
      r.set(a, c);
    }
    function c() {
      return yt(a, arguments, Jt(this).constructor);
    }
    return c.prototype = Object.create(a.prototype, {
      constructor: {
        value: c,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Xe(c, a);
  }, Xt(e);
}
var No = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function Lo() {
  for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
    r[i] = arguments[i];
  var a = r[0], c = [], l;
  for (l = 1; l < r.length; l += 1)
    c.push(r[l]);
  return c.forEach(function(u) {
    a = a.replace(/%[a-z]/, u);
  }), a;
}
var Ue = /* @__PURE__ */ function(e) {
  _o(r, e);
  function r(i) {
    var a;
    if (Zt.env.NODE_ENV === "production")
      a = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + i + " for more information.") || this;
    else {
      for (var c = arguments.length, l = new Array(c > 1 ? c - 1 : 0), u = 1; u < c; u++)
        l[u - 1] = arguments[u];
      a = e.call(this, Lo.apply(void 0, [No[i]].concat(l))) || this;
    }
    return Io(a);
  }
  return r;
}(/* @__PURE__ */ Xt(Error));
function jt(e) {
  return Math.round(e * 255);
}
function jo(e, r, i) {
  return jt(e) + "," + jt(r) + "," + jt(i);
}
function Tr(e, r, i, a) {
  if (a === void 0 && (a = jo), r === 0)
    return a(i, i, i);
  var c = (e % 360 + 360) % 360 / 60, l = (1 - Math.abs(2 * i - 1)) * r, u = l * (1 - Math.abs(c % 2 - 1)), m = 0, x = 0, E = 0;
  c >= 0 && c < 1 ? (m = l, x = u) : c >= 1 && c < 2 ? (m = u, x = l) : c >= 2 && c < 3 ? (x = l, E = u) : c >= 3 && c < 4 ? (x = u, E = l) : c >= 4 && c < 5 ? (m = u, E = l) : c >= 5 && c < 6 && (m = l, E = u);
  var d = i - l / 2, b = m + d, k = x + d, T = E + d;
  return a(b, k, T);
}
var Sr = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function $o(e) {
  if (typeof e != "string")
    return e;
  var r = e.toLowerCase();
  return Sr[r] ? "#" + Sr[r] : e;
}
var Mo = /^#[a-fA-F0-9]{6}$/, zo = /^#[a-fA-F0-9]{8}$/, Ho = /^#[a-fA-F0-9]{3}$/, qo = /^#[a-fA-F0-9]{4}$/, $t = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, Wo = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Vo = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Go = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ko(e) {
  if (typeof e != "string")
    throw new Ue(3);
  var r = $o(e);
  if (r.match(Mo))
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16)
    };
  if (r.match(zo)) {
    var i = parseFloat((parseInt("" + r[7] + r[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[2], 16),
      green: parseInt("" + r[3] + r[4], 16),
      blue: parseInt("" + r[5] + r[6], 16),
      alpha: i
    };
  }
  if (r.match(Ho))
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16)
    };
  if (r.match(qo)) {
    var a = parseFloat((parseInt("" + r[4] + r[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + r[1] + r[1], 16),
      green: parseInt("" + r[2] + r[2], 16),
      blue: parseInt("" + r[3] + r[3], 16),
      alpha: a
    };
  }
  var c = $t.exec(r);
  if (c)
    return {
      red: parseInt("" + c[1], 10),
      green: parseInt("" + c[2], 10),
      blue: parseInt("" + c[3], 10)
    };
  var l = Wo.exec(r.substring(0, 50));
  if (l)
    return {
      red: parseInt("" + l[1], 10),
      green: parseInt("" + l[2], 10),
      blue: parseInt("" + l[3], 10),
      alpha: parseFloat("" + l[4]) > 1 ? parseFloat("" + l[4]) / 100 : parseFloat("" + l[4])
    };
  var u = Vo.exec(r);
  if (u) {
    var m = parseInt("" + u[1], 10), x = parseInt("" + u[2], 10) / 100, E = parseInt("" + u[3], 10) / 100, d = "rgb(" + Tr(m, x, E) + ")", b = $t.exec(d);
    if (!b)
      throw new Ue(4, r, d);
    return {
      red: parseInt("" + b[1], 10),
      green: parseInt("" + b[2], 10),
      blue: parseInt("" + b[3], 10)
    };
  }
  var k = Go.exec(r.substring(0, 50));
  if (k) {
    var T = parseInt("" + k[1], 10), v = parseInt("" + k[2], 10) / 100, C = parseInt("" + k[3], 10) / 100, N = "rgb(" + Tr(T, v, C) + ")", A = $t.exec(N);
    if (!A)
      throw new Ue(4, r, N);
    return {
      red: parseInt("" + A[1], 10),
      green: parseInt("" + A[2], 10),
      blue: parseInt("" + A[3], 10),
      alpha: parseFloat("" + k[4]) > 1 ? parseFloat("" + k[4]) / 100 : parseFloat("" + k[4])
    };
  }
  throw new Ue(5);
}
var Yo = function(r) {
  return r.length === 7 && r[1] === r[2] && r[3] === r[4] && r[5] === r[6] ? "#" + r[1] + r[3] + r[5] : r;
}, Dr = Yo;
function Pe(e) {
  var r = e.toString(16);
  return r.length === 1 ? "0" + r : r;
}
function Rr(e, r, i) {
  if (typeof e == "number" && typeof r == "number" && typeof i == "number")
    return Dr("#" + Pe(e) + Pe(r) + Pe(i));
  if (typeof e == "object" && r === void 0 && i === void 0)
    return Dr("#" + Pe(e.red) + Pe(e.green) + Pe(e.blue));
  throw new Ue(6);
}
function Y(e, r, i, a) {
  if (typeof e == "string" && typeof r == "number") {
    var c = Ko(e);
    return "rgba(" + c.red + "," + c.green + "," + c.blue + "," + r + ")";
  } else {
    if (typeof e == "number" && typeof r == "number" && typeof i == "number" && typeof a == "number")
      return a >= 1 ? Rr(e, r, i) : "rgba(" + e + "," + r + "," + i + "," + a + ")";
    if (typeof e == "object" && r === void 0 && i === void 0 && a === void 0)
      return e.alpha >= 1 ? Rr(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Ue(7);
}
const Jo = {
  input: {
    background: "#372F47",
    title: "#8C8F9B",
    border: {
      default: "#55496E",
      hover: "#5C5F6A",
      active: "#FFE900"
    }
  },
  text: {
    primary: "#F4EEFF",
    secondary: "#C4C5CB",
    tertiary: "#8C8F9B",
    placeholder: "#8C8F9B",
    inverse: "#181A1E",
    disabled: Y("#F7F7F8", 0.45),
    brand: "#FFE900",
    warning: "#FFEADB",
    danger: "#ED4B9E",
    route: { title: "#8C8F9B" },
    network: {
      title: "#B8ADD2"
    },
    on: {
      color: {
        primary: "#181A1E",
        disabled: Y("#181A1E", 0.45)
      }
    }
  },
  button: {
    wallet: {
      text: "#000000",
      background: { default: "#FFE900", hover: "#EBD600" }
    },
    refresh: {
      text: "#665800"
    },
    select: {
      text: "#F4EEFF",
      arrow: "#C4C5CB",
      border: "#373943",
      background: { default: "#1E2026", hover: "#373943" }
    },
    primary: {
      default: "#F7F7F8",
      subtle: "#5C5F6A",
      hover: "#E1E2E5",
      active: "#F4EEFF"
    },
    brand: {
      default: "#FFE900",
      subtle: Y("#665800", 0.25),
      hover: "#EBD600",
      active: "#FFF15C"
    },
    success: {
      default: "#18DC7E",
      subtle: Y("#143D29", 0.5),
      hover: "#15C16E",
      active: "#53EAA1"
    },
    danger: {
      default: "#ED4B9E",
      subtle: Y("#541C20", 0.45),
      hover: "#EF2A37",
      active: "#FF7A84"
    },
    disabled: Y("#F7F7F8", 0.45)
  },
  modal: {
    title: "#C4C5CB",
    item: {
      text: { primary: "#FFFFFF", secondary: "#C4C5CB" },
      background: { default: "#1E2026", hover: "#373943" }
    },
    back: {
      default: "#8C8F9B",
      hover: "#FFFFFF"
    },
    close: {
      default: "#8C8F9B",
      hover: "#FFFFFF"
    }
  },
  background: {
    brand: "#FFE900",
    modal: "#1E2026",
    main: "#181A1E",
    route: "#1E2026",
    warning: "#5C2600",
    tag: "#373943",
    body: "#14151A"
  },
  receive: {
    background: "#08060B"
  },
  border: {
    inverse: "#FFFFFF",
    brand: "#FFE900",
    disabled: Y("#5C5F6A", 0.45)
  },
  route: {
    background: { highlight: "rgba(255, 233, 0, 0.06)" },
    border: "#373943",
    warning: "#BC4E00"
  },
  overlay: Y("#14151A", 0.6),
  popover: {
    background: "#373943",
    selected: "#5C5F6A",
    shadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.48)",
    separator: "#5C5F6A"
  }
}, Xo = {
  input: {
    background: "#EEEAF4",
    title: "#8C8F9B",
    border: {
      default: "#D7CAEC",
      hover: "#E1E2E5",
      active: "#EBD600"
    }
  },
  text: {
    primary: "#280D5F",
    secondary: "#5C5F6A",
    tertiary: "#5C5F6A",
    placeholder: "#8C8F9B",
    inverse: "#FFFFFF",
    disabled: Y("#181A1E", 0.3),
    brand: "#181A1E",
    warning: "#BC4E00",
    danger: "#ED4B9E",
    route: { title: "#5C5F6A" },
    network: {
      title: "#7A6EAA"
    },
    on: {
      color: {
        primary: "#FFFFFF",
        disabled: Y("#FFFFFF", 0.4)
      }
    }
  },
  button: {
    wallet: {
      text: "#FFFFFF",
      background: { default: "#FFE900", hover: "#E1E2E5" }
    },
    refresh: {
      text: "#FFFAC2"
    },
    select: {
      text: "#280D5F",
      arrow: "#C4C5CB",
      border: "#373943",
      background: { default: "#F1F2F3", hover: "#E1E2E5" }
    },
    primary: {
      default: "#181A1E",
      subtle: "#E1E2E5",
      hover: "#1E2026",
      active: "#280D5F"
    },
    brand: {
      default: "#C2B100",
      subtle: "#FFFAC2",
      hover: "#948700",
      active: "#857900"
    },
    success: {
      default: "#12A55E",
      subtle: "#BFF8DC",
      hover: "#0E8149",
      active: "#115F39"
    },
    danger: {
      default: "#ED4B9E",
      subtle: "#FDE2E4",
      hover: "#A91E27",
      active: "#821119"
    },
    disabled: Y("#181A1E", 0.4)
  },
  modal: {
    title: "#5C5F6A",
    item: {
      text: { primary: "#181A1E", secondary: "#5C5F6A" },
      background: { default: "#F7F7F8", hover: "#F7F7F8" }
    },
    back: {
      default: "#8C8F9B",
      hover: "#181A1E"
    },
    close: {
      default: "#8C8F9B",
      hover: "#181A1E"
    }
  },
  background: {
    1: "#FFFFFF",
    2: "#F7F7F8",
    3: "#F1F2F3",
    brand: "#FFE900",
    modal: "#F7F7F8",
    main: "#FFFFFF",
    route: "#F7F7F8",
    warning: "#FFEADB",
    tag: "#E1E2E5",
    body: "#F1F2F3"
  },
  receive: {
    background: "#FAF9FA"
  },
  border: {
    inverse: "#181A1E",
    brand: "#EBD600",
    disabled: "#C4C5CB"
  },
  route: {
    background: { highlight: "rgba(255, 233, 0, 0.06)" },
    border: "#373943",
    warning: "#BC4E00"
  },
  overlay: Y("#14151A", 0.2),
  popover: {
    background: "#373943",
    selected: "#5C5F6A",
    shadow: " 0px 4px 8px 0px rgba(0, 0, 0, 0.48)",
    separator: "#5C5F6A"
  }
}, Qo = Ln`
  * {
    font-family: 'Kanit', sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Kanit', sans-serif !important;
    .bccb-widget-transfer-widget-wrapper {
      border: 1px solid;
      border-bottom: 2px solid;
      border-color: ${({ theme: e }) => e.isDark ? "#383241" : "#E7E3EB"};
      background: ${({ theme: e }) => e.isDark ? "#27262C " : "#FFFFFF"};
      padding: 16px;
      gap: 16px;
      max-width: unset;
      box-shadow: none;
      .bccb-widget-network {
        gap: 2px;
      }
      .bccb-widget-transfer-widget-title {
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        text-align: left;
        line-height: 30px;
        display: none;
        ${({ theme: e }) => e.mediaQueries.sm} {
          display: block;
        }
      }
    }
    .bccb-widget-network-row {
      gap: 8px;
      .bccb-widget-network-from, 
      .bccb-widget-network-to {
        height: 40px;
      }
      &>svg path {
        fill: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
        fill-opacity: 1;
      }
    }
    .bccb-widget-network-title, .bccb-widget-input-title, .bccb-widget-received-info-title, .bccb-widget-to-account-title {
      padding: 0 8px;
      align-items: center;
      color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
      & > p {
        color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
        text-overflow: ellipsis;
        display: block;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
      }
    }
    .bccb-widget-input-title {
      height: 29px;
    }
    .bccb-widget-network-button {
      padding: 0 8px;
      border-radius: 16px;
      border: 1px solid;
      outline: none;
      height: 40px;
      border-bottom-width: 2px;
      border-color: ${({ theme: e }) => e.isDark ? "#55496E" : "#D7CAEC"};
      &:hover{
        opacity: 0.65;
      }
      &>svg {
        color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
      }
    }
    .bccb-widget-transfer-input-container {
      margin-top: 16px;
      .bccb-widget-transfer-max > div {
        color: ${({ theme: e }) => e.isDark ? "#48D0DB" : "#02919D"}; 
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        line-height: 150%; /* 21px */
        &:hover {
          opacity: 0.65;
        }
      }
      .bccb-widget-transfer-input-error {
        padding: 0 8px;
      }
      .bccb-widget-transfer-input-wrapper {
        margin-top: 2px;
        border-radius: 16px;
        border: 1px solid;
        border-color: ${({ theme: e }) => e.isDark ? "#55496E" : "#D7CAEC"};
        padding: 4px 4px 4px 16px;
        &:not(.input-error).input-focused {
            &, &:hover {
            box-shadow: 0px 0px 0px 1px #A881FC, 0px 0px 0px 4px rgba(168, 129, 252, 0.40);
            border-color: ${({ theme: e }) => e.isDark ? "#55496E" : "#D7CAEC"};
          }
        }
        &:not(.input-error):hover {
          box-shadow: 0px 0px 0px 1px #A881FC, 0px 0px 0px 4px rgba(168, 129, 252, 0.40);
          outline: none;
        }
        input {
          font-size: 20px;
          font-style: normal;
          font-weight: 600;
          line-height: 30px;
          letter-spacing: -0.2px;
          &::placeholder {
            color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 30px */
            letter-spacing: -0.2px;
          }
        }
        .bccb-widget-token-select-button {
          outline: none;
          border-radius: 16px;
          border: 1px solid rgba(0, 0, 0, 0.20);
          border-bottom: 2px solid rgba(0, 0, 0, 0.20);
          background: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 24px;
          height: 40px;
          &, & svg {
            color: ${({ theme: e }) => e.isDark ? "#000000" : "#FFFFFF"};
          }
        }
      }
    }
    .bccb-widget-received-info-container {
      margin-bottom: 0px;
      & > div > div {
        gap: 6px;
      }
      
      .bccb-widget-received-info-route-content {
        border-radius: 16px;
        gap: 4px; 
        border: 1px solid ${({ theme: e }) => e.isDark ? "#383241" : "#E7E3EB"};
        background: ${({ theme: e }) => e.colors.cardSecondary};
        padding: 12px;
        > div {
          gap: 2.5px; 
        }
        .bccb-widget-route-token {
          color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
          .bccb-widget-route-title-amount {
            font-family: 'Kanit', sans-serif;
            font-size: 24px; 
            font-style: normal;
            font-weight: 600;
            line-height: 150%; /* 36px */
            letter-spacing: -0.24px;
          }
          .bccb-widget-route-token-tooltip {
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%;
          }
          .bccb-widget-route-token-icon {
            & > div {
              font-weight: 600;
              font-size: 16px;
            }
            a {
              color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
              &:hover {
                opacity: 0.6;
              }
            }
            .alert-icon {
              color: #ED4B9E;
            }
          }
        }
      }
    }
    .bccb-widget-to-account-container {
      .bccb-widget-to-account-input {
        border-radius: 16px;
        &:not(.input-error).input-focused {
            &, &:hover {
            box-shadow: 0px 0px 0px 1px #A881FC, 0px 0px 0px 4px rgba(168, 129, 252, 0.40);
            border-color: ${({ theme: e }) => e.isDark ? "#55496E" : "#D7CAEC"};
          }
        }
        &:not(.input-error):hover {
          box-shadow: 0px 0px 0px 1px #A881FC, 0px 0px 0px 4px rgba(168, 129, 252, 0.40);
          outline: none;
        }
        input {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.2px;
          border-radius: 16px;
          border: 1px solid;
          border-color: ${({ theme: e }) => e.isDark ? "#55496E" : "#D7CAEC"};
          &::placeholder {
            color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 30px */
            letter-spacing: -0.2px;
          }
          &:not(.input-error):focus, &:not(.input-error):hover {
            border-color: ${({ theme: e }) => e.isDark ? "#55496E" : "#D7CAEC"};
            box-shadow: none;
            outline: none;
          }
        }
      }

      .bccb-widget-to-account-confirm {
        margin-top: 8px;
        margin-bottom: 0;
        & > div:nth-child(2) {
          color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 24px */
        }
      }
    }
    .bccb-widget-transfer-button-container {
      button {
        &.disabled,
        &.disabled:hover {
          background: ${({ theme: e }) => e.isDark ? "#3C3742" : "#F5F5F5"};
          color: ${({ theme: e }) => e.isDark ? "#666171" : "#BDC2C4"};
          border: none;
        }
        height: 48px;
        border-radius: 16px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.20);
        background: #1FC7D4;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 24px;
        &:not(.disabled):hover {
          background: #1FC7D4;
          opacity: 0.65;
        }
      }
    }

    .bccb-widget-allowed-send-amount {
      font-size: 14px;
      color:
    }

    /* network selection modal */
    .bccb-widget-from-network-modal-overlay, .bccb-widget-to-network-modal-overlay, .bccb-widget-token-modal-overlay, 
    .bccb-widget-transaction-confirming-modal-overlay, .bccb-widget-transaction-approve-modal-overlay, 
    .bccb-widget-transaction-failed-modal-overlay, .bccb-widget-transaction-submitted-modal-overlay,
    .bccb-widget-modal-route-overlay {
      opacity: ${({ theme: e }) => e.isDark ? "0.65" : "0.6"} !important;
      background: ${(e) => e.isDark ? "linear-gradient(0deg, rgba(109, 101, 146, 0.40) 0%, rgba(109, 101, 146, 0.40) 100%), #534A65" : "#280D5F"}; 
    }
    .bccb-widget-modal-no-result-found {
      margin: 24px auto;
      max-width: calc(100% - 32px);
      .title {
        color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
        margin-top: 16px;
        margin-bottom: 4px;
        font-size: 20px;
        font-weight: 600;
        line-height: 150%; /* 30px */
        letter-spacing: -0.2px;
      }
      .bccb-widget-modal-no-result-found-text {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
        color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
      }
    }
    .bccb-widget-from-network-modal-content, .bccb-widget-to-network-modal-content {
      max-height: unset;
      ${({ theme: e }) => e.mediaQueries.sm} {
        max-height: 80vh;
        width: 360px;
      }
      .bccb-widget-from-network-modal-body, .bccb-widget-to-network-modal-body {
        padding: 18px 0 12px;
        > div {
          margin-bottom: 16px;
          padding: 0;
        }
      }
      .bccb-widget-from-network-list-item-active-wrapper, .bccb-widget-to-network-list-item-active-wrapper {
        background: ${({ theme: e }) => e.isDark ? "#322B48" : "#EEEAF4"};
      }
      .bccb-widget-from-network-list-item, .bccb-widget-from-network-list-item-active,
      .bccb-widget-to-network-list-item, .bccb-widget-to-network-list-item-active {
        background: none;
        border: none;
      }
      .bccb-widget-from-network-list-item-wrapper, .bccb-widget-from-network-list-item-active-wrapper,
      .bccb-widget-to-network-list-item-wrapper, .bccb-widget-to-network-list-item-active-wrapper {
        padding: 0 24px;
        &:hover {
          background: ${({ theme: e }) => e.isDark ? "#322B48" : "#EEEAF4"};
        }
        .bccb-widget-from-network-list-item, .bccb-widget-from-network-list-item-active,
        .bccb-widget-to-network-list-item, .bccb-widget-to-network-list-item-active {
          padding: 12px 0;          
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
          img {
            outline: 2px solid ${({ theme: e }) => e.isDark ? "#372F47" : "#EEEAF4"};
          }
        }
      }
    }
    
    .bccb-widget-token-modal-content {
      width: 100vw;
      height: 100vh;
      background: ${({ theme: e }) => e.isDark ? "#27262C" : "#FFFFFF"};
      ${({ theme: e }) => e.mediaQueries.sm} {
        max-height: 80vh;
        width: 360px;
        height: 665px;
      }
      .bccb-widget-token-modal-body {
        padding: 12px 0;
        & > div {
          margin-bottom: 16px; 
          padding: 0;
        }
        .bccb-widget-token-modal-list-header {
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;

          & > p:nth-child(2) {
            display: none;
          }
        }
        .bccb-widget-token-list-item-active-wrapper {
          background: ${({ theme: e }) => e.isDark ? "#322B48" : "#EEEAF4"};
        }

        .bccb-widget-token-list-item-wrapper, .bccb-widget-token-list-item-active-wrapper, .bccb-widget-token-list-item-disabled-wrapper {
          padding: 0;
          border-radius: 0;
          &:hover {
            background: ${({ theme: e }) => e.isDark ? "#322B48" : "#EEEAF4"};
          }
          .bccb-widget-token-list-item, .bccb-widget-token-list-item-active, .bccb-widget-token-list-item-disabled {
            padding: 12px 24px;
            border: none;
            height: 66px;
            border-radius: 0;
            background: none;
            img, .default-icon {
              width: 40px;
              height: 40px;
            }
            .bccb-widget-token-list-symbol {
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 150%; /* 24px */
            }

            .bccb-widget-token-address-link {
              height: 18px;
              .bccb-widget-token-list-address {
                &, & > p {
                  display: block;
                  height: 18px;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 150%; /* 18px */
                  letter-spacing: 0.12px;
                }
              }
              .token-name {
                font-size: 12px;
                font-weight: 400;
                line-height: 150%; /* 18px */
                letter-spacing: 0.12px;
              }
            }

            .bccb-widget-token-list-token-balance > div {
              font-weight: 400;
            }
          }
        }
      }
    }
    .bccb-widget-from-network-modal-header, .bccb-widget-to-network-modal-header, .bccb-widget-token-modal-header,
    .bccb-widget-modal-route-header {
      margin: 24px 24px 0;
      height: 30px;
      color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: -0.2px;
      border-bottom: none;
      padding: 0;
      svg {
        color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
      }
    }
    .bccb-widget-token-modal-list-header {
      padding-bottom: 6px;
      > p {
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%; /* 21px */
      }
    }
    .bccb-widget-from-network-modal-search, 
    .bccb-widget-to-network-modal-search {
      margin-bottom: 8px;
    } 
    .bccb-widget-token-modal-search, 
    .bccb-widget-from-network-modal-search, 
    .bccb-widget-to-network-modal-search {
      margin: 0 24px;
      border: none;
      outline: none;
      input {
        font-size: 16px;
        font-weight: 400;
        line-height: 150%; /* 24px */
        border-radius: 16px;
        color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
        background: ${({ theme: e }) => e.isDark ? "#372F47" : "#EEEAF4"};
        outline: none;
        border: none;
        border: 1px solid ${({ theme: e }) => e.isDark ? "#55496E" : "#D7CAEC"};
        box-shadow: 0px 2px 0px -1px rgba(0, 0, 0, 0.16) inset;
        &:focus, &:hover {
          box-shadow: 0px 0px 0px 1px #A881FC, 0px 0px 0px 4px rgba(168, 129, 252, 0.40);
          border-color: ${({ theme: e }) => e.isDark ? "#55496E" : "#D7CAEC"};
          background: ${({ theme: e }) => e.isDark ? "#372F47" : "#EEEAF4"};
        }
        &::placeholder {
          color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 30px */
          letter-spacing: -0.2px;
        }
      }
      .bccb-widget-modal-search-right-element {
        button {
          background: transparent;
          &:hover {
            svg {
              color: #1E2026;
            }
            background: transparent;
          }
        }
      }
      svg {
        width: 24px;
        height: 24px;
        color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
      }
    }
    .bccb-widget-route-fee-info {
      margin-top: -2px;
    }
    .bccb-widget-route-estimated-time, .bccb-widget-route-fee-info {
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      overflow: hidden;
      color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
    }
    .bccb-widget-route-error,
    .bccb-widget-allowed-send-amount {
      display: flex;
      align-items: flex-start;
      color: ${({ theme: e }) => e.isDark ? "#FF9D00" : "#D67E0A"};
      > div {
        font-size: 14px;
        font-style: normal;
        line-height: 21px;
        margin-left: 6px;
      }
      > svg {
        margin-top: -1px;
        width: 24px;
        height: 24px;
      }
    }

    /* Route */
    .bccb-widget-route-container {
      background: ${({ theme: e }) => e.isDark ? "#27262C" : "#FFFFFF"};
      max-width: 328px;
      padding: 0;
      box-shadow: none;
      .bccb-widget-route-container-inner {
        border: 1px solid;
        border-radius: 24px;
        border-bottom: 2px solid;
        border-color: ${({ theme: e }) => e.isDark ? "#383241" : "#E7E3EB"};
        gap: 8px;
        padding: 16px 0;
      }
      .bccb-widget-route-body {
        max-width: 328px;
        padding: 0 16px;
        max-height: unset;
        .bccb-widget-route-list {
          gap: 8px;
        }
      }
      .bccb-widget-route-header {
        padding: 0 16px;
        font-size: 12px;
        color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
        font-weight: 600;
        line-height: 150%; /* 18px */
        letter-spacing: 0.12px;
        height: 26px;
        // .skeleton {
        //   height: 20px;
        //   width: 20px;
        // }
      }

      .bccb-widget-route-wrapper-selected {
        border: 2px solid #1FC7D4;
      }
      .bccb-widget-route-wrapper {
        border-color: ${({ theme: e }) => e.isDark ? "#383241" : "#E7E3EB"};
        &.route-error {
          .bccb-widget-route-estimated-time, .bccb-widget-route-fee-info, .bccb-widget-route-error, 
          .bccb-widget-route-token, .bccb-widget-route-name, .bccb-widget-allowed-send-amount {
            opacity: 0.6;
          }
        }
        &:not(.route-error):hover {
          border-color: #1FC7D4;
        }
      }
      .bccb-widget-route-wrapper,
      .bccb-widget-route-wrapper-selected {
        color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
        border-radius: 16px;
        background: ${({ theme: e }) => e.colors.cardSecondary};
        .bccb-widget-route-name {
          svg, img {
            width: 24px;
            height: 24px;
          }
          .bccb-widget-route-name-text {
            font-size: 14px;
            font-weight: 600;
            line-height: 150%; /* 21px */
          }
        }
        .bccb-widget-route-token {
          .bccb-widget-route-title-amount {
            font-size: 24px;
            font-weight: 600;
            line-height: 150%; /* 36px */
            letter-spacing: -0.24px;
          }
          .bccb-widget-route-token-icon > div {
            font-weight: 600;
            font-size: 16px;
          }
          .bccb-widget-route-token-tooltip {
            font-size: 16px;
            font-weight: 600;
            line-height: 150%; /* 24px */
          }
        }
      }
    }

    /* Transfer Modal */
    .bccb-widget-transaction-confirming-modal, .bccb-widget-transaction-approve-modal,
    .bccb-widget-transaction-failed-modal, .bccb-widget-transaction-submitted-modal
    {
      background: ${({ theme: e }) => e.isDark ? "#27262C" : "#FFFFFF"};
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16), 0px 4px 8px 0px rgba(0, 0, 0, 0.32);

      .bccb-widget-modal-close-button {
        color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
        &:hover {
          color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
        }
      }
      .bccb-widget-modal-body {
        padding: 20px 24px 0;
        .bccb-widget-modal-body-icon {
          margin-top: 56px;
          &, svg {
            width: 64px;
            height: 64px;
          }        
        }
        .bccb-widget-modal-body-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 150%; /* 30px */
          letter-spacing: -0.2px;
          color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
        }
        .bccb-widget-modal-body-description {
            margin-top: 4px;
            font-size: 16px;
            font-weight: 400;
            line-height: 150%; /* 24px */
            color: ${({ theme: e }) => e.isDark ? "#B8ADD2" : "#7A6EAA"};
          & > p {
            font-size: 16px;
            font-weight: 600;
            line-height: 150%;
            color: ${({ theme: e }) => e.isDark ? "#F4EEFF" : "#280D5F"};
          }
        }
      }
      .bccb-widget-modal-footer {
        padding: 24px;
        gap: 8px;
      }
    }
    .bccb-widget-received-info-route-loading,
    .bccb-widget-route-skeleton,
    .bccb-widget-route-header {
      .chakra-skeleton {
        --skeleton-start-color: ${({ theme: e }) => e.isDark ? Y("#FFFFFF", 0.05) : Y("#08060B", 0.05)};
        --skeleton-end-color: ${({ theme: e }) => e.isDark ? Y("#FFFFFF", 0.1) : Y("#08060B", 0.1)};
      }
    }
    .bccb-widget-route-skeleton {
      border: none;
      background: ${({ theme: e }) => e.colors.cardSecondary};
    }

    .bccb-widget-received-info-route-open > div {
      color: ${({ theme: e }) => e.isDark ? "#48D0DB" : "#02919D"}; 
      font-size: 14px;
      font-weight: 600;
      line-height: 150%; /* 21px */
      &:hover {
        color: ${({ theme: e }) => e.isDark ? "#48D0DB" : "#02919D"}; 
        opacity: 0.6;
      }
    }

    .bccb-widget-refreshing-button {
      &:hover {
        opacity: 0.6;
      }
    }

    .bccb-widget-modal-main-button {
      border-radius: 16px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.20);
      background: #1FC7D4;
      font-size: 16px;
      font-weight: 600;
      line-height: 150%; /* 24px */
      color: #FFF;
      &:hover {
        background: #1FC7D4;
        color: #FFF;
        opacity: 0.65;
      }
    }

    .bccb-widget-modal-second-button {
      border-radius: 16px;
      border: 2px solid #1FC7D4;
      color: #02919D;
      &:hover {
        border: 2px solid #1FC7D4;
        background: none;
        opacity: 0.65;
        color: #02919D;
      }
    }

    .bccb-widget-route-name-tag-bestTime,
    .bccb-widget-route-name-tag-bestReturn {
      color: ${({ theme: e }) => e.isDark ? "#000000" : "#FFFFFF "};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 21px */
      background: #1FC7D4;
      padding: 2px 9px;
      height: 25px;
    }
    .bccb-widget-route-name-tag-bestTime {
      background: ${({ theme: e }) => e.isDark ? "#A881FC" : "#7645D9"};
    }

    .bccb-widget-modal-route-content {
      width: 100vw;
      height: 100vh;
      background: ${({ theme: e }) => e.isDark ? "#27262C" : "#FFFFFF"};
      ${({ theme: e }) => e.mediaQueries.sm} {
        height: auto;
        max-height: 80vh;
        width: 360px;
      }
      ${({ theme: e }) => e.mediaQueries.lg} {
        width: 360px;
        height: auto;
      }
      .bccb-widget-modal-route-wrapper {
        padding: 0;
        overflow: auto;
      }
      .bccb-widget-route-container {
        width: 100%;
        max-width: unset;
        border-radius: none;
        .bccb-widget-route-body {
          width: 100%;
          max-width: unset;
          padding: 0 24px;
        }
        .bccb-widget-route-container-inner {
          padding: 24px 0;
          border: none;
          border-radius: none;
          ${({ theme: e }) => e.mediaQueries.sm} {
            padding: 24px 0;
          }
          ${({ theme: e }) => e.mediaQueries.lg} {
            padding: 0;
          }
        }
      }
      .bccb-widget-route-bottom {
        display: none;
      }
    }

    .bccb-widget-overview {
      &[data-show] {
        width: auto;
      }
      ${({ theme: e }) => e.mediaQueries.sm} {
        &[data-show] {
          width: auto;
        }
      }
      ${({ theme: e }) => e.mediaQueries.lg} {
        &[data-show] {
          width: 352px;
        }
      }
    }

    .bccb-widget-info-tooltip {
      background: ${({ theme: e }) => e.isDark ? "#FFFFFF" : "#27262C"};
      color: ${({ theme: e }) => e.isDark ? "#27262C" : "#FFFFFF"};
      border-radius: 16px;
      padding: 16px;
      font-size: 14px;
      line-height: 150%;
      max-width: 280px;
      .chakra-tooltip__arrow {
        background: ${({ theme: e }) => e.isDark ? "#FFFFFF" : "#27262C"};
      }
      .bccb-widget-route-info-tooltip-fee {
        line-height: 150%;
        font-size: 14px;
        color: ${({ theme: e }) => e.isDark ? "#27262C" : "#FFFFFF"};
      }
    }

    .chakra-portal .chakra-popover__popper {
      z-index: 1;

      .bccb-widget-route-token-tooltip-content {
        --popper-arrow-bg: ${({ theme: e }) => e.isDark ? "#FFFFFF" : "#27262C"};;
        background: ${({ theme: e }) => e.isDark ? "#FFFFFF" : "#27262C"};
        border-radius: 16px;
        padding: 16px;
      }

      .bccb-widget-route-token-tooltip-body {
        padding: 0;
        &>div {
          color: ${({ theme: e }) => e.isDark ? "#27262C" : "#FFFFFF"};
          font-size: 14px;
          line-height: 150%;
          font-weight: 400;
          &>a:hover {
            color: ${({ theme: e }) => e.isDark ? "#27262C" : "#FFFFFF"};
          }
        }
      }
    }
  } /* body */
`, Zo = Qo;
function ea(e) {
  Qe(() => {
    if (!e || e.length === 0)
      return;
    const r = e.map((l) => {
      var u, m;
      return (m = (u = er.find((x) => x.id === l)) == null ? void 0 : u.name) == null ? void 0 : m.toLowerCase();
    }).filter(Boolean), i = () => {
      document.querySelectorAll(".bccb-widget-to-network-virtual-list .bccb-widget-to-network-list-item").forEach((u) => {
        var E;
        const m = u.querySelector("p.chakra-text"), x = (E = m == null ? void 0 : m.textContent) == null ? void 0 : E.toLowerCase();
        x && r.includes(x) && u.remove();
      });
    }, a = () => {
      var u;
      const l = document.querySelector(".bccb-widget-exchange-chain-icon");
      if (l) {
        const m = document.querySelector(
          ".bccb-widget-network-from .bccb-widget-network-button p.chakra-text"
        ), x = (u = m == null ? void 0 : m.textContent) == null ? void 0 : u.toLowerCase();
        x && r.includes(x) ? (l.style.pointerEvents = "none", l.style.opacity = "0.4", l.style.cursor = "not-allowed") : (l.style.pointerEvents = "", l.style.opacity = "", l.style.cursor = "");
      }
    };
    i(), a();
    const c = new MutationObserver(() => {
      i(), a();
    });
    return c.observe(document.body, {
      childList: !0,
      subtree: !0
    }), () => c.disconnect();
  }, [e]);
}
function wt(e) {
  const [r, i] = Qt("");
  return Qe(() => {
    const a = () => {
      const l = document.querySelector(`.bccb-widget-network-${e} .bccb-widget-network-name`);
      if (l) {
        const u = l.querySelector("p.chakra-text");
        u && i(u.textContent);
      }
    };
    a();
    const c = new MutationObserver(a);
    return c.observe(document.body, {
      childList: !0,
      subtree: !0,
      characterData: !0
    }), () => c.disconnect();
  }, [e]), r == null ? void 0 : r.toLowerCase();
}
function ta(e) {
  const [r, i] = Qt(void 0);
  return Qe(() => {
    let a = null, c = null, l = null;
    const u = (d) => {
      a = d;
      const b = () => i(d.value);
      l = () => b(), d.addEventListener("input", l), c = new MutationObserver(() => b()), c.observe(d, {
        attributes: !0,
        attributeFilter: ["value"]
      }), b();
    }, m = () => {
      a && l && a.removeEventListener("input", l), c == null || c.disconnect(), a = null;
    }, x = () => {
      const d = document.querySelector(e);
      d instanceof HTMLInputElement && (m(), u(d));
    }, E = new MutationObserver(() => {
      const d = document.querySelector(e);
      d instanceof HTMLInputElement ? d !== a && u(d) : a && (m(), i(void 0));
    });
    return E.observe(document.body, {
      childList: !0,
      subtree: !0
    }), x(), () => {
      m(), E.disconnect();
    };
  }, [e]), r;
}
const ra = () => {
  const e = wt("from"), r = wt("to"), i = ta(".bccb-widget-to-account-input input"), { t: a } = Ir(), c = Mt(() => {
    var x;
    const m = e === "solana" ? r : e;
    return (x = er.find((E) => E.name.toLowerCase() === (m == null ? void 0 : m.toLowerCase()))) == null ? void 0 : x.id;
  }, [e, r]), { data: l } = $n({
    address: i,
    chainId: c,
    query: {
      enabled: !!(i && c)
    }
  });
  return !(l && l !== "0x") ? null : /* @__PURE__ */ I.jsx(En, { variant: "warning", m: "16px 0", children: /* @__PURE__ */ I.jsx(Fn, { children: a(
    "Smart contract wallets are currently not supported on Bridge. To continue, please switch back to an EOA (Externally Owned Account) wallet before interacting with the product."
  ) }) });
};
function na() {
  return Qe(() => {
    if (typeof document < "u" && document) {
      const e = document.querySelector(".bccb-widget-transfer-input");
      if (e) {
        e.setAttribute("pattern", "^[0-9]*[.,]?[0-9]*$");
        const r = (i) => {
          var c;
          const a = (c = i == null ? void 0 : i.clipboardData) == null ? void 0 : c.getData("Text");
          (!a || !/^[0-9]*[.,]?[0-9]*$/.test(a)) && i.preventDefault();
        };
        return e.addEventListener("paste", r), () => {
          e.removeEventListener("paste", r);
        };
      }
    }
  }, []), null;
}
const ia = On(), fa = (e) => {
  const { connectWalletButtons: r, supportedChainIds: i, disabledToChains: a, rpcConfig: c, deBridgeAccessToken: l } = e;
  ea(a), na();
  const { currentLanguage: u, t: m } = Ir(), x = wt("from"), E = wt("to"), d = jn(), b = vn(), { connector: k } = Mn(), T = Mt(() => er.filter((A) => [...i, 7565164].includes(A.id)).filter((A) => !((k == null ? void 0 : k.id) === "BinanceW3WSDK" && A.id === 1101)).filter((A) => A.id !== 1101 && A.id !== 1442).map((A) => ({
    ...A,
    rpcUrls: { default: { http: (c == null ? void 0 : c[A.id]) ?? A.rpcUrls.default.http } }
  })), [i, k == null ? void 0 : k.id, c]), v = Do(T), C = xn(
    (A) => {
      A.message && b.toastError(A.message);
    },
    [b]
  ), N = Mt(
    () => ({
      appName: "canonical-bridge",
      assetPrefix: Ce.ASSET_PREFIX,
      bridgeTitle: m("Bridge"),
      theme: {
        colorMode: d.isDark ? "dark" : "light",
        breakpoints: Oo,
        colors: {
          dark: Jo,
          light: Xo
        }
      },
      locale: {
        language: u.code,
        messages: Br[u.code] ?? Br.en
      },
      http: {
        apiTimeOut: 30 * 1e3,
        serverEndpoint: Ce.SERVER_ENDPOINT,
        deBridgeReferralCode: "31958",
        deBridgeAccessToken: l
      },
      transfer: v,
      components: {
        connectWalletButton: (x && r[x]) ?? r.default,
        refreshingIcon: /* @__PURE__ */ I.jsx(Kn, {})
      },
      analytics: {
        enabled: !0,
        onEvent: (A, P) => {
          if (A === It.SELECT_BRIDGE_FROM_DROPDOWN || A === It.CLICK_BRIDGE_SWITCH_NETWORK) {
            const G = A === It.SELECT_BRIDGE_FROM_DROPDOWN ? P == null ? void 0 : P.fromNetwork : E;
            if (G) {
              const ne = Un[G];
              if (ne) {
                const $e = {
                  network: G,
                  chainId: ne
                };
                window.dispatchEvent(new CustomEvent("pcs_bridge_select_from_network", { detail: $e }));
              } else
                console.warn(`No matching chain found for network name: ${G}`);
            }
          }
          ia(A, P);
        }
      },
      chains: T,
      onError: C
    }),
    [
      u.code,
      m,
      d.isDark,
      v,
      T,
      C,
      x,
      E,
      r,
      l
    ]
  );
  return /* @__PURE__ */ I.jsxs(I.Fragment, { children: [
    /* @__PURE__ */ I.jsx(Zo, {}),
    /* @__PURE__ */ I.jsxs(In, { config: N, children: [
      /* @__PURE__ */ I.jsxs(Pr, { flexDirection: "column", justifyContent: "center", maxWidth: "480px", width: "100%", children: [
        /* @__PURE__ */ I.jsx(_n, {}),
        /* @__PURE__ */ I.jsx(ra, {}),
        /* @__PURE__ */ I.jsx(Qn, {})
      ] }),
      /* @__PURE__ */ I.jsx(Pn, {})
    ] })
  ] });
};
export {
  fa as CanonicalBridge
};
