import React, { useEffect, useState } from "react";
import SSRStorage from "../../services/storage";
import { request } from "../../services/utilities";
import { USER_COOKIE } from "../../services/constants";
import { Notyf } from "notyf";
import { Spinner } from "reactstrap";
const storage = new SSRStorage();
const notyf = new Notyf();

const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdateUserProfile = async () => {
    const user = await storage.getItem(USER_COOKIE);
    const data = { firstName, lastName, email, dateOfBirth };
    const url = `user/update/${user.user._id}`;
    setLoading(true);
    try {
      const rs = await request(url, "PUT", true, data);
      setLoading(false);

      notyf.success("Profile Updated Successfully");
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchUser = async () => {
    const user = await storage.getItem(USER_COOKIE);
    const url = `user/single/${user.user._id}`;
    try {
      const rs = await request(url, "GET", true);
      const data = rs.data;
      setFirstName(data.firstName);
      setLastName(data.lastName);
      setEmail(data.email);
      const dobDate = new Date(data.dateOfBirth);
      const formattedDateOfBirth = dobDate.toISOString().split("T")[0];
      setDateOfBirth(formattedDateOfBirth);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      <main className="flex flex-col self-center px-5 mt-3 max-w-full font-medium w-[866px] h-[100vh]">
        <h2 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
          Personal Information
        </h2>
        <p className="mt-2 text-xs text-zinc-500 max-md:max-w-full">
          Edit your personal information here
        </p>
        <div className="flex gap-5 mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 text-sm text-zinc-500">
            <div>FirstName</div>
            <div className="justify-center items-start pl-2 py-3 mt-2 text-xs whitespace-nowrap rounded-md border border-solid border-zinc-400 text-neutral-600 max-md:pr-5">
              <input
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="focus:outline-none bg-transparent hover:outline-none flex-auto w-full my-auto"
                placeholder={"enter firstname"}
              />
            </div>
          </div>

          <div className="flex flex-col flex-1 text-sm text-zinc-500">
            <div>{"lastName"}</div>
            <div className="justify-center items-start pl-2 py-3 mt-2 text-xs whitespace-nowrap rounded-md border border-solid border-zinc-400 text-neutral-600 max-md:pr-5">
              <input
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="focus:outline-none bg-transparent hover:outline-none flex-auto w-full my-auto"
                placeholder={"enter lastname"}
              />
            </div>
          </div>
        </div>
        <div className="justify-center items-start  pl-2 py-3 mt-2 text-xs whitespace-nowrap rounded-md border border-solid border-zinc-400 text-zinc-600 max-md:pr-5 max-md:max-w-full">
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="focus:outline-none bg-transparent w-full hover:outline-none flex-auto my-auto"
            placeholder={"enter email"}
          />
        </div>
        <div className="mt-5 text-sm text-zinc-500 max-md:max-w-full">
          Date of birth
        </div>
        <div className="justify-center items-start py-3 pl-2 mt-2 text-xs whitespace-nowrap rounded-md border border-solid border-zinc-400 text-zinc-600 max-md:pr-5 max-md:max-w-full">
          <input
            type="date"
            className="focus:outline-none bg-transparent w-full  hover:outline-none flex-auto my-auto"
            onChange={(e) => setDateOfBirth(e.target.value)}
            value={dateOfBirth}
            // placeholder={'09-9-2000'}
          />
        </div>
        <div className="flex justify-between items-center">
          <div>{loading && <Spinner color="primary" />}</div>
          <button
            className="justify-center self-end px-2.5 py-2 mt-10 text-sm font-semibold text-white rounded-md bg-sky-700"
            onClick={handleUpdateUserProfile}
            type="button"
          >
            Edit Account Info
          </button>
        </div>
      </main>
    </>
  );
};

export default EditProfile;
