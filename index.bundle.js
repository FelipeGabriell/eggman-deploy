"use strict";
(self.webpackChunksonic_superstars = self.webpackChunksonic_superstars || []).push([[826], {
    5480: function(e, t, i) {
        var o = i(1955)
          , n = {
            amy: {
                image: "img/characters/amy.png",
                thumb_on: "img/characters/amy_on.jpg",
                thumb_off: "img/characters/amy_off.jpg"
            },
            eggman: {
                image: "img/characters/eggman.png",
                thumb_on: "img/characters/eggman_on.jpg",
                thumb_off: "img/characters/eggman_off.jpg"
            },
            fangs: {
                image: "img/characters/fangs.png",
                thumb_on: "img/characters/fangs_on.jpg",
                thumb_off: "img/characters/fangs_off.jpg"
            },
            knuckles: {
                image: "img/characters/knuckles.png",
                thumb_on: "img/characters/knuckles_on.jpg",
                thumb_off: "img/characters/knuckles_off.jpg"
            },
            sonic: {
                image: "img/characters/sonic.png",
                thumb_on: "img/characters/sonic_on.jpg",
                thumb_off: "img/characters/sonic_off.jpg"
            },
            tails: {
                image: "img/characters/tails.png",
                thumb_on: "img/characters/tails_on.jpg",
                thumb_off: "img/characters/tails_off.jpg"
            },
            trip: {
                image: "img/characters/trip.png",
                thumb_on: "img/characters/trip_on.jpg",
                thumb_off: "img/characters/trip_off.jpg"
            }
        }
          , s = {
            en: {
                title: "characters",
                amy: {
                    name: "Amy",
                    desc: ""
                },
                eggman: {
                    name: "Eggman",
                    desc: ""
                },
                fangs: {
                    name: "Fang",
                    desc: "."
                },
                knuckles: {
                    name: "Knuckles",
                    desc: "."
                },
                sonic: {
                    name: "Sonic",
                    desc: ""
                },
                tails: {
                    name: "Tails",
                    desc: ""
                },
                trip: {
                    name: "Trip",
                    desc: ""
                }
            },
        }
          , a = ["img/characters/amy.png", "img/characters/eggman.png", "img/characters/fangs.png", "img/characters/knuckles.png", "img/characters/sonic.png", "img/characters/tails.png", "img/characters/trip.png", "img/purchase/ss_ns.png", "img/purchase/ss_ps5.png", "img/purchase/ss_ps4.png", "img/purchase/ss_xbox.png"];
        !function e(t) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (t && t.length > i) {
                var o = new Image;
                o.onload = function() {
                    e(t, i + 1)
                }
                ,
                o.src = a[i]
            }
        }(a);
        var r = !0
          , c = function(e, t) {
            var i = document.querySelector(".characters__name")
              , o = document.querySelector(".characters__description")
              , a = document.querySelector(".characters__image");
            document.querySelector(".characters__href").href = n[t].image;
            var c = document.querySelectorAll(".characters__text, .characters__image");
            c.forEach((function(e) {
                e.classList.add("characters__fadeout")
            }
            )),
            setTimeout((function() {
                i.textContent = s[e][t].name,
                o.innerHTML = s[e][t].desc,
                a.src = n[t].image,
                c.forEach((function(e) {
                    e.classList.remove("characters__fadeout")
                }
                )),
                r = !0
            }
            ), 800)
        }
          , l = document.querySelectorAll(".characters__top");
        l.forEach((function(e) {
            e.addEventListener("click", (function(t) {
                if (t.preventDefault(),
                r && !t.target.classList.contains("characters__active")) {
                    r = !1;
                    var i = o.Z.get("lang");
                    document.querySelector(".characters__active").classList.remove("characters__active"),
                    e.classList.add("characters__active");
                    var n = e.dataset.character;
                    c(i, n)
                }
            }
            ))
        }
        )),
        function() {
            var e = o.Z.get("lang")
              , t = "sonic";
            l.forEach((function(e) {
                e.classList.remove(".characterActive")
            }
            ));
            var i = s[e].title;
            i = i[0].toUpperCase() + i.slice(1).toLowerCase(),
            document.querySelector(".character__text").textContent = i,
            document.querySelector('[data-character="'.concat(t, '"]')).classList.add(".characters__active"),
            c(e, t)
        }()
    },
    4057: function(e, t, i) {
        var o = i(1955);
        const n = (e,t=1e4)=>(e = parseFloat(e + "") || 0,
        Math.round((e + Number.EPSILON) * t) / t)
          , s = function(e) {
            if (!(e && e instanceof Element && e.offsetParent))
                return !1;
            const t = e.scrollHeight > e.clientHeight
              , i = window.getComputedStyle(e).overflowY
              , o = -1 !== i.indexOf("hidden")
              , n = -1 !== i.indexOf("visible");
            return t && !o && !n
        }
          , a = function(e, t) {
            return !(!e || e === document.body || t && e === t) && (s(e) ? e : a(e.parentElement, t))
        }
          , r = function(e) {
            var t = (new DOMParser).parseFromString(e, "text/html").body;
            if (t.childElementCount > 1) {
                for (var i = document.createElement("div"); t.firstChild; )
                    i.appendChild(t.firstChild);
                return i
            }
            return t.firstChild
        }
          , c = e=>`${e || ""}`.split(" ").filter((e=>!!e))
          , l = (e,t,i)=>{
            c(t).forEach((t=>{
                e && e.classList.toggle(t, i || !1)
            }
            ))
        }
        ;
        class d {
            constructor(e) {
                Object.defineProperty(this, "pageX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "pageY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "clientX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "clientY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "time", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "nativePointer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                this.nativePointer = e,
                this.pageX = e.pageX,
                this.pageY = e.pageY,
                this.clientX = e.clientX,
                this.clientY = e.clientY,
                this.id = self.Touch && e instanceof Touch ? e.identifier : -1,
                this.time = Date.now()
            }
        }
        const u = {
            passive: !1
        };
        class h {
            constructor(e, {start: t=(()=>!0), move: i=(()=>{}
            ), end: o=(()=>{}
            )}) {
                Object.defineProperty(this, "element", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "startCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "moveCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "endCallback", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "currentPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "startPointers", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                this.element = e,
                this.startCallback = t,
                this.moveCallback = i,
                this.endCallback = o;
                for (const e of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"])
                    this[e] = this[e].bind(this);
                this.element.addEventListener("mousedown", this.onPointerStart, u),
                this.element.addEventListener("touchstart", this.onTouchStart, u),
                this.element.addEventListener("touchmove", this.onMove, u),
                this.element.addEventListener("touchend", this.onTouchEnd),
                this.element.addEventListener("touchcancel", this.onTouchEnd)
            }
            onPointerStart(e) {
                if (!e.buttons || 0 !== e.button)
                    return;
                const t = new d(e);
                this.currentPointers.some((e=>e.id === t.id)) || this.triggerPointerStart(t, e) && (window.addEventListener("mousemove", this.onMove),
                window.addEventListener("mouseup", this.onPointerEnd),
                window.addEventListener("blur", this.onWindowBlur))
            }
            onTouchStart(e) {
                for (const t of Array.from(e.changedTouches || []))
                    this.triggerPointerStart(new d(t), e);
                window.addEventListener("blur", this.onWindowBlur)
            }
            onMove(e) {
                const t = this.currentPointers.slice()
                  , i = "changedTouches"in e ? Array.from(e.changedTouches || []).map((e=>new d(e))) : [new d(e)]
                  , o = [];
                for (const e of i) {
                    const t = this.currentPointers.findIndex((t=>t.id === e.id));
                    t < 0 || (o.push(e),
                    this.currentPointers[t] = e)
                }
                o.length && this.moveCallback(e, this.currentPointers.slice(), t)
            }
            onPointerEnd(e) {
                e.buttons > 0 && 0 !== e.button || (this.triggerPointerEnd(e, new d(e)),
                window.removeEventListener("mousemove", this.onMove),
                window.removeEventListener("mouseup", this.onPointerEnd),
                window.removeEventListener("blur", this.onWindowBlur))
            }
            onTouchEnd(e) {
                for (const t of Array.from(e.changedTouches || []))
                    this.triggerPointerEnd(e, new d(t))
            }
            triggerPointerStart(e, t) {
                return !!this.startCallback(t, e, this.currentPointers.slice()) && (this.currentPointers.push(e),
                this.startPointers.push(e),
                !0)
            }
            triggerPointerEnd(e, t) {
                const i = this.currentPointers.findIndex((e=>e.id === t.id));
                i < 0 || (this.currentPointers.splice(i, 1),
                this.startPointers.splice(i, 1),
                this.endCallback(e, t, this.currentPointers.slice()))
            }
            onWindowBlur() {
                this.clear()
            }
            clear() {
                for (; this.currentPointers.length; ) {
                    const e = this.currentPointers[this.currentPointers.length - 1];
                    this.currentPointers.splice(this.currentPointers.length - 1, 1),
                    this.startPointers.splice(this.currentPointers.length - 1, 1),
                    this.endCallback(new Event("touchend",{
                        bubbles: !0,
                        cancelable: !0,
                        clientX: e.clientX,
                        clientY: e.clientY
                    }), e, this.currentPointers.slice())
                }
            }
            stop() {
                this.element.removeEventListener("mousedown", this.onPointerStart, u),
                this.element.removeEventListener("touchstart", this.onTouchStart, u),
                this.element.removeEventListener("touchmove", this.onMove, u),
                this.element.removeEventListener("touchend", this.onTouchEnd),
                this.element.removeEventListener("touchcancel", this.onTouchEnd),
                window.removeEventListener("mousemove", this.onMove),
                window.removeEventListener("mouseup", this.onPointerEnd),
                window.removeEventListener("blur", this.onWindowBlur)
            }
        }
        function p(e, t) {
            return t ? Math.sqrt(Math.pow(t.clientX - e.clientX, 2) + Math.pow(t.clientY - e.clientY, 2)) : 0
        }
        function m(e, t) {
            return t ? {
                clientX: (e.clientX + t.clientX) / 2,
                clientY: (e.clientY + t.clientY) / 2
            } : e
        }
        const g = e=>"object" == typeof e && null !== e && e.constructor === Object && "[object Object]" === Object.prototype.toString.call(e)
          , f = (e,...t)=>{
            const i = t.length;
            for (let o = 0; o < i; o++) {
                const i = t[o] || {};
                Object.entries(i).forEach((([t,i])=>{
                    const o = Array.isArray(i) ? [] : {};
                    e[t] || Object.assign(e, {
                        [t]: o
                    }),
                    g(i) ? Object.assign(e[t], f(o, i)) : Array.isArray(i) ? Object.assign(e, {
                        [t]: [...i]
                    }) : Object.assign(e, {
                        [t]: i
                    })
                }
                ))
            }
            return e
        }
          , b = function(e, t) {
            return e.split(".").reduce(((e,t)=>"object" == typeof e ? e[t] : void 0), t)
        };
        class v {
            constructor(e={}) {
                Object.defineProperty(this, "options", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e
                }),
                Object.defineProperty(this, "events", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Map
                }),
                this.setOptions(e);
                for (const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
                    e.startsWith("on") && "function" == typeof this[e] && (this[e] = this[e].bind(this))
            }
            setOptions(e) {
                this.options = e ? f({}, this.constructor.defaults, e) : {};
                for (const [e,t] of Object.entries(this.option("on") || {}))
                    this.on(e, t)
            }
            option(e, ...t) {
                let i = b(e, this.options);
                return i && "function" == typeof i && (i = i.call(this, this, ...t)),
                i
            }
            optionFor(e, t, i, ...o) {
                let n = b(t, e);
                var s;
                "string" != typeof (s = n) || isNaN(s) || isNaN(parseFloat(s)) || (n = parseFloat(n)),
                "true" === n && (n = !0),
                "false" === n && (n = !1),
                n && "function" == typeof n && (n = n.call(this, this, e, ...o));
                let a = b(t, this.options);
                return a && "function" == typeof a ? n = a.call(this, this, e, ...o, n) : void 0 === n && (n = a),
                void 0 === n ? i : n
            }
            cn(e) {
                const t = this.options.classes;
                return t && t[e] || ""
            }
            localize(e, t=[]) {
                e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, ((e,t,i)=>{
                    let o = "";
                    return i ? o = this.option(`${t[0] + t.toLowerCase().substring(1)}.l10n.${i}`) : t && (o = this.option(`l10n.${t}`)),
                    o || (o = e),
                    o
                }
                ));
                for (let i = 0; i < t.length; i++)
                    e = e.split(t[i][0]).join(t[i][1]);
                return e.replace(/\{\{(.*?)\}\}/g, ((e,t)=>t))
            }
            on(e, t) {
                let i = [];
                "string" == typeof e ? i = e.split(" ") : Array.isArray(e) && (i = e),
                this.events || (this.events = new Map),
                i.forEach((e=>{
                    let i = this.events.get(e);
                    i || (this.events.set(e, []),
                    i = []),
                    i.includes(t) || i.push(t),
                    this.events.set(e, i)
                }
                ))
            }
            off(e, t) {
                let i = [];
                "string" == typeof e ? i = e.split(" ") : Array.isArray(e) && (i = e),
                i.forEach((e=>{
                    const i = this.events.get(e);
                    if (Array.isArray(i)) {
                        const e = i.indexOf(t);
                        e > -1 && i.splice(e, 1)
                    }
                }
                ))
            }
            emit(e, ...t) {
                [...this.events.get(e) || []].forEach((e=>e(this, ...t))),
                "*" !== e && this.emit("*", e, ...t)
            }
        }
        Object.defineProperty(v, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.17"
        }),
        Object.defineProperty(v, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        class w extends v {
            constructor(e={}) {
                super(e),
                Object.defineProperty(this, "plugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                })
            }
            attachPlugins(e={}) {
                const t = new Map;
                for (const [i,o] of Object.entries(e)) {
                    const e = this.option(i)
                      , n = this.plugins[i];
                    n || !1 === e ? n && !1 === e && (n.detach(),
                    delete this.plugins[i]) : t.set(i, new o(this,e || {}))
                }
                for (const [e,i] of t)
                    this.plugins[e] = i,
                    i.attach();
                this.emit("attachPlugins")
            }
            detachPlugins(e) {
                e = e || Object.keys(this.plugins);
                for (const t of e) {
                    const e = this.plugins[t];
                    e && e.detach(),
                    delete this.plugins[t]
                }
                return this.emit("detachPlugins"),
                this
            }
        }
        var y;
        !function(e) {
            e[e.Init = 0] = "Init",
            e[e.Error = 1] = "Error",
            e[e.Ready = 2] = "Ready",
            e[e.Panning = 3] = "Panning",
            e[e.Mousemove = 4] = "Mousemove",
            e[e.Destroy = 5] = "Destroy"
        }(y || (y = {}));
        const S = ["a", "b", "c", "d", "e", "f"]
          , x = {
            PANUP: "Move up",
            PANDOWN: "Move down",
            PANLEFT: "Move left",
            PANRIGHT: "Move right",
            ZOOMIN: "Zoom in",
            ZOOMOUT: "Zoom out",
            TOGGLEZOOM: "Toggle zoom level",
            TOGGLE1TO1: "Toggle zoom level",
            ITERATEZOOM: "Toggle zoom level",
            ROTATECCW: "Rotate counterclockwise",
            ROTATECW: "Rotate clockwise",
            FLIPX: "Flip horizontally",
            FLIPY: "Flip vertically",
            FITX: "Fit horizontally",
            FITY: "Fit vertically",
            RESET: "Reset",
            TOGGLEFS: "Toggle fullscreen"
        }
          , _ = {
            content: null,
            width: "auto",
            height: "auto",
            panMode: "drag",
            touch: !0,
            dragMinThreshold: 3,
            lockAxis: !1,
            mouseMoveFactor: 1,
            mouseMoveFriction: .12,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: "auto",
            minScale: 1,
            maxScale: 2,
            friction: .25,
            dragFriction: .35,
            decelFriction: .05,
            click: "toggleZoom",
            dblClick: !1,
            wheel: "zoom",
            wheelLimit: 7,
            spinner: !0,
            bounds: "auto",
            infinite: !1,
            rubberband: !0,
            bounce: !0,
            maxVelocity: 75,
            transformParent: !1,
            classes: {
                content: "f-panzoom__content",
                isLoading: "is-loading",
                canZoomIn: "can-zoom_in",
                canZoomOut: "can-zoom_out",
                isDraggable: "is-draggable",
                isDragging: "is-dragging",
                inFullscreen: "in-fullscreen",
                htmlHasFullscreen: "with-panzoom-in-fullscreen"
            },
            l10n: x
        }
          , E = '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>'
          , k = e=>e && null !== e && e instanceof Element && "nodeType"in e
          , A = (e,t)=>{
            e && c(t).forEach((t=>{
                e.classList.remove(t)
            }
            ))
        }
          , T = (e,t)=>{
            e && c(t).forEach((t=>{
                e.classList.add(t)
            }
            ))
        }
          , C = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: 0,
            f: 0
        };
        let P = null
          , O = null;
        class M extends w {
            get isTouchDevice() {
                return null === O && (O = window.matchMedia("(hover: none)").matches),
                O
            }
            get isMobile() {
                return null === P && (P = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
                P
            }
            get panMode() {
                return "mousemove" !== this.options.panMode || this.isTouchDevice ? "drag" : "mousemove"
            }
            get panOnlyZoomed() {
                const e = this.options.panOnlyZoomed;
                return "auto" === e ? this.isTouchDevice : e
            }
            get isInfinite() {
                return this.option("infinite")
            }
            get angle() {
                return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0
            }
            get targetAngle() {
                return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0
            }
            get scale() {
                const {a: e, b: t} = this.current;
                return Math.sqrt(e * e + t * t) || 1
            }
            get targetScale() {
                const {a: e, b: t} = this.target;
                return Math.sqrt(e * e + t * t) || 1
            }
            get minScale() {
                return this.option("minScale") || 1
            }
            get fullScale() {
                const {contentRect: e} = this;
                return e.fullWidth / e.fitWidth || 1
            }
            get maxScale() {
                return this.fullScale * (this.option("maxScale") || 1) || 1
            }
            get coverScale() {
                const {containerRect: e, contentRect: t} = this
                  , i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
                return Math.min(this.fullScale, i)
            }
            get isScaling() {
                return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
            }
            get isContentLoading() {
                const e = this.content;
                return !!(e && e instanceof HTMLImageElement) && !e.complete
            }
            get isResting() {
                if (this.isBouncingX || this.isBouncingY)
                    return !1;
                for (const e of S) {
                    const t = "e" == e || "f" === e ? .001 : 1e-5;
                    if (Math.abs(this.target[e] - this.current[e]) > t)
                        return !1
                }
                return !(!this.ignoreBounds && !this.checkBounds().inBounds)
            }
            constructor(e, t={}, i={}) {
                var o;
                if (super(t),
                Object.defineProperty(this, "pointerTracker", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "resizeObserver", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "updateTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "rAF", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "isTicking", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "friction", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "ignoreBounds", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "isBouncingX", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "isBouncingY", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "clicks", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "trackingPoints", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "cwd", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "pmme", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: y.Init
                }),
                Object.defineProperty(this, "isDragging", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "content", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "spinner", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "containerRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0
                    }
                }),
                Object.defineProperty(this, "contentRect", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        fullWidth: 0,
                        fullHeight: 0,
                        fitWidth: 0,
                        fitHeight: 0,
                        width: 0,
                        height: 0
                    }
                }),
                Object.defineProperty(this, "dragStart", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        top: 0,
                        left: 0,
                        time: 0
                    }
                }),
                Object.defineProperty(this, "dragOffset", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        x: 0,
                        y: 0,
                        time: 0
                    }
                }),
                Object.defineProperty(this, "current", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, C)
                }),
                Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: Object.assign({}, C)
                }),
                Object.defineProperty(this, "velocity", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {
                        a: 0,
                        b: 0,
                        c: 0,
                        d: 0,
                        e: 0,
                        f: 0
                    }
                }),
                Object.defineProperty(this, "lockedAxis", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                !e)
                    throw new Error("Container Element Not Found");
                this.container = e,
                this.initContent(),
                this.attachPlugins(Object.assign(Object.assign({}, M.Plugins), i)),
                this.emit("init");
                const n = this.content;
                if (n.addEventListener("load", this.onLoad),
                n.addEventListener("error", this.onError),
                this.isContentLoading) {
                    if (this.option("spinner")) {
                        e.classList.add(this.cn("isLoading"));
                        const t = r(E);
                        !e.contains(n) || n.parentElement instanceof HTMLPictureElement ? this.spinner = e.appendChild(t) : this.spinner = (null === (o = n.parentElement) || void 0 === o ? void 0 : o.insertBefore(t, n)) || null
                    }
                    this.emit("beforeLoad")
                } else
                    queueMicrotask((()=>{
                        this.enable()
                    }
                    ))
            }
            initContent() {
                const {container: e} = this
                  , t = this.cn("content");
                let i = this.option("content") || e.querySelector(`.${t}`);
                if (i || (i = e.querySelector("img,picture") || e.firstElementChild,
                i && T(i, t)),
                i instanceof HTMLPictureElement && (i = i.querySelector("img")),
                !i)
                    throw new Error("No content found");
                this.content = i
            }
            onLoad() {
                this.spinner && (this.spinner.remove(),
                this.spinner = null),
                this.option("spinner") && this.container.classList.remove(this.cn("isLoading")),
                this.emit("afterLoad"),
                this.state === y.Init ? this.enable() : this.updateMetrics()
            }
            onError() {
                this.state !== y.Destroy && (this.spinner && (this.spinner.remove(),
                this.spinner = null),
                this.stop(),
                this.detachEvents(),
                this.state = y.Error,
                this.emit("error"))
            }
            attachObserver() {
                var e;
                const t = ()=>Math.abs(this.containerRect.width - this.container.getBoundingClientRect().width) > .1 || Math.abs(this.containerRect.height - this.container.getBoundingClientRect().height) > .1;
                this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver((()=>{
                    this.updateTimer || (t() ? (this.onResize(),
                    this.isMobile && (this.updateTimer = setTimeout((()=>{
                        t() && this.onResize(),
                        this.updateTimer = null
                    }
                    ), 500))) : this.updateTimer && (clearTimeout(this.updateTimer),
                    this.updateTimer = null))
                }
                ))),
                null === (e = this.resizeObserver) || void 0 === e || e.observe(this.container)
            }
            detachObserver() {
                var e;
                null === (e = this.resizeObserver) || void 0 === e || e.disconnect()
            }
            attachEvents() {
                const {container: e} = this;
                e.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }),
                e.addEventListener("wheel", this.onWheel, {
                    passive: !1
                }),
                this.pointerTracker = new h(e,{
                    start: this.onPointerDown,
                    move: this.onPointerMove,
                    end: this.onPointerUp
                }),
                document.addEventListener("mousemove", this.onMouseMove)
            }
            detachEvents() {
                var e;
                const {container: t} = this;
                t.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }),
                t.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }),
                null === (e = this.pointerTracker) || void 0 === e || e.stop(),
                this.pointerTracker = null,
                document.removeEventListener("mousemove", this.onMouseMove),
                document.removeEventListener("keydown", this.onKeydown, !0),
                this.clickTimer && (clearTimeout(this.clickTimer),
                this.clickTimer = null),
                this.updateTimer && (clearTimeout(this.updateTimer),
                this.updateTimer = null)
            }
            animate() {
                const e = this.friction;
                this.setTargetForce();
                const t = this.option("maxVelocity");
                for (const i of S)
                    e ? (this.velocity[i] *= 1 - e,
                    t && !this.isScaling && (this.velocity[i] = Math.max(Math.min(this.velocity[i], t), -1 * t)),
                    this.current[i] += this.velocity[i]) : this.current[i] = this.target[i];
                this.setTransform(),
                this.setEdgeForce(),
                !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame((()=>this.animate())) : this.stop("current")
            }
            setTargetForce() {
                for (const e of S)
                    "e" === e && this.isBouncingX || "f" === e && this.isBouncingY || (this.velocity[e] = (1 / (1 - this.friction) - 1) * (this.target[e] - this.current[e]))
            }
            checkBounds(e=0, t=0) {
                const {current: i} = this
                  , o = i.e + e
                  , n = i.f + t
                  , s = this.getBounds()
                  , {x: a, y: r} = s
                  , c = a.min
                  , l = a.max
                  , d = r.min
                  , u = r.max;
                let h = 0
                  , p = 0;
                return c !== 1 / 0 && o < c ? h = c - o : l !== 1 / 0 && o > l && (h = l - o),
                d !== 1 / 0 && n < d ? p = d - n : u !== 1 / 0 && n > u && (p = u - n),
                Math.abs(h) < .001 && (h = 0),
                Math.abs(p) < .001 && (p = 0),
                Object.assign(Object.assign({}, s), {
                    xDiff: h,
                    yDiff: p,
                    inBounds: !h && !p
                })
            }
            clampTargetBounds() {
                const {target: e} = this
                  , {x: t, y: i} = this.getBounds();
                t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)),
                t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)),
                i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)),
                i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max))
            }
            calculateContentDim(e=this.current) {
                const {content: t, contentRect: i} = this
                  , {fitWidth: o, fitHeight: n, fullWidth: s, fullHeight: a} = i;
                let r = s
                  , c = a;
                if (this.option("zoom") || 0 !== this.angle) {
                    const i = !(t instanceof HTMLImageElement || "none" !== window.getComputedStyle(t).maxWidth && "none" !== window.getComputedStyle(t).maxHeight)
                      , l = i ? s : o
                      , d = i ? a : n
                      , u = this.getMatrix(e)
                      , h = new DOMPoint(0,0).matrixTransform(u)
                      , p = new DOMPoint(0 + l,0).matrixTransform(u)
                      , m = new DOMPoint(0 + l,0 + d).matrixTransform(u)
                      , g = new DOMPoint(0,0 + d).matrixTransform(u)
                      , f = Math.abs(m.x - h.x)
                      , b = Math.abs(m.y - h.y)
                      , v = Math.abs(g.x - p.x)
                      , w = Math.abs(g.y - p.y);
                    r = Math.max(f, v),
                    c = Math.max(b, w)
                }
                return {
                    contentWidth: r,
                    contentHeight: c
                }
            }
            setEdgeForce() {
                if (this.ignoreBounds || this.isDragging || "mousemove" === this.panMode || this.targetScale < this.scale)
                    return this.isBouncingX = !1,
                    void (this.isBouncingY = !1);
                const {target: e} = this
                  , {x: t, y: i, xDiff: o, yDiff: n} = this.checkBounds()
                  , s = this.option("maxVelocity");
                let a = this.velocity.e
                  , r = this.velocity.f;
                0 !== o ? (this.isBouncingX = !0,
                o * a <= 0 ? a += .14 * o : (a = .14 * o,
                t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)),
                t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))),
                s && (a = Math.max(Math.min(a, s), -1 * s))) : this.isBouncingX = !1,
                0 !== n ? (this.isBouncingY = !0,
                n * r <= 0 ? r += .14 * n : (r = .14 * n,
                i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)),
                i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))),
                s && (r = Math.max(Math.min(r, s), -1 * s))) : this.isBouncingY = !1,
                this.isBouncingX && (this.velocity.e = a),
                this.isBouncingY && (this.velocity.f = r)
            }
            enable() {
                const {content: e} = this
                  , t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
                for (const e of S)
                    this.current[e] = this.target[e] = t[e];
                this.updateMetrics(),
                this.attachObserver(),
                this.attachEvents(),
                this.state = y.Ready,
                this.emit("ready")
            }
            onClick(e) {
                var t;
                this.isDragging && (null === (t = this.pointerTracker) || void 0 === t || t.clear(),
                this.trackingPoints = [],
                this.startDecelAnim());
                const i = e.target;
                if (!i || e.defaultPrevented)
                    return;
                if (i && i.hasAttribute("disabled"))
                    return e.preventDefault(),
                    void e.stopPropagation();
                if ((()=>{
                    const e = window.getSelection();
                    return e && "Range" === e.type
                }
                )() && !i.closest("button"))
                    return;
                const o = i.closest("[data-panzoom-action]")
                  , n = i.closest("[data-panzoom-change]")
                  , s = o || n
                  , a = s && k(s) ? s.dataset : null;
                if (a) {
                    const t = a.panzoomChange
                      , i = a.panzoomAction;
                    if ((t || i) && e.preventDefault(),
                    t) {
                        let i = {};
                        try {
                            i = JSON.parse(t)
                        } catch (e) {
                            console && console.warn("The given data was not valid JSON")
                        }
                        return void this.applyChange(i)
                    }
                    if (i)
                        return void (this[i] && this[i]())
                }
                if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
                    return e.preventDefault(),
                    void e.stopPropagation();
                const r = this.content.getBoundingClientRect();
                if (this.dragStart.time && !this.canZoomOut() && (Math.abs(r.x - this.dragStart.x) > 2 || Math.abs(r.y - this.dragStart.y) > 2))
                    return;
                this.dragStart.time = 0;
                const c = t=>{
                    this.option("zoom") && t && "string" == typeof t && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(t) && "function" == typeof this[t] && (e.preventDefault(),
                    this[t]({
                        event: e
                    }))
                }
                  , l = this.option("click", e)
                  , d = this.option("dblClick", e);
                d ? (this.clicks++,
                1 == this.clicks && (this.clickTimer = setTimeout((()=>{
                    1 === this.clicks ? (this.emit("click", e),
                    !e.defaultPrevented && l && c(l)) : (this.emit("dblClick", e),
                    e.defaultPrevented || c(d)),
                    this.clicks = 0,
                    this.clickTimer = null
                }
                ), 350))) : (this.emit("click", e),
                !e.defaultPrevented && l && c(l))
            }
            addTrackingPoint(e) {
                const t = this.trackingPoints.filter((e=>e.time > Date.now() - 100));
                t.push(e),
                this.trackingPoints = t
            }
            onPointerDown(e, t, i) {
                var o;
                this.pwt = 0,
                this.dragOffset = {
                    x: 0,
                    y: 0,
                    time: 0
                },
                this.trackingPoints = [];
                const n = this.content.getBoundingClientRect();
                if (this.dragStart = {
                    x: n.x,
                    y: n.y,
                    top: n.top,
                    left: n.left,
                    time: Date.now()
                },
                this.clickTimer)
                    return !1;
                if ("mousemove" === this.panMode && this.targetScale > 1)
                    return e.preventDefault(),
                    e.stopPropagation(),
                    !1;
                if (!i.length) {
                    const t = e.composedPath()[0];
                    if (["A", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t.nodeName) || t.closest("[contenteditable]") || t.closest("[data-selectable]") || t.closest("[data-panzoom-change]") || t.closest("[data-panzoom-action]"))
                        return !1;
                    null === (o = window.getSelection()) || void 0 === o || o.removeAllRanges()
                }
                if ("mousedown" === e.type)
                    e.preventDefault();
                else if (Math.abs(this.velocity.a) > .3)
                    return !1;
                return this.target.e = this.current.e,
                this.target.f = this.current.f,
                this.stop(),
                this.isDragging || (this.isDragging = !0,
                this.addTrackingPoint(t),
                this.emit("touchStart", e)),
                !0
            }
            onPointerMove(e, t, i) {
                if (!1 === this.option("touch", e))
                    return;
                if (!this.isDragging)
                    return;
                if (t.length < 2 && this.panOnlyZoomed && n(this.targetScale) <= n(this.minScale))
                    return;
                if (this.emit("touchMove", e),
                e.defaultPrevented)
                    return;
                this.addTrackingPoint(t[0]);
                const {content: o} = this
                  , s = m(i[0], i[1])
                  , r = m(t[0], t[1]);
                let c = 0
                  , l = 0;
                if (t.length > 1) {
                    const e = o.getBoundingClientRect();
                    c = s.clientX - e.left - .5 * e.width,
                    l = s.clientY - e.top - .5 * e.height
                }
                const d = p(i[0], i[1])
                  , u = p(t[0], t[1]);
                let h = d ? u / d : 1
                  , g = r.clientX - s.clientX
                  , f = r.clientY - s.clientY;
                this.dragOffset.x += g,
                this.dragOffset.y += f,
                this.dragOffset.time = Date.now() - this.dragStart.time;
                let b = n(this.targetScale) === n(this.minScale) && this.option("lockAxis");
                if (b && !this.lockedAxis)
                    if ("xy" === b || "y" === b || "touchmove" === e.type) {
                        if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
                            return void e.preventDefault();
                        const t = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                        this.lockedAxis = t > 45 && t < 135 ? "y" : "x",
                        this.dragOffset.x = 0,
                        this.dragOffset.y = 0,
                        g = 0,
                        f = 0
                    } else
                        this.lockedAxis = b;
                if (a(e.target, this.content) && (b = "x",
                this.dragOffset.y = 0),
                b && "xy" !== b && this.lockedAxis !== b && n(this.targetScale) === n(this.minScale))
                    return;
                e.cancelable && e.preventDefault(),
                this.container.classList.add(this.cn("isDragging"));
                const v = this.checkBounds(g, f);
                this.option("rubberband") ? ("x" !== this.isInfinite && (v.xDiff > 0 && g < 0 || v.xDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * v.xDiff))),
                "y" !== this.isInfinite && (v.yDiff > 0 && f < 0 || v.yDiff < 0 && f > 0) && (f *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * v.yDiff)))) : (v.xDiff && (g = 0),
                v.yDiff && (f = 0));
                const w = this.targetScale
                  , y = this.minScale
                  , S = this.maxScale;
                w < .5 * y && (h = Math.max(h, y)),
                w > 1.5 * S && (h = Math.min(h, S)),
                "y" === this.lockedAxis && n(w) === n(y) && (g = 0),
                "x" === this.lockedAxis && n(w) === n(y) && (f = 0),
                this.applyChange({
                    originX: c,
                    originY: l,
                    panX: g,
                    panY: f,
                    scale: h,
                    friction: this.option("dragFriction"),
                    ignoreBounds: !0
                })
            }
            onPointerUp(e, t, i) {
                if (i.length)
                    return this.dragOffset.x = 0,
                    this.dragOffset.y = 0,
                    void (this.trackingPoints = []);
                this.container.classList.remove(this.cn("isDragging")),
                this.isDragging && (this.addTrackingPoint(t),
                this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []),
                a(e.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []),
                this.emit("touchEnd", e),
                this.isDragging = !1,
                this.lockedAxis = !1,
                this.state !== y.Destroy && (e.defaultPrevented || this.startDecelAnim()))
            }
            startDecelAnim() {
                var e;
                const t = this.isScaling;
                this.rAF && (cancelAnimationFrame(this.rAF),
                this.rAF = null),
                this.isBouncingX = !1,
                this.isBouncingY = !1;
                for (const e of S)
                    this.velocity[e] = 0;
                this.target.e = this.current.e,
                this.target.f = this.current.f,
                A(this.container, "is-scaling"),
                A(this.container, "is-animating"),
                this.isTicking = !1;
                const {trackingPoints: i} = this
                  , o = i[0]
                  , s = i[i.length - 1];
                let a = 0
                  , r = 0
                  , c = 0;
                s && o && (a = s.clientX - o.clientX,
                r = s.clientY - o.clientY,
                c = s.time - o.time);
                const l = (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1;
                1 !== l && (a *= l,
                r *= l);
                let d = 0
                  , u = 0
                  , h = 0
                  , p = 0
                  , m = this.option("decelFriction");
                const g = this.targetScale;
                if (c > 0) {
                    h = Math.abs(a) > 3 ? a / (c / 30) : 0,
                    p = Math.abs(r) > 3 ? r / (c / 30) : 0;
                    const e = this.option("maxVelocity");
                    e && (h = Math.max(Math.min(h, e), -1 * e),
                    p = Math.max(Math.min(p, e), -1 * e))
                }
                h && (d = h / (1 / (1 - m) - 1)),
                p && (u = p / (1 / (1 - m) - 1)),
                ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && n(g) === this.minScale) && (d = h = 0),
                ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && n(g) === this.minScale) && (u = p = 0);
                const f = this.dragOffset.x
                  , b = this.dragOffset.y
                  , v = this.option("dragMinThreshold") || 0;
                Math.abs(f) < v && Math.abs(b) < v && (d = u = 0,
                h = p = 0),
                (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5 || t && !d && !u) && (m = .35),
                this.applyChange({
                    panX: d,
                    panY: u,
                    friction: m
                }),
                this.emit("decel", h, p, f, b)
            }
            onWheel(e) {
                var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce((function(e, t) {
                    return Math.abs(t) > Math.abs(e) ? t : e
                }
                ));
                const i = Math.max(-1, Math.min(1, t));
                if (this.emit("wheel", e, i),
                "mousemove" === this.panMode)
                    return;
                if (e.defaultPrevented)
                    return;
                const o = this.option("wheel");
                "pan" === o ? (e.preventDefault(),
                this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
                    panX: 2 * -e.deltaX,
                    panY: 2 * -e.deltaY,
                    bounce: !1
                })) : "zoom" === o && !1 !== this.option("zoom") && this.zoomWithWheel(e)
            }
            onMouseMove(e) {
                this.panWithMouse(e)
            }
            onKeydown(e) {
                "Escape" === e.key && this.toggleFS()
            }
            onResize() {
                this.updateMetrics(),
                this.checkBounds().inBounds || this.requestTick()
            }
            setTransform() {
                this.emit("beforeTransform");
                const {current: e, target: t, content: i, contentRect: o} = this
                  , s = Object.assign({}, C);
                for (const i of S) {
                    const o = "e" == i || "f" === i ? 1e3 : 1e5;
                    s[i] = n(e[i], o),
                    Math.abs(t[i] - e[i]) < ("e" == i || "f" === i ? .51 : .001) && (e[i] = t[i])
                }
                let {a: a, b: r, c: c, d: l, e: d, f: u} = s
                  , h = `matrix(${a}, ${r}, ${c}, ${l}, ${d}, ${u})`
                  , p = i.parentElement instanceof HTMLPictureElement ? i.parentElement : i;
                if (this.option("transformParent") && (p = p.parentElement || p),
                p.style.transform === h)
                    return;
                p.style.transform = h;
                const {contentWidth: m, contentHeight: g} = this.calculateContentDim();
                o.width = m,
                o.height = g,
                this.emit("afterTransform")
            }
            updateMetrics(e=!1) {
                var t;
                if (!this || this.state === y.Destroy)
                    return;
                if (this.isContentLoading)
                    return;
                const i = Math.max(1, (null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1)
                  , {container: o, content: s} = this
                  , a = s instanceof HTMLImageElement
                  , r = o.getBoundingClientRect()
                  , c = getComputedStyle(this.container);
                let l = r.width * i
                  , d = r.height * i;
                const u = parseFloat(c.paddingTop) + parseFloat(c.paddingBottom)
                  , h = l - (parseFloat(c.paddingLeft) + parseFloat(c.paddingRight))
                  , p = d - u;
                this.containerRect = {
                    width: l,
                    height: d,
                    innerWidth: h,
                    innerHeight: p
                };
                let m = this.option("width") || "auto"
                  , g = this.option("height") || "auto";
                "auto" === m && (m = parseFloat(s.dataset.width || "") || (e=>{
                    let t = 0;
                    return t = e instanceof HTMLImageElement ? e.naturalWidth : e instanceof SVGElement ? e.width.baseVal.value : Math.max(e.offsetWidth, e.scrollWidth),
                    t || 0
                }
                )(s)),
                "auto" === g && (g = parseFloat(s.dataset.height || "") || (e=>{
                    let t = 0;
                    return t = e instanceof HTMLImageElement ? e.naturalHeight : e instanceof SVGElement ? e.height.baseVal.value : Math.max(e.offsetHeight, e.scrollHeight),
                    t || 0
                }
                )(s));
                let f = s.parentElement instanceof HTMLPictureElement ? s.parentElement : s;
                this.option("transformParent") && (f = f.parentElement || f);
                const b = f.getAttribute("style") || "";
                f.style.setProperty("transform", "none", "important"),
                a && (f.style.width = "",
                f.style.height = ""),
                f.offsetHeight;
                const v = s.getBoundingClientRect();
                let w = v.width * i
                  , S = v.height * i
                  , x = 0
                  , _ = 0;
                a && (Math.abs(m - w) > 1 || Math.abs(g - S) > 1) && ({width: w, height: S, top: x, left: _} = ((e,t,i,o)=>{
                    const n = i / o;
                    return n > e / t ? (i = e,
                    o = e / n) : (i = t * n,
                    o = t),
                    {
                        width: i,
                        height: o,
                        top: .5 * (t - o),
                        left: .5 * (e - i)
                    }
                }
                )(w, S, m, g)),
                this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
                    top: v.top - r.top + x,
                    bottom: r.bottom - v.bottom + x,
                    left: v.left - r.left + _,
                    right: r.right - v.right + _,
                    fitWidth: w,
                    fitHeight: S,
                    width: w,
                    height: S,
                    fullWidth: m,
                    fullHeight: g
                }),
                f.style.cssText = b,
                a && (f.style.width = `${w}px`,
                f.style.height = `${S}px`),
                this.setTransform(),
                !0 !== e && this.emit("refresh"),
                this.ignoreBounds || (n(this.targetScale) < n(this.minScale) ? this.zoomTo(this.minScale, {
                    friction: 0
                }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
                    friction: 0
                }) : this.state === y.Init || this.checkBounds().inBounds || this.requestTick()),
                this.updateControls()
            }
            getBounds() {
                const e = this.option("bounds");
                if ("auto" !== e)
                    return e;
                const {contentWidth: t, contentHeight: i} = this.calculateContentDim(this.target);
                let o = 0
                  , s = 0
                  , a = 0
                  , r = 0;
                const c = this.option("infinite");
                if (!0 === c || this.lockedAxis && c === this.lockedAxis)
                    o = -1 / 0,
                    a = 1 / 0,
                    s = -1 / 0,
                    r = 1 / 0;
                else {
                    let {containerRect: e, contentRect: c} = this
                      , l = n(this.contentRect.fitWidth * this.targetScale, 1e3)
                      , d = n(this.contentRect.fitHeight * this.targetScale, 1e3)
                      , {innerWidth: u, innerHeight: h} = e;
                    if (this.containerRect.width === l && (u = e.width),
                    this.containerRect.width === d && (h = e.height),
                    t > u) {
                        a = .5 * (t - u),
                        o = -1 * a;
                        let e = .5 * (c.right - c.left);
                        o += e,
                        a += e
                    }
                    if (this.contentRect.fitWidth > u && t < u && (o -= .5 * (this.contentRect.fitWidth - u),
                    a -= .5 * (this.contentRect.fitWidth - u)),
                    i > h) {
                        r = .5 * (i - h),
                        s = -1 * r;
                        let e = .5 * (c.bottom - c.top);
                        s += e,
                        r += e
                    }
                    this.contentRect.fitHeight > h && i < h && (o -= .5 * (this.contentRect.fitHeight - h),
                    a -= .5 * (this.contentRect.fitHeight - h))
                }
                return {
                    x: {
                        min: o,
                        max: a
                    },
                    y: {
                        min: s,
                        max: r
                    }
                }
            }
            updateControls() {
                const e = this
                  , t = e.container
                  , {panMode: i, contentRect: o, fullScale: s, targetScale: a, coverScale: r, maxScale: c, minScale: d} = e;
                let u = {
                    toggleMax: a - d < .5 * (c - d) ? c : d,
                    toggleCover: a - d < .5 * (r - d) ? r : d,
                    toggleZoom: a - d < .5 * (s - d) ? s : d
                }[e.option("click") || ""] || d
                  , h = e.canZoomIn()
                  , p = e.canZoomOut()
                  , m = p && "drag" === i;
                n(a) < n(d) && !this.panOnlyZoomed && (m = !0),
                (n(o.width, 1) > n(o.fitWidth, 1) || n(o.height, 1) > n(o.fitHeight, 1)) && (m = !0),
                n(o.width * a, 1) < n(o.fitWidth, 1) && (m = !1),
                "mousemove" === i && (m = !1);
                let g = h && n(u) > n(a)
                  , f = !g && !m && p && n(u) < n(a);
                l(t, this.cn("canZoomIn"), g),
                l(t, this.cn("canZoomOut"), f),
                l(t, this.cn("isDraggable"), m);
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]'))
                    h ? (e.removeAttribute("disabled"),
                    e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""),
                    e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]'))
                    p ? (e.removeAttribute("disabled"),
                    e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""),
                    e.setAttribute("tabindex", "-1"));
                for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    h || p ? (e.removeAttribute("disabled"),
                    e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""),
                    e.setAttribute("tabindex", "-1"));
                    const t = e.querySelector("g");
                    t && (t.style.display = h ? "" : "none")
                }
            }
            panTo({x: e=this.target.e, y: t=this.target.f, scale: i=this.targetScale, friction: o=this.option("friction"), angle: n=0, originX: s=0, originY: a=0, flipX: r=!1, flipY: c=!1, ignoreBounds: l=!1}) {
                this.state !== y.Destroy && this.applyChange({
                    panX: e - this.target.e,
                    panY: t - this.target.f,
                    scale: i / this.targetScale,
                    angle: n,
                    originX: s,
                    originY: a,
                    friction: o,
                    flipX: r,
                    flipY: c,
                    ignoreBounds: l
                })
            }
            applyChange({panX: e=0, panY: t=0, scale: i=1, angle: o=0, originX: s=-this.current.e, originY: a=-this.current.f, friction: r=this.option("friction"), flipX: c=!1, flipY: l=!1, ignoreBounds: d=!1, bounce: u=this.option("bounce")}) {
                if (this.state === y.Destroy)
                    return;
                this.rAF && (cancelAnimationFrame(this.rAF),
                this.rAF = null),
                this.friction = r || 0,
                this.ignoreBounds = d;
                const {current: h} = this
                  , p = h.e
                  , m = h.f
                  , g = this.getMatrix(this.target);
                let f = (new DOMMatrix).translate(p, m).translate(s, a).translate(e, t);
                if (this.option("zoom")) {
                    if (!d) {
                        const e = this.targetScale
                          , t = this.minScale
                          , o = this.maxScale;
                        e * i < t && (i = t / e),
                        e * i > o && (i = o / e)
                    }
                    f = f.scale(i)
                }
                f = f.translate(-s, -a).translate(-p, -m).multiply(g),
                o && (f = f.rotate(o)),
                c && (f = f.scale(-1, 1)),
                l && (f = f.scale(1, -1));
                for (const e of S)
                    "e" !== e && "f" !== e && (f[e] > this.minScale + 1e-5 || f[e] < this.minScale - 1e-5) ? this.target[e] = f[e] : this.target[e] = n(f[e], 1e3);
                (this.targetScale < this.scale || Math.abs(i - 1) > .1 || "mousemove" === this.panMode || !1 === u) && !d && this.clampTargetBounds(),
                this.isResting || (this.state = y.Panning,
                this.requestTick())
            }
            stop(e=!1) {
                if (this.state === y.Init || this.state === y.Destroy)
                    return;
                const t = this.isTicking;
                this.rAF && (cancelAnimationFrame(this.rAF),
                this.rAF = null),
                this.isBouncingX = !1,
                this.isBouncingY = !1;
                for (const t of S)
                    this.velocity[t] = 0,
                    "current" === e ? this.current[t] = this.target[t] : "target" === e && (this.target[t] = this.current[t]);
                this.setTransform(),
                A(this.container, "is-scaling"),
                A(this.container, "is-animating"),
                this.isTicking = !1,
                this.state = y.Ready,
                t && (this.emit("endAnimation"),
                this.updateControls())
            }
            requestTick() {
                this.isTicking || (this.emit("startAnimation"),
                this.updateControls(),
                T(this.container, "is-animating"),
                this.isScaling && T(this.container, "is-scaling")),
                this.isTicking = !0,
                this.rAF || (this.rAF = requestAnimationFrame((()=>this.animate())))
            }
            panWithMouse(e, t=this.option("mouseMoveFriction")) {
                if (this.pmme = e,
                "mousemove" !== this.panMode || !e)
                    return;
                if (n(this.targetScale) <= n(this.minScale))
                    return;
                this.emit("mouseMove", e);
                const {container: i, containerRect: o, contentRect: s} = this
                  , a = o.width
                  , r = o.height
                  , c = i.getBoundingClientRect()
                  , l = (e.clientX || 0) - c.left
                  , d = (e.clientY || 0) - c.top;
                let {contentWidth: u, contentHeight: h} = this.calculateContentDim(this.target);
                const p = this.option("mouseMoveFactor");
                p > 1 && (u !== a && (u *= p),
                h !== r && (h *= p));
                let m = .5 * (u - a) - l / a * 100 / 100 * (u - a);
                m += .5 * (s.right - s.left);
                let g = .5 * (h - r) - d / r * 100 / 100 * (h - r);
                g += .5 * (s.bottom - s.top),
                this.applyChange({
                    panX: m - this.target.e,
                    panY: g - this.target.f,
                    friction: t
                })
            }
            zoomWithWheel(e) {
                if (this.state === y.Destroy || this.state === y.Init)
                    return;
                const t = Date.now();
                if (t - this.pwt < 45)
                    return void e.preventDefault();
                this.pwt = t;
                var i = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce((function(e, t) {
                    return Math.abs(t) > Math.abs(e) ? t : e
                }
                ));
                const o = Math.max(-1, Math.min(1, i))
                  , {targetScale: s, maxScale: a, minScale: r} = this;
                let c = s * (100 + 45 * o) / 100;
                n(c) < n(r) && n(s) <= n(r) ? (this.cwd += Math.abs(o),
                c = r) : n(c) > n(a) && n(s) >= n(a) ? (this.cwd += Math.abs(o),
                c = a) : (this.cwd = 0,
                c = Math.max(Math.min(c, a), r)),
                this.cwd > this.option("wheelLimit") || (e.preventDefault(),
                n(c) !== n(s) && this.zoomTo(c, {
                    event: e
                }))
            }
            canZoomIn() {
                return this.option("zoom") && (n(this.contentRect.width, 1) < n(this.contentRect.fitWidth, 1) || n(this.targetScale) < n(this.maxScale))
            }
            canZoomOut() {
                return this.option("zoom") && n(this.targetScale) > n(this.minScale)
            }
            zoomIn(e=1.25, t) {
                this.zoomTo(this.targetScale * e, t)
            }
            zoomOut(e=.8, t) {
                this.zoomTo(this.targetScale * e, t)
            }
            zoomToFit(e) {
                this.zoomTo("fit", e)
            }
            zoomToCover(e) {
                this.zoomTo("cover", e)
            }
            zoomToFull(e) {
                this.zoomTo("full", e)
            }
            zoomToMax(e) {
                this.zoomTo("max", e)
            }
            toggleZoom(e) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.fullScale - this.minScale) ? "full" : "fit", e)
            }
            toggleMax(e) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.maxScale - this.minScale) ? "max" : "fit", e)
            }
            toggleCover(e) {
                this.zoomTo(this.targetScale - this.minScale < .5 * (this.coverScale - this.minScale) ? "cover" : "fit", e)
            }
            iterateZoom(e) {
                this.zoomTo("next", e)
            }
            zoomTo(e=1, {friction: t="auto", originX: i=0, originY: o=0, event: n}={}) {
                if (this.isContentLoading || this.state === y.Destroy)
                    return;
                const {targetScale: s} = this;
                this.stop();
                let a = 1;
                if ("mousemove" === this.panMode && (n = this.pmme || n),
                n) {
                    const e = this.content.getBoundingClientRect()
                      , t = n.clientX || 0
                      , s = n.clientY || 0;
                    i = t - e.left - .5 * e.width,
                    o = s - e.top - .5 * e.height
                }
                const r = this.fullScale
                  , c = this.maxScale;
                let l = this.coverScale;
                "number" == typeof e ? a = e / s : ("next" === e && (r - l < .2 && (l = r),
                e = s < r - 1e-5 ? "full" : s < c - 1e-5 ? "max" : "fit"),
                a = "full" === e ? r / s || 1 : "cover" === e ? l / s || 1 : "max" === e ? c / s || 1 : 1 / s || 1),
                t = "auto" === t ? a > 1 ? .15 : .25 : t,
                this.applyChange({
                    scale: a,
                    originX: i,
                    originY: o,
                    friction: t
                }),
                n && "mousemove" === this.panMode && this.panWithMouse(n, t)
            }
            rotateCCW() {
                this.applyChange({
                    angle: -90
                })
            }
            rotateCW() {
                this.applyChange({
                    angle: 90
                })
            }
            flipX() {
                this.applyChange({
                    flipX: !0
                })
            }
            flipY() {
                this.applyChange({
                    flipY: !0
                })
            }
            fitX() {
                this.stop("target");
                const {containerRect: e, contentRect: t, target: i} = this;
                this.applyChange({
                    panX: .5 * e.width - (t.left + .5 * t.fitWidth) - i.e,
                    panY: .5 * e.height - (t.top + .5 * t.fitHeight) - i.f,
                    scale: e.width / t.fitWidth / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                })
            }
            fitY() {
                this.stop("target");
                const {containerRect: e, contentRect: t, target: i} = this;
                this.applyChange({
                    panX: .5 * e.width - (t.left + .5 * t.fitWidth) - i.e,
                    panY: .5 * e.innerHeight - (t.top + .5 * t.fitHeight) - i.f,
                    scale: e.height / t.fitHeight / this.targetScale,
                    originX: 0,
                    originY: 0,
                    ignoreBounds: !0
                })
            }
            toggleFS() {
                const {container: e} = this
                  , t = this.cn("inFullscreen")
                  , i = this.cn("htmlHasFullscreen");
                e.classList.toggle(t);
                const o = e.classList.contains(t);
                o ? (document.documentElement.classList.add(i),
                document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i),
                document.removeEventListener("keydown", this.onKeydown, !0)),
                this.updateMetrics(),
                this.emit(o ? "enterFS" : "exitFS")
            }
            getMatrix(e=this.current) {
                const {a: t, b: i, c: o, d: n, e: s, f: a} = e;
                return new DOMMatrix([t, i, o, n, s, a])
            }
            reset(e) {
                if (this.state !== y.Init && this.state !== y.Destroy) {
                    this.stop("current");
                    for (const e of S)
                        this.target[e] = C[e];
                    this.target.a = this.minScale,
                    this.target.d = this.minScale,
                    this.clampTargetBounds(),
                    this.isResting || (this.friction = void 0 === e ? this.option("friction") : e,
                    this.state = y.Panning,
                    this.requestTick())
                }
            }
            destroy() {
                this.stop(),
                this.state = y.Destroy,
                this.detachEvents(),
                this.detachObserver();
                const {container: e, content: t} = this
                  , i = this.option("classes") || {};
                for (const t of Object.values(i))
                    e.classList.remove(t + "");
                t && (t.removeEventListener("load", this.onLoad),
                t.removeEventListener("error", this.onError)),
                this.detachPlugins()
            }
        }
        Object.defineProperty(M, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: _
        }),
        Object.defineProperty(M, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        });
        const I = function(e, t) {
            let i = !0;
            return (...o)=>{
                i && (i = !1,
                e(...o),
                setTimeout((()=>{
                    i = !0
                }
                ), t))
            }
        }
          , L = (e,t)=>{
            let i = [];
            return e.childNodes.forEach((e=>{
                e.nodeType !== Node.ELEMENT_NODE || t && !e.matches(t) || i.push(e)
            }
            )),
            i
        }
        ;
        var j;
        !function(e) {
            e[e.Init = 0] = "Init",
            e[e.Ready = 1] = "Ready",
            e[e.Destroy = 2] = "Destroy"
        }(j || (j = {}));
        const R = e=>{
            if ("string" == typeof e && (e = {
                html: e
            }),
            !(e instanceof String || e instanceof HTMLElement)) {
                const t = e.thumb;
                void 0 !== t && ("string" == typeof t && (e.thumbSrc = t),
                t instanceof HTMLImageElement && (e.thumbEl = t,
                e.thumbElSrc = t.src,
                e.thumbSrc = t.src),
                delete e.thumb)
            }
            return Object.assign({
                html: "",
                el: null,
                isDom: !1,
                class: "",
                index: -1,
                dim: 0,
                gap: 0,
                pos: 0,
                transition: !1
            }, e)
        }
          , N = (e={})=>Object.assign({
            index: -1,
            slides: [],
            dim: 0,
            pos: -1
        }, e);
        class z extends v {
            constructor(e, t) {
                super(t),
                Object.defineProperty(this, "instance", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: e
                })
            }
            attach() {}
            detach() {}
        }
        class D extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "isDynamic", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "list", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onRefresh() {
                this.refresh()
            }
            build() {
                let e = this.list;
                return e || (e = document.createElement("ul"),
                T(e, this.cn("list")),
                e.setAttribute("role", "tablist"),
                this.instance.container.appendChild(e),
                T(this.instance.container, this.cn("hasDots")),
                this.list = e),
                e
            }
            refresh() {
                var e;
                const t = this.instance.pages.length
                  , i = Math.min(2, this.option("minCount"))
                  , o = Math.max(2e3, this.option("maxCount"))
                  , n = this.option("dynamicFrom");
                if (t < i || t > o)
                    return void this.cleanup();
                const s = "number" == typeof n && t > 5 && t >= n
                  , a = !this.list || this.isDynamic !== s || this.list.children.length !== t;
                a && this.cleanup();
                const r = this.build();
                if (l(r, this.cn("isDynamic"), !!s),
                a)
                    for (let e = 0; e < t; e++)
                        r.append(this.createItem(e));
                let c, d = 0;
                for (const t of [...r.children]) {
                    const i = d === this.instance.page;
                    i && (c = t),
                    l(t, this.cn("isCurrent"), i),
                    null === (e = t.children[0]) || void 0 === e || e.setAttribute("aria-selected", i ? "true" : "false");
                    for (const e of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
                        A(t, this.cn(e));
                    d++
                }
                if (c = c || r.firstChild,
                s && c) {
                    const e = c.previousElementSibling
                      , t = e && e.previousElementSibling;
                    T(e, this.cn("isPrev")),
                    T(t, this.cn("isBeforePrev"));
                    const i = c.nextElementSibling
                      , o = i && i.nextElementSibling;
                    T(i, this.cn("isNext")),
                    T(o, this.cn("isAfterNext"))
                }
                this.isDynamic = s
            }
            createItem(e=0) {
                var t;
                const i = document.createElement("li");
                i.setAttribute("role", "presentation");
                const o = r(this.instance.localize(this.option("dotTpl"), [["%d", e + 1]]).replace(/\%i/g, e + ""));
                return i.appendChild(o),
                null === (t = i.children[0]) || void 0 === t || t.setAttribute("role", "tab"),
                i
            }
            cleanup() {
                this.list && (this.list.remove(),
                this.list = null),
                this.isDynamic = !1,
                A(this.instance.container, this.cn("hasDots"))
            }
            attach() {
                this.instance.on(["refresh", "change"], this.onRefresh)
            }
            detach() {
                this.instance.off(["refresh", "change"], this.onRefresh),
                this.cleanup()
            }
        }
        Object.defineProperty(D, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                classes: {
                    list: "f-carousel__dots",
                    isDynamic: "is-dynamic",
                    hasDots: "has-dots",
                    dot: "f-carousel__dot",
                    isBeforePrev: "is-before-prev",
                    isPrev: "is-prev",
                    isCurrent: "is-current",
                    isNext: "is-next",
                    isAfterNext: "is-after-next"
                },
                dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
                dynamicFrom: 11,
                maxCount: 1 / 0,
                minCount: 2
            }
        });
        class G extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "prev", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "next", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onRefresh() {
                const e = this.instance
                  , t = e.pages.length
                  , i = e.page;
                if (t < 2)
                    return void this.cleanup();
                this.build();
                let o = this.prev
                  , n = this.next;
                o && n && (o.removeAttribute("disabled"),
                n.removeAttribute("disabled"),
                e.isInfinite || (i <= 0 && o.setAttribute("disabled", ""),
                i >= t - 1 && n.setAttribute("disabled", "")))
            }
            createButton(e) {
                const t = this.instance
                  , i = document.createElement("button");
                i.setAttribute("tabindex", "0"),
                i.setAttribute("title", t.localize(`{{${e.toUpperCase()}}}`)),
                T(i, this.cn("button") + " " + this.cn("next" === e ? "isNext" : "isPrev"));
                const o = t.isRTL ? "next" === e ? "prev" : "next" : e;
                var n;
                return i.innerHTML = t.localize(this.option(`${o}Tpl`)),
                i.dataset[`carousel${n = e,
                n ? n.match("^[a-z]") ? n.charAt(0).toUpperCase() + n.substring(1) : n : ""}`] = "true",
                i
            }
            build() {
                let e = this.container;
                e || (this.container = e = document.createElement("div"),
                T(e, this.cn("container")),
                this.instance.container.appendChild(e)),
                this.next || (this.next = e.appendChild(this.createButton("next"))),
                this.prev || (this.prev = e.appendChild(this.createButton("prev")))
            }
            cleanup() {
                this.prev && this.prev.remove(),
                this.next && this.next.remove(),
                this.container && this.container.remove(),
                this.prev = null,
                this.next = null,
                this.container = null
            }
            attach() {
                this.instance.on(["refresh", "change"], this.onRefresh)
            }
            detach() {
                this.instance.off(["refresh", "change"], this.onRefresh),
                this.cleanup()
            }
        }
        Object.defineProperty(G, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                classes: {
                    container: "f-carousel__nav",
                    button: "f-button",
                    isNext: "is-next",
                    isPrev: "is-prev"
                },
                nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
                prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
            }
        });
        class F extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "selectedIndex", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "target", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "nav", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            addAsTargetFor(e) {
                this.target = this.instance,
                this.nav = e,
                this.attachEvents()
            }
            addAsNavFor(e) {
                this.nav = this.instance,
                this.target = e,
                this.attachEvents()
            }
            attachEvents() {
                this.nav && this.target && (this.nav.options.initialSlide = this.target.options.initialPage,
                this.nav.on("ready", this.onNavReady),
                this.nav.state === j.Ready && this.onNavReady(this.nav),
                this.target.on("ready", this.onTargetReady),
                this.target.state === j.Ready && this.onTargetReady(this.target))
            }
            onNavReady(e) {
                e.on("createSlide", this.onNavCreateSlide),
                e.on("Panzoom.click", this.onNavClick),
                e.on("Panzoom.touchEnd", this.onNavTouch),
                this.onTargetChange()
            }
            onTargetReady(e) {
                e.on("change", this.onTargetChange),
                e.on("Panzoom.refresh", this.onTargetChange),
                this.onTargetChange()
            }
            onNavClick(e, t, i) {
                i.pointerType || this.onNavTouch(e, e.panzoom, i)
            }
            onNavTouch(e, t, i) {
                var o, n;
                if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3)
                    return;
                const s = i.target
                  , {nav: a, target: r} = this;
                if (!a || !r || !s)
                    return;
                const c = s.closest("[data-index]");
                if (i.stopPropagation(),
                i.preventDefault(),
                !c)
                    return;
                const l = parseInt(c.dataset.index || "", 10) || 0
                  , d = r.getPageForSlide(l)
                  , u = a.getPageForSlide(l);
                a.slideTo(u),
                r.slideTo(d, {
                    friction: null === (n = null === (o = this.nav) || void 0 === o ? void 0 : o.plugins) || void 0 === n ? void 0 : n.Sync.option("friction")
                }),
                this.markSelectedSlide(l)
            }
            onNavCreateSlide(e, t) {
                t.index === this.selectedIndex && this.markSelectedSlide(t.index)
            }
            onTargetChange() {
                const {target: e, nav: t} = this;
                if (!e || !t)
                    return;
                if (t.state !== j.Ready || e.state !== j.Ready)
                    return;
                const i = e.pages[e.page].slides[0].index
                  , o = t.getPageForSlide(i);
                this.markSelectedSlide(i),
                t.slideTo(o)
            }
            markSelectedSlide(e) {
                const {nav: t} = this;
                t && t.state === j.Ready && (this.selectedIndex = e,
                [...t.slides].map((t=>{
                    t.el && t.el.classList[t.index === e ? "add" : "remove"]("is-nav-selected")
                }
                )))
            }
            attach() {
                let e = this.options.target
                  , t = this.options.nav;
                e ? this.addAsNavFor(e) : t && this.addAsTargetFor(t)
            }
            detach() {
                const e = this
                  , t = e.nav
                  , i = e.target;
                t && (t.off("ready", e.onNavReady),
                t.off("createSlide", e.onNavCreateSlide),
                t.off("Panzoom.click", e.onNavClick),
                t.off("Panzoom.touchEnd", e.onNavTouch)),
                this.nav = null,
                i && (i.off("ready", e.onTargetReady),
                i.off("refresh", e.onTargetChange),
                i.off("change", e.onTargetChange)),
                this.target = null
            }
        }
        Object.defineProperty(F, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                friction: .35
            }
        });
        const q = {
            Navigation: G,
            Dots: D,
            Sync: F
        };
        class B extends w {
            get axis() {
                return this.isHorizontal ? "e" : "f"
            }
            get isEnabled() {
                return this.state === j.Ready
            }
            get isInfinite() {
                let e = !1;
                const {contentDim: t, viewportDim: i, pages: o, slides: n} = this;
                return o.length >= 2 && t + n[0].dim >= i && (e = this.option("infinite")),
                e
            }
            get isRTL() {
                return "rtl" === this.option("direction")
            }
            get isHorizontal() {
                return "x" === this.option("axis")
            }
            constructor(e, t={}, i={}) {
                if (super(),
                Object.defineProperty(this, "userOptions", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }),
                Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }),
                Object.defineProperty(this, "bp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }),
                Object.defineProperty(this, "lp", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: j.Init
                }),
                Object.defineProperty(this, "page", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "prevPage", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "viewport", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "slides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "pages", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "panzoom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "inTransition", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: new Set
                }),
                Object.defineProperty(this, "contentDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "viewportDim", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                "string" == typeof e && (e = document.querySelector(e)),
                !e || !k(e))
                    throw new Error("No Element found");
                this.container = e,
                this.slideNext = I(this.slideNext.bind(this), 150),
                this.slidePrev = I(this.slidePrev.bind(this), 150),
                this.userOptions = t,
                this.userPlugins = i,
                queueMicrotask((()=>{
                    this.processOptions()
                }
                ))
            }
            processOptions() {
                const e = f({}, B.defaults, this.userOptions);
                let t = "";
                const i = e.breakpoints;
                if (i && g(i))
                    for (const [o,n] of Object.entries(i))
                        window.matchMedia(o).matches && g(n) && (t += o,
                        f(e, n));
                t === this.bp && this.state !== j.Init || (this.bp = t,
                this.state === j.Ready && (e.initialSlide = this.pages[this.page].slides[0].index),
                this.state !== j.Init && this.destroy(),
                super.setOptions(e),
                !1 === this.option("enabled") ? this.attachEvents() : setTimeout((()=>{
                    this.init()
                }
                ), 0))
            }
            init() {
                this.state = j.Init,
                this.emit("init"),
                this.attachPlugins(Object.assign(Object.assign({}, B.Plugins), this.userPlugins)),
                this.initLayout(),
                this.initSlides(),
                this.updateMetrics(),
                this.setInitialPosition(),
                this.initPanzoom(),
                this.attachEvents(),
                this.state = j.Ready,
                this.emit("ready")
            }
            initLayout() {
                const {container: e} = this
                  , t = this.option("classes");
                T(e, this.cn("container")),
                l(e, t.isLTR, !this.isRTL),
                l(e, t.isRTL, this.isRTL),
                l(e, t.isVertical, !this.isHorizontal),
                l(e, t.isHorizontal, this.isHorizontal);
                let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
                i || (i = document.createElement("div"),
                T(i, t.viewport),
                i.append(...L(e, `.${t.slide}`)),
                e.prepend(i));
                let o = this.option("track") || e.querySelector(`.${t.track}`);
                o || (o = document.createElement("div"),
                T(o, t.track),
                o.append(...Array.from(i.childNodes))),
                o.setAttribute("aria-live", "polite"),
                i.contains(o) || i.prepend(o),
                this.viewport = i,
                this.track = o,
                this.emit("initLayout")
            }
            initSlides() {
                const {track: e} = this;
                if (e) {
                    this.slides = [],
                    [...L(e, `.${this.cn("slide")}`)].forEach((e=>{
                        if (k(e)) {
                            const t = R({
                                el: e,
                                isDom: !0,
                                index: this.slides.length
                            });
                            this.slides.push(t),
                            this.emit("initSlide", t, this.slides.length)
                        }
                    }
                    ));
                    for (let e of this.option("slides", [])) {
                        const t = R(e);
                        t.index = this.slides.length,
                        this.slides.push(t),
                        this.emit("initSlide", t, this.slides.length)
                    }
                    this.emit("initSlides")
                }
            }
            setInitialPage() {
                let e = 0;
                const t = this.option("initialSlide");
                e = "number" == typeof t ? this.getPageForSlide(t) : parseInt(this.option("initialPage", 0) + "", 10) || 0,
                this.page = e
            }
            setInitialPosition() {
                if (!this.track || !this.pages.length)
                    return;
                const e = this.isHorizontal;
                let t = this.page;
                this.pages[t] || (this.page = t = 0);
                const i = this.pages[t].pos * (this.isRTL && e ? 1 : -1)
                  , o = e ? `${i}px` : "0"
                  , n = e ? "0" : `${i}px`;
                this.track.style.transform = `translate3d(${o}, ${n}, 0) scale(1)`,
                this.option("adaptiveHeight") && this.setViewportHeight()
            }
            initPanzoom() {
                this.panzoom && (this.panzoom.destroy(),
                this.panzoom = null);
                const e = this.option("Panzoom") || {};
                this.panzoom = new M(this.viewport,f({}, {
                    content: this.track,
                    zoom: !1,
                    panOnlyZoomed: !1,
                    lockAxis: this.isHorizontal ? "x" : "y",
                    infinite: this.isInfinite,
                    click: !1,
                    dblClick: !1,
                    touch: e=>!(this.pages.length < 2 && !e.options.infinite),
                    bounds: ()=>this.getBounds(),
                    maxVelocity: e=>Math.abs(e.target[this.axis] - e.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
                }, e)),
                this.panzoom.on("*", ((e,t,...i)=>{
                    this.emit(`Panzoom.${t}`, e, ...i)
                }
                )),
                this.panzoom.on("decel", this.onDecel),
                this.panzoom.on("refresh", this.onRefresh),
                this.panzoom.on("beforeTransform", this.onBeforeTransform),
                this.panzoom.on("endAnimation", this.onEndAnimation)
            }
            attachEvents() {
                const e = this.container;
                e && (e.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }),
                e.addEventListener("slideTo", this.onSlideTo)),
                window.addEventListener("resize", this.onResize)
            }
            createPages() {
                let e = [];
                const {contentDim: t, viewportDim: i} = this;
                let o = this.option("slidesPerPage");
                ("number" != typeof o || t <= i) && (o = 1 / 0);
                let n = 0
                  , s = 0
                  , a = 0;
                for (const t of this.slides)
                    (!e.length || s + t.dim > i || a === o) && (e.push(N()),
                    n = e.length - 1,
                    s = 0,
                    a = 0),
                    e[n].slides.push(t),
                    s += t.dim + t.gap,
                    a++;
                return e
            }
            processPages() {
                const e = this.pages
                  , {contentDim: t, viewportDim: i} = this
                  , o = this.option("center")
                  , s = this.option("fill")
                  , a = s && o && t > i && !this.isInfinite;
                if (e.forEach(((e,n)=>{
                    e.index = n,
                    e.pos = e.slides[0].pos,
                    e.dim = 0;
                    for (const [t,i] of e.slides.entries())
                        e.dim += i.dim,
                        t < e.slides.length - 1 && (e.dim += i.gap);
                    a && e.pos + .5 * e.dim < .5 * i ? e.pos = 0 : a && e.pos + .5 * e.dim >= t - .5 * i ? e.pos = t - i : o && (e.pos += -.5 * (i - e.dim))
                }
                )),
                e.forEach(((e,o)=>{
                    s && !this.isInfinite && t > i && (e.pos = Math.max(e.pos, 0),
                    e.pos = Math.min(e.pos, t - i)),
                    e.pos = n(e.pos, 1e3),
                    e.dim = n(e.dim, 1e3),
                    e.pos < .1 && e.pos > -.1 && (e.pos = 0)
                }
                )),
                this.isInfinite)
                    return e;
                const r = [];
                let c;
                return e.forEach((e=>{
                    const t = Object.assign({}, e);
                    c && t.pos === c.pos ? (c.dim += t.dim,
                    c.slides = [...c.slides, ...t.slides]) : (t.index = r.length,
                    c = t,
                    r.push(t))
                }
                )),
                r
            }
            getPageFromIndex(e=0) {
                const t = this.pages.length;
                let i;
                return e = parseInt((e || 0).toString()) || 0,
                i = this.isInfinite ? (e % t + t) % t : Math.max(Math.min(e, t - 1), 0),
                i
            }
            getSlideMetrics(e) {
                var t;
                const i = this.isHorizontal ? "width" : "height";
                let o = 0
                  , s = 0
                  , a = e.el;
                if (a ? o = parseFloat(a.dataset[i] || "") || 0 : (a = document.createElement("div"),
                a.style.visibility = "hidden",
                T(a, this.cn("slide") + " " + e.class),
                (this.track || document.body).prepend(a)),
                o)
                    a.style[i] = `${o}px`,
                    a.style["width" === i ? "height" : "width"] = "";
                else {
                    const e = Math.max(1, (null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1);
                    o = a.getBoundingClientRect()[i] * e
                }
                const r = getComputedStyle(a);
                return "content-box" === r.boxSizing && (this.isHorizontal ? (o += parseFloat(r.paddingLeft) || 0,
                o += parseFloat(r.paddingRight) || 0) : (o += parseFloat(r.paddingTop) || 0,
                o += parseFloat(r.paddingBottom) || 0)),
                s = parseFloat(r[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0,
                e.el || a.remove(),
                {
                    dim: n(o, 1e3),
                    gap: n(s, 1e3)
                }
            }
            getBounds() {
                const {isInfinite: e, isRTL: t, isHorizontal: i, pages: o} = this;
                let n = {
                    min: 0,
                    max: 0
                };
                if (e)
                    n = {
                        min: -1 / 0,
                        max: 1 / 0
                    };
                else if (o.length) {
                    const e = o[0].pos
                      , s = o[o.length - 1].pos;
                    n = t && i ? {
                        min: e,
                        max: s
                    } : {
                        min: -1 * s,
                        max: -1 * e
                    }
                }
                return {
                    x: i ? n : {
                        min: 0,
                        max: 0
                    },
                    y: i ? {
                        min: 0,
                        max: 0
                    } : n
                }
            }
            repositionSlides() {
                let e, {isHorizontal: t, isRTL: i, isInfinite: o, viewport: s, viewportDim: a, contentDim: r, page: c, pages: l, slides: d, panzoom: u} = this, h = 0, p = 0, m = 0, g = 0;
                u ? g = -1 * u.current[this.axis] : l[c] && (g = l[c].pos || 0),
                e = t ? i ? "right" : "left" : "top",
                i && t && (g *= -1);
                for (const t of d)
                    t.el ? ("top" === e ? (t.el.style.right = "",
                    t.el.style.left = "") : t.el.style.top = "",
                    t.index !== h ? t.el.style[e] = 0 === p ? "" : `${n(p, 1e3)}px` : t.el.style[e] = "",
                    m += t.dim + t.gap,
                    h++) : p += t.dim + t.gap;
                if (o && m && s) {
                    let i = getComputedStyle(s)
                      , o = "padding"
                      , c = t ? "Right" : "Bottom"
                      , l = parseFloat(i[o + (t ? "Left" : "Top")]);
                    g -= l,
                    a += l,
                    a += parseFloat(i[o + c]);
                    for (const t of d)
                        t.el && (n(t.pos) < n(a) && n(t.pos + t.dim + t.gap) < n(g) && n(g) > n(r - a) && (t.el.style[e] = `${n(p + m, 1e3)}px`),
                        n(t.pos + t.gap) >= n(r - a) && n(t.pos) > n(g + a) && n(g) < n(a) && (t.el.style[e] = `-${n(m, 1e3)}px`))
                }
                let f, b, v = [...this.inTransition];
                if (v.length > 1 && (f = l[v[0]],
                b = l[v[1]]),
                f && b) {
                    let t = 0;
                    for (const i of d)
                        i.el ? this.inTransition.has(i.index) && f.slides.indexOf(i) < 0 && (i.el.style[e] = `${n(t + (f.pos - b.pos), 1e3)}px`) : t += i.dim + i.gap
                }
            }
            createSlideEl(e) {
                const {track: t, slides: i} = this;
                if (!t || !e)
                    return;
                if (e.el)
                    return;
                const o = document.createElement("div");
                T(o, this.cn("slide")),
                T(o, e.class),
                T(o, e.customClass),
                e.html && (o.innerHTML = e.html);
                const n = [];
                i.forEach(((e,t)=>{
                    e.el && n.push(t)
                }
                ));
                const s = e.index;
                let a = null;
                n.length && (a = i[n.reduce(((e,t)=>Math.abs(t - s) < Math.abs(e - s) ? t : e))]);
                const r = a && a.el ? a.index < e.index ? a.el.nextSibling : a.el : null;
                t.insertBefore(o, t.contains(r) ? r : null),
                e.el = o,
                this.emit("createSlide", e)
            }
            removeSlideEl(e, t=!1) {
                const i = e.el;
                if (!i)
                    return;
                if (A(i, this.cn("isSelected")),
                e.isDom && !t)
                    return i.removeAttribute("aria-hidden"),
                    i.removeAttribute("data-index"),
                    A(i, this.cn("isSelected")),
                    void (i.style.left = "");
                this.emit("removeSlide", e);
                const o = new CustomEvent("animationend");
                i.dispatchEvent(o),
                e.el && e.el.remove(),
                e.el = null
            }
            transitionTo(e=0, t=this.option("transition")) {
                if (!t)
                    return !1;
                const {pages: i, panzoom: o} = this;
                e = parseInt((e || 0).toString()) || 0;
                const s = this.getPageFromIndex(e);
                if (!o || !i[s] || i.length < 2 || Math.abs(i[this.page].slides[0].dim - this.viewportDim) > 1)
                    return !1;
                const a = e > this.page ? 1 : -1
                  , r = this.pages[s].pos * (this.isRTL ? 1 : -1);
                if (this.page === s && n(r, 1e3) === n(o.target[this.axis], 1e3))
                    return !1;
                this.clearTransitions();
                const c = o.isResting;
                T(this.container, this.cn("inTransition"));
                const l = this.pages[this.page].slides[0]
                  , d = this.pages[s].slides[0];
                this.inTransition.add(d.index),
                this.createSlideEl(d);
                let u = l.el
                  , h = d.el;
                c || "slide" === t || (t = "fadeFast",
                u = null);
                const p = this.isRTL ? "next" : "prev"
                  , m = this.isRTL ? "prev" : "next";
                return u && (this.inTransition.add(l.index),
                l.transition = t,
                u.addEventListener("animationend", this.onAnimationEnd),
                u.classList.add(`f-${t}Out`, `to-${a > 0 ? m : p}`)),
                h && (d.transition = t,
                h.addEventListener("animationend", this.onAnimationEnd),
                h.classList.add(`f-${t}In`, `from-${a > 0 ? p : m}`)),
                o.panTo({
                    x: this.isHorizontal ? r : 0,
                    y: this.isHorizontal ? 0 : r,
                    friction: 0
                }),
                this.onChange(s),
                !0
            }
            manageSlideVisiblity() {
                const e = new Set
                  , t = new Set
                  , i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
                for (const o of this.slides)
                    i.has(o) ? e.add(o) : t.add(o);
                for (const t of this.inTransition)
                    e.add(this.slides[t]);
                for (const t of e)
                    this.createSlideEl(t),
                    this.lazyLoadSlide(t);
                for (const i of t)
                    e.has(i) || this.removeSlideEl(i);
                this.markSelectedSlides(),
                this.repositionSlides()
            }
            markSelectedSlides() {
                if (!this.pages[this.page] || !this.pages[this.page].slides)
                    return;
                const e = "aria-hidden";
                let t = this.cn("isSelected");
                if (t)
                    for (const i of this.slides)
                        i.el && (i.el.dataset.index = `${i.index}`,
                        this.pages[this.page].slides.includes(i) ? (i.el.classList.contains(t) || (T(i.el, t),
                        this.emit("selectSlide", i)),
                        i.el.removeAttribute(e)) : (i.el.classList.contains(t) && (A(i.el, t),
                        this.emit("unselectSlide", i)),
                        i.el.setAttribute(e, "true")))
            }
            flipInfiniteTrack() {
                const e = this.panzoom;
                if (!e || !this.isInfinite)
                    return;
                const t = "x" === this.option("axis") ? "e" : "f"
                  , {viewportDim: i, contentDim: o} = this;
                let n = e.current[t]
                  , s = e.target[t] - n
                  , a = 0
                  , r = .5 * i
                  , c = o;
                this.isRTL && this.isHorizontal ? (n < -r && (a = -1,
                n += c),
                n > c - r && (a = 1,
                n -= c)) : (n > r && (a = 1,
                n -= c),
                n < -c + r && (a = -1,
                n += c)),
                a && (e.current[t] = n,
                e.target[t] = n + s)
            }
            lazyLoadSlide(e) {
                const t = this
                  , i = e && e.el;
                if (!i)
                    return;
                const o = new Set
                  , n = "f-fadeIn";
                i.querySelectorAll("[data-lazy-srcset]").forEach((e=>{
                    e instanceof HTMLImageElement && o.add(e)
                }
                ));
                let s = Array.from(i.querySelectorAll("[data-lazy-src]"));
                i.dataset.lazySrc && s.push(i),
                s.map((e=>{
                    e instanceof HTMLImageElement ? o.add(e) : k(e) && (e.style.backgroundImage = `url('${e.dataset.lazySrc || ""}')`,
                    delete e.dataset.lazySrc)
                }
                ));
                const a = (e,i,o)=>{
                    o && (o.remove(),
                    o = null),
                    i.complete && (i.classList.add(n),
                    setTimeout((()=>{
                        i.classList.remove(n)
                    }
                    ), 350),
                    i.style.display = ""),
                    this.option("adaptiveHeight") && e.el && this.pages[this.page].slides.indexOf(e) > -1 && (t.updateMetrics(),
                    t.setViewportHeight()),
                    this.emit("load", e)
                }
                ;
                for (const t of o) {
                    let i = null;
                    t.src = t.dataset.lazySrcset || t.dataset.lazySrc || "",
                    delete t.dataset.lazySrc,
                    delete t.dataset.lazySrcset,
                    t.style.display = "none",
                    t.addEventListener("error", (()=>{
                        a(e, t, i)
                    }
                    )),
                    t.addEventListener("load", (()=>{
                        a(e, t, i)
                    }
                    )),
                    setTimeout((()=>{
                        t.parentNode && e.el && (t.complete ? a(e, t, i) : (i = r(E),
                        t.parentNode.insertBefore(i, t)))
                    }
                    ), 300)
                }
            }
            onAnimationEnd(e) {
                var t;
                const i = e.target
                  , o = i ? parseInt(i.dataset.index || "", 10) || 0 : -1
                  , n = this.slides[o]
                  , s = e.animationName;
                if (!i || !n || !s)
                    return;
                const a = !!this.inTransition.has(o) && n.transition;
                a && s.substring(0, a.length + 2) === `f-${a}` && this.inTransition.delete(o),
                this.inTransition.size || this.clearTransitions(),
                o === this.page && (null === (t = this.panzoom) || void 0 === t ? void 0 : t.isResting) && this.emit("settle")
            }
            onDecel(e, t=0, i=0) {
                const {isRTL: o, isHorizontal: n, axis: s, pages: a} = this
                  , r = a.length
                  , c = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
                let l = 0;
                if (l = c > 45 && c < 135 ? n ? 0 : i : n ? t : 0,
                !r)
                    return;
                const d = this.option("dragFree");
                let u = this.page
                  , h = o && n ? 1 : -1;
                const p = e.target[s] * h
                  , m = e.current[s] * h;
                let {pageIndex: g} = this.getPageFromPosition(p)
                  , {pageIndex: f} = this.getPageFromPosition(m);
                d ? this.onChange(g) : (Math.abs(l) > 5 ? (a[u].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u = f),
                u = o && n ? l < 0 ? u - 1 : u + 1 : l < 0 ? u + 1 : u - 1) : u = f,
                this.slideTo(u, {
                    transition: !1,
                    friction: e.option("decelFriction")
                }))
            }
            onClick(e) {
                const t = e.target
                  , i = t && k(t) ? t.dataset : null;
                let o, n;
                i && (void 0 !== i.carouselPage ? (n = "slideTo",
                o = i.carouselPage) : void 0 !== i.carouselNext ? n = "slideNext" : void 0 !== i.carouselPrev && (n = "slidePrev")),
                n ? (e.preventDefault(),
                e.stopPropagation(),
                t && !t.hasAttribute("disabled") && this[n](o)) : this.emit("click", e)
            }
            onSlideTo(e) {
                const t = e.detail || 0;
                this.slideTo(this.getPageForSlide(t), {
                    friction: 0
                })
            }
            onChange(e, t=0) {
                const i = this.page;
                this.prevPage = i,
                this.page = e,
                this.option("adaptiveHeight") && this.setViewportHeight(),
                e !== i && (this.markSelectedSlides(),
                this.emit("change", e, i, t))
            }
            onRefresh() {
                let e = this.contentDim
                  , t = this.viewportDim;
                this.updateMetrics(),
                this.contentDim === e && this.viewportDim === t || this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                })
            }
            onResize() {
                this.option("breakpoints") && this.processOptions()
            }
            onBeforeTransform(e) {
                this.lp !== e.current[this.axis] && (this.flipInfiniteTrack(),
                this.manageSlideVisiblity()),
                this.lp = e.current.e
            }
            onEndAnimation() {
                this.inTransition.size || this.emit("settle")
            }
            reInit(e=null, t=null) {
                this.destroy(),
                this.state = j.Init,
                this.userOptions = e || this.userOptions,
                this.userPlugins = t || this.userPlugins,
                this.processOptions()
            }
            slideTo(e=0, {friction: t=this.option("friction"), transition: i=this.option("transition")}={}) {
                if (this.state === j.Destroy)
                    return;
                const {axis: o, isHorizontal: n, isRTL: s, pages: a, panzoom: r} = this
                  , c = a.length
                  , l = s && n ? 1 : -1;
                if (!r || !c)
                    return;
                if (this.transitionTo(e, i))
                    return;
                const d = this.getPageFromIndex(e);
                let u = a[d].pos;
                if (this.isInfinite) {
                    const t = this.contentDim
                      , i = r.target[o] * l;
                    if (2 === c)
                        u += t * Math.floor(parseFloat(e + "") / 2);
                    else {
                        const e = i;
                        u = [u, u - t, u + t].reduce((function(t, i) {
                            return Math.abs(i - e) < Math.abs(t - e) ? i : t
                        }
                        ))
                    }
                }
                u *= l,
                Math.abs(r.target[o] - u) < .1 || (r.panTo({
                    x: n ? u : 0,
                    y: n ? 0 : u,
                    friction: t
                }),
                this.onChange(d))
            }
            slideToClosest(e) {
                if (this.panzoom) {
                    const {pageIndex: t} = this.getPageFromPosition(this.panzoom.current[this.isHorizontal ? "e" : "f"]);
                    this.slideTo(t, e)
                }
            }
            slideNext() {
                this.slideTo(this.page + 1)
            }
            slidePrev() {
                this.slideTo(this.page - 1)
            }
            clearTransitions() {
                this.inTransition.clear(),
                A(this.container, this.cn("inTransition"));
                const e = ["to-prev", "to-next", "from-prev", "from-next"];
                for (const t of this.slides) {
                    const i = t.el;
                    if (i) {
                        i.removeEventListener("animationend", this.onAnimationEnd),
                        i.classList.remove(...e);
                        const o = t.transition;
                        o && i.classList.remove(`f-${o}Out`, `f-${o}In`)
                    }
                }
                this.manageSlideVisiblity()
            }
            prependSlide(e) {
                var t, i;
                let o = Array.isArray(e) ? e : [e];
                for (const e of o.reverse())
                    this.slides.unshift(R(e));
                for (let e = 0; e < this.slides.length; e++)
                    this.slides[e].index = e;
                const n = (null === (t = this.pages[this.page]) || void 0 === t ? void 0 : t.pos) || 0;
                this.page += o.length,
                this.updateMetrics();
                const s = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0;
                if (this.panzoom) {
                    const e = this.isRTL ? n - s : s - n;
                    this.panzoom.target.e -= e,
                    this.panzoom.current.e -= e,
                    this.panzoom.requestTick()
                }
            }
            appendSlide(e) {
                let t = Array.isArray(e) ? e : [e];
                for (const e of t) {
                    const t = R(e);
                    t.index = this.slides.length,
                    this.slides.push(t),
                    this.emit("initSlide", e, this.slides.length)
                }
                this.updateMetrics()
            }
            removeSlide(e) {
                const t = this.slides.length;
                e = (e % t + t) % t,
                this.removeSlideEl(this.slides[e], !0),
                this.slides.splice(e, 1);
                for (let e = 0; e < this.slides.length; e++)
                    this.slides[e].index = e;
                this.updateMetrics(),
                this.slideTo(this.page, {
                    friction: 0,
                    transition: !1
                })
            }
            updateMetrics() {
                const {panzoom: e, viewport: t, track: i, isHorizontal: o} = this;
                if (!i)
                    return;
                const s = o ? "width" : "height"
                  , a = o ? "offsetWidth" : "offsetHeight";
                if (t) {
                    let e = Math.max(t[a], n(t.getBoundingClientRect()[s], 1e3))
                      , i = getComputedStyle(t)
                      , r = "padding"
                      , c = o ? "Right" : "Bottom";
                    e -= parseFloat(i[r + (o ? "Left" : "Top")]) + parseFloat(i[r + c]),
                    this.viewportDim = e
                }
                let r, c = this.pages.length, l = 0;
                for (const [e,t] of this.slides.entries()) {
                    let i = 0
                      , o = 0;
                    !t.el && r ? (i = r.dim,
                    o = r.gap) : (({dim: i, gap: o} = this.getSlideMetrics(t)),
                    r = t),
                    i = n(i, 1e3),
                    o = n(o, 1e3),
                    t.dim = i,
                    t.gap = o,
                    t.pos = l,
                    l += i,
                    (this.isInfinite || e < this.slides.length - 1) && (l += o)
                }
                const d = this.contentDim;
                l = n(l, 1e3),
                this.contentDim = l,
                e && (e.contentRect[s] = l,
                e.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] = l),
                this.pages = this.createPages(),
                this.pages = this.processPages(),
                this.state === j.Init && this.setInitialPage(),
                this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)),
                e && c === this.pages.length && Math.abs(l - d) > .5 && (e.target[this.axis] = -1 * this.pages[this.page].pos,
                e.current[this.axis] = -1 * this.pages[this.page].pos,
                e.stop()),
                this.manageSlideVisiblity(),
                this.emit("refresh")
            }
            getProgress(e, t=!1) {
                void 0 === e && (e = this.page);
                const i = this
                  , o = i.panzoom
                  , s = i.pages[e] || 0;
                if (!s || !o)
                    return 0;
                let a = -1 * o.current.e
                  , r = i.contentDim;
                var c = [n((a - s.pos) / (1 * s.dim), 1e3), n((a + r - s.pos) / (1 * s.dim), 1e3), n((a - r - s.pos) / (1 * s.dim), 1e3)].reduce((function(e, t) {
                    return Math.abs(t) < Math.abs(e) ? t : e
                }
                ));
                return t ? c : Math.max(-1, Math.min(1, c))
            }
            setViewportHeight() {
                const {page: e, pages: t, viewport: i, isHorizontal: o} = this;
                if (!i || !t[e])
                    return;
                let n = 0;
                o && this.track && (this.track.style.height = "auto",
                t[e].slides.forEach((e=>{
                    e.el && (n = Math.max(n, e.el.offsetHeight))
                }
                ))),
                i.style.height = n ? `${n}px` : ""
            }
            getPageForSlide(e) {
                for (const t of this.pages)
                    for (const i of t.slides)
                        if (i.index === e)
                            return t.index;
                return -1
            }
            getVisibleSlides(e=0) {
                var t;
                const i = new Set;
                let {contentDim: o, viewportDim: n, pages: s, page: a} = this;
                o = o + (null === (t = this.slides[this.slides.length - 1]) || void 0 === t ? void 0 : t.gap) || 0;
                let r = 0;
                r = this.panzoom ? -1 * this.panzoom.current[this.axis] : s[a] && s[a].pos || 0,
                this.isInfinite && (r -= Math.floor(r / o) * o),
                this.isRTL && this.isHorizontal && (r *= -1);
                const c = r - n * e
                  , l = r + n * (e + 1)
                  , d = this.isInfinite ? [-1, 0, 1] : [0];
                for (const e of this.slides)
                    for (const t of d) {
                        const n = e.pos + t * o
                          , s = e.pos + e.dim + e.gap + t * o;
                        n < l && s > c && i.add(e)
                    }
                return i
            }
            getPageFromPosition(e) {
                const {viewportDim: t, contentDim: i} = this
                  , o = this.pages.length
                  , n = this.slides.length
                  , s = this.slides[n - 1];
                let a = 0
                  , r = 0
                  , c = 0;
                const l = this.option("center");
                l && (e += .5 * t),
                this.isInfinite || (e = Math.max(this.slides[0].pos, Math.min(e, s.pos)));
                const d = i + s.gap;
                c = Math.floor(e / d) || 0,
                e -= c * d;
                let u = s
                  , h = this.slides.find((t=>{
                    const i = e + (u && !l ? .5 * u.dim : 0);
                    return u = t,
                    t.pos <= i && t.pos + t.dim + t.gap > i
                }
                ));
                return h || (h = s),
                r = this.getPageForSlide(h.index),
                a = r + c * o,
                {
                    page: a,
                    pageIndex: r
                }
            }
            destroy() {
                if ([j.Destroy].includes(this.state))
                    return;
                this.state = j.Destroy;
                const {container: e, viewport: t, track: i, slides: o, panzoom: n} = this
                  , s = this.option("classes");
                e.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }),
                e.removeEventListener("slideTo", this.onSlideTo),
                window.removeEventListener("resize", this.onResize),
                n && (n.destroy(),
                this.panzoom = null),
                o && o.forEach((e=>{
                    this.removeSlideEl(e)
                }
                )),
                this.detachPlugins(),
                t && t.offsetParent && i && i.offsetParent && t.replaceWith(...i.childNodes);
                for (const [t,i] of Object.entries(s))
                    "container" !== t && i && e.classList.remove(i);
                this.track = null,
                this.viewport = null,
                this.page = 0,
                this.slides = [];
                const a = this.events.get("ready");
                this.events = new Map,
                a && this.events.set("ready", a)
            }
        }
        Object.defineProperty(B, "Panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: M
        }),
        Object.defineProperty(B, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                viewport: null,
                track: null,
                enabled: !0,
                slides: [],
                axis: "x",
                transition: "fade",
                preload: 1,
                slidesPerPage: "auto",
                initialPage: 0,
                friction: .12,
                Panzoom: {
                    decelFriction: .12
                },
                center: !0,
                infinite: !0,
                fill: !0,
                dragFree: !1,
                adaptiveHeight: !1,
                direction: "ltr",
                classes: {
                    container: "f-carousel",
                    viewport: "f-carousel__viewport",
                    track: "f-carousel__track",
                    slide: "f-carousel__slide",
                    isLTR: "is-ltr",
                    isRTL: "is-rtl",
                    isHorizontal: "is-horizontal",
                    isVertical: "is-vertical",
                    inTransition: "in-transition",
                    isSelected: "is-selected"
                },
                l10n: {
                    NEXT: "Next slide",
                    PREV: "Previous slide",
                    GOTO: "Go to slide #%d"
                }
            }
        }),
        Object.defineProperty(B, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: q
        });
        const H = function(e) {
            const t = window.pageYOffset
              , i = window.pageYOffset + window.innerHeight;
            if (!k(e))
                return 0;
            const o = e.getBoundingClientRect()
              , n = o.y + window.pageYOffset
              , s = o.y + o.height + window.pageYOffset;
            if (t > s || i < n)
                return 0;
            if (t < n && i > s)
                return 100;
            if (n < t && s > i)
                return 100;
            let a = o.height;
            n < t && (a -= window.pageYOffset - n),
            s > i && (a -= s - i);
            const r = a / window.innerHeight * 100;
            return Math.round(r)
        }
          , X = !("undefined" == typeof window || !window.document || !window.document.createElement);
        let U;
        const W = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(",")
          , V = e=>{
            if (e && X) {
                void 0 === U && document.createElement("div").focus({
                    get preventScroll() {
                        return U = !0,
                        !1
                    }
                });
                try {
                    if (U)
                        e.focus({
                            preventScroll: !0
                        });
                    else {
                        const t = window.pageXOffset || document.body.scrollTop
                          , i = window.pageYOffset || document.body.scrollLeft;
                        e.focus(),
                        document.body.scrollTo({
                            top: t,
                            left: i,
                            behavior: "auto"
                        })
                    }
                } catch (e) {}
            }
        }
          , Y = {
            dragToClose: !0,
            hideScrollbar: !0,
            Carousel: {
                classes: {
                    container: "fancybox__carousel",
                    viewport: "fancybox__viewport",
                    track: "fancybox__track",
                    slide: "fancybox__slide"
                }
            },
            contentClick: "toggleZoom",
            contentDblClick: !1,
            backdropClick: "close",
            animated: !0,
            idle: 3500,
            showClass: "f-zoomInUp",
            hideClass: "f-fadeOut",
            commonCaption: !1,
            parentEl: null,
            startIndex: 0,
            l10n: Object.assign(Object.assign({}, x), {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }),
            tpl: {
                closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
                main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
            },
            groupAll: !1,
            groupAttr: "data-fancybox",
            defaultType: "image",
            defaultDisplay: "block",
            autoFocus: !0,
            trapFocus: !0,
            placeFocusBack: !0,
            closeButton: "auto",
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "prev",
                ArrowDown: "next",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            Fullscreen: {
                autoStart: !1
            },
            compact: ()=>window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
            wheel: "zoom"
        };
        var $, K;
        !function(e) {
            e[e.Init = 0] = "Init",
            e[e.Ready = 1] = "Ready",
            e[e.Closing = 2] = "Closing",
            e[e.CustomClosing = 3] = "CustomClosing",
            e[e.Destroy = 4] = "Destroy"
        }($ || ($ = {})),
        function(e) {
            e[e.Loading = 0] = "Loading",
            e[e.Opening = 1] = "Opening",
            e[e.Ready = 2] = "Ready",
            e[e.Closing = 3] = "Closing"
        }(K || (K = {}));
        const Z = ()=>{
            queueMicrotask((()=>{
                (()=>{
                    const {slug: e, index: t} = J.parseURL()
                      , i = Se.getInstance();
                    if (i && !1 !== i.option("Hash")) {
                        const o = i.carousel;
                        if (e && o) {
                            for (let t of o.slides)
                                if (t.slug && t.slug === e)
                                    return o.slideTo(t.index);
                            if (e === i.option("slug"))
                                return o.slideTo(t - 1);
                            const n = i.getSlide()
                              , s = n && n.triggerEl && n.triggerEl.dataset;
                            if (s && s.fancybox === e)
                                return o.slideTo(t - 1)
                        }
                        J.hasSilentClose = !0,
                        i.close()
                    }
                    J.startFromUrl()
                }
                )()
            }
            ))
        }
        ;
        class J extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "origHash", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: ""
                }),
                Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onChange() {
                const e = this.instance
                  , t = e.carousel;
                this.timer && clearTimeout(this.timer);
                const i = e.getSlide();
                if (!t || !i)
                    return;
                const o = e.isOpeningSlide(i)
                  , n = new URL(document.URL).hash;
                let s, a = i.slug || void 0, r = i.triggerEl || void 0;
                s = a || this.instance.option("slug"),
                !s && r && r.dataset && (s = r.dataset.fancybox);
                let c = "";
                s && "true" !== s && (c = "#" + s + (!a && t.slides.length > 1 ? "-" + (i.index + 1) : "")),
                o && (this.origHash = n !== c ? n : ""),
                c && n !== c && (this.timer = setTimeout((()=>{
                    try {
                        e.state === $.Ready && window.history[o ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + c)
                    } catch (e) {}
                }
                ), 300))
            }
            onClose() {
                if (this.timer && clearTimeout(this.timer),
                !0 !== J.hasSilentClose)
                    try {
                        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""))
                    } catch (e) {}
            }
            attach() {
                const e = this.instance;
                e.on("Carousel.ready", this.onChange),
                e.on("Carousel.change", this.onChange),
                e.on("close", this.onClose)
            }
            detach() {
                const e = this.instance;
                e.off("Carousel.ready", this.onChange),
                e.off("Carousel.change", this.onChange),
                e.off("close", this.onClose)
            }
            static parseURL() {
                const e = window.location.hash.slice(1)
                  , t = e.split("-")
                  , i = t[t.length - 1]
                  , o = i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10) || 1;
                return {
                    hash: e,
                    slug: t.join("-"),
                    index: o
                }
            }
            static startFromUrl() {
                if (J.hasSilentClose = !1,
                Se.getInstance() || !1 === Se.defaults.Hash)
                    return;
                const {hash: e, slug: t, index: i} = J.parseURL();
                if (!t)
                    return;
                let o = document.querySelector(`[data-slug="${e}"]`);
                if (o && o.dispatchEvent(new CustomEvent("click",{
                    bubbles: !0,
                    cancelable: !0
                })),
                Se.getInstance())
                    return;
                const n = document.querySelectorAll(`[data-fancybox="${t}"]`);
                n.length && (o = n[i - 1],
                o && o.dispatchEvent(new CustomEvent("click",{
                    bubbles: !0,
                    cancelable: !0
                })))
            }
            static destroy() {
                window.removeEventListener("hashchange", Z, !1)
            }
        }
        function Q() {
            window.addEventListener("hashchange", Z, !1),
            setTimeout((()=>{
                J.startFromUrl()
            }
            ), 500)
        }
        Object.defineProperty(J, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {}
        }),
        Object.defineProperty(J, "hasSilentClose", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1
        }),
        X && (/complete|interactive|loaded/.test(document.readyState) ? Q() : document.addEventListener("DOMContentLoaded", Q));
        class ee extends z {
            onCreateSlide(e, t, i) {
                const o = this.instance
                  , n = o.optionFor(i, "src") || ""
                  , {el: s, type: a} = i;
                s && "image" === a && "string" == typeof n && this.setContent(i, n).then((e=>{
                    const t = i.contentEl
                      , n = i.imageEl
                      , a = i.thumbElSrc;
                    if (o.isClosing() || !t || !n)
                        return;
                    t.offsetHeight;
                    const r = !!o.isOpeningSlide(i) && this.getZoomInfo(i);
                    if (this.option("protected")) {
                        s.addEventListener("contextmenu", (e=>{
                            e.preventDefault()
                        }
                        ));
                        const e = document.createElement("div");
                        T(e, "fancybox-protected"),
                        t.appendChild(e)
                    }
                    if (a && r) {
                        const n = e.contentRect
                          , s = Math.max(n.fullWidth, n.fullHeight);
                        let l = null;
                        !r.opacity && s > 1200 && (l = document.createElement("img"),
                        T(l, "fancybox-ghost"),
                        l.src = a,
                        t.appendChild(l));
                        const d = ()=>{
                            l && (T(l, "f-fadeFastOut"),
                            setTimeout((()=>{
                                l && (l.remove(),
                                l = null)
                            }
                            ), 200))
                        }
                        ;
                        (c = a,
                        new Promise(((e,t)=>{
                            const i = new Image;
                            i.onload = e,
                            i.onerror = t,
                            i.src = c
                        }
                        ))).then((()=>{
                            i.state = K.Opening,
                            this.instance.emit("reveal", i),
                            this.zoomIn(i).then((()=>{
                                d(),
                                this.instance.done(i)
                            }
                            ), (()=>{
                                o.hideLoading(i)
                            }
                            )),
                            l && setTimeout((()=>{
                                d()
                            }
                            ), s > 2500 ? 800 : 200)
                        }
                        ), (()=>{
                            o.hideLoading(i),
                            o.revealContent(i)
                        }
                        ))
                    } else {
                        const t = this.optionFor(i, "initialSize")
                          , n = this.optionFor(i, "zoom")
                          , s = {
                            event: o.prevMouseMoveEvent || o.options.event,
                            friction: n ? .12 : 0
                        };
                        let a = o.optionFor(i, "showClass") || void 0
                          , r = !0;
                        o.isOpeningSlide(i) && ("full" === t ? e.zoomToFull(s) : "cover" === t ? e.zoomToCover(s) : "max" === t ? e.zoomToMax(s) : r = !1,
                        e.stop("current")),
                        r && a && (a = e.isDragging ? "f-fadeIn" : ""),
                        o.revealContent(i, a)
                    }
                    var c
                }
                ), (()=>{
                    o.setError(i, "{{IMAGE_ERROR}}")
                }
                ))
            }
            onRemoveSlide(e, t, i) {
                i.panzoom && i.panzoom.destroy(),
                i.panzoom = void 0,
                i.imageEl = void 0
            }
            onChange(e, t, i, o) {
                for (const e of t.slides) {
                    const t = e.panzoom;
                    t && e.index !== i && t.reset(.35)
                }
            }
            onClose() {
                var e;
                const t = this.instance
                  , i = t.container
                  , o = t.getSlide();
                if (!i || !i.parentElement || !o)
                    return;
                const {el: n, contentEl: s, panzoom: a} = o
                  , r = o.thumbElSrc;
                if (!n || !r || !s || !a || a.isContentLoading || a.state === y.Init || a.state === y.Destroy)
                    return;
                a.updateMetrics();
                let c = this.getZoomInfo(o);
                if (!c)
                    return;
                this.instance.state = $.CustomClosing,
                i.classList.remove("is-zooming-in"),
                i.classList.add("is-zooming-out"),
                s.style.backgroundImage = `url('${r}')`;
                const l = i.getBoundingClientRect();
                1 === ((null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1) && Object.assign(i.style, {
                    position: "absolute",
                    top: `${window.pageYOffset}px`,
                    left: `${window.pageXOffset}px`,
                    bottom: "auto",
                    right: "auto",
                    width: `${l.width}px`,
                    height: `${l.height}px`,
                    overflow: "hidden"
                });
                const {x: d, y: u, scale: h, opacity: p} = c;
                if (p) {
                    const e = ((e,t,i,o)=>{
                        const n = t - e;
                        return t=>1 + ((t - e) / n * -1 || 0)
                    }
                    )(a.scale, h);
                    a.on("afterTransform", (()=>{
                        s.style.opacity = e(a.scale) + ""
                    }
                    ))
                }
                a.on("endAnimation", (()=>{
                    t.destroy()
                }
                )),
                a.target.a = h,
                a.target.b = 0,
                a.target.c = 0,
                a.target.d = h,
                a.panTo({
                    x: d,
                    y: u,
                    scale: h,
                    friction: p ? .2 : .33,
                    ignoreBounds: !0
                }),
                a.isResting && t.destroy()
            }
            setContent(e, t) {
                return new Promise(((i,o)=>{
                    var n, s;
                    const a = this.instance
                      , c = e.el;
                    if (!c)
                        return void o();
                    a.showLoading(e);
                    let l = this.optionFor(e, "content");
                    "string" == typeof l && (l = r(l)),
                    l && k(l) || (l = document.createElement("img"),
                    l instanceof HTMLImageElement && (l.src = t || "",
                    l.alt = (null === (n = e.caption) || void 0 === n ? void 0 : n.replace(/<[^>]+>/gi, "").substring(0, 1e3)) || `Image ${e.index + 1} of ${null === (s = a.carousel) || void 0 === s ? void 0 : s.pages.length}`,
                    l.draggable = !1,
                    e.srcset && l.setAttribute("srcset", e.srcset)),
                    e.sizes && l.setAttribute("sizes", e.sizes)),
                    l.classList.add("fancybox-image"),
                    e.imageEl = l,
                    a.setContent(e, l, !1),
                    e.panzoom = new M(c,f({}, this.option("Panzoom") || {}, {
                        content: l,
                        width: a.optionFor(e, "width", "auto"),
                        height: a.optionFor(e, "height", "auto"),
                        wheel: ()=>{
                            const e = a.option("wheel");
                            return ("zoom" === e || "pan" == e) && e
                        }
                        ,
                        click: (t,i)=>{
                            var o, n;
                            if (a.isCompact || a.isClosing())
                                return !1;
                            if (e.index !== (null === (o = a.getSlide()) || void 0 === o ? void 0 : o.index))
                                return !1;
                            let s = !i || i.target && (null === (n = e.contentEl) || void 0 === n ? void 0 : n.contains(i.target));
                            return a.option(s ? "contentClick" : "backdropClick") || !1
                        }
                        ,
                        dblClick: ()=>a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1,
                        spinner: !1,
                        panOnlyZoomed: !0,
                        wheelLimit: 1 / 0,
                        transformParent: !0,
                        on: {
                            ready: e=>{
                                i(e)
                            }
                            ,
                            error: ()=>{
                                o()
                            }
                            ,
                            destroy: ()=>{
                                o()
                            }
                        }
                    }))
                }
                ))
            }
            zoomIn(e) {
                return new Promise(((t,i)=>{
                    const o = this.instance
                      , n = o.container
                      , {panzoom: s, contentEl: a, el: r} = e;
                    s && s.updateMetrics();
                    const c = this.getZoomInfo(e);
                    if (!(c && r && a && s && n))
                        return void i();
                    const {x: l, y: d, scale: u, opacity: h} = c
                      , p = ()=>{
                        e.state !== K.Closing && (h && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - s.scale) / (1 - u)), 0) + ""),
                        s.scale >= 1 && s.scale > s.targetScale - .1 && t(s))
                    }
                      , m = e=>{
                        A(n, "is-zooming-in"),
                        e.scale < .99 || e.scale > 1.01 || (a.style.opacity = "",
                        e.off("endAnimation", m),
                        e.off("touchStart", m),
                        e.off("afterTransform", p),
                        t(e))
                    }
                    ;
                    s.on("endAnimation", m),
                    s.on("touchStart", m),
                    s.on("afterTransform", p),
                    s.on(["error", "destroy"], (()=>{
                        i()
                    }
                    )),
                    s.panTo({
                        x: l,
                        y: d,
                        scale: u,
                        friction: 0,
                        ignoreBounds: !0
                    }),
                    s.stop("current");
                    const g = {
                        event: "mousemove" === s.panMode ? o.prevMouseMoveEvent || o.options.event : void 0
                    }
                      , f = this.optionFor(e, "initialSize");
                    T(n, "is-zooming-in"),
                    o.hideLoading(e),
                    "full" === f ? s.zoomToFull(g) : "cover" === f ? s.zoomToCover(g) : "max" === f ? s.zoomToMax(g) : s.reset(.172)
                }
                ))
            }
            getZoomInfo(e) {
                var t;
                const {el: i, imageEl: o, thumbEl: n, panzoom: s} = e;
                if (!i || !o || !n || !s || H(n) < 3 || !this.optionFor(e, "zoom") || this.instance.state === $.Destroy)
                    return !1;
                if (1 !== ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1))
                    return !1;
                let {top: a, left: r, width: c, height: l} = n.getBoundingClientRect()
                  , {top: d, left: u, fitWidth: h, fitHeight: p} = s.contentRect;
                if (!(c && l && h && p))
                    return !1;
                const m = s.container.getBoundingClientRect();
                u += m.left,
                d += m.top;
                const g = -1 * (u + .5 * h - (r + .5 * c))
                  , f = -1 * (d + .5 * p - (a + .5 * l))
                  , b = c / h;
                let v = this.option("zoomOpacity") || !1;
                return "auto" === v && (v = Math.abs(c / l - h / p) > .1),
                {
                    x: g,
                    y: f,
                    scale: b,
                    opacity: v
                }
            }
            attach() {
                const e = this
                  , t = e.instance;
                t.on("Carousel.change", e.onChange),
                t.on("Carousel.createSlide", e.onCreateSlide),
                t.on("Carousel.removeSlide", e.onRemoveSlide),
                t.on("close", e.onClose)
            }
            detach() {
                const e = this
                  , t = e.instance;
                t.off("Carousel.change", e.onChange),
                t.off("Carousel.createSlide", e.onCreateSlide),
                t.off("Carousel.removeSlide", e.onRemoveSlide),
                t.off("close", e.onClose)
            }
        }
        Object.defineProperty(ee, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                initialSize: "fit",
                Panzoom: {
                    maxScale: 1
                },
                protected: !1,
                zoom: !0,
                zoomOpacity: "auto"
            }
        });
        const te = (e,t={})=>{
            const i = new URL(e)
              , o = new URLSearchParams(i.search)
              , n = new URLSearchParams;
            for (const [e,i] of [...o, ...Object.entries(t)]) {
                let t = i.toString();
                "t" === e ? n.set("start", parseInt(t).toString()) : n.set(e, t)
            }
            let s = n.toString()
              , a = e.match(/#t=((.*)?\d+s)/);
            return a && (s += `#t=${a[1]}`),
            s
        }
          , ie = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo", "video"];
        class oe extends z {
            onInitSlide(e, t, i) {
                this.processType(i)
            }
            onCreateSlide(e, t, i) {
                this.setContent(i)
            }
            onRemoveSlide(e, t, i) {
                i.closeBtnEl && (i.closeBtnEl.remove(),
                i.closeBtnEl = void 0),
                i.xhr && (i.xhr.abort(),
                i.xhr = null);
                const o = i.iframeEl;
                o && (o.onload = o.onerror = null,
                o.src = "//about:blank",
                i.iframeEl = null);
                const n = i.contentEl
                  , s = i.placeholderEl;
                if ("inline" === i.type && n && s)
                    n.classList.remove("fancybox__content"),
                    "none" !== n.style.display && (n.style.display = "none"),
                    s.parentNode && s.parentNode.insertBefore(n, s),
                    s.remove(),
                    i.placeholderEl = null;
                else
                    for (; i.el && i.el.firstChild; )
                        i.el.removeChild(i.el.firstChild)
            }
            onSelectSlide(e, t, i) {
                i.state === K.Ready && this.playVideo()
            }
            onUnselectSlide(e, t, i) {
                var o, n;
                if ("html5video" === i.type) {
                    try {
                        null === (n = null === (o = i.el) || void 0 === o ? void 0 : o.querySelector("video")) || void 0 === n || n.pause()
                    } catch (e) {}
                    return
                }
                let s;
                "vimeo" === i.type ? s = {
                    method: "pause",
                    value: "true"
                } : "youtube" === i.type && (s = {
                    event: "command",
                    func: "pauseVideo"
                }),
                s && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(s), "*"),
                i.poller && clearTimeout(i.poller)
            }
            onDone(e, t) {
                e.isCurrentSlide(t) && !e.isClosing() && this.playVideo()
            }
            onRefresh(e, t) {
                t.slides.forEach((e=>{
                    e.el && (this.setAspectRatio(e),
                    this.resizeIframe(e))
                }
                ))
            }
            onMessage(e) {
                try {
                    let t = JSON.parse(e.data);
                    if ("https://player.vimeo.com" === e.origin) {
                        if ("ready" === t.event)
                            for (let t of Array.from(document.getElementsByClassName("fancybox__iframe")))
                                t instanceof HTMLIFrameElement && t.contentWindow === e.source && (t.dataset.ready = "true")
                    } else if (e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === t.event) {
                        const e = document.getElementById(t.id);
                        e && (e.dataset.ready = "true")
                    }
                } catch (e) {}
            }
            loadAjaxContent(e) {
                const t = this.instance.optionFor(e, "src") || "";
                this.instance.showLoading(e);
                const i = this.instance
                  , o = new XMLHttpRequest;
                i.showLoading(e),
                o.onreadystatechange = function() {
                    o.readyState === XMLHttpRequest.DONE && i.state === $.Ready && (i.hideLoading(e),
                    200 === o.status ? i.setContent(e, o.responseText) : i.setError(e, 404 === o.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
                }
                ;
                const n = e.ajax || null;
                o.open(n ? "POST" : "GET", t + ""),
                o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                o.send(n),
                e.xhr = o
            }
            setInlineContent(e) {
                let t = null;
                if (k(e.src))
                    t = e.src;
                else if ("string" == typeof e.src) {
                    const i = e.src.split("#", 2).pop();
                    t = i ? document.getElementById(i) : null
                }
                if (t) {
                    if ("clone" === e.type || t.closest(".fancybox__slide")) {
                        t = t.cloneNode(!0);
                        const i = t.dataset.animationName;
                        i && (t.classList.remove(i),
                        delete t.dataset.animationName);
                        let o = t.getAttribute("id");
                        o = o ? `${o}--clone` : `clone-${this.instance.id}-${e.index}`,
                        t.setAttribute("id", o)
                    } else if (t.parentNode) {
                        const i = document.createElement("div");
                        i.classList.add("fancybox-placeholder"),
                        t.parentNode.insertBefore(i, t),
                        e.placeholderEl = i
                    }
                    this.instance.setContent(e, t)
                } else
                    this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}")
            }
            setIframeContent(e) {
                const {src: t, el: i} = e;
                if (!t || "string" != typeof t || !i)
                    return;
                const o = this.instance
                  , n = document.createElement("iframe");
                n.className = "fancybox__iframe",
                n.setAttribute("id", `fancybox__iframe_${o.id}_${e.index}`);
                for (const [t,i] of Object.entries(this.optionFor(e, "iframeAttr") || {}))
                    n.setAttribute(t, i);
                n.onerror = ()=>{
                    o.setError(e, "{{IFRAME_ERROR}}")
                }
                ,
                e.iframeEl = n;
                const s = this.optionFor(e, "preload");
                if (i.classList.add("is-loading"),
                "iframe" !== e.type || !1 === s)
                    return n.setAttribute("src", e.src + ""),
                    this.resizeIframe(e),
                    void o.setContent(e, n);
                o.showLoading(e),
                n.onload = ()=>{
                    if (!n.src.length)
                        return;
                    const t = "true" !== n.dataset.ready;
                    n.dataset.ready = "true",
                    this.resizeIframe(e),
                    t ? o.revealContent(e) : o.hideLoading(e)
                }
                ,
                n.setAttribute("src", t),
                o.setContent(e, n, !1)
            }
            resizeIframe(e) {
                const t = e.iframeEl
                  , i = null == t ? void 0 : t.parentElement;
                if (!t || !i)
                    return;
                let o = e.autoSize
                  , n = e.width || 0
                  , s = e.height || 0;
                n && s && (o = !1);
                const a = i && i.style;
                if (!1 !== e.preload && !1 !== o && a)
                    try {
                        const e = window.getComputedStyle(i)
                          , o = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight)
                          , r = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom)
                          , c = t.contentWindow;
                        if (c) {
                            const e = c.document
                              , t = e.getElementsByTagName("html")[0]
                              , i = e.body;
                            a.width = "",
                            i.style.overflow = "hidden",
                            n = n || t.scrollWidth + o,
                            a.width = `${n}px`,
                            i.style.overflow = "",
                            a.flex = "0 0 auto",
                            a.height = `${i.scrollHeight}px`,
                            s = t.scrollHeight + r
                        }
                    } catch (e) {}
                if (n || s) {
                    const e = {
                        flex: "0 1 auto",
                        width: "",
                        height: ""
                    };
                    n && (e.width = `${n}px`),
                    s && (e.height = `${s}px`),
                    Object.assign(a, e)
                }
            }
            playVideo() {
                const e = this.instance.getSlide();
                if (!e)
                    return;
                const {el: t} = e;
                if (!t || !t.offsetParent)
                    return;
                if (!this.optionFor(e, "videoAutoplay"))
                    return;
                if ("html5video" === e.type)
                    try {
                        const e = t.querySelector("video");
                        if (e) {
                            const t = e.play();
                            void 0 !== t && t.then((()=>{}
                            )).catch((t=>{
                                e.muted = !0,
                                e.play()
                            }
                            ))
                        }
                    } catch (e) {}
                if ("youtube" !== e.type && "vimeo" !== e.type)
                    return;
                const i = ()=>{
                    if (e.iframeEl && e.iframeEl.contentWindow) {
                        let t;
                        if ("true" === e.iframeEl.dataset.ready)
                            return t = "youtube" === e.type ? {
                                event: "command",
                                func: "playVideo"
                            } : {
                                method: "play",
                                value: "true"
                            },
                            t && e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"),
                            void (e.poller = void 0);
                        "youtube" === e.type && (t = {
                            event: "listening",
                            id: e.iframeEl.getAttribute("id")
                        },
                        e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"))
                    }
                    e.poller = setTimeout(i, 250)
                }
                ;
                i()
            }
            processType(e) {
                if (e.html)
                    return e.type = "html",
                    e.src = e.html,
                    void (e.html = "");
                const t = this.instance.optionFor(e, "src", "");
                if (!t || "string" != typeof t)
                    return;
                let i = e.type
                  , o = null;
                if (o = t.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                    const n = this.optionFor(e, "youtube")
                      , {nocookie: s} = n
                      , a = function(e, t) {
                        var i = {};
                        for (var o in e)
                            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (i[o] = e[o]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var n = 0;
                            for (o = Object.getOwnPropertySymbols(e); n < o.length; n++)
                                t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (i[o[n]] = e[o[n]])
                        }
                        return i
                    }(n, ["nocookie"])
                      , r = `www.youtube${s ? "-nocookie" : ""}.com`
                      , c = te(t, a)
                      , l = encodeURIComponent(o[2]);
                    e.videoId = l,
                    e.src = `https://${r}/embed/${l}?${c}`,
                    e.thumbSrc = e.thumbSrc || `https://i.ytimg.com/vi/${l}/mqdefault.jpg`,
                    i = "youtube"
                } else if (o = t.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
                    const n = te(t, this.optionFor(e, "vimeo"))
                      , s = encodeURIComponent(o[1])
                      , a = o[4] || "";
                    e.videoId = s,
                    e.src = `https://player.vimeo.com/video/${s}?${a ? `h=${a}${n ? "&" : ""}` : ""}${n}`,
                    i = "vimeo"
                }
                if (!i && e.triggerEl) {
                    const t = e.triggerEl.dataset.type;
                    ie.includes(t) && (i = t)
                }
                i || "string" == typeof t && ("#" === t.charAt(0) ? i = "inline" : (o = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video",
                e.videoFormat = e.videoFormat || "video/" + ("ogv" === o[1] ? "ogg" : o[1])) : t.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : t.match(/\.(pdf)((\?|#).*)?$/i) ? i = "pdf" : (o = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (e.src = `https://maps.google.${o[1]}/?ll=${(o[2] ? o[2] + "&z=" + Math.floor(parseFloat(o[3])) + (o[4] ? o[4].replace(/^\//, "&") : "") : o[4] + "").replace(/\?/, "&")}&output=${o[4] && o[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`,
                i = "map") : (o = t.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (e.src = `https://maps.google.${o[1]}/maps?q=${o[2].replace("query=", "q=").replace("api=1", "")}&output=embed`,
                i = "map")),
                i = i || this.instance.option("defaultType"),
                e.type = i,
                "image" === i && (e.thumbSrc = e.thumbSrc || e.src)
            }
            setContent(e) {
                const t = this.instance.optionFor(e, "src") || "";
                if (e && e.type && t) {
                    switch (e.type) {
                    case "html":
                        this.instance.setContent(e, t);
                        break;
                    case "html5video":
                        const i = this.option("videoTpl");
                        i && this.instance.setContent(e, i.replace(/\{\{src\}\}/gi, t + "").replace(/\{\{format\}\}/gi, this.optionFor(e, "videoFormat") || "").replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || ""));
                        break;
                    case "inline":
                    case "clone":
                        this.setInlineContent(e);
                        break;
                    case "ajax":
                        this.loadAjaxContent(e);
                        break;
                    case "pdf":
                    case "map":
                    case "youtube":
                    case "vimeo":
                        e.preload = !1;
                    case "iframe":
                        this.setIframeContent(e)
                    }
                    this.setAspectRatio(e)
                }
            }
            setAspectRatio(e) {
                var t;
                const i = e.contentEl
                  , o = this.optionFor(e, "videoRatio")
                  , n = null === (t = e.el) || void 0 === t ? void 0 : t.getBoundingClientRect();
                if (!(i && n && o && 1 !== o && e.type && ["video", "youtube", "vimeo", "html5video"].includes(e.type)))
                    return;
                const s = n.width
                  , a = n.height;
                i.style.aspectRatio = o + "",
                i.style.width = s / a > o ? "auto" : "",
                i.style.height = s / a > o ? "" : "auto"
            }
            attach() {
                const e = this.instance;
                e.on("Carousel.initSlide", this.onInitSlide),
                e.on("Carousel.createSlide", this.onCreateSlide),
                e.on("Carousel.removeSlide", this.onRemoveSlide),
                e.on("Carousel.selectSlide", this.onSelectSlide),
                e.on("Carousel.unselectSlide", this.onUnselectSlide),
                e.on("Carousel.Panzoom.refresh", this.onRefresh),
                e.on("done", this.onDone),
                window.addEventListener("message", this.onMessage)
            }
            detach() {
                const e = this.instance;
                e.off("Carousel.initSlide", this.onInitSlide),
                e.off("Carousel.createSlide", this.onCreateSlide),
                e.off("Carousel.removeSlide", this.onRemoveSlide),
                e.off("Carousel.selectSlide", this.onSelectSlide),
                e.off("Carousel.unselectSlide", this.onUnselectSlide),
                e.off("Carousel.Panzoom.refresh", this.onRefresh),
                e.off("done", this.onDone),
                window.removeEventListener("message", this.onMessage)
            }
        }
        Object.defineProperty(oe, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                ajax: null,
                autoSize: !0,
                iframeAttr: {
                    allow: "autoplay; fullscreen",
                    scrolling: "auto"
                },
                preload: !0,
                videoAutoplay: !0,
                videoRatio: 16 / 9,
                videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
                videoFormat: "",
                vimeo: {
                    byline: 1,
                    color: "00adef",
                    controls: 1,
                    dnt: 1,
                    muted: 0
                },
                youtube: {
                    controls: 1,
                    enablejsapi: 1,
                    nocookie: 1,
                    rel: 0,
                    fs: 1
                }
            }
        });
        class ne extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "ready"
                }),
                Object.defineProperty(this, "inHover", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "timer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "progressBar", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            get isActive() {
                return "ready" !== this.state
            }
            onReady(e) {
                this.option("autoStart") && (e.isInfinite || e.page < e.pages.length - 1) && this.start()
            }
            onChange() {
                var e;
                (null === (e = this.instance.panzoom) || void 0 === e ? void 0 : e.isResting) || (this.removeProgressBar(),
                this.pause())
            }
            onSettle() {
                this.resume()
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.resume() : this.pause()
            }
            onMouseEnter() {
                this.inHover = !0,
                this.pause()
            }
            onMouseLeave() {
                var e;
                this.inHover = !1,
                (null === (e = this.instance.panzoom) || void 0 === e ? void 0 : e.isResting) && this.resume()
            }
            onTimerEnd() {
                "play" === this.state && (this.instance.isInfinite || this.instance.page !== this.instance.pages.length - 1 ? this.instance.slideNext() : this.instance.slideTo(0))
            }
            removeProgressBar() {
                this.progressBar && (this.progressBar.remove(),
                this.progressBar = null)
            }
            createProgressBar() {
                var e;
                if (!this.option("showProgress"))
                    return null;
                this.removeProgressBar();
                const t = this.instance
                  , i = (null === (e = t.pages[t.page]) || void 0 === e ? void 0 : e.slides) || [];
                let o = this.option("progressParentEl");
                if (o || (o = (1 === i.length ? i[0].el : null) || t.viewport),
                !o)
                    return null;
                const n = document.createElement("div");
                return T(n, "f-progress"),
                o.prepend(n),
                this.progressBar = n,
                n.offsetHeight,
                n
            }
            set() {
                if (this.instance.pages.length < 2)
                    return;
                if (this.progressBar)
                    return;
                const e = this.option("timeout");
                this.state = "play",
                T(this.instance.container, "has-autoplay");
                let t = this.createProgressBar();
                t && (t.style.transitionDuration = `${e}ms`,
                t.style.transform = "scaleX(1)"),
                this.timer = setTimeout((()=>{
                    this.timer = null,
                    this.inHover || this.onTimerEnd()
                }
                ), e),
                this.emit("set")
            }
            clear() {
                this.timer && (clearTimeout(this.timer),
                this.timer = null),
                this.removeProgressBar()
            }
            start() {
                if (this.set(),
                this.option("pauseOnHover")) {
                    const e = this.instance.container;
                    e.addEventListener("mouseenter", this.onMouseEnter, !1),
                    e.addEventListener("mouseleave", this.onMouseLeave, !1)
                }
                document.addEventListener("visibilitychange", this.onVisibilityChange, !1)
            }
            stop() {
                const e = this.instance.container;
                this.clear(),
                this.state = "ready",
                e.removeEventListener("mouseenter", this.onMouseEnter, !1),
                e.removeEventListener("mouseleave", this.onMouseLeave, !1),
                document.removeEventListener("visibilitychange", this.onVisibilityChange, !1),
                A(e, "has-autoplay"),
                this.emit("stop")
            }
            pause() {
                "play" === this.state && (this.state = "pause",
                this.clear(),
                this.emit("pause"))
            }
            resume() {
                const e = this.instance;
                if (e.isInfinite || e.page !== e.pages.length - 1)
                    if ("play" !== this.state) {
                        if ("pause" === this.state && !this.inHover) {
                            const e = new Event("resume",{
                                bubbles: !0,
                                cancelable: !0
                            });
                            this.emit("resume", event),
                            e.defaultPrevented || this.set()
                        }
                    } else
                        this.set();
                else
                    this.stop()
            }
            toggle() {
                "play" === this.state || "pause" === this.state ? this.stop() : this.set()
            }
            attach() {
                const e = this
                  , t = e.instance;
                t.on("ready", e.onReady),
                t.on("Panzoom.startAnimation", e.onChange),
                t.on("Panzoom.endAnimation", e.onSettle),
                t.on("Panzoom.touchMove", e.onChange)
            }
            detach() {
                const e = this
                  , t = e.instance;
                t.off("ready", e.onReady),
                t.off("Panzoom.startAnimation", e.onChange),
                t.off("Panzoom.endAnimation", e.onSettle),
                t.off("Panzoom.touchMove", e.onChange),
                e.stop()
            }
        }
        Object.defineProperty(ne, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                autoStart: !0,
                pauseOnHover: !0,
                progressParentEl: null,
                showProgress: !0,
                timeout: 3e3
            }
        });
        class se extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onPrepare(e) {
                const t = e.carousel;
                if (!t)
                    return;
                const i = e.container;
                i && (t.options.Autoplay = f({
                    autoStart: !1
                }, this.option("Autoplay") || {}, {
                    pauseOnHover: !1,
                    timeout: this.option("timeout"),
                    progressParentEl: ()=>this.option("progressParentEl") || null,
                    on: {
                        set: t=>{
                            var o;
                            i.classList.add("has-slideshow"),
                            (null === (o = e.getSlide()) || void 0 === o ? void 0 : o.state) !== K.Ready && t.pause()
                        }
                        ,
                        stop: ()=>{
                            i.classList.remove("has-slideshow"),
                            e.isCompact || e.endIdle()
                        }
                        ,
                        resume: (t,i)=>{
                            var o, n, s;
                            !i || !i.cancelable || (null === (o = e.getSlide()) || void 0 === o ? void 0 : o.state) === K.Ready && (null === (s = null === (n = e.carousel) || void 0 === n ? void 0 : n.panzoom) || void 0 === s ? void 0 : s.isResting) || i.preventDefault()
                        }
                    }
                }),
                t.attachPlugins({
                    Autoplay: ne
                }),
                this.ref = t.plugins.Autoplay)
            }
            onReady(e) {
                const t = e.carousel
                  , i = this.ref;
                t && i && this.option("playOnStart") && (t.isInfinite || t.page < t.pages.length - 1) && i.start()
            }
            onDone(e, t) {
                const i = this.ref;
                if (!i)
                    return;
                const o = t.panzoom;
                o && o.on("startAnimation", (()=>{
                    e.isCurrentSlide(t) && i.stop()
                }
                )),
                e.isCurrentSlide(t) && i.resume()
            }
            onKeydown(e, t) {
                var i;
                const o = this.ref;
                o && t === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && o.toggle()
            }
            attach() {
                const e = this
                  , t = e.instance;
                t.on("Carousel.init", e.onPrepare),
                t.on("Carousel.ready", e.onReady),
                t.on("done", e.onDone),
                t.on("keydown", e.onKeydown)
            }
            detach() {
                const e = this
                  , t = e.instance;
                t.off("Carousel.init", e.onPrepare),
                t.off("Carousel.ready", e.onReady),
                t.off("done", e.onDone),
                t.off("keydown", e.onKeydown)
            }
        }
        Object.defineProperty(se, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                key: " ",
                playOnStart: !1,
                progressParentEl: e=>{
                    var t;
                    return (null === (t = e.instance.container) || void 0 === t ? void 0 : t.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || e.instance.container
                }
                ,
                timeout: 3e3
            }
        });
        const ae = {
            classes: {
                container: "f-thumbs f-carousel__thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
                isResting: "is-resting",
                isSelected: "is-selected",
                isLoading: "is-loading",
                hasThumbs: "has-thumbs"
            },
            minCount: 2,
            parentEl: null,
            thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
            type: "modern"
        };
        var re;
        !function(e) {
            e[e.Init = 0] = "Init",
            e[e.Ready = 1] = "Ready",
            e[e.Hidden = 2] = "Hidden",
            e[e.Disabled = 3] = "Disabled"
        }(re || (re = {}));
        let ce = class extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "type", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: "modern"
                }),
                Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "track", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "panzoom", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "thumbWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "thumbClipWidth", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "thumbHeight", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "thumbGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "thumbExtraGap", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "shouldCenter", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !0
                }),
                Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: re.Init
                })
            }
            formatThumb(e, t) {
                return this.instance.localize(t, [["%i", e.index], ["%d", e.index + 1], ["%s", e.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])
            }
            getSlides() {
                const e = []
                  , t = this.option("thumbTpl") || "";
                if (t)
                    for (const i of this.instance.slides || []) {
                        let o = "";
                        i.type && (o = `for-${i.type}`,
                        i.type && ["video", "youtube", "vimeo", "html5video"].includes(i.type) && (o += " for-video")),
                        e.push({
                            html: this.formatThumb(i, t),
                            customClass: o
                        })
                    }
                return e
            }
            onInitSlide(e, t) {
                const i = t.el;
                i && (t.thumbSrc = i.dataset.thumbSrc || t.thumbSrc || "",
                t.thumbClipWidth = parseFloat(i.dataset.thumbClipWidth || "") || t.thumbClipWidth || 0,
                t.thumbHeight = parseFloat(i.dataset.thumbHeight || "") || t.thumbHeight || 0)
            }
            onInitSlides() {
                this.state === re.Init && this.build()
            }
            onRefreshM() {
                this.refreshModern()
            }
            onChangeM() {
                "modern" === this.type && (this.shouldCenter = !0,
                this.centerModern())
            }
            onClickModern(e) {
                e.preventDefault(),
                e.stopPropagation();
                const t = this.instance
                  , i = t.page
                  , o = e=>{
                    if (e) {
                        const t = e.closest("[data-carousel-index]");
                        if (t)
                            return parseInt(t.dataset.carouselIndex || "", 10) || 0
                    }
                    return -1
                }
                  , n = (e,t)=>{
                    const i = document.elementFromPoint(e, t);
                    return i ? o(i) : -1
                }
                ;
                let s = o(e.target);
                s < 0 && (s = n(e.clientX + this.thumbGap, e.clientY),
                s === i && (s = i - 1)),
                s < 0 && (s = n(e.clientX - this.thumbGap, e.clientY),
                s === i && (s = i + 1)),
                s < 0 && (s = (t=>{
                    let o = n(e.clientX - t, e.clientY)
                      , a = n(e.clientX + t, e.clientY);
                    return s < 0 && o === i && (s = i + 1),
                    s < 0 && a === i && (s = i - 1),
                    s
                }
                )(this.thumbExtraGap)),
                s === i ? this.centerModern() : s > -1 && s < t.pages.length && t.slideTo(s)
            }
            onTransformM() {
                if ("modern" !== this.type)
                    return;
                const {instance: e, container: t, track: i} = this
                  , o = e.panzoom;
                if (!(t && i && o && this.panzoom))
                    return;
                l(t, this.cn("isResting"), o.state !== y.Init && o.isResting);
                const n = this.thumbGap
                  , s = this.thumbExtraGap
                  , a = this.thumbClipWidth;
                let r = 0
                  , c = 0
                  , d = 0;
                for (const t of e.slides) {
                    let i = t.index
                      , o = t.thumbSlideEl;
                    if (!o)
                        continue;
                    l(o, this.cn("isSelected"), i === e.page),
                    c = 1 - Math.abs(e.getProgress(i)),
                    o.style.setProperty("--progress", c ? c + "" : "");
                    const u = .5 * ((t.thumbWidth || 0) - a);
                    r += n,
                    r += u,
                    c && (r -= c * (u + s)),
                    o.style.setProperty("--shift", r - n + ""),
                    r += u,
                    c && (r -= c * (u + s)),
                    r -= n,
                    0 === i && (d = s * c)
                }
                i && (i.style.setProperty("--left", d + ""),
                i.style.setProperty("--width", r + d + n + s * c + "")),
                this.shouldCenter && this.centerModern()
            }
            buildClassic() {
                const {container: e, track: t} = this
                  , i = this.getSlides();
                if (!e || !t || !i)
                    return;
                const o = new this.instance.constructor(e,f({
                    track: t,
                    infinite: !1,
                    center: !0,
                    fill: !0,
                    dragFree: !0,
                    slidesPerPage: 1,
                    transition: !1,
                    Dots: !1,
                    Navigation: !1,
                    Sync: {},
                    classes: {
                        container: "f-thumbs",
                        viewport: "f-thumbs__viewport",
                        track: "f-thumbs__track",
                        slide: "f-thumbs__slide"
                    }
                }, this.option("Carousel") || {}, {
                    Sync: {
                        target: this.instance
                    },
                    slides: i
                }));
                this.carousel = o,
                this.track = t,
                o.on("ready", (()=>{
                    this.emit("ready")
                }
                ))
            }
            buildModern() {
                if ("modern" !== this.type)
                    return;
                const {container: e, track: t, instance: i} = this
                  , o = this.option("thumbTpl") || "";
                if (!e || !t || !o)
                    return;
                T(e, "is-horizontal"),
                this.updateModern();
                for (const e of i.slides || []) {
                    const i = document.createElement("div");
                    if (T(i, this.cn("slide")),
                    e.type) {
                        let t = `for-${e.type}`;
                        ["video", "youtube", "vimeo", "html5video"].includes(e.type) && (t += " for-video"),
                        T(i, t)
                    }
                    i.appendChild(r(this.formatThumb(e, o))),
                    e.thumbSlideEl = i,
                    t.appendChild(i),
                    this.resizeModernSlide(e)
                }
                const n = new i.constructor.Panzoom(e,{
                    content: t,
                    lockAxis: "x",
                    zoom: !1,
                    panOnlyZoomed: !1,
                    bounds: ()=>{
                        let e = 0
                          , t = 0
                          , o = i.slides[0]
                          , n = i.slides[i.slides.length - 1]
                          , s = i.slides[i.page];
                        return o && n && s && (t = -1 * this.getModernThumbPos(0),
                        0 !== i.page && (t += .5 * (o.thumbWidth || 0)),
                        e = -1 * this.getModernThumbPos(i.slides.length - 1),
                        i.page !== i.slides.length - 1 && (e += (n.thumbWidth || 0) - (s.thumbWidth || 0) - .5 * (n.thumbWidth || 0))),
                        {
                            x: {
                                min: e,
                                max: t
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }
                    }
                });
                n.on("touchStart", ((e,t)=>{
                    this.shouldCenter = !1
                }
                )),
                n.on("click", ((e,t)=>this.onClickModern(t))),
                n.on("ready", (()=>{
                    this.centerModern(),
                    this.emit("ready")
                }
                )),
                n.on(["afterTransform", "refresh"], (e=>{
                    this.lazyLoadModern()
                }
                )),
                this.panzoom = n,
                this.refreshModern()
            }
            updateModern() {
                if ("modern" !== this.type)
                    return;
                const {container: e} = this;
                e && (this.thumbGap = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-gap")) || 0,
                this.thumbExtraGap = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-extra-gap")) || 0,
                this.thumbWidth = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-width")) || 40,
                this.thumbClipWidth = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-clip-width")) || 40,
                this.thumbHeight = parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-height")) || 40)
            }
            refreshModern() {
                var e;
                if ("modern" === this.type) {
                    this.updateModern();
                    for (const e of this.instance.slides || [])
                        this.resizeModernSlide(e);
                    this.onTransformM(),
                    null === (e = this.panzoom) || void 0 === e || e.updateMetrics(!0),
                    this.centerModern(0)
                }
            }
            centerModern(e) {
                const t = this.instance
                  , {container: i, panzoom: o} = this;
                if (!i || !o || o.state === y.Init)
                    return;
                const s = t.page;
                let a = this.getModernThumbPos(s)
                  , r = a;
                for (let e = t.page - 3; e < t.page + 3; e++) {
                    if (e < 0 || e > t.pages.length - 1 || e === t.page)
                        continue;
                    const i = 1 - Math.abs(t.getProgress(e));
                    i > 0 && i < 1 && (r += i * (this.getModernThumbPos(e) - a))
                }
                let c = 100;
                void 0 === e && (e = .2,
                t.inTransition.size > 0 && (e = .12),
                Math.abs(-1 * o.current.e - r) > o.containerRect.width && (e = .5,
                c = 0)),
                o.options.maxVelocity = c,
                o.applyChange({
                    panX: n(-1 * r - o.target.e, 1e3),
                    friction: null === t.prevPage ? 0 : e
                })
            }
            lazyLoadModern() {
                const {instance: e, panzoom: t} = this;
                if (!t)
                    return;
                const i = -1 * t.current.e || 0;
                let o = this.getModernThumbPos(e.page);
                if (t.state !== y.Init || 0 === o)
                    for (const o of e.slides || []) {
                        const e = o.thumbSlideEl;
                        if (!e)
                            continue;
                        const n = e.querySelector("img[data-lazy-src]")
                          , s = o.index
                          , a = this.getModernThumbPos(s)
                          , c = i - .5 * t.containerRect.innerWidth
                          , l = c + t.containerRect.innerWidth;
                        if (!n || a < c || a > l)
                            continue;
                        let d = n.dataset.lazySrc;
                        if (!d || !d.length)
                            continue;
                        if (delete n.dataset.lazySrc,
                        n.src = d,
                        n.complete)
                            continue;
                        T(e, this.cn("isLoading"));
                        const u = r(E);
                        e.appendChild(u),
                        n.addEventListener("load", (()=>{
                            e.offsetParent && (e.classList.remove(this.cn("isLoading")),
                            u.remove())
                        }
                        ), !1)
                    }
            }
            resizeModernSlide(e) {
                if ("modern" !== this.type)
                    return;
                if (!e.thumbSlideEl)
                    return;
                const t = e.thumbClipWidth && e.thumbHeight ? Math.round(this.thumbHeight * (e.thumbClipWidth / e.thumbHeight)) : this.thumbWidth;
                e.thumbWidth = t
            }
            getModernThumbPos(e) {
                const t = this.instance.slides[e]
                  , i = this.panzoom;
                if (!i || !i.contentRect.fitWidth)
                    return 0;
                let o = i.containerRect.innerWidth
                  , s = i.contentRect.width;
                2 === this.instance.slides.length && (e -= 1,
                s = 2 * this.thumbClipWidth);
                let a = e * (this.thumbClipWidth + this.thumbGap) + this.thumbExtraGap + .5 * (t.thumbWidth || 0);
                return a -= s > o ? .5 * o : .5 * s,
                n(a || 0, 1)
            }
            build() {
                const e = this.instance
                  , t = e.container
                  , i = this.option("minCount") || 0;
                if (i) {
                    let t = 0;
                    for (const i of e.slides || [])
                        i.thumbSrc && t++;
                    if (t < i)
                        return this.cleanup(),
                        void (this.state = re.Disabled)
                }
                const o = this.option("type");
                if (["modern", "classic"].indexOf(o) < 0)
                    return void (this.state = re.Disabled);
                this.type = o;
                const n = document.createElement("div");
                T(n, this.cn("container")),
                T(n, `is-${o}`);
                const s = this.option("parentEl");
                s ? s.appendChild(n) : t.after(n),
                this.container = n,
                T(t, this.cn("hasThumbs"));
                const a = document.createElement("div");
                T(a, this.cn("track")),
                n.appendChild(a),
                this.track = a,
                "classic" === o ? this.buildClassic() : this.buildModern(),
                this.state = re.Ready,
                n.addEventListener("click", (t=>{
                    setTimeout((()=>{
                        var t;
                        null === (t = null == n ? void 0 : n.querySelector(`[data-carousel-index="${e.page}"]`)) || void 0 === t || t.focus()
                    }
                    ), 100)
                }
                ))
            }
            cleanup() {
                this.carousel && this.carousel.destroy(),
                this.carousel = null,
                this.panzoom && this.panzoom.destroy(),
                this.panzoom = null,
                this.container && this.container.remove(),
                this.container = null,
                this.track = null,
                this.state = re.Init,
                A(this.instance.container, this.cn("hasThumbs"))
            }
            attach() {
                const e = this
                  , t = e.instance;
                t.on("initSlide", e.onInitSlide),
                t.state === j.Init ? t.on("initSlides", e.onInitSlides) : e.onInitSlides(),
                t.on("Panzoom.afterTransform", e.onTransformM),
                t.on("Panzoom.refresh", e.onRefreshM),
                t.on("change", e.onChangeM)
            }
            detach() {
                const e = this
                  , t = e.instance;
                t.off("initSlide", e.onInitSlide),
                t.off("initSlides", e.onInitSlides),
                t.off("Panzoom.afterTransform", e.onTransformM),
                t.off("Panzoom.refresh", e.onRefreshM),
                t.off("change", e.onChangeM),
                e.cleanup()
            }
        }
        ;
        Object.defineProperty(ce, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ae
        });
        const le = Object.assign(Object.assign({}, ae), {
            key: "t",
            showOnStart: !0,
            parentEl: null
        });
        class de extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "ref", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "hidden", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                })
            }
            get isEnabled() {
                const e = this.ref;
                return e && e.state !== re.Disabled
            }
            get isHidden() {
                return this.hidden
            }
            onInit() {
                const e = this.instance
                  , t = e.carousel;
                if (this.ref || !t)
                    return;
                const i = this.option("parentEl") || e.footer || e.container;
                i && (t.options.Thumbs = f({}, this.options, {
                    parentEl: i,
                    classes: {
                        container: "f-thumbs fancybox__thumbs"
                    },
                    Carousel: {
                        Sync: {
                            friction: e.option("Carousel.friction")
                        },
                        on: {
                            click: (e,t)=>{
                                t.stopPropagation()
                            }
                        }
                    },
                    on: {
                        ready: e=>{
                            const t = e.container;
                            t && this.hidden && (this.refresh(),
                            t.style.transition = "none",
                            this.hide(),
                            t.offsetHeight,
                            queueMicrotask((()=>{
                                t.style.transition = "",
                                this.show()
                            }
                            )))
                        }
                    }
                }),
                t.attachPlugins({
                    Thumbs: ce
                }),
                this.ref = t.plugins.Thumbs,
                this.option("showOnStart") || (this.ref.state = re.Hidden,
                this.hidden = !0))
            }
            onResize() {
                var e;
                const t = null === (e = this.ref) || void 0 === e ? void 0 : e.container;
                t && (t.style.maxHeight = "")
            }
            onKeydown(e, t) {
                const i = this.option("key");
                i && i === t && this.toggle()
            }
            toggle() {
                const e = this.ref;
                e && e.state !== re.Disabled && (e.state !== re.Hidden ? this.hidden ? this.show() : this.hide() : e.build())
            }
            show() {
                const e = this.ref
                  , t = e && e.state !== re.Disabled && e.container;
                t && (this.refresh(),
                t.offsetHeight,
                t.removeAttribute("aria-hidden"),
                t.classList.remove("is-hidden"),
                this.hidden = !1)
            }
            hide() {
                const e = this.ref
                  , t = e && e.container;
                t && (this.refresh(),
                t.offsetHeight,
                t.classList.add("is-hidden"),
                t.setAttribute("aria-hidden", "true")),
                this.hidden = !0
            }
            refresh() {
                const e = this.ref;
                if (!e || e.state === re.Disabled)
                    return;
                const t = e.container
                  , i = (null == t ? void 0 : t.firstChild) || null;
                t && i && i.childNodes.length && (t.style.maxHeight = `${i.getBoundingClientRect().height}px`)
            }
            attach() {
                const e = this
                  , t = e.instance;
                t.state === $.Init ? t.on("Carousel.init", e.onInit) : e.onInit(),
                t.on("resize", e.onResize),
                t.on("keydown", e.onKeydown)
            }
            detach() {
                var e;
                const t = this
                  , i = t.instance;
                i.off("Carousel.init", t.onInit),
                i.off("resize", t.onResize),
                i.off("keydown", t.onKeydown),
                null === (e = i.carousel) || void 0 === e || e.detachPlugins(["Thumbs"]),
                t.ref = null
            }
        }
        Object.defineProperty(de, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: le
        });
        const ue = {
            panLeft: {
                icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
                change: {
                    panX: -100
                }
            },
            panRight: {
                icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
                change: {
                    panX: 100
                }
            },
            panUp: {
                icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
                change: {
                    panY: -100
                }
            },
            panDown: {
                icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
                change: {
                    panY: 100
                }
            },
            zoomIn: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
                action: "zoomIn"
            },
            zoomOut: {
                icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "zoomOut"
            },
            toggle1to1: {
                icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
                action: "toggleZoom"
            },
            toggleZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "toggleZoom"
            },
            iterateZoom: {
                icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
                action: "iterateZoom"
            },
            rotateCCW: {
                icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
                action: "rotateCCW"
            },
            rotateCW: {
                icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
                action: "rotateCW"
            },
            flipX: {
                icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
                action: "flipX"
            },
            flipY: {
                icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
                action: "flipY"
            },
            fitX: {
                icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
                action: "fitX"
            },
            fitY: {
                icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
                action: "fitY"
            },
            reset: {
                icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
                action: "reset"
            },
            toggleFS: {
                icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
                action: "toggleFS"
            }
        };
        var he;
        !function(e) {
            e[e.Init = 0] = "Init",
            e[e.Ready = 1] = "Ready",
            e[e.Disabled = 2] = "Disabled"
        }(he || (he = {}));
        const pe = {
            tabindex: "-1",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
        };
        class me extends z {
            constructor() {
                super(...arguments),
                Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: he.Init
                }),
                Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                })
            }
            onReady(e) {
                var t;
                if (!e.carousel)
                    return;
                let i = this.option("display")
                  , o = this.option("absolute")
                  , n = this.option("enabled");
                if ("auto" === n) {
                    const e = this.instance.carousel;
                    let t = 0;
                    if (e)
                        for (const i of e.slides)
                            (i.panzoom || "image" === i.type) && t++;
                    t || (n = !1)
                }
                n || (i = void 0);
                let s = 0;
                const a = {
                    left: [],
                    middle: [],
                    right: []
                };
                if (i)
                    for (const e of ["left", "middle", "right"])
                        for (const o of i[e]) {
                            const i = this.createEl(o);
                            i && (null === (t = a[e]) || void 0 === t || t.push(i),
                            s++)
                        }
                let r = null;
                if (s && (r = this.createContainer()),
                r) {
                    for (const [e,t] of Object.entries(a)) {
                        const i = document.createElement("div");
                        T(i, "fancybox__toolbar__column is-" + e);
                        for (const e of t)
                            i.appendChild(e);
                        "auto" !== o || "middle" !== e || t.length || (o = !0),
                        r.appendChild(i)
                    }
                    !0 === o && T(r, "is-absolute"),
                    this.state = he.Ready,
                    this.onRefresh()
                } else
                    this.state = he.Disabled
            }
            onClick(e) {
                var t, i;
                const o = this.instance
                  , n = o.getSlide()
                  , s = null == n ? void 0 : n.panzoom
                  , a = e.target
                  , r = a && k(a) ? a.dataset : null;
                if (!r)
                    return;
                if (void 0 !== r.fancyboxToggleThumbs)
                    return e.preventDefault(),
                    e.stopPropagation(),
                    void (null === (t = o.plugins.Thumbs) || void 0 === t || t.toggle());
                if (void 0 !== r.fancyboxToggleFullscreen)
                    return e.preventDefault(),
                    e.stopPropagation(),
                    void this.instance.toggleFullscreen();
                if (void 0 !== r.fancyboxToggleSlideshow) {
                    e.preventDefault(),
                    e.stopPropagation();
                    const t = null === (i = o.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
                    let n = t.isActive;
                    return s && "mousemove" === s.panMode && !n && s.reset(),
                    void (n ? t.stop() : t.start())
                }
                const c = r.panzoomAction
                  , l = r.panzoomChange;
                if ((l || c) && (e.preventDefault(),
                e.stopPropagation()),
                l) {
                    let t = {};
                    try {
                        t = JSON.parse(l)
                    } catch (e) {}
                    s && s.applyChange(t)
                } else
                    c && s && s[c] && s[c]()
            }
            onChange() {
                this.onRefresh()
            }
            onRefresh() {
                if (this.instance.isClosing())
                    return;
                const e = this.container;
                if (!e)
                    return;
                const t = this.instance.getSlide();
                if (!t || t.state !== K.Ready)
                    return;
                const i = t && !t.error && t.panzoom;
                for (const t of e.querySelectorAll("[data-panzoom-action]"))
                    i ? (t.removeAttribute("disabled"),
                    t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""),
                    t.setAttribute("tabindex", "-1"));
                let o = i && i.canZoomIn()
                  , n = i && i.canZoomOut();
                for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
                    o ? (t.removeAttribute("disabled"),
                    t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""),
                    t.setAttribute("tabindex", "-1"));
                for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
                    n ? (t.removeAttribute("disabled"),
                    t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""),
                    t.setAttribute("tabindex", "-1"));
                for (const t of e.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                    n || o ? (t.removeAttribute("disabled"),
                    t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""),
                    t.setAttribute("tabindex", "-1"));
                    const e = t.querySelector("g");
                    e && (e.style.display = o ? "" : "none")
                }
            }
            onDone(e, t) {
                var i;
                null === (i = t.panzoom) || void 0 === i || i.on("afterTransform", (()=>{
                    this.instance.isCurrentSlide(t) && this.onRefresh()
                }
                )),
                this.instance.isCurrentSlide(t) && this.onRefresh()
            }
            createContainer() {
                const e = this.instance.container;
                if (!e)
                    return null;
                const t = this.option("parentEl") || e
                  , i = document.createElement("div");
                return T(i, "fancybox__toolbar"),
                t.prepend(i),
                i.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !0
                }),
                e && T(e, "has-toolbar"),
                this.container = i,
                i
            }
            createEl(e) {
                var t;
                const i = this.instance.carousel;
                if (!i)
                    return null;
                if ("toggleFS" === e)
                    return null;
                if ("fullscreen" === e && !this.instance.fsAPI)
                    return null;
                let o = null;
                const n = i.slides.length || 0;
                let s = 0
                  , a = 0;
                for (const e of i.slides)
                    (e.panzoom || "image" === e.type) && s++,
                    ("image" === e.type || e.downloadSrc) && a++;
                if (n < 2 && ["infobar", "prev", "next"].includes(e))
                    return o;
                if (void 0 !== ue[e] && !s)
                    return null;
                if ("download" === e && !a)
                    return null;
                if ("thumbs" === e) {
                    const e = this.instance.plugins.Thumbs;
                    if (!e || !e.isEnabled)
                        return null
                }
                if ("slideshow" === e && (!(null === (t = this.instance.carousel) || void 0 === t ? void 0 : t.plugins.Autoplay) || n < 2))
                    return null;
                if (void 0 !== ue[e]) {
                    const t = ue[e];
                    o = document.createElement("button"),
                    o.setAttribute("title", this.instance.localize(`{{${e.toUpperCase()}}}`)),
                    T(o, "f-button"),
                    t.action && (o.dataset.panzoomAction = t.action),
                    t.change && (o.dataset.panzoomChange = JSON.stringify(t.change)),
                    o.appendChild(r(this.instance.localize(t.icon)))
                } else {
                    const t = (this.option("items") || [])[e];
                    t && (o = r(this.instance.localize(t.tpl)),
                    "function" == typeof t.click && o.addEventListener("click", (e=>{
                        e.preventDefault(),
                        e.stopPropagation(),
                        "function" == typeof t.click && t.click.call(this, this, e)
                    }
                    )))
                }
                const c = null == o ? void 0 : o.querySelector("svg");
                if (c)
                    for (const [e,t] of Object.entries(pe))
                        c.getAttribute(e) || c.setAttribute(e, String(t));
                return o
            }
            removeContainer() {
                const e = this.container;
                e && e.remove(),
                this.container = null,
                this.state = he.Disabled;
                const t = this.instance.container;
                t && A(t, "has-toolbar")
            }
            attach() {
                const e = this
                  , t = e.instance;
                t.on("Carousel.initSlides", e.onReady),
                t.on("done", e.onDone),
                t.on("reveal", e.onChange),
                t.on("Carousel.change", e.onChange),
                e.onReady(e.instance)
            }
            detach() {
                const e = this
                  , t = e.instance;
                t.off("Carousel.initSlides", e.onReady),
                t.off("done", e.onDone),
                t.off("reveal", e.onChange),
                t.off("Carousel.change", e.onChange),
                e.removeContainer()
            }
        }
        Object.defineProperty(me, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
                absolute: "auto",
                display: {
                    left: ["infobar"],
                    middle: [],
                    right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
                },
                enabled: "auto",
                items: {
                    infobar: {
                        tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
                    },
                    download: {
                        tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
                    },
                    prev: {
                        tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
                    },
                    next: {
                        tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
                    },
                    slideshow: {
                        tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
                    },
                    fullscreen: {
                        tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
                    },
                    thumbs: {
                        tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
                    },
                    close: {
                        tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
                    }
                },
                parentEl: null
            }
        });
        const ge = {
            Hash: J,
            Html: oe,
            Images: ee,
            Slideshow: se,
            Thumbs: de,
            Toolbar: me
        }
          , fe = function() {
            var e = window.getSelection();
            return e && "Range" === e.type
        };
        let be = null
          , ve = null;
        const we = new Map;
        let ye = 0;
        class Se extends w {
            get isIdle() {
                return this.idle
            }
            get isCompact() {
                return this.option("compact")
            }
            constructor(e=[], t={}, i={}) {
                super(t),
                Object.defineProperty(this, "userSlides", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: []
                }),
                Object.defineProperty(this, "userPlugins", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: {}
                }),
                Object.defineProperty(this, "idle", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "idleTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "clickTimer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "pwt", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "ignoreFocusChange", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: !1
                }),
                Object.defineProperty(this, "state", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: $.Init
                }),
                Object.defineProperty(this, "id", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: 0
                }),
                Object.defineProperty(this, "container", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "footer", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "caption", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "carousel", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "lastFocus", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: null
                }),
                Object.defineProperty(this, "prevMouseMoveEvent", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                Object.defineProperty(this, "fsAPI", {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: void 0
                }),
                this.fsAPI = (()=>{
                    let e, t = "", i = "", o = "";
                    return document.fullscreenEnabled ? (t = "requestFullscreen",
                    i = "exitFullscreen",
                    o = "fullscreenElement") : document.webkitFullscreenEnabled && (t = "webkitRequestFullscreen",
                    i = "webkitExitFullscreen",
                    o = "webkitFullscreenElement"),
                    t && (e = {
                        request: function(e) {
                            return "webkitRequestFullscreen" === t ? e[t](Element.ALLOW_KEYBOARD_INPUT) : e[t]()
                        },
                        exit: function() {
                            return document[o] && document[i]()
                        },
                        isFullscreen: function() {
                            return document[o]
                        }
                    }),
                    e
                }
                )(),
                this.id = t.id || ++ye,
                we.set(this.id, this),
                this.userSlides = e,
                this.userPlugins = i,
                queueMicrotask((()=>{
                    this.init()
                }
                ))
            }
            init() {
                if (this.state === $.Destroy)
                    return;
                this.state = $.Init,
                this.attachPlugins(Object.assign(Object.assign({}, Se.Plugins), this.userPlugins)),
                this.emit("init"),
                !0 === this.option("hideScrollbar") && (()=>{
                    if (!X)
                        return;
                    const e = document.body;
                    if (e.classList.contains("hide-scrollbar"))
                        return;
                    let t = window.innerWidth - document.documentElement.getBoundingClientRect().width;
                    t < 0 && (t = 0);
                    const i = e.currentStyle || window.getComputedStyle(e)
                      , o = parseFloat(i.marginRight);
                    document.documentElement.style.setProperty("--fancybox-scrollbar-compensate", `${t}px`),
                    o && e.style.setProperty("--fancybox-body-margin", `${o}px`),
                    e.classList.add("hide-scrollbar")
                }
                )(),
                this.initLayout(),
                this.scale();
                const e = ()=>{
                    this.initCarousel(this.userSlides),
                    this.state = $.Ready,
                    this.attachEvents(),
                    this.emit("ready"),
                    setTimeout((()=>{
                        this.container && this.container.setAttribute("aria-hidden", "false")
                    }
                    ), 16)
                }
                  , t = this.fsAPI;
                this.option("Fullscreen.autoStart") && t && !t.isFullscreen() ? t.request(this.container).then((()=>e())).catch((()=>e())) : e()
            }
            initLayout() {
                var e, t;
                const i = this.option("parentEl") || document.body
                  , o = r(this.localize(this.option("tpl.main") || ""));
                o && (o.setAttribute("id", `fancybox-${this.id}`),
                o.setAttribute("aria-label", this.localize("{{MODAL}}")),
                o.classList.toggle("is-compact", this.isCompact),
                T(o, this.option("mainClass") || ""),
                this.container = o,
                this.footer = o.querySelector(".fancybox__footer"),
                i.appendChild(o),
                T(document.documentElement, "with-fancybox"),
                be && ve || (be = document.createElement("span"),
                T(be, "fancybox-focus-guard"),
                be.setAttribute("tabindex", "0"),
                be.setAttribute("aria-hidden", "true"),
                be.setAttribute("aria-label", "Focus guard"),
                ve = be.cloneNode(),
                null === (e = o.parentElement) || void 0 === e || e.insertBefore(be, o),
                null === (t = o.parentElement) || void 0 === t || t.append(ve)),
                this.option("animated") && (T(o, "is-animated"),
                setTimeout((()=>{
                    this.isClosing() || A(o, "is-animated")
                }
                ), 350)),
                this.emit("initLayout"))
            }
            initCarousel(e) {
                const t = this.container;
                if (!t)
                    return;
                const i = t.querySelector(".fancybox__carousel");
                if (!i)
                    return;
                const o = this.carousel = new B(i,f({}, {
                    slides: e,
                    transition: "fade",
                    Panzoom: {
                        lockAxis: this.option("dragToClose") ? "xy" : "x",
                        infinite: !!this.option("dragToClose") && "y"
                    },
                    Dots: !1,
                    Navigation: {
                        classes: {
                            container: "fancybox__nav",
                            button: "f-button",
                            isNext: "is-next",
                            isPrev: "is-prev"
                        }
                    },
                    initialPage: this.option("startIndex"),
                    l10n: this.option("l10n")
                }, this.option("Carousel") || {}));
                o.on("*", ((e,t,...i)=>{
                    this.emit(`Carousel.${t}`, e, ...i)
                }
                )),
                o.on(["ready", "change"], (()=>{
                    var e;
                    const t = this.getSlide();
                    t && (null === (e = t.panzoom) || void 0 === e || e.updateControls()),
                    this.manageCaption(t)
                }
                )),
                o.on("removeSlide", ((e,t)=>{
                    t.closeBtnEl && t.closeBtnEl.remove(),
                    t.closeBtnEl = void 0,
                    t.captionEl && t.captionEl.remove(),
                    t.captionEl = void 0,
                    t.spinnerEl && t.spinnerEl.remove(),
                    t.spinnerEl = void 0,
                    t.state = void 0
                }
                )),
                o.on("Panzoom.touchStart", (()=>{
                    this.isCompact || this.endIdle()
                }
                )),
                o.on("settle", (()=>{
                    this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(),
                    this.option("autoFocus") && this.checkFocus()
                }
                )),
                this.option("dragToClose") && (o.on("Panzoom.afterTransform", ((e,t)=>{
                    const i = this.getSlide();
                    if (i && s(i.el))
                        return;
                    const o = this.container;
                    if (o) {
                        const e = Math.abs(t.current.f)
                          , i = e < 1 ? "" : Math.max(.5, Math.min(1, 1 - e / t.contentRect.fitHeight * 1.5));
                        o.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                        o.style.setProperty("--fancybox-opacity", i + "")
                    }
                }
                )),
                o.on("Panzoom.touchEnd", ((e,t,i)=>{
                    var o;
                    const n = this.getSlide();
                    if (n && s(n.el))
                        return;
                    if (t.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (o = document.activeElement) || void 0 === o ? void 0 : o.nodeName))
                        return;
                    const a = Math.abs(t.dragOffset.y);
                    "y" === t.lockedAxis && (a >= 200 || a >= 50 && t.dragOffset.time < 300) && (i && i.cancelable && i.preventDefault(),
                    this.close(i, "f-throwOut" + (t.current.f < 0 ? "Up" : "Down")))
                }
                ))),
                o.on(["change"], (e=>{
                    var t;
                    let i = null === (t = this.getSlide()) || void 0 === t ? void 0 : t.triggerEl;
                    if (i) {
                        const t = new CustomEvent("slideTo",{
                            bubbles: !0,
                            cancelable: !0,
                            detail: e.page
                        });
                        i.dispatchEvent(t)
                    }
                }
                )),
                o.on(["refresh", "change"], (e=>{
                    const t = this.container;
                    if (!t)
                        return;
                    for (const i of t.querySelectorAll("[data-fancybox-current-index]"))
                        i.innerHTML = e.page + 1;
                    for (const i of t.querySelectorAll("[data-fancybox-count]"))
                        i.innerHTML = e.pages.length;
                    if (!e.isInfinite) {
                        for (const i of t.querySelectorAll("[data-fancybox-next]"))
                            e.page < e.pages.length - 1 ? (i.removeAttribute("disabled"),
                            i.removeAttribute("tabindex")) : (i.setAttribute("disabled", ""),
                            i.setAttribute("tabindex", "-1"));
                        for (const i of t.querySelectorAll("[data-fancybox-prev]"))
                            e.page > 0 ? (i.removeAttribute("disabled"),
                            i.removeAttribute("tabindex")) : (i.setAttribute("disabled", ""),
                            i.setAttribute("tabindex", "-1"))
                    }
                    const i = this.getSlide();
                    if (!i)
                        return;
                    let o = i.downloadSrc || "";
                    o || "image" !== i.type || i.error || "string" != typeof i.src || (o = i.src);
                    for (const e of t.querySelectorAll("[data-fancybox-download]")) {
                        const t = i.downloadFilename;
                        o ? (e.removeAttribute("disabled"),
                        e.removeAttribute("tabindex"),
                        e.setAttribute("href", o),
                        e.setAttribute("download", t || o),
                        e.setAttribute("target", "_blank")) : (e.setAttribute("disabled", ""),
                        e.setAttribute("tabindex", "-1"),
                        e.removeAttribute("href"),
                        e.removeAttribute("download"))
                    }
                }
                )),
                this.emit("initCarousel")
            }
            attachEvents() {
                const e = this.container;
                if (!e)
                    return;
                e.addEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }),
                e.addEventListener("wheel", this.onWheel, {
                    passive: !1,
                    capture: !1
                }),
                document.addEventListener("keydown", this.onKeydown, {
                    passive: !1,
                    capture: !0
                }),
                document.addEventListener("visibilitychange", this.onVisibilityChange, !1),
                document.addEventListener("mousemove", this.onMousemove),
                this.option("trapFocus") && document.addEventListener("focus", this.onFocus, !0),
                window.addEventListener("resize", this.onResize);
                const t = window.visualViewport;
                t && (t.addEventListener("scroll", this.onResize),
                t.addEventListener("resize", this.onResize))
            }
            detachEvents() {
                const e = this.container;
                if (!e)
                    return;
                document.removeEventListener("keydown", this.onKeydown, {
                    passive: !1,
                    capture: !0
                }),
                e.removeEventListener("wheel", this.onWheel, {
                    passive: !1,
                    capture: !1
                }),
                e.removeEventListener("click", this.onClick, {
                    passive: !1,
                    capture: !1
                }),
                document.removeEventListener("mousemove", this.onMousemove),
                window.removeEventListener("resize", this.onResize);
                const t = window.visualViewport;
                t && (t.removeEventListener("resize", this.onResize),
                t.removeEventListener("scroll", this.onResize)),
                document.removeEventListener("visibilitychange", this.onVisibilityChange, !1),
                document.removeEventListener("focus", this.onFocus, !0)
            }
            scale() {
                const e = this.container;
                if (!e)
                    return;
                const t = window.visualViewport
                  , i = Math.max(1, (null == t ? void 0 : t.scale) || 1);
                let o = ""
                  , n = ""
                  , s = "";
                if (t && i > 1) {
                    let e = `${t.offsetLeft}px`
                      , a = `${t.offsetTop}px`;
                    o = t.width * i + "px",
                    n = t.height * i + "px",
                    s = `translate3d(${e}, ${a}, 0) scale(${1 / i})`
                }
                e.style.transform = s,
                e.style.width = o,
                e.style.height = n
            }
            onClick(e) {
                var t, i;
                const {container: o, isCompact: n} = this;
                if (!o || this.isClosing())
                    return;
                !n && this.option("idle") && this.resetIdle();
                const s = document.activeElement;
                if (fe() && s && o.contains(s))
                    return;
                const a = e.composedPath()[0];
                if (a === (null === (t = this.carousel) || void 0 === t ? void 0 : t.container))
                    return;
                if (a.closest(".f-spinner") || a.closest("[data-fancybox-close]"))
                    return e.preventDefault(),
                    void this.close(e);
                if (a.closest("[data-fancybox-prev]"))
                    return e.preventDefault(),
                    void this.prev();
                if (a.closest("[data-fancybox-next]"))
                    return e.preventDefault(),
                    void this.next();
                if (n && "image" === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.type))
                    return void (this.clickTimer ? (clearTimeout(this.clickTimer),
                    this.clickTimer = null) : this.clickTimer = setTimeout((()=>{
                        this.toggleIdle(),
                        this.clickTimer = null
                    }
                    ), 350));
                if (this.emit("click", e),
                e.defaultPrevented)
                    return;
                let r = !1;
                if (a.closest(".fancybox__content")) {
                    if (s) {
                        if (s.closest("[contenteditable]"))
                            return;
                        a.matches(W) || s.blur()
                    }
                    if (fe())
                        return;
                    r = this.option("contentClick")
                } else
                    a.closest(".fancybox__carousel") && !a.matches(W) && (r = this.option("backdropClick"));
                "close" === r ? (e.preventDefault(),
                this.close(e)) : "next" === r ? (e.preventDefault(),
                this.next()) : "prev" === r && (e.preventDefault(),
                this.prev())
            }
            onWheel(e) {
                const t = this.option("wheel", e)
                  , i = "slide" === t
                  , o = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce((function(e, t) {
                    return Math.abs(t) > Math.abs(e) ? t : e
                }
                ))
                  , n = Math.max(-1, Math.min(1, o))
                  , s = Date.now();
                this.pwt && s - this.pwt < 300 ? i && e.preventDefault() : (this.pwt = s,
                this.emit("wheel", e),
                e.defaultPrevented || ("close" === t ? (e.preventDefault(),
                this.close(e)) : "slide" === t && (e.preventDefault(),
                this[n > 0 ? "prev" : "next"]())))
            }
            onKeydown(e) {
                if (!this.isTopmost())
                    return;
                this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
                const t = e.key
                  , i = this.option("keyboard");
                if (!i || e.ctrlKey || e.altKey || e.shiftKey)
                    return;
                const o = e.composedPath()[0]
                  , n = document.activeElement && document.activeElement.classList
                  , s = n && n.contains("f-button") || o.dataset.carouselPage || o.dataset.carouselIndex;
                if ("Escape" !== t && !s && k(o) && (o.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o.nodeName)))
                    return;
                this.emit("keydown", t, e);
                const a = i[t];
                "function" == typeof this[a] && (e.preventDefault(),
                this[a]())
            }
            onResize() {
                const e = this.container;
                if (!e)
                    return;
                const t = this.isCompact;
                e.classList.toggle("is-compact", t),
                this.manageCaption(this.getSlide()),
                this.isCompact ? this.clearIdle() : this.endIdle(),
                this.scale(),
                this.emit("resize")
            }
            onFocus(e) {
                this.isTopmost() && this.checkFocus(e)
            }
            onMousemove(e) {
                this.prevMouseMoveEvent = e,
                !this.isCompact && this.option("idle") && this.resetIdle()
            }
            onVisibilityChange() {
                "visible" === document.visibilityState ? this.checkFocus() : this.endIdle()
            }
            manageCloseBtn(e) {
                const t = this.optionFor(e, "closeButton") || !1;
                if ("auto" === t) {
                    const e = this.plugins.Toolbar;
                    if (e && e.state === he.Ready)
                        return
                }
                if (!t)
                    return;
                if (!e.contentEl || e.closeBtnEl)
                    return;
                const i = this.option("tpl.closeButton");
                if (i) {
                    const t = r(this.localize(i));
                    e.closeBtnEl = e.contentEl.appendChild(t),
                    e.el && T(e.el, "has-close-btn")
                }
            }
            manageCaption(e) {
                var t, i;
                const o = "fancybox__caption"
                  , n = "has-caption"
                  , s = this.container;
                if (!s)
                    return;
                const a = this.isCompact || this.option("commonCaption")
                  , r = !a;
                if (this.caption && this.stop(this.caption),
                r && this.caption && (this.caption.remove(),
                this.caption = null),
                a && !this.caption)
                    for (const e of (null === (t = this.carousel) || void 0 === t ? void 0 : t.slides) || [])
                        e.captionEl && (e.captionEl.remove(),
                        e.captionEl = void 0,
                        A(e.el, n),
                        null === (i = e.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
                if (e || (e = this.getSlide()),
                !e || a && !this.isCurrentSlide(e))
                    return;
                const c = e.el;
                let l = this.optionFor(e, "caption", "");
                if ("string" != typeof l || !l.length)
                    return void (a && this.caption && this.animate(this.caption, "f-fadeOut", (()=>{
                        var e;
                        null === (e = this.caption) || void 0 === e || e.remove(),
                        this.caption = null
                    }
                    )));
                let d = null;
                if (r) {
                    if (d = e.captionEl || null,
                    c && !d) {
                        const t = `fancybox__caption_${this.id}_${e.index}`;
                        d = document.createElement("div"),
                        T(d, o),
                        d.setAttribute("id", t),
                        e.captionEl = c.appendChild(d),
                        T(c, n),
                        c.setAttribute("aria-labelledby", t)
                    }
                } else
                    d = this.caption,
                    d || (d = s.querySelector("." + o)),
                    d || (d = document.createElement("div"),
                    d.dataset.fancyboxCaption = "",
                    T(d, o),
                    d.innerHTML = l,
                    (this.footer || s).prepend(d)),
                    T(s, n),
                    this.caption = d;
                d && (d.innerHTML = l)
            }
            checkFocus(e) {
                var t;
                const i = document.activeElement || null;
                i && (null === (t = this.container) || void 0 === t ? void 0 : t.contains(i)) || this.focus(e)
            }
            focus(e) {
                var t;
                if (this.ignoreFocusChange)
                    return;
                const i = document.activeElement || null
                  , o = (null == e ? void 0 : e.target) || null
                  , n = this.container
                  , s = this.getSlide();
                if (!n || !(null === (t = this.carousel) || void 0 === t ? void 0 : t.viewport))
                    return;
                if (!e && i && n.contains(i))
                    return;
                const a = s && s.state === K.Ready ? s.el : null;
                if (!a || a.contains(i) || n === i)
                    return;
                e && e.cancelable && e.preventDefault(),
                this.ignoreFocusChange = !0;
                const r = Array.from(n.querySelectorAll(W));
                let c = []
                  , l = null;
                for (let e of r) {
                    const t = !e.offsetParent || e.closest('[aria-hidden="true"]')
                      , i = a && a.contains(e)
                      , o = !this.carousel.viewport.contains(e);
                    e === n || (i || o) && !t ? (c.push(e),
                    void 0 !== e.dataset.origTabindex && (e.tabIndex = parseFloat(e.dataset.origTabindex)),
                    e.removeAttribute("data-orig-tabindex"),
                    !e.hasAttribute("autoFocus") && l || (l = e)) : (e.dataset.origTabindex = void 0 === e.dataset.origTabindex ? e.getAttribute("tabindex") || void 0 : e.dataset.origTabindex,
                    e.tabIndex = -1)
                }
                let d = null;
                e ? (!o || c.indexOf(o) < 0) && (d = l || n,
                c.length && (i === ve ? d = c[0] : this.lastFocus !== n && i !== be || (d = c[c.length - 1]))) : d = s && "image" === s.type ? n : l || n,
                d && V(d),
                this.lastFocus = document.activeElement,
                this.ignoreFocusChange = !1
            }
            next() {
                const e = this.carousel;
                e && e.pages.length > 1 && e.slideNext()
            }
            prev() {
                const e = this.carousel;
                e && e.pages.length > 1 && e.slidePrev()
            }
            jumpTo(...e) {
                this.carousel && this.carousel.slideTo(...e)
            }
            isTopmost() {
                var e;
                return (null === (e = Se.getInstance()) || void 0 === e ? void 0 : e.id) == this.id
            }
            animate(e=null, t="", i) {
                if (!e || !t)
                    return void (i && i());
                this.stop(e);
                const o = n=>{
                    n.target === e && e.dataset.animationName && (e.removeEventListener("animationend", o),
                    delete e.dataset.animationName,
                    i && i(),
                    A(e, t))
                }
                ;
                e.dataset.animationName = t,
                e.addEventListener("animationend", o),
                T(e, t)
            }
            stop(e) {
                e && e.dispatchEvent(new CustomEvent("animationend",{
                    bubbles: !1,
                    cancelable: !0,
                    currentTarget: e
                }))
            }
            setContent(e, t="", i=!0) {
                if (this.isClosing())
                    return;
                const o = e.el;
                if (!o)
                    return;
                let n = null;
                if (k(t) ? n = t : (n = r(t + ""),
                k(n) || (n = document.createElement("div"),
                n.innerHTML = t + "")),
                ["img", "picture", "iframe", "video", "audio"].includes(n.nodeName.toLowerCase())) {
                    const e = document.createElement("div");
                    e.appendChild(n),
                    n = e
                }
                k(n) && e.filter && !e.error && (n = n.querySelector(e.filter)),
                n && k(n) ? (T(n, "fancybox__content"),
                e.id && n.setAttribute("id", e.id),
                "none" !== n.style.display && "none" !== getComputedStyle(n).getPropertyValue("display") || (n.style.display = e.display || this.option("defaultDisplay") || "flex"),
                o.classList.add(`has-${e.error ? "error" : e.type || "unknown"}`),
                o.prepend(n),
                e.contentEl = n,
                i && this.revealContent(e),
                this.manageCloseBtn(e),
                this.manageCaption(e)) : this.setError(e, "{{ELEMENT_NOT_FOUND}}")
            }
            revealContent(e, t) {
                const i = e.el
                  , o = e.contentEl;
                i && o && (this.emit("reveal", e),
                this.hideLoading(e),
                e.state = K.Opening,
                (t = this.isOpeningSlide(e) ? void 0 === t ? this.optionFor(e, "showClass") : t : "f-fadeIn") ? this.animate(o, t, (()=>{
                    this.done(e)
                }
                )) : this.done(e))
            }
            done(e) {
                this.isClosing() || (e.state = K.Ready,
                this.emit("done", e),
                T(e.el, "is-done"),
                this.isCurrentSlide(e) && this.option("autoFocus") && queueMicrotask((()=>{
                    this.option("autoFocus") && (this.option("autoFocus") ? this.focus() : this.checkFocus())
                }
                )),
                this.isOpeningSlide(e) && !this.isCompact && this.option("idle") && this.setIdle())
            }
            isCurrentSlide(e) {
                const t = this.getSlide();
                return !(!e || !t) && t.index === e.index
            }
            isOpeningSlide(e) {
                var t, i;
                return null === (null === (t = this.carousel) || void 0 === t ? void 0 : t.prevPage) && e.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
            }
            showLoading(e) {
                e.state = K.Loading;
                const t = e.el;
                t && (T(t, "is-loading"),
                this.emit("loading", e),
                e.spinnerEl || setTimeout((()=>{
                    if (!this.isClosing() && !e.spinnerEl && e.state === K.Loading) {
                        let i = r(E);
                        e.spinnerEl = i,
                        t.prepend(i),
                        this.animate(i, "f-fadeIn")
                    }
                }
                ), 250))
            }
            hideLoading(e) {
                const t = e.el;
                if (!t)
                    return;
                const i = e.spinnerEl;
                this.isClosing() ? null == i || i.remove() : (A(t, "is-loading"),
                i && this.animate(i, "f-fadeOut", (()=>{
                    i.remove()
                }
                )),
                e.state === K.Loading && (this.emit("loaded", e),
                e.state = K.Ready))
            }
            setError(e, t) {
                if (this.isClosing())
                    return;
                this.emit("error"),
                e.error = t,
                this.hideLoading(e),
                this.clearContent(e);
                const i = document.createElement("div");
                i.classList.add("fancybox-error"),
                i.innerHTML = this.localize(t || "<p>{{ERROR}}</p>"),
                this.setContent(e, i)
            }
            clearContent(e) {
                var t;
                null === (t = this.carousel) || void 0 === t || t.emit("removeSlide", e),
                e.contentEl && (e.contentEl.remove(),
                e.contentEl = void 0),
                e.closeBtnEl && (e.closeBtnEl.remove(),
                e.closeBtnEl = void 0);
                const i = e.el;
                i && (A(i, "is-loading"),
                A(i, "has-error"),
                A(i, "has-unknown"),
                A(i, `has-${e.type || "unknown"}`))
            }
            getSlide() {
                var e;
                const t = this.carousel;
                return (null === (e = null == t ? void 0 : t.pages[null == t ? void 0 : t.page]) || void 0 === e ? void 0 : e.slides[0]) || void 0
            }
            close(e, t) {
                if (this.isClosing())
                    return;
                const i = new Event("shouldClose",{
                    bubbles: !0,
                    cancelable: !0
                });
                if (this.emit("shouldClose", i, e),
                i.defaultPrevented)
                    return;
                e && e.cancelable && (e.preventDefault(),
                e.stopPropagation());
                const o = this.fsAPI
                  , n = ()=>{
                    this.proceedClose(e, t)
                }
                ;
                o && o.isFullscreen() ? Promise.resolve(o.exit()).then((()=>n())) : n()
            }
            clearIdle() {
                this.idleTimer && clearTimeout(this.idleTimer),
                this.idleTimer = null
            }
            setIdle(e=!1) {
                const t = ()=>{
                    this.clearIdle(),
                    this.idle = !0,
                    T(this.container, "is-idle"),
                    this.emit("setIdle")
                }
                ;
                if (this.clearIdle(),
                !this.isClosing())
                    if (e)
                        t();
                    else {
                        const e = this.option("idle");
                        e && (this.idleTimer = setTimeout(t, e))
                    }
            }
            endIdle() {
                this.clearIdle(),
                this.idle && !this.isClosing() && (this.idle = !1,
                A(this.container, "is-idle"),
                this.emit("endIdle"))
            }
            resetIdle() {
                this.endIdle(),
                this.setIdle()
            }
            toggleIdle() {
                this.idle ? this.endIdle() : this.setIdle(!0)
            }
            toggleFullscreen() {
                const e = this.fsAPI;
                e && (e.isFullscreen() ? e.exit() : this.container && e.request(this.container))
            }
            isClosing() {
                return [$.Closing, $.CustomClosing, $.Destroy].includes(this.state)
            }
            proceedClose(e, t) {
                var i, o;
                this.state = $.Closing,
                this.clearIdle(),
                this.detachEvents();
                const n = this.container
                  , s = this.carousel
                  , a = this.getSlide()
                  , r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("trigger") : null;
                if (r && (H(r) ? V(r) : r.focus()),
                n && (T(n, "is-closing"),
                n.setAttribute("aria-hidden", "true"),
                this.option("animated") && T(n, "is-animated"),
                n.style.pointerEvents = "none"),
                s) {
                    s.clearTransitions(),
                    null === (i = s.panzoom) || void 0 === i || i.destroy(),
                    null === (o = s.plugins.Navigation) || void 0 === o || o.detach();
                    for (const e of s.slides) {
                        e.state = K.Closing,
                        this.hideLoading(e);
                        const t = e.contentEl;
                        t && this.stop(t);
                        const i = null == e ? void 0 : e.panzoom;
                        i && (i.stop(),
                        i.detachEvents(),
                        i.detachObserver()),
                        this.isCurrentSlide(e) || s.emit("removeSlide", e)
                    }
                }
                this.emit("close", e),
                this.state !== $.CustomClosing ? (void 0 === t && a && (t = this.optionFor(a, "hideClass")),
                t && a ? (this.animate(a.contentEl, t, (()=>{
                    s && s.emit("removeSlide", a)
                }
                )),
                setTimeout((()=>{
                    this.destroy()
                }
                ), 500)) : this.destroy()) : setTimeout((()=>{
                    this.destroy()
                }
                ), 500)
            }
            destroy() {
                var e;
                if (this.state === $.Destroy)
                    return;
                this.state = $.Destroy,
                null === (e = this.carousel) || void 0 === e || e.destroy();
                const t = this.container;
                t && t.remove(),
                we.delete(this.id);
                const i = Se.getInstance();
                i ? i.focus() : (be && (be.remove(),
                be = null),
                ve && (ve.remove(),
                ve = null),
                A(document.documentElement, "with-fancybox"),
                (()=>{
                    if (!X)
                        return;
                    const e = document
                      , t = e.body;
                    t.classList.remove("hide-scrollbar"),
                    t.style.setProperty("--fancybox-body-margin", ""),
                    e.documentElement.style.setProperty("--fancybox-scrollbar-compensate", "")
                }
                )(),
                this.emit("destroy"))
            }
            static bind(e, t, i) {
                if (!X)
                    return;
                let o, n = "", s = {};
                if (void 0 === e ? o = document.body : "string" == typeof e ? (o = document.body,
                n = e,
                "object" == typeof t && (s = t || {})) : (o = e,
                "string" == typeof t && (n = t),
                "object" == typeof i && (s = i || {})),
                !o || !k(o))
                    return;
                n = n || "[data-fancybox]";
                const a = Se.openers.get(o) || new Map;
                a.set(n, s),
                Se.openers.set(o, a),
                1 === a.size && o.addEventListener("click", Se.fromEvent)
            }
            static unbind(e, t) {
                let i, o = "";
                if ("string" == typeof e ? (i = document.body,
                o = e) : (i = e,
                "string" == typeof t && (o = t)),
                !i)
                    return;
                const n = Se.openers.get(i);
                n && o && n.delete(o),
                o && n || (Se.openers.delete(i),
                i.removeEventListener("click", Se.fromEvent))
            }
            static destroy() {
                let e;
                for (; e = Se.getInstance(); )
                    e.destroy();
                for (const e of Se.openers.keys())
                    e.removeEventListener("click", Se.fromEvent);
                Se.openers = new Map
            }
            static fromEvent(e) {
                if (e.defaultPrevented)
                    return;
                if (e.button && 0 !== e.button)
                    return;
                if (e.ctrlKey || e.metaKey || e.shiftKey)
                    return;
                let t = e.composedPath()[0];
                const i = t.closest("[data-fancybox-trigger]");
                if (i) {
                    const e = i.dataset.fancyboxTrigger || ""
                      , o = document.querySelectorAll(`[data-fancybox="${e}"]`)
                      , n = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
                    t = o[n] || t
                }
                if (!(t && t instanceof Element))
                    return;
                let o, n, s, a;
                if ([...Se.openers].reverse().find((([e,i])=>!(!e.contains(t) || ![...i].reverse().find((([i,r])=>{
                    let c = t.closest(i);
                    return !!c && (o = e,
                    n = i,
                    s = c,
                    a = r,
                    !0)
                }
                ))))),
                !o || !n || !s)
                    return;
                a = a || {},
                e.preventDefault(),
                t = s;
                let r = []
                  , c = f({}, Y, a);
                c.event = e,
                c.trigger = t,
                c.delegate = i;
                const l = c.groupAll
                  , d = c.groupAttr
                  , u = d && t ? t.getAttribute(`${d}`) : "";
                if ((!t || u || l) && (r = [].slice.call(o.querySelectorAll(n))),
                t && !l && (r = u ? r.filter((e=>e.getAttribute(`${d}`) === u)) : [t]),
                !r.length)
                    return;
                const h = Se.getInstance();
                return h && h.options.trigger && r.indexOf(h.options.trigger) > -1 ? void 0 : (t && (c.startIndex = r.indexOf(t)),
                Se.fromNodes(r, c))
            }
            static fromSelector(e, t) {
                let i = null
                  , o = "";
                if ("string" == typeof e ? (i = document.body,
                o = e) : e instanceof HTMLElement && "string" == typeof t && (i = e,
                o = t),
                !i || !o)
                    return !1;
                const n = Se.openers.get(i);
                if (!n)
                    return !1;
                const s = n.get(o);
                return !!s && Se.fromNodes(Array.from(i.querySelectorAll(o)), s)
            }
            static fromNodes(e, t) {
                t = f({}, Y, t || {});
                const i = [];
                for (const o of e) {
                    const e = o.dataset || {}
                      , n = e.src || o.getAttribute("href") || o.getAttribute("currentSrc") || o.getAttribute("src") || void 0;
                    let s;
                    const a = t.delegate;
                    let r;
                    a && i.length === t.startIndex && (s = a instanceof HTMLImageElement ? a : a.querySelector("img:not([aria-hidden])")),
                    s || (s = o instanceof HTMLImageElement ? o : o.querySelector("img:not([aria-hidden])")),
                    s && (r = s.currentSrc || s.src || void 0,
                    !r && s.dataset && (r = s.dataset.lazySrc || s.dataset.src || void 0));
                    const c = {
                        src: n,
                        triggerEl: o,
                        thumbEl: s,
                        thumbElSrc: r,
                        thumbSrc: r
                    };
                    for (const t in e)
                        "fancybox" !== t && (c[t] = e[t] + "");
                    i.push(c)
                }
                return new Se(i,t)
            }
            static getInstance(e) {
                return e ? we.get(e) : Array.from(we.values()).reverse().find((e=>!e.isClosing() && e)) || null
            }
            static getSlide() {
                var e;
                return (null === (e = Se.getInstance()) || void 0 === e ? void 0 : e.getSlide()) || null
            }
            static show(e=[], t={}) {
                return new Se(e,t)
            }
            static next() {
                const e = Se.getInstance();
                e && e.next()
            }
            static prev() {
                const e = Se.getInstance();
                e && e.prev()
            }
            static close(e=!0, ...t) {
                if (e)
                    for (const e of we.values())
                        e.close(...t);
                else {
                    const e = Se.getInstance();
                    e && e.close(...t)
                }
            }
        }
        function xe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, o = new Array(t); i < t; i++)
                o[i] = e[i];
            return o
        }
        Object.defineProperty(Se, "version", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "5.0.17"
        }),
        Object.defineProperty(Se, "defaults", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Y
        }),
        Object.defineProperty(Se, "Plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ge
        }),
        Object.defineProperty(Se, "openers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map
        }),
        i(8662),
        i(1951),
        i(3778),
        i(3017),
        i(4585),
        i(4050),
        i(4913),
        i(5094),
        i(7),
        i(4276),
        i(7182),
        i(3919),
        i(3659),
        i(1832),
        i(3934),
        i(7924),
        i(3567),
        i(2949),
        i(9568),
        i(8283),
        i(5205),
        i(6565),
        i(7981),
        i(1484),
        i(5345),
        i(7638),
        i(7646),
        i(293),
        i(4814),
        i(792),
        i(81),
        i(6e3),
        i(317),
        i(3754),
        i(9244),
        i(7824),
        i(9595),
        i(3305),
        i(6150),
        i(1726),
        i(2396),
        i(5154),
        i(2813),
        i(7772),
        i(6365),
        i(3343),
        i(4786),
        i(5012),
        i(5988),
        i(7440),
        i(2004),
        i(6653),
        i(8995),
        i(2973),
        i(1521),
        i(2255),
        i(2503),
        i(6271),
        i(1004),
        i(3902),
        i(4980),
        i(289),
        i(6939),
        i(9017),
        i(6812),
        i(846),
        i(8922),
        i(6729),
        i(6014),
        i(6035),
        i(8667),
        i(5641),
        i(3126),
        i(9149),
        i(2427),
        i(4218),
        i(2273),
        i(1724),
        i(755),
        i(1537),
        i(5402),
        i(4702),
        i(4955),
        i(7013),
        i(6967),
        i(7201),
        i(8627),
        i(7666),
        i(9931),
        i(2759),
        i(8811),
        i(6106),
        i(5203),
        i(6291),
        i(3069),
        i(1008),
        i(718),
        i(3297),
        i(5896),
        i(7880),
        i(9639),
        Se.bind("[data-fancybox]", {});
        var _e, Ee = document.querySelector(".loader"), ke = document.querySelector(".loader__percentage"), Ae = document.querySelector(".loader__line"), Te = 0, Ce = 0, Pe = setInterval((function() {
            ke.innerHTML = "".concat(Ce, "%"),
            Ae.style.width = "".concat(Ce, "%"),
            Te++,
            Ce++,
            101 === Te && (clearInterval(Pe),
            Ee.classList.add("loader--fade"),
            setTimeout((function() {
                Ee.classList.add("loader--none")
            }
            ), 1500))
        }
        ), 10), Oe = function() {
            var e = document.querySelector(".navigation__nav")
              , t = document.querySelector(".navigation__checkbox");
            t.checked && (t.checked = !1),
            window.innerWidth < 600 && (e.style.display = "none",
            setTimeout((function() {
                e.style.display = "block"
            }
            ), 200))
        }, Me = null == (_e = new RegExp("[?&]lang=([^&#]*)").exec(window.location.href)) ? null : decodeURI(_e[1]) || 0, Ie = o.Z.get("lang");
        if (Me && Ie)
            Me !== Ie && o.Z.set("lang", Me);
        else if (Me && !Ie)
            o.Z.set("lang", Me);
        else if (Ie || Me) {
            if (null === Me && Ie) {
                var Le = new URLSearchParams(window.location.search);
                Le.set("lang", Ie),
                window.location.search = Le
            }
        } else
            o.Z.set("lang", "en");
        var je = document.querySelector(".eflags__selected")
          , Re = document.querySelector(".eflags__nav")
          , Ne = document.querySelector(".eflags");
        je.addEventListener("click", (function(e) {
            Re.classList.toggle("eflags__nav--animateLeft")
        }
        )),
        document.body.addEventListener("mousedown", (function(e) {
            !Ne.contains(e.target) && Re.classList.contains("eflags__nav--animateLeft") && Re.classList.toggle("eflags__nav--animateLeft")
        }
        )),
        document.querySelectorAll(".eflags__nav a").forEach((function(e) {
            e.addEventListener("click", (function(e) {
                e.preventDefault();
                var t = e.target.getAttribute("data-country");
                o.Z.set("lang", t),
                window.location.replace("index.html?lang=" + t)
            }
            ))
        }
        )),
        document.documentElement.classList.remove("no-js");
        var ze, De, Ge = document.querySelectorAll(".imagegroup__video");
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && Ge.forEach((function() {
            Ge.src = "#"
        }
        )),
        document.querySelector("html").classList.contains("webp") && document.querySelectorAll('[data-fancybox="media"]').forEach((function(e) {
            De = e.dataset.srcset.replace(/jpg/g, "webp").trim(),
            ze = e.dataset.src.replace("jpg", "webp"),
            e.dataset.srcset = De,
            e.dataset.src = ze
        }
        ));
        var Fe = document.querySelectorAll(".btn--nav, .navigation__link, .hero__purchase, .btn--nav--plus")
          , qe = document.querySelector(".navigation__checkbox");
        Fe.forEach((function(e) {
            e.addEventListener("click", (function(e) {
                if (e.preventDefault(),
                qe.checked = !1,
                !e.target.parentNode.classList.contains("navigation__newsletter") && !e.target.classList.contains("navigation__newsletter")) {
                    var t, i = (t = void 0 === e.target.href ? e.target.parentNode.href : e.target.href).indexOf("#"), o = t.substr(i + 1);
                    document.getElementById(o).scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "start"
                    })
                }
            }
            ))
        }
        )),
        window.addEventListener("resize", (function() {
            Oe()
        }
        ), !0),
        Oe();
        var Be = new Siema({
            perPage: {
                1: 1,
                768: 2
            },
            loop: !0,
            duration: 400,
            selector: ".siema1",
            draggable: !1
        })
          , He = document.querySelector(".prev1")
          , Xe = document.querySelector(".next1");
        function Ue() {
            document.querySelector(".univnavigation__link .newsletterText").click()
        }
        He.addEventListener("click", (function() {
            Be.prev(1)
        }
        )),
        Xe.addEventListener("click", (function() {
            Be.next(1)
        }
        ));
        var We = document.querySelector(".footer__newsletterButton")
          , Ve = document.querySelectorAll(".openNewsletter");
        window.addEventListener("load", (function() {
            var e;
            (e = Ve,
            function(e) {
                if (Array.isArray(e))
                    return xe(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || function(e, t) {
                if (e) {
                    if ("string" == typeof e)
                        return xe(e, t);
                    var i = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === i && e.constructor && (i = e.constructor.name),
                    "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? xe(e, t) : void 0
                }
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()).forEach((function(e) {
                e.addEventListener("click", (function() {
                    Ue()
                }
                ))
            }
            )),
            We.addEventListener("click", (function() {
                Ue()
            }
            ))
        }
        ));
        var Ye = function() {
            (void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop) > 46 ? (document.querySelector(".navigation").style.position = "fixed",
            document.querySelector(".navigation").style.top = "0") : (document.querySelector(".navigation").style.position = "relative",
            document.querySelector(".navigation").style.top = "initial")
        };
        window.onscroll = function() {
            Ye()
        }
        ,
        Ye();
        var $e = document.getElementById("modal")
          , Ke = document.querySelector(".modal__container");
        document.querySelector(".steam__info").addEventListener("click", (function(e) {
            e.preventDefault(),
            $e.style.display = "block"
        }
        )),
        $e.addEventListener("click", (function(e) {
            Ke.contains(e.target) || ($e.style.display = "none")
        }
        ))
    },
    3997: function(e, t, i) {
        var o, n, s, a, r, c, l, d, u, h = i(1955), p = i(1008), m = i(718), g = i(4289), f = i(1414), b = i(2635), v = i(3700), w = i(2202), y = i(7156), S = i(4424), x = i(6313), _ = i(6158), E = i(3148), k = i(6885), A = i(7644), T = i(4583), C = i(5555), P = i(6894), O = i(7837), M = i(9912), I = i(8748), L = i(3947), j = i(7595), R = i(8905), N = i(8798), z = i(6027), D = i(3094), G = i(6630), F = i(7345), q = i(7659), B = i(9476), H = i(30), X = i(2014), U = i(6374), W = i(2706), V = i(7844), Y = i(5536), $ = i(9500), K = i(7170), Z = i(3059), J = i(2573), Q = i(724), ee = i(1754), te = i(696), ie = i(795), oe = i(3109), ne = i(9858), se = i(9800), ae = i(3598), re = i(1153), ce = i(7675), le = i(338), de = i(4619), ue = i(1924), he = i(3885), pe = i(3865), me = i(8929), ge = i(7219), fe = i(3188), be = i(8110), ve = i(1941), we = i(2909), ye = i(8663), Se = i(1342), xe = i(9424), _e = i(751), Ee = i(2686), ke = i(7799), Ae = i(1274), Te = i(9091), Ce = i(2809), Pe = i(8958), Oe = i(4905), Me = i(7295), Ie = i(1115), Le = i(8895), je = i(4), Re = i(1813), Ne = i(2552), ze = i(2284), De = i(891), Ge = i(382), Fe = i(1131), qe = i(3150), Be = i(6057), He = i(9620), Xe = i(6167), Ue = i(7453), We = i(6524), Ve = i(7567), Ye = i(5303), $e = i(1214), Ke = i(703), Ze = i(3409), Je = i(7135), Qe = i(4543), et = i(4511), tt = i(3544), it = i(2363), ot = i(5646), nt = i(8072), st = i(170), at = i(727), rt = i(6719), ct = i(2289), lt = i(5157), dt = i(4769), ut = i(8145), ht = i(2167), pt = i(8521), mt = i(8263), gt = i(5189), ft = i(6090), bt = i(375), vt = i(7220), wt = i(2988), yt = i(2707), St = i(7623), xt = i(3316), _t = i(6529), Et = i(853), kt = i(4846), At = i(8045), Tt = i(2783), Ct = i(3677), Pt = i(3880), Ot = i(5596), Mt = i(3927), It = i(1965), Lt = i(4540), jt = i(3138), Rt = i(9310), Nt = i(3622), zt = i(675), Dt = i(3086), Gt = i(4763), Ft = i(3987), qt = i(8936), Bt = i(4121), Ht = i(7629), Xt = i(5763), Ut = i(1361), Wt = i(2523), Vt = i(3266), Yt = i(73), $t = i(3418), Kt = i(7724), Zt = i(8989), Jt = i(8516), Qt = i(6614), ei = i(1847), ti = i(3794), ii = i(3411), oi = i(323), ni = i(1245), si = i(3911), ai = i(495);
        function ri(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        var ci = {
            en: (o = {
                flag: "english (us)",
                mediaNav: "Media",
                featuresNav: "Features",
                newsletter: "Newsletter",
                characterNav: "Characters",
                comicNav: "Comic",
                purchase: "Pre-Order"
            },
            ri(o, "purchase", "Buy Now"),
            ri(o, "available", "Coming fall 2023"),
            ri(o, "available", 'Available October 17<sup class="sup">th</sup>'),
            ri(o, "available", "Available Now"),
            ri(o, "lego", 'Free LEGO<span class="sup">&reg;</span> Sonic Skin with Purchase'),
            ri(o, "trailer", "watch the trailer"),
            ri(o, "loading", "loading"),
            o),
            au: (n = {
                flag: "english (au)",
                mediaNav: "Media",
                featuresNav: "Features",
                newsletter: "Newsletter",
                characterNav: "Characters",
                comicNav: "Comic",
                purchase: "Pre-Order"
            },
            ri(n, "purchase", "Buy Now"),
            ri(n, "available", "Coming 2023"),
            ri(n, "available", 'Available October 17<sup class="sup">th</sup>'),
            ri(n, "available", "Available Now"),
            ri(n, "lego", 'Free LEGO<span class="sup">&reg;</span> Sonic Skin with Purchase'),
            ri(n, "trailer", "watch the trailer"),
            ri(n, "loading", "loading"),
            n),
            uk: (s = {
                flag: "english (uk)",
                mediaNav: "Media",
                featuresNav: "Features",
                newsletter: "Newsletter",
                characterNav: "Characters",
                comicNav: "Comic",
                purchase: "Pre-Order"
            },
            ri(s, "purchase", "Buy Now"),
            ri(s, "available", "Coming 2023"),
            ri(s, "available", 'Available October 17<sup class="sup">th</sup>'),
            ri(s, "available", "Available Now"),
            ri(s, "lego", 'Free LEGO<span class="sup">&reg;</span> Sonic Skin with Purchase'),
            ri(s, "trailer", "watch the trailer"),
            ri(s, "loading", "loading"),
            s),
            fr: (a = {
                flag: "FRANÇAIS",
                mediaNav: "Médias",
                featuresNav: "Caractéristiques",
                newsletter: "Newsletter",
                characterNav: "Personnages",
                comicNav: "BANDE DESSINÉE",
                purchase: "Précommander"
            },
            ri(a, "purchase", "ACHETER MAINTENANT"),
            ri(a, "available", "Sortie en 2023"),
            ri(a, "available", "Disponible le 17 octobre"),
            ri(a, "available", "MAINTENANT DISPONIBLE"),
            ri(a, "lego", 'APPARENCE SONIC LEGO<span class="sup">&reg;</span> GRATUITE AVEC L\'ACHAT'),
            ri(a, "trailer", "regardez la bande-annonce"),
            ri(a, "loading", "Chargement"),
            a),
            it: (r = {
                flag: "ITALIANO",
                mediaNav: "Media",
                featuresNav: "caratteristiche",
                newsletter: "Newsletter",
                characterNav: "Personagi",
                comicNav: "FUMETTO",
                purchase: "PRE-ORDINA"
            },
            ri(r, "purchase", "COMPRA ORA"),
            ri(r, "available", "in arrivo nel 2023"),
            ri(r, "available", "Disponibile il 17 ottobre"),
            ri(r, "available", "DISPONIBILE ORA"),
            ri(r, "lego", 'ASPETTO LEGO<span class="sup">&reg;</span> SONIC GRATUITO CON L\'ACQUISTO'),
            ri(r, "trailer", "guarda il trailer"),
            ri(r, "loading", "Caricamento"),
            r),
            de: (c = {
                flag: "DEUTSCH ",
                mediaNav: "Medien",
                featuresNav: "Inhalte",
                newsletter: "Newsletter",
                characterNav: "Charaktere",
                comicNav: "Comic",
                purchase: "Vorbestellen"
            },
            ri(c, "purchase", "JETZT KAUFEN"),
            ri(c, "available", "Erscheint 2023"),
            ri(c, "available", "Erscheint am 17. Oktober"),
            ri(c, "available", "Jetzt erhältlich"),
            ri(c, "lego", 'MIT KOSTENLOSEM LEGO<span class="sup">&reg;</span>-SKIN FÜR SONIC BEIM KAUF'),
            ri(c, "trailer", "Trailer ansehen"),
            ri(c, "loading", "Lädt"),
            c),
            es: (l = {
                flag: "ESPAÑOL (ES)",
                mediaNav: "Multimedia",
                featuresNav: "características",
                newsletter: "noticias",
                characterNav: "Personajes",
                comicNav: "CÓMIC",
                purchase: "Resérvalo"
            },
            ri(l, "purchase", "CÓMPRALO YA"),
            ri(l, "available", "DISPONIBLE EN 2023"),
            ri(l, "available", "Disponible el 17 de octubre"),
            ri(l, "available", "YA DISPONIBLE"),
            ri(l, "lego", 'APARIENCIA DE SONIC DE LEGO<span class="sup">&reg;</span> GRATUITA CON TU COMPRA'),
            ri(l, "trailer", "ve el tráiler"),
            ri(l, "loading", "Cargando"),
            l),
            br: (d = {
                flag: "Brasileiro",
                mediaNav: "Mídia",
                featuresNav: "recursos",
                newsletter: "boletim informativo",
                characterNav: "Personagens",
                comicNav: "Comic",
                purchase: "Pré-venda"
            },
            ri(d, "purchase", "Compre agora"),
            ri(d, "available", "disponível na <br>primavera de 2023"),
            ri(d, "available", "Disponível em 17 de outubro"),
            ri(d, "available", "Já disponível"),
            ri(d, "lego", 'VISUAL DE LEGO<span class="sup">&reg;</span> PARA SONIC GRATUITO COM A COMPRA'),
            ri(d, "trailer", "assista ao trailer"),
            ri(d, "loading", "Carregando"),
            d),
            mx: (u = {
                flag: "ESPAÑOL (MX)",
                mediaNav: "Multimedia",
                featuresNav: "características",
                newsletter: "boletín",
                characterNav: "Personajes",
                comicNav: "Comic",
                purchase: "Reserva"
            },
            ri(u, "purchase", "Compra ya"),
            ri(u, "available", "llega en <br>otoño de 2023"),
            ri(u, "available", "Disponible el 17 de octubre"),
            ri(u, "available", "Ya disponible"),
            ri(u, "lego", 'DISEÑO GRATIS DE SONIC DE LEGO<span class="sup">&reg;</span> AL COMPRAR'),
            ri(u, "trailer", "mira el tráiler"),
            ri(u, "loading", "Cargando"),
            u)
        }
          , li = {
            en: {
                sectionTitle: "IMPORTANT INFORMATION FOR STEAM USERS",
                header1: "Additional Login No Longer Required to Access Cross-Platform Play in Online Battle Mode",
                text1: "We've heard your feedback and are pleased to announce the release of update ver. 1.0.0.8. This update removes the need to login with an Epic Games account to access Online Battle Mode. <br><br>Stay tuned to this space for future updates."
            },
            au: {
                sectionTitle: "IMPORTANT INFORMATION FOR STEAM USERS",
                header1: "Additional Login No Longer Required to Access Cross-Platform Play in Online Battle Mode",
                text1: "We've heard your feedback and are pleased to announce the release of update ver. 1.0.0.8. This update removes the need to login with an Epic Games account to access Online Battle Mode. <br><br>Stay tuned to this space for future updates."
            },
            uk: {
                sectionTitle: "IMPORTANT INFORMATION FOR STEAM USERS",
                header1: "Additional Login No Longer Required to Access Cross-Platform Play in Online Battle Mode",
                text1: "We've heard your feedback and are pleased to announce the release of update ver. 1.0.0.8. This update removes the need to login with an Epic Games account to access Online Battle Mode. <br><br>Stay tuned to this space for future updates."
            },
            fr: {
                sectionTitle: "INFORMATION IMPORTANTE POUR LES UTILISATEURS DE STEAM",
                header1: "Une connexion supplémentaire n'est plus nécessaire pour accéder au multiplateforme en mode Combat en ligne.",
                text1: "Nous avons pris en compte vos commentaires et sommes heureux de vous annoncer l'arrivée de la mise à jour ver. 1.0.0.8. Cette mise à jour ne rend plus obligatoire la connexion à un compte Epic Games pour accéder au mode Combat en ligne. <br><br>Ne manquez pas nos prochaines mises à jour. "
            },
            it: {
                sectionTitle: "INFORMAZIONE IMPORTANTE PER GLI UTENTI DI STEAM",
                header1: "Non è più necessario l'accesso aggiuntivo per il gioco multipiattaforma nella Modalità Battaglia online",
                text1: "Abbiamo ascoltato il vostro feedback e siamo lieti di annunciare il rilascio dell'aggiornamento ver. 1.0.0.8. L'aggiornamento rimuove la necessità di accedere con un account Epic Games per la Modalità Battaglia online. <br><br>Continua a seguire questo spazio per i prossimi aggiornamenti. "
            },
            de: {
                sectionTitle: "WICHTIGE INFORMATIONEN FÜR STEAM-NUTZER",
                header1: "Ein zusätzlicher Login ist nicht länger erforderlich, um an plattformübergreifenden Spielen im Online-Kampfmodus teilzunehmen.",
                text1: "Wir haben euer Feedback erhalten und freuen uns, die Veröffentlichung von Updateversion 1.0.0.8 ankündigen zu können. Mit diesem Update ist es nicht mehr notwendig, sich mit einem Epic Games-Konto einzuloggen, um auf den Online-Kampfmodus zugreifen zu können.<br><br>Behaltet diesen Bereich für zukünftige Updates im Blick. "
            },
            es: {
                sectionTitle: "INFORMACIÓN IMPORTANTE PARA USUARIOS DE STEAM",
                header1: "Ya no hace falta iniciar sesión de nuevo para acceder al juego multiplataforma en el modo Batalla en línea.",
                text1: "Hemos hecho caso a vuestros comentarios y nos complace anunciar la actualización 1.0.0.8. Esta actualización elimina la necesidad de iniciar sesión con una cuenta de Epic Games para acceder al modo Batalla en línea. <br><br>No os perdáis futuras actualizaciones. "
            },
            br: {
                sectionTitle: "AVISO IMPORTANTE PARA OS USUÁRIOS DE STEAM",
                header1: "Login adicional removido para acessar a experiência multiplataforma no Modo Batalha online",
                text1: "É com grande satisfação que anunciamos a implementação do seu feedback na atualização v. 1.0.0.8. Ela remove a necessidade de entrar com uma conta Epic Games para acessar o Modo Batalha online. <br><br>Fique de olho neste canal para acompanhar futuras atualizações. "
            },
            mx: {
                sectionTitle: "INFORMACIÓN IMPORTANTE PARA USUARIOS DE STEAM",
                header1: "Ya no es necesario el inicio de sesión adicional para acceder al juego cruzado entre plataformas en el modo Batalla en línea",
                text1: "Escuchamos sus comentarios y nos complace anunciar el lanzamiento de la actualización, ver. 1.0.0.8. Esta actualización elimina la necesidad de iniciar sesión con una cuenta de Epic Games para acceder al modo Batalla en línea.<br><br>Regresen aquí para conocer más sobre futuras actualizaciones. "
            }
        }
          , di = {
            en: {
                sectionTitle: "media",
                animation: "watch the animation",
                announcement: "https://www.youtube.com/watch?v=j3g-62NNoUs?autoplay=0",
                lego: "https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=1DrnSgXHviI?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=MsL9pKdJ1A8?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=QiF-23ppc6c?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            },
            au: {
                sectionTitle: "media",
                animation: "watch the animation",
                announcement: "https://www.youtube.com/watch?v=YtUiU85CmZE?autoplay=0",
                lego: "https://www.youtube.com/watch?v=sXcp2loOwEA?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=VWXxTTHbKV4?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=VsGvWRv1jzY?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=P4ybPj8-9-U?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            },
            uk: {
                sectionTitle: "media",
                animation: "watch the animation",
                announcement: "https://www.youtube.com/watch?v=IXI21_qv41g?autoplay=0",
                lego: "https://www.youtube.com/watch?v=7TXc7cAA8bo?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=7XqALvXQ1Ls?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=uYmpZ9Zny3c?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=fMf76yQgXVk?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            },
            fr: {
                sectionTitle: "Médias",
                animation: "Regarde l'animation",
                announcement: "https://www.youtube.com/watch?v=hArJSploYLQ?autoplay=0",
                lego: "https://www.youtube.com/watch?v=139NXkPaaHI?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=VwAiiqyDdc0?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=2qZnpRvVYaM?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=jbw8LX4xl-8?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            },
            it: {
                sectionTitle: "Media",
                animation: "Guarda l'animazione",
                announcement: "https://www.youtube.com/watch?v=PY4EIc7uC80?autoplay=0",
                lego: "https://www.youtube.com/watch?v=Rwln-wQiL9E?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=XgvmiD8ef34?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=LxXgt8VdYOg?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=0CUaZ70e5Mc?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            },
            de: {
                sectionTitle: "Medien",
                animation: "Sieh dir die Animation an",
                announcement: "https://www.youtube.com/watch?v=jbG_KUy5zxg?autoplay=0",
                lego: "https://www.youtube.com/watch?v=J5Seo7AJtis?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=LAPwW2MU0Mo?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=OCtEVhrjrg0?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=s3mId60nYcw?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            },
            es: {
                sectionTitle: "Multimedia",
                animation: "Ve la animación",
                announcement: "https://www.youtube.com/watch?v=CLlsi5GMtp0?autoplay=0",
                lego: "https://www.youtube.com/watch?v=JtJ2GBaPi9k?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=U1o_8qo-fDI?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=bv2kdu2yisQ?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=ugRELmLqn8k?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            },
            br: {
                sectionTitle: "Mídia",
                animation: "Assista a animação",
                announcement: "https://www.youtube.com/watch?v=j3g-62NNoUs?autoplay=0",
                lego: "https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=1DrnSgXHviI?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=MsL9pKdJ1A8?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=QiF-23ppc6c?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            },
            mx: {
                sectionTitle: "Multimedia",
                animation: "Mira la animación",
                announcement: "https://www.youtube.com/watch?v=j3g-62NNoUs?autoplay=0",
                lego: "https://www.youtube.com/watch?v=pH2_7UjyF5k?autoplay=0",
                multiplayer: "https://www.youtube.com/watch?v=1DrnSgXHviI?autoplay=0",
                trio: "https://www.youtube.com/watch?v=4wzSw2iuk_8?autoplay=0",
                launch: "https://www.youtube.com/watch?v=MsL9pKdJ1A8?autoplay=0",
                accolades: "https://www.youtube.com/watch?v=QiF-23ppc6c?autoplay=0",
                norunning: "https://www.youtube.com/watch?v=2iFgMtIqVyw?autoplay=0"
            }
        }
          , ui = {
            en: {
                sectionTitle: "Features",
                featureTitle_1: "New thrills. Classic feels.",
                featureTitle_2: "A new Spin on a Classic",
                featureTitle_3: "Play as your Favorite Characters",
                featureTitle_4: "Harness the Power of the Chaos Emeralds",
                featureTitle_5: "More Friends, More Fun",
                featureText_1: "Adventure through the mystical Northstar Islands in this all-new take on classic 2D Sonic high-speed action platforming. Play as Sonic, Tails, Knuckles, and Amy Rose and harness all-new Emerald powers to move and attack in dynamic new ways. Navigate gorgeous, never-before-seen environments solo or with up to 3 other players and stop Dr. Eggman, Fang, and a mysterious new adversary from converting the islands' giant animals into Badniks before it's too late!",
                featureText_2: "The 2D Sonic high-speed sidescrolling action platforming you know and love, reimagined with fully 3D graphics, new powers and abilities, an all-new setting, and new ways to play! You've never played classic Sonic like this before!",
                featureText_3: "Choose from Sonic, Tails, Knuckles, and Amy Rose and take advantage of their unique abilities to blaze a path across the Northstar Islands as they race to defeat Dr. Eggman, who has teamed up with an old nemesis, Fang.",
                featureText_4: "Multiply, swim up waterfalls, change form, and more with the powers of the Chaos Emeralds.",
                featureText_5: "For the first time ever in a Sonic game, play through the entire campaign with up to 3 other players with drop-in and drop-out 4-Player Local Co-op."
            },
            au: {
                sectionTitle: "Features",
                featureTitle_1: "New thrills. Classic feels.",
                featureTitle_2: "A new Spin on a Classic",
                featureTitle_3: "Play as your Favorite Characters",
                featureTitle_4: "Harness the Power of the Chaos Emeralds",
                featureTitle_5: "More Friends, More Fun",
                featureText_1: "Adventure through the mystical Northstar Islands in this all-new take on classic 2D Sonic high-speed action platforming. Play as Sonic, Tails, Knuckles, and Amy Rose and harness all-new Emerald powers to move and attack in dynamic new ways. Navigate gorgeous, never-before-seen environments solo or with up to 3 other players and stop Dr. Eggman, Fang, and a mysterious new adversary from converting the islands' giant animals into Badniks before it's too late!",
                featureText_2: "The 2D Sonic high-speed sidescrolling action platforming you know and love, reimagined with fully 3D graphics, new powers and abilities, an all-new setting, and new ways to play! You've never played classic Sonic like this before!",
                featureText_3: "Choose from Sonic, Tails, Knuckles, and Amy Rose and take advantage of their unique abilities to blaze a path across the Northstar Islands as they race to defeat Dr. Eggman, who has teamed up with an old nemesis, Fang.",
                featureText_4: "Multiply, swim up waterfalls, change form, and more with the powers of the Chaos Emeralds.",
                featureText_5: "For the first time ever in a Sonic game, play through the entire campaign with up to 3 other players with drop-in and drop-out 4-Player Local Co-op."
            },
            uk: {
                sectionTitle: "Features",
                featureTitle_1: "New thrills. Classic feels.",
                featureTitle_2: "A new Spin on a Classic",
                featureTitle_3: "Play as your Favorite Characters",
                featureTitle_4: "Harness the Power of the Chaos Emeralds",
                featureTitle_5: "More Friends, More Fun",
                featureText_1: "Adventure through the mystical Northstar Islands in this all-new take on classic 2D Sonic high-speed action platforming. Play as Sonic, Tails, Knuckles, and Amy Rose and harness all-new Emerald powers to move and attack in dynamic new ways. Navigate gorgeous, never-before-seen environments solo or with up to 3 other players and stop Dr. Eggman, Fang, and a mysterious new adversary from converting the islands' giant animals into Badniks before it's too late!",
                featureText_2: "The 2D Sonic high-speed sidescrolling action platforming you know and love, reimagined with fully 3D graphics, new powers and abilities, an all-new setting, and new ways to play! You've never played classic Sonic like this before!",
                featureText_3: "Choose from Sonic, Tails, Knuckles, and Amy Rose and take advantage of their unique abilities to blaze a path across the Northstar Islands as they race to defeat Dr. Eggman, who has teamed up with an old nemesis, Fang.",
                featureText_4: "Multiply, swim up waterfalls, change form, and more with the powers of the Chaos Emeralds.",
                featureText_5: "For the first time ever in a Sonic game, play through the entire campaign with up to 3 other players with drop-in and drop-out 4-Player Local Co-op."
            },
            fr: {
                sectionTitle: "Caractéristiques",
                featureTitle_1: "Nouvelles émotions. Bonnes vieilles sensations.",
                featureTitle_2: "Un nouveau standard",
                featureTitle_3: "Incarne tes personnages préférés",
                featureTitle_4: "Utilise le pouvoir des Chaos Emeralds",
                featureTitle_5: "Partage le fun entre amis",
                featureText_1: "Explore les Northstar Islands dans cette toute nouvelle aventure qui reprend l'action rapide et les séquences de plateforme en 2D des jeux Sonic classiques. Incarne Sonic, Tails, Knuckles et Amy Rose, et utilise les nouveaux Emerald Powers qui offrent des manières inédites de se déplacer et d'attaquer. Parcours des environnements magnifiques et inédits, en solo ou avec jusqu'à 3 autres joueurs, pour déjouer les plans du Dr. Eggman, de Fang et d'un nouvel ennemi qui cherchent à transformer les animaux géants des îles en Badniks !<br><br>Pour les fans de longue date comme pour les nouveaux venus, Sonic Superstars est une occasion idéale de plonger dans l'univers de Sonic.",
                featureText_2: "une aventure Sonic classique conçue pour les plateformes modernes. ",
                featureText_3: "choisis entre Sonic, Tails, Knuckles et Amy Rose, et utilise leurs pouvoirs pour traverser les Northstar Islands et vaincre le Dr. Eggman, qui s'est associé avec Fang, un ancien adversaire.",
                featureText_4: "les nouveaux Emerald Powers permettent de se cloner, de gravir les chutes d'eau, de changer de forme, et bien plus encore.",
                featureText_5: "toute l'histoire du jeu est jouable en coopération jusqu'à 4 joueurs en local."
            },
            it: {
                sectionTitle: "caratteristiche",
                featureTitle_1: "Nuove emozioni. Classiche sensazioni.",
                featureTitle_2: "Un nuovo standard",
                featureTitle_3: "Gioca nei panni dei tuoi personaggi preferiti",
                featureTitle_4: "Sprigiona il potere dei Chaos Emerald",
                featureTitle_5: "Più amici, più divertimento",
                featureText_1: "Avventurati attraverso le mistiche Northstar Island in questa nuovissima interpretazione del classico e supersonico platformer Sonic in 2D. Gioca nei panni di Sonic, Knuckles ed Amy Rose e sprigiona i nuovissimi poteri dell'Emerald per muoverti e attaccare in maniere inedite e dinamiche. Attraversa meravigliose ambientazioni mai viste prima, in solitaria o con un massimo di 3 altri giocatori, e impedisci al Dr. Eggman, a Fang e a un nuovo avversario di trasformare in badnik i mastodontici animali delle isole! <br><br>Sonic Superstars è il modo perfetto per scattare nel mondo di Sonic, sia per i fan della prima ora che per chi ha appena scoperto il suo mondo.",
                featureText_2: "il Sonic classico conosciuto e amato da tutti, reinventato per le piattaforme moderne!",
                featureText_3: "scegli tra Sonic, Tails, Knuckles e Amy Rose, e sfrutta le loro abilità esclusive per attraversare le Northstar Islands e precipitarti a sconfiggere il Dr. Eggman, spalleggiato da un vecchio nemico come Fang.",
                featureText_4: "moltiplica, risali le rapide, trasformati e scopri gli altri poteri dei Chaos Emerald.",
                featureText_5: "affronta l'intera campagna in modalità cooperativa locale fino a 4 giocatori."
            },
            de: {
                sectionTitle: "Inhalte",
                featureTitle_1: "Brandneuer Spaß. Klassisch gut.",
                featureTitle_2: "Ein neuer Standard für neue Plattformen",
                featureTitle_3: "Spiele als deine Lieblingscharaktere",
                featureTitle_4: "Nutze die Kräfte der Chaos Emeralds",
                featureTitle_5: "Mehr Freunde, mehr Spaß",
                featureText_1: "Erlebe ein rasantes Abenteuer auf den Northstar Islands, inspiriert von klassischen Action-Plattformern aus Sonics 2D-Ära. Spiele als Sonic, Tails, Knuckles und Amy Rose und nutze die brandneuen Kräfte der Chaos Emeralds, um dich auf völlig neue Arten zu bewegen und anzugreifen. Erkunde wunderschöne, noch nie zuvor gesehene Umgebungen alleine oder mit bis zu 3 anderen und halte Dr. Eggman, Fang und einen neuen Gegner davon ab, die Tiere der Inseln in Badniks zu verwandeln, bevor es zu spät ist. <br><br>Egal, ob du Sonic schon seit Jahren kennst oder ganz neu dabei bist - Sonic Superstars hat für alle Fans etwas zu bieten.",
                featureText_2: "Der klassische Sonic mit neuem Kniff. ",
                featureText_3: "Wähle zwischen Sonic, Tails, Knuckles und Amy Rose und nutze ihre einzigartigen Fähigkeiten, um dir einen Weg durch die Northstar Islands zu bahnen und Dr. Eggman und dem alten Widersacher Fang einen Strich durch ihre Rechnung zu machen.",
                featureText_4: "Erzeuge Klone, schwimme Wasserfälle hoch, ändere deine Gestalt und mehr.",
                featureText_5: "Die gesamte Kampagne kann im lokalen Co-op mit 4 Personen gespielt werden."
            },
            es: {
                sectionTitle: "características",
                featureTitle_1: "Nuevas emociones, Clásicas sensaciones.",
                featureTitle_2: "Una nueva forma de jugar",
                featureTitle_3: "Juega con tus personajes favoritos",
                featureTitle_4: "Aprovecha el poder de las Chaos Emeralds",
                featureTitle_5: "Más amigos, más diversión",
                featureText_1: "Explora las místicas Northstar Islands en esta nueva versión de las clásicas aventuras de acción y plataformas en 2D de Sonic. Juega con Sonic, Tails, Knuckles y Amy Rose y aprovecha los nuevos poderes Emerald para moverte y atacar de mil y una formas. Visita los maravillosos y nunca antes vistos escenarios a solas o en compañía de hasta 3 jugadores más y evita que el Dr. Eggman, Fang y un nuevo adversario conviertan a los animales gigantes de las islas en Badniks antes de que sea demasiado tarde.<br><br>Bien seas fan de Sonic de toda la vida o si acabas de descubrir sus juegos, Sonic Superstars es la manera perfecta de disfrutar del mundo de Sonic.",
                featureText_2: "El Sonic clásico que conoces y amas reinventado para las plataformas modernas. ",
                featureText_3: "Elige entre Sonic, Tails, Knuckles y Amy Rose y aprovecha sus habilidades únicas para explorar las Northstar Islands y derrotar al Dr. Eggman, que se ha aliado con un viejo enemigo, Fang.",
                featureText_4: "Multiplícate, nada por cascadas, cambia de forma y mucho más con el poder de las Chaos Emeralds.",
                featureText_5: "Juega la campaña entera en cooperativo local para 4 jugadores."
            },
            br: {
                sectionTitle: "recursos",
                featureTitle_1: "Novas aventuras. Emoções clássicas.",
                featureTitle_2: "Um novo padrão",
                featureTitle_3: "Jogue com seus personagens favoritos",
                featureTitle_4: "Utilize o poder das Esmeraldas Chaos",
                featureTitle_5: "Quanto mais amigos, melhor",
                featureText_1: "Aventura-te pelas místicas Northstar Islands nesta entrada inédita da clássica e rápida jogabilidade de ação e plataformas em 2D. Joga com Sonic, Tails, Knuckles e Amy Rose e utiliza poderes Esmeralda inéditos para realizar movimentos e ataques dinâmicos. Explora novos cenários fantásticos, a sós ou com até 3 outros jogadores, e impede que o Dr. Eggman, Fang e um novo adversário convertam os animais gigantes das ilhas em Badniks, antes que seja tarde demais!<br><br>Quer sejas fã de longa data de Sonic ou tenhas acabado de conhecer a série, Sonic Superstars é a forma perfeita de explorar o mundo de Sonic.",
                featureText_2: "o Sonic clássico que você já conhece e adora, reimaginado para plataformas modernas! ",
                featureText_3: "escolha entre Sonic, Tails, Knuckles e Amy Rose, e aproveite as habilidades únicas de cada um para percorrer as Northstar Islands na luta contra o Dr. Eggman, que se aliou a um antigo nêmesis, Fang.",
                featureText_4: "multiplique-se, suba cachoeiras a nado, mude de forma e muito mais com os poderes das Esmeraldas Chaos.",
                featureText_5: "jogue a campanha inteira no modo cooperativo local para 4 jogadores."
            },
            mx: {
                sectionTitle: "características",
                featureTitle_1: "Nuevas emociones. Sentimientos clásicos.",
                featureTitle_2: "Un nuevo estándar",
                featureTitle_3: "Juega con tus favoritos",
                featureTitle_4: "Aprovecha el poder de las Chaos Emeralds",
                featureTitle_5: "Más amigos, más diversión",
                featureText_1: "Aventúrate por las místicas Northstar Islands en esta nueva versión del clásico juego de plataformas 2D de acción a alta velocidad de Sonic. Juega como Sonic, Tails, Knuckles y Amy Rose, y aprovecha los nuevos poderes Esmeralda para moverte y atacar de formas nuevas y dinámicas. Navega por magníficos entornos nunca vistos en solitario o con otros 3 jugadores y evita que el Dr. Eggman, Fang y un nuevo adversario conviertan a los animales gigantes de las islas en Badniks antes de que sea demasiado tarde.<br><br>Tanto si eres un fan de Sonic de toda la vida como si eres nuevo en la serie, Sonic Superstars es la forma perfecta de sumergirte en el mundo de Sonic.",
                featureText_2: "El Sonic clásico que conoces y adoras, ¡rediseñado para las plataformas modernas! ",
                featureText_3: "Elige entre Sonic, Tails, Knuckles y Amy Rose y aprovecha sus habilidades únicas para encender un camino en las Northstar Islands en su carrera para derrotar al Dr. Eggman, quien hizo equipo con su antiguo némesis, Fang.",
                featureText_4: "Multiplícate, asciende por las cascadas, cambia de forma y mucho más con los poderes de las Chaos Emeralds.",
                featureText_5: "Juega toda la campaña en modo cooperativo local para 4 jugadores."
            }
        }
          , hi = {
            en: {
                sectionTitle: "Subscribe",
                header: "Get an Exclusive Amy Rose Skin!",
                text: 'Sign up and receive a classic, redefined look for Amy in Sonic Superstars! Enter your details and we\'ll email a code to your inbox with instructions on how to download the in-game content after the game is released on October 17th, 2023.<br><br><span class="textbox__body--italic">*Available in selected regions for a limited time only. Sonic Superstars game (sold separately) necessary to access in-game content. Gaming device must be connected to the internet to download in-game content.</span>',
                subscribe: "Subscribe to the Newsletter"
            },
            au: {
                sectionTitle: "Subscribe",
                header: "Get an Exclusive Amy Rose Skin!",
                text: 'Sign up and receive a classic, redefined look for Amy in Sonic Superstars! Enter your details and we\'ll email a code to your inbox with instructions on how to download the in-game content after the game is released on October 17th, 2023.<br><br><span class="textbox__body--italic">*Available in selected regions for a limited time only. Sonic Superstars game (sold separately) necessary to access in-game content. Gaming device must be connected to the internet to download in-game content.</span>',
                subscribe: "Subscribe to the Newsletter"
            },
            uk: {
                sectionTitle: "Subscribe",
                header: "Get an Exclusive Amy Rose Skin!",
                text: 'Sign up and receive a classic, redefined look for Amy in Sonic Superstars! Enter your details and we\'ll email a code to your inbox with instructions on how to download the in-game content after the game is released on October 17th, 2023.<br><br><span class="textbox__body--italic">*Available in selected regions for a limited time only. Sonic Superstars game (sold separately) necessary to access in-game content. Gaming device must be connected to the internet to download in-game content.</span>',
                subscribe: "Subscribe to the Newsletter"
            },
            fr: {
                sectionTitle: "S'abonner",
                header: "Obtiens une apparence exclusive d'Amy Rose !",
                text: "Inscris-toi avant le 31 janvier 2024 pour obtenir une nouvelle apparence classique pour Amy Rose ! En exclusivité pour nos abonnés à la newsletter, applique la tenue moderne d'Amy sur son apparence classique dans Sonic Superstars ! Entre tes informations et nous t'enverrons un code par email avec les instructions de téléchargement du contenu après la sortie du jeu en automne 2023.<br><br><span class=\"textbox__body--italic\">* Disponible uniquement dans certaines régions pour une durée limitée. Le jeu Sonic Superstars (vendu séparément) est requis pour accéder au contenu. La plateforme de jeu doit être connectée à Internet pour télécharger le contenu.</span>",
                subscribe: "S'abonner à la newsletter"
            },
            it: {
                sectionTitle: "iscriviti",
                header: "Ottieni un esclusivo aspetto di Amy Rose!",
                text: 'Iscriviti entro il 31 gennaio 2024, e ottieni un classico look ridisegnato di Amy Rose! Esclusivo per chi si iscrive alla nostra newsletter, indossa un abito moderno per il personaggio classico di Amy in Sonic Superstars! Inserisci i tuoi dettagli e ti invieremo un codice via e-mail con le istruzioni su come scaricare il contenuto nel gioco dopo la sua pubblicazione il prossimo autunno 2023.<br><br><span class="textbox__body--italic">* Disponibile in regioni selezionate per un periodo limitato. Per accedere ai contenuti di gioco è richiesto il gioco Sonic Superstars (venduto separatamente). Il dispositivo di gioco deve essere connesso a internet per scaricare i contenuti.</span>',
                subscribe: "Iscriviti alla newsletter"
            },
            de: {
                sectionTitle: "Abonnieren",
                header: "Hol dir einen exklusiven Skin für Amy Rose!",
                text: 'Melde dich bis 31. Januar 2024 an und erhalte einen klassischen, neu überarbeiteten Look für Amy Rose! Dieses moderne Outfit für die klassische Amy aus Sonic Superstars gibt es exklusiv nur für alle, die unseren Newsletter abonnieren! Gib einfach deine Details ein und du erhältst nach Erscheinen des Spiels im Herbst 2023 einen Code mit Anweisungen zum Herunterladen der Spielinhalte direkt in dein E-Mail-Postfach.<br><br><span class="textbox__body--italic">*Für begrenzte Zeit in ausgewählten Regionen verfügbar. Zur Nutzung der Spielinhalte wird das Grundspiel Sonic Superstars (separat erhältlich) benötigt. Zum Download der Spielinhalte muss das Spielgerät über eine Internetverbindung verfügen.</span>',
                subscribe: "Newsletter abonnieren"
            },
            es: {
                sectionTitle: "suscribirse",
                header: "¡Consigue la apariencia exclusiva de Amy Rose!",
                text: '¡Regístrate antes del 31 de enero de 2024 y obtendrás una apariencia clásica pero redefinida para Amy Rose! ¡Exclusiva solo para suscriptores de nuestro boletín, viste a la clásica Amy de Sonic Superstars con el atuendo moderno de Amy!  Simplemente escribe tus datos y te enviaremos un código por correo electrónico con instrucciones sobre cómo descargar el contenido del juego después de su lanzamiento en otoño de 2023.<br><br><span class="textbox__body--italic">* Disponible en ciertas regiones durante un tiempo limitado. Es necesario tener Sonic Superstars (a la venta por separado) para acceder al contenido de juego. Tu dispositivo deberá estar conectado a internet para descargar el contenido de juego.</span>',
                subscribe: "Suscríbete al boletín informativo"
            },
            br: {
                sectionTitle: "assinar",
                header: "Obtenha um visual exclusivo da Amy Rose!",
                text: 'Cadastre-se até 31 de janeiro de 2024 e ganhe um clássico visual repaginado da Amy Rose! Exclusivamente para assinantes do boletim informativo, vista o visual moderno da Amy na Amy clássica de Sonic Superstars! Basta inserir seus detalhes, e vamos enviar um código por e-mail com instruções de como baixar o conteúdo após o lançamento do jogo na primavera de 2023.<br><br><span class="textbox__body--italic">*Disponível em algumas regiões por tempo limitado. É necessário ter o jogo Sonic Superstars (vendido separadamente) para acessar o conteúdo. O dispositivo deve estar conectado à Internet para baixar o conteúdo do jogo.</span>',
                subscribe: "Assine o boletim informativo"
            },
            mx: {
                sectionTitle: "suscribirme",
                header: "¡Consigue un diseño exclusivo para Amy Rose!",
                text: '¡Regístrate antes del 31 de enero de 2024 y ganarás un aspecto clásico y rediseñado para Amy Rose! Exclusivo para los suscriptores de nuestro boletín, ¡usa el atuendo moderno de Amy con la Amy clásica de Sonic Superstars! Simplemente introduce tus datos y te enviaremos un código por correo electrónico con instrucciones para descargar el contenido del juego después de su lanzamiento en otoño de 2023.<br><br><span class="textbox__body--italic">*Disponible en las regiones seleccionadas solamente durante un tiempo limitado. El título Sonic Superstars (se vende por separado) es necesario para acceder al contenido en el juego. El dispositivo de juego debe tener conexión a Internet para descargar contenido en el juego.</span>',
                subscribe: "SUSCRÍBETE AL BOLETÍN"
            }
        }
          , pi = {
            en: {
                connect: "connect with SEGA",
                subscribe: "Subscribe to the Newsletter",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><a href="https://www.esrb.org/EPCConfirm/896/" target="_blank"><img class="footer__logoImg" src="img/footer/esrb_privacycert.png" alt="esrb Certified"/></a><img class="footer__logoImg" src="img/footer/esrb_sonic.svg" alt="Rate E by ESRB"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.<br>The ESRB rating icons are registered trademarks of the Entertainment Software Association.',
                cookie: "https://www.sega.com/cookiepolicy",
                privacy: "https://www.sega.com/Privacy",
                cookieText: "Cookie Policy",
                privacyText: "Privacy Policy"
            },
            au: {
                connect: "connect with SEGA",
                subscribe: "Subscribe to the Newsletter",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="img/footer/g_au_rating.jpg" alt="Rated G"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
                cookie: "https://www.sega.co.uk/cookiepolicy",
                privacy: "https://www.sega.co.uk/Privacy",
                cookieText: "Cookie Policy",
                privacyText: "Privacy Policy"
            },
            uk: {
                connect: "connect with SEGA",
                subscribe: "Subscribe to the Newsletter",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="img/footer/pegi_3.jpg" alt="PEGI 3"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
                cookie: "http://www.sega.co.uk/cookiepolicy",
                privacy: "http://www.sega.co.uk/Privacy",
                cookieText: "Cookie Policy",
                privacyText: "Privacy Policy"
            },
            fr: {
                connect: "Se connecter avec SEGA",
                subscribe: "S'abonner à la newsletter",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="img/footer/pegi_3.jpg" alt="PEGI 3"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
                cookie: "https://www.sega.fr/cookiepolicy",
                privacy: "http://www.sega.fr/Privacy",
                cookieText: "Politique relative aux cookies",
                privacyText: "Politique de confidentialité"
            },
            it: {
                connect: "Contatta SEGA",
                subscribe: "Iscriviti alla newsletter",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="img/footer/pegi_3.jpg" alt="PEGI 3"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
                cookie: "http://www.sega-italia.com/cookiepolicy",
                privacy: "http://www.sega-italia.com/Privacy",
                cookieText: "Politica sui cookie",
                privacyText: "Informativa sulla privacy"
            },
            de: {
                connect: "Neuigkeiten von SEGA",
                subscribe: "Newsletter abonnieren",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="img/footer/usk_6.png" alt="USK 6"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
                cookie: "https://privacy.sega.com/de/sega-cookie-richtlinie",
                privacy: "http://www.sega.de/Privacy",
                cookieText: "Cookie-Richtlinie",
                privacyText: "Datenschutzrichtlinie"
            },
            es: {
                connect: "Conecta con SEGA",
                subscribe: "Suscríbete al boletín informativo",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="img/footer/pegi_3.jpg" alt="PEGI 3"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
                cookie: "http://www.sega.es/cookiepolicy",
                privacy: "http://www.sega.es/Privacy",
                cookieText: "Política de cookies",
                privacyText: "Política de privacidad"
            },
            br: {
                connect: "Conecte-se com a SEGA",
                subscribe: "Assine o boletim informativo",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="img/footer/br_rating_L.png" alt="Rated L"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
                cookie: "https://privacy.sega.com/en/sega-cookie-policy",
                privacy: "https://privacy.sega.com/en/sega-of-america-inc-privacy-policy",
                cookieText: "Política de Cookies",
                privacyText: "Política de Privacidade"
            },
            mx: {
                connect: "Conecta con SEGA",
                subscribe: "Suscríbete al boletín",
                logos: '<img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sega_logo.png" alt="SEGA Logo"/><img class="footer__logoImg footer__logoImg--segaLogo" src="img/footer/sonic_team.png" alt="Sonic Team Logo"/><img class="footer__logoImg" src="img/footer/esrb_sonic.svg" alt="Rated E"/>',
                copy: '©SEGA. All rights reserved. SEGA is registered in the U.S. Patent and Trademark Office. SEGA, the SEGA logo and SONIC SUPERSTARS are either registered trademarks or trademarks of SEGA CORPORATION or its affiliates. All other trademarks, logos and copyrights are property of their respective owners.<br>©2023 The LEGO Group. LEGO, the LEGO logo, the Minifigure, and the Brick and Knob configurations are trademarks and/or copyrights of the LEGO Group. All other marks and trademarks are the property of their respective owners. All rights reserved.<br>"PS", "PS5" and "PS4" are registered trademarks or trademarks of Sony Interactive Entertainment Inc.<br>Microsoft, the Xbox Sphere mark, the Series X logo, Xbox One, and Xbox Series X are trademarks of the Microsoft group of companies.<br>Nintendo Switch is a trademark of Nintendo<br>EPIC GAMES and the EPIC STORE LOGO are trademarks or registered trademarks of EPIC GAMES INC.<br>©2023 Valve Corporation. Steam and the Steam logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.',
                cookie: "http://www.sega.es/cookiepolicy",
                privacy: "http://www.sega.es/Privacy",
                cookieText: "Política de cookies",
                privacyText: "Política de privacidad"
            }
        }
          , mi = {
            en: {
                title: "READ THE COMIC",
                p0: p,
                p1: g,
                p2: b,
                p3: w,
                p4: S,
                p5: _,
                p6: k,
                p7: T,
                p8: P,
                p9: M,
                p10: L,
                p11: R,
                p12: z,
                p0_thumb: m,
                p1_thumb: f,
                p2_thumb: v,
                p3_thumb: y,
                p4_thumb: x,
                p5_thumb: E,
                p6_thumb: A,
                p7_thumb: C,
                p8_thumb: O,
                p9_thumb: I,
                p10_thumb: j,
                p11_thumb: N,
                p12_thumb: D
            },
            uk: {
                title: "READ THE COMIC",
                p0: p,
                p1: g,
                p2: b,
                p3: w,
                p4: S,
                p5: _,
                p6: k,
                p7: T,
                p8: P,
                p9: M,
                p10: L,
                p11: R,
                p12: z,
                p0_thumb: m,
                p1_thumb: f,
                p2_thumb: v,
                p3_thumb: y,
                p4_thumb: x,
                p5_thumb: E,
                p6_thumb: A,
                p7_thumb: C,
                p8_thumb: O,
                p9_thumb: I,
                p10_thumb: j,
                p11_thumb: N,
                p12_thumb: D
            },
            au: {
                title: "READ THE COMIC",
                p0: p,
                p1: g,
                p2: b,
                p3: w,
                p4: S,
                p5: _,
                p6: k,
                p7: T,
                p8: P,
                p9: M,
                p10: L,
                p11: R,
                p12: z,
                p0_thumb: m,
                p1_thumb: f,
                p2_thumb: v,
                p3_thumb: y,
                p4_thumb: x,
                p5_thumb: E,
                p6_thumb: A,
                p7_thumb: C,
                p8_thumb: O,
                p9_thumb: I,
                p10_thumb: j,
                p11_thumb: N,
                p12_thumb: D
            },
            fr: {
                title: "LIRE LA BANDE DESSINÉE",
                p0: G,
                p1: q,
                p2: H,
                p3: U,
                p4: V,
                p5: $,
                p6: Z,
                p7: Q,
                p8: te,
                p9: oe,
                p10: se,
                p11: re,
                p12: le,
                p0_thumb: F,
                p1_thumb: B,
                p2_thumb: X,
                p3_thumb: W,
                p4_thumb: Y,
                p5_thumb: K,
                p6_thumb: J,
                p7_thumb: ee,
                p8_thumb: ie,
                p9_thumb: ne,
                p10_thumb: ae,
                p11_thumb: ce,
                p12_thumb: de
            },
            it: {
                title: "LEGGI IL FUMETTO",
                p0: ue,
                p1: pe,
                p2: ge,
                p3: be,
                p4: we,
                p5: Se,
                p6: _e,
                p7: ke,
                p8: Te,
                p9: Pe,
                p10: Me,
                p11: Le,
                p12: Re,
                p0_thumb: he,
                p1_thumb: me,
                p2_thumb: fe,
                p3_thumb: ve,
                p4_thumb: ye,
                p5_thumb: xe,
                p6_thumb: Ee,
                p7_thumb: Ae,
                p8_thumb: Ce,
                p9_thumb: Oe,
                p10_thumb: Ie,
                p11_thumb: je,
                p12_thumb: Ne
            },
            de: {
                title: "LESEN SIE DEN COMIC",
                p0: ze,
                p1: Ge,
                p2: qe,
                p3: He,
                p4: Ue,
                p5: Ve,
                p6: $e,
                p7: Ze,
                p8: Qe,
                p9: tt,
                p10: ot,
                p11: st,
                p12: rt,
                p0_thumb: De,
                p1_thumb: Fe,
                p2_thumb: Be,
                p3_thumb: Xe,
                p4_thumb: We,
                p5_thumb: Ye,
                p6_thumb: Ke,
                p7_thumb: Je,
                p8_thumb: et,
                p9_thumb: it,
                p10_thumb: nt,
                p11_thumb: at,
                p12_thumb: ct
            },
            es: {
                title: "LEE EL CÓMIC",
                p0: lt,
                p1: ut,
                p2: pt,
                p3: gt,
                p4: bt,
                p5: wt,
                p6: St,
                p7: _t,
                p8: kt,
                p9: Tt,
                p10: Pt,
                p11: Mt,
                p12: Lt,
                p0_thumb: dt,
                p1_thumb: ht,
                p2_thumb: mt,
                p3_thumb: ft,
                p4_thumb: vt,
                p5_thumb: yt,
                p6_thumb: xt,
                p7_thumb: Et,
                p8_thumb: At,
                p9_thumb: Ct,
                p10_thumb: Ot,
                p11_thumb: It,
                p12_thumb: jt
            },
            br: {
                title: "READ THE COMIC",
                p0: Rt,
                p1: zt,
                p2: Gt,
                p3: qt,
                p4: Ht,
                p5: Ut,
                p6: Vt,
                p7: $t,
                p8: Zt,
                p9: Qt,
                p10: ti,
                p11: oi,
                p12: si,
                p0_thumb: Nt,
                p1_thumb: Dt,
                p2_thumb: Ft,
                p3_thumb: Bt,
                p4_thumb: Xt,
                p5_thumb: Wt,
                p6_thumb: Yt,
                p7_thumb: Kt,
                p8_thumb: Jt,
                p9_thumb: ei,
                p10_thumb: ii,
                p11_thumb: ni,
                p12_thumb: ai
            },
            mx: {
                title: "READ THE COMIC",
                p0: lt,
                p1: ut,
                p2: pt,
                p3: gt,
                p4: bt,
                p5: wt,
                p6: St,
                p7: _t,
                p8: kt,
                p9: Tt,
                p10: Pt,
                p11: Mt,
                p12: Lt,
                p0_thumb: dt,
                p1_thumb: ht,
                p2_thumb: mt,
                p3_thumb: ft,
                p4_thumb: vt,
                p5_thumb: yt,
                p6_thumb: xt,
                p7_thumb: Et,
                p8_thumb: At,
                p9_thumb: Ct,
                p10_thumb: Ot,
                p11_thumb: It,
                p12_thumb: jt
            }
        }
          , gi = h.Z.get("lang");
        document.querySelector("html").lang = {
            en: "en-US",
            uk: "en-UK",
            au: "en-AU",
            fr: "fr-FR",
            it: "it-IT",
            de: "de-DE",
            es: "es-ES",
            br: "pt-BR",
            mx: "mx-ES"
        }[gi.toLowerCase()],
        function(e) {
            document.querySelector('[data-country="'.concat(e, '"]')).classList.add("noFlag"),
            document.querySelector(".eflags__selected .eflags__text").textContent = ci[e].flag,
            document.querySelector(".navigation__media h2").textContent = ci[e].mediaNav,
            document.querySelector(".navigation__features h2").textContent = ci[e].featuresNav,
            document.querySelector(".navigation__characters h2").textContent = ci[e].characterNav,
            document.querySelector(".navigation__comic h2").textContent = ci[e].comicNav,
            document.querySelector(".navigation__newsletter h2").textContent = ci[e].newsletter,
            document.querySelector(".navigation__newsletter h5").textContent = ci[e].newsletter,
            document.querySelector(".navigation__newsletter h2").title = ci[e].newsletter.toUpperCase(),
            document.querySelector(".navigation__newsletter h5").title = ci[e].newsletter.toUpperCase(),
            document.querySelector(".hero__callout").innerHTML = ci[e].available,
            document.querySelector(".loader__text").textContent = ci[e].loading,
            document.querySelector(".hero__watch h5").textContent = ci[e].trailer,
            document.querySelector(".hero__purchase h5").textContent = ci[e].purchase
        }(gi),
        function(e) {
            document.querySelector(".watchText").textContent = di[e].animation,
            document.querySelector(".media__text").textContent = di[e].sectionTitle,
            document.querySelector(".heroTrailer").href = di[e].launch,
            document.querySelector(".announceTrailer").href = di[e].announcement,
            document.querySelector(".legoTrailer").href = di[e].lego,
            document.querySelector(".multiplayerTrailer").href = di[e].multiplayer,
            document.querySelector(".trioTrailer").href = di[e].trio,
            document.querySelector(".launchTrailer").href = di[e].launch,
            document.querySelector(".norunningTrailer").href = di[e].norunning,
            "en" === e ? (document.querySelector(".accoladesTrailer").href = di[e].accolades,
            document.querySelector(".accoladesHideMe").classList.remove("carousel__hide"),
            document.querySelector(".heroTrailer").href = di[e].accolades) : (document.querySelector(".accoladesHideMe").classList.add("carousel__hide"),
            document.querySelector(".heroTrailer").href = di[e].launch)
        }(gi),
        function(e) {
            document.querySelector(".features__text").textContent = ui[e].sectionTitle,
            document.querySelector(".feature__title--1").textContent = ui[e].featureTitle_1,
            document.querySelector(".features__text--1").innerHTML = ui[e].featureText_1,
            document.querySelector(".feature__title--2").textContent = ui[e].featureTitle_2,
            document.querySelector(".features__text--2").innerHTML = ui[e].featureText_2,
            document.querySelector(".feature__title--3").textContent = ui[e].featureTitle_3,
            document.querySelector(".features__text--3").innerHTML = ui[e].featureText_3,
            document.querySelector(".feature__title--4").textContent = ui[e].featureTitle_4,
            document.querySelector(".features__text--4").innerHTML = ui[e].featureText_4,
            document.querySelector(".feature__title--5").textContent = ui[e].featureTitle_5,
            document.querySelector(".features__text--5").innerHTML = ui[e].featureText_5
        }(gi),
        function(e) {
            document.querySelector(".subscribe__text").textContent = hi[e].sectionTitle,
            document.querySelector(".signup__title--1").textContent = hi[e].header,
            document.querySelector(".signup__text--1").innerHTML = hi[e].text
        }(gi),
        function(e) {
            document.querySelector(".footer__connect").textContent = pi[e].connect,
            document.querySelector(".footer__newsletterButton").textContent = pi[e].subscribe,
            document.querySelector(".rating_icons").innerHTML = pi[e].logos,
            document.querySelector(".footer__copy").innerHTML = pi[e].copy,
            document.querySelector(".cookie").href = pi[e].cookie,
            document.querySelector(".privacy").href = pi[e].privacy,
            document.querySelector(".cookie").textContent = pi[e].cookieText,
            document.querySelector(".privacy").textContent = pi[e].privacyText
        }(gi),
        function(e) {
            document.querySelector(".comics__text").textContent = mi[e].title,
            document.querySelector(".comics0 a").href = mi[e].p0,
            document.querySelector(".comics0 a img").src = mi[e].p0_thumb,
            document.querySelector(".comics1 a").href = mi[e].p1,
            document.querySelector(".comics1 a img").src = mi[e].p1_thumb,
            document.querySelector(".comics2 a").href = mi[e].p2,
            document.querySelector(".comics2 a img").src = mi[e].p2_thumb,
            document.querySelector(".comics3 a").href = mi[e].p3,
            document.querySelector(".comics3 a img").src = mi[e].p3_thumb,
            document.querySelector(".comics4 a").href = mi[e].p4,
            document.querySelector(".comics4 a img").src = mi[e].p4_thumb,
            document.querySelector(".comics5 a").href = mi[e].p5,
            document.querySelector(".comics5 a img").src = mi[e].p5_thumb,
            document.querySelector(".comics6 a").href = mi[e].p6,
            document.querySelector(".comics6 a img").src = mi[e].p6_thumb,
            document.querySelector(".comics7 a").href = mi[e].p7,
            document.querySelector(".comics7 a img").src = mi[e].p7_thumb,
            document.querySelector(".comics8 a").href = mi[e].p8,
            document.querySelector(".comics8 a img").src = mi[e].p8_thumb,
            document.querySelector(".comics9 a").href = mi[e].p9,
            document.querySelector(".comics9 a img").src = mi[e].p9_thumb,
            document.querySelector(".comics10 a").href = mi[e].p10,
            document.querySelector(".comics10 a img").src = mi[e].p10_thumb,
            document.querySelector(".comics11 a").href = mi[e].p11,
            document.querySelector(".comics11 a img").src = mi[e].p11_thumb,
            document.querySelector(".comics12 a").href = mi[e].p12,
            document.querySelector(".comics12 a img").src = mi[e].p12_thumb
        }(gi),
        function(e) {
            document.querySelector(".modal__header").innerHTML = li[e].header1,
            document.querySelector(".modal__text").innerHTML = li[e].text1
        }(gi)
    },
    1741: function(e, t, i) {
        var o, n, s, a, r, c, l, d, u, h = i(1955), p = i(8769), m = i(3217), g = i(2516), f = i(3746), b = i(6842), v = i(6002);
        function w(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        var y = {
            en: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/UP0177-PPSA06888_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/UP0177-PPSA06888_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Best Buy",
                        link: "https://www.bestbuy.com/site/sonic-superstars-playstation-5/6509090.p?skuId=6509090#anchor=productVariations"
                    }, {
                        name: "GameStop",
                        link: "https://www.gamestop.com/video-games/products/sonic-superstars---playstation-5/396484.html"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.com/dp/B0C915HKTK?th=1"
                    }, {
                        name: "Target",
                        link: "https://www.target.com/p/sonic-superstars-playstation-5/-/A-89435246#lnk=sametab"
                    }, {
                        name: "Walmart",
                        link: "https://www.walmart.com/ip/Sonic-Superstars-PlayStation-5/3786366912?from=/search"
                    }, {
                        name: "VGP",
                        link: "https://videogamesplus.ca/products/sonic-superstars-ps5?_pos=2&_sid=4025a1827&_ss=r"
                    }, {
                        name: "Gamestop.CA",
                        link: "https://www.gamestop.ca/PS5/Games/909474/sonic-superstars"
                    }, {
                        name: "Amazon.CA",
                        link: "https://www.amazon.ca/SEGA-Sonic-Superstars-PlayStation-5/dp/B0C915HKTK/ref=sr_1_2"
                    }]
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/UP0177-CUSA32739_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/UP0177-CUSA32739_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Best Buy",
                        link: "https://www.bestbuy.com/site/sonic-superstars-playstation-4/6509092.p?skuId=6509092#anchor=productVariations"
                    }, {
                        name: "GameStop",
                        link: "https://www.gamestop.com/video-games/products/sonic-superstars---playstation-4/396482.html"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.com/dp/B0C8ZW6391?th=1"
                    }, {
                        name: "Target",
                        link: "https://www.target.com/p/sonic-superstars-playstation-4/-/A-89435231#lnk=sametab"
                    }, {
                        name: "Walmart",
                        link: "https://www.walmart.com/ip/Sonic-Superstars-PlayStation-4/3632594759?from=/search"
                    }, {
                        name: "VGP",
                        link: "https://videogamesplus.ca/products/sonic-superstars-ps4?_pos=3&_sid=4025a1827&_ss=r"
                    }, {
                        name: "Gamestop.CA",
                        link: "https://www.gamestop.ca/PS4/Games/909473/sonic-superstars"
                    }, {
                        name: "Amazon.CA",
                        link: "https://www.amazon.ca/SEGA-Sonic-Superstars-PlayStation-4/dp/B0C915HKTK/ref=sr_1_2"
                    }]
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: [{
                        name: "Best Buy",
                        link: "https://www.bestbuy.com/site/sonic-superstars-xbox-series-x-xbox-one/6509099.p?skuId=6509099#anchor=productVariations"
                    }, {
                        name: "GameStop",
                        link: "https://www.gamestop.com/video-games/products/sonic-superstars---xbox-series-x-xbox-one/396486.html"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.com/dp/B0C9164THC?th=1"
                    }, {
                        name: "Target",
                        link: "https://www.target.com/p/sonic-superstars-xbox-series-x/-/A-89435218#lnk=sametab"
                    }, {
                        name: "Walmart",
                        link: "https://www.walmart.com/ip/Sonic-Superstars-Xbox-Series-X/2733130641?from=/search"
                    }, {
                        name: "VGP",
                        link: "https://videogamesplus.ca/products/sonic-superstars-1?_pos=4&_sid=4025a1827&_ss=r"
                    }, {
                        name: "Gamestop.CA",
                        link: "https://www.gamestop.ca/Xbox%20Series%20X/Games/909475/sonic-superstars"
                    }, {
                        name: "Amazon.CA",
                        link: "https://www.amazon.ca/SEGA-Sonic-Superstars-xbox/dp/B0C9164THC/ref=sr_1_2?th=1"
                    }]
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.com/store/products/sonic-superstars-switch/",
                        deluxe: "https://www.nintendo.com/store/products/sonic-superstars-switch/"
                    },
                    physical: [{
                        name: "Best Buy",
                        link: "https://www.bestbuy.com/site/sonic-superstars-nintendo-switch/6509100.p?skuId=6509100"
                    }, {
                        name: "GameStop",
                        link: "https://www.gamestop.com/video-games/products/sonic-superstars---nintendo-switch/396488.html"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.com/dp/B0C91MLPNG/?th=1"
                    }, {
                        name: "Target",
                        link: "https://www.target.com/p/sonic-superstars-nintendo-switch/-/A-89435260#lnk=sametab"
                    }, {
                        name: "Walmart",
                        link: "https://www.walmart.com/ip/Sonic-Superstars-Nintendo-Switch/3186192448?from=/search"
                    }, {
                        name: "VGP",
                        link: "https://videogamesplus.ca/products/sonic-superstars?_pos=1&_sid=4025a1827&_ss=r"
                    }, {
                        name: "Gamestop.CA",
                        link: "https://www.gamestop.ca/Switch/Games/909476/sonic-superstars"
                    }, {
                        name: "Amazon.CA",
                        link: "https://www.amazon.ca/SEGA-Sonic-Superstars-switch/dp/B0C91MLPNG/ref=sr_1_2?th=1"
                    }]
                },
                steam: {
                    digital: {
                        standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                        deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                    }
                },
                epic: {
                    digital: {
                        standard: "https://store.epicgames.com/p/sonic-superstars",
                        deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                    }
                }
            },
            au: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-PPSA06889_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-PPSA06889_00-SONICORION000000"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.com.au/dp/B0C9CB1PPD"
                    }, {
                        name: "JB HiFi",
                        link: "https://www.jbhifi.com.au/products/playstation-5-sonic-superstars"
                    }, {
                        name: "EB Games",
                        link: "https://www.ebgames.com.au/product/ps5/275161-sonic-superstars"
                    }, {
                        name: "Mighty Ape (NZ)",
                        link: "https://www.mightyape.co.nz/product/sonic-superstars-ps5/36663907"
                    }]
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-CUSA32740_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-CUSA32740_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.com.au/dp/B0C9C96RRK"
                    }, {
                        name: "JB HiFi",
                        link: "https://www.jbhifi.com.au/products/playstation-4-sonic-superstars"
                    }, {
                        name: "EB Games",
                        link: "https://www.ebgames.com.au/product/ps4/287600-sonic-superstars"
                    }, {
                        name: "Mighty Ape (NZ)",
                        link: "https://www.mightyape.co.nz/product/sonic-superstars-ps4/36663908"
                    }]
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.com.au/dp/B0C9CBR79C"
                    }, {
                        name: "JB HiFi",
                        link: "https://www.jbhifi.com.au/products/xbox-series-x-sonic-superstars"
                    }, {
                        name: "EB Games",
                        link: "https://www.ebgames.com.au/product/xbox-series-x/266791-sonic-superstars"
                    }, {
                        name: "Mighty Ape (NZ)",
                        link: "https://www.mightyape.co.nz/product/sonic-superstars-xbox-series-x-xbox-one/36663910"
                    }]
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.com.au/games/nintendo-switch/sonic-superstars",
                        deluxe: "https://www.nintendo.com.au/games/nintendo-switch/sonic-superstars"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.com.au/dp/B0C9CFFMZ3"
                    }, {
                        name: "JB HiFi",
                        link: "https://www.jbhifi.com.au/products/nintendo-switch-sonic-superstars"
                    }, {
                        name: "EB Games",
                        link: "https://www.ebgames.com.au/product/nintendo-switch/275067-sonic-superstars"
                    }, {
                        name: "Mighty Ape (NZ)",
                        link: "https://www.mightyape.co.nz/product/sonic-superstars-switch/36663912"
                    }]
                },
                steam: {
                    digital: {
                        standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                        deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                    }
                },
                epic: {
                    digital: {
                        standard: "https://store.epicgames.com/p/sonic-superstars",
                        deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                    }
                }
            },
            uk: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-PPSA06889_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-PPSA06889_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.co.uk/dp/B0C7RFFCHZ"
                    }, {
                        name: "GAME",
                        link: "https://www.game.co.uk/en/sonic-superstars-2914093"
                    }, {
                        name: "Simply Games",
                        link: "https://www.simplygames.com/p/sonic-superstars-ps5"
                    }, {
                        name: "Smyths Toys",
                        link: "https://www.smythstoys.com/p/229674"
                    }, {
                        name: "The Game Collection",
                        link: "https://www.thegamecollection.net/sonic-superstars-ps5"
                    }, {
                        name: "365 Games",
                        link: "https://365games.co.uk/gaming/ps5/games/sonic-superstars-ps5/"
                    }]
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-CUSA32740_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-CUSA32740_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.co.uk/dp/B0C7RD5RX7"
                    }, {
                        name: "GAME",
                        link: "https://www.game.co.uk/en/sonic-superstars-2914090"
                    }, {
                        name: "Simply Games",
                        link: "https://www.simplygames.com/p/sonic-superstars-ps4"
                    }, {
                        name: "Smyths Toys",
                        link: "https://www.smythstoys.com/p/229675"
                    }, {
                        name: "The Game Collection",
                        link: "https://www.thegamecollection.net/sonic-superstars-ps4"
                    }, {
                        name: "365 Games",
                        link: "https://365games.co.uk/gaming/ps4/games/sonic-superstars-ps4/"
                    }]
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.co.uk/dp/B0C7RGHKZ5"
                    }, {
                        name: "GAME",
                        link: "https://www.game.co.uk/en/sonic-superstars-2914096"
                    }, {
                        name: "Simply Games",
                        link: "https://www.simplygames.com/p/sonic-superstars-xbox-series-x--s"
                    }, {
                        name: "Smyths Toys",
                        link: "https://www.smythstoys.com/p/229673"
                    }, {
                        name: "The Game Collection",
                        link: "https://www.thegamecollection.net/sonic-superstars-xbox-series-x"
                    }, {
                        name: "365 Games",
                        link: "https://365games.co.uk/gaming/xbox-series-x/games/sonic-superstars-xbox-series-x-xbox-one/"
                    }]
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.co.uk/Games/Nintendo-Switch-games/Sonic-Superstars-2401782.html",
                        deluxe: "https://www.nintendo.co.uk/Games/Nintendo-Switch-games/Sonic-Superstars-2401782.html"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.co.uk/dp/B0C7RGHKZ5"
                    }, {
                        name: "GAME",
                        link: "https://www.game.co.uk/en/sonic-superstars-2914096"
                    }, {
                        name: "Simply Games",
                        link: "https://www.simplygames.com/p/sonic-superstars-nintendo-switch"
                    }, {
                        name: "Smyths Toys",
                        link: "https://www.smythstoys.com/p/229676"
                    }, {
                        name: "The Game Collection",
                        link: "https://www.thegamecollection.net/sonic-superstars-switch"
                    }, {
                        name: "365 Games",
                        link: "https://365games.co.uk/gaming/nintendo-switch/games/sonic-superstars-nintendo-switch/"
                    }]
                },
                steam: {
                    digital: {
                        standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                        deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                    }
                },
                epic: {
                    digital: {
                        standard: "https://store.epicgames.com/p/sonic-superstars",
                        deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                    }
                }
            },
            fr: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-PPSA06889_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-PPSA06889_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.fr/SEGA-Sonic-Superstars-Xbox/dp/B0C9DHN8D4/ref=sr_1_4?crid=2HHPPPOTOOE18&keywords=sonic%2Bsuperstar&qid=1687962469&sprefix=sonic%2Bsuper%2Caps%2C70&sr=8-4&th=1"
                    }, {
                        name: "Leclerc",
                        link: "https://www.e.leclerc/fp/sonic-superstars-ps5-5055277051687"
                    }, {
                        name: "Micromania",
                        link: "https://www.micromania.fr/sonic-superstars-134543.html"
                    }, {
                        name: "FNAC",
                        link: "https://www.fnac.com/a18301824/Sonic-Superstars-PS5-Jeu-video-Playstation-5"
                    }, {
                        name: "Cultura",
                        link: "https://www.cultura.com/p-sonic-superstars-5055277051687.html"
                    }]
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-CUSA32740_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-CUSA32740_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.fr/SEGA-Sonic-Superstars-Xbox/dp/B0C9DD9G9T/ref=sr_1_4?crid=2HHPPPOTOOE18&keywords=sonic%2Bsuperstar&qid=1687962469&sprefix=sonic%2Bsuper%2Caps%2C70&sr=8-4&th=1"
                    }, {
                        name: "Leclerc",
                        link: "https://www.e.leclerc/fp/sonic-superstars-ps4-5055277051595"
                    }, {
                        name: "Micromania",
                        link: "https://www.micromania.fr/sonic-superstars-134541.html"
                    }, {
                        name: "FNAC",
                        link: "https://www.fnac.com/a18301793/Sonic-Superstars-PS4-Jeu-video-PlayStation-4#omnsearchpos=4"
                    }, {
                        name: "Cultura",
                        link: "https://www.cultura.com/p-sonic-superstars-5055277051595.html"
                    }]
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.fr/SEGA-Sonic-Superstars-Xbox/dp/B0C9DV8YTY/ref=sr_1_4?crid=2HHPPPOTOOE18&keywords=sonic%2Bsuperstar&qid=1687962469&sprefix=sonic%2Bsuper%2Caps%2C70&sr=8-4&th=1"
                    }, {
                        name: "Leclerc",
                        link: "https://www.e.leclerc/fp/sonic-superstars-xbox-series-5055277051861"
                    }, {
                        name: "Micromania",
                        link: "https://www.micromania.fr/sonic-superstars-134545.html"
                    }, {
                        name: "FNAC",
                        link: "https://www.fnac.com/a18301794/Sonic-Superstars-Xbox-Jeu-video-Xbox-Series"
                    }, {
                        name: "Cultura",
                        link: "https://www.cultura.com/p-sonic-superstars-5055277051861.html"
                    }]
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.fr/Jeux/Jeux-Nintendo-Switch/Sonic-Superstars-2401782.html",
                        deluxe: "https://www.nintendo.fr/Jeux/Jeux-Nintendo-Switch/Sonic-Superstars-2401782.html"
                    },
                    physical: [{
                        name: "Amazon",
                        link: "https://www.amazon.fr/SEGA-Sonic-Superstars-Xbox/dp/B0C9DHPF47/ref=sr_1_4?crid=2HHPPPOTOOE18&keywords=sonic%2Bsuperstar&qid=1687962469&sprefix=sonic%2Bsuper%2Caps%2C70&sr=8-4&th=1"
                    }, {
                        name: "Leclerc",
                        link: "https://www.e.leclerc/fp/sonic-superstars-switch-5055277051779"
                    }, {
                        name: "Micromania",
                        link: "https://www.micromania.fr/sonic-superstars-134547.html"
                    }, {
                        name: "FNAC",
                        link: "https://www.fnac.com/a18301815/Sonic-Superstars-Nintendo-Switch-Jeu-video-Nintendo-Switch"
                    }, {
                        name: "Cultura",
                        link: "https://www.cultura.com/p-sonic-superstars-5055277051779.html"
                    }]
                },
                steam: {
                    digital: {
                        standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                        deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                    }
                },
                epic: {
                    digital: {
                        standard: "https://store.epicgames.com/p/sonic-superstars",
                        deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                    }
                }
            },
            de: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-PPSA06889_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-PPSA06889_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Saturn",
                        link: "https://www.saturn.de/de/product/_ps5-sonic-superstars-playstation-5-2884095.html"
                    }, {
                        name: "MediaMarkt",
                        link: "https://www.mediamarkt.de/de/product/_ps5-sonic-superstars-playstation-5-2884095.html"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.de/dp/B0C964TZ3P"
                    }, {
                        name: "WorldOfGames",
                        link: "https://www.wog.ch/index.cfm/details/product/169980-Sonic-Superstars"
                    }, {
                        name: "Gameware",
                        link: "https://www.gameware.at/info/space/Sonic+Superstars?emphasize=NX-SOSU"
                    }, {
                        name: "GamesOnly",
                        link: "https://www.gamesonly.at/Sonic_Superstars_PS5__17167.html"
                    }]
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-CUSA32740_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-CUSA32740_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Saturn",
                        link: "https://www.saturn.de/de/product/_sonic-superstars-playstation-4-2884090.html"
                    }, {
                        name: "MediaMarkt",
                        link: "https://www.mediamarkt.de/de/product/_sonic-superstars-playstation-4-2884090.html"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.de/dp/B0C966VPM1?th=1"
                    }, {
                        name: "WorldOfGames",
                        link: "https://www.wog.ch/index.cfm/details/product/169977-Sonic-Superstars"
                    }, {
                        name: "Gameware",
                        link: "https://www.gameware.at/info/space/Sonic+Superstars?emphasize=NX-SOSU"
                    }, {
                        name: "GamesOnly",
                        link: "https://www.gamesonly.at/Sonic_Superstars_PS4_17168.html"
                    }]
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: [{
                        name: "Saturn",
                        link: "https://www.saturn.de/de/product/_xbx-sonic-superstars-xbox-series-x-2884096.html"
                    }, {
                        name: "MediaMarkt",
                        link: "https://www.mediamarkt.de/de/product/_xbx-sonic-superstars-xbox-series-x-2884096.html"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.de/dp/B0C964437L?th=1"
                    }, {
                        name: "WorldOfGames",
                        link: "https://www.wog.ch/index.cfm/details/product/169982-Sonic-Superstars"
                    }, {
                        name: "Gameware",
                        link: "https://www.gameware.at/info/space/Sonic+Superstars?emphasize=NX-SOSU"
                    }, {
                        name: "GamesOnly",
                        link: "https://www.gamesonly.at/Sonic_Superstars_Xbox_17170.html"
                    }]
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.de/Spiele/Nintendo-Switch-Spiele/Sonic-Superstars-2401782.html",
                        deluxe: "https://www.nintendo.de/Spiele/Nintendo-Switch-Spiele/Sonic-Superstars-2401782.html"
                    },
                    physical: [{
                        name: "Saturn",
                        link: "https://www.saturn.de/de/product/_sw-sonic-superstars-nintendo-switch-2884093.html"
                    }, {
                        name: "MediaMarkt",
                        link: "https://www.mediamarkt.de/de/product/_sw-sonic-superstars-nintendo-switch-2884093.html"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.de/dp/B0C9661SK6?th=1"
                    }, {
                        name: "WorldOfGames",
                        link: "https://www.wog.ch/index.cfm/details/product/169983-Sonic-Superstars"
                    }, {
                        name: "Gameware",
                        link: "https://www.gameware.at/info/space/Sonic+Superstars?emphasize=NX-SOSU"
                    }, {
                        name: "GamesOnly",
                        link: "https://www.gamesonly.at/Sonic_Superstars_Nintendo_Switch_17169.html"
                    }]
                },
                steam: {
                    digital: {
                        standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                        deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                    }
                },
                epic: {
                    digital: {
                        standard: "https://store.epicgames.com/p/sonic-superstars",
                        deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                    }
                }
            },
            it: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-PPSA06889_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-PPSA06889_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Gametekk",
                        link: "https://www.saturn.de/de/product/_sw-sonic-superstars-nintendo-switch-2884093.html"
                    }, {
                        name: "Gamepeople",
                        link: "https://www.gamepeople.it/index.php?id=prodotti&page=scheda&code=PS50393"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.it/SEGA-Sonic-Superstars/dp/B0C9DKPYY9/ref=sr_1_4?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33E7NP13UCSP0&keywords=sonic+superstars&qid=1687966946&s=videogames&sprefix=sonic+superstars%2Cvideogames%2C90&sr=1-4"
                    }]
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-CUSA32740_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-CUSA32740_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Gametekk",
                        link: "https://www.saturn.de/de/product/_sw-sonic-superstars-nintendo-switch-2884093.html"
                    }, {
                        name: "Gamepeople",
                        link: "https://www.gamepeople.it/index.php?id=prodotti&page=scheda&code=PS41825"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.it/SEGA-Sonic-Superstars/dp/B0C9CS4GLJ/ref=sr_1_5?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33E7NP13UCSP0&keywords=sonic+superstars&qid=1687966946&s=videogames&sprefix=sonic+superstars%2Cvideogames%2C90&sr=1-5"
                    }]
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: [{
                        name: "Gametekk",
                        link: "https://www.saturn.de/de/product/_sw-sonic-superstars-nintendo-switch-2884093.html"
                    }, {
                        name: "Gamepeople",
                        link: "https://www.gamepeople.it/index.php?id=prodotti&page=scheda&code=XBX0249"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.it/SEGA-Sonic-Superstars/dp/B0C9D73Z52/ref=sr_1_6?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33E7NP13UCSP0&keywords=sonic+superstars&qid=1687966946&s=videogames&sprefix=sonic+superstars%2Cvideogames%2C90&sr=1-6"
                    }]
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.it/Giochi/Giochi-per-Nintendo-Switch/Sonic-Superstars-2401782.html",
                        deluxe: "https://www.nintendo.it/Giochi/Giochi-per-Nintendo-Switch/Sonic-Superstars-2401782.html"
                    },
                    physical: [{
                        name: "Gametekk",
                        link: "https://www.saturn.de/de/product/_sw-sonic-superstars-nintendo-switch-2884093.html"
                    }, {
                        name: "Gamepeople",
                        link: "https://www.gamepeople.it/index.php?id=prodotti&page=scheda&code=SWI0891"
                    }, {
                        name: "Amazon",
                        link: "https://www.amazon.it/SEGA-Sonic-Superstars/dp/B0C9CZSZBB/ref=sr_1_2?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=33E7NP13UCSP0&keywords=sonic+superstars&qid=1687966946&s=videogames&sprefix=sonic+superstars%2Cvideogames%2C90&sr=1-2"
                    }]
                },
                steam: {
                    digital: {
                        standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                        deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                    }
                },
                epic: {
                    digital: {
                        standard: "https://store.epicgames.com/p/sonic-superstars",
                        deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                    }
                }
            },
            es: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-PPSA06889_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-PPSA06889_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "GAME",
                        link: "https://www.game.es/VIDEOJUEGOS/PLATAFORMAS/PLAYSTATION-5/SONIC-SUPERSTARS/220308"
                    }, {
                        name: "Xtralife",
                        link: "https://www.xtralife.com/producto/sonic-superstars-ps5-estandar/80065"
                    }, {
                        name: "FNAC",
                        link: "https://www.fnac.es/Sonic-Superstars-PS5-Videojuego-PS5/a10310548#omnsearchpos=2"
                    }]
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-CUSA32740_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-CUSA32740_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "GAME",
                        link: "https://www.game.es/VIDEOJUEGOS/PLATAFORMAS/PLAYSTATION-4/SONIC-SUPERSTARS/220307"
                    }, {
                        name: "Xtralife",
                        link: "https://www.xtralife.com/producto/sonic-superstars-ps4-estandar/80066"
                    }, {
                        name: "FNAC",
                        link: "https://www.fnac.es/Sonic-Superstars-PS4-Videojuego-PS4/a10310547#omnsearchpos=3"
                    }]
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: [{
                        name: "GAME",
                        link: "https://www.game.es/VIDEOJUEGOS/PLATAFORMAS/XBOX-ONE/SONIC-SUPERSTARS/220309"
                    }, {
                        name: "Xtralife",
                        link: "https://www.xtralife.com/producto/sonic-superstars-xbox-series-xbox-one-estandar/80068"
                    }, {
                        name: "FNAC",
                        link: "https://www.fnac.es/Sonic-Superstars-Xbox-Xeries-X-Xbox-One-Videojuego-Xbox-Series/a10310549#omnsearchpos=1"
                    }]
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.es/Juegos/Juegos-de-Nintendo-Switch/Sonic-Superstars-2401782.html",
                        deluxe: "https://www.nintendo.es/Juegos/Juegos-de-Nintendo-Switch/Sonic-Superstars-2401782.html"
                    },
                    physical: [{
                        name: "GAME",
                        link: "https://www.game.es/VIDEOJUEGOS/PLATAFORMAS/NINTENDO-SWITCH/SONIC-SUPERSTARS/220310"
                    }, {
                        name: "Xtralife",
                        link: "https://www.xtralife.com/producto/sonic-superstars-switch-estandar/80067"
                    }, {
                        name: "FNAC",
                        link: "https://www.fnac.es/Sonic-Superstars-Nintendo-Switch-Videojuego-Nintendo-Switch/a10310550#omnsearchpos=4"
                    }]
                },
                steam: {
                    digital: {
                        standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                        deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                    }
                },
                epic: {
                    digital: {
                        standard: "https://store.epicgames.com/p/sonic-superstars",
                        deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                    }
                }
            },
            mx: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/UP0177-PPSA06888_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/UP0177-PPSA06888_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Game Planet",
                        link: "https://gameplanet.com/producto/sonic-superstars-ps5/"
                    }, {
                        name: "Liverpool",
                        link: "https://www.liverpool.com.mx/tienda/pdp/sonic-superstars-est%C3%A1ndar-para-ps5-f%C3%ADsico/1139097331"
                    }]
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-CUSA32740_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-CUSA32740_00-ORIONDX000000000"
                    },
                    physical: [{
                        name: "Game Planet",
                        link: "https://gameplanet.com/producto/sonic-superstars-ps4/"
                    }, {
                        name: "Liverpool",
                        link: "https://www.liverpool.com.mx/tienda/pdp/sonic-superstars-est%C3%A1ndar-para-ps4-f%C3%ADsico/1139097323"
                    }]
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: [{
                        name: "Game Planet",
                        link: "https://gameplanet.com/producto/sonic-superstars-xsx/"
                    }, {
                        name: "Liverpool",
                        link: "https://www.liverpool.com.mx/tienda/pdp/sonic-superstars-est%C3%A1ndar-para-xbox-series-x-/-xbox-one-f%C3%ADsico/1139097340"
                    }]
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.com/store/products/sonic-superstars-switch/",
                        deluxe: "https://www.nintendo.com/store/products/sonic-superstars-switch/"
                    },
                    physical: [{
                        name: "Game Planet",
                        link: "https://gameplanet.com/producto/sonic-superstars-nsw/"
                    }, {
                        name: "Liverpool",
                        link: "https://www.liverpool.com.mx/tienda/pdp/Sonic-Superstars-Edicion-Estandar-para-Nintendo-Switch-Fisico/1139054888"
                    }]
                },
                steam: {
                    digital: {
                        standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                        deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                    }
                },
                epic: {
                    digital: {
                        standard: "https://store.epicgames.com/p/sonic-superstars",
                        deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                    }
                }
            },
            br: {
                ps5: {
                    digital: {
                        standard: "https://store.playstation.com/product/UP0177-PPSA06888_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/UP0177-PPSA06888_00-ORIONDX000000000"
                    },
                    physical: []
                },
                ps4: {
                    digital: {
                        standard: "https://store.playstation.com/product/EP0177-CUSA32740_00-SONICORION000000",
                        deluxe: "https://store.playstation.com/product/EP0177-CUSA32740_00-ORIONDX000000000"
                    },
                    physical: []
                },
                xbox: {
                    digital: {
                        standard: "https://www.microsoft.com/store/productid/9NL9H587WGMJ",
                        deluxe: "https://www.microsoft.com/store/productid/9NR2S404JX3X"
                    },
                    physical: []
                },
                switch: {
                    digital: {
                        standard: "https://www.nintendo.com/store/products/sonic-superstars-switch/",
                        deluxe: "https://www.nintendo.com/store/products/sonic-superstars-switch/"
                    },
                    physical: []
                }
            },
            steam: {
                digital: {
                    standard: "https://store.steampowered.com/app/2022670/Sonic_Superstars/",
                    deluxe: "https://store.steampowered.com/app/2022670/Sonic_Superstars/"
                }
            },
            epic: {
                digital: {
                    standard: "https://store.epicgames.com/p/sonic-superstars",
                    deluxe: "https://store.epicgames.com/p/sonic-superstars--deluxe-edition"
                }
            }
        }
          , S = {
            comingSoon: {
                en: "Links Coming Soon",
                uk: "Links Coming Soon",
                au: "Links Coming Soon",
                fr: "Liens bientôt disponibles",
                it: "Collegamenti presto disponibili",
                de: "Links bald verfügbar",
                es: "Enlaces muy pronto",
                br: "Links em breve",
                mx: "Próximamente los enlaces"
            },
            en: (o = {
                title: "Pre-Order"
            },
            w(o, "title", "Available Now"),
            w(o, "platforms", "Choose A Platform"),
            w(o, "version", "Select A Version"),
            w(o, "preOrder", "Pre-Order"),
            w(o, "buyNow", "Buy Now"),
            w(o, "comingsoon", "Coming Soon"),
            w(o, "retail", "physical"),
            w(o, "digital", "digital"),
            w(o, "included", "Included with Pre-Order:"),
            w(o, "basegame", "Base Game"),
            w(o, "physicalstandardtext", "LEGO Eggman In-Game Character Skin<br>Reversible Cover<br>Collectible Acrylic Display (only at Best Buy, Target, GameStop and Walmart) Subject to Availability"),
            w(o, "digitaltext", '1. LEGO&reg; Fun Pack <br>2. Digital Artbook & Mini Original Soundtrack <br>3. Extra Content Pack:<br><ol class="table__list" type="a"><li>Sonic Rabbit Skin</li><li>Mecha Sonic Skin for Battle Mode</li><li>Bonus Main Menu Wallpapers</li></ol>'),
            w(o, "legotext", "LEGO Eggman In-Game Character Skin"),
            w(o, "deluxeGlam", b),
            w(o, "standardGlam", v),
            o),
            au: (n = {
                title: "Pre-Order"
            },
            w(n, "title", "Available Now"),
            w(n, "platforms", "Choose A Platform"),
            w(n, "version", "Select A Version"),
            w(n, "preOrder", "Pre-Order"),
            w(n, "buyNow", "Buy Now"),
            w(n, "comingsoon", "Coming Soon"),
            w(n, "standard", "Standard Edition"),
            w(n, "retail", "physical"),
            w(n, "digital", "digital"),
            w(n, "included", "Included with Pre-Order:"),
            w(n, "basegame", "Base Game"),
            w(n, "physicalstandardtext", "LEGO Eggman In-Game Character Skin<br>Reversible Cover"),
            w(n, "digitaltext", '1. LEGO&reg; Fun Pack <br>2. Digital Artbook & Mini Original Soundtrack <br>3. Extra Content Pack:<br><ol class="table__list" type="a"><li>Sonic Rabbit Skin</li><li>Mecha Sonic Skin for Battle Mode</li><li>Bonus Main Menu Wallpapers</li></ol>'),
            w(n, "legotext", "LEGO Eggman In-Game Character Skin"),
            w(n, "deluxeGlam", b),
            w(n, "standardGlam", v),
            n),
            uk: (s = {
                title: "Pre-Order"
            },
            w(s, "title", "Available Now"),
            w(s, "platforms", "Choose A Platform"),
            w(s, "version", "Select A Version"),
            w(s, "preOrder", "Pre-Order"),
            w(s, "buyNow", "Buy Now"),
            w(s, "comingsoon", "Coming Soon"),
            w(s, "retail", "physical"),
            w(s, "digital", "digital"),
            w(s, "included", "Included with Pre-Order:"),
            w(s, "basegame", "Base Game"),
            w(s, "physicalstandardtext", "LEGO Eggman In-Game Character Skin<br>Reversible Cover"),
            w(s, "digitaltext", '1. LEGO&reg; Fun Pack <br>2. Digital Artbook & Mini Original Soundtrack <br>3. Extra Content Pack:<br><ol class="table__list" type="a"><li>Sonic Rabbit Skin</li><li>Mecha Sonic Skin for Battle Mode</li><li>Bonus Main Menu Wallpapers</li></ol>'),
            w(s, "legotext", "LEGO Eggman In-Game Character Skin"),
            w(s, "deluxeGlam", b),
            w(s, "standardGlam", v),
            s),
            br: (a = {
                title: "Pré-venda"
            },
            w(a, "title", "Já disponível"),
            w(a, "platforms", "Escolha uma plataforma"),
            w(a, "version", "Selecione uma versão"),
            w(a, "preOrder", "Pré-venda"),
            w(a, "buyNow", "Compre agora"),
            w(a, "comingsoon", "Em breve"),
            w(a, "retail", "Física"),
            w(a, "digital", "Digital"),
            w(a, "included", "Incluído na pré-venda:"),
            w(a, "basegame", "Jogo base"),
            w(a, "physicalstandardtext", "Visual LEGO para o Dr. Eggman<br>Capa reversível"),
            w(a, "digitaltext", '1. Pacote de Diversão com LEGO&reg;<br>2. Livro de ilustrações digital e minitrilha sonora original <br>3. Pacote de Conteúdo Extra:<br><ol class="table__list" type="a"><li>Visual de Sonic para Rabbit</li><li>Visual de Mecha Sonic para o Modo Batalha</li><li>Papéis de Parede Extras para o Menu Principal</li></ol>'),
            w(a, "legotext", "Visual LEGO para o Dr. Eggman"),
            w(a, "deluxeGlam", b),
            w(a, "standardGlam", v),
            a),
            fr: (r = {
                title: "Précommander"
            },
            w(r, "title", "MAINTENANT DISPONIBLE"),
            w(r, "platforms", "Choisir une plateforme"),
            w(r, "version", "SÉLECTION DE LA VERSION"),
            w(r, "preOrder", "Précommander"),
            w(r, "buyNow", "ACHETER MAINTENANT"),
            w(r, "comingsoon", "Bientôt disponible"),
            w(r, "retail", "PHYSIQUE"),
            w(r, "digital", "DIGITALE"),
            w(r, "included", "Compris dans la précommande :"),
            w(r, "basegame", "Jeu de base"),
            w(r, "physicalstandardtext", "Apparence de personnage LEGO Eggman<br>Jaquette réversible"),
            w(r, "digitaltext", '1. Pack LEGO&reg; Fun<br>2. Artbook numérique et mini bande originale <br>3. Pack de contenu bonus :<br><ol class="table__list" type="a"><li>Apparence Sonic Rabbit</li><li>Apparence Mecha Sonic pour le mode Combat/li><li>Fonds d\'écran pour le menu principal</li></ol>'),
            w(r, "legotext", "Apparence de personnage LEGO Eggman"),
            w(r, "deluxeGlam", b),
            w(r, "standardGlam", v),
            r),
            it: (c = {
                title: "PRE-ORDINA"
            },
            w(c, "title", "DISPONIBILE ORA"),
            w(c, "platforms", "SCEGLI UNA PIATTAFORMA"),
            w(c, "version", "SCEGLI UNA VERSIONE"),
            w(c, "preOrder", "PRE-ORDINA"),
            w(c, "buyNow", "COMPRA ORA"),
            w(c, "comingsoon", "Prossimamente"),
            w(c, "retail", "Fisica"),
            w(c, "digital", "DIGITALE"),
            w(c, "included", "Incluso con il preordine:"),
            w(c, "basegame", "Gioco base"),
            w(c, "physicalstandardtext", "Aspetto boss Eggman LEGO <br>Copertina double face"),
            w(c, "digitaltext", '1. Pacchetto Fun LEGO&reg;<br>2. Artbook digitale e mini colonna sonora originale <br>3. Pacchetto Contenuti extra:<br><ol class="table__list" type="a"><li>Aspetto Sonic Rabbit</li><li>Skin di Mecha Sonic per la Modalità Battaglia</li><li>Sfondi bonus per il menu principale</li></ol>'),
            w(c, "legotext", "Aspetto boss Eggman LEGO"),
            w(c, "deluxeGlam", b),
            w(c, "standardGlam", v),
            c),
            de: (l = {
                title: "Vorbestellen"
            },
            w(l, "title", "Jetzt erhältlich"),
            w(l, "platforms", "Wähle eine Plattform"),
            w(l, "version", "VERSION WÄHLEN"),
            w(l, "preOrder", "Vorbestellen"),
            w(l, "buyNow", "JETZT KAUFEN"),
            w(l, "comingsoon", "Demnächst verfügbar"),
            w(l, "retail", "physisch"),
            w(l, "digital", "DIGITAL"),
            w(l, "included", "Bei Vorbestellung mit dabei:"),
            w(l, "basegame", "Basis-Spiel"),
            w(l, "physicalstandardtext", "LEGO-Eggman-Skin für Spielcharakter <br>Wendecover"),
            w(l, "digitaltext", '1. LEGO&reg;-Fun-Paket <br>2. Digitales Artbook und Mini-Original-Soundtrack <br>3. Extra-Inhaltspack:<br><ol class="table__list" type="a"><li>Sonic-Rabbit-Skin</li><li>Mecha-Sonic-Skin für den Kampfmodus</li><li>Bonushintergründe für das Hauptmenü</li></ol>'),
            w(l, "legotext", "LEGO-Eggman-Skin für Spielcharakter"),
            w(l, "deluxeGlam", b),
            w(l, "standardGlam", v),
            l),
            es: (d = {
                title: "Resérvalo"
            },
            w(d, "title", "YA DISPONIBLE"),
            w(d, "platforms", "Elige una plataforma"),
            w(d, "version", "SELECCIONA UNA VERSIÓN"),
            w(d, "preOrder", "Resérvalo"),
            w(d, "buyNow", "CÓMPRALO YA"),
            w(d, "comingsoon", "Próximamente"),
            w(d, "retail", "FÍSICA"),
            w(d, "digital", "DIGITAL"),
            w(d, "included", "Se incluye con la reserva:"),
            w(d, "basegame", "Juego principal"),
            w(d, "physicalstandardtext", "Apariencia del personaje de Eggman de LEGO para el juego<br>Portada reversible"),
            w(d, "digitaltext", '1. Paquete LEGO&reg; Fun <br>2. Libro digital de ilustraciones y mini banda sonora digital <br>3. Paquete de contenido adicional:<br><ol class="table__list" type="a"><li>Apariencia Rabbit de Sonic</li><li>Apariencia de Mecha Sonic para el modo Batalla</li><li>Fondos extra para el menú principal</li></ol>'),
            w(d, "legotext", "Apariencia del personaje de Eggman de LEGO para el juego"),
            w(d, "deluxeGlam", b),
            w(d, "standardGlam", v),
            d),
            mx: (u = {
                title: "Reserva"
            },
            w(u, "title", "Ya disponible"),
            w(u, "platforms", "Elige una plataforma"),
            w(u, "version", "Elige una versión"),
            w(u, "preOrder", "Reserva"),
            w(u, "buyNow", "Compra ya"),
            w(u, "comingsoon", "Próximamente"),
            w(u, "retail", "Tienda"),
            w(u, "digital", "Digital"),
            w(u, "included", "La reserva incluye:"),
            w(u, "basegame", "Juego base"),
            w(u, "physicalstandardtext", "Diseño de personaje en el juego LEGO Eggman<br>Portada reversible"),
            w(u, "digitaltext", '1. Paquete LEGO&reg; Fun<br>2. Libro de arte digital y sonido de minibanda sonora original <br>3. Paquete de contenido adicional:<br><ol class="table__list" type="a"><li>Diseño Rabbit de Sonic</li><li>Diseño de Mecha Sonic para modo Batalla</li><li>Fondos de pantalla adicionales para el menú principal</li></ol>'),
            w(u, "legotext", "Diseño de personaje en el juego LEGO Eggman"),
            w(u, "deluxeGlam", b),
            w(u, "standardGlam", v),
            u)
        }
          , x = function() {
            var e = window.innerWidth
              , t = document.querySelectorAll(".table--digital--small")
              , i = document.querySelector(".table--digital--large");
            "digital" === h.Z.get("version") && (e >= 900 ? (i.parentElement.classList.remove("purchase__group--hide"),
            t.forEach((function(e) {
                e.parentElement.classList.add("purchase__group--hide")
            }
            ))) : (i.parentElement.classList.add("purchase__group--hide"),
            t.forEach((function(e) {
                e.parentElement.classList.remove("purchase__group--hide")
            }
            ))))
        };
        window.addEventListener("resize", (function() {
            x()
        }
        ));
        var _ = function(e) {
            var t = document.querySelectorAll(".btn__choice--digital")
              , i = document.querySelector(".table--physical")
              , o = document.querySelectorAll(".table--digital")
              , n = document.querySelector(".deluxeGlam");
            "physical" === e ? (t.forEach((function(e) {
                e.classList.add("btn--hide")
            }
            )),
            o.forEach((function(e) {
                e.parentElement.classList.add("purchase__group--hide")
            }
            )),
            i.parentElement.classList.remove("purchase__group--hide"),
            n.classList.add("purchase__glamshot__group--hide")) : (t.forEach((function(e) {
                e.classList.remove("btn--hide")
            }
            )),
            o.forEach((function(e) {
                e.parentElement.classList.remove("purchase__group--hide")
            }
            )),
            i.parentElement.classList.add("purchase__group--hide"),
            n.classList.remove("purchase__glamshot__group--hide"))
        }
          , E = function(e) {
            e = e.startsWith("xbox") ? "xbox" : e;
            var t = document.querySelector(".purchase__choice__group--retail")
              , i = h.Z.get("lang");
            if ("steam" !== e && "epic" !== e) {
                var o = y[i][e].physical;
                if (o.length > 0 && "" !== o) {
                    var n = ""
                      , s = "";
                    o.forEach((function(t) {
                        var o = t.name
                          , a = t.link;
                        s = '<a href="'.concat(a, '" class="btn btn__choice" target="_blank"><h5 class="gtm__purchase-link" data-purchase="').concat(i, " Plus ").concat(e, " Physical ").concat(o, '">').concat(o, "</h5></a>"),
                        n += s
                    }
                    )),
                    t.innerHTML = n
                } else
                    t.innerHTML = S.comingSoon[i]
            }
        }
          , k = function(e) {
            var t = h.Z.get("lang");
            e = e.startsWith("xbox") ? "xbox" : e;
            var i, o, n = document.querySelectorAll(".purchase__choice__group--digitalStandard"), s = document.querySelectorAll(".purchase__choice__group--digitalDeluxe");
            i = y[t][e].digital.standard ? '<a href="'.concat(y[t][e].digital.standard, '" class="btn btn__choice btn__choice--purchase" target="_blank"><h5 class="gtm__purchase-link" data-purchase="').concat(t, " ").concat(e, ' Digital Standard">Digital Standard</h5></a>') : '<div class="btn btn__choice btn__choice--grey btn__choice--comingsoon btn__choice--disabled"><h5 class="gtm__purchase-link" data-purchase="'.concat(t, " ").concat(e, ' Digital Standard">Digital Standard</h5><h5 class="btn__choice__comingsoon__text comingsoon__text">').concat(S[t].comingsoon, "</h5></div>"),
            o = y[t][e].digital.deluxe ? '<a href="'.concat(y[t][e].digital.deluxe, '" class="btn btn__choice btn__choice--purchase" target="_blank"><h5 class="gtm__purchase-link" data-purchase="').concat(t, " ").concat(e, ' Digital Deluxe">Digital Deluxe</h5></a>') : '<div class="btn btn__choice btn__choice--grey btn__choice--comingsoon btn__choice--disabled"><h5 class="gtm__purchase-link" data-purchase="'.concat(t, " ").concat(e, ' Digital Deluxe">Digital Deluxe</h5><h5 class="btn__choice__comingsoon__text comingsoon__text">').concat(S[t].comingsoon, "</h5></div>"),
            n.forEach((function(e) {
                e.innerHTML = i
            }
            )),
            s.forEach((function(e) {
                e.innerHTML = o
            }
            ))
        };
        !function(e) {
            h.Z.set("console", "ps5"),
            h.Z.set("version", "digital");
            var t = h.Z.get("console")
              , i = h.Z.get("version");
            document.querySelector("html"),
            document.querySelector(".purchase__text").textContent = S[e].title,
            document.querySelectorAll(".platform__text").forEach((function(t) {
                t.textContent = S[e].platforms
            }
            )),
            document.querySelectorAll(".version__text").forEach((function(t) {
                t.textContent = S[e].version
            }
            )),
            document.querySelector(".retail__text").textContent = S[e].retail,
            document.querySelector(".digital__text").textContent = S[e].digital,
            document.querySelectorAll(".included__text").forEach((function(t) {
                t.textContent = S[e].included
            }
            )),
            document.querySelectorAll(".basegame__text").forEach((function(t) {
                t.textContent = S[e].basegame
            }
            )),
            document.querySelectorAll(".comingsoon__text").forEach((function(t) {
                t.textContent = S[e].comingsoon
            }
            )),
            document.querySelectorAll(".digital__desc").forEach((function(t) {
                t.innerHTML = S[e].digitaltext
            }
            )),
            document.querySelectorAll(".lego__text").forEach((function(t) {
                t.textContent = S[e].legotext
            }
            )),
            k(t),
            E(t),
            _(i),
            x()
        }(h.Z.get("lang"));
        var A = {
            ps5: m,
            ps4: g,
            xbox: f,
            switch: p
        };
        document.querySelectorAll(".btn__console").forEach((function(e) {
            e.addEventListener("click", (function(e) {
                var t;
                e.preventDefault(),
                e.currentTarget.classList.contains("btn__disabled") || e.target.classList.contains("btn__choice__active") || e.target.parentNode.classList.contains("btn__choice__active") || (document.querySelector(".btn__choice__active").classList.add("btn__choice--black"),
                document.querySelectorAll(".btn__console").forEach((function(e) {
                    e.classList.remove("btn__choice__active")
                }
                )),
                e.currentTarget.classList.contains("btn__choice") && (e.currentTarget.classList.add("btn__choice__active"),
                t = e.currentTarget.children[0].dataset.console),
                document.querySelector(".btn__choice__active").classList.remove("btn__choice--black"),
                document.querySelector(".purchase__keyart--physical").src = A[t],
                h.Z.set("console", t),
                E(t),
                k(t))
            }
            ))
        }
        )),
        document.querySelectorAll(".btn__version").forEach((function(e) {
            e.addEventListener("click", (function(e) {
                var t;
                e.preventDefault(),
                e.target.classList.contains("btn__version__active") || e.target.parentNode.classList.contains("btn__version__active") || (document.querySelector(".btn__version__active").classList.add("btn__choice--black"),
                document.querySelectorAll(".btn__version").forEach((function(e) {
                    e.classList.remove("btn__version__active")
                }
                )),
                e.currentTarget.classList.contains("btn__version") && (e.currentTarget.classList.add("btn__version__active"),
                t = e.currentTarget.children[0].dataset.version,
                h.Z.set("version", t)),
                document.querySelector(".btn__version__active").classList.remove("btn__choice--black"),
                _(t),
                "physical" === t || x(),
                document.querySelector('[data-console="ps5"]').click())
            }
            ))
        }
        )),
        document.addEventListener("click", (function(e) {
            (e.target.classList.contains("btn__choice--disabled") || e.target.parentNode.classList.contains("btn__choice--disabled")) && e.preventDefault()
        }
        ))
    },
    6365: function(e, t, i) {
        e.exports = i.p + "img/characters/amy.png"
    },
    4786: function(e, t, i) {
        e.exports = i.p + "img/characters/amy_off.jpg"
    },
    3343: function(e, t, i) {
        e.exports = i.p + "img/characters/amy_on.jpg"
    },
    1724: function(e, t, i) {
        e.exports = i.p + "img/characters/character_bg.jpg"
    },
    5012: function(e, t, i) {
        e.exports = i.p + "img/characters/eggman.png"
    },
    7440: function(e, t, i) {
        e.exports = i.p + "img/characters/eggman_off.jpg"
    },
    5988: function(e, t, i) {
        e.exports = i.p + "img/characters/eggman_on.jpg"
    },
    2004: function(e, t, i) {
        e.exports = i.p + "img/characters/fangs.png"
    },
    8995: function(e, t, i) {
        e.exports = i.p + "img/characters/fangs_off.jpg"
    },
    6653: function(e, t, i) {
        e.exports = i.p + "img/characters/fangs_on.jpg"
    },
    2973: function(e, t, i) {
        e.exports = i.p + "img/characters/knuckles.png"
    },
    2255: function(e, t, i) {
        e.exports = i.p + "img/characters/knuckles_off.jpg"
    },
    1521: function(e, t, i) {
        e.exports = i.p + "img/characters/knuckles_on.jpg"
    },
    2503: function(e, t, i) {
        e.exports = i.p + "img/characters/sonic.png"
    },
    1004: function(e, t, i) {
        e.exports = i.p + "img/characters/sonic_off.jpg"
    },
    6271: function(e, t, i) {
        e.exports = i.p + "img/characters/sonic_on.jpg"
    },
    3902: function(e, t, i) {
        e.exports = i.p + "img/characters/tails.png"
    },
    289: function(e, t, i) {
        e.exports = i.p + "img/characters/tails_off.jpg"
    },
    4980: function(e, t, i) {
        e.exports = i.p + "img/characters/tails_on.jpg"
    },
    6939: function(e, t, i) {
        e.exports = i.p + "img/characters/trip.png"
    },
    6812: function(e, t, i) {
        e.exports = i.p + "img/characters/trip_off.jpg"
    },
    9017: function(e, t, i) {
        e.exports = i.p + "img/characters/trip_on.jpg"
    },
    9310: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_00.jpg"
    },
    3622: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_00_thumb.jpg"
    },
    675: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_01.jpg"
    },
    3086: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_01_thumb.jpg"
    },
    4763: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_02.jpg"
    },
    3987: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_02_thumb.jpg"
    },
    8936: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_03.jpg"
    },
    4121: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_03_thumb.jpg"
    },
    7629: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_04.jpg"
    },
    5763: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_04_thumb.jpg"
    },
    1361: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_05.jpg"
    },
    2523: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_05_thumb.jpg"
    },
    3266: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_06.jpg"
    },
    73: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_06_thumb.jpg"
    },
    3418: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_07.jpg"
    },
    7724: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_07_thumb.jpg"
    },
    8989: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_08.jpg"
    },
    8516: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_08_thumb.jpg"
    },
    6614: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_09.jpg"
    },
    1847: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_09_thumb.jpg"
    },
    3794: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_10.jpg"
    },
    3411: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_10_thumb.jpg"
    },
    323: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_11.jpg"
    },
    1245: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_11_thumb.jpg"
    },
    3911: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_12.jpg"
    },
    495: function(e, t, i) {
        e.exports = i.p + "img/comics/brazilportuguese/fc_12_thumb.jpg"
    },
    1008: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_00.jpg"
    },
    718: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_00_thumb.jpg"
    },
    4289: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_01.jpg"
    },
    1414: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_01_thumb.jpg"
    },
    2635: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_02.jpg"
    },
    3700: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_02_thumb.jpg"
    },
    2202: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_03.jpg"
    },
    7156: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_03_thumb.jpg"
    },
    4424: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_04.jpg"
    },
    6313: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_04_thumb.jpg"
    },
    6158: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_05.jpg"
    },
    3148: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_05_thumb.jpg"
    },
    6885: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_06.jpg"
    },
    7644: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_06_thumb.jpg"
    },
    4583: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_07.jpg"
    },
    5555: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_07_thumb.jpg"
    },
    6894: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_08.jpg"
    },
    7837: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_08_thumb.jpg"
    },
    9912: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_09.jpg"
    },
    8748: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_09_thumb.jpg"
    },
    3947: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_10.jpg"
    },
    7595: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_10_thumb.jpg"
    },
    8905: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_11.png"
    },
    8798: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_11_thumb.jpg"
    },
    6027: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_12.jpg"
    },
    3094: function(e, t, i) {
        e.exports = i.p + "img/comics/english/fc_12_thumb.jpg"
    },
    6630: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_00.jpg"
    },
    7345: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_00_thumb.jpg"
    },
    7659: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_01.jpg"
    },
    9476: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_01_thumb.jpg"
    },
    30: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_02.jpg"
    },
    2014: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_02_thumb.jpg"
    },
    6374: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_03.jpg"
    },
    2706: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_03_thumb.jpg"
    },
    7844: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_04.jpg"
    },
    5536: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_04_thumb.jpg"
    },
    9500: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_05.jpg"
    },
    7170: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_05_thumb.jpg"
    },
    3059: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_06.jpg"
    },
    2573: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_06_thumb.jpg"
    },
    724: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_07.jpg"
    },
    1754: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_07_thumb.jpg"
    },
    696: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_08.jpg"
    },
    795: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_08_thumb.jpg"
    },
    3109: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_09.jpg"
    },
    9858: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_09_thumb.jpg"
    },
    9800: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_10.jpg"
    },
    3598: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_10_thumb.jpg"
    },
    1153: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_11.jpg"
    },
    7675: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_11_thumb.jpg"
    },
    338: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_12.jpg"
    },
    4619: function(e, t, i) {
        e.exports = i.p + "img/comics/french/fc_12_thumb.jpg"
    },
    2284: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_00.jpg"
    },
    891: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_00_thumb.jpg"
    },
    382: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_01.jpg"
    },
    1131: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_01_thumb.jpg"
    },
    3150: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_02.jpg"
    },
    6057: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_02_thumb.jpg"
    },
    9620: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_03.jpg"
    },
    6167: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_03_thumb.jpg"
    },
    7453: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_04.jpg"
    },
    6524: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_04_thumb.jpg"
    },
    7567: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_05.jpg"
    },
    5303: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_05_thumb.jpg"
    },
    1214: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_06.jpg"
    },
    703: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_06_thumb.jpg"
    },
    3409: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_07.jpg"
    },
    7135: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_07_thumb.jpg"
    },
    4543: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_08.jpg"
    },
    4511: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_08_thumb.jpg"
    },
    3544: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_09.jpg"
    },
    2363: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_09_thumb.jpg"
    },
    5646: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_10.jpg"
    },
    8072: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_10_thumb.jpg"
    },
    170: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_11.jpg"
    },
    727: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_11_thumb.jpg"
    },
    6719: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_12.jpg"
    },
    2289: function(e, t, i) {
        e.exports = i.p + "img/comics/german/fc_12_thumb.jpg"
    },
    1924: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_00.jpg"
    },
    3885: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_00_thumb.jpg"
    },
    3865: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_01.jpg"
    },
    8929: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_01_thumb.jpg"
    },
    7219: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_02.jpg"
    },
    3188: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_02_thumb.jpg"
    },
    8110: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_03.jpg"
    },
    1941: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_03_thumb.jpg"
    },
    2909: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_04.jpg"
    },
    8663: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_04_thumb.jpg"
    },
    1342: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_05.jpg"
    },
    9424: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_05_thumb.jpg"
    },
    751: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_06.jpg"
    },
    2686: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_06_thumb.jpg"
    },
    7799: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_07.jpg"
    },
    1274: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_07_thumb.jpg"
    },
    9091: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_08.jpg"
    },
    2809: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_08_thumb.jpg"
    },
    8958: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_09.jpg"
    },
    4905: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_09_thumb.jpg"
    },
    7295: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_10.jpg"
    },
    1115: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_10_thumb.jpg"
    },
    8895: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_11.jpg"
    },
    4: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_11_thumb.jpg"
    },
    1813: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_12.jpg"
    },
    2552: function(e, t, i) {
        e.exports = i.p + "img/comics/italian/fc_12_thumb.jpg"
    },
    5157: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_00.jpg"
    },
    4769: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_00_thumb.jpg"
    },
    8145: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_01.jpg"
    },
    2167: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_01_thumb.jpg"
    },
    8521: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_02.jpg"
    },
    8263: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_02_thumb.jpg"
    },
    5189: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_03.jpg"
    },
    6090: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_03_thumb.jpg"
    },
    375: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_04.jpg"
    },
    7220: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_04_thumb.jpg"
    },
    2988: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_05.jpg"
    },
    2707: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_05_thumb.jpg"
    },
    7623: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_06.jpg"
    },
    3316: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_06_thumb.jpg"
    },
    6529: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_07.jpg"
    },
    853: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_07_thumb.jpg"
    },
    4846: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_08.jpg"
    },
    8045: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_08_thumb.jpg"
    },
    2783: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_09.jpg"
    },
    3677: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_09_thumb.jpg"
    },
    3880: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_10.jpg"
    },
    5596: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_10_thumb.jpg"
    },
    3927: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_11.jpg"
    },
    1965: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_11_thumb.jpg"
    },
    4540: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_12.jpg"
    },
    3138: function(e, t, i) {
        e.exports = i.p + "img/comics/spanish/fc_12_thumb.jpg"
    },
    4218: function(e, t, i) {
        e.exports = i.p + "img/common/lined_shadow.png"
    },
    2273: function(e, t, i) {
        e.exports = i.p + "img/common/lined_shadow_table.png"
    },
    317: function(e, t, i) {
        e.exports = i.p + "img/features/ss10_1920.jpg"
    },
    3754: function(e, t, i) {
        e.exports = i.p + "img/features/ss10_1920.webp"
    },
    9244: function(e, t, i) {
        e.exports = i.p + "img/features/ss11_1920.jpg"
    },
    7824: function(e, t, i) {
        e.exports = i.p + "img/features/ss11_1920.webp"
    },
    9595: function(e, t, i) {
        e.exports = i.p + "img/features/ss12_1920.jpg"
    },
    3305: function(e, t, i) {
        e.exports = i.p + "img/features/ss12_1920.webp"
    },
    6150: function(e, t, i) {
        e.exports = i.p + "img/features/ss13_1920.jpg"
    },
    1726: function(e, t, i) {
        e.exports = i.p + "img/features/ss13_1920.webp"
    },
    2396: function(e, t, i) {
        e.exports = i.p + "img/features/ss14_1920.jpg"
    },
    5154: function(e, t, i) {
        e.exports = i.p + "img/features/ss14_1920.webp"
    },
    2813: function(e, t, i) {
        e.exports = i.p + "img/features/ss15_1920.jpg"
    },
    7772: function(e, t, i) {
        e.exports = i.p + "img/features/ss15_1920.webp"
    },
    3934: function(e, t, i) {
        e.exports = i.p + "img/features/ss1_1920.jpg"
    },
    7924: function(e, t, i) {
        e.exports = i.p + "img/features/ss1_1920.webp"
    },
    3567: function(e, t, i) {
        e.exports = i.p + "img/features/ss2_1920.jpg"
    },
    2949: function(e, t, i) {
        e.exports = i.p + "img/features/ss2_1920.webp"
    },
    9568: function(e, t, i) {
        e.exports = i.p + "img/features/ss3_1920.jpg"
    },
    8283: function(e, t, i) {
        e.exports = i.p + "img/features/ss3_1920.webp"
    },
    5205: function(e, t, i) {
        e.exports = i.p + "img/features/ss4_1920.jpg"
    },
    6565: function(e, t, i) {
        e.exports = i.p + "img/features/ss4_1920.webp"
    },
    7981: function(e, t, i) {
        e.exports = i.p + "img/features/ss5_1920.jpg"
    },
    1484: function(e, t, i) {
        e.exports = i.p + "img/features/ss5_1920.webp"
    },
    5345: function(e, t, i) {
        e.exports = i.p + "img/features/ss6_1920.jpg"
    },
    7638: function(e, t, i) {
        e.exports = i.p + "img/features/ss6_1920.webp"
    },
    7646: function(e, t, i) {
        e.exports = i.p + "img/features/ss7_1920.jpg"
    },
    293: function(e, t, i) {
        e.exports = i.p + "img/features/ss7_1920.webp"
    },
    4814: function(e, t, i) {
        e.exports = i.p + "img/features/ss8_1920.jpg"
    },
    792: function(e, t, i) {
        e.exports = i.p + "img/features/ss8_1920.webp"
    },
    81: function(e, t, i) {
        e.exports = i.p + "img/features/ss9_1920.jpg"
    },
    6e3: function(e, t, i) {
        e.exports = i.p + "img/features/ss9_1920.webp"
    },
    4585: function(e, t, i) {
        e.exports = i.p + "img/footer/br_rating_L.png"
    },
    1951: function(e, t, i) {
        e.exports = i.p + "img/footer/esrb_sonic.svg"
    },
    3778: function(e, t, i) {
        e.exports = i.p + "img/footer/g_au_rating.jpg"
    },
    4050: function(e, t, i) {
        e.exports = i.p + "img/footer/pegi_3.jpg"
    },
    3017: function(e, t, i) {
        e.exports = i.p + "img/footer/usk_6.png"
    },
    9639: function(e, t, i) {
        e.exports = i.p + "img/hero/hero_banner_bg.png"
    },
    7182: function(e, t, i) {
        e.exports = i.p + "img/hero/herobg_1280.jpg"
    },
    3919: function(e, t, i) {
        e.exports = i.p + "img/hero/herobg_1280.webp"
    },
    3659: function(e, t, i) {
        e.exports = i.p + "img/hero/herobg_1920.jpg"
    },
    1832: function(e, t, i) {
        e.exports = i.p + "img/hero/herobg_1920.webp"
    },
    4913: function(e, t, i) {
        e.exports = i.p + "img/hero/herobg_640.jpg"
    },
    5094: function(e, t, i) {
        e.exports = i.p + "img/hero/herobg_640.webp"
    },
    7: function(e, t, i) {
        e.exports = i.p + "img/hero/herobg_900.jpg"
    },
    4276: function(e, t, i) {
        e.exports = i.p + "img/hero/herobg_900.webp"
    },
    3297: function(e, t, i) {
        e.exports = i.p + "img/hero/lego_banner.png"
    },
    7666: function(e, t, i) {
        e.exports = i.p + "img/media/accolades_640.jpg"
    },
    9931: function(e, t, i) {
        e.exports = i.p + "img/media/accolades_640.webp"
    },
    2759: function(e, t, i) {
        e.exports = i.p + "img/media/accolades_768.jpg"
    },
    8811: function(e, t, i) {
        e.exports = i.p + "img/media/accolades_768.webp"
    },
    9149: function(e, t, i) {
        e.exports = i.p + "img/media/announcement_640.jpg"
    },
    2427: function(e, t, i) {
        e.exports = i.p + "img/media/announcement_640.webp"
    },
    4702: function(e, t, i) {
        e.exports = i.p + "img/media/fangs_640.jpg"
    },
    4955: function(e, t, i) {
        e.exports = i.p + "img/media/fangs_640.webp"
    },
    7013: function(e, t, i) {
        e.exports = i.p + "img/media/launch_640.jpg"
    },
    6967: function(e, t, i) {
        e.exports = i.p + "img/media/launch_640.webp"
    },
    7201: function(e, t, i) {
        e.exports = i.p + "img/media/launch_768.jpg"
    },
    8627: function(e, t, i) {
        e.exports = i.p + "img/media/launch_768.webp"
    },
    5641: function(e, t, i) {
        e.exports = i.p + "img/media/lego_768.jpg"
    },
    3126: function(e, t, i) {
        e.exports = i.p + "img/media/lego_768.webp"
    },
    755: function(e, t, i) {
        e.exports = i.p + "img/media/multiplayer_640.jpg"
    },
    5203: function(e, t, i) {
        e.exports = i.p + "img/media/norunning_640.jpg"
    },
    3069: function(e, t, i) {
        e.exports = i.p + "img/media/norunning_640.webp"
    },
    6106: function(e, t, i) {
        e.exports = i.p + "img/media/norunning_768.jpg"
    },
    6291: function(e, t, i) {
        e.exports = i.p + "img/media/norunning_768.webp"
    },
    1537: function(e, t, i) {
        e.exports = i.p + "img/media/trio_640.jpg"
    },
    5402: function(e, t, i) {
        e.exports = i.p + "img/media/trio_640.webp"
    },
    5896: function(e, t, i) {
        e.exports = i.p + "img/media/trio_audio_640.jpg"
    },
    7880: function(e, t, i) {
        e.exports = i.p + "img/media/trio_audio_640.webp"
    },
    8662: function(e, t, i) {
        e.exports = i.p + "img/og_img.jpg"
    },
    6842: function(e, t, i) {
        e.exports = i.p + "img/purchase/deluxe_en.jpg"
    },
    6729: function(e, t, i) {
        e.exports = i.p + "img/purchase/digital_deluxe.jpg"
    },
    6014: function(e, t, i) {
        e.exports = i.p + "img/purchase/digital_deluxe.webp"
    },
    6035: function(e, t, i) {
        e.exports = i.p + "img/purchase/digital_standard.jpg"
    },
    8667: function(e, t, i) {
        e.exports = i.p + "img/purchase/digital_standard.webp"
    },
    846: function(e, t, i) {
        e.exports = i.p + "img/purchase/purchase_square.jpg"
    },
    8922: function(e, t, i) {
        e.exports = i.p + "img/purchase/purchase_square.webp"
    },
    8769: function(e, t, i) {
        e.exports = i.p + "img/purchase/ss_ns.png"
    },
    2516: function(e, t, i) {
        e.exports = i.p + "img/purchase/ss_ps4.png"
    },
    3217: function(e, t, i) {
        e.exports = i.p + "img/purchase/ss_ps5.png"
    },
    3746: function(e, t, i) {
        e.exports = i.p + "img/purchase/ss_xbox.png"
    },
    6002: function(e, t, i) {
        e.exports = i.p + "img/purchase/standard_en.jpg"
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [712], (function() {
        return t(4057),
        t(5480),
        t(3997),
        t(1741)
    }
    )),
    e.O()
}
]);
