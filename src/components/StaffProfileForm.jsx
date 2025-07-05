import { useState } from "react";

function StaffProfileForm() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState({
    email2FA: false,
    profilePhoto: "",
    staffCode: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthday: "",
    email: "",
    phone: "",
    workplace: "",
    status: "",
    jobPosition: "",
    directManager: "",
    role: "",
    academicLevel: "",
    hourlyRate: "",
    defaultLanguage: "",
    direction: "",
    emailSignature: "",
    otherInfo: "",
    twilioPhone: "",
    isTwilioWhatsApp: false,
    password: "",
    domicile: "",
    maritalStatus: "",
    currentAddress: "",
    nation: "",
    placeOfBirth: "",
    religion: "",
    citizenId: "",
    dateOfIssue: "",
    placeOfIssue: "",
    resident: "",
    bankAccountNumber: "",
    bankAccountName: "",
    bankName: "",
    personalTaxCode: "",
    efpNo: "",
    socialSecurityNo: "",
    facebook: "",
    linkedin: "",
    skype: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          [name]: reader.result,
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setProfileData({
        ...profileData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Profile Data:", profileData);
  };

  const profileFields = [
    "staffCode",
    "firstName",
    "lastName",
    "gender",
    "birthday",
    "email",
    "phone",
    "workplace",
    "status",
    "jobPosition",
    "directManager",
    "role",
    "academicLevel",
    "hourlyRate",
    "defaultLanguage",
    "direction",
    "emailSignature",
    "otherInfo",
    "twilioPhone",
    "password",
  ];

  const relatedFields = [
    "domicile",
    "maritalStatus",
    "currentAddress",
    "nation",
    "placeOfBirth",
    "religion",
    "citizenId",
    "dateOfIssue",
    "placeOfIssue",
    "resident",
    "bankAccountNumber",
    "bankAccountName",
    "bankName",
    "personalTaxCode",
    "efpNo",
    "socialSecurityNo",
    "facebook",
    "linkedin",
    "skype",
  ];

  const dropdownFields = [
    "gender",
    "status",
    "role",
    "academicLevel",
    "defaultLanguage",
    "direction",
    "maritalStatus",
    "nation",
    "religion",
  ];

  const dropdownOptions = {
    gender: ["Male", "Female", "Other"],
    status: ["Active", "Inactive", "Probation"],
    role: ["Admin", "Manager", "Employee"],
    academicLevel: ["High School", "Bachelor's", "Master's", "Doctorate"],
    defaultLanguage: ["English", "Spanish", "French", "German"],
    direction: ["LTR", "RTL"],
    maritalStatus: ["Single", "Married", "Divorced", "Widowed"],
    nation: ["USA", "India", "UK", "Canada", "Australia"],
    religion: ["None", "Christianity", "Islam", "Hinduism", "Buddhism"],
  };
  const dateFields = ["birthday", "dateOfIssue"];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Staff Profile</h2>
      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          className={`py-2 px-4 rounded ${
            activeTab === "profile"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          type="button"
          className={`py-2 px-4 rounded ${
            activeTab === "related"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setActiveTab("related")}
        >
          Related Information
        </button>
      </div>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              name="email2FA"
              checked={profileData.email2FA}
              onChange={handleChange}
              className="w-5 h-5"
            />
            <label className="text-gray-700">
              Enable Email Two-Factor Authentication
            </label>
          </div>

          {activeTab === "profile" && (
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Profile Photo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  name="profilePhoto"
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
                />
              </div>
              {profileData.profilePhoto && (
                <img
                  src={profileData.profilePhoto}
                  alt="Profile Preview"
                  className="w-24 h-24 rounded-full object-cover border"
                />
              )}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(activeTab === "profile" ? profileFields : relatedFields).map(
              (key) => (
                <div key={key}>
                  <label className="block text-gray-700 mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  {dropdownFields.includes(key) ? (
                    <select
                      name={key}
                      value={profileData[key]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
                    >
                      <option value="">Select</option>
                      {dropdownOptions[key].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : dateFields.includes(key) ? (
                    <input
                      type="date"
                      name={key}
                      value={profileData[key]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
                    />
                  ) : (
                    <input
                      type={key === "password" ? "password" : "text"}
                      name={key}
                      value={profileData[key]}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-400"
                    />
                  )}
                </div>
              )
            )}
            {activeTab === "profile" && (
              <div className="col-span-2">
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    name="isTwilioWhatsApp"
                    checked={profileData.isTwilioWhatsApp}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <label className="text-gray-700">
                    Is Twilio Number WhatsApp Enabled
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 shadow-md"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}

export default StaffProfileForm;
