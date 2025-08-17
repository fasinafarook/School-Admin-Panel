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
      className={`flex flex-col sm:flex-row items-center sm:items-center p-4 sm:p-5 rounded-xl border transition-all shadow-sm hover:shadow-md ${
        index < 3
          ? "border-orange-200 bg-orange-50 hover:bg-orange-100"
          : "border-blue-200 bg-blue-50 hover:bg-blue-100"
      }`}
    >
      {/* Rank Badge */}
      <div
        className={`w-12 h-12 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-0 sm:mr-4 mb-2 sm:mb-0 shadow-md ${getRankBadgeColor(
          student.rank
        )}`}
      >
        {index === 0 ? "🏆" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${student.rank}`}
      </div>

      {/* Profile Picture */}
      <div className="w-14 h-14 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-0 sm:mr-4 mb-2 sm:mb-0 shadow-inner">
        {student.profileImage ? (
          <img
            src={student.profileImage}
            alt={student.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
            {student.initials}
          </div>
        )}
      </div>

      {/* Student Info */}
      <div className="flex-1 text-center sm:text-left mb-3 sm:mb-0">
        <h3 className="text-gray-900 text-lg sm:text-xl font-semibold" style={{ fontFamily: "Inter, sans-serif" }}>
          {student.name}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base">{student.class}</p>
        {student.streak.icon && (
          <span className="font-semibold ml-1 text-sm sm:text-base">{student.streak.icon}</span>
        )}
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-6 mt-2 sm:mt-0">
        {/* Points */}
        <div className="text-center sm:text-right">
          <div className="font-bold text-orange-500 text-lg sm:text-xl">{student.points}</div>
          <div className="text-gray-500 text-xs sm:text-sm">points</div>
        </div>

        {/* Accuracy */}
        <div className="text-center sm:text-right">
          <p
            className={`inline-block font-semibold px-3 py-1 rounded-full text-xs sm:text-sm ${
              student.accuracy >= 90
                ? "bg-green-100 text-green-600"
                : "bg-blue-100 text-blue-600"
            } shadow-sm`}
          >
            {student.accuracy}%
          </p>
        </div>

        {/* Streak */}
        <div className="text-center sm:text-right flex flex-col items-center sm:items-end">
          <div className="flex items-center text-orange-500 mb-1">
            <span className="text-sm sm:text-base">🔥</span>
            <span className="font-semibold ml-1 text-sm sm:text-base">{student.streak.days}</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-gray-700 border-gray-300 bg-white text-xs sm:text-sm hover:bg-gray-50 transition"
          >
            👁 View
          </Button>
        </div>
      </div>
    </div>
  );
}
