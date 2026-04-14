// components/CenterStats.jsx
import React from 'react';

const CenterStats = () => {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-xl p-6 border border-slate-200 bg-white">
        <div className="flex items-center gap-2 text-blue-800">
          <span className="material-symbols-outlined">inventory_2</span>
          <p className="text-slate-600 text-sm font-medium uppercase tracking-wider">
            Center Needs
          </p>
        </div>
        <p className="text-slate-900 tracking-tight text-xl font-bold leading-tight">
          School Supplies, Fresh Bedding, Hygiene Kits
        </p>
      </div>

      <div className="flex min-w-[200px] flex-1 flex-col gap-3 rounded-xl p-6 border border-slate-200 bg-white">
        <div className="flex items-center gap-2 text-blue-800">
          <span className="material-symbols-outlined">child_care</span>
          <p className="text-slate-600 text-sm font-medium uppercase tracking-wider">
            Children Enrolled
          </p>
        </div>
        <p className="text-slate-900 tracking-tight text-xl font-bold leading-tight">
          40 Children (Ages 5-17)
        </p>
      </div>
    </div>
  );
};

export default CenterStats;