import React from "react";
import ReactDOM from "react-dom/client";
import Mainbody from "./Layout/Mainbody";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { DestinationApi } from "./api/DestinationApi";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider api={DestinationApi}>
      <Mainbody />
    </ApiProvider>
  </React.StrictMode>
);
