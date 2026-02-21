import { useEffect, useState } from "react";
import { supabase } from "../supabase";

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [form, setForm] = useState({
    vehicle_name: "",
    license_plate: "",
    capacity_kg: ""
  });

  const fetchVehicles = async () => {
    const { data } = await supabase.from("vehicles").select("*");
    setVehicles(data || []);
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  const addVehicle = async () => {
    await supabase.from("vehicles").insert({
      ...form,
      capacity_kg: Number(form.capacity_kg)
    });
    setForm({ vehicle_name: "", license_plate: "", capacity_kg: "" });
    fetchVehicles();
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Vehicle Registry</h2>

      <div className="bg-white p-4 rounded-xl shadow mb-6 flex gap-3">
        <input className="border p-2" placeholder="Name"
          value={form.vehicle_name}
          onChange={e => setForm({ ...form, vehicle_name: e.target.value })}
        />
        <input className="border p-2" placeholder="Plate"
          value={form.license_plate}
          onChange={e => setForm({ ...form, license_plate: e.target.value })}
        />
        <input className="border p-2" placeholder="Capacity"
          value={form.capacity_kg}
          onChange={e => setForm({ ...form, capacity_kg: e.target.value })}
        />
        <button
          onClick={addVehicle}
          className="bg-teal-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <table className="w-full text-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Plate</th>
              <th>Capacity</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map(v => (
              <tr key={v.id} className="text-center">
                <td>{v.vehicle_name}</td>
                <td>{v.license_plate}</td>
                <td>{v.capacity_kg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
