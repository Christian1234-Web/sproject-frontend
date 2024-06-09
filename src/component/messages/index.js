import React from "react";
import Chat from "./chats";

const index = () => {
  return (
    <>
      <main className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:max-w-full">
          <section className="flex flex-col mt-3 ml-10 max-w-full w-full">
            <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
              Chats
            </h1>
            <p className="text-xs text-zinc-500 max-md:max-w-full">
              View your messages here
            </p>
            <br/>
            <Chat />
           
          </section>
        </div>
      </main>
    </>
  );
};

export default index;
