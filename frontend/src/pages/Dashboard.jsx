import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-6">Command Center</h2>

      <div className="flex gap-6 mb-8">
        <StatCard title="Active Fleet" value="220" />
        <StatCard title="Maintenance Alerts" value="10" />
        <StatCard title="Pending Cargo" value="23" />
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Recent Trips</h3>

        <table className="w-full text-sm">
          <thead className="text-gray-500">
            <tr>
              <th>Trip</th>
              <th>Vehicle</th>
              <th>Driver</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>#321</td>
              <td>Truck-04</td>
              <td>John</td>
              <td className="text-green-600 font-semibold">On Trip</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
