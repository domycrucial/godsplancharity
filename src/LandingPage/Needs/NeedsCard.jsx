
const NeedCard = ({ need }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white hover:border-blue-800 transition-colors cursor-pointer group">
      <div className="h-48 overflow-hidden relative rounded-t-2xl">
        <img
          alt={need.title}
          className="w-full h-full object-cover"
          src={need.image}
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="p-3 bg-blue-200 rounded-xl text-blue-800">
            <span className="material-symbols-outlined text-3xl">{need.icon}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">location_on</span>
              {need.location}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold">{need.title}</h3>
          <p className="text-xs font-medium text-blue-800 mb-2">
            Supports {need.childrenSupported} Children
          </p>
          <p className="text-sm text-slate-500 mb-4">{need.description}</p>

          <ul className="text-xs text-slate-500 space-y-1 mb-4">
            {need.items.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-800 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="w-full bg-slate-200 h-2 rounded-full mt-2">
          <div
            className="bg-blue-800 h-2 rounded-full"
            style={{ width: `${need.percentage}%` }}
          ></div>
        </div>
        <p className="text-xs font-bold text-blue-800">{need.percentage}% Collected</p>
      </div> */}
    </div>
    </div>
  );
};

export default NeedCard;