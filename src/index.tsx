import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { GlobalContextProvider } from "./state/global/global.context";
import { useGlobal } from "./state/global/useGlobal";
import { I18nextProvider } from "react-i18next";
import i18next from "./i18n/init";
import { useCustomTheme } from "./themes/themes";
import { BrowserRouter } from "react-router-dom";
import { consoleHelper } from "./utils";
import "../src/components/atoms/LoadingSkeleton/skeleton.css";

const AppComponent = () => {
  useGlobal(); //** THIS HOOK MANAGES THE GLOBAL CONTEXT **//
  return (
    <I18nextProvider i18n={i18next}>
      <GlobalContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GlobalContextProvider>
    </I18nextProvider>
  );
};

const MainComponent = () => {
  const theme = useCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppComponent />
    </ThemeProvider>
  );
};

function AppWithCallbackAfterRender() {
  useEffect(() => {
    consoleHelper("rendered main component");
  });
  return <MainComponent />;
}

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<AppWithCallbackAfterRender />);
