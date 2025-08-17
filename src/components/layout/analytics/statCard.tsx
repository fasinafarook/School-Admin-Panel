import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
interface StatCardProps {
  title: string;
  value: string;
  change: string;
}

export function StatCard({ title, value, change }: StatCardProps) {
  return (
    <Card className="bg-white shadow-sm rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <p className="text-xs font-medium text-green-600">{change}</p>
      </CardContent>
    </Card>
  );
}