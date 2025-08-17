import trophy from "../../../assets/images/trophy.png";
export function LeaderboardHeader() {
  return (
    <div className="flex justify-between items-start mb-8">
      <div>
        <h1
            className="text-4xl font-bold text-blue-500 mb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            🏆
            <img
              src={trophy}
              alt="icon"
              className="w-15 h-16 object-contain inline-block"
            />
            <span>School Leaderboard</span>
          </h1>
        <p className="text-gray-600 text-lg">
          Celebrating our top performers and encouraging healthy competition
        </p>
      </div>
      <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2">
        <p className="text-gray-500 text-sm">Updated: 12/08/2025</p>
      </div>
    </div>
  );
}