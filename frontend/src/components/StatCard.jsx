export default function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 w-48">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className="text-2xl font-bold text-teal-600">{value}</p>
    </div>
  );
}
