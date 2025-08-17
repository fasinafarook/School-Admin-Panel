export const getRankBadgeColor = (rank: number) => {
  if (rank === 1) return "bg-yellow-500";
  if (rank === 2) return "bg-gray-400";
  if (rank === 3) return "bg-orange-500";
  return "bg-blue-500";
};

export const getPointsBadgeColor = (rank: number) => {
  if (rank === 1) return "bg-yellow-500";
  if (rank === 2) return "bg-gray-400";
  if (rank === 3) return "bg-orange-500";
  return "bg-blue-500";
};

export const getAccuracyColor = (accuracy: number) => {
  if (accuracy >= 90) return "green";
  if (accuracy >= 80) return "blue";
  if (accuracy >= 70) return "yellow";
  return "red";
};

export const getTrophyBackground = (rank: number) => {
  if (rank === 1) return "bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-500";
  if (rank === 2) return "bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-500";
  if (rank === 3) return "bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-500";
  return "";
};

export const getRankIcon = (rank: number) => {
  if (rank === 1) return "🏆";
  if (rank === 2) return "🥈";
  if (rank === 3) return "🥉";
  return "";
};