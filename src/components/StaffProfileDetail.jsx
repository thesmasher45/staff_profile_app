import { useParams, Link } from "react-router-dom";

function StaffProfileDetail() {
  const { id } = useParams();
  const profiles = JSON.parse(localStorage.getItem("staffProfiles") || "[]");
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) {
    return <p className="text-center text-gray-600">Profile not found.</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow rounded p-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Profile Details</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Position:</strong> {profile.position}</p>
      <div className="mt-4">
        <Link to="/" className="text-blue-600 hover:underline">← Back to Profiles</Link>
      </div>
    </div>
  );
}

export default StaffProfileDetail;
