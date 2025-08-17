import b1 from "../assets/images/b1.jpg";
import b2 from "../assets/images/b2.webp";
import b3 from "../assets/images/b3.jpg";
import b4 from "../assets/images/b4.jpg";
import b5 from "../assets/images/b5.webp";
import grl1 from "../assets/images/grl1.jpg";
import grl2 from "../assets/images/grl2.jpg";
import grl3 from "../assets/images/grl3.jpg";
import grl4 from "../assets/images/grl4.webp";
import grl5 from "../assets/images/grl5.webp";
import grl6 from "../assets/images/grl6.webp"

export interface LeaderboardStudent {
  rank: number;
  name: string;
  class: string;
  points: number;
  accuracy: number;
  streak: {
    days: number;
    icon: string;
  };
  total?: number; // Make optional
  bgColor?: string; // Make optional
  profileImage?: string | null; // Make optional
  initials?: string;
  xp?: number;
  lessons?: number; // Make optional
  avatar?: string; // Make optional
}

export interface AllStudent {
  name: string
  class: string
  accuracy: number
  xp: number
  avatar: string
}

export interface ClassEnrollment {
  class: string
  students: number
}

export interface PerformanceDistribution {
  name: string
  value: number
  color: string
}

export interface EngagementTrend {
  month: string
  hours: number
}

export interface SkillPerformance {
  skill: string
  score: number
}

export interface SkillImprovement {
  skill: string
  improvement: string
}

export const dashboardStats = {
  totalStudents: 245,
  totalClasses: 8,
  avgPerformance: 86.2,
  topPerformer: "Ahan K. Class 8",
  topPerformerPoints: 830,
  totalLearningHours: 2847,
  lessonsCompleted: 1892,
  averageSessionTime: 24,
  activeStudents: 1156,
}

export const mockStats = dashboardStats

export const classEnrollment: ClassEnrollment[] = [
  { class: "Class 1", students: 27 },
  { class: "Class 2", students: 30 },
  { class: "Class 3", students: 32 },
  { class: "Class 4", students: 28 },
  { class: "Class 5", students: 31 },
  { class: "Class 6", students: 29 },
  { class: "Class 7", students: 33 },
  { class: "Class 8", students: 35 },
]


export const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" }
  ];


export const timezoneOptions = [
    { value: "eastern", label: "UTC-5 (Eastern Time)" },
    { value: "central", label: "UTC-6 (Central Time)" },
    { value: "pacific", label: "UTC-8 (Pacific Time)" }
  ];

export const leaderboardData = [
  {
    rank: 1,
    name: "Ahan Kumar",
    class: "Class 8",
    points: 830,
    accuracy: 98,
    streak: { days: 15, icon: "🏆🔥⚡" },
    total: 68,
    bgColor: "bg-yellow-400",
    profileImage: b1,
    xp: 830,
    
  },
  {
    rank: 2,
    name: "Hvff",
    class: "Class 7",
    points: 295,
    accuracy: 94,
    streak: { days: 12, icon: "🥈💪" },
    total: 45,
    bgColor: "bg-gray-500",
    profileImage: null,
    initials: "HV",
    xp: 295,
  },
  {
    rank: 3,
    name: "Flower Girl",
    class: "Class 6",
    points: 190,
    accuracy: 93,
    streak: { days: 8, icon: "🥉🌸" },
    total: 38,
    bgColor: "bg-orange-500",
    profileImage: grl2,
    xp: 93,
  },
  {
    rank: 4,
    name: "12 June Child Test",
    class: "Class 5",
    points: 165,
    accuracy: 92,
    streak: { days: 6, icon: "🌟📚" },
    total: 32,
    bgColor: "bg-blue-100",
    profileImage: b2,
    xp: 92,
  },
  {
    rank: 5,
    name: "Hcdff",
    class: "Class 4",
    points: 160,
    accuracy: 91,
    streak: { days: 5, icon: "🌟🎯" },
    total: 30,
    bgColor: "bg-blue-100",
    profileImage: grl1,
    xp: 295,
  },
  {
    rank: 6,
    name: "Eva",
    class: "Class 3",
    points: 145,
    accuracy: 90,
    streak: { days: 4, icon: "🌟💫" },
    total: 28,
    bgColor: "bg-blue-100",
    profileImage: b5,
    xp: 295,
  },
  {
    rank: 7,
    name: "Sophia Kim",
    class: "Class 2",
    points: 138,
    accuracy: 89,
    streak: { days: 7, icon: "🌟" },
    total: 26,
    bgColor: "bg-blue-100",
    profileImage: grl3,
    xp: 295,
  },
  {
    rank: 8,
    name: "James Wilson",
    class: "Class 6",
    points: 132,
    accuracy: 88,
    streak: { days: 3, icon: "🌟" },
    total: 24,
    bgColor: "bg-blue-100",
    profileImage: b3,
    xp: 295,
  },
  {
    rank: 9,
    name: "Olivia Davis",
    class: "Class 5",
    points: 128,
    accuracy: 87,
    streak: { days: 9, icon: "🌟" },
    total: 22,
    bgColor: "bg-blue-100",
    profileImage: grl4,
    xp: 295,
  },
  {
    rank: 10,
    name: "Liam Garcia",
    class: "Class 1",
    points: 120,
    accuracy: 86,
    streak: { days: 2, icon: "🌟" },
    total: 20,
    bgColor: "bg-blue-100",
    profileImage: b4,
    xp: 295,
    
  },

   {
    rank: 11,
    name: "Ava Martin",
    class: "Class 3",
    points: 120,
    accuracy: 85,
    xp: 4100,
    streak: { days: 2, icon: "🌟" },
    total: 20,
    bgColor: "bg-blue-100",
    profileImage: grl5,
  },
  {
    rank: 12,
    name: "Noah Thomas",
    class: "Class 4",
    accuracy: 83,
    points: 120,
    streak: { days: 2, icon: "🌟" },
    total: 20,
    bgColor: "bg-blue-100",
    xp: 3950,
    profileImage: grl6,
  },
]

