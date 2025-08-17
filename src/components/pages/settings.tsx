import type React from "react";
import { Button } from "../ui/button";
import { SettingsCard } from "../layout/settings/settingsCard";
import { SettingsInput } from "../layout/settings/settingsInput";
import { SettingsSelect } from "../layout/settings/settingsSelect";
import { SettingsToggle } from "../layout/settings/settingsToggle";
import { languageOptions, timezoneOptions } from "../../lib/mock-data";
const Settings: React.FC = () => {
  

  return (
    <div className="p-6 space-y-6 bg-white min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Inter, sans-serif" }}>Settings</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <SettingsCard
          title="Profile Settings"
          description="Update your personal information and contact details"
        >
          <SettingsInput id="fullName" label="Full Name" defaultValue="Admin User" />
          <SettingsInput id="email" label="Email" type="email" defaultValue="admin@example.com" />
          <SettingsInput id="phone" label="Phone" defaultValue="+1-555-0123" />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Update Profile</Button>
        </SettingsCard>

        {/* System Settings */}
        <SettingsCard
          title="System Settings"
          description="Configure system preferences and default options"
        >
          <SettingsSelect
            id="language"
            label="Default Language"
            defaultValue="english"
            options={languageOptions}
          />
          <SettingsSelect
            id="timezone"
            label="Time Zone"
            defaultValue="eastern"
            options={timezoneOptions}
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Settings</Button>
        </SettingsCard>

        {/* Notification Preferences */}
        <SettingsCard
          title="Notification Preferences"
          description="Manage how and when you receive notifications"
        >
          <SettingsToggle
            id="email-notifications"
            label="Email Notifications"
            description="Receive updates via email"
            defaultChecked
          />
          <SettingsToggle
            id="performance-reports"
            label="Performance Reports"
            description="Weekly performance summaries"
            defaultChecked
          />
          <SettingsToggle
            id="school-alerts"
            label="New School Alerts"
            description="Notifications for new school registrations"
          />
        </SettingsCard>

        {/* Data Management */}
        <SettingsCard
          title="Data Management"
          description="Export data and manage system backups"
        >
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Export Data</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Export Student Data
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Export School Reports
              </Button>
              <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                Export Analytics
              </Button>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Backup</h4>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              Create Backup
            </Button>
            <p className="text-sm text-gray-500 mt-2">Last backup: March 15, 2024</p>
          </div>
        </SettingsCard>
      </div>
    </div>
  );
};

export default Settings;