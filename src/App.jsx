import "./App.css";
// import Login from "./components/Login";
import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" w-full flex">
      {/* <Sidebar /> */}
      <main className=" grow">
        {/* <Dashboard /> */}
        {/* <Login /> */}
        <Register/>
      </main>
    </div>
  );
}

export default App;
