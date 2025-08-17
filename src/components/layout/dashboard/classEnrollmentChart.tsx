import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { classEnrollment } from "../../../lib/mock-data"; 
export function ClassEnrollmentChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={classEnrollment}>
        <XAxis
          dataKey="class"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: "#6B7280" }}
        />
        <Bar dataKey="students" fill="#93C5FD" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}