import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Vehicles from "./pages/Vehicles";
// import Trips from "./pages/Trips";
// import Maintenance from "./pages/Maintenance";
// import Fuel from "./pages/Fuel";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/vehicles" element={<Vehicles />} />
            {/* <Route path="/trips" element={<Trips />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/fuel" element={<Fuel />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
