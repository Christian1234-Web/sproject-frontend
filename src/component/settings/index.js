import React from "react";
import ProfileInformation from "./profileInformation";
import ProfileButton from "./profileButton";

const index = () => {
  return (
    <>
      <main className="flex flex-col px-4 w-[82%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:max-w-full">
          <section className="flex flex-col mt-3 max-w-full w-[495px]">
            <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
              Settings
            </h1>
            <p className="text-xs text-zinc-500 max-md:max-w-full">
              Manage your account here
            </p>
            <ProfileInformation />
            <br/>
            <ProfileButton/>
          </section>
        </div>
      </main>
    </>
  );
};

export default index;
