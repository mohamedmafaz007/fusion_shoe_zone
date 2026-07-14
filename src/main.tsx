import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./lib/store";
import { Toaster } from "sonner";
import App from "./App";
import "./styles.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <App />
        <Toaster position="top-right" richColors closeButton />
      </StoreProvider>
    </QueryClientProvider>
  </StrictMode>
);
