// Requirements
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { FocusStyleManager } from "@blueprintjs/core";

// Components
import BaseView from "./views/base";

// Resources
import "./global.scss";

FocusStyleManager.onlyShowFocusOnTabs();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseView />
    </BrowserRouter>
  </React.StrictMode>
);
