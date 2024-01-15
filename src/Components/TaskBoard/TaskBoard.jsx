import TaskAction from "./TaskAction";
import TaskSearch from "./TaskSearch";
import TaskTable from "./TaskTable";

export default function TaskBoard() {
  return (
    <section
      className="mb-20 text-white max-w-7xl rounded-md mx-auto"
      id="tasks"
    >
      <div className="container">
        <TaskSearch />
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            {/* Task action button */}
          <TaskAction />
          {/* Task table */}
          <TaskTable />
        </div>
      </div>
    </section>
  );
}
