import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Trips() {
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [trips, setTrips] = useState([]);
  const [cargo, setCargo] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [driverId, setDriverId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const v = await supabase.from("vehicles").select("*");
    const d = await supabase.from("drivers").select("*");
    const t = await supabase.from("trips").select("*");

    setVehicles(v.data || []);
    setDrivers(d.data || []);
    setTrips(t.data || []);
  }

  async function createTrip() {
    setError("");

    const { error } = await supabase.from("trips").insert({
      vehicle_id: vehicleId,
      driver_id: driverId,
      cargo_weight: Number(cargo),
      status: "Dispatched",
    });

    if (error) {
      setError(error.message);
    } else {
      setCargo("");
      fetchData();
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trip Dispatcher</h1>

      {/* FORM */}
      <div className="bg-white p-4 rounded shadow mb-6 max-w-md">
        <select className="border p-2 w-full mb-2" onChange={e => setVehicleId(e.target.value)}>
          <option value="">Select Vehicle</option>
          {vehicles.map(v => (
            <option key={v.id} value={v.id}>
              {v.vehicle_name}
            </option>
          ))}
        </select>

        <select className="border p-2 w-full mb-2" onChange={e => setDriverId(e.target.value)}>
          <option value="">Select Driver</option>
          {drivers.map(d => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Cargo weight (kg)"
          className="border p-2 w-full mb-2"
          value={cargo}
          onChange={e => setCargo(e.target.value)}
        />

        {error && <p className="text-red-600 text-sm mb-2">{error}</p>}

        <button onClick={createTrip} className="bg-teal-600 text-white px-4 py-2 rounded">
          Dispatch Trip
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Trips</h2>

        {trips.length === 0 ? (
          <p className="text-gray-500">No trips created yet</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>Vehicle ID</th>
                <th>Driver ID</th>
                <th>Cargo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {trips.map(t => (
                <tr key={t.id} className="text-center">
                  <td>{t.vehicle_id}</td>
                  <td>{t.driver_id}</td>
                  <td>{t.cargo_weight}</td>
                  <td className="text-green-600">{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
