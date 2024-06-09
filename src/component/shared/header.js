import { useEffect, useState } from "react";
import SSRStorage from "../../services/storage";
import { USER_COOKIE } from "../../services/constants";
import logOutImage from "../../images/logout.png";
import { request } from "../../services/utilities";
const storage = new SSRStorage();

function SearchInput() {
  return (
    <div
      className="flex gap-1 px-3 py-2.5 bg-white rounded-md border border-solid border-zinc-300"
      style={{ width: "100%" }}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6669e310b7c2fa599e9e94895bb225dffa1a29468d109bc5d04b5d02d7492ab?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
        alt=""
        className="shrink-0 w-3.5 aspect-square"
      />
      <input
        className="focus:outline-none hover:outline-none flex-auto my-auto"
        placeholder="Search"
      />
    </div>
  );
}

function Header({ title }) {
  const [profileImage, setProfileImage] = useState("");
  const [show, setShow] = useState(false);

  const fetchUserProfile = async () => {
    const user = await storage.getItem(USER_COOKIE);

    const url = `profile/user/${user.user._id}`;
    try {
      const rs = await request(url, "GET", true);

      if (rs.status === "SUCCESS") {
        const e = rs.data;
        setProfileImage(e.profilePic);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleLogout = () => {
    storage.removeItem();
    window.location.href = '/signin'
  };
  useEffect(() => {
    fetchUserProfile();
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className="flex gap-5 justify-between px-6 py-3.5 bg-white shadow-sm">
      {show && (
        <div className="flex gap-5 justify-between my-auto text-xs font-medium whitespace-nowrap text-neutral-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1064492a5bb6d8e14b7633ea5b703c2aa92edb92e0fc1c9f438eeb394473dc5?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
            alt=""
            className="shrink-0 my-auto w-6 aspect-square"
          />
          <h1 className="py-2.5 text-sm">{title}</h1>

          <SearchInput />
        </div>
      )}
      <div className="flex gap-5">
        <img
          loading="lazy"
          style={{ cursor: "pointer" }}
          src={profileImage}
          alt=""
          className="shrink-0 rounded-full aspect-square w-[38px]"
        />
        {/* <img
          loading="lazy"
          style={{ cursor: "pointer" }}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/174015465085f7fd4510867b2a24c70991a8c4b2c1a43daf0e8f459c3e09c243?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
          alt=""
          className="shrink-0 my-auto w-6 aspect-square"
        /> */}
        <img
          onClick={handleLogout}
          className="shrink-0 my-auto w-6 aspect-square"
          src={logOutImage}
          alt="logout"
        />
      </div>
    </header>
  );
}
export default Header;
