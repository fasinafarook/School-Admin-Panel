import { getRankIcon, getRankBadgeColor } from "../../../lib/student-util";
import type { LeaderboardStudent } from "../../../lib/mock-data";

interface PodiumStudentProps {
  student: LeaderboardStudent;
  height: string;
  position: "left" | "center" | "right";
}

export function PodiumStudent({ student, height, position }: PodiumStudentProps) {
  return (
    <div className={`flex flex-col items-center ${position === "left" ? "order-first" : position === "right" ? "order-last" : "order-none"}`}>
      {/* Profile Picture with Badge */}
      <div className="relative mb-4">
        <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
          {student.profileImage ? (
            <img
              src={student.profileImage}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">
              {student.initials}
            </div>
          )}
        </div>
        <span className="absolute -top-3 -right-3 text-3xl">
          {getRankIcon(student.rank)}
        </span>
      </div>

      {/* Podium Block */}
      <div
        className={`${getRankBadgeColor(student.rank)} ${height} w-32 rounded-t-lg flex flex-col justify-center items-center text-white relative`}
      >
        <div className="text-center p-4">
          <h3 className="font-bold text-lg mb-1 whitespace-nowrap" style={{ fontFamily: "Inter, sans-serif" }}>
            {student.name}
          </h3>
          <p className="text-sm opacity-90 mb-2">{student.class}</p>
          <span className="font-bold">{student.points} pts</span>
        </div>
      </div>
    </div>
  );
}