import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchInterval: 30_000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Login} />
          <Route path="/register" exact Component={Register} />
          <Route path="/dashboard" exact Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
