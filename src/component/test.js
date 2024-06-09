import Header from '../component/shared/header'
import Sidebar from '../component/shared/sidebar'
import Applicationcomponent from '../component/application'
import React, { useState } from "react";
import { Link } from "react-router-dom";


const MenuItem = ({ icon, label, link }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    }
  };

  return (
    <Link
      to={`/${link}`}
      className={`no-underline ${clicked ? 'text-blue-500' : 'text-zinc-500'}`}
      onClick={handleClick}
    >
      <div className="flex gap-1 justify-center mt-7 whitespace-nowrap">
        <img
          loading="lazy"
          src={icon}
          alt={label}
          className="w-6 h-6 aspect-square"
        />
        <div className="my-auto">{label}</div>
      </div>
    </Link>
  );
};

const menuItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/968f84192865fa5e022d323c121e95565c7abc02957fa050c01274c6cbb1a27b?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    label: "Dashboard",
    link: "dashboard",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bedefbfb2282ce4ba218e913528bc8affef88ba85a63c6e8c23a0d064c9eff25?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    label: "Jobs",
    link:"jobs"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/618d8faa367fa461670e88cfdec7d884f6897baf56e819c4b1b377fcc0c2a13d?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    label: "Applications",
    link: "applications",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/990a7ae969089aad184021ae6f7a9a05f67c58c34783260bfabde74914489a41?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    label: "Messages",
    link: "messages#",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/579fb9e7165571bb7617798114c85f4baf5b67e62713c4ed10531029b31d337b?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    label: "Self Assessment",
    link: "self-assesment",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90b5501965fdc47b2ce05f0f1ce3d918b6c3b28966264dae1520c34afb3635c5?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    label: "Workshop",
    link: "workshop",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9489c080167e29097adef18e5b08dd663f1c5eed8604e7843c3c7158f32c64e2?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    label: "Settings",
    link: "settings",
  },
];

const Sidebar = () => {
  return (
    <>
      <nav className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-start px-3 py-6 mx-auto w-full text-sm leading-7 bg-white shadow-sm text-stone-500 max-md:pr-5">
          <div className="flex gap-0 pb-2 text-xl font-semibold leading-7 text-sky-600 whitespace-nowrap">
           <div>
           <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63ac0df1c28413bd8103764d8835fe6c7fe9b4cac8ff5d1c1c97766965b0225?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
              alt="CareerGuide Logo"
              className="shrink-0 self-start w-5 aspect-[0.91]"
            />
            <div className="flex-auto">CareerGuide</div>
           </div>
           <div>
           </div>
          </div>
          {menuItems.map((item) => (
            <MenuItem key={item.label} icon={item.icon} label={item.label} link={item.link} />
          ))}
        </div>
      </nav>
    </>
  );
};

function SearchInput() {
  return (
    <div className="flex gap-1 px-3 py-2.5 bg-white rounded-md border border-solid border-zinc-300" style={{width:"100%"}}>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6669e310b7c2fa599e9e94895bb225dffa1a29468d109bc5d04b5d02d7492ab?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="" className="shrink-0 w-3.5 aspect-square" />
     <input className="focus:outline-none hover:outline-none flex-auto my-auto" placeholder="Search" />
    </div>
  );
}

function Header({title}) {
  const [profileImage,setProfileImage] = useState('')
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
  useEffect(() => {
    fetchUserProfile();
  }, []);
  return (
    <header className="flex gap-5 justify-between px-6 py-3.5 bg-white shadow-sm max-md:flex-wrap max-md:pr-5">
      <div className="flex gap-5 justify-between my-auto text-xs font-medium whitespace-nowrap text-neutral-400">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1064492a5bb6d8e14b7633ea5b703c2aa92edb92e0fc1c9f438eeb394473dc5?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="" className="shrink-0 my-auto w-6 aspect-square" />
        <h1 className="py-2.5 text-sm">{title}</h1>
       
        <SearchInput />
      </div>
      <div className="flex gap-5">
        <img loading="lazy" style={{cursor:"pointer"}} src={profileImage} alt="" className="shrink-0 rounded-full aspect-square w-[38px]" />
        <img loading="lazy" style={{cursor:"pointer"}}  src="https://cdn.builder.io/api/v1/image/assets/TEMP/174015465085f7fd4510867b2a24c70991a8c4b2c1a43daf0e8f459c3e09c243?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="" className="shrink-0 my-auto w-6 aspect-square" />
      </div>
    </header>
  );
}

const Application = () => {
  return (
    <>
       <div className="bg-slate-50">
      <div className="flex max-md:flex-col max-md:gap-0">
        <Sidebar />
        <div className="flex flex-col w-[100%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <Header title={'Application'} />
            <Applicationcomponent />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Application



