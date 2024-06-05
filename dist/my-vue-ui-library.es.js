import { openBlock as s, createElementBlock as r, renderSlot as a } from "vue";
const i = (t, e) => {
  const c = t.__vccOpts || t;
  for (const [o, d] of e)
    c[o] = d;
  return c;
}, u = {
  name: "MyButton",
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function f(t, e, c, o, d, n) {
  return s(), r("button", {
    class: "btn",
    onClick: e[0] || (e[0] = (...l) => n.handleClick && n.handleClick(...l))
  }, [
    a(t.$slots, "default", {}, void 0, !0)
  ]);
}
const h = /* @__PURE__ */ i(u, [["render", f], ["__scopeId", "data-v-0949445d"]]), k = {
  name: "MyButton",
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function m(t, e, c, o, d, n) {
  return s(), r("button", {
    class: "btn",
    onClick: e[0] || (e[0] = (...l) => n.handleClick && n.handleClick(...l))
  }, "Button2");
}
const y = /* @__PURE__ */ i(k, [["render", m], ["__scopeId", "data-v-60f1cf38"]]);
function p() {
  if (typeof window < "u" && window.document) {
    const t = document.createElement("link");
    t.rel = "stylesheet", t.href = "./style.css", document.head.appendChild(t);
  }
}
p();
export {
  h as MyButton,
  y as MyInput
};
