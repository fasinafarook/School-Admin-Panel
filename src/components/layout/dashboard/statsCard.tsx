import type { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  changeText: ReactNode;
  bgColor?: string;
  iconColor?: string;
}

export function StatsCard({
  title,
  value,
  icon,
  changeText,
  bgColor = "bg-blue-100",
  iconColor = "text-blue-500",
}: StatsCardProps) {
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1" >{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            <p className="text-sm mt-1">{changeText}</p>
          </div>
          <div
            className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center`}
          >
            <div className={`w-6 h-6 ${iconColor}`}>{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
