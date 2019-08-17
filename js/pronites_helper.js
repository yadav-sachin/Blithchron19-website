!function(t) {
    function e(o) {
        if (n[o])
            return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, e),
        i.l = !0,
        i.exports
    }
    var n = {};
    e.m = t,
    e.c = n,
    e.i = function(t) {
        return t
    }
    ,
    e.d = function(t, n, o) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }
    ,
    e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return e.d(n, "a", n),
        n
    }
    ,
    e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    e.p = "",
    e(e.s = 2)
}([function(t, e, n) {
    var o;
    !function(i, r, s) {
        function a(t, e, n) {
            if (t.addEventListener)
                return void t.addEventListener(e, n, !1);
            t.attachEvent("on" + e, n)
        }
        function l(t) {
            if ("keypress" == t.type) {
                var e = String.fromCharCode(t.which);
                return t.shiftKey || (e = e.toLowerCase()),
                e
            }
            return k[t.which] ? k[t.which] : x[t.which] ? x[t.which] : String.fromCharCode(t.which).toLowerCase()
        }
        function c(t, e) {
            return t.sort().join(",") === e.sort().join(",")
        }
        function u(t) {
            var e = [];
            return t.shiftKey && e.push("shift"),
            t.altKey && e.push("alt"),
            t.ctrlKey && e.push("ctrl"),
            t.metaKey && e.push("meta"),
            e
        }
        function p(t) {
            if (t.preventDefault)
                return void t.preventDefault();
            t.returnValue = !1
        }
        function h(t) {
            if (t.stopPropagation)
                return void t.stopPropagation();
            t.cancelBubble = !0
        }
        function d(t) {
            return "shift" == t || "ctrl" == t || "alt" == t || "meta" == t
        }
        function f() {
            if (!b) {
                b = {};
                for (var t in k)
                    t > 95 && t < 112 || k.hasOwnProperty(t) && (b[k[t]] = t)
            }
            return b
        }
        function m(t, e, n) {
            return n || (n = f()[t] ? "keydown" : "keypress"),
            "keypress" == n && e.length && (n = "keydown"),
            n
        }
        function y(t) {
            return "+" === t ? ["+"] : (t = t.replace(/\+{2}/g, "+plus"),
            t.split("+"))
        }
        function g(t, e) {
            var n, o, i, r = [];
            for (n = y(t),
            i = 0; i < n.length; ++i)
                o = n[i],
                A[o] && (o = A[o]),
                e && "keypress" != e && S[o] && (o = S[o],
                r.push("shift")),
                d(o) && r.push(o);
            return e = m(o, r, e),
            {
                key: o,
                modifiers: r,
                action: e
            }
        }
        function w(t, e) {
            return null !== t && t !== r && (t === e || w(t.parentNode, e))
        }
        function v(t) {
            function e(t) {
                t = t || {};
                var e, n = !1;
                for (e in b)
                    t[e] ? n = !0 : b[e] = 0;
                n || (S = !1)
            }
            function n(t, e, n, o, i, r) {
                var s, a, l = [], u = n.type;
                if (!y._callbacks[t])
                    return [];
                for ("keyup" == u && d(t) && (e = [t]),
                s = 0; s < y._callbacks[t].length; ++s)
                    if (a = y._callbacks[t][s],
                    (o || !a.seq || b[a.seq] == a.level) && u == a.action && ("keypress" == u && !n.metaKey && !n.ctrlKey || c(e, a.modifiers))) {
                        var p = !o && a.combo == i
                          , h = o && a.seq == o && a.level == r;
                        (p || h) && y._callbacks[t].splice(s, 1),
                        l.push(a)
                    }
                return l
            }
            function o(t, e, n, o) {
                y.stopCallback(e, e.target || e.srcElement, n, o) || !1 === t(e, n) && (p(e),
                h(e))
            }
            function i(t) {
                "number" != typeof t.which && (t.which = t.keyCode);
                var e = l(t);
                if (e)
                    return "keyup" == t.type && k === e ? void (k = !1) : void y.handleKey(e, u(t), t)
            }
            function s() {
                clearTimeout(w),
                w = setTimeout(e, 1e3)
            }
            function f(t, n, i, r) {
                function a(n) {
                    o(i, n, t),
                    "keyup" !== r && (k = l(n)),
                    setTimeout(e, 10)
                }
                b[t] = 0;
                for (var c = 0; c < n.length; ++c) {
                    var u = c + 1 === n.length
                      , p = u ? a : function(e) {
                        return function() {
                            S = e,
                            ++b[t],
                            s()
                        }
                    }(r || g(n[c + 1]).action);
                    m(n[c], p, r, t, c)
                }
            }
            function m(t, e, o, i, r) {
                y._directMap[t + ":" + o] = e,
                t = t.replace(/\s+/g, " ");
                var s, a = t.split(" ");
                if (a.length > 1)
                    return void f(t, a, e, o);
                s = g(t, o),
                y._callbacks[s.key] = y._callbacks[s.key] || [],
                n(s.key, s.modifiers, {
                    type: s.action
                }, i, t, r),
                y._callbacks[s.key][i ? "unshift" : "push"]({
                    callback: e,
                    modifiers: s.modifiers,
                    action: s.action,
                    seq: i,
                    level: r,
                    combo: t
                })
            }
            var y = this;
            if (t = t || r,
            !(y instanceof v))
                return new v(t);
            y.target = t,
            y._callbacks = {},
            y._directMap = {};
            var w, b = {}, k = !1, x = !1, S = !1;
            y._handleKey = function(t, i, r) {
                var s, a = n(t, i, r), l = {}, c = 0, u = !1;
                for (s = 0; s < a.length; ++s)
                    a[s].seq && (c = Math.max(c, a[s].level));
                for (s = 0; s < a.length; ++s)
                    if (a[s].seq) {
                        if (a[s].level != c)
                            continue;
                        u = !0,
                        l[a[s].seq] = 1,
                        o(a[s].callback, r, a[s].combo, a[s].seq)
                    } else
                        u || o(a[s].callback, r, a[s].combo);
                var p = "keypress" == r.type && x;
                r.type != S || d(t) || p || e(l),
                x = u && "keydown" == r.type
            }
            ,
            y._bindMultiple = function(t, e, n) {
                for (var o = 0; o < t.length; ++o)
                    m(t[o], e, n)
            }
            ,
            a(t, "keypress", i),
            a(t, "keydown", i),
            a(t, "keyup", i)
        }
        if (i) {
            for (var b, k = {
                8: "backspace",
                9: "tab",
                13: "enter",
                16: "shift",
                17: "ctrl",
                18: "alt",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "ins",
                46: "del",
                91: "meta",
                93: "meta",
                224: "meta"
            }, x = {
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }, S = {
                "~": "`",
                "!": "1",
                "@": "2",
                "#": "3",
                $: "4",
                "%": "5",
                "^": "6",
                "&": "7",
                "*": "8",
                "(": "9",
                ")": "0",
                _: "-",
                "+": "=",
                ":": ";",
                '"': "'",
                "<": ",",
                ">": ".",
                "?": "/",
                "|": "\\"
            }, A = {
                option: "alt",
                command: "meta",
                return: "enter",
                escape: "esc",
                plus: "+",
                mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
            }, E = 1; E < 20; ++E)
                k[111 + E] = "f" + E;
            for (E = 0; E <= 9; ++E)
                k[E + 96] = E.toString();
            v.prototype.bind = function(t, e, n) {
                var o = this;
                return t = t instanceof Array ? t : [t],
                o._bindMultiple.call(o, t, e, n),
                o
            }
            ,
            v.prototype.unbind = function(t, e) {
                var n = this;
                return n.bind.call(n, t, function() {}, e)
            }
            ,
            v.prototype.trigger = function(t, e) {
                var n = this;
                return n._directMap[t + ":" + e] && n._directMap[t + ":" + e]({}, t),
                n
            }
            ,
            v.prototype.reset = function() {
                var t = this;
                return t._callbacks = {},
                t._directMap = {},
                t
            }
            ,
            v.prototype.stopCallback = function(t, e) {
                var n = this;
                if ((" " + e.className + " ").indexOf(" mousetrap ") > -1)
                    return !1;
                if (w(e, n.target))
                    return !1;
                if ("composedPath"in t && "function" == typeof t.composedPath) {
                    var o = t.composedPath()[0];
                    o !== t.target && (e = o)
                }
                return "INPUT" == e.tagName || "SELECT" == e.tagName || "TEXTAREA" == e.tagName || e.isContentEditable
            }
            ,
            v.prototype.handleKey = function() {
                var t = this;
                return t._handleKey.apply(t, arguments)
            }
            ,
            v.addKeycodes = function(t) {
                for (var e in t)
                    t.hasOwnProperty(e) && (k[e] = t[e]);
                b = null
            }
            ,
            v.init = function() {
                var t = v(r);
                for (var e in t)
                    "_" !== e.charAt(0) && (v[e] = function(e) {
                        return function() {
                            return t[e].apply(t, arguments)
                        }
                    }(e))
            }
            ,
            v.init(),
            i.Mousetrap = v,
            void 0 !== t && t.exports && (t.exports = v),
            void 0 !== (o = function() {
                return v
            }
            .call(e, n, e, t)) && (t.exports = o)
        }
    }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null)
}
, function(t, e) {
    !function() {
        "use strict";
        function t(o) {
            if (!o)
                throw new Error("No options passed to Waypoint constructor");
            if (!o.element)
                throw new Error("No element option passed to Waypoint constructor");
            if (!o.handler)
                throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e,
            this.options = t.Adapter.extend({}, t.defaults, o),
            this.element = this.options.element,
            this.adapter = new t.Adapter(this.element),
            this.callback = o.handler,
            this.axis = this.options.horizontal ? "horizontal" : "vertical",
            this.enabled = this.options.enabled,
            this.triggerPoint = null,
            this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }),
            this.context = t.Context.findOrCreateByElement(this.options.context),
            t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            n[this.key] = this,
            e += 1
        }
        var e = 0
          , n = {};
        t.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t)
        }
        ,
        t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }
        ,
        t.prototype.destroy = function() {
            this.context.remove(this),
            this.group.remove(this),
            delete n[this.key]
        }
        ,
        t.prototype.disable = function() {
            return this.enabled = !1,
            this
        }
        ,
        t.prototype.enable = function() {
            return this.context.refresh(),
            this.enabled = !0,
            this
        }
        ,
        t.prototype.next = function() {
            return this.group.next(this)
        }
        ,
        t.prototype.previous = function() {
            return this.group.previous(this)
        }
        ,
        t.invokeAll = function(t) {
            var e = [];
            for (var o in n)
                e.push(n[o]);
            for (var i = 0, r = e.length; r > i; i++)
                e[i][t]()
        }
        ,
        t.destroyAll = function() {
            t.invokeAll("destroy")
        }
        ,
        t.disableAll = function() {
            t.invokeAll("disable")
        }
        ,
        t.enableAll = function() {
            t.Context.refreshAll();
            for (var e in n)
                n[e].enabled = !0;
            return this
        }
        ,
        t.refreshAll = function() {
            t.Context.refreshAll()
        }
        ,
        t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }
        ,
        t.viewportWidth = function() {
            return document.documentElement.clientWidth
        }
        ,
        t.adapters = [],
        t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        },
        t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        },
        window.Waypoint = t
    }(),
    function() {
        "use strict";
        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }
        function e(t) {
            this.element = t,
            this.Adapter = i.Adapter,
            this.adapter = new this.Adapter(t),
            this.key = "waypoint-context-" + n,
            this.didScroll = !1,
            this.didResize = !1,
            this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            },
            this.waypoints = {
                vertical: {},
                horizontal: {}
            },
            t.waypointContextKey = this.key,
            o[t.waypointContextKey] = this,
            n += 1,
            i.windowContext || (i.windowContext = !0,
            i.windowContext = new e(window)),
            this.createThrottledScrollHandler(),
            this.createThrottledResizeHandler()
        }
        var n = 0
          , o = {}
          , i = window.Waypoint
          , r = window.onload;
        e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t,
            this.refresh()
        }
        ,
        e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal)
              , e = this.Adapter.isEmptyObject(this.waypoints.vertical)
              , n = this.element == this.element.window;
            t && e && !n && (this.adapter.off(".waypoints"),
            delete o[this.key])
        }
        ,
        e.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(),
                e.didResize = !1
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || (e.didResize = !0,
                i.requestAnimationFrame(t))
            })
        }
        ,
        e.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(),
                e.didScroll = !1
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || i.isTouch) && (e.didScroll = !0,
                i.requestAnimationFrame(t))
            })
        }
        ,
        e.prototype.handleResize = function() {
            i.Context.refreshAll()
        }
        ,
        e.prototype.handleScroll = function() {
            var t = {}
              , e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
            for (var n in e) {
                var o = e[n]
                  , i = o.newScroll > o.oldScroll
                  , r = i ? o.forward : o.backward;
                for (var s in this.waypoints[n]) {
                    var a = this.waypoints[n][s];
                    if (null !== a.triggerPoint) {
                        var l = o.oldScroll < a.triggerPoint
                          , c = o.newScroll >= a.triggerPoint
                          , u = l && c
                          , p = !l && !c;
                        (u || p) && (a.queueTrigger(r),
                        t[a.group.id] = a.group)
                    }
                }
            }
            for (var h in t)
                t[h].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll
            }
        }
        ,
        e.prototype.innerHeight = function() {
            return this.element == this.element.window ? i.viewportHeight() : this.adapter.innerHeight()
        }
        ,
        e.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key],
            this.checkEmpty()
        }
        ,
        e.prototype.innerWidth = function() {
            return this.element == this.element.window ? i.viewportWidth() : this.adapter.innerWidth()
        }
        ,
        e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var n in this.waypoints[e])
                    t.push(this.waypoints[e][n]);
            for (var o = 0, i = t.length; i > o; o++)
                t[o].destroy()
        }
        ,
        e.prototype.refresh = function() {
            var t, e = this.element == this.element.window, n = e ? void 0 : this.adapter.offset(), o = {};
            this.handleScroll(),
            t = {
                horizontal: {
                    contextOffset: e ? 0 : n.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : n.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in t) {
                var s = t[r];
                for (var a in this.waypoints[r]) {
                    var l, c, u, p, h, d = this.waypoints[r][a], f = d.options.offset, m = d.triggerPoint, y = 0, g = null == m;
                    d.element !== d.element.window && (y = d.adapter.offset()[s.offsetProp]),
                    "function" == typeof f ? f = f.apply(d) : "string" == typeof f && (f = parseFloat(f),
                    d.options.offset.indexOf("%") > -1 && (f = Math.ceil(s.contextDimension * f / 100))),
                    l = s.contextScroll - s.contextOffset,
                    d.triggerPoint = Math.floor(y + l - f),
                    c = m < s.oldScroll,
                    u = d.triggerPoint >= s.oldScroll,
                    p = c && u,
                    h = !c && !u,
                    !g && p ? (d.queueTrigger(s.backward),
                    o[d.group.id] = d.group) : !g && h ? (d.queueTrigger(s.forward),
                    o[d.group.id] = d.group) : g && s.oldScroll >= d.triggerPoint && (d.queueTrigger(s.forward),
                    o[d.group.id] = d.group)
                }
            }
            return i.requestAnimationFrame(function() {
                for (var t in o)
                    o[t].flushTriggers()
            }),
            this
        }
        ,
        e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t)
        }
        ,
        e.refreshAll = function() {
            for (var t in o)
                o[t].refresh()
        }
        ,
        e.findByElement = function(t) {
            return o[t.waypointContextKey]
        }
        ,
        window.onload = function() {
            r && r(),
            e.refreshAll()
        }
        ,
        i.requestAnimationFrame = function(e) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
        }
        ,
        i.Context = e
    }(),
    function() {
        "use strict";
        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }
        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }
        function n(t) {
            this.name = t.name,
            this.axis = t.axis,
            this.id = this.name + "-" + this.axis,
            this.waypoints = [],
            this.clearTriggerQueues(),
            o[this.axis][this.name] = this
        }
        var o = {
            vertical: {},
            horizontal: {}
        }
          , i = window.Waypoint;
        n.prototype.add = function(t) {
            this.waypoints.push(t)
        }
        ,
        n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }
        ,
        n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var o = this.triggerQueues[n]
                  , i = "up" === n || "left" === n;
                o.sort(i ? e : t);
                for (var r = 0, s = o.length; s > r; r += 1) {
                    var a = o[r];
                    (a.options.continuous || r === o.length - 1) && a.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }
        ,
        n.prototype.next = function(e) {
            this.waypoints.sort(t);
            var n = i.Adapter.inArray(e, this.waypoints);
            return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
        }
        ,
        n.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var n = i.Adapter.inArray(e, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }
        ,
        n.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t)
        }
        ,
        n.prototype.remove = function(t) {
            var e = i.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }
        ,
        n.prototype.first = function() {
            return this.waypoints[0]
        }
        ,
        n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }
        ,
        n.findOrCreate = function(t) {
            return o[t.axis][t.name] || new n(t)
        }
        ,
        i.Group = n
    }(),
    function() {
        "use strict";
        function t(t) {
            return t === t.window
        }
        function e(e) {
            return t(e) ? e : e.defaultView
        }
        function n(t) {
            this.element = t,
            this.handlers = {}
        }
        var o = window.Waypoint;
        n.prototype.innerHeight = function() {
            return t(this.element) ? this.element.innerHeight : this.element.clientHeight
        }
        ,
        n.prototype.innerWidth = function() {
            return t(this.element) ? this.element.innerWidth : this.element.clientWidth
        }
        ,
        n.prototype.off = function(t, e) {
            function n(t, e, n) {
                for (var o = 0, i = e.length - 1; i > o; o++) {
                    var r = e[o];
                    n && n !== r || t.removeEventListener(r)
                }
            }
            var o = t.split(".")
              , i = o[0]
              , r = o[1]
              , s = this.element;
            if (r && this.handlers[r] && i)
                n(s, this.handlers[r][i], e),
                this.handlers[r][i] = [];
            else if (i)
                for (var a in this.handlers)
                    n(s, this.handlers[a][i] || [], e),
                    this.handlers[a][i] = [];
            else if (r && this.handlers[r]) {
                for (var l in this.handlers[r])
                    n(s, this.handlers[r][l], e);
                this.handlers[r] = {}
            }
        }
        ,
        n.prototype.offset = function() {
            if (!this.element.ownerDocument)
                return null;
            var t = this.element.ownerDocument.documentElement
              , n = e(this.element.ownerDocument)
              , o = {
                top: 0,
                left: 0
            };
            return this.element.getBoundingClientRect && (o = this.element.getBoundingClientRect()),
            {
                top: o.top + n.pageYOffset - t.clientTop,
                left: o.left + n.pageXOffset - t.clientLeft
            }
        }
        ,
        n.prototype.on = function(t, e) {
            var n = t.split(".")
              , o = n[0]
              , i = n[1] || "__default"
              , r = this.handlers[i] = this.handlers[i] || {};
            (r[o] = r[o] || []).push(e),
            this.element.addEventListener(o, e)
        }
        ,
        n.prototype.outerHeight = function(e) {
            var n, o = this.innerHeight();
            return e && !t(this.element) && (n = window.getComputedStyle(this.element),
            o += parseInt(n.marginTop, 10),
            o += parseInt(n.marginBottom, 10)),
            o
        }
        ,
        n.prototype.outerWidth = function(e) {
            var n, o = this.innerWidth();
            return e && !t(this.element) && (n = window.getComputedStyle(this.element),
            o += parseInt(n.marginLeft, 10),
            o += parseInt(n.marginRight, 10)),
            o
        }
        ,
        n.prototype.scrollLeft = function() {
            var t = e(this.element);
            return t ? t.pageXOffset : this.element.scrollLeft
        }
        ,
        n.prototype.scrollTop = function() {
            var t = e(this.element);
            return t ? t.pageYOffset : this.element.scrollTop
        }
        ,
        n.extend = function() {
            for (var t = Array.prototype.slice.call(arguments), e = 1, n = t.length; n > e; e++)
                !function(t, e) {
                    if ("object" == typeof t && "object" == typeof e)
                        for (var n in e)
                            e.hasOwnProperty(n) && (t[n] = e[n])
                }(t[0], t[e]);
            return t[0]
        }
        ,
        n.inArray = function(t, e, n) {
            return null == e ? -1 : e.indexOf(t, n)
        }
        ,
        n.isEmptyObject = function(t) {
            for (var e in t)
                return !1;
            return !0
        }
        ,
        o.adapters.push({
            name: "noframework",
            Adapter: n
        }),
        o.Adapter = n
    }()
}
, function(t, e, n) {
    "use strict";
    n(1);
    var o = n(0);
    window.onbeforeunload = function() {
        window.scrollTo(0, 0)
    }
    ;
    var i = !1;
    !function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (i = !0)
    }(navigator.userAgent || navigator.vendor || window.opera),
    document.addEventListener("DOMContentLoaded", function(t) {
        if (!i) {
            var e = function(t) {
                var e, n = 30 / $(window).height(), o = 30 / $(window).width(), i = t.pageX - $(window).width() / 2, r = t.pageY - $(window).height() / 2, s = o * i * 1 + 1, a = n * r * 1 + 1, l = document.getElementsByClassName("type-item");
                for (e = 1; e < l.length + 1; e++) {
                    var c = "t" + e
                      , u = 2 * (13 - e)
                      , p = .12 * (13 - e);
                    $("#" + c).css("transform", "translate(calc(" + s + "px * " + u + "), calc(" + a + "px * " + u + ")) rotate(calc(" + s + " * " + p + "deg))")
                }
                $(".label").css("transform", "translate(calc(" + s + "px * 0.6), calc(" + a + "px * 0.6)) rotate(calc(" + s + "deg * 0.1))")
            }
              , n = function(t, e) {
                var n = 0;
                return function() {
                    var o = (new Date).getTime();
                    if (!(o - n < t))
                        return n = o,
                        e.apply(void 0, arguments)
                }
            }
              , o = function(t) {
                var e = 80 / window.innerHeight
                  , n = 80 / window.innerWidth
                  , o = t.offsetX - window.innerWidth / 2
                  , i = t.offsetY - window.innerHeight
                  , r = n * o * 1 + 1
                  , s = e * i * 2 + 150;
                $(".Schedule-photo").css("transform", "translate(calc(" + r + "px), calc(" + s + "px)) rotate(calc(" + r + "deg * 0.1))")
            }
              , r = function(t) {
                $(".Speaker-wrapper").each(function() {
                    var e = 10 / $(this).height()
                      , n = 10 / $(this).width()
                      , o = $(this).offset().top
                      , i = $(this).offset().left
                      , r = t.pageX - i - $(this).width()
                      , s = t.pageY - o - $(this).height()
                      , a = n * r * 1 + 2
                      , l = e * s * 1 + 2;
                    $(this).css("transform", "translate(calc(" + a + "px * 0.6), calc(" + l + "px * 0.6)) rotate(calc(" + a + "deg * 0.1))")
                })
            }
              , s = document.querySelector(".Speakers")
              , a = document.querySelector(".Schedule")
              , l = document.querySelectorAll(".Schedule-slot")
              , c = document.querySelector("#speakers-title-large")
              , u = document.querySelector("#schedule-title-large");
            s && a && (new Waypoint({
                element: s,
                handler: function(t) {
                    c.classList.toggle("fixed"),
                    c.style.top = "3rem",
                    c.style.bottom = "unset"
                },
                offset: "0%"
            }),
            new Waypoint({
                element: s,
                handler: function(t) {
                    c.classList.toggle("fixed"),
                    c.style.bottom = "8rem",
                    c.style.top = "unset"
                },
                offset: "bottom-in-view"
            }),
            new Waypoint({
                element: a,
                handler: function(t) {
                    u.classList.toggle("fixed"),
                    u.style.top = "3rem",
                    u.style.bottom = "unset"
                },
                offset: "0%"
            }),
            new Waypoint({
                element: a,
                handler: function(t) {
                    u.classList.toggle("fixed"),
                    u.style.bottom = "8rem",
                    u.style.top = "unset"
                },
                offset: "bottom-in-view"
            })),
            document.addEventListener("mousemove", e),
            l.forEach(function(t) {
                var e = n(150, o);
                t.addEventListener("mousemove", e)
            }),
            document.addEventListener("mousemove", r),
            document.addEventListener("mousemove", function(t) {
                var e = document.getElementById("cursor");
                e.style.top = t.pageY - 25 + "px",
                e.style.left = t.pageX - 25 + "px"
            })
        }
        var p = document.querySelector(".js-hamburger")
          , h = document.querySelector(".js-menu");
        p.addEventListener("click", function(t) {
            t.preventDefault(),
            p.classList.toggle("Hamburger--isOpen"),
            h.classList.toggle("MobileMenu--isOpen"),
            p.classList.contains("Hamburger--isOpen") ? (p.setAttribute("aria-label", "Close mobile menu"),
            document.body.style.overflowY = "hidden") : (p.setAttribute("aria-label", "Open mobile menu"),
            document.body.style.overflowY = "visible")
        })
    }),
    console.log("Everything's better in purple. It's only 6 key strokes away."),
    o.bind("p u r p l e", function() {
        document.body.style.setProperty("--white", "#cdb5e3"),
        document.body.style.setProperty("--black", "#551a8b")
    })
}
]);
