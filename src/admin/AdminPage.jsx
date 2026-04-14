import AlertBar from "../LandingPage/AlertBar/Alert";
import Navbar from "../LandingPage/Navbar/Navbar";
import AttendeesTable from "./AttendanceTable/AttendanceTable";
import EventTitle from "./EventTitle/EventTitle";
import SearchFilters from "./SearchFilter/SearchFilter";


const EventAttendees = () => {
  return (
    <div className="bg-background-light font-display text-slate-900">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <AlertBar />
          <Navbar />
          <main className="flex flex-1 flex-col px-6 md:px-10 py-8 max-w-7xl mx-auto w-full">
            <EventTitle />
            <SearchFilters />
            <AttendeesTable />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EventAttendees;