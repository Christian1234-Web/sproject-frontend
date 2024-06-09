import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Jobs from "./jobs";
import SSRStorage from "../../services/storage";
import { USER_COOKIE } from "../../services/constants";
import { request } from "../../services/utilities";

const storage = new SSRStorage();

function StatisticCard({ src, alt, title, value }) {
  return (
    <div className="flex flex-col grow px-3.5 py-2 w-full bg-white rounded-xl shadow max-md:mt-7">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="aspect-square w-[33px]"
      />
      <div className="mt-4 text-base font-medium text-stone-500">{title}</div>
      <div className="mt-5 text-2xl font-semibold text-zinc-800">{value}</div>
    </div>
  );
}


function ProfileStep({ children ,isChecked}) {
  return (
    <div className="flex gap-2.5 mt-4 items-ceter text-sm font-medium text-neutral-500">
      <div className="flex gap-1.5  text-xs text-zinc-500">
        <input
          id="0"
          type="checkbox"
          name="radio"
          checked={isChecked}
          // onClick={(e) => uncheckOthers(e.target)}
          className="shrink-0  border border-solid border-zinc-400 h-[20px] w-[20px] mt-0"
          style={{ borderRadius: "20px" }}
        />
      </div>
      <div className="flex-auto my-auto">{children}</div>
    </div>
  );
}

function App() {
  const [user, setUser] = useState(null);
  const [jobs,setJobs] = useState([]);
  const [profile,setProfile] = useState(null);
  const [textStep,setTexxtStep] = useState('');
  const [strength,setStrength] = useState('');
  const [width,setWidth] = useState('')
  const [appliedJobs,setAppliedJobs] = useState([])
  const navigate = useNavigate()

const fetchJobs = async () => {
  const url = `job/all`;
  try {
    const rs = await request(url, "GET", true);
    setJobs(rs.data);

  } catch (err) {
    console.log(err);
  }
};

const fetchAppliedJobs = async () => {
  const user = await storage.getItem(USER_COOKIE);
  const url = `application/user/${user.user._id}`;
  try {
    const rs = await request(url, "GET", true);
    setAppliedJobs(rs.data);

  } catch (err) {
    console.log(err);
  }
};

const fetchUserProfile = async () => {
  const user = await storage.getItem(USER_COOKIE);

  const url = `profile/user/${user.user._id}`;
  try {
    const rs = await request(url, "GET", true);

    if (rs.status === "SUCCESS") {
      setProfile(rs.data);
      if(rs.data.isStepTwoComplete === true && rs.data.isStepTwoComplete === true && rs.data.isStepThreeComplete === true && rs.data.isStepFourComplete === true && rs.data.isStepFiveComplete === true){
        setWidth('250px')
        setTexxtStep('Update');
        setStrength('strong');
      }else{
        setWidth('155px')
        setTexxtStep("Complete");
        setStrength('fair');
      }
    }
  } catch (err) {
    console.log(err);
  }
};
  
  useEffect(() => {
    async function getLoggedUser() {
      const user = await storage.getItem(USER_COOKIE);
      if(!user) return navigate('/')
      setUser(user.user);
    }
    getLoggedUser();
    fetchJobs();
    fetchAppliedJobs()
    fetchUserProfile();
  },[]);


  return (
    <div className="bg-slate-50">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <main className="flex flex-col ml-5 w-[90%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col px-12 mt-5 max-md:px-5 max-md:max-w-full">
            <div className="text-xl font-medium text-zinc-800 max-md:max-w-full capitalize">
              Good day {user?.fullname}!
            </div>
            <div className="mt-1 text-base text-zinc-500 max-md:max-w-full">
              Welcome back to careerguide
            </div>
            <div className="mt-3.5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <section className="flex flex-col w-[72%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-4 max-md:mt-10 max-md:max-w-full">
                    <div className="max-md:max-w-full">
                      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <StatisticCard
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d2bfb4810f1d5a7c26af59826d24517fd3f73d8fe4f424ccd68643498483a00?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                          alt="Recent Connections icon"
                          title="Total Jobs"
                          value={jobs?.length}
                        />
                        <StatisticCard
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcd0b5fedaab60a17b6d53f92a69c9d327b55ec8e1da562ea310a79ffcbb2555?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                          alt="Total Interviews icon"
                          title="Total Applied Jobs"
                          value={appliedJobs?.length}
                        />
                        {/* <StatisticCard
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8528a540aa752676a4422feadeb228a0f33ced900d2309864f572625ceade832?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                          alt="Scheduled Interviews icon"
                          title="Scheduled Interviews"
                          value="32"
                        /> */}
                      </div>
                    </div>
                    <div className="mt-7 mb-3 text-sm font-medium text-neutral-600 max-md:max-w-full">
                      Jobs for you
                    </div>
                    <Jobs jobs={jobs} />
                  </div>
                </section>
                <aside className="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col px-3.5 pt-2.5 pb-6 mx-auto w-full bg-white rounded-xl shadow max-md:mt-10">
                    <div className="flex gap-5">
                      <div className="flex-auto text-base font-semibold text-neutral-600">
                        Profile Strength
                      </div>
                      <div className="text-sm font-medium text-stone-500">
                        {strength}
                      </div>
                    </div>
                    <div className="flex gap-0 px-0.5 mt-3.5 max-md:mr-1.5">
                    <div className={`shrink-0 h-2.5 bg-sky-600 rounded-xl w-[${width}]`} />
                      {strength !== "strong" && <div className="shrink-0 h-2.5 rounded-none bg-sky-600 bg-opacity-30 w-[155px]" /> }
                      
                    </div>
                    <ProfileStep isChecked={profile?.isStepOneComplete}>Complete basic profile info</ProfileStep>
                    <ProfileStep isChecked={profile?.isStepTwoComplete}>Add resume and cover letter</ProfileStep>
                    <ProfileStep isChecked={profile?.isStepThreeComplete}>Add previous work experience</ProfileStep>
                    <ProfileStep isChecked={profile?.isStepFourComplete}>Add education history</ProfileStep>
                    <ProfileStep isChecked={profile?.isStepFiveComplete}>Add top skills and certificates</ProfileStep>

                    <Link to="/steps">
                      <div className="justify-center text-center px-9 py-2 mt-7 mr-3.5 ml-4 text-base font-semibold text-white bg-sky-700 rounded-lg max-md:px-5 max-md:mx-2.5">
                        {textStep} Profile
                      </div>
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
