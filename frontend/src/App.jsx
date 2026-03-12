import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";

export default function App() {

  return (
    <div className="min-h-screen bg-gray-100">

      <Employees />

      <div className="max-w-4xl mx-auto p-6">
        <Attendance />
      </div>

    </div>
  );
}