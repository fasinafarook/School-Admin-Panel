import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface EngagementBarChartProps {
  data: { month: string; students: number; hours: number }[];
}

export function EngagementBarChart({ data }: EngagementBarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis yAxisId="left" orientation="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Bar dataKey="students" fill="#3b82f6" radius={[6, 6, 0, 0]} yAxisId="left" />
        <Bar dataKey="hours" fill="#10b981" radius={[6, 6, 0, 0]} yAxisId="right" />
      </BarChart>
    </ResponsiveContainer>
  );
}