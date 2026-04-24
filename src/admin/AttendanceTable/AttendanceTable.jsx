import { useEffect, useState } from "react";
import AttendeeRow from "./AttendanceRow";
import { supabase } from "../../supabaseClient";

const AttendeesTable = () => {
  const [attendees, setAttendees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  // Fetch data
  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    setLoading(true);

    const { data, error, count } = await supabase
      .from("attendees") // <-- your table name
      .select("*", { count: "exact" });

    if (error) {
      console.error("Error fetching:", error);
      setLoading(false);
      return;
    }

    // Transform DB → UI format
    const formatted = data.map((item) => ({
      id: item.id,
      initials: getInitials(item.name),
      initialsBg: "bg-primary/10",
      initialsColor: "text-primary",
      name: item.name,
      email: item.email,
      phone: item.phone,
      type: item.attendance_type, // attending / donated
      typeIcon: item.attendance_type === "Attending" ? "confirmation_number" : "favorite",
      typeBg: item.attendance_type === "Attending"
        ? "bg-blue-100"
        : "bg-amber-100",
      typeColor: item.attendance_type === "Attending"
        ? "text-blue-700"
        : "text-amber-700",
      registrationDate: new Date(item.created_at).toLocaleDateString(),
      status: item.status || "Confirmed",
      statusColor: "bg-green-500"
    }));

    setAttendees(formatted);
    setTotalResults(count);
    setLoading(false);
  };

  const getInitials = (name) => {
    return name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4">Attendee Name</th>
              <th className="px-6 py-4">Phone Number</th>
              <th className="px-6 py-4">Attendance Type</th>
              <th className="px-6 py-4">Registration Date</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center py-6">
                  Loading...
                </td>
              </tr>
            ) : attendees.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6">
                  No data found
                </td>
              </tr>
            ) : (
              attendees.map((attendee) => (
                <AttendeeRow key={attendee.id} attendee={attendee} />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="px-6 py-4">
        Total Users: <strong>{totalResults}</strong>
      </div>
    </div>
  );
};

export default AttendeesTable;