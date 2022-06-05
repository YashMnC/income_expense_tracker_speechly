import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <SpeechProvider
      appId="35cf28a9-9fcd-479c-a918-fa0c0ce00b3c"
      language="en-US"
    >
      <Provider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </SpeechProvider>
  </React.StrictMode>
);
