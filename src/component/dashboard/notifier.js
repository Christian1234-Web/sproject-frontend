import * as React from "react";

function Notifier() {
  return (
    <section className="flex flex-col items-center px-16 pt-3.5 pb-6 text-sm rounded-lg bg-amber-300 bg-opacity-10 max-w-[987px] max-md:px-5">
      <article className="flex flex-col max-w-full w-[603px]">
        <h1 className="self-center font-semibold text-amber-600">
          More Information Needed!
        </h1>
        <p className="mt-3 text-center text-orange-400 max-md:max-w-full">
          To proceed, we request you complete your profile. Completing your profile is necessary to ensure you have adequate visibility to global employers on the platform.
        </p>
      </article>
    </section>
  );
}

export default Notifier;