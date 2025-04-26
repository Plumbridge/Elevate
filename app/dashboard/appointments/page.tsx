import { Calendar, Plus, Video } from "lucide-react"

export default function AppointmentsPage() {
  // Sample upcoming appointments
  const upcomingAppointments = [
    {
      id: 1,
      title: "Visa Application Review",
      advisor: "Sarah Johnson",
      date: "March 30, 2023",
      time: "2:00 PM - 2:30 PM",
      type: "Video Call",
      icon: Video,
    },
    {
      id: 2,
      title: "University Application Strategy",
      advisor: "Michael Chen",
      date: "April 5, 2023",
      time: "11:00 AM - 11:45 AM",
      type: "Video Call",
      icon: Video,
    },
    {
      id: 3,
      title: "Financial Planning Session",
      advisor: "Jessica Williams",
      date: "April 12, 2023",
      time: "3:30 PM - 4:15 PM",
      type: "Video Call",
      icon: Video,
    },
  ]
  
  // Sample past appointments
  const pastAppointments = [
    {
      id: 1,
      title: "Initial Consultation",
      advisor: "David Thompson",
      date: "March 10, 2023",
      time: "10:00 AM - 11:00 AM",
      type: "Video Call",
    },
    {
      id: 2,
      title: "Document Review Session",
      advisor: "Sarah Johnson",
      date: "March 15, 2023",
      time: "2:30 PM - 3:00 PM",
      type: "Video Call",
    },
  ]
  
  // Sample available time slots
  const availableSlots = [
    { id: 1, date: "March 28, 2023", time: "10:00 AM - 10:30 AM", advisor: "Michael Chen" },
    { id: 2, date: "March 28, 2023", time: "11:00 AM - 11:30 AM", advisor: "Sarah Johnson" },
    { id: 3, date: "March 29, 2023", time: "1:00 PM - 1:30 PM", advisor: "Jessica Williams" },
    { id: 4, date: "March 29, 2023", time: "3:30 PM - 4:00 PM", advisor: "David Thompson" },
    { id: 5, date: "March 30, 2023", time: "9:30 AM - 10:00 AM", advisor: "Michael Chen" },
  ]
  
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Appointments</h1>
        <p className="text-muted-foreground">Schedule and manage your advising sessions</p>
      </div>
      
      {/* Upcoming Appointments */}
      <div className="rounded-xl glass p-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Upcoming Appointments</h2>
          <button className="flex items-center text-sm px-3 py-1.5 rounded bg-primary text-white">
            <Plus className="h-4 w-4 mr-1" /> Schedule New
          </button>
        </div>
        
        <div className="space-y-4">
          {upcomingAppointments.map((appointment) => (
            <div key={appointment.id} className="p-4 rounded-lg bg-primary/5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{appointment.title}</h3>
                  <p className="text-sm text-muted-foreground">with {appointment.advisor}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{appointment.date} • {appointment.time}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center px-2 py-1 rounded text-xs bg-primary/10 text-primary">
                    <appointment.icon className="h-3 w-3 mr-1" />
                    <span>{appointment.type}</span>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <button className="text-xs text-primary hover:underline">Reschedule</button>
                    <button className="text-xs text-red-500 hover:underline">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Past Appointments */}
      <div className="rounded-xl glass p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Past Appointments</h2>
        <div className="space-y-4">
          {pastAppointments.map((appointment) => (
            <div key={appointment.id} className="p-4 rounded-lg bg-gray-50/50 dark:bg-gray-800/20">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{appointment.title}</h3>
                  <p className="text-sm text-muted-foreground">with {appointment.advisor}</p>
                  <div className="flex items-center text-sm text-muted-foreground mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{appointment.date} • {appointment.time}</span>
                  </div>
                </div>
                <div>
                  <button className="text-xs text-primary hover:underline">View Notes</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Available Slots */}
      <div className="rounded-xl glass p-6">
        <h2 className="text-xl font-semibold mb-4">Available Time Slots</h2>
        <div className="space-y-2">
          {availableSlots.map((slot) => (
            <div key={slot.id} className="p-3 rounded-lg border border-border hover:bg-gray-50/50 dark:hover:bg-gray-800/20 cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{slot.date}</p>
                  <p className="text-sm text-muted-foreground">{slot.time} with {slot.advisor}</p>
                </div>
                <button className="text-xs text-primary px-3 py-1 rounded-full border border-primary hover:bg-primary hover:text-white transition-colors">
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
