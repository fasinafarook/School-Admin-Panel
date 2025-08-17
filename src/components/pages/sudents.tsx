import type React from "react";
import { useState } from "react";
import { Button } from "../ui/button";
import { leaderboardData } from "../../lib/mock-data";
import { StudentCard } from "../layout/dashboard/studentCard";
import { PageHeader } from "../layout/students/pageHeader";
import { SearchAndFilter } from "../layout/students/searchAndFilter";
const Students: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");

  const filteredStudents = leaderboardData.filter((student) => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass === "All Classes" || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="space-y-6">
      <PageHeader 
        title="All Students" 
        description="Complete student directory with performance details" 
      />

      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedClass={selectedClass}
        setSelectedClass={setSelectedClass}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>

      {filteredStudents.length > 12 && (
        <div className="text-center">
          <Button variant="outline">
            Load More Students ({leaderboardData.length - 12} remaining)
          </Button>
        </div>
      )}
    </div>
  );
};

export default Students;