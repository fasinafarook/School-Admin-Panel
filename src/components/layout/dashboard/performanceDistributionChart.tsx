import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { performanceDistribution } from "../../../lib/analytics-data"; 
export function PerformanceDistributionChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={performanceDistribution}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          stroke="none"
        >
          {performanceDistribution.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}