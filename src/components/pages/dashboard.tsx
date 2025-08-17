import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { DashboardHeader } from "../layout/dashboard/dashboardHeader";
import { StatsSection } from "../layout/dashboard/statsSection";
import { ClassEnrollmentChart } from "../layout/dashboard/classEnrollmentChart";
import { PerformanceDistributionChart } from "../layout/dashboard/performanceDistributionChart";
import { leaderboardData } from "../../lib/mock-data";
import { performanceDistribution } from "../../lib/mock-data";
import { Button } from "../ui/button";
import { StudentCard } from "../layout/dashboard/studentCard";
import trophy from "../../assets/images/trophy.png"; 
export default function Dashboard() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      
      <StatsSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-500">
              Class-wise Student Enrollment
            </CardTitle>
            <p className="text-sm text-gray-600">
              Student distribution across different grades
            </p>
          </CardHeader>
          <CardContent>
            <ClassEnrollmentChart />
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-blue-500">
              Performance Distribution
            </CardTitle>
            <p className="text-sm text-gray-600">
              Overall accuracy breakdown across all students
            </p>
          </CardHeader>
          <CardContent>
            <PerformanceDistributionChart />
            <div className="mt-4 space-y-2">
              {performanceDistribution.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-blue-500 flex items-center gap-2">
  🏆
            <img
              src={trophy}
              alt="icon"
              className="w-8 h-8 object-contain inline-block"
            />
            <span>School Leaderboard</span>          </CardTitle>
          <p className="text-sm text-gray-600">
            Our highest performing students this month with points and achievements
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {leaderboardData.slice(0, 10).map((student) => (
              <StudentCard key={student.rank} student={student} variant="leaderboard" />
            ))}
          </div>
          
          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="text-4xl">🏆</div>
                <div>
                  <h3 className="font-bold text-yellow-800 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>Top Scorer</h3>
                  <p className="text-yellow-700">Ahan Kumar - 830 pts</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200 text-center" >
              <div className="flex flex-col items-center gap-3">
                <div className="text-4xl">🔥</div>
                <div>
                  <h3 className="font-bold text-green-800 text-lg" style={{ fontFamily: "Inter, sans-serif" }} >Longest Streak</h3>
                  <p className="text-green-700">Ahan Kumar - 15 days</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="text-4xl">⚡</div>
                <div>
                  <h3 className="font-bold text-blue-800 text-lg" style={{ fontFamily: "Inter, sans-serif" }}>Most Lessons</h3>
                  <p className="text-blue-700">Ahan Kumar - 68 lessons</p>
                </div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-500">All Students</h2>
            <p className="text-gray-600">Complete student directory with performance details</p>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Search students..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>All Classes</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {leaderboardData.map((student) => (
            <StudentCard key={student.rank} student={student} variant="list" />
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="px-8 py-2 text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent"
          >
            Load More Students (233 remaining)
          </Button>
        </div>
      </div>
    </div>
  );
}
