import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import routes from "./routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {routes.map((item) => {
        return <Route key={item.path} path={item.path} element={item.element} />;
      })}
    </Routes>
  </BrowserRouter>
);
