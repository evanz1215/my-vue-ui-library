import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";

function injectStyles() {
  if (typeof window !== "undefined" && window.document) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "./style.css"; // 确保路径正确
    document.head.appendChild(link);
  }
}

injectStyles();

export { MyButton, MyInput };
