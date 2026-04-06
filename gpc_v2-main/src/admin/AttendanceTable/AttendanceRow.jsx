
const AttendeeRow = ({ attendee }) => {
  const handleMoreActions = () => {
    console.log(`More actions for ${attendee.name}`);
  };

  return (
    <tr className="hover:bg-slate-50/50 transition-colors">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`size-9 rounded-full ${attendee.initialsBg} ${attendee.initialsColor} flex items-center justify-center font-bold text-sm`}>
            {attendee.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-900">{attendee.name}</span>
            <span className="text-xs text-slate-500">{attendee.email}</span>
          </div>
        </div>
      </td>

      <td className="px-6 py-4 text-slate-600 text-sm font-medium">
        {attendee.phone}
      </td>

      <td className="px-6 py-4">
        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${attendee.typeBg} ${attendee.typeColor}`}>
          <span className="material-symbols-outlined text-sm">{attendee.typeIcon}</span>
          {attendee.type}
        </span>
      </td>

      <td className="px-6 py-4 text-slate-500 text-sm italic">
        {attendee.registrationDate}
      </td>

      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          <span className={`size-2 rounded-full ${attendee.statusColor}`}></span>
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {attendee.status}
          </span>
        </div>
      </td>

      <td className="px-6 py-4 text-right">
        <button
          onClick={handleMoreActions}
          className="text-slate-400 hover:text-blue-800 transition-colors"
        >
          <span className="material-symbols-outlined">more_horiz</span>
        </button>
      </td>
    </tr>
  );
};

export default AttendeeRow;