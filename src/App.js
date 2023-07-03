import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";

function App() {
  return <>
  <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" className="d-flex flex-column">
    <div id="content">
    <Dashboard/>
    </div>
    </div>
    </div>
    </>
}

export default App;
