// components/DashboardHeader.tsx
export function DashboardHeader() {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h1 className="text-3xl font-bold text-blue-500 mb-2"
         style={{ fontFamily: "Inter, sans-serif" }}>
          Greenwood Elementary School
        </h1>
        <p className="text-gray-600">
          Welcome back, School Admin! Here's your school's overview.
        </p>
      </div>
      <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2">
        <div className="text-right text-sm text-gray-500">
          <p>CBSE Board • Last updated: 12/08/2025, 15:46:57</p>
        </div>
      </div>
    </div>
  );
}