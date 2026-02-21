import { useEffect, useState } from "react";
import { supabase } from "./supabase";

function App() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    supabase
      .from("vehicles")
      .select("*")
      .then(({ data, error }) => {
        if (!error) setVehicles(data);
      });
  }, []);

  return (
    <div>
      <h1>FleetFlow</h1>

      <ul>
        {vehicles.map((v) => (
          <li key={v.id}>
            {v.vehicle_name} – {v.license_plate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
