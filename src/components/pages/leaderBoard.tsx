import { Card } from "../ui/card";
import { leaderboardData,achievementCards } from "../../lib/mock-data";
import { PodiumStudent } from "../layout/leaderboard/podiumStudent";
import { SearchFilters } from "../layout/leaderboard/searchFilter";
import { LeaderboardRow } from "../layout/leaderboard/leaderboardRaw";
import { AchievementCard } from "../layout/leaderboard/achievementCard";
import { LeaderboardHeader } from "../layout/leaderboard/leaderboardHeader";
const topStudents = leaderboardData.slice(0, 3);

const Leaderboard = () => {
  return (
    <div className="space-y-6">
      <LeaderboardHeader />

      {/* Champions Podium */}
      <div className="bg-white border border-gray-200 rounded-lg mb-12 shadow-sm overflow-hidden">
        <div className="bg-orange-50 border-b border-orange-200 px-6 py-6 text-center rounded-t-lg">
          <h2 className="text-xl font-bold text-blue-500 flex items-center justify-center gap-2">
            <span className="text-blue-500 text-2xl">🏅</span>
            Champions Podium
            <span className="text-blue-500 text-2xl">🏅</span>
          </h2>
          <p className="text-orange-500 font-medium mt-1">
            This month's top 3 achievers
          </p>
        </div>

        <div className="flex items-end justify-center gap-8 p-8">
          {/* 2nd place (left) */}
          <PodiumStudent
            student={topStudents[1]}
            height="h-32"
            position="left"
          />

          {/* 1st place (center) */}
          <PodiumStudent
            student={topStudents[0]}
            height="h-40"
            position="center"
          />

          {/* 3rd place (right) */}
          <PodiumStudent
            student={topStudents[2]}
            height="h-28"
            position="right"
          />
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white shadow-md rounded-xl p-6 mb-8">
        <SearchFilters />
      </Card>

      {/* Complete Rankings section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-500 mb-2">
            Complete Rankings
          </h2>
          <p className="text-gray-600">
            All students ranked by points earned this month
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-4" style={{ fontFamily: "Inter, sans-serif" }}> 
            {leaderboardData.map((student, index) => (
              <LeaderboardRow
                key={student.rank}
                student={student}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {achievementCards.map((card, index) => (
          <AchievementCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
