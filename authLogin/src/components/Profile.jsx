import React, { useState } from "react";
import axios from "axios";
const Profile = () => {
  const [userData, setUserData] = useState();
  const getProfileData = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        setUserData(res.data);
        console.log("Profile data", res);
      })
      .catch((err) => {
        console.log("You are not logged in");
        console.log("Error", err);
      });
  };
  const handleLogout = () => {
    setUserData();
    localStorage.removeItem("token");
    alert("Log out success");
  };
  return (
    <div>
      <button
        className="bg-blue-400 text-white px-3 py-1 mr-2"
        onClick={getProfileData}
      >
        Get Profile Data
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1"
      >
        Logout
      </button>
      {userData && (
        <div>
          <p>Name:{userData?.name || "N/A"}</p>
          <p>Email:{userData?.email || "N/A"}</p>
          <p>Role:{userData?.role || "N/A"}</p>
          <img
            src={userData?.avatar}
            className="rounded-full h-20 w-20"
            alt="Avatar"
          />
        </div>
      )}
    </div>
  );
};

export default Profile;
