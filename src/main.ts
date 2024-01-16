import "./app.css";
import App from "./App.svelte";

console.log("Hello");

const app = new App({
  target: document.getElementById("app"),
});

export default app;
