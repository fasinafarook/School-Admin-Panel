import React from "react";
import { getRankIcon, getRankBadgeColor, getPointsBadgeColor, getTrophyBackground, getAccuracyColor } from "../../../lib/student-util";
import { Button } from "../../ui/button";
import type { LeaderboardStudent } from "../../../lib/mock-data";  
interface StudentCardProps {
  student: LeaderboardStudent;
  variant?: "leaderboard" | "list";
}

export function StudentCard({ student, variant = "list" }: StudentCardProps) {
  if (variant === "leaderboard") {
    return (
      <div className="relative p-6 text-center bg-white shadow-lg rounded-2xl border border-gray-200">
        {/* Rank Badge */}
        <div className="absolute top-0 left-0">
          <span className="text-2xl">{getRankIcon(student.rank)}</span>
        </div>

        <div className="absolute top-0 right-0">
          <div className={`${getRankBadgeColor(student.rank)} text-white rounded-bl-xl px-2 py-1 text-sm font-bold shadow-md`}>
            #{student.rank}
          </div>
        </div>

        {/* Profile Picture */}
        <div className="relative mb-4">
          <div className="relative">
            <div className={`w-32 h-20 mx-auto rounded-full ${getTrophyBackground(student.rank)} opacity-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
            <div className={`relative z-10 w-20 h-20 mx-auto rounded-full p-1 shadow-lg ${student.bgColor || "bg-blue-100"}`}>
              {student.profileImage ? (
                <img
                  src={student.profileImage}
                  alt={student.name}
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <div className="w-full h-full rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  {student.initials}
                </div>
              )}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-2xl z-20">
                {getRankIcon(student.rank)}
              </div>
            </div>
          </div>
        </div>

        {/* Student Info */}
        <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>{student.name}</h3>
        <p className="text-gray-500 text-sm mb-3">{student.class}</p>

        {/* Points */}
        <div className={`${getPointsBadgeColor(student.rank)} text-white px-4 py-1 rounded-full text-sm font-bold mb-3 inline-block`}>
          {student.points} pts
        </div>

        {/* Accuracy */}
        <p className={`inline-block font-semibold mb-2 px-4 py-1 rounded-full ${
          student.accuracy >= 90 ? "bg-green-100 text-green-500" :
          student.accuracy >= 80 ? "bg-blue-100 text-blue-500" :
          "bg-yellow-100 text-yellow-500"
        }`}>
          {student.accuracy}% Accuracy
        </p>

        {/* Streak */}
        <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
          <span className="text-yellow-500 mr-1">⭐</span>
          <span>{student.total}</span>
          <span className="mx-2 text-green-500 mr-1">●</span>
          <span>{student.streak.days} day streak</span>
        </div>

        <Button variant="outline" size="sm" className="w-full bg-transparent">
          👁️ View Profile
        </Button>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white shadow-sm border border-gray-200 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          {student.profileImage ? (
            <img
              src={student.profileImage}
              alt={student.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
              {student.initials}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 truncate" style={{ fontFamily: "Inter, sans-serif" }}>{student.name}</h4>
          <p className="text-sm text-gray-500">{student.class}</p>
          <div className="flex items-center gap-2 mt-1">
            <span className={`inline-block text-${
              getAccuracyColor(student.accuracy)
            }-700 bg-${
              getAccuracyColor(student.accuracy)
            }-100 px-3 py-1 rounded-full font-semibold text-sm`}>
              {student.accuracy}%
            </span>
            <div className="flex flex-col items-center">
              <span className="text-gray-500 font-sm text-sm">
                {student.xp?.toLocaleString()}
              </span>
              <span className="text-gray-500 text-xs">XP</span>
            </div>
          </div>
        </div>
        <button className="w-14 h-9 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-400 hover:text-gray-600">
          <EyeIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function EyeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}