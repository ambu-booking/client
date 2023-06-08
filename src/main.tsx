import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
