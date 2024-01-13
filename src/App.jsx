import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" w-full flex">
      <Sidebar />
      <main className=" grow">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
