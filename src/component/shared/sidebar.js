import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toogleImage from "../../images/menu.jpg"



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
  // {
  //   icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/990a7ae969089aad184021ae6f7a9a05f67c58c34783260bfabde74914489a41?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
  //   label: "Messages",
  //   link: "messages#",
  // },
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
  const [show,setShow] = useState(false);
  const [icon,setIcon] = useState(false);


  const toggleMenu = () => {
  setShow(!show);
  } 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShow(false);
        setIcon(true);

      } else {
        setShow(true);
        setIcon(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <nav className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-start px-3 py-6 mx-auto w-full text-sm leading-7 bg-white shadow-sm text-stone-500 max-md:pr-5">
          <div className="flex gap-0 pb-2 justify-between w-full text-xl font-semibold leading-7 text-sky-600 whitespace-nowrap">
           <div className="flex">
           <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d63ac0df1c28413bd8103764d8835fe6c7fe9b4cac8ff5d1c1c97766965b0225?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
              alt="CareerGuide Logo"
              className="shrink-0 self-start w-5 aspect-[0.91]"
            />
            <div className="flex-auto">CareerGuide</div>
           </div>
           {icon&&(
            <div id="sm-toogle-div" onClick={toggleMenu}>
            <img src={toogleImage} alt='toggle'/>
            </div>
           )}
          </div>
            
        {show && <>
          {menuItems.map((item) => (
            <MenuItem key={item.label} icon={item.icon} label={item.label} link={item.link} />
          ))}
          </>}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;



