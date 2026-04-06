import { useState } from "react";
import AttendeeRow from "./AttendanceRow";

const AttendeesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalResults = 142;
  const resultsPerPage = 5;
  const startResult = 1;
  const endResult = 5;

  const attendees = [
    {
      id: 1,
      initials: 'JS',
      initialsBg: 'bg-primary/10',
      initialsColor: 'text-primary',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '(555) 123-4567',
      type: 'Attending',
      typeIcon: 'confirmation_number',
      typeBg: 'bg-blue-100 dark:bg-blue-900/30',
      typeColor: 'text-blue-700 dark:text-blue-400',
      registrationDate: 'Oct 12, 2023',
      status: 'Confirmed',
      statusColor: 'bg-green-500'
    },
    {
      id: 2,
      initials: 'RW',
      initialsBg: 'bg-purple-100',
      initialsColor: 'text-purple-700',
      name: 'Robert Wilson',
      email: 'r.wilson@corporate.org',
      phone: '(555) 987-6543',
      type: 'Donated Only',
      typeIcon: 'favorite',
      typeBg: 'bg-amber-100 dark:bg-amber-900/30',
      typeColor: 'text-amber-700 dark:text-amber-400',
      registrationDate: 'Oct 14, 2023',
      status: 'Confirmed',
      statusColor: 'bg-green-500'
    },
    {
      id: 3,
      initials: 'MK',
      initialsBg: 'bg-emerald-100',
      initialsColor: 'text-emerald-700',
      name: 'Michael King',
      email: 'mking@foundation.com',
      phone: '(555) 234-5678',
      type: 'Attending',
      typeIcon: 'confirmation_number',
      typeBg: 'bg-blue-100 dark:bg-blue-900/30',
      typeColor: 'text-blue-700 dark:text-blue-400',
      registrationDate: 'Oct 15, 2023',
      status: 'Pending',
      statusColor: 'bg-amber-500'
    },
    {
      id: 4,
      initials: 'SL',
      initialsBg: 'bg-slate-100',
      initialsColor: 'text-slate-700',
      name: 'Sarah Lee',
      email: 'sarahlee@gmail.com',
      phone: '(555) 876-5432',
      type: 'Attending',
      typeIcon: 'confirmation_number',
      typeBg: 'bg-blue-100 dark:bg-blue-900/30',
      typeColor: 'text-blue-700 dark:text-blue-400',
      registrationDate: 'Oct 16, 2023',
      status: 'Confirmed',
      statusColor: 'bg-green-500'
    },
    {
      id: 5,
      initials: 'DB',
      initialsBg: 'bg-rose-100',
      initialsColor: 'text-rose-700',
      name: 'David Brown',
      email: 'dbrown@techsys.com',
      phone: '(555) 432-1098',
      type: 'Donated Only',
      typeIcon: 'favorite',
      typeBg: 'bg-amber-100 dark:bg-amber-900/30',
      typeColor: 'text-amber-700 dark:text-amber-400',
      registrationDate: 'Oct 18, 2023',
      status: 'Waitlisted',
      statusColor: 'bg-slate-400'
    }
  ];

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(totalResults / resultsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                Attendee Name
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                Phone Number
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                Attendance Type
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                Registration Date
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                Status
              </th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {attendees.map((attendee) => (
              <AttendeeRow key={attendee.id} attendee={attendee} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-200">
        <p className="text-sm text-slate-500">
          Showing <span className="font-semibold text-slate-900">{startResult} to {endResult}</span> of{' '}
          <span className="font-semibold text-slate-900">{totalResults}</span> results
        </p>

        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= Math.ceil(totalResults / resultsPerPage)}
            className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendeesTable;