import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StaffProfileForm from "./components/StaffProfileForm";
import StaffProfileView from "./components/StaffProfileView";
import StaffProfileDetail from "./components/StaffProfileDetail";

function App() {
  return (
    <Router>
      <div className="min-h-screen p-6 bg-gray-100">
        <nav className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Staff Profiles</h1>
          <div className="space-x-4">
            <Link to="/" className="text-blue-600 hover:underline">
              View Profiles
            </Link>
            <Link to="/add" className="text-blue-600 hover:underline">
              Add Profile
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<StaffProfileView />} />
          <Route path="/add" element={<StaffProfileForm />} />
          <Route path="/profile/:id" element={<StaffProfileDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
