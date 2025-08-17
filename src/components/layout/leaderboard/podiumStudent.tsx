import { getRankIcon, getRankBadgeColor } from "../../../lib/student-util";
import type { LeaderboardStudent } from "../../../lib/mock-data";

interface PodiumStudentProps {
  student: LeaderboardStudent;
  height: string;
  position: "left" | "center" | "right";
}

export function PodiumStudent({ student, height, position }: PodiumStudentProps) {
  return (
    <div
      className={`flex flex-col items-center ${
        position === "left"
          ? "order-first"
          : position === "right"
          ? "order-last"
          : "order-none"
      }`}
    >
      {/* Profile Section */}
      <div className="relative flex flex-col items-center mb-3 sm:mb-4">
        {/* Profile Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
          {student.profileImage ? (
            <img
              src={student.profileImage}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl sm:text-2xl">
              {student.initials}
            </div>
          )}
        </div>

        {/* Rank Badge */}
        <span className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 text-2xl sm:text-3xl">
          {getRankIcon(student.rank)}
        </span>
      </div>

      {/* Podium Block */}
      <div
        className={`${getRankBadgeColor(
          student.rank
        )} ${height} sm:${height} w-24 sm:w-32 rounded-t-lg flex flex-col justify-center items-center text-white shadow-md`}
      >
        <div className="text-center p-3 sm:p-4 space-y-1">
          <h3
            className="font-bold text-sm sm:text-lg truncate"
            style={{ fontFamily: "Inter, sans-serif" }}
            title={student.name}
          >
            {student.name}
          </h3>
          <p className="text-xs sm:text-sm opacity-90">{student.class}</p>
          <span className="font-semibold text-sm sm:text-base">{student.points} pts</span>
        </div>
      </div>
    </div>
  );
}
