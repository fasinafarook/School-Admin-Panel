// components/StatsSection.tsx
import { Users, BookOpen, Target, Trophy } from "lucide-react";
import { StatsCard } from "./statsCard";
export function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        title="TOTAL STUDENTS"
        value="245"
        icon={<Users />}
        changeText={
          <>
            <span className="text-green-600">+12%</span>
            <span className="text-gray-500"> from last month</span>
          </>
        }
        bgColor="bg-blue-100"
        iconColor="text-blue-500"
      />

      <StatsCard
        title="TOTAL CLASSES"
        value="8"
        icon={<BookOpen />}
        changeText={
          <>
            <span className="text-green-600">+8%</span>
            <span className="text-gray-500"> from last month</span>
          </>
        }
        bgColor="bg-green-100"
        iconColor="text-green-500"
      />

      <StatsCard
        title="AVG. PERFORMANCE"
        value="86.2%"
        icon={<Target />}
        changeText={
          <>
            <span className="text-green-600">+5%</span>
            <span className="text-gray-500"> from last month</span>
          </>
        }
        bgColor="bg-purple-100"
        iconColor="text-purple-500"
      />

      <StatsCard
        title="TOP PERFORMER"
        value="830 pts"
        icon={<Trophy />}
        changeText={
          <>
            <span className="text-green-600">Ahan K.</span>
            <span className="text-gray-500"> Class 8</span>
          </>
        }
        bgColor="bg-orange-100"
        iconColor="text-orange-500"
      />
    </div>
  );
}