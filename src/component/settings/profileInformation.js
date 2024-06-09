import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SSRStorage from "../../services/storage";
import { request } from "../../services/utilities";
import { USER_COOKIE } from "../../services/constants";

const storage = new SSRStorage();

function ProfileInfoItem({ label, value }) {
  return (
    <>
      <div className="mt-6 ml-3.5 max-md:ml-2.5">{label}</div>
      <div className="mt-2.5 ml-3.5 text-neutral-500 max-md:ml-2.5">
        {value}
      </div>
    </>
  );
}

function ProfileInformation() {
  const [profileData, setProfileData] = useState([]);

  const fetchUser = async () => {
    const user = await storage.getItem(USER_COOKIE);
    const url = `user/single/${user.user._id}`;
    try {
      const rs = await request(url, "GET", true);
      const data = rs.data;
      setProfileData([
        { label: "First Name", value: data.firstName },
        { label: "Last Name", value: data.lastName },
        { label: "Email Address", value: data.email },
      ]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <section className="flex mt-10 flex-col items-start px-4 pt-6 pb-12 text-xs font-medium bg-white rounded-md shadow max-w-[495px] text-zinc-600">
      <h2 className="border-b-2 border-black-400  self-stretch text-sm text-neutral-700 max-md:max-w-full">
        Profile Information
      </h2>

      {profileData.map(({ label, value }) => (
        <ProfileInfoItem key={label} label={label} value={value} />
      ))}
      <Link to={"/edit-profile"}>
        <button className="justify-center px-2.5 py-1 mt-3.5 ml-3.5 text-sm font-semibold text-white bg-sky-600 rounded-md max-md:ml-2.5">
          Edit Account Info
        </button>
      </Link>
    </section>
  );
}

export default ProfileInformation;
