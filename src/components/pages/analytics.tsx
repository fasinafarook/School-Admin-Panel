import type React from "react";
import {
  analyticsStats,
  performanceDistribution,
  engagementTrends,
  skillPerformance,
  skillImprovement,
} from "../../lib/analytics-data";
import { AnalyticsCard } from "../layout/analytics/analyticsCard";
import { StatCard } from "../layout/analytics/statCard";
import { PerformancePieChart } from "../layout/analytics/performancePieChart";
import { SkillProgressBar } from "../layout/analytics/skillProgresscard";
import { SkillBarChart } from "../layout/analytics/skillbarChart";
import { EngagementBarChart } from "../layout/analytics/engagementBarChart";

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>Analytics & Reports</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsStats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} change={stat.change} />
        ))}
      </div>

      {/* Performance & Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Student Performance Distribution */}
        <AnalyticsCard
          title="Student Performance Distribution"
          description="Overall accuracy breakdown across all students"
        >
          <PerformancePieChart data={performanceDistribution} />
        </AnalyticsCard>

        {/* Skill Performance */}
        <AnalyticsCard
          title="Average Performance by Skill Area"
          description="Individual skill performance metrics and improvements"
        >
          <div className="space-y-4 mb-6">
            {skillPerformance.map((skill, index) => (
              <SkillProgressBar
                key={index}
                skill={skill.skill}
                percentage={skill.percentage}
                color={skill.color}
              />
            ))}
          </div>

          <SkillBarChart data={skillPerformance} />

          {/* Month-over-Month Improvement */}
          <AnalyticsCard
            title="Month-over-Month Improvement"
            description=""
            className="bg-blue-50 shadow-none border mt-4"
          >
            <div className="grid grid-cols-2 gap-4">
              {skillImprovement.map((skill, index) => (
                <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{skill.skill}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-600 font-semibold">{skill.improvement}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnalyticsCard>
        </AnalyticsCard>
      </div>

      {/* Engagement Trends */}
      <div className="grid grid-cols-1 gap-6">
        <AnalyticsCard
          title="Student Engagement Trends"
          description="Monthly engagement patterns and learning time"
        >
          <EngagementBarChart data={engagementTrends} />
        </AnalyticsCard>
      </div>
    </div>
  );
};

export default Analytics;