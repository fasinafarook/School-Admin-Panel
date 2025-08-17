import { Button } from "../../ui/button";
export function SearchFilters() {
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      <input
        type="text"
        placeholder="Search students..."
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
      />

      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>All Classes</option>
        {[...Array(8)].map((_, i) => (
          <option key={i}>Class {i + 1}</option>
        ))}
      </select>

      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>This Month</option>
        <option>Last Month</option>
        <option>This Year</option>
      </select>

      <Button
        variant="outline"
        className="px-6 py-2 border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent"
      >
        🔍 More Filters
      </Button>
    </div>
  );
}