export const achievementCards = [
  {
    title: "Current Champion",
    student: "Ahan Kumar",
    value: "830 points",
    icon: "👑",
    valueColor: "text-orange-500",
  },
  {
    title: "Longest Streak",
    student: "Ahan Kumar",
    value: "15 days",
    icon: "🔥",
    valueColor: "text-orange-500",
  },
  {
    title: "Most Active",
    student: "Ahan Kumar",
    value: "68 lessons",
    icon: "⚡",
    valueColor: "text-blue-500",
  },
  {
    title: "Highest Accuracy",
    student: "Ahan Kumar",
    value: "96%",
    icon: "🎯",
    valueColor: "text-green-500",
  },
];


export const performanceDistribution: PerformanceDistribution[] = [
  { name: "Excellent (90-100%)", value: 45, color: "#10b981" },
  { name: "Good (80-89%)", value: 35, color: "#6366f1" },
  { name: "Average (70-79%)", value: 35, color: "#f97316" },
  { name: "Needs Improvement ", value: 20, color: "#ef4444" },
]

export const allStudents: AllStudent[] = [
  { name: "Ahan Ku...", class: "Class 8", accuracy: 96, xp: 830, avatar: "AK" },
  { name: "Hvff", class: "Class 7", accuracy: 94, xp: 295, avatar: "HV" },
  { name: "Flower Girl", class: "Class 6", accuracy: 93, xp: 190, avatar: "FG" },
  { name: "12 June C...", class: "Class 5", accuracy: 92, xp: 165, avatar: "JC" },
  { name: "Hcdff", class: "Class 4", accuracy: 91, xp: 160, avatar: "HC" },
  { name: "Eva", class: "Class 3", accuracy: 90, xp: 145, avatar: "EV" },
  { name: "Sophia Kim", class: "Class 2", accuracy: 89, xp: 138, avatar: "SK" },
  { name: "James Wi...", class: "Class 6", accuracy: 88, xp: 132, avatar: "JW" },
  { name: "Olivia Davis", class: "Class 5", accuracy: 87, xp: 128, avatar: "OD" },
  { name: "Liam Garcia", class: "Class 1", accuracy: 86, xp: 120, avatar: "LG" },
  { name: "Ava Marti...", class: "Class 3", accuracy: 85, xp: 100, avatar: "AM" },
  { name: "Noah Tho...", class: "Class 4", accuracy: 83, xp: 95, avatar: "NT" },
]

export const engagementTrends: EngagementTrend[] = [
  { month: "Jan", hours: 45 },
  { month: "Feb", hours: 52 },
  { month: "Mar", hours: 48 },
  { month: "Apr", hours: 60 },
  { month: "May", hours: 67 },
]

export const skillPerformance: SkillPerformance[] = [
  { skill: "Vocabulary", score: 82 },
  { skill: "Grammar", score: 78 },
  { skill: "Pronunciation", score: 76 },
  { skill: "Listening", score: 85 },
  { skill: "Speaking", score: 74 },
]

export const skillImprovement: SkillImprovement[] = [
  { skill: "Vocabulary", improvement: "+5%" },
  { skill: "Grammar", improvement: "+8%" },
  { skill: "Pronunciation", improvement: "+12%" },
  { skill: "Listening", improvement: "+3%" },
  { skill: "Speaking", improvement: "+15%" },
]

export const analyticsStats = [
  {
    title: "Total Learning Hours",
    value: "2,847",
    change: "+12% from last month",
  },
  {
    title: "Lessons Completed",
    value: "1,892",
    change: "+18% from last month",
  },
  {
    title: "Average Session Time",
    value: "24 min",
    change: "+8% from last month",
  },
  {
    title: "Active Students",
    value: "1,156",
    change: "+5% from last month",
  },
]

