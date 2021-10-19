import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./axios.config";
import { QueryClientProvider } from "react-query";
import queryClient from "./reactQuery.config";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
