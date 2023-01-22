import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Feed from "./View/Feed/Feed";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Feed />
      </QueryClientProvider>
    </>
  );
}

export default App;
