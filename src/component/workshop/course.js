import * as React from "react";

function Tag({ children }) {
  return (
    <div className="justify-center px-2.5 py-2 rounded-2xl bg-neutral-200">
      {children}
    </div>
  );
}

function Avatar({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="shrink-0 aspect-square w-[22px]"
    />
  );
}

function Course({courses}) {
  const tags = ["Reactjs", "Phyton", "CC+", "Javascript"];
  const avatars = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c91314c5dac83f25df7554718eeb7ab418d0d61e30ebbd9c1e7195a8499211f8?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      alt: "Avatar 1",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb31e2724e0fb6852955ba9e9dc65364556fc89d4d8701434de72e6136807d89?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      alt: "Avatar 2",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb31e2724e0fb6852955ba9e9dc65364556fc89d4d8701434de72e6136807d89?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      alt: "Avatar 3",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb31e2724e0fb6852955ba9e9dc65364556fc89d4d8701434de72e6136807d89?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      alt: "Avatar 4",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a8aa87c9d99d21a1bb703125d4a76af2f51481d8720c70a02b9194e476a66e9e?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
      alt: "Avatar 5",
    },
  ];

  return (
    <div className="flex gap-4 flex-wrap ">
      {courses.map(e=>{
        return(
          <article className="flex ga flex-col px-5 pt-2.5 pb-5 bg-white rounded-md shadow max-w-[469px]">
          <img
            loading="lazy"
            src={e.image}
            alt="Figma masterclass crash course"
            className="w-full aspect-[3.45]"
          />
          <h2 className="mt-6 text-sm font-medium text-zinc-700">
          {e.title}
          </h2>
          <p className="mt-2 text-xs text-neutral-500">Design freak</p>
          <div className="flex gap-1.5 mt-2 text-xs whitespace-nowrap text-stone-500">
            {e.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
          <div className="flex gap-0 self-start mt-2.5">
            {avatars.map(({ src, alt }, index) => (
              <Avatar key={index} src={src} alt={alt} />
            ))}
          </div>
          <br />
          <hr />
          <a href={e.link} target="_blank" className="justify-center no-underline text-center px-2.5 py-1 mt-5 text-base font-medium text-white bg-sky-600 rounded-md">
            Get Access
          </a>
        </article>
        )
      })}
    
    </div>
  );
}
export default Course;
