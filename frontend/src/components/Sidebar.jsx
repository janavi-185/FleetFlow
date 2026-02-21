import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 text-white p-6 space-y-4">
      <h1 className="text-2xl font-bold">FleetFlow</h1>

      <nav className="flex flex-col gap-3 text-sm">
        <Link to="/" className="hover:text-teal-400">Dashboard</Link>
        <Link to="/vehicles" className="hover:text-teal-400">Vehicle Registry</Link>
        <Link to="/trips" className="hover:text-teal-400">Trip Dispatcher</Link>
        <Link to="/maintenance" className="hover:text-teal-400">Maintenance</Link>
        <Link to="/fuel" className="hover:text-teal-400">Fuel & Expenses</Link>
      </nav>
    </div>
  );
}
