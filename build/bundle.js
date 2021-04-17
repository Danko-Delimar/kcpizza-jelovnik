var app = (function () {
  "use strict";
  function t() {}
  function n(t) {
    return t();
  }
  function e() {
    return Object.create(null);
  }
  function o(t) {
    t.forEach(n);
  }
  function i(t) {
    return "function" == typeof t;
  }
  function r(t, n) {
    return t != t
      ? n == n
      : t !== n || (t && "object" == typeof t) || "function" == typeof t;
  }
  function c(t) {
    return null == t ? "" : t;
  }
  function s(t, n) {
    t.appendChild(n);
  }
  function a(t) {
    t.parentNode.removeChild(t);
  }
  function u(t) {
    return document.createElement(t);
  }
  function l(t) {
    return document.createTextNode(t);
  }
  function d() {
    return l(" ");
  }
  function f(t, n, e, o) {
    return t.addEventListener(n, e, o), () => t.removeEventListener(n, e, o);
  }
  function p(t, n, e) {
    null == e
      ? t.removeAttribute(n)
      : t.getAttribute(n) !== e && t.setAttribute(n, e);
  }
  let m;
  function g(t) {
    m = t;
  }
  const h = [],
    $ = [],
    b = [],
    v = [],
    _ = Promise.resolve();
  let y = !1;
  function k(t) {
    b.push(t);
  }
  let x = !1;
  const j = new Set();
  function z() {
    if (!x) {
      x = !0;
      do {
        for (let t = 0; t < h.length; t += 1) {
          const n = h[t];
          g(n), E(n.$$);
        }
        for (g(null), h.length = 0; $.length; ) $.pop()();
        for (let t = 0; t < b.length; t += 1) {
          const n = b[t];
          j.has(n) || (j.add(n), n());
        }
        b.length = 0;
      } while (h.length);
      for (; v.length; ) v.pop()();
      (y = !1), (x = !1), j.clear();
    }
  }
  function E(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const n = t.dirty;
      (t.dirty = [-1]),
        t.fragment && t.fragment.p(t.ctx, n),
        t.after_update.forEach(k);
    }
  }
  const A = new Set();
  function w(t, n) {
    -1 === t.$$.dirty[0] &&
      (h.push(t), y || ((y = !0), _.then(z)), t.$$.dirty.fill(0)),
      (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
  }
  function O(r, c, s, u, l, d, f = [-1]) {
    const p = m;
    g(r);
    const h = c.props || {},
      $ = (r.$$ = {
        fragment: null,
        ctx: null,
        props: d,
        update: t,
        not_equal: l,
        bound: e(),
        on_mount: [],
        on_destroy: [],
        before_update: [],
        after_update: [],
        context: new Map(p ? p.$$.context : []),
        callbacks: e(),
        dirty: f,
        skip_bound: !1,
      });
    let b = !1;
    if (
      (($.ctx = s
        ? s(r, h, (t, n, ...e) => {
            const o = e.length ? e[0] : n;
            return (
              $.ctx &&
                l($.ctx[t], ($.ctx[t] = o)) &&
                (!$.skip_bound && $.bound[t] && $.bound[t](o), b && w(r, t)),
              n
            );
          })
        : []),
      $.update(),
      (b = !0),
      o($.before_update),
      ($.fragment = !!u && u($.ctx)),
      c.target)
    ) {
      if (c.hydrate) {
        const t = (function (t) {
          return Array.from(t.childNodes);
        })(c.target);
        $.fragment && $.fragment.l(t), t.forEach(a);
      } else $.fragment && $.fragment.c();
      c.intro && (v = r.$$.fragment) && v.i && (A.delete(v), v.i(_)),
        (function (t, e, r) {
          const {
            fragment: c,
            on_mount: s,
            on_destroy: a,
            after_update: u,
          } = t.$$;
          c && c.m(e, r),
            k(() => {
              const e = s.map(n).filter(i);
              a ? a.push(...e) : o(e), (t.$$.on_mount = []);
            }),
            u.forEach(k);
        })(r, c.target, c.anchor),
        z();
    }
    var v, _;
    g(p);
  }
  function P(n) {
    let e, i, r, m, g, h, $, b, v, _, y, k, x, j, z, E, A, w, O;
    return {
      c() {
        (e = u("main")),
          (i = u("h1")),
          (i.textContent = "KC PIZZA JELOVNIK"),
          (r = d()),
          (m = u("p")),
          (m.textContent = "Ulica Antuna Nemčića 2, 48000 Koprivnica"),
          (g = d()),
          (h = u("div")),
          ($ = u("button")),
          (b = l("Pizze")),
          (_ = d()),
          (y = u("button")),
          (k = l("Kebabi/Rolls Pizza")),
          (j = d()),
          (z = u("img")),
          p(i, "class", "svelte-7i0noz"),
          p(m, "id", "address"),
          p(m, "class", "svelte-7i0noz"),
          p($, "id", (v = n[1] ? "button" : "button-deactivated")),
          p($, "class", "svelte-7i0noz"),
          p(y, "id", (x = n[1] ? "button-deactivated" : "button")),
          p(y, "class", "svelte-7i0noz"),
          p(h, "class", "buttons svelte-7i0noz"),
          z.src !== (E = n[0]) && p(z, "src", E),
          p(z, "alt", "Slika jelovnika"),
          p(
            e,
            "class",
            (A = c(n[2] ? "main-mobile" : "main-pc") + " svelte-7i0noz")
          );
      },
      m(t, o) {
        !(function (t, n, e) {
          t.insertBefore(n, e || null);
        })(t, e, o),
          s(e, i),
          s(e, r),
          s(e, m),
          s(e, g),
          s(e, h),
          s(h, $),
          s($, b),
          s(h, _),
          s(h, y),
          s(y, k),
          s(e, j),
          s(e, z),
          w || ((O = [f($, "click", n[4]), f(y, "click", n[5])]), (w = !0));
      },
      p(t, [n]) {
        2 & n &&
          v !== (v = t[1] ? "button" : "button-deactivated") &&
          p($, "id", v),
          2 & n &&
            x !== (x = t[1] ? "button-deactivated" : "button") &&
            p(y, "id", x),
          1 & n && z.src !== (E = t[0]) && p(z, "src", E),
          4 & n &&
            A !==
              (A = c(t[2] ? "main-mobile" : "main-pc") + " svelte-7i0noz") &&
            p(e, "class", A);
      },
      i: t,
      o: t,
      d(t) {
        t && a(e), (w = !1), o(O);
      },
    };
  }
  function C(t, n, e) {
    let o,
      i = "./images/jelovnik1_a3.svg",
      r = !0;
    o = !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
    const c = (t) => {
      "jelovnik" === t
        ? (e(1, (r = !0)), e(0, (i = "./images/jelovnik1_a3.svg")))
        : "ponude" === t &&
          (e(1, (r = !1)), e(0, (i = "./images/jelovnik2_a3.svg")));
    };
    return [i, r, o, c, () => c("jelovnik"), () => c("ponude")];
  }
  return new (class extends class {
    $destroy() {
      !(function (t, n) {
        const e = t.$$;
        null !== e.fragment &&
          (o(e.on_destroy),
          e.fragment && e.fragment.d(n),
          (e.on_destroy = e.fragment = null),
          (e.ctx = []));
      })(this, 1),
        (this.$destroy = t);
    }
    $on(t, n) {
      const e = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return (
        e.push(n),
        () => {
          const t = e.indexOf(n);
          -1 !== t && e.splice(t, 1);
        }
      );
    }
    $set(t) {
      var n;
      this.$$set &&
        ((n = t), 0 !== Object.keys(n).length) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  } {
    constructor(t) {
      super(), O(this, t, C, P, r, {});
    }
  })({ target: document.body, props: { name: "world" } });
})();
//# sourceMappingURL=bundle.js.map
