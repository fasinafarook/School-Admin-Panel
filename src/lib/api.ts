// import { allStudents, classEnrollment, performanceDistribution, engagementTrends, dashboardStats } from "./mock-data"

// // Simulate API delay
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// // Students API
// export const studentsApi = {
//   getAll: async () => {
//     await delay(500)
//     return allStudents
//   },

//   getById: async (id: string) => {
//     await delay(300)
//     return allStudents.find((student) => student.id === id)
//   },

//   create: async (student: Omit<(typeof allStudents)[0], "id">) => {
//     await delay(800)
//     const newStudent = { ...student, id: Date.now().toString() }
//     allStudents.push(newStudent)
//     return newStudent
//   },

//   update: async (id: string, updates: Partial<(typeof allStudents)[0]>) => {
//     await delay(600)
//     const index = allStudents.findIndex((s) => s.id === id)
//     if (index !== -1) {
//       allStudents[index] = { ...allStudents[index], ...updates }
//       return allStudents[index]
//     }
//     throw new Error("Student not found")
//   },

//   delete: async (id: string) => {
//     await delay(400)
//     const index = allStudents.findIndex((s) => s.id === id)
//     if (index !== -1) {
//       allStudents.splice(index, 1)
//       return true
//     }
//     return false
//   },
// }

// // Classes API
// export const classesApi = {
//   getAll: async () => {
//     await delay(400)
//     return classEnrollment
//   },

//   getById: async (id: string) => {
//     await delay(300)
//     return classEnrollment.find((cls) => cls.id === id)
//   },
// }

// // Attendance API
// export const attendanceApi = {
//   getAll: async () => {
//     await delay(600)
//     return performanceDistribution
//   },

//   getByDate: async (date: string) => {
//     await delay(400)
//     return performanceDistribution.filter((record) => record.date === date)
//   },

//   markAttendance: async (studentId: string, status: "present" | "absent" | "late", date: string, className: string) => {
//     await delay(500)
//     const student = allStudents.find((s) => s.id === studentId)
//     if (!student) throw new Error("Student not found")

//     const newRecord = {
//       id: Date.now().toString(),
//       studentId,
//       studentName: student.name,
//       date,
//       status,
//       class: className,
//     }

//     performanceDistribution.push(newRecord)
//     return newRecord
//   },
// }

// // Reports API
// export const reportsApi = {
//   getAll: async () => {
//     await delay(500)
//     return engagementTrends
//   },

//   generate: async (type: "attendance" | "grades" | "behavior", title: string) => {
//     await delay(1200)
//     const newReport = {
//       id: Date.now().toString(),
//       title,
//       type,
//       date: new Date().toISOString().split("T")[0],
//       description: `Generated ${type} report: ${title}`,
//     }
//     engagementTrends.push(newReport)
//     return newReport
//   },
// }

// // Dashboard API
// export const dashboardApi = {
//   getStats: async () => {
//     await delay(300)
//     return dashboardStats
//   },
// }
