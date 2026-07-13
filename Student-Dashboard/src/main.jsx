import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css"
import SearchProvider from "./context/SearchContext";
import AuthProvider from "./context/AuthProvider";


ReactDOM.createRoot(
document.getElementById("root")
)
.render(

<AuthProvider>

<SearchProvider>

<App/>

</SearchProvider>

</AuthProvider>

);