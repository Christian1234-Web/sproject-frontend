import { ASSSESMENT_COOKIE, USER_COOKIE } from "../../services/constants";
import SSRStorage from "../../services/storage";
import { Link } from "react-router-dom";
const storage = new SSRStorage();

function Button({ imgSrc, text,click }) {
  return (
    <div className="flex mb-4 p-2 gap-2 py-3.5 text-sm font-medium bg-white rounded-md shadow text-neutral-700 max-md:flex-wrap" onClick={click}>
      <img src={imgSrc} alt="" className="shrink-0 w-6 aspect-square" />
      <div className="flex-auto my-auto max-md:max-w-full">{text}</div>
    </div>
  );
}

function ProfileButton() {

  const handleLogout = () => {
    storage.removeItem(USER_COOKIE);
    storage.removeItem(ASSSESMENT_COOKIE);
    window.location.href = '/signin'
  };
  const profileButtons = [
    {
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/aa30ba8a5398c10708a180f48d1e5c49e354debc442be97bb318bc0f4f34e306?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      text: "Log out",
      link: "#",
      click: handleLogout,
    },
  ];

  return (
    <div>
      {profileButtons.map((button, index) => (
        <Link to={`${button.link}`} className="no-underline" key={index}>
          <Button key={index} imgSrc={button.imgSrc} text={button.text} click={button.click} />
        </Link>
      ))}
    </div>
  );
}

export default ProfileButton;
