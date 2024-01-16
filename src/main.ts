import "./app.css";
import App from "./App.svelte";

console.log("Hello 2");

const app = new App({
  target: document.getElementById("app"),
});

export default app;
