interface SkillProgressBarProps {
  skill: string;
  percentage: number;
  color: string;
}

export function SkillProgressBar({ skill, percentage, color }: SkillProgressBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{skill}</span>
        <span className="text-sm font-bold text-gray-900">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
}