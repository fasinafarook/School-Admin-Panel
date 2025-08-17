import type { LeaderboardStudent } from "../../../lib/mock-data";
import { getRankBadgeColor} from "../../../lib/student-util";
import { Button } from "../../ui/button";

interface LeaderboardRowProps {
  student: LeaderboardStudent;
  index: number;
}

export function LeaderboardRow({ student, index }: LeaderboardRowProps) {
  return (
    <div
      className={`flex items-center p-4 rounded-lg border transition-colors ${
        index < 3
          ? "border-orange-200 bg-orange-50 hover:bg-orange-100"
          : "border-blue-200 bg-blue-50 hover:bg-blue-100"
      }`}
    >
      {/* Rank Badge */}
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 ${getRankBadgeColor(
          student.rank
        )}`}
      >
        {index === 0 ? "🏆" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${student.rank}`}
      </div>

      {/* Profile Picture */}
      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
        {student.profileImage ? (
          <img
            src={student.profileImage}
            alt={student.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {student.initials}
          </div>
        )}
      </div>

      {/* Student Info */}
      <div className="flex-1">
        <h3 className="text-gray-900 text-lg font-bold" style={{ fontFamily: "Inter, sans-serif" }}>{student.name}</h3>
        <p className="text-gray-600">{student.class}</p>
        <span className="font-semibold ml-1">{student.streak.icon}</span>
      </div>

      {/* Points */}
      <div className="text-right mr-6">
        <div className="font-bold text-orange-500 text-xl">
          {student.points}
        </div>
        <div className="text-gray-500 text-sm">points</div>
      </div>

      {/* Accuracy */}
      <div className="text-right mr-6">
        <p
          className={`inline-block font-semibold mb-2 px-4 py-1 rounded-full ${
            student.accuracy >= 90
              ? "bg-green-100 text-green-500"
              : "bg-blue-100 text-blue-500"
          }`}
        >
          {student.accuracy}%
        </p>
      </div>

      {/* Streak */}
      <div className="text-right mr-6">
        <div className="flex items-center text-orange-500">
          <span className="text-sm">🔥</span>
          <span className="font-semibold ml-1">{student.streak.days}</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="text-gray-600 border-gray-300 bg-transparent"
        >
          👁 View
        </Button>
      </div>
    </div>
  );
}