import reactDom from "react-dom/client";
import App from "./components/App";
import "./main.css";
const root=reactDom.createRoot(document.getElementById("root"));
root.render(<App/>)
if(module.hot)
module.hot.accept();

