import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Fuel() {
  const [vehicles, setVehicles] = useState([]);
  const [logs, setLogs] = useState([]);
  const [vehicleId, setVehicleId] = useState("");
  const [liters, setLiters] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const v = await supabase.from("vehicles").select("*");
    const f = await supabase.from("fuel_logs").select("*");

    setVehicles(v.data || []);
    setLogs(f.data || []);
  }

  async function addFuel() {
    await supabase.from("fuel_logs").insert({
      vehicle_id: vehicleId,
      fuel_liters: Number(liters),
      cost: Number(cost),
    });

    setLiters("");
    setCost("");
    fetchData();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Fuel & Expenses</h1>

      <div className="bg-white p-4 rounded shadow mb-6 max-w-md">
        <select className="border p-2 w-full mb-2" onChange={e => setVehicleId(e.target.value)}>
          <option value="">Select Vehicle</option>
          {vehicles.map(v => (
            <option key={v.id} value={v.id}>{v.vehicle_name}</option>
          ))}
        </select>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Fuel liters"
          value={liters}
          onChange={e => setLiters(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Cost"
          value={cost}
          onChange={e => setCost(e.target.value)}
        />

        <button onClick={addFuel} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Expense
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Expense History</h2>

        {logs.length === 0 ? (
          <p className="text-gray-500">No fuel expenses yet</p>
        ) : (
          <ul className="list-disc pl-5">
            {logs.map(l => (
              <li key={l.id}>
                Vehicle: {l.vehicle_id} — {l.fuel_liters} L — ₹{l.cost}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
