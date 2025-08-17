interface AchievementCardProps {
  title: string;
  student: string;
  value: string;
  icon: string;
  valueColor: string;
}

export function AchievementCard({
  title,
  student,
  value,
  icon,
  valueColor,
}: AchievementCardProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="font-bold text-gray-800 text-lg mb-2" style={{ fontFamily: "Inter, sans-serif" }}>{title}</h3>
      <p className="text-gray-600 text-sm mb-3" >{student}</p>
      <div className={`font-bold text-xl ${valueColor}`}>{value}</div>
    </div>
  );
}