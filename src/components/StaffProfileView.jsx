import { Link } from "react-router-dom";

function StaffProfileView() {
  const profiles = JSON.parse(localStorage.getItem("staffProfiles") || "[]");

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Staff Profiles</h2>
      {profiles.length === 0 ? (
        <p className="text-gray-600">No profiles found.</p>
      ) : (
        <ul className="space-y-4">
          {profiles.map((profile) => (
            <li
              key={profile.id}
              className="bg-white shadow rounded p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{profile.name}</h3>
                <p className="text-gray-600">{profile.position}</p>
              </div>
              <Link
                to={`/profile/${profile.id}`}
                className="text-blue-600 hover:underline"
              >
                View
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StaffProfileView;
