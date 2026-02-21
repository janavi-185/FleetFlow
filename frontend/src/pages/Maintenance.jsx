import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Maintenance() {
  const [vehicles, setVehicles] = useState([]);
  const [logs, setLogs] = useState([]);
  const [vehicleId, setVehicleId] = useState("");
  const [service, setService] = useState("");
  const [cost, setCost] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const v = await supabase.from("vehicles").select("*");
    const m = await supabase.from("maintenance_logs").select("*");

    setVehicles(v.data || []);
    setLogs(m.data || []);
  }

  async function addMaintenance() {
    await supabase.from("maintenance_logs").insert({
      vehicle_id: vehicleId,
      service_type: service,
      cost: Number(cost),
    });

    setService("");
    setCost("");
    fetchData();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Maintenance Logs</h1>

      <div className="bg-white p-4 rounded shadow mb-6 max-w-md">
        <select className="border p-2 w-full mb-2" onChange={e => setVehicleId(e.target.value)}>
          <option value="">Select Vehicle</option>
          {vehicles.map(v => (
            <option key={v.id} value={v.id}>
              {v.vehicle_name} ({v.status})
            </option>
          ))}
        </select>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Service type"
          value={service}
          onChange={e => setService(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-2"
          placeholder="Cost"
          value={cost}
          onChange={e => setCost(e.target.value)}
        />

        <button onClick={addMaintenance} className="bg-orange-500 text-white px-4 py-2 rounded">
          Add Maintenance
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">History</h2>

        {logs.length === 0 ? (
          <p className="text-gray-500">No maintenance records</p>
        ) : (
          <ul className="list-disc pl-5">
            {logs.map(l => (
              <li key={l.id}>
                Vehicle: {l.vehicle_id} — {l.service_type} — ₹{l.cost}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
