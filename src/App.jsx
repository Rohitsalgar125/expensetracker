import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";

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
      <div className=" w-full flex">
        {/* <Sidebar /> */}
        <main className=" grow">
          {/* <Dashboard /> */}
          <Login />
          {/* <Register /> */}
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
