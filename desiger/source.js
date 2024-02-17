(() => {
  var t = {
      324: (t, e, r) => {
        "use strict";
        var n = r(836),
          a =
            (Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.PFMockupCanvasBase = void 0),
            n(r(687))),
          o = n(r(156)),
          i = n(r(690)),
          u = n(r(728)),
          s = n(r(416)),
          l = n(r(468)),
          c = n(r(661)),
          f = r(101);
        r(70);
        function h(t, e) {
          p(t, e), e.add(t);
        }
        function d(t, e, r) {
          p(t, e), e.set(t, r);
        }
        function p(t, e) {
          if (e.has(t))
            throw new TypeError(
              "Cannot initialize the same private elements twice on an object"
            );
        }
        function g(t, e, r) {
          if (e.has(t)) return r;
          throw new TypeError("attempted to get private field on non-instance");
        }
        var v = "PrintfileLayer",
          y = "MultiFileLayer",
          w = "DisplacementLayer",
          m = "StoredLayer",
          x = 3.6 / 25.4,
          b = {
            default: "source-over",
            overlay: "overlay",
            multiply: "multiply",
            screen: "screen",
            darken: "darken",
            lighten: "lighten",
            colorburn: "color-burn",
            dodge: "color-dodge",
            softlight: "soft-light",
            linearburn: "multiply",
            dstin: "destination-in",
            dstover: "destination-over",
            sourcein: "source-in",
          },
          k = new WeakMap(),
          _ = new WeakMap(),
          M = new WeakMap(),
          I = new WeakMap(),
          E = new WeakMap(),
          O = new WeakMap(),
          S = new WeakMap(),
          C = new WeakMap(),
          L = new WeakSet(),
          D = new WeakSet(),
          P = new WeakSet(),
          W = new WeakSet(),
          j = new WeakSet(),
          R = new WeakSet(),
          T = new WeakSet(),
          B = new WeakSet(),
          U = new WeakSet(),
          A = new WeakSet(),
          F = new WeakSet(),
          N = new WeakSet(),
          V = new WeakSet(),
          z = new WeakSet(),
          G = (function () {
            function t(e) {
              if (
                ((0, i.default)(this, t),
                h(this, z),
                h(this, V),
                h(this, N),
                h(this, F),
                h(this, A),
                h(this, U),
                h(this, B),
                h(this, T),
                h(this, R),
                h(this, j),
                h(this, W),
                h(this, P),
                h(this, D),
                h(this, L),
                (0, s.default)(this, "CACHE_TIMEOUT", 1e4),
                (0, s.default)(this, "IS_BROWSER", !1),
                d(this, k, { writable: !0, value: null }),
                d(this, _, { writable: !0, value: null }),
                d(this, M, { writable: !0, value: 0 }),
                d(this, I, { writable: !0, value: [] }),
                d(this, E, { writable: !0, value: "" }),
                d(this, O, { writable: !0, value: null }),
                d(this, S, { writable: !0, value: null }),
                d(this, C, { writable: !0, value: null }),
                this.constructor === t)
              )
                throw new Error("Abstract classes can't be instantiated.");
              (0, c.default)(this, C, e),
                (0, c.default)(
                  this,
                  I,
                  null !=
                    (e =
                      null == (e = (0, l.default)(this, C).mockupData)
                        ? void 0
                        : e.layers)
                    ? e
                    : []
                ),
                (0, c.default)(
                  this,
                  E,
                  null !=
                    (e =
                      null == (e = (0, l.default)(this, C).mockupData)
                        ? void 0
                        : e.layerBaseColor)
                    ? e
                    : ""
                ),
                (0, c.default)(this, O, new WeakMap()),
                (0, c.default)(this, S, {});
            }
            var e;
            return (
              (0, u.default)(t, [
                {
                  key: "renderMockup",
                  value:
                    ((e = (0, o.default)(
                      a.default.mark(function t() {
                        return a.default.wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (g(this, z, ut).call(this)) {
                                    t.next = 2;
                                    break;
                                  }
                                  throw new Error("Invalid params passed!");
                                case 2:
                                  return (t.next = 4), g(this, D, Y).call(this);
                                case 4:
                                  return (t.next = 6), g(this, T, Z).call(this);
                                case 6:
                                  return t.abrupt(
                                    "return",
                                    (0, l.default)(this, k)
                                  );
                                case 7:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                },
                {
                  key: "createCanvas",
                  value: function (t, e) {
                    g(this, L, H).call(this);
                  },
                },
                {
                  key: "loadImage",
                  value: function (t) {
                    g(this, L, H).call(this);
                  },
                },
                {
                  key: "fetchUrl",
                  value: function (t) {
                    g(this, L, H).call(this);
                  },
                },
                {
                  key: "createImageData",
                  value: function (t, e, r) {
                    g(this, L, H).call(this);
                  },
                },
                {
                  key: "debugLogImage",
                  value: function (t) {
                    var e, r;
                    (0, l.default)(this, C).consoleVisualDebug &&
                      this.IS_BROWSER &&
                      t.toDataURL &&
                      ((r = Math.min(1, 300 / t.height)),
                      (e = t.width * r),
                      (r = t.height * r),
                      (r =
                        "\n            background-color: #ccc;\n            background-image: url('" +
                        t.toDataURL() +
                        "'),\n            linear-gradient(45deg, #888 25%, transparent 25%),\n            linear-gradient(45deg, transparent 75%, #888 75%),\n            linear-gradient(45deg, transparent 75%, #888 75%),\n            linear-gradient(45deg, #888 25%, transparent 25%);\n            background-position:0 0, 0 0, 0 0, -20px -20px, 20px 20px;\n            background-repeat: no-repeat, repeat, repeat, repeat, repeat;\n            background-size: " +
                        e +
                        "px " +
                        r +
                        "px, 40px 40px, 40px 40px, 40px 40px, 40px 40px;\n            padding: " +
                        r / 2 +
                        "px " +
                        e / 2 +
                        "px; \n            line-height: 1px;\n            font-size: 1px;\n            color:transparent;\n        "),
                      console.info(t.width + "x" + t.height),
                      console.info("%c+", r));
                  },
                },
                {
                  key: "debugInfo",
                  value: function (t) {
                    (0, l.default)(this, C).debugMode && console.info(t);
                  },
                },
              ]),
              t
            );
          })();
        function H() {
          throw new Error("Method must be implemented.");
        }
        function Y() {
          (0, c.default)(
            this,
            k,
            this.createCanvas(
              (0, l.default)(this, C).mockupSize,
              (0, l.default)(this, C).mockupSize
            )
          ),
            (0, c.default)(this, _, (0, l.default)(this, k).getContext("2d")),
            (0, c.default)(
              this,
              M,
              (0, l.default)(this, k).height /
                (0, l.default)(this, C).mockupData.height
            ),
            (0, l.default)(this, C).mockupData.width !==
              (0, l.default)(this, C).mockupData.height &&
              (this.debugInfo("mockupData width !== height"),
              ((0, l.default)(this, k).width =
                (0, l.default)(this, C).mockupData.width *
                (0, l.default)(this, M)));
          var t,
            e = [];
          for (t in (0, l.default)(this, I))
            g(this, P, q).call(this, (0, l.default)(this, I)[t], e);
          return Promise.all(e);
        }
        function q(t, e) {
          var r,
            n,
            a,
            o = this,
            i =
              (null != (i = t.children) &&
                i.forEach(function (t) {
                  return g(o, P, q).call(o, t, e);
                }),
              "");
          t._type === y
            ? ((n = (0, l.default)(this, C).layerParams[t.paramName]),
              (i = t.files[n] || Object.values(t.files)[0]))
            : t.filePath && (i = t.filePath),
            (i = i.replace("[size]", (0, l.default)(this, C).mockupSize)),
            (i =
              t._type === v
                ? null ==
                  (n = r = (0, l.default)(this, C).printfileData[t.fileType])
                  ? void 0
                  : n.printfilePreview
                : i) &&
              (t._type === w
                ? (a = g(this, j, K).call(this, i))
                : ((a = g(this, W, J).call(this, i)),
                  t._type === v &&
                    null != (n = r) &&
                    null != (i = n.options) &&
                    i.sticker_effect &&
                    (a = a.then(function (t) {
                      return g(o, V, it).call(o, t, r.width);
                    }))),
              e.push(
                a.then(function (e) {
                  (0, l.default)(o, O).set(t, e);
                })
              ));
        }
        function J(t) {
          var e,
            r = this;
          return (
            (e = G.imageCache)[t] ||
            (e[t] = this.loadImage(t)
              .then(function (e) {
                return r.debugInfo("Loaded image", t.slice(0, 200)), e;
              })
              .finally(function () {
                r.IS_BROWSER &&
                  setTimeout(function () {
                    return delete G.imageCache[t];
                  }, r.CACHE_TIMEOUT);
              }))
          );
        }
        function K(t) {
          var e,
            r = this,
            n = performance.now();
          return (
            (e = G.displacementMapCache)[t] ||
            (e[t] = this.fetchUrl(t)
              .then(function (t) {
                return t.arrayBuffer();
              })
              .then(function (e) {
                r.debugInfo(
                  "Downloaded map " + t + " (" + (performance.now() - n) + "ms)"
                );
                var a = new Uint16Array(e, 0, 4),
                  o = a[1],
                  i = a[2],
                  u = o * i;
                if (65450 !== a[0] || 65467 !== a[3])
                  throw new Error("Invalid header!");
                if (e.byteLength !== a.byteLength + 4 * u)
                  throw new Error("Invalid data length!");
                return {
                  isRaw: !0,
                  redData: new Uint16Array(e, 8, u),
                  greenData: new Uint16Array(e, 8 + 2 * u, u),
                  width: o,
                  height: i,
                };
              })
              .finally(function () {
                r.IS_BROWSER &&
                  setTimeout(function () {
                    return delete G.displacementMapCache[t];
                  }, r.CACHE_TIMEOUT);
              }))
          );
        }
        function Q(t) {
          return X.apply(this, arguments);
        }
        function X() {
          return (X = (0, o.default)(
            a.default.mark(function t(e) {
              var r, n, o;
              return a.default.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (r =
                          e.width * (0, l.default)(this, M) ||
                          (0, l.default)(this, k).width),
                          (n =
                            e.height * (0, l.default)(this, M) ||
                            (0, l.default)(this, k).height),
                          (r = this.createCanvas(r, n)),
                          (n = r.getContext("2d")),
                          (t.t0 = a.default.keys(e.children || []));
                      case 5:
                        if ((t.t1 = t.t0()).done) {
                          t.next = 12;
                          break;
                        }
                        return (
                          (o = t.t1.value),
                          (o = e.children[o]),
                          (t.next = 10),
                          g(this, U, et).call(this, o, n)
                        );
                      case 10:
                        t.next = 5;
                        break;
                      case 12:
                        return t.abrupt("return", r);
                      case 13:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          )).apply(this, arguments);
        }
        function Z() {
          return $.apply(this, arguments);
        }
        function $() {
          return ($ = (0, o.default)(
            a.default.mark(function t() {
              var e, r, n, o;
              return a.default.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        this.debugInfo(
                          "Rendering",
                          (0, l.default)(this, C).generatorVariantId
                        ),
                          (e = performance.now()),
                          (r = this.createCanvas(
                            (0, l.default)(this, k).width,
                            (0, l.default)(this, k).height
                          )),
                          (n = r.getContext("2d")),
                          (0, l.default)(this, E) &&
                            g(this, B, tt).call(
                              this,
                              (0, l.default)(this, E),
                              n
                            ),
                          (t.t0 = a.default.keys((0, l.default)(this, I)));
                      case 6:
                        if ((t.t1 = t.t0()).done) {
                          t.next = 13;
                          break;
                        }
                        return (
                          (o = t.t1.value),
                          (o = (0, l.default)(this, I)[o]),
                          (t.next = 11),
                          g(this, U, et).call(this, o, n)
                        );
                      case 11:
                        t.next = 6;
                        break;
                      case 13:
                        (0, l.default)(this, C).mockupBackgroundColor &&
                          g(this, B, tt).call(
                            this,
                            (0, l.default)(this, C).mockupBackgroundColor,
                            (0, l.default)(this, _)
                          ),
                          (0, l.default)(this, _).drawImage(r, 0, 0),
                          (o = performance.now()),
                          this.debugInfo(
                            "Rendered in " + (o - e) + " ms.",
                            (0, l.default)(this, C).generatorVariantId
                          );
                      case 17:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          )).apply(this, arguments);
        }
        function tt(t, e) {
          (e.fillStyle = t), e.fillRect(0, 0, e.canvas.width, e.canvas.height);
        }
        function et(t, e) {
          return rt.apply(this, arguments);
        }
        function rt() {
          return (rt = (0, o.default)(
            a.default.mark(function t(e, r) {
              var n, o, i, u, s, c, f, h, d, p;
              return a.default.wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e && r) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt("return");
                      case 2:
                        if (((n = !1), e._type === w))
                          return (
                            g(this, N, ot).call(this, e, r), t.abrupt("return")
                          );
                        t.next = 6;
                        break;
                      case 6:
                        if (e._type !== m) {
                          t.next = 14;
                          break;
                        }
                        if (!(o = (0, l.default)(this, S)[e.name])) {
                          t.next = 12;
                          break;
                        }
                        (0, l.default)(this, O).set(e, o), (t.next = 14);
                        break;
                      case 12:
                        return (
                          console.error("Stored layer not known: " + e.name),
                          t.abrupt("return")
                        );
                      case 14:
                        if ((0, l.default)(this, O).has(e)) {
                          t.next = 24;
                          break;
                        }
                        if (e.children && e.children.length)
                          return (t.next = 18), g(this, R, Q).call(this, e);
                        t.next = 23;
                        break;
                      case 18:
                        (o = t.sent),
                          (n = !0),
                          (0, l.default)(this, O).set(e, o),
                          (t.next = 24);
                        break;
                      case 23:
                        return t.abrupt("return");
                      case 24:
                        if (
                          (this.debugInfo(
                            "Drawing layer " +
                              e.fileType +
                              " " +
                              e.filePath +
                              " " +
                              e.blending,
                            e,
                            (0, l.default)(this, M),
                            (0, l.default)(this, C).generatorVariantId
                          ),
                          (i = (0, l.default)(this, O).get(e)),
                          e.storeAs)
                        )
                          return (
                            ((0, l.default)(this, S)[e.storeAs] = i),
                            t.abrupt("return")
                          );
                        t.next = 29;
                        break;
                      case 29:
                        if (
                          ((u = e.left * (0, l.default)(this, M) || 0),
                          (s = e.top * (0, l.default)(this, M) || 0),
                          (c = n
                            ? i.height
                            : e.height * (0, l.default)(this, M) ||
                              r.canvas.height),
                          (f = n
                            ? i.width
                            : e.width * (0, l.default)(this, M) ||
                              r.canvas.width) && c)
                        ) {
                          t.next = 36;
                          break;
                        }
                        return (
                          console.error(
                            "no width/height defined",
                            r.canvas.width,
                            r.canvas.height
                          ),
                          t.abrupt("return")
                        );
                      case 36:
                        (r.globalCompositeOperation = g(this, A, nt).call(
                          this,
                          e.blending
                        )),
                          e.rotate &&
                            ((p = (e.rotate * Math.PI) / 180),
                            (h =
                              Math.abs(f * Math.cos(p)) +
                              Math.abs(c * Math.sin(p))),
                            (d =
                              Math.abs(c * Math.cos(p)) +
                              Math.abs(f * Math.sin(p))),
                            r.translate(u + h / 2, s + d / 2),
                            r.rotate(p),
                            (u = -f / 2),
                            (s = -c / 2)),
                          e._type === v &&
                            null !=
                              (h = (0, l.default)(this, C).printfileData[
                                e.fileType
                              ]) &&
                            h.position &&
                            ((p =
                              null ==
                              (d = (0, l.default)(this, C).printfileData[
                                e.fileType
                              ])
                                ? void 0
                                : d.position),
                            (i = g(this, F, at).call(this, i, p, f, c))),
                          r.drawImage(
                            i,
                            Math.floor(u),
                            Math.floor(s),
                            Math.floor(f),
                            Math.floor(c)
                          ),
                          r.resetTransform(),
                          (r.globalCompositeOperation = b.default),
                          this.debugLogImage(r.canvas);
                      case 43:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          )).apply(this, arguments);
        }
        function nt(t) {
          return (
            b[t] ||
            (t && console.error("Unknown blending mode " + t), b.default)
          );
        }
        function at(t, e, r, n) {
          if (
            (e.width === e.areaWidth &&
              e.height === e.areaHeight &&
              0 === e.left &&
              0 === e.top) ||
            !e.areaWidth ||
            !e.areaHeight
          )
            return t;
          var a = this.createCanvas(r, n),
            o = a.getContext("2d");
          (r /= e.areaWidth), (n /= e.areaHeight);
          return (
            o.drawImage(
              t,
              Math.floor(r * e.left),
              Math.floor(n * e.top),
              Math.floor(r * e.width),
              Math.floor(n * e.height)
            ),
            a
          );
        }
        function ot(t, e) {
          var r = (0, l.default)(this, O).get(t),
            n =
              (this.debugInfo(
                "Applying displacement",
                r.width,
                r.height,
                (0, l.default)(this, C).generatorVariantId
              ),
              performance.now());
          (r = (0, f.applyDisplacement)(
            r,
            e.getImageData(0, 0, e.canvas.width, e.canvas.height),
            (0, l.default)(this, C).useInterpolation,
            (0, l.default)(this, C).debugMode
          )),
            this.debugInfo(
              "Finished displacement " +
                t.filePath +
                " (" +
                (performance.now() - n) +
                "ms)",
              (0, l.default)(this, C).generatorVariantId
            ),
            (t = this.createCanvas(r.width, r.height)),
            (n = this.createImageData(r.data, r.width, r.height));
          t.getContext("2d").putImageData(n, 0, 0),
            (e.canvas.width = (0, l.default)(this, k).width),
            (e.canvas.height = (0, l.default)(this, k).height),
            e.clearRect(0, 0, e.canvas.width, e.canvas.height),
            e.drawImage(t, 0, 0, e.canvas.width, e.canvas.height),
            this.debugLogImage(e.canvas),
            this.debugInfo("Done", (0, l.default)(this, C).generatorVariantId);
        }
        function it(t, e) {
          for (
            var r = (x * (t.naturalWidth || t.width)) / e,
              n = (t.naturalWidth || t.width) + 2 * r,
              a =
                ((r = (t.naturalHeight || t.height) + 2 * r),
                this.createCanvas(n, r)),
              o = a.getContext("2d"),
              i = (x * n) / e,
              u = 0;
            u <= 360;
            u++
          ) {
            var s = u * (Math.PI / 180);
            o.drawImage(
              t,
              Math.floor(i * Math.sin(s)) + i,
              Math.floor(i * Math.cos(s)) + i
            );
          }
          return (
            (o.globalCompositeOperation = b.sourcein),
            (o.fillStyle = "#fff"),
            o.fillRect(0, 0, n, r),
            (o.globalCompositeOperation = b.default),
            o.drawImage(t, i, i),
            a
          );
        }
        function ut() {
          return (
            !(
              !(0, l.default)(this, C).mockupData ||
              !(0, l.default)(this, C).printfileData
            ) ||
            (console.error("Invalid params for generateMockup call", {
              mockupData: (0, l.default)(this, C).mockupData,
              printfileData: (0, l.default)(this, C).printfileData,
            }),
            !1)
          );
        }
        (e.PFMockupCanvasBase = G),
          (0, s.default)(G, "displacementMapCache", {}),
          (0, s.default)(G, "imageCache", {});
      },
      70: (t, e, r) => {
        "use strict";
        var n = r(836),
          a =
            (Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.PFMockupCanvasPar = void 0),
            n(r(728))),
          o = n(r(690)),
          i = n(r(416)),
          u = (0, a.default)(function t() {
            (0, o.default)(this, t),
              (0, i.default)(this, "mockupSize", 200),
              (0, i.default)(this, "mockupData", null),
              (0, i.default)(this, "printfileData", null),
              (0, i.default)(this, "generatorVariantId", null),
              (0, i.default)(this, "consoleVisualDebug", !1),
              (0, i.default)(this, "useInterpolation", !1),
              (0, i.default)(this, "layerParams", {}),
              (0, i.default)(this, "mockupBackgroundColor", null),
              (0, i.default)(this, "debugMode", !1);
          });
        e.PFMockupCanvasPar = u;
      },
      101: (t, e) => {
        "use strict";
        function r(t, e, r, n) {
          return (e * r + t) * (void 0 === n ? 4 : n);
        }
        function n(t, e, r, n) {
          return (1 - Math.abs(t - r)) * (1 - Math.abs(e - n));
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.applyDisplacement = function (t, e, a, o) {
            void 0 === a && (a = !1);
            for (
              var i,
                u,
                s,
                l,
                c,
                f,
                h,
                d = (o = void 0 !== o && o) ? performance.now() : null,
                p = t.width,
                g = t.height,
                v = new Uint8ClampedArray(p * g * 4),
                y = e.width / p,
                w = e.height / g,
                m = e.width,
                x = e.data,
                b = 0;
              b < g;
              b++
            )
              for (h = 0; h < p; h++) {
                if (t.isRaw) {
                  if (
                    ((i = r(h, b, p, 1)),
                    (c = t.redData[i]),
                    (f = t.greenData[i]),
                    0 === c && 0 === f)
                  )
                    continue;
                  i *= 4;
                } else {
                  if (((i = r(h, b, p)), 0 === t.data[i + 3])) continue;
                  (c = t.data[i]), (f = t.data[i + 1]);
                }
                if (
                  ((l = (b + 2 * g * (f / 65535 - 0.5)) * w),
                  (s = (h + 2 * p * (c / 65535 - 0.5)) * y),
                  a)
                )
                  for (
                    var k = Math.floor(s), _ = Math.floor(l), M = 0;
                    M <= 3;
                    M++
                  )
                    v[i + M] =
                      x[r(k, _, m) + M] * n(k, _, s, l) +
                      x[r(k + 1, _, m) + M] * n(k + 1, _, s, l) +
                      x[r(k, _ + 1, m) + M] * n(k, _ + 1, s, l) +
                      x[r(k + 1, _ + 1, m) + M] * n(k + 1, _ + 1, s, l);
                else
                  (u = r(Math.round(s), Math.round(l), m)),
                    (v[i] = x[u]),
                    (v[i + 1] = x[u + 1]),
                    (v[i + 2] = x[u + 2]),
                    (v[i + 3] = x[u + 3]);
              }
            return (
              o &&
                console.log(
                  "Finished displacement in " + (performance.now() - d) + "ms"
                ),
              { data: v, width: p, height: g }
            );
          });
      },
      115: (t) => {
        (t.exports = function (t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      156: (t) => {
        function e(t, e, r, n, a, o, i) {
          try {
            var u = t[o](i),
              s = u.value;
          } catch (t) {
            return void r(t);
          }
          u.done ? e(s) : Promise.resolve(s).then(n, a);
        }
        (t.exports = function (t) {
          return function () {
            var r = this,
              n = arguments;
            return new Promise(function (a, o) {
              var i = t.apply(r, n);
              function u(t) {
                e(i, a, o, u, s, "next", t);
              }
              function s(t) {
                e(i, a, o, u, s, "throw", t);
              }
              u(void 0);
            });
          };
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      912: (t) => {
        (t.exports = function (t, e) {
          return e.get ? e.get.call(t) : e.value;
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      448: (t) => {
        (t.exports = function (t, e, r) {
          if (e.set) e.set.call(t, r);
          else {
            if (!e.writable)
              throw new TypeError("attempted to set read only private field");
            e.value = r;
          }
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      690: (t) => {
        (t.exports = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      69: (t) => {
        (t.exports = function (t, e, r) {
          if (!e.has(t))
            throw new TypeError(
              "attempted to " + r + " private field on non-instance"
            );
          return e.get(t);
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      468: (t, e, r) => {
        var n = r(912),
          a = r(69);
        (t.exports = function (t, e) {
          var r = a(t, e, "get");
          return n(t, r);
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      661: (t, e, r) => {
        var n = r(448),
          a = r(69);
        (t.exports = function (t, e, r) {
          var o = a(t, e, "set");
          return n(t, o, r), r;
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      728: (t) => {
        function e(t, e) {
          for (var r = 0; r < e.length; r++) {
            var n = e[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        (t.exports = function (t, r, n) {
          return (
            r && e(t.prototype, r),
            n && e(t, n),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            t
          );
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      416: (t) => {
        (t.exports = function (t, e, r) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = r),
            t
          );
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      808: (t) => {
        function e(r) {
          return (
            (t.exports = e =
              Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (t) {
                    return t.__proto__ || Object.getPrototypeOf(t);
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(r)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      655: (t, e, r) => {
        var n = r(15);
        (t.exports = function (t, e) {
          if ("function" != typeof e && null !== e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (t.prototype = Object.create(e && e.prototype, {
            constructor: { value: t, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(t, "prototype", { writable: !1 }),
            e && n(t, e);
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      836: (t) => {
        (t.exports = function (t) {
          return t && t.__esModule ? t : { default: t };
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      993: (t, e, r) => {
        var n = r(698).default,
          a = r(115);
        (t.exports = function (t, e) {
          if (e && ("object" === n(e) || "function" == typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined"
            );
          return a(t);
        }),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      61: (t, e, r) => {
        var n = r(698).default;
        function a() {
          "use strict";
          (t.exports = a =
            function () {
              return e;
            }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
          var e = {},
            r = Object.prototype,
            o = r.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            u = i.iterator || "@@iterator",
            s = i.asyncIterator || "@@asyncIterator",
            l = i.toStringTag || "@@toStringTag";
          function c(t, e, r) {
            return (
              Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            c({}, "");
          } catch (t) {
            c = function (t, e, r) {
              return (t[e] = r);
            };
          }
          function f(t, e, r, n) {
            var a = e && e.prototype instanceof p ? e : p,
              o = Object.create(a.prototype),
              i = new E(n || []);
            return (
              (o._invoke = (function (t, e, r) {
                var n = "suspendedStart";
                return function (a, o) {
                  if ("executing" === n)
                    throw new Error("Generator is already running");
                  if ("completed" === n) {
                    if ("throw" === a) throw o;
                    return S();
                  }
                  for (r.method = a, r.arg = o; ; ) {
                    var i = r.delegate;
                    if (i) {
                      var u = _(i, r);
                      if (u) {
                        if (u === d) continue;
                        return u;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if ("suspendedStart" === n)
                        throw ((n = "completed"), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var s = h(t, e, r);
                    if ("normal" === s.type) {
                      if (
                        ((n = r.done ? "completed" : "suspendedYield"),
                        s.arg === d)
                      )
                        continue;
                      return { value: s.arg, done: r.done };
                    }
                    "throw" === s.type &&
                      ((n = "completed"),
                      (r.method = "throw"),
                      (r.arg = s.arg));
                  }
                };
              })(t, r, i)),
              o
            );
          }
          function h(t, e, r) {
            try {
              return { type: "normal", arg: t.call(e, r) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var d = {};
          function p() {}
          function g() {}
          function v() {}
          var y = {};
          c(y, u, function () {
            return this;
          });
          var w = Object.getPrototypeOf,
            m = w && w(w(O([])));
          m && m !== r && o.call(m, u) && (y = m);
          var x = (v.prototype = p.prototype = Object.create(y));
          function b(t) {
            ["next", "throw", "return"].forEach(function (e) {
              c(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function k(t, e) {
            function r(a, i, u, s) {
              var l = h(t[a], t, i);
              if ("throw" !== l.type) {
                var c = l.arg,
                  f = c.value;
                return f && "object" == n(f) && o.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        r("next", t, u, s);
                      },
                      function (t) {
                        r("throw", t, u, s);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (c.value = t), u(c);
                      },
                      function (t) {
                        return r("throw", t, u, s);
                      }
                    );
              }
              s(l.arg);
            }
            var a;
            this._invoke = function (t, n) {
              function o() {
                return new e(function (e, a) {
                  r(t, n, e, a);
                });
              }
              return (a = a ? a.then(o, o) : o());
            };
          }
          function _(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
              if (((e.delegate = null), "throw" === e.method)) {
                if (
                  t.iterator.return &&
                  ((e.method = "return"),
                  (e.arg = void 0),
                  _(t, e),
                  "throw" === e.method)
                )
                  return d;
                (e.method = "throw"),
                  (e.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return d;
            }
            var n = h(r, t.iterator, e.arg);
            if ("throw" === n.type)
              return (
                (e.method = "throw"), (e.arg = n.arg), (e.delegate = null), d
              );
            var a = n.arg;
            return a
              ? a.done
                ? ((e[t.resultName] = a.value),
                  (e.next = t.nextLoc),
                  "return" !== e.method &&
                    ((e.method = "next"), (e.arg = void 0)),
                  (e.delegate = null),
                  d)
                : a
              : ((e.method = "throw"),
                (e.arg = new TypeError("iterator result is not an object")),
                (e.delegate = null),
                d);
          }
          function M(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function I(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function E(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(M, this),
              this.reset(!0);
          }
          function O(t) {
            if (t) {
              var e = t[u];
              if (e) return e.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var r = -1,
                  n = function e() {
                    for (; ++r < t.length; )
                      if (o.call(t, r))
                        return (e.value = t[r]), (e.done = !1), e;
                    return (e.value = void 0), (e.done = !0), e;
                  };
                return (n.next = n);
              }
            }
            return { next: S };
          }
          function S() {
            return { value: void 0, done: !0 };
          }
          return (
            (g.prototype = v),
            c(x, "constructor", v),
            c(v, "constructor", g),
            (g.displayName = c(v, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === g || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, v)
                  : ((t.__proto__ = v), c(t, l, "GeneratorFunction")),
                (t.prototype = Object.create(x)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            b(k.prototype),
            c(k.prototype, s, function () {
              return this;
            }),
            (e.AsyncIterator = k),
            (e.async = function (t, r, n, a, o) {
              void 0 === o && (o = Promise);
              var i = new k(f(t, r, n, a), o);
              return e.isGeneratorFunction(r)
                ? i
                : i.next().then(function (t) {
                    return t.done ? t.value : i.next();
                  });
            }),
            b(x),
            c(x, l, "Generator"),
            c(x, u, function () {
              return this;
            }),
            c(x, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = [];
              for (var r in t) e.push(r);
              return (
                e.reverse(),
                function r() {
                  for (; e.length; ) {
                    var n = e.pop();
                    if (n in t) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = O),
            (E.prototype = {
              constructor: E,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = void 0),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = void 0),
                  this.tryEntries.forEach(I),
                  !t)
                )
                  for (var e in this)
                    "t" === e.charAt(0) &&
                      o.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = void 0);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;
                function r(r, n) {
                  return (
                    (i.type = "throw"),
                    (i.arg = t),
                    (e.next = r),
                    n && ((e.method = "next"), (e.arg = void 0)),
                    !!n
                  );
                }
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var a = this.tryEntries[n],
                    i = a.completion;
                  if ("root" === a.tryLoc) return r("end");
                  if (a.tryLoc <= this.prev) {
                    var u = o.call(a, "catchLoc"),
                      s = o.call(a, "finallyLoc");
                    if (u && s) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    } else if (u) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var n = this.tryEntries[r];
                  if (
                    n.tryLoc <= this.prev &&
                    o.call(n, "finallyLoc") &&
                    this.prev < n.finallyLoc
                  ) {
                    var a = n;
                    break;
                  }
                }
                a &&
                  ("break" === t || "continue" === t) &&
                  a.tryLoc <= e &&
                  e <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = t),
                  (i.arg = e),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), d)
                    : this.complete(i)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  d
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.finallyLoc === t)
                    return this.complete(r.completion, r.afterLoc), I(r), d;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var r = this.tryEntries[e];
                  if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var a = n.arg;
                      I(r);
                    }
                    return a;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, e, r) {
                return (
                  (this.delegate = {
                    iterator: O(t),
                    resultName: e,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = void 0),
                  d
                );
              },
            }),
            e
          );
        }
        (t.exports = a),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      15: (t) => {
        function e(r, n) {
          return (
            (t.exports = e =
              Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (t, e) {
                    return (t.__proto__ = e), t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(r, n)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      698: (t) => {
        function e(r) {
          return (
            (t.exports = e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(r)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      687: (t, e, r) => {
        var n = r(61)();
        t.exports = n;
        try {
          regeneratorRuntime = n;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = n)
            : Function("r", "regeneratorRuntime = r")(n);
        }
      },
    },
    e = {};
  function r(n) {
    var a = e[n];
    if (void 0 !== a) return a.exports;
    var o = (e[n] = { exports: {} });
    return t[n](o, o.exports, r), o.exports;
  }
  (() => {
    "use strict";
    var t = r(836),
      e = t(r(690)),
      n = t(r(728)),
      a = t(r(115)),
      o = t(r(655)),
      i = t(r(993)),
      u = t(r(808)),
      s = t(r(416)),
      l = r(324);
    r(70);
    function c(t) {
      var e = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var r,
          n = (0, u.default)(t);
        return (
          (r = e
            ? ((r = (0, u.default)(this).constructor),
              Reflect.construct(n, arguments, r))
            : n.apply(this, arguments)),
          (0, i.default)(this, r)
        );
      };
    }
    var f = (function (t) {
      (0, o.default)(i, t);
      var r = c(i);
      function i(t) {
        return (
          (0, e.default)(this, i),
          (t = r.call(this, t)),
          (0, s.default)((0, a.default)(t), "createCanvas", function (t, e) {
            return new OffscreenCanvas(t, e);
          }),
          (t.fetchUrl = self.fetch.bind(self)),
          (t.IS_BROWSER = !0),
          t
        );
      }
      return (
        (0, n.default)(i, [
          {
            key: "loadImage",
            value: function (t) {
              return fetch(t, { mode: "cors" })
                .then(function (t) {
                  return t.blob();
                })
                .then(function (t) {
                  return createImageBitmap(t);
                });
            },
          },
          {
            key: "createImageData",
            value: function (t, e, r) {
              return new ImageData(t, e, r);
            },
          },
        ]),
        i
      );
    })(l.PFMockupCanvasBase);
    onmessage = function (t) {
      var e;
      ((e = t.data.params), new f(e).renderMockup())
        .then(function (e) {
          if (t.data.returnAsUrl)
            return e.convertToBlob().then(function (e) {
              (e = URL.createObjectURL(e)),
                postMessage({ messageId: t.data.messageId, response: e });
            });
          (e = e.transferToImageBitmap()),
            postMessage({ messageId: t.data.messageId, response: e }, [e]);
        })
        .catch(function (e) {
          throw (postMessage({ messageId: t.data.messageId, error: e }), e);
        });
    };
  })();
})();
