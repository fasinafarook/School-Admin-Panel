import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DashboardLayout } from "./components/layout/common/dashboard-layout"
import DashboardPage from "./pages/Dashboard"
import AnalyticsPage from "./pages/Analytics"
import StudentsPage from "./pages/Students"
import LeaderboardPage from "./pages/Leaderboard"
import SettingsPage from "./pages/Settings"
import "./index.css"

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  )
}

export default App
